import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [100, 75],
    // unoptimized: true, // Re-enable optimization now that sharp is installed
  },
};

export default nextConfig;
