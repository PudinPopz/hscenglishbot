/*!
 * jQuery JavaScript Library v2.1.0
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-01-23T21:10Z
 */

/*!
 * Sizzle CSS Selector Engine v1.10.16
 * http://sizzlejs.com/
 *
 * Copyright 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-01-13
 */

//     Underscore.js 1.6.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */

//     (c) 2010-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */

/**
 * @license text 2.0.15 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, http://github.com/requirejs/text/LICENSE
 */

//     uuid.js
//
//     Copyright (c) 2010-2012 Robert Kieffer
//     MIT License - http://opensource.org/licenses/mit-license.php

/*! Socket.IO.js build:0.9.17, development. Copyright(c) 2011 LearnBoost <dev@learnboost.com> MIT Licensed */

/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

/**
   * Parses an URI
   *
   * @author Steven Levithan <stevenlevithan.com> (MIT license)
   * @api public
   */

/*	SWFObject v2.2 <http://code.google.com/p/swfobject/>
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
*/

// Copyright: Hiroshi Ichikawa <http://gimite.net/en/>
// License: New BSD License
// Reference: http://dev.w3.org/html5/websockets/
// Reference: http://tools.ietf.org/html/draft-hixie-thewebsocketprotocol

/*!
 * jquery-drawer v3.1.0
 * Flexible drawer menu using jQuery, iScroll and CSS.
 * http://git.blivesta.com/drawer
 * License : MIT
 * Author : blivesta <design@blivesta.com> (http://blivesta.com/)
 */

/*! iScroll v5.1.3 ~ (c) 2008-2014 Matteo Spinelli ~ http://cubiq.org/license */

function BlobCastClient(e) {
    e || (e = {}),
    this.myUserId = this.myUuid = e.userId,
    this.server = e.hasOwnProperty("server") ? e.server : "https://blobcast.jackboxgames.com",
    this.appId = e.hasOwnProperty("appId") ? e.appId : undefined,
    this.delegate = null,
    this.currentRoomId = null,
    this.isConnected = !1,
    this.retries = 0,
    this.maxRetries = 7,
    this.joinAs = "player"
}
(function(e, t) {
    typeof module == "object" && typeof module.exports == "object" ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
})(typeof window != "undefined" ? window : this, function(window, noGlobal) {
    function isArraylike(e) {
        var t = e.length
          , n = jQuery.type(e);
        return n === "function" || jQuery.isWindow(e) ? !1 : e.nodeType === 1 && t ? !0 : n === "array" || t === 0 || typeof t == "number" && t > 0 && t - 1 in e
    }
    function winnow(e, t, n) {
        if (jQuery.isFunction(t))
            return jQuery.grep(e, function(e, r) {
                return !!t.call(e, r, e) !== n
            });
        if (t.nodeType)
            return jQuery.grep(e, function(e) {
                return e === t !== n
            });
        if (typeof t == "string") {
            if (risSimple.test(t))
                return jQuery.filter(t, e, n);
            t = jQuery.filter(t, e)
        }
        return jQuery.grep(e, function(e) {
            return indexOf.call(t, e) >= 0 !== n
        })
    }
    function sibling(e, t) {
        while ((e = e[t]) && e.nodeType !== 1)
            ;
        return e
    }
    function createOptions(e) {
        var t = optionsCache[e] = {};
        return jQuery.each(e.match(rnotwhite) || [], function(e, n) {
            t[n] = !0
        }),
        t
    }
    function completed() {
        document.removeEventListener("DOMContentLoaded", completed, !1),
        window.removeEventListener("load", completed, !1),
        jQuery.ready()
    }
    function Data() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }),
        this.expando = jQuery.expando + Math.random()
    }
    function dataAttr(e, t, n) {
        var r;
        if (n === undefined && e.nodeType === 1) {
            r = "data-" + t.replace(rmultiDash, "-$1").toLowerCase(),
            n = e.getAttribute(r);
            if (typeof n == "string") {
                try {
                    n = n === "true" ? !0 : n === "false" ? !1 : n === "null" ? null : +n + "" === n ? +n : rbrace.test(n) ? jQuery.parseJSON(n) : n
                } catch (i) {}
                data_user.set(e, t, n)
            } else
                n = undefined
        }
        return n
    }
    function returnTrue() {
        return !0
    }
    function returnFalse() {
        return !1
    }
    function safeActiveElement() {
        try {
            return document.activeElement
        } catch (e) {}
    }
    function manipulationTarget(e, t) {
        return jQuery.nodeName(e, "table") && jQuery.nodeName(t.nodeType !== 11 ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function disableScript(e) {
        return e.type = (e.getAttribute("type") !== null) + "/" + e.type,
        e
    }
    function restoreScript(e) {
        var t = rscriptTypeMasked.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function setGlobalEval(e, t) {
        var n = 0
          , r = e.length;
        for (; n < r; n++)
            data_priv.set(e[n], "globalEval", !t || data_priv.get(t[n], "globalEval"))
    }
    function cloneCopyEvent(e, t) {
        var n, r, i, s, o, u, a, f;
        if (t.nodeType !== 1)
            return;
        if (data_priv.hasData(e)) {
            s = data_priv.access(e),
            o = data_priv.set(t, s),
            f = s.events;
            if (f) {
                delete o.handle,
                o.events = {};
                for (i in f)
                    for (n = 0,
                    r = f[i].length; n < r; n++)
                        jQuery.event.add(t, i, f[i][n])
            }
        }
        data_user.hasData(e) && (u = data_user.access(e),
        a = jQuery.extend({}, u),
        data_user.set(t, a))
    }
    function getAll(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return t === undefined || t && jQuery.nodeName(e, t) ? jQuery.merge([e], n) : n
    }
    function fixInput(e, t) {
        var n = t.nodeName.toLowerCase();
        if (n === "input" && rcheckableType.test(e.type))
            t.checked = e.checked;
        else if (n === "input" || n === "textarea")
            t.defaultValue = e.defaultValue
    }
    function actualDisplay(e, t) {
        var n = jQuery(t.createElement(e)).appendTo(t.body)
          , r = window.getDefaultComputedStyle ? window.getDefaultComputedStyle(n[0]).display : jQuery.css(n[0], "display");
        return n.detach(),
        r
    }
    function defaultDisplay(e) {
        var t = document
          , n = elemdisplay[e];
        if (!n) {
            n = actualDisplay(e, t);
            if (n === "none" || !n)
                iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),
                t = iframe[0].contentDocument,
                t.write(),
                t.close(),
                n = actualDisplay(e, t),
                iframe.detach();
            elemdisplay[e] = n
        }
        return n
    }
    function curCSS(e, t, n) {
        var r, i, s, o, u = e.style;
        return n = n || getStyles(e),
        n && (o = n.getPropertyValue(t) || n[t]),
        n && (o === "" && !jQuery.contains(e.ownerDocument, e) && (o = jQuery.style(e, t)),
        rnumnonpx.test(o) && rmargin.test(t) && (r = u.width,
        i = u.minWidth,
        s = u.maxWidth,
        u.minWidth = u.maxWidth = u.width = o,
        o = n.width,
        u.width = r,
        u.minWidth = i,
        u.maxWidth = s)),
        o !== undefined ? o + "" : o
    }
    function addGetHookIf(e, t) {
        return {
            get: function() {
                if (e()) {
                    delete this.get;
                    return
                }
                return (this.get = t).apply(this, arguments)
            }
        }
    }
    function vendorPropName(e, t) {
        if (t in e)
            return t;
        var n = t[0].toUpperCase() + t.slice(1)
          , r = t
          , i = cssPrefixes.length;
        while (i--) {
            t = cssPrefixes[i] + n;
            if (t in e)
                return t
        }
        return r
    }
    function setPositiveNumber(e, t, n) {
        var r = rnumsplit.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }
    function augmentWidthOrHeight(e, t, n, r, i) {
        var s = n === (r ? "border" : "content") ? 4 : t === "width" ? 1 : 0
          , o = 0;
        for (; s < 4; s += 2)
            n === "margin" && (o += jQuery.css(e, n + cssExpand[s], !0, i)),
            r ? (n === "content" && (o -= jQuery.css(e, "padding" + cssExpand[s], !0, i)),
            n !== "margin" && (o -= jQuery.css(e, "border" + cssExpand[s] + "Width", !0, i))) : (o += jQuery.css(e, "padding" + cssExpand[s], !0, i),
            n !== "padding" && (o += jQuery.css(e, "border" + cssExpand[s] + "Width", !0, i)));
        return o
    }
    function getWidthOrHeight(e, t, n) {
        var r = !0
          , i = t === "width" ? e.offsetWidth : e.offsetHeight
          , s = getStyles(e)
          , o = jQuery.css(e, "boxSizing", !1, s) === "border-box";
        if (i <= 0 || i == null) {
            i = curCSS(e, t, s);
            if (i < 0 || i == null)
                i = e.style[t];
            if (rnumnonpx.test(i))
                return i;
            r = o && (support.boxSizingReliable() || i === e.style[t]),
            i = parseFloat(i) || 0
        }
        return i + augmentWidthOrHeight(e, t, n || (o ? "border" : "content"), r, s) + "px"
    }
    function showHide(e, t) {
        var n, r, i, s = [], o = 0, u = e.length;
        for (; o < u; o++) {
            r = e[o];
            if (!r.style)
                continue;
            s[o] = data_priv.get(r, "olddisplay"),
            n = r.style.display,
            t ? (!s[o] && n === "none" && (r.style.display = ""),
            r.style.display === "" && isHidden(r) && (s[o] = data_priv.access(r, "olddisplay", defaultDisplay(r.nodeName)))) : s[o] || (i = isHidden(r),
            (n && n !== "none" || !i) && data_priv.set(r, "olddisplay", i ? n : jQuery.css(r, "display")))
        }
        for (o = 0; o < u; o++) {
            r = e[o];
            if (!r.style)
                continue;
            if (!t || r.style.display === "none" || r.style.display === "")
                r.style.display = t ? s[o] || "" : "none"
        }
        return e
    }
    function Tween(e, t, n, r, i) {
        return new Tween.prototype.init(e,t,n,r,i)
    }
    function createFxNow() {
        return setTimeout(function() {
            fxNow = undefined
        }),
        fxNow = jQuery.now()
    }
    function genFx(e, t) {
        var n, r = 0, i = {
            height: e
        };
        t = t ? 1 : 0;
        for (; r < 4; r += 2 - t)
            n = cssExpand[r],
            i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function createTween(e, t, n) {
        var r, i = (tweeners[t] || []).concat(tweeners["*"]), s = 0, o = i.length;
        for (; s < o; s++)
            if (r = i[s].call(n, t, e))
                return r
    }
    function defaultPrefilter(e, t, n) {
        var r, i, s, o, u, a, f, l = this, c = {}, h = e.style, p = e.nodeType && isHidden(e), d = data_priv.get(e, "fxshow");
        n.queue || (u = jQuery._queueHooks(e, "fx"),
        u.unqueued == null && (u.unqueued = 0,
        a = u.empty.fire,
        u.empty.fire = function() {
            u.unqueued || a()
        }
        ),
        u.unqueued++,
        l.always(function() {
            l.always(function() {
                u.unqueued--,
                jQuery.queue(e, "fx").length || u.empty.fire()
            })
        })),
        e.nodeType === 1 && ("height"in t || "width"in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
        f = jQuery.css(e, "display"),
        f === "none" && (f = defaultDisplay(e.nodeName)),
        f === "inline" && jQuery.css(e, "float") === "none" && (h.display = "inline-block")),
        n.overflow && (h.overflow = "hidden",
        l.always(function() {
            h.overflow = n.overflow[0],
            h.overflowX = n.overflow[1],
            h.overflowY = n.overflow[2]
        }));
        for (r in t) {
            i = t[r];
            if (rfxtypes.exec(i)) {
                delete t[r],
                s = s || i === "toggle";
                if (i === (p ? "hide" : "show")) {
                    if (i !== "show" || !d || d[r] === undefined)
                        continue;
                    p = !0
                }
                c[r] = d && d[r] || jQuery.style(e, r)
            }
        }
        if (!jQuery.isEmptyObject(c)) {
            d ? "hidden"in d && (p = d.hidden) : d = data_priv.access(e, "fxshow", {}),
            s && (d.hidden = !p),
            p ? jQuery(e).show() : l.done(function() {
                jQuery(e).hide()
            }),
            l.done(function() {
                var t;
                data_priv.remove(e, "fxshow");
                for (t in c)
                    jQuery.style(e, t, c[t])
            });
            for (r in c)
                o = createTween(p ? d[r] : 0, r, l),
                r in d || (d[r] = o.start,
                p && (o.end = o.start,
                o.start = r === "width" || r === "height" ? 1 : 0))
        }
    }
    function propFilter(e, t) {
        var n, r, i, s, o;
        for (n in e) {
            r = jQuery.camelCase(n),
            i = t[r],
            s = e[n],
            jQuery.isArray(s) && (i = s[1],
            s = e[n] = s[0]),
            n !== r && (e[r] = s,
            delete e[n]),
            o = jQuery.cssHooks[r];
            if (o && "expand"in o) {
                s = o.expand(s),
                delete e[r];
                for (n in s)
                    n in e || (e[n] = s[n],
                    t[n] = i)
            } else
                t[r] = i
        }
    }
    function Animation(e, t, n) {
        var r, i, s = 0, o = animationPrefilters.length, u = jQuery.Deferred().always(function() {
            delete a.elem
        }), a = function() {
            if (i)
                return !1;
            var t = fxNow || createFxNow()
              , n = Math.max(0, f.startTime + f.duration - t)
              , r = n / f.duration || 0
              , s = 1 - r
              , o = 0
              , a = f.tweens.length;
            for (; o < a; o++)
                f.tweens[o].run(s);
            return u.notifyWith(e, [f, s, n]),
            s < 1 && a ? n : (u.resolveWith(e, [f]),
            !1)
        }, f = u.promise({
            elem: e,
            props: jQuery.extend({}, t),
            opts: jQuery.extend(!0, {
                specialEasing: {}
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: fxNow || createFxNow(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = jQuery.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                return f.tweens.push(r),
                r
            },
            stop: function(t) {
                var n = 0
                  , r = t ? f.tweens.length : 0;
                if (i)
                    return this;
                i = !0;
                for (; n < r; n++)
                    f.tweens[n].run(1);
                return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]),
                this
            }
        }), l = f.props;
        propFilter(l, f.opts.specialEasing);
        for (; s < o; s++) {
            r = animationPrefilters[s].call(f, e, l, f.opts);
            if (r)
                return r
        }
        return jQuery.map(l, createTween, f),
        jQuery.isFunction(f.opts.start) && f.opts.start.call(e, f),
        jQuery.fx.timer(jQuery.extend(a, {
            elem: e,
            anim: f,
            queue: f.opts.queue
        })),
        f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }
    function addToPrefiltersOrTransports(e) {
        return function(t, n) {
            typeof t != "string" && (n = t,
            t = "*");
            var r, i = 0, s = t.toLowerCase().match(rnotwhite) || [];
            if (jQuery.isFunction(n))
                while (r = s[i++])
                    r[0] === "+" ? (r = r.slice(1) || "*",
                    (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function inspectPrefiltersOrTransports(e, t, n, r) {
        function o(u) {
            var a;
            return i[u] = !0,
            jQuery.each(e[u] || [], function(e, u) {
                var f = u(t, n, r);
                if (typeof f == "string" && !s && !i[f])
                    return t.dataTypes.unshift(f),
                    o(f),
                    !1;
                if (s)
                    return !(a = f)
            }),
            a
        }
        var i = {}
          , s = e === transports;
        return o(t.dataTypes[0]) || !i["*"] && o("*")
    }
    function ajaxExtend(e, t) {
        var n, r, i = jQuery.ajaxSettings.flatOptions || {};
        for (n in t)
            t[n] !== undefined && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && jQuery.extend(!0, e, r),
        e
    }
    function ajaxHandleResponses(e, t, n) {
        var r, i, s, o, u = e.contents, a = e.dataTypes;
        while (a[0] === "*")
            a.shift(),
            r === undefined && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in u)
                if (u[i] && u[i].test(r)) {
                    a.unshift(i);
                    break
                }
        if (a[0]in n)
            s = a[0];
        else {
            for (i in n) {
                if (!a[0] || e.converters[i + " " + a[0]]) {
                    s = i;
                    break
                }
                o || (o = i)
            }
            s = s || o
        }
        if (s)
            return s !== a[0] && a.unshift(s),
            n[s]
    }
    function ajaxConvert(e, t, n, r) {
        var i, s, o, u, a, f = {}, l = e.dataTypes.slice();
        if (l[1])
            for (o in e.converters)
                f[o.toLowerCase()] = e.converters[o];
        s = l.shift();
        while (s) {
            e.responseFields[s] && (n[e.responseFields[s]] = t),
            !a && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            a = s,
            s = l.shift();
            if (s)
                if (s === "*")
                    s = a;
                else if (a !== "*" && a !== s) {
                    o = f[a + " " + s] || f["* " + s];
                    if (!o)
                        for (i in f) {
                            u = i.split(" ");
                            if (u[1] === s) {
                                o = f[a + " " + u[0]] || f["* " + u[0]];
                                if (o) {
                                    o === !0 ? o = f[i] : f[i] !== !0 && (s = u[0],
                                    l.unshift(u[1]));
                                    break
                                }
                            }
                        }
                    if (o !== !0)
                        if (o && e["throws"])
                            t = o(t);
                        else
                            try {
                                t = o(t)
                            } catch (c) {
                                return {
                                    state: "parsererror",
                                    error: o ? c : "No conversion from " + a + " to " + s
                                }
                            }
                }
        }
        return {
            state: "success",
            data: t
        }
    }
    function buildParams(e, t, n, r) {
        var i;
        if (jQuery.isArray(t))
            jQuery.each(t, function(t, i) {
                n || rbracket.test(e) ? r(e, i) : buildParams(e + "[" + (typeof i == "object" ? t : "") + "]", i, n, r)
            });
        else if (!n && jQuery.type(t) === "object")
            for (i in t)
                buildParams(e + "[" + i + "]", t[i], n, r);
        else
            r(e, t)
    }
    function getWindow(e) {
        return jQuery.isWindow(e) ? e : e.nodeType === 9 && e.defaultView
    }
    var arr = []
      , slice = arr.slice
      , concat = arr.concat
      , push = arr.push
      , indexOf = arr.indexOf
      , class2type = {}
      , toString = class2type.toString
      , hasOwn = class2type.hasOwnProperty
      , trim = "".trim
      , support = {}
      , document = window.document
      , version = "2.1.0"
      , jQuery = function(e, t) {
        return new jQuery.fn.init(e,t)
    }
      , rmsPrefix = /^-ms-/
      , rdashAlpha = /-([\da-z])/gi
      , fcamelCase = function(e, t) {
        return t.toUpperCase()
    };
    jQuery.fn = jQuery.prototype = {
        jquery: version,
        constructor: jQuery,
        selector: "",
        length: 0,
        toArray: function() {
            return slice.call(this)
        },
        get: function(e) {
            return e != null ? e < 0 ? this[e + this.length] : this[e] : slice.call(this)
        },
        pushStack: function(e) {
            var t = jQuery.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e, t) {
            return jQuery.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(jQuery.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(slice.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: push,
        sort: arr.sort,
        splice: arr.splice
    },
    jQuery.extend = jQuery.fn.extend = function() {
        var e, t, n, r, i, s, o = arguments[0] || {}, u = 1, a = arguments.length, f = !1;
        typeof o == "boolean" && (f = o,
        o = arguments[u] || {},
        u++),
        typeof o != "object" && !jQuery.isFunction(o) && (o = {}),
        u === a && (o = this,
        u--);
        for (; u < a; u++)
            if ((e = arguments[u]) != null)
                for (t in e) {
                    n = o[t],
                    r = e[t];
                    if (o === r)
                        continue;
                    f && r && (jQuery.isPlainObject(r) || (i = jQuery.isArray(r))) ? (i ? (i = !1,
                    s = n && jQuery.isArray(n) ? n : []) : s = n && jQuery.isPlainObject(n) ? n : {},
                    o[t] = jQuery.extend(f, s, r)) : r !== undefined && (o[t] = r)
                }
        return o
    }
    ,
    jQuery.extend({
        expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return jQuery.type(e) === "function"
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return e != null && e === e.window
        },
        isNumeric: function(e) {
            return e - parseFloat(e) >= 0
        },
        isPlainObject: function(e) {
            if (jQuery.type(e) !== "object" || e.nodeType || jQuery.isWindow(e))
                return !1;
            try {
                if (e.constructor && !hasOwn.call(e.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (t) {
                return !1
            }
            return !0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        type: function(e) {
            return e == null ? e + "" : typeof e == "object" || typeof e == "function" ? class2type[toString.call(e)] || "object" : typeof e
        },
        globalEval: function(code) {
            var script, indirect = eval;
            code = jQuery.trim(code),
            code && (code.indexOf("use strict") === 1 ? (script = document.createElement("script"),
            script.text = code,
            document.head.appendChild(script).parentNode.removeChild(script)) : indirect(code))
        },
        camelCase: function(e) {
            return e.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var r, i = 0, s = e.length, o = isArraylike(e);
            if (n)
                if (o)
                    for (; i < s; i++) {
                        r = t.apply(e[i], n);
                        if (r === !1)
                            break
                    }
                else
                    for (i in e) {
                        r = t.apply(e[i], n);
                        if (r === !1)
                            break
                    }
            else if (o)
                for (; i < s; i++) {
                    r = t.call(e[i], i, e[i]);
                    if (r === !1)
                        break
                }
            else
                for (i in e) {
                    r = t.call(e[i], i, e[i]);
                    if (r === !1)
                        break
                }
            return e
        },
        trim: function(e) {
            return e == null ? "" : trim.call(e)
        },
        makeArray: function(e, t) {
            var n = t || [];
            return e != null && (isArraylike(Object(e)) ? jQuery.merge(n, typeof e == "string" ? [e] : e) : push.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return t == null ? -1 : indexOf.call(t, e, n)
        },
        merge: function(e, t) {
            var n = +t.length
              , r = 0
              , i = e.length;
            for (; r < n; r++)
                e[i++] = t[r];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            var r, i = [], s = 0, o = e.length, u = !n;
            for (; s < o; s++)
                r = !t(e[s], s),
                r !== u && i.push(e[s]);
            return i
        },
        map: function(e, t, n) {
            var r, i = 0, s = e.length, o = isArraylike(e), u = [];
            if (o)
                for (; i < s; i++)
                    r = t(e[i], i, n),
                    r != null && u.push(r);
            else
                for (i in e)
                    r = t(e[i], i, n),
                    r != null && u.push(r);
            return concat.apply([], u)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            return typeof t == "string" && (n = e[t],
            t = e,
            e = n),
            jQuery.isFunction(e) ? (r = slice.call(arguments, 2),
            i = function() {
                return e.apply(t || this, r.concat(slice.call(arguments)))
            }
            ,
            i.guid = e.guid = e.guid || jQuery.guid++,
            i) : undefined
        },
        now: Date.now,
        support: support
    }),
    jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        class2type["[object " + t + "]"] = t.toLowerCase()
    });
    var Sizzle = function(e) {
        function rt(e, t, r, i) {
            var s, o, u, a, f, h, v, m, w, E;
            (t ? t.ownerDocument || t : b) !== c && l(t),
            t = t || c,
            r = r || [];
            if (!e || typeof e != "string")
                return r;
            if ((a = t.nodeType) !== 1 && a !== 9)
                return [];
            if (p && !i) {
                if (s = G.exec(e))
                    if (u = s[1]) {
                        if (a === 9) {
                            o = t.getElementById(u);
                            if (!o || !o.parentNode)
                                return r;
                            if (o.id === u)
                                return r.push(o),
                                r
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(u)) && g(t, o) && o.id === u)
                            return r.push(o),
                            r
                    } else {
                        if (s[2])
                            return _.apply(r, t.getElementsByTagName(e)),
                            r;
                        if ((u = s[3]) && n.getElementsByClassName && t.getElementsByClassName)
                            return _.apply(r, t.getElementsByClassName(u)),
                            r
                    }
                if (n.qsa && (!d || !d.test(e))) {
                    m = v = y,
                    w = t,
                    E = a === 9 && e;
                    if (a === 1 && t.nodeName.toLowerCase() !== "object") {
                        h = dt(e),
                        (v = t.getAttribute("id")) ? m = v.replace(Z, "\\$&") : t.setAttribute("id", m),
                        m = "[id='" + m + "'] ",
                        f = h.length;
                        while (f--)
                            h[f] = m + vt(h[f]);
                        w = Y.test(e) && ht(t.parentNode) || t,
                        E = h.join(",")
                    }
                    if (E)
                        try {
                            return _.apply(r, w.querySelectorAll(E)),
                            r
                        } catch (S) {} finally {
                            v || t.removeAttribute("id")
                        }
                }
            }
            return xt(e.replace(R, "$1"), t, r, i)
        }
        function it() {
            function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                t[n + " "] = i
            }
            var e = [];
            return t
        }
        function st(e) {
            return e[y] = !0,
            e
        }
        function ot(e) {
            var t = c.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function ut(e, t) {
            var n = e.split("|")
              , i = e.length;
            while (i--)
                r.attrHandle[n[i]] = t
        }
        function at(e, t) {
            var n = t && e
              , r = n && e.nodeType === 1 && t.nodeType === 1 && (~t.sourceIndex || k) - (~e.sourceIndex || k);
            if (r)
                return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function ft(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return n === "input" && t.type === e
            }
        }
        function lt(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return (n === "input" || n === "button") && t.type === e
            }
        }
        function ct(e) {
            return st(function(t) {
                return t = +t,
                st(function(n, r) {
                    var i, s = e([], n.length, t), o = s.length;
                    while (o--)
                        n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function ht(e) {
            return e && typeof e.getElementsByTagName !== C && e
        }
        function pt() {}
        function dt(e, t) {
            var n, i, s, o, u, a, f, l = x[e + " "];
            if (l)
                return t ? 0 : l.slice(0);
            u = e,
            a = [],
            f = r.preFilter;
            while (u) {
                if (!n || (i = U.exec(u)))
                    i && (u = u.slice(i[0].length) || u),
                    a.push(s = []);
                n = !1;
                if (i = z.exec(u))
                    n = i.shift(),
                    s.push({
                        value: n,
                        type: i[0].replace(R, " ")
                    }),
                    u = u.slice(n.length);
                for (o in r.filter)
                    (i = $[o].exec(u)) && (!f[o] || (i = f[o](i))) && (n = i.shift(),
                    s.push({
                        value: n,
                        type: o,
                        matches: i
                    }),
                    u = u.slice(n.length));
                if (!n)
                    break
            }
            return t ? u.length : u ? rt.error(e) : x(e, a).slice(0)
        }
        function vt(e) {
            var t = 0
              , n = e.length
              , r = "";
            for (; t < n; t++)
                r += e[t].value;
            return r
        }
        function mt(e, t, n) {
            var r = t.dir
              , i = n && r === "parentNode"
              , s = E++;
            return t.first ? function(t, n, s) {
                while (t = t[r])
                    if (t.nodeType === 1 || i)
                        return e(t, n, s)
            }
            : function(t, n, o) {
                var u, a, f = [w, s];
                if (o) {
                    while (t = t[r])
                        if (t.nodeType === 1 || i)
                            if (e(t, n, o))
                                return !0
                } else
                    while (t = t[r])
                        if (t.nodeType === 1 || i) {
                            a = t[y] || (t[y] = {});
                            if ((u = a[r]) && u[0] === w && u[1] === s)
                                return f[2] = u[2];
                            a[r] = f;
                            if (f[2] = e(t, n, o))
                                return !0
                        }
            }
        }
        function gt(e) {
            return e.length > 1 ? function(t, n, r) {
                var i = e.length;
                while (i--)
                    if (!e[i](t, n, r))
                        return !1;
                return !0
            }
            : e[0]
        }
        function yt(e, t, n, r, i) {
            var s, o = [], u = 0, a = e.length, f = t != null;
            for (; u < a; u++)
                if (s = e[u])
                    if (!n || n(s, r, i))
                        o.push(s),
                        f && t.push(u);
            return o
        }
        function bt(e, t, n, r, i, s) {
            return r && !r[y] && (r = bt(r)),
            i && !i[y] && (i = bt(i, s)),
            st(function(s, o, u, a) {
                var f, l, c, h = [], p = [], d = o.length, v = s || St(t || "*", u.nodeType ? [u] : u, []), m = e && (s || !t) ? yt(v, h, e, u, a) : v, g = n ? i || (s ? e : d || r) ? [] : o : m;
                n && n(m, g, u, a);
                if (r) {
                    f = yt(g, p),
                    r(f, [], u, a),
                    l = f.length;
                    while (l--)
                        if (c = f[l])
                            g[p[l]] = !(m[p[l]] = c)
                }
                if (s) {
                    if (i || e) {
                        if (i) {
                            f = [],
                            l = g.length;
                            while (l--)
                                (c = g[l]) && f.push(m[l] = c);
                            i(null, g = [], f, a)
                        }
                        l = g.length;
                        while (l--)
                            (c = g[l]) && (f = i ? P.call(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c))
                    }
                } else
                    g = yt(g === o ? g.splice(d, g.length) : g),
                    i ? i(null, o, g, a) : _.apply(o, g)
            })
        }
        function wt(e) {
            var t, n, i, s = e.length, o = r.relative[e[0].type], a = o || r.relative[" "], f = o ? 1 : 0, l = mt(function(e) {
                return e === t
            }, a, !0), c = mt(function(e) {
                return P.call(t, e) > -1
            }, a, !0), h = [function(e, n, r) {
                return !o && (r || n !== u) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r))
            }
            ];
            for (; f < s; f++)
                if (n = r.relative[e[f].type])
                    h = [mt(gt(h), n)];
                else {
                    n = r.filter[e[f].type].apply(null, e[f].matches);
                    if (n[y]) {
                        i = ++f;
                        for (; i < s; i++)
                            if (r.relative[e[i].type])
                                break;
                        return bt(f > 1 && gt(h), f > 1 && vt(e.slice(0, f - 1).concat({
                            value: e[f - 2].type === " " ? "*" : ""
                        })).replace(R, "$1"), n, f < i && wt(e.slice(f, i)), i < s && wt(e = e.slice(i)), i < s && vt(e))
                    }
                    h.push(n)
                }
            return gt(h)
        }
        function Et(e, t) {
            var n = t.length > 0
              , i = e.length > 0
              , s = function(s, o, a, f, l) {
                var h, p, d, v = 0, m = "0", g = s && [], y = [], b = u, E = s || i && r.find.TAG("*", l), S = w += b == null ? 1 : Math.random() || .1, x = E.length;
                l && (u = o !== c && o);
                for (; m !== x && (h = E[m]) != null; m++) {
                    if (i && h) {
                        p = 0;
                        while (d = e[p++])
                            if (d(h, o, a)) {
                                f.push(h);
                                break
                            }
                        l && (w = S)
                    }
                    n && ((h = !d && h) && v--,
                    s && g.push(h))
                }
                v += m;
                if (n && m !== v) {
                    p = 0;
                    while (d = t[p++])
                        d(g, y, o, a);
                    if (s) {
                        if (v > 0)
                            while (m--)
                                !g[m] && !y[m] && (y[m] = O.call(f));
                        y = yt(y)
                    }
                    _.apply(f, y),
                    l && !s && y.length > 0 && v + t.length > 1 && rt.uniqueSort(f)
                }
                return l && (w = S,
                u = b),
                g
            };
            return n ? st(s) : s
        }
        function St(e, t, n) {
            var r = 0
              , i = t.length;
            for (; r < i; r++)
                rt(e, t[r], n);
            return n
        }
        function xt(e, t, i, s) {
            var u, a, f, l, c, h = dt(e);
            if (!s && h.length === 1) {
                a = h[0] = h[0].slice(0);
                if (a.length > 2 && (f = a[0]).type === "ID" && n.getById && t.nodeType === 9 && p && r.relative[a[1].type]) {
                    t = (r.find.ID(f.matches[0].replace(et, tt), t) || [])[0];
                    if (!t)
                        return i;
                    e = e.slice(a.shift().value.length)
                }
                u = $.needsContext.test(e) ? 0 : a.length;
                while (u--) {
                    f = a[u];
                    if (r.relative[l = f.type])
                        break;
                    if (c = r.find[l])
                        if (s = c(f.matches[0].replace(et, tt), Y.test(a[0].type) && ht(t.parentNode) || t)) {
                            a.splice(u, 1),
                            e = s.length && vt(a);
                            if (!e)
                                return _.apply(i, s),
                                i;
                            break
                        }
                }
            }
            return o(e, h)(s, t, !p, i, Y.test(e) && ht(t.parentNode) || t),
            i
        }
        var t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y = "sizzle" + -(new Date), b = e.document, w = 0, E = 0, S = it(), x = it(), T = it(), N = function(e, t) {
            return e === t && (f = !0),
            0
        }, C = typeof undefined, k = 1 << 31, L = {}.hasOwnProperty, A = [], O = A.pop, M = A.push, _ = A.push, D = A.slice, P = A.indexOf || function(e) {
            var t = 0
              , n = this.length;
            for (; t < n; t++)
                if (this[t] === e)
                    return t;
            return -1
        }
        , H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", B = "[\\x20\\t\\r\\n\\f]", j = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", F = j.replace("w", "w#"), I = "\\[" + B + "*(" + j + ")" + B + "*(?:([*^$|!~]?=)" + B + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + F + ")|)|)" + B + "*\\]", q = ":(" + j + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + I.replace(3, 8) + ")*)|.*)\\)|)", R = new RegExp("^" + B + "+|((?:^|[^\\\\])(?:\\\\.)*)" + B + "+$","g"), U = new RegExp("^" + B + "*," + B + "*"), z = new RegExp("^" + B + "*([>+~]|" + B + ")" + B + "*"), W = new RegExp("=" + B + "*([^\\]'\"]*?)" + B + "*\\]","g"), X = new RegExp(q), V = new RegExp("^" + F + "$"), $ = {
            ID: new RegExp("^#(" + j + ")"),
            CLASS: new RegExp("^\\.(" + j + ")"),
            TAG: new RegExp("^(" + j.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + I),
            PSEUDO: new RegExp("^" + q),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + B + "*(even|odd|(([+-]|)(\\d*)n|)" + B + "*(?:([+-]|)" + B + "*(\\d+)|))" + B + "*\\)|)","i"),
            bool: new RegExp("^(?:" + H + ")$","i"),
            needsContext: new RegExp("^" + B + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + B + "*((?:-\\d)?\\d*)" + B + "*\\)|)(?=[^-]|$)","i")
        }, J = /^(?:input|select|textarea|button)$/i, K = /^h\d$/i, Q = /^[^{]+\{\s*\[native \w/, G = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Y = /[+~]/, Z = /'|\\/g, et = new RegExp("\\\\([\\da-f]{1,6}" + B + "?|(" + B + ")|.)","ig"), tt = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320)
        };
        try {
            _.apply(A = D.call(b.childNodes), b.childNodes),
            A[b.childNodes.length].nodeType
        } catch (nt) {
            _ = {
                apply: A.length ? function(e, t) {
                    M.apply(e, D.call(t))
                }
                : function(e, t) {
                    var n = e.length
                      , r = 0;
                    while (e[n++] = t[r++])
                        ;
                    e.length = n - 1
                }
            }
        }
        n = rt.support = {},
        s = rt.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? t.nodeName !== "HTML" : !1
        }
        ,
        l = rt.setDocument = function(e) {
            var t, i = e ? e.ownerDocument || e : b, o = i.defaultView;
            if (i === c || i.nodeType !== 9 || !i.documentElement)
                return c;
            c = i,
            h = i.documentElement,
            p = !s(i),
            o && o !== o.top && (o.addEventListener ? o.addEventListener("unload", function() {
                l()
            }, !1) : o.attachEvent && o.attachEvent("onunload", function() {
                l()
            })),
            n.attributes = ot(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            n.getElementsByTagName = ot(function(e) {
                return e.appendChild(i.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            n.getElementsByClassName = Q.test(i.getElementsByClassName) && ot(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>",
                e.firstChild.className = "i",
                e.getElementsByClassName("i").length === 2
            }),
            n.getById = ot(function(e) {
                return h.appendChild(e).id = y,
                !i.getElementsByName || !i.getElementsByName(y).length
            }),
            n.getById ? (r.find.ID = function(e, t) {
                if (typeof t.getElementById !== C && p) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }
            ,
            r.filter.ID = function(e) {
                var t = e.replace(et, tt);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ) : (delete r.find.ID,
            r.filter.ID = function(e) {
                var t = e.replace(et, tt);
                return function(e) {
                    var n = typeof e.getAttributeNode !== C && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ),
            r.find.TAG = n.getElementsByTagName ? function(e, t) {
                if (typeof t.getElementsByTagName !== C)
                    return t.getElementsByTagName(e)
            }
            : function(e, t) {
                var n, r = [], i = 0, s = t.getElementsByTagName(e);
                if (e === "*") {
                    while (n = s[i++])
                        n.nodeType === 1 && r.push(n);
                    return r
                }
                return s
            }
            ,
            r.find.CLASS = n.getElementsByClassName && function(e, t) {
                if (typeof t.getElementsByClassName !== C && p)
                    return t.getElementsByClassName(e)
            }
            ,
            v = [],
            d = [];
            if (n.qsa = Q.test(i.querySelectorAll))
                ot(function(e) {
                    e.innerHTML = "<select t=''><option selected=''></option></select>",
                    e.querySelectorAll("[t^='']").length && d.push("[*^$]=" + B + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length || d.push("\\[" + B + "*(?:value|" + H + ")"),
                    e.querySelectorAll(":checked").length || d.push(":checked")
                }),
                ot(function(e) {
                    var t = i.createElement("input");
                    t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length && d.push("name" + B + "*[*^$|!~]?="),
                    e.querySelectorAll(":enabled").length || d.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    d.push(",.*:")
                });
            return (n.matchesSelector = Q.test(m = h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ot(function(e) {
                n.disconnectedMatch = m.call(e, "div"),
                m.call(e, "[s!='']:x"),
                v.push("!=", q)
            }),
            d = d.length && new RegExp(d.join("|")),
            v = v.length && new RegExp(v.join("|")),
            t = Q.test(h.compareDocumentPosition),
            g = t || Q.test(h.contains) ? function(e, t) {
                var n = e.nodeType === 9 ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !!r && r.nodeType === 1 && !!(n.contains ? n.contains(r) : e.compareDocumentPosition && e.compareDocumentPosition(r) & 16)
            }
            : function(e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            N = t ? function(e, t) {
                if (e === t)
                    return f = !0,
                    0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r ? r : (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
                r & 1 || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === i || e.ownerDocument === b && g(b, e) ? -1 : t === i || t.ownerDocument === b && g(b, t) ? 1 : a ? P.call(a, e) - P.call(a, t) : 0 : r & 4 ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return f = !0,
                    0;
                var n, r = 0, s = e.parentNode, o = t.parentNode, u = [e], l = [t];
                if (!s || !o)
                    return e === i ? -1 : t === i ? 1 : s ? -1 : o ? 1 : a ? P.call(a, e) - P.call(a, t) : 0;
                if (s === o)
                    return at(e, t);
                n = e;
                while (n = n.parentNode)
                    u.unshift(n);
                n = t;
                while (n = n.parentNode)
                    l.unshift(n);
                while (u[r] === l[r])
                    r++;
                return r ? at(u[r], l[r]) : u[r] === b ? -1 : l[r] === b ? 1 : 0
            }
            ,
            i
        }
        ,
        rt.matches = function(e, t) {
            return rt(e, null, null, t)
        }
        ,
        rt.matchesSelector = function(e, t) {
            (e.ownerDocument || e) !== c && l(e),
            t = t.replace(W, "='$1']");
            if (n.matchesSelector && p && (!v || !v.test(t)) && (!d || !d.test(t)))
                try {
                    var r = m.call(e, t);
                    if (r || n.disconnectedMatch || e.document && e.document.nodeType !== 11)
                        return r
                } catch (i) {}
            return rt(t, c, null, [e]).length > 0
        }
        ,
        rt.contains = function(e, t) {
            return (e.ownerDocument || e) !== c && l(e),
            g(e, t)
        }
        ,
        rt.attr = function(e, t) {
            (e.ownerDocument || e) !== c && l(e);
            var i = r.attrHandle[t.toLowerCase()]
              , s = i && L.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !p) : undefined;
            return s !== undefined ? s : n.attributes || !p ? e.getAttribute(t) : (s = e.getAttributeNode(t)) && s.specified ? s.value : null
        }
        ,
        rt.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        rt.uniqueSort = function(e) {
            var t, r = [], i = 0, s = 0;
            f = !n.detectDuplicates,
            a = !n.sortStable && e.slice(0),
            e.sort(N);
            if (f) {
                while (t = e[s++])
                    t === e[s] && (i = r.push(s));
                while (i--)
                    e.splice(r[i], 1)
            }
            return a = null,
            e
        }
        ,
        i = rt.getText = function(e) {
            var t, n = "", r = 0, s = e.nodeType;
            if (!s)
                while (t = e[r++])
                    n += i(t);
            else if (s === 1 || s === 9 || s === 11) {
                if (typeof e.textContent == "string")
                    return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling)
                    n += i(e)
            } else if (s === 3 || s === 4)
                return e.nodeValue;
            return n
        }
        ,
        r = rt.selectors = {
            cacheLength: 50,
            createPseudo: st,
            match: $,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(et, tt),
                    e[3] = (e[4] || e[5] || "").replace(et, tt),
                    e[2] === "~=" && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    e[1].slice(0, 3) === "nth" ? (e[3] || rt.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd")),
                    e[5] = +(e[7] + e[8] || e[3] === "odd")) : e[3] && rt.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[5] && e[2];
                    return $.CHILD.test(e[0]) ? null : (e[3] && e[4] !== undefined ? e[2] = e[4] : n && X.test(n) && (t = dt(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(et, tt).toLowerCase();
                    return e === "*" ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = S[e + " "];
                    return t || (t = new RegExp("(^|" + B + ")" + e + "(" + B + "|$)")) && S(e, function(e) {
                        return t.test(typeof e.className == "string" && e.className || typeof e.getAttribute !== C && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var i = rt.attr(r, e);
                        return i == null ? t === "!=" : t ? (i += "",
                        t === "=" ? i === n : t === "!=" ? i !== n : t === "^=" ? n && i.indexOf(n) === 0 : t === "*=" ? n && i.indexOf(n) > -1 : t === "$=" ? n && i.slice(-n.length) === n : t === "~=" ? (" " + i + " ").indexOf(n) > -1 : t === "|=" ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var s = e.slice(0, 3) !== "nth"
                      , o = e.slice(-4) !== "last"
                      , u = t === "of-type";
                    return r === 1 && i === 0 ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, a) {
                        var f, l, c, h, p, d, v = s !== o ? "nextSibling" : "previousSibling", m = t.parentNode, g = u && t.nodeName.toLowerCase(), b = !a && !u;
                        if (m) {
                            if (s) {
                                while (v) {
                                    c = t;
                                    while (c = c[v])
                                        if (u ? c.nodeName.toLowerCase() === g : c.nodeType === 1)
                                            return !1;
                                    d = v = e === "only" && !d && "nextSibling"
                                }
                                return !0
                            }
                            d = [o ? m.firstChild : m.lastChild];
                            if (o && b) {
                                l = m[y] || (m[y] = {}),
                                f = l[e] || [],
                                p = f[0] === w && f[1],
                                h = f[0] === w && f[2],
                                c = p && m.childNodes[p];
                                while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                    if (c.nodeType === 1 && ++h && c === t) {
                                        l[e] = [w, p, h];
                                        break
                                    }
                            } else if (b && (f = (t[y] || (t[y] = {}))[e]) && f[0] === w)
                                h = f[1];
                            else
                                while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                    if ((u ? c.nodeName.toLowerCase() === g : c.nodeType === 1) && ++h) {
                                        b && ((c[y] || (c[y] = {}))[e] = [w, h]);
                                        if (c === t)
                                            break
                                    }
                            return h -= i,
                            h === r || h % r === 0 && h / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || rt.error("unsupported pseudo: " + e);
                    return i[y] ? i(t) : i.length > 1 ? (n = [e, e, "", t],
                    r.setFilters.hasOwnProperty(e.toLowerCase()) ? st(function(e, n) {
                        var r, s = i(e, t), o = s.length;
                        while (o--)
                            r = P.call(e, s[o]),
                            e[r] = !(n[r] = s[o])
                    }) : function(e) {
                        return i(e, 0, n)
                    }
                    ) : i
                }
            },
            pseudos: {
                not: st(function(e) {
                    var t = []
                      , n = []
                      , r = o(e.replace(R, "$1"));
                    return r[y] ? st(function(e, t, n, i) {
                        var s, o = r(e, null, i, []), u = e.length;
                        while (u--)
                            if (s = o[u])
                                e[u] = !(t[u] = s)
                    }) : function(e, i, s) {
                        return t[0] = e,
                        r(t, null, s, n),
                        !n.pop()
                    }
                }),
                has: st(function(e) {
                    return function(t) {
                        return rt(e, t).length > 0
                    }
                }),
                contains: st(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                    }
                }),
                lang: st(function(e) {
                    return V.test(e || "") || rt.error("unsupported lang: " + e),
                    e = e.replace(et, tt).toLowerCase(),
                    function(t) {
                        var n;
                        do
                            if (n = p ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return n = n.toLowerCase(),
                                n === e || n.indexOf(e + "-") === 0;
                        while ((t = t.parentNode) && t.nodeType === 1);return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === h
                },
                focus: function(e) {
                    return e === c.activeElement && (!c.hasFocus || c.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && !!e.checked || t === "option" && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !r.pseudos.empty(e)
                },
                header: function(e) {
                    return K.test(e.nodeName)
                },
                input: function(e) {
                    return J.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && e.type === "button" || t === "button"
                },
                text: function(e) {
                    var t;
                    return e.nodeName.toLowerCase() === "input" && e.type === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === "text")
                },
                first: ct(function() {
                    return [0]
                }),
                last: ct(function(e, t) {
                    return [t - 1]
                }),
                eq: ct(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: ct(function(e, t) {
                    var n = 0;
                    for (; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: ct(function(e, t) {
                    var n = 1;
                    for (; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: ct(function(e, t, n) {
                    var r = n < 0 ? n + t : n;
                    for (; --r >= 0; )
                        e.push(r);
                    return e
                }),
                gt: ct(function(e, t, n) {
                    var r = n < 0 ? n + t : n;
                    for (; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        },
        r.pseudos.nth = r.pseudos.eq;
        for (t in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            r.pseudos[t] = ft(t);
        for (t in {
            submit: !0,
            reset: !0
        })
            r.pseudos[t] = lt(t);
        return pt.prototype = r.filters = r.pseudos,
        r.setFilters = new pt,
        o = rt.compile = function(e, t) {
            var n, r = [], i = [], s = T[e + " "];
            if (!s) {
                t || (t = dt(e)),
                n = t.length;
                while (n--)
                    s = wt(t[n]),
                    s[y] ? r.push(s) : i.push(s);
                s = T(e, Et(i, r))
            }
            return s
        }
        ,
        n.sortStable = y.split("").sort(N).join("") === y,
        n.detectDuplicates = !!f,
        l(),
        n.sortDetached = ot(function(e) {
            return e.compareDocumentPosition(c.createElement("div")) & 1
        }),
        ot(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            e.firstChild.getAttribute("href") === "#"
        }) || ut("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2)
        }),
        (!n.attributes || !ot(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            e.firstChild.getAttribute("value") === ""
        })) && ut("value", function(e, t, n) {
            if (!n && e.nodeName.toLowerCase() === "input")
                return e.defaultValue
        }),
        ot(function(e) {
            return e.getAttribute("disabled") == null
        }) || ut(H, function(e, t, n) {
            var r;
            if (!n)
                return e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        rt
    }(window);
    jQuery.find = Sizzle,
    jQuery.expr = Sizzle.selectors,
    jQuery.expr[":"] = jQuery.expr.pseudos,
    jQuery.unique = Sizzle.uniqueSort,
    jQuery.text = Sizzle.getText,
    jQuery.isXMLDoc = Sizzle.isXML,
    jQuery.contains = Sizzle.contains;
    var rneedsContext = jQuery.expr.match.needsContext
      , rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
      , risSimple = /^.[^:#\[\.,]*$/;
    jQuery.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        t.length === 1 && r.nodeType === 1 ? jQuery.find.matchesSelector(r, e) ? [r] : [] : jQuery.find.matches(e, jQuery.grep(t, function(e) {
            return e.nodeType === 1
        }))
    }
    ,
    jQuery.fn.extend({
        find: function(e) {
            var t, n = this.length, r = [], i = this;
            if (typeof e != "string")
                return this.pushStack(jQuery(e).filter(function() {
                    for (t = 0; t < n; t++)
                        if (jQuery.contains(i[t], this))
                            return !0
                }));
            for (t = 0; t < n; t++)
                jQuery.find(e, i[t], r);
            return r = this.pushStack(n > 1 ? jQuery.unique(r) : r),
            r.selector = this.selector ? this.selector + " " + e : e,
            r
        },
        filter: function(e) {
            return this.pushStack(winnow(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(winnow(this, e || [], !0))
        },
        is: function(e) {
            return !!winnow(this, typeof e == "string" && rneedsContext.test(e) ? jQuery(e) : e || [], !1).length
        }
    });
    var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, init = jQuery.fn.init = function(e, t) {
        var n, r;
        if (!e)
            return this;
        if (typeof e == "string") {
            e[0] === "<" && e[e.length - 1] === ">" && e.length >= 3 ? n = [null, e, null] : n = rquickExpr.exec(e);
            if (n && (n[1] || !t)) {
                if (n[1]) {
                    t = t instanceof jQuery ? t[0] : t,
                    jQuery.merge(this, jQuery.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : document, !0));
                    if (rsingleTag.test(n[1]) && jQuery.isPlainObject(t))
                        for (n in t)
                            jQuery.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                return r = document.getElementById(n[2]),
                r && r.parentNode && (this.length = 1,
                this[0] = r),
                this.context = document,
                this.selector = e,
                this
            }
            return !t || t.jquery ? (t || rootjQuery).find(e) : this.constructor(t).find(e)
        }
        return e.nodeType ? (this.context = this[0] = e,
        this.length = 1,
        this) : jQuery.isFunction(e) ? typeof rootjQuery.ready != "undefined" ? rootjQuery.ready(e) : e(jQuery) : (e.selector !== undefined && (this.selector = e.selector,
        this.context = e.context),
        jQuery.makeArray(e, this))
    }
    ;
    init.prototype = jQuery.fn,
    rootjQuery = jQuery(document);
    var rparentsprev = /^(?:parents|prev(?:Until|All))/
      , guaranteedUnique = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    jQuery.extend({
        dir: function(e, t, n) {
            var r = []
              , i = n !== undefined;
            while ((e = e[t]) && e.nodeType !== 9)
                if (e.nodeType === 1) {
                    if (i && jQuery(e).is(n))
                        break;
                    r.push(e)
                }
            return r
        },
        sibling: function(e, t) {
            var n = [];
            for (; e; e = e.nextSibling)
                e.nodeType === 1 && e !== t && n.push(e);
            return n
        }
    }),
    jQuery.fn.extend({
        has: function(e) {
            var t = jQuery(e, this)
              , n = t.length;
            return this.filter(function() {
                var e = 0;
                for (; e < n; e++)
                    if (jQuery.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, s = [], o = rneedsContext.test(e) || typeof e != "string" ? jQuery(e, t || this.context) : 0;
            for (; r < i; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (o ? o.index(n) > -1 : n.nodeType === 1 && jQuery.find.matchesSelector(n, e))) {
                        s.push(n);
                        break
                    }
            return this.pushStack(s.length > 1 ? jQuery.unique(s) : s)
        },
        index: function(e) {
            return e ? typeof e == "string" ? indexOf.call(jQuery(e), this[0]) : indexOf.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(jQuery.unique(jQuery.merge(this.get(), jQuery(e, t))))
        },
        addBack: function(e) {
            return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    jQuery.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function(e) {
            return jQuery.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return jQuery.dir(e, "parentNode", n)
        },
        next: function(e) {
            return sibling(e, "nextSibling")
        },
        prev: function(e) {
            return sibling(e, "previousSibling")
        },
        nextAll: function(e) {
            return jQuery.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return jQuery.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return jQuery.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return jQuery.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return jQuery.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return jQuery.sibling(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || jQuery.merge([], e.childNodes)
        }
    }, function(e, t) {
        jQuery.fn[e] = function(n, r) {
            var i = jQuery.map(this, t, n);
            return e.slice(-5) !== "Until" && (r = n),
            r && typeof r == "string" && (i = jQuery.filter(r, i)),
            this.length > 1 && (guaranteedUnique[e] || jQuery.unique(i),
            rparentsprev.test(e) && i.reverse()),
            this.pushStack(i)
        }
    });
    var rnotwhite = /\S+/g
      , optionsCache = {};
    jQuery.Callbacks = function(e) {
        e = typeof e == "string" ? optionsCache[e] || createOptions(e) : jQuery.extend({}, e);
        var t, n, r, i, s, o, u = [], a = !e.once && [], f = function(c) {
            t = e.memory && c,
            n = !0,
            o = i || 0,
            i = 0,
            s = u.length,
            r = !0;
            for (; u && o < s; o++)
                if (u[o].apply(c[0], c[1]) === !1 && e.stopOnFalse) {
                    t = !1;
                    break
                }
            r = !1,
            u && (a ? a.length && f(a.shift()) : t ? u = [] : l.disable())
        }, l = {
            add: function() {
                if (u) {
                    var n = u.length;
                    (function o(t) {
                        jQuery.each(t, function(t, n) {
                            var r = jQuery.type(n);
                            r === "function" ? (!e.unique || !l.has(n)) && u.push(n) : n && n.length && r !== "string" && o(n)
                        })
                    })(arguments),
                    r ? s = u.length : t && (i = n,
                    f(t))
                }
                return this
            },
            remove: function() {
                return u && jQuery.each(arguments, function(e, t) {
                    var n;
                    while ((n = jQuery.inArray(t, u, n)) > -1)
                        u.splice(n, 1),
                        r && (n <= s && s--,
                        n <= o && o--)
                }),
                this
            },
            has: function(e) {
                return e ? jQuery.inArray(e, u) > -1 : !!u && !!u.length
            },
            empty: function() {
                return u = [],
                s = 0,
                this
            },
            disable: function() {
                return u = a = t = undefined,
                this
            },
            disabled: function() {
                return !u
            },
            lock: function() {
                return a = undefined,
                t || l.disable(),
                this
            },
            locked: function() {
                return !a
            },
            fireWith: function(e, t) {
                return u && (!n || a) && (t = t || [],
                t = [e, t.slice ? t.slice() : t],
                r ? a.push(t) : f(t)),
                this
            },
            fire: function() {
                return l.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!n
            }
        };
        return l
    }
    ,
    jQuery.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", jQuery.Callbacks("once memory"), "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"], ["notify", "progress", jQuery.Callbacks("memory")]]
              , n = "pending"
              , r = {
                state: function() {
                    return n
                },
                always: function() {
                    return i.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return jQuery.Deferred(function(n) {
                        jQuery.each(t, function(t, s) {
                            var o = jQuery.isFunction(e[t]) && e[t];
                            i[s[1]](function() {
                                var e = o && o.apply(this, arguments);
                                e && jQuery.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s[0] + "With"](this === r ? n.promise() : this, o ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                promise: function(e) {
                    return e != null ? jQuery.extend(e, r) : r
                }
            }
              , i = {};
            return r.pipe = r.then,
            jQuery.each(t, function(e, s) {
                var o = s[2]
                  , u = s[3];
                r[s[1]] = o.add,
                u && o.add(function() {
                    n = u
                }, t[e ^ 1][2].disable, t[2][2].lock),
                i[s[0]] = function() {
                    return i[s[0] + "With"](this === i ? r : this, arguments),
                    this
                }
                ,
                i[s[0] + "With"] = o.fireWith
            }),
            r.promise(i),
            e && e.call(i, i),
            i
        },
        when: function(e) {
            var t = 0, n = slice.call(arguments), r = n.length, i = r !== 1 || e && jQuery.isFunction(e.promise) ? r : 0, s = i === 1 ? e : jQuery.Deferred(), o = function(e, t, n) {
                return function(r) {
                    t[e] = this,
                    n[e] = arguments.length > 1 ? slice.call(arguments) : r,
                    n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n)
                }
            }, u, a, f;
            if (r > 1) {
                u = new Array(r),
                a = new Array(r),
                f = new Array(r);
                for (; t < r; t++)
                    n[t] && jQuery.isFunction(n[t].promise) ? n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u)) : --i
            }
            return i || s.resolveWith(f, n),
            s.promise()
        }
    });
    var readyList;
    jQuery.fn.ready = function(e) {
        return jQuery.ready.promise().done(e),
        this
    }
    ,
    jQuery.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? jQuery.readyWait++ : jQuery.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? --jQuery.readyWait : jQuery.isReady)
                return;
            jQuery.isReady = !0;
            if (e !== !0 && --jQuery.readyWait > 0)
                return;
            readyList.resolveWith(document, [jQuery]),
            jQuery.fn.trigger && jQuery(document).trigger("ready").off("ready")
        }
    }),
    jQuery.ready.promise = function(e) {
        return readyList || (readyList = jQuery.Deferred(),
        document.readyState === "complete" ? setTimeout(jQuery.ready) : (document.addEventListener("DOMContentLoaded", completed, !1),
        window.addEventListener("load", completed, !1))),
        readyList.promise(e)
    }
    ,
    jQuery.ready.promise();
    var access = jQuery.access = function(e, t, n, r, i, s, o) {
        var u = 0
          , a = e.length
          , f = n == null;
        if (jQuery.type(n) === "object") {
            i = !0;
            for (u in n)
                jQuery.access(e, t, u, n[u], !0, s, o)
        } else if (r !== undefined) {
            i = !0,
            jQuery.isFunction(r) || (o = !0),
            f && (o ? (t.call(e, r),
            t = null) : (f = t,
            t = function(e, t, n) {
                return f.call(jQuery(e), n)
            }
            ));
            if (t)
                for (; u < a; u++)
                    t(e[u], n, o ? r : r.call(e[u], u, t(e[u], n)))
        }
        return i ? e : f ? t.call(e) : a ? t(e[0], n) : s
    }
    ;
    jQuery.acceptData = function(e) {
        return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType
    }
    ,
    Data.uid = 1,
    Data.accepts = jQuery.acceptData,
    Data.prototype = {
        key: function(e) {
            if (!Data.accepts(e))
                return 0;
            var t = {}
              , n = e[this.expando];
            if (!n) {
                n = Data.uid++;
                try {
                    t[this.expando] = {
                        value: n
                    },
                    Object.defineProperties(e, t)
                } catch (r) {
                    t[this.expando] = n,
                    jQuery.extend(e, t)
                }
            }
            return this.cache[n] || (this.cache[n] = {}),
            n
        },
        set: function(e, t, n) {
            var r, i = this.key(e), s = this.cache[i];
            if (typeof t == "string")
                s[t] = n;
            else if (jQuery.isEmptyObject(s))
                jQuery.extend(this.cache[i], t);
            else
                for (r in t)
                    s[r] = t[r];
            return s
        },
        get: function(e, t) {
            var n = this.cache[this.key(e)];
            return t === undefined ? n : n[t]
        },
        access: function(e, t, n) {
            var r;
            return t === undefined || t && typeof t == "string" && n === undefined ? (r = this.get(e, t),
            r !== undefined ? r : this.get(e, jQuery.camelCase(t))) : (this.set(e, t, n),
            n !== undefined ? n : t)
        },
        remove: function(e, t) {
            var n, r, i, s = this.key(e), o = this.cache[s];
            if (t === undefined)
                this.cache[s] = {};
            else {
                jQuery.isArray(t) ? r = t.concat(t.map(jQuery.camelCase)) : (i = jQuery.camelCase(t),
                t in o ? r = [t, i] : (r = i,
                r = r in o ? [r] : r.match(rnotwhite) || [])),
                n = r.length;
                while (n--)
                    delete o[r[n]]
            }
        },
        hasData: function(e) {
            return !jQuery.isEmptyObject(this.cache[e[this.expando]] || {})
        },
        discard: function(e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var data_priv = new Data
      , data_user = new Data
      , rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , rmultiDash = /([A-Z])/g;
    jQuery.extend({
        hasData: function(e) {
            return data_user.hasData(e) || data_priv.hasData(e)
        },
        data: function(e, t, n) {
            return data_user.access(e, t, n)
        },
        removeData: function(e, t) {
            data_user.remove(e, t)
        },
        _data: function(e, t, n) {
            return data_priv.access(e, t, n)
        },
        _removeData: function(e, t) {
            data_priv.remove(e, t)
        }
    }),
    jQuery.fn.extend({
        data: function(e, t) {
            var n, r, i, s = this[0], o = s && s.attributes;
            if (e === undefined) {
                if (this.length) {
                    i = data_user.get(s);
                    if (s.nodeType === 1 && !data_priv.get(s, "hasDataAttrs")) {
                        n = o.length;
                        while (n--)
                            r = o[n].name,
                            r.indexOf("data-") === 0 && (r = jQuery.camelCase(r.slice(5)),
                            dataAttr(s, r, i[r]));
                        data_priv.set(s, "hasDataAttrs", !0)
                    }
                }
                return i
            }
            return typeof e == "object" ? this.each(function() {
                data_user.set(this, e)
            }) : access(this, function(t) {
                var n, r = jQuery.camelCase(e);
                if (s && t === undefined) {
                    n = data_user.get(s, e);
                    if (n !== undefined)
                        return n;
                    n = data_user.get(s, r);
                    if (n !== undefined)
                        return n;
                    n = dataAttr(s, r, undefined);
                    if (n !== undefined)
                        return n;
                    return
                }
                this.each(function() {
                    var n = data_user.get(this, r);
                    data_user.set(this, r, t),
                    e.indexOf("-") !== -1 && n !== undefined && data_user.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                data_user.remove(this, e)
            })
        }
    }),
    jQuery.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue",
                r = data_priv.get(e, t),
                n && (!r || jQuery.isArray(n) ? r = data_priv.access(e, t, jQuery.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = jQuery.queue(e, t)
              , r = n.length
              , i = n.shift()
              , s = jQuery._queueHooks(e, t)
              , o = function() {
                jQuery.dequeue(e, t)
            };
            i === "inprogress" && (i = n.shift(),
            r--),
            i && (t === "fx" && n.unshift("inprogress"),
            delete s.stop,
            i.call(e, o, s)),
            !r && s && s.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return data_priv.get(e, n) || data_priv.access(e, n, {
                empty: jQuery.Callbacks("once memory").add(function() {
                    data_priv.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    jQuery.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return typeof e != "string" && (t = e,
            e = "fx",
            n--),
            arguments.length < n ? jQuery.queue(this[0], e) : t === undefined ? this : this.each(function() {
                var n = jQuery.queue(this, e, t);
                jQuery._queueHooks(this, e),
                e === "fx" && n[0] !== "inprogress" && jQuery.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                jQuery.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, i = jQuery.Deferred(), s = this, o = this.length, u = function() {
                --r || i.resolveWith(s, [s])
            };
            typeof e != "string" && (t = e,
            e = undefined),
            e = e || "fx";
            while (o--)
                n = data_priv.get(s[o], e + "queueHooks"),
                n && n.empty && (r++,
                n.empty.add(u));
            return u(),
            i.promise(t)
        }
    });
    var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , cssExpand = ["Top", "Right", "Bottom", "Left"]
      , isHidden = function(e, t) {
        return e = t || e,
        jQuery.css(e, "display") === "none" || !jQuery.contains(e.ownerDocument, e)
    }
      , rcheckableType = /^(?:checkbox|radio)$/i;
    (function() {
        var e = document.createDocumentFragment()
          , t = e.appendChild(document.createElement("div"));
        t.innerHTML = "<input type='radio' checked='checked' name='t'/>",
        support.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
        t.innerHTML = "<textarea>x</textarea>",
        support.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    })();
    var strundefined = typeof undefined;
    support.focusinBubbles = "onfocusin"in window;
    var rkeyEvent = /^key/
      , rmouseEvent = /^(?:mouse|contextmenu)|click/
      , rfocusMorph = /^(?:focusinfocus|focusoutblur)$/
      , rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;
    jQuery.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var s, o, u, a, f, l, c, h, p, d, v, m = data_priv.get(e);
            if (!m)
                return;
            n.handler && (s = n,
            n = s.handler,
            i = s.selector),
            n.guid || (n.guid = jQuery.guid++),
            (a = m.events) || (a = m.events = {}),
            (o = m.handle) || (o = m.handle = function(t) {
                return typeof jQuery !== strundefined && jQuery.event.triggered !== t.type ? jQuery.event.dispatch.apply(e, arguments) : undefined
            }
            ),
            t = (t || "").match(rnotwhite) || [""],
            f = t.length;
            while (f--) {
                u = rtypenamespace.exec(t[f]) || [],
                p = v = u[1],
                d = (u[2] || "").split(".").sort();
                if (!p)
                    continue;
                c = jQuery.event.special[p] || {},
                p = (i ? c.delegateType : c.bindType) || p,
                c = jQuery.event.special[p] || {},
                l = jQuery.extend({
                    type: p,
                    origType: v,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && jQuery.expr.match.needsContext.test(i),
                    namespace: d.join(".")
                }, s),
                (h = a[p]) || (h = a[p] = [],
                h.delegateCount = 0,
                (!c.setup || c.setup.call(e, r, d, o) === !1) && e.addEventListener && e.addEventListener(p, o, !1)),
                c.add && (c.add.call(e, l),
                l.handler.guid || (l.handler.guid = n.guid)),
                i ? h.splice(h.delegateCount++, 0, l) : h.push(l),
                jQuery.event.global[p] = !0
            }
        },
        remove: function(e, t, n, r, i) {
            var s, o, u, a, f, l, c, h, p, d, v, m = data_priv.hasData(e) && data_priv.get(e);
            if (!m || !(a = m.events))
                return;
            t = (t || "").match(rnotwhite) || [""],
            f = t.length;
            while (f--) {
                u = rtypenamespace.exec(t[f]) || [],
                p = v = u[1],
                d = (u[2] || "").split(".").sort();
                if (!p) {
                    for (p in a)
                        jQuery.event.remove(e, p + t[f], n, r, !0);
                    continue
                }
                c = jQuery.event.special[p] || {},
                p = (r ? c.delegateType : c.bindType) || p,
                h = a[p] || [],
                u = u[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                o = s = h.length;
                while (s--)
                    l = h[s],
                    (i || v === l.origType) && (!n || n.guid === l.guid) && (!u || u.test(l.namespace)) && (!r || r === l.selector || r === "**" && l.selector) && (h.splice(s, 1),
                    l.selector && h.delegateCount--,
                    c.remove && c.remove.call(e, l));
                o && !h.length && ((!c.teardown || c.teardown.call(e, d, m.handle) === !1) && jQuery.removeEvent(e, p, m.handle),
                delete a[p])
            }
            jQuery.isEmptyObject(a) && (delete m.handle,
            data_priv.remove(e, "events"))
        },
        trigger: function(e, t, n, r) {
            var i, s, o, u, a, f, l, c = [n || document], h = hasOwn.call(e, "type") ? e.type : e, p = hasOwn.call(e, "namespace") ? e.namespace.split(".") : [];
            s = o = n = n || document;
            if (n.nodeType === 3 || n.nodeType === 8)
                return;
            if (rfocusMorph.test(h + jQuery.event.triggered))
                return;
            h.indexOf(".") >= 0 && (p = h.split("."),
            h = p.shift(),
            p.sort()),
            a = h.indexOf(":") < 0 && "on" + h,
            e = e[jQuery.expando] ? e : new jQuery.Event(h,typeof e == "object" && e),
            e.isTrigger = r ? 2 : 3,
            e.namespace = p.join("."),
            e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = undefined,
            e.target || (e.target = n),
            t = t == null ? [e] : jQuery.makeArray(t, [e]),
            l = jQuery.event.special[h] || {};
            if (!r && l.trigger && l.trigger.apply(n, t) === !1)
                return;
            if (!r && !l.noBubble && !jQuery.isWindow(n)) {
                u = l.delegateType || h,
                rfocusMorph.test(u + h) || (s = s.parentNode);
                for (; s; s = s.parentNode)
                    c.push(s),
                    o = s;
                o === (n.ownerDocument || document) && c.push(o.defaultView || o.parentWindow || window)
            }
            i = 0;
            while ((s = c[i++]) && !e.isPropagationStopped())
                e.type = i > 1 ? u : l.bindType || h,
                f = (data_priv.get(s, "events") || {})[e.type] && data_priv.get(s, "handle"),
                f && f.apply(s, t),
                f = a && s[a],
                f && f.apply && jQuery.acceptData(s) && (e.result = f.apply(s, t),
                e.result === !1 && e.preventDefault());
            return e.type = h,
            !r && !e.isDefaultPrevented() && (!l._default || l._default.apply(c.pop(), t) === !1) && jQuery.acceptData(n) && a && jQuery.isFunction(n[h]) && !jQuery.isWindow(n) && (o = n[a],
            o && (n[a] = null),
            jQuery.event.triggered = h,
            n[h](),
            jQuery.event.triggered = undefined,
            o && (n[a] = o)),
            e.result
        },
        dispatch: function(e) {
            e = jQuery.event.fix(e);
            var t, n, r, i, s, o = [], u = slice.call(arguments), a = (data_priv.get(this, "events") || {})[e.type] || [], f = jQuery.event.special[e.type] || {};
            u[0] = e,
            e.delegateTarget = this;
            if (f.preDispatch && f.preDispatch.call(this, e) === !1)
                return;
            o = jQuery.event.handlers.call(this, e, a),
            t = 0;
            while ((i = o[t++]) && !e.isPropagationStopped()) {
                e.currentTarget = i.elem,
                n = 0;
                while ((s = i.handlers[n++]) && !e.isImmediatePropagationStopped())
                    if (!e.namespace_re || e.namespace_re.test(s.namespace))
                        e.handleObj = s,
                        e.data = s.data,
                        r = ((jQuery.event.special[s.origType] || {}).handle || s.handler).apply(i.elem, u),
                        r !== undefined && (e.result = r) === !1 && (e.preventDefault(),
                        e.stopPropagation())
            }
            return f.postDispatch && f.postDispatch.call(this, e),
            e.result
        },
        handlers: function(e, t) {
            var n, r, i, s, o = [], u = t.delegateCount, a = e.target;
            if (u && a.nodeType && (!e.button || e.type !== "click"))
                for (; a !== this; a = a.parentNode || this)
                    if (a.disabled !== !0 || e.type !== "click") {
                        r = [];
                        for (n = 0; n < u; n++)
                            s = t[n],
                            i = s.selector + " ",
                            r[i] === undefined && (r[i] = s.needsContext ? jQuery(i, this).index(a) >= 0 : jQuery.find(i, this, null, [a]).length),
                            r[i] && r.push(s);
                        r.length && o.push({
                            elem: a,
                            handlers: r
                        })
                    }
            return u < t.length && o.push({
                elem: this,
                handlers: t.slice(u)
            }),
            o
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, s = t.button;
                return e.pageX == null && t.clientX != null && (n = e.target.ownerDocument || document,
                r = n.documentElement,
                i = n.body,
                e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0),
                e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)),
                !e.which && s !== undefined && (e.which = s & 1 ? 1 : s & 2 ? 3 : s & 4 ? 2 : 0),
                e
            }
        },
        fix: function(e) {
            if (e[jQuery.expando])
                return e;
            var t, n, r, i = e.type, s = e, o = this.fixHooks[i];
            o || (this.fixHooks[i] = o = rmouseEvent.test(i) ? this.mouseHooks : rkeyEvent.test(i) ? this.keyHooks : {}),
            r = o.props ? this.props.concat(o.props) : this.props,
            e = new jQuery.Event(s),
            t = r.length;
            while (t--)
                n = r[t],
                e[n] = s[n];
            return e.target || (e.target = document),
            e.target.nodeType === 3 && (e.target = e.target.parentNode),
            o.filter ? o.filter(e, s) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== safeActiveElement() && this.focus)
                        return this.focus(),
                        !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === safeActiveElement() && this.blur)
                        return this.blur(),
                        !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (this.type === "checkbox" && this.click && jQuery.nodeName(this, "input"))
                        return this.click(),
                        !1
                },
                _default: function(e) {
                    return jQuery.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== undefined && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = jQuery.extend(new jQuery.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? jQuery.event.trigger(i, null, t) : jQuery.event.dispatch.call(t, i),
            i.isDefaultPrevented() && n.preventDefault()
        }
    },
    jQuery.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }
    ,
    jQuery.Event = function(e, t) {
        if (!(this instanceof jQuery.Event))
            return new jQuery.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && e.getPreventDefault && e.getPreventDefault() ? returnTrue : returnFalse) : this.type = e,
        t && jQuery.extend(this, t),
        this.timeStamp = e && e.timeStamp || jQuery.now(),
        this[jQuery.expando] = !0
    }
    ,
    jQuery.Event.prototype = {
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = returnTrue,
            e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = returnTrue,
            e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = returnTrue,
            this.stopPropagation()
        }
    },
    jQuery.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        jQuery.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this, i = e.relatedTarget, s = e.handleObj;
                if (!i || i !== r && !jQuery.contains(r, i))
                    e.type = s.origType,
                    n = s.handler.apply(this, arguments),
                    e.type = t;
                return n
            }
        }
    }),
    support.focusinBubbles || jQuery.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            jQuery.event.simulate(t, e.target, jQuery.event.fix(e), !0)
        };
        jQuery.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this
                  , i = data_priv.access(r, t);
                i || r.addEventListener(e, n, !0),
                data_priv.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this
                  , i = data_priv.access(r, t) - 1;
                i ? data_priv.access(r, t, i) : (r.removeEventListener(e, n, !0),
                data_priv.remove(r, t))
            }
        }
    }),
    jQuery.fn.extend({
        on: function(e, t, n, r, i) {
            var s, o;
            if (typeof e == "object") {
                typeof t != "string" && (n = n || t,
                t = undefined);
                for (o in e)
                    this.on(o, t, n, e[o], i);
                return this
            }
            n == null && r == null ? (r = t,
            n = t = undefined) : r == null && (typeof t == "string" ? (r = n,
            n = undefined) : (r = n,
            n = t,
            t = undefined));
            if (r === !1)
                r = returnFalse;
            else if (!r)
                return this;
            return i === 1 && (s = r,
            r = function(e) {
                return jQuery().off(e),
                s.apply(this, arguments)
            }
            ,
            r.guid = s.guid || (s.guid = jQuery.guid++)),
            this.each(function() {
                jQuery.event.add(this, e, r, n, t)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                jQuery(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if (typeof e == "object") {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            if (t === !1 || typeof t == "function")
                n = t,
                t = undefined;
            return n === !1 && (n = returnFalse),
            this.each(function() {
                jQuery.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                jQuery.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return jQuery.event.trigger(e, t, n, !0)
        }
    });
    var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , rtagName = /<([\w:]+)/
      , rhtml = /<|&#?\w+;/
      , rnoInnerhtml = /<(?:script|style|link)/i
      , rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i
      , rscriptType = /^$|\/(?:java|ecma)script/i
      , rscriptTypeMasked = /^true\/(.*)/
      , rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , wrapMap = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    wrapMap.optgroup = wrapMap.option,
    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead,
    wrapMap.th = wrapMap.td,
    jQuery.extend({
        clone: function(e, t, n) {
            var r, i, s, o, u = e.cloneNode(!0), a = jQuery.contains(e.ownerDocument, e);
            if (!support.noCloneChecked && (e.nodeType === 1 || e.nodeType === 11) && !jQuery.isXMLDoc(e)) {
                o = getAll(u),
                s = getAll(e);
                for (r = 0,
                i = s.length; r < i; r++)
                    fixInput(s[r], o[r])
            }
            if (t)
                if (n) {
                    s = s || getAll(e),
                    o = o || getAll(u);
                    for (r = 0,
                    i = s.length; r < i; r++)
                        cloneCopyEvent(s[r], o[r])
                } else
                    cloneCopyEvent(e, u);
            return o = getAll(u, "script"),
            o.length > 0 && setGlobalEval(o, !a && getAll(e, "script")),
            u
        },
        buildFragment: function(e, t, n, r) {
            var i, s, o, u, a, f, l = t.createDocumentFragment(), c = [], h = 0, p = e.length;
            for (; h < p; h++) {
                i = e[h];
                if (i || i === 0)
                    if (jQuery.type(i) === "object")
                        jQuery.merge(c, i.nodeType ? [i] : i);
                    else if (!rhtml.test(i))
                        c.push(t.createTextNode(i));
                    else {
                        s = s || l.appendChild(t.createElement("div")),
                        o = (rtagName.exec(i) || ["", ""])[1].toLowerCase(),
                        u = wrapMap[o] || wrapMap._default,
                        s.innerHTML = u[1] + i.replace(rxhtmlTag, "<$1></$2>") + u[2],
                        f = u[0];
                        while (f--)
                            s = s.lastChild;
                        jQuery.merge(c, s.childNodes),
                        s = l.firstChild,
                        s.textContent = ""
                    }
            }
            l.textContent = "",
            h = 0;
            while (i = c[h++]) {
                if (r && jQuery.inArray(i, r) !== -1)
                    continue;
                a = jQuery.contains(i.ownerDocument, i),
                s = getAll(l.appendChild(i), "script"),
                a && setGlobalEval(s);
                if (n) {
                    f = 0;
                    while (i = s[f++])
                        rscriptType.test(i.type || "") && n.push(i)
                }
            }
            return l
        },
        cleanData: function(e) {
            var t, n, r, i, s, o, u = jQuery.event.special, a = 0;
            for (; (n = e[a]) !== undefined; a++) {
                if (jQuery.acceptData(n)) {
                    s = n[data_priv.expando];
                    if (s && (t = data_priv.cache[s])) {
                        r = Object.keys(t.events || {});
                        if (r.length)
                            for (o = 0; (i = r[o]) !== undefined; o++)
                                u[i] ? jQuery.event.remove(n, i) : jQuery.removeEvent(n, i, t.handle);
                        data_priv.cache[s] && delete data_priv.cache[s]
                    }
                }
                delete data_user.cache[n[data_user.expando]]
            }
        }
    }),
    jQuery.fn.extend({
        text: function(e) {
            return access(this, function(e) {
                return e === undefined ? jQuery.text(this) : this.empty().each(function() {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9)
                        this.textContent = e
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = manipulationTarget(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = manipulationTarget(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            var n, r = e ? jQuery.filter(e, this) : this, i = 0;
            for (; (n = r[i]) != null; i++)
                !t && n.nodeType === 1 && jQuery.cleanData(getAll(n)),
                n.parentNode && (t && jQuery.contains(n.ownerDocument, n) && setGlobalEval(getAll(n, "script")),
                n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            var e, t = 0;
            for (; (e = this[t]) != null; t++)
                e.nodeType === 1 && (jQuery.cleanData(getAll(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = e == null ? !1 : e,
            t = t == null ? e : t,
            this.map(function() {
                return jQuery.clone(this, e, t)
            })
        },
        html: function(e) {
            return access(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (e === undefined && t.nodeType === 1)
                    return t.innerHTML;
                if (typeof e == "string" && !rnoInnerhtml.test(e) && !wrapMap[(rtagName.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(rxhtmlTag, "<$1></$2>");
                    try {
                        for (; n < r; n++)
                            t = this[n] || {},
                            t.nodeType === 1 && (jQuery.cleanData(getAll(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (i) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode,
                jQuery.cleanData(getAll(this)),
                e && e.replaceChild(t, this)
            }),
            e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = concat.apply([], e);
            var n, r, i, s, o, u, a = 0, f = this.length, l = this, c = f - 1, h = e[0], p = jQuery.isFunction(h);
            if (p || f > 1 && typeof h == "string" && !support.checkClone && rchecked.test(h))
                return this.each(function(n) {
                    var r = l.eq(n);
                    p && (e[0] = h.call(this, n, r.html())),
                    r.domManip(e, t)
                });
            if (f) {
                n = jQuery.buildFragment(e, this[0].ownerDocument, !1, this),
                r = n.firstChild,
                n.childNodes.length === 1 && (n = r);
                if (r) {
                    i = jQuery.map(getAll(n, "script"), disableScript),
                    s = i.length;
                    for (; a < f; a++)
                        o = n,
                        a !== c && (o = jQuery.clone(o, !0, !0),
                        s && jQuery.merge(i, getAll(o, "script"))),
                        t.call(this[a], o, a);
                    if (s) {
                        u = i[i.length - 1].ownerDocument,
                        jQuery.map(i, restoreScript);
                        for (a = 0; a < s; a++)
                            o = i[a],
                            rscriptType.test(o.type || "") && !data_priv.access(o, "globalEval") && jQuery.contains(u, o) && (o.src ? jQuery._evalUrl && jQuery._evalUrl(o.src) : jQuery.globalEval(o.textContent.replace(rcleanScript, "")))
                    }
                }
            }
            return this
        }
    }),
    jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        jQuery.fn[e] = function(e) {
            var n, r = [], i = jQuery(e), s = i.length - 1, o = 0;
            for (; o <= s; o++)
                n = o === s ? this : this.clone(!0),
                jQuery(i[o])[t](n),
                push.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var iframe, elemdisplay = {}, rmargin = /^margin/, rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$","i"), getStyles = function(e) {
        return e.ownerDocument.defaultView.getComputedStyle(e, null)
    };
    (function() {
        function o() {
            s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",
            r.appendChild(i);
            var n = window.getComputedStyle(s, null);
            e = n.top !== "1%",
            t = n.width === "4px",
            r.removeChild(i)
        }
        var e, t, n = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box", r = document.documentElement, i = document.createElement("div"), s = document.createElement("div");
        s.style.backgroundClip = "content-box",
        s.cloneNode(!0).style.backgroundClip = "",
        support.clearCloneStyle = s.style.backgroundClip === "content-box",
        i.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",
        i.appendChild(s),
        window.getComputedStyle && jQuery.extend(support, {
            pixelPosition: function() {
                return o(),
                e
            },
            boxSizingReliable: function() {
                return t == null && o(),
                t
            },
            reliableMarginRight: function() {
                var e, t = s.appendChild(document.createElement("div"));
                return t.style.cssText = s.style.cssText = n,
                t.style.marginRight = t.style.width = "0",
                s.style.width = "1px",
                r.appendChild(i),
                e = !parseFloat(window.getComputedStyle(t, null).marginRight),
                r.removeChild(i),
                s.innerHTML = "",
                e
            }
        })
    })(),
    jQuery.swap = function(e, t, n, r) {
        var i, s, o = {};
        for (s in t)
            o[s] = e.style[s],
            e.style[s] = t[s];
        i = n.apply(e, r || []);
        for (s in t)
            e.style[s] = o[s];
        return i
    }
    ;
    var rdisplayswap = /^(none|table(?!-c[ea]).+)/
      , rnumsplit = new RegExp("^(" + pnum + ")(.*)$","i")
      , rrelNum = new RegExp("^([+-])=(" + pnum + ")","i")
      , cssShow = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , cssNormalTransform = {
        letterSpacing: 0,
        fontWeight: 400
    }
      , cssPrefixes = ["Webkit", "O", "Moz", "ms"];
    jQuery.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = curCSS(e, "opacity");
                        return n === "" ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, t, n, r) {
            if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style)
                return;
            var i, s, o, u = jQuery.camelCase(t), a = e.style;
            t = jQuery.cssProps[u] || (jQuery.cssProps[u] = vendorPropName(a, u)),
            o = jQuery.cssHooks[t] || jQuery.cssHooks[u];
            if (n === undefined)
                return o && "get"in o && (i = o.get(e, !1, r)) !== undefined ? i : a[t];
            s = typeof n,
            s === "string" && (i = rrelNum.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(jQuery.css(e, t)),
            s = "number");
            if (n == null || n !== n)
                return;
            s === "number" && !jQuery.cssNumber[u] && (n += "px"),
            !support.clearCloneStyle && n === "" && t.indexOf("background") === 0 && (a[t] = "inherit");
            if (!o || !("set"in o) || (n = o.set(e, n, r)) !== undefined)
                a[t] = "",
                a[t] = n
        },
        css: function(e, t, n, r) {
            var i, s, o, u = jQuery.camelCase(t);
            return t = jQuery.cssProps[u] || (jQuery.cssProps[u] = vendorPropName(e.style, u)),
            o = jQuery.cssHooks[t] || jQuery.cssHooks[u],
            o && "get"in o && (i = o.get(e, !0, n)),
            i === undefined && (i = curCSS(e, t, r)),
            i === "normal" && t in cssNormalTransform && (i = cssNormalTransform[t]),
            n === "" || n ? (s = parseFloat(i),
            n === !0 || jQuery.isNumeric(s) ? s || 0 : i) : i
        }
    }),
    jQuery.each(["height", "width"], function(e, t) {
        jQuery.cssHooks[t] = {
            get: function(e, n, r) {
                if (n)
                    return e.offsetWidth === 0 && rdisplayswap.test(jQuery.css(e, "display")) ? jQuery.swap(e, cssShow, function() {
                        return getWidthOrHeight(e, t, r)
                    }) : getWidthOrHeight(e, t, r)
            },
            set: function(e, n, r) {
                var i = r && getStyles(e);
                return setPositiveNumber(e, n, r ? augmentWidthOrHeight(e, t, r, jQuery.css(e, "boxSizing", !1, i) === "border-box", i) : 0)
            }
        }
    }),
    jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight, function(e, t) {
        if (t)
            return jQuery.swap(e, {
                display: "inline-block"
            }, curCSS, [e, "marginRight"])
    }),
    jQuery.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        jQuery.cssHooks[e + t] = {
            expand: function(n) {
                var r = 0
                  , i = {}
                  , s = typeof n == "string" ? n.split(" ") : [n];
                for (; r < 4; r++)
                    i[e + cssExpand[r] + t] = s[r] || s[r - 2] || s[0];
                return i
            }
        },
        rmargin.test(e) || (jQuery.cssHooks[e + t].set = setPositiveNumber)
    }),
    jQuery.fn.extend({
        css: function(e, t) {
            return access(this, function(e, t, n) {
                var r, i, s = {}, o = 0;
                if (jQuery.isArray(t)) {
                    r = getStyles(e),
                    i = t.length;
                    for (; o < i; o++)
                        s[t[o]] = jQuery.css(e, t[o], !1, r);
                    return s
                }
                return n !== undefined ? jQuery.style(e, t, n) : jQuery.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return showHide(this, !0)
        },
        hide: function() {
            return showHide(this)
        },
        toggle: function(e) {
            return typeof e == "boolean" ? e ? this.show() : this.hide() : this.each(function() {
                isHidden(this) ? jQuery(this).show() : jQuery(this).hide()
            })
        }
    }),
    jQuery.Tween = Tween,
    Tween.prototype = {
        constructor: Tween,
        init: function(e, t, n, r, i, s) {
            this.elem = e,
            this.prop = n,
            this.easing = i || "swing",
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = s || (jQuery.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Tween.propHooks[this.prop];
            return e && e.get ? e.get(this) : Tween.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Tween.propHooks[this.prop];
            return this.options.duration ? this.pos = t = jQuery.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : Tween.propHooks._default.set(this),
            this
        }
    },
    Tween.prototype.init.prototype = Tween.prototype,
    Tween.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return e.elem[e.prop] == null || !!e.elem.style && e.elem.style[e.prop] != null ? (t = jQuery.css(e.elem, e.prop, ""),
                !t || t === "auto" ? 0 : t) : e.elem[e.prop]
            },
            set: function(e) {
                jQuery.fx.step[e.prop] ? jQuery.fx.step[e.prop](e) : e.elem.style && (e.elem.style[jQuery.cssProps[e.prop]] != null || jQuery.cssHooks[e.prop]) ? jQuery.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    },
    Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    jQuery.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    },
    jQuery.fx = Tween.prototype.init,
    jQuery.fx.step = {};
    var fxNow, timerId, rfxtypes = /^(?:toggle|show|hide)$/, rfxnum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$","i"), rrun = /queueHooks$/, animationPrefilters = [defaultPrefilter], tweeners = {
        "*": [function(e, t) {
            var n = this.createTween(e, t)
              , r = n.cur()
              , i = rfxnum.exec(t)
              , s = i && i[3] || (jQuery.cssNumber[e] ? "" : "px")
              , o = (jQuery.cssNumber[e] || s !== "px" && +r) && rfxnum.exec(jQuery.css(n.elem, e))
              , u = 1
              , a = 20;
            if (o && o[3] !== s) {
                s = s || o[3],
                i = i || [],
                o = +r || 1;
                do
                    u = u || ".5",
                    o /= u,
                    jQuery.style(n.elem, e, o + s);
                while (u !== (u = n.cur() / r) && u !== 1 && --a)
            }
            return i && (o = n.start = +o || +r || 0,
            n.unit = s,
            n.end = i[1] ? o + (i[1] + 1) * i[2] : +i[2]),
            n
        }
        ]
    };
    jQuery.Animation = jQuery.extend(Animation, {
        tweener: function(e, t) {
            jQuery.isFunction(e) ? (t = e,
            e = ["*"]) : e = e.split(" ");
            var n, r = 0, i = e.length;
            for (; r < i; r++)
                n = e[r],
                tweeners[n] = tweeners[n] || [],
                tweeners[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? animationPrefilters.unshift(e) : animationPrefilters.push(e)
        }
    }),
    jQuery.speed = function(e, t, n) {
        var r = e && typeof e == "object" ? jQuery.extend({}, e) : {
            complete: n || !n && t || jQuery.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !jQuery.isFunction(t) && t
        };
        r.duration = jQuery.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in jQuery.fx.speeds ? jQuery.fx.speeds[r.duration] : jQuery.fx.speeds._default;
        if (r.queue == null || r.queue === !0)
            r.queue = "fx";
        return r.old = r.complete,
        r.complete = function() {
            jQuery.isFunction(r.old) && r.old.call(this),
            r.queue && jQuery.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    jQuery.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(isHidden).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = jQuery.isEmptyObject(e)
              , s = jQuery.speed(t, n, r)
              , o = function() {
                var t = Animation(this, jQuery.extend({}, e), s);
                (i || data_priv.get(this, "finish")) && t.stop(!0)
            };
            return o.finish = o,
            i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return typeof e != "string" && (n = t,
            t = e,
            e = undefined),
            t && e !== !1 && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , i = e != null && e + "queueHooks"
                  , s = jQuery.timers
                  , o = data_priv.get(this);
                if (i)
                    o[i] && o[i].stop && r(o[i]);
                else
                    for (i in o)
                        o[i] && o[i].stop && rrun.test(i) && r(o[i]);
                for (i = s.length; i--; )
                    s[i].elem === this && (e == null || s[i].queue === e) && (s[i].anim.stop(n),
                    t = !1,
                    s.splice(i, 1));
                (t || !n) && jQuery.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"),
            this.each(function() {
                var t, n = data_priv.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], s = jQuery.timers, o = r ? r.length : 0;
                n.finish = !0,
                jQuery.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0);
                for (t = s.length; t--; )
                    s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0),
                    s.splice(t, 1));
                for (t = 0; t < o; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    jQuery.each(["toggle", "show", "hide"], function(e, t) {
        var n = jQuery.fn[t];
        jQuery.fn[t] = function(e, r, i) {
            return e == null || typeof e == "boolean" ? n.apply(this, arguments) : this.animate(genFx(t, !0), e, r, i)
        }
    }),
    jQuery.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        jQuery.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }),
    jQuery.timers = [],
    jQuery.fx.tick = function() {
        var e, t = 0, n = jQuery.timers;
        fxNow = jQuery.now();
        for (; t < n.length; t++)
            e = n[t],
            !e() && n[t] === e && n.splice(t--, 1);
        n.length || jQuery.fx.stop(),
        fxNow = undefined
    }
    ,
    jQuery.fx.timer = function(e) {
        jQuery.timers.push(e),
        e() ? jQuery.fx.start() : jQuery.timers.pop()
    }
    ,
    jQuery.fx.interval = 13,
    jQuery.fx.start = function() {
        timerId || (timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval))
    }
    ,
    jQuery.fx.stop = function() {
        clearInterval(timerId),
        timerId = null
    }
    ,
    jQuery.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    jQuery.fn.delay = function(e, t) {
        return e = jQuery.fx ? jQuery.fx.speeds[e] || e : e,
        t = t || "fx",
        this.queue(t, function(t, n) {
            var r = setTimeout(t, e);
            n.stop = function() {
                clearTimeout(r)
            }
        })
    }
    ,
    function() {
        var e = document.createElement("input")
          , t = document.createElement("select")
          , n = t.appendChild(document.createElement("option"));
        e.type = "checkbox",
        support.checkOn = e.value !== "",
        support.optSelected = n.selected,
        t.disabled = !0,
        support.optDisabled = !n.disabled,
        e = document.createElement("input"),
        e.value = "t",
        e.type = "radio",
        support.radioValue = e.value === "t"
    }();
    var nodeHook, boolHook, attrHandle = jQuery.expr.attrHandle;
    jQuery.fn.extend({
        attr: function(e, t) {
            return access(this, jQuery.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                jQuery.removeAttr(this, e)
            })
        }
    }),
    jQuery.extend({
        attr: function(e, t, n) {
            var r, i, s = e.nodeType;
            if (!e || s === 3 || s === 8 || s === 2)
                return;
            if (typeof e.getAttribute === strundefined)
                return jQuery.prop(e, t, n);
            if (s !== 1 || !jQuery.isXMLDoc(e))
                t = t.toLowerCase(),
                r = jQuery.attrHooks[t] || (jQuery.expr.match.bool.test(t) ? boolHook : nodeHook);
            if (n === undefined)
                return r && "get"in r && (i = r.get(e, t)) !== null ? i : (i = jQuery.find.attr(e, t),
                i == null ? undefined : i);
            if (n !== null)
                return r && "set"in r && (i = r.set(e, n, t)) !== undefined ? i : (e.setAttribute(t, n + ""),
                n);
            jQuery.removeAttr(e, t)
        },
        removeAttr: function(e, t) {
            var n, r, i = 0, s = t && t.match(rnotwhite);
            if (s && e.nodeType === 1)
                while (n = s[i++])
                    r = jQuery.propFix[n] || n,
                    jQuery.expr.match.bool.test(n) && (e[r] = !1),
                    e.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!support.radioValue && t === "radio" && jQuery.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        }
    }),
    boolHook = {
        set: function(e, t, n) {
            return t === !1 ? jQuery.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = attrHandle[t] || jQuery.find.attr;
        attrHandle[t] = function(e, t, r) {
            var i, s;
            return r || (s = attrHandle[t],
            attrHandle[t] = i,
            i = n(e, t, r) != null ? t.toLowerCase() : null,
            attrHandle[t] = s),
            i
        }
    });
    var rfocusable = /^(?:input|select|textarea|button)$/i;
    jQuery.fn.extend({
        prop: function(e, t) {
            return access(this, jQuery.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[jQuery.propFix[e] || e]
            })
        }
    }),
    jQuery.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var r, i, s, o = e.nodeType;
            if (!e || o === 3 || o === 8 || o === 2)
                return;
            return s = o !== 1 || !jQuery.isXMLDoc(e),
            s && (t = jQuery.propFix[t] || t,
            i = jQuery.propHooks[t]),
            n !== undefined ? i && "set"in i && (r = i.set(e, n, t)) !== undefined ? r : e[t] = n : i && "get"in i && (r = i.get(e, t)) !== null ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    return e.hasAttribute("tabindex") || rfocusable.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }),
    support.optSelected || (jQuery.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        }
    }),
    jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        jQuery.propFix[this.toLowerCase()] = this
    });
    var rclass = /[\t\r\n\f]/g;
    jQuery.fn.extend({
        addClass: function(e) {
            var t, n, r, i, s, o, u = typeof e == "string" && e, a = 0, f = this.length;
            if (jQuery.isFunction(e))
                return this.each(function(t) {
                    jQuery(this).addClass(e.call(this, t, this.className))
                });
            if (u) {
                t = (e || "").match(rnotwhite) || [];
                for (; a < f; a++) {
                    n = this[a],
                    r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(rclass, " ") : " ");
                    if (r) {
                        s = 0;
                        while (i = t[s++])
                            r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        o = jQuery.trim(r),
                        n.className !== o && (n.className = o)
                    }
                }
            }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, s, o, u = arguments.length === 0 || typeof e == "string" && e, a = 0, f = this.length;
            if (jQuery.isFunction(e))
                return this.each(function(t) {
                    jQuery(this).removeClass(e.call(this, t, this.className))
                });
            if (u) {
                t = (e || "").match(rnotwhite) || [];
                for (; a < f; a++) {
                    n = this[a],
                    r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(rclass, " ") : "");
                    if (r) {
                        s = 0;
                        while (i = t[s++])
                            while (r.indexOf(" " + i + " ") >= 0)
                                r = r.replace(" " + i + " ", " ");
                        o = e ? jQuery.trim(r) : "",
                        n.className !== o && (n.className = o)
                    }
                }
            }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return typeof t == "boolean" && n === "string" ? t ? this.addClass(e) : this.removeClass(e) : jQuery.isFunction(e) ? this.each(function(n) {
                jQuery(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if (n === "string") {
                    var t, r = 0, i = jQuery(this), s = e.match(rnotwhite) || [];
                    while (t = s[r++])
                        i.hasClass(t) ? i.removeClass(t) : i.addClass(t)
                } else if (n === strundefined || n === "boolean")
                    this.className && data_priv.set(this, "__className__", this.className),
                    this.className = this.className || e === !1 ? "" : data_priv.get(this, "__className__") || ""
            })
        },
        hasClass: function(e) {
            var t = " " + e + " "
              , n = 0
              , r = this.length;
            for (; n < r; n++)
                if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(rclass, " ").indexOf(t) >= 0)
                    return !0;
            return !1
        }
    });
    var rreturn = /\r/g;
    jQuery.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            if (!arguments.length) {
                if (i)
                    return t = jQuery.valHooks[i.type] || jQuery.valHooks[i.nodeName.toLowerCase()],
                    t && "get"in t && (n = t.get(i, "value")) !== undefined ? n : (n = i.value,
                    typeof n == "string" ? n.replace(rreturn, "") : n == null ? "" : n);
                return
            }
            return r = jQuery.isFunction(e),
            this.each(function(n) {
                var i;
                if (this.nodeType !== 1)
                    return;
                r ? i = e.call(this, n, jQuery(this).val()) : i = e,
                i == null ? i = "" : typeof i == "number" ? i += "" : jQuery.isArray(i) && (i = jQuery.map(i, function(e) {
                    return e == null ? "" : e + ""
                })),
                t = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
                if (!t || !("set"in t) || t.set(this, i, "value") === undefined)
                    this.value = i
            })
        }
    }),
    jQuery.extend({
        valHooks: {
            select: {
                get: function(e) {
                    var t, n, r = e.options, i = e.selectedIndex, s = e.type === "select-one" || i < 0, o = s ? null : [], u = s ? i + 1 : r.length, a = i < 0 ? u : s ? i : 0;
                    for (; a < u; a++) {
                        n = r[a];
                        if ((n.selected || a === i) && (support.optDisabled ? !n.disabled : n.getAttribute("disabled") === null) && (!n.parentNode.disabled || !jQuery.nodeName(n.parentNode, "optgroup"))) {
                            t = jQuery(n).val();
                            if (s)
                                return t;
                            o.push(t)
                        }
                    }
                    return o
                },
                set: function(e, t) {
                    var n, r, i = e.options, s = jQuery.makeArray(t), o = i.length;
                    while (o--) {
                        r = i[o];
                        if (r.selected = jQuery.inArray(jQuery(r).val(), s) >= 0)
                            n = !0
                    }
                    return n || (e.selectedIndex = -1),
                    s
                }
            }
        }
    }),
    jQuery.each(["radio", "checkbox"], function() {
        jQuery.valHooks[this] = {
            set: function(e, t) {
                if (jQuery.isArray(t))
                    return e.checked = jQuery.inArray(jQuery(e).val(), t) >= 0
            }
        },
        support.checkOn || (jQuery.valHooks[this].get = function(e) {
            return e.getAttribute("value") === null ? "on" : e.value
        }
        )
    }),
    jQuery.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        jQuery.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    jQuery.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var nonce = jQuery.now()
      , rquery = /\?/;
    jQuery.parseJSON = function(e) {
        return JSON.parse(e + "")
    }
    ,
    jQuery.parseXML = function(e) {
        var t, n;
        if (!e || typeof e != "string")
            return null;
        try {
            n = new DOMParser,
            t = n.parseFromString(e, "text/xml")
        } catch (r) {
            t = undefined
        }
        return (!t || t.getElementsByTagName("parsererror").length) && jQuery.error("Invalid XML: " + e),
        t
    }
    ;
    var ajaxLocParts, ajaxLocation, rhash = /#.*$/, rts = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, prefilters = {}, transports = {}, allTypes = "*/".concat("*");
    try {
        ajaxLocation = location.href
    } catch (e) {
        ajaxLocation = document.createElement("a"),
        ajaxLocation.href = "",
        ajaxLocation = ajaxLocation.href
    }
    ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [],
    jQuery.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ajaxLocation,
            type: "GET",
            isLocal: rlocalProtocol.test(ajaxLocParts[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": allTypes,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": jQuery.parseJSON,
                "text xml": jQuery.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? ajaxExtend(ajaxExtend(e, jQuery.ajaxSettings), t) : ajaxExtend(jQuery.ajaxSettings, e)
        },
        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),
        ajax: function(e, t) {
            function S(e, t, s, u) {
                var f, m, g, b, E, S = t;
                if (y === 2)
                    return;
                y = 2,
                o && clearTimeout(o),
                n = undefined,
                i = u || "",
                w.readyState = e > 0 ? 4 : 0,
                f = e >= 200 && e < 300 || e === 304,
                s && (b = ajaxHandleResponses(l, w, s)),
                b = ajaxConvert(l, b, w, f);
                if (f)
                    l.ifModified && (E = w.getResponseHeader("Last-Modified"),
                    E && (jQuery.lastModified[r] = E),
                    E = w.getResponseHeader("etag"),
                    E && (jQuery.etag[r] = E)),
                    e === 204 || l.type === "HEAD" ? S = "nocontent" : e === 304 ? S = "notmodified" : (S = b.state,
                    m = b.data,
                    g = b.error,
                    f = !g);
                else {
                    g = S;
                    if (e || !S)
                        S = "error",
                        e < 0 && (e = 0)
                }
                w.status = e,
                w.statusText = (t || S) + "",
                f ? p.resolveWith(c, [m, S, w]) : p.rejectWith(c, [w, S, g]),
                w.statusCode(v),
                v = undefined,
                a && h.trigger(f ? "ajaxSuccess" : "ajaxError", [w, l, f ? m : g]),
                d.fireWith(c, [w, S]),
                a && (h.trigger("ajaxComplete", [w, l]),
                --jQuery.active || jQuery.event.trigger("ajaxStop"))
            }
            typeof e == "object" && (t = e,
            e = undefined),
            t = t || {};
            var n, r, i, s, o, u, a, f, l = jQuery.ajaxSetup({}, t), c = l.context || l, h = l.context && (c.nodeType || c.jquery) ? jQuery(c) : jQuery.event, p = jQuery.Deferred(), d = jQuery.Callbacks("once memory"), v = l.statusCode || {}, m = {}, g = {}, y = 0, b = "canceled", w = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (y === 2) {
                        if (!s) {
                            s = {};
                            while (t = rheaders.exec(i))
                                s[t[1].toLowerCase()] = t[2]
                        }
                        t = s[e.toLowerCase()]
                    }
                    return t == null ? null : t
                },
                getAllResponseHeaders: function() {
                    return y === 2 ? i : null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return y || (e = g[n] = g[n] || e,
                    m[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return y || (l.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (y < 2)
                            for (t in e)
                                v[t] = [v[t], e[t]];
                        else
                            w.always(e[w.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || b;
                    return n && n.abort(t),
                    S(0, t),
                    this
                }
            };
            p.promise(w).complete = d.add,
            w.success = w.done,
            w.error = w.fail,
            l.url = ((e || l.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//"),
            l.type = t.method || t.type || l.method || l.type,
            l.dataTypes = jQuery.trim(l.dataType || "*").toLowerCase().match(rnotwhite) || [""],
            l.crossDomain == null && (u = rurl.exec(l.url.toLowerCase()),
            l.crossDomain = !(!u || u[1] === ajaxLocParts[1] && u[2] === ajaxLocParts[2] && (u[3] || (u[1] === "http:" ? "80" : "443")) === (ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? "80" : "443")))),
            l.data && l.processData && typeof l.data != "string" && (l.data = jQuery.param(l.data, l.traditional)),
            inspectPrefiltersOrTransports(prefilters, l, t, w);
            if (y === 2)
                return w;
            a = l.global,
            a && jQuery.active++ === 0 && jQuery.event.trigger("ajaxStart"),
            l.type = l.type.toUpperCase(),
            l.hasContent = !rnoContent.test(l.type),
            r = l.url,
            l.hasContent || (l.data && (r = l.url += (rquery.test(r) ? "&" : "?") + l.data,
            delete l.data),
            l.cache === !1 && (l.url = rts.test(r) ? r.replace(rts, "$1_=" + nonce++) : r + (rquery.test(r) ? "&" : "?") + "_=" + nonce++)),
            l.ifModified && (jQuery.lastModified[r] && w.setRequestHeader("If-Modified-Since", jQuery.lastModified[r]),
            jQuery.etag[r] && w.setRequestHeader("If-None-Match", jQuery.etag[r])),
            (l.data && l.hasContent && l.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", l.contentType),
            w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + (l.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : l.accepts["*"]);
            for (f in l.headers)
                w.setRequestHeader(f, l.headers[f]);
            if (!l.beforeSend || l.beforeSend.call(c, w, l) !== !1 && y !== 2) {
                b = "abort";
                for (f in {
                    success: 1,
                    error: 1,
                    complete: 1
                })
                    w[f](l[f]);
                n = inspectPrefiltersOrTransports(transports, l, t, w);
                if (!n)
                    S(-1, "No Transport");
                else {
                    w.readyState = 1,
                    a && h.trigger("ajaxSend", [w, l]),
                    l.async && l.timeout > 0 && (o = setTimeout(function() {
                        w.abort("timeout")
                    }, l.timeout));
                    try {
                        y = 1,
                        n.send(m, S)
                    } catch (E) {
                        if (!(y < 2))
                            throw E;
                        S(-1, E)
                    }
                }
                return w
            }
            return w.abort()
        },
        getJSON: function(e, t, n) {
            return jQuery.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return jQuery.get(e, undefined, t, "script")
        }
    }),
    jQuery.each(["get", "post"], function(e, t) {
        jQuery[t] = function(e, n, r, i) {
            return jQuery.isFunction(n) && (i = i || r,
            r = n,
            n = undefined),
            jQuery.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            })
        }
    }),
    jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        jQuery.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    jQuery._evalUrl = function(e) {
        return jQuery.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ,
    jQuery.fn.extend({
        wrapAll: function(e) {
            var t;
            return jQuery.isFunction(e) ? this.each(function(t) {
                jQuery(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = jQuery(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                var e = this;
                while (e.firstElementChild)
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this)
        },
        wrapInner: function(e) {
            return jQuery.isFunction(e) ? this.each(function(t) {
                jQuery(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = jQuery(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = jQuery.isFunction(e);
            return this.each(function(n) {
                jQuery(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                jQuery.nodeName(this, "body") || jQuery(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    jQuery.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }
    ,
    jQuery.expr.filters.visible = function(e) {
        return !jQuery.expr.filters.hidden(e)
    }
    ;
    var r20 = /%20/g
      , rbracket = /\[\]$/
      , rCRLF = /\r?\n/g
      , rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i
      , rsubmittable = /^(?:input|select|textarea|keygen)/i;
    jQuery.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            t = jQuery.isFunction(t) ? t() : t == null ? "" : t,
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        t === undefined && (t = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional);
        if (jQuery.isArray(e) || e.jquery && !jQuery.isPlainObject(e))
            jQuery.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                buildParams(n, e[n], t, i);
        return r.join("&").replace(r20, "+")
    }
    ,
    jQuery.fn.extend({
        serialize: function() {
            return jQuery.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = jQuery.prop(this, "elements");
                return e ? jQuery.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(e) && (this.checked || !rcheckableType.test(e))
            }).map(function(e, t) {
                var n = jQuery(this).val();
                return n == null ? null : jQuery.isArray(n) ? jQuery.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(rCRLF, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(rCRLF, "\r\n")
                }
            }).get()
        }
    }),
    jQuery.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (e) {}
    }
    ;
    var xhrId = 0
      , xhrCallbacks = {}
      , xhrSuccessStatus = {
        0: 200,
        1223: 204
    }
      , xhrSupported = jQuery.ajaxSettings.xhr();
    window.ActiveXObject && jQuery(window).on("unload", function() {
        for (var e in xhrCallbacks)
            xhrCallbacks[e]()
    }),
    support.cors = !!xhrSupported && "withCredentials"in xhrSupported,
    support.ajax = xhrSupported = !!xhrSupported,
    jQuery.ajaxTransport(function(e) {
        var t;
        if (support.cors || xhrSupported && !e.crossDomain)
            return {
                send: function(n, r) {
                    var i, s = e.xhr(), o = ++xhrId;
                    s.open(e.type, e.url, e.async, e.username, e.password);
                    if (e.xhrFields)
                        for (i in e.xhrFields)
                            s[i] = e.xhrFields[i];
                    e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType),
                    !e.crossDomain && !n["X-Requested-With"] && (n["X-Requested-With"] = "XMLHttpRequest");
                    for (i in n)
                        s.setRequestHeader(i, n[i]);
                    t = function(e) {
                        return function() {
                            t && (delete xhrCallbacks[o],
                            t = s.onload = s.onerror = null,
                            e === "abort" ? s.abort() : e === "error" ? r(s.status, s.statusText) : r(xhrSuccessStatus[s.status] || s.status, s.statusText, typeof s.responseText == "string" ? {
                                text: s.responseText
                            } : undefined, s.getAllResponseHeaders()))
                        }
                    }
                    ,
                    s.onload = t(),
                    s.onerror = t("error"),
                    t = xhrCallbacks[o] = t("abort"),
                    s.send(e.hasContent && e.data || null)
                },
                abort: function() {
                    t && t()
                }
            }
    }),
    jQuery.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return jQuery.globalEval(e),
                e
            }
        }
    }),
    jQuery.ajaxPrefilter("script", function(e) {
        e.cache === undefined && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    jQuery.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(r, i) {
                    t = jQuery("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(),
                        n = null,
                        e && i(e.type === "error" ? 404 : 200, e.type)
                    }
                    ),
                    document.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var oldCallbacks = []
      , rjsonp = /(=)\?(?=&|$)|\?\?/;
    jQuery.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
            return this[e] = !0,
            e
        }
    }),
    jQuery.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, s, o = e.jsonp !== !1 && (rjsonp.test(e.url) ? "url" : typeof e.data == "string" && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(e.data) && "data");
        if (o || e.dataTypes[0] === "jsonp")
            return r = e.jsonpCallback = jQuery.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
            o ? e[o] = e[o].replace(rjsonp, "$1" + r) : e.jsonp !== !1 && (e.url += (rquery.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
            e.converters["script json"] = function() {
                return s || jQuery.error(r + " was not called"),
                s[0]
            }
            ,
            e.dataTypes[0] = "json",
            i = window[r],
            window[r] = function() {
                s = arguments
            }
            ,
            n.always(function() {
                window[r] = i,
                e[r] && (e.jsonpCallback = t.jsonpCallback,
                oldCallbacks.push(r)),
                s && jQuery.isFunction(i) && i(s[0]),
                s = i = undefined
            }),
            "script"
    }),
    jQuery.parseHTML = function(e, t, n) {
        if (!e || typeof e != "string")
            return null;
        typeof t == "boolean" && (n = t,
        t = !1),
        t = t || document;
        var r = rsingleTag.exec(e)
          , i = !n && [];
        return r ? [t.createElement(r[1])] : (r = jQuery.buildFragment([e], t, i),
        i && i.length && jQuery(i).remove(),
        jQuery.merge([], r.childNodes))
    }
    ;
    var _load = jQuery.fn.load;
    jQuery.fn.load = function(e, t, n) {
        if (typeof e != "string" && _load)
            return _load.apply(this, arguments);
        var r, i, s, o = this, u = e.indexOf(" ");
        return u >= 0 && (r = e.slice(u),
        e = e.slice(0, u)),
        jQuery.isFunction(t) ? (n = t,
        t = undefined) : t && typeof t == "object" && (i = "POST"),
        o.length > 0 && jQuery.ajax({
            url: e,
            type: i,
            dataType: "html",
            data: t
        }).done(function(e) {
            s = arguments,
            o.html(r ? jQuery("<div>").append(jQuery.parseHTML(e)).find(r) : e)
        }).complete(n && function(e, t) {
            o.each(n, s || [e.responseText, t, e])
        }
        ),
        this
    }
    ,
    jQuery.expr.filters.animated = function(e) {
        return jQuery.grep(jQuery.timers, function(t) {
            return e === t.elem
        }).length
    }
    ;
    var docElem = window.document.documentElement;
    jQuery.offset = {
        setOffset: function(e, t, n) {
            var r, i, s, o, u, a, f, l = jQuery.css(e, "position"), c = jQuery(e), h = {};
            l === "static" && (e.style.position = "relative"),
            u = c.offset(),
            s = jQuery.css(e, "top"),
            a = jQuery.css(e, "left"),
            f = (l === "absolute" || l === "fixed") && (s + a).indexOf("auto") > -1,
            f ? (r = c.position(),
            o = r.top,
            i = r.left) : (o = parseFloat(s) || 0,
            i = parseFloat(a) || 0),
            jQuery.isFunction(t) && (t = t.call(e, n, u)),
            t.top != null && (h.top = t.top - u.top + o),
            t.left != null && (h.left = t.left - u.left + i),
            "using"in t ? t.using.call(e, h) : c.css(h)
        }
    },
    jQuery.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return e === undefined ? this : this.each(function(t) {
                    jQuery.offset.setOffset(this, e, t)
                });
            var t, n, r = this[0], i = {
                top: 0,
                left: 0
            }, s = r && r.ownerDocument;
            if (!s)
                return;
            return t = s.documentElement,
            jQuery.contains(t, r) ? (typeof r.getBoundingClientRect !== strundefined && (i = r.getBoundingClientRect()),
            n = getWindow(s),
            {
                top: i.top + n.pageYOffset - t.clientTop,
                left: i.left + n.pageXOffset - t.clientLeft
            }) : i
        },
        position: function() {
            if (!this[0])
                return;
            var e, t, n = this[0], r = {
                top: 0,
                left: 0
            };
            return jQuery.css(n, "position") === "fixed" ? t = n.getBoundingClientRect() : (e = this.offsetParent(),
            t = this.offset(),
            jQuery.nodeName(e[0], "html") || (r = e.offset()),
            r.top += jQuery.css(e[0], "borderTopWidth", !0),
            r.left += jQuery.css(e[0], "borderLeftWidth", !0)),
            {
                top: t.top - r.top - jQuery.css(n, "marginTop", !0),
                left: t.left - r.left - jQuery.css(n, "marginLeft", !0)
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || docElem;
                while (e && !jQuery.nodeName(e, "html") && jQuery.css(e, "position") === "static")
                    e = e.offsetParent;
                return e || docElem
            })
        }
    }),
    jQuery.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        jQuery.fn[e] = function(r) {
            return access(this, function(e, r, i) {
                var s = getWindow(e);
                if (i === undefined)
                    return s ? s[t] : e[r];
                s ? s.scrollTo(n ? window.pageXOffset : i, n ? i : window.pageYOffset) : e[r] = i
            }, e, r, arguments.length, null)
        }
    }),
    jQuery.each(["top", "left"], function(e, t) {
        jQuery.cssHooks[t] = addGetHookIf(support.pixelPosition, function(e, n) {
            if (n)
                return n = curCSS(e, t),
                rnumnonpx.test(n) ? jQuery(e).position()[t] + "px" : n
        })
    }),
    jQuery.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        jQuery.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            jQuery.fn[r] = function(r, i) {
                var s = arguments.length && (n || typeof r != "boolean")
                  , o = n || (r === !0 || i === !0 ? "margin" : "border");
                return access(this, function(t, n, r) {
                    var i;
                    return jQuery.isWindow(t) ? t.document.documentElement["client" + e] : t.nodeType === 9 ? (i = t.documentElement,
                    Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : r === undefined ? jQuery.css(t, n, o) : jQuery.style(t, n, r, o)
                }, t, s ? r : undefined, s, null)
            }
        })
    }),
    jQuery.fn.size = function() {
        return this.length
    }
    ,
    jQuery.fn.andSelf = jQuery.fn.addBack,
    typeof define == "function" && define.amd && define("jquery", [], function() {
        return jQuery
    });
    var _jQuery = window.jQuery
      , _$ = window.$;
    return jQuery.noConflict = function(e) {
        return window.$ === jQuery && (window.$ = _$),
        e && window.jQuery === jQuery && (window.jQuery = _jQuery),
        jQuery
    }
    ,
    typeof noGlobal === strundefined && (window.jQuery = window.$ = jQuery),
    jQuery
}),
function() {
    var e = this
      , t = e._
      , n = {}
      , r = Array.prototype
      , i = Object.prototype
      , s = Function.prototype
      , o = r.push
      , u = r.slice
      , a = r.concat
      , f = i.toString
      , l = i.hasOwnProperty
      , c = r.forEach
      , h = r.map
      , p = r.reduce
      , d = r.reduceRight
      , v = r.filter
      , m = r.every
      , g = r.some
      , y = r.indexOf
      , b = r.lastIndexOf
      , w = Array.isArray
      , E = Object.keys
      , S = s.bind
      , x = function(e) {
        if (e instanceof x)
            return e;
        if (!(this instanceof x))
            return new x(e);
        this._wrapped = e
    };
    typeof exports != "undefined" ? (typeof module != "undefined" && module.exports && (exports = module.exports = x),
    exports._ = x) : e._ = x,
    x.VERSION = "1.6.0";
    var T = x.each = x.forEach = function(e, t, r) {
        if (e == null)
            return e;
        if (c && e.forEach === c)
            e.forEach(t, r);
        else if (e.length === +e.length) {
            for (var i = 0, s = e.length; i < s; i++)
                if (t.call(r, e[i], i, e) === n)
                    return
        } else {
            var o = x.keys(e);
            for (var i = 0, s = o.length; i < s; i++)
                if (t.call(r, e[o[i]], o[i], e) === n)
                    return
        }
        return e
    }
    ;
    x.map = x.collect = function(e, t, n) {
        var r = [];
        return e == null ? r : h && e.map === h ? e.map(t, n) : (T(e, function(e, i, s) {
            r.push(t.call(n, e, i, s))
        }),
        r)
    }
    ;
    var N = "Reduce of empty array with no initial value";
    x.reduce = x.foldl = x.inject = function(e, t, n, r) {
        var i = arguments.length > 2;
        e == null && (e = []);
        if (p && e.reduce === p)
            return r && (t = x.bind(t, r)),
            i ? e.reduce(t, n) : e.reduce(t);
        T(e, function(e, s, o) {
            i ? n = t.call(r, n, e, s, o) : (n = e,
            i = !0)
        });
        if (!i)
            throw new TypeError(N);
        return n
    }
    ,
    x.reduceRight = x.foldr = function(e, t, n, r) {
        var i = arguments.length > 2;
        e == null && (e = []);
        if (d && e.reduceRight === d)
            return r && (t = x.bind(t, r)),
            i ? e.reduceRight(t, n) : e.reduceRight(t);
        var s = e.length;
        if (s !== +s) {
            var o = x.keys(e);
            s = o.length
        }
        T(e, function(u, a, f) {
            a = o ? o[--s] : --s,
            i ? n = t.call(r, n, e[a], a, f) : (n = e[a],
            i = !0)
        });
        if (!i)
            throw new TypeError(N);
        return n
    }
    ,
    x.find = x.detect = function(e, t, n) {
        var r;
        return C(e, function(e, i, s) {
            if (t.call(n, e, i, s))
                return r = e,
                !0
        }),
        r
    }
    ,
    x.filter = x.select = function(e, t, n) {
        var r = [];
        return e == null ? r : v && e.filter === v ? e.filter(t, n) : (T(e, function(e, i, s) {
            t.call(n, e, i, s) && r.push(e)
        }),
        r)
    }
    ,
    x.reject = function(e, t, n) {
        return x.filter(e, function(e, r, i) {
            return !t.call(n, e, r, i)
        }, n)
    }
    ,
    x.every = x.all = function(e, t, r) {
        t || (t = x.identity);
        var i = !0;
        return e == null ? i : m && e.every === m ? e.every(t, r) : (T(e, function(e, s, o) {
            if (!(i = i && t.call(r, e, s, o)))
                return n
        }),
        !!i)
    }
    ;
    var C = x.some = x.any = function(e, t, r) {
        t || (t = x.identity);
        var i = !1;
        return e == null ? i : g && e.some === g ? e.some(t, r) : (T(e, function(e, s, o) {
            if (i || (i = t.call(r, e, s, o)))
                return n
        }),
        !!i)
    }
    ;
    x.contains = x.include = function(e, t) {
        return e == null ? !1 : y && e.indexOf === y ? e.indexOf(t) != -1 : C(e, function(e) {
            return e === t
        })
    }
    ,
    x.invoke = function(e, t) {
        var n = u.call(arguments, 2)
          , r = x.isFunction(t);
        return x.map(e, function(e) {
            return (r ? t : e[t]).apply(e, n)
        })
    }
    ,
    x.pluck = function(e, t) {
        return x.map(e, x.property(t))
    }
    ,
    x.where = function(e, t) {
        return x.filter(e, x.matches(t))
    }
    ,
    x.findWhere = function(e, t) {
        return x.find(e, x.matches(t))
    }
    ,
    x.max = function(e, t, n) {
        if (!t && x.isArray(e) && e[0] === +e[0] && e.length < 65535)
            return Math.max.apply(Math, e);
        var r = -Infinity
          , i = -Infinity;
        return T(e, function(e, s, o) {
            var u = t ? t.call(n, e, s, o) : e;
            u > i && (r = e,
            i = u)
        }),
        r
    }
    ,
    x.min = function(e, t, n) {
        if (!t && x.isArray(e) && e[0] === +e[0] && e.length < 65535)
            return Math.min.apply(Math, e);
        var r = Infinity
          , i = Infinity;
        return T(e, function(e, s, o) {
            var u = t ? t.call(n, e, s, o) : e;
            u < i && (r = e,
            i = u)
        }),
        r
    }
    ,
    x.shuffle = function(e) {
        var t, n = 0, r = [];
        return T(e, function(e) {
            t = x.random(n++),
            r[n - 1] = r[t],
            r[t] = e
        }),
        r
    }
    ,
    x.sample = function(e, t, n) {
        return t == null || n ? (e.length !== +e.length && (e = x.values(e)),
        e[x.random(e.length - 1)]) : x.shuffle(e).slice(0, Math.max(0, t))
    }
    ;
    var k = function(e) {
        return e == null ? x.identity : x.isFunction(e) ? e : x.property(e)
    };
    x.sortBy = function(e, t, n) {
        return t = k(t),
        x.pluck(x.map(e, function(e, r, i) {
            return {
                value: e,
                index: r,
                criteria: t.call(n, e, r, i)
            }
        }).sort(function(e, t) {
            var n = e.criteria
              , r = t.criteria;
            if (n !== r) {
                if (n > r || n === void 0)
                    return 1;
                if (n < r || r === void 0)
                    return -1
            }
            return e.index - t.index
        }), "value")
    }
    ;
    var L = function(e) {
        return function(t, n, r) {
            var i = {};
            return n = k(n),
            T(t, function(s, o) {
                var u = n.call(r, s, o, t);
                e(i, u, s)
            }),
            i
        }
    };
    x.groupBy = L(function(e, t, n) {
        x.has(e, t) ? e[t].push(n) : e[t] = [n]
    }),
    x.indexBy = L(function(e, t, n) {
        e[t] = n
    }),
    x.countBy = L(function(e, t) {
        x.has(e, t) ? e[t]++ : e[t] = 1
    }),
    x.sortedIndex = function(e, t, n, r) {
        n = k(n);
        var i = n.call(r, t)
          , s = 0
          , o = e.length;
        while (s < o) {
            var u = s + o >>> 1;
            n.call(r, e[u]) < i ? s = u + 1 : o = u
        }
        return s
    }
    ,
    x.toArray = function(e) {
        return e ? x.isArray(e) ? u.call(e) : e.length === +e.length ? x.map(e, x.identity) : x.values(e) : []
    }
    ,
    x.size = function(e) {
        return e == null ? 0 : e.length === +e.length ? e.length : x.keys(e).length
    }
    ,
    x.first = x.head = x.take = function(e, t, n) {
        return e == null ? void 0 : t == null || n ? e[0] : t < 0 ? [] : u.call(e, 0, t)
    }
    ,
    x.initial = function(e, t, n) {
        return u.call(e, 0, e.length - (t == null || n ? 1 : t))
    }
    ,
    x.last = function(e, t, n) {
        return e == null ? void 0 : t == null || n ? e[e.length - 1] : u.call(e, Math.max(e.length - t, 0))
    }
    ,
    x.rest = x.tail = x.drop = function(e, t, n) {
        return u.call(e, t == null || n ? 1 : t)
    }
    ,
    x.compact = function(e) {
        return x.filter(e, x.identity)
    }
    ;
    var A = function(e, t, n) {
        return t && x.every(e, x.isArray) ? a.apply(n, e) : (T(e, function(e) {
            x.isArray(e) || x.isArguments(e) ? t ? o.apply(n, e) : A(e, t, n) : n.push(e)
        }),
        n)
    };
    x.flatten = function(e, t) {
        return A(e, t, [])
    }
    ,
    x.without = function(e) {
        return x.difference(e, u.call(arguments, 1))
    }
    ,
    x.partition = function(e, t) {
        var n = []
          , r = [];
        return T(e, function(e) {
            (t(e) ? n : r).push(e)
        }),
        [n, r]
    }
    ,
    x.uniq = x.unique = function(e, t, n, r) {
        x.isFunction(t) && (r = n,
        n = t,
        t = !1);
        var i = n ? x.map(e, n, r) : e
          , s = []
          , o = [];
        return T(i, function(n, r) {
            if (t ? !r || o[o.length - 1] !== n : !x.contains(o, n))
                o.push(n),
                s.push(e[r])
        }),
        s
    }
    ,
    x.union = function() {
        return x.uniq(x.flatten(arguments, !0))
    }
    ,
    x.intersection = function(e) {
        var t = u.call(arguments, 1);
        return x.filter(x.uniq(e), function(e) {
            return x.every(t, function(t) {
                return x.contains(t, e)
            })
        })
    }
    ,
    x.difference = function(e) {
        var t = a.apply(r, u.call(arguments, 1));
        return x.filter(e, function(e) {
            return !x.contains(t, e)
        })
    }
    ,
    x.zip = function() {
        var e = x.max(x.pluck(arguments, "length").concat(0))
          , t = new Array(e);
        for (var n = 0; n < e; n++)
            t[n] = x.pluck(arguments, "" + n);
        return t
    }
    ,
    x.object = function(e, t) {
        if (e == null)
            return {};
        var n = {};
        for (var r = 0, i = e.length; r < i; r++)
            t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
        return n
    }
    ,
    x.indexOf = function(e, t, n) {
        if (e == null)
            return -1;
        var r = 0
          , i = e.length;
        if (n) {
            if (typeof n != "number")
                return r = x.sortedIndex(e, t),
                e[r] === t ? r : -1;
            r = n < 0 ? Math.max(0, i + n) : n
        }
        if (y && e.indexOf === y)
            return e.indexOf(t, n);
        for (; r < i; r++)
            if (e[r] === t)
                return r;
        return -1
    }
    ,
    x.lastIndexOf = function(e, t, n) {
        if (e == null)
            return -1;
        var r = n != null;
        if (b && e.lastIndexOf === b)
            return r ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
        var i = r ? n : e.length;
        while (i--)
            if (e[i] === t)
                return i;
        return -1
    }
    ,
    x.range = function(e, t, n) {
        arguments.length <= 1 && (t = e || 0,
        e = 0),
        n = arguments[2] || 1;
        var r = Math.max(Math.ceil((t - e) / n), 0)
          , i = 0
          , s = new Array(r);
        while (i < r)
            s[i++] = e,
            e += n;
        return s
    }
    ;
    var O = function() {};
    x.bind = function(e, t) {
        var n, r;
        if (S && e.bind === S)
            return S.apply(e, u.call(arguments, 1));
        if (!x.isFunction(e))
            throw new TypeError;
        return n = u.call(arguments, 2),
        r = function() {
            if (this instanceof r) {
                O.prototype = e.prototype;
                var i = new O;
                O.prototype = null;
                var s = e.apply(i, n.concat(u.call(arguments)));
                return Object(s) === s ? s : i
            }
            return e.apply(t, n.concat(u.call(arguments)))
        }
    }
    ,
    x.partial = function(e) {
        var t = u.call(arguments, 1);
        return function() {
            var n = 0
              , r = t.slice();
            for (var i = 0, s = r.length; i < s; i++)
                r[i] === x && (r[i] = arguments[n++]);
            while (n < arguments.length)
                r.push(arguments[n++]);
            return e.apply(this, r)
        }
    }
    ,
    x.bindAll = function(e) {
        var t = u.call(arguments, 1);
        if (t.length === 0)
            throw new Error("bindAll must be passed function names");
        return T(t, function(t) {
            e[t] = x.bind(e[t], e)
        }),
        e
    }
    ,
    x.memoize = function(e, t) {
        var n = {};
        return t || (t = x.identity),
        function() {
            var r = t.apply(this, arguments);
            return x.has(n, r) ? n[r] : n[r] = e.apply(this, arguments)
        }
    }
    ,
    x.delay = function(e, t) {
        var n = u.call(arguments, 2);
        return setTimeout(function() {
            return e.apply(null, n)
        }, t)
    }
    ,
    x.defer = function(e) {
        return x.delay.apply(x, [e, 1].concat(u.call(arguments, 1)))
    }
    ,
    x.throttle = function(e, t, n) {
        var r, i, s, o = null, u = 0;
        n || (n = {});
        var a = function() {
            u = n.leading === !1 ? 0 : x.now(),
            o = null,
            s = e.apply(r, i),
            r = i = null
        };
        return function() {
            var f = x.now();
            !u && n.leading === !1 && (u = f);
            var l = t - (f - u);
            return r = this,
            i = arguments,
            l <= 0 ? (clearTimeout(o),
            o = null,
            u = f,
            s = e.apply(r, i),
            r = i = null) : !o && n.trailing !== !1 && (o = setTimeout(a, l)),
            s
        }
    }
    ,
    x.debounce = function(e, t, n) {
        var r, i, s, o, u, a = function() {
            var f = x.now() - o;
            f < t ? r = setTimeout(a, t - f) : (r = null,
            n || (u = e.apply(s, i),
            s = i = null))
        };
        return function() {
            s = this,
            i = arguments,
            o = x.now();
            var f = n && !r;
            return r || (r = setTimeout(a, t)),
            f && (u = e.apply(s, i),
            s = i = null),
            u
        }
    }
    ,
    x.once = function(e) {
        var t = !1, n;
        return function() {
            return t ? n : (t = !0,
            n = e.apply(this, arguments),
            e = null,
            n)
        }
    }
    ,
    x.wrap = function(e, t) {
        return x.partial(t, e)
    }
    ,
    x.compose = function() {
        var e = arguments;
        return function() {
            var t = arguments;
            for (var n = e.length - 1; n >= 0; n--)
                t = [e[n].apply(this, t)];
            return t[0]
        }
    }
    ,
    x.after = function(e, t) {
        return function() {
            if (--e < 1)
                return t.apply(this, arguments)
        }
    }
    ,
    x.keys = function(e) {
        if (!x.isObject(e))
            return [];
        if (E)
            return E(e);
        var t = [];
        for (var n in e)
            x.has(e, n) && t.push(n);
        return t
    }
    ,
    x.values = function(e) {
        var t = x.keys(e)
          , n = t.length
          , r = new Array(n);
        for (var i = 0; i < n; i++)
            r[i] = e[t[i]];
        return r
    }
    ,
    x.pairs = function(e) {
        var t = x.keys(e)
          , n = t.length
          , r = new Array(n);
        for (var i = 0; i < n; i++)
            r[i] = [t[i], e[t[i]]];
        return r
    }
    ,
    x.invert = function(e) {
        var t = {}
          , n = x.keys(e);
        for (var r = 0, i = n.length; r < i; r++)
            t[e[n[r]]] = n[r];
        return t
    }
    ,
    x.functions = x.methods = function(e) {
        var t = [];
        for (var n in e)
            x.isFunction(e[n]) && t.push(n);
        return t.sort()
    }
    ,
    x.extend = function(e) {
        return T(u.call(arguments, 1), function(t) {
            if (t)
                for (var n in t)
                    e[n] = t[n]
        }),
        e
    }
    ,
    x.pick = function(e) {
        var t = {}
          , n = a.apply(r, u.call(arguments, 1));
        return T(n, function(n) {
            n in e && (t[n] = e[n])
        }),
        t
    }
    ,
    x.omit = function(e) {
        var t = {}
          , n = a.apply(r, u.call(arguments, 1));
        for (var i in e)
            x.contains(n, i) || (t[i] = e[i]);
        return t
    }
    ,
    x.defaults = function(e) {
        return T(u.call(arguments, 1), function(t) {
            if (t)
                for (var n in t)
                    e[n] === void 0 && (e[n] = t[n])
        }),
        e
    }
    ,
    x.clone = function(e) {
        return x.isObject(e) ? x.isArray(e) ? e.slice() : x.extend({}, e) : e
    }
    ,
    x.tap = function(e, t) {
        return t(e),
        e
    }
    ;
    var M = function(e, t, n, r) {
        if (e === t)
            return e !== 0 || 1 / e == 1 / t;
        if (e == null || t == null)
            return e === t;
        e instanceof x && (e = e._wrapped),
        t instanceof x && (t = t._wrapped);
        var i = f.call(e);
        if (i != f.call(t))
            return !1;
        switch (i) {
        case "[object String]":
            return e == String(t);
        case "[object Number]":
            return e != +e ? t != +t : e == 0 ? 1 / e == 1 / t : e == +t;
        case "[object Date]":
        case "[object Boolean]":
            return +e == +t;
        case "[object RegExp]":
            return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
        }
        if (typeof e != "object" || typeof t != "object")
            return !1;
        var s = n.length;
        while (s--)
            if (n[s] == e)
                return r[s] == t;
        var o = e.constructor
          , u = t.constructor;
        if (o !== u && !(x.isFunction(o) && o instanceof o && x.isFunction(u) && u instanceof u) && "constructor"in e && "constructor"in t)
            return !1;
        n.push(e),
        r.push(t);
        var a = 0
          , l = !0;
        if (i == "[object Array]") {
            a = e.length,
            l = a == t.length;
            if (l)
                while (a--)
                    if (!(l = M(e[a], t[a], n, r)))
                        break
        } else {
            for (var c in e)
                if (x.has(e, c)) {
                    a++;
                    if (!(l = x.has(t, c) && M(e[c], t[c], n, r)))
                        break
                }
            if (l) {
                for (c in t)
                    if (x.has(t, c) && !(a--))
                        break;
                l = !a
            }
        }
        return n.pop(),
        r.pop(),
        l
    };
    x.isEqual = function(e, t) {
        return M(e, t, [], [])
    }
    ,
    x.isEmpty = function(e) {
        if (e == null)
            return !0;
        if (x.isArray(e) || x.isString(e))
            return e.length === 0;
        for (var t in e)
            if (x.has(e, t))
                return !1;
        return !0
    }
    ,
    x.isElement = function(e) {
        return !!e && e.nodeType === 1
    }
    ,
    x.isArray = w || function(e) {
        return f.call(e) == "[object Array]"
    }
    ,
    x.isObject = function(e) {
        return e === Object(e)
    }
    ,
    T(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(e) {
        x["is" + e] = function(t) {
            return f.call(t) == "[object " + e + "]"
        }
    }),
    x.isArguments(arguments) || (x.isArguments = function(e) {
        return !!e && !!x.has(e, "callee")
    }
    ),
    typeof /./ != "function" && (x.isFunction = function(e) {
        return typeof e == "function"
    }
    ),
    x.isFinite = function(e) {
        return isFinite(e) && !isNaN(parseFloat(e))
    }
    ,
    x.isNaN = function(e) {
        return x.isNumber(e) && e != +e
    }
    ,
    x.isBoolean = function(e) {
        return e === !0 || e === !1 || f.call(e) == "[object Boolean]"
    }
    ,
    x.isNull = function(e) {
        return e === null
    }
    ,
    x.isUndefined = function(e) {
        return e === void 0
    }
    ,
    x.has = function(e, t) {
        return l.call(e, t)
    }
    ,
    x.noConflict = function() {
        return e._ = t,
        this
    }
    ,
    x.identity = function(e) {
        return e
    }
    ,
    x.constant = function(e) {
        return function() {
            return e
        }
    }
    ,
    x.property = function(e) {
        return function(t) {
            return t[e]
        }
    }
    ,
    x.matches = function(e) {
        return function(t) {
            if (t === e)
                return !0;
            for (var n in e)
                if (e[n] !== t[n])
                    return !1;
            return !0
        }
    }
    ,
    x.times = function(e, t, n) {
        var r = Array(Math.max(0, e));
        for (var i = 0; i < e; i++)
            r[i] = t.call(n, i);
        return r
    }
    ,
    x.random = function(e, t) {
        return t == null && (t = e,
        e = 0),
        e + Math.floor(Math.random() * (t - e + 1))
    }
    ,
    x.now = Date.now || function() {
        return (new Date).getTime()
    }
    ;
    var _ = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;"
        }
    };
    _.unescape = x.invert(_.escape);
    var D = {
        escape: new RegExp("[" + x.keys(_.escape).join("") + "]","g"),
        unescape: new RegExp("(" + x.keys(_.unescape).join("|") + ")","g")
    };
    x.each(["escape", "unescape"], function(e) {
        x[e] = function(t) {
            return t == null ? "" : ("" + t).replace(D[e], function(t) {
                return _[e][t]
            })
        }
    }),
    x.result = function(e, t) {
        if (e == null)
            return void 0;
        var n = e[t];
        return x.isFunction(n) ? n.call(e) : n
    }
    ,
    x.mixin = function(e) {
        T(x.functions(e), function(t) {
            var n = x[t] = e[t];
            x.prototype[t] = function() {
                var e = [this._wrapped];
                return o.apply(e, arguments),
                F.call(this, n.apply(x, e))
            }
        })
    }
    ;
    var P = 0;
    x.uniqueId = function(e) {
        var t = ++P + "";
        return e ? e + t : t
    }
    ,
    x.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var H = /(.)^/
      , B = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "	": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }
      , j = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    x.template = function(e, t, n) {
        var r;
        n = x.defaults({}, n, x.templateSettings);
        var i = new RegExp([(n.escape || H).source, (n.interpolate || H).source, (n.evaluate || H).source].join("|") + "|$","g")
          , s = 0
          , o = "__p+='";
        e.replace(i, function(t, n, r, i, u) {
            return o += e.slice(s, u).replace(j, function(e) {
                return "\\" + B[e]
            }),
            n && (o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"),
            r && (o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'"),
            i && (o += "';\n" + i + "\n__p+='"),
            s = u + t.length,
            t
        }),
        o += "';\n",
        n.variable || (o = "with(obj||{}){\n" + o + "}\n"),
        o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
        try {
            r = new Function(n.variable || "obj","_",o)
        } catch (u) {
            throw u.source = o,
            u
        }
        if (t)
            return r(t, x);
        var a = function(e) {
            return r.call(this, e, x)
        };
        return a.source = "function(" + (n.variable || "obj") + "){\n" + o + "}",
        a
    }
    ,
    x.chain = function(e) {
        return x(e).chain()
    }
    ;
    var F = function(e) {
        return this._chain ? x(e).chain() : e
    };
    x.mixin(x),
    T(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
        var t = r[e];
        x.prototype[e] = function() {
            var n = this._wrapped;
            return t.apply(n, arguments),
            (e == "shift" || e == "splice") && n.length === 0 && delete n[0],
            F.call(this, n)
        }
    }),
    T(["concat", "join", "slice"], function(e) {
        var t = r[e];
        x.prototype[e] = function() {
            return F.call(this, t.apply(this._wrapped, arguments))
        }
    }),
    x.extend(x.prototype, {
        chain: function() {
            return this._chain = !0,
            this
        },
        value: function() {
            return this._wrapped
        }
    }),
    typeof define == "function" && define.amd && define("underscore", [], function() {
        return x
    })
}
.call(this);
if ("undefined" == typeof jQuery)
    throw new Error("Bootstrap's JavaScript requires jQuery");
+function(e) {
    "use strict";
    var t = e.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || t[0] > 3)
        throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery),
+function(e) {
    "use strict";
    function t() {
        var e = document.createElement("bootstrap")
          , t = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var n in t)
            if (void 0 !== e.style[n])
                return {
                    end: t[n]
                };
        return !1
    }
    e.fn.emulateTransitionEnd = function(t) {
        var n = !1
          , r = this;
        e(this).one("bsTransitionEnd", function() {
            n = !0
        });
        var i = function() {
            n || e(r).trigger(e.support.transition.end)
        };
        return setTimeout(i, t),
        this
    }
    ,
    e(function() {
        e.support.transition = t(),
        e.support.transition && (e.event.special.bsTransitionEnd = {
            bindType: e.support.transition.end,
            delegateType: e.support.transition.end,
            handle: function(t) {
                if (e(t.target).is(this))
                    return t.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery),
+function(e) {
    "use strict";
    function t(t) {
        return this.each(function() {
            var n = e(this)
              , i = n.data("bs.alert");
            i || n.data("bs.alert", i = new r(this)),
            "string" == typeof t && i[t].call(n)
        })
    }
    var n = '[data-dismiss="alert"]'
      , r = function(t) {
        e(t).on("click", n, this.close)
    };
    r.VERSION = "3.3.7",
    r.TRANSITION_DURATION = 150,
    r.prototype.close = function(t) {
        function n() {
            o.detach().trigger("closed.bs.alert").remove()
        }
        var i = e(this)
          , s = i.attr("data-target");
        s || (s = i.attr("href"),
        s = s && s.replace(/.*(?=#[^\s]*$)/, ""));
        var o = e("#" === s ? [] : s);
        t && t.preventDefault(),
        o.length || (o = i.closest(".alert")),
        o.trigger(t = e.Event("close.bs.alert")),
        t.isDefaultPrevented() || (o.removeClass("in"),
        e.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", n).emulateTransitionEnd(r.TRANSITION_DURATION) : n())
    }
    ;
    var i = e.fn.alert;
    e.fn.alert = t,
    e.fn.alert.Constructor = r,
    e.fn.alert.noConflict = function() {
        return e.fn.alert = i,
        this
    }
    ,
    e(document).on("click.bs.alert.data-api", n, r.prototype.close)
}(jQuery),
+function(e) {
    "use strict";
    function t(t) {
        return this.each(function() {
            var r = e(this)
              , i = r.data("bs.button")
              , s = "object" == typeof t && t;
            i || r.data("bs.button", i = new n(this,s)),
            "toggle" == t ? i.toggle() : t && i.setState(t)
        })
    }
    var n = function(t, r) {
        this.$element = e(t),
        this.options = e.extend({}, n.DEFAULTS, r),
        this.isLoading = !1
    };
    n.VERSION = "3.3.7",
    n.DEFAULTS = {
        loadingText: "loading..."
    },
    n.prototype.setState = function(t) {
        var n = "disabled"
          , r = this.$element
          , i = r.is("input") ? "val" : "html"
          , s = r.data();
        t += "Text",
        null == s.resetText && r.data("resetText", r[i]()),
        setTimeout(e.proxy(function() {
            r[i](null == s[t] ? this.options[t] : s[t]),
            "loadingText" == t ? (this.isLoading = !0,
            r.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1,
            r.removeClass(n).removeAttr(n).prop(n, !1))
        }, this), 0)
    }
    ,
    n.prototype.toggle = function() {
        var e = !0
          , t = this.$element.closest('[data-toggle="buttons"]');
        if (t.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (e = !1),
            t.find(".active").removeClass("active"),
            this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (e = !1),
            this.$element.toggleClass("active")),
            n.prop("checked", this.$element.hasClass("active")),
            e && n.trigger("change")
        } else
            this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
            this.$element.toggleClass("active")
    }
    ;
    var r = e.fn.button;
    e.fn.button = t,
    e.fn.button.Constructor = n,
    e.fn.button.noConflict = function() {
        return e.fn.button = r,
        this
    }
    ,
    e(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
        var r = e(n.target).closest(".btn");
        t.call(r, "toggle"),
        e(n.target).is('input[type="radio"], input[type="checkbox"]') || (n.preventDefault(),
        r.is("input,button") ? r.trigger("focus") : r.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        e(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
    })
}(jQuery),
+function(e) {
    "use strict";
    function t(t) {
        return this.each(function() {
            var r = e(this)
              , i = r.data("bs.carousel")
              , s = e.extend({}, n.DEFAULTS, r.data(), "object" == typeof t && t)
              , o = "string" == typeof t ? t : s.slide;
            i || r.data("bs.carousel", i = new n(this,s)),
            "number" == typeof t ? i.to(t) : o ? i[o]() : s.interval && i.pause().cycle()
        })
    }
    var n = function(t, n) {
        this.$element = e(t),
        this.$indicators = this.$element.find(".carousel-indicators"),
        this.options = n,
        this.paused = null,
        this.sliding = null,
        this.interval = null,
        this.$active = null,
        this.$items = null,
        this.options.keyboard && this.$element.on("keydown.bs.carousel", e.proxy(this.keydown, this)),
        "hover" == this.options.pause && !("ontouchstart"in document.documentElement) && this.$element.on("mouseenter.bs.carousel", e.proxy(this.pause, this)).on("mouseleave.bs.carousel", e.proxy(this.cycle, this))
    };
    n.VERSION = "3.3.7",
    n.TRANSITION_DURATION = 600,
    n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    },
    n.prototype.keydown = function(e) {
        if (!/input|textarea/i.test(e.target.tagName)) {
            switch (e.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
            }
            e.preventDefault()
        }
    }
    ,
    n.prototype.cycle = function(t) {
        return t || (this.paused = !1),
        this.interval && clearInterval(this.interval),
        this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)),
        this
    }
    ,
    n.prototype.getItemIndex = function(e) {
        return this.$items = e.parent().children(".item"),
        this.$items.index(e || this.$active)
    }
    ,
    n.prototype.getItemForDirection = function(e, t) {
        var n = this.getItemIndex(t)
          , r = "prev" == e && 0 === n || "next" == e && n == this.$items.length - 1;
        if (r && !this.options.wrap)
            return t;
        var i = "prev" == e ? -1 : 1
          , s = (n + i) % this.$items.length;
        return this.$items.eq(s)
    }
    ,
    n.prototype.to = function(e) {
        var t = this
          , n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(e > this.$items.length - 1 || e < 0))
            return this.sliding ? this.$element.one("slid.bs.carousel", function() {
                t.to(e)
            }) : n == e ? this.pause().cycle() : this.slide(e > n ? "next" : "prev", this.$items.eq(e))
    }
    ,
    n.prototype.pause = function(t) {
        return t || (this.paused = !0),
        this.$element.find(".next, .prev").length && e.support.transition && (this.$element.trigger(e.support.transition.end),
        this.cycle(!0)),
        this.interval = clearInterval(this.interval),
        this
    }
    ,
    n.prototype.next = function() {
        if (!this.sliding)
            return this.slide("next")
    }
    ,
    n.prototype.prev = function() {
        if (!this.sliding)
            return this.slide("prev")
    }
    ,
    n.prototype.slide = function(t, r) {
        var i = this.$element.find(".item.active")
          , s = r || this.getItemForDirection(t, i)
          , o = this.interval
          , u = "next" == t ? "left" : "right"
          , f = this;
        if (s.hasClass("active"))
            return this.sliding = !1;
        var l = s[0]
          , h = e.Event("slide.bs.carousel", {
            relatedTarget: l,
            direction: u
        });
        if (this.$element.trigger(h),
        !h.isDefaultPrevented()) {
            if (this.sliding = !0,
            o && this.pause(),
            this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var p = e(this.$indicators.children()[this.getItemIndex(s)]);
                p && p.addClass("active")
            }
            var d = e.Event("slid.bs.carousel", {
                relatedTarget: l,
                direction: u
            });
            return e.support.transition && this.$element.hasClass("slide") ? (s.addClass(t),
            s[0].offsetWidth,
            i.addClass(u),
            s.addClass(u),
            i.one("bsTransitionEnd", function() {
                s.removeClass([t, u].join(" ")).addClass("active"),
                i.removeClass(["active", u].join(" ")),
                f.sliding = !1,
                setTimeout(function() {
                    f.$element.trigger(d)
                }, 0)
            }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (i.removeClass("active"),
            s.addClass("active"),
            this.sliding = !1,
            this.$element.trigger(d)),
            o && this.cycle(),
            this
        }
    }
    ;
    var r = e.fn.carousel;
    e.fn.carousel = t,
    e.fn.carousel.Constructor = n,
    e.fn.carousel.noConflict = function() {
        return e.fn.carousel = r,
        this
    }
    ;
    var i = function(n) {
        var r, i = e(this), s = e(i.attr("data-target") || (r = i.attr("href")) && r.replace(/.*(?=#[^\s]+$)/, ""));
        if (s.hasClass("carousel")) {
            var o = e.extend({}, s.data(), i.data())
              , u = i.attr("data-slide-to");
            u && (o.interval = !1),
            t.call(s, o),
            u && s.data("bs.carousel").to(u),
            n.preventDefault()
        }
    };
    e(document).on("click.bs.carousel.data-api", "[data-slide]", i).on("click.bs.carousel.data-api", "[data-slide-to]", i),
    e(window).on("load", function() {
        e('[data-ride="carousel"]').each(function() {
            var n = e(this);
            t.call(n, n.data())
        })
    })
}(jQuery),
+function(e) {
    "use strict";
    function t(t) {
        var n, r = t.attr("data-target") || (n = t.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return e(r)
    }
    function n(t) {
        return this.each(function() {
            var n = e(this)
              , i = n.data("bs.collapse")
              , s = e.extend({}, r.DEFAULTS, n.data(), "object" == typeof t && t);
            !i && s.toggle && /show|hide/.test(t) && (s.toggle = !1),
            i || n.data("bs.collapse", i = new r(this,s)),
            "string" == typeof t && i[t]()
        })
    }
    var r = function(t, n) {
        this.$element = e(t),
        this.options = e.extend({}, r.DEFAULTS, n),
        this.$trigger = e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'),
        this.transitioning = null,
        this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle()
    };
    r.VERSION = "3.3.7",
    r.TRANSITION_DURATION = 350,
    r.DEFAULTS = {
        toggle: !0
    },
    r.prototype.dimension = function() {
        var e = this.$element.hasClass("width");
        return e ? "width" : "height"
    }
    ,
    r.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var t, i = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(i && i.length && (t = i.data("bs.collapse"),
            t && t.transitioning))) {
                var s = e.Event("show.bs.collapse");
                if (this.$element.trigger(s),
                !s.isDefaultPrevented()) {
                    i && i.length && (n.call(i, "hide"),
                    t || i.data("bs.collapse", null));
                    var o = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded", !0),
                    this.$trigger.removeClass("collapsed").attr("aria-expanded", !0),
                    this.transitioning = 1;
                    var u = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[o](""),
                        this.transitioning = 0,
                        this.$element.trigger("shown.bs.collapse")
                    };
                    if (!e.support.transition)
                        return u.call(this);
                    var f = e.camelCase(["scroll", o].join("-"));
                    this.$element.one("bsTransitionEnd", e.proxy(u, this)).emulateTransitionEnd(r.TRANSITION_DURATION)[o](this.$element[0][f])
                }
            }
        }
    }
    ,
    r.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var t = e.Event("hide.bs.collapse");
            if (this.$element.trigger(t),
            !t.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight,
                this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
                this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
                this.transitioning = 1;
                var i = function() {
                    this.transitioning = 0,
                    this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return e.support.transition ? void this.$element[n](0).one("bsTransitionEnd", e.proxy(i, this)).emulateTransitionEnd(r.TRANSITION_DURATION) : i.call(this)
            }
        }
    }
    ,
    r.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }
    ,
    r.prototype.getParent = function() {
        return e(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(e.proxy(function(n, r) {
            var i = e(r);
            this.addAriaAndCollapsedClass(t(i), i)
        }, this)).end()
    }
    ,
    r.prototype.addAriaAndCollapsedClass = function(e, t) {
        var n = e.hasClass("in");
        e.attr("aria-expanded", n),
        t.toggleClass("collapsed", !n).attr("aria-expanded", n)
    }
    ;
    var i = e.fn.collapse;
    e.fn.collapse = n,
    e.fn.collapse.Constructor = r,
    e.fn.collapse.noConflict = function() {
        return e.fn.collapse = i,
        this
    }
    ,
    e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(r) {
        var i = e(this);
        i.attr("data-target") || r.preventDefault();
        var s = t(i)
          , o = s.data("bs.collapse")
          , u = o ? "toggle" : i.data();
        n.call(s, u)
    })
}(jQuery),
+function(e) {
    "use strict";
    function t(t) {
        var n = t.attr("data-target");
        n || (n = t.attr("href"),
        n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var r = n && e(n);
        return r && r.length ? r : t.parent()
    }
    function n(n) {
        n && 3 === n.which || (e(i).remove(),
        e(s).each(function() {
            var r = e(this)
              , i = t(r)
              , s = {
                relatedTarget: this
            };
            i.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && e.contains(i[0], n.target) || (i.trigger(n = e.Event("hide.bs.dropdown", s)),
            n.isDefaultPrevented() || (r.attr("aria-expanded", "false"),
            i.removeClass("open").trigger(e.Event("hidden.bs.dropdown", s)))))
        }))
    }
    function r(t) {
        return this.each(function() {
            var n = e(this)
              , r = n.data("bs.dropdown");
            r || n.data("bs.dropdown", r = new o(this)),
            "string" == typeof t && r[t].call(n)
        })
    }
    var i = ".dropdown-backdrop"
      , s = '[data-toggle="dropdown"]'
      , o = function(t) {
        e(t).on("click.bs.dropdown", this.toggle)
    };
    o.VERSION = "3.3.7",
    o.prototype.toggle = function(r) {
        var i = e(this);
        if (!i.is(".disabled, :disabled")) {
            var s = t(i)
              , o = s.hasClass("open");
            if (n(),
            !o) {
                "ontouchstart"in document.documentElement && !s.closest(".navbar-nav").length && e(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(e(this)).on("click", n);
                var u = {
                    relatedTarget: this
                };
                if (s.trigger(r = e.Event("show.bs.dropdown", u)),
                r.isDefaultPrevented())
                    return;
                i.trigger("focus").attr("aria-expanded", "true"),
                s.toggleClass("open").trigger(e.Event("shown.bs.dropdown", u))
            }
            return !1
        }
    }
    ,
    o.prototype.keydown = function(n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
            var r = e(this);
            if (n.preventDefault(),
            n.stopPropagation(),
            !r.is(".disabled, :disabled")) {
                var i = t(r)
                  , o = i.hasClass("open");
                if (!o && 27 != n.which || o && 27 == n.which)
                    return 27 == n.which && i.find(s).trigger("focus"),
                    r.trigger("click");
                var u = " li:not(.disabled):visible a"
                  , l = i.find(".dropdown-menu" + u);
                if (l.length) {
                    var c = l.index(n.target);
                    38 == n.which && c > 0 && c--,
                    40 == n.which && c < l.length - 1 && c++,
                    ~c || (c = 0),
                    l.eq(c).trigger("focus")
                }
            }
        }
    }
    ;
    var u = e.fn.dropdown;
    e.fn.dropdown = r,
    e.fn.dropdown.Constructor = o,
    e.fn.dropdown.noConflict = function() {
        return e.fn.dropdown = u,
        this
    }
    ,
    e(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
        e.stopPropagation()
    }).on("click.bs.dropdown.data-api", s, o.prototype.toggle).on("keydown.bs.dropdown.data-api", s, o.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", o.prototype.keydown)
}(jQuery),
+function(e) {
    "use strict";
    function t(t, r) {
        return this.each(function() {
            var i = e(this)
              , s = i.data("bs.modal")
              , o = e.extend({}, n.DEFAULTS, i.data(), "object" == typeof t && t);
            s || i.data("bs.modal", s = new n(this,o)),
            "string" == typeof t ? s[t](r) : o.show && s.show(r)
        })
    }
    var n = function(t, n) {
        this.options = n,
        this.$body = e(document.body),
        this.$element = e(t),
        this.$dialog = this.$element.find(".modal-dialog"),
        this.$backdrop = null,
        this.isShown = null,
        this.originalBodyPad = null,
        this.scrollbarWidth = 0,
        this.ignoreBackdropClick = !1,
        this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.3.7",
    n.TRANSITION_DURATION = 300,
    n.BACKDROP_TRANSITION_DURATION = 150,
    n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    },
    n.prototype.toggle = function(e) {
        return this.isShown ? this.hide() : this.show(e)
    }
    ,
    n.prototype.show = function(t) {
        var r = this
          , i = e.Event("show.bs.modal", {
            relatedTarget: t
        });
        this.$element.trigger(i),
        this.isShown || i.isDefaultPrevented() || (this.isShown = !0,
        this.checkScrollbar(),
        this.setScrollbar(),
        this.$body.addClass("modal-open"),
        this.escape(),
        this.resize(),
        this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)),
        this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            r.$element.one("mouseup.dismiss.bs.modal", function(t) {
                e(t.target).is(r.$element) && (r.ignoreBackdropClick = !0)
            })
        }),
        this.backdrop(function() {
            var i = e.support.transition && r.$element.hasClass("fade");
            r.$element.parent().length || r.$element.appendTo(r.$body),
            r.$element.show().scrollTop(0),
            r.adjustDialog(),
            i && r.$element[0].offsetWidth,
            r.$element.addClass("in"),
            r.enforceFocus();
            var s = e.Event("shown.bs.modal", {
                relatedTarget: t
            });
            i ? r.$dialog.one("bsTransitionEnd", function() {
                r.$element.trigger("focus").trigger(s)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : r.$element.trigger("focus").trigger(s)
        }))
    }
    ,
    n.prototype.hide = function(t) {
        t && t.preventDefault(),
        t = e.Event("hide.bs.modal"),
        this.$element.trigger(t),
        this.isShown && !t.isDefaultPrevented() && (this.isShown = !1,
        this.escape(),
        this.resize(),
        e(document).off("focusin.bs.modal"),
        this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),
        this.$dialog.off("mousedown.dismiss.bs.modal"),
        e.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", e.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    }
    ,
    n.prototype.enforceFocus = function() {
        e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function(e) {
            document === e.target || this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
        }, this))
    }
    ,
    n.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", e.proxy(function(e) {
            27 == e.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }
    ,
    n.prototype.resize = function() {
        this.isShown ? e(window).on("resize.bs.modal", e.proxy(this.handleUpdate, this)) : e(window).off("resize.bs.modal")
    }
    ,
    n.prototype.hideModal = function() {
        var e = this;
        this.$element.hide(),
        this.backdrop(function() {
            e.$body.removeClass("modal-open"),
            e.resetAdjustments(),
            e.resetScrollbar(),
            e.$element.trigger("hidden.bs.modal")
        })
    }
    ,
    n.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(),
        this.$backdrop = null
    }
    ,
    n.prototype.backdrop = function(t) {
        var r = this
          , i = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var s = e.support.transition && i;
            if (this.$backdrop = e(document.createElement("div")).addClass("modal-backdrop " + i).appendTo(this.$body),
            this.$element.on("click.dismiss.bs.modal", e.proxy(function(e) {
                return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
            }, this)),
            s && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !t)
                return;
            s ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : t()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var o = function() {
                r.removeBackdrop(),
                t && t()
            };
            e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", o).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : o()
        } else
            t && t()
    }
    ,
    n.prototype.handleUpdate = function() {
        this.adjustDialog()
    }
    ,
    n.prototype.adjustDialog = function() {
        var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ""
        })
    }
    ,
    n.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }
    ,
    n.prototype.checkScrollbar = function() {
        var e = window.innerWidth;
        if (!e) {
            var t = document.documentElement.getBoundingClientRect();
            e = t.right - Math.abs(t.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < e,
        this.scrollbarWidth = this.measureScrollbar()
    }
    ,
    n.prototype.setScrollbar = function() {
        var e = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "",
        this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth)
    }
    ,
    n.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }
    ,
    n.prototype.measureScrollbar = function() {
        var e = document.createElement("div");
        e.className = "modal-scrollbar-measure",
        this.$body.append(e);
        var t = e.offsetWidth - e.clientWidth;
        return this.$body[0].removeChild(e),
        t
    }
    ;
    var r = e.fn.modal;
    e.fn.modal = t,
    e.fn.modal.Constructor = n,
    e.fn.modal.noConflict = function() {
        return e.fn.modal = r,
        this
    }
    ,
    e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
        var r = e(this)
          , i = r.attr("href")
          , s = e(r.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, ""))
          , o = s.data("bs.modal") ? "toggle" : e.extend({
            remote: !/#/.test(i) && i
        }, s.data(), r.data());
        r.is("a") && n.preventDefault(),
        s.one("show.bs.modal", function(e) {
            e.isDefaultPrevented() || s.one("hidden.bs.modal", function() {
                r.is(":visible") && r.trigger("focus")
            })
        }),
        t.call(s, o, this)
    })
}(jQuery),
+function(e) {
    "use strict";
    function t(t) {
        return this.each(function() {
            var r = e(this)
              , i = r.data("bs.tooltip")
              , s = "object" == typeof t && t;
            !i && /destroy|hide/.test(t) || (i || r.data("bs.tooltip", i = new n(this,s)),
            "string" == typeof t && i[t]())
        })
    }
    var n = function(e, t) {
        this.type = null,
        this.options = null,
        this.enabled = null,
        this.timeout = null,
        this.hoverState = null,
        this.$element = null,
        this.inState = null,
        this.init("tooltip", e, t)
    };
    n.VERSION = "3.3.7",
    n.TRANSITION_DURATION = 150,
    n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    },
    n.prototype.init = function(t, n, r) {
        if (this.enabled = !0,
        this.type = t,
        this.$element = e(n),
        this.options = this.getOptions(r),
        this.$viewport = this.options.viewport && e(e.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport),
        this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        },
        this.$element[0]instanceof document.constructor && !this.options.selector)
            throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var i = this.options.trigger.split(" "), s = i.length; s--; ) {
            var o = i[s];
            if ("click" == o)
                this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
            else if ("manual" != o) {
                var u = "hover" == o ? "mouseenter" : "focusin"
                  , f = "hover" == o ? "mouseleave" : "focusout";
                this.$element.on(u + "." + this.type, this.options.selector, e.proxy(this.enter, this)),
                this.$element.on(f + "." + this.type, this.options.selector, e.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = e.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }
    ,
    n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }
    ,
    n.prototype.getOptions = function(t) {
        return t = e.extend({}, this.getDefaults(), this.$element.data(), t),
        t.delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }),
        t
    }
    ,
    n.prototype.getDelegateOptions = function() {
        var t = {}
          , n = this.getDefaults();
        return this._options && e.each(this._options, function(e, r) {
            n[e] != r && (t[e] = r)
        }),
        t
    }
    ,
    n.prototype.enter = function(t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(t.currentTarget,this.getDelegateOptions()),
        e(t.currentTarget).data("bs." + this.type, n)),
        t instanceof e.Event && (n.inState["focusin" == t.type ? "focus" : "hover"] = !0),
        n.tip().hasClass("in") || "in" == n.hoverState ? void (n.hoverState = "in") : (clearTimeout(n.timeout),
        n.hoverState = "in",
        n.options.delay && n.options.delay.show ? void (n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show())
    }
    ,
    n.prototype.isInStateTrue = function() {
        for (var e in this.inState)
            if (this.inState[e])
                return !0;
        return !1
    }
    ,
    n.prototype.leave = function(t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        if (n || (n = new this.constructor(t.currentTarget,this.getDelegateOptions()),
        e(t.currentTarget).data("bs." + this.type, n)),
        t instanceof e.Event && (n.inState["focusout" == t.type ? "focus" : "hover"] = !1),
        !n.isInStateTrue())
            return clearTimeout(n.timeout),
            n.hoverState = "out",
            n.options.delay && n.options.delay.hide ? void (n.timeout = setTimeout(function() {
                "out" == n.hoverState && n.hide()
            }, n.options.delay.hide)) : n.hide()
    }
    ,
    n.prototype.show = function() {
        var t = e.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(t);
            var r = e.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (t.isDefaultPrevented() || !r)
                return;
            var i = this
              , s = this.tip()
              , o = this.getUID(this.type);
            this.setContent(),
            s.attr("id", o),
            this.$element.attr("aria-describedby", o),
            this.options.animation && s.addClass("fade");
            var u = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement
              , f = /\s?auto?\s?/i
              , l = f.test(u);
            l && (u = u.replace(f, "") || "top"),
            s.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(u).data("bs." + this.type, this),
            this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element),
            this.$element.trigger("inserted.bs." + this.type);
            var h = this.getPosition()
              , p = s[0].offsetWidth
              , d = s[0].offsetHeight;
            if (l) {
                var v = u
                  , m = this.getPosition(this.$viewport);
                u = "bottom" == u && h.bottom + d > m.bottom ? "top" : "top" == u && h.top - d < m.top ? "bottom" : "right" == u && h.right + p > m.width ? "left" : "left" == u && h.left - p < m.left ? "right" : u,
                s.removeClass(v).addClass(u)
            }
            var g = this.getCalculatedOffset(u, h, p, d);
            this.applyPlacement(g, u);
            var y = function() {
                var e = i.hoverState;
                i.$element.trigger("shown.bs." + i.type),
                i.hoverState = null,
                "out" == e && i.leave(i)
            };
            e.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", y).emulateTransitionEnd(n.TRANSITION_DURATION) : y()
        }
    }
    ,
    n.prototype.applyPlacement = function(t, n) {
        var r = this.tip()
          , i = r[0].offsetWidth
          , s = r[0].offsetHeight
          , o = parseInt(r.css("margin-top"), 10)
          , u = parseInt(r.css("margin-left"), 10);
        isNaN(o) && (o = 0),
        isNaN(u) && (u = 0),
        t.top += o,
        t.left += u,
        e.offset.setOffset(r[0], e.extend({
            using: function(e) {
                r.css({
                    top: Math.round(e.top),
                    left: Math.round(e.left)
                })
            }
        }, t), 0),
        r.addClass("in");
        var f = r[0].offsetWidth
          , l = r[0].offsetHeight;
        "top" == n && l != s && (t.top = t.top + s - l);
        var c = this.getViewportAdjustedDelta(n, t, f, l);
        c.left ? t.left += c.left : t.top += c.top;
        var h = /top|bottom/.test(n)
          , p = h ? 2 * c.left - i + f : 2 * c.top - s + l
          , d = h ? "offsetWidth" : "offsetHeight";
        r.offset(t),
        this.replaceArrow(p, r[0][d], h)
    }
    ,
    n.prototype.replaceArrow = function(e, t, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - e / t) + "%").css(n ? "top" : "left", "")
    }
    ,
    n.prototype.setContent = function() {
        var e = this.tip()
          , t = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t),
        e.removeClass("fade in top bottom left right")
    }
    ,
    n.prototype.hide = function(t) {
        function r() {
            "in" != i.hoverState && s.detach(),
            i.$element && i.$element.removeAttr("aria-describedby").trigger("hidden.bs." + i.type),
            t && t()
        }
        var i = this
          , s = e(this.$tip)
          , o = e.Event("hide.bs." + this.type);
        if (this.$element.trigger(o),
        !o.isDefaultPrevented())
            return s.removeClass("in"),
            e.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", r).emulateTransitionEnd(n.TRANSITION_DURATION) : r(),
            this.hoverState = null,
            this
    }
    ,
    n.prototype.fixTitle = function() {
        var e = this.$element;
        (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
    }
    ,
    n.prototype.hasContent = function() {
        return this.getTitle()
    }
    ,
    n.prototype.getPosition = function(t) {
        t = t || this.$element;
        var n = t[0]
          , r = "BODY" == n.tagName
          , i = n.getBoundingClientRect();
        null == i.width && (i = e.extend({}, i, {
            width: i.right - i.left,
            height: i.bottom - i.top
        }));
        var s = window.SVGElement && n instanceof window.SVGElement
          , o = r ? {
            top: 0,
            left: 0
        } : s ? null : t.offset()
          , u = {
            scroll: r ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
        }
          , f = r ? {
            width: e(window).width(),
            height: e(window).height()
        } : null;
        return e.extend({}, i, u, f, o)
    }
    ,
    n.prototype.getCalculatedOffset = function(e, t, n, r) {
        return "bottom" == e ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - n / 2
        } : "top" == e ? {
            top: t.top - r,
            left: t.left + t.width / 2 - n / 2
        } : "left" == e ? {
            top: t.top + t.height / 2 - r / 2,
            left: t.left - n
        } : {
            top: t.top + t.height / 2 - r / 2,
            left: t.left + t.width
        }
    }
    ,
    n.prototype.getViewportAdjustedDelta = function(e, t, n, r) {
        var i = {
            top: 0,
            left: 0
        };
        if (!this.$viewport)
            return i;
        var s = this.options.viewport && this.options.viewport.padding || 0
          , o = this.getPosition(this.$viewport);
        if (/right|left/.test(e)) {
            var u = t.top - s - o.scroll
              , a = t.top + s - o.scroll + r;
            u < o.top ? i.top = o.top - u : a > o.top + o.height && (i.top = o.top + o.height - a)
        } else {
            var f = t.left - s
              , l = t.left + s + n;
            f < o.left ? i.left = o.left - f : l > o.right && (i.left = o.left + o.width - l)
        }
        return i
    }
    ,
    n.prototype.getTitle = function() {
        var e, t = this.$element, n = this.options;
        return e = t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
    }
    ,
    n.prototype.getUID = function(e) {
        do
            e += ~~(1e6 * Math.random());
        while (document.getElementById(e));return e
    }
    ,
    n.prototype.tip = function() {
        if (!this.$tip && (this.$tip = e(this.options.template),
        1 != this.$tip.length))
            throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }
    ,
    n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }
    ,
    n.prototype.enable = function() {
        this.enabled = !0
    }
    ,
    n.prototype.disable = function() {
        this.enabled = !1
    }
    ,
    n.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }
    ,
    n.prototype.toggle = function(t) {
        var n = this;
        t && (n = e(t.currentTarget).data("bs." + this.type),
        n || (n = new this.constructor(t.currentTarget,this.getDelegateOptions()),
        e(t.currentTarget).data("bs." + this.type, n))),
        t ? (n.inState.click = !n.inState.click,
        n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }
    ,
    n.prototype.destroy = function() {
        var e = this;
        clearTimeout(this.timeout),
        this.hide(function() {
            e.$element.off("." + e.type).removeData("bs." + e.type),
            e.$tip && e.$tip.detach(),
            e.$tip = null,
            e.$arrow = null,
            e.$viewport = null,
            e.$element = null
        })
    }
    ;
    var r = e.fn.tooltip;
    e.fn.tooltip = t,
    e.fn.tooltip.Constructor = n,
    e.fn.tooltip.noConflict = function() {
        return e.fn.tooltip = r,
        this
    }
}(jQuery),
+function(e) {
    "use strict";
    function t(t) {
        return this.each(function() {
            var r = e(this)
              , i = r.data("bs.popover")
              , s = "object" == typeof t && t;
            !i && /destroy|hide/.test(t) || (i || r.data("bs.popover", i = new n(this,s)),
            "string" == typeof t && i[t]())
        })
    }
    var n = function(e, t) {
        this.init("popover", e, t)
    };
    if (!e.fn.tooltip)
        throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.3.7",
    n.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }),
    n.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype),
    n.prototype.constructor = n,
    n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }
    ,
    n.prototype.setContent = function() {
        var e = this.tip()
          , t = this.getTitle()
          , n = this.getContent();
        e.find(".popover-title")[this.options.html ? "html" : "text"](t),
        e.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n),
        e.removeClass("fade top bottom left right in"),
        e.find(".popover-title").html() || e.find(".popover-title").hide()
    }
    ,
    n.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }
    ,
    n.prototype.getContent = function() {
        var e = this.$element
          , t = this.options;
        return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
    }
    ,
    n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }
    ;
    var r = e.fn.popover;
    e.fn.popover = t,
    e.fn.popover.Constructor = n,
    e.fn.popover.noConflict = function() {
        return e.fn.popover = r,
        this
    }
}(jQuery),
+function(e) {
    "use strict";
    function t(n, r) {
        this.$body = e(document.body),
        this.$scrollElement = e(e(n).is(document.body) ? window : n),
        this.options = e.extend({}, t.DEFAULTS, r),
        this.selector = (this.options.target || "") + " .nav li > a",
        this.offsets = [],
        this.targets = [],
        this.activeTarget = null,
        this.scrollHeight = 0,
        this.$scrollElement.on("scroll.bs.scrollspy", e.proxy(this.process, this)),
        this.refresh(),
        this.process()
    }
    function n(n) {
        return this.each(function() {
            var r = e(this)
              , i = r.data("bs.scrollspy")
              , s = "object" == typeof n && n;
            i || r.data("bs.scrollspy", i = new t(this,s)),
            "string" == typeof n && i[n]()
        })
    }
    t.VERSION = "3.3.7",
    t.DEFAULTS = {
        offset: 10
    },
    t.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }
    ,
    t.prototype.refresh = function() {
        var t = this
          , n = "offset"
          , r = 0;
        this.offsets = [],
        this.targets = [],
        this.scrollHeight = this.getScrollHeight(),
        e.isWindow(this.$scrollElement[0]) || (n = "position",
        r = this.$scrollElement.scrollTop()),
        this.$body.find(this.selector).map(function() {
            var t = e(this)
              , i = t.data("target") || t.attr("href")
              , s = /^#./.test(i) && e(i);
            return s && s.length && s.is(":visible") && [[s[n]().top + r, i]] || null
        }).sort(function(e, t) {
            return e[0] - t[0]
        }).each(function() {
            t.offsets.push(this[0]),
            t.targets.push(this[1])
        })
    }
    ,
    t.prototype.process = function() {
        var e, t = this.$scrollElement.scrollTop() + this.options.offset, n = this.getScrollHeight(), r = this.options.offset + n - this.$scrollElement.height(), i = this.offsets, s = this.targets, o = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(),
        t >= r)
            return o != (e = s[s.length - 1]) && this.activate(e);
        if (o && t < i[0])
            return this.activeTarget = null,
            this.clear();
        for (e = i.length; e--; )
            o != s[e] && t >= i[e] && (void 0 === i[e + 1] || t < i[e + 1]) && this.activate(s[e])
    }
    ,
    t.prototype.activate = function(t) {
        this.activeTarget = t,
        this.clear();
        var n = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]'
          , r = e(n).parents("li").addClass("active");
        r.parent(".dropdown-menu").length && (r = r.closest("li.dropdown").addClass("active")),
        r.trigger("activate.bs.scrollspy")
    }
    ,
    t.prototype.clear = function() {
        e(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    }
    ;
    var r = e.fn.scrollspy;
    e.fn.scrollspy = n,
    e.fn.scrollspy.Constructor = t,
    e.fn.scrollspy.noConflict = function() {
        return e.fn.scrollspy = r,
        this
    }
    ,
    e(window).on("load.bs.scrollspy.data-api", function() {
        e('[data-spy="scroll"]').each(function() {
            var t = e(this);
            n.call(t, t.data())
        })
    })
}(jQuery),
+function(e) {
    "use strict";
    function t(t) {
        return this.each(function() {
            var r = e(this)
              , i = r.data("bs.tab");
            i || r.data("bs.tab", i = new n(this)),
            "string" == typeof t && i[t]()
        })
    }
    var n = function(t) {
        this.element = e(t)
    };
    n.VERSION = "3.3.7",
    n.TRANSITION_DURATION = 150,
    n.prototype.show = function() {
        var t = this.element
          , n = t.closest("ul:not(.dropdown-menu)")
          , r = t.data("target");
        if (r || (r = t.attr("href"),
        r = r && r.replace(/.*(?=#[^\s]*$)/, "")),
        !t.parent("li").hasClass("active")) {
            var i = n.find(".active:last a")
              , s = e.Event("hide.bs.tab", {
                relatedTarget: t[0]
            })
              , o = e.Event("show.bs.tab", {
                relatedTarget: i[0]
            });
            if (i.trigger(s),
            t.trigger(o),
            !o.isDefaultPrevented() && !s.isDefaultPrevented()) {
                var u = e(r);
                this.activate(t.closest("li"), n),
                this.activate(u, u.parent(), function() {
                    i.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: t[0]
                    }),
                    t.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: i[0]
                    })
                })
            }
        }
    }
    ,
    n.prototype.activate = function(t, r, i) {
        function s() {
            o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1),
            t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0),
            u ? (t[0].offsetWidth,
            t.addClass("in")) : t.removeClass("fade"),
            t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0),
            i && i()
        }
        var o = r.find("> .active")
          , u = i && e.support.transition && (o.length && o.hasClass("fade") || !!r.find("> .fade").length);
        o.length && u ? o.one("bsTransitionEnd", s).emulateTransitionEnd(n.TRANSITION_DURATION) : s(),
        o.removeClass("in")
    }
    ;
    var r = e.fn.tab;
    e.fn.tab = t,
    e.fn.tab.Constructor = n,
    e.fn.tab.noConflict = function() {
        return e.fn.tab = r,
        this
    }
    ;
    var i = function(n) {
        n.preventDefault(),
        t.call(e(this), "show")
    };
    e(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
}(jQuery),
+function(e) {
    "use strict";
    function t(t) {
        return this.each(function() {
            var r = e(this)
              , i = r.data("bs.affix")
              , s = "object" == typeof t && t;
            i || r.data("bs.affix", i = new n(this,s)),
            "string" == typeof t && i[t]()
        })
    }
    var n = function(t, r) {
        this.options = e.extend({}, n.DEFAULTS, r),
        this.$target = e(this.options.target).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)),
        this.$element = e(t),
        this.affixed = null,
        this.unpin = null,
        this.pinnedOffset = null,
        this.checkPosition()
    };
    n.VERSION = "3.3.7",
    n.RESET = "affix affix-top affix-bottom",
    n.DEFAULTS = {
        offset: 0,
        target: window
    },
    n.prototype.getState = function(e, t, n, r) {
        var i = this.$target.scrollTop()
          , s = this.$element.offset()
          , o = this.$target.height();
        if (null != n && "top" == this.affixed)
            return i < n && "top";
        if ("bottom" == this.affixed)
            return null != n ? !(i + this.unpin <= s.top) && "bottom" : !(i + o <= e - r) && "bottom";
        var u = null == this.affixed
          , a = u ? i : s.top
          , f = u ? o : t;
        return null != n && i <= n ? "top" : null != r && a + f >= e - r && "bottom"
    }
    ,
    n.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset)
            return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var e = this.$target.scrollTop()
          , t = this.$element.offset();
        return this.pinnedOffset = t.top - e
    }
    ,
    n.prototype.checkPositionWithEventLoop = function() {
        setTimeout(e.proxy(this.checkPosition, this), 1)
    }
    ,
    n.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var t = this.$element.height()
              , r = this.options.offset
              , i = r.top
              , s = r.bottom
              , o = Math.max(e(document).height(), e(document.body).height());
            "object" != typeof r && (s = i = r),
            "function" == typeof i && (i = r.top(this.$element)),
            "function" == typeof s && (s = r.bottom(this.$element));
            var u = this.getState(o, t, i, s);
            if (this.affixed != u) {
                null != this.unpin && this.$element.css("top", "");
                var f = "affix" + (u ? "-" + u : "")
                  , l = e.Event(f + ".bs.affix");
                if (this.$element.trigger(l),
                l.isDefaultPrevented())
                    return;
                this.affixed = u,
                this.unpin = "bottom" == u ? this.getPinnedOffset() : null,
                this.$element.removeClass(n.RESET).addClass(f).trigger(f.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == u && this.$element.offset({
                top: o - t - s
            })
        }
    }
    ;
    var r = e.fn.affix;
    e.fn.affix = t,
    e.fn.affix.Constructor = n,
    e.fn.affix.noConflict = function() {
        return e.fn.affix = r,
        this
    }
    ,
    e(window).on("load", function() {
        e('[data-spy="affix"]').each(function() {
            var n = e(this)
              , r = n.data();
            r.offset = r.offset || {},
            null != r.offsetBottom && (r.offset.bottom = r.offsetBottom),
            null != r.offsetTop && (r.offset.top = r.offsetTop),
            t.call(n, r)
        })
    })
}(jQuery),
define("bootstrap", function() {}),
function(e, t) {
    if (typeof define == "function" && define.amd)
        define("backbone", ["underscore", "jquery", "exports"], function(n, r, i) {
            e.Backbone = t(e, i, n, r)
        });
    else if (typeof exports != "undefined") {
        var n = require("underscore");
        t(e, exports, n)
    } else
        e.Backbone = t(e, {}, e._, e.jQuery || e.Zepto || e.ender || e.$)
}(this, function(e, t, n, r) {
    var i = e.Backbone
      , s = []
      , o = s.push
      , u = s.slice
      , a = s.splice;
    t.VERSION = "1.1.2",
    t.$ = r,
    t.noConflict = function() {
        return e.Backbone = i,
        this
    }
    ,
    t.emulateHTTP = !1,
    t.emulateJSON = !1;
    var f = t.Events = {
        on: function(e, t, n) {
            if (!c(this, "on", e, [t, n]) || !t)
                return this;
            this._events || (this._events = {});
            var r = this._events[e] || (this._events[e] = []);
            return r.push({
                callback: t,
                context: n,
                ctx: n || this
            }),
            this
        },
        once: function(e, t, r) {
            if (!c(this, "once", e, [t, r]) || !t)
                return this;
            var i = this
              , s = n.once(function() {
                i.off(e, s),
                t.apply(this, arguments)
            });
            return s._callback = t,
            this.on(e, s, r)
        },
        off: function(e, t, r) {
            var i, s, o, u, a, f, l, h;
            if (!this._events || !c(this, "off", e, [t, r]))
                return this;
            if (!e && !t && !r)
                return this._events = void 0,
                this;
            u = e ? [e] : n.keys(this._events);
            for (a = 0,
            f = u.length; a < f; a++) {
                e = u[a];
                if (o = this._events[e]) {
                    this._events[e] = i = [];
                    if (t || r)
                        for (l = 0,
                        h = o.length; l < h; l++)
                            s = o[l],
                            (t && t !== s.callback && t !== s.callback._callback || r && r !== s.context) && i.push(s);
                    i.length || delete this._events[e]
                }
            }
            return this
        },
        trigger: function(e) {
            if (!this._events)
                return this;
            var t = u.call(arguments, 1);
            if (!c(this, "trigger", e, t))
                return this;
            var n = this._events[e]
              , r = this._events.all;
            return n && h(n, t),
            r && h(r, arguments),
            this
        },
        stopListening: function(e, t, r) {
            var i = this._listeningTo;
            if (!i)
                return this;
            var s = !t && !r;
            !r && typeof t == "object" && (r = this),
            e && ((i = {})[e._listenId] = e);
            for (var o in i)
                e = i[o],
                e.off(t, r, this),
                (s || n.isEmpty(e._events)) && delete this._listeningTo[o];
            return this
        }
    }
      , l = /\s+/
      , c = function(e, t, n, r) {
        if (!n)
            return !0;
        if (typeof n == "object") {
            for (var i in n)
                e[t].apply(e, [i, n[i]].concat(r));
            return !1
        }
        if (l.test(n)) {
            var s = n.split(l);
            for (var o = 0, u = s.length; o < u; o++)
                e[t].apply(e, [s[o]].concat(r));
            return !1
        }
        return !0
    }
      , h = function(e, t) {
        var n, r = -1, i = e.length, s = t[0], o = t[1], u = t[2];
        switch (t.length) {
        case 0:
            while (++r < i)
                (n = e[r]).callback.call(n.ctx);
            return;
        case 1:
            while (++r < i)
                (n = e[r]).callback.call(n.ctx, s);
            return;
        case 2:
            while (++r < i)
                (n = e[r]).callback.call(n.ctx, s, o);
            return;
        case 3:
            while (++r < i)
                (n = e[r]).callback.call(n.ctx, s, o, u);
            return;
        default:
            while (++r < i)
                (n = e[r]).callback.apply(n.ctx, t);
            return
        }
    }
      , p = {
        listenTo: "on",
        listenToOnce: "once"
    };
    n.each(p, function(e, t) {
        f[t] = function(t, r, i) {
            var s = this._listeningTo || (this._listeningTo = {})
              , o = t._listenId || (t._listenId = n.uniqueId("l"));
            return s[o] = t,
            !i && typeof r == "object" && (i = this),
            t[e](r, i, this),
            this
        }
    }),
    f.bind = f.on,
    f.unbind = f.off,
    n.extend(t, f);
    var d = t.Model = function(e, t) {
        var r = e || {};
        t || (t = {}),
        this.cid = n.uniqueId("c"),
        this.attributes = {},
        t.collection && (this.collection = t.collection),
        t.parse && (r = this.parse(r, t) || {}),
        r = n.defaults({}, r, n.result(this, "defaults")),
        this.set(r, t),
        this.changed = {},
        this.initialize.apply(this, arguments)
    }
    ;
    n.extend(d.prototype, f, {
        changed: null,
        validationError: null,
        idAttribute: "id",
        initialize: function() {},
        toJSON: function(e) {
            return n.clone(this.attributes)
        },
        sync: function() {
            return t.sync.apply(this, arguments)
        },
        get: function(e) {
            return this.attributes[e]
        },
        escape: function(e) {
            return n.escape(this.get(e))
        },
        has: function(e) {
            return this.get(e) != null
        },
        set: function(e, t, r) {
            var i, s, o, u, a, f, l, c;
            if (e == null)
                return this;
            typeof e == "object" ? (s = e,
            r = t) : (s = {})[e] = t,
            r || (r = {});
            if (!this._validate(s, r))
                return !1;
            o = r.unset,
            a = r.silent,
            u = [],
            f = this._changing,
            this._changing = !0,
            f || (this._previousAttributes = n.clone(this.attributes),
            this.changed = {}),
            c = this.attributes,
            l = this._previousAttributes,
            this.idAttribute in s && (this.id = s[this.idAttribute]);
            for (i in s)
                t = s[i],
                n.isEqual(c[i], t) || u.push(i),
                n.isEqual(l[i], t) ? delete this.changed[i] : this.changed[i] = t,
                o ? delete c[i] : c[i] = t;
            if (!a) {
                u.length && (this._pending = r);
                for (var h = 0, p = u.length; h < p; h++)
                    this.trigger("change:" + u[h], this, c[u[h]], r)
            }
            if (f)
                return this;
            if (!a)
                while (this._pending)
                    r = this._pending,
                    this._pending = !1,
                    this.trigger("change", this, r);
            return this._pending = !1,
            this._changing = !1,
            this
        },
        unset: function(e, t) {
            return this.set(e, void 0, n.extend({}, t, {
                unset: !0
            }))
        },
        clear: function(e) {
            var t = {};
            for (var r in this.attributes)
                t[r] = void 0;
            return this.set(t, n.extend({}, e, {
                unset: !0
            }))
        },
        hasChanged: function(e) {
            return e == null ? !n.isEmpty(this.changed) : n.has(this.changed, e)
        },
        changedAttributes: function(e) {
            if (!e)
                return this.hasChanged() ? n.clone(this.changed) : !1;
            var t, r = !1, i = this._changing ? this._previousAttributes : this.attributes;
            for (var s in e) {
                if (n.isEqual(i[s], t = e[s]))
                    continue;
                (r || (r = {}))[s] = t
            }
            return r
        },
        previous: function(e) {
            return e == null || !this._previousAttributes ? null : this._previousAttributes[e]
        },
        previousAttributes: function() {
            return n.clone(this._previousAttributes)
        },
        fetch: function(e) {
            e = e ? n.clone(e) : {},
            e.parse === void 0 && (e.parse = !0);
            var t = this
              , r = e.success;
            return e.success = function(n) {
                if (!t.set(t.parse(n, e), e))
                    return !1;
                r && r(t, n, e),
                t.trigger("sync", t, n, e)
            }
            ,
            I(this, e),
            this.sync("read", this, e)
        },
        save: function(e, t, r) {
            var i, s, o, u = this.attributes;
            e == null || typeof e == "object" ? (i = e,
            r = t) : (i = {})[e] = t,
            r = n.extend({
                validate: !0
            }, r);
            if (i && !r.wait) {
                if (!this.set(i, r))
                    return !1
            } else if (!this._validate(i, r))
                return !1;
            i && r.wait && (this.attributes = n.extend({}, u, i)),
            r.parse === void 0 && (r.parse = !0);
            var a = this
              , f = r.success;
            return r.success = function(e) {
                a.attributes = u;
                var t = a.parse(e, r);
                r.wait && (t = n.extend(i || {}, t));
                if (n.isObject(t) && !a.set(t, r))
                    return !1;
                f && f(a, e, r),
                a.trigger("sync", a, e, r)
            }
            ,
            I(this, r),
            s = this.isNew() ? "create" : r.patch ? "patch" : "update",
            s === "patch" && (r.attrs = i),
            o = this.sync(s, this, r),
            i && r.wait && (this.attributes = u),
            o
        },
        destroy: function(e) {
            e = e ? n.clone(e) : {};
            var t = this
              , r = e.success
              , i = function() {
                t.trigger("destroy", t, t.collection, e)
            };
            e.success = function(n) {
                (e.wait || t.isNew()) && i(),
                r && r(t, n, e),
                t.isNew() || t.trigger("sync", t, n, e)
            }
            ;
            if (this.isNew())
                return e.success(),
                !1;
            I(this, e);
            var s = this.sync("delete", this, e);
            return e.wait || i(),
            s
        },
        url: function() {
            var e = n.result(this, "urlRoot") || n.result(this.collection, "url") || F();
            return this.isNew() ? e : e.replace(/([^\/])$/, "$1/") + encodeURIComponent(this.id)
        },
        parse: function(e, t) {
            return e
        },
        clone: function() {
            return new this.constructor(this.attributes)
        },
        isNew: function() {
            return !this.has(this.idAttribute)
        },
        isValid: function(e) {
            return this._validate({}, n.extend(e || {}, {
                validate: !0
            }))
        },
        _validate: function(e, t) {
            if (!t.validate || !this.validate)
                return !0;
            e = n.extend({}, this.attributes, e);
            var r = this.validationError = this.validate(e, t) || null;
            return r ? (this.trigger("invalid", this, r, n.extend(t, {
                validationError: r
            })),
            !1) : !0
        }
    });
    var v = ["keys", "values", "pairs", "invert", "pick", "omit"];
    n.each(v, function(e) {
        d.prototype[e] = function() {
            var t = u.call(arguments);
            return t.unshift(this.attributes),
            n[e].apply(n, t)
        }
    });
    var m = t.Collection = function(e, t) {
        t || (t = {}),
        t.model && (this.model = t.model),
        t.comparator !== void 0 && (this.comparator = t.comparator),
        this._reset(),
        this.initialize.apply(this, arguments),
        e && this.reset(e, n.extend({
            silent: !0
        }, t))
    }
      , g = {
        add: !0,
        remove: !0,
        merge: !0
    }
      , y = {
        add: !0,
        remove: !1
    };
    n.extend(m.prototype, f, {
        model: d,
        initialize: function() {},
        toJSON: function(e) {
            return this.map(function(t) {
                return t.toJSON(e)
            })
        },
        sync: function() {
            return t.sync.apply(this, arguments)
        },
        add: function(e, t) {
            return this.set(e, n.extend({
                merge: !1
            }, t, y))
        },
        remove: function(e, t) {
            var r = !n.isArray(e);
            e = r ? [e] : n.clone(e),
            t || (t = {});
            var i, s, o, u;
            for (i = 0,
            s = e.length; i < s; i++) {
                u = e[i] = this.get(e[i]);
                if (!u)
                    continue;
                delete this._byId[u.id],
                delete this._byId[u.cid],
                o = this.indexOf(u),
                this.models.splice(o, 1),
                this.length--,
                t.silent || (t.index = o,
                u.trigger("remove", u, this, t)),
                this._removeReference(u, t)
            }
            return r ? e[0] : e
        },
        set: function(e, t) {
            t = n.defaults({}, t, g),
            t.parse && (e = this.parse(e, t));
            var r = !n.isArray(e);
            e = r ? e ? [e] : [] : n.clone(e);
            var i, s, o, u, a, f, l, c = t.at, h = this.model, p = this.comparator && c == null && t.sort !== !1, v = n.isString(this.comparator) ? this.comparator : null, m = [], y = [], b = {}, w = t.add, E = t.merge, S = t.remove, x = !p && w && S ? [] : !1;
            for (i = 0,
            s = e.length; i < s; i++) {
                a = e[i] || {},
                a instanceof d ? o = u = a : o = a[h.prototype.idAttribute || "id"];
                if (f = this.get(o))
                    S && (b[f.cid] = !0),
                    E && (a = a === u ? u.attributes : a,
                    t.parse && (a = f.parse(a, t)),
                    f.set(a, t),
                    p && !l && f.hasChanged(v) && (l = !0)),
                    e[i] = f;
                else if (w) {
                    u = e[i] = this._prepareModel(a, t);
                    if (!u)
                        continue;
                    m.push(u),
                    this._addReference(u, t)
                }
                u = f || u,
                x && (u.isNew() || !b[u.id]) && x.push(u),
                b[u.id] = !0
            }
            if (S) {
                for (i = 0,
                s = this.length; i < s; ++i)
                    b[(u = this.models[i]).cid] || y.push(u);
                y.length && this.remove(y, t)
            }
            if (m.length || x && x.length) {
                p && (l = !0),
                this.length += m.length;
                if (c != null)
                    for (i = 0,
                    s = m.length; i < s; i++)
                        this.models.splice(c + i, 0, m[i]);
                else {
                    x && (this.models.length = 0);
                    var T = x || m;
                    for (i = 0,
                    s = T.length; i < s; i++)
                        this.models.push(T[i])
                }
            }
            l && this.sort({
                silent: !0
            });
            if (!t.silent) {
                for (i = 0,
                s = m.length; i < s; i++)
                    (u = m[i]).trigger("add", u, this, t);
                (l || x && x.length) && this.trigger("sort", this, t)
            }
            return r ? e[0] : e
        },
        reset: function(e, t) {
            t || (t = {});
            for (var r = 0, i = this.models.length; r < i; r++)
                this._removeReference(this.models[r], t);
            return t.previousModels = this.models,
            this._reset(),
            e = this.add(e, n.extend({
                silent: !0
            }, t)),
            t.silent || this.trigger("reset", this, t),
            e
        },
        push: function(e, t) {
            return this.add(e, n.extend({
                at: this.length
            }, t))
        },
        pop: function(e) {
            var t = this.at(this.length - 1);
            return this.remove(t, e),
            t
        },
        unshift: function(e, t) {
            return this.add(e, n.extend({
                at: 0
            }, t))
        },
        shift: function(e) {
            var t = this.at(0);
            return this.remove(t, e),
            t
        },
        slice: function() {
            return u.apply(this.models, arguments)
        },
        get: function(e) {
            return e == null ? void 0 : this._byId[e] || this._byId[e.id] || this._byId[e.cid]
        },
        at: function(e) {
            return this.models[e]
        },
        where: function(e, t) {
            return n.isEmpty(e) ? t ? void 0 : [] : this[t ? "find" : "filter"](function(t) {
                for (var n in e)
                    if (e[n] !== t.get(n))
                        return !1;
                return !0
            })
        },
        findWhere: function(e) {
            return this.where(e, !0)
        },
        sort: function(e) {
            if (!this.comparator)
                throw new Error("Cannot sort a set without a comparator");
            return e || (e = {}),
            n.isString(this.comparator) || this.comparator.length === 1 ? this.models = this.sortBy(this.comparator, this) : this.models.sort(n.bind(this.comparator, this)),
            e.silent || this.trigger("sort", this, e),
            this
        },
        pluck: function(e) {
            return n.invoke(this.models, "get", e)
        },
        fetch: function(e) {
            e = e ? n.clone(e) : {},
            e.parse === void 0 && (e.parse = !0);
            var t = e.success
              , r = this;
            return e.success = function(n) {
                var i = e.reset ? "reset" : "set";
                r[i](n, e),
                t && t(r, n, e),
                r.trigger("sync", r, n, e)
            }
            ,
            I(this, e),
            this.sync("read", this, e)
        },
        create: function(e, t) {
            t = t ? n.clone(t) : {};
            if (!(e = this._prepareModel(e, t)))
                return !1;
            t.wait || this.add(e, t);
            var r = this
              , i = t.success;
            return t.success = function(e, n) {
                t.wait && r.add(e, t),
                i && i(e, n, t)
            }
            ,
            e.save(null, t),
            e
        },
        parse: function(e, t) {
            return e
        },
        clone: function() {
            return new this.constructor(this.models)
        },
        _reset: function() {
            this.length = 0,
            this.models = [],
            this._byId = {}
        },
        _prepareModel: function(e, t) {
            if (e instanceof d)
                return e;
            t = t ? n.clone(t) : {},
            t.collection = this;
            var r = new this.model(e,t);
            return r.validationError ? (this.trigger("invalid", this, r.validationError, t),
            !1) : r
        },
        _addReference: function(e, t) {
            this._byId[e.cid] = e,
            e.id != null && (this._byId[e.id] = e),
            e.collection || (e.collection = this),
            e.on("all", this._onModelEvent, this)
        },
        _removeReference: function(e, t) {
            this === e.collection && delete e.collection,
            e.off("all", this._onModelEvent, this)
        },
        _onModelEvent: function(e, t, n, r) {
            if ((e === "add" || e === "remove") && n !== this)
                return;
            e === "destroy" && this.remove(t, r),
            t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)],
            t.id != null && (this._byId[t.id] = t)),
            this.trigger.apply(this, arguments)
        }
    });
    var b = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain", "sample"];
    n.each(b, function(e) {
        m.prototype[e] = function() {
            var t = u.call(arguments);
            return t.unshift(this.models),
            n[e].apply(n, t)
        }
    });
    var w = ["groupBy", "countBy", "sortBy", "indexBy"];
    n.each(w, function(e) {
        m.prototype[e] = function(t, r) {
            var i = n.isFunction(t) ? t : function(e) {
                return e.get(t)
            }
            ;
            return n[e](this.models, i, r)
        }
    });
    var E = t.View = function(e) {
        this.cid = n.uniqueId("view"),
        e || (e = {}),
        n.extend(this, n.pick(e, x)),
        this._ensureElement(),
        this.initialize.apply(this, arguments),
        this.delegateEvents()
    }
      , S = /^(\S+)\s*(.*)$/
      , x = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
    n.extend(E.prototype, f, {
        tagName: "div",
        $: function(e) {
            return this.$el.find(e)
        },
        initialize: function() {},
        render: function() {
            return this
        },
        remove: function() {
            return this.$el.remove(),
            this.stopListening(),
            this
        },
        setElement: function(e, n) {
            return this.$el && this.undelegateEvents(),
            this.$el = e instanceof t.$ ? e : t.$(e),
            this.el = this.$el[0],
            n !== !1 && this.delegateEvents(),
            this
        },
        delegateEvents: function(e) {
            if (!e && !(e = n.result(this, "events")))
                return this;
            this.undelegateEvents();
            for (var t in e) {
                var r = e[t];
                n.isFunction(r) || (r = this[e[t]]);
                if (!r)
                    continue;
                var i = t.match(S)
                  , s = i[1]
                  , o = i[2];
                r = n.bind(r, this),
                s += ".delegateEvents" + this.cid,
                o === "" ? this.$el.on(s, r) : this.$el.on(s, o, r)
            }
            return this
        },
        undelegateEvents: function() {
            return this.$el.off(".delegateEvents" + this.cid),
            this
        },
        _ensureElement: function() {
            if (!this.el) {
                var e = n.extend({}, n.result(this, "attributes"));
                this.id && (e.id = n.result(this, "id")),
                this.className && (e["class"] = n.result(this, "className"));
                var r = t.$("<" + n.result(this, "tagName") + ">").attr(e);
                this.setElement(r, !1)
            } else
                this.setElement(n.result(this, "el"), !1)
        }
    }),
    t.sync = function(e, r, i) {
        var s = N[e];
        n.defaults(i || (i = {}), {
            emulateHTTP: t.emulateHTTP,
            emulateJSON: t.emulateJSON
        });
        var o = {
            type: s,
            dataType: "json"
        };
        i.url || (o.url = n.result(r, "url") || F()),
        i.data == null && r && (e === "create" || e === "update" || e === "patch") && (o.contentType = "application/json",
        o.data = JSON.stringify(i.attrs || r.toJSON(i))),
        i.emulateJSON && (o.contentType = "application/x-www-form-urlencoded",
        o.data = o.data ? {
            model: o.data
        } : {});
        if (i.emulateHTTP && (s === "PUT" || s === "DELETE" || s === "PATCH")) {
            o.type = "POST",
            i.emulateJSON && (o.data._method = s);
            var u = i.beforeSend;
            i.beforeSend = function(e) {
                e.setRequestHeader("X-HTTP-Method-Override", s);
                if (u)
                    return u.apply(this, arguments)
            }
        }
        o.type !== "GET" && !i.emulateJSON && (o.processData = !1),
        o.type === "PATCH" && T && (o.xhr = function() {
            return new ActiveXObject("Microsoft.XMLHTTP")
        }
        );
        var a = i.xhr = t.ajax(n.extend(o, i));
        return r.trigger("request", r, a, i),
        a
    }
    ;
    var T = typeof window != "undefined" && !!window.ActiveXObject && (!window.XMLHttpRequest || !(new XMLHttpRequest).dispatchEvent)
      , N = {
        create: "POST",
        update: "PUT",
        patch: "PATCH",
        "delete": "DELETE",
        read: "GET"
    };
    t.ajax = function() {
        return t.$.ajax.apply(t.$, arguments)
    }
    ;
    var C = t.Router = function(e) {
        e || (e = {}),
        e.routes && (this.routes = e.routes),
        this._bindRoutes(),
        this.initialize.apply(this, arguments)
    }
      , k = /\((.*?)\)/g
      , L = /(\(\?)?:\w+/g
      , A = /\*\w+/g
      , O = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    n.extend(C.prototype, f, {
        initialize: function() {},
        route: function(e, r, i) {
            n.isRegExp(e) || (e = this._routeToRegExp(e)),
            n.isFunction(r) && (i = r,
            r = ""),
            i || (i = this[r]);
            var s = this;
            return t.history.route(e, function(n) {
                var o = s._extractParameters(e, n);
                s.execute(i, o),
                s.trigger.apply(s, ["route:" + r].concat(o)),
                s.trigger("route", r, o),
                t.history.trigger("route", s, r, o)
            }),
            this
        },
        execute: function(e, t) {
            e && e.apply(this, t)
        },
        navigate: function(e, n) {
            return t.history.navigate(e, n),
            this
        },
        _bindRoutes: function() {
            if (!this.routes)
                return;
            this.routes = n.result(this, "routes");
            var e, t = n.keys(this.routes);
            while ((e = t.pop()) != null)
                this.route(e, this.routes[e])
        },
        _routeToRegExp: function(e) {
            return e = e.replace(O, "\\$&").replace(k, "(?:$1)?").replace(L, function(e, t) {
                return t ? e : "([^/?]+)"
            }).replace(A, "([^?]*?)"),
            new RegExp("^" + e + "(?:\\?([\\s\\S]*))?$")
        },
        _extractParameters: function(e, t) {
            var r = e.exec(t).slice(1);
            return n.map(r, function(e, t) {
                return t === r.length - 1 ? e || null : e ? decodeURIComponent(e) : null
            })
        }
    });
    var M = t.History = function() {
        this.handlers = [],
        n.bindAll(this, "checkUrl"),
        typeof window != "undefined" && (this.location = window.location,
        this.history = window.history)
    }
      , _ = /^[#\/]|\s+$/g
      , D = /^\/+|\/+$/g
      , P = /msie [\w.]+/
      , H = /\/$/
      , B = /#.*$/;
    M.started = !1,
    n.extend(M.prototype, f, {
        interval: 50,
        atRoot: function() {
            return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root
        },
        getHash: function(e) {
            var t = (e || this).location.href.match(/#(.*)$/);
            return t ? t[1] : ""
        },
        getFragment: function(e, t) {
            if (e == null)
                if (this._hasPushState || !this._wantsHashChange || t) {
                    e = decodeURI(this.location.pathname + this.location.search);
                    var n = this.root.replace(H, "");
                    e.indexOf(n) || (e = e.slice(n.length))
                } else
                    e = this.getHash();
            return e.replace(_, "")
        },
        start: function(e) {
            if (M.started)
                throw new Error("Backbone.history has already been started");
            M.started = !0,
            this.options = n.extend({
                root: "/"
            }, this.options, e),
            this.root = this.options.root,
            this._wantsHashChange = this.options.hashChange !== !1,
            this._wantsPushState = !!this.options.pushState,
            this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
            var r = this.getFragment()
              , i = document.documentMode
              , s = P.exec(navigator.userAgent.toLowerCase()) && (!i || i <= 7);
            this.root = ("/" + this.root + "/").replace(D, "/");
            if (s && this._wantsHashChange) {
                var o = t.$('<iframe src="javascript:0" tabindex="-1">');
                this.iframe = o.hide().appendTo("body")[0].contentWindow,
                this.navigate(r)
            }
            this._hasPushState ? t.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange"in window && !s ? t.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)),
            this.fragment = r;
            var u = this.location;
            if (this._wantsHashChange && this._wantsPushState) {
                if (!this._hasPushState && !this.atRoot())
                    return this.fragment = this.getFragment(null, !0),
                    this.location.replace(this.root + "#" + this.fragment),
                    !0;
                this._hasPushState && this.atRoot() && u.hash && (this.fragment = this.getHash().replace(_, ""),
                this.history.replaceState({}, document.title, this.root + this.fragment))
            }
            if (!this.options.silent)
                return this.loadUrl()
        },
        stop: function() {
            t.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl),
            this._checkUrlInterval && clearInterval(this._checkUrlInterval),
            M.started = !1
        },
        route: function(e, t) {
            this.handlers.unshift({
                route: e,
                callback: t
            })
        },
        checkUrl: function(e) {
            var t = this.getFragment();
            t === this.fragment && this.iframe && (t = this.getFragment(this.getHash(this.iframe)));
            if (t === this.fragment)
                return !1;
            this.iframe && this.navigate(t),
            this.loadUrl()
        },
        loadUrl: function(e) {
            return e = this.fragment = this.getFragment(e),
            n.any(this.handlers, function(t) {
                if (t.route.test(e))
                    return t.callback(e),
                    !0
            })
        },
        navigate: function(e, t) {
            if (!M.started)
                return !1;
            if (!t || t === !0)
                t = {
                    trigger: !!t
                };
            var n = this.root + (e = this.getFragment(e || ""));
            e = e.replace(B, "");
            if (this.fragment === e)
                return;
            this.fragment = e,
            e === "" && n !== "/" && (n = n.slice(0, -1));
            if (this._hasPushState)
                this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, n);
            else {
                if (!this._wantsHashChange)
                    return this.location.assign(n);
                this._updateHash(this.location, e, t.replace),
                this.iframe && e !== this.getFragment(this.getHash(this.iframe)) && (t.replace || this.iframe.document.open().close(),
                this._updateHash(this.iframe.location, e, t.replace))
            }
            if (t.trigger)
                return this.loadUrl(e)
        },
        _updateHash: function(e, t, n) {
            if (n) {
                var r = e.href.replace(/(javascript:|#).*$/, "");
                e.replace(r + "#" + t)
            } else
                e.hash = "#" + t
        }
    }),
    t.history = new M;
    var j = function(e, t) {
        var r = this, i;
        e && n.has(e, "constructor") ? i = e.constructor : i = function() {
            return r.apply(this, arguments)
        }
        ,
        n.extend(i, r, t);
        var s = function() {
            this.constructor = i
        };
        return s.prototype = r.prototype,
        i.prototype = new s,
        e && n.extend(i.prototype, e),
        i.__super__ = r.prototype,
        i
    };
    d.extend = m.extend = C.extend = E.extend = M.extend = j;
    var F = function() {
        throw new Error('A "url" property or function must be specified')
    }
      , I = function(e, t) {
        var n = t.error;
        t.error = function(r) {
            n && n(e, r, t),
            e.trigger("error", e, r, t)
        }
    };
    return t
}),
function() {
    function n(e) {
        t.set(e)
    }
    function R(e) {
        if (100 != e.get(In) && si(nt(e, Cn)) % 1e4 >= 100 * rt(e, In))
            throw "abort"
    }
    function U(e) {
        if (C(nt(e, An)))
            throw "abort"
    }
    function z() {
        var e = T.location.protocol;
        if ("http:" != e && "https:" != e)
            throw "abort"
    }
    function W(e) {
        try {
            x.navigator.sendBeacon ? n(42) : x.XMLHttpRequest && "withCredentials"in new x.XMLHttpRequest && n(40)
        } catch (t) {}
        e.set(an, i(e), !0),
        e.set(St, rt(e, St) + 1);
        var r = [];
        et.map(function(t, n) {
            if (n.F) {
                var i = e.get(t);
                void 0 != i && i != n.defaultValue && ("boolean" == typeof i && (i *= 1),
                r.push(n.F + "=" + p("" + i)))
            }
        }),
        r.push("z=" + G()),
        e.set(bt, r.join("&"), !0)
    }
    function X(e) {
        var t = nt(e, Un) || _() + "/collect"
          , n = nt(e, Et);
        !n && e.get(wt) && (n = "beacon");
        if (n) {
            var r = nt(e, bt)
              , i = e.get(yt)
              , i = i || h;
            "image" == n ? H(t, r, i) : "xhr" == n && B(t, r, i) || "beacon" == n && j(t, r, i) || P(t, r, i)
        } else
            P(t, nt(e, bt), e.get(yt));
        t = e.get(An),
        t = I(t),
        n = t.hitcount,
        t.hitcount = n ? n + 1 : 1,
        t = e.get(An),
        delete I(t).pending_experiments,
        e.set(yt, h, !0)
    }
    function V(e) {
        (x.gaData = x.gaData || {}).expId && e.set(Yt, (x.gaData = x.gaData || {}).expId),
        (x.gaData = x.gaData || {}).expVar && e.set(Zt, (x.gaData = x.gaData || {}).expVar);
        var t, n = e.get(An);
        if (n = I(n).pending_experiments) {
            var r = [];
            for (t in n)
                n.hasOwnProperty(t) && n[t] && r.push(encodeURIComponent(t) + "." + encodeURIComponent(n[t]));
            t = r.join("!")
        } else
            t = void 0;
        t && e.set(en, t, !0)
    }
    function $() {
        if (x.navigator && "preview" == x.navigator.loadPurpose)
            throw "abort"
    }
    function J(e) {
        var t = x.gaDevIds;
        u(t) && 0 != t.length && e.set("&did", t.join(","), !0)
    }
    function K(e) {
        if (!e.get(An))
            throw "abort"
    }
    function Y(e) {
        var t = rt(e, sn);
        500 <= t && n(15);
        var r = nt(e, gt);
        if ("transaction" != r && "item" != r) {
            var r = rt(e, un)
              , i = (new Date).getTime()
              , s = rt(e, on);
            0 == s && e.set(on, i),
            s = Math.round(2 * (i - s) / 1e3),
            0 < s && (r = Math.min(r + s, 20),
            e.set(on, i));
            if (0 >= r)
                throw "abort";
            e.set(un, --r)
        }
        e.set(sn, ++t)
    }
    function Wn(e, t, r, i) {
        t[e] = function() {
            try {
                return i && n(i),
                r.apply(this, arguments)
            } catch (t) {
                throw F("exc", e, t && t.name),
                t
            }
        }
    }
    function $n() {
        var e, t, n;
        if ((n = (n = x.navigator) ? n.plugins : null) && n.length)
            for (var r = 0; r < n.length && !t; r++) {
                var i = n[r];
                -1 < i.name.indexOf("Shockwave Flash") && (t = i.description)
            }
        if (!t)
            try {
                e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"),
                t = e.GetVariable("$version")
            } catch (s) {}
        if (!t)
            try {
                e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"),
                t = "WIN 6,0,21,0",
                e.AllowScriptAccess = "always",
                t = e.GetVariable("$version")
            } catch (s) {}
        if (!t)
            try {
                e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),
                t = e.GetVariable("$version")
            } catch (s) {}
        return t && (e = t.match(/[\d]+/g)) && 3 <= e.length && (t = e[0] + "." + e[1] + " r" + e[2]),
        t || void 0
    }
    function fr(e, t, n) {
        "none" == t && (t = "");
        var r = []
          , i = k(e);
        e = "__utma" == e ? 6 : 2;
        for (var s = 0; s < i.length; s++) {
            var o = ("" + i[s]).split(".");
            o.length >= e && r.push({
                hash: o[0],
                R: i[s],
                O: o
            })
        }
        if (0 != r.length)
            return 1 == r.length ? r[0] : lr(t, r) || lr(n, r) || lr(null, r) || r[0]
    }
    function lr(e, t) {
        var n, r;
        null == e ? n = r = 1 : (n = si(e),
        r = si(f(e, ".") ? e.substring(1) : "." + e));
        for (var i = 0; i < t.length; i++)
            if (t[i].hash == n || t[i].hash == r)
                return t[i]
    }
    function pr(e) {
        e = e.get(Cn);
        var t = dr(e, 0);
        return "_ga=1." + p(t + "." + e)
    }
    function dr(e, t) {
        for (var n = new Date, r = x.navigator, i = r.plugins || [], n = [e, r.userAgent, n.getTimezoneOffset(), n.getYear(), n.getDate(), n.getHours(), n.getMinutes() + t], r = 0; r < i.length; ++r)
            n.push(i[r].description);
        return si(n.join("."))
    }
    function yr(e, t) {
        if (t == T.location.hostname)
            return !1;
        for (var n = 0; n < e.length; n++)
            if (e[n]instanceof RegExp) {
                if (e[n].test(t))
                    return !0
            } else if (0 <= t.indexOf(e[n]))
                return !0;
        return !1
    }
    function zr(e) {
        return 0 <= e.indexOf(".") || 0 <= e.indexOf(":")
    }
    function si(e) {
        var t = 1, n, r;
        if (e)
            for (t = 0,
            r = e.length - 1; 0 <= r; r--)
                n = e.charCodeAt(r),
                t = (t << 6 & 268435455) + n + (n << 14),
                n = t & 266338304,
                t = 0 != n ? t ^ n >> 21 : t;
        return t
    }
    var e = function(e) {
        this.w = e || []
    };
    e.prototype.set = function(e) {
        this.w[e] = !0
    }
    ,
    e.prototype.encode = function() {
        for (var e = [], t = 0; t < this.w.length; t++)
            this.w[t] && (e[Math.floor(t / 6)] ^= 1 << t % 6);
        for (t = 0; t < e.length; t++)
            e[t] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(e[t] || 0);
        return e.join("") + "~"
    }
    ;
    var t = new e
      , r = function(t, n) {
        var r = new e(s(t));
        r.set(n),
        t.set(fn, r.w)
    }
      , i = function(n) {
        n = s(n),
        n = new e(n);
        for (var r = t.w.slice(), i = 0; i < n.w.length; i++)
            r[i] = r[i] || n.w[i];
        return (new e(r)).encode()
    }
      , s = function(e) {
        return e = e.get(fn),
        u(e) || (e = []),
        e
    }
      , o = function(e) {
        return "function" == typeof e
    }
      , u = function(e) {
        return "[object Array]" == Object.prototype.toString.call(Object(e))
    }
      , a = function(e) {
        return void 0 != e && -1 < (e.constructor + "").indexOf("String")
    }
      , f = function(e, t) {
        return 0 == e.indexOf(t)
    }
      , l = function(e) {
        return e ? e.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") : ""
    }
      , c = function(e) {
        var t = T.createElement("img");
        return t.width = 1,
        t.height = 1,
        t.src = e,
        t
    }
      , h = function() {}
      , p = function(e) {
        return encodeURIComponent instanceof Function ? encodeURIComponent(e) : (n(28),
        e)
    }
      , d = function(e, t, r, i) {
        try {
            e.addEventListener ? e.addEventListener(t, r, !!i) : e.attachEvent && e.attachEvent("on" + t, r)
        } catch (s) {
            n(27)
        }
    }
      , v = /^[\w\-:/.?=&%!]+$/
      , m = function(e, t, n) {
        e && (n ? (n = "",
        t && v.test(t) && (n = ' id="' + t + '"'),
        v.test(e) && T.write("<script" + n + ' src="' + e + '"></script>')) : (n = T.createElement("script"),
        n.type = "text/javascript",
        n.async = !0,
        n.src = e,
        t && (n.id = t),
        e = T.getElementsByTagName("script")[0],
        e.parentNode.insertBefore(n, e)))
    }
      , g = function() {
        return "https:" == T.location.protocol
    }
      , y = function(e, t) {
        var n = e.match("(?:&|#|\\?)" + p(t).replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1") + "=([^&#]*)");
        return n && 2 == n.length ? n[1] : ""
    }
      , b = function() {
        var e = "" + T.location.hostname;
        return 0 == e.indexOf("www.") ? e.substring(4) : e
    }
      , w = function(e) {
        var t = T.referrer;
        if (/^https?:\/\//i.test(t)) {
            if (e)
                return t;
            e = "//" + T.location.hostname;
            var n = t.indexOf(e);
            if (5 == n || 6 == n)
                if (e = t.charAt(n + e.length),
                "/" == e || "?" == e || "" == e || ":" == e)
                    return;
            return t
        }
    }
      , E = function(e, t) {
        if (1 == t.length && null != t[0] && "object" == typeof t[0])
            return t[0];
        for (var n = {}, r = Math.min(e.length + 1, t.length), i = 0; i < r; i++) {
            if ("object" == typeof t[i]) {
                for (var s in t[i])
                    t[i].hasOwnProperty(s) && (n[s] = t[i][s]);
                break
            }
            i < e.length && (n[e[i]] = t[i])
        }
        return n
    }
      , S = function() {
        this.keys = [],
        this.values = {},
        this.m = {}
    };
    S.prototype.set = function(e, t, n) {
        this.keys.push(e),
        n ? this.m[":" + e] = t : this.values[":" + e] = t
    }
    ,
    S.prototype.get = function(e) {
        return this.m.hasOwnProperty(":" + e) ? this.m[":" + e] : this.values[":" + e]
    }
    ,
    S.prototype.map = function(e) {
        for (var t = 0; t < this.keys.length; t++) {
            var n = this.keys[t]
              , r = this.get(n);
            r && e(n, r)
        }
    }
    ;
    var x = window
      , T = document
      , N = window
      , C = function(e) {
        var t = N._gaUserPrefs;
        if (t && t.ioo && t.ioo() || e && !0 === N["ga-disable-" + e])
            return !0;
        try {
            var n = N.external;
            if (n && n._gaUserPrefs && "oo" == n._gaUserPrefs)
                return !0
        } catch (r) {}
        return !1
    }
      , k = function(e) {
        var t = []
          , n = T.cookie.split(";");
        e = new RegExp("^\\s*" + e + "=\\s*(.*?)\\s*$");
        for (var r = 0; r < n.length; r++) {
            var i = n[r].match(e);
            i && t.push(i[1])
        }
        return t
    }
      , L = function(e, t, r, i, s, o) {
        s = C(s) ? !1 : M.test(T.location.hostname) || "/" == r && O.test(i) ? !1 : !0;
        if (!s)
            return !1;
        t && 1200 < t.length && (t = t.substring(0, 1200),
        n(24)),
        r = e + "=" + t + "; path=" + r + "; ",
        o && (r += "expires=" + (new Date((new Date).getTime() + o)).toGMTString() + "; "),
        i && "none" != i && (r += "domain=" + i + ";"),
        i = T.cookie,
        T.cookie = r;
        if (!(i = i != T.cookie))
            e: {
                e = k(e);
                for (i = 0; i < e.length; i++)
                    if (t == e[i]) {
                        i = !0;
                        break e
                    }
                i = !1
            }
        return i
    }
      , A = function(e) {
        return p(e).replace(/\(/g, "%28").replace(/\)/g, "%29")
    }
      , O = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/
      , M = /(^|\.)doubleclick\.net$/i
      , _ = function() {
        return (pt || g() ? "https:" : "http:") + "//www.google-analytics.com"
    }
      , D = function(e) {
        this.name = "len",
        this.message = e + "-8192"
    }
      , P = function(e, t, n) {
        n = n || h;
        if (2036 >= t.length)
            H(e, t, n);
        else {
            if (!(8192 >= t.length))
                throw F("len", t.length),
                new D(t.length);
            j(e, t, n) || B(e, t, n) || H(e, t, n)
        }
    }
      , H = function(e, t, n) {
        var r = c(e + "?" + t);
        r.onload = r.onerror = function() {
            r.onload = null,
            r.onerror = null,
            n()
        }
    }
      , B = function(e, t, n) {
        var r = x.XMLHttpRequest;
        if (!r)
            return !1;
        var i = new r;
        return "withCredentials"in i ? (i.open("POST", e, !0),
        i.withCredentials = !0,
        i.setRequestHeader("Content-Type", "text/plain"),
        i.onreadystatechange = function() {
            4 == i.readyState && (n(),
            i = null)
        }
        ,
        i.send(t),
        !0) : !1
    }
      , j = function(e, t, n) {
        return x.navigator.sendBeacon ? x.navigator.sendBeacon(e, t) ? (n(),
        !0) : !1 : !1
    }
      , F = function(e, t, n) {
        1 <= 100 * Math.random() || C("?") || (e = ["t=error", "_e=" + e, "_v=j47", "sr=1"],
        t && e.push("_f=" + t),
        n && e.push("_m=" + p(n.substring(0, 100))),
        e.push("aip=1"),
        e.push("z=" + Q()),
        H(_() + "/collect", e.join("&"), h))
    }
      , I = function(e) {
        var t = x.gaData = x.gaData || {};
        return t[e] = t[e] || {}
    }
      , q = function() {
        this.M = []
    };
    q.prototype.add = function(e) {
        this.M.push(e)
    }
    ,
    q.prototype.D = function(e) {
        try {
            for (var t = 0; t < this.M.length; t++) {
                var n = e.get(this.M[t]);
                n && o(n) && n.call(x, e)
            }
        } catch (r) {}
        t = e.get(yt),
        t != h && o(t) && (e.set(yt, h, !0),
        setTimeout(t, 10))
    }
    ;
    var Q = function() {
        return Math.round(2147483647 * Math.random())
    }
      , G = function() {
        try {
            var e = new Uint32Array(1);
            return x.crypto.getRandomValues(e),
            e[0] & 2147483647
        } catch (t) {
            return Q()
        }
    }
      , Z = function() {
        this.data = new S
    }
      , et = new S
      , tt = [];
    Z.prototype.get = function(e) {
        var t = ot(e)
          , n = this.data.get(e);
        return t && void 0 == n && (n = o(t.defaultValue) ? t.defaultValue() : t.defaultValue),
        t && t.Z ? t.Z(this, e, n) : n
    }
    ;
    var nt = function(e, t) {
        var n = e.get(t);
        return void 0 == n ? "" : "" + n
    }
      , rt = function(e, t) {
        var n = e.get(t);
        return void 0 == n || "" === n ? 0 : 1 * n
    };
    Z.prototype.set = function(e, t, n) {
        if (e)
            if ("object" == typeof e)
                for (var r in e)
                    e.hasOwnProperty(r) && it(this, r, e[r], n);
            else
                it(this, e, t, n)
    }
    ;
    var it = function(e, t, n, r) {
        if (void 0 != n)
            switch (t) {
            case An:
                Pr.test(n)
            }
        var i = ot(t);
        i && i.o ? i.o(e, t, n, r) : e.data.set(t, n, r)
    }
      , st = function(e, t, n, r, i) {
        this.name = e,
        this.F = t,
        this.Z = r,
        this.o = i,
        this.defaultValue = n
    }
      , ot = function(e) {
        var t = et.get(e);
        if (!t)
            for (var n = 0; n < tt.length; n++) {
                var r = tt[n]
                  , i = r[0].exec(e);
                if (i) {
                    t = r[1](i),
                    et.set(t.name, t);
                    break
                }
            }
        return t
    }
      , ut = function(e) {
        var t;
        return et.map(function(n, r) {
            r.F == e && (t = r)
        }),
        t && t.name
    }
      , at = function(e, t, n, r, i) {
        return e = new st(e,t,n,r,i),
        et.set(e.name, e),
        e.name
    }
      , ft = function(e, t) {
        tt.push([new RegExp("^" + e + "$"), t])
    }
      , lt = function(e, t, n) {
        return at(e, t, n, void 0, ct)
    }
      , ct = function() {}
      , ht = a(window.GoogleAnalyticsObject) && l(window.GoogleAnalyticsObject) || "ga"
      , pt = !1
      , dt = lt("apiVersion", "v")
      , vt = lt("clientVersion", "_v");
    at("anonymizeIp", "aip");
    var mt = at("adSenseId", "a")
      , gt = at("hitType", "t")
      , yt = at("hitCallback")
      , bt = at("hitPayload");
    at("nonInteraction", "ni"),
    at("currencyCode", "cu"),
    at("dataSource", "ds");
    var wt = at("useBeacon", void 0, !1)
      , Et = at("transport");
    at("sessionControl", "sc", ""),
    at("sessionGroup", "sg"),
    at("queueTime", "qt");
    var St = at("_s", "_s");
    at("screenName", "cd");
    var xt = at("location", "dl", "")
      , Tt = at("referrer", "dr")
      , Nt = at("page", "dp", "");
    at("hostname", "dh");
    var Ct = at("language", "ul")
      , kt = at("encoding", "de");
    at("title", "dt", function() {
        return T.title || void 0
    }),
    ft("contentGroup([0-9]+)", function(e) {
        return new st(e[0],"cg" + e[1])
    });
    var Lt = at("screenColors", "sd")
      , At = at("screenResolution", "sr")
      , Ot = at("viewportSize", "vp")
      , Mt = at("javaEnabled", "je")
      , _t = at("flashVersion", "fl");
    at("campaignId", "ci"),
    at("campaignName", "cn"),
    at("campaignSource", "cs"),
    at("campaignMedium", "cm"),
    at("campaignKeyword", "ck"),
    at("campaignContent", "cc");
    var Dt = at("eventCategory", "ec")
      , Pt = at("eventAction", "ea")
      , Ht = at("eventLabel", "el")
      , Bt = at("eventValue", "ev")
      , jt = at("socialNetwork", "sn")
      , Ft = at("socialAction", "sa")
      , It = at("socialTarget", "st")
      , qt = at("l1", "plt")
      , Rt = at("l2", "pdt")
      , Ut = at("l3", "dns")
      , zt = at("l4", "rrt")
      , Wt = at("l5", "srt")
      , Xt = at("l6", "tcp")
      , Vt = at("l7", "dit")
      , $t = at("l8", "clt")
      , Jt = at("timingCategory", "utc")
      , Kt = at("timingVar", "utv")
      , Qt = at("timingLabel", "utl")
      , Gt = at("timingValue", "utt");
    at("appName", "an"),
    at("appVersion", "av", ""),
    at("appId", "aid", ""),
    at("appInstallerId", "aiid", ""),
    at("exDescription", "exd"),
    at("exFatal", "exf");
    var Yt = at("expId", "xid")
      , Zt = at("expVar", "xvar")
      , en = at("exp", "exp")
      , tn = at("_utma", "_utma")
      , nn = at("_utmz", "_utmz")
      , rn = at("_utmht", "_utmht")
      , sn = at("_hc", void 0, 0)
      , on = at("_ti", void 0, 0)
      , un = at("_to", void 0, 20);
    ft("dimension([0-9]+)", function(e) {
        return new st(e[0],"cd" + e[1])
    }),
    ft("metric([0-9]+)", function(e) {
        return new st(e[0],"cm" + e[1])
    }),
    at("linkerParam", void 0, void 0, pr, ct);
    var an = at("usage", "_u")
      , fn = at("_um");
    at("forceSSL", void 0, void 0, function() {
        return pt
    }, function(e, t, r) {
        n(34),
        pt = !!r
    });
    var ln = at("_j1", "jid");
    ft("\\&(.*)", function(e) {
        var t = new st(e[0],e[1])
          , n = ut(e[0].substring(1));
        return n && (t.Z = function(e) {
            return e.get(n)
        }
        ,
        t.o = function(e, t, r, i) {
            e.set(n, r, i)
        }
        ,
        t.F = void 0),
        t
    });
    var cn = lt("_oot")
      , hn = at("previewTask")
      , pn = at("checkProtocolTask")
      , dn = at("validationTask")
      , vn = at("checkStorageTask")
      , mn = at("historyImportTask")
      , gn = at("samplerTask")
      , yn = at("_rlt")
      , bn = at("buildHitTask")
      , wn = at("sendHitTask")
      , En = at("ceTask")
      , Sn = at("devIdTask")
      , xn = at("timingTask")
      , Tn = at("displayFeaturesTask")
      , Nn = lt("name")
      , Cn = lt("clientId", "cid")
      , kn = lt("clientIdTime")
      , Ln = at("userId", "uid")
      , An = lt("trackingId", "tid")
      , On = lt("cookieName", void 0, "_ga")
      , Mn = lt("cookieDomain")
      , _n = lt("cookiePath", void 0, "/")
      , Dn = lt("cookieExpires", void 0, 63072e3)
      , Pn = lt("legacyCookieDomain")
      , Hn = lt("legacyHistoryImport", void 0, !0)
      , Bn = lt("storage", void 0, "cookie")
      , jn = lt("allowLinker", void 0, !1)
      , Fn = lt("allowAnchor", void 0, !0)
      , In = lt("sampleRate", "sf", 100)
      , qn = lt("siteSpeedSampleRate", void 0, 1)
      , Rn = lt("alwaysSendReferrer", void 0, !1)
      , Un = at("transportUrl")
      , zn = at("_r", "_r")
      , Xn = function(e) {
        this.V = e,
        this.fa = void 0,
        this.$ = !1,
        this.oa = void 0,
        this.ea = 1
    }
      , Vn = function(e, t) {
        var n;
        if (e.fa && e.$)
            return 0;
        e.$ = !0;
        if (t) {
            if (e.oa && rt(t, e.oa))
                return rt(t, e.oa);
            if (0 == t.get(qn))
                return 0
        }
        return 0 == e.V ? 0 : (void 0 === n && (n = G()),
        0 == n % e.V ? Math.floor(n / e.V) % e.ea + 1 : 0)
    }
      , Jn = function(e) {
        var t = Math.min(rt(e, qn), 100);
        return si(nt(e, Cn)) % 100 >= t ? !1 : !0
    }
      , Kn = function(e) {
        var t = {};
        if (Qn(t) || Gn(t)) {
            var n = t[qt];
            void 0 == n || Infinity == n || isNaN(n) || (0 < n ? (Yn(t, Ut),
            Yn(t, Xt),
            Yn(t, Wt),
            Yn(t, Rt),
            Yn(t, zt),
            Yn(t, Vt),
            Yn(t, $t),
            e(t)) : d(x, "load", function() {
                Kn(e)
            }, !1))
        }
    }
      , Qn = function(e) {
        var t = x.performance || x.webkitPerformance
          , t = t && t.timing;
        if (!t)
            return !1;
        var n = t.navigationStart;
        return 0 == n ? !1 : (e[qt] = t.loadEventStart - n,
        e[Ut] = t.domainLookupEnd - t.domainLookupStart,
        e[Xt] = t.connectEnd - t.connectStart,
        e[Wt] = t.responseStart - t.requestStart,
        e[Rt] = t.responseEnd - t.responseStart,
        e[zt] = t.fetchStart - n,
        e[Vt] = t.domInteractive - n,
        e[$t] = t.domContentLoadedEventStart - n,
        !0)
    }
      , Gn = function(e) {
        if (x.top != x)
            return !1;
        var t = x.external
          , n = t && t.onloadT;
        return t && !t.isValidLoadTime && (n = void 0),
        2147483648 < n && (n = void 0),
        0 < n && t.setPageReadyTime(),
        void 0 == n ? !1 : (e[qt] = n,
        !0)
    }
      , Yn = function(e, t) {
        var n = e[t];
        if (isNaN(n) || Infinity == n || 0 > n)
            e[t] = void 0
    }
      , Zn = function(e) {
        return function(t) {
            if ("pageview" == t.get(gt) && !e.I) {
                e.I = !0;
                var n = Jn(t);
                t = 0 < y(t.get(xt), "gclid").length,
                (n || t) && Kn(function(t) {
                    e.send(n ? "timing" : "adtiming", t)
                })
            }
        }
    }
      , er = !1
      , tr = function(e) {
        if ("cookie" == nt(e, Bn)) {
            var t = nt(e, On)
              , r = ir(e)
              , i = ur(nt(e, _n))
              , s = or(nt(e, Mn))
              , o = 1e3 * rt(e, Dn)
              , u = nt(e, An);
            if ("auto" != s)
                L(t, r, i, s, u, o) && (er = !0);
            else {
                n(32);
                var a;
                e: {
                    r = [],
                    s = b().split(".");
                    if (4 == s.length && (a = s[s.length - 1],
                    parseInt(a, 10) == a)) {
                        a = ["none"];
                        break e
                    }
                    for (a = s.length - 2; 0 <= a; a--)
                        r.push(s.slice(a).join("."));
                    r.push("none"),
                    a = r
                }
                for (var f = 0; f < a.length; f++)
                    if (s = a[f],
                    e.data.set(Mn, s),
                    r = ir(e),
                    L(t, r, i, s, u, o)) {
                        er = !0;
                        return
                    }
                e.data.set(Mn, "auto")
            }
        }
    }
      , nr = function(e) {
        if ("cookie" == nt(e, Bn) && !er && (tr(e),
        !er))
            throw "abort"
    }
      , rr = function(e) {
        if (e.get(Hn)) {
            var t = nt(e, Mn)
              , r = nt(e, Pn) || b()
              , i = fr("__utma", r, t);
            i && (n(19),
            e.set(rn, (new Date).getTime(), !0),
            e.set(tn, i.R),
            (t = fr("__utmz", r, t)) && i.hash == t.hash && e.set(nn, t.R))
        }
    }
      , ir = function(e) {
        var t = A(nt(e, Cn))
          , n = or(nt(e, Mn)).split(".").length;
        return e = ar(nt(e, _n)),
        1 < e && (n += "-" + e),
        ["GA1", n, t].join(".")
    }
      , sr = function(e, t, n) {
        for (var r = [], i = [], s, o = 0; o < e.length; o++) {
            var u = e[o];
            u.H[n] == t ? r.push(u) : void 0 == s || u.H[n] < s ? (i = [u],
            s = u.H[n]) : u.H[n] == s && i.push(u)
        }
        return 0 < r.length ? r : i
    }
      , or = function(e) {
        return 0 == e.indexOf(".") ? e.substr(1) : e
    }
      , ur = function(e) {
        return e ? (1 < e.length && e.lastIndexOf("/") == e.length - 1 && (e = e.substr(0, e.length - 1)),
        0 != e.indexOf("/") && (e = "/" + e),
        e) : "/"
    }
      , ar = function(e) {
        return e = ur(e),
        "/" == e ? 1 : e.split("/").length
    }
      , cr = new RegExp(/^https?:\/\/([^\/:]+)/)
      , hr = /(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)/
      , vr = function(e) {
        n(48),
        this.target = e,
        this.T = !1
    };
    vr.prototype.ca = function(e, t) {
        if (e.tagName) {
            if ("a" == e.tagName.toLowerCase()) {
                e.href && (e.href = mr(this, e.href, t));
                return
            }
            if ("form" == e.tagName.toLowerCase())
                return gr(this, e)
        }
        if ("string" == typeof e)
            return mr(this, e, t)
    }
    ;
    var mr = function(e, t, n) {
        var r = hr.exec(t);
        r && 3 <= r.length && (t = r[1] + (r[3] ? r[2] + r[3] : "")),
        e = e.target.get("linkerParam");
        var i = t.indexOf("?")
          , r = t.indexOf("#");
        return n ? t += (-1 == r ? "#" : "&") + e : (n = -1 == i ? "?" : "&",
        t = -1 == r ? t + (n + e) : t.substring(0, r) + n + e + t.substring(r)),
        t = t.replace(/&+_ga=/, "&_ga=")
    }
      , gr = function(e, t) {
        if (t && t.action) {
            var n = e.target.get("linkerParam").split("=")[1];
            if ("get" == t.method.toLowerCase()) {
                for (var r = t.childNodes || [], i = 0; i < r.length; i++)
                    if ("_ga" == r[i].name) {
                        r[i].setAttribute("value", n);
                        return
                    }
                r = T.createElement("input"),
                r.setAttribute("type", "hidden"),
                r.setAttribute("name", "_ga"),
                r.setAttribute("value", n),
                t.appendChild(r)
            } else
                "post" == t.method.toLowerCase() && (t.action = mr(e, t.action))
        }
    };
    vr.prototype.S = function(e, t, r) {
        function i(r) {
            try {
                r = r || x.event;
                var i;
                e: {
                    var o = r.target || r.srcElement;
                    for (r = 100; o && 0 < r; ) {
                        if (o.href && o.nodeName.match(/^a(?:rea)?$/i)) {
                            i = o;
                            break e
                        }
                        o = o.parentNode,
                        r--
                    }
                    i = {}
                }
                ("http:" == i.protocol || "https:" == i.protocol) && yr(e, i.hostname || "") && i.href && (i.href = mr(s, i.href, t))
            } catch (u) {
                n(26)
            }
        }
        var s = this;
        this.T || (this.T = !0,
        d(T, "mousedown", i, !1),
        d(T, "keyup", i, !1)),
        r && d(T, "submit", function(t) {
            t = t || x.event;
            if ((t = t.target || t.srcElement) && t.action) {
                var n = t.action.match(cr);
                n && yr(e, n[1]) && gr(s, t)
            }
        })
    }
    ;
    var br = /^(GTM|OPT)-[A-Z0-9]+$/, wr = /;_gaexp=[^;]*/g, Er = /;((__utma=)|([^;=]+=GAX?\d+\.))[^;]*/g, Sr = function(e) {
        function t(e, t) {
            t && (n += "&" + e + "=" + p(t))
        }
        var n = "https://www.google-analytics.com/gtm/js?id=" + p(e.id);
        return "dataLayer" != e.B && t("l", e.B),
        t("t", e.target),
        t("cid", e.ja),
        t("cidt", e.ka),
        t("gac", e.la),
        t("aip", e.ia),
        e.na && t("m", "sync"),
        t("cycle", e.G),
        n
    }, xr = function(e, t, r) {
        this.U = ln,
        this.aa = t,
        (t = r) || (t = (t = nt(e, Nn)) && "t0" != t ? Lr.test(t) ? "_gat_" + A(nt(e, An)) : "_gat_" + A(t) : "_gat"),
        this.Y = t,
        Vn(new Xn(100), e) && (n(30),
        this.pa = !0)
    }, Tr = function(e, t) {
        var n = t.get(bn);
        t.set(bn, function(t) {
            Nr(e, t);
            var r = n(t);
            return Cr(e, t),
            r
        });
        var r = t.get(wn);
        t.set(wn, function(t) {
            var n = r(t);
            return kr(e, t),
            n
        })
    }, Nr = function(e, t) {
        t.get(e.U) || ("1" == k(e.Y)[0] ? t.set(e.U, "", !0) : t.set(e.U, "" + Q(), !0))
    }, Cr = function(e, t) {
        if (t.get(e.U)) {
            var n = 6e5;
            e.pa && (n /= 10),
            L(e.Y, "1", t.get(_n), t.get(Mn), t.get(An), n)
        }
    }, kr = function(e, t) {
        if (t.get(e.U)) {
            var n = new S
              , r = function(e) {
                ot(e).F && n.set(ot(e).F, t.get(e))
            };
            r(dt),
            r(vt),
            r(An),
            r(Cn),
            r(Ln),
            r(e.U),
            n.set(ot(an).F, i(t));
            var s = e.aa;
            n.map(function(e, t) {
                s += p(e) + "=",
                s += p("" + t) + "&"
            }),
            s += "z=" + Q(),
            c(s),
            t.set(e.U, "", !0)
        }
    }, Lr = /^gtm\d+$/, Ar = function(e, t) {
        var n = e.b;
        if (!n.get("dcLoaded")) {
            r(n, 29),
            t = t || {};
            var i;
            t[On] && (i = A(t[On])),
            i = new xr(n,"https://stats.g.doubleclick.net/r/collect?t=dc&aip=1&_r=3&",i),
            Tr(i, n),
            n.set("dcLoaded", !0)
        }
    }, Or = function(e) {
        if (!e.get("dcLoaded") && "cookie" == e.get(Bn)) {
            r(e, 51);
            var t = new xr(e);
            Nr(t, e),
            Cr(t, e),
            e.get(t.U) && (e.set(zn, 1, !0),
            e.set(Un, _() + "/r/collect", !0))
        }
    }, Mr = function() {
        var e = x.gaGlobal = x.gaGlobal || {};
        return e.hid = e.hid || Q()
    }, _r, Dr = function(e, t, n) {
        if (!_r) {
            var r;
            r = T.location.hash;
            var i = x.name
              , s = /^#?gaso=([^&]*)/;
            if (i = (r = (r = r && r.match(s) || i && i.match(s)) ? r[1] : k("GASO")[0] || "") && r.match(/^(?:!([-0-9a-z.]{1,40})!)?([-.\w]{10,1200})$/i))
                L("GASO", "" + r, n, t, e, 0),
                window._udo || (window._udo = t),
                window._utcp || (window._utcp = n),
                e = i[1],
                m("https://www.google.com/analytics/web/inpage/pub/inpage.js?" + (e ? "prefix=" + e + "&" : "") + Q(), "_gasojs");
            _r = !0
        }
    }, Pr = /^(UA|YT|MO|GP)-(\d+)-(\d+)$/, Hr = function(e) {
        function t(e, t) {
            r.b.data.set(e, t)
        }
        function n(e, n) {
            t(e, n),
            r.filters.add(e)
        }
        var r = this;
        this.b = new Z,
        this.filters = new q,
        t(Nn, e[Nn]),
        t(An, l(e[An])),
        t(On, e[On]),
        t(Mn, e[Mn] || b()),
        t(_n, e[_n]),
        t(Dn, e[Dn]),
        t(Pn, e[Pn]),
        t(Hn, e[Hn]),
        t(jn, e[jn]),
        t(Fn, e[Fn]),
        t(In, e[In]),
        t(qn, e[qn]),
        t(Rn, e[Rn]),
        t(Bn, e[Bn]),
        t(Ln, e[Ln]),
        t(kn, e[kn]),
        t(dt, 1),
        t(vt, "j47"),
        n(cn, U),
        n(hn, $),
        n(pn, z),
        n(dn, K),
        n(vn, nr),
        n(mn, rr),
        n(gn, R),
        n(yn, Y),
        n(En, V),
        n(Sn, J),
        n(Tn, Or),
        n(bn, W),
        n(wn, X),
        n(xn, Zn(this)),
        Br(this.b, e[Cn]),
        jr(this.b),
        this.b.set(mt, Mr()),
        Dr(this.b.get(An), this.b.get(Mn), this.b.get(_n))
    }, Br = function(e, t) {
        if ("cookie" == nt(e, Bn)) {
            er = !1;
            var r;
            e: {
                var i = k(nt(e, On));
                if (i && !(1 > i.length)) {
                    r = [];
                    for (var s = 0; s < i.length; s++) {
                        var o;
                        o = i[s].split(".");
                        var u = o.shift();
                        ("GA1" == u || "1" == u) && 1 < o.length ? (u = o.shift().split("-"),
                        1 == u.length && (u[1] = "1"),
                        u[0] *= 1,
                        u[1] *= 1,
                        o = {
                            H: u,
                            s: o.join(".")
                        }) : o = void 0,
                        o && r.push(o)
                    }
                    if (1 == r.length) {
                        n(13),
                        r = r[0].s;
                        break e
                    }
                    if (0 != r.length) {
                        n(14),
                        i = or(nt(e, Mn)).split(".").length,
                        r = sr(r, i, 0);
                        if (1 == r.length) {
                            r = r[0].s;
                            break e
                        }
                        i = ar(nt(e, _n)),
                        r = sr(r, i, 1),
                        r = r[0] && r[0].s;
                        break e
                    }
                    n(12)
                }
                r = void 0
            }
            r || (r = nt(e, Mn),
            i = nt(e, Pn) || b(),
            r = fr("__utma", i, r),
            void 0 != r ? (n(10),
            r = r.O[1] + "." + r.O[2]) : r = void 0),
            r && (e.data.set(Cn, r),
            er = !0)
        }
        r = e.get(Fn);
        if (s = y(T.location[r ? "href" : "search"], "_ga"))
            e.get(jn) ? (r = s.indexOf("."),
            -1 == r ? n(22) : (i = s.substring(r + 1),
            "1" != s.substring(0, r) ? n(22) : (r = i.indexOf("."),
            -1 == r ? n(22) : (s = i.substring(0, r),
            r = i.substring(r + 1),
            s != dr(r, 0) && s != dr(r, -1) && s != dr(r, -2) ? n(23) : (n(11),
            e.data.set(Cn, r)))))) : n(21);
        t && (n(9),
        e.data.set(Cn, p(t)));
        if (!e.get(Cn))
            if (r = (r = x.gaGlobal && x.gaGlobal.vid) && -1 != r.search(/^(?:utma\.)?\d+\.\d+$/) ? r : void 0)
                n(17),
                e.data.set(Cn, r);
            else {
                n(8),
                r = x.navigator.userAgent + (T.cookie ? T.cookie : "") + (T.referrer ? T.referrer : ""),
                i = r.length;
                for (s = x.history.length; 0 < s; )
                    r += s-- ^ i++;
                e.data.set(Cn, [Q() ^ si(r) & 2147483647, Math.round((new Date).getTime() / 1e3)].join("."))
            }
        tr(e)
    }, jr = function(e) {
        var t = x.navigator
          , r = x.screen
          , i = T.location;
        e.set(Tt, w(e.get(Rn)));
        if (i) {
            var s = i.pathname || "";
            "/" != s.charAt(0) && (n(31),
            s = "/" + s),
            e.set(xt, i.protocol + "//" + i.hostname + s + i.search)
        }
        r && e.set(At, r.width + "x" + r.height),
        r && e.set(Lt, r.colorDepth + "-bit");
        var r = T.documentElement
          , o = (s = T.body) && s.clientWidth && s.clientHeight
          , u = [];
        r && r.clientWidth && r.clientHeight && ("CSS1Compat" === T.compatMode || !o) ? u = [r.clientWidth, r.clientHeight] : o && (u = [s.clientWidth, s.clientHeight]),
        r = 0 >= u[0] || 0 >= u[1] ? "" : u.join("x"),
        e.set(Ot, r),
        e.set(_t, $n()),
        e.set(kt, T.characterSet || T.charset),
        e.set(Mt, t && "function" == typeof t.javaEnabled && t.javaEnabled() || !1),
        e.set(Ct, (t && (t.language || t.browserLanguage) || "").toLowerCase());
        if (i && e.get(Fn) && (t = T.location.hash)) {
            t = t.split(/[?&#]+/),
            i = [];
            for (r = 0; r < t.length; ++r)
                (f(t[r], "utm_id") || f(t[r], "utm_campaign") || f(t[r], "utm_source") || f(t[r], "utm_medium") || f(t[r], "utm_term") || f(t[r], "utm_content") || f(t[r], "gclid") || f(t[r], "dclid") || f(t[r], "gclsrc")) && i.push(t[r]);
            0 < i.length && (t = "#" + i.join("&"),
            e.set(xt, e.get(xt) + t))
        }
    };
    Hr.prototype.get = function(e) {
        return this.b.get(e)
    }
    ,
    Hr.prototype.set = function(e, t) {
        this.b.set(e, t)
    }
    ;
    var Fr = {
        pageview: [Nt],
        event: [Dt, Pt, Ht, Bt],
        social: [jt, Ft, It],
        timing: [Jt, Kt, Gt, Qt]
    };
    Hr.prototype.send = function(e) {
        if (!(1 > arguments.length)) {
            var t, n;
            "string" == typeof arguments[0] ? (t = arguments[0],
            n = [].slice.call(arguments, 1)) : (t = arguments[0] && arguments[0][gt],
            n = arguments),
            t && (n = E(Fr[t] || [], n),
            n[gt] = t,
            this.b.set(n, void 0, !0),
            this.filters.D(this.b),
            this.b.data.m = {})
        }
    }
    ,
    Hr.prototype.ma = function(e, t) {
        var n = this;
        Jr(e, n, t) || (Qr(e, function() {
            Jr(e, n, t)
        }),
        Kr(String(n.get(Nn)), e, void 0, t, !0))
    }
    ;
    var Ir = function(e) {
        return "prerender" == T.visibilityState ? !1 : (e(),
        !0)
    }, qr = function(e) {
        if (!Ir(e)) {
            n(16);
            var t = !1
              , r = function() {
                if (!t && Ir(e)) {
                    t = !0;
                    var n = r
                      , i = T;
                    i.removeEventListener ? i.removeEventListener("visibilitychange", n, !1) : i.detachEvent && i.detachEvent("onvisibilitychange", n)
                }
            };
            d(T, "visibilitychange", r)
        }
    }, Rr = /^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/, Ur = function(e) {
        if (o(e[0]))
            this.u = e[0];
        else {
            var t = Rr.exec(e[0]);
            null != t && 4 == t.length && (this.c = t[1] || "t0",
            this.K = t[2] || "",
            this.C = t[3],
            this.a = [].slice.call(e, 1),
            this.K || (this.A = "create" == this.C,
            this.i = "require" == this.C,
            this.g = "provide" == this.C,
            this.ba = "remove" == this.C),
            this.i && (3 <= this.a.length ? (this.X = this.a[1],
            this.W = this.a[2]) : this.a[1] && (a(this.a[1]) ? this.X = this.a[1] : this.W = this.a[1]))),
            t = e[1],
            e = e[2];
            if (!this.C)
                throw "abort";
            if (this.i && (!a(t) || "" == t))
                throw "abort";
            if (this.g && (!a(t) || "" == t || !o(e)))
                throw "abort";
            if (zr(this.c) || zr(this.K))
                throw "abort";
            if (this.g && "t0" != this.c)
                throw "abort"
        }
    }, Wr, Xr, Vr, $r;
    Wr = new S,
    Vr = new S,
    $r = new S,
    Xr = {
        ec: 45,
        ecommerce: 46,
        linkid: 47
    };
    var Jr = function(e, t, n) {
        t == ti || t.get(Nn);
        var r = Wr.get(e);
        return o(r) ? (t.plugins_ = t.plugins_ || new S,
        t.plugins_.get(e) ? !0 : (t.plugins_.set(e, new r(t,n || {})),
        !0)) : !1
    }
      , Kr = function(e, t, r, i, s) {
        if (!o(Wr.get(t)) && !Vr.get(t)) {
            Xr.hasOwnProperty(t) && n(Xr[t]);
            if (br.test(t)) {
                n(52),
                e = ti.j(e);
                if (!e)
                    return !0;
                r = i || {},
                i = {
                    id: t,
                    B: r.dataLayer || "dataLayer",
                    ia: !!e.get("anonymizeIp"),
                    na: s,
                    G: !1
                },
                e.get("&gtm") == t && (i.G = !0);
                var u = String(e.get("name"));
                "t0" != u && (i.target = u),
                C(String(e.get("trackingId"))) || (i.ja = String(e.get(Cn)),
                i.ka = Number(e.get(kn)),
                e = r.palindrome ? Er : wr,
                e = (e = T.cookie.replace(/^|(; +)/g, ";").match(e)) ? e.sort().join("").substring(1) : void 0,
                i.la = e),
                e = i.B,
                r = (new Date).getTime(),
                x[e] = x[e] || [],
                r = {
                    "gtm.start": r
                },
                s || (r.event = "gtm.js"),
                x[e].push(r),
                r = Sr(i)
            }
            !r && Xr.hasOwnProperty(t) ? (n(39),
            r = t + ".js") : n(43),
            r && (r && 0 <= r.indexOf("/") || (r = (pt || g() ? "https:" : "http:") + "//www.google-analytics.com/plugins/ua/" + r),
            i = Zr(r),
            e = i.protocol,
            r = T.location.protocol,
            ("https:" == e || e == r || ("http:" != e ? 0 : "http:" == r)) && Yr(i) && (m(i.url, void 0, s),
            Vr.set(t, !0)))
        }
    }
      , Qr = function(e, t) {
        var n = $r.get(e) || [];
        n.push(t),
        $r.set(e, n)
    }
      , Gr = function(e, t) {
        Wr.set(e, t);
        for (var n = $r.get(e) || [], r = 0; r < n.length; r++)
            n[r]();
        $r.set(e, [])
    }
      , Yr = function(e) {
        var t = Zr(T.location.href);
        return f(e.url, "https://www.google-analytics.com/gtm/js?id=") ? !0 : e.query || 0 <= e.url.indexOf("?") || 0 <= e.path.indexOf("://") ? !1 : e.host == t.host && e.port == t.port ? !0 : (t = "http:" == e.protocol ? 80 : 443,
        "www.google-analytics.com" == e.host && (e.port || t) == t && f(e.path, "/plugins/") ? !0 : !1)
    }
      , Zr = function(e) {
        function t(e) {
            var t = (e.hostname || "").split(":")[0].toLowerCase()
              , n = (e.protocol || "").toLowerCase()
              , n = 1 * e.port || ("http:" == n ? 80 : "https:" == n ? 443 : "");
            return e = e.pathname || "",
            f(e, "/") || (e = "/" + e),
            [t, "" + n, e]
        }
        var n = T.createElement("a");
        n.href = T.location.href;
        var r = (n.protocol || "").toLowerCase()
          , i = t(n)
          , s = n.search || ""
          , o = r + "//" + i[0] + (i[1] ? ":" + i[1] : "");
        return f(e, "//") ? e = r + e : f(e, "/") ? e = o + e : !e || f(e, "?") ? e = o + i[2] + (e || s) : 0 > e.split("/")[0].indexOf(":") && (e = o + i[2].substring(0, i[2].lastIndexOf("/")) + "/" + e),
        n.href = e,
        r = t(n),
        {
            protocol: (n.protocol || "").toLowerCase(),
            host: r[0],
            port: r[1],
            path: r[2],
            query: n.search || "",
            url: e || ""
        }
    }
      , ei = {
        ga: function() {
            ei.f = []
        }
    };
    ei.ga(),
    ei.D = function(e) {
        var t = ei.J.apply(ei, arguments)
          , t = ei.f.concat(t);
        for (ei.f = []; 0 < t.length && !ei.v(t[0]) && !(t.shift(),
        0 < ei.f.length); )
            ;
        ei.f = ei.f.concat(t)
    }
    ,
    ei.J = function(e) {
        for (var t = [], n = 0; n < arguments.length; n++)
            try {
                var r = new Ur(arguments[n]);
                r.g ? Gr(r.a[0], r.a[1]) : (r.i && (r.ha = Kr(r.c, r.a[0], r.X, r.W)),
                t.push(r))
            } catch (i) {}
        return t
    }
    ,
    ei.v = function(e) {
        try {
            if (e.u)
                e.u.call(x, ti.j("t0"));
            else {
                var t = e.c == ht ? ti : ti.j(e.c);
                if (e.A)
                    "t0" != e.c || ti.create.apply(ti, e.a);
                else if (e.ba)
                    ti.remove(e.c);
                else if (t)
                    if (e.i) {
                        if (e.ha && (e.ha = Kr(e.c, e.a[0], e.X, e.W)),
                        !Jr(e.a[0], t, e.W))
                            return !0
                    } else if (e.K) {
                        var n = e.C
                          , r = e.a
                          , i = t.plugins_.get(e.K);
                        i[n].apply(i, r)
                    } else
                        t[e.C].apply(t, e.a)
            }
        } catch (s) {}
    }
    ;
    var ti = function(e) {
        n(1),
        ei.D.apply(ei, [arguments])
    };
    ti.h = {},
    ti.P = [],
    ti.L = 0,
    ti.answer = 42;
    var ni = [An, Mn, Nn];
    ti.create = function(e) {
        var t = E(ni, [].slice.call(arguments));
        t[Nn] || (t[Nn] = "t0");
        var n = "" + t[Nn];
        return ti.h[n] ? ti.h[n] : (t = new Hr(t),
        ti.h[n] = t,
        ti.P.push(t),
        t)
    }
    ,
    ti.remove = function(e) {
        for (var t = 0; t < ti.P.length; t++)
            if (ti.P[t].get(Nn) == e) {
                ti.P.splice(t, 1),
                ti.h[e] = null;
                break
            }
    }
    ,
    ti.j = function(e) {
        return ti.h[e]
    }
    ,
    ti.getAll = function() {
        return ti.P.slice(0)
    }
    ,
    ti.N = function() {
        "ga" != ht && n(49);
        var e = x[ht];
        if (!e || 42 != e.answer) {
            ti.L = e && e.l,
            ti.loaded = !0;
            var t = x[ht] = ti;
            Wn("create", t, t.create),
            Wn("remove", t, t.remove),
            Wn("getByName", t, t.j, 5),
            Wn("getAll", t, t.getAll, 6),
            t = Hr.prototype,
            Wn("get", t, t.get, 7),
            Wn("set", t, t.set, 4),
            Wn("send", t, t.send),
            Wn("requireSync", t, t.ma),
            t = Z.prototype,
            Wn("get", t, t.get),
            Wn("set", t, t.set);
            if (!g() && !pt) {
                e: {
                    for (var t = T.getElementsByTagName("script"), r = 0; r < t.length && 100 > r; r++) {
                        var i = t[r].src;
                        if (i && 0 == i.indexOf("https://www.google-analytics.com/analytics")) {
                            n(33),
                            t = !0;
                            break e
                        }
                    }
                    t = !1
                }
                t && (pt = !0)
            }
            g() || pt || !Vn(new Xn(1e4)) || (n(36),
            pt = !0),
            (x.gaplugins = x.gaplugins || {}).Linker = vr,
            t = vr.prototype,
            Gr("linker", vr),
            Wn("decorate", t, t.ca, 20),
            Wn("autoLink", t, t.S, 25),
            Gr("displayfeatures", Ar),
            Gr("adfeatures", Ar),
            e = e && e.q,
            u(e) ? ei.D.apply(ti, e) : n(50)
        }
    }
    ,
    ti.da = function() {
        for (var e = ti.getAll(), t = 0; t < e.length; t++)
            e[t].get(Nn)
    }
    ;
    var ri = ti.N
      , ii = x[ht];
    ii && ii.r ? ri() : qr(ri),
    qr(function() {
        ei.D(["provide", "render", h])
    })
}(window),
define("google-analytics", function(e) {
    return function() {
        var t, n;
        return t || e.ga
    }
}(this)),
define("settings", [], function() {
    return {
        blobcastUrl: "https://blobcast.jackboxgames.com",
        uaTrackingId: "UA-23005426-39",
        uaSampleRate: 50,
        adRollAdvId: "WN335VM7RVAMPDZAOWMIHP",
        adRollPixId: "LKQ23YN2IVFJNBRQ5KI32D",
        TwitchClientID: "yn2iepd23vskpmkzgeg2lkfsct7gsc",
        bannerSettings: {
            "default": [{
                background: "#42385b",
                img_src: "images/QuipsBanner01HD.png",
                img_height: "180",
                img_link: "http://jackboxgames.com/project/jbpp2/?utm_source=jackboxtv&utm_medium=slide-banner&utm_campaign=quips01",
                campaign: "quips01",
                chance: 50
            }, {
                background: "#42385b",
                img_src: "images/QuipsBanner02HD.png",
                img_height: "180",
                img_link: "http://jackboxgames.com/project/jbpp2/?utm_source=jackboxtv&utm_medium=slide-banner&utm_campaign=quips02",
                campaign: "quips02",
                chance: 50
            }]
        }
    }
}),
function(e) {
    typeof define == "function" && define.amd ? define("jquery-cookie", ["jquery"], e) : typeof exports == "object" ? e(require("jquery")) : e(jQuery)
}(function(e) {
    function n(e) {
        return u.raw ? e : encodeURIComponent(e)
    }
    function r(e) {
        return u.raw ? e : decodeURIComponent(e)
    }
    function i(e) {
        return n(u.json ? JSON.stringify(e) : String(e))
    }
    function s(e) {
        e.indexOf('"') === 0 && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return e = decodeURIComponent(e.replace(t, " ")),
            u.json ? JSON.parse(e) : e
        } catch (n) {}
    }
    function o(t, n) {
        var r = u.raw ? t : s(t);
        return e.isFunction(n) ? n(r) : r
    }
    var t = /\+/g
      , u = e.cookie = function(t, s, a) {
        if (s !== undefined && !e.isFunction(s)) {
            a = e.extend({}, u.defaults, a);
            if (typeof a.expires == "number") {
                var f = a.expires
                  , l = a.expires = new Date;
                l.setTime(+l + f * 864e5)
            }
            return document.cookie = [n(t), "=", i(s), a.expires ? "; expires=" + a.expires.toUTCString() : "", a.path ? "; path=" + a.path : "", a.domain ? "; domain=" + a.domain : "", a.secure ? "; secure" : ""].join("")
        }
        var c = t ? undefined : {}
          , h = document.cookie ? document.cookie.split("; ") : [];
        for (var p = 0, d = h.length; p < d; p++) {
            var v = h[p].split("=")
              , m = r(v.shift())
              , g = v.join("=");
            if (t && t === m) {
                c = o(g, s);
                break
            }
            !t && (g = o(g)) !== undefined && (c[m] = g)
        }
        return c
    }
    ;
    u.defaults = {},
    e.removeCookie = function(t, n) {
        return e.cookie(t) === undefined ? !1 : (e.cookie(t, "", e.extend({}, n, {
            expires: -1
        })),
        !e.cookie(t))
    }
}),
define("analytics", ["jquery", "underscore", "backbone", "settings", "google-analytics", "jquery-cookie"], function(e, t, n, r, i) {
    var s = n.Model.extend({
        initialize: function() {
            i("create", r.uaTrackingId, {
                cookieDomain: "none",
                sampleRate: r.uaSampleRate
            }),
            i("require", "displayfeatures"),
            i("send", "pageview")
        },
        setUserId: function(e) {
            i("set", "userId", e)
        },
        setApplication: function(e, t, n, r) {
            var s = {};
            e != undefined && (s.appName = e),
            t != undefined && (s.appId = t),
            n != undefined && (s.appVersion = n),
            r != undefined && (s.appInstallerId = r),
            i("set", s)
        },
        trackScreenView: function(e) {
            e == undefined && (e = ""),
            i("send", "screenview", {
                screenName: e
            })
        },
        trackPageView: function(e, t) {
            e == undefined && (e = ""),
            t == undefined && (t = ""),
            i("send", "pageView", {
                page: e,
                title: t
            })
        },
        trackEvent: function(e, t, n, r) {
            e == undefined && (e = ""),
            t == undefined && (t = ""),
            n == undefined && (n = ""),
            r == undefined && (r = 0),
            i("send", "event", {
                eventCategory: e,
                eventAction: t,
                eventLabel: n,
                eventValue: r
            })
        },
        trackEvents: function(e) {
            var t = this;
            e.forEach(function(e) {
                var n = e.category != undefined ? e.category : undefined
                  , r = e.action != undefined ? e.action : undefined
                  , i = e.label != undefined ? e.label : undefined
                  , s = e.value != undefined ? e.value : undefined;
                t.trackEvent(n, r, i, s)
            })
        },
        trackTiming: function(e, t, n, r) {
            e == undefined && (e = ""),
            t == undefined && (t = ""),
            r == undefined && (r = ""),
            n == undefined && (n = (new Date).getTime() - window.performance.timing.domComplete),
            i("send", "timing", {
                timingCategory: e,
                timingVar: t,
                timingValue: n,
                timingLabel: r
            })
        },
        trackSocial: function(e, t, n) {
            var r = {};
            e != undefined && (r.socialNetwork = e),
            t != undefined && (r.socialAction = t),
            n != undefined && (r.socialTarget = n),
            i("send", "social", r)
        },
        trackException: function(e, t) {
            e == undefined && (e = ""),
            t == undefined && (t = !1),
            i("send", "exception", {
                exDescription: e,
                exFatal: t
            })
        }
    });
    return new s
}),
define("router", ["jquery", "underscore", "backbone", "analytics"], function(e, t, n, r) {
    var i = function() {
        this.app = null,
        this.currentPage = null,
        this.testBlob = null,
        this.pageCount = 0,
        this.testing = !1
    };
    return i.prototype.initialize = function() {
        var t = n.getParameterByName("app")
          , r = n.getParameterByName("screen");
        if (t != "" && t != undefined && r != "" && r != undefined) {
            var i = "./js/controllers/" + t + "/json/test.json"
              , s = this;
            e.getJSON(i, function(e) {
                e.states[r] && (s.testBlob = e.states[r],
                s.testing = !0,
                s.navigateToApp(t, null))
            })
        } else
            this.login()
    }
    ,
    i.prototype.navigateToApp = function(e) {
        var t = this;
        if (e === this.appTag)
            return;
        e ? require(["controllers/" + e + "/views/main"], function(e) {
            var n = new e({
                el: t.createPage()
            });
            t.showPage(n)
        }) : this.login()
    }
    ,
    i.prototype.createPage = function() {
        return e("#container").append('<div id="page-' + ++this.pageCount + '" class="pt-page"></div>'),
        "#page-" + this.pageCount
    }
    ,
    i.prototype.showPage = function(e) {
        if (e === this.currentPage)
            return;
        var t = this;
        t.currentPage && t.transitionOff(t.currentPage, function() {}),
        t.currentPage = e,
        t.transitionOn(e, function() {})
    }
    ,
    i.prototype.transitionOn = function(e, t) {
        e.$el.hide(),
        e.$el.fadeIn("slow", t)
    }
    ,
    i.prototype.transitionOff = function(e, t) {
        e.$el.fadeOut("fast", t)
    }
    ,
    i.prototype.login = function() {
        var e = this;
        require(["views/signin"], function(t) {
            var n = new t({
                el: e.createPage()
            });
            e.showPage(n)
        })
    }
    ,
    i.prototype.isTesting = function() {
        return this.testing
    }
    ,
    i.prototype.getTestData = function() {
        return this.testBlob
    }
    ,
    new i
}),
define("text", ["module"], function(e) {
    "use strict";
    function v(e, t) {
        return e === undefined || e === "" ? t : e
    }
    function m(e, t, n, r) {
        if (t === r)
            return !0;
        if (e === n) {
            if (e === "http")
                return v(t, "80") === v(r, "80");
            if (e === "https")
                return v(t, "443") === v(r, "443")
        }
        return !1
    }
    var t, n, r, i, s, o = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"], u = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im, a = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im, f = typeof location != "undefined" && location.href, l = f && location.protocol && location.protocol.replace(/\:/, ""), c = f && location.hostname, h = f && (location.port || undefined), p = {}, d = e.config && e.config() || {};
    t = {
        version: "2.0.15",
        strip: function(e) {
            if (e) {
                e = e.replace(u, "");
                var t = e.match(a);
                t && (e = t[1])
            } else
                e = "";
            return e
        },
        jsEscape: function(e) {
            return e.replace(/(['\\])/g, "\\$1").replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r").replace(/[\u2028]/g, "\\u2028").replace(/[\u2029]/g, "\\u2029")
        },
        createXhr: d.createXhr || function() {
            var e, t, n;
            if (typeof XMLHttpRequest != "undefined")
                return new XMLHttpRequest;
            if (typeof ActiveXObject != "undefined")
                for (t = 0; t < 3; t += 1) {
                    n = o[t];
                    try {
                        e = new ActiveXObject(n)
                    } catch (r) {}
                    if (e) {
                        o = [n];
                        break
                    }
                }
            return e
        }
        ,
        parseName: function(e) {
            var t, n, r, i = !1, s = e.lastIndexOf("."), o = e.indexOf("./") === 0 || e.indexOf("../") === 0;
            return s !== -1 && (!o || s > 1) ? (t = e.substring(0, s),
            n = e.substring(s + 1)) : t = e,
            r = n || t,
            s = r.indexOf("!"),
            s !== -1 && (i = r.substring(s + 1) === "strip",
            r = r.substring(0, s),
            n ? n = r : t = r),
            {
                moduleName: t,
                ext: n,
                strip: i
            }
        },
        xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,
        useXhr: function(e, n, r, i) {
            var s, o, u, a = t.xdRegExp.exec(e);
            return a ? (s = a[2],
            o = a[3],
            o = o.split(":"),
            u = o[1],
            o = o[0],
            (!s || s === n) && (!o || o.toLowerCase() === r.toLowerCase()) && (!u && !o || m(s, u, n, i))) : !0
        },
        finishLoad: function(e, n, r, i) {
            r = n ? t.strip(r) : r,
            d.isBuild && (p[e] = r),
            i(r)
        },
        load: function(e, n, r, i) {
            if (i && i.isBuild && !i.inlineText) {
                r();
                return
            }
            d.isBuild = i && i.isBuild;
            var s = t.parseName(e)
              , o = s.moduleName + (s.ext ? "." + s.ext : "")
              , u = n.toUrl(o)
              , a = d.useXhr || t.useXhr;
            if (u.indexOf("empty:") === 0) {
                r();
                return
            }
            !f || a(u, l, c, h) ? t.get(u, function(n) {
                t.finishLoad(e, s.strip, n, r)
            }, function(e) {
                r.error && r.error(e)
            }) : n([o], function(e) {
                t.finishLoad(s.moduleName + "." + s.ext, s.strip, e, r)
            })
        },
        write: function(e, n, r, i) {
            if (p.hasOwnProperty(n)) {
                var s = t.jsEscape(p[n]);
                r.asModule(e + "!" + n, "define(function () { return '" + s + "';});\n")
            }
        },
        writeFile: function(e, n, r, i, s) {
            var o = t.parseName(n)
              , u = o.ext ? "." + o.ext : ""
              , a = o.moduleName + u
              , f = r.toUrl(o.moduleName + u) + ".js";
            t.load(a, r, function(n) {
                var r = function(e) {
                    return i(f, e)
                };
                r.asModule = function(e, t) {
                    return i.asModule(e, f, t)
                }
                ,
                t.write(e, a, r, s)
            }, s)
        }
    };
    if (d.env === "node" || !d.env && typeof process != "undefined" && process.versions && !!process.versions.node && !process.versions["node-webkit"] && !process.versions["atom-shell"])
        n = require.nodeRequire("fs"),
        t.get = function(e, t, r) {
            try {
                var i = n.readFileSync(e, "utf8");
                i[0] === "﻿" && (i = i.substring(1)),
                t(i)
            } catch (s) {
                r && r(s)
            }
        }
        ;
    else if (d.env === "xhr" || !d.env && t.createXhr())
        t.get = function(e, n, r, i) {
            var s = t.createXhr(), o;
            s.open("GET", e, !0);
            if (i)
                for (o in i)
                    i.hasOwnProperty(o) && s.setRequestHeader(o.toLowerCase(), i[o]);
            d.onXhr && d.onXhr(s, e),
            s.onreadystatechange = function(t) {
                var i, o;
                s.readyState === 4 && (i = s.status || 0,
                i > 399 && i < 600 ? (o = new Error(e + " HTTP status: " + i),
                o.xhr = s,
                r && r(o)) : n(s.responseText),
                d.onXhrComplete && d.onXhrComplete(s, e))
            }
            ,
            s.send(null)
        }
        ;
    else if (d.env === "rhino" || !d.env && typeof Packages != "undefined" && typeof java != "undefined")
        t.get = function(e, t) {
            var n, r, i = "utf-8", s = new java.io.File(e), o = java.lang.System.getProperty("line.separator"), u = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(s),i)), a = "";
            try {
                n = new java.lang.StringBuffer,
                r = u.readLine(),
                r && r.length() && r.charAt(0) === 65279 && (r = r.substring(1)),
                r !== null && n.append(r);
                while ((r = u.readLine()) !== null)
                    n.append(o),
                    n.append(r);
                a = String(n.toString())
            } finally {
                u.close()
            }
            t(a)
        }
        ;
    else if (d.env === "xpconnect" || !d.env && typeof Components != "undefined" && Components.classes && Components.interfaces)
        r = Components.classes,
        i = Components.interfaces,
        Components.utils["import"]("resource://gre/modules/FileUtils.jsm"),
        s = "@mozilla.org/windows-registry-key;1"in r,
        t.get = function(e, t) {
            var n, o, u, a = {};
            s && (e = e.replace(/\//g, "\\")),
            u = new FileUtils.File(e);
            try {
                n = r["@mozilla.org/network/file-input-stream;1"].createInstance(i.nsIFileInputStream),
                n.init(u, 1, 0, !1),
                o = r["@mozilla.org/intl/converter-input-stream;1"].createInstance(i.nsIConverterInputStream),
                o.init(n, "utf-8", n.available(), i.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER),
                o.readString(n.available(), a),
                o.close(),
                n.close(),
                t(a.value)
            } catch (f) {
                throw new Error((u && u.path || "") + ": " + f)
            }
        }
        ;
    return t
}),
define("text!templates/slidebanner.html", [], function() {
    return '<div id="slide-in-banner" class="slide-in-banner" style="background: <%=background%>; max-height: <%=img_height%>px; cursor:pointer;">\n    <img id="slide-in-banner-img" class="pure-img" style="margin: 0 auto; max-height: <%=img_height%>px;" src="<%=img_src%>" data-link="<%=img_link%>" data-campaign="<%=campaign%>" >\n</div>'
}),
define("views/slidebanner", ["jquery", "underscore", "backbone", "settings", "analytics", "text!templates/slidebanner.html"], function(e, t, n, r, i, s) {
    var o = n.View.extend({
        options: {},
        initialize: function() {
            var e = this;
            e.options = r.bannerSettings,
            e.setBannerParams("default")
        },
        events: {
            "click #slide-in-banner-img": "doBannerClick"
        },
        doBannerClick: function(t) {
            i.trackEvent("SlideBanner", "Click", e(t.currentTarget).data("campaign"), 0),
            window.open(e(t.currentTarget).data("link"), "_blank")
        },
        setBannerParams: function(e) {
            var t = this;
            t.options[e] !== undefined ? t.params = t.pickRandomBannerByChance(t.options[e]) : t.params = t.pickRandomBannerByChance(t.options["default"]),
            t.render()
        },
        render: function() {
            var e = this
              , n = t.template(s, e.params);
            e.$el.html(n)
        },
        toggle: function(t, n) {
            var r = this;
            t == "on" ? (r.setBannerParams(n),
            e("#slide-in-banner").is(":hidden") && (i.trackEvent("SlideBanner", "On", r.params.campaign, 0),
            e("#slide-in-banner").slideToggle("fast"))) : t == "off" && (e("#slide-in-banner").is(":hidden") || e("#slide-in-banner").slideToggle("fast"))
        },
        isOff: function() {
            return e("#slide-in-banner").is(":hidden")
        },
        isOn: function() {
            return !e("#slide-in-banner").is(":hidden")
        },
        pickRandomBannerByChance: function(e) {
            var t = Math.ceil(Math.random() * 100)
              , n = 0;
            for (var r = 0; r < e.length; ++r) {
                if (t < n + e[r].chance)
                    return e[r];
                n += e[r].chance
            }
            return e[0]
        }
    });
    return o
}),
define("app", ["jquery", "underscore", "backbone", "router", "analytics", "views/slidebanner"], function(e, t, n, r, i, s) {
    var o = function() {
        r.initialize()
    };
    return n.View.prototype.close = function() {
        this.beforeClose && this.beforeClose(),
        this.undelegateEvents(),
        this.$el.empty(),
        this.stopListening(),
        this.unbind()
    }
    ,
    n.modalDialog = function(e) {
        e instanceof Error ? e = {
            title: "Error",
            message: e.message
        } : typeof e == "string" && (e = {
            title: "Error",
            message: e
        }),
        require(["views/modal"], function(t) {
            var n = new t({
                el: "#dialog"
            });
            n.$el.html(n.render(e))
        })
    }
    ,
    n.handleError = function(e) {
        n.modalDialog(e)
    }
    ,
    n.bannerInit = function() {
        this.bannerView = new s({
            el: "#banner"
        })
    }
    ,
    n.slideBannerOn = function(e) {
        var t = this;
        t.slideBannerOff(),
        t.bannerView.toggle("on", e)
    }
    ,
    n.slideBannerOff = function() {
        var e = this;
        e.bannerView.isOn() && e.bannerView.toggle("off")
    }
    ,
    n.slideBannerToggle = function(e) {
        var t = this;
        t.bannerView.isOn() ? t.bannerView.toggle("off") : t.bannerView.toggle("on", e)
    }
    ,
    n.getParameterByName = function(e) {
        e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var t = new RegExp("[\\?&]" + e + "=([^&#]*)")
          , n = t.exec(location.search);
        return n === null ? "" : decodeURIComponent(n[1].replace(/\+/g, " "))
    }
    ,
    n.hasHashRoomCode = function() {
        return window.location.hash && window.location.hash.length == 5
    }
    ,
    n.getHashRoomCode = function() {
        return window.location.hash.substr(1, 4)
    }
    ,
    {
        initialize: o
    }
}),
require.config({
    paths: {
        jquery: "libs/jquery/dist/jquery",
        "jquery-cookie": "libs/jquery-cookie/jquery.cookie",
        "jquery.maskedinput": "libs-misc/jquery.maskedinput/jquery.maskedinput.min",
        underscore: "libs/underscore/underscore",
        bootstrap: "libs/bootstrap/dist/js/bootstrap.min",
        backbone: "libs/backbone/backbone",
        text: "libs/requirejs-text/text",
        blobcast: "blobcast/blobcastclient",
        socketio: "blobcast/socket.io",
        uuid: "blobcast/uuid",
        "google-analytics": "libs-misc/google-analytics/analytics",
        analytics: "models/analytics",
        "twitch-sdk": "libs-misc/twitch/twitch.min",
        "twitch-model": "models/twitch",
        iscroll: "libs/iscroll/build/iscroll",
        drawer: "libs/drawer/dist/js/drawer.min",
        adroll: "models/adroll"
    },
    shim: {
        backbone: {
            deps: ["jquery", "underscore"],
            exports: "Backbone"
        },
        blobcast: {
            deps: ["socketio"],
            exports: "BlobCastClient"
        },
        "jquery-cookie": {
            deps: ["jquery"]
        },
        "google-analytics": {
            exports: "ga"
        },
        "jquery.maskedinput": ["jquery"]
    },
    map: {
        "*": {
            css: "libs/require-css/css"
        }
    },
    waitSeconds: 10
}),
require.onError = function(e) {
    throw console.log("[RequireJS]  onError - message => " + e.message),
    e
}
,
require(["jquery", "underscore", "bootstrap", "backbone", "google-analytics", "app"], function(e, t, n, r, i, s) {
    s.initialize()
}, function(e) {
    var t = e.requireModules && e.requireModules[0];
    t == "google-analytics" && (require.undef(t),
    require.config({
        paths: {
            "google-analytics": "libs/google-analytics/analytics"
        }
    }),
    require(["jquery", "underscore", "bootstrap", "backbone", "google-analytics", "app"])),
    console.log("[RequireJS]  errback - message => " + e.message),
    console.log("[RequireJS]  errback - Failed ID => " + t)
}),
define("main", function() {}),
function(e) {
    "use strict";
    function o() {
        var r = e.crypto || e.msCrypto;
        if (!t && r && r.getRandomValues)
            try {
                var s = new Uint8Array(16);
                i = t = function() {
                    return r.getRandomValues(s),
                    s
                }
                ,
                t()
            } catch (o) {}
        if (!t) {
            var u = new Array(16);
            n = t = function() {
                for (var e = 0, t; e < 16; e++)
                    (e & 3) === 0 && (t = Math.random() * 4294967296),
                    u[e] = t >>> ((e & 3) << 3) & 255;
                return u
            }
            ,
            "undefined" != typeof console && console.warn && console.warn("[SECURITY] node-uuid: crypto not usable, falling back to insecure Math.random()")
        }
    }
    function u() {
        if ("function" == typeof require)
            try {
                var e = require("crypto").randomBytes;
                r = t = e && function() {
                    return e(16)
                }
                ,
                t()
            } catch (n) {}
    }
    function h(e, t, n) {
        var r = t && n || 0
          , i = 0;
        t = t || [],
        e.toLowerCase().replace(/[0-9a-f]{2}/g, function(e) {
            i < 16 && (t[r + i++] = l[e])
        });
        while (i < 16)
            t[r + i++] = 0;
        return t
    }
    function p(e, t) {
        var n = t || 0
          , r = f;
        return r[e[n++]] + r[e[n++]] + r[e[n++]] + r[e[n++]] + "-" + r[e[n++]] + r[e[n++]] + "-" + r[e[n++]] + r[e[n++]] + "-" + r[e[n++]] + r[e[n++]] + "-" + r[e[n++]] + r[e[n++]] + r[e[n++]] + r[e[n++]] + r[e[n++]] + r[e[n++]]
    }
    function b(e, t, n) {
        var r = t && n || 0
          , i = t || [];
        e = e || {};
        var s = e.clockseq != null ? e.clockseq : m
          , o = e.msecs != null ? e.msecs : (new Date).getTime()
          , u = e.nsecs != null ? e.nsecs : y + 1
          , a = o - g + (u - y) / 1e4;
        a < 0 && e.clockseq == null && (s = s + 1 & 16383),
        (a < 0 || o > g) && e.nsecs == null && (u = 0);
        if (u >= 1e4)
            throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        g = o,
        y = u,
        m = s,
        o += 122192928e5;
        var f = ((o & 268435455) * 1e4 + u) % 4294967296;
        i[r++] = f >>> 24 & 255,
        i[r++] = f >>> 16 & 255,
        i[r++] = f >>> 8 & 255,
        i[r++] = f & 255;
        var l = o / 4294967296 * 1e4 & 268435455;
        i[r++] = l >>> 8 & 255,
        i[r++] = l & 255,
        i[r++] = l >>> 24 & 15 | 16,
        i[r++] = l >>> 16 & 255,
        i[r++] = s >>> 8 | 128,
        i[r++] = s & 255;
        var c = e.node || v;
        for (var h = 0; h < 6; h++)
            i[r + h] = c[h];
        return t ? t : p(i)
    }
    function w(e, n, r) {
        var i = n && r || 0;
        typeof e == "string" && (n = e === "binary" ? new a(16) : null,
        e = null),
        e = e || {};
        var s = e.random || (e.rng || t)();
        s[6] = s[6] & 15 | 64,
        s[8] = s[8] & 63 | 128;
        if (n)
            for (var o = 0; o < 16; o++)
                n[i + o] = s[o];
        return n || p(s)
    }
    var t, n, r, i, s;
    e ? o() : u();
    var a = "function" == typeof Buffer ? Buffer : Array
      , f = []
      , l = {};
    for (var c = 0; c < 256; c++)
        f[c] = (c + 256).toString(16).substr(1),
        l[f[c]] = c;
    var d = t()
      , v = [d[0] | 1, d[1], d[2], d[3], d[4], d[5]]
      , m = (d[6] << 8 | d[7]) & 16383
      , g = 0
      , y = 0
      , E = w;
    E.v1 = b,
    E.v4 = w,
    E.parse = h,
    E.unparse = p,
    E.BufferClass = a,
    E._rng = t,
    E._mathRNG = n,
    E._nodeRNG = r,
    E._whatwgRNG = i,
    "undefined" != typeof module && module.exports ? module.exports = E : typeof define == "function" && define.amd ? define("uuid", [], function() {
        return E
    }) : (s = e.uuid,
    E.noConflict = function() {
        return e.uuid = s,
        E
    }
    ,
    e.uuid = E)
}("undefined" != typeof window ? window : null);
var io = "undefined" == typeof module ? {} : module.exports;
(function() {
    (function(e, t) {
        var n = e;
        n.version = "0.9.17",
        n.protocol = 1,
        n.transports = [],
        n.j = [],
        n.sockets = {},
        n.connect = function(e, r) {
            var i = n.util.parseUri(e), s, o;
            t && t.location && (i.protocol = i.protocol || t.location.protocol.slice(0, -1),
            i.host = i.host || (t.document ? t.document.domain : t.location.hostname),
            i.port = i.port || t.location.port),
            s = n.util.uniqueUri(i);
            var u = {
                host: i.host,
                secure: "https" == i.protocol,
                port: i.port || ("https" == i.protocol ? 443 : 80),
                query: i.query || ""
            };
            n.util.merge(u, r);
            if (u["force new connection"] || !n.sockets[s])
                o = new n.Socket(u);
            return !u["force new connection"] && o && (n.sockets[s] = o),
            o = o || n.sockets[s],
            o.of(i.path.length > 1 ? i.path : "")
        }
    })("object" == typeof module ? module.exports : this.io = {}, this),
    function(e, t) {
        var n = e.util = {}
          , r = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
          , i = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
        n.parseUri = function(e) {
            var t = r.exec(e || "")
              , n = {}
              , s = 14;
            while (s--)
                n[i[s]] = t[s] || "";
            return n.protocol === "localhost" && (n.port = n.host,
            n.host = n.protocol,
            n.protocol = "",
            n.authority = ""),
            n
        }
        ,
        n.uniqueUri = function(e) {
            var n = e.protocol
              , r = e.host
              , i = e.port;
            return "document"in t ? (r = r || document.domain,
            i = i || (n == "https" && document.location.protocol !== "https:" ? 443 : document.location.port)) : (r = r || "localhost",
            !i && n == "https" && (i = 443)),
            (n || "http") + "://" + r + ":" + (i || 80)
        }
        ,
        n.query = function(e, t) {
            var r = n.chunkQuery(e || "")
              , i = [];
            n.merge(r, n.chunkQuery(t || ""));
            for (var s in r)
                r.hasOwnProperty(s) && i.push(s + "=" + r[s]);
            return i.length ? "?" + i.join("&") : ""
        }
        ,
        n.chunkQuery = function(e) {
            var t = {}, n = e.split("&"), r = 0, i = n.length, s;
            for (; r < i; ++r)
                s = n[r].split("="),
                s[0] && (t[s[0]] = s[1]);
            return t
        }
        ;
        var s = !1;
        n.load = function(e) {
            if ("document"in t && document.readyState === "complete" || s)
                return e();
            n.on(t, "load", e, !1)
        }
        ,
        n.on = function(e, t, n, r) {
            e.attachEvent ? e.attachEvent("on" + t, n) : e.addEventListener && e.addEventListener(t, n, r)
        }
        ,
        n.request = function(e) {
            if (e && "undefined" != typeof XDomainRequest && !n.ua.hasCORS)
                return new XDomainRequest;
            if ("undefined" != typeof XMLHttpRequest && (!e || n.ua.hasCORS))
                return new XMLHttpRequest;
            if (!e)
                try {
                    return new (window[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
                } catch (t) {}
            return null
        }
        ,
        "undefined" != typeof window && n.load(function() {
            s = !0
        }),
        n.defer = function(e) {
            if (!n.ua.webkit || "undefined" != typeof importScripts)
                return e();
            n.load(function() {
                setTimeout(e, 100)
            })
        }
        ,
        n.merge = function(t, r, i, s) {
            var o = s || [], u = typeof i == "undefined" ? 2 : i, a;
            for (a in r)
                r.hasOwnProperty(a) && n.indexOf(o, a) < 0 && (typeof t[a] != "object" || !u ? (t[a] = r[a],
                o.push(r[a])) : n.merge(t[a], r[a], u - 1, o));
            return t
        }
        ,
        n.mixin = function(e, t) {
            n.merge(e.prototype, t.prototype)
        }
        ,
        n.inherit = function(e, t) {
            function n() {}
            n.prototype = t.prototype,
            e.prototype = new n
        }
        ,
        n.isArray = Array.isArray || function(e) {
            return Object.prototype.toString.call(e) === "[object Array]"
        }
        ,
        n.intersect = function(e, t) {
            var r = []
              , i = e.length > t.length ? e : t
              , s = e.length > t.length ? t : e;
            for (var o = 0, u = s.length; o < u; o++)
                ~n.indexOf(i, s[o]) && r.push(s[o]);
            return r
        }
        ,
        n.indexOf = function(e, t, n) {
            for (var r = e.length, n = n < 0 ? n + r < 0 ? 0 : n + r : n || 0; n < r && e[n] !== t; n++)
                ;
            return r <= n ? -1 : n
        }
        ,
        n.toArray = function(e) {
            var t = [];
            for (var n = 0, r = e.length; n < r; n++)
                t.push(e[n]);
            return t
        }
        ,
        n.ua = {},
        n.ua.hasCORS = "undefined" != typeof XMLHttpRequest && function() {
            try {
                var e = new XMLHttpRequest
            } catch (t) {
                return !1
            }
            return e.withCredentials != undefined
        }(),
        n.ua.webkit = "undefined" != typeof navigator && /webkit/i.test(navigator.userAgent),
        n.ua.iDevice = "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent)
    }("undefined" != typeof io ? io : module.exports, this),
    function(e, t) {
        function n() {}
        e.EventEmitter = n,
        n.prototype.on = function(e, n) {
            return this.$events || (this.$events = {}),
            this.$events[e] ? t.util.isArray(this.$events[e]) ? this.$events[e].push(n) : this.$events[e] = [this.$events[e], n] : this.$events[e] = n,
            this
        }
        ,
        n.prototype.addListener = n.prototype.on,
        n.prototype.once = function(e, t) {
            function r() {
                n.removeListener(e, r),
                t.apply(this, arguments)
            }
            var n = this;
            return r.listener = t,
            this.on(e, r),
            this
        }
        ,
        n.prototype.removeListener = function(e, n) {
            if (this.$events && this.$events[e]) {
                var r = this.$events[e];
                if (t.util.isArray(r)) {
                    var i = -1;
                    for (var s = 0, o = r.length; s < o; s++)
                        if (r[s] === n || r[s].listener && r[s].listener === n) {
                            i = s;
                            break
                        }
                    if (i < 0)
                        return this;
                    r.splice(i, 1),
                    r.length || delete this.$events[e]
                } else
                    (r === n || r.listener && r.listener === n) && delete this.$events[e]
            }
            return this
        }
        ,
        n.prototype.removeAllListeners = function(e) {
            return e === undefined ? (this.$events = {},
            this) : (this.$events && this.$events[e] && (this.$events[e] = null),
            this)
        }
        ,
        n.prototype.listeners = function(e) {
            return this.$events || (this.$events = {}),
            this.$events[e] || (this.$events[e] = []),
            t.util.isArray(this.$events[e]) || (this.$events[e] = [this.$events[e]]),
            this.$events[e]
        }
        ,
        n.prototype.emit = function(e) {
            if (!this.$events)
                return !1;
            var n = this.$events[e];
            if (!n)
                return !1;
            var r = Array.prototype.slice.call(arguments, 1);
            if ("function" == typeof n)
                n.apply(this, r);
            else {
                if (!t.util.isArray(n))
                    return !1;
                var i = n.slice();
                for (var s = 0, o = i.length; s < o; s++)
                    i[s].apply(this, r)
            }
            return !0
        }
    }("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports),
    function(exports, nativeJSON) {
        "use strict";
        function f(e) {
            return e < 10 ? "0" + e : e
        }
        function date(e, t) {
            return isFinite(e.valueOf()) ? e.getUTCFullYear() + "-" + f(e.getUTCMonth() + 1) + "-" + f(e.getUTCDate()) + "T" + f(e.getUTCHours()) + ":" + f(e.getUTCMinutes()) + ":" + f(e.getUTCSeconds()) + "Z" : null
        }
        function quote(e) {
            return escapable.lastIndex = 0,
            escapable.test(e) ? '"' + e.replace(escapable, function(e) {
                var t = meta[e];
                return typeof t == "string" ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + e + '"'
        }
        function str(e, t) {
            var n, r, i, s, o = gap, u, a = t[e];
            a instanceof Date && (a = date(e)),
            typeof rep == "function" && (a = rep.call(t, e, a));
            switch (typeof a) {
            case "string":
                return quote(a);
            case "number":
                return isFinite(a) ? String(a) : "null";
            case "boolean":
            case "null":
                return String(a);
            case "object":
                if (!a)
                    return "null";
                gap += indent,
                u = [];
                if (Object.prototype.toString.apply(a) === "[object Array]") {
                    s = a.length;
                    for (n = 0; n < s; n += 1)
                        u[n] = str(n, a) || "null";
                    return i = u.length === 0 ? "[]" : gap ? "[\n" + gap + u.join(",\n" + gap) + "\n" + o + "]" : "[" + u.join(",") + "]",
                    gap = o,
                    i
                }
                if (rep && typeof rep == "object") {
                    s = rep.length;
                    for (n = 0; n < s; n += 1)
                        typeof rep[n] == "string" && (r = rep[n],
                        i = str(r, a),
                        i && u.push(quote(r) + (gap ? ": " : ":") + i))
                } else
                    for (r in a)
                        Object.prototype.hasOwnProperty.call(a, r) && (i = str(r, a),
                        i && u.push(quote(r) + (gap ? ": " : ":") + i));
                return i = u.length === 0 ? "{}" : gap ? "{\n" + gap + u.join(",\n" + gap) + "\n" + o + "}" : "{" + u.join(",") + "}",
                gap = o,
                i
            }
        }
        if (nativeJSON && nativeJSON.parse)
            return exports.JSON = {
                parse: nativeJSON.parse,
                stringify: nativeJSON.stringify
            };
        var JSON = exports.JSON = {}, cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
            "\b": "\\b",
            "	": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        }, rep;
        JSON.stringify = function(e, t, n) {
            var r;
            gap = "",
            indent = "";
            if (typeof n == "number")
                for (r = 0; r < n; r += 1)
                    indent += " ";
            else
                typeof n == "string" && (indent = n);
            rep = t;
            if (!t || typeof t == "function" || typeof t == "object" && typeof t.length == "number")
                return str("", {
                    "": e
                });
            throw new Error("JSON.stringify")
        }
        ,
        JSON.parse = function(text, reviver) {
            function walk(e, t) {
                var n, r, i = e[t];
                if (i && typeof i == "object")
                    for (n in i)
                        Object.prototype.hasOwnProperty.call(i, n) && (r = walk(i, n),
                        r !== undefined ? i[n] = r : delete i[n]);
                return reviver.call(e, t, i)
            }
            var j;
            text = String(text),
            cx.lastIndex = 0,
            cx.test(text) && (text = text.replace(cx, function(e) {
                return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            }));
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
                return j = eval("(" + text + ")"),
                typeof reviver == "function" ? walk({
                    "": j
                }, "") : j;
            throw new SyntaxError("JSON.parse")
        }
    }("undefined" != typeof io ? io : module.exports, typeof JSON != "undefined" ? JSON : undefined),
    function(e, t) {
        var n = e.parser = {}
          , r = n.packets = ["disconnect", "connect", "heartbeat", "message", "json", "event", "ack", "error", "noop"]
          , i = n.reasons = ["transport not supported", "client not handshaken", "unauthorized"]
          , s = n.advice = ["reconnect"]
          , o = t.JSON
          , u = t.util.indexOf;
        n.encodePacket = function(e) {
            var t = u(r, e.type)
              , n = e.id || ""
              , a = e.endpoint || ""
              , f = e.ack
              , l = null;
            switch (e.type) {
            case "error":
                var c = e.reason ? u(i, e.reason) : ""
                  , h = e.advice ? u(s, e.advice) : "";
                if (c !== "" || h !== "")
                    l = c + (h !== "" ? "+" + h : "");
                break;
            case "message":
                e.data !== "" && (l = e.data);
                break;
            case "event":
                var p = {
                    name: e.name
                };
                e.args && e.args.length && (p.args = e.args),
                l = o.stringify(p);
                break;
            case "json":
                l = o.stringify(e.data);
                break;
            case "connect":
                e.qs && (l = e.qs);
                break;
            case "ack":
                l = e.ackId + (e.args && e.args.length ? "+" + o.stringify(e.args) : "")
            }
            var d = [t, n + (f == "data" ? "+" : ""), a];
            return l !== null && l !== undefined && d.push(l),
            d.join(":")
        }
        ,
        n.encodePayload = function(e) {
            var t = "";
            if (e.length == 1)
                return e[0];
            for (var n = 0, r = e.length; n < r; n++) {
                var i = e[n];
                t += "�" + i.length + "�" + e[n]
            }
            return t
        }
        ;
        var a = /([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;
        n.decodePacket = function(e) {
            var t = e.match(a);
            if (!t)
                return {};
            var n = t[2] || ""
              , e = t[5] || ""
              , u = {
                type: r[t[1]],
                endpoint: t[4] || ""
            };
            n && (u.id = n,
            t[3] ? u.ack = "data" : u.ack = !0);
            switch (u.type) {
            case "error":
                var t = e.split("+");
                u.reason = i[t[0]] || "",
                u.advice = s[t[1]] || "";
                break;
            case "message":
                u.data = e || "";
                break;
            case "event":
                try {
                    var f = o.parse(e);
                    u.name = f.name,
                    u.args = f.args
                } catch (l) {}
                u.args = u.args || [];
                break;
            case "json":
                try {
                    u.data = o.parse(e)
                } catch (l) {}
                break;
            case "connect":
                u.qs = e || "";
                break;
            case "ack":
                var t = e.match(/^([0-9]+)(\+)?(.*)/);
                if (t) {
                    u.ackId = t[1],
                    u.args = [];
                    if (t[3])
                        try {
                            u.args = t[3] ? o.parse(t[3]) : []
                        } catch (l) {}
                }
                break;
            case "disconnect":
            case "heartbeat":
            }
            return u
        }
        ,
        n.decodePayload = function(e) {
            if (e.charAt(0) == "�") {
                var t = [];
                for (var r = 1, i = ""; r < e.length; r++)
                    e.charAt(r) == "�" ? (t.push(n.decodePacket(e.substr(r + 1).substr(0, i))),
                    r += Number(i) + 1,
                    i = "") : i += e.charAt(r);
                return t
            }
            return [n.decodePacket(e)]
        }
    }("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports),
    function(e, t) {
        function n(e, t) {
            this.socket = e,
            this.sessid = t
        }
        e.Transport = n,
        t.util.mixin(n, t.EventEmitter),
        n.prototype.heartbeats = function() {
            return !0
        }
        ,
        n.prototype.onData = function(e) {
            this.clearCloseTimeout(),
            (this.socket.connected || this.socket.connecting || this.socket.reconnecting) && this.setCloseTimeout();
            if (e !== "") {
                var n = t.parser.decodePayload(e);
                if (n && n.length)
                    for (var r = 0, i = n.length; r < i; r++)
                        this.onPacket(n[r])
            }
            return this
        }
        ,
        n.prototype.onPacket = function(e) {
            return this.socket.setHeartbeatTimeout(),
            e.type == "heartbeat" ? this.onHeartbeat() : (e.type == "connect" && e.endpoint == "" && this.onConnect(),
            e.type == "error" && e.advice == "reconnect" && (this.isOpen = !1),
            this.socket.onPacket(e),
            this)
        }
        ,
        n.prototype.setCloseTimeout = function() {
            if (!this.closeTimeout) {
                var e = this;
                this.closeTimeout = setTimeout(function() {
                    e.onDisconnect()
                }, this.socket.closeTimeout)
            }
        }
        ,
        n.prototype.onDisconnect = function() {
            return this.isOpen && this.close(),
            this.clearTimeouts(),
            this.socket.onDisconnect(),
            this
        }
        ,
        n.prototype.onConnect = function() {
            return this.socket.onConnect(),
            this
        }
        ,
        n.prototype.clearCloseTimeout = function() {
            this.closeTimeout && (clearTimeout(this.closeTimeout),
            this.closeTimeout = null)
        }
        ,
        n.prototype.clearTimeouts = function() {
            this.clearCloseTimeout(),
            this.reopenTimeout && clearTimeout(this.reopenTimeout)
        }
        ,
        n.prototype.packet = function(e) {
            this.send(t.parser.encodePacket(e))
        }
        ,
        n.prototype.onHeartbeat = function(e) {
            this.packet({
                type: "heartbeat"
            })
        }
        ,
        n.prototype.onOpen = function() {
            this.isOpen = !0,
            this.clearCloseTimeout(),
            this.socket.onOpen()
        }
        ,
        n.prototype.onClose = function() {
            var e = this;
            this.isOpen = !1,
            this.socket.onClose(),
            this.onDisconnect()
        }
        ,
        n.prototype.prepareUrl = function() {
            var e = this.socket.options;
            return this.scheme() + "://" + e.host + ":" + e.port + "/" + e.resource + "/" + t.protocol + "/" + this.name + "/" + this.sessid
        }
        ,
        n.prototype.ready = function(e, t) {
            t.call(this)
        }
    }("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports),
    function(e, t, n) {
        function r(e) {
            this.options = {
                port: 80,
                secure: !1,
                document: "document"in n ? document : !1,
                resource: "socket.io",
                transports: t.transports,
                "connect timeout": 1e4,
                "try multiple transports": !0,
                reconnect: !0,
                "reconnection delay": 500,
                "reconnection limit": Infinity,
                "reopen delay": 3e3,
                "max reconnection attempts": 10,
                "sync disconnect on unload": !1,
                "auto connect": !0,
                "flash policy port": 10843,
                manualFlush: !1
            },
            t.util.merge(this.options, e),
            this.connected = !1,
            this.open = !1,
            this.connecting = !1,
            this.reconnecting = !1,
            this.namespaces = {},
            this.buffer = [],
            this.doBuffer = !1;
            if (this.options["sync disconnect on unload"] && (!this.isXDomain() || t.util.ua.hasCORS)) {
                var r = this;
                t.util.on(n, "beforeunload", function() {
                    r.disconnectSync()
                }, !1)
            }
            this.options["auto connect"] && this.connect()
        }
        function i() {}
        e.Socket = r,
        t.util.mixin(r, t.EventEmitter),
        r.prototype.of = function(e) {
            return this.namespaces[e] || (this.namespaces[e] = new t.SocketNamespace(this,e),
            e !== "" && this.namespaces[e].packet({
                type: "connect"
            })),
            this.namespaces[e]
        }
        ,
        r.prototype.publish = function() {
            this.emit.apply(this, arguments);
            var e;
            for (var t in this.namespaces)
                this.namespaces.hasOwnProperty(t) && (e = this.of(t),
                e.$emit.apply(e, arguments))
        }
        ,
        r.prototype.handshake = function(e) {
            function s(t) {
                t instanceof Error ? (n.connecting = !1,
                n.onError(t.message)) : e.apply(null, t.split(":"))
            }
            var n = this
              , r = this.options
              , o = ["http" + (r.secure ? "s" : "") + ":/", r.host + ":" + r.port, r.resource, t.protocol, t.util.query(this.options.query, "t=" + +(new Date))].join("/");
            if (this.isXDomain() && !t.util.ua.hasCORS) {
                var u = document.getElementsByTagName("script")[0]
                  , a = document.createElement("script");
                a.src = o + "&jsonp=" + t.j.length,
                u.parentNode.insertBefore(a, u),
                t.j.push(function(e) {
                    s(e),
                    a.parentNode.removeChild(a)
                })
            } else {
                var f = t.util.request();
                f.open("GET", o, !0),
                this.isXDomain() && (f.withCredentials = !0),
                f.onreadystatechange = function() {
                    f.readyState == 4 && (f.onreadystatechange = i,
                    f.status == 200 ? s(f.responseText) : f.status == 403 ? n.onError(f.responseText) : (n.connecting = !1,
                    !n.reconnecting && n.onError(f.responseText)))
                }
                ,
                f.send(null)
            }
        }
        ,
        r.prototype.getTransport = function(e) {
            var n = e || this.transports, r;
            for (var i = 0, s; s = n[i]; i++)
                if (t.Transport[s] && t.Transport[s].check(this) && (!this.isXDomain() || t.Transport[s].xdomainCheck(this)))
                    return new t.Transport[s](this,this.sessionid);
            return null
        }
        ,
        r.prototype.connect = function(e) {
            if (this.connecting)
                return this;
            var n = this;
            return n.connecting = !0,
            this.handshake(function(r, i, s, o) {
                function u(e) {
                    n.transport && n.transport.clearTimeouts(),
                    n.transport = n.getTransport(e);
                    if (!n.transport)
                        return n.publish("connect_failed");
                    n.transport.ready(n, function() {
                        n.connecting = !0,
                        n.publish("connecting", n.transport.name),
                        n.transport.open(),
                        n.options["connect timeout"] && (n.connectTimeoutTimer = setTimeout(function() {
                            if (!n.connected) {
                                n.connecting = !1;
                                if (n.options["try multiple transports"]) {
                                    var e = n.transports;
                                    while (e.length > 0 && e.splice(0, 1)[0] != n.transport.name)
                                        ;
                                    e.length ? u(e) : n.publish("connect_failed")
                                }
                            }
                        }, n.options["connect timeout"]))
                    })
                }
                n.sessionid = r,
                n.closeTimeout = s * 1e3,
                n.heartbeatTimeout = i * 1e3,
                n.transports || (n.transports = n.origTransports = o ? t.util.intersect(o.split(","), n.options.transports) : n.options.transports),
                n.setHeartbeatTimeout(),
                u(n.transports),
                n.once("connect", function() {
                    clearTimeout(n.connectTimeoutTimer),
                    e && typeof e == "function" && e()
                })
            }),
            this
        }
        ,
        r.prototype.setHeartbeatTimeout = function() {
            clearTimeout(this.heartbeatTimeoutTimer);
            if (this.transport && !this.transport.heartbeats())
                return;
            var e = this;
            this.heartbeatTimeoutTimer = setTimeout(function() {
                e.transport.onClose()
            }, this.heartbeatTimeout)
        }
        ,
        r.prototype.packet = function(e) {
            return this.connected && !this.doBuffer ? this.transport.packet(e) : this.buffer.push(e),
            this
        }
        ,
        r.prototype.setBuffer = function(e) {
            this.doBuffer = e,
            !e && this.connected && this.buffer.length && (this.options.manualFlush || this.flushBuffer())
        }
        ,
        r.prototype.flushBuffer = function() {
            this.transport.payload(this.buffer),
            this.buffer = []
        }
        ,
        r.prototype.disconnect = function() {
            if (this.connected || this.connecting)
                this.open && this.of("").packet({
                    type: "disconnect"
                }),
                this.onDisconnect("booted");
            return this
        }
        ,
        r.prototype.disconnectSync = function() {
            var e = t.util.request()
              , n = ["http" + (this.options.secure ? "s" : "") + ":/", this.options.host + ":" + this.options.port, this.options.resource, t.protocol, "", this.sessionid].join("/") + "/?disconnect=1";
            e.open("GET", n, !1),
            e.send(null),
            this.onDisconnect("booted")
        }
        ,
        r.prototype.isXDomain = function() {
            var e = n.location.port || ("https:" == n.location.protocol ? 443 : 80);
            return this.options.host !== n.location.hostname || this.options.port != e
        }
        ,
        r.prototype.onConnect = function() {
            this.connected || (this.connected = !0,
            this.connecting = !1,
            this.doBuffer || this.setBuffer(!1),
            this.emit("connect"))
        }
        ,
        r.prototype.onOpen = function() {
            this.open = !0
        }
        ,
        r.prototype.onClose = function() {
            this.open = !1,
            clearTimeout(this.heartbeatTimeoutTimer)
        }
        ,
        r.prototype.onPacket = function(e) {
            this.of(e.endpoint).onPacket(e)
        }
        ,
        r.prototype.onError = function(e) {
            e && e.advice && e.advice === "reconnect" && (this.connected || this.connecting) && (this.disconnect(),
            this.options.reconnect && this.reconnect()),
            this.publish("error", e && e.reason ? e.reason : e)
        }
        ,
        r.prototype.onDisconnect = function(e) {
            var t = this.connected
              , n = this.connecting;
            this.connected = !1,
            this.connecting = !1,
            this.open = !1;
            if (t || n)
                this.transport.close(),
                this.transport.clearTimeouts(),
                t && (this.publish("disconnect", e),
                "booted" != e && this.options.reconnect && !this.reconnecting && this.reconnect())
        }
        ,
        r.prototype.reconnect = function() {
            function i() {
                if (e.connected) {
                    for (var t in e.namespaces)
                        e.namespaces.hasOwnProperty(t) && "" !== t && e.namespaces[t].packet({
                            type: "connect"
                        });
                    e.publish("reconnect", e.transport.name, e.reconnectionAttempts)
                }
                clearTimeout(e.reconnectionTimer),
                e.removeListener("connect_failed", s),
                e.removeListener("connect", s),
                e.reconnecting = !1,
                delete e.reconnectionAttempts,
                delete e.reconnectionDelay,
                delete e.reconnectionTimer,
                delete e.redoTransports,
                e.options["try multiple transports"] = n
            }
            function s() {
                if (!e.reconnecting)
                    return;
                if (e.connected)
                    return i();
                if (e.connecting && e.reconnecting)
                    return e.reconnectionTimer = setTimeout(s, 1e3);
                e.reconnectionAttempts++ >= t ? e.redoTransports ? (e.publish("reconnect_failed"),
                i()) : (e.on("connect_failed", s),
                e.options["try multiple transports"] = !0,
                e.transports = e.origTransports,
                e.transport = e.getTransport(),
                e.redoTransports = !0,
                e.connect(),
                e.publish("reconnecting", e.reconnectionDelay, e.reconnectionAttempts),
                e.reconnectionTimer = setTimeout(s, e.reconnectionDelay)) : (e.reconnectionDelay < r && (e.reconnectionDelay *= 2),
                e.connect(),
                e.publish("reconnecting", e.reconnectionDelay, e.reconnectionAttempts),
                e.reconnectionTimer = setTimeout(s, e.reconnectionDelay))
            }
            this.reconnecting = !0,
            this.reconnectionAttempts = 0,
            this.reconnectionDelay = this.options["reconnection delay"];
            var e = this
              , t = this.options["max reconnection attempts"]
              , n = this.options["try multiple transports"]
              , r = this.options["reconnection limit"];
            this.options["try multiple transports"] = !1,
            this.reconnectionTimer = setTimeout(s, this.reconnectionDelay),
            this.on("connect", s)
        }
    }("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports, this),
    function(e, t) {
        function n(e, t) {
            this.socket = e,
            this.name = t || "",
            this.flags = {},
            this.json = new r(this,"json"),
            this.ackPackets = 0,
            this.acks = {}
        }
        function r(e, t) {
            this.namespace = e,
            this.name = t
        }
        e.SocketNamespace = n,
        t.util.mixin(n, t.EventEmitter),
        n.prototype.$emit = t.EventEmitter.prototype.emit,
        n.prototype.of = function() {
            return this.socket.of.apply(this.socket, arguments)
        }
        ,
        n.prototype.packet = function(e) {
            return e.endpoint = this.name,
            this.socket.packet(e),
            this.flags = {},
            this
        }
        ,
        n.prototype.send = function(e, t) {
            var n = {
                type: this.flags.json ? "json" : "message",
                data: e
            };
            return "function" == typeof t && (n.id = ++this.ackPackets,
            n.ack = !0,
            this.acks[n.id] = t),
            this.packet(n)
        }
        ,
        n.prototype.emit = function(e) {
            var t = Array.prototype.slice.call(arguments, 1)
              , n = t[t.length - 1]
              , r = {
                type: "event",
                name: e
            };
            return "function" == typeof n && (r.id = ++this.ackPackets,
            r.ack = "data",
            this.acks[r.id] = n,
            t = t.slice(0, t.length - 1)),
            r.args = t,
            this.packet(r)
        }
        ,
        n.prototype.disconnect = function() {
            return this.name === "" ? this.socket.disconnect() : (this.packet({
                type: "disconnect"
            }),
            this.$emit("disconnect")),
            this
        }
        ,
        n.prototype.onPacket = function(e) {
            function r() {
                n.packet({
                    type: "ack",
                    args: t.util.toArray(arguments),
                    ackId: e.id
                })
            }
            var n = this;
            switch (e.type) {
            case "connect":
                this.$emit("connect");
                break;
            case "disconnect":
                this.name === "" ? this.socket.onDisconnect(e.reason || "booted") : this.$emit("disconnect", e.reason);
                break;
            case "message":
            case "json":
                var i = ["message", e.data];
                e.ack == "data" ? i.push(r) : e.ack && this.packet({
                    type: "ack",
                    ackId: e.id
                }),
                this.$emit.apply(this, i);
                break;
            case "event":
                var i = [e.name].concat(e.args);
                e.ack == "data" && i.push(r),
                this.$emit.apply(this, i);
                break;
            case "ack":
                this.acks[e.ackId] && (this.acks[e.ackId].apply(this, e.args),
                delete this.acks[e.ackId]);
                break;
            case "error":
                e.advice ? this.socket.onError(e) : e.reason == "unauthorized" ? this.$emit("connect_failed", e.reason) : this.$emit("error", e.reason)
            }
        }
        ,
        r.prototype.send = function() {
            this.namespace.flags[this.name] = !0,
            this.namespace.send.apply(this.namespace, arguments)
        }
        ,
        r.prototype.emit = function() {
            this.namespace.flags[this.name] = !0,
            this.namespace.emit.apply(this.namespace, arguments)
        }
    }("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports),
    function(e, t, n) {
        function r(e) {
            t.Transport.apply(this, arguments)
        }
        e.websocket = r,
        t.util.inherit(r, t.Transport),
        r.prototype.name = "websocket",
        r.prototype.open = function() {
            var e = t.util.query(this.socket.options.query), r = this, i;
            return i || (i = n.MozWebSocket || n.WebSocket),
            this.websocket = new i(this.prepareUrl() + e),
            this.websocket.onopen = function() {
                r.onOpen(),
                r.socket.setBuffer(!1)
            }
            ,
            this.websocket.onmessage = function(e) {
                r.onData(e.data)
            }
            ,
            this.websocket.onclose = function() {
                r.onClose(),
                r.socket.setBuffer(!0)
            }
            ,
            this.websocket.onerror = function(e) {
                r.onError(e)
            }
            ,
            this
        }
        ,
        t.util.ua.iDevice ? r.prototype.send = function(e) {
            var t = this;
            return setTimeout(function() {
                t.websocket.send(e)
            }, 0),
            this
        }
        : r.prototype.send = function(e) {
            return this.websocket.send(e),
            this
        }
        ,
        r.prototype.payload = function(e) {
            for (var t = 0, n = e.length; t < n; t++)
                this.packet(e[t]);
            return this
        }
        ,
        r.prototype.close = function() {
            return this.websocket.close(),
            this
        }
        ,
        r.prototype.onError = function(e) {
            this.socket.onError(e)
        }
        ,
        r.prototype.scheme = function() {
            return this.socket.options.secure ? "wss" : "ws"
        }
        ,
        r.check = function() {
            return "WebSocket"in n && !("__addTask"in WebSocket) || "MozWebSocket"in n
        }
        ,
        r.xdomainCheck = function() {
            return !0
        }
        ,
        t.transports.push("websocket")
    }("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this),
    function(e, t) {
        function n() {
            t.Transport.websocket.apply(this, arguments)
        }
        e.flashsocket = n,
        t.util.inherit(n, t.Transport.websocket),
        n.prototype.name = "flashsocket",
        n.prototype.open = function() {
            var e = this
              , n = arguments;
            return WebSocket.__addTask(function() {
                t.Transport.websocket.prototype.open.apply(e, n)
            }),
            this
        }
        ,
        n.prototype.send = function() {
            var e = this
              , n = arguments;
            return WebSocket.__addTask(function() {
                t.Transport.websocket.prototype.send.apply(e, n)
            }),
            this
        }
        ,
        n.prototype.close = function() {
            return WebSocket.__tasks.length = 0,
            t.Transport.websocket.prototype.close.call(this),
            this
        }
        ,
        n.prototype.ready = function(e, r) {
            function i() {
                var t = e.options
                  , i = t["flash policy port"]
                  , o = ["http" + (t.secure ? "s" : "") + ":/", t.host + ":" + t.port, t.resource, "static/flashsocket", "WebSocketMain" + (e.isXDomain() ? "Insecure" : "") + ".swf"];
                n.loaded || (typeof WEB_SOCKET_SWF_LOCATION == "undefined" && (WEB_SOCKET_SWF_LOCATION = o.join("/")),
                i !== 843 && WebSocket.loadFlashPolicyFile("xmlsocket://" + t.host + ":" + i),
                WebSocket.__initialize(),
                n.loaded = !0),
                r.call(s)
            }
            var s = this;
            if (document.body)
                return i();
            t.util.load(i)
        }
        ,
        n.check = function() {
            return typeof WebSocket != "undefined" && "__initialize"in WebSocket && !!swfobject ? swfobject.getFlashPlayerVersion().major >= 10 : !1
        }
        ,
        n.xdomainCheck = function() {
            return !0
        }
        ,
        typeof window != "undefined" && (WEB_SOCKET_DISABLE_AUTO_INITIALIZATION = !0),
        t.transports.push("flashsocket")
    }("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    if ("undefined" != typeof window)
        var swfobject = function() {
            function C() {
                if (b)
                    return;
                try {
                    var e = a.getElementsByTagName("body")[0].appendChild(U("span"));
                    e.parentNode.removeChild(e)
                } catch (t) {
                    return
                }
                b = !0;
                var n = c.length;
                for (var r = 0; r < n; r++)
                    c[r]()
            }
            function k(e) {
                b ? e() : c[c.length] = e
            }
            function L(t) {
                if (typeof u.addEventListener != e)
                    u.addEventListener("load", t, !1);
                else if (typeof a.addEventListener != e)
                    a.addEventListener("load", t, !1);
                else if (typeof u.attachEvent != e)
                    z(u, "onload", t);
                else if (typeof u.onload == "function") {
                    var n = u.onload;
                    u.onload = function() {
                        n(),
                        t()
                    }
                } else
                    u.onload = t
            }
            function A() {
                l ? O() : M()
            }
            function O() {
                var n = a.getElementsByTagName("body")[0]
                  , r = U(t);
                r.setAttribute("type", i);
                var s = n.appendChild(r);
                if (s) {
                    var o = 0;
                    (function() {
                        if (typeof s.GetVariable != e) {
                            var t = s.GetVariable("$version");
                            t && (t = t.split(" ")[1].split(","),
                            T.pv = [parseInt(t[0], 10), parseInt(t[1], 10), parseInt(t[2], 10)])
                        } else if (o < 10) {
                            o++,
                            setTimeout(arguments.callee, 10);
                            return
                        }
                        n.removeChild(r),
                        s = null,
                        M()
                    })()
                } else
                    M()
            }
            function M() {
                var t = h.length;
                if (t > 0)
                    for (var n = 0; n < t; n++) {
                        var r = h[n].id
                          , i = h[n].callbackFn
                          , s = {
                            success: !1,
                            id: r
                        };
                        if (T.pv[0] > 0) {
                            var o = R(r);
                            if (o)
                                if (W(h[n].swfVersion) && !(T.wk && T.wk < 312))
                                    V(r, !0),
                                    i && (s.success = !0,
                                    s.ref = _(r),
                                    i(s));
                                else if (h[n].expressInstall && D()) {
                                    var u = {};
                                    u.data = h[n].expressInstall,
                                    u.width = o.getAttribute("width") || "0",
                                    u.height = o.getAttribute("height") || "0",
                                    o.getAttribute("class") && (u.styleclass = o.getAttribute("class")),
                                    o.getAttribute("align") && (u.align = o.getAttribute("align"));
                                    var a = {}
                                      , f = o.getElementsByTagName("param")
                                      , l = f.length;
                                    for (var c = 0; c < l; c++)
                                        f[c].getAttribute("name").toLowerCase() != "movie" && (a[f[c].getAttribute("name")] = f[c].getAttribute("value"));
                                    P(u, a, r, i)
                                } else
                                    H(o),
                                    i && i(s)
                        } else {
                            V(r, !0);
                            if (i) {
                                var p = _(r);
                                p && typeof p.SetVariable != e && (s.success = !0,
                                s.ref = p),
                                i(s)
                            }
                        }
                    }
            }
            function _(n) {
                var r = null
                  , i = R(n);
                if (i && i.nodeName == "OBJECT")
                    if (typeof i.SetVariable != e)
                        r = i;
                    else {
                        var s = i.getElementsByTagName(t)[0];
                        s && (r = s)
                    }
                return r
            }
            function D() {
                return !w && W("6.0.65") && (T.win || T.mac) && !(T.wk && T.wk < 312)
            }
            function P(t, n, r, i) {
                w = !0,
                g = i || null,
                y = {
                    success: !1,
                    id: r
                };
                var o = R(r);
                if (o) {
                    o.nodeName == "OBJECT" ? (v = B(o),
                    m = null) : (v = o,
                    m = r),
                    t.id = s;
                    if (typeof t.width == e || !/%$/.test(t.width) && parseInt(t.width, 10) < 310)
                        t.width = "310";
                    if (typeof t.height == e || !/%$/.test(t.height) && parseInt(t.height, 10) < 137)
                        t.height = "137";
                    a.title = a.title.slice(0, 47) + " - Flash Player Installation";
                    var f = T.ie && T.win ? ["Active"].concat("").join("X") : "PlugIn"
                      , l = "MMredirectURL=" + u.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + f + "&MMdoctitle=" + a.title;
                    typeof n.flashvars != e ? n.flashvars += "&" + l : n.flashvars = l;
                    if (T.ie && T.win && o.readyState != 4) {
                        var c = U("div");
                        r += "SWFObjectNew",
                        c.setAttribute("id", r),
                        o.parentNode.insertBefore(c, o),
                        o.style.display = "none",
                        function() {
                            o.readyState == 4 ? o.parentNode.removeChild(o) : setTimeout(arguments.callee, 10)
                        }()
                    }
                    j(t, n, r)
                }
            }
            function H(e) {
                if (T.ie && T.win && e.readyState != 4) {
                    var t = U("div");
                    e.parentNode.insertBefore(t, e),
                    t.parentNode.replaceChild(B(e), t),
                    e.style.display = "none",
                    function() {
                        e.readyState == 4 ? e.parentNode.removeChild(e) : setTimeout(arguments.callee, 10)
                    }()
                } else
                    e.parentNode.replaceChild(B(e), e)
            }
            function B(e) {
                var n = U("div");
                if (T.win && T.ie)
                    n.innerHTML = e.innerHTML;
                else {
                    var r = e.getElementsByTagName(t)[0];
                    if (r) {
                        var i = r.childNodes;
                        if (i) {
                            var s = i.length;
                            for (var o = 0; o < s; o++)
                                (i[o].nodeType != 1 || i[o].nodeName != "PARAM") && i[o].nodeType != 8 && n.appendChild(i[o].cloneNode(!0))
                        }
                    }
                }
                return n
            }
            function j(n, r, s) {
                var o, u = R(s);
                if (T.wk && T.wk < 312)
                    return o;
                if (u) {
                    typeof n.id == e && (n.id = s);
                    if (T.ie && T.win) {
                        var a = "";
                        for (var f in n)
                            n[f] != Object.prototype[f] && (f.toLowerCase() == "data" ? r.movie = n[f] : f.toLowerCase() == "styleclass" ? a += ' class="' + n[f] + '"' : f.toLowerCase() != "classid" && (a += " " + f + '="' + n[f] + '"'));
                        var l = "";
                        for (var c in r)
                            r[c] != Object.prototype[c] && (l += '<param name="' + c + '" value="' + r[c] + '" />');
                        u.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + a + ">" + l + "</object>",
                        p[p.length] = n.id,
                        o = R(n.id)
                    } else {
                        var h = U(t);
                        h.setAttribute("type", i);
                        for (var d in n)
                            n[d] != Object.prototype[d] && (d.toLowerCase() == "styleclass" ? h.setAttribute("class", n[d]) : d.toLowerCase() != "classid" && h.setAttribute(d, n[d]));
                        for (var v in r)
                            r[v] != Object.prototype[v] && v.toLowerCase() != "movie" && F(h, v, r[v]);
                        u.parentNode.replaceChild(h, u),
                        o = h
                    }
                }
                return o
            }
            function F(e, t, n) {
                var r = U("param");
                r.setAttribute("name", t),
                r.setAttribute("value", n),
                e.appendChild(r)
            }
            function I(e) {
                var t = R(e);
                t && t.nodeName == "OBJECT" && (T.ie && T.win ? (t.style.display = "none",
                function() {
                    t.readyState == 4 ? q(e) : setTimeout(arguments.callee, 10)
                }()) : t.parentNode.removeChild(t))
            }
            function q(e) {
                var t = R(e);
                if (t) {
                    for (var n in t)
                        typeof t[n] == "function" && (t[n] = null);
                    t.parentNode.removeChild(t)
                }
            }
            function R(e) {
                var t = null;
                try {
                    t = a.getElementById(e)
                } catch (n) {}
                return t
            }
            function U(e) {
                return a.createElement(e)
            }
            function z(e, t, n) {
                e.attachEvent(t, n),
                d[d.length] = [e, t, n]
            }
            function W(e) {
                var t = T.pv
                  , n = e.split(".");
                return n[0] = parseInt(n[0], 10),
                n[1] = parseInt(n[1], 10) || 0,
                n[2] = parseInt(n[2], 10) || 0,
                t[0] > n[0] || t[0] == n[0] && t[1] > n[1] || t[0] == n[0] && t[1] == n[1] && t[2] >= n[2] ? !0 : !1
            }
            function X(n, r, i, s) {
                if (T.ie && T.mac)
                    return;
                var o = a.getElementsByTagName("head")[0];
                if (!o)
                    return;
                var u = i && typeof i == "string" ? i : "screen";
                s && (E = null,
                S = null);
                if (!E || S != u) {
                    var f = U("style");
                    f.setAttribute("type", "text/css"),
                    f.setAttribute("media", u),
                    E = o.appendChild(f),
                    T.ie && T.win && typeof a.styleSheets != e && a.styleSheets.length > 0 && (E = a.styleSheets[a.styleSheets.length - 1]),
                    S = u
                }
                T.ie && T.win ? E && typeof E.addRule == t && E.addRule(n, r) : E && typeof a.createTextNode != e && E.appendChild(a.createTextNode(n + " {" + r + "}"))
            }
            function V(e, t) {
                if (!x)
                    return;
                var n = t ? "visible" : "hidden";
                b && R(e) ? R(e).style.visibility = n : X("#" + e, "visibility:" + n)
            }
            function $(t) {
                var n = /[\\\"<>\.;]/
                  , r = n.exec(t) != null;
                return r && typeof encodeURIComponent != e ? encodeURIComponent(t) : t
            }
            var e = "undefined", t = "object", n = "Shockwave Flash", r = "ShockwaveFlash.ShockwaveFlash", i = "application/x-shockwave-flash", s = "SWFObjectExprInst", o = "onreadystatechange", u = window, a = document, f = navigator, l = !1, c = [A], h = [], p = [], d = [], v, m, g, y, b = !1, w = !1, E, S, x = !0, T = function() {
                var s = typeof a.getElementById != e && typeof a.getElementsByTagName != e && typeof a.createElement != e
                  , o = f.userAgent.toLowerCase()
                  , c = f.platform.toLowerCase()
                  , h = c ? /win/.test(c) : /win/.test(o)
                  , p = c ? /mac/.test(c) : /mac/.test(o)
                  , d = /webkit/.test(o) ? parseFloat(o.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1
                  , v = !1
                  , m = [0, 0, 0]
                  , g = null;
                if (typeof f.plugins != e && typeof f.plugins[n] == t)
                    g = f.plugins[n].description,
                    g && (typeof f.mimeTypes == e || !f.mimeTypes[i] || !!f.mimeTypes[i].enabledPlugin) && (l = !0,
                    v = !1,
                    g = g.replace(/^.*\s+(\S+\s+\S+$)/, "$1"),
                    m[0] = parseInt(g.replace(/^(.*)\..*$/, "$1"), 10),
                    m[1] = parseInt(g.replace(/^.*\.(.*)\s.*$/, "$1"), 10),
                    m[2] = /[a-zA-Z]/.test(g) ? parseInt(g.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
                else if (typeof u[["Active"].concat("Object").join("X")] != e)
                    try {
                        var y = new (window[["Active"].concat("Object").join("X")])(r);
                        y && (g = y.GetVariable("$version"),
                        g && (v = !0,
                        g = g.split(" ")[1].split(","),
                        m = [parseInt(g[0], 10), parseInt(g[1], 10), parseInt(g[2], 10)]))
                    } catch (b) {}
                return {
                    w3: s,
                    pv: m,
                    wk: d,
                    ie: v,
                    win: h,
                    mac: p
                }
            }(), N = function() {
                if (!T.w3)
                    return;
                (typeof a.readyState != e && a.readyState == "complete" || typeof a.readyState == e && (a.getElementsByTagName("body")[0] || a.body)) && C(),
                b || (typeof a.addEventListener != e && a.addEventListener("DOMContentLoaded", C, !1),
                T.ie && T.win && (a.attachEvent(o, function() {
                    a.readyState == "complete" && (a.detachEvent(o, arguments.callee),
                    C())
                }),
                u == top && function() {
                    if (b)
                        return;
                    try {
                        a.documentElement.doScroll("left")
                    } catch (e) {
                        setTimeout(arguments.callee, 0);
                        return
                    }
                    C()
                }()),
                T.wk && function() {
                    if (b)
                        return;
                    if (!/loaded|complete/.test(a.readyState)) {
                        setTimeout(arguments.callee, 0);
                        return
                    }
                    C()
                }(),
                L(C))
            }(), J = function() {
                T.ie && T.win && window.attachEvent("onunload", function() {
                    var e = d.length;
                    for (var t = 0; t < e; t++)
                        d[t][0].detachEvent(d[t][1], d[t][2]);
                    var n = p.length;
                    for (var r = 0; r < n; r++)
                        I(p[r]);
                    for (var i in T)
                        T[i] = null;
                    T = null;
                    for (var s in swfobject)
                        swfobject[s] = null;
                    swfobject = null
                })
            }();
            return {
                registerObject: function(e, t, n, r) {
                    if (T.w3 && e && t) {
                        var i = {};
                        i.id = e,
                        i.swfVersion = t,
                        i.expressInstall = n,
                        i.callbackFn = r,
                        h[h.length] = i,
                        V(e, !1)
                    } else
                        r && r({
                            success: !1,
                            id: e
                        })
                },
                getObjectById: function(e) {
                    if (T.w3)
                        return _(e)
                },
                embedSWF: function(n, r, i, s, o, u, a, f, l, c) {
                    var h = {
                        success: !1,
                        id: r
                    };
                    T.w3 && !(T.wk && T.wk < 312) && n && r && i && s && o ? (V(r, !1),
                    k(function() {
                        i += "",
                        s += "";
                        var p = {};
                        if (l && typeof l === t)
                            for (var d in l)
                                p[d] = l[d];
                        p.data = n,
                        p.width = i,
                        p.height = s;
                        var v = {};
                        if (f && typeof f === t)
                            for (var m in f)
                                v[m] = f[m];
                        if (a && typeof a === t)
                            for (var g in a)
                                typeof v.flashvars != e ? v.flashvars += "&" + g + "=" + a[g] : v.flashvars = g + "=" + a[g];
                        if (W(o)) {
                            var y = j(p, v, r);
                            p.id == r && V(r, !0),
                            h.success = !0,
                            h.ref = y
                        } else {
                            if (u && D()) {
                                p.data = u,
                                P(p, v, r, c);
                                return
                            }
                            V(r, !0)
                        }
                        c && c(h)
                    })) : c && c(h)
                },
                switchOffAutoHideShow: function() {
                    x = !1
                },
                ua: T,
                getFlashPlayerVersion: function() {
                    return {
                        major: T.pv[0],
                        minor: T.pv[1],
                        release: T.pv[2]
                    }
                },
                hasFlashPlayerVersion: W,
                createSWF: function(e, t, n) {
                    return T.w3 ? j(e, t, n) : undefined
                },
                showExpressInstall: function(e, t, n, r) {
                    T.w3 && D() && P(e, t, n, r)
                },
                removeSWF: function(e) {
                    T.w3 && I(e)
                },
                createCSS: function(e, t, n, r) {
                    T.w3 && X(e, t, n, r)
                },
                addDomLoadEvent: k,
                addLoadEvent: L,
                getQueryParamValue: function(e) {
                    var t = a.location.search || a.location.hash;
                    if (t) {
                        /\?/.test(t) && (t = t.split("?")[1]);
                        if (e == null)
                            return $(t);
                        var n = t.split("&");
                        for (var r = 0; r < n.length; r++)
                            if (n[r].substring(0, n[r].indexOf("=")) == e)
                                return $(n[r].substring(n[r].indexOf("=") + 1))
                    }
                    return ""
                },
                expressInstallCallback: function() {
                    if (w) {
                        var e = R(s);
                        e && v && (e.parentNode.replaceChild(v, e),
                        m && (V(m, !0),
                        T.ie && T.win && (v.style.display = "block")),
                        g && g(y)),
                        w = !1
                    }
                }
            }
        }();
    (function() {
        if ("undefined" == typeof window || window.WebSocket)
            return;
        var e = window.console;
        if (!e || !e.log || !e.error)
            e = {
                log: function() {},
                error: function() {}
            };
        if (!swfobject.hasFlashPlayerVersion("10.0.0")) {
            e.error("Flash Player >= 10.0.0 is required.");
            return
        }
        location.protocol == "file:" && e.error("WARNING: web-socket-js doesn't work in file:///... URL unless you set Flash Security Settings properly. Open the page via Web server i.e. http://..."),
        WebSocket = function(e, t, n, r, i) {
            var s = this;
            s.__id = WebSocket.__nextId++,
            WebSocket.__instances[s.__id] = s,
            s.readyState = WebSocket.CONNECTING,
            s.bufferedAmount = 0,
            s.__events = {},
            t ? typeof t == "string" && (t = [t]) : t = [],
            setTimeout(function() {
                WebSocket.__addTask(function() {
                    WebSocket.__flash.create(s.__id, e, t, n || null, r || 0, i || null)
                })
            }, 0)
        }
        ,
        WebSocket.prototype.send = function(e) {
            if (this.readyState == WebSocket.CONNECTING)
                throw "INVALID_STATE_ERR: Web Socket connection has not been established";
            var t = WebSocket.__flash.send(this.__id, encodeURIComponent(e));
            return t < 0 ? !0 : (this.bufferedAmount += t,
            !1)
        }
        ,
        WebSocket.prototype.close = function() {
            if (this.readyState == WebSocket.CLOSED || this.readyState == WebSocket.CLOSING)
                return;
            this.readyState = WebSocket.CLOSING,
            WebSocket.__flash.close(this.__id)
        }
        ,
        WebSocket.prototype.addEventListener = function(e, t, n) {
            e in this.__events || (this.__events[e] = []),
            this.__events[e].push(t)
        }
        ,
        WebSocket.prototype.removeEventListener = function(e, t, n) {
            if (!(e in this.__events))
                return;
            var r = this.__events[e];
            for (var i = r.length - 1; i >= 0; --i)
                if (r[i] === t) {
                    r.splice(i, 1);
                    break
                }
        }
        ,
        WebSocket.prototype.dispatchEvent = function(e) {
            var t = this.__events[e.type] || [];
            for (var n = 0; n < t.length; ++n)
                t[n](e);
            var r = this["on" + e.type];
            r && r(e)
        }
        ,
        WebSocket.prototype.__handleEvent = function(e) {
            "readyState"in e && (this.readyState = e.readyState),
            "protocol"in e && (this.protocol = e.protocol);
            var t;
            if (e.type == "open" || e.type == "error")
                t = this.__createSimpleEvent(e.type);
            else if (e.type == "close")
                t = this.__createSimpleEvent("close");
            else {
                if (e.type != "message")
                    throw "unknown event type: " + e.type;
                var n = decodeURIComponent(e.message);
                t = this.__createMessageEvent("message", n)
            }
            this.dispatchEvent(t)
        }
        ,
        WebSocket.prototype.__createSimpleEvent = function(e) {
            if (document.createEvent && window.Event) {
                var t = document.createEvent("Event");
                return t.initEvent(e, !1, !1),
                t
            }
            return {
                type: e,
                bubbles: !1,
                cancelable: !1
            }
        }
        ,
        WebSocket.prototype.__createMessageEvent = function(e, t) {
            if (document.createEvent && window.MessageEvent && !window.opera) {
                var n = document.createEvent("MessageEvent");
                return n.initMessageEvent("message", !1, !1, t, null, null, window, null),
                n
            }
            return {
                type: e,
                data: t,
                bubbles: !1,
                cancelable: !1
            }
        }
        ,
        WebSocket.CONNECTING = 0,
        WebSocket.OPEN = 1,
        WebSocket.CLOSING = 2,
        WebSocket.CLOSED = 3,
        WebSocket.__flash = null,
        WebSocket.__instances = {},
        WebSocket.__tasks = [],
        WebSocket.__nextId = 0,
        WebSocket.loadFlashPolicyFile = function(e) {
            WebSocket.__addTask(function() {
                WebSocket.__flash.loadManualPolicyFile(e)
            })
        }
        ,
        WebSocket.__initialize = function() {
            if (WebSocket.__flash)
                return;
            WebSocket.__swfLocation && (window.WEB_SOCKET_SWF_LOCATION = WebSocket.__swfLocation);
            if (!window.WEB_SOCKET_SWF_LOCATION) {
                e.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");
                return
            }
            var t = document.createElement("div");
            t.id = "webSocketContainer",
            t.style.position = "absolute",
            WebSocket.__isFlashLite() ? (t.style.left = "0px",
            t.style.top = "0px") : (t.style.left = "-100px",
            t.style.top = "-100px");
            var n = document.createElement("div");
            n.id = "webSocketFlash",
            t.appendChild(n),
            document.body.appendChild(t),
            swfobject.embedSWF(WEB_SOCKET_SWF_LOCATION, "webSocketFlash", "1", "1", "10.0.0", null, null, {
                hasPriority: !0,
                swliveconnect: !0,
                allowScriptAccess: "always"
            }, null, function(t) {
                t.success || e.error("[WebSocket] swfobject.embedSWF failed")
            })
        }
        ,
        WebSocket.__onFlashInitialized = function() {
            setTimeout(function() {
                WebSocket.__flash = document.getElementById("webSocketFlash"),
                WebSocket.__flash.setCallerUrl(location.href),
                WebSocket.__flash.setDebug(!!window.WEB_SOCKET_DEBUG);
                for (var e = 0; e < WebSocket.__tasks.length; ++e)
                    WebSocket.__tasks[e]();
                WebSocket.__tasks = []
            }, 0)
        }
        ,
        WebSocket.__onFlashEvent = function() {
            return setTimeout(function() {
                try {
                    var t = WebSocket.__flash.receiveEvents();
                    for (var n = 0; n < t.length; ++n)
                        WebSocket.__instances[t[n].webSocketId].__handleEvent(t[n])
                } catch (r) {
                    e.error(r)
                }
            }, 0),
            !0
        }
        ,
        WebSocket.__log = function(t) {
            e.log(decodeURIComponent(t))
        }
        ,
        WebSocket.__error = function(t) {
            e.error(decodeURIComponent(t))
        }
        ,
        WebSocket.__addTask = function(e) {
            WebSocket.__flash ? e() : WebSocket.__tasks.push(e)
        }
        ,
        WebSocket.__isFlashLite = function() {
            if (!window.navigator || !window.navigator.mimeTypes)
                return !1;
            var e = window.navigator.mimeTypes["application/x-shockwave-flash"];
            return !e || !e.enabledPlugin || !e.enabledPlugin.filename ? !1 : e.enabledPlugin.filename.match(/flashlite/i) ? !0 : !1
        }
        ,
        window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION || (window.addEventListener ? window.addEventListener("load", function() {
            WebSocket.__initialize()
        }, !1) : window.attachEvent("onload", function() {
            WebSocket.__initialize()
        }))
    })(),
    function(e, t, n) {
        function r(e) {
            if (!e)
                return;
            t.Transport.apply(this, arguments),
            this.sendBuffer = []
        }
        function i() {}
        e.XHR = r,
        t.util.inherit(r, t.Transport),
        r.prototype.open = function() {
            return this.socket.setBuffer(!1),
            this.onOpen(),
            this.get(),
            this.setCloseTimeout(),
            this
        }
        ,
        r.prototype.payload = function(e) {
            var n = [];
            for (var r = 0, i = e.length; r < i; r++)
                n.push(t.parser.encodePacket(e[r]));
            this.send(t.parser.encodePayload(n))
        }
        ,
        r.prototype.send = function(e) {
            return this.post(e),
            this
        }
        ,
        r.prototype.post = function(e) {
            function r() {
                this.readyState == 4 && (this.onreadystatechange = i,
                t.posting = !1,
                this.status == 200 ? t.socket.setBuffer(!1) : t.onClose())
            }
            function s() {
                this.onload = i,
                t.socket.setBuffer(!1)
            }
            var t = this;
            this.socket.setBuffer(!0),
            this.sendXHR = this.request("POST"),
            n.XDomainRequest && this.sendXHR instanceof XDomainRequest ? this.sendXHR.onload = this.sendXHR.onerror = s : this.sendXHR.onreadystatechange = r,
            this.sendXHR.send(e)
        }
        ,
        r.prototype.close = function() {
            return this.onClose(),
            this
        }
        ,
        r.prototype.request = function(e) {
            var n = t.util.request(this.socket.isXDomain())
              , r = t.util.query(this.socket.options.query, "t=" + +(new Date));
            n.open(e || "GET", this.prepareUrl() + r, !0);
            if (e == "POST")
                try {
                    n.setRequestHeader ? n.setRequestHeader("Content-type", "text/plain;charset=UTF-8") : n.contentType = "text/plain"
                } catch (i) {}
            return n
        }
        ,
        r.prototype.scheme = function() {
            return this.socket.options.secure ? "https" : "http"
        }
        ,
        r.check = function(e, r) {
            try {
                var i = t.util.request(r)
                  , s = n.XDomainRequest && i instanceof XDomainRequest
                  , o = e && e.options && e.options.secure ? "https:" : "http:"
                  , u = n.location && o != n.location.protocol;
                if (i && (!s || !u))
                    return !0
            } catch (a) {}
            return !1
        }
        ,
        r.xdomainCheck = function(e) {
            return r.check(e, !0)
        }
    }("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this),
    function(e, t) {
        function n(e) {
            t.Transport.XHR.apply(this, arguments)
        }
        e.htmlfile = n,
        t.util.inherit(n, t.Transport.XHR),
        n.prototype.name = "htmlfile",
        n.prototype.get = function() {
            this.doc = new (window[["Active"].concat("Object").join("X")])("htmlfile"),
            this.doc.open(),
            this.doc.write("<html></html>"),
            this.doc.close(),
            this.doc.parentWindow.s = this;
            var e = this.doc.createElement("div");
            e.className = "socketio",
            this.doc.body.appendChild(e),
            this.iframe = this.doc.createElement("iframe"),
            e.appendChild(this.iframe);
            var n = this
              , r = t.util.query(this.socket.options.query, "t=" + +(new Date));
            this.iframe.src = this.prepareUrl() + r,
            t.util.on(window, "unload", function() {
                n.destroy()
            })
        }
        ,
        n.prototype._ = function(e, t) {
            e = e.replace(/\\\//g, "/"),
            this.onData(e);
            try {
                var n = t.getElementsByTagName("script")[0];
                n.parentNode.removeChild(n)
            } catch (r) {}
        }
        ,
        n.prototype.destroy = function() {
            if (this.iframe) {
                try {
                    this.iframe.src = "about:blank"
                } catch (e) {}
                this.doc = null,
                this.iframe.parentNode.removeChild(this.iframe),
                this.iframe = null,
                CollectGarbage()
            }
        }
        ,
        n.prototype.close = function() {
            return this.destroy(),
            t.Transport.XHR.prototype.close.call(this)
        }
        ,
        n.check = function(e) {
            if (typeof window != "undefined" && ["Active"].concat("Object").join("X")in window)
                try {
                    var n = new (window[["Active"].concat("Object").join("X")])("htmlfile");
                    return n && t.Transport.XHR.check(e)
                } catch (r) {}
            return !1
        }
        ,
        n.xdomainCheck = function() {
            return !1
        }
        ,
        t.transports.push("htmlfile")
    }("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports),
    function(e, t, n) {
        function r() {
            t.Transport.XHR.apply(this, arguments)
        }
        function i() {}
        e["xhr-polling"] = r,
        t.util.inherit(r, t.Transport.XHR),
        t.util.merge(r, t.Transport.XHR),
        r.prototype.name = "xhr-polling",
        r.prototype.heartbeats = function() {
            return !1
        }
        ,
        r.prototype.open = function() {
            var e = this;
            return t.Transport.XHR.prototype.open.call(e),
            !1
        }
        ,
        r.prototype.get = function() {
            function t() {
                this.readyState == 4 && (this.onreadystatechange = i,
                this.status == 200 ? (e.onData(this.responseText),
                e.get()) : e.onClose())
            }
            function r() {
                this.onload = i,
                this.onerror = i,
                e.retryCounter = 1,
                e.onData(this.responseText),
                e.get()
            }
            function s() {
                e.retryCounter++,
                !e.retryCounter || e.retryCounter > 3 ? e.onClose() : e.get()
            }
            if (!this.isOpen)
                return;
            var e = this;
            this.xhr = this.request(),
            n.XDomainRequest && this.xhr instanceof XDomainRequest ? (this.xhr.onload = r,
            this.xhr.onerror = s) : this.xhr.onreadystatechange = t,
            this.xhr.send(null)
        }
        ,
        r.prototype.onClose = function() {
            t.Transport.XHR.prototype.onClose.call(this);
            if (this.xhr) {
                this.xhr.onreadystatechange = this.xhr.onload = this.xhr.onerror = i;
                try {
                    this.xhr.abort()
                } catch (e) {}
                this.xhr = null
            }
        }
        ,
        r.prototype.ready = function(e, n) {
            var r = this;
            t.util.defer(function() {
                n.call(r)
            })
        }
        ,
        t.transports.push("xhr-polling")
    }("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this),
    function(e, t, n) {
        function i(e) {
            t.Transport["xhr-polling"].apply(this, arguments),
            this.index = t.j.length;
            var n = this;
            t.j.push(function(e) {
                n._(e)
            })
        }
        var r = n.document && "MozAppearance"in n.document.documentElement.style;
        e["jsonp-polling"] = i,
        t.util.inherit(i, t.Transport["xhr-polling"]),
        i.prototype.name = "jsonp-polling",
        i.prototype.post = function(e) {
            function a() {
                f(),
                n.socket.setBuffer(!1)
            }
            function f() {
                n.iframe && n.form.removeChild(n.iframe);
                try {
                    u = document.createElement('<iframe name="' + n.iframeId + '">')
                } catch (e) {
                    u = document.createElement("iframe"),
                    u.name = n.iframeId
                }
                u.id = n.iframeId,
                n.form.appendChild(u),
                n.iframe = u
            }
            var n = this
              , r = t.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
            if (!this.form) {
                var i = document.createElement("form"), s = document.createElement("textarea"), o = this.iframeId = "socketio_iframe_" + this.index, u;
                i.className = "socketio",
                i.style.position = "absolute",
                i.style.top = "0px",
                i.style.left = "0px",
                i.style.display = "none",
                i.target = o,
                i.method = "POST",
                i.setAttribute("accept-charset", "utf-8"),
                s.name = "d",
                i.appendChild(s),
                document.body.appendChild(i),
                this.form = i,
                this.area = s
            }
            this.form.action = this.prepareUrl() + r,
            f(),
            this.area.value = t.JSON.stringify(e);
            try {
                this.form.submit()
            } catch (l) {}
            this.iframe.attachEvent ? u.onreadystatechange = function() {
                n.iframe.readyState == "complete" && a()
            }
            : this.iframe.onload = a,
            this.socket.setBuffer(!0)
        }
        ,
        i.prototype.get = function() {
            var e = this
              , n = document.createElement("script")
              , i = t.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
            this.script && (this.script.parentNode.removeChild(this.script),
            this.script = null),
            n.async = !0,
            n.src = this.prepareUrl() + i,
            n.onerror = function() {
                e.onClose()
            }
            ;
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(n, s),
            this.script = n,
            r && setTimeout(function() {
                var e = document.createElement("iframe");
                document.body.appendChild(e),
                document.body.removeChild(e)
            }, 100)
        }
        ,
        i.prototype._ = function(e) {
            return this.onData(e),
            this.isOpen && this.get(),
            this
        }
        ,
        i.prototype.ready = function(e, n) {
            var i = this;
            if (!r)
                return n.call(this);
            t.util.load(function() {
                n.call(i)
            })
        }
        ,
        i.check = function() {
            return "document"in n
        }
        ,
        i.xdomainCheck = function() {
            return !0
        }
        ,
        t.transports.push("jsonp-polling")
    }("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this),
    typeof define == "function" && define.amd && define("socketio", [], function() {
        return io
    })
})(),
BlobCastClient.prototype.createActionPacket = function(e, t) {
    var n = t ? t : {};
    return n.type = "Action",
    n.appId = this.appId,
    n.userId = this.myUserId,
    n.action = e,
    n
}
,
BlobCastClient.prototype.connectToService = function(e, t, n) {
    console.log("ConnectToService"),
    this.disconnectFromService();
    var r = this.server + "/room"
      , i = this;
    e && (r += "/" + e),
    r += "?userId=" + i.myUserId,
    $.ajax({
        url: r,
        type: "GET",
        crossDomain: !0,
        dataType: "json",
        success: function(e) {
            if (e.error) {
                n(e.error);
                return
            }
            e.hasOwnProperty("joinAs") && (i.joinAs = e.joinAs),
            e.hasOwnProperty("apptag") && (i.appTag = e.apptag),
            e.hasOwnProperty("appid") && (i.appId = e.appid);
            if (e.hasOwnProperty("joinAs") && e.joinAs === "full")
                return n(new Error("The room is full"));
            var r = e.server;
            i.socket = io.connect(r + ":38203", {
                "sync disconnect on unload": !0,
                "force new connection": !0,
                "max reconnection attempts": i.maxRetries,
                "reconnection limit": 4e3,
                "reconnection delay": 500,
                secure: !0
            }),
            i.socket.on("connect", function() {
                console.log("[BlobcastClient] Socket connect."),
                i.retries = 0,
                i.isConnected == 0 && (t(i.appId, i.joinAs),
                i.isConnected = !0)
            }),
            i.socket.on("error", function(e) {
                console.log("[BlobcastClient] Socket error =>" + e + ".")
            }),
            i.socket.on("reconnect", function(e) {
                i.retries = 0,
                console.log("[BlobcastClient] Socket reconnect #" + e + ".")
            }),
            i.socket.on("reconnect_attempt", function() {
                console.log("[BlobcastClient] Socket reconnect_attempt.")
            }),
            i.socket.on("reconnecting", function(e) {
                console.log("[BlobcastClient] Socket reconnecting #" + e + "."),
                i.retries == i.maxRetries && setTimeout(function() {
                    i.socket && (i.delegate.onDisconnectedFromService(),
                    i.socket = null,
                    console.log("[BlobcastClient] Socket max # of retries hit!  Disconnecting."))
                }, 5e3),
                i.retries++
            }),
            i.socket.on("reconnect_error", function(e) {
                console.log("[BlobcastClient] Socket reconnect_error => " + e + ".")
            }),
            i.socket.on("reconnect_failed", function() {
                console.log("[BlobcastClient] Socket reconnect_failed."),
                i.socket && (i.delegate.onDisconnectedFromService(),
                i.socket.disconnect(),
                i.socket = null,
                console.log("[BlobcastClient] Socket done attempting to reconnect!  Disconnecting."))
            }),
            i.socket.on("disconnect", function() {
                i.isConnected = !1,
                i.retries = 0,
                console.log("[BlobcastClient] Socket disconnect.")
            }),
            i.socket.on("msg", function(e) {
                i.onDataReceived(e)
            })
        },
        error: function(e) {
            n(e),
            i.socket = null
        }
    })
}
,
BlobCastClient.prototype.isAudience = function() {
    return this.joinAs == "audience"
}
,
BlobCastClient.prototype.isPlayer = function() {
    return this.joinAs == "player"
}
,
BlobCastClient.prototype.createRoom = function() {
    var e = this;
    this.connectToService(null, function() {
        e.send(e.createActionPacket("CreateRoom"))
    }, function() {
        e.delegate.onCreateRoomFail()
    })
}
,
BlobCastClient.prototype.joinRoom = function(e, t, n) {
    if (!e || !t || e.length === 0 || t.length === 0) {
        this.delegate.onJoinRoomFail(new Error("Invalid name or room id"));
        return
    }
    var r = this;
    n.twitch !== undefined && (r.myUserId = n.twitch._id.toString()),
    this.connectToService(e, function(i, s) {
        r.send(r.createActionPacket("JoinRoom", {
            roomId: e,
            name: t,
            appId: i,
            joinType: s,
            options: n
        }))
    }, function(e) {
        r.delegate.onJoinRoomFail(e)
    })
}
,
BlobCastClient.prototype.disconnectFromService = function() {
    this.socket && (console.log("DisconnectfromService"),
    this.socket.disconnect(),
    this.socket = null)
}
,
BlobCastClient.prototype.send = function(e) {
    this.socket.emit("msg", e)
}
,
BlobCastClient.prototype.leaveRoom = function() {
    if (!this.currentRoomId)
        return;
    this.send(this.createActionPacket("LeaveRoom")),
    this.currentRoomId = null
}
,
BlobCastClient.prototype.setRoomBlob = function(e) {
    if (!this.currentRoomId)
        return;
    this.send(this.createActionPacket("SetRoomBlob", {
        roomId: this.currentRoomId,
        blob: e
    }))
}
,
BlobCastClient.prototype.setCustomerBlob = function(e, t) {
    if (!this.currentRoomId)
        return;
    this.send(this.createActionPacket("SetCustomerBlob", {
        roomId: this.currentRoomId,
        customerUserId: e,
        blob: t
    }))
}
,
BlobCastClient.prototype.sendMessageToRoomOwner = function(e) {
    if (!this.currentRoomId)
        return;
    this.send(this.createActionPacket("SendMessageToRoomOwner", {
        roomId: this.currentRoomId,
        userId: this.myUserId,
        message: e
    }))
}
,
BlobCastClient.prototype.startSession = function(e, t, n) {
    if (!this.currentRoomId)
        return;
    this.send(this.createActionPacket("StartSession", {
        userId: this.myUserId,
        roomId: this.currentRoomId,
        module: e,
        name: t,
        options: n
    }))
}
,
BlobCastClient.prototype.stopsession = function(e, t) {
    if (!this.currentRoomId)
        return;
    this.send(this.createActionPacket("StopSession", {
        userId: this.myUserId,
        roomId: this.currentRoomId,
        module: e,
        name: t
    }))
}
,
BlobCastClient.prototype.getSessionStatus = function(e, t) {
    if (!this.currentRoomId)
        return;
    this.send(this.createActionPacket("GetSessionStatus", {
        userId: this.myUserId,
        roomId: this.currentRoomId,
        module: e,
        name: t
    }))
}
,
BlobCastClient.prototype.sendSessionMessage = function(e, t, n) {
    if (!this.currentRoomId)
        return;
    this.send(this.createActionPacket("SendSessionMessage", {
        userId: this.myUserId,
        roomId: this.currentRoomId,
        module: e,
        name: t,
        message: n
    }))
}
,
BlobCastClient.prototype.onDataReceived = function(e) {
    if (e.type == "Result")
        e.action == "CreateRoom" ? e.success ? (this.currentRoomId = e.roomId,
        this.delegate && this.delegate.onRoomCreated && this.delegate.onRoomCreated(this.currentRoomId)) : this.delegate && this.delegate.onCreateRoomFail && this.delegate.onCreateRoomFail(new Error(e.error)) : e.action == "JoinRoom" ? e.success ? this.currentRoomId ? (this.currentRoomId = e.roomId,
        this.delegate && this.delegate.onRoomRejoined && this.delegate.onRoomRejoined(this.currentRoomId)) : (this.currentRoomId = e.roomId,
        this.delegate && this.delegate.onRoomJoined && this.delegate.onRoomJoined(this.currentRoomId)) : this.delegate && this.delegate.onJoinRoomFail && this.delegate.onJoinRoomFail(new Error(e.error)) : e.action == "LockRoom" ? e.success ? this.delegate.onRoomLocked() : this.delegate.onLockRoomFail() : e.action == "StartSession" ? this.delegate.onStartSessionResult(e.success, e.module, e.name, e.response) : e.action == "StopSession" ? this.delegate.onStopSessionResult(e.success, e.module, e.name, e.response) : e.action == "GetSessionStatus" ? this.delegate.onGetSessionStatusResult(e.success, e.module, e.name, e.response) : e.action == "SendSessionMessage" && this.delegate.onSendSessionMessageResult(e.success, e.module, e.name);
    else if (e.type == "Event") {
        if (this.currentRoomId != e.roomId)
            return;
        e.event == "CustomerJoinedRoom" ? this.delegate && this.delegate.onCustomerJoinedRoom && this.delegate.onCustomerJoinedRoom(e.customerUserId, e.customerName) : e.event == "CustomerMessage" && this.delegate && this.delegate.onCustomerSentMessage && this.delegate.onCustomerSentMessage(e.userId, e.message),
        e.event == "RoomBlobChanged" ? this.delegate && this.delegate.onRoomBlobChanged && this.delegate.onRoomBlobChanged(e.blob) : e.event == "CustomerBlobChanged" ? this.delegate && this.delegate.onCustomerBlobChanged && this.delegate.onCustomerBlobChanged(e.blob) : e.event == "RoomDestroyed" && (this.delegate && this.delegate.onRoomDestroyed && this.delegate.onRoomDestroyed(),
        this.socket.disconnect(),
        this.currentRoomId = null)
    }
}
,
define("blobcast", ["socketio"], function(e) {
    return function() {
        var t, n;
        return t || e.BlobCastClient
    }
}(this)),
define("models/blobcastmodel", ["jquery", "underscore", "backbone", "app", "uuid", "blobcast", "settings", "analytics", "jquery-cookie"], function(e, t, n, r, i, s, o, u) {
    function f(e) {
        var t = "test";
        try {
            return e.set(t, "1"),
            e.remove(t),
            !0
        } catch (n) {
            return !1
        }
    }
    function l(e, t, n) {
        e == "create"
    }
    function h(e) {
        this.model = e
    }
    var a = n.Model.extend({
        me: this,
        defaults: {
            connected: !1,
            roomid: null
        },
        server: o.blobcastUrl,
        initialize: function() {
            var e = n.getParameterByName("s")
              , t = e || this.server;
            t === "live" ? t = "https://blobcast.jackboxgames.com" : t === "local" ? t = "https://localhost" : t.indexOf(".") === -1 ? t = "https://blobcast-" + t + ".jackboxgames.com" : t.indexOf("https://") === -1 && (t = "https://" + t),
            this.storage = new c("blobcast"),
            this.useStorage = n.getParameterByName("nc") === "1" ? !1 : f(this.storage);
            if (this.useStorage) {
                var r = this.storage.get("uuid");
                r ? this.id = r : (this.id = i(),
                this.storage.set("uuid", this.id))
            } else
                this.id = i();
            this.set({
                connected: !1
            }),
            this.client = new s({
                server: t,
                userId: this.id
            }),
            this.client.delegate = new h(this)
        },
        connect: function(e, t, n) {
            var r = this;
            this.client.joinRoom(e, t, n),
            this.set("username", t)
        },
        disconnect: function() {
            this.client.disconnectFromService()
        },
        sendMessage: function(e) {
            this.client.sendMessageToRoomOwner(e)
        },
        startSession: function(e, t, n) {
            this.client.startSession(e, t, n)
        },
        stopSession: function(e, t) {
            this.client.stopSession(e, t)
        },
        getSessionStatus: function(e, t) {
            this.client.getSessionStatus(e, t)
        },
        sendSessionMessage: function(e, t, n) {
            this.client.sendSessionMessage(e, t, n)
        },
        sync: l
    })
      , c = function() {
        var t = {
            expires: 15768e4,
            getItem: function(t) {
                return e.cookie(t)
            },
            setItem: function(t, n) {
                return e.cookie(t, n, {
                    path: "/",
                    expires: this.expires
                })
            },
            removeItem: function(t) {
                return e.cookie(t, null)
            }
        }
          , n = t;
        try {
            "localStorage"in window && window.localStorage !== null && (n = window.localStorage)
        } catch (r) {}
        return function(e) {
            return e || (e = ""),
            {
                get: function(t) {
                    return n.getItem(e + "-" + t)
                },
                set: function(t, r) {
                    return n.setItem(e + "-" + t, r)
                },
                remove: function(t) {
                    return n.removeItem(e + "-" + t)
                }
            }
        }
    }();
    return h.prototype.onJoinRoomFail = function(e) {
        var t = "Unknown error";
        e.responseJSON && e.responseJSON.error ? t = e.responseJSON.error : t = e,
        n.handleError(t),
        this.model.useStorage && (this.model.storage.remove("username"),
        this.model.storage.remove("roomid"))
    }
    ,
    h.prototype.onRoomJoined = function(e) {
        this.model.set("connected", !0),
        this.model.useStorage && (this.model.storage.set("username", this.model.get("username")),
        this.model.storage.set("roomid", e)),
        this.model.delegate && this.model.delegate.onRoomJoined({
            appId: this.model.client.appId,
            appTag: this.model.client.appTag
        })
    }
    ,
    h.prototype.onRoomRejoined = function(e) {
        this.model.set("connected", !0),
        this.model.useStorage && (this.model.storage.set("username", this.model.get("username")),
        this.model.storage.set("roomid", e)),
        this.model.delegate && this.model.delegate.onRoomRejoined({
            appId: this.model.client.appId,
            appTag: this.model.client.appTag
        })
    }
    ,
    h.prototype.onDisconnectedFromService = function() {
        console.log("disconnected"),
        this.model.set("connected", !1),
        this.model.delegate.onDisconnected()
    }
    ,
    h.prototype.onCustomerJoinedRoom = function(e, t) {
        console.log("customer joined room: " + e + "/" + t)
    }
    ,
    h.prototype.onCustomerSentMessage = function(e, t) {
        console.log("customer sent message: " + e + "/" + t)
    }
    ,
    h.prototype.onCustomerBlobChanged = function(e) {
        this.model.unset("customerBlob", {
            silent: !0
        }),
        this.model.set("customerBlob", e),
        this.model.delegate && (this.model.delegate.onCustomerBlobChanged(e),
        e.events && Array.isArray(e.events) && u.trackEvents(e.events))
    }
    ,
    h.prototype.onRoomBlobChanged = function(e) {
        this.model.unset("roomBlob", {
            silent: !0
        }),
        this.model.set("roomBlob", e),
        this.model.delegate && this.model.delegate.onRoomBlobChanged(e)
    }
    ,
    h.prototype.onRoomDestroyed = function() {
        this.model.delegate.onDisconnected()
    }
    ,
    h.prototype.onStartSessionResult = function(e, t, n, r) {
        console.log("onStartSessionResult: " + e)
    }
    ,
    h.prototype.onStopSessionResult = function(e, t, n, r) {
        console.log("onStopSessionResult: " + e)
    }
    ,
    h.prototype.onGetSessionStatusResult = function(e, t, n, r) {
        console.log("onGetSessionStatusResult: " + e)
    }
    ,
    h.prototype.onSendSessionMessageResult = function(e, t, n) {
        console.log("onSendSessionMessageResult: " + e)
    }
    ,
    a
}),
define("models/customer", ["jquery", "underscore", "backbone", "router", "analytics", "models/blobcastmodel"], function(e, t, n, r, i, s) {
    function u() {}
    var o = s.extend({
        defaults: t.extend({}, s.prototype.defaults, {}),
        initialize: function() {
            s.prototype.initialize.apply(this),
            s.prototype.delegate = new u;
            var e = this;
            if (r.isTesting()) {
                var t = r.getTestData();
                e.set("roomBlob", t.roomBlob),
                e.set("customerBlob", t.customerBlob),
                e.set("username", t.customerBlob.playerName)
            }
            this.save()
        }
    });
    return u.prototype.onRoomJoined = function(e) {
        r.navigateToApp(e.appTag)
    }
    ,
    u.prototype.onRoomRejoined = function(e) {}
    ,
    u.prototype.onDisconnected = function() {
        n.modalDialog({
            title: "Disconnected",
            message: "You have been disconnected.",
            restart: !0
        }),
        r.login()
    }
    ,
    u.prototype.onRoomBlobChanged = function(e) {}
    ,
    u.prototype.onCustomerBlobChanged = function(e) {}
    ,
    new o
}),
define("adroll", ["jquery", "underscore", "backbone", "settings"], function(e, t, n, r, i) {
    var s = n.Model.extend({
        initialize: function() {
            window.adroll_adv_id = r.adRollAdvId,
            window.adroll_pix_id = r.adRollPixId;
            var e = document.createElement("script")
              , t = "https:" == document.location.protocol ? "https://s.adroll.com" : "http://a.adroll.com";
            e.setAttribute("async", "true"),
            e.type = "text/javascript",
            e.src = t + "/j/roundtrip.js",
            ((document.getElementsByTagName("head") || [null])[0] || document.getElementsByTagName("script")[0].parentNode).appendChild(e)
        }
    });
    return new s
}),
function(e) {
    var t = 5e3
      , n = {
        unauthorized: 401
    }
      , r = {
        $: e,
        baseUrl: "https://api.twitch.tv/kraken/",
        _config: {},
        extend: function(t) {
            e.extend(r, t)
        }
    };
    r.api = function(i, s) {
        if (!r._config.session)
            throw new Error("You must call init() before api()");
        var o = i.params || {};
        s = s || function() {}
        ;
        var u = !!r._config.session.token
          , a = r.baseUrl + (i.method || "");
        u && (o.oauth_token = r._config.session.token),
        e.ajax({
            url: a + "?" + e.param(o),
            dataType: "jsonp",
            timeout: t
        }).done(function(e) {
            r.log("Response Data:", e);
            if (!e.error) {
                s(null, e);
                return
            }
            r.log("API Error:", e.error + ";", e.message),
            u && e.status === n.unauthorized ? r.logout(function() {
                s(e, null)
            }) : s(e, null)
        }).fail(function() {
            s(new Error("Request Timeout"), null)
        })
    }
    ,
    r.log = function(e) {
        Array.prototype.unshift.call(arguments, "[Twitch]"),
        window.console && console.log.apply(console, arguments)
    }
    ,
    window.Twitch = r
}(window.jQuery || window.Zepto),
function() {
    var e = window.sessionStorage;
    e || function() {
        var t = function(e) {
            function t(e, t, n) {
                var r, i;
                n ? (r = new Date,
                r.setTime(r.getTime() + n * 24 * 60 * 60 * 1e3),
                i = "; expires=" + r.toGMTString()) : i = "",
                document.cookie = e + "=" + t + i + "; path=/"
            }
            function n(e) {
                var t = e + "=", n = document.cookie.split(";"), r, i;
                for (r = 0; r < n.length; r++) {
                    i = n[r];
                    while (i.charAt(0) == " ")
                        i = i.substring(1, i.length);
                    if (i.indexOf(t) === 0)
                        return i.substring(t.length, i.length)
                }
                return null
            }
            function r(n) {
                n = JSON.stringify(n),
                e == "session" ? window.name = n : t("localStorage", n, 365)
            }
            function i() {
                e == "session" ? window.name = "" : t("localStorage", "", 365)
            }
            function s() {
                var t = e == "session" ? window.name : n("localStorage");
                return t ? JSON.parse(t) : {}
            }
            var o = s();
            return {
                length: 0,
                clear: function() {
                    o = {},
                    this.length = 0,
                    i()
                },
                getItem: function(e) {
                    return o[e] === undefined ? null : o[e]
                },
                key: function(e) {
                    var t = 0;
                    for (var n in o) {
                        if (t == e)
                            return n;
                        t++
                    }
                    return null
                },
                removeItem: function(e) {
                    delete o[e],
                    this.length--,
                    r(o)
                },
                setItem: function(e, t) {
                    o[e] = t + "",
                    this.length++,
                    r(o)
                }
            }
        };
        e = new t("session")
    }(),
    Twitch.extend({
        _storage: e
    })
}(),
function() {
    var e = function(e, t) {
        if (!e.clientId)
            throw new Error("client id not specified");
        Twitch._config.clientId = e.clientId,
        Twitch._initSession(),
        typeof t == "function" && Twitch.getStatus(t)
    };
    Twitch.extend({
        init: e
    })
}(),
function() {
    var e = "twitch_oauth_session"
      , t = Twitch.$
      , n = function(e) {
        var t, n;
        e = e || document.location.hash;
        var r = function(t) {
            var n = e.match(t);
            return n ? n[1] : null
        };
        return n = {
            token: r(/access_token=(\w+)/),
            scope: r(/scope=([\w+]+)/) ? r(/scope=([\w+]+)/).split("+") : null,
            state: r(/state=(\w+)/),
            error: r(/error=(\w+)/),
            errorDescription: r(/error_description=(\w+)/)
        },
        n
    }
      , r = function(e) {
        Twitch.api({
            method: "/"
        }, function(t, n) {
            var r;
            if (t) {
                Twitch.log("error encountered updating session:", t),
                e && e(t, null);
                return
            }
            if (!n.token.valid) {
                Twitch.logout(e);
                return
            }
            e && e(null, r)
        })
    }
      , i = function() {
        return Twitch._config.session && Twitch._config.session.token
    }
      , s = function(e, t) {
        typeof e == "function" && (t = e),
        typeof t != "function" && (t = function() {}
        );
        if (!Twitch._config.session)
            throw new Error("You must call init() before getStatus()");
        var n = function(e) {
            return {
                authenticated: !!e.token,
                token: e.token,
                scope: e.scope,
                error: e.error,
                errorDescription: e.errorDescription
            }
        };
        e && e.force ? r(function(e, r) {
            t(e, n(r || Twitch._config.session))
        }) : t(null, n(Twitch._config.session))
    }
      , o = function(e) {
        if (!e.scope)
            throw new Error("Must specify list of requested scopes");
        var n = {
            response_type: "token",
            client_id: Twitch._config.clientId,
            redirect_uri: e.redirect_uri || window.location.href.replace(/#.*$/, ""),
            scope: e.scope.join(" ")
        };
        if (!n.client_id)
            throw new Error("You must call init() before login()");
        var r = Twitch.baseUrl + "oauth2/authorize?" + t.param(n);
        e.popup ? Twitch._config.loginPopup = window.open(r, "Login with TwitchTV", "height=600,width=660,resizable=yes,status=yes") : window.location = r
    }
      , u = function(t) {
        Twitch._config.session = {},
        Twitch._storage.removeItem(e),
        Twitch.events.emit("auth.logout"),
        typeof t == "function" && t(null)
    }
      , a = function() {
        var t;
        Twitch._config.session = {};
        if (window.JSON) {
            t = Twitch._storage.getItem(e);
            if (t)
                try {
                    Twitch._config.session = JSON.parse(t)
                } catch (r) {}
        }
        document.location.hash.match(/access_token=(\w+)/) && (Twitch._config.session = n(),
        window.JSON && Twitch._storage.setItem(e, JSON.stringify(Twitch._config.session))),
        s(function(e, t) {
            t.authenticated && Twitch.events.emit("auth.login")
        })
    };
    Twitch.extend({
        _initSession: a,
        _parseFragment: n,
        getToken: i,
        getStatus: s,
        login: o,
        logout: u
    })
}(),
function() {
    function e() {
        this._events = {},
        this._maxListeners = 10
    }
    function t(e, t, n, r, i) {
        this.type = e,
        this.listener = t,
        this.scope = n,
        this.once = r,
        this.instance = i
    }
    t.prototype.fire = function(e) {
        this.listener.apply(this.scope || this.instance, e);
        if (this.once)
            return this.instance.removeListener(this.type, this.listener, this.scope),
            !1
    }
    ,
    e.prototype.eachListener = function(e, t) {
        var n = null
          , r = null
          , i = null;
        if (this._events.hasOwnProperty(e)) {
            r = this._events[e];
            for (n = 0; n < r.length; n += 1) {
                i = t.call(this, r[n], n);
                if (i === !1)
                    n -= 1;
                else if (i === !0)
                    break
            }
        }
        return this
    }
    ,
    e.prototype.addListener = function(e, n, r, i) {
        return this._events.hasOwnProperty(e) || (this._events[e] = []),
        this._events[e].push(new t(e,n,r,i,this)),
        this.emit("newListener", e, n, r, i),
        this._maxListeners && !this._events[e].warned && this._events[e].length > this._maxListeners && (Twitch.log("Possible EventEmitter memory leak detected. " + this._events[e].length + " listeners added. Use emitter.setMaxListeners() to increase limit."),
        this._events[e].warned = !0),
        this
    }
    ,
    e.prototype.on = e.prototype.addListener,
    e.prototype.once = function(e, t, n) {
        return this.addListener(e, t, n, !0)
    }
    ,
    e.prototype.removeListener = function(e, t, n) {
        return this.eachListener(e, function(r, i) {
            r.listener === t && (!n || r.scope === n) && this._events[e].splice(i, 1)
        }),
        this._events[e] && this._events[e].length === 0 && delete this._events[e],
        this
    }
    ,
    e.prototype.off = e.prototype.removeListener,
    e.prototype.removeAllListeners = function(e) {
        return e && this._events.hasOwnProperty(e) ? delete this._events[e] : e || (this._events = {}),
        this
    }
    ,
    e.prototype.listeners = function(e) {
        if (this._events.hasOwnProperty(e)) {
            var t = [];
            return this.eachListener(e, function(e) {
                t.push(e.listener)
            }),
            t
        }
        return []
    }
    ,
    e.prototype.emit = function(e) {
        var t = []
          , n = null;
        for (n = 1; n < arguments.length; n += 1)
            t.push(arguments[n]);
        return this.eachListener(e, function(e) {
            return e.fire(t)
        }),
        this
    }
    ,
    e.prototype.setMaxListeners = function(e) {
        return this._maxListeners = e,
        this
    }
    ,
    Twitch.extend({
        events: new e
    })
}(),
define("twitch-sdk", function() {}),
define("twitch-model", ["jquery", "underscore", "backbone", "settings", "twitch-sdk", "jquery-cookie"], function(e, t, n, r, i) {
    var s = n.Model.extend({
        user: undefined,
        initialize: function() {},
        setup: function(t) {
            var n = this;
            e(".twitch-logout").hide(),
            Twitch.init({
                clientId: r.TwitchClientID
            }, function(r, i) {
                r && console.log(r),
                i.authenticated && (e(".twitch-connect").hide(),
                e(".twitch-logout").show(),
                i.authenticated == 1 && n.getUser(t))
            })
        },
        login: function() {
            var t = e(location).attr("protocol") + "//" + e(location).attr("host");
            Twitch.login({
                scope: ["user_read"],
                redirect_uri: t
            })
        },
        logout: function() {
            Twitch.logout(),
            this.user = undefined,
            e(".twitch-connect").show(),
            e(".twitch-logout").hide()
        },
        getUser: function(e) {
            var t = this;
            t.user === undefined ? Twitch.api({
                method: "user"
            }, function(n, r) {
                n ? (console.log(n),
                t.logout()) : (t.user = r,
                e(t.user))
            }) : e(t.user)
        }
    });
    return new s
}),
define("text!templates/signin.html", [], function() {
    return '<div id="page-signin" class="page white drawer drawer--left">\n\n    <!--\n    <div class="alert alert-info alert-dismissible" role="alert">\n        <span class="close" data-dismiss="alert">&times;</span>\n        <center><a href="http://jackboxgames.us7.list-manage.com/subscribe?u=a181fa3b606c035e1cee11b76&id=e5351605ef" class="alert-link" data-dismiss="alert" target="_blank">Subscribe to our newsletter!</a></center>\n    </div>\n    -->\n    <div id="jbg-galleries-alert" class="alert alert-info alert-dismissible" role="alert">\n        <center><span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span> See your previous galleries!</center>\n    </div>\n\n    <header role="banner">\n        <button type="button" class="drawer-toggle drawer-hamburger drawer-hamburger-jbg">\n            <span class="sr-only">toggle navigation</span>\n            <div id="jbg-settings-btn"><i class="fa fa-cog fa-2x"></i></div>\n        </button>\n        <nav class="drawer-nav drawer-nav-jbg" role="navigation">\n            <ul class="drawer-menu">\n                <li class="drawer-header-jbg">Settings</li>\n                <li><a class="drawer-menu-item drawer-menu-item-jbg twitch-connect" href="#"><i class="fa fa-twitch fa-lg"></i> &nbsp;Twitch Login</a></li>\n                <li><a class="drawer-menu-item drawer-menu-item-jbg twitch-logout" href="#"><i class="fa fa-twitch fa-lg"></i> &nbsp;Logout</a></li>\n                <li><a class="drawer-menu-item drawer-menu-item-jbg button-tos" href="#"><i class="fa fa-gavel fa-lg"></i> &nbsp;Terms of Service</a></li>\n                <li><a class="drawer-menu-item drawer-menu-item-jbg button-help" href="#"><i class="fa fa-question-circle fa-lg"></i> &nbsp;Help</a></li>\n\n                <%=gallerylink%>\n\n            </ul>\n        </nav>\n    </header> \n\n    <div id="jbg_logo" class="jbg_logo"></div>\n    <div class="container">\n                \n        <form class="pure-form">\n            <fieldset>\n                <div class="pure-control-group">\n                    <label for="room" class="text-signin">Room Code</label>\n                    <input id="roomcode" class="pure-input-1 jbg-input" type="text" tabindex="1" placeholder="ENTER 4-LETTER CODE" style="text-transform:uppercase;" maxlength="4" value="<%=roomid%>" autocapitalize="off" autocorrect="off" autocomplete="off">\n                </div>\n                <div class="pure-control-group">\n                    <label for="name" class="text-signin">Name (Limit 12 Characters)</label>\n                    <input id="username" class="pure-input-1 jbg-input" type="text" tabindex="2" placeholder="ENTER YOUR NAME" style="text-transform:uppercase;" maxlength="12" value="<%=username%>" autocapitalize="off" autocorrect="off" autocomplete="off" maxlength="40">\n                </div>\n            </fieldset>\n\n            <div class="pure-u-2-3 right">\n                <div style="margin-left:5px; margin-right:5px;">\n                    <input type="submit" value="PLAY" id="button-join" tabindex="3" class="button-signin button-blue button-xlarge pure-button">\n                </div>\n            </div>\n\n            <div class="pure-u-1-3 right">\n                <div style="margin-left:5px; margin-right:5px;">\n                    <button type="button" id="button-help" class="button-signin button-gray button-xlarge pure-button button-help" >\n                        <i class="fa fa-question-circle fa-lg"></i><div class="button-help-text">&nbsp;&nbsp;HELP</div>\n                    </button>\n                </div>\n            </div>\n            \n        </form>\n\n        <canvas class="canvas-compatibility" width=\'1\' height=\'1\' style=\'background-color:white;\'>\n            Sorry, your browser is not supported.\n        </canvas>\n    </div>\n    \n    <div class="container">\n        <div id="jbg_banner">\n            <img id="banner-img" class="pure-img" style="margin-left:auto; margin-right:auto; cursor:pointer;" src="">\n        </div>\n    </div>\n\n</div>'
}),
!function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define("drawer", ["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
    "use strict";
    var t = "drawer"
      , n = "undefined" != typeof document.ontouchstart
      , r = {
        init: function(n) {
            return n = e.extend({
                iscroll: {
                    mouseWheel: !0,
                    preventDefault: !1
                },
                showOverlay: !0
            }, n),
            r.settings = {
                state: !1,
                "class": {
                    nav: "drawer-nav",
                    toggle: "drawer-toggle",
                    overlay: "drawer-overlay",
                    open: "drawer-open",
                    close: "drawer-close",
                    dropdown: "drawer-dropdown"
                },
                events: {
                    opened: "drawer.opened",
                    closed: "drawer.closed"
                },
                dropdownEvents: {
                    opened: "shown.bs.dropdown",
                    closed: "hidden.bs.dropdown"
                }
            },
            this.each(function() {
                var i = this
                  , o = e(this)
                  , u = o.data(t);
                if (!u) {
                    n = e.extend({}, n),
                    o.data(t, {
                        options: n
                    });
                    var a = new IScroll("." + r.settings["class"].nav,n.iscroll);
                    n.showOverlay && r.addOverlay.call(i),
                    e("." + r.settings["class"].toggle).on("click." + t, function() {
                        return r.toggle.call(i),
                        a.refresh()
                    }),
                    e(window).resize(function() {
                        return r.close.call(i),
                        a.refresh()
                    }),
                    e("." + r.settings["class"].dropdown).on(r.settings.dropdownEvents.opened + " " + r.settings.dropdownEvents.closed, function() {
                        return a.refresh()
                    })
                }
            })
        },
        addOverlay: function() {
            var t = e(this)
              , n = e("<div>").addClass(r.settings["class"].overlay + " " + r.settings["class"].toggle);
            return t.append(n)
        },
        toggle: function() {
            var e = this;
            return r.settings.state ? r.close.call(e) : r.open.call(e)
        },
        open: function(i) {
            var o = e(this);
            return i = o.data(t).options,
            n && o.on("touchmove." + t, function(e) {
                e.preventDefault()
            }),
            o.removeClass(r.settings["class"].close).addClass(r.settings["class"].open).css({
                overflow: "hidden"
            }).drawerCallback(function() {
                r.settings.state = !0,
                o.trigger(r.settings.events.opened)
            })
        },
        close: function(i) {
            var o = e(this);
            return i = o.data(t).options,
            n && o.off("touchmove." + t),
            o.removeClass(r.settings["class"].open).addClass(r.settings["class"].close).css({
                overflow: "auto"
            }).drawerCallback(function() {
                r.settings.state = !1,
                o.trigger(r.settings.events.closed)
            })
        },
        destroy: function() {
            return this.each(function() {
                var n = e(this);
                e(window).off("." + t),
                n.removeData(t)
            })
        }
    };
    e.fn.drawerCallback = function(t) {
        var n = "transitionend webkitTransitionEnd";
        return this.each(function() {
            var r = e(this);
            r.on(n, function() {
                return r.off(n),
                t.call(this)
            })
        })
    }
    ,
    e.fn.drawer = function(n) {
        return r[n] ? r[n].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof n && n ? void e.error("Method " + n + " does not exist on jQuery." + t) : r.init.apply(this, arguments)
    }
}),
function(e, t, n) {
    function s(e, n) {
        this.wrapper = typeof e == "string" ? t.querySelector(e) : e,
        this.scroller = this.wrapper.children[0],
        this.scrollerStyle = this.scroller.style,
        this.options = {
            resizeScrollbars: !0,
            mouseWheelSpeed: 20,
            snapThreshold: .334,
            startX: 0,
            startY: 0,
            scrollY: !0,
            directionLockThreshold: 5,
            momentum: !0,
            bounce: !0,
            bounceTime: 600,
            bounceEasing: "",
            preventDefault: !0,
            preventDefaultException: {
                tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
            },
            HWCompositing: !0,
            useTransition: !0,
            useTransform: !0
        };
        for (var r in n)
            this.options[r] = n[r];
        this.translateZ = this.options.HWCompositing && i.hasPerspective ? " translateZ(0)" : "",
        this.options.useTransition = i.hasTransition && this.options.useTransition,
        this.options.useTransform = i.hasTransform && this.options.useTransform,
        this.options.eventPassthrough = this.options.eventPassthrough === !0 ? "vertical" : this.options.eventPassthrough,
        this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault,
        this.options.scrollY = this.options.eventPassthrough == "vertical" ? !1 : this.options.scrollY,
        this.options.scrollX = this.options.eventPassthrough == "horizontal" ? !1 : this.options.scrollX,
        this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough,
        this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold,
        this.options.bounceEasing = typeof this.options.bounceEasing == "string" ? i.ease[this.options.bounceEasing] || i.ease.circular : this.options.bounceEasing,
        this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling,
        this.options.tap === !0 && (this.options.tap = "tap"),
        this.options.shrinkScrollbars == "scale" && (this.options.useTransition = !1),
        this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1,
        this.x = 0,
        this.y = 0,
        this.directionX = 0,
        this.directionY = 0,
        this._events = {},
        this._init(),
        this.refresh(),
        this.scrollTo(this.options.startX, this.options.startY),
        this.enable()
    }
    function o(e, n, r) {
        var i = t.createElement("div")
          , s = t.createElement("div");
        return r === !0 && (i.style.cssText = "position:absolute;z-index:9999",
        s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"),
        s.className = "iScrollIndicator",
        e == "h" ? (r === !0 && (i.style.cssText += ";height:7px;left:2px;right:2px;bottom:0",
        s.style.height = "100%"),
        i.className = "iScrollHorizontalScrollbar") : (r === !0 && (i.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px",
        s.style.width = "100%"),
        i.className = "iScrollVerticalScrollbar"),
        i.style.cssText += ";overflow:hidden",
        n || (i.style.pointerEvents = "none"),
        i.appendChild(s),
        i
    }
    function u(n, r) {
        this.wrapper = typeof r.el == "string" ? t.querySelector(r.el) : r.el,
        this.wrapperStyle = this.wrapper.style,
        this.indicator = this.wrapper.children[0],
        this.indicatorStyle = this.indicator.style,
        this.scroller = n,
        this.options = {
            listenX: !0,
            listenY: !0,
            interactive: !1,
            resize: !0,
            defaultScrollbars: !1,
            shrink: !1,
            fade: !1,
            speedRatioX: 0,
            speedRatioY: 0
        };
        for (var s in r)
            this.options[s] = r[s];
        this.sizeRatioX = 1,
        this.sizeRatioY = 1,
        this.maxPosX = 0,
        this.maxPosY = 0,
        this.options.interactive && (this.options.disableTouch || (i.addEvent(this.indicator, "touchstart", this),
        i.addEvent(e, "touchend", this)),
        this.options.disablePointer || (i.addEvent(this.indicator, i.prefixPointerEvent("pointerdown"), this),
        i.addEvent(e, i.prefixPointerEvent("pointerup"), this)),
        this.options.disableMouse || (i.addEvent(this.indicator, "mousedown", this),
        i.addEvent(e, "mouseup", this))),
        this.options.fade && (this.wrapperStyle[i.style.transform] = this.scroller.translateZ,
        this.wrapperStyle[i.style.transitionDuration] = i.isBadAndroid ? "0.001s" : "0ms",
        this.wrapperStyle.opacity = "0")
    }
    var r = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function(t) {
        e.setTimeout(t, 1e3 / 60)
    }
      , i = function() {
        function o(e) {
            return s === !1 ? !1 : s === "" ? e : s + e.charAt(0).toUpperCase() + e.substr(1)
        }
        var r = {}
          , i = t.createElement("div").style
          , s = function() {
            var e = ["t", "webkitT", "MozT", "msT", "OT"], t, n = 0, r = e.length;
            for (; n < r; n++) {
                t = e[n] + "ransform";
                if (t in i)
                    return e[n].substr(0, e[n].length - 1)
            }
            return !1
        }();
        r.getTime = Date.now || function() {
            return (new Date).getTime()
        }
        ,
        r.extend = function(e, t) {
            for (var n in t)
                e[n] = t[n]
        }
        ,
        r.addEvent = function(e, t, n, r) {
            e.addEventListener(t, n, !!r)
        }
        ,
        r.removeEvent = function(e, t, n, r) {
            e.removeEventListener(t, n, !!r)
        }
        ,
        r.prefixPointerEvent = function(t) {
            return e.MSPointerEvent ? "MSPointer" + t.charAt(9).toUpperCase() + t.substr(10) : t
        }
        ,
        r.momentum = function(e, t, r, i, s, o) {
            var u = e - t, a = n.abs(u) / r, f, l;
            return o = o === undefined ? 6e-4 : o,
            f = e + a * a / (2 * o) * (u < 0 ? -1 : 1),
            l = a / o,
            f < i ? (f = s ? i - s / 2.5 * (a / 8) : i,
            u = n.abs(f - e),
            l = u / a) : f > 0 && (f = s ? s / 2.5 * (a / 8) : 0,
            u = n.abs(e) + f,
            l = u / a),
            {
                destination: n.round(f),
                duration: l
            }
        }
        ;
        var u = o("transform");
        return r.extend(r, {
            hasTransform: u !== !1,
            hasPerspective: o("perspective")in i,
            hasTouch: "ontouchstart"in e,
            hasPointer: e.PointerEvent || e.MSPointerEvent,
            hasTransition: o("transition")in i
        }),
        r.isBadAndroid = /Android /.test(e.navigator.appVersion) && !/Chrome\/\d/.test(e.navigator.appVersion),
        r.extend(r.style = {}, {
            transform: u,
            transitionTimingFunction: o("transitionTimingFunction"),
            transitionDuration: o("transitionDuration"),
            transitionDelay: o("transitionDelay"),
            transformOrigin: o("transformOrigin")
        }),
        r.hasClass = function(e, t) {
            var n = new RegExp("(^|\\s)" + t + "(\\s|$)");
            return n.test(e.className)
        }
        ,
        r.addClass = function(e, t) {
            if (r.hasClass(e, t))
                return;
            var n = e.className.split(" ");
            n.push(t),
            e.className = n.join(" ")
        }
        ,
        r.removeClass = function(e, t) {
            if (!r.hasClass(e, t))
                return;
            var n = new RegExp("(^|\\s)" + t + "(\\s|$)","g");
            e.className = e.className.replace(n, " ")
        }
        ,
        r.offset = function(e) {
            var t = -e.offsetLeft
              , n = -e.offsetTop;
            while (e = e.offsetParent)
                t -= e.offsetLeft,
                n -= e.offsetTop;
            return {
                left: t,
                top: n
            }
        }
        ,
        r.preventDefaultException = function(e, t) {
            for (var n in t)
                if (t[n].test(e[n]))
                    return !0;
            return !1
        }
        ,
        r.extend(r.eventType = {}, {
            touchstart: 1,
            touchmove: 1,
            touchend: 1,
            mousedown: 2,
            mousemove: 2,
            mouseup: 2,
            pointerdown: 3,
            pointermove: 3,
            pointerup: 3,
            MSPointerDown: 3,
            MSPointerMove: 3,
            MSPointerUp: 3
        }),
        r.extend(r.ease = {}, {
            quadratic: {
                style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                fn: function(e) {
                    return e * (2 - e)
                }
            },
            circular: {
                style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
                fn: function(e) {
                    return n.sqrt(1 - --e * e)
                }
            },
            back: {
                style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                fn: function(e) {
                    var t = 4;
                    return (e -= 1) * e * ((t + 1) * e + t) + 1
                }
            },
            bounce: {
                style: "",
                fn: function(e) {
                    return (e /= 1) < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
                }
            },
            elastic: {
                style: "",
                fn: function(e) {
                    var t = .22
                      , r = .4;
                    return e === 0 ? 0 : e == 1 ? 1 : r * n.pow(2, -10 * e) * n.sin((e - t / 4) * 2 * n.PI / t) + 1
                }
            }
        }),
        r.tap = function(e, n) {
            var r = t.createEvent("Event");
            r.initEvent(n, !0, !0),
            r.pageX = e.pageX,
            r.pageY = e.pageY,
            e.target.dispatchEvent(r)
        }
        ,
        r.click = function(e) {
            var n = e.target, r;
            /(SELECT|INPUT|TEXTAREA)/i.test(n.tagName) || (r = t.createEvent("MouseEvents"),
            r.initMouseEvent("click", !0, !0, e.view, 1, n.screenX, n.screenY, n.clientX, n.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null),
            r._constructed = !0,
            n.dispatchEvent(r))
        }
        ,
        r
    }();
    s.prototype = {
        version: "5.1.3",
        _init: function() {
            this._initEvents(),
            (this.options.scrollbars || this.options.indicators) && this._initIndicators(),
            this.options.mouseWheel && this._initWheel(),
            this.options.snap && this._initSnap(),
            this.options.keyBindings && this._initKeys()
        },
        destroy: function() {
            this._initEvents(!0),
            this._execEvent("destroy")
        },
        _transitionEnd: function(e) {
            if (e.target != this.scroller || !this.isInTransition)
                return;
            this._transitionTime(),
            this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1,
            this._execEvent("scrollEnd"))
        },
        _start: function(e) {
            if (i.eventType[e.type] != 1 && e.button !== 0)
                return;
            if (!this.enabled || this.initiated && i.eventType[e.type] !== this.initiated)
                return;
            this.options.preventDefault && !i.isBadAndroid && !i.preventDefaultException(e.target, this.options.preventDefaultException) && e.preventDefault();
            var t = e.touches ? e.touches[0] : e, r;
            this.initiated = i.eventType[e.type],
            this.moved = !1,
            this.distX = 0,
            this.distY = 0,
            this.directionX = 0,
            this.directionY = 0,
            this.directionLocked = 0,
            this._transitionTime(),
            this.startTime = i.getTime(),
            this.options.useTransition && this.isInTransition ? (this.isInTransition = !1,
            r = this.getComputedPosition(),
            this._translate(n.round(r.x), n.round(r.y)),
            this._execEvent("scrollEnd")) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1,
            this._execEvent("scrollEnd")),
            this.startX = this.x,
            this.startY = this.y,
            this.absStartX = this.x,
            this.absStartY = this.y,
            this.pointX = t.pageX,
            this.pointY = t.pageY,
            this._execEvent("beforeScrollStart")
        },
        _move: function(e) {
            if (!this.enabled || i.eventType[e.type] !== this.initiated)
                return;
            this.options.preventDefault && e.preventDefault();
            var t = e.touches ? e.touches[0] : e, r = t.pageX - this.pointX, s = t.pageY - this.pointY, o = i.getTime(), u, a, f, l;
            this.pointX = t.pageX,
            this.pointY = t.pageY,
            this.distX += r,
            this.distY += s,
            f = n.abs(this.distX),
            l = n.abs(this.distY);
            if (o - this.endTime > 300 && f < 10 && l < 10)
                return;
            !this.directionLocked && !this.options.freeScroll && (f > l + this.options.directionLockThreshold ? this.directionLocked = "h" : l >= f + this.options.directionLockThreshold ? this.directionLocked = "v" : this.directionLocked = "n");
            if (this.directionLocked == "h") {
                if (this.options.eventPassthrough == "vertical")
                    e.preventDefault();
                else if (this.options.eventPassthrough == "horizontal") {
                    this.initiated = !1;
                    return
                }
                s = 0
            } else if (this.directionLocked == "v") {
                if (this.options.eventPassthrough == "horizontal")
                    e.preventDefault();
                else if (this.options.eventPassthrough == "vertical") {
                    this.initiated = !1;
                    return
                }
                r = 0
            }
            r = this.hasHorizontalScroll ? r : 0,
            s = this.hasVerticalScroll ? s : 0,
            u = this.x + r,
            a = this.y + s;
            if (u > 0 || u < this.maxScrollX)
                u = this.options.bounce ? this.x + r / 3 : u > 0 ? 0 : this.maxScrollX;
            if (a > 0 || a < this.maxScrollY)
                a = this.options.bounce ? this.y + s / 3 : a > 0 ? 0 : this.maxScrollY;
            this.directionX = r > 0 ? -1 : r < 0 ? 1 : 0,
            this.directionY = s > 0 ? -1 : s < 0 ? 1 : 0,
            this.moved || this._execEvent("scrollStart"),
            this.moved = !0,
            this._translate(u, a),
            o - this.startTime > 300 && (this.startTime = o,
            this.startX = this.x,
            this.startY = this.y)
        },
        _end: function(e) {
            if (!this.enabled || i.eventType[e.type] !== this.initiated)
                return;
            this.options.preventDefault && !i.preventDefaultException(e.target, this.options.preventDefaultException) && e.preventDefault();
            var t = e.changedTouches ? e.changedTouches[0] : e, r, s, o = i.getTime() - this.startTime, u = n.round(this.x), a = n.round(this.y), f = n.abs(u - this.startX), l = n.abs(a - this.startY), c = 0, h = "";
            this.isInTransition = 0,
            this.initiated = 0,
            this.endTime = i.getTime();
            if (this.resetPosition(this.options.bounceTime))
                return;
            this.scrollTo(u, a);
            if (!this.moved) {
                this.options.tap && i.tap(e, this.options.tap),
                this.options.click && i.click(e),
                this._execEvent("scrollCancel");
                return
            }
            if (this._events.flick && o < 200 && f < 100 && l < 100) {
                this._execEvent("flick");
                return
            }
            this.options.momentum && o < 300 && (r = this.hasHorizontalScroll ? i.momentum(this.x, this.startX, o, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
                destination: u,
                duration: 0
            },
            s = this.hasVerticalScroll ? i.momentum(this.y, this.startY, o, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
                destination: a,
                duration: 0
            },
            u = r.destination,
            a = s.destination,
            c = n.max(r.duration, s.duration),
            this.isInTransition = 1);
            if (this.options.snap) {
                var p = this._nearestSnap(u, a);
                this.currentPage = p,
                c = this.options.snapSpeed || n.max(n.max(n.min(n.abs(u - p.x), 1e3), n.min(n.abs(a - p.y), 1e3)), 300),
                u = p.x,
                a = p.y,
                this.directionX = 0,
                this.directionY = 0,
                h = this.options.bounceEasing
            }
            if (u != this.x || a != this.y) {
                if (u > 0 || u < this.maxScrollX || a > 0 || a < this.maxScrollY)
                    h = i.ease.quadratic;
                this.scrollTo(u, a, c, h);
                return
            }
            this._execEvent("scrollEnd")
        },
        _resize: function() {
            var e = this;
            clearTimeout(this.resizeTimeout),
            this.resizeTimeout = setTimeout(function() {
                e.refresh()
            }, this.options.resizePolling)
        },
        resetPosition: function(e) {
            var t = this.x
              , n = this.y;
            return e = e || 0,
            !this.hasHorizontalScroll || this.x > 0 ? t = 0 : this.x < this.maxScrollX && (t = this.maxScrollX),
            !this.hasVerticalScroll || this.y > 0 ? n = 0 : this.y < this.maxScrollY && (n = this.maxScrollY),
            t == this.x && n == this.y ? !1 : (this.scrollTo(t, n, e, this.options.bounceEasing),
            !0)
        },
        disable: function() {
            this.enabled = !1
        },
        enable: function() {
            this.enabled = !0
        },
        refresh: function() {
            var e = this.wrapper.offsetHeight;
            this.wrapperWidth = this.wrapper.clientWidth,
            this.wrapperHeight = this.wrapper.clientHeight,
            this.scrollerWidth = this.scroller.offsetWidth,
            this.scrollerHeight = this.scroller.offsetHeight,
            this.maxScrollX = this.wrapperWidth - this.scrollerWidth,
            this.maxScrollY = this.wrapperHeight - this.scrollerHeight,
            this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0,
            this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0,
            this.hasHorizontalScroll || (this.maxScrollX = 0,
            this.scrollerWidth = this.wrapperWidth),
            this.hasVerticalScroll || (this.maxScrollY = 0,
            this.scrollerHeight = this.wrapperHeight),
            this.endTime = 0,
            this.directionX = 0,
            this.directionY = 0,
            this.wrapperOffset = i.offset(this.wrapper),
            this._execEvent("refresh"),
            this.resetPosition()
        },
        on: function(e, t) {
            this._events[e] || (this._events[e] = []),
            this._events[e].push(t)
        },
        off: function(e, t) {
            if (!this._events[e])
                return;
            var n = this._events[e].indexOf(t);
            n > -1 && this._events[e].splice(n, 1)
        },
        _execEvent: function(e) {
            if (!this._events[e])
                return;
            var t = 0
              , n = this._events[e].length;
            if (!n)
                return;
            for (; t < n; t++)
                this._events[e][t].apply(this, [].slice.call(arguments, 1))
        },
        scrollBy: function(e, t, n, r) {
            e = this.x + e,
            t = this.y + t,
            n = n || 0,
            this.scrollTo(e, t, n, r)
        },
        scrollTo: function(e, t, n, r) {
            r = r || i.ease.circular,
            this.isInTransition = this.options.useTransition && n > 0,
            !n || this.options.useTransition && r.style ? (this._transitionTimingFunction(r.style),
            this._transitionTime(n),
            this._translate(e, t)) : this._animate(e, t, n, r.fn)
        },
        scrollToElement: function(e, t, r, s, o) {
            e = e.nodeType ? e : this.scroller.querySelector(e);
            if (!e)
                return;
            var u = i.offset(e);
            u.left -= this.wrapperOffset.left,
            u.top -= this.wrapperOffset.top,
            r === !0 && (r = n.round(e.offsetWidth / 2 - this.wrapper.offsetWidth / 2)),
            s === !0 && (s = n.round(e.offsetHeight / 2 - this.wrapper.offsetHeight / 2)),
            u.left -= r || 0,
            u.top -= s || 0,
            u.left = u.left > 0 ? 0 : u.left < this.maxScrollX ? this.maxScrollX : u.left,
            u.top = u.top > 0 ? 0 : u.top < this.maxScrollY ? this.maxScrollY : u.top,
            t = t === undefined || t === null || t === "auto" ? n.max(n.abs(this.x - u.left), n.abs(this.y - u.top)) : t,
            this.scrollTo(u.left, u.top, t, o)
        },
        _transitionTime: function(e) {
            e = e || 0,
            this.scrollerStyle[i.style.transitionDuration] = e + "ms",
            !e && i.isBadAndroid && (this.scrollerStyle[i.style.transitionDuration] = "0.001s");
            if (this.indicators)
                for (var t = this.indicators.length; t--; )
                    this.indicators[t].transitionTime(e)
        },
        _transitionTimingFunction: function(e) {
            this.scrollerStyle[i.style.transitionTimingFunction] = e;
            if (this.indicators)
                for (var t = this.indicators.length; t--; )
                    this.indicators[t].transitionTimingFunction(e)
        },
        _translate: function(e, t) {
            this.options.useTransform ? this.scrollerStyle[i.style.transform] = "translate(" + e + "px," + t + "px)" + this.translateZ : (e = n.round(e),
            t = n.round(t),
            this.scrollerStyle.left = e + "px",
            this.scrollerStyle.top = t + "px"),
            this.x = e,
            this.y = t;
            if (this.indicators)
                for (var r = this.indicators.length; r--; )
                    this.indicators[r].updatePosition()
        },
        _initEvents: function(t) {
            var n = t ? i.removeEvent : i.addEvent
              , r = this.options.bindToWrapper ? this.wrapper : e;
            n(e, "orientationchange", this),
            n(e, "resize", this),
            this.options.click && n(this.wrapper, "click", this, !0),
            this.options.disableMouse || (n(this.wrapper, "mousedown", this),
            n(r, "mousemove", this),
            n(r, "mousecancel", this),
            n(r, "mouseup", this)),
            i.hasPointer && !this.options.disablePointer && (n(this.wrapper, i.prefixPointerEvent("pointerdown"), this),
            n(r, i.prefixPointerEvent("pointermove"), this),
            n(r, i.prefixPointerEvent("pointercancel"), this),
            n(r, i.prefixPointerEvent("pointerup"), this)),
            i.hasTouch && !this.options.disableTouch && (n(this.wrapper, "touchstart", this),
            n(r, "touchmove", this),
            n(r, "touchcancel", this),
            n(r, "touchend", this)),
            n(this.scroller, "transitionend", this),
            n(this.scroller, "webkitTransitionEnd", this),
            n(this.scroller, "oTransitionEnd", this),
            n(this.scroller, "MSTransitionEnd", this)
        },
        getComputedPosition: function() {
            var t = e.getComputedStyle(this.scroller, null), n, r;
            return this.options.useTransform ? (t = t[i.style.transform].split(")")[0].split(", "),
            n = +(t[12] || t[4]),
            r = +(t[13] || t[5])) : (n = +t.left.replace(/[^-\d.]/g, ""),
            r = +t.top.replace(/[^-\d.]/g, "")),
            {
                x: n,
                y: r
            }
        },
        _initIndicators: function() {
            function a(e) {
                for (var t = i.indicators.length; t--; )
                    e.call(i.indicators[t])
            }
            var e = this.options.interactiveScrollbars, t = typeof this.options.scrollbars != "string", n = [], r, i = this;
            this.indicators = [],
            this.options.scrollbars && (this.options.scrollY && (r = {
                el: o("v", e, this.options.scrollbars),
                interactive: e,
                defaultScrollbars: !0,
                customStyle: t,
                resize: this.options.resizeScrollbars,
                shrink: this.options.shrinkScrollbars,
                fade: this.options.fadeScrollbars,
                listenX: !1
            },
            this.wrapper.appendChild(r.el),
            n.push(r)),
            this.options.scrollX && (r = {
                el: o("h", e, this.options.scrollbars),
                interactive: e,
                defaultScrollbars: !0,
                customStyle: t,
                resize: this.options.resizeScrollbars,
                shrink: this.options.shrinkScrollbars,
                fade: this.options.fadeScrollbars,
                listenY: !1
            },
            this.wrapper.appendChild(r.el),
            n.push(r))),
            this.options.indicators && (n = n.concat(this.options.indicators));
            for (var s = n.length; s--; )
                this.indicators.push(new u(this,n[s]));
            this.options.fadeScrollbars && (this.on("scrollEnd", function() {
                a(function() {
                    this.fade()
                })
            }),
            this.on("scrollCancel", function() {
                a(function() {
                    this.fade()
                })
            }),
            this.on("scrollStart", function() {
                a(function() {
                    this.fade(1)
                })
            }),
            this.on("beforeScrollStart", function() {
                a(function() {
                    this.fade(1, !0)
                })
            })),
            this.on("refresh", function() {
                a(function() {
                    this.refresh()
                })
            }),
            this.on("destroy", function() {
                a(function() {
                    this.destroy()
                }),
                delete this.indicators
            })
        },
        _initWheel: function() {
            i.addEvent(this.wrapper, "wheel", this),
            i.addEvent(this.wrapper, "mousewheel", this),
            i.addEvent(this.wrapper, "DOMMouseScroll", this),
            this.on("destroy", function() {
                i.removeEvent(this.wrapper, "wheel", this),
                i.removeEvent(this.wrapper, "mousewheel", this),
                i.removeEvent(this.wrapper, "DOMMouseScroll", this)
            })
        },
        _wheel: function(e) {
            if (!this.enabled)
                return;
            e.preventDefault(),
            e.stopPropagation();
            var t, r, i, s, o = this;
            this.wheelTimeout === undefined && o._execEvent("scrollStart"),
            clearTimeout(this.wheelTimeout),
            this.wheelTimeout = setTimeout(function() {
                o._execEvent("scrollEnd"),
                o.wheelTimeout = undefined
            }, 400);
            if ("deltaX"in e)
                e.deltaMode === 1 ? (t = -e.deltaX * this.options.mouseWheelSpeed,
                r = -e.deltaY * this.options.mouseWheelSpeed) : (t = -e.deltaX,
                r = -e.deltaY);
            else if ("wheelDeltaX"in e)
                t = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed,
                r = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
            else if ("wheelDelta"in e)
                t = r = e.wheelDelta / 120 * this.options.mouseWheelSpeed;
            else {
                if (!("detail"in e))
                    return;
                t = r = -e.detail / 3 * this.options.mouseWheelSpeed
            }
            t *= this.options.invertWheelDirection,
            r *= this.options.invertWheelDirection,
            this.hasVerticalScroll || (t = r,
            r = 0);
            if (this.options.snap) {
                i = this.currentPage.pageX,
                s = this.currentPage.pageY,
                t > 0 ? i-- : t < 0 && i++,
                r > 0 ? s-- : r < 0 && s++,
                this.goToPage(i, s);
                return
            }
            i = this.x + n.round(this.hasHorizontalScroll ? t : 0),
            s = this.y + n.round(this.hasVerticalScroll ? r : 0),
            i > 0 ? i = 0 : i < this.maxScrollX && (i = this.maxScrollX),
            s > 0 ? s = 0 : s < this.maxScrollY && (s = this.maxScrollY),
            this.scrollTo(i, s, 0)
        },
        _initSnap: function() {
            this.currentPage = {},
            typeof this.options.snap == "string" && (this.options.snap = this.scroller.querySelectorAll(this.options.snap)),
            this.on("refresh", function() {
                var e = 0, t, r = 0, i, s, o, u = 0, a, f = this.options.snapStepX || this.wrapperWidth, l = this.options.snapStepY || this.wrapperHeight, c;
                this.pages = [];
                if (!this.wrapperWidth || !this.wrapperHeight || !this.scrollerWidth || !this.scrollerHeight)
                    return;
                if (this.options.snap === !0) {
                    s = n.round(f / 2),
                    o = n.round(l / 2);
                    while (u > -this.scrollerWidth) {
                        this.pages[e] = [],
                        t = 0,
                        a = 0;
                        while (a > -this.scrollerHeight)
                            this.pages[e][t] = {
                                x: n.max(u, this.maxScrollX),
                                y: n.max(a, this.maxScrollY),
                                width: f,
                                height: l,
                                cx: u - s,
                                cy: a - o
                            },
                            a -= l,
                            t++;
                        u -= f,
                        e++
                    }
                } else {
                    c = this.options.snap,
                    t = c.length,
                    i = -1;
                    for (; e < t; e++) {
                        if (e === 0 || c[e].offsetLeft <= c[e - 1].offsetLeft)
                            r = 0,
                            i++;
                        this.pages[r] || (this.pages[r] = []),
                        u = n.max(-c[e].offsetLeft, this.maxScrollX),
                        a = n.max(-c[e].offsetTop, this.maxScrollY),
                        s = u - n.round(c[e].offsetWidth / 2),
                        o = a - n.round(c[e].offsetHeight / 2),
                        this.pages[r][i] = {
                            x: u,
                            y: a,
                            width: c[e].offsetWidth,
                            height: c[e].offsetHeight,
                            cx: s,
                            cy: o
                        },
                        u > this.maxScrollX && r++
                    }
                }
                this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0),
                this.options.snapThreshold % 1 === 0 ? (this.snapThresholdX = this.options.snapThreshold,
                this.snapThresholdY = this.options.snapThreshold) : (this.snapThresholdX = n.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold),
                this.snapThresholdY = n.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold))
            }),
            this.on("flick", function() {
                var e = this.options.snapSpeed || n.max(n.max(n.min(n.abs(this.x - this.startX), 1e3), n.min(n.abs(this.y - this.startY), 1e3)), 300);
                this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, e)
            })
        },
        _nearestSnap: function(e, t) {
            if (!this.pages.length)
                return {
                    x: 0,
                    y: 0,
                    pageX: 0,
                    pageY: 0
                };
            var r = 0
              , i = this.pages.length
              , s = 0;
            if (n.abs(e - this.absStartX) < this.snapThresholdX && n.abs(t - this.absStartY) < this.snapThresholdY)
                return this.currentPage;
            e > 0 ? e = 0 : e < this.maxScrollX && (e = this.maxScrollX),
            t > 0 ? t = 0 : t < this.maxScrollY && (t = this.maxScrollY);
            for (; r < i; r++)
                if (e >= this.pages[r][0].cx) {
                    e = this.pages[r][0].x;
                    break
                }
            i = this.pages[r].length;
            for (; s < i; s++)
                if (t >= this.pages[0][s].cy) {
                    t = this.pages[0][s].y;
                    break
                }
            return r == this.currentPage.pageX && (r += this.directionX,
            r < 0 ? r = 0 : r >= this.pages.length && (r = this.pages.length - 1),
            e = this.pages[r][0].x),
            s == this.currentPage.pageY && (s += this.directionY,
            s < 0 ? s = 0 : s >= this.pages[0].length && (s = this.pages[0].length - 1),
            t = this.pages[0][s].y),
            {
                x: e,
                y: t,
                pageX: r,
                pageY: s
            }
        },
        goToPage: function(e, t, r, i) {
            i = i || this.options.bounceEasing,
            e >= this.pages.length ? e = this.pages.length - 1 : e < 0 && (e = 0),
            t >= this.pages[e].length ? t = this.pages[e].length - 1 : t < 0 && (t = 0);
            var s = this.pages[e][t].x
              , o = this.pages[e][t].y;
            r = r === undefined ? this.options.snapSpeed || n.max(n.max(n.min(n.abs(s - this.x), 1e3), n.min(n.abs(o - this.y), 1e3)), 300) : r,
            this.currentPage = {
                x: s,
                y: o,
                pageX: e,
                pageY: t
            },
            this.scrollTo(s, o, r, i)
        },
        next: function(e, t) {
            var n = this.currentPage.pageX
              , r = this.currentPage.pageY;
            n++,
            n >= this.pages.length && this.hasVerticalScroll && (n = 0,
            r++),
            this.goToPage(n, r, e, t)
        },
        prev: function(e, t) {
            var n = this.currentPage.pageX
              , r = this.currentPage.pageY;
            n--,
            n < 0 && this.hasVerticalScroll && (n = 0,
            r--),
            this.goToPage(n, r, e, t)
        },
        _initKeys: function(t) {
            var n = {
                pageUp: 33,
                pageDown: 34,
                end: 35,
                home: 36,
                left: 37,
                up: 38,
                right: 39,
                down: 40
            }, r;
            if (typeof this.options.keyBindings == "object")
                for (r in this.options.keyBindings)
                    typeof this.options.keyBindings[r] == "string" && (this.options.keyBindings[r] = this.options.keyBindings[r].toUpperCase().charCodeAt(0));
            else
                this.options.keyBindings = {};
            for (r in n)
                this.options.keyBindings[r] = this.options.keyBindings[r] || n[r];
            i.addEvent(e, "keydown", this),
            this.on("destroy", function() {
                i.removeEvent(e, "keydown", this)
            })
        },
        _key: function(e) {
            if (!this.enabled)
                return;
            var t = this.options.snap, r = t ? this.currentPage.pageX : this.x, s = t ? this.currentPage.pageY : this.y, o = i.getTime(), u = this.keyTime || 0, a = .25, f;
            this.options.useTransition && this.isInTransition && (f = this.getComputedPosition(),
            this._translate(n.round(f.x), n.round(f.y)),
            this.isInTransition = !1),
            this.keyAcceleration = o - u < 200 ? n.min(this.keyAcceleration + a, 50) : 0;
            switch (e.keyCode) {
            case this.options.keyBindings.pageUp:
                this.hasHorizontalScroll && !this.hasVerticalScroll ? r += t ? 1 : this.wrapperWidth : s += t ? 1 : this.wrapperHeight;
                break;
            case this.options.keyBindings.pageDown:
                this.hasHorizontalScroll && !this.hasVerticalScroll ? r -= t ? 1 : this.wrapperWidth : s -= t ? 1 : this.wrapperHeight;
                break;
            case this.options.keyBindings.end:
                r = t ? this.pages.length - 1 : this.maxScrollX,
                s = t ? this.pages[0].length - 1 : this.maxScrollY;
                break;
            case this.options.keyBindings.home:
                r = 0,
                s = 0;
                break;
            case this.options.keyBindings.left:
                r += t ? -1 : 5 + this.keyAcceleration >> 0;
                break;
            case this.options.keyBindings.up:
                s += t ? 1 : 5 + this.keyAcceleration >> 0;
                break;
            case this.options.keyBindings.right:
                r -= t ? -1 : 5 + this.keyAcceleration >> 0;
                break;
            case this.options.keyBindings.down:
                s -= t ? 1 : 5 + this.keyAcceleration >> 0;
                break;
            default:
                return
            }
            if (t) {
                this.goToPage(r, s);
                return
            }
            r > 0 ? (r = 0,
            this.keyAcceleration = 0) : r < this.maxScrollX && (r = this.maxScrollX,
            this.keyAcceleration = 0),
            s > 0 ? (s = 0,
            this.keyAcceleration = 0) : s < this.maxScrollY && (s = this.maxScrollY,
            this.keyAcceleration = 0),
            this.scrollTo(r, s, 0),
            this.keyTime = o
        },
        _animate: function(e, t, n, s) {
            function c() {
                var h = i.getTime(), p, d, v;
                if (h >= l) {
                    o.isAnimating = !1,
                    o._translate(e, t),
                    o.resetPosition(o.options.bounceTime) || o._execEvent("scrollEnd");
                    return
                }
                h = (h - f) / n,
                v = s(h),
                p = (e - u) * v + u,
                d = (t - a) * v + a,
                o._translate(p, d),
                o.isAnimating && r(c)
            }
            var o = this
              , u = this.x
              , a = this.y
              , f = i.getTime()
              , l = f + n;
            this.isAnimating = !0,
            c()
        },
        handleEvent: function(e) {
            switch (e.type) {
            case "touchstart":
            case "pointerdown":
            case "MSPointerDown":
            case "mousedown":
                this._start(e);
                break;
            case "touchmove":
            case "pointermove":
            case "MSPointerMove":
            case "mousemove":
                this._move(e);
                break;
            case "touchend":
            case "pointerup":
            case "MSPointerUp":
            case "mouseup":
            case "touchcancel":
            case "pointercancel":
            case "MSPointerCancel":
            case "mousecancel":
                this._end(e);
                break;
            case "orientationchange":
            case "resize":
                this._resize();
                break;
            case "transitionend":
            case "webkitTransitionEnd":
            case "oTransitionEnd":
            case "MSTransitionEnd":
                this._transitionEnd(e);
                break;
            case "wheel":
            case "DOMMouseScroll":
            case "mousewheel":
                this._wheel(e);
                break;
            case "keydown":
                this._key(e);
                break;
            case "click":
                e._constructed || (e.preventDefault(),
                e.stopPropagation())
            }
        }
    },
    u.prototype = {
        handleEvent: function(e) {
            switch (e.type) {
            case "touchstart":
            case "pointerdown":
            case "MSPointerDown":
            case "mousedown":
                this._start(e);
                break;
            case "touchmove":
            case "pointermove":
            case "MSPointerMove":
            case "mousemove":
                this._move(e);
                break;
            case "touchend":
            case "pointerup":
            case "MSPointerUp":
            case "mouseup":
            case "touchcancel":
            case "pointercancel":
            case "MSPointerCancel":
            case "mousecancel":
                this._end(e)
            }
        },
        destroy: function() {
            this.options.interactive && (i.removeEvent(this.indicator, "touchstart", this),
            i.removeEvent(this.indicator, i.prefixPointerEvent("pointerdown"), this),
            i.removeEvent(this.indicator, "mousedown", this),
            i.removeEvent(e, "touchmove", this),
            i.removeEvent(e, i.prefixPointerEvent("pointermove"), this),
            i.removeEvent(e, "mousemove", this),
            i.removeEvent(e, "touchend", this),
            i.removeEvent(e, i.prefixPointerEvent("pointerup"), this),
            i.removeEvent(e, "mouseup", this)),
            this.options.defaultScrollbars && this.wrapper.parentNode.removeChild(this.wrapper)
        },
        _start: function(t) {
            var n = t.touches ? t.touches[0] : t;
            t.preventDefault(),
            t.stopPropagation(),
            this.transitionTime(),
            this.initiated = !0,
            this.moved = !1,
            this.lastPointX = n.pageX,
            this.lastPointY = n.pageY,
            this.startTime = i.getTime(),
            this.options.disableTouch || i.addEvent(e, "touchmove", this),
            this.options.disablePointer || i.addEvent(e, i.prefixPointerEvent("pointermove"), this),
            this.options.disableMouse || i.addEvent(e, "mousemove", this),
            this.scroller._execEvent("beforeScrollStart")
        },
        _move: function(e) {
            var t = e.touches ? e.touches[0] : e, n, r, s, o, u = i.getTime();
            this.moved || this.scroller._execEvent("scrollStart"),
            this.moved = !0,
            n = t.pageX - this.lastPointX,
            this.lastPointX = t.pageX,
            r = t.pageY - this.lastPointY,
            this.lastPointY = t.pageY,
            s = this.x + n,
            o = this.y + r,
            this._pos(s, o),
            e.preventDefault(),
            e.stopPropagation()
        },
        _end: function(t) {
            if (!this.initiated)
                return;
            this.initiated = !1,
            t.preventDefault(),
            t.stopPropagation(),
            i.removeEvent(e, "touchmove", this),
            i.removeEvent(e, i.prefixPointerEvent("pointermove"), this),
            i.removeEvent(e, "mousemove", this);
            if (this.scroller.options.snap) {
                var r = this.scroller._nearestSnap(this.scroller.x, this.scroller.y)
                  , s = this.options.snapSpeed || n.max(n.max(n.min(n.abs(this.scroller.x - r.x), 1e3), n.min(n.abs(this.scroller.y - r.y), 1e3)), 300);
                if (this.scroller.x != r.x || this.scroller.y != r.y)
                    this.scroller.directionX = 0,
                    this.scroller.directionY = 0,
                    this.scroller.currentPage = r,
                    this.scroller.scrollTo(r.x, r.y, s, this.scroller.options.bounceEasing)
            }
            this.moved && this.scroller._execEvent("scrollEnd")
        },
        transitionTime: function(e) {
            e = e || 0,
            this.indicatorStyle[i.style.transitionDuration] = e + "ms",
            !e && i.isBadAndroid && (this.indicatorStyle[i.style.transitionDuration] = "0.001s")
        },
        transitionTimingFunction: function(e) {
            this.indicatorStyle[i.style.transitionTimingFunction] = e
        },
        refresh: function() {
            this.transitionTime(),
            this.options.listenX && !this.options.listenY ? this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? "block" : "none" : this.options.listenY && !this.options.listenX ? this.indicatorStyle.display = this.scroller.hasVerticalScroll ? "block" : "none" : this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none",
            this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ? (i.addClass(this.wrapper, "iScrollBothScrollbars"),
            i.removeClass(this.wrapper, "iScrollLoneScrollbar"),
            this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "8px" : this.wrapper.style.bottom = "8px")) : (i.removeClass(this.wrapper, "iScrollBothScrollbars"),
            i.addClass(this.wrapper, "iScrollLoneScrollbar"),
            this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "2px" : this.wrapper.style.bottom = "2px"));
            var e = this.wrapper.offsetHeight;
            this.options.listenX && (this.wrapperWidth = this.wrapper.clientWidth,
            this.options.resize ? (this.indicatorWidth = n.max(n.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8),
            this.indicatorStyle.width = this.indicatorWidth + "px") : this.indicatorWidth = this.indicator.clientWidth,
            this.maxPosX = this.wrapperWidth - this.indicatorWidth,
            this.options.shrink == "clip" ? (this.minBoundaryX = -this.indicatorWidth + 8,
            this.maxBoundaryX = this.wrapperWidth - 8) : (this.minBoundaryX = 0,
            this.maxBoundaryX = this.maxPosX),
            this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX),
            this.options.listenY && (this.wrapperHeight = this.wrapper.clientHeight,
            this.options.resize ? (this.indicatorHeight = n.max(n.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8),
            this.indicatorStyle.height = this.indicatorHeight + "px") : this.indicatorHeight = this.indicator.clientHeight,
            this.maxPosY = this.wrapperHeight - this.indicatorHeight,
            this.options.shrink == "clip" ? (this.minBoundaryY = -this.indicatorHeight + 8,
            this.maxBoundaryY = this.wrapperHeight - 8) : (this.minBoundaryY = 0,
            this.maxBoundaryY = this.maxPosY),
            this.maxPosY = this.wrapperHeight - this.indicatorHeight,
            this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY),
            this.updatePosition()
        },
        updatePosition: function() {
            var e = this.options.listenX && n.round(this.sizeRatioX * this.scroller.x) || 0
              , t = this.options.listenY && n.round(this.sizeRatioY * this.scroller.y) || 0;
            this.options.ignoreBoundaries || (e < this.minBoundaryX ? (this.options.shrink == "scale" && (this.width = n.max(this.indicatorWidth + e, 8),
            this.indicatorStyle.width = this.width + "px"),
            e = this.minBoundaryX) : e > this.maxBoundaryX ? this.options.shrink == "scale" ? (this.width = n.max(this.indicatorWidth - (e - this.maxPosX), 8),
            this.indicatorStyle.width = this.width + "px",
            e = this.maxPosX + this.indicatorWidth - this.width) : e = this.maxBoundaryX : this.options.shrink == "scale" && this.width != this.indicatorWidth && (this.width = this.indicatorWidth,
            this.indicatorStyle.width = this.width + "px"),
            t < this.minBoundaryY ? (this.options.shrink == "scale" && (this.height = n.max(this.indicatorHeight + t * 3, 8),
            this.indicatorStyle.height = this.height + "px"),
            t = this.minBoundaryY) : t > this.maxBoundaryY ? this.options.shrink == "scale" ? (this.height = n.max(this.indicatorHeight - (t - this.maxPosY) * 3, 8),
            this.indicatorStyle.height = this.height + "px",
            t = this.maxPosY + this.indicatorHeight - this.height) : t = this.maxBoundaryY : this.options.shrink == "scale" && this.height != this.indicatorHeight && (this.height = this.indicatorHeight,
            this.indicatorStyle.height = this.height + "px")),
            this.x = e,
            this.y = t,
            this.scroller.options.useTransform ? this.indicatorStyle[i.style.transform] = "translate(" + e + "px," + t + "px)" + this.scroller.translateZ : (this.indicatorStyle.left = e + "px",
            this.indicatorStyle.top = t + "px")
        },
        _pos: function(e, t) {
            e < 0 ? e = 0 : e > this.maxPosX && (e = this.maxPosX),
            t < 0 ? t = 0 : t > this.maxPosY && (t = this.maxPosY),
            e = this.options.listenX ? n.round(e / this.sizeRatioX) : this.scroller.x,
            t = this.options.listenY ? n.round(t / this.sizeRatioY) : this.scroller.y,
            this.scroller.scrollTo(e, t)
        },
        fade: function(e, t) {
            if (t && !this.visible)
                return;
            clearTimeout(this.fadeTimeout),
            this.fadeTimeout = null;
            var n = e ? 250 : 500
              , r = e ? 0 : 300;
            e = e ? "1" : "0",
            this.wrapperStyle[i.style.transitionDuration] = n + "ms",
            this.fadeTimeout = setTimeout(function(e) {
                this.wrapperStyle.opacity = e,
                this.visible = +e
            }
            .bind(this, e), r)
        }
    },
    s.utils = i,
    typeof module != "undefined" && module.exports ? module.exports = s : e.IScroll = s
}(window, document, Math),
define("iscroll", function() {}),
define("views/signin", ["jquery", "underscore", "backbone", "models/customer", "analytics", "adroll", "twitch-model", "text!templates/signin.html", "drawer", "iscroll"], function(e, t, n, r, i, s, o, u) {
    var a = n.View.extend({
        model: r,
        appName: "Main",
        appId: "main",
        appVersion: "1.0",
        hasWs: 0,
        bannerRand: 0,
        bannerABRand: 0,
        initialize: function(r) {
            this.checkWebSocket(),
            this.bannerRand = Math.random(),
            this.bannerABRand = Math.random(),
            t.bindAll(this, "roomChanged"),
            this.render(),
            this.model.bind("change", this.roomChanged),
            n.modalDialog({
                init: !0
            }),
            i.setApplication(this.appName, this.appId, this.appVersion),
            i.trackScreenView(this.appId + ".login"),
            o.setup(this.onTwitchLogin),
            e(".drawer").drawer(),
            e(".drawer").on("drawer.closed", function() {
                e("#jbg-settings-btn").html('<i class="fa fa-cog fa-2x"></i>'),
                e("#jbg-settings-btn").removeClass("drawer-hamburger-jbg-dark")
            })
        },
        events: {
            "click #button-join": "joinRoom",
            "click .button-help": "goToHelp",
            "click .button-tos": "goToTos",
            "click #jbg_banner": "goToBanner",
            "click #jbg_logo": "goToSite",
            "click .button-tos": "goToTOS",
            "click .twitch-connect": "twitchConnect",
            "click .twitch-logout": "twitchLogout",
            "click .drawer-hamburger-jbg": "toggleDrawer"
        },
        render: function() {
            var r = {
                username: "",
                roomid: "",
                gallerylink: ""
            };
            if (this.model.useStorage) {
                var i = this.model.storage.get("username")
                  , s = this.model.storage.get("roomid")
                  , o = this.model.storage.get("galleries");
                i && (r.username = i),
                s && (r.roomid = s);
                if (o) {
                    var a = ["#FF0000", "#0000FF", "#00FF00", "#B22222", "#FF7F50", "#9ACD32", "#FF4500", "#2E8B57", "#DAA520", "#D2691E", "#5F9EA0", "#1E90FF", "#FF69B4", "#8A2BE2", "#00FF7F"], f = '<li class="drawer-header-jbg">Galleries</li>', l;
                    try {
                        var l = JSON.parse(o)
                    } catch (c) {
                        l = []
                    }
                    var h;
                    for (var p = 0; p < l.length; p++) {
                        var d = l[p]
                          , v = d.url
                          , m = "Gallery";
                        v.indexOf("Quiplash2") != -1 && (m = "Quiplash 2 Gallery"),
                        v.indexOf("Drawful") != -1 && (m = "Drawful 2 Gallery"),
                        v.indexOf("TeeKO") != -1 && (m = "Tee K.O. Gallery"),
                        v.indexOf("TriviaDeath") != -1 && (m = "Trivia Murder Party Gallery");
                        var g = new Date(d.time);
                        m += " " + g.toLocaleDateString();
                        var y = v.charCodeAt(v.length - 2);
                        h = a[y % a.length],
                        f += '<li><a class="drawer-menu-item drawer-menu-item-jbg" href="' + v + '" target="_blank"><i style="color:' + h + ';"class="fa fa-picture-o" aria-hidden="true"></i> &nbsp;' + m + "</a></li>"
                    }
                    r.gallerylink = f
                }
                n.hasHashRoomCode() && (r.roomid = n.getHashRoomCode(),
                this.model.storage.set("roomid", r.roomid))
            }
            var b = t.template(u, r);
            this.$el.html(b),
            this.bannerRand < .25 ? this.bannerABRand > .2 ? document.getElementById("banner-img").src = "images/banner-jpp.png" : this.bannerABRand > .1 ? document.getElementById("banner-img").src = "images/banner-jpp2.png" : document.getElementById("banner-img").src = "images/banner-drawful2.png" : document.getElementById("banner-img").src = "images/banner-jpp3.png",
            r.gallerylink ? (document.getElementById("jbg-galleries-alert").style.display = "block",
            e("#jbg-galleries-alert").delay(5e3).slideUp()) : document.getElementById("jbg-galleries-alert").style.display = "none",
            window.onresize = this.onResize,
            this.onResize();
            try {
                var w = e(".canvas-compatibility")[0];
                r = w.toDataURL("image/png"),
                r = r.replace("data:image/png;base64,", ""),
                r == "data:," && n.modalDialog({
                    type: "error",
                    title: "Error",
                    message: "Drawful is not supported on this browser.  View '?' or HELP to see a list of compatible browsers.",
                    restart: !1
                })
            } catch (E) {
                n.modalDialog({
                    type: "error",
                    title: "Error",
                    message: "Drawful is not supported on this browser.  View '?' or HELP to see a list of compatible browsers.",
                    restart: !1
                })
            }
        },
        toggleDrawer: function() {
            var t = e("#jbg-settings-btn").html();
            t == '<i class="fa fa-close fa-2x"></i>' ? (e("#jbg-settings-btn").html('<i class="fa fa-cog fa-2x"></i>'),
            e("#jbg-settings-btn").removeClass("drawer-hamburger-jbg-dark")) : (e("#jbg-settings-btn").html('<i class="fa fa-close fa-2x"></i>'),
            e("#jbg-settings-btn").addClass("drawer-hamburger-jbg-dark"))
        },
        joinRoom: function() {
            if (this.hasWs == 0)
                return n.modalDialog({
                    type: "error",
                    title: "Error",
                    message: "WebSockets are not supported on your browser."
                }),
                !1;
            i.trackEvent("SignIn", "joinRoom");
            var t = e("#roomcode").val().toUpperCase()
              , r = this.sanitize(e("#username").val().trim().toUpperCase())
              , s = {};
            return o.user !== undefined && (s.twitch = o.user),
            this.model.connect(t, r, s),
            !1
        },
        goToHelp: function() {
            window.open("https://jackboxgames.zendesk.com/entries/57303554-Jackbox-tv-Help-FAQ", "_blank")
        },
        goToTos: function() {
            window.open("http://jackboxgames.com/terms-of-service/", "_blank")
        },
        goToBanner: function() {
            this.bannerRand < .25 ? this.bannerABRand > .2 ? window.open("http://jackboxgames.com/project/jbpp/?utm_source=jackboxtv&utm_medium=banner&utm_campaign=jpp", "_blank") : this.bannerABRand > .1 ? window.open("http://jackboxgames.com/project/jbpp2/?utm_source=jackboxtv&utm_medium=banner&utm_campaign=jpp2", "_blank") : window.open("http://jackboxgames.com/project/drawful2/?utm_source=jackboxtv&utm_medium=banner&utm_campaign=drawful2", "_blank") : window.open("http://jackboxgames.com/project/jbpp3/?utm_source=jackboxtv&utm_medium=banner&utm_campaign=jpp3", "_blank")
        },
        goToSite: function() {
            window.open("http://jackboxgames.com/?utm_source=jackboxtv&utm_medium=logo&utm_campaign=jackboxgames", "_blank")
        },
        goToTOS: function() {
            window.open("http://jackboxgames.com/terms-of-service/", "_blank")
        },
        twitchConnect: function() {
            o.login()
        },
        twitchLogout: function() {
            o.logout(),
            e("#username").val(""),
            e("#username").prop("disabled", !1),
            e("#jbg-settings-btn").html('<i class="fa fa-cog fa-2x"></i>'),
            e("#jbg-settings-btn").removeClass("drawer-hamburger-jbg-dark"),
            e(".drawer").drawer("close")
        },
        onTwitchLogin: function(t) {
            var r = t.name;
            r.length > 12 && (r = r.substr(0, 11),
            r += "…"),
            e("#username").val(r),
            e("#username").prop("disabled", !0),
            n.hasHashRoomCode() && e("#button-join").trigger("click")
        },
        roomChanged: function(e, t, r) {
            e.changed.error && n.modalDialog({
                type: "error",
                title: "Error",
                message: e.changed.error
            })
        },
        onResize: function() {
            var t = e(window).width()
              , n = e(window).height()
              , r = 0
              , i = 0;
            t > 500 ? r = 500 : r = t,
            i = r / 3.1636,
            e("#jbg_logo").css("width", r),
            e("#jbg_logo").attr("width", r),
            e("#jbg_logo").css("height", i),
            e("#jbg_logo").attr("height", i)
        },
        checkWebSocket: function() {
            try {
                websocket = new WebSocket("wss:echo.websocket.org"),
                websocket.close("")
            } catch (e) {
                this.hasWs = 1
            }
        },
        sanitize: function(e) {
            return e.replace(/[^A-Z0-9\u00A1\u0020-\u002F\u00BF-\u00FF\u2026!?*\$\+\-'_ .,]/gi, "").replace(/'/g, "’").trim()
        }
    });
    return a
}),
define("text!templates/modal.html", [], function() {
    return '<!-- Modal -->\n<div class="modal fade" id="modal-dialog" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\n  <div class="modal-dialog">\n    <div class="modal-content">\n      <div class="modal-header">\n        <button type="button" id="close-modal-x" class="close" data-dismiss="modal"><span aria-hidden="true">&#10006;</span><span class="sr-only"></span></button>\n        <h4 class="modal-title" id="myModalLabel"><%= title %></h4>\n      </div>\n      <div class="modal-body">\n        <%= message %>\n      </div>\n      <div class="modal-footer">\n        <button type="button" id="close-modal" class="btn btn-primary pure-button pure-button-primary" data-dismiss="modal">Close</button>\n      </div>\n    </div>\n  </div>\n</div>'
}),
define("views/modal", ["jquery", "underscore", "backbone", "text!templates/modal.html"], function(e, t, n, r) {
    var i = n.View.extend({
        initialize: function(e) {},
        events: {
            "click #close-modal": "closeModal",
            "click #modal-dialog": "closeModal",
            "click #close-modal-x": "closeModal"
        },
        render: function(n) {
            if (n.hasOwnProperty("init") && n.init == 1)
                return;
            var i = t.template(r, n);
            this.$el.html(i),
            e("#modal-dialog").modal(),
            n.restart != undefined && (this.restartOnClose = n.restart)
        },
        closeModal: function(e) {
            this.restartOnClose == 1 && (location.reload(),
            console.log("Modle close-modal clicked"))
        }
    });
    return i
});
