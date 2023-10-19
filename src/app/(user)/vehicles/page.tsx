import UserVehiclesContainer from "@/container/user/vehicles.container";
import { authOption } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import React from "react";


export const getData = async () => {
    const {user} = await getServerSession(authOption)
    const id = user?.id

    const res = await fetch(process.env.NEXT_PUBLIC_API + `/user/vehicles/` + id, {
        method: 'GET'
    })

    return await res.json()
}

export default async function VehiclesPage(){
    const data = await getData()

    console.log(data)
    return (
        <div>
            <UserVehiclesContainer data={data} />
        </div>
    )
}