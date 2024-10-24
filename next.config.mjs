import path from 'path';

const __dirname = path.resolve();

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'same-origin',
                    },
                    // {
                    //     key: 'Content-Security-Policy',
                    //     value: `default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; frame-src 'self'; base-uri 'self'; form-action 'self';`,
                    // },
                ],
            },
        ];
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        let Config = {
            ...config,
            resolve: {
                ...config.resolve,
                alias: {
                    '@': path.resolve(__dirname, './src'),
                    '@App': path.resolve(__dirname, './src/app'),
                    ...config.resolve.alias,
                },
            }
        };
        
        return Config;
    },
};

export default nextConfig;
