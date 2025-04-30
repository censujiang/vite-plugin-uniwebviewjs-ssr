/// <reference types="@dcloudio/types/uni-app/uni/legacy/uni.d.ts" />

/**
 * uni-webview-js 基本类型定义
 * @description 该类型定义是基于 uni-app 的类型定义进行的简化和修改，主要用于在 webview 中使用 uni-app 的 API
 * @see https://uniapp.dcloud.io/component/web-view.html
 */
export interface UniWebviewJS {
  /**
   * 页面跳转
   * @see {@link Uni["navigateTo"]}
   */
  navigateTo: Uni["navigateTo"]

  /**
   * 页面返回
   * @see {@link Uni["navigateBack"]}
   */
  navigateBack: Uni["navigateBack"]

  /**
   * 切换 Tab
   * @see {@link Uni["switchTab"]}
   */
  switchTab: Uni["switchTab"]

  /**
   * 重启应用并跳转
   * @see {@link Uni["reLaunch"]}
   */
  reLaunch: Uni["reLaunch"]

  /**
   * 重定向页面
   * @see {@link Uni["redirectTo"]}
   */
  redirectTo: Uni["redirectTo"]

  /**
   * 向原生层发送消息
   * @see {@link UniNamespace.SubNVue["postMessage"]}
   * @see https://uniapp.dcloud.io/component/web-view.html#postmessage
   */
  postMessage: UniNamespace.SubNVue["postMessage"]

  /**
   * 获取当前运行环境
   * @description 获取运行环境信息，包括 App、各类小程序等
   * @see https://uniapp.dcloud.io/component/web-view.html#getenv
   */
  getEnv: (
    callback: (res: EnvInfo) => void
  ) => void
}

export type EnvInfo = {
  /**
   * App 平台（包含 Vue 页面）
   */
  plus: boolean
  /**
   * App-nvue 平台（nvue 页面，需 uni.webview.1.5.4.js+）
   */
  nvue: boolean
  /**
   * 微信小程序平台
   */
  miniprogram: boolean
  /**
   * 百度小程序平台
   */
  smartprogram: boolean
  /**
   * 支付宝小程序平台
   */
  alipay: boolean
}
