"use client"
import LoginContainer from "@/container/login.container";
import { authOption } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";


export default function LoginPage() {
    const {data:session} = useSession()
    if (session){
        redirect('/')
    }
    return (
        <>
            <LoginContainer />
        </>
    )
}