import ContactContainer from "@/container/contact.container";
import { Metadata } from "next";
import React from "react";

export const metadata:Metadata = {
    title: 'İletişim'
}


export default function ContactPage(){
    return(
        <div>
            <ContactContainer />
        </div>
    )
}