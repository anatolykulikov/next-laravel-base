const withLinaria = require('next-linaria');

module.exports = withLinaria({
    reactStrictMode: true,
    productionBrowserSourceMaps: true,
    webpack(config, options) {
        return config;
    },
});