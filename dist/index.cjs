'use strict';

let isSSR = false;
let _hybridModule = null;
function uniWebviewJS() {
  return {
    name: "vite-plugin-uniwebviewjs-ssr",
    configResolved(config) {
      const env = config.env;
      if (env.SSR === "true" || env.SSR === true || env.VITE_SSR === "true" || env.VITE_SSR === true || env.VITE_SSG === "true" || env.VITE_SSG === true) {
        isSSR = true;
      }
    }
  };
}
async function loadHybridModule() {
  if (!_hybridModule) {
    const res = await import('./chunks/webview.cjs').then(function (n) { return n.webview; });
    _hybridModule = res.default;
  }
  return _hybridModule;
}
const uni = {
  async getEnv(callback) {
    if (!isSSR) {
      const mod = await loadHybridModule();
      mod.getEnv(callback);
    }
  },
  async postMessage(message) {
    if (!isSSR) {
      const mod = await loadHybridModule();
      return mod.postMessage(message);
    }
  },
  async navigateTo(options) {
    if (!isSSR) {
      const mod = await loadHybridModule();
      return mod.navigateTo(options);
    }
  },
  async navigateBack(options) {
    if (!isSSR) {
      const mod = await loadHybridModule();
      return mod.navigateBack(options);
    }
  },
  async redirectTo(options) {
    if (!isSSR) {
      const mod = await loadHybridModule();
      return mod.redirectTo(options);
    }
  },
  async reLaunch(options) {
    if (!isSSR) {
      const mod = await loadHybridModule();
      return mod.reLaunch(options);
    }
  },
  async switchTab(options) {
    if (!isSSR) {
      const mod = await loadHybridModule();
      return mod.switchTab(options);
    }
  }
};

exports.uni = uni;
exports.uniWebviewJS = uniWebviewJS;
