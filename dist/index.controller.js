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
})({"1yDx9":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "a04f0cc82b0e871e";
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

},{}],"iBwGD":[function(require,module,exports) {
/**
 * @description import App Global modules
 */ var _appHero = require("./app-hero");
var _appFooter = require("./app-footer");
var _appClients = require("./app-clients");
var _appServices = require("./app-services");
var _appAbout = require("./app-about");
var _appContact = require("./app-contact");
var _appHeader = require("./app-header");
/**
 * @description Initial App component
 */ customElements.define('app-bdgroup', class extends HTMLElement {
    constructor(){
        super();
        this.mainId = "main";
        this.template = document.createElement("template");
        this.template.innerHTML = `
            <app-header></app-header>
            <app-hero></app-hero>
            <main id="${this.mainId}">
            </main> 
            <app-footer></app-footer>        
        `;
    }
    connectedCallback() {
        console.log('app initialized');
        this.node = this.template.cloneNode(true).content;
        this.append(this.node);
    }
    disconnectedCallback() {
        this.innerHTML = "";
        this.node = "";
    }
});

},{"./app-hero":"1ZMpA","./app-footer":"j48t7","./app-clients":"l3jM4","./app-services":"5qrIf","./app-about":"kHAcB","./app-contact":"cKtLu","./app-header":"fUXoX"}],"1ZMpA":[function(require,module,exports) {
/**
 * @description App hero component
 */ customElements.define('app-hero', class extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback() {
        console.log('hero component is loaded');
        this.innerHTML = `
        <section id="hero" class="d-flex align-items-center">
        <div class="container position-relative" data-aos="fade-up" data-aos-delay="500">
          <h1> <span style="color: red;">Data-Driven </span>& Websites</h1>
          <h2>Develop, innovate, and inspire through website <span style="color: red;">quality standards </span></h2>
          <a href="/orders.html" class="btn-get-started scrollto">Get Started</a>
        </div>
      </section> 
        `;
    }
    disconnectedCallback() {
        this.innerHTML = "";
    }
});

},{}],"j48t7":[function(require,module,exports) {
/**
 * @description Footer about component
 */ customElements.define('app-footer', class extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback() {
        console.log('footer component is loaded');
        this.innerHTML = `
        <footer id="footer">
            <div class="container">
                <div class="copyright">
                    <span id="year"></span>  &copy; Copyright <strong><span id="company"></span></strong>. All Rights Reserved
                    </div>
                    <div class="credits" id="credits">
                </div>
            </div>
      </footer> 
      <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i
          class="bi bi-arrow-up-short"></i></a>
      <div id="preloader"></div>
        `;
        this.addCompany("BD Group");
        this.addCopyrightYear(new Date().getFullYear());
        this.addCredits(`Developed by <a href="https://bdgroup.co.za">BD Group</a>`);
    }
    addCredits(credits) {
        this.querySelector("#credits").innerHTML = credits;
    }
    addCopyrightYear(year) {
        this.querySelector("#year").innerHTML = year;
    }
    addCompany(name) {
        this.querySelector("#company").innerHTML = name.toString();
    }
    disconnectedCallback() {
        this.innerHTML = "";
    }
});

},{}],"l3jM4":[function(require,module,exports) {
/**
 * @description Clients hero component
 */ customElements.define('app-clients', class extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback() {
        console.log('clients component is loaded');
        this.innerHTML = `
        
    <!-- ======= Clients Section ======= -->
    <section id="clients" class="clients">
      <div class="container" data-aos="zoom-in">

        <div class="row d-flex align-items-center">


          <div class="col-lg-2 col-md-4 col-6">
            <img src="assets/img/clients/client-2.png" class="img-fluid" alt="">
          </div>

          <div class="col-lg-2 col-md-4 col-6">
            <img src="assets/img/clients/client-3.png" class="img-fluid" alt="">
          </div>

          <div class="col-lg-2 col-md-4 col-6">
            <img src="assets/img/clients/client-4.png" class="img-fluid" alt="">
          </div>

          <div class="col-lg-2 col-md-4 col-6">
            <img src="assets/img/clients/client-5.png" class="img-fluid" alt="">
          </div>

          <div class="col-lg-2 col-md-4 col-6">
            <img src="assets/img/clients/client-6.png" class="img-fluid" alt="">
          </div>

          <div class="col-lg-2 col-md-4 col-6">
            <img src="assets/img/clients/client-7.png" class="img-fluid" alt="">
          </div>
        </div>

      </div>
    </section>
        `;
    }
    disconnectedCallback() {
        this.innerHTML = "";
    }
});

},{}],"5qrIf":[function(require,module,exports) {
/**
 * @description Services hero component
 */ customElements.define('app-services', class extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback() {
        console.log('services component is loaded');
        this.template = document.createElement("template");
        this.template.innerHTML = `
        <!-- ======= Services Section ======= -->
        <section id="services" class="services">
          <div class="container">
    
            <div class="section-title">
              <span>Services</span>
              <h2>Services</h2>
              <p>Discover how data can improve your business growth acceleration</p>
            </div>
    
            <div class="row">
              <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up">
                <div class="icon-box">
                  <div class="icon"><i class="bx bxl-whatsapp"></i></div>
                  <h4><a href="#livechat">Live Chat</a></h4>
                  <p>Live Chat Integration on your website, to help customers to get intouch with you instantly.
                  </p>
                </div>
              </div>
    
              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="fade-up"
                data-aos-delay="150">
                <div class="icon-box">
                  <div class="icon"><i class="bx bx-file"></i></div>
                  <h4><a href="">Content Creation</a></h4>
                  <p>Article, content creation for your website, including product descriptions for e-commerce.</p>
                </div>
              </div>
    
              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="fade-up"
                data-aos-delay="300">
                <div class="icon-box">
                  <div class="icon"><i class="bx bx-tachometer"></i></div>
                  <h4><a href="">Machine Learning</a></h4>
                  <p>Artificial intelligence for mobile, and web in order to integrate face recognition, translation, text toxicity detection and more.
                  </p>
                </div>
              </div>
    
              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="fade-up" data-aos-delay="450">
                <div class="icon-box">
                  <div class="icon"><i class="bx bx-code"></i></div>
                  <h4><a href="">Web Add-on features</a></h4>
                  <p>Feature upgrades, custom website plugins for content management systems (CMS), blogs and design of user interface.</p>
                </div>
              </div>
    
              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="fade-up" data-aos-delay="600">
                <div class="icon-box">
                  <div class="icon"><i class="bx bx-chart"></i></div>
                  <h4><a href="">Website Statistics</a></h4>
                  <p>Helping you track website traffic, crash analytics in real time, set event real time conversion goals and monitoring</p>
                </div>
              </div>
    
              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="fade-up" data-aos-delay="750">
                <div class="icon-box">
                  <div class="icon"><i class="bx bx-cog"></i></div>
                  <h4><a href="">Continuous Integration</a></h4>
                  <p>We perform seamlessly fast continous integration, development and testing of your website. </p>
                  <div id="cicd"></div>
                </div>
              </div>
    
            </div>
    
          </div>
        </section><!-- End Services Section -->
        `;
        this.node = this.template.cloneNode(true).content;
        this.cicd = this.node.querySelector("#cidcd");
        this.append(this.node);
    }
    disconnectedCallback() {
        this.innerHTML = "";
    }
});

},{}],"kHAcB":[function(require,module,exports) {
/**
 * @description App about component
 */ customElements.define('app-about', class extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback() {
        console.log('about component is loaded');
        this.innerHTML = `
        <!-- ======= Why Us Section ======= -->
        <section id="why-us" class="why-us">
          <div class="container">
    
            <div class="row">
    
              <div class="col-lg-4" data-aos="fade-up">
                <div class="box">
                  <span>01</span>
                  <h4>Discovery</h4>
                  <p>Our agency will identify problems throught advanced research techniques that also may include intensive
                    data collection</p>
                </div>
              </div>
    
              <div class="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="150">
                <div class="box">
                  <span>02</span>
                  <h4>Identify</h4>
                  <p>Once our team of experts have isolated all the problems, a model of your online business will be build
                    to attempt to key in solutions for the identified issues</p>
                </div>
              </div>
    
              <div class="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="300">
                <div class="box">
                  <span>03</span>
                  <h4>Integration</h4>
                  <p>After all the identified issues have been resolved, tested through prototypes, any feature integration
                    will take place to solve particular problem</p>
                </div>
              </div>
    
            </div>
    
          </div>
        </section><!-- End Why Us Section -->
        `;
    }
    disconnectedCallback() {
        this.innerHTML = "";
    }
});

},{}],"cKtLu":[function(require,module,exports) {
/**
 * @description Contact about component
 */ customElements.define('app-contact', class extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback() {
        console.log('contact component is loaded');
        this.innerHTML = `
        <!-- ======= Contact Section ======= -->
        <section id="contact" class="contact">
          <div class="container">
    
            <div class="section-title">
              <span>Contact</span>
              <h2>Contact</h2>
              <p>We'd love to your about your project.</p>
            </div>
    
            <div class="row" data-aos="fade-up">
              <div class="col-lg-6">
                <div class="info-box mb-4">
                  <i class="bx bx-map"></i>
                  <h3>Our Address</h3>
                  <p>Rosebank corner 191, rivonia, 2196</p>
                </div>
              </div>
    
              <div class="col-lg-3 col-md-6">
                <div class="info-box  mb-4">
                  <i class="bx bx-envelope"></i>
                  <h3>Email Us</h3>
                  <p>info@bdgroup.co.za</p>
                </div>
              </div>
    
              <div class="col-lg-3 col-md-6">
                <div class="info-box  mb-4">
                  <i class="bx bx-phone-call"></i>
                  <h3>Call Us</h3>
                  <p>+27 087 057-1581</p>
                </div>
              </div>
    
            </div>
    
            <div class="row" data-aos="fade-up">
     
            </div>
    
          </div>
        </section><!-- End Contact Section -->
        `;
    }
    disconnectedCallback() {
        this.innerHTML = "";
    }
});

},{}],"fUXoX":[function(require,module,exports) {
/**
 * @description Header about component
 */ customElements.define('app-header', class extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback() {
        console.log('header component is loaded');
        this.innerHTML = `
        
  <!-- ======= Top Bar ======= -->
  <section id="topbar" class="d-flex align-items-center">
    <div class="container d-flex justify-content-center justify-content-md-between">
      <div class="contact-info d-flex align-items-center">
        <i class="bi bi-envelope"></i><a href="mailto:bdgroup.inbox@outlook.com">info@bdgroup.co.za</a>
        &nbsp; <i class="bi bi-whatsapp  "></i> 087 057-1581
      </div>
      <div class="social-links d-none d-md-block">
        <a href="https://twitter.com/realgmatyila" class="twitter"><i class="bi bi-twitter"></i></a>
        <a href="https://facebook.com/bdgroupcoza" class="facebook"><i class="bi bi-facebook"></i></a>
        <a href="https://www.instagram.com/goodwish_za/" class="instagram"><i class="bi bi-instagram"></i></a>

      </div>
    </div>
  </section>

  <!-- ======= Header ======= -->
  <header id="header" class="d-flex align-items-center">
    <div class="container d-flex align-items-center justify-content-between">

      <h1 class="logo"><a href="index.html"> <span style="color: red;">BD </span> Group</a></h1>

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link" href="/">Home</a></li>

          <li><a class="nav-link" href="services.html">Services</a></li>

          <li><a class="nav-link" href="contact.html">Contact Us</a></li>

          <li><a class="nav-link" href="https://tawk.to/chat/5db1f93178ab74187a5b66df/default">Get Support</a>
          </li>

          <li><a class="nav-link" href="login.html">License Renewals</a></li>
          <li><a class="nav-link" href="orders.html">Buy Services</a></li>
 <li><a class="nav-link" href="seoflow.html">Chrome Downloads</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->

    </div>
  </header><!-- End Header -->
        `;
    }
    disconnectedCallback() {
        this.innerHTML = "";
    }
});

},{}]},["1yDx9","iBwGD"], "iBwGD", "parcelRequire94c2")

//# sourceMappingURL=index.controller.js.map
