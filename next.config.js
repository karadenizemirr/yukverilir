/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        NEXT_PUBLIC_API: process.env.NEXT_PUBLIC_API
    },
    swcMinify: true,
    experimental: {
        typedRoutes: true,
    },
    typescript: {
        ignoreBuildErrors: true
    }
}

module.exports = nextConfig
