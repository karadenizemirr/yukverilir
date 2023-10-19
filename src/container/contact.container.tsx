"use client"
import InputComponent from "@/components/form/input.component";
import { Field, Form, Formik } from "formik";
import Image from "next/image";
import React from "react";

export default function ContactContainer(){
    return (
        <div className="grid grid-cols-2 items-center" >
            <div className="img">
                <Image src="/images/contact.png" alt="" className="w-full" width={200} height={200} />
            </div>
            <div className="form p-10">
                <div className="title text-center mb-10">
                    <h1 className="text-3xl font-bold" >
                        Bizimle İletişime Geçin
                    </h1>
                </div>
                <Formik initialValues={{}} onSubmit={() => {}} >
                    <Form className="flex flex-col gap-7" >
                        <div className="row flex flex-1 gap-5">
                            <InputComponent name="name" placeholder="Adınız" />
                            <InputComponent name="surname" placeholder="Soyadınız" />
                        </div>
                        <div className="row flex flex-1 gap-5">
                            <InputComponent name="email" placeholder="E-posta" />
                            <InputComponent name="phone" placeholder="Telefon" />
                        </div>
                        <div className="row flex flex-1 gap-5">
                            <InputComponent name="message" placeholder="Başlık" />
                        </div>
                        <div className="row flex flex-1 gap-5">
                            <Field as="textarea" name="message" placeholder="Mesajınız" className="border-2 border-primary p-2 w-full rounded-lg" />
                        </div>
                        
                        <div className="row flex flex-1 gap-5 justify-center">
                            <button className="p-2 bg-primary text-white rounded-lg" >
                                Mesajı Gönder
                            </button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}