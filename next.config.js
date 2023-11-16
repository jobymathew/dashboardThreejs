/** @type {import('next').NextConfig} */
const nextConfig = {
  // comment all the lines for npm run dev
  output: 'export',
  reactStrictMode: true,

 // Add basePath
  basePath: '/dashboardThreejs',
  webpack: (config, { isServer }) => {
    // Add raw-loader for GLTF files
    config.module.rules.push({
      test: /\.(gltf)$/,
      use: isServer ? 'raw-loader' : ['raw-loader'],
    });

    return config;
  },
}

module.exports = nextConfig
