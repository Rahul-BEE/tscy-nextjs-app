/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  i18n: {
    locales: ["en", "ar"],
    defaultLocale: "en",
  },
  env: {
    NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY: "A0OhZGlGQnSbuFer8",
    NEXT_PUBLIC_EMAIL_JS_SERVICE_ID: "service_p7b4tsl",
    NEXT_PUBLIC_BROKER_EMAIL_TEMPLATE_ID: "template_bs7cvpn",
    NEXT_PUBLIC_REGISTER_INTEREST_TEMPLATE_ID: "template_q9yq3pa",
    NEXT_PUBLIC_GA_TRACKING_ID: "G-B8E357DD7R",
  },
};

module.exports = nextConfig;
