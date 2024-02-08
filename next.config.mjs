/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    LOCK_CONTRACT_ADDRESS: process.env.LOCK_CONTRACT_ADDRESS,
    CREATOR_ADDRESS: process.env.CREATOR_ADDRESS,
  },
};

export default nextConfig;
