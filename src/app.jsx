import { PageLoading, SettingDrawer } from '@ant-design/pro-layout';
import { history } from 'umi';
import { message } from 'antd';
import RightContent from '@/components/RightContent';
import defaultSettings from '../config/defaultSettings';

import request from '@/utils/request';
import { isLogin } from '@/services/user/login';

const loginPath = '/user/login';
/** 获取用户信息比较慢的时候会展示一个 loading */

export const initialStateConfig = {
  loading: <PageLoading />,
};

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */

export async function getInitialState() {
  const fetchUserInfo = async () => {
    return new Promise((resolve, reject) => {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'));
      if (userInfo) {
        const data = {
          success: true,
          data: userInfo,
        };
        resolve(data);
      } else {
        reject();
      }
    });
  };
  // 如果不是登录页面
  if (history.location.pathname !== loginPath) {
    const userInfo = await fetchUserInfo();

    return {
      fetchUserInfo,
      currentUser: userInfo,
      settings: defaultSettings,
    };
  }

  return {
    fetchUserInfo,
    settings: defaultSettings,
  };
}

export const layout = ({ initialState, setInitialState }) => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  return {
    rightContentRender: () => <RightContent />,
    disableContentMargin: false,

    // footerRender: () => <Footer />,

    //当页面改变时的操作
    onPageChange: async (props) => {
      const { location } = history;
      // 如果没有登陆，并且不是在登陆界面，那么返回登陆界面
      // TODO 暂时停止登录
      // const res = await isLogin();
      // if (location.pathname !== loginPath && res.msg !== '当前账号已登录') {
      //   message.error('当前账号还未登录');
      //   history.push(loginPath);
      // }
    },

    menuHeaderRender: undefined,
    childrenRender: (children, props) => {
      // if (initialState?.loading) return <PageLoading />;
      return (
        <>
          {children}
          {!props.location?.pathname?.includes('/login') && (
            <SettingDrawer
              enableDarkTheme
              settings={initialState?.settings}
              onSettingChange={(settings) => {
                setInitialState((preInitialState) => ({ ...preInitialState, settings }));
              }}
            />
          )}
        </>
      );
    },
    ...initialState?.settings,
  };
};
