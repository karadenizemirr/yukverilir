"use client"
import InputComponent from "@/components/form/input.component";
import { Field, Form, Formik } from "formik";
import Link from "next/link";
import React from "react";

export default function RegisterPage() {
    return (
        <div className="container mx-auto flex justify-center mt-20" >
            <div className="register-card grid grid-cols-2 w-1/2 p-5 shadow-lg">
                <div className="col-1">
                    asd
                </div>
                <div className="col-2">
                    <div className="title text-center mb-7">
                        <h1 className="text-2xl font-bold" >
                            Üye Ol İlanlarını Yayınla
                        </h1>
                    </div>
                    <div className="form">
                        <Formik initialValues={{
                            name: '',
                            surname: '',
                            phone:'',
                            email: ''
                        }} onSubmit={async (value:any) => {
                            const res  = await fetch('/api/user/register', {
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
        </div>
    )
}