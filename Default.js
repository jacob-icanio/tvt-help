// {{MadCap}} //////////////////////////////////////////////////////////////////
// Copyright: MadCap Software, Inc - www.madcapsoftware.com ////////////////////
////////////////////////////////////////////////////////////////////////////////
// <version>19.1.8677.41286</version>
////////////////////////////////////////////////////////////////////////////////

//    Syntax:
//    function FMCOpenHelp( id, skinName, searchQuery, firstPick )
//
//    id          - Identifier that was created in Flare. This can be either the identifier name or value. The topic and skin
//                  that is associated with the id will be used. If no skin is associated with the id, skinName will be used.
//                  Alternatively, id may contain a topic path. In this case, the specified topic will be loaded with the skin
//                  that is specified in skinName. Specify null to use the help system's default starting topic.
//    skinName    - This is a string indicating the name of the skin to use when opening the help system. Specify null to use
//                  the default skin or to use the skin that is associated with id. If a skin is associated with id AND a skin
//                  is specified in skinName, skinName will take precedence.
//    searchQuery - This is a string indicating the search query used when opening the help system. If a search query is specified,
//                  the help system will start with the search pane open and the search query executed. Specify null to open
//                  the help system without a search query.
//    firstPick   - This is a boolean indicating whether to automatically open the topic from the first search result that is
//                  returned by the search query (see searchQuery parameter). Use null if no search query was specified.
//
//    Examples:

//
//    In the following example, topic and skin associated with "FILE_NEW" will be used:
//    FMCOpenHelp( 'FILE_NEW', null, null, null );
//
//    In the following example, topic associated with "FILE_NEW" will be used. "BlueSkin" will override the skin associated with "FILE_NEW":
//    FMCOpenHelp( 'FILE_NEW', 'BlueSkin', null, null );
//
//    In the following example, topic and skin associated with identifier value 1 will be used:
//    FMCOpenHelp( 1, null, null, null );
//
//    In the following example, topic associated with identifier value 1 will be used. "BlueSkin" will override the skin associated with identifier value 1:
//    FMCOpenHelp( 1, 'BlueSkin', null, null );
//
//    In the following example, "Company/Employees.htm" will be used with the default skin:
//    FMCOpenHelp( 'Company/Employees.htm', null, null, null );
//
//    In the following example, both the default topic and skin will be used:
//    FMCOpenHelp( null, null, null, null );
//
//    In the following example, the default topic will be used with "BlueSkin":
//    FMCOpenHelp( null, 'BlueSkin', null, null );
//
//    In the following example, both the default topic and skin will be used. The help system will be started with the search pane
//    displaying the search results for the query 'quarterly report'. The topic from the first result will not be opened:
//    FMCOpenHelp( null, null, 'quarterly report', false );
//
//    In the following example, both the default topic and skin will be used. The help system will be started with the search pane
//    displaying the search results for the query 'quarterly report'. The topic from the first result will be opened:
//    FMCOpenHelp( null, null, 'quarterly report', true );

function FMCOpenHelp(id, skinName, searchQuery, firstPick, pathToHelpSystem) {
  MadCap.OpenHelp(id, skinName, searchQuery, firstPick, pathToHelpSystem);
}

/*!
 * Copyright MadCap Software
 * http://www.madcapsoftware.com/
 *
 * v19.1.8677.41286
 */

/*
 RequireJS 2.1.11 Copyright (c) 2010-2014, The Dojo Foundation All Rights Reserved.
 Available via the MIT or new BSD license.
 see: http://github.com/jrburke/requirejs for details
*/
var requirejs, require, define;
(function (ca) {
  function G(b) {
    return "[object Function]" === M.call(b);
  }
  function H(b) {
    return "[object Array]" === M.call(b);
  }
  function v(b, c) {
    if (b) {
      var d;
      for (d = 0; d < b.length && (!b[d] || !c(b[d], d, b)); d += 1);
    }
  }
  function U(b, c) {
    if (b) {
      var d;
      for (d = b.length - 1; -1 < d && (!b[d] || !c(b[d], d, b)); d -= 1);
    }
  }
  function s(b, c) {
    return ga.call(b, c);
  }
  function j(b, c) {
    return s(b, c) && b[c];
  }
  function B(b, c) {
    for (var d in b) if (s(b, d) && c(b[d], d)) break;
  }
  function V(b, c, d, g) {
    c &&
      B(c, function (c, h) {
        if (d || !s(b, h))
          g &&
          "object" === typeof c &&
          c &&
          !H(c) &&
          !G(c) &&
          !(c instanceof RegExp)
            ? (b[h] || (b[h] = {}), V(b[h], c, d, g))
            : (b[h] = c);
      });
    return b;
  }
  function t(b, c) {
    return function () {
      return c.apply(b, arguments);
    };
  }
  function da(b) {
    throw b;
  }
  function ea(b) {
    if (!b) return b;
    var c = ca;
    v(b.split("."), function (b) {
      c = c[b];
    });
    return c;
  }
  function C(b, c, d, g) {
    c = Error(c + "\nhttp://requirejs.org/docs/errors.html#" + b);
    c.requireType = b;
    c.requireModules = g;
    d && (c.originalError = d);
    return c;
  }
  function ha(b) {
    function c(a, e, b) {
      var f,
        n,
        c,
        d,
        g,
        h,
        i,
        I = e && e.split("/");
      n = I;
      var m = l.map,
        k = m && m["*"];
      if (a && "." === a.charAt(0))
        if (e) {
          n = I.slice(0, I.length - 1);
          a = a.split("/");
          e = a.length - 1;
          l.nodeIdCompat && R.test(a[e]) && (a[e] = a[e].replace(R, ""));
          n = a = n.concat(a);
          d = n.length;
          for (e = 0; e < d; e++)
            if (((c = n[e]), "." === c)) n.splice(e, 1), (e -= 1);
            else if (".." === c)
              if (1 === e && (".." === n[2] || ".." === n[0])) break;
              else 0 < e && (n.splice(e - 1, 2), (e -= 2));
          a = a.join("/");
        } else 0 === a.indexOf("./") && (a = a.substring(2));
      if (b && m && (I || k)) {
        n = a.split("/");
        e = n.length;
        a: for (; 0 < e; e -= 1) {
          d = n.slice(0, e).join("/");
          if (I)
            for (c = I.length; 0 < c; c -= 1)
              if ((b = j(m, I.slice(0, c).join("/"))))
                if ((b = j(b, d))) {
                  f = b;
                  g = e;
                  break a;
                }
          !h && k && j(k, d) && ((h = j(k, d)), (i = e));
        }
        !f && h && ((f = h), (g = i));
        f && (n.splice(0, g, f), (a = n.join("/")));
      }
      return (f = j(l.pkgs, a)) ? f : a;
    }
    function d(a) {
      z &&
        v(document.getElementsByTagName("script"), function (e) {
          if (
            e.getAttribute("data-requiremodule") === a &&
            e.getAttribute("data-requirecontext") === i.contextName
          )
            return e.parentNode.removeChild(e), !0;
        });
    }
    function g(a) {
      var e = j(l.paths, a);
      if (e && H(e) && 1 < e.length)
        return e.shift(), i.require.undef(a), i.require([a]), !0;
    }
    function u(a) {
      var e;
      return [e, a];
    }
    function m(a, e, b, f) {
      var n,
        d,
        g = null,
        h = e ? e.name : null,
        l = a,
        m = !0,
        k = "";
      a || ((m = !1), (a = "_@r" + (M += 1)));
      a = u(a);
      g = a[0];
      a = a[1];
      g && ((g = c(g, h, f)), (d = j(p, g)));
      a &&
        (g
          ? (k =
              d && d.normalize
                ? d.normalize(a, function (a) {
                    return c(a, h, f);
                  })
                : c(a, h, f))
          : ((k = c(a, h, f)),
            (a = u(k)),
            (g = a[0]),
            (k = a[1]),
            (b = !0),
            (n = i.nameToUrl(k))));
      b = g && !d && !b ? "_unnormalized" + (Q += 1) : "";
      return {
        prefix: g,
        name: k,
        parentMap: e,
        unnormalized: !!b,
        url: n,
        originalName: l,
        isDefine: m,
        id: (g ? g + "!" + k : k) + b,
      };
    }
    function q(a) {
      var e = a.id,
        b = j(k, e);
      b || (b = k[e] = new i.Module(a));
      return b;
    }
    function r(a, e, b) {
      var f = a.id,
        n = j(k, f);
      if (s(p, f) && (!n || n.defineEmitComplete)) "defined" === e && b(p[f]);
      else if (((n = q(a)), n.error && "error" === e)) b(n.error);
      else n.on(e, b);
    }
    function w(a, e) {
      var b = a.requireModules,
        f = !1;
      if (e) e(a);
      else if (
        (v(b, function (e) {
          if ((e = j(k, e)))
            (e.error = a), e.events.error && ((f = !0), e.emit("error", a));
        }),
        !f)
      )
        h.onError(a);
    }
    function x() {
      S.length && (ia.apply(A, [A.length, 0].concat(S)), (S = []));
    }
    function y(a) {
      delete k[a];
      delete W[a];
    }
    function F(a, e, b) {
      var f = a.map.id;
      a.error
        ? a.emit("error", a.error)
        : ((e[f] = !0),
          v(a.depMaps, function (f, c) {
            var d = f.id,
              g = j(k, d);
            g &&
              !a.depMatched[c] &&
              !b[d] &&
              (j(e, d) ? (a.defineDep(c, p[d]), a.check()) : F(g, e, b));
          }),
          (b[f] = !0));
    }
    function D() {
      var a,
        e,
        b = (a = 1e3 * l.waitSeconds) && i.startTime + a < new Date().getTime(),
        f = [],
        c = [],
        h = !1,
        k = !0;
      if (!X) {
        X = !0;
        B(W, function (a) {
          var i = a.map,
            m = i.id;
          if (a.enabled && (i.isDefine || c.push(a), !a.error))
            if (!a.inited && b) g(m) ? (h = e = !0) : (f.push(m), d(m));
            else if (
              !a.inited &&
              a.fetched &&
              i.isDefine &&
              ((h = !0), !i.prefix)
            )
              return (k = !1);
        });
        if (b && f.length)
          return (
            (a = C("timeout", "Load timeout for modules: " + f, null, f)),
            (a.contextName = i.contextName),
            w(a)
          );
        k &&
          v(c, function (a) {
            F(a, {}, {});
          });
        if ((!b || e) && h)
          if ((z || fa) && !Y)
            Y = setTimeout(function () {
              Y = 0;
              D();
            }, 50);
        X = !1;
      }
    }
    function E(a) {
      s(p, a[0]) || q(m(a[0], null, !0)).init(a[1], a[2]);
    }
    function K(a) {
      var a = a.currentTarget || a.srcElement,
        e = i.onScriptLoad;
      a.detachEvent && !Z
        ? a.detachEvent("onreadystatechange", e)
        : a.removeEventListener("load", e, !1);
      e = i.onScriptError;
      (!a.detachEvent || Z) && a.removeEventListener("error", e, !1);
      return { node: a, id: a && a.getAttribute("data-requiremodule") };
    }
    function L() {
      var a;
      for (x(); A.length; ) {
        a = A.shift();
        if (null === a[0])
          return w(
            C(
              "mismatch",
              "Mismatched anonymous define() module: " + a[a.length - 1]
            )
          );
        E(a);
      }
    }
    var X,
      $,
      i,
      N,
      Y,
      l = {
        waitSeconds: 7,
        baseUrl: "./",
        paths: {},
        bundles: {},
        pkgs: {},
        shim: {},
        config: {},
      },
      k = {},
      W = {},
      aa = {},
      A = [],
      p = {},
      T = {},
      ba = {},
      M = 1,
      Q = 1;
    N = {
      require: function (a) {
        return a.require ? a.require : (a.require = i.makeRequire(a.map));
      },
      exports: function (a) {
        a.usingExports = !0;
        if (a.map.isDefine)
          return a.exports
            ? (p[a.map.id] = a.exports)
            : (a.exports = p[a.map.id] = {});
      },
      module: function (a) {
        return a.module
          ? a.module
          : (a.module = {
              id: a.map.id,
              uri: a.map.url,
              config: function () {
                return j(l.config, a.map.id) || {};
              },
              exports: a.exports || (a.exports = {}),
            });
      },
    };
    $ = function (a) {
      this.events = j(aa, a.id) || {};
      this.map = a;
      this.shim = j(l.shim, a.id);
      this.depExports = [];
      this.depMaps = [];
      this.depMatched = [];
      this.pluginMaps = {};
      this.depCount = 0;
    };
    $.prototype = {
      init: function (a, e, b, f) {
        f = f || {};
        if (!this.inited) {
          this.factory = e;
          if (b) this.on("error", b);
          else
            this.events.error &&
              (b = t(this, function (a) {
                this.emit("error", a);
              }));
          this.depMaps = a && a.slice(0);
          this.errback = b;
          this.inited = !0;
          this.ignore = f.ignore;
          f.enabled || this.enabled ? this.enable() : this.check();
        }
      },
      defineDep: function (a, e) {
        this.depMatched[a] ||
          ((this.depMatched[a] = !0),
          (this.depCount -= 1),
          (this.depExports[a] = e));
      },
      fetch: function () {
        if (!this.fetched) {
          this.fetched = !0;
          i.startTime = new Date().getTime();
          var a = this.map;
          if (this.shim)
            i.makeRequire(this.map, { enableBuildCallback: !0 })(
              this.shim.deps || [],
              t(this, function () {
                return a.prefix ? this.callPlugin() : this.load();
              })
            );
          else return a.prefix ? this.callPlugin() : this.load();
        }
      },
      load: function () {
        var a = this.map.url;
        T[a] || ((T[a] = !0), i.load(this.map.id, a));
      },
      check: function () {
        if (this.enabled && !this.enabling) {
          var a,
            e,
            b = this.map.id;
          e = this.depExports;
          var f = this.exports,
            c = this.factory;
          if (this.inited)
            if (this.error) this.emit("error", this.error);
            else {
              if (!this.defining) {
                this.defining = !0;
                if (1 > this.depCount && !this.defined) {
                  if (G(c)) {
                    if (
                      (this.events.error && this.map.isDefine) ||
                      h.onError !== da
                    )
                      try {
                        f = i.execCb(b, c, e, f);
                      } catch (d) {
                        a = d;
                      }
                    else f = i.execCb(b, c, e, f);
                    this.map.isDefine &&
                      void 0 === f &&
                      ((e = this.module)
                        ? (f = e.exports)
                        : this.usingExports && (f = this.exports));
                    if (a)
                      return (
                        (a.requireMap = this.map),
                        (a.requireModules = this.map.isDefine
                          ? [this.map.id]
                          : null),
                        (a.requireType = this.map.isDefine
                          ? "define"
                          : "require"),
                        w((this.error = a))
                      );
                  } else f = c;
                  this.exports = f;
                  if (
                    this.map.isDefine &&
                    !this.ignore &&
                    ((p[b] = f), h.onResourceLoad)
                  )
                    h.onResourceLoad(i, this.map, this.depMaps);
                  y(b);
                  this.defined = !0;
                }
                this.defining = !1;
                this.defined &&
                  !this.defineEmitted &&
                  ((this.defineEmitted = !0),
                  this.emit("defined", this.exports),
                  (this.defineEmitComplete = !0));
              }
            }
          else this.fetch();
        }
      },
      callPlugin: function () {
        var a = this.map,
          b = a.id,
          d = m(a.prefix);
        this.depMaps.push(d);
        r(
          d,
          "defined",
          t(this, function (f) {
            var d, g;
            g = j(ba, this.map.id);
            var J = this.map.name,
              u = this.map.parentMap ? this.map.parentMap.name : null,
              p = i.makeRequire(a.parentMap, { enableBuildCallback: !0 });
            if (this.map.unnormalized) {
              if (
                (f.normalize &&
                  (J =
                    f.normalize(J, function (a) {
                      return c(a, u, !0);
                    }) || ""),
                (f = m(a.prefix + "!" + J, this.map.parentMap)),
                r(
                  f,
                  "defined",
                  t(this, function (a) {
                    this.init(
                      [],
                      function () {
                        return a;
                      },
                      null,
                      { enabled: !0, ignore: !0 }
                    );
                  })
                ),
                (g = j(k, f.id)))
              ) {
                this.depMaps.push(f);
                if (this.events.error)
                  g.on(
                    "error",
                    t(this, function (a) {
                      this.emit("error", a);
                    })
                  );
                g.enable();
              }
            } else
              g
                ? ((this.map.url = i.nameToUrl(g)), this.load())
                : ((d = t(this, function (a) {
                    this.init(
                      [],
                      function () {
                        return a;
                      },
                      null,
                      { enabled: !0 }
                    );
                  })),
                  (d.error = t(this, function (a) {
                    this.inited = !0;
                    this.error = a;
                    a.requireModules = [b];
                    B(k, function (a) {
                      0 === a.map.id.indexOf(b + "_unnormalized") &&
                        y(a.map.id);
                    });
                    w(a);
                  })),
                  (d.fromText = t(this, function (f, c) {
                    var g = a.name,
                      J = m(g),
                      k = O;
                    c && (f = c);
                    k && (O = !1);
                    q(J);
                    s(l.config, b) && (l.config[g] = l.config[b]);
                    try {
                      h.exec(f);
                    } catch (j) {
                      return w(
                        C(
                          "fromtexteval",
                          "fromText eval for " + b + " failed: " + j,
                          j,
                          [b]
                        )
                      );
                    }
                    k && (O = !0);
                    this.depMaps.push(J);
                    i.completeLoad(g);
                    p([g], d);
                  })),
                  f.load(a.name, p, d, l));
          })
        );
        i.enable(d, this);
        this.pluginMaps[d.id] = d;
      },
      enable: function () {
        W[this.map.id] = this;
        this.enabling = this.enabled = !0;
        v(
          this.depMaps,
          t(this, function (a, b) {
            var c, f;
            if ("string" === typeof a) {
              a = m(
                a,
                this.map.isDefine ? this.map : this.map.parentMap,
                !1,
                !this.skipMap
              );
              this.depMaps[b] = a;
              if ((c = j(N, a.id))) {
                this.depExports[b] = c(this);
                return;
              }
              this.depCount += 1;
              r(
                a,
                "defined",
                t(this, function (a) {
                  this.defineDep(b, a);
                  this.check();
                })
              );
              this.errback && r(a, "error", t(this, this.errback));
            }
            c = a.id;
            f = k[c];
            !s(N, c) && f && !f.enabled && i.enable(a, this);
          })
        );
        B(
          this.pluginMaps,
          t(this, function (a) {
            var b = j(k, a.id);
            b && !b.enabled && i.enable(a, this);
          })
        );
        this.enabling = !1;
        this.check();
      },
      on: function (a, b) {
        var c = this.events[a];
        c || (c = this.events[a] = []);
        c.push(b);
      },
      emit: function (a, b) {
        v(this.events[a], function (a) {
          a(b);
        });
        "error" === a && delete this.events[a];
      },
    };
    i = {
      config: l,
      contextName: b,
      registry: k,
      defined: p,
      urlFetched: T,
      defQueue: A,
      Module: $,
      makeModuleMap: m,
      nextTick: h.nextTick,
      onError: w,
      configure: function (a) {
        a.baseUrl &&
          "/" !== a.baseUrl.charAt(a.baseUrl.length - 1) &&
          (a.baseUrl += "/");
        var b = l.shim,
          c = { paths: !0, bundles: !0, config: !0, map: !0 };
        B(a, function (a, b) {
          c[b] ? (l[b] || (l[b] = {}), V(l[b], a, !0, !0)) : (l[b] = a);
        });
        a.bundles &&
          B(a.bundles, function (a, b) {
            v(a, function (a) {
              a !== b && (ba[a] = b);
            });
          });
        a.shim &&
          (B(a.shim, function (a, c) {
            H(a) && (a = { deps: a });
            if ((a.exports || a.init) && !a.exportsFn)
              a.exportsFn = i.makeShimExports(a);
            b[c] = a;
          }),
          (l.shim = b));
        a.packages &&
          v(a.packages, function (a) {
            var b,
              a = "string" === typeof a ? { name: a } : a;
            b = a.name;
            a.location && (l.paths[b] = a.location);
            l.pkgs[b] =
              a.name + "/" + (a.main || "main").replace(ja, "").replace(R, "");
          });
        B(k, function (a, b) {
          !a.inited && !a.map.unnormalized && (a.map = m(b));
        });
        if (a.deps || a.callback) i.require(a.deps || [], a.callback);
      },
      makeShimExports: function (a) {
        return function () {
          var b;
          a.init && (b = a.init.apply(ca, arguments));
          return b || (a.exports && ea(a.exports));
        };
      },
      makeRequire: function (a, e) {
        function g(f, c, d) {
          var j, l;
          e.enableBuildCallback && c && G(c) && (c.__requireJsBuild = !0);
          if ("string" === typeof f) {
            if (G(c)) return w(C("requireargs", "Invalid require call"), d);
            if (a && s(N, f)) return N[f](k[a.id]);
            if (h.get) return h.get(i, f, a, g);
            j = m(f, a, !1, !0);
            j = j.id;
            return !s(p, j)
              ? w(
                  C(
                    "notloaded",
                    'Module name "' +
                      j +
                      '" has not been loaded yet for context: ' +
                      b +
                      (a ? "" : ". Use require([])")
                  )
                )
              : p[j];
          }
          L();
          i.nextTick(function () {
            L();
            l = q(m(null, a));
            l.skipMap = e.skipMap;
            l.init(f, c, d, { enabled: !0 });
            D();
          });
          return g;
        }
        e = e || {};
        V(g, {
          isBrowser: z,
          toUrl: function (b) {
            var e,
              d = b.lastIndexOf("."),
              g = b.split("/")[0];
            if (-1 !== d && (!("." === g || ".." === g) || 1 < d))
              (e = b.substring(d, b.length)), (b = b.substring(0, d));
            return i.nameToUrl(c(b, a && a.id, !0), e, !0);
          },
          defined: function (b) {
            return s(p, m(b, a, !1, !0).id);
          },
          specified: function (b) {
            b = m(b, a, !1, !0).id;
            return s(p, b) || s(k, b);
          },
        });
        a ||
          (g.undef = function (b) {
            x();
            var c = m(b, a, !0),
              e = j(k, b);
            d(b);
            delete p[b];
            delete T[c.url];
            delete aa[b];
            U(A, function (a, c) {
              a[0] === b && A.splice(c, 1);
            });
            e && (e.events.defined && (aa[b] = e.events), y(b));
          });
        return g;
      },
      enable: function (a) {
        j(k, a.id) && q(a).enable();
      },
      completeLoad: function (a) {
        var b,
          c,
          f = j(l.shim, a) || {},
          d = f.exports;
        for (x(); A.length; ) {
          c = A.shift();
          if (null === c[0]) {
            c[0] = a;
            if (b) break;
            b = !0;
          } else c[0] === a && (b = !0);
          E(c);
        }
        c = j(k, a);
        if (!b && !s(p, a) && c && !c.inited) {
          if (l.enforceDefine && (!d || !ea(d)))
            return g(a)
              ? void 0
              : w(C("nodefine", "No define call for " + a, null, [a]));
          E([a, f.deps || [], f.exportsFn]);
        }
        D();
      },
      nameToUrl: function (a, b, c) {
        var f, d, g;
        (f = j(l.pkgs, a)) && (a = f);
        if ((f = j(ba, a))) return i.nameToUrl(f, b, c);
        if (h.jsExtRegExp.test(a)) f = a + (b || "");
        else {
          f = l.paths;
          a = a.split("/");
          for (d = a.length; 0 < d; d -= 1)
            if (((g = a.slice(0, d).join("/")), (g = j(f, g)))) {
              H(g) && (g = g[0]);
              a.splice(0, d, g);
              break;
            }
          f = a.join("/");
          f += b || (/^data\:|\?/.test(f) || c ? "" : ".js");
          f =
            ("/" === f.charAt(0) || f.match(/^[\w\+\.\-]+:/) ? "" : l.baseUrl) +
            f;
        }
        return l.urlArgs
          ? f + ((-1 === f.indexOf("?") ? "?" : "&") + l.urlArgs)
          : f;
      },
      load: function (a, b) {
        h.load(i, a, b);
      },
      execCb: function (a, b, c, d) {
        return b.apply(d, c);
      },
      onScriptLoad: function (a) {
        if (
          "load" === a.type ||
          ka.test((a.currentTarget || a.srcElement).readyState)
        )
          (P = null), (a = K(a)), i.completeLoad(a.id);
      },
      onScriptError: function (a) {
        var b = K(a);
        if (!g(b.id))
          return w(C("scripterror", "Script error for: " + b.id, a, [b.id]));
      },
    };
    i.require = i.makeRequire();
    return i;
  }
  var h,
    x,
    y,
    D,
    K,
    E,
    P,
    L,
    q,
    Q,
    la = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,
    ma = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
    R = /\.js$/,
    ja = /^\.\//;
  x = Object.prototype;
  var M = x.toString,
    ga = x.hasOwnProperty,
    ia = Array.prototype.splice,
    z = !!(
      "undefined" !== typeof window &&
      "undefined" !== typeof navigator &&
      window.document
    ),
    fa = !z && "undefined" !== typeof importScripts,
    ka =
      z && "PLAYSTATION 3" === navigator.platform
        ? /^complete$/
        : /^(complete|loaded)$/,
    Z = "undefined" !== typeof opera && "[object Opera]" === opera.toString(),
    F = {},
    r = {},
    S = [],
    O = !1;
  if ("undefined" === typeof define) {
    if ("undefined" !== typeof requirejs) {
      if (G(requirejs)) return;
      r = requirejs;
      requirejs = void 0;
    }
    "undefined" !== typeof require &&
      !G(require) &&
      ((r = require), (require = void 0));
    h = requirejs = function (b, c, d, g) {
      var u,
        m = "_";
      !H(b) &&
        "string" !== typeof b &&
        ((u = b), H(c) ? ((b = c), (c = d), (d = g)) : (b = []));
      u && u.context && (m = u.context);
      (g = j(F, m)) || (g = F[m] = h.s.newContext(m));
      u && g.configure(u);
      return g.require(b, c, d);
    };
    h.config = function (b) {
      return h(b);
    };
    h.nextTick =
      "undefined" !== typeof setTimeout
        ? function (b) {
            setTimeout(b, 4);
          }
        : function (b) {
            b();
          };
    require || (require = h);
    h.version = "2.1.11";
    h.jsExtRegExp = /^\/|:|\?|\.js$/;
    h.isBrowser = z;
    x = h.s = { contexts: F, newContext: ha };
    h({});
    v(["toUrl", "undef", "defined", "specified"], function (b) {
      h[b] = function () {
        var c = F._;
        return c.require[b].apply(c, arguments);
      };
    });
    if (
      z &&
      ((y = x.head = document.getElementsByTagName("head")[0]),
      (D = document.getElementsByTagName("base")[0]))
    )
      y = x.head = D.parentNode;
    h.onError = da;
    h.createNode = function (b) {
      var c = b.xhtml
        ? document.createElementNS(
            "http://www.w3.org/1999/xhtml",
            "html:script"
          )
        : document.createElement("script");
      c.type = b.scriptType || "text/javascript";
      c.charset = "utf-8";
      c.async = !0;
      return c;
    };
    h.load = function (b, c, d) {
      var g = (b && b.config) || {};
      if (z)
        return (
          (g = h.createNode(g, c, d)),
          g.setAttribute("data-requirecontext", b.contextName),
          g.setAttribute("data-requiremodule", c),
          g.attachEvent &&
          !(
            g.attachEvent.toString &&
            0 > g.attachEvent.toString().indexOf("[native code")
          ) &&
          !Z
            ? ((O = !0), g.attachEvent("onreadystatechange", b.onScriptLoad))
            : (g.addEventListener("load", b.onScriptLoad, !1),
              g.addEventListener("error", b.onScriptError, !1)),
          (g.src = d),
          (L = g),
          D ? y.insertBefore(g, D) : y.appendChild(g),
          (L = null),
          g
        );
      if (fa)
        try {
          importScripts(d), b.completeLoad(c);
        } catch (j) {
          b.onError(
            C(
              "importscripts",
              "importScripts failed for " + c + " at " + d,
              j,
              [c]
            )
          );
        }
    };
    z &&
      !r.skipDataMain &&
      U(document.getElementsByTagName("script"), function (b) {
        y || (y = b.parentNode);
        if ((K = b.getAttribute("data-main")))
          return (
            (q = K),
            r.baseUrl ||
              ((E = q.split("/")),
              (q = E.pop()),
              (Q = E.length ? E.join("/") + "/" : "./"),
              (r.baseUrl = Q)),
            (q = q.replace(R, "")),
            h.jsExtRegExp.test(q) && (q = K),
            (r.deps = r.deps ? r.deps.concat(q) : [q]),
            !0
          );
      });
    define = function (b, c, d) {
      var g, h;
      "string" !== typeof b && ((d = c), (c = b), (b = null));
      H(c) || ((d = c), (c = null));
      !c &&
        G(d) &&
        ((c = []),
        d.length &&
          (d
            .toString()
            .replace(la, "")
            .replace(ma, function (b, d) {
              c.push(d);
            }),
          (c = (
            1 === d.length ? ["require"] : ["require", "exports", "module"]
          ).concat(c))));
      if (O) {
        if (!(g = L))
          (P && "interactive" === P.readyState) ||
            U(document.getElementsByTagName("script"), function (b) {
              if ("interactive" === b.readyState) return (P = b);
            }),
            (g = P);
        g &&
          (b || (b = g.getAttribute("data-requiremodule")),
          (h = F[g.getAttribute("data-requirecontext")]));
      }
      (h ? h.defQueue : S).push([b, c, d]);
    };
    define.amd = { jQuery: !0 };
    h.exec = function (b) {
      return eval(b);
    };
    h(r);
  }
})(this); /* require end */

// `jQuery begin` and `jQuery end` are required for CSH.js (include if updating this file to newer jquery)
/* jQuery begin */
/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (C, e) {
  "use strict";
  var t = [],
    r = Object.getPrototypeOf,
    s = t.slice,
    g = t.flat
      ? function (e) {
          return t.flat.call(e);
        }
      : function (e) {
          return t.concat.apply([], e);
        },
    u = t.push,
    i = t.indexOf,
    n = {},
    o = n.toString,
    v = n.hasOwnProperty,
    a = v.toString,
    l = a.call(Object),
    y = {},
    m = function (e) {
      return "function" == typeof e && "number" != typeof e.nodeType;
    },
    x = function (e) {
      return null != e && e === e.window;
    },
    E = C.document,
    c = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function b(e, t, n) {
    var r,
      i,
      o = (n = n || E).createElement("script");
    if (((o.text = e), t))
      for (r in c)
        (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function w(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? n[o.call(e)] || "object"
      : typeof e;
  }
  var f = "3.5.1",
    S = function (e, t) {
      return new S.fn.init(e, t);
    };
  function p(e) {
    var t = !!e && "length" in e && e.length,
      n = w(e);
    return (
      !m(e) &&
      !x(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  (S.fn = S.prototype =
    {
      jquery: f,
      constructor: S,
      length: 0,
      toArray: function () {
        return s.call(this);
      },
      get: function (e) {
        return null == e
          ? s.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = S.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return S.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          S.map(this, function (e, t) {
            return n.call(e, t, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(s.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          S.grep(this, function (e, t) {
            return (t + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          S.grep(this, function (e, t) {
            return t % 2;
          })
        );
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: u,
      sort: t.sort,
      splice: t.splice,
    }),
    (S.extend = S.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || m(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (r = e[t]),
                "__proto__" !== t &&
                  a !== r &&
                  (l && r && (S.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = a[t]),
                      (o =
                        i && !Array.isArray(n)
                          ? []
                          : i || S.isPlainObject(n)
                          ? n
                          : {}),
                      (i = !1),
                      (a[t] = S.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    S.extend({
      expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== o.call(e)) &&
          (!(t = r(e)) ||
            ("function" ==
              typeof (n = v.call(t, "constructor") && t.constructor) &&
              a.call(n) === l))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        b(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (p(e)) {
          for (n = e.length; r < n; r++)
            if (!1 === t.call(e[r], r, e[r])) break;
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (p(Object(e))
              ? S.merge(n, "string" == typeof e ? [e] : e)
              : u.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : i.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
          !t(e[i], i) !== a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          a = [];
        if (p(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && a.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
        return g(a);
      },
      guid: 1,
      support: y,
    }),
    "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
    S.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var d = (function (n) {
    var e,
      d,
      b,
      o,
      i,
      h,
      f,
      g,
      w,
      u,
      l,
      T,
      C,
      a,
      E,
      v,
      s,
      c,
      y,
      S = "sizzle" + 1 * new Date(),
      p = n.document,
      k = 0,
      r = 0,
      m = ue(),
      x = ue(),
      A = ue(),
      N = ue(),
      D = function (e, t) {
        return e === t && (l = !0), 0;
      },
      j = {}.hasOwnProperty,
      t = [],
      q = t.pop,
      L = t.push,
      H = t.push,
      O = t.slice,
      P = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      R =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      M = "[\\x20\\t\\r\\n\\f]",
      I =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        M +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      W =
        "\\[" +
        M +
        "*(" +
        I +
        ")(?:" +
        M +
        "*([*^$|!~]?=)" +
        M +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        I +
        "))|)" +
        M +
        "*\\]",
      F =
        ":(" +
        I +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        W +
        ")*)|.*)\\)|)",
      B = new RegExp(M + "+", "g"),
      $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
      _ = new RegExp("^" + M + "*," + M + "*"),
      z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
      U = new RegExp(M + "|>"),
      X = new RegExp(F),
      V = new RegExp("^" + I + "$"),
      G = {
        ID: new RegExp("^#(" + I + ")"),
        CLASS: new RegExp("^\\.(" + I + ")"),
        TAG: new RegExp("^(" + I + "|[*])"),
        ATTR: new RegExp("^" + W),
        PSEUDO: new RegExp("^" + F),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            M +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            M +
            "*(?:([+-]|)" +
            M +
            "*(\\d+)|))" +
            M +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + R + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            M +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            M +
            "*((?:-\\d)?\\d*)" +
            M +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      Y = /HTML$/i,
      Q = /^(?:input|select|textarea|button)$/i,
      J = /^h\d$/i,
      K = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
      ne = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        );
      },
      re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ie = function (e, t) {
        return t
          ? "\0" === e
            ? "\ufffd"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      oe = function () {
        T();
      },
      ae = be(
        function (e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      H.apply((t = O.call(p.childNodes)), p.childNodes),
        t[p.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length
          ? function (e, t) {
              L.apply(e, O.call(t));
            }
          : function (e, t) {
              var n = e.length,
                r = 0;
              while ((e[n++] = t[r++]));
              e.length = n - 1;
            },
      };
    }
    function se(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        p = e ? e.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
      )
        return n;
      if (!r && (T(e), (e = e || C), E)) {
        if (11 !== p && (u = Z.exec(t)))
          if ((i = u[1])) {
            if (9 === p) {
              if (!(a = e.getElementById(i))) return n;
              if (a.id === i) return n.push(a), n;
            } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i)
              return n.push(a), n;
          } else {
            if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
            if (
              (i = u[3]) &&
              d.getElementsByClassName &&
              e.getElementsByClassName
            )
              return H.apply(n, e.getElementsByClassName(i)), n;
          }
        if (
          d.qsa &&
          !N[t + " "] &&
          (!v || !v.test(t)) &&
          (1 !== p || "object" !== e.nodeName.toLowerCase())
        ) {
          if (((c = t), (f = e), 1 === p && (U.test(t) || z.test(t)))) {
            ((f = (ee.test(t) && ye(e.parentNode)) || e) === e && d.scope) ||
              ((s = e.getAttribute("id"))
                ? (s = s.replace(re, ie))
                : e.setAttribute("id", (s = S))),
              (o = (l = h(t)).length);
            while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
            c = l.join(",");
          }
          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            N(t, !0);
          } finally {
            s === S && e.removeAttribute("id");
          }
        }
      }
      return g(t.replace($, "$1"), e, n, r);
    }
    function ue() {
      var r = [];
      return function e(t, n) {
        return (
          r.push(t + " ") > b.cacheLength && delete e[r.shift()],
          (e[t + " "] = n)
        );
      };
    }
    function le(e) {
      return (e[S] = !0), e;
    }
    function ce(e) {
      var t = C.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function fe(e, t) {
      var n = e.split("|"),
        r = n.length;
      while (r--) b.attrHandle[n[r]] = t;
    }
    function pe(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while ((n = n.nextSibling)) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }
    function ge(t) {
      return function (e) {
        return "form" in e
          ? e.parentNode && !1 === e.disabled
            ? "label" in e
              ? "label" in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && ae(e) === t)
            : e.disabled === t
          : "label" in e && e.disabled === t;
      };
    }
    function ve(a) {
      return le(function (o) {
        return (
          (o = +o),
          le(function (e, t) {
            var n,
              r = a([], e.length, o),
              i = r.length;
            while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    for (e in ((d = se.support = {}),
    (i = se.isXML =
      function (e) {
        var t = e.namespaceURI,
          n = (e.ownerDocument || e).documentElement;
        return !Y.test(t || (n && n.nodeName) || "HTML");
      }),
    (T = se.setDocument =
      function (e) {
        var t,
          n,
          r = e ? e.ownerDocument || e : p;
        return (
          r != C &&
            9 === r.nodeType &&
            r.documentElement &&
            ((a = (C = r).documentElement),
            (E = !i(C)),
            p != C &&
              (n = C.defaultView) &&
              n.top !== n &&
              (n.addEventListener
                ? n.addEventListener("unload", oe, !1)
                : n.attachEvent && n.attachEvent("onunload", oe)),
            (d.scope = ce(function (e) {
              return (
                a.appendChild(e).appendChild(C.createElement("div")),
                "undefined" != typeof e.querySelectorAll &&
                  !e.querySelectorAll(":scope fieldset div").length
              );
            })),
            (d.attributes = ce(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (d.getElementsByTagName = ce(function (e) {
              return (
                e.appendChild(C.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (d.getElementsByClassName = K.test(C.getElementsByClassName)),
            (d.getById = ce(function (e) {
              return (
                (a.appendChild(e).id = S),
                !C.getElementsByName || !C.getElementsByName(S).length
              );
            })),
            d.getById
              ? ((b.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((b.filter.ID = function (e) {
                  var n = e.replace(te, ne);
                  return function (e) {
                    var t =
                      "undefined" != typeof e.getAttributeNode &&
                      e.getAttributeNode("id");
                    return t && t.value === n;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                    var n,
                      r,
                      i,
                      o = t.getElementById(e);
                    if (o) {
                      if ((n = o.getAttributeNode("id")) && n.value === e)
                        return [o];
                      (i = t.getElementsByName(e)), (r = 0);
                      while ((o = i[r++]))
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                    }
                    return [];
                  }
                })),
            (b.find.TAG = d.getElementsByTagName
              ? function (e, t) {
                  return "undefined" != typeof t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : d.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                  if ("*" === e) {
                    while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                    return r;
                  }
                  return o;
                }),
            (b.find.CLASS =
              d.getElementsByClassName &&
              function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && E)
                  return t.getElementsByClassName(e);
              }),
            (s = []),
            (v = []),
            (d.qsa = K.test(C.querySelectorAll)) &&
              (ce(function (e) {
                var t;
                (a.appendChild(e).innerHTML =
                  "<a id='" +
                  S +
                  "'></a><select id='" +
                  S +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    v.push("[*^$]=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    v.push("\\[" + M + "*(?:value|" + R + ")"),
                  e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="),
                  (t = C.createElement("input")).setAttribute("name", ""),
                  e.appendChild(t),
                  e.querySelectorAll("[name='']").length ||
                    v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll(":checked").length || v.push(":checked"),
                  e.querySelectorAll("a#" + S + "+*").length ||
                    v.push(".#.+[+~]"),
                  e.querySelectorAll("\\\f"),
                  v.push("[\\r\\n\\f]");
              }),
              ce(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    v.push("name" + M + "*[*^$|!~]?="),
                  2 !== e.querySelectorAll(":enabled").length &&
                    v.push(":enabled", ":disabled"),
                  (a.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length &&
                    v.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  v.push(",.*:");
              })),
            (d.matchesSelector = K.test(
              (c =
                a.matches ||
                a.webkitMatchesSelector ||
                a.mozMatchesSelector ||
                a.oMatchesSelector ||
                a.msMatchesSelector)
            )) &&
              ce(function (e) {
                (d.disconnectedMatch = c.call(e, "*")),
                  c.call(e, "[s!='']:x"),
                  s.push("!=", F);
              }),
            (v = v.length && new RegExp(v.join("|"))),
            (s = s.length && new RegExp(s.join("|"))),
            (t = K.test(a.compareDocumentPosition)),
            (y =
              t || K.test(a.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      r = t && t.parentNode;
                    return (
                      e === r ||
                      !(
                        !r ||
                        1 !== r.nodeType ||
                        !(n.contains
                          ? n.contains(r)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(r))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) while ((t = t.parentNode)) if (t === e) return !0;
                    return !1;
                  }),
            (D = t
              ? function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    n ||
                    (1 &
                      (n =
                        (e.ownerDocument || e) == (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!d.sortDetached && t.compareDocumentPosition(e) === n)
                      ? e == C || (e.ownerDocument == p && y(p, e))
                        ? -1
                        : t == C || (t.ownerDocument == p && y(p, t))
                        ? 1
                        : u
                        ? P(u, e) - P(u, t)
                        : 0
                      : 4 & n
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                  if (!i || !o)
                    return e == C
                      ? -1
                      : t == C
                      ? 1
                      : i
                      ? -1
                      : o
                      ? 1
                      : u
                      ? P(u, e) - P(u, t)
                      : 0;
                  if (i === o) return pe(e, t);
                  n = e;
                  while ((n = n.parentNode)) a.unshift(n);
                  n = t;
                  while ((n = n.parentNode)) s.unshift(n);
                  while (a[r] === s[r]) r++;
                  return r
                    ? pe(a[r], s[r])
                    : a[r] == p
                    ? -1
                    : s[r] == p
                    ? 1
                    : 0;
                })),
          C
        );
      }),
    (se.matches = function (e, t) {
      return se(e, null, null, t);
    }),
    (se.matchesSelector = function (e, t) {
      if (
        (T(e),
        d.matchesSelector &&
          E &&
          !N[t + " "] &&
          (!s || !s.test(t)) &&
          (!v || !v.test(t)))
      )
        try {
          var n = c.call(e, t);
          if (
            n ||
            d.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {
          N(t, !0);
        }
      return 0 < se(t, C, null, [e]).length;
    }),
    (se.contains = function (e, t) {
      return (e.ownerDocument || e) != C && T(e), y(e, t);
    }),
    (se.attr = function (e, t) {
      (e.ownerDocument || e) != C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
        r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r
        ? r
        : d.attributes || !E
        ? e.getAttribute(t)
        : (r = e.getAttributeNode(t)) && r.specified
        ? r.value
        : null;
    }),
    (se.escape = function (e) {
      return (e + "").replace(re, ie);
    }),
    (se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (se.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (
        ((l = !d.detectDuplicates),
        (u = !d.sortStable && e.slice(0)),
        e.sort(D),
        l)
      ) {
        while ((t = e[i++])) t === e[i] && (r = n.push(i));
        while (r--) e.splice(n[r], 1);
      }
      return (u = null), e;
    }),
    (o = se.getText =
      function (e) {
        var t,
          n = "",
          r = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
          } else if (3 === i || 4 === i) return e.nodeValue;
        } else while ((t = e[r++])) n += o(t);
        return n;
      }),
    ((b = se.selectors =
      {
        cacheLength: 50,
        createPseudo: le,
        match: G,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(te, ne)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || se.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && se.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return G.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    X.test(n) &&
                    (t = h(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ne).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = m[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                m(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      ("undefined" != typeof e.getAttribute &&
                        e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = se.attr(e, n);
              return null == t
                ? "!=" === r
                : !r ||
                    ((t += ""),
                    "=" === r
                      ? t === i
                      : "!=" === r
                      ? t !== i
                      : "^=" === r
                      ? i && 0 === t.indexOf(i)
                      : "*=" === r
                      ? i && -1 < t.indexOf(i)
                      : "$=" === r
                      ? i && t.slice(-i.length) === i
                      : "~=" === r
                      ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i)
                      : "|=" === r &&
                        (t === i || t.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function (h, e, t, g, v) {
            var y = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              x = "of-type" === e;
            return 1 === g && 0 === v
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = y !== m ? "nextSibling" : "previousSibling",
                    c = e.parentNode,
                    f = x && e.nodeName.toLowerCase(),
                    p = !n && !x,
                    d = !1;
                  if (c) {
                    if (y) {
                      while (l) {
                        a = e;
                        while ((a = a[l]))
                          if (
                            x
                              ? a.nodeName.toLowerCase() === f
                              : 1 === a.nodeType
                          )
                            return !1;
                        u = l = "only" === h && !u && "nextSibling";
                      }
                      return !0;
                    }
                    if (((u = [m ? c.firstChild : c.lastChild]), m && p)) {
                      (d =
                        (s =
                          (r =
                            (i =
                              (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === k &&
                          r[1]) && r[2]),
                        (a = s && c.childNodes[s]);
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (1 === a.nodeType && ++d && a === e) {
                          i[h] = [k, s, d];
                          break;
                        }
                    } else if (
                      (p &&
                        (d = s =
                          (r =
                            (i =
                              (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]),
                      !1 === d)
                    )
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (
                          (x
                            ? a.nodeName.toLowerCase() === f
                            : 1 === a.nodeType) &&
                          ++d &&
                          (p &&
                            ((i =
                              (o = a[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] = [k, d]),
                          a === e)
                        )
                          break;
                    return (d -= v) === g || (d % g == 0 && 0 <= d / g);
                  }
                };
          },
          PSEUDO: function (e, o) {
            var t,
              a =
                b.pseudos[e] ||
                b.setFilters[e.toLowerCase()] ||
                se.error("unsupported pseudo: " + e);
            return a[S]
              ? a(o)
              : 1 < a.length
              ? ((t = [e, e, "", o]),
                b.setFilters.hasOwnProperty(e.toLowerCase())
                  ? le(function (e, t) {
                      var n,
                        r = a(e, o),
                        i = r.length;
                      while (i--) e[(n = P(e, r[i]))] = !(t[n] = r[i]);
                    })
                  : function (e) {
                      return a(e, 0, t);
                    })
              : a;
          },
        },
        pseudos: {
          not: le(function (e) {
            var r = [],
              i = [],
              s = f(e.replace($, "$1"));
            return s[S]
              ? le(function (e, t, n, r) {
                  var i,
                    o = s(e, null, r, []),
                    a = e.length;
                  while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                })
              : function (e, t, n) {
                  return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                };
          }),
          has: le(function (t) {
            return function (e) {
              return 0 < se(t, e).length;
            };
          }),
          contains: le(function (t) {
            return (
              (t = t.replace(te, ne)),
              function (e) {
                return -1 < (e.textContent || o(e)).indexOf(t);
              }
            );
          }),
          lang: le(function (n) {
            return (
              V.test(n || "") || se.error("unsupported lang: " + n),
              (n = n.replace(te, ne).toLowerCase()),
              function (e) {
                var t;
                do {
                  if (
                    (t = E
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = n.location && n.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === a;
          },
          focus: function (e) {
            return (
              e === C.activeElement &&
              (!C.hasFocus || C.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: ge(!1),
          disabled: ge(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !b.pseudos.empty(e);
          },
          header: function (e) {
            return J.test(e.nodeName);
          },
          input: function (e) {
            return Q.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: ve(function () {
            return [0];
          }),
          last: ve(function (e, t) {
            return [t - 1];
          }),
          eq: ve(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: ve(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: ve(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
            return e;
          }),
          gt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = b.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      b.pseudos[e] = de(e);
    for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);
    function me() {}
    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function be(s, e, t) {
      var u = e.dir,
        l = e.next,
        c = l || u,
        f = t && "parentNode" === c,
        p = r++;
      return e.first
        ? function (e, t, n) {
            while ((e = e[u])) if (1 === e.nodeType || f) return s(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var r,
              i,
              o,
              a = [k, p];
            if (n) {
              while ((e = e[u]))
                if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
            } else
              while ((e = e[u]))
                if (1 === e.nodeType || f)
                  if (
                    ((i =
                      (o = e[S] || (e[S] = {}))[e.uniqueID] ||
                      (o[e.uniqueID] = {})),
                    l && l === e.nodeName.toLowerCase())
                  )
                    e = e[u] || e;
                  else {
                    if ((r = i[c]) && r[0] === k && r[1] === p)
                      return (a[2] = r[2]);
                    if (((i[c] = a)[2] = s(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function we(i) {
      return 1 < i.length
        ? function (e, t, n) {
            var r = i.length;
            while (r--) if (!i[r](e, t, n)) return !1;
            return !0;
          }
        : i[0];
    }
    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function Ce(d, h, g, v, y, e) {
      return (
        v && !v[S] && (v = Ce(v)),
        y && !y[S] && (y = Ce(y, e)),
        le(function (e, t, n, r) {
          var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c =
              e ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                return n;
              })(h || "*", n.nodeType ? [n] : n, []),
            f = !d || (!e && h) ? c : Te(c, s, d, n, r),
            p = g ? (y || (e ? d : l || v) ? [] : t) : f;
          if ((g && g(f, p, n, r), v)) {
            (i = Te(p, u)), v(i, [], n, r), (o = i.length);
            while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
          }
          if (e) {
            if (y || d) {
              if (y) {
                (i = []), (o = p.length);
                while (o--) (a = p[o]) && i.push((f[o] = a));
                y(null, (p = []), i, r);
              }
              o = p.length;
              while (o--)
                (a = p[o]) &&
                  -1 < (i = y ? P(e, a) : s[o]) &&
                  (e[i] = !(t[i] = a));
            }
          } else (p = Te(p === t ? p.splice(l, p.length) : p)), y ? y(null, t, p, r) : H.apply(t, p);
        })
      );
    }
    function Ee(e) {
      for (
        var i,
          t,
          n,
          r = e.length,
          o = b.relative[e[0].type],
          a = o || b.relative[" "],
          s = o ? 1 : 0,
          u = be(
            function (e) {
              return e === i;
            },
            a,
            !0
          ),
          l = be(
            function (e) {
              return -1 < P(i, e);
            },
            a,
            !0
          ),
          c = [
            function (e, t, n) {
              var r =
                (!o && (n || t !== w)) ||
                ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
              return (i = null), r;
            },
          ];
        s < r;
        s++
      )
        if ((t = b.relative[e[s].type])) c = [be(we(c), t)];
        else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
            return Ce(
              1 < s && we(c),
              1 < s &&
                xe(
                  e
                    .slice(0, s - 1)
                    .concat({ value: " " === e[s - 2].type ? "*" : "" })
                ).replace($, "$1"),
              t,
              s < n && Ee(e.slice(s, n)),
              n < r && Ee((e = e.slice(n))),
              n < r && xe(e)
            );
          }
          c.push(t);
        }
      return we(c);
    }
    return (
      (me.prototype = b.filters = b.pseudos),
      (b.setFilters = new me()),
      (h = se.tokenize =
        function (e, t) {
          var n,
            r,
            i,
            o,
            a,
            s,
            u,
            l = x[e + " "];
          if (l) return t ? 0 : l.slice(0);
          (a = e), (s = []), (u = b.preFilter);
          while (a) {
            for (o in ((n && !(r = _.exec(a))) ||
              (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
            (n = !1),
            (r = z.exec(a)) &&
              ((n = r.shift()),
              i.push({ value: n, type: r[0].replace($, " ") }),
              (a = a.slice(n.length))),
            b.filter))
              !(r = G[o].exec(a)) ||
                (u[o] && !(r = u[o](r))) ||
                ((n = r.shift()),
                i.push({ value: n, type: o, matches: r }),
                (a = a.slice(n.length)));
            if (!n) break;
          }
          return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
        }),
      (f = se.compile =
        function (e, t) {
          var n,
            v,
            y,
            m,
            x,
            r,
            i = [],
            o = [],
            a = A[e + " "];
          if (!a) {
            t || (t = h(e)), (n = t.length);
            while (n--) (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
            (a = A(
              e,
              ((v = o),
              (m = 0 < (y = i).length),
              (x = 0 < v.length),
              (r = function (e, t, n, r, i) {
                var o,
                  a,
                  s,
                  u = 0,
                  l = "0",
                  c = e && [],
                  f = [],
                  p = w,
                  d = e || (x && b.find.TAG("*", i)),
                  h = (k += null == p ? 1 : Math.random() || 0.1),
                  g = d.length;
                for (
                  i && (w = t == C || t || i);
                  l !== g && null != (o = d[l]);
                  l++
                ) {
                  if (x && o) {
                    (a = 0), t || o.ownerDocument == C || (T(o), (n = !E));
                    while ((s = v[a++]))
                      if (s(o, t || C, n)) {
                        r.push(o);
                        break;
                      }
                    i && (k = h);
                  }
                  m && ((o = !s && o) && u--, e && c.push(o));
                }
                if (((u += l), m && l !== u)) {
                  a = 0;
                  while ((s = y[a++])) s(c, f, t, n);
                  if (e) {
                    if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));
                    f = Te(f);
                  }
                  H.apply(r, f),
                    i &&
                      !e &&
                      0 < f.length &&
                      1 < u + y.length &&
                      se.uniqueSort(r);
                }
                return i && ((k = h), (w = p)), c;
              }),
              m ? le(r) : r)
            )).selector = e;
          }
          return a;
        }),
      (g = se.select =
        function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = "function" == typeof e && e,
            c = !r && h((e = l.selector || e));
          if (((n = n || []), 1 === c.length)) {
            if (
              2 < (o = c[0] = c[0].slice(0)).length &&
              "ID" === (a = o[0]).type &&
              9 === t.nodeType &&
              E &&
              b.relative[o[1].type]
            ) {
              if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                return n;
              l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
            }
            i = G.needsContext.test(e) ? 0 : o.length;
            while (i--) {
              if (((a = o[i]), b.relative[(s = a.type)])) break;
              if (
                (u = b.find[s]) &&
                (r = u(
                  a.matches[0].replace(te, ne),
                  (ee.test(o[0].type) && ye(t.parentNode)) || t
                ))
              ) {
                if ((o.splice(i, 1), !(e = r.length && xe(o))))
                  return H.apply(n, r), n;
                break;
              }
            }
          }
          return (
            (l || f(e, c))(
              r,
              t,
              !E,
              n,
              !t || (ee.test(e) && ye(t.parentNode)) || t
            ),
            n
          );
        }),
      (d.sortStable = S.split("").sort(D).join("") === S),
      (d.detectDuplicates = !!l),
      T(),
      (d.sortDetached = ce(function (e) {
        return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
      })),
      ce(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        fe("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (d.attributes &&
        ce(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        fe("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ce(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        fe(R, function (e, t, n) {
          var r;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
        }),
      se
    );
  })(C);
  (S.find = d),
    (S.expr = d.selectors),
    (S.expr[":"] = S.expr.pseudos),
    (S.uniqueSort = S.unique = d.uniqueSort),
    (S.text = d.getText),
    (S.isXMLDoc = d.isXML),
    (S.contains = d.contains),
    (S.escapeSelector = d.escape);
  var h = function (e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && S(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    T = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    k = S.expr.match.needsContext;
  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function D(e, n, r) {
    return m(n)
      ? S.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        })
      : n.nodeType
      ? S.grep(e, function (e) {
          return (e === n) !== r;
        })
      : "string" != typeof n
      ? S.grep(e, function (e) {
          return -1 < i.call(n, e) !== r;
        })
      : S.filter(n, e, r);
  }
  (S.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? S.find.matchesSelector(r, e)
          ? [r]
          : []
        : S.find.matches(
            e,
            S.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    S.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            S(e).filter(function () {
              for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
        return 1 < r ? S.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(D(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(D(this, e || [], !0));
      },
      is: function (e) {
        return !!D(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1)
          .length;
      },
    });
  var j,
    q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((S.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || j), "string" == typeof e)) {
      if (
        !(r =
          "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : q.exec(e)) ||
        (!r[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (
          ((t = t instanceof S ? t[0] : t),
          S.merge(
            this,
            S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)
          ),
          N.test(r[1]) && S.isPlainObject(t))
        )
          for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (
        (i = E.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : m(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(S)
      : S.makeArray(e, this);
  }).prototype = S.fn),
    (j = S(E));
  var L = /^(?:parents|prev(?:Until|All))/,
    H = { children: !0, contents: !0, next: !0, prev: !0 };
  function O(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  S.fn.extend({
    has: function (e) {
      var t = S(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && S(e);
      if (!k.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && S.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? i.call(S(e), this[0])
          : i.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    S.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return h(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return h(e, "parentNode", n);
        },
        next: function (e) {
          return O(e, "nextSibling");
        },
        prev: function (e) {
          return O(e, "previousSibling");
        },
        nextAll: function (e) {
          return h(e, "nextSibling");
        },
        prevAll: function (e) {
          return h(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return h(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return h(e, "previousSibling", n);
        },
        siblings: function (e) {
          return T((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return T(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && r(e.contentDocument)
            ? e.contentDocument
            : (A(e, "template") && (e = e.content || e),
              S.merge([], e.childNodes));
        },
      },
      function (r, i) {
        S.fn[r] = function (e, t) {
          var n = S.map(this, i, e);
          return (
            "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = S.filter(t, n)),
            1 < this.length &&
              (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var P = /[^\x20\t\r\n\f]+/g;
  function R(e) {
    return e;
  }
  function M(e) {
    throw e;
  }
  function I(e, t, n, r) {
    var i;
    try {
      e && m((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && m((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (S.Callbacks = function (r) {
    var e, n;
    r =
      "string" == typeof r
        ? ((e = r),
          (n = {}),
          S.each(e.match(P) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : S.extend({}, r);
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length)
            !1 === s[l].apply(t[0], t[1]) &&
              r.stopOnFalse &&
              ((l = s.length), (t = !1));
        }
        r.memory || (t = !1), (i = !1), a && (s = t ? [] : "");
      },
      f = {
        add: function () {
          return (
            s &&
              (t && !i && ((l = s.length - 1), u.push(t)),
              (function n(e) {
                S.each(e, function (e, t) {
                  m(t)
                    ? (r.unique && f.has(t)) || s.push(t)
                    : t && t.length && "string" !== w(t) && n(t);
                });
              })(arguments),
              t && !i && c()),
            this
          );
        },
        remove: function () {
          return (
            S.each(arguments, function (e, t) {
              var n;
              while (-1 < (n = S.inArray(t, s, n)))
                s.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < S.inArray(e, s) : 0 < s.length;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (a = u = []), (s = t = ""), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (a = u = []), t || i || (s = t = ""), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return (
            a ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              u.push(t),
              i || c()),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return f;
  }),
    S.extend({
      Deferred: function (e) {
        var o = [
            [
              "notify",
              "progress",
              S.Callbacks("memory"),
              S.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              S.Callbacks("once memory"),
              S.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              S.Callbacks("once memory"),
              S.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          i = "pending",
          a = {
            state: function () {
              return i;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return a.then(null, e);
            },
            pipe: function () {
              var i = arguments;
              return S.Deferred(function (r) {
                S.each(o, function (e, t) {
                  var n = m(i[t[4]]) && i[t[4]];
                  s[t[1]](function () {
                    var e = n && n.apply(this, arguments);
                    e && m(e.promise)
                      ? e
                          .promise()
                          .progress(r.notify)
                          .done(r.resolve)
                          .fail(r.reject)
                      : r[t[0] + "With"](this, n ? [e] : arguments);
                  });
                }),
                  (i = null);
              }).promise();
            },
            then: function (t, n, r) {
              var u = 0;
              function l(i, o, a, s) {
                return function () {
                  var n = this,
                    r = arguments,
                    e = function () {
                      var e, t;
                      if (!(i < u)) {
                        if ((e = a.apply(n, r)) === o.promise())
                          throw new TypeError("Thenable self-resolution");
                        (t =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          m(t)
                            ? s
                              ? t.call(e, l(u, o, R, s), l(u, o, M, s))
                              : (u++,
                                t.call(
                                  e,
                                  l(u, o, R, s),
                                  l(u, o, M, s),
                                  l(u, o, R, o.notifyWith)
                                ))
                            : (a !== R && ((n = void 0), (r = [e])),
                              (s || o.resolveWith)(n, r));
                      }
                    },
                    t = s
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            S.Deferred.exceptionHook &&
                              S.Deferred.exceptionHook(e, t.stackTrace),
                              u <= i + 1 &&
                                (a !== M && ((n = void 0), (r = [e])),
                                o.rejectWith(n, r));
                          }
                        };
                  i
                    ? t()
                    : (S.Deferred.getStackHook &&
                        (t.stackTrace = S.Deferred.getStackHook()),
                      C.setTimeout(t));
                };
              }
              return S.Deferred(function (e) {
                o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)),
                  o[1][3].add(l(0, e, m(t) ? t : R)),
                  o[2][3].add(l(0, e, m(n) ? n : M));
              }).promise();
            },
            promise: function (e) {
              return null != e ? S.extend(e, a) : a;
            },
          },
          s = {};
        return (
          S.each(o, function (e, t) {
            var n = t[2],
              r = t[5];
            (a[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r;
                  },
                  o[3 - e][2].disable,
                  o[3 - e][3].disable,
                  o[0][2].lock,
                  o[0][3].lock
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                );
              }),
              (s[t[0] + "With"] = n.fireWith);
          }),
          a.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function (e) {
        var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = S.Deferred(),
          a = function (t) {
            return function (e) {
              (r[t] = this),
                (i[t] = 1 < arguments.length ? s.call(arguments) : e),
                --n || o.resolveWith(r, i);
            };
          };
        if (
          n <= 1 &&
          (I(e, o.done(a(t)).resolve, o.reject, !n),
          "pending" === o.state() || m(i[t] && i[t].then))
        )
          return o.then();
        while (t--) I(i[t], a(t), o.reject);
        return o.promise();
      },
    });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (S.Deferred.exceptionHook = function (e, t) {
    C.console &&
      C.console.warn &&
      e &&
      W.test(e.name) &&
      C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }),
    (S.readyException = function (e) {
      C.setTimeout(function () {
        throw e;
      });
    });
  var F = S.Deferred();
  function B() {
    E.removeEventListener("DOMContentLoaded", B),
      C.removeEventListener("load", B),
      S.ready();
  }
  (S.fn.ready = function (e) {
    return (
      F.then(e)["catch"](function (e) {
        S.readyException(e);
      }),
      this
    );
  }),
    S.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --S.readyWait : S.isReady) ||
          ((S.isReady = !0) !== e && 0 < --S.readyWait) ||
          F.resolveWith(E, [S]);
      },
    }),
    (S.ready.then = F.then),
    "complete" === E.readyState ||
    ("loading" !== E.readyState && !E.documentElement.doScroll)
      ? C.setTimeout(S.ready)
      : (E.addEventListener("DOMContentLoaded", B),
        C.addEventListener("load", B));
  var $ = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === w(n))
        for (s in ((i = !0), n)) $(e, t, s, n[s], !0, o, a);
      else if (
        void 0 !== r &&
        ((i = !0),
        m(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(S(e), n);
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    _ = /^-ms-/,
    z = /-([a-z])/g;
  function U(e, t) {
    return t.toUpperCase();
  }
  function X(e) {
    return e.replace(_, "ms-").replace(z, U);
  }
  var V = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function G() {
    this.expando = S.expando + G.uid++;
  }
  (G.uid = 1),
    (G.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            V(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[X(t)] = n;
        else for (r in t) i[X(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][X(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(X)
              : (t = X(t)) in r
              ? [t]
              : t.match(P) || []).length;
            while (n--) delete r[t[n]];
          }
          (void 0 === t || S.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !S.isEmptyObject(t);
      },
    });
  var Y = new G(),
    Q = new G(),
    J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    K = /[A-Z]/g;
  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(K, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            "true" === (i = n) ||
            ("false" !== i &&
              ("null" === i
                ? null
                : i === +i + ""
                ? +i
                : J.test(i)
                ? JSON.parse(i)
                : i));
        } catch (e) {}
        Q.set(e, t, n);
      } else n = void 0;
    return n;
  }
  S.extend({
    hasData: function (e) {
      return Q.hasData(e) || Y.hasData(e);
    },
    data: function (e, t, n) {
      return Q.access(e, t, n);
    },
    removeData: function (e, t) {
      Q.remove(e, t);
    },
    _data: function (e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function (e, t) {
      Y.remove(e, t);
    },
  }),
    S.fn.extend({
      data: function (n, e) {
        var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === n) {
          if (
            this.length &&
            ((i = Q.get(o)), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))
          ) {
            t = a.length;
            while (t--)
              a[t] &&
                0 === (r = a[t].name).indexOf("data-") &&
                ((r = X(r.slice(5))), Z(o, r, i[r]));
            Y.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof n
          ? this.each(function () {
              Q.set(this, n);
            })
          : $(
              this,
              function (e) {
                var t;
                if (o && void 0 === e)
                  return void 0 !== (t = Q.get(o, n))
                    ? t
                    : void 0 !== (t = Z(o, n))
                    ? t
                    : void 0;
                this.each(function () {
                  Q.set(this, n, e);
                });
              },
              null,
              e,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          Q.remove(this, e);
        });
      },
    }),
    S.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = Y.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = Y.access(e, t, S.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = S.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = S._queueHooks(e, t);
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(
              e,
              function () {
                S.dequeue(e, t);
              },
              o
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          Y.get(e, n) ||
          Y.access(e, n, {
            empty: S.Callbacks("once memory").add(function () {
              Y.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    S.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? S.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t),
                  "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          S.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = S.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
        while (a--)
          (n = Y.get(o[a], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
    ne = ["Top", "Right", "Bottom", "Left"],
    re = E.documentElement,
    ie = function (e) {
      return S.contains(e.ownerDocument, e);
    },
    oe = { composed: !0 };
  re.getRootNode &&
    (ie = function (e) {
      return (
        S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
      );
    });
  var ae = function (e, t) {
    return (
      "none" === (e = t || e).style.display ||
      ("" === e.style.display && ie(e) && "none" === S.css(e, "display"))
    );
  };
  function se(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return S.css(e, t, "");
          },
      u = s(),
      l = (n && n[3]) || (S.cssNumber[t] ? "" : "px"),
      c =
        e.nodeType &&
        (S.cssNumber[t] || ("px" !== l && +u)) &&
        te.exec(S.css(e, t));
    if (c && c[3] !== l) {
      (u /= 2), (l = l || c[3]), (c = +u || 1);
      while (a--)
        S.style(e, t, c + l),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (c /= o);
      (c *= 2), S.style(e, t, c + l), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var ue = {};
  function le(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n &&
              ((l[c] = Y.get(r, "display") || null),
              l[c] || (r.style.display = "")),
            "" === r.style.display &&
              ae(r) &&
              (l[c] =
                ((u = a = o = void 0),
                (a = (i = r).ownerDocument),
                (s = i.nodeName),
                (u = ue[s]) ||
                  ((o = a.body.appendChild(a.createElement(s))),
                  (u = S.css(o, "display")),
                  o.parentNode.removeChild(o),
                  "none" === u && (u = "block"),
                  (ue[s] = u)))))
          : "none" !== n && ((l[c] = "none"), Y.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  S.fn.extend({
    show: function () {
      return le(this, !0);
    },
    hide: function () {
      return le(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ae(this) ? S(this).show() : S(this).hide();
          });
    },
  });
  var ce,
    fe,
    pe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i;
  (ce = E.createDocumentFragment().appendChild(E.createElement("div"))),
    (fe = E.createElement("input")).setAttribute("type", "radio"),
    fe.setAttribute("checked", "checked"),
    fe.setAttribute("name", "t"),
    ce.appendChild(fe),
    (y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ce.innerHTML = "<textarea>x</textarea>"),
    (y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue),
    (ce.innerHTML = "<option></option>"),
    (y.option = !!ce.lastChild);
  var ge = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  function ve(e, t) {
    var n;
    return (
      (n =
        "undefined" != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : "undefined" != typeof e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && A(e, t)) ? S.merge([e], n) : n
    );
  }
  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
  }
  (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
    (ge.th = ge.td),
    y.option ||
      (ge.optgroup = ge.option =
        [1, "<select multiple='multiple'>", "</select>"]);
  var me = /<|&#?\w+;/;
  function xe(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
        else if (me.test(o)) {
          (a = a || f.appendChild(t.createElement("div"))),
            (s = (de.exec(o) || ["", ""])[1].toLowerCase()),
            (u = ge[s] || ge._default),
            (a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2]),
            (c = u[0]);
          while (c--) a = a.lastChild;
          S.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
        } else p.push(t.createTextNode(o));
    (f.textContent = ""), (d = 0);
    while ((o = p[d++]))
      if (r && -1 < S.inArray(o, r)) i && i.push(o);
      else if (
        ((l = ie(o)), (a = ve(f.appendChild(o), "script")), l && ye(a), n)
      ) {
        c = 0;
        while ((o = a[c++])) he.test(o.type || "") && n.push(o);
      }
    return f;
  }
  var be = /^key/,
    we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Te = /^([^.]*)(?:\.(.+)|)/;
  function Ce() {
    return !0;
  }
  function Ee() {
    return !1;
  }
  function Se(e, t) {
    return (
      (e ===
        (function () {
          try {
            return E.activeElement;
          } catch (e) {}
        })()) ==
      ("focus" === t)
    );
  }
  function ke(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
        ke(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = Ee;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return S().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = S.guid++))),
      e.each(function () {
        S.event.add(this, t, i, r, n);
      })
    );
  }
  function Ae(e, i, o) {
    o
      ? (Y.set(e, i, !1),
        S.event.add(e, i, {
          namespace: !1,
          handler: function (e) {
            var t,
              n,
              r = Y.get(this, i);
            if (1 & e.isTrigger && this[i]) {
              if (r.length)
                (S.event.special[i] || {}).delegateType && e.stopPropagation();
              else if (
                ((r = s.call(arguments)),
                Y.set(this, i, r),
                (t = o(this, i)),
                this[i](),
                r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : (n = {}),
                r !== n)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), n.value
                );
            } else
              r.length &&
                (Y.set(this, i, {
                  value: S.event.trigger(
                    S.extend(r[0], S.Event.prototype),
                    r.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === Y.get(e, i) && S.event.add(e, i, Ce);
  }
  (S.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Y.get(t);
      if (V(t)) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && S.find.matchesSelector(re, i),
          n.guid || (n.guid = S.guid++),
          (u = v.events) || (u = v.events = Object.create(null)),
          (a = v.handle) ||
            (a = v.handle =
              function (e) {
                return "undefined" != typeof S && S.event.triggered !== e.type
                  ? S.event.dispatch.apply(t, arguments)
                  : void 0;
              }),
          (l = (e = (e || "").match(P) || [""]).length);
        while (l--)
          (d = g = (s = Te.exec(e[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d &&
              ((f = S.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = S.event.special[d] || {}),
              (c = S.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && S.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                  (t.addEventListener && t.addEventListener(d, a))),
              f.add &&
                (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (S.event.global[d] = !0));
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Y.hasData(e) && Y.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || "").match(P) || [""]).length;
        while (l--)
          if (
            ((d = g = (s = Te.exec(t[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d)
          ) {
            (f = S.event.special[d] || {}),
              (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
              (s =
                s[2] &&
                new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (a = o = p.length);
            while (o--)
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                S.removeEvent(e, d, v.handle),
              delete u[d]);
          } else for (d in u) S.event.remove(e, d + t[l], n, r, !0);
        S.isEmptyObject(u) && Y.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = S.event.fix(e),
        l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
        c = S.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (
        ((u.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, u))
      ) {
        (a = S.event.handlers.call(this, u, l)), (t = 0);
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          (u.currentTarget = i.elem), (n = 0);
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
            (u.rnamespace &&
              !1 !== o.namespace &&
              !u.rnamespace.test(o.namespace)) ||
              ((u.handleObj = o),
              (u.data = o.data),
              void 0 !==
                (r = (
                  (S.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, s)) &&
                !1 === (u.result = r) &&
                (u.preventDefault(), u.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + " ")] &&
                (a[i] = r.needsContext
                  ? -1 < S(i, this).index(l)
                  : S.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (
        (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(S.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[S.expando] ? e : new S.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click", Ce),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (pe.test(t.type) &&
              t.click &&
              A(t, "input") &&
              Y.get(t, "click")) ||
            A(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (S.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (S.Event = function (e, t) {
      if (!(this instanceof S.Event)) return new S.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? Ce
              : Ee),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && S.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[S.expando] = !0);
    }),
    (S.Event.prototype = {
      constructor: S.Event,
      isDefaultPrevented: Ee,
      isPropagationStopped: Ee,
      isImmediatePropagationStopped: Ee,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = Ce),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = Ce),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = Ce),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    S.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
          var t = e.button;
          return null == e.which && be.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && we.test(e.type)
            ? 1 & t
              ? 1
              : 2 & t
              ? 3
              : 4 & t
              ? 2
              : 0
            : e.which;
        },
      },
      S.event.addProp
    ),
    S.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      S.event.special[e] = {
        setup: function () {
          return Ae(this, e, Se), !1;
        },
        trigger: function () {
          return Ae(this, e), !0;
        },
        delegateType: t,
      };
    }),
    S.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, i) {
        S.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj;
            return (
              (n && (n === this || S.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = i)),
              t
            );
          },
        };
      }
    ),
    S.fn.extend({
      on: function (e, t, n, r) {
        return ke(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return ke(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            S(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = Ee),
          this.each(function () {
            S.event.remove(this, e, n, t);
          })
        );
      },
    });
  var Ne = /<script|<style|<link/i,
    De = /checked\s*(?:[^=]|=\s*.checked.)/i,
    je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function qe(e, t) {
    return (
      (A(e, "table") &&
        A(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        S(e).children("tbody")[0]) ||
      e
    );
  }
  function Le(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function He(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Oe(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events))
        for (i in (Y.remove(t, "handle events"), s))
          for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
      Q.hasData(e) && ((o = Q.access(e)), (a = S.extend({}, o)), Q.set(t, a));
    }
  }
  function Pe(n, r, i, o) {
    r = g(r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = m(d);
    if (h || (1 < f && "string" == typeof d && !y.checkClone && De.test(d)))
      return n.each(function (e) {
        var t = n.eq(e);
        h && (r[0] = d.call(this, e, t.html())), Pe(t, r, i, o);
      });
    if (
      f &&
      ((t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (s = (a = S.map(ve(e, "script"), Le)).length; c < f; c++)
        (u = e),
          c !== p &&
            ((u = S.clone(u, !0, !0)), s && S.merge(a, ve(u, "script"))),
          i.call(n[c], u, c);
      if (s)
        for (l = a[a.length - 1].ownerDocument, S.map(a, He), c = 0; c < s; c++)
          (u = a[c]),
            he.test(u.type || "") &&
              !Y.access(u, "globalEval") &&
              S.contains(l, u) &&
              (u.src && "module" !== (u.type || "").toLowerCase()
                ? S._evalUrl &&
                  !u.noModule &&
                  S._evalUrl(
                    u.src,
                    { nonce: u.nonce || u.getAttribute("nonce") },
                    l
                  )
                : b(u.textContent.replace(je, ""), u, l));
    }
    return n;
  }
  function Re(e, t, n) {
    for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || S.cleanData(ve(r)),
        r.parentNode &&
          (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  S.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = ie(e);
      if (
        !(
          y.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          S.isXMLDoc(e)
        )
      )
        for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++)
          (s = o[r]),
            (u = a[r]),
            void 0,
            "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type)
              ? (u.checked = s.checked)
              : ("input" !== l && "textarea" !== l) ||
                (u.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++)
            Oe(o[r], a[r]);
        else Oe(e, c);
      return (
        0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (V(n)) {
          if ((t = n[Y.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
            n[Y.expando] = void 0;
          }
          n[Q.expando] && (n[Q.expando] = void 0);
        }
    },
  }),
    S.fn.extend({
      detach: function (e) {
        return Re(this, e, !0);
      },
      remove: function (e) {
        return Re(this, e);
      },
      text: function (e) {
        return $(
          this,
          function (e) {
            return void 0 === e
              ? S.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return Pe(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            qe(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return Pe(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = qe(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return Pe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return Pe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (S.cleanData(ve(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return S.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return $(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !Ne.test(e) &&
              !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = S.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (S.cleanData(ve(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var n = [];
        return Pe(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            S.inArray(this, n) < 0 &&
              (S.cleanData(ve(this)), t && t.replaceChild(e, this));
          },
          n
        );
      },
    }),
    S.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, a) {
        S.fn[e] = function (e) {
          for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++)
            (t = o === i ? this : this.clone(!0)),
              S(r[o])[a](t),
              u.apply(n, t.get());
          return this.pushStack(n);
        };
      }
    );
  var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
    Ie = function (e) {
      var t = e.ownerDocument.defaultView;
      return (t && t.opener) || (t = C), t.getComputedStyle(e);
    },
    We = function (e, t, n) {
      var r,
        i,
        o = {};
      for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
      for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
      return r;
    },
    Fe = new RegExp(ne.join("|"), "i");
  function Be(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.style;
    return (
      (n = n || Ie(e)) &&
        ("" !== (a = n.getPropertyValue(t) || n[t]) ||
          ie(e) ||
          (a = S.style(e, t)),
        !y.pixelBoxStyles() &&
          Me.test(a) &&
          Fe.test(t) &&
          ((r = s.width),
          (i = s.minWidth),
          (o = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = r),
          (s.minWidth = i),
          (s.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function $e(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function e() {
      if (l) {
        (u.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (l.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          re.appendChild(u).appendChild(l);
        var e = C.getComputedStyle(l);
        (n = "1%" !== e.top),
          (s = 12 === t(e.marginLeft)),
          (l.style.right = "60%"),
          (o = 36 === t(e.right)),
          (r = 36 === t(e.width)),
          (l.style.position = "absolute"),
          (i = 12 === t(l.offsetWidth / 3)),
          re.removeChild(u),
          (l = null);
      }
    }
    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      r,
      i,
      o,
      a,
      s,
      u = E.createElement("div"),
      l = E.createElement("div");
    l.style &&
      ((l.style.backgroundClip = "content-box"),
      (l.cloneNode(!0).style.backgroundClip = ""),
      (y.clearCloneStyle = "content-box" === l.style.backgroundClip),
      S.extend(y, {
        boxSizingReliable: function () {
          return e(), r;
        },
        pixelBoxStyles: function () {
          return e(), o;
        },
        pixelPosition: function () {
          return e(), n;
        },
        reliableMarginLeft: function () {
          return e(), s;
        },
        scrollboxSize: function () {
          return e(), i;
        },
        reliableTrDimensions: function () {
          var e, t, n, r;
          return (
            null == a &&
              ((e = E.createElement("table")),
              (t = E.createElement("tr")),
              (n = E.createElement("div")),
              (e.style.cssText = "position:absolute;left:-11111px"),
              (t.style.height = "1px"),
              (n.style.height = "9px"),
              re.appendChild(e).appendChild(t).appendChild(n),
              (r = C.getComputedStyle(t)),
              (a = 3 < parseInt(r.height)),
              re.removeChild(e)),
            a
          );
        },
      }));
  })();
  var _e = ["Webkit", "Moz", "ms"],
    ze = E.createElement("div").style,
    Ue = {};
  function Xe(e) {
    var t = S.cssProps[e] || Ue[e];
    return (
      t ||
      (e in ze
        ? e
        : (Ue[e] =
            (function (e) {
              var t = e[0].toUpperCase() + e.slice(1),
                n = _e.length;
              while (n--) if ((e = _e[n] + t) in ze) return e;
            })(e) || e))
    );
  }
  var Ve = /^(none|table(?!-c[ea]).+)/,
    Ge = /^--/,
    Ye = { position: "absolute", visibility: "hidden", display: "block" },
    Qe = { letterSpacing: "0", fontWeight: "400" };
  function Je(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function Ke(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (u += S.css(e, n + ne[a], !0, i)),
        r
          ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)),
            "margin" !== n &&
              (u -= S.css(e, "border" + ne[a] + "Width", !0, i)))
          : ((u += S.css(e, "padding" + ne[a], !0, i)),
            "padding" !== n
              ? (u += S.css(e, "border" + ne[a] + "Width", !0, i))
              : (s += S.css(e, "border" + ne[a] + "Width", !0, i)));
    return (
      !r &&
        0 <= o &&
        (u +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
            )
          ) || 0),
      u
    );
  }
  function Ze(e, t, n) {
    var r = Ie(e),
      i =
        (!y.boxSizingReliable() || n) &&
        "border-box" === S.css(e, "boxSizing", !1, r),
      o = i,
      a = Be(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (Me.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (
      ((!y.boxSizingReliable() && i) ||
        (!y.reliableTrDimensions() && A(e, "tr")) ||
        "auto" === a ||
        (!parseFloat(a) && "inline" === S.css(e, "display", !1, r))) &&
        e.getClientRects().length &&
        ((i = "border-box" === S.css(e, "boxSizing", !1, r)),
        (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        Ke(e, t, n || (i ? "border" : "content"), o, r, a) +
        "px"
    );
  }
  function et(e, t, n, r, i) {
    return new et.prototype.init(e, t, n, r, i);
  }
  S.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Be(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = X(t),
          u = Ge.test(t),
          l = e.style;
        if (
          (u || (t = Xe(s)), (a = S.cssHooks[t] || S.cssHooks[s]), void 0 === n)
        )
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = typeof n) &&
          (i = te.exec(n)) &&
          i[1] &&
          ((n = se(e, t, i)), (o = "number")),
          null != n &&
            n == n &&
            ("number" !== o ||
              u ||
              (n += (i && i[3]) || (S.cssNumber[s] ? "" : "px")),
            y.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (l[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = X(t);
      return (
        Ge.test(t) || (t = Xe(s)),
        (a = S.cssHooks[t] || S.cssHooks[s]) &&
          "get" in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = Be(e, t, r)),
        "normal" === i && t in Qe && (i = Qe[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    S.each(["height", "width"], function (e, u) {
      S.cssHooks[u] = {
        get: function (e, t, n) {
          if (t)
            return !Ve.test(S.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? Ze(e, u, n)
              : We(e, Ye, function () {
                  return Ze(e, u, n);
                });
        },
        set: function (e, t, n) {
          var r,
            i = Ie(e),
            o = !y.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
            s = n ? Ke(e, u, n, a, i) : 0;
          return (
            a &&
              o &&
              (s -= Math.ceil(
                e["offset" + u[0].toUpperCase() + u.slice(1)] -
                  parseFloat(i[u]) -
                  Ke(e, u, "border", !1, i) -
                  0.5
              )),
            s &&
              (r = te.exec(t)) &&
              "px" !== (r[3] || "px") &&
              ((e.style[u] = t), (t = S.css(e, u))),
            Je(0, t, s)
          );
        },
      };
    }),
    (S.cssHooks.marginLeft = $e(y.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(Be(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              We(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    S.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
      (S.cssHooks[i + o] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e];
            t < 4;
            t++
          )
            n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
          return n;
        },
      }),
        "margin" !== i && (S.cssHooks[i + o].set = Je);
    }),
    S.fn.extend({
      css: function (e, t) {
        return $(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = Ie(e), i = t.length; a < i; a++)
                o[t[a]] = S.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (((S.Tween = et).prototype = {
      constructor: et,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || S.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (S.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = et.propHooks[this.prop];
        return e && e.get ? e.get(this) : et.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = et.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                S.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : et.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = et.prototype),
    ((et.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = S.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          S.fx.step[e.prop]
            ? S.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!S.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : S.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = et.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (S.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (S.fx = et.prototype.init),
    (S.fx.step = {});
  var tt,
    nt,
    rt,
    it,
    ot = /^(?:toggle|show|hide)$/,
    at = /queueHooks$/;
  function st() {
    nt &&
      (!1 === E.hidden && C.requestAnimationFrame
        ? C.requestAnimationFrame(st)
        : C.setTimeout(st, S.fx.interval),
      S.fx.tick());
  }
  function ut() {
    return (
      C.setTimeout(function () {
        tt = void 0;
      }),
      (tt = Date.now())
    );
  }
  function lt(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = ne[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function ct(e, t, n) {
    for (
      var r,
        i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function ft(o, e, t) {
    var n,
      a,
      r = 0,
      i = ft.prefilters.length,
      s = S.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (a) return !1;
        for (
          var e = tt || ut(),
            t = Math.max(0, l.startTime + l.duration - e),
            n = 1 - (t / l.duration || 0),
            r = 0,
            i = l.tweens.length;
          r < i;
          r++
        )
          l.tweens[r].run(n);
        return (
          s.notifyWith(o, [l, n, t]),
          n < 1 && i
            ? t
            : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
        );
      },
      l = s.promise({
        elem: o,
        props: S.extend({}, e),
        opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: tt || ut(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = S.Tween(
            o,
            l.opts,
            e,
            t,
            l.opts.specialEasing[e] || l.opts.easing
          );
          return l.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return (
            e
              ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e]))
              : s.rejectWith(o, [l, e]),
            this
          );
        },
      }),
      c = l.props;
    for (
      !(function (e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (
            ((i = t[(r = X(n))]),
            (o = e[n]),
            Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = S.cssHooks[r]) && ("expand" in a))
          )
            for (n in ((o = a.expand(o)), delete e[r], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      r < i;
      r++
    )
      if ((n = ft.prefilters[r].call(l, o, c, l.opts)))
        return (
          m(n.stop) &&
            (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
          n
        );
    return (
      S.map(c, ct, l),
      m(l.opts.start) && l.opts.start.call(o, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      S.fx.timer(S.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
      l
    );
  }
  (S.Animation = S.extend(ft, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return se(n.elem, e, te.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      m(e) ? ((t = e), (e = ["*"])) : (e = e.match(P));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          (ft.tweeners[n] = ft.tweeners[n] || []),
          ft.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ae(e),
          v = Y.get(e, "fxshow");
        for (r in (n.queue ||
          (null == (a = S._queueHooks(e, "fx")).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
            });
          })),
        t))
          if (((i = t[r]), ot.test(i))) {
            if (
              (delete t[r],
              (o = o || "toggle" === i),
              i === (g ? "hide" : "show"))
            ) {
              if ("show" !== i || !v || void 0 === v[r]) continue;
              g = !0;
            }
            d[r] = (v && v[r]) || S.style(e, r);
          }
        if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = v && v.display) && (l = Y.get(e, "display")),
            "none" === (c = S.css(e, "display")) &&
              (l
                ? (c = l)
                : (le([e], !0),
                  (l = e.style.display || l),
                  (c = S.css(e, "display")),
                  le([e]))),
            ("inline" === c || ("inline-block" === c && null != l)) &&
              "none" === S.css(e, "float") &&
              (u ||
                (p.done(function () {
                  h.display = l;
                }),
                null == l && ((c = h.display), (l = "none" === c ? "" : c))),
              (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            p.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (u = !1),
          d))
            u ||
              (v
                ? "hidden" in v && (g = v.hidden)
                : (v = Y.access(e, "fxshow", { display: l })),
              o && (v.hidden = !g),
              g && le([e], !0),
              p.done(function () {
                for (r in (g || le([e]), Y.remove(e, "fxshow"), d))
                  S.style(e, r, d[r]);
              })),
              (u = ct(g ? v[r] : 0, r, p)),
              r in v ||
                ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
    },
  })),
    (S.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? S.extend({}, e)
          : {
              complete: n || (!n && t) || (m(e) && e),
              duration: e,
              easing: (n && t) || (t && !m(t) && t),
            };
      return (
        S.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in S.fx.speeds
              ? (r.duration = S.fx.speeds[r.duration])
              : (r.duration = S.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
        }),
        r
      );
    }),
    S.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ae)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (t, e, n, r) {
        var i = S.isEmptyObject(t),
          o = S.speed(e, n, r),
          a = function () {
            var e = ft(this, S.extend({}, t), o);
            (i || Y.get(this, "finish")) && e.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (i, e, o) {
        var a = function (e) {
          var t = e.stop;
          delete e.stop, t(o);
        };
        return (
          "string" != typeof i && ((o = e), (e = i), (i = void 0)),
          e && this.queue(i || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != i && i + "queueHooks",
              n = S.timers,
              r = Y.get(this);
            if (t) r[t] && r[t].stop && a(r[t]);
            else for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != i && n[t].queue !== i) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || S.dequeue(this, i);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || "fx"),
          this.each(function () {
            var e,
              t = Y.get(this),
              n = t[a + "queue"],
              r = t[a + "queueHooks"],
              i = S.timers,
              o = n ? n.length : 0;
            for (
              t.finish = !0,
                S.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length;
              e--;

            )
              i[e].elem === this &&
                i[e].queue === a &&
                (i[e].anim.stop(!0), i.splice(e, 1));
            for (e = 0; e < o; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    S.each(["toggle", "show", "hide"], function (e, r) {
      var i = S.fn[r];
      S.fn[r] = function (e, t, n) {
        return null == e || "boolean" == typeof e
          ? i.apply(this, arguments)
          : this.animate(lt(r, !0), e, t, n);
      };
    }),
    S.each(
      {
        slideDown: lt("show"),
        slideUp: lt("hide"),
        slideToggle: lt("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, r) {
        S.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n);
        };
      }
    ),
    (S.timers = []),
    (S.fx.tick = function () {
      var e,
        t = 0,
        n = S.timers;
      for (tt = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || S.fx.stop(), (tt = void 0);
    }),
    (S.fx.timer = function (e) {
      S.timers.push(e), S.fx.start();
    }),
    (S.fx.interval = 13),
    (S.fx.start = function () {
      nt || ((nt = !0), st());
    }),
    (S.fx.stop = function () {
      nt = null;
    }),
    (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (S.fn.delay = function (r, e) {
      return (
        (r = (S.fx && S.fx.speeds[r]) || r),
        (e = e || "fx"),
        this.queue(e, function (e, t) {
          var n = C.setTimeout(e, r);
          t.stop = function () {
            C.clearTimeout(n);
          };
        })
      );
    }),
    (rt = E.createElement("input")),
    (it = E.createElement("select").appendChild(E.createElement("option"))),
    (rt.type = "checkbox"),
    (y.checkOn = "" !== rt.value),
    (y.optSelected = it.selected),
    ((rt = E.createElement("input")).value = "t"),
    (rt.type = "radio"),
    (y.radioValue = "t" === rt.value);
  var pt,
    dt = S.expr.attrHandle;
  S.fn.extend({
    attr: function (e, t) {
      return $(this, S.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        S.removeAttr(this, e);
      });
    },
  }),
    S.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return "undefined" == typeof e.getAttribute
            ? S.prop(e, t, n)
            : ((1 === o && S.isXMLDoc(e)) ||
                (i =
                  S.attrHooks[t.toLowerCase()] ||
                  (S.expr.match.bool.test(t) ? pt : void 0)),
              void 0 !== n
                ? null === n
                  ? void S.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = S.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!y.radioValue && "radio" === t && A(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(P);
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
      },
    }),
    (pt = {
      set: function (e, t, n) {
        return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = dt[t] || S.find.attr;
      dt[t] = function (e, t, n) {
        var r,
          i,
          o = t.toLowerCase();
        return (
          n ||
            ((i = dt[o]),
            (dt[o] = r),
            (r = null != a(e, t, n) ? o : null),
            (dt[o] = i)),
          r
        );
      };
    });
  var ht = /^(?:input|select|textarea|button)$/i,
    gt = /^(?:a|area)$/i;
  function vt(e) {
    return (e.match(P) || []).join(" ");
  }
  function yt(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function mt(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(P)) || [];
  }
  S.fn.extend({
    prop: function (e, t) {
      return $(this, S.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[S.propFix[e] || e];
      });
    },
  }),
    S.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && S.isXMLDoc(e)) ||
              ((t = S.propFix[t] || t), (i = S.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = S.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : ht.test(e.nodeName) || (gt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    y.optSelected ||
      (S.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    S.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        S.propFix[this.toLowerCase()] = this;
      }
    ),
    S.fn.extend({
      addClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (m(t))
          return this.each(function (e) {
            S(this).addClass(t.call(this, e, yt(this)));
          });
        if ((e = mt(t)).length)
          while ((n = this[u++]))
            if (((i = yt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
              a = 0;
              while ((o = e[a++]))
                r.indexOf(" " + o + " ") < 0 && (r += o + " ");
              i !== (s = vt(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (m(t))
          return this.each(function (e) {
            S(this).removeClass(t.call(this, e, yt(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((e = mt(t)).length)
          while ((n = this[u++]))
            if (((i = yt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
              a = 0;
              while ((o = e[a++]))
                while (-1 < r.indexOf(" " + o + " "))
                  r = r.replace(" " + o + " ", " ");
              i !== (s = vt(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      toggleClass: function (i, t) {
        var o = typeof i,
          a = "string" === o || Array.isArray(i);
        return "boolean" == typeof t && a
          ? t
            ? this.addClass(i)
            : this.removeClass(i)
          : m(i)
          ? this.each(function (e) {
              S(this).toggleClass(i.call(this, e, yt(this), t), t);
            })
          : this.each(function () {
              var e, t, n, r;
              if (a) {
                (t = 0), (n = S(this)), (r = mt(i));
                while ((e = r[t++]))
                  n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
              } else (void 0 !== i && "boolean" !== o) || ((e = yt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        t = " " + e + " ";
        while ((n = this[r++]))
          if (1 === n.nodeType && -1 < (" " + vt(yt(n)) + " ").indexOf(t))
            return !0;
        return !1;
      },
    });
  var xt = /\r/g;
  S.fn.extend({
    val: function (n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length
        ? ((i = m(n)),
          this.each(function (e) {
            var t;
            1 === this.nodeType &&
              (null == (t = i ? n.call(this, e, S(this).val()) : n)
                ? (t = "")
                : "number" == typeof t
                ? (t += "")
                : Array.isArray(t) &&
                  (t = S.map(t, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((r =
                S.valHooks[this.type] ||
                S.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in r &&
                void 0 !== r.set(this, t, "value")) ||
                (this.value = t));
          }))
        : t
        ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) &&
          "get" in r &&
          void 0 !== (e = r.get(t, "value"))
          ? e
          : "string" == typeof (e = t.value)
          ? e.replace(xt, "")
          : null == e
          ? ""
          : e
        : void 0;
    },
  }),
    S.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = S.find.attr(e, "value");
            return null != t ? t : vt(S.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))
              ) {
                if (((t = S(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = S.makeArray(t),
              a = i.length;
            while (a--)
              ((r = i[a]).selected =
                -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    S.each(["radio", "checkbox"], function () {
      (S.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < S.inArray(S(e).val(), t));
        },
      }),
        y.checkOn ||
          (S.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (y.focusin = "onfocusin" in C);
  var bt = /^(?:focusinfocus|focusoutblur)$/,
    wt = function (e) {
      e.stopPropagation();
    };
  S.extend(S.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = [n || E],
        d = v.call(e, "type") ? e.type : e,
        h = v.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((o = f = a = n = n || E),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !bt.test(d + S.event.triggered) &&
          (-1 < d.indexOf(".") && ((d = (h = d.split(".")).shift()), h.sort()),
          (u = d.indexOf(":") < 0 && "on" + d),
          ((e = e[S.expando]
            ? e
            : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
          (e.namespace = h.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : S.makeArray(t, [e])),
          (c = S.event.special[d] || {}),
          r || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!r && !c.noBubble && !x(n)) {
          for (
            s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode);
            o;
            o = o.parentNode
          )
            p.push(o), (a = o);
          a === (n.ownerDocument || E) &&
            p.push(a.defaultView || a.parentWindow || C);
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped())
          (f = o),
            (e.type = 1 < i ? s : c.bindType || d),
            (l =
              (Y.get(o, "events") || Object.create(null))[e.type] &&
              Y.get(o, "handle")) && l.apply(o, t),
            (l = u && o[u]) &&
              l.apply &&
              V(o) &&
              ((e.result = l.apply(o, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = d),
          r ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(p.pop(), t)) ||
            !V(n) ||
            (u &&
              m(n[d]) &&
              !x(n) &&
              ((a = n[u]) && (n[u] = null),
              (S.event.triggered = d),
              e.isPropagationStopped() && f.addEventListener(d, wt),
              n[d](),
              e.isPropagationStopped() && f.removeEventListener(d, wt),
              (S.event.triggered = void 0),
              a && (n[u] = a))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = S.extend(new S.Event(), n, { type: e, isSimulated: !0 });
      S.event.trigger(r, null, t);
    },
  }),
    S.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          S.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return S.event.trigger(e, t, n, !0);
      },
    }),
    y.focusin ||
      S.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
        var i = function (e) {
          S.event.simulate(r, e.target, S.event.fix(e));
        };
        S.event.special[r] = {
          setup: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r);
            t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
          },
          teardown: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r) - 1;
            t
              ? Y.access(e, r, t)
              : (e.removeEventListener(n, i, !0), Y.remove(e, r));
          },
        };
      });
  var Tt = C.location,
    Ct = { guid: Date.now() },
    Et = /\?/;
  S.parseXML = function (e) {
    var t;
    if (!e || "string" != typeof e) return null;
    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {
      t = void 0;
    }
    return (
      (t && !t.getElementsByTagName("parsererror").length) ||
        S.error("Invalid XML: " + e),
      t
    );
  };
  var St = /\[\]$/,
    kt = /\r?\n/g,
    At = /^(?:submit|button|image|reset|file)$/i,
    Nt = /^(?:input|select|textarea|keygen)/i;
  function Dt(n, e, r, i) {
    var t;
    if (Array.isArray(e))
      S.each(e, function (e, t) {
        r || St.test(n)
          ? i(n, t)
          : Dt(
              n + "[" + ("object" == typeof t && null != t ? e : "") + "]",
              t,
              r,
              i
            );
      });
    else if (r || "object" !== w(e)) i(n, e);
    else for (t in e) Dt(n + "[" + t + "]", e[t], r, i);
  }
  (S.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = m(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
      S.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) Dt(n, e[n], t, i);
    return r.join("&");
  }),
    S.fn.extend({
      serialize: function () {
        return S.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = S.prop(this, "elements");
          return e ? S.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !S(this).is(":disabled") &&
              Nt.test(this.nodeName) &&
              !At.test(e) &&
              (this.checked || !pe.test(e))
            );
          })
          .map(function (e, t) {
            var n = S(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? S.map(n, function (e) {
                  return { name: t.name, value: e.replace(kt, "\r\n") };
                })
              : { name: t.name, value: n.replace(kt, "\r\n") };
          })
          .get();
      },
    });
  var jt = /%20/g,
    qt = /#.*$/,
    Lt = /([?&])_=[^&]*/,
    Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ot = /^(?:GET|HEAD)$/,
    Pt = /^\/\//,
    Rt = {},
    Mt = {},
    It = "*/".concat("*"),
    Wt = E.createElement("a");
  function Ft(o) {
    return function (e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var n,
        r = 0,
        i = e.toLowerCase().match(P) || [];
      if (m(t))
        while ((n = i[r++]))
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t))
            : (o[n] = o[n] || []).push(t);
    };
  }
  function Bt(t, i, o, a) {
    var s = {},
      u = t === Mt;
    function l(e) {
      var r;
      return (
        (s[e] = !0),
        S.each(t[e] || [], function (e, t) {
          var n = t(i, o, a);
          return "string" != typeof n || u || s[n]
            ? u
              ? !(r = n)
              : void 0
            : (i.dataTypes.unshift(n), l(n), !1);
        }),
        r
      );
    }
    return l(i.dataTypes[0]) || (!s["*"] && l("*"));
  }
  function $t(e, t) {
    var n,
      r,
      i = S.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && S.extend(!0, e, r), e;
  }
  (Wt.href = Tt.href),
    S.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Tt.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            Tt.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": It,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": S.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e);
      },
      ajaxPrefilter: Ft(Rt),
      ajaxTransport: Ft(Mt),
      ajax: function (e, t) {
        "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
        var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = S.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
          x = S.Deferred(),
          b = S.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (h) {
                if (!n) {
                  n = {};
                  while ((t = Ht.exec(p)))
                    n[t[1].toLowerCase() + " "] = (
                      n[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                }
                t = n[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return h ? p : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == h &&
                  ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
                  (a[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == h && (v.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (h) T.always(e[T.status]);
                else for (t in e) w[t] = [w[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || u;
              return c && c.abort(t), l(0, t), this;
            },
          };
        if (
          (x.promise(T),
          (v.url = ((e || v.url || Tt.href) + "").replace(
            Pt,
            Tt.protocol + "//"
          )),
          (v.type = t.method || t.type || v.method || v.type),
          (v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""]),
          null == v.crossDomain)
        ) {
          r = E.createElement("a");
          try {
            (r.href = v.url),
              (r.href = r.href),
              (v.crossDomain =
                Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host);
          } catch (e) {
            v.crossDomain = !0;
          }
        }
        if (
          (v.data &&
            v.processData &&
            "string" != typeof v.data &&
            (v.data = S.param(v.data, v.traditional)),
          Bt(Rt, v, t, T),
          h)
        )
          return T;
        for (i in ((g = S.event && v.global) &&
          0 == S.active++ &&
          S.event.trigger("ajaxStart"),
        (v.type = v.type.toUpperCase()),
        (v.hasContent = !Ot.test(v.type)),
        (f = v.url.replace(qt, "")),
        v.hasContent
          ? v.data &&
            v.processData &&
            0 ===
              (v.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (v.data = v.data.replace(jt, "+"))
          : ((o = v.url.slice(f.length)),
            v.data &&
              (v.processData || "string" == typeof v.data) &&
              ((f += (Et.test(f) ? "&" : "?") + v.data), delete v.data),
            !1 === v.cache &&
              ((f = f.replace(Lt, "$1")),
              (o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o)),
            (v.url = f + o)),
        v.ifModified &&
          (S.lastModified[f] &&
            T.setRequestHeader("If-Modified-Since", S.lastModified[f]),
          S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])),
        ((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) &&
          T.setRequestHeader("Content-Type", v.contentType),
        T.setRequestHeader(
          "Accept",
          v.dataTypes[0] && v.accepts[v.dataTypes[0]]
            ? v.accepts[v.dataTypes[0]] +
                ("*" !== v.dataTypes[0] ? ", " + It + "; q=0.01" : "")
            : v.accepts["*"]
        ),
        v.headers))
          T.setRequestHeader(i, v.headers[i]);
        if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
          return T.abort();
        if (
          ((u = "abort"),
          b.add(v.complete),
          T.done(v.success),
          T.fail(v.error),
          (c = Bt(Mt, v, t, T)))
        ) {
          if (((T.readyState = 1), g && m.trigger("ajaxSend", [T, v]), h))
            return T;
          v.async &&
            0 < v.timeout &&
            (d = C.setTimeout(function () {
              T.abort("timeout");
            }, v.timeout));
          try {
            (h = !1), c.send(a, l);
          } catch (e) {
            if (h) throw e;
            l(-1, e);
          }
        } else l(-1, "No Transport");
        function l(e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = t;
          h ||
            ((h = !0),
            d && C.clearTimeout(d),
            (c = void 0),
            (p = r || ""),
            (T.readyState = 0 < e ? 4 : 0),
            (i = (200 <= e && e < 300) || 304 === e),
            n &&
              (s = (function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s = e.contents,
                  u = e.dataTypes;
                while ("*" === u[0])
                  u.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                  for (i in s)
                    if (s[i] && s[i].test(r)) {
                      u.unshift(i);
                      break;
                    }
                if (u[0] in n) o = u[0];
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + " " + u[0]]) {
                      o = i;
                      break;
                    }
                    a || (a = i);
                  }
                  o = o || a;
                }
                if (o) return o !== u[0] && u.unshift(o), n[o];
              })(v, T, n)),
            !i &&
              -1 < S.inArray("script", v.dataTypes) &&
              (v.converters["text script"] = function () {}),
            (s = (function (e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
              o = c.shift();
              while (o)
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (u = o),
                  (o = c.shift()))
                )
                  if ("*" === o) o = u;
                  else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                      for (i in l)
                        if (
                          (s = i.split(" "))[1] === o &&
                          (a = l[u + " " + s[0]] || l["* " + s[0]])
                        ) {
                          !0 === a
                            ? (a = l[i])
                            : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e["throws"]) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: a
                              ? e
                              : "No conversion from " + u + " to " + o,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(v, s, T, i)),
            i
              ? (v.ifModified &&
                  ((u = T.getResponseHeader("Last-Modified")) &&
                    (S.lastModified[f] = u),
                  (u = T.getResponseHeader("etag")) && (S.etag[f] = u)),
                204 === e || "HEAD" === v.type
                  ? (l = "nocontent")
                  : 304 === e
                  ? (l = "notmodified")
                  : ((l = s.state), (o = s.data), (i = !(a = s.error))))
              : ((a = l), (!e && l) || ((l = "error"), e < 0 && (e = 0))),
            (T.status = e),
            (T.statusText = (t || l) + ""),
            i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
            T.statusCode(w),
            (w = void 0),
            g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
            b.fireWith(y, [T, l]),
            g &&
              (m.trigger("ajaxComplete", [T, v]),
              --S.active || S.event.trigger("ajaxStop")));
        }
        return T;
      },
      getJSON: function (e, t, n) {
        return S.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return S.get(e, void 0, t, "script");
      },
    }),
    S.each(["get", "post"], function (e, i) {
      S[i] = function (e, t, n, r) {
        return (
          m(t) && ((r = r || n), (n = t), (t = void 0)),
          S.ajax(
            S.extend(
              { url: e, type: i, dataType: r, data: t, success: n },
              S.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    S.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers)
        "content-type" === t.toLowerCase() &&
          (e.contentType = e.headers[t] || "");
    }),
    (S._evalUrl = function (e, t, n) {
      return S.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          S.globalEval(e, t, n);
        },
      });
    }),
    S.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (m(e) && (e = e.call(this[0])),
            (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return m(n)
          ? this.each(function (e) {
              S(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = S(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = m(t);
        return this.each(function (e) {
          S(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              S(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (S.expr.pseudos.hidden = function (e) {
      return !S.expr.pseudos.visible(e);
    }),
    (S.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (S.ajaxSettings.xhr = function () {
      try {
        return new C.XMLHttpRequest();
      } catch (e) {}
    });
  var _t = { 0: 200, 1223: 204 },
    zt = S.ajaxSettings.xhr();
  (y.cors = !!zt && "withCredentials" in zt),
    (y.ajax = zt = !!zt),
    S.ajaxTransport(function (i) {
      var o, a;
      if (y.cors || (zt && !i.crossDomain))
        return {
          send: function (e, t) {
            var n,
              r = i.xhr();
            if (
              (r.open(i.type, i.url, i.async, i.username, i.password),
              i.xhrFields)
            )
              for (n in i.xhrFields) r[n] = i.xhrFields[n];
            for (n in (i.mimeType &&
              r.overrideMimeType &&
              r.overrideMimeType(i.mimeType),
            i.crossDomain ||
              e["X-Requested-With"] ||
              (e["X-Requested-With"] = "XMLHttpRequest"),
            e))
              r.setRequestHeader(n, e[n]);
            (o = function (e) {
              return function () {
                o &&
                  ((o =
                    a =
                    r.onload =
                    r.onerror =
                    r.onabort =
                    r.ontimeout =
                    r.onreadystatechange =
                      null),
                  "abort" === e
                    ? r.abort()
                    : "error" === e
                    ? "number" != typeof r.status
                      ? t(0, "error")
                      : t(r.status, r.statusText)
                    : t(
                        _t[r.status] || r.status,
                        r.statusText,
                        "text" !== (r.responseType || "text") ||
                          "string" != typeof r.responseText
                          ? { binary: r.response }
                          : { text: r.responseText },
                        r.getAllResponseHeaders()
                      ));
              };
            }),
              (r.onload = o()),
              (a = r.onerror = r.ontimeout = o("error")),
              void 0 !== r.onabort
                ? (r.onabort = a)
                : (r.onreadystatechange = function () {
                    4 === r.readyState &&
                      C.setTimeout(function () {
                        o && a();
                      });
                  }),
              (o = o("abort"));
            try {
              r.send((i.hasContent && i.data) || null);
            } catch (e) {
              if (o) throw e;
            }
          },
          abort: function () {
            o && o();
          },
        };
    }),
    S.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    S.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return S.globalEval(e), e;
        },
      },
    }),
    S.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    S.ajaxTransport("script", function (n) {
      var r, i;
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (e, t) {
            (r = S("<script>")
              .attr(n.scriptAttrs || {})
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                "load error",
                (i = function (e) {
                  r.remove(),
                    (i = null),
                    e && t("error" === e.type ? 404 : 200, e.type);
                })
              )),
              E.head.appendChild(r[0]);
          },
          abort: function () {
            i && i();
          },
        };
    });
  var Ut,
    Xt = [],
    Vt = /(=)\?(?=&|$)|\?\?/;
  S.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Xt.pop() || S.expando + "_" + Ct.guid++;
      return (this[e] = !0), e;
    },
  }),
    S.ajaxPrefilter("json jsonp", function (e, t, n) {
      var r,
        i,
        o,
        a =
          !1 !== e.jsonp &&
          (Vt.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Vt.test(e.data) &&
              "data");
      if (a || "jsonp" === e.dataTypes[0])
        return (
          (r = e.jsonpCallback =
            m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(Vt, "$1" + r))
            : !1 !== e.jsonp &&
              (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
          (e.converters["script json"] = function () {
            return o || S.error(r + " was not called"), o[0];
          }),
          (e.dataTypes[0] = "json"),
          (i = C[r]),
          (C[r] = function () {
            o = arguments;
          }),
          n.always(function () {
            void 0 === i ? S(C).removeProp(r) : (C[r] = i),
              e[r] && ((e.jsonpCallback = t.jsonpCallback), Xt.push(r)),
              o && m(i) && i(o[0]),
              (o = i = void 0);
          }),
          "script"
        );
    }),
    (y.createHTMLDocument =
      (((Ut = E.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === Ut.childNodes.length)),
    (S.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (y.createHTMLDocument
              ? (((r = (t =
                  E.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = E.location.href),
                t.head.appendChild(r))
              : (t = E)),
          (o = !n && []),
          (i = N.exec(e))
            ? [t.createElement(i[1])]
            : ((i = xe([e], t, o)),
              o && o.length && S(o).remove(),
              S.merge([], i.childNodes)));
      var r, i, o;
    }),
    (S.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        -1 < s && ((r = vt(e.slice(s))), (e = e.slice(0, s))),
        m(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (i = "POST"),
        0 < a.length &&
          S.ajax({ url: e, type: i || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    (S.expr.pseudos.animated = function (t) {
      return S.grep(S.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (S.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = S.css(e, "position"),
          c = S(e),
          f = {};
        "static" === l && (e.style.position = "relative"),
          (s = c.offset()),
          (o = S.css(e, "top")),
          (u = S.css(e, "left")),
          ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto")
            ? ((a = (r = c.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          m(t) && (t = t.call(e, n, S.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          "using" in t
            ? t.using.call(e, f)
            : ("number" == typeof f.top && (f.top += "px"),
              "number" == typeof f.left && (f.left += "px"),
              c.css(f));
      },
    }),
    S.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                S.offset.setOffset(this, t, e);
              });
        var e,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((e = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
          else {
            (t = this.offset()),
              (n = r.ownerDocument),
              (e = r.offsetParent || n.documentElement);
            while (
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === S.css(e, "position")
            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0)),
              (i.left += S.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - i.top - S.css(r, "marginTop", !0),
            left: t.left - i.left - S.css(r, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;
          while (e && "static" === S.css(e, "position")) e = e.offsetParent;
          return e || re;
        });
      },
    }),
    S.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, i) {
        var o = "pageYOffset" === i;
        S.fn[t] = function (e) {
          return $(
            this,
            function (e, t, n) {
              var r;
              if (
                (x(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
              )
                return r ? r[i] : e[t];
              r
                ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                : (e[t] = n);
            },
            t,
            e,
            arguments.length
          );
        };
      }
    ),
    S.each(["top", "left"], function (e, n) {
      S.cssHooks[n] = $e(y.pixelPosition, function (e, t) {
        if (t)
          return (t = Be(e, n)), Me.test(t) ? S(e).position()[n] + "px" : t;
      });
    }),
    S.each({ Height: "height", Width: "width" }, function (a, s) {
      S.each(
        { padding: "inner" + a, content: s, "": "outer" + a },
        function (r, o) {
          S.fn[o] = function (e, t) {
            var n = arguments.length && (r || "boolean" != typeof e),
              i = r || (!0 === e || !0 === t ? "margin" : "border");
            return $(
              this,
              function (e, t, n) {
                var r;
                return x(e)
                  ? 0 === o.indexOf("outer")
                    ? e["inner" + a]
                    : e.document.documentElement["client" + a]
                  : 9 === e.nodeType
                  ? ((r = e.documentElement),
                    Math.max(
                      e.body["scroll" + a],
                      r["scroll" + a],
                      e.body["offset" + a],
                      r["offset" + a],
                      r["client" + a]
                    ))
                  : void 0 === n
                  ? S.css(e, t, i)
                  : S.style(e, t, n, i);
              },
              s,
              n ? e : void 0,
              n
            );
          };
        }
      );
    }),
    S.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        S.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    S.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    S.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, n) {
        S.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    );
  var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (S.proxy = function (e, t) {
    var n, r, i;
    if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
      return (
        (r = s.call(arguments, 2)),
        ((i = function () {
          return e.apply(t || this, r.concat(s.call(arguments)));
        }).guid = e.guid =
          e.guid || S.guid++),
        i
      );
  }),
    (S.holdReady = function (e) {
      e ? S.readyWait++ : S.ready(!0);
    }),
    (S.isArray = Array.isArray),
    (S.parseJSON = JSON.parse),
    (S.nodeName = A),
    (S.isFunction = m),
    (S.isWindow = x),
    (S.camelCase = X),
    (S.type = w),
    (S.now = Date.now),
    (S.isNumeric = function (e) {
      var t = S.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    (S.trim = function (e) {
      return null == e ? "" : (e + "").replace(Gt, "");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return S;
      });
  var Yt = C.jQuery,
    Qt = C.$;
  return (
    (S.noConflict = function (e) {
      return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S;
    }),
    "undefined" == typeof e && (C.jQuery = C.$ = S),
    S
  );
});
/* jQuery end */

/*!
 * Copyright MadCap Software
 * http://www.madcapsoftware.com/
 * Unlicensed use is strictly prohibited
 *
 * v19.1.8677.41286
 */
(function () {
  window.MadCap = {};
  MadCap.CreateNamespace = function (n) {
    for (var n, r = n.split("."), t = MadCap, i = 0, u = r.length; i < u; i++)
      if (((n = r[i]), n != "MadCap")) {
        if (typeof t[n] != "undefined") {
          t = t[n];
          continue;
        }
        t[n] = {};
        t = t[n];
      }
    return t;
  };
  Object.create ||
    (Object.create = function (n) {
      function t() {}
      if (arguments.length > 1)
        throw new Error(
          "Object.create implementation only accepts the first parameter."
        );
      return (t.prototype = n), new t();
    });
  typeof String.prototype.trim != "function" &&
    (String.prototype.trim = function () {
      return this.replace(/^\s+|\s+$/g, "");
    });
  Array.prototype.indexOf ||
    (Array.prototype.indexOf = function (n) {
      var i = this.length >>> 0,
        t = Number(arguments[1]) || 0;
      for (
        t = t < 0 ? Math.ceil(t) : Math.floor(t), t < 0 && (t += i);
        t < i;
        t++
      )
        if (t in this && this[t] === n) return t;
      return -1;
    });
  MadCap.Extend = function (n, t) {
    t.prototype = Object.create(n.prototype);
    t.prototype.constructor = t;
    t.prototype.base = n.prototype;
  };
  MadCap.Exception = function (n, t) {
    this.Number = n;
    this.Message = t;
  };
  MadCap.IsIOS = function () {
    return (
      MadCap.String.Contains(navigator.userAgent, "iphone") ||
      MadCap.String.Contains(navigator.userAgent, "ipad")
    );
  };
  MadCap.IsIBooks = function () {
    return (
      MadCap.HasEpubReadingSystem() &&
      navigator.epubReadingSystem.name == "iBooks"
    );
  };
  MadCap.HasEpubReadingSystem = function () {
    return "epubReadingSystem" in navigator;
  };
  MadCap.IsSafari = function () {
    return (
      MadCap.String.Contains(navigator.userAgent, "safari") &&
      !MadCap.String.Contains(navigator.userAgent, "chrome")
    );
  };
})(),
  (function () {
    var n = MadCap.CreateNamespace("String");
    n.IsNullOrEmpty = function (n) {
      return n == null ? !0 : n.length == 0 ? !0 : !1;
    };
    n.StartsWith = function (n, t, i) {
      if (t == null || n.length < t.length) return !1;
      var u = n,
        r = t;
      return (
        i || ((u = u.toLowerCase()), (r = r.toLowerCase())),
        u.substring(0, r.length) == r ? !0 : !1
      );
    };
    n.EndsWith = function (n, t, i) {
      if (t == null || n.length < t.length) return !1;
      var r = n,
        u = t;
      return (
        i || ((r = r.toLowerCase()), (u = u.toLowerCase())),
        r.substring(r.length - u.length) == u ? !0 : !1
      );
    };
    n.Contains = function (n, t, i) {
      var f = i ? n : n.toLowerCase(),
        r,
        e,
        u;
      if ($.isArray(t)) {
        for (r = 0, e = t.length; r < e; r++)
          if (((u = i ? t[r] : t[r].toLowerCase()), f.indexOf(u) != -1))
            return !0;
        return !1;
      }
      return (u = i ? t : t.toLowerCase()), f.indexOf(u) != -1;
    };
    n.Trim = function (t) {
      return n.TrimRight(n.TrimLeft(t));
    };
    n.TrimLeft = function (n) {
      for (var t = 0, i = n.length, t = 0; t < i && n.charAt(t) == " "; t++);
      return n.substring(t, n.length);
    };
    n.TrimRight = function (n) {
      for (var t = 0, t = n.length - 1; t >= 0 && n.charAt(t) == " "; t--);
      return n.substring(0, t + 1);
    };
    n.ToBool = function (n, t) {
      var r = t,
        i;
      if (n != null) {
        if (
          ((i = n.toLowerCase()),
          i != "true" &&
            i != "false" &&
            i != "1" &&
            i != "0" &&
            i != "yes" &&
            i != "no")
        )
          throw new MadCap.Exception(
            -1,
            "The string can not be converted to a boolean value."
          );
        r = i == "true" || i == "1" || i == "yes";
      }
      return r;
    };
    n.ToInt = function (n, t) {
      var i = t;
      return n != null && (i = parseInt(n)), i;
    };
    n.ToDashed = function (n) {
      return n.replace(/([A-Z])/g, function (n) {
        return "-" + n.toLowerCase();
      });
    };
    n.LocaleCompare = function (n, t, i) {
      if (i) {
        if (typeof Intl != "undefined" && typeof Intl.Collator != "undefined") {
          var r = new Intl.Collator(i);
          if (r) return r.compare(n, t);
        }
        if (String.prototype.localeCompare) return n.localeCompare(t, i);
      }
      return n < t ? -1 : n > t ? 1 : 0;
    };
    n.Compare = function (n, t) {
      for (var f, e, r = n.length, u = t.length, i = 0; i < r && i < u; i++) {
        if (((f = n.charCodeAt(i)), (e = t.charCodeAt(i)), f < e)) return -1;
        if (f > e) return 1;
      }
      return r < u ? -1 : r > u ? 1 : 0;
    };
    n.IsPunctuation = function (n) {
      var t = n.charCodeAt(0);
      return (
        (t >= 33 && t <= 35) ||
        (t >= 37 && t <= 42) ||
        (t >= 44 && t <= 47) ||
        t == 58 ||
        t == 59 ||
        t == 63 ||
        t == 64 ||
        (t >= 91 && t <= 93) ||
        t == 95 ||
        t == 123 ||
        t == 125 ||
        t == 161 ||
        t == 171 ||
        t == 173 ||
        t == 183 ||
        t == 187 ||
        t == 191 ||
        t == 894 ||
        t == 903 ||
        (t >= 1370 && t <= 1375) ||
        t == 1417 ||
        t == 1418 ||
        t == 1470 ||
        t == 1472 ||
        t == 1475 ||
        t == 1478 ||
        t == 1523 ||
        t == 1524 ||
        t == 1548 ||
        t == 1549 ||
        t == 1563 ||
        t == 1566 ||
        t == 1567 ||
        (t >= 1642 && t <= 1645) ||
        t == 1748 ||
        (t >= 1792 && t <= 1805) ||
        (t >= 2039 && t <= 2041) ||
        t == 2404 ||
        t == 2405 ||
        t == 2416 ||
        t == 3572 ||
        (t >= 3663 && t <= 3675) ||
        (t >= 3844 && t <= 3858) ||
        (t >= 3898 && t <= 3901) ||
        t == 3973 ||
        t == 4048 ||
        t == 4049 ||
        (t >= 4170 && t <= 4175) ||
        t == 4347 ||
        (t >= 4961 && t <= 4968) ||
        t == 5741 ||
        t == 5742 ||
        t == 5787 ||
        t == 5788 ||
        (t >= 5867 && t <= 5869) ||
        t == 5941 ||
        t == 5942 ||
        (t >= 6100 && t <= 6102) ||
        (t >= 6104 && t <= 6106) ||
        (t >= 6144 && t <= 6154) ||
        t == 6468 ||
        t == 6469 ||
        t == 6622 ||
        t == 6623 ||
        t == 6686 ||
        t == 6687 ||
        (t >= 7002 && t <= 7008) ||
        (t >= 8208 && t <= 8231) ||
        (t >= 8240 && t <= 8259) ||
        (t >= 8261 && t <= 8273) ||
        (t >= 8275 && t <= 8286) ||
        t == 8317 ||
        t == 8318 ||
        t == 8333 ||
        t == 8334 ||
        t == 9001 ||
        t == 9002 ||
        (t >= 10088 && t <= 10101) ||
        (t >= 10181 && t <= 10182) ||
        (t >= 10214 && t <= 10219) ||
        (t >= 10627 && t <= 10648) ||
        (t >= 10712 && t <= 10715) ||
        t == 10748 ||
        t == 10749 ||
        (t >= 11513 && t <= 11516) ||
        t == 11518 ||
        t == 11519 ||
        (t >= 11776 && t <= 11799) ||
        t == 11804 ||
        t == 11805 ||
        (t >= 12289 && t <= 12291) ||
        (t >= 12296 && t <= 12305) ||
        (t >= 12308 && t <= 12319) ||
        t == 12336 ||
        t == 12349 ||
        t == 12448 ||
        t == 12539 ||
        (t >= 43124 && t <= 43127) ||
        t == 64830 ||
        t == 64831 ||
        (t >= 65040 && t <= 65049) ||
        (t >= 65072 && t <= 65106) ||
        (t >= 65108 && t <= 65121) ||
        t == 65123 ||
        t == 65128 ||
        t == 65130 ||
        t == 65131 ||
        (t >= 65281 && t <= 65283) ||
        (t >= 65285 && t <= 65290) ||
        (t >= 65292 && t <= 65295) ||
        t == 65306 ||
        t == 65307 ||
        t == 65311 ||
        t == 65312 ||
        (t >= 65339 && t <= 65341) ||
        t == 65343 ||
        t == 65371 ||
        t == 65373 ||
        (t >= 65375 && t <= 65381)
      );
    };
    n.Split = function (n, t) {
      for (var u = n.length, f = [], r = -1, e = -1, i = 0; i <= u; i++)
        i == u || t(n.charAt(i))
          ? r > -1 && (f.push(n.slice(r, e)), (r = -1))
          : (r == -1 && (r = i), (e = i + 1));
      return f;
    };
  })(),
  (function () {
    MadCap.CreateNamespace("DEBUG");
    var n = MadCap.DEBUG;
    n.Log = {};
    n.Log.Create = function () {
      var n = document.createElement("div"),
        t,
        i,
        r,
        u;
      n.setAttribute("id", "DEBUG_Log");
      t = document.createElement("div");
      $(t).addClass("MCDebugLogHeader");
      t.appendChild(document.createTextNode("Log Console"));
      n.appendChild(t);
      i = document.createElement("div");
      $(i).addClass("MCDebugLogBody");
      n.appendChild(i);
      r = document.createElement("div");
      $(r).addClass("MCDebugLogFooter");
      n.appendChild(r);
      document.body.appendChild(n);
      u = new MadCap.DragDrop(n, t);
    };
    n.Log._LoadTime = new Date();
    n.Log.AddLine = function (t) {
      var r, i, f;
      if (parent != window && MadCap.Utilities.MessageBus.GetIsCrossFrame()) {
        MadCap.Utilities.MessageBus.PostMessageRequest(
          parent,
          "DEBUG-AddLine",
          [t],
          null
        );
        return;
      }
      if (((r = document.getElementById("DEBUG_Log")), r != null)) {
        var e = new Date(),
          o = e - n.Log._LoadTime,
          u = document.createElement("p");
        $(u).addClass("MCDebugLogEntryTime");
        u.appendChild(
          document.createTextNode(o + "ms " + e.toLocaleTimeString())
        );
        i = document.createElement("div");
        $(i).addClass("MCDebugLogEntry");
        i.appendChild(u);
        i.appendChild(document.createTextNode(t));
        f = MadCap.Dom.GetElementsByClassName("MCDebugLogBody", "div", r)[0];
        f.insertBefore(i, f.firstChild);
      }
    };
  })();
/*!
 * Copyright MadCap Software
 * http://www.madcapsoftware.com/
 * Unlicensed use is strictly prohibited
 *
 * v19.1.8677.41286
 */
(function () {
  MadCap.CreateNamespace("Dom");
  var n = MadCap.Dom;
  n.Dataset = function (n, t) {
    return n.getAttribute("data-" + MadCap.String.ToDashed(t));
  };
  n.GetElementsByClassName = function (n, t, i) {
    var r, f, u, o, e;
    for (
      t = t || "*",
        i = i || document,
        r = [],
        f = i.getElementsByTagName(t),
        u = 0,
        o = f.length;
      u < o;
      u++
    )
      (e = f[u]), $(e).hasClass(n) && (r[r.length] = e);
    return r;
  };
  n.GetElementsByAttribute = function (t, i, r, u) {
    var f, o, e, h, s, c;
    for (
      r = r || "*",
        u = u || document,
        f = [],
        o = u.getElementsByTagName(r),
        e = 0,
        h = o.length;
      e < h;
      e++
    )
      (s = o[e]), (c = n.GetAttribute(s, t)), c == i && (f[f.length] = s);
    return f;
  };
  n.GetChildNodeByTagName = function (n, t, i) {
    for (var u = null, f = -1, r = n.firstChild; r != null; r = r.nextSibling)
      if (r.nodeName.toLowerCase() == t.toLowerCase() && (f++, f == i)) {
        u = r;
        break;
      }
    return u;
  };
  n.GetAncestorNodeByTagName = function (n, t, i) {
    i = i || document.body;
    for (var u = null, r = n.parentNode; r != null && r != i; ) {
      if (r.nodeName.toLowerCase() == t.toLowerCase()) {
        u = r;
        break;
      }
      r = r.parentNode;
    }
    return u;
  };
  n.GetAttribute = function (n, t) {
    var i = n.getAttribute(t),
      r;
    return (
      i == null &&
        ((i = n.getAttribute(t.toLowerCase())),
        i == null &&
          ((r = t.indexOf(":")),
          r != -1 && (i = n.getAttribute(t.substring(r + 1, t.length))))),
      i
    );
  };
  n.GetAttributeInt = function (t, i, r) {
    var u = r,
      f = n.GetAttribute(t, i);
    return f != null && (u = parseInt(f)), u;
  };
  n.GetAttributeBool = function (t, i, r) {
    var u = r,
      f = n.GetAttribute(t, i);
    return f != null && (u = MadCap.String.ToBool(f, r)), u;
  };
  n.GetScrollPosition = function () {
    var n = 0,
      t = 0;
    return (
      typeof pageYOffset != "undefined"
        ? ((n = window.pageXOffset), (t = window.pageYOffset))
        : typeof document.documentElement.scrollTop != "undefined" &&
          document.documentElement.scrollTop > 0 &&
          ((n = document.documentElement.scrollLeft),
          (t = document.documentElement.scrollTop)),
      { X: n, Y: t }
    );
  };
})();
/*!
 * Copyright MadCap Software
 * http://www.madcapsoftware.com/
 * Unlicensed use is strictly prohibited
 *
 * v19.1.8677.41286
 */
(function () {
  var t, i, r, n;
  MadCap.CreateNamespace("Utilities");
  MadCap.Utilities.Dictionary = function (n) {
    this._Map = new Map();
    this._IgnoreCase = n == !0;
  };
  t = MadCap.Utilities.Dictionary;
  t.prototype.GetLength = function () {
    return this._Map.size;
  };
  t.prototype.ForEach = function (n) {
    var t = !0;
    this._Map.forEach(function (i, r) {
      (typeof t == "undefined" || t) && (t = n(r, i));
    });
  };
  t.prototype.GetItem = function (n) {
    return (
      this._IgnoreCase && (n = n.toLowerCase()),
      this._Map.has(n) ? this._Map.get(n) : null
    );
  };
  t.prototype.Remove = function (n) {
    this._IgnoreCase && (n = n.toLowerCase());
    this._Map.delete(n);
  };
  t.prototype.Add = function (n, t) {
    this._IgnoreCase && (n = n.toLowerCase());
    this._Map.set(n, t);
  };
  t.prototype.AddUnique = function (n, t) {
    this._IgnoreCase && (n = n.toLowerCase());
    var i = this.GetItem(n);
    i || this.Add(n, t);
  };
  MadCap.Utilities.DateTime = function (n) {
    var t = /\/Date\(([0-9]+)\)\//i.exec(n);
    this.Date = t != null ? new Date(parseInt(t[1])) : new Date(n);
  };
  i = MadCap.Utilities.DateTime;
  i.Months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  MadCap.Utilities.TimeSpan = function (n, t) {
    typeof n == "undefined" && (n = new Date());
    typeof t == "undefined" && (t = new Date());
    n > t
      ? ((this.FromDate = t), (this.ToDate = n))
      : ((this.FromDate = n), (this.ToDate = t));
    this.Ticks = this.ToDate - this.FromDate;
    this.Seconds = this.Ticks / 1e3;
    this.Minutes = this.Seconds / 60;
    this.Hours = this.Minutes / 60;
    this.Days = this.Hours / 24;
  };
  r = MadCap.Utilities.TimeSpan;
  r.prototype.ToDurationString = function () {
    if (this.Minutes < 1) return "Just now";
    if (this.Hours < 1) return parseInt(this.Minutes) + " minutes ago";
    if (this.Days < 1) return parseInt(this.Hours) + " hours ago";
    if (this.Days < 30) return parseInt(this.Days) + " days ago";
    var n = i.Months[this.FromDate.getMonth()] + " " + this.FromDate.getDate();
    return (
      this.FromDate.getFullYear() != this.ToDate.getFullYear() &&
        (n += ", " + this.FromDate.getFullYear()),
      n
    );
  };
  MadCap.Utilities.Url = function (n) {
    var t = this,
      i =
        /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
    this._Segments = [];
    this.FullPath = null;
    this.Path = null;
    this.PlainPath = null;
    this.Name = null;
    this.Extension = null;
    this.NameWithExtension = null;
    this.FullFragment = null;
    this.Fragment = null;
    this.Query = null;
    this.Origin = null;
    this.LocalPath = null;
    this.IsAbsolute = !1;
    this.IsRootRelative = !1;
    this.IsFolder = !1;
    this.QueryMap = new MadCap.Utilities.Dictionary(!0);
    (this.HashMap = new MadCap.Utilities.Dictionary(!0)),
      (function () {
        function d(n, t, i) {
          for (var o = n.split(t), u = 0, h = o.length; u < h; u++) {
            var r = o[u],
              f = r.indexOf("="),
              e = null,
              s = null;
            f >= 0
              ? ((e = decodeURIComponent(r.substring(0, f))),
                (s = decodeURIComponent(r.substring(f + 1))))
              : (e = r);
            i.Add(e, s);
          }
        }
        var p = "",
          w = "",
          b = "",
          a = "",
          u = n.indexOf("#"),
          e = n.indexOf("?"),
          r,
          o,
          k,
          c,
          y,
          h,
          f,
          s,
          l;
        u != -1 &&
          ((w = n.substring(u)),
          (p = u > e ? n.substring(u) : n.substring(u, e)));
        e != -1 && (b = e > u ? n.substring(e) : n.substring(e, u));
        r = u > -1 ? (e > -1 ? Math.min(u, e) : u) : e;
        o = n.substring(0, r == -1 ? n.length : r);
        r = o.lastIndexOf("/");
        k = o.substring(0, r + 1);
        c = o.substring(r + 1);
        r = c.lastIndexOf(".");
        var g = c.substring(0, r),
          nt = c.substring(r + 1),
          v = "";
        r = o.indexOf(":");
        r >= 0 && (v = o.substring(0, r));
        y = !MadCap.String.IsNullOrEmpty(v);
        MadCap.String.IsNullOrEmpty(n) ||
          ((h = n),
          MadCap.String.EndsWith(h, "/") && (h = h.substring(0, h.length - 1)),
          (t._Segments = h.split("/")),
          y &&
            ((f = n.match(i)),
            f &&
              ((a = f[4]
                ? f[1] + ":" + f[2] + f[3] + ":" + f[4]
                : f[1] + ":" + f[2] + f[3]),
              (t.Origin = a))),
          (t.LocalPath = n.substring(a.length)));
        t.FullPath = n;
        t.Path = k;
        t.PlainPath = o;
        t.Name = g;
        t.Extension = nt;
        t.NameWithExtension = c;
        t.Scheme = v;
        t.IsAbsolute = y;
        t.IsRootRelative = MadCap.String.StartsWith(o, "/", !1);
        t.IsFolder = MadCap.String.EndsWith(o, "/");
        t.FullFragment = w;
        t.Fragment = p;
        t.Query = b;
        s = t.Query;
        MadCap.String.IsNullOrEmpty(s) ||
          ((s = s.substring(1)),
          (s = s.replace(/\+/g, " ")),
          d(s, "&", t.QueryMap));
        l = t.Fragment;
        MadCap.String.IsNullOrEmpty(l) ||
          ((l = l.substring(1)), d(l, "&", t.HashMap));
      })();
  };
  n = MadCap.Utilities.Url;
  n.GetDocumentUrl = function () {
    return new n(document.location.href);
  };
  n.GetAbsolutePath = function (t) {
    var r = n.GetDocumentUrl(),
      i = new MadCap.Utilities.Url(r.PlainPath);
    return i.IsFolder || (i = i.ToFolder()), i.CombinePath(t).FullPath;
  };
  n.EnsureUrlSafety = function (t) {
    var i = encodeURI(decodeURI(t));
    return n.StripInvalidCharacters(i);
  };
  n.StripInvalidCharacters = function (n) {
    return n.replace(/(javascript:|data:|[<>])/gi, "");
  };
  n.GetSafetyProcessedComponent = function (n) {
    return decodeURI(encodeURIComponent(n));
  };
  n.SanitizeHash = function () {
    var i = MadCap.Utilities.Url.CurrentHash(),
      n,
      t;
    i &&
      ((n = decodeURIComponent(i.slice(1))),
      (t = MadCap.Utilities.Url.StripInvalidCharacters(n)),
      n != t && (document.location.hash = encodeURI(t)));
  };
  n.ReplaceReservedCharacters = function (n, t) {
    for (var i = n.split(""), r = 0; r < i.length; r++)
      (i[r].charCodeAt(0) > 127 || i[r].match(/[ ()&;,!'$]/)) && (i[r] = t);
    return i.join("");
  };
  n.Navigate = function (t) {
    document.location = n.EnsureUrlSafety(t);
  };
  n.GenerateNavigateTopicPath = function (t) {
    var i = t.IsRootRelative ? t.PlainPath : n.GetAbsolutePath(t.PlainPath),
      r =
        n.GetDocumentUrl().QueryMap.GetItem("skinName") ||
        t.QueryMap.GetItem("skinName");
    return (
      r != null && (i += "?skinName=" + r),
      t.FullFragment.indexOf("#search-") == 0
        ? (i += t.FullFragment)
        : (t.QueryMap.GetLength() > 0 &&
            ((i += r == null ? "?" : "&"),
            t.QueryMap.ForEach(function (n, t) {
              t &&
                ["skinName", "highlight"].indexOf(n) == -1 &&
                (i += n + "=" + encodeURIComponent(t) + "&");
            }),
            (i = i.slice(0, -1))),
          (i += t.Fragment)),
      i
    );
  };
  n.NavigateTopic = function (t) {
    var i = n.GenerateNavigateTopicPath(t);
    n.Navigate(i);
  };
  n.OnNavigateTopic = function (t) {
    var r = $(this).attr("href"),
      i;
    if (typeof r != "undefined")
      if (
        ((i = new n(r)),
        MadCap.String.IsNullOrEmpty(r) || i.IsAbsolute || !i.PlainPath)
      )
        i.HashMap.GetLength() > 0 &&
          i.Fragment != "#" &&
          (n.NavigateHash(i.Fragment),
          $(window).trigger("hashchange"),
          t.preventDefault());
      else {
        var u = n.GenerateNavigateTopicPath(i),
          f = new MadCap.Utilities.Url(u),
          r = new MadCap.Utilities.Url(document.location.href);
        decodeURI(f.PlainPath) == decodeURI(r.PlainPath) &&
        i.HashMap.GetLength() > 0
          ? (n.NavigateHash(i.Fragment),
            $(window).trigger("hashchange"),
            t.preventDefault())
          : u != n.GetAbsolutePath(i.PlainPath) &&
            (MadCap.Utilities.PreventDefault(t), n.Navigate(u));
      }
  };
  n.NavigateHash = function (t) {
    document.location.hash = n.StripInvalidCharacters(t);
  };
  n.CurrentHash = function () {
    return new MadCap.Utilities.Url(document.location.href).FullFragment;
  };
  n.prototype.AddFile = function (t) {
    var r, i;
    if ((typeof t == "string" && (t = new n(t)), t.IsAbsolute)) return t;
    if (((r = t.FullPath), r.charAt(0) == "/")) {
      var u = document.location,
        f = u.href.lastIndexOf(u.pathname),
        e = u.href.substring(0, f);
      return new n(e + r);
    }
    return (
      (i = this.FullPath),
      MadCap.String.EndsWith(i, "/") || (i = i + "/"),
      new n(i + r)
    );
  };
  n.prototype.CombinePath = function (t) {
    var f, r, s, u;
    if ((typeof t == "string" && (t = new n(t)), t.IsAbsolute))
      throw new MadCap.Exception(-1, "Cannot combine two absolute paths.");
    var h = t.FullPath,
      e = t.FullPath.split("/"),
      i = this.FullPath,
      o = "";
    if (this.Origin && t.IsRootRelative) return new n(this.Origin + h);
    for (
      this.Scheme == "mk" &&
        ((f = i.indexOf("::")),
        (o = i.substring(0, f + 2)),
        (i = i.substring(f + 2))),
        r = 0,
        s = e.length;
      r < s;
      r++
    )
      (u = e[r]),
        i.length > 1 &&
          MadCap.String.EndsWith(i, "/") &&
          (i = i.substring(0, i.length - 1)),
        u == "."
          ? (i += "/")
          : u == ".."
          ? (i = i.substring(0, i.lastIndexOf("/") + 1))
          : (i == "" || MadCap.String.EndsWith(i, "/") || (i += "/"), (i += u));
    return (i = o + i), new n(i);
  };
  n.prototype.ToQuery = function (t) {
    var i = this.PlainPath + "?" + t + this.Fragment;
    return new n(i);
  };
  n.prototype.ToFolder = function () {
    var t = this.PlainPath,
      i,
      r;
    return (
      MadCap.String.EndsWith(t, "/") && (t = t.substring(0, t.length - 1)),
      (i = t.lastIndexOf("/")),
      (r = t.substring(0, i + 1)),
      new n(r)
    );
  };
  n.prototype.ToRelative = function (t) {
    var i, f, e, o, u, s, r;
    if (
      (typeof t == "string" && (t = new n(t)), this.IsAbsolute != t.IsAbsolute)
    )
      return this;
    for (i = 0, f = t._Segments.length; i < f; i++)
      if (((e = this._Segments[i]), (o = t._Segments[i]), e != o)) break;
    for (
      u = "", s = MadCap.String.EndsWith(t.FullPath, "/") ? 0 : 1, r = 0;
      r < f - i - s;
      r++
    )
      u += "../";
    for (r = i; r < this._Segments.length; r++)
      r > i && (u += "/"), (u += this._Segments[r]);
    return new n(u);
  };
  n.prototype.ToExtension = function (t) {
    var i = this.FullPath,
      r = i.lastIndexOf("."),
      u = i.substring(0, r),
      f = u + "." + t;
    return new n(f);
  };
  n.prototype.ToScheme = function (t) {
    var i = this.FullPath,
      r;
    return ((pos = i.indexOf(":")), pos < 0)
      ? this
      : ((r = t + ":" + i.substring(pos)), new n(r));
  };
  n.prototype.ToPath = function () {
    return new n(this.Path);
  };
  n.prototype.ToPlainPath = function () {
    return new n(this.PlainPath);
  };
  n.prototype.ToNoQuery = function () {
    return new n(this.PlainPath + this.Fragment);
  };
  n.prototype.ToNoFragment = function () {
    return new n(this.PlainPath + this.Query);
  };
  MadCap.Utilities.PreventDefault = function (n) {
    n.preventDefault ? n.preventDefault() : (event.returnValue = !1);
  };
  MadCap.Utilities.EncodeHtml = function (n) {
    var t = document.createElement("textarea");
    return (t.textContent = n), t.innerHTML;
  };
  MadCap.Utilities.DecodeHtml = function (n) {
    var t = document.createElement("textarea");
    return (t.innerHTML = n), t.textContent;
  };
  MadCap.Utilities.GenerateRandomGUID = function () {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (n) {
        var t = (Math.random() * 16) | 0,
          i = n == "x" ? t : (t & 3) | 8;
        return i.toString(16);
      }
    );
  };
  MadCap.Utilities.AsyncForeach = function (n, t, i) {
    function r() {
      var u = n.shift();
      t(u, function () {
        n.length > 0 ? r() : i();
      });
    }
    n = n.slice(0);
    n.length > 0 ? r() : i();
  };
  MadCap.Utilities.CopyToClipboard = function (n) {
    var t = $("<div>"),
      i = t.html(n.html().replace(/<br>/g, "\n")).text();
    t = $("<textarea>");
    n.parent().append(t);
    t.val(i).select();
    document.execCommand("copy");
    t.remove();
  };
  MadCap.Utilities.Now =
    Date.now ||
    function () {
      return new Date().getTime();
    };
  MadCap.Utilities.Has = function (n, t) {
    return n != null && Object.prototype.hasOwnProperty.call(n, t);
  };
  MadCap.Utilities.CreateEvent = function (n, t) {
    var i, r;
    if (typeof CustomEvent == "function") i = new CustomEvent(n, t);
    else {
      i = document.createEvent("Event");
      i.initEvent(n, !0, !0);
      for (r in t) i[r] = t[r];
    }
    return i;
  };
  MadCap.Utilities.Debounce = function (n, t, i) {
    var r,
      u,
      f,
      o,
      e,
      s = function () {
        var h = MadCap.Utilities.Now() - o;
        h < t && h > 0
          ? (r = setTimeout(s, t - h))
          : ((r = null), i || ((e = n.apply(f, u)), r || (f = u = null)));
      };
    return function () {
      f = this;
      u = arguments;
      o = MadCap.Utilities.Now();
      var h = i && !r;
      return (
        r || (r = setTimeout(s, t)),
        h && ((e = n.apply(f, u)), (f = u = null)),
        e
      );
    };
  };
  MadCap.Utilities.Memoize = function (n, t) {
    var i = function (r) {
      var u = i.cache,
        f = "" + (t ? t.apply(this, arguments) : r);
      return (
        MadCap.Utilities.Has(u, f) || (u[f] = n.apply(this, arguments)), u[f]
      );
    };
    return (i.cache = {}), i;
  };
  MadCap.Utilities.Get = function (n, t, i) {
    var u = undefined,
      r,
      f;
    if (n != null) {
      for (t = t.split("."), r = 0, f = t.length; n != null && r < f; )
        n = n[t[r++]];
      u = r && r == f ? n : undefined;
    }
    return u === undefined ? i : u;
  };
  MadCap.Utilities.IsRuntimeFileType = function (n) {
    return (
      MadCap.Dom.Dataset(document.documentElement, "mcRuntimeFileType") == n
    );
  };
  MadCap.Utilities.HasRuntimeFileType = function (n) {
    var t = MadCap.Dom.Dataset(document.documentElement, "mcRuntimeFileType");
    return t && t.split(";").indexOf(n) > -1;
  };
  MadCap.Utilities.CreateStylesheet = function (n, t) {
    var i = n || document,
      r = i.createElement("style");
    return (
      t && r.setAttribute("media", t),
      i.getElementsByTagName("head")[0].appendChild(r),
      i.styleSheets[i.styleSheets.length - 1]
    );
  };
  MadCap.Utilities.AsyncForeachParallel = function (n, t, i) {
    var u = 0,
      f,
      r;
    for (n.length === 0 && i(), f = n.length, r = 0; r < f; r++)
      t(n[r], function () {
        u++;
        u === n.length && i();
      });
  };
  MadCap.Utilities.FixLink = function (n, t, i, r) {
    var f = n,
      u = new MadCap.Utilities.Url(n);
    return (
      u.IsAbsolute ||
        u.Fragment == u.FullPath ||
        ((u = t.CombinePath(u)),
        (f = u.FullPath),
        MadCap.String.IsNullOrEmpty(i) ||
          r == null ||
          ((u = u.ToRelative(r)), (f = i + u.FullPath))),
      f
    );
  };
  MadCap.Utilities.FixLinks = function (n, t, i, r) {
    var u = ["href", "src", "cite", "data", "data-mc-topics", "poster"],
      e = ["href", "data-mc-topics"],
      o = "[" + u.join("],[") + "]",
      f = $(n);
    return (
      f.find(o).each(function () {
        var f =
            $(this).hasClass("MCPopupThumbnailPopup") ||
            $(this).hasClass("MCPopupThumbnailHover") ||
            $(this).hasClass("MCTopicPopup"),
          o = !f,
          n = !1;
        $.each(this.attributes, function (f, s) {
          var y = o && e.indexOf(s.name) > -1 ? i : "",
            a,
            h,
            c,
            l,
            v;
          if (s.name === "data-mc-topics") {
            if (((a = s.value), (h = a ? a.split("||") : null), h)) {
              for (c = 0; c < h.length; c++)
                (l = h[c].split("|")),
                  (l[1] = MadCap.Utilities.FixLink(l[1], t, y, r)),
                  (h[c] = l.join("|"));
              s.value = h.join("||");
            }
          } else u.indexOf(s.name) > -1 && ((v = MadCap.Utilities.FixLink(s.value, t, y, r)), v !== s.value && ((s.value = v), (n = !0)));
        });
        n && $(this).attr("data-mc-processed-link", !0);
      }),
      f
    );
  };
  MadCap.Utilities.IsRTL = function () {
    return $("html").css("direction") === "rtl";
  };
  MadCap.Utilities.IsTouchDevice = function () {
    var n = !1;
    return (
      (function (t) {
        (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
          t
        ) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
            t.substr(0, 4)
          )) &&
          (n = !0);
      })(navigator.userAgent || navigator.vendor || window.opera),
      n
    );
  };
  MadCap.Utilities.IsIE = function () {
    var n = window.navigator.userAgent;
    return n.indexOf("MSIE ") > 0 || n.indexOf("Trident/") > 0;
  };
  MadCap.Utilities.IsChromium = function () {
    return navigator.userAgent.search("Chrome") > -1;
  };
  MadCap.Utilities.SameOriginAsParent = function () {
    if (!window.parent) return !1;
    try {
      return window.parent.location.host == window.location.host;
    } catch (t) {
      return !1;
    }
  };
  MadCap.Utilities.IsMicroContentTopic = function () {
    return $("meta[value='micro-content']").length > 0;
  };
  MadCap.Utilities.ToggleButtonState = function (n) {
    var t = $(n),
      i = t.attr("data-current-state") || "1",
      r = i == "1" ? 2 : 1;
    MadCap.Utilities.SetButtonState(n, r);
  };
  MadCap.Utilities.SetButtonState = function (n, t) {
    var i = $(n),
      e = t == 1 ? 2 : 1,
      o = i.attr("data-state" + t + "-class"),
      s = i.attr("data-state" + e + "-class"),
      u,
      f,
      r;
    i.attr("data-current-state", t);
    i.removeClass(s).addClass(o);
    i.attr("title", i.attr("data-state" + t + "-title"));
    u = i.children("img");
    u.attr("alt", u.attr("data-state" + t + "-alt"));
    MadCap.Utilities.HasRuntimeFileType("SkinPreview") &&
      ((f = i.attr("data-mc-style2")),
      f &&
        ((r = i.attr("data-mc-style1")),
        r ||
          ((r = i.attr("data-mc-style")),
          i.attr("data-mc-style1", MadCap.Utilities.EncodeHtml(r))),
        i.attr("data-mc-style", t == 1 ? r : f)));
  };
  MadCap.Utilities.LoadHandlers = new Map();
  MadCap.Utilities.InitContent = function (n) {
    MadCap.Utilities.LoadHandlers.forEach(function (t) {
      t(n);
    });
  };
  MadCap.Utilities.LoadScript = function (n, t, i) {
    var r = document.createElement("script");
    if (((r.src = n), (r.type = "text/javascript"), r.addEventListener)) {
      $(r).on("error", i);
      $(r).on("load", t);
    } else
      r.readyState &&
        (r.onreadystatechange = function () {
          (r.readyState == "loaded" || r.readyState == "complete") && t();
        });
    return document.getElementsByTagName("head")[0].appendChild(r), r;
  };
  MadCap.Utilities.LoadRegisteredScript = function (n, t, i, r) {
    var f = !1,
      o,
      e,
      u;
    $("script").each(function (t, i) {
      var r = $(i).attr("src");
      MadCap.String.IsNullOrEmpty(r) ||
        r.toLowerCase() != n.toLowerCase() ||
        ((f = !0), (o = i));
    });
    f &&
      ((e = new MadCap.Utilities.Url(n).Name),
      (u = MadCap.Utilities.LoadHandlers.get(e)),
      u && u(r),
      t());
  };
  MadCap.Utilities.LoadScripts = function (n, t, i, r) {
    MadCap.Utilities.AsyncForeach(
      n,
      function (n, t) {
        MadCap.String.IsNullOrEmpty(n)
          ? t()
          : MadCap.Utilities.LoadRegisteredScript(n, t, i, r);
      },
      t
    );
  };
  MadCap.Utilities.DynamicStylesheets = new Map();
  MadCap.Utilities.LoadStylesheets = function (n, t) {
    var i = $("body")[0];
    $.each(n, function (n, r) {
      MadCap.String.IsNullOrEmpty(r) ||
        MadCap.Utilities.LoadStylesheet(r, i, t);
    });
  };
  MadCap.Utilities.LoadStylesheet = function (n, t, i) {
    var u = !1,
      r,
      f,
      e;
    $("link").each(function (t, i) {
      var r = $(i).attr("href");
      MadCap.String.IsNullOrEmpty(r) ||
        r.toLowerCase() !== n.toLowerCase() ||
        (u = !0);
    });
    u ||
      ((r =
        '<link rel="stylesheet" type="text/css" href="{0}" data-mc-dynamic="true" />'),
      (r = r.replace("{0}", n)),
      (f = $("head")[0]),
      (e = i ? $(r).insertAfter(i) : $(r).appendTo(f)),
      $(t).data("DynamicStylesheets").set(n, e));
  };
  MadCap.Utilities.LoadDynamicStylesheets = function (n, t) {
    for (var i = 0; i < n.length; i++) MadCap.Utilities.LoadStylesheet(n[i], t);
  };
  MadCap.Utilities.RemoveDynamicStylesheets = function (n) {
    $.each($(n).data("DynamicStylesheets"), function (n, t) {
      $(t).remove();
    });
    $(n).data("DynamicStylesheets", new Map());
  };
  MadCap.Utilities.CombineRelevancy = function (n, t) {
    for (var i = MadCap.Utilities.CapNumber(n, t, 16, 0, 2), r = 2; r < 7; r++)
      i = MadCap.Utilities.CapNumber(i, t, 16, r, 1);
    return MadCap.Utilities.CapNumber(i, t, 16, 7, 1, 7);
  };
  MadCap.Utilities.CalculateScore = function (n, t, i) {
    return (Math.log(n) / Math.log(2147483647)) * i + t * (1 - i);
  };
  MadCap.Utilities.CapNumber = function (n, t, i, r, u, f) {
    f || (f = Math.pow(i, u) - 1);
    var e = Math.pow(i, r),
      o = e * Math.pow(i, u),
      s = ~~((n % o) / e),
      h = ~~((t % o) / e),
      c = Math.min(s + h, f);
    return n + (c - s) * e;
  };
  MadCap.Utilities.Require = function (n, t) {
    MadCap.Utilities._requireCache ||
      (MadCap.Utilities._requireCache = new Map());
    var u = MadCap.Utilities._requireCache,
      r = n[0],
      i = u.get(r);
    i && i.data
      ? t(i.data)
      : i && i.callbacks
      ? i.callbacks.push(t)
      : (u.set(r, { callbacks: [t] }),
        require([r], function (n) {
          i = u.get(r);
          i.data = n;
          for (var t = 0; t < i.callbacks.length; t++) i.callbacks[t](n);
          i.callbacks = null;
          require.undef(r);
        }));
  };
  MadCap.Utilities.GetChunkId = function (n, t, i) {
    for (var f, u, r = 0; r < n.length; r++) {
      if (((f = n[r]), (u = i(t, f)), u === 0)) return r;
      if (u === -1) return r - 1;
    }
    return n.length - 1;
  };
  MadCap.Utilities.GetChunkIds = function (n, t, i) {
    for (var o, f, u = [], e = !1, r = 0; r < n.length; r++) {
      if (((o = n[r]), (f = i(t, o)), f === -1 && r === 0)) return u;
      if (f === 0) r > 0 && !e && u.push(r - 1), u.push(r), (e = !0);
      else if (f === -1) {
        r > 0 && !e && u.push(r - 1);
        break;
      }
    }
    return u.length === 0 && u.push(n.length - 1), u;
  };
  MadCap.Utilities.ClearRequireCache = function () {
    MadCap.Utilities._requireCache = null;
  };
  MadCap.Utilities.StopWords = Array(
    "a",
    "an",
    "the",
    "to",
    "of",
    "is",
    "for",
    "and",
    "or",
    "do",
    "be",
    "by",
    "he",
    "she",
    "on",
    "in",
    "at",
    "it",
    "not",
    "no",
    "are",
    "as",
    "but",
    "her",
    "his",
    "its",
    "non",
    "only",
    "than",
    "that",
    "then",
    "they",
    "this",
    "we",
    "were",
    "which",
    "with",
    "you",
    "into",
    "about",
    "after",
    "all",
    "also",
    "been",
    "can",
    "come",
    "from",
    "had",
    "has",
    "have",
    "me",
    "made",
    "many",
    "may",
    "more",
    "most",
    "near",
    "over",
    "some",
    "such",
    "their",
    "there",
    "these",
    "under",
    "use",
    "was",
    "when",
    "where",
    "against",
    "among",
    "became",
    "because",
    "between",
    "during",
    "each",
    "early",
    "found",
    "however",
    "include",
    "late",
    "later",
    "med",
    "other",
    "several",
    "through",
    "until",
    "who",
    "your"
  );
  MadCap.Utilities.Store = (function () {
    var t, n, i;
    try {
      if (window.localStorage) return window.localStorage;
    } catch (r) {
      console &&
        console.log &&
        console.log("window.localStorage not available");
    }
    return ((t = "MadCap"),
    (n = document.createElement("div")),
    (n.style.display = "none"),
    document.getElementsByTagName("head")[0].appendChild(n),
    typeof n.addBehavior == "function")
      ? (n.addBehavior("#default#userdata"),
        n.load(t),
        {
          getItem: function (t) {
            return n.XMLDocument.documentElement.getAttribute(t);
          },
          setItem: function (i, r) {
            n.XMLDocument.documentElement.setAttribute(i, r);
            n.save(t);
          },
          removeItem: function (i) {
            n.removeAttribute(i);
            n.save(t);
          },
        })
      : ((i = "data-" + t + "-"),
        {
          getItem: function (t) {
            var r = n.getAttribute(i + t);
            return r ? decodeURIComponent(r) : r;
          },
          setItem: function (t, r) {
            n.setAttribute(i + t, r ? encodeURIComponent(r) : null);
          },
          removeItem: function (t) {
            n.removeAttribute(i + t);
          },
        });
  })();
  MadCap.Utilities.SanitizeHtml = function (n) {
    return DOMPurify.sanitize(n, {
      ALLOWED_URI_REGEXP:
        /^(?:(?:(?:f|ht)tps?|mailto|file):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
      ADD_TAGS: [
        "embed",
        "iframe",
        "object",
        "param",
        "madcap:conditionaltext",
      ],
      ADD_ATTR: [
        "abbr",
        "accesskey",
        "allowfullscreen",
        "autoplay",
        "classid",
        "codebase",
        "data",
        "dirname",
        "form",
        "frameborder",
        "kind",
        "longdesc",
        "muted",
        "pluginspage",
        "rules",
        "sandbox",
        "sorted",
        "target",
        "translate",
        "wmode",
      ],
    });
  };
  MadCap.Utilities.Round = function (n, t) {
    var i = Math.pow(10, t),
      r = Number.EPSILON ? Number.EPSILON : 0;
    return Math.round((n + r) * i) / i;
  };
})();
Array.prototype.Remove = function (n) {
  if (n < 0 || n > this.length) throw "Index out of bounds.";
  this.splice(n, 1);
};
Array.prototype.RemoveValue = function (n) {
  for (var t = this.length - 1; t >= 0; t--) this[t] == n && this.Remove(t);
};
Array.prototype.Union = function (n) {
  var i = [].concat(this),
    t;
  if (n)
    for (t = 0; t < n.length; t++) this.indexOf(n[t]) === -1 && i.push(n[t]);
  return i;
};
Array.prototype.Intersect = function (n) {
  for (var i = [], t = 0; t < n.length; t++)
    this.indexOf(n[t]) !== -1 && i.push(n[t]);
  return i;
};
$.fn.randomize = function (n) {
  return (
    (n ? this.find(n) : this).parent().each(function () {
      $(this)
        .children(n)
        .sort(function () {
          return Math.random() - 0.5;
        })
        .detach()
        .appendTo(this);
    }),
    this
  );
};
/*!
 * Copyright MadCap Software
 * http://www.madcapsoftware.com/
 * Unlicensed use is strictly prohibited
 *
 * v19.1.8677.41286
 */
(function () {
  MadCap.Utilities.Xhr = function (t, i, r) {
    var u = this;
    this._XmlDoc = null;
    this._XmlHttp = null;
    this._Args = t;
    this._LoadFunc = i;
    this._LoadContextObj = r;
    this.OnreadystatechangeLocal = function () {
      if (u._XmlDoc.readyState == 4) {
        u._XmlDoc.onreadystatechange = n._Noop;
        var t = null;
        u._XmlDoc.documentElement != null && (t = u._XmlDoc);
        u._LoadContextObj == null
          ? u._LoadFunc(t, u._Args)
          : u._LoadFunc.call(u._LoadContextObj, t, u._Args);
      }
    };
    this.OnreadystatechangeRemote = function () {
      if (u._XmlHttp.readyState == 4) {
        u._XmlHttp.onreadystatechange = n._Noop;
        var t = null;
        u._XmlHttp.responseXML != null &&
          u._XmlHttp.responseXML.documentElement != null &&
          (t = u._XmlHttp.responseXML);
        u._LoadContextObj == null
          ? u._LoadFunc(t, u._Args)
          : u._LoadFunc.call(u._LoadContextObj, t, u._Args);
      }
    };
  };
  var n = MadCap.Utilities.Xhr;
  n.prototype._LoadLocal = function (t, i) {
    if (window.ActiveXObject) {
      this._XmlDoc = n._GetMicrosoftXmlDomObject();
      this._XmlDoc.async = i;
      this._LoadFunc &&
        (this._XmlDoc.onreadystatechange = this.OnreadystatechangeLocal);
      try {
        this._XmlDoc.load(t) || (this._XmlDoc = null);
      } catch (r) {
        this._XmlDoc = null;
      }
    } else window.XMLHttpRequest && this._LoadRemote(t, i);
    return this._XmlDoc;
  };
  n.prototype._LoadRemote = function (t, i) {
    this._XmlHttp = n._GetXhrObject();
    this._LoadFunc &&
      (this._XmlHttp.onreadystatechange = this.OnreadystatechangeRemote);
    try {
      this._XmlHttp.open("GET", t, i);
      this._XmlHttp.send(null);
      i ||
        (this._XmlHttp.status != 0 && this._XmlHttp.status != 200) ||
        (this._XmlDoc = this._XmlHttp.responseXML);
    } catch (r) {
      this._XmlHttp.abort();
      this._LoadFunc &&
        (this._LoadContextObj == null
          ? this._LoadFunc(null, this._Args)
          : this._LoadFunc.call(this._LoadContextObj, null, this._Args));
    }
    return this._XmlDoc;
  };
  n.prototype.Load = function (n, t) {
    var r = null,
      i = document.location.protocol;
    return (
      i == "file:" || i == "mk:" || i == "ms-its:" || i == "app:"
        ? (r = this._LoadLocal(n, t))
        : (i == "http:" || i == "https:") && (r = this._LoadRemote(n, t)),
      r
    );
  };
  n.LoadXmlString = function (t) {
    var i = null,
      r;
    return (
      window.ActiveXObject
        ? ((i = n._GetMicrosoftXmlDomObject()), (i.async = !1), i.loadXML(t))
        : DOMParser &&
          ((r = new DOMParser()), (i = r.parseFromString(t, "text/xml"))),
      i
    );
  };
  n.CreateXmlDocument = function (t) {
    var i = "<" + t + " />";
    return n.LoadXmlString(i);
  };
  n.GetOuterXml = function (n) {
    var t = null,
      i;
    return (
      window.ActiveXObject
        ? (t = n.xml)
        : window.XMLSerializer &&
          ((i = new XMLSerializer()), (t = i.serializeToString(n))),
      t
    );
  };
  n.ImportNode = function (n, t) {
    return typeof n.importNode == "function"
      ? n.importNode(t, !0)
      : t.cloneNode(!0);
  };
  n.CallWebService = function (t, i, r, u) {
    var f = new n(u, r, null);
    return f.Load(t, i);
  };
  n._MicrosoftXmlDomProgIDs = [
    "Msxml2.DOMDocument.6.0",
    "Msxml2.DOMDocument",
    "Microsoft.XMLDOM",
  ];
  n._MicrosoftXmlHttpProgIDs = [
    "Msxml2.XMLHTTP.6.0",
    "Msxml2.XMLHTTP",
    "Microsoft.XMLHTTP",
  ];
  n._MicrosoftXmlDomProgID = null;
  n._MicrosoftXmlHttpProgID = null;
  n._FilePathToXmlStringMap = new MadCap.Utilities.Dictionary();
  n._LoadingFilesPathMap = new MadCap.Utilities.Dictionary();
  n._LoadingFromQueue = !1;
  n.ForceUseJS = !1;
  n.Load = function (t, i, r, u, f) {
    function h() {
      n._LoadingFilesPathMap.Remove(e.FullPath);
      var t = n._FilePathToXmlStringMap.GetItem(e.Name);
      t != null &&
        (n._FilePathToXmlStringMap.Remove(e.Name), (o = n.LoadXmlString(t)));
      n._LoadingFilesPathMap.ForEach(function (t, i) {
        var r = new MadCap.Utilities.Url(t),
          u = i;
        return r.Name == c && r.FullPath != e.FullPath
          ? (n._LoadingFilesPathMap.Remove(r.FullPath),
            (n._LoadingFromQueue = !0),
            n.Load(r.FullPath, u.async, u.LoadFunc, u.args, u.loadContextObj),
            !1)
          : !0;
      });
      f == null ? r(o, u) : r.call(f, o, u);
    }
    var o = null,
      s,
      l;
    if (
      n.ForceUseJS ||
      (Boolean(!window.ActiveXObject) &&
        MadCap.String.StartsWith(document.location.protocol, "file"))
    ) {
      var a = new MadCap.Utilities.Url(t),
        e = a.ToExtension("js"),
        c = e.Name;
      n._LoadingFilesPathMap.Add(e.FullPath, {
        async: i,
        LoadFunc: r,
        args: u,
        loadContextObj: f,
      });
      s = !1;
      n._LoadingFilesPathMap.ForEach(function (n, t) {
        var i = new MadCap.Utilities.Url(n),
          r = t;
        return i.Name == c && i.FullPath != e.FullPath ? ((s = !0), !1) : !0;
      });
      (n._LoadingFromQueue || !s) &&
        ((n._LoadingFromQueue = !1),
        MadCap.Utilities.LoadScript(e.FullPath, h, h));
    } else (l = new n(u, r, f)), (o = l.Load(t, i));
    return o;
  };
  n._Noop = function () {};
  n._GetMicrosoftXmlDomObject = function () {
    var i = null,
      t,
      r;
    if (n._MicrosoftXmlDomProgID == null)
      for (t = 0; t < n._MicrosoftXmlDomProgIDs.length; t++) {
        r = n._MicrosoftXmlDomProgIDs[t];
        try {
          i = new ActiveXObject(r);
          n._MicrosoftXmlDomProgID = r;
          break;
        } catch (u) {}
      }
    else i = new ActiveXObject(n._MicrosoftXmlDomProgID);
    return i;
  };
  n._GetXhrObject = (function () {
    return window.XMLHttpRequest
      ? function () {
          return new window.XMLHttpRequest();
        }
      : window.ActiveXObject
      ? function () {
          var i = null,
            t,
            r;
          if (n._MicrosoftXmlHttpProgID == null)
            for (t = 0; t < n._MicrosoftXmlHttpProgIDs.length; t++) {
              r = n._MicrosoftXmlHttpProgIDs[t];
              try {
                i = new ActiveXObject(r);
                n._MicrosoftXmlHttpProgID = r;
                break;
              } catch (u) {}
            }
          else i = new ActiveXObject(n._MicrosoftXmlHttpProgID);
          return i;
        }
      : void 0;
  })();
})();
/*!
 * Copyright MadCap Software
 * http://www.madcapsoftware.com/
 * Unlicensed use is strictly prohibited
 *
 * v19.1.8677.41286
 */
(function () {
  MadCap.WebHelp = MadCap.CreateNamespace("WebHelp");
  MadCap.WebHelp.AliasFile = function (n, t) {
    function o(n) {
      var t = null;
      return (
        f(),
        i != null &&
          (typeof n == "string"
            ? ((t = i.GetItem(n)), t == null && (t = r.GetItem(n)))
            : typeof n == "number" && (t = r.GetItem(n.toString()))),
        t
      );
    }
    function f() {
      var t, n, f;
      if (i == null && u)
        for (
          i = new MadCap.Utilities.Dictionary(!0),
            r = new MadCap.Utilities.Dictionary(),
            t = u.getElementsByTagName("Map"),
            n = 0;
          n < t.length;
          n++
        ) {
          var s = t[n].getAttribute("Link"),
            h = t[n].getAttribute("Skin"),
            e = { Topic: s, Skin: h },
            o = t[n].getAttribute("Name");
          o != null && i.Add(o, e);
          f = t[n].getAttribute("ResolvedId");
          f != null && r.Add(f, e);
        }
    }
    var u = null,
      e = t,
      i = null,
      r = null;
    (function () {})();
    this.Load = function (t) {
      MadCap.Utilities.Xhr.Load(n, !0, function (n) {
        n && (u = n.documentElement);
        t();
      });
    };
    this.GetIDs = function () {
      var n = [];
      return (
        f(),
        r.ForEach(function (t) {
          return (n[n.length] = t), !0;
        }),
        n
      );
    };
    this.GetNames = function () {
      var n = [];
      return (
        f(),
        i.ForEach(function (t) {
          return (n[n.length] = t), !0;
        }),
        n
      );
    };
    this.LookupID = function (n) {
      var i = !1,
        t = null,
        f = null,
        r,
        u;
      return (
        n
          ? typeof n == "string" && n.indexOf(".") != -1
            ? ((r = n.indexOf("|")),
              r != -1
                ? ((t = n.substring(0, r)), (f = n.substring(r + 1)))
                : (t = n),
              (i = !0))
            : ((u = o(n)), u != null && ((i = !0), (t = u.Topic), (f = u.Skin)))
          : (i = !0),
        t && (t = e.ContentFolder + t),
        { Found: i, Topic: t, Skin: f }
      );
    };
  };
})();
/*!
 * Copyright MadCap Software
 * http://www.madcapsoftware.com/
 * Unlicensed use is strictly prohibited
 *
 * v19.1.8677.41286
 */
(function () {
  MadCap.WebHelp = MadCap.CreateNamespace("WebHelp");
  (MadCap.WebHelp.HelpSystem = function (n, t, i, r, u) {
    function k(n) {
      var r = n.parent,
        t = n.previous,
        i = n.next,
        u;
      t && ((t.next = i), (n.previous = null));
      i && ((i.previous = t), (n.next = null));
      r && ((u = n.parent.n.indexOf(n)), r.n.splice(u, 1), (n.parent = null));
    }
    function d(n) {
      var t = null;
      if (typeof n.n != "undefined") t = n.n[0];
      else if (typeof n.next != "undefined") t = n.next;
      else {
        for (t = n; typeof t.parent != "undefined"; )
          if (typeof t.parent.next != "undefined") {
            t = t.parent.next;
            break;
          } else t = t.parent;
        typeof t.parent == "undefined" && (t = null);
      }
      return t;
    }
    function ft(n) {
      var t = null;
      if (typeof n.previous != "undefined")
        for (t = n.previous; typeof t.n != "undefined" && t.n.length > 0; )
          t = t.n[t.n.length - 1];
      else typeof n.parent != "undefined" && (t = n.parent);
      return t;
    }
    function g(n, t) {
      var i = "",
        f = -1,
        o = t ? "%7C" : "|",
        r,
        e,
        u;
      for (
        n.n && n.n.length > 0
          ? ((i = n.toc.entries[n.i].title),
            t && (i = encodeURIComponent(i)),
            (f = 0))
          : (f = n.parent.n.indexOf(n) + 1),
          i.length > 0 && (i += o),
          i += "_____" + f,
          r = n.parent;
        r && typeof r.i != "undefined";
        r = r.parent
      )
        i == null && (i = ""),
          i.length > 0 && (i = o + i),
          (e = r.toc.entries[r.i]),
          e && ((u = e.title), t && (u = encodeURIComponent(u)), (i = u + i));
      return i;
    }
    function et(n, t, i) {
      t.GetToc(n.type, null, function (r) {
        var f, h, e, c, s, o;
        if (typeof r == "undefined") {
          i();
          return;
        }
        if (
          ((f = t.IsAutoMerged ? n.automerge : t.MergeNode),
          (h = r.tree),
          h.n !== undefined && f !== undefined)
        ) {
          var l = f.r == 1 || (t.IsAutoMerged && f.a == "replace"),
            a =
              l ||
              (t.IsAutoMerged && (f.a == "before-head" || f.a == "after-head")),
            v =
              l ||
              (t.IsAutoMerged && (f.a == "before-head" || f.a == "after-tail")),
            u = v ? f.parent : f;
          for (
            typeof u.n == "undefined" && (u.n = []),
              e = v ? u.n.indexOf(f) + (a ? 0 : 1) : a ? 0 : u.n.length,
              c = h.n.length,
              s = 0;
            s < c;
            s++
          )
            (h.n[s].parent = u), u.n.splice(e + s, 0, h.n[s]);
          l && u.n.splice(e + c, 1);
          e > 0 && ((u.n[e].previous = u.n[e - 1]), (u.n[e - 1].next = u.n[e]));
          o = e + c - (l ? 1 : 0) - 1;
          o >= 0 &&
            o + 1 < u.n.length &&
            ((u.n[o].next = u.n[o + 1]), (u.n[o + 1].previous = u.n[o]));
          t.IsAutoMerged &&
            ((n.automerge = u.n[e + c - 1]), (n.automerge.a = "after-tail"));
        }
        i();
      });
    }
    function c(n, t) {
      var i = n.documentElement.getAttribute(t);
      return nt(i);
    }
    function nt(n) {
      if (n == null) return null;
      var t = new MadCap.Utilities.Url(o);
      return t.IsAbsolute
        ? t.AddFile(n).ToRelative(document.location.href).FullPath
        : o + n;
    }
    function ot(n) {
      for (
        var s,
          t,
          r,
          u,
          v,
          i,
          c = $("CatapultSkin", n.documentElement),
          f = 0,
          y = c.length;
        f < y;
        f++
      ) {
        var e = c[f],
          l = $(e),
          p = l.attr("SkinID"),
          o = {};
        for (t = 0, r = e.attributes.length; t < r; t++)
          (i = e.attributes[t]), (o[i.name] = i.value);
        for (s = l.children(), t = 0, r = s.length; t < r; t++) {
          var h = s[t],
            b = h.nodeName,
            a = {};
          for (o[b] = a, u = 0, v = h.attributes.length; u < v; u++)
            (i = h.attributes[u]), (a[i.name] = i.value);
        }
        w.Add(p, o);
      }
    }
    function ht(n, t, i) {
      t.GetGlossary(function (t) {
        var u, r, e;
        if (typeof t == "undefined") {
          i();
          return;
        }
        for (
          n.chunks = n.chunks.concat(t.chunks), u = 0, r = 0;
          u < n.terms.length && r < t.terms.length;

        ) {
          var h = n.terms[u],
            f = t.terms[r],
            o = h.t,
            s = f.t;
          o.toLowerCase() == s.toLowerCase()
            ? (u++, r++)
            : o.toLowerCase() > s.toLowerCase()
            ? ((f.c += n.numchunks), n.terms.splice(u, 0, f), r++)
            : u++;
        }
        for (; r < t.terms.length; r++)
          (e = t.terms[r]), (e.c += n.numchunks), n.terms.push(e);
        n.numchunks = n.chunks.length;
        i();
      });
    }
    function ct(n, t, i) {
      t.GetIndex(function (t) {
        var e, f, h, c;
        if (typeof t == "undefined") {
          i();
          return;
        }
        for (
          n.chunks = n.chunks.concat(t.chunks), e = 0, f = 0;
          e < n.terms.length && f < t.terms.length;

        ) {
          var r = n.terms[e],
            u = t.terms[f],
            o = r.s || r.t,
            s = u.s || u.t;
          o == s && r.t == u.t
            ? (typeof r.c == "number" && (r.c = [r.c]),
              (h = u.c),
              typeof u.c == "number" && (h = [u.c]),
              $.each(h, function (t, i) {
                r.c.push(i + n.numchunks);
              }),
              (r.$ = r.$ === 1 && u.$ === 1 ? 1 : 0),
              e++,
              f++)
            : o.toLowerCase() > s.toLowerCase() ||
              (o.toLowerCase() == s.toLowerCase() &&
                r.t.toLowerCase() > u.t.toLowerCase())
            ? ((u.c += n.numchunks), n.terms.splice(e, 0, u), f++)
            : e++;
        }
        for (; f < t.terms.length; f++)
          (c = t.terms[f]), (c.c += n.numchunks), n.terms.push(c);
        n.numchunks = n.chunks.length;
        i();
      });
    }
    var e = this,
      a = n,
      o = new MadCap.Utilities.Url(i).ToFolder().ToFolder().FullPath,
      y = null,
      f = [],
      tt = r,
      it = u,
      b = null,
      v = null,
      p = !1,
      s = new MadCap.WebHelp.AliasFile(o + "Data/Alias.xml", this),
      rt = new MadCap.WebHelp.TocFile(this, MadCap.WebHelp.TocFile.TocType.Toc),
      h = null,
      ut = new MadCap.WebHelp.TocFile(
        this,
        MadCap.WebHelp.TocFile.TocType.BrowseSequence
      ),
      w = new MadCap.Utilities.Dictionary(),
      l = null;
    this.TargetType = null;
    this.DefaultStartTopic = null;
    this.InPreviewMode = null;
    this.LiveHelpOutputId = null;
    this.LiveHelpServer = null;
    this.LiveHelpEnabled = !1;
    this.IsWebHelpPlus = !1;
    this.ContentFolder = null;
    this.UseCustomTopicFileExtension = !1;
    this.CustomTopicFileExtension = null;
    this.IsMultilingual = !1;
    this.GlossaryUrl = null;
    this.SearchFilterSetUrl = null;
    this.SyncTOC = null;
    this.IndexPartialWordSearch = !0;
    this.GlossaryPartialWordSearch = !0;
    this.DefaultSkin = null;
    this.IsAutoMerged = !1;
    this.LanguageUrl = null;
    this.BreakpointsUrl = null;
    this.PreventExternalUrls = !1;
    this.IsResponsive = !1;
    this.SearchUrl = null;
    this.PulsePage = null;
    this.ScriptsFolderPath = null;
    this.LanguageCode = null;
    this.LanguageName = null;
    this.IncludeCSHRuntime = null;
    this.ShowMadCapBacklink = !1;
    this.LiveHelpServerType = null;
    this.OutputAnalyticsServer = null;
    this.OutputAnalyticsId = null;
    this.IsCentralHosted = !1;
    this.CentralLogoutLink = null;
    (this.CentralSettingsLink = null), (function () {})();
    this.Load = function (n) {
      MadCap.Utilities.Xhr.Load(
        i,
        !0,
        function (t) {
          function v() {
            a++;
            a == f.length && n();
          }
          function y(n, t) {
            if (f.length > 0) for (var i = 0; i < f.length; i++) f[i].Load(n);
            else t();
          }
          var a = 0,
            w,
            b,
            i,
            u,
            h,
            l,
            s,
            r;
          if (((p = t != null), !p)) {
            n();
            return;
          }
          if (
            ((this.LanguageCode = t.documentElement.getAttribute("xml:lang")),
            (this.LanguageName =
              t.documentElement.getAttribute("LanguageName")),
            (this.TargetType = t.documentElement.getAttribute("TargetType")),
            (this.DefaultStartTopic =
              t.documentElement.getAttribute("DefaultUrl")),
            (this.InPreviewMode = MadCap.Dom.GetAttributeBool(
              t.documentElement,
              "InPreviewMode",
              !1
            )),
            (this.LiveHelpOutputId =
              t.documentElement.getAttribute("LiveHelpOutputId")),
            (this.LiveHelpServer =
              t.documentElement.getAttribute("LiveHelpServer")),
            (this.LiveHelpServerType =
              t.documentElement.getAttribute("LiveHelpServerType")),
            (this.OutputAnalyticsServer = t.documentElement.getAttribute(
              "OutputAnalyticsServer"
            )),
            (this.OutputAnalyticsId =
              t.documentElement.getAttribute("OutputAnalyticsId")),
            (this.IsCentralHosted = MadCap.Dom.GetAttributeBool(
              t.documentElement,
              "IsCentralHosted",
              !1
            )),
            (this.CentralLogoutLink =
              t.documentElement.getAttribute("CentralLogoutLink")),
            (this.CentralSettingsLink = t.documentElement.getAttribute(
              "CentralSettingsLink"
            )),
            (this.LiveHelpEnabled =
              this.LiveHelpServerType == "Central"
                ? this.OutputAnalyticsServer != null
                : this.LiveHelpOutputId != null),
            (this.MoveContentToRoot = MadCap.Dom.GetAttributeBool(
              t.documentElement,
              "MoveOutputContentToRoot",
              !1
            )),
            (this.ReplaceReservedCharacters = MadCap.Dom.GetAttributeBool(
              t.documentElement,
              "ReplaceReservedCharacters",
              !1
            )),
            (this.MakeFileLowerCase = MadCap.Dom.GetAttributeBool(
              t.documentElement,
              "MakeFileLowerCase",
              !1
            )),
            (this.PreventExternalUrls = MadCap.Dom.GetAttributeBool(
              t.documentElement,
              "PreventExternalUrls",
              !1
            )),
            (this.IsResponsive = MadCap.Dom.GetAttributeBool(
              t.documentElement,
              "EnableResponsiveOutput",
              !1
            )),
            (this.IncludeGlossarySearchResults = MadCap.Dom.GetAttributeBool(
              t.documentElement,
              "IncludeGlossarySearchResults",
              !0
            )),
            (this.ResultsPerPage = MadCap.Dom.GetAttributeInt(
              t.documentElement,
              "ResultsPerPage",
              20
            )),
            (this.SearchEngine = MadCap.Dom.GetAttribute(
              t.documentElement,
              "SearchEngine"
            )),
            (this.IncludeCSHRuntime = MadCap.Dom.GetAttributeBool(
              t.documentElement,
              "IncludeCSHRuntime",
              !0
            )),
            (this.DebugMode = MadCap.Dom.GetAttributeBool(
              t.documentElement,
              "DebugMode",
              !1
            )),
            (this.HasELearning = MadCap.Dom.GetAttributeBool(
              t.documentElement,
              "HasELearning",
              !1
            )),
            (this.FeaturedSnippetsScopeID = MadCap.Dom.GetAttribute(
              t.documentElement,
              "FeaturedSnippetsScopeID"
            )),
            (this.KnowledgePanelScopeID = MadCap.Dom.GetAttribute(
              t.documentElement,
              "KnowledgePanelScopeID"
            )),
            (this.FeaturedSnippetsResults = MadCap.Dom.GetAttributeInt(
              t.documentElement,
              "FeaturedSnippetsResults",
              1
            )),
            (this.KnowledgePanelResults = MadCap.Dom.GetAttributeInt(
              t.documentElement,
              "KnowledgePanelResults",
              1
            )),
            this.SearchEngine == "Elasticsearch" &&
              ((w = t.documentElement.getElementsByTagName("Elasticsearch")),
              (this.Elasticsearch = w.item(0))),
            (b = MadCap.Dom.GetAttributeBool(
              t.documentElement,
              "ServerEnabled",
              !1
            )),
            (this.IsWebHelpPlus =
              (this.TargetType == "WebHelpPlus" || b) &&
              MadCap.String.StartsWith(document.location.protocol, "http", !1)),
            (i = ""),
            this.MoveContentToRoot || (i = "Content/"),
            this.MakeFileLowerCase && (i = i.toLowerCase()),
            (u = "MicroContent/"),
            this.MakeFileLowerCase && (u = u.toLowerCase()),
            (this.ContentFolder = i),
            (this.MicroContentFolder = u),
            (this.UseCustomTopicFileExtension = MadCap.Dom.GetAttributeBool(
              t.documentElement,
              "UseCustomTopicFileExtension",
              !1
            )),
            (this.CustomTopicFileExtension = MadCap.Dom.GetAttribute(
              t.documentElement,
              "CustomTopicFileExtension"
            )),
            (this.IsMultilingual = MadCap.Dom.GetAttributeBool(
              t.documentElement,
              "Multilingual",
              !1
            )),
            (this.ShowMadCapBacklink = MadCap.Dom.GetAttributeBool(
              t.documentElement,
              "ShowMadCapBacklink",
              !1
            )),
            (this.GlossaryUrl = c(t, "Glossary")),
            (this.TocUrl = c(t, "Toc")),
            (this.SearchUrl = c(t, "SearchUrl")),
            (this.PulsePage = c(t, "PulsePage")),
            (this.BrowseSequencesUrl = c(t, "BrowseSequence")),
            (this.IndexUrl = c(t, "Index")),
            (this.SearchFilterSetUrl = c(t, "SearchFilterSet")),
            (this.LanguageUrl = o + "Data/Language.js"),
            (this.BreakpointsUrl = o + "Data/Breakpoints.js"),
            (this.ScriptsFolderPath = t.documentElement.getAttribute(
              "PathToScriptsFolder"
            )),
            (this.HasBrowseSequences =
              t.documentElement.getAttribute("BrowseSequence") != null),
            (this.HasToc = t.documentElement.getAttribute("Toc") != null),
            (this.TopNavTocPath =
              t.documentElement.getAttribute("TopNavTocPath") == "true"),
            (this.LiveHelpServerType =
              t.documentElement.getAttribute("LiveHelpServerType")),
            (this.OutputAnalyticsServer = t.documentElement.getAttribute(
              "OutputAnalyticsServer"
            )),
            ot.call(this, t),
            (this.DefaultSkin = this.GetSkin(
              $(t.documentElement).attr("SkinID")
            )),
            (this.SyncTOC =
              this.DefaultSkin != null &&
              MadCap.String.ToBool(this.DefaultSkin.AutoSyncTOC, !1)),
            (this.IndexPartialWordSearch =
              this.DefaultSkin == null ||
              MadCap.String.ToBool(
                this.DefaultSkin.IndexPartialWordSearch,
                !0
              )),
            (this.GlossaryPartialWordSearch =
              this.DefaultSkin == null ||
              MadCap.String.ToBool(
                this.DefaultSkin.GlossaryPartialWordSearch,
                !0
              )),
            (this.DisplayCommunitySearchResults =
              this.DefaultSkin == null ||
              MadCap.String.ToBool(
                this.DefaultSkin.DisplayCommunitySearchResults,
                !0
              )),
            (this.CommunitySearchResultsCount = 3),
            this.DefaultSkin != null &&
              (this.CommunitySearchResultsCount = MadCap.String.ToInt(
                this.DefaultSkin.CommunitySearchResultsCount,
                3
              )),
            (h = t.getElementsByTagName("Subsystems")),
            h.length > 0 && h[0].getElementsByTagName("Url").length > 0)
          )
            for (
              l = t
                .getElementsByTagName("Subsystems")[0]
                .getElementsByTagName("Url"),
                s = 0;
              s < l.length;
              s++
            )
              if (((r = l[s]), r)) {
                var k = r.getAttribute("Source"),
                  d = k.substring(0, k.lastIndexOf("/") + 1),
                  g = r.getAttribute("TocPath"),
                  nt = r.getAttribute("BrowseSequencePath"),
                  tt = new MadCap.WebHelp.HelpSystem(
                    this,
                    o + d,
                    o + d + "Data/HelpSystem.xml",
                    g,
                    nt
                  );
                f.push(tt);
              }
          this.LoadBreakpoints(function () {
            e.LoadLanguage(function () {
              !e.IsAutoMerged && e.IsWebHelpPlus
                ? MadCap.Utilities.Xhr.CallWebService(
                    e.GetPath() + "Service/Service.asmx/GetSubsystems",
                    !0,
                    function (t) {
                      t &&
                        $.each(t.documentElement.childNodes, function (n, t) {
                          t.nodeName == "Subsystems" &&
                            $.each(t.childNodes, function (n, t) {
                              var r, i, u;
                              t.nodeName == "Url" &&
                                ((r = t.getAttribute("Source")),
                                (i = r.substring(0, r.lastIndexOf("/") + 1)),
                                i &&
                                  ((u = new MadCap.WebHelp.HelpSystem(
                                    e,
                                    o + i,
                                    o + i + "Data/HelpSystem.xml",
                                    null,
                                    null
                                  )),
                                  (u.IsAutoMerged = !0),
                                  f.push(u)));
                            });
                        });
                      y(v, n);
                    }
                  )
                : y(v, n);
            });
          });
        },
        null,
        this
      );
    };
    this.GetExists = function () {
      return p;
    };
    this.GetMasterHelpSystem = function () {
      for (
        var t = this, n = t.GetParentSubsystem();
        n != null;
        n = n.GetParentSubsystem()
      )
        t = n;
      return t;
    };
    this.GetParentSubsystem = function () {
      return a;
    };
    this.GetPath = function () {
      return o;
    };
    this.GetCurrentTopicPath = function () {
      return MadCap.Utilities.Url.GetDocumentUrl().ToRelative(
        MadCap.Utilities.Url.GetAbsolutePath(o)
      ).FullPath;
    };
    this.GetAbsolutePath = function () {
      if (y == null) {
        var n = new MadCap.Utilities.Url(o);
        y = n.IsAbsolute
          ? n.FullPath
          : new MadCap.Utilities.Url(document.location.href).Path;
      }
      return y;
    };
    this.GetContentPath = function () {
      return o + this.ContentFolder;
    };
    this.GetSkin = function (n) {
      return w.GetItem(n);
    };
    this.GetSkinByName = function (n) {
      for (var i, r = this.GetSkins(), t = 0; t < r.length; t++)
        if (((i = r[t]), i.Name == n)) return i;
      return null;
    };
    this.GetCurrentSkin = function () {
      var i = MadCap.Utilities.Url.GetDocumentUrl(),
        r = i.QueryMap.GetItem("skinName") || i.HashMap.GetItem("skinName"),
        u,
        t,
        n;
      return r
        ? ((n = this.GetSkin(r)), n || (n = this.GetSkinByName(r)), n)
        : ((u = i.QueryMap.GetItem("cshid")),
          u && ((t = s.LookupID(u)), t.Skin))
        ? ((n = this.GetSkin(t.Skin)), n || (n = this.GetSkinByName(t.Skin)), n)
        : this.DefaultSkin;
    };
    this.GetAppliedSkinPath = function (n) {
      var r = new MadCap.Utilities.Url(document.location.href),
        i = this.GetCurrentSkin(),
        u = new MadCap.Utilities.Url(n),
        f = u.QueryMap.GetLength() > 0 ? "&" : "?",
        e = this.DefaultSkin !== i ? f + "skinName=" + i.SkinID : "",
        t = r.ToFolder().CombinePath(n);
      return t.PlainPath + t.Query + e + t.Fragment;
    };
    this.GetTocPath = function (n) {
      return n == "toc" ? tt : it;
    };
    this.GetFullTocPath = function (n, t) {
      var r = this.GetHelpSystem(t),
        i;
      return r == null
        ? null
        : ((i = {}),
          (i.tocPath = this.GetTocPath(n)),
          r.ComputeTocPath(n, i),
          i.tocPath);
    };
    this.GetTopicPath = function (n, t) {
      var f = this.GetPath(),
        r = this.GetMasterHelpSystem(),
        u = new MadCap.Utilities.Url(document.location.href).ToPath(),
        e = u.CombinePath(f + "Data/").CombinePath(n),
        i = e.ToRelative(u);
      return (
        t ||
          !MadCap.Utilities.HasRuntimeFileType("TriPane") ||
          r.MoveContentToRoot ||
          (i = i.ToRelative(r.ContentFolder)),
        i
      );
    };
    this.GetTransparentImagePath = function () {
      return (
        this.GetPath() + "Skins/Default/Stylesheets/Images/transparent.gif"
      );
    };
    this.GetPatchedPath = function (n) {
      return (
        this.ReplaceReservedCharacters &&
          (n = MadCap.Utilities.Url.ReplaceReservedCharacters(n, "_")),
        this.MakeFileLowerCase && (n = n.toLowerCase()),
        this.UseCustomTopicFileExtension &&
          (n = new MadCap.Utilities.Url(n).ToExtension(
            this.CustomTopicFileExtension
          ).FullPath),
        n
      );
    };
    this.GetAbsoluteTopicPath = function (n) {
      var t = new MadCap.Utilities.Url(n),
        i = new MadCap.Utilities.Url(document.location.href).ToPlainPath();
      return i.CombinePath(this.GetTopicPath("../" + t.FullPath).FullPath);
    };
    this.ComputeTocPath = function (n, t) {
      if (a) {
        var i = this.GetTocPath(n);
        MadCap.String.IsNullOrEmpty(i) ||
          (t.tocPath = t.tocPath ? i + "|" + t.tocPath : i);
        a.ComputeTocPath(n, t);
      }
    };
    this.GetHelpSystem = function (n) {
      for (var t = null, i = 0; i < f.length; i++)
        if (((t = f[i].GetHelpSystem(n)), t != null)) return t;
      return MadCap.String.StartsWith(n, o, !1) ? this : null;
    };
    this.GetSubsystem = function (n) {
      return f[n];
    };
    this.GetTestData = function () {
      function u() {
        return {
          testData: {
            numOfTopics: 1,
            nonTestQuestionAnswer: {},
            testQuestionAnswer: {},
            lastTopics: {},
            unlinkedEntries: [],
          },
          testTopics: [],
          resultsConfig: f(),
        };
      }
      function e(n) {
        const r = t(n.testTopics),
          u = t(n.nonTestTopics),
          o = t(n.nonTocTopics),
          e = Object.keys(r),
          s = Object.keys(u),
          h = {
            passedUrl: n.testData.p,
            failedUrl: n.testData.f,
            passScore: n.testData.s / 100,
            percComplete: parseInt(n.testData.pc) / 100,
            title: n.testData.n,
            description: n.testData.d,
            id: n.testData.id,
            max: n.testData.m,
            randomize: n.testData.ra === "true",
            testRetries: parseInt(n.testData.tr),
            testQuestionAnswer: i(r),
            nonTestQuestionAnswer: i(u),
            nonTocQuestionAnswer: i(o),
            lastTopics: n.testData.lt,
            numOfTopics: n.testData.nt,
            unlinkedEntries: n.testData.ut,
          },
          c = f(n);
        return {
          useQuizForSuccess: n.q,
          numTopics: e.length + s.length,
          testTopics: e,
          testData: h,
          resultsConfig: c,
        };
      }
      function f(n) {
        return n && n.tr
          ? {
              ShowPassFail: n.tr.pf === "1",
              ShowScore: n.tr.s === "1",
              UsePercentage: n.tr.p === "1",
              ShowQuestions: n.tr.q === "1",
              ShowUserAnswers: n.tr.ua === "1",
              ShowCorrectAnswers: n.tr.ca === "1",
              ShowQuestionFeedback: n.tr.rf === "1",
            }
          : {
              ShowPassFail: !0,
              ShowScore: !0,
              UsePercentage: !0,
              ShowQuestions: !0,
              ShowUserAnswers: !0,
              ShowCorrectAnswers: !0,
              ShowQuestionFeedback: !0,
            };
      }
      function t(n) {
        var i = {},
          t,
          r;
        for (t in n) (r = o(t)), (i[r] = n[t]);
        return i;
      }
      function o(t) {
        var i = n.GetPath() + encodeURI(t);
        return MadCap.Utilities.Url.GetAbsolutePath(i);
      }
      function i(n) {
        var u = {},
          r,
          t,
          i;
        for (r in n) {
          t = n[r];
          for (id in t.questions)
            (i = t.questions[id]),
              (i.title = t.title),
              (i.sourceUrl = r),
              (u[id] = i);
        }
        return u;
      }
      var n = this,
        r;
      if (!h) {
        if (((h = $.Deferred()), !n.HasELearning))
          return h.resolve(u()), h.promise();
        r = n.GetPath() + "Data/test_data.js";
        require([r], function (n) {
          h.resolve(e(n));
        }, function () {
          console.log("Test Data not loaded.");
          h.resolve(u());
        });
      }
      return h.promise();
    };
    this.GetMergedAliasIDs = function (n) {
      s.Load(function () {
        function r(t) {
          for (var r = 0, f = t.length; r < f; r++) i[i.length] = t[r];
          e++;
          e == u + 1 && n(i);
        }
        var i = [],
          u = f.length,
          e = 0,
          o = s.GetIDs(),
          t;
        for (r(o), t = 0; t < u; t++) f[t].GetMergedAliasIDs(r);
      });
    };
    this.GetMergedAliasNames = function (n) {
      s.Load(function () {
        function u(t) {
          for (var u = 0, f = t.length; u < f; u++) i[i.length] = t[u];
          e++;
          e == r + 1 && n(i);
        }
        var i = [],
          r = f.length,
          e = 0,
          o = s.GetNames(),
          t;
        for (u(o), t = 0, r = f.length; t < r; t++) f[t].GetMergedAliasNames(u);
      });
    };
    this.LookupCSHID = function (n, t) {
      s.Load(function () {
        function c(n) {
          if (!u) {
            if ((o++, n.Found)) {
              u = !0;
              t(n);
              return;
            }
            o == h && t(i);
          }
        }
        var i = s.LookupID(n),
          u,
          o,
          r,
          h;
        if (i.Found) {
          i.Topic = e.GetPath() + i.Topic;
          t(i);
          return;
        }
        if (f.length == 0) {
          t(i);
          return;
        }
        for (u = !1, o = 0, r = 0, h = f.length; r < h; r++)
          f[r].LookupCSHID(n, c);
      });
    };
    this.GetTocFile = function () {
      return rt;
    };
    this.GetBrowseSequenceFile = function () {
      return ut;
    };
    this.IsMerged = function () {
      return f.length > 0;
    };
    this.IsRoot = function () {
      return a == null;
    };
    this.IsTabletLayout = function (n) {
      return this.isGivenLayout("Tablet", n);
    };
    this.getLayout = function (n) {
      return this.isGivenLayout("Mobile", n)
        ? "Mobile"
        : this.isGivenLayout("Tablet", n)
        ? "Tablet"
        : "Web";
    };
    this.isGivenLayout = function (n, t) {
      if (this.IsResponsive && this.Breakpoints) {
        var i = this.Breakpoints.mediums[n],
          r = this.Breakpoints.prop;
        return r == "max-width"
          ? (t || (t = window.innerWidth), t <= i)
          : window.matchMedia("(" + r + ": " + i + "px)").matches;
      }
      return !1;
    };
    this.ProcessMicroContentXhtml = function (n, t) {
      var i = MadCap.Utilities.SanitizeHtml("<div>" + n + "</div>"),
        r = new MadCap.Utilities.Url(t).ToFolder(),
        u = MadCap.Utilities.HasRuntimeFileType("TriPane"),
        f = u ? "#" : "";
      return MadCap.Utilities.FixLinks(i, r, f, this.ContentFolder);
    };
    this.LoadLanguage = function (n, t) {
      var i = this;
      require([this.LanguageUrl], function (r) {
        i.Language = r;
        n.call(t, r);
      });
    };
    this.LoadBreakpoints = function (n, t) {
      if (this.IsResponsive && this.IsRoot()) {
        var i = this;
        require([this.BreakpointsUrl], function (r) {
          i.Breakpoints = r;
          n.call(t, r);
        });
      } else n.call(t, null);
    };
    this.LoadConcepts = function () {
      var n = $.Deferred();
      return (
        require([o + "Data/Concepts.js"], function (t) {
          v = t;
          n.resolve(v);
        }),
        n.promise()
      );
    };
    this.LoadAllConcepts = function (n) {
      function i() {
        u++;
        u == e + 1 && n();
      }
      var u = 0,
        e = f.length,
        t,
        r;
      for (this.LoadConcepts().then(i), t = 0; t < e; t++) {
        if (((r = f[t]), !r.GetExists())) {
          i();
          continue;
        }
        r.LoadAllConcepts(i);
      }
    };
    this.GetConceptsLinks = function (n) {
      var i = $.Deferred(),
        t = [],
        s,
        r,
        u,
        e;
      if (this.IsWebHelpPlus) {
        function r(n) {
          for (
            var f = n.documentElement.getElementsByTagName("Url"),
              s = f.length,
              u = 0;
            u < s;
            u++
          ) {
            var e = f[u],
              h = e.getAttribute("Title"),
              r = e.getAttribute("Source");
            r = o + (r.charAt(0) == "/" ? r.substring(1, r.length) : r);
            t[t.length] = { Title: h, Link: r };
          }
          i.resolve(t);
        }
        MadCap.Utilities.Xhr.CallWebService(
          o + "Service/Service.asmx/GetTopicsForConcepts?Concepts=" + n,
          !0,
          r
        );
      } else {
        function o(n) {
          t = t.Union(n);
        }
        if (((n = n.replace("\\;", "%%%%%")), n == "")) i.resolve(t);
        else {
          for (
            s = n.split(";"),
              r = [],
              r.push(this.GetConceptsLinksLocal(s).then(o)),
              u = 0;
            u < f.length;
            u++
          )
            (e = f[u]), e.GetExists() && r.push(e.GetConceptsLinks(n).then(o));
          $.when.apply(this, r).done(function () {
            i.resolve(t);
          });
        }
      }
      return i.promise();
    };
    this.GetConceptsLinksLocal = function (n) {
      for (var t, u, i = [], f = [], r = 0; r < n.length; r++)
        (t = n[r]),
          (t = t.replace("%%%%%", ";")),
          f.push(
            this.GetConceptLinks(t).then(function (n) {
              i = i.concat(n);
            })
          );
      return (
        (u = $.Deferred()),
        $.when.apply(this, f).done(function () {
          u.resolve(i);
        }),
        u.promise()
      );
    };
    this.LoadTopicChunk = function (n) {
      var t = $.Deferred();
      return (
        MadCap.Utilities.Require(
          [o + "Data/SearchTopic_Chunk" + n + ".js"],
          function (n) {
            t.resolve(n);
          }
        ),
        t.promise()
      );
    };
    this.GetSearchChunkIds = function (n) {
      var t = $.Deferred();
      return (
        MadCap.Utilities.Require([o + "Data/Search.js"], function (i) {
          for (var f = i.t, u = [], r = 0; r < n.length; r++)
            u.push(
              MadCap.Utilities.GetChunkId(f, n[r], function (n, t) {
                return n < t ? -1 : n === t ? 0 : 1;
              })
            );
          t.resolve(u);
        }),
        t.promise()
      );
    };
    this.GetConceptLinks = function (n) {
      var t = $.Deferred(),
        i = this;
      return (
        this.LoadConcepts().done(function () {
          var u = [],
            r = v[n];
          r
            ? i.GetSearchChunkIds(r).then(function (n) {
                for (var o, e = [], f = 0; f < n.length; f++)
                  (o = n[f]),
                    e.push(
                      i.LoadTopicChunk(o).then(function (n) {
                        for (var t, f = 0; f < r.length; f++)
                          (t = n[r[f]]),
                            t && ((t.Url = i.GetTopicPath(t.u)), u.push(t));
                      })
                    );
                $.when.apply(this, e).done(function () {
                  t.resolve(u);
                });
              })
            : t.resolve(u);
        }),
        t.promise()
      );
    };
    this.LoadToc = MadCap.Utilities.Memoize(function (n) {
      var t = $.Deferred(),
        i = n[0],
        r = n[1];
      return (
        this.GetToc(i, r, function (n) {
          t.resolve(n);
        }),
        t.promise()
      );
    });
    this.GetToc = function (n, t, i) {
      var r = this,
        u = this[n + "Url"];
      t && (u = nt(t));
      require([u], function (t) {
        var v, h, e, c, l, a, o, s;
        if (typeof t == "undefined" || (r[n] && t.chunks)) {
          i(t);
          return;
        }
        for (
          r[n] = t,
            t.type = n,
            t.helpSystem = r,
            t.chunks = [],
            t.entries = [],
            t.nodes = {},
            v = new MadCap.Utilities.Url(u).ToFolder(),
            h = 0;
          h < t.numchunks;
          h++
        )
          t.chunks[h] = {
            path: v.AddFile(t.prefix + h + ".js").FullPath,
            loaded: !1,
          };
        for (e = t.tree, c = {}, t.automerge = t.tree; e != null; ) {
          if (
            ((e.toc = t),
            (e.childrenLoaded = !1),
            (t.nodes[e.i] = e),
            typeof e.m != "undefined" && (c[e.m] = e),
            typeof e.a != "undefined" && (t.automerge = e),
            typeof e.n != "undefined")
          )
            for (o = 0; o < e.n.length; o++)
              (e.n[o].parent = e),
                o < e.n.length - 1 && (e.n[o].next = e.n[o + 1]),
                o > 0 && (e.n[o].previous = e.n[o - 1]);
          e = d(e);
        }
        for (l = [], a = !1, o = 0; o < f.length; o++)
          (s = f[o]),
            s.GetExists()
              ? (s.IsAutoMerged ? (a = !0) : (s.MergeNode = c[o]),
                (s.IsAutoMerged || typeof s.MergeNode != "undefined") &&
                  l.push(s))
              : k(c[o]);
        if (
          (a || t.automerge.a != "replace" || k(t.automerge), l.length == 0)
        ) {
          i(t);
          return;
        }
        MadCap.Utilities.AsyncForeach(
          l,
          function (n, i) {
            et(t, n, i);
          },
          function () {
            i(t);
          }
        );
      });
    };
    this.LoadTocChunk = function (n, t) {
      var i = $.Deferred();
      return (
        require([n.chunks[t].path], function (r) {
          var u, f;
          if (!n.chunks[t].loaded) {
            for (u in r)
              for (f = 0; f < r[u].i.length; f++)
                n.entries[r[u].i[f]] = {
                  link: u,
                  title: r[u].t[f],
                  bookmark: r[u].b[f],
                };
            n.chunks[t].loaded = !0;
          }
          return i.resolve(r);
        }),
        i.promise()
      );
    };
    this.GetTocEntryHref = function (n, t, i, r) {
      var e = null,
        a = n.toc,
        c = a.entries[n.i],
        s,
        p,
        h,
        o;
      if (
        c &&
        ((s = c.link + c.bookmark), typeof n.m == "undefined" && s != "___")
      ) {
        var f = null,
          u = new MadCap.Utilities.Url(s),
          v = a.helpSystem,
          y = v.GetPath(),
          l = v.GetMasterHelpSystem().GetContentPath(),
          w = typeof n.f != "undefined";
        u.IsAbsolute
          ? (f = u)
          : MadCap.String.IsNullOrEmpty(y)
          ? ((u = u.ToRelative("/" + l)), (f = u))
          : ((u = new MadCap.Utilities.Url(y).CombinePath(s)),
            (f = u.ToRelative(l)));
        e =
          w || !i
            ? f.IsAbsolute
              ? f.FullPath
              : l + f.FullPath
            : MadCap.Utilities.HasRuntimeFileType("TriPane")
            ? "#" + f.FullPath
            : u.FullPath;
      }
      return (
        e != null &&
          t &&
          r &&
          ((p =
            window.name == "topic" &&
            !MadCap.Utilities.HasRuntimeFileType("Default")),
          (h = g(n, !0)),
          MadCap.Utilities.HasRuntimeFileType("TriPane")
            ? (e += encodeURI("?" + t + "Path=" + h))
            : ((o = new MadCap.Utilities.Url(e)),
              (e = p
                ? o.PlainPath + encodeURI("?" + t + "Path=" + h) + o.Fragment
                : o.PlainPath + "?" + (t + "Path=" + h) + o.Fragment))),
        e
      );
    };
    this.LoadTocDataFromQuery = function () {
      var t = this.GetMasterHelpSystem(),
        f = t.GetContentPath(),
        n = new MadCap.Utilities.Url(document.location.href),
        i,
        r,
        u;
      return (
        n.isFolder &&
          ((i = new MadCap.Utilities.Url(t.DefaultStartTopic).Extension),
          (n = n.AddFile("default." + i))),
        (r = n.ToFolder().CombinePath(f)),
        (u = n.ToRelative(r)),
        this.GetTocData(new MadCap.Utilities.Url(u.FullPath))
      );
    };
    this.GetTocData = function (n) {
      var i = null,
        r = null,
        u = null,
        t = MadCap.Utilities.HasRuntimeFileType("TriPane"),
        f;
      if (
        (t &&
          !MadCap.String.IsNullOrEmpty(n.Fragment) &&
          n.Fragment.length > 1) ||
        !t
      ) {
        if (
          ((f =
            t &&
            !(
              n.QueryMap.GetItem("TocPath") ||
              n.QueryMap.GetItem("BrowseSequencesPath")
            ) &&
            !MadCap.String.IsNullOrEmpty(n.Fragment)
              ? new MadCap.Utilities.Url(n.Fragment)
              : n),
          (r = f.QueryMap.GetItem("TocPath")),
          r != null
            ? (i = "Toc")
            : ((u = f.QueryMap.GetItem("BrowseSequencesPath")),
              u != null && (i = "BrowseSequences")),
          n.HashMap.GetItem("cshid") == null)
        ) {
          var o = n.Query.indexOf("?"),
            s = n.Query.lastIndexOf("?"),
            e = "";
          o != s && (e = n.Query.substr(o, s));
          t && (n = new MadCap.Utilities.Url(n.Fragment.substr(1)));
          MadCap.String.IsNullOrEmpty(e) || (n.Query = e);
        }
      } else
        n = new MadCap.Utilities.Url(this.DefaultStartTopic).ToRelative(
          this.GetContentPath()
        );
      return { TocType: i, TocPath: r, BrowseSequencesPath: u, Href: n };
    };
    this.FindTocNode = function (n, t, i, r) {
      e.FindNode("Toc", n, t, i, r);
    };
    this.FindBrowseSequenceNode = function (n, t, i) {
      e.FindNode("BrowseSequences", n, t, i);
    };
    this.FindNode = function (n, t, i, r, u) {
      e.FindNodeInToc(n, t, i, r, u, !0);
    };
    this.FindNodeInToc = function (n, t, i, r, u, o) {
      e.LoadToc([n, u]).then(function (u) {
        var l = new MadCap.Utilities.Url(
            e.GetMasterHelpSystem().GetContentPath()
          ),
          s = i,
          a = 0,
          h,
          c;
        for (
          i.IsAbsolute ||
            ((s = MadCap.String.IsNullOrEmpty(l.FullPath)
              ? i
              : l.CombinePath(i)),
            (s = s.ToRelative(e.GetPath())),
            (s = new MadCap.Utilities.Url("/" + s.FullPath))),
            c = 1;
          c < u.chunkstart.length;
          c++
        )
          u.chunkstart[c] <= decodeURIComponent(s.PlainPath) && a++;
        e.LoadTocChunk(u, a).then(function (e) {
          var l = e[decodeURIComponent(s.PlainPath)],
            a,
            y,
            v,
            p,
            c;
          if (typeof l != "undefined") {
            if (((a = []), h || (h = u.nodes[l.i[0]]), t))
              for (
                y = MadCap.Utilities.HasRuntimeFileType("TriPane"), c = 0;
                c < l.i.length;
                c++
              )
                (v = g(u.nodes[l.i[c]])),
                  (p =
                    y || MadCap.Topic.IsEmbeddedTopic()
                      ? v
                      : MadCap.Utilities.Url.GetSafetyProcessedComponent(v)),
                  p == t && a.push(l.i[c]);
            else
              for (c = 0; c < l.i.length; c++)
                l.b[c].toLowerCase() ==
                  decodeURIComponent(s.Fragment).toLowerCase() &&
                  a.push(l.i[c]);
            if (a.length) {
              r(u.nodes[a.pop()]);
              return;
            }
          }
          f.length > 0 && o
            ? MadCap.Utilities.AsyncForeach(
                f,
                function (u, f) {
                  u.FindNode(n, t, i, function (n) {
                    if (typeof n != "undefined") {
                      r(n);
                      return;
                    }
                    f();
                  });
                },
                function () {
                  r(h);
                }
              )
            : r(h);
        });
      });
    };
    this.NodeDepth = function (n) {
      for (var t = 1; n.parent && n.c !== undefined; ) t++, (n = n.parent);
      return t;
    };
    this.LoadGlossary = function (n, t) {
      if (typeof this.Glossary != "undefined") {
        n.call(t, this.Glossary);
        return;
      }
      var i = this;
      this.GetGlossary(function (r) {
        var u, f;
        if (r && r.terms)
          for (r.termMap = Object.create(null), u = 0; u < r.terms.length; u++)
            (f = r.terms[u]), (r.termMap[f.t.toLowerCase()] = f);
        i.Glossary = r;
        n.call(t, r);
      });
    };
    this.GetGlossary = function (n) {
      var t = this;
      require([this.GlossaryUrl], function (i) {
        function l() {
          h++;
          h == o && n(i);
        }
        var h, o, c, s, r, u;
        if (typeof i == "undefined") {
          n(i);
          return;
        }
        for (
          h = 0,
            o = 0,
            i.chunks = [],
            c = new MadCap.Utilities.Url(e.GlossaryUrl).ToFolder(),
            s = 0;
          s < i.numchunks;
          s++
        )
          i.chunks.push({
            helpSystem: t,
            path: c.AddFile(i.prefix + s + ".js").FullPath,
          });
        for (r = 0; r < f.length; r++) ((u = f[r]), u.GetExists()) && o++;
        if (o == 0) {
          n(i);
          return;
        }
        for (r = 0; r < f.length; r++)
          ((u = f[r]), u.GetExists()) && ht(i, u, l);
      });
    };
    this.SearchGlossary = function (n) {
      var t = $.Deferred(),
        i = this;
      return (
        this.LoadGlossary(function (i) {
          var u = !1,
            r,
            f;
          i &&
            i.termMap &&
            ((r = i.termMap[n.toLowerCase()]),
            (u = typeof r != "undefined"),
            u &&
              ((f = i.chunks[r.c]),
              require([f.path], function (n) {
                var i = { term: r.t, definition: n[r.t].d, link: n[r.t].l },
                  u,
                  e;
                i.link
                  ? ((u = f.helpSystem),
                    (e = new MadCap.Utilities.Url("../").CombinePath(
                      i.link
                    ).FullPath),
                    (i.link = u.GetTopicPath(e).FullPath),
                    u.SearchDB.LoadTopicByUrl(e).done(function (n, r) {
                      r && (i.abstractText = r.a);
                      t.resolve(i);
                    }))
                  : t.resolve(i);
              })));
          u || t.resolve();
        }, this),
        t.promise()
      );
    };
    this.LoadIndex = function (n, t) {
      if (typeof this.Index != "undefined") {
        n.call(t, this.Index);
        return;
      }
      var i = this;
      this.GetIndex(function (r) {
        i.Index = r;
        n.call(t, r);
      });
    };
    this.GetIndex = function (n) {
      var t = this;
      require([this.IndexUrl], function (i) {
        function l() {
          h++;
          h == o && n(i);
        }
        var h, o, c, s, r, u;
        if (typeof i == "undefined") {
          n(i);
          return;
        }
        for (
          h = 0,
            o = 0,
            i.chunks = [],
            c = new MadCap.Utilities.Url(e.IndexUrl).ToFolder(),
            s = 0;
          s < i.numchunks;
          s++
        )
          i.chunks.push({
            helpSystem: t,
            path: c.AddFile(i.prefix + s + ".js").FullPath,
          });
        for (r = 0; r < f.length; r++) ((u = f[r]), u.GetExists()) && o++;
        if (o == 0) {
          n(i);
          return;
        }
        for (r = 0; r < f.length; r++)
          ((u = f[r]), u.GetExists()) && ct(i, u, l);
      });
    };
    this.LoadRootIndexEntry = function (n, t) {
      if (n.loaded) {
        t && t(n);
        return;
      }
      this.LoadIndex(function (i) {
        var r = typeof n.c == "number" ? [n.c] : n.c;
        MadCap.Utilities.AsyncForeach(
          r,
          function (t, r) {
            var u = i.chunks[t];
            require([u.path], function (t) {
              var i = t[n.t];
              e.SetIndexEntryHelpSystem(i, u.helpSystem);
              e.MergeIndexEntries(n, i);
              r();
            });
          },
          function () {
            e.LoadIndexEntry(n);
            t && t(n);
          }
        );
      });
    };
    this.SetIndexEntryHelpSystem = function (n, t) {
      n.l &&
        $.each(n.l, function (n, i) {
          i.helpSystem = t;
        });
      n.e &&
        $.each(n.e, function (n, i) {
          e.SetIndexEntryHelpSystem(i, t);
        });
    };
    this.LoadIndexEntry = function (n) {
      if (n.l) {
        var t = [];
        $.each(n.l, function (n, i) {
          var r = {
            Title: i.t,
            Link: i.helpSystem.GetTopicPath(".." + i.u).FullPath,
          };
          t[t.length] = r;
        });
        n.linkList = e.SortLinkList(t);
      }
      n.e &&
        $.each(n.e, function (n, t) {
          e.LoadIndexEntry(t);
        });
      n.loaded = !0;
    };
    this.MergeIndexEntries = function (n, t) {
      if (
        (t.l && (n.l = typeof n.l == "undefined" ? t.l : n.l.concat(t.l)), t.r)
      )
        if (
          (typeof n.r == "undefined"
            ? (n.r = t.r)
            : (n.r == "SeeAlso" || t.r == "SeeAlso") && (n.r = "SeeAlso"),
          typeof n.f == "undefined")
        )
          n.f = t.f;
        else {
          var i = n.f.split(";"),
            r = t.f.split(";");
          $.each(r, function (n, t) {
            $.inArray(i, t) && i.push(t);
          });
          i.sort(function (n, t) {
            var i = n.toLowerCase(),
              r = t.toLowerCase();
            return i < r ? -1 : i > r ? 1 : 0;
          });
          n.f = i.join("; ");
        }
      t.e &&
        (typeof n.e == "undefined" && (n.e = {}),
        $.each(t.e, function (t, i) {
          typeof n.e[t] != "undefined"
            ? e.MergeIndexEntries(n.e[t], i)
            : (n.e[t] = i);
        }));
    };
    this.FindIndexEntry = function (n, t) {
      e.LoadIndex(function (i) {
        i.entries ||
          ((i.entries = {}),
          $.each(i.terms, function (n, t) {
            i.entries[t.t] = t;
          }));
        var r = n.split(":"),
          f = r.length,
          u = i.entries[r[0]];
        u
          ? e.LoadRootIndexEntry(u, function (n) {
              for (var i = n, u = 1; u < f; u++)
                if (((i = i.e[r[u]]), !i)) break;
              t && t(n, i);
            })
          : t && t();
      });
    };
    this.SortLinkList = function (n) {
      return (
        n.sort(function (n, t) {
          var i = n.Title.toLowerCase(),
            r = t.Title.toLowerCase();
          return i < r ? -1 : i > r ? 1 : 0;
        }),
        n
      );
    };
    this.GetSearchDBs = function (n) {
      var t = [],
        i = this;
      require([o + "Data/Search.js"], function (r) {
        function o(i) {
          if (i != null) for (var r = 0; r < i.length; r++) t[t.length] = i[r];
          s++;
          s == u && n(t);
        }
        var s = 0,
          u = f.length,
          e = new MadCap.WebHelp.Search.SearchDB(i);
        i.SearchDB = e;
        t[t.length] = e;
        e.Load(r, function () {
          var s = r.pm,
            i,
            e;
          if (s || u == 0) n(t);
          else
            for (i = 0; i < u; i++) {
              if (((e = f[i]), !e.GetExists())) {
                o(null);
                continue;
              }
              e.GetSearchDBs(o);
            }
        });
      });
    };
    this.GetConcepts = function () {
      return v;
    };
    this.GetSearchFilters = function () {
      return b.map;
    };
    this.ParseSearchFilterDoc = function (n) {
      var i, t;
      if (((filterMap = Object.create(null)), n != null))
        for (
          i = n.getElementsByTagName("SearchFilter"), t = 0;
          t < i.length;
          t++
        ) {
          var r = i[t],
            f = r.getAttribute("Name"),
            e = r.getAttribute("Order"),
            u = r.getAttribute("Concepts");
          u && (filterMap[f] = { c: u, o: e, group: 0 });
        }
      return filterMap;
    };
    this.LoadSearchFiltersLocal = function () {
      var n = $.Deferred();
      return (
        require([this.SearchFilterSetUrl], function (t) {
          var i = null;
          t && (i = { map: t, count: 1 });
          n.resolve(i);
        }),
        n.promise()
      );
    };
    this.LoadSearchFilters = function () {
      var r = $.Deferred(),
        n,
        t,
        i,
        u,
        e;
      if (this.IsWebHelpPlus)
        (e = this),
          MadCap.Utilities.Xhr.CallWebService(
            o + "Service/Service.asmx/GetSearchFilters",
            !0,
            function (n) {
              var t = e.ParseSearchFilterDoc(n);
              r.resolve({ map: t });
            }
          );
      else {
        function e(t) {
          var i;
          if (t)
            if (n) {
              for (i in t.map)
                if (n.map[i]) {
                  var r = n.map[i],
                    u = t.map[i],
                    f = r.c.split(";"),
                    e = u.c.split(";");
                  r.c = f.Union(e).join(";");
                  MadCap.String.IsNullOrEmpty(r.cm) && (r.cm = u.cm);
                } else (n.map[i] = t.map[i]), (n.map[i].group += n.count);
              n.count += t.count;
            } else {
              n = t;
              for (i in t.map) t.map[i].group = 0;
            }
        }
        for (
          t = [], t.push(this.LoadSearchFiltersLocal().then(e)), i = 0;
          i < f.length;
          i++
        )
          (u = f[i]), u.GetExists() && t.push(u.LoadSearchFilters().then(e));
        $.when.apply(this, t).done(function () {
          b = n;
          r.resolve(n);
        });
      }
      return r.promise();
    };
    this.GetMicroContentScope = function (n) {
      return l[n];
    };
    this.LoadMicroContentScopes = function () {
      var n = $.Deferred();
      return (
        this.IsWebHelpPlus
          ? ((l = []), n.resolve(l))
          : require([o + "Data/MicroContentScopes.js"], function (t) {
              l = t;
              n.resolve(l);
            }),
        n.promise()
      );
    };
    this.AdvanceTopic = function (n, t, i, r, u, f) {
      e.FindNode(n, i, u, function (i) {
        if (i) {
          function u(t, i) {
            t = i == "next" ? d(t) : ft(t);
            t &&
              typeof t.i != "undefined" &&
              e.LoadTocChunk(t.toc, t.c).then(function () {
                var s = t.toc.entries[t.i],
                  o = e.GetTocEntryHref(t, n, !0, r);
                o
                  ? (MadCap.String.StartsWith(o, "#") && (o = o.substring(1)),
                    f(o))
                  : u(t, i);
              });
          }
          u(i, t);
        }
      });
    };
    this.SetBrowseSequencePath = function (n, t) {
      var i = $(".current-topic-index-button");
      n != null
        ? this.FindBrowseSequenceNode(n, t, function (n) {
            n && n.parent
              ? (i.removeClass("disabled"),
                $(".sequence-index").text(n.parent.n.indexOf(n) + 1),
                $(".sequence-total").text(n.parent.n.length))
              : i.addClass("disabled");
          })
        : i.addClass("disabled");
    };
    this.GetSkins = function () {
      var n = [];
      return (
        w.ForEach(function (t, i) {
          n.push(i);
        }),
        n
      );
    };
    this.IsCentralLiveHelpServerType = function () {
      return this.LiveHelpServerType == "Central";
    };
    this.GetLanguageString = function (n, t, i, r, u) {
      if (MadCap.Utilities.HasRuntimeFileType("SkinPreview")) return u;
      var f,
        e = n + "/" + r;
      return (
        t && this.Language.component[i]
          ? (f = this.Language.component[i][e])
          : this.Language.skin["default"] &&
            (f = this.Language.skin["default"][e]),
        f ? f : u
      );
    };
  }),
    (function () {
      MadCap.WebHelp.HelpSystem.LoadHelpSystem = MadCap.Utilities.Memoize(
        function (n) {
          var t = $.Deferred(),
            i = new MadCap.WebHelp.HelpSystem(null, null, n, null, null);
          return (
            i.Load(function () {
              t.resolve(i);
            }),
            t.promise()
          );
        }
      );
      MadCap.WebHelp.HelpSystem.LoadHelpSystemDefault = function () {
        var t = $(document.documentElement).attr("data-mc-path-to-help-system"),
          n = "Data/HelpSystem.xml";
        return t && (n = t + n), MadCap.WebHelp.HelpSystem.LoadHelpSystem(n);
      };
      MadCap.WebHelp.HelpSystem.LoadHelpSystemPromise = function () {
        return new Promise(function (n) {
          MadCap.WebHelp.HelpSystem.LoadHelpSystemDefault().done(n);
        });
      };
    })();
  MadCap.WebHelp.TocFile = function (n, t) {
    function w() {
      for (var n = 0, t = c.length; n < t; n++) c[n]();
    }
    function b(n, t) {
      for (var r = null, i = 0; i < n.childNodes.length; i++)
        if (
          n.childNodes[i].nodeName == "TocEntry" &&
          MadCap.Dom.GetAttribute(n.childNodes[i], "Title") == t
        ) {
          r = n.childNodes[i];
          break;
        }
      return r;
    }
    function v(n, t, i) {
      var o = null,
        u = MadCap.Dom.GetAttribute(n, "Link"),
        f,
        e,
        r,
        s,
        h;
      if (
        (u != null &&
          ((u = u.substring(1)),
          (u = u.replace(/%20/g, " ")),
          (u = u.toLowerCase())),
        u == t)
      )
        o = n;
      else
        for (f = 0; f < n.childNodes.length; f++)
          if (
            ((e = n.childNodes[f]), e.nodeType == 1) &&
            ((r = MadCap.Dom.GetAttribute(e, "Link")), r != null) &&
            ((r = r.substring(1)),
            (r = r.replace(/%20/g, " ")),
            (r = r.toLowerCase()),
            i ||
              ((s = r.indexOf("#")),
              s != -1 && (r = r.substring(0, s)),
              (h = r.indexOf("?")),
              h != -1 && (r = r.substring(0, h))),
            r == t)
          ) {
            o = e;
            break;
          }
      return o;
    }
    function h(n, t, u) {
      function f(t) {
        var e = null,
          r;
        if (t != null) {
          if (((r = MadCap.Dom.GetAttribute(t, "Link")), r == null)) {
            h(n, t, u);
            return;
          }
          var s = new MadCap.Utilities.Url(r),
            f = s.Extension.toLowerCase(),
            o = i.GetMasterHelpSystem();
          if (o.UseCustomTopicFileExtension) {
            if (f != o.CustomTopicFileExtension) {
              h(n, t, u);
              return;
            }
          } else if (f != "htm" && f != "html") {
            h(n, t, u);
            return;
          }
          e = t;
        }
        u(e);
      }
      function s(n) {
        function i(n) {
          var r = y(n, "TocEntry");
          if (r == null) t = n;
          else {
            if (((t = r), e(r, i))) return;
            if (o(r, u)) return;
          }
          f(t);
        }
        function u(n, t, r, u) {
          t ? i(u) : i(n);
        }
        for (
          var t = null, r = n.previousSibling;
          r != null;
          r = r.previousSibling
        )
          if (r.nodeName == "TocEntry") {
            t = r;
            break;
          }
        if (t != null) {
          if (e(t, i)) return;
          if (o(t, u)) return;
          i(t);
          return;
        }
        n.parentNode.nodeType == 1 && (t = n.parentNode);
        f(t);
      }
      function c(n) {
        function t(n) {
          for (
            var i = $(n).children("TocEntry")[0], t = n;
            t != null && i == null;
            t = t.parentNode
          )
            i = $(t).next("TocEntry")[0];
          f(i);
        }
        function i(n, i, r) {
          if (i) {
            f(r);
            return;
          }
          t(n);
        }
        e(n, t) || o(n, i) || t(n);
      }
      function e(n, t) {
        var i = MadCap.Dom.GetAttribute(n, "Chunk");
        return i != null ? (r.LoadChunk(n, i, t), !0) : !1;
      }
      function o(n, t) {
        var i = $(n).attr("MergeHint") || -1;
        return i >= 0 ? (r.LoadMerge(n, t), !0) : !1;
      }
      n == "previous" ? s(t) : n == "next" && c(t);
    }
    function y(n, t) {
      var i = $(n).children(t + ":last")[0],
        r;
      return i != null ? (((r = y(i, t)), r != null) ? r : i) : null;
    }
    function l(n) {
      for (var r = null, t = n, u; ; ) {
        if (t == t.ownerDocument.documentElement) {
          r = i;
          break;
        }
        if (
          ((u = MadCap.Dom.GetAttributeInt(t, "ownerHelpSystemIndex", -1)),
          u >= 0)
        ) {
          r = f[u];
          break;
        }
        t = t.parentNode;
      }
      return r;
    }
    function k(n) {
      var t = "",
        r = -1,
        u = $(n).children("TocEntry")[0],
        i;
      for (
        u != null
          ? ((t = encodeURIComponent(MadCap.Dom.GetAttribute(n, "Title"))),
            (r = 0))
          : (r = $(n).index() + 1),
          t.length > 0 && (t += "|"),
          t += "_____" + r,
          i = n.parentNode;
        i != null && i.parentNode.nodeType == 1;
        i = i.parentNode
      )
        t == null && (t = ""),
          t.length > 0 && (t = "|" + t),
          (t = encodeURIComponent(MadCap.Dom.GetAttribute(i, "Title")) + t);
      return t;
    }
    function p(n) {
      var i, t, f, r, e, u;
      if (n.parentNode == n.ownerDocument.documentElement) return 0;
      for (
        i = 0,
          r = MadCap.Dom.GetAttribute(n, "Link"),
          r != null && i++,
          t = n.previousSibling;
        t != null;
        t = t.previousSibling
      )
        t.nodeType == 1 &&
          ((f = MadCap.Dom.GetAttributeInt(t, "DescendantCount", 0)),
          (i += f),
          (r = MadCap.Dom.GetAttribute(t, "Link")),
          r != null &&
            ((e = new MadCap.Utilities.Url(r)),
            (u = e.Extension.toLowerCase()),
            (u == "htm" || u == "html") && i++));
      return i + p(n.parentNode);
    }
    var r = this,
      i = n,
      u = t,
      a = !1,
      e = null,
      c = [],
      o = null,
      s = null,
      f = [];
    (function () {})();
    this.Init = function (n) {
      function u(n) {
        a = !0;
        e = n.documentElement;
        w();
      }
      if (a) {
        n != null && n();
        return;
      }
      n != null && c.push(n);
      var r = null;
      t == MadCap.WebHelp.TocFile.TocType.Toc
        ? (r = "Toc.xml")
        : t == MadCap.WebHelp.TocFile.TocType.BrowseSequence &&
          (r = "BrowseSequences.xml");
      this.LoadToc(i.GetPath() + "Data/" + r, u);
    };
    this.LoadToc = function (n, t) {
      function r(n) {
        if (!n || !n.documentElement) {
          t != null && t(n);
          return;
        }
        t != null && t(n);
      }
      if (u == MadCap.WebHelp.TocFile.TocType.Toc && i.IsWebHelpPlus)
        MadCap.Utilities.Xhr.CallWebService(
          i.GetPath() + "Service/Service.asmx/GetToc",
          !0,
          r,
          null
        );
      else if (
        u == MadCap.WebHelp.TocFile.TocType.BrowseSequence &&
        i.IsWebHelpPlus
      )
        MadCap.Utilities.Xhr.CallWebService(
          i.GetPath() + "Service/Service.asmx/GetBrowseSequences",
          !0,
          r,
          null
        );
      else {
        var f = n.indexOf("/") == -1 ? i.GetPath() + "Data/" + n : n;
        MadCap.Utilities.Xhr.Load(f, !1, r, null, null);
      }
    };
    this.LoadChunk = function (n, t, r) {
      function u(t) {
        var f, i, o, u, e;
        if (!t || !t.documentElement) {
          r != null && r(n);
          return;
        }
        for (
          n.removeAttribute("Chunk"),
            f = t.documentElement,
            i = 0,
            o = f.childNodes.length;
          i < o;
          i++
        )
          ((u = f.childNodes[i]), u.nodeType == 1) &&
            ((e = null),
            (e =
              typeof t.importNode == "function"
                ? t.importNode(u, !0)
                : u.cloneNode(!0)),
            n.appendChild(e));
        r != null && r(n);
      }
      var f = t.indexOf("/") == -1 ? i.GetPath() + "Data/" + t : t;
      MadCap.Utilities.Xhr.Load(t, !0, u, null, null);
    };
    this.LoadMerge = function (n, t) {
      function c(r) {
        var e, y, o, u;
        if (!r || !r.documentElement) {
          t != null && t(n, !1, null, null);
          return;
        }
        var l = r.documentElement,
          s = null,
          a = !0,
          h = null,
          c = null,
          v = n.ownerDocument;
        for (e = 0, y = l.childNodes.length; e < y; e++)
          ((o = l.childNodes[e]), o.nodeType == 1) &&
            ((u = null),
            (u =
              typeof v.importNode == "function"
                ? v.importNode(o, !0)
                : o.cloneNode(!0)),
            i
              ? (u.setAttribute("ownerHelpSystemIndex", f.length - 1),
                a
                  ? ((a = !1),
                    n.parentNode.replaceChild(u, n),
                    (h = u),
                    (c = h))
                  : (s.parentNode.insertBefore(u, s.nextSibling), (c = u)),
                (s = u))
              : n.appendChild(u));
        t != null && t(n, i, h, c);
      }
      var r = MadCap.Dom.GetAttributeInt(n, "MergeHint", -1),
        o,
        h;
      if (r == -1) {
        t(n, !1, null, null);
        return;
      }
      n.removeAttribute("MergeHint");
      var s = l(n),
        e = s.GetSubsystem(r),
        i = MadCap.Dom.GetAttributeBool(n, "ReplaceMergeNode", !1);
      i || n.setAttribute("ownerHelpSystemIndex", f.length);
      f[f.length] = e;
      o =
        e.GetPath() +
        "Data/" +
        (u == MadCap.WebHelp.TocFile.TocType.Toc
          ? "Toc.xml"
          : "BrowseSequences.xml");
      h = MadCap.Utilities.Xhr.Load(o, !0, c);
    };
    this.AdvanceTopic = function (n, t, i, r) {
      function f(t) {
        function i(n) {
          var t = null,
            f,
            i,
            e,
            o,
            s;
          n != null
            ? ((t = MadCap.Dom.GetAttribute(n, "Link")),
              (t = t.substring(1)),
              (f = new MadCap.Utilities.Url(t)),
              (i = null),
              u == MadCap.WebHelp.TocFile.TocType.Toc
                ? (i = "TocPath")
                : u == MadCap.WebHelp.TocFile.TocType.BrowseSequence &&
                  (i = "BrowseSequencePath"),
              (e = k(n, !1)),
              (o = f.ToQuery(i + "=" + encodeURIComponent(e))),
              (t = o.FullPath),
              (s = l(n)),
              (t = s.GetPath() + t),
              r(t))
            : r(t);
        }
        if (t == null) {
          r(null);
          return;
        }
        h(n, t, i);
      }
      this.GetTocNode(t, i, f);
    };
    this.GetRootNode = function (n) {
      function t() {
        n(e);
      }
      this.Init(t);
    };
    this.GetTocNode = function (n, t, i) {
      function h() {
        var h, c, p, r, a, w;
        for (
          o = n,
            s = t,
            h = n == "" ? new Array(0) : n.split("|"),
            c = -1,
            h.length > 0 &&
              ((p = h[h.length - 1]),
              MadCap.String.StartsWith(p, "_____") &&
                ((c = parseInt(p.substring(5))), h.splice(h.length - 1, 1))),
            r = e,
            a = 0,
            w = h.length;
          a < w;
          a++
        ) {
          if (u(r)) return;
          if (f(r)) return;
          r = b(r, decodeURIComponent(h[a]));
        }
        if (r == null) {
          i(null);
          return;
        }
        if (!u(r) && !f(r)) {
          if (c >= 0) y = c == 0 ? r : $(r).children("TocEntry")[c - 1];
          else {
            var d = l(r),
              k = t.ToRelative(new MadCap.Utilities.Url(d.GetPath())),
              y = v(r, k.FullPath.toLowerCase(), !0);
            y || (y = v(r, k.PlainPath.toLowerCase(), !1));
          }
          o = null;
          s = null;
          i(y);
        }
      }
      function u(n) {
        var t = MadCap.Dom.GetAttribute(n, "Chunk");
        return t != null
          ? (r.LoadChunk(n, t, function () {
              r.GetTocNode(o, s, i);
            }),
            !0)
          : !1;
      }
      function f(n) {
        var t = $(n).attr("MergeHint") || -1;
        return t >= 0
          ? (r.LoadMerge(n, function () {
              r.GetTocNode(o, s, i);
            }),
            !0)
          : !1;
      }
      this.Init(h);
    };
    this.GetEntrySequenceIndex = function (n, t, i) {
      function r(n) {
        var t = -1;
        n != null && (t = p(n));
        i(t);
      }
      this.GetTocNode(n, t, r);
    };
    this.GetIndexTotalForEntry = function (n, t, i) {
      function r(n) {
        var r = -1,
          t;
        if (n != null) {
          for (t = n; t.parentNode != e; ) t = t.parentNode;
          r = MadCap.Dom.GetAttributeInt(t, "DescendantCount", -1);
        }
        i(r);
      }
      this.GetTocNode(n, t, r);
    };
  };
  MadCap.WebHelp.TocFile.TocType = { Toc: 0, BrowseSequence: 1 };
  MadCap.WebHelp.IndexEntry = function (n, t) {
    var u = MadCap.Dom.GetChildNodeByTagName(n, "Links", 0).childNodes,
      e = u.length,
      f = 0,
      i,
      r;
    for (
      this.Term = MadCap.Dom.GetAttribute(n, "Term"),
        this.IndexLinks = [],
        this.Level = t,
        this.GeneratedReferenceType = MadCap.Dom.GetAttribute(
          n,
          "GeneratedReferenceType"
        ),
        i = 0;
      i < e;
      i++
    )
      ((r = u[i]), r.nodeType == 1) &&
        ((this.IndexLinks[f] = new MadCap.WebHelp.IndexLink(r)), f++);
  };
  MadCap.WebHelp.IndexLink = function (n) {
    this.Title = MadCap.Dom.GetAttribute(n, "Title");
    this.Link = MadCap.Dom.GetAttribute(n, "Link");
  };
})();

//    Syntax:
//    function MadCap.OpenHelp(id, skinName, searchQuery, firstPick)
//
//    id          - Identifier that was created in Flare. This can be either the identifier name or value. The topic and skin
//                  that is associated with the id will be used. If no skin is associated with the id, skinName will be used.
//                  Alternatively, id may contain a topic path. In this case, the specified topic will be loaded with the skin
//                  that is specified in skinName. Specify null to use the help system's default starting topic.
//    skinName    - This is a string indicating the name of the skin to use when opening the help system. Specify null to use
//                  the default skin or to use the skin that is associated with id. If a skin is associated with id AND a skin
//                  is specified in skinName, skinName will take precedence.
//    searchQuery - This is a string indicating the search query used when opening the help system. If a search query is specified,
//                  the help system will start with the search pane open and the search query executed. Specify null to open
//                  the help system without a search query.
//    firstPick   - This is a boolean indicating whether to automatically open the topic from the first search result that is
//                  returned by the search query (see searchQuery parameter). Use null if no search query was specified.
//
//    Examples:
//
//    In the following example, topic and skin associated with "FILE_NEW" will be used:
//    MadCap.OpenHelp('FILE_NEW', null, null, null);
//
//    In the following example, topic associated with "FILE_NEW" will be used. "BlueSkin" will override the skin associated with "FILE_NEW":
//    MadCap.OpenHelp('FILE_NEW', 'BlueSkin', null, null);
//
//    In the following example, topic and skin associated with identifier value 1 will be used:
//    MadCap.OpenHelp(1, null, null, null);
//
//    In the following example, topic associated with identifier value 1 will be used. "BlueSkin" will override the skin associated with identifier value 1:
//    MadCap.OpenHelp(1, 'BlueSkin', null, null);
//
//    In the following example, "Company/Employees.htm" will be used with the default skin:
//    MadCap.OpenHelp('Company/Employees.htm', null, null, null);
//
//    In the following example, both the default topic and skin will be used:
//    MadCap.OpenHelp(null, null, null, null);
//
//    In the following example, the default topic will be used with "BlueSkin":
//    MadCap.OpenHelp(null, 'BlueSkin', null, null);
//
//    In the following example, both the default topic and skin will be used. The help system will be started with the search pane
//    displaying the search results for the query 'quarterly report'. The topic from the first result will not be opened:
//    MadCap.OpenHelp(null, null, 'quarterly report', false);
//
//    In the following example, both the default topic and skin will be used. The help system will be started with the search pane
//    displaying the search results for the query 'quarterly report'. The topic from the first result will be opened:
//    MadCap.OpenHelp(null, null, 'quarterly report', true);

(function () {
  var helpSystemName = "Default.htm";

  MadCap.OpenHelp = function (
    id,
    skinName,
    searchQuery,
    firstPick,
    pathToHelpSystem
  ) {
    var cshFileName =
      helpSystemName.substring(0, helpSystemName.lastIndexOf(".")) + ".js";
    var webHelpPath = null;
    var webHelpFile = null;
    var cshFileUrl = new MadCap.Utilities.Url(helpSystemName);

    if (pathToHelpSystem == null) {
      var scriptNodes = document.getElementsByTagName("script");
      var found = false;

      for (var i = 0; i < scriptNodes.length; i++) {
        var src = scriptNodes[i].src;
        var srcUrl = new MadCap.Utilities.Url(MadCap.String.Trim(src));

        if (
          srcUrl.NameWithExtension.toLowerCase() == cshFileName.toLowerCase()
        ) {
          var locUrl = new MadCap.Utilities.Url(
            document.location.href
          ).ToFolder();

          webHelpPath = locUrl.AddFile(srcUrl);
          webHelpPath = webHelpPath.ToFolder();

          found = true;

          break;
        }
      }

      if (!found) throw "CSH failed: could not find MadCap CSH script in page.";
    } else {
      webHelpPath = new MadCap.Utilities.Url(pathToHelpSystem);
    }

    webHelpFile = webHelpPath.AddFile(cshFileUrl);

    var webHelpPath = webHelpFile.ToFolder().FullPath;
    var helpSystemFile = webHelpPath + "Data/HelpSystem.xml";
    var helpSystem = new MadCap.WebHelp.HelpSystem(
      null,
      null,
      helpSystemFile,
      null,
      null
    );

    helpSystem.Load(function () {
      helpSystem.LookupCSHID(id, function (idInfo) {
        function OnGetSkinComplete() {
          var cshString = webHelpFile.FullPath;

          if (id) cshString += "#cshid=" + id;

          if (skinName) {
            if (cshString.indexOf("#") != -1) cshString += "&";
            else cshString += "#";

            cshString += "skinName=" + skinName;
          }

          if (searchQuery) {
            if (cshString.indexOf("#") != -1) cshString += "&";
            else cshString += "#";

            cshString += "searchQuery=" + searchQuery;

            if (firstPick) cshString += "&firstPick=true";
          }

          var win = window.open(
            cshString,
            "_MCWebHelpCSH",
            browserOptions + size
          );

          // Bug 32051: Windows 7 64-bit is returning null from the call to window.open().
          if (win != null) win.focus();
        }

        skinName = skinName || idInfo.Skin;

        // Browser setup options

        var browserOptions = "";
        var size = "";

        if (skinName) {
          var skin = helpSystem.GetSkin(skinName);

          if (skin) {
            var useDefault = MadCap.String.ToBool(
              skin.UseDefaultBrowserSetup,
              true
            );

            if (!useDefault) {
              var toolbar = "no";
              var menu = "no";
              var locationBar = "no";
              var statusBar = "no";
              var resizable = "no";
              var setup = skin.BrowserSetup;

              if (setup) {
                toolbar = setup.indexOf("Toolbar") > -1 ? "yes" : "no";
                menu = setup.indexOf("Menu") > -1 ? "yes" : "no";
                locationBar = setup.indexOf("LocationBar") > -1 ? "yes" : "no";
                statusBar = setup.indexOf("StatusBar") > -1 ? "yes" : "no";
                resizable = setup.indexOf("Resizable") > -1 ? "yes" : "no";
              }

              browserOptions =
                "toolbar=" +
                toolbar +
                ", menubar=" +
                menu +
                ", location=" +
                locationBar +
                ", status=" +
                statusBar +
                ", resizable=" +
                resizable;
            }

            var windowSize = LoadSize(skin);

            if (windowSize)
              size =
                ", top=" +
                windowSize.topPx +
                ", left=" +
                windowSize.leftPx +
                ", width=" +
                windowSize.widthPx +
                ", height=" +
                windowSize.heightPx;
          }

          OnGetSkinComplete();
        } else {
          OnGetSkinComplete();
        }
      });
    });
  };

  function LoadSize(skin) {
    var useDefaultSize = MadCap.String.ToBool(skin.UseBrowserDefaultSize, true);

    if (useDefaultSize) return null;

    var topPx = MadCap.String.ToInt(skin.Top, 0);
    var leftPx = MadCap.String.ToInt(skin.Left, 0);
    var bottomPx = MadCap.String.ToInt(skin.Bottom, 0);
    var rightPx = MadCap.String.ToInt(skin.Right, 0);
    var widthPx = MadCap.String.ToInt(skin.Width, 800);
    var heightPx = MadCap.String.ToInt(skin.Height, 600);

    var anchors = skin.Anchors;

    if (anchors) {
      var aTop = anchors.indexOf("Top") > -1 ? true : false;
      var aLeft = anchors.indexOf("Left") > -1 ? true : false;
      var aBottom = anchors.indexOf("Bottom") > -1 ? true : false;
      var aRight = anchors.indexOf("Right") > -1 ? true : false;
      var aWidth = anchors.indexOf("Width") > -1 ? true : false;
      var aHeight = anchors.indexOf("Height") > -1 ? true : false;
    }

    if (aLeft && aRight) widthPx = screen.width - (leftPx + rightPx);
    else if (!aLeft && aRight) leftPx = screen.width - (widthPx + rightPx);
    else if (aWidth) leftPx = screen.width / 2 - widthPx / 2;

    if (aTop && aBottom) heightPx = screen.height - (topPx + bottomPx);
    else if (!aTop && aBottom) topPx = screen.height - (heightPx + bottomPx);
    else if (aHeight) topPx = screen.height / 2 - heightPx / 2;

    //

    var windowSize = {};
    windowSize.topPx = topPx;
    windowSize.leftPx = leftPx;
    windowSize.widthPx = widthPx;
    windowSize.heightPx = heightPx;

    return windowSize;
  }
})();
