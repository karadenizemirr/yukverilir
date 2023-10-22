"use client"
import { store } from '@/redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalendarAlt, faPhoneAlt, faInfoCircle, faCalendarWeek, faCarAlt, faCaravan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { redirect } from 'next/navigation';
import React, { useEffect } from "react";
import { format } from 'date-fns';
import tr from 'date-fns/locale/tr';
import Link from 'next/link';
import Image from 'next/image';
import { fetchDetail } from '@/redux/store/detail.state';
import Swal from 'sweetalert2';
import { getDistance } from '@/lib/google.maps';

export default function SearchContainer() {
    try {
        return Search()
    } catch (err) {
        Swal.fire({
            title: 'Bilgilendirme',
            text: 'Arama sonuçları sıfırlandı. Lütfen tekrar arama yapınız.',
            icon: 'info',
            confirmButtonText: 'Tamam',
            confirmButtonColor: '#3085d6',
        })
        redirect('/')
    }
}

function Search() {
    const data = store.getState()
    const vehicles: any = data.advertReducer.advert


    const handleDetail = (id: any, category: any) => {
        const data = {
            id: id,
            category: category
        }
        store.dispatch(fetchDetail(data))
    }

    const handleDistance = async (where:string, to:string) => {
        const distance = await getDistance(where, to)
        return distance
    }
    return (
        <div className="result-container grid grid.cols-1 sm:grid-cols-2 gap-5 mt-10 " >
            {
                vehicles?.map((item: any, index: number) => (
                    <div className="result-card border shadow-sm rounded-lg p-4" key={index}>
                        <div className="topbar grid grid-cols-4">
                            <div className="content flex flex-1 justify-around">
                                <div className="title-col flex items-center gap-3">
                                    <Image src="/images/icons/shipment.png" alt="" width={35} height={35} />
                                    <h1 className="font-black uppercase" >
                                        {item.name}
                                    </h1>
                                </div>
                                <div className="where flex items-center uppercase">
                                    {item.where[0]?.coordinates?.country}
                                </div>
                                <div className="icon flex items-center">
                                    <span className="text-gray-100 text-sm" >
                                        {
                                            handleDistance(item.where[0]?.coordinates?.country, item.to[0]?.coordinates?.country)
                                        }
                                    </span>
                                </div>
                                <div className="to flex items-center uppercase">
                                    {item.to[0]?.coordinates?.country}
                                </div>
                            </div>
                        </div>
                        <div className="tagbar mt-4 border-t-2">
                            <ul className='flex flex-col sm:flex-row justify-center text-center flex-1 gap-4 sm:justify-around p-2' >
                                <li className='flex items-center text-gray-500' >
                                    <FontAwesomeIcon icon={faCalendarAlt} className="text-gray-400 mr-2 ml2" />
                                    <span className='ml-2' >
                                        Bitiş T.: {format(new Date(item.delivired_date), 'dd/MM/yyyy', { locale: tr })}
                                    </span>
                                </li>
                                <li className='flex items-center text-gray-500' >
                                    <FontAwesomeIcon icon={faCalendarWeek} className="text-gray-400 mr-2 ml-2" />
                                    <span className='ml-2' >Eklenme T.:{format(new Date(item?.created_at), 'dd/MM/yyyy', { locale: tr })} </span>
                                </li>
                                <li className='flex items-center text-gray-500' >
                                    <FontAwesomeIcon icon={faCarAlt} className="text-gray-400 mr-2 ml-2" />
                                    <span className='ml-2' >Araç Tipi:{item.vehicles_type} </span>
                                </li>
                                <li className='flex items-center text-gray-500' >
                                    <FontAwesomeIcon icon={faCaravan} className="text-gray-400 mr-2 ml-2" />
                                    <span className='ml-2' >Kasa Tipi:{item.vehicles_case} </span>
                                </li>
                            </ul>
                        </div>
                        <div className="footer mt-4 border-t-2">
                            <ul className='flex gap-7 p-2 mx-auto' >
                                <li className='text-blue-500' >
                                    <Link href={`/search/${item?.id}`} onClick={() => handleDetail(item?.id, item?.category)} >
                                        <FontAwesomeIcon icon={faInfoCircle} /> Detaylar
                                    </Link>
                                </li>
                                <li className='text-blue-500' >
                                    <Link href={`tel:+90${item?.phone}`} >
                                        <FontAwesomeIcon icon={faPhoneAlt} /> İlan Sahibini Ara
                                    </Link>
                                </li>
                                <li className='flex flex-1 justify-end font-italic' >
                                    {item.user.name}&nbsp;{item.user.surname}
                                </li>
                            </ul>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}