/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.wanderer.moe",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "static.wikia.nocookie.net",
        port: "",
        pathname: "/wutheringwaves/images/**",
      },
    ],
  },
};

export default nextConfig;
