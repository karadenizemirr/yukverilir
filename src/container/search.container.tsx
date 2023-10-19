import MapsComponent from "@/components/maps/maps.component";
import React from "react";
export default function SearchContainer() {
    return (
        <div className="grid grid-cols-2">
            <div className="nav-col p-5 flex flex-col gap-10">
                <div className="result-card p-5 rounded-lg text-black flex flex-col gap-7 border border-primary ">
                    <div className="topbar flex flex-1 justify-between">
                        <span className="p-2 border border-black rounded-lg" >
                            Tarih:
                        </span>
                        <span className="p-2 border border-black rounded-lg" >
                            Fiyat:
                        </span>
                    </div>
                    <div className="content flex flex-1 justify-center">
                        <h1 className="text-2xl font-bold" >
                            title
                        </h1>
                    </div>
                    <div className="footer">
                        <ul className="flex flex-1 justify-between" >
                            <li>
                                <span className="p-2 border border-black rounded-lg" >
                                    Nereden:
                                </span>
                            </li>
                            <li>
                                <span className="p-2 border border-black rounded-lg" >
                                    Nereye:
                                </span>
                            </li>
                            <li>
                                <span className="p-2 border border-black rounded-lg" >
                                    Uzaklık:
                                </span>
                            </li>
                            <li>
                                <span className="p-2 border border-black rounded-lg" >
                                    Süre:
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="result-card p-5 rounded-lg text-black flex flex-col gap-7 ">
                    <div className="topbar flex flex-1 justify-between">
                        <span className="p-2 border border-black rounded-lg" >
                            Tarih:
                        </span>
                        <span className="p-2 border border-black rounded-lg" >
                            Fiyat:
                        </span>
                    </div>
                    <div className="content flex flex-1 justify-center">
                        <h1 className="text-2xl font-bold" >
                            title
                        </h1>
                    </div>
                    <div className="footer">
                        <ul className="flex flex-1 justify-between" >
                            <li>
                                <span className="p-2 border border-black rounded-lg" >
                                    Nereden:
                                </span>
                            </li>
                            <li>
                                <span className="p-2 border border-black rounded-lg" >
                                    Nereye:
                                </span>
                            </li>
                            <li>
                                <span className="p-2 border border-black rounded-lg" >
                                    Uzaklık:
                                </span>
                            </li>
                            <li>
                                <span className="p-2 border border-black rounded-lg" >
                                    Süre:
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="des-col p-5">
                <div className="maps">
                    <MapsComponent />
                </div>
            </div>
        </div>
    )
}