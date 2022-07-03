/** @type {import('next').NextConfig} */
const path = require("path")
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
    prependData: `@import "utilities.scss";`, // Scss code that'd be prepended to every single scss file.
    images: {
      domains: ["www.omie.fr"], // Enables NextJS to serve images from external domains.
    },
  },
}

module.exports = nextConfig
