/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // 确保构建时生成 .nojekyll 文件以避免 GitHub Pages 的 Jekyll 处理
  // 这允许下划线开头的文件夹 (_next) 正常工作
  distDir: 'out',
}

module.exports = nextConfig 