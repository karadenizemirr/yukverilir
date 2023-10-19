import LoginContainer from "@/container/login.container";
import { getServerSession } from "next-auth";
import React from "react";


export default function LoginPage() {
    return (
        <>
            <LoginContainer />
        </>
    )
}