module.exports = {
    assetPrefix: process.env.NODE_ENV === 'production' ? '/scaleguide/' : '',
    exportPathMap: function () {
      return {
        '/': { page: '/' },
        '/guide': { page: '/guide' },
      }
    }
  }