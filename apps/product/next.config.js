const NextFederationPlugin = require("@module-federation/nextjs-mf");
const path = require('path');

const CHECKOUT_APP_URL =
  process.env.NEXT_PUBLIC_CHECKOUT_APP_URL || "http://localhost:3002";

const INSPIRE_APP_URL =
  process.env.NEXT_PUBLIC_INSPIRE_APP_URL || "http://localhost:3003";

const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {
    checkout: `checkout@${CHECKOUT_APP_URL}/_next/static/${location}/remoteEntry.js`,
  };
};

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.unsplash.com",
      },
    ],
  },
  transpilePackages: ["@repo/data-context", "@repo/ui", "@repo/utils"],
  webpack(config, { isServer }) {

      // path setting
      config.resolve.alias = {
          ...config.resolve.alias,
          // fix directory packages/ui...
          '@/lib': path.resolve(__dirname,'../../packages/ui/lib'),
          '@/components/': path.resolve(__dirname, '../../packages/ui/components')
      }

      config.plugins.push(
          new NextFederationPlugin({
              name: "product",
              remotes: remotes(isServer),
              filename: "static/chunks/remoteEntry.js",
              exposes: {
                  "./products": "./pages/products/index",
                  "./product": "./pages/products/[id]",
                  "./search": "./components/search",
                  "./latest-products": "./components/latest-products",
                  "./related-products": "./components/related-products",
                  "./pages-map": "./pages-map.js",
              },
              extraOptions: {
                  exposePages: true,
              },
          })
      );

        return config;
  },
};

module.exports = nextConfig;
