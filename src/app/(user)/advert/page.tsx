import UserAdvertContainer from "@/container/user/advert.container";
import { authOption } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import React from "react";

export const getData = async () => {
    const {user} = await getServerSession(authOption)
    const id = user?.id

    const res = await fetch(process.env.NEXT_PUBLIC_API + `/user/advert/` + id, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })

    return await res.json()

    
}

export default async function UserAdvertPage() {
    const data = await getData()

    return (
        <>
            <UserAdvertContainer data={data} />
        </>
    )
}

