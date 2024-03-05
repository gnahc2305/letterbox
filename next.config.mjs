/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "avatars.githubusercontent.com",
  //       port: "",
  //       pathname: "/u/**",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "m.media-amazon.com",
  //       port: "",
  //       pathname: "/u/**",
  //     },
  //   ],
  // },
};

export default nextConfig;
