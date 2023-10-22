import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function verify(req:NextApiRequest, res:NextApiResponse){
    try{
        if (req.method !== 'POST') return res.status(405).send({ok:false})

        const {id, code} = req.body

        const user = await prisma.user.findUnique({
            where: {
                id: id as string
            },
            include: {
                twoFactor: true
            }
        })

        if (!user) return res.status(400).send({ok: false})

        if (user.twoFactor?.secret !== code) return res.status(400).send({ok: false})

        await prisma.user.update({
            where: {
                id: id as string
            },
            data: {
                twoFactor: {
                    delete : true
                },
                isActive: true
            }
        })
        return res.status(200).send({ok:true})

    }catch(err){
        return res.status(400).send({ok: false})
    }
}