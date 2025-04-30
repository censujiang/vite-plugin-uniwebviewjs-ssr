// name: vite-plugin-uniwebviewjs-ssr
// author: censujiang

import type { UniWebviewJS } from './types'

let isSSR = false
let _hybridModule: UniWebviewJS | null = null

// 插件：用于设置 isSSR
export function uniWebviewJS() {
  return {
    name: 'vite-plugin-uniwebviewjs-ssr',
    configResolved(config: any) {
      const env = config.env
      if (
        env.SSR === 'true' || env.SSR === true ||
        env.VITE_SSR === 'true' || env.VITE_SSR === true ||
        env.VITE_SSG === 'true' || env.VITE_SSG === true
      ) {
        isSSR = true
      }
    }
  }
}

// 加载 hybrid_html_uni.webview 模块
async function loadHybridModule() {
  if (!_hybridModule) {
    const res = await import('./webview.js')
    _hybridModule = res.default
  }
  return _hybridModule as UniWebviewJS
}

// 导出带 SSR 兼容的 uni API
export const uni: UniWebviewJS = {
  async getEnv(callback) {
    if (!isSSR) {
      const mod = await loadHybridModule()
      mod.getEnv(callback)
    }
  },
  async postMessage(message) {
    if (!isSSR) {
      const mod = await loadHybridModule()
      return mod.postMessage(message)
    }
  },
  async navigateTo(options) {
    if (!isSSR) {
      const mod = await loadHybridModule()
      return mod.navigateTo(options)
    }
  },
  async navigateBack(options) {
    if (!isSSR) {
      const mod = await loadHybridModule()
      return mod.navigateBack(options)
    }
  },
  async redirectTo(options) {
    if (!isSSR) {
      const mod = await loadHybridModule()
      return mod.redirectTo(options)
    }
  },
  async reLaunch(options) {
    if (!isSSR) {
      const mod = await loadHybridModule()
      return mod.reLaunch(options)
    }
  },
  async switchTab(options) {
    if (!isSSR) {
      const mod = await loadHybridModule()
      return mod.switchTab(options)
    }
  }
}
