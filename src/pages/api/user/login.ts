import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function POST(req:NextApiRequest, res:NextApiResponse){
    if (req.method === 'POST'){
        // Login Operations
        const {phone}:{phone:string} = req.body

        const user = await prisma.user.findUnique(
            {
                where:{
                    phone: phone
                }
            }
        )

        if (!user){
            res.status(400).json({ok:false, data:null})
        }else{
            res.status(200).send({ok:true, data:user})
        }
        
    }
}