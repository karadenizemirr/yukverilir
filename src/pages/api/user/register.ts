import prisma from "@/lib/prisma";
import { create_two_factor_code, twilio_sms } from "@/lib/sms";
import { NextApiRequest, NextApiResponse } from "next";

export default async function POST(req:NextApiRequest, res:NextApiResponse){
    if (req.method === 'POST'){
        const {name, surname, email,phone} = req.body
        try{
            const code = create_two_factor_code()
            const sms:any = await twilio_sms('+90' + phone, code)
            const {sid, status} = sms

            if (status === "failed") return res.status(400).send({ok: false})
            const control = await prisma.user.findUnique({
                where: {
                    phone: phone,
                }
            })

            if (control){
                await prisma.user.update({
                    where: {
                        id: control.id
                    },
                    data: {
                        twoFactor: {
                            update:{
                                secret: code as string
                            }
                        }
                    }
                })

                return res.status(200).send({ok: true, id: control.id})
            }
            const user = await prisma.user.create({
                data: {
                    name,
                    surname,
                    email,
                    phone,
                    twoFactor: {
                        create:{
                            secret: code as string
                        }
                    }
                }
            })
            return res.status(200).send({ok: true, id: user.id})
        }catch(err){
            return res.status(400).send({ok: false})
        }

    }
}