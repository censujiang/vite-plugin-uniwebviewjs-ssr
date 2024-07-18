function _mergeNamespaces(n, m) {
	for (var i = 0; i < m.length; i++) {
		const e = m[i];
		if (typeof e !== 'string' && !Array.isArray(e)) { for (const k in e) {
			if (k !== 'default' && !(k in n)) {
				n[k] = e[k];
			}
		} }
	}
	return n;
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var hybrid_html_uni_webview_1_5_5$2 = {exports: {}};

(function (module, exports) {
	!function(e, n) {
	  module.exports = n() ;
	}(commonjsGlobal, function() {
	  try {
	    var e = {};
	    Object.defineProperty(e, "passive", { get: function() {
	    } }), window.addEventListener("test-passive", null, e);
	  } catch (e2) {
	  }
	  var n = Object.prototype.hasOwnProperty;
	  function i(e2, i2) {
	    return n.call(e2, i2);
	  }
	  var t = [];
	  function o() {
	    return window.__dcloud_weex_postMessage || window.__dcloud_weex_;
	  }
	  function a() {
	    return window.__uniapp_x_postMessage || window.__uniapp_x_;
	  }
	  var r = function(e2, n2) {
	    var i2 = { options: { timestamp: +/* @__PURE__ */ new Date() }, name: e2, arg: n2 };
	    if (a()) {
	      if ("postMessage" === e2) {
	        var r2 = { data: n2 };
	        return window.__uniapp_x_postMessage ? window.__uniapp_x_postMessage(r2) : window.__uniapp_x_.postMessage(JSON.stringify(r2));
	      }
	      var d2 = { type: "WEB_INVOKE_APPSERVICE", args: { data: i2, webviewIds: t } };
	      window.__uniapp_x_postMessage ? window.__uniapp_x_postMessageToService(d2) : window.__uniapp_x_.postMessageToService(JSON.stringify(d2));
	    } else if (o()) {
	      if ("postMessage" === e2) {
	        var s2 = { data: [n2] };
	        return window.__dcloud_weex_postMessage ? window.__dcloud_weex_postMessage(s2) : window.__dcloud_weex_.postMessage(JSON.stringify(s2));
	      }
	      var w2 = { type: "WEB_INVOKE_APPSERVICE", args: { data: i2, webviewIds: t } };
	      window.__dcloud_weex_postMessage ? window.__dcloud_weex_postMessageToService(w2) : window.__dcloud_weex_.postMessageToService(JSON.stringify(w2));
	    } else {
	      if (!window.plus)
	        return window.parent.postMessage({ type: "WEB_INVOKE_APPSERVICE", data: i2, pageId: "" }, "*");
	      if (0 === t.length) {
	        var u2 = plus.webview.currentWebview();
	        if (!u2)
	          throw new Error("plus.webview.currentWebview() is undefined");
	        var g2 = u2.parent(), v2 = "";
	        v2 = g2 ? g2.id : u2.id, t.push(v2);
	      }
	      if (plus.webview.getWebviewById("__uniapp__service"))
	        plus.webview.postMessageToUniNView({ type: "WEB_INVOKE_APPSERVICE", args: { data: i2, webviewIds: t } }, "__uniapp__service");
	      else {
	        var c2 = JSON.stringify(i2);
	        plus.webview.getLaunchWebview().evalJS('UniPlusBridge.subscribeHandler("'.concat("WEB_INVOKE_APPSERVICE", '",').concat(c2, ",").concat(JSON.stringify(t), ");"));
	      }
	    }
	  }, d = { navigateTo: function() {
	    var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n2 = e2.url;
	    r("navigateTo", { url: encodeURI(n2) });
	  }, navigateBack: function() {
	    var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n2 = e2.delta;
	    r("navigateBack", { delta: parseInt(n2) || 1 });
	  }, switchTab: function() {
	    var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n2 = e2.url;
	    r("switchTab", { url: encodeURI(n2) });
	  }, reLaunch: function() {
	    var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n2 = e2.url;
	    r("reLaunch", { url: encodeURI(n2) });
	  }, redirectTo: function() {
	    var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n2 = e2.url;
	    r("redirectTo", { url: encodeURI(n2) });
	  }, getEnv: function(e2) {
	    a() ? e2({ uvue: true }) : o() ? e2({ nvue: true }) : window.plus ? e2({ plus: true }) : e2({ h5: true });
	  }, postMessage: function() {
	    var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
	    r("postMessage", e2.data || {});
	  } }, s = /uni-app/i.test(navigator.userAgent), w = /Html5Plus/i.test(navigator.userAgent), u = /complete|loaded|interactive/;
	  var g = window.my && navigator.userAgent.indexOf(["t", "n", "e", "i", "l", "C", "y", "a", "p", "i", "l", "A"].reverse().join("")) > -1;
	  var v = window.swan && window.swan.webView && /swan/i.test(navigator.userAgent);
	  var c = window.qq && window.qq.miniProgram && /QQ/i.test(navigator.userAgent) && /miniProgram/i.test(navigator.userAgent);
	  var p = window.tt && window.tt.miniProgram && /toutiaomicroapp/i.test(navigator.userAgent);
	  var _ = window.wx && window.wx.miniProgram && /micromessenger/i.test(navigator.userAgent) && /miniProgram/i.test(navigator.userAgent);
	  var m = window.qa && /quickapp/i.test(navigator.userAgent);
	  var f = window.ks && window.ks.miniProgram && /micromessenger/i.test(navigator.userAgent) && /miniProgram/i.test(navigator.userAgent);
	  var l = window.tt && window.tt.miniProgram && /Lark|Feishu/i.test(navigator.userAgent);
	  var E = window.jd && window.jd.miniProgram && /micromessenger/i.test(navigator.userAgent) && /miniProgram/i.test(navigator.userAgent);
	  var x = window.xhs && window.xhs.miniProgram && /xhsminiapp/i.test(navigator.userAgent);
	  for (var S, h = function() {
	    window.UniAppJSBridge = true, document.dispatchEvent(new CustomEvent("UniAppJSBridgeReady", { bubbles: true, cancelable: true }));
	  }, y = [function(e2) {
	    if (s || w)
	      return window.__uniapp_x_postMessage || window.__uniapp_x_ || window.__dcloud_weex_postMessage || window.__dcloud_weex_ ? document.addEventListener("DOMContentLoaded", e2) : window.plus && u.test(document.readyState) ? setTimeout(e2, 0) : document.addEventListener("plusready", e2), d;
	  }, function(e2) {
	    if (_)
	      return window.WeixinJSBridge && window.WeixinJSBridge.invoke ? setTimeout(e2, 0) : document.addEventListener("WeixinJSBridgeReady", e2), window.wx.miniProgram;
	  }, function(e2) {
	    if (c)
	      return window.QQJSBridge && window.QQJSBridge.invoke ? setTimeout(e2, 0) : document.addEventListener("QQJSBridgeReady", e2), window.qq.miniProgram;
	  }, function(e2) {
	    if (g) {
	      document.addEventListener("DOMContentLoaded", e2);
	      var n2 = window.my;
	      return { navigateTo: n2.navigateTo, navigateBack: n2.navigateBack, switchTab: n2.switchTab, reLaunch: n2.reLaunch, redirectTo: n2.redirectTo, postMessage: n2.postMessage, getEnv: n2.getEnv };
	    }
	  }, function(e2) {
	    if (v)
	      return document.addEventListener("DOMContentLoaded", e2), window.swan.webView;
	  }, function(e2) {
	    if (p)
	      return document.addEventListener("DOMContentLoaded", e2), window.tt.miniProgram;
	  }, function(e2) {
	    if (m) {
	      window.QaJSBridge && window.QaJSBridge.invoke ? setTimeout(e2, 0) : document.addEventListener("QaJSBridgeReady", e2);
	      var n2 = window.qa;
	      return { navigateTo: n2.navigateTo, navigateBack: n2.navigateBack, switchTab: n2.switchTab, reLaunch: n2.reLaunch, redirectTo: n2.redirectTo, postMessage: n2.postMessage, getEnv: n2.getEnv };
	    }
	  }, function(e2) {
	    if (f)
	      return window.WeixinJSBridge && window.WeixinJSBridge.invoke ? setTimeout(e2, 0) : document.addEventListener("WeixinJSBridgeReady", e2), window.ks.miniProgram;
	  }, function(e2) {
	    if (l)
	      return document.addEventListener("DOMContentLoaded", e2), window.tt.miniProgram;
	  }, function(e2) {
	    if (E)
	      return window.JDJSBridgeReady && window.JDJSBridgeReady.invoke ? setTimeout(e2, 0) : document.addEventListener("JDJSBridgeReady", e2), window.jd.miniProgram;
	  }, function(e2) {
	    if (x)
	      return window.xhs.miniProgram;
	  }, function(e2) {
	    return document.addEventListener("DOMContentLoaded", e2), d;
	  }], M = 0; M < y.length && !(S = y[M](h)); M++)
	    ;
	  S || (S = {});
	  var P = "undefined" != typeof uni ? uni : {};
	  if (!P.navigateTo)
	    for (var b in S)
	      i(S, b) && (P[b] = S[b]);
	  return P.webView = S, P;
	}); 
} (hybrid_html_uni_webview_1_5_5$2));

var hybrid_html_uni_webview_1_5_5Exports = hybrid_html_uni_webview_1_5_5$2.exports;
const hybrid_html_uni_webview_1_5_5 = /*@__PURE__*/getDefaultExportFromCjs(hybrid_html_uni_webview_1_5_5Exports);

const hybrid_html_uni_webview_1_5_5$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: hybrid_html_uni_webview_1_5_5
}, [hybrid_html_uni_webview_1_5_5Exports]);

export { hybrid_html_uni_webview_1_5_5$1 as h };
