# vite-plugin-uniwebviewjs-ssr

This document is available in multiple languages

- [English](#english)
- [Chinese](#Chinese/中文)

## English

vite-plugin-uniwebviewjs-ssr is a solution for using uni-webview-js under vite's SSR (or SSG). Since uni-webview-js is based on the `window` object, it cannot be used under SSR. This plugin provides a `uni` method, which will return an empty object under SSR to avoid errors.

### Install

```bash
npm i vite-plugin-uniwebviewjs-ssr 
```

```bash
yarn add vite-plugin-uniwebviewjs-ssr
```

### Config

First import the plugin in `vite.config.js`, this step is to get whether vite is in SSR mode

```js
// vite.config.js
import { defineConfig } from 'vite'
import { uniWebviewJS } from 'vite-plugin-uniwebviewjs-ssr'

export default defineConfig({
  plugins: [
    uniWebviewJS()
  ]
})
```

### Import

#### Manual import

Import the `uni` method anywhere in your project

```js
import { uni } from 'vite-plugin-uniwebviewjs-ssr'
```

#### Auto import

Install the `unplugin-auto-import` plugin and configure it in vite.config.js

```js
// vite.config.js
import { defineConfig } from 'vite'
import { uniWebviewJS } from 'vite-plugin-uniwebviewjs-ssr'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    uniWebviewJS(),
    AutoImport({
      imports: [
        {
          'vite-plugin-uniwebviewjs-ssr': [
            ['uni', 'uni']
          ]
        }
      ]
    })
  ]
})
```

Now you can use the `uni` method anywhere without importing it manually

### Usage

```js
uni.getEnv((res) => {
  console.log(res)
})
```

For more methods, please refer to the relevant information in the [uni-webview-js](https://uniapp.dcloud.net.cn/component/web-view.html) document. Finally, thank you for using it. I hope you can give this project a star, thank you!

## Chinese/中文

uni-webview-js在vite的SSR（或SSG）下的使用解决方案。由于uni-webview-js是基于`window`对象的，所以在SSR下无法使用，本插件提供了一个`uni`方法，该方法会在SSR下返回一个空对象，以避免报错。

### 安装

```bash
npm i vite-plugin-uniwebviewjs-ssr 
```

```bash
yarn add vite-plugin-uniwebviewjs-ssr
```

### 配置

首先在`vite.config.js`中引入插件，这一步是为了获取vite是否处于SSR模式

```js
// vite.config.js
import { defineConfig } from 'vite'
import { uniWebviewJS } from 'vite-plugin-uniwebviewjs-ssr'

export default defineConfig({
  plugins: [
    uniWebviewJS()
  ]
})
```

### 引入

#### 手动引入

在您工程内任意想使用的地方引入`uni`方法即可

```js
import { uni } from 'vite-plugin-uniwebviewjs-ssr'
```

#### 自动引入

安装`unplugin-auto-import`插件，并在vite.config.js中配置

```js
// vite.config.js
import { defineConfig } from 'vite'
import { uniWebviewJS } from 'vite-plugin-uniwebviewjs-ssr'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    uniWebviewJS(),
    AutoImport({
      imports: [
        {
          'vite-plugin-uniwebviewjs-ssr': [
            ['uni', 'uni']
          ]
        }
      ]
    })
  ]
})
```

这样你就可以在任意地方直接使用`uni`方法了，无需手动引入

### 使用

```js
uni.getEnv((res) => {
  console.log(res)
})
```

更多方法请参考[uni-webview-js](https://uniapp.dcloud.net.cn/component/web-view.html)文档中的相关信息，最后感谢uni-app团队的开发者们和您的使用，希望您能给本项目一个star，谢谢！
