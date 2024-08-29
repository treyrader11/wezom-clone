/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { hostname: `api.wezom.com` },
      { hostname: `w3.org` },
      { hostname: `i.pravatar.cc` },
    ],
  },
};

export default nextConfig;
