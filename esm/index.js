//name: vite-plugin-uniwebviewjs-ssr
//author: censujiang
let isSSR = false;
//导出一个插件函数以供获取vite的import.meta.env.SSR环境变量
export function uniWebviewJS() {
    return {
        name: 'vite-plugin-uniwebviewjs-ssr',
        //挂载后自动获取vite的import.meta.env.SSR环境变量
        configResolved(config) {
            if (config.env.SSR === 'true' || config.env.SSR === true) {
                isSSR = true;
            }
            if (config.env.VITE_SSG === 'true' || config.env.VITE_SSG === true) {
                isSSR = true;
            }
            if (config.env.VITE_SSR === 'true' || config.env.VITE_SSR === true) {
                isSSR = true;
            }
            console.log(config);
        }
    };
}
//导出一个对象，包含了uni的getEnv、postMessage、navigateTo、navigateBack、redirectTo、reLaunch、switchTab方法
export const uni = {
    getEnv: (c) => {
        if (!isSSR) {
            return import('@dcloudio/uni-webview-js').then((res) => {
                return res.default.getEnv(c);
            });
        }
    },
    postMessage: (c) => {
        if (!isSSR) {
            return import('@dcloudio/uni-webview-js').then((res) => {
                return res.default.postMessage(c);
            });
        }
    },
    navigateTo: (c) => {
        if (!isSSR) {
            return import('@dcloudio/uni-webview-js').then((res) => {
                return res.default.navigateTo(c);
            });
        }
    },
    navigateBack: (c) => {
        if (!isSSR) {
            return import('@dcloudio/uni-webview-js').then((res) => {
                return res.default.navigateBack(c);
            });
        }
    },
    redirectTo: (c) => {
        if (!isSSR) {
            return import('@dcloudio/uni-webview-js').then((res) => {
                return res.default.redirectTo(c);
            });
        }
    },
    reLaunch: (c) => {
        if (!isSSR) {
            return import('@dcloudio/uni-webview-js').then((res) => {
                return res.default.reLaunch(c);
            });
        }
    },
    switchTab: (c) => {
        if (!isSSR) {
            return import('@dcloudio/uni-webview-js').then((res) => {
                return res.default.switchTab(c);
            });
        }
    },
};
