"use client"
import React, { useEffect } from "react";
import InputComponent from "../form/input.component";
import CountrySelectComponent from "../form/country.select.component";
import DistrictSelectComponent from "../form/district.select";
import SelectComponent from "../form/select.component";
import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { actions } from "@/redux/store/advert.state";
import { store } from "@/redux";
import { redirect } from "next/navigation";

export default function HeaderComponent() {
    const [country, setCountry] = React.useState<string>("");
    const [district, setDistrict] = React.useState<string>("");
    const [category,setCategory] = React.useState<string>("");
    const [search,setSearch] = React.useState<boolean>(false);

    useEffect(() => {
        if (search){
            redirect('/search')
        }
    })

    const _category = ['Yük', 'Araç']
    return (
        <div className="container mx-auto" >
            <div className="mt-10 relative h-1/2">
                <div className="bg-gradient-to-r from-transparent to-silver absolute top-0 w-full h-full rounded-lg"></div>
                <div className="title absolute top-32 left-1/4 right-1/4">
                    <h1 className="text-white text-4xl sm:text-6xl font-black text-center" >
                        Binlerce <span className="text-secondary">Yük</span> ve <span className="text-primary">Araç</span> İlanları Arasında Arama Yapın
                    </h1>
                </div>
                <div className="img-card rounded-lg h-[65vh]">
                    <img src="/images/banner.jpg" alt="" className="object-cover w-full h-full rounded-lg" />
                </div>

                <div className="search-card absolute bottom-0 sm:bottom-36 left-1/4 bg-silver p-4 rounded-lg shadow-xl w-1/2 ">
                    <div className="items flex items-center justify-center gap-10">
                        <Formik initialValues={{
                            country: "",
                            district: "",
                            category: ""
                        }} onSubmit={async (value: any) => {
                            const res = await fetch('/api/search', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(value),
                            }) 

                            const data = await res.json();
                            store.dispatch(actions.setAdvert(data));

                            if (data){
                                setSearch(true)
                            }

                        }} >
                            <Form className="items flex flex-col sm:flex-row items-center justify-between gap-10" >
                                <div className="row w-full">
                                    <Field name="country">
                                        {({ field, form }: { field: any, form: any }) => (
                                            <CountrySelectComponent
                                                {...field}
                                                placeholder="Nereden"
                                                onchange={(value: string) => {
                                                    form.setFieldValue('country', value);
                                                    setCountry(value);
                                                }}
                                            />
                                        )}
                                    </Field>
                                </div>
                                <div className="row w-full">
                                    <Field name="district" >
                                        {({ field, form }: { field: any, form: any }) => (
                                            <DistrictSelectComponent
                                                {...field}
                                                country={country}
                                                placeholder="Nereye"
                                                onchange={(value: string) => {
                                                    form.setFieldValue('district', value);
                                                    setDistrict(value);
                                                }}
                                            />
                                        )}
                                    </Field>
                                </div>
                                <div className="row w-full">
                                    <Field name="category" >
                                        {({ field, form }: { field: any, form: any }) => (
                                            <SelectComponent
                                                {...field}
                                                placeholder="Kategori"
                                                array={_category}
                                                onchange={(value: string) => {
                                                    form.setFieldValue('category', value);
                                                    setCategory(value);
                                                }}
                                            />
                                        )}
                                    </Field>
                                </div>
                                <div className="row w-full flex justify-end">
                                    <button className="w-full p-2 rounded-lg px-5 bg-primary text-white hover:bg-secondary hover:text-white duration-150" type="submit">
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