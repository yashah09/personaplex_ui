function Mf(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r) if (i !== "default" && !(i in e)) {
        const a = Object.getOwnPropertyDescriptor(r, i);
        a && Object.defineProperty(e, i, a.get ? a : { enumerable: true, get: () => r[i] });
      }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const a of i) if (a.type === "childList") for (const o of a.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: true, subtree: true });
  function n(i) {
    const a = {};
    return i.integrity && (a.integrity = i.integrity), i.referrerPolicy && (a.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? a.credentials = "include" : i.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a;
  }
  function r(i) {
    if (i.ep) return;
    i.ep = true;
    const a = n(i);
    fetch(i.href, a);
  }
})();
var wt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function pu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Of = { exports: {} }, os = {}, Ff = { exports: {} }, ke = {};
/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Ra = Symbol.for("react.element"), Gm = Symbol.for("react.portal"), Qm = Symbol.for("react.fragment"), Km = Symbol.for("react.strict_mode"), Ym = Symbol.for("react.profiler"), Xm = Symbol.for("react.provider"), qm = Symbol.for("react.context"), Jm = Symbol.for("react.forward_ref"), ev = Symbol.for("react.suspense"), tv = Symbol.for("react.memo"), nv = Symbol.for("react.lazy"), Tc = Symbol.iterator;
function rv(e) {
  return e === null || typeof e != "object" ? null : (e = Tc && e[Tc] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Uf = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, zf = Object.assign, Vf = {};
function Ti(e, t, n) {
  this.props = e, this.context = t, this.refs = Vf, this.updater = n || Uf;
}
Ti.prototype.isReactComponent = {};
Ti.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ti.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Wf() {
}
Wf.prototype = Ti.prototype;
function mu(e, t, n) {
  this.props = e, this.context = t, this.refs = Vf, this.updater = n || Uf;
}
var vu = mu.prototype = new Wf();
vu.constructor = mu;
zf(vu, Ti.prototype);
vu.isPureReactComponent = true;
var bc = Array.isArray, Hf = Object.prototype.hasOwnProperty, gu = { current: null }, $f = { key: true, ref: true, __self: true, __source: true };
function Zf(e, t, n) {
  var r, i = {}, a = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (a = "" + t.key), t) Hf.call(t, r) && !$f.hasOwnProperty(r) && (i[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) i.children = n;
  else if (1 < s) {
    for (var l = Array(s), c = 0; c < s; c++) l[c] = arguments[c + 2];
    i.children = l;
  }
  if (e && e.defaultProps) for (r in s = e.defaultProps, s) i[r] === void 0 && (i[r] = s[r]);
  return { $$typeof: Ra, type: e, key: a, ref: o, props: i, _owner: gu.current };
}
function iv(e, t) {
  return { $$typeof: Ra, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function yu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ra;
}
function av(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Pc = /\/+/g;
function As(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? av("" + e.key) : t.toString(36);
}
function co(e, t, n, r, i) {
  var a = typeof e;
  (a === "undefined" || a === "boolean") && (e = null);
  var o = false;
  if (e === null) o = true;
  else switch (a) {
    case "string":
    case "number":
      o = true;
      break;
    case "object":
      switch (e.$$typeof) {
        case Ra:
        case Gm:
          o = true;
      }
  }
  if (o) return o = e, i = i(o), e = r === "" ? "." + As(o, 0) : r, bc(i) ? (n = "", e != null && (n = e.replace(Pc, "$&/") + "/"), co(i, t, n, "", function(c) {
    return c;
  })) : i != null && (yu(i) && (i = iv(i, n + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(Pc, "$&/") + "/") + e)), t.push(i)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", bc(e)) for (var s = 0; s < e.length; s++) {
    a = e[s];
    var l = r + As(a, s);
    o += co(a, t, n, l, i);
  }
  else if (l = rv(e), typeof l == "function") for (e = l.call(e), s = 0; !(a = e.next()).done; ) a = a.value, l = r + As(a, s++), o += co(a, t, n, l, i);
  else if (a === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function Ha(e, t, n) {
  if (e == null) return e;
  var r = [], i = 0;
  return co(e, r, "", "", function(a) {
    return t.call(n, a, i++);
  }), r;
}
function ov(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ct = { current: null }, fo = { transition: null }, sv = { ReactCurrentDispatcher: Ct, ReactCurrentBatchConfig: fo, ReactCurrentOwner: gu };
function Gf() {
  throw Error("act(...) is not supported in production builds of React.");
}
ke.Children = { map: Ha, forEach: function(e, t, n) {
  Ha(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Ha(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Ha(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!yu(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
ke.Component = Ti;
ke.Fragment = Qm;
ke.Profiler = Ym;
ke.PureComponent = mu;
ke.StrictMode = Km;
ke.Suspense = ev;
ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sv;
ke.act = Gf;
ke.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = zf({}, e.props), i = e.key, a = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (a = t.ref, o = gu.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
    for (l in t) Hf.call(t, l) && !$f.hasOwnProperty(l) && (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    s = Array(l);
    for (var c = 0; c < l; c++) s[c] = arguments[c + 2];
    r.children = s;
  }
  return { $$typeof: Ra, type: e.type, key: i, ref: a, props: r, _owner: o };
};
ke.createContext = function(e) {
  return e = { $$typeof: qm, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Xm, _context: e }, e.Consumer = e;
};
ke.createElement = Zf;
ke.createFactory = function(e) {
  var t = Zf.bind(null, e);
  return t.type = e, t;
};
ke.createRef = function() {
  return { current: null };
};
ke.forwardRef = function(e) {
  return { $$typeof: Jm, render: e };
};
ke.isValidElement = yu;
ke.lazy = function(e) {
  return { $$typeof: nv, _payload: { _status: -1, _result: e }, _init: ov };
};
ke.memo = function(e, t) {
  return { $$typeof: tv, type: e, compare: t === void 0 ? null : t };
};
ke.startTransition = function(e) {
  var t = fo.transition;
  fo.transition = {};
  try {
    e();
  } finally {
    fo.transition = t;
  }
};
ke.unstable_act = Gf;
ke.useCallback = function(e, t) {
  return Ct.current.useCallback(e, t);
};
ke.useContext = function(e) {
  return Ct.current.useContext(e);
};
ke.useDebugValue = function() {
};
ke.useDeferredValue = function(e) {
  return Ct.current.useDeferredValue(e);
};
ke.useEffect = function(e, t) {
  return Ct.current.useEffect(e, t);
};
ke.useId = function() {
  return Ct.current.useId();
};
ke.useImperativeHandle = function(e, t, n) {
  return Ct.current.useImperativeHandle(e, t, n);
};
ke.useInsertionEffect = function(e, t) {
  return Ct.current.useInsertionEffect(e, t);
};
ke.useLayoutEffect = function(e, t) {
  return Ct.current.useLayoutEffect(e, t);
};
ke.useMemo = function(e, t) {
  return Ct.current.useMemo(e, t);
};
ke.useReducer = function(e, t, n) {
  return Ct.current.useReducer(e, t, n);
};
ke.useRef = function(e) {
  return Ct.current.useRef(e);
};
ke.useState = function(e) {
  return Ct.current.useState(e);
};
ke.useSyncExternalStore = function(e, t, n) {
  return Ct.current.useSyncExternalStore(e, t, n);
};
ke.useTransition = function() {
  return Ct.current.useTransition();
};
ke.version = "18.3.1";
Ff.exports = ke;
var k = Ff.exports;
const lv = pu(k), uv = Mf({ __proto__: null, default: lv }, [k]);
/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var cv = k, dv = Symbol.for("react.element"), fv = Symbol.for("react.fragment"), hv = Object.prototype.hasOwnProperty, pv = cv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, mv = { key: true, ref: true, __self: true, __source: true };
function Qf(e, t, n) {
  var r, i = {}, a = null, o = null;
  n !== void 0 && (a = "" + n), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) hv.call(t, r) && !mv.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: dv, type: e, key: a, ref: o, props: i, _owner: pv.current };
}
os.Fragment = fv;
os.jsx = Qf;
os.jsxs = Qf;
Of.exports = os;
var m = Of.exports, cl = {}, Kf = { exports: {} }, Ut = {}, Yf = { exports: {} }, Xf = {};
/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
(function(e) {
  function t(F, J) {
    var oe = F.length;
    F.push(J);
    e: for (; 0 < oe; ) {
      var ne = oe - 1 >>> 1, K = F[ne];
      if (0 < i(K, J)) F[ne] = J, F[oe] = K, oe = ne;
      else break e;
    }
  }
  function n(F) {
    return F.length === 0 ? null : F[0];
  }
  function r(F) {
    if (F.length === 0) return null;
    var J = F[0], oe = F.pop();
    if (oe !== J) {
      F[0] = oe;
      e: for (var ne = 0, K = F.length, Ze = K >>> 1; ne < Ze; ) {
        var me = 2 * (ne + 1) - 1, Ce = F[me], Oe = me + 1, Ve = F[Oe];
        if (0 > i(Ce, oe)) Oe < K && 0 > i(Ve, Ce) ? (F[ne] = Ve, F[Oe] = oe, ne = Oe) : (F[ne] = Ce, F[me] = oe, ne = me);
        else if (Oe < K && 0 > i(Ve, oe)) F[ne] = Ve, F[Oe] = oe, ne = Oe;
        else break e;
      }
    }
    return J;
  }
  function i(F, J) {
    var oe = F.sortIndex - J.sortIndex;
    return oe !== 0 ? oe : F.id - J.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var a = performance;
    e.unstable_now = function() {
      return a.now();
    };
  } else {
    var o = Date, s = o.now();
    e.unstable_now = function() {
      return o.now() - s;
    };
  }
  var l = [], c = [], f = 1, h = null, g = 3, w = false, E = false, b = false, I = typeof setTimeout == "function" ? setTimeout : null, x = typeof clearTimeout == "function" ? clearTimeout : null, v = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function S(F) {
    for (var J = n(c); J !== null; ) {
      if (J.callback === null) r(c);
      else if (J.startTime <= F) r(c), J.sortIndex = J.expirationTime, t(l, J);
      else break;
      J = n(c);
    }
  }
  function A(F) {
    if (b = false, S(F), !E) if (n(l) !== null) E = true, Se(M);
    else {
      var J = n(c);
      J !== null && Z(A, J.startTime - F);
    }
  }
  function M(F, J) {
    E = false, b && (b = false, x(R), R = -1), w = true;
    var oe = g;
    try {
      for (S(J), h = n(l); h !== null && (!(h.expirationTime > J) || F && !L()); ) {
        var ne = h.callback;
        if (typeof ne == "function") {
          h.callback = null, g = h.priorityLevel;
          var K = ne(h.expirationTime <= J);
          J = e.unstable_now(), typeof K == "function" ? h.callback = K : h === n(l) && r(l), S(J);
        } else r(l);
        h = n(l);
      }
      if (h !== null) var Ze = true;
      else {
        var me = n(c);
        me !== null && Z(A, me.startTime - J), Ze = false;
      }
      return Ze;
    } finally {
      h = null, g = oe, w = false;
    }
  }
  var z = false, _ = null, R = -1, V = 5, T = -1;
  function L() {
    return !(e.unstable_now() - T < V);
  }
  function O() {
    if (_ !== null) {
      var F = e.unstable_now();
      T = F;
      var J = true;
      try {
        J = _(true, F);
      } finally {
        J ? $() : (z = false, _ = null);
      }
    } else z = false;
  }
  var $;
  if (typeof v == "function") $ = function() {
    v(O);
  };
  else if (typeof MessageChannel < "u") {
    var X = new MessageChannel(), de = X.port2;
    X.port1.onmessage = O, $ = function() {
      de.postMessage(null);
    };
  } else $ = function() {
    I(O, 0);
  };
  function Se(F) {
    _ = F, z || (z = true, $());
  }
  function Z(F, J) {
    R = I(function() {
      F(e.unstable_now());
    }, J);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(F) {
    F.callback = null;
  }, e.unstable_continueExecution = function() {
    E || w || (E = true, Se(M));
  }, e.unstable_forceFrameRate = function(F) {
    0 > F || 125 < F ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : V = 0 < F ? Math.floor(1e3 / F) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return g;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(l);
  }, e.unstable_next = function(F) {
    switch (g) {
      case 1:
      case 2:
      case 3:
        var J = 3;
        break;
      default:
        J = g;
    }
    var oe = g;
    g = J;
    try {
      return F();
    } finally {
      g = oe;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(F, J) {
    switch (F) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        F = 3;
    }
    var oe = g;
    g = F;
    try {
      return J();
    } finally {
      g = oe;
    }
  }, e.unstable_scheduleCallback = function(F, J, oe) {
    var ne = e.unstable_now();
    switch (typeof oe == "object" && oe !== null ? (oe = oe.delay, oe = typeof oe == "number" && 0 < oe ? ne + oe : ne) : oe = ne, F) {
      case 1:
        var K = -1;
        break;
      case 2:
        K = 250;
        break;
      case 5:
        K = 1073741823;
        break;
      case 4:
        K = 1e4;
        break;
      default:
        K = 5e3;
    }
    return K = oe + K, F = { id: f++, callback: J, priorityLevel: F, startTime: oe, expirationTime: K, sortIndex: -1 }, oe > ne ? (F.sortIndex = oe, t(c, F), n(l) === null && F === n(c) && (b ? (x(R), R = -1) : b = true, Z(A, oe - ne))) : (F.sortIndex = K, t(l, F), E || w || (E = true, Se(M))), F;
  }, e.unstable_shouldYield = L, e.unstable_wrapCallback = function(F) {
    var J = g;
    return function() {
      var oe = g;
      g = J;
      try {
        return F.apply(this, arguments);
      } finally {
        g = oe;
      }
    };
  };
})(Xf);
Yf.exports = Xf;
var vv = Yf.exports;
/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var gv = k, Ot = vv;
function W(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var qf = /* @__PURE__ */ new Set(), la = {};
function Ir(e, t) {
  fi(e, t), fi(e + "Capture", t);
}
function fi(e, t) {
  for (la[e] = t, e = 0; e < t.length; e++) qf.add(t[e]);
}
var bn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), dl = Object.prototype.hasOwnProperty, yv = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Nc = {}, Rc = {};
function xv(e) {
  return dl.call(Rc, e) ? true : dl.call(Nc, e) ? false : yv.test(e) ? Rc[e] = true : (Nc[e] = true, false);
}
function wv(e, t, n, r) {
  if (n !== null && n.type === 0) return false;
  switch (typeof t) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      return r ? false : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return false;
  }
}
function kv(e, t, n, r) {
  if (t === null || typeof t > "u" || wv(e, t, n, r)) return true;
  if (r) return false;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === false;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return false;
}
function Tt(e, t, n, r, i, a, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = o;
}
var mt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  mt[e] = new Tt(e, 0, false, e, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  mt[t] = new Tt(t, 1, false, e[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  mt[e] = new Tt(e, 2, false, e.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  mt[e] = new Tt(e, 2, false, e, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  mt[e] = new Tt(e, 3, false, e.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  mt[e] = new Tt(e, 3, true, e, null, false, false);
});
["capture", "download"].forEach(function(e) {
  mt[e] = new Tt(e, 4, false, e, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  mt[e] = new Tt(e, 6, false, e, null, false, false);
});
["rowSpan", "start"].forEach(function(e) {
  mt[e] = new Tt(e, 5, false, e.toLowerCase(), null, false, false);
});
var xu = /[\-:]([a-z])/g;
function wu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(xu, wu);
  mt[t] = new Tt(t, 1, false, e, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(xu, wu);
  mt[t] = new Tt(t, 1, false, e, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(xu, wu);
  mt[t] = new Tt(t, 1, false, e, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  mt[e] = new Tt(e, 1, false, e.toLowerCase(), null, false, false);
});
mt.xlinkHref = new Tt("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(e) {
  mt[e] = new Tt(e, 1, false, e.toLowerCase(), null, true, true);
});
function ku(e, t, n, r) {
  var i = mt.hasOwnProperty(t) ? mt[t] : null;
  (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (kv(t, n, i, r) && (n = null), r || i === null ? xv(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? false : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === true ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var jn = gv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, $a = Symbol.for("react.element"), Gr = Symbol.for("react.portal"), Qr = Symbol.for("react.fragment"), Su = Symbol.for("react.strict_mode"), fl = Symbol.for("react.profiler"), Jf = Symbol.for("react.provider"), eh = Symbol.for("react.context"), _u = Symbol.for("react.forward_ref"), hl = Symbol.for("react.suspense"), pl = Symbol.for("react.suspense_list"), Eu = Symbol.for("react.memo"), Un = Symbol.for("react.lazy"), th = Symbol.for("react.offscreen"), Ac = Symbol.iterator;
function Ii(e) {
  return e === null || typeof e != "object" ? null : (e = Ac && e[Ac] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ye = Object.assign, Ds;
function Gi(e) {
  if (Ds === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Ds = t && t[1] || "";
  }
  return `
` + Ds + e;
}
var js = false;
function Is(e, t) {
  if (!e || js) return "";
  js = true;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (c) {
        var r = c;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (c) {
        r = c;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (var i = c.stack.split(`
`), a = r.stack.split(`
`), o = i.length - 1, s = a.length - 1; 1 <= o && 0 <= s && i[o] !== a[s]; ) s--;
      for (; 1 <= o && 0 <= s; o--, s--) if (i[o] !== a[s]) {
        if (o !== 1 || s !== 1) do
          if (o--, s--, 0 > s || i[o] !== a[s]) {
            var l = `
` + i[o].replace(" at new ", " at ");
            return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l;
          }
        while (1 <= o && 0 <= s);
        break;
      }
    }
  } finally {
    js = false, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Gi(e) : "";
}
function Sv(e) {
  switch (e.tag) {
    case 5:
      return Gi(e.type);
    case 16:
      return Gi("Lazy");
    case 13:
      return Gi("Suspense");
    case 19:
      return Gi("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Is(e.type, false), e;
    case 11:
      return e = Is(e.type.render, false), e;
    case 1:
      return e = Is(e.type, true), e;
    default:
      return "";
  }
}
function ml(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Qr:
      return "Fragment";
    case Gr:
      return "Portal";
    case fl:
      return "Profiler";
    case Su:
      return "StrictMode";
    case hl:
      return "Suspense";
    case pl:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case eh:
      return (e.displayName || "Context") + ".Consumer";
    case Jf:
      return (e._context.displayName || "Context") + ".Provider";
    case _u:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Eu:
      return t = e.displayName || null, t !== null ? t : ml(e.type) || "Memo";
    case Un:
      t = e._payload, e = e._init;
      try {
        return ml(e(t));
      } catch {
      }
  }
  return null;
}
function _v(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ml(t);
    case 8:
      return t === Su ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function ar(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function nh(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Ev(e) {
  var t = nh(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var i = n.get, a = n.set;
    return Object.defineProperty(e, t, { configurable: true, get: function() {
      return i.call(this);
    }, set: function(o) {
      r = "" + o, a.call(this, o);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(o) {
      r = "" + o;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function Za(e) {
  e._valueTracker || (e._valueTracker = Ev(e));
}
function rh(e) {
  if (!e) return false;
  var t = e._valueTracker;
  if (!t) return true;
  var n = t.getValue(), r = "";
  return e && (r = nh(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), true) : false;
}
function Co(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function vl(e, t) {
  var n = t.checked;
  return Ye({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Dc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = ar(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function ih(e, t) {
  t = t.checked, t != null && ku(e, "checked", t, false);
}
function gl(e, t) {
  ih(e, t);
  var n = ar(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? yl(e, t.type, n) : t.hasOwnProperty("defaultValue") && yl(e, t.type, ar(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function jc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function yl(e, t, n) {
  (t !== "number" || Co(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Qi = Array.isArray;
function ai(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = true;
    for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = true);
  } else {
    for (n = "" + ar(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        e[i].selected = true, r && (e[i].defaultSelected = true);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = true);
  }
}
function xl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(W(91));
  return Ye({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Ic(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(W(92));
      if (Qi(n)) {
        if (1 < n.length) throw Error(W(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: ar(n) };
}
function ah(e, t) {
  var n = ar(t.value), r = ar(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Lc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function oh(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function wl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? oh(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Ga, sh = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, i);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Ga = Ga || document.createElement("div"), Ga.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ga.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function ua(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ji = { animationIterationCount: true, aspectRatio: true, borderImageOutset: true, borderImageSlice: true, borderImageWidth: true, boxFlex: true, boxFlexGroup: true, boxOrdinalGroup: true, columnCount: true, columns: true, flex: true, flexGrow: true, flexPositive: true, flexShrink: true, flexNegative: true, flexOrder: true, gridArea: true, gridRow: true, gridRowEnd: true, gridRowSpan: true, gridRowStart: true, gridColumn: true, gridColumnEnd: true, gridColumnSpan: true, gridColumnStart: true, fontWeight: true, lineClamp: true, lineHeight: true, opacity: true, order: true, orphans: true, tabSize: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, floodOpacity: true, stopOpacity: true, strokeDasharray: true, strokeDashoffset: true, strokeMiterlimit: true, strokeOpacity: true, strokeWidth: true }, Cv = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ji).forEach(function(e) {
  Cv.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Ji[t] = Ji[e];
  });
});
function lh(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Ji.hasOwnProperty(e) && Ji[e] ? ("" + t).trim() : t + "px";
}
function uh(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, i = lh(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
  }
}
var Tv = Ye({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function kl(e, t) {
  if (t) {
    if (Tv[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(W(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(W(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(W(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(W(62));
  }
}
function Sl(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var _l = null;
function Cu(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var El = null, oi = null, si = null;
function Bc(e) {
  if (e = ja(e)) {
    if (typeof El != "function") throw Error(W(280));
    var t = e.stateNode;
    t && (t = ds(t), El(e.stateNode, e.type, t));
  }
}
function ch(e) {
  oi ? si ? si.push(e) : si = [e] : oi = e;
}
function dh() {
  if (oi) {
    var e = oi, t = si;
    if (si = oi = null, Bc(e), t) for (e = 0; e < t.length; e++) Bc(t[e]);
  }
}
function fh(e, t) {
  return e(t);
}
function hh() {
}
var Ls = false;
function ph(e, t, n) {
  if (Ls) return e(t, n);
  Ls = true;
  try {
    return fh(e, t, n);
  } finally {
    Ls = false, (oi !== null || si !== null) && (hh(), dh());
  }
}
function ca(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ds(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = false;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(W(231, t, typeof n));
  return n;
}
var Cl = false;
if (bn) try {
  var Li = {};
  Object.defineProperty(Li, "passive", { get: function() {
    Cl = true;
  } }), window.addEventListener("test", Li, Li), window.removeEventListener("test", Li, Li);
} catch {
  Cl = false;
}
function bv(e, t, n, r, i, a, o, s, l) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (f) {
    this.onError(f);
  }
}
var ea = false, To = null, bo = false, Tl = null, Pv = { onError: function(e) {
  ea = true, To = e;
} };
function Nv(e, t, n, r, i, a, o, s, l) {
  ea = false, To = null, bv.apply(Pv, arguments);
}
function Rv(e, t, n, r, i, a, o, s, l) {
  if (Nv.apply(this, arguments), ea) {
    if (ea) {
      var c = To;
      ea = false, To = null;
    } else throw Error(W(198));
    bo || (bo = true, Tl = c);
  }
}
function Lr(e) {
  var t = e, n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function mh(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Mc(e) {
  if (Lr(e) !== e) throw Error(W(188));
}
function Av(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Lr(e), t === null) throw Error(W(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var a = i.alternate;
    if (a === null) {
      if (r = i.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === a.child) {
      for (a = i.child; a; ) {
        if (a === n) return Mc(i), e;
        if (a === r) return Mc(i), t;
        a = a.sibling;
      }
      throw Error(W(188));
    }
    if (n.return !== r.return) n = i, r = a;
    else {
      for (var o = false, s = i.child; s; ) {
        if (s === n) {
          o = true, n = i, r = a;
          break;
        }
        if (s === r) {
          o = true, r = i, n = a;
          break;
        }
        s = s.sibling;
      }
      if (!o) {
        for (s = a.child; s; ) {
          if (s === n) {
            o = true, n = a, r = i;
            break;
          }
          if (s === r) {
            o = true, r = a, n = i;
            break;
          }
          s = s.sibling;
        }
        if (!o) throw Error(W(189));
      }
    }
    if (n.alternate !== r) throw Error(W(190));
  }
  if (n.tag !== 3) throw Error(W(188));
  return n.stateNode.current === n ? e : t;
}
function vh(e) {
  return e = Av(e), e !== null ? gh(e) : null;
}
function gh(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = gh(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var yh = Ot.unstable_scheduleCallback, Oc = Ot.unstable_cancelCallback, Dv = Ot.unstable_shouldYield, jv = Ot.unstable_requestPaint, nt = Ot.unstable_now, Iv = Ot.unstable_getCurrentPriorityLevel, Tu = Ot.unstable_ImmediatePriority, xh = Ot.unstable_UserBlockingPriority, Po = Ot.unstable_NormalPriority, Lv = Ot.unstable_LowPriority, wh = Ot.unstable_IdlePriority, ss = null, mn = null;
function Bv(e) {
  if (mn && typeof mn.onCommitFiberRoot == "function") try {
    mn.onCommitFiberRoot(ss, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var an = Math.clz32 ? Math.clz32 : Fv, Mv = Math.log, Ov = Math.LN2;
function Fv(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Mv(e) / Ov | 0) | 0;
}
var Qa = 64, Ka = 4194304;
function Ki(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function No(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, i = e.suspendedLanes, a = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var s = o & ~i;
    s !== 0 ? r = Ki(s) : (a &= o, a !== 0 && (r = Ki(a)));
  } else o = n & ~i, o !== 0 ? r = Ki(o) : a !== 0 && (r = Ki(a));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & i) && (i = r & -r, a = t & -t, i >= a || i === 16 && (a & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - an(t), i = 1 << n, r |= e[n], t &= ~i;
  return r;
}
function Uv(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function zv(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
    var o = 31 - an(a), s = 1 << o, l = i[o];
    l === -1 ? (!(s & n) || s & r) && (i[o] = Uv(s, t)) : l <= t && (e.expiredLanes |= s), a &= ~s;
  }
}
function bl(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function kh() {
  var e = Qa;
  return Qa <<= 1, !(Qa & 4194240) && (Qa = 64), e;
}
function Bs(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Aa(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - an(t), e[t] = n;
}
function Vv(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - an(n), a = 1 << i;
    t[i] = 0, r[i] = -1, e[i] = -1, n &= ~a;
  }
}
function bu(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - an(n), i = 1 << r;
    i & t | e[r] & t && (e[r] |= t), n &= ~i;
  }
}
var je = 0;
function Sh(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var _h, Pu, Eh, Ch, Th, Pl = false, Ya = [], Yn = null, Xn = null, qn = null, da = /* @__PURE__ */ new Map(), fa = /* @__PURE__ */ new Map(), Wn = [], Wv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Fc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Yn = null;
      break;
    case "dragenter":
    case "dragleave":
      Xn = null;
      break;
    case "mouseover":
    case "mouseout":
      qn = null;
      break;
    case "pointerover":
    case "pointerout":
      da.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      fa.delete(t.pointerId);
  }
}
function Bi(e, t, n, r, i, a) {
  return e === null || e.nativeEvent !== a ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [i] }, t !== null && (t = ja(t), t !== null && Pu(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function Hv(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return Yn = Bi(Yn, e, t, n, r, i), true;
    case "dragenter":
      return Xn = Bi(Xn, e, t, n, r, i), true;
    case "mouseover":
      return qn = Bi(qn, e, t, n, r, i), true;
    case "pointerover":
      var a = i.pointerId;
      return da.set(a, Bi(da.get(a) || null, e, t, n, r, i)), true;
    case "gotpointercapture":
      return a = i.pointerId, fa.set(a, Bi(fa.get(a) || null, e, t, n, r, i)), true;
  }
  return false;
}
function bh(e) {
  var t = xr(e.target);
  if (t !== null) {
    var n = Lr(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = mh(n), t !== null) {
          e.blockedOn = t, Th(e.priority, function() {
            Eh(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ho(e) {
  if (e.blockedOn !== null) return false;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Nl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      _l = r, n.target.dispatchEvent(r), _l = null;
    } else return t = ja(n), t !== null && Pu(t), e.blockedOn = n, false;
    t.shift();
  }
  return true;
}
function Uc(e, t, n) {
  ho(e) && n.delete(t);
}
function $v() {
  Pl = false, Yn !== null && ho(Yn) && (Yn = null), Xn !== null && ho(Xn) && (Xn = null), qn !== null && ho(qn) && (qn = null), da.forEach(Uc), fa.forEach(Uc);
}
function Mi(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Pl || (Pl = true, Ot.unstable_scheduleCallback(Ot.unstable_NormalPriority, $v)));
}
function ha(e) {
  function t(i) {
    return Mi(i, e);
  }
  if (0 < Ya.length) {
    Mi(Ya[0], e);
    for (var n = 1; n < Ya.length; n++) {
      var r = Ya[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Yn !== null && Mi(Yn, e), Xn !== null && Mi(Xn, e), qn !== null && Mi(qn, e), da.forEach(t), fa.forEach(t), n = 0; n < Wn.length; n++) r = Wn[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Wn.length && (n = Wn[0], n.blockedOn === null); ) bh(n), n.blockedOn === null && Wn.shift();
}
var li = jn.ReactCurrentBatchConfig, Ro = true;
function Zv(e, t, n, r) {
  var i = je, a = li.transition;
  li.transition = null;
  try {
    je = 1, Nu(e, t, n, r);
  } finally {
    je = i, li.transition = a;
  }
}
function Gv(e, t, n, r) {
  var i = je, a = li.transition;
  li.transition = null;
  try {
    je = 4, Nu(e, t, n, r);
  } finally {
    je = i, li.transition = a;
  }
}
function Nu(e, t, n, r) {
  if (Ro) {
    var i = Nl(e, t, n, r);
    if (i === null) Zs(e, t, r, Ao, n), Fc(e, r);
    else if (Hv(i, e, t, n, r)) r.stopPropagation();
    else if (Fc(e, r), t & 4 && -1 < Wv.indexOf(e)) {
      for (; i !== null; ) {
        var a = ja(i);
        if (a !== null && _h(a), a = Nl(e, t, n, r), a === null && Zs(e, t, r, Ao, n), a === i) break;
        i = a;
      }
      i !== null && r.stopPropagation();
    } else Zs(e, t, r, null, n);
  }
}
var Ao = null;
function Nl(e, t, n, r) {
  if (Ao = null, e = Cu(r), e = xr(e), e !== null) if (t = Lr(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = mh(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Ao = e, null;
}
function Ph(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Iv()) {
        case Tu:
          return 1;
        case xh:
          return 4;
        case Po:
        case Lv:
          return 16;
        case wh:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var $n = null, Ru = null, po = null;
function Nh() {
  if (po) return po;
  var e, t = Ru, n = t.length, r, i = "value" in $n ? $n.value : $n.textContent, a = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[a - r]; r++) ;
  return po = i.slice(e, 1 < r ? 1 - r : void 0);
}
function mo(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Xa() {
  return true;
}
function zc() {
  return false;
}
function zt(e) {
  function t(n, r, i, a, o) {
    this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = a, this.target = o, this.currentTarget = null;
    for (var s in e) e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(a) : a[s]);
    return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === false) ? Xa : zc, this.isPropagationStopped = zc, this;
  }
  return Ye(t.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = false), this.isDefaultPrevented = Xa);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = true), this.isPropagationStopped = Xa);
  }, persist: function() {
  }, isPersistent: Xa }), t;
}
var bi = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Au = zt(bi), Da = Ye({}, bi, { view: 0, detail: 0 }), Qv = zt(Da), Ms, Os, Oi, ls = Ye({}, Da, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Du, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Oi && (Oi && e.type === "mousemove" ? (Ms = e.screenX - Oi.screenX, Os = e.screenY - Oi.screenY) : Os = Ms = 0, Oi = e), Ms);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Os;
} }), Vc = zt(ls), Kv = Ye({}, ls, { dataTransfer: 0 }), Yv = zt(Kv), Xv = Ye({}, Da, { relatedTarget: 0 }), Fs = zt(Xv), qv = Ye({}, bi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Jv = zt(qv), eg = Ye({}, bi, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), tg = zt(eg), ng = Ye({}, bi, { data: 0 }), Wc = zt(ng), rg = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, ig = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, ag = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function og(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ag[e]) ? !!t[e] : false;
}
function Du() {
  return og;
}
var sg = Ye({}, Da, { key: function(e) {
  if (e.key) {
    var t = rg[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = mo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ig[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Du, charCode: function(e) {
  return e.type === "keypress" ? mo(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? mo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), lg = zt(sg), ug = Ye({}, ls, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Hc = zt(ug), cg = Ye({}, Da, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Du }), dg = zt(cg), fg = Ye({}, bi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), hg = zt(fg), pg = Ye({}, ls, { deltaX: function(e) {
  return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
}, deltaY: function(e) {
  return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
}, deltaZ: 0, deltaMode: 0 }), mg = zt(pg), vg = [9, 13, 27, 32], ju = bn && "CompositionEvent" in window, ta = null;
bn && "documentMode" in document && (ta = document.documentMode);
var gg = bn && "TextEvent" in window && !ta, Rh = bn && (!ju || ta && 8 < ta && 11 >= ta), $c = " ", Zc = false;
function Ah(e, t) {
  switch (e) {
    case "keyup":
      return vg.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function Dh(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Kr = false;
function yg(e, t) {
  switch (e) {
    case "compositionend":
      return Dh(t);
    case "keypress":
      return t.which !== 32 ? null : (Zc = true, $c);
    case "textInput":
      return e = t.data, e === $c && Zc ? null : e;
    default:
      return null;
  }
}
function xg(e, t) {
  if (Kr) return e === "compositionend" || !ju && Ah(e, t) ? (e = Nh(), po = Ru = $n = null, Kr = false, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Rh && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var wg = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function Gc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!wg[e.type] : t === "textarea";
}
function jh(e, t, n, r) {
  ch(r), t = Do(t, "onChange"), 0 < t.length && (n = new Au("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var na = null, pa = null;
function kg(e) {
  Hh(e, 0);
}
function us(e) {
  var t = qr(e);
  if (rh(t)) return e;
}
function Sg(e, t) {
  if (e === "change") return t;
}
var Ih = false;
if (bn) {
  var Us;
  if (bn) {
    var zs = "oninput" in document;
    if (!zs) {
      var Qc = document.createElement("div");
      Qc.setAttribute("oninput", "return;"), zs = typeof Qc.oninput == "function";
    }
    Us = zs;
  } else Us = false;
  Ih = Us && (!document.documentMode || 9 < document.documentMode);
}
function Kc() {
  na && (na.detachEvent("onpropertychange", Lh), pa = na = null);
}
function Lh(e) {
  if (e.propertyName === "value" && us(pa)) {
    var t = [];
    jh(t, pa, e, Cu(e)), ph(kg, t);
  }
}
function _g(e, t, n) {
  e === "focusin" ? (Kc(), na = t, pa = n, na.attachEvent("onpropertychange", Lh)) : e === "focusout" && Kc();
}
function Eg(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return us(pa);
}
function Cg(e, t) {
  if (e === "click") return us(t);
}
function Tg(e, t) {
  if (e === "input" || e === "change") return us(t);
}
function bg(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var sn = typeof Object.is == "function" ? Object.is : bg;
function ma(e, t) {
  if (sn(e, t)) return true;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return false;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return false;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!dl.call(t, i) || !sn(e[i], t[i])) return false;
  }
  return true;
}
function Yc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Xc(e, t) {
  var n = Yc(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Yc(n);
  }
}
function Bh(e, t) {
  return e && t ? e === t ? true : e && e.nodeType === 3 ? false : t && t.nodeType === 3 ? Bh(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : false : false;
}
function Mh() {
  for (var e = window, t = Co(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = false;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Co(e.document);
  }
  return t;
}
function Iu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Pg(e) {
  var t = Mh(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Bh(n.ownerDocument.documentElement, n)) {
    if (r !== null && Iu(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var i = n.textContent.length, a = Math.min(r.start, i);
        r = r.end === void 0 ? a : Math.min(r.end, i), !e.extend && a > r && (i = r, r = a, a = i), i = Xc(n, a);
        var o = Xc(n, r);
        i && o && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), a > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Ng = bn && "documentMode" in document && 11 >= document.documentMode, Yr = null, Rl = null, ra = null, Al = false;
function qc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Al || Yr == null || Yr !== Co(r) || (r = Yr, "selectionStart" in r && Iu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), ra && ma(ra, r) || (ra = r, r = Do(Rl, "onSelect"), 0 < r.length && (t = new Au("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Yr)));
}
function qa(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Xr = { animationend: qa("Animation", "AnimationEnd"), animationiteration: qa("Animation", "AnimationIteration"), animationstart: qa("Animation", "AnimationStart"), transitionend: qa("Transition", "TransitionEnd") }, Vs = {}, Oh = {};
bn && (Oh = document.createElement("div").style, "AnimationEvent" in window || (delete Xr.animationend.animation, delete Xr.animationiteration.animation, delete Xr.animationstart.animation), "TransitionEvent" in window || delete Xr.transitionend.transition);
function cs(e) {
  if (Vs[e]) return Vs[e];
  if (!Xr[e]) return e;
  var t = Xr[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Oh) return Vs[e] = t[n];
  return e;
}
var Fh = cs("animationend"), Uh = cs("animationiteration"), zh = cs("animationstart"), Vh = cs("transitionend"), Wh = /* @__PURE__ */ new Map(), Jc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ur(e, t) {
  Wh.set(e, t), Ir(t, [e]);
}
for (var Ws = 0; Ws < Jc.length; Ws++) {
  var Hs = Jc[Ws], Rg = Hs.toLowerCase(), Ag = Hs[0].toUpperCase() + Hs.slice(1);
  ur(Rg, "on" + Ag);
}
ur(Fh, "onAnimationEnd");
ur(Uh, "onAnimationIteration");
ur(zh, "onAnimationStart");
ur("dblclick", "onDoubleClick");
ur("focusin", "onFocus");
ur("focusout", "onBlur");
ur(Vh, "onTransitionEnd");
fi("onMouseEnter", ["mouseout", "mouseover"]);
fi("onMouseLeave", ["mouseout", "mouseover"]);
fi("onPointerEnter", ["pointerout", "pointerover"]);
fi("onPointerLeave", ["pointerout", "pointerover"]);
Ir("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Ir("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Ir("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ir("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Ir("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Ir("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Yi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Dg = new Set("cancel close invalid load scroll toggle".split(" ").concat(Yi));
function ed(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Rv(r, t, void 0, e), e.currentTarget = null;
}
function Hh(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], i = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var s = r[o], l = s.instance, c = s.currentTarget;
        if (s = s.listener, l !== a && i.isPropagationStopped()) break e;
        ed(i, s, c), a = l;
      }
      else for (o = 0; o < r.length; o++) {
        if (s = r[o], l = s.instance, c = s.currentTarget, s = s.listener, l !== a && i.isPropagationStopped()) break e;
        ed(i, s, c), a = l;
      }
    }
  }
  if (bo) throw e = Tl, bo = false, Tl = null, e;
}
function Ue(e, t) {
  var n = t[Bl];
  n === void 0 && (n = t[Bl] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || ($h(t, e, 2, false), n.add(r));
}
function $s(e, t, n) {
  var r = 0;
  t && (r |= 4), $h(n, e, r, t);
}
var Ja = "_reactListening" + Math.random().toString(36).slice(2);
function va(e) {
  if (!e[Ja]) {
    e[Ja] = true, qf.forEach(function(n) {
      n !== "selectionchange" && (Dg.has(n) || $s(n, false, e), $s(n, true, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ja] || (t[Ja] = true, $s("selectionchange", false, t));
  }
}
function $h(e, t, n, r) {
  switch (Ph(t)) {
    case 1:
      var i = Zv;
      break;
    case 4:
      i = Gv;
      break;
    default:
      i = Nu;
  }
  n = i.bind(null, t, n, e), i = void 0, !Cl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = true), r ? i !== void 0 ? e.addEventListener(t, n, { capture: true, passive: i }) : e.addEventListener(t, n, true) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, false);
}
function Zs(e, t, n, r, i) {
  var a = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var o = r.tag;
    if (o === 3 || o === 4) {
      var s = r.stateNode.containerInfo;
      if (s === i || s.nodeType === 8 && s.parentNode === i) break;
      if (o === 4) for (o = r.return; o !== null; ) {
        var l = o.tag;
        if ((l === 3 || l === 4) && (l = o.stateNode.containerInfo, l === i || l.nodeType === 8 && l.parentNode === i)) return;
        o = o.return;
      }
      for (; s !== null; ) {
        if (o = xr(s), o === null) return;
        if (l = o.tag, l === 5 || l === 6) {
          r = a = o;
          continue e;
        }
        s = s.parentNode;
      }
    }
    r = r.return;
  }
  ph(function() {
    var c = a, f = Cu(n), h = [];
    e: {
      var g = Wh.get(e);
      if (g !== void 0) {
        var w = Au, E = e;
        switch (e) {
          case "keypress":
            if (mo(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = lg;
            break;
          case "focusin":
            E = "focus", w = Fs;
            break;
          case "focusout":
            E = "blur", w = Fs;
            break;
          case "beforeblur":
          case "afterblur":
            w = Fs;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = Vc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = Yv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = dg;
            break;
          case Fh:
          case Uh:
          case zh:
            w = Jv;
            break;
          case Vh:
            w = hg;
            break;
          case "scroll":
            w = Qv;
            break;
          case "wheel":
            w = mg;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = tg;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = Hc;
        }
        var b = (t & 4) !== 0, I = !b && e === "scroll", x = b ? g !== null ? g + "Capture" : null : g;
        b = [];
        for (var v = c, S; v !== null; ) {
          S = v;
          var A = S.stateNode;
          if (S.tag === 5 && A !== null && (S = A, x !== null && (A = ca(v, x), A != null && b.push(ga(v, A, S)))), I) break;
          v = v.return;
        }
        0 < b.length && (g = new w(g, E, null, n, f), h.push({ event: g, listeners: b }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (g = e === "mouseover" || e === "pointerover", w = e === "mouseout" || e === "pointerout", g && n !== _l && (E = n.relatedTarget || n.fromElement) && (xr(E) || E[Pn])) break e;
        if ((w || g) && (g = f.window === f ? f : (g = f.ownerDocument) ? g.defaultView || g.parentWindow : window, w ? (E = n.relatedTarget || n.toElement, w = c, E = E ? xr(E) : null, E !== null && (I = Lr(E), E !== I || E.tag !== 5 && E.tag !== 6) && (E = null)) : (w = null, E = c), w !== E)) {
          if (b = Vc, A = "onMouseLeave", x = "onMouseEnter", v = "mouse", (e === "pointerout" || e === "pointerover") && (b = Hc, A = "onPointerLeave", x = "onPointerEnter", v = "pointer"), I = w == null ? g : qr(w), S = E == null ? g : qr(E), g = new b(A, v + "leave", w, n, f), g.target = I, g.relatedTarget = S, A = null, xr(f) === c && (b = new b(x, v + "enter", E, n, f), b.target = S, b.relatedTarget = I, A = b), I = A, w && E) t: {
            for (b = w, x = E, v = 0, S = b; S; S = Wr(S)) v++;
            for (S = 0, A = x; A; A = Wr(A)) S++;
            for (; 0 < v - S; ) b = Wr(b), v--;
            for (; 0 < S - v; ) x = Wr(x), S--;
            for (; v--; ) {
              if (b === x || x !== null && b === x.alternate) break t;
              b = Wr(b), x = Wr(x);
            }
            b = null;
          }
          else b = null;
          w !== null && td(h, g, w, b, false), E !== null && I !== null && td(h, I, E, b, true);
        }
      }
      e: {
        if (g = c ? qr(c) : window, w = g.nodeName && g.nodeName.toLowerCase(), w === "select" || w === "input" && g.type === "file") var M = Sg;
        else if (Gc(g)) if (Ih) M = Tg;
        else {
          M = Eg;
          var z = _g;
        }
        else (w = g.nodeName) && w.toLowerCase() === "input" && (g.type === "checkbox" || g.type === "radio") && (M = Cg);
        if (M && (M = M(e, c))) {
          jh(h, M, n, f);
          break e;
        }
        z && z(e, g, c), e === "focusout" && (z = g._wrapperState) && z.controlled && g.type === "number" && yl(g, "number", g.value);
      }
      switch (z = c ? qr(c) : window, e) {
        case "focusin":
          (Gc(z) || z.contentEditable === "true") && (Yr = z, Rl = c, ra = null);
          break;
        case "focusout":
          ra = Rl = Yr = null;
          break;
        case "mousedown":
          Al = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Al = false, qc(h, n, f);
          break;
        case "selectionchange":
          if (Ng) break;
        case "keydown":
        case "keyup":
          qc(h, n, f);
      }
      var _;
      if (ju) e: {
        switch (e) {
          case "compositionstart":
            var R = "onCompositionStart";
            break e;
          case "compositionend":
            R = "onCompositionEnd";
            break e;
          case "compositionupdate":
            R = "onCompositionUpdate";
            break e;
        }
        R = void 0;
      }
      else Kr ? Ah(e, n) && (R = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R && (Rh && n.locale !== "ko" && (Kr || R !== "onCompositionStart" ? R === "onCompositionEnd" && Kr && (_ = Nh()) : ($n = f, Ru = "value" in $n ? $n.value : $n.textContent, Kr = true)), z = Do(c, R), 0 < z.length && (R = new Wc(R, e, null, n, f), h.push({ event: R, listeners: z }), _ ? R.data = _ : (_ = Dh(n), _ !== null && (R.data = _)))), (_ = gg ? yg(e, n) : xg(e, n)) && (c = Do(c, "onBeforeInput"), 0 < c.length && (f = new Wc("onBeforeInput", "beforeinput", null, n, f), h.push({ event: f, listeners: c }), f.data = _));
    }
    Hh(h, t);
  });
}
function ga(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Do(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e, a = i.stateNode;
    i.tag === 5 && a !== null && (i = a, a = ca(e, n), a != null && r.unshift(ga(e, a, i)), a = ca(e, t), a != null && r.push(ga(e, a, i))), e = e.return;
  }
  return r;
}
function Wr(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function td(e, t, n, r, i) {
  for (var a = t._reactName, o = []; n !== null && n !== r; ) {
    var s = n, l = s.alternate, c = s.stateNode;
    if (l !== null && l === r) break;
    s.tag === 5 && c !== null && (s = c, i ? (l = ca(n, a), l != null && o.unshift(ga(n, l, s))) : i || (l = ca(n, a), l != null && o.push(ga(n, l, s)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var jg = /\r\n?/g, Ig = /\u0000|\uFFFD/g;
function nd(e) {
  return (typeof e == "string" ? e : "" + e).replace(jg, `
`).replace(Ig, "");
}
function eo(e, t, n) {
  if (t = nd(t), nd(e) !== t && n) throw Error(W(425));
}
function jo() {
}
var Dl = null, jl = null;
function Il(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Ll = typeof setTimeout == "function" ? setTimeout : void 0, Lg = typeof clearTimeout == "function" ? clearTimeout : void 0, rd = typeof Promise == "function" ? Promise : void 0, Bg = typeof queueMicrotask == "function" ? queueMicrotask : typeof rd < "u" ? function(e) {
  return rd.resolve(null).then(e).catch(Mg);
} : Ll;
function Mg(e) {
  setTimeout(function() {
    throw e;
  });
}
function Gs(e, t) {
  var n = t, r = 0;
  do {
    var i = n.nextSibling;
    if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$") {
      if (r === 0) {
        e.removeChild(i), ha(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = i;
  } while (n);
  ha(t);
}
function Jn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function id(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Pi = Math.random().toString(36).slice(2), hn = "__reactFiber$" + Pi, ya = "__reactProps$" + Pi, Pn = "__reactContainer$" + Pi, Bl = "__reactEvents$" + Pi, Og = "__reactListeners$" + Pi, Fg = "__reactHandles$" + Pi;
function xr(e) {
  var t = e[hn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Pn] || n[hn]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = id(e); e !== null; ) {
        if (n = e[hn]) return n;
        e = id(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function ja(e) {
  return e = e[hn] || e[Pn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function qr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(W(33));
}
function ds(e) {
  return e[ya] || null;
}
var Ml = [], Jr = -1;
function cr(e) {
  return { current: e };
}
function ze(e) {
  0 > Jr || (e.current = Ml[Jr], Ml[Jr] = null, Jr--);
}
function Me(e, t) {
  Jr++, Ml[Jr] = e.current, e.current = t;
}
var or = {}, kt = cr(or), At = cr(false), Cr = or;
function hi(e, t) {
  var n = e.type.contextTypes;
  if (!n) return or;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var i = {}, a;
  for (a in n) i[a] = t[a];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
}
function Dt(e) {
  return e = e.childContextTypes, e != null;
}
function Io() {
  ze(At), ze(kt);
}
function ad(e, t, n) {
  if (kt.current !== or) throw Error(W(168));
  Me(kt, t), Me(At, n);
}
function Zh(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(W(108, _v(e) || "Unknown", i));
  return Ye({}, n, r);
}
function Lo(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || or, Cr = kt.current, Me(kt, e), Me(At, At.current), true;
}
function od(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(W(169));
  n ? (e = Zh(e, t, Cr), r.__reactInternalMemoizedMergedChildContext = e, ze(At), ze(kt), Me(kt, e)) : ze(At), Me(At, n);
}
var kn = null, fs = false, Qs = false;
function Gh(e) {
  kn === null ? kn = [e] : kn.push(e);
}
function Ug(e) {
  fs = true, Gh(e);
}
function dr() {
  if (!Qs && kn !== null) {
    Qs = true;
    var e = 0, t = je;
    try {
      var n = kn;
      for (je = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(true);
        while (r !== null);
      }
      kn = null, fs = false;
    } catch (i) {
      throw kn !== null && (kn = kn.slice(e + 1)), yh(Tu, dr), i;
    } finally {
      je = t, Qs = false;
    }
  }
  return null;
}
var ei = [], ti = 0, Bo = null, Mo = 0, $t = [], Zt = 0, Tr = null, _n = 1, En = "";
function mr(e, t) {
  ei[ti++] = Mo, ei[ti++] = Bo, Bo = e, Mo = t;
}
function Qh(e, t, n) {
  $t[Zt++] = _n, $t[Zt++] = En, $t[Zt++] = Tr, Tr = e;
  var r = _n;
  e = En;
  var i = 32 - an(r) - 1;
  r &= ~(1 << i), n += 1;
  var a = 32 - an(t) + i;
  if (30 < a) {
    var o = i - i % 5;
    a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, _n = 1 << 32 - an(t) + i | n << i | r, En = a + e;
  } else _n = 1 << a | n << i | r, En = e;
}
function Lu(e) {
  e.return !== null && (mr(e, 1), Qh(e, 1, 0));
}
function Bu(e) {
  for (; e === Bo; ) Bo = ei[--ti], ei[ti] = null, Mo = ei[--ti], ei[ti] = null;
  for (; e === Tr; ) Tr = $t[--Zt], $t[Zt] = null, En = $t[--Zt], $t[Zt] = null, _n = $t[--Zt], $t[Zt] = null;
}
var Mt = null, Bt = null, $e = false, rn = null;
function Kh(e, t) {
  var n = Gt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function sd(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Mt = e, Bt = Jn(t.firstChild), true) : false;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Mt = e, Bt = null, true) : false;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Tr !== null ? { id: _n, overflow: En } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Gt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Mt = e, Bt = null, true) : false;
    default:
      return false;
  }
}
function Ol(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Fl(e) {
  if ($e) {
    var t = Bt;
    if (t) {
      var n = t;
      if (!sd(e, t)) {
        if (Ol(e)) throw Error(W(418));
        t = Jn(n.nextSibling);
        var r = Mt;
        t && sd(e, t) ? Kh(r, n) : (e.flags = e.flags & -4097 | 2, $e = false, Mt = e);
      }
    } else {
      if (Ol(e)) throw Error(W(418));
      e.flags = e.flags & -4097 | 2, $e = false, Mt = e;
    }
  }
}
function ld(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Mt = e;
}
function to(e) {
  if (e !== Mt) return false;
  if (!$e) return ld(e), $e = true, false;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Il(e.type, e.memoizedProps)), t && (t = Bt)) {
    if (Ol(e)) throw Yh(), Error(W(418));
    for (; t; ) Kh(e, t), t = Jn(t.nextSibling);
  }
  if (ld(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(W(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Bt = Jn(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Bt = null;
    }
  } else Bt = Mt ? Jn(e.stateNode.nextSibling) : null;
  return true;
}
function Yh() {
  for (var e = Bt; e; ) e = Jn(e.nextSibling);
}
function pi() {
  Bt = Mt = null, $e = false;
}
function Mu(e) {
  rn === null ? rn = [e] : rn.push(e);
}
var zg = jn.ReactCurrentBatchConfig;
function Fi(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(W(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(W(147, e));
      var i = r, a = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a ? t.ref : (t = function(o) {
        var s = i.refs;
        o === null ? delete s[a] : s[a] = o;
      }, t._stringRef = a, t);
    }
    if (typeof e != "string") throw Error(W(284));
    if (!n._owner) throw Error(W(290, e));
  }
  return e;
}
function no(e, t) {
  throw e = Object.prototype.toString.call(t), Error(W(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function ud(e) {
  var t = e._init;
  return t(e._payload);
}
function Xh(e) {
  function t(x, v) {
    if (e) {
      var S = x.deletions;
      S === null ? (x.deletions = [v], x.flags |= 16) : S.push(v);
    }
  }
  function n(x, v) {
    if (!e) return null;
    for (; v !== null; ) t(x, v), v = v.sibling;
    return null;
  }
  function r(x, v) {
    for (x = /* @__PURE__ */ new Map(); v !== null; ) v.key !== null ? x.set(v.key, v) : x.set(v.index, v), v = v.sibling;
    return x;
  }
  function i(x, v) {
    return x = rr(x, v), x.index = 0, x.sibling = null, x;
  }
  function a(x, v, S) {
    return x.index = S, e ? (S = x.alternate, S !== null ? (S = S.index, S < v ? (x.flags |= 2, v) : S) : (x.flags |= 2, v)) : (x.flags |= 1048576, v);
  }
  function o(x) {
    return e && x.alternate === null && (x.flags |= 2), x;
  }
  function s(x, v, S, A) {
    return v === null || v.tag !== 6 ? (v = tl(S, x.mode, A), v.return = x, v) : (v = i(v, S), v.return = x, v);
  }
  function l(x, v, S, A) {
    var M = S.type;
    return M === Qr ? f(x, v, S.props.children, A, S.key) : v !== null && (v.elementType === M || typeof M == "object" && M !== null && M.$$typeof === Un && ud(M) === v.type) ? (A = i(v, S.props), A.ref = Fi(x, v, S), A.return = x, A) : (A = So(S.type, S.key, S.props, null, x.mode, A), A.ref = Fi(x, v, S), A.return = x, A);
  }
  function c(x, v, S, A) {
    return v === null || v.tag !== 4 || v.stateNode.containerInfo !== S.containerInfo || v.stateNode.implementation !== S.implementation ? (v = nl(S, x.mode, A), v.return = x, v) : (v = i(v, S.children || []), v.return = x, v);
  }
  function f(x, v, S, A, M) {
    return v === null || v.tag !== 7 ? (v = Er(S, x.mode, A, M), v.return = x, v) : (v = i(v, S), v.return = x, v);
  }
  function h(x, v, S) {
    if (typeof v == "string" && v !== "" || typeof v == "number") return v = tl("" + v, x.mode, S), v.return = x, v;
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case $a:
          return S = So(v.type, v.key, v.props, null, x.mode, S), S.ref = Fi(x, null, v), S.return = x, S;
        case Gr:
          return v = nl(v, x.mode, S), v.return = x, v;
        case Un:
          var A = v._init;
          return h(x, A(v._payload), S);
      }
      if (Qi(v) || Ii(v)) return v = Er(v, x.mode, S, null), v.return = x, v;
      no(x, v);
    }
    return null;
  }
  function g(x, v, S, A) {
    var M = v !== null ? v.key : null;
    if (typeof S == "string" && S !== "" || typeof S == "number") return M !== null ? null : s(x, v, "" + S, A);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case $a:
          return S.key === M ? l(x, v, S, A) : null;
        case Gr:
          return S.key === M ? c(x, v, S, A) : null;
        case Un:
          return M = S._init, g(x, v, M(S._payload), A);
      }
      if (Qi(S) || Ii(S)) return M !== null ? null : f(x, v, S, A, null);
      no(x, S);
    }
    return null;
  }
  function w(x, v, S, A, M) {
    if (typeof A == "string" && A !== "" || typeof A == "number") return x = x.get(S) || null, s(v, x, "" + A, M);
    if (typeof A == "object" && A !== null) {
      switch (A.$$typeof) {
        case $a:
          return x = x.get(A.key === null ? S : A.key) || null, l(v, x, A, M);
        case Gr:
          return x = x.get(A.key === null ? S : A.key) || null, c(v, x, A, M);
        case Un:
          var z = A._init;
          return w(x, v, S, z(A._payload), M);
      }
      if (Qi(A) || Ii(A)) return x = x.get(S) || null, f(v, x, A, M, null);
      no(v, A);
    }
    return null;
  }
  function E(x, v, S, A) {
    for (var M = null, z = null, _ = v, R = v = 0, V = null; _ !== null && R < S.length; R++) {
      _.index > R ? (V = _, _ = null) : V = _.sibling;
      var T = g(x, _, S[R], A);
      if (T === null) {
        _ === null && (_ = V);
        break;
      }
      e && _ && T.alternate === null && t(x, _), v = a(T, v, R), z === null ? M = T : z.sibling = T, z = T, _ = V;
    }
    if (R === S.length) return n(x, _), $e && mr(x, R), M;
    if (_ === null) {
      for (; R < S.length; R++) _ = h(x, S[R], A), _ !== null && (v = a(_, v, R), z === null ? M = _ : z.sibling = _, z = _);
      return $e && mr(x, R), M;
    }
    for (_ = r(x, _); R < S.length; R++) V = w(_, x, R, S[R], A), V !== null && (e && V.alternate !== null && _.delete(V.key === null ? R : V.key), v = a(V, v, R), z === null ? M = V : z.sibling = V, z = V);
    return e && _.forEach(function(L) {
      return t(x, L);
    }), $e && mr(x, R), M;
  }
  function b(x, v, S, A) {
    var M = Ii(S);
    if (typeof M != "function") throw Error(W(150));
    if (S = M.call(S), S == null) throw Error(W(151));
    for (var z = M = null, _ = v, R = v = 0, V = null, T = S.next(); _ !== null && !T.done; R++, T = S.next()) {
      _.index > R ? (V = _, _ = null) : V = _.sibling;
      var L = g(x, _, T.value, A);
      if (L === null) {
        _ === null && (_ = V);
        break;
      }
      e && _ && L.alternate === null && t(x, _), v = a(L, v, R), z === null ? M = L : z.sibling = L, z = L, _ = V;
    }
    if (T.done) return n(x, _), $e && mr(x, R), M;
    if (_ === null) {
      for (; !T.done; R++, T = S.next()) T = h(x, T.value, A), T !== null && (v = a(T, v, R), z === null ? M = T : z.sibling = T, z = T);
      return $e && mr(x, R), M;
    }
    for (_ = r(x, _); !T.done; R++, T = S.next()) T = w(_, x, R, T.value, A), T !== null && (e && T.alternate !== null && _.delete(T.key === null ? R : T.key), v = a(T, v, R), z === null ? M = T : z.sibling = T, z = T);
    return e && _.forEach(function(O) {
      return t(x, O);
    }), $e && mr(x, R), M;
  }
  function I(x, v, S, A) {
    if (typeof S == "object" && S !== null && S.type === Qr && S.key === null && (S = S.props.children), typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case $a:
          e: {
            for (var M = S.key, z = v; z !== null; ) {
              if (z.key === M) {
                if (M = S.type, M === Qr) {
                  if (z.tag === 7) {
                    n(x, z.sibling), v = i(z, S.props.children), v.return = x, x = v;
                    break e;
                  }
                } else if (z.elementType === M || typeof M == "object" && M !== null && M.$$typeof === Un && ud(M) === z.type) {
                  n(x, z.sibling), v = i(z, S.props), v.ref = Fi(x, z, S), v.return = x, x = v;
                  break e;
                }
                n(x, z);
                break;
              } else t(x, z);
              z = z.sibling;
            }
            S.type === Qr ? (v = Er(S.props.children, x.mode, A, S.key), v.return = x, x = v) : (A = So(S.type, S.key, S.props, null, x.mode, A), A.ref = Fi(x, v, S), A.return = x, x = A);
          }
          return o(x);
        case Gr:
          e: {
            for (z = S.key; v !== null; ) {
              if (v.key === z) if (v.tag === 4 && v.stateNode.containerInfo === S.containerInfo && v.stateNode.implementation === S.implementation) {
                n(x, v.sibling), v = i(v, S.children || []), v.return = x, x = v;
                break e;
              } else {
                n(x, v);
                break;
              }
              else t(x, v);
              v = v.sibling;
            }
            v = nl(S, x.mode, A), v.return = x, x = v;
          }
          return o(x);
        case Un:
          return z = S._init, I(x, v, z(S._payload), A);
      }
      if (Qi(S)) return E(x, v, S, A);
      if (Ii(S)) return b(x, v, S, A);
      no(x, S);
    }
    return typeof S == "string" && S !== "" || typeof S == "number" ? (S = "" + S, v !== null && v.tag === 6 ? (n(x, v.sibling), v = i(v, S), v.return = x, x = v) : (n(x, v), v = tl(S, x.mode, A), v.return = x, x = v), o(x)) : n(x, v);
  }
  return I;
}
var mi = Xh(true), qh = Xh(false), Oo = cr(null), Fo = null, ni = null, Ou = null;
function Fu() {
  Ou = ni = Fo = null;
}
function Uu(e) {
  var t = Oo.current;
  ze(Oo), e._currentValue = t;
}
function Ul(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function ui(e, t) {
  Fo = e, Ou = ni = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Rt = true), e.firstContext = null);
}
function Kt(e) {
  var t = e._currentValue;
  if (Ou !== e) if (e = { context: e, memoizedValue: t, next: null }, ni === null) {
    if (Fo === null) throw Error(W(308));
    ni = e, Fo.dependencies = { lanes: 0, firstContext: e };
  } else ni = ni.next = e;
  return t;
}
var wr = null;
function zu(e) {
  wr === null ? wr = [e] : wr.push(e);
}
function Jh(e, t, n, r) {
  var i = t.interleaved;
  return i === null ? (n.next = n, zu(t)) : (n.next = i.next, i.next = n), t.interleaved = n, Nn(e, r);
}
function Nn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var zn = false;
function Vu(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function ep(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Cn(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function er(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, Te & 2) {
    var i = r.pending;
    return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, Nn(e, n);
  }
  return i = r.interleaved, i === null ? (t.next = t, zu(r)) : (t.next = i.next, i.next = t), r.interleaved = t, Nn(e, n);
}
function vo(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, bu(e, n);
  }
}
function cd(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var i = null, a = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var o = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        a === null ? i = a = o : a = a.next = o, n = n.next;
      } while (n !== null);
      a === null ? i = a = t : a = a.next = t;
    } else i = a = t;
    n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: a, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Uo(e, t, n, r) {
  var i = e.updateQueue;
  zn = false;
  var a = i.firstBaseUpdate, o = i.lastBaseUpdate, s = i.shared.pending;
  if (s !== null) {
    i.shared.pending = null;
    var l = s, c = l.next;
    l.next = null, o === null ? a = c : o.next = c, o = l;
    var f = e.alternate;
    f !== null && (f = f.updateQueue, s = f.lastBaseUpdate, s !== o && (s === null ? f.firstBaseUpdate = c : s.next = c, f.lastBaseUpdate = l));
  }
  if (a !== null) {
    var h = i.baseState;
    o = 0, f = c = l = null, s = a;
    do {
      var g = s.lane, w = s.eventTime;
      if ((r & g) === g) {
        f !== null && (f = f.next = { eventTime: w, lane: 0, tag: s.tag, payload: s.payload, callback: s.callback, next: null });
        e: {
          var E = e, b = s;
          switch (g = t, w = n, b.tag) {
            case 1:
              if (E = b.payload, typeof E == "function") {
                h = E.call(w, h, g);
                break e;
              }
              h = E;
              break e;
            case 3:
              E.flags = E.flags & -65537 | 128;
            case 0:
              if (E = b.payload, g = typeof E == "function" ? E.call(w, h, g) : E, g == null) break e;
              h = Ye({}, h, g);
              break e;
            case 2:
              zn = true;
          }
        }
        s.callback !== null && s.lane !== 0 && (e.flags |= 64, g = i.effects, g === null ? i.effects = [s] : g.push(s));
      } else w = { eventTime: w, lane: g, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, f === null ? (c = f = w, l = h) : f = f.next = w, o |= g;
      if (s = s.next, s === null) {
        if (s = i.shared.pending, s === null) break;
        g = s, s = g.next, g.next = null, i.lastBaseUpdate = g, i.shared.pending = null;
      }
    } while (true);
    if (f === null && (l = h), i.baseState = l, i.firstBaseUpdate = c, i.lastBaseUpdate = f, t = i.shared.interleaved, t !== null) {
      i = t;
      do
        o |= i.lane, i = i.next;
      while (i !== t);
    } else a === null && (i.shared.lanes = 0);
    Pr |= o, e.lanes = o, e.memoizedState = h;
  }
}
function dd(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], i = r.callback;
    if (i !== null) {
      if (r.callback = null, r = n, typeof i != "function") throw Error(W(191, i));
      i.call(r);
    }
  }
}
var Ia = {}, vn = cr(Ia), xa = cr(Ia), wa = cr(Ia);
function kr(e) {
  if (e === Ia) throw Error(W(174));
  return e;
}
function Wu(e, t) {
  switch (Me(wa, t), Me(xa, e), Me(vn, Ia), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : wl(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = wl(t, e);
  }
  ze(vn), Me(vn, t);
}
function vi() {
  ze(vn), ze(xa), ze(wa);
}
function tp(e) {
  kr(wa.current);
  var t = kr(vn.current), n = wl(t, e.type);
  t !== n && (Me(xa, e), Me(vn, n));
}
function Hu(e) {
  xa.current === e && (ze(vn), ze(xa));
}
var Qe = cr(0);
function zo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var Ks = [];
function $u() {
  for (var e = 0; e < Ks.length; e++) Ks[e]._workInProgressVersionPrimary = null;
  Ks.length = 0;
}
var go = jn.ReactCurrentDispatcher, Ys = jn.ReactCurrentBatchConfig, br = 0, Ke = null, st = null, ut = null, Vo = false, ia = false, ka = 0, Vg = 0;
function gt() {
  throw Error(W(321));
}
function Zu(e, t) {
  if (t === null) return false;
  for (var n = 0; n < t.length && n < e.length; n++) if (!sn(e[n], t[n])) return false;
  return true;
}
function Gu(e, t, n, r, i, a) {
  if (br = a, Ke = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, go.current = e === null || e.memoizedState === null ? Zg : Gg, e = n(r, i), ia) {
    a = 0;
    do {
      if (ia = false, ka = 0, 25 <= a) throw Error(W(301));
      a += 1, ut = st = null, t.updateQueue = null, go.current = Qg, e = n(r, i);
    } while (ia);
  }
  if (go.current = Wo, t = st !== null && st.next !== null, br = 0, ut = st = Ke = null, Vo = false, t) throw Error(W(300));
  return e;
}
function Qu() {
  var e = ka !== 0;
  return ka = 0, e;
}
function dn() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ut === null ? Ke.memoizedState = ut = e : ut = ut.next = e, ut;
}
function Yt() {
  if (st === null) {
    var e = Ke.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = st.next;
  var t = ut === null ? Ke.memoizedState : ut.next;
  if (t !== null) ut = t, st = e;
  else {
    if (e === null) throw Error(W(310));
    st = e, e = { memoizedState: st.memoizedState, baseState: st.baseState, baseQueue: st.baseQueue, queue: st.queue, next: null }, ut === null ? Ke.memoizedState = ut = e : ut = ut.next = e;
  }
  return ut;
}
function Sa(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Xs(e) {
  var t = Yt(), n = t.queue;
  if (n === null) throw Error(W(311));
  n.lastRenderedReducer = e;
  var r = st, i = r.baseQueue, a = n.pending;
  if (a !== null) {
    if (i !== null) {
      var o = i.next;
      i.next = a.next, a.next = o;
    }
    r.baseQueue = i = a, n.pending = null;
  }
  if (i !== null) {
    a = i.next, r = r.baseState;
    var s = o = null, l = null, c = a;
    do {
      var f = c.lane;
      if ((br & f) === f) l !== null && (l = l.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var h = { lane: f, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null };
        l === null ? (s = l = h, o = r) : l = l.next = h, Ke.lanes |= f, Pr |= f;
      }
      c = c.next;
    } while (c !== null && c !== a);
    l === null ? o = r : l.next = s, sn(r, t.memoizedState) || (Rt = true), t.memoizedState = r, t.baseState = o, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    i = e;
    do
      a = i.lane, Ke.lanes |= a, Pr |= a, i = i.next;
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function qs(e) {
  var t = Yt(), n = t.queue;
  if (n === null) throw Error(W(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, i = n.pending, a = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = i = i.next;
    do
      a = e(a, o.action), o = o.next;
    while (o !== i);
    sn(a, t.memoizedState) || (Rt = true), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), n.lastRenderedState = a;
  }
  return [a, r];
}
function np() {
}
function rp(e, t) {
  var n = Ke, r = Yt(), i = t(), a = !sn(r.memoizedState, i);
  if (a && (r.memoizedState = i, Rt = true), r = r.queue, Ku(op.bind(null, n, r, e), [e]), r.getSnapshot !== t || a || ut !== null && ut.memoizedState.tag & 1) {
    if (n.flags |= 2048, _a(9, ap.bind(null, n, r, i, t), void 0, null), dt === null) throw Error(W(349));
    br & 30 || ip(n, t, i);
  }
  return i;
}
function ip(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ke.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ke.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function ap(e, t, n, r) {
  t.value = n, t.getSnapshot = r, sp(t) && lp(e);
}
function op(e, t, n) {
  return n(function() {
    sp(t) && lp(e);
  });
}
function sp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !sn(e, n);
  } catch {
    return true;
  }
}
function lp(e) {
  var t = Nn(e, 1);
  t !== null && on(t, e, 1, -1);
}
function fd(e) {
  var t = dn();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Sa, lastRenderedState: e }, t.queue = e, e = e.dispatch = $g.bind(null, Ke, e), [t.memoizedState, e];
}
function _a(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Ke.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ke.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function up() {
  return Yt().memoizedState;
}
function yo(e, t, n, r) {
  var i = dn();
  Ke.flags |= e, i.memoizedState = _a(1 | t, n, void 0, r === void 0 ? null : r);
}
function hs(e, t, n, r) {
  var i = Yt();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (st !== null) {
    var o = st.memoizedState;
    if (a = o.destroy, r !== null && Zu(r, o.deps)) {
      i.memoizedState = _a(t, n, a, r);
      return;
    }
  }
  Ke.flags |= e, i.memoizedState = _a(1 | t, n, a, r);
}
function hd(e, t) {
  return yo(8390656, 8, e, t);
}
function Ku(e, t) {
  return hs(2048, 8, e, t);
}
function cp(e, t) {
  return hs(4, 2, e, t);
}
function dp(e, t) {
  return hs(4, 4, e, t);
}
function fp(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function hp(e, t, n) {
  return n = n != null ? n.concat([e]) : null, hs(4, 4, fp.bind(null, t, e), n);
}
function Yu() {
}
function pp(e, t) {
  var n = Yt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Zu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function mp(e, t) {
  var n = Yt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Zu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function vp(e, t, n) {
  return br & 21 ? (sn(n, t) || (n = kh(), Ke.lanes |= n, Pr |= n, e.baseState = true), t) : (e.baseState && (e.baseState = false, Rt = true), e.memoizedState = n);
}
function Wg(e, t) {
  var n = je;
  je = n !== 0 && 4 > n ? n : 4, e(true);
  var r = Ys.transition;
  Ys.transition = {};
  try {
    e(false), t();
  } finally {
    je = n, Ys.transition = r;
  }
}
function gp() {
  return Yt().memoizedState;
}
function Hg(e, t, n) {
  var r = nr(e);
  if (n = { lane: r, action: n, hasEagerState: false, eagerState: null, next: null }, yp(e)) xp(t, n);
  else if (n = Jh(e, t, n, r), n !== null) {
    var i = _t();
    on(n, e, r, i), wp(n, t, r);
  }
}
function $g(e, t, n) {
  var r = nr(e), i = { lane: r, action: n, hasEagerState: false, eagerState: null, next: null };
  if (yp(e)) xp(t, i);
  else {
    var a = e.alternate;
    if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
      var o = t.lastRenderedState, s = a(o, n);
      if (i.hasEagerState = true, i.eagerState = s, sn(s, o)) {
        var l = t.interleaved;
        l === null ? (i.next = i, zu(t)) : (i.next = l.next, l.next = i), t.interleaved = i;
        return;
      }
    } catch {
    } finally {
    }
    n = Jh(e, t, i, r), n !== null && (i = _t(), on(n, e, r, i), wp(n, t, r));
  }
}
function yp(e) {
  var t = e.alternate;
  return e === Ke || t !== null && t === Ke;
}
function xp(e, t) {
  ia = Vo = true;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function wp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, bu(e, n);
  }
}
var Wo = { readContext: Kt, useCallback: gt, useContext: gt, useEffect: gt, useImperativeHandle: gt, useInsertionEffect: gt, useLayoutEffect: gt, useMemo: gt, useReducer: gt, useRef: gt, useState: gt, useDebugValue: gt, useDeferredValue: gt, useTransition: gt, useMutableSource: gt, useSyncExternalStore: gt, useId: gt, unstable_isNewReconciler: false }, Zg = { readContext: Kt, useCallback: function(e, t) {
  return dn().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Kt, useEffect: hd, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, yo(4194308, 4, fp.bind(null, t, e), n);
}, useLayoutEffect: function(e, t) {
  return yo(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return yo(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = dn();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = dn();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Hg.bind(null, Ke, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = dn();
  return e = { current: e }, t.memoizedState = e;
}, useState: fd, useDebugValue: Yu, useDeferredValue: function(e) {
  return dn().memoizedState = e;
}, useTransition: function() {
  var e = fd(false), t = e[0];
  return e = Wg.bind(null, e[1]), dn().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Ke, i = dn();
  if ($e) {
    if (n === void 0) throw Error(W(407));
    n = n();
  } else {
    if (n = t(), dt === null) throw Error(W(349));
    br & 30 || ip(r, t, n);
  }
  i.memoizedState = n;
  var a = { value: n, getSnapshot: t };
  return i.queue = a, hd(op.bind(null, r, a, e), [e]), r.flags |= 2048, _a(9, ap.bind(null, r, a, n, t), void 0, null), n;
}, useId: function() {
  var e = dn(), t = dt.identifierPrefix;
  if ($e) {
    var n = En, r = _n;
    n = (r & ~(1 << 32 - an(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ka++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Vg++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: false }, Gg = { readContext: Kt, useCallback: pp, useContext: Kt, useEffect: Ku, useImperativeHandle: hp, useInsertionEffect: cp, useLayoutEffect: dp, useMemo: mp, useReducer: Xs, useRef: up, useState: function() {
  return Xs(Sa);
}, useDebugValue: Yu, useDeferredValue: function(e) {
  var t = Yt();
  return vp(t, st.memoizedState, e);
}, useTransition: function() {
  var e = Xs(Sa)[0], t = Yt().memoizedState;
  return [e, t];
}, useMutableSource: np, useSyncExternalStore: rp, useId: gp, unstable_isNewReconciler: false }, Qg = { readContext: Kt, useCallback: pp, useContext: Kt, useEffect: Ku, useImperativeHandle: hp, useInsertionEffect: cp, useLayoutEffect: dp, useMemo: mp, useReducer: qs, useRef: up, useState: function() {
  return qs(Sa);
}, useDebugValue: Yu, useDeferredValue: function(e) {
  var t = Yt();
  return st === null ? t.memoizedState = e : vp(t, st.memoizedState, e);
}, useTransition: function() {
  var e = qs(Sa)[0], t = Yt().memoizedState;
  return [e, t];
}, useMutableSource: np, useSyncExternalStore: rp, useId: gp, unstable_isNewReconciler: false };
function en(e, t) {
  if (e && e.defaultProps) {
    t = Ye({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function zl(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Ye({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ps = { isMounted: function(e) {
  return (e = e._reactInternals) ? Lr(e) === e : false;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = _t(), i = nr(e), a = Cn(r, i);
  a.payload = t, n != null && (a.callback = n), t = er(e, a, i), t !== null && (on(t, e, i, r), vo(t, e, i));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = _t(), i = nr(e), a = Cn(r, i);
  a.tag = 1, a.payload = t, n != null && (a.callback = n), t = er(e, a, i), t !== null && (on(t, e, i, r), vo(t, e, i));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = _t(), r = nr(e), i = Cn(n, r);
  i.tag = 2, t != null && (i.callback = t), t = er(e, i, r), t !== null && (on(t, e, r, n), vo(t, e, r));
} };
function pd(e, t, n, r, i, a, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !ma(n, r) || !ma(i, a) : true;
}
function kp(e, t, n) {
  var r = false, i = or, a = t.contextType;
  return typeof a == "object" && a !== null ? a = Kt(a) : (i = Dt(t) ? Cr : kt.current, r = t.contextTypes, a = (r = r != null) ? hi(e, i) : or), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ps, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = a), t;
}
function md(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ps.enqueueReplaceState(t, t.state, null);
}
function Vl(e, t, n, r) {
  var i = e.stateNode;
  i.props = n, i.state = e.memoizedState, i.refs = {}, Vu(e);
  var a = t.contextType;
  typeof a == "object" && a !== null ? i.context = Kt(a) : (a = Dt(t) ? Cr : kt.current, i.context = hi(e, a)), i.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (zl(e, t, a, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && ps.enqueueReplaceState(i, i.state, null), Uo(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function gi(e, t) {
  try {
    var n = "", r = t;
    do
      n += Sv(r), r = r.return;
    while (r);
    var i = n;
  } catch (a) {
    i = `
Error generating stack: ` + a.message + `
` + a.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Js(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Wl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Kg = typeof WeakMap == "function" ? WeakMap : Map;
function Sp(e, t, n) {
  n = Cn(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    $o || ($o = true, Jl = r), Wl(e, t);
  }, n;
}
function _p(e, t, n) {
  n = Cn(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    n.payload = function() {
      return r(i);
    }, n.callback = function() {
      Wl(e, t);
    };
  }
  var a = e.stateNode;
  return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
    Wl(e, t), typeof r != "function" && (tr === null ? tr = /* @__PURE__ */ new Set([this]) : tr.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function vd(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Kg();
    var i = /* @__PURE__ */ new Set();
    r.set(t, i);
  } else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
  i.has(n) || (i.add(n), e = uy.bind(null, e, t, n), t.then(e, e));
}
function gd(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : true), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function yd(e, t, n, r, i) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Cn(-1, 1), t.tag = 2, er(n, t, 1))), n.lanes |= 1), e);
}
var Yg = jn.ReactCurrentOwner, Rt = false;
function St(e, t, n, r) {
  t.child = e === null ? qh(t, null, n, r) : mi(t, e.child, n, r);
}
function xd(e, t, n, r, i) {
  n = n.render;
  var a = t.ref;
  return ui(t, i), r = Gu(e, t, n, r, a, i), n = Qu(), e !== null && !Rt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Rn(e, t, i)) : ($e && n && Lu(t), t.flags |= 1, St(e, t, r, i), t.child);
}
function wd(e, t, n, r, i) {
  if (e === null) {
    var a = n.type;
    return typeof a == "function" && !ic(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, Ep(e, t, a, r, i)) : (e = So(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (a = e.child, !(e.lanes & i)) {
    var o = a.memoizedProps;
    if (n = n.compare, n = n !== null ? n : ma, n(o, r) && e.ref === t.ref) return Rn(e, t, i);
  }
  return t.flags |= 1, e = rr(a, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Ep(e, t, n, r, i) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (ma(a, r) && e.ref === t.ref) if (Rt = false, t.pendingProps = r = a, (e.lanes & i) !== 0) e.flags & 131072 && (Rt = true);
    else return t.lanes = e.lanes, Rn(e, t, i);
  }
  return Hl(e, t, n, r, i);
}
function Cp(e, t, n) {
  var r = t.pendingProps, i = r.children, a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Me(ii, It), It |= n;
  else {
    if (!(n & 1073741824)) return e = a !== null ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Me(ii, It), It |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = a !== null ? a.baseLanes : n, Me(ii, It), It |= r;
  }
  else a !== null ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, Me(ii, It), It |= r;
  return St(e, t, i, n), t.child;
}
function Tp(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Hl(e, t, n, r, i) {
  var a = Dt(n) ? Cr : kt.current;
  return a = hi(t, a), ui(t, i), n = Gu(e, t, n, r, a, i), r = Qu(), e !== null && !Rt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Rn(e, t, i)) : ($e && r && Lu(t), t.flags |= 1, St(e, t, n, i), t.child);
}
function kd(e, t, n, r, i) {
  if (Dt(n)) {
    var a = true;
    Lo(t);
  } else a = false;
  if (ui(t, i), t.stateNode === null) xo(e, t), kp(t, n, r), Vl(t, n, r, i), r = true;
  else if (e === null) {
    var o = t.stateNode, s = t.memoizedProps;
    o.props = s;
    var l = o.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = Kt(c) : (c = Dt(n) ? Cr : kt.current, c = hi(t, c));
    var f = n.getDerivedStateFromProps, h = typeof f == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    h || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== r || l !== c) && md(t, o, r, c), zn = false;
    var g = t.memoizedState;
    o.state = g, Uo(t, r, o, i), l = t.memoizedState, s !== r || g !== l || At.current || zn ? (typeof f == "function" && (zl(t, n, f, r), l = t.memoizedState), (s = zn || pd(t, n, s, r, g, l, c)) ? (h || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), o.props = r, o.state = l, o.context = c, r = s) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = false);
  } else {
    o = t.stateNode, ep(e, t), s = t.memoizedProps, c = t.type === t.elementType ? s : en(t.type, s), o.props = c, h = t.pendingProps, g = o.context, l = n.contextType, typeof l == "object" && l !== null ? l = Kt(l) : (l = Dt(n) ? Cr : kt.current, l = hi(t, l));
    var w = n.getDerivedStateFromProps;
    (f = typeof w == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== h || g !== l) && md(t, o, r, l), zn = false, g = t.memoizedState, o.state = g, Uo(t, r, o, i);
    var E = t.memoizedState;
    s !== h || g !== E || At.current || zn ? (typeof w == "function" && (zl(t, n, w, r), E = t.memoizedState), (c = zn || pd(t, n, c, r, g, E, l) || false) ? (f || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, E, l), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, E, l)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && g === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = E), o.props = r, o.state = E, o.context = l, r = c) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && g === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024), r = false);
  }
  return $l(e, t, n, r, a, i);
}
function $l(e, t, n, r, i, a) {
  Tp(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && od(t, n, false), Rn(e, t, a);
  r = t.stateNode, Yg.current = t;
  var s = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = mi(t, e.child, null, a), t.child = mi(t, null, s, a)) : St(e, t, s, a), t.memoizedState = r.state, i && od(t, n, true), t.child;
}
function bp(e) {
  var t = e.stateNode;
  t.pendingContext ? ad(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ad(e, t.context, false), Wu(e, t.containerInfo);
}
function Sd(e, t, n, r, i) {
  return pi(), Mu(i), t.flags |= 256, St(e, t, n, r), t.child;
}
var Zl = { dehydrated: null, treeContext: null, retryLane: 0 };
function Gl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Pp(e, t, n) {
  var r = t.pendingProps, i = Qe.current, a = false, o = (t.flags & 128) !== 0, s;
  if ((s = o) || (s = e !== null && e.memoizedState === null ? false : (i & 2) !== 0), s ? (a = true, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), Me(Qe, i & 1), e === null) return Fl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, o = { mode: "hidden", children: o }, !(r & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = o) : a = gs(o, r, 0, null), e = Er(e, r, n, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = Gl(n), t.memoizedState = Zl, e) : Xu(t, o));
  if (i = e.memoizedState, i !== null && (s = i.dehydrated, s !== null)) return Xg(e, t, o, r, s, i, n);
  if (a) {
    a = r.fallback, o = t.mode, i = e.child, s = i.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = rr(i, l), r.subtreeFlags = i.subtreeFlags & 14680064), s !== null ? a = rr(s, a) : (a = Er(a, o, n, null), a.flags |= 2), a.return = t, r.return = t, r.sibling = a, t.child = r, r = a, a = t.child, o = e.child.memoizedState, o = o === null ? Gl(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, a.memoizedState = o, a.childLanes = e.childLanes & ~n, t.memoizedState = Zl, r;
  }
  return a = e.child, e = a.sibling, r = rr(a, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Xu(e, t) {
  return t = gs({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function ro(e, t, n, r) {
  return r !== null && Mu(r), mi(t, e.child, null, n), e = Xu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Xg(e, t, n, r, i, a, o) {
  if (n) return t.flags & 256 ? (t.flags &= -257, r = Js(Error(W(422))), ro(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (a = r.fallback, i = t.mode, r = gs({ mode: "visible", children: r.children }, i, 0, null), a = Er(a, i, o, null), a.flags |= 2, r.return = t, a.return = t, r.sibling = a, t.child = r, t.mode & 1 && mi(t, e.child, null, o), t.child.memoizedState = Gl(o), t.memoizedState = Zl, a);
  if (!(t.mode & 1)) return ro(e, t, o, null);
  if (i.data === "$!") {
    if (r = i.nextSibling && i.nextSibling.dataset, r) var s = r.dgst;
    return r = s, a = Error(W(419)), r = Js(a, r, void 0), ro(e, t, o, r);
  }
  if (s = (o & e.childLanes) !== 0, Rt || s) {
    if (r = dt, r !== null) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      i = i & (r.suspendedLanes | o) ? 0 : i, i !== 0 && i !== a.retryLane && (a.retryLane = i, Nn(e, i), on(r, e, i, -1));
    }
    return rc(), r = Js(Error(W(421))), ro(e, t, o, r);
  }
  return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = cy.bind(null, e), i._reactRetry = t, null) : (e = a.treeContext, Bt = Jn(i.nextSibling), Mt = t, $e = true, rn = null, e !== null && ($t[Zt++] = _n, $t[Zt++] = En, $t[Zt++] = Tr, _n = e.id, En = e.overflow, Tr = t), t = Xu(t, r.children), t.flags |= 4096, t);
}
function _d(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ul(e.return, t, n);
}
function el(e, t, n, r, i) {
  var a = e.memoizedState;
  a === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = i);
}
function Np(e, t, n) {
  var r = t.pendingProps, i = r.revealOrder, a = r.tail;
  if (St(e, t, r.children, n), r = Qe.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && _d(e, n, t);
      else if (e.tag === 19) _d(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if (Me(Qe, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (i) {
    case "forwards":
      for (n = t.child, i = null; n !== null; ) e = n.alternate, e !== null && zo(e) === null && (i = n), n = n.sibling;
      n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), el(t, false, i, n, a);
      break;
    case "backwards":
      for (n = null, i = t.child, t.child = null; i !== null; ) {
        if (e = i.alternate, e !== null && zo(e) === null) {
          t.child = i;
          break;
        }
        e = i.sibling, i.sibling = n, n = i, i = e;
      }
      el(t, true, n, null, a);
      break;
    case "together":
      el(t, false, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function xo(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Rn(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Pr |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(W(153));
  if (t.child !== null) {
    for (e = t.child, n = rr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = rr(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function qg(e, t, n) {
  switch (t.tag) {
    case 3:
      bp(t), pi();
      break;
    case 5:
      tp(t);
      break;
    case 1:
      Dt(t.type) && Lo(t);
      break;
    case 4:
      Wu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, i = t.memoizedProps.value;
      Me(Oo, r._currentValue), r._currentValue = i;
      break;
    case 13:
      if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (Me(Qe, Qe.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Pp(e, t, n) : (Me(Qe, Qe.current & 1), e = Rn(e, t, n), e !== null ? e.sibling : null);
      Me(Qe, Qe.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Np(e, t, n);
        t.flags |= 128;
      }
      if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), Me(Qe, Qe.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Cp(e, t, n);
  }
  return Rn(e, t, n);
}
var Rp, Ql, Ap, Dp;
Rp = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
Ql = function() {
};
Ap = function(e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    e = t.stateNode, kr(vn.current);
    var a = null;
    switch (n) {
      case "input":
        i = vl(e, i), r = vl(e, r), a = [];
        break;
      case "select":
        i = Ye({}, i, { value: void 0 }), r = Ye({}, r, { value: void 0 }), a = [];
        break;
      case "textarea":
        i = xl(e, i), r = xl(e, r), a = [];
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = jo);
    }
    kl(n, r);
    var o;
    n = null;
    for (c in i) if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null) if (c === "style") {
      var s = i[c];
      for (o in s) s.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (la.hasOwnProperty(c) ? a || (a = []) : (a = a || []).push(c, null));
    for (c in r) {
      var l = r[c];
      if (s = i == null ? void 0 : i[c], r.hasOwnProperty(c) && l !== s && (l != null || s != null)) if (c === "style") if (s) {
        for (o in s) !s.hasOwnProperty(o) || l && l.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in l) l.hasOwnProperty(o) && s[o] !== l[o] && (n || (n = {}), n[o] = l[o]);
      } else n || (a || (a = []), a.push(c, n)), n = l;
      else c === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, s = s ? s.__html : void 0, l != null && s !== l && (a = a || []).push(c, l)) : c === "children" ? typeof l != "string" && typeof l != "number" || (a = a || []).push(c, "" + l) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (la.hasOwnProperty(c) ? (l != null && c === "onScroll" && Ue("scroll", e), a || s === l || (a = [])) : (a = a || []).push(c, l));
    }
    n && (a = a || []).push("style", n);
    var c = a;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Dp = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ui(e, t) {
  if (!$e) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function yt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
  else for (i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Jg(e, t, n) {
  var r = t.pendingProps;
  switch (Bu(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return yt(t), null;
    case 1:
      return Dt(t.type) && Io(), yt(t), null;
    case 3:
      return r = t.stateNode, vi(), ze(At), ze(kt), $u(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (to(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, rn !== null && (nu(rn), rn = null))), Ql(e, t), yt(t), null;
    case 5:
      Hu(t);
      var i = kr(wa.current);
      if (n = t.type, e !== null && t.stateNode != null) Ap(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(W(166));
          return yt(t), null;
        }
        if (e = kr(vn.current), to(t)) {
          r = t.stateNode, n = t.type;
          var a = t.memoizedProps;
          switch (r[hn] = t, r[ya] = a, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              Ue("cancel", r), Ue("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Ue("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Yi.length; i++) Ue(Yi[i], r);
              break;
            case "source":
              Ue("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Ue("error", r), Ue("load", r);
              break;
            case "details":
              Ue("toggle", r);
              break;
            case "input":
              Dc(r, a), Ue("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!a.multiple }, Ue("invalid", r);
              break;
            case "textarea":
              Ic(r, a), Ue("invalid", r);
          }
          kl(n, a), i = null;
          for (var o in a) if (a.hasOwnProperty(o)) {
            var s = a[o];
            o === "children" ? typeof s == "string" ? r.textContent !== s && (a.suppressHydrationWarning !== true && eo(r.textContent, s, e), i = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (a.suppressHydrationWarning !== true && eo(r.textContent, s, e), i = ["children", "" + s]) : la.hasOwnProperty(o) && s != null && o === "onScroll" && Ue("scroll", r);
          }
          switch (n) {
            case "input":
              Za(r), jc(r, a, true);
              break;
            case "textarea":
              Za(r), Lc(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = jo);
          }
          r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = oh(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = true : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[hn] = t, e[ya] = r, Rp(e, t, false, false), t.stateNode = e;
          e: {
            switch (o = Sl(n, r), n) {
              case "dialog":
                Ue("cancel", e), Ue("close", e), i = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                Ue("load", e), i = r;
                break;
              case "video":
              case "audio":
                for (i = 0; i < Yi.length; i++) Ue(Yi[i], e);
                i = r;
                break;
              case "source":
                Ue("error", e), i = r;
                break;
              case "img":
              case "image":
              case "link":
                Ue("error", e), Ue("load", e), i = r;
                break;
              case "details":
                Ue("toggle", e), i = r;
                break;
              case "input":
                Dc(e, r), i = vl(e, r), Ue("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, i = Ye({}, r, { value: void 0 }), Ue("invalid", e);
                break;
              case "textarea":
                Ic(e, r), i = xl(e, r), Ue("invalid", e);
                break;
              default:
                i = r;
            }
            kl(n, i), s = i;
            for (a in s) if (s.hasOwnProperty(a)) {
              var l = s[a];
              a === "style" ? uh(e, l) : a === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && sh(e, l)) : a === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && ua(e, l) : typeof l == "number" && ua(e, "" + l) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (la.hasOwnProperty(a) ? l != null && a === "onScroll" && Ue("scroll", e) : l != null && ku(e, a, l, o));
            }
            switch (n) {
              case "input":
                Za(e), jc(e, r, false);
                break;
              case "textarea":
                Za(e), Lc(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ar(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, a = r.value, a != null ? ai(e, !!r.multiple, a, false) : r.defaultValue != null && ai(e, !!r.multiple, r.defaultValue, true);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = jo);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = true;
                break e;
              default:
                r = false;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return yt(t), null;
    case 6:
      if (e && t.stateNode != null) Dp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(W(166));
        if (n = kr(wa.current), kr(vn.current), to(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[hn] = t, (a = r.nodeValue !== n) && (e = Mt, e !== null)) switch (e.tag) {
            case 3:
              eo(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== true && eo(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          a && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[hn] = t, t.stateNode = r;
      }
      return yt(t), null;
    case 13:
      if (ze(Qe), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if ($e && Bt !== null && t.mode & 1 && !(t.flags & 128)) Yh(), pi(), t.flags |= 98560, a = false;
        else if (a = to(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!a) throw Error(W(318));
            if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(W(317));
            a[hn] = t;
          } else pi(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          yt(t), a = false;
        } else rn !== null && (nu(rn), rn = null), a = true;
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Qe.current & 1 ? lt === 0 && (lt = 3) : rc())), t.updateQueue !== null && (t.flags |= 4), yt(t), null);
    case 4:
      return vi(), Ql(e, t), e === null && va(t.stateNode.containerInfo), yt(t), null;
    case 10:
      return Uu(t.type._context), yt(t), null;
    case 17:
      return Dt(t.type) && Io(), yt(t), null;
    case 19:
      if (ze(Qe), a = t.memoizedState, a === null) return yt(t), null;
      if (r = (t.flags & 128) !== 0, o = a.rendering, o === null) if (r) Ui(a, false);
      else {
        if (lt !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = zo(e), o !== null) {
            for (t.flags |= 128, Ui(a, false), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) a = n, e = r, a.flags &= 14680066, o = a.alternate, o === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = o.childLanes, a.lanes = o.lanes, a.child = o.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = o.memoizedProps, a.memoizedState = o.memoizedState, a.updateQueue = o.updateQueue, a.type = o.type, e = o.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return Me(Qe, Qe.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        a.tail !== null && nt() > yi && (t.flags |= 128, r = true, Ui(a, false), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = zo(o), e !== null) {
          if (t.flags |= 128, r = true, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Ui(a, true), a.tail === null && a.tailMode === "hidden" && !o.alternate && !$e) return yt(t), null;
        } else 2 * nt() - a.renderingStartTime > yi && n !== 1073741824 && (t.flags |= 128, r = true, Ui(a, false), t.lanes = 4194304);
        a.isBackwards ? (o.sibling = t.child, t.child = o) : (n = a.last, n !== null ? n.sibling = o : t.child = o, a.last = o);
      }
      return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = nt(), t.sibling = null, n = Qe.current, Me(Qe, r ? n & 1 | 2 : n & 1), t) : (yt(t), null);
    case 22:
    case 23:
      return nc(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? It & 1073741824 && (yt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : yt(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(W(156, t.tag));
}
function ey(e, t) {
  switch (Bu(t), t.tag) {
    case 1:
      return Dt(t.type) && Io(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return vi(), ze(At), ze(kt), $u(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Hu(t), null;
    case 13:
      if (ze(Qe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(W(340));
        pi();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ze(Qe), null;
    case 4:
      return vi(), null;
    case 10:
      return Uu(t.type._context), null;
    case 22:
    case 23:
      return nc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var io = false, xt = false, ty = typeof WeakSet == "function" ? WeakSet : Set, Y = null;
function ri(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    et(e, t, r);
  }
  else n.current = null;
}
function Kl(e, t, n) {
  try {
    n();
  } catch (r) {
    et(e, t, r);
  }
}
var Ed = false;
function ny(e, t) {
  if (Dl = Ro, e = Mh(), Iu(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var i = r.anchorOffset, a = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, a.nodeType;
        } catch {
          n = null;
          break e;
        }
        var o = 0, s = -1, l = -1, c = 0, f = 0, h = e, g = null;
        t: for (; ; ) {
          for (var w; h !== n || i !== 0 && h.nodeType !== 3 || (s = o + i), h !== a || r !== 0 && h.nodeType !== 3 || (l = o + r), h.nodeType === 3 && (o += h.nodeValue.length), (w = h.firstChild) !== null; ) g = h, h = w;
          for (; ; ) {
            if (h === e) break t;
            if (g === n && ++c === i && (s = o), g === a && ++f === r && (l = o), (w = h.nextSibling) !== null) break;
            h = g, g = h.parentNode;
          }
          h = w;
        }
        n = s === -1 || l === -1 ? null : { start: s, end: l };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (jl = { focusedElem: e, selectionRange: n }, Ro = false, Y = t; Y !== null; ) if (t = Y, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, Y = e;
  else for (; Y !== null; ) {
    t = Y;
    try {
      var E = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (E !== null) {
            var b = E.memoizedProps, I = E.memoizedState, x = t.stateNode, v = x.getSnapshotBeforeUpdate(t.elementType === t.type ? b : en(t.type, b), I);
            x.__reactInternalSnapshotBeforeUpdate = v;
          }
          break;
        case 3:
          var S = t.stateNode.containerInfo;
          S.nodeType === 1 ? S.textContent = "" : S.nodeType === 9 && S.documentElement && S.removeChild(S.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(W(163));
      }
    } catch (A) {
      et(t, t.return, A);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, Y = e;
      break;
    }
    Y = t.return;
  }
  return E = Ed, Ed = false, E;
}
function aa(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var i = r = r.next;
    do {
      if ((i.tag & e) === e) {
        var a = i.destroy;
        i.destroy = void 0, a !== void 0 && Kl(t, n, a);
      }
      i = i.next;
    } while (i !== r);
  }
}
function ms(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Yl(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function jp(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, jp(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[hn], delete t[ya], delete t[Bl], delete t[Og], delete t[Fg])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Ip(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Cd(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ip(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Xl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = jo));
  else if (r !== 4 && (e = e.child, e !== null)) for (Xl(e, t, n), e = e.sibling; e !== null; ) Xl(e, t, n), e = e.sibling;
}
function ql(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (ql(e, t, n), e = e.sibling; e !== null; ) ql(e, t, n), e = e.sibling;
}
var ht = null, tn = false;
function On(e, t, n) {
  for (n = n.child; n !== null; ) Lp(e, t, n), n = n.sibling;
}
function Lp(e, t, n) {
  if (mn && typeof mn.onCommitFiberUnmount == "function") try {
    mn.onCommitFiberUnmount(ss, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      xt || ri(n, t);
    case 6:
      var r = ht, i = tn;
      ht = null, On(e, t, n), ht = r, tn = i, ht !== null && (tn ? (e = ht, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ht.removeChild(n.stateNode));
      break;
    case 18:
      ht !== null && (tn ? (e = ht, n = n.stateNode, e.nodeType === 8 ? Gs(e.parentNode, n) : e.nodeType === 1 && Gs(e, n), ha(e)) : Gs(ht, n.stateNode));
      break;
    case 4:
      r = ht, i = tn, ht = n.stateNode.containerInfo, tn = true, On(e, t, n), ht = r, tn = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!xt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        i = r = r.next;
        do {
          var a = i, o = a.destroy;
          a = a.tag, o !== void 0 && (a & 2 || a & 4) && Kl(n, t, o), i = i.next;
        } while (i !== r);
      }
      On(e, t, n);
      break;
    case 1:
      if (!xt && (ri(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (s) {
        et(n, t, s);
      }
      On(e, t, n);
      break;
    case 21:
      On(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (xt = (r = xt) || n.memoizedState !== null, On(e, t, n), xt = r) : On(e, t, n);
      break;
    default:
      On(e, t, n);
  }
}
function Td(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new ty()), t.forEach(function(r) {
      var i = dy.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(i, i));
    });
  }
}
function Jt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var i = n[r];
    try {
      var a = e, o = t, s = o;
      e: for (; s !== null; ) {
        switch (s.tag) {
          case 5:
            ht = s.stateNode, tn = false;
            break e;
          case 3:
            ht = s.stateNode.containerInfo, tn = true;
            break e;
          case 4:
            ht = s.stateNode.containerInfo, tn = true;
            break e;
        }
        s = s.return;
      }
      if (ht === null) throw Error(W(160));
      Lp(a, o, i), ht = null, tn = false;
      var l = i.alternate;
      l !== null && (l.return = null), i.return = null;
    } catch (c) {
      et(i, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Bp(t, e), t = t.sibling;
}
function Bp(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Jt(t, e), cn(e), r & 4) {
        try {
          aa(3, e, e.return), ms(3, e);
        } catch (b) {
          et(e, e.return, b);
        }
        try {
          aa(5, e, e.return);
        } catch (b) {
          et(e, e.return, b);
        }
      }
      break;
    case 1:
      Jt(t, e), cn(e), r & 512 && n !== null && ri(n, n.return);
      break;
    case 5:
      if (Jt(t, e), cn(e), r & 512 && n !== null && ri(n, n.return), e.flags & 32) {
        var i = e.stateNode;
        try {
          ua(i, "");
        } catch (b) {
          et(e, e.return, b);
        }
      }
      if (r & 4 && (i = e.stateNode, i != null)) {
        var a = e.memoizedProps, o = n !== null ? n.memoizedProps : a, s = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null) try {
          s === "input" && a.type === "radio" && a.name != null && ih(i, a), Sl(s, o);
          var c = Sl(s, a);
          for (o = 0; o < l.length; o += 2) {
            var f = l[o], h = l[o + 1];
            f === "style" ? uh(i, h) : f === "dangerouslySetInnerHTML" ? sh(i, h) : f === "children" ? ua(i, h) : ku(i, f, h, c);
          }
          switch (s) {
            case "input":
              gl(i, a);
              break;
            case "textarea":
              ah(i, a);
              break;
            case "select":
              var g = i._wrapperState.wasMultiple;
              i._wrapperState.wasMultiple = !!a.multiple;
              var w = a.value;
              w != null ? ai(i, !!a.multiple, w, false) : g !== !!a.multiple && (a.defaultValue != null ? ai(i, !!a.multiple, a.defaultValue, true) : ai(i, !!a.multiple, a.multiple ? [] : "", false));
          }
          i[ya] = a;
        } catch (b) {
          et(e, e.return, b);
        }
      }
      break;
    case 6:
      if (Jt(t, e), cn(e), r & 4) {
        if (e.stateNode === null) throw Error(W(162));
        i = e.stateNode, a = e.memoizedProps;
        try {
          i.nodeValue = a;
        } catch (b) {
          et(e, e.return, b);
        }
      }
      break;
    case 3:
      if (Jt(t, e), cn(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        ha(t.containerInfo);
      } catch (b) {
        et(e, e.return, b);
      }
      break;
    case 4:
      Jt(t, e), cn(e);
      break;
    case 13:
      Jt(t, e), cn(e), i = e.child, i.flags & 8192 && (a = i.memoizedState !== null, i.stateNode.isHidden = a, !a || i.alternate !== null && i.alternate.memoizedState !== null || (ec = nt())), r & 4 && Td(e);
      break;
    case 22:
      if (f = n !== null && n.memoizedState !== null, e.mode & 1 ? (xt = (c = xt) || f, Jt(t, e), xt = c) : Jt(t, e), cn(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !f && e.mode & 1) for (Y = e, f = e.child; f !== null; ) {
          for (h = Y = f; Y !== null; ) {
            switch (g = Y, w = g.child, g.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                aa(4, g, g.return);
                break;
              case 1:
                ri(g, g.return);
                var E = g.stateNode;
                if (typeof E.componentWillUnmount == "function") {
                  r = g, n = g.return;
                  try {
                    t = r, E.props = t.memoizedProps, E.state = t.memoizedState, E.componentWillUnmount();
                  } catch (b) {
                    et(r, n, b);
                  }
                }
                break;
              case 5:
                ri(g, g.return);
                break;
              case 22:
                if (g.memoizedState !== null) {
                  Pd(h);
                  continue;
                }
            }
            w !== null ? (w.return = g, Y = w) : Pd(h);
          }
          f = f.sibling;
        }
        e: for (f = null, h = e; ; ) {
          if (h.tag === 5) {
            if (f === null) {
              f = h;
              try {
                i = h.stateNode, c ? (a = i.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (s = h.stateNode, l = h.memoizedProps.style, o = l != null && l.hasOwnProperty("display") ? l.display : null, s.style.display = lh("display", o));
              } catch (b) {
                et(e, e.return, b);
              }
            }
          } else if (h.tag === 6) {
            if (f === null) try {
              h.stateNode.nodeValue = c ? "" : h.memoizedProps;
            } catch (b) {
              et(e, e.return, b);
            }
          } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
            h.child.return = h, h = h.child;
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            f === h && (f = null), h = h.return;
          }
          f === h && (f = null), h.sibling.return = h.return, h = h.sibling;
        }
      }
      break;
    case 19:
      Jt(t, e), cn(e), r & 4 && Td(e);
      break;
    case 21:
      break;
    default:
      Jt(t, e), cn(e);
  }
}
function cn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ip(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(W(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (ua(i, ""), r.flags &= -33);
          var a = Cd(e);
          ql(e, a, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, s = Cd(e);
          Xl(e, s, o);
          break;
        default:
          throw Error(W(161));
      }
    } catch (l) {
      et(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function ry(e, t, n) {
  Y = e, Mp(e);
}
function Mp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; Y !== null; ) {
    var i = Y, a = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || io;
      if (!o) {
        var s = i.alternate, l = s !== null && s.memoizedState !== null || xt;
        s = io;
        var c = xt;
        if (io = o, (xt = l) && !c) for (Y = i; Y !== null; ) o = Y, l = o.child, o.tag === 22 && o.memoizedState !== null ? Nd(i) : l !== null ? (l.return = o, Y = l) : Nd(i);
        for (; a !== null; ) Y = a, Mp(a), a = a.sibling;
        Y = i, io = s, xt = c;
      }
      bd(e);
    } else i.subtreeFlags & 8772 && a !== null ? (a.return = i, Y = a) : bd(e);
  }
}
function bd(e) {
  for (; Y !== null; ) {
    var t = Y;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            xt || ms(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !xt) if (n === null) r.componentDidMount();
            else {
              var i = t.elementType === t.type ? n.memoizedProps : en(t.type, n.memoizedProps);
              r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var a = t.updateQueue;
            a !== null && dd(t, a, r);
            break;
          case 3:
            var o = t.updateQueue;
            if (o !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              dd(t, o, n);
            }
            break;
          case 5:
            var s = t.stateNode;
            if (n === null && t.flags & 4) {
              n = s;
              var l = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l.autoFocus && n.focus();
                  break;
                case "img":
                  l.src && (n.src = l.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (t.memoizedState === null) {
              var c = t.alternate;
              if (c !== null) {
                var f = c.memoizedState;
                if (f !== null) {
                  var h = f.dehydrated;
                  h !== null && ha(h);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(W(163));
        }
        xt || t.flags & 512 && Yl(t);
      } catch (g) {
        et(t, t.return, g);
      }
    }
    if (t === e) {
      Y = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, Y = n;
      break;
    }
    Y = t.return;
  }
}
function Pd(e) {
  for (; Y !== null; ) {
    var t = Y;
    if (t === e) {
      Y = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, Y = n;
      break;
    }
    Y = t.return;
  }
}
function Nd(e) {
  for (; Y !== null; ) {
    var t = Y;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ms(4, t);
          } catch (l) {
            et(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              et(t, i, l);
            }
          }
          var a = t.return;
          try {
            Yl(t);
          } catch (l) {
            et(t, a, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Yl(t);
          } catch (l) {
            et(t, o, l);
          }
      }
    } catch (l) {
      et(t, t.return, l);
    }
    if (t === e) {
      Y = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      s.return = t.return, Y = s;
      break;
    }
    Y = t.return;
  }
}
var iy = Math.ceil, Ho = jn.ReactCurrentDispatcher, qu = jn.ReactCurrentOwner, Qt = jn.ReactCurrentBatchConfig, Te = 0, dt = null, ot = null, pt = 0, It = 0, ii = cr(0), lt = 0, Ea = null, Pr = 0, vs = 0, Ju = 0, oa = null, Nt = null, ec = 0, yi = 1 / 0, wn = null, $o = false, Jl = null, tr = null, ao = false, Zn = null, Zo = 0, sa = 0, eu = null, wo = -1, ko = 0;
function _t() {
  return Te & 6 ? nt() : wo !== -1 ? wo : wo = nt();
}
function nr(e) {
  return e.mode & 1 ? Te & 2 && pt !== 0 ? pt & -pt : zg.transition !== null ? (ko === 0 && (ko = kh()), ko) : (e = je, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ph(e.type)), e) : 1;
}
function on(e, t, n, r) {
  if (50 < sa) throw sa = 0, eu = null, Error(W(185));
  Aa(e, n, r), (!(Te & 2) || e !== dt) && (e === dt && (!(Te & 2) && (vs |= n), lt === 4 && Hn(e, pt)), jt(e, r), n === 1 && Te === 0 && !(t.mode & 1) && (yi = nt() + 500, fs && dr()));
}
function jt(e, t) {
  var n = e.callbackNode;
  zv(e, t);
  var r = No(e, e === dt ? pt : 0);
  if (r === 0) n !== null && Oc(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Oc(n), t === 1) e.tag === 0 ? Ug(Rd.bind(null, e)) : Gh(Rd.bind(null, e)), Bg(function() {
      !(Te & 6) && dr();
    }), n = null;
    else {
      switch (Sh(r)) {
        case 1:
          n = Tu;
          break;
        case 4:
          n = xh;
          break;
        case 16:
          n = Po;
          break;
        case 536870912:
          n = wh;
          break;
        default:
          n = Po;
      }
      n = $p(n, Op.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Op(e, t) {
  if (wo = -1, ko = 0, Te & 6) throw Error(W(327));
  var n = e.callbackNode;
  if (ci() && e.callbackNode !== n) return null;
  var r = No(e, e === dt ? pt : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Go(e, r);
  else {
    t = r;
    var i = Te;
    Te |= 2;
    var a = Up();
    (dt !== e || pt !== t) && (wn = null, yi = nt() + 500, _r(e, t));
    do
      try {
        sy();
        break;
      } catch (s) {
        Fp(e, s);
      }
    while (true);
    Fu(), Ho.current = a, Te = i, ot !== null ? t = 0 : (dt = null, pt = 0, t = lt);
  }
  if (t !== 0) {
    if (t === 2 && (i = bl(e), i !== 0 && (r = i, t = tu(e, i))), t === 1) throw n = Ea, _r(e, 0), Hn(e, r), jt(e, nt()), n;
    if (t === 6) Hn(e, r);
    else {
      if (i = e.current.alternate, !(r & 30) && !ay(i) && (t = Go(e, r), t === 2 && (a = bl(e), a !== 0 && (r = a, t = tu(e, a))), t === 1)) throw n = Ea, _r(e, 0), Hn(e, r), jt(e, nt()), n;
      switch (e.finishedWork = i, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(W(345));
        case 2:
          vr(e, Nt, wn);
          break;
        case 3:
          if (Hn(e, r), (r & 130023424) === r && (t = ec + 500 - nt(), 10 < t)) {
            if (No(e, 0) !== 0) break;
            if (i = e.suspendedLanes, (i & r) !== r) {
              _t(), e.pingedLanes |= e.suspendedLanes & i;
              break;
            }
            e.timeoutHandle = Ll(vr.bind(null, e, Nt, wn), t);
            break;
          }
          vr(e, Nt, wn);
          break;
        case 4:
          if (Hn(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - an(r);
            a = 1 << o, o = t[o], o > i && (i = o), r &= ~a;
          }
          if (r = i, r = nt() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * iy(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Ll(vr.bind(null, e, Nt, wn), r);
            break;
          }
          vr(e, Nt, wn);
          break;
        case 5:
          vr(e, Nt, wn);
          break;
        default:
          throw Error(W(329));
      }
    }
  }
  return jt(e, nt()), e.callbackNode === n ? Op.bind(null, e) : null;
}
function tu(e, t) {
  var n = oa;
  return e.current.memoizedState.isDehydrated && (_r(e, t).flags |= 256), e = Go(e, t), e !== 2 && (t = Nt, Nt = n, t !== null && nu(t)), e;
}
function nu(e) {
  Nt === null ? Nt = e : Nt.push.apply(Nt, e);
}
function ay(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var i = n[r], a = i.getSnapshot;
        i = i.value;
        try {
          if (!sn(a(), i)) return false;
        } catch {
          return false;
        }
      }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return true;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return true;
}
function Hn(e, t) {
  for (t &= ~Ju, t &= ~vs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - an(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Rd(e) {
  if (Te & 6) throw Error(W(327));
  ci();
  var t = No(e, 0);
  if (!(t & 1)) return jt(e, nt()), null;
  var n = Go(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = bl(e);
    r !== 0 && (t = r, n = tu(e, r));
  }
  if (n === 1) throw n = Ea, _r(e, 0), Hn(e, t), jt(e, nt()), n;
  if (n === 6) throw Error(W(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, vr(e, Nt, wn), jt(e, nt()), null;
}
function tc(e, t) {
  var n = Te;
  Te |= 1;
  try {
    return e(t);
  } finally {
    Te = n, Te === 0 && (yi = nt() + 500, fs && dr());
  }
}
function Nr(e) {
  Zn !== null && Zn.tag === 0 && !(Te & 6) && ci();
  var t = Te;
  Te |= 1;
  var n = Qt.transition, r = je;
  try {
    if (Qt.transition = null, je = 1, e) return e();
  } finally {
    je = r, Qt.transition = n, Te = t, !(Te & 6) && dr();
  }
}
function nc() {
  It = ii.current, ze(ii);
}
function _r(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Lg(n)), ot !== null) for (n = ot.return; n !== null; ) {
    var r = n;
    switch (Bu(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Io();
        break;
      case 3:
        vi(), ze(At), ze(kt), $u();
        break;
      case 5:
        Hu(r);
        break;
      case 4:
        vi();
        break;
      case 13:
        ze(Qe);
        break;
      case 19:
        ze(Qe);
        break;
      case 10:
        Uu(r.type._context);
        break;
      case 22:
      case 23:
        nc();
    }
    n = n.return;
  }
  if (dt = e, ot = e = rr(e.current, null), pt = It = t, lt = 0, Ea = null, Ju = vs = Pr = 0, Nt = oa = null, wr !== null) {
    for (t = 0; t < wr.length; t++) if (n = wr[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var i = r.next, a = n.pending;
      if (a !== null) {
        var o = a.next;
        a.next = i, r.next = o;
      }
      n.pending = r;
    }
    wr = null;
  }
  return e;
}
function Fp(e, t) {
  do {
    var n = ot;
    try {
      if (Fu(), go.current = Wo, Vo) {
        for (var r = Ke.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), r = r.next;
        }
        Vo = false;
      }
      if (br = 0, ut = st = Ke = null, ia = false, ka = 0, qu.current = null, n === null || n.return === null) {
        lt = 1, Ea = t, ot = null;
        break;
      }
      e: {
        var a = e, o = n.return, s = n, l = t;
        if (t = pt, s.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var c = l, f = s, h = f.tag;
          if (!(f.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var g = f.alternate;
            g ? (f.updateQueue = g.updateQueue, f.memoizedState = g.memoizedState, f.lanes = g.lanes) : (f.updateQueue = null, f.memoizedState = null);
          }
          var w = gd(o);
          if (w !== null) {
            w.flags &= -257, yd(w, o, s, a, t), w.mode & 1 && vd(a, c, t), t = w, l = c;
            var E = t.updateQueue;
            if (E === null) {
              var b = /* @__PURE__ */ new Set();
              b.add(l), t.updateQueue = b;
            } else E.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              vd(a, c, t), rc();
              break e;
            }
            l = Error(W(426));
          }
        } else if ($e && s.mode & 1) {
          var I = gd(o);
          if (I !== null) {
            !(I.flags & 65536) && (I.flags |= 256), yd(I, o, s, a, t), Mu(gi(l, s));
            break e;
          }
        }
        a = l = gi(l, s), lt !== 4 && (lt = 2), oa === null ? oa = [a] : oa.push(a), a = o;
        do {
          switch (a.tag) {
            case 3:
              a.flags |= 65536, t &= -t, a.lanes |= t;
              var x = Sp(a, l, t);
              cd(a, x);
              break e;
            case 1:
              s = l;
              var v = a.type, S = a.stateNode;
              if (!(a.flags & 128) && (typeof v.getDerivedStateFromError == "function" || S !== null && typeof S.componentDidCatch == "function" && (tr === null || !tr.has(S)))) {
                a.flags |= 65536, t &= -t, a.lanes |= t;
                var A = _p(a, s, t);
                cd(a, A);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      Vp(n);
    } catch (M) {
      t = M, ot === n && n !== null && (ot = n = n.return);
      continue;
    }
    break;
  } while (true);
}
function Up() {
  var e = Ho.current;
  return Ho.current = Wo, e === null ? Wo : e;
}
function rc() {
  (lt === 0 || lt === 3 || lt === 2) && (lt = 4), dt === null || !(Pr & 268435455) && !(vs & 268435455) || Hn(dt, pt);
}
function Go(e, t) {
  var n = Te;
  Te |= 2;
  var r = Up();
  (dt !== e || pt !== t) && (wn = null, _r(e, t));
  do
    try {
      oy();
      break;
    } catch (i) {
      Fp(e, i);
    }
  while (true);
  if (Fu(), Te = n, Ho.current = r, ot !== null) throw Error(W(261));
  return dt = null, pt = 0, lt;
}
function oy() {
  for (; ot !== null; ) zp(ot);
}
function sy() {
  for (; ot !== null && !Dv(); ) zp(ot);
}
function zp(e) {
  var t = Hp(e.alternate, e, It);
  e.memoizedProps = e.pendingProps, t === null ? Vp(e) : ot = t, qu.current = null;
}
function Vp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = ey(n, t), n !== null) {
        n.flags &= 32767, ot = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        lt = 6, ot = null;
        return;
      }
    } else if (n = Jg(n, t, It), n !== null) {
      ot = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ot = t;
      return;
    }
    ot = t = e;
  } while (t !== null);
  lt === 0 && (lt = 5);
}
function vr(e, t, n) {
  var r = je, i = Qt.transition;
  try {
    Qt.transition = null, je = 1, ly(e, t, n, r);
  } finally {
    Qt.transition = i, je = r;
  }
  return null;
}
function ly(e, t, n, r) {
  do
    ci();
  while (Zn !== null);
  if (Te & 6) throw Error(W(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(W(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var a = n.lanes | n.childLanes;
  if (Vv(e, a), e === dt && (ot = dt = null, pt = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ao || (ao = true, $p(Po, function() {
    return ci(), null;
  })), a = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || a) {
    a = Qt.transition, Qt.transition = null;
    var o = je;
    je = 1;
    var s = Te;
    Te |= 4, qu.current = null, ny(e, n), Bp(n, e), Pg(jl), Ro = !!Dl, jl = Dl = null, e.current = n, ry(n), jv(), Te = s, je = o, Qt.transition = a;
  } else e.current = n;
  if (ao && (ao = false, Zn = e, Zo = i), a = e.pendingLanes, a === 0 && (tr = null), Bv(n.stateNode), jt(e, nt()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
  if ($o) throw $o = false, e = Jl, Jl = null, e;
  return Zo & 1 && e.tag !== 0 && ci(), a = e.pendingLanes, a & 1 ? e === eu ? sa++ : (sa = 0, eu = e) : sa = 0, dr(), null;
}
function ci() {
  if (Zn !== null) {
    var e = Sh(Zo), t = Qt.transition, n = je;
    try {
      if (Qt.transition = null, je = 16 > e ? 16 : e, Zn === null) var r = false;
      else {
        if (e = Zn, Zn = null, Zo = 0, Te & 6) throw Error(W(331));
        var i = Te;
        for (Te |= 4, Y = e.current; Y !== null; ) {
          var a = Y, o = a.child;
          if (Y.flags & 16) {
            var s = a.deletions;
            if (s !== null) {
              for (var l = 0; l < s.length; l++) {
                var c = s[l];
                for (Y = c; Y !== null; ) {
                  var f = Y;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      aa(8, f, a);
                  }
                  var h = f.child;
                  if (h !== null) h.return = f, Y = h;
                  else for (; Y !== null; ) {
                    f = Y;
                    var g = f.sibling, w = f.return;
                    if (jp(f), f === c) {
                      Y = null;
                      break;
                    }
                    if (g !== null) {
                      g.return = w, Y = g;
                      break;
                    }
                    Y = w;
                  }
                }
              }
              var E = a.alternate;
              if (E !== null) {
                var b = E.child;
                if (b !== null) {
                  E.child = null;
                  do {
                    var I = b.sibling;
                    b.sibling = null, b = I;
                  } while (b !== null);
                }
              }
              Y = a;
            }
          }
          if (a.subtreeFlags & 2064 && o !== null) o.return = a, Y = o;
          else e: for (; Y !== null; ) {
            if (a = Y, a.flags & 2048) switch (a.tag) {
              case 0:
              case 11:
              case 15:
                aa(9, a, a.return);
            }
            var x = a.sibling;
            if (x !== null) {
              x.return = a.return, Y = x;
              break e;
            }
            Y = a.return;
          }
        }
        var v = e.current;
        for (Y = v; Y !== null; ) {
          o = Y;
          var S = o.child;
          if (o.subtreeFlags & 2064 && S !== null) S.return = o, Y = S;
          else e: for (o = v; Y !== null; ) {
            if (s = Y, s.flags & 2048) try {
              switch (s.tag) {
                case 0:
                case 11:
                case 15:
                  ms(9, s);
              }
            } catch (M) {
              et(s, s.return, M);
            }
            if (s === o) {
              Y = null;
              break e;
            }
            var A = s.sibling;
            if (A !== null) {
              A.return = s.return, Y = A;
              break e;
            }
            Y = s.return;
          }
        }
        if (Te = i, dr(), mn && typeof mn.onPostCommitFiberRoot == "function") try {
          mn.onPostCommitFiberRoot(ss, e);
        } catch {
        }
        r = true;
      }
      return r;
    } finally {
      je = n, Qt.transition = t;
    }
  }
  return false;
}
function Ad(e, t, n) {
  t = gi(n, t), t = Sp(e, t, 1), e = er(e, t, 1), t = _t(), e !== null && (Aa(e, 1, t), jt(e, t));
}
function et(e, t, n) {
  if (e.tag === 3) Ad(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Ad(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (tr === null || !tr.has(r))) {
        e = gi(n, e), e = _p(t, e, 1), t = er(t, e, 1), e = _t(), t !== null && (Aa(t, 1, e), jt(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function uy(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = _t(), e.pingedLanes |= e.suspendedLanes & n, dt === e && (pt & n) === n && (lt === 4 || lt === 3 && (pt & 130023424) === pt && 500 > nt() - ec ? _r(e, 0) : Ju |= n), jt(e, t);
}
function Wp(e, t) {
  t === 0 && (e.mode & 1 ? (t = Ka, Ka <<= 1, !(Ka & 130023424) && (Ka = 4194304)) : t = 1);
  var n = _t();
  e = Nn(e, t), e !== null && (Aa(e, t, n), jt(e, n));
}
function cy(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Wp(e, n);
}
function dy(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(W(314));
  }
  r !== null && r.delete(t), Wp(e, n);
}
var Hp;
Hp = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || At.current) Rt = true;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Rt = false, qg(e, t, n);
    Rt = !!(e.flags & 131072);
  }
  else Rt = false, $e && t.flags & 1048576 && Qh(t, Mo, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      xo(e, t), e = t.pendingProps;
      var i = hi(t, kt.current);
      ui(t, n), i = Gu(null, t, r, e, i, n);
      var a = Qu();
      return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Dt(r) ? (a = true, Lo(t)) : a = false, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Vu(t), i.updater = ps, t.stateNode = i, i._reactInternals = t, Vl(t, r, e, n), t = $l(null, t, r, true, a, n)) : (t.tag = 0, $e && a && Lu(t), St(null, t, i, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (xo(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = hy(r), e = en(r, e), i) {
          case 0:
            t = Hl(null, t, r, e, n);
            break e;
          case 1:
            t = kd(null, t, r, e, n);
            break e;
          case 11:
            t = xd(null, t, r, e, n);
            break e;
          case 14:
            t = wd(null, t, r, en(r.type, e), n);
            break e;
        }
        throw Error(W(306, r, ""));
      }
      return t;
    case 0:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : en(r, i), Hl(e, t, r, i, n);
    case 1:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : en(r, i), kd(e, t, r, i, n);
    case 3:
      e: {
        if (bp(t), e === null) throw Error(W(387));
        r = t.pendingProps, a = t.memoizedState, i = a.element, ep(e, t), Uo(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, a.isDehydrated) if (a = { element: r, isDehydrated: false, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
          i = gi(Error(W(423)), t), t = Sd(e, t, r, n, i);
          break e;
        } else if (r !== i) {
          i = gi(Error(W(424)), t), t = Sd(e, t, r, n, i);
          break e;
        } else for (Bt = Jn(t.stateNode.containerInfo.firstChild), Mt = t, $e = true, rn = null, n = qh(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (pi(), r === i) {
            t = Rn(e, t, n);
            break e;
          }
          St(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return tp(t), e === null && Fl(t), r = t.type, i = t.pendingProps, a = e !== null ? e.memoizedProps : null, o = i.children, Il(r, i) ? o = null : a !== null && Il(r, a) && (t.flags |= 32), Tp(e, t), St(e, t, o, n), t.child;
    case 6:
      return e === null && Fl(t), null;
    case 13:
      return Pp(e, t, n);
    case 4:
      return Wu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = mi(t, null, r, n) : St(e, t, r, n), t.child;
    case 11:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : en(r, i), xd(e, t, r, i, n);
    case 7:
      return St(e, t, t.pendingProps, n), t.child;
    case 8:
      return St(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return St(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, i = t.pendingProps, a = t.memoizedProps, o = i.value, Me(Oo, r._currentValue), r._currentValue = o, a !== null) if (sn(a.value, o)) {
          if (a.children === i.children && !At.current) {
            t = Rn(e, t, n);
            break e;
          }
        } else for (a = t.child, a !== null && (a.return = t); a !== null; ) {
          var s = a.dependencies;
          if (s !== null) {
            o = a.child;
            for (var l = s.firstContext; l !== null; ) {
              if (l.context === r) {
                if (a.tag === 1) {
                  l = Cn(-1, n & -n), l.tag = 2;
                  var c = a.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var f = c.pending;
                    f === null ? l.next = l : (l.next = f.next, f.next = l), c.pending = l;
                  }
                }
                a.lanes |= n, l = a.alternate, l !== null && (l.lanes |= n), Ul(a.return, n, t), s.lanes |= n;
                break;
              }
              l = l.next;
            }
          } else if (a.tag === 10) o = a.type === t.type ? null : a.child;
          else if (a.tag === 18) {
            if (o = a.return, o === null) throw Error(W(341));
            o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), Ul(o, n, t), o = a.sibling;
          } else o = a.child;
          if (o !== null) o.return = a;
          else for (o = a; o !== null; ) {
            if (o === t) {
              o = null;
              break;
            }
            if (a = o.sibling, a !== null) {
              a.return = o.return, o = a;
              break;
            }
            o = o.return;
          }
          a = o;
        }
        St(e, t, i.children, n), t = t.child;
      }
      return t;
    case 9:
      return i = t.type, r = t.pendingProps.children, ui(t, n), i = Kt(i), r = r(i), t.flags |= 1, St(e, t, r, n), t.child;
    case 14:
      return r = t.type, i = en(r, t.pendingProps), i = en(r.type, i), wd(e, t, r, i, n);
    case 15:
      return Ep(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : en(r, i), xo(e, t), t.tag = 1, Dt(r) ? (e = true, Lo(t)) : e = false, ui(t, n), kp(t, r, i), Vl(t, r, i, n), $l(null, t, r, true, e, n);
    case 19:
      return Np(e, t, n);
    case 22:
      return Cp(e, t, n);
  }
  throw Error(W(156, t.tag));
};
function $p(e, t) {
  return yh(e, t);
}
function fy(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Gt(e, t, n, r) {
  return new fy(e, t, n, r);
}
function ic(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function hy(e) {
  if (typeof e == "function") return ic(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === _u) return 11;
    if (e === Eu) return 14;
  }
  return 2;
}
function rr(e, t) {
  var n = e.alternate;
  return n === null ? (n = Gt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function So(e, t, n, r, i, a) {
  var o = 2;
  if (r = e, typeof e == "function") ic(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case Qr:
      return Er(n.children, i, a, t);
    case Su:
      o = 8, i |= 8;
      break;
    case fl:
      return e = Gt(12, n, t, i | 2), e.elementType = fl, e.lanes = a, e;
    case hl:
      return e = Gt(13, n, t, i), e.elementType = hl, e.lanes = a, e;
    case pl:
      return e = Gt(19, n, t, i), e.elementType = pl, e.lanes = a, e;
    case th:
      return gs(n, i, a, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Jf:
          o = 10;
          break e;
        case eh:
          o = 9;
          break e;
        case _u:
          o = 11;
          break e;
        case Eu:
          o = 14;
          break e;
        case Un:
          o = 16, r = null;
          break e;
      }
      throw Error(W(130, e == null ? e : typeof e, ""));
  }
  return t = Gt(o, n, t, i), t.elementType = e, t.type = r, t.lanes = a, t;
}
function Er(e, t, n, r) {
  return e = Gt(7, e, r, t), e.lanes = n, e;
}
function gs(e, t, n, r) {
  return e = Gt(22, e, r, t), e.elementType = th, e.lanes = n, e.stateNode = { isHidden: false }, e;
}
function tl(e, t, n) {
  return e = Gt(6, e, null, t), e.lanes = n, e;
}
function nl(e, t, n) {
  return t = Gt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function py(e, t, n, r, i) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Bs(0), this.expirationTimes = Bs(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Bs(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function ac(e, t, n, r, i, a, o, s, l) {
  return e = new py(e, t, n, s, l), t === 1 ? (t = 1, a === true && (t |= 8)) : t = 0, a = Gt(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Vu(a), e;
}
function my(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Gr, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Zp(e) {
  if (!e) return or;
  e = e._reactInternals;
  e: {
    if (Lr(e) !== e || e.tag !== 1) throw Error(W(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Dt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(W(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Dt(n)) return Zh(e, n, t);
  }
  return t;
}
function Gp(e, t, n, r, i, a, o, s, l) {
  return e = ac(n, r, true, e, i, a, o, s, l), e.context = Zp(null), n = e.current, r = _t(), i = nr(n), a = Cn(r, i), a.callback = t ?? null, er(n, a, i), e.current.lanes = i, Aa(e, i, r), jt(e, r), e;
}
function ys(e, t, n, r) {
  var i = t.current, a = _t(), o = nr(i);
  return n = Zp(n), t.context === null ? t.context = n : t.pendingContext = n, t = Cn(a, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = er(i, t, o), e !== null && (on(e, i, o, a), vo(e, i, o)), o;
}
function Qo(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Dd(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function oc(e, t) {
  Dd(e, t), (e = e.alternate) && Dd(e, t);
}
function vy() {
  return null;
}
var Qp = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function sc(e) {
  this._internalRoot = e;
}
xs.prototype.render = sc.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(W(409));
  ys(e, t, null, null);
};
xs.prototype.unmount = sc.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Nr(function() {
      ys(null, e, null, null);
    }), t[Pn] = null;
  }
};
function xs(e) {
  this._internalRoot = e;
}
xs.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Ch();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Wn.length && t !== 0 && t < Wn[n].priority; n++) ;
    Wn.splice(n, 0, e), n === 0 && bh(e);
  }
};
function lc(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function ws(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function jd() {
}
function gy(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var a = r;
      r = function() {
        var c = Qo(o);
        a.call(c);
      };
    }
    var o = Gp(t, r, e, 0, null, false, false, "", jd);
    return e._reactRootContainer = o, e[Pn] = o.current, va(e.nodeType === 8 ? e.parentNode : e), Nr(), o;
  }
  for (; i = e.lastChild; ) e.removeChild(i);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var c = Qo(l);
      s.call(c);
    };
  }
  var l = ac(e, 0, false, null, null, false, false, "", jd);
  return e._reactRootContainer = l, e[Pn] = l.current, va(e.nodeType === 8 ? e.parentNode : e), Nr(function() {
    ys(t, l, n, r);
  }), l;
}
function ks(e, t, n, r, i) {
  var a = n._reactRootContainer;
  if (a) {
    var o = a;
    if (typeof i == "function") {
      var s = i;
      i = function() {
        var l = Qo(o);
        s.call(l);
      };
    }
    ys(t, o, e, i);
  } else o = gy(n, t, e, i, r);
  return Qo(o);
}
_h = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ki(t.pendingLanes);
        n !== 0 && (bu(t, n | 1), jt(t, nt()), !(Te & 6) && (yi = nt() + 500, dr()));
      }
      break;
    case 13:
      Nr(function() {
        var r = Nn(e, 1);
        if (r !== null) {
          var i = _t();
          on(r, e, 1, i);
        }
      }), oc(e, 1);
  }
};
Pu = function(e) {
  if (e.tag === 13) {
    var t = Nn(e, 134217728);
    if (t !== null) {
      var n = _t();
      on(t, e, 134217728, n);
    }
    oc(e, 134217728);
  }
};
Eh = function(e) {
  if (e.tag === 13) {
    var t = nr(e), n = Nn(e, t);
    if (n !== null) {
      var r = _t();
      on(n, e, t, r);
    }
    oc(e, t);
  }
};
Ch = function() {
  return je;
};
Th = function(e, t) {
  var n = je;
  try {
    return je = e, t();
  } finally {
    je = n;
  }
};
El = function(e, t, n) {
  switch (t) {
    case "input":
      if (gl(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = ds(r);
            if (!i) throw Error(W(90));
            rh(r), gl(r, i);
          }
        }
      }
      break;
    case "textarea":
      ah(e, n);
      break;
    case "select":
      t = n.value, t != null && ai(e, !!n.multiple, t, false);
  }
};
fh = tc;
hh = Nr;
var yy = { usingClientEntryPoint: false, Events: [ja, qr, ds, ch, dh, tc] }, zi = { findFiberByHostInstance: xr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, xy = { bundleType: zi.bundleType, version: zi.version, rendererPackageName: zi.rendererPackageName, rendererConfig: zi.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: jn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = vh(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: zi.findFiberByHostInstance || vy, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var oo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!oo.isDisabled && oo.supportsFiber) try {
    ss = oo.inject(xy), mn = oo;
  } catch {
  }
}
Ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yy;
Ut.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!lc(t)) throw Error(W(200));
  return my(e, t, null, n);
};
Ut.createRoot = function(e, t) {
  if (!lc(e)) throw Error(W(299));
  var n = false, r = "", i = Qp;
  return t != null && (t.unstable_strictMode === true && (n = true), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = ac(e, 1, false, null, null, n, false, r, i), e[Pn] = t.current, va(e.nodeType === 8 ? e.parentNode : e), new sc(t);
};
Ut.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0) throw typeof e.render == "function" ? Error(W(188)) : (e = Object.keys(e).join(","), Error(W(268, e)));
  return e = vh(t), e = e === null ? null : e.stateNode, e;
};
Ut.flushSync = function(e) {
  return Nr(e);
};
Ut.hydrate = function(e, t, n) {
  if (!ws(t)) throw Error(W(200));
  return ks(null, e, t, true, n);
};
Ut.hydrateRoot = function(e, t, n) {
  if (!lc(e)) throw Error(W(405));
  var r = n != null && n.hydratedSources || null, i = false, a = "", o = Qp;
  if (n != null && (n.unstable_strictMode === true && (i = true), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = Gp(t, null, e, 1, n ?? null, i, false, a, o), e[Pn] = t.current, va(e), r) for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
  return new xs(t);
};
Ut.render = function(e, t, n) {
  if (!ws(t)) throw Error(W(200));
  return ks(null, e, t, false, n);
};
Ut.unmountComponentAtNode = function(e) {
  if (!ws(e)) throw Error(W(40));
  return e._reactRootContainer ? (Nr(function() {
    ks(null, null, e, false, function() {
      e._reactRootContainer = null, e[Pn] = null;
    });
  }), true) : false;
};
Ut.unstable_batchedUpdates = tc;
Ut.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!ws(n)) throw Error(W(200));
  if (e == null || e._reactInternals === void 0) throw Error(W(38));
  return ks(e, t, n, false, r);
};
Ut.version = "18.3.1-next-f1338f8080-20240426";
function Kp() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kp);
  } catch (e) {
    console.error(e);
  }
}
Kp(), Kf.exports = Ut;
var uc = Kf.exports;
const wy = pu(uc), ky = Mf({ __proto__: null, default: wy }, [uc]);
var Id = uc;
cl.createRoot = Id.createRoot, cl.hydrateRoot = Id.hydrateRoot;
/**
* @remix-run/router v1.23.2
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
function He() {
  return He = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, He.apply(this, arguments);
}
var it;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(it || (it = {}));
const Ld = "popstate";
function Sy(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: a, search: o, hash: s } = r.location;
    return Ca("", { pathname: a, search: o, hash: s }, i.state && i.state.usr || null, i.state && i.state.key || "default");
  }
  function n(r, i) {
    return typeof i == "string" ? i : Ar(i);
  }
  return Ey(t, n, null, e);
}
function xe(e, t) {
  if (e === false || e === null || typeof e > "u") throw new Error(t);
}
function Rr(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function _y() {
  return Math.random().toString(36).substr(2, 8);
}
function Bd(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Ca(e, t, n, r) {
  return n === void 0 && (n = null), He({ pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" }, typeof t == "string" ? fr(t) : t, { state: n, key: t && t.key || r || _y() });
}
function Ar(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t;
}
function fr(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
    let r = e.indexOf("?");
    r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e);
  }
  return t;
}
function Ey(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: a = false } = r, o = i.history, s = it.Pop, l = null, c = f();
  c == null && (c = 0, o.replaceState(He({}, o.state, { idx: c }), ""));
  function f() {
    return (o.state || { idx: null }).idx;
  }
  function h() {
    s = it.Pop;
    let I = f(), x = I == null ? null : I - c;
    c = I, l && l({ action: s, location: b.location, delta: x });
  }
  function g(I, x) {
    s = it.Push;
    let v = Ca(b.location, I, x);
    c = f() + 1;
    let S = Bd(v, c), A = b.createHref(v);
    try {
      o.pushState(S, "", A);
    } catch (M) {
      if (M instanceof DOMException && M.name === "DataCloneError") throw M;
      i.location.assign(A);
    }
    a && l && l({ action: s, location: b.location, delta: 1 });
  }
  function w(I, x) {
    s = it.Replace;
    let v = Ca(b.location, I, x);
    c = f();
    let S = Bd(v, c), A = b.createHref(v);
    o.replaceState(S, "", A), a && l && l({ action: s, location: b.location, delta: 0 });
  }
  function E(I) {
    let x = i.location.origin !== "null" ? i.location.origin : i.location.href, v = typeof I == "string" ? I : Ar(I);
    return v = v.replace(/ $/, "%20"), xe(x, "No window.location.(origin|href) available to create URL for href: " + v), new URL(v, x);
  }
  let b = { get action() {
    return s;
  }, get location() {
    return e(i, o);
  }, listen(I) {
    if (l) throw new Error("A history only accepts one active listener");
    return i.addEventListener(Ld, h), l = I, () => {
      i.removeEventListener(Ld, h), l = null;
    };
  }, createHref(I) {
    return t(i, I);
  }, createURL: E, encodeLocation(I) {
    let x = E(I);
    return { pathname: x.pathname, search: x.search, hash: x.hash };
  }, push: g, replace: w, go(I) {
    return o.go(I);
  } };
  return b;
}
var De;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(De || (De = {}));
const Cy = /* @__PURE__ */ new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function Ty(e) {
  return e.index === true;
}
function Ko(e, t, n, r) {
  return n === void 0 && (n = []), r === void 0 && (r = {}), e.map((i, a) => {
    let o = [...n, String(a)], s = typeof i.id == "string" ? i.id : o.join("-");
    if (xe(i.index !== true || !i.children, "Cannot specify children on an index route"), xe(!r[s], 'Found a route id collision on id "' + s + `".  Route id's must be globally unique within Data Router usages`), Ty(i)) {
      let l = He({}, i, t(i), { id: s });
      return r[s] = l, l;
    } else {
      let l = He({}, i, t(i), { id: s, children: void 0 });
      return r[s] = l, i.children && (l.children = Ko(i.children, t, o, r)), l;
    }
  });
}
function gr(e, t, n) {
  return n === void 0 && (n = "/"), _o(e, t, n, false);
}
function _o(e, t, n, r) {
  let i = typeof t == "string" ? fr(t) : t, a = An(i.pathname || "/", n);
  if (a == null) return null;
  let o = Yp(e);
  Py(o);
  let s = null;
  for (let l = 0; s == null && l < o.length; ++l) {
    let c = Fy(a);
    s = My(o[l], c, r);
  }
  return s;
}
function by(e, t) {
  let { route: n, pathname: r, params: i } = e;
  return { id: n.id, pathname: r, params: i, data: t[n.id], handle: n.handle };
}
function Yp(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (a, o, s) => {
    let l = { relativePath: s === void 0 ? a.path || "" : s, caseSensitive: a.caseSensitive === true, childrenIndex: o, route: a };
    l.relativePath.startsWith("/") && (xe(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), l.relativePath = l.relativePath.slice(r.length));
    let c = Tn([r, l.relativePath]), f = n.concat(l);
    a.children && a.children.length > 0 && (xe(a.index !== true, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + c + '".')), Yp(a.children, t, f, c)), !(a.path == null && !a.index) && t.push({ path: c, score: Ly(c, a.index), routesMeta: f });
  };
  return e.forEach((a, o) => {
    var s;
    if (a.path === "" || !((s = a.path) != null && s.includes("?"))) i(a, o);
    else for (let l of Xp(a.path)) i(a, o, l);
  }), t;
}
function Xp(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t, i = n.endsWith("?"), a = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [a, ""] : [a];
  let o = Xp(r.join("/")), s = [];
  return s.push(...o.map((l) => l === "" ? a : [a, l].join("/"))), i && s.push(...o), s.map((l) => e.startsWith("/") && l === "" ? "/" : l);
}
function Py(e) {
  e.sort((t, n) => t.score !== n.score ? n.score - t.score : By(t.routesMeta.map((r) => r.childrenIndex), n.routesMeta.map((r) => r.childrenIndex)));
}
const Ny = /^:[\w-]+$/, Ry = 3, Ay = 2, Dy = 1, jy = 10, Iy = -2, Md = (e) => e === "*";
function Ly(e, t) {
  let n = e.split("/"), r = n.length;
  return n.some(Md) && (r += Iy), t && (r += Ay), n.filter((i) => !Md(i)).reduce((i, a) => i + (Ny.test(a) ? Ry : a === "" ? Dy : jy), r);
}
function By(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function My(e, t, n) {
  n === void 0 && (n = false);
  let { routesMeta: r } = e, i = {}, a = "/", o = [];
  for (let s = 0; s < r.length; ++s) {
    let l = r[s], c = s === r.length - 1, f = a === "/" ? t : t.slice(a.length) || "/", h = Yo({ path: l.relativePath, caseSensitive: l.caseSensitive, end: c }, f), g = l.route;
    if (!h && c && n && !r[r.length - 1].route.index && (h = Yo({ path: l.relativePath, caseSensitive: l.caseSensitive, end: false }, f)), !h) return null;
    Object.assign(i, h.params), o.push({ params: i, pathname: Tn([a, h.pathname]), pathnameBase: Wy(Tn([a, h.pathnameBase])), route: g }), h.pathnameBase !== "/" && (a = Tn([a, h.pathnameBase]));
  }
  return o;
}
function Yo(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: false, end: true });
  let [n, r] = Oy(e.path, e.caseSensitive, e.end), i = t.match(n);
  if (!i) return null;
  let a = i[0], o = a.replace(/(.)\/+$/, "$1"), s = i.slice(1);
  return { params: r.reduce((c, f, h) => {
    let { paramName: g, isOptional: w } = f;
    if (g === "*") {
      let b = s[h] || "";
      o = a.slice(0, a.length - b.length).replace(/(.)\/+$/, "$1");
    }
    const E = s[h];
    return w && !E ? c[g] = void 0 : c[g] = (E || "").replace(/%2F/g, "/"), c;
  }, {}), pathname: a, pathnameBase: o, pattern: e };
}
function Oy(e, t, n) {
  t === void 0 && (t = false), n === void 0 && (n = true), Rr(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
  let r = [], i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (o, s, l) => (r.push({ paramName: s, isOptional: l != null }), l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return e.endsWith("*") ? (r.push({ paramName: "*" }), i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, t ? void 0 : "i"), r];
}
function Fy(e) {
  try {
    return e.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
  } catch (t) {
    return Rr(false, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e;
  }
}
function An(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
const Uy = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, zy = (e) => Uy.test(e);
function Vy(e, t) {
  t === void 0 && (t = "/");
  let { pathname: n, search: r = "", hash: i = "" } = typeof e == "string" ? fr(e) : e, a;
  if (n) if (zy(n)) a = n;
  else {
    if (n.includes("//")) {
      let o = n;
      n = n.replace(/\/\/+/g, "/"), Rr(false, "Pathnames cannot have embedded double slashes - normalizing " + (o + " -> " + n));
    }
    n.startsWith("/") ? a = Od(n.substring(1), "/") : a = Od(n, t);
  }
  else a = t;
  return { pathname: a, search: Hy(r), hash: $y(i) };
}
function Od(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((i) => {
    i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
  }), n.length > 1 ? n.join("/") : "/";
}
function rl(e, t, n, r) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function qp(e) {
  return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0);
}
function Ss(e, t) {
  let n = qp(e);
  return t ? n.map((r, i) => i === n.length - 1 ? r.pathname : r.pathnameBase) : n.map((r) => r.pathnameBase);
}
function _s(e, t, n, r) {
  r === void 0 && (r = false);
  let i;
  typeof e == "string" ? i = fr(e) : (i = He({}, e), xe(!i.pathname || !i.pathname.includes("?"), rl("?", "pathname", "search", i)), xe(!i.pathname || !i.pathname.includes("#"), rl("#", "pathname", "hash", i)), xe(!i.search || !i.search.includes("#"), rl("#", "search", "hash", i)));
  let a = e === "" || i.pathname === "", o = a ? "/" : i.pathname, s;
  if (o == null) s = n;
  else {
    let h = t.length - 1;
    if (!r && o.startsWith("..")) {
      let g = o.split("/");
      for (; g[0] === ".."; ) g.shift(), h -= 1;
      i.pathname = g.join("/");
    }
    s = h >= 0 ? t[h] : "/";
  }
  let l = Vy(i, s), c = o && o !== "/" && o.endsWith("/"), f = (a || o === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (c || f) && (l.pathname += "/"), l;
}
const Tn = (e) => e.join("/").replace(/\/\/+/g, "/"), Wy = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), Hy = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, $y = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
class Xo {
  constructor(t, n, r, i) {
    i === void 0 && (i = false), this.status = t, this.statusText = n || "", this.internal = i, r instanceof Error ? (this.data = r.toString(), this.error = r) : this.data = r;
  }
}
function Ta(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
const Jp = ["post", "put", "patch", "delete"], Zy = new Set(Jp), Gy = ["get", ...Jp], Qy = new Set(Gy), Ky = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]), Yy = /* @__PURE__ */ new Set([307, 308]), il = { state: "idle", location: void 0, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0 }, Xy = { state: "idle", data: void 0, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0 }, Vi = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 }, cc = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, qy = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }), em = "remix-router-transitions";
function Jy(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0, n = typeof t < "u" && typeof t.document < "u" && typeof t.document.createElement < "u", r = !n;
  xe(e.routes.length > 0, "You must provide a non-empty routes array to createRouter");
  let i;
  if (e.mapRouteProperties) i = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let C = e.detectErrorBoundary;
    i = (N) => ({ hasErrorBoundary: C(N) });
  } else i = qy;
  let a = {}, o = Ko(e.routes, i, void 0, a), s, l = e.basename || "/", c = e.dataStrategy || r0, f = e.patchRoutesOnNavigation, h = He({ v7_fetcherPersist: false, v7_normalizeFormMethod: false, v7_partialHydration: false, v7_prependBasename: false, v7_relativeSplatPath: false, v7_skipActionErrorRevalidation: false }, e.future), g = null, w = /* @__PURE__ */ new Set(), E = null, b = null, I = null, x = e.hydrationData != null, v = gr(o, e.history.location, l), S = false, A = null;
  if (v == null && !f) {
    let C = Pt(404, { pathname: e.history.location.pathname }), { matches: N, route: j } = Kd(o);
    v = N, A = { [j.id]: C };
  }
  v && !e.hydrationData && Ua(v, o, e.history.location.pathname).active && (v = null);
  let M;
  if (v) if (v.some((C) => C.route.lazy)) M = false;
  else if (!v.some((C) => C.route.loader)) M = true;
  else if (h.v7_partialHydration) {
    let C = e.hydrationData ? e.hydrationData.loaderData : null, N = e.hydrationData ? e.hydrationData.errors : null;
    if (N) {
      let j = v.findIndex((U) => N[U.route.id] !== void 0);
      M = v.slice(0, j + 1).every((U) => !iu(U.route, C, N));
    } else M = v.every((j) => !iu(j.route, C, N));
  } else M = e.hydrationData != null;
  else if (M = false, v = [], h.v7_partialHydration) {
    let C = Ua(null, o, e.history.location.pathname);
    C.active && C.matches && (S = true, v = C.matches);
  }
  let z, _ = { historyAction: e.history.action, location: e.history.location, matches: v, initialized: M, navigation: il, restoreScrollPosition: e.hydrationData != null ? false : null, preventScrollReset: false, revalidation: "idle", loaderData: e.hydrationData && e.hydrationData.loaderData || {}, actionData: e.hydrationData && e.hydrationData.actionData || null, errors: e.hydrationData && e.hydrationData.errors || A, fetchers: /* @__PURE__ */ new Map(), blockers: /* @__PURE__ */ new Map() }, R = it.Pop, V = false, T, L = false, O = /* @__PURE__ */ new Map(), $ = null, X = false, de = false, Se = [], Z = /* @__PURE__ */ new Set(), F = /* @__PURE__ */ new Map(), J = 0, oe = -1, ne = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Set(), Ze = /* @__PURE__ */ new Map(), me = /* @__PURE__ */ new Map(), Ce = /* @__PURE__ */ new Set(), Oe = /* @__PURE__ */ new Map(), Ve = /* @__PURE__ */ new Map(), Xe;
  function fe() {
    if (g = e.history.listen((C) => {
      let { action: N, location: j, delta: U } = C;
      if (Xe) {
        Xe(), Xe = void 0;
        return;
      }
      Rr(Ve.size === 0 || U != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
      let G = Sc({ currentLocation: _.location, nextLocation: j, historyAction: N });
      if (G && U != null) {
        let le = new Promise((ce) => {
          Xe = ce;
        });
        e.history.go(U * -1), Fa(G, { state: "blocked", location: j, proceed() {
          Fa(G, { state: "proceeding", proceed: void 0, reset: void 0, location: j }), le.then(() => e.history.go(U));
        }, reset() {
          let ce = new Map(_.blockers);
          ce.set(G, Vi), se({ blockers: ce });
        } });
        return;
      }
      return Ge(N, j);
    }), n) {
      g0(t, O);
      let C = () => y0(t, O);
      t.addEventListener("pagehide", C), $ = () => t.removeEventListener("pagehide", C);
    }
    return _.initialized || Ge(it.Pop, _.location, { initialHydration: true }), z;
  }
  function ue() {
    g && g(), $ && $(), w.clear(), T && T.abort(), _.fetchers.forEach((C, N) => P(N)), _.blockers.forEach((C, N) => Ae(N));
  }
  function ve(C) {
    return w.add(C), () => w.delete(C);
  }
  function se(C, N) {
    N === void 0 && (N = {}), _ = He({}, _, C);
    let j = [], U = [];
    h.v7_fetcherPersist && _.fetchers.forEach((G, le) => {
      G.state === "idle" && (Ce.has(le) ? U.push(le) : j.push(le));
    }), Ce.forEach((G) => {
      !_.fetchers.has(G) && !F.has(G) && U.push(G);
    }), [...w].forEach((G) => G(_, { deletedFetchers: U, viewTransitionOpts: N.viewTransitionOpts, flushSync: N.flushSync === true })), h.v7_fetcherPersist ? (j.forEach((G) => _.fetchers.delete(G)), U.forEach((G) => P(G))) : U.forEach((G) => Ce.delete(G));
  }
  function _e(C, N, j) {
    var U, G;
    let { flushSync: le } = j === void 0 ? {} : j, ce = _.actionData != null && _.navigation.formMethod != null && nn(_.navigation.formMethod) && _.navigation.state === "loading" && ((U = C.state) == null ? void 0 : U._isRedirect) !== true, ee;
    N.actionData ? Object.keys(N.actionData).length > 0 ? ee = N.actionData : ee = null : ce ? ee = _.actionData : ee = null;
    let re = N.loaderData ? Gd(_.loaderData, N.loaderData, N.matches || [], N.errors) : _.loaderData, q = _.blockers;
    q.size > 0 && (q = new Map(q), q.forEach((Ee, ft) => q.set(ft, Vi)));
    let ae = V === true || _.navigation.formMethod != null && nn(_.navigation.formMethod) && ((G = C.state) == null ? void 0 : G._isRedirect) !== true;
    s && (o = s, s = void 0), X || R === it.Pop || (R === it.Push ? e.history.push(C, C.state) : R === it.Replace && e.history.replace(C, C.state));
    let ge;
    if (R === it.Pop) {
      let Ee = O.get(_.location.pathname);
      Ee && Ee.has(C.pathname) ? ge = { currentLocation: _.location, nextLocation: C } : O.has(C.pathname) && (ge = { currentLocation: C, nextLocation: _.location });
    } else if (L) {
      let Ee = O.get(_.location.pathname);
      Ee ? Ee.add(C.pathname) : (Ee = /* @__PURE__ */ new Set([C.pathname]), O.set(_.location.pathname, Ee)), ge = { currentLocation: _.location, nextLocation: C };
    }
    se(He({}, N, { actionData: ee, loaderData: re, historyAction: R, location: C, initialized: true, navigation: il, revalidation: "idle", restoreScrollPosition: Ec(C, N.matches || _.matches), preventScrollReset: ae, blockers: q }), { viewTransitionOpts: ge, flushSync: le === true }), R = it.Pop, V = false, L = false, X = false, de = false, Se = [];
  }
  async function tt(C, N) {
    if (typeof C == "number") {
      e.history.go(C);
      return;
    }
    let j = ru(_.location, _.matches, l, h.v7_prependBasename, C, h.v7_relativeSplatPath, N == null ? void 0 : N.fromRouteId, N == null ? void 0 : N.relative), { path: U, submission: G, error: le } = Fd(h.v7_normalizeFormMethod, false, j, N), ce = _.location, ee = Ca(_.location, U, N && N.state);
    ee = He({}, ee, e.history.encodeLocation(ee));
    let re = N && N.replace != null ? N.replace : void 0, q = it.Push;
    re === true ? q = it.Replace : re === false || G != null && nn(G.formMethod) && G.formAction === _.location.pathname + _.location.search && (q = it.Replace);
    let ae = N && "preventScrollReset" in N ? N.preventScrollReset === true : void 0, ge = (N && N.flushSync) === true, Ee = Sc({ currentLocation: ce, nextLocation: ee, historyAction: q });
    if (Ee) {
      Fa(Ee, { state: "blocked", location: ee, proceed() {
        Fa(Ee, { state: "proceeding", proceed: void 0, reset: void 0, location: ee }), tt(C, N);
      }, reset() {
        let ft = new Map(_.blockers);
        ft.set(Ee, Vi), se({ blockers: ft });
      } });
      return;
    }
    return await Ge(q, ee, { submission: G, pendingError: le, preventScrollReset: ae, replace: N && N.replace, enableViewTransition: N && N.viewTransition, flushSync: ge });
  }
  function vt() {
    if (p(), se({ revalidation: "loading" }), _.navigation.state !== "submitting") {
      if (_.navigation.state === "idle") {
        Ge(_.historyAction, _.location, { startUninterruptedRevalidation: true });
        return;
      }
      Ge(R || _.historyAction, _.navigation.location, { overrideNavigation: _.navigation, enableViewTransition: L === true });
    }
  }
  async function Ge(C, N, j) {
    T && T.abort(), T = null, R = C, X = (j && j.startUninterruptedRevalidation) === true, Wm(_.location, _.matches), V = (j && j.preventScrollReset) === true, L = (j && j.enableViewTransition) === true;
    let U = s || o, G = j && j.overrideNavigation, le = j != null && j.initialHydration && _.matches && _.matches.length > 0 && !S ? _.matches : gr(U, N, l), ce = (j && j.flushSync) === true;
    if (le && _.initialized && !de && u0(_.location, N) && !(j && j.submission && nn(j.submission.formMethod))) {
      _e(N, { matches: le }, { flushSync: ce });
      return;
    }
    let ee = Ua(le, U, N.pathname);
    if (ee.active && ee.matches && (le = ee.matches), !le) {
      let { error: Be, notFoundMatches: Re, route: qe } = Ps(N.pathname);
      _e(N, { matches: Re, loaderData: {}, errors: { [qe.id]: Be } }, { flushSync: ce });
      return;
    }
    T = new AbortController();
    let re = Hr(e.history, N, T.signal, j && j.submission), q;
    if (j && j.pendingError) q = [yr(le).route.id, { type: De.error, error: j.pendingError }];
    else if (j && j.submission && nn(j.submission.formMethod)) {
      let Be = await qt(re, N, j.submission, le, ee.active, { replace: j.replace, flushSync: ce });
      if (Be.shortCircuited) return;
      if (Be.pendingActionResult) {
        let [Re, qe] = Be.pendingActionResult;
        if (Lt(qe) && Ta(qe.error) && qe.error.status === 404) {
          T = null, _e(N, { matches: Be.matches, loaderData: {}, errors: { [Re]: qe.error } });
          return;
        }
      }
      le = Be.matches || le, q = Be.pendingActionResult, G = al(N, j.submission), ce = false, ee.active = false, re = Hr(e.history, re.url, re.signal);
    }
    let { shortCircuited: ae, matches: ge, loaderData: Ee, errors: ft } = await ln(re, N, le, ee.active, G, j && j.submission, j && j.fetcherSubmission, j && j.replace, j && j.initialHydration === true, ce, q);
    ae || (T = null, _e(N, He({ matches: ge || le }, Qd(q), { loaderData: Ee, errors: ft })));
  }
  async function qt(C, N, j, U, G, le) {
    le === void 0 && (le = {}), p();
    let ce = m0(N, j);
    if (se({ navigation: ce }, { flushSync: le.flushSync === true }), G) {
      let q = await za(U, N.pathname, C.signal);
      if (q.type === "aborted") return { shortCircuited: true };
      if (q.type === "error") {
        let ae = yr(q.partialMatches).route.id;
        return { matches: q.partialMatches, pendingActionResult: [ae, { type: De.error, error: q.error }] };
      } else if (q.matches) U = q.matches;
      else {
        let { notFoundMatches: ae, error: ge, route: Ee } = Ps(N.pathname);
        return { matches: ae, pendingActionResult: [Ee.id, { type: De.error, error: ge }] };
      }
    }
    let ee, re = Xi(U, N);
    if (!re.route.action && !re.route.lazy) ee = { type: De.error, error: Pt(405, { method: C.method, pathname: N.pathname, routeId: re.route.id }) };
    else if (ee = (await bt("action", _, C, [re], U, null))[re.route.id], C.signal.aborted) return { shortCircuited: true };
    if (Sr(ee)) {
      let q;
      return le && le.replace != null ? q = le.replace : q = Hd(ee.response.headers.get("Location"), new URL(C.url), l, e.history) === _.location.pathname + _.location.search, await yn(C, ee, true, { submission: j, replace: q }), { shortCircuited: true };
    }
    if (Gn(ee)) throw Pt(400, { type: "defer-action" });
    if (Lt(ee)) {
      let q = yr(U, re.route.id);
      return (le && le.replace) !== true && (R = it.Push), { matches: U, pendingActionResult: [q.route.id, ee] };
    }
    return { matches: U, pendingActionResult: [re.route.id, ee] };
  }
  async function ln(C, N, j, U, G, le, ce, ee, re, q, ae) {
    let ge = G || al(N, le), Ee = le || ce || Xd(ge), ft = !X && (!h.v7_partialHydration || !re);
    if (U) {
      if (ft) {
        let Je = Fr(ae);
        se(He({ navigation: ge }, Je !== void 0 ? { actionData: Je } : {}), { flushSync: q });
      }
      let Pe = await za(j, N.pathname, C.signal);
      if (Pe.type === "aborted") return { shortCircuited: true };
      if (Pe.type === "error") {
        let Je = yr(Pe.partialMatches).route.id;
        return { matches: Pe.partialMatches, loaderData: {}, errors: { [Je]: Pe.error } };
      } else if (Pe.matches) j = Pe.matches;
      else {
        let { error: Je, notFoundMatches: zr, route: ji } = Ps(N.pathname);
        return { matches: zr, loaderData: {}, errors: { [ji.id]: Je } };
      }
    }
    let Be = s || o, [Re, qe] = zd(e.history, _, j, Ee, N, h.v7_partialHydration && re === true, h.v7_skipActionErrorRevalidation, de, Se, Z, Ce, Ze, K, Be, l, ae);
    if (Ns((Pe) => !(j && j.some((Je) => Je.route.id === Pe)) || Re && Re.some((Je) => Je.route.id === Pe)), oe = ++J, Re.length === 0 && qe.length === 0) {
      let Pe = Fe();
      return _e(N, He({ matches: j, loaderData: {}, errors: ae && Lt(ae[1]) ? { [ae[0]]: ae[1].error } : null }, Qd(ae), Pe ? { fetchers: new Map(_.fetchers) } : {}), { flushSync: q }), { shortCircuited: true };
    }
    if (ft) {
      let Pe = {};
      if (!U) {
        Pe.navigation = ge;
        let Je = Fr(ae);
        Je !== void 0 && (Pe.actionData = Je);
      }
      qe.length > 0 && (Pe.fetchers = Bn(qe)), se(Pe, { flushSync: q });
    }
    qe.forEach((Pe) => {
      B(Pe.key), Pe.controller && F.set(Pe.key, Pe.controller);
    });
    let Ur = () => qe.forEach((Pe) => B(Pe.key));
    T && T.signal.addEventListener("abort", Ur);
    let { loaderResults: Ai, fetcherResults: xn } = await Oa(_, j, Re, qe, C);
    if (C.signal.aborted) return { shortCircuited: true };
    T && T.signal.removeEventListener("abort", Ur), qe.forEach((Pe) => F.delete(Pe.key));
    let un = so(Ai);
    if (un) return await yn(C, un.result, true, { replace: ee }), { shortCircuited: true };
    if (un = so(xn), un) return K.add(un.key), await yn(C, un.result, true, { replace: ee }), { shortCircuited: true };
    let { loaderData: Rs, errors: Di } = Zd(_, j, Ai, ae, qe, xn, Oe);
    Oe.forEach((Pe, Je) => {
      Pe.subscribe((zr) => {
        (zr || Pe.done) && Oe.delete(Je);
      });
    }), h.v7_partialHydration && re && _.errors && (Di = He({}, _.errors, Di));
    let hr = Fe(), Va = Le(oe), Wa = hr || Va || qe.length > 0;
    return He({ matches: j, loaderData: Rs, errors: Di }, Wa ? { fetchers: new Map(_.fetchers) } : {});
  }
  function Fr(C) {
    if (C && !Lt(C[1])) return { [C[0]]: C[1].data };
    if (_.actionData) return Object.keys(_.actionData).length === 0 ? null : _.actionData;
  }
  function Bn(C) {
    return C.forEach((N) => {
      let j = _.fetchers.get(N.key), U = Wi(void 0, j ? j.data : void 0);
      _.fetchers.set(N.key, U);
    }), new Map(_.fetchers);
  }
  function Mn(C, N, j, U) {
    if (r) throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
    B(C);
    let G = (U && U.flushSync) === true, le = s || o, ce = ru(_.location, _.matches, l, h.v7_prependBasename, j, h.v7_relativeSplatPath, N, U == null ? void 0 : U.relative), ee = gr(le, ce, l), re = Ua(ee, le, ce);
    if (re.active && re.matches && (ee = re.matches), !ee) {
      d(C, N, Pt(404, { pathname: ce }), { flushSync: G });
      return;
    }
    let { path: q, submission: ae, error: ge } = Fd(h.v7_normalizeFormMethod, true, ce, U);
    if (ge) {
      d(C, N, ge, { flushSync: G });
      return;
    }
    let Ee = Xi(ee, q), ft = (U && U.preventScrollReset) === true;
    if (ae && nn(ae.formMethod)) {
      Vt(C, N, q, Ee, ee, re.active, G, ft, ae);
      return;
    }
    Ze.set(C, { routeId: N, path: q }), Ri(C, N, q, Ee, ee, re.active, G, ft, ae);
  }
  async function Vt(C, N, j, U, G, le, ce, ee, re) {
    p(), Ze.delete(C);
    function q(rt) {
      if (!rt.route.action && !rt.route.lazy) {
        let Vr = Pt(405, { method: re.formMethod, pathname: j, routeId: N });
        return d(C, N, Vr, { flushSync: ce }), true;
      }
      return false;
    }
    if (!le && q(U)) return;
    let ae = _.fetchers.get(C);
    u(C, v0(re, ae), { flushSync: ce });
    let ge = new AbortController(), Ee = Hr(e.history, j, ge.signal, re);
    if (le) {
      let rt = await za(G, new URL(Ee.url).pathname, Ee.signal, C);
      if (rt.type === "aborted") return;
      if (rt.type === "error") {
        d(C, N, rt.error, { flushSync: ce });
        return;
      } else if (rt.matches) {
        if (G = rt.matches, U = Xi(G, j), q(U)) return;
      } else {
        d(C, N, Pt(404, { pathname: j }), { flushSync: ce });
        return;
      }
    }
    F.set(C, ge);
    let ft = J, Re = (await bt("action", _, Ee, [U], G, C))[U.route.id];
    if (Ee.signal.aborted) {
      F.get(C) === ge && F.delete(C);
      return;
    }
    if (h.v7_fetcherPersist && Ce.has(C)) {
      if (Sr(Re) || Lt(Re)) {
        u(C, Fn(void 0));
        return;
      }
    } else {
      if (Sr(Re)) if (F.delete(C), oe > ft) {
        u(C, Fn(void 0));
        return;
      } else return K.add(C), u(C, Wi(re)), yn(Ee, Re, false, { fetcherSubmission: re, preventScrollReset: ee });
      if (Lt(Re)) {
        d(C, N, Re.error);
        return;
      }
    }
    if (Gn(Re)) throw Pt(400, { type: "defer-action" });
    let qe = _.navigation.location || _.location, Ur = Hr(e.history, qe, ge.signal), Ai = s || o, xn = _.navigation.state !== "idle" ? gr(Ai, _.navigation.location, l) : _.matches;
    xe(xn, "Didn't find any matches after fetcher action");
    let un = ++J;
    ne.set(C, un);
    let Rs = Wi(re, Re.data);
    _.fetchers.set(C, Rs);
    let [Di, hr] = zd(e.history, _, xn, re, qe, false, h.v7_skipActionErrorRevalidation, de, Se, Z, Ce, Ze, K, Ai, l, [U.route.id, Re]);
    hr.filter((rt) => rt.key !== C).forEach((rt) => {
      let Vr = rt.key, Cc = _.fetchers.get(Vr), Zm = Wi(void 0, Cc ? Cc.data : void 0);
      _.fetchers.set(Vr, Zm), B(Vr), rt.controller && F.set(Vr, rt.controller);
    }), se({ fetchers: new Map(_.fetchers) });
    let Va = () => hr.forEach((rt) => B(rt.key));
    ge.signal.addEventListener("abort", Va);
    let { loaderResults: Wa, fetcherResults: Pe } = await Oa(_, xn, Di, hr, Ur);
    if (ge.signal.aborted) return;
    ge.signal.removeEventListener("abort", Va), ne.delete(C), F.delete(C), hr.forEach((rt) => F.delete(rt.key));
    let Je = so(Wa);
    if (Je) return yn(Ur, Je.result, false, { preventScrollReset: ee });
    if (Je = so(Pe), Je) return K.add(Je.key), yn(Ur, Je.result, false, { preventScrollReset: ee });
    let { loaderData: zr, errors: ji } = Zd(_, xn, Wa, void 0, hr, Pe, Oe);
    if (_.fetchers.has(C)) {
      let rt = Fn(Re.data);
      _.fetchers.set(C, rt);
    }
    Le(un), _.navigation.state === "loading" && un > oe ? (xe(R, "Expected pending action"), T && T.abort(), _e(_.navigation.location, { matches: xn, loaderData: zr, errors: ji, fetchers: new Map(_.fetchers) })) : (se({ errors: ji, loaderData: Gd(_.loaderData, zr, xn, ji), fetchers: new Map(_.fetchers) }), de = false);
  }
  async function Ri(C, N, j, U, G, le, ce, ee, re) {
    let q = _.fetchers.get(C);
    u(C, Wi(re, q ? q.data : void 0), { flushSync: ce });
    let ae = new AbortController(), ge = Hr(e.history, j, ae.signal);
    if (le) {
      let Re = await za(G, new URL(ge.url).pathname, ge.signal, C);
      if (Re.type === "aborted") return;
      if (Re.type === "error") {
        d(C, N, Re.error, { flushSync: ce });
        return;
      } else if (Re.matches) G = Re.matches, U = Xi(G, j);
      else {
        d(C, N, Pt(404, { pathname: j }), { flushSync: ce });
        return;
      }
    }
    F.set(C, ae);
    let Ee = J, Be = (await bt("loader", _, ge, [U], G, C))[U.route.id];
    if (Gn(Be) && (Be = await dc(Be, ge.signal, true) || Be), F.get(C) === ae && F.delete(C), !ge.signal.aborted) {
      if (Ce.has(C)) {
        u(C, Fn(void 0));
        return;
      }
      if (Sr(Be)) if (oe > Ee) {
        u(C, Fn(void 0));
        return;
      } else {
        K.add(C), await yn(ge, Be, false, { preventScrollReset: ee });
        return;
      }
      if (Lt(Be)) {
        d(C, N, Be.error);
        return;
      }
      xe(!Gn(Be), "Unhandled fetcher deferred data"), u(C, Fn(Be.data));
    }
  }
  async function yn(C, N, j, U) {
    let { submission: G, fetcherSubmission: le, preventScrollReset: ce, replace: ee } = U === void 0 ? {} : U;
    N.response.headers.has("X-Remix-Revalidate") && (de = true);
    let re = N.response.headers.get("Location");
    xe(re, "Expected a Location header on the redirect Response"), re = Hd(re, new URL(C.url), l, e.history);
    let q = Ca(_.location, re, { _isRedirect: true });
    if (n) {
      let Re = false;
      if (N.response.headers.has("X-Remix-Reload-Document")) Re = true;
      else if (cc.test(re)) {
        const qe = e.history.createURL(re);
        Re = qe.origin !== t.location.origin || An(qe.pathname, l) == null;
      }
      if (Re) {
        ee ? t.location.replace(re) : t.location.assign(re);
        return;
      }
    }
    T = null;
    let ae = ee === true || N.response.headers.has("X-Remix-Replace") ? it.Replace : it.Push, { formMethod: ge, formAction: Ee, formEncType: ft } = _.navigation;
    !G && !le && ge && Ee && ft && (G = Xd(_.navigation));
    let Be = G || le;
    if (Yy.has(N.response.status) && Be && nn(Be.formMethod)) await Ge(ae, q, { submission: He({}, Be, { formAction: re }), preventScrollReset: ce || V, enableViewTransition: j ? L : void 0 });
    else {
      let Re = al(q, G);
      await Ge(ae, q, { overrideNavigation: Re, fetcherSubmission: le, preventScrollReset: ce || V, enableViewTransition: j ? L : void 0 });
    }
  }
  async function bt(C, N, j, U, G, le) {
    let ce, ee = {};
    try {
      ce = await i0(c, C, N, j, U, G, le, a, i);
    } catch (re) {
      return U.forEach((q) => {
        ee[q.route.id] = { type: De.error, error: re };
      }), ee;
    }
    for (let [re, q] of Object.entries(ce)) if (c0(q)) {
      let ae = q.result;
      ee[re] = { type: De.redirect, response: s0(ae, j, re, G, l, h.v7_relativeSplatPath) };
    } else ee[re] = await o0(q);
    return ee;
  }
  async function Oa(C, N, j, U, G) {
    let le = C.matches, ce = bt("loader", C, G, j, N, null), ee = Promise.all(U.map(async (ae) => {
      if (ae.matches && ae.match && ae.controller) {
        let Ee = (await bt("loader", C, Hr(e.history, ae.path, ae.controller.signal), [ae.match], ae.matches, ae.key))[ae.match.route.id];
        return { [ae.key]: Ee };
      } else return Promise.resolve({ [ae.key]: { type: De.error, error: Pt(404, { pathname: ae.path }) } });
    })), re = await ce, q = (await ee).reduce((ae, ge) => Object.assign(ae, ge), {});
    return await Promise.all([h0(N, re, G.signal, le, C.loaderData), p0(N, q, U)]), { loaderResults: re, fetcherResults: q };
  }
  function p() {
    de = true, Se.push(...Ns()), Ze.forEach((C, N) => {
      F.has(N) && Z.add(N), B(N);
    });
  }
  function u(C, N, j) {
    j === void 0 && (j = {}), _.fetchers.set(C, N), se({ fetchers: new Map(_.fetchers) }, { flushSync: (j && j.flushSync) === true });
  }
  function d(C, N, j, U) {
    U === void 0 && (U = {});
    let G = yr(_.matches, N);
    P(C), se({ errors: { [G.route.id]: j }, fetchers: new Map(_.fetchers) }, { flushSync: (U && U.flushSync) === true });
  }
  function y(C) {
    return me.set(C, (me.get(C) || 0) + 1), Ce.has(C) && Ce.delete(C), _.fetchers.get(C) || Xy;
  }
  function P(C) {
    let N = _.fetchers.get(C);
    F.has(C) && !(N && N.state === "loading" && ne.has(C)) && B(C), Ze.delete(C), ne.delete(C), K.delete(C), h.v7_fetcherPersist && Ce.delete(C), Z.delete(C), _.fetchers.delete(C);
  }
  function D(C) {
    let N = (me.get(C) || 0) - 1;
    N <= 0 ? (me.delete(C), Ce.add(C), h.v7_fetcherPersist || P(C)) : me.set(C, N), se({ fetchers: new Map(_.fetchers) });
  }
  function B(C) {
    let N = F.get(C);
    N && (N.abort(), F.delete(C));
  }
  function ye(C) {
    for (let N of C) {
      let j = y(N), U = Fn(j.data);
      _.fetchers.set(N, U);
    }
  }
  function Fe() {
    let C = [], N = false;
    for (let j of K) {
      let U = _.fetchers.get(j);
      xe(U, "Expected fetcher: " + j), U.state === "loading" && (K.delete(j), C.push(j), N = true);
    }
    return ye(C), N;
  }
  function Le(C) {
    let N = [];
    for (let [j, U] of ne) if (U < C) {
      let G = _.fetchers.get(j);
      xe(G, "Expected fetcher: " + j), G.state === "loading" && (B(j), ne.delete(j), N.push(j));
    }
    return ye(N), N.length > 0;
  }
  function We(C, N) {
    let j = _.blockers.get(C) || Vi;
    return Ve.get(C) !== N && Ve.set(C, N), j;
  }
  function Ae(C) {
    _.blockers.delete(C), Ve.delete(C);
  }
  function Fa(C, N) {
    let j = _.blockers.get(C) || Vi;
    xe(j.state === "unblocked" && N.state === "blocked" || j.state === "blocked" && N.state === "blocked" || j.state === "blocked" && N.state === "proceeding" || j.state === "blocked" && N.state === "unblocked" || j.state === "proceeding" && N.state === "unblocked", "Invalid blocker state transition: " + j.state + " -> " + N.state);
    let U = new Map(_.blockers);
    U.set(C, N), se({ blockers: U });
  }
  function Sc(C) {
    let { currentLocation: N, nextLocation: j, historyAction: U } = C;
    if (Ve.size === 0) return;
    Ve.size > 1 && Rr(false, "A router only supports one blocker at a time");
    let G = Array.from(Ve.entries()), [le, ce] = G[G.length - 1], ee = _.blockers.get(le);
    if (!(ee && ee.state === "proceeding") && ce({ currentLocation: N, nextLocation: j, historyAction: U })) return le;
  }
  function Ps(C) {
    let N = Pt(404, { pathname: C }), j = s || o, { matches: U, route: G } = Kd(j);
    return Ns(), { notFoundMatches: U, route: G, error: N };
  }
  function Ns(C) {
    let N = [];
    return Oe.forEach((j, U) => {
      (!C || C(U)) && (j.cancel(), N.push(U), Oe.delete(U));
    }), N;
  }
  function Vm(C, N, j) {
    if (E = C, I = N, b = j || null, !x && _.navigation === il) {
      x = true;
      let U = Ec(_.location, _.matches);
      U != null && se({ restoreScrollPosition: U });
    }
    return () => {
      E = null, I = null, b = null;
    };
  }
  function _c(C, N) {
    return b && b(C, N.map((U) => by(U, _.loaderData))) || C.key;
  }
  function Wm(C, N) {
    if (E && I) {
      let j = _c(C, N);
      E[j] = I();
    }
  }
  function Ec(C, N) {
    if (E) {
      let j = _c(C, N), U = E[j];
      if (typeof U == "number") return U;
    }
    return null;
  }
  function Ua(C, N, j) {
    if (f) if (C) {
      if (Object.keys(C[0].params).length > 0) return { active: true, matches: _o(N, j, l, true) };
    } else return { active: true, matches: _o(N, j, l, true) || [] };
    return { active: false, matches: null };
  }
  async function za(C, N, j, U) {
    if (!f) return { type: "success", matches: C };
    let G = C;
    for (; ; ) {
      let le = s == null, ce = s || o, ee = a;
      try {
        await f({ signal: j, path: N, matches: G, fetcherKey: U, patch: (ae, ge) => {
          j.aborted || Wd(ae, ge, ce, ee, i);
        } });
      } catch (ae) {
        return { type: "error", error: ae, partialMatches: G };
      } finally {
        le && !j.aborted && (o = [...o]);
      }
      if (j.aborted) return { type: "aborted" };
      let re = gr(ce, N, l);
      if (re) return { type: "success", matches: re };
      let q = _o(ce, N, l, true);
      if (!q || G.length === q.length && G.every((ae, ge) => ae.route.id === q[ge].route.id)) return { type: "success", matches: null };
      G = q;
    }
  }
  function Hm(C) {
    a = {}, s = Ko(C, i, void 0, a);
  }
  function $m(C, N) {
    let j = s == null;
    Wd(C, N, s || o, a, i), j && (o = [...o], se({}));
  }
  return z = { get basename() {
    return l;
  }, get future() {
    return h;
  }, get state() {
    return _;
  }, get routes() {
    return o;
  }, get window() {
    return t;
  }, initialize: fe, subscribe: ve, enableScrollRestoration: Vm, navigate: tt, fetch: Mn, revalidate: vt, createHref: (C) => e.history.createHref(C), encodeLocation: (C) => e.history.encodeLocation(C), getFetcher: y, deleteFetcher: D, dispose: ue, getBlocker: We, deleteBlocker: Ae, patchRoutes: $m, _internalFetchControllers: F, _internalActiveDeferreds: Oe, _internalSetRoutes: Hm }, z;
}
function e0(e) {
  return e != null && ("formData" in e && e.formData != null || "body" in e && e.body !== void 0);
}
function ru(e, t, n, r, i, a, o, s) {
  let l, c;
  if (o) {
    l = [];
    for (let h of t) if (l.push(h), h.route.id === o) {
      c = h;
      break;
    }
  } else l = t, c = t[t.length - 1];
  let f = _s(i || ".", Ss(l, a), An(e.pathname, n) || e.pathname, s === "path");
  if (i == null && (f.search = e.search, f.hash = e.hash), (i == null || i === "" || i === ".") && c) {
    let h = fc(f.search);
    if (c.route.index && !h) f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index";
    else if (!c.route.index && h) {
      let g = new URLSearchParams(f.search), w = g.getAll("index");
      g.delete("index"), w.filter((b) => b).forEach((b) => g.append("index", b));
      let E = g.toString();
      f.search = E ? "?" + E : "";
    }
  }
  return r && n !== "/" && (f.pathname = f.pathname === "/" ? n : Tn([n, f.pathname])), Ar(f);
}
function Fd(e, t, n, r) {
  if (!r || !e0(r)) return { path: n };
  if (r.formMethod && !f0(r.formMethod)) return { path: n, error: Pt(405, { method: r.formMethod }) };
  let i = () => ({ path: n, error: Pt(400, { type: "invalid-body" }) }), a = r.formMethod || "get", o = e ? a.toUpperCase() : a.toLowerCase(), s = rm(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!nn(o)) return i();
      let g = typeof r.body == "string" ? r.body : r.body instanceof FormData || r.body instanceof URLSearchParams ? Array.from(r.body.entries()).reduce((w, E) => {
        let [b, I] = E;
        return "" + w + b + "=" + I + `
`;
      }, "") : String(r.body);
      return { path: n, submission: { formMethod: o, formAction: s, formEncType: r.formEncType, formData: void 0, json: void 0, text: g } };
    } else if (r.formEncType === "application/json") {
      if (!nn(o)) return i();
      try {
        let g = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return { path: n, submission: { formMethod: o, formAction: s, formEncType: r.formEncType, formData: void 0, json: g, text: void 0 } };
      } catch {
        return i();
      }
    }
  }
  xe(typeof FormData == "function", "FormData is not available in this environment");
  let l, c;
  if (r.formData) l = au(r.formData), c = r.formData;
  else if (r.body instanceof FormData) l = au(r.body), c = r.body;
  else if (r.body instanceof URLSearchParams) l = r.body, c = $d(l);
  else if (r.body == null) l = new URLSearchParams(), c = new FormData();
  else try {
    l = new URLSearchParams(r.body), c = $d(l);
  } catch {
    return i();
  }
  let f = { formMethod: o, formAction: s, formEncType: r && r.formEncType || "application/x-www-form-urlencoded", formData: c, json: void 0, text: void 0 };
  if (nn(f.formMethod)) return { path: n, submission: f };
  let h = fr(n);
  return t && h.search && fc(h.search) && l.append("index", ""), h.search = "?" + l, { path: Ar(h), submission: f };
}
function Ud(e, t, n) {
  n === void 0 && (n = false);
  let r = e.findIndex((i) => i.route.id === t);
  return r >= 0 ? e.slice(0, n ? r + 1 : r) : e;
}
function zd(e, t, n, r, i, a, o, s, l, c, f, h, g, w, E, b) {
  let I = b ? Lt(b[1]) ? b[1].error : b[1].data : void 0, x = e.createURL(t.location), v = e.createURL(i), S = n;
  a && t.errors ? S = Ud(n, Object.keys(t.errors)[0], true) : b && Lt(b[1]) && (S = Ud(n, b[0]));
  let A = b ? b[1].statusCode : void 0, M = o && A && A >= 400, z = S.filter((R, V) => {
    let { route: T } = R;
    if (T.lazy) return true;
    if (T.loader == null) return false;
    if (a) return iu(T, t.loaderData, t.errors);
    if (t0(t.loaderData, t.matches[V], R) || l.some(($) => $ === R.route.id)) return true;
    let L = t.matches[V], O = R;
    return Vd(R, He({ currentUrl: x, currentParams: L.params, nextUrl: v, nextParams: O.params }, r, { actionResult: I, actionStatus: A, defaultShouldRevalidate: M ? false : s || x.pathname + x.search === v.pathname + v.search || x.search !== v.search || tm(L, O) }));
  }), _ = [];
  return h.forEach((R, V) => {
    if (a || !n.some((X) => X.route.id === R.routeId) || f.has(V)) return;
    let T = gr(w, R.path, E);
    if (!T) {
      _.push({ key: V, routeId: R.routeId, path: R.path, matches: null, match: null, controller: null });
      return;
    }
    let L = t.fetchers.get(V), O = Xi(T, R.path), $ = false;
    g.has(V) ? $ = false : c.has(V) ? (c.delete(V), $ = true) : L && L.state !== "idle" && L.data === void 0 ? $ = s : $ = Vd(O, He({ currentUrl: x, currentParams: t.matches[t.matches.length - 1].params, nextUrl: v, nextParams: n[n.length - 1].params }, r, { actionResult: I, actionStatus: A, defaultShouldRevalidate: M ? false : s })), $ && _.push({ key: V, routeId: R.routeId, path: R.path, matches: T, match: O, controller: new AbortController() });
  }), [z, _];
}
function iu(e, t, n) {
  if (e.lazy) return true;
  if (!e.loader) return false;
  let r = t != null && t[e.id] !== void 0, i = n != null && n[e.id] !== void 0;
  return !r && i ? false : typeof e.loader == "function" && e.loader.hydrate === true ? true : !r && !i;
}
function t0(e, t, n) {
  let r = !t || n.route.id !== t.route.id, i = e[n.route.id] === void 0;
  return r || i;
}
function tm(e, t) {
  let n = e.route.path;
  return e.pathname !== t.pathname || n != null && n.endsWith("*") && e.params["*"] !== t.params["*"];
}
function Vd(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
function Wd(e, t, n, r, i) {
  var a;
  let o;
  if (e) {
    let c = r[e];
    xe(c, "No route found to patch children into: routeId = " + e), c.children || (c.children = []), o = c.children;
  } else o = n;
  let s = t.filter((c) => !o.some((f) => nm(c, f))), l = Ko(s, i, [e || "_", "patch", String(((a = o) == null ? void 0 : a.length) || "0")], r);
  o.push(...l);
}
function nm(e, t) {
  return "id" in e && "id" in t && e.id === t.id ? true : e.index === t.index && e.path === t.path && e.caseSensitive === t.caseSensitive ? (!e.children || e.children.length === 0) && (!t.children || t.children.length === 0) ? true : e.children.every((n, r) => {
    var i;
    return (i = t.children) == null ? void 0 : i.some((a) => nm(n, a));
  }) : false;
}
async function n0(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let i = n[e.id];
  xe(i, "No route found in manifest");
  let a = {};
  for (let o in r) {
    let l = i[o] !== void 0 && o !== "hasErrorBoundary";
    Rr(!l, 'Route "' + i.id + '" has a static property "' + o + '" defined but its lazy function is also returning a value for this property. ' + ('The lazy route property "' + o + '" will be ignored.')), !l && !Cy.has(o) && (a[o] = r[o]);
  }
  Object.assign(i, a), Object.assign(i, He({}, t(i), { lazy: void 0 }));
}
async function r0(e) {
  let { matches: t } = e, n = t.filter((i) => i.shouldLoad);
  return (await Promise.all(n.map((i) => i.resolve()))).reduce((i, a, o) => Object.assign(i, { [n[o].route.id]: a }), {});
}
async function i0(e, t, n, r, i, a, o, s, l, c) {
  let f = a.map((w) => w.route.lazy ? n0(w.route, l, s) : void 0), h = a.map((w, E) => {
    let b = f[E], I = i.some((v) => v.route.id === w.route.id);
    return He({}, w, { shouldLoad: I, resolve: async (v) => (v && r.method === "GET" && (w.route.lazy || w.route.loader) && (I = true), I ? a0(t, r, w, b, v, c) : Promise.resolve({ type: De.data, result: void 0 })) });
  }), g = await e({ matches: h, request: r, params: a[0].params, fetcherKey: o, context: c });
  try {
    await Promise.all(f);
  } catch {
  }
  return g;
}
async function a0(e, t, n, r, i, a) {
  let o, s, l = (c) => {
    let f, h = new Promise((E, b) => f = b);
    s = () => f(), t.signal.addEventListener("abort", s);
    let g = (E) => typeof c != "function" ? Promise.reject(new Error("You cannot call the handler for a route which defines a boolean " + ('"' + e + '" [routeId: ' + n.route.id + "]"))) : c({ request: t, params: n.params, context: a }, ...E !== void 0 ? [E] : []), w = (async () => {
      try {
        return { type: "data", result: await (i ? i((b) => g(b)) : g()) };
      } catch (E) {
        return { type: "error", result: E };
      }
    })();
    return Promise.race([w, h]);
  };
  try {
    let c = n.route[e];
    if (r) if (c) {
      let f, [h] = await Promise.all([l(c).catch((g) => {
        f = g;
      }), r]);
      if (f !== void 0) throw f;
      o = h;
    } else if (await r, c = n.route[e], c) o = await l(c);
    else if (e === "action") {
      let f = new URL(t.url), h = f.pathname + f.search;
      throw Pt(405, { method: t.method, pathname: h, routeId: n.route.id });
    } else return { type: De.data, result: void 0 };
    else if (c) o = await l(c);
    else {
      let f = new URL(t.url), h = f.pathname + f.search;
      throw Pt(404, { pathname: h });
    }
    xe(o.result !== void 0, "You defined " + (e === "action" ? "an action" : "a loader") + " for route " + ('"' + n.route.id + "\" but didn't return anything from your `" + e + "` ") + "function. Please return a value or `null`.");
  } catch (c) {
    return { type: De.error, result: c };
  } finally {
    s && t.signal.removeEventListener("abort", s);
  }
  return o;
}
async function o0(e) {
  let { result: t, type: n } = e;
  if (im(t)) {
    let h;
    try {
      let g = t.headers.get("Content-Type");
      g && /\bapplication\/json\b/.test(g) ? t.body == null ? h = null : h = await t.json() : h = await t.text();
    } catch (g) {
      return { type: De.error, error: g };
    }
    return n === De.error ? { type: De.error, error: new Xo(t.status, t.statusText, h), statusCode: t.status, headers: t.headers } : { type: De.data, data: h, statusCode: t.status, headers: t.headers };
  }
  if (n === De.error) {
    if (Yd(t)) {
      var r, i;
      if (t.data instanceof Error) {
        var a, o;
        return { type: De.error, error: t.data, statusCode: (a = t.init) == null ? void 0 : a.status, headers: (o = t.init) != null && o.headers ? new Headers(t.init.headers) : void 0 };
      }
      return { type: De.error, error: new Xo(((r = t.init) == null ? void 0 : r.status) || 500, void 0, t.data), statusCode: Ta(t) ? t.status : void 0, headers: (i = t.init) != null && i.headers ? new Headers(t.init.headers) : void 0 };
    }
    return { type: De.error, error: t, statusCode: Ta(t) ? t.status : void 0 };
  }
  if (d0(t)) {
    var s, l;
    return { type: De.deferred, deferredData: t, statusCode: (s = t.init) == null ? void 0 : s.status, headers: ((l = t.init) == null ? void 0 : l.headers) && new Headers(t.init.headers) };
  }
  if (Yd(t)) {
    var c, f;
    return { type: De.data, data: t.data, statusCode: (c = t.init) == null ? void 0 : c.status, headers: (f = t.init) != null && f.headers ? new Headers(t.init.headers) : void 0 };
  }
  return { type: De.data, data: t };
}
function s0(e, t, n, r, i, a) {
  let o = e.headers.get("Location");
  if (xe(o, "Redirects returned/thrown from loaders/actions must have a Location header"), !cc.test(o)) {
    let s = r.slice(0, r.findIndex((l) => l.route.id === n) + 1);
    o = ru(new URL(t.url), s, i, true, o, a), e.headers.set("Location", o);
  }
  return e;
}
function Hd(e, t, n, r) {
  let i = ["about:", "blob:", "chrome:", "chrome-untrusted:", "content:", "data:", "devtools:", "file:", "filesystem:", "javascript:"];
  if (cc.test(e)) {
    let a = e, o = a.startsWith("//") ? new URL(t.protocol + a) : new URL(a);
    if (i.includes(o.protocol)) throw new Error("Invalid redirect location");
    let s = An(o.pathname, n) != null;
    if (o.origin === t.origin && s) return o.pathname + o.search + o.hash;
  }
  try {
    let a = r.createURL(e);
    if (i.includes(a.protocol)) throw new Error("Invalid redirect location");
  } catch {
  }
  return e;
}
function Hr(e, t, n, r) {
  let i = e.createURL(rm(t)).toString(), a = { signal: n };
  if (r && nn(r.formMethod)) {
    let { formMethod: o, formEncType: s } = r;
    a.method = o.toUpperCase(), s === "application/json" ? (a.headers = new Headers({ "Content-Type": s }), a.body = JSON.stringify(r.json)) : s === "text/plain" ? a.body = r.text : s === "application/x-www-form-urlencoded" && r.formData ? a.body = au(r.formData) : a.body = r.formData;
  }
  return new Request(i, a);
}
function au(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries()) t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function $d(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function l0(e, t, n, r, i) {
  let a = {}, o = null, s, l = false, c = {}, f = n && Lt(n[1]) ? n[1].error : void 0;
  return e.forEach((h) => {
    if (!(h.route.id in t)) return;
    let g = h.route.id, w = t[g];
    if (xe(!Sr(w), "Cannot handle redirect results in processLoaderData"), Lt(w)) {
      let E = w.error;
      f !== void 0 && (E = f, f = void 0), o = o || {};
      {
        let b = yr(e, g);
        o[b.route.id] == null && (o[b.route.id] = E);
      }
      a[g] = void 0, l || (l = true, s = Ta(w.error) ? w.error.status : 500), w.headers && (c[g] = w.headers);
    } else Gn(w) ? (r.set(g, w.deferredData), a[g] = w.deferredData.data, w.statusCode != null && w.statusCode !== 200 && !l && (s = w.statusCode), w.headers && (c[g] = w.headers)) : (a[g] = w.data, w.statusCode && w.statusCode !== 200 && !l && (s = w.statusCode), w.headers && (c[g] = w.headers));
  }), f !== void 0 && n && (o = { [n[0]]: f }, a[n[0]] = void 0), { loaderData: a, errors: o, statusCode: s || 200, loaderHeaders: c };
}
function Zd(e, t, n, r, i, a, o) {
  let { loaderData: s, errors: l } = l0(t, n, r, o);
  return i.forEach((c) => {
    let { key: f, match: h, controller: g } = c, w = a[f];
    if (xe(w, "Did not find corresponding fetcher result"), !(g && g.signal.aborted)) if (Lt(w)) {
      let E = yr(e.matches, h == null ? void 0 : h.route.id);
      l && l[E.route.id] || (l = He({}, l, { [E.route.id]: w.error })), e.fetchers.delete(f);
    } else if (Sr(w)) xe(false, "Unhandled fetcher revalidation redirect");
    else if (Gn(w)) xe(false, "Unhandled fetcher deferred data");
    else {
      let E = Fn(w.data);
      e.fetchers.set(f, E);
    }
  }), { loaderData: s, errors: l };
}
function Gd(e, t, n, r) {
  let i = He({}, t);
  for (let a of n) {
    let o = a.route.id;
    if (t.hasOwnProperty(o) ? t[o] !== void 0 && (i[o] = t[o]) : e[o] !== void 0 && a.route.loader && (i[o] = e[o]), r && r.hasOwnProperty(o)) break;
  }
  return i;
}
function Qd(e) {
  return e ? Lt(e[1]) ? { actionData: {} } : { actionData: { [e[0]]: e[1].data } } : {};
}
function yr(e, t) {
  return (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e]).reverse().find((r) => r.route.hasErrorBoundary === true) || e[0];
}
function Kd(e) {
  let t = e.length === 1 ? e[0] : e.find((n) => n.index || !n.path || n.path === "/") || { id: "__shim-error-route__" };
  return { matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }], route: t };
}
function Pt(e, t) {
  let { pathname: n, routeId: r, method: i, type: a, message: o } = t === void 0 ? {} : t, s = "Unknown Server Error", l = "Unknown @remix-run/router error";
  return e === 400 ? (s = "Bad Request", i && n && r ? l = "You made a " + i + ' request to "' + n + '" but ' + ('did not provide a `loader` for route "' + r + '", ') + "so there is no way to handle the request." : a === "defer-action" ? l = "defer() is not supported in actions" : a === "invalid-body" && (l = "Unable to encode submission body")) : e === 403 ? (s = "Forbidden", l = 'Route "' + r + '" does not match URL "' + n + '"') : e === 404 ? (s = "Not Found", l = 'No route matches URL "' + n + '"') : e === 405 && (s = "Method Not Allowed", i && n && r ? l = "You made a " + i.toUpperCase() + ' request to "' + n + '" but ' + ('did not provide an `action` for route "' + r + '", ') + "so there is no way to handle the request." : i && (l = 'Invalid request method "' + i.toUpperCase() + '"')), new Xo(e || 500, s, new Error(l), true);
}
function so(e) {
  let t = Object.entries(e);
  for (let n = t.length - 1; n >= 0; n--) {
    let [r, i] = t[n];
    if (Sr(i)) return { key: r, result: i };
  }
}
function rm(e) {
  let t = typeof e == "string" ? fr(e) : e;
  return Ar(He({}, t, { hash: "" }));
}
function u0(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search ? false : e.hash === "" ? t.hash !== "" : e.hash === t.hash ? true : t.hash !== "";
}
function c0(e) {
  return im(e.result) && Ky.has(e.result.status);
}
function Gn(e) {
  return e.type === De.deferred;
}
function Lt(e) {
  return e.type === De.error;
}
function Sr(e) {
  return (e && e.type) === De.redirect;
}
function Yd(e) {
  return typeof e == "object" && e != null && "type" in e && "data" in e && "init" in e && e.type === "DataWithResponseInit";
}
function d0(e) {
  let t = e;
  return t && typeof t == "object" && typeof t.data == "object" && typeof t.subscribe == "function" && typeof t.cancel == "function" && typeof t.resolveData == "function";
}
function im(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.headers == "object" && typeof e.body < "u";
}
function f0(e) {
  return Qy.has(e.toLowerCase());
}
function nn(e) {
  return Zy.has(e.toLowerCase());
}
async function h0(e, t, n, r, i) {
  let a = Object.entries(t);
  for (let o = 0; o < a.length; o++) {
    let [s, l] = a[o], c = e.find((g) => (g == null ? void 0 : g.route.id) === s);
    if (!c) continue;
    let f = r.find((g) => g.route.id === c.route.id), h = f != null && !tm(f, c) && (i && i[c.route.id]) !== void 0;
    Gn(l) && h && await dc(l, n, false).then((g) => {
      g && (t[s] = g);
    });
  }
}
async function p0(e, t, n) {
  for (let r = 0; r < n.length; r++) {
    let { key: i, routeId: a, controller: o } = n[r], s = t[i];
    e.find((c) => (c == null ? void 0 : c.route.id) === a) && Gn(s) && (xe(o, "Expected an AbortController for revalidating fetcher deferred result"), await dc(s, o.signal, true).then((c) => {
      c && (t[i] = c);
    }));
  }
}
async function dc(e, t, n) {
  if (n === void 0 && (n = false), !await e.deferredData.resolveData(t)) {
    if (n) try {
      return { type: De.data, data: e.deferredData.unwrappedData };
    } catch (i) {
      return { type: De.error, error: i };
    }
    return { type: De.data, data: e.deferredData.data };
  }
}
function fc(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Xi(e, t) {
  let n = typeof t == "string" ? fr(t).search : t.search;
  if (e[e.length - 1].route.index && fc(n || "")) return e[e.length - 1];
  let r = qp(e);
  return r[r.length - 1];
}
function Xd(e) {
  let { formMethod: t, formAction: n, formEncType: r, text: i, formData: a, json: o } = e;
  if (!(!t || !n || !r)) {
    if (i != null) return { formMethod: t, formAction: n, formEncType: r, formData: void 0, json: void 0, text: i };
    if (a != null) return { formMethod: t, formAction: n, formEncType: r, formData: a, json: void 0, text: void 0 };
    if (o !== void 0) return { formMethod: t, formAction: n, formEncType: r, formData: void 0, json: o, text: void 0 };
  }
}
function al(e, t) {
  return t ? { state: "loading", location: e, formMethod: t.formMethod, formAction: t.formAction, formEncType: t.formEncType, formData: t.formData, json: t.json, text: t.text } : { state: "loading", location: e, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0 };
}
function m0(e, t) {
  return { state: "submitting", location: e, formMethod: t.formMethod, formAction: t.formAction, formEncType: t.formEncType, formData: t.formData, json: t.json, text: t.text };
}
function Wi(e, t) {
  return e ? { state: "loading", formMethod: e.formMethod, formAction: e.formAction, formEncType: e.formEncType, formData: e.formData, json: e.json, text: e.text, data: t } : { state: "loading", formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0, data: t };
}
function v0(e, t) {
  return { state: "submitting", formMethod: e.formMethod, formAction: e.formAction, formEncType: e.formEncType, formData: e.formData, json: e.json, text: e.text, data: t ? t.data : void 0 };
}
function Fn(e) {
  return { state: "idle", formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0, data: e };
}
function g0(e, t) {
  try {
    let n = e.sessionStorage.getItem(em);
    if (n) {
      let r = JSON.parse(n);
      for (let [i, a] of Object.entries(r || {})) a && Array.isArray(a) && t.set(i, new Set(a || []));
    }
  } catch {
  }
}
function y0(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, i] of t) n[r] = [...i];
    try {
      e.sessionStorage.setItem(em, JSON.stringify(n));
    } catch (r) {
      Rr(false, "Failed to save applied view transitions in sessionStorage (" + r + ").");
    }
  }
}
/**
* React Router v6.30.3
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
function qo() {
  return qo = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, qo.apply(this, arguments);
}
const La = k.createContext(null), hc = k.createContext(null), In = k.createContext(null), pc = k.createContext(null), Ln = k.createContext({ outlet: null, matches: [], isDataRoute: false }), am = k.createContext(null);
function x0(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Ni() || xe(false);
  let { basename: r, navigator: i } = k.useContext(In), { hash: a, pathname: o, search: s } = Es(e, { relative: n }), l = o;
  return r !== "/" && (l = o === "/" ? r : Tn([r, o])), i.createHref({ pathname: l, search: s, hash: a });
}
function Ni() {
  return k.useContext(pc) != null;
}
function Br() {
  return Ni() || xe(false), k.useContext(pc).location;
}
function om(e) {
  k.useContext(In).static || k.useLayoutEffect(e);
}
function Mr() {
  let { isDataRoute: e } = k.useContext(Ln);
  return e ? j0() : w0();
}
function w0() {
  Ni() || xe(false);
  let e = k.useContext(La), { basename: t, future: n, navigator: r } = k.useContext(In), { matches: i } = k.useContext(Ln), { pathname: a } = Br(), o = JSON.stringify(Ss(i, n.v7_relativeSplatPath)), s = k.useRef(false);
  return om(() => {
    s.current = true;
  }), k.useCallback(function(c, f) {
    if (f === void 0 && (f = {}), !s.current) return;
    if (typeof c == "number") {
      r.go(c);
      return;
    }
    let h = _s(c, JSON.parse(o), a, f.relative === "path");
    e == null && t !== "/" && (h.pathname = h.pathname === "/" ? t : Tn([t, h.pathname])), (f.replace ? r.replace : r.push)(h, f.state, f);
  }, [t, r, o, a, e]);
}
const k0 = k.createContext(null);
function S0(e) {
  let t = k.useContext(Ln).outlet;
  return t && k.createElement(k0.Provider, { value: e }, t);
}
function Es(e, t) {
  let { relative: n } = t === void 0 ? {} : t, { future: r } = k.useContext(In), { matches: i } = k.useContext(Ln), { pathname: a } = Br(), o = JSON.stringify(Ss(i, r.v7_relativeSplatPath));
  return k.useMemo(() => _s(e, JSON.parse(o), a, n === "path"), [e, o, a, n]);
}
function _0(e, t, n, r) {
  Ni() || xe(false);
  let { navigator: i } = k.useContext(In), { matches: a } = k.useContext(Ln), o = a[a.length - 1], s = o ? o.params : {};
  o && o.pathname;
  let l = o ? o.pathnameBase : "/";
  o && o.route;
  let c = Br(), f;
  f = c;
  let h = f.pathname || "/", g = h;
  if (l !== "/") {
    let b = l.replace(/^\//, "").split("/");
    g = "/" + h.replace(/^\//, "").split("/").slice(b.length).join("/");
  }
  let w = gr(e, { pathname: g });
  return P0(w && w.map((b) => Object.assign({}, b, { params: Object.assign({}, s, b.params), pathname: Tn([l, i.encodeLocation ? i.encodeLocation(b.pathname).pathname : b.pathname]), pathnameBase: b.pathnameBase === "/" ? l : Tn([l, i.encodeLocation ? i.encodeLocation(b.pathnameBase).pathname : b.pathnameBase]) })), a, n, r);
}
function E0() {
  let e = D0(), t = Ta(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e), n = e instanceof Error ? e.stack : null, i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return k.createElement(k.Fragment, null, k.createElement("h2", null, "Unexpected Application Error!"), k.createElement("h3", { style: { fontStyle: "italic" } }, t), n ? k.createElement("pre", { style: i }, n) : null, null);
}
const C0 = k.createElement(E0, null);
class T0 extends k.Component {
  constructor(t) {
    super(t), this.state = { location: t.location, revalidation: t.revalidation, error: t.error };
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? { error: t.error, location: t.location, revalidation: t.revalidation } : { error: t.error !== void 0 ? t.error : n.error, location: n.location, revalidation: t.revalidation || n.revalidation };
  }
  componentDidCatch(t, n) {
    console.error("React Router caught the following error during render", t, n);
  }
  render() {
    return this.state.error !== void 0 ? k.createElement(Ln.Provider, { value: this.props.routeContext }, k.createElement(am.Provider, { value: this.state.error, children: this.props.component })) : this.props.children;
  }
}
function b0(e) {
  let { routeContext: t, match: n, children: r } = e, i = k.useContext(La);
  return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id), k.createElement(Ln.Provider, { value: t }, r);
}
function P0(e, t, n, r) {
  var i;
  if (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null) {
    var a;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if ((a = r) != null && a.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0) e = n.matches;
    else return null;
  }
  let o = e, s = (i = n) == null ? void 0 : i.errors;
  if (s != null) {
    let f = o.findIndex((h) => h.route.id && (s == null ? void 0 : s[h.route.id]) !== void 0);
    f >= 0 || xe(false), o = o.slice(0, Math.min(o.length, f + 1));
  }
  let l = false, c = -1;
  if (n && r && r.v7_partialHydration) for (let f = 0; f < o.length; f++) {
    let h = o[f];
    if ((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (c = f), h.route.id) {
      let { loaderData: g, errors: w } = n, E = h.route.loader && g[h.route.id] === void 0 && (!w || w[h.route.id] === void 0);
      if (h.route.lazy || E) {
        l = true, c >= 0 ? o = o.slice(0, c + 1) : o = [o[0]];
        break;
      }
    }
  }
  return o.reduceRight((f, h, g) => {
    let w, E = false, b = null, I = null;
    n && (w = s && h.route.id ? s[h.route.id] : void 0, b = h.route.errorElement || C0, l && (c < 0 && g === 0 ? (I0("route-fallback"), E = true, I = null) : c === g && (E = true, I = h.route.hydrateFallbackElement || null)));
    let x = t.concat(o.slice(0, g + 1)), v = () => {
      let S;
      return w ? S = b : E ? S = I : h.route.Component ? S = k.createElement(h.route.Component, null) : h.route.element ? S = h.route.element : S = f, k.createElement(b0, { match: h, routeContext: { outlet: f, matches: x, isDataRoute: n != null }, children: S });
    };
    return n && (h.route.ErrorBoundary || h.route.errorElement || g === 0) ? k.createElement(T0, { location: n.location, revalidation: n.revalidation, component: b, error: w, children: v(), routeContext: { outlet: null, matches: x, isDataRoute: true } }) : v();
  }, null);
}
var sm = function(e) {
  return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e;
}(sm || {}), lm = function(e) {
  return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e;
}(lm || {});
function N0(e) {
  let t = k.useContext(La);
  return t || xe(false), t;
}
function R0(e) {
  let t = k.useContext(hc);
  return t || xe(false), t;
}
function A0(e) {
  let t = k.useContext(Ln);
  return t || xe(false), t;
}
function um(e) {
  let t = A0(), n = t.matches[t.matches.length - 1];
  return n.route.id || xe(false), n.route.id;
}
function D0() {
  var e;
  let t = k.useContext(am), n = R0(lm.UseRouteError), r = um();
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function j0() {
  let { router: e } = N0(sm.UseNavigateStable), t = um(), n = k.useRef(false);
  return om(() => {
    n.current = true;
  }), k.useCallback(function(i, a) {
    a === void 0 && (a = {}), n.current && (typeof i == "number" ? e.navigate(i) : e.navigate(i, qo({ fromRouteId: t }, a)));
  }, [e, t]);
}
const qd = {};
function I0(e, t, n) {
  qd[e] || (qd[e] = true);
}
function L0(e, t) {
  e == null ? void 0 : e.v7_startTransition, (e == null ? void 0 : e.v7_relativeSplatPath) === void 0 && (!t || t.v7_relativeSplatPath), t && (t.v7_fetcherPersist, t.v7_normalizeFormMethod, t.v7_partialHydration, t.v7_skipActionErrorRevalidation);
}
function B0(e) {
  let { to: t, replace: n, state: r, relative: i } = e;
  Ni() || xe(false);
  let { future: a, static: o } = k.useContext(In), { matches: s } = k.useContext(Ln), { pathname: l } = Br(), c = Mr(), f = _s(t, Ss(s, a.v7_relativeSplatPath), l, i === "path"), h = JSON.stringify(f);
  return k.useEffect(() => c(JSON.parse(h), { replace: n, state: r, relative: i }), [c, h, i, n, r]), null;
}
function M0(e) {
  return S0(e.context);
}
function O0(e) {
  let { basename: t = "/", children: n = null, location: r, navigationType: i = it.Pop, navigator: a, static: o = false, future: s } = e;
  Ni() && xe(false);
  let l = t.replace(/^\/*/, "/"), c = k.useMemo(() => ({ basename: l, navigator: a, static: o, future: qo({ v7_relativeSplatPath: false }, s) }), [l, s, a, o]);
  typeof r == "string" && (r = fr(r));
  let { pathname: f = "/", search: h = "", hash: g = "", state: w = null, key: E = "default" } = r, b = k.useMemo(() => {
    let I = An(f, l);
    return I == null ? null : { location: { pathname: I, search: h, hash: g, state: w, key: E }, navigationType: i };
  }, [l, f, h, g, w, E, i]);
  return b == null ? null : k.createElement(In.Provider, { value: c }, k.createElement(pc.Provider, { children: n, value: b }));
}
new Promise(() => {
});
function F0(e) {
  let t = { hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null };
  return e.Component && Object.assign(t, { element: k.createElement(e.Component), Component: void 0 }), e.HydrateFallback && Object.assign(t, { hydrateFallbackElement: k.createElement(e.HydrateFallback), HydrateFallback: void 0 }), e.ErrorBoundary && Object.assign(t, { errorElement: k.createElement(e.ErrorBoundary), ErrorBoundary: void 0 }), t;
}
/**
* React Router DOM v6.30.3
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
function xi() {
  return xi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, xi.apply(this, arguments);
}
function cm(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++) i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function U0(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function z0(e, t) {
  return e.button === 0 && (!t || t === "_self") && !U0(e);
}
function ou(e) {
  return e === void 0 && (e = ""), new URLSearchParams(typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce((t, n) => {
    let r = e[n];
    return t.concat(Array.isArray(r) ? r.map((i) => [n, i]) : [[n, r]]);
  }, []));
}
function V0(e, t) {
  let n = ou(e);
  return t && t.forEach((r, i) => {
    n.has(i) || t.getAll(i).forEach((a) => {
      n.append(i, a);
    });
  }), n;
}
const W0 = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"], H0 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "viewTransition", "children"], $0 = "6";
try {
  window.__reactRouterVersion = $0;
} catch {
}
function Z0(e, t) {
  return Jy({ basename: void 0, future: xi({}, void 0, { v7_prependBasename: true }), history: Sy({ window: void 0 }), hydrationData: G0(), routes: e, mapRouteProperties: F0, dataStrategy: void 0, patchRoutesOnNavigation: void 0, window: void 0 }).initialize();
}
function G0() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = xi({}, t, { errors: Q0(t.errors) })), t;
}
function Q0(e) {
  if (!e) return null;
  let t = Object.entries(e), n = {};
  for (let [r, i] of t) if (i && i.__type === "RouteErrorResponse") n[r] = new Xo(i.status, i.statusText, i.data, i.internal === true);
  else if (i && i.__type === "Error") {
    if (i.__subType) {
      let a = window[i.__subType];
      if (typeof a == "function") try {
        let o = new a(i.message);
        o.stack = "", n[r] = o;
      } catch {
      }
    }
    if (n[r] == null) {
      let a = new Error(i.message);
      a.stack = "", n[r] = a;
    }
  } else n[r] = i;
  return n;
}
const dm = k.createContext({ isTransitioning: false }), K0 = k.createContext(/* @__PURE__ */ new Map()), Y0 = "startTransition", Jd = uv[Y0], X0 = "flushSync", ef = ky[X0];
function q0(e) {
  Jd ? Jd(e) : e();
}
function Hi(e) {
  ef ? ef(e) : e();
}
class J0 {
  constructor() {
    this.status = "pending", this.promise = new Promise((t, n) => {
      this.resolve = (r) => {
        this.status === "pending" && (this.status = "resolved", t(r));
      }, this.reject = (r) => {
        this.status === "pending" && (this.status = "rejected", n(r));
      };
    });
  }
}
function ex(e) {
  let { fallbackElement: t, router: n, future: r } = e, [i, a] = k.useState(n.state), [o, s] = k.useState(), [l, c] = k.useState({ isTransitioning: false }), [f, h] = k.useState(), [g, w] = k.useState(), [E, b] = k.useState(), I = k.useRef(/* @__PURE__ */ new Map()), { v7_startTransition: x } = r || {}, v = k.useCallback((R) => {
    x ? q0(R) : R();
  }, [x]), S = k.useCallback((R, V) => {
    let { deletedFetchers: T, flushSync: L, viewTransitionOpts: O } = V;
    R.fetchers.forEach((X, de) => {
      X.data !== void 0 && I.current.set(de, X.data);
    }), T.forEach((X) => I.current.delete(X));
    let $ = n.window == null || n.window.document == null || typeof n.window.document.startViewTransition != "function";
    if (!O || $) {
      L ? Hi(() => a(R)) : v(() => a(R));
      return;
    }
    if (L) {
      Hi(() => {
        g && (f && f.resolve(), g.skipTransition()), c({ isTransitioning: true, flushSync: true, currentLocation: O.currentLocation, nextLocation: O.nextLocation });
      });
      let X = n.window.document.startViewTransition(() => {
        Hi(() => a(R));
      });
      X.finished.finally(() => {
        Hi(() => {
          h(void 0), w(void 0), s(void 0), c({ isTransitioning: false });
        });
      }), Hi(() => w(X));
      return;
    }
    g ? (f && f.resolve(), g.skipTransition(), b({ state: R, currentLocation: O.currentLocation, nextLocation: O.nextLocation })) : (s(R), c({ isTransitioning: true, flushSync: false, currentLocation: O.currentLocation, nextLocation: O.nextLocation }));
  }, [n.window, g, f, I, v]);
  k.useLayoutEffect(() => n.subscribe(S), [n, S]), k.useEffect(() => {
    l.isTransitioning && !l.flushSync && h(new J0());
  }, [l]), k.useEffect(() => {
    if (f && o && n.window) {
      let R = o, V = f.promise, T = n.window.document.startViewTransition(async () => {
        v(() => a(R)), await V;
      });
      T.finished.finally(() => {
        h(void 0), w(void 0), s(void 0), c({ isTransitioning: false });
      }), w(T);
    }
  }, [v, o, f, n.window]), k.useEffect(() => {
    f && o && i.location.key === o.location.key && f.resolve();
  }, [f, g, i.location, o]), k.useEffect(() => {
    !l.isTransitioning && E && (s(E.state), c({ isTransitioning: true, flushSync: false, currentLocation: E.currentLocation, nextLocation: E.nextLocation }), b(void 0));
  }, [l.isTransitioning, E]), k.useEffect(() => {
  }, []);
  let A = k.useMemo(() => ({ createHref: n.createHref, encodeLocation: n.encodeLocation, go: (R) => n.navigate(R), push: (R, V, T) => n.navigate(R, { state: V, preventScrollReset: T == null ? void 0 : T.preventScrollReset }), replace: (R, V, T) => n.navigate(R, { replace: true, state: V, preventScrollReset: T == null ? void 0 : T.preventScrollReset }) }), [n]), M = n.basename || "/", z = k.useMemo(() => ({ router: n, navigator: A, static: false, basename: M }), [n, A, M]), _ = k.useMemo(() => ({ v7_relativeSplatPath: n.future.v7_relativeSplatPath }), [n.future.v7_relativeSplatPath]);
  return k.useEffect(() => L0(r, n.future), [r, n.future]), k.createElement(k.Fragment, null, k.createElement(La.Provider, { value: z }, k.createElement(hc.Provider, { value: i }, k.createElement(K0.Provider, { value: I.current }, k.createElement(dm.Provider, { value: l }, k.createElement(O0, { basename: M, location: i.location, navigationType: i.historyAction, navigator: A, future: _ }, i.initialized || n.future.v7_partialHydration ? k.createElement(tx, { routes: n.routes, future: n.future, state: i }) : t))))), null);
}
const tx = k.memo(nx);
function nx(e) {
  let { routes: t, future: n, state: r } = e;
  return _0(t, void 0, r, n);
}
const rx = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ix = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, ax = k.forwardRef(function(t, n) {
  let { onClick: r, relative: i, reloadDocument: a, replace: o, state: s, target: l, to: c, preventScrollReset: f, viewTransition: h } = t, g = cm(t, W0), { basename: w } = k.useContext(In), E, b = false;
  if (typeof c == "string" && ix.test(c) && (E = c, rx)) try {
    let S = new URL(window.location.href), A = c.startsWith("//") ? new URL(S.protocol + c) : new URL(c), M = An(A.pathname, w);
    A.origin === S.origin && M != null ? c = M + A.search + A.hash : b = true;
  } catch {
  }
  let I = x0(c, { relative: i }), x = lx(c, { replace: o, state: s, target: l, preventScrollReset: f, relative: i, viewTransition: h });
  function v(S) {
    r && r(S), S.defaultPrevented || x(S);
  }
  return k.createElement("a", xi({}, g, { href: E || I, onClick: b || a ? r : v, ref: n, target: l }));
}), ox = k.forwardRef(function(t, n) {
  let { "aria-current": r = "page", caseSensitive: i = false, className: a = "", end: o = false, style: s, to: l, viewTransition: c, children: f } = t, h = cm(t, H0), g = Es(l, { relative: h.relative }), w = Br(), E = k.useContext(hc), { navigator: b, basename: I } = k.useContext(In), x = E != null && ux(g) && c === true, v = b.encodeLocation ? b.encodeLocation(g).pathname : g.pathname, S = w.pathname, A = E && E.navigation && E.navigation.location ? E.navigation.location.pathname : null;
  i || (S = S.toLowerCase(), A = A ? A.toLowerCase() : null, v = v.toLowerCase()), A && I && (A = An(A, I) || A);
  const M = v !== "/" && v.endsWith("/") ? v.length - 1 : v.length;
  let z = S === v || !o && S.startsWith(v) && S.charAt(M) === "/", _ = A != null && (A === v || !o && A.startsWith(v) && A.charAt(v.length) === "/"), R = { isActive: z, isPending: _, isTransitioning: x }, V = z ? r : void 0, T;
  typeof a == "function" ? T = a(R) : T = [a, z ? "active" : null, _ ? "pending" : null, x ? "transitioning" : null].filter(Boolean).join(" ");
  let L = typeof s == "function" ? s(R) : s;
  return k.createElement(ax, xi({}, h, { "aria-current": V, className: T, ref: n, style: L, to: l, viewTransition: c }), typeof f == "function" ? f(R) : f);
});
var su;
(function(e) {
  e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState";
})(su || (su = {}));
var tf;
(function(e) {
  e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration";
})(tf || (tf = {}));
function sx(e) {
  let t = k.useContext(La);
  return t || xe(false), t;
}
function lx(e, t) {
  let { target: n, replace: r, state: i, preventScrollReset: a, relative: o, viewTransition: s } = t === void 0 ? {} : t, l = Mr(), c = Br(), f = Es(e, { relative: o });
  return k.useCallback((h) => {
    if (z0(h, n)) {
      h.preventDefault();
      let g = r !== void 0 ? r : Ar(c) === Ar(f);
      l(e, { replace: g, state: i, preventScrollReset: a, relative: o, viewTransition: s });
    }
  }, [c, l, f, r, i, n, e, a, o, s]);
}
function fm(e) {
  let t = k.useRef(ou(e)), n = k.useRef(false), r = Br(), i = k.useMemo(() => V0(r.search, n.current ? null : t.current), [r.search]), a = Mr(), o = k.useCallback((s, l) => {
    const c = ou(typeof s == "function" ? s(i) : s);
    n.current = true, a("?" + c, l);
  }, [a, i]);
  return [i, o];
}
function ux(e, t) {
  t === void 0 && (t = {});
  let n = k.useContext(dm);
  n == null && xe(false);
  let { basename: r } = sx(su.useViewTransitionState), i = Es(e, { relative: t.relative });
  if (!n.isTransitioning) return false;
  let a = An(n.currentLocation.pathname, r) || n.currentLocation.pathname, o = An(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return Yo(i.pathname, o) != null || Yo(i.pathname, a) != null;
}
const $i = ({ to: e, icon: t, label: n }) => m.jsxs(ox, { to: e, className: ({ isActive: r }) => `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${r ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20" : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`, children: [t, m.jsx("span", { className: "font-medium", children: n })] }), cx = () => m.jsxs("aside", { className: "w-64 h-screen bg-slate-900 border-r border-slate-800 flex flex-col sticky top-0", children: [m.jsx("div", { className: "p-8", children: m.jsxs("div", { className: "flex items-center gap-3", children: [m.jsx("div", { className: "w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white", children: "P" }), m.jsx("h1", { className: "text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400", children: "PersonaPlex" })] }) }), m.jsxs("nav", { className: "flex-1 px-4 space-y-2", children: [m.jsx($i, { to: "/dashboard", label: "Dashboard", icon: m.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [m.jsx("rect", { width: "7", height: "9", x: "3", y: "3", rx: "1" }), m.jsx("rect", { width: "7", height: "5", x: "14", y: "3", rx: "1" }), m.jsx("rect", { width: "7", height: "9", x: "14", y: "12", rx: "1" }), m.jsx("rect", { width: "7", height: "5", x: "3", y: "16", rx: "1" })] }) }), m.jsx($i, { to: "/agents", label: "Agents", icon: m.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [m.jsx("path", { d: "M12 8V4H8" }), m.jsx("rect", { width: "16", height: "12", x: "4", y: "8", rx: "2" }), m.jsx("path", { d: "M2 14h2" }), m.jsx("path", { d: "M20 14h2" }), m.jsx("path", { d: "M15 13v2" }), m.jsx("path", { d: "M9 13v2" })] }) }), m.jsx($i, { to: "/call-logs", label: "Call Logs", icon: m.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: m.jsx("path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" }) }) }), m.jsx($i, { to: "/integrations", label: "Integrations", icon: m.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: m.jsx("path", { d: "m8 3 4 8 5-5 5 15H2L8 3z" }) }) }), m.jsx($i, { to: "/settings", label: "Settings", icon: m.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [m.jsx("path", { d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" }), m.jsx("circle", { cx: "12", cy: "12", r: "3" })] }) })] }), m.jsx("div", { className: "p-4 mt-auto", children: m.jsxs("div", { className: "bg-slate-800/50 rounded-xl p-4 border border-slate-700", children: [m.jsx("p", { className: "text-xs text-slate-400 mb-1", children: "Current Plan" }), m.jsx("p", { className: "text-sm font-semibold text-white", children: "Pro Trial" }), m.jsx("div", { className: "mt-3 w-full bg-slate-700 h-1.5 rounded-full overflow-hidden", children: m.jsx("div", { className: "bg-blue-500 h-full w-2/3" }) }), m.jsx("p", { className: "text-[10px] text-slate-500 mt-2", children: "14,200 / 20,000 mins" })] }) })] }), dx = () => m.jsxs("header", { className: "h-16 border-b border-slate-800 bg-slate-900/80 backdrop-blur-md flex items-center justify-between px-8 sticky top-0 z-10", children: [m.jsx("div", { className: "flex items-center gap-4", children: m.jsx("h2", { className: "text-sm font-medium text-slate-400", children: "PersonaPlex Dashboard" }) }), m.jsxs("div", { className: "flex items-center gap-6", children: [m.jsx("button", { className: "text-slate-400 hover:text-white transition-colors", children: m.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [m.jsx("path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" }), m.jsx("path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0" })] }) }), m.jsxs("div", { className: "flex items-center gap-3 pl-6 border-l border-slate-800", children: [m.jsxs("div", { className: "text-right hidden sm:block", children: [m.jsx("p", { className: "text-xs font-medium text-white", children: "Yash Shah" }), m.jsx("p", { className: "text-[10px] text-slate-500", children: "Admin" })] }), m.jsx("div", { className: "w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500", children: m.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [m.jsx("path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" }), m.jsx("circle", { cx: "12", cy: "7", r: "4" })] }) })] })] })] }), fx = () => m.jsxs("div", { className: "flex min-h-screen bg-[#020617] text-slate-200 selection:bg-blue-500/30", children: [m.jsx(cx, {}), m.jsxs("div", { className: "flex-1 flex flex-col min-w-0", children: [m.jsx(dx, {}), m.jsx("main", { className: "flex-1 overflow-y-auto p-8", children: m.jsx("div", { className: "max-w-7xl mx-auto", children: m.jsx(M0, {}) }) })] })] }), ct = ({ children: e, variant: t = "primary", size: n = "md", className: r = "", ...i }) => {
  const a = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed", o = { primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-lg shadow-blue-500/20", secondary: "bg-slate-800 text-white hover:bg-slate-700 focus:ring-slate-500", outline: "border border-slate-700 text-slate-300 hover:bg-slate-800 focus:ring-slate-500", danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-lg shadow-red-500/20" }, s = { sm: "px-3 py-1.5 text-xs", md: "px-4 py-2 text-sm", lg: "px-6 py-3 text-base" };
  return m.jsx("button", { className: `${a} ${o[t]} ${s[n]} ${r}`, ...i, children: e });
}, Et = ({ children: e, className: t = "", title: n, description: r, footer: i }) => m.jsxs("div", { className: `bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden backdrop-blur-sm ${t}`, children: [(n || r) && m.jsxs("div", { className: "px-6 py-4 border-b border-slate-800", children: [n && m.jsx("h3", { className: "text-lg font-semibold text-white", children: n }), r && m.jsx("p", { className: "text-sm text-slate-400 mt-1", children: r })] }), m.jsx("div", { className: "px-6 py-6", children: e }), i && m.jsx("div", { className: "px-6 py-4 bg-slate-800/50 border-t border-slate-800", children: i })] }), wi = ({ label: e, error: t, multiline: n, className: r = "", ...i }) => {
  const a = "w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-slate-500";
  return m.jsxs("div", { className: `space-y-1.5 ${r}`, children: [e && m.jsx("label", { className: "block text-sm font-medium text-slate-300", children: e }), n ? m.jsx("textarea", { className: `${a} min-h-[100px] resize-y`, ...i }) : m.jsx("input", { className: a, ...i }), t && m.jsx("p", { className: "text-xs text-red-500", children: t })] });
}, hx = () => {
  const [e, t] = k.useState("demo@personaplex.ai"), [n, r] = k.useState("password"), i = Mr(), a = (o) => {
    o.preventDefault(), i("/dashboard");
  };
  return m.jsx("div", { className: "min-h-screen bg-[#020617] flex items-center justify-center p-4", children: m.jsxs("div", { className: "w-full max-w-md", children: [m.jsxs("div", { className: "text-center mb-8", children: [m.jsx("div", { className: "w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center font-bold text-white text-3xl mx-auto mb-4 shadow-xl shadow-blue-500/20", children: "P" }), m.jsx("h1", { className: "text-3xl font-bold text-white", children: "Welcome back" }), m.jsx("p", { className: "text-slate-400 mt-2", children: "Sign in to your PersonaPlex account" })] }), m.jsx(Et, { children: m.jsxs("form", { onSubmit: a, className: "space-y-6", children: [m.jsx(wi, { label: "Email Address", type: "email", placeholder: "name@company.com", value: e, onChange: (o) => t(o.target.value), required: true }), m.jsx(wi, { label: "Password", type: "password", placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", value: n, onChange: (o) => r(o.target.value), required: true }), m.jsxs("div", { className: "flex items-center justify-between text-sm", children: [m.jsxs("label", { className: "flex items-center gap-2 cursor-pointer", children: [m.jsx("input", { type: "checkbox", className: "rounded border-slate-700 bg-slate-800 text-blue-600 focus:ring-blue-500" }), m.jsx("span", { className: "text-slate-400", children: "Remember me" })] }), m.jsx("a", { href: "#", className: "text-blue-500 hover:text-blue-400 transition-colors", children: "Forgot password?" })] }), m.jsx(ct, { type: "submit", className: "w-full", size: "lg", children: "Sign In" })] }) }), m.jsxs("p", { className: "text-center text-slate-500 mt-8 text-sm", children: ["Don't have an account? ", m.jsx("a", { href: "#", className: "text-blue-500 hover:text-blue-400 font-medium", children: "Start 14-day free trial" })] })] }) });
}, px = () => {
  const e = [{ label: "Total Minutes", value: "14,200", change: "+12%", color: "text-blue-500" }, { label: "Active Agents", value: "8", change: "+2", color: "text-emerald-500" }, { label: "Avg. Call Duration", value: "4m 32s", change: "-5%", color: "text-amber-500" }, { label: "Completion Rate", value: "94.2%", change: "+0.8%", color: "text-purple-500" }];
  return m.jsxs("div", { className: "space-y-8", children: [m.jsxs("div", { children: [m.jsx("h1", { className: "text-3xl font-bold text-white", children: "Dashboard Overlay" }), m.jsx("p", { className: "text-slate-400 mt-2", children: "Welcome back, here is what is happening with your agents today." })] }), m.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: e.map((t, n) => m.jsxs(Et, { className: "relative overflow-hidden group", children: [m.jsx("div", { className: "absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity", children: m.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: m.jsx("path", { d: "M22 12h-4l-3 9L9 3l-3 9H2" }) }) }), m.jsx("p", { className: "text-sm font-medium text-slate-400", children: t.label }), m.jsxs("div", { className: "flex items-end justify-between mt-2", children: [m.jsx("h3", { className: "text-2xl font-bold text-white", children: t.value }), m.jsx("span", { className: `text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-800 ${t.change.startsWith("+") ? "text-emerald-400" : "text-red-400"}`, children: t.change })] })] }, n)) }), m.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [m.jsxs(Et, { className: "lg:col-span-2", title: "Activity Overview", description: "Usage minutes across all agents for the last 7 days.", children: [m.jsx("div", { className: "h-64 flex items-end gap-2 px-2", children: [40, 60, 45, 80, 55, 90, 70].map((t, n) => m.jsx("div", { className: "flex-1 bg-blue-600/20 rounded-t-lg relative group", children: m.jsx("div", { className: "absolute bottom-0 left-0 right-0 bg-blue-500 rounded-t-lg transition-all duration-500 group-hover:bg-blue-400", style: { height: `${t}%` } }) }, n)) }), m.jsxs("div", { className: "flex justify-between mt-4 text-xs text-slate-500 px-2 font-medium", children: [m.jsx("span", { children: "Mon" }), m.jsx("span", { children: "Tue" }), m.jsx("span", { children: "Wed" }), m.jsx("span", { children: "Thu" }), m.jsx("span", { children: "Fri" }), m.jsx("span", { children: "Sat" }), m.jsx("span", { children: "Sun" })] })] }), m.jsxs(Et, { title: "Quick Actions", description: "Commonly used tasks.", children: [m.jsxs("div", { className: "space-y-3", children: [m.jsxs(ct, { variant: "outline", className: "w-full justify-start gap-3", children: [m.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [m.jsx("path", { d: "M5 12h14" }), m.jsx("path", { d: "M12 5v14" })] }), "Create New Agent"] }), m.jsxs(ct, { variant: "outline", className: "w-full justify-start gap-3", children: [m.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [m.jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }), m.jsx("polyline", { points: "7 10 12 15 17 10" }), m.jsx("line", { x1: "12", x2: "12", y1: "15", y2: "3" })] }), "Download Reports"] }), m.jsxs(ct, { variant: "outline", className: "w-full justify-start gap-3", children: [m.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [m.jsx("circle", { cx: "12", cy: "12", r: "10" }), m.jsx("path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }), m.jsx("line", { x1: "12", x2: "12", y1: "17", y2: "17" })] }), "Support Documentation"] })] }), m.jsxs("div", { className: "mt-8 p-4 bg-blue-600/10 border border-blue-500/20 rounded-xl", children: [m.jsx("p", { className: "text-sm font-semibold text-blue-400", children: "Need help?" }), m.jsx("p", { className: "text-xs text-slate-400 mt-1", children: "Schedule a call with our specialist to optimize your agent performance." }), m.jsx(ct, { size: "sm", className: "mt-4 w-full", children: "Book a Call" })] })] })] })] });
};
function hm({ columns: e, data: t, onRowClick: n }) {
  return m.jsx("div", { className: "w-full overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/50", children: m.jsxs("table", { className: "w-full text-left border-collapse", children: [m.jsx("thead", { className: "bg-slate-800/50", children: m.jsx("tr", { children: e.map((r, i) => m.jsx("th", { className: "px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider", children: r.header }, i)) }) }), m.jsx("tbody", { className: "divide-y divide-slate-800", children: t.length === 0 ? m.jsx("tr", { children: m.jsx("td", { colSpan: e.length, className: "px-6 py-12 text-center text-slate-500", children: "No records found." }) }) : t.map((r) => m.jsx("tr", { onClick: () => n == null ? void 0 : n(r), className: `group hover:bg-slate-800/30 transition-colors ${n ? "cursor-pointer" : ""}`, children: e.map((i, a) => m.jsx("td", { className: "px-6 py-4 text-sm text-slate-300", children: typeof i.accessor == "function" ? i.accessor(r) : r[i.accessor] }, a)) }, r.id)) })] }) });
}
const pm = "personaplex_agents", mc = () => {
  const e = localStorage.getItem(pm);
  return e ? JSON.parse(e) : [];
}, nf = (e) => {
  const t = mc(), n = t.findIndex((r) => r.id === e.id);
  n > -1 ? t[n] = e : t.push(e), localStorage.setItem(pm, JSON.stringify(t));
}, mm = (e) => mc().find((n) => n.id === e), mx = () => {
  const [e, t] = k.useState([]), n = Mr();
  k.useEffect(() => {
    t(mc());
  }, []);
  const r = [{ header: "Name", accessor: (i) => m.jsxs("div", { className: "flex items-center gap-3", children: [m.jsx("div", { className: "w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center text-blue-500 font-bold border border-slate-700", children: i.name.charAt(0).toUpperCase() }), m.jsx("span", { className: "font-medium text-white", children: i.name })] }) }, { header: "Voice", accessor: (i) => m.jsx("span", { className: "text-slate-400", children: i.voice.replace(".pt", "").replace(/^NAT/, "NATURAL_").replace(/^VAR/, "VARIETY_") }) }, { header: "Status", accessor: (i) => m.jsx("span", { className: `px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${i.status === "Live" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "bg-slate-800 text-slate-400 border border-slate-700"}`, children: i.status }) }, { header: "Last Updated", accessor: "lastUpdated" }, { header: "", accessor: (i) => m.jsxs("div", { className: "flex justify-end gap-2", children: [m.jsx(ct, { variant: "outline", size: "sm", onClick: (a) => {
    a.stopPropagation(), n(`/agents/test?id=${i.id}`);
  }, children: "Test" }), m.jsx(ct, { variant: "outline", size: "sm", onClick: (a) => {
    a.stopPropagation(), n(`/agents/new?id=${i.id}`);
  }, children: "Edit" })] }) }];
  return m.jsxs("div", { className: "space-y-8", children: [m.jsxs("div", { className: "flex items-center justify-between", children: [m.jsxs("div", { children: [m.jsx("h1", { className: "text-3xl font-bold text-white", children: "Agents" }), m.jsx("p", { className: "text-slate-400 mt-2", children: "Manage and deploy your conversational AI agents." })] }), m.jsxs(ct, { onClick: () => n("/agents/new"), className: "gap-2", children: [m.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [m.jsx("path", { d: "M5 12h14" }), m.jsx("path", { d: "M12 5v14" })] }), "New Agent"] })] }), m.jsx(Et, { className: "!p-0 border-none bg-transparent", children: m.jsx(hm, { columns: r, data: e, onRowClick: (i) => n(`/agents/new?id=${i.id}`) }) })] });
}, rf = ["NATF0.pt", "NATF1.pt", "NATF2.pt", "NATF3.pt", "NATM0.pt", "NATM1.pt", "NATM2.pt", "NATM3.pt", "VARF0.pt", "VARF1.pt", "VARF2.pt", "VARF3.pt", "VARF4.pt", "VARM0.pt", "VARM1.pt", "VARM2.pt", "VARM3.pt", "VARM4.pt"], vx = [{ label: "Assistant (default)", text: "You are a wise and friendly teacher. Answer questions or provide advice in a clear and engaging way." }, { label: "Medical office (service)", text: "You work for Dr. Jones's medical office, and you are receiving calls to record information for new patients. Information: Record full name, date of birth, any medication allergies, tobacco smoking history, alcohol consumption history, and any prior medical conditions. Assure the patient that this information will be confidential, if they ask." }, { label: "Bank (service)", text: "You work for First Neuron Bank which is a bank and your name is Alexis Kim. Information: The customer's transaction for $1,200 at Home Depot was declined. Verify customer identity. The transaction was flagged due to unusual location (transaction attempted in Miami, FL; customer normally transacts in Seattle, WA)." }, { label: "Astronaut (fun)", text: "You enjoy having a good conversation. Have a technical discussion about fixing a reactor core on a spaceship to Mars. You are an astronaut on a Mars mission. Your name is Alex. You are already dealing with a reactor core meltdown on a Mars mission. Several ship systems are failing, and continued instability will lead to catastrophic failure. You explain what is happening and you urgently ask for help thinking through how to stabilize the reactor." }], gx = () => {
  const [e] = fm(), t = e.get("id"), n = Mr(), [r, i] = k.useState(""), [a, o] = k.useState(""), [s, l] = k.useState(rf[0]);
  k.useEffect(() => {
    if (t) {
      const h = mm(t);
      h && (i(h.name), o(h.systemPrompt), l(h.voice));
    }
  }, [t]);
  const c = (h) => {
    if (!r) return alert("Please enter an agent name");
    const g = { id: t || Date.now().toString(), name: r, systemPrompt: a, voice: s, status: h, lastUpdated: (/* @__PURE__ */ new Date()).toLocaleDateString() };
    nf(g), n("/agents");
  }, f = () => {
    const h = t || "temp-" + Date.now(), g = { id: h, name: r, systemPrompt: a, voice: s, status: "Draft", lastUpdated: (/* @__PURE__ */ new Date()).toLocaleDateString() };
    nf(g), n(`/agents/test?id=${h}`);
  };
  return m.jsxs("div", { className: "space-y-8", children: [m.jsxs("div", { className: "flex items-center gap-4", children: [m.jsx(ct, { variant: "outline", size: "sm", onClick: () => n("/agents"), children: m.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: m.jsx("path", { d: "m15 18-6-6 6-6" }) }) }), m.jsx("h1", { className: "text-3xl font-bold text-white", children: t ? "Edit Agent" : "Create New Agent" })] }), m.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [m.jsx("div", { className: "lg:col-span-2 space-y-6", children: m.jsx(Et, { title: "Agent Configuration", description: "Define how your agent behaves and who it is.", children: m.jsxs("div", { className: "space-y-6", children: [m.jsx(wi, { label: "Agent Name", placeholder: "e.g. Customer Support AI", value: r, onChange: (h) => i(h.target.value) }), m.jsxs("div", { className: "space-y-2", children: [m.jsx("label", { className: "block text-sm font-medium text-slate-300", children: "System Prompt" }), m.jsx("div", { className: "flex flex-wrap gap-2 mb-3", children: vx.map((h) => m.jsx("button", { onClick: () => o(h.text), className: "px-3 py-1 text-[10px] bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-full border border-slate-700 transition-colors", children: h.label }, h.label)) }), m.jsx(wi, { multiline: true, placeholder: "Enter detailed instructions for the AI...", value: a, onChange: (h) => o(h.target.value), className: "min-h-[200px]" })] })] }) }) }), m.jsxs("div", { className: "space-y-6", children: [m.jsx(Et, { title: "Voice & Output", description: "Select the personality of the voice.", children: m.jsxs("div", { className: "space-y-6", children: [m.jsxs("div", { className: "space-y-1.5", children: [m.jsx("label", { className: "block text-sm font-medium text-slate-300", children: "Select Voice" }), m.jsx("select", { value: s, onChange: (h) => l(h.target.value), className: "w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all", children: rf.map((h) => m.jsx("option", { value: h, children: h.replace(".pt", "").replace(/^NAT/, "NATURAL_").replace(/^VAR/, "VARIETY_") }, h)) })] }), m.jsx("div", { className: "p-4 bg-slate-800/50 rounded-lg border border-slate-700", children: m.jsxs("p", { className: "text-xs text-slate-400 leading-relaxed font-mono", children: [s.includes("F") ? "Female" : "Male", " voice with ", s.startsWith("NAT") ? "natural" : "variety", " intonation."] }) })] }) }), m.jsxs("div", { className: "space-y-3", children: [m.jsx(ct, { className: "w-full", onClick: () => c("Live"), children: "Publish Agent" }), m.jsx(ct, { variant: "outline", className: "w-full", onClick: () => c("Draft"), children: "Save Draft" }), m.jsx("div", { className: "h-px bg-slate-800 my-2" }), m.jsxs(ct, { variant: "secondary", className: "w-full gap-2", onClick: f, children: [m.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [m.jsx("path", { d: "M10 2v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2" }), m.jsx("path", { d: "M7 7a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1Z" }), m.jsx("path", { d: "M10 13h4" }), m.jsx("path", { d: "M10 17h4" })] }), "Test Connection"] })] })] })] })] });
}, yx = "/assets/audio-processor-BUNQrM5u.js", xx = { 0: 0 }, wx = { 0: 0 }, lu = { start: 0, endTurn: 1, pause: 2, restart: 3 }, kx = (e) => {
  switch (e.type) {
    case "handshake":
      return new Uint8Array([0, xx[e.version], wx[e.model]]);
    case "audio":
      return new Uint8Array([1, ...e.data]);
    case "text":
      return new Uint8Array([2, ...new TextEncoder().encode(e.data)]);
    case "control":
      return new Uint8Array([3, lu[e.action]]);
    case "metadata":
      return new Uint8Array([4, ...new TextEncoder().encode(JSON.stringify(e.data))]);
    case "error":
      return new Uint8Array([5, ...new TextEncoder().encode(e.data)]);
    case "ping":
      return new Uint8Array([6]);
  }
}, Cs = (e) => {
  const t = e[0], n = e.slice(1);
  switch (t) {
    case 0:
      return { type: "handshake", version: 0, model: 0 };
    case 1:
      return { type: "audio", data: n };
    case 2:
      return { type: "text", data: new TextDecoder().decode(n) };
    case 3: {
      const r = Object.keys(lu).find((i) => lu[i] === n[0]);
      if (!r) throw new Error("Unknown control message");
      return { type: "control", action: r };
    }
    case 4:
      return { type: "metadata", data: JSON.parse(new TextDecoder().decode(n)) };
    case 5:
      return { type: "error", data: new TextDecoder().decode(n) };
    case 6:
      return { type: "ping" };
    default:
      throw console.log(t), new Error("Unknown message type");
  }
}, Sx = ({ onMessage: e, uri: t, onDisconnect: n }) => {
  const r = k.useRef(null), i = k.useRef(null), [a, o] = k.useState("disconnected"), s = k.useCallback((w) => {
    if (!i.current || a !== "connected") {
      console.log("socket not connected");
      return;
    }
    i.current.send(kx(w));
  }, [i, a]), l = k.useCallback(() => {
    console.log("connected, now waiting for handshake."), o("connecting");
  }, [o]), c = k.useCallback((w) => {
    const E = w.target;
    console.log("disconnected"), o("disconnected"), n && n(), i.current === E ? (console.log("disconnected (current socket)"), i.current = null, o("disconnected"), n == null ? void 0 : n()) : console.log("disconnected (stale socket ignored)");
  }, [n]), f = k.useCallback((w) => {
    r.current = Date.now();
    const E = new Uint8Array(w.data), b = Cs(E);
    b.type == "handshake" && (console.log("Handshake received, let's rocknroll."), o("connected")), e && e(b);
  }, [e, o]), h = k.useCallback(() => {
    i.current && (console.log("closing existing socket before creating new one"), i.current.close());
    const w = new WebSocket(t);
    w.binaryType = "arraybuffer", w.addEventListener("open", l), w.addEventListener("close", c), w.addEventListener("message", f), i.current = w, r.current = Date.now(), console.log("Socket created", w);
  }, [t, e, l, c, f]), g = k.useCallback(() => {
    i.current && (i.current.close(), i.current = null), o("disconnected");
  }, []);
  return k.useEffect(() => {
    if (a !== "connected") return;
    const w = setInterval(() => {
      var _a2;
      r.current && Date.now() - r.current > 1e4 && (console.log("closing socket due to inactivity", i.current), (_a2 = i.current) == null ? void 0 : _a2.close());
    }, 500);
    return () => {
      clearInterval(w);
    };
  }, [a, c]), { socketStatus: a, socket: i.current, sendMessage: s, start: h, stop: g, setSocketStatus: o };
}, vm = k.createContext({ socketStatus: "disconnected", socket: null, sendMessage: () => {
} }), Ba = () => k.useContext(vm), gm = k.createContext(null), ym = () => {
  const e = k.useContext(gm);
  if (!e) throw new Error("useMediaContext must be used within a MediaContextProvider");
  return e;
};
let ba = null;
const _x = () => {
  const e = new Uint8Array([79, 112, 117, 115, 72, 101, 97, 100, 1, 1, 56, 1, 128, 187, 0, 0, 0, 0, 0]), t = new Uint8Array([79, 103, 103, 83, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 19]), n = new Uint8Array(t.length + e.length);
  return n.set(t, 0), n.set(e, t.length), n;
}, xm = () => {
  const e = new Worker(new URL("/assets/decoderWorker.min-BhsGq-5k.js", import.meta.url));
  return e.onerror = (t) => {
    console.error("Decoder worker error:", t.message), ba = new Error(t.message);
  }, e;
}, wm = (e, t) => {
  e.postMessage({ command: "init", bufferLength: 960 * t / 24e3, decoderSampleRate: 24e3, outputBufferSampleRate: t, resampleQuality: 0 }), setTimeout(() => {
    const n = _x();
    console.log("Sending warmup BOS page to decoder"), e.postMessage({ command: "decode", pages: n });
  }, 100);
};
let Sn = null, Qn = null, Jo = null;
const Ex = (e) => Qn && Jo === e ? (console.log("Using existing prewarmed worker"), Qn) : (Sn && Sn.terminate(), console.log("Creating and prewarming decoder worker"), ba = null, Sn = xm(), Jo = e, wm(Sn, e), Qn = new Promise((t) => {
  setTimeout(() => {
    console.log("Prewarmed decoder worker ready"), t();
  }, 1e3);
}), Qn), Cx = async () => {
  if (!Sn || !Qn) return null;
  if (await Qn, ba) return console.warn("Prewarmed worker had errors, will create fresh one"), Sn.terminate(), Sn = null, Qn = null, Jo = null, ba = null, null;
  const e = Sn;
  return Sn = null, Qn = null, Jo = null, e;
}, Tx = () => xm(), bx = (e, t) => new Promise((n) => {
  console.log("Starting decoder initialization"), ba = null, wm(e, t), setTimeout(() => {
    console.log("Decoder initialization complete"), n();
  }, 1e3);
}), Px = ({ setGetAudioStats: e }) => {
  const { socket: t, socketStatus: n } = Ba(), { startRecording: r, stopRecording: i, audioContext: a, worklet: o, micDuration: s, actualAudioPlayed: l } = ym(), c = k.useRef(a.current.createAnalyser());
  o.current.connect(c.current);
  const f = k.useRef(null), h = k.useRef(null), [g, w] = k.useState(false), [E, b] = k.useState(false), I = k.useRef(0), x = k.useRef(0), v = k.useRef({ totalAudioPlayed: 0, actualAudioPlayed: 0, delay: 0, minDelay: 0, maxDelay: 0 }), S = k.useCallback(async (T) => {
    x.current += T.length / a.current.sampleRate, o.current.port.postMessage({ frame: T, type: "audio", micDuration: s.current });
  }, []), A = k.useCallback((T) => {
    v.current = T.data, l.current = v.current.actualAudioPlayed;
  }, []);
  o.current.port.onmessage = A;
  const M = k.useCallback(() => ({ playedAudioDuration: v.current.actualAudioPlayed, delay: v.current.delay, minPlaybackDelay: v.current.minDelay, maxPlaybackDelay: v.current.maxDelay, missedAudioDuration: v.current.totalAudioPlayed - v.current.actualAudioPlayed, totalAudioMessages: I.current }), []), z = k.useCallback((T) => {
    T.data && S(T.data[0]);
  }, [S]);
  let _ = 0;
  const R = k.useCallback((T) => {
    if (!h.current) {
      console.warn("Decoder worker not ready, dropping audio packet");
      return;
    }
    if (_ < 5) {
      const L = T.length >= 4 && T[0] === 79 && T[1] === 103 && T[2] === 103 && T[3] === 83;
      console.log(Date.now() % 1e3, "Got NETWORK message", s.current - v.current.actualAudioPlayed, _++, "size:", T.length, "hasOggS:", L);
    }
    h.current.postMessage({ command: "decode", pages: T }, [T.buffer]);
  }, []), V = k.useCallback((T) => {
    const L = new Uint8Array(T.data), O = Cs(L);
    O.type === "audio" && (R(O.data), I.current++);
  }, [R]);
  return k.useEffect(() => {
    const T = t;
    if (!(!T || n !== "connected" || !g)) return o.current.port.postMessage({ type: "reset" }), console.log(Date.now() % 1e3, "Should start in a bit - decoder ready:", g), r(), T.addEventListener("message", V), I.current = 0, () => {
      console.log("Stop recording called in unknown function."), i(), f.current = null, T.removeEventListener("message", V);
    };
  }, [t, n, g]), k.useEffect(() => {
    e && e(M);
  }, [e, M]), k.useEffect(() => {
    let T = true, L = null;
    return (async () => {
      const $ = await Cx();
      T && ($ ? (console.log("Using prewarmed decoder worker"), L = $) : (console.log("No prewarmed worker available, creating fresh one"), L = Tx()), h.current = L, L.onmessage = z, $ ? (console.log("Prewarmed decoder worker ready, setting decoderReady=true"), w(true)) : (await bx(L, a.current.sampleRate), T && (console.log("Fresh decoder worker ready, setting decoderReady=true"), w(true))));
    })(), () => {
      T = false, console.log("Terminating decoder worker"), L && L.terminate(), h.current = null, w(false);
    };
  }, [z]), { decodeAudio: R, analyser: c, getAudioStats: M, hasCriticalDelay: E, setHasCriticalDelay: b };
}, km = (e, t, n) => Math.min(Math.max(e, t), n), af = 255, Nx = ({ analyser: e, parent: t, theme: n }) => {
  const [r, i] = k.useState(t.current ? Math.min(t.current.clientWidth, t.current.clientHeight) : 0), a = k.useRef(null), o = k.useRef(null), { socketStatus: s } = Ba(), l = k.useCallback((f, h, g, w, E) => {
    const b = Math.floor(f * 0.95), I = Math.sqrt(w.reduce((A, M) => A + M * M, 0) / w.length), v = km(I * 1.4, I, af) / af, S = (s === "connected" ? 0.3 + 0.7 * v : v) * b / 2;
    E.clearRect(h - f / 2, g - f / 2, f, f), E.fillStyle = n === "dark" ? "#000000" : "#fafafa", E.fillRect(h - f / 2, g - f / 2, f, f), E.beginPath(), E.fillStyle = "#4E8800", E.arc(h, g, S, 0, 2 * Math.PI), E.fill(), E.closePath(), s === "connected" && (E.beginPath(), E.arc(h, g, b / 6, 0, 2 * Math.PI), E.fillStyle = "#76B900", E.fill(), E.closePath()), E.beginPath(), E.arc(h, g, b / 2, 0, 2 * Math.PI), E.strokeStyle = n === "dark" ? "white" : "black", E.lineWidth = f / 50, E.stroke(), E.closePath();
  }, [s]), c = k.useCallback(() => {
    const f = t.current ? Math.min(t.current.clientWidth, t.current.clientHeight) : 0;
    if (f !== r && i(f), a.current = window.requestAnimationFrame(() => c()), !o.current) {
      console.log("Canvas not found");
      return;
    }
    const h = o.current.getContext("2d"), g = new Uint8Array(140);
    if (e == null ? void 0 : e.getByteFrequencyData(g), !h) {
      console.log("Canvas context not found");
      return;
    }
    const w = f / 2, E = f / 2;
    l(f, w, E, g, h);
  }, [e, s, r, t]);
  return k.useEffect(() => {
    if (e) return e.smoothingTimeConstant = 0.95, c(), () => {
      a.current && cancelAnimationFrame(a.current);
    };
  }, [c, e]), m.jsx("canvas", { className: "max-h-full max-w-full", ref: o, width: r, height: r });
}, Rx = ({ setGetAudioStats: e, theme: t }) => {
  const { analyser: n, hasCriticalDelay: r, setHasCriticalDelay: i } = Px({ setGetAudioStats: e }), a = k.useRef(null);
  return m.jsxs(m.Fragment, { children: [r && m.jsxs("div", { className: "fixed left-0 top-0 flex w-screen justify-between bg-red-500 p-2 text-center", children: [m.jsx("p", { children: "A connection issue has been detected, you've been reconnected" }), m.jsx("button", { onClick: async () => {
    i(false);
  }, className: "bg-white p-1 text-black", children: "Dismiss" })] }), m.jsx("div", { className: "server-audio h-4/6 aspect-square", ref: a, children: m.jsx(Nx, { analyser: n.current, parent: a, theme: t }) })] });
};
var Sm = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(typeof self < "u" ? self : wt, function() {
    return function(n) {
      var r = {};
      function i(a) {
        if (r[a]) return r[a].exports;
        var o = r[a] = { i: a, l: false, exports: {} };
        return n[a].call(o.exports, o, o.exports, i), o.l = true, o.exports;
      }
      return i.m = n, i.c = r, i.d = function(a, o, s) {
        i.o(a, o) || Object.defineProperty(a, o, { enumerable: true, get: s });
      }, i.r = function(a) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(a, "__esModule", { value: true });
      }, i.t = function(a, o) {
        if (1 & o && (a = i(a)), 8 & o || 4 & o && typeof a == "object" && a && a.__esModule) return a;
        var s = /* @__PURE__ */ Object.create(null);
        if (i.r(s), Object.defineProperty(s, "default", { enumerable: true, value: a }), 2 & o && typeof a != "string") for (var l in a) i.d(s, l, (function(c) {
          return a[c];
        }).bind(null, l));
        return s;
      }, i.n = function(a) {
        var o = a && a.__esModule ? function() {
          return a.default;
        } : function() {
          return a;
        };
        return i.d(o, "a", o), o;
      }, i.o = function(a, o) {
        return Object.prototype.hasOwnProperty.call(a, o);
      }, i.p = "", i(i.s = 0);
    }([function(n, r, i) {
      (function(a) {
        function o(c, f) {
          if (c == null) return {};
          var h, g, w = function(b, I) {
            if (b == null) return {};
            var x, v, S = {}, A = Object.keys(b);
            for (v = 0; v < A.length; v++) x = A[v], I.indexOf(x) >= 0 || (S[x] = b[x]);
            return S;
          }(c, f);
          if (Object.getOwnPropertySymbols) {
            var E = Object.getOwnPropertySymbols(c);
            for (g = 0; g < E.length; g++) h = E[g], f.indexOf(h) >= 0 || Object.prototype.propertyIsEnumerable.call(c, h) && (w[h] = c[h]);
          }
          return w;
        }
        var s = a.AudioContext || a.webkitAudioContext, l = function c() {
          var f = this, h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          if (!c.isRecordingSupported()) throw new Error("Recording is not supported in this browser");
          this.state = "inactive", this.config = Object.assign({ bufferLength: 4096, encoderApplication: 2049, encoderFrameSize: 20, encoderPath: "encoderWorker.min.js", encoderSampleRate: 48e3, maxFramesPerPage: 40, mediaTrackConstraints: true, monitorGain: 0, numberOfChannels: 1, recordingGain: 1, resampleQuality: 3, streamPages: false, wavBitDepth: 16, sourceNode: { context: null } }, h), this.encodedSamplePosition = 0, this.initAudioContext(), this.initialize = this.initWorklet().then(function() {
            return f.initEncoder();
          });
        };
        l.isRecordingSupported = function() {
          var c = a.navigator && a.navigator.mediaDevices && a.navigator.mediaDevices.getUserMedia;
          return s && c && a.WebAssembly;
        }, l.version = "8.0.5", l.prototype.clearStream = function() {
          this.stream && (this.stream.getTracks ? this.stream.getTracks().forEach(function(c) {
            return c.stop();
          }) : this.stream.stop());
        }, l.prototype.close = function() {
          return this.monitorGainNode.disconnect(), this.recordingGainNode.disconnect(), this.sourceNode && this.sourceNode.disconnect(), this.clearStream(), this.encoder && (this.encoderNode.disconnect(), this.encoder.postMessage({ command: "close" })), this.config.sourceNode.context ? Promise.resolve() : this.audioContext.close();
        }, l.prototype.encodeBuffers = function(c) {
          if (this.state === "recording") {
            for (var f = [], h = 0; h < c.numberOfChannels; h++) f[h] = c.getChannelData(h);
            this.encoder.postMessage({ command: "encode", buffers: f });
          }
        }, l.prototype.initAudioContext = function() {
          this.audioContext = this.config.sourceNode.context ? this.config.sourceNode.context : new s(), this.monitorGainNode = this.audioContext.createGain(), this.setMonitorGain(this.config.monitorGain), this.recordingGainNode = this.audioContext.createGain(), this.setRecordingGain(this.config.recordingGain);
        }, l.prototype.initEncoder = function() {
          var c = this;
          this.audioContext.audioWorklet ? (this.encoderNode = new AudioWorkletNode(this.audioContext, "encoder-worklet", { numberOfOutputs: 0 }), this.encoder = this.encoderNode.port) : (console.log("audioWorklet support not detected. Falling back to scriptProcessor"), this.encodeBuffers = function() {
            return delete c.encodeBuffers;
          }, this.encoderNode = this.audioContext.createScriptProcessor(this.config.bufferLength, this.config.numberOfChannels, this.config.numberOfChannels), this.encoderNode.onaudioprocess = function(f) {
            var h = f.inputBuffer;
            return c.encodeBuffers(h);
          }, this.encoderNode.connect(this.audioContext.destination), this.encoder = new a.Worker(this.config.encoderPath));
        }, l.prototype.initSourceNode = function() {
          var c = this;
          return this.config.sourceNode.context ? (this.sourceNode = this.config.sourceNode, Promise.resolve()) : a.navigator.mediaDevices.getUserMedia({ audio: this.config.mediaTrackConstraints }).then(function(f) {
            c.stream = f, c.sourceNode = c.audioContext.createMediaStreamSource(f);
          });
        }, l.prototype.initWorker = function() {
          var c = this, f = (this.config.streamPages ? this.streamPage : this.storePage).bind(this);
          return this.recordedPages = [], this.totalLength = 0, new Promise(function(h) {
            c.encoder.addEventListener("message", function E(b) {
              var I = b.data;
              switch (I.message) {
                case "ready":
                  h();
                  break;
                case "page":
                  c.encodedSamplePosition = I.samplePosition, f(I.page);
                  break;
                case "done":
                  c.encoder.removeEventListener("message", E), c.finish();
              }
            }), c.encoder.start && c.encoder.start();
            var g = c.config, w = (g.sourceNode, o(g, ["sourceNode"]));
            c.encoder.postMessage(Object.assign({ command: "init", originalSampleRate: c.audioContext.sampleRate, wavSampleRate: c.audioContext.sampleRate }, w));
          });
        }, l.prototype.initWorklet = function() {
          return this.audioContext.audioWorklet ? this.audioContext.audioWorklet.addModule(this.config.encoderPath) : Promise.resolve();
        }, l.prototype.pause = function(c) {
          var f = this;
          if (this.state === "recording") return this.state = "paused", this.recordingGainNode.disconnect(), c && this.config.streamPages ? new Promise(function(h) {
            f.encoder.addEventListener("message", function g(w) {
              w.data.message === "flushed" && (f.encoder.removeEventListener("message", g), f.onpause(), h());
            }), f.encoder.start && f.encoder.start(), f.encoder.postMessage({ command: "flush" });
          }) : (this.onpause(), Promise.resolve());
        }, l.prototype.resume = function() {
          this.state === "paused" && (this.state = "recording", this.recordingGainNode.connect(this.encoderNode), this.onresume());
        }, l.prototype.setRecordingGain = function(c) {
          this.config.recordingGain = c, this.recordingGainNode && this.audioContext && this.recordingGainNode.gain.setTargetAtTime(c, this.audioContext.currentTime, 0.01);
        }, l.prototype.setMonitorGain = function(c) {
          this.config.monitorGain = c, this.monitorGainNode && this.audioContext && this.monitorGainNode.gain.setTargetAtTime(c, this.audioContext.currentTime, 0.01);
        }, l.prototype.start = function() {
          var c = this;
          return this.state === "inactive" ? (this.state = "loading", this.encodedSamplePosition = 0, this.audioContext.resume().then(function() {
            return c.initialize;
          }).then(function() {
            return Promise.all([c.initSourceNode(), c.initWorker()]);
          }).then(function() {
            c.state = "recording", c.encoder.postMessage({ command: "getHeaderPages" }), c.sourceNode.connect(c.monitorGainNode), c.sourceNode.connect(c.recordingGainNode), c.monitorGainNode.connect(c.audioContext.destination), c.recordingGainNode.connect(c.encoderNode), c.onstart();
          }).catch(function(f) {
            throw c.state = "inactive", f;
          })) : Promise.resolve();
        }, l.prototype.stop = function() {
          var c = this;
          return this.state === "paused" || this.state === "recording" ? (this.state = "inactive", this.recordingGainNode.connect(this.encoderNode), this.monitorGainNode.disconnect(), this.clearStream(), new Promise(function(f) {
            c.encoder.addEventListener("message", function h(g) {
              g.data.message === "done" && (c.encoder.removeEventListener("message", h), f());
            }), c.encoder.start && c.encoder.start(), c.encoder.postMessage({ command: "done" });
          })) : Promise.resolve();
        }, l.prototype.storePage = function(c) {
          this.recordedPages.push(c), this.totalLength += c.length;
        }, l.prototype.streamPage = function(c) {
          this.ondataavailable(c);
        }, l.prototype.finish = function() {
          if (!this.config.streamPages) {
            var c = new Uint8Array(this.totalLength);
            this.recordedPages.reduce(function(f, h) {
              return c.set(h, f), f + h.length;
            }, 0), this.ondataavailable(c);
          }
          this.onstop();
        }, l.prototype.ondataavailable = function() {
        }, l.prototype.onpause = function() {
        }, l.prototype.onresume = function() {
        }, l.prototype.onstart = function() {
        }, l.prototype.onstop = function() {
        }, n.exports = l;
      }).call(this, i(1));
    }, function(n, r) {
      var i;
      i = /* @__PURE__ */ function() {
        return this;
      }();
      try {
        i = i || new Function("return this")();
      } catch {
        typeof window == "object" && (i = window);
      }
      n.exports = i;
    }]);
  });
})(Sm);
var Ax = Sm.exports;
const Dx = pu(Ax), jx = "/assets/encoderWorker.min-DpsJ02BN.js", Ix = ({ constraints: e, onDataChunk: t, onRecordingStart: n = () => {
}, onRecordingStop: r = () => {
} }) => {
  const { stereoMerger: i, audioContext: a, micDuration: o } = ym(), [s, l] = k.useState(null), [c, f] = k.useState("IDLE"), h = k.useRef(null), g = k.useCallback(async () => {
    f("WAITING_FOR_PERMISSION");
    try {
      const b = await window.navigator.mediaDevices.getUserMedia(e);
      return f("IDLE"), b;
    } catch (b) {
      return console.error(b), l(b.name), f("ERROR"), null;
    }
  }, [e, f]), w = k.useCallback(async () => {
    console.log(Date.now() % 1e3, "Starting recording in user audio");
    const b = await g();
    if (b) {
      const I = a.current.createAnalyser(), x = a.current.createMediaStreamSource(b);
      x.connect(I), x.connect(i.current, 0, 1);
      const v = { mediaTrackConstraints: e, encoderPath: jx, bufferLength: Math.round(960 * a.current.sampleRate / 24e3), encoderFrameSize: 20, encoderSampleRate: 24e3, maxFramesPerPage: 2, numberOfChannels: 1, recordingGain: 1, resampleQuality: 3, encoderComplexity: 0, encoderApplication: 2049, streamPages: true };
      let S = 0, A = 0;
      return h.current = new Dx(v), h.current.ondataavailable = (M) => {
        o.current = h.current.encodedSamplePosition / 48e3, S < 5 && (console.log(Date.now() % 1e3, "Mic Data chunk", S++, (h.current.encodedSamplePosition - A) / 48e3, o.current), A = h.current.encodedSamplePosition), t && t(M);
      }, h.current.onstart = () => {
        f("RECORDING"), n();
      }, h.current.onstop = () => {
        f("STOPPED"), x.disconnect(), r(), h.current = null;
      }, h.current && h.current.start(), { analyser: I, mediaStream: b, source: x };
    }
    return { analyser: null, mediaStream: null, source: null };
  }, [f, t, n, r]), E = k.useCallback(() => {
    f("STOPPING"), h.current && h.current.stop();
  }, [f]);
  return { status: c, error: s, startRecordingUser: w, stopRecording: E };
}, of = 255, Lx = ["#265600", "#3A6F00", "#4E8800", "#62A100", "#76B900", "#8DA800", "#A49800", "#BB8700", "#D17600", "#E86600", "#FF5500"], Bx = ({ analyser: e, parent: t, theme: n }) => {
  const [r, i] = k.useState(t.current ? Math.min(t.current.clientWidth, t.current.clientHeight) : 0), a = k.useRef(null), o = k.useRef(null), s = k.useCallback((f, h, g, w, E, b, I) => {
    const x = E / 10 - I;
    for (let v = 1; v <= 10; v++) {
      const S = g + E + I + Math.min(1, b / 30) - (v * x + v * I);
      f.fillStyle = Lx[v - 1], f.strokeStyle = n === "dark" ? "white" : "black", f.lineWidth = Math.min(1, E / 100), v <= w && f.fillRect(h, S, b, x), f.strokeRect(h, S, b, x);
    }
  }, []), l = k.useCallback((f, h, g, w, E, b) => {
    const I = Math.floor(E / 30), x = Math.floor(b / 30), v = Math.floor(E / 30), S = Math.floor(b - v * 2), A = Math.floor(E / 2.5 - I - v * 2), M = g + E / 2, z = Math.sqrt(h.reduce((V, T) => V + T * T, 0) / h.length), _ = km(z * 1.4, z, of), R = Math.floor(_ * 10 / of);
    f.fillStyle = n === "dark" ? "#000000" : "#fafafa", f.fillRect(g, w, E, b), s(f, M - A - I / 2, w, R, S, A, x), s(f, M + I / 2, w, R, S, A, x);
  }, [e, s]), c = k.useCallback(() => {
    const f = t.current ? Math.min(t.current.clientWidth, t.current.clientHeight) : 0;
    if (f !== r && i(f), a.current = window.requestAnimationFrame(() => c()), !o.current) {
      console.log("Canvas not found");
      return;
    }
    const h = new Uint8Array(140);
    e == null ? void 0 : e.getByteFrequencyData(h);
    const g = o.current.getContext("2d");
    if (!g) {
      console.log("Canvas context not found");
      return;
    }
    g.clearRect(0, 0, o.current.width, o.current.height), l(g, h, 0, 0, f, f);
  }, [e, r, s, t, l]);
  return k.useEffect(() => (c(), () => {
    a.current && cancelAnimationFrame(a.current);
  }), [c, e]), m.jsx("canvas", { ref: o, className: "max-h-full max-w-full", width: r, height: r });
}, Mx = ({ theme: e }) => {
  const [t, n] = k.useState(null), { sendMessage: r, socketStatus: i } = Ba(), a = k.useRef(null), o = k.useCallback(() => {
    console.log("Recording started");
  }, []), s = k.useCallback(() => {
    console.log("Recording stopped");
  }, []), l = k.useCallback((h) => {
    i === "connected" && r({ type: "audio", data: h });
  }, [r, i]), { startRecordingUser: c, stopRecording: f } = Ix({ constraints: { audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true, channelCount: 1 }, video: false }, onDataChunk: l, onRecordingStart: o, onRecordingStop: s });
  return k.useEffect(() => {
    let h;
    return i === "connected" && c().then((g) => {
      g && (h = g, n(g.analyser));
    }), () => {
      var _a2;
      console.log("Stop recording called from somewhere else."), f(), (_a2 = h == null ? void 0 : h.source) == null ? void 0 : _a2.disconnect();
    };
  }, [c, f, i]), m.jsx("div", { className: "user-audio h-5/6 aspect-square", ref: a, children: m.jsx(Bx, { theme: e, analyser: t, parent: a }) });
}, Ox = ({ children: e, className: t, ...n }) => m.jsx("button", { className: `rounded-lg shadow-sm disabled:bg-gray-100 bg-white hover:text-black py-2 px-3 active:text-black ${t ?? ""}`, ...n, children: e }), Fx = ({ getAudioStats: e }) => {
  const [t, n] = k.useState(e.current()), r = k.useRef(0), i = k.useRef(0), a = 0.85;
  let o = (s) => {
    let l = Math.floor(s / 60).toString(), c = (Math.floor(s) % 60).toString(), f = Math.floor(100 * (s - Math.floor(s))).toString();
    return c.length < 2 && (c = "0" + c), f.length < 2 && (f = "0" + f), l + ":" + c + "." + f;
  };
  return k.useEffect(() => {
    const s = setInterval(() => {
      const l = e.current();
      n(l), i.current *= a, i.current += (1 - a) * 1, r.current *= a, r.current += (1 - a) * l.delay;
    }, 141);
    return () => {
      clearInterval(s);
    };
  }, []), m.jsxs("div", { className: "w-full rounded-lg text-zinc-500 p-2", children: [m.jsx("h2", { className: "text-md pb-2", children: "Server Audio Stats" }), m.jsx("table", { children: m.jsxs("tbody", { children: [m.jsxs("tr", { children: [m.jsx("td", { className: "text-md pr-2", children: "Audio played: " }), m.jsx("td", { children: o(t.playedAudioDuration) })] }), m.jsxs("tr", { children: [m.jsx("td", { className: "text-md pr-2", children: "Missed audio: " }), m.jsx("td", { children: o(t.missedAudioDuration) })] }), m.jsxs("tr", { children: [m.jsx("td", { className: "text-md pr-2", children: "Latency: " }), m.jsx("td", { children: (r.current / i.current).toFixed(3) })] }), m.jsxs("tr", { children: [m.jsx("td", { className: "text-md pr-2", children: "Min/Max buffer: " }), m.jsxs("td", { children: [t.minPlaybackDelay.toFixed(3), " / ", t.maxPlaybackDelay.toFixed(3)] })] })] }) })] });
}, Ux = () => {
  const [e, t] = k.useState([]), [n, r] = k.useState(0), { socket: i } = Ba(), a = k.useCallback((o) => {
    const s = new Uint8Array(o.data), l = Cs(s);
    l.type === "text" && (t((c) => [...c, l.data]), r((c) => c + 1));
  }, []);
  return k.useEffect(() => {
    const o = i;
    if (o) return t([]), o.addEventListener("message", a), () => {
      o.removeEventListener("message", a);
    };
  }, [i]), { text: e, totalTextMessages: n };
}, zx = ({ containerRef: e }) => {
  const { text: t } = Ux(), n = t.length - 1, r = k.useRef(0);
  return k.useEffect(() => {
    e.current && (r.current = e.current.scrollTop, e.current.scroll({ top: e.current.scrollHeight, behavior: "smooth" }));
  }, [t]), m.jsx("div", { className: "h-full w-full max-w-full max-h-full  p-2", children: t.map((i, a) => m.jsx("span", { className: `${a === n ? "font-bold" : "font-normal"}`, children: i }, a)) });
};
var Ne;
(function(e) {
  e.assertEqual = (i) => {
  };
  function t(i) {
  }
  e.assertIs = t;
  function n(i) {
    throw new Error();
  }
  e.assertNever = n, e.arrayToEnum = (i) => {
    const a = {};
    for (const o of i) a[o] = o;
    return a;
  }, e.getValidEnumValues = (i) => {
    const a = e.objectKeys(i).filter((s) => typeof i[i[s]] != "number"), o = {};
    for (const s of a) o[s] = i[s];
    return e.objectValues(o);
  }, e.objectValues = (i) => e.objectKeys(i).map(function(a) {
    return i[a];
  }), e.objectKeys = typeof Object.keys == "function" ? (i) => Object.keys(i) : (i) => {
    const a = [];
    for (const o in i) Object.prototype.hasOwnProperty.call(i, o) && a.push(o);
    return a;
  }, e.find = (i, a) => {
    for (const o of i) if (a(o)) return o;
  }, e.isInteger = typeof Number.isInteger == "function" ? (i) => Number.isInteger(i) : (i) => typeof i == "number" && Number.isFinite(i) && Math.floor(i) === i;
  function r(i, a = " | ") {
    return i.map((o) => typeof o == "string" ? `'${o}'` : o).join(a);
  }
  e.joinValues = r, e.jsonStringifyReplacer = (i, a) => typeof a == "bigint" ? a.toString() : a;
})(Ne || (Ne = {}));
var sf;
(function(e) {
  e.mergeShapes = (t, n) => ({ ...t, ...n });
})(sf || (sf = {}));
const te = Ne.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]), Vn = (e) => {
  switch (typeof e) {
    case "undefined":
      return te.undefined;
    case "string":
      return te.string;
    case "number":
      return Number.isNaN(e) ? te.nan : te.number;
    case "boolean":
      return te.boolean;
    case "function":
      return te.function;
    case "bigint":
      return te.bigint;
    case "symbol":
      return te.symbol;
    case "object":
      return Array.isArray(e) ? te.array : e === null ? te.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? te.promise : typeof Map < "u" && e instanceof Map ? te.map : typeof Set < "u" && e instanceof Set ? te.set : typeof Date < "u" && e instanceof Date ? te.date : te.object;
    default:
      return te.unknown;
  }
}, H = Ne.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
class Dn extends Error {
  get errors() {
    return this.issues;
  }
  constructor(t) {
    super(), this.issues = [], this.addIssue = (r) => {
      this.issues = [...this.issues, r];
    }, this.addIssues = (r = []) => {
      this.issues = [...this.issues, ...r];
    };
    const n = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, n) : this.__proto__ = n, this.name = "ZodError", this.issues = t;
  }
  format(t) {
    const n = t || function(a) {
      return a.message;
    }, r = { _errors: [] }, i = (a) => {
      for (const o of a.issues) if (o.code === "invalid_union") o.unionErrors.map(i);
      else if (o.code === "invalid_return_type") i(o.returnTypeError);
      else if (o.code === "invalid_arguments") i(o.argumentsError);
      else if (o.path.length === 0) r._errors.push(n(o));
      else {
        let s = r, l = 0;
        for (; l < o.path.length; ) {
          const c = o.path[l];
          l === o.path.length - 1 ? (s[c] = s[c] || { _errors: [] }, s[c]._errors.push(n(o))) : s[c] = s[c] || { _errors: [] }, s = s[c], l++;
        }
      }
    };
    return i(this), r;
  }
  static assert(t) {
    if (!(t instanceof Dn)) throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, Ne.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(t = (n) => n.message) {
    const n = {}, r = [];
    for (const i of this.issues) if (i.path.length > 0) {
      const a = i.path[0];
      n[a] = n[a] || [], n[a].push(t(i));
    } else r.push(t(i));
    return { formErrors: r, fieldErrors: n };
  }
  get formErrors() {
    return this.flatten();
  }
}
Dn.create = (e) => new Dn(e);
const uu = (e, t) => {
  let n;
  switch (e.code) {
    case H.invalid_type:
      e.received === te.undefined ? n = "Required" : n = `Expected ${e.expected}, received ${e.received}`;
      break;
    case H.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, Ne.jsonStringifyReplacer)}`;
      break;
    case H.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${Ne.joinValues(e.keys, ", ")}`;
      break;
    case H.invalid_union:
      n = "Invalid input";
      break;
    case H.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${Ne.joinValues(e.options)}`;
      break;
    case H.invalid_enum_value:
      n = `Invalid enum value. Expected ${Ne.joinValues(e.options)}, received '${e.received}'`;
      break;
    case H.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case H.invalid_return_type:
      n = "Invalid function return type";
      break;
    case H.invalid_date:
      n = "Invalid date";
      break;
    case H.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : Ne.assertNever(e.validation) : e.validation !== "regex" ? n = `Invalid ${e.validation}` : n = "Invalid";
      break;
    case H.too_small:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "bigint" ? n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : n = "Invalid input";
      break;
    case H.too_big:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? n = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : n = "Invalid input";
      break;
    case H.custom:
      n = "Invalid input";
      break;
    case H.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case H.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case H.not_finite:
      n = "Number must be finite";
      break;
    default:
      n = t.defaultError, Ne.assertNever(e);
  }
  return { message: n };
};
let Vx = uu;
function Wx() {
  return Vx;
}
const Hx = (e) => {
  const { data: t, path: n, errorMaps: r, issueData: i } = e, a = [...n, ...i.path || []], o = { ...i, path: a };
  if (i.message !== void 0) return { ...i, path: a, message: i.message };
  let s = "";
  const l = r.filter((c) => !!c).slice().reverse();
  for (const c of l) s = c(o, { data: t, defaultError: s }).message;
  return { ...i, path: a, message: s };
};
function Q(e, t) {
  const n = Wx(), r = Hx({ issueData: t, data: e.data, path: e.path, errorMaps: [e.common.contextualErrorMap, e.schemaErrorMap, n, n === uu ? void 0 : uu].filter((i) => !!i) });
  e.common.issues.push(r);
}
class Ft {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(t, n) {
    const r = [];
    for (const i of n) {
      if (i.status === "aborted") return he;
      i.status === "dirty" && t.dirty(), r.push(i.value);
    }
    return { status: t.value, value: r };
  }
  static async mergeObjectAsync(t, n) {
    const r = [];
    for (const i of n) {
      const a = await i.key, o = await i.value;
      r.push({ key: a, value: o });
    }
    return Ft.mergeObjectSync(t, r);
  }
  static mergeObjectSync(t, n) {
    const r = {};
    for (const i of n) {
      const { key: a, value: o } = i;
      if (a.status === "aborted" || o.status === "aborted") return he;
      a.status === "dirty" && t.dirty(), o.status === "dirty" && t.dirty(), a.value !== "__proto__" && (typeof o.value < "u" || i.alwaysSet) && (r[a.value] = o.value);
    }
    return { status: t.value, value: r };
  }
}
const he = Object.freeze({ status: "aborted" }), qi = (e) => ({ status: "dirty", value: e }), Xt = (e) => ({ status: "valid", value: e }), lf = (e) => e.status === "aborted", uf = (e) => e.status === "dirty", ki = (e) => e.status === "valid", es = (e) => typeof Promise < "u" && e instanceof Promise;
var ie;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(ie || (ie = {}));
class sr {
  constructor(t, n, r, i) {
    this._cachedPath = [], this.parent = t, this.data = n, this._path = r, this._key = i;
  }
  get path() {
    return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const cf = (e, t) => {
  if (ki(t)) return { success: true, data: t.value };
  if (!e.common.issues.length) throw new Error("Validation failed but no issues detected.");
  return { success: false, get error() {
    if (this._error) return this._error;
    const n = new Dn(e.common.issues);
    return this._error = n, this._error;
  } };
};
function we(e) {
  if (!e) return {};
  const { errorMap: t, invalid_type_error: n, required_error: r, description: i } = e;
  if (t && (n || r)) throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return t ? { errorMap: t, description: i } : { errorMap: (o, s) => {
    const { message: l } = e;
    return o.code === "invalid_enum_value" ? { message: l ?? s.defaultError } : typeof s.data > "u" ? { message: l ?? r ?? s.defaultError } : o.code !== "invalid_type" ? { message: s.defaultError } : { message: l ?? n ?? s.defaultError };
  }, description: i };
}
class be {
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return Vn(t.data);
  }
  _getOrReturnCtx(t, n) {
    return n || { common: t.parent.common, data: t.data, parsedType: Vn(t.data), schemaErrorMap: this._def.errorMap, path: t.path, parent: t.parent };
  }
  _processInputParams(t) {
    return { status: new Ft(), ctx: { common: t.parent.common, data: t.data, parsedType: Vn(t.data), schemaErrorMap: this._def.errorMap, path: t.path, parent: t.parent } };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (es(n)) throw new Error("Synchronous parse encountered promise.");
    return n;
  }
  _parseAsync(t) {
    const n = this._parse(t);
    return Promise.resolve(n);
  }
  parse(t, n) {
    const r = this.safeParse(t, n);
    if (r.success) return r.data;
    throw r.error;
  }
  safeParse(t, n) {
    const r = { common: { issues: [], async: (n == null ? void 0 : n.async) ?? false, contextualErrorMap: n == null ? void 0 : n.errorMap }, path: (n == null ? void 0 : n.path) || [], schemaErrorMap: this._def.errorMap, parent: null, data: t, parsedType: Vn(t) }, i = this._parseSync({ data: t, path: r.path, parent: r });
    return cf(r, i);
  }
  "~validate"(t) {
    var _a2, _b;
    const n = { common: { issues: [], async: !!this["~standard"].async }, path: [], schemaErrorMap: this._def.errorMap, parent: null, data: t, parsedType: Vn(t) };
    if (!this["~standard"].async) try {
      const r = this._parseSync({ data: t, path: [], parent: n });
      return ki(r) ? { value: r.value } : { issues: n.common.issues };
    } catch (r) {
      ((_b = (_a2 = r == null ? void 0 : r.message) == null ? void 0 : _a2.toLowerCase()) == null ? void 0 : _b.includes("encountered")) && (this["~standard"].async = true), n.common = { issues: [], async: true };
    }
    return this._parseAsync({ data: t, path: [], parent: n }).then((r) => ki(r) ? { value: r.value } : { issues: n.common.issues });
  }
  async parseAsync(t, n) {
    const r = await this.safeParseAsync(t, n);
    if (r.success) return r.data;
    throw r.error;
  }
  async safeParseAsync(t, n) {
    const r = { common: { issues: [], contextualErrorMap: n == null ? void 0 : n.errorMap, async: true }, path: (n == null ? void 0 : n.path) || [], schemaErrorMap: this._def.errorMap, parent: null, data: t, parsedType: Vn(t) }, i = this._parse({ data: t, path: r.path, parent: r }), a = await (es(i) ? i : Promise.resolve(i));
    return cf(r, a);
  }
  refine(t, n) {
    const r = (i) => typeof n == "string" || typeof n > "u" ? { message: n } : typeof n == "function" ? n(i) : n;
    return this._refinement((i, a) => {
      const o = t(i), s = () => a.addIssue({ code: H.custom, ...r(i) });
      return typeof Promise < "u" && o instanceof Promise ? o.then((l) => l ? true : (s(), false)) : o ? true : (s(), false);
    });
  }
  refinement(t, n) {
    return this._refinement((r, i) => t(r) ? true : (i.addIssue(typeof n == "function" ? n(r, i) : n), false));
  }
  _refinement(t) {
    return new Ei({ schema: this, typeName: pe.ZodEffects, effect: { type: "refinement", refinement: t } });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  constructor(t) {
    this.spa = this.safeParseAsync, this._def = t, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = { version: 1, vendor: "zod", validate: (n) => this["~validate"](n) };
  }
  optional() {
    return ir.create(this, this._def);
  }
  nullable() {
    return Ci.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return gn.create(this);
  }
  promise() {
    return is.create(this, this._def);
  }
  or(t) {
    return ns.create([this, t], this._def);
  }
  and(t) {
    return rs.create(this, t, this._def);
  }
  transform(t) {
    return new Ei({ ...we(this._def), schema: this, typeName: pe.ZodEffects, effect: { type: "transform", transform: t } });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new du({ ...we(this._def), innerType: this, defaultValue: n, typeName: pe.ZodDefault });
  }
  brand() {
    return new hw({ typeName: pe.ZodBranded, type: this, ...we(this._def) });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new fu({ ...we(this._def), innerType: this, catchValue: n, typeName: pe.ZodCatch });
  }
  describe(t) {
    const n = this.constructor;
    return new n({ ...this._def, description: t });
  }
  pipe(t) {
    return vc.create(this, t);
  }
  readonly() {
    return hu.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const $x = /^c[^\s-]{8,}$/i, Zx = /^[0-9a-z]+$/, Gx = /^[0-9A-HJKMNP-TV-Z]{26}$/i, Qx = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Kx = /^[a-z0-9_-]{21}$/i, Yx = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, Xx = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, qx = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Jx = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let ol;
const ew = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, tw = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, nw = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, rw = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, iw = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, aw = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, _m = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", ow = new RegExp(`^${_m}$`);
function Em(e) {
  let t = "[0-5]\\d";
  e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision == null && (t = `${t}(\\.\\d+)?`);
  const n = e.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${t})${n}`;
}
function sw(e) {
  return new RegExp(`^${Em(e)}$`);
}
function lw(e) {
  let t = `${_m}T${Em(e)}`;
  const n = [];
  return n.push(e.local ? "Z?" : "Z"), e.offset && n.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${n.join("|")})`, new RegExp(`^${t}$`);
}
function uw(e, t) {
  return !!((t === "v4" || !t) && ew.test(e) || (t === "v6" || !t) && nw.test(e));
}
function cw(e, t) {
  if (!Yx.test(e)) return false;
  try {
    const [n] = e.split(".");
    if (!n) return false;
    const r = n.replace(/-/g, "+").replace(/_/g, "/").padEnd(n.length + (4 - n.length % 4) % 4, "="), i = JSON.parse(atob(r));
    return !(typeof i != "object" || i === null || "typ" in i && (i == null ? void 0 : i.typ) !== "JWT" || !i.alg || t && i.alg !== t);
  } catch {
    return false;
  }
}
function dw(e, t) {
  return !!((t === "v4" || !t) && tw.test(e) || (t === "v6" || !t) && rw.test(e));
}
class Kn extends be {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== te.string) {
      const a = this._getOrReturnCtx(t);
      return Q(a, { code: H.invalid_type, expected: te.string, received: a.parsedType }), he;
    }
    const r = new Ft();
    let i;
    for (const a of this._def.checks) if (a.kind === "min") t.data.length < a.value && (i = this._getOrReturnCtx(t, i), Q(i, { code: H.too_small, minimum: a.value, type: "string", inclusive: true, exact: false, message: a.message }), r.dirty());
    else if (a.kind === "max") t.data.length > a.value && (i = this._getOrReturnCtx(t, i), Q(i, { code: H.too_big, maximum: a.value, type: "string", inclusive: true, exact: false, message: a.message }), r.dirty());
    else if (a.kind === "length") {
      const o = t.data.length > a.value, s = t.data.length < a.value;
      (o || s) && (i = this._getOrReturnCtx(t, i), o ? Q(i, { code: H.too_big, maximum: a.value, type: "string", inclusive: true, exact: true, message: a.message }) : s && Q(i, { code: H.too_small, minimum: a.value, type: "string", inclusive: true, exact: true, message: a.message }), r.dirty());
    } else if (a.kind === "email") qx.test(t.data) || (i = this._getOrReturnCtx(t, i), Q(i, { validation: "email", code: H.invalid_string, message: a.message }), r.dirty());
    else if (a.kind === "emoji") ol || (ol = new RegExp(Jx, "u")), ol.test(t.data) || (i = this._getOrReturnCtx(t, i), Q(i, { validation: "emoji", code: H.invalid_string, message: a.message }), r.dirty());
    else if (a.kind === "uuid") Qx.test(t.data) || (i = this._getOrReturnCtx(t, i), Q(i, { validation: "uuid", code: H.invalid_string, message: a.message }), r.dirty());
    else if (a.kind === "nanoid") Kx.test(t.data) || (i = this._getOrReturnCtx(t, i), Q(i, { validation: "nanoid", code: H.invalid_string, message: a.message }), r.dirty());
    else if (a.kind === "cuid") $x.test(t.data) || (i = this._getOrReturnCtx(t, i), Q(i, { validation: "cuid", code: H.invalid_string, message: a.message }), r.dirty());
    else if (a.kind === "cuid2") Zx.test(t.data) || (i = this._getOrReturnCtx(t, i), Q(i, { validation: "cuid2", code: H.invalid_string, message: a.message }), r.dirty());
    else if (a.kind === "ulid") Gx.test(t.data) || (i = this._getOrReturnCtx(t, i), Q(i, { validation: "ulid", code: H.invalid_string, message: a.message }), r.dirty());
    else if (a.kind === "url") try {
      new URL(t.data);
    } catch {
      i = this._getOrReturnCtx(t, i), Q(i, { validation: "url", code: H.invalid_string, message: a.message }), r.dirty();
    }
    else a.kind === "regex" ? (a.regex.lastIndex = 0, a.regex.test(t.data) || (i = this._getOrReturnCtx(t, i), Q(i, { validation: "regex", code: H.invalid_string, message: a.message }), r.dirty())) : a.kind === "trim" ? t.data = t.data.trim() : a.kind === "includes" ? t.data.includes(a.value, a.position) || (i = this._getOrReturnCtx(t, i), Q(i, { code: H.invalid_string, validation: { includes: a.value, position: a.position }, message: a.message }), r.dirty()) : a.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : a.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : a.kind === "startsWith" ? t.data.startsWith(a.value) || (i = this._getOrReturnCtx(t, i), Q(i, { code: H.invalid_string, validation: { startsWith: a.value }, message: a.message }), r.dirty()) : a.kind === "endsWith" ? t.data.endsWith(a.value) || (i = this._getOrReturnCtx(t, i), Q(i, { code: H.invalid_string, validation: { endsWith: a.value }, message: a.message }), r.dirty()) : a.kind === "datetime" ? lw(a).test(t.data) || (i = this._getOrReturnCtx(t, i), Q(i, { code: H.invalid_string, validation: "datetime", message: a.message }), r.dirty()) : a.kind === "date" ? ow.test(t.data) || (i = this._getOrReturnCtx(t, i), Q(i, { code: H.invalid_string, validation: "date", message: a.message }), r.dirty()) : a.kind === "time" ? sw(a).test(t.data) || (i = this._getOrReturnCtx(t, i), Q(i, { code: H.invalid_string, validation: "time", message: a.message }), r.dirty()) : a.kind === "duration" ? Xx.test(t.data) || (i = this._getOrReturnCtx(t, i), Q(i, { validation: "duration", code: H.invalid_string, message: a.message }), r.dirty()) : a.kind === "ip" ? uw(t.data, a.version) || (i = this._getOrReturnCtx(t, i), Q(i, { validation: "ip", code: H.invalid_string, message: a.message }), r.dirty()) : a.kind === "jwt" ? cw(t.data, a.alg) || (i = this._getOrReturnCtx(t, i), Q(i, { validation: "jwt", code: H.invalid_string, message: a.message }), r.dirty()) : a.kind === "cidr" ? dw(t.data, a.version) || (i = this._getOrReturnCtx(t, i), Q(i, { validation: "cidr", code: H.invalid_string, message: a.message }), r.dirty()) : a.kind === "base64" ? iw.test(t.data) || (i = this._getOrReturnCtx(t, i), Q(i, { validation: "base64", code: H.invalid_string, message: a.message }), r.dirty()) : a.kind === "base64url" ? aw.test(t.data) || (i = this._getOrReturnCtx(t, i), Q(i, { validation: "base64url", code: H.invalid_string, message: a.message }), r.dirty()) : Ne.assertNever(a);
    return { status: r.value, value: t.data };
  }
  _regex(t, n, r) {
    return this.refinement((i) => t.test(i), { validation: n, code: H.invalid_string, ...ie.errToObj(r) });
  }
  _addCheck(t) {
    return new Kn({ ...this._def, checks: [...this._def.checks, t] });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...ie.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...ie.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...ie.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...ie.errToObj(t) });
  }
  nanoid(t) {
    return this._addCheck({ kind: "nanoid", ...ie.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...ie.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...ie.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...ie.errToObj(t) });
  }
  base64(t) {
    return this._addCheck({ kind: "base64", ...ie.errToObj(t) });
  }
  base64url(t) {
    return this._addCheck({ kind: "base64url", ...ie.errToObj(t) });
  }
  jwt(t) {
    return this._addCheck({ kind: "jwt", ...ie.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...ie.errToObj(t) });
  }
  cidr(t) {
    return this._addCheck({ kind: "cidr", ...ie.errToObj(t) });
  }
  datetime(t) {
    return typeof t == "string" ? this._addCheck({ kind: "datetime", precision: null, offset: false, local: false, message: t }) : this._addCheck({ kind: "datetime", precision: typeof (t == null ? void 0 : t.precision) > "u" ? null : t == null ? void 0 : t.precision, offset: (t == null ? void 0 : t.offset) ?? false, local: (t == null ? void 0 : t.local) ?? false, ...ie.errToObj(t == null ? void 0 : t.message) });
  }
  date(t) {
    return this._addCheck({ kind: "date", message: t });
  }
  time(t) {
    return typeof t == "string" ? this._addCheck({ kind: "time", precision: null, message: t }) : this._addCheck({ kind: "time", precision: typeof (t == null ? void 0 : t.precision) > "u" ? null : t == null ? void 0 : t.precision, ...ie.errToObj(t == null ? void 0 : t.message) });
  }
  duration(t) {
    return this._addCheck({ kind: "duration", ...ie.errToObj(t) });
  }
  regex(t, n) {
    return this._addCheck({ kind: "regex", regex: t, ...ie.errToObj(n) });
  }
  includes(t, n) {
    return this._addCheck({ kind: "includes", value: t, position: n == null ? void 0 : n.position, ...ie.errToObj(n == null ? void 0 : n.message) });
  }
  startsWith(t, n) {
    return this._addCheck({ kind: "startsWith", value: t, ...ie.errToObj(n) });
  }
  endsWith(t, n) {
    return this._addCheck({ kind: "endsWith", value: t, ...ie.errToObj(n) });
  }
  min(t, n) {
    return this._addCheck({ kind: "min", value: t, ...ie.errToObj(n) });
  }
  max(t, n) {
    return this._addCheck({ kind: "max", value: t, ...ie.errToObj(n) });
  }
  length(t, n) {
    return this._addCheck({ kind: "length", value: t, ...ie.errToObj(n) });
  }
  nonempty(t) {
    return this.min(1, ie.errToObj(t));
  }
  trim() {
    return new Kn({ ...this._def, checks: [...this._def.checks, { kind: "trim" }] });
  }
  toLowerCase() {
    return new Kn({ ...this._def, checks: [...this._def.checks, { kind: "toLowerCase" }] });
  }
  toUpperCase() {
    return new Kn({ ...this._def, checks: [...this._def.checks, { kind: "toUpperCase" }] });
  }
  get isDatetime() {
    return !!this._def.checks.find((t) => t.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((t) => t.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((t) => t.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((t) => t.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((t) => t.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((t) => t.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((t) => t.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((t) => t.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((t) => t.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((t) => t.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((t) => t.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((t) => t.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((t) => t.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((t) => t.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((t) => t.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((t) => t.kind === "base64url");
  }
  get minLength() {
    let t = null;
    for (const n of this._def.checks) n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxLength() {
    let t = null;
    for (const n of this._def.checks) n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
}
Kn.create = (e) => new Kn({ checks: [], typeName: pe.ZodString, coerce: (e == null ? void 0 : e.coerce) ?? false, ...we(e) });
function fw(e, t) {
  const n = (e.toString().split(".")[1] || "").length, r = (t.toString().split(".")[1] || "").length, i = n > r ? n : r, a = Number.parseInt(e.toFixed(i).replace(".", "")), o = Number.parseInt(t.toFixed(i).replace(".", ""));
  return a % o / 10 ** i;
}
class Si extends be {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== te.number) {
      const a = this._getOrReturnCtx(t);
      return Q(a, { code: H.invalid_type, expected: te.number, received: a.parsedType }), he;
    }
    let r;
    const i = new Ft();
    for (const a of this._def.checks) a.kind === "int" ? Ne.isInteger(t.data) || (r = this._getOrReturnCtx(t, r), Q(r, { code: H.invalid_type, expected: "integer", received: "float", message: a.message }), i.dirty()) : a.kind === "min" ? (a.inclusive ? t.data < a.value : t.data <= a.value) && (r = this._getOrReturnCtx(t, r), Q(r, { code: H.too_small, minimum: a.value, type: "number", inclusive: a.inclusive, exact: false, message: a.message }), i.dirty()) : a.kind === "max" ? (a.inclusive ? t.data > a.value : t.data >= a.value) && (r = this._getOrReturnCtx(t, r), Q(r, { code: H.too_big, maximum: a.value, type: "number", inclusive: a.inclusive, exact: false, message: a.message }), i.dirty()) : a.kind === "multipleOf" ? fw(t.data, a.value) !== 0 && (r = this._getOrReturnCtx(t, r), Q(r, { code: H.not_multiple_of, multipleOf: a.value, message: a.message }), i.dirty()) : a.kind === "finite" ? Number.isFinite(t.data) || (r = this._getOrReturnCtx(t, r), Q(r, { code: H.not_finite, message: a.message }), i.dirty()) : Ne.assertNever(a);
    return { status: i.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, true, ie.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, false, ie.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, true, ie.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, false, ie.toString(n));
  }
  setLimit(t, n, r, i) {
    return new Si({ ...this._def, checks: [...this._def.checks, { kind: t, value: n, inclusive: r, message: ie.toString(i) }] });
  }
  _addCheck(t) {
    return new Si({ ...this._def, checks: [...this._def.checks, t] });
  }
  int(t) {
    return this._addCheck({ kind: "int", message: ie.toString(t) });
  }
  positive(t) {
    return this._addCheck({ kind: "min", value: 0, inclusive: false, message: ie.toString(t) });
  }
  negative(t) {
    return this._addCheck({ kind: "max", value: 0, inclusive: false, message: ie.toString(t) });
  }
  nonpositive(t) {
    return this._addCheck({ kind: "max", value: 0, inclusive: true, message: ie.toString(t) });
  }
  nonnegative(t) {
    return this._addCheck({ kind: "min", value: 0, inclusive: true, message: ie.toString(t) });
  }
  multipleOf(t, n) {
    return this._addCheck({ kind: "multipleOf", value: t, message: ie.toString(n) });
  }
  finite(t) {
    return this._addCheck({ kind: "finite", message: ie.toString(t) });
  }
  safe(t) {
    return this._addCheck({ kind: "min", inclusive: true, value: Number.MIN_SAFE_INTEGER, message: ie.toString(t) })._addCheck({ kind: "max", inclusive: true, value: Number.MAX_SAFE_INTEGER, message: ie.toString(t) });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks) n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks) n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
  get isInt() {
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && Ne.isInteger(t.value));
  }
  get isFinite() {
    let t = null, n = null;
    for (const r of this._def.checks) {
      if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf") return true;
      r.kind === "min" ? (n === null || r.value > n) && (n = r.value) : r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    }
    return Number.isFinite(n) && Number.isFinite(t);
  }
}
Si.create = (e) => new Si({ checks: [], typeName: pe.ZodNumber, coerce: (e == null ? void 0 : e.coerce) || false, ...we(e) });
class Pa extends be {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(t) {
    if (this._def.coerce) try {
      t.data = BigInt(t.data);
    } catch {
      return this._getInvalidInput(t);
    }
    if (this._getType(t) !== te.bigint) return this._getInvalidInput(t);
    let r;
    const i = new Ft();
    for (const a of this._def.checks) a.kind === "min" ? (a.inclusive ? t.data < a.value : t.data <= a.value) && (r = this._getOrReturnCtx(t, r), Q(r, { code: H.too_small, type: "bigint", minimum: a.value, inclusive: a.inclusive, message: a.message }), i.dirty()) : a.kind === "max" ? (a.inclusive ? t.data > a.value : t.data >= a.value) && (r = this._getOrReturnCtx(t, r), Q(r, { code: H.too_big, type: "bigint", maximum: a.value, inclusive: a.inclusive, message: a.message }), i.dirty()) : a.kind === "multipleOf" ? t.data % a.value !== BigInt(0) && (r = this._getOrReturnCtx(t, r), Q(r, { code: H.not_multiple_of, multipleOf: a.value, message: a.message }), i.dirty()) : Ne.assertNever(a);
    return { status: i.value, value: t.data };
  }
  _getInvalidInput(t) {
    const n = this._getOrReturnCtx(t);
    return Q(n, { code: H.invalid_type, expected: te.bigint, received: n.parsedType }), he;
  }
  gte(t, n) {
    return this.setLimit("min", t, true, ie.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, false, ie.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, true, ie.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, false, ie.toString(n));
  }
  setLimit(t, n, r, i) {
    return new Pa({ ...this._def, checks: [...this._def.checks, { kind: t, value: n, inclusive: r, message: ie.toString(i) }] });
  }
  _addCheck(t) {
    return new Pa({ ...this._def, checks: [...this._def.checks, t] });
  }
  positive(t) {
    return this._addCheck({ kind: "min", value: BigInt(0), inclusive: false, message: ie.toString(t) });
  }
  negative(t) {
    return this._addCheck({ kind: "max", value: BigInt(0), inclusive: false, message: ie.toString(t) });
  }
  nonpositive(t) {
    return this._addCheck({ kind: "max", value: BigInt(0), inclusive: true, message: ie.toString(t) });
  }
  nonnegative(t) {
    return this._addCheck({ kind: "min", value: BigInt(0), inclusive: true, message: ie.toString(t) });
  }
  multipleOf(t, n) {
    return this._addCheck({ kind: "multipleOf", value: t, message: ie.toString(n) });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks) n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks) n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
}
Pa.create = (e) => new Pa({ checks: [], typeName: pe.ZodBigInt, coerce: (e == null ? void 0 : e.coerce) ?? false, ...we(e) });
class df extends be {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== te.boolean) {
      const r = this._getOrReturnCtx(t);
      return Q(r, { code: H.invalid_type, expected: te.boolean, received: r.parsedType }), he;
    }
    return Xt(t.data);
  }
}
df.create = (e) => new df({ typeName: pe.ZodBoolean, coerce: (e == null ? void 0 : e.coerce) || false, ...we(e) });
class ts extends be {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== te.date) {
      const a = this._getOrReturnCtx(t);
      return Q(a, { code: H.invalid_type, expected: te.date, received: a.parsedType }), he;
    }
    if (Number.isNaN(t.data.getTime())) {
      const a = this._getOrReturnCtx(t);
      return Q(a, { code: H.invalid_date }), he;
    }
    const r = new Ft();
    let i;
    for (const a of this._def.checks) a.kind === "min" ? t.data.getTime() < a.value && (i = this._getOrReturnCtx(t, i), Q(i, { code: H.too_small, message: a.message, inclusive: true, exact: false, minimum: a.value, type: "date" }), r.dirty()) : a.kind === "max" ? t.data.getTime() > a.value && (i = this._getOrReturnCtx(t, i), Q(i, { code: H.too_big, message: a.message, inclusive: true, exact: false, maximum: a.value, type: "date" }), r.dirty()) : Ne.assertNever(a);
    return { status: r.value, value: new Date(t.data.getTime()) };
  }
  _addCheck(t) {
    return new ts({ ...this._def, checks: [...this._def.checks, t] });
  }
  min(t, n) {
    return this._addCheck({ kind: "min", value: t.getTime(), message: ie.toString(n) });
  }
  max(t, n) {
    return this._addCheck({ kind: "max", value: t.getTime(), message: ie.toString(n) });
  }
  get minDate() {
    let t = null;
    for (const n of this._def.checks) n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
  get maxDate() {
    let t = null;
    for (const n of this._def.checks) n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
}
ts.create = (e) => new ts({ checks: [], coerce: (e == null ? void 0 : e.coerce) || false, typeName: pe.ZodDate, ...we(e) });
class ff extends be {
  _parse(t) {
    if (this._getType(t) !== te.symbol) {
      const r = this._getOrReturnCtx(t);
      return Q(r, { code: H.invalid_type, expected: te.symbol, received: r.parsedType }), he;
    }
    return Xt(t.data);
  }
}
ff.create = (e) => new ff({ typeName: pe.ZodSymbol, ...we(e) });
class hf extends be {
  _parse(t) {
    if (this._getType(t) !== te.undefined) {
      const r = this._getOrReturnCtx(t);
      return Q(r, { code: H.invalid_type, expected: te.undefined, received: r.parsedType }), he;
    }
    return Xt(t.data);
  }
}
hf.create = (e) => new hf({ typeName: pe.ZodUndefined, ...we(e) });
class pf extends be {
  _parse(t) {
    if (this._getType(t) !== te.null) {
      const r = this._getOrReturnCtx(t);
      return Q(r, { code: H.invalid_type, expected: te.null, received: r.parsedType }), he;
    }
    return Xt(t.data);
  }
}
pf.create = (e) => new pf({ typeName: pe.ZodNull, ...we(e) });
class mf extends be {
  constructor() {
    super(...arguments), this._any = true;
  }
  _parse(t) {
    return Xt(t.data);
  }
}
mf.create = (e) => new mf({ typeName: pe.ZodAny, ...we(e) });
class vf extends be {
  constructor() {
    super(...arguments), this._unknown = true;
  }
  _parse(t) {
    return Xt(t.data);
  }
}
vf.create = (e) => new vf({ typeName: pe.ZodUnknown, ...we(e) });
class lr extends be {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return Q(n, { code: H.invalid_type, expected: te.never, received: n.parsedType }), he;
  }
}
lr.create = (e) => new lr({ typeName: pe.ZodNever, ...we(e) });
class gf extends be {
  _parse(t) {
    if (this._getType(t) !== te.undefined) {
      const r = this._getOrReturnCtx(t);
      return Q(r, { code: H.invalid_type, expected: te.void, received: r.parsedType }), he;
    }
    return Xt(t.data);
  }
}
gf.create = (e) => new gf({ typeName: pe.ZodVoid, ...we(e) });
class gn extends be {
  _parse(t) {
    const { ctx: n, status: r } = this._processInputParams(t), i = this._def;
    if (n.parsedType !== te.array) return Q(n, { code: H.invalid_type, expected: te.array, received: n.parsedType }), he;
    if (i.exactLength !== null) {
      const o = n.data.length > i.exactLength.value, s = n.data.length < i.exactLength.value;
      (o || s) && (Q(n, { code: o ? H.too_big : H.too_small, minimum: s ? i.exactLength.value : void 0, maximum: o ? i.exactLength.value : void 0, type: "array", inclusive: true, exact: true, message: i.exactLength.message }), r.dirty());
    }
    if (i.minLength !== null && n.data.length < i.minLength.value && (Q(n, { code: H.too_small, minimum: i.minLength.value, type: "array", inclusive: true, exact: false, message: i.minLength.message }), r.dirty()), i.maxLength !== null && n.data.length > i.maxLength.value && (Q(n, { code: H.too_big, maximum: i.maxLength.value, type: "array", inclusive: true, exact: false, message: i.maxLength.message }), r.dirty()), n.common.async) return Promise.all([...n.data].map((o, s) => i.type._parseAsync(new sr(n, o, n.path, s)))).then((o) => Ft.mergeArray(r, o));
    const a = [...n.data].map((o, s) => i.type._parseSync(new sr(n, o, n.path, s)));
    return Ft.mergeArray(r, a);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new gn({ ...this._def, minLength: { value: t, message: ie.toString(n) } });
  }
  max(t, n) {
    return new gn({ ...this._def, maxLength: { value: t, message: ie.toString(n) } });
  }
  length(t, n) {
    return new gn({ ...this._def, exactLength: { value: t, message: ie.toString(n) } });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
gn.create = (e, t) => new gn({ type: e, minLength: null, maxLength: null, exactLength: null, typeName: pe.ZodArray, ...we(t) });
function Zr(e) {
  if (e instanceof at) {
    const t = {};
    for (const n in e.shape) {
      const r = e.shape[n];
      t[n] = ir.create(Zr(r));
    }
    return new at({ ...e._def, shape: () => t });
  } else return e instanceof gn ? new gn({ ...e._def, type: Zr(e.element) }) : e instanceof ir ? ir.create(Zr(e.unwrap())) : e instanceof Ci ? Ci.create(Zr(e.unwrap())) : e instanceof Dr ? Dr.create(e.items.map((t) => Zr(t))) : e;
}
class at extends be {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    const t = this._def.shape(), n = Ne.objectKeys(t);
    return this._cached = { shape: t, keys: n }, this._cached;
  }
  _parse(t) {
    if (this._getType(t) !== te.object) {
      const c = this._getOrReturnCtx(t);
      return Q(c, { code: H.invalid_type, expected: te.object, received: c.parsedType }), he;
    }
    const { status: r, ctx: i } = this._processInputParams(t), { shape: a, keys: o } = this._getCached(), s = [];
    if (!(this._def.catchall instanceof lr && this._def.unknownKeys === "strip")) for (const c in i.data) o.includes(c) || s.push(c);
    const l = [];
    for (const c of o) {
      const f = a[c], h = i.data[c];
      l.push({ key: { status: "valid", value: c }, value: f._parse(new sr(i, h, i.path, c)), alwaysSet: c in i.data });
    }
    if (this._def.catchall instanceof lr) {
      const c = this._def.unknownKeys;
      if (c === "passthrough") for (const f of s) l.push({ key: { status: "valid", value: f }, value: { status: "valid", value: i.data[f] } });
      else if (c === "strict") s.length > 0 && (Q(i, { code: H.unrecognized_keys, keys: s }), r.dirty());
      else if (c !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const c = this._def.catchall;
      for (const f of s) {
        const h = i.data[f];
        l.push({ key: { status: "valid", value: f }, value: c._parse(new sr(i, h, i.path, f)), alwaysSet: f in i.data });
      }
    }
    return i.common.async ? Promise.resolve().then(async () => {
      const c = [];
      for (const f of l) {
        const h = await f.key, g = await f.value;
        c.push({ key: h, value: g, alwaysSet: f.alwaysSet });
      }
      return c;
    }).then((c) => Ft.mergeObjectSync(r, c)) : Ft.mergeObjectSync(r, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return ie.errToObj, new at({ ...this._def, unknownKeys: "strict", ...t !== void 0 ? { errorMap: (n, r) => {
      var _a2, _b;
      const i = ((_b = (_a2 = this._def).errorMap) == null ? void 0 : _b.call(_a2, n, r).message) ?? r.defaultError;
      return n.code === "unrecognized_keys" ? { message: ie.errToObj(t).message ?? i } : { message: i };
    } } : {} });
  }
  strip() {
    return new at({ ...this._def, unknownKeys: "strip" });
  }
  passthrough() {
    return new at({ ...this._def, unknownKeys: "passthrough" });
  }
  extend(t) {
    return new at({ ...this._def, shape: () => ({ ...this._def.shape(), ...t }) });
  }
  merge(t) {
    return new at({ unknownKeys: t._def.unknownKeys, catchall: t._def.catchall, shape: () => ({ ...this._def.shape(), ...t._def.shape() }), typeName: pe.ZodObject });
  }
  setKey(t, n) {
    return this.augment({ [t]: n });
  }
  catchall(t) {
    return new at({ ...this._def, catchall: t });
  }
  pick(t) {
    const n = {};
    for (const r of Ne.objectKeys(t)) t[r] && this.shape[r] && (n[r] = this.shape[r]);
    return new at({ ...this._def, shape: () => n });
  }
  omit(t) {
    const n = {};
    for (const r of Ne.objectKeys(this.shape)) t[r] || (n[r] = this.shape[r]);
    return new at({ ...this._def, shape: () => n });
  }
  deepPartial() {
    return Zr(this);
  }
  partial(t) {
    const n = {};
    for (const r of Ne.objectKeys(this.shape)) {
      const i = this.shape[r];
      t && !t[r] ? n[r] = i : n[r] = i.optional();
    }
    return new at({ ...this._def, shape: () => n });
  }
  required(t) {
    const n = {};
    for (const r of Ne.objectKeys(this.shape)) if (t && !t[r]) n[r] = this.shape[r];
    else {
      let a = this.shape[r];
      for (; a instanceof ir; ) a = a._def.innerType;
      n[r] = a;
    }
    return new at({ ...this._def, shape: () => n });
  }
  keyof() {
    return Cm(Ne.objectKeys(this.shape));
  }
}
at.create = (e, t) => new at({ shape: () => e, unknownKeys: "strip", catchall: lr.create(), typeName: pe.ZodObject, ...we(t) });
at.strictCreate = (e, t) => new at({ shape: () => e, unknownKeys: "strict", catchall: lr.create(), typeName: pe.ZodObject, ...we(t) });
at.lazycreate = (e, t) => new at({ shape: e, unknownKeys: "strip", catchall: lr.create(), typeName: pe.ZodObject, ...we(t) });
class ns extends be {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = this._def.options;
    function i(a) {
      for (const s of a) if (s.result.status === "valid") return s.result;
      for (const s of a) if (s.result.status === "dirty") return n.common.issues.push(...s.ctx.common.issues), s.result;
      const o = a.map((s) => new Dn(s.ctx.common.issues));
      return Q(n, { code: H.invalid_union, unionErrors: o }), he;
    }
    if (n.common.async) return Promise.all(r.map(async (a) => {
      const o = { ...n, common: { ...n.common, issues: [] }, parent: null };
      return { result: await a._parseAsync({ data: n.data, path: n.path, parent: o }), ctx: o };
    })).then(i);
    {
      let a;
      const o = [];
      for (const l of r) {
        const c = { ...n, common: { ...n.common, issues: [] }, parent: null }, f = l._parseSync({ data: n.data, path: n.path, parent: c });
        if (f.status === "valid") return f;
        f.status === "dirty" && !a && (a = { result: f, ctx: c }), c.common.issues.length && o.push(c.common.issues);
      }
      if (a) return n.common.issues.push(...a.ctx.common.issues), a.result;
      const s = o.map((l) => new Dn(l));
      return Q(n, { code: H.invalid_union, unionErrors: s }), he;
    }
  }
  get options() {
    return this._def.options;
  }
}
ns.create = (e, t) => new ns({ options: e, typeName: pe.ZodUnion, ...we(t) });
function cu(e, t) {
  const n = Vn(e), r = Vn(t);
  if (e === t) return { valid: true, data: e };
  if (n === te.object && r === te.object) {
    const i = Ne.objectKeys(t), a = Ne.objectKeys(e).filter((s) => i.indexOf(s) !== -1), o = { ...e, ...t };
    for (const s of a) {
      const l = cu(e[s], t[s]);
      if (!l.valid) return { valid: false };
      o[s] = l.data;
    }
    return { valid: true, data: o };
  } else if (n === te.array && r === te.array) {
    if (e.length !== t.length) return { valid: false };
    const i = [];
    for (let a = 0; a < e.length; a++) {
      const o = e[a], s = t[a], l = cu(o, s);
      if (!l.valid) return { valid: false };
      i.push(l.data);
    }
    return { valid: true, data: i };
  } else return n === te.date && r === te.date && +e == +t ? { valid: true, data: e } : { valid: false };
}
class rs extends be {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), i = (a, o) => {
      if (lf(a) || lf(o)) return he;
      const s = cu(a.value, o.value);
      return s.valid ? ((uf(a) || uf(o)) && n.dirty(), { status: n.value, value: s.data }) : (Q(r, { code: H.invalid_intersection_types }), he);
    };
    return r.common.async ? Promise.all([this._def.left._parseAsync({ data: r.data, path: r.path, parent: r }), this._def.right._parseAsync({ data: r.data, path: r.path, parent: r })]).then(([a, o]) => i(a, o)) : i(this._def.left._parseSync({ data: r.data, path: r.path, parent: r }), this._def.right._parseSync({ data: r.data, path: r.path, parent: r }));
  }
}
rs.create = (e, t, n) => new rs({ left: e, right: t, typeName: pe.ZodIntersection, ...we(n) });
class Dr extends be {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== te.array) return Q(r, { code: H.invalid_type, expected: te.array, received: r.parsedType }), he;
    if (r.data.length < this._def.items.length) return Q(r, { code: H.too_small, minimum: this._def.items.length, inclusive: true, exact: false, type: "array" }), he;
    !this._def.rest && r.data.length > this._def.items.length && (Q(r, { code: H.too_big, maximum: this._def.items.length, inclusive: true, exact: false, type: "array" }), n.dirty());
    const a = [...r.data].map((o, s) => {
      const l = this._def.items[s] || this._def.rest;
      return l ? l._parse(new sr(r, o, r.path, s)) : null;
    }).filter((o) => !!o);
    return r.common.async ? Promise.all(a).then((o) => Ft.mergeArray(n, o)) : Ft.mergeArray(n, a);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new Dr({ ...this._def, rest: t });
  }
}
Dr.create = (e, t) => {
  if (!Array.isArray(e)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Dr({ items: e, typeName: pe.ZodTuple, rest: null, ...we(t) });
};
class yf extends be {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== te.map) return Q(r, { code: H.invalid_type, expected: te.map, received: r.parsedType }), he;
    const i = this._def.keyType, a = this._def.valueType, o = [...r.data.entries()].map(([s, l], c) => ({ key: i._parse(new sr(r, s, r.path, [c, "key"])), value: a._parse(new sr(r, l, r.path, [c, "value"])) }));
    if (r.common.async) {
      const s = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const l of o) {
          const c = await l.key, f = await l.value;
          if (c.status === "aborted" || f.status === "aborted") return he;
          (c.status === "dirty" || f.status === "dirty") && n.dirty(), s.set(c.value, f.value);
        }
        return { status: n.value, value: s };
      });
    } else {
      const s = /* @__PURE__ */ new Map();
      for (const l of o) {
        const c = l.key, f = l.value;
        if (c.status === "aborted" || f.status === "aborted") return he;
        (c.status === "dirty" || f.status === "dirty") && n.dirty(), s.set(c.value, f.value);
      }
      return { status: n.value, value: s };
    }
  }
}
yf.create = (e, t, n) => new yf({ valueType: t, keyType: e, typeName: pe.ZodMap, ...we(n) });
class Na extends be {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== te.set) return Q(r, { code: H.invalid_type, expected: te.set, received: r.parsedType }), he;
    const i = this._def;
    i.minSize !== null && r.data.size < i.minSize.value && (Q(r, { code: H.too_small, minimum: i.minSize.value, type: "set", inclusive: true, exact: false, message: i.minSize.message }), n.dirty()), i.maxSize !== null && r.data.size > i.maxSize.value && (Q(r, { code: H.too_big, maximum: i.maxSize.value, type: "set", inclusive: true, exact: false, message: i.maxSize.message }), n.dirty());
    const a = this._def.valueType;
    function o(l) {
      const c = /* @__PURE__ */ new Set();
      for (const f of l) {
        if (f.status === "aborted") return he;
        f.status === "dirty" && n.dirty(), c.add(f.value);
      }
      return { status: n.value, value: c };
    }
    const s = [...r.data.values()].map((l, c) => a._parse(new sr(r, l, r.path, c)));
    return r.common.async ? Promise.all(s).then((l) => o(l)) : o(s);
  }
  min(t, n) {
    return new Na({ ...this._def, minSize: { value: t, message: ie.toString(n) } });
  }
  max(t, n) {
    return new Na({ ...this._def, maxSize: { value: t, message: ie.toString(n) } });
  }
  size(t, n) {
    return this.min(t, n).max(t, n);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Na.create = (e, t) => new Na({ valueType: e, minSize: null, maxSize: null, typeName: pe.ZodSet, ...we(t) });
class xf extends be {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
xf.create = (e, t) => new xf({ getter: e, typeName: pe.ZodLazy, ...we(t) });
class wf extends be {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return Q(n, { received: n.data, code: H.invalid_literal, expected: this._def.value }), he;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
wf.create = (e, t) => new wf({ value: e, typeName: pe.ZodLiteral, ...we(t) });
function Cm(e, t) {
  return new _i({ values: e, typeName: pe.ZodEnum, ...we(t) });
}
class _i extends be {
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return Q(n, { expected: Ne.joinValues(r), received: n.parsedType, code: H.invalid_type }), he;
    }
    if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(t.data)) {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return Q(n, { received: n.data, code: H.invalid_enum_value, options: r }), he;
    }
    return Xt(t.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const t = {};
    for (const n of this._def.values) t[n] = n;
    return t;
  }
  get Values() {
    const t = {};
    for (const n of this._def.values) t[n] = n;
    return t;
  }
  get Enum() {
    const t = {};
    for (const n of this._def.values) t[n] = n;
    return t;
  }
  extract(t, n = this._def) {
    return _i.create(t, { ...this._def, ...n });
  }
  exclude(t, n = this._def) {
    return _i.create(this.options.filter((r) => !t.includes(r)), { ...this._def, ...n });
  }
}
_i.create = Cm;
class kf extends be {
  _parse(t) {
    const n = Ne.getValidEnumValues(this._def.values), r = this._getOrReturnCtx(t);
    if (r.parsedType !== te.string && r.parsedType !== te.number) {
      const i = Ne.objectValues(n);
      return Q(r, { expected: Ne.joinValues(i), received: r.parsedType, code: H.invalid_type }), he;
    }
    if (this._cache || (this._cache = new Set(Ne.getValidEnumValues(this._def.values))), !this._cache.has(t.data)) {
      const i = Ne.objectValues(n);
      return Q(r, { received: r.data, code: H.invalid_enum_value, options: i }), he;
    }
    return Xt(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
kf.create = (e, t) => new kf({ values: e, typeName: pe.ZodNativeEnum, ...we(t) });
class is extends be {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== te.promise && n.common.async === false) return Q(n, { code: H.invalid_type, expected: te.promise, received: n.parsedType }), he;
    const r = n.parsedType === te.promise ? n.data : Promise.resolve(n.data);
    return Xt(r.then((i) => this._def.type.parseAsync(i, { path: n.path, errorMap: n.common.contextualErrorMap })));
  }
}
is.create = (e, t) => new is({ type: e, typeName: pe.ZodPromise, ...we(t) });
class Ei extends be {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === pe.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), i = this._def.effect || null, a = { addIssue: (o) => {
      Q(r, o), o.fatal ? n.abort() : n.dirty();
    }, get path() {
      return r.path;
    } };
    if (a.addIssue = a.addIssue.bind(a), i.type === "preprocess") {
      const o = i.transform(r.data, a);
      if (r.common.async) return Promise.resolve(o).then(async (s) => {
        if (n.value === "aborted") return he;
        const l = await this._def.schema._parseAsync({ data: s, path: r.path, parent: r });
        return l.status === "aborted" ? he : l.status === "dirty" || n.value === "dirty" ? qi(l.value) : l;
      });
      {
        if (n.value === "aborted") return he;
        const s = this._def.schema._parseSync({ data: o, path: r.path, parent: r });
        return s.status === "aborted" ? he : s.status === "dirty" || n.value === "dirty" ? qi(s.value) : s;
      }
    }
    if (i.type === "refinement") {
      const o = (s) => {
        const l = i.refinement(s, a);
        if (r.common.async) return Promise.resolve(l);
        if (l instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return s;
      };
      if (r.common.async === false) {
        const s = this._def.schema._parseSync({ data: r.data, path: r.path, parent: r });
        return s.status === "aborted" ? he : (s.status === "dirty" && n.dirty(), o(s.value), { status: n.value, value: s.value });
      } else return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((s) => s.status === "aborted" ? he : (s.status === "dirty" && n.dirty(), o(s.value).then(() => ({ status: n.value, value: s.value }))));
    }
    if (i.type === "transform") if (r.common.async === false) {
      const o = this._def.schema._parseSync({ data: r.data, path: r.path, parent: r });
      if (!ki(o)) return he;
      const s = i.transform(o.value, a);
      if (s instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
      return { status: n.value, value: s };
    } else return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((o) => ki(o) ? Promise.resolve(i.transform(o.value, a)).then((s) => ({ status: n.value, value: s })) : he);
    Ne.assertNever(i);
  }
}
Ei.create = (e, t, n) => new Ei({ schema: e, typeName: pe.ZodEffects, effect: t, ...we(n) });
Ei.createWithPreprocess = (e, t, n) => new Ei({ schema: t, effect: { type: "preprocess", transform: e }, typeName: pe.ZodEffects, ...we(n) });
class ir extends be {
  _parse(t) {
    return this._getType(t) === te.undefined ? Xt(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ir.create = (e, t) => new ir({ innerType: e, typeName: pe.ZodOptional, ...we(t) });
class Ci extends be {
  _parse(t) {
    return this._getType(t) === te.null ? Xt(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Ci.create = (e, t) => new Ci({ innerType: e, typeName: pe.ZodNullable, ...we(t) });
class du extends be {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    let r = n.data;
    return n.parsedType === te.undefined && (r = this._def.defaultValue()), this._def.innerType._parse({ data: r, path: n.path, parent: n });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
du.create = (e, t) => new du({ innerType: e, typeName: pe.ZodDefault, defaultValue: typeof t.default == "function" ? t.default : () => t.default, ...we(t) });
class fu extends be {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = { ...n, common: { ...n.common, issues: [] } }, i = this._def.innerType._parse({ data: r.data, path: r.path, parent: { ...r } });
    return es(i) ? i.then((a) => ({ status: "valid", value: a.status === "valid" ? a.value : this._def.catchValue({ get error() {
      return new Dn(r.common.issues);
    }, input: r.data }) })) : { status: "valid", value: i.status === "valid" ? i.value : this._def.catchValue({ get error() {
      return new Dn(r.common.issues);
    }, input: r.data }) };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
fu.create = (e, t) => new fu({ innerType: e, typeName: pe.ZodCatch, catchValue: typeof t.catch == "function" ? t.catch : () => t.catch, ...we(t) });
class Sf extends be {
  _parse(t) {
    if (this._getType(t) !== te.nan) {
      const r = this._getOrReturnCtx(t);
      return Q(r, { code: H.invalid_type, expected: te.nan, received: r.parsedType }), he;
    }
    return { status: "valid", value: t.data };
  }
}
Sf.create = (e) => new Sf({ typeName: pe.ZodNaN, ...we(e) });
class hw extends be {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = n.data;
    return this._def.type._parse({ data: r, path: n.path, parent: n });
  }
  unwrap() {
    return this._def.type;
  }
}
class vc extends be {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.common.async) return (async () => {
      const a = await this._def.in._parseAsync({ data: r.data, path: r.path, parent: r });
      return a.status === "aborted" ? he : a.status === "dirty" ? (n.dirty(), qi(a.value)) : this._def.out._parseAsync({ data: a.value, path: r.path, parent: r });
    })();
    {
      const i = this._def.in._parseSync({ data: r.data, path: r.path, parent: r });
      return i.status === "aborted" ? he : i.status === "dirty" ? (n.dirty(), { status: "dirty", value: i.value }) : this._def.out._parseSync({ data: i.value, path: r.path, parent: r });
    }
  }
  static create(t, n) {
    return new vc({ in: t, out: n, typeName: pe.ZodPipeline });
  }
}
class hu extends be {
  _parse(t) {
    const n = this._def.innerType._parse(t), r = (i) => (ki(i) && (i.value = Object.freeze(i.value)), i);
    return es(n) ? n.then((i) => r(i)) : r(n);
  }
  unwrap() {
    return this._def.innerType;
  }
}
hu.create = (e, t) => new hu({ innerType: e, typeName: pe.ZodReadonly, ...we(t) });
var pe;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(pe || (pe = {}));
const Wt = Kn.create, pr = Si.create;
lr.create;
gn.create;
const _f = at.create;
ns.create;
rs.create;
Dr.create;
_i.create;
is.create;
ir.create;
Ci.create;
const pw = _f({ text_temperature: pr(), text_topk: pr(), audio_temperature: pr(), audio_topk: pr(), pad_mult: pr(), repetition_penalty_context: pr(), repetition_penalty: pr(), lm_model_file: Wt(), instance_name: Wt(), build_info: _f({ build_timestamp: Wt(), build_date: Wt(), git_branch: Wt(), git_timestamp: Wt(), git_date: Wt(), git_hash: Wt(), git_describe: Wt(), rustc_host_triple: Wt(), rustc_version: Wt(), cargo_target_triple: Wt() }) }), mw = (e) => {
  const t = pw.safeParse(e);
  return t.success ? t.data : (console.error(t.error), null);
}, vw = () => {
  const [e, t] = k.useState(null), { socket: n } = Ba(), r = k.useCallback((i) => {
    const a = new Uint8Array(i.data), o = Cs(a);
    if (o.type === "metadata") {
      const s = mw(o.data);
      s && (t(s), console.log("received metadata", s));
    }
  }, [t]);
  return k.useEffect(() => {
    const i = n;
    if (i) return t(null), i.addEventListener("message", r), () => {
      i.removeEventListener("message", r);
    };
  }, [n]), { serverInfo: e };
}, gw = () => {
  const { serverInfo: e } = vw();
  return e ? m.jsxs("div", { className: "p-2 pt-4 self-center flex flex-col break-words", children: ["Our server is running on the following configuration:", m.jsxs("div", { children: ["Text temperature: ", e.text_temperature] }), m.jsxs("div", { children: ["Text topk: ", e.text_topk] }), m.jsxs("div", { children: ["Audio temperature: ", e.audio_temperature] }), m.jsxs("div", { children: ["Audio topk: ", e.audio_topk] }), m.jsxs("div", { children: ["Pad mult: ", e.pad_mult] }), m.jsxs("div", { children: ["Repeat penalty last N: ", e.repetition_penalty_context] }), m.jsxs("div", { children: ["Repeat penalty: ", e.repetition_penalty] }), m.jsxs("div", { children: ["LM model file: ", e.lm_model_file] }), m.jsxs("div", { children: ["Instance name: ", e.instance_name] })] }) : null;
};
function yw(e, t) {
  const [n, r] = k.useState(() => {
    try {
      const i = localStorage.getItem(e);
      return i ? JSON.parse(i) : t;
    } catch (i) {
      return console.warn("Error reading localStorage key", e, i), t;
    }
  });
  return k.useEffect(() => {
    try {
      localStorage.setItem(e, JSON.stringify(n));
    } catch (i) {
      console.warn("Error writing to localStorage key", e, i);
    }
  }, [e, n]), [n, r];
}
const Ef = 0.7, Cf = 25, Tf = 0.8, bf = 250, Pf = 0, Nf = 64, Rf = 1, xw = "You are a wise and friendly teacher. Answer questions or provide advice in a clear and engaging way.", ww = "NATF0.pt", kw = -1, Tm = (e) => {
  const [t, n] = k.useState((e == null ? void 0 : e.textTemperature) || Ef), [r, i] = k.useState((e == null ? void 0 : e.textTopk) || Cf), [a, o] = k.useState((e == null ? void 0 : e.audioTemperature) || Tf), [s, l] = k.useState((e == null ? void 0 : e.audioTopk) || bf), [c, f] = k.useState((e == null ? void 0 : e.padMult) || Pf), [h, g] = k.useState((e == null ? void 0 : e.repetitionPenalty) || Rf), [w, E] = k.useState((e == null ? void 0 : e.repetitionPenaltyContext) || Nf), [b, I] = k.useState((e == null ? void 0 : e.textPrompt) || xw), [x, v] = k.useState((e == null ? void 0 : e.voicePrompt) || ww), [S, A] = yw("randomSeed", (e == null ? void 0 : e.randomSeed) || kw), M = k.useCallback(() => {
    n(Ef), i(Cf), o(Tf), l(bf), f(Pf), O(Rf), $(Nf);
  }, [n, i, o, l, f, g, E]), z = k.useCallback((Z) => {
    n(Z.textTemperature), i(Z.textTopk), o(Z.audioTemperature), l(Z.audioTopk), f(Z.padMult), g(Z.repetitionPenalty), E(Z.repetitionPenaltyContext), I(Z.textPrompt), v(Z.voicePrompt), A(Z.randomSeed);
  }, [n, i, o, l, f, g, E, I, v, A]), _ = k.useCallback((Z) => {
    (Z <= 1.2 || Z >= 0.2) && n(Z);
  }, []), R = k.useCallback((Z) => {
    (Z <= 500 || Z >= 10) && i(Z);
  }, []), V = k.useCallback((Z) => {
    (Z <= 1.2 || Z >= 0.2) && o(Z);
  }, []), T = k.useCallback((Z) => {
    (Z <= 500 || Z >= 10) && l(Z);
  }, []), L = k.useCallback((Z) => {
    (Z <= 4 || Z >= -4) && f(Z);
  }, []), O = k.useCallback((Z) => {
    (Z <= 2 || Z >= 1) && g(Z);
  }, []), $ = k.useCallback((Z) => {
    (Z <= 200 || Z >= 0) && E(Z);
  }, []), X = k.useCallback((Z) => {
    I(Z);
  }, []), de = k.useCallback((Z) => {
    v(Z);
  }, []), Se = k.useCallback((Z) => {
    A(Z);
  }, []);
  return { textTemperature: t, textTopk: r, audioTemperature: a, audioTopk: s, padMult: c, repetitionPenalty: h, repetitionPenaltyContext: w, setTextTemperature: _, setTextTopk: R, setAudioTemperature: V, setAudioTopk: T, setPadMult: L, setRepetitionPenalty: O, setRepetitionPenaltyContext: $, setTextPrompt: X, textPrompt: b, setVoicePrompt: de, voicePrompt: x, resetParams: M, setParams: z, randomSeed: S, setRandomSeed: Se };
};
var bm = {}, Pm = {}, Nm = {};
Object.defineProperty(Nm, "__esModule", { value: true });
var gc = {}, yc = {};
(function(e) {
  (function(t) {
    var n = "undefined", r = n !== typeof Buffer && Buffer, i = n !== typeof Uint8Array && Uint8Array, a = n !== typeof ArrayBuffer && ArrayBuffer, o = [0, 0, 0, 0, 0, 0, 0, 0], s = Array.isArray || z, l = 4294967296, c = 16777216, f;
    h("Uint64BE", true, true), h("Int64BE", true, false), h("Uint64LE", false, true), h("Int64LE", false, false);
    function h(_, R, V) {
      var T = R ? 0 : 4, L = R ? 4 : 0, O = R ? 0 : 3, $ = R ? 1 : 2, X = R ? 2 : 1, de = R ? 3 : 0, Se = R ? v : A, Z = R ? S : M, F = ne.prototype, J = "is" + _, oe = "_" + J;
      return F.buffer = void 0, F.offset = 0, F[oe] = true, F.toNumber = Ce, F.toString = Oe, F.toJSON = Ce, F.toArray = g, r && (F.toBuffer = w), i && (F.toArrayBuffer = E), ne[J] = K, t[_] = ne, ne;
      function ne(fe, ue, ve, se) {
        return this instanceof ne ? Ze(this, fe, ue, ve, se) : new ne(fe, ue, ve, se);
      }
      function K(fe) {
        return !!(fe && fe[oe]);
      }
      function Ze(fe, ue, ve, se, _e) {
        if (i && a && (ue instanceof a && (ue = new i(ue)), se instanceof a && (se = new i(se))), !ue && !ve && !se && !f) {
          fe.buffer = x(o, 0);
          return;
        }
        if (!b(ue, ve)) {
          var tt = f || Array;
          _e = ve, se = ue, ve = 0, ue = f === r ? r.alloc(8) : new tt(8);
        }
        fe.buffer = ue, fe.offset = ve |= 0, n !== typeof se && (typeof se == "string" ? me(ue, ve, se, _e || 10) : b(se, _e) ? I(ue, ve, se, _e) : typeof _e == "number" ? (Ve(ue, ve + T, se), Ve(ue, ve + L, _e)) : se > 0 ? Se(ue, ve, se) : se < 0 ? Z(ue, ve, se) : I(ue, ve, o, 0));
      }
      function me(fe, ue, ve, se) {
        var _e = 0, tt = ve.length, vt = 0, Ge = 0;
        ve[0] === "-" && _e++;
        for (var qt = _e; _e < tt; ) {
          var ln = parseInt(ve[_e++], se);
          if (!(ln >= 0)) break;
          Ge = Ge * se + ln, vt = vt * se + Math.floor(Ge / l), Ge %= l;
        }
        qt && (vt = ~vt, Ge ? Ge = l - Ge : vt++), Ve(fe, ue + T, vt), Ve(fe, ue + L, Ge);
      }
      function Ce() {
        var fe = this.buffer, ue = this.offset, ve = Xe(fe, ue + T), se = Xe(fe, ue + L);
        return V || (ve |= 0), ve ? ve * l + se : se;
      }
      function Oe(fe) {
        var ue = this.buffer, ve = this.offset, se = Xe(ue, ve + T), _e = Xe(ue, ve + L), tt = "", vt = !V && se & 2147483648;
        for (vt && (se = ~se, _e = l - _e), fe = fe || 10; ; ) {
          var Ge = se % fe * l + _e;
          if (se = Math.floor(se / fe), _e = Math.floor(Ge / fe), tt = (Ge % fe).toString(fe) + tt, !se && !_e) break;
        }
        return vt && (tt = "-" + tt), tt;
      }
      function Ve(fe, ue, ve) {
        fe[ue + de] = ve & 255, ve = ve >> 8, fe[ue + X] = ve & 255, ve = ve >> 8, fe[ue + $] = ve & 255, ve = ve >> 8, fe[ue + O] = ve & 255;
      }
      function Xe(fe, ue) {
        return fe[ue + O] * c + (fe[ue + $] << 16) + (fe[ue + X] << 8) + fe[ue + de];
      }
    }
    function g(_) {
      var R = this.buffer, V = this.offset;
      return f = null, _ !== false && s(R) ? R.length === 8 ? R : R.slice(V, V + 8) : x(R, V);
    }
    function w(_) {
      var R = this.buffer, V = this.offset;
      return f = r, _ !== false && r.isBuffer(R) ? R.length === 8 ? R : R.slice(V, V + 8) : r.from(E.call(this, _));
    }
    function E(_) {
      var R = this.buffer, V = this.offset, T = R.buffer;
      if (f = i, _ !== false && !R.offset && T instanceof a) return T.byteLength === 8 ? T : T.slice(V, V + 8);
      var L = new i(8);
      return I(L, 0, R, V), L.buffer;
    }
    function b(_, R) {
      var V = _ && _.length;
      return R |= 0, V && R + 8 <= V && typeof _[R] != "string";
    }
    function I(_, R, V, T) {
      R |= 0, T |= 0;
      for (var L = 0; L < 8; L++) _[R++] = V[T++] & 255;
    }
    function x(_, R) {
      return Array.prototype.slice.call(_, R, R + 8);
    }
    function v(_, R, V) {
      for (var T = R + 8; T > R; ) _[--T] = V & 255, V /= 256;
    }
    function S(_, R, V) {
      var T = R + 8;
      for (V++; T > R; ) _[--T] = -V & 255 ^ 255, V /= 256;
    }
    function A(_, R, V) {
      for (var T = R + 8; R < T; ) _[R++] = V & 255, V /= 256;
    }
    function M(_, R, V) {
      var T = R + 8;
      for (V++; R < T; ) _[R++] = -V & 255 ^ 255, V /= 256;
    }
    function z(_) {
      return !!_ && Object.prototype.toString.call(_) == "[object Array]";
    }
  })(typeof e.nodeName != "string" ? e : wt || {});
})(yc);
var sl = {}, lo = {}, Ma = {};
Object.defineProperty(Ma, "__esModule", { value: true });
Ma.byEbmlID = void 0;
Ma.byEbmlID = { 128: { name: "ChapterDisplay", level: 4, type: "m", multiple: true, minver: 1, webm: true, description: "Contains all possible strings to use for the chapter display." }, 131: { name: "TrackType", level: 3, type: "u", mandatory: true, minver: 1, range: "1-254", description: "A set of track types coded on 8 bits (1: video, 2: audio, 3: complex, 0x10: logo, 0x11: subtitle, 0x12: buttons, 0x20: control)." }, 133: { name: "ChapString", cppname: "ChapterString", level: 5, type: "8", mandatory: true, minver: 1, webm: true, description: "Contains the string to use as the chapter atom." }, 134: { name: "CodecID", level: 3, type: "s", mandatory: true, minver: 1, description: "An ID corresponding to the codec, see the codec page for more info." }, 136: { name: "FlagDefault", cppname: "TrackFlagDefault", level: 3, type: "u", mandatory: true, minver: 1, default: 1, range: "0-1", description: "Set if that track (audio, video or subs) SHOULD be active if no language found matches the user preference. (1 bit)" }, 137: { name: "ChapterTrackNumber", level: 5, type: "u", mandatory: true, multiple: true, minver: 1, webm: false, range: "not 0", description: "UID of the Track to apply this chapter too. In the absense of a control track, choosing this chapter will select the listed Tracks and deselect unlisted tracks. Absense of this element indicates that the Chapter should be applied to any currently used Tracks." }, 145: { name: "ChapterTimeStart", level: 4, type: "u", mandatory: true, minver: 1, webm: true, description: "Timestamp of the start of Chapter (not scaled)." }, 146: { name: "ChapterTimeEnd", level: 4, type: "u", minver: 1, webm: false, description: "Timestamp of the end of Chapter (timestamp excluded, not scaled)." }, 150: { name: "CueRefTime", level: 5, type: "u", mandatory: true, minver: 2, webm: false, description: "Timestamp of the referenced Block." }, 151: { name: "CueRefCluster", level: 5, type: "u", mandatory: true, webm: false, description: "The Position of the Cluster containing the referenced Block." }, 152: { name: "ChapterFlagHidden", level: 4, type: "u", mandatory: true, minver: 1, webm: false, default: 0, range: "0-1", description: "If a chapter is hidden (1), it should not be available to the user interface (but still to Control Tracks; see flag notes). (1 bit)" }, 16980: { name: "ContentCompAlgo", level: 6, type: "u", mandatory: true, minver: 1, webm: false, default: 0, description: "The compression algorithm used. Algorithms that have been specified so far are: 0 - zlib,   3 - Header Stripping" }, 16981: { name: "ContentCompSettings", level: 6, type: "b", minver: 1, webm: false, description: "Settings that might be needed by the decompressor. For Header Stripping (ContentCompAlgo=3), the bytes that were removed from the beggining of each frames of the track." }, 17026: { name: "DocType", level: 1, type: "s", mandatory: true, default: "matroska", minver: 1, description: "A string that describes the type of document that follows this EBML header. 'matroska' in our case or 'webm' for webm files." }, 17029: { name: "DocTypeReadVersion", level: 1, type: "u", mandatory: true, default: 1, minver: 1, description: "The minimum DocType version an interpreter has to support to read this file." }, 17030: { name: "EBMLVersion", level: 1, type: "u", mandatory: true, default: 1, minver: 1, description: "The version of EBML parser used to create the file." }, 17031: { name: "DocTypeVersion", level: 1, type: "u", mandatory: true, default: 1, minver: 1, description: "The version of DocType interpreter used to create the file." }, 17476: { name: "SegmentFamily", level: 2, type: "b", multiple: true, minver: 1, webm: false, bytesize: 16, description: "A randomly generated unique ID that all segments related to each other must use (128 bits)." }, 17505: { name: "DateUTC", level: 2, type: "d", minver: 1, description: "Date of the origin of timestamp (value 0), i.e. production date." }, 17540: { name: "TagDefault", level: 4, type: "u", mandatory: true, minver: 1, webm: false, default: 1, range: "0-1", description: "Indication to know if this is the default/original language to use for the given tag. (1 bit)" }, 17541: { name: "TagBinary", level: 4, type: "b", minver: 1, webm: false, description: "The values of the Tag if it is binary. Note that this cannot be used in the same SimpleTag as TagString." }, 17543: { name: "TagString", level: 4, type: "8", minver: 1, webm: false, description: "The value of the Element." }, 17545: { name: "Duration", level: 2, type: "f", minver: 1, range: "> 0", description: "Duration of the segment (based on TimecodeScale)." }, 17816: { name: "ChapterFlagEnabled", level: 4, type: "u", mandatory: true, minver: 1, webm: false, default: 1, range: "0-1", description: "Specify wether the chapter is enabled. It can be enabled/disabled by a Control Track. When disabled, the movie should skip all the content between the TimeStart and TimeEnd of this chapter (see flag notes). (1 bit)" }, 18016: { name: "FileMimeType", level: 3, type: "s", mandatory: true, minver: 1, webm: false, description: "MIME type of the file." }, 18017: { name: "FileUsedStartTime", level: 3, type: "u", divx: true, description: "DivX font extension" }, 18018: { name: "FileUsedEndTime", level: 3, type: "u", divx: true, description: "DivX font extension" }, 18037: { name: "FileReferral", level: 3, type: "b", webm: false, description: "A binary value that a track/codec can refer to when the attachment is needed." }, 20529: { name: "ContentEncodingOrder", level: 5, type: "u", mandatory: true, minver: 1, webm: false, default: 0, description: "Tells when this modification was used during encoding/muxing starting with 0 and counting upwards. The decoder/demuxer has to start with the highest order number it finds and work its way down. This value has to be unique over all ContentEncodingOrder elements in the segment." }, 20530: { name: "ContentEncodingScope", level: 5, type: "u", mandatory: true, minver: 1, webm: false, default: 1, range: "not 0", description: "A bit field that describes which elements have been modified in this way. Values (big endian) can be OR'ed. Possible values: 1 - all frame contents, 2 - the track's private data, 4 - the next ContentEncoding (next ContentEncodingOrder. Either the data inside ContentCompression and/or ContentEncryption)" }, 20531: { name: "ContentEncodingType", level: 5, type: "u", mandatory: true, minver: 1, webm: false, default: 0, description: "A value describing what kind of transformation has been done. Possible values: 0 - compression, 1 - encryption" }, 20532: { name: "ContentCompression", level: 5, type: "m", minver: 1, webm: false, description: "Settings describing the compression used. Must be present if the value of ContentEncodingType is 0 and absent otherwise. Each block must be decompressable even if no previous block is available in order not to prevent seeking." }, 20533: { name: "ContentEncryption", level: 5, type: "m", minver: 1, webm: false, description: "Settings describing the encryption used. Must be present if the value of ContentEncodingType is 1 and absent otherwise." }, 21368: { name: "CueBlockNumber", level: 4, type: "u", minver: 1, default: 1, range: "not 0", description: "Number of the Block in the specified Cluster." }, 22100: { name: "ChapterStringUID", level: 4, type: "8", mandatory: false, minver: 3, webm: true, description: "A unique string ID to identify the Chapter. Use for WebVTT cue identifier storage." }, 22337: { name: "WritingApp", level: 2, type: "8", mandatory: true, minver: 1, description: 'Writing application ("mkvmerge-0.3.3").' }, 22612: { name: "SilentTracks", cppname: "ClusterSilentTracks", level: 2, type: "m", minver: 1, webm: false, description: "The list of tracks that are not used in that part of the stream. It is useful when using overlay tracks on seeking. Then you should decide what track to use." }, 25152: { name: "ContentEncoding", level: 4, type: "m", mandatory: true, multiple: true, minver: 1, webm: false, description: "Settings for one content encoding like compression or encryption." }, 25188: { name: "BitDepth", cppname: "AudioBitDepth", level: 4, type: "u", minver: 1, range: "not 0", description: "Bits per sample, mostly used for PCM." }, 25906: { name: "SignedElement", level: 3, type: "b", multiple: true, webm: false, description: "An element ID whose data will be used to compute the signature." }, 26148: { name: "TrackTranslate", level: 3, type: "m", multiple: true, minver: 1, webm: false, description: "The track identification for the given Chapter Codec." }, 26897: { name: "ChapProcessCommand", cppname: "ChapterProcessCommand", level: 5, type: "m", multiple: true, minver: 1, webm: false, description: "Contains all the commands associated to the Atom." }, 26914: { name: "ChapProcessTime", cppname: "ChapterProcessTime", level: 6, type: "u", mandatory: true, minver: 1, webm: false, description: "Defines when the process command should be handled (0: during the whole chapter, 1: before starting playback, 2: after playback of the chapter)." }, 26916: { name: "ChapterTranslate", level: 2, type: "m", multiple: true, minver: 1, webm: false, description: "A tuple of corresponding ID used by chapter codecs to represent this segment." }, 26931: { name: "ChapProcessData", cppname: "ChapterProcessData", level: 6, type: "b", mandatory: true, minver: 1, webm: false, description: "Contains the command information. The data should be interpreted depending on the ChapProcessCodecID value. For ChapProcessCodecID = 1, the data correspond to the binary DVD cell pre/post commands." }, 26948: { name: "ChapProcess", cppname: "ChapterProcess", level: 4, type: "m", multiple: true, minver: 1, webm: false, description: "Contains all the commands associated to the Atom." }, 26965: { name: "ChapProcessCodecID", cppname: "ChapterProcessCodecID", level: 5, type: "u", mandatory: true, minver: 1, webm: false, default: 0, description: "Contains the type of the codec used for the processing. A value of 0 means native Matroska processing (to be defined), a value of 1 means the DVD command set is used. More codec IDs can be added later." }, 29555: { name: "Tag", level: 2, type: "m", mandatory: true, multiple: true, minver: 1, webm: false, description: "Element containing elements specific to Tracks/Chapters." }, 29572: { name: "SegmentFilename", level: 2, type: "8", minver: 1, webm: false, description: "A filename corresponding to this segment." }, 29766: { name: "AttachmentLink", cppname: "TrackAttachmentLink", level: 3, type: "u", minver: 1, webm: false, range: "not 0", description: "The UID of an attachment that is used by this codec." }, 2459272: { name: "CodecName", level: 3, type: "8", minver: 1, description: "A human-readable string specifying the codec." }, 408125543: { name: "Segment", level: "0", type: "m", mandatory: true, multiple: true, minver: 1, description: "This element contains all other top-level (level 1) elements. Typically a Matroska file is composed of 1 segment." }, 17530: { name: "TagLanguage", level: 4, type: "s", mandatory: true, minver: 1, webm: false, default: "und", description: "Specifies the language of the tag specified, in the Matroska languages form." }, 17827: { name: "TagName", level: 4, type: "8", mandatory: true, minver: 1, webm: false, description: "The name of the Tag that is going to be stored." }, 26568: { name: "SimpleTag", cppname: "TagSimple", level: 3, recursive: "1", type: "m", mandatory: true, multiple: true, minver: 1, webm: false, description: "Contains general information about the target." }, 25542: { name: "TagAttachmentUID", level: 4, type: "u", multiple: true, minver: 1, webm: false, default: 0, description: "A unique ID to identify the Attachment(s) the tags belong to. If the value is 0 at this level, the tags apply to all the attachments in the Segment." }, 25540: { name: "TagChapterUID", level: 4, type: "u", multiple: true, minver: 1, webm: false, default: 0, description: "A unique ID to identify the Chapter(s) the tags belong to. If the value is 0 at this level, the tags apply to all chapters in the Segment." }, 25545: { name: "TagEditionUID", level: 4, type: "u", multiple: true, minver: 1, webm: false, default: 0, description: "A unique ID to identify the EditionEntry(s) the tags belong to. If the value is 0 at this level, the tags apply to all editions in the Segment." }, 25541: { name: "TagTrackUID", level: 4, type: "u", multiple: true, minver: 1, webm: false, default: 0, description: "A unique ID to identify the Track(s) the tags belong to. If the value is 0 at this level, the tags apply to all tracks in the Segment." }, 25546: { name: "TargetType", cppname: "TagTargetType", level: 4, type: "s", minver: 1, webm: false, strong: "informational", description: 'An  string that can be used to display the logical level of the target like "ALBUM", "TRACK", "MOVIE", "CHAPTER", etc (see TargetType).' }, 26826: { name: "TargetTypeValue", cppname: "TagTargetTypeValue", level: 4, type: "u", minver: 1, webm: false, default: 50, description: "A number to indicate the logical level of the target (see TargetType)." }, 25536: { name: "Targets", cppname: "TagTargets", level: 3, type: "m", mandatory: true, minver: 1, webm: false, description: "Contain all UIDs where the specified meta data apply. It is empty to describe everything in the segment." }, 307544935: { name: "Tags", level: 1, type: "m", multiple: true, minver: 1, webm: false, description: "Element containing elements specific to Tracks/Chapters. A list of valid tags can be found here." }, 17677: { name: "ChapProcessPrivate", cppname: "ChapterProcessPrivate", level: 5, type: "b", minver: 1, webm: false, description: 'Some optional data attached to the ChapProcessCodecID information. For ChapProcessCodecID = 1, it is the "DVD level" equivalent.' }, 17278: { name: "ChapCountry", cppname: "ChapterCountry", level: 5, type: "s", multiple: true, minver: 1, webm: false, description: "The countries corresponding to the string, same 2 octets as in Internet domains." }, 17276: { name: "ChapLanguage", cppname: "ChapterLanguage", level: 5, type: "s", mandatory: true, multiple: true, minver: 1, webm: true, default: "eng", description: "The languages corresponding to the string, in the bibliographic ISO-639-2 form." }, 143: { name: "ChapterTrack", level: 4, type: "m", minver: 1, webm: false, description: "List of tracks on which the chapter applies. If this element is not present, all tracks apply" }, 25539: { name: "ChapterPhysicalEquiv", level: 4, type: "u", minver: 1, webm: false, description: 'Specify the physical equivalent of this ChapterAtom like "DVD" (60) or "SIDE" (50), see complete list of values.' }, 28348: { name: "ChapterSegmentEditionUID", level: 4, type: "u", minver: 1, webm: false, range: "not 0", description: "The EditionUID to play from the segment linked in ChapterSegmentUID." }, 28263: { name: "ChapterSegmentUID", level: 4, type: "b", minver: 1, webm: false, range: ">0", bytesize: 16, description: "A segment to play in place of this chapter. Edition ChapterSegmentEditionUID should be used for this segment, otherwise no edition is used." }, 29636: { name: "ChapterUID", level: 4, type: "u", mandatory: true, minver: 1, webm: true, range: "not 0", description: "A unique ID to identify the Chapter." }, 182: { name: "ChapterAtom", level: 3, recursive: "1", type: "m", mandatory: true, multiple: true, minver: 1, webm: true, description: "Contains the atom information to use as the chapter atom (apply to all tracks)." }, 17885: { name: "EditionFlagOrdered", level: 3, type: "u", minver: 1, webm: false, default: 0, range: "0-1", description: "Specify if the chapters can be defined multiple times and the order to play them is enforced. (1 bit)" }, 17883: { name: "EditionFlagDefault", level: 3, type: "u", mandatory: true, minver: 1, webm: false, default: 0, range: "0-1", description: "If a flag is set (1) the edition should be used as the default one. (1 bit)" }, 17853: { name: "EditionFlagHidden", level: 3, type: "u", mandatory: true, minver: 1, webm: false, default: 0, range: "0-1", description: "If an edition is hidden (1), it should not be available to the user interface (but still to Control Tracks; see flag notes). (1 bit)" }, 17852: { name: "EditionUID", level: 3, type: "u", minver: 1, webm: false, range: "not 0", description: "A unique ID to identify the edition. It's useful for tagging an edition." }, 17849: { name: "EditionEntry", level: 2, type: "m", mandatory: true, multiple: true, minver: 1, webm: true, description: "Contains all information about a segment edition." }, 272869232: { name: "Chapters", level: 1, type: "m", minver: 1, webm: true, description: "A system to define basic menus and partition data. For more detailed information, look at the Chapters Explanation." }, 18094: { name: "FileUID", level: 3, type: "u", mandatory: true, minver: 1, webm: false, range: "not 0", description: "Unique ID representing the file, as random as possible." }, 18012: { name: "FileData", level: 3, type: "b", mandatory: true, minver: 1, webm: false, description: "The data of the file." }, 18030: { name: "FileName", level: 3, type: "8", mandatory: true, minver: 1, webm: false, description: "Filename of the attached file." }, 18046: { name: "FileDescription", level: 3, type: "8", minver: 1, webm: false, description: "A human-friendly name for the attached file." }, 24999: { name: "AttachedFile", level: 2, type: "m", mandatory: true, multiple: true, minver: 1, webm: false, description: "An attached file." }, 423732329: { name: "Attachments", level: 1, type: "m", minver: 1, webm: false, description: "Contain attached files." }, 235: { name: "CueRefCodecState", level: 5, type: "u", webm: false, default: 0, description: "The position of the Codec State corresponding to this referenced element. 0 means that the data is taken from the initial Track Entry." }, 21343: { name: "CueRefNumber", level: 5, type: "u", webm: false, default: 1, range: "not 0", description: "Number of the referenced Block of Track X in the specified Cluster." }, 219: { name: "CueReference", level: 4, type: "m", multiple: true, minver: 2, webm: false, description: "The Clusters containing the required referenced Blocks." }, 234: { name: "CueCodecState", level: 4, type: "u", minver: 2, webm: false, default: 0, description: "The position of the Codec State corresponding to this Cue element. 0 means that the data is taken from the initial Track Entry." }, 178: { name: "CueDuration", level: 4, type: "u", mandatory: false, minver: 4, webm: false, description: "The duration of the block according to the segment time base. If missing the track's DefaultDuration does not apply and no duration information is available in terms of the cues." }, 240: { name: "CueRelativePosition", level: 4, type: "u", mandatory: false, minver: 4, webm: false, description: "The relative position of the referenced block inside the cluster with 0 being the first possible position for an element inside that cluster.", position: "clusterRelative" }, 241: { name: "CueClusterPosition", level: 4, type: "u", mandatory: true, minver: 1, description: "The position of the Cluster containing the required Block.", position: "segment" }, 247: { name: "CueTrack", level: 4, type: "u", mandatory: true, minver: 1, range: "not 0", description: "The track for which a position is given." }, 183: { name: "CueTrackPositions", level: 3, type: "m", mandatory: true, multiple: true, minver: 1, description: "Contain positions for different tracks corresponding to the timestamp." }, 179: { name: "CueTime", level: 3, type: "u", mandatory: true, minver: 1, description: "Absolute timestamp according to the segment time base." }, 187: { name: "CuePoint", level: 2, type: "m", mandatory: true, multiple: true, minver: 1, description: "Contains all information relative to a seek point in the segment." }, 475249515: { name: "Cues", level: 1, type: "m", minver: 1, description: 'A top-level element to speed seeking access. All entries are local to the segment. Should be mandatory for non "live" streams.' }, 18406: { name: "ContentSigHashAlgo", level: 6, type: "u", minver: 1, webm: false, default: 0, description: "The hash algorithm used for the signature. A value of '0' means that the contents have not been signed but only encrypted. Predefined values: 1 - SHA1-160 2 - MD5" }, 18405: { name: "ContentSigAlgo", level: 6, type: "u", minver: 1, webm: false, default: 0, description: "The algorithm used for the signature. A value of '0' means that the contents have not been signed but only encrypted. Predefined values: 1 - RSA" }, 18404: { name: "ContentSigKeyID", level: 6, type: "b", minver: 1, webm: false, description: "This is the ID of the private key the data was signed with." }, 18403: { name: "ContentSignature", level: 6, type: "b", minver: 1, webm: false, description: "A cryptographic signature of the contents." }, 18402: { name: "ContentEncKeyID", level: 6, type: "b", minver: 1, webm: false, description: "For public key algorithms this is the ID of the public key the the data was encrypted with." }, 18401: { name: "ContentEncAlgo", level: 6, type: "u", minver: 1, webm: false, default: 0, description: "The encryption algorithm used. The value '0' means that the contents have not been encrypted but only signed. Predefined values: 1 - DES, 2 - 3DES, 3 - Twofish, 4 - Blowfish, 5 - AES" }, 28032: { name: "ContentEncodings", level: 3, type: "m", minver: 1, webm: false, description: "Settings for several content encoding mechanisms like compression or encryption." }, 196: { name: "TrickMasterTrackSegmentUID", level: 3, type: "b", divx: true, bytesize: 16, description: "DivX trick track extenstions" }, 199: { name: "TrickMasterTrackUID", level: 3, type: "u", divx: true, description: "DivX trick track extenstions" }, 198: { name: "TrickTrackFlag", level: 3, type: "u", divx: true, default: 0, description: "DivX trick track extenstions" }, 193: { name: "TrickTrackSegmentUID", level: 3, type: "b", divx: true, bytesize: 16, description: "DivX trick track extenstions" }, 192: { name: "TrickTrackUID", level: 3, type: "u", divx: true, description: "DivX trick track extenstions" }, 237: { name: "TrackJoinUID", level: 5, type: "u", mandatory: true, multiple: true, minver: 3, webm: false, range: "not 0", description: "The trackUID number of a track whose blocks are used to create this virtual track." }, 233: { name: "TrackJoinBlocks", level: 4, type: "m", minver: 3, webm: false, description: "Contains the list of all tracks whose Blocks need to be combined to create this virtual track" }, 230: { name: "TrackPlaneType", level: 6, type: "u", mandatory: true, minver: 3, webm: false, description: "The kind of plane this track corresponds to (0: left eye, 1: right eye, 2: background)." }, 229: { name: "TrackPlaneUID", level: 6, type: "u", mandatory: true, minver: 3, webm: false, range: "not 0", description: "The trackUID number of the track representing the plane." }, 228: { name: "TrackPlane", level: 5, type: "m", mandatory: true, multiple: true, minver: 3, webm: false, description: "Contains a video plane track that need to be combined to create this 3D track" }, 227: { name: "TrackCombinePlanes", level: 4, type: "m", minver: 3, webm: false, description: "Contains the list of all video plane tracks that need to be combined to create this 3D track" }, 226: { name: "TrackOperation", level: 3, type: "m", minver: 3, webm: false, description: "Operation that needs to be applied on tracks to create this virtual track. For more details look at the Specification Notes on the subject." }, 32123: { name: "ChannelPositions", cppname: "AudioPosition", level: 4, type: "b", webm: false, description: "Table of horizontal angles for each successive channel, see appendix." }, 159: { name: "Channels", cppname: "AudioChannels", level: 4, type: "u", mandatory: true, minver: 1, default: 1, range: "not 0", description: "Numbers of channels in the track." }, 30901: { name: "OutputSamplingFrequency", cppname: "AudioOutputSamplingFreq", level: 4, type: "f", minver: 1, default: "Sampling Frequency", range: "> 0", description: "Real output sampling frequency in Hz (used for SBR techniques)." }, 181: { name: "SamplingFrequency", cppname: "AudioSamplingFreq", level: 4, type: "f", mandatory: true, minver: 1, default: 8e3, range: "> 0", description: "Sampling frequency in Hz." }, 225: { name: "Audio", cppname: "TrackAudio", level: 3, type: "m", minver: 1, description: "Audio settings." }, 2327523: { name: "FrameRate", cppname: "VideoFrameRate", level: 4, type: "f", range: "> 0", strong: "Informational", description: "Number of frames per second.  only." }, 3126563: { name: "GammaValue", cppname: "VideoGamma", level: 4, type: "f", webm: false, range: "> 0", description: "Gamma Value." }, 3061028: { name: "ColourSpace", cppname: "VideoColourSpace", level: 4, type: "b", minver: 1, webm: false, bytesize: 4, description: "Same value as in AVI (32 bits)." }, 21683: { name: "AspectRatioType", cppname: "VideoAspectRatio", level: 4, type: "u", minver: 1, default: 0, description: "Specify the possible modifications to the aspect ratio (0: free resizing, 1: keep aspect ratio, 2: fixed)." }, 21682: { name: "DisplayUnit", cppname: "VideoDisplayUnit", level: 4, type: "u", minver: 1, default: 0, description: "How DisplayWidth & DisplayHeight should be interpreted (0: pixels, 1: centimeters, 2: inches, 3: Display Aspect Ratio)." }, 21690: { name: "DisplayHeight", cppname: "VideoDisplayHeight", level: 4, type: "u", minver: 1, default: "PixelHeight", range: "not 0", description: "Height of the video frames to display. The default value is only valid when DisplayUnit is 0." }, 21680: { name: "DisplayWidth", cppname: "VideoDisplayWidth", level: 4, type: "u", minver: 1, default: "PixelWidth", range: "not 0", description: "Width of the video frames to display. The default value is only valid when DisplayUnit is 0." }, 21725: { name: "PixelCropRight", cppname: "VideoPixelCropRight", level: 4, type: "u", minver: 1, default: 0, description: "The number of video pixels to remove on the right of the image." }, 21708: { name: "PixelCropLeft", cppname: "VideoPixelCropLeft", level: 4, type: "u", minver: 1, default: 0, description: "The number of video pixels to remove on the left of the image." }, 21691: { name: "PixelCropTop", cppname: "VideoPixelCropTop", level: 4, type: "u", minver: 1, default: 0, description: "The number of video pixels to remove at the top of the image." }, 21674: { name: "PixelCropBottom", cppname: "VideoPixelCropBottom", level: 4, type: "u", minver: 1, default: 0, description: "The number of video pixels to remove at the bottom of the image (for HDTV content)." }, 186: { name: "PixelHeight", cppname: "VideoPixelHeight", level: 4, type: "u", mandatory: true, minver: 1, range: "not 0", description: "Height of the encoded video frames in pixels." }, 176: { name: "PixelWidth", cppname: "VideoPixelWidth", level: 4, type: "u", mandatory: true, minver: 1, range: "not 0", description: "Width of the encoded video frames in pixels." }, 21433: { name: "OldStereoMode", level: 4, type: "u", maxver: "0", webm: false, divx: false, description: "DEPRECATED, DO NOT USE. Bogus StereoMode value used in old versions of libmatroska. (0: mono, 1: right eye, 2: left eye, 3: both eyes)." }, 21440: { name: "AlphaMode", cppname: "VideoAlphaMode", level: 4, type: "u", minver: 3, webm: true, default: 0, description: "Alpha Video Mode. Presence of this element indicates that the BlockAdditional element could contain Alpha data." }, 21432: { name: "StereoMode", cppname: "VideoStereoMode", level: 4, type: "u", minver: 3, webm: true, default: 0, description: "Stereo-3D video mode (0: mono, 1: side by side (left eye is first), 2: top-bottom (right eye is first), 3: top-bottom (left eye is first), 4: checkboard (right is first), 5: checkboard (left is first), 6: row interleaved (right is first), 7: row interleaved (left is first), 8: column interleaved (right is first), 9: column interleaved (left is first), 10: anaglyph (cyan/red), 11: side by side (right eye is first), 12: anaglyph (green/magenta), 13 both eyes laced in one Block (left eye is first), 14 both eyes laced in one Block (right eye is first)) . There are some more details on 3D support in the Specification Notes." }, 154: { name: "FlagInterlaced", cppname: "VideoFlagInterlaced", level: 4, type: "u", mandatory: true, minver: 2, webm: true, default: 0, range: "0-1", description: "Set if the video is interlaced. (1 bit)" }, 224: { name: "Video", cppname: "TrackVideo", level: 3, type: "m", minver: 1, description: "Video settings." }, 26277: { name: "TrackTranslateTrackID", level: 4, type: "b", mandatory: true, minver: 1, webm: false, description: "The binary value used to represent this track in the chapter codec data. The format depends on the ChapProcessCodecID used." }, 26303: { name: "TrackTranslateCodec", level: 4, type: "u", mandatory: true, minver: 1, webm: false, description: "The chapter codec using this ID (0: Matroska Script, 1: DVD-menu)." }, 26364: { name: "TrackTranslateEditionUID", level: 4, type: "u", multiple: true, minver: 1, webm: false, description: "Specify an edition UID on which this translation applies. When not specified, it means for all editions found in the segment." }, 22203: { name: "SeekPreRoll", level: 3, type: "u", mandatory: true, multiple: false, default: 0, minver: 4, webm: true, description: "After a discontinuity, SeekPreRoll is the duration in nanoseconds of the data the decoder must decode before the decoded data is valid." }, 22186: { name: "CodecDelay", level: 3, type: "u", multiple: false, default: 0, minver: 4, webm: true, description: "CodecDelay is The codec-built-in delay in nanoseconds. This value must be subtracted from each block timestamp in order to get the actual timestamp. The value should be small so the muxing of tracks with the same actual timestamp are in the same Cluster." }, 28587: { name: "TrackOverlay", level: 3, type: "u", multiple: true, minver: 1, webm: false, description: "Specify that this track is an overlay track for the Track specified (in the u-integer). That means when this track has a gap (see SilentTracks) the overlay track should be used instead. The order of multiple TrackOverlay matters, the first one is the one that should be used. If not found it should be the second, etc." }, 170: { name: "CodecDecodeAll", level: 3, type: "u", mandatory: true, minver: 2, webm: false, default: 1, range: "0-1", description: "The codec can decode potentially damaged data (1 bit)." }, 2536e3: { name: "CodecDownloadURL", level: 3, type: "s", multiple: true, webm: false, description: "A URL to download about the codec used." }, 3883072: { name: "CodecInfoURL", level: 3, type: "s", multiple: true, webm: false, description: "A URL to find information about the codec used." }, 3839639: { name: "CodecSettings", level: 3, type: "8", webm: false, description: "A string describing the encoding setting used." }, 25506: { name: "CodecPrivate", level: 3, type: "b", minver: 1, description: "Private data only known to the codec." }, 2274716: { name: "Language", cppname: "TrackLanguage", level: 3, type: "s", minver: 1, default: "eng", description: "Specifies the language of the track in the Matroska languages form." }, 21358: { name: "Name", cppname: "TrackName", level: 3, type: "8", minver: 1, description: "A human-readable track name." }, 21998: { name: "MaxBlockAdditionID", level: 3, type: "u", mandatory: true, minver: 1, webm: false, default: 0, description: "The maximum value of BlockAdditions for this track." }, 21375: { name: "TrackOffset", level: 3, type: "i", webm: false, default: 0, description: "A value to add to the Block's Timestamp. This can be used to adjust the playback offset of a track." }, 2306383: { name: "TrackTimecodeScale", level: 3, type: "f", mandatory: true, minver: 1, maxver: "3", webm: false, default: 1, range: "> 0", description: "DEPRECATED, DO NOT USE. The scale to apply on this track to work at normal speed in relation with other tracks (mostly used to adjust video speed when the audio length differs)." }, 2313850: { name: "DefaultDecodedFieldDuration", cppname: "TrackDefaultDecodedFieldDuration", level: 3, type: "u", minver: 4, range: "not 0", description: `The period in nanoseconds (not scaled by TimcodeScale)
between two successive fields at the output of the decoding process (see the notes)` }, 2352003: { name: "DefaultDuration", cppname: "TrackDefaultDuration", level: 3, type: "u", minver: 1, range: "not 0", description: "Number of nanoseconds (not scaled via TimecodeScale) per frame ('frame' in the Matroska sense -- one element put into a (Simple)Block)." }, 28152: { name: "MaxCache", cppname: "TrackMaxCache", level: 3, type: "u", minver: 1, webm: false, description: "The maximum cache size required to store referenced frames in and the current frame. 0 means no cache is needed." }, 28135: { name: "MinCache", cppname: "TrackMinCache", level: 3, type: "u", mandatory: true, minver: 1, webm: false, default: 0, description: "The minimum number of frames a player should be able to cache during playback. If set to 0, the reference pseudo-cache system is not used." }, 156: { name: "FlagLacing", cppname: "TrackFlagLacing", level: 3, type: "u", mandatory: true, minver: 1, default: 1, range: "0-1", description: "Set if the track may contain blocks using lacing. (1 bit)" }, 21930: { name: "FlagForced", cppname: "TrackFlagForced", level: 3, type: "u", mandatory: true, minver: 1, default: 0, range: "0-1", description: "Set if that track MUST be active during playback. There can be many forced track for a kind (audio, video or subs), the player should select the one which language matches the user preference or the default + forced track. Overlay MAY happen between a forced and non-forced track of the same kind. (1 bit)" }, 185: { name: "FlagEnabled", cppname: "TrackFlagEnabled", level: 3, type: "u", mandatory: true, minver: 2, webm: true, default: 1, range: "0-1", description: "Set if the track is usable. (1 bit)" }, 29637: { name: "TrackUID", level: 3, type: "u", mandatory: true, minver: 1, range: "not 0", description: "A unique ID to identify the Track. This should be kept the same when making a direct stream copy of the Track to another file." }, 215: { name: "TrackNumber", level: 3, type: "u", mandatory: true, minver: 1, range: "not 0", description: "The track number as used in the Block Header (using more than 127 tracks is not encouraged, though the design allows an unlimited number)." }, 174: { name: "TrackEntry", level: 2, type: "m", mandatory: true, multiple: true, minver: 1, description: "Describes a track with all elements." }, 374648427: { name: "Tracks", level: 1, type: "m", multiple: true, minver: 1, description: "A top-level block of information with many tracks described." }, 175: { name: "EncryptedBlock", level: 2, type: "b", multiple: true, webm: false, description: "Similar to EncryptedBlock Structure)" }, 202: { name: "ReferenceTimeCode", level: 4, type: "u", multiple: false, mandatory: true, minver: 0, webm: false, divx: true, description: "DivX trick track extenstions" }, 201: { name: "ReferenceOffset", level: 4, type: "u", multiple: false, mandatory: true, minver: 0, webm: false, divx: true, description: "DivX trick track extenstions" }, 200: { name: "ReferenceFrame", level: 3, type: "m", multiple: false, minver: 0, webm: false, divx: true, description: "DivX trick track extenstions" }, 207: { name: "SliceDuration", level: 5, type: "u", default: 0, description: "The (scaled) duration to apply to the element." }, 206: { name: "Delay", cppname: "SliceDelay", level: 5, type: "u", default: 0, description: "The (scaled) delay to apply to the element." }, 203: { name: "BlockAdditionID", cppname: "SliceBlockAddID", level: 5, type: "u", default: 0, description: "The ID of the BlockAdditional element (0 is the main Block)." }, 205: { name: "FrameNumber", cppname: "SliceFrameNumber", level: 5, type: "u", default: 0, description: "The number of the frame to generate from this lace with this delay (allow you to generate many frames from the same Block/Frame)." }, 204: { name: "LaceNumber", cppname: "SliceLaceNumber", level: 5, type: "u", minver: 1, default: 0, divx: false, description: "The reverse number of the frame in the lace (0 is the last frame, 1 is the next to last, etc). While there are a few files in the wild with this element, it is no longer in use and has been deprecated. Being able to interpret this element is not required for playback." }, 232: { name: "TimeSlice", level: 4, type: "m", multiple: true, minver: 1, divx: false, description: "Contains extra time information about the data contained in the Block. While there are a few files in the wild with this element, it is no longer in use and has been deprecated. Being able to interpret this element is not required for playback." }, 142: { name: "Slices", level: 3, type: "m", minver: 1, divx: false, description: "Contains slices description." }, 30114: { name: "DiscardPadding", level: 3, type: "i", minver: 4, webm: true, description: "Duration in nanoseconds of the silent data added to the Block (padding at the end of the Block for positive value, at the beginning of the Block for negative value). The duration of DiscardPadding is not calculated in the duration of the TrackEntry and should be discarded during playback." }, 164: { name: "CodecState", level: 3, type: "b", minver: 2, webm: false, description: "The new codec state to use. Data interpretation is private to the codec. This information should always be referenced by a seek entry." }, 253: { name: "ReferenceVirtual", level: 3, type: "i", webm: false, description: "Relative position of the data that should be in position of the virtual block." }, 251: { name: "ReferenceBlock", level: 3, type: "i", multiple: true, minver: 1, description: "Timestamp of another frame used as a reference (ie: B or P frame). The timestamp is relative to the block it's attached to." }, 250: { name: "ReferencePriority", cppname: "FlagReferenced", level: 3, type: "u", mandatory: true, minver: 1, webm: false, default: 0, description: "This frame is referenced and has the specified cache priority. In cache only a frame of the same or higher priority can replace this frame. A value of 0 means the frame is not referenced." }, 155: { name: "BlockDuration", level: 3, type: "u", minver: 1, default: "TrackDuration", description: 'The duration of the Block (based on TimecodeScale). This element is mandatory when DefaultDuration is set for the track (but can be omitted as other default values). When not written and with no DefaultDuration, the value is assumed to be the difference between the timestamp of this Block and the timestamp of the next Block in "display" order (not coding order). This element can be useful at the end of a Track (as there is not other Block available), or when there is a break in a track like for subtitle tracks. When set to 0 that means the frame is not a keyframe.' }, 165: { name: "BlockAdditional", level: 5, type: "b", mandatory: true, minver: 1, webm: false, description: "Interpreted by the codec as it wishes (using the BlockAddID)." }, 238: { name: "BlockAddID", level: 5, type: "u", mandatory: true, minver: 1, webm: false, default: 1, range: "not 0", description: "An ID to identify the BlockAdditional level." }, 166: { name: "BlockMore", level: 4, type: "m", mandatory: true, multiple: true, minver: 1, webm: false, description: "Contain the BlockAdditional and some parameters." }, 30113: { name: "BlockAdditions", level: 3, type: "m", minver: 1, webm: false, description: "Contain additional blocks to complete the main one. An EBML parser that has no knowledge of the Block structure could still see and use/skip these data." }, 162: { name: "BlockVirtual", level: 3, type: "b", webm: false, description: "A Block with no data. It must be stored in the stream at the place the real Block should be in display order. (see Block Virtual)" }, 161: { name: "Block", level: 3, type: "b", mandatory: true, minver: 1, description: "Block containing the actual data to be rendered and a timestamp relative to the Cluster Timecode. (see Block Structure)" }, 160: { name: "BlockGroup", level: 2, type: "m", multiple: true, minver: 1, description: "Basic container of information containing a single Block or BlockVirtual, and information specific to that Block/VirtualBlock." }, 163: { name: "SimpleBlock", level: 2, type: "b", multiple: true, minver: 2, webm: true, divx: true, description: "Similar to SimpleBlock Structure" }, 171: { name: "PrevSize", cppname: "ClusterPrevSize", level: 2, type: "u", minver: 1, description: "Size of the previous Cluster, in octets. Can be useful for backward playing.", position: "prevCluster" }, 167: { name: "Position", cppname: "ClusterPosition", level: 2, type: "u", minver: 1, webm: false, description: "The Position of the Cluster in the segment (0 in live broadcast streams). It might help to resynchronise offset on damaged streams.", position: "segment" }, 22743: { name: "SilentTrackNumber", cppname: "ClusterSilentTrackNumber", level: 3, type: "u", multiple: true, minver: 1, webm: false, description: "One of the track number that are not used from now on in the stream. It could change later if not specified as silent in a further Cluster." }, 231: { name: "Timecode", cppname: "ClusterTimecode", level: 2, type: "u", mandatory: true, minver: 1, description: "Absolute timestamp of the cluster (based on TimecodeScale)." }, 524531317: { name: "Cluster", level: 1, type: "m", multiple: true, minver: 1, description: "The lower level element containing the (monolithic) Block structure." }, 19840: { name: "MuxingApp", level: 2, type: "8", mandatory: true, minver: 1, description: 'Muxing application or library ("libmatroska-0.4.3").' }, 31657: { name: "Title", level: 2, type: "8", minver: 1, webm: false, description: "General name of the segment." }, 2807730: { name: "TimecodeScaleDenominator", level: 2, type: "u", mandatory: true, minver: 4, default: "1000000000", description: "Timestamp scale numerator, see TimecodeScale." }, 2807729: { name: "TimecodeScale", level: 2, type: "u", mandatory: true, minver: 1, default: "1000000", description: "Timestamp scale in nanoseconds (1.000.000 means all timestamps in the segment are expressed in milliseconds)." }, 27045: { name: "ChapterTranslateID", level: 3, type: "b", mandatory: true, minver: 1, webm: false, description: "The binary value used to represent this segment in the chapter codec data. The format depends on the ChapProcessCodecID used." }, 27071: { name: "ChapterTranslateCodec", level: 3, type: "u", mandatory: true, minver: 1, webm: false, description: "The chapter codec using this ID (0: Matroska Script, 1: DVD-menu)." }, 27132: { name: "ChapterTranslateEditionUID", level: 3, type: "u", multiple: true, minver: 1, webm: false, description: "Specify an edition UID on which this correspondance applies. When not specified, it means for all editions found in the segment." }, 4096955: { name: "NextFilename", level: 2, type: "8", minver: 1, webm: false, description: "An escaped filename corresponding to the next segment." }, 4110627: { name: "NextUID", level: 2, type: "b", minver: 1, webm: false, bytesize: 16, description: "A unique ID to identify the next chained segment (128 bits)." }, 3965867: { name: "PrevFilename", level: 2, type: "8", minver: 1, webm: false, description: "An escaped filename corresponding to the previous segment." }, 3979555: { name: "PrevUID", level: 2, type: "b", minver: 1, webm: false, bytesize: 16, description: "A unique ID to identify the previous chained segment (128 bits)." }, 29604: { name: "SegmentUID", level: 2, type: "b", minver: 1, webm: false, range: "not 0", bytesize: 16, description: "A randomly generated unique ID to identify the current segment between many others (128 bits)." }, 357149030: { name: "Info", level: 1, type: "m", mandatory: true, multiple: true, minver: 1, description: "Contains miscellaneous general information and statistics on the file." }, 21420: { name: "SeekPosition", level: 3, type: "u", mandatory: true, minver: 1, description: "The position of the element in the segment in octets (0 = first level 1 element).", position: "segment" }, 21419: { name: "SeekID", level: 3, type: "b", mandatory: true, minver: 1, description: "The binary ID corresponding to the element name.", type2: "ebmlID" }, 19899: { name: "Seek", cppname: "SeekPoint", level: 2, type: "m", mandatory: true, multiple: true, minver: 1, description: "Contains a single seek entry to an EBML element." }, 290298740: { name: "SeekHead", cppname: "SeekHeader", level: 1, type: "m", multiple: true, minver: 1, description: "Contains the position of other level 1 elements." }, 32379: { name: "SignatureElementList", level: 2, type: "m", multiple: true, webm: false, i: "Cluster|Block|BlockAdditional", description: "A list consists of a number of consecutive elements that represent one case where data is used in signature. Ex:  means that the BlockAdditional of all Blocks in all Clusters is used for encryption." }, 32347: { name: "SignatureElements", level: 1, type: "m", webm: false, description: "Contains elements that will be used to compute the signature." }, 32437: { name: "Signature", level: 1, type: "b", webm: false, description: "The signature of the data (until a new." }, 32421: { name: "SignaturePublicKey", level: 1, type: "b", webm: false, description: "The public key to use with the algorithm (in the case of a PKI-based signature)." }, 32410: { name: "SignatureHash", level: 1, type: "u", webm: false, description: "Hash algorithm used (1=SHA1-160, 2=MD5)." }, 32394: { name: "SignatureAlgo", level: 1, type: "u", webm: false, description: "Signature algorithm used (1=RSA, 2=elliptic)." }, 458458727: { name: "SignatureSlot", level: -1, type: "m", multiple: true, webm: false, description: "Contain signature of some (coming) elements in the stream." }, 191: { name: "CRC-32", level: -1, type: "b", minver: 1, webm: false, description: "The CRC is computed on all the data of the Master element it's in. The CRC element should be the first in it's parent master for easier reading. All level 1 elements should include a CRC-32. The CRC in use is the IEEE CRC32 Little Endian", crc: true }, 236: { name: "Void", level: -1, type: "b", minver: 1, description: "Used to void damaged data, to avoid unexpected behaviors when using damaged data. The content is discarded. Also used to reserve space in a sub-element for later use." }, 17139: { name: "EBMLMaxSizeLength", level: 1, type: "u", mandatory: true, default: 8, minver: 1, description: "The maximum length of the sizes you'll find in this file (8 or less in Matroska). This does not override the element size indicated at the beginning of an element. Elements that have an indicated size which is larger than what is allowed by EBMLMaxSizeLength shall be considered invalid." }, 17138: { name: "EBMLMaxIDLength", level: 1, type: "u", mandatory: true, default: 4, minver: 1, description: "The maximum length of the IDs you'll find in this file (4 or less in Matroska)." }, 17143: { name: "EBMLReadVersion", level: 1, type: "u", mandatory: true, default: 1, minver: 1, description: "The minimum EBML version a parser has to support to read this file." }, 440786851: { name: "EBML", level: "0", type: "m", mandatory: true, multiple: true, minver: 1, description: "Set the EBML characteristics of the data to follow. Each EBML document has to start with this." }, 21936: { name: "Colour", level: "4", type: "m", mandatory: true, multiple: true, description: "Settings describing the colour format." }, 21937: { name: "MatrixCoefficients", level: "5", type: "u", mandatory: true, multiple: true, description: "The Matrix Coefficients of the video used to derive luma and chroma values from red, green, and blue color primaries. For clarity, the value and meanings for MatrixCoefficients are adopted from Table 4 of ISO/IEC 23001-8:2016 or ITU-T H.273." }, 21945: { name: "Range", level: "5", type: "u", mandatory: true, multiple: true, description: "Clipping of the color ranges." }, 21946: { name: "TransferCharacteristics", level: "5", type: "u", mandatory: true, multiple: true, description: "The transfer characteristics of the video." }, 21947: { name: "Primaries", level: "5", type: "u", mandatory: true, multiple: true, description: "The colour primaries of the video. For clarity, the value and meanings for Primaries are adopted from Table 2 of ISO/IEC 23091-4 or ITU-T H.273." } };
var Af;
function Rm() {
  if (Af) return lo;
  Af = 1, Object.defineProperty(lo, "__esModule", { value: true });
  var e = jr(), t = jr(), n = Ma, r = function() {
    function i() {
      this._schema = n.byEbmlID, this._buffers = [], this._stack = [];
    }
    return i.prototype.encode = function(a) {
      var o = this;
      return e.concat(a.reduce(function(s, l) {
        return s.concat(o.encodeChunk(l));
      }, [])).buffer;
    }, i.prototype.encodeChunk = function(a) {
      return a.type === "m" ? a.isEnd ? this.endTag(a) : this.startTag(a) : (a.data = t.Buffer.from(a.data), this.writeTag(a)), this.flush();
    }, i.prototype.flush = function() {
      var a = this._buffers;
      return this._buffers = [], a;
    }, i.prototype.getSchemaInfo = function(a) {
      for (var o = Object.keys(this._schema).map(Number), s = 0; s < o.length; s++) {
        var l = o[s];
        if (this._schema[l].name === a) return new t.Buffer(l.toString(16), "hex");
      }
      return null;
    }, i.prototype.writeTag = function(a) {
      var o = a.name, s = this.getSchemaInfo(o), l = a.data;
      if (s == null) throw new Error("No schema entry found for " + o);
      var c = e.encodeTag(s, l);
      if (this._stack.length > 0) {
        var f = this._stack[this._stack.length - 1];
        f.children.push({ tagId: s, elm: a, children: [], data: c });
        return;
      }
      this._buffers = this._buffers.concat(c);
    }, i.prototype.startTag = function(a) {
      var o = a.name, s = this.getSchemaInfo(o);
      if (s == null) throw new Error("No schema entry found for " + o);
      if (a.unknownSize) {
        var l = e.encodeTag(s, new t.Buffer(0), a.unknownSize);
        this._buffers = this._buffers.concat(l);
        return;
      }
      var c = { tagId: s, elm: a, children: [], data: null };
      this._stack.length > 0 && this._stack[this._stack.length - 1].children.push(c), this._stack.push(c);
    }, i.prototype.endTag = function(a) {
      a.name;
      var o = this._stack.pop();
      if (o == null) throw new Error("EBML structure is broken");
      if (o.elm.name !== a.name) throw new Error("EBML structure is broken");
      var s = o.children.reduce(function(c, f) {
        if (f.data === null) throw new Error("EBML structure is broken");
        return c.concat(f.data);
      }, []), l = e.concat(s);
      o.elm.type === "m" ? o.data = e.encodeTag(o.tagId, l, o.elm.unknownSize) : o.data = e.encodeTag(o.tagId, l), this._stack.length < 1 && (this._buffers = this._buffers.concat(o.data));
    }, i;
  }();
  return lo.default = r, lo;
}
var Am = {}, Ts = {};
Ts.byteLength = Ew;
Ts.toByteArray = Tw;
Ts.fromByteArray = Nw;
var pn = [], Ht = [], Sw = typeof Uint8Array < "u" ? Uint8Array : Array, ll = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var $r = 0, _w = ll.length; $r < _w; ++$r) pn[$r] = ll[$r], Ht[ll.charCodeAt($r)] = $r;
Ht[45] = 62;
Ht[95] = 63;
function Dm(e) {
  var t = e.length;
  if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
  var n = e.indexOf("=");
  n === -1 && (n = t);
  var r = n === t ? 0 : 4 - n % 4;
  return [n, r];
}
function Ew(e) {
  var t = Dm(e), n = t[0], r = t[1];
  return (n + r) * 3 / 4 - r;
}
function Cw(e, t, n) {
  return (t + n) * 3 / 4 - n;
}
function Tw(e) {
  var t, n = Dm(e), r = n[0], i = n[1], a = new Sw(Cw(e, r, i)), o = 0, s = i > 0 ? r - 4 : r, l;
  for (l = 0; l < s; l += 4) t = Ht[e.charCodeAt(l)] << 18 | Ht[e.charCodeAt(l + 1)] << 12 | Ht[e.charCodeAt(l + 2)] << 6 | Ht[e.charCodeAt(l + 3)], a[o++] = t >> 16 & 255, a[o++] = t >> 8 & 255, a[o++] = t & 255;
  return i === 2 && (t = Ht[e.charCodeAt(l)] << 2 | Ht[e.charCodeAt(l + 1)] >> 4, a[o++] = t & 255), i === 1 && (t = Ht[e.charCodeAt(l)] << 10 | Ht[e.charCodeAt(l + 1)] << 4 | Ht[e.charCodeAt(l + 2)] >> 2, a[o++] = t >> 8 & 255, a[o++] = t & 255), a;
}
function bw(e) {
  return pn[e >> 18 & 63] + pn[e >> 12 & 63] + pn[e >> 6 & 63] + pn[e & 63];
}
function Pw(e, t, n) {
  for (var r, i = [], a = t; a < n; a += 3) r = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (e[a + 2] & 255), i.push(bw(r));
  return i.join("");
}
function Nw(e) {
  for (var t, n = e.length, r = n % 3, i = [], a = 16383, o = 0, s = n - r; o < s; o += a) i.push(Pw(e, o, o + a > s ? s : o + a));
  return r === 1 ? (t = e[n - 1], i.push(pn[t >> 2] + pn[t << 4 & 63] + "==")) : r === 2 && (t = (e[n - 2] << 8) + e[n - 1], i.push(pn[t >> 10] + pn[t >> 4 & 63] + pn[t << 2 & 63] + "=")), i.join("");
}
var xc = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
xc.read = function(e, t, n, r, i) {
  var a, o, s = i * 8 - r - 1, l = (1 << s) - 1, c = l >> 1, f = -7, h = n ? i - 1 : 0, g = n ? -1 : 1, w = e[t + h];
  for (h += g, a = w & (1 << -f) - 1, w >>= -f, f += s; f > 0; a = a * 256 + e[t + h], h += g, f -= 8) ;
  for (o = a & (1 << -f) - 1, a >>= -f, f += r; f > 0; o = o * 256 + e[t + h], h += g, f -= 8) ;
  if (a === 0) a = 1 - c;
  else {
    if (a === l) return o ? NaN : (w ? -1 : 1) * (1 / 0);
    o = o + Math.pow(2, r), a = a - c;
  }
  return (w ? -1 : 1) * o * Math.pow(2, a - r);
};
xc.write = function(e, t, n, r, i, a) {
  var o, s, l, c = a * 8 - i - 1, f = (1 << c) - 1, h = f >> 1, g = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, w = r ? 0 : a - 1, E = r ? 1 : -1, b = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
  for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, o = f) : (o = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -o)) < 1 && (o--, l *= 2), o + h >= 1 ? t += g / l : t += g * Math.pow(2, 1 - h), t * l >= 2 && (o++, l /= 2), o + h >= f ? (s = 0, o = f) : o + h >= 1 ? (s = (t * l - 1) * Math.pow(2, i), o = o + h) : (s = t * Math.pow(2, h - 1) * Math.pow(2, i), o = 0)); i >= 8; e[n + w] = s & 255, w += E, s /= 256, i -= 8) ;
  for (o = o << i | s, c += i; c > 0; e[n + w] = o & 255, w += E, o /= 256, c -= 8) ;
  e[n + w - E] |= b * 128;
};
/*!
* The buffer module from node.js, for the browser.
*
* @author   Feross Aboukhadijeh <https://feross.org>
* @license  MIT
*/
(function(e) {
  const t = Ts, n = xc, r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  e.Buffer = s, e.SlowBuffer = v, e.INSPECT_MAX_BYTES = 50;
  const i = 2147483647;
  e.kMaxLength = i, s.TYPED_ARRAY_SUPPORT = a(), !s.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
  function a() {
    try {
      const p = new Uint8Array(1), u = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(u, Uint8Array.prototype), Object.setPrototypeOf(p, u), p.foo() === 42;
    } catch {
      return false;
    }
  }
  Object.defineProperty(s.prototype, "parent", { enumerable: true, get: function() {
    if (s.isBuffer(this)) return this.buffer;
  } }), Object.defineProperty(s.prototype, "offset", { enumerable: true, get: function() {
    if (s.isBuffer(this)) return this.byteOffset;
  } });
  function o(p) {
    if (p > i) throw new RangeError('The value "' + p + '" is invalid for option "size"');
    const u = new Uint8Array(p);
    return Object.setPrototypeOf(u, s.prototype), u;
  }
  function s(p, u, d) {
    if (typeof p == "number") {
      if (typeof u == "string") throw new TypeError('The "string" argument must be of type string. Received type number');
      return h(p);
    }
    return l(p, u, d);
  }
  s.poolSize = 8192;
  function l(p, u, d) {
    if (typeof p == "string") return g(p, u);
    if (ArrayBuffer.isView(p)) return E(p);
    if (p == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof p);
    if (Vt(p, ArrayBuffer) || p && Vt(p.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (Vt(p, SharedArrayBuffer) || p && Vt(p.buffer, SharedArrayBuffer))) return b(p, u, d);
    if (typeof p == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
    const y = p.valueOf && p.valueOf();
    if (y != null && y !== p) return s.from(y, u, d);
    const P = I(p);
    if (P) return P;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof p[Symbol.toPrimitive] == "function") return s.from(p[Symbol.toPrimitive]("string"), u, d);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof p);
  }
  s.from = function(p, u, d) {
    return l(p, u, d);
  }, Object.setPrototypeOf(s.prototype, Uint8Array.prototype), Object.setPrototypeOf(s, Uint8Array);
  function c(p) {
    if (typeof p != "number") throw new TypeError('"size" argument must be of type number');
    if (p < 0) throw new RangeError('The value "' + p + '" is invalid for option "size"');
  }
  function f(p, u, d) {
    return c(p), p <= 0 ? o(p) : u !== void 0 ? typeof d == "string" ? o(p).fill(u, d) : o(p).fill(u) : o(p);
  }
  s.alloc = function(p, u, d) {
    return f(p, u, d);
  };
  function h(p) {
    return c(p), o(p < 0 ? 0 : x(p) | 0);
  }
  s.allocUnsafe = function(p) {
    return h(p);
  }, s.allocUnsafeSlow = function(p) {
    return h(p);
  };
  function g(p, u) {
    if ((typeof u != "string" || u === "") && (u = "utf8"), !s.isEncoding(u)) throw new TypeError("Unknown encoding: " + u);
    const d = S(p, u) | 0;
    let y = o(d);
    const P = y.write(p, u);
    return P !== d && (y = y.slice(0, P)), y;
  }
  function w(p) {
    const u = p.length < 0 ? 0 : x(p.length) | 0, d = o(u);
    for (let y = 0; y < u; y += 1) d[y] = p[y] & 255;
    return d;
  }
  function E(p) {
    if (Vt(p, Uint8Array)) {
      const u = new Uint8Array(p);
      return b(u.buffer, u.byteOffset, u.byteLength);
    }
    return w(p);
  }
  function b(p, u, d) {
    if (u < 0 || p.byteLength < u) throw new RangeError('"offset" is outside of buffer bounds');
    if (p.byteLength < u + (d || 0)) throw new RangeError('"length" is outside of buffer bounds');
    let y;
    return u === void 0 && d === void 0 ? y = new Uint8Array(p) : d === void 0 ? y = new Uint8Array(p, u) : y = new Uint8Array(p, u, d), Object.setPrototypeOf(y, s.prototype), y;
  }
  function I(p) {
    if (s.isBuffer(p)) {
      const u = x(p.length) | 0, d = o(u);
      return d.length === 0 || p.copy(d, 0, 0, u), d;
    }
    if (p.length !== void 0) return typeof p.length != "number" || Ri(p.length) ? o(0) : w(p);
    if (p.type === "Buffer" && Array.isArray(p.data)) return w(p.data);
  }
  function x(p) {
    if (p >= i) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
    return p | 0;
  }
  function v(p) {
    return +p != p && (p = 0), s.alloc(+p);
  }
  s.isBuffer = function(u) {
    return u != null && u._isBuffer === true && u !== s.prototype;
  }, s.compare = function(u, d) {
    if (Vt(u, Uint8Array) && (u = s.from(u, u.offset, u.byteLength)), Vt(d, Uint8Array) && (d = s.from(d, d.offset, d.byteLength)), !s.isBuffer(u) || !s.isBuffer(d)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (u === d) return 0;
    let y = u.length, P = d.length;
    for (let D = 0, B = Math.min(y, P); D < B; ++D) if (u[D] !== d[D]) {
      y = u[D], P = d[D];
      break;
    }
    return y < P ? -1 : P < y ? 1 : 0;
  }, s.isEncoding = function(u) {
    switch (String(u).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return true;
      default:
        return false;
    }
  }, s.concat = function(u, d) {
    if (!Array.isArray(u)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (u.length === 0) return s.alloc(0);
    let y;
    if (d === void 0) for (d = 0, y = 0; y < u.length; ++y) d += u[y].length;
    const P = s.allocUnsafe(d);
    let D = 0;
    for (y = 0; y < u.length; ++y) {
      let B = u[y];
      if (Vt(B, Uint8Array)) D + B.length > P.length ? (s.isBuffer(B) || (B = s.from(B)), B.copy(P, D)) : Uint8Array.prototype.set.call(P, B, D);
      else if (s.isBuffer(B)) B.copy(P, D);
      else throw new TypeError('"list" argument must be an Array of Buffers');
      D += B.length;
    }
    return P;
  };
  function S(p, u) {
    if (s.isBuffer(p)) return p.length;
    if (ArrayBuffer.isView(p) || Vt(p, ArrayBuffer)) return p.byteLength;
    if (typeof p != "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof p);
    const d = p.length, y = arguments.length > 2 && arguments[2] === true;
    if (!y && d === 0) return 0;
    let P = false;
    for (; ; ) switch (u) {
      case "ascii":
      case "latin1":
      case "binary":
        return d;
      case "utf8":
      case "utf-8":
        return qt(p).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return d * 2;
      case "hex":
        return d >>> 1;
      case "base64":
        return Bn(p).length;
      default:
        if (P) return y ? -1 : qt(p).length;
        u = ("" + u).toLowerCase(), P = true;
    }
  }
  s.byteLength = S;
  function A(p, u, d) {
    let y = false;
    if ((u === void 0 || u < 0) && (u = 0), u > this.length || ((d === void 0 || d > this.length) && (d = this.length), d <= 0) || (d >>>= 0, u >>>= 0, d <= u)) return "";
    for (p || (p = "utf8"); ; ) switch (p) {
      case "hex":
        return J(this, u, d);
      case "utf8":
      case "utf-8":
        return X(this, u, d);
      case "ascii":
        return Z(this, u, d);
      case "latin1":
      case "binary":
        return F(this, u, d);
      case "base64":
        return $(this, u, d);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return oe(this, u, d);
      default:
        if (y) throw new TypeError("Unknown encoding: " + p);
        p = (p + "").toLowerCase(), y = true;
    }
  }
  s.prototype._isBuffer = true;
  function M(p, u, d) {
    const y = p[u];
    p[u] = p[d], p[d] = y;
  }
  s.prototype.swap16 = function() {
    const u = this.length;
    if (u % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let d = 0; d < u; d += 2) M(this, d, d + 1);
    return this;
  }, s.prototype.swap32 = function() {
    const u = this.length;
    if (u % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let d = 0; d < u; d += 4) M(this, d, d + 3), M(this, d + 1, d + 2);
    return this;
  }, s.prototype.swap64 = function() {
    const u = this.length;
    if (u % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let d = 0; d < u; d += 8) M(this, d, d + 7), M(this, d + 1, d + 6), M(this, d + 2, d + 5), M(this, d + 3, d + 4);
    return this;
  }, s.prototype.toString = function() {
    const u = this.length;
    return u === 0 ? "" : arguments.length === 0 ? X(this, 0, u) : A.apply(this, arguments);
  }, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(u) {
    if (!s.isBuffer(u)) throw new TypeError("Argument must be a Buffer");
    return this === u ? true : s.compare(this, u) === 0;
  }, s.prototype.inspect = function() {
    let u = "";
    const d = e.INSPECT_MAX_BYTES;
    return u = this.toString("hex", 0, d).replace(/(.{2})/g, "$1 ").trim(), this.length > d && (u += " ... "), "<Buffer " + u + ">";
  }, r && (s.prototype[r] = s.prototype.inspect), s.prototype.compare = function(u, d, y, P, D) {
    if (Vt(u, Uint8Array) && (u = s.from(u, u.offset, u.byteLength)), !s.isBuffer(u)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof u);
    if (d === void 0 && (d = 0), y === void 0 && (y = u ? u.length : 0), P === void 0 && (P = 0), D === void 0 && (D = this.length), d < 0 || y > u.length || P < 0 || D > this.length) throw new RangeError("out of range index");
    if (P >= D && d >= y) return 0;
    if (P >= D) return -1;
    if (d >= y) return 1;
    if (d >>>= 0, y >>>= 0, P >>>= 0, D >>>= 0, this === u) return 0;
    let B = D - P, ye = y - d;
    const Fe = Math.min(B, ye), Le = this.slice(P, D), We = u.slice(d, y);
    for (let Ae = 0; Ae < Fe; ++Ae) if (Le[Ae] !== We[Ae]) {
      B = Le[Ae], ye = We[Ae];
      break;
    }
    return B < ye ? -1 : ye < B ? 1 : 0;
  };
  function z(p, u, d, y, P) {
    if (p.length === 0) return -1;
    if (typeof d == "string" ? (y = d, d = 0) : d > 2147483647 ? d = 2147483647 : d < -2147483648 && (d = -2147483648), d = +d, Ri(d) && (d = P ? 0 : p.length - 1), d < 0 && (d = p.length + d), d >= p.length) {
      if (P) return -1;
      d = p.length - 1;
    } else if (d < 0) if (P) d = 0;
    else return -1;
    if (typeof u == "string" && (u = s.from(u, y)), s.isBuffer(u)) return u.length === 0 ? -1 : _(p, u, d, y, P);
    if (typeof u == "number") return u = u & 255, typeof Uint8Array.prototype.indexOf == "function" ? P ? Uint8Array.prototype.indexOf.call(p, u, d) : Uint8Array.prototype.lastIndexOf.call(p, u, d) : _(p, [u], d, y, P);
    throw new TypeError("val must be string, number or Buffer");
  }
  function _(p, u, d, y, P) {
    let D = 1, B = p.length, ye = u.length;
    if (y !== void 0 && (y = String(y).toLowerCase(), y === "ucs2" || y === "ucs-2" || y === "utf16le" || y === "utf-16le")) {
      if (p.length < 2 || u.length < 2) return -1;
      D = 2, B /= 2, ye /= 2, d /= 2;
    }
    function Fe(We, Ae) {
      return D === 1 ? We[Ae] : We.readUInt16BE(Ae * D);
    }
    let Le;
    if (P) {
      let We = -1;
      for (Le = d; Le < B; Le++) if (Fe(p, Le) === Fe(u, We === -1 ? 0 : Le - We)) {
        if (We === -1 && (We = Le), Le - We + 1 === ye) return We * D;
      } else We !== -1 && (Le -= Le - We), We = -1;
    } else for (d + ye > B && (d = B - ye), Le = d; Le >= 0; Le--) {
      let We = true;
      for (let Ae = 0; Ae < ye; Ae++) if (Fe(p, Le + Ae) !== Fe(u, Ae)) {
        We = false;
        break;
      }
      if (We) return Le;
    }
    return -1;
  }
  s.prototype.includes = function(u, d, y) {
    return this.indexOf(u, d, y) !== -1;
  }, s.prototype.indexOf = function(u, d, y) {
    return z(this, u, d, y, true);
  }, s.prototype.lastIndexOf = function(u, d, y) {
    return z(this, u, d, y, false);
  };
  function R(p, u, d, y) {
    d = Number(d) || 0;
    const P = p.length - d;
    y ? (y = Number(y), y > P && (y = P)) : y = P;
    const D = u.length;
    y > D / 2 && (y = D / 2);
    let B;
    for (B = 0; B < y; ++B) {
      const ye = parseInt(u.substr(B * 2, 2), 16);
      if (Ri(ye)) return B;
      p[d + B] = ye;
    }
    return B;
  }
  function V(p, u, d, y) {
    return Mn(qt(u, p.length - d), p, d, y);
  }
  function T(p, u, d, y) {
    return Mn(ln(u), p, d, y);
  }
  function L(p, u, d, y) {
    return Mn(Bn(u), p, d, y);
  }
  function O(p, u, d, y) {
    return Mn(Fr(u, p.length - d), p, d, y);
  }
  s.prototype.write = function(u, d, y, P) {
    if (d === void 0) P = "utf8", y = this.length, d = 0;
    else if (y === void 0 && typeof d == "string") P = d, y = this.length, d = 0;
    else if (isFinite(d)) d = d >>> 0, isFinite(y) ? (y = y >>> 0, P === void 0 && (P = "utf8")) : (P = y, y = void 0);
    else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    const D = this.length - d;
    if ((y === void 0 || y > D) && (y = D), u.length > 0 && (y < 0 || d < 0) || d > this.length) throw new RangeError("Attempt to write outside buffer bounds");
    P || (P = "utf8");
    let B = false;
    for (; ; ) switch (P) {
      case "hex":
        return R(this, u, d, y);
      case "utf8":
      case "utf-8":
        return V(this, u, d, y);
      case "ascii":
      case "latin1":
      case "binary":
        return T(this, u, d, y);
      case "base64":
        return L(this, u, d, y);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return O(this, u, d, y);
      default:
        if (B) throw new TypeError("Unknown encoding: " + P);
        P = ("" + P).toLowerCase(), B = true;
    }
  }, s.prototype.toJSON = function() {
    return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
  };
  function $(p, u, d) {
    return u === 0 && d === p.length ? t.fromByteArray(p) : t.fromByteArray(p.slice(u, d));
  }
  function X(p, u, d) {
    d = Math.min(p.length, d);
    const y = [];
    let P = u;
    for (; P < d; ) {
      const D = p[P];
      let B = null, ye = D > 239 ? 4 : D > 223 ? 3 : D > 191 ? 2 : 1;
      if (P + ye <= d) {
        let Fe, Le, We, Ae;
        switch (ye) {
          case 1:
            D < 128 && (B = D);
            break;
          case 2:
            Fe = p[P + 1], (Fe & 192) === 128 && (Ae = (D & 31) << 6 | Fe & 63, Ae > 127 && (B = Ae));
            break;
          case 3:
            Fe = p[P + 1], Le = p[P + 2], (Fe & 192) === 128 && (Le & 192) === 128 && (Ae = (D & 15) << 12 | (Fe & 63) << 6 | Le & 63, Ae > 2047 && (Ae < 55296 || Ae > 57343) && (B = Ae));
            break;
          case 4:
            Fe = p[P + 1], Le = p[P + 2], We = p[P + 3], (Fe & 192) === 128 && (Le & 192) === 128 && (We & 192) === 128 && (Ae = (D & 15) << 18 | (Fe & 63) << 12 | (Le & 63) << 6 | We & 63, Ae > 65535 && Ae < 1114112 && (B = Ae));
        }
      }
      B === null ? (B = 65533, ye = 1) : B > 65535 && (B -= 65536, y.push(B >>> 10 & 1023 | 55296), B = 56320 | B & 1023), y.push(B), P += ye;
    }
    return Se(y);
  }
  const de = 4096;
  function Se(p) {
    const u = p.length;
    if (u <= de) return String.fromCharCode.apply(String, p);
    let d = "", y = 0;
    for (; y < u; ) d += String.fromCharCode.apply(String, p.slice(y, y += de));
    return d;
  }
  function Z(p, u, d) {
    let y = "";
    d = Math.min(p.length, d);
    for (let P = u; P < d; ++P) y += String.fromCharCode(p[P] & 127);
    return y;
  }
  function F(p, u, d) {
    let y = "";
    d = Math.min(p.length, d);
    for (let P = u; P < d; ++P) y += String.fromCharCode(p[P]);
    return y;
  }
  function J(p, u, d) {
    const y = p.length;
    (!u || u < 0) && (u = 0), (!d || d < 0 || d > y) && (d = y);
    let P = "";
    for (let D = u; D < d; ++D) P += yn[p[D]];
    return P;
  }
  function oe(p, u, d) {
    const y = p.slice(u, d);
    let P = "";
    for (let D = 0; D < y.length - 1; D += 2) P += String.fromCharCode(y[D] + y[D + 1] * 256);
    return P;
  }
  s.prototype.slice = function(u, d) {
    const y = this.length;
    u = ~~u, d = d === void 0 ? y : ~~d, u < 0 ? (u += y, u < 0 && (u = 0)) : u > y && (u = y), d < 0 ? (d += y, d < 0 && (d = 0)) : d > y && (d = y), d < u && (d = u);
    const P = this.subarray(u, d);
    return Object.setPrototypeOf(P, s.prototype), P;
  };
  function ne(p, u, d) {
    if (p % 1 !== 0 || p < 0) throw new RangeError("offset is not uint");
    if (p + u > d) throw new RangeError("Trying to access beyond buffer length");
  }
  s.prototype.readUintLE = s.prototype.readUIntLE = function(u, d, y) {
    u = u >>> 0, d = d >>> 0, y || ne(u, d, this.length);
    let P = this[u], D = 1, B = 0;
    for (; ++B < d && (D *= 256); ) P += this[u + B] * D;
    return P;
  }, s.prototype.readUintBE = s.prototype.readUIntBE = function(u, d, y) {
    u = u >>> 0, d = d >>> 0, y || ne(u, d, this.length);
    let P = this[u + --d], D = 1;
    for (; d > 0 && (D *= 256); ) P += this[u + --d] * D;
    return P;
  }, s.prototype.readUint8 = s.prototype.readUInt8 = function(u, d) {
    return u = u >>> 0, d || ne(u, 1, this.length), this[u];
  }, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(u, d) {
    return u = u >>> 0, d || ne(u, 2, this.length), this[u] | this[u + 1] << 8;
  }, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(u, d) {
    return u = u >>> 0, d || ne(u, 2, this.length), this[u] << 8 | this[u + 1];
  }, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(u, d) {
    return u = u >>> 0, d || ne(u, 4, this.length), (this[u] | this[u + 1] << 8 | this[u + 2] << 16) + this[u + 3] * 16777216;
  }, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(u, d) {
    return u = u >>> 0, d || ne(u, 4, this.length), this[u] * 16777216 + (this[u + 1] << 16 | this[u + 2] << 8 | this[u + 3]);
  }, s.prototype.readBigUInt64LE = bt(function(u) {
    u = u >>> 0, _e(u, "offset");
    const d = this[u], y = this[u + 7];
    (d === void 0 || y === void 0) && tt(u, this.length - 8);
    const P = d + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + this[++u] * 2 ** 24, D = this[++u] + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + y * 2 ** 24;
    return BigInt(P) + (BigInt(D) << BigInt(32));
  }), s.prototype.readBigUInt64BE = bt(function(u) {
    u = u >>> 0, _e(u, "offset");
    const d = this[u], y = this[u + 7];
    (d === void 0 || y === void 0) && tt(u, this.length - 8);
    const P = d * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + this[++u], D = this[++u] * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + y;
    return (BigInt(P) << BigInt(32)) + BigInt(D);
  }), s.prototype.readIntLE = function(u, d, y) {
    u = u >>> 0, d = d >>> 0, y || ne(u, d, this.length);
    let P = this[u], D = 1, B = 0;
    for (; ++B < d && (D *= 256); ) P += this[u + B] * D;
    return D *= 128, P >= D && (P -= Math.pow(2, 8 * d)), P;
  }, s.prototype.readIntBE = function(u, d, y) {
    u = u >>> 0, d = d >>> 0, y || ne(u, d, this.length);
    let P = d, D = 1, B = this[u + --P];
    for (; P > 0 && (D *= 256); ) B += this[u + --P] * D;
    return D *= 128, B >= D && (B -= Math.pow(2, 8 * d)), B;
  }, s.prototype.readInt8 = function(u, d) {
    return u = u >>> 0, d || ne(u, 1, this.length), this[u] & 128 ? (255 - this[u] + 1) * -1 : this[u];
  }, s.prototype.readInt16LE = function(u, d) {
    u = u >>> 0, d || ne(u, 2, this.length);
    const y = this[u] | this[u + 1] << 8;
    return y & 32768 ? y | 4294901760 : y;
  }, s.prototype.readInt16BE = function(u, d) {
    u = u >>> 0, d || ne(u, 2, this.length);
    const y = this[u + 1] | this[u] << 8;
    return y & 32768 ? y | 4294901760 : y;
  }, s.prototype.readInt32LE = function(u, d) {
    return u = u >>> 0, d || ne(u, 4, this.length), this[u] | this[u + 1] << 8 | this[u + 2] << 16 | this[u + 3] << 24;
  }, s.prototype.readInt32BE = function(u, d) {
    return u = u >>> 0, d || ne(u, 4, this.length), this[u] << 24 | this[u + 1] << 16 | this[u + 2] << 8 | this[u + 3];
  }, s.prototype.readBigInt64LE = bt(function(u) {
    u = u >>> 0, _e(u, "offset");
    const d = this[u], y = this[u + 7];
    (d === void 0 || y === void 0) && tt(u, this.length - 8);
    const P = this[u + 4] + this[u + 5] * 2 ** 8 + this[u + 6] * 2 ** 16 + (y << 24);
    return (BigInt(P) << BigInt(32)) + BigInt(d + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + this[++u] * 2 ** 24);
  }), s.prototype.readBigInt64BE = bt(function(u) {
    u = u >>> 0, _e(u, "offset");
    const d = this[u], y = this[u + 7];
    (d === void 0 || y === void 0) && tt(u, this.length - 8);
    const P = (d << 24) + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + this[++u];
    return (BigInt(P) << BigInt(32)) + BigInt(this[++u] * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + y);
  }), s.prototype.readFloatLE = function(u, d) {
    return u = u >>> 0, d || ne(u, 4, this.length), n.read(this, u, true, 23, 4);
  }, s.prototype.readFloatBE = function(u, d) {
    return u = u >>> 0, d || ne(u, 4, this.length), n.read(this, u, false, 23, 4);
  }, s.prototype.readDoubleLE = function(u, d) {
    return u = u >>> 0, d || ne(u, 8, this.length), n.read(this, u, true, 52, 8);
  }, s.prototype.readDoubleBE = function(u, d) {
    return u = u >>> 0, d || ne(u, 8, this.length), n.read(this, u, false, 52, 8);
  };
  function K(p, u, d, y, P, D) {
    if (!s.isBuffer(p)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (u > P || u < D) throw new RangeError('"value" argument is out of bounds');
    if (d + y > p.length) throw new RangeError("Index out of range");
  }
  s.prototype.writeUintLE = s.prototype.writeUIntLE = function(u, d, y, P) {
    if (u = +u, d = d >>> 0, y = y >>> 0, !P) {
      const ye = Math.pow(2, 8 * y) - 1;
      K(this, u, d, y, ye, 0);
    }
    let D = 1, B = 0;
    for (this[d] = u & 255; ++B < y && (D *= 256); ) this[d + B] = u / D & 255;
    return d + y;
  }, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(u, d, y, P) {
    if (u = +u, d = d >>> 0, y = y >>> 0, !P) {
      const ye = Math.pow(2, 8 * y) - 1;
      K(this, u, d, y, ye, 0);
    }
    let D = y - 1, B = 1;
    for (this[d + D] = u & 255; --D >= 0 && (B *= 256); ) this[d + D] = u / B & 255;
    return d + y;
  }, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(u, d, y) {
    return u = +u, d = d >>> 0, y || K(this, u, d, 1, 255, 0), this[d] = u & 255, d + 1;
  }, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(u, d, y) {
    return u = +u, d = d >>> 0, y || K(this, u, d, 2, 65535, 0), this[d] = u & 255, this[d + 1] = u >>> 8, d + 2;
  }, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(u, d, y) {
    return u = +u, d = d >>> 0, y || K(this, u, d, 2, 65535, 0), this[d] = u >>> 8, this[d + 1] = u & 255, d + 2;
  }, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(u, d, y) {
    return u = +u, d = d >>> 0, y || K(this, u, d, 4, 4294967295, 0), this[d + 3] = u >>> 24, this[d + 2] = u >>> 16, this[d + 1] = u >>> 8, this[d] = u & 255, d + 4;
  }, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(u, d, y) {
    return u = +u, d = d >>> 0, y || K(this, u, d, 4, 4294967295, 0), this[d] = u >>> 24, this[d + 1] = u >>> 16, this[d + 2] = u >>> 8, this[d + 3] = u & 255, d + 4;
  };
  function Ze(p, u, d, y, P) {
    se(u, y, P, p, d, 7);
    let D = Number(u & BigInt(4294967295));
    p[d++] = D, D = D >> 8, p[d++] = D, D = D >> 8, p[d++] = D, D = D >> 8, p[d++] = D;
    let B = Number(u >> BigInt(32) & BigInt(4294967295));
    return p[d++] = B, B = B >> 8, p[d++] = B, B = B >> 8, p[d++] = B, B = B >> 8, p[d++] = B, d;
  }
  function me(p, u, d, y, P) {
    se(u, y, P, p, d, 7);
    let D = Number(u & BigInt(4294967295));
    p[d + 7] = D, D = D >> 8, p[d + 6] = D, D = D >> 8, p[d + 5] = D, D = D >> 8, p[d + 4] = D;
    let B = Number(u >> BigInt(32) & BigInt(4294967295));
    return p[d + 3] = B, B = B >> 8, p[d + 2] = B, B = B >> 8, p[d + 1] = B, B = B >> 8, p[d] = B, d + 8;
  }
  s.prototype.writeBigUInt64LE = bt(function(u, d = 0) {
    return Ze(this, u, d, BigInt(0), BigInt("0xffffffffffffffff"));
  }), s.prototype.writeBigUInt64BE = bt(function(u, d = 0) {
    return me(this, u, d, BigInt(0), BigInt("0xffffffffffffffff"));
  }), s.prototype.writeIntLE = function(u, d, y, P) {
    if (u = +u, d = d >>> 0, !P) {
      const Fe = Math.pow(2, 8 * y - 1);
      K(this, u, d, y, Fe - 1, -Fe);
    }
    let D = 0, B = 1, ye = 0;
    for (this[d] = u & 255; ++D < y && (B *= 256); ) u < 0 && ye === 0 && this[d + D - 1] !== 0 && (ye = 1), this[d + D] = (u / B >> 0) - ye & 255;
    return d + y;
  }, s.prototype.writeIntBE = function(u, d, y, P) {
    if (u = +u, d = d >>> 0, !P) {
      const Fe = Math.pow(2, 8 * y - 1);
      K(this, u, d, y, Fe - 1, -Fe);
    }
    let D = y - 1, B = 1, ye = 0;
    for (this[d + D] = u & 255; --D >= 0 && (B *= 256); ) u < 0 && ye === 0 && this[d + D + 1] !== 0 && (ye = 1), this[d + D] = (u / B >> 0) - ye & 255;
    return d + y;
  }, s.prototype.writeInt8 = function(u, d, y) {
    return u = +u, d = d >>> 0, y || K(this, u, d, 1, 127, -128), u < 0 && (u = 255 + u + 1), this[d] = u & 255, d + 1;
  }, s.prototype.writeInt16LE = function(u, d, y) {
    return u = +u, d = d >>> 0, y || K(this, u, d, 2, 32767, -32768), this[d] = u & 255, this[d + 1] = u >>> 8, d + 2;
  }, s.prototype.writeInt16BE = function(u, d, y) {
    return u = +u, d = d >>> 0, y || K(this, u, d, 2, 32767, -32768), this[d] = u >>> 8, this[d + 1] = u & 255, d + 2;
  }, s.prototype.writeInt32LE = function(u, d, y) {
    return u = +u, d = d >>> 0, y || K(this, u, d, 4, 2147483647, -2147483648), this[d] = u & 255, this[d + 1] = u >>> 8, this[d + 2] = u >>> 16, this[d + 3] = u >>> 24, d + 4;
  }, s.prototype.writeInt32BE = function(u, d, y) {
    return u = +u, d = d >>> 0, y || K(this, u, d, 4, 2147483647, -2147483648), u < 0 && (u = 4294967295 + u + 1), this[d] = u >>> 24, this[d + 1] = u >>> 16, this[d + 2] = u >>> 8, this[d + 3] = u & 255, d + 4;
  }, s.prototype.writeBigInt64LE = bt(function(u, d = 0) {
    return Ze(this, u, d, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), s.prototype.writeBigInt64BE = bt(function(u, d = 0) {
    return me(this, u, d, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function Ce(p, u, d, y, P, D) {
    if (d + y > p.length) throw new RangeError("Index out of range");
    if (d < 0) throw new RangeError("Index out of range");
  }
  function Oe(p, u, d, y, P) {
    return u = +u, d = d >>> 0, P || Ce(p, u, d, 4), n.write(p, u, d, y, 23, 4), d + 4;
  }
  s.prototype.writeFloatLE = function(u, d, y) {
    return Oe(this, u, d, true, y);
  }, s.prototype.writeFloatBE = function(u, d, y) {
    return Oe(this, u, d, false, y);
  };
  function Ve(p, u, d, y, P) {
    return u = +u, d = d >>> 0, P || Ce(p, u, d, 8), n.write(p, u, d, y, 52, 8), d + 8;
  }
  s.prototype.writeDoubleLE = function(u, d, y) {
    return Ve(this, u, d, true, y);
  }, s.prototype.writeDoubleBE = function(u, d, y) {
    return Ve(this, u, d, false, y);
  }, s.prototype.copy = function(u, d, y, P) {
    if (!s.isBuffer(u)) throw new TypeError("argument should be a Buffer");
    if (y || (y = 0), !P && P !== 0 && (P = this.length), d >= u.length && (d = u.length), d || (d = 0), P > 0 && P < y && (P = y), P === y || u.length === 0 || this.length === 0) return 0;
    if (d < 0) throw new RangeError("targetStart out of bounds");
    if (y < 0 || y >= this.length) throw new RangeError("Index out of range");
    if (P < 0) throw new RangeError("sourceEnd out of bounds");
    P > this.length && (P = this.length), u.length - d < P - y && (P = u.length - d + y);
    const D = P - y;
    return this === u && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(d, y, P) : Uint8Array.prototype.set.call(u, this.subarray(y, P), d), D;
  }, s.prototype.fill = function(u, d, y, P) {
    if (typeof u == "string") {
      if (typeof d == "string" ? (P = d, d = 0, y = this.length) : typeof y == "string" && (P = y, y = this.length), P !== void 0 && typeof P != "string") throw new TypeError("encoding must be a string");
      if (typeof P == "string" && !s.isEncoding(P)) throw new TypeError("Unknown encoding: " + P);
      if (u.length === 1) {
        const B = u.charCodeAt(0);
        (P === "utf8" && B < 128 || P === "latin1") && (u = B);
      }
    } else typeof u == "number" ? u = u & 255 : typeof u == "boolean" && (u = Number(u));
    if (d < 0 || this.length < d || this.length < y) throw new RangeError("Out of range index");
    if (y <= d) return this;
    d = d >>> 0, y = y === void 0 ? this.length : y >>> 0, u || (u = 0);
    let D;
    if (typeof u == "number") for (D = d; D < y; ++D) this[D] = u;
    else {
      const B = s.isBuffer(u) ? u : s.from(u, P), ye = B.length;
      if (ye === 0) throw new TypeError('The value "' + u + '" is invalid for argument "value"');
      for (D = 0; D < y - d; ++D) this[D + d] = B[D % ye];
    }
    return this;
  };
  const Xe = {};
  function fe(p, u, d) {
    Xe[p] = class extends d {
      constructor() {
        super(), Object.defineProperty(this, "message", { value: u.apply(this, arguments), writable: true, configurable: true }), this.name = `${this.name} [${p}]`, this.stack, delete this.name;
      }
      get code() {
        return p;
      }
      set code(P) {
        Object.defineProperty(this, "code", { configurable: true, enumerable: true, value: P, writable: true });
      }
      toString() {
        return `${this.name} [${p}]: ${this.message}`;
      }
    };
  }
  fe("ERR_BUFFER_OUT_OF_BOUNDS", function(p) {
    return p ? `${p} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
  }, RangeError), fe("ERR_INVALID_ARG_TYPE", function(p, u) {
    return `The "${p}" argument must be of type number. Received type ${typeof u}`;
  }, TypeError), fe("ERR_OUT_OF_RANGE", function(p, u, d) {
    let y = `The value of "${p}" is out of range.`, P = d;
    return Number.isInteger(d) && Math.abs(d) > 2 ** 32 ? P = ue(String(d)) : typeof d == "bigint" && (P = String(d), (d > BigInt(2) ** BigInt(32) || d < -(BigInt(2) ** BigInt(32))) && (P = ue(P)), P += "n"), y += ` It must be ${u}. Received ${P}`, y;
  }, RangeError);
  function ue(p) {
    let u = "", d = p.length;
    const y = p[0] === "-" ? 1 : 0;
    for (; d >= y + 4; d -= 3) u = `_${p.slice(d - 3, d)}${u}`;
    return `${p.slice(0, d)}${u}`;
  }
  function ve(p, u, d) {
    _e(u, "offset"), (p[u] === void 0 || p[u + d] === void 0) && tt(u, p.length - (d + 1));
  }
  function se(p, u, d, y, P, D) {
    if (p > d || p < u) {
      const B = typeof u == "bigint" ? "n" : "";
      let ye;
      throw u === 0 || u === BigInt(0) ? ye = `>= 0${B} and < 2${B} ** ${(D + 1) * 8}${B}` : ye = `>= -(2${B} ** ${(D + 1) * 8 - 1}${B}) and < 2 ** ${(D + 1) * 8 - 1}${B}`, new Xe.ERR_OUT_OF_RANGE("value", ye, p);
    }
    ve(y, P, D);
  }
  function _e(p, u) {
    if (typeof p != "number") throw new Xe.ERR_INVALID_ARG_TYPE(u, "number", p);
  }
  function tt(p, u, d) {
    throw Math.floor(p) !== p ? (_e(p, d), new Xe.ERR_OUT_OF_RANGE("offset", "an integer", p)) : u < 0 ? new Xe.ERR_BUFFER_OUT_OF_BOUNDS() : new Xe.ERR_OUT_OF_RANGE("offset", `>= 0 and <= ${u}`, p);
  }
  const vt = /[^+/0-9A-Za-z-_]/g;
  function Ge(p) {
    if (p = p.split("=")[0], p = p.trim().replace(vt, ""), p.length < 2) return "";
    for (; p.length % 4 !== 0; ) p = p + "=";
    return p;
  }
  function qt(p, u) {
    u = u || 1 / 0;
    let d;
    const y = p.length;
    let P = null;
    const D = [];
    for (let B = 0; B < y; ++B) {
      if (d = p.charCodeAt(B), d > 55295 && d < 57344) {
        if (!P) {
          if (d > 56319) {
            (u -= 3) > -1 && D.push(239, 191, 189);
            continue;
          } else if (B + 1 === y) {
            (u -= 3) > -1 && D.push(239, 191, 189);
            continue;
          }
          P = d;
          continue;
        }
        if (d < 56320) {
          (u -= 3) > -1 && D.push(239, 191, 189), P = d;
          continue;
        }
        d = (P - 55296 << 10 | d - 56320) + 65536;
      } else P && (u -= 3) > -1 && D.push(239, 191, 189);
      if (P = null, d < 128) {
        if ((u -= 1) < 0) break;
        D.push(d);
      } else if (d < 2048) {
        if ((u -= 2) < 0) break;
        D.push(d >> 6 | 192, d & 63 | 128);
      } else if (d < 65536) {
        if ((u -= 3) < 0) break;
        D.push(d >> 12 | 224, d >> 6 & 63 | 128, d & 63 | 128);
      } else if (d < 1114112) {
        if ((u -= 4) < 0) break;
        D.push(d >> 18 | 240, d >> 12 & 63 | 128, d >> 6 & 63 | 128, d & 63 | 128);
      } else throw new Error("Invalid code point");
    }
    return D;
  }
  function ln(p) {
    const u = [];
    for (let d = 0; d < p.length; ++d) u.push(p.charCodeAt(d) & 255);
    return u;
  }
  function Fr(p, u) {
    let d, y, P;
    const D = [];
    for (let B = 0; B < p.length && !((u -= 2) < 0); ++B) d = p.charCodeAt(B), y = d >> 8, P = d % 256, D.push(P), D.push(y);
    return D;
  }
  function Bn(p) {
    return t.toByteArray(Ge(p));
  }
  function Mn(p, u, d, y) {
    let P;
    for (P = 0; P < y && !(P + d >= u.length || P >= p.length); ++P) u[P + d] = p[P];
    return P;
  }
  function Vt(p, u) {
    return p instanceof u || p != null && p.constructor != null && p.constructor.name != null && p.constructor.name === u.name;
  }
  function Ri(p) {
    return p !== p;
  }
  const yn = function() {
    const p = "0123456789abcdef", u = new Array(256);
    for (let d = 0; d < 16; ++d) {
      const y = d * 16;
      for (let P = 0; P < 16; ++P) u[y + P] = p[d] + p[P];
    }
    return u;
  }();
  function bt(p) {
    return typeof BigInt > "u" ? Oa : p;
  }
  function Oa() {
    throw new Error("BigInt not supported");
  }
})(Am);
var uo = {}, Df;
function Rw() {
  if (Df) return uo;
  Df = 1;
  var e = wt && wt.__assign || function() {
    return e = Object.assign || function(i) {
      for (var a, o = 1, s = arguments.length; o < s; o++) {
        a = arguments[o];
        for (var l in a) Object.prototype.hasOwnProperty.call(a, l) && (i[l] = a[l]);
      }
      return i;
    }, e.apply(this, arguments);
  }, t = wt && wt.__spreadArray || function(i, a, o) {
    if (o || arguments.length === 2) for (var s = 0, l = a.length, c; s < l; s++) (c || !(s in a)) && (c || (c = Array.prototype.slice.call(a, 0, s)), c[s] = a[s]);
    return i.concat(c || Array.prototype.slice.call(a));
  };
  Object.defineProperty(uo, "__esModule", { value: true });
  var n = jr(), r = function() {
    function i() {
    }
    return i.readVint = function(a, o) {
      o === void 0 && (o = 0);
      var s = 8 - Math.floor(Math.log2(a[o]));
      if (s > 8) {
        var l = i.readHexString(a, o, o + s);
        throw new Error("Unrepresentable length: ".concat(s, " ").concat(l));
      }
      if (o + s > a.length) return null;
      for (var c = a[o] & (1 << 8 - s) - 1, f = 1; f < s; f += 1) {
        if (f === 7 && c >= Math.pow(2, 8) && a[o + 7] > 0) return { length: s, value: -1 };
        c *= Math.pow(2, 8), c += a[o + f];
      }
      return { length: s, value: c };
    }, i.writeVint = function(a) {
      if (a < 0 || a > Math.pow(2, 53)) throw new Error("Unrepresentable value: ".concat(a));
      var o = 1;
      for (o = 1; o <= 8 && !(a < Math.pow(2, 7 * o) - 1); o += 1) ;
      for (var s = n.Buffer.alloc(o), l = a, c = 1; c <= o; c += 1) {
        var f = l & 255;
        s[o - c] = f, l -= f, l /= Math.pow(2, 8);
      }
      return s[0] |= 1 << 8 - o, s;
    }, i.concatenate = function(a, o) {
      return !a && !o ? n.Buffer.from([]) : !a || a.byteLength === 0 ? o : !o || o.byteLength === 0 ? a : n.Buffer.from(t(t([], a, true), o, true));
    }, i.readHexString = function(a, o, s) {
      return o === void 0 && (o = 0), s === void 0 && (s = a.byteLength), Array.from(a.slice(o, s)).map(function(l) {
        return Number(l).toString(16);
      }).reduce(function(l, c) {
        return "".concat(l).concat(c.padStart(2, "0"));
      }, "");
    }, i.readUtf8 = function(a) {
      try {
        return n.Buffer.from(a).toString("utf8");
      } catch {
        return null;
      }
    }, i.readUnsigned = function(a) {
      var o = new DataView(a.buffer, a.byteOffset, a.byteLength);
      switch (a.byteLength) {
        case 1:
          return o.getUint8(0);
        case 2:
          return o.getUint16(0);
        case 4:
          return o.getUint32(0);
      }
      return a.byteLength <= 6 ? a.reduce(function(s, l) {
        return s * 256 + l;
      }, 0) : i.readHexString(a, 0, a.byteLength);
    }, i.readSigned = function(a) {
      var o = new DataView(a.buffer, a.byteOffset, a.byteLength);
      switch (a.byteLength) {
        case 1:
          return o.getInt8(0);
        case 2:
          return o.getInt16(0);
        case 4:
          return o.getInt32(0);
        default:
          return NaN;
      }
    }, i.readFloat = function(a) {
      var o = new DataView(a.buffer, a.byteOffset, a.byteLength);
      switch (a.byteLength) {
        case 4:
          return o.getFloat32(0);
        case 8:
          return o.getFloat64(0);
        default:
          return NaN;
      }
    }, i.readDate = function(a) {
      var o = new DataView(a.buffer, a.byteOffset, a.byteLength);
      switch (a.byteLength) {
        case 1:
          return new Date(o.getUint8(0));
        case 2:
          return new Date(o.getUint16(0));
        case 4:
          return new Date(o.getUint32(0));
        case 8:
          return new Date(Number.parseInt(i.readHexString(a), 16));
        default:
          return /* @__PURE__ */ new Date(0);
      }
    }, i.readDataFromTag = function(a, o) {
      var s = a.type, l = a.name, c = a.track, f = a.discardable || false, h = a.keyframe || false, g = null, w;
      switch (s) {
        case "u":
          w = i.readUnsigned(o);
          break;
        case "f":
          w = i.readFloat(o);
          break;
        case "i":
          w = i.readSigned(o);
          break;
        case "s":
          w = String.fromCharCode.apply(String, o);
          break;
        case "8":
          w = i.readUtf8(o);
          break;
        case "d":
          w = i.readDate(o);
          break;
      }
      if (l === "SimpleBlock" || l === "Block") {
        var E = 0, b = i.readVint(o, E), I = b.length, x = b.value;
        E += I, c = x, w = i.readSigned(o.subarray(E, E + 2)), E += 2, l === "SimpleBlock" && (h = !!(o[I + 2] & 128), f = !!(o[I + 2] & 1)), E += 1, g = o.subarray(E);
      }
      return e(e({}, a), { data: o, discardable: f, keyframe: h, payload: g, track: c, value: w });
    }, i;
  }();
  return uo.default = r, uo;
}
var Aw = function(e, t, n) {
  t = t || 0;
  for (var r = 1; r <= 8 && !(e[t] >= Math.pow(2, 8 - r)); r++) ;
  if (r > 8) throw new Error("Unrepresentable length: " + r + " " + e.toString("hex", t, t + r));
  if (t + r > e.length) return null;
  var i, a = e[t] & (1 << 8 - r) - 1;
  for (i = 1; i < r; i++) {
    if (i === 7 && a >= Math.pow(2, 45) && e[t + 7] > 0) return { length: r, value: -1 };
    a *= Math.pow(2, 8), a += e[t + i];
  }
  return n && (a -= Math.pow(2, r * 7 - 1) - 1), { length: r, value: a };
}, jm = Aw;
function Or(e) {
  this.buffer = e, this.offset = 0;
}
Or.prototype.nextInt16BE = function() {
  var e = this.buffer.readInt16BE(this.offset);
  return this.offset += 2, e;
};
Or.prototype.nextUInt8 = function() {
  var e = this.buffer.readUInt8(this.offset);
  return this.offset += 1, e;
};
Or.prototype.nextUIntV = function() {
  var e = jm(this.buffer, this.offset);
  return this.offset += e.length, e.value;
};
Or.prototype.nextIntV = function() {
  var e = jm(this.buffer, this.offset, true);
  return this.offset += e.length, e.value;
};
Or.prototype.nextBuffer = function(e) {
  var t = e ? this.buffer.slice(this.offset, this.offset + e) : this.buffer.slice(this.offset);
  return this.offset += e || this.length, t;
};
Object.defineProperty(Or.prototype, "length", { get: function() {
  return this.buffer.length - this.offset;
} });
var Dw = Or, jw = Dw, Iw = 1, Lw = 3, Bw = 2, Mw = function(e) {
  var t = {}, n = new jw(e);
  t.trackNumber = n.nextUIntV(), t.timecode = n.nextInt16BE();
  var r = n.nextUInt8();
  t.invisible = !!(r & 8), t.keyframe = !!(r & 128), t.discardable = !!(r & 1);
  var i = (r & 6) >> 1;
  return t.frames = Ow(n, i), t;
};
function Ow(e, t) {
  if (!t) return [e.nextBuffer()];
  var n, r, i = [], a = e.nextUInt8() + 1;
  if (t === Bw) {
    if (e.length % a !== 0) throw new Error("Fixed-Size Lacing Error");
    for (r = e.length / a, n = 0; n < a; n++) i.push(e.nextBuffer(r));
    return i;
  }
  var o = [];
  if (t === Iw) for (n = 0; n < a - 1; n++) {
    var s;
    r = 0;
    do
      s = e.nextUInt8(), r += s;
    while (s === 255);
    o.push(r);
  }
  else if (t === Lw) for (r = e.nextUIntV(), o.push(r), n = 1; n < a - 1; n++) r += e.nextIntV(), o.push(r);
  for (n = 0; n < a - 1; n++) i.push(e.nextBuffer(o[n]));
  return i.push(e.nextBuffer()), i;
}
var jf;
function jr() {
  return jf || (jf = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.convertEBMLDateToJSDate = e.createFloatBuffer = e.createIntBuffer = e.createUIntBuffer = e.encodeValueToBuffer = e.concat = e.putRefinedMetaData = e.extractElement = e.removeElement = e.makeMetadataSeekable = e.createRIFFChunk = e.VP8BitStreamToRiffWebPBuffer = e.WebPBlockFilter = e.encodeTag = e.readBlock = e.ebmlBlock = e.writeVint = e.readVint = e.Buffer = void 0;
    var t = yc, n = Rm(), r = Am, i = Rw(), a = Mw;
    e.Buffer = r.Buffer, e.readVint = i.default.readVint, e.writeVint = i.default.writeVint, e.ebmlBlock = a;
    function o(T) {
      return (0, e.ebmlBlock)(new e.Buffer(T));
    }
    e.readBlock = o;
    function s(T, L, O) {
      return O === void 0 && (O = false), A([T, O ? new e.Buffer("01ffffffffffffff", "hex") : (0, e.writeVint)(L.length), L]);
    }
    e.encodeTag = s;
    function l(T) {
      return T.reduce(function(L, O) {
        if (O.type !== "b" || O.name !== "SimpleBlock") return L;
        var $ = (0, e.ebmlBlock)(O.data), X = $.frames.some(function(de) {
          var Se = de.slice(3, 6).toString("hex");
          return Se === "9d012a";
        });
        return X ? L.concat(O) : L;
      }, []);
    }
    e.WebPBlockFilter = l;
    function c(T) {
      var L = f("VP8 ", T), O = A([new e.Buffer("WEBP", "ascii"), L]);
      return f("RIFF", O);
    }
    e.VP8BitStreamToRiffWebPBuffer = c;
    function f(T, L) {
      var O = new e.Buffer(4);
      return O.writeUInt32LE(L.byteLength, 0), A([new e.Buffer(T.substr(0, 4), "ascii"), O, L, new e.Buffer(L.byteLength % 2 === 0 ? 0 : 1)]);
    }
    e.createRIFFChunk = f;
    function h(T, L, O) {
      var $ = w("EBML", T), X = b($), de = X + 12, Se = T[T.length - 1].dataEnd - de, Z = w("Info", T);
      g("Duration", Z), Z.splice(1, 0, { name: "Duration", type: "f", data: R(L, 8) });
      for (var F = b(Z), J = w("Tracks", T), oe = b(J), ne = 47, K = [], Ze = 5 + O.length * 15, me = [], Ce = -1, Oe = 10, Ve = function(se) {
        var _e = ne, tt = _e + F, vt = tt + oe, Ge = vt + Ze, qt = Ge - Se;
        if (K = [], K.push({ name: "SeekHead", type: "m", isEnd: false }), K.push({ name: "Seek", type: "m", isEnd: false }), K.push({ name: "SeekID", type: "b", data: new e.Buffer([21, 73, 169, 102]) }), K.push({ name: "SeekPosition", type: "u", data: z(_e) }), K.push({ name: "Seek", type: "m", isEnd: true }), K.push({ name: "Seek", type: "m", isEnd: false }), K.push({ name: "SeekID", type: "b", data: new e.Buffer([22, 84, 174, 107]) }), K.push({ name: "SeekPosition", type: "u", data: z(tt) }), K.push({ name: "Seek", type: "m", isEnd: true }), K.push({ name: "Seek", type: "m", isEnd: false }), K.push({ name: "SeekID", type: "b", data: new e.Buffer([28, 83, 187, 107]) }), K.push({ name: "SeekPosition", type: "u", data: z(vt) }), K.push({ name: "Seek", type: "m", isEnd: true }), K.push({ name: "SeekHead", type: "m", isEnd: true }), ne = b(K), me = [], me.push({ name: "Cues", type: "m", isEnd: false }), O.forEach(function(ln) {
          var Fr = ln.CueTrack, Bn = ln.CueClusterPosition, Mn = ln.CueTime;
          me.push({ name: "CuePoint", type: "m", isEnd: false }), me.push({ name: "CueTime", type: "u", data: z(Mn) }), me.push({ name: "CueTrackPositions", type: "m", isEnd: false }), me.push({ name: "CueTrack", type: "u", data: z(Fr) }), Bn -= de, Bn += qt, me.push({ name: "CueClusterPosition", type: "u", data: z(Bn) }), me.push({ name: "CueTrackPositions", type: "m", isEnd: true }), me.push({ name: "CuePoint", type: "m", isEnd: true });
        }), me.push({ name: "Cues", type: "m", isEnd: true }), Ze = b(me), Ce !== qt) {
          if (Ce = qt, se === Oe - 1) throw new Error("Failed to converge to a stable metadata size");
        } else return "break";
      }, Xe = 0; Xe < Oe; Xe++) {
        var fe = Ve(Xe);
        if (fe === "break") break;
      }
      var ue = [].concat.apply([], [$, { name: "Segment", type: "m", isEnd: false, unknownSize: true }, K, Z, J, me]), ve = new n.default().encode(ue);
      return ve;
    }
    e.makeMetadataSeekable = h;
    function g(T, L) {
      for (var O = -1, $ = 0; $ < L.length; $++) {
        var X = L[$];
        if (X.name === T) if (X.type === "m") if (!X.isEnd) O = $;
        else {
          if (O == -1) throw new Error("Detected ".concat(T, " closing element before finding the start"));
          L.splice(O, $ - O + 1);
          return;
        }
        else {
          L.splice($, 1);
          return;
        }
      }
    }
    e.removeElement = g;
    function w(T, L) {
      for (var O = [], $ = -1, X = 0; X < L.length; X++) {
        var de = L[X];
        if (de.name === T) if (de.type === "m") if (!de.isEnd) $ = X;
        else {
          if ($ == -1) throw new Error("Detected ".concat(T, " closing element before finding the start"));
          O = L.slice($, X + 1);
          break;
        }
        else {
          O.push(L[X]);
          break;
        }
      }
      return O;
    }
    e.extractElement = w;
    function E(T, L) {
      Array.isArray(L.cueInfos) && !Array.isArray(L.cues) && (console.warn("putRefinedMetaData: info.cueInfos property is deprecated. please use info.cues"), L.cues = L.cueInfos);
      for (var O = [], $ = [], X = 0; X < T.length; X++) {
        var de = T[X];
        if (de.type === "m" && de.name === "Segment") {
          if (O = T.slice(0, X), $ = T.slice(X), de.unknownSize) {
            $.shift();
            break;
          }
          throw new Error("this metadata is not streaming webm file");
        }
      }
      if (!($[$.length - 1].dataEnd > 0)) throw new Error("metadata dataEnd has wrong number");
      var Se = $[$.length - 1].dataEnd, Z = O[O.length - 1].dataEnd, F = new n.default().encode(O).byteLength, J = F - Z, oe = Se - $[0].tagStart;
      $[0].tagStart - Z, $[0].tagStart;
      var ne = new e.Buffer([24, 83, 128, 103]), K = new e.Buffer("01ffffffffffffff", "hex"), Ze = ne.byteLength + K.byteLength, me = oe, Ce;
      for (Ce = 1; Ce < 20; Ce++) {
        var Oe = Z + Ze + me, Ve = Oe - Se, Xe = J + Ve, fe = I($, Xe, L), ue = new n.default().encode(fe).byteLength;
        if (ue === me) return new n.default().encode([].concat(O, [{ type: "m", name: "Segment", isEnd: false, unknownSize: true }], fe));
        me = ue;
      }
      throw new Error("unable to refine metadata, stable size could not be found in " + Ce + " iterations!");
    }
    e.putRefinedMetaData = E;
    function b(T) {
      var L = new n.default();
      return T.reduce(function(O, $) {
        return O.concat(L.encode([$]));
      }, []).reduce(function(O, $) {
        return O + $.byteLength;
      }, 0);
    }
    function I(T, L, O) {
      var $ = O.duration, X = O.clusterPtrs, de = O.cues, Se = T.slice(0);
      if (typeof $ == "number") {
        var Z = false;
        Se.forEach(function(J) {
          J.type === "f" && J.name === "Duration" && (Z = true, J.data = R($, 8));
        }), Z || S(Se, "Info", [{ name: "Duration", type: "f", data: R($, 8) }]);
      }
      Array.isArray(de) && S(Se, "Cues", v(de, L));
      var F = [];
      return Array.isArray(X) && (console.warn("append cluster pointers to seekhead is deprecated. please use cues"), F = x(X, L)), S(Se, "SeekHead", F, true), Se;
    }
    function x(T, L) {
      var O = [];
      return T.forEach(function($) {
        O.push({ name: "Seek", type: "m", isEnd: false }), O.push({ name: "SeekID", type: "b", data: new e.Buffer([31, 67, 182, 117]) }), O.push({ name: "SeekPosition", type: "u", data: z($ + L) }), O.push({ name: "Seek", type: "m", isEnd: true });
      }), O;
    }
    function v(T, L) {
      var O = [];
      return T.forEach(function($) {
        var X = $.CueTrack, de = $.CueClusterPosition, Se = $.CueTime;
        O.push({ name: "CuePoint", type: "m", isEnd: false }), O.push({ name: "CueTime", type: "u", data: z(Se) }), O.push({ name: "CueTrackPositions", type: "m", isEnd: false }), O.push({ name: "CueTrack", type: "u", data: z(X) }), O.push({ name: "CueClusterPosition", type: "u", data: z(de + L) }), O.push({ name: "CueTrackPositions", type: "m", isEnd: true }), O.push({ name: "CuePoint", type: "m", isEnd: true });
      }), O;
    }
    function S(T, L, O, $) {
      $ === void 0 && ($ = false);
      for (var X = -1, de = 0; de < T.length; de++) {
        var Se = T[de];
        if (Se.type === "m" && Se.name === L && Se.isEnd === false) {
          X = de;
          break;
        }
      }
      X >= 0 ? Array.prototype.splice.apply(T, [X + 1, 0].concat(O)) : $ ? [].concat([{ name: L, type: "m", isEnd: false }], O, [{ name: L, type: "m", isEnd: true }]).reverse().forEach(function(Z) {
        T.unshift(Z);
      }) : (T.push({ name: L, type: "m", isEnd: false }), O.forEach(function(Z) {
        T.push(Z);
      }), T.push({ name: L, type: "m", isEnd: true }));
    }
    function A(T) {
      return e.Buffer.concat(T);
    }
    e.concat = A;
    function M(T) {
      var L = new e.Buffer(0);
      if (T.type === "m") return T;
      switch (T.type) {
        case "u":
          L = z(T.value);
          break;
        case "i":
          L = _(T.value);
          break;
        case "f":
          L = R(T.value);
          break;
        case "s":
          L = new e.Buffer(T.value, "ascii");
          break;
        case "8":
          L = new e.Buffer(T.value, "utf8");
          break;
        case "b":
          L = T.value;
          break;
        case "d":
          L = new t.Int64BE(T.value.getTime().toString()).toBuffer();
          break;
      }
      return Object.assign({}, T, { data: L });
    }
    e.encodeValueToBuffer = M;
    function z(T) {
      for (var L = 1; T >= Math.pow(2, 8 * L); L++) ;
      if (L >= 7) return console.warn("7bit or more bigger uint not supported."), new t.Uint64BE(T).toBuffer();
      var O = new e.Buffer(L);
      return O.writeUIntBE(T, 0, L), O;
    }
    e.createUIntBuffer = z;
    function _(T) {
      for (var L = 1; T >= Math.pow(2, 8 * L); L++) ;
      if (L >= 7) return console.warn("7bit or more bigger uint not supported."), new t.Int64BE(T).toBuffer();
      var O = new e.Buffer(L);
      return O.writeIntBE(T, 0, L), O;
    }
    e.createIntBuffer = _;
    function R(T, L) {
      if (L === void 0 && (L = 8), L === 8) {
        var O = new e.Buffer(8);
        return O.writeDoubleBE(T, 0), O;
      } else if (L === 4) {
        var O = new e.Buffer(4);
        return O.writeFloatBE(T, 0), O;
      } else throw new Error("float type bits must 4bytes or 8bytes");
    }
    e.createFloatBuffer = R;
    function V(T) {
      return T instanceof Date ? T : new Date((/* @__PURE__ */ new Date("2001-01-01T00:00:00.000Z")).getTime() + Number(T) / 1e3 / 1e3);
    }
    e.convertEBMLDateToJSDate = V;
  }(sl)), sl;
}
Object.defineProperty(gc, "__esModule", { value: true });
var Fw = yc, Zi = jr(), Uw = jr(), zw = Ma, fn;
(function(e) {
  e[e.STATE_TAG = 1] = "STATE_TAG", e[e.STATE_SIZE = 2] = "STATE_SIZE", e[e.STATE_CONTENT = 3] = "STATE_CONTENT";
})(fn || (fn = {}));
var Vw = function() {
  function e() {
    this._buffer = new Zi.Buffer(0), this._tag_stack = [], this._state = fn.STATE_TAG, this._cursor = 0, this._total = 0, this._schema = zw.byEbmlID, this._result = [];
  }
  return e.prototype.decode = function(t) {
    this.readChunk(t);
    var n = this._result;
    return this._result = [], n;
  }, e.prototype.readChunk = function(t) {
    for (this._buffer = Uw.concat([this._buffer, new Zi.Buffer(t)]); this._cursor < this._buffer.length && !(this._state === fn.STATE_TAG && !this.readTag() || this._state === fn.STATE_SIZE && !this.readSize() || this._state === fn.STATE_CONTENT && !this.readContent()); ) ;
  }, e.prototype.getSchemaInfo = function(t) {
    return this._schema[t] || { name: "unknown", level: -1, type: "unknown", description: "unknown" };
  }, e.prototype.readTag = function() {
    if (this._cursor >= this._buffer.length) return false;
    var t = (0, Zi.readVint)(this._buffer, this._cursor);
    if (t == null) return false;
    var n = this._buffer.slice(this._cursor, this._cursor + t.length), r = n.reduce(function(o, s, l, c) {
      return o + s * Math.pow(16, 2 * (c.length - 1 - l));
    }, 0), i = this.getSchemaInfo(r), a = { EBML_ID: r.toString(16), schema: i, type: i.type, name: i.name, level: i.level, tagStart: this._total, tagEnd: this._total + t.length, sizeStart: this._total + t.length, sizeEnd: null, dataStart: null, dataEnd: null, dataSize: null, data: null };
    return this._tag_stack.push(a), this._cursor += t.length, this._total += t.length, this._state = fn.STATE_SIZE, true;
  }, e.prototype.readSize = function() {
    if (this._cursor >= this._buffer.length) return false;
    var t = (0, Zi.readVint)(this._buffer, this._cursor);
    if (t == null) return false;
    var n = this._tag_stack[this._tag_stack.length - 1];
    return n.sizeEnd = n.sizeStart + t.length, n.dataStart = n.sizeEnd, n.dataSize = t.value, t.value === -1 ? (n.dataEnd = -1, n.type === "m" && (n.unknownSize = true)) : n.dataEnd = n.sizeEnd + t.value, this._cursor += t.length, this._total += t.length, this._state = fn.STATE_CONTENT, true;
  }, e.prototype.readContent = function() {
    var t = this._tag_stack[this._tag_stack.length - 1];
    if (t.type === "m") {
      if (t.isEnd = false, this._result.push(t), this._state = fn.STATE_TAG, t.dataSize === 0) {
        var n = Object.assign({}, t, { isEnd: true });
        this._result.push(n), this._tag_stack.pop();
      }
      return true;
    }
    if (this._buffer.length < this._cursor + t.dataSize) return false;
    var r = this._buffer.slice(this._cursor, this._cursor + t.dataSize);
    switch (this._buffer = this._buffer.slice(this._cursor + t.dataSize), t.data = r, t.type) {
      case "u":
        t.value = r.readUIntBE(0, r.length);
        break;
      case "i":
        t.value = r.readIntBE(0, r.length);
        break;
      case "f":
        t.value = t.dataSize === 4 ? r.readFloatBE(0) : t.dataSize === 8 ? r.readDoubleBE(0) : (console.warn("cannot read ".concat(t.dataSize, " octets float. failback to 0")), 0);
        break;
      case "s":
        t.value = r.toString("ascii");
        break;
      case "8":
        t.value = r.toString("utf8");
        break;
      case "b":
        t.value = r;
        break;
      case "d":
        t.value = (0, Zi.convertEBMLDateToJSDate)(new Fw.Int64BE(r).toNumber());
        break;
    }
    if (t.value === null) throw new Error("unknown tag type:" + t.type);
    for (this._result.push(t), this._total += t.dataSize, this._state = fn.STATE_TAG, this._cursor = 0, this._tag_stack.pop(); this._tag_stack.length > 0; ) {
      var i = this._tag_stack[this._tag_stack.length - 1];
      if (i.dataEnd < 0) return this._tag_stack.pop(), true;
      if (this._total < i.dataEnd) break;
      if (i.type !== "m") throw new Error("parent element is not master element");
      var n = Object.assign({}, i, { isEnd: true });
      this._result.push(n), this._tag_stack.pop();
    }
    return true;
  }, e;
}();
gc.default = Vw;
var wc = {}, kc = { exports: {} }, di = typeof Reflect == "object" ? Reflect : null, If = di && typeof di.apply == "function" ? di.apply : function(t, n, r) {
  return Function.prototype.apply.call(t, n, r);
}, Eo;
di && typeof di.ownKeys == "function" ? Eo = di.ownKeys : Object.getOwnPropertySymbols ? Eo = function(t) {
  return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
} : Eo = function(t) {
  return Object.getOwnPropertyNames(t);
};
function Ww(e) {
  console && console.warn && console.warn(e);
}
var Im = Number.isNaN || function(t) {
  return t !== t;
};
function Ie() {
  Ie.init.call(this);
}
kc.exports = Ie;
kc.exports.once = Gw;
Ie.EventEmitter = Ie;
Ie.prototype._events = void 0;
Ie.prototype._eventsCount = 0;
Ie.prototype._maxListeners = void 0;
var Lf = 10;
function bs(e) {
  if (typeof e != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
}
Object.defineProperty(Ie, "defaultMaxListeners", { enumerable: true, get: function() {
  return Lf;
}, set: function(e) {
  if (typeof e != "number" || e < 0 || Im(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
  Lf = e;
} });
Ie.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
Ie.prototype.setMaxListeners = function(t) {
  if (typeof t != "number" || t < 0 || Im(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
  return this._maxListeners = t, this;
};
function Lm(e) {
  return e._maxListeners === void 0 ? Ie.defaultMaxListeners : e._maxListeners;
}
Ie.prototype.getMaxListeners = function() {
  return Lm(this);
};
Ie.prototype.emit = function(t) {
  for (var n = [], r = 1; r < arguments.length; r++) n.push(arguments[r]);
  var i = t === "error", a = this._events;
  if (a !== void 0) i = i && a.error === void 0;
  else if (!i) return false;
  if (i) {
    var o;
    if (n.length > 0 && (o = n[0]), o instanceof Error) throw o;
    var s = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
    throw s.context = o, s;
  }
  var l = a[t];
  if (l === void 0) return false;
  if (typeof l == "function") If(l, this, n);
  else for (var c = l.length, f = Um(l, c), r = 0; r < c; ++r) If(f[r], this, n);
  return true;
};
function Bm(e, t, n, r) {
  var i, a, o;
  if (bs(n), a = e._events, a === void 0 ? (a = e._events = /* @__PURE__ */ Object.create(null), e._eventsCount = 0) : (a.newListener !== void 0 && (e.emit("newListener", t, n.listener ? n.listener : n), a = e._events), o = a[t]), o === void 0) o = a[t] = n, ++e._eventsCount;
  else if (typeof o == "function" ? o = a[t] = r ? [n, o] : [o, n] : r ? o.unshift(n) : o.push(n), i = Lm(e), i > 0 && o.length > i && !o.warned) {
    o.warned = true;
    var s = new Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    s.name = "MaxListenersExceededWarning", s.emitter = e, s.type = t, s.count = o.length, Ww(s);
  }
  return e;
}
Ie.prototype.addListener = function(t, n) {
  return Bm(this, t, n, false);
};
Ie.prototype.on = Ie.prototype.addListener;
Ie.prototype.prependListener = function(t, n) {
  return Bm(this, t, n, true);
};
function Hw() {
  if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = true, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function Mm(e, t, n) {
  var r = { fired: false, wrapFn: void 0, target: e, type: t, listener: n }, i = Hw.bind(r);
  return i.listener = n, r.wrapFn = i, i;
}
Ie.prototype.once = function(t, n) {
  return bs(n), this.on(t, Mm(this, t, n)), this;
};
Ie.prototype.prependOnceListener = function(t, n) {
  return bs(n), this.prependListener(t, Mm(this, t, n)), this;
};
Ie.prototype.removeListener = function(t, n) {
  var r, i, a, o, s;
  if (bs(n), i = this._events, i === void 0) return this;
  if (r = i[t], r === void 0) return this;
  if (r === n || r.listener === n) --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete i[t], i.removeListener && this.emit("removeListener", t, r.listener || n));
  else if (typeof r != "function") {
    for (a = -1, o = r.length - 1; o >= 0; o--) if (r[o] === n || r[o].listener === n) {
      s = r[o].listener, a = o;
      break;
    }
    if (a < 0) return this;
    a === 0 ? r.shift() : $w(r, a), r.length === 1 && (i[t] = r[0]), i.removeListener !== void 0 && this.emit("removeListener", t, s || n);
  }
  return this;
};
Ie.prototype.off = Ie.prototype.removeListener;
Ie.prototype.removeAllListeners = function(t) {
  var n, r, i;
  if (r = this._events, r === void 0) return this;
  if (r.removeListener === void 0) return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : r[t] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete r[t]), this;
  if (arguments.length === 0) {
    var a = Object.keys(r), o;
    for (i = 0; i < a.length; ++i) o = a[i], o !== "removeListener" && this.removeAllListeners(o);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (n = r[t], typeof n == "function") this.removeListener(t, n);
  else if (n !== void 0) for (i = n.length - 1; i >= 0; i--) this.removeListener(t, n[i]);
  return this;
};
function Om(e, t, n) {
  var r = e._events;
  if (r === void 0) return [];
  var i = r[t];
  return i === void 0 ? [] : typeof i == "function" ? n ? [i.listener || i] : [i] : n ? Zw(i) : Um(i, i.length);
}
Ie.prototype.listeners = function(t) {
  return Om(this, t, true);
};
Ie.prototype.rawListeners = function(t) {
  return Om(this, t, false);
};
Ie.listenerCount = function(e, t) {
  return typeof e.listenerCount == "function" ? e.listenerCount(t) : Fm.call(e, t);
};
Ie.prototype.listenerCount = Fm;
function Fm(e) {
  var t = this._events;
  if (t !== void 0) {
    var n = t[e];
    if (typeof n == "function") return 1;
    if (n !== void 0) return n.length;
  }
  return 0;
}
Ie.prototype.eventNames = function() {
  return this._eventsCount > 0 ? Eo(this._events) : [];
};
function Um(e, t) {
  for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];
  return n;
}
function $w(e, t) {
  for (; t + 1 < e.length; t++) e[t] = e[t + 1];
  e.pop();
}
function Zw(e) {
  for (var t = new Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
  return t;
}
function Gw(e, t) {
  return new Promise(function(n, r) {
    function i(o) {
      e.removeListener(t, a), r(o);
    }
    function a() {
      typeof e.removeListener == "function" && e.removeListener("error", i), n([].slice.call(arguments));
    }
    zm(e, t, a, { once: true }), t !== "error" && Qw(e, i, { once: true });
  });
}
function Qw(e, t, n) {
  typeof e.on == "function" && zm(e, "error", t, n);
}
function zm(e, t, n, r) {
  if (typeof e.on == "function") r.once ? e.once(t, n) : e.on(t, n);
  else if (typeof e.addEventListener == "function") e.addEventListener(t, function i(a) {
    r.once && e.removeEventListener(t, i), n(a);
  });
  else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
}
var Kw = kc.exports, Yw = wt && wt.__extends || /* @__PURE__ */ function() {
  var e = function(t, n) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
      r.__proto__ = i;
    } || function(r, i) {
      for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a]);
    }, e(t, n);
  };
  return function(t, n) {
    if (typeof n != "function" && n !== null) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
    e(t, n);
    function r() {
      this.constructor = t;
    }
    t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}();
Object.defineProperty(wc, "__esModule", { value: true });
var Xw = Kw, Bf = jr(), qw = function(e) {
  Yw(t, e);
  function t() {
    var n = e.call(this) || this;
    return n.logGroup = "", n.hasLoggingStarted = false, n.metadataloaded = false, n.chunks = [], n.stack = [], n.segmentOffset = 0, n.last2SimpleBlockVideoTrackTimecode = [0, 0], n.last2SimpleBlockAudioTrackTimecode = [0, 0], n.lastClusterTimecode = 0, n.lastClusterPosition = 0, n.timecodeScale = 1e6, n.metadataSize = 0, n.metadatas = [], n.cues = [], n.firstVideoBlockRead = false, n.firstAudioBlockRead = false, n.currentTrack = { TrackNumber: -1, TrackType: -1, DefaultDuration: null, CodecDelay: null }, n.trackTypes = [], n.trackDefaultDuration = [], n.trackCodecDelay = [], n.trackInfo = { type: "nothing" }, n.ended = false, n.logging = false, n.use_duration_every_simpleblock = false, n.use_webp = false, n.use_segment_info = true, n.drop_default_duration = true, n;
  }
  return t.prototype.stop = function() {
    for (this.ended = true, this.emit_segment_info(); this.stack.length; ) this.stack.pop(), this.logging && console.groupEnd();
    this.logging && this.hasLoggingStarted && this.logGroup && console.groupEnd();
  }, t.prototype.emit_segment_info = function() {
    var n = this.chunks;
    if (this.chunks = [], this.metadataloaded) {
      if (!this.use_segment_info) return;
      var a = this.lastClusterTimecode, o = this.duration, s = this.timecodeScale;
      this.emit("cluster", { timecode: a, data: n }), this.emit("duration", { timecodeScale: s, duration: o });
    } else {
      this.metadataloaded = true, this.metadatas = n;
      var r = this.trackTypes.indexOf(1), i = this.trackTypes.indexOf(2);
      if (this.trackInfo = r >= 0 && i >= 0 ? { type: "both", trackNumber: r } : r >= 0 ? { type: "video", trackNumber: r } : i >= 0 ? { type: "audio", trackNumber: i } : { type: "nothing" }, !this.use_segment_info) return;
      this.emit("metadata", { data: n, metadataSize: this.metadataSize });
    }
  }, t.prototype.read = function(n) {
    var r = this, i = false;
    if (!this.ended) {
      if (n.type === "m") if (n.isEnd) this.stack.pop();
      else {
        var a = this.stack[this.stack.length - 1];
        if (a != null && a.level >= n.level) {
          this.stack.pop(), this.logging && console.groupEnd(), a.dataEnd = n.dataEnd, a.dataSize = n.dataEnd - a.dataStart, a.unknownSize = false;
          var o = Object.assign({}, a, { name: a.name, type: a.type, isEnd: true });
          this.chunks.push(o);
        }
        this.stack.push(n);
      }
      if (n.type === "m" && n.name == "Segment") this.segmentOffset != 0 && console.warn("Multiple segments detected!"), this.segmentOffset = n.dataStart, this.emit("segment_offset", this.segmentOffset);
      else if (n.type === "b" && n.name === "SimpleBlock") {
        var s = Bf.ebmlBlock(n.data), l = s.timecode, c = s.trackNumber, f = s.frames;
        if (this.trackTypes[c] === 1) {
          if (!this.firstVideoBlockRead && (this.firstVideoBlockRead = true, this.trackInfo.type === "both" || this.trackInfo.type === "video")) {
            var h = this.lastClusterTimecode + l;
            this.cues.push({ CueTrack: c, CueClusterPosition: this.lastClusterPosition, CueTime: h }), this.emit("cue_info", { CueTrack: c, CueClusterPosition: this.lastClusterPosition, CueTime: this.lastClusterTimecode }), this.emit("cue", { CueTrack: c, CueClusterPosition: this.lastClusterPosition, CueTime: h });
          }
          this.last2SimpleBlockVideoTrackTimecode = [this.last2SimpleBlockVideoTrackTimecode[1], l];
        } else if (this.trackTypes[c] === 2) {
          if (!this.firstAudioBlockRead && (this.firstAudioBlockRead = true, this.trackInfo.type === "audio")) {
            var h = this.lastClusterTimecode + l;
            this.cues.push({ CueTrack: c, CueClusterPosition: this.lastClusterPosition, CueTime: h }), this.emit("cue_info", { CueTrack: c, CueClusterPosition: this.lastClusterPosition, CueTime: this.lastClusterTimecode }), this.emit("cue", { CueTrack: c, CueClusterPosition: this.lastClusterPosition, CueTime: h });
          }
          this.last2SimpleBlockAudioTrackTimecode = [this.last2SimpleBlockAudioTrackTimecode[1], l];
        }
        this.use_duration_every_simpleblock && this.emit("duration", { timecodeScale: this.timecodeScale, duration: this.duration }), this.use_webp && f.forEach(function(g) {
          var w = g.slice(3, 6).toString("hex");
          if (w === "9d012a") {
            var E = Bf.VP8BitStreamToRiffWebPBuffer(g), b = new Blob([E], { type: "image/webp" }), I = r.duration;
            r.emit("webp", { currentTime: I, webp: b });
          }
        });
      } else n.type === "m" && n.name === "Cluster" && n.isEnd === false ? (this.firstVideoBlockRead = false, this.firstAudioBlockRead = false, this.emit_segment_info(), this.emit("cluster_ptr", n.tagStart), this.lastClusterPosition = n.tagStart) : n.type === "u" && n.name === "Timecode" ? this.lastClusterTimecode = n.value : n.type === "u" && n.name === "TimecodeScale" ? this.timecodeScale = n.value : n.type === "m" && n.name === "TrackEntry" ? n.isEnd ? (this.trackTypes[this.currentTrack.TrackNumber] = this.currentTrack.TrackType, this.trackDefaultDuration[this.currentTrack.TrackNumber] = this.currentTrack.DefaultDuration, this.trackCodecDelay[this.currentTrack.TrackNumber] = this.currentTrack.CodecDelay) : this.currentTrack = { TrackNumber: -1, TrackType: -1, DefaultDuration: null, CodecDelay: null } : n.type === "u" && n.name === "TrackType" ? this.currentTrack.TrackType = n.value : n.type === "u" && n.name === "TrackNumber" ? this.currentTrack.TrackNumber = n.value : n.type === "u" && n.name === "CodecDelay" ? this.currentTrack.CodecDelay = n.value : n.type === "u" && n.name === "DefaultDuration" ? this.drop_default_duration ? (console.warn("DefaultDuration detected!, remove it"), i = true) : this.currentTrack.DefaultDuration = n.value : n.name === "unknown" && console.warn(n);
      !this.metadataloaded && n.dataEnd > 0 && (this.metadataSize = n.dataEnd), i || this.chunks.push(n), this.logging && this.put(n);
    }
  }, Object.defineProperty(t.prototype, "duration", { get: function() {
    if (this.trackInfo.type === "nothing") return console.warn("no video, no audio track"), 0;
    var n = 0, r = 0, i = 0, a = this.trackDefaultDuration[this.trackInfo.trackNumber];
    if (typeof a == "number") n = a;
    else if (this.trackInfo.type === "both") if (this.last2SimpleBlockAudioTrackTimecode[1] > this.last2SimpleBlockVideoTrackTimecode[1]) {
      n = (this.last2SimpleBlockAudioTrackTimecode[1] - this.last2SimpleBlockAudioTrackTimecode[0]) * this.timecodeScale;
      var o = this.trackCodecDelay[this.trackTypes.indexOf(2)];
      typeof o == "number" && (r = o), i = this.last2SimpleBlockAudioTrackTimecode[1];
    } else {
      n = (this.last2SimpleBlockVideoTrackTimecode[1] - this.last2SimpleBlockVideoTrackTimecode[0]) * this.timecodeScale;
      var o = this.trackCodecDelay[this.trackTypes.indexOf(1)];
      typeof o == "number" && (r = o), i = this.last2SimpleBlockVideoTrackTimecode[1];
    }
    else if (this.trackInfo.type === "video") {
      n = (this.last2SimpleBlockVideoTrackTimecode[1] - this.last2SimpleBlockVideoTrackTimecode[0]) * this.timecodeScale;
      var o = this.trackCodecDelay[this.trackInfo.trackNumber];
      typeof o == "number" && (r = o), i = this.last2SimpleBlockVideoTrackTimecode[1];
    } else if (this.trackInfo.type === "audio") {
      n = (this.last2SimpleBlockAudioTrackTimecode[1] - this.last2SimpleBlockAudioTrackTimecode[0]) * this.timecodeScale;
      var o = this.trackCodecDelay[this.trackInfo.trackNumber];
      typeof o == "number" && (r = o), i = this.last2SimpleBlockAudioTrackTimecode[1];
    }
    var s = (this.lastClusterTimecode + i) * this.timecodeScale + n - r, l = s / this.timecodeScale;
    return Math.floor(l);
  }, enumerable: false, configurable: true }), t.prototype.addListener = function(n, r) {
    return e.prototype.addListener.call(this, n, r);
  }, t.prototype.put = function(n) {
    this.hasLoggingStarted || (this.hasLoggingStarted = true, this.logging && this.logGroup && console.groupCollapsed(this.logGroup)), n.type === "m" ? n.isEnd ? console.groupEnd() : console.group(n.name + ":" + n.tagStart) : n.type === "b" ? console.log(n.name, n.type) : console.log(n.name, n.tagStart, n.type, n.value);
  }, t;
}(Xw.EventEmitter);
wc.default = qw;
(function(e) {
  var t = wt && wt.__createBinding || (Object.create ? function(s, l, c, f) {
    f === void 0 && (f = c), Object.defineProperty(s, f, { enumerable: true, get: function() {
      return l[c];
    } });
  } : function(s, l, c, f) {
    f === void 0 && (f = c), s[f] = l[c];
  }), n = wt && wt.__exportStar || function(s, l) {
    for (var c in s) c !== "default" && !Object.prototype.hasOwnProperty.call(l, c) && t(l, s, c);
  };
  Object.defineProperty(e, "__esModule", { value: true }), e.tools = e.Reader = e.Encoder = e.Decoder = void 0, n(Nm, e);
  var r = gc;
  e.Decoder = r.default;
  var i = Rm();
  e.Encoder = i.default;
  var a = wc;
  e.Reader = a.default;
  var o = jr();
  e.tools = o;
})(Pm);
var Jw = wt && wt.__awaiter || function(e, t, n, r) {
  function i(a) {
    return a instanceof n ? a : new n(function(o) {
      o(a);
    });
  }
  return new (n || (n = Promise))(function(a, o) {
    function s(f) {
      try {
        c(r.next(f));
      } catch (h) {
        o(h);
      }
    }
    function l(f) {
      try {
        c(r.throw(f));
      } catch (h) {
        o(h);
      }
    }
    function c(f) {
      f.done ? a(f.value) : i(f.value).then(s, l);
    }
    c((r = r.apply(e, t || [])).next());
  });
}, e1 = wt && wt.__generator || function(e, t) {
  var n = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, i, a, o;
  return o = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function s(c) {
    return function(f) {
      return l([c, f]);
    };
  }
  function l(c) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; n; ) try {
      if (r = 1, i && (a = c[0] & 2 ? i.return : c[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, c[1])).done) return a;
      switch (i = 0, a && (c = [c[0] & 2, a.value]), c[0]) {
        case 0:
        case 1:
          a = c;
          break;
        case 4:
          return n.label++, { value: c[1], done: false };
        case 5:
          n.label++, i = c[1], c = [0];
          continue;
        case 7:
          c = n.ops.pop(), n.trys.pop();
          continue;
        default:
          if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (c[0] === 6 || c[0] === 2)) {
            n = 0;
            continue;
          }
          if (c[0] === 3 && (!a || c[1] > a[0] && c[1] < a[3])) {
            n.label = c[1];
            break;
          }
          if (c[0] === 6 && n.label < a[1]) {
            n.label = a[1], a = c;
            break;
          }
          if (a && n.label < a[2]) {
            n.label = a[2], n.ops.push(c);
            break;
          }
          a[2] && n.ops.pop(), n.trys.pop();
          continue;
      }
      c = t.call(e, n);
    } catch (f) {
      c = [6, f], i = 0;
    } finally {
      r = a = 0;
    }
    if (c[0] & 5) throw c[1];
    return { value: c[0] ? c[1] : void 0, done: true };
  }
};
Object.defineProperty(bm, "__esModule", { value: true });
var ul = Pm;
function t1(e) {
  return Jw(this, void 0, void 0, function() {
    var t, n, r, i, a, o, s, l, c, f, h, g;
    return e1(this, function(w) {
      switch (w.label) {
        case 0:
          if (!e) throw Error("call to fixWebmDuration requires a blob");
          t = new ul.Decoder(), n = new ul.Reader(), r = e.stream(), i = r.getReader(), w.label = 1;
        case 1:
          return [4, i.read()];
        case 2:
          return a = w.sent(), o = a.done, s = a.value, o ? (n.stop(), [3, 3]) : (l = t.decode(s), l = l == null ? void 0 : l.filter(function(E) {
            return E.type !== "unknown";
          }), l.forEach(function(E) {
            n.read(E);
          }), s = null, [3, 1]);
        case 3:
          return c = ul.tools.makeMetadataSeekable(n.metadatas, n.duration, n.cues), f = new Blob([c], { type: e.type }), h = e.slice(n.metadataSize), g = new Blob([f, h], { type: e.type }), [2, g];
      }
    });
  });
}
var n1 = bm.default = t1;
const r1 = () => MediaRecorder.isTypeSupported ? MediaRecorder.isTypeSupported("audio/webm") ? "audio/webm" : MediaRecorder.isTypeSupported("audio/mpeg") ? "audio/mpeg" : MediaRecorder.isTypeSupported("audio/mp4") ? "audio/mp4" : (console.log("No supported audio mime type found"), "") : "audio/mp4", as = (e) => r1(), i1 = (e) => as().includes("mp4") ? "mp4" : as().includes("mpeg") ? "mp3" : "webm", a1 = ({ workerAddr: e, params: t, workerAuthId: n, email: r, textSeed: i, audioSeed: a }) => {
  const o = k.useMemo(() => {
    if (e == "same" || e == "") {
      const c = window.location.hostname + ":" + window.location.port;
      return console.log("Overriding workerAddr to", c), c;
    }
    return e;
  }, [e]), s = window.location.protocol === "https:" ? "wss" : "ws", l = new URL(`${s}://${o}/api/chat`);
  return n && l.searchParams.append("worker_auth_id", n), r && l.searchParams.append("email", r), l.searchParams.append("text_temperature", t.textTemperature.toString()), l.searchParams.append("text_topk", t.textTopk.toString()), l.searchParams.append("audio_temperature", t.audioTemperature.toString()), l.searchParams.append("audio_topk", t.audioTopk.toString()), l.searchParams.append("pad_mult", t.padMult.toString()), l.searchParams.append("text_seed", i.toString()), l.searchParams.append("audio_seed", a.toString()), l.searchParams.append("repetition_penalty_context", t.repetitionPenaltyContext.toString()), l.searchParams.append("repetition_penalty", t.repetitionPenalty.toString()), l.searchParams.append("text_prompt", t.textPrompt.toString()), l.searchParams.append("voice_prompt", t.voicePrompt.toString()), console.log(l.toString()), l.toString();
}, o1 = ({ workerAddr: e, workerAuthId: t, audioContext: n, worklet: r, sessionAuthId: i, sessionId: a, onConversationEnd: o, startConnection: s, isBypass: l = false, email: c, theme: f, ...h }) => {
  const g = k.useRef(() => ({ playedAudioDuration: 0, missedAudioDuration: 0, totalAudioMessages: 0, delay: 0, minPlaybackDelay: 0, maxPlaybackDelay: 0 })), w = k.useRef(false), E = k.useRef([]), b = k.useRef(n.current.createMediaStreamDestination()), I = k.useRef(n.current.createChannelMerger(2)), x = k.useRef(new MediaRecorder(b.current.stream, { mimeType: as(), audioBitsPerSecond: 128e3 })), [v, S] = k.useState(""), [A, M] = k.useState(false), z = Tm(h), _ = k.useRef(0), R = k.useRef(0), V = k.useRef(null), T = k.useMemo(() => Math.round(1e6 * Math.random()), []), L = k.useMemo(() => Math.round(1e6 * Math.random()), []), O = a1({ workerAddr: e, params: z, workerAuthId: t, email: c, textSeed: T, audioSeed: L }), $ = k.useCallback(() => {
    M(true), console.log("on disconnect!"), oe();
  }, [M]), { socketStatus: X, sendMessage: de, socket: Se, start: Z, stop: F } = Sx({ uri: O, onDisconnect: $ });
  k.useEffect(() => {
    x.current.ondataavailable = (me) => {
      E.current.push(me.data);
    }, x.current.onstop = async () => {
      let me;
      const Ce = as();
      Ce.includes("webm") ? me = await n1(new Blob(E.current, { type: Ce })) : me = new Blob(E.current, { type: Ce }), S(URL.createObjectURL(me)), E.current = [], console.log("Audio Recording and encoding finished");
    };
  }, [x, S, E]), k.useEffect(() => (Z(), () => {
    F();
  }), [Z, t]);
  const J = k.useCallback(() => {
    var _a2, _b;
    if (!w.current) {
      console.log(Date.now() % 1e3, "Starting recording"), console.log("Starting recording");
      try {
        I.current.disconnect();
      } catch {
      }
      try {
        (_a2 = r.current) == null ? void 0 : _a2.disconnect(b.current);
      } catch {
      }
      (_b = r.current) == null ? void 0 : _b.connect(I.current, 0, 0), I.current.connect(b.current), S(""), x.current.start(), w.current = true;
    }
  }, [w, r, b, x, I]), oe = k.useCallback(() => {
    var _a2;
    if (console.log("Stopping recording"), console.log("isRecording", w), !!w.current) {
      try {
        (_a2 = r.current) == null ? void 0 : _a2.disconnect(I.current);
      } catch {
      }
      try {
        I.current.disconnect(b.current);
      } catch {
      }
      x.current.stop(), w.current = false;
    }
  }, [w, r, b, x, I]), ne = k.useCallback(async () => {
    var _a2;
    A ? window.location.reload() : ((_a2 = n.current) == null ? void 0 : _a2.resume(), X !== "connected" ? Z() : F());
  }, [X, A, Z, F]), K = k.useMemo(() => X === "connected" ? "bg-[#76b900]" : X === "connecting" ? "bg-orange-300" : "bg-red-400", [X]), Ze = k.useMemo(() => A ? "New Conversation" : X === "connected" ? "Disconnect" : "Connecting...", [A, X]);
  return m.jsx(vm.Provider, { value: { socketStatus: X, sendMessage: de, socket: Se }, children: m.jsxs("div", { children: [m.jsxs("div", { className: "main-grid h-screen max-h-screen w-screen p-4 max-w-96 md:max-w-screen-lg m-auto", children: [m.jsxs("div", { className: "controls text-center flex justify-center items-center gap-2", children: [m.jsx(Ox, { onClick: ne, disabled: X !== "connected" && !A, children: Ze }), m.jsx("div", { className: `h-4 w-4 rounded-full ${K}` })] }), n.current && r.current && m.jsxs(gm.Provider, { value: { startRecording: J, stopRecording: oe, audioContext: n, worklet: r, audioStreamDestination: b, stereoMerger: I, micDuration: _, actualAudioPlayed: R }, children: [m.jsxs("div", { className: "relative player h-full max-h-full w-full justify-between gap-3 md:p-12", children: [m.jsx(Rx, { setGetAudioStats: (me) => g.current = me, theme: f }), m.jsx(Mx, { theme: f }), m.jsx("div", { className: "pt-8 text-sm flex justify-center items-center flex-col download-links", children: v && m.jsx("div", { children: m.jsx("a", { href: v, download: `personaplex_audio.${i1()}`, className: "pt-2 text-center block", children: "Download audio" }) }) })] }), m.jsx("div", { className: "scrollbar player-text", ref: V, children: m.jsx(zx, { containerRef: V }) }), m.jsx("div", { className: "player-stats hidden md:block", children: m.jsx(Fx, { getAudioStats: g }) })] })] }), m.jsx("div", { className: "max-w-96 md:max-w-screen-lg p-4 m-auto text-center", children: m.jsx(gw, {}) })] }) });
}, s1 = () => {
  const [e] = fm(), t = Mr(), n = e.get("id"), r = e.get("worker_addr"), [i, a] = k.useState(false), [o, s] = k.useState(false), [l, c] = k.useState("New Agent"), f = Tm(), h = k.useRef(null), g = k.useRef(null);
  k.useEffect(() => {
    if (n) {
      const x = mm(n);
      x && (c(x.name), f.setTextPrompt(x.systemPrompt), f.setVoicePrompt(x.voice));
    }
  }, [n]);
  const w = k.useCallback(async () => {
    try {
      return await window.navigator.mediaDevices.getUserMedia({ audio: true }), a(true), true;
    } catch (x) {
      console.error(x), s(true), a(false);
    }
    return false;
  }, []), E = k.useCallback(async () => {
    if (h.current || (h.current = new AudioContext(), Ex(h.current.sampleRate)), g.current) return;
    let x = h.current;
    x.resume();
    try {
      g.current = new AudioWorkletNode(x, "moshi-processor");
    } catch {
      await x.audioWorklet.addModule(yx), g.current = new AudioWorkletNode(x, "moshi-processor");
    }
    g.current.connect(x.destination);
  }, []), b = k.useCallback(async () => {
    await E(), await w();
  }, [E, w]), I = i && h.current && g.current;
  return m.jsxs("div", { className: "space-y-8", children: [m.jsx("div", { className: "flex items-center justify-between", children: m.jsxs("div", { className: "flex items-center gap-4", children: [m.jsx(ct, { variant: "outline", size: "sm", onClick: () => t("/agents"), children: m.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: m.jsx("path", { d: "m15 18-6-6 6-6" }) }) }), m.jsxs("div", { children: [m.jsxs("h1", { className: "text-3xl font-bold text-white", children: ["Testing: ", l] }), m.jsxs("p", { className: "text-slate-400 mt-1", children: ["Status: ", I ? "Active Session" : "Ready to Connect"] })] })] }) }), m.jsx("div", { className: "max-w-4xl mx-auto", children: I ? m.jsx("div", { className: "bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden min-h-[500px] flex flex-col", children: m.jsx(o1, { workerAddr: r ?? "", audioContext: h, worklet: g, theme: "light", startConnection: b, ...f }) }) : m.jsxs(Et, { className: "text-center py-12 px-6", children: [m.jsx("div", { className: "w-20 h-20 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-500 border border-blue-500/20", children: m.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "40", height: "40", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [m.jsx("path", { d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" }), m.jsx("path", { d: "M19 10v2a7 7 0 0 1-14 0v-2" }), m.jsx("line", { x1: "12", x2: "12", y1: "19", y2: "22" })] }) }), m.jsx("h2", { className: "text-2xl font-bold text-white mb-2", children: "Ready to test?" }), m.jsxs("p", { className: "text-slate-400 max-w-sm mx-auto mb-8", children: ["Click the button below to start a full-duplex session with ", m.jsx("b", { children: l }), ". You'll need to grant microphone access."] }), o && m.jsx("div", { className: "mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm", children: "Please enable your microphone before proceeding." }), m.jsx(ct, { size: "lg", className: "px-12", onClick: b, children: "Start Conversation" })] }) }), !I && m.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto", children: [m.jsx(Et, { title: "Current Instructions", className: "opacity-60", children: m.jsx("p", { className: "text-sm text-slate-300 whitespace-pre-wrap", children: f.textPrompt || "No prompt set." }) }), m.jsx(Et, { title: "Voice Profile", className: "opacity-60", children: m.jsx("p", { className: "text-sm text-slate-300", children: f.voicePrompt.replace(".pt", "").replace(/^NAT/, "NATURAL_").replace(/^VAR/, "VARIETY_") }) })] })] });
}, l1 = () => {
  const e = [{ id: "1", date: "2024-05-20 14:32", agent: "Support AI", duration: "4m 12s", status: "Completed", sentiment: "Positive" }, { id: "2", date: "2024-05-20 13:15", agent: "Sales Bot", duration: "2m 45s", status: "Completed", sentiment: "Neutral" }, { id: "3", date: "2024-05-20 12:40", agent: "Support AI", duration: "8m 22s", status: "Completed", sentiment: "Negative" }, { id: "4", date: "2024-05-20 11:05", agent: "Appointment AI", duration: "1m 15s", status: "Failed", sentiment: "N/A" }, { id: "5", date: "2024-05-19 16:20", agent: "Support AI", duration: "5m 50s", status: "Completed", sentiment: "Positive" }], t = [{ header: "Date", accessor: "date" }, { header: "Agent", accessor: "agent" }, { header: "Duration", accessor: "duration" }, { header: "Status", accessor: (n) => m.jsx("span", { className: `text-xs ${n.status === "Completed" ? "text-emerald-400" : "text-red-400"}`, children: n.status }) }, { header: "Sentiment", accessor: (n) => m.jsx("span", { className: `px-2 py-0.5 rounded text-[10px] font-bold ${n.sentiment === "Positive" ? "bg-emerald-500/10 text-emerald-400" : n.sentiment === "Negative" ? "bg-red-500/10 text-red-400" : "bg-slate-800 text-slate-400"}`, children: n.sentiment }) }];
  return m.jsxs("div", { className: "space-y-8", children: [m.jsxs("div", { children: [m.jsx("h1", { className: "text-3xl font-bold text-white", children: "Call Logs" }), m.jsx("p", { className: "text-slate-400 mt-2", children: "Historical view of all AI agent interactions." })] }), m.jsx(Et, { className: "!p-0 border-none bg-transparent", children: m.jsx(hm, { columns: t, data: e }) })] });
}, u1 = () => {
  const e = [{ name: "Twilio", description: "Connect your AI agents to phone lines via Twilio.", icon: "T" }, { name: "Webhooks", description: "Trigger external actions based on call events.", icon: "W" }, { name: "Retell", description: "High-availability voice infrastructure integration.", icon: "R" }, { name: "Vapi", description: "Seamlessly sync with your existing Vapi assistants.", icon: "V" }];
  return m.jsxs("div", { className: "space-y-8", children: [m.jsxs("div", { children: [m.jsx("h1", { className: "text-3xl font-bold text-white", children: "Integrations" }), m.jsx("p", { className: "text-slate-400 mt-2", children: "Connect PersonaPlex with your favorite tools and platforms." })] }), m.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: e.map((t) => m.jsxs(Et, { className: "flex flex-col", children: [m.jsxs("div", { className: "flex items-center gap-4 mb-4", children: [m.jsx("div", { className: "w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-xl font-bold text-blue-500 border border-slate-700", children: t.icon }), m.jsx("h3", { className: "text-lg font-bold text-white", children: t.name })] }), m.jsx("p", { className: "text-sm text-slate-400 mb-6 flex-1", children: t.description }), m.jsx(ct, { variant: "outline", className: "w-full", children: "Configure" })] }, t.name)) })] });
}, c1 = () => m.jsxs("div", { className: "space-y-8", children: [m.jsxs("div", { children: [m.jsx("h1", { className: "text-3xl font-bold text-white", children: "Settings" }), m.jsx("p", { className: "text-slate-400 mt-2", children: "Manage your organization and account preferences." })] }), m.jsxs("div", { className: "max-w-3xl space-y-6", children: [m.jsx(Et, { title: "Organization Details", description: "Update your company information.", children: m.jsxs("div", { className: "space-y-4", children: [m.jsx(wi, { label: "Organization Name", defaultValue: "Future Theory" }), m.jsx(wi, { label: "Subdomain", defaultValue: "futuretheory.personaplex.ai", disabled: true, className: "opacity-60" }), m.jsx("div", { className: "pt-2", children: m.jsx(ct, { children: "Save Changes" }) })] }) }), m.jsx(Et, { title: "Security", description: "Manage your password and authentication.", children: m.jsxs("div", { className: "space-y-4", children: [m.jsx(ct, { variant: "outline", children: "Change Password" }), m.jsxs("div", { className: "flex items-center justify-between p-4 bg-slate-800/30 rounded-lg border border-slate-700", children: [m.jsxs("div", { children: [m.jsx("p", { className: "text-sm font-medium text-white", children: "Two-Factor Authentication" }), m.jsx("p", { className: "text-xs text-slate-500", children: "Add an extra layer of security to your account." })] }), m.jsx("div", { className: "w-10 h-6 bg-slate-700 rounded-full relative cursor-pointer", children: m.jsx("div", { className: "absolute left-1 top-1 w-4 h-4 bg-slate-400 rounded-full" }) })] })] }) }), m.jsxs(Et, { title: "Danger Zone", className: "border-red-900/50 bg-red-900/5", children: [m.jsx("p", { className: "text-sm text-slate-400 mb-4", children: "Once you delete your organization, there is no going back. Please be certain." }), m.jsx(ct, { variant: "danger", children: "Delete Organization" })] })] })] }), d1 = Z0([{ path: "/login", element: m.jsx(hx, {}) }, { path: "/", element: m.jsx(fx, {}), children: [{ index: true, element: m.jsx(B0, { to: "/dashboard", replace: true }) }, { path: "dashboard", element: m.jsx(px, {}) }, { path: "agents", element: m.jsx(mx, {}) }, { path: "agents/new", element: m.jsx(gx, {}) }, { path: "agents/test", element: m.jsx(s1, {}) }, { path: "call-logs", element: m.jsx(l1, {}) }, { path: "integrations", element: m.jsx(u1, {}) }, { path: "settings", element: m.jsx(c1, {}) }] }]);
cl.createRoot(document.getElementById("root")).render(m.jsx(ex, { router: d1 }));
