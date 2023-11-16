/** @type {import('next').NextConfig} */

const CopyWebpackPlugin = require('copy-webpack-plugin');

const nextConfig = {
  // comment all the lines for npm run dev
  output: 'export',
  reactStrictMode: true,

 // Add basePath
  basePath: '/dashboardThreejs',
  
  webpack: (config, { isServer }) => {
    // Add copy-webpack-plugin to copy the GLTF file
    if (!isServer) {
      config.plugins.push(
        new CopyWebpackPlugin({
          patterns: [
            {
              from: 'public/assets',
              to: '.',
            },
          ],
        })
      );
    }

    return config;
  },
}

module.exports = nextConfig
