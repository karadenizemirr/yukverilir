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


export default function AdvertComponent() {
    const {data:session}:{data:any} = useSession()
    const id = session?.user?.id || '';

    const [whereCountry, setWhereCountry] = useState<string>("")
    const [whereDistrict, setWhereDistrict] = React.useState<string>("")
    const [toCountry, setToCountry] = React.useState<string>("")
    const [toDistrict, setToDistrict] = React.useState<string>("")
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
    registerLocale('tr', tr);
    setDefaultLocale('tr');
    // Form State
    const [formmType, setFormTYpe] = React.useState<string>("")
    const [formAmount, setFormAmount] = React.useState<string>("")
    const [formUnit, setFormUnit] = React.useState<string>("")
    const [formVehiclesType, setFormVehiclesType] = React.useState<string>("")
    const [formVehiclesCase, setFormVehiclesCase] = React.useState<string>("")
    const [formPaymentMethod, setFormPaymentMethod] = React.useState<string>("")
    const [formDeliviredType, setFormDeliviredType] = React.useState<string>("")
    const type = ['Paket', 'Torba', 'Palet']
    const unit = ['Kg', 'Ton', 'Adet']
    const vehicles_type = ['Tır', 'Kamyon', 'Pikap']
    const vehicles_case = ['Açık Kasa', 'Kapalı Kasa', 'Soğuk Hava', 'Sal Dorse', 'Tanker', 'Konteynır', 'Tentelli', 'Oto Taşıma', 'Damperli', 'Lowbed', 'Kuruyük',
        'Frigirofik', 'Tekstil', 'Slobas', 'Konteynır Taşıyıcı & Şasi Grubu'
    ]
    const payment_method = ['Kredi Kartı', 'Nakit', 'Vadeli']
    const delivired_type = ['Limitli', 'Aradabir', 'Sınırsız', 'Aylık', 'Yıllık', 'Sezonluk']

    return (
        <div>
            <div className="title">
                <h1 className="text-4xl font-bold text-center" >
                    Yük İlanları Ekleyerek Herkesle Paylaşın
                </h1>
            </div>
            <div className="form-container">
                <Formik
                    initialValues={{
                        where_country: whereCountry,
                        where_district: whereDistrict,
                        to_country: toCountry,
                        to_district: toDistrict,
                        name: "",
                        type: formmType,
                        amount: formAmount,
                        unit: formUnit,
                        price: "",
                        vehicles_type: formVehiclesType,
                        vehicles_case: formVehiclesCase,
                        payment_method: formPaymentMethod,
                        delivired_type: formDeliviredType,
                        delivired_date: selectedDate
                    }} onSubmit={async (values: any) => {
                        if (!session){
                            // State Kaydet ve Kullanıcı Girişi Yaptır
                        }else{
                            // İlanı Kaydet
                            values.id = id
                            const res = await fetch('/api/advert', {
                                method: 'POST',
                                body: JSON.stringify(values),
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            }) 
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
                            <Field placeholder="Yük Adı" name="name" id="name" component={InputComponent} />
                            <Field name="type" >
                                {({ field, form }: { field: any, form: any }) => (
                                    <SelectComponent
                                        {...field}
                                        placeholder="Yük Tipi"
                                        array={type}
                                        onchange={(value: string) => {
                                            form.setFieldValue('type', value);
                                            setFormTYpe(value);
                                        }}
                                    />
                                )}
                            </Field>
                        </div>
                        <div className="row flex gap-3">
                            <Field placeholder="Miktar" name="amount" id="amount" component={InputComponent} />
                            <Field name="unit">
                                {({ field, form }: { field: any, form: any }) => (
                                    <SelectComponent
                                        {...field}
                                        placeholder="Birim"
                                        array={unit}
                                        onchange={(value: string) => {
                                            form.setFieldValue('unit', value);
                                            setFormUnit(value);
                                        }}
                                    />
                                )}
                            </Field>
                        </div>
                        <div className="row flex gap-3">
                            <Field placeholder="Fiyat" name="price" id="price" component={InputComponent} />
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
                            <Field name="payment_method" >
                                {({ field, form }: { field: any, form: any }) => (
                                    <SelectComponent
                                        {...field}
                                        placeholder="Ödeme Tipi"
                                        array={payment_method}
                                        onchange={(value: string) => {
                                            form.setFieldValue('payment_method', value);
                                            setFormPaymentMethod(value);
                                        }}
                                    />
                                )}
                            </Field>
                        </div>
                        <div className="gap-3">
                            <Field name="delivired_type" >
                                {({ field, form }: { field: any, form: any }) => (
                                    <SelectComponent
                                        {...field}
                                        placeholder="Teslim Tipi"
                                        array={delivired_type}
                                        onchange={(value: string) => {
                                            form.setFieldValue('delivired_type', value);
                                            setFormDeliviredType(value);
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