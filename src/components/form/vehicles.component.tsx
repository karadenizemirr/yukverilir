"use client"
import React, { useState } from "react";
import CountrySelectComponent from "./country.select.component";
import DistrictSelectComponent from "./district.select";
import InputComponent from "./input.component";
import SelectComponent from "./select.component";
import DatePicker from 'react-datepicker';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import tr from 'date-fns/locale/tr'; // Turkish locale from date-fns
import 'react-datepicker/dist/react-datepicker.css';
import { Field, Form, Formik } from "formik";
import { useSession } from "next-auth/react";
import Swal from "sweetalert2";


export default function VehiclesComponent() {
    const { data: session }: { data: any } = useSession()
    const id = session?.user?.id || '';

    const [whereCountry, setWhereCountry] = useState<string>("")
    const [whereDistrict, setWhereDistrict] = React.useState<string>("")
    const [toCountry, setToCountry] = React.useState<string>("")
    const [toDistrict, setToDistrict] = React.useState<string>("")
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
    registerLocale('tr', tr);
    setDefaultLocale('tr');
    // Form State
    const [formVehiclesType, setFormVehiclesType] = React.useState<string>("")
    const [formVehiclesCase, setFormVehiclesCase] = React.useState<string>("")


    const vehicles_type = ['Tır', 'Kamyon', 'Pikap']
    const vehicles_case = ['Açık Kasa', 'Kapalı Kasa', 'Soğuk Hava', 'Sal Dorse', 'Tanker', 'Konteynır', 'Tentelli', 'Oto Taşıma', 'Damperli', 'Lowbed', 'Kuruyük',
        'Frigirofik', 'Tekstil', 'Slobas', 'Konteynır Taşıyıcı & Şasi Grubu'
    ]

    return (
        <div>
            <div className="title">
                <h1 className="text-4xl font-bold text-center" >
                    Araç İlanları Ekleyerek Herkesle Paylaşın
                </h1>
            </div>
            <div className="form-container">
                <Formik
                    initialValues={{
                        where_country: whereCountry,
                        where_district: whereDistrict,
                        to_country: toCountry,
                        to_district: toDistrict,
                        model: "",
                        brand: "",
                        vehicles_type: formVehiclesType,
                        vehicles_case: formVehiclesCase,
                        delivired_date: selectedDate
                    }} onSubmit={async (values: any) => {
                        if (!session) {
                            // State Kaydet ve Kullanıcı Girişi Yaptır
                            Swal.fire({
                                title: 'Hata',
                                text: 'Araç paylaşabilmek için giriş yapmalısınız.',
                                icon: 'error',
                                timer: 3000,
                                timerProgressBar: true,
                                
                            })
                        } else {
                            // İlanı Kaydet
                            values.id = id
                            const res = await fetch('/api/vehicles', {
                                method: 'POST',
                                body: JSON.stringify(values),
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            })

                            const {ok} = await res.json()

                            if (ok){
                                Swal.fire({
                                    icon: 'success',
                                    title: 'İlanınız Başarıyla Eklendi',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }else{
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Bir Hata Oluştu',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        }
                    }} >
                    <Form className="flex flex-1 gap-7 flex-col mt-20" >
                        <div className="row flex gap-3">
                            <Field name="where_country">
                                {({ field, form }: { field: any, form: any }) => (
                                    <CountrySelectComponent
                                        {...field}
                                        placeholder="Nereden"
                                        onchange={(value: string) => {
                                            form.setFieldValue('where_country', value);
                                            setWhereCountry(value);
                                        }}
                                    />
                                )}
                            </Field>
                            <Field name="where_district" >
                                {({ field, form }: { field: any, form: any }) => (
                                    <DistrictSelectComponent
                                        {...field}
                                        country={whereCountry}
                                        placeholder="Nereden (İlçe)"
                                        onchange={(value: string) => {
                                            form.setFieldValue('where_district', value);
                                            setWhereDistrict(value);
                                        }}
                                    />
                                )}
                            </Field>
                        </div>
                        <div className="row flex gap-3">
                            <Field name="to_country" >
                                {({ field, form }: { field: any, form: any }) => (
                                    <CountrySelectComponent
                                        {...field}
                                        placeholder="Nereye"
                                        onchange={(value: string) => {
                                            form.setFieldValue('to_country', value);
                                            setToCountry(value);
                                        }}
                                    />
                                )}
                            </Field>
                            <Field name="to_district" >
                                {({ field, form }: { field: any, form: any }) => (
                                    <DistrictSelectComponent
                                        {...field}
                                        country={toCountry}
                                        placeholder="Nereye (İlçe)"
                                        onchange={(value: string) => {
                                            form.setFieldValue('to_district', value);
                                            setToDistrict(value);
                                        }}
                                    />
                                )}
                            </Field>
                        </div>
                        <div className="row flex gap-3">
                            <Field placeholder="Aracın Markası" name="brand" id="brand" component={InputComponent} />
                            <Field placeholder="Aracın Modeli" name="model" id="model" component={InputComponent} />
                        </div>
                        <div className="row flex gap-3">
                            <Field name="vehicles_case">
                                {({ field, form }: { field: any, form: any }) => (
                                    <SelectComponent
                                        {...field}
                                        placeholder="Araç Kasa Tipi"
                                        array={vehicles_case}
                                        onchange={(value: string) => {
                                            form.setFieldValue('vehicles_case', value);
                                            setFormVehiclesCase(value);
                                        }}
                                    />
                                )}
                            </Field>
                            <Field name="vehicles_type" >
                                {({ field, form }: { field: any, form: any }) => (
                                    <SelectComponent
                                        {...field}
                                        placeholder="Araç Tipi"
                                        array={vehicles_type}
                                        onchange={(value: string) => {
                                            form.setFieldValue('vehicles_type', value);
                                            setFormVehiclesType(value);
                                        }}
                                    />
                                )}
                            </Field>
                        </div>
                        <Field name="delivired_date">
                            {({ field, form }: { field: any, form: any }) => (


                                <DatePicker
                                    {...field}
                                    selected={selectedDate}
                                    onChange={(date: Date) => {
                                        form.setFieldValue('delivired_date', date);
                                        setSelectedDate(date);
                                    }}
                                    dateFormat="dd/MM/yyyy"
                                    timeFormat="HH:mm"
                                    timeIntervals={15}
                                    className="border-2 border-primary p-2 w-full rounded-lg"
                                    placeholderText="Teslim Tarihi"
                                    minDate={new Date()}
                                    name="delivired_date"
                                    id="delivired_date"
                                    autoComplete="off"
                                />
                            )}
                        </Field>
                        <div className="row text-center">
                            <button className="bg-primary p-2 rounded-lg text-white hover:bg-secondary duration-200" type="submit">
                                İlan Ekle
                            </button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}