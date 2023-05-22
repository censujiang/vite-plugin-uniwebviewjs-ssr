//name: vite-plugin-uniwebviewjs-ssr
//author: censujiang
import uniOrigin from '@dcloudio/uni-webview-js';
let isSSR = false;
//导出一个插件函数以供获取vite的import.meta.env.SSR环境变量
export function uniWebviewJS() {
    return {
        name: 'vite-plugin-uniwebviewjs-ssr',
        //挂载后自动获取vite的import.meta.env.SSR环境变量
        configResolved(config) {
            isSSR = config.isSSR;
        }
    };
}
//导出一个对象，包含了uni的getEnv、postMessage、navigateTo、navigateBack、redirectTo、reLaunch、switchTab方法
export const uni = {
    getEnv: (func) => {
        if (!isSSR) {
            return uni.getEnv(func);
        }
    },
    postMessage: (value) => {
        if (!isSSR) {
            return uniOrigin.postMessage(value);
        }
    },
    navigateTo: (value) => {
        if (!isSSR) {
            return uniOrigin.navigateTo(value);
        }
    },
    navigateBack: (value) => {
        if (!isSSR) {
            return uniOrigin.navigateBack(value);
        }
    },
    redirectTo: (value) => {
        if (!isSSR) {
            return uniOrigin.redirectTo(value);
        }
    },
    reLaunch: (value) => {
        if (!isSSR) {
            return uniOrigin.reLaunch(value);
        }
    },
    switchTab: (value) => {
        if (!isSSR) {
            return uniOrigin.switchTab(value);
        }
    }
};
