import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,  
  swcMinify: true,        
  future: {
    webpack5: true, 
  },
  
};

export default nextConfig;