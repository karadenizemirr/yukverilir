"use client"
import React from "react";
import AdvertComponent from "../form/advert.component";
import VehiclesComponent from "../form/vehicles.component";

export default function TabComponent() {
    const [selectedOption, setSelectedOption] = React.useState<string>("Advert");
    return (
        <div className={`container mx-auto ${selectedOption === 'Advert' ? 'blue-gradient': 'orange-gradient'}`} >
            <div className="mt-10 sm:hidden">
                <label className="sr-only">Select your country</label>
                <select id="tabs" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 "
                    onChange={(e:any) => setSelectedOption(e.target.value)}
                >
                    <option value="Advert">İlan Ekle</option>
                    <option value="Vehicles" >Araç Ekle</option>
                </select>
            </div>
            <ul className="mt-10 hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex ">
                <li className="w-full">
                    <a
                        href="#"
                        className="inline-block w-full p-4 text-white font-bold bg-primary rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none "
                        aria-current="page"
                        onClick={() => setSelectedOption("Advert")}
                    >İlan Ekle</a>
                </li>
                <li className="w-full">
                    <a
                        href="#"
                        className="inline-block w-full p-4 text-white font-bold bg-secondary hover:text-gray-700 hover:bg-orange-400 focus:ring-4 focus:ring-primary focus:outline-none "
                        onClick={() => setSelectedOption("Vehicles")}
                    >Araç Ekle</a>
                </li>
            </ul>

            {selectedOption === "Advert" &&
                <div className="menu1 flex justify-center mt-10 mb-10 p-5">
                    <AdvertComponent />
                </div>
            }
            {selectedOption === "Vehicles" &&
                <div className="menu2 flex justify-center mt-10 mb-10 p-5">
                    <VehiclesComponent />
                </div>
            }
        </div>
    )
}