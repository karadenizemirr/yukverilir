import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next"
import prisma from "@/lib/prisma";

export const authOption = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                phone: { label: "Phone", type: "text", placeholder: "Phone" },
            },
            async authorize(credentials, req) {
                try {
                    const res = await fetch('http://localhost:3000/api/user/login', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(credentials)
                    });
                    const { ok, data } = await res.json()
                    if (ok) {
                        return data;
                    } else {
                        // Hata durumunda uygun işlemleri yapabilirsiniz
                        throw new Error('API request failed');
                    }
                } catch (error) {
                    // Hata mesajını burada alabilirsiniz
                    console.error(error);
                    return null;
                }
            }
        }),
    ],
    pages: {
        signIn: '/login'
    },
    session: {
        jwt: true,
        maxAge: 30 * 24 * 60
    },
    callbacks: {
        async session({session,token}:{session:any, token:any}){
            session.jwt = token.jwt;
            session.user.id = token.id
            session.user.role = token.role
            return Promise.resolve(session);
        },
        async jwt({token, user}:{token:any, user:any}){
            if(user){
                
                console.log('burada')
                token.id = user.id
                token.role = user.role
            }
            return Promise.resolve(token);
        }
    }
}


export default NextAuth(authOption)