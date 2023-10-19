"use client"
import InputComponent from "@/components/form/input.component";
import { Field, Form, Formik } from "formik";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

export default function RegisterPage() {
    const {data:session} = useSession()
    if (session){
        redirect('/')
    } 
    return (
        <div className="grid grid-cols-2 w-full h-full" >
            <div className="register-img">
                <Image src="/images/register.jpg" alt="" className="w-full" width={200} height={200} />
            </div>
            <div className="register-form flex items-center">
                <div className="form mx-auto w-2/3">
                    <div className="title mb-10">
                        <h1 className="text-3xl font-bold text-center" >
                            Üye Ol ve Hemen İlanlarını Paylaş
                        </h1>
                    </div>
                    <Formik initialValues={{
                        name: '',
                        surname: '',
                        phone: '',
                        email: ''
                    }} onSubmit={async (value: any) => {
                        const res = await fetch('/api/user/register', {
                            method: 'POST',
                            body: JSON.stringify(value),
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })
                    }} >
                        <Form>
                            <div className="row flex gap-6">
                                <Field placeholder="Adınız" name="name" id="name" component={InputComponent} />
                                <Field placeholder="Soyadınız" name="surname" id="surname" component={InputComponent} />
                            </div>
                            <div className="row flex gap-6 mt-4">
                                <Field placeholder="Telefon Nu." name="phone" id="phone" component={InputComponent} />
                                <Field placeholder="Mail Adresi" name="email" id="email" component={InputComponent} />
                            </div>
                            <div className="row flex flex-col gap-7 mt-8 text-center">
                                <button className="bg-primary p-2 text-white rounded-lg" >
                                    Üye Ol
                                </button>
                                <p>
                                    Zaten Bir Hesabınız Var Mı ? <Link href="/login" className="text-blue-500" >Giriş Yapın</Link>
                                </p>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}