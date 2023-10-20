import AboutContainer from "@/container/about.container";
import { Metadata } from "next";
import React from "react";

export const metadata:Metadata = {
    title: 'Hedefimiz',
    description: 'yükverilir, hedefimiz, yükverilir hedefimiz',
}

export default function AboutPage() {
    return (
        <>
            <AboutContainer />
        </>
    )
}