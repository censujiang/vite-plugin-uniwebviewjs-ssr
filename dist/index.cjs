'use strict';

let isSSR = false;
function uniWebviewJS() {
  return {
    name: "vite-plugin-uniwebviewjs-ssr",
    //挂载后自动获取vite的import.meta.env.SSR环境变量
    configResolved(config) {
      if (config.env.SSR === "true" || config.env.SSR === true) {
        isSSR = true;
      }
      if (config.env.VITE_SSG === "true" || config.env.VITE_SSG === true) {
        isSSR = true;
      }
      if (config.env.VITE_SSR === "true" || config.env.VITE_SSR === true) {
        isSSR = true;
      }
    }
  };
}
const uni = {
  getEnv: (c) => {
    if (!isSSR) {
      return import('./chunks/hybrid_html_uni.webview.1.5.5.cjs').then(function (n) { return n.hybrid_html_uni_webview_1_5_5; }).then((res) => {
        return res.default.getEnv(c);
      });
    }
  },
  postMessage: (c) => {
    if (!isSSR) {
      return import('./chunks/hybrid_html_uni.webview.1.5.5.cjs').then(function (n) { return n.hybrid_html_uni_webview_1_5_5; }).then((res) => {
        return res.default.postMessage(c);
      });
    }
  },
  navigateTo: (c) => {
    if (!isSSR) {
      return import('./chunks/hybrid_html_uni.webview.1.5.5.cjs').then(function (n) { return n.hybrid_html_uni_webview_1_5_5; }).then((res) => {
        return res.default.navigateTo(c);
      });
    }
  },
  navigateBack: (c) => {
    if (!isSSR) {
      return import('./chunks/hybrid_html_uni.webview.1.5.5.cjs').then(function (n) { return n.hybrid_html_uni_webview_1_5_5; }).then((res) => {
        return res.default.navigateBack(c);
      });
    }
  },
  redirectTo: (c) => {
    if (!isSSR) {
      return import('./chunks/hybrid_html_uni.webview.1.5.5.cjs').then(function (n) { return n.hybrid_html_uni_webview_1_5_5; }).then((res) => {
        return res.default.redirectTo(c);
      });
    }
  },
  reLaunch: (c) => {
    if (!isSSR) {
      return import('./chunks/hybrid_html_uni.webview.1.5.5.cjs').then(function (n) { return n.hybrid_html_uni_webview_1_5_5; }).then((res) => {
        return res.default.reLaunch(c);
      });
    }
  },
  switchTab: (c) => {
    if (!isSSR) {
      return import('./chunks/hybrid_html_uni.webview.1.5.5.cjs').then(function (n) { return n.hybrid_html_uni_webview_1_5_5; }).then((res) => {
        return res.default.switchTab(c);
      });
    }
  }
};

exports.uni = uni;
exports.uniWebviewJS = uniWebviewJS;
