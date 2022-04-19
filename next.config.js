/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
}

module.exports = {
    images: {
        domains: ['courses-top.ru']
    },
    webpack(config, options) {
        config.module.rules.push({
            loader: '@svgr/webpack',
            issuer: /\.[jt]sx?$/,
            options: {
                prettier: false,
                svgo: true,
                svgoConfig: {
                    plagins: [{
                        name: 'preset-defolt',
                        params: {
                            override: {
                                removeViewBox: false
                            }
                        }
                    }]
                },
                titleProp: true,
            },
            test: /\.svg$/,
        })
        return config
    },
}
