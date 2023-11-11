//name: vite-plugin-uniwebviewjs-ssr
//author: censujiang
let isSSR = false
//导出一个插件函数以供获取vite的import.meta.env.SSR环境变量
export function uniWebviewJS() {
  return {
    name: 'vite-plugin-uniwebviewjs-ssr',
    //挂载后自动获取vite的import.meta.env.SSR环境变量
    configResolved(config: any) {
      if (config.env.SSR === 'true' || config.env.SSR === true) {
        isSSR = true
      }
      if(config.env.VITE_SSG === 'true' || config.env.VITE_SSG === true){
        isSSR = true
      }
      if(config.env.VITE_SSR === 'true' || config.env.VITE_SSR === true){
        isSSR = true
      }
    }
  }
}

//导出一个对象，包含了uni的getEnv、postMessage、navigateTo、navigateBack、redirectTo、reLaunch、switchTab方法
export const uni = {
  getEnv: (c: any) => {
    if (!isSSR) {
      return import('@dcloudio/uni-webview-js' as any).then((res) => {
        return res.default.getEnv(c);
      });
    }
  },
  postMessage: (c: any) => {
    if (!isSSR) {
      return import('@dcloudio/uni-webview-js' as any).then((res) => {
        return res.default.postMessage(c);
      });
    }
  },
  navigateTo: (c: any) => {
    if (!isSSR) {
      return import('@dcloudio/uni-webview-js' as any).then((res) => {
        return res.default.navigateTo(c);
      })
    }
  },
  navigateBack: (c: any) => {
    if (!isSSR) {
      return import('@dcloudio/uni-webview-js' as any).then((res) => {
        return res.default.navigateBack(c);
      })
    }
  },
  redirectTo: (c: any) => {
    if (!isSSR) {
      return import('@dcloudio/uni-webview-js' as any).then((res) => {
        return res.default.redirectTo(c);
      })
    }
  },
  reLaunch: (c: any) => {
    if (!isSSR) {
      return import('@dcloudio/uni-webview-js' as any).then((res) => {
        return res.default.reLaunch(c);
      })
    }
  },
  switchTab: (c: any) => {
    if (!isSSR) {
      return import('@dcloudio/uni-webview-js' as any).then((res) => {
        return res.default.switchTab(c);
      })
    }
  },
}