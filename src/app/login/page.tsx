import LoginContainer from "@/container/login.container";
import { Metadata } from "next";
import React from "react";

export const metadata:Metadata = {
    title:'Giriş Yap'
}

export default function LoginPage() {
    return (
        <>
            <LoginContainer />
        </>
    )
}