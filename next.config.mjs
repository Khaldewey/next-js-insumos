/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{hostname: "picsum.photos"}, {hostname: "wallpapers.com"}]
  }
  
};

export default nextConfig;
