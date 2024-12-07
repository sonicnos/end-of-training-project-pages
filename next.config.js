/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {};

if (process.env.APP_ENV === "DEV") {
  nextConfig = {
    // assetPrefix: './',
    // trailingSlash: true,
    output: "export",
    images: {
      unoptimized: true,
    },
    reactStrictMode: true,
    sassOptions: {
      includePaths: [path.join(__dirname, "styles")],
    },
  };
} else {
  nextConfig = {
    assetPrefix: "./",
    trailingSlash: true,
    output: "export",
    images: {
      unoptimized: true,
    },
    reactStrictMode: true,
    sassOptions: {
      includePaths: [path.join(__dirname, "styles")],
    },
  };
}

module.exports = nextConfig;
