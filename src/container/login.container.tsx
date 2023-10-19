"use client"
import InputComponent from "@/components/form/input.component";
import { Field, Form, Formik } from "formik";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React from "react";
import Swal from "sweetalert2";

export default function LoginContainer() {
    return (
        <div className="container mx-auto flex justify-center mt-20" >
            <div className="register-card grid grid-cols-2 w-1/2 p-5 shadow-lg">
                <div className="col-1">
                    asd
                </div>
                <div className="col-2">
                    <div className="title text-center mb-7">
                        <h1 className="text-2xl font-bold" >
                            Giriş Yap İlanlarını Yayınla
                        </h1>
                    </div>
                    <div className="form">
                        <Formik initialValues={{}} onSubmit={async (value:any) => {
                            const res = await signIn("credentials", {
                                phone: value.phone
                            })

                            
                        }} >
                            <Form>
                                <div className="row flex gap-6">
                                    <Field name="phone" id="phone" placeholder="Telefon Numarası" component={InputComponent} />
                                </div>
                                <div className="row flex flex-col gap-7 mt-8 text-center">
                                    <button className="bg-primary p-2 text-white rounded-lg" type="submit" >
                                        Üye Ol
                                    </button>
                                    <p>
                                        Henüz Bir Hesabınız Yok Mu ? <Link href="/login" className="text-blue-500" >Kayıt Olun</Link>
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