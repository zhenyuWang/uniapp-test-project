"use strict";
var e = require("os"),
  t = require("path"),
  s = require("debug"),
  r = require("licia/isWindows"),
  a = require("fs"),
  n = require("child_process"),
  o = require("licia/sleep"),
  i = require("licia/toStr"),
  c = require("licia/waitUntil"),
  l = require("licia/concat"),
  u = require("licia/getPort"),
  p = require("licia/dateFormat"),
  d = require("ws"),
  m = require("events"),
  h = require("licia/uuid"),
  f = require("licia/stringify");

function g(e) {
  return e && "object" == typeof e && "default" in e ? e : {
    default: e
  }
}
var w = g(e),
  y = g(t),
  v = g(s),
  E = g(r),
  b = g(a),
  P = g(n),
  M = g(o),
  A = g(i),
  j = g(c),
  O = g(l),
  $ = g(u),
  q = g(p),
  H = g(d),
  S = g(h),
  T = g(f);
const C = /(^[a-z][a-z0-9-]*)/i,
  I = /^navigator/i,
  L = /^swan-nav$/i;
var R;
! function(e) {
  e.SELECTOR = "selector", e.TAGNAME = "tagName"
}(R || (R = {}));
const N = {
    [R.SELECTOR]: [{
      test: I,
      processor: e => e.replace(I, "nav")
    }, {
      test: C,
      processor: e => `swan-${e}`
    }],
    [R.TAGNAME]: [{
      test: L,
      processor: e => e.replace(L, "swan-navigator")
    }, {
      test: C,
      processor: e => e.toLocaleLowerCase().replace("swan-", "")
    }]
  },
  k = e => t => {
    const s = (N[e] || []).filter((e => e.test.test(t)));
    for (const e of s) t = e.processor(t);
    return t
  },
  x = k(R.SELECTOR),
  D = k(R.TAGNAME),
  _ = e => Object.assign({}, e, {
    type: "id",
    info: {
      id: e.elementId
    }
  });
/^win/.test(process.platform);
class F extends m.EventEmitter {
  constructor(e) {
    super(), this.ws = e, this.ws.addEventListener("message", (e => {
      this.emit("message", e.data)
    })), this.ws.addEventListener("close", (() => {
      this.emit("close")
    }))
  }
  send(e) {
    this.ws.send(e)
  }
  close() {
    this.ws.close()
  }
}
const U = new Map,
  X = new Map,
  W = "Connection closed";
class B extends m.EventEmitter {
  constructor(e, t, s) {
    super(), this.puppet = t, this.namespace = s, this.callbacks = new Map, this.transport = e, this.isAlive = !0,
      this.id = Date.now(), this.debug = v.default("automator:protocol:" + this.namespace), this.onMessage = e => {
        var t, s;
        if (this.isAlive = !0, "true" === process.env.UNI_APP_X && '"pong"' === e) return;
        this.debug(`${q.default("yyyy-mm-dd HH:MM:ss:l")} ◀ RECV ${e}`);
        const {
          id: r,
          method: a,
          error: n,
          result: o,
          params: i
        } = JSON.parse(e);
        if (null === (t = null == o ? void 0 : o.method) || void 0 === t ? void 0 : t.startsWith("on")) return void(
          (e, t) => {
            const s = U.get(e.method);
            (null == s ? void 0 : s.has(t)) && s.get(t)(e.data)
          })(o, r);
        if (null === (s = null == o ? void 0 : o.method) || void 0 === s ? void 0 : s.startsWith("Socket.")) {
          return void((e, t, s) => {
            const r = X.get(t);
            (null == r ? void 0 : r.has(e)) && r.get(e)(s)
          })(o.method.replace("Socket.", ""), o.id, o.data)
        }
        if (!r) return this.puppet.emit(a, i);
        const {
          callbacks: c
        } = this;
        if (r && c.has(r)) {
          const e = c.get(r);
          c.delete(r), n ? e.reject(Error(n.message || n.detailMessage || n.errMsg)) : e.resolve(o)
        }
      }, this.onClose = () => {
        this.callbacks.forEach((e => {
          e.reject(Error(W))
        }))
      }, this.transport.on("message", this.onMessage), this.transport.on("close", this.onClose)
  }
  send(e, t = {}, s = !0) {
    if (s && this.puppet.adapter.has(e)) return this.puppet.adapter.send(this, e, t);
    const r = S.default(),
      a = T.default({
        id: r,
        method: e,
        params: t
      });
    return "ping" !== e && this.debug(`${q.default("yyyy-mm-dd HH:MM:ss:l")} SEND ► ${a}`), new Promise(((e, t) => {
      try {
        this.transport.send(a)
      } catch (e) {
        t(Error(W))
      }
      this.callbacks.set(r, {
        resolve: e,
        reject: t
      })
    }))
  }
  dispose() {
    this.transport.close()
  }
  startHeartbeat() {
    "true" === process.env.UNI_APP_X && ("android" === process.env.UNI_APP_PLATFORM ? this
    .startXAndroidHeartbeat() : "ios" === process.env.UNI_APP_PLATFORM && this.startXIosHeartbeat())
  }
  startXAndroidHeartbeat() {
    const e = new Map,
      t = function(e) {
        try {
          return require(e)
        } catch (t) {
          return require(require.resolve(e, {
            paths: [process.cwd()]
          }))
        }
      }("adbkit"),
      s = w.default.platform();
    let r = "",
      a = "";
    "darwin" === s ? (r = 'dumpsys activity | grep "Run"', a = "logcat -b crash | grep -C 10 io.dcloud.uniappx") :
      "win32" === s && (r = 'dumpsys activity | findstr "Run"', a = "logcat | findstr UncaughtExceptionHandler"), e
      .set(this.id, setInterval((async () => {
        if (!this.isAlive) {
          const n = t.createClient(),
            o = await n.listDevices();
          if (!o.length) throw Error("Device not found");
          const i = o[0].id,
            c = await n.getProperties(i);
          return ("1" === c["ro.kernel.qemu"] || "goldfish" === c["ro.hardware"]) && "win32" === s && (a =
            "logcat | grep UncaughtExceptionHandler"), n.shell(i, r).then((function(e) {
            let t, s = "";
            e.on("data", (function(e) {
              s += e.toString(), t && clearTimeout(t), t = setTimeout((() => {
                s.includes("io.dcloud.uniapp") || console.log("Stop the test process.")
              }), 50)
            }))
          })), n.shell(i, a).then((e => {
            let t, s = "";
            e.on("data", (e => {
              s += e.toString(), t && clearTimeout(t), t = setTimeout((() => {
                console.log(`crash log: ${s}`)
              }), 50)
            }))
          })), clearInterval(e.get(this.id)), e.delete(this.id), void this.dispose()
        }
        this.send("ping"), this.isAlive = !1
      }), 5e3))
  }
  startXIosHeartbeat() {
    const e = new Map;
    e.set(this.id, setInterval((async () => {
      if (!this.isAlive) return console.log("Stop the test process."), clearInterval(e.get(this.id)), e
        .delete(this.id), void this.dispose();
      this.send("ping"), this.isAlive = !1
    }), 5e3))
  }
  static createDevtoolConnection(e, t) {
    return new Promise(((s, r) => {
      const a = new H.default(e);
      a.addEventListener("open", (() => {
        s(new B(new F(a), t, "devtool"))
      })), a.addEventListener("error", r)
    }))
  }
  static createRuntimeConnection(e, t, s) {
    return new Promise(((r, a) => {
      v.default("automator:runtime")(`${q.default("yyyy-mm-dd HH:MM:ss:l")} port=${e}`);
      const n = new H.default.Server({
        port: e
      });
      j.default((async () => {
        if (t.runtimeConnection) return !0
      }), s, 1e3).catch((() => {
        n.close(), a("Failed to connect to runtime, please make sure the project is running")
      })), n.on("connection", (function(e) {
        v.default("automator:runtime")(`${q.default("yyyy-mm-dd HH:MM:ss:l")} connected`);
        const s = new B(new F(e), t, "runtime");
        t.setRuntimeConnection(s), s.startHeartbeat(), r(s)
      })), t.setRuntimeServer(n)
    }))
  }
}
const G = v.default("automator:devtool");
async function z(e, t, s) {
  const {
    port: r,
    cliPath: a,
    timeout: n,
    cwd: o = "",
    account: i = "",
    args: c = [],
    launch: l = !0
  } = t;
  let u = !1,
    p = !1;
  if (!1 !== l) {
    const t = {
      stdio: "ignore"
    };
    o && (t.cwd = o);
    let s = O.default(c, []);
    s = O.default(s, ["--auto"]), s = O.default(s, [e, "--auto-port", A.default(r)]), i && (s = O.default(s, [
      "--auto-account", i
    ]));
    try {
      G("%s %o %o", a, s, t);
      const e = P.default.spawn(a, s, t);
      e.on("error", (e => {
        u = !0
      })), e.on("exit", (() => {
        setTimeout((() => {
          p = !0
        }), 15e3)
      })), e.unref()
    } catch (e) {
      u = !1
    }
  } else setTimeout((() => {
    p = !0
  }), 15e3);
  const d = await j.default((async () => {
    try {
      if (u || p) return !0;
      const e = await async function(e, t) {
        let s;
        try {
          s = await B.createDevtoolConnection(e.wsEndpoint, t)
        } catch (t) {
          throw Error(
            `Failed connecting to ${e.wsEndpoint}, check if target project window is opened with automation enabled`
            )
        }
        return s
      }({
        wsEndpoint: `ws://127.0.0.1:${r}`
      }, s);
      return e
    } catch (e) {}
  }), n, 1e3);
  if (u) throw Error(`Failed to launch ${s.devtools.name}, please make sure cliPath is correctly specified`);
  if (p) throw Error(`Failed to launch ${s.devtools.name} , please make sure http port is open`);
  return await M.default(5e3), G(`${q.default("yyyy-mm-dd HH:MM:ss:l")} connected`), d
}
const J = [];
["", "-rc"].forEach((e => {
  E.default ? (J.push(y.default.join(w.default.homedir(), `AppData/Local/Programs/swan-ide-gui${e}/cli.bat`)), J
    .push(`C:/Program Files/swan-ide-gui${e}/cli.bat`)) : J.push(
    `/Applications/百度开发者工具${e}.app/Contents/MacOS/cli`)
}));
const V = {
  devtools: {
    name: "Baidu DevTools",
    remote: !0,
    automator: !0,
    paths: J,
    required: ["project.swan.json", "app.json", "app.js"],
    defaultPort: 9430,
    validate: async function(e, t) {
      const s = function(e, t) {
        const s = t.devtools.paths.slice(0);
        e && s.unshift(e);
        for (const e of s)
          if (b.default.existsSync(e)) return e;
        throw Error(`${t.devtools.name} not found, please specify executablePath option`)
      }(e.executablePath, t);
      let r = e.port || t.devtools.defaultPort;
      if (!1 !== e.launch) try {
        r = await async function(e, t) {
          const s = await $.default(e || t);
          if (e && s !== e) throw Error(`Port ${e} is in use, please specify another port`);
          return s
        }(r)
      } catch (t) {
        e.launch = !1
      } else {
        r === await $.default(r) && (e.launch = !0)
      }
      return Object.assign(Object.assign({}, e), {
        port: r,
        cliPath: s
      })
    },
    async create(e, t, s) {
      const r = await z(e, t, s);
      return s.compiled ? v.default("automator:devtool")("Waiting for runtime automator") : (v.default(
        "automator:devtool")("initRuntimeAutomator"), r.send("smartapp.swan", {
        api: "$$initRuntimeAutomator",
        params: []
      })), r
    }
  },
  adapter: {
    "Tool.enableRemoteDebug": {
      reflect: async e => ({
        qrCode: (await e("Tool.enablePreview")).url
      })
    },
    "App.exit": {
      reflect: async () => Promise.resolve()
    },
    "Page.getElement": {
      reflect: async (e, t) => (await e("Page.getElements", t)).elements[0]
    },
    "Page.getElements": {
      reflect: async (e, t) => {
        return {
          elements: (await e("smartapp.element.getBySelector", Object.assign(Object.assign({}, t), {
            properties: ["id", "tagName"],
            selector: (s = t.selector, s.split(" ").map((e => x(e))).join(" "))
          }))).map((e => {
            const t = e.properties;
            return {
              elementId: t.id,
              nodeId: t.id,
              tagName: D(t.tagName)
            }
          }))
        };
        var s
      }
    },
    "Page.getWindowProperties": {
      reflect: async (e, t) => {
        const s = t.names.map((e => e.replace("document.documentElement.", ""))),
          r = (await e("smartapp.element.getBySelector", {
            properties: s,
            selector: "html"
          }))[0];
        return {
          properties: s.map((e => r.properties[e]))
        }
      }
    },
    "Element.getHTML": {
      reflect: async (e, t) => {
        const s = [t.type + "HTML"];
        return {
          html: (await e("Element.getDOMProperties", Object.assign(Object.assign({}, t), {
            names: s
          }))).properties[0]
        }
      }
    },
    "Element.getElement": {
      reflect: async (e, t) => (await e("Element.getElements", t)).elements[0]
    },
    "Element.getElements": {
      reflect: async (e, t) => {
        const {
          elements: s
        } = await e("Page.getElements", Object.assign(Object.assign({}, t), {
          selector: `#${t.elementId} ${t.selector}`
        }));
        return s.forEach((e => {
          e.nodeId = e.id
        })), {
          elements: s
        }
      }
    },
    "Element.getAttributes": {
      reflect: async (e, t) => {
        const s = [];
        for (const r of t.names) s.push(await e("smartapp.element.getAttribute", Object.assign({
          attribute: r
        }, t)));
        return {
          attributes: s
        }
      },
      params: _
    },
    "Element.getStyles": {
      reflect: async (e, t) => {
        const s = [];
        for (const r of t.names) s.push(await e("smartapp.element.getComputedStyle", Object.assign({
          style: r
        }, t)));
        return {
          styles: s
        }
      },
      params: _
    },
    "Element.getDOMProperties": {
      reflect: async (e, t) => {
        const s = [];
        for (const r of t.names) s.push(await e("smartapp.element.getProperty", Object.assign({
          property: r
        }, t)));
        return {
          properties: s
        }
      },
      params: _
    },
    "Element.getProperties": {
      reflect: async (e, t) => {
        const s = [];
        for (const r of t.names) s.push(await e("smartapp.element.getAttribute", Object.assign({
          attribute: r
        }, t)));
        return {
          properties: s
        }
      },
      params: _
    },
    "Element.getOffset": {
      reflect: async (e, t) => ({
        left: await e("smartapp.element.getProperty", Object.assign({
          property: "offsetLeft"
        }, t)),
        top: await e("smartapp.element.getProperty", Object.assign({
          property: "offsetTop"
        }, t))
      }),
      params: _
    },
    "Element.tap": {
      reflect: "smartapp.element.touch",
      params: _
    }
  }
};
module.exports = V;