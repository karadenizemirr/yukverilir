
import RegisterPageContainer from "@/container/register.container";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: 'Kayıt Ol',
    description: 'yükverilir, ilan ver, yükverilir kayıt ol'
}

export default function RegisterPage() {

    return (
        <RegisterPageContainer />
    )
}