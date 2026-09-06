/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.zanderio.ai",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.zanderio.ai",
              "font-src 'self' https://fonts.gstatic.com https://cdn.zanderio.ai",
              "img-src 'self' data: blob: https://cdn.zanderio.ai",
              "media-src 'self' data: blob: https://cdn.zanderio.ai",
              "connect-src 'self' https://api.resend.com https://api.zanderio.ai https://agent.zanderio.ai wss://agent.zanderio.ai",
              "frame-ancestors 'none'",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
