import { extend } from 'umi-request';
import { notification } from 'antd';

const codeMassage = {
  200: '请求成功',
};

/**
 * 错误处理函数
 * @param error
 * @returns {*}
 */
const errorHandler = (error) => {
  const { response } = error;
  if (response && response.status) {
    const errorText = codeMassage[response.status] || response.statusText;
    const { status, url } = response;
    notification.error({
      message: `请求错误 ${status}: ${url}`,
      description: errorText,
    });
  } else if (!response) {
    notification.error({
      massage: '网络异常',
      description: '您的网络异常，无法连接服务器',
    });
  }
  return response;
};

const request = extend({
  errorHandler,
  credentials: 'include',
});

request.interceptors.request.use((url, options) => {
  const token = localStorage.getItem('token') || '';
  const headers = {
    satoken: token,
  };

  return {
    url,
    options: { ...options, headers },
  };
});

export default request;
