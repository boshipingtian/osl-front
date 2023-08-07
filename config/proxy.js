/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * -------------------------------
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */
export default {
  dev: {
    // localhost:8000/api/** -> https://preview.pro.ant.design/api/**
    '/admin/': {
      // 要代理的地址
      target: 'http://39.105.101.7:8081',
      // 配置了这个可以从 http 代理到 https
      // 依赖 origin 的功能可能需要这个，比如 cookie
      changeOrigin: true,
    },
    '/user/': {
      target: 'http://39.105.101.7:8081',
      changeOrigin: true,
    },
    '/order/': {
      target: 'http://39.105.101.7:8081',
      changeOrigin: true,
    },
    '/device/': {
      target: 'http://39.105.101.7:8081',
      changeOrigin: true,
    },
    '/tranContract/': {
      target: 'http://39.105.101.7:8081',
      changeOrigin: true,
    },
    '/car/': {
      target: 'http://39.105.101.7:8081',
      changeOrigin: true,
    },
    '/orderException/': {
      target: 'http://39.105.101.7:8081',
      changeOrigin: true,
    },
    //运力
    '/lamp/': {
      target: 'http://ernest.work/',
      changeOrigin: true,
    },
    //订单
    '/orderdetail/': {
      target: 'http://150.158.15.192:8081',
      changeOrigin: true,
    },
    //运单
    '/tranDetail/': {
      target: 'http://150.158.15.192:8081',
      changeOrigin: true,
    },
  },
  test: {
    '/api/': {
      target: 'https://proapi.azurewebsites.net',
      changeOrigin: true,
      pathRewrite: {
        '^': '',
      },
    },
  },
  pre: {
    '/api/': {
      target: 'http://127.0.0.1:8888',
      changeOrigin: true,
      pathRewrite: {
        '^': '',
      },
    },
  },
};
