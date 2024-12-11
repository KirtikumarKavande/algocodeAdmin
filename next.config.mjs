/** @type {import('next').NextConfig} */
export default {
    eslint: {
      ignoreDuringBuilds: true, // Ignore ESLint warnings
    },
    webpack(config, { isServer }) {
      if (!isServer) {
        config.resolve.fallback = {
          ...config.resolve.fallback,
          'supports-color': false, // Suppress supports-color warnings
        };
      }
      if (process.env.NEXT_PUBLIC_BUILD_IGNORE_WARNINGS) {
        console.warn = () => {};
        console.error = () => {};
      }
      return config;
    },
  };
  