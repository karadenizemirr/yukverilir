"use client"
import InputComponent from "@/components/form/input.component";
import { Field, Form, Formik } from "formik";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React from "react";
import Swal from "sweetalert2";

export default function LoginContainer() {
    return (
        <div className="grid grid-cols-2 w-full h-full" >
            <div className="register-img">
                <img src="/images/register.jpg" alt="" />
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
                            phone: value.phone
                        })


                    }} >
                        <Form>
                            <div className="row flex gap-6">
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