let modules
try {
  const u = await import('@dcloudio/uni-webview-js');
  modules = u.default
} catch (e) {
}
export const uni = modules