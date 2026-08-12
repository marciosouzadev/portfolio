import type { NextConfig } from "next";

const repoName = "portfolio";

const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${repoName}`,
  trailingSlash: true,
  poweredByHeader: false,
  compress: true,
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
