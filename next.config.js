/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        NEXT_PUBLIC_API: process.env.NEXT_PUBLIC_API
    },
    swcMinify: true,
}

module.exports = nextConfig
