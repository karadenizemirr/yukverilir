import ProfileContainer from "@/container/user/profile.container";
import { authOption } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

export const getData = async () => {
    const {user} = await getServerSession(authOption);
    
    const res = await fetch(process.env.NEXT_PUBLIC_API + '/user/' + user.id, {
        method:'GET'
    })

    const data = await res.json();
    return data;

}

export default async function ProfilePage() {
    const data = await getData();

    return (
        <div>
            <ProfileContainer data={data} />
        </div>
    );
}