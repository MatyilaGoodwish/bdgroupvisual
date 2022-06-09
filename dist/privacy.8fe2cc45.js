// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"40z7c":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "39f480a68fe2cc45";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"7Oa7r":[function(require,module,exports) {
var _bootstrapBundleMinJs = require("./assets/vendor/bootstrap/js/bootstrap.bundle.min.js");
var _glightboxMinJs = require("./assets/vendor/glightbox/js/glightbox.min.js");
var _swiperBundleMinJs = require("./assets/vendor/swiper/swiper-bundle.min.js");
var _validateJs = require("./assets/vendor/php-email-form/validate.js");
var _mainJs = require("./assets/js/main.js");
var _sweetalert211Js = require("./vendor/sweetalert2@11.js"); /*
//live chat import
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
  var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = 'https://embed.tawk.to/5db1f93178ab74187a5b66df/default';
  s1.charset = 'UTF-8';
  s1.setAttribute('crossorigin', '*');
  s0.parentNode.insertBefore(s1, s0);
})();
*/ 

},{"./assets/vendor/bootstrap/js/bootstrap.bundle.min.js":"kF7gY","./assets/vendor/glightbox/js/glightbox.min.js":"hIRsT","./assets/vendor/swiper/swiper-bundle.min.js":"7Q5rx","./assets/vendor/php-email-form/validate.js":"lQRlf","./assets/js/main.js":"7VZFR","./vendor/sweetalert2@11.js":"7fRPT"}],"kF7gY":[function(require,module,exports) {
/*!
  * Bootstrap v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */ !function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e();
}(this, function() {
    "use strict";
    const t1 = "transitionend", e1 = (t)=>{
        let e = t.getAttribute("data-bs-target");
        if (!e || "#" === e) {
            let i = t.getAttribute("href");
            if (!i || !i.includes("#") && !i.startsWith(".")) return null;
            i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`), e = i && "#" !== i ? i.trim() : null;
        }
        return e;
    }, i1 = (t)=>{
        const i = e1(t);
        return i && document.querySelector(i) ? i : null;
    }, n1 = (t)=>{
        const i = e1(t);
        return i ? document.querySelector(i) : null;
    }, s1 = (e)=>{
        e.dispatchEvent(new Event(t1));
    }, o1 = (t)=>!(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType)
    , r1 = (t)=>o1(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(t) : null
    , a1 = (t, e, i)=>{
        Object.keys(i).forEach((n)=>{
            const s = i[n], r = e[n], a = r && o1(r) ? "element" : null == (l = r) ? `${l}` : ({
            }).toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();
            var l;
            if (!new RegExp(s).test(a)) throw new TypeError(`${t.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${s}".`);
        });
    }, l1 = (t)=>!(!o1(t) || 0 === t.getClientRects().length) && "visible" === getComputedStyle(t).getPropertyValue("visibility")
    , c1 = (t)=>!t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled"))
    , h1 = (t)=>{
        if (!document.documentElement.attachShadow) return null;
        if ("function" == typeof t.getRootNode) {
            const e = t.getRootNode();
            return e instanceof ShadowRoot ? e : null;
        }
        return t instanceof ShadowRoot ? t : t.parentNode ? h1(t.parentNode) : null;
    }, d1 = ()=>{
    }, u1 = (t)=>{
        t.offsetHeight;
    }, f1 = ()=>{
        const { jQuery: t  } = window;
        return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null;
    }, p1 = [], m1 = ()=>"rtl" === document.documentElement.dir
    , g1 = (t2)=>{
        var e2;
        e2 = ()=>{
            const e = f1();
            if (e) {
                const i = t2.NAME, n = e.fn[i];
                e.fn[i] = t2.jQueryInterface, e.fn[i].Constructor = t2, e.fn[i].noConflict = ()=>(e.fn[i] = n, t2.jQueryInterface)
                ;
            }
        }, "loading" === document.readyState ? (p1.length || document.addEventListener("DOMContentLoaded", ()=>{
            p1.forEach((t)=>t()
            );
        }), p1.push(e2)) : e2();
    }, _1 = (t)=>{
        "function" == typeof t && t();
    }, b1 = (e3, i2, n2 = !0)=>{
        if (!n2) return void _1(e3);
        const o = ((t)=>{
            if (!t) return 0;
            let { transitionDuration: e , transitionDelay: i  } = window.getComputedStyle(t);
            const n = Number.parseFloat(e), s = Number.parseFloat(i);
            return n || s ? (e = e.split(",")[0], i = i.split(",")[0], 1000 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0;
        })(i2) + 5;
        let r = !1;
        const a = ({ target: n  })=>{
            n === i2 && (r = !0, i2.removeEventListener(t1, a), _1(e3));
        };
        i2.addEventListener(t1, a), setTimeout(()=>{
            r || s1(i2);
        }, o);
    }, v1 = (t, e, i, n)=>{
        let s = t.indexOf(e);
        if (-1 === s) return t[!i && n ? t.length - 1 : 0];
        const o = t.length;
        return s += i ? 1 : -1, n && (s = (s + o) % o), t[Math.max(0, Math.min(s, o - 1))];
    }, y1 = /[^.]*(?=\..*)\.|.*/, w1 = /\..*/, E1 = /::\d+$/, A1 = {
    };
    let T1 = 1;
    const O1 = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, C1 = /^(mouseenter|mouseleave)/i, k1 = new Set([
        "click",
        "dblclick",
        "mouseup",
        "mousedown",
        "contextmenu",
        "mousewheel",
        "DOMMouseScroll",
        "mouseover",
        "mouseout",
        "mousemove",
        "selectstart",
        "selectend",
        "keydown",
        "keypress",
        "keyup",
        "orientationchange",
        "touchstart",
        "touchmove",
        "touchend",
        "touchcancel",
        "pointerdown",
        "pointermove",
        "pointerup",
        "pointerleave",
        "pointercancel",
        "gesturestart",
        "gesturechange",
        "gestureend",
        "focus",
        "blur",
        "change",
        "reset",
        "select",
        "submit",
        "focusin",
        "focusout",
        "load",
        "unload",
        "beforeunload",
        "resize",
        "move",
        "DOMContentLoaded",
        "readystatechange",
        "error",
        "abort",
        "scroll"
    ]);
    function L1(t, e) {
        return e && `${e}::${T1++}` || t.uidEvent || T1++;
    }
    function x1(t) {
        const e = L1(t);
        return t.uidEvent = e, A1[e] = A1[e] || {
        }, A1[e];
    }
    function D1(t, e, i = null) {
        const n = Object.keys(t);
        for(let s = 0, o = n.length; s < o; s++){
            const o = t[n[s]];
            if (o.originalHandler === e && o.delegationSelector === i) return o;
        }
        return null;
    }
    function S1(t, e, i) {
        const n = "string" == typeof e, s = n ? i : e;
        let o = P1(t);
        return k1.has(o) || (o = t), [
            n,
            s,
            o
        ];
    }
    function N1(t4, e4, i3, n3, s2) {
        if ("string" != typeof e4 || !t4) return;
        if (i3 || (i3 = n3, n3 = null), C1.test(e4)) {
            const t3 = (t)=>function(e) {
                    if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e);
                }
            ;
            n3 ? n3 = t3(n3) : i3 = t3(i3);
        }
        const [o2, r2, a2] = S1(e4, i3, n3), l = x1(t4), c = l[a2] || (l[a2] = {
        }), h = D1(c, r2, o2 ? i3 : null);
        if (h) return void (h.oneOff = h.oneOff && s2);
        const d = L1(r2, e4.replace(y1, "")), u = o2 ? function(t, e, i) {
            return function n(s) {
                const o = t.querySelectorAll(e);
                for(let { target: r  } = s; r && r !== this; r = r.parentNode)for(let a = o.length; a--;)if (o[a] === r) return s.delegateTarget = r, n.oneOff && j1.off(t, s.type, e, i), i.apply(r, [
                    s
                ]);
                return null;
            };
        }(t4, i3, n3) : function(t, e) {
            return function i(n) {
                return n.delegateTarget = t, i.oneOff && j1.off(t, n.type, e), e.apply(t, [
                    n
                ]);
            };
        }(t4, i3);
        u.delegationSelector = o2 ? i3 : null, u.originalHandler = r2, u.oneOff = s2, u.uidEvent = d, c[d] = u, t4.addEventListener(a2, u, o2);
    }
    function I1(t, e, i, n, s) {
        const o = D1(e[i], n, s);
        o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
    }
    function P1(t) {
        return t = t.replace(w1, ""), O1[t] || t;
    }
    const j1 = {
        on (t, e, i, n) {
            N1(t, e, i, n, !1);
        },
        one (t, e, i, n) {
            N1(t, e, i, n, !0);
        },
        off (t5, e5, i4, n4) {
            if ("string" != typeof e5 || !t5) return;
            const [s3, o3, r] = S1(e5, i4, n4), a = r !== e5, l = x1(t5), c = e5.startsWith(".");
            if (void 0 !== o3) {
                if (!l || !l[r]) return;
                return void I1(t5, l, r, o3, s3 ? i4 : null);
            }
            c && Object.keys(l).forEach((i5)=>{
                !function(t, e, i, n5) {
                    const s = e[i] || {
                    };
                    Object.keys(s).forEach((o)=>{
                        if (o.includes(n5)) {
                            const n = s[o];
                            I1(t, e, i, n.originalHandler, n.delegationSelector);
                        }
                    });
                }(t5, l, i5, e5.slice(1));
            });
            const h = l[r] || {
            };
            Object.keys(h).forEach((i)=>{
                const n = i.replace(E1, "");
                if (!a || e5.includes(n)) {
                    const e = h[i];
                    I1(t5, l, r, e.originalHandler, e.delegationSelector);
                }
            });
        },
        trigger (t6, e, i) {
            if ("string" != typeof e || !t6) return null;
            const n = f1(), s = P1(e), o = e !== s, r = k1.has(s);
            let a, l = !0, c = !0, h = !1, d = null;
            return o && n && (a = n.Event(e, i), n(t6).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), h = a.isDefaultPrevented()), r ? (d = document.createEvent("HTMLEvents"), d.initEvent(s, l, !0)) : d = new CustomEvent(e, {
                bubbles: l,
                cancelable: !0
            }), void 0 !== i && Object.keys(i).forEach((t)=>{
                Object.defineProperty(d, t, {
                    get: ()=>i[t]
                });
            }), h && d.preventDefault(), c && t6.dispatchEvent(d), d.defaultPrevented && void 0 !== a && a.preventDefault(), d;
        }
    }, M1 = new Map, H1 = {
        set (t, e, i) {
            M1.has(t) || M1.set(t, new Map);
            const n = M1.get(t);
            n.has(e) || 0 === n.size ? n.set(e, i) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`);
        },
        get: (t, e)=>M1.has(t) && M1.get(t).get(e) || null
        ,
        remove (t, e) {
            if (!M1.has(t)) return;
            const i = M1.get(t);
            i.delete(e), 0 === i.size && M1.delete(t);
        }
    };
    class B1 {
        constructor(t10){
            (t10 = r1(t10)) && (this._element = t10, H1.set(this._element, this.constructor.DATA_KEY, this));
        }
        dispose() {
            H1.remove(this._element, this.constructor.DATA_KEY), j1.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach((t)=>{
                this[t] = null;
            });
        }
        _queueCallback(t7, e7, i6 = !0) {
            b1(t7, e7, i6);
        }
        static getInstance(t8) {
            return H1.get(r1(t8), this.DATA_KEY);
        }
        static getOrCreateInstance(t9, e6 = {
        }) {
            return this.getInstance(t9) || new this(t9, "object" == typeof e6 ? e6 : null);
        }
        static get VERSION() {
            return "5.1.3";
        }
        static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!');
        }
        static get DATA_KEY() {
            return `bs.${this.NAME}`;
        }
        static get EVENT_KEY() {
            return `.${this.DATA_KEY}`;
        }
    }
    const R1 = (t, e = "hide")=>{
        const i7 = `click.dismiss${t.EVENT_KEY}`, s = t.NAME;
        j1.on(document, i7, `[data-bs-dismiss="${s}"]`, function(i) {
            if ([
                "A",
                "AREA"
            ].includes(this.tagName) && i.preventDefault(), c1(this)) return;
            const o = n1(this) || this.closest(`.${s}`);
            t.getOrCreateInstance(o)[e]();
        });
    };
    class W1 extends B1 {
        static get NAME() {
            return "alert";
        }
        close() {
            if (j1.trigger(this._element, "close.bs.alert").defaultPrevented) return;
            this._element.classList.remove("show");
            const t = this._element.classList.contains("fade");
            this._queueCallback(()=>this._destroyElement()
            , this._element, t);
        }
        _destroyElement() {
            this._element.remove(), j1.trigger(this._element, "closed.bs.alert"), this.dispose();
        }
        static jQueryInterface(t12) {
            return this.each(function() {
                const e = W1.getOrCreateInstance(this);
                if ("string" == typeof t12) {
                    if (void 0 === e[t12] || t12.startsWith("_") || "constructor" === t12) throw new TypeError(`No method named "${t12}"`);
                    e[t12](this);
                }
            });
        }
    }
    R1(W1, "close"), g1(W1);
    const $1 = '[data-bs-toggle="button"]';
    class z1 extends B1 {
        static get NAME() {
            return "button";
        }
        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
        }
        static jQueryInterface(t11) {
            return this.each(function() {
                const e = z1.getOrCreateInstance(this);
                "toggle" === t11 && e[t11]();
            });
        }
    }
    function q1(t) {
        return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t);
    }
    function F1(t13) {
        return t13.replace(/[A-Z]/g, (t)=>`-${t.toLowerCase()}`
        );
    }
    j1.on(document, "click.bs.button.data-api", $1, (t)=>{
        t.preventDefault();
        const e = t.target.closest($1);
        z1.getOrCreateInstance(e).toggle();
    }), g1(z1);
    const U1 = {
        setDataAttribute (t, e, i) {
            t.setAttribute(`data-bs-${F1(e)}`, i);
        },
        removeDataAttribute (t, e) {
            t.removeAttribute(`data-bs-${F1(e)}`);
        },
        getDataAttributes (t14) {
            if (!t14) return {
            };
            const e = {
            };
            return Object.keys(t14.dataset).filter((t)=>t.startsWith("bs")
            ).forEach((i)=>{
                let n = i.replace(/^bs/, "");
                n = n.charAt(0).toLowerCase() + n.slice(1, n.length), e[n] = q1(t14.dataset[i]);
            }), e;
        },
        getDataAttribute: (t, e)=>q1(t.getAttribute(`data-bs-${F1(e)}`))
        ,
        offset (t) {
            const e = t.getBoundingClientRect();
            return {
                top: e.top + window.pageYOffset,
                left: e.left + window.pageXOffset
            };
        },
        position: (t)=>({
                top: t.offsetTop,
                left: t.offsetLeft
            })
    }, V1 = {
        find: (t, e = document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e, t))
        ,
        findOne: (t, e = document.documentElement)=>Element.prototype.querySelector.call(e, t)
        ,
        children: (t15, e)=>[].concat(...t15.children).filter((t)=>t.matches(e)
            )
        ,
        parents (t, e) {
            const i = [];
            let n = t.parentNode;
            for(; n && n.nodeType === Node.ELEMENT_NODE && 3 !== n.nodeType;)n.matches(e) && i.push(n), n = n.parentNode;
            return i;
        },
        prev (t, e) {
            let i = t.previousElementSibling;
            for(; i;){
                if (i.matches(e)) return [
                    i
                ];
                i = i.previousElementSibling;
            }
            return [];
        },
        next (t, e) {
            let i = t.nextElementSibling;
            for(; i;){
                if (i.matches(e)) return [
                    i
                ];
                i = i.nextElementSibling;
            }
            return [];
        },
        focusableChildren (t16) {
            const e = [
                "a",
                "button",
                "input",
                "textarea",
                "select",
                "details",
                "[tabindex]",
                '[contenteditable="true"]'
            ].map((t)=>`${t}:not([tabindex^="-"])`
            ).join(", ");
            return this.find(e, t16).filter((t)=>!c1(t) && l1(t)
            );
        }
    }, K1 = "carousel", X1 = {
        interval: 5000,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
    }, Y1 = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
    }, Q = "next", G = "prev", Z1 = "left", J1 = "right", tt1 = {
        ArrowLeft: J1,
        ArrowRight: Z1
    }, et1 = "slid.bs.carousel", it = "active", nt = ".active.carousel-item";
    class st extends B1 {
        constructor(t21, e9){
            super(t21), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e9), this._indicatorsElement = V1.findOne(".carousel-indicators", this._element), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent), this._addEventListeners();
        }
        static get Default() {
            return X1;
        }
        static get NAME() {
            return K1;
        }
        next() {
            this._slide(Q);
        }
        nextWhenVisible() {
            !document.hidden && l1(this._element) && this.next();
        }
        prev() {
            this._slide(G);
        }
        pause(t17) {
            t17 || (this._isPaused = !0), V1.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (s1(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
        }
        cycle(t18) {
            t18 || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
        }
        to(t19) {
            this._activeElement = V1.findOne(nt, this._element);
            const e = this._getItemIndex(this._activeElement);
            if (t19 > this._items.length - 1 || t19 < 0) return;
            if (this._isSliding) return void j1.one(this._element, et1, ()=>this.to(t19)
            );
            if (e === t19) return this.pause(), void this.cycle();
            const i = t19 > e ? Q : G;
            this._slide(i, this._items[t19]);
        }
        _getConfig(t20) {
            return t20 = {
                ...X1,
                ...U1.getDataAttributes(this._element),
                ..."object" == typeof t20 ? t20 : {
                }
            }, a1(K1, t20, Y1), t20;
        }
        _handleSwipe() {
            const t = Math.abs(this.touchDeltaX);
            if (t <= 40) return;
            const e = t / this.touchDeltaX;
            this.touchDeltaX = 0, e && this._slide(e > 0 ? J1 : Z1);
        }
        _addEventListeners() {
            this._config.keyboard && j1.on(this._element, "keydown.bs.carousel", (t)=>this._keydown(t)
            ), "hover" === this._config.pause && (j1.on(this._element, "mouseenter.bs.carousel", (t)=>this.pause(t)
            ), j1.on(this._element, "mouseleave.bs.carousel", (t)=>this.cycle(t)
            )), this._config.touch && this._touchSupported && this._addTouchEventListeners();
        }
        _addTouchEventListeners() {
            const t22 = (t)=>this._pointerEvent && ("pen" === t.pointerType || "touch" === t.pointerType)
            , e8 = (e)=>{
                t22(e) ? this.touchStartX = e.clientX : this._pointerEvent || (this.touchStartX = e.touches[0].clientX);
            }, i = (t)=>{
                this.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this.touchStartX;
            }, n = (e)=>{
                t22(e) && (this.touchDeltaX = e.clientX - this.touchStartX), this._handleSwipe(), "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout((t)=>this.cycle(t)
                , 500 + this._config.interval));
            };
            V1.find(".carousel-item img", this._element).forEach((t23)=>{
                j1.on(t23, "dragstart.bs.carousel", (t)=>t.preventDefault()
                );
            }), this._pointerEvent ? (j1.on(this._element, "pointerdown.bs.carousel", (t)=>e8(t)
            ), j1.on(this._element, "pointerup.bs.carousel", (t)=>n(t)
            ), this._element.classList.add("pointer-event")) : (j1.on(this._element, "touchstart.bs.carousel", (t)=>e8(t)
            ), j1.on(this._element, "touchmove.bs.carousel", (t)=>i(t)
            ), j1.on(this._element, "touchend.bs.carousel", (t)=>n(t)
            ));
        }
        _keydown(t34) {
            if (/input|textarea/i.test(t34.target.tagName)) return;
            const e = tt1[t34.key];
            e && (t34.preventDefault(), this._slide(e));
        }
        _getItemIndex(t24) {
            return this._items = t24 && t24.parentNode ? V1.find(".carousel-item", t24.parentNode) : [], this._items.indexOf(t24);
        }
        _getItemByOrder(t25, e14) {
            const i = t25 === Q;
            return v1(this._items, e14, i, this._config.wrap);
        }
        _triggerSlideEvent(t26, e10) {
            const i = this._getItemIndex(t26), n = this._getItemIndex(V1.findOne(nt, this._element));
            return j1.trigger(this._element, "slide.bs.carousel", {
                relatedTarget: t26,
                direction: e10,
                from: n,
                to: i
            });
        }
        _setActiveIndicatorElement(t27) {
            if (this._indicatorsElement) {
                const e = V1.findOne(".active", this._indicatorsElement);
                e.classList.remove(it), e.removeAttribute("aria-current");
                const i = V1.find("[data-bs-target]", this._indicatorsElement);
                for(let e11 = 0; e11 < i.length; e11++)if (Number.parseInt(i[e11].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t27)) {
                    i[e11].classList.add(it), i[e11].setAttribute("aria-current", "true");
                    break;
                }
            }
        }
        _updateInterval() {
            const t = this._activeElement || V1.findOne(nt, this._element);
            if (!t) return;
            const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
            e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval;
        }
        _slide(t28, e12) {
            const i = this._directionToOrder(t28), n = V1.findOne(nt, this._element), s = this._getItemIndex(n), o = e12 || this._getItemByOrder(i, n), r = this._getItemIndex(o), a = Boolean(this._interval), l = i === Q, c = l ? "carousel-item-start" : "carousel-item-end", h = l ? "carousel-item-next" : "carousel-item-prev", d = this._orderToDirection(i);
            if (o && o.classList.contains(it)) return void (this._isSliding = !1);
            if (this._isSliding) return;
            if (this._triggerSlideEvent(o, d).defaultPrevented) return;
            if (!n || !o) return;
            this._isSliding = !0, a && this.pause(), this._setActiveIndicatorElement(o), this._activeElement = o;
            const f = ()=>{
                j1.trigger(this._element, et1, {
                    relatedTarget: o,
                    direction: d,
                    from: s,
                    to: r
                });
            };
            if (this._element.classList.contains("slide")) {
                o.classList.add(h), u1(o), n.classList.add(c), o.classList.add(c);
                const t = ()=>{
                    o.classList.remove(c, h), o.classList.add(it), n.classList.remove(it, h, c), this._isSliding = !1, setTimeout(f, 0);
                };
                this._queueCallback(t, n, !0);
            } else n.classList.remove(it), o.classList.add(it), this._isSliding = !1, f();
            a && this.cycle();
        }
        _directionToOrder(t29) {
            return [
                J1,
                Z1
            ].includes(t29) ? m1() ? t29 === Z1 ? G : Q : t29 === Z1 ? Q : G : t29;
        }
        _orderToDirection(t30) {
            return [
                Q,
                G
            ].includes(t30) ? m1() ? t30 === G ? Z1 : J1 : t30 === G ? J1 : Z1 : t30;
        }
        static carouselInterface(t31, e13) {
            const i = st.getOrCreateInstance(t31, e13);
            let { _config: n  } = i;
            "object" == typeof e13 && (n = {
                ...n,
                ...e13
            });
            const s = "string" == typeof e13 ? e13 : n.slide;
            if ("number" == typeof e13) i.to(e13);
            else if ("string" == typeof s) {
                if (void 0 === i[s]) throw new TypeError(`No method named "${s}"`);
                i[s]();
            } else n.interval && n.ride && (i.pause(), i.cycle());
        }
        static jQueryInterface(t32) {
            return this.each(function() {
                st.carouselInterface(this, t32);
            });
        }
        static dataApiClickHandler(t33) {
            const e = n1(this);
            if (!e || !e.classList.contains("carousel")) return;
            const i = {
                ...U1.getDataAttributes(e),
                ...U1.getDataAttributes(this)
            }, s = this.getAttribute("data-bs-slide-to");
            s && (i.interval = !1), st.carouselInterface(e, i), s && st.getInstance(e).to(s), t33.preventDefault();
        }
    }
    j1.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", st.dataApiClickHandler), j1.on(window, "load.bs.carousel.data-api", ()=>{
        const t = V1.find('[data-bs-ride="carousel"]');
        for(let e = 0, i = t.length; e < i; e++)st.carouselInterface(t[e], st.getInstance(t[e]));
    }), g1(st);
    const ot = "collapse", rt = {
        toggle: !0,
        parent: null
    }, at = {
        toggle: "boolean",
        parent: "(null|element)"
    }, lt = "show", ct = "collapse", ht = "collapsing", dt = "collapsed", ut = ":scope .collapse .collapse", ft = '[data-bs-toggle="collapse"]';
    class pt extends B1 {
        constructor(t36, e17){
            super(t36), this._isTransitioning = !1, this._config = this._getConfig(e17), this._triggerArray = [];
            const n = V1.find(ft);
            for(let t35 = 0, e15 = n.length; t35 < e15; t35++){
                const e15 = n[t35], s = i1(e15), o = V1.find(s).filter((t)=>t === this._element
                );
                null !== s && o.length && (this._selector = s, this._triggerArray.push(e15));
            }
            this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
        }
        static get Default() {
            return rt;
        }
        static get NAME() {
            return ot;
        }
        toggle() {
            this._isShown() ? this.hide() : this.show();
        }
        show() {
            if (this._isTransitioning || this._isShown()) return;
            let t37, e16 = [];
            if (this._config.parent) {
                const t = V1.find(ut, this._config.parent);
                e16 = V1.find(".collapse.show, .collapse.collapsing", this._config.parent).filter((e)=>!t.includes(e)
                );
            }
            const i = V1.findOne(this._selector);
            if (e16.length) {
                const n = e16.find((t)=>i !== t
                );
                if (t37 = n ? pt.getInstance(n) : null, t37 && t37._isTransitioning) return;
            }
            if (j1.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
            e16.forEach((e)=>{
                i !== e && pt.getOrCreateInstance(e, {
                    toggle: !1
                }).hide(), t37 || H1.set(e, "bs.collapse", null);
            });
            const n = this._getDimension();
            this._element.classList.remove(ct), this._element.classList.add(ht), this._element.style[n] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
            const s = `scroll${n[0].toUpperCase() + n.slice(1)}`;
            this._queueCallback(()=>{
                this._isTransitioning = !1, this._element.classList.remove(ht), this._element.classList.add(ct, lt), this._element.style[n] = "", j1.trigger(this._element, "shown.bs.collapse");
            }, this._element, !0), this._element.style[n] = `${this._element[s]}px`;
        }
        hide() {
            if (this._isTransitioning || !this._isShown()) return;
            if (j1.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
            const t = this._getDimension();
            this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`, u1(this._element), this._element.classList.add(ht), this._element.classList.remove(ct, lt);
            const e = this._triggerArray.length;
            for(let t38 = 0; t38 < e; t38++){
                const e = this._triggerArray[t38], i = n1(e);
                i && !this._isShown(i) && this._addAriaAndCollapsedClass([
                    e
                ], !1);
            }
            this._isTransitioning = !0, this._element.style[t] = "", this._queueCallback(()=>{
                this._isTransitioning = !1, this._element.classList.remove(ht), this._element.classList.add(ct), j1.trigger(this._element, "hidden.bs.collapse");
            }, this._element, !0);
        }
        _isShown(t41 = this._element) {
            return t41.classList.contains(lt);
        }
        _getConfig(t39) {
            return (t39 = {
                ...rt,
                ...U1.getDataAttributes(this._element),
                ...t39
            }).toggle = Boolean(t39.toggle), t39.parent = r1(t39.parent), a1(ot, t39, at), t39;
        }
        _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
        }
        _initializeChildren() {
            if (!this._config.parent) return;
            const t40 = V1.find(ut, this._config.parent);
            V1.find(ft, this._config.parent).filter((e)=>!t40.includes(e)
            ).forEach((t)=>{
                const e = n1(t);
                e && this._addAriaAndCollapsedClass([
                    t
                ], this._isShown(e));
            });
        }
        _addAriaAndCollapsedClass(t42, e18) {
            t42.length && t42.forEach((t)=>{
                e18 ? t.classList.remove(dt) : t.classList.add(dt), t.setAttribute("aria-expanded", e18);
            });
        }
        static jQueryInterface(t43) {
            return this.each(function() {
                const e = {
                };
                "string" == typeof t43 && /show|hide/.test(t43) && (e.toggle = !1);
                const i = pt.getOrCreateInstance(this, e);
                if ("string" == typeof t43) {
                    if (void 0 === i[t43]) throw new TypeError(`No method named "${t43}"`);
                    i[t43]();
                }
            });
        }
    }
    j1.on(document, "click.bs.collapse.data-api", ft, function(t44) {
        ("A" === t44.target.tagName || t44.delegateTarget && "A" === t44.delegateTarget.tagName) && t44.preventDefault();
        const e = i1(this);
        V1.find(e).forEach((t)=>{
            pt.getOrCreateInstance(t, {
                toggle: !1
            }).toggle();
        });
    }), g1(pt);
    var mt = "top", gt = "bottom", _t = "right", bt = "left", vt = "auto", yt = [
        mt,
        gt,
        _t,
        bt
    ], wt = "start", Et = "end", At = "clippingParents", Tt = "viewport", Ot = "popper", Ct = "reference", kt = yt.reduce(function(t, e) {
        return t.concat([
            e + "-" + wt,
            e + "-" + Et
        ]);
    }, []), Lt = [].concat(yt, [
        vt
    ]).reduce(function(t, e) {
        return t.concat([
            e,
            e + "-" + wt,
            e + "-" + Et
        ]);
    }, []), xt = "beforeRead", Dt = "read", St = "afterRead", Nt = "beforeMain", It = "main", Pt = "afterMain", jt = "beforeWrite", Mt = "write", Ht = "afterWrite", Bt = [
        xt,
        Dt,
        St,
        Nt,
        It,
        Pt,
        jt,
        Mt,
        Ht
    ];
    function Rt(t) {
        return t ? (t.nodeName || "").toLowerCase() : null;
    }
    function Wt(t) {
        if (null == t) return window;
        if ("[object Window]" !== t.toString()) {
            var e = t.ownerDocument;
            return e && e.defaultView || window;
        }
        return t;
    }
    function $t(t) {
        return t instanceof Wt(t).Element || t instanceof Element;
    }
    function zt(t) {
        return t instanceof Wt(t).HTMLElement || t instanceof HTMLElement;
    }
    function qt(t) {
        return "undefined" != typeof ShadowRoot && (t instanceof Wt(t).ShadowRoot || t instanceof ShadowRoot);
    }
    const Ft = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function(t45) {
            var e19 = t45.state;
            Object.keys(e19.elements).forEach(function(t46) {
                var i = e19.styles[t46] || {
                }, n = e19.attributes[t46] || {
                }, s = e19.elements[t46];
                zt(s) && Rt(s) && (Object.assign(s.style, i), Object.keys(n).forEach(function(t) {
                    var e = n[t];
                    !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e);
                }));
            });
        },
        effect: function(t47) {
            var e = t47.state, i = {
                popper: {
                    position: e.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0"
                },
                arrow: {
                    position: "absolute"
                },
                reference: {
                }
            };
            return Object.assign(e.elements.popper.style, i.popper), e.styles = i, e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow), function() {
                Object.keys(e.elements).forEach(function(t48) {
                    var n = e.elements[t48], s = e.attributes[t48] || {
                    }, o = Object.keys(e.styles.hasOwnProperty(t48) ? e.styles[t48] : i[t48]).reduce(function(t, e) {
                        return t[e] = "", t;
                    }, {
                    });
                    zt(n) && Rt(n) && (Object.assign(n.style, o), Object.keys(s).forEach(function(t) {
                        n.removeAttribute(t);
                    }));
                });
            };
        },
        requires: [
            "computeStyles"
        ]
    };
    function Ut(t) {
        return t.split("-")[0];
    }
    function Vt(t, e) {
        var i = t.getBoundingClientRect();
        return {
            width: i.width / 1,
            height: i.height / 1,
            top: i.top / 1,
            right: i.right / 1,
            bottom: i.bottom / 1,
            left: i.left / 1,
            x: i.left / 1,
            y: i.top / 1
        };
    }
    function Kt(t) {
        var e = Vt(t), i = t.offsetWidth, n = t.offsetHeight;
        return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
            x: t.offsetLeft,
            y: t.offsetTop,
            width: i,
            height: n
        };
    }
    function Xt(t, e) {
        var i = e.getRootNode && e.getRootNode();
        if (t.contains(e)) return !0;
        if (i && qt(i)) {
            var n = e;
            do {
                if (n && t.isSameNode(n)) return !0;
                n = n.parentNode || n.host;
            }while (n)
        }
        return !1;
    }
    function Yt(t) {
        return Wt(t).getComputedStyle(t);
    }
    function Qt(t) {
        return [
            "table",
            "td",
            "th"
        ].indexOf(Rt(t)) >= 0;
    }
    function Gt(t) {
        return (($t(t) ? t.ownerDocument : t.document) || window.document).documentElement;
    }
    function Zt(t) {
        return "html" === Rt(t) ? t : t.assignedSlot || t.parentNode || (qt(t) ? t.host : null) || Gt(t);
    }
    function Jt(t) {
        return zt(t) && "fixed" !== Yt(t).position ? t.offsetParent : null;
    }
    function te(t49) {
        for(var e20 = Wt(t49), i8 = Jt(t49); i8 && Qt(i8) && "static" === Yt(i8).position;)i8 = Jt(i8);
        return i8 && ("html" === Rt(i8) || "body" === Rt(i8) && "static" === Yt(i8).position) ? e20 : i8 || (function(t) {
            var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
            if (-1 !== navigator.userAgent.indexOf("Trident") && zt(t) && "fixed" === Yt(t).position) return null;
            for(var i = Zt(t); zt(i) && [
                "html",
                "body"
            ].indexOf(Rt(i)) < 0;){
                var n = Yt(i);
                if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== [
                    "transform",
                    "perspective"
                ].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter) return i;
                i = i.parentNode;
            }
            return null;
        })(t49) || e20;
    }
    function ee(t) {
        return [
            "top",
            "bottom"
        ].indexOf(t) >= 0 ? "x" : "y";
    }
    var ie = Math.max, ne = Math.min, se = Math.round;
    function oe(t, e, i) {
        return ie(t, ne(e, i));
    }
    function re(t) {
        return Object.assign({
        }, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }, t);
    }
    function ae(t, e21) {
        return e21.reduce(function(e, i) {
            return e[i] = t, e;
        }, {
        });
    }
    const le = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function(t50) {
            var e22, i = t50.state, n = t50.name, s = t50.options, o = i.elements.arrow, r = i.modifiersData.popperOffsets, a = Ut(i.placement), l = ee(a), c = [
                bt,
                _t
            ].indexOf(a) >= 0 ? "height" : "width";
            if (o && r) {
                var h = function(t, e) {
                    return re("number" != typeof (t = "function" == typeof t ? t(Object.assign({
                    }, e.rects, {
                        placement: e.placement
                    })) : t) ? t : ae(t, yt));
                }(s.padding, i), d = Kt(o), u = "y" === l ? mt : bt, f = "y" === l ? gt : _t, p = i.rects.reference[c] + i.rects.reference[l] - r[l] - i.rects.popper[c], m = r[l] - i.rects.reference[l], g = te(o), _ = g ? "y" === l ? g.clientHeight || 0 : g.clientWidth || 0 : 0, b = p / 2 - m / 2, v = h[u], y = _ - d[c] - h[f], w = _ / 2 - d[c] / 2 + b, E = oe(v, w, y), A = l;
                i.modifiersData[n] = ((e22 = {
                })[A] = E, e22.centerOffset = E - w, e22);
            }
        },
        effect: function(t) {
            var e = t.state, i = t.options.element, n = void 0 === i ? "[data-popper-arrow]" : i;
            null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && Xt(e.elements.popper, n) && (e.elements.arrow = n);
        },
        requires: [
            "popperOffsets"
        ],
        requiresIfExists: [
            "preventOverflow"
        ]
    };
    function ce(t) {
        return t.split("-")[1];
    }
    var he = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
    };
    function de(t51) {
        var e23, i9 = t51.popper, n6 = t51.popperRect, s = t51.placement, o = t51.variation, r = t51.offsets, a = t51.position, l = t51.gpuAcceleration, c = t51.adaptive, h = t51.roundOffsets, d = !0 === h ? function(t) {
            var e = t.x, i = t.y, n = window.devicePixelRatio || 1;
            return {
                x: se(se(e * n) / n) || 0,
                y: se(se(i * n) / n) || 0
            };
        }(r) : "function" == typeof h ? h(r) : r, u = d.x, f = void 0 === u ? 0 : u, p = d.y, m = void 0 === p ? 0 : p, g = r.hasOwnProperty("x"), _ = r.hasOwnProperty("y"), b = bt, v = mt, y = window;
        if (c) {
            var w = te(i9), E = "clientHeight", A = "clientWidth";
            w === Wt(i9) && "static" !== Yt(w = Gt(i9)).position && "absolute" === a && (E = "scrollHeight", A = "scrollWidth"), s !== mt && (s !== bt && s !== _t || o !== Et) || (v = gt, m -= w[E] - n6.height, m *= l ? 1 : -1), s !== bt && (s !== mt && s !== gt || o !== Et) || (b = _t, f -= w[A] - n6.width, f *= l ? 1 : -1);
        }
        var T, O = Object.assign({
            position: a
        }, c && he);
        return l ? Object.assign({
        }, O, ((T = {
        })[v] = _ ? "0" : "", T[b] = g ? "0" : "", T.transform = (y.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + m + "px)" : "translate3d(" + f + "px, " + m + "px, 0)", T)) : Object.assign({
        }, O, ((e23 = {
        })[v] = _ ? m + "px" : "", e23[b] = g ? f + "px" : "", e23.transform = "", e23));
    }
    const ue = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function(t) {
            var e = t.state, i = t.options, n = i.gpuAcceleration, s = void 0 === n || n, o = i.adaptive, r = void 0 === o || o, a = i.roundOffsets, l = void 0 === a || a, c = {
                placement: Ut(e.placement),
                variation: ce(e.placement),
                popper: e.elements.popper,
                popperRect: e.rects.popper,
                gpuAcceleration: s
            };
            null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({
            }, e.styles.popper, de(Object.assign({
            }, c, {
                offsets: e.modifiersData.popperOffsets,
                position: e.options.strategy,
                adaptive: r,
                roundOffsets: l
            })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({
            }, e.styles.arrow, de(Object.assign({
            }, c, {
                offsets: e.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: l
            })))), e.attributes.popper = Object.assign({
            }, e.attributes.popper, {
                "data-popper-placement": e.placement
            });
        },
        data: {
        }
    };
    var fe = {
        passive: !0
    };
    const pe = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function() {
        },
        effect: function(t52) {
            var e = t52.state, i = t52.instance, n = t52.options, s = n.scroll, o = void 0 === s || s, r = n.resize, a = void 0 === r || r, l = Wt(e.elements.popper), c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
            return o && c.forEach(function(t) {
                t.addEventListener("scroll", i.update, fe);
            }), a && l.addEventListener("resize", i.update, fe), function() {
                o && c.forEach(function(t) {
                    t.removeEventListener("scroll", i.update, fe);
                }), a && l.removeEventListener("resize", i.update, fe);
            };
        },
        data: {
        }
    };
    var me = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };
    function ge(t) {
        return t.replace(/left|right|bottom|top/g, function(t) {
            return me[t];
        });
    }
    var _e = {
        start: "end",
        end: "start"
    };
    function be(t) {
        return t.replace(/start|end/g, function(t) {
            return _e[t];
        });
    }
    function ve(t) {
        var e = Wt(t);
        return {
            scrollLeft: e.pageXOffset,
            scrollTop: e.pageYOffset
        };
    }
    function ye(t) {
        return Vt(Gt(t)).left + ve(t).scrollLeft;
    }
    function we(t) {
        var e = Yt(t), i = e.overflow, n = e.overflowX, s = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(i + s + n);
    }
    function Ee(t) {
        return [
            "html",
            "body",
            "#document"
        ].indexOf(Rt(t)) >= 0 ? t.ownerDocument.body : zt(t) && we(t) ? t : Ee(Zt(t));
    }
    function Ae(t, e) {
        var i;
        void 0 === e && (e = []);
        var n = Ee(t), s = n === (null == (i = t.ownerDocument) ? void 0 : i.body), o = Wt(n), r = s ? [
            o
        ].concat(o.visualViewport || [], we(n) ? n : []) : n, a = e.concat(r);
        return s ? a : a.concat(Ae(Zt(r)));
    }
    function Te(t) {
        return Object.assign({
        }, t, {
            left: t.x,
            top: t.y,
            right: t.x + t.width,
            bottom: t.y + t.height
        });
    }
    function Oe(t53, e24) {
        return e24 === Tt ? Te(function(t) {
            var e = Wt(t), i = Gt(t), n = e.visualViewport, s = i.clientWidth, o = i.clientHeight, r = 0, a = 0;
            return n && (s = n.width, o = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (r = n.offsetLeft, a = n.offsetTop)), {
                width: s,
                height: o,
                x: r + ye(t),
                y: a
            };
        }(t53)) : zt(e24) ? (function(t) {
            var e = Vt(t);
            return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e;
        })(e24) : Te(function(t) {
            var e, i = Gt(t), n = ve(t), s = null == (e = t.ownerDocument) ? void 0 : e.body, o = ie(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), r = ie(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), a = -n.scrollLeft + ye(t), l = -n.scrollTop;
            return "rtl" === Yt(s || i).direction && (a += ie(i.clientWidth, s ? s.clientWidth : 0) - o), {
                width: o,
                height: r,
                x: a,
                y: l
            };
        }(Gt(t53)));
    }
    function Ce(t) {
        var e, i = t.reference, n = t.element, s = t.placement, o = s ? Ut(s) : null, r = s ? ce(s) : null, a = i.x + i.width / 2 - n.width / 2, l = i.y + i.height / 2 - n.height / 2;
        switch(o){
            case mt:
                e = {
                    x: a,
                    y: i.y - n.height
                };
                break;
            case gt:
                e = {
                    x: a,
                    y: i.y + i.height
                };
                break;
            case _t:
                e = {
                    x: i.x + i.width,
                    y: l
                };
                break;
            case bt:
                e = {
                    x: i.x - n.width,
                    y: l
                };
                break;
            default:
                e = {
                    x: i.x,
                    y: i.y
                };
        }
        var c = o ? ee(o) : null;
        if (null != c) {
            var h = "y" === c ? "height" : "width";
            switch(r){
                case wt:
                    e[c] = e[c] - (i[h] / 2 - n[h] / 2);
                    break;
                case Et:
                    e[c] = e[c] + (i[h] / 2 - n[h] / 2);
            }
        }
        return e;
    }
    function ke(t54, e25) {
        void 0 === e25 && (e25 = {
        });
        var i10 = e25, n7 = i10.placement, s4 = void 0 === n7 ? t54.placement : n7, o4 = i10.boundary, r3 = void 0 === o4 ? At : o4, a = i10.rootBoundary, l = void 0 === a ? Tt : a, c = i10.elementContext, h = void 0 === c ? Ot : c, d = i10.altBoundary, u = void 0 !== d && d, f = i10.padding, p = void 0 === f ? 0 : f, m = re("number" != typeof p ? p : ae(p, yt)), g = h === Ot ? Ct : Ot, _ = t54.rects.popper, b = t54.elements[u ? g : h], v = function(t55, e26, i11) {
            var n8 = "clippingParents" === e26 ? function(t56) {
                var e = Ae(Zt(t56)), i = [
                    "absolute",
                    "fixed"
                ].indexOf(Yt(t56).position) >= 0 && zt(t56) ? te(t56) : t56;
                return $t(i) ? e.filter(function(t) {
                    return $t(t) && Xt(t, i) && "body" !== Rt(t);
                }) : [];
            }(t55) : [].concat(e26), s = [].concat(n8, [
                i11
            ]), o = s[0], r = s.reduce(function(e, i) {
                var n = Oe(t55, i);
                return e.top = ie(n.top, e.top), e.right = ne(n.right, e.right), e.bottom = ne(n.bottom, e.bottom), e.left = ie(n.left, e.left), e;
            }, Oe(t55, o));
            return r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r;
        }($t(b) ? b : b.contextElement || Gt(t54.elements.popper), r3, l), y = Vt(t54.elements.reference), w = Ce({
            reference: y,
            element: _,
            strategy: "absolute",
            placement: s4
        }), E = Te(Object.assign({
        }, _, w)), A = h === Ot ? E : y, T = {
            top: v.top - A.top + m.top,
            bottom: A.bottom - v.bottom + m.bottom,
            left: v.left - A.left + m.left,
            right: A.right - v.right + m.right
        }, O = t54.modifiersData.offset;
        if (h === Ot && O) {
            var C = O[s4];
            Object.keys(T).forEach(function(t) {
                var e = [
                    _t,
                    gt
                ].indexOf(t) >= 0 ? 1 : -1, i = [
                    mt,
                    gt
                ].indexOf(t) >= 0 ? "y" : "x";
                T[t] += C[i] * e;
            });
        }
        return T;
    }
    function Le(t57, e27) {
        void 0 === e27 && (e27 = {
        });
        var i12 = e27, n = i12.placement, s = i12.boundary, o = i12.rootBoundary, r = i12.padding, a = i12.flipVariations, l = i12.allowedAutoPlacements, c = void 0 === l ? Lt : l, h = ce(n), d = h ? a ? kt : kt.filter(function(t) {
            return ce(t) === h;
        }) : yt, u = d.filter(function(t) {
            return c.indexOf(t) >= 0;
        });
        0 === u.length && (u = d);
        var f = u.reduce(function(e, i) {
            return e[i] = ke(t57, {
                placement: i,
                boundary: s,
                rootBoundary: o,
                padding: r
            })[Ut(i)], e;
        }, {
        });
        return Object.keys(f).sort(function(t, e) {
            return f[t] - f[e];
        });
    }
    const xe = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function(t58) {
            var e28 = t58.state, i13 = t58.options, n = t58.name;
            if (!e28.modifiersData[n]._skip) {
                for(var s = i13.mainAxis, o = void 0 === s || s, r = i13.altAxis, a = void 0 === r || r, l = i13.fallbackPlacements, c = i13.padding, h = i13.boundary, d = i13.rootBoundary, u = i13.altBoundary, f = i13.flipVariations, p = void 0 === f || f, m = i13.allowedAutoPlacements, g = e28.options.placement, _ = Ut(g), b = l || (_ !== g && p ? function(t) {
                    if (Ut(t) === vt) return [];
                    var e = ge(t);
                    return [
                        be(t),
                        e,
                        be(e)
                    ];
                }(g) : [
                    ge(g)
                ]), v = [
                    g
                ].concat(b).reduce(function(t, i) {
                    return t.concat(Ut(i) === vt ? Le(e28, {
                        placement: i,
                        boundary: h,
                        rootBoundary: d,
                        padding: c,
                        flipVariations: p,
                        allowedAutoPlacements: m
                    }) : i);
                }, []), y = e28.rects.reference, w = e28.rects.popper, E = new Map, A = !0, T = v[0], O = 0; O < v.length; O++){
                    var C = v[O], k = Ut(C), L = ce(C) === wt, x = [
                        mt,
                        gt
                    ].indexOf(k) >= 0, D = x ? "width" : "height", S = ke(e28, {
                        placement: C,
                        boundary: h,
                        rootBoundary: d,
                        altBoundary: u,
                        padding: c
                    }), N = x ? L ? _t : bt : L ? gt : mt;
                    y[D] > w[D] && (N = ge(N));
                    var I = ge(N), P = [];
                    if (o && P.push(S[k] <= 0), a && P.push(S[N] <= 0, S[I] <= 0), P.every(function(t) {
                        return t;
                    })) {
                        T = C, A = !1;
                        break;
                    }
                    E.set(C, P);
                }
                if (A) for(var j = function(t59) {
                    var e29 = v.find(function(e) {
                        var i = E.get(e);
                        if (i) return i.slice(0, t59).every(function(t) {
                            return t;
                        });
                    });
                    if (e29) return T = e29, "break";
                }, M = p ? 3 : 1; M > 0 && "break" !== j(M); M--);
                e28.placement !== T && (e28.modifiersData[n]._skip = !0, e28.placement = T, e28.reset = !0);
            }
        },
        requiresIfExists: [
            "offset"
        ],
        data: {
            _skip: !1
        }
    };
    function De(t, e, i) {
        return void 0 === i && (i = {
            x: 0,
            y: 0
        }), {
            top: t.top - e.height - i.y,
            right: t.right - e.width + i.x,
            bottom: t.bottom - e.height + i.y,
            left: t.left - e.width - i.x
        };
    }
    function Se(t) {
        return [
            mt,
            _t,
            gt,
            bt
        ].some(function(e) {
            return t[e] >= 0;
        });
    }
    const Ne = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: [
            "preventOverflow"
        ],
        fn: function(t) {
            var e = t.state, i = t.name, n = e.rects.reference, s = e.rects.popper, o = e.modifiersData.preventOverflow, r = ke(e, {
                elementContext: "reference"
            }), a = ke(e, {
                altBoundary: !0
            }), l = De(r, n), c = De(a, s, o), h = Se(l), d = Se(c);
            e.modifiersData[i] = {
                referenceClippingOffsets: l,
                popperEscapeOffsets: c,
                isReferenceHidden: h,
                hasPopperEscaped: d
            }, e.attributes.popper = Object.assign({
            }, e.attributes.popper, {
                "data-popper-reference-hidden": h,
                "data-popper-escaped": d
            });
        }
    }, Ie = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: [
            "popperOffsets"
        ],
        fn: function(t60) {
            var e30 = t60.state, i14 = t60.options, n9 = t60.name, s5 = i14.offset, o5 = void 0 === s5 ? [
                0,
                0
            ] : s5, r4 = Lt.reduce(function(t61, i15) {
                return t61[i15] = (function(t, e, i) {
                    var n = Ut(t), s = [
                        bt,
                        mt
                    ].indexOf(n) >= 0 ? -1 : 1, o = "function" == typeof i ? i(Object.assign({
                    }, e, {
                        placement: t
                    })) : i, r = o[0], a = o[1];
                    return r = r || 0, a = (a || 0) * s, [
                        bt,
                        _t
                    ].indexOf(n) >= 0 ? {
                        x: a,
                        y: r
                    } : {
                        x: r,
                        y: a
                    };
                })(i15, e30.rects, o5), t61;
            }, {
            }), a3 = r4[e30.placement], l = a3.x, c = a3.y;
            null != e30.modifiersData.popperOffsets && (e30.modifiersData.popperOffsets.x += l, e30.modifiersData.popperOffsets.y += c), e30.modifiersData[n9] = r4;
        }
    }, Pe = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function(t) {
            var e = t.state, i = t.name;
            e.modifiersData[i] = Ce({
                reference: e.rects.reference,
                element: e.rects.popper,
                strategy: "absolute",
                placement: e.placement
            });
        },
        data: {
        }
    }, je = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e = t.state, i = t.options, n = t.name, s = i.mainAxis, o = void 0 === s || s, r = i.altAxis, a = void 0 !== r && r, l = i.boundary, c = i.rootBoundary, h = i.altBoundary, d = i.padding, u = i.tether, f = void 0 === u || u, p = i.tetherOffset, m = void 0 === p ? 0 : p, g = ke(e, {
                boundary: l,
                rootBoundary: c,
                padding: d,
                altBoundary: h
            }), _ = Ut(e.placement), b = ce(e.placement), v = !b, y = ee(_), w = "x" === y ? "y" : "x", E = e.modifiersData.popperOffsets, A = e.rects.reference, T = e.rects.popper, O = "function" == typeof m ? m(Object.assign({
            }, e.rects, {
                placement: e.placement
            })) : m, C = {
                x: 0,
                y: 0
            };
            if (E) {
                if (o || a) {
                    var k = "y" === y ? mt : bt, L = "y" === y ? gt : _t, x = "y" === y ? "height" : "width", D = E[y], S = E[y] + g[k], N = E[y] - g[L], I = f ? -T[x] / 2 : 0, P = b === wt ? A[x] : T[x], j = b === wt ? -T[x] : -A[x], M = e.elements.arrow, H = f && M ? Kt(M) : {
                        width: 0,
                        height: 0
                    }, B = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }, R = B[k], W = B[L], $ = oe(0, A[x], H[x]), z = v ? A[x] / 2 - I - $ - R - O : P - $ - R - O, q = v ? -A[x] / 2 + I + $ + W + O : j + $ + W + O, F = e.elements.arrow && te(e.elements.arrow), U = F ? "y" === y ? F.clientTop || 0 : F.clientLeft || 0 : 0, V = e.modifiersData.offset ? e.modifiersData.offset[e.placement][y] : 0, K = E[y] + z - V - U, X = E[y] + q - V;
                    if (o) {
                        var Y = oe(f ? ne(S, K) : S, D, f ? ie(N, X) : N);
                        E[y] = Y, C[y] = Y - D;
                    }
                    if (a) {
                        var Q = "x" === y ? mt : bt, G = "x" === y ? gt : _t, Z = E[w], J = Z + g[Q], tt = Z - g[G], et = oe(f ? ne(J, K) : J, Z, f ? ie(tt, X) : tt);
                        E[w] = et, C[w] = et - Z;
                    }
                }
                e.modifiersData[n] = C;
            }
        },
        requiresIfExists: [
            "offset"
        ]
    };
    function Me(t62, e31, i) {
        void 0 === i && (i = !1);
        var n = zt(e31);
        zt(e31) && (function(t) {
            var e = t.getBoundingClientRect();
            e.width, t.offsetWidth, e.height, t.offsetHeight;
        })(e31);
        var s, o, r = Gt(e31), a = Vt(t62), l = {
            scrollLeft: 0,
            scrollTop: 0
        }, c = {
            x: 0,
            y: 0
        };
        return (n || !n && !i) && (("body" !== Rt(e31) || we(r)) && (l = (s = e31) !== Wt(s) && zt(s) ? {
            scrollLeft: (o = s).scrollLeft,
            scrollTop: o.scrollTop
        } : ve(s)), zt(e31) ? ((c = Vt(e31)).x += e31.clientLeft, c.y += e31.clientTop) : r && (c.x = ye(r))), {
            x: a.left + l.scrollLeft - c.x,
            y: a.top + l.scrollTop - c.y,
            width: a.width,
            height: a.height
        };
    }
    function He(t63) {
        var e = new Map, i = new Set, n10 = [];
        function s(t64) {
            i.add(t64.name), [].concat(t64.requires || [], t64.requiresIfExists || []).forEach(function(t) {
                if (!i.has(t)) {
                    var n = e.get(t);
                    n && s(n);
                }
            }), n10.push(t64);
        }
        return t63.forEach(function(t) {
            e.set(t.name, t);
        }), t63.forEach(function(t) {
            i.has(t.name) || s(t);
        }), n10;
    }
    var Be = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };
    function Re() {
        for(var t65 = arguments.length, e = new Array(t65), i = 0; i < t65; i++)e[i] = arguments[i];
        return !e.some(function(t) {
            return !(t && "function" == typeof t.getBoundingClientRect);
        });
    }
    function We(t66) {
        void 0 === t66 && (t66 = {
        });
        var e32 = t66, i16 = e32.defaultModifiers, n11 = void 0 === i16 ? [] : i16, s6 = e32.defaultOptions, o6 = void 0 === s6 ? Be : s6;
        return function(t67, e33, i17) {
            void 0 === i17 && (i17 = o6);
            var s7, r5, a = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({
                }, Be, o6),
                modifiersData: {
                },
                elements: {
                    reference: t67,
                    popper: e33
                },
                attributes: {
                },
                styles: {
                }
            }, l2 = [], c2 = !1, h = {
                state: a,
                setOptions: function(i18) {
                    var s8 = "function" == typeof i18 ? i18(a.options) : i18;
                    d2(), a.options = Object.assign({
                    }, o6, a.options, s8), a.scrollParents = {
                        reference: $t(t67) ? Ae(t67) : t67.contextElement ? Ae(t67.contextElement) : [],
                        popper: Ae(e33)
                    };
                    var r, c, u = function(t68) {
                        var e = He(t68);
                        return Bt.reduce(function(t69, i) {
                            return t69.concat(e.filter(function(t) {
                                return t.phase === i;
                            }));
                        }, []);
                    }((r = [].concat(n11, a.options.modifiers), c = r.reduce(function(t, e) {
                        var i = t[e.name];
                        return t[e.name] = i ? Object.assign({
                        }, i, e, {
                            options: Object.assign({
                            }, i.options, e.options),
                            data: Object.assign({
                            }, i.data, e.data)
                        }) : e, t;
                    }, {
                    }), Object.keys(c).map(function(t) {
                        return c[t];
                    })));
                    return a.orderedModifiers = u.filter(function(t) {
                        return t.enabled;
                    }), a.orderedModifiers.forEach(function(t) {
                        var e = t.name, i = t.options, n = void 0 === i ? {
                        } : i, s = t.effect;
                        if ("function" == typeof s) {
                            var o = s({
                                state: a,
                                name: e,
                                instance: h,
                                options: n
                            });
                            l2.push(o || function() {
                            });
                        }
                    }), h.update();
                },
                forceUpdate: function() {
                    if (!c2) {
                        var t70 = a.elements, e = t70.reference, i = t70.popper;
                        if (Re(e, i)) {
                            a.rects = {
                                reference: Me(e, te(i), "fixed" === a.options.strategy),
                                popper: Kt(i)
                            }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach(function(t) {
                                return a.modifiersData[t.name] = Object.assign({
                                }, t.data);
                            });
                            for(var n = 0; n < a.orderedModifiers.length; n++)if (!0 !== a.reset) {
                                var s = a.orderedModifiers[n], o = s.fn, r = s.options, l = void 0 === r ? {
                                } : r, d = s.name;
                                "function" == typeof o && (a = o({
                                    state: a,
                                    options: l,
                                    name: d,
                                    instance: h
                                }) || a);
                            } else a.reset = !1, n = -1;
                        }
                    }
                },
                update: (s7 = function() {
                    return new Promise(function(t) {
                        h.forceUpdate(), t(a);
                    });
                }, function() {
                    return r5 || (r5 = new Promise(function(t) {
                        Promise.resolve().then(function() {
                            r5 = void 0, t(s7());
                        });
                    })), r5;
                }),
                destroy: function() {
                    d2(), c2 = !0;
                }
            };
            if (!Re(t67, e33)) return h;
            function d2() {
                l2.forEach(function(t) {
                    return t();
                }), l2 = [];
            }
            return h.setOptions(i17).then(function(t) {
                !c2 && i17.onFirstUpdate && i17.onFirstUpdate(t);
            }), h;
        };
    }
    var $e = We(), ze = We({
        defaultModifiers: [
            pe,
            Pe,
            ue,
            Ft
        ]
    }), qe = We({
        defaultModifiers: [
            pe,
            Pe,
            ue,
            Ft,
            Ie,
            xe,
            je,
            le,
            Ne
        ]
    });
    const Fe = Object.freeze({
        __proto__: null,
        popperGenerator: We,
        detectOverflow: ke,
        createPopperBase: $e,
        createPopper: qe,
        createPopperLite: ze,
        top: mt,
        bottom: gt,
        right: _t,
        left: bt,
        auto: vt,
        basePlacements: yt,
        start: wt,
        end: Et,
        clippingParents: At,
        viewport: Tt,
        popper: Ot,
        reference: Ct,
        variationPlacements: kt,
        placements: Lt,
        beforeRead: xt,
        read: Dt,
        afterRead: St,
        beforeMain: Nt,
        main: It,
        afterMain: Pt,
        beforeWrite: jt,
        write: Mt,
        afterWrite: Ht,
        modifierPhases: Bt,
        applyStyles: Ft,
        arrow: le,
        computeStyles: ue,
        eventListeners: pe,
        flip: xe,
        hide: Ne,
        offset: Ie,
        popperOffsets: Pe,
        preventOverflow: je
    }), Ue = "dropdown", Ve = "Escape", Ke = "Space", Xe = "ArrowUp", Ye = "ArrowDown", Qe = new RegExp("ArrowUp|ArrowDown|Escape"), Ge = "click.bs.dropdown.data-api", Ze = "keydown.bs.dropdown.data-api", Je = "show", ti = '[data-bs-toggle="dropdown"]', ei = ".dropdown-menu", ii = m1() ? "top-end" : "top-start", ni = m1() ? "top-start" : "top-end", si = m1() ? "bottom-end" : "bottom-start", oi = m1() ? "bottom-start" : "bottom-end", ri = m1() ? "left-start" : "right-start", ai = m1() ? "right-start" : "left-start", li = {
        offset: [
            0,
            2
        ],
        boundary: "clippingParents",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null,
        autoClose: !0
    }, ci = {
        offset: "(array|string|function)",
        boundary: "(string|element)",
        reference: "(string|element|object)",
        display: "string",
        popperConfig: "(null|object|function)",
        autoClose: "(boolean|string)"
    };
    class hi extends B1 {
        constructor(t73, e34){
            super(t73), this._popper = null, this._config = this._getConfig(e34), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar();
        }
        static get Default() {
            return li;
        }
        static get DefaultType() {
            return ci;
        }
        static get NAME() {
            return Ue;
        }
        toggle() {
            return this._isShown() ? this.hide() : this.show();
        }
        show() {
            if (c1(this._element) || this._isShown(this._menu)) return;
            const t71 = {
                relatedTarget: this._element
            };
            if (j1.trigger(this._element, "show.bs.dropdown", t71).defaultPrevented) return;
            const e = hi.getParentFromElement(this._element);
            this._inNavbar ? U1.setDataAttribute(this._menu, "popper", "none") : this._createPopper(e), "ontouchstart" in document.documentElement && !e.closest(".navbar-nav") && [].concat(...document.body.children).forEach((t)=>j1.on(t, "mouseover", d1)
            ), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(Je), this._element.classList.add(Je), j1.trigger(this._element, "shown.bs.dropdown", t71);
        }
        hide() {
            if (c1(this._element) || !this._isShown(this._menu)) return;
            const t = {
                relatedTarget: this._element
            };
            this._completeHide(t);
        }
        dispose() {
            this._popper && this._popper.destroy(), super.dispose();
        }
        update() {
            this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
        }
        _completeHide(t72) {
            j1.trigger(this._element, "hide.bs.dropdown", t72).defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t)=>j1.off(t, "mouseover", d1)
            ), this._popper && this._popper.destroy(), this._menu.classList.remove(Je), this._element.classList.remove(Je), this._element.setAttribute("aria-expanded", "false"), U1.removeDataAttribute(this._menu, "popper"), j1.trigger(this._element, "hidden.bs.dropdown", t72));
        }
        _getConfig(t75) {
            if (t75 = {
                ...this.constructor.Default,
                ...U1.getDataAttributes(this._element),
                ...t75
            }, a1(Ue, t75, this.constructor.DefaultType), "object" == typeof t75.reference && !o1(t75.reference) && "function" != typeof t75.reference.getBoundingClientRect) throw new TypeError(`${Ue.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return t75;
        }
        _createPopper(t74) {
            if (void 0 === Fe) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let e = this._element;
            "parent" === this._config.reference ? e = t74 : o1(this._config.reference) ? e = r1(this._config.reference) : "object" == typeof this._config.reference && (e = this._config.reference);
            const i = this._getPopperConfig(), n = i.modifiers.find((t)=>"applyStyles" === t.name && !1 === t.enabled
            );
            this._popper = qe(e, this._menu, i), n && U1.setDataAttribute(this._menu, "popper", "static");
        }
        _isShown(t82 = this._element) {
            return t82.classList.contains(Je);
        }
        _getMenuElement() {
            return V1.next(this._element, ei)[0];
        }
        _getPlacement() {
            const t = this._element.parentNode;
            if (t.classList.contains("dropend")) return ri;
            if (t.classList.contains("dropstart")) return ai;
            const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t.classList.contains("dropup") ? e ? ni : ii : e ? oi : si;
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar");
        }
        _getOffset() {
            const { offset: t76  } = this._config;
            return "string" == typeof t76 ? t76.split(",").map((t)=>Number.parseInt(t, 10)
            ) : "function" == typeof t76 ? (e)=>t76(e, this._element)
             : t76;
        }
        _getPopperConfig() {
            const t = {
                placement: this._getPlacement(),
                modifiers: [
                    {
                        name: "preventOverflow",
                        options: {
                            boundary: this._config.boundary
                        }
                    },
                    {
                        name: "offset",
                        options: {
                            offset: this._getOffset()
                        }
                    }
                ]
            };
            return "static" === this._config.display && (t.modifiers = [
                {
                    name: "applyStyles",
                    enabled: !1
                }
            ]), {
                ...t,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig
            };
        }
        _selectMenuItem({ key: t77 , target: e35  }) {
            const i = V1.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(l1);
            i.length && v1(i, e35, t77 === Ye, !i.includes(e35)).focus();
        }
        static jQueryInterface(t78) {
            return this.each(function() {
                const e = hi.getOrCreateInstance(this, t78);
                if ("string" == typeof t78) {
                    if (void 0 === e[t78]) throw new TypeError(`No method named "${t78}"`);
                    e[t78]();
                }
            });
        }
        static clearMenus(t79) {
            if (t79 && (2 === t79.button || "keyup" === t79.type && "Tab" !== t79.key)) return;
            const e = V1.find(ti);
            for(let i = 0, n = e.length; i < n; i++){
                const n = hi.getInstance(e[i]);
                if (!n || !1 === n._config.autoClose) continue;
                if (!n._isShown()) continue;
                const s = {
                    relatedTarget: n._element
                };
                if (t79) {
                    const e = t79.composedPath(), i = e.includes(n._menu);
                    if (e.includes(n._element) || "inside" === n._config.autoClose && !i || "outside" === n._config.autoClose && i) continue;
                    if (n._menu.contains(t79.target) && ("keyup" === t79.type && "Tab" === t79.key || /input|select|option|textarea|form/i.test(t79.target.tagName))) continue;
                    "click" === t79.type && (s.clickEvent = t79);
                }
                n._completeHide(s);
            }
        }
        static getParentFromElement(t80) {
            return n1(t80) || t80.parentNode;
        }
        static dataApiKeydownHandler(t81) {
            if (/input|textarea/i.test(t81.target.tagName) ? t81.key === Ke || t81.key !== Ve && (t81.key !== Ye && t81.key !== Xe || t81.target.closest(ei)) : !Qe.test(t81.key)) return;
            const e = this.classList.contains(Je);
            if (!e && t81.key === Ve) return;
            if (t81.preventDefault(), t81.stopPropagation(), c1(this)) return;
            const i = this.matches(ti) ? this : V1.prev(this, ti)[0], n = hi.getOrCreateInstance(i);
            if (t81.key !== Ve) return t81.key === Xe || t81.key === Ye ? (e || n.show(), void n._selectMenuItem(t81)) : void (e && t81.key !== Ke || hi.clearMenus());
            n.hide();
        }
    }
    j1.on(document, Ze, ti, hi.dataApiKeydownHandler), j1.on(document, Ze, ei, hi.dataApiKeydownHandler), j1.on(document, Ge, hi.clearMenus), j1.on(document, "keyup.bs.dropdown.data-api", hi.clearMenus), j1.on(document, Ge, ti, function(t) {
        t.preventDefault(), hi.getOrCreateInstance(this).toggle();
    }), g1(hi);
    const di = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", ui = ".sticky-top";
    class fi {
        constructor(){
            this._element = document.body;
        }
        getWidth() {
            const t = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t);
        }
        hide() {
            const t = this.getWidth();
            this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", (e)=>e + t
            ), this._setElementAttributes(di, "paddingRight", (e)=>e + t
            ), this._setElementAttributes(ui, "marginRight", (e)=>e - t
            );
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
        }
        _setElementAttributes(t83, e41, i19) {
            const n = this.getWidth();
            this._applyManipulationCallback(t83, (t)=>{
                if (t !== this._element && window.innerWidth > t.clientWidth + n) return;
                this._saveInitialAttribute(t, e41);
                const s = window.getComputedStyle(t)[e41];
                t.style[e41] = `${i19(Number.parseFloat(s))}px`;
            });
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(di, "paddingRight"), this._resetElementAttributes(ui, "marginRight");
        }
        _saveInitialAttribute(t85, e36) {
            const i = t85.style[e36];
            i && U1.setDataAttribute(t85, e36, i);
        }
        _resetElementAttributes(t84, e37) {
            this._applyManipulationCallback(t84, (t)=>{
                const i = U1.getDataAttribute(t, e37);
                void 0 === i ? t.style.removeProperty(e37) : (U1.removeDataAttribute(t, e37), t.style[e37] = i);
            });
        }
        _applyManipulationCallback(t93, e38) {
            o1(t93) ? e38(t93) : V1.find(t93, this._element).forEach(e38);
        }
        isOverflowing() {
            return this.getWidth() > 0;
        }
    }
    const pi = {
        className: "modal-backdrop",
        isVisible: !0,
        isAnimated: !1,
        rootElement: "body",
        clickCallback: null
    }, mi = {
        className: "string",
        isVisible: "boolean",
        isAnimated: "boolean",
        rootElement: "(element|string)",
        clickCallback: "(function|null)"
    }, gi = "show", _i = "mousedown.bs.backdrop";
    class bi {
        constructor(t86){
            this._config = this._getConfig(t86), this._isAppended = !1, this._element = null;
        }
        show(t87) {
            this._config.isVisible ? (this._append(), this._config.isAnimated && u1(this._getElement()), this._getElement().classList.add(gi), this._emulateAnimation(()=>{
                _1(t87);
            })) : _1(t87);
        }
        hide(t88) {
            this._config.isVisible ? (this._getElement().classList.remove(gi), this._emulateAnimation(()=>{
                this.dispose(), _1(t88);
            })) : _1(t88);
        }
        _getElement() {
            if (!this._element) {
                const t = document.createElement("div");
                t.className = this._config.className, this._config.isAnimated && t.classList.add("fade"), this._element = t;
            }
            return this._element;
        }
        _getConfig(t89) {
            return (t89 = {
                ...pi,
                ..."object" == typeof t89 ? t89 : {
                }
            }).rootElement = r1(t89.rootElement), a1("backdrop", t89, mi), t89;
        }
        _append() {
            this._isAppended || (this._config.rootElement.append(this._getElement()), j1.on(this._getElement(), _i, ()=>{
                _1(this._config.clickCallback);
            }), this._isAppended = !0);
        }
        dispose() {
            this._isAppended && (j1.off(this._element, _i), this._element.remove(), this._isAppended = !1);
        }
        _emulateAnimation(t90) {
            b1(t90, this._getElement(), this._config.isAnimated);
        }
    }
    const vi = {
        trapElement: null,
        autofocus: !0
    }, yi = {
        trapElement: "element",
        autofocus: "boolean"
    }, wi = ".bs.focustrap", Ei = "backward";
    class Ai {
        constructor(t91){
            this._config = this._getConfig(t91), this._isActive = !1, this._lastTabNavDirection = null;
        }
        activate() {
            const { trapElement: t92 , autofocus: e  } = this._config;
            this._isActive || (e && t92.focus(), j1.off(document, wi), j1.on(document, "focusin.bs.focustrap", (t)=>this._handleFocusin(t)
            ), j1.on(document, "keydown.tab.bs.focustrap", (t)=>this._handleKeydown(t)
            ), this._isActive = !0);
        }
        deactivate() {
            this._isActive && (this._isActive = !1, j1.off(document, wi));
        }
        _handleFocusin(t99) {
            const { target: e  } = t99, { trapElement: i  } = this._config;
            if (e === document || e === i || i.contains(e)) return;
            const n = V1.focusableChildren(i);
            0 === n.length ? i.focus() : this._lastTabNavDirection === Ei ? n[n.length - 1].focus() : n[0].focus();
        }
        _handleKeydown(t94) {
            "Tab" === t94.key && (this._lastTabNavDirection = t94.shiftKey ? Ei : "forward");
        }
        _getConfig(t95) {
            return t95 = {
                ...vi,
                ..."object" == typeof t95 ? t95 : {
                }
            }, a1("focustrap", t95, yi), t95;
        }
    }
    const Ti = "modal", Oi = "Escape", Ci = {
        backdrop: !0,
        keyboard: !0,
        focus: !0
    }, ki = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean"
    }, Li = "hidden.bs.modal", xi = "show.bs.modal", Di = "resize.bs.modal", Si = "click.dismiss.bs.modal", Ni = "keydown.dismiss.bs.modal", Ii = "mousedown.dismiss.bs.modal", Pi = "modal-open", ji = "show", Mi = "modal-static";
    class Hi extends B1 {
        constructor(t96, e39){
            super(t96), this._config = this._getConfig(e39), this._dialog = V1.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollBar = new fi;
        }
        static get Default() {
            return Ci;
        }
        static get NAME() {
            return Ti;
        }
        toggle(t97) {
            return this._isShown ? this.hide() : this.show(t97);
        }
        show(t98) {
            this._isShown || this._isTransitioning || j1.trigger(this._element, xi, {
                relatedTarget: t98
            }).defaultPrevented || (this._isShown = !0, this._isAnimated() && (this._isTransitioning = !0), this._scrollBar.hide(), document.body.classList.add(Pi), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), j1.on(this._dialog, Ii, ()=>{
                j1.one(this._element, "mouseup.dismiss.bs.modal", (t)=>{
                    t.target === this._element && (this._ignoreBackdropClick = !0);
                });
            }), this._showBackdrop(()=>this._showElement(t98)
            ));
        }
        hide() {
            if (!this._isShown || this._isTransitioning) return;
            if (j1.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
            this._isShown = !1;
            const t = this._isAnimated();
            t && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), this._focustrap.deactivate(), this._element.classList.remove(ji), j1.off(this._element, Si), j1.off(this._dialog, Ii), this._queueCallback(()=>this._hideModal()
            , this._element, t);
        }
        dispose() {
            [
                window,
                this._dialog
            ].forEach((t)=>j1.off(t, ".bs.modal")
            ), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
        }
        handleUpdate() {
            this._adjustDialog();
        }
        _initializeBackDrop() {
            return new bi({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated()
            });
        }
        _initializeFocusTrap() {
            return new Ai({
                trapElement: this._element
            });
        }
        _getConfig(t101) {
            return t101 = {
                ...Ci,
                ...U1.getDataAttributes(this._element),
                ..."object" == typeof t101 ? t101 : {
                }
            }, a1(Ti, t101, ki), t101;
        }
        _showElement(t100) {
            const e = this._isAnimated(), i = V1.findOne(".modal-body", this._dialog);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, i && (i.scrollTop = 0), e && u1(this._element), this._element.classList.add(ji), this._queueCallback(()=>{
                this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, j1.trigger(this._element, "shown.bs.modal", {
                    relatedTarget: t100
                });
            }, this._dialog, e);
        }
        _setEscapeEvent() {
            this._isShown ? j1.on(this._element, Ni, (t)=>{
                this._config.keyboard && t.key === Oi ? (t.preventDefault(), this.hide()) : this._config.keyboard || t.key !== Oi || this._triggerBackdropTransition();
            }) : j1.off(this._element, Ni);
        }
        _setResizeEvent() {
            this._isShown ? j1.on(window, Di, ()=>this._adjustDialog()
            ) : j1.off(window, Di);
        }
        _hideModal() {
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(()=>{
                document.body.classList.remove(Pi), this._resetAdjustments(), this._scrollBar.reset(), j1.trigger(this._element, Li);
            });
        }
        _showBackdrop(t102) {
            j1.on(this._element, Si, (t)=>{
                this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : t.target === t.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition());
            }), this._backdrop.show(t102);
        }
        _isAnimated() {
            return this._element.classList.contains("fade");
        }
        _triggerBackdropTransition() {
            if (j1.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
            const { classList: t , scrollHeight: e , style: i  } = this._element, n = e > document.documentElement.clientHeight;
            !n && "hidden" === i.overflowY || t.contains(Mi) || (n || (i.overflowY = "hidden"), t.add(Mi), this._queueCallback(()=>{
                t.remove(Mi), n || this._queueCallback(()=>{
                    i.overflowY = "";
                }, this._dialog);
            }, this._dialog), this._element.focus());
        }
        _adjustDialog() {
            const t = this._element.scrollHeight > document.documentElement.clientHeight, e = this._scrollBar.getWidth(), i = e > 0;
            (!i && t && !m1() || i && !t && m1()) && (this._element.style.paddingLeft = `${e}px`), (i && !t && !m1() || !i && t && m1()) && (this._element.style.paddingRight = `${e}px`);
        }
        _resetAdjustments() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
        }
        static jQueryInterface(t103, e40) {
            return this.each(function() {
                const i = Hi.getOrCreateInstance(this, t103);
                if ("string" == typeof t103) {
                    if (void 0 === i[t103]) throw new TypeError(`No method named "${t103}"`);
                    i[t103](e40);
                }
            });
        }
    }
    j1.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function(t104) {
        const e = n1(this);
        [
            "A",
            "AREA"
        ].includes(this.tagName) && t104.preventDefault(), j1.one(e, xi, (t)=>{
            t.defaultPrevented || j1.one(e, Li, ()=>{
                l1(this) && this.focus();
            });
        });
        const i = V1.findOne(".modal.show");
        i && Hi.getInstance(i).hide(), Hi.getOrCreateInstance(e).toggle(this);
    }), R1(Hi), g1(Hi);
    const Bi = "offcanvas", Ri = {
        backdrop: !0,
        keyboard: !0,
        scroll: !1
    }, Wi = {
        backdrop: "boolean",
        keyboard: "boolean",
        scroll: "boolean"
    }, $i = "show", zi = ".offcanvas.show", qi = "hidden.bs.offcanvas";
    class Fi extends B1 {
        constructor(t108, e42){
            super(t108), this._config = this._getConfig(e42), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
        }
        static get NAME() {
            return Bi;
        }
        static get Default() {
            return Ri;
        }
        toggle(t105) {
            return this._isShown ? this.hide() : this.show(t105);
        }
        show(t106) {
            this._isShown || j1.trigger(this._element, "show.bs.offcanvas", {
                relatedTarget: t106
            }).defaultPrevented || (this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || (new fi).hide(), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add($i), this._queueCallback(()=>{
                this._config.scroll || this._focustrap.activate(), j1.trigger(this._element, "shown.bs.offcanvas", {
                    relatedTarget: t106
                });
            }, this._element, !0));
        }
        hide() {
            this._isShown && (j1.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.remove($i), this._backdrop.hide(), this._queueCallback(()=>{
                this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._element.style.visibility = "hidden", this._config.scroll || (new fi).reset(), j1.trigger(this._element, qi);
            }, this._element, !0)));
        }
        dispose() {
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
        }
        _getConfig(t107) {
            return t107 = {
                ...Ri,
                ...U1.getDataAttributes(this._element),
                ..."object" == typeof t107 ? t107 : {
                }
            }, a1(Bi, t107, Wi), t107;
        }
        _initializeBackDrop() {
            return new bi({
                className: "offcanvas-backdrop",
                isVisible: this._config.backdrop,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: ()=>this.hide()
            });
        }
        _initializeFocusTrap() {
            return new Ai({
                trapElement: this._element
            });
        }
        _addEventListeners() {
            j1.on(this._element, "keydown.dismiss.bs.offcanvas", (t)=>{
                this._config.keyboard && "Escape" === t.key && this.hide();
            });
        }
        static jQueryInterface(t109) {
            return this.each(function() {
                const e = Fi.getOrCreateInstance(this, t109);
                if ("string" == typeof t109) {
                    if (void 0 === e[t109] || t109.startsWith("_") || "constructor" === t109) throw new TypeError(`No method named "${t109}"`);
                    e[t109](this);
                }
            });
        }
    }
    j1.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function(t) {
        const e = n1(this);
        if ([
            "A",
            "AREA"
        ].includes(this.tagName) && t.preventDefault(), c1(this)) return;
        j1.one(e, qi, ()=>{
            l1(this) && this.focus();
        });
        const i = V1.findOne(zi);
        i && i !== e && Fi.getInstance(i).hide(), Fi.getOrCreateInstance(e).toggle(this);
    }), j1.on(window, "load.bs.offcanvas.data-api", ()=>V1.find(zi).forEach((t)=>Fi.getOrCreateInstance(t).show()
        )
    ), R1(Fi), g1(Fi);
    const Ui = new Set([
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href"
    ]), Vi = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i, Ki = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i, Xi = (t111, e)=>{
        const i = t111.nodeName.toLowerCase();
        if (e.includes(i)) return !Ui.has(i) || Boolean(Vi.test(t111.nodeValue) || Ki.test(t111.nodeValue));
        const n = e.filter((t)=>t instanceof RegExp
        );
        for(let t110 = 0, e43 = n.length; t110 < e43; t110++)if (n[t110].test(i)) return !0;
        return !1;
    };
    function Yi(t113, e, i) {
        if (!t113.length) return t113;
        if (i && "function" == typeof i) return i(t113);
        const n = (new window.DOMParser).parseFromString(t113, "text/html"), s = [].concat(...n.body.querySelectorAll("*"));
        for(let t112 = 0, i20 = s.length; t112 < i20; t112++){
            const i20 = s[t112], n = i20.nodeName.toLowerCase();
            if (!Object.keys(e).includes(n)) {
                i20.remove();
                continue;
            }
            const o = [].concat(...i20.attributes), r = [].concat(e["*"] || [], e[n] || []);
            o.forEach((t)=>{
                Xi(t, r) || i20.removeAttribute(t.nodeName);
            });
        }
        return n.body.innerHTML;
    }
    const Qi = "tooltip", Gi = new Set([
        "sanitize",
        "allowList",
        "sanitizeFn"
    ]), Zi = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(array|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacements: "array",
        boundary: "(string|element)",
        customClass: "(string|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        allowList: "object",
        popperConfig: "(null|object|function)"
    }, Ji = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: m1() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: m1() ? "right" : "left"
    }, tn = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: [
            0,
            0
        ],
        container: !1,
        fallbackPlacements: [
            "top",
            "right",
            "bottom",
            "left"
        ],
        boundary: "clippingParents",
        customClass: "",
        sanitize: !0,
        sanitizeFn: null,
        allowList: {
            "*": [
                "class",
                "dir",
                "id",
                "lang",
                "role",
                /^aria-[\w-]*$/i
            ],
            a: [
                "target",
                "href",
                "title",
                "rel"
            ],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: [
                "src",
                "srcset",
                "alt",
                "title",
                "width",
                "height"
            ],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        },
        popperConfig: null
    }, en = {
        HIDE: "hide.bs.tooltip",
        HIDDEN: "hidden.bs.tooltip",
        SHOW: "show.bs.tooltip",
        SHOWN: "shown.bs.tooltip",
        INSERTED: "inserted.bs.tooltip",
        CLICK: "click.bs.tooltip",
        FOCUSIN: "focusin.bs.tooltip",
        FOCUSOUT: "focusout.bs.tooltip",
        MOUSEENTER: "mouseenter.bs.tooltip",
        MOUSELEAVE: "mouseleave.bs.tooltip"
    }, nn = "fade", sn = "show", on = "show", rn = "out", an = ".tooltip-inner", ln = ".modal", cn = "hide.bs.modal", hn = "hover", dn = "focus";
    class un extends B1 {
        constructor(t116, e47){
            if (void 0 === Fe) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(t116), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {
            }, this._popper = null, this._config = this._getConfig(e47), this.tip = null, this._setListeners();
        }
        static get Default() {
            return tn;
        }
        static get NAME() {
            return Qi;
        }
        static get Event() {
            return en;
        }
        static get DefaultType() {
            return Zi;
        }
        enable() {
            this._isEnabled = !0;
        }
        disable() {
            this._isEnabled = !1;
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled;
        }
        toggle(t114) {
            if (this._isEnabled) {
                if (t114) {
                    const e = this._initializeOnDelegatedTarget(t114);
                    e._activeTrigger.click = !e._activeTrigger.click, e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e);
                } else {
                    if (this.getTipElement().classList.contains(sn)) return void this._leave(null, this);
                    this._enter(null, this);
                }
            }
        }
        dispose() {
            clearTimeout(this._timeout), j1.off(this._element.closest(ln), cn, this._hideModalHandler), this.tip && this.tip.remove(), this._disposePopper(), super.dispose();
        }
        show() {
            if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
            if (!this.isWithContent() || !this._isEnabled) return;
            const t115 = j1.trigger(this._element, this.constructor.Event.SHOW), e = h1(this._element), i = null === e ? this._element.ownerDocument.documentElement.contains(this._element) : e.contains(this._element);
            if (t115.defaultPrevented || !i) return;
            "tooltip" === this.constructor.NAME && this.tip && this.getTitle() !== this.tip.querySelector(an).innerHTML && (this._disposePopper(), this.tip.remove(), this.tip = null);
            const n = this.getTipElement(), s = ((t)=>{
                do t += Math.floor(1000000 * Math.random());
                while (document.getElementById(t))
                return t;
            })(this.constructor.NAME);
            n.setAttribute("id", s), this._element.setAttribute("aria-describedby", s), this._config.animation && n.classList.add(nn);
            const o = "function" == typeof this._config.placement ? this._config.placement.call(this, n, this._element) : this._config.placement, r = this._getAttachment(o);
            this._addAttachmentClass(r);
            const { container: a  } = this._config;
            H1.set(n, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (a.append(n), j1.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = qe(this._element, n, this._getPopperConfig(r)), n.classList.add(sn);
            const l = this._resolvePossibleFunction(this._config.customClass);
            l && n.classList.add(...l.split(" ")), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t)=>{
                j1.on(t, "mouseover", d1);
            });
            const c = this.tip.classList.contains(nn);
            this._queueCallback(()=>{
                const t = this._hoverState;
                this._hoverState = null, j1.trigger(this._element, this.constructor.Event.SHOWN), t === rn && this._leave(null, this);
            }, this.tip, c);
        }
        hide() {
            if (!this._popper) return;
            const t117 = this.getTipElement();
            if (j1.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
            t117.classList.remove(sn), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t)=>j1.off(t, "mouseover", d1)
            ), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1;
            const e = this.tip.classList.contains(nn);
            this._queueCallback(()=>{
                this._isWithActiveTrigger() || (this._hoverState !== on && t117.remove(), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), j1.trigger(this._element, this.constructor.Event.HIDDEN), this._disposePopper());
            }, this.tip, e), this._hoverState = "";
        }
        update() {
            null !== this._popper && this._popper.update();
        }
        isWithContent() {
            return Boolean(this.getTitle());
        }
        getTipElement() {
            if (this.tip) return this.tip;
            const t = document.createElement("div");
            t.innerHTML = this._config.template;
            const e = t.children[0];
            return this.setContent(e), e.classList.remove(nn, sn), this.tip = e, this.tip;
        }
        setContent(t125) {
            this._sanitizeAndSetContent(t125, this.getTitle(), an);
        }
        _sanitizeAndSetContent(t118, e44, i21) {
            const n = V1.findOne(i21, t118);
            e44 || !n ? this.setElementContent(n, e44) : n.remove();
        }
        setElementContent(t119, e45) {
            if (null !== t119) return o1(e45) ? (e45 = r1(e45), void (this._config.html ? e45.parentNode !== t119 && (t119.innerHTML = "", t119.append(e45)) : t119.textContent = e45.textContent)) : void (this._config.html ? (this._config.sanitize && (e45 = Yi(e45, this._config.allowList, this._config.sanitizeFn)), t119.innerHTML = e45) : t119.textContent = e45);
        }
        getTitle() {
            const t = this._element.getAttribute("data-bs-original-title") || this._config.title;
            return this._resolvePossibleFunction(t);
        }
        updateAttachment(t120) {
            return "right" === t120 ? "end" : "left" === t120 ? "start" : t120;
        }
        _initializeOnDelegatedTarget(t121, e46) {
            return e46 || this.constructor.getOrCreateInstance(t121.delegateTarget, this._getDelegateConfig());
        }
        _getOffset() {
            const { offset: t122  } = this._config;
            return "string" == typeof t122 ? t122.split(",").map((t)=>Number.parseInt(t, 10)
            ) : "function" == typeof t122 ? (e)=>t122(e, this._element)
             : t122;
        }
        _resolvePossibleFunction(t123) {
            return "function" == typeof t123 ? t123.call(this._element) : t123;
        }
        _getPopperConfig(t124) {
            const e = {
                placement: t124,
                modifiers: [
                    {
                        name: "flip",
                        options: {
                            fallbackPlacements: this._config.fallbackPlacements
                        }
                    },
                    {
                        name: "offset",
                        options: {
                            offset: this._getOffset()
                        }
                    },
                    {
                        name: "preventOverflow",
                        options: {
                            boundary: this._config.boundary
                        }
                    },
                    {
                        name: "arrow",
                        options: {
                            element: `.${this.constructor.NAME}-arrow`
                        }
                    },
                    {
                        name: "onChange",
                        enabled: !0,
                        phase: "afterWrite",
                        fn: (t)=>this._handlePopperPlacementChange(t)
                    }
                ],
                onFirstUpdate: (t)=>{
                    t.options.placement !== t.placement && this._handlePopperPlacementChange(t);
                }
            };
            return {
                ...e,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig
            };
        }
        _addAttachmentClass(t127) {
            this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(t127)}`);
        }
        _getAttachment(t126) {
            return Ji[t126.toUpperCase()];
        }
        _setListeners() {
            this._config.trigger.split(" ").forEach((t128)=>{
                if ("click" === t128) j1.on(this._element, this.constructor.Event.CLICK, this._config.selector, (t)=>this.toggle(t)
                );
                else if ("manual" !== t128) {
                    const e = t128 === hn ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN, i = t128 === hn ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
                    j1.on(this._element, e, this._config.selector, (t)=>this._enter(t)
                    ), j1.on(this._element, i, this._config.selector, (t)=>this._leave(t)
                    );
                }
            }), this._hideModalHandler = ()=>{
                this._element && this.hide();
            }, j1.on(this._element.closest(ln), cn, this._hideModalHandler), this._config.selector ? this._config = {
                ...this._config,
                trigger: "manual",
                selector: ""
            } : this._fixTitle();
        }
        _fixTitle() {
            const t = this._element.getAttribute("title"), e = typeof this._element.getAttribute("data-bs-original-title");
            (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""), !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""));
        }
        _enter(t131, e50) {
            e50 = this._initializeOnDelegatedTarget(t131, e50), t131 && (e50._activeTrigger["focusin" === t131.type ? dn : hn] = !0), e50.getTipElement().classList.contains(sn) || e50._hoverState === on ? e50._hoverState = on : (clearTimeout(e50._timeout), e50._hoverState = on, e50._config.delay && e50._config.delay.show ? e50._timeout = setTimeout(()=>{
                e50._hoverState === on && e50.show();
            }, e50._config.delay.show) : e50.show());
        }
        _leave(t129, e48) {
            e48 = this._initializeOnDelegatedTarget(t129, e48), t129 && (e48._activeTrigger["focusout" === t129.type ? dn : hn] = e48._element.contains(t129.relatedTarget)), e48._isWithActiveTrigger() || (clearTimeout(e48._timeout), e48._hoverState = rn, e48._config.delay && e48._config.delay.hide ? e48._timeout = setTimeout(()=>{
                e48._hoverState === rn && e48.hide();
            }, e48._config.delay.hide) : e48.hide());
        }
        _isWithActiveTrigger() {
            for(const t in this._activeTrigger)if (this._activeTrigger[t]) return !0;
            return !1;
        }
        _getConfig(t130) {
            const e = U1.getDataAttributes(this._element);
            return Object.keys(e).forEach((t)=>{
                Gi.has(t) && delete e[t];
            }), (t130 = {
                ...this.constructor.Default,
                ...e,
                ..."object" == typeof t130 && t130 ? t130 : {
                }
            }).container = !1 === t130.container ? document.body : r1(t130.container), "number" == typeof t130.delay && (t130.delay = {
                show: t130.delay,
                hide: t130.delay
            }), "number" == typeof t130.title && (t130.title = t130.title.toString()), "number" == typeof t130.content && (t130.content = t130.content.toString()), a1(Qi, t130, this.constructor.DefaultType), t130.sanitize && (t130.template = Yi(t130.template, t130.allowList, t130.sanitizeFn)), t130;
        }
        _getDelegateConfig() {
            const t = {
            };
            for(const e in this._config)this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]);
            return t;
        }
        _cleanTipClass() {
            const t132 = this.getTipElement(), e49 = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, "g"), i = t132.getAttribute("class").match(e49);
            null !== i && i.length > 0 && i.map((t)=>t.trim()
            ).forEach((e)=>t132.classList.remove(e)
            );
        }
        _getBasicClassPrefix() {
            return "bs-tooltip";
        }
        _handlePopperPlacementChange(t138) {
            const { state: e  } = t138;
            e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)));
        }
        _disposePopper() {
            this._popper && (this._popper.destroy(), this._popper = null);
        }
        static jQueryInterface(t133) {
            return this.each(function() {
                const e = un.getOrCreateInstance(this, t133);
                if ("string" == typeof t133) {
                    if (void 0 === e[t133]) throw new TypeError(`No method named "${t133}"`);
                    e[t133]();
                }
            });
        }
    }
    g1(un);
    const fn = {
        ...un.Default,
        placement: "right",
        offset: [
            0,
            8
        ],
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }, pn = {
        ...un.DefaultType,
        content: "(string|element|function)"
    }, mn = {
        HIDE: "hide.bs.popover",
        HIDDEN: "hidden.bs.popover",
        SHOW: "show.bs.popover",
        SHOWN: "shown.bs.popover",
        INSERTED: "inserted.bs.popover",
        CLICK: "click.bs.popover",
        FOCUSIN: "focusin.bs.popover",
        FOCUSOUT: "focusout.bs.popover",
        MOUSEENTER: "mouseenter.bs.popover",
        MOUSELEAVE: "mouseleave.bs.popover"
    };
    class gn extends un {
        static get Default() {
            return fn;
        }
        static get NAME() {
            return "popover";
        }
        static get Event() {
            return mn;
        }
        static get DefaultType() {
            return pn;
        }
        isWithContent() {
            return this.getTitle() || this._getContent();
        }
        setContent(t134) {
            this._sanitizeAndSetContent(t134, this.getTitle(), ".popover-header"), this._sanitizeAndSetContent(t134, this._getContent(), ".popover-body");
        }
        _getContent() {
            return this._resolvePossibleFunction(this._config.content);
        }
        _getBasicClassPrefix() {
            return "bs-popover";
        }
        static jQueryInterface(t135) {
            return this.each(function() {
                const e = gn.getOrCreateInstance(this, t135);
                if ("string" == typeof t135) {
                    if (void 0 === e[t135]) throw new TypeError(`No method named "${t135}"`);
                    e[t135]();
                }
            });
        }
    }
    g1(gn);
    const _n = "scrollspy", bn = {
        offset: 10,
        method: "auto",
        target: ""
    }, vn = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    }, yn = "active", wn = ".nav-link, .list-group-item, .dropdown-item", En = "position";
    class An extends B1 {
        constructor(t136, e52){
            super(t136), this._scrollElement = "BODY" === this._element.tagName ? window : this._element, this._config = this._getConfig(e52), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, j1.on(this._scrollElement, "scroll.bs.scrollspy", ()=>this._process()
            ), this.refresh(), this._process();
        }
        static get Default() {
            return bn;
        }
        static get NAME() {
            return _n;
        }
        refresh() {
            const t137 = this._scrollElement === this._scrollElement.window ? "offset" : En, e51 = "auto" === this._config.method ? t137 : this._config.method, n = e51 === En ? this._getScrollTop() : 0;
            this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), V1.find(wn, this._config.target).map((t)=>{
                const s = i1(t), o = s ? V1.findOne(s) : null;
                if (o) {
                    const t = o.getBoundingClientRect();
                    if (t.width || t.height) return [
                        U1[e51](o).top + n,
                        s
                    ];
                }
                return null;
            }).filter((t)=>t
            ).sort((t, e)=>t[0] - e[0]
            ).forEach((t)=>{
                this._offsets.push(t[0]), this._targets.push(t[1]);
            });
        }
        dispose() {
            j1.off(this._scrollElement, ".bs.scrollspy"), super.dispose();
        }
        _getConfig(t140) {
            return (t140 = {
                ...bn,
                ...U1.getDataAttributes(this._element),
                ..."object" == typeof t140 && t140 ? t140 : {
                }
            }).target = r1(t140.target) || document.documentElement, a1(_n, t140, vn), t140;
        }
        _getScrollTop() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
        }
        _getScrollHeight() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
        }
        _getOffsetHeight() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
        }
        _process() {
            const t = this._getScrollTop() + this._config.offset, e = this._getScrollHeight(), i = this._config.offset + e - this._getOffsetHeight();
            if (this._scrollHeight !== e && this.refresh(), t >= i) {
                const t = this._targets[this._targets.length - 1];
                this._activeTarget !== t && this._activate(t);
            } else {
                if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                for(let e = this._offsets.length; e--;)this._activeTarget !== this._targets[e] && t >= this._offsets[e] && (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) && this._activate(this._targets[e]);
            }
        }
        _activate(t139) {
            this._activeTarget = t139, this._clear();
            const e53 = wn.split(",").map((e)=>`${e}[data-bs-target="${t139}"],${e}[href="${t139}"]`
            ), i = V1.findOne(e53.join(","), this._config.target);
            i.classList.add(yn), i.classList.contains("dropdown-item") ? V1.findOne(".dropdown-toggle", i.closest(".dropdown")).classList.add(yn) : V1.parents(i, ".nav, .list-group").forEach((t141)=>{
                V1.prev(t141, ".nav-link, .list-group-item").forEach((t)=>t.classList.add(yn)
                ), V1.prev(t141, ".nav-item").forEach((t142)=>{
                    V1.children(t142, ".nav-link").forEach((t)=>t.classList.add(yn)
                    );
                });
            }), j1.trigger(this._scrollElement, "activate.bs.scrollspy", {
                relatedTarget: t139
            });
        }
        _clear() {
            V1.find(wn, this._config.target).filter((t)=>t.classList.contains(yn)
            ).forEach((t)=>t.classList.remove(yn)
            );
        }
        static jQueryInterface(t143) {
            return this.each(function() {
                const e = An.getOrCreateInstance(this, t143);
                if ("string" == typeof t143) {
                    if (void 0 === e[t143]) throw new TypeError(`No method named "${t143}"`);
                    e[t143]();
                }
            });
        }
    }
    j1.on(window, "load.bs.scrollspy.data-api", ()=>{
        V1.find('[data-bs-spy="scroll"]').forEach((t)=>new An(t)
        );
    }), g1(An);
    const Tn = "active", On = "fade", Cn = "show", kn = ".active", Ln = ":scope > li > .active";
    class xn extends B1 {
        static get NAME() {
            return "tab";
        }
        show() {
            if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(Tn)) return;
            let t;
            const e = n1(this._element), i = this._element.closest(".nav, .list-group");
            if (i) {
                const e = "UL" === i.nodeName || "OL" === i.nodeName ? Ln : kn;
                t = V1.find(e, i), t = t[t.length - 1];
            }
            const s = t ? j1.trigger(t, "hide.bs.tab", {
                relatedTarget: this._element
            }) : null;
            if (j1.trigger(this._element, "show.bs.tab", {
                relatedTarget: t
            }).defaultPrevented || null !== s && s.defaultPrevented) return;
            this._activate(this._element, i);
            const o = ()=>{
                j1.trigger(t, "hidden.bs.tab", {
                    relatedTarget: this._element
                }), j1.trigger(this._element, "shown.bs.tab", {
                    relatedTarget: t
                });
            };
            e ? this._activate(e, e.parentNode, o) : o();
        }
        _activate(t145, e55, i) {
            const n = (!e55 || "UL" !== e55.nodeName && "OL" !== e55.nodeName ? V1.children(e55, kn) : V1.find(Ln, e55))[0], s = i && n && n.classList.contains(On), o = ()=>this._transitionComplete(t145, n, i)
            ;
            n && s ? (n.classList.remove(Cn), this._queueCallback(o, t145, !0)) : o();
        }
        _transitionComplete(t144, e54, i22) {
            if (e54) {
                e54.classList.remove(Tn);
                const t = V1.findOne(":scope > .dropdown-menu .active", e54.parentNode);
                t && t.classList.remove(Tn), "tab" === e54.getAttribute("role") && e54.setAttribute("aria-selected", !1);
            }
            t144.classList.add(Tn), "tab" === t144.getAttribute("role") && t144.setAttribute("aria-selected", !0), u1(t144), t144.classList.contains(On) && t144.classList.add(Cn);
            let n = t144.parentNode;
            if (n && "LI" === n.nodeName && (n = n.parentNode), n && n.classList.contains("dropdown-menu")) {
                const e = t144.closest(".dropdown");
                e && V1.find(".dropdown-toggle", e).forEach((t)=>t.classList.add(Tn)
                ), t144.setAttribute("aria-expanded", !0);
            }
            i22 && i22();
        }
        static jQueryInterface(t146) {
            return this.each(function() {
                const e = xn.getOrCreateInstance(this);
                if ("string" == typeof t146) {
                    if (void 0 === e[t146]) throw new TypeError(`No method named "${t146}"`);
                    e[t146]();
                }
            });
        }
    }
    j1.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', function(t) {
        [
            "A",
            "AREA"
        ].includes(this.tagName) && t.preventDefault(), c1(this) || xn.getOrCreateInstance(this).show();
    }), g1(xn);
    const Dn = "toast", Sn = "hide", Nn = "show", In = "showing", Pn = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }, jn = {
        animation: !0,
        autohide: !0,
        delay: 5000
    };
    class Mn extends B1 {
        constructor(t149, e57){
            super(t149), this._config = this._getConfig(e57), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
        }
        static get DefaultType() {
            return Pn;
        }
        static get Default() {
            return jn;
        }
        static get NAME() {
            return Dn;
        }
        show() {
            j1.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(Sn), u1(this._element), this._element.classList.add(Nn), this._element.classList.add(In), this._queueCallback(()=>{
                this._element.classList.remove(In), j1.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide();
            }, this._element, this._config.animation));
        }
        hide() {
            this._element.classList.contains(Nn) && (j1.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add(In), this._queueCallback(()=>{
                this._element.classList.add(Sn), this._element.classList.remove(In), this._element.classList.remove(Nn), j1.trigger(this._element, "hidden.bs.toast");
            }, this._element, this._config.animation)));
        }
        dispose() {
            this._clearTimeout(), this._element.classList.contains(Nn) && this._element.classList.remove(Nn), super.dispose();
        }
        _getConfig(t147) {
            return t147 = {
                ...jn,
                ...U1.getDataAttributes(this._element),
                ..."object" == typeof t147 && t147 ? t147 : {
                }
            }, a1(Dn, t147, this.constructor.DefaultType), t147;
        }
        _maybeScheduleHide() {
            this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(()=>{
                this.hide();
            }, this._config.delay)));
        }
        _onInteraction(t148, e56) {
            switch(t148.type){
                case "mouseover":
                case "mouseout":
                    this._hasMouseInteraction = e56;
                    break;
                case "focusin":
                case "focusout":
                    this._hasKeyboardInteraction = e56;
            }
            if (e56) return void this._clearTimeout();
            const i = t148.relatedTarget;
            this._element === i || this._element.contains(i) || this._maybeScheduleHide();
        }
        _setListeners() {
            j1.on(this._element, "mouseover.bs.toast", (t)=>this._onInteraction(t, !0)
            ), j1.on(this._element, "mouseout.bs.toast", (t)=>this._onInteraction(t, !1)
            ), j1.on(this._element, "focusin.bs.toast", (t)=>this._onInteraction(t, !0)
            ), j1.on(this._element, "focusout.bs.toast", (t)=>this._onInteraction(t, !1)
            );
        }
        _clearTimeout() {
            clearTimeout(this._timeout), this._timeout = null;
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = Mn.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    return R1(Mn), g1(Mn), {
        Alert: W1,
        Button: z1,
        Carousel: st,
        Collapse: pt,
        Dropdown: hi,
        Modal: Hi,
        Offcanvas: Fi,
        Popover: gn,
        ScrollSpy: An,
        Tab: xn,
        Toast: Mn,
        Tooltip: un
    };
});

},{}],"hIRsT":[function(require,module,exports) {
!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).GLightbox = t();
}(this, function() {
    "use strict";
    function e1(t) {
        return (e1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(t);
    }
    function t1(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function i1(e, t) {
        for(var i = 0; i < t.length; i++){
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
    }
    function n1(e, t, n) {
        return t && i1(e.prototype, t), n && i1(e, n), e;
    }
    var s1 = Date.now();
    function l1() {
        var e = {
        }, t = !0, i2 = 0, n2 = arguments.length;
        "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (t = arguments[0], i2++);
        for(var s = function(i) {
            for(var n in i)Object.prototype.hasOwnProperty.call(i, n) && (t && "[object Object]" === Object.prototype.toString.call(i[n]) ? e[n] = l1(!0, e[n], i[n]) : e[n] = i[n]);
        }; i2 < n2; i2++){
            var o = arguments[i2];
            s(o);
        }
        return e;
    }
    function o1(e, t) {
        if ((k1(e) || e === window || e === document) && (e = [
            e
        ]), A1(e) || L1(e) || (e = [
            e
        ]), 0 != P1(e)) {
            if (A1(e) && !L1(e)) for(var i = e.length, n = 0; n < i && !1 !== t.call(e[n], e[n], n, e); n++);
            else if (L1(e)) {
                for(var s in e)if (O1(e, s) && !1 === t.call(e[s], e[s], s, e)) break;
            }
        }
    }
    function r1(e2) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, n3 = e2[s1] = e2[s1] || [], l = {
            all: n3,
            evt: null,
            found: null
        };
        return t && i && P1(n3) > 0 && o1(n3, function(e, n) {
            if (e.eventName == t && e.fn.toString() == i.toString()) return l.found = !0, l.evt = n, !1;
        }), l;
    }
    function a1(e3) {
        var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        }, i3 = t2.onElement, n = t2.withCallback, s = t2.avoidDuplicate, l = void 0 === s || s, a = t2.once, h = void 0 !== a && a, d = t2.useCapture, c = void 0 !== d && d, u = arguments.length > 2 ? arguments[2] : void 0, g = i3 || [];
        function v(e) {
            T1(n) && n.call(u, e, this), h && v.destroy();
        }
        return C1(g) && (g = document.querySelectorAll(g)), v.destroy = function() {
            o1(g, function(t) {
                var i = r1(t, e3, v);
                i.found && i.all.splice(i.evt, 1), t.removeEventListener && t.removeEventListener(e3, v, c);
            });
        }, o1(g, function(t) {
            var i = r1(t, e3, v);
            (t.addEventListener && l && !i.found || !l) && (t.addEventListener(e3, v, c), i.all.push({
                eventName: e3,
                fn: v
            }));
        }), v;
    }
    function h1(e, t3) {
        o1(t3.split(" "), function(t) {
            return e.classList.add(t);
        });
    }
    function d1(e, t4) {
        o1(t4.split(" "), function(t) {
            return e.classList.remove(t);
        });
    }
    function c1(e, t) {
        return e.classList.contains(t);
    }
    function u1(e, t) {
        for(; e !== document.body;){
            if (!(e = e.parentElement)) return !1;
            if ("function" == typeof e.matches ? e.matches(t) : e.msMatchesSelector(t)) return e;
        }
    }
    function g1(e4) {
        var t5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!e4 || "" === t5) return !1;
        if ("none" == t5) return T1(i) && i(), !1;
        var n = x1(), s = t5.split(" ");
        o1(s, function(t) {
            h1(e4, "g" + t);
        }), a1(n, {
            onElement: e4,
            avoidDuplicate: !1,
            once: !0,
            withCallback: function(e5, t) {
                o1(s, function(e) {
                    d1(t, "g" + e);
                }), T1(i) && i();
            }
        });
    }
    function v1(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        if ("" == t) return e.style.webkitTransform = "", e.style.MozTransform = "", e.style.msTransform = "", e.style.OTransform = "", e.style.transform = "", !1;
        e.style.webkitTransform = t, e.style.MozTransform = t, e.style.msTransform = t, e.style.OTransform = t, e.style.transform = t;
    }
    function f1(e) {
        e.style.display = "block";
    }
    function p1(e) {
        e.style.display = "none";
    }
    function m1(e) {
        var t = document.createDocumentFragment(), i = document.createElement("div");
        for(i.innerHTML = e; i.firstChild;)t.appendChild(i.firstChild);
        return t;
    }
    function y1() {
        return {
            width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        };
    }
    function x1() {
        var e, t = document.createElement("fakeelement"), i = {
            animation: "animationend",
            OAnimation: "oAnimationEnd",
            MozAnimation: "animationend",
            WebkitAnimation: "webkitAnimationEnd"
        };
        for(e in i)if (void 0 !== t.style[e]) return i[e];
    }
    function b1(e, t, i, n) {
        if (e()) t();
        else {
            var s;
            i || (i = 100);
            var l = setInterval(function() {
                e() && (clearInterval(l), s && clearTimeout(s), t());
            }, i);
            n && (s = setTimeout(function() {
                clearInterval(l);
            }, n));
        }
    }
    function S1(e, t, i) {
        if (I1(e)) console.error("Inject assets error");
        else if (T1(t) && (i = t, t = !1), C1(t) && t in window) T1(i) && i();
        else {
            var n;
            if (-1 !== e.indexOf(".css")) {
                if ((n = document.querySelectorAll('link[href="' + e + '"]')) && n.length > 0) return void (T1(i) && i());
                var s = document.getElementsByTagName("head")[0], l = s.querySelectorAll('link[rel="stylesheet"]'), o = document.createElement("link");
                return o.rel = "stylesheet", o.type = "text/css", o.href = e, o.media = "all", l ? s.insertBefore(o, l[0]) : s.appendChild(o), void (T1(i) && i());
            }
            if ((n = document.querySelectorAll('script[src="' + e + '"]')) && n.length > 0) {
                if (T1(i)) {
                    if (C1(t)) return b1(function() {
                        return void 0 !== window[t];
                    }, function() {
                        i();
                    }), !1;
                    i();
                }
            } else {
                var r = document.createElement("script");
                r.type = "text/javascript", r.src = e, r.onload = function() {
                    if (T1(i)) {
                        if (C1(t)) return b1(function() {
                            return void 0 !== window[t];
                        }, function() {
                            i();
                        }), !1;
                        i();
                    }
                }, document.body.appendChild(r);
            }
        }
    }
    function w1() {
        return "navigator" in window && window.navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i);
    }
    function T1(e) {
        return "function" == typeof e;
    }
    function C1(e) {
        return "string" == typeof e;
    }
    function k1(e) {
        return !(!e || !e.nodeType || 1 != e.nodeType);
    }
    function E1(e) {
        return Array.isArray(e);
    }
    function A1(e) {
        return e && e.length && isFinite(e.length);
    }
    function L1(t) {
        return "object" === e1(t) && null != t && !T1(t) && !E1(t);
    }
    function I1(e) {
        return null == e;
    }
    function O1(e, t) {
        return null !== e && hasOwnProperty.call(e, t);
    }
    function P1(e) {
        if (L1(e)) {
            if (e.keys) return e.keys().length;
            var t = 0;
            for(var i in e)O1(e, i) && t++;
            return t;
        }
        return e.length;
    }
    function z1(e) {
        return !isNaN(parseFloat(e)) && isFinite(e);
    }
    function M1() {
        var e6 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1, t = document.querySelectorAll(".gbtn[data-taborder]:not(.disabled)");
        if (!t.length) return !1;
        if (1 == t.length) return t[0];
        "string" == typeof e6 && (e6 = parseInt(e6));
        var i = e6 < 0 ? 1 : e6 + 1;
        i > t.length && (i = "1");
        var n = [];
        o1(t, function(e) {
            n.push(e.getAttribute("data-taborder"));
        });
        var s = n.filter(function(e) {
            return e >= parseInt(i);
        }), l = s.sort()[0];
        return document.querySelector('.gbtn[data-taborder="'.concat(l, '"]'));
    }
    function X1(e) {
        if (e.events.hasOwnProperty("keyboard")) return !1;
        e.events.keyboard = a1("keydown", {
            onElement: window,
            withCallback: function(t, i) {
                var n = (t = t || window.event).keyCode;
                if (9 == n) {
                    var s = document.querySelector(".gbtn.focused");
                    if (!s) {
                        var l = !(!document.activeElement || !document.activeElement.nodeName) && document.activeElement.nodeName.toLocaleLowerCase();
                        if ("input" == l || "textarea" == l || "button" == l) return;
                    }
                    t.preventDefault();
                    var o = document.querySelectorAll(".gbtn[data-taborder]");
                    if (!o || o.length <= 0) return;
                    if (!s) {
                        var r = M1();
                        return void (r && (r.focus(), h1(r, "focused")));
                    }
                    var a = M1(s.getAttribute("data-taborder"));
                    d1(s, "focused"), a && (a.focus(), h1(a, "focused"));
                }
                39 == n && e.nextSlide(), 37 == n && e.prevSlide(), 27 == n && e.close();
            }
        });
    }
    function Y1(e) {
        return Math.sqrt(e.x * e.x + e.y * e.y);
    }
    function q1(e7, t6) {
        var i4 = function(e8, t7) {
            var i = Y1(e8) * Y1(t7);
            if (0 === i) return 0;
            var n = function(e, t) {
                return e.x * t.x + e.y * t.y;
            }(e8, t7) / i;
            return n > 1 && (n = 1), Math.acos(n);
        }(e7, t6);
        return (function(e, t) {
            return e.x * t.y - t.x * e.y;
        })(e7, t6) > 0 && (i4 *= -1), 180 * i4 / Math.PI;
    }
    var N = function() {
        function e9(i) {
            t1(this, e9), this.handlers = [], this.el = i;
        }
        return n1(e9, [
            {
                key: "add",
                value: function(e) {
                    this.handlers.push(e);
                }
            },
            {
                key: "del",
                value: function(e) {
                    e || (this.handlers = []);
                    for(var t = this.handlers.length; t >= 0; t--)this.handlers[t] === e && this.handlers.splice(t, 1);
                }
            },
            {
                key: "dispatch",
                value: function() {
                    for(var e = 0, t = this.handlers.length; e < t; e++){
                        var i = this.handlers[e];
                        "function" == typeof i && i.apply(this.el, arguments);
                    }
                }
            }
        ]), e9;
    }();
    function D(e, t) {
        var i = new N(e);
        return i.add(t), i;
    }
    var _ = function() {
        function e10(i, n) {
            t1(this, e10), this.element = "string" == typeof i ? document.querySelector(i) : i, this.start = this.start.bind(this), this.move = this.move.bind(this), this.end = this.end.bind(this), this.cancel = this.cancel.bind(this), this.element.addEventListener("touchstart", this.start, !1), this.element.addEventListener("touchmove", this.move, !1), this.element.addEventListener("touchend", this.end, !1), this.element.addEventListener("touchcancel", this.cancel, !1), this.preV = {
                x: null,
                y: null
            }, this.pinchStartLen = null, this.zoom = 1, this.isDoubleTap = !1;
            var s = function() {
            };
            this.rotate = D(this.element, n.rotate || s), this.touchStart = D(this.element, n.touchStart || s), this.multipointStart = D(this.element, n.multipointStart || s), this.multipointEnd = D(this.element, n.multipointEnd || s), this.pinch = D(this.element, n.pinch || s), this.swipe = D(this.element, n.swipe || s), this.tap = D(this.element, n.tap || s), this.doubleTap = D(this.element, n.doubleTap || s), this.longTap = D(this.element, n.longTap || s), this.singleTap = D(this.element, n.singleTap || s), this.pressMove = D(this.element, n.pressMove || s), this.twoFingerPressMove = D(this.element, n.twoFingerPressMove || s), this.touchMove = D(this.element, n.touchMove || s), this.touchEnd = D(this.element, n.touchEnd || s), this.touchCancel = D(this.element, n.touchCancel || s), this.translateContainer = this.element, this._cancelAllHandler = this.cancelAll.bind(this), window.addEventListener("scroll", this._cancelAllHandler), this.delta = null, this.last = null, this.now = null, this.tapTimeout = null, this.singleTapTimeout = null, this.longTapTimeout = null, this.swipeTimeout = null, this.x1 = this.x2 = this.y1 = this.y2 = null, this.preTapPosition = {
                x: null,
                y: null
            };
        }
        return n1(e10, [
            {
                key: "start",
                value: function(e) {
                    if (e.touches) {
                        if (e.target && e.target.nodeName && [
                            "a",
                            "button",
                            "input"
                        ].indexOf(e.target.nodeName.toLowerCase()) >= 0) console.log("ignore drag for this touched element", e.target.nodeName.toLowerCase());
                        else {
                            this.now = Date.now(), this.x1 = e.touches[0].pageX, this.y1 = e.touches[0].pageY, this.delta = this.now - (this.last || this.now), this.touchStart.dispatch(e, this.element), null !== this.preTapPosition.x && (this.isDoubleTap = this.delta > 0 && this.delta <= 250 && Math.abs(this.preTapPosition.x - this.x1) < 30 && Math.abs(this.preTapPosition.y - this.y1) < 30, this.isDoubleTap && clearTimeout(this.singleTapTimeout)), this.preTapPosition.x = this.x1, this.preTapPosition.y = this.y1, this.last = this.now;
                            var t = this.preV;
                            if (e.touches.length > 1) {
                                this._cancelLongTap(), this._cancelSingleTap();
                                var i = {
                                    x: e.touches[1].pageX - this.x1,
                                    y: e.touches[1].pageY - this.y1
                                };
                                t.x = i.x, t.y = i.y, this.pinchStartLen = Y1(t), this.multipointStart.dispatch(e, this.element);
                            }
                            this._preventTap = !1, this.longTapTimeout = setTimeout((function() {
                                this.longTap.dispatch(e, this.element), this._preventTap = !0;
                            }).bind(this), 750);
                        }
                    }
                }
            },
            {
                key: "move",
                value: function(e) {
                    if (e.touches) {
                        var t = this.preV, i = e.touches.length, n = e.touches[0].pageX, s = e.touches[0].pageY;
                        if (this.isDoubleTap = !1, i > 1) {
                            var l = e.touches[1].pageX, o = e.touches[1].pageY, r = {
                                x: e.touches[1].pageX - n,
                                y: e.touches[1].pageY - s
                            };
                            null !== t.x && (this.pinchStartLen > 0 && (e.zoom = Y1(r) / this.pinchStartLen, this.pinch.dispatch(e, this.element)), e.angle = q1(r, t), this.rotate.dispatch(e, this.element)), t.x = r.x, t.y = r.y, null !== this.x2 && null !== this.sx2 ? (e.deltaX = (n - this.x2 + l - this.sx2) / 2, e.deltaY = (s - this.y2 + o - this.sy2) / 2) : (e.deltaX = 0, e.deltaY = 0), this.twoFingerPressMove.dispatch(e, this.element), this.sx2 = l, this.sy2 = o;
                        } else {
                            if (null !== this.x2) {
                                e.deltaX = n - this.x2, e.deltaY = s - this.y2;
                                var a = Math.abs(this.x1 - this.x2), h = Math.abs(this.y1 - this.y2);
                                (a > 10 || h > 10) && (this._preventTap = !0);
                            } else e.deltaX = 0, e.deltaY = 0;
                            this.pressMove.dispatch(e, this.element);
                        }
                        this.touchMove.dispatch(e, this.element), this._cancelLongTap(), this.x2 = n, this.y2 = s, i > 1 && e.preventDefault();
                    }
                }
            },
            {
                key: "end",
                value: function(e) {
                    if (e.changedTouches) {
                        this._cancelLongTap();
                        var t = this;
                        e.touches.length < 2 && (this.multipointEnd.dispatch(e, this.element), this.sx2 = this.sy2 = null), this.x2 && Math.abs(this.x1 - this.x2) > 30 || this.y2 && Math.abs(this.y1 - this.y2) > 30 ? (e.direction = this._swipeDirection(this.x1, this.x2, this.y1, this.y2), this.swipeTimeout = setTimeout(function() {
                            t.swipe.dispatch(e, t.element);
                        }, 0)) : (this.tapTimeout = setTimeout(function() {
                            t._preventTap || t.tap.dispatch(e, t.element), t.isDoubleTap && (t.doubleTap.dispatch(e, t.element), t.isDoubleTap = !1);
                        }, 0), t.isDoubleTap || (t.singleTapTimeout = setTimeout(function() {
                            t.singleTap.dispatch(e, t.element);
                        }, 250))), this.touchEnd.dispatch(e, this.element), this.preV.x = 0, this.preV.y = 0, this.zoom = 1, this.pinchStartLen = null, this.x1 = this.x2 = this.y1 = this.y2 = null;
                    }
                }
            },
            {
                key: "cancelAll",
                value: function() {
                    this._preventTap = !0, clearTimeout(this.singleTapTimeout), clearTimeout(this.tapTimeout), clearTimeout(this.longTapTimeout), clearTimeout(this.swipeTimeout);
                }
            },
            {
                key: "cancel",
                value: function(e) {
                    this.cancelAll(), this.touchCancel.dispatch(e, this.element);
                }
            },
            {
                key: "_cancelLongTap",
                value: function() {
                    clearTimeout(this.longTapTimeout);
                }
            },
            {
                key: "_cancelSingleTap",
                value: function() {
                    clearTimeout(this.singleTapTimeout);
                }
            },
            {
                key: "_swipeDirection",
                value: function(e, t, i, n) {
                    return Math.abs(e - t) >= Math.abs(i - n) ? e - t > 0 ? "Left" : "Right" : i - n > 0 ? "Up" : "Down";
                }
            },
            {
                key: "on",
                value: function(e, t) {
                    this[e] && this[e].add(t);
                }
            },
            {
                key: "off",
                value: function(e, t) {
                    this[e] && this[e].del(t);
                }
            },
            {
                key: "destroy",
                value: function() {
                    return this.singleTapTimeout && clearTimeout(this.singleTapTimeout), this.tapTimeout && clearTimeout(this.tapTimeout), this.longTapTimeout && clearTimeout(this.longTapTimeout), this.swipeTimeout && clearTimeout(this.swipeTimeout), this.element.removeEventListener("touchstart", this.start), this.element.removeEventListener("touchmove", this.move), this.element.removeEventListener("touchend", this.end), this.element.removeEventListener("touchcancel", this.cancel), this.rotate.del(), this.touchStart.del(), this.multipointStart.del(), this.multipointEnd.del(), this.pinch.del(), this.swipe.del(), this.tap.del(), this.doubleTap.del(), this.longTap.del(), this.singleTap.del(), this.pressMove.del(), this.twoFingerPressMove.del(), this.touchMove.del(), this.touchEnd.del(), this.touchCancel.del(), this.preV = this.pinchStartLen = this.zoom = this.isDoubleTap = this.delta = this.last = this.now = this.tapTimeout = this.singleTapTimeout = this.longTapTimeout = this.swipeTimeout = this.x1 = this.x2 = this.y1 = this.y2 = this.preTapPosition = this.rotate = this.touchStart = this.multipointStart = this.multipointEnd = this.pinch = this.swipe = this.tap = this.doubleTap = this.longTap = this.singleTap = this.pressMove = this.touchMove = this.touchEnd = this.touchCancel = this.twoFingerPressMove = null, window.removeEventListener("scroll", this._cancelAllHandler), null;
                }
            }
        ]), e10;
    }();
    function W(e11) {
        var t8 = function() {
            var e, t = document.createElement("fakeelement"), i = {
                transition: "transitionend",
                OTransition: "oTransitionEnd",
                MozTransition: "transitionend",
                WebkitTransition: "webkitTransitionEnd"
            };
            for(e in i)if (void 0 !== t.style[e]) return i[e];
        }(), i5 = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, n = c1(e11, "gslide-media") ? e11 : e11.querySelector(".gslide-media"), s = u1(n, ".ginner-container"), l = e11.querySelector(".gslide-description");
        i5 > 769 && (n = s), h1(n, "greset"), v1(n, "translate3d(0, 0, 0)"), a1(t8, {
            onElement: n,
            once: !0,
            withCallback: function(e, t) {
                d1(n, "greset");
            }
        }), n.style.opacity = "", l && (l.style.opacity = "");
    }
    function B(e12) {
        if (e12.events.hasOwnProperty("touch")) return !1;
        var t9, i6, n4, s2 = y1(), l = s2.width, o = s2.height, r = !1, a2 = null, g = null, f = null, p = !1, m2 = 1, x = 1, b = !1, S = !1, w = null, T = null, C = null, k = null, E = 0, A = 0, L = !1, I = !1, O = {
        }, P = {
        }, z = 0, M = 0, X = document.getElementById("glightbox-slider"), Y = document.querySelector(".goverlay"), q = new _(X, {
            touchStart: function(t) {
                if (r = !0, (c1(t.targetTouches[0].target, "ginner-container") || u1(t.targetTouches[0].target, ".gslide-desc") || "a" == t.targetTouches[0].target.nodeName.toLowerCase()) && (r = !1), u1(t.targetTouches[0].target, ".gslide-inline") && !c1(t.targetTouches[0].target.parentNode, "gslide-inline") && (r = !1), r) {
                    if (P = t.targetTouches[0], O.pageX = t.targetTouches[0].pageX, O.pageY = t.targetTouches[0].pageY, z = t.targetTouches[0].clientX, M = t.targetTouches[0].clientY, a2 = e12.activeSlide, g = a2.querySelector(".gslide-media"), n4 = a2.querySelector(".gslide-inline"), f = null, c1(g, "gslide-image") && (f = g.querySelector("img")), (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) > 769 && (g = a2.querySelector(".ginner-container")), d1(Y, "greset"), t.pageX > 20 && t.pageX < window.innerWidth - 20) return;
                    t.preventDefault();
                }
            },
            touchMove: function(s) {
                if (r && (P = s.targetTouches[0], !b && !S)) {
                    if (n4 && n4.offsetHeight > o) {
                        var a = O.pageX - P.pageX;
                        if (Math.abs(a) <= 13) return !1;
                    }
                    p = !0;
                    var h, d = s.targetTouches[0].clientX, c = s.targetTouches[0].clientY, u = z - d, m = M - c;
                    if (Math.abs(u) > Math.abs(m) ? (L = !1, I = !0) : (I = !1, L = !0), t9 = P.pageX - O.pageX, E = 100 * t9 / l, i6 = P.pageY - O.pageY, A = 100 * i6 / o, L && f && (h = 1 - Math.abs(i6) / o, Y.style.opacity = h, e12.settings.touchFollowAxis && (E = 0)), I && (h = 1 - Math.abs(t9) / l, g.style.opacity = h, e12.settings.touchFollowAxis && (A = 0)), !f) return v1(g, "translate3d(".concat(E, "%, 0, 0)"));
                    v1(g, "translate3d(".concat(E, "%, ").concat(A, "%, 0)"));
                }
            },
            touchEnd: function() {
                if (r) {
                    if (p = !1, S || b) return C = w, void (k = T);
                    var t = Math.abs(parseInt(A)), i = Math.abs(parseInt(E));
                    if (!(t > 29 && f)) return t < 29 && i < 25 ? (h1(Y, "greset"), Y.style.opacity = 1, W(g)) : void 0;
                    e12.close();
                }
            },
            multipointEnd: function() {
                setTimeout(function() {
                    b = !1;
                }, 50);
            },
            multipointStart: function() {
                b = !0, m2 = x || 1;
            },
            pinch: function(e) {
                if (!f || p) return !1;
                b = !0, f.scaleX = f.scaleY = m2 * e.zoom;
                var t = m2 * e.zoom;
                if (S = !0, t <= 1) return S = !1, t = 1, k = null, C = null, w = null, T = null, void f.setAttribute("style", "");
                t > 4.5 && (t = 4.5), f.style.transform = "scale3d(".concat(t, ", ").concat(t, ", 1)"), x = t;
            },
            pressMove: function(e) {
                if (S && !b) {
                    var t = P.pageX - O.pageX, i = P.pageY - O.pageY;
                    C && (t += C), k && (i += k), w = t, T = i;
                    var n = "translate3d(".concat(t, "px, ").concat(i, "px, 0)");
                    x && (n += " scale3d(".concat(x, ", ").concat(x, ", 1)")), v1(f, n);
                }
            },
            swipe: function(t) {
                if (!S) {
                    if (b) b = !1;
                    else {
                        if ("Left" == t.direction) {
                            if (e12.index == e12.elements.length - 1) return W(g);
                            e12.nextSlide();
                        }
                        if ("Right" == t.direction) {
                            if (0 == e12.index) return W(g);
                            e12.prevSlide();
                        }
                    }
                }
            }
        });
        e12.events.touch = q;
    }
    var H = function() {
        function e13(i, n) {
            var s = this, l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            if (t1(this, e13), this.img = i, this.slide = n, this.onclose = l, this.img.setZoomEvents) return !1;
            this.active = !1, this.zoomedIn = !1, this.dragging = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.img.addEventListener("mousedown", function(e) {
                return s.dragStart(e);
            }, !1), this.img.addEventListener("mouseup", function(e) {
                return s.dragEnd(e);
            }, !1), this.img.addEventListener("mousemove", function(e) {
                return s.drag(e);
            }, !1), this.img.addEventListener("click", function(e) {
                return s.slide.classList.contains("dragging-nav") ? (s.zoomOut(), !1) : s.zoomedIn ? void (s.zoomedIn && !s.dragging && s.zoomOut()) : s.zoomIn();
            }, !1), this.img.setZoomEvents = !0;
        }
        return n1(e13, [
            {
                key: "zoomIn",
                value: function() {
                    var e = this.widowWidth();
                    if (!(this.zoomedIn || e <= 768)) {
                        var t = this.img;
                        if (t.setAttribute("data-style", t.getAttribute("style")), t.style.maxWidth = t.naturalWidth + "px", t.style.maxHeight = t.naturalHeight + "px", t.naturalWidth > e) {
                            var i = e / 2 - t.naturalWidth / 2;
                            this.setTranslate(this.img.parentNode, i, 0);
                        }
                        this.slide.classList.add("zoomed"), this.zoomedIn = !0;
                    }
                }
            },
            {
                key: "zoomOut",
                value: function() {
                    this.img.parentNode.setAttribute("style", ""), this.img.setAttribute("style", this.img.getAttribute("data-style")), this.slide.classList.remove("zoomed"), this.zoomedIn = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.onclose && "function" == typeof this.onclose && this.onclose();
                }
            },
            {
                key: "dragStart",
                value: function(e) {
                    e.preventDefault(), this.zoomedIn ? ("touchstart" === e.type ? (this.initialX = e.touches[0].clientX - this.xOffset, this.initialY = e.touches[0].clientY - this.yOffset) : (this.initialX = e.clientX - this.xOffset, this.initialY = e.clientY - this.yOffset), e.target === this.img && (this.active = !0, this.img.classList.add("dragging"))) : this.active = !1;
                }
            },
            {
                key: "dragEnd",
                value: function(e) {
                    var t = this;
                    e.preventDefault(), this.initialX = this.currentX, this.initialY = this.currentY, this.active = !1, setTimeout(function() {
                        t.dragging = !1, t.img.isDragging = !1, t.img.classList.remove("dragging");
                    }, 100);
                }
            },
            {
                key: "drag",
                value: function(e) {
                    this.active && (e.preventDefault(), "touchmove" === e.type ? (this.currentX = e.touches[0].clientX - this.initialX, this.currentY = e.touches[0].clientY - this.initialY) : (this.currentX = e.clientX - this.initialX, this.currentY = e.clientY - this.initialY), this.xOffset = this.currentX, this.yOffset = this.currentY, this.img.isDragging = !0, this.dragging = !0, this.setTranslate(this.img, this.currentX, this.currentY));
                }
            },
            {
                key: "onMove",
                value: function(e) {
                    if (this.zoomedIn) {
                        var t = e.clientX - this.img.naturalWidth / 2, i = e.clientY - this.img.naturalHeight / 2;
                        this.setTranslate(this.img, t, i);
                    }
                }
            },
            {
                key: "setTranslate",
                value: function(e, t, i) {
                    e.style.transform = "translate3d(" + t + "px, " + i + "px, 0)";
                }
            },
            {
                key: "widowWidth",
                value: function() {
                    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                }
            }
        ]), e13;
    }(), V = function() {
        function e14() {
            var i = this, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            };
            t1(this, e14);
            var s = n.dragEl, l = n.toleranceX, o = void 0 === l ? 40 : l, r = n.toleranceY, a = void 0 === r ? 65 : r, h = n.slide, d = void 0 === h ? null : h, c = n.instance, u = void 0 === c ? null : c;
            this.el = s, this.active = !1, this.dragging = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.direction = null, this.lastDirection = null, this.toleranceX = o, this.toleranceY = a, this.toleranceReached = !1, this.dragContainer = this.el, this.slide = d, this.instance = u, this.el.addEventListener("mousedown", function(e) {
                return i.dragStart(e);
            }, !1), this.el.addEventListener("mouseup", function(e) {
                return i.dragEnd(e);
            }, !1), this.el.addEventListener("mousemove", function(e) {
                return i.drag(e);
            }, !1);
        }
        return n1(e14, [
            {
                key: "dragStart",
                value: function(e) {
                    if (this.slide.classList.contains("zoomed")) this.active = !1;
                    else {
                        "touchstart" === e.type ? (this.initialX = e.touches[0].clientX - this.xOffset, this.initialY = e.touches[0].clientY - this.yOffset) : (this.initialX = e.clientX - this.xOffset, this.initialY = e.clientY - this.yOffset);
                        var t = e.target.nodeName.toLowerCase();
                        e.target.classList.contains("nodrag") || u1(e.target, ".nodrag") || -1 !== [
                            "input",
                            "select",
                            "textarea",
                            "button",
                            "a"
                        ].indexOf(t) ? this.active = !1 : (e.preventDefault(), (e.target === this.el || "img" !== t && u1(e.target, ".gslide-inline")) && (this.active = !0, this.el.classList.add("dragging"), this.dragContainer = u1(e.target, ".ginner-container")));
                    }
                }
            },
            {
                key: "dragEnd",
                value: function(e) {
                    var t = this;
                    e && e.preventDefault(), this.initialX = 0, this.initialY = 0, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.active = !1, this.doSlideChange && (this.instance.preventOutsideClick = !0, "right" == this.doSlideChange && this.instance.prevSlide(), "left" == this.doSlideChange && this.instance.nextSlide()), this.doSlideClose && this.instance.close(), this.toleranceReached || this.setTranslate(this.dragContainer, 0, 0, !0), setTimeout(function() {
                        t.instance.preventOutsideClick = !1, t.toleranceReached = !1, t.lastDirection = null, t.dragging = !1, t.el.isDragging = !1, t.el.classList.remove("dragging"), t.slide.classList.remove("dragging-nav"), t.dragContainer.style.transform = "", t.dragContainer.style.transition = "";
                    }, 100);
                }
            },
            {
                key: "drag",
                value: function(e) {
                    if (this.active) {
                        e.preventDefault(), this.slide.classList.add("dragging-nav"), "touchmove" === e.type ? (this.currentX = e.touches[0].clientX - this.initialX, this.currentY = e.touches[0].clientY - this.initialY) : (this.currentX = e.clientX - this.initialX, this.currentY = e.clientY - this.initialY), this.xOffset = this.currentX, this.yOffset = this.currentY, this.el.isDragging = !0, this.dragging = !0, this.doSlideChange = !1, this.doSlideClose = !1;
                        var t = Math.abs(this.currentX), i = Math.abs(this.currentY);
                        if (t > 0 && t >= Math.abs(this.currentY) && (!this.lastDirection || "x" == this.lastDirection)) {
                            this.yOffset = 0, this.lastDirection = "x", this.setTranslate(this.dragContainer, this.currentX, 0);
                            var n = this.shouldChange();
                            if (!this.instance.settings.dragAutoSnap && n && (this.doSlideChange = n), this.instance.settings.dragAutoSnap && n) return this.instance.preventOutsideClick = !0, this.toleranceReached = !0, this.active = !1, this.instance.preventOutsideClick = !0, this.dragEnd(null), "right" == n && this.instance.prevSlide(), void ("left" == n && this.instance.nextSlide());
                        }
                        if (this.toleranceY > 0 && i > 0 && i >= t && (!this.lastDirection || "y" == this.lastDirection)) {
                            this.xOffset = 0, this.lastDirection = "y", this.setTranslate(this.dragContainer, 0, this.currentY);
                            var s = this.shouldClose();
                            return !this.instance.settings.dragAutoSnap && s && (this.doSlideClose = !0), void (this.instance.settings.dragAutoSnap && s && this.instance.close());
                        }
                    }
                }
            },
            {
                key: "shouldChange",
                value: function() {
                    var e = !1;
                    if (Math.abs(this.currentX) >= this.toleranceX) {
                        var t = this.currentX > 0 ? "right" : "left";
                        ("left" == t && this.slide !== this.slide.parentNode.lastChild || "right" == t && this.slide !== this.slide.parentNode.firstChild) && (e = t);
                    }
                    return e;
                }
            },
            {
                key: "shouldClose",
                value: function() {
                    var e = !1;
                    return Math.abs(this.currentY) >= this.toleranceY && (e = !0), e;
                }
            },
            {
                key: "setTranslate",
                value: function(e, t, i) {
                    var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    e.style.transition = n ? "all .2s ease" : "", e.style.transform = "translate3d(".concat(t, "px, ").concat(i, "px, 0)");
                }
            }
        ]), e14;
    }();
    function j(e, t, i, n) {
        var s = e.querySelector(".gslide-media"), l = new Image, o = "gSlideTitle_" + i, r = "gSlideDesc_" + i;
        l.addEventListener("load", function() {
            T1(n) && n();
        }, !1), l.src = t.href, "" != t.sizes && "" != t.srcset && (l.sizes = t.sizes, l.srcset = t.srcset), l.alt = "", I1(t.alt) || "" === t.alt || (l.alt = t.alt), "" !== t.title && l.setAttribute("aria-labelledby", o), "" !== t.description && l.setAttribute("aria-describedby", r), t.hasOwnProperty("_hasCustomWidth") && t._hasCustomWidth && (l.style.width = t.width), t.hasOwnProperty("_hasCustomHeight") && t._hasCustomHeight && (l.style.height = t.height), s.insertBefore(l, s.firstChild);
    }
    function F(e15, t10, i, n) {
        var s = this, l2 = e15.querySelector(".ginner-container"), o = "gvideo" + i, r2 = e15.querySelector(".gslide-media"), a = this.getAllPlayers();
        h1(l2, "gvideo-container"), r2.insertBefore(m1('<div class="gvideo-wrapper"></div>'), r2.firstChild);
        var d = e15.querySelector(".gvideo-wrapper");
        S1(this.settings.plyr.css, "Plyr");
        var c = t10.href, u2 = location.protocol.replace(":", ""), g = "", v = "", f = !1;
        "file" == u2 && (u2 = "http"), r2.style.maxWidth = t10.width, S1(this.settings.plyr.js, "Plyr", function() {
            if (c.match(/vimeo\.com\/([0-9]*)/)) {
                var l = /vimeo.*\/(\d+)/i.exec(c);
                g = "vimeo", v = l[1];
            }
            if (c.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || c.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || c.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)) {
                var r = function(e) {
                    var t = "";
                    t = void 0 !== (e = e.replace(/(>|<)/gi, "").split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/))[2] ? (t = e[2].split(/[^0-9a-z_\-]/i))[0] : e;
                    return t;
                }(c);
                g = "youtube", v = r;
            }
            if (null !== c.match(/\.(mp4|ogg|webm|mov)$/)) {
                g = "local";
                var u = '<video id="' + o + '" ';
                u += 'style="background:#000; max-width: '.concat(t10.width, ';" '), u += 'preload="metadata" ', u += 'x-webkit-airplay="allow" ', u += "playsinline ", u += "controls ", u += 'class="gvideo-local">';
                var p = c.toLowerCase().split(".").pop(), y = {
                    mp4: "",
                    ogg: "",
                    webm: ""
                };
                for(var x in y[p = "mov" == p ? "mp4" : p] = c, y)if (y.hasOwnProperty(x)) {
                    var S = y[x];
                    t10.hasOwnProperty(x) && (S = t10[x]), "" !== S && (u += '<source src="'.concat(S, '" type="video/').concat(x, '">'));
                }
                f = m1(u += "</video>");
            }
            var w = f || m1('<div id="'.concat(o, '" data-plyr-provider="').concat(g, '" data-plyr-embed-id="').concat(v, '"></div>'));
            h1(d, "".concat(g, "-video gvideo")), d.appendChild(w), d.setAttribute("data-id", o), d.setAttribute("data-index", i);
            var C = O1(s.settings.plyr, "config") ? s.settings.plyr.config : {
            }, k = new Plyr("#" + o, C);
            k.on("ready", function(e) {
                var t = e.detail.plyr;
                a[o] = t, T1(n) && n();
            }), b1(function() {
                return e15.querySelector("iframe") && "true" == e15.querySelector("iframe").dataset.ready;
            }, function() {
                s.resize(e15);
            }), k.on("enterfullscreen", R), k.on("exitfullscreen", R);
        });
    }
    function R(e) {
        var t = u1(e.target, ".gslide-media");
        "enterfullscreen" == e.type && h1(t, "fullscreen"), "exitfullscreen" == e.type && d1(t, "fullscreen");
    }
    function G(e16, t, i, n) {
        var s, l = this, o = e16.querySelector(".gslide-media"), r = !(!O1(t, "href") || !t.href) && t.href.split("#").pop().trim(), d = !(!O1(t, "content") || !t.content) && t.content;
        if (d && (C1(d) && (s = m1('<div class="ginlined-content">'.concat(d, "</div>"))), k1(d))) {
            "none" == d.style.display && (d.style.display = "block");
            var c = document.createElement("div");
            c.className = "ginlined-content", c.appendChild(d), s = c;
        }
        if (r) {
            var u = document.getElementById(r);
            if (!u) return !1;
            var g = u.cloneNode(!0);
            g.style.height = t.height, g.style.maxWidth = t.width, h1(g, "ginlined-content"), s = g;
        }
        if (!s) return console.error("Unable to append inline slide content", t), !1;
        o.style.height = t.height, o.style.width = t.width, o.appendChild(s), this.events["inlineclose" + r] = a1("click", {
            onElement: o.querySelectorAll(".gtrigger-close"),
            withCallback: function(e) {
                e.preventDefault(), l.close();
            }
        }), T1(n) && n();
    }
    function Z(e17, t11, i7, n5) {
        var s3 = e17.querySelector(".gslide-media"), l3 = function(e) {
            var t = e.url, i = e.allow, n = e.callback, s = e.appendTo, l = document.createElement("iframe");
            return l.className = "vimeo-video gvideo", l.src = t, l.style.width = "100%", l.style.height = "100%", i && l.setAttribute("allow", i), l.onload = function() {
                h1(l, "node-ready"), T1(n) && n();
            }, s && s.appendChild(l), l;
        }({
            url: t11.href,
            callback: n5
        });
        s3.parentNode.style.maxWidth = t11.width, s3.parentNode.style.height = t11.height, s3.appendChild(l3);
    }
    var $ = function() {
        function e18() {
            var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            };
            t1(this, e18), this.defaults = {
                href: "",
                sizes: "",
                srcset: "",
                title: "",
                type: "",
                description: "",
                alt: "",
                descPosition: "bottom",
                effect: "",
                width: "",
                height: "",
                content: !1,
                zoomable: !0,
                draggable: !0
            }, L1(i) && (this.defaults = l1(this.defaults, i));
        }
        return n1(e18, [
            {
                key: "sourceType",
                value: function(e) {
                    var t = e;
                    if (null !== (e = e.toLowerCase()).match(/\.(jpeg|jpg|jpe|gif|png|apn|webp|avif|svg)/)) return "image";
                    if (e.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || e.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)) return "video";
                    if (e.match(/vimeo\.com\/([0-9]*)/)) return "video";
                    if (null !== e.match(/\.(mp4|ogg|webm|mov)/)) return "video";
                    if (null !== e.match(/\.(mp3|wav|wma|aac|ogg)/)) return "audio";
                    if (e.indexOf("#") > -1 && "" !== t.split("#").pop().trim()) return "inline";
                    return e.indexOf("goajax=true") > -1 ? "ajax" : "external";
                }
            },
            {
                key: "parseConfig",
                value: function(e, t12) {
                    var i = this, n = l1({
                        descPosition: t12.descPosition
                    }, this.defaults);
                    if (L1(e) && !k1(e)) {
                        O1(e, "type") || (O1(e, "content") && e.content ? e.type = "inline" : O1(e, "href") && (e.type = this.sourceType(e.href)));
                        var s = l1(n, e);
                        return this.setSize(s, t12), s;
                    }
                    var r3 = "", a = e.getAttribute("data-glightbox"), h = e.nodeName.toLowerCase();
                    if ("a" === h && (r3 = e.href), "img" === h && (r3 = e.src, n.alt = e.alt), n.href = r3, o1(n, function(s, l) {
                        O1(t12, l) && "width" !== l && (n[l] = t12[l]);
                        var o = e.dataset[l];
                        I1(o) || (n[l] = i.sanitizeValue(o));
                    }), n.content && (n.type = "inline"), !n.type && r3 && (n.type = this.sourceType(r3)), I1(a)) {
                        if (!n.title && "a" == h) {
                            var d = e.title;
                            I1(d) || "" === d || (n.title = d);
                        }
                        if (!n.title && "img" == h) {
                            var c = e.alt;
                            I1(c) || "" === c || (n.title = c);
                        }
                    } else {
                        var u = [];
                        o1(n, function(e, t) {
                            u.push(";\\s?" + t);
                        }), u = u.join("\\s?:|"), "" !== a.trim() && o1(n, function(e, t) {
                            var s = a, l = new RegExp("s?" + t + "s?:s?(.*?)(" + u + "s?:|$)"), o = s.match(l);
                            if (o && o.length && o[1]) {
                                var r = o[1].trim().replace(/;\s*$/, "");
                                n[t] = i.sanitizeValue(r);
                            }
                        });
                    }
                    if (n.description && "." === n.description.substring(0, 1)) {
                        var g;
                        try {
                            g = document.querySelector(n.description).innerHTML;
                        } catch (e) {
                            if (!(e instanceof DOMException)) throw e;
                        }
                        g && (n.description = g);
                    }
                    if (!n.description) {
                        var v = e.querySelector(".glightbox-desc");
                        v && (n.description = v.innerHTML);
                    }
                    return this.setSize(n, t12, e), this.slideConfig = n, n;
                }
            },
            {
                key: "setSize",
                value: function(e, t) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, n = "video" == e.type ? this.checkSize(t.videosWidth) : this.checkSize(t.width), s = this.checkSize(t.height);
                    return e.width = O1(e, "width") && "" !== e.width ? this.checkSize(e.width) : n, e.height = O1(e, "height") && "" !== e.height ? this.checkSize(e.height) : s, i && "image" == e.type && (e._hasCustomWidth = !!i.dataset.width, e._hasCustomHeight = !!i.dataset.height), e;
                }
            },
            {
                key: "checkSize",
                value: function(e) {
                    return z1(e) ? "".concat(e, "px") : e;
                }
            },
            {
                key: "sanitizeValue",
                value: function(e) {
                    return "true" !== e && "false" !== e ? e : "true" === e;
                }
            }
        ]), e18;
    }(), U = function() {
        function e19(i, n, s) {
            t1(this, e19), this.element = i, this.instance = n, this.index = s;
        }
        return n1(e19, [
            {
                key: "setContent",
                value: function() {
                    var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, i8 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (c1(t, "loaded")) return !1;
                    var n = this.instance.settings, s = this.slideConfig, l = w1();
                    T1(n.beforeSlideLoad) && n.beforeSlideLoad({
                        index: this.index,
                        slide: t,
                        player: !1
                    });
                    var o = s.type, r = s.descPosition, a = t.querySelector(".gslide-media"), d = t.querySelector(".gslide-title"), u = t.querySelector(".gslide-desc"), g = t.querySelector(".gdesc-inner"), v = i8, f = "gSlideTitle_" + this.index, p = "gSlideDesc_" + this.index;
                    if (T1(n.afterSlideLoad) && (v = function() {
                        T1(i8) && i8(), n.afterSlideLoad({
                            index: e.index,
                            slide: t,
                            player: e.instance.getSlidePlayerInstance(e.index)
                        });
                    }), "" == s.title && "" == s.description ? g && g.parentNode.parentNode.removeChild(g.parentNode) : (d && "" !== s.title ? (d.id = f, d.innerHTML = s.title) : d.parentNode.removeChild(d), u && "" !== s.description ? (u.id = p, l && n.moreLength > 0 ? (s.smallDescription = this.slideShortDesc(s.description, n.moreLength, n.moreText), u.innerHTML = s.smallDescription, this.descriptionEvents(u, s)) : u.innerHTML = s.description) : u.parentNode.removeChild(u), h1(a.parentNode, "desc-".concat(r)), h1(g.parentNode, "description-".concat(r))), h1(a, "gslide-".concat(o)), h1(t, "loaded"), "video" !== o) {
                        if ("external" !== o) return "inline" === o ? (G.apply(this.instance, [
                            t,
                            s,
                            this.index,
                            v
                        ]), void (s.draggable && new V({
                            dragEl: t.querySelector(".gslide-inline"),
                            toleranceX: n.dragToleranceX,
                            toleranceY: n.dragToleranceY,
                            slide: t,
                            instance: this.instance
                        }))) : void ("image" !== o ? T1(v) && v() : j(t, s, this.index, function() {
                            var i = t.querySelector("img");
                            s.draggable && new V({
                                dragEl: i,
                                toleranceX: n.dragToleranceX,
                                toleranceY: n.dragToleranceY,
                                slide: t,
                                instance: e.instance
                            }), s.zoomable && i.naturalWidth > i.offsetWidth && (h1(i, "zoomable"), new H(i, t, function() {
                                e.instance.resize();
                            })), T1(v) && v();
                        }));
                        Z.apply(this, [
                            t,
                            s,
                            this.index,
                            v
                        ]);
                    } else F.apply(this.instance, [
                        t,
                        s,
                        this.index,
                        v
                    ]);
                }
            },
            {
                key: "slideShortDesc",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50, i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], n = document.createElement("div");
                    n.innerHTML = e;
                    var s = n.innerText, l = i;
                    if ((e = s.trim()).length <= t) return e;
                    var o = e.substr(0, t - 1);
                    return l ? (n = null, o + '... <a href="#" class="desc-more">' + i + "</a>") : o;
                }
            },
            {
                key: "descriptionEvents",
                value: function(e20, t) {
                    var i = this, n6 = e20.querySelector(".desc-more");
                    if (!n6) return !1;
                    a1("click", {
                        onElement: n6,
                        withCallback: function(e21, n) {
                            e21.preventDefault();
                            var s = document.body, l = u1(n, ".gslide-desc");
                            if (!l) return !1;
                            l.innerHTML = t.description, h1(s, "gdesc-open");
                            var o = a1("click", {
                                onElement: [
                                    s,
                                    u1(l, ".gslide-description")
                                ],
                                withCallback: function(e, n) {
                                    "a" !== e.target.nodeName.toLowerCase() && (d1(s, "gdesc-open"), h1(s, "gdesc-closed"), l.innerHTML = t.smallDescription, i.descriptionEvents(l, t), setTimeout(function() {
                                        d1(s, "gdesc-closed");
                                    }, 400), o.destroy());
                                }
                            });
                        }
                    });
                }
            },
            {
                key: "create",
                value: function() {
                    return m1(this.instance.settings.slideHTML);
                }
            },
            {
                key: "getConfig",
                value: function() {
                    k1(this.element) || this.element.hasOwnProperty("draggable") || (this.element.draggable = this.instance.settings.draggable);
                    var e = new $(this.instance.settings.slideExtraAttributes);
                    return this.slideConfig = e.parseConfig(this.element, this.instance.settings), this.slideConfig;
                }
            }
        ]), e19;
    }(), J = w1(), K = null !== w1() || void 0 !== document.createTouch || "ontouchstart" in window || "onmsgesturechange" in window || navigator.msMaxTouchPoints, Q = document.getElementsByTagName("html")[0], ee = {
        selector: ".glightbox",
        elements: null,
        skin: "clean",
        theme: "clean",
        closeButton: !0,
        startAt: null,
        autoplayVideos: !0,
        autofocusVideos: !0,
        descPosition: "bottom",
        width: "900px",
        height: "506px",
        videosWidth: "960px",
        beforeSlideChange: null,
        afterSlideChange: null,
        beforeSlideLoad: null,
        afterSlideLoad: null,
        slideInserted: null,
        slideRemoved: null,
        slideExtraAttributes: null,
        onOpen: null,
        onClose: null,
        loop: !1,
        zoomable: !0,
        draggable: !0,
        dragAutoSnap: !1,
        dragToleranceX: 40,
        dragToleranceY: 65,
        preload: !0,
        oneSlidePerOpen: !1,
        touchNavigation: !0,
        touchFollowAxis: !0,
        keyboardNavigation: !0,
        closeOnOutsideClick: !0,
        plugins: !1,
        plyr: {
            css: "https://cdn.plyr.io/3.6.8/plyr.css",
            js: "https://cdn.plyr.io/3.6.8/plyr.js",
            config: {
                ratio: "16:9",
                fullscreen: {
                    enabled: !0,
                    iosNative: !0
                },
                youtube: {
                    noCookie: !0,
                    rel: 0,
                    showinfo: 0,
                    iv_load_policy: 3
                },
                vimeo: {
                    byline: !1,
                    portrait: !1,
                    title: !1,
                    transparent: !1
                }
            }
        },
        openEffect: "zoom",
        closeEffect: "zoom",
        slideEffect: "slide",
        moreText: "See more",
        moreLength: 60,
        cssEfects: {
            fade: {
                in: "fadeIn",
                out: "fadeOut"
            },
            zoom: {
                in: "zoomIn",
                out: "zoomOut"
            },
            slide: {
                in: "slideInRight",
                out: "slideOutLeft"
            },
            slideBack: {
                in: "slideInLeft",
                out: "slideOutRight"
            },
            none: {
                in: "none",
                out: "none"
            }
        },
        svg: {
            close: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>',
            next: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>',
            prev: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>'
        },
        slideHTML: '<div class="gslide">\n    <div class="gslide-inner-content">\n        <div class="ginner-container">\n            <div class="gslide-media">\n            </div>\n            <div class="gslide-description">\n                <div class="gdesc-inner">\n                    <h4 class="gslide-title"></h4>\n                    <div class="gslide-desc"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>',
        lightboxHTML: '<div id="glightbox-body" class="glightbox-container" tabindex="-1" role="dialog" aria-hidden="false">\n    <div class="gloader visible"></div>\n    <div class="goverlay"></div>\n    <div class="gcontainer">\n    <div id="glightbox-slider" class="gslider"></div>\n    <button class="gclose gbtn" aria-label="Close" data-taborder="3">{closeSVG}</button>\n    <button class="gprev gbtn" aria-label="Previous" data-taborder="2">{prevSVG}</button>\n    <button class="gnext gbtn" aria-label="Next" data-taborder="1">{nextSVG}</button>\n</div>\n</div>'
    }, te = function() {
        function e22() {
            var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            };
            t1(this, e22), this.customOptions = i, this.settings = l1(ee, i), this.effectsClasses = this.getAnimationClasses(), this.videoPlayers = {
            }, this.apiEvents = [], this.fullElementsList = !1;
        }
        return n1(e22, [
            {
                key: "init",
                value: function() {
                    var e = this, t13 = this.getSelector();
                    t13 && (this.baseEvents = a1("click", {
                        onElement: t13,
                        withCallback: function(t, i) {
                            t.preventDefault(), e.open(i);
                        }
                    })), this.elements = this.getElements();
                }
            },
            {
                key: "open",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (0 == this.elements.length) return !1;
                    this.activeSlide = null, this.prevActiveSlideIndex = null, this.prevActiveSlide = null;
                    var i = z1(t) ? t : this.settings.startAt;
                    if (k1(e)) {
                        var n = e.getAttribute("data-gallery");
                        n && (this.fullElementsList = this.elements, this.elements = this.getGalleryElements(this.elements, n)), I1(i) && (i = this.getElementIndex(e)) < 0 && (i = 0);
                    }
                    z1(i) || (i = 0), this.build(), g1(this.overlay, "none" == this.settings.openEffect ? "none" : this.settings.cssEfects.fade.in);
                    var s = document.body, l = window.innerWidth - document.documentElement.clientWidth;
                    if (l > 0) {
                        var o = document.createElement("style");
                        o.type = "text/css", o.className = "gcss-styles", o.innerText = ".gscrollbar-fixer {margin-right: ".concat(l, "px}"), document.head.appendChild(o), h1(s, "gscrollbar-fixer");
                    }
                    h1(s, "glightbox-open"), h1(Q, "glightbox-open"), J && (h1(document.body, "glightbox-mobile"), this.settings.slideEffect = "slide"), this.showSlide(i, !0), 1 == this.elements.length ? (h1(this.prevButton, "glightbox-button-hidden"), h1(this.nextButton, "glightbox-button-hidden")) : (d1(this.prevButton, "glightbox-button-hidden"), d1(this.nextButton, "glightbox-button-hidden")), this.lightboxOpen = !0, this.trigger("open"), T1(this.settings.onOpen) && this.settings.onOpen(), K && this.settings.touchNavigation && B(this), this.settings.keyboardNavigation && X1(this);
                }
            },
            {
                key: "openAt",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    this.open(null, e);
                }
            },
            {
                key: "showSlide",
                value: function() {
                    var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    f1(this.loader), this.index = parseInt(t);
                    var n = this.slidesContainer.querySelector(".current");
                    n && d1(n, "current"), this.slideAnimateOut();
                    var s = this.slidesContainer.querySelectorAll(".gslide")[t];
                    if (c1(s, "loaded")) this.slideAnimateIn(s, i), p1(this.loader);
                    else {
                        f1(this.loader);
                        var l = this.elements[t], o = {
                            index: this.index,
                            slide: s,
                            slideNode: s,
                            slideConfig: l.slideConfig,
                            slideIndex: this.index,
                            trigger: l.node,
                            player: null
                        };
                        this.trigger("slide_before_load", o), l.instance.setContent(s, function() {
                            p1(e.loader), e.resize(), e.slideAnimateIn(s, i), e.trigger("slide_after_load", o);
                        });
                    }
                    this.slideDescription = s.querySelector(".gslide-description"), this.slideDescriptionContained = this.slideDescription && c1(this.slideDescription.parentNode, "gslide-media"), this.settings.preload && (this.preloadSlide(t + 1), this.preloadSlide(t - 1)), this.updateNavigationClasses(), this.activeSlide = s;
                }
            },
            {
                key: "preloadSlide",
                value: function(e) {
                    var t = this;
                    if (e < 0 || e > this.elements.length - 1) return !1;
                    if (I1(this.elements[e])) return !1;
                    var i = this.slidesContainer.querySelectorAll(".gslide")[e];
                    if (c1(i, "loaded")) return !1;
                    var n = this.elements[e], s = n.type, l = {
                        index: e,
                        slide: i,
                        slideNode: i,
                        slideConfig: n.slideConfig,
                        slideIndex: e,
                        trigger: n.node,
                        player: null
                    };
                    this.trigger("slide_before_load", l), "video" == s || "external" == s ? setTimeout(function() {
                        n.instance.setContent(i, function() {
                            t.trigger("slide_after_load", l);
                        });
                    }, 200) : n.instance.setContent(i, function() {
                        t.trigger("slide_after_load", l);
                    });
                }
            },
            {
                key: "prevSlide",
                value: function() {
                    this.goToSlide(this.index - 1);
                }
            },
            {
                key: "nextSlide",
                value: function() {
                    this.goToSlide(this.index + 1);
                }
            },
            {
                key: "goToSlide",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (this.prevActiveSlide = this.activeSlide, this.prevActiveSlideIndex = this.index, !this.loop() && (e < 0 || e > this.elements.length - 1)) return !1;
                    e < 0 ? e = this.elements.length - 1 : e >= this.elements.length && (e = 0), this.showSlide(e);
                }
            },
            {
                key: "insertSlide",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    }, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
                    t < 0 && (t = this.elements.length);
                    var i = new U(e, this, t), n = i.getConfig(), s = l1({
                    }, n), o = i.create(), r = this.elements.length - 1;
                    s.index = t, s.node = !1, s.instance = i, s.slideConfig = n, this.elements.splice(t, 0, s);
                    var a = null, h = null;
                    if (this.slidesContainer) {
                        if (t > r) this.slidesContainer.appendChild(o);
                        else {
                            var d = this.slidesContainer.querySelectorAll(".gslide")[t];
                            this.slidesContainer.insertBefore(o, d);
                        }
                        (this.settings.preload && 0 == this.index && 0 == t || this.index - 1 == t || this.index + 1 == t) && this.preloadSlide(t), 0 == this.index && 0 == t && (this.index = 1), this.updateNavigationClasses(), a = this.slidesContainer.querySelectorAll(".gslide")[t], h = this.getSlidePlayerInstance(t), s.slideNode = a;
                    }
                    this.trigger("slide_inserted", {
                        index: t,
                        slide: a,
                        slideNode: a,
                        slideConfig: n,
                        slideIndex: t,
                        trigger: null,
                        player: h
                    }), T1(this.settings.slideInserted) && this.settings.slideInserted({
                        index: t,
                        slide: a,
                        player: h
                    });
                }
            },
            {
                key: "removeSlide",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
                    if (e < 0 || e > this.elements.length - 1) return !1;
                    var t = this.slidesContainer && this.slidesContainer.querySelectorAll(".gslide")[e];
                    t && (this.getActiveSlideIndex() == e && (e == this.elements.length - 1 ? this.prevSlide() : this.nextSlide()), t.parentNode.removeChild(t)), this.elements.splice(e, 1), this.trigger("slide_removed", e), T1(this.settings.slideRemoved) && this.settings.slideRemoved(e);
                }
            },
            {
                key: "slideAnimateIn",
                value: function(e, t) {
                    var i = this, n = e.querySelector(".gslide-media"), s = e.querySelector(".gslide-description"), l = {
                        index: this.prevActiveSlideIndex,
                        slide: this.prevActiveSlide,
                        slideNode: this.prevActiveSlide,
                        slideIndex: this.prevActiveSlide,
                        slideConfig: I1(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig,
                        trigger: I1(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node,
                        player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
                    }, o = {
                        index: this.index,
                        slide: this.activeSlide,
                        slideNode: this.activeSlide,
                        slideConfig: this.elements[this.index].slideConfig,
                        slideIndex: this.index,
                        trigger: this.elements[this.index].node,
                        player: this.getSlidePlayerInstance(this.index)
                    };
                    if (n.offsetWidth > 0 && s && (p1(s), s.style.display = ""), d1(e, this.effectsClasses), t) g1(e, this.settings.cssEfects[this.settings.openEffect].in, function() {
                        i.settings.autoplayVideos && i.slidePlayerPlay(e), i.trigger("slide_changed", {
                            prev: l,
                            current: o
                        }), T1(i.settings.afterSlideChange) && i.settings.afterSlideChange.apply(i, [
                            l,
                            o
                        ]);
                    });
                    else {
                        var r = this.settings.slideEffect, a = "none" !== r ? this.settings.cssEfects[r].in : r;
                        this.prevActiveSlideIndex > this.index && "slide" == this.settings.slideEffect && (a = this.settings.cssEfects.slideBack.in), g1(e, a, function() {
                            i.settings.autoplayVideos && i.slidePlayerPlay(e), i.trigger("slide_changed", {
                                prev: l,
                                current: o
                            }), T1(i.settings.afterSlideChange) && i.settings.afterSlideChange.apply(i, [
                                l,
                                o
                            ]);
                        });
                    }
                    setTimeout(function() {
                        i.resize(e);
                    }, 100), h1(e, "current");
                }
            },
            {
                key: "slideAnimateOut",
                value: function() {
                    if (!this.prevActiveSlide) return !1;
                    var e = this.prevActiveSlide;
                    d1(e, this.effectsClasses), h1(e, "prev");
                    var t14 = this.settings.slideEffect, i9 = "none" !== t14 ? this.settings.cssEfects[t14].out : t14;
                    this.slidePlayerPause(e), this.trigger("slide_before_change", {
                        prev: {
                            index: this.prevActiveSlideIndex,
                            slide: this.prevActiveSlide,
                            slideNode: this.prevActiveSlide,
                            slideIndex: this.prevActiveSlideIndex,
                            slideConfig: I1(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig,
                            trigger: I1(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node,
                            player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
                        },
                        current: {
                            index: this.index,
                            slide: this.activeSlide,
                            slideNode: this.activeSlide,
                            slideIndex: this.index,
                            slideConfig: this.elements[this.index].slideConfig,
                            trigger: this.elements[this.index].node,
                            player: this.getSlidePlayerInstance(this.index)
                        }
                    }), T1(this.settings.beforeSlideChange) && this.settings.beforeSlideChange.apply(this, [
                        {
                            index: this.prevActiveSlideIndex,
                            slide: this.prevActiveSlide,
                            player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
                        },
                        {
                            index: this.index,
                            slide: this.activeSlide,
                            player: this.getSlidePlayerInstance(this.index)
                        }
                    ]), this.prevActiveSlideIndex > this.index && "slide" == this.settings.slideEffect && (i9 = this.settings.cssEfects.slideBack.out), g1(e, i9, function() {
                        var t = e.querySelector(".ginner-container"), i = e.querySelector(".gslide-media"), n = e.querySelector(".gslide-description");
                        t.style.transform = "", i.style.transform = "", d1(i, "greset"), i.style.opacity = "", n && (n.style.opacity = ""), d1(e, "prev");
                    });
                }
            },
            {
                key: "getAllPlayers",
                value: function() {
                    return this.videoPlayers;
                }
            },
            {
                key: "getSlidePlayerInstance",
                value: function(e) {
                    var t = "gvideo" + e, i = this.getAllPlayers();
                    return !(!O1(i, t) || !i[t]) && i[t];
                }
            },
            {
                key: "stopSlideVideo",
                value: function(e) {
                    if (k1(e)) {
                        var t = e.querySelector(".gvideo-wrapper");
                        t && (e = t.getAttribute("data-index"));
                    }
                    console.log("stopSlideVideo is deprecated, use slidePlayerPause");
                    var i = this.getSlidePlayerInstance(e);
                    i && i.playing && i.pause();
                }
            },
            {
                key: "slidePlayerPause",
                value: function(e) {
                    if (k1(e)) {
                        var t = e.querySelector(".gvideo-wrapper");
                        t && (e = t.getAttribute("data-index"));
                    }
                    var i = this.getSlidePlayerInstance(e);
                    i && i.playing && i.pause();
                }
            },
            {
                key: "playSlideVideo",
                value: function(e) {
                    if (k1(e)) {
                        var t = e.querySelector(".gvideo-wrapper");
                        t && (e = t.getAttribute("data-index"));
                    }
                    console.log("playSlideVideo is deprecated, use slidePlayerPlay");
                    var i = this.getSlidePlayerInstance(e);
                    i && !i.playing && i.play();
                }
            },
            {
                key: "slidePlayerPlay",
                value: function(e) {
                    if (k1(e)) {
                        var t = e.querySelector(".gvideo-wrapper");
                        t && (e = t.getAttribute("data-index"));
                    }
                    var i = this.getSlidePlayerInstance(e);
                    i && !i.playing && (i.play(), this.settings.autofocusVideos && i.elements.container.focus());
                }
            },
            {
                key: "setElements",
                value: function(e23) {
                    var t = this;
                    this.settings.elements = !1;
                    var i = [];
                    e23 && e23.length && o1(e23, function(e, n) {
                        var s = new U(e, t, n), o = s.getConfig(), r = l1({
                        }, o);
                        r.slideConfig = o, r.instance = s, r.index = n, i.push(r);
                    }), this.elements = i, this.lightboxOpen && (this.slidesContainer.innerHTML = "", this.elements.length && (o1(this.elements, function() {
                        var e = m1(t.settings.slideHTML);
                        t.slidesContainer.appendChild(e);
                    }), this.showSlide(0, !0)));
                }
            },
            {
                key: "getElementIndex",
                value: function(e) {
                    var t = !1;
                    return o1(this.elements, function(i, n) {
                        if (O1(i, "node") && i.node == e) return t = n, !0;
                    }), t;
                }
            },
            {
                key: "getElements",
                value: function() {
                    var e = this, t = [];
                    this.elements = this.elements ? this.elements : [], !I1(this.settings.elements) && E1(this.settings.elements) && this.settings.elements.length && o1(this.settings.elements, function(i, n) {
                        var s = new U(i, e, n), o = s.getConfig(), r = l1({
                        }, o);
                        r.node = !1, r.index = n, r.instance = s, r.slideConfig = o, t.push(r);
                    });
                    var i10 = !1;
                    return this.getSelector() && (i10 = document.querySelectorAll(this.getSelector())), i10 ? (o1(i10, function(i, n) {
                        var s = new U(i, e, n), o = s.getConfig(), r = l1({
                        }, o);
                        r.node = i, r.index = n, r.instance = s, r.slideConfig = o, r.gallery = i.getAttribute("data-gallery"), t.push(r);
                    }), t) : t;
                }
            },
            {
                key: "getGalleryElements",
                value: function(e24, t) {
                    return e24.filter(function(e) {
                        return e.gallery == t;
                    });
                }
            },
            {
                key: "getSelector",
                value: function() {
                    return !this.settings.elements && (this.settings.selector && "data-" == this.settings.selector.substring(0, 5) ? "*[".concat(this.settings.selector, "]") : this.settings.selector);
                }
            },
            {
                key: "getActiveSlide",
                value: function() {
                    return this.slidesContainer.querySelectorAll(".gslide")[this.index];
                }
            },
            {
                key: "getActiveSlideIndex",
                value: function() {
                    return this.index;
                }
            },
            {
                key: "getAnimationClasses",
                value: function() {
                    var e = [];
                    for(var t in this.settings.cssEfects)if (this.settings.cssEfects.hasOwnProperty(t)) {
                        var i = this.settings.cssEfects[t];
                        e.push("g".concat(i.in)), e.push("g".concat(i.out));
                    }
                    return e.join(" ");
                }
            },
            {
                key: "build",
                value: function() {
                    var e25 = this;
                    if (this.built) return !1;
                    var t15 = document.body.childNodes, i = [];
                    o1(t15, function(e) {
                        e.parentNode == document.body && "#" !== e.nodeName.charAt(0) && e.hasAttribute && !e.hasAttribute("aria-hidden") && (i.push(e), e.setAttribute("aria-hidden", "true"));
                    });
                    var n = O1(this.settings.svg, "next") ? this.settings.svg.next : "", s = O1(this.settings.svg, "prev") ? this.settings.svg.prev : "", l = O1(this.settings.svg, "close") ? this.settings.svg.close : "", r = this.settings.lightboxHTML;
                    r = m1(r = (r = (r = r.replace(/{nextSVG}/g, n)).replace(/{prevSVG}/g, s)).replace(/{closeSVG}/g, l)), document.body.appendChild(r);
                    var d = document.getElementById("glightbox-body");
                    this.modal = d;
                    var g = d.querySelector(".gclose");
                    this.prevButton = d.querySelector(".gprev"), this.nextButton = d.querySelector(".gnext"), this.overlay = d.querySelector(".goverlay"), this.loader = d.querySelector(".gloader"), this.slidesContainer = document.getElementById("glightbox-slider"), this.bodyHiddenChildElms = i, this.events = {
                    }, h1(this.modal, "glightbox-" + this.settings.skin), this.settings.closeButton && g && (this.events.close = a1("click", {
                        onElement: g,
                        withCallback: function(t, i) {
                            t.preventDefault(), e25.close();
                        }
                    })), g && !this.settings.closeButton && g.parentNode.removeChild(g), this.nextButton && (this.events.next = a1("click", {
                        onElement: this.nextButton,
                        withCallback: function(t, i) {
                            t.preventDefault(), e25.nextSlide();
                        }
                    })), this.prevButton && (this.events.prev = a1("click", {
                        onElement: this.prevButton,
                        withCallback: function(t, i) {
                            t.preventDefault(), e25.prevSlide();
                        }
                    })), this.settings.closeOnOutsideClick && (this.events.outClose = a1("click", {
                        onElement: d,
                        withCallback: function(t, i) {
                            e25.preventOutsideClick || c1(document.body, "glightbox-mobile") || u1(t.target, ".ginner-container") || u1(t.target, ".gbtn") || c1(t.target, "gnext") || c1(t.target, "gprev") || e25.close();
                        }
                    })), o1(this.elements, function(t, i) {
                        e25.slidesContainer.appendChild(t.instance.create()), t.slideNode = e25.slidesContainer.querySelectorAll(".gslide")[i];
                    }), K && h1(document.body, "glightbox-touch"), this.events.resize = a1("resize", {
                        onElement: window,
                        withCallback: function() {
                            e25.resize();
                        }
                    }), this.built = !0;
                }
            },
            {
                key: "resize",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    if ((e = e || this.activeSlide) && !c1(e, "zoomed")) {
                        var t = y1(), i = e.querySelector(".gvideo-wrapper"), n = e.querySelector(".gslide-image"), s = this.slideDescription, l = t.width, o = t.height;
                        if (l <= 768 ? h1(document.body, "glightbox-mobile") : d1(document.body, "glightbox-mobile"), i || n) {
                            var r = !1;
                            if (s && (c1(s, "description-bottom") || c1(s, "description-top")) && !c1(s, "gabsolute") && (r = !0), n) {
                                if (l <= 768) n.querySelector("img");
                                else if (r) {
                                    var a = s.offsetHeight, u = n.querySelector("img");
                                    u.setAttribute("style", "max-height: calc(100vh - ".concat(a, "px)")), s.setAttribute("style", "max-width: ".concat(u.offsetWidth, "px;"));
                                }
                            }
                            if (i) {
                                var g = O1(this.settings.plyr.config, "ratio") ? this.settings.plyr.config.ratio : "";
                                if (!g) {
                                    var v = i.clientWidth, f = i.clientHeight, p = v / f;
                                    g = "".concat(v / p, ":").concat(f / p);
                                }
                                var m = g.split(":"), x = this.settings.videosWidth, b = this.settings.videosWidth, S = (b = z1(x) || -1 !== x.indexOf("px") ? parseInt(x) : -1 !== x.indexOf("vw") ? l * parseInt(x) / 100 : -1 !== x.indexOf("vh") ? o * parseInt(x) / 100 : -1 !== x.indexOf("%") ? l * parseInt(x) / 100 : parseInt(i.clientWidth)) / (parseInt(m[0]) / parseInt(m[1]));
                                if (S = Math.floor(S), r && (o -= s.offsetHeight), b > l || S > o || o < S && l > b) {
                                    var w = i.offsetWidth, T = i.offsetHeight, C = o / T, k = {
                                        width: w * C,
                                        height: T * C
                                    };
                                    i.parentNode.setAttribute("style", "max-width: ".concat(k.width, "px")), r && s.setAttribute("style", "max-width: ".concat(k.width, "px;"));
                                } else i.parentNode.style.maxWidth = "".concat(x), r && s.setAttribute("style", "max-width: ".concat(x, ";"));
                            }
                        }
                    }
                }
            },
            {
                key: "reload",
                value: function() {
                    this.init();
                }
            },
            {
                key: "updateNavigationClasses",
                value: function() {
                    var e = this.loop();
                    d1(this.nextButton, "disabled"), d1(this.prevButton, "disabled"), 0 == this.index && this.elements.length - 1 == 0 ? (h1(this.prevButton, "disabled"), h1(this.nextButton, "disabled")) : 0 !== this.index || e ? this.index !== this.elements.length - 1 || e || h1(this.nextButton, "disabled") : h1(this.prevButton, "disabled");
                }
            },
            {
                key: "loop",
                value: function() {
                    var e = O1(this.settings, "loopAtEnd") ? this.settings.loopAtEnd : null;
                    return e = O1(this.settings, "loop") ? this.settings.loop : e, e;
                }
            },
            {
                key: "close",
                value: function() {
                    var e26 = this;
                    if (!this.lightboxOpen) {
                        if (this.events) {
                            for(var t in this.events)this.events.hasOwnProperty(t) && this.events[t].destroy();
                            this.events = null;
                        }
                        return !1;
                    }
                    if (this.closing) return !1;
                    this.closing = !0, this.slidePlayerPause(this.activeSlide), this.fullElementsList && (this.elements = this.fullElementsList), this.bodyHiddenChildElms.length && o1(this.bodyHiddenChildElms, function(e) {
                        e.removeAttribute("aria-hidden");
                    }), h1(this.modal, "glightbox-closing"), g1(this.overlay, "none" == this.settings.openEffect ? "none" : this.settings.cssEfects.fade.out), g1(this.activeSlide, this.settings.cssEfects[this.settings.closeEffect].out, function() {
                        if (e26.activeSlide = null, e26.prevActiveSlideIndex = null, e26.prevActiveSlide = null, e26.built = !1, e26.events) {
                            for(var t in e26.events)e26.events.hasOwnProperty(t) && e26.events[t].destroy();
                            e26.events = null;
                        }
                        var i = document.body;
                        d1(Q, "glightbox-open"), d1(i, "glightbox-open touching gdesc-open glightbox-touch glightbox-mobile gscrollbar-fixer"), e26.modal.parentNode.removeChild(e26.modal), e26.trigger("close"), T1(e26.settings.onClose) && e26.settings.onClose();
                        var n = document.querySelector(".gcss-styles");
                        n && n.parentNode.removeChild(n), e26.lightboxOpen = !1, e26.closing = null;
                    });
                }
            },
            {
                key: "destroy",
                value: function() {
                    this.close(), this.clearAllEvents(), this.baseEvents && this.baseEvents.destroy();
                }
            },
            {
                key: "on",
                value: function(e, t) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (!e || !T1(t)) throw new TypeError("Event name and callback must be defined");
                    this.apiEvents.push({
                        evt: e,
                        once: i,
                        callback: t
                    });
                }
            },
            {
                key: "once",
                value: function(e, t) {
                    this.on(e, t, !0);
                }
            },
            {
                key: "trigger",
                value: function(e27) {
                    var t16 = this, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n = [];
                    o1(this.apiEvents, function(t, s) {
                        var l = t.evt, o = t.once, r = t.callback;
                        l == e27 && (r(i), o && n.push(s));
                    }), n.length && o1(n, function(e) {
                        return t16.apiEvents.splice(e, 1);
                    });
                }
            },
            {
                key: "clearAllEvents",
                value: function() {
                    this.apiEvents.splice(0, this.apiEvents.length);
                }
            },
            {
                key: "version",
                value: function() {
                    return "3.1.1";
                }
            }
        ]), e22;
    }();
    return function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
        }, t = new te(e);
        return t.init(), t;
    };
});

},{}],"7Q5rx":[function(require,module,exports) {
/**
 * Swiper 7.3.0
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2021 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: November 18, 2021
 */ !function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t();
}(this, function() {
    "use strict";
    function e1(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object;
    }
    function t1(s = {
    }, a = {
    }) {
        Object.keys(a).forEach((i)=>{
            void 0 === s[i] ? s[i] = a[i] : e1(a[i]) && e1(s[i]) && Object.keys(a[i]).length > 0 && t1(s[i], a[i]);
        });
    }
    const s1 = {
        body: {
        },
        addEventListener () {
        },
        removeEventListener () {
        },
        activeElement: {
            blur () {
            },
            nodeName: ""
        },
        querySelector: ()=>null
        ,
        querySelectorAll: ()=>[]
        ,
        getElementById: ()=>null
        ,
        createEvent: ()=>({
                initEvent () {
                }
            })
        ,
        createElement: ()=>({
                children: [],
                childNodes: [],
                style: {
                },
                setAttribute () {
                },
                getElementsByTagName: ()=>[]
            })
        ,
        createElementNS: ()=>({
            })
        ,
        importNode: ()=>null
        ,
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        }
    };
    function a1() {
        const e = "undefined" != typeof document ? document : {
        };
        return t1(e, s1), e;
    }
    const i1 = {
        document: s1,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
            replaceState () {
            },
            pushState () {
            },
            go () {
            },
            back () {
            }
        },
        CustomEvent: function() {
            return this;
        },
        addEventListener () {
        },
        removeEventListener () {
        },
        getComputedStyle: ()=>({
                getPropertyValue: ()=>""
            })
        ,
        Image () {
        },
        Date () {
        },
        screen: {
        },
        setTimeout () {
        },
        clearTimeout () {
        },
        matchMedia: ()=>({
            })
        ,
        requestAnimationFrame: (e)=>"undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0)
        ,
        cancelAnimationFrame (e) {
            "undefined" != typeof setTimeout && clearTimeout(e);
        }
    };
    function r1() {
        const e = "undefined" != typeof window ? window : {
        };
        return t1(e, i1), e;
    }
    class n1 extends Array {
        constructor(e2){
            super(...e2 || []), (function(e3) {
                const t = e3.__proto__;
                Object.defineProperty(e3, "__proto__", {
                    get: ()=>t
                    ,
                    set (e) {
                        t.__proto__ = e;
                    }
                });
            })(this);
        }
    }
    function l1(e4 = []) {
        const t = [];
        return e4.forEach((e)=>{
            Array.isArray(e) ? t.push(...l1(e)) : t.push(e);
        }), t;
    }
    function o1(e, t) {
        return Array.prototype.filter.call(e, t);
    }
    function d1(e7, t2) {
        const s3 = r1(), i = a1();
        let l = [];
        if (!t2 && e7 instanceof n1) return e7;
        if (!e7) return new n1(l);
        if ("string" == typeof e7) {
            const s2 = e7.trim();
            if (s2.indexOf("<") >= 0 && s2.indexOf(">") >= 0) {
                let e = "div";
                0 === s2.indexOf("<li") && (e = "ul"), 0 === s2.indexOf("<tr") && (e = "tbody"), 0 !== s2.indexOf("<td") && 0 !== s2.indexOf("<th") || (e = "tr"), 0 === s2.indexOf("<tbody") && (e = "table"), 0 === s2.indexOf("<option") && (e = "select");
                const t = i.createElement(e);
                t.innerHTML = s2;
                for(let e5 = 0; e5 < t.childNodes.length; e5 += 1)l.push(t.childNodes[e5]);
            } else l = (function(e, t) {
                if ("string" != typeof e) return [
                    e
                ];
                const s = [], a = t.querySelectorAll(e);
                for(let e6 = 0; e6 < a.length; e6 += 1)s.push(a[e6]);
                return s;
            })(e7.trim(), t2 || i);
        } else if (e7.nodeType || e7 === s3 || e7 === i) l.push(e7);
        else if (Array.isArray(e7)) {
            if (e7 instanceof n1) return e7;
            l = e7;
        }
        return new n1(function(e) {
            const t = [];
            for(let s = 0; s < e.length; s += 1)-1 === t.indexOf(e[s]) && t.push(e[s]);
            return t;
        }(l));
    }
    d1.fn = n1.prototype;
    const c1 = {
        addClass: function(...e8) {
            const t = l1(e8.map((e)=>e.split(" ")
            ));
            return this.forEach((e)=>{
                e.classList.add(...t);
            }), this;
        },
        removeClass: function(...e9) {
            const t = l1(e9.map((e)=>e.split(" ")
            ));
            return this.forEach((e)=>{
                e.classList.remove(...t);
            }), this;
        },
        hasClass: function(...e10) {
            const t3 = l1(e10.map((e)=>e.split(" ")
            ));
            return o1(this, (e)=>t3.filter((t)=>e.classList.contains(t)
                ).length > 0
            ).length > 0;
        },
        toggleClass: function(...e11) {
            const t4 = l1(e11.map((e)=>e.split(" ")
            ));
            this.forEach((e)=>{
                t4.forEach((t)=>{
                    e.classList.toggle(t);
                });
            });
        },
        attr: function(e, t) {
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for(let s = 0; s < this.length; s += 1)if (2 === arguments.length) this[s].setAttribute(e, t);
            else for(const t5 in e)this[s][t5] = e[t5], this[s].setAttribute(t5, e[t5]);
            return this;
        },
        removeAttr: function(e) {
            for(let t = 0; t < this.length; t += 1)this[t].removeAttribute(e);
            return this;
        },
        transform: function(e) {
            for(let t = 0; t < this.length; t += 1)this[t].style.transform = e;
            return this;
        },
        transition: function(e) {
            for(let t = 0; t < this.length; t += 1)this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
            return this;
        },
        on: function(...e13) {
            let [t6, s, a, i2] = e13;
            function r(e) {
                const t = e.target;
                if (!t) return;
                const i = e.target.dom7EventData || [];
                if (i.indexOf(e) < 0 && i.unshift(e), d1(t).is(s)) a.apply(t, i);
                else {
                    const e = d1(t).parents();
                    for(let t7 = 0; t7 < e.length; t7 += 1)d1(e[t7]).is(s) && a.apply(e[t7], i);
                }
            }
            function n(e) {
                const t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e), a.apply(this, t);
            }
            "function" == typeof e13[1] && ([t6, a, i2] = e13, s = void 0), i2 || (i2 = !1);
            const l = t6.split(" ");
            let o;
            for(let e12 = 0; e12 < this.length; e12 += 1){
                const t = this[e12];
                if (s) for(o = 0; o < l.length; o += 1){
                    const e = l[o];
                    t.dom7LiveListeners || (t.dom7LiveListeners = {
                    }), t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []), t.dom7LiveListeners[e].push({
                        listener: a,
                        proxyListener: r
                    }), t.addEventListener(e, r, i2);
                }
                else for(o = 0; o < l.length; o += 1){
                    const e = l[o];
                    t.dom7Listeners || (t.dom7Listeners = {
                    }), t.dom7Listeners[e] || (t.dom7Listeners[e] = []), t.dom7Listeners[e].push({
                        listener: a,
                        proxyListener: n
                    }), t.addEventListener(e, n, i2);
                }
            }
            return this;
        },
        off: function(...e) {
            let [t, s, a, i] = e;
            "function" == typeof e[1] && ([t, a, i] = e, s = void 0), i || (i = !1);
            const r = t.split(" ");
            for(let e14 = 0; e14 < r.length; e14 += 1){
                const t = r[e14];
                for(let e = 0; e < this.length; e += 1){
                    const r = this[e];
                    let n;
                    if (!s && r.dom7Listeners ? n = r.dom7Listeners[t] : s && r.dom7LiveListeners && (n = r.dom7LiveListeners[t]), n && n.length) for(let e = n.length - 1; e >= 0; e -= 1){
                        const s = n[e];
                        a && s.listener === a || a && s.listener && s.listener.dom7proxy && s.listener.dom7proxy === a ? (r.removeEventListener(t, s.proxyListener, i), n.splice(e, 1)) : a || (r.removeEventListener(t, s.proxyListener, i), n.splice(e, 1));
                    }
                }
            }
            return this;
        },
        trigger: function(...e) {
            const t8 = r1(), s = e[0].split(" "), a = e[1];
            for(let i = 0; i < s.length; i += 1){
                const r = s[i];
                for(let s4 = 0; s4 < this.length; s4 += 1){
                    const i = this[s4];
                    if (t8.CustomEvent) {
                        const s = new t8.CustomEvent(r, {
                            detail: a,
                            bubbles: !0,
                            cancelable: !0
                        });
                        i.dom7EventData = e.filter((e, t)=>t > 0
                        ), i.dispatchEvent(s), i.dom7EventData = [], delete i.dom7EventData;
                    }
                }
            }
            return this;
        },
        transitionEnd: function(e) {
            const t = this;
            return e && t.on("transitionend", function s(a) {
                a.target === this && (e.call(this, a), t.off("transitionend", s));
            }), this;
        },
        outerWidth: function(e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"));
                }
                return this[0].offsetWidth;
            }
            return null;
        },
        outerHeight: function(e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"));
                }
                return this[0].offsetHeight;
            }
            return null;
        },
        styles: function() {
            const e = r1();
            return this[0] ? e.getComputedStyle(this[0], null) : {
            };
        },
        offset: function() {
            if (this.length > 0) {
                const e = r1(), t = a1(), s = this[0], i = s.getBoundingClientRect(), n = t.body, l = s.clientTop || n.clientTop || 0, o = s.clientLeft || n.clientLeft || 0, d = s === e ? e.scrollY : s.scrollTop, c = s === e ? e.scrollX : s.scrollLeft;
                return {
                    top: i.top + d - l,
                    left: i.left + c - o
                };
            }
            return null;
        },
        css: function(e, t) {
            const s = r1();
            let a;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for(a = 0; a < this.length; a += 1)for(const t in e)this[a].style[t] = e[t];
                    return this;
                }
                if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e);
            }
            if (2 === arguments.length && "string" == typeof e) {
                for(a = 0; a < this.length; a += 1)this[a].style[e] = t;
                return this;
            }
            return this;
        },
        each: function(e) {
            return e ? (this.forEach((t, s)=>{
                e.apply(t, [
                    t,
                    s
                ]);
            }), this) : this;
        },
        html: function(e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : null;
            for(let t = 0; t < this.length; t += 1)this[t].innerHTML = e;
            return this;
        },
        text: function(e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for(let t = 0; t < this.length; t += 1)this[t].textContent = e;
            return this;
        },
        is: function(e) {
            const t = r1(), s = a1(), i = this[0];
            let l, o;
            if (!i || void 0 === e) return !1;
            if ("string" == typeof e) {
                if (i.matches) return i.matches(e);
                if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
                if (i.msMatchesSelector) return i.msMatchesSelector(e);
                for(l = d1(e), o = 0; o < l.length; o += 1)if (l[o] === i) return !0;
                return !1;
            }
            if (e === s) return i === s;
            if (e === t) return i === t;
            if (e.nodeType || e instanceof n1) {
                for(l = e.nodeType ? [
                    e
                ] : e, o = 0; o < l.length; o += 1)if (l[o] === i) return !0;
                return !1;
            }
            return !1;
        },
        index: function() {
            let e, t = this[0];
            if (t) {
                for(e = 0; null !== (t = t.previousSibling);)1 === t.nodeType && (e += 1);
                return e;
            }
        },
        eq: function(e) {
            if (void 0 === e) return this;
            const t = this.length;
            if (e > t - 1) return d1([]);
            if (e < 0) {
                const s = t + e;
                return d1(s < 0 ? [] : [
                    this[s]
                ]);
            }
            return d1([
                this[e]
            ]);
        },
        append: function(...e) {
            let t;
            const s = a1();
            for(let a = 0; a < e.length; a += 1){
                t = e[a];
                for(let e15 = 0; e15 < this.length; e15 += 1)if ("string" == typeof t) {
                    const a = s.createElement("div");
                    for(a.innerHTML = t; a.firstChild;)this[e15].appendChild(a.firstChild);
                } else if (t instanceof n1) for(let s5 = 0; s5 < t.length; s5 += 1)this[e15].appendChild(t[s5]);
                else this[e15].appendChild(t);
            }
            return this;
        },
        prepend: function(e) {
            const t = a1();
            let s, i;
            for(s = 0; s < this.length; s += 1)if ("string" == typeof e) {
                const a = t.createElement("div");
                for(a.innerHTML = e, i = a.childNodes.length - 1; i >= 0; i -= 1)this[s].insertBefore(a.childNodes[i], this[s].childNodes[0]);
            } else if (e instanceof n1) for(i = 0; i < e.length; i += 1)this[s].insertBefore(e[i], this[s].childNodes[0]);
            else this[s].insertBefore(e, this[s].childNodes[0]);
            return this;
        },
        next: function(e) {
            return this.length > 0 ? e ? this[0].nextElementSibling && d1(this[0].nextElementSibling).is(e) ? d1([
                this[0].nextElementSibling
            ]) : d1([]) : this[0].nextElementSibling ? d1([
                this[0].nextElementSibling
            ]) : d1([]) : d1([]);
        },
        nextAll: function(e) {
            const t = [];
            let s = this[0];
            if (!s) return d1([]);
            for(; s.nextElementSibling;){
                const a = s.nextElementSibling;
                e ? d1(a).is(e) && t.push(a) : t.push(a), s = a;
            }
            return d1(t);
        },
        prev: function(e) {
            if (this.length > 0) {
                const t = this[0];
                return e ? t.previousElementSibling && d1(t.previousElementSibling).is(e) ? d1([
                    t.previousElementSibling
                ]) : d1([]) : t.previousElementSibling ? d1([
                    t.previousElementSibling
                ]) : d1([]);
            }
            return d1([]);
        },
        prevAll: function(e) {
            const t = [];
            let s = this[0];
            if (!s) return d1([]);
            for(; s.previousElementSibling;){
                const a = s.previousElementSibling;
                e ? d1(a).is(e) && t.push(a) : t.push(a), s = a;
            }
            return d1(t);
        },
        parent: function(e) {
            const t = [];
            for(let s = 0; s < this.length; s += 1)null !== this[s].parentNode && (e ? d1(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode));
            return d1(t);
        },
        parents: function(e) {
            const t = [];
            for(let s = 0; s < this.length; s += 1){
                let a = this[s].parentNode;
                for(; a;)e ? d1(a).is(e) && t.push(a) : t.push(a), a = a.parentNode;
            }
            return d1(t);
        },
        closest: function(e) {
            let t = this;
            return void 0 === e ? d1([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
        },
        find: function(e) {
            const t = [];
            for(let s = 0; s < this.length; s += 1){
                const a = this[s].querySelectorAll(e);
                for(let e16 = 0; e16 < a.length; e16 += 1)t.push(a[e16]);
            }
            return d1(t);
        },
        children: function(e) {
            const t = [];
            for(let s = 0; s < this.length; s += 1){
                const a = this[s].children;
                for(let s = 0; s < a.length; s += 1)e && !d1(a[s]).is(e) || t.push(a[s]);
            }
            return d1(t);
        },
        filter: function(e) {
            return d1(o1(this, e));
        },
        remove: function() {
            for(let e = 0; e < this.length; e += 1)this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this;
        }
    };
    function p1(e, t = 0) {
        return setTimeout(e, t);
    }
    function u1() {
        return Date.now();
    }
    function h1(e17, t9 = "x") {
        const s6 = r1();
        let a, i, n;
        const l = function(e) {
            const t = r1();
            let s;
            return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s;
        }(e17);
        return s6.WebKitCSSMatrix ? (i = l.transform || l.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map((e)=>e.replace(",", ".")
        ).join(", ")), n = new s6.WebKitCSSMatrix("none" === i ? "" : i)) : (n = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), a = n.toString().split(",")), "x" === t9 && (i = s6.WebKitCSSMatrix ? n.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t9 && (i = s6.WebKitCSSMatrix ? n.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0;
    }
    function m1(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1);
    }
    function f1(...e) {
        const t = Object(e[0]), s = [
            "__proto__",
            "constructor",
            "prototype"
        ];
        for(let i = 1; i < e.length; i += 1){
            const r = e[i];
            if (null != r && (a = r, !("undefined" != typeof window && void 0 !== window.HTMLElement ? a instanceof HTMLElement : a && (1 === a.nodeType || 11 === a.nodeType)))) {
                const e18 = Object.keys(Object(r)).filter((e)=>s.indexOf(e) < 0
                );
                for(let s7 = 0, a = e18.length; s7 < a; s7 += 1){
                    const a = e18[s7], i = Object.getOwnPropertyDescriptor(r, a);
                    void 0 !== i && i.enumerable && (m1(t[a]) && m1(r[a]) ? r[a].__swiper__ ? t[a] = r[a] : f1(t[a], r[a]) : !m1(t[a]) && m1(r[a]) ? (t[a] = {
                    }, r[a].__swiper__ ? t[a] = r[a] : f1(t[a], r[a])) : t[a] = r[a]);
                }
            }
        }
        var a;
        return t;
    }
    function g1(e, t, s) {
        e.style.setProperty(t, s);
    }
    function v1({ swiper: e19 , targetPosition: t10 , side: s  }) {
        const a = r1(), i = -e19.translate;
        let n, l = null;
        const o = e19.params.speed;
        e19.wrapperEl.style.scrollSnapType = "none", a.cancelAnimationFrame(e19.cssModeFrameID);
        const d2 = t10 > i ? "next" : "prev", c = (e, t)=>"next" === d2 && e >= t || "prev" === d2 && e <= t
        , p = ()=>{
            n = (new Date).getTime(), null === l && (l = n);
            const r = Math.max(Math.min((n - l) / o, 1), 0), d = 0.5 - Math.cos(r * Math.PI) / 2;
            let u = i + d * (t10 - i);
            if (c(u, t10) && (u = t10), e19.wrapperEl.scrollTo({
                [s]: u
            }), c(u, t10)) return e19.wrapperEl.style.overflow = "hidden", e19.wrapperEl.style.scrollSnapType = "", setTimeout(()=>{
                e19.wrapperEl.style.overflow = "", e19.wrapperEl.scrollTo({
                    [s]: u
                });
            }), void a.cancelAnimationFrame(e19.cssModeFrameID);
            e19.cssModeFrameID = a.requestAnimationFrame(p);
        };
        p();
    }
    let w1, b1, x1;
    function y1() {
        return w1 || (w1 = (function() {
            const e = r1(), t11 = a1();
            return {
                smoothScroll: t11.documentElement && "scrollBehavior" in t11.documentElement.style,
                touch: !!("ontouchstart" in e || e.DocumentTouch && t11 instanceof e.DocumentTouch),
                passiveListener: (function() {
                    let t = !1;
                    try {
                        const s = Object.defineProperty({
                        }, "passive", {
                            get () {
                                t = !0;
                            }
                        });
                        e.addEventListener("testPassiveListener", null, s);
                    } catch (e) {
                    }
                    return t;
                })(),
                gestures: "ongesturestart" in e
            };
        })()), w1;
    }
    function E1(e20 = {
    }) {
        return b1 || (b1 = (function({ userAgent: e  } = {
        }) {
            const t = y1(), s = r1(), a = s.navigator.platform, i = e || s.navigator.userAgent, n = {
                ios: !1,
                android: !1
            }, l = s.screen.width, o = s.screen.height, d = i.match(/(Android);?[\s\/]+([\d.]+)?/);
            let c = i.match(/(iPad).*OS\s([\d_]+)/);
            const p = i.match(/(iPod)(.*OS\s([\d_]+))?/), u = !c && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/), h = "Win32" === a;
            let m = "MacIntel" === a;
            return !c && m && t.touch && [
                "1024x1366",
                "1366x1024",
                "834x1194",
                "1194x834",
                "834x1112",
                "1112x834",
                "768x1024",
                "1024x768",
                "820x1180",
                "1180x820",
                "810x1080",
                "1080x810"
            ].indexOf(`${l}x${o}`) >= 0 && (c = i.match(/(Version)\/([\d.]+)/), c || (c = [
                0,
                1,
                "13_0_0"
            ]), m = !1), d && !h && (n.os = "android", n.android = !0), (c || u || p) && (n.os = "ios", n.ios = !0), n;
        })(e20)), b1;
    }
    function T1() {
        return x1 || (x1 = (function() {
            const e = r1();
            return {
                isSafari: (function() {
                    const t = e.navigator.userAgent.toLowerCase();
                    return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0;
                })(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
            };
        })()), x1;
    }
    Object.keys(c1).forEach((e)=>{
        Object.defineProperty(d1.fn, e, {
            value: c1[e],
            writable: !0
        });
    });
    var C1 = {
        on (e, t, s) {
            const a = this;
            if ("function" != typeof t) return a;
            const i = s ? "unshift" : "push";
            return e.split(" ").forEach((e)=>{
                a.eventsListeners[e] || (a.eventsListeners[e] = []), a.eventsListeners[e][i](t);
            }), a;
        },
        once (e, t, s8) {
            const a = this;
            if ("function" != typeof t) return a;
            function i(...s) {
                a.off(e, i), i.__emitterProxy && delete i.__emitterProxy, t.apply(a, s);
            }
            return i.__emitterProxy = t, a.on(e, i, s8);
        },
        onAny (e, t) {
            const s = this;
            if ("function" != typeof e) return s;
            const a = t ? "unshift" : "push";
            return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e), s;
        },
        offAny (e) {
            const t = this;
            if (!t.eventsAnyListeners) return t;
            const s = t.eventsAnyListeners.indexOf(e);
            return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
        },
        off (e, t) {
            const s = this;
            return s.eventsListeners ? (e.split(" ").forEach((e)=>{
                void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach((a, i)=>{
                    (a === t || a.__emitterProxy && a.__emitterProxy === t) && s.eventsListeners[e].splice(i, 1);
                });
            }), s) : s;
        },
        emit (...e21) {
            const t12 = this;
            if (!t12.eventsListeners) return t12;
            let s, a, i;
            "string" == typeof e21[0] || Array.isArray(e21[0]) ? (s = e21[0], a = e21.slice(1, e21.length), i = t12) : (s = e21[0].events, a = e21[0].data, i = e21[0].context || t12), a.unshift(i);
            return (Array.isArray(s) ? s : s.split(" ")).forEach((e22)=>{
                t12.eventsAnyListeners && t12.eventsAnyListeners.length && t12.eventsAnyListeners.forEach((t)=>{
                    t.apply(i, [
                        e22,
                        ...a
                    ]);
                }), t12.eventsListeners && t12.eventsListeners[e22] && t12.eventsListeners[e22].forEach((e)=>{
                    e.apply(i, a);
                });
            }), t12;
        }
    };
    function $1({ swiper: e , runCallbacks: t , direction: s , step: a  }) {
        const { activeIndex: i , previousIndex: r  } = e;
        let n = s;
        if (n || (n = i > r ? "next" : i < r ? "prev" : "reset"), e.emit(`transition${a}`), t && i !== r) {
            if ("reset" === n) return void e.emit(`slideResetTransition${a}`);
            e.emit(`slideChangeTransition${a}`), "next" === n ? e.emit(`slideNextTransition${a}`) : e.emit(`slidePrevTransition${a}`);
        }
    }
    function S1(e23) {
        const t13 = this, s9 = a1(), i = r1(), n = t13.touchEventsData, { params: l , touches: o , enabled: c  } = t13;
        if (!c) return;
        if (t13.animating && l.preventInteractionOnTransition) return;
        !t13.animating && l.cssMode && l.loop && t13.loopFix();
        let p = e23;
        p.originalEvent && (p = p.originalEvent);
        let h = d1(p.target);
        if ("wrapper" === l.touchEventsTarget && !h.closest(t13.wrapperEl).length) return;
        if (n.isTouchEvent = "touchstart" === p.type, !n.isTouchEvent && "which" in p && 3 === p.which) return;
        if (!n.isTouchEvent && "button" in p && p.button > 0) return;
        if (n.isTouched && n.isMoved) return;
        !!l.noSwipingClass && "" !== l.noSwipingClass && p.target && p.target.shadowRoot && e23.path && e23.path[0] && (h = d1(e23.path[0]));
        const m = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`, f = !(!p.target || !p.target.shadowRoot);
        if (l.noSwiping && (f ? (function(e, t14 = this) {
            return (function t(s) {
                return s && s !== a1() && s !== r1() ? (s.assignedSlot && (s = s.assignedSlot), s.closest(e) || t(s.getRootNode().host)) : null;
            })(t14);
        })(m, p.target) : h.closest(m)[0])) return void (t13.allowClick = !0);
        if (l.swipeHandler && !h.closest(l.swipeHandler)[0]) return;
        o.currentX = "touchstart" === p.type ? p.targetTouches[0].pageX : p.pageX, o.currentY = "touchstart" === p.type ? p.targetTouches[0].pageY : p.pageY;
        const g = o.currentX, v = o.currentY, w = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection, b = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
        if (w && (g <= b || g >= i.innerWidth - b)) {
            if ("prevent" !== w) return;
            e23.preventDefault();
        }
        if (Object.assign(n, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
        }), o.startX = g, o.startY = v, n.touchStartTime = u1(), t13.allowClick = !0, t13.updateSize(), t13.swipeDirection = void 0, l.threshold > 0 && (n.allowThresholdMove = !1), "touchstart" !== p.type) {
            let e = !0;
            h.is(n.focusableElements) && (e = !1), s9.activeElement && d1(s9.activeElement).is(n.focusableElements) && s9.activeElement !== h[0] && s9.activeElement.blur();
            const a = e && t13.allowTouchMove && l.touchStartPreventDefault;
            !l.touchStartForcePreventDefault && !a || h[0].isContentEditable || p.preventDefault();
        }
        t13.emit("touchStart", p);
    }
    function M1(e) {
        const t = a1(), s = this, i = s.touchEventsData, { params: r , touches: n , rtlTranslate: l , enabled: o  } = s;
        if (!o) return;
        let c = e;
        if (c.originalEvent && (c = c.originalEvent), !i.isTouched) return void (i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", c));
        if (i.isTouchEvent && "touchmove" !== c.type) return;
        const p = "touchmove" === c.type && c.targetTouches && (c.targetTouches[0] || c.changedTouches[0]), h = "touchmove" === c.type ? p.pageX : c.pageX, m = "touchmove" === c.type ? p.pageY : c.pageY;
        if (c.preventedByNestedSwiper) return n.startX = h, void (n.startY = m);
        if (!s.allowTouchMove) return s.allowClick = !1, void (i.isTouched && (Object.assign(n, {
            startX: h,
            startY: m,
            currentX: h,
            currentY: m
        }), i.touchStartTime = u1()));
        if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop) {
            if (s.isVertical()) {
                if (m < n.startY && s.translate <= s.maxTranslate() || m > n.startY && s.translate >= s.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1);
            } else if (h < n.startX && s.translate <= s.maxTranslate() || h > n.startX && s.translate >= s.minTranslate()) return;
        }
        if (i.isTouchEvent && t.activeElement && c.target === t.activeElement && d1(c.target).is(i.focusableElements)) return i.isMoved = !0, void (s.allowClick = !1);
        if (i.allowTouchCallbacks && s.emit("touchMove", c), c.targetTouches && c.targetTouches.length > 1) return;
        n.currentX = h, n.currentY = m;
        const f = n.currentX - n.startX, g = n.currentY - n.startY;
        if (s.params.threshold && Math.sqrt(f ** 2 + g ** 2) < s.params.threshold) return;
        if (void 0 === i.isScrolling) {
            let e;
            s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : f * f + g * g >= 25 && (e = 180 * Math.atan2(Math.abs(g), Math.abs(f)) / Math.PI, i.isScrolling = s.isHorizontal() ? e > r.touchAngle : 90 - e > r.touchAngle);
        }
        if (i.isScrolling && s.emit("touchMoveOpposite", c), void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)), i.isScrolling) return void (i.isTouched = !1);
        if (!i.startMoving) return;
        s.allowClick = !1, !r.cssMode && c.cancelable && c.preventDefault(), r.touchMoveStopPropagation && !r.nested && c.stopPropagation(), i.isMoved || (r.loop && !r.cssMode && s.loopFix(), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating && s.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !r.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", c)), s.emit("sliderMove", c), i.isMoved = !0;
        let v = s.isHorizontal() ? f : g;
        n.diff = v, v *= r.touchRatio, l && (v = -v), s.swipeDirection = v > 0 ? "prev" : "next", i.currentTranslate = v + i.startTranslate;
        let w = !0, b = r.resistanceRatio;
        if (r.touchReleaseOnEdges && (b = 0), v > 0 && i.currentTranslate > s.minTranslate() ? (w = !1, r.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + v) ** b)) : v < 0 && i.currentTranslate < s.maxTranslate() && (w = !1, r.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - v) ** b)), w && (c.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate), r.threshold > 0) {
            if (!(Math.abs(v) > r.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
            if (!i.allowThresholdMove) return i.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, i.currentTranslate = i.startTranslate, void (n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY);
        }
        r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && s.freeMode || r.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), s.params.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i.currentTranslate), s.setTranslate(i.currentTranslate));
    }
    function P1(e) {
        const t = this, s = t.touchEventsData, { params: a , touches: i , rtlTranslate: r , slidesGrid: n , enabled: l  } = t;
        if (!l) return;
        let o = e;
        if (o.originalEvent && (o = o.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", o), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && a.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void (s.startMoving = !1);
        a.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        const d = u1(), c = d - s.touchStartTime;
        if (t.allowClick && (t.updateClickedSlide(o), t.emit("tap click", o), c < 300 && d - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", o)), s.lastClickTime = u1(), p1(()=>{
            t.destroyed || (t.allowClick = !0);
        }), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === i.diff || s.currentTranslate === s.startTranslate) return s.isTouched = !1, s.isMoved = !1, void (s.startMoving = !1);
        let h;
        if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, h = a.followFinger ? r ? t.translate : -t.translate : -s.currentTranslate, a.cssMode) return;
        if (t.params.freeMode && a.freeMode.enabled) return void t.freeMode.onTouchEnd({
            currentPos: h
        });
        let m = 0, f = t.slidesSizesGrid[0];
        for(let e24 = 0; e24 < n.length; e24 += e24 < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup){
            const t = e24 < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
            void 0 !== n[e24 + t] ? h >= n[e24] && h < n[e24 + t] && (m = e24, f = n[e24 + t] - n[e24]) : h >= n[e24] && (m = e24, f = n[n.length - 1] - n[n.length - 2]);
        }
        const g = (h - n[m]) / f, v = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
        if (c > a.longSwipesMs) {
            if (!a.longSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && (g >= a.longSwipesRatio ? t.slideTo(m + v) : t.slideTo(m)), "prev" === t.swipeDirection && (g > 1 - a.longSwipesRatio ? t.slideTo(m + v) : t.slideTo(m));
        } else {
            if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
            t.navigation && (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl) ? o.target === t.navigation.nextEl ? t.slideTo(m + v) : t.slideTo(m) : ("next" === t.swipeDirection && t.slideTo(m + v), "prev" === t.swipeDirection && t.slideTo(m));
        }
    }
    function k1() {
        const e = this, { params: t , el: s  } = e;
        if (s && 0 === s.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const { allowSlideNext: a , allowSlidePrev: i , snapGrid: r  } = e;
        e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = i, e.allowSlideNext = a, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
    }
    function z1(e) {
        const t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function O1() {
        const e = this, { wrapperEl: t , rtlTranslate: s , enabled: a  } = e;
        if (!a) return;
        let i;
        e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, -0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
        const r = e.maxTranslate() - e.minTranslate();
        i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r, i !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1);
    }
    let I1 = !1;
    function L() {
    }
    const A = (e, t)=>{
        const s = a1(), { params: i , touchEvents: r , el: n , wrapperEl: l , device: o , support: d  } = e, c = !!i.nested, p = "on" === t ? "addEventListener" : "removeEventListener", u = t;
        if (d.touch) {
            const t = !("touchstart" !== r.start || !d.passiveListener || !i.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            n[p](r.start, e.onTouchStart, t), n[p](r.move, e.onTouchMove, d.passiveListener ? {
                passive: !1,
                capture: c
            } : c), n[p](r.end, e.onTouchEnd, t), r.cancel && n[p](r.cancel, e.onTouchEnd, t);
        } else n[p](r.start, e.onTouchStart, !1), s[p](r.move, e.onTouchMove, c), s[p](r.end, e.onTouchEnd, !1);
        (i.preventClicks || i.preventClicksPropagation) && n[p]("click", e.onClick, !0), i.cssMode && l[p]("scroll", e.onScroll), i.updateOnWindowResize ? e[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", k1, !0) : e[u]("observerUpdate", k1, !0);
    };
    const D = (e, t)=>e.grid && t.grid && t.grid.rows > 1
    ;
    var G = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };
    function N(e, t) {
        return function(s = {
        }) {
            const a = Object.keys(s)[0], i = s[a];
            "object" == typeof i && null !== i ? ([
                "navigation",
                "pagination",
                "scrollbar"
            ].indexOf(a) >= 0 && !0 === e[a] && (e[a] = {
                auto: !0
            }), a in e && "enabled" in i ? (!0 === e[a] && (e[a] = {
                enabled: !0
            }), "object" != typeof e[a] || "enabled" in e[a] || (e[a].enabled = !0), e[a] || (e[a] = {
                enabled: !1
            }), f1(t, s)) : f1(t, s)) : f1(t, s);
        };
    }
    const B = {
        eventsEmitter: C1,
        update: {
            updateSize: function() {
                const e = this;
                let t, s;
                const a = e.$el;
                t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : a[0].clientWidth, s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : a[0].clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(a.css("padding-left") || 0, 10) - parseInt(a.css("padding-right") || 0, 10), s = s - parseInt(a.css("padding-top") || 0, 10) - parseInt(a.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
                    width: t,
                    height: s,
                    size: e.isHorizontal() ? t : s
                }));
            },
            updateSlides: function() {
                const e25 = this;
                function t15(t) {
                    return e25.isHorizontal() ? t : ({
                        width: "height",
                        "margin-top": "margin-left",
                        "margin-bottom ": "margin-right",
                        "margin-left": "margin-top",
                        "margin-right": "margin-bottom",
                        "padding-left": "padding-top",
                        "padding-right": "padding-bottom",
                        marginRight: "marginBottom"
                    })[t];
                }
                function s10(e, s) {
                    return parseFloat(e.getPropertyValue(t15(s)) || 0);
                }
                const a = e25.params, { $wrapperEl: i , size: r , rtlTranslate: n , wrongRTL: l  } = e25, o = e25.virtual && a.virtual.enabled, d = o ? e25.virtual.slides.length : e25.slides.length, c = i.children(`.${e25.params.slideClass}`), p = o ? e25.virtual.slides.length : c.length;
                let u = [];
                const h = [], m = [];
                let f = a.slidesOffsetBefore;
                "function" == typeof f && (f = a.slidesOffsetBefore.call(e25));
                let v = a.slidesOffsetAfter;
                "function" == typeof v && (v = a.slidesOffsetAfter.call(e25));
                const w = e25.snapGrid.length, b = e25.slidesGrid.length;
                let x = a.spaceBetween, y = -f, E = 0, T = 0;
                if (void 0 === r) return;
                "string" == typeof x && x.indexOf("%") >= 0 && (x = parseFloat(x.replace("%", "")) / 100 * r), e25.virtualSize = -x, n ? c.css({
                    marginLeft: "",
                    marginBottom: "",
                    marginTop: ""
                }) : c.css({
                    marginRight: "",
                    marginBottom: "",
                    marginTop: ""
                }), a.centeredSlides && a.cssMode && (g1(e25.wrapperEl, "--swiper-centered-offset-before", ""), g1(e25.wrapperEl, "--swiper-centered-offset-after", ""));
                const C = a.grid && a.grid.rows > 1 && e25.grid;
                let $;
                C && e25.grid.initSlides(p);
                const S = "auto" === a.slidesPerView && a.breakpoints && Object.keys(a.breakpoints).filter((e)=>void 0 !== a.breakpoints[e].slidesPerView
                ).length > 0;
                for(let i3 = 0; i3 < p; i3 += 1){
                    $ = 0;
                    const n = c.eq(i3);
                    if (C && e25.grid.updateSlide(i3, n, p, t15), "none" !== n.css("display")) {
                        if ("auto" === a.slidesPerView) {
                            S && (c[i3].style[t15("width")] = "");
                            const r = getComputedStyle(n[0]), l = n[0].style.transform, o = n[0].style.webkitTransform;
                            if (l && (n[0].style.transform = "none"), o && (n[0].style.webkitTransform = "none"), a.roundLengths) $ = e25.isHorizontal() ? n.outerWidth(!0) : n.outerHeight(!0);
                            else {
                                const e = s10(r, "width"), t = s10(r, "padding-left"), a = s10(r, "padding-right"), i = s10(r, "margin-left"), l = s10(r, "margin-right"), o = r.getPropertyValue("box-sizing");
                                if (o && "border-box" === o) $ = e + i + l;
                                else {
                                    const { clientWidth: s , offsetWidth: r  } = n[0];
                                    $ = e + t + a + i + l + (r - s);
                                }
                            }
                            l && (n[0].style.transform = l), o && (n[0].style.webkitTransform = o), a.roundLengths && ($ = Math.floor($));
                        } else $ = (r - (a.slidesPerView - 1) * x) / a.slidesPerView, a.roundLengths && ($ = Math.floor($)), c[i3] && (c[i3].style[t15("width")] = `${$}px`);
                        c[i3] && (c[i3].swiperSlideSize = $), m.push($), a.centeredSlides ? (y = y + $ / 2 + E / 2 + x, 0 === E && 0 !== i3 && (y = y - r / 2 - x), 0 === i3 && (y = y - r / 2 - x), Math.abs(y) < 0.001 && (y = 0), a.roundLengths && (y = Math.floor(y)), T % a.slidesPerGroup == 0 && u.push(y), h.push(y)) : (a.roundLengths && (y = Math.floor(y)), (T - Math.min(e25.params.slidesPerGroupSkip, T)) % e25.params.slidesPerGroup == 0 && u.push(y), h.push(y), y = y + $ + x), e25.virtualSize += $ + x, E = $, T += 1;
                    }
                }
                if (e25.virtualSize = Math.max(e25.virtualSize, r) + v, n && l && ("slide" === a.effect || "coverflow" === a.effect) && i.css({
                    width: `${e25.virtualSize + a.spaceBetween}px`
                }), a.setWrapperSize && i.css({
                    [t15("width")]: `${e25.virtualSize + a.spaceBetween}px`
                }), C && e25.grid.updateWrapperSize($, u, t15), !a.centeredSlides) {
                    const t = [];
                    for(let s = 0; s < u.length; s += 1){
                        let i = u[s];
                        a.roundLengths && (i = Math.floor(i)), u[s] <= e25.virtualSize - r && t.push(i);
                    }
                    u = t, Math.floor(e25.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 && u.push(e25.virtualSize - r);
                }
                if (0 === u.length && (u = [
                    0
                ]), 0 !== a.spaceBetween) {
                    const s = e25.isHorizontal() && n ? "marginLeft" : t15("marginRight");
                    c.filter((e, t)=>!a.cssMode || t !== c.length - 1
                    ).css({
                        [s]: `${x}px`
                    });
                }
                if (a.centeredSlides && a.centeredSlidesBounds) {
                    let e26 = 0;
                    m.forEach((t)=>{
                        e26 += t + (a.spaceBetween ? a.spaceBetween : 0);
                    }), e26 -= a.spaceBetween;
                    const t16 = e26 - r;
                    u = u.map((e)=>e < 0 ? -f : e > t16 ? t16 + v : e
                    );
                }
                if (a.centerInsufficientSlides) {
                    let e27 = 0;
                    if (m.forEach((t)=>{
                        e27 += t + (a.spaceBetween ? a.spaceBetween : 0);
                    }), e27 -= a.spaceBetween, e27 < r) {
                        const t = (r - e27) / 2;
                        u.forEach((e, s)=>{
                            u[s] = e - t;
                        }), h.forEach((e, s)=>{
                            h[s] = e + t;
                        });
                    }
                }
                if (Object.assign(e25, {
                    slides: c,
                    snapGrid: u,
                    slidesGrid: h,
                    slidesSizesGrid: m
                }), a.centeredSlides && a.cssMode && !a.centeredSlidesBounds) {
                    g1(e25.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"), g1(e25.wrapperEl, "--swiper-centered-offset-after", e25.size / 2 - m[m.length - 1] / 2 + "px");
                    const t = -e25.snapGrid[0], s = -e25.slidesGrid[0];
                    e25.snapGrid = e25.snapGrid.map((e)=>e + t
                    ), e25.slidesGrid = e25.slidesGrid.map((e)=>e + s
                    );
                }
                p !== d && e25.emit("slidesLengthChange"), u.length !== w && (e25.params.watchOverflow && e25.checkOverflow(), e25.emit("snapGridLengthChange")), h.length !== b && e25.emit("slidesGridLengthChange"), a.watchSlidesProgress && e25.updateSlidesOffset();
            },
            updateAutoHeight: function(e28) {
                const t17 = this, s = [], a = t17.virtual && t17.params.virtual.enabled;
                let i, r = 0;
                "number" == typeof e28 ? t17.setTransition(e28) : !0 === e28 && t17.setTransition(t17.params.speed);
                const n = (e)=>a ? t17.slides.filter((t)=>parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
                    )[0] : t17.slides.eq(e)[0]
                ;
                if ("auto" !== t17.params.slidesPerView && t17.params.slidesPerView > 1) {
                    if (t17.params.centeredSlides) t17.visibleSlides.each((e)=>{
                        s.push(e);
                    });
                    else for(i = 0; i < Math.ceil(t17.params.slidesPerView); i += 1){
                        const e = t17.activeIndex + i;
                        if (e > t17.slides.length && !a) break;
                        s.push(n(e));
                    }
                } else s.push(n(t17.activeIndex));
                for(i = 0; i < s.length; i += 1)if (void 0 !== s[i]) {
                    const e = s[i].offsetHeight;
                    r = e > r ? e : r;
                }
                r && t17.$wrapperEl.css("height", `${r}px`);
            },
            updateSlidesOffset: function() {
                const e = this, t = e.slides;
                for(let s = 0; s < t.length; s += 1)t[s].swiperSlideOffset = e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop;
            },
            updateSlidesProgress: function(e = this && this.translate || 0) {
                const t = this, s = t.params, { slides: a , rtlTranslate: i , snapGrid: r  } = t;
                if (0 === a.length) return;
                void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
                let n = -e;
                i && (n = e), a.removeClass(s.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                for(let e29 = 0; e29 < a.length; e29 += 1){
                    const l = a[e29];
                    let o = l.swiperSlideOffset;
                    s.cssMode && s.centeredSlides && (o -= a[0].swiperSlideOffset);
                    const d = (n + (s.centeredSlides ? t.minTranslate() : 0) - o) / (l.swiperSlideSize + s.spaceBetween), c = (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - o) / (l.swiperSlideSize + s.spaceBetween), p = -(n - o), u = p + t.slidesSizesGrid[e29];
                    (p >= 0 && p < t.size - 1 || u > 1 && u <= t.size || p <= 0 && u >= t.size) && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(e29), a.eq(e29).addClass(s.slideVisibleClass)), l.progress = i ? -d : d, l.originalProgress = i ? -c : c;
                }
                t.visibleSlides = d1(t.visibleSlides);
            },
            updateProgress: function(e) {
                const t = this;
                if (void 0 === e) {
                    const s = t.rtlTranslate ? -1 : 1;
                    e = t && t.translate && t.translate * s || 0;
                }
                const s = t.params, a = t.maxTranslate() - t.minTranslate();
                let { progress: i , isBeginning: r , isEnd: n  } = t;
                const l = r, o = n;
                0 === a ? (i = 0, r = !0, n = !0) : (i = (e - t.minTranslate()) / a, r = i <= 0, n = i >= 1), Object.assign(t, {
                    progress: i,
                    isBeginning: r,
                    isEnd: n
                }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), r && !l && t.emit("reachBeginning toEdge"), n && !o && t.emit("reachEnd toEdge"), (l && !r || o && !n) && t.emit("fromEdge"), t.emit("progress", i);
            },
            updateSlidesClasses: function() {
                const e = this, { slides: t , params: s , $wrapperEl: a , activeIndex: i , realIndex: r  } = e, n = e.virtual && s.virtual.enabled;
                let l;
                t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`), l = n ? e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${i}"]`) : t.eq(i), l.addClass(s.slideActiveClass), s.loop && (l.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass));
                let o = l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
                s.loop && 0 === o.length && (o = t.eq(0), o.addClass(s.slideNextClass));
                let d = l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
                s.loop && 0 === d.length && (d = t.eq(-1), d.addClass(s.slidePrevClass)), s.loop && (o.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass), d.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)), e.emitSlidesClasses();
            },
            updateActiveIndex: function(e) {
                const t = this, s = t.rtlTranslate ? t.translate : -t.translate, { slidesGrid: a , snapGrid: i , params: r , activeIndex: n , realIndex: l , snapIndex: o  } = t;
                let d, c = e;
                if (void 0 === c) {
                    for(let e = 0; e < a.length; e += 1)void 0 !== a[e + 1] ? s >= a[e] && s < a[e + 1] - (a[e + 1] - a[e]) / 2 ? c = e : s >= a[e] && s < a[e + 1] && (c = e + 1) : s >= a[e] && (c = e);
                    r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
                }
                if (i.indexOf(s) >= 0) d = i.indexOf(s);
                else {
                    const e = Math.min(r.slidesPerGroupSkip, c);
                    d = e + Math.floor((c - e) / r.slidesPerGroup);
                }
                if (d >= i.length && (d = i.length - 1), c === n) return void (d !== o && (t.snapIndex = d, t.emit("snapIndexChange")));
                const p = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
                Object.assign(t, {
                    snapIndex: d,
                    realIndex: p,
                    previousIndex: n,
                    activeIndex: c
                }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), l !== p && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
            },
            updateClickedSlide: function(e) {
                const t = this, s = t.params, a = d1(e.target).closest(`.${s.slideClass}`)[0];
                let i, r = !1;
                if (a) {
                    for(let e30 = 0; e30 < t.slides.length; e30 += 1)if (t.slides[e30] === a) {
                        r = !0, i = e30;
                        break;
                    }
                }
                if (!a || !r) return t.clickedSlide = void 0, void (t.clickedIndex = void 0);
                t.clickedSlide = a, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(d1(a).attr("data-swiper-slide-index"), 10) : t.clickedIndex = i, s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
            }
        },
        translate: {
            getTranslate: function(e = this.isHorizontal() ? "x" : "y") {
                const { params: t , rtlTranslate: s , translate: a , $wrapperEl: i  } = this;
                if (t.virtualTranslate) return s ? -a : a;
                if (t.cssMode) return a;
                let r = h1(i[0], e);
                return s && (r = -r), r || 0;
            },
            setTranslate: function(e, t) {
                const s = this, { rtlTranslate: a , params: i , $wrapperEl: r , wrapperEl: n , progress: l  } = s;
                let o, d = 0, c = 0;
                s.isHorizontal() ? d = a ? -e : e : c = e, i.roundLengths && (d = Math.floor(d), c = Math.floor(c)), i.cssMode ? n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -d : -c : i.virtualTranslate || r.transform(`translate3d(${d}px, ${c}px, 0px)`), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? d : c;
                const p = s.maxTranslate() - s.minTranslate();
                o = 0 === p ? 0 : (e - s.minTranslate()) / p, o !== l && s.updateProgress(e), s.emit("setTranslate", s.translate, t);
            },
            minTranslate: function() {
                return -this.snapGrid[0];
            },
            maxTranslate: function() {
                return -this.snapGrid[this.snapGrid.length - 1];
            },
            translateTo: function(e31 = 0, t = this.params.speed, s = !0, a = !0, i) {
                const r = this, { params: n , wrapperEl: l  } = r;
                if (r.animating && n.preventInteractionOnTransition) return !1;
                const o = r.minTranslate(), d = r.maxTranslate();
                let c;
                if (c = a && e31 > o ? o : a && e31 < d ? d : e31, r.updateProgress(c), n.cssMode) {
                    const e = r.isHorizontal();
                    if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c;
                    else {
                        if (!r.support.smoothScroll) return v1({
                            swiper: r,
                            targetPosition: -c,
                            side: e ? "left" : "top"
                        }), !0;
                        l.scrollTo({
                            [e ? "left" : "top"]: -c,
                            behavior: "smooth"
                        });
                    }
                    return !0;
                }
                return 0 === t ? (r.setTransition(0), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(e) {
                    r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, s && r.emit("transitionEnd"));
                }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0;
            }
        },
        transition: {
            setTransition: function(e, t) {
                const s = this;
                s.params.cssMode || s.$wrapperEl.transition(e), s.emit("setTransition", e, t);
            },
            transitionStart: function(e = !0, t) {
                const s = this, { params: a  } = s;
                a.cssMode || (a.autoHeight && s.updateAutoHeight(), $1({
                    swiper: s,
                    runCallbacks: e,
                    direction: t,
                    step: "Start"
                }));
            },
            transitionEnd: function(e = !0, t) {
                const s = this, { params: a  } = s;
                s.animating = !1, a.cssMode || (s.setTransition(0), $1({
                    swiper: s,
                    runCallbacks: e,
                    direction: t,
                    step: "End"
                }));
            }
        },
        slide: {
            slideTo: function(e33 = 0, t = this.params.speed, s = !0, a, i) {
                if ("number" != typeof e33 && "string" != typeof e33) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e33}] given.`);
                if ("string" == typeof e33) {
                    const t = parseInt(e33, 10);
                    if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e33}] given.`);
                    e33 = t;
                }
                const r = this;
                let n = e33;
                n < 0 && (n = 0);
                const { params: l , snapGrid: o , slidesGrid: d , previousIndex: c , activeIndex: p , rtlTranslate: u , wrapperEl: h , enabled: m  } = r;
                if (r.animating && l.preventInteractionOnTransition || !m && !a && !i) return !1;
                const f = Math.min(r.params.slidesPerGroupSkip, n);
                let g = f + Math.floor((n - f) / r.params.slidesPerGroup);
                g >= o.length && (g = o.length - 1), (p || l.initialSlide || 0) === (c || 0) && s && r.emit("beforeSlideChangeStart");
                const w = -o[g];
                if (r.updateProgress(w), l.normalizeSlideIndex) for(let e32 = 0; e32 < d.length; e32 += 1){
                    const t = -Math.floor(100 * w), s = Math.floor(100 * d[e32]), a = Math.floor(100 * d[e32 + 1]);
                    void 0 !== d[e32 + 1] ? t >= s && t < a - (a - s) / 2 ? n = e32 : t >= s && t < a && (n = e32 + 1) : t >= s && (n = e32);
                }
                if (r.initialized && n !== p) {
                    if (!r.allowSlideNext && w < r.translate && w < r.minTranslate()) return !1;
                    if (!r.allowSlidePrev && w > r.translate && w > r.maxTranslate() && (p || 0) !== n) return !1;
                }
                let b;
                if (b = n > p ? "next" : n < p ? "prev" : "reset", u && -w === r.translate || !u && w === r.translate) return r.updateActiveIndex(n), l.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== l.effect && r.setTranslate(w), "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)), !1;
                if (l.cssMode) {
                    const e = r.isHorizontal(), s = u ? w : -w;
                    if (0 === t) {
                        const t = r.virtual && r.params.virtual.enabled;
                        t && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), h[e ? "scrollLeft" : "scrollTop"] = s, t && requestAnimationFrame(()=>{
                            r.wrapperEl.style.scrollSnapType = "", r._swiperImmediateVirtual = !1;
                        });
                    } else {
                        if (!r.support.smoothScroll) return v1({
                            swiper: r,
                            targetPosition: s,
                            side: e ? "left" : "top"
                        }), !0;
                        h.scrollTo({
                            [e ? "left" : "top"]: s,
                            behavior: "smooth"
                        });
                    }
                    return !0;
                }
                return 0 === t ? (r.setTransition(0), r.setTranslate(w), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, a), r.transitionStart(s, b), r.transitionEnd(s, b)) : (r.setTransition(t), r.setTranslate(w), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, a), r.transitionStart(s, b), r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(e) {
                    r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(s, b));
                }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd))), !0;
            },
            slideToLoop: function(e = 0, t = this.params.speed, s = !0, a) {
                const i = this;
                let r = e;
                return i.params.loop && (r += i.loopedSlides), i.slideTo(r, t, s, a);
            },
            slideNext: function(e = this.params.speed, t = !0, s) {
                const a = this, { animating: i , enabled: r , params: n  } = a;
                if (!r) return a;
                let l = n.slidesPerGroup;
                "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (l = Math.max(a.slidesPerViewDynamic("current", !0), 1));
                const o = a.activeIndex < n.slidesPerGroupSkip ? 1 : l;
                if (n.loop) {
                    if (i && n.loopPreventsSlide) return !1;
                    a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft;
                }
                return a.slideTo(a.activeIndex + o, e, t, s);
            },
            slidePrev: function(e34 = this.params.speed, t18 = !0, s11) {
                const a = this, { params: i , animating: r , snapGrid: n , slidesGrid: l , rtlTranslate: o , enabled: d  } = a;
                if (!d) return a;
                if (i.loop) {
                    if (r && i.loopPreventsSlide) return !1;
                    a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft;
                }
                function c(e) {
                    return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
                }
                const p = c(o ? a.translate : -a.translate), u = n.map((e)=>c(e)
                );
                let h = n[u.indexOf(p) - 1];
                if (void 0 === h && i.cssMode) {
                    let e;
                    n.forEach((t, s)=>{
                        p >= t && (e = s);
                    }), void 0 !== e && (h = n[e > 0 ? e - 1 : e]);
                }
                let m = 0;
                return void 0 !== h && (m = l.indexOf(h), m < 0 && (m = a.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (m = m - a.slidesPerViewDynamic("previous", !0) + 1, m = Math.max(m, 0))), a.slideTo(m, e34, t18, s11);
            },
            slideReset: function(e = this.params.speed, t = !0, s) {
                return this.slideTo(this.activeIndex, e, t, s);
            },
            slideToClosest: function(e = this.params.speed, t = !0, s, a = 0.5) {
                const i = this;
                let r = i.activeIndex;
                const n = Math.min(i.params.slidesPerGroupSkip, r), l = n + Math.floor((r - n) / i.params.slidesPerGroup), o = i.rtlTranslate ? i.translate : -i.translate;
                if (o >= i.snapGrid[l]) {
                    const e = i.snapGrid[l];
                    o - e > (i.snapGrid[l + 1] - e) * a && (r += i.params.slidesPerGroup);
                } else {
                    const e = i.snapGrid[l - 1];
                    o - e <= (i.snapGrid[l] - e) * a && (r -= i.params.slidesPerGroup);
                }
                return r = Math.max(r, 0), r = Math.min(r, i.slidesGrid.length - 1), i.slideTo(r, e, t, s);
            },
            slideToClickedSlide: function() {
                const e = this, { params: t , $wrapperEl: s  } = e, a = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                let i, r = e.clickedIndex;
                if (t.loop) {
                    if (e.animating) return;
                    i = parseInt(d1(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? r < e.loopedSlides - a / 2 || r > e.slides.length - e.loopedSlides + a / 2 ? (e.loopFix(), r = s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), p1(()=>{
                        e.slideTo(r);
                    })) : e.slideTo(r) : r > e.slides.length - a ? (e.loopFix(), r = s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), p1(()=>{
                        e.slideTo(r);
                    })) : e.slideTo(r);
                } else e.slideTo(r);
            }
        },
        loop: {
            loopCreate: function() {
                const e = this, t19 = a1(), { params: s12 , $wrapperEl: i  } = e, r = i.children().length > 0 ? d1(i.children()[0].parentNode) : i;
                r.children(`.${s12.slideClass}.${s12.slideDuplicateClass}`).remove();
                let n = r.children(`.${s12.slideClass}`);
                if (s12.loopFillGroupWithBlank) {
                    const e = s12.slidesPerGroup - n.length % s12.slidesPerGroup;
                    if (e !== s12.slidesPerGroup) {
                        for(let a = 0; a < e; a += 1){
                            const e = d1(t19.createElement("div")).addClass(`${s12.slideClass} ${s12.slideBlankClass}`);
                            r.append(e);
                        }
                        n = r.children(`.${s12.slideClass}`);
                    }
                }
                "auto" !== s12.slidesPerView || s12.loopedSlides || (s12.loopedSlides = n.length), e.loopedSlides = Math.ceil(parseFloat(s12.loopedSlides || s12.slidesPerView, 10)), e.loopedSlides += s12.loopAdditionalSlides, e.loopedSlides > n.length && (e.loopedSlides = n.length);
                const l = [], o = [];
                n.each((t, s)=>{
                    const a = d1(t);
                    s < e.loopedSlides && o.push(t), s < n.length && s >= n.length - e.loopedSlides && l.push(t), a.attr("data-swiper-slide-index", s);
                });
                for(let e35 = 0; e35 < o.length; e35 += 1)r.append(d1(o[e35].cloneNode(!0)).addClass(s12.slideDuplicateClass));
                for(let e36 = l.length - 1; e36 >= 0; e36 -= 1)r.prepend(d1(l[e36].cloneNode(!0)).addClass(s12.slideDuplicateClass));
            },
            loopFix: function() {
                const e = this;
                e.emit("beforeLoopFix");
                const { activeIndex: t , slides: s , loopedSlides: a , allowSlidePrev: i , allowSlideNext: r , snapGrid: n , rtlTranslate: l  } = e;
                let o;
                e.allowSlidePrev = !0, e.allowSlideNext = !0;
                const d = -n[t] - e.getTranslate();
                if (t < a) {
                    o = s.length - 3 * a + t, o += a;
                    e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d);
                } else if (t >= s.length - a) {
                    o = -s.length + t + a, o += a;
                    e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d);
                }
                e.allowSlidePrev = i, e.allowSlideNext = r, e.emit("loopFix");
            },
            loopDestroy: function() {
                const { $wrapperEl: e , params: t , slides: s  } = this;
                e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), s.removeAttr("data-swiper-slide-index");
            }
        },
        grabCursor: {
            setGrabCursor: function(e) {
                const t = this;
                if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                s.style.cursor = "move", s.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", s.style.cursor = e ? "-moz-grabbin" : "-moz-grab", s.style.cursor = e ? "grabbing" : "grab";
            },
            unsetGrabCursor: function() {
                const e = this;
                e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "");
            }
        },
        events: {
            attachEvents: function() {
                const e = this, t = a1(), { params: s , support: i  } = e;
                e.onTouchStart = S1.bind(e), e.onTouchMove = M1.bind(e), e.onTouchEnd = P1.bind(e), s.cssMode && (e.onScroll = O1.bind(e)), e.onClick = z1.bind(e), i.touch && !I1 && (t.addEventListener("touchstart", L), I1 = !0), A(e, "on");
            },
            detachEvents: function() {
                A(this, "off");
            }
        },
        breakpoints: {
            setBreakpoint: function() {
                const e = this, { activeIndex: t , initialized: s , loopedSlides: a = 0 , params: i , $el: r  } = e, n = i.breakpoints;
                if (!n || n && 0 === Object.keys(n).length) return;
                const l = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
                if (!l || e.currentBreakpoint === l) return;
                const o = (l in n ? n[l] : void 0) || e.originalParams, d = D(e, i), c = D(e, o), p = i.enabled;
                d && !c ? (r.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !d && c && (r.addClass(`${i.containerModifierClass}grid`), (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === i.grid.fill) && r.addClass(`${i.containerModifierClass}grid-column`), e.emitContainerClasses());
                const u = o.direction && o.direction !== i.direction, h = i.loop && (o.slidesPerView !== i.slidesPerView || u);
                u && s && e.changeDirection(), f1(e.params, o);
                const m = e.params.enabled;
                Object.assign(e, {
                    allowTouchMove: e.params.allowTouchMove,
                    allowSlideNext: e.params.allowSlideNext,
                    allowSlidePrev: e.params.allowSlidePrev
                }), p && !m ? e.disable() : !p && m && e.enable(), e.currentBreakpoint = l, e.emit("_beforeBreakpoint", o), h && s && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - a + e.loopedSlides, 0, !1)), e.emit("breakpoint", o);
            },
            getBreakpoint: function(e38, t20 = "window", s) {
                if (!e38 || "container" === t20 && !s) return;
                let a = !1;
                const i = r1(), n = "window" === t20 ? i.innerHeight : s.clientHeight, l = Object.keys(e38).map((e)=>{
                    if ("string" == typeof e && 0 === e.indexOf("@")) {
                        const t = parseFloat(e.substr(1));
                        return {
                            value: n * t,
                            point: e
                        };
                    }
                    return {
                        value: e,
                        point: e
                    };
                });
                l.sort((e, t)=>parseInt(e.value, 10) - parseInt(t.value, 10)
                );
                for(let e37 = 0; e37 < l.length; e37 += 1){
                    const { point: r , value: n  } = l[e37];
                    "window" === t20 ? i.matchMedia(`(min-width: ${n}px)`).matches && (a = r) : n <= s.clientWidth && (a = r);
                }
                return a || "max";
            }
        },
        checkOverflow: {
            checkOverflow: function() {
                const e = this, { isLocked: t , params: s  } = e, { slidesOffsetBefore: a  } = s;
                if (a) {
                    const t = e.slides.length - 1, s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * a;
                    e.isLocked = e.size > s;
                } else e.isLocked = 1 === e.snapGrid.length;
                !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
            }
        },
        classes: {
            addClasses: function() {
                const e39 = this, { classNames: t21 , params: s13 , rtl: a2 , $el: i , device: r , support: n  } = e39, l = function(e40, t) {
                    const s = [];
                    return e40.forEach((e)=>{
                        "object" == typeof e ? Object.keys(e).forEach((a)=>{
                            e[a] && s.push(t + a);
                        }) : "string" == typeof e && s.push(t + e);
                    }), s;
                }([
                    "initialized",
                    s13.direction,
                    {
                        "pointer-events": !n.touch
                    },
                    {
                        "free-mode": e39.params.freeMode && s13.freeMode.enabled
                    },
                    {
                        autoheight: s13.autoHeight
                    },
                    {
                        rtl: a2
                    },
                    {
                        grid: s13.grid && s13.grid.rows > 1
                    },
                    {
                        "grid-column": s13.grid && s13.grid.rows > 1 && "column" === s13.grid.fill
                    },
                    {
                        android: r.android
                    },
                    {
                        ios: r.ios
                    },
                    {
                        "css-mode": s13.cssMode
                    },
                    {
                        centered: s13.cssMode && s13.centeredSlides
                    }
                ], s13.containerModifierClass);
                t21.push(...l), i.addClass([
                    ...t21
                ].join(" ")), e39.emitContainerClasses();
            },
            removeClasses: function() {
                const { $el: e , classNames: t  } = this;
                e.removeClass(t.join(" ")), this.emitContainerClasses();
            }
        },
        images: {
            loadImage: function(e, t, s, a, i, n) {
                const l = r1();
                let o;
                function c() {
                    n && n();
                }
                d1(e).parent("picture")[0] || e.complete && i ? c() : t ? (o = new l.Image, o.onload = c, o.onerror = c, a && (o.sizes = a), s && (o.srcset = s), t && (o.src = t)) : c();
            },
            preloadImages: function() {
                const e = this;
                function t() {
                    null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
                }
                e.imagesToLoad = e.$el.find("img");
                for(let s = 0; s < e.imagesToLoad.length; s += 1){
                    const a = e.imagesToLoad[s];
                    e.loadImage(a, a.currentSrc || a.getAttribute("src"), a.srcset || a.getAttribute("srcset"), a.sizes || a.getAttribute("sizes"), !0, t);
                }
            }
        }
    }, X = {
    };
    class H {
        constructor(...e41){
            let t22, s;
            if (1 === e41.length && e41[0].constructor && "Object" === Object.prototype.toString.call(e41[0]).slice(8, -1) ? s = e41[0] : [t22, s] = e41, s || (s = {
            }), s = f1({
            }, s), t22 && !s.el && (s.el = t22), s.el && d1(s.el).length > 1) {
                const e = [];
                return d1(s.el).each((t)=>{
                    const a = f1({
                    }, s, {
                        el: t
                    });
                    e.push(new H(a));
                }), e;
            }
            const a3 = this;
            a3.__swiper__ = !0, a3.support = y1(), a3.device = E1({
                userAgent: s.userAgent
            }), a3.browser = T1(), a3.eventsListeners = {
            }, a3.eventsAnyListeners = [], a3.modules = [
                ...a3.__modules__
            ], s.modules && Array.isArray(s.modules) && a3.modules.push(...s.modules);
            const i = {
            };
            a3.modules.forEach((e)=>{
                e({
                    swiper: a3,
                    extendParams: N(s, i),
                    on: a3.on.bind(a3),
                    once: a3.once.bind(a3),
                    off: a3.off.bind(a3),
                    emit: a3.emit.bind(a3)
                });
            });
            const r = f1({
            }, G, i);
            return a3.params = f1({
            }, r, X, s), a3.originalParams = f1({
            }, a3.params), a3.passedParams = f1({
            }, s), a3.params && a3.params.on && Object.keys(a3.params.on).forEach((e)=>{
                a3.on(e, a3.params.on[e]);
            }), a3.params && a3.params.onAny && a3.onAny(a3.params.onAny), a3.$ = d1, Object.assign(a3, {
                enabled: a3.params.enabled,
                el: t22,
                classNames: [],
                slides: d1(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: ()=>"horizontal" === a3.params.direction
                ,
                isVertical: ()=>"vertical" === a3.params.direction
                ,
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: a3.params.allowSlideNext,
                allowSlidePrev: a3.params.allowSlidePrev,
                touchEvents: function() {
                    const e = [
                        "touchstart",
                        "touchmove",
                        "touchend",
                        "touchcancel"
                    ], t = [
                        "pointerdown",
                        "pointermove",
                        "pointerup"
                    ];
                    return a3.touchEventsTouch = {
                        start: e[0],
                        move: e[1],
                        end: e[2],
                        cancel: e[3]
                    }, a3.touchEventsDesktop = {
                        start: t[0],
                        move: t[1],
                        end: t[2]
                    }, a3.support.touch || !a3.params.simulateTouch ? a3.touchEventsTouch : a3.touchEventsDesktop;
                }(),
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: a3.params.focusableElements,
                    lastClickTime: u1(),
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    isTouchEvent: void 0,
                    startMoving: void 0
                },
                allowClick: !0,
                allowTouchMove: a3.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                },
                imagesToLoad: [],
                imagesLoaded: 0
            }), a3.emit("_swiper"), a3.params.init && a3.init(), a3;
        }
        enable() {
            const e = this;
            e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
        }
        disable() {
            const e = this;
            e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
        }
        setProgress(e43, t24) {
            const s = this;
            e43 = Math.min(Math.max(e43, 0), 1);
            const a = s.minTranslate(), i = (s.maxTranslate() - a) * e43 + a;
            s.translateTo(i, void 0 === t24 ? 0 : t24), s.updateActiveIndex(), s.updateSlidesClasses();
        }
        emitContainerClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t23 = e.el.className.split(" ").filter((t)=>0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)
            );
            e.emit("_containerClasses", t23.join(" "));
        }
        getSlideClasses(e42) {
            const t = this;
            return e42.className.split(" ").filter((e)=>0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)
            ).join(" ");
        }
        emitSlidesClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = [];
            e.slides.each((s)=>{
                const a = e.getSlideClasses(s);
                t.push({
                    slideEl: s,
                    classNames: a
                }), e.emit("_slideClass", s, a);
            }), e.emit("_slideClasses", t);
        }
        slidesPerViewDynamic(e48 = "current", t27 = !1) {
            const { params: s , slides: a , slidesGrid: i , slidesSizesGrid: r , size: n , activeIndex: l  } = this;
            let o = 1;
            if (s.centeredSlides) {
                let e, t = a[l].swiperSlideSize;
                for(let s = l + 1; s < a.length; s += 1)a[s] && !e && (t += a[s].swiperSlideSize, o += 1, t > n && (e = !0));
                for(let s14 = l - 1; s14 >= 0; s14 -= 1)a[s14] && !e && (t += a[s14].swiperSlideSize, o += 1, t > n && (e = !0));
            } else if ("current" === e48) for(let e45 = l + 1; e45 < a.length; e45 += 1)(t27 ? i[e45] + r[e45] - i[l] < n : i[e45] - i[l] < n) && (o += 1);
            else for(let e44 = l - 1; e44 >= 0; e44 -= 1)i[l] - i[e44] < n && (o += 1);
            return o;
        }
        update() {
            const e = this;
            if (!e || e.destroyed) return;
            const { snapGrid: t25 , params: s15  } = e;
            function a() {
                const t = e.rtlTranslate ? -1 * e.translate : e.translate, s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
            }
            let i;
            s15.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (a(), e.params.autoHeight && e.updateAutoHeight()) : (i = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), i || a()), s15.watchOverflow && t25 !== e.snapGrid && e.checkOverflow(), e.emit("update");
        }
        changeDirection(e46, t26 = !0) {
            const s = this, a = s.params.direction;
            return e46 || (e46 = "horizontal" === a ? "vertical" : "horizontal"), e46 === a || "horizontal" !== e46 && "vertical" !== e46 || (s.$el.removeClass(`${s.params.containerModifierClass}${a}`).addClass(`${s.params.containerModifierClass}${e46}`), s.emitContainerClasses(), s.params.direction = e46, s.slides.each((t)=>{
                "vertical" === e46 ? t.style.width = "" : t.style.height = "";
            }), s.emit("changeDirection"), t26 && s.update()), s;
        }
        mount(e47) {
            const t28 = this;
            if (t28.mounted) return !0;
            const s = d1(e47 || t28.params.el);
            if (!(e47 = s[0])) return !1;
            e47.swiper = t28;
            const i = ()=>`.${(t28.params.wrapperClass || "").trim().split(" ").join(".")}`
            ;
            let r = (()=>{
                if (e47 && e47.shadowRoot && e47.shadowRoot.querySelector) {
                    const t = d1(e47.shadowRoot.querySelector(i()));
                    return t.children = (e)=>s.children(e)
                    , t;
                }
                return s.children(i());
            })();
            if (0 === r.length && t28.params.createElements) {
                const e49 = a1().createElement("div");
                r = d1(e49), e49.className = t28.params.wrapperClass, s.append(e49), s.children(`.${t28.params.slideClass}`).each((e)=>{
                    r.append(e);
                });
            }
            return Object.assign(t28, {
                $el: s,
                el: e47,
                $wrapperEl: r,
                wrapperEl: r[0],
                mounted: !0,
                rtl: "rtl" === e47.dir.toLowerCase() || "rtl" === s.css("direction"),
                rtlTranslate: "horizontal" === t28.params.direction && ("rtl" === e47.dir.toLowerCase() || "rtl" === s.css("direction")),
                wrongRTL: "-webkit-box" === r.css("display")
            }), !0;
        }
        init(e51) {
            const t = this;
            if (t.initialized) return t;
            return !1 === t.mount(e51) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t;
        }
        destroy(e50 = !0, t29 = !0) {
            const s = this, { params: a , $el: i , $wrapperEl: r , slides: n  } = s;
            return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), a.loop && s.loopDestroy(), t29 && (s.removeClasses(), i.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([
                a.slideVisibleClass,
                a.slideActiveClass,
                a.slideNextClass,
                a.slidePrevClass
            ].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((e)=>{
                s.off(e);
            }), !1 !== e50 && (s.$el[0].swiper = null, (function(e) {
                const t = e;
                Object.keys(t).forEach((e)=>{
                    try {
                        t[e] = null;
                    } catch (e52) {
                    }
                    try {
                        delete t[e];
                    } catch (e53) {
                    }
                });
            })(s)), s.destroyed = !0), null;
        }
        static extendDefaults(e56) {
            f1(X, e56);
        }
        static get extendedDefaults() {
            return X;
        }
        static get defaults() {
            return G;
        }
        static installModule(e54) {
            H.prototype.__modules__ || (H.prototype.__modules__ = []);
            const t = H.prototype.__modules__;
            "function" == typeof e54 && t.indexOf(e54) < 0 && t.push(e54);
        }
        static use(e55) {
            return Array.isArray(e55) ? (e55.forEach((e)=>H.installModule(e)
            ), H) : (H.installModule(e55), H);
        }
    }
    function Y(e, t, s, i) {
        const r = a1();
        return e.params.createElements && Object.keys(i).forEach((a)=>{
            if (!s[a] && !0 === s.auto) {
                let n = e.$el.children(`.${i[a]}`)[0];
                n || (n = r.createElement("div"), n.className = i[a], e.$el.append(n)), s[a] = n, t[a] = n;
            }
        }), s;
    }
    function W(e = "") {
        return `.${e.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`;
    }
    function R(e) {
        const t = this, { $wrapperEl: s , params: a  } = t;
        if (a.loop && t.loopDestroy(), "object" == typeof e && "length" in e) for(let t30 = 0; t30 < e.length; t30 += 1)e[t30] && s.append(e[t30]);
        else s.append(e);
        a.loop && t.loopCreate(), a.observer || t.update();
    }
    function j(e) {
        const t = this, { params: s , $wrapperEl: a , activeIndex: i  } = t;
        s.loop && t.loopDestroy();
        let r = i + 1;
        if ("object" == typeof e && "length" in e) {
            for(let t = 0; t < e.length; t += 1)e[t] && a.prepend(e[t]);
            r = i + e.length;
        } else a.prepend(e);
        s.loop && t.loopCreate(), s.observer || t.update(), t.slideTo(r, 0, !1);
    }
    function _(e, t) {
        const s = this, { $wrapperEl: a , params: i , activeIndex: r  } = s;
        let n = r;
        i.loop && (n -= s.loopedSlides, s.loopDestroy(), s.slides = a.children(`.${i.slideClass}`));
        const l = s.slides.length;
        if (e <= 0) return void s.prependSlide(t);
        if (e >= l) return void s.appendSlide(t);
        let o = n > e ? n + 1 : n;
        const d = [];
        for(let t31 = l - 1; t31 >= e; t31 -= 1){
            const e = s.slides.eq(t31);
            e.remove(), d.unshift(e);
        }
        if ("object" == typeof t && "length" in t) {
            for(let e58 = 0; e58 < t.length; e58 += 1)t[e58] && a.append(t[e58]);
            o = n > e ? n + t.length : n;
        } else a.append(t);
        for(let e57 = 0; e57 < d.length; e57 += 1)a.append(d[e57]);
        i.loop && s.loopCreate(), i.observer || s.update(), i.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1);
    }
    function V(e) {
        const t = this, { params: s , $wrapperEl: a , activeIndex: i  } = t;
        let r = i;
        s.loop && (r -= t.loopedSlides, t.loopDestroy(), t.slides = a.children(`.${s.slideClass}`));
        let n, l = r;
        if ("object" == typeof e && "length" in e) {
            for(let s = 0; s < e.length; s += 1)n = e[s], t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1);
            l = Math.max(l, 0);
        } else n = e, t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1), l = Math.max(l, 0);
        s.loop && t.loopCreate(), s.observer || t.update(), s.loop ? t.slideTo(l + t.loopedSlides, 0, !1) : t.slideTo(l, 0, !1);
    }
    function q() {
        const e = this, t = [];
        for(let s = 0; s < e.slides.length; s += 1)t.push(s);
        e.removeSlide(t);
    }
    function F(e59) {
        const { effect: t , swiper: s , on: a4 , setTranslate: i , setTransition: r , overwriteParams: n , perspective: l  } = e59;
        a4("beforeInit", ()=>{
            if (s.params.effect !== t) return;
            s.classNames.push(`${s.params.containerModifierClass}${t}`), l && l() && s.classNames.push(`${s.params.containerModifierClass}3d`);
            const e = n ? n() : {
            };
            Object.assign(s.params, e), Object.assign(s.originalParams, e);
        }), a4("setTranslate", ()=>{
            s.params.effect === t && i();
        }), a4("setTransition", (e, a)=>{
            s.params.effect === t && r(a);
        });
    }
    function U(e, t) {
        return e.transformEl ? t.find(e.transformEl).css({
            "backface-visibility": "hidden",
            "-webkit-backface-visibility": "hidden"
        }) : t;
    }
    function K({ swiper: e , duration: t33 , transformEl: s , allSlides: a  }) {
        const { slides: i , activeIndex: r , $wrapperEl: n  } = e;
        if (e.params.virtualTranslate && 0 !== t33) {
            let t32, l = !1;
            t32 = a ? s ? i.find(s) : i : s ? i.eq(r).find(s) : i.eq(r), t32.transitionEnd(()=>{
                if (l) return;
                if (!e || e.destroyed) return;
                l = !0, e.animating = !1;
                const t = [
                    "webkitTransitionEnd",
                    "transitionend"
                ];
                for(let e60 = 0; e60 < t.length; e60 += 1)n.trigger(t[e60]);
            });
        }
    }
    function Z(e, t, s) {
        const a = "swiper-slide-shadow" + (s ? `-${s}` : ""), i = e.transformEl ? t.find(e.transformEl) : t;
        let r = i.children(`.${a}`);
        return r.length || (r = d1(`<div class="swiper-slide-shadow${s ? `-${s}` : ""}"></div>`), i.append(r)), r;
    }
    Object.keys(B).forEach((e)=>{
        Object.keys(B[e]).forEach((t)=>{
            H.prototype[t] = B[e][t];
        });
    }), H.use([
        function({ swiper: e , on: t34 , emit: s16  }) {
            const a5 = r1();
            let i4 = null;
            const n = ()=>{
                e && !e.destroyed && e.initialized && (s16("beforeResize"), s16("resize"));
            }, l = ()=>{
                e && !e.destroyed && e.initialized && s16("orientationchange");
            };
            t34("init", ()=>{
                e.params.resizeObserver && void 0 !== a5.ResizeObserver ? e && !e.destroyed && e.initialized && (i4 = new ResizeObserver((t35)=>{
                    const { width: s17 , height: a6  } = e;
                    let i = s17, r = a6;
                    t35.forEach(({ contentBoxSize: t , contentRect: s , target: a  })=>{
                        a && a !== e.el || (i = s ? s.width : (t[0] || t).inlineSize, r = s ? s.height : (t[0] || t).blockSize);
                    }), i === s17 && r === a6 || n();
                }), i4.observe(e.el)) : (a5.addEventListener("resize", n), a5.addEventListener("orientationchange", l));
            }), t34("destroy", ()=>{
                i4 && i4.unobserve && e.el && (i4.unobserve(e.el), i4 = null), a5.removeEventListener("resize", n), a5.removeEventListener("orientationchange", l);
            });
        },
        function({ swiper: e61 , extendParams: t36 , on: s18 , emit: a  }) {
            const i = [], n = r1(), l = (e62, t37 = {
            })=>{
                const s = new (n.MutationObserver || n.WebkitMutationObserver)((e)=>{
                    if (1 === e.length) return void a("observerUpdate", e[0]);
                    const t = function() {
                        a("observerUpdate", e[0]);
                    };
                    n.requestAnimationFrame ? n.requestAnimationFrame(t) : n.setTimeout(t, 0);
                });
                s.observe(e62, {
                    attributes: void 0 === t37.attributes || t37.attributes,
                    childList: void 0 === t37.childList || t37.childList,
                    characterData: void 0 === t37.characterData || t37.characterData
                }), i.push(s);
            };
            t36({
                observer: !1,
                observeParents: !1,
                observeSlideChildren: !1
            }), s18("init", ()=>{
                if (e61.params.observer) {
                    if (e61.params.observeParents) {
                        const t = e61.$el.parents();
                        for(let e = 0; e < t.length; e += 1)l(t[e]);
                    }
                    l(e61.$el[0], {
                        childList: e61.params.observeSlideChildren
                    }), l(e61.$wrapperEl[0], {
                        attributes: !1
                    });
                }
            }), s18("destroy", ()=>{
                i.forEach((e)=>{
                    e.disconnect();
                }), i.splice(0, i.length);
            });
        }
    ]);
    const J = [
        function({ swiper: e64 , extendParams: t38 , on: s19  }) {
            let a7;
            function i5(t, s) {
                const a = e64.params.virtual;
                if (a.cache && e64.virtual.cache[s]) return e64.virtual.cache[s];
                const i = a.renderSlide ? d1(a.renderSlide.call(e64, t, s)) : d1(`<div class="${e64.params.slideClass}" data-swiper-slide-index="${s}">${t}</div>`);
                return i.attr("data-swiper-slide-index") || i.attr("data-swiper-slide-index", s), a.cache && (e64.virtual.cache[s] = i), i;
            }
            function r2(t40) {
                const { slidesPerView: s , slidesPerGroup: a , centeredSlides: r  } = e64.params, { addSlidesBefore: n , addSlidesAfter: l  } = e64.params.virtual, { from: o , to: d , slides: c , slidesGrid: p , offset: u  } = e64.virtual;
                e64.params.cssMode || e64.updateActiveIndex();
                const h = e64.activeIndex || 0;
                let m, f, g;
                m = e64.rtlTranslate ? "right" : e64.isHorizontal() ? "left" : "top", r ? (f = Math.floor(s / 2) + a + l, g = Math.floor(s / 2) + a + n) : (f = s + (a - 1) + l, g = a + n);
                const v = Math.max((h || 0) - g, 0), w = Math.min((h || 0) + f, c.length - 1), b = (e64.slidesGrid[v] || 0) - (e64.slidesGrid[0] || 0);
                function x() {
                    e64.updateSlides(), e64.updateProgress(), e64.updateSlidesClasses(), e64.lazy && e64.params.lazy.enabled && e64.lazy.load();
                }
                if (Object.assign(e64.virtual, {
                    from: v,
                    to: w,
                    offset: b,
                    slidesGrid: e64.slidesGrid
                }), o === v && d === w && !t40) return e64.slidesGrid !== p && b !== u && e64.slides.css(m, `${b}px`), void e64.updateProgress();
                if (e64.params.virtual.renderExternal) return e64.params.virtual.renderExternal.call(e64, {
                    offset: b,
                    from: v,
                    to: w,
                    slides: function() {
                        const e = [];
                        for(let t = v; t <= w; t += 1)e.push(c[t]);
                        return e;
                    }()
                }), void (e64.params.virtual.renderExternalUpdate && x());
                const y = [], E = [];
                if (t40) e64.$wrapperEl.find(`.${e64.params.slideClass}`).remove();
                else for(let t39 = o; t39 <= d; t39 += 1)(t39 < v || t39 > w) && e64.$wrapperEl.find(`.${e64.params.slideClass}[data-swiper-slide-index="${t39}"]`).remove();
                for(let e63 = 0; e63 < c.length; e63 += 1)e63 >= v && e63 <= w && (void 0 === d || t40 ? E.push(e63) : (e63 > d && E.push(e63), e63 < o && y.push(e63)));
                E.forEach((t)=>{
                    e64.$wrapperEl.append(i5(c[t], t));
                }), y.sort((e, t)=>t - e
                ).forEach((t)=>{
                    e64.$wrapperEl.prepend(i5(c[t], t));
                }), e64.$wrapperEl.children(".swiper-slide").css(m, `${b}px`), x();
            }
            t38({
                virtual: {
                    enabled: !1,
                    slides: [],
                    cache: !0,
                    renderSlide: null,
                    renderExternal: null,
                    renderExternalUpdate: !0,
                    addSlidesBefore: 0,
                    addSlidesAfter: 0
                }
            }), e64.virtual = {
                cache: {
                },
                from: void 0,
                to: void 0,
                slides: [],
                offset: 0,
                slidesGrid: []
            }, s19("beforeInit", ()=>{
                e64.params.virtual.enabled && (e64.virtual.slides = e64.params.virtual.slides, e64.classNames.push(`${e64.params.containerModifierClass}virtual`), e64.params.watchSlidesProgress = !0, e64.originalParams.watchSlidesProgress = !0, e64.params.initialSlide || r2());
            }), s19("setTranslate", ()=>{
                e64.params.virtual.enabled && (e64.params.cssMode && !e64._immediateVirtual ? (clearTimeout(a7), a7 = setTimeout(()=>{
                    r2();
                }, 100)) : r2());
            }), s19("init update resize", ()=>{
                e64.params.virtual.enabled && e64.params.cssMode && g1(e64.wrapperEl, "--swiper-virtual-size", `${e64.virtualSize}px`);
            }), Object.assign(e64.virtual, {
                appendSlide: function(t) {
                    if ("object" == typeof t && "length" in t) for(let s = 0; s < t.length; s += 1)t[s] && e64.virtual.slides.push(t[s]);
                    else e64.virtual.slides.push(t);
                    r2(!0);
                },
                prependSlide: function(t) {
                    const s = e64.activeIndex;
                    let a8 = s + 1, i = 1;
                    if (Array.isArray(t)) {
                        for(let s20 = 0; s20 < t.length; s20 += 1)t[s20] && e64.virtual.slides.unshift(t[s20]);
                        a8 = s + t.length, i = t.length;
                    } else e64.virtual.slides.unshift(t);
                    if (e64.params.virtual.cache) {
                        const t = e64.virtual.cache, s = {
                        };
                        Object.keys(t).forEach((e)=>{
                            const a = t[e], r = a.attr("data-swiper-slide-index");
                            r && a.attr("data-swiper-slide-index", parseInt(r, 10) + i), s[parseInt(e, 10) + i] = a;
                        }), e64.virtual.cache = s;
                    }
                    r2(!0), e64.slideTo(a8, 0);
                },
                removeSlide: function(t) {
                    if (null == t) return;
                    let s = e64.activeIndex;
                    if (Array.isArray(t)) for(let a = t.length - 1; a >= 0; a -= 1)e64.virtual.slides.splice(t[a], 1), e64.params.virtual.cache && delete e64.virtual.cache[t[a]], t[a] < s && (s -= 1), s = Math.max(s, 0);
                    else e64.virtual.slides.splice(t, 1), e64.params.virtual.cache && delete e64.virtual.cache[t], t < s && (s -= 1), s = Math.max(s, 0);
                    r2(!0), e64.slideTo(s, 0);
                },
                removeAllSlides: function() {
                    e64.virtual.slides = [], e64.params.virtual.cache && (e64.virtual.cache = {
                    }), r2(!0), e64.slideTo(0, 0);
                },
                update: r2
            });
        },
        function({ swiper: e , extendParams: t41 , on: s21 , emit: i6  }) {
            const n2 = a1(), l = r1();
            function o2(t) {
                if (!e.enabled) return;
                const { rtlTranslate: s  } = e;
                let a = t;
                a.originalEvent && (a = a.originalEvent);
                const r = a.keyCode || a.charCode, o = e.params.keyboard.pageUpDown, d = o && 33 === r, c = o && 34 === r, p = 37 === r, u = 39 === r, h = 38 === r, m = 40 === r;
                if (!e.allowSlideNext && (e.isHorizontal() && u || e.isVertical() && m || c)) return !1;
                if (!e.allowSlidePrev && (e.isHorizontal() && p || e.isVertical() && h || d)) return !1;
                if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || n2.activeElement && n2.activeElement.nodeName && ("input" === n2.activeElement.nodeName.toLowerCase() || "textarea" === n2.activeElement.nodeName.toLowerCase()))) {
                    if (e.params.keyboard.onlyInViewport && (d || c || p || u || h || m)) {
                        let t = !1;
                        if (e.$el.parents(`.${e.params.slideClass}`).length > 0 && 0 === e.$el.parents(`.${e.params.slideActiveClass}`).length) return;
                        const a = e.$el, i = a[0].clientWidth, r = a[0].clientHeight, n = l.innerWidth, o = l.innerHeight, d = e.$el.offset();
                        s && (d.left -= e.$el[0].scrollLeft);
                        const c = [
                            [
                                d.left,
                                d.top
                            ],
                            [
                                d.left + i,
                                d.top
                            ],
                            [
                                d.left,
                                d.top + r
                            ],
                            [
                                d.left + i,
                                d.top + r
                            ]
                        ];
                        for(let e65 = 0; e65 < c.length; e65 += 1){
                            const s = c[e65];
                            if (s[0] >= 0 && s[0] <= n && s[1] >= 0 && s[1] <= o) {
                                if (0 === s[0] && 0 === s[1]) continue;
                                t = !0;
                            }
                        }
                        if (!t) return;
                    }
                    e.isHorizontal() ? ((d || c || p || u) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), ((c || u) && !s || (d || p) && s) && e.slideNext(), ((d || p) && !s || (c || u) && s) && e.slidePrev()) : ((d || c || h || m) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (c || m) && e.slideNext(), (d || h) && e.slidePrev()), i6("keyPress", r);
                }
            }
            function c2() {
                e.keyboard.enabled || (d1(n2).on("keydown", o2), e.keyboard.enabled = !0);
            }
            function p2() {
                e.keyboard.enabled && (d1(n2).off("keydown", o2), e.keyboard.enabled = !1);
            }
            e.keyboard = {
                enabled: !1
            }, t41({
                keyboard: {
                    enabled: !1,
                    onlyInViewport: !0,
                    pageUpDown: !0
                }
            }), s21("init", ()=>{
                e.params.keyboard.enabled && c2();
            }), s21("destroy", ()=>{
                e.keyboard.enabled && p2();
            }), Object.assign(e.keyboard, {
                enable: c2,
                disable: p2
            });
        },
        function({ swiper: e66 , extendParams: t42 , on: s22 , emit: a9  }) {
            const i7 = r1();
            let n;
            t42({
                mousewheel: {
                    enabled: !1,
                    releaseOnEdges: !1,
                    invert: !1,
                    forceToAxis: !1,
                    sensitivity: 1,
                    eventsTarget: "container",
                    thresholdDelta: null,
                    thresholdTime: null
                }
            }), e66.mousewheel = {
                enabled: !1
            };
            let l, o3 = u1();
            const c = [];
            function h2() {
                e66.enabled && (e66.mouseEntered = !0);
            }
            function m2() {
                e66.enabled && (e66.mouseEntered = !1);
            }
            function f(t) {
                return !(e66.params.mousewheel.thresholdDelta && t.delta < e66.params.mousewheel.thresholdDelta) && !(e66.params.mousewheel.thresholdTime && u1() - o3 < e66.params.mousewheel.thresholdTime) && (t.delta >= 6 && u1() - o3 < 60 || (t.direction < 0 ? e66.isEnd && !e66.params.loop || e66.animating || (e66.slideNext(), a9("scroll", t.raw)) : e66.isBeginning && !e66.params.loop || e66.animating || (e66.slidePrev(), a9("scroll", t.raw)), o3 = (new i7.Date).getTime(), !1));
            }
            function g2(t43) {
                let s23 = t43, i8 = !0;
                if (!e66.enabled) return;
                const r = e66.params.mousewheel;
                e66.params.cssMode && s23.preventDefault();
                let o = e66.$el;
                if ("container" !== e66.params.mousewheel.eventsTarget && (o = d1(e66.params.mousewheel.eventsTarget)), !e66.mouseEntered && !o[0].contains(s23.target) && !r.releaseOnEdges) return !0;
                s23.originalEvent && (s23 = s23.originalEvent);
                let h = 0;
                const m = e66.rtlTranslate ? -1 : 1, g = function(e) {
                    let t = 0, s = 0, a = 0, i = 0;
                    return "detail" in e && (s = e.detail), "wheelDelta" in e && (s = -e.wheelDelta / 120), "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = s, s = 0), a = 10 * t, i = 10 * s, "deltaY" in e && (i = e.deltaY), "deltaX" in e && (a = e.deltaX), e.shiftKey && !a && (a = i, i = 0), (a || i) && e.deltaMode && (1 === e.deltaMode ? (a *= 40, i *= 40) : (a *= 800, i *= 800)), a && !t && (t = a < 1 ? -1 : 1), i && !s && (s = i < 1 ? -1 : 1), {
                        spinX: t,
                        spinY: s,
                        pixelX: a,
                        pixelY: i
                    };
                }(s23);
                if (r.forceToAxis) {
                    if (e66.isHorizontal()) {
                        if (!(Math.abs(g.pixelX) > Math.abs(g.pixelY))) return !0;
                        h = -g.pixelX * m;
                    } else {
                        if (!(Math.abs(g.pixelY) > Math.abs(g.pixelX))) return !0;
                        h = -g.pixelY;
                    }
                } else h = Math.abs(g.pixelX) > Math.abs(g.pixelY) ? -g.pixelX * m : -g.pixelY;
                if (0 === h) return !0;
                r.invert && (h = -h);
                let v = e66.getTranslate() + h * r.sensitivity;
                if (v >= e66.minTranslate() && (v = e66.minTranslate()), v <= e66.maxTranslate() && (v = e66.maxTranslate()), i8 = !!e66.params.loop || !(v === e66.minTranslate() || v === e66.maxTranslate()), i8 && e66.params.nested && s23.stopPropagation(), e66.params.freeMode && e66.params.freeMode.enabled) {
                    const t = {
                        time: u1(),
                        delta: Math.abs(h),
                        direction: Math.sign(h)
                    }, i = l && t.time < l.time + 500 && t.delta <= l.delta && t.direction === l.direction;
                    if (!i) {
                        l = void 0, e66.params.loop && e66.loopFix();
                        let o = e66.getTranslate() + h * r.sensitivity;
                        const d = e66.isBeginning, u = e66.isEnd;
                        if (o >= e66.minTranslate() && (o = e66.minTranslate()), o <= e66.maxTranslate() && (o = e66.maxTranslate()), e66.setTransition(0), e66.setTranslate(o), e66.updateProgress(), e66.updateActiveIndex(), e66.updateSlidesClasses(), (!d && e66.isBeginning || !u && e66.isEnd) && e66.updateSlidesClasses(), e66.params.freeMode.sticky) {
                            clearTimeout(n), n = void 0, c.length >= 15 && c.shift();
                            const s = c.length ? c[c.length - 1] : void 0, a = c[0];
                            if (c.push(t), s && (t.delta > s.delta || t.direction !== s.direction)) c.splice(0);
                            else if (c.length >= 15 && t.time - a.time < 500 && a.delta - t.delta >= 1 && t.delta <= 6) {
                                const s = h > 0 ? 0.8 : 0.2;
                                l = t, c.splice(0), n = p1(()=>{
                                    e66.slideToClosest(e66.params.speed, !0, void 0, s);
                                }, 0);
                            }
                            n || (n = p1(()=>{
                                l = t, c.splice(0), e66.slideToClosest(e66.params.speed, !0, void 0, 0.5);
                            }, 500));
                        }
                        if (i || a9("scroll", s23), e66.params.autoplay && e66.params.autoplayDisableOnInteraction && e66.autoplay.stop(), o === e66.minTranslate() || o === e66.maxTranslate()) return !0;
                    }
                } else {
                    const s24 = {
                        time: u1(),
                        delta: Math.abs(h),
                        direction: Math.sign(h),
                        raw: t43
                    };
                    c.length >= 2 && c.shift();
                    const a = c.length ? c[c.length - 1] : void 0;
                    if (c.push(s24), a ? (s24.direction !== a.direction || s24.delta > a.delta || s24.time > a.time + 150) && f(s24) : f(s24), (function(t) {
                        const s = e66.params.mousewheel;
                        if (t.direction < 0) {
                            if (e66.isEnd && !e66.params.loop && s.releaseOnEdges) return !0;
                        } else if (e66.isBeginning && !e66.params.loop && s.releaseOnEdges) return !0;
                        return !1;
                    })(s24)) return !0;
                }
                return s23.preventDefault ? s23.preventDefault() : s23.returnValue = !1, !1;
            }
            function v2(t) {
                let s = e66.$el;
                "container" !== e66.params.mousewheel.eventsTarget && (s = d1(e66.params.mousewheel.eventsTarget)), s[t]("mouseenter", h2), s[t]("mouseleave", m2), s[t]("wheel", g2);
            }
            function w() {
                return e66.params.cssMode ? (e66.wrapperEl.removeEventListener("wheel", g2), !0) : !e66.mousewheel.enabled && (v2("on"), e66.mousewheel.enabled = !0, !0);
            }
            function b() {
                return e66.params.cssMode ? (e66.wrapperEl.addEventListener(event, g2), !0) : !!e66.mousewheel.enabled && (v2("off"), e66.mousewheel.enabled = !1, !0);
            }
            s22("init", ()=>{
                !e66.params.mousewheel.enabled && e66.params.cssMode && b(), e66.params.mousewheel.enabled && w();
            }), s22("destroy", ()=>{
                e66.params.cssMode && w(), e66.mousewheel.enabled && b();
            }), Object.assign(e66.mousewheel, {
                enable: w,
                disable: b
            });
        },
        function({ swiper: e , extendParams: t44 , on: s25 , emit: a10  }) {
            function i9(t) {
                let s;
                return t && (s = d1(t), e.params.uniqueNavElements && "string" == typeof t && s.length > 1 && 1 === e.$el.find(t).length && (s = e.$el.find(t))), s;
            }
            function r3(t, s) {
                const a = e.params.navigation;
                t && t.length > 0 && (t[s ? "addClass" : "removeClass"](a.disabledClass), t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = s), e.params.watchOverflow && e.enabled && t[e.isLocked ? "addClass" : "removeClass"](a.lockClass));
            }
            function n3() {
                if (e.params.loop) return;
                const { $nextEl: t , $prevEl: s  } = e.navigation;
                r3(s, e.isBeginning), r3(t, e.isEnd);
            }
            function l(t) {
                t.preventDefault(), e.isBeginning && !e.params.loop || e.slidePrev();
            }
            function o(t) {
                t.preventDefault(), e.isEnd && !e.params.loop || e.slideNext();
            }
            function c() {
                const t = e.params.navigation;
                if (e.params.navigation = Y(e, e.originalParams.navigation, e.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                }), !t.nextEl && !t.prevEl) return;
                const s = i9(t.nextEl), a = i9(t.prevEl);
                s && s.length > 0 && s.on("click", o), a && a.length > 0 && a.on("click", l), Object.assign(e.navigation, {
                    $nextEl: s,
                    nextEl: s && s[0],
                    $prevEl: a,
                    prevEl: a && a[0]
                }), e.enabled || (s && s.addClass(t.lockClass), a && a.addClass(t.lockClass));
            }
            function p() {
                const { $nextEl: t , $prevEl: s  } = e.navigation;
                t && t.length && (t.off("click", o), t.removeClass(e.params.navigation.disabledClass)), s && s.length && (s.off("click", l), s.removeClass(e.params.navigation.disabledClass));
            }
            t44({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock"
                }
            }), e.navigation = {
                nextEl: null,
                $nextEl: null,
                prevEl: null,
                $prevEl: null
            }, s25("init", ()=>{
                c(), n3();
            }), s25("toEdge fromEdge lock unlock", ()=>{
                n3();
            }), s25("destroy", ()=>{
                p();
            }), s25("enable disable", ()=>{
                const { $nextEl: t , $prevEl: s  } = e.navigation;
                t && t[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass), s && s[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass);
            }), s25("click", (t, s)=>{
                const { $nextEl: i , $prevEl: r  } = e.navigation, n = s.target;
                if (e.params.navigation.hideOnClick && !d1(n).is(r) && !d1(n).is(i)) {
                    if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === n || e.pagination.el.contains(n))) return;
                    let t;
                    i ? t = i.hasClass(e.params.navigation.hiddenClass) : r && (t = r.hasClass(e.params.navigation.hiddenClass)), a10(!0 === t ? "navigationShow" : "navigationHide"), i && i.toggleClass(e.params.navigation.hiddenClass), r && r.toggleClass(e.params.navigation.hiddenClass);
                }
            }), Object.assign(e.navigation, {
                update: n3,
                init: c,
                destroy: p
            });
        },
        function({ swiper: e67 , extendParams: t45 , on: s26 , emit: a11  }) {
            const i10 = "swiper-pagination";
            let r4;
            t45({
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: !1,
                    type: "bullets",
                    dynamicBullets: !1,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: (e)=>e
                    ,
                    formatFractionTotal: (e)=>e
                    ,
                    bulletClass: `${i10}-bullet`,
                    bulletActiveClass: `${i10}-bullet-active`,
                    modifierClass: `${i10}-`,
                    currentClass: `${i10}-current`,
                    totalClass: `${i10}-total`,
                    hiddenClass: `${i10}-hidden`,
                    progressbarFillClass: `${i10}-progressbar-fill`,
                    progressbarOppositeClass: `${i10}-progressbar-opposite`,
                    clickableClass: `${i10}-clickable`,
                    lockClass: `${i10}-lock`,
                    horizontalClass: `${i10}-horizontal`,
                    verticalClass: `${i10}-vertical`
                }
            }), e67.pagination = {
                el: null,
                $el: null,
                bullets: []
            };
            let n4 = 0;
            function l2() {
                return !e67.params.pagination.el || !e67.pagination.el || !e67.pagination.$el || 0 === e67.pagination.$el.length;
            }
            function o(t, s) {
                const { bulletActiveClass: a  } = e67.params.pagination;
                t[s]().addClass(`${a}-${s}`)[s]().addClass(`${a}-${s}-${s}`);
            }
            function c3() {
                const t46 = e67.rtl, s = e67.params.pagination;
                if (l2()) return;
                const i = e67.virtual && e67.params.virtual.enabled ? e67.virtual.slides.length : e67.slides.length, c = e67.pagination.$el;
                let p;
                const u = e67.params.loop ? Math.ceil((i - 2 * e67.loopedSlides) / e67.params.slidesPerGroup) : e67.snapGrid.length;
                if (e67.params.loop ? (p = Math.ceil((e67.activeIndex - e67.loopedSlides) / e67.params.slidesPerGroup), p > i - 1 - 2 * e67.loopedSlides && (p -= i - 2 * e67.loopedSlides), p > u - 1 && (p -= u), p < 0 && "bullets" !== e67.params.paginationType && (p = u + p)) : p = void 0 !== e67.snapIndex ? e67.snapIndex : e67.activeIndex || 0, "bullets" === s.type && e67.pagination.bullets && e67.pagination.bullets.length > 0) {
                    const a12 = e67.pagination.bullets;
                    let i, l, u;
                    if (s.dynamicBullets && (r4 = a12.eq(0)[e67.isHorizontal() ? "outerWidth" : "outerHeight"](!0), c.css(e67.isHorizontal() ? "width" : "height", r4 * (s.dynamicMainBullets + 4) + "px"), s.dynamicMainBullets > 1 && void 0 !== e67.previousIndex && (n4 += p - e67.previousIndex, n4 > s.dynamicMainBullets - 1 ? n4 = s.dynamicMainBullets - 1 : n4 < 0 && (n4 = 0)), i = p - n4, l = i + (Math.min(a12.length, s.dynamicMainBullets) - 1), u = (l + i) / 2), a12.removeClass([
                        "",
                        "-next",
                        "-next-next",
                        "-prev",
                        "-prev-prev",
                        "-main"
                    ].map((e)=>`${s.bulletActiveClass}${e}`
                    ).join(" ")), c.length > 1) a12.each((e)=>{
                        const t = d1(e), a = t.index();
                        a === p && t.addClass(s.bulletActiveClass), s.dynamicBullets && (a >= i && a <= l && t.addClass(`${s.bulletActiveClass}-main`), a === i && o(t, "prev"), a === l && o(t, "next"));
                    });
                    else {
                        const t = a12.eq(p), r = t.index();
                        if (t.addClass(s.bulletActiveClass), s.dynamicBullets) {
                            const t = a12.eq(i), n = a12.eq(l);
                            for(let e = i; e <= l; e += 1)a12.eq(e).addClass(`${s.bulletActiveClass}-main`);
                            if (e67.params.loop) {
                                if (r >= a12.length - s.dynamicMainBullets) {
                                    for(let e = s.dynamicMainBullets; e >= 0; e -= 1)a12.eq(a12.length - e).addClass(`${s.bulletActiveClass}-main`);
                                    a12.eq(a12.length - s.dynamicMainBullets - 1).addClass(`${s.bulletActiveClass}-prev`);
                                } else o(t, "prev"), o(n, "next");
                            } else o(t, "prev"), o(n, "next");
                        }
                    }
                    if (s.dynamicBullets) {
                        const i = Math.min(a12.length, s.dynamicMainBullets + 4), n = (r4 * i - r4) / 2 - u * r4, l = t46 ? "right" : "left";
                        a12.css(e67.isHorizontal() ? l : "top", `${n}px`);
                    }
                }
                if ("fraction" === s.type && (c.find(W(s.currentClass)).text(s.formatFractionCurrent(p + 1)), c.find(W(s.totalClass)).text(s.formatFractionTotal(u))), "progressbar" === s.type) {
                    let t;
                    t = s.progressbarOpposite ? e67.isHorizontal() ? "vertical" : "horizontal" : e67.isHorizontal() ? "horizontal" : "vertical";
                    const a = (p + 1) / u;
                    let i = 1, r = 1;
                    "horizontal" === t ? i = a : r = a, c.find(W(s.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${r})`).transition(e67.params.speed);
                }
                "custom" === s.type && s.renderCustom ? (c.html(s.renderCustom(e67, p + 1, u)), a11("paginationRender", c[0])) : a11("paginationUpdate", c[0]), e67.params.watchOverflow && e67.enabled && c[e67.isLocked ? "addClass" : "removeClass"](s.lockClass);
            }
            function p3() {
                const t = e67.params.pagination;
                if (l2()) return;
                const s = e67.virtual && e67.params.virtual.enabled ? e67.virtual.slides.length : e67.slides.length, i = e67.pagination.$el;
                let r = "";
                if ("bullets" === t.type) {
                    let a = e67.params.loop ? Math.ceil((s - 2 * e67.loopedSlides) / e67.params.slidesPerGroup) : e67.snapGrid.length;
                    e67.params.freeMode && e67.params.freeMode.enabled && !e67.params.loop && a > s && (a = s);
                    for(let s27 = 0; s27 < a; s27 += 1)t.renderBullet ? r += t.renderBullet.call(e67, s27, t.bulletClass) : r += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;
                    i.html(r), e67.pagination.bullets = i.find(W(t.bulletClass));
                }
                "fraction" === t.type && (r = t.renderFraction ? t.renderFraction.call(e67, t.currentClass, t.totalClass) : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`, i.html(r)), "progressbar" === t.type && (r = t.renderProgressbar ? t.renderProgressbar.call(e67, t.progressbarFillClass) : `<span class="${t.progressbarFillClass}"></span>`, i.html(r)), "custom" !== t.type && a11("paginationRender", e67.pagination.$el[0]);
            }
            function u2() {
                e67.params.pagination = Y(e67, e67.originalParams.pagination, e67.params.pagination, {
                    el: "swiper-pagination"
                });
                const t47 = e67.params.pagination;
                if (!t47.el) return;
                let s28 = d1(t47.el);
                0 !== s28.length && (e67.params.uniqueNavElements && "string" == typeof t47.el && s28.length > 1 && (s28 = e67.$el.find(t47.el), s28.length > 1 && (s28 = s28.filter((t)=>d1(t).parents(".swiper")[0] === e67.el
                ))), "bullets" === t47.type && t47.clickable && s28.addClass(t47.clickableClass), s28.addClass(t47.modifierClass + t47.type), s28.addClass(t47.modifierClass + e67.params.direction), "bullets" === t47.type && t47.dynamicBullets && (s28.addClass(`${t47.modifierClass}${t47.type}-dynamic`), n4 = 0, t47.dynamicMainBullets < 1 && (t47.dynamicMainBullets = 1)), "progressbar" === t47.type && t47.progressbarOpposite && s28.addClass(t47.progressbarOppositeClass), t47.clickable && s28.on("click", W(t47.bulletClass), function(t) {
                    t.preventDefault();
                    let s = d1(this).index() * e67.params.slidesPerGroup;
                    e67.params.loop && (s += e67.loopedSlides), e67.slideTo(s);
                }), Object.assign(e67.pagination, {
                    $el: s28,
                    el: s28[0]
                }), e67.enabled || s28.addClass(t47.lockClass));
            }
            function h() {
                const t = e67.params.pagination;
                if (l2()) return;
                const s = e67.pagination.$el;
                s.removeClass(t.hiddenClass), s.removeClass(t.modifierClass + t.type), s.removeClass(t.modifierClass + e67.params.direction), e67.pagination.bullets && e67.pagination.bullets.removeClass && e67.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && s.off("click", W(t.bulletClass));
            }
            s26("init", ()=>{
                u2(), p3(), c3();
            }), s26("activeIndexChange", ()=>{
                (e67.params.loop || void 0 === e67.snapIndex) && c3();
            }), s26("snapIndexChange", ()=>{
                e67.params.loop || c3();
            }), s26("slidesLengthChange", ()=>{
                e67.params.loop && (p3(), c3());
            }), s26("snapGridLengthChange", ()=>{
                e67.params.loop || (p3(), c3());
            }), s26("destroy", ()=>{
                h();
            }), s26("enable disable", ()=>{
                const { $el: t  } = e67.pagination;
                t && t[e67.enabled ? "removeClass" : "addClass"](e67.params.pagination.lockClass);
            }), s26("lock unlock", ()=>{
                c3();
            }), s26("click", (t, s)=>{
                const i = s.target, { $el: r  } = e67.pagination;
                if (e67.params.pagination.el && e67.params.pagination.hideOnClick && r.length > 0 && !d1(i).hasClass(e67.params.pagination.bulletClass)) {
                    if (e67.navigation && (e67.navigation.nextEl && i === e67.navigation.nextEl || e67.navigation.prevEl && i === e67.navigation.prevEl)) return;
                    const t = r.hasClass(e67.params.pagination.hiddenClass);
                    a11(!0 === t ? "paginationShow" : "paginationHide"), r.toggleClass(e67.params.pagination.hiddenClass);
                }
            }), Object.assign(e67.pagination, {
                render: p3,
                update: c3,
                init: u2,
                destroy: h
            });
        },
        function({ swiper: e , extendParams: t48 , on: s29 , emit: i11  }) {
            const r5 = a1();
            let n5, l3, o4, c4, u = !1, h = null, m = null;
            function f() {
                if (!e.params.scrollbar.el || !e.scrollbar.el) return;
                const { scrollbar: t , rtlTranslate: s , progress: a  } = e, { $dragEl: i , $el: r  } = t, n = e.params.scrollbar;
                let d = l3, c = (o4 - l3) * a;
                s ? (c = -c, c > 0 ? (d = l3 - c, c = 0) : -c + l3 > o4 && (d = o4 + c)) : c < 0 ? (d = l3 + c, c = 0) : c + l3 > o4 && (d = o4 - c), e.isHorizontal() ? (i.transform(`translate3d(${c}px, 0, 0)`), i[0].style.width = `${d}px`) : (i.transform(`translate3d(0px, ${c}px, 0)`), i[0].style.height = `${d}px`), n.hide && (clearTimeout(h), r[0].style.opacity = 1, h = setTimeout(()=>{
                    r[0].style.opacity = 0, r.transition(400);
                }, 1000));
            }
            function g() {
                if (!e.params.scrollbar.el || !e.scrollbar.el) return;
                const { scrollbar: t  } = e, { $dragEl: s , $el: a  } = t;
                s[0].style.width = "", s[0].style.height = "", o4 = e.isHorizontal() ? a[0].offsetWidth : a[0].offsetHeight, c4 = e.size / (e.virtualSize + e.params.slidesOffsetBefore - (e.params.centeredSlides ? e.snapGrid[0] : 0)), l3 = "auto" === e.params.scrollbar.dragSize ? o4 * c4 : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? s[0].style.width = `${l3}px` : s[0].style.height = `${l3}px`, a[0].style.display = c4 >= 1 ? "none" : "", e.params.scrollbar.hide && (a[0].style.opacity = 0), e.params.watchOverflow && e.enabled && t.$el[e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass);
            }
            function v(t) {
                return e.isHorizontal() ? "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].clientX : t.clientX : "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].clientY : t.clientY;
            }
            function w(t) {
                const { scrollbar: s , rtlTranslate: a  } = e, { $el: i  } = s;
                let r;
                r = (v(t) - i.offset()[e.isHorizontal() ? "left" : "top"] - (null !== n5 ? n5 : l3 / 2)) / (o4 - l3), r = Math.max(Math.min(r, 1), 0), a && (r = 1 - r);
                const d = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * r;
                e.updateProgress(d), e.setTranslate(d), e.updateActiveIndex(), e.updateSlidesClasses();
            }
            function b(t) {
                const s = e.params.scrollbar, { scrollbar: a , $wrapperEl: r  } = e, { $el: l , $dragEl: o  } = a;
                u = !0, n5 = t.target === o[0] || t.target === o ? v(t) - t.target.getBoundingClientRect()[e.isHorizontal() ? "left" : "top"] : null, t.preventDefault(), t.stopPropagation(), r.transition(100), o.transition(100), w(t), clearTimeout(m), l.transition(0), s.hide && l.css("opacity", 1), e.params.cssMode && e.$wrapperEl.css("scroll-snap-type", "none"), i11("scrollbarDragStart", t);
            }
            function x(t) {
                const { scrollbar: s , $wrapperEl: a  } = e, { $el: r , $dragEl: n  } = s;
                u && (t.preventDefault ? t.preventDefault() : t.returnValue = !1, w(t), a.transition(0), r.transition(0), n.transition(0), i11("scrollbarDragMove", t));
            }
            function y(t) {
                const s = e.params.scrollbar, { scrollbar: a , $wrapperEl: r  } = e, { $el: n  } = a;
                u && (u = !1, e.params.cssMode && (e.$wrapperEl.css("scroll-snap-type", ""), r.transition("")), s.hide && (clearTimeout(m), m = p1(()=>{
                    n.css("opacity", 0), n.transition(400);
                }, 1000)), i11("scrollbarDragEnd", t), s.snapOnRelease && e.slideToClosest());
            }
            function E(t) {
                const { scrollbar: s , touchEventsTouch: a , touchEventsDesktop: i , params: n , support: l  } = e, o = s.$el[0], d = !(!l.passiveListener || !n.passiveListeners) && {
                    passive: !1,
                    capture: !1
                }, c = !(!l.passiveListener || !n.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                if (!o) return;
                const p = "on" === t ? "addEventListener" : "removeEventListener";
                l.touch ? (o[p](a.start, b, d), o[p](a.move, x, d), o[p](a.end, y, c)) : (o[p](i.start, b, d), r5[p](i.move, x, d), r5[p](i.end, y, c));
            }
            function T() {
                const { scrollbar: t , $el: s  } = e;
                e.params.scrollbar = Y(e, e.originalParams.scrollbar, e.params.scrollbar, {
                    el: "swiper-scrollbar"
                });
                const a = e.params.scrollbar;
                if (!a.el) return;
                let i = d1(a.el);
                e.params.uniqueNavElements && "string" == typeof a.el && i.length > 1 && 1 === s.find(a.el).length && (i = s.find(a.el));
                let r = i.find(`.${e.params.scrollbar.dragClass}`);
                0 === r.length && (r = d1(`<div class="${e.params.scrollbar.dragClass}"></div>`), i.append(r)), Object.assign(t, {
                    $el: i,
                    el: i[0],
                    $dragEl: r,
                    dragEl: r[0]
                }), a.draggable && e.params.scrollbar.el && E("on"), i && i[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass);
            }
            function C() {
                e.params.scrollbar.el && E("off");
            }
            t48({
                scrollbar: {
                    el: null,
                    dragSize: "auto",
                    hide: !1,
                    draggable: !1,
                    snapOnRelease: !0,
                    lockClass: "swiper-scrollbar-lock",
                    dragClass: "swiper-scrollbar-drag"
                }
            }), e.scrollbar = {
                el: null,
                dragEl: null,
                $el: null,
                $dragEl: null
            }, s29("init", ()=>{
                T(), g(), f();
            }), s29("update resize observerUpdate lock unlock", ()=>{
                g();
            }), s29("setTranslate", ()=>{
                f();
            }), s29("setTransition", (t49, s)=>{
                !function(t) {
                    e.params.scrollbar.el && e.scrollbar.el && e.scrollbar.$dragEl.transition(t);
                }(s);
            }), s29("enable disable", ()=>{
                const { $el: t  } = e.scrollbar;
                t && t[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass);
            }), s29("destroy", ()=>{
                C();
            }), Object.assign(e.scrollbar, {
                updateSize: g,
                setTranslate: f,
                init: T,
                destroy: C
            });
        },
        function({ swiper: e68 , extendParams: t50 , on: s30  }) {
            t50({
                parallax: {
                    enabled: !1
                }
            });
            const a13 = (t, s)=>{
                const { rtl: a  } = e68, i = d1(t), r = a ? -1 : 1, n = i.attr("data-swiper-parallax") || "0";
                let l = i.attr("data-swiper-parallax-x"), o = i.attr("data-swiper-parallax-y");
                const c = i.attr("data-swiper-parallax-scale"), p = i.attr("data-swiper-parallax-opacity");
                if (l || o ? (l = l || "0", o = o || "0") : e68.isHorizontal() ? (l = n, o = "0") : (o = n, l = "0"), l = l.indexOf("%") >= 0 ? parseInt(l, 10) * s * r + "%" : l * s * r + "px", o = o.indexOf("%") >= 0 ? parseInt(o, 10) * s + "%" : o * s + "px", null != p) {
                    const e = p - (p - 1) * (1 - Math.abs(s));
                    i[0].style.opacity = e;
                }
                if (null == c) i.transform(`translate3d(${l}, ${o}, 0px)`);
                else {
                    const e = c - (c - 1) * (1 - Math.abs(s));
                    i.transform(`translate3d(${l}, ${o}, 0px) scale(${e})`);
                }
            }, i12 = ()=>{
                const { $el: t51 , slides: s31 , progress: i , snapGrid: r  } = e68;
                t51.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e)=>{
                    a13(e, i);
                }), s31.each((t, s)=>{
                    let n = t.progress;
                    e68.params.slidesPerGroup > 1 && "auto" !== e68.params.slidesPerView && (n += Math.ceil(s / 2) - i * (r.length - 1)), n = Math.min(Math.max(n, -1), 1), d1(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e)=>{
                        a13(e, n);
                    });
                });
            };
            s30("beforeInit", ()=>{
                e68.params.parallax.enabled && (e68.params.watchSlidesProgress = !0, e68.originalParams.watchSlidesProgress = !0);
            }), s30("init", ()=>{
                e68.params.parallax.enabled && i12();
            }), s30("setTranslate", ()=>{
                e68.params.parallax.enabled && i12();
            }), s30("setTransition", (t52, s32)=>{
                e68.params.parallax.enabled && ((t = e68.params.speed)=>{
                    const { $el: s33  } = e68;
                    s33.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e)=>{
                        const s = d1(e);
                        let a = parseInt(s.attr("data-swiper-parallax-duration"), 10) || t;
                        0 === t && (a = 0), s.transition(a);
                    });
                })(s32);
            });
        },
        function({ swiper: e69 , extendParams: t53 , on: s34 , emit: a14  }) {
            const i13 = r1();
            t53({
                zoom: {
                    enabled: !1,
                    maxRatio: 3,
                    minRatio: 1,
                    toggle: !0,
                    containerClass: "swiper-zoom-container",
                    zoomedSlideClass: "swiper-slide-zoomed"
                }
            }), e69.zoom = {
                enabled: !1
            };
            let n6, l4, o5, c5 = 1, p4 = !1;
            const u = {
                $slideEl: void 0,
                slideWidth: void 0,
                slideHeight: void 0,
                $imageEl: void 0,
                $imageWrapEl: void 0,
                maxRatio: 3
            }, m = {
                isTouched: void 0,
                isMoved: void 0,
                currentX: void 0,
                currentY: void 0,
                minX: void 0,
                minY: void 0,
                maxX: void 0,
                maxY: void 0,
                width: void 0,
                height: void 0,
                startX: void 0,
                startY: void 0,
                touchesStart: {
                },
                touchesCurrent: {
                }
            }, f2 = {
                x: void 0,
                y: void 0,
                prevPositionX: void 0,
                prevPositionY: void 0,
                prevTime: void 0
            };
            let g3 = 1;
            function v3(e) {
                if (e.targetTouches.length < 2) return 1;
                const t = e.targetTouches[0].pageX, s = e.targetTouches[0].pageY, a = e.targetTouches[1].pageX, i = e.targetTouches[1].pageY;
                return Math.sqrt((a - t) ** 2 + (i - s) ** 2);
            }
            function w2(t) {
                const s = e69.support, a = e69.params.zoom;
                if (l4 = !1, o5 = !1, !s.gestures) {
                    if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2) return;
                    l4 = !0, u.scaleStart = v3(t);
                }
                u.$slideEl && u.$slideEl.length || (u.$slideEl = d1(t.target).closest(`.${e69.params.slideClass}`), 0 === u.$slideEl.length && (u.$slideEl = e69.slides.eq(e69.activeIndex)), u.$imageEl = u.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), u.$imageWrapEl = u.$imageEl.parent(`.${a.containerClass}`), u.maxRatio = u.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, 0 !== u.$imageWrapEl.length) ? (u.$imageEl && u.$imageEl.transition(0), p4 = !0) : u.$imageEl = void 0;
            }
            function b2(t) {
                const s = e69.support, a = e69.params.zoom, i = e69.zoom;
                if (!s.gestures) {
                    if ("touchmove" !== t.type || "touchmove" === t.type && t.targetTouches.length < 2) return;
                    o5 = !0, u.scaleMove = v3(t);
                }
                u.$imageEl && 0 !== u.$imageEl.length ? (s.gestures ? i.scale = t.scale * c5 : i.scale = u.scaleMove / u.scaleStart * c5, i.scale > u.maxRatio && (i.scale = u.maxRatio - 1 + (i.scale - u.maxRatio + 1) ** 0.5), i.scale < a.minRatio && (i.scale = a.minRatio + 1 - (a.minRatio - i.scale + 1) ** 0.5), u.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`)) : "gesturechange" === t.type && w2(t);
            }
            function x2(t) {
                const s = e69.device, a = e69.support, i = e69.params.zoom, r = e69.zoom;
                if (!a.gestures) {
                    if (!l4 || !o5) return;
                    if ("touchend" !== t.type || "touchend" === t.type && t.changedTouches.length < 2 && !s.android) return;
                    l4 = !1, o5 = !1;
                }
                u.$imageEl && 0 !== u.$imageEl.length && (r.scale = Math.max(Math.min(r.scale, u.maxRatio), i.minRatio), u.$imageEl.transition(e69.params.speed).transform(`translate3d(0,0,0) scale(${r.scale})`), c5 = r.scale, p4 = !1, 1 === r.scale && (u.$slideEl = void 0));
            }
            function y2(t) {
                const s = e69.zoom;
                if (!u.$imageEl || 0 === u.$imageEl.length) return;
                if (e69.allowClick = !1, !m.isTouched || !u.$slideEl) return;
                m.isMoved || (m.width = u.$imageEl[0].offsetWidth, m.height = u.$imageEl[0].offsetHeight, m.startX = h1(u.$imageWrapEl[0], "x") || 0, m.startY = h1(u.$imageWrapEl[0], "y") || 0, u.slideWidth = u.$slideEl[0].offsetWidth, u.slideHeight = u.$slideEl[0].offsetHeight, u.$imageWrapEl.transition(0));
                const a = m.width * s.scale, i = m.height * s.scale;
                if (!(a < u.slideWidth && i < u.slideHeight)) {
                    if (m.minX = Math.min(u.slideWidth / 2 - a / 2, 0), m.maxX = -m.minX, m.minY = Math.min(u.slideHeight / 2 - i / 2, 0), m.maxY = -m.minY, m.touchesCurrent.x = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, m.touchesCurrent.y = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, !m.isMoved && !p4) {
                        if (e69.isHorizontal() && (Math.floor(m.minX) === Math.floor(m.startX) && m.touchesCurrent.x < m.touchesStart.x || Math.floor(m.maxX) === Math.floor(m.startX) && m.touchesCurrent.x > m.touchesStart.x)) return void (m.isTouched = !1);
                        if (!e69.isHorizontal() && (Math.floor(m.minY) === Math.floor(m.startY) && m.touchesCurrent.y < m.touchesStart.y || Math.floor(m.maxY) === Math.floor(m.startY) && m.touchesCurrent.y > m.touchesStart.y)) return void (m.isTouched = !1);
                    }
                    t.cancelable && t.preventDefault(), t.stopPropagation(), m.isMoved = !0, m.currentX = m.touchesCurrent.x - m.touchesStart.x + m.startX, m.currentY = m.touchesCurrent.y - m.touchesStart.y + m.startY, m.currentX < m.minX && (m.currentX = m.minX + 1 - (m.minX - m.currentX + 1) ** 0.8), m.currentX > m.maxX && (m.currentX = m.maxX - 1 + (m.currentX - m.maxX + 1) ** 0.8), m.currentY < m.minY && (m.currentY = m.minY + 1 - (m.minY - m.currentY + 1) ** 0.8), m.currentY > m.maxY && (m.currentY = m.maxY - 1 + (m.currentY - m.maxY + 1) ** 0.8), f2.prevPositionX || (f2.prevPositionX = m.touchesCurrent.x), f2.prevPositionY || (f2.prevPositionY = m.touchesCurrent.y), f2.prevTime || (f2.prevTime = Date.now()), f2.x = (m.touchesCurrent.x - f2.prevPositionX) / (Date.now() - f2.prevTime) / 2, f2.y = (m.touchesCurrent.y - f2.prevPositionY) / (Date.now() - f2.prevTime) / 2, Math.abs(m.touchesCurrent.x - f2.prevPositionX) < 2 && (f2.x = 0), Math.abs(m.touchesCurrent.y - f2.prevPositionY) < 2 && (f2.y = 0), f2.prevPositionX = m.touchesCurrent.x, f2.prevPositionY = m.touchesCurrent.y, f2.prevTime = Date.now(), u.$imageWrapEl.transform(`translate3d(${m.currentX}px, ${m.currentY}px,0)`);
                }
            }
            function E2() {
                const t = e69.zoom;
                u.$slideEl && e69.previousIndex !== e69.activeIndex && (u.$imageEl && u.$imageEl.transform("translate3d(0,0,0) scale(1)"), u.$imageWrapEl && u.$imageWrapEl.transform("translate3d(0,0,0)"), t.scale = 1, c5 = 1, u.$slideEl = void 0, u.$imageEl = void 0, u.$imageWrapEl = void 0);
            }
            function T2(t) {
                const s = e69.zoom, a = e69.params.zoom;
                if (u.$slideEl || (t && t.target && (u.$slideEl = d1(t.target).closest(`.${e69.params.slideClass}`)), u.$slideEl || (e69.params.virtual && e69.params.virtual.enabled && e69.virtual ? u.$slideEl = e69.$wrapperEl.children(`.${e69.params.slideActiveClass}`) : u.$slideEl = e69.slides.eq(e69.activeIndex)), u.$imageEl = u.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), u.$imageWrapEl = u.$imageEl.parent(`.${a.containerClass}`)), !u.$imageEl || 0 === u.$imageEl.length || !u.$imageWrapEl || 0 === u.$imageWrapEl.length) return;
                let r, n, l, o, p, h, f, g, v, w, b, x, y, E, T, C, $, S;
                e69.params.cssMode && (e69.wrapperEl.style.overflow = "hidden", e69.wrapperEl.style.touchAction = "none"), u.$slideEl.addClass(`${a.zoomedSlideClass}`), void 0 === m.touchesStart.x && t ? (r = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX, n = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (r = m.touchesStart.x, n = m.touchesStart.y), s.scale = u.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, c5 = u.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, t ? ($ = u.$slideEl[0].offsetWidth, S = u.$slideEl[0].offsetHeight, l = u.$slideEl.offset().left + i13.scrollX, o = u.$slideEl.offset().top + i13.scrollY, p = l + $ / 2 - r, h = o + S / 2 - n, v = u.$imageEl[0].offsetWidth, w = u.$imageEl[0].offsetHeight, b = v * s.scale, x = w * s.scale, y = Math.min($ / 2 - b / 2, 0), E = Math.min(S / 2 - x / 2, 0), T = -y, C = -E, f = p * s.scale, g = h * s.scale, f < y && (f = y), f > T && (f = T), g < E && (g = E), g > C && (g = C)) : (f = 0, g = 0), u.$imageWrapEl.transition(300).transform(`translate3d(${f}px, ${g}px,0)`), u.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${s.scale})`);
            }
            function C2() {
                const t = e69.zoom, s = e69.params.zoom;
                u.$slideEl || (e69.params.virtual && e69.params.virtual.enabled && e69.virtual ? u.$slideEl = e69.$wrapperEl.children(`.${e69.params.slideActiveClass}`) : u.$slideEl = e69.slides.eq(e69.activeIndex), u.$imageEl = u.$slideEl.find(`.${s.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), u.$imageWrapEl = u.$imageEl.parent(`.${s.containerClass}`)), u.$imageEl && 0 !== u.$imageEl.length && u.$imageWrapEl && 0 !== u.$imageWrapEl.length && (e69.params.cssMode && (e69.wrapperEl.style.overflow = "", e69.wrapperEl.style.touchAction = ""), t.scale = 1, c5 = 1, u.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), u.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), u.$slideEl.removeClass(`${s.zoomedSlideClass}`), u.$slideEl = void 0);
            }
            function $2(t) {
                const s = e69.zoom;
                s.scale && 1 !== s.scale ? C2() : T2(t);
            }
            function S2() {
                const t = e69.support;
                return {
                    passiveListener: !("touchstart" !== e69.touchEvents.start || !t.passiveListener || !e69.params.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    },
                    activeListenerWithCapture: !t.passiveListener || {
                        passive: !1,
                        capture: !0
                    }
                };
            }
            function M() {
                return `.${e69.params.slideClass}`;
            }
            function P(t) {
                const { passiveListener: s  } = S2(), a = M();
                e69.$wrapperEl[t]("gesturestart", a, w2, s), e69.$wrapperEl[t]("gesturechange", a, b2, s), e69.$wrapperEl[t]("gestureend", a, x2, s);
            }
            function k() {
                n6 || (n6 = !0, P("on"));
            }
            function z() {
                n6 && (n6 = !1, P("off"));
            }
            function O() {
                const t = e69.zoom;
                if (t.enabled) return;
                t.enabled = !0;
                const s = e69.support, { passiveListener: a , activeListenerWithCapture: i  } = S2(), r = M();
                s.gestures ? (e69.$wrapperEl.on(e69.touchEvents.start, k, a), e69.$wrapperEl.on(e69.touchEvents.end, z, a)) : "touchstart" === e69.touchEvents.start && (e69.$wrapperEl.on(e69.touchEvents.start, r, w2, a), e69.$wrapperEl.on(e69.touchEvents.move, r, b2, i), e69.$wrapperEl.on(e69.touchEvents.end, r, x2, a), e69.touchEvents.cancel && e69.$wrapperEl.on(e69.touchEvents.cancel, r, x2, a)), e69.$wrapperEl.on(e69.touchEvents.move, `.${e69.params.zoom.containerClass}`, y2, i);
            }
            function I() {
                const t = e69.zoom;
                if (!t.enabled) return;
                const s = e69.support;
                t.enabled = !1;
                const { passiveListener: a , activeListenerWithCapture: i  } = S2(), r = M();
                s.gestures ? (e69.$wrapperEl.off(e69.touchEvents.start, k, a), e69.$wrapperEl.off(e69.touchEvents.end, z, a)) : "touchstart" === e69.touchEvents.start && (e69.$wrapperEl.off(e69.touchEvents.start, r, w2, a), e69.$wrapperEl.off(e69.touchEvents.move, r, b2, i), e69.$wrapperEl.off(e69.touchEvents.end, r, x2, a), e69.touchEvents.cancel && e69.$wrapperEl.off(e69.touchEvents.cancel, r, x2, a)), e69.$wrapperEl.off(e69.touchEvents.move, `.${e69.params.zoom.containerClass}`, y2, i);
            }
            Object.defineProperty(e69.zoom, "scale", {
                get: ()=>g3
                ,
                set (e) {
                    if (g3 !== e) {
                        const t = u.$imageEl ? u.$imageEl[0] : void 0, s = u.$slideEl ? u.$slideEl[0] : void 0;
                        a14("zoomChange", e, t, s);
                    }
                    g3 = e;
                }
            }), s34("init", ()=>{
                e69.params.zoom.enabled && O();
            }), s34("destroy", ()=>{
                I();
            }), s34("touchStart", (t54, s35)=>{
                e69.zoom.enabled && (function(t) {
                    const s = e69.device;
                    u.$imageEl && 0 !== u.$imageEl.length && (m.isTouched || (s.android && t.cancelable && t.preventDefault(), m.isTouched = !0, m.touchesStart.x = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX, m.touchesStart.y = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY));
                })(s35);
            }), s34("touchEnd", (t55, s36)=>{
                e69.zoom.enabled && (function() {
                    const t = e69.zoom;
                    if (!u.$imageEl || 0 === u.$imageEl.length) return;
                    if (!m.isTouched || !m.isMoved) return m.isTouched = !1, void (m.isMoved = !1);
                    m.isTouched = !1, m.isMoved = !1;
                    let s = 300, a = 300;
                    const i = f2.x * s, r = m.currentX + i, n = f2.y * a, l = m.currentY + n;
                    0 !== f2.x && (s = Math.abs((r - m.currentX) / f2.x)), 0 !== f2.y && (a = Math.abs((l - m.currentY) / f2.y));
                    const o = Math.max(s, a);
                    m.currentX = r, m.currentY = l;
                    const d = m.width * t.scale, c = m.height * t.scale;
                    m.minX = Math.min(u.slideWidth / 2 - d / 2, 0), m.maxX = -m.minX, m.minY = Math.min(u.slideHeight / 2 - c / 2, 0), m.maxY = -m.minY, m.currentX = Math.max(Math.min(m.currentX, m.maxX), m.minX), m.currentY = Math.max(Math.min(m.currentY, m.maxY), m.minY), u.$imageWrapEl.transition(o).transform(`translate3d(${m.currentX}px, ${m.currentY}px,0)`);
                })();
            }), s34("doubleTap", (t, s)=>{
                !e69.animating && e69.params.zoom.enabled && e69.zoom.enabled && e69.params.zoom.toggle && $2(s);
            }), s34("transitionEnd", ()=>{
                e69.zoom.enabled && e69.params.zoom.enabled && E2();
            }), s34("slideChange", ()=>{
                e69.zoom.enabled && e69.params.zoom.enabled && e69.params.cssMode && E2();
            }), Object.assign(e69.zoom, {
                enable: O,
                disable: I,
                in: T2,
                out: C2,
                toggle: $2
            });
        },
        function({ swiper: e70 , extendParams: t56 , on: s37 , emit: a15  }) {
            t56({
                lazy: {
                    checkInView: !1,
                    enabled: !1,
                    loadPrevNext: !1,
                    loadPrevNextAmount: 1,
                    loadOnTransitionStart: !1,
                    scrollingElement: "",
                    elementClass: "swiper-lazy",
                    loadingClass: "swiper-lazy-loading",
                    loadedClass: "swiper-lazy-loaded",
                    preloaderClass: "swiper-lazy-preloader"
                }
            }), e70.lazy = {
            };
            let i14 = !1, n7 = !1;
            function l5(t57, s = !0) {
                const i = e70.params.lazy;
                if (void 0 === t57) return;
                if (0 === e70.slides.length) return;
                const r = e70.virtual && e70.params.virtual.enabled ? e70.$wrapperEl.children(`.${e70.params.slideClass}[data-swiper-slide-index="${t57}"]`) : e70.slides.eq(t57), n8 = r.find(`.${i.elementClass}:not(.${i.loadedClass}):not(.${i.loadingClass})`);
                !r.hasClass(i.elementClass) || r.hasClass(i.loadedClass) || r.hasClass(i.loadingClass) || n8.push(r[0]), 0 !== n8.length && n8.each((t58)=>{
                    const n = d1(t58);
                    n.addClass(i.loadingClass);
                    const o = n.attr("data-background"), c = n.attr("data-src"), p = n.attr("data-srcset"), u = n.attr("data-sizes"), h = n.parent("picture");
                    e70.loadImage(n[0], c || o, p, u, !1, ()=>{
                        if (null != e70 && e70 && (!e70 || e70.params) && !e70.destroyed) {
                            if (o ? (n.css("background-image", `url("${o}")`), n.removeAttr("data-background")) : (p && (n.attr("srcset", p), n.removeAttr("data-srcset")), u && (n.attr("sizes", u), n.removeAttr("data-sizes")), h.length && h.children("source").each((e)=>{
                                const t = d1(e);
                                t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"));
                            }), c && (n.attr("src", c), n.removeAttr("data-src"))), n.addClass(i.loadedClass).removeClass(i.loadingClass), r.find(`.${i.preloaderClass}`).remove(), e70.params.loop && s) {
                                const t = r.attr("data-swiper-slide-index");
                                if (r.hasClass(e70.params.slideDuplicateClass)) l5(e70.$wrapperEl.children(`[data-swiper-slide-index="${t}"]:not(.${e70.params.slideDuplicateClass})`).index(), !1);
                                else l5(e70.$wrapperEl.children(`.${e70.params.slideDuplicateClass}[data-swiper-slide-index="${t}"]`).index(), !1);
                            }
                            a15("lazyImageReady", r[0], n[0]), e70.params.autoHeight && e70.updateAutoHeight();
                        }
                    }), a15("lazyImageLoad", r[0], n[0]);
                });
            }
            function o6() {
                const { $wrapperEl: t , params: s , slides: a , activeIndex: i  } = e70, r = e70.virtual && s.virtual.enabled, o = s.lazy;
                let c = s.slidesPerView;
                function p(e) {
                    if (r) {
                        if (t.children(`.${s.slideClass}[data-swiper-slide-index="${e}"]`).length) return !0;
                    } else if (a[e]) return !0;
                    return !1;
                }
                function u(e) {
                    return r ? d1(e).attr("data-swiper-slide-index") : d1(e).index();
                }
                if ("auto" === c && (c = 0), n7 || (n7 = !0), e70.params.watchSlidesProgress) t.children(`.${s.slideVisibleClass}`).each((e)=>{
                    l5(r ? d1(e).attr("data-swiper-slide-index") : d1(e).index());
                });
                else if (c > 1) for(let e71 = i; e71 < i + c; e71 += 1)p(e71) && l5(e71);
                else l5(i);
                if (o.loadPrevNext) {
                    if (c > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) {
                        const e = o.loadPrevNextAmount, t = c, s = Math.min(i + t + Math.max(e, t), a.length), r = Math.max(i - Math.max(t, e), 0);
                        for(let e72 = i + c; e72 < s; e72 += 1)p(e72) && l5(e72);
                        for(let e73 = r; e73 < i; e73 += 1)p(e73) && l5(e73);
                    } else {
                        const e = t.children(`.${s.slideNextClass}`);
                        e.length > 0 && l5(u(e));
                        const a = t.children(`.${s.slidePrevClass}`);
                        a.length > 0 && l5(u(a));
                    }
                }
            }
            function c6() {
                const t = r1();
                if (!e70 || e70.destroyed) return;
                const s = e70.params.lazy.scrollingElement ? d1(e70.params.lazy.scrollingElement) : d1(t), a = s[0] === t, n = a ? t.innerWidth : s[0].offsetWidth, l = a ? t.innerHeight : s[0].offsetHeight, p = e70.$el.offset(), { rtlTranslate: u  } = e70;
                let h = !1;
                u && (p.left -= e70.$el[0].scrollLeft);
                const m = [
                    [
                        p.left,
                        p.top
                    ],
                    [
                        p.left + e70.width,
                        p.top
                    ],
                    [
                        p.left,
                        p.top + e70.height
                    ],
                    [
                        p.left + e70.width,
                        p.top + e70.height
                    ]
                ];
                for(let e = 0; e < m.length; e += 1){
                    const t = m[e];
                    if (t[0] >= 0 && t[0] <= n && t[1] >= 0 && t[1] <= l) {
                        if (0 === t[0] && 0 === t[1]) continue;
                        h = !0;
                    }
                }
                const f = !("touchstart" !== e70.touchEvents.start || !e70.support.passiveListener || !e70.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                h ? (o6(), s.off("scroll", c6, f)) : i14 || (i14 = !0, s.on("scroll", c6, f));
            }
            s37("beforeInit", ()=>{
                e70.params.lazy.enabled && e70.params.preloadImages && (e70.params.preloadImages = !1);
            }), s37("init", ()=>{
                e70.params.lazy.enabled && (e70.params.lazy.checkInView ? c6() : o6());
            }), s37("scroll", ()=>{
                e70.params.freeMode && e70.params.freeMode.enabled && !e70.params.freeMode.sticky && o6();
            }), s37("scrollbarDragMove resize _freeModeNoMomentumRelease", ()=>{
                e70.params.lazy.enabled && (e70.params.lazy.checkInView ? c6() : o6());
            }), s37("transitionStart", ()=>{
                e70.params.lazy.enabled && (e70.params.lazy.loadOnTransitionStart || !e70.params.lazy.loadOnTransitionStart && !n7) && (e70.params.lazy.checkInView ? c6() : o6());
            }), s37("transitionEnd", ()=>{
                e70.params.lazy.enabled && !e70.params.lazy.loadOnTransitionStart && (e70.params.lazy.checkInView ? c6() : o6());
            }), s37("slideChange", ()=>{
                const { lazy: t , cssMode: s , watchSlidesProgress: a , touchReleaseOnEdges: i , resistanceRatio: r  } = e70.params;
                t.enabled && (s || a && (i || 0 === r)) && o6();
            }), Object.assign(e70.lazy, {
                load: o6,
                loadInSlide: l5
            });
        },
        function({ swiper: e74 , extendParams: t59 , on: s38  }) {
            function a16(e75, t60) {
                const s39 = function() {
                    let e, t, s;
                    return (a, i)=>{
                        for(t = -1, e = a.length; e - t > 1;)s = e + t >> 1, a[s] <= i ? t = s : e = s;
                        return e;
                    };
                }();
                let a17, i16;
                return this.x = e75, this.y = t60, this.lastIndex = e75.length - 1, this.interpolate = function(e) {
                    return e ? (i16 = s39(this.x, e), a17 = i16 - 1, (e - this.x[a17]) * (this.y[i16] - this.y[a17]) / (this.x[i16] - this.x[a17]) + this.y[a17]) : 0;
                }, this;
            }
            function i15() {
                e74.controller.control && e74.controller.spline && (e74.controller.spline = void 0, delete e74.controller.spline);
            }
            t59({
                controller: {
                    control: void 0,
                    inverse: !1,
                    by: "slide"
                }
            }), e74.controller = {
                control: void 0
            }, s38("beforeInit", ()=>{
                e74.controller.control = e74.params.controller.control;
            }), s38("update", ()=>{
                i15();
            }), s38("resize", ()=>{
                i15();
            }), s38("observerUpdate", ()=>{
                i15();
            }), s38("setTranslate", (t, s, a)=>{
                e74.controller.control && e74.controller.setTranslate(s, a);
            }), s38("setTransition", (t, s, a)=>{
                e74.controller.control && e74.controller.setTransition(s, a);
            }), Object.assign(e74.controller, {
                setTranslate: function(t61, s40) {
                    const i = e74.controller.control;
                    let r, n;
                    const l = e74.constructor;
                    function o(t62) {
                        const s = e74.rtlTranslate ? -e74.translate : e74.translate;
                        "slide" === e74.params.controller.by && (!function(t) {
                            e74.controller.spline || (e74.controller.spline = e74.params.loop ? new a16(e74.slidesGrid, t.slidesGrid) : new a16(e74.snapGrid, t.snapGrid));
                        }(t62), n = -e74.controller.spline.interpolate(-s)), n && "container" !== e74.params.controller.by || (r = (t62.maxTranslate() - t62.minTranslate()) / (e74.maxTranslate() - e74.minTranslate()), n = (s - e74.minTranslate()) * r + t62.minTranslate()), e74.params.controller.inverse && (n = t62.maxTranslate() - n), t62.updateProgress(n), t62.setTranslate(n, e74), t62.updateActiveIndex(), t62.updateSlidesClasses();
                    }
                    if (Array.isArray(i)) for(let e = 0; e < i.length; e += 1)i[e] !== s40 && i[e] instanceof l && o(i[e]);
                    else i instanceof l && s40 !== i && o(i);
                },
                setTransition: function(t, s41) {
                    const a = e74.constructor, i = e74.controller.control;
                    let r;
                    function n(s) {
                        s.setTransition(t, e74), 0 !== t && (s.transitionStart(), s.params.autoHeight && p1(()=>{
                            s.updateAutoHeight();
                        }), s.$wrapperEl.transitionEnd(()=>{
                            i && (s.params.loop && "slide" === e74.params.controller.by && s.loopFix(), s.transitionEnd());
                        }));
                    }
                    if (Array.isArray(i)) for(r = 0; r < i.length; r += 1)i[r] !== s41 && i[r] instanceof a && n(i[r]);
                    else i instanceof a && s41 !== i && n(i);
                }
            });
        },
        function({ swiper: e76 , extendParams: t63 , on: s42  }) {
            t63({
                a11y: {
                    enabled: !0,
                    notificationClass: "swiper-notification",
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}",
                    slideLabelMessage: "{{index}} / {{slidesLength}}",
                    containerMessage: null,
                    containerRoleDescriptionMessage: null,
                    itemRoleDescriptionMessage: null,
                    slideRole: "group"
                }
            });
            let a18 = null;
            function i17(e) {
                const t = a18;
                0 !== t.length && (t.html(""), t.html(e));
            }
            function r6(e) {
                e.attr("tabIndex", "0");
            }
            function n9(e) {
                e.attr("tabIndex", "-1");
            }
            function l(e, t) {
                e.attr("role", t);
            }
            function o(e, t) {
                e.attr("aria-roledescription", t);
            }
            function c(e, t) {
                e.attr("aria-label", t);
            }
            function p5(e) {
                e.attr("aria-disabled", !0);
            }
            function u3(e) {
                e.attr("aria-disabled", !1);
            }
            function h(t) {
                if (13 !== t.keyCode && 32 !== t.keyCode) return;
                const s = e76.params.a11y, a = d1(t.target);
                e76.navigation && e76.navigation.$nextEl && a.is(e76.navigation.$nextEl) && (e76.isEnd && !e76.params.loop || e76.slideNext(), e76.isEnd ? i17(s.lastSlideMessage) : i17(s.nextSlideMessage)), e76.navigation && e76.navigation.$prevEl && a.is(e76.navigation.$prevEl) && (e76.isBeginning && !e76.params.loop || e76.slidePrev(), e76.isBeginning ? i17(s.firstSlideMessage) : i17(s.prevSlideMessage)), e76.pagination && a.is(W(e76.params.pagination.bulletClass)) && a[0].click();
            }
            function m3() {
                if (e76.params.loop || !e76.navigation) return;
                const { $nextEl: t , $prevEl: s  } = e76.navigation;
                s && s.length > 0 && (e76.isBeginning ? (p5(s), n9(s)) : (u3(s), r6(s))), t && t.length > 0 && (e76.isEnd ? (p5(t), n9(t)) : (u3(t), r6(t)));
            }
            function f() {
                return e76.pagination && e76.params.pagination.clickable && e76.pagination.bullets && e76.pagination.bullets.length;
            }
            const g = (e77, t64, s)=>{
                r6(e77), "BUTTON" !== e77[0].tagName && (l(e77, "button"), e77.on("keydown", h)), c(e77, s), (function(e, t) {
                    e.attr("aria-controls", t);
                })(e77, t64);
            };
            function v4() {
                const t65 = e76.params.a11y;
                e76.$el.append(a18);
                const s43 = e76.$el;
                t65.containerRoleDescriptionMessage && o(s43, t65.containerRoleDescriptionMessage), t65.containerMessage && c(s43, t65.containerMessage);
                const i18 = e76.$wrapperEl, r7 = i18.attr("id") || `swiper-wrapper-${function(e = 16) {
                    return "x".repeat(e).replace(/x/g, ()=>Math.round(16 * Math.random()).toString(16)
                    );
                }(16)}`, n = e76.params.autoplay && e76.params.autoplay.enabled ? "off" : "polite";
                var p;
                p = r7, i18.attr("id", p), (function(e, t) {
                    e.attr("aria-live", t);
                })(i18, n), t65.itemRoleDescriptionMessage && o(d1(e76.slides), t65.itemRoleDescriptionMessage), l(d1(e76.slides), t65.slideRole);
                const u = e76.params.loop ? e76.slides.filter((t)=>!t.classList.contains(e76.params.slideDuplicateClass)
                ).length : e76.slides.length;
                let m, v;
                e76.slides.each((s, a)=>{
                    const i = d1(s), r = e76.params.loop ? parseInt(i.attr("data-swiper-slide-index"), 10) : a;
                    c(i, t65.slideLabelMessage.replace(/\{\{index\}\}/, r + 1).replace(/\{\{slidesLength\}\}/, u));
                }), e76.navigation && e76.navigation.$nextEl && (m = e76.navigation.$nextEl), e76.navigation && e76.navigation.$prevEl && (v = e76.navigation.$prevEl), m && m.length && g(m, r7, t65.nextSlideMessage), v && v.length && g(v, r7, t65.prevSlideMessage), f() && e76.pagination.$el.on("keydown", W(e76.params.pagination.bulletClass), h);
            }
            s42("beforeInit", ()=>{
                a18 = d1(`<span class="${e76.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`);
            }), s42("afterInit", ()=>{
                e76.params.a11y.enabled && (v4(), m3());
            }), s42("toEdge", ()=>{
                e76.params.a11y.enabled && m3();
            }), s42("fromEdge", ()=>{
                e76.params.a11y.enabled && m3();
            }), s42("paginationUpdate", ()=>{
                e76.params.a11y.enabled && (function() {
                    const t = e76.params.a11y;
                    f() && e76.pagination.bullets.each((s)=>{
                        const a = d1(s);
                        r6(a), e76.params.pagination.renderBullet || (l(a, "button"), c(a, t.paginationBulletMessage.replace(/\{\{index\}\}/, a.index() + 1)));
                    });
                })();
            }), s42("destroy", ()=>{
                e76.params.a11y.enabled && (function() {
                    let t, s;
                    a18 && a18.length > 0 && a18.remove(), e76.navigation && e76.navigation.$nextEl && (t = e76.navigation.$nextEl), e76.navigation && e76.navigation.$prevEl && (s = e76.navigation.$prevEl), t && t.off("keydown", h), s && s.off("keydown", h), f() && e76.pagination.$el.off("keydown", W(e76.params.pagination.bulletClass), h);
                })();
            });
        },
        function({ swiper: e78 , extendParams: t66 , on: s44  }) {
            t66({
                history: {
                    enabled: !1,
                    root: "",
                    replaceState: !1,
                    key: "slides"
                }
            });
            let a19 = !1, i19 = {
            };
            const n = (e)=>e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
            , l6 = (e79)=>{
                const t = r1();
                let s;
                s = e79 ? new URL(e79) : t.location;
                const a = s.pathname.slice(1).split("/").filter((e)=>"" !== e
                ), i = a.length;
                return {
                    key: a[i - 2],
                    value: a[i - 1]
                };
            }, o7 = (t, s)=>{
                const i = r1();
                if (!a19 || !e78.params.history.enabled) return;
                let l;
                l = e78.params.url ? new URL(e78.params.url) : i.location;
                const o = e78.slides.eq(s);
                let d = n(o.attr("data-history"));
                if (e78.params.history.root.length > 0) {
                    let s = e78.params.history.root;
                    "/" === s[s.length - 1] && (s = s.slice(0, s.length - 1)), d = `${s}/${t}/${d}`;
                } else l.pathname.includes(t) || (d = `${t}/${d}`);
                const c = i.history.state;
                c && c.value === d || (e78.params.history.replaceState ? i.history.replaceState({
                    value: d
                }, null, d) : i.history.pushState({
                    value: d
                }, null, d));
            }, d3 = (t, s, a)=>{
                if (s) for(let i = 0, r = e78.slides.length; i < r; i += 1){
                    const r = e78.slides.eq(i);
                    if (n(r.attr("data-history")) === s && !r.hasClass(e78.params.slideDuplicateClass)) {
                        const s = r.index();
                        e78.slideTo(s, t, a);
                    }
                }
                else e78.slideTo(0, t, a);
            }, c7 = ()=>{
                i19 = l6(e78.params.url), d3(e78.params.speed, e78.paths.value, !1);
            };
            s44("init", ()=>{
                e78.params.history.enabled && (()=>{
                    const t = r1();
                    if (e78.params.history) {
                        if (!t.history || !t.history.pushState) return e78.params.history.enabled = !1, void (e78.params.hashNavigation.enabled = !0);
                        a19 = !0, i19 = l6(e78.params.url), (i19.key || i19.value) && (d3(0, i19.value, e78.params.runCallbacksOnInit), e78.params.history.replaceState || t.addEventListener("popstate", c7));
                    }
                })();
            }), s44("destroy", ()=>{
                e78.params.history.enabled && (()=>{
                    const t = r1();
                    e78.params.history.replaceState || t.removeEventListener("popstate", c7);
                })();
            }), s44("transitionEnd _freeModeNoMomentumRelease", ()=>{
                a19 && o7(e78.params.history.key, e78.activeIndex);
            }), s44("slideChange", ()=>{
                a19 && e78.params.cssMode && o7(e78.params.history.key, e78.activeIndex);
            });
        },
        function({ swiper: e , extendParams: t67 , emit: s45 , on: i20  }) {
            let n = !1;
            const l = a1(), o = r1();
            t67({
                hashNavigation: {
                    enabled: !1,
                    replaceState: !1,
                    watchState: !1
                }
            });
            const c = ()=>{
                s45("hashChange");
                const t = l.location.hash.replace("#", "");
                if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
                    const s = e.$wrapperEl.children(`.${e.params.slideClass}[data-hash="${t}"]`).index();
                    if (void 0 === s) return;
                    e.slideTo(s);
                }
            }, p = ()=>{
                if (n && e.params.hashNavigation.enabled) {
                    if (e.params.hashNavigation.replaceState && o.history && o.history.replaceState) o.history.replaceState(null, null, `#${e.slides.eq(e.activeIndex).attr("data-hash")}` || ""), s45("hashSet");
                    else {
                        const t = e.slides.eq(e.activeIndex), a = t.attr("data-hash") || t.attr("data-history");
                        l.location.hash = a || "", s45("hashSet");
                    }
                }
            };
            i20("init", ()=>{
                e.params.hashNavigation.enabled && (()=>{
                    if (!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled) return;
                    n = !0;
                    const t = l.location.hash.replace("#", "");
                    if (t) {
                        const s = 0;
                        for(let a = 0, i = e.slides.length; a < i; a += 1){
                            const i = e.slides.eq(a);
                            if ((i.attr("data-hash") || i.attr("data-history")) === t && !i.hasClass(e.params.slideDuplicateClass)) {
                                const t = i.index();
                                e.slideTo(t, s, e.params.runCallbacksOnInit, !0);
                            }
                        }
                    }
                    e.params.hashNavigation.watchState && d1(o).on("hashchange", c);
                })();
            }), i20("destroy", ()=>{
                e.params.hashNavigation.enabled && e.params.hashNavigation.watchState && d1(o).off("hashchange", c);
            }), i20("transitionEnd _freeModeNoMomentumRelease", ()=>{
                n && p();
            }), i20("slideChange", ()=>{
                n && e.params.cssMode && p();
            });
        },
        function({ swiper: e , extendParams: t68 , on: s46 , emit: i  }) {
            let r;
            function n() {
                const t69 = e.slides.eq(e.activeIndex);
                let s = e.params.autoplay.delay;
                t69.attr("data-swiper-autoplay") && (s = t69.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(r), r = p1(()=>{
                    let t;
                    e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), t = e.slidePrev(e.params.speed, !0, !0), i("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? o() : (t = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), i("autoplay")) : (t = e.slidePrev(e.params.speed, !0, !0), i("autoplay")) : e.params.loop ? (e.loopFix(), t = e.slideNext(e.params.speed, !0, !0), i("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? o() : (t = e.slideTo(0, e.params.speed, !0, !0), i("autoplay")) : (t = e.slideNext(e.params.speed, !0, !0), i("autoplay")), (e.params.cssMode && e.autoplay.running || !1 === t) && n();
                }, s);
            }
            function l() {
                return void 0 === r && !e.autoplay.running && (e.autoplay.running = !0, i("autoplayStart"), n(), !0);
            }
            function o() {
                return !!e.autoplay.running && void 0 !== r && (r && (clearTimeout(r), r = void 0), e.autoplay.running = !1, i("autoplayStop"), !0);
            }
            function d(t70) {
                e.autoplay.running && (e.autoplay.paused || (r && clearTimeout(r), e.autoplay.paused = !0, 0 !== t70 && e.params.autoplay.waitForTransition ? [
                    "transitionend",
                    "webkitTransitionEnd"
                ].forEach((t)=>{
                    e.$wrapperEl[0].addEventListener(t, u);
                }) : (e.autoplay.paused = !1, n())));
            }
            function c() {
                const t = a1();
                "hidden" === t.visibilityState && e.autoplay.running && d(), "visible" === t.visibilityState && e.autoplay.paused && (n(), e.autoplay.paused = !1);
            }
            function u(t71) {
                e && !e.destroyed && e.$wrapperEl && t71.target === e.$wrapperEl[0] && ([
                    "transitionend",
                    "webkitTransitionEnd"
                ].forEach((t)=>{
                    e.$wrapperEl[0].removeEventListener(t, u);
                }), e.autoplay.paused = !1, e.autoplay.running ? n() : o());
            }
            function h() {
                e.params.autoplay.disableOnInteraction ? o() : d(), [
                    "transitionend",
                    "webkitTransitionEnd"
                ].forEach((t)=>{
                    e.$wrapperEl[0].removeEventListener(t, u);
                });
            }
            function m() {
                e.params.autoplay.disableOnInteraction || (e.autoplay.paused = !1, n());
            }
            e.autoplay = {
                running: !1,
                paused: !1
            }, t68({
                autoplay: {
                    enabled: !1,
                    delay: 3000,
                    waitForTransition: !0,
                    disableOnInteraction: !0,
                    stopOnLastSlide: !1,
                    reverseDirection: !1,
                    pauseOnMouseEnter: !1
                }
            }), s46("init", ()=>{
                if (e.params.autoplay.enabled) {
                    l();
                    a1().addEventListener("visibilitychange", c), e.params.autoplay.pauseOnMouseEnter && (e.$el.on("mouseenter", h), e.$el.on("mouseleave", m));
                }
            }), s46("beforeTransitionStart", (t, s, a)=>{
                e.autoplay.running && (a || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(s) : o());
            }), s46("sliderFirstMove", ()=>{
                e.autoplay.running && (e.params.autoplay.disableOnInteraction ? o() : d());
            }), s46("touchEnd", ()=>{
                e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && n();
            }), s46("destroy", ()=>{
                e.$el.off("mouseenter", h), e.$el.off("mouseleave", m), e.autoplay.running && o();
                a1().removeEventListener("visibilitychange", c);
            }), Object.assign(e.autoplay, {
                pause: d,
                run: n,
                start: l,
                stop: o
            });
        },
        function({ swiper: e , extendParams: t72 , on: s47  }) {
            t72({
                thumbs: {
                    swiper: null,
                    multipleActiveThumbs: !0,
                    autoScrollOffset: 0,
                    slideThumbActiveClass: "swiper-slide-thumb-active",
                    thumbsContainerClass: "swiper-thumbs"
                }
            });
            let a20 = !1, i21 = !1;
            function r8() {
                const t = e.thumbs.swiper;
                if (!t) return;
                const s = t.clickedIndex, a = t.clickedSlide;
                if (a && d1(a).hasClass(e.params.thumbs.slideThumbActiveClass)) return;
                if (null == s) return;
                let i;
                if (i = t.params.loop ? parseInt(d1(t.clickedSlide).attr("data-swiper-slide-index"), 10) : s, e.params.loop) {
                    let t = e.activeIndex;
                    e.slides.eq(t).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, t = e.activeIndex);
                    const s = e.slides.eq(t).prevAll(`[data-swiper-slide-index="${i}"]`).eq(0).index(), a = e.slides.eq(t).nextAll(`[data-swiper-slide-index="${i}"]`).eq(0).index();
                    i = void 0 === s ? a : void 0 === a ? s : a - t < t - s ? a : s;
                }
                e.slideTo(i);
            }
            function n10() {
                const { thumbs: t  } = e.params;
                if (a20) return !1;
                a20 = !0;
                const s = e.constructor;
                if (t.swiper instanceof s) e.thumbs.swiper = t.swiper, Object.assign(e.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }), Object.assign(e.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                });
                else if (m1(t.swiper)) {
                    const a = Object.assign({
                    }, t.swiper);
                    Object.assign(a, {
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    }), e.thumbs.swiper = new s(a), i21 = !0;
                }
                return e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", r8), !0;
            }
            function l7(t) {
                const s = e.thumbs.swiper;
                if (!s) return;
                const a = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView, i = e.params.thumbs.autoScrollOffset, r = i && !s.params.loop;
                if (e.realIndex !== s.realIndex || r) {
                    let n, l, o = s.activeIndex;
                    if (s.params.loop) {
                        s.slides.eq(o).hasClass(s.params.slideDuplicateClass) && (s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft, o = s.activeIndex);
                        const t = s.slides.eq(o).prevAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index(), a = s.slides.eq(o).nextAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index();
                        n = void 0 === t ? a : void 0 === a ? t : a - o == o - t ? s.params.slidesPerGroup > 1 ? a : o : a - o < o - t ? a : t, l = e.activeIndex > e.previousIndex ? "next" : "prev";
                    } else n = e.realIndex, l = n > e.previousIndex ? "next" : "prev";
                    r && (n += "next" === l ? i : -1 * i), s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(n) < 0 && (s.params.centeredSlides ? n = n > o ? n - Math.floor(a / 2) + 1 : n + Math.floor(a / 2) - 1 : n > o && s.params.slidesPerGroup, s.slideTo(n, t ? 0 : void 0));
                }
                let n = 1;
                const l = e.params.thumbs.slideThumbActiveClass;
                if (e.params.slidesPerView > 1 && !e.params.centeredSlides && (n = e.params.slidesPerView), e.params.thumbs.multipleActiveThumbs || (n = 1), n = Math.floor(n), s.slides.removeClass(l), s.params.loop || s.params.virtual && s.params.virtual.enabled) for(let t73 = 0; t73 < n; t73 += 1)s.$wrapperEl.children(`[data-swiper-slide-index="${e.realIndex + t73}"]`).addClass(l);
                else for(let t74 = 0; t74 < n; t74 += 1)s.slides.eq(e.realIndex + t74).addClass(l);
            }
            e.thumbs = {
                swiper: null
            }, s47("beforeInit", ()=>{
                const { thumbs: t  } = e.params;
                t && t.swiper && (n10(), l7(!0));
            }), s47("slideChange update resize observerUpdate", ()=>{
                e.thumbs.swiper && l7();
            }), s47("setTransition", (t, s)=>{
                const a = e.thumbs.swiper;
                a && a.setTransition(s);
            }), s47("beforeDestroy", ()=>{
                const t = e.thumbs.swiper;
                t && i21 && t && t.destroy();
            }), Object.assign(e.thumbs, {
                init: n10,
                update: l7
            });
        },
        function({ swiper: e80 , extendParams: t75 , emit: s48 , once: a21  }) {
            t75({
                freeMode: {
                    enabled: !1,
                    momentum: !0,
                    momentumRatio: 1,
                    momentumBounce: !0,
                    momentumBounceRatio: 1,
                    momentumVelocityRatio: 1,
                    sticky: !1,
                    minimumVelocity: 0.02
                }
            }), Object.assign(e80, {
                freeMode: {
                    onTouchMove: function() {
                        const { touchEventsData: t , touches: s  } = e80;
                        0 === t.velocities.length && t.velocities.push({
                            position: s[e80.isHorizontal() ? "startX" : "startY"],
                            time: t.touchStartTime
                        }), t.velocities.push({
                            position: s[e80.isHorizontal() ? "currentX" : "currentY"],
                            time: u1()
                        });
                    },
                    onTouchEnd: function({ currentPos: t  }) {
                        const { params: i , $wrapperEl: r , rtlTranslate: n , snapGrid: l , touchEventsData: o  } = e80, d = u1() - o.touchStartTime;
                        if (t < -e80.minTranslate()) e80.slideTo(e80.activeIndex);
                        else if (t > -e80.maxTranslate()) e80.slides.length < l.length ? e80.slideTo(l.length - 1) : e80.slideTo(e80.slides.length - 1);
                        else {
                            if (i.freeMode.momentum) {
                                if (o.velocities.length > 1) {
                                    const t = o.velocities.pop(), s = o.velocities.pop(), a = t.position - s.position, r = t.time - s.time;
                                    e80.velocity = a / r, e80.velocity /= 2, Math.abs(e80.velocity) < i.freeMode.minimumVelocity && (e80.velocity = 0), (r > 150 || u1() - t.time > 300) && (e80.velocity = 0);
                                } else e80.velocity = 0;
                                e80.velocity *= i.freeMode.momentumVelocityRatio, o.velocities.length = 0;
                                let t = 1000 * i.freeMode.momentumRatio;
                                const d = e80.velocity * t;
                                let c = e80.translate + d;
                                n && (c = -c);
                                let p, h = !1;
                                const m = 20 * Math.abs(e80.velocity) * i.freeMode.momentumBounceRatio;
                                let f;
                                if (c < e80.maxTranslate()) i.freeMode.momentumBounce ? (c + e80.maxTranslate() < -m && (c = e80.maxTranslate() - m), p = e80.maxTranslate(), h = !0, o.allowMomentumBounce = !0) : c = e80.maxTranslate(), i.loop && i.centeredSlides && (f = !0);
                                else if (c > e80.minTranslate()) i.freeMode.momentumBounce ? (c - e80.minTranslate() > m && (c = e80.minTranslate() + m), p = e80.minTranslate(), h = !0, o.allowMomentumBounce = !0) : c = e80.minTranslate(), i.loop && i.centeredSlides && (f = !0);
                                else if (i.freeMode.sticky) {
                                    let t;
                                    for(let e = 0; e < l.length; e += 1)if (l[e] > -c) {
                                        t = e;
                                        break;
                                    }
                                    c = Math.abs(l[t] - c) < Math.abs(l[t - 1] - c) || "next" === e80.swipeDirection ? l[t] : l[t - 1], c = -c;
                                }
                                if (f && a21("transitionEnd", ()=>{
                                    e80.loopFix();
                                }), 0 !== e80.velocity) {
                                    if (t = n ? Math.abs((-c - e80.translate) / e80.velocity) : Math.abs((c - e80.translate) / e80.velocity), i.freeMode.sticky) {
                                        const s = Math.abs((n ? -c : c) - e80.translate), a = e80.slidesSizesGrid[e80.activeIndex];
                                        t = s < a ? i.speed : s < 2 * a ? 1.5 * i.speed : 2.5 * i.speed;
                                    }
                                } else if (i.freeMode.sticky) return void e80.slideToClosest();
                                i.freeMode.momentumBounce && h ? (e80.updateProgress(p), e80.setTransition(t), e80.setTranslate(c), e80.transitionStart(!0, e80.swipeDirection), e80.animating = !0, r.transitionEnd(()=>{
                                    e80 && !e80.destroyed && o.allowMomentumBounce && (s48("momentumBounce"), e80.setTransition(i.speed), setTimeout(()=>{
                                        e80.setTranslate(p), r.transitionEnd(()=>{
                                            e80 && !e80.destroyed && e80.transitionEnd();
                                        });
                                    }, 0));
                                })) : e80.velocity ? (s48("_freeModeNoMomentumRelease"), e80.updateProgress(c), e80.setTransition(t), e80.setTranslate(c), e80.transitionStart(!0, e80.swipeDirection), e80.animating || (e80.animating = !0, r.transitionEnd(()=>{
                                    e80 && !e80.destroyed && e80.transitionEnd();
                                }))) : e80.updateProgress(c), e80.updateActiveIndex(), e80.updateSlidesClasses();
                            } else {
                                if (i.freeMode.sticky) return void e80.slideToClosest();
                                i.freeMode && s48("_freeModeNoMomentumRelease");
                            }
                            (!i.freeMode.momentum || d >= i.longSwipesMs) && (e80.updateProgress(), e80.updateActiveIndex(), e80.updateSlidesClasses());
                        }
                    }
                }
            });
        },
        function({ swiper: e81 , extendParams: t76  }) {
            let s49, a22, i22;
            t76({
                grid: {
                    rows: 1,
                    fill: "column"
                }
            }), e81.grid = {
                initSlides: (t)=>{
                    const { slidesPerView: r  } = e81.params, { rows: n , fill: l  } = e81.params.grid;
                    a22 = s49 / n, i22 = Math.floor(t / n), s49 = Math.floor(t / n) === t / n ? t : Math.ceil(t / n) * n, "auto" !== r && "row" === l && (s49 = Math.max(s49, r * n));
                },
                updateSlide: (t, r, n, l)=>{
                    const { slidesPerGroup: o , spaceBetween: d  } = e81.params, { rows: c , fill: p  } = e81.params.grid;
                    let u, h, m;
                    if ("row" === p && o > 1) {
                        const e = Math.floor(t / (o * c)), a = t - c * o * e, i = 0 === e ? o : Math.min(Math.ceil((n - e * c * o) / c), o);
                        m = Math.floor(a / i), h = a - m * i + e * o, u = h + m * s49 / c, r.css({
                            "-webkit-order": u,
                            order: u
                        });
                    } else "column" === p ? (h = Math.floor(t / c), m = t - h * c, (h > i22 || h === i22 && m === c - 1) && (m += 1, m >= c && (m = 0, h += 1))) : (m = Math.floor(t / a22), h = t - m * a22);
                    r.css(l("margin-top"), 0 !== m ? d && `${d}px` : "");
                },
                updateWrapperSize: (t, a, i)=>{
                    const { spaceBetween: r , centeredSlides: n , roundLengths: l  } = e81.params, { rows: o  } = e81.params.grid;
                    if (e81.virtualSize = (t + r) * s49, e81.virtualSize = Math.ceil(e81.virtualSize / o) - r, e81.$wrapperEl.css({
                        [i("width")]: `${e81.virtualSize + r}px`
                    }), n) {
                        a.splice(0, a.length);
                        const t = [];
                        for(let s = 0; s < a.length; s += 1){
                            let i = a[s];
                            l && (i = Math.floor(i)), a[s] < e81.virtualSize + a[0] && t.push(i);
                        }
                        a.push(...t);
                    }
                }
            };
        },
        function({ swiper: e  }) {
            Object.assign(e, {
                appendSlide: R.bind(e),
                prependSlide: j.bind(e),
                addSlide: _.bind(e),
                removeSlide: V.bind(e),
                removeAllSlides: q.bind(e)
            });
        },
        function({ swiper: e , extendParams: t77 , on: s50  }) {
            t77({
                fadeEffect: {
                    crossFade: !1,
                    transformEl: null
                }
            }), F({
                effect: "fade",
                swiper: e,
                on: s50,
                setTranslate: ()=>{
                    const { slides: t  } = e, s = e.params.fadeEffect;
                    for(let a = 0; a < t.length; a += 1){
                        const t = e.slides.eq(a);
                        let i = -t[0].swiperSlideOffset;
                        e.params.virtualTranslate || (i -= e.translate);
                        let r = 0;
                        e.isHorizontal() || (r = i, i = 0);
                        const n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                        U(s, t).css({
                            opacity: n
                        }).transform(`translate3d(${i}px, ${r}px, 0px)`);
                    }
                },
                setTransition: (t)=>{
                    const { transformEl: s  } = e.params.fadeEffect;
                    (s ? e.slides.find(s) : e.slides).transition(t), K({
                        swiper: e,
                        duration: t,
                        transformEl: s,
                        allSlides: !0
                    });
                },
                overwriteParams: ()=>({
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !e.params.cssMode
                    })
            });
        },
        function({ swiper: e83 , extendParams: t78 , on: s51  }) {
            t78({
                cubeEffect: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: 0.94
                }
            }), F({
                effect: "cube",
                swiper: e83,
                on: s51,
                setTranslate: ()=>{
                    const { $el: t , $wrapperEl: s , slides: a , width: i , height: r , rtlTranslate: n , size: l , browser: o  } = e83, c = e83.params.cubeEffect, p = e83.isHorizontal(), u = e83.virtual && e83.params.virtual.enabled;
                    let h, m = 0;
                    c.shadow && (p ? (h = s.find(".swiper-cube-shadow"), 0 === h.length && (h = d1('<div class="swiper-cube-shadow"></div>'), s.append(h)), h.css({
                        height: `${i}px`
                    })) : (h = t.find(".swiper-cube-shadow"), 0 === h.length && (h = d1('<div class="swiper-cube-shadow"></div>'), t.append(h))));
                    for(let e82 = 0; e82 < a.length; e82 += 1){
                        const t = a.eq(e82);
                        let s = e82;
                        u && (s = parseInt(t.attr("data-swiper-slide-index"), 10));
                        let i = 90 * s, r = Math.floor(i / 360);
                        n && (i = -i, r = Math.floor(-i / 360));
                        const o = Math.max(Math.min(t[0].progress, 1), -1);
                        let h = 0, f = 0, g = 0;
                        s % 4 == 0 ? (h = 4 * -r * l, g = 0) : (s - 1) % 4 == 0 ? (h = 0, g = 4 * -r * l) : (s - 2) % 4 == 0 ? (h = l + 4 * r * l, g = l) : (s - 3) % 4 == 0 && (h = -l, g = 3 * l + 4 * l * r), n && (h = -h), p || (f = h, h = 0);
                        const v = `rotateX(${p ? 0 : -i}deg) rotateY(${p ? i : 0}deg) translate3d(${h}px, ${f}px, ${g}px)`;
                        if (o <= 1 && o > -1 && (m = 90 * s + 90 * o, n && (m = 90 * -s - 90 * o)), t.transform(v), c.slideShadows) {
                            let e = p ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"), s = p ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                            0 === e.length && (e = d1(`<div class="swiper-slide-shadow-${p ? "left" : "top"}"></div>`), t.append(e)), 0 === s.length && (s = d1(`<div class="swiper-slide-shadow-${p ? "right" : "bottom"}"></div>`), t.append(s)), e.length && (e[0].style.opacity = Math.max(-o, 0)), s.length && (s[0].style.opacity = Math.max(o, 0));
                        }
                    }
                    if (s.css({
                        "-webkit-transform-origin": `50% 50% -${l / 2}px`,
                        "transform-origin": `50% 50% -${l / 2}px`
                    }), c.shadow) {
                        if (p) h.transform(`translate3d(0px, ${i / 2 + c.shadowOffset}px, ${-i / 2}px) rotateX(90deg) rotateZ(0deg) scale(${c.shadowScale})`);
                        else {
                            const e = Math.abs(m) - 90 * Math.floor(Math.abs(m) / 90), t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2), s = c.shadowScale, a = c.shadowScale / t, i = c.shadowOffset;
                            h.transform(`scale3d(${s}, 1, ${a}) translate3d(0px, ${r / 2 + i}px, ${-r / 2 / a}px) rotateX(-90deg)`);
                        }
                    }
                    const f = o.isSafari || o.isWebView ? -l / 2 : 0;
                    s.transform(`translate3d(0px,0,${f}px) rotateX(${e83.isHorizontal() ? 0 : m}deg) rotateY(${e83.isHorizontal() ? -m : 0}deg)`);
                },
                setTransition: (t)=>{
                    const { $el: s , slides: a  } = e83;
                    a.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), e83.params.cubeEffect.shadow && !e83.isHorizontal() && s.find(".swiper-cube-shadow").transition(t);
                },
                perspective: ()=>!0
                ,
                overwriteParams: ()=>({
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        resistanceRatio: 0,
                        spaceBetween: 0,
                        centeredSlides: !1,
                        virtualTranslate: !0
                    })
            });
        },
        function({ swiper: e , extendParams: t79 , on: s52  }) {
            t79({
                flipEffect: {
                    slideShadows: !0,
                    limitRotation: !0,
                    transformEl: null
                }
            }), F({
                effect: "flip",
                swiper: e,
                on: s52,
                setTranslate: ()=>{
                    const { slides: t , rtlTranslate: s  } = e, a = e.params.flipEffect;
                    for(let i = 0; i < t.length; i += 1){
                        const r = t.eq(i);
                        let n = r[0].progress;
                        e.params.flipEffect.limitRotation && (n = Math.max(Math.min(r[0].progress, 1), -1));
                        const l = r[0].swiperSlideOffset;
                        let o = -180 * n, d = 0, c = e.params.cssMode ? -l - e.translate : -l, p = 0;
                        if (e.isHorizontal() ? s && (o = -o) : (p = c, c = 0, d = -o, o = 0), r[0].style.zIndex = -Math.abs(Math.round(n)) + t.length, a.slideShadows) {
                            let t = e.isHorizontal() ? r.find(".swiper-slide-shadow-left") : r.find(".swiper-slide-shadow-top"), s = e.isHorizontal() ? r.find(".swiper-slide-shadow-right") : r.find(".swiper-slide-shadow-bottom");
                            0 === t.length && (t = Z(a, r, e.isHorizontal() ? "left" : "top")), 0 === s.length && (s = Z(a, r, e.isHorizontal() ? "right" : "bottom")), t.length && (t[0].style.opacity = Math.max(-n, 0)), s.length && (s[0].style.opacity = Math.max(n, 0));
                        }
                        const u = `translate3d(${c}px, ${p}px, 0px) rotateX(${d}deg) rotateY(${o}deg)`;
                        U(a, r).transform(u);
                    }
                },
                setTransition: (t)=>{
                    const { transformEl: s  } = e.params.flipEffect;
                    (s ? e.slides.find(s) : e.slides).transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), K({
                        swiper: e,
                        duration: t,
                        transformEl: s
                    });
                },
                perspective: ()=>!0
                ,
                overwriteParams: ()=>({
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !e.params.cssMode
                    })
            });
        },
        function({ swiper: e85 , extendParams: t81 , on: s53  }) {
            t81({
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    scale: 1,
                    modifier: 1,
                    slideShadows: !0,
                    transformEl: null
                }
            }), F({
                effect: "coverflow",
                swiper: e85,
                on: s53,
                setTranslate: ()=>{
                    const { width: t , height: s , slides: a , slidesSizesGrid: i  } = e85, r = e85.params.coverflowEffect, n = e85.isHorizontal(), l = e85.translate, o = n ? t / 2 - l : s / 2 - l, d = n ? r.rotate : -r.rotate, c = r.depth;
                    for(let e84 = 0, t80 = a.length; e84 < t80; e84 += 1){
                        const t80 = a.eq(e84), s = i[e84], l = (o - t80[0].swiperSlideOffset - s / 2) / s * r.modifier;
                        let p = n ? d * l : 0, u = n ? 0 : d * l, h = -c * Math.abs(l), m = r.stretch;
                        "string" == typeof m && -1 !== m.indexOf("%") && (m = parseFloat(r.stretch) / 100 * s);
                        let f = n ? 0 : m * l, g = n ? m * l : 0, v = 1 - (1 - r.scale) * Math.abs(l);
                        Math.abs(g) < 0.001 && (g = 0), Math.abs(f) < 0.001 && (f = 0), Math.abs(h) < 0.001 && (h = 0), Math.abs(p) < 0.001 && (p = 0), Math.abs(u) < 0.001 && (u = 0), Math.abs(v) < 0.001 && (v = 0);
                        const w = `translate3d(${g}px,${f}px,${h}px)  rotateX(${u}deg) rotateY(${p}deg) scale(${v})`;
                        if (U(r, t80).transform(w), t80[0].style.zIndex = 1 - Math.abs(Math.round(l)), r.slideShadows) {
                            let e = n ? t80.find(".swiper-slide-shadow-left") : t80.find(".swiper-slide-shadow-top"), s = n ? t80.find(".swiper-slide-shadow-right") : t80.find(".swiper-slide-shadow-bottom");
                            0 === e.length && (e = Z(r, t80, n ? "left" : "top")), 0 === s.length && (s = Z(r, t80, n ? "right" : "bottom")), e.length && (e[0].style.opacity = l > 0 ? l : 0), s.length && (s[0].style.opacity = -l > 0 ? -l : 0);
                        }
                    }
                },
                setTransition: (t)=>{
                    const { transformEl: s  } = e85.params.coverflowEffect;
                    (s ? e85.slides.find(s) : e85.slides).transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t);
                },
                perspective: ()=>!0
                ,
                overwriteParams: ()=>({
                        watchSlidesProgress: !0
                    })
            });
        },
        function({ swiper: e86 , extendParams: t82 , on: s55  }) {
            t82({
                creativeEffect: {
                    transformEl: null,
                    limitProgress: 1,
                    shadowPerProgress: !1,
                    progressMultiplier: 1,
                    perspective: !0,
                    prev: {
                        translate: [
                            0,
                            0,
                            0
                        ],
                        rotate: [
                            0,
                            0,
                            0
                        ],
                        opacity: 1,
                        scale: 1
                    },
                    next: {
                        translate: [
                            0,
                            0,
                            0
                        ],
                        rotate: [
                            0,
                            0,
                            0
                        ],
                        opacity: 1,
                        scale: 1
                    }
                }
            });
            const a = (e)=>"string" == typeof e ? e : `${e}px`
            ;
            F({
                effect: "creative",
                swiper: e86,
                on: s55,
                setTranslate: ()=>{
                    const { slides: t , $wrapperEl: s , slidesSizesGrid: i  } = e86, r = e86.params.creativeEffect, { progressMultiplier: n  } = r, l = e86.params.centeredSlides;
                    if (l) {
                        const t = i[0] / 2 - e86.params.slidesOffsetBefore || 0;
                        s.transform(`translateX(calc(50% - ${t}px))`);
                    }
                    for(let s54 = 0; s54 < t.length; s54 += 1){
                        const i = t.eq(s54), o = i[0].progress, d = Math.min(Math.max(i[0].progress, -r.limitProgress), r.limitProgress);
                        let c = d;
                        l || (c = Math.min(Math.max(i[0].originalProgress, -r.limitProgress), r.limitProgress));
                        const p = i[0].swiperSlideOffset, u = [
                            e86.params.cssMode ? -p - e86.translate : -p,
                            0,
                            0
                        ], h = [
                            0,
                            0,
                            0
                        ];
                        let m = !1;
                        e86.isHorizontal() || (u[1] = u[0], u[0] = 0);
                        let f = {
                            translate: [
                                0,
                                0,
                                0
                            ],
                            rotate: [
                                0,
                                0,
                                0
                            ],
                            scale: 1,
                            opacity: 1
                        };
                        d < 0 ? (f = r.next, m = !0) : d > 0 && (f = r.prev, m = !0), u.forEach((e, t)=>{
                            u[t] = `calc(${e}px + (${a(f.translate[t])} * ${Math.abs(d * n)}))`;
                        }), h.forEach((e, t)=>{
                            h[t] = f.rotate[t] * Math.abs(d * n);
                        }), i[0].style.zIndex = -Math.abs(Math.round(o)) + t.length;
                        const g = u.join(", "), v = `rotateX(${h[0]}deg) rotateY(${h[1]}deg) rotateZ(${h[2]}deg)`, w = c < 0 ? `scale(${1 + (1 - f.scale) * c * n})` : `scale(${1 - (1 - f.scale) * c * n})`, b = c < 0 ? 1 + (1 - f.opacity) * c * n : 1 - (1 - f.opacity) * c * n, x = `translate3d(${g}) ${v} ${w}`;
                        if (m && f.shadow || !m) {
                            let e = i.children(".swiper-slide-shadow");
                            if (0 === e.length && f.shadow && (e = Z(r, i)), e.length) {
                                const t = r.shadowPerProgress ? d * (1 / r.limitProgress) : d;
                                e[0].style.opacity = Math.min(Math.max(Math.abs(t), 0), 1);
                            }
                        }
                        const y = U(r, i);
                        y.transform(x).css({
                            opacity: b
                        }), f.origin && y.css("transform-origin", f.origin);
                    }
                },
                setTransition: (t)=>{
                    const { transformEl: s  } = e86.params.creativeEffect;
                    (s ? e86.slides.find(s) : e86.slides).transition(t).find(".swiper-slide-shadow").transition(t), K({
                        swiper: e86,
                        duration: t,
                        transformEl: s,
                        allSlides: !0
                    });
                },
                perspective: ()=>e86.params.creativeEffect.perspective
                ,
                overwriteParams: ()=>({
                        watchSlidesProgress: !0,
                        virtualTranslate: !e86.params.cssMode
                    })
            });
        },
        function({ swiper: e87 , extendParams: t83 , on: s56  }) {
            t83({
                cardsEffect: {
                    slideShadows: !0,
                    transformEl: null
                }
            }), F({
                effect: "cards",
                swiper: e87,
                on: s56,
                setTranslate: ()=>{
                    const { slides: t , activeIndex: s  } = e87, a = e87.params.cardsEffect, { startTranslate: i , isTouched: r  } = e87.touchEventsData, n = e87.translate;
                    for(let l = 0; l < t.length; l += 1){
                        const o = t.eq(l), d = o[0].progress, c = Math.min(Math.max(d, -4), 4);
                        let p = o[0].swiperSlideOffset;
                        e87.params.centeredSlides && !e87.params.cssMode && e87.$wrapperEl.transform(`translateX(${e87.minTranslate()}px)`), e87.params.centeredSlides && e87.params.cssMode && (p -= t[0].swiperSlideOffset);
                        let u = e87.params.cssMode ? -p - e87.translate : -p, h = 0;
                        const m = -100 * Math.abs(c);
                        let f = 1, g = -2 * c, v = 8 - 0.75 * Math.abs(c);
                        const w = (l === s || l === s - 1) && c > 0 && c < 1 && (r || e87.params.cssMode) && n < i, b = (l === s || l === s + 1) && c < 0 && c > -1 && (r || e87.params.cssMode) && n > i;
                        if (w || b) {
                            const e = (1 - Math.abs((Math.abs(c) - 0.5) / 0.5)) ** 0.5;
                            g += -28 * c * e, f += -0.5 * e, v += 96 * e, h = -25 * e * Math.abs(c) + "%";
                        }
                        if (u = c < 0 ? `calc(${u}px + (${v * Math.abs(c)}%))` : c > 0 ? `calc(${u}px + (-${v * Math.abs(c)}%))` : `${u}px`, !e87.isHorizontal()) {
                            const e = h;
                            h = u, u = e;
                        }
                        const x = `\n        translate3d(${u}, ${h}, ${m}px)\n        rotateZ(${g}deg)\n        scale(${c < 0 ? "" + (1 + (1 - f) * c) : "" + (1 - (1 - f) * c)})\n      `;
                        if (a.slideShadows) {
                            let e = o.find(".swiper-slide-shadow");
                            0 === e.length && (e = Z(a, o)), e.length && (e[0].style.opacity = Math.min(Math.max((Math.abs(c) - 0.5) / 0.5, 0), 1));
                        }
                        o[0].style.zIndex = -Math.abs(Math.round(d)) + t.length;
                        U(a, o).transform(x);
                    }
                },
                setTransition: (t)=>{
                    const { transformEl: s  } = e87.params.cardsEffect;
                    (s ? e87.slides.find(s) : e87.slides).transition(t).find(".swiper-slide-shadow").transition(t), K({
                        swiper: e87,
                        duration: t,
                        transformEl: s
                    });
                },
                perspective: ()=>!0
                ,
                overwriteParams: ()=>({
                        watchSlidesProgress: !0,
                        virtualTranslate: !e87.params.cssMode
                    })
            });
        }
    ];
    return H.use(J), H;
}); //# sourceMappingURL=swiper-bundle.min.js.map

},{}],"lQRlf":[function(require,module,exports) {
/**
* PHP Email Form Validation - v3.2
* URL: https://bootstrapmade.com/php-email-form/
* Author: BootstrapMade.com
*/ (function() {
    let forms = document.querySelectorAll('.php-email-form');
    forms.forEach(function(e) {
        e.addEventListener('submit', function(event) {
            event.preventDefault();
            let thisForm = this;
            let action = thisForm.getAttribute('action');
            let recaptcha = thisForm.getAttribute('data-recaptcha-site-key');
            if (!action) {
                displayError(thisForm, 'The form action property is not set!');
                return;
            }
            thisForm.querySelector('.loading').classList.add('d-block');
            thisForm.querySelector('.error-message').classList.remove('d-block');
            thisForm.querySelector('.sent-message').classList.remove('d-block');
            let formData = new FormData(thisForm);
            if (recaptcha) {
                if (typeof grecaptcha !== "undefined") grecaptcha.ready(function() {
                    try {
                        grecaptcha.execute(recaptcha, {
                            action: 'php_email_form_submit'
                        }).then((token)=>{
                            formData.set('recaptcha-response', token);
                            php_email_form_submit(thisForm, action, formData);
                        });
                    } catch (error) {
                        displayError(thisForm, error);
                    }
                });
                else displayError(thisForm, 'The reCaptcha javascript API url is not loaded!');
            } else php_email_form_submit(thisForm, action, formData);
        });
    });
    function php_email_form_submit(thisForm, action, formData) {
        fetch(action, {
            method: 'POST',
            body: formData,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        }).then((response)=>{
            if (response.ok) return response.text();
            else throw new Error(`${response.status} ${response.statusText} ${response.url}`);
        }).then((data)=>{
            thisForm.querySelector('.loading').classList.remove('d-block');
            if (data.trim() == 'OK') {
                thisForm.querySelector('.sent-message').classList.add('d-block');
                thisForm.reset();
            } else throw new Error(data ? data : 'Form submission failed and no error message returned from: ' + action);
        }).catch((error)=>{
            displayError(thisForm, error);
        });
    }
    function displayError(thisForm, error) {
        thisForm.querySelector('.loading').classList.remove('d-block');
        thisForm.querySelector('.error-message').innerHTML = error;
        thisForm.querySelector('.error-message').classList.add('d-block');
    }
})();

},{}],"7VZFR":[function(require,module,exports) {
(function() {
    /**
   * Easy selector helper function
   */ const select = (el, all = false)=>{
        el = el.trim();
        if (all) return [
            ...document.querySelectorAll(el)
        ];
        else return document.querySelector(el);
    };
    /**
   * Easy event listener function
   */ const on = (type, el, listener, all = false)=>{
        let selectEl = select(el, all);
        if (selectEl) {
            if (all) selectEl.forEach((e)=>e.addEventListener(type, listener)
            );
            else selectEl.addEventListener(type, listener);
        }
    };
    /**
   * Easy on scroll event listener 
   */ const onscroll = (el, listener)=>{
        el.addEventListener('scroll', listener);
    };
    /**
   * Navbar links active state on scroll
   */ let navbarlinks = select('#navbar .scrollto', true);
    const navbarlinksActive = ()=>{
        let position = window.scrollY + 200;
        navbarlinks.forEach((navbarlink)=>{
            if (!navbarlink.hash) return;
            let section = select(navbarlink.hash);
            if (!section) return;
            if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) navbarlink.classList.add('active');
            else navbarlink.classList.remove('active');
        });
    };
    window.addEventListener('load', navbarlinksActive);
    onscroll(document, navbarlinksActive);
    /**
   * Mobile nav toggle
   */ on('click', '.mobile-nav-toggle', function(e) {
        select('#navbar').classList.toggle('navbar-mobile');
        this.classList.toggle('bi-list');
        this.classList.toggle('bi-x');
    });
    /**
   * Mobile nav dropdowns activate
   */ on('click', '.navbar .dropdown > a', function(e) {
        if (select('#navbar').classList.contains('navbar-mobile')) {
            e.preventDefault();
            this.nextElementSibling.classList.toggle('dropdown-active');
        }
    }, true);
    /**
   * Scrool with ofset on links with a class name .scrollto
   */ on('click', '.scrollto', function(e) {
        if (select(this.hash)) {
            e.preventDefault();
            let navbar = select('#navbar');
            if (navbar.classList.contains('navbar-mobile')) {
                navbar.classList.remove('navbar-mobile');
                let navbarToggle = select('.mobile-nav-toggle');
                navbarToggle.classList.toggle('bi-list');
                navbarToggle.classList.toggle('bi-x');
            }
            scrollto(this.hash);
        }
    }, true);
    /**
   * Scroll with ofset on page load with hash links in the url
   */ window.addEventListener('load', ()=>{
        if (window.location.hash) {
            if (select(window.location.hash)) scrollto(window.location.hash);
        }
    });
    /**
   * Preloader
   */ let preloader = select('#preloader');
    if (preloader) window.addEventListener('load', ()=>{
        preloader.remove();
    });
})();

},{}],"7fRPT":[function(require,module,exports) {
!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Sweetalert2 = t();
}(this, function() {
    "use strict";
    const t1 = "SweetAlert2:", y = (e)=>e.charAt(0).toUpperCase() + e.slice(1)
    , i1 = (e)=>Array.prototype.slice.call(e)
    , a1 = (e)=>{
        console.warn("".concat(t1, " ").concat("object" == typeof e ? e.join(" ") : e));
    }, v = (e)=>{
        console.error("".concat(t1, " ").concat(e));
    }, n1 = [], o1 = (e, t)=>{
        e = '"'.concat(e, '" is deprecated and will be removed in the next major release. Please use "').concat(t, '" instead.'), n1.includes(e) || (n1.push(e), a1(e));
    }, w = (e)=>"function" == typeof e ? e() : e
    , C = (e)=>e && "function" == typeof e.toPromise
    , k = (e)=>C(e) ? e.toPromise() : Promise.resolve(e)
    , A = (e)=>e && Promise.resolve(e) === e
    , r1 = {
        title: "",
        titleText: "",
        text: "",
        html: "",
        footer: "",
        icon: void 0,
        iconColor: void 0,
        iconHtml: void 0,
        template: void 0,
        toast: !1,
        showClass: {
            popup: "swal2-show",
            backdrop: "swal2-backdrop-show",
            icon: "swal2-icon-show"
        },
        hideClass: {
            popup: "swal2-hide",
            backdrop: "swal2-backdrop-hide",
            icon: "swal2-icon-hide"
        },
        customClass: {
        },
        target: "body",
        color: void 0,
        backdrop: !0,
        heightAuto: !0,
        allowOutsideClick: !0,
        allowEscapeKey: !0,
        allowEnterKey: !0,
        stopKeydownPropagation: !0,
        keydownListenerCapture: !1,
        showConfirmButton: !0,
        showDenyButton: !1,
        showCancelButton: !1,
        preConfirm: void 0,
        preDeny: void 0,
        confirmButtonText: "OK",
        confirmButtonAriaLabel: "",
        confirmButtonColor: void 0,
        denyButtonText: "No",
        denyButtonAriaLabel: "",
        denyButtonColor: void 0,
        cancelButtonText: "Cancel",
        cancelButtonAriaLabel: "",
        cancelButtonColor: void 0,
        buttonsStyling: !0,
        reverseButtons: !1,
        focusConfirm: !0,
        focusDeny: !1,
        focusCancel: !1,
        returnFocus: !0,
        showCloseButton: !1,
        closeButtonHtml: "&times;",
        closeButtonAriaLabel: "Close this dialog",
        loaderHtml: "",
        showLoaderOnConfirm: !1,
        showLoaderOnDeny: !1,
        imageUrl: void 0,
        imageWidth: void 0,
        imageHeight: void 0,
        imageAlt: "",
        timer: void 0,
        timerProgressBar: !1,
        width: void 0,
        padding: void 0,
        background: void 0,
        input: void 0,
        inputPlaceholder: "",
        inputLabel: "",
        inputValue: "",
        inputOptions: {
        },
        inputAutoTrim: !0,
        inputAttributes: {
        },
        inputValidator: void 0,
        returnInputValueOnDeny: !1,
        validationMessage: void 0,
        grow: !1,
        position: "center",
        progressSteps: [],
        currentProgressStep: void 0,
        progressStepsDistance: void 0,
        willOpen: void 0,
        didOpen: void 0,
        didRender: void 0,
        willClose: void 0,
        didClose: void 0,
        didDestroy: void 0,
        scrollbarPadding: !0
    }, s1 = [
        "allowEscapeKey",
        "allowOutsideClick",
        "background",
        "buttonsStyling",
        "cancelButtonAriaLabel",
        "cancelButtonColor",
        "cancelButtonText",
        "closeButtonAriaLabel",
        "closeButtonHtml",
        "color",
        "confirmButtonAriaLabel",
        "confirmButtonColor",
        "confirmButtonText",
        "currentProgressStep",
        "customClass",
        "denyButtonAriaLabel",
        "denyButtonColor",
        "denyButtonText",
        "didClose",
        "didDestroy",
        "footer",
        "hideClass",
        "html",
        "icon",
        "iconColor",
        "iconHtml",
        "imageAlt",
        "imageHeight",
        "imageUrl",
        "imageWidth",
        "preConfirm",
        "preDeny",
        "progressSteps",
        "returnFocus",
        "reverseButtons",
        "showCancelButton",
        "showCloseButton",
        "showConfirmButton",
        "showDenyButton",
        "text",
        "title",
        "titleText",
        "willClose"
    ], c1 = {
    }, P = [
        "allowOutsideClick",
        "allowEnterKey",
        "backdrop",
        "focusConfirm",
        "focusDeny",
        "focusCancel",
        "returnFocus",
        "heightAuto",
        "keydownListenerCapture"
    ], B = (e)=>Object.prototype.hasOwnProperty.call(r1, e)
    , x = (e)=>-1 !== s1.indexOf(e)
    , E = (e)=>c1[e]
    , T = (e)=>{
        !e.backdrop && e.allowOutsideClick && a1('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
        for(const n in e)t = n, B(t) || a1('Unknown parameter "'.concat(t, '"')), e.toast && (t = n, P.includes(t) && a1('The parameter "'.concat(t, '" is incompatible with toasts'))), t = n, E(t) && o1(t, E(t));
        var t;
    };
    var e1 = (e)=>{
        const t = {
        };
        for(const n in e)t[e[n]] = "swal2-" + e[n];
        return t;
    };
    const p = e1([
        "container",
        "shown",
        "height-auto",
        "iosfix",
        "popup",
        "modal",
        "no-backdrop",
        "no-transition",
        "toast",
        "toast-shown",
        "show",
        "hide",
        "close",
        "title",
        "html-container",
        "actions",
        "confirm",
        "deny",
        "cancel",
        "default-outline",
        "footer",
        "icon",
        "icon-content",
        "image",
        "input",
        "file",
        "range",
        "select",
        "radio",
        "checkbox",
        "label",
        "textarea",
        "inputerror",
        "input-label",
        "validation-message",
        "progress-steps",
        "active-progress-step",
        "progress-step",
        "progress-step-line",
        "loader",
        "loading",
        "styled",
        "top",
        "top-start",
        "top-end",
        "top-left",
        "top-right",
        "center",
        "center-start",
        "center-end",
        "center-left",
        "center-right",
        "bottom",
        "bottom-start",
        "bottom-end",
        "bottom-left",
        "bottom-right",
        "grow-row",
        "grow-column",
        "grow-fullscreen",
        "rtl",
        "timer-progress-bar",
        "timer-progress-bar-container",
        "scrollbar-measure",
        "icon-success",
        "icon-warning",
        "icon-info",
        "icon-question",
        "icon-error"
    ]), S = e1([
        "success",
        "warning",
        "info",
        "question",
        "error"
    ]), m = ()=>document.body.querySelector(".".concat(p.container))
    , L = (e)=>{
        const t = m();
        return t ? t.querySelector(e) : null;
    }, O = (e)=>L(".".concat(e))
    , g = ()=>O(p.popup)
    , j = ()=>O(p.icon)
    , M = ()=>O(p.title)
    , D = ()=>O(p["html-container"])
    , I = ()=>O(p.image)
    , H = ()=>O(p["progress-steps"])
    , q = ()=>O(p["validation-message"])
    , V = ()=>L(".".concat(p.actions, " .").concat(p.confirm))
    , N = ()=>L(".".concat(p.actions, " .").concat(p.deny))
    ;
    const R = ()=>L(".".concat(p.loader))
    , F = ()=>L(".".concat(p.actions, " .").concat(p.cancel))
    , U = ()=>O(p.actions)
    , W = ()=>O(p.footer)
    , z = ()=>O(p["timer-progress-bar"])
    , _ = ()=>O(p.close)
    , K = ()=>{
        const e2 = i1(g().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((e, t)=>{
            e = parseInt(e.getAttribute("tabindex")), t = parseInt(t.getAttribute("tabindex"));
            return t < e ? 1 : e < t ? -1 : 0;
        });
        var t2 = i1(g().querySelectorAll('\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n')).filter((e)=>"-1" !== e.getAttribute("tabindex")
        );
        return ((t)=>{
            const n = [];
            for(let e = 0; e < t.length; e++)-1 === n.indexOf(t[e]) && n.push(t[e]);
            return n;
        })(e2.concat(t2)).filter((e)=>ce(e)
        );
    }, Y = ()=>!$(document.body, p["toast-shown"]) && !$(document.body, p["no-backdrop"])
    , Z = ()=>g() && $(g(), p.toast)
    ;
    function J(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
        const n = z();
        ce(n) && (t && (n.style.transition = "none", n.style.width = "100%"), setTimeout(()=>{
            n.style.transition = "width ".concat(e / 1000, "s linear"), n.style.width = "0%";
        }, 10));
    }
    const X = {
        previousBodyPadding: null
    }, l1 = (t, e3)=>{
        if (t.textContent = "", e3) {
            const n = new DOMParser, o = n.parseFromString(e3, "text/html");
            i1(o.querySelector("head").childNodes).forEach((e)=>{
                t.appendChild(e);
            }), i1(o.querySelector("body").childNodes).forEach((e)=>{
                t.appendChild(e);
            });
        }
    }, $ = (t, e)=>{
        if (!e) return !1;
        var n = e.split(/\s+/);
        for(let e4 = 0; e4 < n.length; e4++)if (!t.classList.contains(n[e4])) return !1;
        return !0;
    }, G = (t, n)=>{
        i1(t.classList).forEach((e)=>{
            Object.values(p).includes(e) || Object.values(S).includes(e) || Object.values(n.showClass).includes(e) || t.classList.remove(e);
        });
    }, Q = (e, t, n)=>{
        if (G(e, t), t.customClass && t.customClass[n]) {
            if ("string" != typeof t.customClass[n] && !t.customClass[n].forEach) return a1("Invalid type of customClass.".concat(n, '! Expected string or iterable object, got "').concat(typeof t.customClass[n], '"'));
            u1(e, t.customClass[n]);
        }
    }, ee = (e, t)=>{
        if (!t) return null;
        switch(t){
            case "select":
            case "textarea":
            case "file":
                return e.querySelector(".".concat(p.popup, " > .").concat(p[t]));
            case "checkbox":
                return e.querySelector(".".concat(p.popup, " > .").concat(p.checkbox, " input"));
            case "radio":
                return e.querySelector(".".concat(p.popup, " > .").concat(p.radio, " input:checked")) || e.querySelector(".".concat(p.popup, " > .").concat(p.radio, " input:first-child"));
            case "range":
                return e.querySelector(".".concat(p.popup, " > .").concat(p.range, " input"));
            default:
                return e.querySelector(".".concat(p.popup, " > .").concat(p.input));
        }
    }, te = (e)=>{
        var t;
        e.focus(), "file" !== e.type && (t = e.value, e.value = "", e.value = t);
    }, ne = (e5, t3, n)=>{
        e5 && t3 && (t3 = "string" == typeof t3 ? t3.split(/\s+/).filter(Boolean) : t3).forEach((t)=>{
            Array.isArray(e5) ? e5.forEach((e)=>{
                n ? e.classList.add(t) : e.classList.remove(t);
            }) : n ? e5.classList.add(t) : e5.classList.remove(t);
        });
    }, u1 = (e, t)=>{
        ne(e, t, !0);
    }, oe = (e, t)=>{
        ne(e, t, !1);
    }, ie = (e, t)=>{
        var n = i1(e.childNodes);
        for(let e6 = 0; e6 < n.length; e6++)if ($(n[e6], t)) return n[e6];
    }, ae = (e, t, n)=>{
        (n = n === "".concat(parseInt(n)) ? parseInt(n) : n) || 0 === parseInt(n) ? e.style[t] = "number" == typeof n ? "".concat(n, "px") : n : e.style.removeProperty(t);
    }, d1 = function(e) {
        e.style.display = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "flex";
    }, h = (e)=>{
        e.style.display = "none";
    }, re = (e, t, n, o)=>{
        const i = e.querySelector(t);
        i && (i.style[n] = o);
    }, se = (e, t, n)=>{
        t ? d1(e, n) : h(e);
    }, ce = (e)=>!(!e || !(e.offsetWidth || e.offsetHeight || e.getClientRects().length))
    , le = ()=>!ce(V()) && !ce(N()) && !ce(F())
    , ue = (e)=>!!(e.scrollHeight > e.clientHeight)
    , de = (e)=>{
        const t = window.getComputedStyle(e);
        var e = parseFloat(t.getPropertyValue("animation-duration") || "0"), n = parseFloat(t.getPropertyValue("transition-duration") || "0");
        return 0 < e || 0 < n;
    }, pe = ()=>"undefined" == typeof window || "undefined" == typeof document
    , me = 100, f = {
    }, ge = ()=>{
        f.previousActiveElement && f.previousActiveElement.focus ? (f.previousActiveElement.focus(), f.previousActiveElement = null) : document.body && document.body.focus();
    }, he = (o)=>new Promise((e)=>{
            if (!o) return e();
            var t = window.scrollX, n = window.scrollY;
            f.restoreFocusTimeout = setTimeout(()=>{
                ge(), e();
            }, me), window.scrollTo(t, n);
        })
    , fe = '\n <div aria-labelledby="'.concat(p.title, '" aria-describedby="').concat(p["html-container"], '" class="').concat(p.popup, '" tabindex="-1">\n   <button type="button" class="').concat(p.close, '"></button>\n   <ul class="').concat(p["progress-steps"], '"></ul>\n   <div class="').concat(p.icon, '"></div>\n   <img class="').concat(p.image, '" />\n   <h2 class="').concat(p.title, '" id="').concat(p.title, '"></h2>\n   <div class="').concat(p["html-container"], '" id="').concat(p["html-container"], '"></div>\n   <input class="').concat(p.input, '" />\n   <input type="file" class="').concat(p.file, '" />\n   <div class="').concat(p.range, '">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="').concat(p.select, '"></select>\n   <div class="').concat(p.radio, '"></div>\n   <label for="').concat(p.checkbox, '" class="').concat(p.checkbox, '">\n     <input type="checkbox" />\n     <span class="').concat(p.label, '"></span>\n   </label>\n   <textarea class="').concat(p.textarea, '"></textarea>\n   <div class="').concat(p["validation-message"], '" id="').concat(p["validation-message"], '"></div>\n   <div class="').concat(p.actions, '">\n     <div class="').concat(p.loader, '"></div>\n     <button type="button" class="').concat(p.confirm, '"></button>\n     <button type="button" class="').concat(p.deny, '"></button>\n     <button type="button" class="').concat(p.cancel, '"></button>\n   </div>\n   <div class="').concat(p.footer, '"></div>\n   <div class="').concat(p["timer-progress-bar-container"], '">\n     <div class="').concat(p["timer-progress-bar"], '"></div>\n   </div>\n </div>\n').replace(/(^|\n)\s*/g, ""), be = ()=>{
        const e = m();
        return !!e && (e.remove(), oe([
            document.documentElement,
            document.body
        ], [
            p["no-backdrop"],
            p["toast-shown"],
            p["has-column"]
        ]), !0);
    }, ye = ()=>{
        f.currentInstance.resetValidationMessage();
    }, ve = ()=>{
        const e = g(), t = ie(e, p.input), n = ie(e, p.file), o = e.querySelector(".".concat(p.range, " input")), i = e.querySelector(".".concat(p.range, " output")), a = ie(e, p.select), r = e.querySelector(".".concat(p.checkbox, " input")), s = ie(e, p.textarea);
        t.oninput = ye, n.onchange = ye, a.onchange = ye, r.onchange = ye, s.oninput = ye, o.oninput = ()=>{
            ye(), i.value = o.value;
        }, o.onchange = ()=>{
            ye(), o.nextSibling.value = o.value;
        };
    }, we = (e)=>"string" == typeof e ? document.querySelector(e) : e
    , Ce = (e)=>{
        const t = g();
        t.setAttribute("role", e.toast ? "alert" : "dialog"), t.setAttribute("aria-live", e.toast ? "polite" : "assertive"), e.toast || t.setAttribute("aria-modal", "true");
    }, ke = (e)=>{
        "rtl" === window.getComputedStyle(e).direction && u1(m(), p.rtl);
    }, Ae = (e, t)=>{
        if (e instanceof HTMLElement) t.appendChild(e);
        else if ("object" == typeof e) {
            var n = e, o = t;
            if (n.jquery) Pe(o, n);
            else l1(o, n.toString());
        } else e && l1(t, e);
    }, Pe = (t, n)=>{
        if (t.textContent = "", 0 in n) for(let e = 0; (e in n); e++)t.appendChild(n[e].cloneNode(!0));
        else t.appendChild(n.cloneNode(!0));
    }, Be = (()=>{
        if (pe()) return !1;
        var e = document.createElement("div"), t = {
            WebkitAnimation: "webkitAnimationEnd",
            animation: "animationend"
        };
        for(const n in t)if (Object.prototype.hasOwnProperty.call(t, n) && void 0 !== e.style[n]) return t[n];
        return !1;
    })(), xe = (e7, t4)=>{
        var n2, o2, i, a, r, s = U(), c = R();
        (t4.showConfirmButton || t4.showDenyButton || t4.showCancelButton ? d1 : h)(s), Q(s, t4, "actions"), n2 = c, o2 = t4, i = V(), a = N(), r = F(), Ee(i, "confirm", o2), Ee(a, "deny", o2), Ee(r, "cancel", o2), (function(e, t, n, o) {
            if (!o.buttonsStyling) return oe([
                e,
                t,
                n
            ], p.styled);
            u1([
                e,
                t,
                n
            ], p.styled), o.confirmButtonColor && (e.style.backgroundColor = o.confirmButtonColor, u1(e, p["default-outline"]));
            o.denyButtonColor && (t.style.backgroundColor = o.denyButtonColor, u1(t, p["default-outline"]));
            o.cancelButtonColor && (n.style.backgroundColor = o.cancelButtonColor, u1(n, p["default-outline"]));
        })(i, a, r, o2), o2.reverseButtons && (o2.toast ? (s.insertBefore(r, i), s.insertBefore(a, i)) : (s.insertBefore(r, n2), s.insertBefore(a, n2), s.insertBefore(i, n2))), l1(c, t4.loaderHtml), Q(c, t4, "loader");
    };
    function Ee(e, t, n) {
        se(e, n["show".concat(y(t), "Button")], "inline-block"), l1(e, n["".concat(t, "ButtonText")]), e.setAttribute("aria-label", n["".concat(t, "ButtonAriaLabel")]), e.className = p[t], Q(e, n, "".concat(t, "Button")), u1(e, n["".concat(t, "ButtonClass")]);
    }
    const Te = (e, t)=>{
        var n, o, i = m();
        i && (o = i, "string" == typeof (n = t.backdrop) ? o.style.background = n : n || u1([
            document.documentElement,
            document.body
        ], p["no-backdrop"]), o = i, (n = t.position) in p ? u1(o, p[n]) : (a1('The "position" parameter is not valid, defaulting to "center"'), u1(o, p.center)), n = i, !(o = t.grow) || "string" != typeof o || (o = "grow-".concat(o)) in p && u1(n, p[o]), Q(i, t, "container"));
    };
    var b = {
        awaitingPromise: new WeakMap,
        promise: new WeakMap,
        innerParams: new WeakMap,
        domCache: new WeakMap
    };
    const Se = [
        "input",
        "file",
        "range",
        "select",
        "radio",
        "checkbox",
        "textarea"
    ], Le = (e8, r)=>{
        const s = g();
        var t5, e8 = b.innerParams.get(e8);
        const c = !e8 || r.input !== e8.input;
        Se.forEach((e)=>{
            var t = p[e];
            const n = ie(s, t);
            {
                var o = r.inputAttributes;
                const i = ee(g(), e);
                if (i) {
                    Oe(i);
                    for(const a in o)i.setAttribute(a, o[a]);
                }
            }
            n.className = t, c && h(n);
        }), r.input && (c && ((e)=>{
            if (!Ie[e.input]) return v('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(e.input, '"'));
            const t = De(e.input), n = Ie[e.input](t, e);
            d1(n), setTimeout(()=>{
                te(n);
            });
        })(r), e8 = r, t5 = De(e8.input), e8.customClass && u1(t5, e8.customClass.input));
    }, Oe = (t)=>{
        for(let e = 0; e < t.attributes.length; e++){
            var n = t.attributes[e].name;
            [
                "type",
                "value",
                "style"
            ].includes(n) || t.removeAttribute(n);
        }
    }, je = (e, t)=>{
        e.placeholder && !t.inputPlaceholder || (e.placeholder = t.inputPlaceholder);
    }, Me = (e, t, n)=>{
        if (n.inputLabel) {
            e.id = p.input;
            const i = document.createElement("label");
            var o = p["input-label"];
            i.setAttribute("for", e.id), i.className = o, u1(i, n.customClass.inputLabel), i.innerText = n.inputLabel, t.insertAdjacentElement("beforebegin", i);
        }
    }, De = (e)=>{
        e = p[e] || p.input;
        return ie(g(), e);
    }, Ie = {
    }, He = (Ie.text = Ie.email = Ie.password = Ie.number = Ie.tel = Ie.url = (e, t)=>("string" == typeof t.inputValue || "number" == typeof t.inputValue ? e.value = t.inputValue : A(t.inputValue) || a1('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof t.inputValue, '"')), Me(e, e, t), je(e, t), e.type = t.input, e)
    , Ie.file = (e, t)=>(Me(e, e, t), je(e, t), e)
    , Ie.range = (e, t)=>{
        const n = e.querySelector("input"), o = e.querySelector("output");
        return n.value = t.inputValue, n.type = t.input, o.value = t.inputValue, Me(n, e, t), e;
    }, Ie.select = (e, t)=>{
        if (e.textContent = "", t.inputPlaceholder) {
            const n = document.createElement("option");
            l1(n, t.inputPlaceholder), n.value = "", n.disabled = !0, n.selected = !0, e.appendChild(n);
        }
        return Me(e, e, t), e;
    }, Ie.radio = (e)=>(e.textContent = "", e)
    , Ie.checkbox = (e, t)=>{
        const n = ee(g(), "checkbox");
        n.value = "1", n.id = p.checkbox, n.checked = Boolean(t.inputValue);
        var o = e.querySelector("span");
        return l1(o, t.inputPlaceholder), e;
    }, Ie.textarea = (n, e9)=>{
        n.value = e9.inputValue, je(n, e9), Me(n, n, e9);
        return setTimeout(()=>{
            if ("MutationObserver" in window) {
                const t = parseInt(window.getComputedStyle(g()).width);
                new MutationObserver(()=>{
                    var e = n.offsetWidth + (e = n, parseInt(window.getComputedStyle(e).marginLeft) + parseInt(window.getComputedStyle(e).marginRight));
                    e > t ? g().style.width = "".concat(e, "px") : g().style.width = null;
                }).observe(n, {
                    attributes: !0,
                    attributeFilter: [
                        "style"
                    ]
                });
            }
        }), n;
    }, (e, t)=>{
        const n = D();
        Q(n, t, "htmlContainer"), t.html ? (Ae(t.html, n), d1(n, "block")) : t.text ? (n.textContent = t.text, d1(n, "block")) : h(n), Le(e, t);
    }), qe = (e, t)=>{
        var n = W();
        se(n, t.footer), t.footer && Ae(t.footer, n), Q(n, t, "footer");
    }, Ve = (e, t)=>{
        const n = _();
        l1(n, t.closeButtonHtml), Q(n, t, "closeButton"), se(n, t.showCloseButton), n.setAttribute("aria-label", t.closeButtonAriaLabel);
    }, Ne = (e, t)=>{
        var e = b.innerParams.get(e), n = j();
        return e && t.icon === e.icon ? (ze(n, t), void Re(n, t)) : t.icon || t.iconHtml ? t.icon && -1 === Object.keys(S).indexOf(t.icon) ? (v('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(t.icon, '"')), h(n)) : (d1(n), ze(n, t), Re(n, t), void u1(n, t.showClass.icon)) : h(n);
    }, Re = (e, t)=>{
        for(const n in S)t.icon !== n && oe(e, S[n]);
        u1(e, S[t.icon]), _e(e, t), Fe(), Q(e, t, "icon");
    }, Fe = ()=>{
        const e = g();
        var t = window.getComputedStyle(e).getPropertyValue("background-color");
        const n = e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");
        for(let e10 = 0; e10 < n.length; e10++)n[e10].style.backgroundColor = t;
    }, Ue = '\n  <div class="swal2-success-circular-line-left"></div>\n  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n  <div class="swal2-success-circular-line-right"></div>\n', We = '\n  <span class="swal2-x-mark">\n    <span class="swal2-x-mark-line-left"></span>\n    <span class="swal2-x-mark-line-right"></span>\n  </span>\n', ze = (e, t)=>{
        var n;
        e.textContent = "", t.iconHtml ? l1(e, Ke(t.iconHtml)) : "success" === t.icon ? l1(e, Ue) : "error" === t.icon ? l1(e, We) : (n = {
            question: "?",
            warning: "!",
            info: "i"
        }, l1(e, Ke(n[t.icon])));
    }, _e = (e, t)=>{
        if (t.iconColor) {
            e.style.color = t.iconColor, e.style.borderColor = t.iconColor;
            for (const n of [
                ".swal2-success-line-tip",
                ".swal2-success-line-long",
                ".swal2-x-mark-line-left",
                ".swal2-x-mark-line-right"
            ])re(e, n, "backgroundColor", t.iconColor);
            re(e, ".swal2-success-ring", "borderColor", t.iconColor);
        }
    }, Ke = (e)=>'<div class="'.concat(p["icon-content"], '">').concat(e, "</div>")
    , Ye = (e, t)=>{
        const n = I();
        if (!t.imageUrl) return h(n);
        d1(n, ""), n.setAttribute("src", t.imageUrl), n.setAttribute("alt", t.imageAlt), ae(n, "width", t.imageWidth), ae(n, "height", t.imageHeight), n.className = p.image, Q(n, t, "image");
    }, Ze = (e11, o)=>{
        const i = H();
        if (!o.progressSteps || 0 === o.progressSteps.length) return h(i);
        d1(i), i.textContent = "", o.currentProgressStep >= o.progressSteps.length && a1("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), o.progressSteps.forEach((e12, t6)=>{
            n = document.createElement("li"), u1(n, p["progress-step"]), l1(n, e12);
            var n, e12 = n;
            i.appendChild(e12), t6 === o.currentProgressStep && u1(e12, p["active-progress-step"]), t6 !== o.progressSteps.length - 1 && (n = ((e)=>{
                const t = document.createElement("li");
                return u1(t, p["progress-step-line"]), e.progressStepsDistance && (t.style.width = e.progressStepsDistance), t;
            })(o), i.appendChild(n));
        });
    }, Je = (e, t)=>{
        const n = M();
        se(n, t.title || t.titleText, "block"), t.title && Ae(t.title, n), t.titleText && (n.innerText = t.titleText), Q(n, t, "title");
    }, Xe = (e, t)=>{
        var n = m();
        const o = g();
        t.toast ? (ae(n, "width", t.width), o.style.width = "100%", o.insertBefore(R(), j())) : ae(o, "width", t.width), ae(o, "padding", t.padding), t.color && (o.style.color = t.color), t.background && (o.style.background = t.background), h(q());
        n = o;
        (n.className = "".concat(p.popup, " ").concat(ce(n) ? t.showClass.popup : ""), t.toast) ? (u1([
            document.documentElement,
            document.body
        ], p["toast-shown"]), u1(n, p.toast)) : u1(n, p.modal);
        Q(n, t, "popup"), "string" == typeof t.customClass && u1(n, t.customClass);
        t.icon && u1(n, p["icon-".concat(t.icon)]);
    }, $e = (e, t)=>{
        Xe(e, t), Te(e, t), Ze(e, t), Ne(e, t), Ye(e, t), Je(e, t), Ve(e, t), He(e, t), xe(e, t), qe(e, t), "function" == typeof t.didRender && t.didRender(g());
    }, Ge = Object.freeze({
        cancel: "cancel",
        backdrop: "backdrop",
        close: "close",
        esc: "esc",
        timer: "timer"
    }), Qe = ()=>{
        const e13 = i1(document.body.children);
        e13.forEach((e)=>{
            e === m() || e.contains(m()) || (e.hasAttribute("aria-hidden") && e.setAttribute("data-previous-aria-hidden", e.getAttribute("aria-hidden")), e.setAttribute("aria-hidden", "true"));
        });
    }, et = ()=>{
        const e14 = i1(document.body.children);
        e14.forEach((e)=>{
            e.hasAttribute("data-previous-aria-hidden") ? (e.setAttribute("aria-hidden", e.getAttribute("data-previous-aria-hidden")), e.removeAttribute("data-previous-aria-hidden")) : e.removeAttribute("aria-hidden");
        });
    }, tt = [
        "swal-title",
        "swal-html",
        "swal-footer"
    ], nt = (e15)=>{
        const n = {
        };
        return i1(e15.querySelectorAll("swal-param")).forEach((e)=>{
            lt(e, [
                "name",
                "value"
            ]);
            var t = e.getAttribute("name"), e = e.getAttribute("value");
            "boolean" == typeof r1[t] && "false" === e && (n[t] = !1), "object" == typeof r1[t] && (n[t] = JSON.parse(e));
        }), n;
    }, ot = (e16)=>{
        const n = {
        };
        return i1(e16.querySelectorAll("swal-button")).forEach((e)=>{
            lt(e, [
                "type",
                "color",
                "aria-label"
            ]);
            var t = e.getAttribute("type");
            n["".concat(t, "ButtonText")] = e.innerHTML, n["show".concat(y(t), "Button")] = !0, e.hasAttribute("color") && (n["".concat(t, "ButtonColor")] = e.getAttribute("color")), e.hasAttribute("aria-label") && (n["".concat(t, "ButtonAriaLabel")] = e.getAttribute("aria-label"));
        }), n;
    }, it = (e)=>{
        const t = {
        }, n = e.querySelector("swal-image");
        return n && (lt(n, [
            "src",
            "width",
            "height",
            "alt"
        ]), n.hasAttribute("src") && (t.imageUrl = n.getAttribute("src")), n.hasAttribute("width") && (t.imageWidth = n.getAttribute("width")), n.hasAttribute("height") && (t.imageHeight = n.getAttribute("height")), n.hasAttribute("alt") && (t.imageAlt = n.getAttribute("alt"))), t;
    }, at = (e)=>{
        const t = {
        }, n = e.querySelector("swal-icon");
        return n && (lt(n, [
            "type",
            "color"
        ]), n.hasAttribute("type") && (t.icon = n.getAttribute("type")), n.hasAttribute("color") && (t.iconColor = n.getAttribute("color")), t.iconHtml = n.innerHTML), t;
    }, rt = (e17)=>{
        const n = {
        }, t = e17.querySelector("swal-input");
        t && (lt(t, [
            "type",
            "label",
            "placeholder",
            "value"
        ]), n.input = t.getAttribute("type") || "text", t.hasAttribute("label") && (n.inputLabel = t.getAttribute("label")), t.hasAttribute("placeholder") && (n.inputPlaceholder = t.getAttribute("placeholder")), t.hasAttribute("value") && (n.inputValue = t.getAttribute("value")));
        e17 = e17.querySelectorAll("swal-input-option");
        return e17.length && (n.inputOptions = {
        }, i1(e17).forEach((e)=>{
            lt(e, [
                "value"
            ]);
            var t = e.getAttribute("value"), e = e.innerHTML;
            n.inputOptions[t] = e;
        })), n;
    }, st = (e, t)=>{
        const n = {
        };
        for(const o in t){
            const i = t[o], a = e.querySelector(i);
            a && (lt(a, []), n[i.replace(/^swal-/, "")] = a.innerHTML.trim());
        }
        return n;
    }, ct = (e18)=>{
        const t = tt.concat([
            "swal-param",
            "swal-button",
            "swal-image",
            "swal-icon",
            "swal-input",
            "swal-input-option"
        ]);
        i1(e18.children).forEach((e)=>{
            e = e.tagName.toLowerCase();
            -1 === t.indexOf(e) && a1("Unrecognized element <".concat(e, ">"));
        });
    }, lt = (t, n)=>{
        i1(t.attributes).forEach((e)=>{
            -1 === n.indexOf(e.name) && a1([
                'Unrecognized attribute "'.concat(e.name, '" on <').concat(t.tagName.toLowerCase(), ">."),
                "".concat(n.length ? "Allowed attributes are: ".concat(n.join(", ")) : "To set the value, use HTML within the element.")
            ]);
        });
    };
    var ut = {
        email: (e, t)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e) ? Promise.resolve() : Promise.resolve(t || "Invalid email address")
        ,
        url: (e, t)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(e) ? Promise.resolve() : Promise.resolve(t || "Invalid URL")
    };
    function dt(e19) {
        (t = e19).inputValidator || Object.keys(ut).forEach((e)=>{
            t.input === e && (t.inputValidator = ut[e]);
        }), e19.showLoaderOnConfirm && !e19.preConfirm && a1("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"), (n = e19).target && ("string" != typeof n.target || document.querySelector(n.target)) && ("string" == typeof n.target || n.target.appendChild) || (a1('Target parameter is not valid, defaulting to "body"'), n.target = "body"), "string" == typeof e19.title && (e19.title = e19.title.split("\n").join("<br />"));
        var t, n = e19, e19 = be();
        if (pe()) v("SweetAlert2 requires document to initialize");
        else {
            const o = document.createElement("div"), i = (o.className = p.container, e19 && u1(o, p["no-transition"]), l1(o, fe), we(n.target));
            i.appendChild(o), Ce(n), ke(i), ve();
        }
    }
    class pt {
        constructor(e21, t7){
            this.callback = e21, this.remaining = t7, this.running = !1, this.start();
        }
        start() {
            return this.running || (this.running = !0, this.started = new Date, this.id = setTimeout(this.callback, this.remaining)), this.remaining;
        }
        stop() {
            return this.running && (this.running = !1, clearTimeout(this.id), this.remaining -= (new Date).getTime() - this.started.getTime()), this.remaining;
        }
        increase(e20) {
            var t = this.running;
            return t && this.stop(), this.remaining += e20, t && this.start(), this.remaining;
        }
        getTimerLeft() {
            return this.running && (this.stop(), this.start()), this.remaining;
        }
        isRunning() {
            return this.running;
        }
    }
    const mt = ()=>{
        null === X.previousBodyPadding && document.body.scrollHeight > window.innerHeight && (X.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), document.body.style.paddingRight = "".concat(X.previousBodyPadding + (()=>{
            const e = document.createElement("div");
            e.className = p["scrollbar-measure"], document.body.appendChild(e);
            var t = e.getBoundingClientRect().width - e.clientWidth;
            return document.body.removeChild(e), t;
        })(), "px"));
    }, gt = ()=>{
        null !== X.previousBodyPadding && (document.body.style.paddingRight = "".concat(X.previousBodyPadding, "px"), X.previousBodyPadding = null);
    }, ht = ()=>{
        var e22 = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints;
        if (e22 && !$(document.body, p.iosfix)) {
            var t, e22 = document.body.scrollTop;
            document.body.style.top = "".concat(-1 * e22, "px"), u1(document.body, p.iosfix);
            {
                const n = m();
                let t;
                n.ontouchstart = (e)=>{
                    t = ft(e);
                }, n.ontouchmove = (e)=>{
                    t && (e.preventDefault(), e.stopPropagation());
                };
            }
            {
                const o = navigator.userAgent, i = !!o.match(/iPad/i) || !!o.match(/iPhone/i), a = !!o.match(/WebKit/i), r = i && a && !o.match(/CriOS/i);
                r && (t = 44, g().scrollHeight > window.innerHeight - 44 && (m().style.paddingBottom = "".concat(44, "px")));
            }
        }
    }, ft = (e)=>{
        var t, n = e.target, o = m();
        return !((t = e).touches && t.touches.length && "stylus" === t.touches[0].touchType || (t = e).touches && 1 < t.touches.length) && (n === o || !(ue(o) || "INPUT" === n.tagName || "TEXTAREA" === n.tagName || ue(D()) && D().contains(n)));
    }, bt = ()=>{
        var e;
        $(document.body, p.iosfix) && (e = parseInt(document.body.style.top, 10), oe(document.body, p.iosfix), document.body.style.top = "", document.body.scrollTop = -1 * e);
    }, yt = 10, vt = (e)=>{
        const t = g();
        if (e.target === t) {
            const n = m();
            t.removeEventListener(Be, vt), n.style.overflowY = "auto";
        }
    }, wt = (e, t)=>{
        Be && de(t) ? (e.style.overflowY = "hidden", t.addEventListener(Be, vt)) : e.style.overflowY = "auto";
    }, Ct = (e, t, n)=>{
        ht(), t && "hidden" !== n && mt(), setTimeout(()=>{
            e.scrollTop = 0;
        });
    }, kt = (e, t, n)=>{
        u1(e, n.showClass.backdrop), t.style.setProperty("opacity", "0", "important"), d1(t, "grid"), setTimeout(()=>{
            u1(t, n.showClass.popup), t.style.removeProperty("opacity");
        }, yt), u1([
            document.documentElement,
            document.body
        ], p.shown), n.heightAuto && n.backdrop && !n.toast && u1([
            document.documentElement,
            document.body
        ], p["height-auto"]);
    }, At = (e)=>{
        let t = g();
        t || new vn, t = g();
        var n = R();
        if (Z()) h(j());
        else {
            var o = t;
            const i = U(), a = R();
            !e && ce(V()) && (e = V());
            d1(i), e && (h(e), a.setAttribute("data-button-to-replace", e.className));
            a.parentNode.insertBefore(a, e), u1([
                o,
                i
            ], p.loading);
        }
        d1(n), t.setAttribute("data-loading", !0), t.setAttribute("aria-busy", !0), t.focus();
    }, Pt = (t, n)=>{
        const o = g(), i = (e)=>xt[n.input](o, Et(e), n)
        ;
        C(n.inputOptions) || A(n.inputOptions) ? (At(V()), k(n.inputOptions).then((e)=>{
            t.hideLoading(), i(e);
        })) : "object" == typeof n.inputOptions ? i(n.inputOptions) : v("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof n.inputOptions));
    }, Bt = (t, n)=>{
        const o = t.getInput();
        h(o), k(n.inputValue).then((e)=>{
            o.value = "number" === n.input ? parseFloat(e) || 0 : "".concat(e), d1(o), o.focus(), t.hideLoading();
        }).catch((e)=>{
            v("Error in inputValue promise: ".concat(e)), o.value = "", d1(o), o.focus(), t.hideLoading();
        });
    }, xt = {
        select: (e23, t8, i)=>{
            const a = ie(e23, p.select), r = (e, t, n)=>{
                const o = document.createElement("option");
                o.value = n, l1(o, t), o.selected = Tt(n, i.inputValue), e.appendChild(o);
            };
            t8.forEach((e24)=>{
                var t = e24[0];
                const n = e24[1];
                if (Array.isArray(n)) {
                    const o = document.createElement("optgroup");
                    o.label = t, o.disabled = !1, a.appendChild(o), n.forEach((e)=>r(o, e[1], e[0])
                    );
                } else r(a, n, t);
            }), a.focus();
        },
        radio: (e25, t9, a)=>{
            const r = ie(e25, p.radio), n3 = (t9.forEach((e)=>{
                var t = e[0], e = e[1];
                const n = document.createElement("input"), o = document.createElement("label"), i = (n.type = "radio", n.name = p.radio, n.value = t, Tt(t, a.inputValue) && (n.checked = !0), document.createElement("span"));
                l1(i, e), i.className = p.label, o.appendChild(n), o.appendChild(i), r.appendChild(o);
            }), r.querySelectorAll("input"));
            n3.length && n3[0].focus();
        }
    }, Et = (n4)=>{
        const o = [];
        return "undefined" != typeof Map && n4 instanceof Map ? n4.forEach((e, t)=>{
            let n = e;
            "object" == typeof n && (n = Et(n)), o.push([
                t,
                n
            ]);
        }) : Object.keys(n4).forEach((e)=>{
            let t = n4[e];
            "object" == typeof t && (t = Et(t)), o.push([
                e,
                t
            ]);
        }), o;
    }, Tt = (e, t)=>t && t.toString() === e.toString()
    , St = (e26, t10)=>{
        var n5 = b.innerParams.get(e26);
        if (!n5.input) return v('The "input" parameter is needed to be set when using returnInputValueOn'.concat(y(t10)));
        var o3 = ((e, t)=>{
            const n = e.getInput();
            if (!n) return null;
            switch(t.input){
                case "checkbox":
                    return n.checked ? 1 : 0;
                case "radio":
                    return (o = n).checked ? o.value : null;
                case "file":
                    return (o = n).files.length ? null !== o.getAttribute("multiple") ? o.files : o.files[0] : null;
                default:
                    return t.inputAutoTrim ? n.value.trim() : n.value;
            }
            var o;
        })(e26, n5);
        if (n5.inputValidator) {
            var i = e26;
            var a = o3;
            var r = t10;
            const s = b.innerParams.get(i), c = (i.disableInput(), Promise.resolve().then(()=>k(s.inputValidator(a, s.validationMessage))
            ));
            c.then((e)=>{
                i.enableButtons(), i.enableInput(), e ? i.showValidationMessage(e) : ("deny" === r ? Lt : Mt)(i, a);
            });
        } else e26.getInput().checkValidity() ? ("deny" === t10 ? Lt : Mt)(e26, o3) : (e26.enableButtons(), e26.showValidationMessage(n5.validationMessage));
    }, Lt = (t, n)=>{
        const e27 = b.innerParams.get(t || void 0);
        if (e27.showLoaderOnDeny && At(N()), e27.preDeny) {
            b.awaitingPromise.set(t || void 0, !0);
            const o = Promise.resolve().then(()=>k(e27.preDeny(n, e27.validationMessage))
            );
            o.then((e)=>{
                !1 === e ? t.hideLoading() : t.closePopup({
                    isDenied: !0,
                    value: void 0 === e ? n : e
                });
            }).catch((e)=>jt(t || void 0, e)
            );
        } else t.closePopup({
            isDenied: !0,
            value: n
        });
    }, Ot = (e, t)=>{
        e.closePopup({
            isConfirmed: !0,
            value: t
        });
    }, jt = (e, t)=>{
        e.rejectPromise(t);
    }, Mt = (t, n)=>{
        const e28 = b.innerParams.get(t || void 0);
        if (e28.showLoaderOnConfirm && At(), e28.preConfirm) {
            t.resetValidationMessage(), b.awaitingPromise.set(t || void 0, !0);
            const o = Promise.resolve().then(()=>k(e28.preConfirm(n, e28.validationMessage))
            );
            o.then((e)=>{
                ce(q()) || !1 === e ? t.hideLoading() : Ot(t, void 0 === e ? n : e);
            }).catch((e)=>jt(t || void 0, e)
            );
        } else Ot(t, n);
    }, Dt = (n, e29, o)=>{
        e29.popup.onclick = ()=>{
            var e, t = b.innerParams.get(n);
            t && ((e = t).showConfirmButton || e.showDenyButton || e.showCancelButton || e.showCloseButton || t.timer || t.input) || o(Ge.close);
        };
    };
    let It = !1;
    const Ht = (t)=>{
        t.popup.onmousedown = ()=>{
            t.container.onmouseup = function(e) {
                t.container.onmouseup = void 0, e.target === t.container && (It = !0);
            };
        };
    }, qt = (t)=>{
        t.container.onmousedown = ()=>{
            t.popup.onmouseup = function(e) {
                t.popup.onmouseup = void 0, e.target !== t.popup && !t.popup.contains(e.target) || (It = !0);
            };
        };
    }, Vt = (n, o, i)=>{
        o.container.onclick = (e)=>{
            var t = b.innerParams.get(n);
            It ? It = !1 : e.target === o.container && w(t.allowOutsideClick) && i(Ge.backdrop);
        };
    };
    const Nt = ()=>V() && V().click()
    ;
    const Rt = (e, t, n)=>{
        const o = K();
        if (o.length) return (t += n) === o.length ? t = 0 : -1 === t && (t = o.length - 1), o[t].focus();
        g().focus();
    }, Ft = [
        "ArrowRight",
        "ArrowDown"
    ], Ut = [
        "ArrowLeft",
        "ArrowUp"
    ], Wt = (e, n, o)=>{
        var i = b.innerParams.get(e);
        if (i) {
            if (i.stopKeydownPropagation && n.stopPropagation(), "Enter" === n.key) a = n, t = i, w(t.allowEnterKey) && !a.isComposing && a.target && e.getInput() && a.target.outerHTML === e.getInput().outerHTML && ([
                "textarea",
                "file"
            ].includes(t.input) || (Nt(), a.preventDefault()));
            else if ("Tab" !== n.key) {
                if ([
                    ...Ft,
                    ...Ut
                ].includes(n.key)) {
                    e = n.key;
                    const s = V(), c = N(), d = F();
                    if ([
                        s,
                        c,
                        d
                    ].includes(document.activeElement)) {
                        var t = Ft.includes(e) ? "nextElementSibling" : "previousElementSibling";
                        const l = document.activeElement[t];
                        l instanceof HTMLElement && l.focus();
                    }
                } else if ("Escape" === n.key) {
                    var a = n, e = i;
                    if (w(e.allowEscapeKey)) {
                        a.preventDefault();
                        o(Ge.esc);
                    }
                }
            } else {
                e = n;
                o = i;
                var u = e.target, r = K();
                let t = -1;
                for(let e30 = 0; e30 < r.length; e30++)if (u === r[e30]) {
                    t = e30;
                    break;
                }
                e.shiftKey ? Rt(o, t, -1) : Rt(o, t, 1);
                e.stopPropagation(), e.preventDefault();
            }
        }
    }, zt = (e)=>"object" == typeof e && e.jquery
    , _t = (e)=>e instanceof Element || zt(e)
    ;
    const Kt = ()=>{
        if (f.timeout) {
            {
                const n = z();
                var e = parseInt(window.getComputedStyle(n).width), t = (n.style.removeProperty("transition"), n.style.width = "100%", parseInt(window.getComputedStyle(n).width)), e = e / t * 100;
                n.style.removeProperty("transition"), n.style.width = "".concat(e, "%");
            }
            return f.timeout.stop();
        }
    }, Yt = ()=>{
        var e;
        if (f.timeout) return e = f.timeout.start(), J(e), e;
    };
    let Zt = !1;
    const Jt = {
    };
    const Xt = (t)=>{
        for(let e = t.target; e && e !== document; e = e.parentNode)for(const o in Jt){
            var n = e.getAttribute(o);
            if (n) return void Jt[o].fire({
                template: n
            });
        }
    };
    e1 = Object.freeze({
        isValidParameter: B,
        isUpdatableParameter: x,
        isDeprecatedParameter: E,
        argsToParams: (n)=>{
            const o = {
            };
            return "object" != typeof n[0] || _t(n[0]) ? [
                "title",
                "html",
                "icon"
            ].forEach((e, t)=>{
                t = n[t];
                "string" == typeof t || _t(t) ? o[e] = t : void 0 !== t && v("Unexpected type of ".concat(e, '! Expected "string" or "Element", got ').concat(typeof t));
            }) : Object.assign(o, n[0]), o;
        },
        isVisible: ()=>ce(g())
        ,
        clickConfirm: Nt,
        clickDeny: ()=>N() && N().click()
        ,
        clickCancel: ()=>F() && F().click()
        ,
        getContainer: m,
        getPopup: g,
        getTitle: M,
        getHtmlContainer: D,
        getImage: I,
        getIcon: j,
        getInputLabel: ()=>O(p["input-label"])
        ,
        getCloseButton: _,
        getActions: U,
        getConfirmButton: V,
        getDenyButton: N,
        getCancelButton: F,
        getLoader: R,
        getFooter: W,
        getTimerProgressBar: z,
        getFocusableElements: K,
        getValidationMessage: q,
        isLoading: ()=>g().hasAttribute("data-loading")
        ,
        fire: function() {
            for(var e = arguments.length, t = new Array(e), n = 0; n < e; n++)t[n] = arguments[n];
            return new this(...t);
        },
        mixin: function(n) {
            class e extends this {
                _main(e31, t) {
                    return super._main(e31, Object.assign({
                    }, n, t));
                }
            }
            return e;
        },
        showLoading: At,
        enableLoading: At,
        getTimerLeft: ()=>f.timeout && f.timeout.getTimerLeft()
        ,
        stopTimer: Kt,
        resumeTimer: Yt,
        toggleTimer: ()=>{
            var e = f.timeout;
            return e && (e.running ? Kt : Yt)();
        },
        increaseTimer: (e)=>{
            if (f.timeout) return e = f.timeout.increase(e), J(e, !0), e;
        },
        isTimerRunning: ()=>f.timeout && f.timeout.isRunning()
        ,
        bindClickHandler: function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "data-swal-template";
            Jt[e] = this, Zt || (document.body.addEventListener("click", Xt), Zt = !0);
        }
    });
    function $t() {
        var e, t = b.innerParams.get(this);
        if (t) {
            const n = b.domCache.get(this);
            h(n.loader), Z() ? t.icon && d1(j()) : (t = n, (e = t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"))).length ? d1(e[0], "inline-block") : le() && h(t.actions)), oe([
                n.popup,
                n.actions
            ], p.loading), n.popup.removeAttribute("aria-busy"), n.popup.removeAttribute("data-loading"), n.confirmButton.disabled = !1, n.denyButton.disabled = !1, n.cancelButton.disabled = !1;
        }
    }
    var Gt = {
        swalPromiseResolve: new WeakMap,
        swalPromiseReject: new WeakMap
    };
    function Qt(e, t, n, o) {
        Z() ? on(e, o) : (he(n).then(()=>on(e, o)
        ), f.keydownTarget.removeEventListener("keydown", f.keydownHandler, {
            capture: f.keydownListenerCapture
        }), f.keydownHandlerAdded = !1), /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? (t.setAttribute("style", "display:none !important"), t.removeAttribute("class"), t.innerHTML = "") : t.remove(), Y() && (gt(), bt(), et()), oe([
            document.documentElement,
            document.body
        ], [
            p.shown,
            p["height-auto"],
            p["no-backdrop"],
            p["toast-shown"]
        ]);
    }
    function en(e32) {
        e32 = void 0 !== (n6 = e32) ? Object.assign({
            isConfirmed: !1,
            isDenied: !1,
            isDismissed: !1
        }, n6) : {
            isConfirmed: !1,
            isDenied: !1,
            isDismissed: !0
        };
        const t11 = Gt.swalPromiseResolve.get(this);
        var n6 = ((e)=>{
            const t = g();
            if (!t) return false;
            const n = b.innerParams.get(e);
            if (!n || $(t, n.hideClass.popup)) return false;
            oe(t, n.showClass.popup), u1(t, n.hideClass.popup);
            const o = m();
            return oe(o, n.showClass.backdrop), u1(o, n.hideClass.backdrop), nn(e, t, n), true;
        })(this);
        this.isAwaitingPromise() ? e32.isDismissed || (tn(this), t11(e32)) : n6 && t11(e32);
    }
    const tn = (e)=>{
        e.isAwaitingPromise() && (b.awaitingPromise.delete(e), b.innerParams.get(e) || e._destroy());
    }, nn = (e33, t, n)=>{
        var o, i, a, r = m(), s = Be && de(t);
        "function" == typeof n.willClose && n.willClose(t), s ? (s = e33, o = t, t = r, i = n.returnFocus, a = n.didClose, f.swalCloseEventFinishedCallback = Qt.bind(null, s, t, i, a), o.addEventListener(Be, function(e) {
            e.target === o && (f.swalCloseEventFinishedCallback(), delete f.swalCloseEventFinishedCallback);
        })) : Qt(e33, r, n.returnFocus, n.didClose);
    }, on = (e, t)=>{
        setTimeout(()=>{
            "function" == typeof t && t.bind(e.params)(), e._destroy();
        });
    };
    function an(e, t, n) {
        const o = b.domCache.get(e);
        t.forEach((e)=>{
            o[e].disabled = n;
        });
    }
    function rn(e, t) {
        if (!e) return !1;
        if ("radio" === e.type) {
            const n = e.parentNode.parentNode, o = n.querySelectorAll("input");
            for(let e34 = 0; e34 < o.length; e34++)o[e34].disabled = t;
        } else e.disabled = t;
    }
    const sn = (e)=>{
        e.isAwaitingPromise() ? (cn(b, e), b.awaitingPromise.set(e, !0)) : (cn(Gt, e), cn(b, e));
    }, cn = (e, t)=>{
        for(const n in e)e[n].delete(t);
    };
    var ln = Object.freeze({
        hideLoading: $t,
        disableLoading: $t,
        getInput: function(e) {
            var t = b.innerParams.get(e || this);
            return (e = b.domCache.get(e || this)) ? ee(e.popup, t.input) : null;
        },
        close: en,
        isAwaitingPromise: function() {
            return !!b.awaitingPromise.get(this);
        },
        rejectPromise: function(e) {
            const t = Gt.swalPromiseReject.get(this);
            tn(this), t && t(e);
        },
        closePopup: en,
        closeModal: en,
        closeToast: en,
        enableButtons: function() {
            an(this, [
                "confirmButton",
                "denyButton",
                "cancelButton"
            ], !1);
        },
        disableButtons: function() {
            an(this, [
                "confirmButton",
                "denyButton",
                "cancelButton"
            ], !0);
        },
        enableInput: function() {
            return rn(this.getInput(), !1);
        },
        disableInput: function() {
            return rn(this.getInput(), !0);
        },
        showValidationMessage: function(e) {
            const t = b.domCache.get(this);
            var n = b.innerParams.get(this);
            l1(t.validationMessage, e), t.validationMessage.className = p["validation-message"], n.customClass && n.customClass.validationMessage && u1(t.validationMessage, n.customClass.validationMessage), d1(t.validationMessage);
            const o = this.getInput();
            o && (o.setAttribute("aria-invalid", !0), o.setAttribute("aria-describedby", p["validation-message"]), te(o), u1(o, p.inputerror));
        },
        resetValidationMessage: function() {
            var e = b.domCache.get(this);
            e.validationMessage && h(e.validationMessage);
            const t = this.getInput();
            t && (t.removeAttribute("aria-invalid"), t.removeAttribute("aria-describedby"), oe(t, p.inputerror));
        },
        getProgressSteps: function() {
            return b.domCache.get(this).progressSteps;
        },
        update: function(e35) {
            var t12 = g(), n7 = b.innerParams.get(this);
            if (!t12 || $(t12, n7.hideClass.popup)) return a1("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
            t12 = ((t)=>{
                const n = {
                };
                return Object.keys(t).forEach((e)=>{
                    if (x(e)) n[e] = t[e];
                    else a1('Invalid parameter to update: "'.concat(e, '". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md'));
                }), n;
            })(e35), n7 = Object.assign({
            }, n7, t12), $e(this, n7), b.innerParams.set(this, n7), Object.defineProperties(this, {
                params: {
                    value: Object.assign({
                    }, this.params, e35),
                    writable: !1,
                    enumerable: !0
                }
            });
        },
        _destroy: function() {
            var e = b.domCache.get(this);
            const t = b.innerParams.get(this);
            t ? (e.popup && f.swalCloseEventFinishedCallback && (f.swalCloseEventFinishedCallback(), delete f.swalCloseEventFinishedCallback), f.deferDisposalTimer && (clearTimeout(f.deferDisposalTimer), delete f.deferDisposalTimer), "function" == typeof t.didDestroy && t.didDestroy(), e = this, sn(e), delete e.params, delete f.keydownHandler, delete f.keydownTarget, delete f.currentInstance) : sn(this);
        }
    });
    let un;
    class dn {
        constructor(){
            if ("undefined" != typeof window) {
                un = this;
                for(var e = arguments.length, t = new Array(e), n = 0; n < e; n++)t[n] = arguments[n];
                var o = Object.freeze(this.constructor.argsToParams(t)), o = (Object.defineProperties(this, {
                    params: {
                        value: o,
                        writable: !1,
                        enumerable: !0,
                        configurable: !0
                    }
                }), this._main(this.params));
                b.promise.set(this, o);
            }
        }
        _main(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {
            }, e = (T(Object.assign({
            }, t, e)), f.currentInstance && (f.currentInstance._destroy(), Y() && et()), f.currentInstance = this, mn(e, t)), t = (dt(e), Object.freeze(e), f.timeout && (f.timeout.stop(), delete f.timeout), clearTimeout(f.restoreFocusTimeout), gn(this));
            return $e(this, e), b.innerParams.set(this, e), pn(this, t, e);
        }
        then(e37) {
            const t = b.promise.get(this);
            return t.then(e37);
        }
        finally(e36) {
            const t = b.promise.get(this);
            return t.finally(e36);
        }
    }
    const pn = (l, u, d)=>new Promise((e38, t13)=>{
            const n = (e)=>{
                l.closePopup({
                    isDismissed: !0,
                    dismiss: e
                });
            };
            var o, i, a;
            Gt.swalPromiseResolve.set(l, e38), Gt.swalPromiseReject.set(l, t13), u.confirmButton.onclick = ()=>{
                var e = l, t = b.innerParams.get(e);
                e.disableButtons(), t.input ? St(e, "confirm") : Mt(e, !0);
            }, u.denyButton.onclick = ()=>{
                var e = l, t = b.innerParams.get(e);
                e.disableButtons(), t.returnInputValueOnDeny ? St(e, "deny") : Lt(e, !1);
            }, u.cancelButton.onclick = ()=>{
                var e = l, t = n;
                e.disableButtons(), t(Ge.cancel);
            }, u.closeButton.onclick = ()=>n(Ge.close)
            , e38 = l, t13 = u, a = n, b.innerParams.get(e38).toast ? Dt(e38, t13, a) : (Ht(t13), qt(t13), Vt(e38, t13, a)), o = l, e38 = f, t13 = d, i = n, e38.keydownTarget && e38.keydownHandlerAdded && (e38.keydownTarget.removeEventListener("keydown", e38.keydownHandler, {
                capture: e38.keydownListenerCapture
            }), e38.keydownHandlerAdded = !1), t13.toast || (e38.keydownHandler = (e)=>Wt(o, e, i)
            , e38.keydownTarget = t13.keydownListenerCapture ? window : g(), e38.keydownListenerCapture = t13.keydownListenerCapture, e38.keydownTarget.addEventListener("keydown", e38.keydownHandler, {
                capture: e38.keydownListenerCapture
            }), e38.keydownHandlerAdded = !0), a = l, "select" === (t13 = d).input || "radio" === t13.input ? Pt(a, t13) : [
                "text",
                "email",
                "number",
                "tel",
                "textarea"
            ].includes(t13.input) && (C(t13.inputValue) || A(t13.inputValue)) && (At(V()), Bt(a, t13));
            {
                var r = d;
                const s = m(), c = g();
                "function" == typeof r.willOpen && r.willOpen(c), e38 = window.getComputedStyle(document.body).overflowY, kt(s, c, r), setTimeout(()=>{
                    wt(s, c);
                }, yt), Y() && (Ct(s, r.scrollbarPadding, e38), Qe()), Z() || f.previousActiveElement || (f.previousActiveElement = document.activeElement), "function" == typeof r.didOpen && setTimeout(()=>r.didOpen(c)
                ), oe(s, p["no-transition"]);
            }
            hn(f, d, n), fn(u, d), setTimeout(()=>{
                u.container.scrollTop = 0;
            });
        })
    , mn = (e39, t)=>{
        var n = ((e)=>{
            e = "string" == typeof e.template ? document.querySelector(e.template) : e.template;
            if (!e) return {
            };
            e = e.content, ct(e), e = Object.assign(nt(e), ot(e), it(e), at(e), rt(e), st(e, tt));
            return e;
        })(e39);
        const o = Object.assign({
        }, r1, t, n, e39);
        return o.showClass = Object.assign({
        }, r1.showClass, o.showClass), o.hideClass = Object.assign({
        }, r1.hideClass, o.hideClass), o;
    }, gn = (e)=>{
        var t = {
            popup: g(),
            container: m(),
            actions: U(),
            confirmButton: V(),
            denyButton: N(),
            cancelButton: F(),
            loader: R(),
            closeButton: _(),
            validationMessage: q(),
            progressSteps: H()
        };
        return b.domCache.set(e, t), t;
    }, hn = (e, t, n)=>{
        var o = z();
        h(o), t.timer && (e.timeout = new pt(()=>{
            n("timer"), delete e.timeout;
        }, t.timer), t.timerProgressBar && (d1(o), Q(o, t, "timerProgressBar"), setTimeout(()=>{
            e.timeout && e.timeout.running && J(t.timer);
        })));
    }, fn = (e, t)=>{
        if (!t.toast) return w(t.allowEnterKey) ? void (bn(e, t) || Rt(t, -1, 1)) : yn();
    }, bn = (e, t)=>t.focusDeny && ce(e.denyButton) ? (e.denyButton.focus(), !0) : t.focusCancel && ce(e.cancelButton) ? (e.cancelButton.focus(), !0) : !(!t.focusConfirm || !ce(e.confirmButton)) && (e.confirmButton.focus(), !0)
    , yn = ()=>{
        document.activeElement instanceof HTMLElement && "function" == typeof document.activeElement.blur && document.activeElement.blur();
    }, vn = (Object.assign(dn.prototype, ln), Object.assign(dn, e1), Object.keys(ln).forEach((e)=>{
        dn[e] = function() {
            if (un) return un[e](...arguments);
        };
    }), dn.DismissReason = Ge, dn.version = "11.4.0", dn);
    return vn.default = vn, vn;
}), void 0 !== this && this.Sweetalert2 && (this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2);
"undefined" != typeof document && (function(e, t) {
    var n = e.createElement("style");
    if (e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet) n.styleSheet.disabled || (n.styleSheet.cssText = t);
    else try {
        n.innerHTML = t;
    } catch (e40) {
        n.innerText = t;
    }
})(document, ".swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4!important;grid-row:1/4!important;grid-template-columns:1fr 99fr 1fr;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:\"top-start     top            top-end\" \"center-start  center         center-end\" \"bottom-start  bottom-center  bottom-end\";grid-template-rows:minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto);grid-template-rows:minmax(min-content,auto) minmax(min-content,auto) minmax(min-content,auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-bottom-start,.swal2-container.swal2-center-start,.swal2-container.swal2-top-start{grid-template-columns:minmax(0,1fr) auto auto}.swal2-container.swal2-bottom,.swal2-container.swal2-center,.swal2-container.swal2-top{grid-template-columns:auto minmax(0,1fr) auto}.swal2-container.swal2-bottom-end,.swal2-container.swal2-center-end,.swal2-container.swal2-top-end{grid-template-columns:auto auto minmax(0,1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-left>.swal2-popup,.swal2-container.swal2-center-start>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-left>.swal2-popup,.swal2-container.swal2-bottom-start>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-fullscreen>.swal2-popup,.swal2-container.swal2-grow-row>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none!important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0,100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px transparent;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:0}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto!important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em 2em 3px}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px transparent;color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid transparent;border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .5s;animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .8s;animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-question-mark .8s;animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@-webkit-keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@-webkit-keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{background-color:transparent!important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:transparent;pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}");

},{}]},["40z7c","7Oa7r"], "7Oa7r", "parcelRequire94c2")

//# sourceMappingURL=privacy.8fe2cc45.js.map
