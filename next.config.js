const nextConfig = {
    experimental: {
        viewTransition: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "ui-avatars.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "images.pexels.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "**",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

module.exports = nextConfig;