import Image from "next/image";
import React from "react";

export default function ServicesComponent() {
    return (
        <div className="container mx-auto mt-20 mb-20 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 justify-center">
            <div className="services-card text-center p-4 bg-light rounded-lg shadow-lg">
                <div className="icon flex justify-center">
                    <Image src="/images/icons/1.png" alt="" width={70} height={70} />
                </div>
                <div className="content mt-4">
                    <h1 className="font-bold text-2xl">Hızlı Tedarik</h1>
                </div>
            </div>

            <div className="services-card text-center p-4 bg-light rounded-lg shadow-lg">
                <div className="icon flex justify-center">
                    <Image src="/images/icons/2.png" alt="" width={70} height={70} />
                </div>
                <div className="content mt-4">
                    <h1 className="font-bold text-2xl">En Uygun Fiyat</h1>
                </div>
            </div>

            <div className="services-card text-center p-4 bg-light rounded-lg shadow-lg">
                <div className="icon flex justify-center">
                    <Image src="/images/icons/3.png" alt="" width={70} height={70} />
                </div>
                <div className="content mt-4">
                    <h1 className="font-bold text-2xl">7/24 Araç Takibi</h1>
                </div>
            </div>

            <div className="services-card text-center p-4 bg-light rounded-lg shadow-lg">
                <div className="icon flex justify-center">
                    <Image src="/images/icons/4.png" alt="" width={70} height={70} />
                </div>
                <div className="content mt-4">
                    <h1 className="font-bold text-2xl">Hızlı Teklif</h1>
                </div>
            </div>

            <div className="services-card text-center p-4 bg-light rounded-lg shadow-lg">
                <div className="icon flex justify-center">
                    <Image src="/images/icons/5.png" alt="" width={70} height={70} />
                </div>
                <div className="content mt-4">
                    <h1 className="font-bold text-2xl">Zamanında Teslimat</h1>
                </div>
            </div>
        </div>
    )
}