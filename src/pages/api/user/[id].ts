import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function GET(req:NextApiRequest, res:NextApiResponse){
    if (req.method == 'GET'){
        const { id } = req.query

        const user = await prisma.user.findUnique(
            {
                where: {
                    id: id as string
                }
            }
        )
    
        return res.status(200).json(user)
    }else if (req.method === 'PUT'){
        // Update user
        const { id } = req.query
        const { name, email,surname,phone } = req.body
        
        const update = await prisma.user.update({
            where: {
                id: id as string
            },
            data: {
                name,
                email,
                surname,
                phone
            }
        })

        return res.status(200).send({ok:true})
    }else if (req.method === 'DELETE'){
        // Delete user
        const { id } = req.query

        const user = await prisma.user.delete({
            where: {
                id: id as string
            }
        })

        return res.status(200).send({ok:true})
    }else{
        return res.status(405).send({ok:false})
    }
}