import { getCoordinates, getDistance } from "@/lib/google.maps"
import prisma from "@/lib/prisma"
import { NextApiRequest, NextApiResponse } from "next"
import { getServerSession } from "next-auth"

export default async function(req:NextApiRequest, res:NextApiResponse){
    try{
        if (req.method === 'POST'){
            const data = req.body
            const where_address = data.where_country +','+ data.where_district + ',Türkiye'
            const to_address = data.to_country +','+ data.to_district + ',Türkiye'
            const coordinates:any = await getCoordinates(where_address + ',' + to_address)

            const save = await prisma.advert.create(
                {
                    include:{
                        where: true,
                        to: true,
                        user: true
                    },
                    data: {
                        name: data.name,
                        type: data.type,
                        amount: data.amount,
                        unit: data.unit,
                        price: data.price,
                        vehicles_type: data.vehicles_type,
                        vehicles_case: data.vehicles_case,
                        payment_method: data.payment_method,
                        delivired_date: data.delivired_date,
                        delivired_type: data.delivired_type,
                        where:{
                            create: {
                                coordinates:{
                                    create: {
                                        country: data.where_country,
                                        district: data.where_district,
                                        lat: String(coordinates.lat),
                                        lng: String(coordinates.lng)
                                    }
                                }
                            }
                        },
                        to:{
                            create: {
                                coordinates:{
                                    create: {
                                        country: data.to_country,
                                        district: data.to_district,
                                        lat: String(coordinates.lat),
                                        lng: String(coordinates.lng)
                                    }
                                }
                            }
                        },
                        user:{
                            connect: {
                                id: data.id
                            }
                        }
                    }
                }
            )

            return res.status(200).json({ok: true})
        }
    }catch(err){
        console.log(err)
    }
}