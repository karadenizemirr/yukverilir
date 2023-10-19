"use client"
import InputComponent from "@/components/form/input.component";
import { Field, Form, Formik } from "formik";
import { signOut } from "next-auth/react";
import React from "react";
import Swal from "sweetalert2";

export default function ProfileContainer({data}:{data:any}){
    const handleClickRemoveUser = async () => {
        Swal.fire({
            title:'Hesabınızı silmek istediğinize emin misiniz?',
            text:'Bu işlem geri alınamaz',
            icon:'warning',
            showCancelButton:true,
            confirmButtonText:'Evet',
            cancelButtonText:'Hayır'
        }).then(async (result) => {
            if (result.isConfirmed){
                const res = await fetch(process.env.NEXT_PUBLIC_API + '/user/' + data.id, {
                    method:'DELETE'
                })

                const {ok} = await res.json();

                if (ok){
                    signOut ({redirect:true, callbackUrl:'/'})
                    Swal.fire({
                        icon:'success',
                        title:'Başarılı',
                        text:'Hesabınız silindi'
                    })
                }else{
                    Swal.fire({
                        icon:'error',
                        title:'Hata',
                        text:'Hesabınız silinemedi'
                    })
                }
            }
        })
    }
    return (
        <div className="container mx-auto flex justify-center" >
            <div className="profile-card border border-black rounded-lg shadow-lg p-5 w-1/2 flex flex-col gap-7">
                <div className="pic">
                    <img src="/images/logo.png" alt="" width={170} className="rounded-lg" />
                </div>
                <div className="content">
                    <Formik initialValues={{
                        name: data.name,
                        surname: data.surname,
                        email: data.email,
                        phone: data.phone
                    }} onSubmit={async (value:any) => {
                        const res = await fetch(process.env.NEXT_PUBLIC_API + '/user/' + data.id, {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(value)
                        })

                        const {ok} = await res.json();

                        if (ok){
                            Swal.fire({
                                icon:'success',
                                title:'Başarılı',
                                text:'Bilgileriniz güncellendi'
                            })
                        }else{
                            Swal.fire({
                                icon:'error',
                                title:'Hata',
                                text:'Bilgileriniz güncellenemedi'
                            })
                        }
                    }}>
                        <Form className="flex flex-col gap-7" >
                            <div className="row flex gap-7">
                                <Field name="name" placeholder={data.name} component={InputComponent} />
                                <Field name="surname" placeholder={data.surname} component={InputComponent} />
                            </div>
                            <div className="row flex gap-7">
                                <Field name="email" placeholder={data.email} component={InputComponent} />
                                <Field name="phone" placeholder={data.phone} component={InputComponent} />
                            </div>

                            <div className="row flex justify-between">
                                <button className="p-2 border-2 border-primary rounded-lg hover:bg-secondary duration-200 " type="submit" >
                                    Güncelle
                                </button>
                                <button className="p-2 border-2 border-primary rounded-lg hover:bg-secondary duration-200" type="button" onClick={handleClickRemoveUser} >
                                    Hesabımı Sil
                                </button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}