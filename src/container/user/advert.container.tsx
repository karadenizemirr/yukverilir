"use client"
import React from "react";

export default function UserAdvertContainer({ data }: { data: any }) {
    return (
        <div className="container mx-auto flex flex-1 flex-col justify-center mt-10 gap-7" >
            <div className="title text-center">
                <h1 className="text-3xl font-bold" >
                    Tüm İlanlarım
                </h1>
            </div>
            <div className="content">

                <div className="relative overflow-x-auto shadow-lg">
                    <table className="w-full text-sm text-center text-black">
                        <thead className="text-xs text-black uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    İlan Adı
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Nereden
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Nereye
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Fiyat
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Teslim Tipi
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Teslim Tarihi
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    İşlem
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.adverts.map((item: any, index: number) => (
                                <tr className="bg-white border-b" key={index}>
                                    <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
                                        {item.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        {item?.where[0]?.coordinates?.country}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item?.to[0]?.coordinates?.country}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.price}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.delivired_type}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.delivired_date}
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className="px-4 py-2 rounded-md">
                                            Sil
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}