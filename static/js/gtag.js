// Copyright 2012 Google Inc. All rights reserved.
(function () {
  var data = {
    resource: {
      version: "1",

      macros: [{ function: "__e" }, { function: "__cid" }],
      tags: [
        {
          function: "__rep",
          once_per_event: true,
          vtp_containerId: ["macro", 1],
          tag_id: 1,
        },
      ],
      predicates: [{ function: "_eq", arg0: ["macro", 0], arg1: "gtm.js" }],
      rules: [
        [
          ["if", 0],
          ["add", 0],
        ],
      ],
    },
    runtime: [],
  };

  /*
    
     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
  var aa,
    ca = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    ea = function (a) {
      var b =
        "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      return b ? b.call(a) : { next: ca(a) };
    },
    fa =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    ha;
  if ("function" == typeof Object.setPrototypeOf) ha = Object.setPrototypeOf;
  else {
    var ia;
    a: {
      var ja = { a: !0 },
        ka = {};
      try {
        ka.__proto__ = ja;
        ia = ka.a;
        break a;
      } catch (a) {}
      ia = !1;
    }
    ha = ia
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var la = ha,
    na = function (a, b) {
      a.prototype = fa(b.prototype);
      a.prototype.constructor = a;
      if (la) la(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.uj = b.prototype;
    },
    pa = this || self,
    qa = function (a) {
      return a;
    };
  var ra = {},
    sa = function (a, b) {
      ra[a] = ra[a] || [];
      ra[a][b] = !0;
    },
    ta = function (a) {
      for (var b = [], c = ra[a] || [], d = 0; d < c.length; d++)
        c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
      for (var e = 0; e < b.length; e++)
        b[e] =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(
            b[e] || 0
          );
      return b.join("");
    };
  var ua = function () {},
    wa = function (a) {
      return "function" == typeof a;
    },
    h = function (a) {
      return "string" == typeof a;
    },
    xa = function (a) {
      return "number" == typeof a && !isNaN(a);
    },
    ya = function (a) {
      var b = "[object Array]" == Object.prototype.toString.call(Object(a));
      Array.isArray
        ? Array.isArray(a) !== b && sa("TAGGING", 4)
        : sa("TAGGING", 5);
      return b;
    },
    za = function (a, b) {
      if (Array.prototype.indexOf) {
        var c = a.indexOf(b);
        return "number" == typeof c ? c : -1;
      }
      for (var d = 0; d < a.length; d++) if (a[d] === b) return d;
      return -1;
    },
    Ba = function (a, b) {
      if (a && ya(a))
        for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
    },
    Da = function (a, b) {
      if (!xa(a) || !xa(b) || a > b) (a = 0), (b = 2147483647);
      return Math.floor(Math.random() * (b - a + 1) + a);
    },
    Ga = function (a, b) {
      for (var c = new Fa(), d = 0; d < a.length; d++) c.set(a[d], !0);
      for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
      return !1;
    },
    Ia = function (a, b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
    },
    La = function (a) {
      return (
        !!a &&
        ("[object Arguments]" == Object.prototype.toString.call(a) ||
          Object.prototype.hasOwnProperty.call(a, "callee"))
      );
    },
    Ma = function (a) {
      return Math.round(Number(a)) || 0;
    },
    Na = function (a) {
      return "false" == String(a).toLowerCase() ? !1 : !!a;
    },
    Oa = function (a) {
      var b = [];
      if (ya(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b;
    },
    Pa = function (a) {
      return a ? a.replace(/^\s+|\s+$/g, "") : "";
    },
    Ra = function () {
      return new Date(Date.now());
    },
    Sa = function () {
      return Ra().getTime();
    },
    Fa = function () {
      this.prefix = "gtm.";
      this.values = {};
    };
  Fa.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  Fa.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  var Ua = function (a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c;
    },
    Va = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = void 0;
          try {
            c();
          } catch (d) {}
        }
      };
    },
    Wa = function (a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    },
    Xa = function (a) {
      for (var b in a) if (a.hasOwnProperty(b)) return !0;
      return !1;
    },
    Ya = function (a, b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c;
    },
    Za = function (a, b) {
      for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
        d = d[e[f]] = {};
      d[e[e.length - 1]] = b;
      return c;
    },
    $a = /^\w{1,9}$/,
    ab = function (a, b) {
      a = a || {};
      b = b || ",";
      var c = [];
      Ia(a, function (d, e) {
        $a.test(d) && e && c.push(d);
      });
      return c.join(b);
    };
  var cb,
    db = function () {
      if (void 0 === cb) {
        var a = null,
          b = pa.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy("goog#html", {
              createHTML: qa,
              createScript: qa,
              createScriptURL: qa,
            });
          } catch (c) {
            pa.console && pa.console.error(c.message);
          }
          cb = a;
        } else cb = a;
      }
      return cb;
    };
  var fb = function (a, b) {
    this.o = b === eb ? a : "";
  };
  fb.prototype.toString = function () {
    return this.o + "";
  };
  var eb = {};
  var gb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
  var hb;
  a: {
    var ib = pa.navigator;
    if (ib) {
      var lb = ib.userAgent;
      if (lb) {
        hb = lb;
        break a;
      }
    }
    hb = "";
  }
  var mb = function (a) {
    return -1 != hb.indexOf(a);
  };
  var nb = {},
    ob = function (a, b, c) {
      this.o = c === nb ? a : "";
    };
  ob.prototype.toString = function () {
    return this.o.toString();
  };
  var pb = function (a) {
      return a instanceof ob && a.constructor === ob
        ? a.o
        : "type_error:SafeHtml";
    },
    qb = function (a) {
      var b = db(),
        c = b ? b.createHTML(a) : a;
      return new ob(c, null, nb);
    },
    rb = new ob((pa.trustedTypes && pa.trustedTypes.emptyHTML) || "", 0, nb);
  var vb = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    wb = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  var xb = (function (a) {
      var b = !1,
        c;
      return function () {
        b || ((c = a()), (b = !0));
        return c;
      };
    })(function () {
      var a = document.createElement("div"),
        b = document.createElement("div");
      b.appendChild(document.createElement("div"));
      a.appendChild(b);
      var c = a.firstChild.firstChild;
      a.innerHTML = pb(rb);
      return !c.parentElement;
    }),
    yb = function (a, b) {
      if (xb()) for (; a.lastChild; ) a.removeChild(a.lastChild);
      a.innerHTML = pb(b);
    };
  var m = window,
    B = document,
    zb = navigator,
    Ab = B.currentScript && B.currentScript.src,
    Bb = function (a, b) {
      var c = m[a];
      m[a] = void 0 === c ? b : c;
      return m[a];
    },
    Cb = function (a, b) {
      b &&
        (a.addEventListener
          ? (a.onload = b)
          : (a.onreadystatechange = function () {
              a.readyState in { loaded: 1, complete: 1 } &&
                ((a.onreadystatechange = null), b());
            }));
    },
    Db = function (a, b, c) {
      var d = B.createElement("script");
      d.type = "text/javascript";
      d.async = !0;
      var e,
        f = db(),
        g = f ? f.createScriptURL(a) : a;
      e = new fb(g, eb);
      d.src =
        e instanceof fb && e.constructor === fb
          ? e.o
          : "type_error:TrustedResourceUrl";
      var k,
        l,
        n = ((d.ownerDocument && d.ownerDocument.defaultView) || window)
          .document,
        p =
          null === (l = n.querySelector) || void 0 === l
            ? void 0
            : l.call(n, "script[nonce]");
      (k = p ? p.nonce || p.getAttribute("nonce") || "" : "") &&
        d.setAttribute("nonce", k);
      Cb(d, b);
      c && (d.onerror = c);
      var q = B.getElementsByTagName("script")[0] || B.body || B.head;
      q.parentNode.insertBefore(d, q);
      return d;
    },
    Eb = function () {
      if (Ab) {
        var a = Ab.toLowerCase();
        if (0 === a.indexOf("https://")) return 2;
        if (0 === a.indexOf("http://")) return 3;
      }
      return 1;
    },
    Fb = function (a, b) {
      var c = B.createElement("iframe");
      c.height = "0";
      c.width = "0";
      c.style.display = "none";
      c.style.visibility = "hidden";
      var d = (B.body && B.body.lastChild) || B.body || B.head;
      d.parentNode.insertBefore(c, d);
      Cb(c, b);
      void 0 !== a && (c.src = a);
      return c;
    },
    Gb = function (a, b, c) {
      var d = new Image(1, 1);
      d.onload = function () {
        d.onload = null;
        b && b();
      };
      d.onerror = function () {
        d.onerror = null;
        c && c();
      };
      d.src = a;
      return d;
    },
    Hb = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, !!d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    },
    Kb = function (a, b, c) {
      a.removeEventListener
        ? a.removeEventListener(b, c, !1)
        : a.detachEvent && a.detachEvent("on" + b, c);
    },
    G = function (a) {
      m.setTimeout(a, 0);
    },
    Lb = function (a, b) {
      return a && b && a.attributes && a.attributes[b]
        ? a.attributes[b].value
        : null;
    },
    Mb = function (a) {
      var b = a.innerText || a.textContent || "";
      b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return b;
    },
    Nb = function (a) {
      var b = B.createElement("div"),
        c = qb("A<div>" + a + "</div>");
      yb(b, c);
      b = b.lastChild;
      for (var d = []; b.firstChild; ) d.push(b.removeChild(b.firstChild));
      return d;
    },
    Ob = function (a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, g = 0; f && g <= c; g++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement;
      }
      return null;
    },
    Pb = function (a) {
      (zb.sendBeacon && zb.sendBeacon(a)) || Gb(a);
    },
    Qb = function (a, b) {
      var c = a[b];
      c && "string" === typeof c.animVal && (c = c.animVal);
      return c;
    },
    Rb = function (a) {
      var b = B.featurePolicy;
      return b && wa(b.features) ? -1 !== b.features().indexOf(a) : !1;
    }; /*
     jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var Sb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    Vb = function (a) {
      if (null == a) return String(a);
      var b = Sb.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    Wb = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    Xb = function (a) {
      if (!a || "object" != Vb(a) || a.nodeType || a == a.window) return !1;
      try {
        if (
          a.constructor &&
          !Wb(a, "constructor") &&
          !Wb(a.constructor.prototype, "isPrototypeOf")
        )
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return void 0 === b || Wb(a, b);
    },
    H = function (a, b) {
      var c = b || ("array" == Vb(a) ? [] : {}),
        d;
      for (d in a)
        if (Wb(a, d)) {
          var e = a[d];
          "array" == Vb(e)
            ? ("array" != Vb(c[d]) && (c[d] = []), (c[d] = H(e, c[d])))
            : Xb(e)
            ? (Xb(c[d]) || (c[d] = {}), (c[d] = H(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  var Yb = function (a) {
    if (void 0 === a || ya(a) || Xb(a)) return !0;
    switch (typeof a) {
      case "boolean":
      case "number":
      case "string":
      case "function":
        return !0;
    }
    return !1;
  };
  var Zb = (function () {
    var a = function (b) {
      return {
        toString: function () {
          return b;
        },
      };
    };
    return {
      Mg: a("consent"),
      Ng: a("consent_always_fire"),
      $e: a("convert_case_to"),
      af: a("convert_false_to"),
      bf: a("convert_null_to"),
      cf: a("convert_true_to"),
      df: a("convert_undefined_to"),
      ej: a("debug_mode_metadata"),
      gj: a("event_data_overrides"),
      lb: a("function"),
      Hh: a("instance_name"),
      Jh: a("live_only"),
      Kh: a("malware_disabled"),
      Lh: a("metadata"),
      ij: a("original_activity_id"),
      jj: a("original_vendor_template_id"),
      Nh: a("once_per_event"),
      Gf: a("once_per_load"),
      lj: a("priority_override"),
      mj: a("respected_consent_types"),
      Kf: a("setup_tags"),
      Mf: a("tag_id"),
      Nf: a("teardown_tags"),
    };
  })();
  var wc;
  var xc = [],
    yc = [],
    zc = [],
    Fc = [],
    Gc = [],
    Hc = {},
    Ic,
    Jc,
    Kc,
    Lc = function (a, b) {
      var c = a["function"];
      if (!c) throw Error("Error: No function name given for function call.");
      var d = Hc[c],
        e = {},
        f;
      for (f in a)
        if (a.hasOwnProperty(f))
          if (0 === f.indexOf("vtp_"))
            d && b && b.Yf && b.Yf(a[f]),
              (e[void 0 !== d ? f : f.substr(4)] = a[f]);
          else if (f === Zb.Ng.toString() && a[f]) {
          }
      d && b && b.Xf && (e.vtp_gtmCachedValues = b.Xf);
      return void 0 !== d ? d(e) : wc(c, e, b);
    },
    Nc = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = Mc(a[e], b, c));
      return d;
    },
    Mc = function (a, b, c) {
      if (ya(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(Mc(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var g = xc[f];
            if (!g || b.Ge(g)) return;
            c[f] = !0;
            try {
              var k = Nc(g, b, c);
              k.vtp_gtmEventId = b.id;
              d = Lc(k, b);
              Kc && (d = Kc.bi(d, k));
            } catch (z) {
              b.mg && b.mg(z, Number(f)), (d = !1);
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var l = 1; l < a.length; l += 2)
              d[Mc(a[l], b, c)] = Mc(a[l + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var n = !1, p = 1; p < a.length; p++) {
              var q = Mc(a[p], b, c);
              Jc && (n = n || q === Jc.Yc);
              d.push(q);
            }
            return Jc && n ? Jc.ei(d) : d.join("");
          case "escape":
            d = Mc(a[1], b, c);
            if (Jc && ya(a[1]) && "macro" === a[1][0] && Jc.yi(a))
              return Jc.Ni(d);
            d = String(d);
            for (var t = 2; t < a.length; t++) $b[a[t]] && (d = $b[a[t]](d));
            return d;
          case "tag":
            var u = a[1];
            if (!Fc[u])
              throw Error("Unable to resolve tag reference " + u + ".");
            return (d = { dg: a[2], index: u });
          case "zb":
            var r = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
            r["function"] = a[1];
            var v = Oc(r, b, c),
              x = !!a[4];
            return x || 2 !== v ? x !== (1 === v) : null;
          default:
            throw Error(
              "Attempting to expand unknown Value type: " + a[0] + "."
            );
        }
      }
      return a;
    },
    Oc = function (a, b, c) {
      try {
        return Ic(Nc(a, b, c));
      } catch (d) {
        JSON.stringify(a);
      }
      return 2;
    };
  var Rc = function (a) {
      function b(t) {
        for (var u = 0; u < t.length; u++) d[t[u]] = !0;
      }
      for (var c = [], d = [], e = Pc(a), f = 0; f < yc.length; f++) {
        var g = yc[f],
          k = Qc(g, e);
        if (k) {
          for (var l = g.add || [], n = 0; n < l.length; n++) c[l[n]] = !0;
          b(g.block || []);
        } else null === k && b(g.block || []);
      }
      for (var p = [], q = 0; q < Fc.length; q++) c[q] && !d[q] && (p[q] = !0);
      return p;
    },
    Qc = function (a, b) {
      for (var c = a["if"] || [], d = 0; d < c.length; d++) {
        var e = b(c[d]);
        if (0 === e) return !1;
        if (2 === e) return null;
      }
      for (var f = a.unless || [], g = 0; g < f.length; g++) {
        var k = b(f[g]);
        if (2 === k) return null;
        if (1 === k) return !1;
      }
      return !0;
    },
    Pc = function (a) {
      var b = [];
      return function (c) {
        void 0 === b[c] && (b[c] = Oc(zc[c], a));
        return b[c];
      };
    };
  var Sc = {
    bi: function (a, b) {
      b[Zb.$e] &&
        "string" === typeof a &&
        (a = 1 == b[Zb.$e] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(Zb.bf) && null === a && (a = b[Zb.bf]);
      b.hasOwnProperty(Zb.df) && void 0 === a && (a = b[Zb.df]);
      b.hasOwnProperty(Zb.cf) && !0 === a && (a = b[Zb.cf]);
      b.hasOwnProperty(Zb.af) && !1 === a && (a = b[Zb.af]);
      return a;
    },
  };
  var M = {
    cc: "_ee",
    cd: "_syn_or_mod",
    nj: "_uei",
    ae: "_eu",
    kj: "_pci",
    Cb: "event_callback",
    Oc: "event_timeout",
    Da: "gtag.config",
    La: "gtag.get",
    xa: "purchase",
    Ab: "refund",
    eb: "begin_checkout",
    xb: "add_to_cart",
    yb: "remove_from_cart",
    Wg: "view_cart",
    ff: "add_to_wishlist",
    Ka: "view_item",
    Sb: "view_promotion",
    Jc: "select_promotion",
    Ed: "select_item",
    zb: "view_item_list",
    ef: "add_payment_info",
    Vg: "add_shipping_info",
    Oa: "value_key",
    Va: "value_callback",
    Ea: "allow_ad_personalization_signals",
    Yb: "restricted_data_processing",
    Ub: "allow_google_signals",
    Ha: "cookie_expires",
    Vb: "cookie_update",
    $b: "session_duration",
    Sc: "session_engaged_time",
    Pa: "user_properties",
    oa: "transport_url",
    R: "ads_data_redaction",
    ya: "user_data",
    Wb: "first_party_collection",
    D: "ad_storage",
    I: "analytics_storage",
    Ye: "region",
    Ze: "wait_for_update",
    Ga: "conversion_linker",
    Fa: "conversion_cookie_prefix",
    fa: "value",
    da: "currency",
    Af: "trip_type",
    X: "items",
    tf: "passengers",
    Hd: "allow_custom_scripts",
    ac: "session_id",
    yf: "quantity",
    kb: "transaction_id",
    ib: "language",
    Mc: "country",
    Kc: "allow_enhanced_conversions",
    Md: "aw_merchant_id",
    Kd: "aw_feed_country",
    Ld: "aw_feed_language",
    Jd: "discount",
    ma: "developer_id",
    Tc: "delivery_postal_code",
    Sd: "estimated_delivery_date",
    Qd: "shipping",
    Xd: "new_customer",
    Nd: "customer_lifetime_value",
    Rd: "enhanced_conversions",
    Tb: "page_view",
    na: "linker",
    O: "domains",
    Fb: "decorate_forms",
    qf: "enhanced_conversions_automatic_settings",
    fh: "auto_detection_enabled",
    rf: "ga_temp_client_id",
  };
  (M.Fd = "user_engagement"),
    (M.Qg = "app_remove"),
    (M.Rg = "app_store_refund"),
    (M.Sg = "app_store_subscription_cancel"),
    (M.Tg = "app_store_subscription_convert"),
    (M.Ug = "app_store_subscription_renew"),
    (M.Xg = "first_open"),
    (M.Yg = "first_visit"),
    (M.Zg = "in_app_purchase"),
    (M.$g = "session_start"),
    (M.ah = "user_data_login"),
    (M.bh = "user_data_logout"),
    (M.dh = "allow_display_features"),
    (M.Ma = "campaign"),
    (M.gh = "content"),
    (M.hh = "id"),
    (M.ih = "medium"),
    (M.jh = "name"),
    (M.kh = "source"),
    (M.lh = "term"),
    (M.Bb = "client_id"),
    (M.la = "cookie_domain"),
    (M.Lc = "cookie_name"),
    (M.fb = "cookie_path"),
    (M.Na = "cookie_flags"),
    (M.jf = "custom_map"),
    (M.Ud = "groups"),
    (M.fj = "non_interaction"),
    (M.Gb = "page_location"),
    (M.sf = "page_path"),
    (M.Xa = "page_referrer"),
    (M.Yd = "page_title"),
    (M.Zb = "send_page_view"),
    (M.jb = "send_to"),
    (M.Zd = "session_engaged"),
    (M.Qc = "_logged_in_state"),
    (M.$d = "session_number"),
    (M.Dh = "tracking_id"),
    (M.Ya = "url_passthrough"),
    (M.Eb = "accept_incoming"),
    (M.Xb = "url_position"),
    (M.wf = "phone_conversion_number"),
    (M.uf = "phone_conversion_callback"),
    (M.vf = "phone_conversion_css_class"),
    (M.xf = "phone_conversion_options"),
    (M.zh = "phone_conversion_ids"),
    (M.yh = "phone_conversion_country_code"),
    (M.hf = "aw_remarketing"),
    (M.Id = "aw_remarketing_only"),
    (M.Gd = "gclid"),
    (M.eh = "auid"),
    (M.qh = "affiliation"),
    (M.pf = "tax"),
    (M.Pd = "list_name"),
    (M.nf = "checkout_step"),
    (M.lf = "checkout_option"),
    (M.rh = "coupon"),
    (M.sh = "promotions"),
    (M.Hb = "user_id"),
    (M.Ah = "retoken"),
    (M.ca = "cookie_prefix"),
    (M.kf = "disable_merchant_reported_purchases"),
    (M.ph = "dc_natural_search"),
    (M.oh = "dc_custom_params"),
    (M.wh = "method"),
    (M.Ch = "search_term"),
    (M.nh = "content_type"),
    (M.xh = "optimize_id"),
    (M.th = "experiments"),
    (M.Wa = "google_signals"),
    (M.Pc = "google_tld"),
    (M.Uc = "update"),
    (M.Td = "firebase_id"),
    (M.Db = "ga_restrict_domain"),
    (M.Nc = "event_settings"),
    (M.Od = "dynamic_event_settings"),
    (M.bc = "user_data_settings"),
    (M.Bh = "screen_name"),
    (M.vh = "_x_19"),
    (M.hb = "_ecid"),
    (M.uh = "_x_20"),
    (M.Wd = "internal_traffic_results"),
    (M.zf = "traffic_type"),
    (M.Rc = "referral_exclusion_definition"),
    (M.Vd = "ignore_referrer"),
    (M.mh = "content_group");
  M.Df = [
    M.xa,
    M.Ab,
    M.eb,
    M.xb,
    M.yb,
    M.Wg,
    M.ff,
    M.Ka,
    M.Sb,
    M.Jc,
    M.zb,
    M.Ed,
    M.ef,
    M.Vg,
  ];
  M.Cf = [M.Ea, M.Ub, M.Vb];
  M.Ef = [M.Ha, M.Oc, M.$b, M.Sc];
  var ud = function (a) {
    sa("GTM", a);
  };
  var vd = new (function (a, b) {
    this.o = a;
    this.defaultValue = void 0 === b ? !1 : b;
  })(1933);
  var xd = function () {
    var a = wd;
    if (a.Ee && a.hasOwnProperty("Ee")) return a.Ee;
    var b = new a();
    return (a.Ee = b);
  };
  var wd = function () {
    var a = {};
    this.o = function () {
      var b = vd.o,
        c = vd.defaultValue;
      return null != a[b] ? a[b] : c;
    };
    this.s = function () {
      a[vd.o] = !0;
    };
  };
  var yd = [];
  function zd() {
    var a = Bb("google_tag_data", {});
    a.ics ||
      (a.ics = {
        entries: {},
        set: Ad,
        update: Bd,
        addListener: Cd,
        notifyListeners: Md,
        active: !1,
        usedDefault: !1,
      });
    return a.ics;
  }
  function Ad(a, b, c, d, e, f) {
    var g = zd();
    g.active = !0;
    g.usedDefault = !0;
    if (void 0 != b) {
      var k = g.entries,
        l = k[a] || {},
        n = l.region,
        p = c && h(c) ? c.toUpperCase() : void 0;
      d = d.toUpperCase();
      e = e.toUpperCase();
      if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
        var q = !!(f && 0 < f && void 0 === l.update),
          t = {
            region: p,
            initial: "granted" === b,
            update: l.update,
            quiet: q,
          };
        if ("" !== d || !1 !== l.initial) k[a] = t;
        q &&
          m.setTimeout(function () {
            k[a] === t &&
              t.quiet &&
              ((t.quiet = !1), Nd(a), Md(), sa("TAGGING", 2));
          }, f);
      }
    }
  }
  function Bd(a, b) {
    var c = zd();
    c.active = !0;
    if (void 0 != b) {
      var d = Od(a),
        e = c.entries,
        f = (e[a] = e[a] || {});
      f.update = "granted" === b;
      var g = Od(a);
      f.quiet ? ((f.quiet = !1), Nd(a)) : g !== d && Nd(a);
    }
  }
  function Cd(a, b) {
    yd.push({ te: a, mi: b });
  }
  function Nd(a) {
    for (var b = 0; b < yd.length; ++b) {
      var c = yd[b];
      ya(c.te) && -1 !== c.te.indexOf(a) && (c.qg = !0);
    }
  }
  function Md(a) {
    for (var b = 0; b < yd.length; ++b) {
      var c = yd[b];
      if (c.qg) {
        c.qg = !1;
        try {
          c.mi({ ai: a });
        } catch (d) {}
      }
    }
  }
  var Od = function (a) {
      var b = zd().entries[a] || {};
      return void 0 !== b.update ? b.update : b.initial;
    },
    Pd = function (a) {
      return (zd().entries[a] || {}).initial;
    },
    Qd = function (a) {
      return !(zd().entries[a] || {}).quiet;
    },
    Rd = function () {
      return xd().o() ? zd().active : !1;
    },
    Sd = function () {
      return zd().usedDefault;
    },
    Td = function (a, b) {
      zd().addListener(a, b);
    },
    Ud = function (a) {
      zd().notifyListeners(a);
    },
    Vd = function (a, b) {
      function c() {
        for (var e = 0; e < b.length; e++) if (!Qd(b[e])) return !0;
        return !1;
      }
      if (c()) {
        var d = !1;
        Td(b, function (e) {
          d || c() || ((d = !0), a(e));
        });
      } else a({});
    },
    Wd = function (a, b) {
      function c() {
        for (var f = [], g = 0; g < d.length; g++) {
          var k = d[g];
          !1 === Od(k) || e[k] || (f.push(k), (e[k] = !0));
        }
        return f;
      }
      var d = h(b) ? [b] : b,
        e = {};
      c().length !== d.length &&
        Td(d, function (f) {
          var g = c();
          0 < g.length && ((f.te = g), a(f));
        });
    };
  function Xd(a) {
    for (var b = [], c = 0; c < Yd.length; c++) {
      var d = a(Yd[c]);
      b[c] = !0 === d ? "1" : !1 === d ? "0" : "-";
    }
    return b.join("");
  }
  var Yd = [M.D, M.I],
    Zd = function (a) {
      var b = a[M.Ye];
      b && ud(40);
      var c = a[M.Ze];
      c && ud(41);
      for (
        var d = ya(b) ? b : [b], e = { Ob: 0 };
        e.Ob < d.length;
        e = { Ob: e.Ob }, ++e.Ob
      )
        Ia(
          a,
          (function (f) {
            return function (g, k) {
              if (g !== M.Ye && g !== M.Ze) {
                var l = d[f.Ob];
                zd().set(g, k, l, "KH", "KH-12", c);
              }
            };
          })(e)
        );
    },
    $d = 0,
    ae = function (a, b) {
      Ia(a, function (e, f) {
        zd().update(e, f);
      });
      Ud(b);
      var c = Sa(),
        d = c - $d;
      $d && 0 <= d && 1e3 > d && ud(66);
      $d = c;
    },
    be = function (a) {
      var b = Od(a);
      return void 0 != b ? b : !0;
    },
    ce = function () {
      return "G1" + Xd(Od);
    },
    de = function () {
      return "G1" + Xd(Pd);
    },
    ee = function (a, b) {
      Wd(a, b);
    },
    fe = function (a, b) {
      Vd(a, b);
    };
  var he = function (a) {
      return ge ? B.querySelectorAll(a) : null;
    },
    ie = function (a, b) {
      if (!ge) return null;
      if (Element.prototype.closest)
        try {
          return a.closest(b);
        } catch (e) {
          return null;
        }
      var c =
          Element.prototype.matches ||
          Element.prototype.webkitMatchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector ||
          Element.prototype.oMatchesSelector,
        d = a;
      if (!B.documentElement.contains(d)) return null;
      do {
        try {
          if (c.call(d, b)) return d;
        } catch (e) {
          break;
        }
        d = d.parentElement || d.parentNode;
      } while (null !== d && 1 === d.nodeType);
      return null;
    },
    je = !1;
  if (B.querySelectorAll)
    try {
      var ke = B.querySelectorAll(":root");
      ke && 1 == ke.length && ke[0] == B.documentElement && (je = !0);
    } catch (a) {}
  var ge = je;
  var le,
    me = !1,
    ne = function (a) {
      if (!me) {
        me = !0;
        le = le || {};
      }
      return le[a];
    };
  var oe = function (a) {
    if (B.hidden) return !0;
    var b = a.getBoundingClientRect();
    if (b.top == b.bottom || b.left == b.right || !m.getComputedStyle)
      return !0;
    var c = m.getComputedStyle(a, null);
    if ("hidden" === c.visibility) return !0;
    for (var d = a, e = c; d; ) {
      if ("none" === e.display) return !0;
      var f = e.opacity,
        g = e.filter;
      if (g) {
        var k = g.indexOf("opacity(");
        0 <= k &&
          ((g = g.substring(k + 8, g.indexOf(")", k))),
          "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)),
          (f = Math.min(g, f)));
      }
      if (void 0 !== f && 0 >= f) return !0;
      (d = d.parentElement) && (e = m.getComputedStyle(d, null));
    }
    return !1;
  };
  var xe = /:[0-9]+$/,
    ye = function (a, b, c) {
      for (var d = a.split("&"), e = 0; e < d.length; e++) {
        var f = d[e].split("=");
        if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
          var g = f.slice(1).join("=");
          return c ? g : decodeURIComponent(g).replace(/\+/g, " ");
        }
      }
    },
    Be = function (a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if ("protocol" === b || "port" === b)
        a.protocol = ze(a.protocol) || ze(m.location.protocol);
      "port" === b
        ? (a.port = String(
            Number(a.hostname ? a.port : m.location.port) ||
              ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")
          ))
        : "host" === b &&
          (a.hostname = (a.hostname || m.location.hostname)
            .replace(xe, "")
            .toLowerCase());
      return Ae(a, b, c, d, e);
    },
    Ae = function (a, b, c, d, e) {
      var f,
        g = ze(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case "url_no_fragment":
          f = Ce(a);
          break;
        case "protocol":
          f = g;
          break;
        case "host":
          f = a.hostname.replace(xe, "").toLowerCase();
          if (c) {
            var k = /^www\d*\./.exec(f);
            k && k[0] && (f = f.substr(k[0].length));
          }
          break;
        case "port":
          f = String(
            Number(a.port) || ("http" == g ? 80 : "https" == g ? 443 : "")
          );
          break;
        case "path":
          a.pathname || a.hostname || sa("TAGGING", 1);
          f = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
          var l = f.split("/");
          0 <= za(d || [], l[l.length - 1]) && (l[l.length - 1] = "");
          f = l.join("/");
          break;
        case "query":
          f = a.search.replace("?", "");
          e && (f = ye(f, e, void 0));
          break;
        case "extension":
          var n = a.pathname.split(".");
          f = 1 < n.length ? n[n.length - 1] : "";
          f = f.split("/")[0];
          break;
        case "fragment":
          f = a.hash.replace("#", "");
          break;
        default:
          f = a && a.href;
      }
      return f;
    },
    ze = function (a) {
      return a ? a.replace(":", "").toLowerCase() : "";
    },
    Ce = function (a) {
      var b = "";
      if (a && a.href) {
        var c = a.href.indexOf("#");
        b = 0 > c ? a.href : a.href.substr(0, c);
      }
      return b;
    },
    De = function (a) {
      var b = B.createElement("a");
      a && (b.href = a);
      var c = b.pathname;
      "/" !== c[0] && (a || sa("TAGGING", 1), (c = "/" + c));
      var d = b.hostname.replace(xe, "");
      return {
        href: b.href,
        protocol: b.protocol,
        host: b.host,
        hostname: d,
        pathname: c,
        search: b.search,
        hash: b.hash,
        port: b.port,
      };
    },
    Ee = function (a) {
      function b(n) {
        var p = n.split("=")[0];
        return 0 > d.indexOf(p) ? n : p + "=0";
      }
      function c(n) {
        return n
          .split("&")
          .map(b)
          .filter(function (p) {
            return void 0 != p;
          })
          .join("&");
      }
      var d =
          "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(
            " "
          ),
        e = De(a),
        f = a.split(/[?#]/)[0],
        g = e.search,
        k = e.hash;
      "?" === g[0] && (g = g.substring(1));
      "#" === k[0] && (k = k.substring(1));
      g = c(g);
      k = c(k);
      "" !== g && (g = "?" + g);
      "" !== k && (k = "#" + k);
      var l = "" + f + g + k;
      "/" === l[l.length - 1] && (l = l.substring(0, l.length - 1));
      return l;
    };
  var He = {},
    Ie = !0,
    Je = !1;
  He.Kg = "true";
  var Ke = function (a) {
    if ("false" === He.Kg || !Ie) return !1;
    if (Je) return !0;
    var b = ne("AW-" + a);
    return !!b && !!b.preAutoPii;
  };
  var Le = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),
    Me = new RegExp(/@(gmail|googlemail)\./i),
    Ne = new RegExp(/support|noreply/i),
    Oe = "SCRIPT STYLE IMG SVG PATH BR".split(" "),
    Pe = ["BR"],
    Qe = {};
  function Re(a) {
    var b;
    if (a === B.body) b = "body";
    else {
      var c;
      if (a.id) c = "#" + a.id;
      else {
        var d;
        if (a.parentElement) {
          var e;
          a: {
            var f = a.parentElement;
            if (f) {
              for (var g = 0; g < f.childElementCount; g++)
                if (f.children[g] === a) {
                  e = g + 1;
                  break a;
                }
              e = -1;
            } else e = 1;
          }
          d = Re(a.parentElement) + ">:nth-child(" + e + ")";
        } else d = "";
        c = d;
      }
      b = c;
    }
    return b;
  }
  function Se(a, b) {
    if (1 >= a.length) return a;
    var c = a.filter(b);
    return 0 == c.length ? a : c;
  }
  function Te(a) {
    if (0 == a.length) return null;
    var b;
    b = Se(a, function (c) {
      return !Ne.test(c.wa);
    });
    b = Se(b, function (c) {
      return "INPUT" === c.element.tagName.toUpperCase();
    });
    b = Se(b, function (c) {
      return !oe(c.element);
    });
    return b[0];
  }
  var Ue = function (a) {
      a = a || { Ce: !0, De: !0 };
      a.ab = a.ab || { email: !0, phone: !0, Vf: !0 };
      var b,
        c = a,
        d = !!c.Ce + "." + !!c.De;
      c && c.nd && c.nd.length && (d += "." + c.nd.join("."));
      c && c.ab && (d += "." + c.ab.email + "." + c.ab.phone + "." + c.ab.Vf);
      b = d;
      var e = Qe[b];
      if (e && 200 > Sa() - e.timestamp) return e.result;
      var f;
      var g = [],
        k = B.body;
      if (k) {
        for (
          var l = k.querySelectorAll("*"), n = 0;
          n < l.length && 1e4 > n;
          n++
        ) {
          var p = l[n];
          if (!(0 <= Oe.indexOf(p.tagName.toUpperCase()))) {
            for (var q = !1, t = 0; t < p.childElementCount && 1e4 > t; t++)
              if (!(0 <= Pe.indexOf(p.children[t].tagName.toUpperCase()))) {
                q = !0;
                break;
              }
            q || g.push(p);
          }
        }
        f = { elements: g, status: 1e4 < l.length ? "2" : "1" };
      } else f = { elements: g, status: "4" };
      var u = f,
        r = u.status,
        v;
      if (a.ab && a.ab.email) {
        for (var x = u.elements, z = [], w = 0; w < x.length; w++) {
          var y = x[w],
            A = y.textContent;
          y.value && (A = y.value);
          if (A) {
            var C = A.match(Le);
            if (C) {
              var D = C[0],
                F;
              if (m.location) {
                var E = Ae(m.location, "host", !0);
                F = 0 <= D.toLowerCase().indexOf(E);
              } else F = !1;
              F || z.push({ element: y, wa: D });
            }
          }
        }
        var O;
        var J = a && a.nd;
        if (J && 0 !== J.length) {
          for (var K = [], V = 0; V < z.length; V++) {
            for (var L = !0, I = 0; I < J.length; I++) {
              var P = J[I];
              if (P && ie(z[V].element, P)) {
                L = !1;
                break;
              }
            }
            L && K.push(z[V]);
          }
          O = K;
        } else O = z;
        v = Te(O);
        10 < z.length && (r = "3");
      }
      var ba = [];
      if (v) {
        var da = v.element,
          Q = { wa: v.wa, tagName: da.tagName, type: 1 };
        a.Ce && (Q.querySelector = Re(da));
        a.De && (Q.isVisible = !oe(da));
        ba.push(Q);
      }
      var U = { elements: ba, status: r };
      Qe[b] = { timestamp: Sa(), result: U };
      return U;
    },
    Ve = function (a) {
      return (
        a.tagName + ":" + a.isVisible + ":" + a.wa.length + ":" + Me.test(a.wa)
      );
    };
  var We = function (a) {
      return /^e\d+$/.test(a) || /^[0-9A-Za-z_-]{43}$/.test(a);
    },
    Xe = function (a) {
      return void 0 === a || null === a ? "" : h(a) ? Pa(String(a)) : "e0";
    },
    Ze = function (a) {
      return a.replace(Ye, "");
    },
    af = function (a) {
      return $e(a.replace(/\s/g, ""));
    },
    $e = function (a) {
      return Pa(a.replace(bf, "").toLowerCase());
    },
    df = function (a) {
      a = a.replace(/[\s-()/.]/g, "");
      "+" !== a.charAt(0) && (a = "+" + a);
      return cf.test(a) ? a : "e0";
    },
    ff = function (a) {
      var b = a.toLowerCase().split("@");
      if (2 == b.length) {
        var c = b[0];
        /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
        c = c + "@" + b[1];
        if (ef.test(c)) return c;
      }
      return "e0";
    },
    jf = function (a, b, c) {
      window.Promise || c([], []);
      Promise.all(
        a.map(function (d) {
          return d.value && gf(d.name)
            ? hf(d.value).then(function (e) {
                d.value = e;
              })
            : Promise.resolve();
        })
      )
        .then(function () {
          c(a, b);
        })
        .catch(function () {
          c([], []);
        });
    },
    hf = function (a) {
      if ("" === a || "e0" === a) return Promise.resolve(a);
      if (m.crypto && m.crypto.subtle)
        try {
          var b = kf(a);
          return m.crypto.subtle
            .digest("SHA-256", b)
            .then(function (c) {
              var d = Array.from(new Uint8Array(c))
                .map(function (e) {
                  return String.fromCharCode(e);
                })
                .join("");
              return m
                .btoa(d)
                .replace(/\+/g, "-")
                .replace(/\//g, "_")
                .replace(/=+$/, "");
            })
            .catch(function () {
              return "e2";
            });
        } catch (c) {
          return Promise.resolve("e2");
        }
      else return Promise.resolve("e1");
    },
    kf = function (a) {
      var b;
      if (m.TextEncoder) b = new m.TextEncoder("utf-8").encode(a);
      else {
        for (var c = [], d = 0; d < a.length; d++) {
          var e = a.charCodeAt(d);
          128 > e
            ? c.push(e)
            : 2048 > e
            ? c.push(192 | (e >> 6), 128 | (e & 63))
            : 55296 > e || 57344 <= e
            ? c.push(224 | (e >> 12), 128 | ((e >> 6) & 63), 128 | (e & 63))
            : ((e = 65536 + (((e & 1023) << 10) | (a.charCodeAt(++d) & 1023))),
              c.push(
                240 | (e >> 18),
                128 | ((e >> 12) & 63),
                128 | ((e >> 6) & 63),
                128 | (e & 63)
              ));
        }
        b = new Uint8Array(c);
      }
      return b;
    },
    bf = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
    ef = /^\S+@\S+\.\S+$/,
    cf = /^\+\d{11,15}$/,
    Ye = /[.~]/g,
    lf = {},
    mf =
      ((lf.email = "em"),
      (lf.phone_number = "pn"),
      (lf.first_name = "fn"),
      (lf.last_name = "ln"),
      (lf.street = "sa"),
      (lf.city = "ct"),
      (lf.region = "rg"),
      (lf.country = "co"),
      (lf.postal_code = "pc"),
      (lf.error_code = "ec"),
      lf),
    nf = function (a, b, c) {
      function d(r, v, x) {
        var z = r[v];
        ya(z) || (z = [z]);
        for (var w = 0; w < z.length; ++w) {
          var y = Xe(z[w]);
          "" !== y && g.push({ name: v, value: x(y), index: void 0 });
        }
      }
      function e(r, v, x, z) {
        var w = Xe(r[v]);
        "" !== w && g.push({ name: v, value: x(w), index: z });
      }
      function f(r) {
        return function (v) {
          ud(64);
          return r(v);
        };
      }
      var g = [],
        k = [];
      if ("https:" === m.location.protocol) {
        var l = function (r, v) {
          var x = r[v];
          ya(x) || (x = [x]);
          for (var z = 0; z < x.length; ++z) {
            var w = Xe(x[z]);
            if ("" !== w) return w;
          }
          return null;
        };
        d(a, "email", ff);
        var n = l(a, "email");
        if (n)
          for (var p = 0; p < b.length; p++)
            k.push(b[p].wa.toLowerCase() === n.toLowerCase());
        d(a, "phone_number", df);
        d(a, "first_name", f(af));
        d(a, "last_name", f(af));
        var q = a.home_address || {};
        d(q, "street", f($e));
        d(q, "city", f($e));
        d(q, "postal_code", f(Ze));
        d(q, "region", f($e));
        d(q, "country", f(Ze));
        var t = a.address || {};
        ya(t) || (t = [t]);
        for (var u = 0; u < t.length; u++)
          e(t[u], "first_name", af, u),
            e(t[u], "last_name", af, u),
            e(t[u], "street", $e, u),
            e(t[u], "city", $e, u),
            e(t[u], "postal_code", Ze, u),
            e(t[u], "region", $e, u),
            e(t[u], "country", Ze, u);
        jf(g, k, c);
      } else
        g.push({ name: "error_code", value: "e3", index: void 0 }), c(g, k);
    },
    of = function (a, b) {
      nf(a, [], function (c, d) {
        for (var e = ["tv.1"], f = 0; f < c.length; ++f) {
          var g = c[f].name,
            k = c[f].value,
            l = c[f].index,
            n = mf[g];
          n &&
            k &&
            (!gf(g) || We(k)) &&
            (void 0 !== l && (n += l), e.push(n + "." + k));
        }
        b(encodeURIComponent(e.join("~")), d);
      });
    },
    pf = function (a, b) {
      if (m.Promise)
        try {
          return new Promise(function (c) {
            nf(a, b, function (d, e) {
              for (var f = ["tv.1"], g = 0; g < d.length; ++g) {
                var k = d[g].name,
                  l = d[g].value,
                  n = d[g].index,
                  p = mf[k];
                p &&
                  l &&
                  (!gf(k) || We(l)) &&
                  (void 0 !== n && (p += n), f.push(p + "." + l));
              }
              c({ xc: encodeURIComponent(f.join("~")), kc: e });
            });
          });
        } catch (c) {}
    },
    gf = function (a) {
      return (
        -1 !==
        ["email", "phone_number", "first_name", "last_name", "street"].indexOf(
          a
        )
      );
    };
  var qf = function () {
      this.eventModel = {};
      this.targetConfig = {};
      this.containerConfig = {};
      this.remoteConfig = {};
      this.globalConfig = {};
      this.onSuccess = function () {};
      this.onFailure = function () {};
      this.setContainerTypeLoaded = function () {};
      this.getContainerTypeLoaded = function () {};
      this.eventId = void 0;
      this.isGtmEvent = !1;
    },
    rf = function (a) {
      var b = new qf();
      b.eventModel = a;
      return b;
    },
    sf = function (a, b) {
      a.targetConfig = b;
      return a;
    },
    tf = function (a, b) {
      a.containerConfig = b;
      return a;
    },
    uf = function (a, b) {
      a.remoteConfig = b;
      return a;
    },
    vf = function (a, b) {
      a.globalConfig = b;
      return a;
    },
    wf = function (a, b) {
      a.onSuccess = b;
      return a;
    },
    xf = function (a, b) {
      a.setContainerTypeLoaded = b;
      return a;
    },
    yf = function (a, b) {
      a.getContainerTypeLoaded = b;
      return a;
    },
    zf = function (a, b) {
      a.onFailure = b;
      return a;
    };
  qf.prototype.getWithConfig = function (a) {
    if (void 0 !== this.eventModel[a]) return this.eventModel[a];
    if (void 0 !== this.targetConfig[a]) return this.targetConfig[a];
    if (void 0 !== this.containerConfig[a]) return this.containerConfig[a];
    if (void 0 !== this.remoteConfig[a]) return this.remoteConfig[a];
    if (void 0 !== this.globalConfig[a]) return this.globalConfig[a];
  };
  var Af = function (a) {
      function b(d) {
        for (var e = Object.keys(d), f = 0; f < e.length; ++f) c[e[f]] = 1;
      }
      var c = {};
      b(a.eventModel);
      b(a.targetConfig);
      b(a.containerConfig);
      b(a.globalConfig);
      return Object.keys(c);
    },
    Bf = function (a, b, c) {
      function d(g) {
        Xb(g) &&
          Ia(g, function (k, l) {
            f = !0;
            e[k] = l;
          });
      }
      var e = {},
        f = !1;
      (c && 1 !== c) ||
        (d(a.globalConfig[b]),
        d(a.remoteConfig[b]),
        d(a.containerConfig[b]),
        d(a.targetConfig[b]));
      (c && 2 !== c) || d(a.eventModel[b]);
      return f ? e : void 0;
    };
  var Cf = {},
    N = null,
    Df = Math.random();
  Cf.M = "UA-120946860-10";
  Cf.bd = "8u0";
  Cf.Pg =
    "ChAI8Mm8iQYQzYWhtPbpsJobEigAdszjzJux/VIofYZSyLpy5lWPDYPXdNONd6+8Cjg3dyqtO+ln7XOAGgIYOA\x3d\x3d";
  var Ef = {
      __cl: !0,
      __ecl: !0,
      __ehl: !0,
      __evl: !0,
      __fal: !0,
      __fil: !0,
      __fsl: !0,
      __hl: !0,
      __jel: !0,
      __lcl: !0,
      __sdl: !0,
      __tl: !0,
      __ytl: !0,
    },
    Ff = { __paused: !0, __tg: !0 },
    Gf;
  for (Gf in Ef) Ef.hasOwnProperty(Gf) && (Ff[Gf] = !0);
  var Hf = "www.googletagmanager.com/gtm.js";
  Hf = "www.googletagmanager.com/gtag/js";
  var If = Hf,
    Jf = Na(""),
    Kf = null,
    Lf = null,
    Mf = "https://www.googletagmanager.com/a?id=" + Cf.M + "&cv=1",
    Nf = {},
    Of = {},
    Pf = function () {
      var a = N.sequence || 1;
      N.sequence = a + 1;
      return a;
    };
  Cf.Og = "";
  var Qf = {},
    Rf = new Fa(),
    Sf = {},
    Tf = {},
    Wf = {
      name: "dataLayer",
      set: function (a, b) {
        H(Za(a, b), Sf);
        Uf();
      },
      get: function (a) {
        return Vf(a, 2);
      },
      reset: function () {
        Rf = new Fa();
        Sf = {};
        Uf();
      },
    },
    Vf = function (a, b) {
      return 2 != b ? Rf.get(a) : Xf(a);
    },
    Xf = function (a) {
      var b,
        c = a.split(".");
      b = b || [];
      for (var d = Sf, e = 0; e < c.length; e++) {
        if (null === d) return !1;
        if (void 0 === d) break;
        d = d[c[e]];
        if (-1 !== za(b, d)) return;
      }
      return d;
    },
    Yf = function (a, b) {
      Tf.hasOwnProperty(a) || (Rf.set(a, b), H(Za(a, b), Sf), Uf());
    },
    Uf = function (a) {
      Ia(Tf, function (b, c) {
        Rf.set(b, c);
        H(Za(b, void 0), Sf);
        H(Za(b, c), Sf);
        a && delete Tf[b];
      });
    },
    $f = function (a, b, c) {
      Qf[a] = Qf[a] || {};
      Qf[a][b] = Zf(b, c);
    },
    Zf = function (a, b) {
      var c,
        d = 1 !== (void 0 === b ? 2 : b) ? Xf(a) : Rf.get(a);
      "array" === Vb(d) || "object" === Vb(d) ? (c = H(d)) : (c = d);
      return c;
    },
    ag = function (a, b) {
      if (Qf[a]) return Qf[a][b];
    },
    bg = function (a, b) {
      Qf[a] && delete Qf[a][b];
    };
  var cg = function (a, b, c) {
      if (c) {
        var d = c.selector_type,
          e = String(c.value),
          f;
        if ("js_variable" === d) {
          e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
          for (var g = e.split(","), k = 0; k < g.length; k++) {
            var l = g[k].trim();
            if (l) {
              if (0 === l.indexOf("dataLayer.")) f = Vf(l.substring(10));
              else {
                var n = l.split(".");
                f = m[n.shift()];
                for (var p = 0; p < n.length; p++) f = f && f[n[p]];
              }
              if (void 0 !== f) break;
            }
          }
        } else if ("css_selector" === d && ge) {
          var q = he(e);
          q && 0 < q.length && (f = Mb(q[0]) || Pa(q[0].value));
        }
        f && (a[b] = f);
      }
    },
    dg = function (a) {
      if (a) {
        var b = {};
        cg(b, "email", a.email);
        cg(b, "phone_number", a.phone);
        b.address = [];
        for (var c = a.name_and_address || [], d = 0; d < c.length; d++) {
          var e = {};
          cg(e, "first_name", c[d].first_name);
          cg(e, "last_name", c[d].last_name);
          cg(e, "street", c[d].street);
          cg(e, "city", c[d].city);
          cg(e, "region", c[d].region);
          cg(e, "country", c[d].country);
          cg(e, "postal_code", c[d].postal_code);
          b.address.push(e);
        }
        return b;
      }
    },
    eg = function (a) {
      if (a)
        switch (a.mode) {
          case "selectors":
            return dg(a.selectors);
          case "auto_detect":
            var b;
            var c = a.auto_detect;
            if (c) {
              var d = Ue({
                  Ce: !1,
                  De: !1,
                  nd: c.exclude_element_selectors,
                  ab: { email: !!c.email, phone: !!c.phone, Vf: !!c.address },
                }).elements,
                e = {};
              if (0 < d.length)
                for (var f = 0; f < d.length; f++) {
                  var g = d[f];
                  if (1 === g.type) {
                    e.email = g.wa;
                    break;
                  }
                }
              b = e;
            } else b = void 0;
            return b;
        }
    },
    fg = function (a) {
      switch (a.enhanced_conversions_mode) {
        case "manual":
          var b = a.enhanced_conversions_manual_var;
          return void 0 !== b ? b : m.enhanced_conversion_data;
        case "automatic":
          return dg(a[M.qf]);
      }
    };
  var gg = {},
    hg = function (a, b) {
      if (m._gtmexpgrp && m._gtmexpgrp.hasOwnProperty(a))
        return m._gtmexpgrp[a];
      void 0 === gg[a] && (gg[a] = Math.floor(Math.random() * b));
      return gg[a];
    };
  function ig(a, b, c) {
    for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
      var g = e[f].split("="),
        k = g[0].replace(/^\s*|\s*$/g, "");
      if (k && k == a) {
        var l = g
          .slice(1)
          .join("=")
          .replace(/^\s*|\s*$/g, "");
        l && c && (l = decodeURIComponent(l));
        d.push(l);
      }
    }
    return d;
  }
  function jg(a) {
    return "null" !== a.origin;
  }
  var mg = function (a, b, c, d) {
      return kg(d) ? ig(a, String(b || lg()), c) : [];
    },
    tg = function (a, b, c, d, e) {
      if (kg(e)) {
        var f = ng(a, d, e);
        if (1 === f.length) return f[0].id;
        if (0 !== f.length) {
          f = og(
            f,
            function (g) {
              return g.kd;
            },
            b
          );
          if (1 === f.length) return f[0].id;
          f = og(
            f,
            function (g) {
              return g.yc;
            },
            c
          );
          return f[0] ? f[0].id : void 0;
        }
      }
    };
  function ug(a, b, c, d) {
    var e = lg(),
      f = window;
    jg(f) && (f.document.cookie = a);
    var g = lg();
    return e != g || (void 0 != c && 0 <= mg(b, g, !1, d).indexOf(c));
  }
  var yg = function (a, b, c) {
      function d(u, r, v) {
        if (null == v) return delete g[r], u;
        g[r] = v;
        return u + "; " + r + "=" + v;
      }
      function e(u, r) {
        if (null == r) return delete g[r], u;
        g[r] = !0;
        return u + "; " + r;
      }
      if (!kg(c.Ta)) return 2;
      var f;
      void 0 == b
        ? (f = a + "=deleted; expires=" + new Date(0).toUTCString())
        : (c.encode && (b = encodeURIComponent(b)),
          (b = vg(b)),
          (f = a + "=" + b));
      var g = {};
      f = d(f, "path", c.path);
      var k;
      c.expires instanceof Date
        ? (k = c.expires.toUTCString())
        : null != c.expires && (k = "" + c.expires);
      f = d(f, "expires", k);
      f = d(f, "max-age", c.rj);
      f = d(f, "samesite", c.sj);
      c.tj && (f = e(f, "secure"));
      var l = c.domain;
      if ("auto" === l) {
        for (var n = wg(), p = 0; p < n.length; ++p) {
          var q = "none" !== n[p] ? n[p] : void 0,
            t = d(f, "domain", q);
          t = e(t, c.flags);
          if (!xg(q, c.path) && ug(t, a, b, c.Ta)) return 0;
        }
        return 1;
      }
      l && "none" !== l && (f = d(f, "domain", l));
      f = e(f, c.flags);
      return xg(l, c.path) ? 1 : ug(f, a, b, c.Ta) ? 0 : 1;
    },
    zg = function (a, b, c) {
      null == c.path && (c.path = "/");
      c.domain || (c.domain = "auto");
      return yg(a, b, c);
    };
  function og(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var k = a[g],
        l = b(k);
      l === c
        ? d.push(k)
        : void 0 === f || l < f
        ? ((e = [k]), (f = l))
        : l === f && e.push(k);
    }
    return 0 < d.length ? d : e;
  }
  function ng(a, b, c) {
    for (var d = [], e = mg(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split("."),
        k = g.shift();
      if (!b || -1 !== b.indexOf(k)) {
        var l = g.shift();
        l &&
          ((l = l.split("-")),
          d.push({ id: g.join("."), kd: 1 * l[0] || 1, yc: 1 * l[1] || 1 }));
      }
    }
    return d;
  }
  var vg = function (a) {
      a && 1200 < a.length && (a = a.substring(0, 1200));
      return a;
    },
    Ag = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    Bg = /(^|\.)doubleclick\.net$/i,
    xg = function (a, b) {
      return (
        Bg.test(window.document.location.hostname) || ("/" === b && Ag.test(a))
      );
    },
    lg = function () {
      return jg(window) ? window.document.cookie : "";
    },
    wg = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (4 === b.length) {
        var c = b[b.length - 1];
        if (parseInt(c, 10).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      Bg.test(e) || Ag.test(e) || a.push("none");
      return a;
    },
    kg = function (a) {
      if (!xd().o() || !a || !Rd()) return !0;
      if (!Qd(a)) return !1;
      var b = Od(a);
      return null == b ? !0 : !!b;
    };
  var Cg = function () {
      return [
        Math.round(2147483647 * Math.random()),
        Math.round(Sa() / 1e3),
      ].join(".");
    },
    Fg = function (a, b, c, d, e) {
      var f = Dg(b);
      return tg(a, f, Eg(c), d, e);
    },
    Gg = function (a, b, c, d) {
      var e = "" + Dg(c),
        f = Eg(d);
      1 < f && (e += "-" + f);
      return [b, e, a].join(".");
    },
    Dg = function (a) {
      if (!a) return 1;
      a = 0 === a.indexOf(".") ? a.substr(1) : a;
      return a.split(".").length;
    },
    Eg = function (a) {
      if (!a || "/" === a) return 1;
      "/" !== a[0] && (a = "/" + a);
      "/" !== a[a.length - 1] && (a += "/");
      return a.split("/").length - 1;
    };
  function Hg(a, b, c) {
    var d,
      e = Number(null != a.pb ? a.pb : void 0);
    0 !== e && (d = new Date((b || Sa()) + 1e3 * (e || 7776e3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: d,
    };
  }
  var Ig = ["1"],
    Jg = {},
    Ng = function (a, b) {
      b = void 0 === b ? !0 : b;
      var c = Kg(a.prefix);
      if (!Jg[c] && !Lg(c, a.path, a.domain) && b) {
        var d = Kg(a.prefix),
          e = Cg();
        if (0 === Mg(d, e, a)) {
          var f = Bb("google_tag_data", {});
          f._gcl_au ? sa("GTM", 57) : (f._gcl_au = e);
        }
        Lg(c, a.path, a.domain);
      }
    };
  function Mg(a, b, c) {
    var d = Gg(b, "1", c.domain, c.path),
      e = Hg(c);
    e.Ta = "ad_storage";
    return zg(a, d, e);
  }
  function Lg(a, b, c) {
    var d = Fg(a, b, c, Ig, "ad_storage");
    d && (Jg[a] = d);
    return d;
  }
  function Kg(a) {
    return (a || "_gcl") + "_au";
  }
  var Og = function (a) {
    for (
      var b = [],
        c = B.cookie.split(";"),
        d = new RegExp(
          "^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"
        ),
        e = 0;
      e < c.length;
      e++
    ) {
      var f = c[e].match(d);
      f &&
        b.push({
          Ue: f[1],
          value: f[2],
          timestamp: Number(f[2].split(".")[1]) || 0,
        });
    }
    b.sort(function (g, k) {
      return k.timestamp - g.timestamp;
    });
    return b;
  };
  function Pg(a, b) {
    var c = Og(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (
        !("1" !== f[0] || (b && 3 > f.length) || (!b && 3 !== f.length)) &&
        Number(f[1])
      ) {
        d[c[e].Ue] || (d[c[e].Ue] = []);
        var g = { version: f[0], timestamp: 1e3 * Number(f[1]), ra: f[2] };
        b && 3 < f.length && (g.labels = f.slice(3));
        d[c[e].Ue].push(g);
      }
    }
    return d;
  }
  function Qg() {
    for (var a = Rg, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function Sg() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var Rg, Tg;
  function Ug(a) {
    function b(l) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          p = Tg[n];
        if (null != p) return p;
        if (!/^[\s\xa0]*$/.test(n))
          throw Error("Unknown base64 encoding at char: " + n);
      }
      return l;
    }
    Rg = Rg || Sg();
    Tg = Tg || Qg();
    for (var c = "", d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        g = b(64),
        k = b(64);
      if (64 === k && -1 === e) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      64 != g &&
        ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
        64 != k && (c += String.fromCharCode(((g << 6) & 192) | k)));
    }
  }
  var Vg;
  var Zg = function () {
      var a = Wg,
        b = Xg,
        c = Yg(),
        d = function (g) {
          a(g.target || g.srcElement || {});
        },
        e = function (g) {
          b(g.target || g.srcElement || {});
        };
      if (!c.init) {
        Hb(B, "mousedown", d);
        Hb(B, "keyup", d);
        Hb(B, "submit", e);
        var f = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function () {
          b(this);
          f.call(this);
        };
        c.init = !0;
      }
    },
    $g = function (a, b, c, d, e) {
      var f = {
        callback: a,
        domains: b,
        fragment: 2 === c,
        placement: c,
        forms: d,
        sameHost: e,
      };
      Yg().decorators.push(f);
    },
    ah = function (a, b, c) {
      for (var d = Yg().decorators, e = {}, f = 0; f < d.length; ++f) {
        var g = d[f],
          k;
        if ((k = !c || g.forms))
          a: {
            var l = g.domains,
              n = a,
              p = !!g.sameHost;
            if (l && (p || n !== B.location.hostname))
              for (var q = 0; q < l.length; q++)
                if (l[q] instanceof RegExp) {
                  if (l[q].test(n)) {
                    k = !0;
                    break a;
                  }
                } else if (
                  0 <= n.indexOf(l[q]) ||
                  (p && 0 <= l[q].indexOf(n))
                ) {
                  k = !0;
                  break a;
                }
            k = !1;
          }
        if (k) {
          var t = g.placement;
          void 0 == t && (t = g.fragment ? 2 : 1);
          t === b && Wa(e, g.callback());
        }
      }
      return e;
    },
    Yg = function () {
      var a = Bb("google_tag_data", {}),
        b = a.gl;
      (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
      return b;
    };
  var bh = /(.*?)\*(.*?)\*(.*)/,
    ch = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    dh = /^(?:www\.|m\.|amp\.)+/,
    eh = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function fh(a) {
    return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)");
  }
  var hh = function (a) {
      var b = [],
        c;
      for (c in a)
        if (a.hasOwnProperty(c)) {
          var d = a[c];
          if (
            void 0 !== d &&
            d === d &&
            null !== d &&
            "[object Object]" !== d.toString()
          ) {
            b.push(c);
            var e = b,
              f = e.push,
              g,
              k = String(d);
            Rg = Rg || Sg();
            Tg = Tg || Qg();
            for (var l = [], n = 0; n < k.length; n += 3) {
              var p = n + 1 < k.length,
                q = n + 2 < k.length,
                t = k.charCodeAt(n),
                u = p ? k.charCodeAt(n + 1) : 0,
                r = q ? k.charCodeAt(n + 2) : 0,
                v = t >> 2,
                x = ((t & 3) << 4) | (u >> 4),
                z = ((u & 15) << 2) | (r >> 6),
                w = r & 63;
              q || ((w = 64), p || (z = 64));
              l.push(Rg[v], Rg[x], Rg[z], Rg[w]);
            }
            g = l.join("");
            f.call(e, g);
          }
        }
      var y = b.join("*");
      return ["1", gh(y), y].join("*");
    },
    gh = function (a, b) {
      var c = [
          window.navigator.userAgent,
          new Date().getTimezoneOffset(),
          window.navigator.userLanguage || window.navigator.language,
          Math.floor(new Date().getTime() / 60 / 1e3) - (void 0 === b ? 0 : b),
          a,
        ].join("*"),
        d;
      if (!(d = Vg)) {
        for (var e = Array(256), f = 0; 256 > f; f++) {
          for (var g = f, k = 0; 8 > k; k++)
            g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1;
          e[f] = g;
        }
        d = e;
      }
      Vg = d;
      for (var l = 4294967295, n = 0; n < c.length; n++)
        l = (l >>> 8) ^ Vg[(l ^ c.charCodeAt(n)) & 255];
      return ((l ^ -1) >>> 0).toString(36);
    },
    jh = function () {
      return function (a) {
        var b = De(m.location.href),
          c = b.search.replace("?", ""),
          d = ye(c, "_gl", !0) || "";
        a.query = ih(d) || {};
        var e = Be(b, "fragment").match(fh("_gl"));
        a.fragment = ih((e && e[3]) || "") || {};
      };
    },
    kh = function (a) {
      var b = jh(),
        c = Yg();
      c.data || ((c.data = { query: {}, fragment: {} }), b(c.data));
      var d = {},
        e = c.data;
      e && (Wa(d, e.query), a && Wa(d, e.fragment));
      return d;
    },
    ih = function (a) {
      var b;
      b = void 0 === b ? 3 : b;
      try {
        if (a) {
          var c;
          a: {
            for (var d = a, e = 0; 3 > e; ++e) {
              var f = bh.exec(d);
              if (f) {
                c = f;
                break a;
              }
              d = decodeURIComponent(d);
            }
            c = void 0;
          }
          var g = c;
          if (g && "1" === g[1]) {
            var k = g[3],
              l;
            a: {
              for (var n = g[2], p = 0; p < b; ++p)
                if (n === gh(k, p)) {
                  l = !0;
                  break a;
                }
              l = !1;
            }
            if (l) {
              for (
                var q = {}, t = k ? k.split("*") : [], u = 0;
                u < t.length;
                u += 2
              )
                q[t[u]] = Ug(t[u + 1]);
              return q;
            }
          }
        }
      } catch (r) {}
    };
  function lh(a, b, c, d) {
    function e(p) {
      var q = p,
        t = fh(a).exec(q),
        u = q;
      if (t) {
        var r = t[2],
          v = t[4];
        u = t[1];
        v && (u = u + r + v);
      }
      p = u;
      var x = p.charAt(p.length - 1);
      p && "&" !== x && (p += "&");
      return p + n;
    }
    d = void 0 === d ? !1 : d;
    var f = eh.exec(c);
    if (!f) return "";
    var g = f[1],
      k = f[2] || "",
      l = f[3] || "",
      n = a + "=" + b;
    d ? (l = "#" + e(l.substring(1))) : (k = "?" + e(k.substring(1)));
    return "" + g + k + l;
  }
  function mh(a, b) {
    var c = "FORM" === (a.tagName || "").toUpperCase(),
      d = ah(b, 1, c),
      e = ah(b, 2, c),
      f = ah(b, 3, c);
    if (Xa(d)) {
      var g = hh(d);
      c ? nh("_gl", g, a) : oh("_gl", g, a, !1);
    }
    if (!c && Xa(e)) {
      var k = hh(e);
      oh("_gl", k, a, !0);
    }
    for (var l in f)
      if (f.hasOwnProperty(l))
        a: {
          var n = l,
            p = f[l],
            q = a;
          if (q.tagName) {
            if ("a" === q.tagName.toLowerCase()) {
              oh(n, p, q, void 0);
              break a;
            }
            if ("form" === q.tagName.toLowerCase()) {
              nh(n, p, q);
              break a;
            }
          }
          "string" == typeof q && lh(n, p, q, void 0);
        }
  }
  function oh(a, b, c, d) {
    if (c.href) {
      var e = lh(a, b, c.href, void 0 === d ? !1 : d);
      gb.test(e) && (c.href = e);
    }
  }
  function nh(a, b, c) {
    if (c && c.action) {
      var d = (c.method || "").toLowerCase();
      if ("get" === d) {
        for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
          var k = e[g];
          if (k.name === a) {
            k.setAttribute("value", b);
            f = !0;
            break;
          }
        }
        if (!f) {
          var l = B.createElement("input");
          l.setAttribute("type", "hidden");
          l.setAttribute("name", a);
          l.setAttribute("value", b);
          c.appendChild(l);
        }
      } else if ("post" === d) {
        var n = lh(a, b, c.action);
        gb.test(n) && (c.action = n);
      }
    }
  }
  var Wg = function (a) {
      try {
        var b;
        a: {
          for (var c = a, d = 100; c && 0 < d; ) {
            if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
              b = c;
              break a;
            }
            c = c.parentNode;
            d--;
          }
          b = null;
        }
        var e = b;
        if (e) {
          var f = e.protocol;
          ("http:" !== f && "https:" !== f) || mh(e, e.hostname);
        }
      } catch (g) {}
    },
    Xg = function (a) {
      try {
        if (a.action) {
          var b = Be(De(a.action), "host");
          mh(a, b);
        }
      } catch (c) {}
    },
    ph = function (a, b, c, d) {
      Zg();
      $g(a, b, "fragment" === c ? 2 : 1, !!d, !1);
    },
    qh = function (a, b) {
      Zg();
      $g(a, [Ae(m.location, "host", !0)], b, !0, !0);
    },
    rh = function () {
      var a = B.location.hostname,
        b = ch.exec(B.referrer);
      if (!b) return !1;
      var c = b[2],
        d = b[1],
        e = "";
      if (c) {
        var f = c.split("/"),
          g = f[1];
        e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g);
      } else if (d) {
        if (0 === d.indexOf("xn--")) return !1;
        e = d.replace(/-/g, ".").replace(/\.\./g, "-");
      }
      var k = a.replace(dh, ""),
        l = e.replace(dh, ""),
        n;
      if (!(n = k === l)) {
        var p = "." + l;
        n = k.substring(k.length - p.length, k.length) === p;
      }
      return n;
    },
    sh = function (a, b) {
      return !1 === a ? !1 : a || b || rh();
    };
  var th = {};
  var uh = /^\w+$/,
    vh = /^[\w-]+$/,
    wh = { aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp", gb: "_gb" },
    xh = function () {
      if (!xd().o() || !Rd()) return !0;
      var a = Od("ad_storage");
      return null == a ? !0 : !!a;
    },
    yh = function (a, b) {
      Qd("ad_storage")
        ? xh()
          ? a()
          : Wd(a, "ad_storage")
        : b
        ? sa("TAGGING", 3)
        : Vd(
            function () {
              yh(a, !0);
            },
            ["ad_storage"]
          );
    },
    Ah = function (a) {
      return zh(a).map(function (b) {
        return b.ra;
      });
    },
    zh = function (a) {
      var b = [];
      if (!jg(m) || !B.cookie) return b;
      var c = mg(a, B.cookie, void 0, "ad_storage");
      if (!c || 0 == c.length) return b;
      for (var d = {}, e = 0; e < c.length; d = { Fc: d.Fc }, e++) {
        var f = Bh(c[e]);
        if (null != f) {
          var g = f,
            k = g.version;
          d.Fc = g.ra;
          var l = g.timestamp,
            n = g.labels,
            p = Ba(
              b,
              (function (q) {
                return function (t) {
                  return t.ra === q.Fc;
                };
              })(d)
            );
          p
            ? ((p.timestamp = Math.max(p.timestamp, l)),
              (p.labels = Ch(p.labels, n || [])))
            : b.push({ version: k, ra: d.Fc, timestamp: l, labels: n });
        }
      }
      b.sort(function (q, t) {
        return t.timestamp - q.timestamp;
      });
      return Dh(b);
    };
  function Ch(a, b) {
    for (var c = {}, d = [], e = 0; e < a.length; e++)
      (c[a[e]] = !0), d.push(a[e]);
    for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
    return d;
  }
  function Eh(a) {
    return a && "string" == typeof a && a.match(uh) ? a : "_gcl";
  }
  var Gh = function () {
      var a = De(m.location.href),
        b = Be(a, "query", !1, void 0, "gclid"),
        c = Be(a, "query", !1, void 0, "gclsrc"),
        d = Be(a, "query", !1, void 0, "wbraid"),
        e = Be(a, "query", !1, void 0, "dclid");
      if (!b || !c || !d) {
        var f = a.hash.replace("#", "");
        b = b || ye(f, "gclid", void 0);
        c = c || ye(f, "gclsrc", void 0);
        d = d || ye(f, "wbraid", void 0);
      }
      return Fh(b, c, e, d);
    },
    Fh = function (a, b, c, d) {
      var e = {},
        f = function (g, k) {
          e[k] || (e[k] = []);
          e[k].push(g);
        };
      e.gclid = a;
      e.gclsrc = b;
      e.dclid = c;
      void 0 !== d && vh.test(d) && ((e.gbraid = d), f(d, "gb"));
      if (void 0 !== a && a.match(vh))
        switch (b) {
          case void 0:
            f(a, "aw");
            break;
          case "aw.ds":
            f(a, "aw");
            f(a, "dc");
            break;
          case "ds":
            f(a, "dc");
            break;
          case "3p.ds":
            f(a, "dc");
            break;
          case "gf":
            f(a, "gf");
            break;
          case "ha":
            f(a, "ha");
        }
      c && f(c, "dc");
      return e;
    },
    Ih = function (a) {
      var b = Gh();
      yh(function () {
        Hh(b, !1, a);
      });
    };
  function Hh(a, b, c, d, e) {
    function f(x, z) {
      var w = Jh(x, g);
      w && (zg(w, z, k), (l = !0));
    }
    c = c || {};
    e = e || [];
    var g = Eh(c.prefix);
    d = d || Sa();
    var k = Hg(c, d, !0);
    k.Ta = "ad_storage";
    var l = !1,
      n = Math.round(d / 1e3),
      p = function (x) {
        var z = ["GCL", n, x];
        0 < e.length && z.push(e.join("."));
        return z.join(".");
      };
    a.aw && f("aw", p(a.aw[0]));
    a.dc && f("dc", p(a.dc[0]));
    a.gf && f("gf", p(a.gf[0]));
    a.ha && f("ha", p(a.ha[0]));
    a.gp && f("gp", p(a.gp[0]));
    if (
      (void 0 == th.enable_gbraid_cookie_write
        ? 0
        : th.enable_gbraid_cookie_write) &&
      !l &&
      a.gb
    ) {
      var q = a.gb[0],
        t = Jh("gb", g),
        u = !1;
      if (!b)
        for (var r = zh(t), v = 0; v < r.length; v++)
          r[v].ra === q && r[v].labels && 0 < r[v].labels.length && (u = !0);
      u || f("gb", p(q));
    }
  }
  var Lh = function (a, b) {
      var c = kh(!0);
      yh(function () {
        for (var d = Eh(b.prefix), e = 0; e < a.length; ++e) {
          var f = a[e];
          if (void 0 !== wh[f]) {
            var g = Jh(f, d),
              k = c[g];
            if (k) {
              var l = Math.min(Kh(k), Sa()),
                n;
              b: {
                var p = l;
                if (jg(m))
                  for (
                    var q = mg(g, B.cookie, void 0, "ad_storage"), t = 0;
                    t < q.length;
                    ++t
                  )
                    if (Kh(q[t]) > p) {
                      n = !0;
                      break b;
                    }
                n = !1;
              }
              if (!n) {
                var u = Hg(b, l, !0);
                u.Ta = "ad_storage";
                zg(g, k, u);
              }
            }
          }
        }
        Hh(Fh(c.gclid, c.gclsrc), !1, b);
      });
    },
    Jh = function (a, b) {
      var c = wh[a];
      if (void 0 !== c) return b + c;
    },
    Kh = function (a) {
      return 0 !== Mh(a.split(".")).length
        ? 1e3 * (Number(a.split(".")[1]) || 0)
        : 0;
    };
  function Bh(a) {
    var b = Mh(a.split("."));
    return 0 === b.length
      ? null
      : {
          version: b[0],
          ra: b[2],
          timestamp: 1e3 * (Number(b[1]) || 0),
          labels: b.slice(3),
        };
  }
  function Mh(a) {
    return 3 > a.length ||
      ("GCL" !== a[0] && "1" !== a[0]) ||
      !/^\d+$/.test(a[1]) ||
      !vh.test(a[2])
      ? []
      : a;
  }
  var Nh = function (a, b, c, d, e) {
      if (ya(b) && jg(m)) {
        var f = Eh(e),
          g = function () {
            for (var k = {}, l = 0; l < a.length; ++l) {
              var n = Jh(a[l], f);
              if (n) {
                var p = mg(n, B.cookie, void 0, "ad_storage");
                p.length && (k[n] = p.sort()[p.length - 1]);
              }
            }
            return k;
          };
        yh(function () {
          ph(g, b, c, d);
        });
      }
    },
    Dh = function (a) {
      return a.filter(function (b) {
        return vh.test(b.ra);
      });
    },
    Oh = function (a, b) {
      if (jg(m)) {
        for (var c = Eh(b.prefix), d = {}, e = 0; e < a.length; e++)
          wh[a[e]] && (d[a[e]] = wh[a[e]]);
        yh(function () {
          Ia(d, function (f, g) {
            var k = mg(c + g, B.cookie, void 0, "ad_storage");
            k.sort(function (u, r) {
              return Kh(r) - Kh(u);
            });
            if (k.length) {
              var l = k[0],
                n = Kh(l),
                p = 0 !== Mh(l.split(".")).length ? l.split(".").slice(3) : [],
                q = {},
                t;
              t = 0 !== Mh(l.split(".")).length ? l.split(".")[2] : void 0;
              q[f] = [t];
              Hh(q, !0, b, n, p);
            }
          });
        });
      }
    };
  function Ph(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  var Qh = function (a) {
    function b(e, f, g) {
      g && (e[f] = g);
    }
    if (Rd()) {
      var c = Gh();
      if (Ph(c, a)) {
        var d = {};
        b(d, "gclid", c.gclid);
        b(d, "dclid", c.dclid);
        b(d, "gclsrc", c.gclsrc);
        b(d, "wbraid", c.gbraid);
        qh(function () {
          return d;
        }, 3);
        qh(function () {
          var e = {};
          return (e._up = "1"), e;
        }, 1);
      }
    }
  };
  function Rh(a, b) {
    var c = Eh(b),
      d = Jh(a, c);
    if (!d) return 0;
    for (var e = zh(d), f = 0, g = 0; g < e.length; g++)
      f = Math.max(f, e[g].timestamp);
    return f;
  }
  function Sh(a) {
    var b = 0,
      c;
    for (c in a)
      for (var d = a[c], e = 0; e < d.length; e++)
        b = Math.max(b, Number(d[e].timestamp));
    return b;
  }
  var Th = /^\d+\.fls\.doubleclick\.net$/;
  function Uh(a, b) {
    Qd(M.D)
      ? be(M.D)
        ? a()
        : Wd(a, M.D)
      : b
      ? ud(42)
      : fe(
          function () {
            Uh(a, !0);
          },
          [M.D]
        );
  }
  function Vh(a) {
    var b = De(m.location.href),
      c = Be(b, "host", !1);
    if (c && c.match(Th)) {
      var d = Be(b, "path").split(a + "=");
      if (1 < d.length) return d[1].split(";")[0].split("?")[0];
    }
  }
  function Wh(a, b, c) {
    if ("aw" === a || "dc" === a || "gb" === a) {
      var d = Vh("gcl" + a);
      if (d) return d.split(".");
    }
    var e = Eh(b);
    if ("_gcl" == e) {
      c = void 0 === c ? !0 : c;
      var f = !be(M.D) && c,
        g;
      g = Gh()[a] || [];
      if (0 < g.length) return f ? ["0"] : g;
    }
    var k = Jh(a, e);
    return k ? Ah(k) : [];
  }
  var Xh = function (a, b) {
      return Wh("aw", a, b);
    },
    Yh = function (a, b) {
      return Wh("dc", a, b);
    };
  function Zh(a) {
    var b = [];
    Ia(a, function (c, d) {
      d = Dh(d);
      for (var e = [], f = 0; f < d.length; f++) e.push(d[f].ra);
      e.length && b.push(c + ":" + e.join(","));
    });
    return b.join(";");
  }
  var $h = function (a) {
      var b = Vh("gac");
      return b
        ? !be(M.D) && a
          ? "0"
          : decodeURIComponent(b)
        : Zh(xh() ? Pg() : {});
    },
    ai = function (a) {
      var b = Vh("gacgb");
      return b
        ? !be(M.D) && a
          ? "0"
          : decodeURIComponent(b)
        : Zh(xh() ? Pg("_gac_gb", !0) : {});
    },
    bi = function (a, b) {
      var c = Gh(),
        d = [],
        e = c.gclid,
        f = c.dclid,
        g = c.gclsrc || "aw";
      !e ||
        ("aw.ds" !== g && "aw" !== g && "ds" !== g) ||
        d.push({ ra: e, xe: g });
      f && d.push({ ra: f, xe: "ds" });
      Uh(function () {
        Ng(b);
        var k = Jg[Kg(b.prefix)],
          l = !1;
        if (k && 0 < d.length)
          for (
            var n = (N.joined_auid = N.joined_auid || {}), p = 0;
            p < d.length;
            p++
          ) {
            var q = d[p],
              t = q.ra,
              u = q.xe,
              r = (b.prefix || "_gcl") + "." + u + "." + t;
            if (!n[r]) {
              var v = "https://adservice.google.com/pagead/regclk";
              v =
                "gb" === u
                  ? v + "?gbraid=" + t + "&auid=" + k
                  : v + "?gclid=" + t + "&auid=" + k + "&gclsrc=" + u;
              Pb(v);
              l = n[r] = !0;
            }
          }
        null == a && (a = l);
        var x = !0;
        x = !1;
        if (x && a && k) {
          var z = Kg(b.prefix),
            w = Jg[z];
          w && Mg(z, w, b);
        }
      });
    },
    ci = function (a) {
      var b;
      if (Vh("gclaw") || Vh("gac") || 0 < (Gh().aw || []).length) b = !1;
      else {
        var c;
        if (0 < (Gh().gb || []).length) c = !0;
        else {
          var d = Math.max(Rh("aw", a), Sh(xh() ? Pg() : {}));
          c = Math.max(Rh("gb", a), Sh(xh() ? Pg("_gac_gb", !0) : {})) > d;
        }
        b = c;
      }
      return b;
    };
  function di(a) {
    var b = (zb && zb.userAgent) || "";
    if (
      0 > b.indexOf("Safari") ||
      /Chrome|Coast|Opera|Edg|Silk|Android/.test(b)
    )
      return !1;
    var c = (/Version\/([\d\.]+)/.exec(b) || [])[1] || "";
    if ("" === c) return !1;
    for (var d = a.split("."), e = c.split("."), f = 0; f < e.length; f++) {
      if (void 0 === d[f]) return !0;
      if (e[f] != d[f]) return Number(e[f]) > Number(d[f]);
    }
    return e.length >= d.length;
  }
  var ei = /[A-Z]+/,
    fi = /\s/,
    gi = function (a) {
      if (h(a) && ((a = Pa(a)), !fi.test(a))) {
        var b = a.indexOf("-");
        if (!(0 > b)) {
          var c = a.substring(0, b);
          if (ei.test(c)) {
            for (
              var d = a.substring(b + 1).split("/"), e = 0;
              e < d.length;
              e++
            )
              if (!d[e]) return;
            return { id: a, prefix: c, containerId: c + "-" + d[0], N: d };
          }
        }
      }
    },
    ii = function (a) {
      for (var b = {}, c = 0; c < a.length; ++c) {
        var d = gi(a[c]);
        d && (b[d.id] = d);
      }
      hi(b);
      var e = [];
      Ia(b, function (f, g) {
        e.push(g);
      });
      return e;
    };
  function hi(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        "AW" === d.prefix && d.N[1] && b.push(d.containerId);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var ji = function () {
    var a = !1;
    return a;
  };
  var li = function (a, b, c, d) {
      return (2 === ki() || d || "http:" != m.location.protocol ? a : b) + c;
    },
    ki = function () {
      var a = Eb(),
        b;
      if (1 === a)
        a: {
          var c = If;
          c = c.toLowerCase();
          for (
            var d = "https://" + c,
              e = "http://" + c,
              f = 1,
              g = B.getElementsByTagName("script"),
              k = 0;
            k < g.length && 100 > k;
            k++
          ) {
            var l = g[k].src;
            if (l) {
              l = l.toLowerCase();
              if (0 === l.indexOf(e)) {
                b = 3;
                break a;
              }
              1 === f && 0 === l.indexOf(d) && (f = 2);
            }
          }
          b = f;
        }
      else b = a;
      return b;
    };
  var ni = function (a, b, c) {
      if (m[a.functionName]) return b.Ke && G(b.Ke), m[a.functionName];
      var d = mi();
      m[a.functionName] = d;
      if (a.ed)
        for (var e = 0; e < a.ed.length; e++) m[a.ed[e]] = m[a.ed[e]] || mi();
      a.rd && void 0 === m[a.rd] && (m[a.rd] = c);
      Db(li("https://", "http://", a.Re), b.Ke, b.Ki);
      return d;
    },
    mi = function () {
      var a = function () {
        a.q = a.q || [];
        a.q.push(arguments);
      };
      return a;
    },
    oi = {
      functionName: "_googWcmImpl",
      rd: "_googWcmAk",
      Re: "www.gstatic.com/wcm/loader.js",
    },
    pi = {
      functionName: "_gaPhoneImpl",
      rd: "ga_wpid",
      Re: "www.gstatic.com/gaphone/loader.js",
    },
    qi = { Lg: "", Oh: "5" },
    ri = {
      functionName: "_googCallTrackingImpl",
      ed: [pi.functionName, oi.functionName],
      Re:
        "www.gstatic.com/call-tracking/call-tracking_" +
        (qi.Lg || qi.Oh) +
        ".js",
    },
    si = {},
    ti = function (a, b, c, d) {
      ud(22);
      if (c) {
        d = d || {};
        var e = ni(oi, d, a),
          f = { ak: a, cl: b };
        void 0 === d.Ra && (f.autoreplace = c);
        e(2, d.Ra, f, c, 0, Ra(), d.options);
      }
    },
    ui = function (a, b, c, d) {
      ud(21);
      if (b && c) {
        d = d || {};
        for (
          var e = {
              countryNameCode: c,
              destinationNumber: b,
              retrievalTime: Ra(),
            },
            f = 0;
          f < a.length;
          f++
        ) {
          var g = a[f];
          si[g.id] ||
            (g && "AW" === g.prefix && !e.adData && 2 <= g.N.length
              ? ((e.adData = { ak: g.N[0], cl: g.N[1] }), (si[g.id] = !0))
              : g &&
                "UA" === g.prefix &&
                !e.gaData &&
                ((e.gaData = { gaWpid: g.containerId }), (si[g.id] = !0)));
        }
        (e.gaData || e.adData) && ni(ri, d)(d.Ra, e, d.options);
      }
    },
    vi = function () {
      var a = !1;
      return a;
    },
    wi = function (a, b) {
      if (a)
        if (ji()) {
        } else {
          if (h(a)) {
            var c = gi(a);
            if (!c) return;
            a = c;
          }
          var d = void 0,
            e = !1,
            f = b.getWithConfig(M.zh);
          if (f && ya(f)) {
            d = [];
            for (var g = 0; g < f.length; g++) {
              var k = gi(f[g]);
              k &&
                (d.push(k),
                (a.id === k.id ||
                  (a.id === a.containerId &&
                    a.containerId === k.containerId)) &&
                  (e = !0));
            }
          }
          if (!d || e) {
            var l = b.getWithConfig(M.wf),
              n;
            if (l) {
              ya(l) ? (n = l) : (n = [l]);
              var p = b.getWithConfig(M.uf),
                q = b.getWithConfig(M.vf),
                t = b.getWithConfig(M.xf),
                u = b.getWithConfig(M.yh),
                r = p || q,
                v = 1;
              "UA" !== a.prefix || d || (v = 5);
              for (var x = 0; x < n.length; x++)
                if (x < v)
                  if (d) ui(d, n[x], u, { Ra: r, options: t });
                  else if ("AW" === a.prefix && a.N[1])
                    vi()
                      ? ui([a], n[x], u || "US", { Ra: r, options: t })
                      : ti(a.N[0], a.N[1], n[x], { Ra: r, options: t });
                  else if ("UA" === a.prefix)
                    if (vi()) ui([a], n[x], u || "US", { Ra: r });
                    else {
                      var z = a.containerId,
                        w = n[x],
                        y = { Ra: r };
                      ud(23);
                      if (w) {
                        y = y || {};
                        var A = ni(pi, y, z),
                          C = {};
                        void 0 !== y.Ra ? (C.receiver = y.Ra) : (C.replace = w);
                        C.ga_wpid = z;
                        C.destination = w;
                        A(2, Ra(), C);
                      }
                    }
            }
          }
        }
    };
  var xi = function (a, b) {
    var c = a ? fg(a) : m.enhanced_conversion_data,
      d = (a || {}).enhanced_conversions_mode;
    if (m.Promise)
      try {
        return c
          ? pf(c, b).then(function (e) {
              e.qe = d;
              return e;
            })
          : Promise.resolve({ xc: "", kc: [], qe: d });
      } catch (e) {}
  };
  function yi(a) {
    if (be(M.D)) return a;
    a = a.replace(/&url=([^&#]+)/, function (b, c) {
      var d = Ee(decodeURIComponent(c));
      return "&url=" + encodeURIComponent(d);
    });
    a = a.replace(/&ref=([^&#]+)/, function (b, c) {
      var d = Ee(decodeURIComponent(c));
      return "&ref=" + encodeURIComponent(d);
    });
    return a;
  }
  function zi() {
    if (Jf || (!0 !== m._gtmdgs && !di("11"))) return -1;
    var a = Ma("1");
    return hg(1, 100) < a ? hg(2, 2) : -1;
  }
  function Ai(a) {
    var b;
    if (!a || !a.length) return;
    for (var c = [], d = 0; d < a.length; ++d) {
      var e = a[d];
      e && e.estimated_delivery_date
        ? c.push("" + e.estimated_delivery_date)
        : c.push("");
    }
    b = c.join(",");
    return b;
  }
  function Bi() {
    var a = !1;
    return a;
  }
  var Ci = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
    ),
    Di = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: [
        "customScripts",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      customScripts: [
        "html",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"],
    },
    Ei = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: [
        "customPixels",
        "customScripts",
        "html",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
    },
    Fi =
      "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
        " "
      );
  var Gi = function () {
      var a = !1;
      a = !0;
      return a;
    },
    Ii = function (a) {
      var b = Vf("gtm.allowlist") || Vf("gtm.whitelist");
      b && ud(9);
      Gi() && (b = "google gtagfl lcl zone oid op".split(" "));
      var c = b && Ya(Oa(b), Di),
        d = Vf("gtm.blocklist") || Vf("gtm.blacklist");
      d || ((d = Vf("tagTypeBlacklist")) && ud(3));
      d ? ud(8) : (d = []);
      Hi() &&
        ((d = Oa(d)),
        d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
      0 <= za(Oa(d), "google") && ud(2);
      var e = d && Ya(Oa(d), Ei),
        f = {};
      return function (g) {
        var k = g && g[Zb.lb];
        if (!k || "string" != typeof k) return !0;
        k = k.replace(/^_*/, "");
        if (void 0 !== f[k]) return f[k];
        var l = Of[k] || [],
          n = a(k, l);
        if (b) {
          var p;
          if ((p = n))
            a: {
              if (0 > za(c, k))
                if (l && 0 < l.length)
                  for (var q = 0; q < l.length; q++) {
                    if (0 > za(c, l[q])) {
                      ud(11);
                      p = !1;
                      break a;
                    }
                  }
                else {
                  p = !1;
                  break a;
                }
              p = !0;
            }
          n = p;
        }
        var t = !1;
        if (d) {
          var u = 0 <= za(e, k);
          if (u) t = u;
          else {
            var r = Ga(e, l || []);
            r && ud(10);
            t = r;
          }
        }
        var v = !n || t;
        v ||
          !(0 <= za(l, "sandboxedScripts")) ||
          (c && -1 !== za(c, "sandboxedScripts")) ||
          (v = Ga(e, Fi));
        return (f[k] = v);
      };
    },
    Hi = function () {
      return Ci.test(m.location && m.location.hostname);
    };
  var Ji = !1,
    Ki = 0,
    Li = [];
  function Mi(a) {
    if (!Ji) {
      var b = B.createEventObject,
        c = "complete" == B.readyState,
        d = "interactive" == B.readyState;
      if (!a || "readystatechange" != a.type || c || (!b && d)) {
        Ji = !0;
        for (var e = 0; e < Li.length; e++) G(Li[e]);
      }
      Li.push = function () {
        for (var f = 0; f < arguments.length; f++) G(arguments[f]);
        return 0;
      };
    }
  }
  function Ni() {
    if (!Ji && 140 > Ki) {
      Ki++;
      try {
        B.documentElement.doScroll("left"), Mi();
      } catch (a) {
        m.setTimeout(Ni, 50);
      }
    }
  }
  var Oi = function (a) {
    Ji ? a() : Li.push(a);
  };
  var Qi = function (a, b) {
      this.o = !1;
      this.F = [];
      this.P = { tags: [] };
      this.ba = !1;
      this.s = this.C = 0;
      Pi(this, a, b);
    },
    Ri = function (a, b, c, d) {
      if (Ff.hasOwnProperty(b) || "__zone" === b) return -1;
      var e = {};
      Xb(d) && (e = H(d, e));
      e.id = c;
      e.status = "timeout";
      return a.P.tags.push(e) - 1;
    },
    Si = function (a, b, c, d) {
      var e = a.P.tags[b];
      e && ((e.status = c), (e.executionTime = d));
    },
    Ti = function (a) {
      if (!a.o) {
        for (var b = a.F, c = 0; c < b.length; c++) b[c]();
        a.o = !0;
        a.F.length = 0;
      }
    },
    Pi = function (a, b, c) {
      wa(b) && Ui(a, b);
      c &&
        m.setTimeout(function () {
          return Ti(a);
        }, Number(c));
    },
    Ui = function (a, b) {
      var c = Va(function () {
        return G(function () {
          b(Cf.M, a.P);
        });
      });
      a.o ? c() : a.F.push(c);
    },
    Vi = function (a) {
      a.C++;
      return Va(function () {
        a.s++;
        a.ba && a.s >= a.C && Ti(a);
      });
    };
  var Wi = function () {
      function a(d) {
        return !xa(d) || 0 > d ? 0 : d;
      }
      if (!N._li && m.performance && m.performance.timing) {
        var b = m.performance.timing.navigationStart,
          c = xa(Wf.get("gtm.start")) ? Wf.get("gtm.start") : 0;
        N._li = { cst: a(c - b), cbt: a(Lf - b) };
      }
    },
    Xi = function (a) {
      m.performance && m.performance.mark(Cf.M + "_" + a + "_start");
    },
    Yi = function (a) {
      if (m.performance) {
        var b = Cf.M + "_" + a + "_start",
          c = Cf.M + "_" + a + "_duration";
        m.performance.measure(c, b);
        var d = m.performance.getEntriesByName(c)[0];
        m.performance.clearMarks(b);
        m.performance.clearMeasures(c);
        var e = N._p || {};
        void 0 === e[a] && ((e[a] = d.duration), (N._p = e));
        return d.duration;
      }
    },
    Zi = function () {
      if (m.performance && m.performance.now) {
        var a = N._p || {};
        a.PAGEVIEW = m.performance.now();
        N._p = a;
      }
    };
  var $i = {},
    aj = function () {
      return m.GoogleAnalyticsObject && m[m.GoogleAnalyticsObject];
    },
    ej = !1;
  var fj = function (a) {
      m.GoogleAnalyticsObject || (m.GoogleAnalyticsObject = a || "ga");
      var b = m.GoogleAnalyticsObject;
      if (m[b]) m.hasOwnProperty(b) || ud(12);
      else {
        var c = function () {
          c.q = c.q || [];
          c.q.push(arguments);
        };
        c.l = Number(Ra());
        m[b] = c;
      }
      Wi();
      return m[b];
    },
    gj = function (a, b, c, d) {
      b = String(b).replace(/\s+/g, "").split(",");
      var e = aj();
      e(a + "require", "linker");
      e(a + "linker:autoLink", b, c, d);
    },
    hj = function (a) {
      if (!Rd()) return;
      var b = aj();
      b(a + "require", "linker");
      b(a + "linker:passthrough", !0);
    };
  function ij() {
    return m.GoogleAnalyticsObject || "ga";
  }
  var jj = function (a) {},
    kj = function (a, b) {
      return function () {
        var c = aj(),
          d = c && c.getByName && c.getByName(a);
        if (d) {
          var e = d.get("sendHitTask");
          d.set("sendHitTask", function (f) {
            var g = f.get("hitPayload"),
              k = f.get("hitCallback"),
              l = 0 > g.indexOf("&tid=" + b);
            l &&
              (f.set(
                "hitPayload",
                g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b),
                !0
              ),
              f.set("hitCallback", void 0, !0));
            e(f);
            l &&
              (f.set("hitPayload", g, !0),
              f.set("hitCallback", k, !0),
              f.set("_x_19", void 0, !0),
              e(f));
          });
        }
      };
    };
  var rj = function (a) {},
    vj = function (a) {},
    wj = function () {
      return (
        "&tc=" +
        Fc.filter(function (a) {
          return a;
        }).length
      );
    },
    zj = function () {
      2022 <= xj().length && yj();
    },
    Aj = function (a) {
      return 0 === a.indexOf("gtm.") ? encodeURIComponent(a) : "*";
    },
    Cj = function () {
      Bj || (Bj = m.setTimeout(yj, 500));
    },
    yj = function () {
      Bj && (m.clearTimeout(Bj), (Bj = void 0));
      void 0 === Dj ||
        (Ej[Dj] && !Fj && !Gj) ||
        (Hj[Dj] || Ij.zi() || 0 >= Jj--
          ? (ud(1), (Hj[Dj] = !0))
          : (Ij.Ti(),
            Gb(xj(!0)),
            (Ej[Dj] = !0),
            (Kj = Lj = Mj = Gj = Fj = "")));
    },
    xj = function (a) {
      var b = Dj;
      if (void 0 === b) return "";
      var c = ta("GTM"),
        d = ta("TAGGING");
      return [
        Nj,
        Ej[b] ? "" : "&es=1",
        Oj[b],
        rj(b),
        c ? "&u=" + c : "",
        d ? "&ut=" + d : "",
        wj(),
        Fj,
        Gj,
        Mj,
        Lj,
        vj(a),
        Kj,
        "&z=0",
      ].join("");
    },
    Qj = function () {
      Nj = Pj();
    },
    Pj = function () {
      return [Mf, "&v=3&t=t", "&pid=" + Da(), "&rv=" + Cf.bd].join("");
    },
    uj = ["L", "S", "Y"],
    qj = ["S", "E"],
    Rj = { sampleRate: "0.005000", Hg: "", Gg: Number("5") },
    Sj =
      0 <= B.location.search.indexOf("?gtm_latency=") ||
      0 <= B.location.search.indexOf("&gtm_latency="),
    Tj;
  if (!(Tj = Sj)) {
    var Uj = Math.random(),
      Vj = Rj.sampleRate;
    Tj = Uj < Vj;
  }
  var Wj = Tj,
    Xj = {
      label: Cf.M + " Container",
      children: [{ label: "Initialization", children: [] }],
    },
    Nj = Pj(),
    Ej = {},
    Fj = "",
    Gj = "",
    Kj = "",
    Lj = "",
    tj = {},
    sj = !1,
    pj = {},
    Yj = {},
    Mj = "",
    Dj = void 0,
    Oj = {},
    Hj = {},
    Bj = void 0,
    Zj = 5;
  0 < Rj.Gg && (Zj = Rj.Gg);
  var Ij = (function (a, b) {
      for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
      return {
        zi: function () {
          return c < a ? !1 : Sa() - d[c % a] < b;
        },
        Ti: function () {
          var f = c++ % a;
          d[f] = Sa();
        },
      };
    })(Zj, 1e3),
    Jj = 1e3,
    bk = function (a, b) {
      if (Wj && !Hj[a] && Dj !== a) {
        yj();
        Dj = a;
        Kj = Fj = "";
        Oj[a] = "&e=" + Aj(b) + "&eid=" + a;
        Cj();
      }
    },
    ck = function (a, b, c, d) {
      if (Wj && b) {
        var e,
          f = String(b[Zb.lb] || "").replace(/_/g, "");
        0 === f.indexOf("cvt") && (f = "cvt");
        e = f;
        var g = c + e;
        if (!Hj[a]) {
          a !== Dj && (yj(), (Dj = a));
          Fj = Fj ? Fj + "." + g : "&tr=" + g;
          var k = b["function"];
          if (!k)
            throw Error("Error: No function name given for function call.");
          var l = (Hc[k] ? "1" : "2") + e;
          Kj = Kj ? Kj + "." + l : "&ti=" + l;
          Cj();
          zj();
        }
      }
    };
  var jk = function (a, b, c) {
      if (Wj && !Hj[a]) {
        a !== Dj && (yj(), (Dj = a));
        var d = c + b;
        Gj = Gj ? Gj + "." + d : "&epr=" + d;
        Cj();
        zj();
      }
    },
    kk = function (a, b, c) {};
  var lk = {
      active: !0,
      isAllowed: function () {
        return !0;
      },
    },
    mk = function (a) {
      var b = N.zones;
      return b ? b.checkState(Cf.M, a) : lk;
    },
    nk = function (a) {
      var b = N.zones;
      !b && a && (b = N.zones = a());
      return b;
    };
  function ok() {}
  function pk() {}
  function qk(a, b, c, d) {
    var e = Fc[a],
      f = rk(a, b, c, d);
    if (!f) return null;
    var g = Mc(e[Zb.Kf], c, []);
    if (g && g.length) {
      var k = g[0];
      f = qk(
        k.index,
        {
          onSuccess: f,
          onFailure: 1 === k.dg ? b.terminate : f,
          terminate: b.terminate,
        },
        c,
        d
      );
    }
    return f;
  }
  function rk(a, b, c, d) {
    function e() {
      if (f[Zb.Kh]) k();
      else {
        var x = Nc(f, c, []);
        var z = x[Zb.Mg];
        if (null != z)
          for (var w = 0; w < z.length; w++)
            if (!be(z[w])) {
              k();
              return;
            }
        var y = Ri(c.mb, String(f[Zb.lb]), Number(f[Zb.Mf]), x[Zb.Lh]),
          A = !1;
        x.vtp_gtmOnSuccess = function () {
          if (!A) {
            A = !0;
            var F = Sa() - D;
            ck(c.id, Fc[a], "5", F);
            Si(c.mb, y, "success", F);
            g();
          }
        };
        x.vtp_gtmOnFailure = function () {
          if (!A) {
            A = !0;
            var F = Sa() - D;
            ck(c.id, Fc[a], "6", F);
            Si(c.mb, y, "failure", F);
            k();
          }
        };
        x.vtp_gtmTagId = f.tag_id;
        x.vtp_gtmEventId = c.id;
        ck(c.id, f, "1");
        var C = function () {
          var F = Sa() - D;
          ck(c.id, f, "7", F);
          Si(c.mb, y, "exception", F);
          A || ((A = !0), k());
        };
        var D = Sa();
        try {
          Lc(x, c);
        } catch (F) {
          C(F);
        }
      }
    }
    var f = Fc[a],
      g = b.onSuccess,
      k = b.onFailure,
      l = b.terminate;
    if (c.Ge(f)) return null;
    var n = Mc(f[Zb.Nf], c, []);
    if (n && n.length) {
      var p = n[0],
        q = qk(p.index, { onSuccess: g, onFailure: k, terminate: l }, c, d);
      if (!q) return null;
      g = q;
      k = 2 === p.dg ? l : q;
    }
    if (f[Zb.Gf] || f[Zb.Nh]) {
      var t = f[Zb.Gf] ? Gc : c.$i,
        u = g,
        r = k;
      if (!t[a]) {
        e = Va(e);
        var v = sk(a, t, e);
        g = v.onSuccess;
        k = v.onFailure;
      }
      return function () {
        t[a](u, r);
      };
    }
    return e;
  }
  function sk(a, b, c) {
    var d = [],
      e = [];
    b[a] = tk(d, e, c);
    return {
      onSuccess: function () {
        b[a] = uk;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      onFailure: function () {
        b[a] = vk;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }
  function tk(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function uk(a) {
    a();
  }
  function vk(a, b) {
    b();
  }
  var yk = function (a, b) {
    for (var c = [], d = 0; d < Fc.length; d++)
      if (a[d]) {
        var e = Fc[d];
        var f = Vi(b.mb);
        try {
          var g = qk(d, { onSuccess: f, onFailure: f, terminate: f }, b, d);
          if (g) {
            var k = c,
              l = k.push,
              n = d,
              p = e["function"];
            if (!p) throw "Error: No function name given for function call.";
            var q = Hc[p];
            l.call(k, { Bg: n, rg: q ? q.priorityOverride || 0 : 0, li: g });
          } else wk(d, b), f();
        } catch (r) {
          f();
        }
      }
    var t = b.mb;
    t.ba = !0;
    t.s >= t.C && Ti(t);
    c.sort(xk);
    for (var u = 0; u < c.length; u++) c[u].li();
    return 0 < c.length;
  };
  function xk(a, b) {
    var c,
      d = b.rg,
      e = a.rg;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c;
    else {
      var g = a.Bg,
        k = b.Bg;
      f = g > k ? 1 : g < k ? -1 : 0;
    }
    return f;
  }
  function wk(a, b) {
    if (!Wj) return;
    var c = function (d) {
      var e = b.Ge(Fc[d]) ? "3" : "4",
        f = Mc(Fc[d][Zb.Kf], b, []);
      f && f.length && c(f[0].index);
      ck(b.id, Fc[d], e);
      var g = Mc(Fc[d][Zb.Nf], b, []);
      g && g.length && c(g[0].index);
    };
    c(a);
  }
  var zk = !1,
    Fk = function (a) {
      var b = Sa(),
        c = a["gtm.uniqueEventId"],
        d = a.event;
      if ("gtm.js" === d) {
        if (zk) return !1;
        zk = !0;
      }
      var g = mk(c),
        k = !1;
      if (!g.active) {
        if ("gtm.js" !== d) return !1;
        k = !0;
        g = mk(Number.MAX_SAFE_INTEGER);
      }
      bk(c, d);
      var l = a.eventCallback,
        n = a.eventTimeout,
        p = l;
      var q = {
        id: c,
        name: d,
        Ge: Ii(g.isAllowed),
        $i: [],
        mg: function () {
          ud(6);
        },
        Yf: Ak(c),
        mb: new Qi(p, n),
      };
      q.Xf = Bk();
      Ck(c, q.mb);
      var t = Rc(q);
      k && (t = Dk(t));
      var u = yk(t, q);
      ("gtm.js" !== d && "gtm.sync" !== d) || jj(Cf.M);
      switch (d) {
        case "gtm.init":
          u && ud(20);
      }
      return Ek(t, u);
    };
  function Ak(a) {
    return function (b) {
      Wj && (Yb(b) || kk(a, "input", b));
    };
  }
  function Ck(a, b) {
    $f(a, "event", 1);
    $f(a, "ecommerce", 1);
    $f(a, "gtm");
    $f(a, "eventModel");
  }
  function Bk() {
    var a = {};
    a.event = Zf("event", 1);
    a.ecommerce = Zf("ecommerce", 1);
    a.gtm = Zf("gtm");
    a.eventModel = Zf("eventModel");
    return a;
  }
  function Dk(a) {
    for (var b = [], c = 0; c < a.length; c++)
      a[c] && Ef[String(Fc[c][Zb.lb])] && (b[c] = !0);
    return b;
  }
  function Ek(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++)
      if (a[c] && Fc[c] && !Ff[String(Fc[c][Zb.lb])]) return !0;
    return !1;
  }
  function Gk(a, b) {
    if (a) {
      var c = "" + a;
      0 !== c.indexOf("http://") &&
        0 !== c.indexOf("https://") &&
        (c = "https://" + c);
      "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
      return De("" + c + b).href;
    }
  }
  function Hk(a, b) {
    return Ik() ? Gk(a, b) : void 0;
  }
  function Ik() {
    var a = !1;
    return a;
  }
  var Jk;
  if (3 === Cf.bd.length) Jk = "g";
  else {
    var Kk = "G";
    Kk = "g";
    Jk = Kk;
  }
  var Lk = {
      "": "n",
      UA: "u",
      AW: "a",
      DC: "d",
      G: "e",
      GF: "f",
      HA: "h",
      GTM: Jk,
      OPT: "o",
    },
    Mk = function (a) {
      var b = Cf.M.split("-"),
        c = b[0].toUpperCase(),
        d = Lk[c] || "i",
        e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
        f;
      if (3 === Cf.bd.length) {
        var g = "w";
        g = ji() ? "s" : "o";
        f = "2" + g;
      } else f = "";
      return f + d + Cf.bd + e;
    };
  function Nk(a, b) {
    if ("" === a) return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  var Ok = function (a, b) {
    a.addEventListener && a.addEventListener.call(a, "message", b, !1);
  };
  var Pk = function () {
    return mb("iPhone") && !mb("iPod") && !mb("iPad");
  };
  mb("Opera");
  mb("Trident") || mb("MSIE");
  mb("Edge");
  !mb("Gecko") ||
    (-1 != hb.toLowerCase().indexOf("webkit") && !mb("Edge")) ||
    mb("Trident") ||
    mb("MSIE") ||
    mb("Edge");
  -1 != hb.toLowerCase().indexOf("webkit") && !mb("Edge") && mb("Mobile");
  mb("Macintosh");
  mb("Windows");
  mb("Linux") || mb("CrOS");
  var Qk = pa.navigator || null;
  Qk && (Qk.appVersion || "").indexOf("X11");
  mb("Android");
  Pk();
  mb("iPad");
  mb("iPod");
  Pk() || mb("iPad") || mb("iPod");
  hb.toLowerCase().indexOf("kaios");
  var Rk = function (a, b) {
      for (var c = a, d = 0; 50 > d; ++d) {
        var e;
        try {
          e = !(!c.frames || !c.frames[b]);
        } catch (k) {
          e = !1;
        }
        if (e) return c;
        var f;
        a: {
          try {
            var g = c.parent;
            if (g && g != c) {
              f = g;
              break a;
            }
          } catch (k) {}
          f = null;
        }
        if (!(c = f)) break;
      }
      return null;
    },
    Sk = function (a) {
      var b = B;
      b = void 0 === b ? window.document : b;
      if (!a || !b.head) return null;
      var c = document.createElement("meta");
      b.head.appendChild(c);
      c.httpEquiv = "origin-trial";
      c.content = a;
      return c;
    };
  var Tk = function () {};
  var Uk = function (a) {
      void 0 !== a.addtlConsent &&
        "string" !== typeof a.addtlConsent &&
        (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies &&
        "boolean" !== typeof a.gdprApplies &&
        (a.gdprApplies = void 0);
      return (void 0 !== a.tcString && "string" !== typeof a.tcString) ||
        (void 0 !== a.listenerId && "number" !== typeof a.listenerId)
        ? 2
        : a.cmpStatus && "error" !== a.cmpStatus
        ? 0
        : 3;
    },
    Vk = function (a, b) {
      this.s = a;
      this.o = null;
      this.F = {};
      this.ba = 0;
      this.P = void 0 === b ? 500 : b;
      this.C = null;
    };
  na(Vk, Tk);
  var Xk = function (a) {
    return "function" === typeof a.s.__tcfapi || null != Wk(a);
  };
  Vk.prototype.addEventListener = function (a) {
    var b = {},
      c = wb(function () {
        return a(b);
      }),
      d = 0;
    -1 !== this.P &&
      (d = setTimeout(function () {
        b.tcString = "tcunavailable";
        b.internalErrorState = 1;
        c();
      }, this.P));
    var e = function (f, g) {
      clearTimeout(d);
      f
        ? ((b = f),
          (b.internalErrorState = Uk(b)),
          (g && 0 === b.internalErrorState) ||
            ((b.tcString = "tcunavailable"), g || (b.internalErrorState = 3)))
        : ((b.tcString = "tcunavailable"), (b.internalErrorState = 3));
      a(b);
    };
    try {
      Yk(this, "addEventListener", e);
    } catch (f) {
      (b.tcString = "tcunavailable"),
        (b.internalErrorState = 3),
        d && (clearTimeout(d), (d = 0)),
        c();
    }
  };
  Vk.prototype.removeEventListener = function (a) {
    a && a.listenerId && Yk(this, "removeEventListener", null, a.listenerId);
  };
  var $k = function (a, b, c) {
      var d;
      d = void 0 === d ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (void 0 !== f) {
            e = f[void 0 === d ? "755" : d];
            break a;
          }
        }
        e = void 0;
      }
      var g = e;
      if (0 === g) return !1;
      var k = c;
      2 === c
        ? ((k = 0), 2 === g && (k = 1))
        : 3 === c && ((k = 1), 1 === g && (k = 0));
      var l;
      if (0 === k)
        if (a.purpose && a.vendor) {
          var n = Zk(a.vendor.consents, void 0 === d ? "755" : d);
          l =
            n &&
            "1" === b &&
            a.purposeOneTreatment &&
            ("DE" === a.publisherCC || "CH" === a.publisherCC)
              ? !0
              : n && Zk(a.purpose.consents, b);
        } else l = !0;
      else
        l =
          1 === k
            ? a.purpose && a.vendor
              ? Zk(a.purpose.legitimateInterests, b) &&
                Zk(a.vendor.legitimateInterests, void 0 === d ? "755" : d)
              : !0
            : !0;
      return l;
    },
    Zk = function (a, b) {
      return !(!a || !a[b]);
    },
    Yk = function (a, b, c, d) {
      c || (c = function () {});
      if ("function" === typeof a.s.__tcfapi) {
        var e = a.s.__tcfapi;
        e(b, 2, c, d);
      } else if (Wk(a)) {
        al(a);
        var f = ++a.ba;
        a.F[f] = c;
        if (a.o) {
          var g = {};
          a.o.postMessage(
            ((g.__tcfapiCall = {
              command: b,
              version: 2,
              callId: f,
              parameter: d,
            }),
            g),
            "*"
          );
        }
      } else c({}, !1);
    },
    Wk = function (a) {
      if (a.o) return a.o;
      a.o = Rk(a.s, "__tcfapiLocator");
      return a.o;
    },
    al = function (a) {
      a.C ||
        ((a.C = function (b) {
          try {
            var c;
            c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data)
              .__tcfapiReturn;
            a.F[c.callId](c.returnValue, c.success);
          } catch (d) {}
        }),
        Ok(a.s, a.C));
    };
  var bl = !0;
  bl = !1;
  var cl = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 },
    dl = Nk("", 550),
    el = Nk("", 500);
  function fl() {
    var a = N.tcf || {};
    return (N.tcf = a);
  }
  var gl = function (a, b) {
      this.C = a;
      this.o = b;
      this.s = Sa();
    },
    hl = function (a) {},
    il = function (a) {},
    ol = function () {
      var a = fl(),
        b = new Vk(m, bl ? 3e3 : -1),
        c = new gl(b, a);
      if (
        (jl()
          ? !0 === m.gtag_enable_tcf_support
          : !1 !== m.gtag_enable_tcf_support) &&
        !a.active &&
        ("function" === typeof m.__tcfapi || Xk(b))
      ) {
        a.active = !0;
        a.Ac = {};
        kl();
        var d = null;
        bl
          ? (d = m.setTimeout(function () {
              ll(a);
              ml(a);
              d = null;
            }, el))
          : (a.tcString = "tcunavailable");
        try {
          b.addEventListener(function (e) {
            d && (clearTimeout(d), (d = null));
            if (0 !== e.internalErrorState) ll(a), ml(a), hl(c);
            else {
              var f;
              a.gdprApplies = e.gdprApplies;
              if (!1 === e.gdprApplies) (f = nl()), b.removeEventListener(e);
              else if (
                "tcloaded" === e.eventStatus ||
                "useractioncomplete" === e.eventStatus ||
                "cmpuishown" === e.eventStatus
              ) {
                var g = {},
                  k;
                for (k in cl)
                  if (cl.hasOwnProperty(k))
                    if ("1" === k) {
                      var l = e,
                        n = !0;
                      n = void 0 === n ? !1 : n;
                      var p;
                      var q = l;
                      !1 === q.gdprApplies
                        ? (p = !0)
                        : (void 0 === q.internalErrorState &&
                            (q.internalErrorState = Uk(q)),
                          (p =
                            "error" === q.cmpStatus ||
                            0 !== q.internalErrorState ||
                            ("loaded" === q.cmpStatus &&
                              ("tcloaded" === q.eventStatus ||
                                "useractioncomplete" === q.eventStatus))
                              ? !0
                              : !1));
                      g["1"] = p
                        ? !1 === l.gdprApplies ||
                          "tcunavailable" === l.tcString ||
                          (void 0 === l.gdprApplies && !n) ||
                          "string" !== typeof l.tcString ||
                          !l.tcString.length
                          ? !0
                          : $k(l, "1", 0)
                        : !1;
                    } else g[k] = $k(e, k, cl[k]);
                f = g;
              }
              f &&
                ((a.tcString = e.tcString || "tcempty"),
                (a.Ac = f),
                ml(a),
                hl(c));
            }
          }),
            il(c);
        } catch (e) {
          d && (clearTimeout(d), (d = null)), ll(a), ml(a);
        }
      }
    };
  function ll(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
    bl && (a.Ac = nl());
  }
  function kl() {
    var a = {},
      b = ((a.ad_storage = "denied"), (a.wait_for_update = dl), a);
    Zd(b);
  }
  var jl = function () {
    var a = !1;
    a = !0;
    return a;
  };
  function nl() {
    var a = {},
      b;
    for (b in cl) cl.hasOwnProperty(b) && (a[b] = !0);
    return a;
  }
  function ml(a) {
    var b = {},
      c = ((b.ad_storage = a.Ac["1"] ? "granted" : "denied"), b);
    pl();
    ae(c, 0);
  }
  var ql = function () {
      var a = fl();
      if (a.active && void 0 !== a.loadTime) return Number(a.loadTime);
    },
    pl = function () {
      var a = fl();
      return a.active ? a.tcString || "" : "";
    },
    rl = function () {
      var a = fl();
      return a.active && void 0 !== a.gdprApplies
        ? a.gdprApplies
          ? "1"
          : "0"
        : "";
    },
    sl = function (a) {
      if (!cl.hasOwnProperty(String(a))) return !0;
      var b = fl();
      return b.active && b.Ac ? !!b.Ac[String(a)] : !0;
    };
  var tl = !1;
  var ul = !1;
  function vl(a) {
    var b = String(m.location).split(/[?#]/)[0],
      c = Cf.Pg || m._CONSENT_MODE_SALT,
      d;
    if (a) {
      var e;
      if (c) {
        var f = b + a + c,
          g = 1,
          k,
          l,
          n;
        if (f)
          for (g = 0, l = f.length - 1; 0 <= l; l--)
            (n = f.charCodeAt(l)),
              (g = ((g << 6) & 268435455) + n + (n << 14)),
              (k = g & 266338304),
              (g = 0 != k ? g ^ (k >> 21) : g);
        e = String(g);
      } else e = "0";
      d = e;
    } else d = "";
    return d;
  }
  function wl(a) {
    function b(r) {
      var v;
      N.reported_gclid || (N.reported_gclid = {});
      v = N.reported_gclid;
      var x;
      x =
        !g || (Rd() && !be(M.D))
          ? l + (r ? "gcu" : "gcs")
          : l + "." + (f.prefix || "_gcl") + (r ? "gcu" : "gcs");
      if (!v[x]) {
        v[x] = !0;
        var z = [],
          w = {},
          y = function (J, K) {
            K && (z.push(J + "=" + encodeURIComponent(K)), (w[J] = !0));
          },
          A = "https://www.google.com";
        if (Rd()) {
          var C = be(M.D);
          y("gcs", ce());
          r && y("gcu", "1");
          Sd() && y("gcd", de());
          N.dedupe_gclid || (N.dedupe_gclid = "" + Cg());
          y("rnd", N.dedupe_gclid);
          if ((!l || (n && "aw.ds" !== n)) && be(M.D)) {
            var D = Ah("_gcl_aw");
            y("gclaw", D.join("."));
          }
          y("url", String(m.location).split(/[?#]/)[0]);
          y("dclid", xl(d, p));
          var F = !1;
          F = !0;
          C || (!d && !F) || (A = "https://pagead2.googlesyndication.com");
        }
        y("gdpr_consent", pl()), y("gdpr", rl());
        "1" === kh(!1)._up && y("gtm_up", "1");
        y("gclid", xl(d, l));
        y("gclsrc", n);
        if (
          !(w.gclid || w.dclid || w.gclaw) &&
          (y("gbraid", xl(d, q)), !w.gbraid && Rd() && be(M.D))
        ) {
          var E = Ah("_gcl_gb");
          y("gclgb", E.join("."));
        }
        y("gtm", Mk(!e));
        g && be(M.D) && (Ng(f || {}), y("auid", Jg[Kg(f.prefix)] || ""));
        tl || (a.jd && y("did", a.jd)),
          ul && (a.Lb && y("gdid", a.Lb), a.Kb && y("edid", a.Kb));
        var O = A + "/pagead/landing?" + z.join("&");
        Pb(O);
      }
    }
    var c = !!a.se,
      d = !!a.sa,
      e = a.U,
      f = void 0 === a.gd ? {} : a.gd,
      g = void 0 === a.sd ? !0 : a.sd,
      k = Gh(),
      l = k.gclid || "",
      n = k.gclsrc,
      p = k.dclid || "",
      q = k.gbraid || "",
      t = !c && ((!l || (n && "aw.ds" !== n) ? !1 : !0) || q),
      u = Rd();
    if (t || u)
      u
        ? fe(
            function () {
              b();
              be(M.D) ||
                ee(function (r) {
                  return b(!0, r.ai);
                }, M.D);
            },
            [M.D]
          )
        : b();
  }
  function xl(a, b) {
    var c = a && !be(M.D);
    return b && c ? "0" : b;
  }
  var yl = ["aw", "dc", "gb"];
  function zl(a, b, c, d) {
    var e = a.Fg,
      f = a.callback,
      g = a.ng;
    if ("function" === typeof f)
      if (e === M.Gd && void 0 === g) {
        var k = d(b.prefix, c);
        0 === k.length ? f(void 0) : 1 === k.length ? f(k[0]) : f(k);
      } else e === M.eh ? (ud(65), Ng(b, !1), f(Jg[Kg(b.prefix)])) : f(g);
  }
  function Al(a, b) {
    var c = a.Zf,
      d = a.lg,
      e = a.Dg;
    if (a.Jb) {
      var f = void 0 === c ? !0 : !!c;
      sh(d[M.Eb], !!d[M.O]) && Lh(yl, b);
      Ih(b);
      Oh(yl, b);
      bi(f, b);
    }
    d[M.O] && Nh(yl, d[M.O], d[M.Xb], !!d[M.Fb], b.prefix);
    e && Qh(["aw", "dc", "gb"]);
  }
  var Bl = !1;
  var Cl = function () {
      this.o = {};
    },
    Dl = function (a, b, c) {
      null != c && (a.o[b] = c);
    },
    El = function (a) {
      return Object.keys(a.o)
        .map(function (b) {
          return encodeURIComponent(b) + "=" + encodeURIComponent(a.o[b]);
        })
        .join("&");
    },
    Gl = function (a, b, c, d, e) {};
  var Il = !1,
    Jl = Number("200");
  function Kl() {
    if (!m.Promise) return !1;
    wa(B.interestCohort) ||
      Il ||
      ((Il = !0),
      Sk(
        "A489+ZNTpP/HCOD+k3I13nobRVH7eyh5fz5LGhYvQlNf9WauHk/0awCtXOEoWTIK9JN8bgzgn2SfPdaFXe5O9QkAAACKeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"
      ));
    return wa(B.interestCohort);
  }
  function Ll() {
    var a = N.floc;
    if (a) {
      var b = a.ts,
        c = a.floc;
      if (b && c && 1e3 > Sa() - b) return Promise.resolve(c);
    }
    var d = void 0;
    try {
      d = Promise.race([
        B.interestCohort().then(function (e) {
          N.floc = { ts: Sa(), floc: e };
          return e;
        }),
        new Promise(function (e) {
          m.setTimeout(function () {
            return e();
          }, Jl);
        }),
      ]).catch(function () {});
    } catch (e) {
      return;
    }
    return d;
  }
  var Jm = function () {
      var a = !0;
      (sl(7) && sl(9) && sl(10)) || (a = !1);
      var b = !0;
      b = !1;
      b && !Im() && (a = !1);
      return a;
    },
    Im = function () {
      var a = !0;
      (sl(3) && sl(4)) || (a = !1);
      return a;
    };
  var Nm = function (a, b) {
      var c = b.getWithConfig(M.Oa),
        d = b.getWithConfig(M.Va),
        e = b.getWithConfig(c);
      if (void 0 === e) {
        var f = void 0;
        Km.hasOwnProperty(c)
          ? (f = Km[c])
          : Lm.hasOwnProperty(c) && (f = Lm[c]);
        1 === f && (f = Mm(c));
        h(f)
          ? aj()(function () {
              var g = aj().getByName(a).get(f);
              d(g);
            })
          : d(void 0);
      } else d(e);
    },
    Om = function (a, b) {
      var c = a[M.Xb];
      gj(
        b + ".",
        a[M.O] || "",
        void 0 === c ? !!a.use_anchor : "fragment" === c,
        !!a[M.Fb]
      );
    },
    Sm = function (a, b, c) {
      if (Rd() && (!c.isGtmEvent || !Pm[a])) {
        var d = !be(M.I),
          e = function () {
            var f,
              g,
              k = aj(),
              l = Qm(a, b, "", c),
              n,
              p = l.Ba._useUp;
            if (c.isGtmEvent || Rm(b, l.Ba)) {
              var q = !0;
              if (c.isGtmEvent) {
                f = "gtm" + Pf();
                g = l.Ba;
                l.gtmTrackerName && (g.name = f);
                q = !1;
                q = !0;
              }
              q &&
                k(function () {
                  var u = k.getByName(b);
                  u && (n = u.get("clientId"));
                  c.isGtmEvent || k.remove(b);
                });
              k("create", a, c.isGtmEvent ? g : l.Ba);
              d &&
                be(M.I) &&
                ((d = !1),
                k(function () {
                  var u = aj().getByName(c.isGtmEvent ? f : b);
                  !u ||
                    (u.get("clientId") == n && p) ||
                    (c.isGtmEvent ? (l.nc["&gcu"] = "1") : (l.ja["&gcu"] = "1"),
                    u.set(l.nc),
                    c.isGtmEvent
                      ? u.send("pageview")
                      : u.send("pageview", l.ja));
                }));
              c.isGtmEvent &&
                k(function () {
                  k.remove(f);
                });
            }
          };
        Wd(e, M.I);
        Wd(e, M.D);
        c.isGtmEvent && (Pm[a] = !0);
      }
    },
    $m = function (a, b, c) {
      function d() {
        var F = c.getWithConfig("custom_map");
        f(function () {
          if (!c.isGtmEvent && Xb(F)) {
            var E = t.ja,
              O = g().getByName(k),
              J;
            for (J in F)
              if (
                F.hasOwnProperty(J) &&
                /^(dimension|metric)\d+$/.test(J) &&
                void 0 != F[J]
              ) {
                var K = O.get(Mm(F[J]));
                Tm(E, J, K);
              }
          }
        });
      }
      var e = "https://www.google-analytics.com/analytics.js",
        f = c.isGtmEvent ? fj(c.getWithConfig("gaFunctionName")) : fj();
      if (wa(f)) {
        var g = aj,
          k;
        c.isGtmEvent
          ? (k = c.getWithConfig("name") || c.getWithConfig("gtmTrackerName"))
          : (k = "gtag_" + a.split("-").join("_"));
        var l = function (F) {
            var E = [].slice.call(arguments, 0);
            E[0] = k ? k + "." + E[0] : "" + E[0];
            f.apply(window, E);
          },
          n = function () {
            var F = function (V, L) {
                for (var I = 0; L && I < L.length; I++) l(V, L[I]);
              },
              E = c.isGtmEvent,
              O = E ? Um(t) : Vm(b, c);
            if (O) {
              l("require", "ec", "ec.js");
              E && O.ue && l("set", "&cu", O.ue);
              var J = O.action;
              if (E || "impressions" === J)
                if ((F("ec:addImpression", O.kg), !E)) return;
              if ("promo_click" === J || "promo_view" === J || (E && O.zc)) {
                var K = O.zc;
                F("ec:addPromo", K);
                if (K && 0 < K.length && "promo_click" === J) {
                  E ? l("ec:setAction", J, O.Za) : l("ec:setAction", J);
                  return;
                }
                if (!E) return;
              }
              "promo_view" !== J &&
                "impressions" !== J &&
                (F("ec:addProduct", O.qb), l("ec:setAction", J, O.Za));
            }
          },
          p = function (F) {
            if (F) {
              var E = {};
              if (Xb(F))
                for (var O in Wm) Wm.hasOwnProperty(O) && Xm(Wm[O], O, F[O], E);
              l("require", "linkid", E);
            }
          },
          q = function () {
            if (ji()) {
            } else {
              var F = c.getWithConfig(M.xh);
              F &&
                (l("require", F, { dataLayer: "dataLayer" }),
                l("require", "render"));
            }
          },
          t = Qm(a, k, b, c),
          u = function (F, E, O) {
            O && (E = "" + E);
            t.ja[F] = E;
          };
        !c.isGtmEvent &&
          Rm(k, t.Ba) &&
          (f(function () {
            g() && g().remove(k);
          }),
          (Ym[k] = !1));
        f("create", a, t.Ba);
        if (t.Ba._x_19 && !c.isGtmEvent) {
          var r = Hk(t.Ba._x_19, "/analytics.js");
          r && (e = r);
        }
        if (c.isGtmEvent ? t.nc._x_19 : t.Ba._x_19) {
          var v = c.isGtmEvent ? t.nc._x_20 : t.Ba._x_20;
          v && !Ym[k] && ((Ym[k] = !0), f(kj(k, v)));
        }
        c.isGtmEvent
          ? t.enableRecaptcha && l("require", "recaptcha", "recaptcha.js")
          : (d(), p(t.linkAttribution));
        var x = t[M.na];
        x && x[M.O] && Om(x, k);
        l("set", t.nc);
        c.isGtmEvent && t.enableLinkId && l("require", "linkid", "linkid.js");
        c.isGtmEvent && Rd() && Sm(a, k, c);
        if (b === M.Tb)
          if (c.isGtmEvent) {
            if (t.displayfeatures) {
              var z = "_dc_gtm_" + a.replace(/[^A-Za-z0-9-]/g, "");
              l("require", "displayfeatures", void 0, { cookieName: z });
            }
            if (t.remarketingLists) {
              var w = "_dc_gtm_" + a.replace(/[^A-Za-z0-9-]/g, "");
              l("require", "adfeatures", { cookieName: w });
            }
            n();
            l("send", "pageview");
            t.Ba._useUp && hj(k + ".");
          } else q(), l("send", "pageview", t.ja);
        else
          b === M.Da
            ? (q(),
              wi(a, c),
              c.getWithConfig(M.Ya) && (Qh(["aw", "dc"]), hj(k + ".")),
              0 != t.sendPageView && l("send", "pageview", t.ja),
              Sm(a, k, c))
            : b === M.La
            ? Nm(k, c)
            : "screen_view" === b
            ? l("send", "screenview", t.ja)
            : "timing_complete" === b
            ? ((t.ja.hitType = "timing"),
              u("timingCategory", t.eventCategory, !0),
              c.isGtmEvent
                ? u("timingVar", t.timingVar, !0)
                : u("timingVar", t.name, !0),
              u("timingValue", Ma(t.value)),
              void 0 !== t.eventLabel && u("timingLabel", t.eventLabel, !0),
              l("send", t.ja))
            : "exception" === b
            ? l("send", "exception", t.ja)
            : "optimize.callback" === b ||
              ("" === b && c.isGtmEvent) ||
              ("track_social" === b && c.isGtmEvent
                ? ((t.ja.hitType = "social"),
                  u("socialNetwork", t.socialNetwork, !0),
                  u("socialAction", t.socialAction, !0),
                  u("socialTarget", t.socialTarget, !0))
                : ((c.isGtmEvent ||
                    0 <=
                      za(
                        [
                          M.zb,
                          "select_content",
                          M.Ka,
                          M.xb,
                          M.yb,
                          M.eb,
                          "set_checkout_option",
                          M.xa,
                          M.Ab,
                          M.Sb,
                          "checkout_progress",
                        ],
                        b
                      )) &&
                    n(),
                  (t.ja.hitType = "event"),
                  u("eventCategory", t.eventCategory, !0),
                  u("eventAction", t.eventAction || b, !0),
                  void 0 !== t.eventLabel && u("eventLabel", t.eventLabel, !0),
                  void 0 !== t.value && u("eventValue", Ma(t.value))),
              l("send", t.ja));
        var y = !1;
        var A = Zm;
        y && (A = c.getContainerTypeLoaded("UA"));
        if (!A && !c.isGtmEvent) {
          Zm = !0;
          y && c.setContainerTypeLoaded("UA", !0);
          Wi();
          var C = function () {
              y && c.setContainerTypeLoaded("UA", !1);
              c.onFailure();
            },
            D = function () {
              g().loaded || C();
            };
          ji() ? G(D) : Db(e, D, C);
        }
      } else G(c.onFailure);
    },
    an = function (a, b, c, d) {
      fe(
        function () {
          $m(a, b, d);
        },
        [M.I, M.D]
      );
    },
    cn = function (a, b) {
      function c(f) {
        function g(p, q) {
          for (var t = 0; t < q.length; t++) {
            var u = q[t];
            if (f[u]) {
              l[p] = f[u];
              break;
            }
          }
        }
        function k() {
          if (f.category) l.category = f.category;
          else {
            for (var p = "", q = 0; q < bn.length; q++)
              void 0 !== f[bn[q]] && (p && (p += "/"), (p += f[bn[q]]));
            p && (l.category = p);
          }
        }
        var l = H(f),
          n = !1;
        if (n || b)
          g("id", ["id", "item_id", "promotion_id"]),
            g("name", ["name", "item_name", "promotion_name"]),
            g("brand", ["brand", "item_brand"]),
            g("variant", ["variant", "item_variant"]),
            g("list", ["list_name", "item_list_name"]),
            g("position", ["list_position", "creative_slot", "index"]),
            k();
        g("listPosition", ["list_position"]);
        g("creative", ["creative_name"]);
        g("list", ["list_name"]);
        g("position", ["list_position", "creative_slot"]);
        return l;
      }
      b = void 0 === b ? !1 : b;
      for (var d = [], e = 0; a && e < a.length; e++)
        a[e] && Xb(a[e]) && d.push(c(a[e]));
      return d.length ? d : void 0;
    },
    dn = function (a) {
      return be(a);
    },
    en = !1;
  var fn = !1;
  var Zm,
    Ym = {},
    Pm = {},
    Km = {
      client_id: 1,
      client_storage: "storage",
      cookie_name: 1,
      cookie_domain: 1,
      cookie_expires: 1,
      cookie_path: 1,
      cookie_update: 1,
      cookie_flags: 1,
      sample_rate: 1,
      site_speed_sample_rate: 1,
      use_amp_client_id: 1,
      store_gac: 1,
      conversion_linker: "storeGac",
    },
    gn = {
      name: !0,
      clientId: !0,
      sampleRate: !0,
      siteSpeedSampleRate: !0,
      alwaysSendReferrer: !0,
      allowAnchor: !0,
      allowLinker: !0,
      cookieName: !0,
      cookieDomain: !0,
      cookieExpires: !0,
      cookiePath: !0,
      cookieUpdate: !0,
      cookieFlags: !0,
      legacyCookieDomain: !0,
      legacyHistoryImport: !0,
      storage: !0,
      useAmpClientId: !0,
      storeGac: !0,
      _cd2l: !0,
      _useUp: !0,
      _cs: !0,
    },
    hn = { anonymize_ip: 1 },
    Lm = {
      app_id: 1,
      app_installer_id: 1,
      app_name: 1,
      app_version: 1,
      campaign: {
        name: "campaignName",
        source: "campaignSource",
        medium: "campaignMedium",
        term: "campaignKeyword",
        content: "campaignContent",
        id: "campaignId",
      },
      currency: "currencyCode",
      description: "exDescription",
      fatal: "exFatal",
      language: 1,
      non_interaction: 1,
      page_hostname: "hostname",
      page_referrer: "referrer",
      page_path: "page",
      page_location: "location",
      page_title: "title",
      screen_name: 1,
      transport_type: "transport",
      user_id: 1,
    },
    jn = {
      content_id: 1,
      event_category: 1,
      event_action: 1,
      event_label: 1,
      link_attribution: 1,
      linker: 1,
      method: 1,
      name: 1,
      send_page_view: 1,
      value: 1,
    },
    kn = {
      eventCategory: !0,
      eventAction: !0,
      eventLabel: !0,
      timingVar: !0,
      value: !0,
      socialNetwork: !0,
      socialAction: !0,
      socialTarget: !0,
      gaFunctionName: !0,
      displayfeatures: !0,
      remarketingLists: !0,
      enableLinkId: !0,
      enableRecaptcha: !0,
      linker: !0,
      gtmEcommerceData: !0,
      gtmTrackerName: !0,
    },
    bn = [
      "item_category",
      "item_category2",
      "item_category3",
      "item_category4",
      "item_category5",
    ],
    Wm = { cookie_name: 1, cookie_expires: "duration", levels: 1 },
    ln = {
      anonymize_ip: 1,
      fatal: 1,
      non_interaction: 1,
      use_amp_client_id: 1,
      send_page_view: 1,
      store_gac: 1,
      conversion_linker: 1,
    },
    Xm = function (a, b, c, d) {
      if (void 0 !== c)
        if (
          (ln[b] && (c = Na(c)),
          "anonymize_ip" !== b || c || (c = void 0),
          1 === a)
        )
          d[Mm(b)] = c;
        else if (h(a)) d[a] = c;
        else
          for (var e in a)
            a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e]);
    },
    Mm = function (a) {
      return a && h(a)
        ? a.replace(/(_[a-z])/g, function (b) {
            return b[1].toUpperCase();
          })
        : a;
    },
    mn = function (a) {
      var b = "general";
      0 <=
      za(
        [
          M.ef,
          M.xb,
          M.ff,
          M.eb,
          "checkout_progress",
          M.xa,
          M.Ab,
          M.yb,
          "set_checkout_option",
        ],
        a
      )
        ? (b = "ecommerce")
        : 0 <=
          za(
            "generate_lead login search select_content share sign_up view_item view_item_list view_promotion view_search_results".split(
              " "
            ),
            a
          )
        ? (b = "engagement")
        : "exception" === a && (b = "error");
      return b;
    },
    Tm = function (a, b, c) {
      a.hasOwnProperty(b) || (a[b] = c);
    },
    nn = function (a) {
      if (ya(a)) {
        for (var b = [], c = 0; c < a.length; c++) {
          var d = a[c];
          if (void 0 != d) {
            var e = d.id,
              f = d.variant;
            void 0 != e && void 0 != f && b.push(String(e) + "." + String(f));
          }
        }
        return 0 < b.length ? b.join("!") : void 0;
      }
    },
    Qm = function (a, b, c, d) {
      function e(V, L) {
        void 0 !== L && (l[V] = L);
      }
      var f = function (V) {
          return d.getWithConfig(V);
        },
        g = {},
        k = {},
        l = {},
        n = {},
        p = nn(f(M.th));
      !d.isGtmEvent && p && Tm(k, "exp", p);
      l["&gtm"] = Mk(!0);
      Rd() && (n._cs = dn);
      var q = f("custom_map");
      if (!d.isGtmEvent && Xb(q))
        for (var t in q)
          if (
            q.hasOwnProperty(t) &&
            /^(dimension|metric)\d+$/.test(t) &&
            void 0 != q[t]
          ) {
            var u = f(String(q[t]));
            void 0 !== u && Tm(k, t, u);
          }
      for (var r = Af(d), v = 0; v < r.length; ++v) {
        var x = r[v];
        if (d.isGtmEvent) {
          var z = f(x);
          kn.hasOwnProperty(x)
            ? (g[x] = z)
            : gn.hasOwnProperty(x)
            ? (n[x] = z)
            : "currencyCode" != x && (l[x] = z);
        } else {
          var w = void 0;
          w = "developer_id" != x ? f(x) : Bf(d, x);
          if (jn.hasOwnProperty(x)) Xm(jn[x], x, w, g);
          else if (hn.hasOwnProperty(x)) Xm(hn[x], x, w, l);
          else if (Lm.hasOwnProperty(x)) Xm(Lm[x], x, w, k);
          else if (Km.hasOwnProperty(x)) Xm(Km[x], x, w, n);
          else if (/^(dimension|metric|content_group)\d+$/.test(x))
            Xm(1, x, w, k);
          else if ("developer_id" === x) {
            if (!en) {
              var y = ab(w);
              y && (k["&did"] = y);
            }
            if (fn) {
              var A = ab(Bf(d, x, 1), ".");
              A && (k["&gdid"] = A);
              var C = ab(Bf(d, x, 2), ".");
              C && (k["&edid"] = C);
            }
          } else x === M.ca && 0 > za(r, M.Lc) && (n.cookieName = w + "_ga");
        }
      }
      (!1 !== f(M.dh) && !1 !== f(M.Ub) && Jm()) || (l.allowAdFeatures = !1);
      if (!1 === f(M.Ea) || !Im()) {
        var D = d.isGtmEvent
          ? "allowAdPersonalizationSignals"
          : "allowAdFeatures";
        D = "allowAdPersonalizationSignals";
        l[D] = !1;
      }
      !d.isGtmEvent && f(M.Ya) && (n._useUp = !0);
      if (d.isGtmEvent) {
        n.name = n.name || g.gtmTrackerName;
        var F = l.hitCallback;
        l.hitCallback = function () {
          wa(F) && F();
          d.onSuccess();
        };
      } else {
        Tm(n, "cookieDomain", "auto");
        Tm(l, "forceSSL", !0);
        Tm(g, "eventCategory", mn(c));
        0 <=
          za(
            [
              "view_item",
              "view_item_list",
              "view_promotion",
              "view_search_results",
            ],
            c
          ) && Tm(k, "nonInteraction", !0);
        "login" === c || "sign_up" === c || "share" === c
          ? Tm(g, "eventLabel", f(M.wh))
          : "search" === c || "view_search_results" === c
          ? Tm(g, "eventLabel", f(M.Ch))
          : "select_content" === c && Tm(g, "eventLabel", f(M.nh));
        var E = g[M.na] || {},
          O = E[M.Eb];
        O || (0 != O && E[M.O])
          ? (n.allowLinker = !0)
          : !1 === O && Tm(n, "useAmpClientId", !1);
        k.hitCallback = d.onSuccess;
        n.name = b;
      }
      Rd() &&
        ((l["&gcs"] = ce()),
        be(M.I) || (n.storage = "none"),
        be(M.D) || ((l.allowAdFeatures = !1), (n.storeGac = !1)));
      var J = f(M.oa) || f(M.vh) || Vf("gtag.remote_config." + a + ".url", 2),
        K = f(M.uh) || Vf("gtag.remote_config." + a + ".dualId", 2);
      if (J) {
        d.isGtmEvent || (n._x_19 = J);
        n._cd2l = !0;
      }
      K && !d.isGtmEvent && (n._x_20 = K);
      g.ja = k;
      g.nc = l;
      g.Ba = n;
      return g;
    },
    Um = function (a) {
      var b = a.gtmEcommerceData;
      if (!b) return null;
      var c = {};
      b.currencyCode && (c.ue = b.currencyCode);
      if (b.impressions) {
        c.action = "impressions";
        var d = b.impressions;
        c.kg = "impressions" === b.translateIfKeyEquals ? cn(d, !0) : d;
      }
      if (b.promoView) {
        c.action = "promo_view";
        var e = b.promoView.promotions;
        c.zc = "promoView" === b.translateIfKeyEquals ? cn(e, !0) : e;
      }
      if (b.promoClick) {
        c.action = "promo_click";
        var f = b.promoClick.promotions;
        c.zc = "promoClick" === b.translateIfKeyEquals ? cn(f, !0) : f;
        c.Za = b.promoClick.actionField;
        return c;
      }
      for (var g in b)
        if (
          b.hasOwnProperty(g) &&
          "translateIfKeyEquals" !== g &&
          "impressions" !== g &&
          "promoView" !== g &&
          "promoClick" !== g &&
          "currencyCode" !== g
        ) {
          c.action = g;
          var k = b[g].products;
          c.qb = "products" === b.translateIfKeyEquals ? cn(k, !0) : k;
          c.Za = b[g].actionField;
          break;
        }
      return Object.keys(c).length ? c : null;
    },
    Vm = function (a, b) {
      function c(u) {
        return {
          id: d(M.kb),
          affiliation: d(M.qh),
          revenue: d(M.fa),
          tax: d(M.pf),
          shipping: d(M.Qd),
          coupon: d(M.rh),
          list: d(M.Pd) || u,
        };
      }
      for (
        var d = function (u) {
            return b.getWithConfig(u);
          },
          e = d(M.X),
          f,
          g = 0;
        e && g < e.length && !(f = e[g][M.Pd]);
        g++
      );
      var k = d("custom_map");
      if (Xb(k))
        for (var l = 0; e && l < e.length; ++l) {
          var n = e[l],
            p;
          for (p in k)
            k.hasOwnProperty(p) &&
              /^(dimension|metric)\d+$/.test(p) &&
              void 0 != k[p] &&
              Tm(n, p, n[k[p]]);
        }
      var q = null,
        t = d(M.sh);
      a === M.xa || a === M.Ab
        ? (q = { action: a, Za: c(), qb: cn(e) })
        : a === M.xb
        ? (q = { action: "add", qb: cn(e) })
        : a === M.yb
        ? (q = { action: "remove", qb: cn(e) })
        : a === M.Ka
        ? (q = { action: "detail", Za: c(f), qb: cn(e) })
        : a === M.zb
        ? (q = { action: "impressions", kg: cn(e) })
        : "view_promotion" === a
        ? (q = { action: "promo_view", zc: cn(t) })
        : "select_content" === a && t && 0 < t.length
        ? (q = { action: "promo_click", zc: cn(t) })
        : "select_content" === a
        ? (q = { action: "click", Za: { list: d(M.Pd) || f }, qb: cn(e) })
        : a === M.eb || "checkout_progress" === a
        ? (q = {
            action: "checkout",
            qb: cn(e),
            Za: { step: a === M.eb ? 1 : d(M.nf), option: d(M.lf) },
          })
        : "set_checkout_option" === a &&
          (q = {
            action: "checkout_option",
            Za: { step: d(M.nf), option: d(M.lf) },
          });
      q && (q.ue = d(M.da));
      return q;
    },
    on = {},
    Rm = function (a, b) {
      var c = on[a];
      on[a] = H(b);
      if (!c) return !1;
      for (var d in b) if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
      for (var e in c) if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
      return !1;
    };
  var pn = !1;
  var qn = !1;
  qn = !0;
  function rn() {
    var a = N;
    return (a.gcq = a.gcq || new sn());
  }
  var tn = function (a, b, c) {
      rn().register(a, b, c);
    },
    un = function (a, b, c, d) {
      rn().push("event", [b, a], c, d);
    },
    vn = function (a, b) {
      rn().push("config", [a], b);
    },
    wn = function (a, b, c, d) {
      rn().push("get", [a, b], c, d);
    },
    xn = {},
    yn = function () {
      this.status = 1;
      this.containerConfig = {};
      this.targetConfig = {};
      this.remoteConfig = {};
      this.s = {};
      this.C = null;
      this.o = !1;
    },
    zn = function (a, b, c, d, e) {
      this.type = a;
      this.C = b;
      this.U = c || "";
      this.o = d;
      this.s = e;
    },
    sn = function () {
      this.s = {};
      this.C = {};
      this.o = [];
      this.F = { AW: !1, UA: !1 };
      this.enableDeferrableCommandAfterConfig = pn;
    },
    An = function (a, b) {
      var c = gi(b);
      return (a.s[c.containerId] = a.s[c.containerId] || new yn());
    },
    Bn = function (a, b, c) {
      if (b) {
        var d = gi(b);
        if (d && 1 === An(a, b).status) {
          An(a, b).status = 2;
          var e = {};
          Wj &&
            (e.timeoutId = m.setTimeout(function () {
              ud(38);
              Cj();
            }, 3e3));
          a.push("require", [e], d.containerId);
          xn[d.containerId] = Sa();
          if (ji()) {
          } else {
            var g =
                "/gtag/js?id=" +
                encodeURIComponent(d.containerId) +
                "&l=dataLayer&cx=c",
              k =
                ("http:" != m.location.protocol ? "https:" : "http:") +
                ("//www.googletagmanager.com" + g),
              l = Hk(c, g) || k;
            Db(l);
          }
        }
      }
    },
    Cn = function (a, b, c, d) {
      if (d.U) {
        var e = An(a, d.U),
          f = e.C;
        if (f) {
          var g = H(c),
            k = H(e.targetConfig[d.U]),
            l = H(e.containerConfig),
            n = H(e.remoteConfig),
            p = H(a.C),
            q = Vf("gtm.uniqueEventId"),
            t = gi(d.U).prefix,
            u = Va(function () {
              var v = g[M.Cb];
              v && G(v);
            }),
            r = yf(
              xf(
                zf(
                  wf(vf(uf(tf(sf(rf(g), k), l), n), p), function () {
                    jk(q, t, "2");
                    qn && u();
                  }),
                  function () {
                    jk(q, t, "3");
                    qn && u();
                  }
                ),
                function (v, x) {
                  a.F[v] = x;
                }
              ),
              function (v) {
                return a.F[v];
              }
            );
          try {
            jk(q, t, "1");
            f(d.U, b, d.C, r);
          } catch (v) {
            jk(q, t, "4");
          }
        }
      }
    };
  sn.prototype.register = function (a, b, c) {
    var d = An(this, a);
    if (3 !== d.status) {
      d.C = b;
      d.status = 3;
      c && (H(d.remoteConfig, c), (d.remoteConfig = c));
      var e = gi(a),
        f = xn[e.containerId];
      if (void 0 !== f) {
        var g = N[e.containerId].bootstrap,
          k = e.prefix.toUpperCase();
        N[e.containerId]._spx && (k = k.toLowerCase());
        var l = Vf("gtm.uniqueEventId"),
          n = k,
          p = Sa() - g;
        if (Wj && !Hj[l]) {
          l !== Dj && (yj(), (Dj = l));
          var q = n + "." + Math.floor(g - f) + "." + Math.floor(p);
          Lj = Lj ? Lj + "," + q : "&cl=" + q;
        }
        delete xn[e.containerId];
      }
      this.flush();
    }
  };
  sn.prototype.push = function (a, b, c, d) {
    var e = Math.floor(Sa() / 1e3);
    Bn(this, c, b[0][M.oa] || this.C[M.oa]);
    pn && c && An(this, c).o && (d = !1);
    this.o.push(new zn(a, e, c, b, d));
    d || this.flush();
  };
  sn.prototype.insert = function (a, b, c) {
    var d = Math.floor(Sa() / 1e3);
    0 < this.o.length
      ? this.o.splice(1, 0, new zn(a, d, c, b, !1))
      : this.o.push(new zn(a, d, c, b, !1));
  };
  sn.prototype.flush = function (a) {
    for (var b = this, c = [], d = !1, e = {}; this.o.length; ) {
      var f = this.o[0];
      if (f.s)
        pn
          ? !f.U || An(this, f.U).o
            ? ((f.s = !1), this.o.push(f))
            : c.push(f)
          : ((f.s = !1), this.o.push(f)),
          this.o.shift();
      else {
        switch (f.type) {
          case "require":
            if (3 !== An(this, f.U).status && !a) {
              pn && this.o.push.apply(this.o, c);
              return;
            }
            Wj && m.clearTimeout(f.o[0].timeoutId);
            break;
          case "set":
            Ia(f.o[0], function (t, u) {
              H(Za(t, u), b.C);
            });
            break;
          case "config":
            e.Ja = {};
            Ia(
              f.o[0],
              (function (t) {
                return function (u, r) {
                  H(Za(u, r), t.Ja);
                };
              })(e)
            );
            var g = !!e.Ja[M.Uc];
            delete e.Ja[M.Uc];
            var k = An(this, f.U),
              l = gi(f.U),
              n = l.containerId === l.id;
            g || (n ? (k.containerConfig = {}) : (k.targetConfig[f.U] = {}));
            (k.o && g) || Cn(this, M.Da, e.Ja, f);
            k.o = !0;
            delete e.Ja[M.cc];
            n ? H(e.Ja, k.containerConfig) : H(e.Ja, k.targetConfig[f.U]);
            pn && (d = !0);
            break;
          case "event":
            e.Ec = {};
            Ia(
              f.o[0],
              (function (t) {
                return function (u, r) {
                  H(Za(u, r), t.Ec);
                };
              })(e)
            );
            Cn(this, f.o[1], e.Ec, f);
            break;
          case "get":
            var p = {},
              q = ((p[M.Oa] = f.o[0]), (p[M.Va] = f.o[1]), p);
            Cn(this, M.La, q, f);
        }
        this.o.shift();
        Dn(this, f);
      }
      e = { Ja: e.Ja, Ec: e.Ec };
    }
    pn && (this.o.push.apply(this.o, c), d && this.flush());
  };
  var Dn = function (a, b) {
    if ("require" !== b.type)
      if (b.U)
        for (
          var c = a.getCommandListeners(b.U)[b.type] || [], d = 0;
          d < c.length;
          d++
        )
          c[d]();
      else
        for (var e in a.s)
          if (a.s.hasOwnProperty(e)) {
            var f = a.s[e];
            if (f && f.s)
              for (var g = f.s[b.type] || [], k = 0; k < g.length; k++) g[k]();
          }
  };
  sn.prototype.getRemoteConfig = function (a) {
    return An(this, a).remoteConfig;
  };
  sn.prototype.getCommandListeners = function (a) {
    return An(this, a).s;
  };
  var En = function (a, b, c) {
      var d = {
        event: b,
        "gtm.element": a,
        "gtm.elementClasses": Qb(a, "className"),
        "gtm.elementId": a["for"] || Lb(a, "id") || "",
        "gtm.elementTarget": a.formTarget || Qb(a, "target") || "",
      };
      c && (d["gtm.triggers"] = c.join(","));
      d["gtm.elementUrl"] =
        (a.attributes && a.attributes.formaction ? a.formAction : "") ||
        a.action ||
        Qb(a, "href") ||
        a.src ||
        a.code ||
        a.codebase ||
        "";
      return d;
    },
    Fn = function (a) {
      N.hasOwnProperty("autoEventsSettings") || (N.autoEventsSettings = {});
      var b = N.autoEventsSettings;
      b.hasOwnProperty(a) || (b[a] = {});
      return b[a];
    },
    Gn = function (a, b, c) {
      Fn(a)[b] = c;
    },
    Hn = function (a, b, c, d) {
      var e = Fn(a),
        f = Ua(e, b, d);
      e[b] = c(f);
    },
    In = function (a, b, c) {
      var d = Fn(a);
      return Ua(d, b, c);
    };
  var Jn = ["input", "select", "textarea"],
    Kn = ["button", "hidden", "image", "reset", "submit"],
    Ln = function (a) {
      var b = a.tagName.toLowerCase();
      return !Ba(Jn, function (c) {
        return c === b;
      }) ||
        ("input" === b &&
          Ba(Kn, function (c) {
            return c === a.type.toLowerCase();
          }))
        ? !1
        : !0;
    },
    Mn = function (a) {
      return a.form
        ? a.form.tagName
          ? a.form
          : B.getElementById(a.form)
        : Ob(a, ["form"], 100);
    },
    Nn = function (a, b, c) {
      if (!a.elements) return 0;
      for (var d = b.dataset[c], e = 0, f = 1; e < a.elements.length; e++) {
        var g = a.elements[e];
        if (Ln(g)) {
          if (g.dataset[c] === d) return f;
          f++;
        }
      }
      return 0;
    };
  var On = !!m.MutationObserver,
    Pn = void 0,
    Qn = function (a) {
      if (!Pn) {
        var b = function () {
          var c = B.body;
          if (c)
            if (On)
              new MutationObserver(function () {
                for (var e = 0; e < Pn.length; e++) G(Pn[e]);
              }).observe(c, { childList: !0, subtree: !0 });
            else {
              var d = !1;
              Hb(c, "DOMNodeInserted", function () {
                d ||
                  ((d = !0),
                  G(function () {
                    d = !1;
                    for (var e = 0; e < Pn.length; e++) G(Pn[e]);
                  }));
              });
            }
        };
        Pn = [];
        B.body ? b() : G(b);
      }
      Pn.push(a);
    };
  var Sn = !1,
    Tn = [];
  function Un() {
    if (!Sn) {
      Sn = !0;
      for (var a = 0; a < Tn.length; a++) G(Tn[a]);
    }
  }
  var Vn = function (a) {
    Sn ? G(a) : Tn.push(a);
  };
  function Wn(a, b) {
    a = String(a);
    b = String(b);
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) == c;
  }
  var Xn = new Fa();
  function Yn(a, b, c) {
    var d = c ? "i" : void 0;
    try {
      var e = String(b) + d,
        f = Xn.get(e);
      f || ((f = new RegExp(b, d)), Xn.set(e, f));
      return f.test(a);
    } catch (g) {
      return !1;
    }
  }
  function Zn(a, b) {
    function c(g) {
      var k = De(g),
        l = Be(k, "protocol"),
        n = Be(k, "host", !0),
        p = Be(k, "port"),
        q = Be(k, "path").toLowerCase().replace(/\/$/, "");
      if (
        void 0 === l ||
        ("http" == l && "80" == p) ||
        ("https" == l && "443" == p)
      )
        (l = "web"), (p = "default");
      return [l, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0;
  }
  function $n(a) {
    return ao(a) ? 1 : 0;
  }
  function ao(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && ya(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = H(a, {});
        H({ arg1: c[d], any_of: void 0 }, e);
        if ($n(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return 0 <= String(b).indexOf(String(c));
      case "_css":
        var f;
        a: {
          if (b) {
            var g = [
              "matches",
              "webkitMatchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
            ];
            try {
              for (var k = 0; k < g.length; k++)
                if (b[g[k]]) {
                  f = b[g[k]](c);
                  break a;
                }
            } catch (n) {}
          }
          f = !1;
        }
        return f;
      case "_ew":
        return Wn(b, c);
      case "_eq":
        return String(b) == String(c);
      case "_ge":
        return Number(b) >= Number(c);
      case "_gt":
        return Number(b) > Number(c);
      case "_lc":
        var l;
        l = String(b).split(",");
        return 0 <= za(l, String(c));
      case "_le":
        return Number(b) <= Number(c);
      case "_lt":
        return Number(b) < Number(c);
      case "_re":
        return Yn(b, c, a.ignore_case);
      case "_sw":
        return 0 == String(b).indexOf(String(c));
      case "_um":
        return Zn(b, c);
    }
    return !1;
  }
  Object.freeze({ dl: 1, id: 1 });
  var co = {},
    eo = function (a, b) {
      b = b.toString().split(",");
      for (var c = 0; c < b.length; c++) {
        var d = co[b[c]] || [];
        co[b[c]] = d;
        0 > za(d, a) && d.push(a);
      }
    },
    fo = function (a) {
      Ia(co, function (b, c) {
        var d = za(c, a);
        0 <= d && c.splice(d, 1);
      });
    };
  var go = "HA GF G UA AW DC".split(" "),
    ho = !1;
  ho = !0;
  var io = !1,
    jo = !1;
  function ko(a, b) {
    var c = { event: a };
    b &&
      ((c.eventModel = H(b)),
      b[M.Cb] && (c.eventCallback = b[M.Cb]),
      b[M.Oc] && (c.eventTimeout = b[M.Oc]));
    return c;
  }
  function lo(a) {
    a.hasOwnProperty("gtm.uniqueEventId") ||
      Object.defineProperty(a, "gtm.uniqueEventId", { value: Pf() });
    return a["gtm.uniqueEventId"];
  }
  function mo() {
    if (!io && !N.gtagRegistered) {
      io = N.gtagRegistered = !0;
      N.addTargetToGroup = function (c) {
        eo(c, "default");
      };
    }
    return io;
  }
  var no = {
      config: function (a) {
        var b,
          c = lo(a);
        if (2 > a.length || !h(a[1])) return;
        var d = {};
        if (2 < a.length) {
          if ((void 0 != a[2] && !Xb(a[2])) || 3 < a.length) return;
          d = a[2];
        }
        var e = gi(a[1]);
        if (!e) return;
        fo(e.id);
        eo(e.id, d[M.Ud] || "default");
        delete d[M.Ud];
        jo || ud(43);
        if (mo() && -1 !== za(go, e.prefix)) {
          "G" === e.prefix && (d[M.cc] = !0);
          ho && delete d[M.Cb];
          vn(d, e.id);
          return;
        }
        Yf("gtag.targets." + e.id, void 0);
        Yf("gtag.targets." + e.id, H(d));
        var f = {};
        f[M.jb] = e.id;
        b = ko(M.Da, f);
        b["gtm.uniqueEventId"] = c;
        return b;
      },
      consent: function (a) {
        function b() {
          mo() && H(a[2], { subcommand: a[1] });
        }
        if (3 === a.length) {
          ud(39);
          var c = Pf(),
            d = a[1];
          "default" === d
            ? (b(), Zd(a[2]))
            : "update" === d && (b(), ae(a[2], c));
        }
      },
      event: function (a) {
        var b = a[1];
        if (!(2 > a.length) && h(b)) {
          var c;
          if (2 < a.length) {
            if ((!Xb(a[2]) && void 0 != a[2]) || 3 < a.length) return;
            c = a[2];
          }
          var d = ko(b, c),
            e = lo(a);
          d["gtm.uniqueEventId"] = e;
          var f;
          var g = c && c[M.jb];
          void 0 === g && ((g = Vf(M.jb, 2)), void 0 === g && (g = "default"));
          if (h(g) || ya(g)) {
            for (
              var k = g.toString().replace(/\s+/g, "").split(","),
                l = [],
                n = 0;
              n < k.length;
              n++
            )
              if (0 <= k[n].indexOf("-")) l.push(k[n]);
              else {
                var p = co[k[n]];
                p && p.length && (l = l.concat(p));
              }
            f = ii(l);
          } else f = void 0;
          var q = f;
          if (!q) return;
          for (var t = mo(), u = [], r = 0; t && r < q.length; r++) {
            var v = q[r];
            if (-1 !== za(go, v.prefix)) {
              var x = H(c);
              "G" === v.prefix && (x[M.cc] = !0);
              ho && delete x[M.Cb];
              un(b, x, v.id);
            }
            u.push(v.id);
          }
          d.eventModel = d.eventModel || {};
          0 < q.length
            ? (d.eventModel[M.jb] = u.join())
            : delete d.eventModel[M.jb];
          jo || ud(43);
          return d;
        }
      },
      get: function (a) {
        ud(53);
        if (4 !== a.length || !h(a[1]) || !h(a[2]) || !wa(a[3])) return;
        var b = gi(a[1]),
          c = String(a[2]),
          d = a[3];
        if (!b) return;
        jo || ud(43);
        if (!mo() || -1 === za(go, b.prefix)) return;
        Pf();
        var e = {};
        ok(H(((e[M.Oa] = c), (e[M.Va] = d), e)));
        wn(
          c,
          function (f) {
            G(function () {
              return d(f);
            });
          },
          b.id
        );
      },
      js: function (a) {
        if (2 == a.length && a[1].getTime) {
          jo = !0;
          mo();
          var b = {};
          return (
            (b.event = "gtm.js"),
            (b["gtm.start"] = a[1].getTime()),
            (b["gtm.uniqueEventId"] = lo(a)),
            b
          );
        }
      },
      policy: function () {},
      set: function (a) {
        var b;
        2 == a.length && Xb(a[1])
          ? (b = H(a[1]))
          : 3 == a.length &&
            h(a[1]) &&
            ((b = {}),
            Xb(a[2]) || ya(a[2]) ? (b[a[1]] = H(a[2])) : (b[a[1]] = a[2]));
        if (b) {
          if ((Pf(), mo())) {
            H(b);
            var c = H(b);
            rn().push("set", [c]);
          }
          b._clear = !0;
          return b;
        }
      },
    },
    oo = { policy: !0 };
  var po = function (a, b) {
      var c = a.hide;
      if (c && void 0 !== c[b] && c.end) {
        c[b] = !1;
        var d = !0,
          e;
        for (e in c)
          if (c.hasOwnProperty(e) && !0 === c[e]) {
            d = !1;
            break;
          }
        d && (c.end(), (c.end = null));
      }
    },
    ro = function (a) {
      var b = qo(),
        c = b && b.hide;
      c && c.end && (c[a] = !0);
    };
  var Io = function (a) {
    if (Ho(a)) return a;
    this.o = a;
  };
  Io.prototype.ui = function () {
    return this.o;
  };
  var Ho = function (a) {
    return !a || "object" !== Vb(a) || Xb(a)
      ? !1
      : "getUntrustedUpdateValue" in a;
  };
  Io.prototype.getUntrustedUpdateValue = Io.prototype.ui;
  var Jo = [],
    Ko = !1,
    Lo = !1,
    Mo = function (a) {
      return m["dataLayer"].push(a);
    },
    No = function (a) {
      var b = N["dataLayer"],
        c = b ? b.subscribers : 1,
        d = 0,
        e = a;
      return function () {
        ++d === c && (e(), (e = null));
      };
    };
  function Oo(a) {
    var b = a._clear;
    Ia(a, function (d, e) {
      "_clear" !== d && (b && Yf(d, void 0), Yf(d, e));
    });
    Kf || (Kf = a["gtm.start"]);
    var c = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    c || ((c = Pf()), (a["gtm.uniqueEventId"] = c), Yf("gtm.uniqueEventId", c));
    return Fk(a);
  }
  function Po() {
    var a = Jo[0];
    if (null == a || "object" !== typeof a) return !1;
    if (a.event) return !0;
    if (La(a)) {
      var b = a[0];
      if ("config" === b || "event" === b || "js" === b) return !0;
    }
    return !1;
  }
  function Qo() {
    for (var a = !1; !Lo && 0 < Jo.length; ) {
      if (!Ko && Po()) {
        var b = {},
          c = ((b.event = "gtm.init_consent"), b),
          d = {},
          e = ((d.event = "gtm.init"), d);
        Jo.unshift(c, e);
        Ko = !0;
      }
      Lo = !0;
      delete Sf.eventModel;
      Uf();
      var g = Jo.shift();
      if (null != g) {
        var k = Ho(g);
        if (k) {
          var l = g;
          g = Ho(l) ? l.getUntrustedUpdateValue() : void 0;
          for (
            var n = [
                "gtm.allowlist",
                "gtm.blocklist",
                "gtm.whitelist",
                "gtm.blacklist",
                "tagTypeBlacklist",
              ],
              p = 0;
            p < n.length;
            p++
          ) {
            var q = n[p],
              t = Vf(q, 1);
            if (ya(t) || Xb(t)) t = H(t);
            Tf[q] = t;
          }
        }
        try {
          if (wa(g))
            try {
              g.call(Wf);
            } catch (A) {}
          else if (ya(g)) {
            var u = g;
            if (h(u[0])) {
              var r = u[0].split("."),
                v = r.pop(),
                x = u.slice(1),
                z = Vf(r.join("."), 2);
              if (void 0 !== z && null !== z)
                try {
                  z[v].apply(z, x);
                } catch (A) {}
            }
          } else {
            if (La(g)) {
              a: {
                var w = g;
                if (w.length && h(w[0])) {
                  var y = no[w[0]];
                  if (y && (!k || !oo[w[0]])) {
                    g = y(w);
                    break a;
                  }
                }
                g = void 0;
              }
              if (!g) {
                Lo = !1;
                continue;
              }
            }
            a = Oo(g) || a;
          }
        } finally {
          k && Uf(!0);
        }
      }
      Lo = !1;
    }
    return !a;
  }
  function Ro() {
    var b = Qo();
    try {
      po(m["dataLayer"], Cf.M);
    } catch (c) {}
    return b;
  }
  var To = function () {
      var a = Bb("dataLayer", []),
        b = Bb("google_tag_manager", {});
      b = b["dataLayer"] = b["dataLayer"] || {};
      Oi(function () {
        b.gtmDom || ((b.gtmDom = !0), a.push({ event: "gtm.dom" }));
      });
      Vn(function () {
        b.gtmLoad || ((b.gtmLoad = !0), a.push({ event: "gtm.load" }));
      });
      b.subscribers = (b.subscribers || 0) + 1;
      var c = a.push;
      a.push = function () {
        var e;
        if (0 < N.SANDBOXED_JS_SEMAPHORE) {
          e = [];
          for (var f = 0; f < arguments.length; f++)
            e[f] = new Io(arguments[f]);
        } else e = [].slice.call(arguments, 0);
        var g = c.apply(a, e);
        Jo.push.apply(Jo, e);
        if (300 < this.length) for (ud(4); 300 < this.length; ) this.shift();
        var k = "boolean" !== typeof g || g;
        return Qo() && k;
      };
      var d = a.slice(0);
      Jo.push.apply(Jo, d);
      if (So()) {
        G(Ro);
      }
    },
    So = function () {
      var a = !0;
      return a;
    };
  var Uo = {};
  Uo.Yc = new String("undefined");
  var Vo = function (a) {
    this.o = function (b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d] === Uo.Yc ? b : a[d]);
      return c.join("");
    };
  };
  Vo.prototype.toString = function () {
    return this.o("undefined");
  };
  Vo.prototype.valueOf = Vo.prototype.toString;
  Uo.Ph = Vo;
  Uo.me = {};
  Uo.ei = function (a) {
    return new Vo(a);
  };
  var Wo = {};
  Uo.Ui = function (a, b) {
    var c = Pf();
    Wo[c] = [a, b];
    return c;
  };
  Uo.$f = function (a) {
    var b = a ? 0 : 1;
    return function (c) {
      var d = Wo[c];
      if (d && "function" === typeof d[b]) d[b]();
      Wo[c] = void 0;
    };
  };
  Uo.yi = function (a) {
    for (var b = !1, c = !1, d = 2; d < a.length; d++)
      (b = b || 8 === a[d]), (c = c || 16 === a[d]);
    return b && c;
  };
  Uo.Ni = function (a) {
    if (a === Uo.Yc) return a;
    var b = Pf();
    Uo.me[b] = a;
    return 'google_tag_manager["' + Cf.M + '"].macro(' + b + ")";
  };
  Uo.Ii = function (a, b, c) {
    a instanceof Uo.Ph && ((a = a.o(Uo.Ui(b, c))), (b = ua));
    return { vi: a, onSuccess: b };
  };
  var gp = m.clearTimeout,
    hp = m.setTimeout,
    R = function (a, b, c) {
      if (ji()) {
        b && G(b);
      } else return Db(a, b, c);
    },
    ip = function () {
      return new Date();
    },
    jp = function () {
      return m.location.href;
    },
    kp = function (a) {
      return Be(De(a), "fragment");
    },
    lp = function (a) {
      return Ce(De(a));
    },
    mp = function (a, b) {
      return Vf(a, b || 2);
    },
    np = function (a, b, c) {
      var d;
      b
        ? ((a.eventCallback = b), c && (a.eventTimeout = c), (d = Mo(a)))
        : (d = Mo(a));
      return d;
    },
    op = function (a, b) {
      m[a] = b;
    },
    T = function (a, b, c) {
      b && (void 0 === m[a] || (c && !m[a])) && (m[a] = b);
      return m[a];
    },
    pp = function (a, b, c) {
      return mg(a, b, void 0 === c ? !0 : !!c);
    },
    qp = function (a, b, c) {
      return 0 === zg(a, b, c);
    },
    rp = function (a, b) {
      if (ji()) {
        b && G(b);
      } else Fb(a, b);
    },
    sp = function (a) {
      return !!In(a, "init", !1);
    },
    tp = function (a) {
      Gn(a, "init", !0);
    },
    up = function (a) {
      var b = If + "?id=" + encodeURIComponent(a) + "&l=dataLayer";
      R(li("https://", "http://", b));
    },
    vp = function (a, b, c) {
      Wj && (Yb(a) || kk(c, b, a));
    };
  var wp = Uo.Ii;
  var Tp = encodeURI,
    W = encodeURIComponent,
    Up = Gb;
  var Vp = function (a, b) {
    if (!a) return !1;
    var c = Be(De(a), "host");
    if (!c) return !1;
    for (var d = 0; b && d < b.length; d++) {
      var e = b[d] && b[d].toLowerCase();
      if (e) {
        var f = c.length - e.length;
        0 < f && "." != e.charAt(0) && (f--, (e = "." + e));
        if (0 <= f && c.indexOf(e, f) == f) return !0;
      }
    }
    return !1;
  };
  var Wp = function (a, b, c) {
    for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
      a[f] &&
        a[f].hasOwnProperty(b) &&
        a[f].hasOwnProperty(c) &&
        ((d[a[f][b]] = a[f][c]), (e = !0));
    return e ? d : null;
  };
  function Dr() {
    return (m.gaGlobal = m.gaGlobal || {});
  }
  var Er = function () {
      var a = Dr();
      a.hid = a.hid || Da();
      return a.hid;
    },
    Fr = function (a, b) {
      var c = Dr();
      if (void 0 == c.vid || (b && !c.from_cookie))
        (c.vid = a), (c.from_cookie = b);
    };
  var fs = function () {
    if (wa(m.__uspapi)) {
      var a = "";
      try {
        m.__uspapi("getUSPData", 1, function (b, c) {
          if (c && b) {
            var d = b.uspString;
            d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d);
          }
        });
      } catch (b) {}
      return a;
    }
  };
  var Es = window,
    Fs = document,
    Gs = function (a) {
      var b = Es._gaUserPrefs;
      if ((b && b.ioo && b.ioo()) || (a && !0 === Es["ga-disable-" + a]))
        return !0;
      try {
        var c = Es.external;
        if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
      } catch (f) {}
      for (
        var d = ig("AMP_TOKEN", String(Fs.cookie), !0), e = 0;
        e < d.length;
        e++
      )
        if ("$OPT_OUT" == d[e]) return !0;
      return Fs.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  var Hs = {};
  function Ks(a) {
    delete a.eventModel[M.cc];
    Ms(a.eventModel);
  }
  var Ms = function (a) {
    Ia(a, function (c) {
      "_" === c.charAt(0) && delete a[c];
    });
    var b = a[M.Pa] || {};
    Ia(b, function (c) {
      "_" === c.charAt(0) && delete b[c];
    });
  };
  var Ps = function (a, b, c) {
      un(b, c, a);
    },
    Qs = function (a, b, c) {
      un(b, c, a, !0);
    },
    Us = function (a, b) {};
  function Rs(a, b) {}
  var X = { g: {} };

  (X.g.e = ["google"]),
    (function () {
      (function (a) {
        X.__e = a;
        X.__e.h = "e";
        X.__e.m = !0;
        X.__e.priorityOverride = 0;
      })(function (a) {
        var b = String(ag(a.vtp_gtmEventId, "event"));
        a.vtp_gtmCachedValues && (b = String(a.vtp_gtmCachedValues.event));
        return b;
      });
    })();

  (X.g.v = ["google"]),
    (function () {
      (function (a) {
        X.__v = a;
        X.__v.h = "v";
        X.__v.m = !0;
        X.__v.priorityOverride = 0;
      })(function (a) {
        var b = a.vtp_name;
        if (!b || !b.replace) return !1;
        var c = mp(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
          d = void 0 !== c ? c : a.vtp_defaultValue;
        vp(d, "v", a.vtp_gtmEventId);
        return d;
      });
    })();
  (X.g.rep = ["google"]),
    (function () {
      (function (a) {
        X.__rep = a;
        X.__rep.h = "rep";
        X.__rep.m = !0;
        X.__rep.priorityOverride = 0;
      })(function (a) {
        var b;
        switch (gi(a.vtp_containerId).prefix) {
          case "AW":
            b = em;
            break;
          case "DC":
            b = um;
            break;
          case "GF":
            b = zm;
            break;
          case "HA":
            b = Em;
            break;
          case "UA":
            b = an;
            break;
          default:
            G(a.vtp_gtmOnFailure);
            return;
        }
        G(a.vtp_gtmOnSuccess);
        tn(a.vtp_containerId, b, a.vtp_remoteConfig || {});
      });
    })();

  (X.g.cid = ["google"]),
    (function () {
      (function (a) {
        X.__cid = a;
        X.__cid.h = "cid";
        X.__cid.m = !0;
        X.__cid.priorityOverride = 0;
      })(function () {
        return Cf.M;
      });
    })();

  (X.g.get = ["google"]),
    (function () {
      (function (a) {
        X.__get = a;
        X.__get.h = "get";
        X.__get.m = !0;
        X.__get.priorityOverride = 0;
      })(function (a) {
        var b = a.vtp_settings;
        (a.vtp_deferrable
          ? Qs
          : Ps)(String(b.streamId), String(a.vtp_eventName), b.eventParameters || {});
        a.vtp_gtmOnSuccess();
      });
    })();

  (X.g.gtagua = ["google"]),
    (function () {
      (function (a) {
        X.__gtagua = a;
        X.__gtagua.h = "gtagua";
        X.__gtagua.m = !0;
        X.__gtagua.priorityOverride = 0;
      })(function (a) {
        G(a.vtp_gtmOnSuccess);
      });
    })();

  var Vs = {};
  (Vs.macro = function (a) {
    if (Uo.me.hasOwnProperty(a)) return Uo.me[a];
  }),
    (Vs.onHtmlSuccess = Uo.$f(!0)),
    (Vs.onHtmlFailure = Uo.$f(!1));
  Vs.dataLayer = Wf;
  Vs.callback = function (a) {
    Nf.hasOwnProperty(a) && wa(Nf[a]) && Nf[a]();
    delete Nf[a];
  };
  Vs.bootstrap = 0;
  Vs._spx = !1;
  function Ws() {
    N[Cf.M] = Vs;
    Wa(Of, X.g);
    Jc = Jc || Uo;
    Kc = Sc;
  }
  function Xs() {
    var a = !1;
    a && Xi("INIT");
    xd().s();
    N = m.google_tag_manager = m.google_tag_manager || {};
    ol();
    th.enable_gbraid_cookie_write = !0;
    var b = !!N[Cf.M];
    if (b) {
      var c = N.zones;
      c && c.unregisterChild(Cf.M);
    } else {
      for (
        var d = data.resource || {}, e = d.macros || [], f = 0;
        f < e.length;
        f++
      )
        xc.push(e[f]);
      for (var g = d.tags || [], k = 0; k < g.length; k++) Fc.push(g[k]);
      for (var l = d.predicates || [], n = 0; n < l.length; n++) zc.push(l[n]);
      for (var p = d.rules || [], q = 0; q < p.length; q++) {
        for (var t = p[q], u = {}, r = 0; r < t.length; r++)
          u[t[r][0]] = Array.prototype.slice.call(t[r], 1);
        yc.push(u);
      }
      Hc = X;
      Ic = $n;
      Ws();
      To();
      Ji = !1;
      Ki = 0;
      if (
        ("interactive" == B.readyState && !B.createEventObject) ||
        "complete" == B.readyState
      )
        Mi();
      else {
        Hb(B, "DOMContentLoaded", Mi);
        Hb(B, "readystatechange", Mi);
        if (B.createEventObject && B.documentElement.doScroll) {
          var v = !0;
          try {
            v = !m.frameElement;
          } catch (A) {}
          v && Ni();
        }
        Hb(m, "load", Mi);
      }
      Sn = !1;
      "complete" === B.readyState ? Un() : Hb(m, "load", Un);
      Wj && m.setInterval(Qj, 864e5);
      Lf = new Date().getTime();
      Vs.bootstrap = Lf;
      if (a) {
        var y = Yi("INIT");
      }
    }
  }
  (function (a) {
    if (!m["__TAGGY_INSTALLED"]) {
      var b = !1;
      if (B.referrer) {
        var c = De(B.referrer);
        b = "cct.google" === Ae(c, "host");
      }
      if (!b) {
        var d = mg("googTaggyReferrer");
        b = d.length && d[0].length;
      }
      b &&
        ((m["__TAGGY_INSTALLED"] = !0),
        Db("https://cct.google/taggy/agent.js"));
    }
    var f = function () {
        var n = m["google.tagmanager.debugui2.queue"];
        n ||
          ((n = []),
          (m["google.tagmanager.debugui2.queue"] = n),
          Db("https://www.googletagmanager.com/debug/bootstrap"));
        var p = {
          messageType: "CONTAINER_STARTING",
          data: { scriptSource: Ab, containerProduct: "GTM", debug: !1 },
        };
        p.data.resume = function () {
          a();
        };
        p.data.containerProduct = "OGT";
        Cf.Og && (p.data.initialPublish = !0);
        n.push(p);
      },
      g = "x" === Be(m.location, "query", !1, void 0, "gtm_debug");
    if (!g && B.referrer) {
      var k = De(B.referrer);
      g = "tagassistant.google.com" === Ae(k, "host");
    }
    if (!g) {
      var l = mg("__TAG_ASSISTANT");
      g = l.length && l[0].length;
    }
    !g && m.__TAG_ASSISTANT_API && (g = !0);
    !g &&
      B.documentElement.hasAttribute("data-tag-assistant-present") &&
      (g = !0);
    g && Ab ? f() : a();
  })(Xs);
})();
