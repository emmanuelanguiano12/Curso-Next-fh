import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains: ['images.unsplash.com', 'raw.githubusercontent.com'],
    }
};
export default nextConfig; 
