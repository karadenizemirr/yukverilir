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

export const meta:Metadata = {
    title: 'Detay',
}

export default function DetailContainer() {
    const detail: any = store.getState().detailReducer.detail
    console.log(detail)
    
    const destination = {
        lat:parseFloat(detail.to[0].coordinates.lat),
        lng:parseFloat(detail.to[0].coordinates.lng)
    }

    const origin = {
        lat:parseFloat(detail.where[0].coordinates.lat),
        lng:parseFloat(detail.where[0].coordinates.lng)
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
                <ul className="flex flex-1 justify-between items-center" >
                    <li>
                        <FontAwesomeIcon icon={faCalendar} />İlan Tarihi: {detail?.created_at}
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCalendarAlt} />Bitiş Tarihi: {format(new Date(detail.delivired_date), 'dd/MM/yyyy', { locale: tr })}
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faPerson} /> {detail.user.name}&nbsp;{detail.user.surname}
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faBasketShopping} /> Fiyat: {detail?.price} TL
                    </li>
                    <li>
                        <button className="bg-primary text-white p-2 rounded-lg" >
                            <FontAwesomeIcon icon={faPhoneAlt} />&nbsp;Ara
                        </button>
                    </li>
                </ul>
            </div>
            <div className="map-container w-full shadow-lg rounded-lg">
                <MapsComponent origin={origin} destination={destination} />
            </div>
            <div className="detail grid grid-cols-3 gap-5">
                <div className="detail-card border p-4 shadow-lg ">
                    Ödeme Yöntemi: {detail?.payment_method}
                </div>
                <div className="detail-card border p-4 shadow-lg ">
                    Tip: {detail?.type}
                </div>
                <div className="detail-card border p-4 shadow-lg ">
                    Ağırlık: {detail?.amount}&nbsp;{detail?.unit}
                </div>
            </div>
            <div className="detail grid grid-cols-2 gap-5 mt-10">
                <div className="detail-card border p-4 shadow-lg ">
                    Araç Tipi: {detail?.vehicles_type}
                </div>
                <div className="detail-card border p-4 shadow-lg ">
                    Kasa Tipi: {detail?.vehicles_case}
                </div>
            </div>
        </div>
    )
}