/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  assetPrefix: "https://2025.webdev-cf2m.be/loukas/",
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

// if (process.env.APP_ENV === "DEV") {
// const nextConfig = {
//   // assetPrefix: './',
//   // trailingSlash: true,
//   output: "export",
//   images: {
//     unoptimized: true,
//   },
//   reactStrictMode: true,
//   sassOptions: {
//     includePaths: [path.join(__dirname, "styles")],
//   },
// };
// } else {
//   const nextConfig = {
//     assetPrefix: "./",
//     trailingSlash: true,
//     output: "export",
//     images: {
//       unoptimized: true,
//     },
//     reactStrictMode: true,
//     sassOptions: {
//       includePaths: [path.join(__dirname, "styles")],
//     },
//   };
// }

module.exports = nextConfig;
