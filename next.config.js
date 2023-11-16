/** @type {import('next').NextConfig} */
const nextConfig = {
  // comment all the lines for npm run dev
  output: 'export',
  reactStrictMode: true,

 // Add basePath
  basePath: '/dashboardThreejs',
  
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(gltf)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: false,
            fallback: 'file-loader',
            publicPath: '/_next',
            outputPath: 'static/media/',
            name: '[name].[hash].[ext]',
          },
        },
      ],
    });

    return config;
  },
}

module.exports = nextConfig
