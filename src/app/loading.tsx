import Image from "next/image";
import React from "react";

export default function Loading() {
    return (
        <div className="absolute top-0 left-0 w-screen h-screen bg-primary text-white flex justify-center items-center">
            <div className="content flex flex-col flex-1 justify-center items-center text-center">
                <Image src="/images/logo2.png" alt="" width={200} height={200} />
                <h1 className="text-8xl font-bold">
                    Yükleniyor<span className="animate-pulse">...</span>
                </h1>
            </div>
        </div>
    )
}