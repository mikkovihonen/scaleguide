module.exports = {
    assetPrefix: process.env.NODE_ENV === 'production' ? '/scaleguide' : '',
    serverRuntimeConfig: {
        assetPrefix: process.env.NODE_ENV === 'production' ? '/scaleguide' : ''
    },
    publicRuntimeConfig: {
        assetPrefix: process.env.NODE_ENV === 'production' ? '/scaleguide' : ''
    },
    webpack: (config) => {
        config.output.publicPath = `/scaleguide${config.output.publicPath}`; // affects 'chunks'
        return config;
    },
    exportPathMap: function () {
      return {
        '/': { page: '/' },
        '/guide': { page: '/guide' },
      }
    }
  }