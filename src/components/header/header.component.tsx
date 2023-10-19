"use client"
import React from "react";
import InputComponent from "../form/input.component";
import CountrySelectComponent from "../form/country.select.component";
import DistrictSelectComponent from "../form/district.select";
import SelectComponent from "../form/select.component";
import { Form, Formik } from "formik";

export default function HeaderComponent() {
    const [country, setCountry] = React.useState<string>("");
    const [district, setDistrict] = React.useState<string>("");

    const category = ['Yük', 'Araç']

    return (
        <div className="container mx-auto" >
            <div className="mt-10 relative h-1/2">
                <div className="bg-gradient-to-r from-transparent to-silver absolute top-0 w-full h-full rounded-lg">
                </div>
                <div className="title absolute top-32 left-1/4 right-1/4">
                    <h1 className="text-white text-6xl font-black text-center" >
                        Binlerce <span className="text-secondary">Yük</span> ve <span className="text-primary">Araç</span> İlanları Arasında Arama Yapın
                    </h1>
                </div>
                <div className="img-card rounded-lg h-[65vh]">
                    <img src="/images/banner.jpg" alt="" className="object-cover w-full h-full rounded-lg" />
                </div>

                <div className="search-card absolute bottom-36 left-1/4 bg-silver p-4 rounded-lg shadow-xl w-1/2 ">
                    <div className="items flex items-center justify-between gap-10">
                        <Formik initialValues={{}} onSubmit={() => { }} >
                            <Form className="items flex items-center justify-between gap-10" >
                                <div className="row w-full">
                                    <CountrySelectComponent name="country" placeholder="İl Seçiniz" onchange={(value: any) => { setCountry(value) }} value={country} />
                                </div>
                                <div className="row w-full">
                                    <DistrictSelectComponent country={country} name="district" placeholder="İlçe Seçiniz" onchange={(value: any) => { setDistrict(value) }} />
                                </div>
                                <div className="row w-full">
                                    <SelectComponent array={category} name="category" placeholder="Kategori Seçiniz" />
                                </div>
                                <div className="row w-full flex justify-end">
                                    <button className="w-full p-2 rounded-lg px-5 bg-primary text-white hover:bg-secondary hover:text-white duration-150">
                                        Ara
                                    </button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    )
}