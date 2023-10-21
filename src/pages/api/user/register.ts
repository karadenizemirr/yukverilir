import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function POST(req:NextApiRequest, res:NextApiResponse){
    if (req.method === 'POST'){
        const {name, surname, email,phone} = req.body
        try{
            const user = await prisma.user.create({
                data: {
                    name,
                    surname,
                    email,
                    phone
                }
            })
            return res.status(200).send({ok: true, user})
        }catch(err){
            return res.status(400).send({ok: false})
        }
    }
}