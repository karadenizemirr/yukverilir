"use client"
import InputComponent from "@/components/form/input.component";
import { Field, Form, Formik } from "formik";
import { Metadata } from "next";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata:Metadata = {
    title: 'Giriş Yap',
    description: 'yükverilir giriş yap'
}

export default function LoginContainer() {
    return (
        <div className="grid grid-cols-2 w-full h-full" >
            <div className="register-img">
                <Image src="/images/register.jpg" alt="" width={200} height={200} className="w-full" />
            </div>
            <div className="register-form flex items-center">
                <div className="form mx-auto w-2/3">
                    <div className="title mb-10">
                        <h1 className="text-3xl font-bold text-center" >
                            Giriş Yap ve Hemen İlanlarını Paylaş
                        </h1>
                    </div>
                    <Formik initialValues={{}} onSubmit={async (value: any) => {
                        const res = await signIn("credentials", {
                            phone: value.phone,
                            redirect: true
                        })
                    }} >
                        <Form>
                            <div className="row flex gap-5" style={{marginBottom: 10}}>
                                <Field name="phone" id="phone" placeholder="Telefon Numarası" component={InputComponent} />
                            </div>
                            <div className="row flex flex-col gap-7 mt-8 text-center">
                                <button className="bg-primary p-2 text-white rounded-lg" type="submit" >
                                    Giriş Yap
                                </button>
                                <p>
                                    Henüz Bir Hesabınız Yok Mu ? <Link href="/register" className="text-blue-500" >Kayıt Olun</Link>
                                </p>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}