import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // The PRP app is deployed separately (khs-prp-system.vercel.app) but
      // its own next.config.ts sets basePath: "/prp", so every route it
      // actually serves - pages, /login, its _next/static assets - only
      // exists under /prp. The destination must keep that prefix, not
      // strip it, or every proxied request 404s on the PRP app itself.
      {
        source: "/prp",
        destination: "https://khs-prp-system.vercel.app/prp",
      },
      {
        source: "/prp/:path*",
        destination: "https://khs-prp-system.vercel.app/prp/:path*",
      },
    ];
  },
};

export default withNextIntl(nextConfig);
