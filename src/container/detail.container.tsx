"use client"
import MapsComponent from "@/components/maps/maps.component";
import { store } from "@/redux";
import { faBasketShopping, faCalendar, faPerson, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons/faCalendarAlt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Metadata } from "next";
import React from "react";
import { format } from 'date-fns';
import tr from 'date-fns/locale/tr';
import Link from "next/link";
import { redirect } from "next/navigation";

export const meta:Metadata = {
    title: 'Detay',
}

export default function DetailContainer(){
    try{
        return Detail()
    }catch(err){
        redirect('/')
    }
}


function Detail() {
    const detail: any = store.getState().detailReducer.detail
    console.log(detail)
    
    const destination = {
        lat:parseFloat(detail?.to[0]?.coordinates.lat),
        lng:parseFloat(detail?.to[0]?.coordinates.lng)
    }

    const origin = {
        lat:parseFloat(detail?.where[0]?.coordinates.lat),
        lng:parseFloat(detail?.where[0]?.coordinates.lng)
    }

    console.log(origin, destination)
    return (
        <div className="container mx-auto" >
            <div className="title text-center mb-10">
                <h1 className="text-4xl font-bold" >
                    {detail?.name}
                </h1>
            </div>
            <div className="topbar mb-7">
                <ul className="flex flex-1 justify-between items-center gap-10" >
                    <li >
                        <FontAwesomeIcon icon={faCalendar} />İlan Eklenme Tarihi: {format(new Date(detail?.created_at), 'dd/MM/yyyy', { locale: tr })}
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCalendarAlt} />Bitiş Tarihi: {format(new Date(detail?.delivired_date), 'dd/MM/yyyy', { locale: tr })}
                    </li>
                    <li className="uppercase">
                        <FontAwesomeIcon icon={faPerson} /> <span className="uppercase" >{detail.user.name}&nbsp;{detail.user.surname}</span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faBasketShopping} /> Fiyat: {detail?.price} {detail?.price_type}
                    </li>
                    <li>
                        <Link href={`tel:+90${detail?.user.phone}`} className="bg-primary text-white p-2 rounded-lg" >
                            <FontAwesomeIcon icon={faPhoneAlt} />&nbsp;Ara
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="map-container w-full  rounded-lg">
                <MapsComponent origin={origin} destination={destination} />
            </div>
            <div className="detail grid grid-cols-3 gap-5">
                <div className="detail-card border p-4 ">
                    Ödeme Yöntemi: {detail?.payment_method}
                </div>
                <div className="detail-card border p-4 ">
                    Tip: {detail?.type}
                </div>
                <div className="detail-card border p-4 ">
                    Ağırlık: {detail?.amount}&nbsp;{detail?.unit}
                </div>
            </div>
            <div className="detail grid grid-cols-2 gap-5 mt-10">
                <div className="detail-card border p-4  ">
                    Araç Tipi: {detail?.vehicles_type}
                </div>
                <div className="detail-card border p-4 ">
                    Kasa Tipi: {detail?.vehicles_case}
                </div>
            </div>
            {
                detail.brand ? (<>
                
                <div className="detail grid grid-cols-2 gap-5 mt-10">
                <div className="detail-card border p-4  ">
                    Araç Markası: {detail?.brand}
                </div>
                <div className="detail-card border p-4 ">
                    Araç Modeli: {detail?.model}
                </div>
            </div>
                </>): (<></>)
            }
        </div>
    )
}