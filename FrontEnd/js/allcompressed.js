if (function (t, e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return e(t)
        } : e(t)
    }("undefined" != typeof window ? window : this, function (f, t) {
        var h = [],
            c = h.slice,
            g = h.concat,
            a = h.push,
            o = h.indexOf,
            i = {},
            e = i.toString,
            m = i.hasOwnProperty,
            v = {},
            n = "1.11.2",
            T = function (t, e) {
                return new T.fn.init(t, e)
            },
            s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            r = /^-ms-/,
            l = /-([\da-z])/gi,
            d = function (t, e) {
                return e.toUpperCase()
            };

        function u(t) {
            var e = t.length,
                i = T.type(t);
            return "function" !== i && !T.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === i || 0 === e || "number" == typeof e && 0 < e && e - 1 in t))
        }
        T.fn = T.prototype = {
            jquery: n,
            constructor: T,
            selector: "",
            length: 0,
            toArray: function () {
                return c.call(this)
            },
            get: function (t) {
                return null != t ? t < 0 ? this[t + this.length] : this[t] : c.call(this)
            },
            pushStack: function (t) {
                var e = T.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            },
            each: function (t, e) {
                return T.each(this, t, e)
            },
            map: function (i) {
                return this.pushStack(T.map(this, function (t, e) {
                    return i.call(t, e, t)
                }))
            },
            slice: function () {
                return this.pushStack(c.apply(this, arguments))
            },
            first: function () {
                return this.eq(0)
            },
            last: function () {
                return this.eq(-1)
            },
            eq: function (t) {
                var e = this.length,
                    i = +t + (t < 0 ? e : 0);
                return this.pushStack(0 <= i && i < e ? [this[i]] : [])
            },
            end: function () {
                return this.prevObject || this.constructor(null)
            },
            push: a,
            sort: h.sort,
            splice: h.splice
        }, T.extend = T.fn.extend = function () {
            var t, e, i, n, o, s, r = arguments[0] || {},
                a = 1,
                l = arguments.length,
                d = !1;
            for ("boolean" == typeof r && (d = r, r = arguments[a] || {}, a++), "object" == typeof r || T.isFunction(r) || (r = {}), a === l && (r = this, a--); a < l; a++)
                if (null != (o = arguments[a]))
                    for (n in o) t = r[n], r !== (i = o[n]) && (d && i && (T.isPlainObject(i) || (e = T.isArray(i))) ? (e ? (e = !1, s = t && T.isArray(t) ? t : []) : s = t && T.isPlainObject(t) ? t : {}, r[n] = T.extend(d, s, i)) : void 0 !== i && (r[n] = i));
            return r
        }, T.extend({
            expando: "jQuery" + (n + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (t) {
                throw new Error(t)
            },
            noop: function () {},
            isFunction: function (t) {
                return "function" === T.type(t)
            },
            isArray: Array.isArray || function (t) {
                return "array" === T.type(t)
            },
            isWindow: function (t) {
                return null != t && t == t.window
            },
            isNumeric: function (t) {
                return !T.isArray(t) && 0 <= t - parseFloat(t) + 1
            },
            isEmptyObject: function (t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            isPlainObject: function (t) {
                var e;
                if (!t || "object" !== T.type(t) || t.nodeType || T.isWindow(t)) return !1;
                try {
                    if (t.constructor && !m.call(t, "constructor") && !m.call(t.constructor.prototype, "isPrototypeOf")) return !1
                } catch (t) {
                    return !1
                }
                if (v.ownLast)
                    for (e in t) return m.call(t, e);
                for (e in t);
                return void 0 === e || m.call(t, e)
            },
            type: function (t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? i[e.call(t)] || "object" : typeof t
            },
            globalEval: function (t) {
                t && T.trim(t) && (f.execScript || function (t) {
                    f.eval.call(f, t)
                })(t)
            },
            camelCase: function (t) {
                return t.replace(r, "ms-").replace(l, d)
            },
            nodeName: function (t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function (t, e, i) {
                var n = 0,
                    o = t.length,
                    s = u(t);
                if (i) {
                    if (s)
                        for (; n < o && !1 !== e.apply(t[n], i); n++);
                    else
                        for (n in t)
                            if (!1 === e.apply(t[n], i)) break
                } else if (s)
                    for (; n < o && !1 !== e.call(t[n], n, t[n]); n++);
                else
                    for (n in t)
                        if (!1 === e.call(t[n], n, t[n])) break;
                return t
            },
            trim: function (t) {
                return null == t ? "" : (t + "").replace(s, "")
            },
            makeArray: function (t, e) {
                var i = e || [];
                return null != t && (u(Object(t)) ? T.merge(i, "string" == typeof t ? [t] : t) : a.call(i, t)), i
            },
            inArray: function (t, e, i) {
                var n;
                if (e) {
                    if (o) return o.call(e, t, i);
                    for (n = e.length, i = i ? i < 0 ? Math.max(0, n + i) : i : 0; i < n; i++)
                        if (i in e && e[i] === t) return i
                }
                return -1
            },
            merge: function (t, e) {
                for (var i = +e.length, n = 0, o = t.length; n < i;) t[o++] = e[n++];
                if (i != i)
                    for (; void 0 !== e[n];) t[o++] = e[n++];
                return t.length = o, t
            },
            grep: function (t, e, i) {
                for (var n = [], o = 0, s = t.length, r = !i; o < s; o++) !e(t[o], o) !== r && n.push(t[o]);
                return n
            },
            map: function (t, e, i) {
                var n, o = 0,
                    s = t.length,
                    r = [];
                if (u(t))
                    for (; o < s; o++) null != (n = e(t[o], o, i)) && r.push(n);
                else
                    for (o in t) null != (n = e(t[o], o, i)) && r.push(n);
                return g.apply([], r)
            },
            guid: 1,
            proxy: function (t, e) {
                var i, n, o;
                return "string" == typeof e && (o = t[e], e = t, t = o), T.isFunction(t) ? (i = c.call(arguments, 2), (n = function () {
                    return t.apply(e || this, i.concat(c.call(arguments)))
                }).guid = t.guid = t.guid || T.guid++, n) : void 0
            },
            now: function () {
                return +new Date
            },
            support: v
        }), T.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
            i["[object " + e + "]"] = e.toLowerCase()
        });
        var p = function (i) {
            var t, f, b, s, n, g, h, m, x, d, c, v, _, o, y, w, r, a, T, C = "sizzle" + 1 * new Date,
                k = i.document,
                S = 0,
                u = 0,
                l = st(),
                p = st(),
                E = st(),
                P = function (t, e) {
                    return t === e && (c = !0), 0
                },
                A = {}.hasOwnProperty,
                e = [],
                N = e.pop,
                O = e.push,
                M = e.push,
                I = e.slice,
                D = function (t, e) {
                    for (var i = 0, n = t.length; i < n; i++)
                        if (t[i] === e) return i;
                    return -1
                },
                $ = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                L = "[\\x20\\t\\r\\n\\f]",
                z = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                R = z.replace("w", "w#"),
                j = "\\[" + L + "*(" + z + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + L + "*\\]",
                H = ":(" + z + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + j + ")*)|.*)\\)|)",
                W = new RegExp(L + "+", "g"),
                F = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
                q = new RegExp("^" + L + "*," + L + "*"),
                X = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
                B = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
                Y = new RegExp(H),
                U = new RegExp("^" + R + "$"),
                V = {
                    ID: new RegExp("^#(" + z + ")"),
                    CLASS: new RegExp("^\\.(" + z + ")"),
                    TAG: new RegExp("^(" + z.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + j),
                    PSEUDO: new RegExp("^" + H),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + $ + ")$", "i"),
                    needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
                },
                Q = /^(?:input|select|textarea|button)$/i,
                Z = /^h\d$/i,
                G = /^[^{]+\{\s*\[native \w/,
                J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                K = /[+~]/,
                tt = /'|\\/g,
                et = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
                it = function (t, e, i) {
                    var n = "0x" + e - 65536;
                    return n != n || i ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
                },
                nt = function () {
                    v()
                };
            try {
                M.apply(e = I.call(k.childNodes), k.childNodes), e[k.childNodes.length].nodeType
            } catch (t) {
                M = {
                    apply: e.length ? function (t, e) {
                        O.apply(t, I.call(e))
                    } : function (t, e) {
                        for (var i = t.length, n = 0; t[i++] = e[n++];);
                        t.length = i - 1
                    }
                }
            }

            function ot(t, e, i, n) {
                var o, s, r, a, l, d, c, h, u, p;
                if ((e ? e.ownerDocument || e : k) !== _ && v(e), i = i || [], a = (e = e || _).nodeType, "string" != typeof t || !t || 1 !== a && 9 !== a && 11 !== a) return i;
                if (!n && y) {
                    if (11 !== a && (o = J.exec(t)))
                        if (r = o[1]) {
                            if (9 === a) {
                                if (!(s = e.getElementById(r)) || !s.parentNode) return i;
                                if (s.id === r) return i.push(s), i
                            } else if (e.ownerDocument && (s = e.ownerDocument.getElementById(r)) && T(e, s) && s.id === r) return i.push(s), i
                        } else {
                            if (o[2]) return M.apply(i, e.getElementsByTagName(t)), i;
                            if ((r = o[3]) && f.getElementsByClassName) return M.apply(i, e.getElementsByClassName(r)), i
                        } if (f.qsa && (!w || !w.test(t))) {
                        if (h = c = C, u = e, p = 1 !== a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                            for (d = g(t), (c = e.getAttribute("id")) ? h = c.replace(tt, "\\$&") : e.setAttribute("id", h), h = "[id='" + h + "'] ", l = d.length; l--;) d[l] = h + gt(d[l]);
                            u = K.test(t) && pt(e.parentNode) || e, p = d.join(",")
                        }
                        if (p) try {
                            return M.apply(i, u.querySelectorAll(p)), i
                        } catch (t) {} finally {
                            c || e.removeAttribute("id")
                        }
                    }
                }
                return m(t.replace(F, "$1"), e, i, n)
            }

            function st() {
                var n = [];
                return function t(e, i) {
                    return n.push(e + " ") > b.cacheLength && delete t[n.shift()], t[e + " "] = i
                }
            }

            function rt(t) {
                return t[C] = !0, t
            }

            function at(t) {
                var e = _.createElement("div");
                try {
                    return !!t(e)
                } catch (t) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function lt(t, e) {
                for (var i = t.split("|"), n = t.length; n--;) b.attrHandle[i[n]] = e
            }

            function dt(t, e) {
                var i = e && t,
                    n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || 1 << 31) - (~t.sourceIndex || 1 << 31);
                if (n) return n;
                if (i)
                    for (; i = i.nextSibling;)
                        if (i === e) return -1;
                return t ? 1 : -1
            }

            function ct(e) {
                return function (t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }

            function ht(i) {
                return function (t) {
                    var e = t.nodeName.toLowerCase();
                    return ("input" === e || "button" === e) && t.type === i
                }
            }

            function ut(r) {
                return rt(function (s) {
                    return s = +s, rt(function (t, e) {
                        for (var i, n = r([], t.length, s), o = n.length; o--;) t[i = n[o]] && (t[i] = !(e[i] = t[i]))
                    })
                })
            }

            function pt(t) {
                return t && void 0 !== t.getElementsByTagName && t
            }
            for (t in f = ot.support = {}, n = ot.isXML = function (t) {
                    var e = t && (t.ownerDocument || t).documentElement;
                    return !!e && "HTML" !== e.nodeName
                }, v = ot.setDocument = function (t) {
                    var e, i, l = t ? t.ownerDocument || t : k;
                    return l !== _ && 9 === l.nodeType && l.documentElement ? (o = (_ = l).documentElement, (i = l.defaultView) && i !== i.top && (i.addEventListener ? i.addEventListener("unload", nt, !1) : i.attachEvent && i.attachEvent("onunload", nt)), y = !n(l), f.attributes = at(function (t) {
                        return t.className = "i", !t.getAttribute("className")
                    }), f.getElementsByTagName = at(function (t) {
                        return t.appendChild(l.createComment("")), !t.getElementsByTagName("*").length
                    }), f.getElementsByClassName = G.test(l.getElementsByClassName), f.getById = at(function (t) {
                        return o.appendChild(t).id = C, !l.getElementsByName || !l.getElementsByName(C).length
                    }), f.getById ? (b.find.ID = function (t, e) {
                        if (void 0 !== e.getElementById && y) {
                            var i = e.getElementById(t);
                            return i && i.parentNode ? [i] : []
                        }
                    }, b.filter.ID = function (t) {
                        var e = t.replace(et, it);
                        return function (t) {
                            return t.getAttribute("id") === e
                        }
                    }) : (delete b.find.ID, b.filter.ID = function (t) {
                        var i = t.replace(et, it);
                        return function (t) {
                            var e = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                            return e && e.value === i
                        }
                    }), b.find.TAG = f.getElementsByTagName ? function (t, e) {
                        return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : f.qsa ? e.querySelectorAll(t) : void 0
                    } : function (t, e) {
                        var i, n = [],
                            o = 0,
                            s = e.getElementsByTagName(t);
                        if ("*" === t) {
                            for (; i = s[o++];) 1 === i.nodeType && n.push(i);
                            return n
                        }
                        return s
                    }, b.find.CLASS = f.getElementsByClassName && function (t, e) {
                        return y ? e.getElementsByClassName(t) : void 0
                    }, r = [], w = [], (f.qsa = G.test(l.querySelectorAll)) && (at(function (t) {
                        o.appendChild(t).innerHTML = "<a id='" + C + "'></a><select id='" + C + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && w.push("[*^$]=" + L + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || w.push("\\[" + L + "*(?:value|" + $ + ")"), t.querySelectorAll("[id~=" + C + "-]").length || w.push("~="), t.querySelectorAll(":checked").length || w.push(":checked"), t.querySelectorAll("a#" + C + "+*").length || w.push(".#.+[+~]")
                    }), at(function (t) {
                        var e = l.createElement("input");
                        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && w.push("name" + L + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || w.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), w.push(",.*:")
                    })), (f.matchesSelector = G.test(a = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && at(function (t) {
                        f.disconnectedMatch = a.call(t, "div"), a.call(t, "[s!='']:x"), r.push("!=", H)
                    }), w = w.length && new RegExp(w.join("|")), r = r.length && new RegExp(r.join("|")), e = G.test(o.compareDocumentPosition), T = e || G.test(o.contains) ? function (t, e) {
                        var i = 9 === t.nodeType ? t.documentElement : t,
                            n = e && e.parentNode;
                        return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                    } : function (t, e) {
                        if (e)
                            for (; e = e.parentNode;)
                                if (e === t) return !0;
                        return !1
                    }, P = e ? function (t, e) {
                        if (t === e) return c = !0, 0;
                        var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                        return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !f.sortDetached && e.compareDocumentPosition(t) === i ? t === l || t.ownerDocument === k && T(k, t) ? -1 : e === l || e.ownerDocument === k && T(k, e) ? 1 : d ? D(d, t) - D(d, e) : 0 : 4 & i ? -1 : 1)
                    } : function (t, e) {
                        if (t === e) return c = !0, 0;
                        var i, n = 0,
                            o = t.parentNode,
                            s = e.parentNode,
                            r = [t],
                            a = [e];
                        if (!o || !s) return t === l ? -1 : e === l ? 1 : o ? -1 : s ? 1 : d ? D(d, t) - D(d, e) : 0;
                        if (o === s) return dt(t, e);
                        for (i = t; i = i.parentNode;) r.unshift(i);
                        for (i = e; i = i.parentNode;) a.unshift(i);
                        for (; r[n] === a[n];) n++;
                        return n ? dt(r[n], a[n]) : r[n] === k ? -1 : a[n] === k ? 1 : 0
                    }, l) : _
                }, ot.matches = function (t, e) {
                    return ot(t, null, null, e)
                }, ot.matchesSelector = function (t, e) {
                    if ((t.ownerDocument || t) !== _ && v(t), e = e.replace(B, "='$1']"), !(!f.matchesSelector || !y || r && r.test(e) || w && w.test(e))) try {
                        var i = a.call(t, e);
                        if (i || f.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                    } catch (t) {}
                    return 0 < ot(e, _, null, [t]).length
                }, ot.contains = function (t, e) {
                    return (t.ownerDocument || t) !== _ && v(t), T(t, e)
                }, ot.attr = function (t, e) {
                    (t.ownerDocument || t) !== _ && v(t);
                    var i = b.attrHandle[e.toLowerCase()],
                        n = i && A.call(b.attrHandle, e.toLowerCase()) ? i(t, e, !y) : void 0;
                    return void 0 !== n ? n : f.attributes || !y ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
                }, ot.error = function (t) {
                    throw new Error("Syntax error, unrecognized expression: " + t)
                }, ot.uniqueSort = function (t) {
                    var e, i = [],
                        n = 0,
                        o = 0;
                    if (c = !f.detectDuplicates, d = !f.sortStable && t.slice(0), t.sort(P), c) {
                        for (; e = t[o++];) e === t[o] && (n = i.push(o));
                        for (; n--;) t.splice(i[n], 1)
                    }
                    return d = null, t
                }, s = ot.getText = function (t) {
                    var e, i = "",
                        n = 0,
                        o = t.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof t.textContent) return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling) i += s(t)
                        } else if (3 === o || 4 === o) return t.nodeValue
                    } else
                        for (; e = t[n++];) i += s(e);
                    return i
                }, (b = ot.selectors = {
                    cacheLength: 50,
                    createPseudo: rt,
                    match: V,
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
                        ATTR: function (t) {
                            return t[1] = t[1].replace(et, it), t[3] = (t[3] || t[4] || t[5] || "").replace(et, it), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                        },
                        CHILD: function (t) {
                            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || ot.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && ot.error(t[0]), t
                        },
                        PSEUDO: function (t) {
                            var e, i = !t[6] && t[2];
                            return V.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && Y.test(i) && (e = g(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function (t) {
                            var e = t.replace(et, it).toLowerCase();
                            return "*" === t ? function () {
                                return !0
                            } : function (t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            }
                        },
                        CLASS: function (t) {
                            var e = l[t + " "];
                            return e || (e = new RegExp("(^|" + L + ")" + t + "(" + L + "|$)")) && l(t, function (t) {
                                return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                            })
                        },
                        ATTR: function (i, n, o) {
                            return function (t) {
                                var e = ot.attr(t, i);
                                return null == e ? "!=" === n : !n || (e += "", "=" === n ? e === o : "!=" === n ? e !== o : "^=" === n ? o && 0 === e.indexOf(o) : "*=" === n ? o && -1 < e.indexOf(o) : "$=" === n ? o && e.slice(-o.length) === o : "~=" === n ? -1 < (" " + e.replace(W, " ") + " ").indexOf(o) : "|=" === n && (e === o || e.slice(0, o.length + 1) === o + "-"))
                            }
                        },
                        CHILD: function (p, t, e, f, g) {
                            var m = "nth" !== p.slice(0, 3),
                                v = "last" !== p.slice(-4),
                                y = "of-type" === t;
                            return 1 === f && 0 === g ? function (t) {
                                return !!t.parentNode
                            } : function (t, e, i) {
                                var n, o, s, r, a, l, d = m !== v ? "nextSibling" : "previousSibling",
                                    c = t.parentNode,
                                    h = y && t.nodeName.toLowerCase(),
                                    u = !i && !y;
                                if (c) {
                                    if (m) {
                                        for (; d;) {
                                            for (s = t; s = s[d];)
                                                if (y ? s.nodeName.toLowerCase() === h : 1 === s.nodeType) return !1;
                                            l = d = "only" === p && !l && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (l = [v ? c.firstChild : c.lastChild], v && u) {
                                        for (a = (n = (o = c[C] || (c[C] = {}))[p] || [])[0] === S && n[1], r = n[0] === S && n[2], s = a && c.childNodes[a]; s = ++a && s && s[d] || (r = a = 0) || l.pop();)
                                            if (1 === s.nodeType && ++r && s === t) {
                                                o[p] = [S, a, r];
                                                break
                                            }
                                    } else if (u && (n = (t[C] || (t[C] = {}))[p]) && n[0] === S) r = n[1];
                                    else
                                        for (;
                                            (s = ++a && s && s[d] || (r = a = 0) || l.pop()) && ((y ? s.nodeName.toLowerCase() !== h : 1 !== s.nodeType) || !++r || (u && ((s[C] || (s[C] = {}))[p] = [S, r]), s !== t)););
                                    return (r -= g) === f || r % f == 0 && 0 <= r / f
                                }
                            }
                        },
                        PSEUDO: function (t, s) {
                            var e, r = b.pseudos[t] || b.setFilters[t.toLowerCase()] || ot.error("unsupported pseudo: " + t);
                            return r[C] ? r(s) : 1 < r.length ? (e = [t, t, "", s], b.setFilters.hasOwnProperty(t.toLowerCase()) ? rt(function (t, e) {
                                for (var i, n = r(t, s), o = n.length; o--;) t[i = D(t, n[o])] = !(e[i] = n[o])
                            }) : function (t) {
                                return r(t, 0, e)
                            }) : r
                        }
                    },
                    pseudos: {
                        not: rt(function (t) {
                            var n = [],
                                o = [],
                                a = h(t.replace(F, "$1"));
                            return a[C] ? rt(function (t, e, i, n) {
                                for (var o, s = a(t, null, n, []), r = t.length; r--;)(o = s[r]) && (t[r] = !(e[r] = o))
                            }) : function (t, e, i) {
                                return n[0] = t, a(n, null, i, o), n[0] = null, !o.pop()
                            }
                        }),
                        has: rt(function (e) {
                            return function (t) {
                                return 0 < ot(e, t).length
                            }
                        }),
                        contains: rt(function (e) {
                            return e = e.replace(et, it),
                                function (t) {
                                    return -1 < (t.textContent || t.innerText || s(t)).indexOf(e)
                                }
                        }),
                        lang: rt(function (i) {
                            return U.test(i || "") || ot.error("unsupported lang: " + i), i = i.replace(et, it).toLowerCase(),
                                function (t) {
                                    var e;
                                    do {
                                        if (e = y ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (e = e.toLowerCase()) === i || 0 === e.indexOf(i + "-")
                                    } while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        }),
                        target: function (t) {
                            var e = i.location && i.location.hash;
                            return e && e.slice(1) === t.id
                        },
                        root: function (t) {
                            return t === o
                        },
                        focus: function (t) {
                            return t === _.activeElement && (!_.hasFocus || _.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                        },
                        enabled: function (t) {
                            return !1 === t.disabled
                        },
                        disabled: function (t) {
                            return !0 === t.disabled
                        },
                        checked: function (t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && !!t.checked || "option" === e && !!t.selected
                        },
                        selected: function (t) {
                            return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                        },
                        empty: function (t) {
                            for (t = t.firstChild; t; t = t.nextSibling)
                                if (t.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function (t) {
                            return !b.pseudos.empty(t)
                        },
                        header: function (t) {
                            return Z.test(t.nodeName)
                        },
                        input: function (t) {
                            return Q.test(t.nodeName)
                        },
                        button: function (t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && "button" === t.type || "button" === e
                        },
                        text: function (t) {
                            var e;
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                        },
                        first: ut(function () {
                            return [0]
                        }),
                        last: ut(function (t, e) {
                            return [e - 1]
                        }),
                        eq: ut(function (t, e, i) {
                            return [i < 0 ? i + e : i]
                        }),
                        even: ut(function (t, e) {
                            for (var i = 0; i < e; i += 2) t.push(i);
                            return t
                        }),
                        odd: ut(function (t, e) {
                            for (var i = 1; i < e; i += 2) t.push(i);
                            return t
                        }),
                        lt: ut(function (t, e, i) {
                            for (var n = i < 0 ? i + e : i; 0 <= --n;) t.push(n);
                            return t
                        }),
                        gt: ut(function (t, e, i) {
                            for (var n = i < 0 ? i + e : i; ++n < e;) t.push(n);
                            return t
                        })
                    }
                }).pseudos.nth = b.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) b.pseudos[t] = ct(t);
            for (t in {
                    submit: !0,
                    reset: !0
                }) b.pseudos[t] = ht(t);

            function ft() {}

            function gt(t) {
                for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
                return n
            }

            function mt(r, t, e) {
                var a = t.dir,
                    l = e && "parentNode" === a,
                    d = u++;
                return t.first ? function (t, e, i) {
                    for (; t = t[a];)
                        if (1 === t.nodeType || l) return r(t, e, i)
                } : function (t, e, i) {
                    var n, o, s = [S, d];
                    if (i) {
                        for (; t = t[a];)
                            if ((1 === t.nodeType || l) && r(t, e, i)) return !0
                    } else
                        for (; t = t[a];)
                            if (1 === t.nodeType || l) {
                                if ((n = (o = t[C] || (t[C] = {}))[a]) && n[0] === S && n[1] === d) return s[2] = n[2];
                                if ((o[a] = s)[2] = r(t, e, i)) return !0
                            }
                }
            }

            function vt(o) {
                return 1 < o.length ? function (t, e, i) {
                    for (var n = o.length; n--;)
                        if (!o[n](t, e, i)) return !1;
                    return !0
                } : o[0]
            }

            function yt(t, e, i, n, o) {
                for (var s, r = [], a = 0, l = t.length, d = null != e; a < l; a++)(s = t[a]) && (!i || i(s, n, o)) && (r.push(s), d && e.push(a));
                return r
            }

            function wt(p, f, g, m, v, t) {
                return m && !m[C] && (m = wt(m)), v && !v[C] && (v = wt(v, t)), rt(function (t, e, i, n) {
                    var o, s, r, a = [],
                        l = [],
                        d = e.length,
                        c = t || function (t, e, i) {
                            for (var n = 0, o = e.length; n < o; n++) ot(t, e[n], i);
                            return i
                        }(f || "*", i.nodeType ? [i] : i, []),
                        h = !p || !t && f ? c : yt(c, a, p, i, n),
                        u = g ? v || (t ? p : d || m) ? [] : e : h;
                    if (g && g(h, u, i, n), m)
                        for (o = yt(u, l), m(o, [], i, n), s = o.length; s--;)(r = o[s]) && (u[l[s]] = !(h[l[s]] = r));
                    if (t) {
                        if (v || p) {
                            if (v) {
                                for (o = [], s = u.length; s--;)(r = u[s]) && o.push(h[s] = r);
                                v(null, u = [], o, n)
                            }
                            for (s = u.length; s--;)(r = u[s]) && -1 < (o = v ? D(t, r) : a[s]) && (t[o] = !(e[o] = r))
                        }
                    } else u = yt(u === e ? u.splice(d, u.length) : u), v ? v(null, e, u, n) : M.apply(e, u)
                })
            }

            function bt(t) {
                for (var o, e, i, n = t.length, s = b.relative[t[0].type], r = s || b.relative[" "], a = s ? 1 : 0, l = mt(function (t) {
                        return t === o
                    }, r, !0), d = mt(function (t) {
                        return -1 < D(o, t)
                    }, r, !0), c = [function (t, e, i) {
                        var n = !s && (i || e !== x) || ((o = e).nodeType ? l(t, e, i) : d(t, e, i));
                        return o = null, n
                    }]; a < n; a++)
                    if (e = b.relative[t[a].type]) c = [mt(vt(c), e)];
                    else {
                        if ((e = b.filter[t[a].type].apply(null, t[a].matches))[C]) {
                            for (i = ++a; i < n && !b.relative[t[i].type]; i++);
                            return wt(1 < a && vt(c), 1 < a && gt(t.slice(0, a - 1).concat({
                                value: " " === t[a - 2].type ? "*" : ""
                            })).replace(F, "$1"), e, a < i && bt(t.slice(a, i)), i < n && bt(t = t.slice(i)), i < n && gt(t))
                        }
                        c.push(e)
                    } return vt(c)
            }
            return ft.prototype = b.filters = b.pseudos, b.setFilters = new ft, g = ot.tokenize = function (t, e) {
                var i, n, o, s, r, a, l, d = p[t + " "];
                if (d) return e ? 0 : d.slice(0);
                for (r = t, a = [], l = b.preFilter; r;) {
                    for (s in (!i || (n = q.exec(r))) && (n && (r = r.slice(n[0].length) || r), a.push(o = [])), i = !1, (n = X.exec(r)) && (i = n.shift(), o.push({
                            value: i,
                            type: n[0].replace(F, " ")
                        }), r = r.slice(i.length)), b.filter) !(n = V[s].exec(r)) || l[s] && !(n = l[s](n)) || (i = n.shift(), o.push({
                        value: i,
                        type: s,
                        matches: n
                    }), r = r.slice(i.length));
                    if (!i) break
                }
                return e ? r.length : r ? ot.error(t) : p(t, a).slice(0)
            }, h = ot.compile = function (t, e) {
                var i, m, v, y, w, n, o = [],
                    s = [],
                    r = E[t + " "];
                if (!r) {
                    for (e || (e = g(t)), i = e.length; i--;)(r = bt(e[i]))[C] ? o.push(r) : s.push(r);
                    (r = E(t, (m = s, y = 0 < (v = o).length, w = 0 < m.length, n = function (t, e, i, n, o) {
                        var s, r, a, l = 0,
                            d = "0",
                            c = t && [],
                            h = [],
                            u = x,
                            p = t || w && b.find.TAG("*", o),
                            f = S += null == u ? 1 : Math.random() || .1,
                            g = p.length;
                        for (o && (x = e !== _ && e); d !== g && null != (s = p[d]); d++) {
                            if (w && s) {
                                for (r = 0; a = m[r++];)
                                    if (a(s, e, i)) {
                                        n.push(s);
                                        break
                                    } o && (S = f)
                            }
                            y && ((s = !a && s) && l--, t && c.push(s))
                        }
                        if (l += d, y && d !== l) {
                            for (r = 0; a = v[r++];) a(c, h, e, i);
                            if (t) {
                                if (0 < l)
                                    for (; d--;) c[d] || h[d] || (h[d] = N.call(n));
                                h = yt(h)
                            }
                            M.apply(n, h), o && !t && 0 < h.length && 1 < l + v.length && ot.uniqueSort(n)
                        }
                        return o && (S = f, x = u), c
                    }, y ? rt(n) : n))).selector = t
                }
                return r
            }, m = ot.select = function (t, e, i, n) {
                var o, s, r, a, l, d = "function" == typeof t && t,
                    c = !n && g(t = d.selector || t);
                if (i = i || [], 1 === c.length) {
                    if (2 < (s = c[0] = c[0].slice(0)).length && "ID" === (r = s[0]).type && f.getById && 9 === e.nodeType && y && b.relative[s[1].type]) {
                        if (!(e = (b.find.ID(r.matches[0].replace(et, it), e) || [])[0])) return i;
                        d && (e = e.parentNode), t = t.slice(s.shift().value.length)
                    }
                    for (o = V.needsContext.test(t) ? 0 : s.length; o-- && (r = s[o], !b.relative[a = r.type]);)
                        if ((l = b.find[a]) && (n = l(r.matches[0].replace(et, it), K.test(s[0].type) && pt(e.parentNode) || e))) {
                            if (s.splice(o, 1), !(t = n.length && gt(s))) return M.apply(i, n), i;
                            break
                        }
                }
                return (d || h(t, c))(n, e, !y, i, K.test(t) && pt(e.parentNode) || e), i
            }, f.sortStable = C.split("").sort(P).join("") === C, f.detectDuplicates = !!c, v(), f.sortDetached = at(function (t) {
                return 1 & t.compareDocumentPosition(_.createElement("div"))
            }), at(function (t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || lt("type|href|height|width", function (t, e, i) {
                return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), f.attributes && at(function (t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || lt("value", function (t, e, i) {
                return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
            }), at(function (t) {
                return null == t.getAttribute("disabled")
            }) || lt($, function (t, e, i) {
                var n;
                return i ? void 0 : !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }), ot
        }(f);
        T.find = p, T.expr = p.selectors, T.expr[":"] = T.expr.pseudos, T.unique = p.uniqueSort, T.text = p.getText, T.isXMLDoc = p.isXML, T.contains = p.contains;
        var y = T.expr.match.needsContext,
            w = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            b = /^.[^:#\[\.,]*$/;

        function x(t, i, n) {
            if (T.isFunction(i)) return T.grep(t, function (t, e) {
                return !!i.call(t, e, t) !== n
            });
            if (i.nodeType) return T.grep(t, function (t) {
                return t === i !== n
            });
            if ("string" == typeof i) {
                if (b.test(i)) return T.filter(i, t, n);
                i = T.filter(i, t)
            }
            return T.grep(t, function (t) {
                return 0 <= T.inArray(t, i) !== n
            })
        }
        T.filter = function (t, e, i) {
            var n = e[0];
            return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? T.find.matchesSelector(n, t) ? [n] : [] : T.find.matches(t, T.grep(e, function (t) {
                return 1 === t.nodeType
            }))
        }, T.fn.extend({
            find: function (t) {
                var e, i = [],
                    n = this,
                    o = n.length;
                if ("string" != typeof t) return this.pushStack(T(t).filter(function () {
                    for (e = 0; e < o; e++)
                        if (T.contains(n[e], this)) return !0
                }));
                for (e = 0; e < o; e++) T.find(t, n[e], i);
                return (i = this.pushStack(1 < o ? T.unique(i) : i)).selector = this.selector ? this.selector + " " + t : t, i
            },
            filter: function (t) {
                return this.pushStack(x(this, t || [], !1))
            },
            not: function (t) {
                return this.pushStack(x(this, t || [], !0))
            },
            is: function (t) {
                return !!x(this, "string" == typeof t && y.test(t) ? T(t) : t || [], !1).length
            }
        });
        var _, C = f.document,
            k = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
        (T.fn.init = function (t, e) {
            var i, n;
            if (!t) return this;
            if ("string" == typeof t) {
                if (!(i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && 3 <= t.length ? [null, t, null] : k.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || _).find(t) : this.constructor(e).find(t);
                if (i[1]) {
                    if (e = e instanceof T ? e[0] : e, T.merge(this, T.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : C, !0)), w.test(i[1]) && T.isPlainObject(e))
                        for (i in e) T.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                    return this
                }
                if ((n = C.getElementById(i[2])) && n.parentNode) {
                    if (n.id !== i[2]) return _.find(t);
                    this.length = 1, this[0] = n
                }
                return this.context = C, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : T.isFunction(t) ? void 0 !== _.ready ? _.ready(t) : t(T) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), T.makeArray(t, this))
        }).prototype = T.fn, _ = T(C);
        var S = /^(?:parents|prev(?:Until|All))/,
            E = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };

        function P(t, e) {
            for (;
                (t = t[e]) && 1 !== t.nodeType;);
            return t
        }
        T.extend({
            dir: function (t, e, i) {
                for (var n = [], o = t[e]; o && 9 !== o.nodeType && (void 0 === i || 1 !== o.nodeType || !T(o).is(i));) 1 === o.nodeType && n.push(o), o = o[e];
                return n
            },
            sibling: function (t, e) {
                for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
                return i
            }
        }), T.fn.extend({
            has: function (t) {
                var e, i = T(t, this),
                    n = i.length;
                return this.filter(function () {
                    for (e = 0; e < n; e++)
                        if (T.contains(this, i[e])) return !0
                })
            },
            closest: function (t, e) {
                for (var i, n = 0, o = this.length, s = [], r = y.test(t) || "string" != typeof t ? T(t, e || this.context) : 0; n < o; n++)
                    for (i = this[n]; i && i !== e; i = i.parentNode)
                        if (i.nodeType < 11 && (r ? -1 < r.index(i) : 1 === i.nodeType && T.find.matchesSelector(i, t))) {
                            s.push(i);
                            break
                        } return this.pushStack(1 < s.length ? T.unique(s) : s)
            },
            index: function (t) {
                return t ? "string" == typeof t ? T.inArray(this[0], T(t)) : T.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function (t, e) {
                return this.pushStack(T.unique(T.merge(this.get(), T(t, e))))
            },
            addBack: function (t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), T.each({
            parent: function (t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function (t) {
                return T.dir(t, "parentNode")
            },
            parentsUntil: function (t, e, i) {
                return T.dir(t, "parentNode", i)
            },
            next: function (t) {
                return P(t, "nextSibling")
            },
            prev: function (t) {
                return P(t, "previousSibling")
            },
            nextAll: function (t) {
                return T.dir(t, "nextSibling")
            },
            prevAll: function (t) {
                return T.dir(t, "previousSibling")
            },
            nextUntil: function (t, e, i) {
                return T.dir(t, "nextSibling", i)
            },
            prevUntil: function (t, e, i) {
                return T.dir(t, "previousSibling", i)
            },
            siblings: function (t) {
                return T.sibling((t.parentNode || {}).firstChild, t)
            },
            children: function (t) {
                return T.sibling(t.firstChild)
            },
            contents: function (t) {
                return T.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : T.merge([], t.childNodes)
            }
        }, function (n, o) {
            T.fn[n] = function (t, e) {
                var i = T.map(this, o, t);
                return "Until" !== n.slice(-5) && (e = t), e && "string" == typeof e && (i = T.filter(e, i)), 1 < this.length && (E[n] || (i = T.unique(i)), S.test(n) && (i = i.reverse())), this.pushStack(i)
            }
        });
        var A, N = /\S+/g,
            O = {};

        function M() {
            C.addEventListener ? (C.removeEventListener("DOMContentLoaded", I, !1), f.removeEventListener("load", I, !1)) : (C.detachEvent("onreadystatechange", I), f.detachEvent("onload", I))
        }

        function I() {
            (C.addEventListener || "load" === event.type || "complete" === C.readyState) && (M(), T.ready())
        }
        T.Callbacks = function (o) {
            var t, i;
            o = "string" == typeof o ? O[o] || (i = O[t = o] = {}, T.each(t.match(N) || [], function (t, e) {
                i[e] = !0
            }), i) : T.extend({}, o);
            var n, e, s, r, a, l, d = [],
                c = !o.once && [],
                h = function (t) {
                    for (e = o.memory && t, s = !0, a = l || 0, l = 0, r = d.length, n = !0; d && a < r; a++)
                        if (!1 === d[a].apply(t[0], t[1]) && o.stopOnFalse) {
                            e = !1;
                            break
                        } n = !1, d && (c ? c.length && h(c.shift()) : e ? d = [] : u.disable())
                },
                u = {
                    add: function () {
                        if (d) {
                            var t = d.length;
                            ! function n(t) {
                                T.each(t, function (t, e) {
                                    var i = T.type(e);
                                    "function" === i ? o.unique && u.has(e) || d.push(e) : e && e.length && "string" !== i && n(e)
                                })
                            }(arguments), n ? r = d.length : e && (l = t, h(e))
                        }
                        return this
                    },
                    remove: function () {
                        return d && T.each(arguments, function (t, e) {
                            for (var i; - 1 < (i = T.inArray(e, d, i));) d.splice(i, 1), n && (i <= r && r--, i <= a && a--)
                        }), this
                    },
                    has: function (t) {
                        return t ? -1 < T.inArray(t, d) : !(!d || !d.length)
                    },
                    empty: function () {
                        return d = [], r = 0, this
                    },
                    disable: function () {
                        return d = c = e = void 0, this
                    },
                    disabled: function () {
                        return !d
                    },
                    lock: function () {
                        return c = void 0, e || u.disable(), this
                    },
                    locked: function () {
                        return !c
                    },
                    fireWith: function (t, e) {
                        return !d || s && !c || (e = [t, (e = e || []).slice ? e.slice() : e], n ? c.push(e) : h(e)), this
                    },
                    fire: function () {
                        return u.fireWith(this, arguments), this
                    },
                    fired: function () {
                        return !!s
                    }
                };
            return u
        }, T.extend({
            Deferred: function (t) {
                var s = [
                        ["resolve", "done", T.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", T.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", T.Callbacks("memory")]
                    ],
                    o = "pending",
                    r = {
                        state: function () {
                            return o
                        },
                        always: function () {
                            return a.done(arguments).fail(arguments), this
                        },
                        then: function () {
                            var o = arguments;
                            return T.Deferred(function (n) {
                                T.each(s, function (t, e) {
                                    var i = T.isFunction(o[t]) && o[t];
                                    a[e[1]](function () {
                                        var t = i && i.apply(this, arguments);
                                        t && T.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[e[0] + "With"](this === r ? n.promise() : this, i ? [t] : arguments)
                                    })
                                }), o = null
                            }).promise()
                        },
                        promise: function (t) {
                            return null != t ? T.extend(t, r) : r
                        }
                    },
                    a = {};
                return r.pipe = r.then, T.each(s, function (t, e) {
                    var i = e[2],
                        n = e[3];
                    r[e[1]] = i.add, n && i.add(function () {
                        o = n
                    }, s[1 ^ t][2].disable, s[2][2].lock), a[e[0]] = function () {
                        return a[e[0] + "With"](this === a ? r : this, arguments), this
                    }, a[e[0] + "With"] = i.fireWith
                }), r.promise(a), t && t.call(a, a), a
            },
            when: function (t) {
                var o, e, i, n = 0,
                    s = c.call(arguments),
                    r = s.length,
                    a = 1 !== r || t && T.isFunction(t.promise) ? r : 0,
                    l = 1 === a ? t : T.Deferred(),
                    d = function (e, i, n) {
                        return function (t) {
                            i[e] = this, n[e] = 1 < arguments.length ? c.call(arguments) : t, n === o ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                        }
                    };
                if (1 < r)
                    for (o = new Array(r), e = new Array(r), i = new Array(r); n < r; n++) s[n] && T.isFunction(s[n].promise) ? s[n].promise().done(d(n, i, s)).fail(l.reject).progress(d(n, e, o)) : --a;
                return a || l.resolveWith(i, s), l.promise()
            }
        }), T.fn.ready = function (t) {
            return T.ready.promise().done(t), this
        }, T.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function (t) {
                t ? T.readyWait++ : T.ready(!0)
            },
            ready: function (t) {
                if (!0 === t ? !--T.readyWait : !T.isReady) {
                    if (!C.body) return setTimeout(T.ready);
                    (T.isReady = !0) !== t && 0 < --T.readyWait || (A.resolveWith(C, [T]), T.fn.triggerHandler && (T(C).triggerHandler("ready"), T(C).off("ready")))
                }
            }
        }), T.ready.promise = function (t) {
            if (!A)
                if (A = T.Deferred(), "complete" === C.readyState) setTimeout(T.ready);
                else if (C.addEventListener) C.addEventListener("DOMContentLoaded", I, !1), f.addEventListener("load", I, !1);
            else {
                C.attachEvent("onreadystatechange", I), f.attachEvent("onload", I);
                var i = !1;
                try {
                    i = null == f.frameElement && C.documentElement
                } catch (t) {}
                i && i.doScroll && function e() {
                    if (!T.isReady) {
                        try {
                            i.doScroll("left")
                        } catch (t) {
                            return setTimeout(e, 50)
                        }
                        M(), T.ready()
                    }
                }()
            }
            return A.promise(t)
        };
        var D, $ = "undefined";
        for (D in T(v)) break;
        v.ownLast = "0" !== D, v.inlineBlockNeedsLayout = !1, T(function () {
                var t, e, i, n;
                (i = C.getElementsByTagName("body")[0]) && i.style && (e = C.createElement("div"), (n = C.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), typeof e.style.zoom !== $ && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", v.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (i.style.zoom = 1)), i.removeChild(n))
            }),
            function () {
                var t = C.createElement("div");
                if (null == v.deleteExpando) {
                    v.deleteExpando = !0;
                    try {
                        delete t.test
                    } catch (t) {
                        v.deleteExpando = !1
                    }
                }
                t = null
            }(), T.acceptData = function (t) {
                var e = T.noData[(t.nodeName + " ").toLowerCase()],
                    i = +t.nodeType || 1;
                return (1 === i || 9 === i) && (!e || !0 !== e && t.getAttribute("classid") === e)
            };
        var L = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            z = /([A-Z])/g;

        function R(t, e, i) {
            if (void 0 === i && 1 === t.nodeType) {
                var n = "data-" + e.replace(z, "-$1").toLowerCase();
                if ("string" == typeof (i = t.getAttribute(n))) {
                    try {
                        i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : L.test(i) ? T.parseJSON(i) : i)
                    } catch (t) {}
                    T.data(t, e, i)
                } else i = void 0
            }
            return i
        }

        function j(t) {
            var e;
            for (e in t)
                if (("data" !== e || !T.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
            return !0
        }

        function H(t, e, i, n) {
            if (T.acceptData(t)) {
                var o, s, r = T.expando,
                    a = t.nodeType,
                    l = a ? T.cache : t,
                    d = a ? t[r] : t[r] && r;
                if (d && l[d] && (n || l[d].data) || void 0 !== i || "string" != typeof e) return d || (d = a ? t[r] = h.pop() || T.guid++ : r), l[d] || (l[d] = a ? {} : {
                    toJSON: T.noop
                }), ("object" == typeof e || "function" == typeof e) && (n ? l[d] = T.extend(l[d], e) : l[d].data = T.extend(l[d].data, e)), s = l[d], n || (s.data || (s.data = {}), s = s.data), void 0 !== i && (s[T.camelCase(e)] = i), "string" == typeof e ? null == (o = s[e]) && (o = s[T.camelCase(e)]) : o = s, o
            }
        }

        function W(t, e, i) {
            if (T.acceptData(t)) {
                var n, o, s = t.nodeType,
                    r = s ? T.cache : t,
                    a = s ? t[T.expando] : T.expando;
                if (r[a]) {
                    if (e && (n = i ? r[a] : r[a].data)) {
                        T.isArray(e) ? e = e.concat(T.map(e, T.camelCase)) : e in n ? e = [e] : e = (e = T.camelCase(e)) in n ? [e] : e.split(" "), o = e.length;
                        for (; o--;) delete n[e[o]];
                        if (i ? !j(n) : !T.isEmptyObject(n)) return
                    }(i || (delete r[a].data, j(r[a]))) && (s ? T.cleanData([t], !0) : v.deleteExpando || r != r.window ? delete r[a] : r[a] = null)
                }
            }
        }
        T.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function (t) {
                return !!(t = t.nodeType ? T.cache[t[T.expando]] : t[T.expando]) && !j(t)
            },
            data: function (t, e, i) {
                return H(t, e, i)
            },
            removeData: function (t, e) {
                return W(t, e)
            },
            _data: function (t, e, i) {
                return H(t, e, i, !0)
            },
            _removeData: function (t, e) {
                return W(t, e, !0)
            }
        }), T.fn.extend({
            data: function (t, e) {
                var i, n, o, s = this[0],
                    r = s && s.attributes;
                if (void 0 === t) {
                    if (this.length && (o = T.data(s), 1 === s.nodeType && !T._data(s, "parsedAttrs"))) {
                        for (i = r.length; i--;) r[i] && (0 === (n = r[i].name).indexOf("data-") && R(s, n = T.camelCase(n.slice(5)), o[n]));
                        T._data(s, "parsedAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof t ? this.each(function () {
                    T.data(this, t)
                }) : 1 < arguments.length ? this.each(function () {
                    T.data(this, t, e)
                }) : s ? R(s, t, T.data(s, t)) : void 0
            },
            removeData: function (t) {
                return this.each(function () {
                    T.removeData(this, t)
                })
            }
        }), T.extend({
            queue: function (t, e, i) {
                var n;
                return t ? (e = (e || "fx") + "queue", n = T._data(t, e), i && (!n || T.isArray(i) ? n = T._data(t, e, T.makeArray(i)) : n.push(i)), n || []) : void 0
            },
            dequeue: function (t, e) {
                e = e || "fx";
                var i = T.queue(t, e),
                    n = i.length,
                    o = i.shift(),
                    s = T._queueHooks(t, e);
                "inprogress" === o && (o = i.shift(), n--), o && ("fx" === e && i.unshift("inprogress"), delete s.stop, o.call(t, function () {
                    T.dequeue(t, e)
                }, s)), !n && s && s.empty.fire()
            },
            _queueHooks: function (t, e) {
                var i = e + "queueHooks";
                return T._data(t, i) || T._data(t, i, {
                    empty: T.Callbacks("once memory").add(function () {
                        T._removeData(t, e + "queue"), T._removeData(t, i)
                    })
                })
            }
        }), T.fn.extend({
            queue: function (e, i) {
                var t = 2;
                return "string" != typeof e && (i = e, e = "fx", t--), arguments.length < t ? T.queue(this[0], e) : void 0 === i ? this : this.each(function () {
                    var t = T.queue(this, e, i);
                    T._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && T.dequeue(this, e)
                })
            },
            dequeue: function (t) {
                return this.each(function () {
                    T.dequeue(this, t)
                })
            },
            clearQueue: function (t) {
                return this.queue(t || "fx", [])
            },
            promise: function (t, e) {
                var i, n = 1,
                    o = T.Deferred(),
                    s = this,
                    r = this.length,
                    a = function () {
                        --n || o.resolveWith(s, [s])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; r--;)(i = T._data(s[r], t + "queueHooks")) && i.empty && (n++, i.empty.add(a));
                return a(), o.promise(e)
            }
        });
        var F = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            q = ["Top", "Right", "Bottom", "Left"],
            X = function (t, e) {
                return t = e || t, "none" === T.css(t, "display") || !T.contains(t.ownerDocument, t)
            },
            B = T.access = function (t, e, i, n, o, s, r) {
                var a = 0,
                    l = t.length,
                    d = null == i;
                if ("object" === T.type(i))
                    for (a in o = !0, i) T.access(t, e, a, i[a], !0, s, r);
                else if (void 0 !== n && (o = !0, T.isFunction(n) || (r = !0), d && (r ? (e.call(t, n), e = null) : (d = e, e = function (t, e, i) {
                        return d.call(T(t), i)
                    })), e))
                    for (; a < l; a++) e(t[a], i, r ? n : n.call(t[a], a, e(t[a], i)));
                return o ? t : d ? e.call(t) : l ? e(t[0], i) : s
            },
            Y = /^(?:checkbox|radio)$/i;
        ! function () {
            var t = C.createElement("input"),
                e = C.createElement("div"),
                i = C.createDocumentFragment();
            if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", v.leadingWhitespace = 3 === e.firstChild.nodeType, v.tbody = !e.getElementsByTagName("tbody").length, v.htmlSerialize = !!e.getElementsByTagName("link").length, v.html5Clone = "<:nav></:nav>" !== C.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, i.appendChild(t), v.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, i.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", v.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, v.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function () {
                    v.noCloneEvent = !1
                }), e.cloneNode(!0).click()), null == v.deleteExpando) {
                v.deleteExpando = !0;
                try {
                    delete e.test
                } catch (t) {
                    v.deleteExpando = !1
                }
            }
        }(),
        function () {
            var t, e, i = C.createElement("div");
            for (t in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) e = "on" + t, (v[t + "Bubbles"] = e in f) || (i.setAttribute(e, "t"), v[t + "Bubbles"] = !1 === i.attributes[e].expando);
            i = null
        }();
        var U = /^(?:input|select|textarea)$/i,
            V = /^key/,
            Q = /^(?:mouse|pointer|contextmenu)|click/,
            Z = /^(?:focusinfocus|focusoutblur)$/,
            G = /^([^.]*)(?:\.(.+)|)$/;

        function J() {
            return !0
        }

        function K() {
            return !1
        }

        function tt() {
            try {
                return C.activeElement
            } catch (t) {}
        }

        function et(t) {
            var e = it.split("|"),
                i = t.createDocumentFragment();
            if (i.createElement)
                for (; e.length;) i.createElement(e.pop());
            return i
        }
        T.event = {
            global: {},
            add: function (t, e, i, n, o) {
                var s, r, a, l, d, c, h, u, p, f, g, m = T._data(t);
                if (m) {
                    for (i.handler && (i = (l = i).handler, o = l.selector), i.guid || (i.guid = T.guid++), (r = m.events) || (r = m.events = {}), (c = m.handle) || ((c = m.handle = function (t) {
                            return typeof T === $ || t && T.event.triggered === t.type ? void 0 : T.event.dispatch.apply(c.elem, arguments)
                        }).elem = t), a = (e = (e || "").match(N) || [""]).length; a--;) p = g = (s = G.exec(e[a]) || [])[1], f = (s[2] || "").split(".").sort(), p && (d = T.event.special[p] || {}, p = (o ? d.delegateType : d.bindType) || p, d = T.event.special[p] || {}, h = T.extend({
                        type: p,
                        origType: g,
                        data: n,
                        handler: i,
                        guid: i.guid,
                        selector: o,
                        needsContext: o && T.expr.match.needsContext.test(o),
                        namespace: f.join(".")
                    }, l), (u = r[p]) || ((u = r[p] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(t, n, f, c) || (t.addEventListener ? t.addEventListener(p, c, !1) : t.attachEvent && t.attachEvent("on" + p, c))), d.add && (d.add.call(t, h), h.handler.guid || (h.handler.guid = i.guid)), o ? u.splice(u.delegateCount++, 0, h) : u.push(h), T.event.global[p] = !0);
                    t = null
                }
            },
            remove: function (t, e, i, n, o) {
                var s, r, a, l, d, c, h, u, p, f, g, m = T.hasData(t) && T._data(t);
                if (m && (c = m.events)) {
                    for (d = (e = (e || "").match(N) || [""]).length; d--;)
                        if (p = g = (a = G.exec(e[d]) || [])[1], f = (a[2] || "").split(".").sort(), p) {
                            for (h = T.event.special[p] || {}, u = c[p = (n ? h.delegateType : h.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = s = u.length; s--;) r = u[s], !o && g !== r.origType || i && i.guid !== r.guid || a && !a.test(r.namespace) || n && n !== r.selector && ("**" !== n || !r.selector) || (u.splice(s, 1), r.selector && u.delegateCount--, h.remove && h.remove.call(t, r));
                            l && !u.length && (h.teardown && !1 !== h.teardown.call(t, f, m.handle) || T.removeEvent(t, p, m.handle), delete c[p])
                        } else
                            for (p in c) T.event.remove(t, p + e[d], i, n, !0);
                    T.isEmptyObject(c) && (delete m.handle, T._removeData(t, "events"))
                }
            },
            trigger: function (t, e, i, n) {
                var o, s, r, a, l, d, c, h = [i || C],
                    u = m.call(t, "type") ? t.type : t,
                    p = m.call(t, "namespace") ? t.namespace.split(".") : [];
                if (r = d = i = i || C, 3 !== i.nodeType && 8 !== i.nodeType && !Z.test(u + T.event.triggered) && (0 <= u.indexOf(".") && (u = (p = u.split(".")).shift(), p.sort()), s = u.indexOf(":") < 0 && "on" + u, (t = t[T.expando] ? t : new T.Event(u, "object" == typeof t && t)).isTrigger = n ? 2 : 3, t.namespace = p.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), e = null == e ? [t] : T.makeArray(e, [t]), l = T.event.special[u] || {}, n || !l.trigger || !1 !== l.trigger.apply(i, e))) {
                    if (!n && !l.noBubble && !T.isWindow(i)) {
                        for (a = l.delegateType || u, Z.test(a + u) || (r = r.parentNode); r; r = r.parentNode) h.push(r), d = r;
                        d === (i.ownerDocument || C) && h.push(d.defaultView || d.parentWindow || f)
                    }
                    for (c = 0;
                        (r = h[c++]) && !t.isPropagationStopped();) t.type = 1 < c ? a : l.bindType || u, (o = (T._data(r, "events") || {})[t.type] && T._data(r, "handle")) && o.apply(r, e), (o = s && r[s]) && o.apply && T.acceptData(r) && (t.result = o.apply(r, e), !1 === t.result && t.preventDefault());
                    if (t.type = u, !n && !t.isDefaultPrevented() && (!l._default || !1 === l._default.apply(h.pop(), e)) && T.acceptData(i) && s && i[u] && !T.isWindow(i)) {
                        (d = i[s]) && (i[s] = null), T.event.triggered = u;
                        try {
                            i[u]()
                        } catch (t) {}
                        T.event.triggered = void 0, d && (i[s] = d)
                    }
                    return t.result
                }
            },
            dispatch: function (t) {
                t = T.event.fix(t);
                var e, i, n, o, s, r = [],
                    a = c.call(arguments),
                    l = (T._data(this, "events") || {})[t.type] || [],
                    d = T.event.special[t.type] || {};
                if ((a[0] = t).delegateTarget = this, !d.preDispatch || !1 !== d.preDispatch.call(this, t)) {
                    for (r = T.event.handlers.call(this, t, l), e = 0;
                        (o = r[e++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = o.elem, s = 0;
                            (n = o.handlers[s++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(n.namespace)) && (t.handleObj = n, t.data = n.data, void 0 !== (i = ((T.event.special[n.origType] || {}).handle || n.handler).apply(o.elem, a)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
                    return d.postDispatch && d.postDispatch.call(this, t), t.result
                }
            },
            handlers: function (t, e) {
                var i, n, o, s, r = [],
                    a = e.delegateCount,
                    l = t.target;
                if (a && l.nodeType && (!t.button || "click" !== t.type))
                    for (; l != this; l = l.parentNode || this)
                        if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
                            for (o = [], s = 0; s < a; s++) void 0 === o[i = (n = e[s]).selector + " "] && (o[i] = n.needsContext ? 0 <= T(i, this).index(l) : T.find(i, this, null, [l]).length), o[i] && o.push(n);
                            o.length && r.push({
                                elem: l,
                                handlers: o
                            })
                        } return a < e.length && r.push({
                    elem: this,
                    handlers: e.slice(a)
                }), r
            },
            fix: function (t) {
                if (t[T.expando]) return t;
                var e, i, n, o = t.type,
                    s = t,
                    r = this.fixHooks[o];
                for (r || (this.fixHooks[o] = r = Q.test(o) ? this.mouseHooks : V.test(o) ? this.keyHooks : {}), n = r.props ? this.props.concat(r.props) : this.props, t = new T.Event(s), e = n.length; e--;) t[i = n[e]] = s[i];
                return t.target || (t.target = s.srcElement || C), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, r.filter ? r.filter(t, s) : t
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function (t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (t, e) {
                    var i, n, o, s = e.button,
                        r = e.fromElement;
                    return null == t.pageX && null != e.clientX && (o = (n = t.target.ownerDocument || C).documentElement, i = n.body, t.pageX = e.clientX + (o && o.scrollLeft || i && i.scrollLeft || 0) - (o && o.clientLeft || i && i.clientLeft || 0), t.pageY = e.clientY + (o && o.scrollTop || i && i.scrollTop || 0) - (o && o.clientTop || i && i.clientTop || 0)), !t.relatedTarget && r && (t.relatedTarget = r === t.target ? e.toElement : r), t.which || void 0 === s || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), t
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function () {
                        if (this !== tt() && this.focus) try {
                            return this.focus(), !1
                        } catch (t) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function () {
                        return this === tt() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function () {
                        return T.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    },
                    _default: function (t) {
                        return T.nodeName(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function (t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            },
            simulate: function (t, e, i, n) {
                var o = T.extend(new T.Event, i, {
                    type: t,
                    isSimulated: !0,
                    originalEvent: {}
                });
                n ? T.event.trigger(o, null, e) : T.event.dispatch.call(e, o), o.isDefaultPrevented() && i.preventDefault()
            }
        }, T.removeEvent = C.removeEventListener ? function (t, e, i) {
            t.removeEventListener && t.removeEventListener(e, i, !1)
        } : function (t, e, i) {
            var n = "on" + e;
            t.detachEvent && (typeof t[n] === $ && (t[n] = null), t.detachEvent(n, i))
        }, T.Event = function (t, e) {
            return this instanceof T.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? J : K) : this.type = t, e && T.extend(this, e), this.timeStamp = t && t.timeStamp || T.now(), void(this[T.expando] = !0)) : new T.Event(t, e)
        }, T.Event.prototype = {
            isDefaultPrevented: K,
            isPropagationStopped: K,
            isImmediatePropagationStopped: K,
            preventDefault: function () {
                var t = this.originalEvent;
                this.isDefaultPrevented = J, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
            },
            stopPropagation: function () {
                var t = this.originalEvent;
                this.isPropagationStopped = J, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
            },
            stopImmediatePropagation: function () {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = J, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, T.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (t, o) {
            T.event.special[t] = {
                delegateType: o,
                bindType: o,
                handle: function (t) {
                    var e, i = t.relatedTarget,
                        n = t.handleObj;
                    return (!i || i !== this && !T.contains(this, i)) && (t.type = n.origType, e = n.handler.apply(this, arguments), t.type = o), e
                }
            }
        }), v.submitBubbles || (T.event.special.submit = {
            setup: function () {
                return !T.nodeName(this, "form") && void T.event.add(this, "click._submit keypress._submit", function (t) {
                    var e = t.target,
                        i = T.nodeName(e, "input") || T.nodeName(e, "button") ? e.form : void 0;
                    i && !T._data(i, "submitBubbles") && (T.event.add(i, "submit._submit", function (t) {
                        t._submit_bubble = !0
                    }), T._data(i, "submitBubbles", !0))
                })
            },
            postDispatch: function (t) {
                t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && T.event.simulate("submit", this.parentNode, t, !0))
            },
            teardown: function () {
                return !T.nodeName(this, "form") && void T.event.remove(this, "._submit")
            }
        }), v.changeBubbles || (T.event.special.change = {
            setup: function () {
                return U.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (T.event.add(this, "propertychange._change", function (t) {
                    "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
                }), T.event.add(this, "click._change", function (t) {
                    this._just_changed && !t.isTrigger && (this._just_changed = !1), T.event.simulate("change", this, t, !0)
                })), !1) : void T.event.add(this, "beforeactivate._change", function (t) {
                    var e = t.target;
                    U.test(e.nodeName) && !T._data(e, "changeBubbles") && (T.event.add(e, "change._change", function (t) {
                        !this.parentNode || t.isSimulated || t.isTrigger || T.event.simulate("change", this.parentNode, t, !0)
                    }), T._data(e, "changeBubbles", !0))
                })
            },
            handle: function (t) {
                var e = t.target;
                return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function () {
                return T.event.remove(this, "._change"), !U.test(this.nodeName)
            }
        }), v.focusinBubbles || T.each({
            focus: "focusin",
            blur: "focusout"
        }, function (i, n) {
            var o = function (t) {
                T.event.simulate(n, t.target, T.event.fix(t), !0)
            };
            T.event.special[n] = {
                setup: function () {
                    var t = this.ownerDocument || this,
                        e = T._data(t, n);
                    e || t.addEventListener(i, o, !0), T._data(t, n, (e || 0) + 1)
                },
                teardown: function () {
                    var t = this.ownerDocument || this,
                        e = T._data(t, n) - 1;
                    e ? T._data(t, n, e) : (t.removeEventListener(i, o, !0), T._removeData(t, n))
                }
            }
        }), T.fn.extend({
            on: function (t, e, i, n, o) {
                var s, r;
                if ("object" == typeof t) {
                    for (s in "string" != typeof e && (i = i || e, e = void 0), t) this.on(s, e, i, t[s], o);
                    return this
                }
                if (null == i && null == n ? (n = e, i = e = void 0) : null == n && ("string" == typeof e ? (n = i, i = void 0) : (n = i, i = e, e = void 0)), !1 === n) n = K;
                else if (!n) return this;
                return 1 === o && (r = n, (n = function (t) {
                    return T().off(t), r.apply(this, arguments)
                }).guid = r.guid || (r.guid = T.guid++)), this.each(function () {
                    T.event.add(this, t, n, i, e)
                })
            },
            one: function (t, e, i, n) {
                return this.on(t, e, i, n, 1)
            },
            off: function (t, e, i) {
                var n, o;
                if (t && t.preventDefault && t.handleObj) return n = t.handleObj, T(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                if ("object" == typeof t) {
                    for (o in t) this.off(o, e, t[o]);
                    return this
                }
                return (!1 === e || "function" == typeof e) && (i = e, e = void 0), !1 === i && (i = K), this.each(function () {
                    T.event.remove(this, t, i, e)
                })
            },
            trigger: function (t, e) {
                return this.each(function () {
                    T.event.trigger(t, e, this)
                })
            },
            triggerHandler: function (t, e) {
                var i = this[0];
                return i ? T.event.trigger(t, e, i, !0) : void 0
            }
        });
        var it = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            nt = / jQuery\d+="(?:null|\d+)"/g,
            ot = new RegExp("<(?:" + it + ")[\\s/>]", "i"),
            st = /^\s+/,
            rt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            at = /<([\w:]+)/,
            lt = /<tbody/i,
            dt = /<|&#?\w+;/,
            ct = /<(?:script|style|link)/i,
            ht = /checked\s*(?:[^=]|=\s*.checked.)/i,
            ut = /^$|\/(?:java|ecma)script/i,
            pt = /^true\/(.*)/,
            ft = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            gt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: v.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            mt = et(C).appendChild(C.createElement("div"));

        function vt(t, e) {
            var i, n, o = 0,
                s = typeof t.getElementsByTagName !== $ ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== $ ? t.querySelectorAll(e || "*") : void 0;
            if (!s)
                for (s = [], i = t.childNodes || t; null != (n = i[o]); o++) !e || T.nodeName(n, e) ? s.push(n) : T.merge(s, vt(n, e));
            return void 0 === e || e && T.nodeName(t, e) ? T.merge([t], s) : s
        }

        function yt(t) {
            Y.test(t.type) && (t.defaultChecked = t.checked)
        }

        function wt(t, e) {
            return T.nodeName(t, "table") && T.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function bt(t) {
            return t.type = (null !== T.find.attr(t, "type")) + "/" + t.type, t
        }

        function xt(t) {
            var e = pt.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function _t(t, e) {
            for (var i, n = 0; null != (i = t[n]); n++) T._data(i, "globalEval", !e || T._data(e[n], "globalEval"))
        }

        function Tt(t, e) {
            if (1 === e.nodeType && T.hasData(t)) {
                var i, n, o, s = T._data(t),
                    r = T._data(e, s),
                    a = s.events;
                if (a)
                    for (i in delete r.handle, r.events = {}, a)
                        for (n = 0, o = a[i].length; n < o; n++) T.event.add(e, i, a[i][n]);
                r.data && (r.data = T.extend({}, r.data))
            }
        }

        function Ct(t, e) {
            var i, n, o;
            if (1 === e.nodeType) {
                if (i = e.nodeName.toLowerCase(), !v.noCloneEvent && e[T.expando]) {
                    for (n in (o = T._data(e)).events) T.removeEvent(e, n, o.handle);
                    e.removeAttribute(T.expando)
                }
                "script" === i && e.text !== t.text ? (bt(e).text = t.text, xt(e)) : "object" === i ? (e.parentNode && (e.outerHTML = t.outerHTML), v.html5Clone && t.innerHTML && !T.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === i && Y.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === i ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue)
            }
        }
        gt.optgroup = gt.option, gt.tbody = gt.tfoot = gt.colgroup = gt.caption = gt.thead, gt.th = gt.td, T.extend({
            clone: function (t, e, i) {
                var n, o, s, r, a, l = T.contains(t.ownerDocument, t);
                if (v.html5Clone || T.isXMLDoc(t) || !ot.test("<" + t.nodeName + ">") ? s = t.cloneNode(!0) : (mt.innerHTML = t.outerHTML, mt.removeChild(s = mt.firstChild)), !(v.noCloneEvent && v.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || T.isXMLDoc(t)))
                    for (n = vt(s), a = vt(t), r = 0; null != (o = a[r]); ++r) n[r] && Ct(o, n[r]);
                if (e)
                    if (i)
                        for (a = a || vt(t), n = n || vt(s), r = 0; null != (o = a[r]); r++) Tt(o, n[r]);
                    else Tt(t, s);
                return 0 < (n = vt(s, "script")).length && _t(n, !l && vt(t, "script")), n = a = o = null, s
            },
            buildFragment: function (t, e, i, n) {
                for (var o, s, r, a, l, d, c, h = t.length, u = et(e), p = [], f = 0; f < h; f++)
                    if ((s = t[f]) || 0 === s)
                        if ("object" === T.type(s)) T.merge(p, s.nodeType ? [s] : s);
                        else if (dt.test(s)) {
                    for (a = a || u.appendChild(e.createElement("div")), l = (at.exec(s) || ["", ""])[1].toLowerCase(), c = gt[l] || gt._default, a.innerHTML = c[1] + s.replace(rt, "<$1></$2>") + c[2], o = c[0]; o--;) a = a.lastChild;
                    if (!v.leadingWhitespace && st.test(s) && p.push(e.createTextNode(st.exec(s)[0])), !v.tbody)
                        for (o = (s = "table" !== l || lt.test(s) ? "<table>" !== c[1] || lt.test(s) ? 0 : a : a.firstChild) && s.childNodes.length; o--;) T.nodeName(d = s.childNodes[o], "tbody") && !d.childNodes.length && s.removeChild(d);
                    for (T.merge(p, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                    a = u.lastChild
                } else p.push(e.createTextNode(s));
                for (a && u.removeChild(a), v.appendChecked || T.grep(vt(p, "input"), yt), f = 0; s = p[f++];)
                    if ((!n || -1 === T.inArray(s, n)) && (r = T.contains(s.ownerDocument, s), a = vt(u.appendChild(s), "script"), r && _t(a), i))
                        for (o = 0; s = a[o++];) ut.test(s.type || "") && i.push(s);
                return a = null, u
            },
            cleanData: function (t, e) {
                for (var i, n, o, s, r = 0, a = T.expando, l = T.cache, d = v.deleteExpando, c = T.event.special; null != (i = t[r]); r++)
                    if ((e || T.acceptData(i)) && (s = (o = i[a]) && l[o])) {
                        if (s.events)
                            for (n in s.events) c[n] ? T.event.remove(i, n) : T.removeEvent(i, n, s.handle);
                        l[o] && (delete l[o], d ? delete i[a] : typeof i.removeAttribute !== $ ? i.removeAttribute(a) : i[a] = null, h.push(o))
                    }
            }
        }), T.fn.extend({
            text: function (t) {
                return B(this, function (t) {
                    return void 0 === t ? T.text(this) : this.empty().append((this[0] && this[0].ownerDocument || C).createTextNode(t))
                }, null, t, arguments.length)
            },
            append: function () {
                return this.domManip(arguments, function (t) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || wt(this, t).appendChild(t)
                })
            },
            prepend: function () {
                return this.domManip(arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = wt(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function () {
                return this.domManip(arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function () {
                return this.domManip(arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            remove: function (t, e) {
                for (var i, n = t ? T.filter(t, this) : this, o = 0; null != (i = n[o]); o++) e || 1 !== i.nodeType || T.cleanData(vt(i)), i.parentNode && (e && T.contains(i.ownerDocument, i) && _t(vt(i, "script")), i.parentNode.removeChild(i));
                return this
            },
            empty: function () {
                for (var t, e = 0; null != (t = this[e]); e++) {
                    for (1 === t.nodeType && T.cleanData(vt(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                    t.options && T.nodeName(t, "select") && (t.options.length = 0)
                }
                return this
            },
            clone: function (t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function () {
                    return T.clone(this, t, e)
                })
            },
            html: function (t) {
                return B(this, function (t) {
                    var e = this[0] || {},
                        i = 0,
                        n = this.length;
                    if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(nt, "") : void 0;
                    if (!("string" != typeof t || ct.test(t) || !v.htmlSerialize && ot.test(t) || !v.leadingWhitespace && st.test(t) || gt[(at.exec(t) || ["", ""])[1].toLowerCase()])) {
                        t = t.replace(rt, "<$1></$2>");
                        try {
                            for (; i < n; i++) 1 === (e = this[i] || {}).nodeType && (T.cleanData(vt(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (t) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function () {
                var e = arguments[0];
                return this.domManip(arguments, function (t) {
                    e = this.parentNode, T.cleanData(vt(this)), e && e.replaceChild(t, this)
                }), e && (e.length || e.nodeType) ? this : this.remove()
            },
            detach: function (t) {
                return this.remove(t, !0)
            },
            domManip: function (i, n) {
                i = g.apply([], i);
                var t, e, o, s, r, a, l = 0,
                    d = this.length,
                    c = this,
                    h = d - 1,
                    u = i[0],
                    p = T.isFunction(u);
                if (p || 1 < d && "string" == typeof u && !v.checkClone && ht.test(u)) return this.each(function (t) {
                    var e = c.eq(t);
                    p && (i[0] = u.call(this, t, e.html())), e.domManip(i, n)
                });
                if (d && (t = (a = T.buildFragment(i, this[0].ownerDocument, !1, this)).firstChild, 1 === a.childNodes.length && (a = t), t)) {
                    for (o = (s = T.map(vt(a, "script"), bt)).length; l < d; l++) e = a, l !== h && (e = T.clone(e, !0, !0), o && T.merge(s, vt(e, "script"))), n.call(this[l], e, l);
                    if (o)
                        for (r = s[s.length - 1].ownerDocument, T.map(s, xt), l = 0; l < o; l++) e = s[l], ut.test(e.type || "") && !T._data(e, "globalEval") && T.contains(r, e) && (e.src ? T._evalUrl && T._evalUrl(e.src) : T.globalEval((e.text || e.textContent || e.innerHTML || "").replace(ft, "")));
                    a = t = null
                }
                return this
            }
        }), T.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (t, r) {
            T.fn[t] = function (t) {
                for (var e, i = 0, n = [], o = T(t), s = o.length - 1; i <= s; i++) e = i === s ? this : this.clone(!0), T(o[i])[r](e), a.apply(n, e.get());
                return this.pushStack(n)
            }
        });
        var kt, St, Et = {};

        function Pt(t, e) {
            var i, n = T(e.createElement(t)).appendTo(e.body),
                o = f.getDefaultComputedStyle && (i = f.getDefaultComputedStyle(n[0])) ? i.display : T.css(n[0], "display");
            return n.detach(), o
        }

        function At(t) {
            var e = C,
                i = Et[t];
            return i || ("none" !== (i = Pt(t, e)) && i || ((e = ((kt = (kt || T("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement))[0].contentWindow || kt[0].contentDocument).document).write(), e.close(), i = Pt(t, e), kt.detach()), Et[t] = i), i
        }
        v.shrinkWrapBlocks = function () {
            return null != St ? St : (St = !1, (e = C.getElementsByTagName("body")[0]) && e.style ? (t = C.createElement("div"), (i = C.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", e.appendChild(i).appendChild(t), typeof t.style.zoom !== $ && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(C.createElement("div")).style.width = "5px", St = 3 !== t.offsetWidth), e.removeChild(i), St) : void 0);
            var t, e, i
        };
        var Nt, Ot, Mt = /^margin/,
            It = new RegExp("^(" + F + ")(?!px)[a-z%]+$", "i"),
            Dt = /^(top|right|bottom|left)$/;

        function $t(e, i) {
            return {
                get: function () {
                    var t = e();
                    if (null != t) return t ? void delete this.get : (this.get = i).apply(this, arguments)
                }
            }
        }
        f.getComputedStyle ? (Nt = function (t) {
                return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : f.getComputedStyle(t, null)
            }, Ot = function (t, e, i) {
                var n, o, s, r, a = t.style;
                return r = (i = i || Nt(t)) ? i.getPropertyValue(e) || i[e] : void 0, i && ("" !== r || T.contains(t.ownerDocument, t) || (r = T.style(t, e)), It.test(r) && Mt.test(e) && (n = a.width, o = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = i.width, a.width = n, a.minWidth = o, a.maxWidth = s)), void 0 === r ? r : r + ""
            }) : C.documentElement.currentStyle && (Nt = function (t) {
                return t.currentStyle
            }, Ot = function (t, e, i) {
                var n, o, s, r, a = t.style;
                return null == (r = (i = i || Nt(t)) ? i[e] : void 0) && a && a[e] && (r = a[e]), It.test(r) && !Dt.test(e) && (n = a.left, (s = (o = t.runtimeStyle) && o.left) && (o.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em" : r, r = a.pixelLeft + "px", a.left = n, s && (o.left = s)), void 0 === r ? r : r + "" || "auto"
            }),
            function () {
                var t, e, i, o, s, r, a;
                if ((t = C.createElement("div")).innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = (i = t.getElementsByTagName("a")[0]) && i.style) {
                    function n() {
                        var t, e, i, n;
                        (e = C.getElementsByTagName("body")[0]) && e.style && (t = C.createElement("div"), (i = C.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", e.appendChild(i).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = s = !1, a = !0, f.getComputedStyle && (o = "1%" !== (f.getComputedStyle(t, null) || {}).top, s = "4px" === (f.getComputedStyle(t, null) || {
                            width: "4px"
                        }).width, (n = t.appendChild(C.createElement("div"))).style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", t.style.width = "1px", a = !parseFloat((f.getComputedStyle(n, null) || {}).marginRight), t.removeChild(n)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", (n = t.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", (r = 0 === n[0].offsetHeight) && (n[0].style.display = "", n[1].style.display = "none", r = 0 === n[0].offsetHeight), e.removeChild(i))
                    }
                    e.cssText = "float:left;opacity:.5", v.opacity = "0.5" === e.opacity, v.cssFloat = !!e.cssFloat, t.style.backgroundClip = "content-box", t.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === t.style.backgroundClip, v.boxSizing = "" === e.boxSizing || "" === e.MozBoxSizing || "" === e.WebkitBoxSizing, T.extend(v, {
                        reliableHiddenOffsets: function () {
                            return null == r && n(), r
                        },
                        boxSizingReliable: function () {
                            return null == s && n(), s
                        },
                        pixelPosition: function () {
                            return null == o && n(), o
                        },
                        reliableMarginRight: function () {
                            return null == a && n(), a
                        }
                    })
                }
            }(), T.swap = function (t, e, i, n) {
                var o, s, r = {};
                for (s in e) r[s] = t.style[s], t.style[s] = e[s];
                for (s in o = i.apply(t, n || []), e) t.style[s] = r[s];
                return o
            };
        var Lt = /alpha\([^)]*\)/i,
            zt = /opacity\s*=\s*([^)]*)/,
            Rt = /^(none|table(?!-c[ea]).+)/,
            jt = new RegExp("^(" + F + ")(.*)$", "i"),
            Ht = new RegExp("^([+-])=(" + F + ")", "i"),
            Wt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Ft = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            qt = ["Webkit", "O", "Moz", "ms"];

        function Xt(t, e) {
            if (e in t) return e;
            for (var i = e.charAt(0).toUpperCase() + e.slice(1), n = e, o = qt.length; o--;)
                if ((e = qt[o] + i) in t) return e;
            return n
        }

        function Bt(t, e) {
            for (var i, n, o, s = [], r = 0, a = t.length; r < a; r++)(n = t[r]).style && (s[r] = T._data(n, "olddisplay"), i = n.style.display, e ? (s[r] || "none" !== i || (n.style.display = ""), "" === n.style.display && X(n) && (s[r] = T._data(n, "olddisplay", At(n.nodeName)))) : (o = X(n), (i && "none" !== i || !o) && T._data(n, "olddisplay", o ? i : T.css(n, "display"))));
            for (r = 0; r < a; r++)(n = t[r]).style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? s[r] || "" : "none"));
            return t
        }

        function Yt(t, e, i) {
            var n = jt.exec(e);
            return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
        }

        function Ut(t, e, i, n, o) {
            for (var s = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, r = 0; s < 4; s += 2) "margin" === i && (r += T.css(t, i + q[s], !0, o)), n ? ("content" === i && (r -= T.css(t, "padding" + q[s], !0, o)), "margin" !== i && (r -= T.css(t, "border" + q[s] + "Width", !0, o))) : (r += T.css(t, "padding" + q[s], !0, o), "padding" !== i && (r += T.css(t, "border" + q[s] + "Width", !0, o)));
            return r
        }

        function Vt(t, e, i) {
            var n = !0,
                o = "width" === e ? t.offsetWidth : t.offsetHeight,
                s = Nt(t),
                r = v.boxSizing && "border-box" === T.css(t, "boxSizing", !1, s);
            if (o <= 0 || null == o) {
                if (((o = Ot(t, e, s)) < 0 || null == o) && (o = t.style[e]), It.test(o)) return o;
                n = r && (v.boxSizingReliable() || o === t.style[e]), o = parseFloat(o) || 0
            }
            return o + Ut(t, e, i || (r ? "border" : "content"), n, s) + "px"
        }

        function Qt(t, e, i, n, o) {
            return new Qt.prototype.init(t, e, i, n, o)
        }
        T.extend({
            cssHooks: {
                opacity: {
                    get: function (t, e) {
                        if (e) {
                            var i = Ot(t, "opacity");
                            return "" === i ? "1" : i
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
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
                float: v.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function (t, e, i, n) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var o, s, r, a = T.camelCase(e),
                        l = t.style;
                    if (e = T.cssProps[a] || (T.cssProps[a] = Xt(l, a)), r = T.cssHooks[e] || T.cssHooks[a], void 0 === i) return r && "get" in r && void 0 !== (o = r.get(t, !1, n)) ? o : l[e];
                    if ("string" === (s = typeof i) && (o = Ht.exec(i)) && (i = (o[1] + 1) * o[2] + parseFloat(T.css(t, e)), s = "number"), null != i && i == i && ("number" !== s || T.cssNumber[a] || (i += "px"), v.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(r && "set" in r && void 0 === (i = r.set(t, i, n))))) try {
                        l[e] = i
                    } catch (t) {}
                }
            },
            css: function (t, e, i, n) {
                var o, s, r, a = T.camelCase(e);
                return e = T.cssProps[a] || (T.cssProps[a] = Xt(t.style, a)), (r = T.cssHooks[e] || T.cssHooks[a]) && "get" in r && (s = r.get(t, !0, i)), void 0 === s && (s = Ot(t, e, n)), "normal" === s && e in Ft && (s = Ft[e]), "" === i || i ? (o = parseFloat(s), !0 === i || T.isNumeric(o) ? o || 0 : s) : s
            }
        }), T.each(["height", "width"], function (t, o) {
            T.cssHooks[o] = {
                get: function (t, e, i) {
                    return e ? Rt.test(T.css(t, "display")) && 0 === t.offsetWidth ? T.swap(t, Wt, function () {
                        return Vt(t, o, i)
                    }) : Vt(t, o, i) : void 0
                },
                set: function (t, e, i) {
                    var n = i && Nt(t);
                    return Yt(0, e, i ? Ut(t, o, i, v.boxSizing && "border-box" === T.css(t, "boxSizing", !1, n), n) : 0)
                }
            }
        }), v.opacity || (T.cssHooks.opacity = {
            get: function (t, e) {
                return zt.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
            },
            set: function (t, e) {
                var i = t.style,
                    n = t.currentStyle,
                    o = T.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                    s = n && n.filter || i.filter || "";
                ((i.zoom = 1) <= e || "" === e) && "" === T.trim(s.replace(Lt, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === e || n && !n.filter) || (i.filter = Lt.test(s) ? s.replace(Lt, o) : s + " " + o)
            }
        }), T.cssHooks.marginRight = $t(v.reliableMarginRight, function (t, e) {
            return e ? T.swap(t, {
                display: "inline-block"
            }, Ot, [t, "marginRight"]) : void 0
        }), T.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function (o, s) {
            T.cssHooks[o + s] = {
                expand: function (t) {
                    for (var e = 0, i = {}, n = "string" == typeof t ? t.split(" ") : [t]; e < 4; e++) i[o + q[e] + s] = n[e] || n[e - 2] || n[0];
                    return i
                }
            }, Mt.test(o) || (T.cssHooks[o + s].set = Yt)
        }), T.fn.extend({
            css: function (t, e) {
                return B(this, function (t, e, i) {
                    var n, o, s = {},
                        r = 0;
                    if (T.isArray(e)) {
                        for (n = Nt(t), o = e.length; r < o; r++) s[e[r]] = T.css(t, e[r], !1, n);
                        return s
                    }
                    return void 0 !== i ? T.style(t, e, i) : T.css(t, e)
                }, t, e, 1 < arguments.length)
            },
            show: function () {
                return Bt(this, !0)
            },
            hide: function () {
                return Bt(this)
            },
            toggle: function (t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                    X(this) ? T(this).show() : T(this).hide()
                })
            }
        }), ((T.Tween = Qt).prototype = {
            constructor: Qt,
            init: function (t, e, i, n, o, s) {
                this.elem = t, this.prop = i, this.easing = o || "swing", this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = s || (T.cssNumber[i] ? "" : "px")
            },
            cur: function () {
                var t = Qt.propHooks[this.prop];
                return t && t.get ? t.get(this) : Qt.propHooks._default.get(this)
            },
            run: function (t) {
                var e, i = Qt.propHooks[this.prop];
                return this.pos = e = this.options.duration ? T.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : Qt.propHooks._default.set(this), this
            }
        }).init.prototype = Qt.prototype, (Qt.propHooks = {
            _default: {
                get: function (t) {
                    var e;
                    return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = T.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0 : t.elem[t.prop]
                },
                set: function (t) {
                    T.fx.step[t.prop] ? T.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[T.cssProps[t.prop]] || T.cssHooks[t.prop]) ? T.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                }
            }
        }).scrollTop = Qt.propHooks.scrollLeft = {
            set: function (t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, T.easing = {
            linear: function (t) {
                return t
            },
            swing: function (t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }
        }, T.fx = Qt.prototype.init, T.fx.step = {};
        var Zt, Gt, Jt, Kt, te, ee, ie, ne = /^(?:toggle|show|hide)$/,
            oe = new RegExp("^(?:([+-])=|)(" + F + ")([a-z%]*)$", "i"),
            se = /queueHooks$/,
            re = [function (e, t, i) {
                var n, o, s, r, a, l, d, c = this,
                    h = {},
                    u = e.style,
                    p = e.nodeType && X(e),
                    f = T._data(e, "fxshow");
                for (n in i.queue || (null == (a = T._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
                        a.unqueued || l()
                    }), a.unqueued++, c.always(function () {
                        c.always(function () {
                            a.unqueued--, T.queue(e, "fx").length || a.empty.fire()
                        })
                    })), 1 === e.nodeType && ("height" in t || "width" in t) && (i.overflow = [u.overflow, u.overflowX, u.overflowY], d = T.css(e, "display"), "inline" === ("none" === d ? T._data(e, "olddisplay") || At(e.nodeName) : d) && "none" === T.css(e, "float") && (v.inlineBlockNeedsLayout && "inline" !== At(e.nodeName) ? u.zoom = 1 : u.display = "inline-block")), i.overflow && (u.overflow = "hidden", v.shrinkWrapBlocks() || c.always(function () {
                        u.overflow = i.overflow[0], u.overflowX = i.overflow[1], u.overflowY = i.overflow[2]
                    })), t)
                    if (o = t[n], ne.exec(o)) {
                        if (delete t[n], s = s || "toggle" === o, o === (p ? "hide" : "show")) {
                            if ("show" !== o || !f || void 0 === f[n]) continue;
                            p = !0
                        }
                        h[n] = f && f[n] || T.style(e, n)
                    } else d = void 0;
                if (T.isEmptyObject(h)) "inline" === ("none" === d ? At(e.nodeName) : d) && (u.display = d);
                else
                    for (n in f ? "hidden" in f && (p = f.hidden) : f = T._data(e, "fxshow", {}), s && (f.hidden = !p), p ? T(e).show() : c.done(function () {
                            T(e).hide()
                        }), c.done(function () {
                            var t;
                            for (t in T._removeData(e, "fxshow"), h) T.style(e, t, h[t])
                        }), h) r = ce(p ? f[n] : 0, n, c), n in f || (f[n] = r.start, p && (r.end = r.start, r.start = "width" === n || "height" === n ? 1 : 0))
            }],
            ae = {
                "*": [function (t, e) {
                    var i = this.createTween(t, e),
                        n = i.cur(),
                        o = oe.exec(e),
                        s = o && o[3] || (T.cssNumber[t] ? "" : "px"),
                        r = (T.cssNumber[t] || "px" !== s && +n) && oe.exec(T.css(i.elem, t)),
                        a = 1,
                        l = 20;
                    if (r && r[3] !== s)
                        for (s = s || r[3], o = o || [], r = +n || 1; r /= a = a || ".5", T.style(i.elem, t, r + s), a !== (a = i.cur() / n) && 1 !== a && --l;);
                    return o && (r = i.start = +r || +n || 0, i.unit = s, i.end = o[1] ? r + (o[1] + 1) * o[2] : +o[2]), i
                }]
            };

        function le() {
            return setTimeout(function () {
                Zt = void 0
            }), Zt = T.now()
        }

        function de(t, e) {
            var i, n = {
                    height: t
                },
                o = 0;
            for (e = e ? 1 : 0; o < 4; o += 2 - e) n["margin" + (i = q[o])] = n["padding" + i] = t;
            return e && (n.opacity = n.width = t), n
        }

        function ce(t, e, i) {
            for (var n, o = (ae[e] || []).concat(ae["*"]), s = 0, r = o.length; s < r; s++)
                if (n = o[s].call(i, e, t)) return n
        }

        function he(s, t, e) {
            var i, r, n = 0,
                o = re.length,
                a = T.Deferred().always(function () {
                    delete l.elem
                }),
                l = function () {
                    if (r) return !1;
                    for (var t = Zt || le(), e = Math.max(0, d.startTime + d.duration - t), i = 1 - (e / d.duration || 0), n = 0, o = d.tweens.length; n < o; n++) d.tweens[n].run(i);
                    return a.notifyWith(s, [d, i, e]), i < 1 && o ? e : (a.resolveWith(s, [d]), !1)
                },
                d = a.promise({
                    elem: s,
                    props: T.extend({}, t),
                    opts: T.extend(!0, {
                        specialEasing: {}
                    }, e),
                    originalProperties: t,
                    originalOptions: e,
                    startTime: Zt || le(),
                    duration: e.duration,
                    tweens: [],
                    createTween: function (t, e) {
                        var i = T.Tween(s, d.opts, t, e, d.opts.specialEasing[t] || d.opts.easing);
                        return d.tweens.push(i), i
                    },
                    stop: function (t) {
                        var e = 0,
                            i = t ? d.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; e < i; e++) d.tweens[e].run(1);
                        return t ? a.resolveWith(s, [d, t]) : a.rejectWith(s, [d, t]), this
                    }
                }),
                c = d.props;
            for (function (t, e) {
                    var i, n, o, s, r;
                    for (i in t)
                        if (o = e[n = T.camelCase(i)], s = t[i], T.isArray(s) && (o = s[1], s = t[i] = s[0]), i !== n && (t[n] = s, delete t[i]), (r = T.cssHooks[n]) && "expand" in r)
                            for (i in s = r.expand(s), delete t[n], s) i in t || (t[i] = s[i], e[i] = o);
                        else e[n] = o
                }(c, d.opts.specialEasing); n < o; n++)
                if (i = re[n].call(d, s, c, d.opts)) return i;
            return T.map(c, ce, d), T.isFunction(d.opts.start) && d.opts.start.call(s, d), T.fx.timer(T.extend(l, {
                elem: s,
                anim: d,
                queue: d.opts.queue
            })), d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always)
        }
        T.Animation = T.extend(he, {
            tweener: function (t, e) {
                T.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                for (var i, n = 0, o = t.length; n < o; n++) i = t[n], ae[i] = ae[i] || [], ae[i].unshift(e)
            },
            prefilter: function (t, e) {
                e ? re.unshift(t) : re.push(t)
            }
        }), T.speed = function (t, e, i) {
            var n = t && "object" == typeof t ? T.extend({}, t) : {
                complete: i || !i && e || T.isFunction(t) && t,
                duration: t,
                easing: i && e || e && !T.isFunction(e) && e
            };
            return n.duration = T.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in T.fx.speeds ? T.fx.speeds[n.duration] : T.fx.speeds._default, (null == n.queue || !0 === n.queue) && (n.queue = "fx"), n.old = n.complete, n.complete = function () {
                T.isFunction(n.old) && n.old.call(this), n.queue && T.dequeue(this, n.queue)
            }, n
        }, T.fn.extend({
            fadeTo: function (t, e, i, n) {
                return this.filter(X).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, i, n)
            },
            animate: function (e, t, i, n) {
                var o = T.isEmptyObject(e),
                    s = T.speed(t, i, n),
                    r = function () {
                        var t = he(this, T.extend({}, e), s);
                        (o || T._data(this, "finish")) && t.stop(!0)
                    };
                return r.finish = r, o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r)
            },
            stop: function (o, t, s) {
                var r = function (t) {
                    var e = t.stop;
                    delete t.stop, e(s)
                };
                return "string" != typeof o && (s = t, t = o, o = void 0), t && !1 !== o && this.queue(o || "fx", []), this.each(function () {
                    var t = !0,
                        e = null != o && o + "queueHooks",
                        i = T.timers,
                        n = T._data(this);
                    if (e) n[e] && n[e].stop && r(n[e]);
                    else
                        for (e in n) n[e] && n[e].stop && se.test(e) && r(n[e]);
                    for (e = i.length; e--;) i[e].elem !== this || null != o && i[e].queue !== o || (i[e].anim.stop(s), t = !1, i.splice(e, 1));
                    (t || !s) && T.dequeue(this, o)
                })
            },
            finish: function (r) {
                return !1 !== r && (r = r || "fx"), this.each(function () {
                    var t, e = T._data(this),
                        i = e[r + "queue"],
                        n = e[r + "queueHooks"],
                        o = T.timers,
                        s = i ? i.length : 0;
                    for (e.finish = !0, T.queue(this, r, []), n && n.stop && n.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === r && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete e.finish
                })
            }
        }), T.each(["toggle", "show", "hide"], function (t, n) {
            var o = T.fn[n];
            T.fn[n] = function (t, e, i) {
                return null == t || "boolean" == typeof t ? o.apply(this, arguments) : this.animate(de(n, !0), t, e, i)
            }
        }), T.each({
            slideDown: de("show"),
            slideUp: de("hide"),
            slideToggle: de("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (t, n) {
            T.fn[t] = function (t, e, i) {
                return this.animate(n, t, e, i)
            }
        }), T.timers = [], T.fx.tick = function () {
            var t, e = T.timers,
                i = 0;
            for (Zt = T.now(); i < e.length; i++)(t = e[i])() || e[i] !== t || e.splice(i--, 1);
            e.length || T.fx.stop(), Zt = void 0
        }, T.fx.timer = function (t) {
            T.timers.push(t), t() ? T.fx.start() : T.timers.pop()
        }, T.fx.interval = 13, T.fx.start = function () {
            Gt || (Gt = setInterval(T.fx.tick, T.fx.interval))
        }, T.fx.stop = function () {
            clearInterval(Gt), Gt = null
        }, T.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, T.fn.delay = function (n, t) {
            return n = T.fx && T.fx.speeds[n] || n, t = t || "fx", this.queue(t, function (t, e) {
                var i = setTimeout(t, n);
                e.stop = function () {
                    clearTimeout(i)
                }
            })
        }, (Kt = C.createElement("div")).setAttribute("className", "t"), Kt.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ee = Kt.getElementsByTagName("a")[0], ie = (te = C.createElement("select")).appendChild(C.createElement("option")), Jt = Kt.getElementsByTagName("input")[0], ee.style.cssText = "top:1px", v.getSetAttribute = "t" !== Kt.className, v.style = /top/.test(ee.getAttribute("style")), v.hrefNormalized = "/a" === ee.getAttribute("href"), v.checkOn = !!Jt.value, v.optSelected = ie.selected, v.enctype = !!C.createElement("form").enctype, te.disabled = !0, v.optDisabled = !ie.disabled, (Jt = C.createElement("input")).setAttribute("value", ""), v.input = "" === Jt.getAttribute("value"), Jt.value = "t", Jt.setAttribute("type", "radio"), v.radioValue = "t" === Jt.value;
        var ue = /\r/g;
        T.fn.extend({
            val: function (i) {
                var n, t, o, e = this[0];
                return arguments.length ? (o = T.isFunction(i), this.each(function (t) {
                    var e;
                    1 === this.nodeType && (null == (e = o ? i.call(this, t, T(this).val()) : i) ? e = "" : "number" == typeof e ? e += "" : T.isArray(e) && (e = T.map(e, function (t) {
                        return null == t ? "" : t + ""
                    })), (n = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, e, "value") || (this.value = e))
                })) : e ? (n = T.valHooks[e.type] || T.valHooks[e.nodeName.toLowerCase()]) && "get" in n && void 0 !== (t = n.get(e, "value")) ? t : "string" == typeof (t = e.value) ? t.replace(ue, "") : null == t ? "" : t : void 0
            }
        }), T.extend({
            valHooks: {
                option: {
                    get: function (t) {
                        var e = T.find.attr(t, "value");
                        return null != e ? e : T.trim(T.text(t))
                    }
                },
                select: {
                    get: function (t) {
                        for (var e, i, n = t.options, o = t.selectedIndex, s = "select-one" === t.type || o < 0, r = s ? null : [], a = s ? o + 1 : n.length, l = o < 0 ? a : s ? o : 0; l < a; l++)
                            if (!(!(i = n[l]).selected && l !== o || (v.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && T.nodeName(i.parentNode, "optgroup"))) {
                                if (e = T(i).val(), s) return e;
                                r.push(e)
                            } return r
                    },
                    set: function (t, e) {
                        for (var i, n, o = t.options, s = T.makeArray(e), r = o.length; r--;)
                            if (n = o[r], 0 <= T.inArray(T.valHooks.option.get(n), s)) try {
                                n.selected = i = !0
                            } catch (t) {
                                n.scrollHeight
                            } else n.selected = !1;
                        return i || (t.selectedIndex = -1), o
                    }
                }
            }
        }), T.each(["radio", "checkbox"], function () {
            T.valHooks[this] = {
                set: function (t, e) {
                    return T.isArray(e) ? t.checked = 0 <= T.inArray(T(t).val(), e) : void 0
                }
            }, v.checkOn || (T.valHooks[this].get = function (t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var pe, fe, ge = T.expr.attrHandle,
            me = /^(?:checked|selected)$/i,
            ve = v.getSetAttribute,
            ye = v.input;
        T.fn.extend({
            attr: function (t, e) {
                return B(this, T.attr, t, e, 1 < arguments.length)
            },
            removeAttr: function (t) {
                return this.each(function () {
                    T.removeAttr(this, t)
                })
            }
        }), T.extend({
            attr: function (t, e, i) {
                var n, o, s = t.nodeType;
                if (t && 3 !== s && 8 !== s && 2 !== s) return typeof t.getAttribute === $ ? T.prop(t, e, i) : (1 === s && T.isXMLDoc(t) || (e = e.toLowerCase(), n = T.attrHooks[e] || (T.expr.match.bool.test(e) ? fe : pe)), void 0 === i ? n && "get" in n && null !== (o = n.get(t, e)) ? o : null == (o = T.find.attr(t, e)) ? void 0 : o : null !== i ? n && "set" in n && void 0 !== (o = n.set(t, i, e)) ? o : (t.setAttribute(e, i + ""), i) : void T.removeAttr(t, e))
            },
            removeAttr: function (t, e) {
                var i, n, o = 0,
                    s = e && e.match(N);
                if (s && 1 === t.nodeType)
                    for (; i = s[o++];) n = T.propFix[i] || i, T.expr.match.bool.test(i) ? ye && ve || !me.test(i) ? t[n] = !1 : t[T.camelCase("default-" + i)] = t[n] = !1 : T.attr(t, i, ""), t.removeAttribute(ve ? i : n)
            },
            attrHooks: {
                type: {
                    set: function (t, e) {
                        if (!v.radioValue && "radio" === e && T.nodeName(t, "input")) {
                            var i = t.value;
                            return t.setAttribute("type", e), i && (t.value = i), e
                        }
                    }
                }
            }
        }), fe = {
            set: function (t, e, i) {
                return !1 === e ? T.removeAttr(t, i) : ye && ve || !me.test(i) ? t.setAttribute(!ve && T.propFix[i] || i, i) : t[T.camelCase("default-" + i)] = t[i] = !0, i
            }
        }, T.each(T.expr.match.bool.source.match(/\w+/g), function (t, e) {
            var s = ge[e] || T.find.attr;
            ge[e] = ye && ve || !me.test(e) ? function (t, e, i) {
                var n, o;
                return i || (o = ge[e], ge[e] = n, n = null != s(t, e, i) ? e.toLowerCase() : null, ge[e] = o), n
            } : function (t, e, i) {
                return i ? void 0 : t[T.camelCase("default-" + e)] ? e.toLowerCase() : null
            }
        }), ye && ve || (T.attrHooks.value = {
            set: function (t, e, i) {
                return T.nodeName(t, "input") ? void(t.defaultValue = e) : pe && pe.set(t, e, i)
            }
        }), ve || (pe = {
            set: function (t, e, i) {
                var n = t.getAttributeNode(i);
                return n || t.setAttributeNode(n = t.ownerDocument.createAttribute(i)), n.value = e += "", "value" === i || e === t.getAttribute(i) ? e : void 0
            }
        }, ge.id = ge.name = ge.coords = function (t, e, i) {
            var n;
            return i ? void 0 : (n = t.getAttributeNode(e)) && "" !== n.value ? n.value : null
        }, T.valHooks.button = {
            get: function (t, e) {
                var i = t.getAttributeNode(e);
                return i && i.specified ? i.value : void 0
            },
            set: pe.set
        }, T.attrHooks.contenteditable = {
            set: function (t, e, i) {
                pe.set(t, "" !== e && e, i)
            }
        }, T.each(["width", "height"], function (t, i) {
            T.attrHooks[i] = {
                set: function (t, e) {
                    return "" === e ? (t.setAttribute(i, "auto"), e) : void 0
                }
            }
        })), v.style || (T.attrHooks.style = {
            get: function (t) {
                return t.style.cssText || void 0
            },
            set: function (t, e) {
                return t.style.cssText = e + ""
            }
        });
        var we = /^(?:input|select|textarea|button|object)$/i,
            be = /^(?:a|area)$/i;
        T.fn.extend({
            prop: function (t, e) {
                return B(this, T.prop, t, e, 1 < arguments.length)
            },
            removeProp: function (t) {
                return t = T.propFix[t] || t, this.each(function () {
                    try {
                        this[t] = void 0, delete this[t]
                    } catch (t) {}
                })
            }
        }), T.extend({
            propFix: {
                for: "htmlFor",
                class: "className"
            },
            prop: function (t, e, i) {
                var n, o, s = t.nodeType;
                if (t && 3 !== s && 8 !== s && 2 !== s) return (1 !== s || !T.isXMLDoc(t)) && (e = T.propFix[e] || e, o = T.propHooks[e]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : t[e] = i : o && "get" in o && null !== (n = o.get(t, e)) ? n : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function (t) {
                        var e = T.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : we.test(t.nodeName) || be.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            }
        }), v.hrefNormalized || T.each(["href", "src"], function (t, e) {
            T.propHooks[e] = {
                get: function (t) {
                    return t.getAttribute(e, 4)
                }
            }
        }), v.optSelected || (T.propHooks.selected = {
            get: function (t) {
                var e = t.parentNode;
                return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
            }
        }), T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            T.propFix[this.toLowerCase()] = this
        }), v.enctype || (T.propFix.enctype = "encoding");
        var xe = /[\t\r\n\f]/g;
        T.fn.extend({
            addClass: function (e) {
                var t, i, n, o, s, r, a = 0,
                    l = this.length,
                    d = "string" == typeof e && e;
                if (T.isFunction(e)) return this.each(function (t) {
                    T(this).addClass(e.call(this, t, this.className))
                });
                if (d)
                    for (t = (e || "").match(N) || []; a < l; a++)
                        if (n = 1 === (i = this[a]).nodeType && (i.className ? (" " + i.className + " ").replace(xe, " ") : " ")) {
                            for (s = 0; o = t[s++];) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                            r = T.trim(n), i.className !== r && (i.className = r)
                        } return this
            },
            removeClass: function (e) {
                var t, i, n, o, s, r, a = 0,
                    l = this.length,
                    d = 0 === arguments.length || "string" == typeof e && e;
                if (T.isFunction(e)) return this.each(function (t) {
                    T(this).removeClass(e.call(this, t, this.className))
                });
                if (d)
                    for (t = (e || "").match(N) || []; a < l; a++)
                        if (n = 1 === (i = this[a]).nodeType && (i.className ? (" " + i.className + " ").replace(xe, " ") : "")) {
                            for (s = 0; o = t[s++];)
                                for (; 0 <= n.indexOf(" " + o + " ");) n = n.replace(" " + o + " ", " ");
                            r = e ? T.trim(n) : "", i.className !== r && (i.className = r)
                        } return this
            },
            toggleClass: function (o, e) {
                var s = typeof o;
                return "boolean" == typeof e && "string" === s ? e ? this.addClass(o) : this.removeClass(o) : this.each(T.isFunction(o) ? function (t) {
                    T(this).toggleClass(o.call(this, t, this.className, e), e)
                } : function () {
                    if ("string" === s)
                        for (var t, e = 0, i = T(this), n = o.match(N) || []; t = n[e++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                    else(s === $ || "boolean" === s) && (this.className && T._data(this, "__className__", this.className), this.className = this.className || !1 === o ? "" : T._data(this, "__className__") || "")
                })
            },
            hasClass: function (t) {
                for (var e = " " + t + " ", i = 0, n = this.length; i < n; i++)
                    if (1 === this[i].nodeType && 0 <= (" " + this[i].className + " ").replace(xe, " ").indexOf(e)) return !0;
                return !1
            }
        }), T.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, i) {
            T.fn[i] = function (t, e) {
                return 0 < arguments.length ? this.on(i, null, t, e) : this.trigger(i)
            }
        }), T.fn.extend({
            hover: function (t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            },
            bind: function (t, e, i) {
                return this.on(t, null, e, i)
            },
            unbind: function (t, e) {
                return this.off(t, null, e)
            },
            delegate: function (t, e, i, n) {
                return this.on(e, t, i, n)
            },
            undelegate: function (t, e, i) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
            }
        });
        var _e = T.now(),
            Te = /\?/,
            Ce = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        T.parseJSON = function (t) {
            if (f.JSON && f.JSON.parse) return f.JSON.parse(t + "");
            var o, s = null,
                e = T.trim(t + "");
            return e && !T.trim(e.replace(Ce, function (t, e, i, n) {
                return o && e && (s = 0), 0 === s ? t : (o = i || e, s += !n - !i, "")
            })) ? Function("return " + e)() : T.error("Invalid JSON: " + t)
        }, T.parseXML = function (t) {
            var e;
            if (!t || "string" != typeof t) return null;
            try {
                f.DOMParser ? e = (new DOMParser).parseFromString(t, "text/xml") : ((e = new ActiveXObject("Microsoft.XMLDOM")).async = "false", e.loadXML(t))
            } catch (t) {
                e = void 0
            }
            return e && e.documentElement && !e.getElementsByTagName("parsererror").length || T.error("Invalid XML: " + t), e
        };
        var ke, Se, Ee = /#.*$/,
            Pe = /([?&])_=[^&]*/,
            Ae = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Ne = /^(?:GET|HEAD)$/,
            Oe = /^\/\//,
            Me = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            Ie = {},
            De = {},
            $e = "*/".concat("*");
        try {
            Se = location.href
        } catch (t) {
            (Se = C.createElement("a")).href = "", Se = Se.href
        }

        function Le(s) {
            return function (t, e) {
                "string" != typeof t && (e = t, t = "*");
                var i, n = 0,
                    o = t.toLowerCase().match(N) || [];
                if (T.isFunction(e))
                    for (; i = o[n++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (s[i] = s[i] || []).unshift(e)) : (s[i] = s[i] || []).push(e)
            }
        }

        function ze(e, o, s, r) {
            var a = {},
                l = e === De;

            function d(t) {
                var n;
                return a[t] = !0, T.each(e[t] || [], function (t, e) {
                    var i = e(o, s, r);
                    return "string" != typeof i || l || a[i] ? l ? !(n = i) : void 0 : (o.dataTypes.unshift(i), d(i), !1)
                }), n
            }
            return d(o.dataTypes[0]) || !a["*"] && d("*")
        }

        function Re(t, e) {
            var i, n, o = T.ajaxSettings.flatOptions || {};
            for (n in e) void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);
            return i && T.extend(!0, t, i), t
        }
        ke = Me.exec(Se.toLowerCase()) || [], T.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Se,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ke[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": $e,
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
                    "text json": T.parseJSON,
                    "text xml": T.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function (t, e) {
                return e ? Re(Re(t, T.ajaxSettings), e) : Re(T.ajaxSettings, t)
            },
            ajaxPrefilter: Le(Ie),
            ajaxTransport: Le(De),
            ajax: function (t, e) {
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var i, n, c, h, u, p, f, o, g = T.ajaxSetup({}, e),
                    m = g.context || g,
                    v = g.context && (m.nodeType || m.jquery) ? T(m) : T.event,
                    y = T.Deferred(),
                    w = T.Callbacks("once memory"),
                    b = g.statusCode || {},
                    s = {},
                    r = {},
                    x = 0,
                    a = "canceled",
                    _ = {
                        readyState: 0,
                        getResponseHeader: function (t) {
                            var e;
                            if (2 === x) {
                                if (!o)
                                    for (o = {}; e = Ae.exec(h);) o[e[1].toLowerCase()] = e[2];
                                e = o[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function () {
                            return 2 === x ? h : null
                        },
                        setRequestHeader: function (t, e) {
                            var i = t.toLowerCase();
                            return x || (t = r[i] = r[i] || t, s[t] = e), this
                        },
                        overrideMimeType: function (t) {
                            return x || (g.mimeType = t), this
                        },
                        statusCode: function (t) {
                            var e;
                            if (t)
                                if (x < 2)
                                    for (e in t) b[e] = [b[e], t[e]];
                                else _.always(t[_.status]);
                            return this
                        },
                        abort: function (t) {
                            var e = t || a;
                            return f && f.abort(e), l(0, e), this
                        }
                    };
                if (y.promise(_).complete = w.add, _.success = _.done, _.error = _.fail, g.url = ((t || g.url || Se) + "").replace(Ee, "").replace(Oe, ke[1] + "//"), g.type = e.method || e.type || g.method || g.type, g.dataTypes = T.trim(g.dataType || "*").toLowerCase().match(N) || [""], null == g.crossDomain && (i = Me.exec(g.url.toLowerCase()), g.crossDomain = !(!i || i[1] === ke[1] && i[2] === ke[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (ke[3] || ("http:" === ke[1] ? "80" : "443")))), g.data && g.processData && "string" != typeof g.data && (g.data = T.param(g.data, g.traditional)), ze(Ie, g, e, _), 2 === x) return _;
                for (n in (p = T.event && g.global) && 0 == T.active++ && T.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !Ne.test(g.type), c = g.url, g.hasContent || (g.data && (c = g.url += (Te.test(c) ? "&" : "?") + g.data, delete g.data), !1 === g.cache && (g.url = Pe.test(c) ? c.replace(Pe, "$1_=" + _e++) : c + (Te.test(c) ? "&" : "?") + "_=" + _e++)), g.ifModified && (T.lastModified[c] && _.setRequestHeader("If-Modified-Since", T.lastModified[c]), T.etag[c] && _.setRequestHeader("If-None-Match", T.etag[c])), (g.data && g.hasContent && !1 !== g.contentType || e.contentType) && _.setRequestHeader("Content-Type", g.contentType), _.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + $e + "; q=0.01" : "") : g.accepts["*"]), g.headers) _.setRequestHeader(n, g.headers[n]);
                if (g.beforeSend && (!1 === g.beforeSend.call(m, _, g) || 2 === x)) return _.abort();
                for (n in a = "abort", {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) _[n](g[n]);
                if (f = ze(De, g, e, _)) {
                    _.readyState = 1, p && v.trigger("ajaxSend", [_, g]), g.async && 0 < g.timeout && (u = setTimeout(function () {
                        _.abort("timeout")
                    }, g.timeout));
                    try {
                        x = 1, f.send(s, l)
                    } catch (t) {
                        if (!(x < 2)) throw t;
                        l(-1, t)
                    }
                } else l(-1, "No Transport");

                function l(t, e, i, n) {
                    var o, s, r, a, l, d = e;
                    2 !== x && (x = 2, u && clearTimeout(u), f = void 0, h = n || "", _.readyState = 0 < t ? 4 : 0, o = 200 <= t && t < 300 || 304 === t, i && (a = function (t, e, i) {
                        for (var n, o, s, r, a = t.contents, l = t.dataTypes;
                            "*" === l[0];) l.shift(), void 0 === o && (o = t.mimeType || e.getResponseHeader("Content-Type"));
                        if (o)
                            for (r in a)
                                if (a[r] && a[r].test(o)) {
                                    l.unshift(r);
                                    break
                                } if (l[0] in i) s = l[0];
                        else {
                            for (r in i) {
                                if (!l[0] || t.converters[r + " " + l[0]]) {
                                    s = r;
                                    break
                                }
                                n || (n = r)
                            }
                            s = s || n
                        }
                        return s ? (s !== l[0] && l.unshift(s), i[s]) : void 0
                    }(g, _, i)), a = function (t, e, i, n) {
                        var o, s, r, a, l, d = {},
                            c = t.dataTypes.slice();
                        if (c[1])
                            for (r in t.converters) d[r.toLowerCase()] = t.converters[r];
                        for (s = c.shift(); s;)
                            if (t.responseFields[s] && (i[t.responseFields[s]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = c.shift())
                                if ("*" === s) s = l;
                                else if ("*" !== l && l !== s) {
                            if (!(r = d[l + " " + s] || d["* " + s]))
                                for (o in d)
                                    if ((a = o.split(" "))[1] === s && (r = d[l + " " + a[0]] || d["* " + a[0]])) {
                                        !0 === r ? r = d[o] : !0 !== d[o] && (s = a[0], c.unshift(a[1]));
                                        break
                                    } if (!0 !== r)
                                if (r && t.throws) e = r(e);
                                else try {
                                    e = r(e)
                                } catch (t) {
                                    return {
                                        state: "parsererror",
                                        error: r ? t : "No conversion from " + l + " to " + s
                                    }
                                }
                        }
                        return {
                            state: "success",
                            data: e
                        }
                    }(g, a, _, o), o ? (g.ifModified && ((l = _.getResponseHeader("Last-Modified")) && (T.lastModified[c] = l), (l = _.getResponseHeader("etag")) && (T.etag[c] = l)), 204 === t || "HEAD" === g.type ? d = "nocontent" : 304 === t ? d = "notmodified" : (d = a.state, s = a.data, o = !(r = a.error))) : (r = d, (t || !d) && (d = "error", t < 0 && (t = 0))), _.status = t, _.statusText = (e || d) + "", o ? y.resolveWith(m, [s, d, _]) : y.rejectWith(m, [_, d, r]), _.statusCode(b), b = void 0, p && v.trigger(o ? "ajaxSuccess" : "ajaxError", [_, g, o ? s : r]), w.fireWith(m, [_, d]), p && (v.trigger("ajaxComplete", [_, g]), --T.active || T.event.trigger("ajaxStop")))
                }
                return _
            },
            getJSON: function (t, e, i) {
                return T.get(t, e, i, "json")
            },
            getScript: function (t, e) {
                return T.get(t, void 0, e, "script")
            }
        }), T.each(["get", "post"], function (t, o) {
            T[o] = function (t, e, i, n) {
                return T.isFunction(e) && (n = n || i, i = e, e = void 0), T.ajax({
                    url: t,
                    type: o,
                    dataType: n,
                    data: e,
                    success: i
                })
            }
        }), T._evalUrl = function (t) {
            return T.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            })
        }, T.fn.extend({
            wrapAll: function (e) {
                if (T.isFunction(e)) return this.each(function (t) {
                    T(this).wrapAll(e.call(this, t))
                });
                if (this[0]) {
                    var t = T(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                        for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                        return t
                    }).append(this)
                }
                return this
            },
            wrapInner: function (i) {
                return this.each(T.isFunction(i) ? function (t) {
                    T(this).wrapInner(i.call(this, t))
                } : function () {
                    var t = T(this),
                        e = t.contents();
                    e.length ? e.wrapAll(i) : t.append(i)
                })
            },
            wrap: function (e) {
                var i = T.isFunction(e);
                return this.each(function (t) {
                    T(this).wrapAll(i ? e.call(this, t) : e)
                })
            },
            unwrap: function () {
                return this.parent().each(function () {
                    T.nodeName(this, "body") || T(this).replaceWith(this.childNodes)
                }).end()
            }
        }), T.expr.filters.hidden = function (t) {
            return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !v.reliableHiddenOffsets() && "none" === (t.style && t.style.display || T.css(t, "display"))
        }, T.expr.filters.visible = function (t) {
            return !T.expr.filters.hidden(t)
        };
        var je = /%20/g,
            He = /\[\]$/,
            We = /\r?\n/g,
            Fe = /^(?:submit|button|image|reset|file)$/i,
            qe = /^(?:input|select|textarea|keygen)/i;

        function Xe(i, t, n, o) {
            var e;
            if (T.isArray(t)) T.each(t, function (t, e) {
                n || He.test(i) ? o(i, e) : Xe(i + "[" + ("object" == typeof e ? t : "") + "]", e, n, o)
            });
            else if (n || "object" !== T.type(t)) o(i, t);
            else
                for (e in t) Xe(i + "[" + e + "]", t[e], n, o)
        }
        T.param = function (t, e) {
            var i, n = [],
                o = function (t, e) {
                    e = T.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
            if (void 0 === e && (e = T.ajaxSettings && T.ajaxSettings.traditional), T.isArray(t) || t.jquery && !T.isPlainObject(t)) T.each(t, function () {
                o(this.name, this.value)
            });
            else
                for (i in t) Xe(i, t[i], e, o);
            return n.join("&").replace(je, "+")
        }, T.fn.extend({
            serialize: function () {
                return T.param(this.serializeArray())
            },
            serializeArray: function () {
                return this.map(function () {
                    var t = T.prop(this, "elements");
                    return t ? T.makeArray(t) : this
                }).filter(function () {
                    var t = this.type;
                    return this.name && !T(this).is(":disabled") && qe.test(this.nodeName) && !Fe.test(t) && (this.checked || !Y.test(t))
                }).map(function (t, e) {
                    var i = T(this).val();
                    return null == i ? null : T.isArray(i) ? T.map(i, function (t) {
                        return {
                            name: e.name,
                            value: t.replace(We, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: i.replace(We, "\r\n")
                    }
                }).get()
            }
        }), T.ajaxSettings.xhr = void 0 !== f.ActiveXObject ? function () {
            return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Ve() || function () {
                try {
                    return new f.ActiveXObject("Microsoft.XMLHTTP")
                } catch (t) {}
            }()
        } : Ve;
        var Be = 0,
            Ye = {},
            Ue = T.ajaxSettings.xhr();

        function Ve() {
            try {
                return new f.XMLHttpRequest
            } catch (t) {}
        }
        f.attachEvent && f.attachEvent("onunload", function () {
            for (var t in Ye) Ye[t](void 0, !0)
        }), v.cors = !!Ue && "withCredentials" in Ue, (Ue = v.ajax = !!Ue) && T.ajaxTransport(function (l) {
            var d;
            if (!l.crossDomain || v.cors) return {
                send: function (t, s) {
                    var e, r = l.xhr(),
                        a = ++Be;
                    if (r.open(l.type, l.url, l.async, l.username, l.password), l.xhrFields)
                        for (e in l.xhrFields) r[e] = l.xhrFields[e];
                    for (e in l.mimeType && r.overrideMimeType && r.overrideMimeType(l.mimeType), l.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest"), t) void 0 !== t[e] && r.setRequestHeader(e, t[e] + "");
                    r.send(l.hasContent && l.data || null), d = function (t, e) {
                        var i, n, o;
                        if (d && (e || 4 === r.readyState))
                            if (delete Ye[a], d = void 0, r.onreadystatechange = T.noop, e) 4 !== r.readyState && r.abort();
                            else {
                                o = {}, i = r.status, "string" == typeof r.responseText && (o.text = r.responseText);
                                try {
                                    n = r.statusText
                                } catch (t) {
                                    n = ""
                                }
                                i || !l.isLocal || l.crossDomain ? 1223 === i && (i = 204) : i = o.text ? 200 : 404
                            } o && s(i, n, o, r.getAllResponseHeaders())
                    }, l.async ? 4 === r.readyState ? setTimeout(d) : r.onreadystatechange = Ye[a] = d : d()
                },
                abort: function () {
                    d && d(void 0, !0)
                }
            }
        }), T.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function (t) {
                    return T.globalEval(t), t
                }
            }
        }), T.ajaxPrefilter("script", function (t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
        }), T.ajaxTransport("script", function (e) {
            if (e.crossDomain) {
                var n, o = C.head || T("head")[0] || C.documentElement;
                return {
                    send: function (t, i) {
                        (n = C.createElement("script")).async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (t, e) {
                            (e || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, e || i(200, "success"))
                        }, o.insertBefore(n, o.firstChild)
                    },
                    abort: function () {
                        n && n.onload(void 0, !0)
                    }
                }
            }
        });
        var Qe = [],
            Ze = /(=)\?(?=&|$)|\?\?/;
        T.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var t = Qe.pop() || T.expando + "_" + _e++;
                return this[t] = !0, t
            }
        }), T.ajaxPrefilter("json jsonp", function (t, e, i) {
            var n, o, s, r = !1 !== t.jsonp && (Ze.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ze.test(t.data) && "data");
            return r || "jsonp" === t.dataTypes[0] ? (n = t.jsonpCallback = T.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, r ? t[r] = t[r].replace(Ze, "$1" + n) : !1 !== t.jsonp && (t.url += (Te.test(t.url) ? "&" : "?") + t.jsonp + "=" + n), t.converters["script json"] = function () {
                return s || T.error(n + " was not called"), s[0]
            }, t.dataTypes[0] = "json", o = f[n], f[n] = function () {
                s = arguments
            }, i.always(function () {
                f[n] = o, t[n] && (t.jsonpCallback = e.jsonpCallback, Qe.push(n)), s && T.isFunction(o) && o(s[0]), s = o = void 0
            }), "script") : void 0
        }), T.parseHTML = function (t, e, i) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (i = e, e = !1), e = e || C;
            var n = w.exec(t),
                o = !i && [];
            return n ? [e.createElement(n[1])] : (n = T.buildFragment([t], e, o), o && o.length && T(o).remove(), T.merge([], n.childNodes))
        };
        var Ge = T.fn.load;
        T.fn.load = function (t, e, i) {
            if ("string" != typeof t && Ge) return Ge.apply(this, arguments);
            var n, o, s, r = this,
                a = t.indexOf(" ");
            return 0 <= a && (n = T.trim(t.slice(a, t.length)), t = t.slice(0, a)), T.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (s = "POST"), 0 < r.length && T.ajax({
                url: t,
                type: s,
                dataType: "html",
                data: e
            }).done(function (t) {
                o = arguments, r.html(n ? T("<div>").append(T.parseHTML(t)).find(n) : t)
            }).complete(i && function (t, e) {
                r.each(i, o || [t.responseText, e, t])
            }), this
        }, T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
            T.fn[e] = function (t) {
                return this.on(e, t)
            }
        }), T.expr.filters.animated = function (e) {
            return T.grep(T.timers, function (t) {
                return e === t.elem
            }).length
        };
        var Je = f.document.documentElement;

        function Ke(t) {
            return T.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
        }
        T.offset = {
            setOffset: function (t, e, i) {
                var n, o, s, r, a, l, d = T.css(t, "position"),
                    c = T(t),
                    h = {};
                "static" === d && (t.style.position = "relative"), a = c.offset(), s = T.css(t, "top"), l = T.css(t, "left"), ("absolute" === d || "fixed" === d) && -1 < T.inArray("auto", [s, l]) ? (r = (n = c.position()).top, o = n.left) : (r = parseFloat(s) || 0, o = parseFloat(l) || 0), T.isFunction(e) && (e = e.call(t, i, a)), null != e.top && (h.top = e.top - a.top + r), null != e.left && (h.left = e.left - a.left + o), "using" in e ? e.using.call(t, h) : c.css(h)
            }
        }, T.fn.extend({
            offset: function (e) {
                if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                    T.offset.setOffset(this, e, t)
                });
                var t, i, n = {
                        top: 0,
                        left: 0
                    },
                    o = this[0],
                    s = o && o.ownerDocument;
                return s ? (t = s.documentElement, T.contains(t, o) ? (typeof o.getBoundingClientRect !== $ && (n = o.getBoundingClientRect()), i = Ke(s), {
                    top: n.top + (i.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                    left: n.left + (i.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                }) : n) : void 0
            },
            position: function () {
                if (this[0]) {
                    var t, e, i = {
                            top: 0,
                            left: 0
                        },
                        n = this[0];
                    return "fixed" === T.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), T.nodeName(t[0], "html") || (i = t.offset()), i.top += T.css(t[0], "borderTopWidth", !0), i.left += T.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - i.top - T.css(n, "marginTop", !0),
                        left: e.left - i.left - T.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var t = this.offsetParent || Je; t && !T.nodeName(t, "html") && "static" === T.css(t, "position");) t = t.offsetParent;
                    return t || Je
                })
            }
        }), T.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function (e, o) {
            var s = /Y/.test(o);
            T.fn[e] = function (t) {
                return B(this, function (t, e, i) {
                    var n = Ke(t);
                    return void 0 === i ? n ? o in n ? n[o] : n.document.documentElement[e] : t[e] : void(n ? n.scrollTo(s ? T(n).scrollLeft() : i, s ? i : T(n).scrollTop()) : t[e] = i)
                }, e, t, arguments.length, null)
            }
        }), T.each(["top", "left"], function (t, i) {
            T.cssHooks[i] = $t(v.pixelPosition, function (t, e) {
                return e ? (e = Ot(t, i), It.test(e) ? T(t).position()[i] + "px" : e) : void 0
            })
        }), T.each({
            Height: "height",
            Width: "width"
        }, function (s, r) {
            T.each({
                padding: "inner" + s,
                content: r,
                "": "outer" + s
            }, function (n, t) {
                T.fn[t] = function (t, e) {
                    var i = arguments.length && (n || "boolean" != typeof t),
                        o = n || (!0 === t || !0 === e ? "margin" : "border");
                    return B(this, function (t, e, i) {
                        var n;
                        return T.isWindow(t) ? t.document.documentElement["client" + s] : 9 === t.nodeType ? (n = t.documentElement, Math.max(t.body["scroll" + s], n["scroll" + s], t.body["offset" + s], n["offset" + s], n["client" + s])) : void 0 === i ? T.css(t, e, o) : T.style(t, e, i, o)
                    }, r, i ? t : void 0, i, null)
                }
            })
        }), T.fn.size = function () {
            return this.length
        }, T.fn.andSelf = T.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
            return T
        });
        var ti = f.jQuery,
            ei = f.$;
        return T.noConflict = function (t) {
            return f.$ === T && (f.$ = ei), t && f.jQuery === T && (f.jQuery = ti), T
        }, typeof t === $ && (f.jQuery = f.$ = T), T
    }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");

function revslider_showDoubleJqueryError(t) {
    var e = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
    e += "<br> This includes make eliminates the revolution slider libraries, and make it not work.", e += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.", e = "<span style='font-size:16px;color:#BC0C06;'>" + (e += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.") + "</span>", jQuery(t).show().html(e)
}! function (t) {
    "use strict";
    var e = jQuery.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(),
function (n) {
    "use strict";
    n.fn.emulateTransitionEnd = function (t) {
        var e = !1,
            i = this;
        n(this).one("bsTransitionEnd", function () {
            e = !0
        });
        return setTimeout(function () {
            e || n(i).trigger(n.support.transition.end)
        }, t), this
    }, n(function () {
        n.support.transition = function () {
            var t = document.createElement("bootstrap"),
                e = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var i in e)
                if (void 0 !== t.style[i]) return {
                    end: e[i]
                };
            return !1
        }(), n.support.transition && (n.event.special.bsTransitionEnd = {
            bindType: n.support.transition.end,
            delegateType: n.support.transition.end,
            handle: function (t) {
                return n(t.target).is(this) ? t.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery),
function (s) {
    "use strict";
    var e = '[data-dismiss="alert"]',
        r = function (t) {
            s(t).on("click", e, this.close)
        };
    r.VERSION = "3.3.4", r.TRANSITION_DURATION = 150, r.prototype.close = function (t) {
        function e() {
            o.detach().trigger("closed.bs.alert").remove()
        }
        var i = s(this),
            n = i.attr("data-target");
        n || (n = (n = i.attr("href")) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var o = s(n);
        t && t.preventDefault(), o.length || (o = i.closest(".alert")), o.trigger(t = s.Event("close.bs.alert")), t.isDefaultPrevented() || (o.removeClass("in"), s.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", e).emulateTransitionEnd(r.TRANSITION_DURATION) : e())
    };
    var t = s.fn.alert;
    s.fn.alert = function (i) {
        return this.each(function () {
            var t = s(this),
                e = t.data("bs.alert");
            e || t.data("bs.alert", e = new r(this)), "string" == typeof i && e[i].call(t)
        })
    }, s.fn.alert.Constructor = r, s.fn.alert.noConflict = function () {
        return s.fn.alert = t, this
    }, s(document).on("click.bs.alert.data-api", e, r.prototype.close)
}(jQuery),
function (s) {
    "use strict";

    function i(n) {
        return this.each(function () {
            var t = s(this),
                e = t.data("bs.button"),
                i = "object" == typeof n && n;
            e || t.data("bs.button", e = new o(this, i)), "toggle" == n ? e.toggle() : n && e.setState(n)
        })
    }
    var o = function (t, e) {
        this.$element = s(t), this.options = s.extend({}, o.DEFAULTS, e), this.isLoading = !1
    };
    o.VERSION = "3.3.4", o.DEFAULTS = {
        loadingText: "loading..."
    }, o.prototype.setState = function (t) {
        var e = "disabled",
            i = this.$element,
            n = i.is("input") ? "val" : "html",
            o = i.data();
        t += "Text", null == o.resetText && i.data("resetText", i[n]()), setTimeout(s.proxy(function () {
            i[n](null == o[t] ? this.options[t] : o[t]), "loadingText" == t ? (this.isLoading = !0, i.addClass(e).attr(e, e)) : this.isLoading && (this.isLoading = !1, i.removeClass(e).removeAttr(e))
        }, this), 0)
    }, o.prototype.toggle = function () {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var i = this.$element.find("input");
            "radio" == i.prop("type") && (i.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")), t && i.prop("checked", !this.$element.hasClass("active")).trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
        t && this.$element.toggleClass("active")
    };
    var t = s.fn.button;
    s.fn.button = i, s.fn.button.Constructor = o, s.fn.button.noConflict = function () {
        return s.fn.button = t, this
    }, s(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (t) {
        var e = s(t.target);
        e.hasClass("btn") || (e = e.closest(".btn")), i.call(e, "toggle"), t.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (t) {
        s(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
    })
}(jQuery),
function (h) {
    "use strict";

    function r(o) {
        return this.each(function () {
            var t = h(this),
                e = t.data("bs.carousel"),
                i = h.extend({}, u.DEFAULTS, t.data(), "object" == typeof o && o),
                n = "string" == typeof o ? o : i.slide;
            e || t.data("bs.carousel", e = new u(this, i)), "number" == typeof o ? e.to(o) : n ? e[n]() : i.interval && e.pause().cycle()
        })
    }
    var u = function (t, e) {
        this.$element = h(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = e, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", h.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", h.proxy(this.pause, this)).on("mouseleave.bs.carousel", h.proxy(this.cycle, this))
    };
    u.VERSION = "3.3.4", u.TRANSITION_DURATION = 600, u.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, u.prototype.keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, u.prototype.cycle = function (t) {
        return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(h.proxy(this.next, this), this.options.interval)), this
    }, u.prototype.getItemIndex = function (t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, u.prototype.getItemForDirection = function (t, e) {
        var i = this.getItemIndex(e);
        if (("prev" == t && 0 === i || "next" == t && i == this.$items.length - 1) && !this.options.wrap) return e;
        var n = (i + ("prev" == t ? -1 : 1)) % this.$items.length;
        return this.$items.eq(n)
    }, u.prototype.to = function (t) {
        var e = this,
            i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return t > this.$items.length - 1 || t < 0 ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
            e.to(t)
        }) : i == t ? this.pause().cycle() : this.slide(i < t ? "next" : "prev", this.$items.eq(t))
    }, u.prototype.pause = function (t) {
        return t || (this.paused = !0), this.$element.find(".next, .prev").length && h.support.transition && (this.$element.trigger(h.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, u.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next")
    }, u.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev")
    }, u.prototype.slide = function (t, e) {
        var i = this.$element.find(".item.active"),
            n = e || this.getItemForDirection(t, i),
            o = this.interval,
            s = "next" == t ? "left" : "right",
            r = this;
        if (n.hasClass("active")) return this.sliding = !1;
        var a = n[0],
            l = h.Event("slide.bs.carousel", {
                relatedTarget: a,
                direction: s
            });
        if (this.$element.trigger(l), !l.isDefaultPrevented()) {
            if (this.sliding = !0, o && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var d = h(this.$indicators.children()[this.getItemIndex(n)]);
                d && d.addClass("active")
            }
            var c = h.Event("slid.bs.carousel", {
                relatedTarget: a,
                direction: s
            });
            return h.support.transition && this.$element.hasClass("slide") ? (n.addClass(t), n[0].offsetWidth, i.addClass(s), n.addClass(s), i.one("bsTransitionEnd", function () {
                n.removeClass([t, s].join(" ")).addClass("active"), i.removeClass(["active", s].join(" ")), r.sliding = !1, setTimeout(function () {
                    r.$element.trigger(c)
                }, 0)
            }).emulateTransitionEnd(u.TRANSITION_DURATION)) : (i.removeClass("active"), n.addClass("active"), this.sliding = !1, this.$element.trigger(c)), o && this.cycle(), this
        }
    };
    var t = h.fn.carousel;
    h.fn.carousel = r, h.fn.carousel.Constructor = u, h.fn.carousel.noConflict = function () {
        return h.fn.carousel = t, this
    };
    var e = function (t) {
        var e, i = h(this),
            n = h(i.attr("data-target") || (e = i.attr("href")) && e.replace(/.*(?=#[^\s]+$)/, ""));
        if (n.hasClass("carousel")) {
            var o = h.extend({}, n.data(), i.data()),
                s = i.attr("data-slide-to");
            s && (o.interval = !1), r.call(n, o), s && n.data("bs.carousel").to(s), t.preventDefault()
        }
    };
    h(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), h(window).on("load", function () {
        h('[data-ride="carousel"]').each(function () {
            var t = h(this);
            r.call(t, t.data())
        })
    })
}(jQuery),
function (r) {
    "use strict";

    function o(t) {
        var e, i = t.attr("data-target") || (e = t.attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "");
        return r(i)
    }

    function a(n) {
        return this.each(function () {
            var t = r(this),
                e = t.data("bs.collapse"),
                i = r.extend({}, l.DEFAULTS, t.data(), "object" == typeof n && n);
            !e && i.toggle && /show|hide/.test(n) && (i.toggle = !1), e || t.data("bs.collapse", e = new l(this, i)), "string" == typeof n && e[n]()
        })
    }
    var l = function (t, e) {
        this.$element = r(t), this.options = r.extend({}, l.DEFAULTS, e), this.$trigger = r('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    l.VERSION = "3.3.4", l.TRANSITION_DURATION = 350, l.DEFAULTS = {
        toggle: !0
    }, l.prototype.dimension = function () {
        return this.$element.hasClass("width") ? "width" : "height"
    }, l.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var t, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(e && e.length && ((t = e.data("bs.collapse")) && t.transitioning))) {
                var i = r.Event("show.bs.collapse");
                if (this.$element.trigger(i), !i.isDefaultPrevented()) {
                    e && e.length && (a.call(e, "hide"), t || e.data("bs.collapse", null));
                    var n = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[n](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var o = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[n](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!r.support.transition) return o.call(this);
                    var s = r.camelCase(["scroll", n].join("-"));
                    this.$element.one("bsTransitionEnd", r.proxy(o, this)).emulateTransitionEnd(l.TRANSITION_DURATION)[n](this.$element[0][s])
                }
            }
        }
    }, l.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var t = r.Event("hide.bs.collapse");
            if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                var e = this.dimension();
                this.$element[e](this.$element[e]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var i = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return r.support.transition ? void this.$element[e](0).one("bsTransitionEnd", r.proxy(i, this)).emulateTransitionEnd(l.TRANSITION_DURATION) : i.call(this)
            }
        }
    }, l.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, l.prototype.getParent = function () {
        return r(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(r.proxy(function (t, e) {
            var i = r(e);
            this.addAriaAndCollapsedClass(o(i), i)
        }, this)).end()
    }, l.prototype.addAriaAndCollapsedClass = function (t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    var t = r.fn.collapse;
    r.fn.collapse = a, r.fn.collapse.Constructor = l, r.fn.collapse.noConflict = function () {
        return r.fn.collapse = t, this
    }, r(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (t) {
        var e = r(this);
        e.attr("data-target") || t.preventDefault();
        var i = o(e),
            n = i.data("bs.collapse") ? "toggle" : e.data();
        a.call(i, n)
    })
}(jQuery),
function (a) {
    "use strict";

    function s(n) {
        n && 3 === n.which || (a(".dropdown-backdrop").remove(), a(d).each(function () {
            var t = a(this),
                e = l(t),
                i = {
                    relatedTarget: this
                };
            e.hasClass("open") && (e.trigger(n = a.Event("hide.bs.dropdown", i)), n.isDefaultPrevented() || (t.attr("aria-expanded", "false"), e.removeClass("open").trigger("hidden.bs.dropdown", i)))
        }))
    }

    function l(t) {
        var e = t.attr("data-target");
        e || (e = (e = t.attr("href")) && /#[A-Za-z]/.test(e) && e.replace(/.*(?=#[^\s]*$)/, ""));
        var i = e && a(e);
        return i && i.length ? i : t.parent()
    }
    var d = '[data-toggle="dropdown"]',
        n = function (t) {
            a(t).on("click.bs.dropdown", this.toggle)
        };
    n.VERSION = "3.3.4", n.prototype.toggle = function (t) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var i = l(e),
                n = i.hasClass("open");
            if (s(), !n) {
                "ontouchstart" in document.documentElement && !i.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", s);
                var o = {
                    relatedTarget: this
                };
                if (i.trigger(t = a.Event("show.bs.dropdown", o)), t.isDefaultPrevented()) return;
                e.trigger("focus").attr("aria-expanded", "true"), i.toggleClass("open").trigger("shown.bs.dropdown", o)
            }
            return !1
        }
    }, n.prototype.keydown = function (t) {
        if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName)) {
            var e = a(this);
            if (t.preventDefault(), t.stopPropagation(), !e.is(".disabled, :disabled")) {
                var i = l(e),
                    n = i.hasClass("open");
                if (!n && 27 != t.which || n && 27 == t.which) return 27 == t.which && i.find(d).trigger("focus"), e.trigger("click");
                var o = " li:not(.disabled):visible a",
                    s = i.find('[role="menu"]' + o + ', [role="listbox"]' + o);
                if (s.length) {
                    var r = s.index(t.target);
                    38 == t.which && 0 < r && r--, 40 == t.which && r < s.length - 1 && r++, ~r || (r = 0), s.eq(r).trigger("focus")
                }
            }
        }
    };
    var t = a.fn.dropdown;
    a.fn.dropdown = function (i) {
        return this.each(function () {
            var t = a(this),
                e = t.data("bs.dropdown");
            e || t.data("bs.dropdown", e = new n(this)), "string" == typeof i && e[i].call(t)
        })
    }, a.fn.dropdown.Constructor = n, a.fn.dropdown.noConflict = function () {
        return a.fn.dropdown = t, this
    }, a(document).on("click.bs.dropdown.data-api", s).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", d, n.prototype.toggle).on("keydown.bs.dropdown.data-api", d, n.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', n.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', n.prototype.keydown)
}(jQuery),
function (s) {
    "use strict";

    function r(n, o) {
        return this.each(function () {
            var t = s(this),
                e = t.data("bs.modal"),
                i = s.extend({}, a.DEFAULTS, t.data(), "object" == typeof n && n);
            e || t.data("bs.modal", e = new a(this, i)), "string" == typeof n ? e[n](o) : i.show && e.show(o)
        })
    }
    var a = function (t, e) {
        this.options = e, this.$body = s(document.body), this.$element = s(t), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, s.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    a.VERSION = "3.3.4", a.TRANSITION_DURATION = 300, a.BACKDROP_TRANSITION_DURATION = 150, a.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, a.prototype.toggle = function (t) {
        return this.isShown ? this.hide() : this.show(t)
    }, a.prototype.show = function (i) {
        var n = this,
            t = s.Event("show.bs.modal", {
                relatedTarget: i
            });
        this.$element.trigger(t), this.isShown || t.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', s.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            n.$element.one("mouseup.dismiss.bs.modal", function (t) {
                s(t.target).is(n.$element) && (n.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function () {
            var t = s.support.transition && n.$element.hasClass("fade");
            n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), n.adjustDialog(), t && n.$element[0].offsetWidth, n.$element.addClass("in").attr("aria-hidden", !1), n.enforceFocus();
            var e = s.Event("shown.bs.modal", {
                relatedTarget: i
            });
            t ? n.$dialog.one("bsTransitionEnd", function () {
                n.$element.trigger("focus").trigger(e)
            }).emulateTransitionEnd(a.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(e)
        }))
    }, a.prototype.hide = function (t) {
        t && t.preventDefault(), t = s.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), s(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), s.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", s.proxy(this.hideModal, this)).emulateTransitionEnd(a.TRANSITION_DURATION) : this.hideModal())
    }, a.prototype.enforceFocus = function () {
        s(document).off("focusin.bs.modal").on("focusin.bs.modal", s.proxy(function (t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, a.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", s.proxy(function (t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, a.prototype.resize = function () {
        this.isShown ? s(window).on("resize.bs.modal", s.proxy(this.handleUpdate, this)) : s(window).off("resize.bs.modal")
    }, a.prototype.hideModal = function () {
        var t = this;
        this.$element.hide(), this.backdrop(function () {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, a.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, a.prototype.backdrop = function (t) {
        var e = this,
            i = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var n = s.support.transition && i;
            if (this.$backdrop = s('<div class="modal-backdrop ' + i + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", s.proxy(function (t) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), n && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
            n ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(a.BACKDROP_TRANSITION_DURATION) : t()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var o = function () {
                e.removeBackdrop(), t && t()
            };
            s.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", o).emulateTransitionEnd(a.BACKDROP_TRANSITION_DURATION) : o()
        } else t && t()
    }, a.prototype.handleUpdate = function () {
        this.adjustDialog()
    }, a.prototype.adjustDialog = function () {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, a.prototype.resetAdjustments = function () {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, a.prototype.checkScrollbar = function () {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, a.prototype.setScrollbar = function () {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, a.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
    }, a.prototype.measureScrollbar = function () {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var t = s.fn.modal;
    s.fn.modal = r, s.fn.modal.Constructor = a, s.fn.modal.noConflict = function () {
        return s.fn.modal = t, this
    }, s(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (t) {
        var e = s(this),
            i = e.attr("href"),
            n = s(e.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")),
            o = n.data("bs.modal") ? "toggle" : s.extend({
                remote: !/#/.test(i) && i
            }, n.data(), e.data());
        e.is("a") && t.preventDefault(), n.one("show.bs.modal", function (t) {
            t.isDefaultPrevented() || n.one("hidden.bs.modal", function () {
                e.is(":visible") && e.trigger("focus")
            })
        }), r.call(n, o, this)
    })
}(jQuery),
function (m) {
    "use strict";
    var v = function (t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.init("tooltip", t, e)
    };
    v.VERSION = "3.3.4", v.TRANSITION_DURATION = 150, v.DEFAULTS = {
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
    }, v.prototype.init = function (t, e, i) {
        if (this.enabled = !0, this.type = t, this.$element = m(e), this.options = this.getOptions(i), this.$viewport = this.options.viewport && m(this.options.viewport.selector || this.options.viewport), this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var n = this.options.trigger.split(" "), o = n.length; o--;) {
            var s = n[o];
            if ("click" == s) this.$element.on("click." + this.type, this.options.selector, m.proxy(this.toggle, this));
            else if ("manual" != s) {
                var r = "hover" == s ? "mouseenter" : "focusin",
                    a = "hover" == s ? "mouseleave" : "focusout";
                this.$element.on(r + "." + this.type, this.options.selector, m.proxy(this.enter, this)), this.$element.on(a + "." + this.type, this.options.selector, m.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = m.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, v.prototype.getDefaults = function () {
        return v.DEFAULTS
    }, v.prototype.getOptions = function (t) {
        return (t = m.extend({}, this.getDefaults(), this.$element.data(), t)).delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), t
    }, v.prototype.getDelegateOptions = function () {
        var i = {},
            n = this.getDefaults();
        return this._options && m.each(this._options, function (t, e) {
            n[t] != e && (i[t] = e)
        }), i
    }, v.prototype.enter = function (t) {
        var e = t instanceof this.constructor ? t : m(t.currentTarget).data("bs." + this.type);
        return e && e.$tip && e.$tip.is(":visible") ? void(e.hoverState = "in") : (e || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), m(t.currentTarget).data("bs." + this.type, e)), clearTimeout(e.timeout), e.hoverState = "in", e.options.delay && e.options.delay.show ? void(e.timeout = setTimeout(function () {
            "in" == e.hoverState && e.show()
        }, e.options.delay.show)) : e.show())
    }, v.prototype.leave = function (t) {
        var e = t instanceof this.constructor ? t : m(t.currentTarget).data("bs." + this.type);
        return e || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), m(t.currentTarget).data("bs." + this.type, e)), clearTimeout(e.timeout), e.hoverState = "out", e.options.delay && e.options.delay.hide ? void(e.timeout = setTimeout(function () {
            "out" == e.hoverState && e.hide()
        }, e.options.delay.hide)) : e.hide()
    }, v.prototype.show = function () {
        var t = m.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(t);
            var e = m.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (t.isDefaultPrevented() || !e) return;
            var i = this,
                n = this.tip(),
                o = this.getUID(this.type);
            this.setContent(), n.attr("id", o), this.$element.attr("aria-describedby", o), this.options.animation && n.addClass("fade");
            var s = "function" == typeof this.options.placement ? this.options.placement.call(this, n[0], this.$element[0]) : this.options.placement,
                r = /\s?auto?\s?/i,
                a = r.test(s);
            a && (s = s.replace(r, "") || "top"), n.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(s).data("bs." + this.type, this), this.options.container ? n.appendTo(this.options.container) : n.insertAfter(this.$element);
            var l = this.getPosition(),
                d = n[0].offsetWidth,
                c = n[0].offsetHeight;
            if (a) {
                var h = s,
                    u = this.options.container ? m(this.options.container) : this.$element.parent(),
                    p = this.getPosition(u);
                s = "bottom" == s && l.bottom + c > p.bottom ? "top" : "top" == s && l.top - c < p.top ? "bottom" : "right" == s && l.right + d > p.width ? "left" : "left" == s && l.left - d < p.left ? "right" : s, n.removeClass(h).addClass(s)
            }
            var f = this.getCalculatedOffset(s, l, d, c);
            this.applyPlacement(f, s);
            var g = function () {
                var t = i.hoverState;
                i.$element.trigger("shown.bs." + i.type), i.hoverState = null, "out" == t && i.leave(i)
            };
            m.support.transition && this.$tip.hasClass("fade") ? n.one("bsTransitionEnd", g).emulateTransitionEnd(v.TRANSITION_DURATION) : g()
        }
    }, v.prototype.applyPlacement = function (t, e) {
        var i = this.tip(),
            n = i[0].offsetWidth,
            o = i[0].offsetHeight,
            s = parseInt(i.css("margin-top"), 10),
            r = parseInt(i.css("margin-left"), 10);
        isNaN(s) && (s = 0), isNaN(r) && (r = 0), t.top = t.top + s, t.left = t.left + r, m.offset.setOffset(i[0], m.extend({
            using: function (t) {
                i.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, t), 0), i.addClass("in");
        var a = i[0].offsetWidth,
            l = i[0].offsetHeight;
        "top" == e && l != o && (t.top = t.top + o - l);
        var d = this.getViewportAdjustedDelta(e, t, a, l);
        d.left ? t.left += d.left : t.top += d.top;
        var c = /top|bottom/.test(e),
            h = c ? 2 * d.left - n + a : 2 * d.top - o + l,
            u = c ? "offsetWidth" : "offsetHeight";
        i.offset(t), this.replaceArrow(h, i[0][u], c)
    }, v.prototype.replaceArrow = function (t, e, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
    }, v.prototype.setContent = function () {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, v.prototype.hide = function (t) {
        function e() {
            "in" != i.hoverState && n.detach(), i.$element.removeAttr("aria-describedby").trigger("hidden.bs." + i.type), t && t()
        }
        var i = this,
            n = m(this.$tip),
            o = m.Event("hide.bs." + this.type);
        return this.$element.trigger(o), o.isDefaultPrevented() ? void 0 : (n.removeClass("in"), m.support.transition && n.hasClass("fade") ? n.one("bsTransitionEnd", e).emulateTransitionEnd(v.TRANSITION_DURATION) : e(), this.hoverState = null, this)
    }, v.prototype.fixTitle = function () {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, v.prototype.hasContent = function () {
        return this.getTitle()
    }, v.prototype.getPosition = function (t) {
        var e = (t = t || this.$element)[0],
            i = "BODY" == e.tagName,
            n = e.getBoundingClientRect();
        null == n.width && (n = m.extend({}, n, {
            width: n.right - n.left,
            height: n.bottom - n.top
        }));
        var o = i ? {
                top: 0,
                left: 0
            } : t.offset(),
            s = {
                scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
            },
            r = i ? {
                width: m(window).width(),
                height: m(window).height()
            } : null;
        return m.extend({}, n, s, r, o)
    }, v.prototype.getCalculatedOffset = function (t, e, i, n) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - n,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - n / 2,
            left: e.left - i
        } : {
            top: e.top + e.height / 2 - n / 2,
            left: e.left + e.width
        }
    }, v.prototype.getViewportAdjustedDelta = function (t, e, i, n) {
        var o = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return o;
        var s = this.options.viewport && this.options.viewport.padding || 0,
            r = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - s - r.scroll,
                l = e.top + s - r.scroll + n;
            a < r.top ? o.top = r.top - a : l > r.top + r.height && (o.top = r.top + r.height - l)
        } else {
            var d = e.left - s,
                c = e.left + s + i;
            d < r.left ? o.left = r.left - d : c > r.width && (o.left = r.left + r.width - c)
        }
        return o
    }, v.prototype.getTitle = function () {
        var t = this.$element,
            e = this.options;
        return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
    }, v.prototype.getUID = function (t) {
        for (; t += ~~(1e6 * Math.random()), document.getElementById(t););
        return t
    }, v.prototype.tip = function () {
        return this.$tip = this.$tip || m(this.options.template)
    }, v.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, v.prototype.enable = function () {
        this.enabled = !0
    }, v.prototype.disable = function () {
        this.enabled = !1
    }, v.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, v.prototype.toggle = function (t) {
        var e = this;
        t && ((e = m(t.currentTarget).data("bs." + this.type)) || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), m(t.currentTarget).data("bs." + this.type, e))), e.tip().hasClass("in") ? e.leave(e) : e.enter(e)
    }, v.prototype.destroy = function () {
        var t = this;
        clearTimeout(this.timeout), this.hide(function () {
            t.$element.off("." + t.type).removeData("bs." + t.type)
        })
    };
    var t = m.fn.tooltip;
    m.fn.tooltip = function (n) {
        return this.each(function () {
            var t = m(this),
                e = t.data("bs.tooltip"),
                i = "object" == typeof n && n;
            (e || !/destroy|hide/.test(n)) && (e || t.data("bs.tooltip", e = new v(this, i)), "string" == typeof n && e[n]())
        })
    }, m.fn.tooltip.Constructor = v, m.fn.tooltip.noConflict = function () {
        return m.fn.tooltip = t, this
    }
}(jQuery),
function (o) {
    "use strict";
    var s = function (t, e) {
        this.init("popover", t, e)
    };
    if (!o.fn.tooltip) throw new Error("Popover requires tooltip.js");
    s.VERSION = "3.3.4", s.DEFAULTS = o.extend({}, o.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), ((s.prototype = o.extend({}, o.fn.tooltip.Constructor.prototype)).constructor = s).prototype.getDefaults = function () {
        return s.DEFAULTS
    }, s.prototype.setContent = function () {
        var t = this.tip(),
            e = this.getTitle(),
            i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, s.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, s.prototype.getContent = function () {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, s.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var t = o.fn.popover;
    o.fn.popover = function (n) {
        return this.each(function () {
            var t = o(this),
                e = t.data("bs.popover"),
                i = "object" == typeof n && n;
            (e || !/destroy|hide/.test(n)) && (e || t.data("bs.popover", e = new s(this, i)), "string" == typeof n && e[n]())
        })
    }, o.fn.popover.Constructor = s, o.fn.popover.noConflict = function () {
        return o.fn.popover = t, this
    }
}(jQuery),
function (s) {
    "use strict";

    function o(t, e) {
        this.$body = s(document.body), this.$scrollElement = s(s(t).is(document.body) ? window : t), this.options = s.extend({}, o.DEFAULTS, e), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", s.proxy(this.process, this)), this.refresh(), this.process()
    }

    function e(n) {
        return this.each(function () {
            var t = s(this),
                e = t.data("bs.scrollspy"),
                i = "object" == typeof n && n;
            e || t.data("bs.scrollspy", e = new o(this, i)), "string" == typeof n && e[n]()
        })
    }
    o.VERSION = "3.3.4", o.DEFAULTS = {
        offset: 10
    }, o.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, o.prototype.refresh = function () {
        var t = this,
            n = "offset",
            o = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), s.isWindow(this.$scrollElement[0]) || (n = "position", o = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
            var t = s(this),
                e = t.data("target") || t.attr("href"),
                i = /^#./.test(e) && s(e);
            return i && i.length && i.is(":visible") && [
                [i[n]().top + o, e]
            ] || null
        }).sort(function (t, e) {
            return t[0] - e[0]
        }).each(function () {
            t.offsets.push(this[0]), t.targets.push(this[1])
        })
    }, o.prototype.process = function () {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            i = this.getScrollHeight(),
            n = this.options.offset + i - this.$scrollElement.height(),
            o = this.offsets,
            s = this.targets,
            r = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), n <= e) return r != (t = s[s.length - 1]) && this.activate(t);
        if (r && e < o[0]) return this.activeTarget = null, this.clear();
        for (t = o.length; t--;) r != s[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(s[t])
    }, o.prototype.activate = function (t) {
        this.activeTarget = t, this.clear();
        var e = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
            i = s(e).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    }, o.prototype.clear = function () {
        s(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var t = s.fn.scrollspy;
    s.fn.scrollspy = e, s.fn.scrollspy.Constructor = o, s.fn.scrollspy.noConflict = function () {
        return s.fn.scrollspy = t, this
    }, s(window).on("load.bs.scrollspy.data-api", function () {
        s('[data-spy="scroll"]').each(function () {
            var t = s(this);
            e.call(t, t.data())
        })
    })
}(jQuery),
function (a) {
    "use strict";

    function e(i) {
        return this.each(function () {
            var t = a(this),
                e = t.data("bs.tab");
            e || t.data("bs.tab", e = new r(this)), "string" == typeof i && e[i]()
        })
    }
    var r = function (t) {
        this.element = a(t)
    };
    r.VERSION = "3.3.4", r.TRANSITION_DURATION = 150, r.prototype.show = function () {
        var t = this.element,
            e = t.closest("ul:not(.dropdown-menu)"),
            i = t.data("target");
        if (i || (i = (i = t.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var n = e.find(".active:last a"),
                o = a.Event("hide.bs.tab", {
                    relatedTarget: t[0]
                }),
                s = a.Event("show.bs.tab", {
                    relatedTarget: n[0]
                });
            if (n.trigger(o), t.trigger(s), !s.isDefaultPrevented() && !o.isDefaultPrevented()) {
                var r = a(i);
                this.activate(t.closest("li"), e), this.activate(r, r.parent(), function () {
                    n.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: t[0]
                    }), t.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: n[0]
                    })
                })
            }
        }
    }, r.prototype.activate = function (t, e, i) {
        function n() {
            o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), s ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), i && i()
        }
        var o = e.find("> .active"),
            s = i && a.support.transition && (o.length && o.hasClass("fade") || !!e.find("> .fade").length);
        o.length && s ? o.one("bsTransitionEnd", n).emulateTransitionEnd(r.TRANSITION_DURATION) : n(), o.removeClass("in")
    };
    var t = a.fn.tab;
    a.fn.tab = e, a.fn.tab.Constructor = r, a.fn.tab.noConflict = function () {
        return a.fn.tab = t, this
    };
    var i = function (t) {
        t.preventDefault(), e.call(a(this), "show")
    };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
}(jQuery),
function (l) {
    "use strict";

    function i(n) {
        return this.each(function () {
            var t = l(this),
                e = t.data("bs.affix"),
                i = "object" == typeof n && n;
            e || t.data("bs.affix", e = new d(this, i)), "string" == typeof n && e[n]()
        })
    }
    var d = function (t, e) {
        this.options = l.extend({}, d.DEFAULTS, e), this.$target = l(this.options.target).on("scroll.bs.affix.data-api", l.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", l.proxy(this.checkPositionWithEventLoop, this)), this.$element = l(t), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    d.VERSION = "3.3.4", d.RESET = "affix affix-top affix-bottom", d.DEFAULTS = {
        offset: 0,
        target: window
    }, d.prototype.getState = function (t, e, i, n) {
        var o = this.$target.scrollTop(),
            s = this.$element.offset(),
            r = this.$target.height();
        if (null != i && "top" == this.affixed) return o < i && "top";
        if ("bottom" == this.affixed) return null != i ? !(o + this.unpin <= s.top) && "bottom" : !(o + r <= t - n) && "bottom";
        var a = null == this.affixed,
            l = a ? o : s.top;
        return null != i && o <= i ? "top" : null != n && t - n <= l + (a ? r : e) && "bottom"
    }, d.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(d.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, d.prototype.checkPositionWithEventLoop = function () {
        setTimeout(l.proxy(this.checkPosition, this), 1)
    }, d.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var t = this.$element.height(),
                e = this.options.offset,
                i = e.top,
                n = e.bottom,
                o = l(document.body).height();
            "object" != typeof e && (n = i = e), "function" == typeof i && (i = e.top(this.$element)), "function" == typeof n && (n = e.bottom(this.$element));
            var s = this.getState(o, t, i, n);
            if (this.affixed != s) {
                null != this.unpin && this.$element.css("top", "");
                var r = "affix" + (s ? "-" + s : ""),
                    a = l.Event(r + ".bs.affix");
                if (this.$element.trigger(a), a.isDefaultPrevented()) return;
                this.affixed = s, this.unpin = "bottom" == s ? this.getPinnedOffset() : null, this.$element.removeClass(d.RESET).addClass(r).trigger(r.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == s && this.$element.offset({
                top: o - t - n
            })
        }
    };
    var t = l.fn.affix;
    l.fn.affix = i, l.fn.affix.Constructor = d, l.fn.affix.noConflict = function () {
        return l.fn.affix = t, this
    }, l(window).on("load", function () {
        l('[data-spy="affix"]').each(function () {
            var t = l(this),
                e = t.data();
            e.offset = e.offset || {}, null != e.offsetBottom && (e.offset.bottom = e.offsetBottom), null != e.offsetTop && (e.offset.top = e.offsetTop), i.call(t, e)
        })
    })
}(jQuery),
function (u) {
    "use strict";
    var e, i, p = u.GreenSockGlobals || u;
    if (!p.TweenLite) {
        var t, n, o, h, f, g = function (t) {
                var e, i = t.split("."),
                    n = p;
                for (e = 0; i.length > e; e++) n[i[e]] = n = n[i[e]] || {};
                return n
            },
            m = g("com.greensock"),
            v = 1e-10,
            l = [].slice,
            y = function () {},
            c = (e = Object.prototype.toString, i = e.call([]), function (t) {
                return t instanceof Array || "object" == typeof t && !!t.push && e.call(t) === i
            }),
            w = {},
            b = function (a, l, d, c) {
                this.sc = w[a] ? w[a].sc : [], (w[a] = this).gsClass = null, this.func = d;
                var h = [];
                this.check = function (t) {
                    for (var e, i, n, o, s = l.length, r = s; - 1 < --s;)(e = w[l[s]] || new b(l[s], [])).gsClass ? (h[s] = e.gsClass, r--) : t && e.sc.push(this);
                    if (0 === r && d)
                        for (n = (i = ("com.greensock." + a).split(".")).pop(), o = g(i.join("."))[n] = this.gsClass = d.apply(d, h), c && (p[n] = o, "function" == typeof define && define.amd ? define((u.GreenSockAMDPath ? u.GreenSockAMDPath + "/" : "") + a.split(".").join("/"), [], function () {
                                return o
                            }) : "undefined" != typeof module && module.exports && (module.exports = o)), s = 0; this.sc.length > s; s++) this.sc[s].check()
                }, this.check(!0)
            },
            s = u._gsDefine = function (t, e, i, n) {
                return new b(t, e, i, n)
            },
            x = m._class = function (t, e, i) {
                return e = e || function () {}, s(t, [], function () {
                    return e
                }, i), e
            };
        s.globals = p;
        var r = [0, 0, 1, 1],
            _ = [],
            d = x("easing.Ease", function (t, e, i, n) {
                this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? r.concat(e) : r
            }, !0),
            T = d.map = {},
            a = d.register = function (t, e, i, n) {
                for (var o, s, r, a, l = e.split(","), d = l.length, c = (i || "easeIn,easeOut,easeInOut").split(","); - 1 < --d;)
                    for (s = l[d], o = n ? x("easing." + s, null, !0) : m.easing[s] || {}, r = c.length; - 1 < --r;) a = c[r], T[s + "." + a] = T[a + s] = o[a] = t.getRatio ? t : t[a] || new t
            };
        for ((o = d.prototype)._calcEnd = !1, o.getRatio = function (t) {
                if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                var e = this._type,
                    i = this._power,
                    n = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t);
                return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : t < .5 ? n / 2 : 1 - n / 2
            }, n = (t = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; - 1 < --n;) o = t[n] + ",Power" + n, a(new d(null, null, 1, n), o, "easeOut", !0), a(new d(null, null, 2, n), o, "easeIn" + (0 === n ? ",easeNone" : "")), a(new d(null, null, 3, n), o, "easeInOut");
        T.linear = m.easing.Linear.easeIn, T.swing = m.easing.Quad.easeInOut;
        var C = x("events.EventDispatcher", function (t) {
            this._listeners = {}, this._eventTarget = t || this
        });
        (o = C.prototype).addEventListener = function (t, e, i, n, o) {
            o = o || 0;
            var s, r, a = this._listeners[t],
                l = 0;
            for (null == a && (this._listeners[t] = a = []), r = a.length; - 1 < --r;)(s = a[r]).c === e && s.s === i ? a.splice(r, 1) : 0 === l && o > s.pr && (l = r + 1);
            a.splice(l, 0, {
                c: e,
                s: i,
                up: n,
                pr: o
            }), this !== h || f || h.wake()
        }, o.removeEventListener = function (t, e) {
            var i, n = this._listeners[t];
            if (n)
                for (i = n.length; - 1 < --i;)
                    if (n[i].c === e) return void n.splice(i, 1)
        }, o.dispatchEvent = function (t) {
            var e, i, n, o = this._listeners[t];
            if (o)
                for (e = o.length, i = this._eventTarget; - 1 < --e;)(n = o[e]).up ? n.c.call(n.s || i, {
                    type: t,
                    target: i
                }) : n.c.call(n.s || i)
        };
        var k = u.requestAnimationFrame,
            S = u.cancelAnimationFrame,
            E = Date.now || function () {
                return (new Date).getTime()
            },
            P = E();
        for (n = (t = ["ms", "moz", "webkit", "o"]).length; - 1 < --n && !k;) k = u[t[n] + "RequestAnimationFrame"], S = u[t[n] + "CancelAnimationFrame"] || u[t[n] + "CancelRequestAnimationFrame"];
        x("Ticker", function (t, e) {
            var n, o, s, r, a, l = this,
                d = E(),
                i = !1 !== e && k,
                c = function (t) {
                    P = E(), l.time = (P - d) / 1e3;
                    var e, i = l.time - a;
                    (!n || 0 < i || !0 === t) && (l.frame++, a += i + (r <= i ? .004 : r - i), e = !0), !0 !== t && (s = o(c)), e && l.dispatchEvent("tick")
                };
            C.call(l), l.time = l.frame = 0, l.tick = function () {
                c(!0)
            }, l.sleep = function () {
                null != s && (i && S ? S(s) : clearTimeout(s), o = y, s = null, l === h && (f = !1))
            }, l.wake = function () {
                null !== s && l.sleep(), o = 0 === n ? y : i && k ? k : function (t) {
                    return setTimeout(t, 0 | 1e3 * (a - l.time) + 1)
                }, l === h && (f = !0), c(2)
            }, l.fps = function (t) {
                return arguments.length ? (r = 1 / ((n = t) || 60), a = this.time + r, void l.wake()) : n
            }, l.useRAF = function (t) {
                return arguments.length ? (l.sleep(), i = t, void l.fps(n)) : i
            }, l.fps(t), setTimeout(function () {
                i && (!s || l.frame < 5) && l.useRAF(!1)
            }, 1500)
        }), (o = m.Ticker.prototype = new m.events.EventDispatcher).constructor = m.Ticker;
        var A = x("core.Animation", function (t, e) {
            if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !0 === e.immediateRender, this.data = e.data, this._reversed = !0 === e.reversed, W) {
                f || h.wake();
                var i = this.vars.useFrames ? H : W;
                i.add(this, i._time), this.vars.paused && this.paused(!0)
            }
        });
        h = A.ticker = new m.Ticker, (o = A.prototype)._dirty = o._gc = o._initted = o._paused = !1, o._totalTime = o._time = 0, o._rawPrevTime = -1, o._next = o._last = o._onUpdate = o._timeline = o.timeline = null, o._paused = !1;
        var N = function () {
            2e3 < E() - P && h.wake(), setTimeout(N, 2e3)
        };
        N(), o.play = function (t, e) {
            return arguments.length && this.seek(t, e), this.reversed(!1).paused(!1)
        }, o.pause = function (t, e) {
            return arguments.length && this.seek(t, e), this.paused(!0)
        }, o.resume = function (t, e) {
            return arguments.length && this.seek(t, e), this.paused(!1)
        }, o.seek = function (t, e) {
            return this.totalTime(Number(t), !1 !== e)
        }, o.restart = function (t, e) {
            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
        }, o.reverse = function (t, e) {
            return arguments.length && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, o.render = function () {}, o.invalidate = function () {
            return this
        }, o.isActive = function () {
            var t, e = this._timeline,
                i = this._startTime;
            return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
        }, o._enabled = function (t, e) {
            return f || h.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
        }, o._kill = function () {
            return this._enabled(!1, !1)
        }, o.kill = function (t, e) {
            return this._kill(t, e), this
        }, o._uncache = function (t) {
            for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
            return this
        }, o._swapSelfInParams = function (t) {
            for (var e = t.length, i = t.concat(); - 1 < --e;) "{self}" === t[e] && (i[e] = this);
            return i
        }, o.eventCallback = function (t, e, i, n) {
            if ("on" === (t || "").substr(0, 2)) {
                var o = this.vars;
                if (1 === arguments.length) return o[t];
                null == e ? delete o[t] : (o[t] = e, o[t + "Params"] = c(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, o[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
            }
            return this
        }, o.delay = function (t) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
        }, o.duration = function (t) {
            return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && 0 < this._time && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
        }, o.totalDuration = function (t) {
            return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
        }, o.time = function (t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
        }, o.totalTime = function (t, e, i) {
            if (f || h.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (t < 0 && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var n = this._totalDuration,
                        o = this._timeline;
                    if (n < t && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : o._time) - (this._reversed ? n - t : t) / this._timeScale, o._dirty || this._uncache(!1), o._timeline)
                        for (; o._timeline;) o._timeline._time !== (o._startTime + o._totalTime) / o._timeScale && o.totalTime(o._totalTime, !0), o = o._timeline
                }
                this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && this.render(t, e, !1)
            }
            return this
        }, o.progress = o.totalProgress = function (t, e) {
            return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
        }, o.startTime = function (t) {
            return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
        }, o.timeScale = function (t) {
            if (!arguments.length) return this._timeScale;
            if (t = t || v, this._timeline && this._timeline.smoothChildTiming) {
                var e = this._pauseTime,
                    i = e || 0 === e ? e : this._timeline.totalTime();
                this._startTime = i - (i - this._startTime) * this._timeScale / t
            }
            return this._timeScale = t, this._uncache(!1)
        }, o.reversed = function (t) {
            return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._totalTime, !0)), this) : this._reversed
        }, o.paused = function (t) {
            if (!arguments.length) return this._paused;
            if (t != this._paused && this._timeline) {
                f || t || h.wake();
                var e = this._timeline,
                    i = e.rawTime(),
                    n = i - this._pauseTime;
                !t && e.smoothChildTiming && (this._startTime += n, this._uncache(!1)), this._pauseTime = t ? i : null, this._paused = t, this._active = this.isActive(), !t && 0 !== n && this._initted && this.duration() && this.render(e.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0)
            }
            return this._gc && !t && this._enabled(!0, !1), this
        };
        var O = x("core.SimpleTimeline", function (t) {
            A.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        (o = O.prototype = new A).constructor = O, o.kill()._gc = !1, o._first = o._last = null, o._sortChildren = !1, o.add = o.insert = function (t, e) {
            var i, n;
            if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
                for (n = t._startTime; i && i._startTime > n;) i = i._prev;
            return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._timeline && this._uncache(!0), this
        }, o._remove = function (t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0), t.timeline = null, t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), this._timeline && this._uncache(!0)), this
        }, o.render = function (t, e, i) {
            var n, o = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = t; o;) n = o._next, (o._active || t >= o._startTime && !o._paused) && (o._reversed ? o.render((o._dirty ? o.totalDuration() : o._totalDuration) - (t - o._startTime) * o._timeScale, e, i) : o.render((t - o._startTime) * o._timeScale, e, i)), o = n
        }, o.rawTime = function () {
            return f || h.wake(), this._totalTime
        };
        var M = x("TweenLite", function (t, e, i) {
                if (A.call(this, e, i), this.render = M.prototype.render, null == t) throw "Cannot tween a null target.";
                this.target = t = "string" != typeof t ? t : M.selector(t) || t;
                var n, o, s, r = t.jquery || t.length && t !== u && t[0] && (t[0] === u || t[0].nodeType && t[0].style && !t.nodeType),
                    a = this.vars.overwrite;
                if (this._overwrite = a = null == a ? j[M.defaultOverwrite] : "number" == typeof a ? a >> 0 : j[a], (r || t instanceof Array || t.push && c(t)) && "number" != typeof t[0])
                    for (this._targets = s = l.call(t, 0), this._propLookup = [], this._siblings = [], n = 0; s.length > n; n++)(o = s[n]) ? "string" != typeof o ? o.length && o !== u && o[0] && (o[0] === u || o[0].nodeType && o[0].style && !o.nodeType) ? (s.splice(n--, 1), this._targets = s = s.concat(l.call(o, 0))) : (this._siblings[n] = F(o, this, !1), 1 === a && 1 < this._siblings[n].length && q(o, this, null, 1, this._siblings[n])) : "string" == typeof (o = s[n--] = M.selector(o)) && s.splice(n + 1, 1) : s.splice(n--, 1);
                else this._propLookup = {}, this._siblings = F(t, this, !1), 1 === a && 1 < this._siblings.length && q(t, this, null, 1, this._siblings);
                (this.vars.immediateRender || 0 === e && 0 === this._delay && !1 !== this.vars.immediateRender) && this.render(-this._delay, !1, !0)
            }, !0),
            I = function (t) {
                return t.length && t !== u && t[0] && (t[0] === u || t[0].nodeType && t[0].style && !t.nodeType)
            };
        (o = M.prototype = new A).constructor = M, o.kill()._gc = !1, o.ratio = 0, o._firstPT = o._targets = o._overwrittenProps = o._startAt = null, o._notifyPluginsOfEnabled = !1, M.version = "1.11.1", M.defaultEase = o._ease = new d(null, null, 1, 1), M.defaultOverwrite = "auto", M.ticker = h, M.autoSleep = !0, M.selector = u.$ || u.jQuery || function (t) {
            return u.$ ? (M.selector = u.$, u.$(t)) : u.document ? u.document.getElementById("#" === t.charAt(0) ? t.substr(1) : t) : t
        };
        var D = M._internals = {
                isArray: c,
                isSelector: I
            },
            $ = M._plugins = {},
            L = M._tweenLookup = {},
            z = 0,
            R = D.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1
            },
            j = {
                none: 0,
                all: 1,
                auto: 2,
                concurrent: 3,
                allOnStart: 4,
                preexisting: 5,
                true: 1,
                false: 0
            },
            H = A._rootFramesTimeline = new O,
            W = A._rootTimeline = new O;
        W._startTime = h.time, H._startTime = h.frame, W._active = H._active = !0, A._updateRoot = function () {
            if (W.render((h.time - W._startTime) * W._timeScale, !1, !1), H.render((h.frame - H._startTime) * H._timeScale, !1, !1), !(h.frame % 120)) {
                var t, e, i;
                for (i in L) {
                    for (t = (e = L[i].tweens).length; - 1 < --t;) e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete L[i]
                }
                if ((!(i = W._first) || i._paused) && M.autoSleep && !H._first && 1 === h._listeners.tick.length) {
                    for (; i && i._paused;) i = i._next;
                    i || h.sleep()
                }
            }
        }, h.addEventListener("tick", A._updateRoot);
        var F = function (t, e, i) {
                var n, o, s = t._gsTweenID;
                if (L[s || (t._gsTweenID = s = "t" + z++)] || (L[s] = {
                        target: t,
                        tweens: []
                    }), e && ((n = L[s].tweens)[o = n.length] = e, i))
                    for (; - 1 < --o;) n[o] === e && n.splice(o, 1);
                return L[s].tweens
            },
            q = function (t, e, i, n, o) {
                var s, r, a, l;
                if (1 === n || 4 <= n) {
                    for (l = o.length, s = 0; s < l; s++)
                        if ((a = o[s]) !== e) a._gc || a._enabled(!1, !1) && (r = !0);
                        else if (5 === n) break;
                    return r
                }
                var d, c = e._startTime + v,
                    h = [],
                    u = 0,
                    p = 0 === e._duration;
                for (s = o.length; - 1 < --s;)(a = o[s]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (d = d || X(e, 0, p), 0 === X(a, d, p) && (h[u++] = a)) : c >= a._startTime && a._startTime + a.totalDuration() / a._timeScale + v > c && ((p || !a._initted) && c - a._startTime <= 2e-10 || (h[u++] = a)));
                for (s = u; - 1 < --s;) a = h[s], 2 === n && a._kill(i, t) && (r = !0), (2 !== n || !a._firstPT && a._initted) && a._enabled(!1, !1) && (r = !0);
                return r
            },
            X = function (t, e, i) {
                for (var n = t._timeline, o = n._timeScale, s = t._startTime; n._timeline;) {
                    if (s += n._startTime, o *= n._timeScale, n._paused) return -100;
                    n = n._timeline
                }
                return e < (s /= o) ? s - e : i && s === e || !t._initted && s - e < 2 * v ? v : (s += t.totalDuration() / t._timeScale / o) > e + v ? 0 : s - e - v
            };
        o._init = function () {
            var t, e, i, n, o = this.vars,
                s = this._overwrittenProps,
                r = this._duration,
                a = o.immediateRender,
                l = o.ease;
            if (o.startAt) {
                if (this._startAt && this._startAt.render(-1, !0), o.startAt.overwrite = 0, o.startAt.immediateRender = !0, this._startAt = M.to(this.target, 0, o.startAt), a)
                    if (0 < this._time) this._startAt = null;
                    else if (0 !== r) return
            } else if (o.runBackwards && 0 !== r)
                if (this._startAt) this._startAt.render(-1, !0), this._startAt = null;
                else {
                    for (n in i = {}, o) R[n] && "autoCSS" !== n || (i[n] = o[n]);
                    if (i.overwrite = 0, i.data = "isFromStart", this._startAt = M.to(this.target, 0, i), o.immediateRender) {
                        if (0 === this._time) return
                    } else this._startAt.render(-1, !0)
                } if (this._ease = l ? l instanceof d ? o.easeParams instanceof Array ? l.config.apply(l, o.easeParams) : l : "function" == typeof l ? new d(l, o.easeParams) : T[l] || M.defaultEase : M.defaultEase, this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                for (t = this._targets.length; - 1 < --t;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], s ? s[t] : null) && (e = !0);
            else e = this._initProps(this.target, this._propLookup, this._siblings, s);
            if (e && M._onPluginEvent("_onInitAllProps", this), s && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), o.runBackwards)
                for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
            this._onUpdate = o.onUpdate, this._initted = !0
        }, o._initProps = function (t, e, i, n) {
            var o, s, r, a, l, d;
            if (null == t) return !1;
            for (o in this.vars.css || t.style && t !== u && t.nodeType && $.css && !1 !== this.vars.autoCSS && function (t, e) {
                    var i, n = {};
                    for (i in t) R[i] || i in e && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!$[i] || $[i] && $[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                    t.css = n
                }(this.vars, t), this.vars) {
                if (d = this.vars[o], R[o]) d && (d instanceof Array || d.push && c(d)) && -1 !== d.join("").indexOf("{self}") && (this.vars[o] = d = this._swapSelfInParams(d, this));
                else if ($[o] && (a = new $[o])._onInitTween(t, this.vars[o], this)) {
                    for (this._firstPT = l = {
                            _next: this._firstPT,
                            t: a,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: !0,
                            n: o,
                            pg: !0,
                            pr: a._priority
                        }, s = a._overwriteProps.length; - 1 < --s;) e[a._overwriteProps[s]] = this._firstPT;
                    (a._priority || a._onInitAllProps) && (r = !0), (a._onDisable || a._onEnable) && (this._notifyPluginsOfEnabled = !0)
                } else this._firstPT = e[o] = l = {
                    _next: this._firstPT,
                    t: t,
                    p: o,
                    f: "function" == typeof t[o],
                    n: o,
                    pg: !1,
                    pr: 0
                }, l.s = l.f ? t[o.indexOf("set") || "function" != typeof t["get" + o.substr(3)] ? o : "get" + o.substr(3)]() : parseFloat(t[o]), l.c = "string" == typeof d && "=" === d.charAt(1) ? parseInt(d.charAt(0) + "1", 10) * Number(d.substr(2)) : Number(d) - l.s || 0;
                l && l._next && (l._next._prev = l)
            }
            return n && this._kill(n, t) ? this._initProps(t, e, i, n) : 1 < this._overwrite && this._firstPT && 1 < i.length && q(t, this, e, this._overwrite, i) ? (this._kill(e, t), this._initProps(t, e, i, n)) : r
        }, o.render = function (t, e, i) {
            var n, o, s, r, a = this._time,
                l = this._duration;
            if (l <= t) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, o = "onComplete"), 0 === l && (r = this._rawPrevTime, (0 === t || r < 0 || r === v) && r !== t && (i = !0, v < r && (o = "onReverseComplete")), this._rawPrevTime = r = !e || t ? t : v);
            else if (t < 1e-7) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && this._rawPrevTime > v) && (o = "onReverseComplete", n = this._reversed), t < 0 ? (this._active = !1, 0 === l && (0 <= this._rawPrevTime && (i = !0), this._rawPrevTime = r = !e || t ? t : v)) : this._initted || (i = !0);
            else if (this._totalTime = this._time = t, this._easeType) {
                var d = t / l,
                    c = this._easeType,
                    h = this._easePower;
                (1 === c || 3 === c && .5 <= d) && (d = 1 - d), 3 === c && (d *= 2), 1 === h ? d *= d : 2 === h ? d *= d * d : 3 === h ? d *= d * d * d : 4 === h && (d *= d * d * d * d), this.ratio = 1 === c ? 1 - d : 2 === c ? d : t / l < .5 ? d / 2 : 1 - d / 2
            } else this.ratio = this._ease.getRatio(t / l);
            if (this._time !== a || i) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;
                    this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._active || !this._paused && this._time !== a && 0 <= t && (this._active = !0), 0 === a && (this._startAt && (0 <= t ? this._startAt.render(t, e, i) : o || (o = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || _))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                this._onUpdate && (t < 0 && this._startAt && this._startTime && this._startAt.render(t, e, i), e || i && 0 === this._time && 0 === a || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _)), o && (this._gc || (t < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this.vars[o].apply(this.vars[o + "Scope"] || this, this.vars[o + "Params"] || _), 0 === l && this._rawPrevTime === v && r !== v && (this._rawPrevTime = 0)))
            }
        }, o._kill = function (t, e) {
            if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._enabled(!1, !1);
            var i, n, o, s, r, a, l, d;
            if (e = "string" != typeof e ? e || this._targets || this.target : M.selector(e) || e, (c(e) || I(e)) && "number" != typeof e[0])
                for (i = e.length; - 1 < --i;) this._kill(t, e[i]) && (a = !0);
            else {
                if (this._targets) {
                    for (i = this._targets.length; - 1 < --i;)
                        if (e === this._targets[i]) {
                            r = this._propLookup[i] || {}, this._overwrittenProps = this._overwrittenProps || [], n = this._overwrittenProps[i] = t ? this._overwrittenProps[i] || {} : "all";
                            break
                        }
                } else {
                    if (e !== this.target) return !1;
                    r = this._propLookup, n = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                }
                if (r) {
                    for (o in l = t || r, d = t !== n && "all" !== n && t !== r && ("object" != typeof t || !t._tempKill), l)(s = r[o]) && (s.pg && s.t._kill(l) && (a = !0), s.pg && 0 !== s.t._overwriteProps.length || (s._prev ? s._prev._next = s._next : s === this._firstPT && (this._firstPT = s._next), s._next && (s._next._prev = s._prev), s._next = s._prev = null), delete r[o]), d && (n[o] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return a
        }, o.invalidate = function () {
            return this._notifyPluginsOfEnabled && M._onPluginEvent("_onDisable", this), this._firstPT = null, this._overwrittenProps = null, this._onUpdate = null, this._startAt = null, this._initted = this._active = this._notifyPluginsOfEnabled = !1, this._propLookup = this._targets ? {} : [], this
        }, o._enabled = function (t, e) {
            if (f || h.wake(), t && this._gc) {
                var i, n = this._targets;
                if (n)
                    for (i = n.length; - 1 < --i;) this._siblings[i] = F(n[i], this, !0);
                else this._siblings = F(this.target, this, !0)
            }
            return A.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && M._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
        }, M.to = function (t, e, i) {
            return new M(t, e, i)
        }, M.from = function (t, e, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new M(t, e, i)
        }, M.fromTo = function (t, e, i, n) {
            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new M(t, e, n)
        }, M.delayedCall = function (t, e, i, n, o) {
            return new M(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                onCompleteScope: n,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                onReverseCompleteScope: n,
                immediateRender: !1,
                useFrames: o,
                overwrite: 0
            })
        }, M.set = function (t, e) {
            return new M(t, 0, e)
        }, M.getTweensOf = function (t, e) {
            if (null == t) return [];
            var i, n, o, s;
            if (t = "string" != typeof t ? t : M.selector(t) || t, (c(t) || I(t)) && "number" != typeof t[0]) {
                for (i = t.length, n = []; - 1 < --i;) n = n.concat(M.getTweensOf(t[i], e));
                for (i = n.length; - 1 < --i;)
                    for (s = n[i], o = i; - 1 < --o;) s === n[o] && n.splice(i, 1)
            } else
                for (i = (n = F(t).concat()).length; - 1 < --i;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
            return n
        }, M.killTweensOf = M.killDelayedCallsTo = function (t, e, i) {
            "object" == typeof e && (i = e, e = !1);
            for (var n = M.getTweensOf(t, e), o = n.length; - 1 < --o;) n[o]._kill(i, t)
        };
        var B = x("plugins.TweenPlugin", function (t, e) {
            this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = B.prototype
        }, !0);
        if (o = B.prototype, B.version = "1.10.1", B.API = 2, o._firstPT = null, o._addTween = function (t, e, i, n, o, s) {
                var r, a;
                return null != n && (r = "number" == typeof n || "=" !== n.charAt(1) ? Number(n) - i : parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2))) ? (this._firstPT = a = {
                    _next: this._firstPT,
                    t: t,
                    p: e,
                    s: i,
                    c: r,
                    f: "function" == typeof t[e],
                    n: o || e,
                    r: s
                }, a._next && (a._next._prev = a), a) : void 0
            }, o.setRatio = function (t) {
                for (var e, i = this._firstPT; i;) e = i.c * t + i.s, i.r ? e = 0 | e + (0 < e ? .5 : -.5) : e < 1e-6 && -1e-6 < e && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next
            }, o._kill = function (t) {
                var e, i = this._overwriteProps,
                    n = this._firstPT;
                if (null != t[this._propName]) this._overwriteProps = [];
                else
                    for (e = i.length; - 1 < --e;) null != t[i[e]] && i.splice(e, 1);
                for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                return !1
            }, o._roundProps = function (t, e) {
                for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
            }, M._onPluginEvent = function (t, e) {
                var i, n, o, s, r, a = e._firstPT;
                if ("_onInitAllProps" === t) {
                    for (; a;) {
                        for (r = a._next, n = o; n && n.pr > a.pr;) n = n._next;
                        (a._prev = n ? n._prev : s) ? a._prev._next = a: o = a, (a._next = n) ? n._prev = a : s = a, a = r
                    }
                    a = e._firstPT = o
                }
                for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
                return i
            }, B.activate = function (t) {
                for (var e = t.length; - 1 < --e;) t[e].API === B.API && ($[(new t[e])._propName] = t[e]);
                return !0
            }, s.plugin = function (t) {
                if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                var e, i = t.propName,
                    n = t.priority || 0,
                    o = t.overwriteProps,
                    s = {
                        init: "_onInitTween",
                        set: "setRatio",
                        kill: "_kill",
                        round: "_roundProps",
                        initAll: "_onInitAllProps"
                    },
                    r = x("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function () {
                        B.call(this, i, n), this._overwriteProps = o || []
                    }, !0 === t.global),
                    a = r.prototype = new B(i);
                for (e in (a.constructor = r).API = t.API, s) "function" == typeof t[e] && (a[s[e]] = t[e]);
                return r.version = t.version, B.activate([r]), r
            }, t = u._gsQueue) {
            for (n = 0; t.length > n; n++) t[n]();
            for (o in w) w[o].func || u.console.log("GSAP encountered missing dependency: com.greensock." + o)
        }
        f = !1
    }
}(window), (window._gsQueue || (window._gsQueue = [])).push(function () {
        "use strict";
        window._gsDefine("easing.Back", ["easing.Ease"], function (m) {
            var e, i, t, n = window.GreenSockGlobals || window,
                o = n.com.greensock,
                s = 2 * Math.PI,
                r = Math.PI / 2,
                a = o._class,
                l = function (t, e) {
                    var i = a("easing." + t, function () {}, !0),
                        n = i.prototype = new m;
                    return n.constructor = i, n.getRatio = e, i
                },
                d = m.register || function () {},
                c = function (t, e, i, n) {
                    var o = a("easing." + t, {
                        easeOut: new e,
                        easeIn: new i,
                        easeInOut: new n
                    }, !0);
                    return d(o, t), o
                },
                v = function (t, e, i) {
                    this.t = t, this.v = e, i && (((this.next = i).prev = this).c = i.v - e, this.gap = i.t - t)
                },
                h = function (t, e) {
                    var i = a("easing." + t, function (t) {
                            this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                        }, !0),
                        n = i.prototype = new m;
                    return n.constructor = i, n.getRatio = e, n.config = function (t) {
                        return new i(t)
                    }, i
                },
                u = c("Back", h("BackOut", function (t) {
                    return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                }), h("BackIn", function (t) {
                    return t * t * ((this._p1 + 1) * t - this._p1)
                }), h("BackInOut", function (t) {
                    return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                })),
                p = a("easing.SlowMo", function (t, e, i) {
                    e = e || 0 === e ? e : .7, null == t ? t = .7 : 1 < t && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === i
                }, !0),
                f = p.prototype = new m;
            return f.constructor = p, f.getRatio = function (t) {
                var e = t + (.5 - t) * this._p;
                return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
            }, p.ease = new p(.7, .7), f.config = p.config = function (t, e, i) {
                return new p(t, e, i)
            }, (f = (e = a("easing.SteppedEase", function (t) {
                t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
            }, !0)).prototype = new m).constructor = e, f.getRatio = function (t) {
                return t < 0 ? t = 0 : 1 <= t && (t = .999999999), (this._p2 * t >> 0) * this._p1
            }, f.config = e.config = function (t) {
                return new e(t)
            }, (f = (i = a("easing.RoughEase", function (t) {
                for (var e, i, n, o, s, r, a = (t = t || {}).taper || "none", l = [], d = 0, c = 0 | (t.points || 20), h = c, u = !1 !== t.randomize, p = !0 === t.clamp, f = t.template instanceof m ? t.template : null, g = "number" == typeof t.strength ? .4 * t.strength : .4; - 1 < --h;) e = u ? Math.random() : 1 / c * h, i = f ? f.getRatio(e) : e, "none" === a ? n = g : "out" === a ? n = (o = 1 - e) * o * g : "in" === a ? n = e * e * g : n = .5 * (o = e < .5 ? 2 * e : 2 * (1 - e)) * o * g, u ? i += Math.random() * n - .5 * n : h % 2 ? i += .5 * n : i -= .5 * n, p && (1 < i ? i = 1 : i < 0 && (i = 0)), l[d++] = {
                    x: e,
                    y: i
                };
                for (l.sort(function (t, e) {
                        return t.x - e.x
                    }), r = new v(1, 1, null), h = c; - 1 < --h;) s = l[h], r = new v(s.x, s.y, r);
                this._prev = new v(0, 0, 0 !== r.t ? r : r.next)
            }, !0)).prototype = new m).constructor = i, f.getRatio = function (t) {
                var e = this._prev;
                if (t > e.t) {
                    for (; e.next && t >= e.t;) e = e.next;
                    e = e.prev
                } else
                    for (; e.prev && e.t >= t;) e = e.prev;
                return (this._prev = e).v + (t - e.t) / e.gap * e.c
            }, f.config = function (t) {
                return new i(t)
            }, i.ease = new i, c("Bounce", l("BounceOut", function (t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            }), l("BounceIn", function (t) {
                return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : t < 2 / 2.75 ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
            }), l("BounceInOut", function (t) {
                var e = t < .5;
                return t = (t = e ? 1 - 2 * t : 2 * t - 1) < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
            })), c("Circ", l("CircOut", function (t) {
                return Math.sqrt(1 - (t -= 1) * t)
            }), l("CircIn", function (t) {
                return -(Math.sqrt(1 - t * t) - 1)
            }), l("CircInOut", function (t) {
                return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            })), c("Elastic", (t = function (t, e, i) {
                var n = a("easing." + t, function (t, e) {
                        this._p1 = t || 1, this._p2 = e || i, this._p3 = this._p2 / s * (Math.asin(1 / this._p1) || 0)
                    }, !0),
                    o = n.prototype = new m;
                return o.constructor = n, o.getRatio = e, o.config = function (t, e) {
                    return new n(t, e)
                }, n
            })("ElasticOut", function (t) {
                return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * s / this._p2) + 1
            }, .3), t("ElasticIn", function (t) {
                return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * s / this._p2)
            }, .3), t("ElasticInOut", function (t) {
                return (t *= 2) < 1 ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * s / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * s / this._p2) + 1
            }, .45)), c("Expo", l("ExpoOut", function (t) {
                return 1 - Math.pow(2, -10 * t)
            }), l("ExpoIn", function (t) {
                return Math.pow(2, 10 * (t - 1)) - .001
            }), l("ExpoInOut", function (t) {
                return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
            })), c("Sine", l("SineOut", function (t) {
                return Math.sin(t * r)
            }), l("SineIn", function (t) {
                return 1 - Math.cos(t * r)
            }), l("SineInOut", function (t) {
                return -.5 * (Math.cos(Math.PI * t) - 1)
            })), a("easing.EaseLookup", {
                find: function (t) {
                    return m.map[t]
                }
            }, !0), d(n.SlowMo, "SlowMo", "ease,"), d(i, "RoughEase", "ease,"), d(e, "SteppedEase", "ease,"), u
        }, !0)
    }), window._gsDefine && window._gsQueue.pop()(), (window._gsQueue || (window._gsQueue = [])).push(function () {
        "use strict";
        window._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (s, u) {
            var f, T, C, p, K = function () {
                    s.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = K.prototype.setRatio
                },
                g = {},
                t = K.prototype = new s("css");
            (t.constructor = K).version = "1.11.0", K.API = 2, K.defaultTransformPerspective = 0, t = "px", K.suffixMap = {
                top: t,
                right: t,
                bottom: t,
                left: t,
                width: t,
                height: t,
                fontSize: t,
                padding: t,
                margin: t,
                perspective: t
            };
            var S, m, v, I, y, k, e, i, n, E = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                P = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                w = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                c = /[^\d\-\.]/g,
                A = /(?:\d|\-|\+|=|#|\.)*/g,
                N = /opacity *= *([^)]*)/,
                b = /opacity:([^;]*)/,
                r = /alpha\(opacity *=.+?\)/i,
                O = /^(rgb|hsl)/,
                a = /([A-Z])/g,
                l = /-([a-z])/gi,
                x = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                d = function (t, e) {
                    return e.toUpperCase()
                },
                h = /(?:Left|Right|Width)/i,
                tt = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                M = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                D = /,(?=[^\)]*(?:\(|$))/gi,
                et = Math.PI / 180,
                it = 180 / Math.PI,
                _ = {},
                $ = document,
                L = $.createElement("div"),
                z = $.createElement("img"),
                o = K._internals = {
                    _specialProps: g
                },
                R = navigator.userAgent,
                j = (i = R.indexOf("Android"), n = $.createElement("div"), v = -1 !== R.indexOf("Safari") && -1 === R.indexOf("Chrome") && (-1 === i || 3 < Number(R.substr(i + 8, 1))), y = v && Number(R.substr(R.indexOf("Version/") + 8, 1)) < 6, I = -1 !== R.indexOf("Firefox"), /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(R), k = parseFloat(RegExp.$1), n.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>", !!(e = n.getElementsByTagName("a")[0]) && /^0.55/.test(e.style.opacity)),
                H = function (t) {
                    return N.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                },
                W = function (t) {
                    window.console && console.log(t)
                },
                F = "",
                q = "",
                X = function (t, e) {
                    var i, n, o = (e = e || L).style;
                    if (void 0 !== o[t]) return t;
                    for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; - 1 < --n && void 0 === o[i[n] + t];);
                    return 0 <= n ? (F = "-" + (q = 3 === n ? "ms" : i[n]).toLowerCase() + "-", q + t) : null
                },
                B = $.defaultView ? $.defaultView.getComputedStyle : function () {},
                nt = K.getStyle = function (t, e, i, n, o) {
                    var s;
                    return j || "opacity" !== e ? (!n && t.style[e] ? s = t.style[e] : (i = i || B(t, null)) ? s = (t = i.getPropertyValue(e.replace(a, "-$1").toLowerCase())) || i.length ? t : i[e] : t.currentStyle && (s = t.currentStyle[e]), null == o || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : o) : H(t)
                },
                Y = function (t, e, i, n, o) {
                    if ("px" === n || !n) return i;
                    if ("auto" === n || !i) return 0;
                    var s, r = h.test(e),
                        a = t,
                        l = L.style,
                        d = i < 0;
                    return d && (i = -i), "%" === n && -1 !== e.indexOf("border") ? s = i / 100 * (r ? t.clientWidth : t.clientHeight) : (l.cssText = "border-style:solid;border-width:0;position:absolute;line-height:0;", "%" !== n && a.appendChild ? l[r ? "borderLeftWidth" : "borderTopWidth"] = i + n : (a = t.parentNode || $.body, l[r ? "width" : "height"] = i + n), a.appendChild(L), s = parseFloat(L[r ? "offsetWidth" : "offsetHeight"]), a.removeChild(L), 0 !== s || o || (s = Y(t, e, i, n, !0))), d ? -s : s
                },
                U = function (t, e, i) {
                    if ("absolute" !== nt(t, "position", i)) return 0;
                    var n = "left" === e ? "Left" : "Top",
                        o = nt(t, "margin" + n, i);
                    return t["offset" + n] - (Y(t, e, parseFloat(o), o.replace(A, "")) || 0)
                },
                V = function (t, e) {
                    var i, n, o = {};
                    if (e = e || B(t, null))
                        if (i = e.length)
                            for (; - 1 < --i;) o[e[i].replace(l, d)] = e.getPropertyValue(e[i]);
                        else
                            for (i in e) o[i] = e[i];
                    else if (e = t.currentStyle || t.style)
                        for (i in e) "string" == typeof i && void 0 !== o[i] && (o[i.replace(l, d)] = e[i]);
                    return j || (o.opacity = H(t)), n = St(t, e, !1), o.rotation = n.rotation, o.skewX = n.skewX, o.scaleX = n.scaleX, o.scaleY = n.scaleY, o.x = n.x, o.y = n.y, kt && (o.z = n.z, o.rotationX = n.rotationX, o.rotationY = n.rotationY, o.scaleZ = n.scaleZ), o.filters && delete o.filters, o
                },
                Q = function (t, e, i, n, o) {
                    var s, r, a, l = {},
                        d = t.style;
                    for (r in i) "cssText" !== r && "length" !== r && isNaN(r) && (e[r] !== (s = i[r]) || o && o[r]) && -1 === r.indexOf("Origin") && ("number" == typeof s || "string" == typeof s) && (l[r] = "auto" !== s || "left" !== r && "top" !== r ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof e[r] || "" === e[r].replace(c, "") ? s : 0 : U(t, r), void 0 !== d[r] && (a = new ft(d, r, d[r], a)));
                    if (n)
                        for (r in n) "className" !== r && (l[r] = n[r]);
                    return {
                        difs: l,
                        firstMPT: a
                    }
                },
                Z = {
                    width: ["Left", "Right"],
                    height: ["Top", "Bottom"]
                },
                G = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                J = function (t, e, i) {
                    var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                        o = Z[e],
                        s = o.length;
                    for (i = i || B(t, null); - 1 < --s;) n -= parseFloat(nt(t, "padding" + o[s], i, !0)) || 0, n -= parseFloat(nt(t, "border" + o[s] + "Width", i, !0)) || 0;
                    return n
                },
                ot = function (t, e) {
                    (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
                    var i = t.split(" "),
                        n = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                        o = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                    return null == o ? o = "0" : "center" === o && (o = "50%"), ("center" === n || isNaN(parseFloat(n)) && -1 === (n + "").indexOf("=")) && (n = "50%"), e && (e.oxp = -1 !== n.indexOf("%"), e.oyp = -1 !== o.indexOf("%"), e.oxr = "=" === n.charAt(1), e.oyr = "=" === o.charAt(1), e.ox = parseFloat(n.replace(c, "")), e.oy = parseFloat(o.replace(c, ""))), n + " " + o + (2 < i.length ? " " + i[2] : "")
                },
                st = function (t, e) {
                    return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
                },
                rt = function (t, e) {
                    return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * Number(t.substr(2)) + e : parseFloat(t)
                },
                at = function (t, e, i, n) {
                    var o, s, r, a;
                    return null == t ? a = e : "number" == typeof t ? a = t : (o = 360, s = t.split("_"), r = Number(s[0].replace(c, "")) * (-1 === t.indexOf("rad") ? 1 : it) - ("=" === t.charAt(1) ? 0 : e), s.length && (n && (n[i] = e + r), -1 !== t.indexOf("short") && ((r %= o) !== r % 180 && (r = r < 0 ? r + o : r - o)), -1 !== t.indexOf("_cw") && r < 0 ? r = (r + 3599999999640) % o - (0 | r / o) * o : -1 !== t.indexOf("ccw") && 0 < r && (r = (r - 3599999999640) % o - (0 | r / o) * o)), a = e + r), a < 1e-6 && -1e-6 < a && (a = 0), a
                },
                lt = {
                    aqua: [0, 255, 255],
                    lime: [0, 255, 0],
                    silver: [192, 192, 192],
                    black: [0, 0, 0],
                    maroon: [128, 0, 0],
                    teal: [0, 128, 128],
                    blue: [0, 0, 255],
                    navy: [0, 0, 128],
                    white: [255, 255, 255],
                    fuchsia: [255, 0, 255],
                    olive: [128, 128, 0],
                    yellow: [255, 255, 0],
                    orange: [255, 165, 0],
                    gray: [128, 128, 128],
                    purple: [128, 0, 128],
                    green: [0, 128, 0],
                    red: [255, 0, 0],
                    pink: [255, 192, 203],
                    cyan: [0, 255, 255],
                    transparent: [255, 255, 255, 0]
                },
                dt = function (t, e, i) {
                    return 0 | 255 * (6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1 ? e + 6 * (i - e) * t : t < .5 ? i : 3 * t < 2 ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5
                },
                ct = function (t) {
                    var e, i, n, o, s, r;
                    return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), lt[t] ? lt[t] : "#" === t.charAt(0) ? (4 === t.length && (t = "#" + (e = t.charAt(1)) + e + (i = t.charAt(2)) + i + (n = t.charAt(3)) + n), [(t = parseInt(t.substr(1), 16)) >> 16, 255 & t >> 8, 255 & t]) : ("hsl" === t.substr(0, 3) ? (t = t.match(E), o = Number(t[0]) % 360 / 360, s = Number(t[1]) / 100, e = 2 * (r = Number(t[2]) / 100) - (i = r <= .5 ? r * (s + 1) : r + s - r * s), 3 < t.length && (t[3] = Number(t[3])), t[0] = dt(o + 1 / 3, e, i), t[1] = dt(o, e, i), t[2] = dt(o - 1 / 3, e, i)) : ((t = t.match(E) || lt.transparent)[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), 3 < t.length && (t[3] = Number(t[3]))), t)) : lt.black
                },
                ht = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
            for (t in lt) ht += "|" + t + "\\b";
            ht = RegExp(ht + ")", "gi");
            var ut = function (t, e, s, r) {
                    if (null == t) return function (t) {
                        return t
                    };
                    var a, l = e ? (t.match(ht) || [""])[0] : "",
                        d = t.split(l).join("").match(w) || [],
                        c = t.substr(0, t.indexOf(d[0])),
                        h = ")" === t.charAt(t.length - 1) ? ")" : "",
                        u = -1 !== t.indexOf(" ") ? " " : ",",
                        p = d.length,
                        f = 0 < p ? d[0].replace(E, "") : "";
                    return p ? a = e ? function (t) {
                        var e, i, n, o;
                        if ("number" == typeof t) t += f;
                        else if (r && D.test(t)) {
                            for (o = t.replace(D, "|").split("|"), n = 0; o.length > n; n++) o[n] = a(o[n]);
                            return o.join(",")
                        }
                        if (e = (t.match(ht) || [l])[0], n = (i = t.split(e).join("").match(w) || []).length, p > n--)
                            for (; p > ++n;) i[n] = s ? i[0 | (n - 1) / 2] : d[n];
                        return c + i.join(u) + u + e + h + (-1 !== t.indexOf("inset") ? " inset" : "")
                    } : function (t) {
                        var e, i, n;
                        if ("number" == typeof t) t += f;
                        else if (r && D.test(t)) {
                            for (i = t.replace(D, "|").split("|"), n = 0; i.length > n; n++) i[n] = a(i[n]);
                            return i.join(",")
                        }
                        if (n = (e = t.match(w) || []).length, p > n--)
                            for (; p > ++n;) e[n] = s ? e[0 | (n - 1) / 2] : d[n];
                        return c + e.join(u) + h
                    } : function (t) {
                        return t
                    }
                },
                pt = function (d) {
                    return d = d.split(","),
                        function (t, e, i, n, o, s, r) {
                            var a, l = (e + "").split(" ");
                            for (r = {}, a = 0; a < 4; a++) r[d[a]] = l[a] = l[a] || l[(a - 1) / 2 >> 0];
                            return n.parse(t, r, o, s)
                        }
                },
                ft = (o._setPluginRatio = function (t) {
                    this.plugin.setRatio(t);
                    for (var e, i, n, o, s = this.data, r = s.proxy, a = s.firstMPT; a;) e = r[a.v], a.r ? e = 0 < e ? 0 | e + .5 : 0 | e - .5 : e < 1e-6 && -1e-6 < e && (e = 0), a.t[a.p] = e, a = a._next;
                    if (s.autoRotate && (s.autoRotate.rotation = r.rotation), 1 === t)
                        for (a = s.firstMPT; a;) {
                            if ((i = a.t).type) {
                                if (1 === i.type) {
                                    for (o = i.xs0 + i.s + i.xs1, n = 1; i.l > n; n++) o += i["xn" + n] + i["xs" + (n + 1)];
                                    i.e = o
                                }
                            } else i.e = i.s + i.xs0;
                            a = a._next
                        }
                }, function (t, e, i, n, o) {
                    this.t = t, this.p = e, this.v = i, this.r = o, n && ((n._prev = this)._next = n)
                }),
                gt = (o._parseToProxy = function (t, e, i, n, o, s) {
                    var r, a, l, d, c, h = n,
                        u = {},
                        p = {},
                        f = i._transform,
                        g = _;
                    for (i._transform = null, _ = e, n = c = i.parse(t, e, n, o), _ = g, s && (i._transform = f, h && (h._prev = null, h._prev && (h._prev._next = null))); n && n !== h;) {
                        if (n.type <= 1 && (p[a = n.p] = n.s + n.c, u[a] = n.s, s || (d = new ft(n, "s", a, d, n.r), n.c = 0), 1 === n.type))
                            for (r = n.l; 0 < --r;) l = "xn" + r, p[a = n.p + "_" + l] = n.data[l], u[a] = n[l], s || (d = new ft(n, l, a, d, n.rxp[l]));
                        n = n._next
                    }
                    return {
                        proxy: u,
                        end: p,
                        firstMPT: d,
                        pt: c
                    }
                }, o.CSSPropTween = function (t, e, i, n, o, s, r, a, l, d, c) {
                    this.t = t, this.p = e, this.s = i, this.c = n, this.n = r || e, t instanceof gt || p.push(this.n), this.r = a, this.type = s || 0, l && (this.pr = l, f = !0), this.b = void 0 === d ? i : d, this.e = void 0 === c ? i + n : c, o && ((this._next = o)._prev = this)
                }),
                mt = K.parseComplex = function (t, e, i, n, o, s, r, a, l, d) {
                    r = new gt(t, e, 0, 0, r, d ? 2 : 1, null, !1, a, i = i || s || "", n), n += "";
                    var c, h, u, p, f, g, m, v, y, w, b, x, _ = i.split(", ").join(",").split(" "),
                        T = n.split(", ").join(",").split(" "),
                        C = _.length,
                        k = !1 !== S;
                    for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (_ = _.join(" ").replace(D, ", ").split(" "), T = T.join(" ").replace(D, ", ").split(" "), C = _.length), C !== T.length && (C = (_ = (s || "").split(" ")).length), r.plugin = l, r.setRatio = d, c = 0; c < C; c++)
                        if (p = _[c], f = T[c], (v = parseFloat(p)) || 0 === v) r.appendXtra("", v, st(f, v), f.replace(P, ""), k && -1 !== f.indexOf("px"), !0);
                        else if (o && ("#" === p.charAt(0) || lt[p] || O.test(p))) x = "," === f.charAt(f.length - 1) ? ")," : ")", p = ct(p), f = ct(f), (y = 6 < p.length + f.length) && !j && 0 === f[3] ? (r["xs" + r.l] += r.l ? " transparent" : "transparent", r.e = r.e.split(T[c]).join("transparent")) : (j || (y = !1), r.appendXtra(y ? "rgba(" : "rgb(", p[0], f[0] - p[0], ",", !0, !0).appendXtra("", p[1], f[1] - p[1], ",", !0).appendXtra("", p[2], f[2] - p[2], y ? "," : x, !0), y && (p = p.length < 4 ? 1 : p[3], r.appendXtra("", p, (f.length < 4 ? 1 : f[3]) - p, x, !1)));
                    else if (g = p.match(E)) {
                        if (!(m = f.match(P)) || m.length !== g.length) return r;
                        for (h = u = 0; g.length > h; h++) b = g[h], w = p.indexOf(b, u), r.appendXtra(p.substr(u, w - u), Number(b), st(m[h], b), "", k && "px" === p.substr(w + b.length, 2), 0 === h), u = w + b.length;
                        r["xs" + r.l] += p.substr(u)
                    } else r["xs" + r.l] += r.l ? " " + p : p;
                    if (-1 !== n.indexOf("=") && r.data) {
                        for (x = r.xs0 + r.data.s, c = 1; r.l > c; c++) x += r["xs" + c] + r.data["xn" + c];
                        r.e = x + r["xs" + c]
                    }
                    return r.l || (r.type = -1, r.xs0 = r.e), r.xfirst || r
                },
                vt = 9;
            for ((t = gt.prototype).l = t.pr = 0; 0 < --vt;) t["xn" + vt] = 0, t["xs" + vt] = "";
            t.xs0 = "", t._next = t._prev = t.xfirst = t.data = t.plugin = t.setRatio = t.rxp = null, t.appendXtra = function (t, e, i, n, o, s) {
                var r = this,
                    a = r.l;
                return r["xs" + a] += s && a ? " " + t : t || "", i || 0 === a || r.plugin ? (r.l++, r.type = r.setRatio ? 2 : 1, r["xs" + r.l] = n || "", 0 < a ? (r.data["xn" + a] = e + i, r.rxp["xn" + a] = o, r["xn" + a] = e, r.plugin || (r.xfirst = new gt(r, "xn" + a, e, i, r.xfirst || r, 0, r.n, o, r.pr), r.xfirst.xs0 = 0)) : (r.data = {
                    s: e + i
                }, r.rxp = {}, r.s = e, r.c = i, r.r = o)) : r["xs" + a] += e + (n || ""), r
            };
            var yt = function (t, e) {
                    e = e || {}, this.p = e.prefix && X(t) || t, g[t] = g[this.p] = this, this.format = e.formatter || ut(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                },
                wt = o._registerComplexSpecialProp = function (t, e, i) {
                    "object" != typeof e && (e = {
                        parser: i
                    });
                    var n, o = t.split(","),
                        s = e.defaultValue;
                    for (i = i || [s], n = 0; o.length > n; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || s, new yt(o[n], e)
                },
                bt = function (t) {
                    if (!g[t]) {
                        var l = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                        wt(t, {
                            parser: function (t, e, i, n, o, s, r) {
                                var a = (window.GreenSockGlobals || window).com.greensock.plugins[l];
                                return a ? (a._cssRegister(), g[i].parse(t, e, i, n, o, s, r)) : (W("Error: " + l + " js file not loaded."), o)
                            }
                        })
                    }
                };
            (t = yt.prototype).parseComplex = function (t, e, i, n, o, s) {
                var r, a, l, d, c, h = this.keyword;
                if (this.multi && (D.test(i) || D.test(e) ? (a = e.replace(D, "|").split("|"), l = i.replace(D, "|").split("|")) : h && (a = [e], l = [i])), l) {
                    for (d = l.length > a.length ? l.length : a.length, r = 0; r < d; r++) e = a[r] = a[r] || this.dflt, i = l[r] = l[r] || this.dflt, h && (e.indexOf(h) !== (c = i.indexOf(h)) && ((i = -1 === c ? l : a)[r] += " " + h));
                    e = a.join(", "), i = l.join(", ")
                }
                return mt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, o, s)
            }, t.parse = function (t, e, i, n, o, s) {
                return this.parseComplex(t.style, this.format(nt(t, this.p, C, !1, this.dflt)), this.format(e), o, s)
            }, K.registerSpecialProp = function (t, a, l) {
                wt(t, {
                    parser: function (t, e, i, n, o, s) {
                        var r = new gt(t, i, 0, 0, o, 2, i, !1, l);
                        return r.plugin = s, r.setRatio = a(t, e, n._tween, i), r
                    },
                    priority: l
                })
            };
            var xt = "scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(","),
                _t = X("transform"),
                Tt = F + "transform",
                Ct = X("transformOrigin"),
                kt = null !== X("perspective"),
                St = function (t, e, i, n) {
                    if (t._gsTransform && i && !n) return t._gsTransform;
                    var o, s, r, a, l, d, c, h, u, p, f, g, m, v = i && t._gsTransform || {
                            skewY: 0
                        },
                        y = v.scaleX < 0,
                        w = 2e-5,
                        b = 1e5,
                        x = 179.99,
                        _ = x * et,
                        T = kt && (parseFloat(nt(t, Ct, e, !1, "0 0 0").split(" ")[2]) || v.zOrigin) || 0;
                    for (_t ? o = nt(t, Tt, e, !0) : t.currentStyle && (o = (o = t.currentStyle.filter.match(tt)) && 4 === o.length ? [o[0].substr(4), Number(o[2].substr(4)), Number(o[1].substr(4)), o[3].substr(4), v.x || 0, v.y || 0].join(",") : ""), r = (s = (o || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || []).length; - 1 < --r;) a = Number(s[r]), s[r] = (l = a - (a |= 0)) ? (0 | l * b + (l < 0 ? -.5 : .5)) / b + a : a;
                    if (16 === s.length) {
                        var C = s[8],
                            k = s[9],
                            S = s[10],
                            E = s[12],
                            P = s[13],
                            A = s[14];
                        if (v.zOrigin && (E = C * (A = -v.zOrigin) - s[12], P = k * A - s[13], A = S * A + v.zOrigin - s[14]), !i || n || null == v.rotationX) {
                            var N, O, M, I, D, $, L, z = s[0],
                                R = s[1],
                                j = s[2],
                                H = s[3],
                                W = s[4],
                                F = s[5],
                                q = s[6],
                                X = s[7],
                                B = s[11],
                                Y = Math.atan2(q, S),
                                U = Y < -_ || _ < Y;
                            v.rotationX = Y * it, Y && (N = W * (I = Math.cos(-Y)) + C * (D = Math.sin(-Y)), O = F * I + k * D, M = q * I + S * D, C = W * -D + C * I, k = F * -D + k * I, S = q * -D + S * I, B = X * -D + B * I, W = N, F = O, q = M), Y = Math.atan2(C, z), v.rotationY = Y * it, Y && ($ = Y < -_ || _ < Y, O = R * (I = Math.cos(-Y)) - k * (D = Math.sin(-Y)), M = j * I - S * D, k = R * D + k * I, S = j * D + S * I, B = H * D + B * I, z = N = z * I - C * D, R = O, j = M), Y = Math.atan2(R, F), v.rotation = Y * it, Y && (L = Y < -_ || _ < Y, z = z * (I = Math.cos(-Y)) + W * (D = Math.sin(-Y)), O = R * I + F * D, F = R * -D + F * I, q = j * -D + q * I, R = O), L && U ? v.rotation = v.rotationX = 0 : L && $ ? v.rotation = v.rotationY = 0 : $ && U && (v.rotationY = v.rotationX = 0), v.scaleX = (0 | Math.sqrt(z * z + R * R) * b + .5) / b, v.scaleY = (0 | Math.sqrt(F * F + k * k) * b + .5) / b, v.scaleZ = (0 | Math.sqrt(q * q + S * S) * b + .5) / b, v.skewX = 0, v.perspective = B ? 1 / (B < 0 ? -B : B) : 0, v.x = E, v.y = P, v.z = A
                        }
                    } else if (!(kt && !n && s.length && v.x === s[4] && v.y === s[5] && (v.rotationX || v.rotationY) || void 0 !== v.x && "none" === nt(t, "display", e))) {
                        var V = 6 <= s.length,
                            Q = V ? s[0] : 1,
                            Z = s[1] || 0,
                            G = s[2] || 0,
                            J = V ? s[3] : 1;
                        v.x = s[4] || 0, v.y = s[5] || 0, d = Math.sqrt(Q * Q + Z * Z), c = Math.sqrt(J * J + G * G), h = Q || Z ? Math.atan2(Z, Q) * it : v.rotation || 0, u = G || J ? Math.atan2(G, J) * it + h : v.skewX || 0, p = d - Math.abs(v.scaleX || 0), f = c - Math.abs(v.scaleY || 0), 90 < Math.abs(u) && Math.abs(u) < 270 && (y ? (d *= -1, u += h <= 0 ? 180 : -180, h += h <= 0 ? 180 : -180) : (c *= -1, u += u <= 0 ? 180 : -180)), g = (h - v.rotation) % 180, m = (u - v.skewX) % 180, (void 0 === v.skewX || w < p || p < -w || w < f || f < -w || -x < g && g < x && !1 | g * b || -x < m && m < x && !1 | m * b) && (v.scaleX = d, v.scaleY = c, v.rotation = h, v.skewX = u), kt && (v.rotationX = v.rotationY = v.z = 0, v.perspective = parseFloat(K.defaultTransformPerspective) || 0, v.scaleZ = 1)
                    }
                    for (r in v.zOrigin = T, v) w > v[r] && v[r] > -w && (v[r] = 0);
                    return i && (t._gsTransform = v), v
                },
                Et = function (t) {
                    var e, i, n = this.data,
                        o = -n.rotation * et,
                        s = o + n.skewX * et,
                        r = 1e5,
                        a = (0 | Math.cos(o) * n.scaleX * r) / r,
                        l = (0 | Math.sin(o) * n.scaleX * r) / r,
                        d = (0 | Math.sin(s) * -n.scaleY * r) / r,
                        c = (0 | Math.cos(s) * n.scaleY * r) / r,
                        h = this.t.style,
                        u = this.t.currentStyle;
                    if (u) {
                        i = l, l = -d, d = -i, e = u.filter, h.filter = "";
                        var p, f, g = this.t.offsetWidth,
                            m = this.t.offsetHeight,
                            v = "absolute" !== u.position,
                            y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + d + ", M22=" + c,
                            w = n.x,
                            b = n.y;
                        if (null != n.ox && (w += (p = (n.oxp ? .01 * g * n.ox : n.ox) - g / 2) - (p * a + (f = (n.oyp ? .01 * m * n.oy : n.oy) - m / 2) * l), b += f - (p * d + f * c)), v ? y += ", Dx=" + ((p = g / 2) - (p * a + (f = m / 2) * l) + w) + ", Dy=" + (f - (p * d + f * c) + b) + ")" : y += ", sizingMethod='auto expand')", h.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(M, y) : y + " " + e, (0 === t || 1 === t) && 1 === a && 0 === l && 0 === d && 1 === c && (v && -1 === y.indexOf("Dx=0, Dy=0") || N.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && h.removeAttribute("filter")), !v) {
                            var x, _, T, C = k < 8 ? 1 : -1;
                            for (p = n.ieOffsetX || 0, f = n.ieOffsetY || 0, n.ieOffsetX = Math.round((g - ((a < 0 ? -a : a) * g + (l < 0 ? -l : l) * m)) / 2 + w), n.ieOffsetY = Math.round((m - ((c < 0 ? -c : c) * m + (d < 0 ? -d : d) * g)) / 2 + b), vt = 0; vt < 4; vt++) T = (i = -1 !== (x = u[_ = G[vt]]).indexOf("px") ? parseFloat(x) : Y(this.t, _, parseFloat(x), x.replace(A, "")) || 0) !== n[_] ? vt < 2 ? -n.ieOffsetX : -n.ieOffsetY : vt < 2 ? p - n.ieOffsetX : f - n.ieOffsetY, h[_] = (n[_] = Math.round(i - T * (0 === vt || 2 === vt ? 1 : C))) + "px"
                        }
                    }
                },
                Pt = function () {
                    var t, e, i, n, o, s, r, a, l, d, c, h, u, p, f, g, m, v, y, w, b, x, _, T, C, k, S = this.data,
                        E = this.t.style,
                        P = S.rotation * et,
                        A = S.scaleX,
                        N = S.scaleY,
                        O = S.scaleZ,
                        M = S.perspective;
                    if (I && (T = E.top ? "top" : E.bottom ? "bottom" : parseFloat(nt(this.t, "top", null, !1)) ? "bottom" : "top", w = nt(this.t, T, null, !1), C = parseFloat(w) || 0, k = w.substr((C + "").length) || "px", S._ffFix = !S._ffFix, E[T] = (S._ffFix ? C + .05 : C - .05) + k), P || S.skewX) t = v = Math.cos(P), o = y = Math.sin(P), S.skewX && (P -= S.skewX * et, v = Math.cos(P), y = Math.sin(P)), e = -y, s = v;
                    else {
                        if (!(S.rotationY || S.rotationX || 1 !== O || M)) return void(E[_t] = "translate3d(" + S.x + "px," + S.y + "px," + S.z + "px)" + (1 !== A || 1 !== N ? " scale(" + A + "," + N + ")" : ""));
                        t = s = 1, e = o = 0
                    }
                    c = 1, i = n = r = a = l = d = h = u = p = 0, f = M ? -1 / M : 0, g = S.zOrigin, m = 1e5, (P = S.rotationY * et) && (v = Math.cos(P), l = c * -(y = Math.sin(P)), u = f * -y, i = t * y, r = o * y, c *= v, f *= v, t *= v, o *= v), (P = S.rotationX * et) && (w = e * (v = Math.cos(P)) + i * (y = Math.sin(P)), b = s * v + r * y, x = d * v + c * y, _ = p * v + f * y, i = e * -y + i * v, r = s * -y + r * v, c = d * -y + c * v, f = p * -y + f * v, e = w, s = b, d = x, p = _), 1 !== O && (i *= O, r *= O, c *= O, f *= O), 1 !== N && (e *= N, s *= N, d *= N, p *= N), 1 !== A && (t *= A, o *= A, l *= A, u *= A), g && (n = i * (h -= g), a = r * h, h = c * h + g), n = (w = (n += S.x) - (n |= 0)) ? (0 | w * m + (w < 0 ? -.5 : .5)) / m + n : n, a = (w = (a += S.y) - (a |= 0)) ? (0 | w * m + (w < 0 ? -.5 : .5)) / m + a : a, h = (w = (h += S.z) - (h |= 0)) ? (0 | w * m + (w < 0 ? -.5 : .5)) / m + h : h, E[_t] = "matrix3d(" + [(0 | t * m) / m, (0 | o * m) / m, (0 | l * m) / m, (0 | u * m) / m, (0 | e * m) / m, (0 | s * m) / m, (0 | d * m) / m, (0 | p * m) / m, (0 | i * m) / m, (0 | r * m) / m, (0 | c * m) / m, (0 | f * m) / m, n, a, h, M ? 1 + -h / M : 1].join(",") + ")"
                },
                At = function () {
                    var t, e, i, n, o, s, r, a, l = this.data,
                        d = this.t,
                        c = d.style;
                    I && (t = c.top ? "top" : c.bottom ? "bottom" : parseFloat(nt(d, "top", null, !1)) ? "bottom" : "top", e = nt(d, t, null, !1), i = parseFloat(e) || 0, n = e.substr((i + "").length) || "px", l._ffFix = !l._ffFix, c[t] = (l._ffFix ? i + .05 : i - .05) + n), l.rotation || l.skewX ? (s = (o = l.rotation * et) - l.skewX * et, r = 1e5 * l.scaleX, a = 1e5 * l.scaleY, c[_t] = "matrix(" + (0 | Math.cos(o) * r) / 1e5 + "," + (0 | Math.sin(o) * r) / 1e5 + "," + (0 | Math.sin(s) * -a) / 1e5 + "," + (0 | Math.cos(s) * a) / 1e5 + "," + l.x + "," + l.y + ")") : c[_t] = "matrix(" + l.scaleX + ",0,0," + l.scaleY + "," + l.x + "," + l.y + ")"
                };
            wt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D", {
                parser: function (t, e, i, n, o, s, r) {
                    if (n._transform) return o;
                    var a, l, d, c, h, u, p, f = n._transform = St(t, C, !0, r.parseTransform),
                        g = t.style,
                        m = xt.length,
                        v = r,
                        y = {};
                    if ("string" == typeof v.transform && _t) d = g.cssText, g[_t] = v.transform, g.display = "block", a = St(t, null, !1), g.cssText = d;
                    else if ("object" == typeof v) {
                        if (a = {
                                scaleX: rt(null != v.scaleX ? v.scaleX : v.scale, f.scaleX),
                                scaleY: rt(null != v.scaleY ? v.scaleY : v.scale, f.scaleY),
                                scaleZ: rt(null != v.scaleZ ? v.scaleZ : v.scale, f.scaleZ),
                                x: rt(v.x, f.x),
                                y: rt(v.y, f.y),
                                z: rt(v.z, f.z),
                                perspective: rt(v.transformPerspective, f.perspective)
                            }, null != (p = v.directionalRotation))
                            if ("object" == typeof p)
                                for (d in p) v[d] = p[d];
                            else v.rotation = p;
                        a.rotation = at("rotation" in v ? v.rotation : "shortRotation" in v ? v.shortRotation + "_short" : "rotationZ" in v ? v.rotationZ : f.rotation, f.rotation, "rotation", y), kt && (a.rotationX = at("rotationX" in v ? v.rotationX : "shortRotationX" in v ? v.shortRotationX + "_short" : f.rotationX || 0, f.rotationX, "rotationX", y), a.rotationY = at("rotationY" in v ? v.rotationY : "shortRotationY" in v ? v.shortRotationY + "_short" : f.rotationY || 0, f.rotationY, "rotationY", y)), a.skewX = null == v.skewX ? f.skewX : at(v.skewX, f.skewX), a.skewY = null == v.skewY ? f.skewY : at(v.skewY, f.skewY), (l = a.skewY - f.skewY) && (a.skewX += l, a.rotation += l)
                    }
                    for (null != v.force3D && (f.force3D = v.force3D, u = !0), (h = f.force3D || f.z || f.rotationX || f.rotationY || a.z || a.rotationX || a.rotationY || a.perspective) || null == v.scale || (a.scaleZ = 1); - 1 < --m;)(1e-6 < (c = a[i = xt[m]] - f[i]) || c < -1e-6 || null != _[i]) && (u = !0, o = new gt(f, i, f[i], c, o), i in y && (o.e = y[i]), o.xs0 = 0, o.plugin = s, n._overwriteProps.push(o.n));
                    return ((c = v.transformOrigin) || kt && h && f.zOrigin) && (_t ? (u = !0, i = Ct, c = (c || nt(t, i, C, !1, "50% 50%")) + "", (o = new gt(g, i, 0, 0, o, -1, "transformOrigin")).b = g[i], o.plugin = s, kt ? (d = f.zOrigin, c = c.split(" "), f.zOrigin = (2 < c.length && (0 === d || "0px" !== c[2]) ? parseFloat(c[2]) : d) || 0, o.xs0 = o.e = g[i] = c[0] + " " + (c[1] || "50%") + " 0px", (o = new gt(f, "zOrigin", 0, 0, o, -1, o.n)).b = d, o.xs0 = o.e = f.zOrigin) : o.xs0 = o.e = g[i] = c) : ot(c + "", f)), u && (n._transformType = h || 3 === this._transformType ? 3 : 2), o
                },
                prefix: !0
            }), wt("boxShadow", {
                defaultValue: "0px 0px 0px 0px #999",
                prefix: !0,
                color: !0,
                multi: !0,
                keyword: "inset"
            }), wt("borderRadius", {
                defaultValue: "0px",
                parser: function (t, e, i, n, o) {
                    e = this.format(e);
                    var s, r, a, l, d, c, h, u, p, f, g, m, v, y, w, b, x = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                        _ = t.style;
                    for (p = parseFloat(t.offsetWidth), f = parseFloat(t.offsetHeight), s = e.split(" "), r = 0; x.length > r; r++) this.p.indexOf("border") && (x[r] = X(x[r])), -1 !== (d = l = nt(t, x[r], C, !1, "0px")).indexOf(" ") && (d = (l = d.split(" "))[0], l = l[1]), c = a = s[r], h = parseFloat(d), m = d.substr((h + "").length), (v = "=" === c.charAt(1)) ? (u = parseInt(c.charAt(0) + "1", 10), c = c.substr(2), u *= parseFloat(c), g = c.substr((u + "").length - (u < 0 ? 1 : 0)) || "") : (u = parseFloat(c), g = c.substr((u + "").length)), "" === g && (g = T[i] || m), g !== m && (y = Y(t, "borderLeft", h, m), w = Y(t, "borderTop", h, m), "%" === g ? (d = y / p * 100 + "%", l = w / f * 100 + "%") : "em" === g ? (d = y / (b = Y(t, "borderLeft", 1, "em")) + "em", l = w / b + "em") : (d = y + "px", l = w + "px"), v && (c = parseFloat(d) + u + g, a = parseFloat(l) + u + g)), o = mt(_, x[r], d + " " + l, c + " " + a, !1, "0px", o);
                    return o
                },
                prefix: !0,
                formatter: ut("0px 0px 0px 0px", !1, !0)
            }), wt("backgroundPosition", {
                defaultValue: "0 0",
                parser: function (t, e, i, n, o, s) {
                    var r, a, l, d, c, h, u = "background-position",
                        p = C || B(t, null),
                        f = this.format((p ? k ? p.getPropertyValue(u + "-x") + " " + p.getPropertyValue(u + "-y") : p.getPropertyValue(u) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                        g = this.format(e);
                    if (-1 !== f.indexOf("%") != (-1 !== g.indexOf("%")) && ((h = nt(t, "backgroundImage").replace(x, "")) && "none" !== h)) {
                        for (r = f.split(" "), a = g.split(" "), z.setAttribute("src", h), l = 2; - 1 < --l;)(d = -1 !== (f = r[l]).indexOf("%")) !== (-1 !== a[l].indexOf("%")) && (c = 0 === l ? t.offsetWidth - z.width : t.offsetHeight - z.height, r[l] = d ? parseFloat(f) / 100 * c + "px" : parseFloat(f) / c * 100 + "%");
                        f = r.join(" ")
                    }
                    return this.parseComplex(t.style, f, g, o, s)
                },
                formatter: ot
            }), wt("backgroundSize", {
                defaultValue: "0 0",
                formatter: ot
            }), wt("perspective", {
                defaultValue: "0px",
                prefix: !0
            }), wt("perspectiveOrigin", {
                defaultValue: "50% 50%",
                prefix: !0
            }), wt("transformStyle", {
                prefix: !0
            }), wt("backfaceVisibility", {
                prefix: !0
            }), wt("userSelect", {
                prefix: !0
            }), wt("margin", {
                parser: pt("marginTop,marginRight,marginBottom,marginLeft")
            }), wt("padding", {
                parser: pt("paddingTop,paddingRight,paddingBottom,paddingLeft")
            }), wt("clip", {
                defaultValue: "rect(0px,0px,0px,0px)",
                parser: function (t, e, i, n, o, s) {
                    var r, a, l;
                    return k < 9 ? (a = t.currentStyle, l = k < 8 ? " " : ",", r = "rect(" + a.clipTop + l + a.clipRight + l + a.clipBottom + l + a.clipLeft + ")", e = this.format(e).split(",").join(l)) : (r = this.format(nt(t, this.p, C, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, r, e, o, s)
                }
            }), wt("textShadow", {
                defaultValue: "0px 0px 0px #999",
                color: !0,
                multi: !0
            }), wt("autoRound,strictUnits", {
                parser: function (t, e, i, n, o) {
                    return o
                }
            }), wt("border", {
                defaultValue: "0px solid #000",
                parser: function (t, e, i, n, o, s) {
                    return this.parseComplex(t.style, this.format(nt(t, "borderTopWidth", C, !1, "0px") + " " + nt(t, "borderTopStyle", C, !1, "solid") + " " + nt(t, "borderTopColor", C, !1, "#000")), this.format(e), o, s)
                },
                color: !0,
                formatter: function (t) {
                    var e = t.split(" ");
                    return e[0] + " " + (e[1] || "solid") + " " + (t.match(ht) || ["#000"])[0]
                }
            }), wt("float,cssFloat,styleFloat", {
                parser: function (t, e, i, n, o) {
                    var s = t.style,
                        r = "cssFloat" in s ? "cssFloat" : "styleFloat";
                    return new gt(s, r, 0, 0, o, -1, i, !1, 0, s[r], e)
                }
            });
            var Nt = function (t) {
                var e, i = this.t,
                    n = i.filter || nt(this.data, "filter"),
                    o = 0 | this.s + this.c * t;
                100 === o && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), e = !nt(this.data, "filter")) : (i.filter = n.replace(r, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + o + ")"), -1 === n.indexOf("opacity") ? 0 === o && this.xn1 || (i.filter = n + " alpha(opacity=" + o + ")") : i.filter = n.replace(N, "opacity=" + o))
            };
            wt("opacity,alpha,autoAlpha", {
                defaultValue: "1",
                parser: function (t, e, i, n, o, s) {
                    var r = parseFloat(nt(t, "opacity", C, !1, "1")),
                        a = t.style,
                        l = "autoAlpha" === i;
                    return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + r), l && 1 === r && "hidden" === nt(t, "visibility", C) && 0 !== e && (r = 0), j ? o = new gt(a, "opacity", r, e - r, o) : ((o = new gt(a, "opacity", 100 * r, 100 * (e - r), o)).xn1 = l ? 1 : 0, a.zoom = 1, o.type = 2, o.b = "alpha(opacity=" + o.s + ")", o.e = "alpha(opacity=" + (o.s + o.c) + ")", o.data = t, o.plugin = s, o.setRatio = Nt), l && ((o = new gt(a, "visibility", 0, 0, o, -1, null, !1, 0, 0 !== r ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit")).xs0 = "inherit", n._overwriteProps.push(o.n), n._overwriteProps.push(i)), o
                }
            });
            var Ot = function (t, e) {
                    e && (t.removeProperty ? t.removeProperty(e.replace(a, "-$1").toLowerCase()) : t.removeAttribute(e))
                },
                Mt = function (t) {
                    if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                        this.t.className = 0 === t ? this.b : this.e;
                        for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Ot(i, e.p), e = e._next;
                        1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                    } else this.t.className !== this.e && (this.t.className = this.e)
                };
            wt("className", {
                parser: function (t, e, i, n, o, s, r) {
                    var a, l, d, c, h, u = t.className,
                        p = t.style.cssText;
                    if ((o = n._classNamePT = new gt(t, i, 0, 0, o, 2)).setRatio = Mt, o.pr = -11, f = !0, o.b = u, l = V(t, C), d = t._gsClassPT) {
                        for (c = {}, h = d.data; h;) c[h.p] = 1, h = h._next;
                        d.setRatio(1)
                    }
                    return (t._gsClassPT = o).e = "=" !== e.charAt(1) ? e : u.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), n._tween._duration && (t.className = o.e, a = Q(t, l, V(t), r, c), t.className = u, o.data = a.firstMPT, t.style.cssText = p, o = o.xfirst = n.parse(t, a.difs, o, s)), o
                }
            });
            var It = function (t) {
                if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                    var e, i, n, o, s = this.t.style,
                        r = g.transform.parse;
                    if ("all" === this.e) o = !(s.cssText = "");
                    else
                        for (n = (e = this.e.split(",")).length; - 1 < --n;) i = e[n], g[i] && (g[i].parse === r ? o = !0 : i = "transformOrigin" === i ? Ct : g[i].p), Ot(s, i);
                    o && (Ot(s, _t), this.t._gsTransform && delete this.t._gsTransform)
                }
            };
            for (wt("clearProps", {
                    parser: function (t, e, i, n, o) {
                        return (o = new gt(t, i, 0, 0, o, 2)).setRatio = It, o.e = e, o.pr = -10, o.data = n._tween, f = !0, o
                    }
                }), t = "bezier,throwProps,physicsProps,physics2D".split(","), vt = t.length; vt--;) bt(t[vt]);
            (t = K.prototype)._firstPT = null, t._onInitTween = function (t, e, i) {
                if (!t.nodeType) return !1;
                this._target = t, this._tween = i, this._vars = e, S = e.autoRound, f = !1, T = e.suffixMap || K.suffixMap, C = B(t, ""), p = this._overwriteProps;
                var n, o, s, r, a, l, d, c, h, u = t.style;
                if (m && "" === u.zIndex && (("auto" === (n = nt(t, "zIndex", C)) || "" === n) && (u.zIndex = 0)), "string" == typeof e && (r = u.cssText, n = V(t, C), u.cssText = r + ";" + e, n = Q(t, n, V(t)).difs, !j && b.test(e) && (n.opacity = parseFloat(RegExp.$1)), e = n, u.cssText = r), this._firstPT = o = this.parse(t, e, null), this._transformType) {
                    for (h = 3 === this._transformType, _t ? v && (m = !0, "" === u.zIndex && (("auto" === (d = nt(t, "zIndex", C)) || "" === d) && (u.zIndex = 0)), y && (u.WebkitBackfaceVisibility = this._vars.WebkitBackfaceVisibility || (h ? "visible" : "hidden"))) : u.zoom = 1, s = o; s && s._next;) s = s._next;
                    c = new gt(t, "transform", 0, 0, null, 2), this._linkCSSP(c, null, s), c.setRatio = h && kt ? Pt : _t ? At : Et, c.data = this._transform || St(t, C, !0), p.pop()
                }
                if (f) {
                    for (; o;) {
                        for (l = o._next, s = r; s && s.pr > o.pr;) s = s._next;
                        (o._prev = s ? s._prev : a) ? o._prev._next = o: r = o, (o._next = s) ? s._prev = o : a = o, o = l
                    }
                    this._firstPT = r
                }
                return !0
            }, t.parse = function (t, e, i, n) {
                var o, s, r, a, l, d, c, h, u, p, f = t.style;
                for (o in e) d = e[o], (s = g[o]) ? i = s.parse(t, d, o, this, i, n, e) : (l = nt(t, o, C) + "", u = "string" == typeof d, "color" === o || "fill" === o || "stroke" === o || -1 !== o.indexOf("Color") || u && O.test(d) ? (u || (d = (3 < (d = ct(d)).length ? "rgba(" : "rgb(") + d.join(",") + ")"), i = mt(f, o, l, d, !0, "transparent", i, 0, n)) : !u || -1 === d.indexOf(" ") && -1 === d.indexOf(",") ? (c = (r = parseFloat(l)) || 0 === r ? l.substr((r + "").length) : "", ("" === l || "auto" === l) && ("width" === o || "height" === o ? (r = J(t, o, C), c = "px") : "left" === o || "top" === o ? (r = U(t, o, C), c = "px") : (r = "opacity" !== o ? 0 : 1, c = "")), (p = u && "=" === d.charAt(1)) ? (a = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), a *= parseFloat(d), h = d.replace(A, "")) : (a = parseFloat(d), h = u && d.substr((a + "").length) || ""), "" === h && (h = T[o] || c), d = a || 0 === a ? (p ? a + r : a) + h : e[o], c !== h && "" !== h && (a || 0 === a) && (r || 0 === r) && (r = Y(t, o, r, c), "%" === h ? (100 < (r /= Y(t, o, 100, "%") / 100) && (r = 100), !0 !== e.strictUnits && (l = r + "%")) : "em" === h ? r /= Y(t, o, 1, "em") : (a = Y(t, o, a, h), h = "px"), p && (a || 0 === a) && (d = a + r + h)), p && (a += r), !r && 0 !== r || !a && 0 !== a ? void 0 !== f[o] && (d || "NaN" != d + "" && null != d) ? (i = new gt(f, o, a || r || 0, 0, i, -1, o, !1, 0, l, d)).xs0 = "none" !== d || "display" !== o && -1 === o.indexOf("Style") ? d : l : W("invalid " + o + " tween value: " + e[o]) : (i = new gt(f, o, r, a - r, i, 0, o, !1 !== S && ("px" === h || "zIndex" === o), 0, l, d)).xs0 = h) : i = mt(f, o, l, d, !0, null, i, 0, n)), n && i && !i.plugin && (i.plugin = n);
                return i
            }, t.setRatio = function (t) {
                var e, i, n, o = this._firstPT;
                if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                    if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                        for (; o;) {
                            if (e = o.c * t + o.s, o.r ? e = 0 < e ? 0 | e + .5 : 0 | e - .5 : e < 1e-6 && -1e-6 < e && (e = 0), o.type)
                                if (1 === o.type)
                                    if (2 === (n = o.l)) o.t[o.p] = o.xs0 + e + o.xs1 + o.xn1 + o.xs2;
                                    else if (3 === n) o.t[o.p] = o.xs0 + e + o.xs1 + o.xn1 + o.xs2 + o.xn2 + o.xs3;
                            else if (4 === n) o.t[o.p] = o.xs0 + e + o.xs1 + o.xn1 + o.xs2 + o.xn2 + o.xs3 + o.xn3 + o.xs4;
                            else if (5 === n) o.t[o.p] = o.xs0 + e + o.xs1 + o.xn1 + o.xs2 + o.xn2 + o.xs3 + o.xn3 + o.xs4 + o.xn4 + o.xs5;
                            else {
                                for (i = o.xs0 + e + o.xs1, n = 1; o.l > n; n++) i += o["xn" + n] + o["xs" + (n + 1)];
                                o.t[o.p] = i
                            } else -1 === o.type ? o.t[o.p] = o.xs0 : o.setRatio && o.setRatio(t);
                            else o.t[o.p] = e + o.xs0;
                            o = o._next
                        } else
                            for (; o;) 2 !== o.type ? o.t[o.p] = o.b : o.setRatio(t), o = o._next;
                    else
                        for (; o;) 2 !== o.type ? o.t[o.p] = o.e : o.setRatio(t), o = o._next
            }, t._enableTransforms = function (t) {
                this._transformType = t || 3 === this._transformType ? 3 : 2, this._transform = this._transform || St(this._target, C, !0)
            }, t._linkCSSP = function (t, e, i, n) {
                return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
            }, t._kill = function (t) {
                var e, i, n, o = t;
                if (t.autoAlpha || t.alpha) {
                    for (i in o = {}, t) o[i] = t[i];
                    o.opacity = 1, o.autoAlpha && (o.visibility = 1)
                }
                return t.className && (e = this._classNamePT) && ((n = e.xfirst) && n._prev ? this._linkCSSP(n._prev, e._next, n._prev._prev) : n === this._firstPT && (this._firstPT = e._next), e._next && this._linkCSSP(e._next, e._next._next, n._prev), this._classNamePT = null), s.prototype._kill.call(this, o)
            };
            var Dt = function (t, e, i) {
                var n, o, s, r;
                if (t.slice)
                    for (o = t.length; - 1 < --o;) Dt(t[o], e, i);
                else
                    for (o = (n = t.childNodes).length; - 1 < --o;) r = (s = n[o]).type, s.style && (e.push(V(s)), i && i.push(s)), 1 !== r && 9 !== r && 11 !== r || !s.childNodes.length || Dt(s, e, i)
            };
            return K.cascadeTo = function (t, e, i) {
                var n, o, s, r = u.to(t, e, i),
                    a = [r],
                    l = [],
                    d = [],
                    c = [],
                    h = u._internals.reservedProps;
                for (t = r._targets || r.target, Dt(t, l, c), r.render(e, !0), Dt(t, d), r.render(0, !0), r._enabled(!0), n = c.length; - 1 < --n;)
                    if ((o = Q(c[n], l[n], d[n])).firstMPT) {
                        for (s in o = o.difs, i) h[s] && (o[s] = i[s]);
                        a.push(u.to(c[n], e, o))
                    } return a
            }, s.activate([K]), K
        }, !0)
    }), window._gsDefine && window._gsQueue.pop()(),
    function (S, t) {
        S.waitForImages = {
            hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage"]
        }, S.expr[":"].uncached = function (t) {
            var e = document.createElement("img");
            return e.src = t.src, S(t).is('img[src!=""]') && !e.complete
        }, S.fn.waitForImages = function (l, d, e) {
            if (S.isPlainObject(l) && (d = l.each, e = l.waitForAll, l = l.finished), l = l || S.noop, d = d || S.noop, e = !!e, !S.isFunction(l) || !S.isFunction(d)) throw new TypeError("An invalid callback was supplied.");
            return this.each(function () {
                var n = S(this),
                    s = [];
                if (e) {
                    var t = S.waitForImages.hasImageProperties || [],
                        r = /url\((['"]?)(.*?)\1\)/g;
                    n.find("*").each(function () {
                        var o = S(this);
                        o.is("img:uncached") && s.push({
                            src: o.attr("src"),
                            element: o[0]
                        }), S.each(t, function (t, e) {
                            var i, n = o.css(e);
                            if (!n) return !0;
                            for (; i = r.exec(n);) s.push({
                                src: i[2],
                                element: o[0]
                            })
                        })
                    })
                } else n.find("img:uncached").each(function () {
                    s.push({
                        src: this.src,
                        element: this
                    })
                });
                var o = s.length,
                    a = 0;
                0 == o && l.call(n[0]), S.each(s, function (t, e) {
                    var i = new Image;
                    S(i).bind("load error", function (t) {
                        if (a++, d.call(e.element, a, o, "load" == t.type), a == o) return l.call(n[0]), !1
                    }), i.src = e.src
                })
            })
        }, S.fn.swipe = function (t) {
            if (!this) return !1;
            var p = {
                    fingers: 1,
                    threshold: 75,
                    swipe: null,
                    swipeLeft: null,
                    swipeRight: null,
                    swipeUp: null,
                    swipeDown: null,
                    swipeStatus: null,
                    click: null,
                    triggerOnTouchEnd: !0,
                    allowPageScroll: "auto"
                },
                f = "left",
                g = "right",
                m = "down",
                v = "horizontal",
                y = "vertical",
                w = "end",
                b = "cancel",
                x = "ontouchstart" in window,
                _ = x ? "touchstart" : "mousedown",
                T = x ? "touchmove" : "mousemove",
                C = x ? "touchend" : "mouseup",
                k = "start";
            return null != t.allowPageScroll || null == t.swipe && null == t.swipeStatus || (t.allowPageScroll = "none"), t && S.extend(p, t), this.each(function () {
                function i() {
                    var t = function () {
                        var t = h.x - u.x,
                            e = u.y - h.y,
                            i = Math.atan2(e, t),
                            n = Math.round(180 * i / Math.PI);
                        n < 0 && (n = 360 - Math.abs(n));
                        return n
                    }();
                    return t <= 45 && 0 <= t ? f : t <= 360 && 315 <= t ? f : 135 <= t && t <= 225 ? g : 45 < t && t < 135 ? m : "up"
                }

                function n() {
                    return Math.round(Math.sqrt(Math.pow(u.x - h.x, 2) + Math.pow(u.y - h.y, 2)))
                }

                function o(t, e) {
                    if (p.swipeStatus && p.swipeStatus.call(d, t, e, direction || null, distance || 0), e == b && (!p.click || 1 != c && x || !isNaN(distance) && 0 != distance || p.click.call(d, t, t.target)), e == w) switch (p.swipe && p.swipe.call(d, t, direction, distance), direction) {
                        case f:
                            p.swipeLeft && p.swipeLeft.call(d, t, direction, distance);
                            break;
                        case g:
                            p.swipeRight && p.swipeRight.call(d, t, direction, distance);
                            break;
                        case "up":
                            p.swipeUp && p.swipeUp.call(d, t, direction, distance);
                            break;
                        case m:
                            p.swipeDown && p.swipeDown.call(d, t, direction, distance)
                    }
                }

                function s(t) {
                    c = 0, h.x = 0, h.y = 0, u.x = 0, u.y = 0, e.x = 0, e.y = 0
                }

                function r(t) {
                    t.preventDefault(), distance = n(), direction = i(), p.triggerOnTouchEnd ? (k = w, c != p.fingers && x || 0 == u.x ? o(t, k = b) : distance >= p.threshold ? o(t, k) : o(t, k = b), s()) : "move" == k && (o(t, k = b), s()), l.removeEventListener(T, a, !1), l.removeEventListener(C, r, !1)
                }

                function a(t) {
                    if (k != w && k != b) {
                        var e = x ? t.touches[0] : t;
                        u.x = e.pageX, u.y = e.pageY, direction = i(), x && (c = t.touches.length), k = "move",
                            function (t, e) {
                                if ("none" == p.allowPageScroll) t.preventDefault();
                                else {
                                    var i = "auto" == p.allowPageScroll;
                                    switch (e) {
                                        case f:
                                            (p.swipeLeft && i || !i && p.allowPageScroll != v) && t.preventDefault();
                                            break;
                                        case g:
                                            (p.swipeRight && i || !i && p.allowPageScroll != v) && t.preventDefault();
                                            break;
                                        case "up":
                                            (p.swipeUp && i || !i && p.allowPageScroll != y) && t.preventDefault();
                                            break;
                                        case m:
                                            (p.swipeDown && i || !i && p.allowPageScroll != y) && t.preventDefault()
                                    }
                                }
                            }(t, direction), c != p.fingers && x ? (o(t, k = b), s()) : (distance = n(), p.swipeStatus && o(t, k, direction, distance), p.triggerOnTouchEnd || distance >= p.threshold && (o(t, k = w), s()))
                    }
                }
                var l = this,
                    d = S(this),
                    c = 0,
                    h = {
                        x: 0,
                        y: 0
                    },
                    u = {
                        x: 0,
                        y: 0
                    },
                    e = {
                        x: 0,
                        y: 0
                    };
                try {
                    this.addEventListener(_, function (t) {
                        var e = x ? t.touches[0] : t;
                        k = "start", x && (c = t.touches.length), distance = 0, direction = null, c != p.fingers && x ? s() : (h.x = u.x = e.pageX, h.y = u.y = e.pageY, p.swipeStatus && o(t, k)), l.addEventListener(T, a, !1), l.addEventListener(C, r, !1)
                    }, !1), this.addEventListener("touchcancel", s)
                } catch (t) {}
            })
        }
    }(jQuery),
    function (Z, G) {
        function v() {
            var t = ["android", "webos", "iphone", "ipad", "blackberry", "Android", "webos", , "iPod", "iPhone", "iPad", "Blackberry", "BlackBerry"],
                e = !1;
            for (i in t) 1 < navigator.userAgent.split(t[i]).length && (e = !0);
            return e
        }

        function y(t, e) {
            if (t.cd = 0, 1 != t.videoplaying) {
                var i = e.find(".tp-bannertimer");
                0 < i.length && (i.stop(), i.css({
                    width: "0%"
                }), i.animate({
                    width: "100%"
                }, {
                    duration: t.delay - 100,
                    queue: !1,
                    easing: "linear"
                })), clearTimeout(t.thumbtimer), t.thumbtimer = setTimeout(function () {
                    b(e), _(e, t)
                }, 200)
            }
        }

        function w(t, e) {
            t.cd = 0, k(e, t);
            var i = e.find(".tp-bannertimer");
            0 < i.length && (i.stop(), i.css({
                width: "0%"
            }), 1 != t.videoplaying && i.animate({
                width: "100%"
            }, {
                duration: t.delay - 100,
                queue: !1,
                easing: "linear"
            }))
        }

        function b(t) {
            var e = t.parent().find(".tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer").parent(),
                i = (e.offset(), e.find(".bullet:first").outerWidth(!0)),
                n = e.find(".bullet.selected").index() * i,
                o = e.width(),
                s = (i = e.find(".bullet:first").outerWidth(!0)) * t.find(">ul:first >li").length,
                r = 0 - n;
            0 < r && (r = 0), r < 0 - s + o && (r = 0 - s + o), e.hasClass("over") || x(e, r, 200)
        }

        function x(t, e, i) {
            TweenLite.to(t.find(".tp-thumbcontainer"), .2, {
                left: e,
                ease: Power3.easeOut,
                overwrite: "auto"
            })
        }

        function _(t, e) {
            var i = t.parent(),
                n = i.find(".tp-bullets");
            if ("thumb" == e.navigationType) {
                n.find(".thumb").each(function (t) {
                    Z(this).css({
                        width: e.thumbWidth * e.bw + "px",
                        height: e.thumbHeight * e.bh + "px"
                    })
                });
                var o = n.find(".tp-mask");
                o.width(e.thumbWidth * e.thumbAmount * e.bw), o.height(e.thumbHeight * e.bh), o.parent().width(e.thumbWidth * e.thumbAmount * e.bw), o.parent().height(e.thumbHeight * e.bh)
            }
            var s = i.find(".tp-leftarrow"),
                r = i.find(".tp-rightarrow");
            "thumb" == e.navigationType && "nexttobullets" == e.navigationArrows && (e.navigationArrows = "solo"), "nexttobullets" == e.navigationArrows && (s.prependTo(n).css({
                float: "left"
            }), r.insertBefore(n.find(".tpclear")).css({
                float: "left"
            }));
            var a = 0;
            "on" == e.forceFullWidth && (a = 0 - e.container.parent().offset().left), "none" != e.navigationArrows && "nexttobullets" != e.navigationArrows && (s.css({
                position: "absolute"
            }), r.css({
                position: "absolute"
            }), "center" == e.soloArrowLeftValign && s.css({
                top: "50%",
                marginTop: e.soloArrowLeftVOffset - Math.round(s.innerHeight() / 2) + "px"
            }), "bottom" == e.soloArrowLeftValign && s.css({
                top: "auto",
                bottom: 0 + e.soloArrowLeftVOffset + "px"
            }), "top" == e.soloArrowLeftValign && s.css({
                bottom: "auto",
                top: 0 + e.soloArrowLeftVOffset + "px"
            }), "center" == e.soloArrowLeftHalign && s.css({
                left: "50%",
                marginLeft: a + e.soloArrowLeftHOffset - Math.round(s.innerWidth() / 2) + "px"
            }), "left" == e.soloArrowLeftHalign && s.css({
                left: 0 + e.soloArrowLeftHOffset + a + "px"
            }), "right" == e.soloArrowLeftHalign && s.css({
                right: 0 + e.soloArrowLeftHOffset - a + "px"
            }), "center" == e.soloArrowRightValign && r.css({
                top: "50%",
                marginTop: e.soloArrowRightVOffset - Math.round(r.innerHeight() / 2) + "px"
            }), "bottom" == e.soloArrowRightValign && r.css({
                top: "auto",
                bottom: 0 + e.soloArrowRightVOffset + "px"
            }), "top" == e.soloArrowRightValign && r.css({
                bottom: "auto",
                top: 0 + e.soloArrowRightVOffset + "px"
            }), "center" == e.soloArrowRightHalign && r.css({
                left: "50%",
                marginLeft: a + e.soloArrowRightHOffset - Math.round(r.innerWidth() / 2) + "px"
            }), "left" == e.soloArrowRightHalign && r.css({
                left: 0 + e.soloArrowRightHOffset + a + "px"
            }), "right" == e.soloArrowRightHalign && r.css({
                right: 0 + e.soloArrowRightHOffset - a + "px"
            }), null != s.position() && s.css({
                top: Math.round(parseInt(s.position().top, 0)) + "px"
            }), null != r.position() && r.css({
                top: Math.round(parseInt(r.position().top, 0)) + "px"
            })), "none" == e.navigationArrows && (s.css({
                visibility: "hidden"
            }), r.css({
                visibility: "hidden"
            })), "center" == e.navigationVAlign && n.css({
                top: "50%",
                marginTop: e.navigationVOffset - Math.round(n.innerHeight() / 2) + "px"
            }), "bottom" == e.navigationVAlign && n.css({
                bottom: 0 + e.navigationVOffset + "px"
            }), "top" == e.navigationVAlign && n.css({
                top: 0 + e.navigationVOffset + "px"
            }), "center" == e.navigationHAlign && n.css({
                left: "50%",
                marginLeft: a + e.navigationHOffset - Math.round(n.innerWidth() / 2) + "px"
            }), "left" == e.navigationHAlign && n.css({
                left: 0 + e.navigationHOffset + a + "px"
            }), "right" == e.navigationHAlign && n.css({
                right: 0 + e.navigationHOffset - a + "px"
            })
        }

        function T(t, e) {
            if (e.container.parent().find(".tp-fullwidth-forcer").css({
                    height: e.container.height()
                }), e.container.closest(".rev_slider_wrapper").css({
                    height: e.container.height()
                }), e.width = parseInt(e.container.width(), 0), e.height = parseInt(e.container.height(), 0), e.bw = e.width / e.startwidth, e.bh = e.height / e.startheight, e.bh > e.bw && (e.bh = e.bw), e.bh < e.bw && (e.bw = e.bh), e.bw < e.bh && (e.bh = e.bw), 1 < e.bh && (e.bw = 1, e.bh = 1), 1 < e.bw && (e.bw = 1, e.bh = 1), e.height = Math.round(e.startheight * (e.width / e.startwidth)), e.height > e.startheight && "on" != e.autoHeight && (e.height = e.startheight), "on" == e.fullScreen) {
                e.height = e.bw * e.startheight;
                e.container.parent().width();
                var i = Z(window).height();
                if (e.fullScreenOffsetContainer != G) try {
                    var n = e.fullScreenOffsetContainer.split(",");
                    Z.each(n, function (t, e) {
                        i -= Z(e).outerHeight(!0)
                    })
                } catch (t) {}
                e.container.parent().height(i), e.container.css({
                    height: "100%"
                }), e.height = i
            } else e.container.height(e.height);
            e.slotw = Math.ceil(e.width / e.slots), "on" == e.fullSreen ? e.sloth = Math.ceil(Z(window).height() / e.slots) : e.sloth = Math.ceil(e.height / e.slots), "on" == e.autoHeight && (e.sloth = Math.ceil(t.height() / e.slots))
        }

        function J(t, e, i, n) {
            var o = t,
                s = o.find(".defaultimg");
            T(s, e);
            var r = s.data("src"),
                a = s.css("background-color"),
                l = e.width,
                d = e.height;
            "on" == e.autoHeight && (d = e.container.height());
            var c = s.data("fxof");
            c == G && (c = 0);
            var h = fullyoff = 0,
                u = s.data("bgfit"),
                p = s.data("bgrepeat"),
                f = s.data("bgposition");
            if (u == G && (u = "cover"), p == G && (p = "no-repeat"), f == G && (f = "center center"), "horizontal" == n) {
                if (!i) h = 0 - e.slotw;
                for (var g = 0; g < e.slots; g++) o.append('<div class="slot" style="position:absolute;top:' + (0 + fullyoff) + "px;left:" + (c + g * e.slotw) + "px;overflow:hidden;width:" + e.slotw + "px;height:" + d + 'px"><div class="slotslide" style="position:absolute;top:0px;left:' + h + "px;width:" + e.slotw + "px;height:" + d + 'px;overflow:hidden;"><div style="background-color:' + a + ";position:absolute;top:0px;left:" + (0 - g * e.slotw) + "px;width:" + l + "px;height:" + d + "px;background-image:url(" + r + ");background-repeat:" + p + ";background-size:" + u + ";background-position:" + f + ';"></div></div></div>')
            } else {
                if (!i) h = 0 - e.sloth;
                for (g = 0; g < e.slots + 2; g++) o.append('<div class="slot" style="position:absolute;top:' + (fullyoff + g * e.sloth) + "px;left:" + c + "px;overflow:hidden;width:" + l + "px;height:" + e.sloth + 'px"><div class="slotslide" style="position:absolute;top:' + h + "px;left:0px;width:" + l + "px;height:" + e.sloth + 'px;overflow:hidden;"><div style="background-color:' + a + ";position:absolute;top:" + (0 - g * e.sloth) + "px;left:0px;width:" + l + "px;height:" + d + "px;background-image:url(" + r + ");background-repeat:" + p + ";background-size:" + u + ";background-position:" + f + ';"></div></div></div>')
            }
        }

        function K(t, e, i) {
            var n = t,
                o = n.find(".defaultimg");
            T(o, e);
            var s = o.data("src"),
                r = o.css("backgroundColor"),
                a = e.width,
                l = e.height;
            "on" == e.autoHeight && (l = e.container.height());
            var d = o.data("fxof");
            d == G && (d = 0);
            fullyoff = 0;
            var c = 0;
            if (c = e.sloth > e.slotw ? e.sloth : e.slotw, !i);
            e.slotw = c, e.sloth = c;
            var h = 0,
                u = 0,
                p = o.data("bgfit"),
                f = o.data("bgrepeat"),
                g = o.data("bgposition");
            p == G && (p = "cover"), f == G && (f = "no-repeat"), g == G && (g = "center center");
            for (var m = 0; m < e.slots; m++) {
                for (var v = u = 0; v < e.slots; v++) n.append('<div class="slot" style="position:absolute;top:' + (fullyoff + u) + "px;left:" + (d + h) + "px;width:" + c + "px;height:" + c + 'px;overflow:hidden;"><div class="slotslide" data-x="' + h + '" data-y="' + u + '" style="position:absolute;top:0px;left:0px;width:' + c + "px;height:" + c + 'px;overflow:hidden;"><div style="position:absolute;top:' + (0 - u) + "px;left:" + (0 - h) + "px;width:" + a + "px;height:" + l + "px;background-color:" + r + ";background-image:url(" + s + ");background-repeat:" + f + ";background-size:" + p + ";background-position:" + g + ';"></div></div></div>'), u += c;
                h += c
            }
        }

        function C(t, e, i) {
            setTimeout(function () {
                t.find(".slotholder .slot").each(function () {
                    clearTimeout(Z(this).data("tout")), Z(this).remove()
                }), e.transition = 0
            }, i)
        }

        function k(e, t) {
            try {
                e.find(">ul:first-child >li:eq(" + t.act + ")")
            } catch (t) {
                e.find(">ul:first-child >li:eq(1)")
            }
            t.lastslide = t.act;
            var i = e.find(">ul:first-child >li:eq(" + t.next + ")"),
                n = i.find(".defaultimg");
            if (n.data("lazyload") != G && "undefined" != n.data("lazyload") && 1 != n.data("lazydone")) {
                n.css({
                    backgroundImage: 'url("' + i.find(".defaultimg").data("lazyload") + '")'
                }), n.data("src", i.find(".defaultimg").data("lazyload")), n.data("orgw", 0), e.find(".tp-loader").css({
                    display: "block"
                }).transition({
                    opacity: 1,
                    duration: 300
                });
                var o = new Image;
                o.onload = function () {
                    setTimeout(function () {
                        ! function (t, e) {
                            t.cd = 0;
                            var i = e.find(".tp-bannertimer");
                            0 < i.length && (i.stop(!0, !0), i.css({
                                width: "0%"
                            })), clearTimeout(t.thumbtimer)
                        }(t, e)
                    }, 180), i.waitForImages(function () {
                        n.data("lazydone", 1), setTimeout(function () {
                            y(t, e)
                        }, 190), T(n, t), _(e, t), T(n, t), s(e, t), e.find(".tp-loader").transition({
                            opacity: 0,
                            duration: 300
                        }), setTimeout(function () {
                            e.find(".tp-loader").css({
                                display: "none"
                            })
                        }, 2200)
                    })
                }, o.src = i.find(".defaultimg").data("lazyload")
            } else s(e, t)
        }

        function s(s, r) {
            s.trigger("revolution.slide.onbeforeswap"), r.transition = 1, r.videoplaying = !1;
            try {
                var a = s.find(">ul:first-child >li:eq(" + r.act + ")")
            } catch (t) {
                a = s.find(">ul:first-child >li:eq(1)")
            }
            r.lastslide = r.act;
            var l = s.find(">ul:first-child >li:eq(" + r.next + ")"),
                d = a.find(".slotholder"),
                c = l.find(".slotholder");
            a.css({
                visibility: "visible"
            }), l.css({
                visibility: "visible"
            }), r.ie && ("boxfade" == i && (i = "boxslide"), "slotfade-vertical" == i && (i = "slotzoom-vertical"), "slotfade-horizontal" == i && (i = "slotzoom-horizontal")), l.data("delay") != G ? (r.cd = 0, r.delay = l.data("delay")) : r.delay = r.origcd, a.css({
                left: "0px",
                top: "0px"
            }), l.css({
                left: "0px",
                top: "0px"
            }), "prepared" == l.data("differentissplayed") && (l.data("differentissplayed", "done"), l.data("transition", l.data("savedtransition")), l.data("slotamount", l.data("savedslotamount")), l.data("masterspeed", l.data("savedmasterspeed"))), l.data("fstransition") != G && "done" != l.data("differentissplayed") && (l.data("savedtransition", l.data("transition")), l.data("savedslotamount", l.data("slotamount")), l.data("savedmasterspeed", l.data("masterspeed")), l.data("transition", l.data("fstransition")), l.data("slotamount", l.data("fsslotamount")), l.data("masterspeed", l.data("fsmasterspeed")), l.data("differentissplayed", "prepared"));
            var n = 0,
                t = l.data("transition").split(","),
                e = l.data("nexttransid");
            e == G ? e = 0 : (e += 1) == t.length && (e = 0), l.data("nexttransid", e);
            var i = t[e],
                o = 0;
            "slidehorizontal" == i && (i = "slideleft", 1 == r.leftarrowpressed && (i = "slideright")), "slidevertical" == i && (i = "slideup", 1 == r.leftarrowpressed && (i = "slidedown"));
            var h = [
                    ["boxslide", 0, 1, 10, 0, "box", !1, null, 0],
                    ["boxfade", 1, 0, 10, 0, "box", !1, null, 1],
                    ["slotslide-horizontal", 2, 0, 0, 200, "horizontal", !0, !1, 2],
                    ["slotslide-vertical", 3, 0, 0, 200, "vertical", !0, !1, 3],
                    ["curtain-1", 4, 3, 0, 0, "horizontal", !0, !0, 4],
                    ["curtain-2", 5, 3, 0, 0, "horizontal", !0, !0, 5],
                    ["curtain-3", 6, 3, 25, 0, "horizontal", !0, !0, 6],
                    ["slotzoom-horizontal", 7, 0, 0, 400, "horizontal", !0, !0, 7],
                    ["slotzoom-vertical", 8, 0, 0, 0, "vertical", !0, !0, 8],
                    ["slotfade-horizontal", 9, 0, 0, 500, "horizontal", !0, null, 9],
                    ["slotfade-vertical", 10, 0, 0, 500, "vertical", !0, null, 10],
                    ["fade", 11, 0, 1, 300, "horizontal", !0, null, 11],
                    ["slideleft", 12, 0, 1, 0, "horizontal", !0, !0, 12],
                    ["slideup", 13, 0, 1, 0, "horizontal", !0, !0, 13],
                    ["slidedown", 14, 0, 1, 0, "horizontal", !0, !0, 14],
                    ["slideright", 15, 0, 1, 0, "horizontal", !0, !0, 15],
                    ["papercut", 16, 0, 0, 600, "", null, null, 16],
                    ["3dcurtain-horizontal", 17, 0, 20, 100, "vertical", !1, !0, 17],
                    ["3dcurtain-vertical", 18, 0, 10, 100, "horizontal", !1, !0, 18],
                    ["cubic", 19, 0, 20, 600, "horizontal", !1, !0, 19],
                    ["cube", 19, 0, 20, 600, "horizontal", !1, !0, 20],
                    ["flyin", 20, 0, 4, 600, "vertical", !1, !0, 21],
                    ["turnoff", 21, 0, 1, 1600, "horizontal", !1, !0, 22],
                    ["incube", 22, 0, 20, 600, "horizontal", !1, !0, 23],
                    ["cubic-horizontal", 23, 0, 20, 500, "vertical", !1, !0, 24],
                    ["cube-horizontal", 23, 0, 20, 500, "vertical", !1, !0, 25],
                    ["incube-horizontal", 24, 0, 20, 500, "vertical", !1, !0, 26],
                    ["turnoff-vertical", 25, 0, 1, 1600, "horizontal", !1, !0, 27],
                    ["fadefromright", 12, 1, 1, 0, "horizontal", !0, !0, 28],
                    ["fadefromleft", 15, 1, 1, 0, "horizontal", !0, !0, 29],
                    ["fadefromtop", 14, 1, 1, 0, "horizontal", !0, !0, 30],
                    ["fadefrombottom", 13, 1, 1, 0, "horizontal", !0, !0, 31],
                    ["fadetoleftfadefromright", 12, 2, 1, 0, "horizontal", !0, !0, 32],
                    ["fadetorightfadetoleft", 15, 2, 1, 0, "horizontal", !0, !0, 33],
                    ["fadetobottomfadefromtop", 14, 2, 1, 0, "horizontal", !0, !0, 34],
                    ["fadetotopfadefrombottom", 13, 2, 1, 0, "horizontal", !0, !0, 35],
                    ["parallaxtoright", 12, 3, 1, 0, "horizontal", !0, !0, 36],
                    ["parallaxtoleft", 15, 3, 1, 0, "horizontal", !0, !0, 37],
                    ["parallaxtotop", 14, 3, 1, 0, "horizontal", !0, !0, 38],
                    ["parallaxtobottom", 13, 3, 1, 0, "horizontal", !0, !0, 39],
                    ["scaledownfromright", 12, 4, 1, 0, "horizontal", !0, !0, 40],
                    ["scaledownfromleft", 15, 4, 1, 0, "horizontal", !0, !0, 41],
                    ["scaledownfromtop", 14, 4, 1, 0, "horizontal", !0, !0, 42],
                    ["scaledownfrombottom", 13, 4, 1, 0, "horizontal", !0, !0, 43],
                    ["zoomout", 13, 5, 1, 0, "horizontal", !0, !0, 44],
                    ["zoomin", 13, 6, 1, 0, "horizontal", !0, !0, 45],
                    ["notransition", 26, 0, 1, 0, "horizontal", !0, null, 46]
                ],
                u = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
                p = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                f = (n = 0, o = 1, 0),
                g = 0,
                m = new Array;

            function v() {
                Z.each(h, function (t, e) {
                    e[0] != i && e[8] != i || (n = e[1], o = e[2], f = g), g += 1
                })
            }
            "random" == i && (i = Math.round(Math.random() * h.length - 1), h.length - 1 < i && (i = h.length - 1)), "random-static" == i && (i = Math.round(Math.random() * u.length - 1), u.length - 1 < i && (i = u.length - 1), i = u[i]), "random-premium" == i && (i = Math.round(Math.random() * p.length - 1), p.length - 1 < i && (i = p.length - 1), i = p[i]), v(),
                function (t, e) {
                    var i = Z('<div style="display:none;"/>').appendTo(Z("body"));
                    i.html("\x3c!--[if " + (e || "") + " IE " + (t || "") + "]><a>&nbsp;</a><![endif]--\x3e");
                    var n = i.find("a").length;
                    return i.remove(), n
                }(8) && 15 < n && n < 28 && (i = Math.round(Math.random() * u.length - 1), u.length - 1 < i && (i = u.length - 1), i = u[i], g = 0, v());
            var y = -1;
            (1 == r.leftarrowpressed || r.act > r.next) && (y = 1), r.leftarrowpressed = 0, 26 < n && (n = 26), n < 0 && (n = 0);
            var w, b, x = 300;
            if (l.data("masterspeed") != G && 99 < l.data("masterspeed") && l.data("masterspeed") < 4001 && (x = l.data("masterspeed")), m = h[f], s.parent().find(".bullet").each(function () {
                    var t = Z(this);
                    t.removeClass("selected"), "withbullet" == r.navigationArrows || "nexttobullets" == r.navigationArrows ? t.index() - 1 == r.next && t.addClass("selected") : t.index() == r.next && t.addClass("selected")
                }), s.find(">li").each(function () {
                    var t = Z(this);
                    t.index != r.act && t.index != r.next && t.css({
                        "z-index": 16
                    })
                }), a.css({
                    "z-index": 18
                }), l.css({
                    "z-index": 20
                }), l.css({
                    opacity: 0
                }), a.index() != l.index() && 1 != r.firststart && (w = r, a.find(".tp-caption").each(function (t) {
                    var e = Z(this);
                    if (0 < e.find("iframe").length) {
                        try {
                            var i = e.find("iframe"),
                                n = i.attr("id"),
                                o = $f(n);
                            o.api("pause"), clearTimeout(e.data("timerplay"))
                        } catch (t) {}
                        try {
                            var s = e.data("player");
                            s.stopVideo(), clearTimeout(e.data("timerplay"))
                        } catch (t) {}
                    }
                    if (0 < e.find("video").length) try {
                        e.find("video").each(function (t) {
                            var e = Z(this).parent(),
                                i = e.attr("id");
                            clearTimeout(e.data("timerplay")), videojs(i).ready(function () {
                                this.pause()
                            })
                        })
                    } catch (t) {}
                    try {
                        nt(e, w, 0)
                    } catch (t) {}
                })), et(l, r), l.data("slotamount") == G || l.data("slotamount") < 1 ? (r.slots = Math.round(12 * Math.random() + 4), "boxslide" == i ? r.slots = Math.round(6 * Math.random() + 3) : "flyin" == i && (r.slots = Math.round(4 * Math.random() + 1))) : r.slots = l.data("slotamount"), l.data("rotate") == G ? r.rotate = 0 : 999 == l.data("rotate") ? r.rotate = Math.round(360 * Math.random()) : r.rotate = l.data("rotate"), (!Z.support.transition || r.ie || r.ie9) && (r.rotate = 0), 1 == r.firststart && (a.css({
                    opacity: 0
                }), r.firststart = 0), x += m[4], (4 == n || 5 == n || 6 == n) && r.slots < 3 && (r.slots = 3), 0 != m[3] && (r.slots = Math.min(r.slots, m[3])), 9 == n && (r.slots = r.width / 20), 10 == n && (r.slots = r.height / 20), "box" == m[5] ? (null != m[7] && K(d, r, m[7]), null != m[6] && K(c, r, m[6])) : "vertical" != m[5] && "horizontal" != m[5] || (null != m[7] && J(d, r, m[7], m[5]), null != m[6] && J(c, r, m[6], m[5])), (n < 12 || 16 < n) && l.css({
                    opacity: 1
                }), 0 == n) {
                c.find(".defaultimg").css({
                    opacity: 0
                });
                var _ = Math.ceil(r.height / r.sloth),
                    T = 0;
                c.find(".slotslide").each(function (t) {
                    var e = Z(this);
                    (T += 1) == _ && (T = 0), TweenLite.fromTo(e, x / 600, {
                        opacity: 0,
                        top: 0 - r.sloth,
                        left: 0 - r.slotw,
                        rotation: r.rotate
                    }, {
                        opacity: 1,
                        transformPerspective: 600,
                        top: 0,
                        left: 0,
                        scale: 1,
                        rotation: 0,
                        delay: (15 * t + 30 * T) / 1500,
                        ease: Power2.easeOut,
                        onComplete: function () {
                            t == r.slots * r.slots - 1 && tt(s, r, c, d, l, a)
                        }
                    })
                })
            }
            1 == n && (c.find(".defaultimg").css({
                opacity: 0
            }), c.find(".slotslide").each(function (t) {
                var e = Z(this);
                rand = Math.random() * x + 300, rand2 = 500 * Math.random() + 200, rand + rand2 > b && (b = rand2 + rand2), TweenLite.fromTo(e, rand / 1e3, {
                    opacity: 0,
                    transformPerspective: 600,
                    rotation: r.rotate
                }, {
                    opacity: 1,
                    ease: Power2.easeInOut,
                    rotation: 0,
                    delay: rand2 / 1e3
                })
            }), setTimeout(function () {
                tt(s, r, c, d, l, a)
            }, x + 300));
            if (2 == n && (c.find(".defaultimg").css({
                    opacity: 0
                }), d.find(".slotslide").each(function () {
                    var t = Z(this);
                    TweenLite.to(t, x / 1e3, {
                        left: r.slotw,
                        rotation: 0 - r.rotate,
                        onComplete: function () {
                            tt(s, r, c, d, l, a)
                        }
                    })
                }), c.find(".slotslide").each(function () {
                    var t = Z(this);
                    TweenLite.fromTo(t, x / 1e3, {
                        left: 0 - r.slotw,
                        rotation: r.rotate,
                        transformPerspective: 600
                    }, {
                        left: 0,
                        rotation: 0,
                        ease: Power2.easeOut,
                        onComplete: function () {
                            tt(s, r, c, d, l, a)
                        }
                    })
                })), 3 == n && (c.find(".defaultimg").css({
                    opacity: 0
                }), d.find(".slotslide").each(function () {
                    var t = Z(this);
                    TweenLite.to(t, x / 1e3, {
                        top: r.sloth,
                        rotation: r.rotate,
                        transformPerspective: 600,
                        onComplete: function () {
                            tt(s, r, c, d, l, a)
                        }
                    })
                }), c.find(".slotslide").each(function () {
                    var t = Z(this);
                    TweenLite.fromTo(t, x / 1e3, {
                        top: 0 - r.sloth,
                        rotation: r.rotate,
                        transformPerspective: 600
                    }, {
                        top: 0,
                        rotation: 0,
                        ease: Power2.easeOut,
                        onComplete: function () {
                            tt(s, r, c, d, l, a)
                        }
                    })
                })), 4 == n || 5 == n) {
                c.find(".defaultimg").css({
                    opacity: 0
                }), setTimeout(function () {
                    d.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100);
                var C = x / 1e3;
                d.find(".slotslide").each(function (t) {
                    var e = Z(this),
                        i = t * C / r.slots;
                    5 == n && (i = (r.slots - t - 1) * C / r.slots / 1.5), TweenLite.to(e, 3 * C, {
                        transformPerspective: 600,
                        top: 0 + r.height,
                        opacity: .5,
                        rotation: r.rotate,
                        ease: Power2.easeInOut,
                        delay: i
                    })
                }), c.find(".slotslide").each(function (t) {
                    var e = Z(this),
                        i = t * C / r.slots;
                    5 == n && (i = (r.slots - t - 1) * C / r.slots / 1.5), TweenLite.fromTo(e, 3 * C, {
                        top: 0 - r.height,
                        opacity: .5,
                        rotation: r.rotate,
                        transformPerspective: 600
                    }, {
                        top: 0,
                        opacity: 1,
                        rotation: 0,
                        ease: Power2.easeInOut,
                        delay: i,
                        onComplete: function () {
                            t == r.slots - 1 && tt(s, r, c, d, l, a)
                        }
                    })
                })
            }
            if (6 == n && (r.slots < 2 && (r.slots = 2), c.find(".defaultimg").css({
                    opacity: 0
                }), setTimeout(function () {
                    d.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100), d.find(".slotslide").each(function (t) {
                    var e = Z(this);
                    if (t < r.slots / 2) var i = 60 * (t + 2);
                    else i = 60 * (2 + r.slots - t);
                    TweenLite.to(e, (x + i) / 1e3, {
                        top: 0 + r.height,
                        opacity: 1,
                        rotation: r.rotate,
                        transformPerspective: 600,
                        ease: Power2.easeInOut
                    })
                }), c.find(".slotslide").each(function (t) {
                    var e = Z(this);
                    if (t < r.slots / 2) var i = 60 * (t + 2);
                    else i = 60 * (2 + r.slots - t);
                    TweenLite.fromTo(e, (x + i) / 1e3, {
                        top: 0 - r.height,
                        opacity: 1,
                        rotation: r.rotate,
                        transformPerspective: 600
                    }, {
                        top: 0,
                        opacity: 1,
                        rotation: 0,
                        ease: Power2.easeInOut,
                        onComplete: function () {
                            t == Math.round(r.slots / 2) && tt(s, r, c, d, l, a)
                        }
                    })
                })), 7 == n && (x *= 2, c.find(".defaultimg").css({
                    opacity: 0
                }), setTimeout(function () {
                    d.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100), d.find(".slotslide").each(function () {
                    var t = Z(this).find("div");
                    TweenLite.to(t, x / 1e3, {
                        left: 0 - r.slotw / 2 + "px",
                        top: 0 - r.height / 2 + "px",
                        width: 2 * r.slotw + "px",
                        height: 2 * r.height + "px",
                        opacity: 0,
                        rotation: r.rotate,
                        transformPerspective: 600,
                        ease: Power2.easeOut
                    })
                }), c.find(".slotslide").each(function (t) {
                    var e = Z(this).find("div");
                    TweenLite.fromTo(e, x / 1e3, {
                        left: 0,
                        top: 0,
                        opacity: 0,
                        transformPerspective: 600
                    }, {
                        left: 0 - t * r.slotw + "px",
                        ease: Power2.easeOut,
                        top: "0px",
                        width: r.width,
                        height: r.height,
                        opacity: 1,
                        rotation: 0,
                        delay: .1,
                        onComplete: function () {
                            tt(s, r, c, d, l, a)
                        }
                    })
                })), 8 == n && (x *= 3, c.find(".defaultimg").css({
                    opacity: 0
                }), d.find(".slotslide").each(function () {
                    var t = Z(this).find("div");
                    TweenLite.to(t, x / 1e3, {
                        left: 0 - r.width / 2 + "px",
                        top: 0 - r.sloth / 2 + "px",
                        width: 2 * r.width + "px",
                        height: 2 * r.sloth + "px",
                        transformPerspective: 600,
                        opacity: 0,
                        rotation: r.rotate
                    })
                }), c.find(".slotslide").each(function (t) {
                    var e = Z(this).find("div");
                    TweenLite.fromTo(e, x / 1e3, {
                        left: 0,
                        top: 0,
                        opacity: 0,
                        transformPerspective: 600
                    }, {
                        left: "0px",
                        top: 0 - t * r.sloth + "px",
                        width: c.find(".defaultimg").data("neww") + "px",
                        height: c.find(".defaultimg").data("newh") + "px",
                        opacity: 1,
                        rotation: 0,
                        onComplete: function () {
                            tt(s, r, c, d, l, a)
                        }
                    })
                })), 9 == n || 10 == n) {
                c.find(".defaultimg").css({
                    opacity: 0
                });
                var k = 0;
                c.find(".slotslide").each(function (t) {
                    var e = Z(this);
                    k++, TweenLite.fromTo(e, x / 1e3, {
                        opacity: 0,
                        transformPerspective: 600,
                        left: 0,
                        top: 0
                    }, {
                        opacity: 1,
                        ease: Power2.easeInOut,
                        delay: 4 * t / 1e3
                    })
                }), setTimeout(function () {
                    tt(s, r, c, d, l, a)
                }, x + 4 * k)
            }
            if (11 == n || 26 == n) {
                c.find(".defaultimg").css({
                    opacity: 0,
                    position: "relative"
                });
                k = 0;
                26 == n && (x = 0), c.find(".slotslide").each(function (t) {
                    var e = Z(this);
                    TweenLite.fromTo(e, x / 1e3, {
                        opacity: 0
                    }, {
                        opacity: 1,
                        ease: Power2.easeInOut
                    })
                }), setTimeout(function () {
                    tt(s, r, c, d, l, a)
                }, x + 15)
            }
            if (12 == n || 13 == n || 14 == n || 15 == n) {
                setTimeout(function () {
                    d.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100), c.find(".defaultimg").css({
                    opacity: 0
                });
                var S = r.width,
                    E = r.height,
                    P = c.find(".slotslide");
                "on" != r.fullWidth && "on" != r.fullSreen || (S = P.width(), E = P.height());
                var A = 0,
                    N = 0;
                12 == n ? A = S : 15 == n ? A = 0 - S : 13 == n ? N = E : 14 == n && (N = 0 - E);
                var O = 1,
                    M = 1,
                    I = 1,
                    D = Power2.easeInOut,
                    $ = Power2.easeInOut,
                    L = x / 1e3,
                    z = L;
                1 == o && (O = 0), 2 == o && (O = 0), 3 == o && (D = Power2.easeInOut, $ = Power1.easeInOut, a.css({
                    position: "absolute",
                    "z-index": 20
                }), l.css({
                    position: "absolute",
                    "z-index": 15
                }), L = x / 1200), 4 != o && 5 != o || (M = .6), 6 == o && (M = 1.4), 5 != o && 6 != o || (I = 1.4, N = A = E = S = O = 0), 6 == o && (I = .6), TweenLite.fromTo(P, L, {
                    left: A,
                    top: N,
                    scale: I,
                    opacity: O,
                    rotation: r.rotate
                }, {
                    opacity: 1,
                    rotation: 0,
                    left: 0,
                    top: 0,
                    scale: 1,
                    ease: $,
                    onComplete: function () {
                        tt(s, r, c, d, l, a), a.css({
                            position: "absolute",
                            "z-index": 18
                        }), l.css({
                            position: "absolute",
                            "z-index": 20
                        })
                    }
                });
                var R = d.find(".slotslide");
                4 != o && 5 != o || (E = S = 0), 1 != o && (12 == n ? TweenLite.to(R, z, {
                    left: 0 - S + "px",
                    scale: M,
                    opacity: O,
                    rotation: r.rotate,
                    ease: D
                }) : 15 == n ? TweenLite.to(R, z, {
                    left: S + "px",
                    scale: M,
                    opacity: O,
                    rotation: r.rotate,
                    ease: D
                }) : 13 == n ? TweenLite.to(R, z, {
                    top: 0 - E + "px",
                    scale: M,
                    opacity: O,
                    rotation: r.rotate,
                    ease: D
                }) : 14 == n && TweenLite.to(R, z, {
                    top: E + "px",
                    scale: M,
                    opacity: O,
                    rotation: r.rotate,
                    ease: D
                })), l.css({
                    opacity: 1
                })
            }
            if (16 == n) {
                a.css({
                    position: "absolute",
                    "z-index": 20
                }), l.css({
                    position: "absolute",
                    "z-index": 15
                }), a.wrapInner('<div class="tp-half-one" style="position:relative; width:100%;height:100%"></div>'), a.find(".tp-half-one").clone(!0).appendTo(a).addClass("tp-half-two"), a.find(".tp-half-two").removeClass("tp-half-one");
                S = r.width, E = r.height;
                "on" == r.autoHeight && (E = s.height()), a.find(".tp-half-one .defaultimg").wrap('<div class="tp-papercut" style="width:' + S + "px;height:" + E + 'px;"></div>'), a.find(".tp-half-two .defaultimg").wrap('<div class="tp-papercut" style="width:' + S + "px;height:" + E + 'px;"></div>'), a.find(".tp-half-two .defaultimg").css({
                    position: "absolute",
                    top: "-50%"
                }), a.find(".tp-half-two .tp-caption").wrapAll('<div style="position:absolute;top:-50%;left:0px"></div>'), TweenLite.set(a.find(".tp-half-two"), {
                    width: S,
                    height: E,
                    overflow: "hidden",
                    zIndex: 15,
                    position: "absolute",
                    top: E / 2,
                    left: "0px",
                    transformPerspective: 600,
                    transformOrigin: "center bottom"
                }), TweenLite.set(a.find(".tp-half-one"), {
                    width: S,
                    height: E / 2,
                    overflow: "visible",
                    zIndex: 10,
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    transformPerspective: 600,
                    transformOrigin: "center top"
                });
                a.find(".defaultimg");
                var j = Math.round(20 * Math.random() - 10),
                    H = Math.round(20 * Math.random() - 10),
                    W = Math.round(20 * Math.random() - 10),
                    F = .4 * Math.random() - .2,
                    q = .4 * Math.random() - .2,
                    X = 1 * Math.random() + 1,
                    B = 1 * Math.random() + 1;
                TweenLite.fromTo(a.find(".tp-half-one"), x / 1e3, {
                    width: S,
                    height: E / 2,
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    transformPerspective: 600,
                    transformOrigin: "center top"
                }, {
                    scale: X,
                    rotation: j,
                    y: 0 - E - E / 4,
                    ease: Power2.easeInOut
                }), setTimeout(function () {
                    TweenLite.set(a.find(".tp-half-one"), {
                        overflow: "hidden"
                    })
                }, 50), TweenLite.fromTo(a.find(".tp-half-one"), x / 2e3, {
                    opacity: 1,
                    transformPerspective: 600,
                    transformOrigin: "center center"
                }, {
                    opacity: 0,
                    delay: x / 2e3
                }), TweenLite.fromTo(a.find(".tp-half-two"), x / 1e3, {
                    width: S,
                    height: E,
                    overflow: "hidden",
                    position: "absolute",
                    top: E / 2,
                    left: "0px",
                    transformPerspective: 600,
                    transformOrigin: "center bottom"
                }, {
                    scale: B,
                    rotation: H,
                    y: E + E / 4,
                    ease: Power2.easeInOut
                }), TweenLite.fromTo(a.find(".tp-half-two"), x / 2e3, {
                    opacity: 1,
                    transformPerspective: 600,
                    transformOrigin: "center center"
                }, {
                    opacity: 0,
                    delay: x / 2e3
                }), null != a.html() && TweenLite.fromTo(l, (x - 200) / 1e3, {
                    opacity: 0,
                    scale: .8,
                    x: r.width * F,
                    y: E * q,
                    rotation: W,
                    transformPerspective: 600,
                    transformOrigin: "center center"
                }, {
                    rotation: 0,
                    scale: 1,
                    x: 0,
                    y: 0,
                    opacity: 1,
                    ease: Power2.easeInOut
                }), c.find(".defaultimg").css({
                    opacity: 1
                }), setTimeout(function () {
                    a.css({
                        position: "absolute",
                        "z-index": 18
                    }), l.css({
                        position: "absolute",
                        "z-index": 20
                    }), c.find(".defaultimg").css({
                        opacity: 1
                    }), d.find(".defaultimg").css({
                        opacity: 0
                    }), 0 < a.find(".tp-half-one").length && (a.find(".tp-half-one .defaultimg").unwrap(), a.find(".tp-half-one .slotholder").unwrap()), a.find(".tp-half-two").remove(), r.transition = 0, r.act = r.next
                }, x), l.css({
                    opacity: 1
                })
            }
            if (17 == n && (c.find(".defaultimg").css({
                    opacity: 0
                }), c.find(".slotslide").each(function (t) {
                    var e = Z(this);
                    TweenLite.fromTo(e, x / 800, {
                        opacity: 0,
                        rotationY: 0,
                        scale: .9,
                        rotationX: -110,
                        transformPerspective: 600,
                        transformOrigin: "center center"
                    }, {
                        opacity: 1,
                        top: 0,
                        left: 0,
                        scale: 1,
                        rotation: 0,
                        rotationX: 0,
                        rotationY: 0,
                        ease: Power3.easeOut,
                        delay: .06 * t,
                        onComplete: function () {
                            t == r.slots - 1 && tt(s, r, c, d, l, a)
                        }
                    })
                })), 18 == n && (c.find(".defaultimg").css({
                    opacity: 0
                }), c.find(".slotslide").each(function (t) {
                    var e = Z(this);
                    TweenLite.fromTo(e, x / 500, {
                        opacity: 0,
                        rotationY: 310,
                        scale: .9,
                        rotationX: 10,
                        transformPerspective: 600,
                        transformOrigin: "center center"
                    }, {
                        opacity: 1,
                        top: 0,
                        left: 0,
                        scale: 1,
                        rotation: 0,
                        rotationX: 0,
                        rotationY: 0,
                        ease: Power3.easeOut,
                        delay: .06 * t,
                        onComplete: function () {
                            t == r.slots - 1 && tt(s, r, c, d, l, a)
                        }
                    })
                })), 19 == n || 22 == n) {
                c.find(".defaultimg").css({
                    opacity: 0
                }), setTimeout(function () {
                    d.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100);
                l.css("z-index"), a.css("z-index");
                var Y = 90;
                O = 1;
                if (1 == y && (Y = -90), 19 == n) {
                    var U = "center center -" + r.height / 2;
                    O = 0
                } else U = "center center " + r.height / 2;
                TweenLite.fromTo(c, x / 2e3, {
                    transformPerspective: 600,
                    z: 0,
                    x: 0,
                    rotationY: 0
                }, {
                    rotationY: 1,
                    ease: Power1.easeInOut,
                    z: -40
                }), TweenLite.fromTo(c, x / 2e3, {
                    transformPerspective: 600,
                    z: -40,
                    rotationY: 1
                }, {
                    rotationY: 0,
                    z: 0,
                    ease: Power1.easeInOut,
                    x: 0,
                    delay: x / 4e3 * 3
                }), TweenLite.fromTo(d, x / 2e3, {
                    transformPerspective: 600,
                    z: 0,
                    x: 0,
                    rotationY: 0
                }, {
                    rotationY: 1,
                    x: 0,
                    ease: Power1.easeInOut,
                    z: -40
                }), TweenLite.fromTo(d, x / 2e3, {
                    transformPerspective: 600,
                    z: -40,
                    x: 0,
                    rotationY: 1
                }, {
                    rotationY: 0,
                    z: 0,
                    x: 0,
                    ease: Power1.easeInOut,
                    delay: x / 4e3 * 3
                }), c.find(".slotslide").each(function (t) {
                    var e = Z(this);
                    TweenLite.fromTo(e, x / 1e3, {
                        left: 0,
                        rotationY: r.rotate,
                        opacity: O,
                        top: 0,
                        scale: .8,
                        transformPerspective: 600,
                        transformOrigin: U,
                        rotationX: Y
                    }, {
                        left: 0,
                        rotationY: 0,
                        opacity: 1,
                        top: 0,
                        z: 0,
                        scale: 1,
                        rotationX: 0,
                        delay: 50 * t / 1e3,
                        ease: Power2.easeInOut,
                        onComplete: function () {
                            t == r.slots - 1 && tt(s, r, c, d, l, a)
                        }
                    }), TweenLite.to(e, .1, {
                        opacity: 1,
                        delay: 50 * t / 1e3 + x / 3e3
                    })
                }), d.find(".slotslide").each(function (t) {
                    var e = Z(this),
                        i = -90;
                    1 == y && (i = 90), TweenLite.fromTo(e, x / 1e3, {
                        opacity: 1,
                        rotationY: 0,
                        top: 0,
                        z: 0,
                        scale: 1,
                        transformPerspective: 600,
                        transformOrigin: U,
                        rotationX: 0
                    }, {
                        opacity: 1,
                        rotationY: r.rotate,
                        top: 0,
                        scale: .8,
                        rotationX: i,
                        delay: 50 * t / 1e3,
                        ease: Power2.easeInOut,
                        onComplete: function () {
                            t == r.slots - 1 && tt(s, r, c, d, l, a)
                        }
                    }), TweenLite.to(e, .1, {
                        opacity: 0,
                        delay: 50 * t / 1e3 + (x / 1e3 - x / 1e4)
                    })
                })
            }
            if (20 == n) {
                c.find(".defaultimg").css({
                    opacity: 0
                }), setTimeout(function () {
                    d.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100);
                l.css("z-index"), a.css("z-index");
                if (1 == y) {
                    var V = -r.width;
                    Y = 70, U = "left center -" + r.height / 2
                } else V = r.width, Y = -70, U = "right center -" + r.height / 2;
                c.find(".slotslide").each(function (t) {
                    var e = Z(this);
                    TweenLite.fromTo(e, x / 1500, {
                        left: V,
                        rotationX: 40,
                        z: -600,
                        opacity: O,
                        top: 0,
                        transformPerspective: 600,
                        transformOrigin: U,
                        rotationY: Y
                    }, {
                        left: 0,
                        delay: 50 * t / 1e3,
                        ease: Power2.easeInOut
                    }), TweenLite.fromTo(e, x / 1e3, {
                        rotationX: 40,
                        z: -600,
                        opacity: O,
                        top: 0,
                        scale: 1,
                        transformPerspective: 600,
                        transformOrigin: U,
                        rotationY: Y
                    }, {
                        rotationX: 0,
                        opacity: 1,
                        top: 0,
                        z: 0,
                        scale: 1,
                        rotationY: 0,
                        delay: 50 * t / 1e3,
                        ease: Power2.easeInOut,
                        onComplete: function () {
                            t == r.slots - 1 && tt(s, r, c, d, l, a)
                        }
                    }), TweenLite.to(e, .1, {
                        opacity: 1,
                        delay: 50 * t / 1e3 + x / 2e3
                    })
                }), d.find(".slotslide").each(function (t) {
                    var e = Z(this);
                    if (1 != y) var i = -r.width,
                        n = 70,
                        o = "left center -" + r.height / 2;
                    else i = r.width, n = -70, o = "right center -" + r.height / 2;
                    TweenLite.fromTo(e, x / 1e3, {
                        opacity: 1,
                        rotationX: 0,
                        top: 0,
                        z: 0,
                        scale: 1,
                        left: 0,
                        transformPerspective: 600,
                        transformOrigin: o,
                        rotationY: 0
                    }, {
                        opacity: 1,
                        rotationX: 40,
                        top: 0,
                        z: -600,
                        left: i,
                        scale: .8,
                        rotationY: n,
                        delay: 50 * t / 1e3,
                        ease: Power2.easeInOut,
                        onComplete: function () {
                            t == r.slots - 1 && tt(s, r, c, d, l, a)
                        }
                    }), TweenLite.to(e, .1, {
                        opacity: 0,
                        delay: 50 * t / 1e3 + (x / 1e3 - x / 1e4)
                    })
                })
            }
            if (21 == n || 25 == n) {
                c.find(".defaultimg").css({
                    opacity: 0
                }), setTimeout(function () {
                    d.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100);
                l.css("z-index"), a.css("z-index");
                if (1 == y) {
                    V = -r.width, Y = 110;
                    if (25 == n) {
                        U = "center top 0";
                        rot2 = -Y, Y = r.rotate
                    } else {
                        U = "left center 0";
                        rot2 = r.rotate
                    }
                } else {
                    V = r.width, Y = -110;
                    if (25 == n) {
                        U = "center bottom 0";
                        rot2 = -Y, Y = r.rotate
                    } else {
                        U = "right center 0";
                        rot2 = r.rotate
                    }
                }
                if (c.find(".slotslide").each(function (t) {
                        var e = Z(this);
                        TweenLite.fromTo(e, x / 1500, {
                            left: 0,
                            rotationX: rot2,
                            z: 0,
                            opacity: 0,
                            top: 0,
                            scale: 1,
                            transformPerspective: 600,
                            transformOrigin: U,
                            rotationY: Y
                        }, {
                            left: 0,
                            rotationX: 0,
                            top: 0,
                            z: 0,
                            scale: 1,
                            rotationY: 0,
                            delay: 100 * t / 1e3 + x / 1e4,
                            ease: Power2.easeInOut,
                            onComplete: function () {
                                t == r.slots - 1 && tt(s, r, c, d, l, a)
                            }
                        }), TweenLite.to(e, .3, {
                            opacity: 1,
                            delay: 100 * t / 1e3 + .2 * x / 2e3 + x / 1e4
                        })
                    }), 1 != y) {
                    V = -r.width, Y = 90;
                    if (25 == n) {
                        U = "center top 0";
                        rot2 = -Y, Y = r.rotate
                    } else {
                        U = "left center 0";
                        rot2 = r.rotate
                    }
                } else {
                    V = r.width, Y = -90;
                    if (25 == n) {
                        U = "center bottom 0";
                        rot2 = -Y, Y = r.rotate
                    } else {
                        U = "right center 0";
                        rot2 = r.rotate
                    }
                }
                d.find(".slotslide").each(function (t) {
                    var e = Z(this);
                    TweenLite.fromTo(e, x / 3e3, {
                        left: 0,
                        rotationX: 0,
                        z: 0,
                        opacity: 1,
                        top: 0,
                        scale: 1,
                        transformPerspective: 600,
                        transformOrigin: U,
                        rotationY: 0
                    }, {
                        left: 0,
                        rotationX: rot2,
                        top: 0,
                        z: 0,
                        scale: 1,
                        rotationY: Y,
                        delay: 100 * t / 1e3,
                        ease: Power1.easeInOut
                    }), TweenLite.to(e, .2, {
                        opacity: 0,
                        delay: 50 * t / 1e3 + (x / 3e3 - x / 1e4)
                    })
                })
            }
            if (23 == n || 24 == n) {
                c.find(".defaultimg").css({
                    opacity: 0
                }), setTimeout(function () {
                    d.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100);
                l.css("z-index"), a.css("z-index"), Y = -90;
                1 == y && (Y = 90);
                O = 1;
                if (23 == n) {
                    U = "center center -" + r.width / 2;
                    O = 0
                } else U = "center center " + r.width / 2;
                TweenLite.fromTo(c, x / 2e3, {
                    transformPerspective: 600,
                    z: 0,
                    x: 0,
                    rotationY: 0
                }, {
                    rotationY: 1,
                    ease: Power1.easeInOut,
                    z: -90
                }), TweenLite.fromTo(c, x / 2e3, {
                    transformPerspective: 600,
                    z: -90,
                    rotationY: 1
                }, {
                    rotationY: 0,
                    z: 0,
                    ease: Power1.easeInOut,
                    x: 0,
                    delay: x / 4e3 * 3
                }), TweenLite.fromTo(d, x / 2e3, {
                    transformPerspective: 600,
                    z: 0,
                    x: 0,
                    rotationY: 0
                }, {
                    rotationY: 1,
                    x: 0,
                    ease: Power1.easeInOut,
                    z: -90
                }), TweenLite.fromTo(d, x / 2e3, {
                    transformPerspective: 600,
                    z: -90,
                    x: 0,
                    rotationY: 1
                }, {
                    rotationY: 0,
                    z: 0,
                    x: 0,
                    ease: Power1.easeInOut,
                    delay: x / 4e3 * 3
                }), c.find(".slotslide").each(function (t) {
                    var e = Z(this);
                    TweenLite.fromTo(e, x / 1e3, {
                        left: 0,
                        rotationX: r.rotate,
                        opacity: O,
                        top: 0,
                        scale: 1,
                        transformPerspective: 600,
                        transformOrigin: U,
                        rotationY: Y
                    }, {
                        left: 0,
                        rotationX: 0,
                        opacity: 1,
                        top: 0,
                        z: 0,
                        scale: 1,
                        rotationY: 0,
                        delay: 50 * t / 1e3,
                        ease: Power2.easeInOut,
                        onComplete: function () {
                            t == r.slots - 1 && tt(s, r, c, d, l, a)
                        }
                    }), TweenLite.to(e, .1, {
                        opacity: 1,
                        delay: 50 * t / 1e3 + x / 3e3
                    })
                }), Y = 90, 1 == y && (Y = -90), d.find(".slotslide").each(function (t) {
                    var e = Z(this);
                    TweenLite.fromTo(e, x / 1e3, {
                        left: 0,
                        opacity: 1,
                        rotationX: 0,
                        top: 0,
                        z: 0,
                        scale: 1,
                        transformPerspective: 600,
                        transformOrigin: U,
                        rotationY: 0
                    }, {
                        left: 0,
                        opacity: 1,
                        rotationX: r.rotate,
                        top: 0,
                        scale: 1,
                        rotationY: Y,
                        delay: 50 * t / 1e3,
                        ease: Power2.easeInOut,
                        onComplete: function () {
                            t == r.slots - 1 && tt(s, r, c, d, l, a)
                        }
                    }), TweenLite.to(e, .1, {
                        opacity: 0,
                        delay: 50 * t / 1e3 + (x / 1e3 - x / 1e4)
                    })
                })
            }
            var Q = {};
            Q.slideIndex = r.next + 1, s.trigger("revolution.slide.onchange", Q), setTimeout(function () {
                s.trigger("revolution.slide.onafterswap")
            }, x), s.trigger("revolution.slide.onvideostop")
        }

        function tt(t, e, i, n, o, s) {
            C(t, e), i.find(".defaultimg").css({
                opacity: 1
            }), o.index() != s.index() && n.find(".defaultimg").css({
                opacity: 0
            }), e.act = e.next, b(t)
        }

        function Q(t) {
            var e = t.target.getVideoEmbedCode(),
                i = Z("#" + e.split('id="')[1].split('"')[0]).closest(".tp-simpleresponsive");
            if (t.data == YT.PlayerState.PLAYING) {
                var n = (o = i.find(".tp-bannertimer")).data("opt");
                o.stop(), n.videoplaying = !0, n.videostartednow = 1
            } else {
                var o;
                n = (o = i.find(".tp-bannertimer")).data("opt"); - 1 != t.data && (0 == n.conthover && o.animate({
                    width: "100%"
                }, {
                    duration: n.delay - n.cd - 100,
                    queue: !1,
                    easing: "linear"
                }), n.videoplaying = !1, n.videostoppednow = 1)
            }
            0 == t.data && 1 == n.nextslideatend && n.container.revnext()
        }

        function et(t, B, Y) {
            var U = 0,
                V = 0;
            t.find(".tp-caption").each(function (t) {
                U = B.width / 2 - B.startwidth * B.bw / 2;
                var e = B.bw,
                    i = B.bh;
                "on" == B.fullScreen && (V = B.height / 2 - B.startheight * B.bh / 2), "on" == B.autoHeight && (V = B.container.height() / 2 - B.startheight * B.bh / 2), V < 0 && (V = 0);
                var d = Z(this),
                    n = 0;
                if (B.width < B.hideCaptionAtLimit && "on" == d.data("captionhidden") ? (d.addClass("tp-hidden-caption"), n = 1) : B.width < B.hideAllCaptionAtLimit || B.width < B.hideAllCaptionAtLilmit ? (d.addClass("tp-hidden-caption"), n = 1) : d.removeClass("tp-hidden-caption"), 0 == n) {
                    d.data("linktoslide") == G || d.hasClass("hasclicklistener") || (d.addClass("hasclicklistener"), d.css({
                        cursor: "pointer"
                    }), "no" != d.data("linktoslide") && d.click(function () {
                        var t = Z(this).data("linktoslide");
                        "next" != t && "prev" != t ? (B.container.data("showus", t), B.container.parent().find(".tp-rightarrow").click()) : "next" == t ? B.container.parent().find(".tp-rightarrow").click() : "prev" == t && B.container.parent().find(".tp-leftarrow").click()
                    })), U < 0 && (U = 0);
                    var c = "iframe" + Math.round(1e3 * Math.random() + 1);
                    if ((0 < d.find("iframe").length || 0 < d.find("video").length) && (1 != d.data("autoplayonlyfirsttime") && "true" != d.data("autoplayonlyfirsttime") || d.data("autoplay", !0), d.find("iframe").each(function () {
                            var t = Z(this);
                            if (B.nextslideatend = d.data("nextslideatend"), d.data("thumbimage") != G && 2 < d.data("thumbimage").length && 1 != d.data("autoplay") && !Y && (d.find(".tp-thumb-image").remove(), d.append('<div class="tp-thumb-image" style="cursor:pointer; position:absolute;top:0px;left:0px;width:100%;height:100%;background-image:url(' + d.data("thumbimage") + '); background-size:cover"></div>')), 0 <= t.attr("src").toLowerCase().indexOf("youtube")) {
                                if (t.hasClass("HasListener")) {
                                    if (1 == d.data("autoplay")) {
                                        l = d.data("player");
                                        d.data("timerplay", setTimeout(function () {
                                            l.playVideo()
                                        }, d.data("start")))
                                    }
                                } else try {
                                    t.attr("id", c), l = 1 == d.data("autoplay") ? new YT.Player(c, {
                                        events: {
                                            onStateChange: Q,
                                            onReady: function (t) {
                                                t.target.playVideo()
                                            }
                                        }
                                    }) : new YT.Player(c, {
                                        events: {
                                            onStateChange: Q
                                        }
                                    }), t.addClass("HasListener"), d.data("player", l)
                                } catch (t) {}
                                d.find(".tp-thumb-image").click(function () {
                                    TweenLite.to(Z(this), .3, {
                                        opacity: 0,
                                        ease: Power3.easeInOut,
                                        onComplete: function () {
                                            d.find(".tp-thumb-image").remove()
                                        }
                                    }), d.data("player").playVideo()
                                })
                            } else if (0 <= t.attr("src").toLowerCase().indexOf("vimeo")) {
                                if (t.hasClass("HasListener")) {
                                    if (1 == d.data("autoplay")) {
                                        var e = (t = d.find("iframe")).attr("id"),
                                            i = $f(e);
                                        d.data("timerplay", setTimeout(function () {
                                            i.api("play")
                                        }, d.data("start")))
                                    }
                                } else {
                                    t.addClass("HasListener"), t.attr("id", c);
                                    for (var n, o = t.attr("src"), s = {}, r = o, a = /([^&=]+)=([^&]*)/g; n = a.exec(r);) s[decodeURIComponent(n[1])] = decodeURIComponent(n[2]);
                                    o = s.player_id != G ? o.replace(s.player_id, c) : o + "&player_id=" + c;
                                    try {
                                        o = o.replace("api=0", "api=1")
                                    } catch (t) {}
                                    o += "&api=1", t.attr("src", o);
                                    var l = d.find("iframe")[0];
                                    $f(l).addEvent("ready", function () {
                                        var t, e, i, n;
                                        t = c, e = d.data("autoplay"), i = $f(t), n = Z("#" + t).closest(".tp-simpleresponsive"), i.addEvent("ready", function (t) {
                                            e && i.api("play"), i.addEvent("play", function (t) {
                                                var e = n.find(".tp-bannertimer"),
                                                    i = e.data("opt");
                                                e.stop(), i.videoplaying = !0
                                            }), i.addEvent("finish", function (t) {
                                                var e = n.find(".tp-bannertimer"),
                                                    i = e.data("opt");
                                                0 == i.conthover && e.animate({
                                                    width: "100%"
                                                }, {
                                                    duration: i.delay - i.cd - 100,
                                                    queue: !1,
                                                    easing: "linear"
                                                }), i.videoplaying = !1, (i.videostartednow = 1) == i.nextslideatend && i.container.revnext()
                                            }), i.addEvent("pause", function (t) {
                                                var e = n.find(".tp-bannertimer"),
                                                    i = e.data("opt");
                                                0 == i.conthover && e.animate({
                                                    width: "100%"
                                                }, {
                                                    duration: i.delay - i.cd - 100,
                                                    queue: !1,
                                                    easing: "linear"
                                                }), i.videoplaying = !1, i.videostoppednow = 1
                                            })
                                        })
                                    })
                                }
                                d.find(".tp-thumb-image").click(function () {
                                    TweenLite.to(Z(this), .3, {
                                        opacity: 0,
                                        ease: Power3.easeInOut,
                                        onComplete: function () {
                                            d.find(".tp-thumb-image").remove()
                                        }
                                    });
                                    var t = d.find("iframe").attr("id");
                                    $f(t).api("play")
                                })
                            }
                        }), 0 < d.find("video").length && d.find("video").each(function (t) {
                            var e = Z(this).parent();
                            if (e.hasClass("video-js")) {
                                if (B.nextslideatend = d.data("nextslideatend"), e.hasClass("HasListener")) i = e.attr("id");
                                else {
                                    e.addClass("HasListener");
                                    var i = "videoid_" + Math.round(1e3 * Math.random() + 1);
                                    e.attr("id", i), videojs(i).ready(function () {
                                        var t;
                                        (t = this).on("play", function () {
                                            var t = Z("body").find(".tp-bannertimer"),
                                                e = t.data("opt");
                                            t.stop();
                                            try {
                                                e.videoplaying = !0
                                            } catch (t) {}
                                        }), t.on("pause", function () {
                                            var t = Z("body").find(".tp-bannertimer"),
                                                e = t.data("opt");
                                            0 == e.conthover && t.animate({
                                                width: "100%"
                                            }, {
                                                duration: e.delay - e.cd - 100,
                                                queue: !1,
                                                easing: "linear"
                                            }), e.videoplaying = !1, e.videostoppednow = 1
                                        }), t.on("ended", function () {
                                            var t = Z("body").find(".tp-bannertimer"),
                                                e = t.data("opt");
                                            0 == e.conthover && t.animate({
                                                width: "100%"
                                            }, {
                                                duration: e.delay - e.cd - 100,
                                                queue: !1,
                                                easing: "linear"
                                            }), e.videoplaying = !1, (e.videostoppednow = 1) == e.nextslideatend && e.container.revnext()
                                        })
                                    })
                                }
                                if (1 == d.data("autoplay")) {
                                    var n = Z("body").find("#" + B.container.attr("id")).find(".tp-bannertimer");
                                    setTimeout(function () {
                                        n.stop(), B.videoplaying = !0
                                    }, 200), videojs(i).ready(function () {
                                        var t = this;
                                        e.data("timerplay", setTimeout(function () {
                                            t.play()
                                        }, d.data("start")))
                                    })
                                }
                                e.data("ww") == G && e.data("ww", e.width()), e.data("hh") == G && e.data("hh", e.height()), videojs(i).ready(function () {
                                    if (!d.hasClass("fullscreenvideo")) {
                                        var t = videojs(i);
                                        try {
                                            t.width(e.data("ww") * B.bw), t.height(e.data("hh") * B.bh)
                                        } catch (t) {}
                                    }
                                })
                            }
                        }), 1 == d.data("autoplay"))) {
                        var o = Z("body").find("#" + B.container.attr("id")).find(".tp-bannertimer");
                        setTimeout(function () {
                            o.stop(), B.videoplaying = !0
                        }, 200), B.videoplaying = !0, 1 != d.data("autoplayonlyfirsttime") && "true" != d.data("autoplayonlyfirsttime") || (d.data("autoplay", !1), d.data("autoplayonlyfirsttime", !1))
                    }
                    var s = 0,
                        r = 0;
                    if (0 < d.find("img").length) {
                        (h = d.find("img")).data("ww") == G && h.data("ww", h.width()), h.data("hh") == G && h.data("hh", h.height());
                        var a = h.data("ww"),
                            l = h.data("hh");
                        h.width(a * B.bw), h.height(l * B.bh), s = h.width(), r = h.height()
                    } else if (0 < d.find("iframe").length) {
                        var h;
                        (h = d.find("iframe")).css({
                            display: "block"
                        }), d.data("ww") == G && d.data("ww", h.width()), d.data("hh") == G && d.data("hh", h.height());
                        a = d.data("ww"), l = d.data("hh");
                        var u = d;
                        u.data("fsize") == G && u.data("fsize", parseInt(u.css("font-size"), 0) || 0), u.data("pt") == G && u.data("pt", parseInt(u.css("paddingTop"), 0) || 0), u.data("pb") == G && u.data("pb", parseInt(u.css("paddingBottom"), 0) || 0), u.data("pl") == G && u.data("pl", parseInt(u.css("paddingLeft"), 0) || 0), u.data("pr") == G && u.data("pr", parseInt(u.css("paddingRight"), 0) || 0), u.data("mt") == G && u.data("mt", parseInt(u.css("marginTop"), 0) || 0), u.data("mb") == G && u.data("mb", parseInt(u.css("marginBottom"), 0) || 0), u.data("ml") == G && u.data("ml", parseInt(u.css("marginLeft"), 0) || 0), u.data("mr") == G && u.data("mr", parseInt(u.css("marginRight"), 0) || 0), u.data("bt") == G && u.data("bt", parseInt(u.css("borderTop"), 0) || 0), u.data("bb") == G && u.data("bb", parseInt(u.css("borderBottom"), 0) || 0), u.data("bl") == G && u.data("bl", parseInt(u.css("borderLeft"), 0) || 0), u.data("br") == G && u.data("br", parseInt(u.css("borderRight"), 0) || 0), u.data("lh") == G && u.data("lh", parseInt(u.css("lineHeight"), 0) || 0);
                        var p = B.width,
                            f = B.height;
                        if (p > B.startwidth && (p = B.startwidth), f > B.startheight && (f = B.startheight), d.hasClass("fullscreenvideo")) {
                            V = U = 0, d.data("x", 0), d.data("y", 0);
                            var g = B.height;
                            "on" == B.autoHeight && (g = B.container.height()), d.css({
                                width: B.width,
                                height: g
                            })
                        } else d.css({
                            "font-size": u.data("fsize") * B.bw + "px",
                            "padding-top": u.data("pt") * B.bh + "px",
                            "padding-bottom": u.data("pb") * B.bh + "px",
                            "padding-left": u.data("pl") * B.bw + "px",
                            "padding-right": u.data("pr") * B.bw + "px",
                            "margin-top": u.data("mt") * B.bh + "px",
                            "margin-bottom": u.data("mb") * B.bh + "px",
                            "margin-left": u.data("ml") * B.bw + "px",
                            "margin-right": u.data("mr") * B.bw + "px",
                            "border-top": u.data("bt") * B.bh + "px",
                            "border-bottom": u.data("bb") * B.bh + "px",
                            "border-left": u.data("bl") * B.bw + "px",
                            "border-right": u.data("br") * B.bw + "px",
                            "line-height": u.data("lh") * B.bh + "px",
                            height: l * B.bh + "px",
                            "white-space": "nowrap"
                        });
                        h.width(a * B.bw), h.height(l * B.bh), s = h.width(), r = h.height()
                    } else {
                        d.find(".tp-resizeme, .tp-resizeme *").each(function () {
                            it(Z(this), B)
                        }), d.hasClass("tp-resizeme") && d.find("*").each(function () {
                            it(Z(this), B)
                        }), it(d, B), r = d.outerHeight(!0), s = d.outerWidth(!0);
                        var m = d.outerHeight(),
                            v = d.css("backgroundColor");
                        d.find(".frontcorner").css({
                            borderWidth: m + "px",
                            left: 0 - m + "px",
                            borderRight: "0px solid transparent",
                            borderTopColor: v
                        }), d.find(".frontcornertop").css({
                            borderWidth: m + "px",
                            left: 0 - m + "px",
                            borderRight: "0px solid transparent",
                            borderBottomColor: v
                        }), d.find(".backcorner").css({
                            borderWidth: m + "px",
                            right: 0 - m + "px",
                            borderLeft: "0px solid transparent",
                            borderBottomColor: v
                        }), d.find(".backcornertop").css({
                            borderWidth: m + "px",
                            right: 0 - m + "px",
                            borderLeft: "0px solid transparent",
                            borderTopColor: v
                        })
                    }
                    "on" == B.fullScreenAlignForce && (i = e = 1, V = U = 0), d.data("voffset") == G && d.data("voffset", 0), d.data("hoffset") == G && d.data("hoffset", 0);
                    var y = d.data("voffset") * e,
                        w = d.data("hoffset") * e,
                        b = B.startwidth * e,
                        x = B.startheight * e;
                    "on" == B.fullScreenAlignForce && (b = B.container.width(), x = B.container.height()), "center" != d.data("x") && "center" != d.data("xcenter") || (d.data("xcenter", "center"), d.data("x", (b / 2 - d.outerWidth(!0) / 2) / e + w)), "left" != d.data("x") && "left" != d.data("xleft") || (d.data("xleft", "left"), d.data("x", 0 / e + w)), "right" != d.data("x") && "right" != d.data("xright") || (d.data("xright", "right"), d.data("x", (b - d.outerWidth(!0) + w) / e)), "center" != d.data("y") && "center" != d.data("ycenter") || (d.data("ycenter", "center"), d.data("y", (x / 2 - d.outerHeight(!0) / 2) / i + y)), "top" != d.data("y") && "top" != d.data("ytop") || (d.data("ytop", "top"), d.data("y", 0 / B.bh + y)), "bottom" != d.data("y") && "bottom" != d.data("ybottom") || (d.data("ybottom", "bottom"), d.data("y", (x - d.outerHeight(!0) + y) / e)), d.data("start") == G && d.data("start", 1e3);
                    var _ = d.data("easing");
                    _ == G && (_ = "Power1.easeOut");
                    var T = d.data("start") / 1e3,
                        C = d.data("speed") / 1e3,
                        k = e * d.data("x") + U,
                        S = B.bh * d.data("y") + V;
                    "on" == B.fullScreenAlignForce && (S = d.data("y") + V), TweenLite.killTweensOf(d, !1), clearTimeout(d.data("reversetimer"));
                    var E = k,
                        P = S,
                        A = 2,
                        N = 1,
                        O = 1,
                        M = 1,
                        I = 0,
                        D = 0,
                        $ = 0,
                        L = 0,
                        z = 0,
                        R = 0,
                        j = "center,center",
                        H = 300,
                        W = 0,
                        F = !1,
                        q = 0;
                    if (d.data("repeat") != G && (W = d.data("repeat")), d.data("yoyo") != G && (F = d.data("yoyo")), d.data("repeatdelay") != G && (q = d.data("repeatdelay")), d.hasClass("customin")) {
                        var X = d.data("customin").split(";");
                        Z.each(X, function (t, e) {
                            var i = (e = e.split(":"))[0],
                                n = e[1];
                            "rotationX" == i && (D = parseInt(n, 0)), "rotationY" == i && ($ = parseInt(n, 0)), "rotationZ" == i && (L = parseInt(n, 0)), "scaleX" == i && (O = parseFloat(n)), "scaleY" == i && (M = parseFloat(n)), "opacity" == i && (R = parseFloat(n)), "skewX" == i && (z = parseInt(n, 0)), "skewY" == i && parseInt(n, 0), "x" == i && (E = k + parseInt(n, 0)), "y" == i && (P = S + parseInt(n, 0)), "z" == i && (A = parseInt(n, 0)), "transformOrigin" == i && (j = n.toString()), "transformPerspective" == i && (H = parseInt(n, 0))
                        })
                    }
                    d.hasClass("randomrotate") && (N = 3 * Math.random() + 1, I = Math.round(200 * Math.random() - 100), E = k + Math.round(200 * Math.random() - 100), P = S + Math.round(200 * Math.random() - 100)), (d.hasClass("lfr") || d.hasClass("skewfromright")) && (E = 15 + B.width), (d.hasClass("lfl") || d.hasClass("skewfromleft")) && (E = -15 - s), d.hasClass("sfl") | d.hasClass("skewfromleftshort") && (E = k - 50), d.hasClass("sfr") | d.hasClass("skewfromrightshort") && (E = k + 50), d.hasClass("lft") && (P = -25 - r), d.hasClass("lfb") && (P = 25 + B.height), d.hasClass("sft") && (P = S - 50), d.hasClass("sfb") && (P = S + 50), (d.hasClass("skewfromright") || d.hasClass("skewfromrightshort")) && (z = -85), (d.hasClass("skewfromleft") || d.hasClass("skewfromleftshort")) && (z = 85), "safari" == function () {
                        var t, e = navigator.appName,
                            i = navigator.userAgent,
                            n = i.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
                        n && null != (t = i.match(/version\/([\.\d]+)/i)) && (n[2] = t[1]);
                        return (n = n ? [n[1], n[2]] : [e, navigator.appVersion, "-?"])[0]
                    }().toLowerCase() && ($ = D = 0), E = Math.round(E), P = Math.round(P), k = Math.round(k), S = Math.round(S), d.hasClass("customin") ? d.data("anim", TweenLite.fromTo(d, C, {
                        scaleX: O,
                        scaleY: M,
                        rotationX: D,
                        rotationY: $,
                        rotationZ: L,
                        x: 0,
                        y: 0,
                        left: E,
                        top: P,
                        z: A,
                        opacity: R,
                        transformPerspective: H,
                        transformOrigin: j,
                        visibility: "hidden"
                    }, {
                        left: k,
                        top: S,
                        scaleX: 1,
                        scaleY: 1,
                        rotationX: 0,
                        rotationY: 0,
                        rotationZ: 0,
                        skewX: 0,
                        skewY: 0,
                        z: 0,
                        x: 0,
                        y: 0,
                        visibility: "visible",
                        opacity: 1,
                        delay: T,
                        ease: _,
                        overwrite: "all"
                    })) : d.data("anim", TweenLite.fromTo(d, C, {
                        scale: N,
                        rotationX: 0,
                        rotationY: 0,
                        skewY: 0,
                        rotation: I,
                        left: E + "px",
                        top: P + "px",
                        opacity: 0,
                        z: 0,
                        x: 0,
                        y: 0,
                        skewX: z,
                        transformPerspective: 600,
                        visibility: "visible"
                    }, {
                        left: k + "px",
                        top: S + "px",
                        scale: 1,
                        skewX: 0,
                        rotation: 0,
                        z: 0,
                        visibility: "visible",
                        opacity: 1,
                        delay: T,
                        ease: _,
                        overwrite: "all",
                        yoyo: F,
                        repeat: W,
                        repeatDelay: q
                    })), d.data("timer", setTimeout(function () {
                        d.hasClass("fullscreenvideo") && d.css({
                            display: "block"
                        })
                    }, d.data("start"))), d.data("end") != G && nt(d, B, d.data("end") / 1e3)
                }
            }), Z("body").find("#" + B.container.attr("id")).find(".tp-bannertimer").data("opt", B)
        }

        function it(t, e) {
            t.data("fsize") == G && t.data("fsize", parseInt(t.css("font-size"), 0) || 0), t.data("pt") == G && t.data("pt", parseInt(t.css("paddingTop"), 0) || 0), t.data("pb") == G && t.data("pb", parseInt(t.css("paddingBottom"), 0) || 0), t.data("pl") == G && t.data("pl", parseInt(t.css("paddingLeft"), 0) || 0), t.data("pr") == G && t.data("pr", parseInt(t.css("paddingRight"), 0) || 0), t.data("mt") == G && t.data("mt", parseInt(t.css("marginTop"), 0) || 0), t.data("mb") == G && t.data("mb", parseInt(t.css("marginBottom"), 0) || 0), t.data("ml") == G && t.data("ml", parseInt(t.css("marginLeft"), 0) || 0), t.data("mr") == G && t.data("mr", parseInt(t.css("marginRight"), 0) || 0), t.data("bt") == G && t.data("bt", parseInt(t.css("borderTopWidth"), 0) || 0), t.data("bb") == G && t.data("bb", parseInt(t.css("borderBottomWidth"), 0) || 0), t.data("bl") == G && t.data("bl", parseInt(t.css("borderLeftWidth"), 0) || 0), t.data("br") == G && t.data("br", parseInt(t.css("borderRightWidth"), 0) || 0), t.data("lh") == G && t.data("lh", parseInt(t.css("lineHeight"), 0) || 0), t.data("minwidth") == G && t.data("minwidth", parseInt(t.css("minWidth"), 0) || 0), t.data("minheight") == G && t.data("minheight", parseInt(t.css("minHeight"), 0) || 0), t.data("maxwidth") == G && t.data("maxwidth", parseInt(t.css("maxWidth"), 0) || "none"), t.data("maxheight") == G && t.data("maxheight", parseInt(t.css("maxHeight"), 0) || "none"), t.css({
                "font-size": Math.round(t.data("fsize") * e.bw) + "px",
                "padding-top": Math.round(t.data("pt") * e.bh) + "px",
                "padding-bottom": Math.round(t.data("pb") * e.bh) + "px",
                "padding-left": Math.round(t.data("pl") * e.bw) + "px",
                "padding-right": Math.round(t.data("pr") * e.bw) + "px",
                "margin-top": t.data("mt") * e.bh + "px",
                "margin-bottom": t.data("mb") * e.bh + "px",
                "margin-left": t.data("ml") * e.bw + "px",
                "margin-right": t.data("mr") * e.bw + "px",
                borderTopWidth: Math.round(t.data("bt") * e.bh) + "px",
                borderBottomWidth: Math.round(t.data("bb") * e.bh) + "px",
                borderLeftWidth: Math.round(t.data("bl") * e.bw) + "px",
                borderRightWidth: Math.round(t.data("br") * e.bw) + "px",
                "line-height": Math.round(t.data("lh") * e.bh) + "px",
                "white-space": "nowrap",
                minWidth: t.data("minwidth") * e.bw + "px",
                minHeight: t.data("minheight") * e.bh + "px"
            }), "none" != t.data("maxheight") && t.css({
                maxHeight: t.data("maxheight") * e.bh + "px"
            }), "none" != t.data("maxwidth") && t.css({
                maxWidth: t.data("maxwidth") * e.bw + "px"
            })
        }

        function nt(t, e, i) {
            var n = t.data("endspeed");
            n == G && (n = t.data("speed")), n /= 1e3;
            var o = t.data("endeasing");
            if (o == G && (o = Power1.easeInOut), t.hasClass("ltr") || t.hasClass("ltl") || t.hasClass("str") || t.hasClass("stl") || t.hasClass("ltt") || t.hasClass("ltb") || t.hasClass("stt") || t.hasClass("stb") || t.hasClass("skewtoright") || t.hasClass("skewtorightshort") || t.hasClass("skewtoleft") || t.hasClass("skewtoleftshort")) {
                g = 0, (t.hasClass("skewtoright") || t.hasClass("skewtorightshort")) && (g = 35), (t.hasClass("skewtoleft") || t.hasClass("skewtoleftshort")) && (g = -35);
                var s = t.position().left,
                    r = t.position().top;
                t.hasClass("ltr") || t.hasClass("skewtoright") ? s = e.width + 60 : t.hasClass("ltl") || t.hasClass("skewtoleft") ? s = 0 - t.width() - 60 : t.hasClass("ltt") ? r = 0 - t.height() - 60 : t.hasClass("ltb") ? r = e.height + 60 : t.hasClass("str") || t.hasClass("skewtorightshort") ? (s += 50, oo = 0) : t.hasClass("stl") || t.hasClass("skewtoleftshort") ? (s -= 50, oo = 0) : t.hasClass("stt") ? (r -= 50, oo = 0) : t.hasClass("stb") && (r += 50, oo = 0), t.hasClass("skewtorightshort") && (s += 220), t.hasClass("skewtoleftshort") && (s -= 220), t.data("outanim", TweenLite.to(t, n, {
                    left: s,
                    top: r,
                    scale: 1,
                    rotation: 0,
                    skewX: g,
                    opacity: 0,
                    delay: i,
                    z: 0,
                    overwrite: "auto",
                    ease: o,
                    onStart: function () {
                        t.data("anim") != G && t.data("anim").pause()
                    }
                }))
            } else if (t.hasClass("randomrotateout")) t.data("outanim", TweenLite.to(t, n, {
                left: Math.random() * e.width,
                top: Math.random() * e.height,
                scale: 2 * Math.random() + .3,
                rotation: 360 * Math.random() - 180,
                z: 0,
                opacity: 0,
                delay: i,
                ease: o,
                onStart: function () {
                    t.data("anim") != G && t.data("anim").pause()
                }
            }));
            else if (t.hasClass("fadeout")) t.data("outanim", TweenLite.to(t, n, {
                opacity: 0,
                delay: i,
                ease: o,
                onStart: function () {
                    t.data("anim") != G && t.data("anim").pause()
                }
            }));
            else if (t.hasClass("customout")) {
                var a = 0,
                    l = 0,
                    d = 2,
                    c = 1,
                    h = 1,
                    u = 0,
                    p = 0,
                    f = 0,
                    g = 0,
                    m = 0,
                    v = "center,center",
                    y = 300,
                    w = t.data("customout").split(";");
                Z.each(w, function (t, e) {
                    var i = (e = e.split(":"))[0],
                        n = e[1];
                    "rotationX" == i && (u = parseInt(n, 0)), "rotationY" == i && (p = parseInt(n, 0)), "rotationZ" == i && (f = parseInt(n, 0)), "scaleX" == i && (c = parseFloat(n)), "scaleY" == i && (h = parseFloat(n)), "opacity" == i && (m = parseFloat(n)), "skewX" == i && (g = parseInt(n, 0)), "skewY" == i && parseInt(n, 0), "x" == i && (a = parseInt(n, 0)), "y" == i && (l = parseInt(n, 0)), "z" == i && (d = parseInt(n)), "transformOrigin" == i && (v = n), "transformPerspective" == i && (y = parseInt(n, 0))
                }), t.data("outanim", TweenLite.to(t, n, {
                    scaleX: c,
                    scaleY: h,
                    rotationX: u,
                    rotationY: p,
                    rotationZ: f,
                    x: a,
                    y: l,
                    z: d,
                    opacity: m,
                    delay: i,
                    ease: o,
                    overwrite: "auto",
                    onStart: function () {
                        t.data("anim") != G && t.data("anim").pause(), TweenLite.set(t, {
                            transformPerspective: y,
                            transformOrigin: v,
                            overwrite: "auto"
                        })
                    }
                }))
            } else clearTimeout(t.data("reversetimer")), t.data("reversetimer", setTimeout(function () {
                t.data("anim").reverse()
            }, 1e3 * i))
        }
        Z.fn.extend({
            revolution: function (m) {
                return Z.fn.revolution.defaults = {
                    delay: 9e3,
                    startheight: 500,
                    startwidth: 960,
                    fullScreenAlignForce: "off",
                    autoHeight: "off",
                    hideThumbs: 200,
                    thumbWidth: 100,
                    thumbHeight: 50,
                    thumbAmount: 3,
                    navigationType: "bullet",
                    navigationArrows: "solo",
                    hideThumbsOnMobile: "off",
                    hideBulletsOnMobile: "off",
                    hideArrowsOnMobile: "off",
                    hideThumbsUnderResoluition: 0,
                    navigationStyle: "round",
                    navigationHAlign: "center",
                    navigationVAlign: "bottom",
                    navigationHOffset: 0,
                    navigationVOffset: 20,
                    soloArrowLeftHalign: "left",
                    soloArrowLeftValign: "center",
                    soloArrowLeftHOffset: 20,
                    soloArrowLeftVOffset: 0,
                    soloArrowRightHalign: "right",
                    soloArrowRightValign: "center",
                    soloArrowRightHOffset: 20,
                    soloArrowRightVOffset: 0,
                    keyboardNavigation: "on",
                    touchenabled: "on",
                    onHoverStop: "on",
                    stopAtSlide: -1,
                    stopAfterLoops: -1,
                    hideCaptionAtLimit: 0,
                    hideAllCaptionAtLimit: 0,
                    hideSliderAtLimit: 0,
                    shadow: 0,
                    fullWidth: "off",
                    fullScreen: "off",
                    fullScreenOffsetContainer: "",
                    forceFullWidth: "off"
                }, m = Z.extend({}, Z.fn.revolution.defaults, m), this.each(function () {
                    var o = m;
                    "on" != o.fullWidth && "on" != o.fullScreen && (o.autoHeight = "off"), "on" == o.fullScreen && (o.autoHeight = "on"), "on" != o.fullWidth && "on" != o.fullScreen && (forceFulWidth = "off");
                    var s = Z(this);
                    if ("on" == o.fullWidth && "off" == o.autoHeight && s.css({
                            maxHeight: o.startheight + "px"
                        }), v() && "on" == o.hideThumbsOnMobile && "thumb" == o.navigationType && (o.navigationType = "none"), v() && "on" == o.hideBulletsOnMobile && "bullet" == o.navigationType && (o.navigationType = "none"), v() && "on" == o.hideBulletsOnMobile && "both" == o.navigationType && (o.navigationType = "none"), v() && "on" == o.hideArrowsOnMobile && (o.navigationArrows = "none"), "on" == o.forceFullWidth) {
                        var t = s.parent().offset().left;
                        s.parent().append('<div class="tp-fullwidth-forcer" style="width:100%;height:' + s.height() + 'px"></div>'), s.css({
                            backgroundColor: s.parent().css("backgroundColor"),
                            backgroundImage: s.parent().css("backgroundImage")
                        }), s.parent().css({
                            width: Z(window).width()
                        }), s.css({
                            left: 0 - t + "px",
                            position: "absolute",
                            width: Z(window).width()
                        }), o.width = Z(window).width()
                    }
                    try {
                        o.hideThumbsUnderResolution > Z(window).width() && 0 != o.hideThumbsUnderResolution ? s.parent().find(".tp-bullets.tp-thumbs").css({
                            display: "none"
                        }) : s.parent().find(".tp-bullets.tp-thumbs").css({
                            display: "block"
                        })
                    } catch (t) {}
                    if (!s.hasClass("revslider-initialised")) {
                        s.addClass("revslider-initialised"), s.attr("id") == G && s.attr("id", "revslider-" + Math.round(1e3 * Math.random() + 5)), o.firefox13 = !1, o.ie = !Z.support.opacity, o.ie9 = 9 == document.documentMode;
                        var e = Z.fn.jquery.split("."),
                            i = parseFloat(e[0]),
                            n = parseFloat(e[1]);
                        parseFloat(e[2] || "0");
                        1 == i && n < 7 && s.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:' + e + " <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>"), 1 < i && (o.ie = !1), Z.support.transition || (Z.fn.transition = Z.fn.animate), s.find(".caption").each(function () {
                            Z(this).addClass("tp-caption")
                        }), v() && s.find(".tp-caption").each(function () {
                            1 == Z(this).data("autoplay") && Z(this).data("autoplay", !1)
                        });
                        var r = 0,
                            a = 0,
                            l = 0;
                        if (s.find(".tp-caption iframe").each(function (t) {
                                try {
                                    if (0 < Z(this).attr("src").indexOf("you") && 0 == r) {
                                        r = 1;
                                        var e = document.createElement("script");
                                        e.src = "http://www.youtube.com/player_api";
                                        var i = document.getElementsByTagName("script")[0],
                                            n = !0;
                                        Z("head").find("*").each(function () {
                                            "http://www.youtube.com/player_api" == Z(this).attr("src") && (n = !1)
                                        }), n && i.parentNode.insertBefore(e, i)
                                    }
                                } catch (t) {}
                            }), s.find(".tp-caption iframe").each(function (t) {
                                try {
                                    if (0 < Z(this).attr("src").indexOf("vim") && 0 == a) {
                                        a = 1;
                                        var e = document.createElement("script");
                                        e.src = "http://a.vimeocdn.com/js/froogaloop2.min.js";
                                        var i = document.getElementsByTagName("script")[0],
                                            n = !0;
                                        Z("head").find("*").each(function () {
                                            "http://a.vimeocdn.com/js/froogaloop2.min.js" == Z(this).attr("src") && (n = !1)
                                        }), n && i.parentNode.insertBefore(e, i)
                                    }
                                } catch (t) {}
                            }), s.find(".tp-caption video").each(function (t) {
                                try {
                                    if (Z(this).hasClass("video-js") && 0 == l) {
                                        l = 1;
                                        var e = document.createElement("script");
                                        e.src = o.videoJsPath + "video.js";
                                        var i = document.getElementsByTagName("script")[0],
                                            n = !0;
                                        Z("head").find("*").each(function () {
                                            Z(this).attr("src") == o.videoJsPath + "video.js" && (n = !1)
                                        }), n && (i.parentNode.insertBefore(e, i), Z("head").append('<link rel="stylesheet" type="text/css" href="' + o.videoJsPath + 'video-js.min.css" media="screen" />'), Z("head").append('<script> videojs.options.flash.swf = "' + o.videoJsPath + 'video-js.swf";<\/script>'))
                                    }
                                } catch (t) {}
                            }), "on" == o.shuffle)
                            for (var d = 0; d < s.find(">ul:first-child >li").length; d++) {
                                var c = Math.round(Math.random() * s.find(">ul:first-child >li").length);
                                s.find(">ul:first-child >li:eq(" + c + ")").prependTo(s.find(">ul:first-child"))
                            }
                        o.slots = 4, o.act = -1, o.next = 0, o.startWithSlide != G && (o.next = o.startWithSlide);
                        var h = function (t) {
                            for (var e, i = [], n = window.location.href.slice(window.location.href.indexOf(t) + 1).split("_"), o = 0; o < n.length; o++) n[o] = n[o].replace("%3D", "="), e = n[o].split("="), i.push(e[0]), i[e[0]] = e[1];
                            return i
                        }("#")[0];
                        if (h.length < 9 && 1 < h.split("slide").length) {
                            var u = parseInt(h.split("slide")[1], 0);
                            u < 1 && (u = 1), u > s.find(">ul:first >li").length && (u = s.find(">ul:first >li").length), o.next = u - 1
                        }
                        o.origcd = o.delay, o.firststart = 1, o.navigationHOffset == G && (o.navOffsetHorizontal = 0), o.navigationVOffset == G && (o.navOffsetVertical = 0), s.append('<div class="tp-loader"></div>'), 0 == s.find(".tp-bannertimer").length && s.append('<div class="tp-bannertimer" style="visibility:hidden"></div>');
                        var p = s.find(".tp-bannertimer");
                        if (0 < p.length && p.css({
                                width: "0%"
                            }), s.addClass("tp-simpleresponsive"), o.container = s, o.slideamount = s.find(">ul:first >li").length, 0 == s.height() && s.height(o.startheight), o.startwidth != G && 0 != o.startwidth || (o.startwidth = s.width()), o.startheight != G && 0 != o.startheight || (o.startheight = s.height()), o.width = s.width(), o.height = s.height(), o.bw = o.startwidth / s.width(), o.bh = o.startheight / s.height(), o.width != o.startwidth && (o.height = Math.round(o.startheight * (o.width / o.startwidth)), s.height(o.height)), 0 != o.shadow) {
                            s.parent().append('<div class="tp-bannershadow tp-shadow' + o.shadow + '"></div>');
                            t = 0;
                            "on" == o.forceFullWidth && (t = 0 - o.container.parent().offset().left), s.parent().find(".tp-bannershadow").css({
                                width: o.width,
                                left: t
                            })
                        }
                        s.find("ul").css({
                            display: "none"
                        });
                        var f = s;
                        if ("on" == o.lazyLoad) {
                            var g = s.find("ul >li >img").first();
                            g.data("lazyload") != G && g.attr("src", g.data("lazyload")), g.data("lazydone", 1), f = g.parent()
                        }
                        f.waitForImages(function () {
                            var e, i, t, n;
                            s.find("ul").css({
                                    display: "block"
                                }),
                                function (t, r) {
                                    t.find(".tp-caption").each(function () {
                                        Z(this).addClass(Z(this).data("transition")), Z(this).addClass("start")
                                    }), t.find(">ul:first").css({
                                        overflow: "hidden",
                                        width: "100%",
                                        height: "100%",
                                        maxHeight: t.parent().css("maxHeight")
                                    }), "on" == r.autoHeight && (t.find(">ul:first").css({
                                        overflow: "hidden",
                                        width: "100%",
                                        height: "100%",
                                        maxHeight: "none"
                                    }), t.css({
                                        maxHeight: "none"
                                    }), t.parent().css({
                                        maxHeight: "none"
                                    }));
                                    t.find(">ul:first >li").each(function (t) {
                                        var e = Z(this);
                                        if (e.css({
                                                width: "100%",
                                                height: "100%",
                                                overflow: "hidden"
                                            }), e.data("link") != G) {
                                            var i = e.data("link"),
                                                n = "_self",
                                                o = 2;
                                            "back" == e.data("slideindex") && (o = 0);
                                            var s = e.data("linktoslide");
                                            e.data("target") != G && (n = e.data("target")), "slide" == i ? e.append('<div class="tp-caption sft slidelink" style="z-index:' + o + ';" data-x="0" data-y="0" data-linktoslide="' + s + '" data-start="0"><a><div></div></a></div>') : (s = "no", e.append('<div class="tp-caption sft slidelink" style="z-index:' + o + ';" data-x="0" data-y="0" data-linktoslide="' + s + '" data-start="0"><a target="' + n + '" href="' + i + '"><div></div></a></div>'))
                                        }
                                    }), t.parent().css({
                                        overflow: "visible"
                                    }), t.find(">ul:first >li >img").each(function (t) {
                                        var e = Z(this);
                                        e.addClass("defaultimg"), e.data("lazyload") != G && 1 != e.data("lazydone") || T(e, r), e.wrap('<div class="slotholder" style="width:100%;height:100%;"></div>');
                                        var i = e.attr("src"),
                                            n = (e.data("lazyload"), e.data("bgfit")),
                                            o = e.data("bgrepeat"),
                                            s = e.data("bgposition");
                                        n == G && (n = "cover"), o == G && (o = "no-repeat"), s == G && (s = "center center"), e.replaceWith('<div class="tp-bgimg defaultimg" data-lazyload="' + e.data("lazyload") + '" data-bgfit="' + n + '"data-bgposition="' + s + '" data-bgrepeat="' + o + '" data-lazydone="' + e.data("lazydone") + '" data-src="' + i + '" style="background-color:' + e.css("backgroundColor") + ";background-repeat:" + o + ";background-image:url(" + i + ");background-size:" + n + ";background-position:" + s + ';width:100%;height:100%;background-attachment:fixed"></div>'), e.css({
                                            opacity: 0
                                        }), e.data("li-id", t)
                                    })
                                }(s, o), 1 < o.slideamount && function (i, n) {
                                    "bullet" != n.navigationType && "both" != n.navigationType || i.parent().append('<div class="tp-bullets simplebullets ' + n.navigationStyle + '"></div>');
                                    var e = i.parent().find(".tp-bullets");
                                    i.find(">ul:first >li").each(function (t) {
                                        i.find(">ul:first >li:eq(" + t + ") img:first").attr("src");
                                        e.append('<div class="bullet"></div>');
                                        e.find(".bullet:first")
                                    }), e.find(".bullet").each(function (t) {
                                        var e = Z(this);
                                        t == n.slideamount - 1 && e.addClass("last"), 0 == t && e.addClass("first"), e.click(function () {
                                            var t = !1;
                                            "withbullet" == n.navigationArrows || "nexttobullets" == n.navigationArrows ? e.index() - 1 == n.act && (t = !0) : e.index() == n.act && (t = !0), 0 != n.transition || t || ("withbullet" == n.navigationArrows || "nexttobullets" == n.navigationArrows ? n.next = e.index() - 1 : n.next = e.index(), w(n, i))
                                        })
                                    }), e.append('<div class="tpclear"></div>'), _(i, n)
                                }(s, o), 1 < o.slideamount && function (d, n) {
                                    var t = d.parent();
                                    "thumb" != n.navigationType && "both" != n.navsecond || t.append('<div class="tp-bullets tp-thumbs ' + n.navigationStyle + '"><div class="tp-mask"><div class="tp-thumbcontainer"></div></div></div>');
                                    var o = t.find(".tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer"),
                                        e = o.parent();
                                    e.width(n.thumbWidth * n.thumbAmount), e.height(n.thumbHeight), e.parent().width(n.thumbWidth * n.thumbAmount), e.parent().height(n.thumbHeight), d.find(">ul:first >li").each(function (t) {
                                        var e = d.find(">ul:first >li:eq(" + t + ")");
                                        if (e.data("thumb") != G) var i = e.data("thumb");
                                        else var i = e.find("img:first").attr("src");
                                        o.append('<div class="bullet thumb" style="width:' + n.thumbWidth + "px;height:" + n.thumbHeight + 'px;"><img src="' + i + '"></div>');
                                        o.find(".bullet:first")
                                    });
                                    var i = 10;
                                    o.find(".bullet").each(function (t) {
                                        var e = Z(this);
                                        t == n.slideamount - 1 && e.addClass("last"), 0 == t && e.addClass("first"), e.width(n.thumbWidth), e.height(n.thumbHeight), i < e.outerWidth(!0) && (i = e.outerWidth(!0)), e.click(function () {
                                            0 == n.transition && e.index() != n.act && (n.next = e.index(), w(n, d))
                                        })
                                    });
                                    var s = i * d.find(">ul:first >li").length,
                                        r = o.parent().width();
                                    n.thumbWidth = i, r < s && (Z(document).mousemove(function (t) {
                                        Z("body").data("mousex", t.pageX)
                                    }), o.parent().mouseenter(function () {
                                        var t = Z(this);
                                        t.addClass("over");
                                        var e = t.offset(),
                                            i = Z("body").data("mousex") - e.left,
                                            n = t.width(),
                                            o = t.find(".bullet:first").outerWidth(!0),
                                            s = o * d.find(">ul:first >li").length,
                                            r = s - n + 15,
                                            a = r / n,
                                            l = 0 - (i -= 30) * a;
                                        0 < l && (l = 0), l < 0 - s + n && (l = 0 - s + n), x(t, l, 200)
                                    }), o.parent().mousemove(function () {
                                        var t = Z(this),
                                            e = t.offset(),
                                            i = Z("body").data("mousex") - e.left,
                                            n = t.width(),
                                            o = t.find(".bullet:first").outerWidth(!0),
                                            s = o * d.find(">ul:first >li").length,
                                            r = s - n + 15,
                                            a = r / n,
                                            l = 0 - (i -= 30) * a;
                                        0 < l && (l = 0), l < 0 - s + n && (l = 0 - s + n), x(t, l, 0)
                                    }), o.parent().mouseleave(function () {
                                        var t = Z(this);
                                        t.removeClass("over"), b(d)
                                    }))
                                }(s, o), 1 < o.slideamount && function (t, e) {
                                    t.find(".tp-bullets");
                                    var i = "",
                                        n = e.navigationStyle;
                                    "none" == e.navigationArrows && (i = "visibility:hidden;display:none");
                                    e.soloArrowStyle = "default", "none" != e.navigationArrows && "nexttobullets" != e.navigationArrows && (n = e.soloArrowStyle);
                                    t.parent().append('<div style="' + i + '" class="tp-leftarrow tparrows ' + n + '"></div>'), t.parent().append('<div style="' + i + '" class="tp-rightarrow tparrows ' + n + '"></div>'), t.parent().find(".tp-rightarrow").click(function () {
                                        0 == e.transition && (t.data("showus") != G && -1 != t.data("showus") ? e.next = t.data("showus") - 1 : e.next = e.next + 1, t.data("showus", -1), e.next >= e.slideamount && (e.next = 0), e.next < 0 && (e.next = 0), e.act != e.next && w(e, t))
                                    }), t.parent().find(".tp-leftarrow").click(function () {
                                        0 == e.transition && (e.next = e.next - 1, e.leftarrowpressed = 1, e.next < 0 && (e.next = e.slideamount - 1), w(e, t))
                                    }), _(t, e)
                                }(s, o), "on" == o.keyboardNavigation && (e = s, i = o, Z(document).keydown(function (t) {
                                    0 == i.transition && 39 == t.keyCode && (e.data("showus") != G && -1 != e.data("showus") ? i.next = e.data("showus") - 1 : i.next = i.next + 1, e.data("showus", -1), i.next >= i.slideamount && (i.next = 0), i.next < 0 && (i.next = 0), i.act != i.next && w(i, e)), 0 == i.transition && 37 == t.keyCode && (i.next = i.next - 1, i.leftarrowpressed = 1, i.next < 0 && (i.next = i.slideamount - 1), w(i, e))
                                }), _(e, i)), t = s, "on" == (n = o).touchenabled && t.swipe({
                                    data: t,
                                    swipeRight: function () {
                                        0 == n.transition && (n.next = n.next - 1, n.leftarrowpressed = 1, n.next < 0 && (n.next = n.slideamount - 1), w(n, t))
                                    },
                                    swipeLeft: function () {
                                        0 == n.transition && (n.next = n.next + 1, n.next == n.slideamount && (n.next = 0), w(n, t))
                                    },
                                    allowPageScroll: "auto"
                                }), 0 < o.hideThumbs && function (t, e) {
                                    var i = t.parent().find(".tp-bullets"),
                                        n = t.parent().find(".tparrows");
                                    if (null == i) {
                                        t.append('<div class=".tp-bullets"></div>');
                                        var i = t.parent().find(".tp-bullets")
                                    }
                                    if (null == n) {
                                        t.append('<div class=".tparrows"></div>');
                                        var n = t.parent().find(".tparrows")
                                    }
                                    t.data("hidethumbs", e.hideThumbs), i.addClass("hidebullets"), n.addClass("hidearrows"), i.hover(function () {
                                        i.addClass("hovered"), clearTimeout(t.data("hidethumbs")), i.removeClass("hidebullets"), n.removeClass("hidearrows")
                                    }, function () {
                                        i.removeClass("hovered"), t.hasClass("hovered") || i.hasClass("hovered") || t.data("hidethumbs", setTimeout(function () {
                                            i.addClass("hidebullets"), n.addClass("hidearrows")
                                        }, e.hideThumbs))
                                    }), n.hover(function () {
                                        i.addClass("hovered"), clearTimeout(t.data("hidethumbs")), i.removeClass("hidebullets"), n.removeClass("hidearrows")
                                    }, function () {
                                        i.removeClass("hovered")
                                    }), t.on("mouseenter", function () {
                                        t.addClass("hovered"), clearTimeout(t.data("hidethumbs")), i.removeClass("hidebullets"), n.removeClass("hidearrows")
                                    }), t.on("mouseleave", function () {
                                        t.removeClass("hovered"), t.hasClass("hovered") || i.hasClass("hovered") || t.data("hidethumbs", setTimeout(function () {
                                            i.addClass("hidebullets"), n.addClass("hidearrows")
                                        }, e.hideThumbs))
                                    })
                                }(s, o), s.waitForImages(function () {
                                    s.find(".tp-loader").fadeOut(600), setTimeout(function () {
                                        k(s, o), 1 < o.slideamount && function (t, e) {
                                            e.cd = 0, e.loop = 0, e.stopAfterLoops != G && -1 < e.stopAfterLoops ? e.looptogo = e.stopAfterLoops : e.looptogo = 9999999;
                                            e.stopAtSlide != G && -1 < e.stopAtSlide ? e.lastslidetoshow = e.stopAtSlide : e.lastslidetoshow = 999;
                                            e.stopLoop = "off", 0 == e.looptogo && (e.stopLoop = "on");
                                            if (1 < e.slideamount && (0 != e.stopAfterLoops || 1 != e.stopAtSlide)) {
                                                var i = t.find(".tp-bannertimer");
                                                0 < i.length && (i.css({
                                                    width: "0%"
                                                }), 1 != e.videoplaying && i.animate({
                                                    width: "100%"
                                                }, {
                                                    duration: e.delay - 100,
                                                    queue: !1,
                                                    easing: "linear"
                                                })), i.data("opt", e), e.cdint = setInterval(function () {
                                                    0 == Z("body").find(t).length && function (t, e) {
                                                        t.children().each(function () {
                                                            try {
                                                                Z(this).die("click")
                                                            } catch (t) {}
                                                            try {
                                                                Z(this).die("mouseenter")
                                                            } catch (t) {}
                                                            try {
                                                                Z(this).die("mouseleave")
                                                            } catch (t) {}
                                                            try {
                                                                Z(this).unbind("hover")
                                                            } catch (t) {}
                                                        });
                                                        try {
                                                            t.die("click", "mouseenter", "mouseleave")
                                                        } catch (t) {}
                                                        clearInterval(e.cdint), t = null
                                                    }(t, e), 1 == t.data("conthover-changed") && (e.conthover = t.data("conthover"), t.data("conthover-changed", 0)), 1 != e.conthover && 1 != e.videoplaying && e.width > e.hideSliderAtLimit && (e.cd = e.cd + 100), "on" != e.fullWidth && (e.width > e.hideSliderAtLimit ? t.parent().removeClass("tp-hide-revslider") : t.parent().addClass("tp-hide-revslider")), 1 == e.videostartednow && (t.trigger("revolution.slide.onvideoplay"), e.videostartednow = 0), 1 == e.videostoppednow && (t.trigger("revolution.slide.onvideostop"), e.videostoppednow = 0), e.cd >= e.delay && (e.cd = 0, e.act = e.next, e.next = e.next + 1, e.next > t.find(">ul >li").length - 1 && (e.next = 0, e.looptogo = e.looptogo - 1, e.looptogo <= 0 && (e.stopLoop = "on")), "on" == e.stopLoop && e.next == e.lastslidetoshow - 1 && (clearInterval(e.cdint), t.find(".tp-bannertimer").css({
                                                        visibility: "hidden"
                                                    }), t.trigger("revolution.slide.onstop")), k(t, e), 0 < i.length && (i.css({
                                                        width: "0%"
                                                    }), 1 != e.videoplaying && i.animate({
                                                        width: "100%"
                                                    }, {
                                                        duration: e.delay - 100,
                                                        queue: !1,
                                                        easing: "linear"
                                                    })))
                                                }, 100), t.hover(function () {
                                                    "on" == e.onHoverStop && (e.conthover = 1, i.stop(), t.trigger("revolution.slide.onpause"))
                                                }, function () {
                                                    1 != t.data("conthover") && (t.trigger("revolution.slide.onresume"), e.conthover = 0, "on" == e.onHoverStop && 1 != e.videoplaying && i.animate({
                                                        width: "100%"
                                                    }, {
                                                        duration: e.delay - e.cd - 100,
                                                        queue: !1,
                                                        easing: "linear"
                                                    }))
                                                })
                                            }
                                        }(s, o), s.trigger("revolution.slide.onloaded")
                                    }, 600)
                                })
                        }), Z(window).resize(function () {
                            if (0 != Z("body").find(s) && "on" == o.forceFullWidth) {
                                var t = o.container.parent().offset().left;
                                o.container.parent().css({
                                    width: Z(window).width()
                                }), o.container.css({
                                    left: 0 - t + "px",
                                    width: Z(window).width()
                                })
                            }
                            s.outerWidth(!0) != o.width && function (t, e) {
                                try {
                                    0 != e.hideThumbsUnderResoluition && "thumb" == e.navigationType && (e.hideThumbsUnderResoluition > Z(window).width() ? Z(".tp-bullets").css({
                                        display: "none"
                                    }) : Z(".tp-bullets").css({
                                        display: "block"
                                    }))
                                } catch (t) {}
                                t.find(".defaultimg").each(function (t) {
                                    T(Z(this), e)
                                });
                                var i = 0;
                                "on" == e.forceFullWidth && (i = 0 - e.container.parent().offset().left);
                                try {
                                    t.parent().find(".tp-bannershadow").css({
                                        width: e.width,
                                        left: i
                                    })
                                } catch (t) {}
                                var n = t.find(">ul >li:eq(" + e.act + ") .slotholder"),
                                    o = t.find(">ul >li:eq(" + e.next + ") .slotholder");
                                C(t, e), o.find(".defaultimg").css({
                                    opacity: 0
                                }), n.find(".defaultimg").css({
                                    opacity: 1
                                }), et(t.find(">ul >li:eq(" + e.next + ")"), e, !0), y(e, t)
                            }(s, o)
                        });
                        try {
                            0 != o.hideThumbsUnderResoluition && "thumb" == o.navigationType && (o.hideThumbsUnderResoluition > Z(window).width() ? Z(".tp-bullets").css({
                                display: "none"
                            }) : Z(".tp-bullets").css({
                                display: "block"
                            }))
                        } catch (t) {}
                        s.find(".tp-scrollbelowslider").on("click", function () {
                            var t = 0;
                            try {
                                t = Z("body").find(o.fullScreenOffsetContainer).height()
                            } catch (t) {}
                            try {
                                t -= Z(this).data("scrolloffset")
                            } catch (t) {}
                            Z("body,html").animate({
                                scrollTop: s.offset().top + s.find(">ul >li").height() - t + "px"
                            }, {
                                duration: 400
                            })
                        })
                    }
                })
            },
            revscroll: function (e) {
                return this.each(function () {
                    var t = Z(this);
                    Z("body,html").animate({
                        scrollTop: t.offset().top + t.find(">ul >li").height() - e + "px"
                    }, {
                        duration: 400
                    })
                })
            },
            revpause: function (t) {
                return this.each(function () {
                    var t = Z(this);
                    t.data("conthover", 1), t.data("conthover-changed", 1), t.trigger("revolution.slide.onpause"), t.parent().find(".tp-bannertimer").stop()
                })
            },
            revresume: function (t) {
                return this.each(function () {
                    var t = Z(this);
                    t.data("conthover", 0), t.data("conthover-changed", 1), t.trigger("revolution.slide.onresume");
                    var e = t.parent().find(".tp-bannertimer"),
                        i = e.data("opt");
                    e.animate({
                        width: "100%"
                    }, {
                        duration: i.delay - i.cd - 100,
                        queue: !1,
                        easing: "linear"
                    })
                })
            },
            revnext: function (t) {
                return this.each(function () {
                    Z(this).parent().find(".tp-rightarrow").click()
                })
            },
            revprev: function (t) {
                return this.each(function () {
                    Z(this).parent().find(".tp-leftarrow").click()
                })
            },
            revmaxslide: function (t) {
                return Z(this).find(">ul:first-child >li").length
            },
            revcurrentslide: function (t) {
                return Z(this).parent().find(".tp-bannertimer").data("opt").act
            },
            revlastslide: function (t) {
                return Z(this).parent().find(".tp-bannertimer").data("opt").lastslide
            },
            revshowslide: function (e) {
                return this.each(function () {
                    var t = Z(this);
                    t.data("showus", e), t.parent().find(".tp-rightarrow").click()
                })
            }
        })
    }(jQuery),
    function () {
        "use strict";
        if ($(".fullwidth_home_banner").get(0)) {
            var e = $(".fullwidth_home_banner").revolution({
                delay: 9e3,
                startheight: 570,
                startwidth: 1350,
                hideThumbs: 10,
                thumbWidth: 100,
                thumbHeight: 50,
                thumbAmount: 5,
                navigationType: "on",
                navigationArrows: "nexttobullets",
                onHoverStop: "on",
                navOffsetHorizontal: 0,
                navOffsetVertical: 20,
                stopAtSlide: -1,
                stopAfterLoops: -1,
                shadow: 0,
                fullWidth: "on",
                navigation: {
                    touch: {
                        touchenabled: "on",
                        swipe_treshold: 75,
                        swipe_min_touches: 1,
                        drag_block_vertical: !1,
                        swipe_direction: "horizontal"
                    }
                }
            });
            $("#revolutionSlider .tp-caption").on("mousedown", function (t) {
                return t.preventDefault(), e.revpause(), !1
            })
        }
    }(),
    function () {
        "use strict";
        if ($(".fullwidth_home_two_banner").get(0)) {
            var e = $(".fullwidth_home_two_banner").revolution({
                delay: 9e3,
                startheight: 570,
                startwidth: 1350,
                hideThumbs: 10,
                thumbWidth: 100,
                thumbHeight: 50,
                thumbAmount: 5,
                navigationType: "on",
                navigationArrows: "nexttobullets",
                touchenabled: "on",
                onHoverStop: "on",
                navOffsetHorizontal: 0,
                navOffsetVertical: 20,
                stopAtSlide: -1,
                stopAfterLoops: -1,
                shadow: 0,
                fullWidth: "on"
            });
            $("#revolutionSlider .tp-caption").on("mousedown", function (t) {
                return t.preventDefault(), e.revpause(), !1
            })
        }
    }(),
    function (f) {
        function s(t) {
            try {
                var e = t.split("-"),
                    i = parseInt(e[0]),
                    n = parseInt(e[1]),
                    o = 2 < e.length ? parseInt(e[2]) : 1;
                return 0 < i && 0 <= n ? new Date(i, n - 1, o) : null
            } catch (t) {}
        }

        function g(t) {
            return t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate()
        }
        f.fn.calendar = function (t) {
            var p = this,
                e = f.extend({}, f.fn.calendar.defaults, t),
                i = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(function (t) {
                    return "<th>" + t + "</th>"
                }).join("");
            p.init = function () {
                var t = f('<table class="cal"><caption>\t<span class="prev"><a href="javascript:void(0);">&larr;</a></span>\t<span class="next"><a href="javascript:void(0);">&rarr;</a></span>\t<span class="month"><span></caption><thead><tr>' + i + "</tr></thead><tbody></tbody></table>");
                p.append(t)
            }, p.update = function (t) {
                var e = new Date(t);
                e.setDate(1);
                var i = e.getDay();
                e.setDate(e.getDate() - i);
                var n = p.find("tbody");
                n.empty();
                for (var o, s, r, a, l = Math.ceil((i + ((o = new Date(t)).setMonth(o.getMonth() + 1), o.setDate(0), o.getDate())) / 7), d = 0; d < l; d++) {
                    for (var c = f("<tr></tr>"), h = 0; h < 7; h++, e.setDate(e.getDate() + 1)) c.append((s = e, a = r = void 0, r = f('<td><a href="javascript:void(0);"></a></td>'), (a = r.find("a")).text(s.getDate()), a.data("date", g(s)), t.getMonth() != s.getMonth() ? r.addClass("off") : p.data("date") == a.data("date") && (r.addClass("active"), p.data("date", g(s))), r));
                    n.append(c)
                }
                var u = g(t).replace(/-\d+$/, "");
                p.find(".month").text(u)
            }, p.getCurrentDate = function () {
                return p.data("date")
            }, p.init();
            var n = e.date ? e.date : new Date;

            function o(t) {
                var e = s(p.find(".month").text());
                e.setMonth(e.getMonth() + t), p.update(e)
            }
            return !e.date && e.picker || p.data("date", g(n)), p.update(n), p.delegate("tbody td", "click", function () {
                var t = f(this);
                p.find(".active").removeClass("active"), t.addClass("active"), p.data("date", t.find("a").data("date")), t.hasClass("off") && p.update(s(p.data("date"))), e.picker && p.hide()
            }), p.find(".next").click(function () {
                o(1)
            }), p.find(".prev").click(function () {
                o(-1)
            }), this
        }, f.fn.calendar.defaults = {
            date: new Date,
            picker: !1
        }, f.fn.datePicker = function () {
            var t = this,
                e = f("<div></div>").addClass("picker-container").hide().calendar({
                    date: s(t.val()),
                    picker: !0
                });
            return t.after(e), f("body").click(function () {
                e.hide()
            }), t.click(function () {
                return e.show(), !1
            }), e.click(function () {
                return t.val(e.getCurrentDate()), !1
            }), this
        }, f(window).load(function () {
            f(".jquery-calendar").each(function () {
                f(this).calendar()
            }), f(".date-picker:text").each(function () {
                f(this).datePicker()
            })
        })
    }($), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function (t, e, i, n, o) {
            return jQuery.easing[jQuery.easing.def](t, e, i, n, o)
        },
        easeInQuad: function (t, e, i, n, o) {
            return n * (e /= o) * e + i
        },
        easeOutQuad: function (t, e, i, n, o) {
            return -n * (e /= o) * (e - 2) + i
        },
        easeInOutQuad: function (t, e, i, n, o) {
            return (e /= o / 2) < 1 ? n / 2 * e * e + i : -n / 2 * (--e * (e - 2) - 1) + i
        },
        easeInCubic: function (t, e, i, n, o) {
            return n * (e /= o) * e * e + i
        },
        easeOutCubic: function (t, e, i, n, o) {
            return n * ((e = e / o - 1) * e * e + 1) + i
        },
        easeInOutCubic: function (t, e, i, n, o) {
            return (e /= o / 2) < 1 ? n / 2 * e * e * e + i : n / 2 * ((e -= 2) * e * e + 2) + i
        },
        easeInQuart: function (t, e, i, n, o) {
            return n * (e /= o) * e * e * e + i
        },
        easeOutQuart: function (t, e, i, n, o) {
            return -n * ((e = e / o - 1) * e * e * e - 1) + i
        },
        easeInOutQuart: function (t, e, i, n, o) {
            return (e /= o / 2) < 1 ? n / 2 * e * e * e * e + i : -n / 2 * ((e -= 2) * e * e * e - 2) + i
        },
        easeInQuint: function (t, e, i, n, o) {
            return n * (e /= o) * e * e * e * e + i
        },
        easeOutQuint: function (t, e, i, n, o) {
            return n * ((e = e / o - 1) * e * e * e * e + 1) + i
        },
        easeInOutQuint: function (t, e, i, n, o) {
            return (e /= o / 2) < 1 ? n / 2 * e * e * e * e * e + i : n / 2 * ((e -= 2) * e * e * e * e + 2) + i
        },
        easeInSine: function (t, e, i, n, o) {
            return -n * Math.cos(e / o * (Math.PI / 2)) + n + i
        },
        easeOutSine: function (t, e, i, n, o) {
            return n * Math.sin(e / o * (Math.PI / 2)) + i
        },
        easeInOutSine: function (t, e, i, n, o) {
            return -n / 2 * (Math.cos(Math.PI * e / o) - 1) + i
        },
        easeInExpo: function (t, e, i, n, o) {
            return 0 == e ? i : n * Math.pow(2, 10 * (e / o - 1)) + i
        },
        easeOutExpo: function (t, e, i, n, o) {
            return e == o ? i + n : n * (1 - Math.pow(2, -10 * e / o)) + i
        },
        easeInOutExpo: function (t, e, i, n, o) {
            return 0 == e ? i : e == o ? i + n : (e /= o / 2) < 1 ? n / 2 * Math.pow(2, 10 * (e - 1)) + i : n / 2 * (2 - Math.pow(2, -10 * --e)) + i
        },
        easeInCirc: function (t, e, i, n, o) {
            return -n * (Math.sqrt(1 - (e /= o) * e) - 1) + i
        },
        easeOutCirc: function (t, e, i, n, o) {
            return n * Math.sqrt(1 - (e = e / o - 1) * e) + i
        },
        easeInOutCirc: function (t, e, i, n, o) {
            return (e /= o / 2) < 1 ? -n / 2 * (Math.sqrt(1 - e * e) - 1) + i : n / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + i
        },
        easeInElastic: function (t, e, i, n, o) {
            var s = 1.70158,
                r = 0,
                a = n;
            if (0 == e) return i;
            if (1 == (e /= o)) return i + n;
            if (r || (r = .3 * o), a < Math.abs(n)) {
                a = n;
                s = r / 4
            } else s = r / (2 * Math.PI) * Math.asin(n / a);
            return -a * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * o - s) * Math.PI / r) + i
        },
        easeOutElastic: function (t, e, i, n, o) {
            var s = 1.70158,
                r = 0,
                a = n;
            if (0 == e) return i;
            if (1 == (e /= o)) return i + n;
            if (r || (r = .3 * o), a < Math.abs(n)) {
                a = n;
                s = r / 4
            } else s = r / (2 * Math.PI) * Math.asin(n / a);
            return a * Math.pow(2, -10 * e) * Math.sin(2 * (e * o - s) * Math.PI / r) + n + i
        },
        easeInOutElastic: function (t, e, i, n, o) {
            var s = 1.70158,
                r = 0,
                a = n;
            if (0 == e) return i;
            if (2 == (e /= o / 2)) return i + n;
            if (r || (r = .3 * o * 1.5), a < Math.abs(n)) {
                a = n;
                s = r / 4
            } else s = r / (2 * Math.PI) * Math.asin(n / a);
            return e < 1 ? -.5 * a * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * o - s) * Math.PI / r) + i : a * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * (e * o - s) * Math.PI / r) * .5 + n + i
        },
        easeInBack: function (t, e, i, n, o, s) {
            return null == s && (s = 1.70158), n * (e /= o) * e * ((s + 1) * e - s) + i
        },
        easeOutBack: function (t, e, i, n, o, s) {
            return null == s && (s = 1.70158), n * ((e = e / o - 1) * e * ((s + 1) * e + s) + 1) + i
        },
        easeInOutBack: function (t, e, i, n, o, s) {
            return null == s && (s = 1.70158), (e /= o / 2) < 1 ? n / 2 * e * e * ((1 + (s *= 1.525)) * e - s) + i : n / 2 * ((e -= 2) * e * ((1 + (s *= 1.525)) * e + s) + 2) + i
        },
        easeInBounce: function (t, e, i, n, o) {
            return n - jQuery.easing.easeOutBounce(t, o - e, 0, n, o) + i
        },
        easeOutBounce: function (t, e, i, n, o) {
            return (e /= o) < 1 / 2.75 ? 7.5625 * n * e * e + i : e < 2 / 2.75 ? n * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + i : e < 2.5 / 2.75 ? n * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + i : n * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + i
        },
        easeInOutBounce: function (t, e, i, n, o) {
            return e < o / 2 ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, n, o) + i : .5 * jQuery.easing.easeOutBounce(t, 2 * e - o, 0, n, o) + .5 * n + i
        }
    }),
    function (x) {
        var i = !0;
        x.flexslider = function (p, t) {
            var f = x(p);
            f.vars = x.extend({}, x.flexslider.defaults, t);
            var e, c = f.vars.namespace,
                g = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
                h = ("ontouchstart" in window || g || window.DocumentTouch && document instanceof DocumentTouch) && f.vars.touch,
                a = "click touchend MSPointerUp keyup",
                l = "",
                m = "vertical" === f.vars.direction,
                v = f.vars.reverse,
                y = 0 < f.vars.itemWidth,
                w = "fade" === f.vars.animation,
                u = "" !== f.vars.asNavFor,
                b = {};
            x.data(p, "flexslider", f), b = {
                init: function () {
                    f.animating = !1, f.currentSlide = parseInt(f.vars.startAt ? f.vars.startAt : 0, 10), isNaN(f.currentSlide) && (f.currentSlide = 0), f.animatingTo = f.currentSlide, f.atEnd = 0 === f.currentSlide || f.currentSlide === f.last, f.containerSelector = f.vars.selector.substr(0, f.vars.selector.search(" ")), f.slides = x(f.vars.selector, f), f.container = x(f.containerSelector, f), f.count = f.slides.length, f.syncExists = 0 < x(f.vars.sync).length, "slide" === f.vars.animation && (f.vars.animation = "swing"), f.prop = m ? "top" : "marginLeft", f.args = {}, f.manualPause = !1, f.stopped = !1, f.started = !1, f.startTimeout = null, f.transitions = !f.vars.video && !w && f.vars.useCSS && function () {
                        var t = document.createElement("div"),
                            e = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                        for (var i in e)
                            if (void 0 !== t.style[e[i]]) return f.pfx = e[i].replace("Perspective", "").toLowerCase(), f.prop = "-" + f.pfx + "-transform", !0;
                        return !1
                    }(), (f.ensureAnimationEnd = "") !== f.vars.controlsContainer && (f.controlsContainer = 0 < x(f.vars.controlsContainer).length && x(f.vars.controlsContainer)), "" !== f.vars.manualControls && (f.manualControls = 0 < x(f.vars.manualControls).length && x(f.vars.manualControls)), "" !== f.vars.customDirectionNav && (f.customDirectionNav = 2 === x(f.vars.customDirectionNav).length && x(f.vars.customDirectionNav)), f.vars.randomize && (f.slides.sort(function () {
                        return Math.round(Math.random()) - .5
                    }), f.container.empty().append(f.slides)), f.doMath(), f.setup("init"), f.vars.controlNav && b.controlNav.setup(), f.vars.directionNav && b.directionNav.setup(), f.vars.keyboard && (1 === x(f.containerSelector).length || f.vars.multipleKeyboard) && x(document).bind("keyup", function (t) {
                        var e = t.keyCode;
                        if (!f.animating && (39 === e || 37 === e)) {
                            var i = 39 === e ? f.getTarget("next") : 37 === e && f.getTarget("prev");
                            f.flexAnimate(i, f.vars.pauseOnAction)
                        }
                    }), f.vars.mousewheel && f.bind("mousewheel", function (t, e, i, n) {
                        t.preventDefault();
                        var o = e < 0 ? f.getTarget("next") : f.getTarget("prev");
                        f.flexAnimate(o, f.vars.pauseOnAction)
                    }), f.vars.pausePlay && b.pausePlay.setup(), f.vars.slideshow && f.vars.pauseInvisible && b.pauseInvisible.init(), f.vars.slideshow && (f.vars.pauseOnHover && f.hover(function () {
                        f.manualPlay || f.manualPause || f.pause()
                    }, function () {
                        f.manualPause || f.manualPlay || f.stopped || f.play()
                    }), f.vars.pauseInvisible && b.pauseInvisible.isHidden() || (0 < f.vars.initDelay ? f.startTimeout = setTimeout(f.play, f.vars.initDelay) : f.play())), u && b.asNav.setup(), h && f.vars.touch && b.touch(), (!w || w && f.vars.smoothHeight) && x(window).bind("resize orientationchange focus", b.resize), f.find("img").attr("draggable", "false"), setTimeout(function () {
                        f.vars.start(f)
                    }, 200)
                },
                asNav: {
                    setup: function () {
                        f.asNav = !0, f.animatingTo = Math.floor(f.currentSlide / f.move), f.currentItem = f.currentSlide, f.slides.removeClass(c + "active-slide").eq(f.currentItem).addClass(c + "active-slide"), g ? (p._slider = f).slides.each(function () {
                            this._gesture = new MSGesture, (this._gesture.target = this).addEventListener("MSPointerDown", function (t) {
                                t.preventDefault(), t.currentTarget._gesture && t.currentTarget._gesture.addPointer(t.pointerId)
                            }, !1), this.addEventListener("MSGestureTap", function (t) {
                                t.preventDefault();
                                var e = x(this),
                                    i = e.index();
                                x(f.vars.asNavFor).data("flexslider").animating || e.hasClass("active") || (f.direction = f.currentItem < i ? "next" : "prev", f.flexAnimate(i, f.vars.pauseOnAction, !1, !0, !0))
                            })
                        }) : f.slides.on(a, function (t) {
                            t.preventDefault();
                            var e = x(this),
                                i = e.index();
                            e.offset().left - x(f).scrollLeft() <= 0 && e.hasClass(c + "active-slide") ? f.flexAnimate(f.getTarget("prev"), !0) : x(f.vars.asNavFor).data("flexslider").animating || e.hasClass(c + "active-slide") || (f.direction = f.currentItem < i ? "next" : "prev", f.flexAnimate(i, f.vars.pauseOnAction, !1, !0, !0))
                        })
                    }
                },
                controlNav: {
                    setup: function () {
                        f.manualControls ? b.controlNav.setupManual() : b.controlNav.setupPaging()
                    },
                    setupPaging: function () {
                        var t, e, i = "thumbnails" === f.vars.controlNav ? "control-thumbs" : "control-paging",
                            n = 1;
                        if (f.controlNavScaffold = x('<ol class="' + c + "control-nav " + c + i + '"></ol>'), 1 < f.pagingCount)
                            for (var o = 0; o < f.pagingCount; o++) {
                                void 0 === (e = f.slides.eq(o)).attr("data-thumb-alt") && e.attr("data-thumb-alt", "");
                                var s = "" !== e.attr("data-thumb-alt") ? s = ' alt="' + e.attr("data-thumb-alt") + '"' : "";
                                if (t = "thumbnails" === f.vars.controlNav ? '<img src="' + e.attr("data-thumb") + '"' + s + "/>" : '<a href="#">' + n + "</a>", "thumbnails" === f.vars.controlNav && !0 === f.vars.thumbCaptions) {
                                    var r = e.attr("data-thumbcaption");
                                    "" !== r && void 0 !== r && (t += '<span class="' + c + 'caption">' + r + "</span>")
                                }
                                f.controlNavScaffold.append("<li>" + t + "</li>"), n++
                            }
                        f.controlsContainer ? x(f.controlsContainer).append(f.controlNavScaffold) : f.append(f.controlNavScaffold), b.controlNav.set(), b.controlNav.active(), f.controlNavScaffold.delegate("a, img", a, function (t) {
                            if (t.preventDefault(), "" === l || l === t.type) {
                                var e = x(this),
                                    i = f.controlNav.index(e);
                                e.hasClass(c + "active") || (f.direction = i > f.currentSlide ? "next" : "prev", f.flexAnimate(i, f.vars.pauseOnAction))
                            }
                            "" === l && (l = t.type), b.setToClearWatchedEvent()
                        })
                    },
                    setupManual: function () {
                        f.controlNav = f.manualControls, b.controlNav.active(), f.controlNav.bind(a, function (t) {
                            if (t.preventDefault(), "" === l || l === t.type) {
                                var e = x(this),
                                    i = f.controlNav.index(e);
                                e.hasClass(c + "active") || (i > f.currentSlide ? f.direction = "next" : f.direction = "prev", f.flexAnimate(i, f.vars.pauseOnAction))
                            }
                            "" === l && (l = t.type), b.setToClearWatchedEvent()
                        })
                    },
                    set: function () {
                        var t = "thumbnails" === f.vars.controlNav ? "img" : "a";
                        f.controlNav = x("." + c + "control-nav li " + t, f.controlsContainer ? f.controlsContainer : f)
                    },
                    active: function () {
                        f.controlNav.removeClass(c + "active").eq(f.animatingTo).addClass(c + "active")
                    },
                    update: function (t, e) {
                        1 < f.pagingCount && "add" === t ? f.controlNavScaffold.append(x('<li><a href="#">' + f.count + "</a></li>")) : 1 === f.pagingCount ? f.controlNavScaffold.find("li").remove() : f.controlNav.eq(e).closest("li").remove(), b.controlNav.set(), 1 < f.pagingCount && f.pagingCount !== f.controlNav.length ? f.update(e, t) : b.controlNav.active()
                    }
                },
                directionNav: {
                    setup: function () {
                        var t = x('<ul class="' + c + 'direction-nav"><li class="' + c + 'nav-prev"><a class="' + c + 'prev" href="#">' + f.vars.prevText + '</a></li><li class="' + c + 'nav-next"><a class="' + c + 'next" href="#">' + f.vars.nextText + "</a></li></ul>");
                        f.customDirectionNav ? f.directionNav = f.customDirectionNav : f.controlsContainer ? (x(f.controlsContainer).append(t), f.directionNav = x("." + c + "direction-nav li a", f.controlsContainer)) : (f.append(t), f.directionNav = x("." + c + "direction-nav li a", f)), b.directionNav.update(), f.directionNav.bind(a, function (t) {
                            var e;
                            t.preventDefault(), "" !== l && l !== t.type || (e = x(this).hasClass(c + "next") ? f.getTarget("next") : f.getTarget("prev"), f.flexAnimate(e, f.vars.pauseOnAction)), "" === l && (l = t.type), b.setToClearWatchedEvent()
                        })
                    },
                    update: function () {
                        var t = c + "disabled";
                        1 === f.pagingCount ? f.directionNav.addClass(t).attr("tabindex", "-1") : f.vars.animationLoop ? f.directionNav.removeClass(t).removeAttr("tabindex") : 0 === f.animatingTo ? f.directionNav.removeClass(t).filter("." + c + "prev").addClass(t).attr("tabindex", "-1") : f.animatingTo === f.last ? f.directionNav.removeClass(t).filter("." + c + "next").addClass(t).attr("tabindex", "-1") : f.directionNav.removeClass(t).removeAttr("tabindex")
                    }
                },
                pausePlay: {
                    setup: function () {
                        var t = x('<div class="' + c + 'pauseplay"><a href="#"></a></div>');
                        f.controlsContainer ? (f.controlsContainer.append(t), f.pausePlay = x("." + c + "pauseplay a", f.controlsContainer)) : (f.append(t), f.pausePlay = x("." + c + "pauseplay a", f)), b.pausePlay.update(f.vars.slideshow ? c + "pause" : c + "play"), f.pausePlay.bind(a, function (t) {
                            t.preventDefault(), "" !== l && l !== t.type || (x(this).hasClass(c + "pause") ? (f.manualPause = !0, f.manualPlay = !1, f.pause()) : (f.manualPause = !1, f.manualPlay = !0, f.play())), "" === l && (l = t.type), b.setToClearWatchedEvent()
                        })
                    },
                    update: function (t) {
                        "play" === t ? f.pausePlay.removeClass(c + "pause").addClass(c + "play").html(f.vars.playText) : f.pausePlay.removeClass(c + "play").addClass(c + "pause").html(f.vars.pauseText)
                    }
                },
                touch: function () {
                    var o, s, r, a, l, d, t, n, c, h = !1,
                        e = 0,
                        i = 0,
                        u = 0;
                    g ? (p.style.msTouchAction = "none", p._gesture = new MSGesture, (p._gesture.target = p).addEventListener("MSPointerDown", function (t) {
                        t.stopPropagation(), f.animating ? t.preventDefault() : (f.pause(), p._gesture.addPointer(t.pointerId), u = 0, a = m ? f.h : f.w, d = Number(new Date), r = y && v && f.animatingTo === f.last ? 0 : y && v ? f.limit - (f.itemW + f.vars.itemMargin) * f.move * f.animatingTo : y && f.currentSlide === f.last ? f.limit : y ? (f.itemW + f.vars.itemMargin) * f.move * f.currentSlide : v ? (f.last - f.currentSlide + f.cloneOffset) * a : (f.currentSlide + f.cloneOffset) * a)
                    }, !1), p._slider = f, p.addEventListener("MSGestureChange", function (t) {
                        t.stopPropagation();
                        var e = t.target._slider;
                        if (e) {
                            var i = -t.translationX,
                                n = -t.translationY;
                            return l = u += m ? n : i, h = m ? Math.abs(u) < Math.abs(-i) : Math.abs(u) < Math.abs(-n), t.detail === t.MSGESTURE_FLAG_INERTIA ? void setImmediate(function () {
                                p._gesture.stop()
                            }) : void((!h || 500 < Number(new Date) - d) && (t.preventDefault(), !w && e.transitions && (e.vars.animationLoop || (l = u / (0 === e.currentSlide && u < 0 || e.currentSlide === e.last && 0 < u ? Math.abs(u) / a + 2 : 1)), e.setProps(r + l, "setTouch"))))
                        }
                    }, !1), p.addEventListener("MSGestureEnd", function (t) {
                        t.stopPropagation();
                        var e = t.target._slider;
                        if (e) {
                            if (e.animatingTo === e.currentSlide && !h && null !== l) {
                                var i = v ? -l : l,
                                    n = 0 < i ? e.getTarget("next") : e.getTarget("prev");
                                e.canAdvance(n) && (Number(new Date) - d < 550 && 50 < Math.abs(i) || Math.abs(i) > a / 2) ? e.flexAnimate(n, e.vars.pauseOnAction) : w || e.flexAnimate(e.currentSlide, e.vars.pauseOnAction, !0)
                            }
                            r = l = s = o = null, u = 0
                        }
                    }, !1)) : (t = function (t) {
                        f.animating ? t.preventDefault() : (window.navigator.msPointerEnabled || 1 === t.touches.length) && (f.pause(), a = m ? f.h : f.w, d = Number(new Date), e = t.touches[0].pageX, i = t.touches[0].pageY, r = y && v && f.animatingTo === f.last ? 0 : y && v ? f.limit - (f.itemW + f.vars.itemMargin) * f.move * f.animatingTo : y && f.currentSlide === f.last ? f.limit : y ? (f.itemW + f.vars.itemMargin) * f.move * f.currentSlide : v ? (f.last - f.currentSlide + f.cloneOffset) * a : (f.currentSlide + f.cloneOffset) * a, o = m ? i : e, s = m ? e : i, p.addEventListener("touchmove", n, !1), p.addEventListener("touchend", c, !1))
                    }, n = function (t) {
                        e = t.touches[0].pageX, i = t.touches[0].pageY, l = m ? o - i : o - e;
                        (!(h = m ? Math.abs(l) < Math.abs(e - s) : Math.abs(l) < Math.abs(i - s)) || 500 < Number(new Date) - d) && (t.preventDefault(), !w && f.transitions && (f.vars.animationLoop || (l /= 0 === f.currentSlide && l < 0 || f.currentSlide === f.last && 0 < l ? Math.abs(l) / a + 2 : 1), f.setProps(r + l, "setTouch")))
                    }, c = function (t) {
                        if (p.removeEventListener("touchmove", n, !1), f.animatingTo === f.currentSlide && !h && null !== l) {
                            var e = v ? -l : l,
                                i = 0 < e ? f.getTarget("next") : f.getTarget("prev");
                            f.canAdvance(i) && (Number(new Date) - d < 550 && 50 < Math.abs(e) || Math.abs(e) > a / 2) ? f.flexAnimate(i, f.vars.pauseOnAction) : w || f.flexAnimate(f.currentSlide, f.vars.pauseOnAction, !0)
                        }
                        p.removeEventListener("touchend", c, !1), r = l = s = o = null
                    }, p.addEventListener("touchstart", t, !1))
                },
                resize: function () {
                    !f.animating && f.is(":visible") && (y || f.doMath(), w ? b.smoothHeight() : y ? (f.slides.width(f.computedW), f.update(f.pagingCount), f.setProps()) : m ? (f.viewport.height(f.h), f.setProps(f.h, "setTotal")) : (f.vars.smoothHeight && b.smoothHeight(), f.newSlides.width(f.computedW), f.setProps(f.computedW, "setTotal")))
                },
                smoothHeight: function (t) {
                    if (!m || w) {
                        var e = w ? f : f.viewport;
                        t ? e.animate({
                            height: f.slides.eq(f.animatingTo).innerHeight()
                        }, t) : e.innerHeight(f.slides.eq(f.animatingTo).innerHeight())
                    }
                },
                sync: function (t) {
                    var e = x(f.vars.sync).data("flexslider"),
                        i = f.animatingTo;
                    switch (t) {
                        case "animate":
                            e.flexAnimate(i, f.vars.pauseOnAction, !1, !0);
                            break;
                        case "play":
                            e.playing || e.asNav || e.play();
                            break;
                        case "pause":
                            e.pause()
                    }
                },
                uniqueID: function (t) {
                    return t.filter("[id]").add(t.find("[id]")).each(function () {
                        var t = x(this);
                        t.attr("id", t.attr("id") + "_clone")
                    }), t
                },
                pauseInvisible: {
                    visProp: null,
                    init: function () {
                        var t = b.pauseInvisible.getHiddenProp();
                        if (t) {
                            var e = t.replace(/[H|h]idden/, "") + "visibilitychange";
                            document.addEventListener(e, function () {
                                b.pauseInvisible.isHidden() ? f.startTimeout ? clearTimeout(f.startTimeout) : f.pause() : f.started ? f.play() : 0 < f.vars.initDelay ? setTimeout(f.play, f.vars.initDelay) : f.play()
                            })
                        }
                    },
                    isHidden: function () {
                        var t = b.pauseInvisible.getHiddenProp();
                        return !!t && document[t]
                    },
                    getHiddenProp: function () {
                        var t = ["webkit", "moz", "ms", "o"];
                        if ("hidden" in document) return "hidden";
                        for (var e = 0; e < t.length; e++)
                            if (t[e] + "Hidden" in document) return t[e] + "Hidden";
                        return null
                    }
                },
                setToClearWatchedEvent: function () {
                    clearTimeout(e), e = setTimeout(function () {
                        l = ""
                    }, 3e3)
                }
            }, f.flexAnimate = function (t, e, i, n, o) {
                if (f.vars.animationLoop || t === f.currentSlide || (f.direction = t > f.currentSlide ? "next" : "prev"), u && 1 === f.pagingCount && (f.direction = f.currentItem < t ? "next" : "prev"), !f.animating && (f.canAdvance(t, o) || i) && f.is(":visible")) {
                    if (u && n) {
                        var s = x(f.vars.asNavFor).data("flexslider");
                        if (f.atEnd = 0 === t || t === f.count - 1, s.flexAnimate(t, !0, !1, !0, o), f.direction = f.currentItem < t ? "next" : "prev", s.direction = f.direction, Math.ceil((t + 1) / f.visible) - 1 === f.currentSlide || 0 === t) return f.currentItem = t, f.slides.removeClass(c + "active-slide").eq(t).addClass(c + "active-slide"), !1;
                        f.currentItem = t, f.slides.removeClass(c + "active-slide").eq(t).addClass(c + "active-slide"), t = Math.floor(t / f.visible)
                    }
                    if (f.animating = !0, f.animatingTo = t, e && f.pause(), f.vars.before(f), f.syncExists && !o && b.sync("animate"), f.vars.controlNav && b.controlNav.active(), y || f.slides.removeClass(c + "active-slide").eq(t).addClass(c + "active-slide"), f.atEnd = 0 === t || t === f.last, f.vars.directionNav && b.directionNav.update(), t === f.last && (f.vars.end(f), f.vars.animationLoop || f.pause()), w) h ? (f.slides.eq(f.currentSlide).css({
                        opacity: 0,
                        zIndex: 1
                    }), f.slides.eq(t).css({
                        opacity: 1,
                        zIndex: 2
                    }), f.wrapup(d)) : (f.slides.eq(f.currentSlide).css({
                        zIndex: 1
                    }).animate({
                        opacity: 0
                    }, f.vars.animationSpeed, f.vars.easing), f.slides.eq(t).css({
                        zIndex: 2
                    }).animate({
                        opacity: 1
                    }, f.vars.animationSpeed, f.vars.easing, f.wrapup));
                    else {
                        var r, a, l, d = m ? f.slides.filter(":first").height() : f.computedW;
                        y ? (r = f.vars.itemMargin, a = (l = (f.itemW + r) * f.move * f.animatingTo) > f.limit && 1 !== f.visible ? f.limit : l) : a = 0 === f.currentSlide && t === f.count - 1 && f.vars.animationLoop && "next" !== f.direction ? v ? (f.count + f.cloneOffset) * d : 0 : f.currentSlide === f.last && 0 === t && f.vars.animationLoop && "prev" !== f.direction ? v ? 0 : (f.count + 1) * d : v ? (f.count - 1 - t + f.cloneOffset) * d : (t + f.cloneOffset) * d, f.setProps(a, "", f.vars.animationSpeed), f.transitions ? (f.vars.animationLoop && f.atEnd || (f.animating = !1, f.currentSlide = f.animatingTo), f.container.unbind("webkitTransitionEnd transitionend"), f.container.bind("webkitTransitionEnd transitionend", function () {
                            clearTimeout(f.ensureAnimationEnd), f.wrapup(d)
                        }), clearTimeout(f.ensureAnimationEnd), f.ensureAnimationEnd = setTimeout(function () {
                            f.wrapup(d)
                        }, f.vars.animationSpeed + 100)) : f.container.animate(f.args, f.vars.animationSpeed, f.vars.easing, function () {
                            f.wrapup(d)
                        })
                    }
                    f.vars.smoothHeight && b.smoothHeight(f.vars.animationSpeed)
                }
            }, f.wrapup = function (t) {
                w || y || (0 === f.currentSlide && f.animatingTo === f.last && f.vars.animationLoop ? f.setProps(t, "jumpEnd") : f.currentSlide === f.last && 0 === f.animatingTo && f.vars.animationLoop && f.setProps(t, "jumpStart")), f.animating = !1, f.currentSlide = f.animatingTo, f.vars.after(f)
            }, f.animateSlides = function () {
                !f.animating && i && f.flexAnimate(f.getTarget("next"))
            }, f.pause = function () {
                clearInterval(f.animatedSlides), f.animatedSlides = null, f.playing = !1, f.vars.pausePlay && b.pausePlay.update("play"), f.syncExists && b.sync("pause")
            }, f.play = function () {
                f.playing && clearInterval(f.animatedSlides), f.animatedSlides = f.animatedSlides || setInterval(f.animateSlides, f.vars.slideshowSpeed), f.started = f.playing = !0, f.vars.pausePlay && b.pausePlay.update("pause"), f.syncExists && b.sync("play")
            }, f.stop = function () {
                f.pause(), f.stopped = !0
            }, f.canAdvance = function (t, e) {
                var i = u ? f.pagingCount - 1 : f.last;
                return !!e || (!(!u || f.currentItem !== f.count - 1 || 0 !== t || "prev" !== f.direction) || (!u || 0 !== f.currentItem || t !== f.pagingCount - 1 || "next" === f.direction) && (!(t === f.currentSlide && !u) && (!!f.vars.animationLoop || (!f.atEnd || 0 !== f.currentSlide || t !== i || "next" === f.direction) && (!f.atEnd || f.currentSlide !== i || 0 !== t || "next" !== f.direction))))
            }, f.getTarget = function (t) {
                return "next" === (f.direction = t) ? f.currentSlide === f.last ? 0 : f.currentSlide + 1 : 0 === f.currentSlide ? f.last : f.currentSlide - 1
            }, f.setProps = function (t, e, i) {
                var n, o = (n = t || (f.itemW + f.vars.itemMargin) * f.move * f.animatingTo, -1 * function () {
                    if (y) return "setTouch" === e ? t : v && f.animatingTo === f.last ? 0 : v ? f.limit - (f.itemW + f.vars.itemMargin) * f.move * f.animatingTo : f.animatingTo === f.last ? f.limit : n;
                    switch (e) {
                        case "setTotal":
                            return v ? (f.count - 1 - f.currentSlide + f.cloneOffset) * t : (f.currentSlide + f.cloneOffset) * t;
                        case "setTouch":
                            return t;
                        case "jumpEnd":
                            return v ? t : f.count * t;
                        case "jumpStart":
                            return v ? f.count * t : t;
                        default:
                            return t
                    }
                }() + "px");
                f.transitions && (o = m ? "translate3d(0," + o + ",0)" : "translate3d(" + o + ",0,0)", i = void 0 !== i ? i / 1e3 + "s" : "0s", f.container.css("-" + f.pfx + "-transition-duration", i), f.container.css("transition-duration", i)), f.args[f.prop] = o, (f.transitions || void 0 === i) && f.container.css(f.args), f.container.css("transform", o)
            }, f.setup = function (t) {
                var e, i;
                w ? (f.slides.css({
                    width: "100%",
                    float: "left",
                    marginRight: "-100%",
                    position: "relative"
                }), "init" === t && (h ? f.slides.css({
                    opacity: 0,
                    display: "block",
                    webkitTransition: "opacity " + f.vars.animationSpeed / 1e3 + "s ease",
                    zIndex: 1
                }).eq(f.currentSlide).css({
                    opacity: 1,
                    zIndex: 2
                }) : 0 == f.vars.fadeFirstSlide ? f.slides.css({
                    opacity: 0,
                    display: "block",
                    zIndex: 1
                }).eq(f.currentSlide).css({
                    zIndex: 2
                }).css({
                    opacity: 1
                }) : f.slides.css({
                    opacity: 0,
                    display: "block",
                    zIndex: 1
                }).eq(f.currentSlide).css({
                    zIndex: 2
                }).animate({
                    opacity: 1
                }, f.vars.animationSpeed, f.vars.easing)), f.vars.smoothHeight && b.smoothHeight()) : ("init" === t && (f.viewport = x('<div class="' + c + 'viewport"></div>').css({
                    overflow: "hidden",
                    position: "relative"
                }).appendTo(f).append(f.container), f.cloneCount = 0, f.cloneOffset = 0, v && (i = x.makeArray(f.slides).reverse(), f.slides = x(i), f.container.empty().append(f.slides))), f.vars.animationLoop && !y && (f.cloneCount = 2, f.cloneOffset = 1, "init" !== t && f.container.find(".clone").remove(), f.container.append(b.uniqueID(f.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(b.uniqueID(f.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))), f.newSlides = x(f.vars.selector, f), e = v ? f.count - 1 - f.currentSlide + f.cloneOffset : f.currentSlide + f.cloneOffset, m && !y ? (f.container.height(200 * (f.count + f.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function () {
                    f.newSlides.css({
                        display: "block"
                    }), f.doMath(), f.viewport.height(f.h), f.setProps(e * f.h, "init")
                }, "init" === t ? 100 : 0)) : (f.container.width(200 * (f.count + f.cloneCount) + "%"), f.setProps(e * f.computedW, "init"), setTimeout(function () {
                    f.doMath(), f.newSlides.css({
                        width: f.computedW,
                        marginRight: f.computedM,
                        float: "left",
                        display: "block"
                    }), f.vars.smoothHeight && b.smoothHeight()
                }, "init" === t ? 100 : 0)));
                y || f.slides.removeClass(c + "active-slide").eq(f.currentSlide).addClass(c + "active-slide"), f.vars.init(f)
            }, f.doMath = function () {
                var t = f.slides.first(),
                    e = f.vars.itemMargin,
                    i = f.vars.minItems,
                    n = f.vars.maxItems;
                f.w = void 0 === f.viewport ? f.width() : f.viewport.width(), f.h = t.height(), f.boxPadding = t.outerWidth() - t.width(), y ? (f.itemT = f.vars.itemWidth + e, f.itemM = e, f.minW = i ? i * f.itemT : f.w, f.maxW = n ? n * f.itemT - e : f.w, f.itemW = f.minW > f.w ? (f.w - e * (i - 1)) / i : f.maxW < f.w ? (f.w - e * (n - 1)) / n : f.vars.itemWidth > f.w ? f.w : f.vars.itemWidth, f.visible = Math.floor(f.w / f.itemW), f.move = 0 < f.vars.move && f.vars.move < f.visible ? f.vars.move : f.visible, f.pagingCount = Math.ceil((f.count - f.visible) / f.move + 1), f.last = f.pagingCount - 1, f.limit = 1 === f.pagingCount ? 0 : f.vars.itemWidth > f.w ? f.itemW * (f.count - 1) + e * (f.count - 1) : (f.itemW + e) * f.count - f.w - e) : (f.itemW = f.w, f.itemM = e, f.pagingCount = f.count, f.last = f.count - 1), f.computedW = f.itemW - f.boxPadding, f.computedM = f.itemM
            }, f.update = function (t, e) {
                f.doMath(), y || (t < f.currentSlide ? f.currentSlide += 1 : t <= f.currentSlide && 0 !== t && (f.currentSlide -= 1), f.animatingTo = f.currentSlide), f.vars.controlNav && !f.manualControls && ("add" === e && !y || f.pagingCount > f.controlNav.length ? b.controlNav.update("add") : ("remove" === e && !y || f.pagingCount < f.controlNav.length) && (y && f.currentSlide > f.last && (f.currentSlide -= 1, f.animatingTo -= 1), b.controlNav.update("remove", f.last))), f.vars.directionNav && b.directionNav.update()
            }, f.addSlide = function (t, e) {
                var i = x(t);
                f.count += 1, f.last = f.count - 1, m && v ? void 0 !== e ? f.slides.eq(f.count - e).after(i) : f.container.prepend(i) : void 0 !== e ? f.slides.eq(e).before(i) : f.container.append(i), f.update(e, "add"), f.slides = x(f.vars.selector + ":not(.clone)", f), f.setup(), f.vars.added(f)
            }, f.removeSlide = function (t) {
                var e = isNaN(t) ? f.slides.index(x(t)) : t;
                f.count -= 1, f.last = f.count - 1, isNaN(t) ? x(t, f.slides).remove() : m && v ? f.slides.eq(f.last).remove() : f.slides.eq(t).remove(), f.doMath(), f.update(e, "remove"), f.slides = x(f.vars.selector + ":not(.clone)", f), f.setup(), f.vars.removed(f)
            }, b.init()
        }, x(window).blur(function (t) {
            i = !1
        }).focus(function (t) {
            i = !0
        }), x.flexslider.defaults = {
            namespace: "flex-",
            selector: ".slides > li",
            animation: "fade",
            easing: "swing",
            direction: "horizontal",
            reverse: !1,
            animationLoop: !0,
            smoothHeight: !1,
            startAt: 0,
            slideshow: !0,
            slideshowSpeed: 7e3,
            animationSpeed: 600,
            initDelay: 0,
            randomize: !1,
            fadeFirstSlide: !0,
            thumbCaptions: !1,
            pauseOnAction: !0,
            pauseOnHover: !1,
            pauseInvisible: !0,
            useCSS: !0,
            touch: !0,
            video: !1,
            controlNav: !0,
            directionNav: !0,
            prevText: "Previous",
            nextText: "Next",
            keyboard: !0,
            multipleKeyboard: !1,
            mousewheel: !1,
            pausePlay: !1,
            pauseText: "Pause",
            playText: "Play",
            controlsContainer: "",
            manualControls: "",
            customDirectionNav: "",
            sync: "",
            asNavFor: "",
            itemWidth: 0,
            itemMargin: 0,
            minItems: 1,
            maxItems: 0,
            move: 0,
            allowOneSlide: !0,
            start: function () {},
            before: function () {},
            after: function () {},
            end: function () {},
            added: function () {},
            removed: function () {},
            init: function () {}
        }, x.fn.flexslider = function (n) {
            if (void 0 === n && (n = {}), "object" == typeof n) return this.each(function () {
                var t = x(this),
                    e = n.selector ? n.selector : ".slides > li",
                    i = t.find(e);
                1 === i.length && !1 === n.allowOneSlide || 0 === i.length ? (i.fadeIn(400), n.start && n.start(t)) : void 0 === t.data("flexslider") && new x.flexslider(this, n)
            });
            var t = x(this).data("flexslider");
            switch (n) {
                case "play":
                    t.play();
                    break;
                case "pause":
                    t.pause();
                    break;
                case "stop":
                    t.stop();
                    break;
                case "next":
                    t.flexAnimate(t.getTarget("next"), !0);
                    break;
                case "prev":
                case "previous":
                    t.flexAnimate(t.getTarget("prev"), !0);
                    break;
                default:
                    "number" == typeof n && t.flexAnimate(n, !0)
            }
        }
    }(jQuery),
    function (d, c, h) {
        "use strict";
        d.fn.scrollUp = function (t) {
            d.data(h.body, "scrollUp") || (d.data(h.body, "scrollUp", !0), d.fn.scrollUp.init(t))
        }, d.fn.scrollUp.init = function (t) {
            var e, i, n, o, s, r, a = d.fn.scrollUp.settings = d.extend({}, d.fn.scrollUp.defaults, t),
                l = !1;
            switch (r = a.scrollTrigger ? d(a.scrollTrigger) : d("<a/>", {
                id: a.scrollName,
                href: "#top"
            }), a.scrollTitle && r.attr("title", a.scrollTitle), r.appendTo("body"), a.scrollImg || a.scrollTrigger || r.html(a.scrollText), r.css({
                display: "none",
                position: "fixed",
                zIndex: a.zIndex
            }), a.activeOverlay && d("<div/>", {
                id: a.scrollName + "-active"
            }).css({
                position: "absolute",
                top: a.scrollDistance + "px",
                width: "100%",
                borderTop: "1px dotted" + a.activeOverlay,
                zIndex: a.zIndex
            }).appendTo("body"), a.animation) {
                case "fade":
                    e = "fadeIn", i = "fadeOut", n = a.animationSpeed;
                    break;
                case "slide":
                    e = "slideDown", i = "slideUp", n = a.animationSpeed;
                    break;
                default:
                    e = "show", i = "hide", n = 0
            }
            o = "top" === a.scrollFrom ? a.scrollDistance : d(h).height() - d(c).height() - a.scrollDistance, d(c).scroll(function () {
                d(c).scrollTop() > o ? l || (r[e](n), l = !0) : l && (r[i](n), l = !1)
            }), a.scrollTarget ? "number" == typeof a.scrollTarget ? s = a.scrollTarget : "string" == typeof a.scrollTarget && (s = Math.floor(d(a.scrollTarget).offset().top)) : s = 0, r.click(function (t) {
                t.preventDefault(), d("html, body").animate({
                    scrollTop: s
                }, a.scrollSpeed, a.easingType)
            })
        }, d.fn.scrollUp.defaults = {
            scrollName: "scrollUp",
            scrollDistance: 300,
            scrollFrom: "top",
            scrollSpeed: 300,
            easingType: "linear",
            animation: "fade",
            animationSpeed: 200,
            scrollTrigger: !1,
            scrollTarget: !1,
            scrollText: "Scroll to top",
            scrollTitle: !1,
            scrollImg: !1,
            activeOverlay: !1,
            zIndex: 2147483647
        }, d.fn.scrollUp.destroy = function (t) {
            d.removeData(h.body, "scrollUp"), d("#" + d.fn.scrollUp.settings.scrollName).remove(), d("#" + d.fn.scrollUp.settings.scrollName + "-active").remove(), 7 <= d.fn.jquery.split(".")[1] ? d(c).off("scroll", t) : d(c).unbind("scroll", t)
        }, d.scrollUp = d.fn.scrollUp
    }(jQuery, window, document),
    function (t) {
        "use strict";
        t("ul.nav li.dropdown").hover(function () {
            t(this).find(".dropdown-menu").stop(!0, !0).delay(200).fadeIn(500)
        }, function () {
            t(this).find(".dropdown-menu").stop(!0, !0).delay(200).fadeOut(500)
        }), jQuery(document).ready(function (t) {
            t(".showcase_slider").owlCarousel({
                loop: !0,
                autoHeight: !0,
                autoplay: !0,
                nav: !1,
                margin: 0,
                responsive: {
                    0: {
                        items: 2
                    },
                    600: {
                        items: 4
                    },
                    1e3: {
                        items: 6
                    }
                }
            }), t(".carousel:not(.slow)").carousel({
                pause: !0,
                interval: 2e3
            }), t(".carousel.slow").carousel({
                pause: !0,
                interval: 25e3
            })
        })
    }(jQuery), $(window).load(function () {
        function n(t) {
            $("#carousel" + t).flexslider({
                animation: "slide",
                controlNav: !1,
                animationLoop: !1,
                slideshow: !1,
                itemWidth: 210,
                itemMargin: 5,
                touch: !0,
                asNavFor: "#slider" + t
            }), $("#slider" + t).flexslider({
                animation: "slide",
                controlNav: !1,
                animationLoop: !1,
                slideshow: !1,
                sync: "#carousel" + t
            })
        }
        $("#carouselPro").flexslider({
            animation: "slide",
            controlNav: !1,
            animationLoop: !1,
            slideshow: !1,
            itemWidth: 210,
            itemMargin: 5,
            touch: !0,
            asNavFor: "#sliderPro"
        }), $("#sliderPro").flexslider({
            animation: "slide",
            controlNav: !1,
            animationLoop: !1,
            slideshow: !1,
            sync: "#carouselPro"
        }), $("#status").fadeOut(), $("#loader-wrapper").delay(300).fadeOut("slow"), $("body").delay(350).css({
            "overflow-x": "hidden"
        }), $(".header_area").stick_in_parent(), $(".room_selector").on("click", function (t) {
            t.preventDefault(), $(".room_selector.selected").removeClass("selected"), $(this).addClass("selected");
            var e = $(this).attr("data-target"),
                i = e[e.length - 1];
            $(".room_tab").hide(), $("#" + e).show(n(i))
        }), $(".suites-room").on("click", function (t) {
            $(".room_selector.selected").removeClass("selected");
            var e = $(this).attr("href").split("#")[1];
            $("#room_" + e).addClass("selected");
            var i = e[e.length - 1];
            $(".room_tab").hide(), $("html, body").animate({
                scrollTop: 0
            }, 5), $("#" + e).show(n(i))
        })
    }),
    function (l, d, s, a) {
        function i(t, e) {
            this.settings = null, this.options = l.extend({}, i.Defaults, e), this.$element = l(t), this.drag = l.extend({}, n), this.state = l.extend({}, o), this.e = l.extend({}, r), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], l.each(i.Plugins, l.proxy(function (t, e) {
                this._plugins[t[0].toLowerCase() + t.slice(1)] = new e(this)
            }, this)), l.each(i.Pipe, l.proxy(function (t, e) {
                this._pipe.push({
                    filter: e.filter,
                    run: l.proxy(e.run, this)
                })
            }, this)), this.setup(), this.initialize()
        }

        function c(t) {
            if (t.touches !== a) return {
                x: t.touches[0].pageX,
                y: t.touches[0].pageY
            };
            if (t.touches === a) {
                if (t.pageX !== a) return {
                    x: t.pageX,
                    y: t.pageY
                };
                if (t.pageX === a) return {
                    x: t.clientX,
                    y: t.clientY
                }
            }
        }

        function t(t) {
            var e, i, n = s.createElement("div"),
                o = t;
            for (e in o)
                if (i = o[e], void 0 !== n.style[i]) return n = null, [i, e];
            return [!1]
        }
        var n, o, r;
        i.Defaults = {
            items: 3,
            loop: !(r = {
                _onDragStart: null,
                _onDragMove: null,
                _onDragEnd: null,
                _transitionEnd: null,
                _resizer: null,
                _responsiveCall: null,
                _goToLoop: null,
                _checkVisibile: null
            }),
            center: !(o = {
                isTouch: !(n = {
                    start: 0,
                    startX: 0,
                    startY: 0,
                    current: 0,
                    currentX: 0,
                    currentY: 0,
                    offsetX: 0,
                    offsetY: 0,
                    distance: null,
                    startTime: 0,
                    endTime: 0,
                    updatedX: 0,
                    targetEl: null
                }),
                isScrolling: !1,
                isSwiping: !1,
                direction: !1,
                inMotion: !1
            }),
            mouseDrag: !0,
            touchDrag: !0,
            pullDrag: !0,
            freeDrag: !1,
            margin: 0,
            stagePadding: 0,
            merge: !1,
            mergeFit: !0,
            autoWidth: !1,
            startPosition: 0,
            rtl: !1,
            smartSpeed: 250,
            fluidSpeed: !1,
            dragEndSpeed: !1,
            responsive: {},
            responsiveRefreshRate: 200,
            responsiveBaseElement: d,
            responsiveClass: !1,
            fallbackEasing: "swing",
            info: !1,
            nestedItemSelector: !1,
            itemElement: "div",
            stageElement: "div",
            themeClass: "owl-theme",
            baseClass: "owl-carousel",
            itemClass: "owl-item",
            centerClass: "center",
            activeClass: "active"
        }, i.Width = {
            Default: "default",
            Inner: "inner",
            Outer: "outer"
        }, i.Plugins = {}, i.Pipe = [{
            filter: ["width", "items", "settings"],
            run: function (t) {
                t.current = this._items && this._items[this.relative(this._current)]
            }
        }, {
            filter: ["items", "settings"],
            run: function () {
                var t = this._clones;
                (this.$stage.children(".cloned").length !== t.length || !this.settings.loop && 0 < t.length) && (this.$stage.children(".cloned").remove(), this._clones = [])
            }
        }, {
            filter: ["items", "settings"],
            run: function () {
                var t, e, i = this._clones,
                    n = this._items,
                    o = this.settings.loop ? i.length - Math.max(2 * this.settings.items, 4) : 0;
                for (t = 0, e = Math.abs(o / 2); t < e; t++) 0 < o ? (this.$stage.children().eq(n.length + i.length - 1).remove(), i.pop(), this.$stage.children().eq(0).remove(), i.pop()) : (i.push(i.length / 2), this.$stage.append(n[i[i.length - 1]].clone().addClass("cloned")), i.push(n.length - 1 - (i.length - 1) / 2), this.$stage.prepend(n[i[i.length - 1]].clone().addClass("cloned")))
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function () {
                var t, e, i, n = this.settings.rtl ? 1 : -1,
                    o = (this.width() / this.settings.items).toFixed(3),
                    s = 0;
                for (this._coordinates = [], e = 0, i = this._clones.length + this._items.length; e < i; e++) t = this._mergers[this.relative(e)], t = this.settings.mergeFit && Math.min(t, this.settings.items) || t, s += (this.settings.autoWidth ? this._items[this.relative(e)].width() + this.settings.margin : o * t) * n, this._coordinates.push(s)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function () {
                var t, e, i = (this.width() / this.settings.items).toFixed(3),
                    n = {
                        width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding,
                        "padding-left": this.settings.stagePadding || "",
                        "padding-right": this.settings.stagePadding || ""
                    };
                if (this.$stage.css(n), (n = {
                        width: this.settings.autoWidth ? "auto" : i - this.settings.margin
                    })[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && 0 < l.grep(this._mergers, function (t) {
                        return 1 < t
                    }).length)
                    for (t = 0, e = this._coordinates.length; t < e; t++) n.width = Math.abs(this._coordinates[t]) - Math.abs(this._coordinates[t - 1] || 0) - this.settings.margin, this.$stage.children().eq(t).css(n);
                else this.$stage.children().css(n)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function (t) {
                t.current && this.reset(this.$stage.children().index(t.current))
            }
        }, {
            filter: ["position"],
            run: function () {
                this.animate(this.coordinates(this._current))
            }
        }, {
            filter: ["width", "position", "items", "settings"],
            run: function () {
                var t, e, i, n, o = this.settings.rtl ? 1 : -1,
                    s = 2 * this.settings.stagePadding,
                    r = this.coordinates(this.current()) + s,
                    a = r + this.width() * o,
                    l = [];
                for (i = 0, n = this._coordinates.length; i < n; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + s * o, (this.op(t, "<=", r) && this.op(t, ">", a) || this.op(e, "<", r) && this.op(e, ">", a)) && l.push(i);
                this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))
            }
        }], i.prototype.initialize = function () {
            var t, e, i;
            if ((this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && !0 !== this.state.imagesLoaded) && (t = this.$element.find("img"), e = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : a, i = this.$element.children(e).width(), t.length && i <= 0)) return this.preloadAutoWidthImages(t), !1;
            this.$element.addClass("owl-loading"), this.$stage = l("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized")
        }, i.prototype.setup = function () {
            var e = this.viewport(),
                t = this.options.responsive,
                i = -1,
                n = null;
            t ? (l.each(t, function (t) {
                t <= e && i < t && (i = Number(t))
            }), delete(n = l.extend({}, this.options, t[i])).responsive, n.responsiveClass && this.$element.attr("class", function (t, e) {
                return e.replace(/\b owl-responsive-\S+/g, "")
            }).addClass("owl-responsive-" + i)) : n = l.extend({}, this.options), (null === this.settings || this._breakpoint !== i) && (this.trigger("change", {
                property: {
                    name: "settings",
                    value: n
                }
            }), this._breakpoint = i, this.settings = n, this.invalidate("settings"), this.trigger("changed", {
                property: {
                    name: "settings",
                    value: this.settings
                }
            }))
        }, i.prototype.optionsLogic = function () {
            this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
        }, i.prototype.prepare = function (t) {
            var e = this.trigger("prepare", {
                content: t
            });
            return e.data || (e.data = l("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(t)), this.trigger("prepared", {
                content: e.data
            }), e.data
        }, i.prototype.update = function () {
            for (var t = 0, e = this._pipe.length, i = l.proxy(function (t) {
                    return this[t]
                }, this._invalidated), n = {}; t < e;)(this._invalidated.all || 0 < l.grep(this._pipe[t].filter, i).length) && this._pipe[t].run(n), t++;
            this._invalidated = {}
        }, i.prototype.width = function (t) {
            switch (t = t || i.Width.Default) {
                case i.Width.Inner:
                case i.Width.Outer:
                    return this._width;
                default:
                    return this._width - 2 * this.settings.stagePadding + this.settings.margin
            }
        }, i.prototype.refresh = function () {
            if (0 === this._items.length) return !1;
            (new Date).getTime(), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = d.orientation, this.watchVisibility(), this.trigger("refreshed")
        }, i.prototype.eventsCall = function () {
            this.e._onDragStart = l.proxy(function (t) {
                this.onDragStart(t)
            }, this), this.e._onDragMove = l.proxy(function (t) {
                this.onDragMove(t)
            }, this), this.e._onDragEnd = l.proxy(function (t) {
                this.onDragEnd(t)
            }, this), this.e._onResize = l.proxy(function (t) {
                this.onResize(t)
            }, this), this.e._transitionEnd = l.proxy(function (t) {
                this.transitionEnd(t)
            }, this), this.e._preventClick = l.proxy(function (t) {
                this.preventClick(t)
            }, this)
        }, i.prototype.onThrottledResize = function () {
            d.clearTimeout(this.resizeTimer), this.resizeTimer = d.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate)
        }, i.prototype.onResize = function () {
            return !!this._items.length && (this._width !== this.$element.width() && (!this.trigger("resize").isDefaultPrevented() && (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized"))))
        }, i.prototype.eventsRouter = function (t) {
            var e = t.type;
            "mousedown" === e || "touchstart" === e ? this.onDragStart(t) : "mousemove" === e || "touchmove" === e ? this.onDragMove(t) : "mouseup" === e || "touchend" === e ? this.onDragEnd(t) : "touchcancel" === e && this.onDragEnd(t)
        }, i.prototype.internalEvents = function () {
            var t = ("ontouchstart" in d || navigator.msMaxTouchPoints, d.navigator.msPointerEnabled);
            this.settings.mouseDrag ? (this.$stage.on("mousedown", l.proxy(function (t) {
                this.eventsRouter(t)
            }, this)), this.$stage.on("dragstart", function () {
                return !1
            }), this.$stage.get(0).onselectstart = function () {
                return !1
            }) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !t && this.$stage.on("touchstart touchcancel", l.proxy(function (t) {
                this.eventsRouter(t)
            }, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), !1 !== this.settings.responsive && this.on(d, "resize", l.proxy(this.onThrottledResize, this))
        }, i.prototype.onDragStart = function (t) {
            var e, i, n, o;
            if (3 === (e = t.originalEvent || t || d.event).which || this.state.isTouch) return !1;
            if ("mousedown" === e.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, i = c(e).x, n = c(e).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d) o = this.getTransformProperty(), this.drag.offsetX = o, this.animate(o), this.state.inMotion = !0;
            else if (this.state.inMotion && !this.support3d) return this.state.inMotion = !1;
            this.drag.startX = i - this.drag.offsetX, this.drag.startY = n - this.drag.offsetY, this.drag.start = i - this.drag.startX, this.drag.targetEl = e.target || e.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), l(s).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", l.proxy(function (t) {
                this.eventsRouter(t)
            }, this))
        }, i.prototype.onDragMove = function (t) {
            var e, i, n, o, s, r;
            this.state.isTouch && (this.state.isScrolling || (i = c(e = t.originalEvent || t || d.event).x, n = c(e).y, this.drag.currentX = i - this.drag.startX, this.drag.currentY = n - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : 0 < this.drag.distance && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (o = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), s = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), r = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, o + r), s + r)), (8 < this.drag.distance || this.drag.distance < -8) && (e.preventDefault !== a ? e.preventDefault() : e.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (16 < this.drag.currentY || this.drag.currentY < -16) && !1 === this.state.isSwiping && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)))
        }, i.prototype.onDragEnd = function (t) {
            var e, i;
            if (this.state.isTouch) {
                if ("mouseup" === t.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && !0 !== this.state.inMotion) return this.state.inMotion = !1;
                this.drag.endTime = (new Date).getTime(), e = this.drag.endTime - this.drag.startTime, (3 < Math.abs(this.drag.distance) || 300 < e) && this.removeClick(this.drag.targetEl), i = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(i), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(i) || this.transitionEnd(), this.drag.distance = 0, l(s).off(".owl.dragEvents")
            }
        }, i.prototype.removeClick = function (t) {
            this.drag.targetEl = t, l(t).on("click.preventClick", this.e._preventClick), d.setTimeout(function () {
                l(t).off("click.preventClick")
            }, 300)
        }, i.prototype.preventClick = function (t) {
            t.preventDefault ? t.preventDefault() : t.returnValue = !1, t.stopPropagation && t.stopPropagation(), l(t.target).off("click.preventClick")
        }, i.prototype.getTransformProperty = function () {
            var t;
            return !0 !== (16 === (t = (t = d.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform")).replace(/matrix(3d)?\(|\)/g, "").split(",")).length) ? t[4] : t[12]
        }, i.prototype.closest = function (i) {
            var n = -1,
                o = this.width(),
                s = this.coordinates();
            return this.settings.freeDrag || l.each(s, l.proxy(function (t, e) {
                return e - 30 < i && i < e + 30 ? n = t : this.op(i, "<", e) && this.op(i, ">", s[t + 1] || e - o) && (n = "left" === this.state.direction ? t + 1 : t), -1 === n
            }, this)), this.settings.loop || (this.op(i, ">", s[this.minimum()]) ? n = i = this.minimum() : this.op(i, "<", s[this.maximum()]) && (n = i = this.maximum())), n
        }, i.prototype.animate = function (t) {
            this.trigger("translate"), this.state.inMotion = 0 < this.speed(), this.support3d ? this.$stage.css({
                transform: "translate3d(" + t + "px,0px, 0px)",
                transition: this.speed() / 1e3 + "s"
            }) : this.state.isTouch ? this.$stage.css({
                left: t + "px"
            }) : this.$stage.animate({
                left: t
            }, this.speed() / 1e3, this.settings.fallbackEasing, l.proxy(function () {
                this.state.inMotion && this.transitionEnd()
            }, this))
        }, i.prototype.current = function (t) {
            if (t === a) return this._current;
            if (0 === this._items.length) return a;
            if (t = this.normalize(t), this._current !== t) {
                var e = this.trigger("change", {
                    property: {
                        name: "position",
                        value: t
                    }
                });
                e.data !== a && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                    property: {
                        name: "position",
                        value: this._current
                    }
                })
            }
            return this._current
        }, i.prototype.invalidate = function (t) {
            this._invalidated[t] = !0
        }, i.prototype.reset = function (t) {
            (t = this.normalize(t)) !== a && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
        }, i.prototype.normalize = function (t, e) {
            var i = e ? this._items.length : this._items.length + this._clones.length;
            return !l.isNumeric(t) || i < 1 ? a : t = this._clones.length ? (t % i + i) % i : Math.max(this.minimum(e), Math.min(this.maximum(e), t))
        }, i.prototype.relative = function (t) {
            return t = this.normalize(t), t -= this._clones.length / 2, this.normalize(t, !0)
        }, i.prototype.maximum = function (t) {
            var e, i, n, o = 0,
                s = this.settings;
            if (t) return this._items.length - 1;
            if (!s.loop && s.center) e = this._items.length - 1;
            else if (s.loop || s.center)
                if (s.loop || s.center) e = this._items.length + s.items;
                else {
                    if (!s.autoWidth && !s.merge) throw "Can not detect maximum absolute position.";
                    for (revert = s.rtl ? 1 : -1, i = this.$stage.width() - this.$element.width();
                        (n = this.coordinates(o)) && !(n * revert >= i);) e = ++o
                }
            else e = this._items.length - s.items;
            return e
        }, i.prototype.minimum = function (t) {
            return t ? 0 : this._clones.length / 2
        }, i.prototype.items = function (t) {
            return t === a ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
        }, i.prototype.mergers = function (t) {
            return t === a ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
        }, i.prototype.clones = function (i) {
            var e = this._clones.length / 2,
                n = e + this._items.length,
                o = function (t) {
                    return t % 2 == 0 ? n + t / 2 : e - (t + 1) / 2
                };
            return i === a ? l.map(this._clones, function (t, e) {
                return o(e)
            }) : l.map(this._clones, function (t, e) {
                return t === i ? o(e) : null
            })
        }, i.prototype.speed = function (t) {
            return t !== a && (this._speed = t), this._speed
        }, i.prototype.coordinates = function (t) {
            var e = null;
            return t === a ? l.map(this._coordinates, l.proxy(function (t, e) {
                return this.coordinates(e)
            }, this)) : (this.settings.center ? (e = this._coordinates[t], e += (this.width() - e + (this._coordinates[t - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : e = this._coordinates[t - 1] || 0, e)
        }, i.prototype.duration = function (t, e, i) {
            return Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
        }, i.prototype.to = function (t, e) {
            if (this.settings.loop) {
                var i = t - this.relative(this.current()),
                    n = this.current(),
                    o = this.current(),
                    s = this.current() + i,
                    r = o - s < 0,
                    a = this._clones.length + this._items.length;
                s < this.settings.items && !1 === r ? (n = o + this._items.length, this.reset(n)) : s >= a - this.settings.items && !0 === r && (n = o - this._items.length, this.reset(n)), d.clearTimeout(this.e._goToLoop), this.e._goToLoop = d.setTimeout(l.proxy(function () {
                    this.speed(this.duration(this.current(), n + i, e)), this.current(n + i), this.update()
                }, this), 30)
            } else this.speed(this.duration(this.current(), t, e)), this.current(t), this.update()
        }, i.prototype.next = function (t) {
            t = t || !1, this.to(this.relative(this.current()) + 1, t)
        }, i.prototype.prev = function (t) {
            t = t || !1, this.to(this.relative(this.current()) - 1, t)
        }, i.prototype.transitionEnd = function (t) {
            return (t === a || (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) === this.$stage.get(0))) && (this.state.inMotion = !1, void this.trigger("translated"))
        }, i.prototype.viewport = function () {
            var t;
            if (this.options.responsiveBaseElement !== d) t = l(this.options.responsiveBaseElement).width();
            else if (d.innerWidth) t = d.innerWidth;
            else {
                if (!s.documentElement || !s.documentElement.clientWidth) throw "Can not detect viewport width.";
                t = s.documentElement.clientWidth
            }
            return t
        }, i.prototype.replace = function (t) {
            this.$stage.empty(), this._items = [], t && (t = t instanceof jQuery ? t : l(t)), this.settings.nestedItemSelector && (t = t.find("." + this.settings.nestedItemSelector)), t.filter(function () {
                return 1 === this.nodeType
            }).each(l.proxy(function (t, e) {
                e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
            }, this)), this.reset(l.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
        }, i.prototype.add = function (t, e) {
            e = e === a ? this._items.length : this.normalize(e, !0), this.trigger("add", {
                content: t,
                position: e
            }), 0 === this._items.length || e === this._items.length ? (this.$stage.append(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[e].before(t), this._items.splice(e, 0, t), this._mergers.splice(e, 0, 1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", {
                content: t,
                position: e
            })
        }, i.prototype.remove = function (t) {
            (t = this.normalize(t, !0)) !== a && (this.trigger("remove", {
                content: this._items[t],
                position: t
            }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
                content: null,
                position: t
            }))
        }, i.prototype.addTriggerableEvents = function () {
            var i = l.proxy(function (e, i) {
                return l.proxy(function (t) {
                    t.relatedTarget !== this && (this.suppress([i]), e.apply(this, [].slice.call(arguments, 1)), this.release([i]))
                }, this)
            }, this);
            l.each({
                next: this.next,
                prev: this.prev,
                to: this.to,
                destroy: this.destroy,
                refresh: this.refresh,
                replace: this.replace,
                add: this.add,
                remove: this.remove
            }, l.proxy(function (t, e) {
                this.$element.on(t + ".owl.carousel", i(e, t + ".owl.carousel"))
            }, this))
        }, i.prototype.watchVisibility = function () {
            function t(t) {
                return 0 < t.offsetWidth && 0 < t.offsetHeight
            }
            t(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), d.clearInterval(this.e._checkVisibile), this.e._checkVisibile = d.setInterval(l.proxy(function () {
                t(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), d.clearInterval(this.e._checkVisibile))
            }, this), 500))
        }, i.prototype.preloadAutoWidthImages = function (i) {
            var n, o, s, r;
            n = 0, o = this, i.each(function (t, e) {
                s = l(e), (r = new Image).onload = function () {
                    n++, s.attr("src", r.src), s.css("opacity", 1), n >= i.length && (o.state.imagesLoaded = !0, o.initialize())
                }, r.src = s.attr("src") || s.attr("data-src") || s.attr("data-src-retina")
            })
        }, i.prototype.destroy = function () {
            for (var t in this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), !1 !== this.settings.responsive && l(d).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd), this._plugins) this._plugins[t].destroy();
            (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), l(s).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function () {}, this.$stage.off("dragstart", function () {
                return !1
            })), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap()
        }, i.prototype.op = function (t, e, i) {
            var n = this.settings.rtl;
            switch (e) {
                case "<":
                    return n ? i < t : t < i;
                case ">":
                    return n ? t < i : i < t;
                case ">=":
                    return n ? t <= i : i <= t;
                case "<=":
                    return n ? i <= t : t <= i
            }
        }, i.prototype.on = function (t, e, i, n) {
            t.addEventListener ? t.addEventListener(e, i, n) : t.attachEvent && t.attachEvent("on" + e, i)
        }, i.prototype.off = function (t, e, i, n) {
            t.removeEventListener ? t.removeEventListener(e, i, n) : t.detachEvent && t.detachEvent("on" + e, i)
        }, i.prototype.trigger = function (t, e, i) {
            var n = {
                    item: {
                        count: this._items.length,
                        index: this.current()
                    }
                },
                o = l.camelCase(l.grep(["on", t, i], function (t) {
                    return t
                }).join("-").toLowerCase()),
                s = l.Event([t, "owl", i || "carousel"].join(".").toLowerCase(), l.extend({
                    relatedTarget: this
                }, n, e));
            return this._supress[t] || (l.each(this._plugins, function (t, e) {
                e.onTrigger && e.onTrigger(s)
            }), this.$element.trigger(s), this.settings && "function" == typeof this.settings[o] && this.settings[o].apply(this, s)), s
        }, i.prototype.suppress = function (t) {
            l.each(t, l.proxy(function (t, e) {
                this._supress[e] = !0
            }, this))
        }, i.prototype.release = function (t) {
            l.each(t, l.proxy(function (t, e) {
                delete this._supress[e]
            }, this))
        }, i.prototype.browserSupport = function () {
            if (this.support3d = t(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0], this.support3d) {
                this.transformVendor = t(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0];
                this.transitionEndVendor = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"][t(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1]], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""
            }
            this.state.orientation = d.orientation
        }, l.fn.owlCarousel = function (t) {
            return this.each(function () {
                l(this).data("owlCarousel") || l(this).data("owlCarousel", new i(this, t))
            })
        }, l.fn.owlCarousel.Constructor = i
    }(window.Zepto || window.jQuery, window, document),
    function (a, s) {
        var e = function (t) {
            this._core = t, this._loaded = [], this._handlers = {
                "initialized.owl.carousel change.owl.carousel": a.proxy(function (t) {
                    if (t.namespace && this._core.settings && this._core.settings.lazyLoad && (t.property && "position" == t.property.name || "initialized" == t.type))
                        for (var e = this._core.settings, i = e.center && Math.ceil(e.items / 2) || e.items, n = e.center && -1 * i || 0, o = (t.property && t.property.value || this._core.current()) + n, s = this._core.clones().length, r = a.proxy(function (t, e) {
                                this.load(e)
                            }, this); n++ < i;) this.load(s / 2 + this._core.relative(o)), s && a.each(this._core.clones(this._core.relative(o++)), r)
                }, this)
            }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        e.Defaults = {
            lazyLoad: !1
        }, e.prototype.load = function (t) {
            var e = this._core.$stage.children().eq(t),
                i = e && e.find(".owl-lazy");
            !i || -1 < a.inArray(e.get(0), this._loaded) || (i.each(a.proxy(function (t, e) {
                var i, n = a(e),
                    o = 1 < s.devicePixelRatio && n.attr("data-src-retina") || n.attr("data-src");
                this._core.trigger("load", {
                    element: n,
                    url: o
                }, "lazy"), n.is("img") ? n.one("load.owl.lazy", a.proxy(function () {
                    n.css("opacity", 1), this._core.trigger("loaded", {
                        element: n,
                        url: o
                    }, "lazy")
                }, this)).attr("src", o) : ((i = new Image).onload = a.proxy(function () {
                    n.css({
                        "background-image": "url(" + o + ")",
                        opacity: "1"
                    }), this._core.trigger("loaded", {
                        element: n,
                        url: o
                    }, "lazy")
                }, this), i.src = o)
            }, this)), this._loaded.push(e.get(0)))
        }, e.prototype.destroy = function () {
            var t, e;
            for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e
    }(window.Zepto || window.jQuery, window, document),
    function (e) {
        var i = function (t) {
            this._core = t, this._handlers = {
                "initialized.owl.carousel": e.proxy(function () {
                    this._core.settings.autoHeight && this.update()
                }, this),
                "changed.owl.carousel": e.proxy(function (t) {
                    this._core.settings.autoHeight && "position" == t.property.name && this.update()
                }, this),
                "loaded.owl.lazy": e.proxy(function (t) {
                    this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update()
                }, this)
            }, this._core.options = e.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        i.Defaults = {
            autoHeight: !1,
            autoHeightClass: "owl-height"
        }, i.prototype.update = function () {
            this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)
        }, i.prototype.destroy = function () {
            var t, e;
            for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, e.fn.owlCarousel.Constructor.Plugins.AutoHeight = i
    }(window.Zepto || window.jQuery, window, document),
    function (c, e, i) {
        var n = function (t) {
            this._core = t, this._videos = {}, this._playing = null, this._fullscreen = !1, this._handlers = {
                "resize.owl.carousel": c.proxy(function (t) {
                    this._core.settings.video && !this.isInFullScreen() && t.preventDefault()
                }, this),
                "refresh.owl.carousel changed.owl.carousel": c.proxy(function () {
                    this._playing && this.stop()
                }, this),
                "prepared.owl.carousel": c.proxy(function (t) {
                    var e = c(t.content).find(".owl-video");
                    e.length && (e.css("display", "none"), this.fetch(e, c(t.content)))
                }, this)
            }, this._core.options = c.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", c.proxy(function (t) {
                this.play(t)
            }, this))
        };
        n.Defaults = {
            video: !1,
            videoHeight: !1,
            videoWidth: !1
        }, n.prototype.fetch = function (t, e) {
            var i = t.attr("data-vimeo-id") ? "vimeo" : "youtube",
                n = t.attr("data-vimeo-id") || t.attr("data-youtube-id"),
                o = t.attr("data-width") || this._core.settings.videoWidth,
                s = t.attr("data-height") || this._core.settings.videoHeight,
                r = t.attr("href");
            if (!r) throw new Error("Missing video URL.");
            if (-1 < (n = r.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu")) i = "youtube";
            else {
                if (!(-1 < n[3].indexOf("vimeo"))) throw new Error("Video URL not supported.");
                i = "vimeo"
            }
            n = n[6], this._videos[r] = {
                type: i,
                id: n,
                width: o,
                height: s
            }, e.attr("data-video", r), this.thumbnail(t, this._videos[r])
        }, n.prototype.thumbnail = function (e, t) {
            var i, n, o = t.width && t.height ? 'style="width:' + t.width + "px;height:" + t.height + 'px;"' : "",
                s = e.find("img"),
                r = "src",
                a = "",
                l = this._core.settings,
                d = function (t) {
                    '<div class="owl-video-play-icon"></div>',
                    i = l.lazyLoad ? '<div class="owl-video-tn ' + a + '" ' + r + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>',
                    e.after(i),
                    e.after('<div class="owl-video-play-icon"></div>')
                };
            return e.wrap('<div class="owl-video-wrapper"' + o + "></div>"), this._core.settings.lazyLoad && (r = "data-src", a = "owl-lazy"), s.length ? (d(s.attr(r)), s.remove(), !1) : void("youtube" === t.type ? (n = "http://img.youtube.com/vi/" + t.id + "/hqdefault.jpg", d(n)) : "vimeo" === t.type && c.ajax({
                type: "GET",
                url: "http://vimeo.com/api/v2/video/" + t.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function (t) {
                    n = t[0].thumbnail_large, d(n)
                }
            }))
        }, n.prototype.stop = function () {
            this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null
        }, n.prototype.play = function (t) {
            this._core.trigger("play", null, "video"), this._playing && this.stop();
            var e, i, n = c(t.target || t.srcElement),
                o = n.closest("." + this._core.settings.itemClass),
                s = this._videos[o.attr("data-video")],
                r = s.width || "100%",
                a = s.height || this._core.$stage.height();
            "youtube" === s.type ? e = '<iframe width="' + r + '" height="' + a + '" src="http://www.youtube.com/embed/' + s.id + "?autoplay=1&v=" + s.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === s.type && (e = '<iframe src="http://player.vimeo.com/video/' + s.id + '?autoplay=1" width="' + r + '" height="' + a + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), o.addClass("owl-video-playing"), this._playing = o, i = c('<div style="height:' + a + "px; width:" + r + 'px" class="owl-video-frame">' + e + "</div>"), n.after(i)
        }, n.prototype.isInFullScreen = function () {
            var t = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
            return t && c(t).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), !(t && this._fullscreen && this._playing) && (this._fullscreen ? this._fullscreen = !1 : !this._playing || this._core.state.orientation === e.orientation || (this._core.state.orientation = e.orientation, !1))
        }, n.prototype.destroy = function () {
            var t, e;
            for (t in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, c.fn.owlCarousel.Constructor.Plugins.Video = n
    }(window.Zepto || window.jQuery, window, document),
    function (r, t, e, i) {
        var n = function (t) {
            this.core = t, this.core.options = r.extend({}, n.Defaults, this.core.options), this.swapping = !0, this.previous = void 0, this.next = void 0, this.handlers = {
                "change.owl.carousel": r.proxy(function (t) {
                    "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
                }, this),
                "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": r.proxy(function (t) {
                    this.swapping = "translated" == t.type
                }, this),
                "translate.owl.carousel": r.proxy(function () {
                    this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
                }, this)
            }, this.core.$element.on(this.handlers)
        };
        n.Defaults = {
            animateOut: !1,
            animateIn: !1
        }, n.prototype.swap = function () {
            if (1 === this.core.settings.items && this.core.support3d) {
                this.core.speed(0);
                var t, e = r.proxy(this.clear, this),
                    i = this.core.$stage.children().eq(this.previous),
                    n = this.core.$stage.children().eq(this.next),
                    o = this.core.settings.animateIn,
                    s = this.core.settings.animateOut;
                this.core.current() !== this.previous && (s && (t = this.core.coordinates(this.previous) - this.core.coordinates(this.next), i.css({
                    left: t + "px"
                }).addClass("animated owl-animated-out").addClass(s).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", e)), o && n.addClass("animated owl-animated-in").addClass(o).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", e))
            }
        }, n.prototype.clear = function (t) {
            r(t.target).css({
                left: ""
            }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd()
        }, n.prototype.destroy = function () {
            var t, e;
            for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, r.fn.owlCarousel.Constructor.Plugins.Animate = n
    }(window.Zepto || window.jQuery, window, document),
    function (e, i, t) {
        var n = function (t) {
            this.core = t, this.core.options = e.extend({}, n.Defaults, this.core.options), this.handlers = {
                "translated.owl.carousel refreshed.owl.carousel": e.proxy(function () {
                    this.autoplay()
                }, this),
                "play.owl.autoplay": e.proxy(function (t, e, i) {
                    this.play(e, i)
                }, this),
                "stop.owl.autoplay": e.proxy(function () {
                    this.stop()
                }, this),
                "mouseover.owl.autoplay": e.proxy(function () {
                    this.core.settings.autoplayHoverPause && this.pause()
                }, this),
                "mouseleave.owl.autoplay": e.proxy(function () {
                    this.core.settings.autoplayHoverPause && this.autoplay()
                }, this)
            }, this.core.$element.on(this.handlers)
        };
        n.Defaults = {
            autoplay: !1,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !1,
            autoplaySpeed: !1
        }, n.prototype.autoplay = function () {
            this.core.settings.autoplay && !this.core.state.videoPlay ? (i.clearInterval(this.interval), this.interval = i.setInterval(e.proxy(function () {
                this.play()
            }, this), this.core.settings.autoplayTimeout)) : i.clearInterval(this.interval)
        }, n.prototype.play = function () {
            return !0 === t.hidden || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : !1 === this.core.settings.autoplay ? void i.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed)
        }, n.prototype.stop = function () {
            i.clearInterval(this.interval)
        }, n.prototype.pause = function () {
            i.clearInterval(this.interval)
        }, n.prototype.destroy = function () {
            var t, e;
            for (t in i.clearInterval(this.interval), this.handlers) this.core.$element.off(t, this.handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, e.fn.owlCarousel.Constructor.Plugins.autoplay = n
    }(window.Zepto || window.jQuery, window, document),
    function (s) {
        "use strict";
        var e = function (t) {
            this._core = t, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
                next: this._core.next,
                prev: this._core.prev,
                to: this._core.to
            }, this._handlers = {
                "prepared.owl.carousel": s.proxy(function (t) {
                    this._core.settings.dotsData && this._templates.push(s(t.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
                }, this),
                "add.owl.carousel": s.proxy(function (t) {
                    this._core.settings.dotsData && this._templates.splice(t.position, 0, s(t.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
                }, this),
                "remove.owl.carousel prepared.owl.carousel": s.proxy(function (t) {
                    this._core.settings.dotsData && this._templates.splice(t.position, 1)
                }, this),
                "change.owl.carousel": s.proxy(function (t) {
                    if ("position" == t.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
                        var e = this._core.current(),
                            i = this._core.maximum(),
                            n = this._core.minimum();
                        t.data = t.property.value > i ? i <= e ? n : i : t.property.value < n ? i : t.property.value
                    }
                }, this),
                "changed.owl.carousel": s.proxy(function (t) {
                    "position" == t.property.name && this.draw()
                }, this),
                "refreshed.owl.carousel": s.proxy(function () {
                    this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")
                }, this)
            }, this._core.options = s.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
        };
        e.Defaults = {
            nav: !1,
            navRewind: !0,
            navText: ["prev", "next"],
            navSpeed: !1,
            navElement: "div",
            navContainer: !1,
            navContainerClass: "owl-nav",
            navClass: ["owl-prev", "owl-next"],
            slideBy: 1,
            dotClass: "owl-dot",
            dotsClass: "owl-dots",
            dots: !0,
            dotsEach: !1,
            dotData: !1,
            dotsSpeed: !1,
            dotsContainer: !1,
            controlsClass: "owl-controls"
        }, e.prototype.initialize = function () {
            var t, e, i = this._core.settings;
            for (e in i.dotsData || (this._templates = [s("<div>").addClass(i.dotClass).append(s("<span>")).prop("outerHTML")]), i.navContainer && i.dotsContainer || (this._controls.$container = s("<div>").addClass(i.controlsClass).appendTo(this.$element)), this._controls.$indicators = i.dotsContainer ? s(i.dotsContainer) : s("<div>").hide().addClass(i.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", s.proxy(function (t) {
                    var e = s(t.target).parent().is(this._controls.$indicators) ? s(t.target).index() : s(t.target).parent().index();
                    t.preventDefault(), this.to(e, i.dotsSpeed)
                }, this)), t = i.navContainer ? s(i.navContainer) : s("<div>").addClass(i.navContainerClass).prependTo(this._controls.$container), this._controls.$next = s("<" + i.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(i.navClass[0]).html(i.navText[0]).hide().prependTo(t).on("click", s.proxy(function () {
                    this.prev(i.navSpeed)
                }, this)), this._controls.$next.addClass(i.navClass[1]).html(i.navText[1]).hide().appendTo(t).on("click", s.proxy(function () {
                    this.next(i.navSpeed)
                }, this)), this._overrides) this._core[e] = s.proxy(this[e], this)
        }, e.prototype.destroy = function () {
            var t, e, i, n;
            for (t in this._handlers) this.$element.off(t, this._handlers[t]);
            for (e in this._controls) this._controls[e].remove();
            for (n in this.overides) this._core[n] = this._overrides[n];
            for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
        }, e.prototype.update = function () {
            var t, e, i = this._core.settings,
                n = this._core.clones().length / 2,
                o = n + this._core.items().length,
                s = i.center || i.autoWidth || i.dotData ? 1 : i.dotsEach || i.items;
            if ("page" !== i.slideBy && (i.slideBy = Math.min(i.slideBy, i.items)), i.dots || "page" == i.slideBy)
                for (this._pages = [], t = n, e = 0; t < o; t++)(s <= e || 0 === e) && (this._pages.push({
                    start: t - n,
                    end: t - n + s - 1
                }), e = 0, 0), e += this._core.mergers(this._core.relative(t))
        }, e.prototype.draw = function () {
            var t, e, i = "",
                n = this._core.settings,
                o = (this._core.$stage.children(), this._core.relative(this._core.current()));
            if (!n.nav || n.loop || n.navRewind || (this._controls.$previous.toggleClass("disabled", o <= 0), this._controls.$next.toggleClass("disabled", o >= this._core.maximum())), this._controls.$previous.toggle(n.nav), this._controls.$next.toggle(n.nav), n.dots) {
                if (t = this._pages.length - this._controls.$indicators.children().length, n.dotData && 0 !== t) {
                    for (e = 0; e < this._controls.$indicators.children().length; e++) i += this._templates[this._core.relative(e)];
                    this._controls.$indicators.html(i)
                } else 0 < t ? (i = new Array(t + 1).join(this._templates[0]), this._controls.$indicators.append(i)) : t < 0 && this._controls.$indicators.children().slice(t).remove();
                this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(s.inArray(this.current(), this._pages)).addClass("active")
            }
            this._controls.$indicators.toggle(n.dots)
        }, e.prototype.onTrigger = function (t) {
            var e = this._core.settings;
            t.page = {
                index: s.inArray(this.current(), this._pages),
                count: this._pages.length,
                size: e && (e.center || e.autoWidth || e.dotData ? 1 : e.dotsEach || e.items)
            }
        }, e.prototype.current = function () {
            var e = this._core.relative(this._core.current());
            return s.grep(this._pages, function (t) {
                return t.start <= e && t.end >= e
            }).pop()
        }, e.prototype.getPosition = function (t) {
            var e, i, n = this._core.settings;
            return "page" == n.slideBy ? (e = s.inArray(this.current(), this._pages), i = this._pages.length, t ? ++e : --e, e = this._pages[(e % i + i) % i].start) : (e = this._core.relative(this._core.current()), i = this._core.items().length, t ? e += n.slideBy : e -= n.slideBy), e
        }, e.prototype.next = function (t) {
            s.proxy(this._overrides.to, this._core)(this.getPosition(!0), t)
        }, e.prototype.prev = function (t) {
            s.proxy(this._overrides.to, this._core)(this.getPosition(!1), t)
        }, e.prototype.to = function (t, e, i) {
            var n;
            i ? s.proxy(this._overrides.to, this._core)(t, e) : (n = this._pages.length, s.proxy(this._overrides.to, this._core)(this._pages[(t % n + n) % n].start, e))
        }, s.fn.owlCarousel.Constructor.Plugins.Navigation = e
    }(window.Zepto || window.jQuery, window, document),
    function (i, n) {
        "use strict";
        var e = function (t) {
            this._core = t, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
                "initialized.owl.carousel": i.proxy(function () {
                    "URLHash" == this._core.settings.startPosition && i(n).trigger("hashchange.owl.navigation")
                }, this),
                "prepared.owl.carousel": i.proxy(function (t) {
                    var e = i(t.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
                    this._hashes[e] = t.content
                }, this)
            }, this._core.options = i.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), i(n).on("hashchange.owl.navigation", i.proxy(function () {
                var t = n.location.hash.substring(1),
                    e = this._core.$stage.children(),
                    i = this._hashes[t] && e.index(this._hashes[t]) || 0;
                return !!t && void this._core.to(i, !1, !0)
            }, this))
        };
        e.Defaults = {
            URLhashListener: !1
        }, e.prototype.destroy = function () {
            var t, e;
            for (t in i(n).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, i.fn.owlCarousel.Constructor.Plugins.Hash = e
    }(window.Zepto || window.jQuery, window, document),
    function () {
        var A, N;
        A = this.jQuery || window.jQuery, N = A(window), A.fn.stick_in_parent = function (t) {
            var x, _, e, i, T, n, C, k, S, E, P;
            for (null == t && (t = {}), P = t.sticky_class, T = t.inner_scrolling, E = t.recalc_every, S = t.parent, k = t.offset_top, C = t.spacer, _ = t.bottoming, null == k && (k = 0), null == S && (S = void 0), null == T && (T = !0), null == P && (P = "is_stuck"), x = A(document), null == _ && (_ = !0), e = function (o, s, r, a, l, d, c, h) {
                    var u, t, p, f, g, m, v, y, e, w, b, n;
                    if (!o.data("sticky_kit")) {
                        if (o.data("sticky_kit", !0), g = x.height(), v = o.parent(), null != S && (v = v.closest(S)), !v.length) throw "failed to find stick parent";
                        if (u = p = !1, (b = null != C ? C && o.closest(C) : A("<div />")) && b.css("position", o.css("position")), (y = function () {
                                var t, e, i;
                                if (!h && (g = x.height(), t = parseInt(v.css("border-top-width"), 10), e = parseInt(v.css("padding-top"), 10), s = parseInt(v.css("padding-bottom"), 10), r = v.offset().top + t + e, a = v.height(), p && (u = p = !1, null == C && (o.insertAfter(b), b.detach()), o.css({
                                        position: "",
                                        top: "",
                                        width: "",
                                        bottom: ""
                                    }).removeClass(P), i = !0), l = o.offset().top - (parseInt(o.css("margin-top"), 10) || 0) - k, d = o.outerHeight(!0), c = o.css("float"), b && b.css({
                                        width: o.outerWidth(!0),
                                        height: d,
                                        display: o.css("display"),
                                        "vertical-align": o.css("vertical-align"),
                                        float: c
                                    }), i)) return n()
                            })(), d !== a) return f = void 0, m = k, w = E, n = function () {
                            var t, e, i, n;
                            if (!h && (i = !1, null != w && (--w <= 0 && (w = E, y(), i = !0)), i || x.height() === g || y(), i = N.scrollTop(), null != f && (e = i - f), f = i, p ? (_ && (n = a + r < i + d + m, u && !n && (u = !1, o.css({
                                    position: "fixed",
                                    bottom: "",
                                    top: m
                                }).trigger("sticky_kit:unbottom"))), i < l && (p = !1, m = k, null == C && ("left" !== c && "right" !== c || o.insertAfter(b), b.detach()), t = {
                                    position: "",
                                    width: "",
                                    top: ""
                                }, o.css(t).removeClass(P).trigger("sticky_kit:unstick")), T && ((t = N.height()) < d + k && !u && (m -= e, m = Math.max(t - d, m), m = Math.min(k, m), p && o.css({
                                    top: m + "px"
                                })))) : l < i && (p = !0, (t = {
                                    position: "fixed",
                                    top: m
                                }).width = "border-box" === o.css("box-sizing") ? o.outerWidth() + "px" : o.width() + "px", o.css(t).addClass(P), null == C && (o.after(b), "left" !== c && "right" !== c || b.append(o)), o.trigger("sticky_kit:stick")), p && _ && (null == n && (n = a + r < i + d + m), !u && n))) return u = !0, "static" === v.css("position") && v.css({
                                position: "relative"
                            }), o.css({
                                position: "absolute",
                                bottom: s,
                                top: "auto"
                            }).trigger("sticky_kit:bottom")
                        }, e = function () {
                            return y(), n()
                        }, t = function () {
                            if (h = !0, N.off("touchmove", n), N.off("scroll", n), N.off("resize", e), A(document.body).off("sticky_kit:recalc", e), o.off("sticky_kit:detach", t), o.removeData("sticky_kit"), o.css({
                                    position: "",
                                    bottom: "",
                                    top: "",
                                    width: ""
                                }), v.position("position", ""), p) return null == C && ("left" !== c && "right" !== c || o.insertAfter(b), b.remove()), o.removeClass(P)
                        }, N.on("touchmove", n), N.on("scroll", n), N.on("resize", e), A(document.body).on("sticky_kit:recalc", e), o.on("sticky_kit:detach", t), setTimeout(n, 0)
                    }
                }, i = 0, n = this.length; i < n; i++) t = this[i], e(A(t));
            return this
        }
    }.call(this),
    function () {
        var n, e, i, l, o, s = function (t, e) {
                return function () {
                    return t.apply(e, arguments)
                }
            },
            r = [].indexOf || function (t) {
                for (var e = 0, i = this.length; e < i; e++)
                    if (e in this && this[e] === t) return e;
                return -1
            };
        e = function () {
            function t() {}
            return t.prototype.extend = function (t, e) {
                var i, n;
                for (i in e) n = e[i], null == t[i] && (t[i] = n);
                return t
            }, t.prototype.isMobile = function (t) {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
            }, t.prototype.addEvent = function (t, e, i) {
                return null != t.addEventListener ? t.addEventListener(e, i, !1) : null != t.attachEvent ? t.attachEvent("on" + e, i) : t[e] = i
            }, t.prototype.removeEvent = function (t, e, i) {
                return null != t.removeEventListener ? t.removeEventListener(e, i, !1) : null != t.detachEvent ? t.detachEvent("on" + e, i) : delete t[e]
            }, t.prototype.innerHeight = function () {
                return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
            }, t
        }(), i = this.WeakMap || this.MozWeakMap || (i = function () {
            function t() {
                this.keys = [], this.values = []
            }
            return t.prototype.get = function (t) {
                var e, i, n, o;
                for (e = i = 0, n = (o = this.keys).length; i < n; e = ++i)
                    if (o[e] === t) return this.values[e]
            }, t.prototype.set = function (t, e) {
                var i, n, o, s;
                for (i = n = 0, o = (s = this.keys).length; n < o; i = ++n)
                    if (s[i] === t) return void(this.values[i] = e);
                return this.keys.push(t), this.values.push(e)
            }, t
        }()), n = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (n = function () {
            function t() {
                "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
            }
            return t.notSupported = !0, t.prototype.observe = function () {}, t
        }()), l = this.getComputedStyle || function (i) {
            return this.getPropertyValue = function (t) {
                var e;
                return "float" === t && (t = "styleFloat"), o.test(t) && t.replace(o, function (t, e) {
                    return e.toUpperCase()
                }), (null != (e = i.currentStyle) ? e[t] : void 0) || null
            }, this
        }, o = /(\-([a-z]){1})/g, this.WOW = function () {
            function t(t) {
                null == t && (t = {}), this.scrollCallback = s(this.scrollCallback, this), this.scrollHandler = s(this.scrollHandler, this), this.start = s(this.start, this), this.scrolled = !0, this.config = this.util().extend(t, this.defaults), this.animationNameCache = new i
            }
            return t.prototype.defaults = {
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: !0,
                live: !0
            }, t.prototype.init = function () {
                var t;
                return this.element = window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
            }, t.prototype.start = function () {
                var o, t, e, i, r;
                if (this.stopped = !1, this.boxes = function () {
                        var t, e, i, n;
                        for (n = [], t = 0, e = (i = this.element.querySelectorAll("." + this.config.boxClass)).length; t < e; t++) o = i[t], n.push(o);
                        return n
                    }.call(this), this.all = function () {
                        var t, e, i, n;
                        for (n = [], t = 0, e = (i = this.boxes).length; t < e; t++) o = i[t], n.push(o);
                        return n
                    }.call(this), this.boxes.length)
                    if (this.disabled()) this.resetStyle();
                    else
                        for (t = 0, e = (i = this.boxes).length; t < e; t++) o = i[t], this.applyStyle(o, !0);
                return this.disabled() || (this.util().addEvent(window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new n((r = this, function (t) {
                    var o, s, e, i, n;
                    for (n = [], e = 0, i = t.length; e < i; e++) s = t[e], n.push(function () {
                        var t, e, i, n;
                        for (n = [], t = 0, e = (i = s.addedNodes || []).length; t < e; t++) o = i[t], n.push(this.doSync(o));
                        return n
                    }.call(r));
                    return n
                })).observe(document.body, {
                    childList: !0,
                    subtree: !0
                }) : void 0
            }, t.prototype.stop = function () {
                return this.stopped = !0, this.util().removeEvent(window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
            }, t.prototype.sync = function () {
                return n.notSupported ? this.doSync(this.element) : void 0
            }, t.prototype.doSync = function (t) {
                var e, i, n, o, s;
                if (null == t && (t = this.element), 1 === t.nodeType) {
                    for (s = [], i = 0, n = (o = (t = t.parentNode || t).querySelectorAll("." + this.config.boxClass)).length; i < n; i++) e = o[i], r.call(this.all, e) < 0 ? (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), s.push(this.scrolled = !0)) : s.push(void 0);
                    return s
                }
            }, t.prototype.show = function (t) {
                return this.applyStyle(t), t.className = t.className + " " + this.config.animateClass
            }, t.prototype.applyStyle = function (t, e) {
                var i, n, o, s;
                return n = t.getAttribute("data-wow-duration"), i = t.getAttribute("data-wow-delay"), o = t.getAttribute("data-wow-iteration"), this.animate((s = this, function () {
                    return s.customStyle(t, e, n, i, o)
                }))
            }, t.prototype.animate = "requestAnimationFrame" in window ? function (t) {
                return window.requestAnimationFrame(t)
            } : function (t) {
                return t()
            }, t.prototype.resetStyle = function () {
                var t, e, i, n, o;
                for (o = [], e = 0, i = (n = this.boxes).length; e < i; e++) t = n[e], o.push(t.style.visibility = "visible");
                return o
            }, t.prototype.customStyle = function (t, e, i, n, o) {
                return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", i && this.vendorSet(t.style, {
                    animationDuration: i
                }), n && this.vendorSet(t.style, {
                    animationDelay: n
                }), o && this.vendorSet(t.style, {
                    animationIterationCount: o
                }), this.vendorSet(t.style, {
                    animationName: e ? "none" : this.cachedAnimationName(t)
                }), t
            }, t.prototype.vendors = ["moz", "webkit"], t.prototype.vendorSet = function (o, t) {
                var s, r, a, e;
                for (s in e = [], t) r = t[s], o["" + s] = r, e.push(function () {
                    var t, e, i, n;
                    for (n = [], t = 0, e = (i = this.vendors).length; t < e; t++) a = i[t], n.push(o["" + a + s.charAt(0).toUpperCase() + s.substr(1)] = r);
                    return n
                }.call(this));
                return e
            }, t.prototype.vendorCSS = function (t, e) {
                var i, n, o, s, r, a;
                for (i = (n = l(t)).getPropertyCSSValue(e), s = 0, r = (a = this.vendors).length; s < r; s++) o = a[s], i = i || n.getPropertyCSSValue("-" + o + "-" + e);
                return i
            }, t.prototype.animationName = function (e) {
                var i;
                try {
                    i = this.vendorCSS(e, "animation-name").cssText
                } catch (t) {
                    i = l(e).getPropertyValue("animation-name")
                }
                return "none" === i ? "" : i
            }, t.prototype.cacheAnimationName = function (t) {
                return this.animationNameCache.set(t, this.animationName(t))
            }, t.prototype.cachedAnimationName = function (t) {
                return this.animationNameCache.get(t)
            }, t.prototype.scrollHandler = function () {
                return this.scrolled = !0
            }, t.prototype.scrollCallback = function () {
                var o;
                return !this.scrolled || (this.scrolled = !1, this.boxes = function () {
                    var t, e, i, n;
                    for (n = [], t = 0, e = (i = this.boxes).length; t < e; t++)(o = i[t]) && (this.isVisible(o) ? this.show(o) : n.push(o));
                    return n
                }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
            }, t.prototype.offsetTop = function (t) {
                for (var e; void 0 === t.offsetTop;) t = t.parentNode;
                for (e = t.offsetTop; t = t.offsetParent;) e += t.offsetTop;
                return e
            }, t.prototype.isVisible = function (t) {
                var e, i, n, o, s;
                return i = t.getAttribute("data-wow-offset") || this.config.offset, o = (s = window.pageYOffset) + Math.min(this.element.clientHeight, this.util().innerHeight()) - i, e = (n = this.offsetTop(t)) + t.clientHeight, n <= o && s <= e
            }, t.prototype.util = function () {
                return null != this._util ? this._util : this._util = new e
            }, t.prototype.disabled = function () {
                return !this.config.mobile && this.util().isMobile(navigator.userAgent)
            }, t
        }()
    }.call(this);