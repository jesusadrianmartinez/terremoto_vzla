import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/donacion",
        destination: "http://bit.ly/laguairahelp",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
