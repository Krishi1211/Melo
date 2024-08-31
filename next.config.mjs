/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
            },
            {
                protocol: 'https',
                hostname: 'api.melo.works',
            },

        ],
    },
   /*  images: {
        domains: ['images.pexels.com','api.melo.works'],
    }, */
};

export default nextConfig;
