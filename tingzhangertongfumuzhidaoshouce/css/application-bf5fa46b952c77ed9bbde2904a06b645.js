! function(e, t) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
		if (!e.document) throw new Error("jQuery requires a window with a document");
		return t(e)
	} : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
	function n(e) {
		var t = e.length,
			n = ot.type(e);
		return "function" === n || ot.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
	}

	function i(e, t, n) {
		if (ot.isFunction(t)) return ot.grep(e, function(e, i) {
			return !!t.call(e, i, e) !== n
		});
		if (t.nodeType) return ot.grep(e, function(e) {
			return e === t !== n
		});
		if ("string" == typeof t) {
			if (ft.test(t)) return ot.filter(t, e, n);
			t = ot.filter(t, e)
		}
		return ot.grep(e, function(e) {
			return ot.inArray(e, t) >= 0 !== n
		})
	}

	function o(e, t) {
		do e = e[t]; while (e && 1 !== e.nodeType);
		return e
	}

	function r(e) {
		var t = xt[e] = {};
		return ot.each(e.match(yt) || [], function(e, n) {
			t[n] = !0
		}), t
	}

	function a() {
		mt.addEventListener ? (mt.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1)) : (mt.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
	}

	function s() {
		(mt.addEventListener || "load" === event.type || "complete" === mt.readyState) && (a(), ot.ready())
	}

	function l(e, t, n) {
		if (void 0 === n && 1 === e.nodeType) {
			var i = "data-" + t.replace(St, "-$1").toLowerCase();
			if (n = e.getAttribute(i), "string" == typeof n) {
				try {
					n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Tt.test(n) ? ot.parseJSON(n) : n
				} catch (o) {}
				ot.data(e, t, n)
			} else n = void 0
		}
		return n
	}

	function c(e) {
		var t;
		for (t in e)
			if (("data" !== t || !ot.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
		return !0
	}

	function u(e, t, n, i) {
		if (ot.acceptData(e)) {
			var o, r, a = ot.expando,
				s = e.nodeType,
				l = s ? ot.cache : e,
				c = s ? e[a] : e[a] && a;
			if (c && l[c] && (i || l[c].data) || void 0 !== n || "string" != typeof t) return c || (c = s ? e[a] = Y.pop() || ot.guid++ : a), l[c] || (l[c] = s ? {} : {
				toJSON: ot.noop
			}), ("object" == typeof t || "function" == typeof t) && (i ? l[c] = ot.extend(l[c], t) : l[c].data = ot.extend(l[c].data, t)), r = l[c], i || (r.data || (r.data = {}), r = r.data), void 0 !== n && (r[ot.camelCase(t)] = n), "string" == typeof t ? (o = r[t], null == o && (o = r[ot.camelCase(t)])) : o = r, o
		}
	}

	function d(e, t, n) {
		if (ot.acceptData(e)) {
			var i, o, r = e.nodeType,
				a = r ? ot.cache : e,
				s = r ? e[ot.expando] : ot.expando;
			if (a[s]) {
				if (t && (i = n ? a[s] : a[s].data)) {
					ot.isArray(t) ? t = t.concat(ot.map(t, ot.camelCase)) : t in i ? t = [t] : (t = ot.camelCase(t), t = t in i ? [t] : t.split(" ")), o = t.length;
					for (; o--;) delete i[t[o]];
					if (n ? !c(i) : !ot.isEmptyObject(i)) return
				}(n || (delete a[s].data, c(a[s]))) && (r ? ot.cleanData([e], !0) : nt.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
			}
		}
	}

	function f() {
		return !0
	}

	function p() {
		return !1
	}

	function m() {
		try {
			return mt.activeElement
		} catch (e) {}
	}

	function g(e) {
		var t = Lt.split("|"),
			n = e.createDocumentFragment();
		if (n.createElement)
			for (; t.length;) n.createElement(t.pop());
		return n
	}

	function h(e, t) {
		var n, i, o = 0,
			r = typeof e.getElementsByTagName !== kt ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== kt ? e.querySelectorAll(t || "*") : void 0;
		if (!r)
			for (r = [], n = e.childNodes || e; null != (i = n[o]); o++) !t || ot.nodeName(i, t) ? r.push(i) : ot.merge(r, h(i, t));
		return void 0 === t || t && ot.nodeName(e, t) ? ot.merge([e], r) : r
	}

	function v(e) {
		Rt.test(e.type) && (e.defaultChecked = e.checked)
	}

	function b(e, t) {
		return ot.nodeName(e, "table") && ot.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
	}

	function y(e) {
		return e.type = (null !== ot.find.attr(e, "type")) + "/" + e.type, e
	}

	function x(e) {
		var t = Xt.exec(e.type);
		return t ? e.type = t[1] : e.removeAttribute("type"), e
	}

	function w(e, t) {
		for (var n, i = 0; null != (n = e[i]); i++) ot._data(n, "globalEval", !t || ot._data(t[i], "globalEval"))
	}

	function C(e, t) {
		if (1 === t.nodeType && ot.hasData(e)) {
			var n, i, o, r = ot._data(e),
				a = ot._data(t, r),
				s = r.events;
			if (s) {
				delete a.handle, a.events = {};
				for (n in s)
					for (i = 0, o = s[n].length; o > i; i++) ot.event.add(t, n, s[n][i])
			}
			a.data && (a.data = ot.extend({}, a.data))
		}
	}

	function k(e, t) {
		var n, i, o;
		if (1 === t.nodeType) {
			if (n = t.nodeName.toLowerCase(), !nt.noCloneEvent && t[ot.expando]) {
				o = ot._data(t);
				for (i in o.events) ot.removeEvent(t, i, o.handle);
				t.removeAttribute(ot.expando)
			}
			"script" === n && t.text !== e.text ? (y(t).text = e.text, x(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), nt.html5Clone && e.innerHTML && !ot.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Rt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
		}
	}

	function T(t, n) {
		var i, o = ot(n.createElement(t)).appendTo(n.body),
			r = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(o[0])) ? i.display : ot.css(o[0], "display");
		return o.detach(), r
	}

	function S(e) {
		var t = mt,
			n = Jt[e];
		return n || (n = T(e, t), "none" !== n && n || (Gt = (Gt || ot("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Gt[0].contentWindow || Gt[0].contentDocument).document, t.write(), t.close(), n = T(e, t), Gt.detach()), Jt[e] = n), n
	}

	function E(e, t) {
		return {
			get: function() {
				var n = e();
				if (null != n) return n ? void delete this.get : (this.get = t).apply(this, arguments)
			}
		}
	}

	function A(e, t) {
		if (t in e) return t;
		for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, o = pn.length; o--;)
			if (t = pn[o] + n, t in e) return t;
		return i
	}

	function D(e, t) {
		for (var n, i, o, r = [], a = 0, s = e.length; s > a; a++) i = e[a], i.style && (r[a] = ot._data(i, "olddisplay"), n = i.style.display, t ? (r[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && Dt(i) && (r[a] = ot._data(i, "olddisplay", S(i.nodeName)))) : (o = Dt(i), (n && "none" !== n || !o) && ot._data(i, "olddisplay", o ? n : ot.css(i, "display"))));
		for (a = 0; s > a; a++) i = e[a], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[a] || "" : "none"));
		return e
	}

	function j(e, t, n) {
		var i = cn.exec(t);
		return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
	}

	function R(e, t, n, i, o) {
		for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > r; r += 2) "margin" === n && (a += ot.css(e, n + At[r], !0, o)), i ? ("content" === n && (a -= ot.css(e, "padding" + At[r], !0, o)), "margin" !== n && (a -= ot.css(e, "border" + At[r] + "Width", !0, o))) : (a += ot.css(e, "padding" + At[r], !0, o), "padding" !== n && (a += ot.css(e, "border" + At[r] + "Width", !0, o)));
		return a
	}

	function F(e, t, n) {
		var i = !0,
			o = "width" === t ? e.offsetWidth : e.offsetHeight,
			r = en(e),
			a = nt.boxSizing && "border-box" === ot.css(e, "boxSizing", !1, r);
		if (0 >= o || null == o) {
			if (o = tn(e, t, r), (0 > o || null == o) && (o = e.style[t]), on.test(o)) return o;
			i = a && (nt.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
		}
		return o + R(e, t, n || (a ? "border" : "content"), i, r) + "px"
	}

	function P(e, t, n, i, o) {
		return new P.prototype.init(e, t, n, i, o)
	}

	function O() {
		return setTimeout(function() {
			mn = void 0
		}), mn = ot.now()
	}

	function N(e, t) {
		var n, i = {
				height: e
			},
			o = 0;
		for (t = t ? 1 : 0; 4 > o; o += 2 - t) n = At[o], i["margin" + n] = i["padding" + n] = e;
		return t && (i.opacity = i.width = e), i
	}

	function q(e, t, n) {
		for (var i, o = (xn[t] || []).concat(xn["*"]), r = 0, a = o.length; a > r; r++)
			if (i = o[r].call(n, t, e)) return i
	}

	function L(e, t, n) {
		var i, o, r, a, s, l, c, u, d = this,
			f = {},
			p = e.style,
			m = e.nodeType && Dt(e),
			g = ot._data(e, "fxshow");
		n.queue || (s = ot._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
			s.unqueued || l()
		}), s.unqueued++, d.always(function() {
			d.always(function() {
				s.unqueued--, ot.queue(e, "fx").length || s.empty.fire()
			})
		})), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], c = ot.css(e, "display"), u = "none" === c ? ot._data(e, "olddisplay") || S(e.nodeName) : c, "inline" === u && "none" === ot.css(e, "float") && (nt.inlineBlockNeedsLayout && "inline" !== S(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", nt.shrinkWrapBlocks() || d.always(function() {
			p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
		}));
		for (i in t)
			if (o = t[i], hn.exec(o)) {
				if (delete t[i], r = r || "toggle" === o, o === (m ? "hide" : "show")) {
					if ("show" !== o || !g || void 0 === g[i]) continue;
					m = !0
				}
				f[i] = g && g[i] || ot.style(e, i)
			} else c = void 0;
		if (ot.isEmptyObject(f)) "inline" === ("none" === c ? S(e.nodeName) : c) && (p.display = c);
		else {
			g ? "hidden" in g && (m = g.hidden) : g = ot._data(e, "fxshow", {}), r && (g.hidden = !m), m ? ot(e).show() : d.done(function() {
				ot(e).hide()
			}), d.done(function() {
				var t;
				ot._removeData(e, "fxshow");
				for (t in f) ot.style(e, t, f[t])
			});
			for (i in f) a = q(m ? g[i] : 0, i, d), i in g || (g[i] = a.start, m && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
		}
	}

	function z(e, t) {
		var n, i, o, r, a;
		for (n in e)
			if (i = ot.camelCase(n), o = t[i], r = e[n], ot.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), a = ot.cssHooks[i], a && "expand" in a) {
				r = a.expand(r), delete e[i];
				for (n in r) n in e || (e[n] = r[n], t[n] = o)
			} else t[i] = o
	}

	function I(e, t, n) {
		var i, o, r = 0,
			a = yn.length,
			s = ot.Deferred().always(function() {
				delete l.elem
			}),
			l = function() {
				if (o) return !1;
				for (var t = mn || O(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, r = 1 - i, a = 0, l = c.tweens.length; l > a; a++) c.tweens[a].run(r);
				return s.notifyWith(e, [c, r, n]), 1 > r && l ? n : (s.resolveWith(e, [c]), !1)
			},
			c = s.promise({
				elem: e,
				props: ot.extend({}, t),
				opts: ot.extend(!0, {
					specialEasing: {}
				}, n),
				originalProperties: t,
				originalOptions: n,
				startTime: mn || O(),
				duration: n.duration,
				tweens: [],
				createTween: function(t, n) {
					var i = ot.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
					return c.tweens.push(i), i
				},
				stop: function(t) {
					var n = 0,
						i = t ? c.tweens.length : 0;
					if (o) return this;
					for (o = !0; i > n; n++) c.tweens[n].run(1);
					return t ? s.resolveWith(e, [c, t]) : s.rejectWith(e, [c, t]), this
				}
			}),
			u = c.props;
		for (z(u, c.opts.specialEasing); a > r; r++)
			if (i = yn[r].call(c, e, u, c.opts)) return i;
		return ot.map(u, q, c), ot.isFunction(c.opts.start) && c.opts.start.call(e, c), ot.fx.timer(ot.extend(l, {
			elem: e,
			anim: c,
			queue: c.opts.queue
		})), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
	}

	function H(e) {
		return function(t, n) {
			"string" != typeof t && (n = t, t = "*");
			var i, o = 0,
				r = t.toLowerCase().match(yt) || [];
			if (ot.isFunction(n))
				for (; i = r[o++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
		}
	}

	function M(e, t, n, i) {
		function o(s) {
			var l;
			return r[s] = !0, ot.each(e[s] || [], function(e, s) {
				var c = s(t, n, i);
				return "string" != typeof c || a || r[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1)
			}), l
		}
		var r = {},
			a = e === Wn;
		return o(t.dataTypes[0]) || !r["*"] && o("*")
	}

	function _(e, t) {
		var n, i, o = ot.ajaxSettings.flatOptions || {};
		for (i in t) void 0 !== t[i] && ((o[i] ? e : n || (n = {}))[i] = t[i]);
		return n && ot.extend(!0, e, n), e
	}

	function V(e, t, n) {
		for (var i, o, r, a, s = e.contents, l = e.dataTypes;
			"*" === l[0];) l.shift(), void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
		if (o)
			for (a in s)
				if (s[a] && s[a].test(o)) {
					l.unshift(a);
					break
				}
		if (l[0] in n) r = l[0];
		else {
			for (a in n) {
				if (!l[0] || e.converters[a + " " + l[0]]) {
					r = a;
					break
				}
				i || (i = a)
			}
			r = r || i
		}
		return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
	}

	function B(e, t, n, i) {
		var o, r, a, s, l, c = {},
			u = e.dataTypes.slice();
		if (u[1])
			for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
		for (r = u.shift(); r;)
			if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift())
				if ("*" === r) r = l;
				else if ("*" !== l && l !== r) {
			if (a = c[l + " " + r] || c["* " + r], !a)
				for (o in c)
					if (s = o.split(" "), s[1] === r && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
						a === !0 ? a = c[o] : c[o] !== !0 && (r = s[0], u.unshift(s[1]));
						break
					}
			if (a !== !0)
				if (a && e["throws"]) t = a(t);
				else try {
					t = a(t)
				} catch (d) {
					return {
						state: "parsererror",
						error: a ? d : "No conversion from " + l + " to " + r
					}
				}
		}
		return {
			state: "success",
			data: t
		}
	}

	function W(e, t, n, i) {
		var o;
		if (ot.isArray(t)) ot.each(t, function(t, o) {
			n || Yn.test(e) ? i(e, o) : W(e + "[" + ("object" == typeof o ? t : "") + "]", o, n, i)
		});
		else if (n || "object" !== ot.type(t)) i(e, t);
		else
			for (o in t) W(e + "[" + o + "]", t[o], n, i)
	}

	function U() {
		try {
			return new e.XMLHttpRequest
		} catch (t) {}
	}

	function $() {
		try {
			return new e.ActiveXObject("Microsoft.XMLHTTP")
		} catch (t) {}
	}

	function X(e) {
		return ot.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
	}
	var Y = [],
		Q = Y.slice,
		K = Y.concat,
		Z = Y.push,
		G = Y.indexOf,
		J = {},
		et = J.toString,
		tt = J.hasOwnProperty,
		nt = {},
		it = "1.11.2",
		ot = function(e, t) {
			return new ot.fn.init(e, t)
		},
		rt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		at = /^-ms-/,
		st = /-([\da-z])/gi,
		lt = function(e, t) {
			return t.toUpperCase()
		};
	ot.fn = ot.prototype = {
		jquery: it,
		constructor: ot,
		selector: "",
		length: 0,
		toArray: function() {
			return Q.call(this)
		},
		get: function(e) {
			return null != e ? 0 > e ? this[e + this.length] : this[e] : Q.call(this)
		},
		pushStack: function(e) {
			var t = ot.merge(this.constructor(), e);
			return t.prevObject = this, t.context = this.context, t
		},
		each: function(e, t) {
			return ot.each(this, e, t)
		},
		map: function(e) {
			return this.pushStack(ot.map(this, function(t, n) {
				return e.call(t, n, t)
			}))
		},
		slice: function() {
			return this.pushStack(Q.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(e) {
			var t = this.length,
				n = +e + (0 > e ? t : 0);
			return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor(null)
		},
		push: Z,
		sort: Y.sort,
		splice: Y.splice
	}, ot.extend = ot.fn.extend = function() {
		var e, t, n, i, o, r, a = arguments[0] || {},
			s = 1,
			l = arguments.length,
			c = !1;
		for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || ot.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)
			if (null != (o = arguments[s]))
				for (i in o) e = a[i], n = o[i], a !== n && (c && n && (ot.isPlainObject(n) || (t = ot.isArray(n))) ? (t ? (t = !1, r = e && ot.isArray(e) ? e : []) : r = e && ot.isPlainObject(e) ? e : {}, a[i] = ot.extend(c, r, n)) : void 0 !== n && (a[i] = n));
		return a
	}, ot.extend({
		expando: "jQuery" + (it + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(e) {
			throw new Error(e)
		},
		noop: function() {},
		isFunction: function(e) {
			return "function" === ot.type(e)
		},
		isArray: Array.isArray || function(e) {
			return "array" === ot.type(e)
		},
		isWindow: function(e) {
			return null != e && e == e.window
		},
		isNumeric: function(e) {
			return !ot.isArray(e) && e - parseFloat(e) + 1 >= 0
		},
		isEmptyObject: function(e) {
			var t;
			for (t in e) return !1;
			return !0
		},
		isPlainObject: function(e) {
			var t;
			if (!e || "object" !== ot.type(e) || e.nodeType || ot.isWindow(e)) return !1;
			try {
				if (e.constructor && !tt.call(e, "constructor") && !tt.call(e.constructor.prototype, "isPrototypeOf")) return !1
			} catch (n) {
				return !1
			}
			if (nt.ownLast)
				for (t in e) return tt.call(e, t);
			for (t in e);
			return void 0 === t || tt.call(e, t)
		},
		type: function(e) {
			return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? J[et.call(e)] || "object" : typeof e
		},
		globalEval: function(t) {
			t && ot.trim(t) && (e.execScript || function(t) {
				e.eval.call(e, t)
			})(t)
		},
		camelCase: function(e) {
			return e.replace(at, "ms-").replace(st, lt)
		},
		nodeName: function(e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
		},
		each: function(e, t, i) {
			var o, r = 0,
				a = e.length,
				s = n(e);
			if (i) {
				if (s)
					for (; a > r && (o = t.apply(e[r], i), o !== !1); r++);
				else
					for (r in e)
						if (o = t.apply(e[r], i), o === !1) break
			} else if (s)
				for (; a > r && (o = t.call(e[r], r, e[r]), o !== !1); r++);
			else
				for (r in e)
					if (o = t.call(e[r], r, e[r]), o === !1) break; return e
		},
		trim: function(e) {
			return null == e ? "" : (e + "").replace(rt, "")
		},
		makeArray: function(e, t) {
			var i = t || [];
			return null != e && (n(Object(e)) ? ot.merge(i, "string" == typeof e ? [e] : e) : Z.call(i, e)), i
		},
		inArray: function(e, t, n) {
			var i;
			if (t) {
				if (G) return G.call(t, e, n);
				for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
					if (n in t && t[n] === e) return n
			}
			return -1
		},
		merge: function(e, t) {
			for (var n = +t.length, i = 0, o = e.length; n > i;) e[o++] = t[i++];
			if (n !== n)
				for (; void 0 !== t[i];) e[o++] = t[i++];
			return e.length = o, e
		},
		grep: function(e, t, n) {
			for (var i, o = [], r = 0, a = e.length, s = !n; a > r; r++) i = !t(e[r], r), i !== s && o.push(e[r]);
			return o
		},
		map: function(e, t, i) {
			var o, r = 0,
				a = e.length,
				s = n(e),
				l = [];
			if (s)
				for (; a > r; r++) o = t(e[r], r, i), null != o && l.push(o);
			else
				for (r in e) o = t(e[r], r, i), null != o && l.push(o);
			return K.apply([], l)
		},
		guid: 1,
		proxy: function(e, t) {
			var n, i, o;
			return "string" == typeof t && (o = e[t], t = e, e = o), ot.isFunction(e) ? (n = Q.call(arguments, 2), i = function() {
				return e.apply(t || this, n.concat(Q.call(arguments)))
			}, i.guid = e.guid = e.guid || ot.guid++, i) : void 0
		},
		now: function() {
			return +new Date
		},
		support: nt
	}), ot.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
		J["[object " + t + "]"] = t.toLowerCase()
	});
	var ct = function(e) {
		function t(e, t, n, i) {
			var o, r, a, s, l, c, d, p, m, g;
			if ((t ? t.ownerDocument || t : M) !== P && F(t), t = t || P, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
			if (!i && N) {
				if (11 !== s && (o = bt.exec(e)))
					if (a = o[1]) {
						if (9 === s) {
							if (r = t.getElementById(a), !r || !r.parentNode) return n;
							if (r.id === a) return n.push(r), n
						} else if (t.ownerDocument && (r = t.ownerDocument.getElementById(a)) && I(t, r) && r.id === a) return n.push(r), n
					} else {
						if (o[2]) return G.apply(n, t.getElementsByTagName(e)), n;
						if ((a = o[3]) && w.getElementsByClassName) return G.apply(n, t.getElementsByClassName(a)), n
					}
				if (w.qsa && (!q || !q.test(e))) {
					if (p = d = H, m = t, g = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
						for (c = S(e), (d = t.getAttribute("id")) ? p = d.replace(xt, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", l = c.length; l--;) c[l] = p + f(c[l]);
						m = yt.test(e) && u(t.parentNode) || t, g = c.join(",")
					}
					if (g) try {
						return G.apply(n, m.querySelectorAll(g)), n
					} catch (h) {} finally {
						d || t.removeAttribute("id")
					}
				}
			}
			return A(e.replace(lt, "$1"), t, n, i)
		}

		function n() {
			function e(n, i) {
				return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = i
			}
			var t = [];
			return e
		}

		function i(e) {
			return e[H] = !0, e
		}

		function o(e) {
			var t = P.createElement("div");
			try {
				return !!e(t)
			} catch (n) {
				return !1
			} finally {
				t.parentNode && t.parentNode.removeChild(t), t = null
			}
		}

		function r(e, t) {
			for (var n = e.split("|"), i = e.length; i--;) C.attrHandle[n[i]] = t
		}

		function a(e, t) {
			var n = t && e,
				i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || X) - (~e.sourceIndex || X);
			if (i) return i;
			if (n)
				for (; n = n.nextSibling;)
					if (n === t) return -1;
			return e ? 1 : -1
		}

		function s(e) {
			return function(t) {
				var n = t.nodeName.toLowerCase();
				return "input" === n && t.type === e
			}
		}

		function l(e) {
			return function(t) {
				var n = t.nodeName.toLowerCase();
				return ("input" === n || "button" === n) && t.type === e
			}
		}

		function c(e) {
			return i(function(t) {
				return t = +t, i(function(n, i) {
					for (var o, r = e([], n.length, t), a = r.length; a--;) n[o = r[a]] && (n[o] = !(i[o] = n[o]))
				})
			})
		}

		function u(e) {
			return e && "undefined" != typeof e.getElementsByTagName && e
		}

		function d() {}

		function f(e) {
			for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
			return i
		}

		function p(e, t, n) {
			var i = t.dir,
				o = n && "parentNode" === i,
				r = V++;
			return t.first ? function(t, n, r) {
				for (; t = t[i];)
					if (1 === t.nodeType || o) return e(t, n, r)
			} : function(t, n, a) {
				var s, l, c = [_, r];
				if (a) {
					for (; t = t[i];)
						if ((1 === t.nodeType || o) && e(t, n, a)) return !0
				} else
					for (; t = t[i];)
						if (1 === t.nodeType || o) {
							if (l = t[H] || (t[H] = {}), (s = l[i]) && s[0] === _ && s[1] === r) return c[2] = s[2];
							if (l[i] = c, c[2] = e(t, n, a)) return !0
						}
			}
		}

		function m(e) {
			return e.length > 1 ? function(t, n, i) {
				for (var o = e.length; o--;)
					if (!e[o](t, n, i)) return !1;
				return !0
			} : e[0]
		}

		function g(e, n, i) {
			for (var o = 0, r = n.length; r > o; o++) t(e, n[o], i);
			return i
		}

		function h(e, t, n, i, o) {
			for (var r, a = [], s = 0, l = e.length, c = null != t; l > s; s++)(r = e[s]) && (!n || n(r, i, o)) && (a.push(r), c && t.push(s));
			return a
		}

		function v(e, t, n, o, r, a) {
			return o && !o[H] && (o = v(o)), r && !r[H] && (r = v(r, a)), i(function(i, a, s, l) {
				var c, u, d, f = [],
					p = [],
					m = a.length,
					v = i || g(t || "*", s.nodeType ? [s] : s, []),
					b = !e || !i && t ? v : h(v, f, e, s, l),
					y = n ? r || (i ? e : m || o) ? [] : a : b;
				if (n && n(b, y, s, l), o)
					for (c = h(y, p), o(c, [], s, l), u = c.length; u--;)(d = c[u]) && (y[p[u]] = !(b[p[u]] = d));
				if (i) {
					if (r || e) {
						if (r) {
							for (c = [], u = y.length; u--;)(d = y[u]) && c.push(b[u] = d);
							r(null, y = [], c, l)
						}
						for (u = y.length; u--;)(d = y[u]) && (c = r ? et(i, d) : f[u]) > -1 && (i[c] = !(a[c] = d))
					}
				} else y = h(y === a ? y.splice(m, y.length) : y), r ? r(null, a, y, l) : G.apply(a, y)
			})
		}

		function b(e) {
			for (var t, n, i, o = e.length, r = C.relative[e[0].type], a = r || C.relative[" "], s = r ? 1 : 0, l = p(function(e) {
				return e === t
			}, a, !0), c = p(function(e) {
				return et(t, e) > -1
			}, a, !0), u = [
				function(e, n, i) {
					var o = !r && (i || n !== D) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
					return t = null, o
				}
			]; o > s; s++)
				if (n = C.relative[e[s].type]) u = [p(m(u), n)];
				else {
					if (n = C.filter[e[s].type].apply(null, e[s].matches), n[H]) {
						for (i = ++s; o > i && !C.relative[e[i].type]; i++);
						return v(s > 1 && m(u), s > 1 && f(e.slice(0, s - 1).concat({
							value: " " === e[s - 2].type ? "*" : ""
						})).replace(lt, "$1"), n, i > s && b(e.slice(s, i)), o > i && b(e = e.slice(i)), o > i && f(e))
					}
					u.push(n)
				}
			return m(u)
		}

		function y(e, n) {
			var o = n.length > 0,
				r = e.length > 0,
				a = function(i, a, s, l, c) {
					var u, d, f, p = 0,
						m = "0",
						g = i && [],
						v = [],
						b = D,
						y = i || r && C.find.TAG("*", c),
						x = _ += null == b ? 1 : Math.random() || .1,
						w = y.length;
					for (c && (D = a !== P && a); m !== w && null != (u = y[m]); m++) {
						if (r && u) {
							for (d = 0; f = e[d++];)
								if (f(u, a, s)) {
									l.push(u);
									break
								}
							c && (_ = x)
						}
						o && ((u = !f && u) && p--, i && g.push(u))
					}
					if (p += m, o && m !== p) {
						for (d = 0; f = n[d++];) f(g, v, a, s);
						if (i) {
							if (p > 0)
								for (; m--;) g[m] || v[m] || (v[m] = K.call(l));
							v = h(v)
						}
						G.apply(l, v), c && !i && v.length > 0 && p + n.length > 1 && t.uniqueSort(l)
					}
					return c && (_ = x, D = b), g
				};
			return o ? i(a) : a
		}
		var x, w, C, k, T, S, E, A, D, j, R, F, P, O, N, q, L, z, I, H = "sizzle" + 1 * new Date,
			M = e.document,
			_ = 0,
			V = 0,
			B = n(),
			W = n(),
			U = n(),
			$ = function(e, t) {
				return e === t && (R = !0), 0
			},
			X = 1 << 31,
			Y = {}.hasOwnProperty,
			Q = [],
			K = Q.pop,
			Z = Q.push,
			G = Q.push,
			J = Q.slice,
			et = function(e, t) {
				for (var n = 0, i = e.length; i > n; n++)
					if (e[n] === t) return n;
				return -1
			},
			tt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			nt = "[\\x20\\t\\r\\n\\f]",
			it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
			ot = it.replace("w", "w#"),
			rt = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ot + "))|)" + nt + "*\\]",
			at = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt + ")*)|.*)\\)|)",
			st = new RegExp(nt + "+", "g"),
			lt = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
			ct = new RegExp("^" + nt + "*," + nt + "*"),
			ut = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
			dt = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
			ft = new RegExp(at),
			pt = new RegExp("^" + ot + "$"),
			mt = {
				ID: new RegExp("^#(" + it + ")"),
				CLASS: new RegExp("^\\.(" + it + ")"),
				TAG: new RegExp("^(" + it.replace("w", "w*") + ")"),
				ATTR: new RegExp("^" + rt),
				PSEUDO: new RegExp("^" + at),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + tt + ")$", "i"),
				needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
			},
			gt = /^(?:input|select|textarea|button)$/i,
			ht = /^h\d$/i,
			vt = /^[^{]+\{\s*\[native \w/,
			bt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			yt = /[+~]/,
			xt = /'|\\/g,
			wt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
			Ct = function(e, t, n) {
				var i = "0x" + t - 65536;
				return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
			},
			kt = function() {
				F()
			};
		try {
			G.apply(Q = J.call(M.childNodes), M.childNodes), Q[M.childNodes.length].nodeType
		} catch (Tt) {
			G = {
				apply: Q.length ? function(e, t) {
					Z.apply(e, J.call(t))
				} : function(e, t) {
					for (var n = e.length, i = 0; e[n++] = t[i++];);
					e.length = n - 1
				}
			}
		}
		w = t.support = {}, T = t.isXML = function(e) {
			var t = e && (e.ownerDocument || e).documentElement;
			return t ? "HTML" !== t.nodeName : !1
		}, F = t.setDocument = function(e) {
			var t, n, i = e ? e.ownerDocument || e : M;
			return i !== P && 9 === i.nodeType && i.documentElement ? (P = i, O = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", kt, !1) : n.attachEvent && n.attachEvent("onunload", kt)), N = !T(i), w.attributes = o(function(e) {
				return e.className = "i", !e.getAttribute("className")
			}), w.getElementsByTagName = o(function(e) {
				return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
			}), w.getElementsByClassName = vt.test(i.getElementsByClassName), w.getById = o(function(e) {
				return O.appendChild(e).id = H, !i.getElementsByName || !i.getElementsByName(H).length
			}), w.getById ? (C.find.ID = function(e, t) {
				if ("undefined" != typeof t.getElementById && N) {
					var n = t.getElementById(e);
					return n && n.parentNode ? [n] : []
				}
			}, C.filter.ID = function(e) {
				var t = e.replace(wt, Ct);
				return function(e) {
					return e.getAttribute("id") === t
				}
			}) : (delete C.find.ID, C.filter.ID = function(e) {
				var t = e.replace(wt, Ct);
				return function(e) {
					var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
					return n && n.value === t
				}
			}), C.find.TAG = w.getElementsByTagName ? function(e, t) {
				return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
			} : function(e, t) {
				var n, i = [],
					o = 0,
					r = t.getElementsByTagName(e);
				if ("*" === e) {
					for (; n = r[o++];) 1 === n.nodeType && i.push(n);
					return i
				}
				return r
			}, C.find.CLASS = w.getElementsByClassName && function(e, t) {
				return N ? t.getElementsByClassName(e) : void 0
			}, L = [], q = [], (w.qsa = vt.test(i.querySelectorAll)) && (o(function(e) {
				O.appendChild(e).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + nt + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || q.push("\\[" + nt + "*(?:value|" + tt + ")"), e.querySelectorAll("[id~=" + H + "-]").length || q.push("~="), e.querySelectorAll(":checked").length || q.push(":checked"), e.querySelectorAll("a#" + H + "+*").length || q.push(".#.+[+~]")
			}), o(function(e) {
				var t = i.createElement("input");
				t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && q.push("name" + nt + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), q.push(",.*:")
			})), (w.matchesSelector = vt.test(z = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && o(function(e) {
				w.disconnectedMatch = z.call(e, "div"), z.call(e, "[s!='']:x"), L.push("!=", at)
			}), q = q.length && new RegExp(q.join("|")), L = L.length && new RegExp(L.join("|")), t = vt.test(O.compareDocumentPosition), I = t || vt.test(O.contains) ? function(e, t) {
				var n = 9 === e.nodeType ? e.documentElement : e,
					i = t && t.parentNode;
				return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
			} : function(e, t) {
				if (t)
					for (; t = t.parentNode;)
						if (t === e) return !0;
				return !1
			}, $ = t ? function(e, t) {
				if (e === t) return R = !0, 0;
				var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
				return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === i || e.ownerDocument === M && I(M, e) ? -1 : t === i || t.ownerDocument === M && I(M, t) ? 1 : j ? et(j, e) - et(j, t) : 0 : 4 & n ? -1 : 1)
			} : function(e, t) {
				if (e === t) return R = !0, 0;
				var n, o = 0,
					r = e.parentNode,
					s = t.parentNode,
					l = [e],
					c = [t];
				if (!r || !s) return e === i ? -1 : t === i ? 1 : r ? -1 : s ? 1 : j ? et(j, e) - et(j, t) : 0;
				if (r === s) return a(e, t);
				for (n = e; n = n.parentNode;) l.unshift(n);
				for (n = t; n = n.parentNode;) c.unshift(n);
				for (; l[o] === c[o];) o++;
				return o ? a(l[o], c[o]) : l[o] === M ? -1 : c[o] === M ? 1 : 0
			}, i) : P
		}, t.matches = function(e, n) {
			return t(e, null, null, n)
		}, t.matchesSelector = function(e, n) {
			if ((e.ownerDocument || e) !== P && F(e), n = n.replace(dt, "='$1']"), !(!w.matchesSelector || !N || L && L.test(n) || q && q.test(n))) try {
				var i = z.call(e, n);
				if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
			} catch (o) {}
			return t(n, P, null, [e]).length > 0
		}, t.contains = function(e, t) {
			return (e.ownerDocument || e) !== P && F(e), I(e, t)
		}, t.attr = function(e, t) {
			(e.ownerDocument || e) !== P && F(e);
			var n = C.attrHandle[t.toLowerCase()],
				i = n && Y.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !N) : void 0;
			return void 0 !== i ? i : w.attributes || !N ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
		}, t.error = function(e) {
			throw new Error("Syntax error, unrecognized expression: " + e)
		}, t.uniqueSort = function(e) {
			var t, n = [],
				i = 0,
				o = 0;
			if (R = !w.detectDuplicates, j = !w.sortStable && e.slice(0), e.sort($), R) {
				for (; t = e[o++];) t === e[o] && (i = n.push(o));
				for (; i--;) e.splice(n[i], 1)
			}
			return j = null, e
		}, k = t.getText = function(e) {
			var t, n = "",
				i = 0,
				o = e.nodeType;
			if (o) {
				if (1 === o || 9 === o || 11 === o) {
					if ("string" == typeof e.textContent) return e.textContent;
					for (e = e.firstChild; e; e = e.nextSibling) n += k(e)
				} else if (3 === o || 4 === o) return e.nodeValue
			} else
				for (; t = e[i++];) n += k(t);
			return n
		}, C = t.selectors = {
			cacheLength: 50,
			createPseudo: i,
			match: mt,
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
					return e[1] = e[1].replace(wt, Ct), e[3] = (e[3] || e[4] || e[5] || "").replace(wt, Ct), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
				},
				CHILD: function(e) {
					return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
				},
				PSEUDO: function(e) {
					var t, n = !e[6] && e[2];
					return mt.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ft.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
				}
			},
			filter: {
				TAG: function(e) {
					var t = e.replace(wt, Ct).toLowerCase();
					return "*" === e ? function() {
						return !0
					} : function(e) {
						return e.nodeName && e.nodeName.toLowerCase() === t
					}
				},
				CLASS: function(e) {
					var t = B[e + " "];
					return t || (t = new RegExp("(^|" + nt + ")" + e + "(" + nt + "|$)")) && B(e, function(e) {
						return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
					})
				},
				ATTR: function(e, n, i) {
					return function(o) {
						var r = t.attr(o, e);
						return null == r ? "!=" === n : n ? (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(st, " ") + " ").indexOf(i) > -1 : "|=" === n ? r === i || r.slice(0, i.length + 1) === i + "-" : !1) : !0
					}
				},
				CHILD: function(e, t, n, i, o) {
					var r = "nth" !== e.slice(0, 3),
						a = "last" !== e.slice(-4),
						s = "of-type" === t;
					return 1 === i && 0 === o ? function(e) {
						return !!e.parentNode
					} : function(t, n, l) {
						var c, u, d, f, p, m, g = r !== a ? "nextSibling" : "previousSibling",
							h = t.parentNode,
							v = s && t.nodeName.toLowerCase(),
							b = !l && !s;
						if (h) {
							if (r) {
								for (; g;) {
									for (d = t; d = d[g];)
										if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
									m = g = "only" === e && !m && "nextSibling"
								}
								return !0
							}
							if (m = [a ? h.firstChild : h.lastChild], a && b) {
								for (u = h[H] || (h[H] = {}), c = u[e] || [], p = c[0] === _ && c[1], f = c[0] === _ && c[2], d = p && h.childNodes[p]; d = ++p && d && d[g] || (f = p = 0) || m.pop();)
									if (1 === d.nodeType && ++f && d === t) {
										u[e] = [_, p, f];
										break
									}
							} else if (b && (c = (t[H] || (t[H] = {}))[e]) && c[0] === _) f = c[1];
							else
								for (;
									(d = ++p && d && d[g] || (f = p = 0) || m.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (b && ((d[H] || (d[H] = {}))[e] = [_, f]), d !== t)););
							return f -= o, f === i || f % i === 0 && f / i >= 0
						}
					}
				},
				PSEUDO: function(e, n) {
					var o, r = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
					return r[H] ? r(n) : r.length > 1 ? (o = [e, e, "", n], C.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
						for (var i, o = r(e, n), a = o.length; a--;) i = et(e, o[a]), e[i] = !(t[i] = o[a])
					}) : function(e) {
						return r(e, 0, o)
					}) : r
				}
			},
			pseudos: {
				not: i(function(e) {
					var t = [],
						n = [],
						o = E(e.replace(lt, "$1"));
					return o[H] ? i(function(e, t, n, i) {
						for (var r, a = o(e, null, i, []), s = e.length; s--;)(r = a[s]) && (e[s] = !(t[s] = r))
					}) : function(e, i, r) {
						return t[0] = e, o(t, null, r, n), t[0] = null, !n.pop()
					}
				}),
				has: i(function(e) {
					return function(n) {
						return t(e, n).length > 0
					}
				}),
				contains: i(function(e) {
					return e = e.replace(wt, Ct),
						function(t) {
							return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
						}
				}),
				lang: i(function(e) {
					return pt.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(wt, Ct).toLowerCase(),
						function(t) {
							var n;
							do
								if (n = N ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
							while ((t = t.parentNode) && 1 === t.nodeType);
							return !1
						}
				}),
				target: function(t) {
					var n = e.location && e.location.hash;
					return n && n.slice(1) === t.id
				},
				root: function(e) {
					return e === O
				},
				focus: function(e) {
					return e === P.activeElement && (!P.hasFocus || P.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
				},
				enabled: function(e) {
					return e.disabled === !1
				},
				disabled: function(e) {
					return e.disabled === !0
				},
				checked: function(e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && !!e.checked || "option" === t && !!e.selected
				},
				selected: function(e) {
					return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
				},
				empty: function(e) {
					for (e = e.firstChild; e; e = e.nextSibling)
						if (e.nodeType < 6) return !1;
					return !0
				},
				parent: function(e) {
					return !C.pseudos.empty(e)
				},
				header: function(e) {
					return ht.test(e.nodeName)
				},
				input: function(e) {
					return gt.test(e.nodeName)
				},
				button: function(e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && "button" === e.type || "button" === t
				},
				text: function(e) {
					var t;
					return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
				},
				first: c(function() {
					return [0]
				}),
				last: c(function(e, t) {
					return [t - 1]
				}),
				eq: c(function(e, t, n) {
					return [0 > n ? n + t : n]
				}),
				even: c(function(e, t) {
					for (var n = 0; t > n; n += 2) e.push(n);
					return e
				}),
				odd: c(function(e, t) {
					for (var n = 1; t > n; n += 2) e.push(n);
					return e
				}),
				lt: c(function(e, t, n) {
					for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
					return e
				}),
				gt: c(function(e, t, n) {
					for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
					return e
				})
			}
		}, C.pseudos.nth = C.pseudos.eq;
		for (x in {
			radio: !0,
			checkbox: !0,
			file: !0,
			password: !0,
			image: !0
		}) C.pseudos[x] = s(x);
		for (x in {
			submit: !0,
			reset: !0
		}) C.pseudos[x] = l(x);
		return d.prototype = C.filters = C.pseudos, C.setFilters = new d, S = t.tokenize = function(e, n) {
			var i, o, r, a, s, l, c, u = W[e + " "];
			if (u) return n ? 0 : u.slice(0);
			for (s = e, l = [], c = C.preFilter; s;) {
				(!i || (o = ct.exec(s))) && (o && (s = s.slice(o[0].length) || s), l.push(r = [])), i = !1, (o = ut.exec(s)) && (i = o.shift(), r.push({
					value: i,
					type: o[0].replace(lt, " ")
				}), s = s.slice(i.length));
				for (a in C.filter) !(o = mt[a].exec(s)) || c[a] && !(o = c[a](o)) || (i = o.shift(), r.push({
					value: i,
					type: a,
					matches: o
				}), s = s.slice(i.length));
				if (!i) break
			}
			return n ? s.length : s ? t.error(e) : W(e, l).slice(0)
		}, E = t.compile = function(e, t) {
			var n, i = [],
				o = [],
				r = U[e + " "];
			if (!r) {
				for (t || (t = S(e)), n = t.length; n--;) r = b(t[n]), r[H] ? i.push(r) : o.push(r);
				r = U(e, y(o, i)), r.selector = e
			}
			return r
		}, A = t.select = function(e, t, n, i) {
			var o, r, a, s, l, c = "function" == typeof e && e,
				d = !i && S(e = c.selector || e);
			if (n = n || [], 1 === d.length) {
				if (r = d[0] = d[0].slice(0), r.length > 2 && "ID" === (a = r[0]).type && w.getById && 9 === t.nodeType && N && C.relative[r[1].type]) {
					if (t = (C.find.ID(a.matches[0].replace(wt, Ct), t) || [])[0], !t) return n;
					c && (t = t.parentNode), e = e.slice(r.shift().value.length)
				}
				for (o = mt.needsContext.test(e) ? 0 : r.length; o-- && (a = r[o], !C.relative[s = a.type]);)
					if ((l = C.find[s]) && (i = l(a.matches[0].replace(wt, Ct), yt.test(r[0].type) && u(t.parentNode) || t))) {
						if (r.splice(o, 1), e = i.length && f(r), !e) return G.apply(n, i), n;
						break
					}
			}
			return (c || E(e, d))(i, t, !N, n, yt.test(e) && u(t.parentNode) || t), n
		}, w.sortStable = H.split("").sort($).join("") === H, w.detectDuplicates = !!R, F(), w.sortDetached = o(function(e) {
			return 1 & e.compareDocumentPosition(P.createElement("div"))
		}), o(function(e) {
			return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
		}) || r("type|href|height|width", function(e, t, n) {
			return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
		}), w.attributes && o(function(e) {
			return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
		}) || r("value", function(e, t, n) {
			return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
		}), o(function(e) {
			return null == e.getAttribute("disabled")
		}) || r(tt, function(e, t, n) {
			var i;
			return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
		}), t
	}(e);
	ot.find = ct, ot.expr = ct.selectors, ot.expr[":"] = ot.expr.pseudos, ot.unique = ct.uniqueSort, ot.text = ct.getText, ot.isXMLDoc = ct.isXML, ot.contains = ct.contains;
	var ut = ot.expr.match.needsContext,
		dt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		ft = /^.[^:#\[\.,]*$/;
	ot.filter = function(e, t, n) {
		var i = t[0];
		return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? ot.find.matchesSelector(i, e) ? [i] : [] : ot.find.matches(e, ot.grep(t, function(e) {
			return 1 === e.nodeType
		}))
	}, ot.fn.extend({
		find: function(e) {
			var t, n = [],
				i = this,
				o = i.length;
			if ("string" != typeof e) return this.pushStack(ot(e).filter(function() {
				for (t = 0; o > t; t++)
					if (ot.contains(i[t], this)) return !0
			}));
			for (t = 0; o > t; t++) ot.find(e, i[t], n);
			return n = this.pushStack(o > 1 ? ot.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
		},
		filter: function(e) {
			return this.pushStack(i(this, e || [], !1))
		},
		not: function(e) {
			return this.pushStack(i(this, e || [], !0))
		},
		is: function(e) {
			return !!i(this, "string" == typeof e && ut.test(e) ? ot(e) : e || [], !1).length
		}
	});
	var pt, mt = e.document,
		gt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		ht = ot.fn.init = function(e, t) {
			var n, i;
			if (!e) return this;
			if ("string" == typeof e) {
				if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : gt.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || pt).find(e) : this.constructor(t).find(e);
				if (n[1]) {
					if (t = t instanceof ot ? t[0] : t, ot.merge(this, ot.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : mt, !0)), dt.test(n[1]) && ot.isPlainObject(t))
						for (n in t) ot.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
					return this
				}
				if (i = mt.getElementById(n[2]), i && i.parentNode) {
					if (i.id !== n[2]) return pt.find(e);
					this.length = 1, this[0] = i
				}
				return this.context = mt, this.selector = e, this
			}
			return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ot.isFunction(e) ? "undefined" != typeof pt.ready ? pt.ready(e) : e(ot) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ot.makeArray(e, this))
		};
	ht.prototype = ot.fn, pt = ot(mt);
	var vt = /^(?:parents|prev(?:Until|All))/,
		bt = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	ot.extend({
		dir: function(e, t, n) {
			for (var i = [], o = e[t]; o && 9 !== o.nodeType && (void 0 === n || 1 !== o.nodeType || !ot(o).is(n));) 1 === o.nodeType && i.push(o), o = o[t];
			return i
		},
		sibling: function(e, t) {
			for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n
		}
	}), ot.fn.extend({
		has: function(e) {
			var t, n = ot(e, this),
				i = n.length;
			return this.filter(function() {
				for (t = 0; i > t; t++)
					if (ot.contains(this, n[t])) return !0
			})
		},
		closest: function(e, t) {
			for (var n, i = 0, o = this.length, r = [], a = ut.test(e) || "string" != typeof e ? ot(e, t || this.context) : 0; o > i; i++)
				for (n = this[i]; n && n !== t; n = n.parentNode)
					if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ot.find.matchesSelector(n, e))) {
						r.push(n);
						break
					}
			return this.pushStack(r.length > 1 ? ot.unique(r) : r)
		},
		index: function(e) {
			return e ? "string" == typeof e ? ot.inArray(this[0], ot(e)) : ot.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(e, t) {
			return this.pushStack(ot.unique(ot.merge(this.get(), ot(e, t))))
		},
		addBack: function(e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), ot.each({
		parent: function(e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function(e) {
			return ot.dir(e, "parentNode")
		},
		parentsUntil: function(e, t, n) {
			return ot.dir(e, "parentNode", n)
		},
		next: function(e) {
			return o(e, "nextSibling")
		},
		prev: function(e) {
			return o(e, "previousSibling")
		},
		nextAll: function(e) {
			return ot.dir(e, "nextSibling")
		},
		prevAll: function(e) {
			return ot.dir(e, "previousSibling")
		},
		nextUntil: function(e, t, n) {
			return ot.dir(e, "nextSibling", n)
		},
		prevUntil: function(e, t, n) {
			return ot.dir(e, "previousSibling", n)
		},
		siblings: function(e) {
			return ot.sibling((e.parentNode || {}).firstChild, e)
		},
		children: function(e) {
			return ot.sibling(e.firstChild)
		},
		contents: function(e) {
			return ot.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ot.merge([], e.childNodes)
		}
	}, function(e, t) {
		ot.fn[e] = function(n, i) {
			var o = ot.map(this, t, n);
			return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = ot.filter(i, o)), this.length > 1 && (bt[e] || (o = ot.unique(o)), vt.test(e) && (o = o.reverse())), this.pushStack(o)
		}
	});
	var yt = /\S+/g,
		xt = {};
	ot.Callbacks = function(e) {
		e = "string" == typeof e ? xt[e] || r(e) : ot.extend({}, e);
		var t, n, i, o, a, s, l = [],
			c = !e.once && [],
			u = function(r) {
				for (n = e.memory && r, i = !0, a = s || 0, s = 0, o = l.length, t = !0; l && o > a; a++)
					if (l[a].apply(r[0], r[1]) === !1 && e.stopOnFalse) {
						n = !1;
						break
					}
				t = !1, l && (c ? c.length && u(c.shift()) : n ? l = [] : d.disable())
			},
			d = {
				add: function() {
					if (l) {
						var i = l.length;
						! function r(t) {
							ot.each(t, function(t, n) {
								var i = ot.type(n);
								"function" === i ? e.unique && d.has(n) || l.push(n) : n && n.length && "string" !== i && r(n)
							})
						}(arguments), t ? o = l.length : n && (s = i, u(n))
					}
					return this
				},
				remove: function() {
					return l && ot.each(arguments, function(e, n) {
						for (var i;
							(i = ot.inArray(n, l, i)) > -1;) l.splice(i, 1), t && (o >= i && o--, a >= i && a--)
					}), this
				},
				has: function(e) {
					return e ? ot.inArray(e, l) > -1 : !(!l || !l.length)
				},
				empty: function() {
					return l = [], o = 0, this
				},
				disable: function() {
					return l = c = n = void 0, this
				},
				disabled: function() {
					return !l
				},
				lock: function() {
					return c = void 0, n || d.disable(), this
				},
				locked: function() {
					return !c
				},
				fireWith: function(e, n) {
					return !l || i && !c || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? c.push(n) : u(n)), this
				},
				fire: function() {
					return d.fireWith(this, arguments), this
				},
				fired: function() {
					return !!i
				}
			};
		return d
	}, ot.extend({
		Deferred: function(e) {
			var t = [
					["resolve", "done", ot.Callbacks("once memory"), "resolved"],
					["reject", "fail", ot.Callbacks("once memory"), "rejected"],
					["notify", "progress", ot.Callbacks("memory")]
				],
				n = "pending",
				i = {
					state: function() {
						return n
					},
					always: function() {
						return o.done(arguments).fail(arguments), this
					},
					then: function() {
						var e = arguments;
						return ot.Deferred(function(n) {
							ot.each(t, function(t, r) {
								var a = ot.isFunction(e[t]) && e[t];
								o[r[1]](function() {
									var e = a && a.apply(this, arguments);
									e && ot.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
								})
							}), e = null
						}).promise()
					},
					promise: function(e) {
						return null != e ? ot.extend(e, i) : i
					}
				},
				o = {};
			return i.pipe = i.then, ot.each(t, function(e, r) {
				var a = r[2],
					s = r[3];
				i[r[1]] = a.add, s && a.add(function() {
					n = s
				}, t[1 ^ e][2].disable, t[2][2].lock), o[r[0]] = function() {
					return o[r[0] + "With"](this === o ? i : this, arguments), this
				}, o[r[0] + "With"] = a.fireWith
			}), i.promise(o), e && e.call(o, o), o
		},
		when: function(e) {
			var t, n, i, o = 0,
				r = Q.call(arguments),
				a = r.length,
				s = 1 !== a || e && ot.isFunction(e.promise) ? a : 0,
				l = 1 === s ? e : ot.Deferred(),
				c = function(e, n, i) {
					return function(o) {
						n[e] = this, i[e] = arguments.length > 1 ? Q.call(arguments) : o, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
					}
				};
			if (a > 1)
				for (t = new Array(a), n = new Array(a), i = new Array(a); a > o; o++) r[o] && ot.isFunction(r[o].promise) ? r[o].promise().done(c(o, i, r)).fail(l.reject).progress(c(o, n, t)) : --s;
			return s || l.resolveWith(i, r), l.promise()
		}
	});
	var wt;
	ot.fn.ready = function(e) {
		return ot.ready.promise().done(e), this
	}, ot.extend({
		isReady: !1,
		readyWait: 1,
		holdReady: function(e) {
			e ? ot.readyWait++ : ot.ready(!0)
		},
		ready: function(e) {
			if (e === !0 ? !--ot.readyWait : !ot.isReady) {
				if (!mt.body) return setTimeout(ot.ready);
				ot.isReady = !0, e !== !0 && --ot.readyWait > 0 || (wt.resolveWith(mt, [ot]), ot.fn.triggerHandler && (ot(mt).triggerHandler("ready"), ot(mt).off("ready")))
			}
		}
	}), ot.ready.promise = function(t) {
		if (!wt)
			if (wt = ot.Deferred(), "complete" === mt.readyState) setTimeout(ot.ready);
			else if (mt.addEventListener) mt.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1);
		else {
			mt.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
			var n = !1;
			try {
				n = null == e.frameElement && mt.documentElement
			} catch (i) {}
			n && n.doScroll && ! function o() {
				if (!ot.isReady) {
					try {
						n.doScroll("left")
					} catch (e) {
						return setTimeout(o, 50)
					}
					a(), ot.ready()
				}
			}()
		}
		return wt.promise(t)
	};
	var Ct, kt = "undefined";
	for (Ct in ot(nt)) break;
	nt.ownLast = "0" !== Ct, nt.inlineBlockNeedsLayout = !1, ot(function() {
			var e, t, n, i;
			n = mt.getElementsByTagName("body")[0], n && n.style && (t = mt.createElement("div"), i = mt.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== kt && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", nt.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
		}),
		function() {
			var e = mt.createElement("div");
			if (null == nt.deleteExpando) {
				nt.deleteExpando = !0;
				try {
					delete e.test
				} catch (t) {
					nt.deleteExpando = !1
				}
			}
			e = null
		}(), ot.acceptData = function(e) {
			var t = ot.noData[(e.nodeName + " ").toLowerCase()],
				n = +e.nodeType || 1;
			return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
		};
	var Tt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		St = /([A-Z])/g;
	ot.extend({
		cache: {},
		noData: {
			"applet ": !0,
			"embed ": !0,
			"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
		},
		hasData: function(e) {
			return e = e.nodeType ? ot.cache[e[ot.expando]] : e[ot.expando], !!e && !c(e)
		},
		data: function(e, t, n) {
			return u(e, t, n)
		},
		removeData: function(e, t) {
			return d(e, t)
		},
		_data: function(e, t, n) {
			return u(e, t, n, !0)
		},
		_removeData: function(e, t) {
			return d(e, t, !0)
		}
	}), ot.fn.extend({
		data: function(e, t) {
			var n, i, o, r = this[0],
				a = r && r.attributes;
			if (void 0 === e) {
				if (this.length && (o = ot.data(r), 1 === r.nodeType && !ot._data(r, "parsedAttrs"))) {
					for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = ot.camelCase(i.slice(5)), l(r, i, o[i])));
					ot._data(r, "parsedAttrs", !0)
				}
				return o
			}
			return "object" == typeof e ? this.each(function() {
				ot.data(this, e)
			}) : arguments.length > 1 ? this.each(function() {
				ot.data(this, e, t)
			}) : r ? l(r, e, ot.data(r, e)) : void 0
		},
		removeData: function(e) {
			return this.each(function() {
				ot.removeData(this, e)
			})
		}
	}), ot.extend({
		queue: function(e, t, n) {
			var i;
			return e ? (t = (t || "fx") + "queue", i = ot._data(e, t), n && (!i || ot.isArray(n) ? i = ot._data(e, t, ot.makeArray(n)) : i.push(n)), i || []) : void 0
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var n = ot.queue(e, t),
				i = n.length,
				o = n.shift(),
				r = ot._queueHooks(e, t),
				a = function() {
					ot.dequeue(e, t)
				};
			"inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, a, r)), !i && r && r.empty.fire()
		},
		_queueHooks: function(e, t) {
			var n = t + "queueHooks";
			return ot._data(e, n) || ot._data(e, n, {
				empty: ot.Callbacks("once memory").add(function() {
					ot._removeData(e, t + "queue"), ot._removeData(e, n)
				})
			})
		}
	}), ot.fn.extend({
		queue: function(e, t) {
			var n = 2;
			return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ot.queue(this[0], e) : void 0 === t ? this : this.each(function() {
				var n = ot.queue(this, e, t);
				ot._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ot.dequeue(this, e)
			})
		},
		dequeue: function(e) {
			return this.each(function() {
				ot.dequeue(this, e)
			})
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e, t) {
			var n, i = 1,
				o = ot.Deferred(),
				r = this,
				a = this.length,
				s = function() {
					--i || o.resolveWith(r, [r])
				};
			for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = ot._data(r[a], e + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
			return s(), o.promise(t)
		}
	});
	var Et = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		At = ["Top", "Right", "Bottom", "Left"],
		Dt = function(e, t) {
			return e = t || e, "none" === ot.css(e, "display") || !ot.contains(e.ownerDocument, e)
		},
		jt = ot.access = function(e, t, n, i, o, r, a) {
			var s = 0,
				l = e.length,
				c = null == n;
			if ("object" === ot.type(n)) {
				o = !0;
				for (s in n) ot.access(e, t, s, n[s], !0, r, a)
			} else if (void 0 !== i && (o = !0, ot.isFunction(i) || (a = !0), c && (a ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
				return c.call(ot(e), n)
			})), t))
				for (; l > s; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
			return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
		},
		Rt = /^(?:checkbox|radio)$/i;
	! function() {
		var e = mt.createElement("input"),
			t = mt.createElement("div"),
			n = mt.createDocumentFragment();
		if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", nt.leadingWhitespace = 3 === t.firstChild.nodeType, nt.tbody = !t.getElementsByTagName("tbody").length, nt.htmlSerialize = !!t.getElementsByTagName("link").length, nt.html5Clone = "<:nav></:nav>" !== mt.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), nt.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", nt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", nt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, nt.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
			nt.noCloneEvent = !1
		}), t.cloneNode(!0).click()), null == nt.deleteExpando) {
			nt.deleteExpando = !0;
			try {
				delete t.test
			} catch (i) {
				nt.deleteExpando = !1
			}
		}
	}(),
	function() {
		var t, n, i = mt.createElement("div");
		for (t in {
			submit: !0,
			change: !0,
			focusin: !0
		}) n = "on" + t, (nt[t + "Bubbles"] = n in e) || (i.setAttribute(n, "t"), nt[t + "Bubbles"] = i.attributes[n].expando === !1);
		i = null
	}();
	var Ft = /^(?:input|select|textarea)$/i,
		Pt = /^key/,
		Ot = /^(?:mouse|pointer|contextmenu)|click/,
		Nt = /^(?:focusinfocus|focusoutblur)$/,
		qt = /^([^.]*)(?:\.(.+)|)$/;
	ot.event = {
		global: {},
		add: function(e, t, n, i, o) {
			var r, a, s, l, c, u, d, f, p, m, g, h = ot._data(e);
			if (h) {
				for (n.handler && (l = n, n = l.handler, o = l.selector), n.guid || (n.guid = ot.guid++), (a = h.events) || (a = h.events = {}), (u = h.handle) || (u = h.handle = function(e) {
					return typeof ot === kt || e && ot.event.triggered === e.type ? void 0 : ot.event.dispatch.apply(u.elem, arguments)
				}, u.elem = e), t = (t || "").match(yt) || [""], s = t.length; s--;) r = qt.exec(t[s]) || [], p = g = r[1], m = (r[2] || "").split(".").sort(), p && (c = ot.event.special[p] || {}, p = (o ? c.delegateType : c.bindType) || p, c = ot.event.special[p] || {}, d = ot.extend({
					type: p,
					origType: g,
					data: i,
					handler: n,
					guid: n.guid,
					selector: o,
					needsContext: o && ot.expr.match.needsContext.test(o),
					namespace: m.join(".")
				}, l), (f = a[p]) || (f = a[p] = [], f.delegateCount = 0, c.setup && c.setup.call(e, i, m, u) !== !1 || (e.addEventListener ? e.addEventListener(p, u, !1) : e.attachEvent && e.attachEvent("on" + p, u))), c.add && (c.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, d) : f.push(d), ot.event.global[p] = !0);
				e = null
			}
		},
		remove: function(e, t, n, i, o) {
			var r, a, s, l, c, u, d, f, p, m, g, h = ot.hasData(e) && ot._data(e);
			if (h && (u = h.events)) {
				for (t = (t || "").match(yt) || [""], c = t.length; c--;)
					if (s = qt.exec(t[c]) || [], p = g = s[1], m = (s[2] || "").split(".").sort(), p) {
						for (d = ot.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, f = u[p] || [], s = s[2] && new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = f.length; r--;) a = f[r], !o && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (f.splice(r, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));
						l && !f.length && (d.teardown && d.teardown.call(e, m, h.handle) !== !1 || ot.removeEvent(e, p, h.handle), delete u[p])
					} else
						for (p in u) ot.event.remove(e, p + t[c], n, i, !0);
				ot.isEmptyObject(u) && (delete h.handle, ot._removeData(e, "events"))
			}
		},
		trigger: function(t, n, i, o) {
			var r, a, s, l, c, u, d, f = [i || mt],
				p = tt.call(t, "type") ? t.type : t,
				m = tt.call(t, "namespace") ? t.namespace.split(".") : [];
			if (s = u = i = i || mt, 3 !== i.nodeType && 8 !== i.nodeType && !Nt.test(p + ot.event.triggered) && (p.indexOf(".") >= 0 && (m = p.split("."), p = m.shift(), m.sort()), a = p.indexOf(":") < 0 && "on" + p, t = t[ot.expando] ? t : new ot.Event(p, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = m.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : ot.makeArray(n, [t]), c = ot.event.special[p] || {}, o || !c.trigger || c.trigger.apply(i, n) !== !1)) {
				if (!o && !c.noBubble && !ot.isWindow(i)) {
					for (l = c.delegateType || p, Nt.test(l + p) || (s = s.parentNode); s; s = s.parentNode) f.push(s), u = s;
					u === (i.ownerDocument || mt) && f.push(u.defaultView || u.parentWindow || e)
				}
				for (d = 0;
					(s = f[d++]) && !t.isPropagationStopped();) t.type = d > 1 ? l : c.bindType || p, r = (ot._data(s, "events") || {})[t.type] && ot._data(s, "handle"), r && r.apply(s, n), r = a && s[a], r && r.apply && ot.acceptData(s) && (t.result = r.apply(s, n), t.result === !1 && t.preventDefault());
				if (t.type = p, !o && !t.isDefaultPrevented() && (!c._default || c._default.apply(f.pop(), n) === !1) && ot.acceptData(i) && a && i[p] && !ot.isWindow(i)) {
					u = i[a], u && (i[a] = null), ot.event.triggered = p;
					try {
						i[p]()
					} catch (g) {}
					ot.event.triggered = void 0, u && (i[a] = u)
				}
				return t.result
			}
		},
		dispatch: function(e) {
			e = ot.event.fix(e);
			var t, n, i, o, r, a = [],
				s = Q.call(arguments),
				l = (ot._data(this, "events") || {})[e.type] || [],
				c = ot.event.special[e.type] || {};
			if (s[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
				for (a = ot.event.handlers.call(this, e, l), t = 0;
					(o = a[t++]) && !e.isPropagationStopped();)
					for (e.currentTarget = o.elem, r = 0;
						(i = o.handlers[r++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, n = ((ot.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, s), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
				return c.postDispatch && c.postDispatch.call(this, e), e.result
			}
		},
		handlers: function(e, t) {
			var n, i, o, r, a = [],
				s = t.delegateCount,
				l = e.target;
			if (s && l.nodeType && (!e.button || "click" !== e.type))
				for (; l != this; l = l.parentNode || this)
					if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
						for (o = [], r = 0; s > r; r++) i = t[r], n = i.selector + " ", void 0 === o[n] && (o[n] = i.needsContext ? ot(n, this).index(l) >= 0 : ot.find(n, this, null, [l]).length), o[n] && o.push(i);
						o.length && a.push({
							elem: l,
							handlers: o
						})
					}
			return s < t.length && a.push({
				elem: this,
				handlers: t.slice(s)
			}), a
		},
		fix: function(e) {
			if (e[ot.expando]) return e;
			var t, n, i, o = e.type,
				r = e,
				a = this.fixHooks[o];
			for (a || (this.fixHooks[o] = a = Ot.test(o) ? this.mouseHooks : Pt.test(o) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new ot.Event(r), t = i.length; t--;) n = i[t], e[n] = r[n];
			return e.target || (e.target = r.srcElement || mt), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, r) : e
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(e, t) {
				return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(e, t) {
				var n, i, o, r = t.button,
					a = t.fromElement;
				return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || mt, o = i.documentElement, n = i.body, e.pageX = t.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
			}
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					if (this !== m() && this.focus) try {
						return this.focus(), !1
					} catch (e) {}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					return this === m() && this.blur ? (this.blur(), !1) : void 0
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					return ot.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
				},
				_default: function(e) {
					return ot.nodeName(e.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(e) {
					void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
				}
			}
		},
		simulate: function(e, t, n, i) {
			var o = ot.extend(new ot.Event, n, {
				type: e,
				isSimulated: !0,
				originalEvent: {}
			});
			i ? ot.event.trigger(o, null, t) : ot.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault()
		}
	}, ot.removeEvent = mt.removeEventListener ? function(e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n, !1)
	} : function(e, t, n) {
		var i = "on" + t;
		e.detachEvent && (typeof e[i] === kt && (e[i] = null), e.detachEvent(i, n))
	}, ot.Event = function(e, t) {
		return this instanceof ot.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? f : p) : this.type = e, t && ot.extend(this, t), this.timeStamp = e && e.timeStamp || ot.now(), void(this[ot.expando] = !0)) : new ot.Event(e, t)
	}, ot.Event.prototype = {
		isDefaultPrevented: p,
		isPropagationStopped: p,
		isImmediatePropagationStopped: p,
		preventDefault: function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = f, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
		},
		stopPropagation: function() {
			var e = this.originalEvent;
			this.isPropagationStopped = f, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
			this.isImmediatePropagationStopped = f, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
		}
	}, ot.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(e, t) {
		ot.event.special[e] = {
			delegateType: t,
			bindType: t,
			handle: function(e) {
				var n, i = this,
					o = e.relatedTarget,
					r = e.handleObj;
				return (!o || o !== i && !ot.contains(i, o)) && (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
			}
		}
	}), nt.submitBubbles || (ot.event.special.submit = {
		setup: function() {
			return ot.nodeName(this, "form") ? !1 : void ot.event.add(this, "click._submit keypress._submit", function(e) {
				var t = e.target,
					n = ot.nodeName(t, "input") || ot.nodeName(t, "button") ? t.form : void 0;
				n && !ot._data(n, "submitBubbles") && (ot.event.add(n, "submit._submit", function(e) {
					e._submit_bubble = !0
				}), ot._data(n, "submitBubbles", !0))
			})
		},
		postDispatch: function(e) {
			e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ot.event.simulate("submit", this.parentNode, e, !0))
		},
		teardown: function() {
			return ot.nodeName(this, "form") ? !1 : void ot.event.remove(this, "._submit")
		}
	}), nt.changeBubbles || (ot.event.special.change = {
		setup: function() {
			return Ft.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ot.event.add(this, "propertychange._change", function(e) {
				"checked" === e.originalEvent.propertyName && (this._just_changed = !0)
			}), ot.event.add(this, "click._change", function(e) {
				this._just_changed && !e.isTrigger && (this._just_changed = !1), ot.event.simulate("change", this, e, !0)
			})), !1) : void ot.event.add(this, "beforeactivate._change", function(e) {
				var t = e.target;
				Ft.test(t.nodeName) && !ot._data(t, "changeBubbles") && (ot.event.add(t, "change._change", function(e) {
					!this.parentNode || e.isSimulated || e.isTrigger || ot.event.simulate("change", this.parentNode, e, !0)
				}), ot._data(t, "changeBubbles", !0))
			})
		},
		handle: function(e) {
			var t = e.target;
			return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
		},
		teardown: function() {
			return ot.event.remove(this, "._change"), !Ft.test(this.nodeName)
		}
	}), nt.focusinBubbles || ot.each({
		focus: "focusin",
		blur: "focusout"
	}, function(e, t) {
		var n = function(e) {
			ot.event.simulate(t, e.target, ot.event.fix(e), !0)
		};
		ot.event.special[t] = {
			setup: function() {
				var i = this.ownerDocument || this,
					o = ot._data(i, t);
				o || i.addEventListener(e, n, !0), ot._data(i, t, (o || 0) + 1)
			},
			teardown: function() {
				var i = this.ownerDocument || this,
					o = ot._data(i, t) - 1;
				o ? ot._data(i, t, o) : (i.removeEventListener(e, n, !0), ot._removeData(i, t))
			}
		}
	}), ot.fn.extend({
		on: function(e, t, n, i, o) {
			var r, a;
			if ("object" == typeof e) {
				"string" != typeof t && (n = n || t, t = void 0);
				for (r in e) this.on(r, t, n, e[r], o);
				return this
			}
			if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i === !1) i = p;
			else if (!i) return this;
			return 1 === o && (a = i, i = function(e) {
				return ot().off(e), a.apply(this, arguments)
			}, i.guid = a.guid || (a.guid = ot.guid++)), this.each(function() {
				ot.event.add(this, e, i, n, t)
			})
		},
		one: function(e, t, n, i) {
			return this.on(e, t, n, i, 1)
		},
		off: function(e, t, n) {
			var i, o;
			if (e && e.preventDefault && e.handleObj) return i = e.handleObj, ot(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
			if ("object" == typeof e) {
				for (o in e) this.off(o, t, e[o]);
				return this
			}
			return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = p), this.each(function() {
				ot.event.remove(this, e, n, t)
			})
		},
		trigger: function(e, t) {
			return this.each(function() {
				ot.event.trigger(e, t, this)
			})
		},
		triggerHandler: function(e, t) {
			var n = this[0];
			return n ? ot.event.trigger(e, t, n, !0) : void 0
		}
	});
	var Lt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		zt = / jQuery\d+="(?:null|\d+)"/g,
		It = new RegExp("<(?:" + Lt + ")[\\s/>]", "i"),
		Ht = /^\s+/,
		Mt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		_t = /<([\w:]+)/,
		Vt = /<tbody/i,
		Bt = /<|&#?\w+;/,
		Wt = /<(?:script|style|link)/i,
		Ut = /checked\s*(?:[^=]|=\s*.checked.)/i,
		$t = /^$|\/(?:java|ecma)script/i,
		Xt = /^true\/(.*)/,
		Yt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		Qt = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			area: [1, "<map>", "</map>"],
			param: [1, "<object>", "</object>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: nt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
		},
		Kt = g(mt),
		Zt = Kt.appendChild(mt.createElement("div"));
	Qt.optgroup = Qt.option, Qt.tbody = Qt.tfoot = Qt.colgroup = Qt.caption = Qt.thead, Qt.th = Qt.td, ot.extend({
		clone: function(e, t, n) {
			var i, o, r, a, s, l = ot.contains(e.ownerDocument, e);
			if (nt.html5Clone || ot.isXMLDoc(e) || !It.test("<" + e.nodeName + ">") ? r = e.cloneNode(!0) : (Zt.innerHTML = e.outerHTML, Zt.removeChild(r = Zt.firstChild)), !(nt.noCloneEvent && nt.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ot.isXMLDoc(e)))
				for (i = h(r), s = h(e), a = 0; null != (o = s[a]); ++a) i[a] && k(o, i[a]);
			if (t)
				if (n)
					for (s = s || h(e), i = i || h(r), a = 0; null != (o = s[a]); a++) C(o, i[a]);
				else C(e, r);
			return i = h(r, "script"), i.length > 0 && w(i, !l && h(e, "script")), i = s = o = null, r
		},
		buildFragment: function(e, t, n, i) {
			for (var o, r, a, s, l, c, u, d = e.length, f = g(t), p = [], m = 0; d > m; m++)
				if (r = e[m], r || 0 === r)
					if ("object" === ot.type(r)) ot.merge(p, r.nodeType ? [r] : r);
					else if (Bt.test(r)) {
				for (s = s || f.appendChild(t.createElement("div")), l = (_t.exec(r) || ["", ""])[1].toLowerCase(), u = Qt[l] || Qt._default, s.innerHTML = u[1] + r.replace(Mt, "<$1></$2>") + u[2], o = u[0]; o--;) s = s.lastChild;
				if (!nt.leadingWhitespace && Ht.test(r) && p.push(t.createTextNode(Ht.exec(r)[0])), !nt.tbody)
					for (r = "table" !== l || Vt.test(r) ? "<table>" !== u[1] || Vt.test(r) ? 0 : s : s.firstChild, o = r && r.childNodes.length; o--;) ot.nodeName(c = r.childNodes[o], "tbody") && !c.childNodes.length && r.removeChild(c);
				for (ot.merge(p, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
				s = f.lastChild
			} else p.push(t.createTextNode(r));
			for (s && f.removeChild(s), nt.appendChecked || ot.grep(h(p, "input"), v), m = 0; r = p[m++];)
				if ((!i || -1 === ot.inArray(r, i)) && (a = ot.contains(r.ownerDocument, r), s = h(f.appendChild(r), "script"), a && w(s), n))
					for (o = 0; r = s[o++];) $t.test(r.type || "") && n.push(r);
			return s = null, f
		},
		cleanData: function(e, t) {
			for (var n, i, o, r, a = 0, s = ot.expando, l = ot.cache, c = nt.deleteExpando, u = ot.event.special; null != (n = e[a]); a++)
				if ((t || ot.acceptData(n)) && (o = n[s], r = o && l[o])) {
					if (r.events)
						for (i in r.events) u[i] ? ot.event.remove(n, i) : ot.removeEvent(n, i, r.handle);
					l[o] && (delete l[o], c ? delete n[s] : typeof n.removeAttribute !== kt ? n.removeAttribute(s) : n[s] = null, Y.push(o))
				}
		}
	}), ot.fn.extend({
		text: function(e) {
			return jt(this, function(e) {
				return void 0 === e ? ot.text(this) : this.empty().append((this[0] && this[0].ownerDocument || mt).createTextNode(e))
			}, null, e, arguments.length)
		},
		append: function() {
			return this.domManip(arguments, function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = b(this, e);
					t.appendChild(e)
				}
			})
		},
		prepend: function() {
			return this.domManip(arguments, function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = b(this, e);
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
			for (var n, i = e ? ot.filter(e, this) : this, o = 0; null != (n = i[o]); o++) t || 1 !== n.nodeType || ot.cleanData(h(n)), n.parentNode && (t && ot.contains(n.ownerDocument, n) && w(h(n, "script")), n.parentNode.removeChild(n));
			return this
		},
		empty: function() {
			for (var e, t = 0; null != (e = this[t]); t++) {
				for (1 === e.nodeType && ot.cleanData(h(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
				e.options && ot.nodeName(e, "select") && (e.options.length = 0)
			}
			return this
		},
		clone: function(e, t) {
			return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
				return ot.clone(this, e, t)
			})
		},
		html: function(e) {
			return jt(this, function(e) {
				var t = this[0] || {},
					n = 0,
					i = this.length;
				if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(zt, "") : void 0;
				if (!("string" != typeof e || Wt.test(e) || !nt.htmlSerialize && It.test(e) || !nt.leadingWhitespace && Ht.test(e) || Qt[(_t.exec(e) || ["", ""])[1].toLowerCase()])) {
					e = e.replace(Mt, "<$1></$2>");
					try {
						for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (ot.cleanData(h(t, !1)), t.innerHTML = e);
						t = 0
					} catch (o) {}
				}
				t && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function() {
			var e = arguments[0];
			return this.domManip(arguments, function(t) {
				e = this.parentNode, ot.cleanData(h(this)), e && e.replaceChild(t, this)
			}), e && (e.length || e.nodeType) ? this : this.remove()
		},
		detach: function(e) {
			return this.remove(e, !0)
		},
		domManip: function(e, t) {
			e = K.apply([], e);
			var n, i, o, r, a, s, l = 0,
				c = this.length,
				u = this,
				d = c - 1,
				f = e[0],
				p = ot.isFunction(f);
			if (p || c > 1 && "string" == typeof f && !nt.checkClone && Ut.test(f)) return this.each(function(n) {
				var i = u.eq(n);
				p && (e[0] = f.call(this, n, i.html())), i.domManip(e, t)
			});
			if (c && (s = ot.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
				for (r = ot.map(h(s, "script"), y), o = r.length; c > l; l++) i = s, l !== d && (i = ot.clone(i, !0, !0), o && ot.merge(r, h(i, "script"))), t.call(this[l], i, l);
				if (o)
					for (a = r[r.length - 1].ownerDocument, ot.map(r, x), l = 0; o > l; l++) i = r[l], $t.test(i.type || "") && !ot._data(i, "globalEval") && ot.contains(a, i) && (i.src ? ot._evalUrl && ot._evalUrl(i.src) : ot.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Yt, "")));
				s = n = null
			}
			return this
		}
	}), ot.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(e, t) {
		ot.fn[e] = function(e) {
			for (var n, i = 0, o = [], r = ot(e), a = r.length - 1; a >= i; i++) n = i === a ? this : this.clone(!0), ot(r[i])[t](n), Z.apply(o, n.get());
			return this.pushStack(o)
		}
	});
	var Gt, Jt = {};
	! function() {
		var e;
		nt.shrinkWrapBlocks = function() {
			if (null != e) return e;
			e = !1;
			var t, n, i;
			return n = mt.getElementsByTagName("body")[0], n && n.style ? (t = mt.createElement("div"), i = mt.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== kt && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(mt.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(i), e) : void 0
		}
	}();
	var en, tn, nn = /^margin/,
		on = new RegExp("^(" + Et + ")(?!px)[a-z%]+$", "i"),
		rn = /^(top|right|bottom|left)$/;
	e.getComputedStyle ? (en = function(t) {
			return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
		}, tn = function(e, t, n) {
			var i, o, r, a, s = e.style;
			return n = n || en(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || ot.contains(e.ownerDocument, e) || (a = ot.style(e, t)), on.test(a) && nn.test(t) && (i = s.width, o = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = o, s.maxWidth = r)), void 0 === a ? a : a + ""
		}) : mt.documentElement.currentStyle && (en = function(e) {
			return e.currentStyle
		}, tn = function(e, t, n) {
			var i, o, r, a, s = e.style;
			return n = n || en(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), on.test(a) && !rn.test(t) && (i = s.left, o = e.runtimeStyle, r = o && o.left, r && (o.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = i, r && (o.left = r)), void 0 === a ? a : a + "" || "auto"
		}),
		function() {
			function t() {
				var t, n, i, o;
				n = mt.getElementsByTagName("body")[0], n && n.style && (t = mt.createElement("div"), i = mt.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", r = a = !1, l = !0, e.getComputedStyle && (r = "1%" !== (e.getComputedStyle(t, null) || {}).top, a = "4px" === (e.getComputedStyle(t, null) || {
					width: "4px"
				}).width, o = t.appendChild(mt.createElement("div")), o.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", o.style.marginRight = o.style.width = "0", t.style.width = "1px", l = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight), t.removeChild(o)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = t.getElementsByTagName("td"), o[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === o[0].offsetHeight, s && (o[0].style.display = "", o[1].style.display = "none", s = 0 === o[0].offsetHeight), n.removeChild(i))
			}
			var n, i, o, r, a, s, l;
			n = mt.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", o = n.getElementsByTagName("a")[0], i = o && o.style, i && (i.cssText = "float:left;opacity:.5", nt.opacity = "0.5" === i.opacity, nt.cssFloat = !!i.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", nt.clearCloneStyle = "content-box" === n.style.backgroundClip, nt.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, ot.extend(nt, {
				reliableHiddenOffsets: function() {
					return null == s && t(), s
				},
				boxSizingReliable: function() {
					return null == a && t(), a
				},
				pixelPosition: function() {
					return null == r && t(), r
				},
				reliableMarginRight: function() {
					return null == l && t(), l
				}
			}))
		}(), ot.swap = function(e, t, n, i) {
			var o, r, a = {};
			for (r in t) a[r] = e.style[r], e.style[r] = t[r];
			o = n.apply(e, i || []);
			for (r in t) e.style[r] = a[r];
			return o
		};
	var an = /alpha\([^)]*\)/i,
		sn = /opacity\s*=\s*([^)]*)/,
		ln = /^(none|table(?!-c[ea]).+)/,
		cn = new RegExp("^(" + Et + ")(.*)$", "i"),
		un = new RegExp("^([+-])=(" + Et + ")", "i"),
		dn = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		fn = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		pn = ["Webkit", "O", "Moz", "ms"];
	ot.extend({
		cssHooks: {
			opacity: {
				get: function(e, t) {
					if (t) {
						var n = tn(e, "opacity");
						return "" === n ? "1" : n
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
			"float": nt.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function(e, t, n, i) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var o, r, a, s = ot.camelCase(t),
					l = e.style;
				if (t = ot.cssProps[s] || (ot.cssProps[s] = A(l, s)), a = ot.cssHooks[t] || ot.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(e, !1, i)) ? o : l[t];
				if (r = typeof n, "string" === r && (o = un.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(ot.css(e, t)), r = "number"), null != n && n === n && ("number" !== r || ot.cssNumber[s] || (n += "px"), nt.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, i))))) try {
					l[t] = n
				} catch (c) {}
			}
		},
		css: function(e, t, n, i) {
			var o, r, a, s = ot.camelCase(t);
			return t = ot.cssProps[s] || (ot.cssProps[s] = A(e.style, s)), a = ot.cssHooks[t] || ot.cssHooks[s], a && "get" in a && (r = a.get(e, !0, n)), void 0 === r && (r = tn(e, t, i)), "normal" === r && t in fn && (r = fn[t]), "" === n || n ? (o = parseFloat(r), n === !0 || ot.isNumeric(o) ? o || 0 : r) : r
		}
	}), ot.each(["height", "width"], function(e, t) {
		ot.cssHooks[t] = {
			get: function(e, n, i) {
				return n ? ln.test(ot.css(e, "display")) && 0 === e.offsetWidth ? ot.swap(e, dn, function() {
					return F(e, t, i)
				}) : F(e, t, i) : void 0
			},
			set: function(e, n, i) {
				var o = i && en(e);
				return j(e, n, i ? R(e, t, i, nt.boxSizing && "border-box" === ot.css(e, "boxSizing", !1, o), o) : 0)
			}
		}
	}), nt.opacity || (ot.cssHooks.opacity = {
		get: function(e, t) {
			return sn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
		},
		set: function(e, t) {
			var n = e.style,
				i = e.currentStyle,
				o = ot.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
				r = i && i.filter || n.filter || "";
			n.zoom = 1, (t >= 1 || "" === t) && "" === ot.trim(r.replace(an, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = an.test(r) ? r.replace(an, o) : r + " " + o)
		}
	}), ot.cssHooks.marginRight = E(nt.reliableMarginRight, function(e, t) {
		return t ? ot.swap(e, {
			display: "inline-block"
		}, tn, [e, "marginRight"]) : void 0
	}), ot.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(e, t) {
		ot.cssHooks[e + t] = {
			expand: function(n) {
				for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[e + At[i] + t] = r[i] || r[i - 2] || r[0];
				return o
			}
		}, nn.test(e) || (ot.cssHooks[e + t].set = j)
	}), ot.fn.extend({
		css: function(e, t) {
			return jt(this, function(e, t, n) {
				var i, o, r = {},
					a = 0;
				if (ot.isArray(t)) {
					for (i = en(e), o = t.length; o > a; a++) r[t[a]] = ot.css(e, t[a], !1, i);
					return r
				}
				return void 0 !== n ? ot.style(e, t, n) : ot.css(e, t)
			}, e, t, arguments.length > 1)
		},
		show: function() {
			return D(this, !0)
		},
		hide: function() {
			return D(this)
		},
		toggle: function(e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
				Dt(this) ? ot(this).show() : ot(this).hide()
			})
		}
	}), ot.Tween = P, P.prototype = {
		constructor: P,
		init: function(e, t, n, i, o, r) {
			this.elem = e, this.prop = n, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (ot.cssNumber[n] ? "" : "px")
		},
		cur: function() {
			var e = P.propHooks[this.prop];
			return e && e.get ? e.get(this) : P.propHooks._default.get(this)
		},
		run: function(e) {
			var t, n = P.propHooks[this.prop];
			return this.pos = t = this.options.duration ? ot.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : P.propHooks._default.set(this), this
		}
	}, P.prototype.init.prototype = P.prototype, P.propHooks = {
		_default: {
			get: function(e) {
				var t;
				return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ot.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
			},
			set: function(e) {
				ot.fx.step[e.prop] ? ot.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ot.cssProps[e.prop]] || ot.cssHooks[e.prop]) ? ot.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
			}
		}
	}, P.propHooks.scrollTop = P.propHooks.scrollLeft = {
		set: function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, ot.easing = {
		linear: function(e) {
			return e
		},
		swing: function(e) {
			return .5 - Math.cos(e * Math.PI) / 2
		}
	}, ot.fx = P.prototype.init, ot.fx.step = {};
	var mn, gn, hn = /^(?:toggle|show|hide)$/,
		vn = new RegExp("^(?:([+-])=|)(" + Et + ")([a-z%]*)$", "i"),
		bn = /queueHooks$/,
		yn = [L],
		xn = {
			"*": [
				function(e, t) {
					var n = this.createTween(e, t),
						i = n.cur(),
						o = vn.exec(t),
						r = o && o[3] || (ot.cssNumber[e] ? "" : "px"),
						a = (ot.cssNumber[e] || "px" !== r && +i) && vn.exec(ot.css(n.elem, e)),
						s = 1,
						l = 20;
					if (a && a[3] !== r) {
						r = r || a[3], o = o || [], a = +i || 1;
						do s = s || ".5", a /= s, ot.style(n.elem, e, a + r); while (s !== (s = n.cur() / i) && 1 !== s && --l)
					}
					return o && (a = n.start = +a || +i || 0, n.unit = r, n.end = o[1] ? a + (o[1] + 1) * o[2] : +o[2]), n
				}
			]
		};
	ot.Animation = ot.extend(I, {
			tweener: function(e, t) {
				ot.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
				for (var n, i = 0, o = e.length; o > i; i++) n = e[i], xn[n] = xn[n] || [], xn[n].unshift(t)
			},
			prefilter: function(e, t) {
				t ? yn.unshift(e) : yn.push(e)
			}
		}), ot.speed = function(e, t, n) {
			var i = e && "object" == typeof e ? ot.extend({}, e) : {
				complete: n || !n && t || ot.isFunction(e) && e,
				duration: e,
				easing: n && t || t && !ot.isFunction(t) && t
			};
			return i.duration = ot.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ot.fx.speeds ? ot.fx.speeds[i.duration] : ot.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
				ot.isFunction(i.old) && i.old.call(this), i.queue && ot.dequeue(this, i.queue)
			}, i
		}, ot.fn.extend({
			fadeTo: function(e, t, n, i) {
				return this.filter(Dt).css("opacity", 0).show().end().animate({
					opacity: t
				}, e, n, i)
			},
			animate: function(e, t, n, i) {
				var o = ot.isEmptyObject(e),
					r = ot.speed(t, n, i),
					a = function() {
						var t = I(this, ot.extend({}, e), r);
						(o || ot._data(this, "finish")) && t.stop(!0)
					};
				return a.finish = a, o || r.queue === !1 ? this.each(a) : this.queue(r.queue, a)
			},
			stop: function(e, t, n) {
				var i = function(e) {
					var t = e.stop;
					delete e.stop, t(n)
				};
				return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
					var t = !0,
						o = null != e && e + "queueHooks",
						r = ot.timers,
						a = ot._data(this);
					if (o) a[o] && a[o].stop && i(a[o]);
					else
						for (o in a) a[o] && a[o].stop && bn.test(o) && i(a[o]);
					for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
					(t || !n) && ot.dequeue(this, e)
				})
			},
			finish: function(e) {
				return e !== !1 && (e = e || "fx"), this.each(function() {
					var t, n = ot._data(this),
						i = n[e + "queue"],
						o = n[e + "queueHooks"],
						r = ot.timers,
						a = i ? i.length : 0;
					for (n.finish = !0, ot.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
					for (t = 0; a > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
					delete n.finish
				})
			}
		}), ot.each(["toggle", "show", "hide"], function(e, t) {
			var n = ot.fn[t];
			ot.fn[t] = function(e, i, o) {
				return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(N(t, !0), e, i, o)
			}
		}), ot.each({
			slideDown: N("show"),
			slideUp: N("hide"),
			slideToggle: N("toggle"),
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
			ot.fn[e] = function(e, n, i) {
				return this.animate(t, e, n, i)
			}
		}), ot.timers = [], ot.fx.tick = function() {
			var e, t = ot.timers,
				n = 0;
			for (mn = ot.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
			t.length || ot.fx.stop(), mn = void 0
		}, ot.fx.timer = function(e) {
			ot.timers.push(e), e() ? ot.fx.start() : ot.timers.pop()
		}, ot.fx.interval = 13, ot.fx.start = function() {
			gn || (gn = setInterval(ot.fx.tick, ot.fx.interval))
		}, ot.fx.stop = function() {
			clearInterval(gn), gn = null
		}, ot.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, ot.fn.delay = function(e, t) {
			return e = ot.fx ? ot.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
				var i = setTimeout(t, e);
				n.stop = function() {
					clearTimeout(i)
				}
			})
		},
		function() {
			var e, t, n, i, o;
			t = mt.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = t.getElementsByTagName("a")[0], n = mt.createElement("select"), o = n.appendChild(mt.createElement("option")), e = t.getElementsByTagName("input")[0], i.style.cssText = "top:1px", nt.getSetAttribute = "t" !== t.className, nt.style = /top/.test(i.getAttribute("style")), nt.hrefNormalized = "/a" === i.getAttribute("href"), nt.checkOn = !!e.value, nt.optSelected = o.selected, nt.enctype = !!mt.createElement("form").enctype, n.disabled = !0, nt.optDisabled = !o.disabled, e = mt.createElement("input"), e.setAttribute("value", ""), nt.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), nt.radioValue = "t" === e.value
		}();
	var wn = /\r/g;
	ot.fn.extend({
		val: function(e) {
			var t, n, i, o = this[0]; {
				if (arguments.length) return i = ot.isFunction(e), this.each(function(n) {
					var o;
					1 === this.nodeType && (o = i ? e.call(this, n, ot(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : ot.isArray(o) && (o = ot.map(o, function(e) {
						return null == e ? "" : e + ""
					})), t = ot.valHooks[this.type] || ot.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
				});
				if (o) return t = ot.valHooks[o.type] || ot.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(wn, "") : null == n ? "" : n)
			}
		}
	}), ot.extend({
		valHooks: {
			option: {
				get: function(e) {
					var t = ot.find.attr(e, "value");
					return null != t ? t : ot.trim(ot.text(e))
				}
			},
			select: {
				get: function(e) {
					for (var t, n, i = e.options, o = e.selectedIndex, r = "select-one" === e.type || 0 > o, a = r ? null : [], s = r ? o + 1 : i.length, l = 0 > o ? s : r ? o : 0; s > l; l++)
						if (n = i[l], !(!n.selected && l !== o || (nt.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ot.nodeName(n.parentNode, "optgroup"))) {
							if (t = ot(n).val(), r) return t;
							a.push(t)
						}
					return a
				},
				set: function(e, t) {
					for (var n, i, o = e.options, r = ot.makeArray(t), a = o.length; a--;)
						if (i = o[a], ot.inArray(ot.valHooks.option.get(i), r) >= 0) try {
							i.selected = n = !0
						} catch (s) {
							i.scrollHeight
						} else i.selected = !1;
					return n || (e.selectedIndex = -1), o
				}
			}
		}
	}), ot.each(["radio", "checkbox"], function() {
		ot.valHooks[this] = {
			set: function(e, t) {
				return ot.isArray(t) ? e.checked = ot.inArray(ot(e).val(), t) >= 0 : void 0
			}
		}, nt.checkOn || (ot.valHooks[this].get = function(e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	});
	var Cn, kn, Tn = ot.expr.attrHandle,
		Sn = /^(?:checked|selected)$/i,
		En = nt.getSetAttribute,
		An = nt.input;
	ot.fn.extend({
		attr: function(e, t) {
			return jt(this, ot.attr, e, t, arguments.length > 1)
		},
		removeAttr: function(e) {
			return this.each(function() {
				ot.removeAttr(this, e)
			})
		}
	}), ot.extend({
		attr: function(e, t, n) {
			var i, o, r = e.nodeType;
			if (e && 3 !== r && 8 !== r && 2 !== r) return typeof e.getAttribute === kt ? ot.prop(e, t, n) : (1 === r && ot.isXMLDoc(e) || (t = t.toLowerCase(), i = ot.attrHooks[t] || (ot.expr.match.bool.test(t) ? kn : Cn)), void 0 === n ? i && "get" in i && null !== (o = i.get(e, t)) ? o : (o = ot.find.attr(e, t), null == o ? void 0 : o) : null !== n ? i && "set" in i && void 0 !== (o = i.set(e, n, t)) ? o : (e.setAttribute(t, n + ""), n) : void ot.removeAttr(e, t))
		},
		removeAttr: function(e, t) {
			var n, i, o = 0,
				r = t && t.match(yt);
			if (r && 1 === e.nodeType)
				for (; n = r[o++];) i = ot.propFix[n] || n, ot.expr.match.bool.test(n) ? An && En || !Sn.test(n) ? e[i] = !1 : e[ot.camelCase("default-" + n)] = e[i] = !1 : ot.attr(e, n, ""), e.removeAttribute(En ? n : i)
		},
		attrHooks: {
			type: {
				set: function(e, t) {
					if (!nt.radioValue && "radio" === t && ot.nodeName(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		}
	}), kn = {
		set: function(e, t, n) {
			return t === !1 ? ot.removeAttr(e, n) : An && En || !Sn.test(n) ? e.setAttribute(!En && ot.propFix[n] || n, n) : e[ot.camelCase("default-" + n)] = e[n] = !0, n
		}
	}, ot.each(ot.expr.match.bool.source.match(/\w+/g), function(e, t) {
		var n = Tn[t] || ot.find.attr;
		Tn[t] = An && En || !Sn.test(t) ? function(e, t, i) {
			var o, r;
			return i || (r = Tn[t], Tn[t] = o, o = null != n(e, t, i) ? t.toLowerCase() : null, Tn[t] = r), o
		} : function(e, t, n) {
			return n ? void 0 : e[ot.camelCase("default-" + t)] ? t.toLowerCase() : null
		}
	}), An && En || (ot.attrHooks.value = {
		set: function(e, t, n) {
			return ot.nodeName(e, "input") ? void(e.defaultValue = t) : Cn && Cn.set(e, t, n)
		}
	}), En || (Cn = {
		set: function(e, t, n) {
			var i = e.getAttributeNode(n);
			return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
		}
	}, Tn.id = Tn.name = Tn.coords = function(e, t, n) {
		var i;
		return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
	}, ot.valHooks.button = {
		get: function(e, t) {
			var n = e.getAttributeNode(t);
			return n && n.specified ? n.value : void 0
		},
		set: Cn.set
	}, ot.attrHooks.contenteditable = {
		set: function(e, t, n) {
			Cn.set(e, "" === t ? !1 : t, n)
		}
	}, ot.each(["width", "height"], function(e, t) {
		ot.attrHooks[t] = {
			set: function(e, n) {
				return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
			}
		}
	})), nt.style || (ot.attrHooks.style = {
		get: function(e) {
			return e.style.cssText || void 0
		},
		set: function(e, t) {
			return e.style.cssText = t + ""
		}
	});
	var Dn = /^(?:input|select|textarea|button|object)$/i,
		jn = /^(?:a|area)$/i;
	ot.fn.extend({
		prop: function(e, t) {
			return jt(this, ot.prop, e, t, arguments.length > 1)
		},
		removeProp: function(e) {
			return e = ot.propFix[e] || e, this.each(function() {
				try {
					this[e] = void 0, delete this[e]
				} catch (t) {}
			})
		}
	}), ot.extend({
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},
		prop: function(e, t, n) {
			var i, o, r, a = e.nodeType;
			if (e && 3 !== a && 8 !== a && 2 !== a) return r = 1 !== a || !ot.isXMLDoc(e), r && (t = ot.propFix[t] || t, o = ot.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
		},
		propHooks: {
			tabIndex: {
				get: function(e) {
					var t = ot.find.attr(e, "tabindex");
					return t ? parseInt(t, 10) : Dn.test(e.nodeName) || jn.test(e.nodeName) && e.href ? 0 : -1
				}
			}
		}
	}), nt.hrefNormalized || ot.each(["href", "src"], function(e, t) {
		ot.propHooks[t] = {
			get: function(e) {
				return e.getAttribute(t, 4)
			}
		}
	}), nt.optSelected || (ot.propHooks.selected = {
		get: function(e) {
			var t = e.parentNode;
			return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
		}
	}), ot.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		ot.propFix[this.toLowerCase()] = this
	}), nt.enctype || (ot.propFix.enctype = "encoding");
	var Rn = /[\t\r\n\f]/g;
	ot.fn.extend({
		addClass: function(e) {
			var t, n, i, o, r, a, s = 0,
				l = this.length,
				c = "string" == typeof e && e;
			if (ot.isFunction(e)) return this.each(function(t) {
				ot(this).addClass(e.call(this, t, this.className))
			});
			if (c)
				for (t = (e || "").match(yt) || []; l > s; s++)
					if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Rn, " ") : " ")) {
						for (r = 0; o = t[r++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
						a = ot.trim(i), n.className !== a && (n.className = a)
					}
			return this
		},
		removeClass: function(e) {
			var t, n, i, o, r, a, s = 0,
				l = this.length,
				c = 0 === arguments.length || "string" == typeof e && e;
			if (ot.isFunction(e)) return this.each(function(t) {
				ot(this).removeClass(e.call(this, t, this.className))
			});
			if (c)
				for (t = (e || "").match(yt) || []; l > s; s++)
					if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Rn, " ") : "")) {
						for (r = 0; o = t[r++];)
							for (; i.indexOf(" " + o + " ") >= 0;) i = i.replace(" " + o + " ", " ");
						a = e ? ot.trim(i) : "", n.className !== a && (n.className = a)
					}
			return this
		},
		toggleClass: function(e, t) {
			var n = typeof e;
			return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(ot.isFunction(e) ? function(n) {
				ot(this).toggleClass(e.call(this, n, this.className, t), t)
			} : function() {
				if ("string" === n)
					for (var t, i = 0, o = ot(this), r = e.match(yt) || []; t = r[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
				else(n === kt || "boolean" === n) && (this.className && ot._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ot._data(this, "__className__") || "")
			})
		},
		hasClass: function(e) {
			for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
				if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Rn, " ").indexOf(t) >= 0) return !0;
			return !1
		}
	}), ot.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
		ot.fn[t] = function(e, n) {
			return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
		}
	}), ot.fn.extend({
		hover: function(e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		},
		bind: function(e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function(e, t) {
			return this.off(e, null, t)
		},
		delegate: function(e, t, n, i) {
			return this.on(t, e, n, i)
		},
		undelegate: function(e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		}
	});
	var Fn = ot.now(),
		Pn = /\?/,
		On = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
	ot.parseJSON = function(t) {
		if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
		var n, i = null,
			o = ot.trim(t + "");
		return o && !ot.trim(o.replace(On, function(e, t, o, r) {
			return n && t && (i = 0), 0 === i ? e : (n = o || t, i += !r - !o, "")
		})) ? Function("return " + o)() : ot.error("Invalid JSON: " + t)
	}, ot.parseXML = function(t) {
		var n, i;
		if (!t || "string" != typeof t) return null;
		try {
			e.DOMParser ? (i = new DOMParser, n = i.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
		} catch (o) {
			n = void 0
		}
		return n && n.documentElement && !n.getElementsByTagName("parsererror").length || ot.error("Invalid XML: " + t), n
	};
	var Nn, qn, Ln = /#.*$/,
		zn = /([?&])_=[^&]*/,
		In = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
		Hn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		Mn = /^(?:GET|HEAD)$/,
		_n = /^\/\//,
		Vn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
		Bn = {},
		Wn = {},
		Un = "*/".concat("*");
	try {
		qn = location.href
	} catch ($n) {
		qn = mt.createElement("a"), qn.href = "", qn = qn.href
	}
	Nn = Vn.exec(qn.toLowerCase()) || [], ot.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: qn,
			type: "GET",
			isLocal: Hn.test(Nn[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Un,
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
				"text json": ot.parseJSON,
				"text xml": ot.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(e, t) {
			return t ? _(_(e, ot.ajaxSettings), t) : _(ot.ajaxSettings, e)
		},
		ajaxPrefilter: H(Bn),
		ajaxTransport: H(Wn),
		ajax: function(e, t) {
			function n(e, t, n, i) {
				var o, u, v, b, x, C = t;
				2 !== y && (y = 2, s && clearTimeout(s), c = void 0, a = i || "", w.readyState = e > 0 ? 4 : 0, o = e >= 200 && 300 > e || 304 === e, n && (b = V(d, w, n)), b = B(d, b, w, o), o ? (d.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (ot.lastModified[r] = x), x = w.getResponseHeader("etag"), x && (ot.etag[r] = x)), 204 === e || "HEAD" === d.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = b.state, u = b.data, v = b.error, o = !v)) : (v = C, (e || !C) && (C = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || C) + "", o ? m.resolveWith(f, [u, C, w]) : m.rejectWith(f, [w, C, v]), w.statusCode(h), h = void 0, l && p.trigger(o ? "ajaxSuccess" : "ajaxError", [w, d, o ? u : v]), g.fireWith(f, [w, C]), l && (p.trigger("ajaxComplete", [w, d]), --ot.active || ot.event.trigger("ajaxStop")))
			}
			"object" == typeof e && (t = e, e = void 0), t = t || {};
			var i, o, r, a, s, l, c, u, d = ot.ajaxSetup({}, t),
				f = d.context || d,
				p = d.context && (f.nodeType || f.jquery) ? ot(f) : ot.event,
				m = ot.Deferred(),
				g = ot.Callbacks("once memory"),
				h = d.statusCode || {},
				v = {},
				b = {},
				y = 0,
				x = "canceled",
				w = {
					readyState: 0,
					getResponseHeader: function(e) {
						var t;
						if (2 === y) {
							if (!u)
								for (u = {}; t = In.exec(a);) u[t[1].toLowerCase()] = t[2];
							t = u[e.toLowerCase()]
						}
						return null == t ? null : t
					},
					getAllResponseHeaders: function() {
						return 2 === y ? a : null
					},
					setRequestHeader: function(e, t) {
						var n = e.toLowerCase();
						return y || (e = b[n] = b[n] || e, v[e] = t), this
					},
					overrideMimeType: function(e) {
						return y || (d.mimeType = e), this
					},
					statusCode: function(e) {
						var t;
						if (e)
							if (2 > y)
								for (t in e) h[t] = [h[t], e[t]];
							else w.always(e[w.status]);
						return this
					},
					abort: function(e) {
						var t = e || x;
						return c && c.abort(t), n(0, t), this
					}
				};
			if (m.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, d.url = ((e || d.url || qn) + "").replace(Ln, "").replace(_n, Nn[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = ot.trim(d.dataType || "*").toLowerCase().match(yt) || [""], null == d.crossDomain && (i = Vn.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === Nn[1] && i[2] === Nn[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Nn[3] || ("http:" === Nn[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = ot.param(d.data, d.traditional)), M(Bn, d, t, w), 2 === y) return w;
			l = ot.event && d.global, l && 0 === ot.active++ && ot.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Mn.test(d.type), r = d.url, d.hasContent || (d.data && (r = d.url += (Pn.test(r) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = zn.test(r) ? r.replace(zn, "$1_=" + Fn++) : r + (Pn.test(r) ? "&" : "?") + "_=" + Fn++)), d.ifModified && (ot.lastModified[r] && w.setRequestHeader("If-Modified-Since", ot.lastModified[r]), ot.etag[r] && w.setRequestHeader("If-None-Match", ot.etag[r])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", d.contentType), w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Un + "; q=0.01" : "") : d.accepts["*"]);
			for (o in d.headers) w.setRequestHeader(o, d.headers[o]);
			if (d.beforeSend && (d.beforeSend.call(f, w, d) === !1 || 2 === y)) return w.abort();
			x = "abort";
			for (o in {
				success: 1,
				error: 1,
				complete: 1
			}) w[o](d[o]);
			if (c = M(Wn, d, t, w)) {
				w.readyState = 1, l && p.trigger("ajaxSend", [w, d]), d.async && d.timeout > 0 && (s = setTimeout(function() {
					w.abort("timeout")
				}, d.timeout));
				try {
					y = 1, c.send(v, n)
				} catch (C) {
					if (!(2 > y)) throw C;
					n(-1, C)
				}
			} else n(-1, "No Transport");
			return w
		},
		getJSON: function(e, t, n) {
			return ot.get(e, t, n, "json")
		},
		getScript: function(e, t) {
			return ot.get(e, void 0, t, "script")
		}
	}), ot.each(["get", "post"], function(e, t) {
		ot[t] = function(e, n, i, o) {
			return ot.isFunction(n) && (o = o || i, i = n, n = void 0), ot.ajax({
				url: e,
				type: t,
				dataType: o,
				data: n,
				success: i
			})
		}
	}), ot._evalUrl = function(e) {
		return ot.ajax({
			url: e,
			type: "GET",
			dataType: "script",
			async: !1,
			global: !1,
			"throws": !0
		})
	}, ot.fn.extend({
		wrapAll: function(e) {
			if (ot.isFunction(e)) return this.each(function(t) {
				ot(this).wrapAll(e.call(this, t))
			});
			if (this[0]) {
				var t = ot(e, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
					for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
					return e
				}).append(this)
			}
			return this
		},
		wrapInner: function(e) {
			return this.each(ot.isFunction(e) ? function(t) {
				ot(this).wrapInner(e.call(this, t))
			} : function() {
				var t = ot(this),
					n = t.contents();
				n.length ? n.wrapAll(e) : t.append(e)
			})
		},
		wrap: function(e) {
			var t = ot.isFunction(e);
			return this.each(function(n) {
				ot(this).wrapAll(t ? e.call(this, n) : e)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				ot.nodeName(this, "body") || ot(this).replaceWith(this.childNodes)
			}).end()
		}
	}), ot.expr.filters.hidden = function(e) {
		return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !nt.reliableHiddenOffsets() && "none" === (e.style && e.style.display || ot.css(e, "display"))
	}, ot.expr.filters.visible = function(e) {
		return !ot.expr.filters.hidden(e)
	};
	var Xn = /%20/g,
		Yn = /\[\]$/,
		Qn = /\r?\n/g,
		Kn = /^(?:submit|button|image|reset|file)$/i,
		Zn = /^(?:input|select|textarea|keygen)/i;
	ot.param = function(e, t) {
		var n, i = [],
			o = function(e, t) {
				t = ot.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
			};
		if (void 0 === t && (t = ot.ajaxSettings && ot.ajaxSettings.traditional), ot.isArray(e) || e.jquery && !ot.isPlainObject(e)) ot.each(e, function() {
			o(this.name, this.value)
		});
		else
			for (n in e) W(n, e[n], t, o);
		return i.join("&").replace(Xn, "+")
	}, ot.fn.extend({
		serialize: function() {
			return ot.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var e = ot.prop(this, "elements");
				return e ? ot.makeArray(e) : this
			}).filter(function() {
				var e = this.type;
				return this.name && !ot(this).is(":disabled") && Zn.test(this.nodeName) && !Kn.test(e) && (this.checked || !Rt.test(e))
			}).map(function(e, t) {
				var n = ot(this).val();
				return null == n ? null : ot.isArray(n) ? ot.map(n, function(e) {
					return {
						name: t.name,
						value: e.replace(Qn, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(Qn, "\r\n")
				}
			}).get()
		}
	}), ot.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
		return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && U() || $()
	} : U;
	var Gn = 0,
		Jn = {},
		ei = ot.ajaxSettings.xhr();
	e.attachEvent && e.attachEvent("onunload", function() {
		for (var e in Jn) Jn[e](void 0, !0)
	}), nt.cors = !!ei && "withCredentials" in ei, ei = nt.ajax = !!ei, ei && ot.ajaxTransport(function(e) {
		if (!e.crossDomain || nt.cors) {
			var t;
			return {
				send: function(n, i) {
					var o, r = e.xhr(),
						a = ++Gn;
					if (r.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
						for (o in e.xhrFields) r[o] = e.xhrFields[o];
					e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
					for (o in n) void 0 !== n[o] && r.setRequestHeader(o, n[o] + "");
					r.send(e.hasContent && e.data || null), t = function(n, o) {
						var s, l, c;
						if (t && (o || 4 === r.readyState))
							if (delete Jn[a], t = void 0, r.onreadystatechange = ot.noop, o) 4 !== r.readyState && r.abort();
							else {
								c = {}, s = r.status, "string" == typeof r.responseText && (c.text = r.responseText);
								try {
									l = r.statusText
								} catch (u) {
									l = ""
								}
								s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = c.text ? 200 : 404
							}
						c && i(s, l, c, r.getAllResponseHeaders())
					}, e.async ? 4 === r.readyState ? setTimeout(t) : r.onreadystatechange = Jn[a] = t : t()
				},
				abort: function() {
					t && t(void 0, !0)
				}
			}
		}
	}), ot.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function(e) {
				return ot.globalEval(e), e
			}
		}
	}), ot.ajaxPrefilter("script", function(e) {
		void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
	}), ot.ajaxTransport("script", function(e) {
		if (e.crossDomain) {
			var t, n = mt.head || ot("head")[0] || mt.documentElement;
			return {
				send: function(i, o) {
					t = mt.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
						(n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || o(200, "success"))
					}, n.insertBefore(t, n.firstChild)
				},
				abort: function() {
					t && t.onload(void 0, !0)
				}
			}
		}
	});
	var ti = [],
		ni = /(=)\?(?=&|$)|\?\?/;
	ot.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var e = ti.pop() || ot.expando + "_" + Fn++;
			return this[e] = !0, e
		}
	}), ot.ajaxPrefilter("json jsonp", function(t, n, i) {
		var o, r, a, s = t.jsonp !== !1 && (ni.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && ni.test(t.data) && "data");
		return s || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = ot.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(ni, "$1" + o) : t.jsonp !== !1 && (t.url += (Pn.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
			return a || ot.error(o + " was not called"), a[0]
		}, t.dataTypes[0] = "json", r = e[o], e[o] = function() {
			a = arguments
		}, i.always(function() {
			e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, ti.push(o)), a && ot.isFunction(r) && r(a[0]), a = r = void 0
		}), "script") : void 0
	}), ot.parseHTML = function(e, t, n) {
		if (!e || "string" != typeof e) return null;
		"boolean" == typeof t && (n = t, t = !1), t = t || mt;
		var i = dt.exec(e),
			o = !n && [];
		return i ? [t.createElement(i[1])] : (i = ot.buildFragment([e], t, o), o && o.length && ot(o).remove(), ot.merge([], i.childNodes))
	};
	var ii = ot.fn.load;
	ot.fn.load = function(e, t, n) {
		if ("string" != typeof e && ii) return ii.apply(this, arguments);
		var i, o, r, a = this,
			s = e.indexOf(" ");
		return s >= 0 && (i = ot.trim(e.slice(s, e.length)), e = e.slice(0, s)), ot.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), a.length > 0 && ot.ajax({
			url: e,
			type: r,
			dataType: "html",
			data: t
		}).done(function(e) {
			o = arguments, a.html(i ? ot("<div>").append(ot.parseHTML(e)).find(i) : e)
		}).complete(n && function(e, t) {
			a.each(n, o || [e.responseText, t, e])
		}), this
	}, ot.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
		ot.fn[t] = function(e) {
			return this.on(t, e)
		}
	}), ot.expr.filters.animated = function(e) {
		return ot.grep(ot.timers, function(t) {
			return e === t.elem
		}).length
	};
	var oi = e.document.documentElement;
	ot.offset = {
		setOffset: function(e, t, n) {
			var i, o, r, a, s, l, c, u = ot.css(e, "position"),
				d = ot(e),
				f = {};
			"static" === u && (e.style.position = "relative"), s = d.offset(), r = ot.css(e, "top"), l = ot.css(e, "left"), c = ("absolute" === u || "fixed" === u) && ot.inArray("auto", [r, l]) > -1, c ? (i = d.position(), a = i.top, o = i.left) : (a = parseFloat(r) || 0, o = parseFloat(l) || 0), ot.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + o), "using" in t ? t.using.call(e, f) : d.css(f)
		}
	}, ot.fn.extend({
		offset: function(e) {
			if (arguments.length) return void 0 === e ? this : this.each(function(t) {
				ot.offset.setOffset(this, e, t)
			});
			var t, n, i = {
					top: 0,
					left: 0
				},
				o = this[0],
				r = o && o.ownerDocument;
			if (r) return t = r.documentElement, ot.contains(t, o) ? (typeof o.getBoundingClientRect !== kt && (i = o.getBoundingClientRect()), n = X(r), {
				top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
				left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
			}) : i
		},
		position: function() {
			if (this[0]) {
				var e, t, n = {
						top: 0,
						left: 0
					},
					i = this[0];
				return "fixed" === ot.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ot.nodeName(e[0], "html") || (n = e.offset()), n.top += ot.css(e[0], "borderTopWidth", !0), n.left += ot.css(e[0], "borderLeftWidth", !0)), {
					top: t.top - n.top - ot.css(i, "marginTop", !0),
					left: t.left - n.left - ot.css(i, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var e = this.offsetParent || oi; e && !ot.nodeName(e, "html") && "static" === ot.css(e, "position");) e = e.offsetParent;
				return e || oi
			})
		}
	}), ot.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(e, t) {
		var n = /Y/.test(t);
		ot.fn[e] = function(i) {
			return jt(this, function(e, i, o) {
				var r = X(e);
				return void 0 === o ? r ? t in r ? r[t] : r.document.documentElement[i] : e[i] : void(r ? r.scrollTo(n ? ot(r).scrollLeft() : o, n ? o : ot(r).scrollTop()) : e[i] = o)
			}, e, i, arguments.length, null)
		}
	}), ot.each(["top", "left"], function(e, t) {
		ot.cssHooks[t] = E(nt.pixelPosition, function(e, n) {
			return n ? (n = tn(e, t), on.test(n) ? ot(e).position()[t] + "px" : n) : void 0
		})
	}), ot.each({
		Height: "height",
		Width: "width"
	}, function(e, t) {
		ot.each({
			padding: "inner" + e,
			content: t,
			"": "outer" + e
		}, function(n, i) {
			ot.fn[i] = function(i, o) {
				var r = arguments.length && (n || "boolean" != typeof i),
					a = n || (i === !0 || o === !0 ? "margin" : "border");
				return jt(this, function(t, n, i) {
					var o;
					return ot.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? ot.css(t, n, a) : ot.style(t, n, i, a)
				}, t, r ? i : void 0, r, null)
			}
		})
	}), ot.fn.size = function() {
		return this.length
	}, ot.fn.andSelf = ot.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
		return ot
	});
	var ri = e.jQuery,
		ai = e.$;
	return ot.noConflict = function(t) {
		return e.$ === ot && (e.$ = ai), t && e.jQuery === ot && (e.jQuery = ri), ot
	}, typeof t === kt && (e.jQuery = e.$ = ot), ot
}),
function(e, t) {
	e.rails !== t && e.error("jquery-ujs has already been loaded!");
	var n, i = e(document);
	e.rails = n = {
		linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]",
		buttonClickSelector: "button[data-remote]:not(form button), button[data-confirm]:not(form button)",
		inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
		formSubmitSelector: "form",
		formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
		disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
		enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
		requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
		fileInputSelector: "input[type=file]",
		linkDisableSelector: "a[data-disable-with], a[data-disable]",
		buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
		CSRFProtection: function(t) {
			var n = e('meta[name="csrf-token"]').attr("content");
			n && t.setRequestHeader("X-CSRF-Token", n)
		},
		refreshCSRFTokens: function() {
			var t = e("meta[name=csrf-token]").attr("content"),
				n = e("meta[name=csrf-param]").attr("content");
			e('form input[name="' + n + '"]').val(t)
		},
		fire: function(t, n, i) {
			var o = e.Event(n);
			return t.trigger(o, i), o.result !== !1
		},
		confirm: function(e) {
			return confirm(e)
		},
		ajax: function(t) {
			return e.ajax(t)
		},
		href: function(e) {
			return e.attr("href")
		},
		handleRemote: function(i) {
			var o, r, a, s, l, c, u, d;
			if (n.fire(i, "ajax:before")) {
				if (s = i.data("cross-domain"), l = s === t ? null : s, c = i.data("with-credentials") || null, u = i.data("type") || e.ajaxSettings && e.ajaxSettings.dataType, i.is("form")) {
					o = i.attr("method"), r = i.attr("action"), a = i.serializeArray();
					var f = i.data("ujs:submit-button");
					f && (a.push(f), i.data("ujs:submit-button", null))
				} else i.is(n.inputChangeSelector) ? (o = i.data("method"), r = i.data("url"), a = i.serialize(), i.data("params") && (a = a + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (o = i.data("method") || "get", r = i.data("url"), a = i.serialize(), i.data("params") && (a = a + "&" + i.data("params"))) : (o = i.data("method"), r = n.href(i), a = i.data("params") || null);
				return d = {
					type: o || "GET",
					data: a,
					dataType: u,
					beforeSend: function(e, o) {
						return o.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + o.accepts.script), n.fire(i, "ajax:beforeSend", [e, o]) ? void i.trigger("ajax:send", e) : !1
					},
					success: function(e, t, n) {
						i.trigger("ajax:success", [e, t, n])
					},
					complete: function(e, t) {
						i.trigger("ajax:complete", [e, t])
					},
					error: function(e, t, n) {
						i.trigger("ajax:error", [e, t, n])
					},
					crossDomain: l
				}, c && (d.xhrFields = {
					withCredentials: c
				}), r && (d.url = r), n.ajax(d)
			}
			return !1
		},
		handleMethod: function(i) {
			var o = n.href(i),
				r = i.data("method"),
				a = i.attr("target"),
				s = e("meta[name=csrf-token]").attr("content"),
				l = e("meta[name=csrf-param]").attr("content"),
				c = e('<form method="post" action="' + o + '"></form>'),
				u = '<input name="_method" value="' + r + '" type="hidden" />';
			l !== t && s !== t && (u += '<input name="' + l + '" value="' + s + '" type="hidden" />'), a && c.attr("target", a), c.hide().append(u).appendTo("body"), c.submit()
		},
		formElements: function(t, n) {
			return t.is("form") ? e(t[0].elements).filter(n) : t.find(n)
		},
		disableFormElements: function(t) {
			n.formElements(t, n.disableSelector).each(function() {
				n.disableFormElement(e(this))
			})
		},
		disableFormElement: function(e) {
			var n, i;
			n = e.is("button") ? "html" : "val", i = e.data("disable-with"), e.data("ujs:enable-with", e[n]()), i !== t && e[n](i), e.prop("disabled", !0)
		},
		enableFormElements: function(t) {
			n.formElements(t, n.enableSelector).each(function() {
				n.enableFormElement(e(this))
			})
		},
		enableFormElement: function(e) {
			var t = e.is("button") ? "html" : "val";
			e.data("ujs:enable-with") && e[t](e.data("ujs:enable-with")), e.prop("disabled", !1)
		},
		allowAction: function(e) {
			var t, i = e.data("confirm"),
				o = !1;
			return i ? (n.fire(e, "confirm") && (o = n.confirm(i), t = n.fire(e, "confirm:complete", [o])), o && t) : !0
		},
		blankInputs: function(t, n, i) {
			var o, r, a = e(),
				s = n || "input,textarea",
				l = t.find(s);
			return l.each(function() {
				if (o = e(this), r = o.is("input[type=checkbox],input[type=radio]") ? o.is(":checked") : o.val(), !r == !i) {
					if (o.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + o.attr("name") + '"]').length) return !0;
					a = a.add(o)
				}
			}), a.length ? a : !1
		},
		nonBlankInputs: function(e, t) {
			return n.blankInputs(e, t, !0)
		},
		stopEverything: function(t) {
			return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
		},
		disableElement: function(e) {
			var i = e.data("disable-with");
			e.data("ujs:enable-with", e.html()), i !== t && e.html(i), e.bind("click.railsDisable", function(e) {
				return n.stopEverything(e)
			})
		},
		enableElement: function(e) {
			e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.unbind("click.railsDisable")
		}
	}, n.fire(i, "rails:attachBindings") && (e.ajaxPrefilter(function(e, t, i) {
		e.crossDomain || n.CSRFProtection(i)
	}), e(window).on("pageshow.rails", function() {
		e(e.rails.enableSelector).each(function() {
			var t = e(this);
			t.data("ujs:enable-with") && e.rails.enableFormElement(t)
		}), e(e.rails.linkDisableSelector).each(function() {
			var t = e(this);
			t.data("ujs:enable-with") && e.rails.enableElement(t)
		})
	}), i.delegate(n.linkDisableSelector, "ajax:complete", function() {
		n.enableElement(e(this))
	}), i.delegate(n.buttonDisableSelector, "ajax:complete", function() {
		n.enableFormElement(e(this))
	}), i.delegate(n.linkClickSelector, "click.rails", function(i) {
		var o = e(this),
			r = o.data("method"),
			a = o.data("params"),
			s = i.metaKey || i.ctrlKey;
		if (!n.allowAction(o)) return n.stopEverything(i);
		if (!s && o.is(n.linkDisableSelector) && n.disableElement(o), o.data("remote") !== t) {
			if (s && (!r || "GET" === r) && !a) return !0;
			var l = n.handleRemote(o);
			return l === !1 ? n.enableElement(o) : l.fail(function() {
				n.enableElement(o)
			}), !1
		}
		return r ? (n.handleMethod(o), !1) : void 0
	}), i.delegate(n.buttonClickSelector, "click.rails", function(t) {
		var i = e(this);
		if (!n.allowAction(i)) return n.stopEverything(t);
		i.is(n.buttonDisableSelector) && n.disableFormElement(i);
		var o = n.handleRemote(i);
		return o === !1 ? n.enableFormElement(i) : o.fail(function() {
			n.enableFormElement(i)
		}), !1
	}), i.delegate(n.inputChangeSelector, "change.rails", function(t) {
		var i = e(this);
		return n.allowAction(i) ? (n.handleRemote(i), !1) : n.stopEverything(t)
	}), i.delegate(n.formSubmitSelector, "submit.rails", function(i) {
		var o, r, a = e(this),
			s = a.data("remote") !== t;
		if (!n.allowAction(a)) return n.stopEverything(i);
		if (a.attr("novalidate") == t && (o = n.blankInputs(a, n.requiredInputSelector), o && n.fire(a, "ajax:aborted:required", [o]))) return n.stopEverything(i);
		if (s) {
			if (r = n.nonBlankInputs(a, n.fileInputSelector)) {
				setTimeout(function() {
					n.disableFormElements(a)
				}, 13);
				var l = n.fire(a, "ajax:aborted:file", [r]);
				return l || setTimeout(function() {
					n.enableFormElements(a)
				}, 13), l
			}
			return n.handleRemote(a), !1
		}
		setTimeout(function() {
			n.disableFormElements(a)
		}, 13)
	}), i.delegate(n.formInputClickSelector, "click.rails", function(t) {
		var i = e(this);
		if (!n.allowAction(i)) return n.stopEverything(t);
		var o = i.attr("name"),
			r = o ? {
				name: o,
				value: i.val()
			} : null;
		i.closest("form").data("ujs:submit-button", r)
	}), i.delegate(n.formSubmitSelector, "ajax:send.rails", function(t) {
		this == t.target && n.disableFormElements(e(this))
	}), i.delegate(n.formSubmitSelector, "ajax:complete.rails", function(t) {
		this == t.target && n.enableFormElements(e(this))
	}), e(function() {
		n.refreshCSRFTokens()
	}))
}(jQuery),
function(e, t) {
	"use strict";
	var n, i = e,
		o = i.document,
		r = i.navigator,
		a = i.setTimeout,
		s = i.encodeURIComponent,
		l = i.ActiveXObject,
		c = i.Number.parseInt || i.parseInt,
		u = i.Number.parseFloat || i.parseFloat,
		d = i.Number.isNaN || i.isNaN,
		f = i.Math.round,
		p = i.Date.now,
		m = i.Object.keys,
		g = i.Object.defineProperty,
		h = i.Object.prototype.hasOwnProperty,
		v = i.Array.prototype.slice,
		b = function(e) {
			return v.call(e, 0)
		},
		y = function() {
			var e, n, i, o, r, a, s = b(arguments),
				l = s[0] || {};
			for (e = 1, n = s.length; n > e; e++)
				if (null != (i = s[e]))
					for (o in i) h.call(i, o) && (r = l[o], a = i[o], l !== a && a !== t && (l[o] = a));
			return l
		},
		x = function(e) {
			var t, n, i, o;
			if ("object" != typeof e || null == e) t = e;
			else if ("number" == typeof e.length)
				for (t = [], n = 0, i = e.length; i > n; n++) h.call(e, n) && (t[n] = x(e[n]));
			else {
				t = {};
				for (o in e) h.call(e, o) && (t[o] = x(e[o]))
			}
			return t
		},
		w = function(e, t) {
			for (var n = {}, i = 0, o = t.length; o > i; i++) t[i] in e && (n[t[i]] = e[t[i]]);
			return n
		},
		C = function(e, t) {
			var n = {};
			for (var i in e) - 1 === t.indexOf(i) && (n[i] = e[i]);
			return n
		},
		k = function(e) {
			if (e)
				for (var t in e) h.call(e, t) && delete e[t];
			return e
		},
		T = function(e, t) {
			if (e && 1 === e.nodeType && e.ownerDocument && t && (1 === t.nodeType && t.ownerDocument && t.ownerDocument === e.ownerDocument || 9 === t.nodeType && !t.ownerDocument && t === e.ownerDocument))
				do {
					if (e === t) return !0;
					e = e.parentNode
				} while (e);
			return !1
		},
		S = {
			bridge: null,
			version: "0.0.0",
			pluginType: "unknown",
			disabled: null,
			outdated: null,
			unavailable: null,
			deactivated: null,
			overdue: null,
			ready: null
		},
		E = "11.0.0",
		A = {},
		D = {},
		j = null,
		R = {
			ready: "Flash communication is established",
			error: {
				"flash-disabled": "Flash is disabled or not installed",
				"flash-outdated": "Flash is too outdated to support ZeroClipboard",
				"flash-unavailable": "Flash is unable to communicate bidirectionally with JavaScript",
				"flash-deactivated": "Flash is too outdated for your browser and/or is configured as click-to-activate",
				"flash-overdue": "Flash communication was established but NOT within the acceptable time limit"
			}
		},
		F = function() {
			var e, t, n, i, r = "ZeroClipboard.swf";
			if (!o.currentScript || !(i = o.currentScript.src)) {
				var a = o.getElementsByTagName("script");
				if ("readyState" in a[0])
					for (e = a.length; e-- && ("interactive" !== a[e].readyState || !(i = a[e].src)););
				else if ("loading" === o.readyState) i = a[a.length - 1].src;
				else {
					for (e = a.length; e--;) {
						if (n = a[e].src, !n) {
							t = null;
							break
						}
						if (n = n.split("#")[0].split("?")[0], n = n.slice(0, n.lastIndexOf("/") + 1), null == t) t = n;
						else if (t !== n) {
							t = null;
							break
						}
					}
					null !== t && (i = t)
				}
			}
			return i && (i = i.split("#")[0].split("?")[0], r = i.slice(0, i.lastIndexOf("/") + 1) + r), r
		}(),
		P = {
			swfPath: F,
			trustedDomains: e.location.host ? [e.location.host] : [],
			cacheBust: !0,
			forceEnhancedClipboard: !1,
			flashLoadTimeout: 3e4,
			autoActivate: !0,
			bubbleEvents: !0,
			containerId: "global-zeroclipboard-html-bridge",
			containerClass: "global-zeroclipboard-container",
			swfObjectId: "global-zeroclipboard-flash-bridge",
			hoverClass: "zeroclipboard-is-hover",
			activeClass: "zeroclipboard-is-active",
			forceHandCursor: !1,
			title: null,
			zIndex: 999999999
		},
		O = function(e) {
			if ("object" == typeof e && null !== e)
				for (var t in e)
					if (h.call(e, t))
						if (/^(?:forceHandCursor|title|zIndex|bubbleEvents)$/.test(t)) P[t] = e[t];
						else if (null == S.bridge)
				if ("containerId" === t || "swfObjectId" === t) {
					if (!Y(e[t])) throw new Error("The specified `" + t + "` value is not valid as an HTML4 Element ID");
					P[t] = e[t]
				} else P[t] = e[t]; {
					if ("string" != typeof e || !e) return x(P);
					if (h.call(P, e)) return P[e]
				}
		},
		N = function() {
			return {
				browser: w(r, ["userAgent", "platform", "appName"]),
				flash: C(S, ["bridge"]),
				zeroclipboard: {
					version: kt.version,
					config: kt.config()
				}
			}
		},
		q = function() {
			return !!(S.disabled || S.outdated || S.unavailable || S.deactivated)
		},
		L = function(e, t) {
			var n, i, o, r = {};
			if ("string" == typeof e && e) o = e.toLowerCase().split(/\s+/);
			else if ("object" == typeof e && e && "undefined" == typeof t)
				for (n in e) h.call(e, n) && "string" == typeof n && n && "function" == typeof e[n] && kt.on(n, e[n]);
			if (o && o.length) {
				for (n = 0, i = o.length; i > n; n++) e = o[n].replace(/^on/, ""), r[e] = !0, A[e] || (A[e] = []), A[e].push(t);
				if (r.ready && S.ready && kt.emit({
					type: "ready"
				}), r.error) {
					var a = ["disabled", "outdated", "unavailable", "deactivated", "overdue"];
					for (n = 0, i = a.length; i > n; n++)
						if (S[a[n]] === !0) {
							kt.emit({
								type: "error",
								name: "flash-" + a[n]
							});
							break
						}
				}
			}
			return kt
		},
		z = function(e, t) {
			var n, i, o, r, a;
			if (0 === arguments.length) r = m(A);
			else if ("string" == typeof e && e) r = e.split(/\s+/);
			else if ("object" == typeof e && e && "undefined" == typeof t)
				for (n in e) h.call(e, n) && "string" == typeof n && n && "function" == typeof e[n] && kt.off(n, e[n]);
			if (r && r.length)
				for (n = 0, i = r.length; i > n; n++)
					if (e = r[n].toLowerCase().replace(/^on/, ""), a = A[e], a && a.length)
						if (t)
							for (o = a.indexOf(t); - 1 !== o;) a.splice(o, 1), o = a.indexOf(t, o);
						else a.length = 0;
			return kt
		},
		I = function(e) {
			var t;
			return t = "string" == typeof e && e ? x(A[e]) || null : x(A)
		},
		H = function(e) {
			var t, n, i;
			return e = Q(e), e && !tt(e) ? "ready" === e.type && S.overdue === !0 ? kt.emit({
				type: "error",
				name: "flash-overdue"
			}) : (t = y({}, e), et.call(this, t), "copy" === e.type && (i = st(D), n = i.data, j = i.formatMap), n) : void 0
		},
		M = function() {
			if ("boolean" != typeof S.ready && (S.ready = !1), !kt.isFlashUnusable() && null === S.bridge) {
				var e = P.flashLoadTimeout;
				"number" == typeof e && e >= 0 && a(function() {
					"boolean" != typeof S.deactivated && (S.deactivated = !0), S.deactivated === !0 && kt.emit({
						type: "error",
						name: "flash-deactivated"
					})
				}, e), S.overdue = !1, rt()
			}
		},
		_ = function() {
			kt.clearData(), kt.blur(), kt.emit("destroy"), at(), kt.off()
		},
		V = function(e, t) {
			var n;
			if ("object" == typeof e && e && "undefined" == typeof t) n = e, kt.clearData();
			else {
				if ("string" != typeof e || !e) return;
				n = {}, n[e] = t
			}
			for (var i in n) "string" == typeof i && i && h.call(n, i) && "string" == typeof n[i] && n[i] && (D[i] = n[i])
		},
		B = function(e) {
			"undefined" == typeof e ? (k(D), j = null) : "string" == typeof e && h.call(D, e) && delete D[e]
		},
		W = function(e) {
			return "undefined" == typeof e ? x(D) : "string" == typeof e && h.call(D, e) ? D[e] : void 0
		},
		U = function(e) {
			if (e && 1 === e.nodeType) {
				n && (gt(n, P.activeClass), n !== e && gt(n, P.hoverClass)), n = e, mt(e, P.hoverClass);
				var t = e.getAttribute("title") || P.title;
				if ("string" == typeof t && t) {
					var i = ot(S.bridge);
					i && i.setAttribute("title", t)
				}
				var o = P.forceHandCursor === !0 || "pointer" === ht(e, "cursor");
				xt(o), yt()
			}
		},
		$ = function() {
			var e = ot(S.bridge);
			e && (e.removeAttribute("title"), e.style.left = "0px", e.style.top = "-9999px", e.style.width = "1px", e.style.top = "1px"), n && (gt(n, P.hoverClass), gt(n, P.activeClass), n = null)
		},
		X = function() {
			return n || null
		},
		Y = function(e) {
			return "string" == typeof e && e && /^[A-Za-z][A-Za-z0-9_:\-\.]*$/.test(e)
		},
		Q = function(e) {
			var t;
			if ("string" == typeof e && e ? (t = e, e = {}) : "object" == typeof e && e && "string" == typeof e.type && e.type && (t = e.type), t) {
				y(e, {
					type: t.toLowerCase(),
					target: e.target || n || null,
					relatedTarget: e.relatedTarget || null,
					currentTarget: S && S.bridge || null,
					timeStamp: e.timeStamp || p() || null
				});
				var i = R[e.type];
				return "error" === e.type && e.name && i && (i = i[e.name]), i && (e.message = i), "ready" === e.type && y(e, {
					target: null,
					version: S.version
				}), "error" === e.type && (/^flash-(disabled|outdated|unavailable|deactivated|overdue)$/.test(e.name) && y(e, {
					target: null,
					minimumVersion: E
				}), /^flash-(outdated|unavailable|deactivated|overdue)$/.test(e.name) && y(e, {
					version: S.version
				})), "copy" === e.type && (e.clipboardData = {
					setData: kt.setData,
					clearData: kt.clearData
				}), "aftercopy" === e.type && (e = lt(e, j)), e.target && !e.relatedTarget && (e.relatedTarget = K(e.target)), e = Z(e)
			}
		},
		K = function(e) {
			var t = e && e.getAttribute && e.getAttribute("data-clipboard-target");
			return t ? o.getElementById(t) : null
		},
		Z = function(e) {
			if (e && /^_(?:click|mouse(?:over|out|down|up|move))$/.test(e.type)) {
				var n = e.target,
					r = "_mouseover" === e.type && e.relatedTarget ? e.relatedTarget : t,
					a = "_mouseout" === e.type && e.relatedTarget ? e.relatedTarget : t,
					s = bt(n),
					l = i.screenLeft || i.screenX || 0,
					c = i.screenTop || i.screenY || 0,
					u = o.body.scrollLeft + o.documentElement.scrollLeft,
					d = o.body.scrollTop + o.documentElement.scrollTop,
					f = s.left + ("number" == typeof e._stageX ? e._stageX : 0),
					p = s.top + ("number" == typeof e._stageY ? e._stageY : 0),
					m = f - u,
					g = p - d,
					h = l + m,
					v = c + g,
					b = "number" == typeof e.movementX ? e.movementX : 0,
					x = "number" == typeof e.movementY ? e.movementY : 0;
				delete e._stageX, delete e._stageY, y(e, {
					srcElement: n,
					fromElement: r,
					toElement: a,
					screenX: h,
					screenY: v,
					pageX: f,
					pageY: p,
					clientX: m,
					clientY: g,
					x: m,
					y: g,
					movementX: b,
					movementY: x,
					offsetX: 0,
					offsetY: 0,
					layerX: 0,
					layerY: 0
				})
			}
			return e
		},
		G = function(e) {
			var t = e && "string" == typeof e.type && e.type || "";
			return !/^(?:(?:before)?copy|destroy)$/.test(t)
		},
		J = function(e, t, n, i) {
			i ? a(function() {
				e.apply(t, n)
			}, 0) : e.apply(t, n)
		},
		et = function(e) {
			if ("object" == typeof e && e && e.type) {
				var t = G(e),
					n = A["*"] || [],
					o = A[e.type] || [],
					r = n.concat(o);
				if (r && r.length) {
					var a, s, l, c, u, d = this;
					for (a = 0, s = r.length; s > a; a++) l = r[a], c = d, "string" == typeof l && "function" == typeof i[l] && (l = i[l]), "object" == typeof l && l && "function" == typeof l.handleEvent && (c = l, l = l.handleEvent), "function" == typeof l && (u = y({}, e), J(l, c, [u], t))
				}
				return this
			}
		},
		tt = function(e) {
			var t = e.target || n || null,
				i = "swf" === e._source;
			delete e._source;
			var o = ["flash-disabled", "flash-outdated", "flash-unavailable", "flash-deactivated", "flash-overdue"];
			switch (e.type) {
				case "error":
					-1 !== o.indexOf(e.name) && y(S, {
						disabled: "flash-disabled" === e.name,
						outdated: "flash-outdated" === e.name,
						unavailable: "flash-unavailable" === e.name,
						deactivated: "flash-deactivated" === e.name,
						overdue: "flash-overdue" === e.name,
						ready: !1
					});
					break;
				case "ready":
					var r = S.deactivated === !0;
					y(S, {
						disabled: !1,
						outdated: !1,
						unavailable: !1,
						deactivated: !1,
						overdue: r,
						ready: !r
					});
					break;
				case "copy":
					var a, s, l = e.relatedTarget;
					!D["text/html"] && !D["text/plain"] && l && (s = l.value || l.outerHTML || l.innerHTML) && (a = l.value || l.textContent || l.innerText) ? (e.clipboardData.clearData(), e.clipboardData.setData("text/plain", a), s !== a && e.clipboardData.setData("text/html", s)) : !D["text/plain"] && e.target && (a = e.target.getAttribute("data-clipboard-text")) && (e.clipboardData.clearData(), e.clipboardData.setData("text/plain", a));
					break;
				case "aftercopy":
					kt.clearData(), t && t !== pt() && t.focus && t.focus();
					break;
				case "_mouseover":
					kt.focus(t), P.bubbleEvents === !0 && i && (t && t !== e.relatedTarget && !T(e.relatedTarget, t) && nt(y({}, e, {
						type: "mouseenter",
						bubbles: !1,
						cancelable: !1
					})), nt(y({}, e, {
						type: "mouseover"
					})));
					break;
				case "_mouseout":
					kt.blur(), P.bubbleEvents === !0 && i && (t && t !== e.relatedTarget && !T(e.relatedTarget, t) && nt(y({}, e, {
						type: "mouseleave",
						bubbles: !1,
						cancelable: !1
					})), nt(y({}, e, {
						type: "mouseout"
					})));
					break;
				case "_mousedown":
					mt(t, P.activeClass), P.bubbleEvents === !0 && i && nt(y({}, e, {
						type: e.type.slice(1)
					}));
					break;
				case "_mouseup":
					gt(t, P.activeClass), P.bubbleEvents === !0 && i && nt(y({}, e, {
						type: e.type.slice(1)
					}));
					break;
				case "_click":
				case "_mousemove":
					P.bubbleEvents === !0 && i && nt(y({}, e, {
						type: e.type.slice(1)
					}))
			}
			return /^_(?:click|mouse(?:over|out|down|up|move))$/.test(e.type) ? !0 : void 0
		},
		nt = function(e) {
			if (e && "string" == typeof e.type && e) {
				var t, n = e.target || null,
					r = n && n.ownerDocument || o,
					a = {
						view: r.defaultView || i,
						canBubble: !0,
						cancelable: !0,
						detail: "click" === e.type ? 1 : 0,
						button: "number" == typeof e.which ? e.which - 1 : "number" == typeof e.button ? e.button : r.createEvent ? 0 : 1
					},
					s = y(a, e);
				n && r.createEvent && n.dispatchEvent && (s = [s.type, s.canBubble, s.cancelable, s.view, s.detail, s.screenX, s.screenY, s.clientX, s.clientY, s.ctrlKey, s.altKey, s.shiftKey, s.metaKey, s.button, s.relatedTarget], t = r.createEvent("MouseEvents"), t.initMouseEvent && (t.initMouseEvent.apply(t, s), t._source = "js", n.dispatchEvent(t)))
			}
		},
		it = function() {
			var e = o.createElement("div");
			return e.id = P.containerId, e.className = P.containerClass, e.style.position = "absolute", e.style.left = "0px", e.style.top = "-9999px", e.style.width = "1px", e.style.height = "1px", e.style.zIndex = "" + wt(P.zIndex), e
		},
		ot = function(e) {
			for (var t = e && e.parentNode; t && "OBJECT" === t.nodeName && t.parentNode;) t = t.parentNode;
			return t || null
		},
		rt = function() {
			var e, t = S.bridge,
				n = ot(t);
			if (!t) {
				var r = ft(i.location.host, P),
					a = "never" === r ? "none" : "all",
					s = ut(P),
					l = P.swfPath + ct(P.swfPath, P);
				n = it();
				var c = o.createElement("div");
				n.appendChild(c), o.body.appendChild(n);
				var u = o.createElement("div"),
					d = "activex" === S.pluginType;
				u.innerHTML = '<object id="' + P.swfObjectId + '" name="' + P.swfObjectId + '" width="100%" height="100%" ' + (d ? 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"' : 'type="application/x-shockwave-flash" data="' + l + '"') + ">" + (d ? '<param name="movie" value="' + l + '"/>' : "") + '<param name="allowScriptAccess" value="' + r + '"/><param name="allowNetworking" value="' + a + '"/><param name="menu" value="false"/><param name="wmode" value="transparent"/><param name="flashvars" value="' + s + '"/></object>', t = u.firstChild, u = null, t.ZeroClipboard = kt, n.replaceChild(t, c)
			}
			return t || (t = o[P.swfObjectId], t && (e = t.length) && (t = t[e - 1]), !t && n && (t = n.firstChild)), S.bridge = t || null, t
		},
		at = function() {
			var e = S.bridge;
			if (e) {
				var t = ot(e);
				t && ("activex" === S.pluginType && "readyState" in e ? (e.style.display = "none", function n() {
					if (4 === e.readyState) {
						for (var i in e) "function" == typeof e[i] && (e[i] = null);
						e.parentNode && e.parentNode.removeChild(e), t.parentNode && t.parentNode.removeChild(t)
					} else a(n, 10)
				}()) : (e.parentNode && e.parentNode.removeChild(e), t.parentNode && t.parentNode.removeChild(t))), S.ready = null, S.bridge = null, S.deactivated = null
			}
		},
		st = function(e) {
			var t = {},
				n = {};
			if ("object" == typeof e && e) {
				for (var i in e)
					if (i && h.call(e, i) && "string" == typeof e[i] && e[i]) switch (i.toLowerCase()) {
						case "text/plain":
						case "text":
						case "air:text":
						case "flash:text":
							t.text = e[i], n.text = i;
							break;
						case "text/html":
						case "html":
						case "air:html":
						case "flash:html":
							t.html = e[i], n.html = i;
							break;
						case "application/rtf":
						case "text/rtf":
						case "rtf":
						case "richtext":
						case "air:rtf":
						case "flash:rtf":
							t.rtf = e[i], n.rtf = i
					}
					return {
						data: t,
						formatMap: n
					}
			}
		},
		lt = function(e, t) {
			if ("object" != typeof e || !e || "object" != typeof t || !t) return e;
			var n = {};
			for (var i in e)
				if (h.call(e, i)) {
					if ("success" !== i && "data" !== i) {
						n[i] = e[i];
						continue
					}
					n[i] = {};
					var o = e[i];
					for (var r in o) r && h.call(o, r) && h.call(t, r) && (n[i][t[r]] = o[r])
				}
			return n
		},
		ct = function(e, t) {
			var n = null == t || t && t.cacheBust === !0;
			return n ? (-1 === e.indexOf("?") ? "?" : "&") + "noCache=" + p() : ""
		},
		ut = function(e) {
			var t, n, o, r, a = "",
				l = [];
			if (e.trustedDomains && ("string" == typeof e.trustedDomains ? r = [e.trustedDomains] : "object" == typeof e.trustedDomains && "length" in e.trustedDomains && (r = e.trustedDomains)), r && r.length)
				for (t = 0, n = r.length; n > t; t++)
					if (h.call(r, t) && r[t] && "string" == typeof r[t]) {
						if (o = dt(r[t]), !o) continue;
						if ("*" === o) {
							l.length = 0, l.push(o);
							break
						}
						l.push.apply(l, [o, "//" + o, i.location.protocol + "//" + o])
					}
			return l.length && (a += "trustedOrigins=" + s(l.join(","))), e.forceEnhancedClipboard === !0 && (a += (a ? "&" : "") + "forceEnhancedClipboard=true"), "string" == typeof e.swfObjectId && e.swfObjectId && (a += (a ? "&" : "") + "swfObjectId=" + s(e.swfObjectId)), a
		},
		dt = function(e) {
			if (null == e || "" === e) return null;
			if (e = e.replace(/^\s+|\s+$/g, ""), "" === e) return null;
			var t = e.indexOf("//");
			e = -1 === t ? e : e.slice(t + 2);
			var n = e.indexOf("/");
			return e = -1 === n ? e : -1 === t || 0 === n ? null : e.slice(0, n), e && ".swf" === e.slice(-4).toLowerCase() ? null : e || null
		},
		ft = function() {
			var e = function(e) {
				var t, n, i, o = [];
				if ("string" == typeof e && (e = [e]), "object" != typeof e || !e || "number" != typeof e.length) return o;
				for (t = 0, n = e.length; n > t; t++)
					if (h.call(e, t) && (i = dt(e[t]))) {
						if ("*" === i) {
							o.length = 0, o.push("*");
							break
						} - 1 === o.indexOf(i) && o.push(i)
					}
				return o
			};
			return function(t, n) {
				var i = dt(n.swfPath);
				null === i && (i = t);
				var o = e(n.trustedDomains),
					r = o.length;
				if (r > 0) {
					if (1 === r && "*" === o[0]) return "always";
					if (-1 !== o.indexOf(t)) return 1 === r && t === i ? "sameDomain" : "always"
				}
				return "never"
			}
		}(),
		pt = function() {
			try {
				return o.activeElement
			} catch (e) {
				return null
			}
		},
		mt = function(e, t) {
			if (!e || 1 !== e.nodeType) return e;
			if (e.classList) return e.classList.contains(t) || e.classList.add(t), e;
			if (t && "string" == typeof t) {
				var n = (t || "").split(/\s+/);
				if (1 === e.nodeType)
					if (e.className) {
						for (var i = " " + e.className + " ", o = e.className, r = 0, a = n.length; a > r; r++) i.indexOf(" " + n[r] + " ") < 0 && (o += " " + n[r]);
						e.className = o.replace(/^\s+|\s+$/g, "")
					} else e.className = t
			}
			return e
		},
		gt = function(e, t) {
			if (!e || 1 !== e.nodeType) return e;
			if (e.classList) return e.classList.contains(t) && e.classList.remove(t), e;
			if ("string" == typeof t && t) {
				var n = t.split(/\s+/);
				if (1 === e.nodeType && e.className) {
					for (var i = (" " + e.className + " ").replace(/[\n\t]/g, " "), o = 0, r = n.length; r > o; o++) i = i.replace(" " + n[o] + " ", " ");
					e.className = i.replace(/^\s+|\s+$/g, "")
				}
			}
			return e
		},
		ht = function(e, t) {
			var n = i.getComputedStyle(e, null).getPropertyValue(t);
			return "cursor" !== t || n && "auto" !== n || "A" !== e.nodeName ? n : "pointer"
		},
		vt = function() {
			var e, t, n, i = 1;
			return "function" == typeof o.body.getBoundingClientRect && (e = o.body.getBoundingClientRect(), t = e.right - e.left, n = o.body.offsetWidth, i = f(t / n * 100) / 100), i
		},
		bt = function(e) {
			var t = {
				left: 0,
				top: 0,
				width: 0,
				height: 0
			};
			if (e.getBoundingClientRect) {
				var n, r, a, s = e.getBoundingClientRect();
				"pageXOffset" in i && "pageYOffset" in i ? (n = i.pageXOffset, r = i.pageYOffset) : (a = vt(), n = f(o.documentElement.scrollLeft / a), r = f(o.documentElement.scrollTop / a));
				var l = o.documentElement.clientLeft || 0,
					c = o.documentElement.clientTop || 0;
				t.left = s.left + n - l, t.top = s.top + r - c, t.width = "width" in s ? s.width : s.right - s.left, t.height = "height" in s ? s.height : s.bottom - s.top
			}
			return t
		},
		yt = function() {
			var e;
			if (n && (e = ot(S.bridge))) {
				var t = bt(n);
				y(e.style, {
					width: t.width + "px",
					height: t.height + "px",
					top: t.top + "px",
					left: t.left + "px",
					zIndex: "" + wt(P.zIndex)
				})
			}
		},
		xt = function(e) {
			S.ready === !0 && (S.bridge && "function" == typeof S.bridge.setHandCursor ? S.bridge.setHandCursor(e) : S.ready = !1)
		},
		wt = function(e) {
			if (/^(?:auto|inherit)$/.test(e)) return e;
			var t;
			return "number" != typeof e || d(e) ? "string" == typeof e && (t = wt(c(e, 10))) : t = e, "number" == typeof t ? t : "auto"
		},
		Ct = function(e) {
			function t(e) {
				var t = e.match(/[\d]+/g);
				return t.length = 3, t.join(".")
			}

			function n(e) {
				return !!e && (e = e.toLowerCase()) && (/^(pepflashplayer\.dll|libpepflashplayer\.so|pepperflashplayer\.plugin)$/.test(e) || "chrome.plugin" === e.slice(-13))
			}

			function i(e) {
				e && (l = !0, e.version && (f = t(e.version)), !f && e.description && (f = t(e.description)), e.filename && (d = n(e.filename)))
			}
			var o, a, s, l = !1,
				c = !1,
				d = !1,
				f = "";
			if (r.plugins && r.plugins.length) o = r.plugins["Shockwave Flash"], i(o), r.plugins["Shockwave Flash 2.0"] && (l = !0, f = "2.0.0.11");
			else if (r.mimeTypes && r.mimeTypes.length) s = r.mimeTypes["application/x-shockwave-flash"], o = s && s.enabledPlugin, i(o);
			else if ("undefined" != typeof e) {
				c = !0;
				try {
					a = new e("ShockwaveFlash.ShockwaveFlash.7"), l = !0, f = t(a.GetVariable("$version"))
				} catch (p) {
					try {
						a = new e("ShockwaveFlash.ShockwaveFlash.6"), l = !0, f = "6.0.21"
					} catch (m) {
						try {
							a = new e("ShockwaveFlash.ShockwaveFlash"), l = !0, f = t(a.GetVariable("$version"))
						} catch (g) {
							c = !1
						}
					}
				}
			}
			S.disabled = l !== !0, S.outdated = f && u(f) < u(E), S.version = f || "0.0.0", S.pluginType = d ? "pepper" : c ? "activex" : l ? "netscape" : "unknown"
		};
	Ct(l);
	var kt = function() {
		return this instanceof kt ? void("function" == typeof kt._createClient && kt._createClient.apply(this, b(arguments))) : new kt
	};
	g(kt, "version", {
		value: "2.1.2",
		writable: !1,
		configurable: !0,
		enumerable: !0
	}), kt.config = function() {
		return O.apply(this, b(arguments))
	}, kt.state = function() {
		return N.apply(this, b(arguments))
	}, kt.isFlashUnusable = function() {
		return q.apply(this, b(arguments))
	}, kt.on = function() {
		return L.apply(this, b(arguments))
	}, kt.off = function() {
		return z.apply(this, b(arguments))
	}, kt.handlers = function() {
		return I.apply(this, b(arguments))
	}, kt.emit = function() {
		return H.apply(this, b(arguments))
	}, kt.create = function() {
		return M.apply(this, b(arguments))
	}, kt.destroy = function() {
		return _.apply(this, b(arguments))
	}, kt.setData = function() {
		return V.apply(this, b(arguments))
	}, kt.clearData = function() {
		return B.apply(this, b(arguments))
	}, kt.getData = function() {
		return W.apply(this, b(arguments))
	}, kt.focus = kt.activate = function() {
		return U.apply(this, b(arguments))
	}, kt.blur = kt.deactivate = function() {
		return $.apply(this, b(arguments))
	}, kt.activeElement = function() {
		return X.apply(this, b(arguments))
	};
	var Tt = 0,
		St = {},
		Et = 0,
		At = {},
		Dt = {};
	y(P, {
		autoActivate: !0
	});
	var jt = function(e) {
			var t = this;
			t.id = "" + Tt++, St[t.id] = {
				instance: t,
				elements: [],
				handlers: {}
			}, e && t.clip(e), kt.on("*", function(e) {
				return t.emit(e)
			}), kt.on("destroy", function() {
				t.destroy()
			}), kt.create()
		},
		Rt = function(e, t) {
			var n, i, o, r = {},
				a = St[this.id] && St[this.id].handlers;
			if ("string" == typeof e && e) o = e.toLowerCase().split(/\s+/);
			else if ("object" == typeof e && e && "undefined" == typeof t)
				for (n in e) h.call(e, n) && "string" == typeof n && n && "function" == typeof e[n] && this.on(n, e[n]);
			if (o && o.length) {
				for (n = 0, i = o.length; i > n; n++) e = o[n].replace(/^on/, ""), r[e] = !0, a[e] || (a[e] = []), a[e].push(t);
				if (r.ready && S.ready && this.emit({
					type: "ready",
					client: this
				}), r.error) {
					var s = ["disabled", "outdated", "unavailable", "deactivated", "overdue"];
					for (n = 0, i = s.length; i > n; n++)
						if (S[s[n]]) {
							this.emit({
								type: "error",
								name: "flash-" + s[n],
								client: this
							});
							break
						}
				}
			}
			return this
		},
		Ft = function(e, t) {
			var n, i, o, r, a, s = St[this.id] && St[this.id].handlers;
			if (0 === arguments.length) r = m(s);
			else if ("string" == typeof e && e) r = e.split(/\s+/);
			else if ("object" == typeof e && e && "undefined" == typeof t)
				for (n in e) h.call(e, n) && "string" == typeof n && n && "function" == typeof e[n] && this.off(n, e[n]);
			if (r && r.length)
				for (n = 0, i = r.length; i > n; n++)
					if (e = r[n].toLowerCase().replace(/^on/, ""), a = s[e], a && a.length)
						if (t)
							for (o = a.indexOf(t); - 1 !== o;) a.splice(o, 1), o = a.indexOf(t, o);
						else a.length = 0;
			return this
		},
		Pt = function(e) {
			var t = null,
				n = St[this.id] && St[this.id].handlers;
			return n && (t = "string" == typeof e && e ? n[e] ? n[e].slice(0) : [] : x(n)), t
		},
		Ot = function(e) {
			if (It.call(this, e)) {
				"object" == typeof e && e && "string" == typeof e.type && e.type && (e = y({}, e));
				var t = y({}, Q(e), {
					client: this
				});
				Ht.call(this, t)
			}
			return this
		},
		Nt = function(e) {
			e = Mt(e);
			for (var t = 0; t < e.length; t++)
				if (h.call(e, t) && e[t] && 1 === e[t].nodeType) {
					e[t].zcClippingId ? -1 === At[e[t].zcClippingId].indexOf(this.id) && At[e[t].zcClippingId].push(this.id) : (e[t].zcClippingId = "zcClippingId_" + Et++, At[e[t].zcClippingId] = [this.id], P.autoActivate === !0 && _t(e[t]));
					var n = St[this.id] && St[this.id].elements; - 1 === n.indexOf(e[t]) && n.push(e[t])
				}
			return this
		},
		qt = function(e) {
			var t = St[this.id];
			if (!t) return this;
			var n, i = t.elements;
			e = "undefined" == typeof e ? i.slice(0) : Mt(e);
			for (var o = e.length; o--;)
				if (h.call(e, o) && e[o] && 1 === e[o].nodeType) {
					for (n = 0; - 1 !== (n = i.indexOf(e[o], n));) i.splice(n, 1);
					var r = At[e[o].zcClippingId];
					if (r) {
						for (n = 0; - 1 !== (n = r.indexOf(this.id, n));) r.splice(n, 1);
						0 === r.length && (P.autoActivate === !0 && Vt(e[o]), delete e[o].zcClippingId)
					}
				}
			return this
		},
		Lt = function() {
			var e = St[this.id];
			return e && e.elements ? e.elements.slice(0) : []
		},
		zt = function() {
			this.unclip(), this.off(), delete St[this.id]
		},
		It = function(e) {
			if (!e || !e.type) return !1;
			if (e.client && e.client !== this) return !1;
			var t = St[this.id] && St[this.id].elements,
				n = !!t && t.length > 0,
				i = !e.target || n && -1 !== t.indexOf(e.target),
				o = e.relatedTarget && n && -1 !== t.indexOf(e.relatedTarget),
				r = e.client && e.client === this;
			return i || o || r ? !0 : !1
		},
		Ht = function(e) {
			if ("object" == typeof e && e && e.type) {
				var t = G(e),
					n = St[this.id] && St[this.id].handlers["*"] || [],
					o = St[this.id] && St[this.id].handlers[e.type] || [],
					r = n.concat(o);
				if (r && r.length) {
					var a, s, l, c, u, d = this;
					for (a = 0, s = r.length; s > a; a++) l = r[a], c = d, "string" == typeof l && "function" == typeof i[l] && (l = i[l]), "object" == typeof l && l && "function" == typeof l.handleEvent && (c = l, l = l.handleEvent), "function" == typeof l && (u = y({}, e), J(l, c, [u], t))
				}
				return this
			}
		},
		Mt = function(e) {
			return "string" == typeof e && (e = []), "number" != typeof e.length ? [e] : e
		},
		_t = function(e) {
			if (e && 1 === e.nodeType) {
				var t = function(e) {
						(e || (e = i.event)) && ("js" !== e._source && (e.stopImmediatePropagation(), e.preventDefault()), delete e._source)
					},
					n = function(n) {
						(n || (n = i.event)) && (t(n), kt.focus(e))
					};
				e.addEventListener("mouseover", n, !1), e.addEventListener("mouseout", t, !1), e.addEventListener("mouseenter", t, !1), e.addEventListener("mouseleave", t, !1), e.addEventListener("mousemove", t, !1), Dt[e.zcClippingId] = {
					mouseover: n,
					mouseout: t,
					mouseenter: t,
					mouseleave: t,
					mousemove: t
				}
			}
		},
		Vt = function(e) {
			if (e && 1 === e.nodeType) {
				var t = Dt[e.zcClippingId];
				if ("object" == typeof t && t) {
					for (var n, i, o = ["move", "leave", "enter", "out", "over"], r = 0, a = o.length; a > r; r++) n = "mouse" + o[r], i = t[n], "function" == typeof i && e.removeEventListener(n, i, !1);
					delete Dt[e.zcClippingId]
				}
			}
		};
	kt._createClient = function() {
		jt.apply(this, b(arguments))
	}, kt.prototype.on = function() {
		return Rt.apply(this, b(arguments))
	}, kt.prototype.off = function() {
		return Ft.apply(this, b(arguments))
	}, kt.prototype.handlers = function() {
		return Pt.apply(this, b(arguments))
	}, kt.prototype.emit = function() {
		return Ot.apply(this, b(arguments))
	}, kt.prototype.clip = function() {
		return Nt.apply(this, b(arguments))
	}, kt.prototype.unclip = function() {
		return qt.apply(this, b(arguments))
	}, kt.prototype.elements = function() {
		return Lt.apply(this, b(arguments))
	}, kt.prototype.destroy = function() {
		return zt.apply(this, b(arguments))
	}, kt.prototype.setText = function(e) {
		return kt.setData("text/plain", e), this
	}, kt.prototype.setHtml = function(e) {
		return kt.setData("text/html", e), this
	}, kt.prototype.setRichText = function(e) {
		return kt.setData("application/rtf", e), this
	}, kt.prototype.setData = function() {
		return kt.setData.apply(this, b(arguments)), this
	}, kt.prototype.clearData = function() {
		return kt.clearData.apply(this, b(arguments)), this
	}, kt.prototype.getData = function() {
		return kt.getData.apply(this, b(arguments))
	}, "function" == typeof define && define.amd ? define(function() {
		return kt
	}) : "object" == typeof module && module && "object" == typeof module.exports && module.exports ? module.exports = kt : e.ZeroClipboard = kt
}(function() {
	return this || window
}()), ZeroClipboard.config({
		swfPath: "/assets/ZeroClipboard-91c4a20c253841a962286d2d643201d0.swf"
	}),
	function(e, t, n, i) {
		"use strict";
		e.fn.accordion = function(n) {
			{
				var o, r = e(this),
					a = (new Date).getTime(),
					s = [],
					l = arguments[0],
					c = "string" == typeof l,
					u = [].slice.call(arguments, 1);
				t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
					setTimeout(e, 0)
				}
			}
			return r.each(function() {
				var d, f, p = e.isPlainObject(n) ? e.extend(!0, {}, e.fn.accordion.settings, n) : e.extend({}, e.fn.accordion.settings),
					m = p.className,
					g = p.namespace,
					h = p.selector,
					v = p.error,
					b = "." + g,
					y = "module-" + g,
					x = r.selector || "",
					w = e(this),
					C = w.find(h.title),
					k = w.find(h.content),
					T = this,
					S = w.data(y);
				f = {
					initialize: function() {
						f.debug("Initializing", w), f.bind.events(), f.observeChanges(), f.instantiate()
					},
					instantiate: function() {
						S = f, w.data(y, f)
					},
					destroy: function() {
						f.debug("Destroying previous instance", w), w.off(b).removeData(y)
					},
					refresh: function() {
						C = w.find(h.title), k = w.find(h.content)
					},
					observeChanges: function() {
						"MutationObserver" in t && (d = new MutationObserver(function() {
							f.debug("DOM tree modified, updating selector cache"), f.refresh()
						}), d.observe(T, {
							childList: !0,
							subtree: !0
						}), f.debug("Setting up mutation observer", d))
					},
					bind: {
						events: function() {
							f.debug("Binding delegated events"), w.on(p.on + b, h.trigger, f.event.click)
						}
					},
					event: {
						click: function() {
							f.toggle.call(this)
						}
					},
					toggle: function(t) {
						var n = t !== i ? "number" == typeof t ? C.eq(t) : e(t).closest(h.title) : e(this).closest(h.title),
							o = n.next(k),
							r = o.hasClass(m.animating),
							a = o.hasClass(m.active),
							s = a && !r,
							l = !a && r;
						f.debug("Toggling visibility of content", n), s || l ? p.collapsible ? f.close.call(n) : f.debug("Cannot close accordion content collapsing is disabled") : f.open.call(n)
					},
					open: function(t) {
						var n = t !== i ? "number" == typeof t ? C.eq(t) : e(t).closest(h.title) : e(this).closest(h.title),
							o = n.next(k),
							r = o.hasClass(m.animating),
							a = o.hasClass(m.active),
							s = a || r;
						return s ? void f.debug("Accordion already open, skipping", o) : (f.debug("Opening accordion content", n), p.onOpening.call(o), p.exclusive && f.closeOthers.call(n), n.addClass(m.active), o.stop(!0, !0).addClass(m.animating), p.animateChildren && (e.fn.transition !== i && w.transition("is supported") ? o.children().transition({
							animation: "fade in",
							queue: !1,
							useFailSafe: !0,
							debug: p.debug,
							verbose: p.verbose,
							duration: p.duration
						}) : o.children().stop(!0, !0).animate({
							opacity: 1
						}, p.duration, f.resetOpacity)), void o.slideDown(p.duration, p.easing, function() {
							o.removeClass(m.animating).addClass(m.active), f.reset.display.call(this), p.onOpen.call(this), p.onChange.call(this)
						}))
					},
					close: function(t) {
						var n = t !== i ? "number" == typeof t ? C.eq(t) : e(t).closest(h.title) : e(this).closest(h.title),
							o = n.next(k),
							r = o.hasClass(m.animating),
							a = o.hasClass(m.active),
							s = !a && r,
							l = a && r;
						!a && !s || l || (f.debug("Closing accordion content", o), p.onClosing.call(o), n.removeClass(m.active), o.stop(!0, !0).addClass(m.animating), p.animateChildren && (e.fn.transition !== i && w.transition("is supported") ? o.children().transition({
							animation: "fade out",
							queue: !1,
							useFailSafe: !0,
							debug: p.debug,
							verbose: p.verbose,
							duration: p.duration
						}) : o.children().stop(!0, !0).animate({
							opacity: 0
						}, p.duration, f.resetOpacity)), o.slideUp(p.duration, p.easing, function() {
							o.removeClass(m.animating).removeClass(m.active), f.reset.display.call(this), p.onClose.call(this), p.onChange.call(this)
						}))
					},
					closeOthers: function(t) {
						var n, o, r, a = t !== i ? C.eq(t) : e(this).closest(h.title),
							s = a.parents(h.content).prev(h.title),
							l = a.closest(h.accordion),
							c = h.title + "." + m.active + ":visible",
							u = h.content + "." + m.active + ":visible";
						p.closeNested ? (n = l.find(c).not(s), r = n.next(k)) : (n = l.find(c).not(s), o = l.find(u).find(c).not(s), n = n.not(o), r = n.next(k)), n.length > 0 && (f.debug("Exclusive enabled, closing other content", n), n.removeClass(m.active), r.removeClass(m.animating).stop(!0, !0), p.animateChildren && (e.fn.transition !== i && w.transition("is supported") ? r.children().transition({
							animation: "fade out",
							useFailSafe: !0,
							debug: p.debug,
							verbose: p.verbose,
							duration: p.duration
						}) : r.children().stop(!0, !0).animate({
							opacity: 0
						}, p.duration, f.resetOpacity)), r.slideUp(p.duration, p.easing, function() {
							e(this).removeClass(m.active), f.reset.display.call(this)
						}))
					},
					reset: {
						display: function() {
							f.verbose("Removing inline display from element", this), e(this).css("display", ""), "" === e(this).attr("style") && e(this).attr("style", "").removeAttr("style")
						},
						opacity: function() {
							f.verbose("Removing inline opacity from element", this), e(this).css("opacity", ""), "" === e(this).attr("style") && e(this).attr("style", "").removeAttr("style")
						}
					},
					setting: function(t, n) {
						if (f.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, p, t);
						else {
							if (n === i) return p[t];
							p[t] = n
						}
					},
					internal: function(t, n) {
						return f.debug("Changing internal", t, n), n === i ? f[t] : void(e.isPlainObject(t) ? e.extend(!0, f, t) : f[t] = n)
					},
					debug: function() {
						p.debug && (p.performance ? f.performance.log(arguments) : (f.debug = Function.prototype.bind.call(console.info, console, p.name + ":"), f.debug.apply(console, arguments)))
					},
					verbose: function() {
						p.verbose && p.debug && (p.performance ? f.performance.log(arguments) : (f.verbose = Function.prototype.bind.call(console.info, console, p.name + ":"), f.verbose.apply(console, arguments)))
					},
					error: function() {
						f.error = Function.prototype.bind.call(console.error, console, p.name + ":"), f.error.apply(console, arguments)
					},
					performance: {
						log: function(e) {
							var t, n, i;
							p.performance && (t = (new Date).getTime(), i = a || t, n = t - i, a = t, s.push({
								Name: e[0],
								Arguments: [].slice.call(e, 1) || "",
								Element: T,
								"Execution Time": n
							})), clearTimeout(f.performance.timer), f.performance.timer = setTimeout(f.performance.display, 500)
						},
						display: function() {
							var t = p.name + ":",
								n = 0;
							a = !1, clearTimeout(f.performance.timer), e.each(s, function(e, t) {
								n += t["Execution Time"]
							}), t += " " + n + "ms", x && (t += " '" + x + "'"), (console.group !== i || console.table !== i) && s.length > 0 && (console.groupCollapsed(t), console.table ? console.table(s) : e.each(s, function(e, t) {
								console.log(t.Name + ": " + t["Execution Time"] + "ms")
							}), console.groupEnd()), s = []
						}
					},
					invoke: function(t, n, r) {
						var a, s, l, c = S;
						return n = n || u, r = T || r, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), a = t.length - 1, e.each(t, function(n, o) {
							var r = n != a ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
							if (e.isPlainObject(c[r]) && n != a) c = c[r];
							else {
								if (c[r] !== i) return s = c[r], !1;
								if (!e.isPlainObject(c[o]) || n == a) return c[o] !== i ? (s = c[o], !1) : (f.error(v.method, t), !1);
								c = c[o]
							}
						})), e.isFunction(s) ? l = s.apply(r, n) : s !== i && (l = s), e.isArray(o) ? o.push(l) : o !== i ? o = [o, l] : l !== i && (o = l), s
					}
				}, c ? (S === i && f.initialize(), f.invoke(l)) : (S !== i && S.invoke("destroy"), f.initialize())
			}), o !== i ? o : this
		}, e.fn.accordion.settings = {
			name: "Accordion",
			namespace: "accordion",
			debug: !1,
			verbose: !1,
			performance: !0,
			on: "click",
			exclusive: !0,
			collapsible: !0,
			closeNested: !1,
			animateChildren: !0,
			duration: 350,
			easing: "easeOutQuad",
			onOpening: function() {},
			onOpen: function() {},
			onClosing: function() {},
			onClose: function() {},
			onChange: function() {},
			error: {
				method: "The method you called is not defined"
			},
			className: {
				active: "active",
				animating: "animating"
			},
			selector: {
				accordion: ".accordion",
				title: ".title",
				trigger: ".title",
				content: ".content"
			}
		}, e.extend(e.easing, {
			easeOutQuad: function(e, t, n, i, o) {
				return -i * (t /= o) * (t - 2) + n
			}
		})
	}(jQuery, window, document),
	function(e, t, n, i) {
		"use strict";
		e.api = e.fn.api = function(n) {
			var o, r = e(e.isFunction(this) ? t : this),
				a = r.selector || "",
				s = (new Date).getTime(),
				l = [],
				c = arguments[0],
				u = "string" == typeof c,
				d = [].slice.call(arguments, 1);
			return r.each(function() {
				var r, f, p, m, g, h, v = e.isPlainObject(n) ? e.extend(!0, {}, e.fn.api.settings, n) : e.extend({}, e.fn.api.settings),
					b = v.namespace,
					y = v.metadata,
					x = v.selector,
					w = v.error,
					C = v.className,
					k = "." + b,
					T = "module-" + b,
					S = e(this),
					E = S.closest(x.form),
					A = v.stateContext ? e(v.stateContext) : S,
					D = this,
					j = A[0],
					R = S.data(T);
				h = {
					initialize: function() {
						u || h.bind.events(), h.instantiate()
					},
					instantiate: function() {
						h.verbose("Storing instance of module", h), R = h, S.data(T, R)
					},
					destroy: function() {
						h.verbose("Destroying previous module for", D), S.removeData(T).off(k)
					},
					bind: {
						events: function() {
							var e = h.get.event();
							e ? (h.verbose("Attaching API events to element", e), S.on(e + k, h.event.trigger)) : "now" == v.on && (h.debug("Querying API now", e), h.query())
						}
					},
					decode: {
						json: function(e) {
							if (e !== i && "string" == typeof e) try {
								e = JSON.parse(e)
							} catch (t) {}
							return e
						}
					},
					read: {
						cachedResponse: function(e) {
							var n;
							return t.Storage === i ? void h.error(w.noStorage) : (n = sessionStorage.getItem(e), h.debug("Using cached response", e, n), n = h.decode.json(n), !1)
						}
					},
					write: {
						cachedResponse: function(n, o) {
							return o && "" === o ? void h.debug("Response empty, not caching", o) : t.Storage === i ? void h.error(w.noStorage) : (e.isPlainObject(o) && (o = JSON.stringify(o)), sessionStorage.setItem(n, o), void h.verbose("Storing cached response for url", n, o))
						}
					},
					query: function() {
						if (h.is.disabled()) return void h.debug("Element is disabled API request aborted");
						if (h.is.loading()) {
							if (!v.interruptRequests) return void h.debug("Cancelling request, previous request is still pending");
							h.debug("Interrupting previous request"), h.abort()
						}
						return v.defaultData && e.extend(!0, v.urlData, h.get.defaultData()), v.serializeForm && (v.data = h.add.formData(v.data)), f = h.get.settings(), f === !1 ? (h.cancelled = !0, void h.error(w.beforeSend)) : (h.cancelled = !1, p = h.get.templatedURL(), p || h.is.mocked() ? (p = h.add.urlData(p), p || h.is.mocked() ? (r = e.extend(!0, {}, v, {
							type: v.method || v.type,
							data: m,
							url: v.base + p,
							beforeSend: v.beforeXHR,
							success: function() {},
							failure: function() {},
							complete: function() {}
						}), h.debug("Querying URL", r.url), h.verbose("Using AJAX settings", r), "local" === v.cache && h.read.cachedResponse(p) ? (h.debug("Response returned from local cache"), h.request = h.create.request(), void h.request.resolveWith(j, [h.read.cachedResponse(p)])) : void(v.throttle ? v.throttleFirstRequest || h.timer ? (h.debug("Throttling request", v.throttle), clearTimeout(h.timer), h.timer = setTimeout(function() {
							h.timer && delete h.timer, h.debug("Sending throttled request", m, r.method), h.send.request()
						}, v.throttle)) : (h.debug("Sending request", m, r.method), h.send.request(), h.timer = setTimeout(function() {}, v.throttle)) : (h.debug("Sending request", m, r.method), h.send.request()))) : void 0) : void h.error(w.missingURL))
					},
					is: {
						disabled: function() {
							return S.filter(x.disabled).length > 0
						},
						form: function() {
							return S.is("form")
						},
						mocked: function() {
							return v.mockResponse || v.mockResponseAsync
						},
						input: function() {
							return S.is("input")
						},
						loading: function() {
							return h.request && "pending" == h.request.state()
						},
						abortedRequest: function(e) {
							return e && e.readyState !== i && 0 === e.readyState ? (h.verbose("XHR request determined to be aborted"), !0) : (h.verbose("XHR request was not aborted"), !1)
						},
						validResponse: function(t) {
							return "json" !== v.dataType && "jsonp" !== v.dataType || !e.isFunction(v.successTest) ? (h.verbose("Response is not JSON, skipping validation", v.successTest, t), !0) : (h.debug("Checking JSON returned success", v.successTest, t), v.successTest(t) ? (h.debug("Response passed success test", t), !0) : (h.debug("Response failed success test", t), !1))
						}
					},
					was: {
						cancelled: function() {
							return h.cancelled || !1
						},
						succesful: function() {
							return h.request && "resolved" == h.request.state()
						},
						failure: function() {
							return h.request && "rejected" == h.request.state()
						},
						complete: function() {
							return h.request && ("resolved" == h.request.state() || "rejected" == h.request.state())
						}
					},
					add: {
						urlData: function(t, n) {
							var o, r;
							return t && (o = t.match(v.regExp.required), r = t.match(v.regExp.optional), n = n || v.urlData, o && (h.debug("Looking for required URL variables", o), e.each(o, function(o, r) {
								var a = -1 !== r.indexOf("$") ? r.substr(2, r.length - 3) : r.substr(1, r.length - 2),
									s = e.isPlainObject(n) && n[a] !== i ? n[a] : S.data(a) !== i ? S.data(a) : A.data(a) !== i ? A.data(a) : n[a];
								return s === i ? (h.error(w.requiredParameter, a, t), t = !1, !1) : (h.verbose("Found required variable", a, s), void(t = t.replace(r, h.get.urlEncodedValue(s))))
							})), r && (h.debug("Looking for optional URL variables", o), e.each(r, function(o, r) {
								var a = -1 !== r.indexOf("$") ? r.substr(3, r.length - 4) : r.substr(2, r.length - 3),
									s = e.isPlainObject(n) && n[a] !== i ? n[a] : S.data(a) !== i ? S.data(a) : A.data(a) !== i ? A.data(a) : n[a];
								s !== i ? (h.verbose("Optional variable Found", a, s), t = t.replace(r, s)) : (h.verbose("Optional variable not found", a), t = -1 !== t.indexOf("/" + r) ? t.replace("/" + r, "") : t.replace(r, ""))
							}))), t
						},
						formData: function(t) {
							var n, o = e.fn.serializeObject !== i,
								r = o ? E.serializeObject() : E.serialize();
							return t = t || v.data, n = e.isPlainObject(t), n ? o ? (h.debug("Extending existing data with form data", t, r), t = e.extend(!0, {}, t, r)) : (h.error(w.missingSerialize), h.debug("Cant extend data. Replacing data with form data", t, r), t = r) : (h.debug("Adding form data", r), t = r), t
						}
					},
					send: {
						request: function() {
							h.set.loading(), h.request = h.create.request(), h.is.mocked() ? h.mockedXHR = h.create.mockedXHR() : h.xhr = h.create.xhr(), v.onRequest.call(j, h.request, h.xhr)
						}
					},
					event: {
						trigger: function(e) {
							h.query(), ("submit" == e.type || "click" == e.type) && e.preventDefault()
						},
						xhr: {
							always: function() {},
							done: function(t, n, i) {
								var o = this,
									r = (new Date).getTime() - g,
									a = v.loadingDuration - r,
									s = e.isFunction(v.onResponse) ? v.onResponse.call(o, e.extend(!0, {}, t)) : !1;
								a = a > 0 ? a : 0, s && (h.debug("Modified API response in onResponse callback", v.onResponse, s, t), t = s), a > 0 && h.debug("Response completed early delaying state change by", a), setTimeout(function() {
									h.is.validResponse(t) ? h.request.resolveWith(o, [t, i]) : h.request.rejectWith(o, [i, "invalid"])
								}, a)
							},
							fail: function(e, t, n) {
								var i = this,
									o = (new Date).getTime() - g,
									r = v.loadingDuration - o;
								r = r > 0 ? r : 0, r > 0 && h.debug("Response completed early delaying state change by", r), setTimeout(function() {
									h.is.abortedRequest(e) ? h.request.rejectWith(i, [e, "aborted", n]) : h.request.rejectWith(i, [e, "error", t, n])
								}, r)
							}
						},
						request: {
							done: function(e, t) {
								h.debug("Successful API Response", e), "local" === v.cache && p && (h.write.cachedResponse(p, e), h.debug("Saving server response locally", h.cache)), v.onSuccess.call(j, e, S, t)
							},
							complete: function(e, t) {
								var n, i;
								h.was.succesful() ? (i = e, n = t) : (n = e, i = h.get.responseFromXHR(n)), h.remove.loading(), v.onComplete.call(j, i, S, n)
							},
							fail: function(e, t, n) {
								var o = h.get.responseFromXHR(e),
									a = h.get.errorFromRequest(o, t, n);
								"aborted" == t ? (h.debug("XHR Aborted (Most likely caused by page navigation or CORS Policy)", t, n), v.onAbort.call(j, t, S, e)) : "invalid" == t ? h.debug("JSON did not pass success test. A server-side error has most likely occurred", o) : "error" == t && e !== i && (h.debug("XHR produced a server error", t, n), 200 != e.status && n !== i && "" !== n && h.error(w.statusMessage + n, r.url), v.onError.call(j, a, S, e)), v.errorDuration && "aborted" !== t && (h.debug("Adding error state"), h.set.error(), setTimeout(h.remove.error, v.errorDuration)), h.debug("API Request failed", a, e), v.onFailure.call(j, o, S, e)
							}
						}
					},
					create: {
						request: function() {
							return e.Deferred().always(h.event.request.complete).done(h.event.request.done).fail(h.event.request.fail)
						},
						mockedXHR: function() {
							var t, n, i, o = !1,
								r = !1,
								a = !1;
							return i = e.Deferred().always(h.event.xhr.complete).done(h.event.xhr.done).fail(h.event.xhr.fail), v.mockResponse ? (e.isFunction(v.mockResponse) ? (h.debug("Using mocked callback returning response", v.mockResponse), n = v.mockResponse.call(j, v)) : (h.debug("Using specified response", v.mockResponse), n = v.mockResponse), i.resolveWith(j, [n, o, {
								responseText: n
							}])) : e.isFunction(v.mockResponseAsync) && (t = function(e) {
								h.debug("Async callback returned response", e), e ? i.resolveWith(j, [e, o, {
									responseText: e
								}]) : i.rejectWith(j, [{
										responseText: e
									},
									r, a
								])
							}, h.debug("Using async mocked response", v.mockResponseAsync), v.mockResponseAsync.call(j, v, t)), i
						},
						xhr: function() {
							var t;
							return t = e.ajax(r).always(h.event.xhr.always).done(h.event.xhr.done).fail(h.event.xhr.fail), h.verbose("Created server request", t), t
						}
					},
					set: {
						error: function() {
							h.verbose("Adding error state to element", A), A.addClass(C.error)
						},
						loading: function() {
							h.verbose("Adding loading state to element", A), A.addClass(C.loading), g = (new Date).getTime()
						}
					},
					remove: {
						error: function() {
							h.verbose("Removing error state from element", A), A.removeClass(C.error)
						},
						loading: function() {
							h.verbose("Removing loading state from element", A), A.removeClass(C.loading)
						}
					},
					get: {
						responseFromXHR: function(t) {
							return e.isPlainObject(t) ? "json" == v.dataType || "jsonp" == v.dataType ? h.decode.json(t.responseText) : t.responseText : !1
						},
						errorFromRequest: function(t, n, o) {
							return e.isPlainObject(t) && t.error !== i ? t.error : v.error[n] !== i ? v.error[n] : o
						},
						request: function() {
							return h.request || !1
						},
						xhr: function() {
							return h.xhr || !1
						},
						settings: function() {
							var e;
							return e = v.beforeSend.call(j, v), e && (e.success !== i && (h.debug("Legacy success callback detected", e), h.error(w.legacyParameters, e.success), e.onSuccess = e.success), e.failure !== i && (h.debug("Legacy failure callback detected", e), h.error(w.legacyParameters, e.failure), e.onFailure = e.failure), e.complete !== i && (h.debug("Legacy complete callback detected", e), h.error(w.legacyParameters, e.complete), e.onComplete = e.complete)), e === i && h.error(w.noReturnedValue), e !== i ? e : v
						},
						urlEncodedValue: function(e) {
							var n = t.decodeURIComponent(e),
								i = t.encodeURIComponent(e),
								o = n !== e;
							return o ? (h.debug("URL value is already encoded, avoiding double encoding", e), e) : (h.verbose("Encoding value for url", e, i), i)
						},
						defaultData: function() {
							var t = {};
							return e.isWindow(D) || (h.is.input() ? t.value = S.val() : h.is.form() && (t.text = S.text())), t
						},
						event: function() {
							return e.isWindow(D) || "now" == v.on ? (h.debug("API called without element, no events attached"), !1) : "auto" == v.on ? S.is("input") ? D.oninput !== i ? "input" : D.onpropertychange !== i ? "propertychange" : "keyup" : S.is("form") ? "submit" : "click" : v.on
						},
						templatedURL: function(e) {
							if (e = e || S.data(y.action) || v.action || !1, p = S.data(y.url) || v.url || !1) return h.debug("Using specified url", p), p;
							if (e) {
								if (h.debug("Looking up url for action", e, v.api), v.api[e] === i && !h.is.mocked()) return void h.error(w.missingAction, v.action, v.api);
								p = v.api[e]
							} else h.is.form() && (p = S.attr("action") || !1, h.debug("No url or action specified, defaulting to form action", p));
							return p
						}
					},
					abort: function() {
						var e = h.get.xhr();
						e && "resolved" !== e.state() && (h.debug("Cancelling API request"), e.abort())
					},
					reset: function() {
						h.remove.error(), h.remove.loading()
					},
					setting: function(t, n) {
						if (h.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, v, t);
						else {
							if (n === i) return v[t];
							v[t] = n
						}
					},
					internal: function(t, n) {
						if (e.isPlainObject(t)) e.extend(!0, h, t);
						else {
							if (n === i) return h[t];
							h[t] = n
						}
					},
					debug: function() {
						v.debug && (v.performance ? h.performance.log(arguments) : (h.debug = Function.prototype.bind.call(console.info, console, v.name + ":"), h.debug.apply(console, arguments)))
					},
					verbose: function() {
						v.verbose && v.debug && (v.performance ? h.performance.log(arguments) : (h.verbose = Function.prototype.bind.call(console.info, console, v.name + ":"), h.verbose.apply(console, arguments)))
					},
					error: function() {
						h.error = Function.prototype.bind.call(console.error, console, v.name + ":"), h.error.apply(console, arguments)
					},
					performance: {
						log: function(e) {
							var t, n, i;
							v.performance && (t = (new Date).getTime(), i = s || t, n = t - i, s = t, l.push({
								Name: e[0],
								Arguments: [].slice.call(e, 1) || "",
								"Execution Time": n
							})), clearTimeout(h.performance.timer), h.performance.timer = setTimeout(h.performance.display, 500)
						},
						display: function() {
							var t = v.name + ":",
								n = 0;
							s = !1, clearTimeout(h.performance.timer), e.each(l, function(e, t) {
								n += t["Execution Time"]
							}), t += " " + n + "ms", a && (t += " '" + a + "'"), (console.group !== i || console.table !== i) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function(e, t) {
								console.log(t.Name + ": " + t["Execution Time"] + "ms")
							}), console.groupEnd()), l = []
						}
					},
					invoke: function(t, n, r) {
						var a, s, l, c = R;
						return n = n || d, r = D || r, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), a = t.length - 1, e.each(t, function(n, o) {
							var r = n != a ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
							if (e.isPlainObject(c[r]) && n != a) c = c[r];
							else {
								if (c[r] !== i) return s = c[r], !1;
								if (!e.isPlainObject(c[o]) || n == a) return c[o] !== i ? (s = c[o], !1) : (h.error(w.method, t), !1);
								c = c[o]
							}
						})), e.isFunction(s) ? l = s.apply(r, n) : s !== i && (l = s), e.isArray(o) ? o.push(l) : o !== i ? o = [o, l] : l !== i && (o = l), s
					}
				}, u ? (R === i && h.initialize(), h.invoke(c)) : (R !== i && R.invoke("destroy"), h.initialize())
			}), o !== i ? o : this
		}, e.api.settings = {
			name: "API",
			namespace: "api",
			debug: !0,
			verbose: !1,
			performance: !0,
			api: {},
			cache: !0,
			interruptRequests: !0,
			on: "auto",
			stateContext: !1,
			loadingDuration: 0,
			errorDuration: 2e3,
			action: !1,
			url: !1,
			base: "",
			urlData: {},
			defaultData: !0,
			serializeForm: !1,
			throttle: 0,
			throttleFirstRequest: !0,
			method: "get",
			data: {},
			dataType: "json",
			mockResponse: !1,
			mockResponseAsync: !1,
			beforeSend: function(e) {
				return e
			},
			beforeXHR: function() {},
			onRequest: function() {},
			onResponse: !1,
			onSuccess: function() {},
			onComplete: function() {},
			onFailure: function() {},
			onError: function() {},
			onAbort: function() {},
			successTest: !1,
			error: {
				beforeSend: "The before send function has aborted the request",
				error: "There was an error with your request",
				exitConditions: "API Request Aborted. Exit conditions met",
				JSONParse: "JSON could not be parsed during error handling",
				legacyParameters: "You are using legacy API success callback names",
				method: "The method you called is not defined",
				missingAction: "API action used but no url was defined",
				missingSerialize: "jquery-serialize-object is required to add form data to an existing data object",
				missingURL: "No URL specified for api event",
				noReturnedValue: "The beforeSend callback must return a settings object, beforeSend ignored.",
				noStorage: "Caching respopnses locally requires session storage",
				parseError: "There was an error parsing your request",
				requiredParameter: "Missing a required URL parameter: ",
				statusMessage: "Server gave an error: ",
				timeout: "Your request timed out"
			},
			regExp: {
				required: /\{\$*[A-z0-9]+\}/g,
				optional: /\{\/\$*[A-z0-9]+\}/g
			},
			className: {
				loading: "loading",
				error: "error"
			},
			selector: {
				disabled: ".disabled",
				form: "form"
			},
			metadata: {
				action: "action",
				url: "url"
			}
		}
	}(jQuery, window, document),
	function(e, t, n, i) {
		"use strict";
		e.fn.checkbox = function(n) {
			var o, r = e(this),
				a = r.selector || "",
				s = (new Date).getTime(),
				l = [],
				c = arguments[0],
				u = "string" == typeof c,
				d = [].slice.call(arguments, 1);
			return r.each(function() {
				var r, f, p = e.extend(!0, {}, e.fn.checkbox.settings, n),
					m = p.className,
					g = p.namespace,
					h = p.selector,
					v = p.error,
					b = "." + g,
					y = "module-" + g,
					x = e(this),
					w = e(this).children(h.label),
					C = e(this).children(h.input),
					k = !1,
					T = x.data(y),
					S = this;
				f = {
					initialize: function() {
						f.verbose("Initializing checkbox", p), f.create.label(), f.bind.events(), f.set.tabbable(), f.hide.input(), f.observeChanges(), f.instantiate(), f.setup()
					},
					instantiate: function() {
						f.verbose("Storing instance of module", f), T = f, x.data(y, f)
					},
					destroy: function() {
						f.verbose("Destroying module"), f.unbind.events(), f.show.input(), x.removeData(y)
					},
					fix: {
						reference: function() {
							x.is(h.input) && (f.debug("Behavior called on <input> adjusting invoked element"), x = x.closest(h.checkbox), f.refresh())
						}
					},
					setup: function() {
						f.is.indeterminate() ? (f.debug("Initial value is indeterminate"), f.set.indeterminate(), p.fireOnInit && (p.onIndeterminate.call(C[0]), p.onChange.call(C[0]))) : f.is.checked() ? (f.debug("Initial value is checked"), f.set.checked(), p.fireOnInit && (p.onChecked.call(C[0]), p.onChange.call(C[0]))) : (f.debug("Initial value is unchecked"), f.set.unchecked(), p.fireOnInit && (p.onUnchecked.call(C[0]), p.onChange.call(C[0])))
					},
					refresh: function() {
						w = x.children(h.label), C = x.children(h.input)
					},
					hide: {
						input: function() {
							f.verbose("Modfying <input> z-index to be unselectable"), C.addClass(m.hidden)
						}
					},
					show: {
						input: function() {
							f.verbose("Modfying <input> z-index to be selectable"), C.removeClass(m.hidden)
						}
					},
					observeChanges: function() {
						"MutationObserver" in t && (r = new MutationObserver(function() {
							f.debug("DOM tree modified, updating selector cache"), f.refresh()
						}), r.observe(S, {
							childList: !0,
							subtree: !0
						}), f.debug("Setting up mutation observer", r))
					},
					attachEvents: function(t, n) {
						var i = e(t);
						n = e.isFunction(f[n]) ? f[n] : f.toggle, i.length > 0 ? (f.debug("Attaching checkbox events to element", t, n), i.on("click" + b, n)) : f.error(v.notFound)
					},
					event: {
						click: function(t) {
							return e(t.target).is(h.input) ? void f.verbose("Using default check action on initialized checkbox") : (f.toggle(), C.focus(), void t.preventDefault())
						},
						keydown: function(e) {
							var t = e.which,
								n = {
									enter: 13,
									space: 32,
									escape: 27
								};
							t == n.escape ? (f.verbose("Escape key pressed blurring field"), C.blur(), k = !0) : e.ctrlKey || t != n.space && t != n.enter ? k = !1 : (f.verbose("Enter/space key pressed, toggling checkbox"), f.toggle(), k = !0)
						},
						keyup: function(e) {
							k && e.preventDefault()
						}
					},
					check: function() {
						return !f.is.indeterminate() && f.is.checked() ? void f.debug("Checkbox is already checked") : (f.debug("Checking checkbox", C), f.set.checked(), p.onChecked.call(C[0]), void p.onChange.call(C[0]))
					},
					uncheck: function() {
						return !f.is.indeterminate() && f.is.unchecked() ? void f.debug("Checkbox is already unchecked") : (f.debug("Unchecking checkbox"), f.set.unchecked(), p.onUnchecked.call(C[0]), void p.onChange.call(C[0]))
					},
					indeterminate: function() {
						return f.is.indeterminate() ? void f.debug("Checkbox is already indeterminate") : (f.debug("Making checkbox indeterminate"), f.set.indeterminate(), p.onIndeterminate.call(C[0]), void p.onChange.call(C[0]))
					},
					determinate: function() {
						return f.is.determinate() ? void f.debug("Checkbox is already determinate") : (f.debug("Making checkbox determinate"), f.set.determinate(), p.onDeterminate.call(C[0]), void p.onChange.call(C[0]))
					},
					enable: function() {
						return f.is.enabled() ? void f.debug("Checkbox is already enabled") : (f.debug("Enabling checkbox"), f.set.enabled(), void p.onEnable.call(C[0]))
					},
					disable: function() {
						return f.is.disabled() ? void f.debug("Checkbox is already disabled") : (f.debug("Disabling checkbox"), f.set.disabled(), void p.onDisable.call(C[0]))
					},
					get: {
						radios: function() {
							var t = f.get.name();
							return e('input[name="' + t + '"]').closest(h.checkbox)
						},
						otherRadios: function() {
							return f.get.radios().not(x)
						},
						name: function() {
							return C.attr("name")
						}
					},
					is: {
						radio: function() {
							return C.hasClass(m.radio) || "radio" == C.attr("type")
						},
						indeterminate: function() {
							return C.prop("indeterminate") !== i && C.prop("indeterminate")
						},
						checked: function() {
							return C.prop("checked") !== i && C.prop("checked")
						},
						disabled: function() {
							return C.prop("disabled") !== i && C.prop("disabled")
						},
						enabled: function() {
							return !f.is.disabled()
						},
						determinate: function() {
							return !f.is.indeterminate()
						},
						unchecked: function() {
							return !f.is.checked()
						}
					},
					can: {
						change: function() {
							return !(x.hasClass(m.disabled) || x.hasClass(m.readOnly) || C.prop("disabled") || C.prop("readonly"))
						},
						uncheck: function() {
							return "boolean" == typeof p.uncheckable ? p.uncheckable : !f.is.radio()
						}
					},
					set: {
						checked: function() {
							return f.verbose("Setting class to checked"), x.removeClass(m.indeterminate).addClass(m.checked), f.is.radio() && f.uncheckOthers(), !f.is.indeterminate() && f.is.checked() ? void f.debug("Input is already checked, skipping input property change") : (f.verbose("Setting state to checked", C[0]), C.prop("indeterminate", !1).prop("checked", !0), void f.trigger.change())
						},
						unchecked: function() {
							return f.verbose("Removing checked class"), x.removeClass(m.indeterminate).removeClass(m.checked), !f.is.indeterminate() && f.is.unchecked() ? void f.debug("Input is already unchecked") : (f.debug("Setting state to unchecked"), C.prop("indeterminate", !1).prop("checked", !1), void f.trigger.change())
						},
						indeterminate: function() {
							return f.verbose("Setting class to indeterminate"), x.addClass(m.indeterminate), f.is.indeterminate() ? void f.debug("Input is already indeterminate, skipping input property change") : (f.debug("Setting state to indeterminate"), C.prop("indeterminate", !0), void f.trigger.change())
						},
						determinate: function() {
							return f.verbose("Removing indeterminate class"), x.removeClass(m.indeterminate), f.is.determinate() ? void f.debug("Input is already determinate, skipping input property change") : (f.debug("Setting state to determinate"), void C.prop("indeterminate", !1))
						},
						disabled: function() {
							return f.verbose("Setting class to disabled"), x.addClass(m.disabled), f.is.disabled() ? void f.debug("Input is already disabled, skipping input property change") : (f.debug("Setting state to disabled"), C.prop("disabled", "disabled"), void f.trigger.change())
						},
						enabled: function() {
							return f.verbose("Removing disabled class"), x.removeClass(m.disabled), f.is.enabled() ? void f.debug("Input is already enabled, skipping input property change") : (f.debug("Setting state to enabled"), C.prop("disabled", !1), void f.trigger.change())
						},
						tabbable: function() {
							f.verbose("Adding tabindex to checkbox"), C.attr("tabindex") === i && C.attr("tabindex", 0)
						}
					},
					trigger: {
						change: function() {
							f.verbose("Triggering change event from programmatic change"), C.trigger("change")
						}
					},
					create: {
						label: function() {
							C.prevAll(h.label).length > 0 ? (C.prev(h.label).detach().insertAfter(C), f.debug("Moving existing label", w)) : f.has.label() || (w = e("<label>").insertAfter(C), f.debug("Creating label", w))
						}
					},
					has: {
						label: function() {
							return w.length > 0
						}
					},
					bind: {
						events: function() {
							f.verbose("Attaching checkbox events"), x.on("click" + b, f.event.click).on("keydown" + b, h.input, f.event.keydown).on("keyup" + b, h.input, f.event.keyup)
						}
					},
					unbind: {
						events: function() {
							f.debug("Removing events"), x.off(b)
						}
					},
					uncheckOthers: function() {
						var e = f.get.otherRadios();
						f.debug("Unchecking other radios", e), e.removeClass(m.checked)
					},
					toggle: function() {
						return f.can.change() ? void(f.is.indeterminate() || f.is.unchecked() ? (f.debug("Currently unchecked"), f.check()) : f.is.checked() && f.can.uncheck() && (f.debug("Currently checked"), f.uncheck())) : void(f.is.radio() || f.debug("Checkbox is read-only or disabled, ignoring toggle"))
					},
					setting: function(t, n) {
						if (f.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, p, t);
						else {
							if (n === i) return p[t];
							p[t] = n
						}
					},
					internal: function(t, n) {
						if (e.isPlainObject(t)) e.extend(!0, f, t);
						else {
							if (n === i) return f[t];
							f[t] = n
						}
					},
					debug: function() {
						p.debug && (p.performance ? f.performance.log(arguments) : (f.debug = Function.prototype.bind.call(console.info, console, p.name + ":"), f.debug.apply(console, arguments)))
					},
					verbose: function() {
						p.verbose && p.debug && (p.performance ? f.performance.log(arguments) : (f.verbose = Function.prototype.bind.call(console.info, console, p.name + ":"), f.verbose.apply(console, arguments)))
					},
					error: function() {
						f.error = Function.prototype.bind.call(console.error, console, p.name + ":"), f.error.apply(console, arguments)
					},
					performance: {
						log: function(e) {
							var t, n, i;
							p.performance && (t = (new Date).getTime(), i = s || t, n = t - i, s = t, l.push({
								Name: e[0],
								Arguments: [].slice.call(e, 1) || "",
								Element: S,
								"Execution Time": n
							})), clearTimeout(f.performance.timer), f.performance.timer = setTimeout(f.performance.display, 500)
						},
						display: function() {
							var t = p.name + ":",
								n = 0;
							s = !1, clearTimeout(f.performance.timer), e.each(l, function(e, t) {
								n += t["Execution Time"]
							}), t += " " + n + "ms", a && (t += " '" + a + "'"), (console.group !== i || console.table !== i) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function(e, t) {
								console.log(t.Name + ": " + t["Execution Time"] + "ms")
							}), console.groupEnd()), l = []
						}
					},
					invoke: function(t, n, r) {
						var a, s, l, c = T;
						return n = n || d, r = S || r, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), a = t.length - 1, e.each(t, function(n, o) {
							var r = n != a ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
							if (e.isPlainObject(c[r]) && n != a) c = c[r];
							else {
								if (c[r] !== i) return s = c[r], !1;
								if (!e.isPlainObject(c[o]) || n == a) return c[o] !== i ? (s = c[o], !1) : (f.error(v.method, t), !1);
								c = c[o]
							}
						})), e.isFunction(s) ? l = s.apply(r, n) : s !== i && (l = s), e.isArray(o) ? o.push(l) : o !== i ? o = [o, l] : l !== i && (o = l), s
					}
				}, u ? (T === i && f.initialize(), f.invoke(c)) : (T !== i && T.invoke("destroy"), f.initialize())
			}), o !== i ? o : this
		}, e.fn.checkbox.settings = {
			name: "Checkbox",
			namespace: "checkbox",
			debug: !1,
			verbose: !0,
			performance: !0,
			uncheckable: "auto",
			fireOnInit: !1,
			onChange: function() {},
			onChecked: function() {},
			onUnchecked: function() {},
			onDeterminate: function() {},
			onIndeterminate: function() {},
			onEnabled: function() {},
			onDisabled: function() {},
			className: {
				checked: "checked",
				indeterminate: "indeterminate",
				disabled: "disabled",
				hidden: "hidden",
				radio: "radio",
				readOnly: "read-only"
			},
			error: {
				method: "The method you called is not defined"
			},
			selector: {
				checkbox: ".ui.checkbox",
				label: "label, .box",
				input: 'input[type="checkbox"], input[type="radio"]'
			}
		}
	}(jQuery, window, document),
	function(e, t, n, i) {
		"use strict";
		e.fn.colorize = function(t) {
			var n = e.isPlainObject(t) ? e.extend(!0, {}, e.fn.colorize.settings, t) : e.extend({}, e.fn.colorize.settings),
				o = arguments || !1;
			return e(this).each(function(t) {
				var r, a, s, l, c, u, d, f, p = e(this),
					m = e("<canvas />")[0],
					g = e("<canvas />")[0],
					h = e("<canvas />")[0],
					v = new Image,
					b = n.colors,
					y = (n.paths, n.namespace),
					x = n.error,
					w = p.data("module-" + y);
				return f = {
					checkPreconditions: function() {
						return f.debug("Checking pre-conditions"), !e.isPlainObject(b) || e.isEmptyObject(b) ? (f.error(x.undefinedColors), !1) : !0
					},
					async: function(e) {
						n.async ? setTimeout(e, 0) : e()
					},
					getMetadata: function() {
						f.debug("Grabbing metadata"), l = p.data("image") || n.image || i, c = p.data("name") || n.name || t, u = n.width || p.width(), d = n.height || p.height(), (0 === u || 0 === d) && f.error(x.undefinedSize)
					},
					initialize: function() {
						f.debug("Initializing with colors", b), f.checkPreconditions() && f.async(function() {
							f.getMetadata(), f.canvas.create(), f.draw.image(function() {
								f.draw.colors(), f.canvas.merge()
							}), p.data("module-" + y, f)
						})
					},
					redraw: function() {
						f.debug("Redrawing image"), f.async(function() {
							f.canvas.clear(), f.draw.colors(), f.canvas.merge()
						})
					},
					change: {
						color: function(e, t) {
							return f.debug("Changing color", e), b[e] === i ? (f.error(x.missingColor), !1) : (b[e] = t, void f.redraw())
						}
					},
					canvas: {
						create: function() {
							f.debug("Creating canvases"), m.width = u, m.height = d, g.width = u, g.height = d, h.width = u, h.height = d, r = m.getContext("2d"), a = g.getContext("2d"), s = h.getContext("2d"), p.append(m), r = p.children("canvas")[0].getContext("2d")
						},
						clear: function() {
							f.debug("Clearing canvas"), s.fillStyle = "#FFFFFF", s.fillRect(0, 0, u, d)
						},
						merge: function() {
							return e.isFunction(r.blendOnto) ? (r.putImageData(a.getImageData(0, 0, u, d), 0, 0), void s.blendOnto(r, "multiply")) : void f.error(x.missingPlugin)
						}
					},
					draw: {
						image: function(e) {
							f.debug("Drawing image"), e = e || function() {}, l ? (v.src = l, v.onload = function() {
								a.drawImage(v, 0, 0), e()
							}) : (f.error(x.noImage), e())
						},
						colors: function() {
							f.debug("Drawing color overlays", b), e.each(b, function(e, t) {
								n.onDraw(s, c, e, t)
							})
						}
					},
					debug: function(e, t) {
						n.debug && (t !== i ? console.info(n.name + ": " + e, t) : console.info(n.name + ": " + e))
					},
					error: function(e) {
						console.warn(n.name + ": " + e)
					},
					invoke: function(t, o, r) {
						var a;
						return r = r || Array.prototype.slice.call(arguments, 2), "string" == typeof t && w !== i && (t = t.split("."), e.each(t, function(t, i) {
							return e.isPlainObject(w[i]) ? (w = w[i], !0) : e.isFunction(w[i]) ? (a = w[i], !0) : (f.error(n.error.method), !1)
						})), e.isFunction(a) ? a.apply(o, r) : !1
					}
				}, w !== i && o ? ("invoke" == o[0] && (o = Array.prototype.slice.call(o, 1)), f.invoke(o[0], this, Array.prototype.slice.call(o, 1))) : void f.initialize()
			}), this
		}, e.fn.colorize.settings = {
			name: "Image Colorizer",
			debug: !0,
			namespace: "colorize",
			onDraw: function() {},
			async: !0,
			colors: {},
			metadata: {
				image: "image",
				name: "name"
			},
			error: {
				noImage: "No tracing image specified",
				undefinedColors: "No default colors specified.",
				missingColor: "Attempted to change color that does not exist",
				missingPlugin: "Blend onto plug-in must be included",
				undefinedHeight: "The width or height of image canvas could not be automatically determined. Please specify a height."
			}
		}
	}(jQuery, window, document),
	function(e, t, n, i) {
		"use strict";
		e.fn.dimmer = function(t) {
			var o, r = e(this),
				a = (new Date).getTime(),
				s = [],
				l = arguments[0],
				c = "string" == typeof l,
				u = [].slice.call(arguments, 1);
			return r.each(function() {
				var d, f, p, m = e.isPlainObject(t) ? e.extend(!0, {}, e.fn.dimmer.settings, t) : e.extend({}, e.fn.dimmer.settings),
					g = m.selector,
					h = m.namespace,
					v = m.className,
					b = m.error,
					y = "." + h,
					x = "module-" + h,
					w = r.selector || "",
					C = "ontouchstart" in n.documentElement ? "touchstart" : "click",
					k = e(this),
					T = this,
					S = k.data(x);
				p = {
					preinitialize: function() {
						p.is.dimmer() ? (f = k.parent(), d = k) : (f = k, d = p.has.dimmer() ? m.dimmerName ? f.find(g.dimmer).filter("." + m.dimmerName) : f.find(g.dimmer) : p.create())
					},
					initialize: function() {
						p.debug("Initializing dimmer", m), p.bind.events(), p.set.dimmable(), p.instantiate()
					},
					instantiate: function() {
						p.verbose("Storing instance of module", p), S = p, k.data(x, S)
					},
					destroy: function() {
						p.verbose("Destroying previous module", d), p.unbind.events(), p.remove.variation(), f.off(y)
					},
					bind: {
						events: function() {
							"hover" == m.on ? f.on("mouseenter" + y, p.show).on("mouseleave" + y, p.hide) : "click" == m.on && f.on(C + y, p.toggle), p.is.page() && (p.debug("Setting as a page dimmer", f), p.set.pageDimmer()), p.is.closable() && (p.verbose("Adding dimmer close event", d), f.on(C + y, g.dimmer, p.event.click))
						}
					},
					unbind: {
						events: function() {
							k.removeData(x)
						}
					},
					event: {
						click: function(t) {
							p.verbose("Determining if event occured on dimmer", t), (0 === d.find(t.target).length || e(t.target).is(g.content)) && (p.hide(), t.stopImmediatePropagation())
						}
					},
					addContent: function(t) {
						var n = e(t);
						p.debug("Add content to dimmer", n), n.parent()[0] !== d[0] && n.detach().appendTo(d)
					},
					create: function() {
						var t = e(m.template.dimmer());
						return m.variation && (p.debug("Creating dimmer with variation", m.variation), t.addClass(m.variation)), m.dimmerName && (p.debug("Creating named dimmer", m.dimmerName), t.addClass(m.dimmerName)), t.appendTo(f), t
					},
					show: function(t) {
						t = e.isFunction(t) ? t : function() {}, p.debug("Showing dimmer", d, m), p.is.dimmed() && !p.is.animating() || !p.is.enabled() ? p.debug("Dimmer is already shown or disabled") : (p.animate.show(t), m.onShow.call(T), m.onChange.call(T))
					},
					hide: function(t) {
						t = e.isFunction(t) ? t : function() {}, p.is.dimmed() || p.is.animating() ? (p.debug("Hiding dimmer", d), p.animate.hide(t), m.onHide.call(T), m.onChange.call(T)) : p.debug("Dimmer is not visible")
					},
					toggle: function() {
						p.verbose("Toggling dimmer visibility", d), p.is.dimmed() ? p.hide() : p.show()
					},
					animate: {
						show: function(t) {
							t = e.isFunction(t) ? t : function() {}, m.useCSS && e.fn.transition !== i && d.transition("is supported") ? ("auto" !== m.opacity && p.set.opacity(), d.transition({
								animation: m.transition + " in",
								queue: !1,
								duration: p.get.duration(),
								useFailSafe: !0,
								onStart: function() {
									p.set.dimmed()
								},
								onComplete: function() {
									p.set.active(), t()
								}
							})) : (p.verbose("Showing dimmer animation with javascript"), p.set.dimmed(), "auto" == m.opacity && (m.opacity = .8), d.stop().css({
								opacity: 0,
								width: "100%",
								height: "100%"
							}).fadeTo(p.get.duration(), m.opacity, function() {
								d.removeAttr("style"), p.set.active(), t()
							}))
						},
						hide: function(t) {
							t = e.isFunction(t) ? t : function() {}, m.useCSS && e.fn.transition !== i && d.transition("is supported") ? (p.verbose("Hiding dimmer with css"), d.transition({
								animation: m.transition + " out",
								queue: !1,
								duration: p.get.duration(),
								useFailSafe: !0,
								onStart: function() {
									p.remove.dimmed()
								},
								onComplete: function() {
									p.remove.active(), t()
								}
							})) : (p.verbose("Hiding dimmer with javascript"), p.remove.dimmed(), d.stop().fadeOut(p.get.duration(), function() {
								p.remove.active(), d.removeAttr("style"), t()
							}))
						}
					},
					get: {
						dimmer: function() {
							return d
						},
						duration: function() {
							return "object" == typeof m.duration ? p.is.active() ? m.duration.hide : m.duration.show : m.duration
						}
					},
					has: {
						dimmer: function() {
							return m.dimmerName ? k.find(g.dimmer).filter("." + m.dimmerName).length > 0 : k.find(g.dimmer).length > 0
						}
					},
					is: {
						active: function() {
							return d.hasClass(v.active)
						},
						animating: function() {
							return d.is(":animated") || d.hasClass(v.animating)
						},
						closable: function() {
							return "auto" == m.closable ? "hover" == m.on ? !1 : !0 : m.closable
						},
						dimmer: function() {
							return k.hasClass(v.dimmer)
						},
						dimmable: function() {
							return k.hasClass(v.dimmable)
						},
						dimmed: function() {
							return f.hasClass(v.dimmed)
						},
						disabled: function() {
							return f.hasClass(v.disabled)
						},
						enabled: function() {
							return !p.is.disabled()
						},
						page: function() {
							return f.is("body")
						},
						pageDimmer: function() {
							return d.hasClass(v.pageDimmer)
						}
					},
					can: {
						show: function() {
							return !d.hasClass(v.disabled)
						}
					},
					set: {
						opacity: function(e) {
							var t = d.css("background-color"),
								n = t.split(","),
								i = n && 4 == n.length;
							e = m.opacity || e, i ? (n[3] = e + ")", t = n.join(",")) : t = "rgba(0, 0, 0, " + e + ")", p.debug("Setting opacity to", e), d.css("background-color", t)
						},
						active: function() {
							d.addClass(v.active)
						},
						dimmable: function() {
							f.addClass(v.dimmable)
						},
						dimmed: function() {
							f.addClass(v.dimmed)
						},
						pageDimmer: function() {
							d.addClass(v.pageDimmer)
						},
						disabled: function() {
							d.addClass(v.disabled)
						},
						variation: function(e) {
							e = e || m.variation, e && d.addClass(e)
						}
					},
					remove: {
						active: function() {
							d.removeClass(v.active)
						},
						dimmed: function() {
							f.removeClass(v.dimmed)
						},
						disabled: function() {
							d.removeClass(v.disabled)
						},
						variation: function(e) {
							e = e || m.variation, e && d.removeClass(e)
						}
					},
					setting: function(t, n) {
						if (p.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, m, t);
						else {
							if (n === i) return m[t];
							m[t] = n
						}
					},
					internal: function(t, n) {
						if (e.isPlainObject(t)) e.extend(!0, p, t);
						else {
							if (n === i) return p[t];
							p[t] = n
						}
					},
					debug: function() {
						m.debug && (m.performance ? p.performance.log(arguments) : (p.debug = Function.prototype.bind.call(console.info, console, m.name + ":"), p.debug.apply(console, arguments)))
					},
					verbose: function() {
						m.verbose && m.debug && (m.performance ? p.performance.log(arguments) : (p.verbose = Function.prototype.bind.call(console.info, console, m.name + ":"), p.verbose.apply(console, arguments)))
					},
					error: function() {
						p.error = Function.prototype.bind.call(console.error, console, m.name + ":"), p.error.apply(console, arguments)
					},
					performance: {
						log: function(e) {
							var t, n, i;
							m.performance && (t = (new Date).getTime(), i = a || t, n = t - i, a = t, s.push({
								Name: e[0],
								Arguments: [].slice.call(e, 1) || "",
								Element: T,
								"Execution Time": n
							})), clearTimeout(p.performance.timer), p.performance.timer = setTimeout(p.performance.display, 500)
						},
						display: function() {
							var t = m.name + ":",
								n = 0;
							a = !1, clearTimeout(p.performance.timer), e.each(s, function(e, t) {
								n += t["Execution Time"]
							}), t += " " + n + "ms", w && (t += " '" + w + "'"), r.length > 1 && (t += " (" + r.length + ")"), (console.group !== i || console.table !== i) && s.length > 0 && (console.groupCollapsed(t), console.table ? console.table(s) : e.each(s, function(e, t) {
								console.log(t.Name + ": " + t["Execution Time"] + "ms")
							}), console.groupEnd()), s = []
						}
					},
					invoke: function(t, n, r) {
						var a, s, l, c = S;
						return n = n || u, r = T || r, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), a = t.length - 1, e.each(t, function(n, o) {
							var r = n != a ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
							if (e.isPlainObject(c[r]) && n != a) c = c[r];
							else {
								if (c[r] !== i) return s = c[r], !1;
								if (!e.isPlainObject(c[o]) || n == a) return c[o] !== i ? (s = c[o], !1) : (p.error(b.method, t), !1);
								c = c[o]
							}
						})), e.isFunction(s) ? l = s.apply(r, n) : s !== i && (l = s), e.isArray(o) ? o.push(l) : o !== i ? o = [o, l] : l !== i && (o = l), s
					}
				}, p.preinitialize(), c ? (S === i && p.initialize(), p.invoke(l)) : (S !== i && S.invoke("destroy"), p.initialize())
			}), o !== i ? o : this
		}, e.fn.dimmer.settings = {
			name: "Dimmer",
			namespace: "dimmer",
			debug: !1,
			verbose: !1,
			performance: !0,
			dimmerName: !1,
			variation: !1,
			closable: "auto",
			useCSS: !0,
			transition: "fade",
			on: !1,
			opacity: "auto",
			duration: {
				show: 500,
				hide: 500
			},
			onChange: function() {},
			onShow: function() {},
			onHide: function() {},
			error: {
				method: "The method you called is not defined."
			},
			className: {
				active: "active",
				animating: "animating",
				dimmable: "dimmable",
				dimmed: "dimmed",
				dimmer: "dimmer",
				disabled: "disabled",
				hide: "hide",
				pageDimmer: "page",
				show: "show"
			},
			selector: {
				dimmer: "> .ui.dimmer",
				content: ".ui.dimmer > .content, .ui.dimmer > .content > .center"
			},
			template: {
				dimmer: function() {
					return e("<div />").attr("class", "ui dimmer")
				}
			}
		}
	}(jQuery, window, document),
	function(e, t, n, i) {
		"use strict";
		e.fn.dropdown = function(o) {
			var r, a = e(this),
				s = e(n),
				l = a.selector || "",
				c = "ontouchstart" in n.documentElement,
				u = (new Date).getTime(),
				d = [],
				f = arguments[0],
				p = "string" == typeof f,
				m = [].slice.call(arguments, 1);
			return a.each(function(g) {
				var h, v, b, y, x, w, C, k = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.dropdown.settings, o) : e.extend({}, e.fn.dropdown.settings),
					T = k.className,
					S = k.message,
					E = k.metadata,
					A = k.namespace,
					D = k.regExp,
					j = k.selector,
					R = k.error,
					F = k.templates,
					P = "." + A,
					O = "module-" + A,
					N = e(this),
					q = e(k.context),
					L = N.find(j.text),
					z = N.find(j.search),
					I = N.find(j.input),
					H = N.find(j.icon),
					M = N.prev().find(j.text).length > 0 ? N.prev().find(j.text) : N.prev(),
					_ = N.children(j.menu),
					V = _.find(j.item),
					B = !1,
					W = !1,
					U = this,
					$ = N.data(O);
				C = {
					initialize: function() {
						C.debug("Initializing dropdown", k), C.is.alreadySetup() ? C.setup.reference() : (C.setup.layout(), C.refreshData(), C.save.defaults(), C.restore.selected(), C.create.id(), c && C.bind.touchEvents(), C.bind.mouseEvents(), C.bind.keyboardEvents(), C.observeChanges(), C.instantiate())
					},
					instantiate: function() {
						C.verbose("Storing instance of dropdown", C), $ = C, N.data(O, C)
					},
					destroy: function() {
						C.verbose("Destroying previous dropdown", N), C.remove.tabbable(), N.off(P).removeData(O), _.off(P), s.off(b), x && x.disconnect(), w && w.disconnect()
					},
					observeChanges: function() {
						"MutationObserver" in t && (x = new MutationObserver(function() {
							C.debug("<select> modified, recreating menu"), C.setup.select()
						}), w = new MutationObserver(function() {
							C.debug("Menu modified, updating selector cache"), C.refresh()
						}), C.has.input() && x.observe(I[0], {
							childList: !0,
							subtree: !0
						}), C.has.menu() && w.observe(_[0], {
							childList: !0,
							subtree: !0
						}), C.debug("Setting up mutation observer", x, w))
					},
					create: {
						id: function() {
							y = (Math.random().toString(16) + "000000000").substr(2, 8), b = "." + y, C.verbose("Creating unique id for element", y)
						},
						userChoice: function(t) {
							var n, o, r;
							return (t = t || C.get.userValues()) ? (t = e.isArray(t) ? t : [t], e.each(t, function(t, a) {
								C.get.item(a) === !1 && (r = k.templates.addition(a), o = e("<div />").html(r).data(E.value, a).addClass(T.addition).addClass(T.item), n = n === i ? o : n.add(o), C.verbose("Creating user choices for value", a, o))
							}), n) : !1
						},
						userLabels: function() {
							var t = C.get.userValues();
							t && (C.debug("Adding user labels", t), e.each(t, function(e, t) {
								C.verbose("Adding custom user value"), C.add.label(t, t)
							}))
						}
					},
					search: function(e) {
						e = e !== i ? e : C.get.query(), C.verbose("Searching for query", e), C.filter(e)
					},
					select: {
						firstUnfiltered: function() {
							C.verbose("Selecting first non-filtered element"), C.remove.selectedItem(), V.not(j.unselectable).eq(0).addClass(T.selected)
						},
						nextAvailable: function(e) {
							e = e.eq(0);
							var t = e.nextAll(j.item).not(j.unselectable).eq(0),
								n = e.prevAll(j.item).not(j.unselectable).eq(0),
								i = t.length > 0;
							i ? (C.verbose("Moving selection to", t), t.addClass(T.selected)) : (C.verbose("Moving selection to", n), n.addClass(T.selected))
						}
					},
					setup: {
						api: function() {
							var e = {
								debug: k.debug,
								on: !1
							};
							C.verbose("First request, initializing API"), N.api(e)
						},
						layout: function() {
							N.is("select") && (C.setup.select(), C.setup.returnedObject()), C.is.search() && !C.has.search() && (C.verbose("Adding search input"), z = e("<input />").addClass(T.search).insertBefore(L)), k.allowTab && C.set.tabbable(), 0 === _.length && (_ = e("<div />").addClass(T.menu).appendTo(N))
						},
						select: function() {
							var t = C.get.selectValues();
							C.debug("Dropdown initialized on a select", t), N.is("select") && (I = N), I.parent(j.dropdown).length > 0 ? (C.debug("UI dropdown already exists. Creating dropdown menu only"), N = I.closest(j.dropdown), _ = N.children(j.menu), C.setup.menu(t)) : (C.debug("Creating entire dropdown from select"), N = e("<div />").attr("class", I.attr("class")).addClass(T.selection).addClass(T.dropdown).html(F.dropdown(t)).insertBefore(I), I.hasClass(T.multiple) && I.prop("multiple") === !1 && (C.error(R.missingMultiple), I.prop("multiple", !0)), I.is("[multiple]") && C.set.multiple(), I.removeAttr("class").detach().prependTo(N)), C.refresh()
						},
						menu: function(e) {
							_.html(F.menu(e)), V = _.find(j.item)
						},
						reference: function() {
							C.debug("Dropdown behavior was called on select, replacing with closest dropdown"), N = N.parent(j.dropdown), C.refresh(), C.setup.returnedObject(), p && ($ = C, C.invoke(f))
						},
						returnedObject: function() {
							var e = a.slice(0, g),
								t = a.slice(g + 1);
							a = e.add(N).add(t)
						}
					},
					refresh: function() {
						C.refreshSelectors(), C.refreshData()
					},
					refreshSelectors: function() {
						C.verbose("Refreshing selector cache"), L = N.find(j.text), z = N.find(j.search), I = N.find(j.input), H = N.find(j.icon), M = N.prev().find(j.text).length > 0 ? N.prev().find(j.text) : N.prev(), _ = N.children(j.menu), V = _.find(j.item)
					},
					refreshData: function() {
						C.verbose("Refreshing cached metadata"), V.removeData(E.text).removeData(E.value), N.removeData(E.defaultText).removeData(E.defaultValue).removeData(E.placeholderText)
					},
					toggle: function() {
						C.verbose("Toggling menu visibility"), C.is.active() ? C.hide() : C.show()
					},
					show: function(t) {
						if (t = e.isFunction(t) ? t : function() {}, C.can.show() && !C.is.active()) {
							if (C.debug("Showing dropdown"), C.is.multiple() && !C.has.search() && C.is.allFiltered()) return !0;
							C.animate.show(function() {
								C.can.click() && C.bind.intent(), C.set.visible(), t.call(U)
							}), k.onShow.call(U)
						}
					},
					hide: function(t) {
						t = e.isFunction(t) ? t : function() {}, C.is.active() && (C.debug("Hiding dropdown"), C.animate.hide(function() {
							C.remove.visible(), t.call(U)
						}), k.onHide.call(U))
					},
					hideOthers: function() {
						C.verbose("Finding other dropdowns to hide"), a.not(N).has(j.menu + "." + T.visible).dropdown("hide")
					},
					hideMenu: function() {
						C.verbose("Hiding menu  instantaneously"), C.remove.active(), C.remove.visible(), _.transition("hide")
					},
					hideSubMenus: function() {
						var e = _.children(j.item).find(j.menu);
						C.verbose("Hiding sub menus", e), e.transition("hide")
					},
					bind: {
						keyboardEvents: function() {
							C.debug("Binding keyboard events"), N.on("keydown" + P, C.event.keydown), C.has.search() && N.on(C.get.inputEvent() + P, j.search, C.event.input), C.is.multiple() && s.on("keydown" + b, C.event.document.keydown)
						},
						touchEvents: function() {
							C.debug("Touch device detected binding additional touch events"), C.is.searchSelection() || C.is.single() && N.on("touchstart" + P, C.event.test.toggle), _.on("touchstart" + P, j.item, C.event.item.mouseenter)
						},
						mouseEvents: function() {
							C.debug("Mouse detected binding mouse events"), C.is.multiple() && N.on("click" + P, j.label, C.event.label.click).on("click" + P, j.remove, C.event.remove.click), C.is.searchSelection() ? (N.on("mousedown" + P, j.menu, C.event.menu.mousedown).on("mouseup" + P, j.menu, C.event.menu.mouseup).on("click" + P, j.icon, C.event.icon.click).on("click" + P, j.search, C.show).on("focus" + P, j.search, C.event.search.focus).on("blur" + P, j.search, C.event.search.blur).on("click" + P, j.text, C.event.text.focus), C.is.multiple() && N.on("click" + P, C.event.click)) : ("click" == k.on ? N.on("click" + P, j.icon, C.event.icon.click).on("click" + P, C.event.test.toggle) : "hover" == k.on ? N.on("mouseenter" + P, C.delay.show).on("mouseleave" + P, C.delay.hide) : N.on(k.on + P, C.toggle), N.on("mousedown" + P, C.event.mousedown).on("mouseup" + P, C.event.mouseup).on("focus" + P, C.event.focus).on("blur" + P, C.event.blur)), _.on("mouseenter" + P, j.item, C.event.item.mouseenter).on("mouseleave" + P, j.item, C.event.item.mouseleave).on("click" + P, j.item, C.event.item.click)
						},
						intent: function() {
							C.verbose("Binding hide intent event to document"), c && s.on("touchstart" + b, C.event.test.touch).on("touchmove" + b, C.event.test.touch), s.on("click" + b, C.event.test.hide)
						}
					},
					unbind: {
						intent: function() {
							C.verbose("Removing hide intent event from document"), c && s.off("touchstart" + b).off("touchmove" + b), s.off("click" + b)
						}
					},
					filter: function(e) {
						var t = e !== i ? e : C.get.query(),
							n = function() {
								C.is.multiple() && C.filterActive(), C.select.firstUnfiltered(), C.has.allResultsFiltered() ? k.onNoResults.call(U, t) ? k.allowAdditions || (C.verbose("All items filtered, showing message", t), C.add.message(S.noResults)) : (C.verbose("All items filtered, hiding dropdown", t), C.hideMenu()) : C.remove.message(), k.allowAdditions && C.add.userSuggestion(e), C.is.searchSelection() && C.can.show() && C.is.focusedOnSearch() && C.show()
							};
						k.useLabels && C.has.maxSelections() || (k.apiSettings ? C.can.useAPI() ? C.queryRemote(t, function() {
							n()
						}) : C.error(R.noAPI) : (C.filterItems(t), n()))
					},
					queryRemote: function(t, n) {
						var i = {
							errorDuration: !1,
							throttle: k.throttle,
							cache: "local",
							urlData: {
								query: t
							},
							onError: function() {
								C.add.message(S.serverError), n()
							},
							onFailure: function() {
								C.add.message(S.serverError), n()
							},
							onSuccess: function(e) {
								C.remove.message(), C.setup.menu({
									values: e.results
								}), n()
							}
						};
						N.api("get request") || C.setup.api(), i = e.extend(!0, {}, i, k.apiSettings), N.api("setting", i).api("query")
					},
					filterItems: function(t) {
						var n = t !== i ? t : C.get.query(),
							o = e(),
							r = C.escape.regExp(n),
							a = new RegExp("^" + r, "igm");
						"" === n ? o = V : (C.verbose("Searching for matching values", n), V.each(function() {
							var t, i, r = e(this);
							if ("both" == k.match || "text" == k.match) {
								if (t = String(C.get.choiceText(r, !1)), -1 !== t.search(a)) return o = o.add(r), !0;
								if (k.fullTextSearch && C.fuzzySearch(n, t)) return o = o.add(r), !0
							}
							if ("both" == k.match || "value" == k.match) {
								if (i = String(C.get.choiceValue(r, t)), -1 !== i.search(a)) return o = o.add(r), !0;
								if (k.fullTextSearch && C.fuzzySearch(n, i)) return o = o.add(r), !0
							}
						})), C.debug("Showing only matched items", n), C.remove.filteredItem(), V.not(o).addClass(T.filtered)
					},
					fuzzySearch: function(e, t) {
						var n = t.length,
							i = e.length;
						if (e = e.toLowerCase(), t = t.toLowerCase(), i > n) return !1;
						if (i === n) return e === t;
						e: for (var o = 0, r = 0; i > o; o++) {
							for (var a = e.charCodeAt(o); n > r;)
								if (t.charCodeAt(r++) === a) continue e;
							return !1
						}
						return !0
					},
					filterActive: function() {
						k.useLabels && V.filter("." + T.active).addClass(T.filtered)
					},
					focusSearch: function() {
						C.is.search() && !C.is.focusedOnSearch() && z[0].focus()
					},
					forceSelection: function() {
						var e = V.not(T.filtered).filter("." + T.selected).eq(0),
							t = V.not(T.filtered).filter("." + T.active).eq(0),
							n = e.length > 0 ? e : t,
							i = n.size() > 0;
						i ? (C.debug("Forcing partial selection to selected item", n), C.event.item.click.call(n)) : C.hide()
					},
					event: {
						focus: function() {
							k.showOnFocus && !B && C.is.hidden() && !v && C.show()
						},
						click: function(t) {
							var n = e(t.target);
							n.is(N) && !C.is.focusedOnSearch() && C.focusSearch()
						},
						blur: function() {
							v = n.activeElement === this, B || v || (C.remove.activeLabel(), C.hide())
						},
						mousedown: function() {
							B = !0
						},
						mouseup: function() {
							B = !1
						},
						search: {
							focus: function() {
								B = !0, C.is.multiple() && C.remove.activeLabel(), k.showOnFocus && C.show()
							},
							blur: function() {
								v = n.activeElement === this, W || v || (C.is.multiple() ? (C.remove.activeLabel(), C.hide()) : k.forceSelection ? C.forceSelection() : C.hide())
							}
						},
						icon: {
							click: function(e) {
								C.toggle(), e.stopPropagation()
							}
						},
						text: {
							focus: function() {
								B = !0, C.focusSearch()
							}
						},
						input: function() {
							(C.is.multiple() || C.is.searchSelection()) && C.set.filtered(), clearTimeout(C.timer), C.timer = setTimeout(C.search, k.delay.search)
						},
						label: {
							click: function(t) {
								var n = e(this),
									i = N.find(j.label),
									o = i.filter("." + T.active),
									r = n.nextAll("." + T.active),
									a = n.prevAll("." + T.active),
									s = r.length > 0 ? n.nextUntil(r).add(o).add(n) : n.prevUntil(a).add(o).add(n);
								t.shiftKey ? (o.removeClass(T.active), s.addClass(T.active)) : t.ctrlKey ? n.toggleClass(T.active) : (o.removeClass(T.active), n.addClass(T.active)), k.onLabelSelect.apply(this, i.filter("." + T.active))
							}
						},
						remove: {
							click: function() {
								var t = e(this).parent();
								t.hasClass(T.active) ? C.remove.activeLabels() : C.remove.activeLabels(t)
							}
						},
						test: {
							toggle: function(e) {
								var t = C.is.multiple() ? C.show : C.toggle;
								C.determine.eventOnElement(e, t) && e.preventDefault()
							},
							touch: function(e) {
								C.determine.eventOnElement(e, function() {
									"touchstart" == e.type ? C.timer = setTimeout(C.hide, k.delay.touch) : "touchmove" == e.type && clearTimeout(C.timer)
								}), e.stopPropagation()
							},
							hide: function(e) {
								C.determine.eventInModule(e, C.hide)
							}
						},
						menu: {
							mousedown: function() {
								W = !0
							},
							mouseup: function() {
								W = !1
							}
						},
						item: {
							mouseenter: function(t) {
								var n = e(this).children(j.menu),
									i = e(this).siblings(j.item).children(j.menu);
								n.length > 0 && (clearTimeout(C.itemTimer), C.itemTimer = setTimeout(function() {
									C.verbose("Showing sub-menu", n), e.each(i, function() {
										C.animate.hide(!1, e(this))
									}), C.animate.show(!1, n)
								}, k.delay.show), t.preventDefault())
							},
							mouseleave: function() {
								var t = e(this).children(j.menu);
								t.length > 0 && (clearTimeout(C.itemTimer), C.itemTimer = setTimeout(function() {
									C.verbose("Hiding sub-menu", t), C.animate.hide(!1, t)
								}, k.delay.hide))
							},
							click: function(t) {
								var n = e(this),
									i = e(t ? t.target : ""),
									o = n.find(j.menu),
									r = C.get.choiceText(n),
									a = C.get.choiceValue(n, r),
									s = o.length > 0,
									l = o.find(i).length > 0;
								l || s && !k.allowCategorySelection || (k.useLabels || (C.remove.filteredItem(), C.remove.searchTerm(), C.set.scrollPosition(n)), C.determine.selectAction.call(this, r, a))
							}
						},
						document: {
							keydown: function(e) {
								var t = e.which,
									n = C.get.shortcutKeys(),
									i = C.is.inObject(t, n);
								if (i) {
									var o = N.find(j.label),
										r = o.filter("." + T.active),
										a = (r.data("value"), o.index(r)),
										s = o.length,
										l = r.length > 0,
										c = r.length > 1,
										u = 0 === a,
										d = a + 1 == s,
										f = C.is.searchSelection(),
										p = C.is.focusedOnSearch(),
										m = C.is.focused(),
										g = p && 0 === C.get.caretPosition();
									if (f && !l && !p) return;
									t == n.leftArrow ? !m && !g || l ? l && (e.shiftKey ? C.verbose("Adding previous label to selection") : (C.verbose("Selecting previous label"), o.removeClass(T.active)), u && !c ? r.addClass(T.active) : r.prev(j.siblingLabel).addClass(T.active).end(), e.preventDefault()) : (C.verbose("Selecting previous label"), o.last().addClass(T.active)) : t == n.rightArrow ? (m && !l && o.first().addClass(T.active), l && (e.shiftKey ? C.verbose("Adding next label to selection") : (C.verbose("Selecting next label"), o.removeClass(T.active)), d ? f ? p ? o.removeClass(T.active) : C.focusSearch() : c ? r.next(j.siblingLabel).addClass(T.active) : r.addClass(T.active) : r.next(j.siblingLabel).addClass(T.active), e.preventDefault())) : t == n.deleteKey || t == n.backspace ? l ? (C.verbose("Removing active labels"), d && f && !p && C.focusSearch(), r.last().next(j.siblingLabel).addClass(T.active), C.remove.activeLabels(r), e.preventDefault()) : g && !l && t == n.backspace && (C.verbose("Removing last label on input backspace"), r = o.last().addClass(T.active), C.remove.activeLabels(r)) : r.removeClass(T.active)
								}
							}
						},
						keydown: function(e) {
							var t = e.which,
								n = C.get.shortcutKeys(),
								i = C.is.inObject(t, n);
							if (i) {
								var o, r, a = V.not(j.unselectable).filter("." + T.selected).eq(0),
									s = _.children("." + T.active).eq(0),
									l = a.length > 0 ? a : s,
									c = l.length > 0 ? l.siblings(":not(." + T.filtered + ")").andSelf() : _.children(":not(." + T.filtered + ")"),
									u = l.children(j.menu),
									d = l.closest(j.menu),
									f = d.hasClass(T.visible) || d.hasClass(T.animating) || d.parent(j.menu).length > 0,
									p = u.length > 0,
									m = l.length > 0,
									g = l.not(j.unselectable).length > 0;
								if (C.is.visible()) {
									if ((t == n.enter || t == n.delimiter) && (t == n.enter && m && p && !k.allowCategorySelection ? (C.verbose("Pressed enter on unselectable category, opening sub menu"), t = n.rightArrow) : g && (C.verbose("Selecting item from keyboard shortcut", l), C.event.item.click.call(l, e), C.is.searchSelection() && C.remove.searchTerm()), e.preventDefault()), t == n.leftArrow && (r = d[0] !== _[0], r && (C.verbose("Left key pressed, closing sub-menu"), C.animate.hide(!1, d), l.removeClass(T.selected), d.closest(j.item).addClass(T.selected), e.preventDefault())), t == n.rightArrow && p && (C.verbose("Right key pressed, opening sub-menu"), C.animate.show(!1, u), l.removeClass(T.selected), u.find(j.item).eq(0).addClass(T.selected), e.preventDefault()), t == n.upArrow) {
										if (o = m && f ? l.prevAll(j.item + ":not(" + j.unselectable + ")").eq(0) : V.eq(0), c.index(o) < 0) return C.verbose("Up key pressed but reached top of current menu"), void e.preventDefault();
										C.verbose("Up key pressed, changing active item"), l.removeClass(T.selected), o.addClass(T.selected), C.set.scrollPosition(o), e.preventDefault()
									}
									if (t == n.downArrow) {
										if (o = m && f ? o = l.nextAll(j.item + ":not(" + j.unselectable + ")").eq(0) : V.eq(0), 0 === o.length) return C.verbose("Down key pressed but reached bottom of current menu"), void e.preventDefault();
										C.verbose("Down key pressed, changing active item"), V.removeClass(T.selected), o.addClass(T.selected), C.set.scrollPosition(o), e.preventDefault()
									}
									t == n.pageUp && (C.scrollPage("up"), e.preventDefault()), t == n.pageDown && (C.scrollPage("down"), e.preventDefault()), t == n.escape && (C.verbose("Escape key pressed, closing dropdown"), C.hide())
								} else t == n.delimiter && e.preventDefault(), t == n.downArrow && (C.verbose("Down key pressed, showing dropdown"), C.show(), e.preventDefault())
							} else C.is.selection() && !C.is.search() && C.set.selectedLetter(String.fromCharCode(t))
						}
					},
					determine: {
						selectAction: function(t, n) {
							C.verbose("Determining action", k.action), e.isFunction(C.action[k.action]) ? (C.verbose("Triggering preset action", k.action, t, n), C.action[k.action].call(this, t, n)) : e.isFunction(k.action) ? (C.verbose("Triggering user action", k.action, t, n), k.action.call(this, t, n)) : C.error(R.action, k.action)
						},
						eventInModule: function(t, i) {
							var o = e(t.target),
								r = o.closest(n.documentElement).length > 0,
								a = o.closest(N).length > 0;
							return i = e.isFunction(i) ? i : function() {}, r && !a ? (C.verbose("Triggering event", i), i(), !0) : (C.verbose("Event occurred in dropdown, canceling callback"), !1)
						},
						eventOnElement: function(t, n) {
							var i = e(t.target),
								o = i.closest(j.siblingLabel),
								r = 0 === N.find(o).length,
								a = 0 === i.closest(_).length;
							return n = e.isFunction(n) ? n : function() {}, r && a ? (C.verbose("Triggering event", n), n(), !0) : (C.verbose("Event occurred in dropdown menu, canceling callback"), !1)
						}
					},
					action: {
						nothing: function() {},
						activate: function(t, n) {
							if (n = n !== i ? n : t, C.can.activate(e(this))) {
								if (C.set.selected(n, e(this)), C.is.multiple() && !C.is.allFiltered()) return;
								C.hideAndClear()
							}
						},
						select: function() {
							C.action.activate.call(this)
						},
						combo: function(t, n) {
							n = n !== i ? n : t, C.set.selected(n, e(this)), C.hideAndClear()
						},
						hide: function() {
							C.hideAndClear()
						}
					},
					get: {
						id: function() {
							return y
						},
						text: function() {
							return L.text()
						},
						query: function() {
							return e.trim(z.val())
						},
						searchWidth: function(e) {
							return e * k.glyphWidth + "em"
						},
						selectionCount: function() {
							var t, n = C.get.values();
							return t = C.is.multiple() ? e.isArray(n) ? n.length : 0 : "" !== C.get.value() ? 1 : 0
						},
						transition: function(e) {
							return "auto" == k.transition ? C.is.upward(e) ? "slide up" : "slide down" : k.transition
						},
						userValues: function() {
							var t = C.get.values();
							return t ? (t = e.isArray(t) ? t : [t], e.grep(t, function(e) {
								return C.get.item(e) === !1
							})) : !1
						},
						uniqueArray: function(t) {
							return e.grep(t, function(n, i) {
								return e.inArray(n, t) === i
							})
						},
						caretPosition: function() {
							var e, t, i = z.get(0);
							return "selectionStart" in i ? i.selectionStart : n.selection ? (i.focus(), e = n.selection.createRange(), t = e.text.length, e.moveStart("character", -i.value.length), e.text.length - t) : void 0
						},
						shortcutKeys: function() {
							return {
								backspace: 8,
								delimiter: 188,
								deleteKey: 46,
								enter: 13,
								escape: 27,
								pageUp: 33,
								pageDown: 34,
								leftArrow: 37,
								upArrow: 38,
								rightArrow: 39,
								downArrow: 40
							}
						},
						value: function() {
							var t = I.length > 0 ? I.val() : N.data(E.value);
							return e.isArray(t) && 1 === t.length && "" === t[0] ? "" : t
						},
						values: function() {
							var e = C.get.value();
							return "" === e ? "" : !C.has.selectInput() && C.is.multiple() ? "string" == typeof e ? e.split(k.delimiter) : "" : e
						},
						remoteValues: function() {
							var t = C.get.values(),
								n = !1;
							return t && ("string" == typeof t && (t = [t]), n = {}, e.each(t, function(e, t) {
								var i = C.read.remoteData(t);
								C.verbose("Restoring value from session data", i, t), n[t] = i ? i : t
							})), n
						},
						choiceText: function(e, t) {
							return t = t !== i ? t : k.preserveHTML, e ? (e.find(j.menu).length > 0 && (C.verbose("Retreiving text of element with sub-menu"), e = e.clone(), e.find(j.menu).remove(), e.find(j.menuIcon).remove()), e.data(E.text) !== i ? e.data(E.text) : t ? e.html().trim() : e.text().trim()) : void 0
						},
						choiceValue: function(e, t) {
							return t = t || C.get.choiceText(e), e ? e.data(E.value) !== i ? e.data(E.value) : "string" == typeof t ? t.toLowerCase().trim() : t : !1
						},
						inputEvent: function() {
							var e = z[0];
							return e ? e.oninput !== i ? "input" : e.onpropertychange !== i ? "propertychange" : "keyup" : !1
						},
						selectValues: function() {
							var t = {};
							return t.values = [], N.find("option").each(function() {
								var n = e(this),
									o = n.html(),
									r = n.attr("disabled"),
									a = n.attr("value") !== i ? n.attr("value") : o;
								"auto" === k.placeholder && "" === a ? t.placeholder = o : t.values.push({
									name: o,
									value: a,
									disabled: r
								})
							}), k.placeholder && "auto" !== k.placeholder && (C.debug("Setting placeholder value to", k.placeholder), t.placeholder = k.placeholder), k.sortSelect ? (t.values.sort(function(e, t) {
								return e.name > t.name ? 1 : -1
							}), C.debug("Retrieved and sorted values from select", t)) : C.debug("Retreived values from select", t), t
						},
						activeItem: function() {
							return V.filter("." + T.active)
						},
						selectedItem: function() {
							var e = V.not(j.unselectable).filter("." + T.selected);
							return e.length > 0 ? e : V.eq(0)
						},
						itemWithAdditions: function(e) {
							var t = C.get.item(e),
								n = C.create.userChoice(e),
								i = n && n.length > 0;
							return i && (t = t.length > 0 ? t.add(n) : n), t
						},
						item: function(t, n) {
							var o, r, a = !1;
							return t = t !== i ? t : C.get.values() !== i ? C.get.values() : C.get.text(), o = r ? t.length > 0 : t !== i && "" !== t && null !== t, r = C.is.multiple() && e.isArray(t), n = "" === t || 0 === t ? !0 : n || !1, o && V.each(function() {
								var o = e(this),
									s = C.get.choiceText(o),
									l = C.get.choiceValue(o, s);
								if (null !== l && l !== i)
									if (r)(-1 !== e.inArray(l.toString(), t) || -1 !== e.inArray(s, t)) && (a = a ? a.add(o) : o);
									else if (n) {
									if (C.verbose("Ambiguous dropdown value using strict type check", o, t), l === t || s === t) return a = o, !0
								} else if (l.toString() == t.toString() || s == t) return C.verbose("Found select item by value", l, t), a = o, !0
							}), a
						}
					},
					check: {
						maxSelections: function(e) {
							return k.maxSelections ? (e = e !== i ? e : C.get.selectionCount(), e >= k.maxSelections ? (C.debug("Maximum selection count reached"), k.useLabels && (V.addClass(T.filtered), C.add.message(S.maxSelections)), !0) : (C.verbose("No longer at maximum selection count"), C.remove.message(), C.remove.filteredItem(), C.is.searchSelection() && C.filterItems(), !1)) : !0
						}
					},
					restore: {
						defaults: function() {
							C.clear(), C.restore.defaultText(), C.restore.defaultValue()
						},
						defaultText: function() {
							var e = N.data(E.defaultText);
							C.debug("Restoring default text", e), C.set.text(e), L.addClass(T.placeholder)
						},
						defaultValue: function() {
							var e = N.data(E.defaultValue);
							e !== i && (C.debug("Restoring default value", e), "" !== e ? (C.set.value(e), C.set.selected()) : (C.remove.activeItem(), C.remove.selectedItem()))
						},
						labels: function() {
							k.allowAdditions && (k.useLabels || (C.error(R.labels), k.useLabels = !0), C.debug("Restoring selected values"), C.create.userLabels()), C.check.maxSelections()
						},
						selected: function() {
							C.restore.values(), C.is.multiple() ? (C.debug("Restoring previously selected values and labels"), C.restore.labels()) : C.debug("Restoring previously selected values")
						},
						values: function() {
							C.set.initialLoad(), k.apiSettings ? k.saveRemoteData ? C.restore.remoteValues() : C.clearValue() : C.set.selected(), C.remove.initialLoad()
						},
						remoteValues: function() {
							var t = C.get.remoteValues();
							C.debug("Recreating selected from session data", t), t && (C.is.single() ? e.each(t, function(e, t) {
								C.set.text(t)
							}) : e.each(t, function(e, t) {
								C.add.label(e, t)
							}))
						}
					},
					read: {
						remoteData: function(e) {
							var n;
							return t.Storage === i ? void C.error(R.noStorage) : (n = sessionStorage.getItem(e), n !== i ? n : !1)
						}
					},
					save: {
						defaults: function() {
							C.save.defaultText(), C.save.placeholderText(), C.save.defaultValue()
						},
						defaultValue: function() {
							var e = C.get.value();
							C.verbose("Saving default value as", e), N.data(E.defaultValue, e)
						},
						defaultText: function() {
							var e = C.get.text();
							C.verbose("Saving default text as", e), N.data(E.defaultText, e)
						},
						placeholderText: function() {
							var e;
							L.hasClass(T.placeholder) && (e = C.get.text(), C.verbose("Saving placeholder text as", e), N.data(E.placeholderText, e))
						},
						remoteData: function(e, n) {
							return t.Storage === i ? void C.error(R.noStorage) : (C.verbose("Saving remote data to session storage", n, e), void sessionStorage.setItem(n, e))
						}
					},
					clear: function() {
						C.is.multiple() ? C.remove.labels() : (C.remove.activeItem(), C.remove.selectedItem()), C.set.placeholderText(), C.clearValue()
					},
					clearValue: function() {
						C.set.value("")
					},
					scrollPage: function(e, t) {
						var n, i, o, t = t || C.get.selectedItem(),
							r = t.closest(j.menu),
							a = r.outerHeight(),
							s = r.scrollTop(),
							l = V.eq(0).outerHeight(),
							c = Math.floor(a / l),
							u = (r.prop("scrollHeight"), "up" == e ? s - l * c : s + l * c),
							d = V.not(j.unselectable);
						o = "up" == e ? d.index(t) - c : d.index(t) + c, n = "up" == e ? o >= 0 : o < d.length, i = n ? d.eq(o) : "up" == e ? d.first() : d.last(), i.length > 0 && (C.debug("Scrolling page", e, i), t.removeClass(T.selected), i.addClass(T.selected), r.scrollTop(u))
					},
					set: {
						filtered: function() {
							var e = C.is.multiple(),
								t = C.is.searchSelection(),
								n = e && t,
								i = t ? C.get.query() : "",
								o = "string" == typeof i && i.length > 0,
								r = C.get.searchWidth(i.length),
								a = "" !== i;
							e && o && (C.verbose("Adjusting input width", r, k.glyphWidth), z.css("width", r)), o || n && a ? (C.verbose("Hiding placeholder text"), L.addClass(T.filtered)) : (!e || n && !a) && (C.verbose("Showing placeholder text"), L.removeClass(T.filtered))
						},
						loading: function() {
							N.addClass(T.loading)
						},
						placeholderText: function(e) {
							e = e || N.data(E.placeholderText), e && (C.debug("Restoring placeholder text"), C.set.text(e), L.addClass(T.placeholder))
						},
						tabbable: function() {
							C.has.search() ? (C.debug("Added tabindex to searchable dropdown"), z.val("").attr("tabindex", 0), _.attr("tabindex", -1)) : (C.debug("Added tabindex to dropdown"), N.attr("tabindex") || (N.attr("tabindex", 0), _.attr("tabindex", -1)))
						},
						initialLoad: function() {
							C.verbose("Setting initial load"), h = !0
						},
						scrollPosition: function(e, t) {
							var n, o, r, a, s, l, c, u, d, f = 5;
							e = e || C.get.selectedItem(), n = e.closest(j.menu), o = e && e.length > 0, t = t !== i ? t : !1, e && n.length > 0 && o && (a = e.position().top, n.addClass(T.loading), l = n.scrollTop(), s = n.offset().top, a = e.offset().top, r = l - s + a, t || (c = n.height(), d = r + f > l + c, u = l > r - f), C.debug("Scrolling to active item", r), (t || u || d) && n.scrollTop(r), n.removeClass(T.loading))
						},
						text: function(e) {
							"select" !== k.action && ("combo" == k.action ? (C.debug("Changing combo button text", e, M), k.preserveHTML ? M.html(e) : M.text(e)) : (C.debug("Changing text", e, L), L.removeClass(T.filtered).removeClass(T.placeholder), k.preserveHTML ? L.html(e) : L.text(e)))
						},
						selectedLetter: function(t) {
							var n, i = V.filter("." + T.selected),
								o = i.length > 0 && C.has.firstLetter(i, t),
								r = !1;
							o && (n = i.nextAll(V).eq(0), C.has.firstLetter(n, t) && (r = n)), r || V.each(function() {
								return C.has.firstLetter(e(this), t) ? (r = e(this), !1) : void 0
							}), r && (C.verbose("Scrolling to next value with letter", t), C.set.scrollPosition(r), i.removeClass(T.selected), r.addClass(T.selected))
						},
						direction: function(e) {
							"auto" == k.direction ? C.is.onScreen(e) ? C.remove.upward(e) : C.set.upward(e) : "upward" == k.direction && C.set.upward(e)
						},
						upward: function(e) {
							var t = e || N;
							t.addClass(T.upward)
						},
						value: function(e, t, n) {
							var i = I.length > 0,
								o = (!C.has.value(e), C.get.values()),
								r = "number" == typeof e ? e.toString() : e;
							if (i) {
								if (r == o && (C.verbose("Skipping value update already same value", e, o), !C.is.initialLoad())) return;
								C.is.single() && C.has.selectInput() && C.can.extendSelect() && (C.debug("Adding user option", e), C.add.optionValue(e)), C.debug("Updating input value", e, o), I.val(e).trigger("change")
							} else C.verbose("Storing value in metadata", e, I), e !== o && N.data(E.value, e);
							k.fireOnInit === !1 && C.is.initialLoad() ? C.verbose("No callback on initial load", k.onChange) : k.onChange.call(U, e, t, n)
						},
						active: function() {
							N.addClass(T.active)
						},
						multiple: function() {
							N.addClass(T.multiple)
						},
						visible: function() {
							N.addClass(T.visible)
						},
						exactly: function(e, t) {
							C.debug("Setting selected to exact values"), C.clear(), C.set.selected(e, t)
						},
						selected: function(t, n) {
							var i = C.is.multiple();
							n = k.allowAdditions ? n || C.get.itemWithAdditions(t) : n || C.get.item(t), n && (C.debug("Setting selected menu item to", n), C.is.single() ? (C.remove.activeItem(), C.remove.selectedItem()) : k.useLabels && C.remove.selectedItem(), n.each(function() {
								var t = e(this),
									o = C.get.choiceText(t),
									r = C.get.choiceValue(t, o),
									a = t.hasClass(T.filtered),
									s = t.hasClass(T.active),
									l = t.hasClass(T.addition),
									c = i && 1 == n.length;
								i ? !s || l ? (k.apiSettings && k.saveRemoteData && C.save.remoteData(o, r), k.useLabels ? (C.add.value(r, o, t), C.add.label(r, o, c), t.addClass(T.active), C.filterActive(), C.select.nextAvailable(n)) : (C.add.value(r, o, t), C.set.text(C.add.variables(S.count)), t.addClass(T.active))) : a || (C.debug("Selected active value, removing label"), C.remove.selected(r)) : (k.apiSettings && k.saveRemoteData && C.save.remoteData(o, r), C.set.text(o), C.set.value(r, o, t), t.addClass(T.active).addClass(T.selected))
							}))
						}
					},
					add: {
						label: function(t, n, i) {
							var o, r = C.is.searchSelection() ? z : L;
							return o = e("<a />").addClass(T.label).attr("data-value", t).html(F.label(t, n)), o = k.onLabelCreate.call(o, t, n), C.has.label(t) ? void C.debug("Label already exists, skipping", t) : (k.label.variation && o.addClass(k.label.variation), void(i === !0 ? (C.debug("Animating in label", o), o.addClass(T.hidden).insertBefore(r).transition(k.label.transition, k.label.duration)) : (C.debug("Adding selection label", o), o.insertBefore(r))))
						},
						message: function(t) {
							var n = _.children(j.message),
								i = k.templates.message(C.add.variables(t));
							n.length > 0 ? n.html(i) : n = e("<div/>").html(i).addClass(T.message).appendTo(_)
						},
						optionValue: function(t) {
							var n = I.find('option[value="' + t + '"]'),
								i = n.length > 0;
							i || (x && (x.disconnect(), C.verbose("Temporarily disconnecting mutation observer", t)), C.is.single() && (C.verbose("Removing previous user addition"), I.find("option." + T.addition).remove()), e("<option/>").prop("value", t).addClass(T.addition).html(t).appendTo(I), C.verbose("Adding user addition as an <option>", t), x && x.observe(I[0], {
								childList: !0,
								subtree: !0
							}))
						},
						userSuggestion: function(e) {
							var t, n = _.children(j.addition),
								i = C.get.item(e),
								o = n.length > 0;
							if (!k.useLabels || !C.has.maxSelections()) {
								if ("" === e || i) return void n.remove();
								V.removeClass(T.selected), o ? (t = k.templates.addition(e), n.html(t).data(E.value, e).removeClass(T.filtered).addClass(T.selected), C.verbose("Replacing user suggestion with new value", n)) : (n = C.create.userChoice(e), n.prependTo(_).addClass(T.selected), C.verbose("Adding item choice to menu corresponding with user choice addition", n))
							}
						},
						variables: function(e) {
							var t, n, i = -1 !== e.search("{count}"),
								o = -1 !== e.search("{maxCount}"),
								r = -1 !== e.search("{term}");
							return C.verbose("Adding templated variables to message", e), i && (t = C.get.selectionCount(), e = e.replace("{count}", t)), o && (t = C.get.selectionCount(), e = e.replace("{maxCount}", k.maxSelections)), r && (n = C.get.query(), e = e.replace("{term}", n)), e
						},
						value: function(t, n, i) {
							var o, r = C.get.values();
							return "" === t ? void C.debug("Cannot select blank values from multiselect") : (e.isArray(r) ? (o = r.concat([t]), o = C.get.uniqueArray(o)) : o = [t], C.has.selectInput() ? C.can.extendSelect() && (C.debug("Adding value to select", t, o, I), C.add.optionValue(t)) : (o = o.join(k.delimiter), C.debug("Setting hidden input to delimited value", o, I)), k.fireOnInit === !1 && C.is.initialLoad() ? C.verbose("No callback on initial load", k.onAdd) : k.onAdd.call(U, t, n, i), C.set.value(o, t, n, i), void C.check.maxSelections())
						}
					},
					remove: {
						active: function() {
							N.removeClass(T.active)
						},
						activeLabel: function() {
							N.find(j.label).removeClass(T.active)
						},
						loading: function() {
							N.removeClass(T.loading)
						},
						initialLoad: function() {
							h = !1
						},
						upward: function(e) {
							var t = e || N;
							t.removeClass(T.upward)
						},
						visible: function() {
							N.removeClass(T.visible)
						},
						activeItem: function() {
							V.removeClass(T.active)
						},
						filteredItem: function() {
							k.useLabels && C.has.maxSelections() || (k.useLabels ? V.not("." + T.active).removeClass(T.filtered) : V.removeClass(T.filtered))
						},
						optionValue: function(e) {
							var t = I.find('option[value="' + e + '"]'),
								n = t.length > 0;
							n && t.hasClass(T.addition) && (x && (x.disconnect(), C.verbose("Temporarily disconnecting mutation observer", e)), t.remove(), C.verbose("Removing user addition as an <option>", e), x && x.observe(I[0], {
								childList: !0,
								subtree: !0
							}))
						},
						message: function() {
							_.children(j.message).remove()
						},
						searchTerm: function() {
							C.verbose("Cleared search term"), z.val(""), C.set.filtered()
						},
						selected: function(t, n) {
							return (n = k.allowAdditions ? n || C.get.itemWithAdditions(t) : n || C.get.item(t)) ? void n.each(function() {
								var t = e(this),
									n = C.get.choiceText(t),
									i = C.get.choiceValue(t, n);
								C.is.multiple() ? k.useLabels ? (C.remove.value(i, n, t), C.remove.label(i)) : (C.remove.value(i, n, t), C.set.text(C.add.variables(S.count))) : C.remove.value(i, n, t), t.removeClass(T.filtered).removeClass(T.active), k.useLabels && t.removeClass(T.selected)
							}) : !1
						},
						selectedItem: function() {
							V.removeClass(T.selected)
						},
						value: function(e, t, n) {
							var i, o = C.get.values();
							C.has.selectInput() ? (C.verbose("Input is <select> removing selected option", e), i = C.remove.arrayValue(e, o), C.remove.optionValue(e)) : (C.verbose("Removing from delimited values", e), i = C.remove.arrayValue(e, o), i = i.join(k.delimiter)), k.fireOnInit === !1 && C.is.initialLoad() ? C.verbose("No callback on initial load", k.onRemove) : k.onRemove.call(U, e, t, n), C.set.value(i, t, n), C.check.maxSelections()
						},
						arrayValue: function(t, n) {
							return e.isArray(n) || (n = [n]), n = e.grep(n, function(e) {
								return t != e
							}), C.verbose("Removed value from delimited string", t, n), n
						},
						label: function(e) {
							var t = N.find(j.label),
								n = t.filter('[data-value="' + e + '"]');
							C.verbose("Removing label", n), n.remove()
						},
						activeLabels: function(e) {
							e = e || N.find(j.label).filter("." + T.active), C.verbose("Removing active label selections", e), C.remove.labels(e)
						},
						labels: function(t) {
							t = t || N.find(j.label), C.verbose("Removing labels", t), t.each(function() {
								var t = e(this).data("value"),
									n = C.is.userValue(t);
								n ? (C.remove.value(t), C.remove.label(t)) : C.remove.selected(t)
							})
						},
						tabbable: function() {
							C.has.search() ? (C.debug("Searchable dropdown initialized"), z.attr("tabindex", "-1"), _.attr("tabindex", "-1")) : (C.debug("Simple selection dropdown initialized"), N.attr("tabindex", "-1"), _.attr("tabindex", "-1"))
						}
					},
					has: {
						search: function() {
							return z.length > 0
						},
						selectInput: function() {
							return I.is("select")
						},
						firstLetter: function(e, t) {
							var n, i;
							return e && 0 !== e.length && "string" == typeof t ? (n = C.get.choiceText(e, !1), t = t.toLowerCase(), i = String(n).charAt(0).toLowerCase(), t == i) : !1
						},
						input: function() {
							return I.length > 0
						},
						items: function() {
							return V.length > 0
						},
						menu: function() {
							return _.length > 0
						},
						message: function() {
							return 0 !== _.children(j.message).length
						},
						label: function(e) {
							var t = N.find(j.label);
							return t.filter('[data-value="' + e + '"]').length > 0
						},
						maxSelections: function() {
							return k.maxSelections && C.get.selectionCount() >= k.maxSelections
						},
						allResultsFiltered: function() {
							return V.filter(j.unselectable).length === V.length
						},
						value: function(t) {
							var n = C.get.values(),
								i = e.isArray(n) ? n && -1 !== e.inArray(t, n) : n == t;
							return i ? !0 : !1
						}
					},
					is: {
						active: function() {
							return N.hasClass(T.active)
						},
						alreadySetup: function() {
							return N.is("select") && N.parent(j.dropdown).length > 0 && 0 === N.prev().length
						},
						animating: function(e) {
							return e ? e.transition && e.transition("is animating") : _.transition && _.transition("is animating")
						},
						disabled: function() {
							return N.hasClass(T.disabled)
						},
						focused: function() {
							return n.activeElement === N[0]
						},
						focusedOnSearch: function() {
							return n.activeElement === z[0]
						},
						allFiltered: function() {
							return (C.is.multiple() || C.has.search()) && !C.has.message() && C.has.allResultsFiltered()
						},
						hidden: function(e) {
							return !C.is.visible(e)
						},
						initialLoad: function() {
							return h
						},
						onScreen: function(e) {
							var t, n = e || _,
								i = !0,
								o = {};
							return n.addClass(T.loading), t = {
								context: {
									scrollTop: q.scrollTop(),
									height: q.outerHeight()
								},
								menu: {
									offset: n.offset(),
									height: n.outerHeight()
								}
							}, o = {
								above: t.context.scrollTop <= t.menu.offset.top - t.menu.height,
								below: t.context.scrollTop + t.context.height >= t.menu.offset.top + t.menu.height
							}, o.below ? (C.verbose("Dropdown can fit in context downward", o), i = !0) : o.below || o.above ? (C.verbose("Dropdown cannot fit below, opening upward", o), i = !1) : (C.verbose("Dropdown cannot fit in either direction, favoring downward", o), i = !0), n.removeClass(T.loading), i
						},
						inObject: function(t, n) {
							var i = !1;
							return e.each(n, function(e, n) {
								return n == t ? (i = !0, !0) : void 0
							}), i
						},
						multiple: function() {
							return N.hasClass(T.multiple)
						},
						single: function() {
							return !C.is.multiple()
						},
						selectMutation: function(t) {
							var n = !1;
							return e.each(t, function(t, i) {
								return i.target && e(i.target).is("select") ? (n = !0, !0) : void 0
							}), n
						},
						search: function() {
							return N.hasClass(T.search)
						},
						searchSelection: function() {
							return C.has.search() && 1 === z.parent(j.dropdown).length
						},
						selection: function() {
							return N.hasClass(T.selection)
						},
						userValue: function(t) {
							return -1 !== e.inArray(t, C.get.userValues())
						},
						upward: function(e) {
							var t = e || N;
							return t.hasClass(T.upward)
						},
						visible: function(e) {
							return e ? e.hasClass(T.visible) : _.hasClass(T.visible)
						}
					},
					can: {
						activate: function(e) {
							return k.useLabels ? !0 : C.has.maxSelections() ? C.has.maxSelections() && e.hasClass(T.active) ? !0 : !1 : !0
						},
						click: function() {
							return c || "click" == k.on
						},
						extendSelect: function() {
							return k.allowAdditions || k.apiSettings
						},
						show: function() {
							return !C.is.disabled() && (C.has.items() || C.has.message())
						},
						useAPI: function() {
							return e.fn.api !== i
						}
					},
					animate: {
						show: function(t, n) {
							var o, r = n || _,
								a = n ? function() {} : function() {
									C.hideSubMenus(), C.hideOthers(), C.set.active()
								};
							t = e.isFunction(t) ? t : function() {}, C.verbose("Doing menu show animation", r), C.set.direction(n), o = C.get.transition(n), C.is.selection() && C.set.scrollPosition(C.get.selectedItem(), !0), (C.is.hidden(r) || C.is.animating(r)) && ("none" == o ? (a(), r.transition("show"), t.call(U)) : e.fn.transition !== i && N.transition("is supported") ? r.transition({
								animation: o + " in",
								debug: k.debug,
								verbose: k.verbose,
								duration: k.duration,
								queue: !0,
								onStart: a,
								onComplete: function() {
									t.call(U)
								}
							}) : C.error(R.noTransition, o))
						},
						hide: function(t, n) {
							var o = n || _,
								r = (n ? .9 * k.duration : k.duration, n ? function() {} : function() {
									C.can.click() && C.unbind.intent(), C.remove.active()
								}),
								a = C.get.transition(n);
							t = e.isFunction(t) ? t : function() {}, (C.is.visible(o) || C.is.animating(o)) && (C.verbose("Doing menu hide animation", o), "none" == a ? (r(), o.transition("hide"), t.call(U)) : e.fn.transition !== i && N.transition("is supported") ? o.transition({
								animation: a + " out",
								duration: k.duration,
								debug: k.debug,
								verbose: k.verbose,
								queue: !0,
								onStart: r,
								onComplete: function() {
									"auto" == k.direction && C.remove.upward(n), t.call(U)
								}
							}) : C.error(R.transition))
						}
					},
					hideAndClear: function() {
						C.remove.searchTerm(), C.has.maxSelections() || (C.has.search() ? C.hide(function() {
							C.remove.filteredItem()
						}) : C.hide())
					},
					delay: {
						show: function() {
							C.verbose("Delaying show event to ensure user intent"), clearTimeout(C.timer), C.timer = setTimeout(C.show, k.delay.show)
						},
						hide: function() {
							C.verbose("Delaying hide event to ensure user intent"), clearTimeout(C.timer), C.timer = setTimeout(C.hide, k.delay.hide)
						}
					},
					escape: {
						regExp: function(e) {
							return e = String(e), e.replace(D.escape, "\\$&")
						}
					},
					setting: function(t, n) {
						if (C.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, k, t);
						else {
							if (n === i) return k[t];
							k[t] = n
						}
					},
					internal: function(t, n) {
						if (e.isPlainObject(t)) e.extend(!0, C, t);
						else {
							if (n === i) return C[t];
							C[t] = n
						}
					},
					debug: function() {
						k.debug && (k.performance ? C.performance.log(arguments) : (C.debug = Function.prototype.bind.call(console.info, console, k.name + ":"), C.debug.apply(console, arguments)))
					},
					verbose: function() {
						k.verbose && k.debug && (k.performance ? C.performance.log(arguments) : (C.verbose = Function.prototype.bind.call(console.info, console, k.name + ":"), C.verbose.apply(console, arguments)))
					},
					error: function() {
						C.error = Function.prototype.bind.call(console.error, console, k.name + ":"), C.error.apply(console, arguments)
					},
					performance: {
						log: function(e) {
							var t, n, i;
							k.performance && (t = (new Date).getTime(), i = u || t, n = t - i, u = t, d.push({
								Name: e[0],
								Arguments: [].slice.call(e, 1) || "",
								Element: U,
								"Execution Time": n
							})), clearTimeout(C.performance.timer), C.performance.timer = setTimeout(C.performance.display, 500)
						},
						display: function() {
							var t = k.name + ":",
								n = 0;
							u = !1, clearTimeout(C.performance.timer), e.each(d, function(e, t) {
								n += t["Execution Time"]
							}), t += " " + n + "ms", l && (t += " '" + l + "'"), (console.group !== i || console.table !== i) && d.length > 0 && (console.groupCollapsed(t), console.table ? console.table(d) : e.each(d, function(e, t) {
								console.log(t.Name + ": " + t["Execution Time"] + "ms")
							}), console.groupEnd()), d = []
						}
					},
					invoke: function(t, n, o) {
						var a, s, l, c = $;
						return n = n || m, o = U || o, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), a = t.length - 1, e.each(t, function(n, o) {
							var r = n != a ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
							if (e.isPlainObject(c[r]) && n != a) c = c[r];
							else {
								if (c[r] !== i) return s = c[r], !1;
								if (!e.isPlainObject(c[o]) || n == a) return c[o] !== i ? (s = c[o], !1) : (C.error(R.method, t), !1);
								c = c[o]
							}
						})), e.isFunction(s) ? l = s.apply(o, n) : s !== i && (l = s), e.isArray(r) ? r.push(l) : r !== i ? r = [r, l] : l !== i && (r = l), s
					}
				}, p ? ($ === i && C.initialize(), C.invoke(f)) : ($ !== i && $.invoke("destroy"), C.initialize())
			}), r !== i ? r : a
		}, e.fn.dropdown.settings = {
			debug: !1,
			verbose: !1,
			performance: !0,
			on: "click",
			action: "activate",
			apiSettings: !1,
			saveRemoteData: !0,
			throttle: 200,
			context: t,
			direction: "auto",
			keepOnScreen: !0,
			match: "both",
			fullTextSearch: !1,
			placeholder: "auto",
			preserveHTML: !0,
			sortSelect: !1,
			forceSelection: !0,
			allowAdditions: !1,
			maxSelections: !1,
			useLabels: !0,
			delimiter: ",",
			showOnFocus: !0,
			allowTab: !0,
			allowCategorySelection: !1,
			fireOnInit: !1,
			transition: "auto",
			duration: 200,
			glyphWidth: 1.0714,
			label: {
				transition: "scale",
				duration: 200,
				variation: !1
			},
			delay: {
				hide: 300,
				show: 200,
				search: 20,
				touch: 50
			},
			onChange: function() {},
			onAdd: function() {},
			onRemove: function() {},
			onLabelSelect: function() {},
			onLabelCreate: function() {
				return e(this)
			},
			onNoResults: function() {
				return !0
			},
			onShow: function() {},
			onHide: function() {},
			name: "Dropdown",
			namespace: "dropdown",
			message: {
				addResult: "Add <b>{term}</b>",
				count: "{count} selected",
				maxSelections: "Max {maxCount} selections",
				noResults: "No results found.",
				serverError: "There was an error contacting the server"
			},
			error: {
				action: "You called a dropdown action that was not defined",
				alreadySetup: "Once a select has been initialized behaviors must be called on the created ui dropdown",
				labels: "Allowing user additions currently requires the use of labels.",
				missingMultiple: "<select> requires multiple property to be set to correctly preserve multiple values",
				method: "The method you called is not defined.",
				noAPI: "The API module is required to load resources remotely",
				noStorage: "Saving remote data requires session storage",
				noTransition: "This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>"
			},
			regExp: {
				escape: /[-[\]{}()*+?.,\\^$|#\s]/g
			},
			metadata: {
				defaultText: "defaultText",
				defaultValue: "defaultValue",
				placeholderText: "placeholder",
				text: "text",
				value: "value"
			},
			selector: {
				addition: ".addition",
				dropdown: ".ui.dropdown",
				icon: "> .dropdown.icon",
				input: '> input[type="hidden"], > select',
				item: ".item",
				label: "> .label",
				remove: "> .label > .delete.icon",
				siblingLabel: ".label",
				menu: ".menu",
				message: ".message",
				menuIcon: ".dropdown.icon",
				search: "input.search, .menu > .search > input",
				text: "> .text:not(.icon)",
				unselectable: ".disabled, .filtered"
			},
			className: {
				active: "active",
				addition: "addition",
				animating: "animating",
				disabled: "disabled",
				dropdown: "ui dropdown",
				filtered: "filtered",
				hidden: "hidden transition",
				item: "item",
				label: "ui label",
				loading: "loading",
				menu: "menu",
				message: "message",
				multiple: "multiple",
				placeholder: "default",
				search: "search",
				selected: "selected",
				selection: "selection",
				upward: "upward",
				visible: "visible"
			}
		}, e.fn.dropdown.settings.templates = {
			dropdown: function(t) {
				var n = t.placeholder || !1,
					i = (t.values || {}, "");
				return i += '<i class="dropdown icon"></i>', i += t.placeholder ? '<div class="default text">' + n + "</div>" : '<div class="text"></div>', i += '<div class="menu">', e.each(t.values, function(e, t) {
					i += t.disabled ? '<div class="disabled item" data-value="' + t.value + '">' + t.name + "</div>" : '<div class="item" data-value="' + t.value + '">' + t.name + "</div>"
				}), i += "</div>"
			},
			menu: function(t) {
				var n = (t.values || {}, "");
				return e.each(t.values, function(e, t) {
					n += '<div class="item" data-value="' + t.value + '">' + t.name + "</div>"
				}), n
			},
			label: function(e, t) {
				return t + '<i class="delete icon"></i>'
			},
			message: function(e) {
				return e
			},
			addition: function(e) {
				return e
			}
		}
	}(jQuery, window, document),
	function(e, t, n, i) {
		"use strict";
		e.fn.embed = function(n) {
			var o, r = e(this),
				a = r.selector || "",
				s = (new Date).getTime(),
				l = [],
				c = arguments[0],
				u = "string" == typeof c,
				d = [].slice.call(arguments, 1);
			return r.each(function() {
				var f, p = e.isPlainObject(n) ? e.extend(!0, {}, e.fn.embed.settings, n) : e.extend({}, e.fn.embed.settings),
					m = p.selector,
					g = p.className,
					h = p.sources,
					v = p.error,
					b = p.metadata,
					y = p.namespace,
					x = p.templates,
					w = "." + y,
					C = "module-" + y,
					k = (e(t), e(this)),
					T = k.find(m.placeholder),
					S = k.find(m.icon),
					E = k.find(m.embed),
					A = this,
					D = k.data(C);
				f = {
					initialize: function() {
						f.debug("Initializing embed"), f.determine.autoplay(), f.create(), f.bind.events(), f.instantiate()
					},
					instantiate: function() {
						f.verbose("Storing instance of module", f), D = f, k.data(C, f)
					},
					destroy: function() {
						f.verbose("Destroying previous instance of embed"), f.reset(), k.removeData(C).off(w)
					},
					refresh: function() {
						f.verbose("Refreshing selector cache"), T = k.find(m.placeholder), S = k.find(m.icon), E = k.find(m.embed)
					},
					bind: {
						events: function() {
							f.has.placeholder() && (f.debug("Adding placeholder events"), console.log(k, m.placeholder), k.on("click" + w, m.placeholder, f.createAndShow).on("click" + w, m.icon, f.createAndShow))
						}
					},
					create: function() {
						var e = f.get.placeholder();
						e ? f.createPlaceholder() : f.createAndShow()
					},
					createPlaceholder: function(e) {
						{
							var t = f.get.icon(),
								n = f.get.url();
							f.generate.embed(n)
						}
						e = e || f.get.placeholder(), k.html(x.placeholder(e, t)), f.debug("Creating placeholder for embed", e, t)
					},
					createEmbed: function(t) {
						f.refresh(), t = t || f.get.url(), console.log(t), E = e("<div/>").addClass(g.embed).html(f.generate.embed(t)).appendTo(k), p.onCreate.call(A, t), f.debug("Creating embed object", E)
					},
					createAndShow: function() {
						console.log("cands"), f.createEmbed(), f.show()
					},
					change: function(e, t, n) {
						f.debug("Changing video to ", e, t, n), k.data(b.source, e).data(b.id, t).data(b.url, n), f.create()
					},
					reset: function() {
						f.debug("Clearing embed and showing placeholder"), f.remove.active(), f.remove.embed(), f.showPlaceholder(), p.onReset.call(A)
					},
					show: function() {
						f.debug("Showing embed"), f.set.active(), p.onDisplay.call(A)
					},
					hide: function() {
						f.debug("Hiding embed"), f.showPlaceholder()
					},
					showPlaceholder: function() {
						f.debug("Showing placeholder image"), f.remove.active(), p.onPlaceholderDisplay.call(A)
					},
					get: {
						id: function() {
							return p.id || k.data(b.id)
						},
						placeholder: function() {
							return p.placeholder || k.data(b.placeholder)
						},
						icon: function() {
							return p.icon ? p.icon : k.data(b.icon) !== i ? k.data(b.icon) : f.determine.icon()
						},
						source: function() {
							return p.source ? p.source : k.data(b.source) !== i ? k.data(b.source) : f.determine.source()
						},
						type: function() {
							var e = f.get.source();
							return h[e] !== i ? h[e].type : !1
						},
						url: function() {
							return p.url ? p.url : k.data(b.url) !== i ? k.data(b.url) : f.determine.url()
						}
					},
					determine: {
						autoplay: function() {
							f.should.autoplay() && (p.autoplay = !0)
						},
						source: function(t) {
							var n = !1;
							return t = t || f.get.url(), t && e.each(h, function(e, i) {
								return -1 !== t.search(i.domain) ? (n = e, !1) : void 0
							}), n
						},
						icon: function() {
							var e = f.get.source();
							return h[e] !== i ? h[e].icon : !1
						},
						url: function() {
							var e, t = p.id || k.data(b.id),
								n = p.source || k.data(b.source);
							return e = h[n] !== i ? h[n].url.replace("{id}", t) : !1, e && k.data(b.url, e), e
						}
					},
					set: {
						active: function() {
							k.addClass(g.active)
						}
					},
					remove: {
						active: function() {
							k.removeClass(g.active)
						},
						embed: function() {
							E.empty()
						}
					},
					encode: {
						parameters: function(e) {
							var t, n = [];
							for (t in e) n.push(encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
							return n.join("&amp;")
						}
					},
					generate: {
						embed: function(e) {
							f.debug("Generating embed html");
							var t, n, i = f.get.source();
							return e = f.get.url(e), e ? (n = f.generate.parameters(i), t = x.iframe(e, n)) : f.error(v.noURL, k), t
						},
						parameters: function(t, n) {
							var o = h[t] && h[t].parameters !== i ? h[t].parameters(p) : {};
							return n = n || p.parameters, n && (o = e.extend({}, o, n)), o = p.onEmbed(o), f.encode.parameters(o)
						}
					},
					has: {
						placeholder: function() {
							return p.placeholder || k.data(b.placeholder)
						}
					},
					should: {
						autoplay: function() {
							return "auto" === p.autoplay ? p.placeholder || k.data(b.placeholder) !== i : p.autoplay
						}
					},
					is: {
						video: function() {
							return "video" == f.get.type()
						}
					},
					setting: function(t, n) {
						if (f.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, p, t);
						else {
							if (n === i) return p[t];
							p[t] = n
						}
					},
					internal: function(t, n) {
						if (e.isPlainObject(t)) e.extend(!0, f, t);
						else {
							if (n === i) return f[t];
							f[t] = n
						}
					},
					debug: function() {
						p.debug && (p.performance ? f.performance.log(arguments) : (f.debug = Function.prototype.bind.call(console.info, console, p.name + ":"), f.debug.apply(console, arguments)))
					},
					verbose: function() {
						p.verbose && p.debug && (p.performance ? f.performance.log(arguments) : (f.verbose = Function.prototype.bind.call(console.info, console, p.name + ":"), f.verbose.apply(console, arguments)))
					},
					error: function() {
						f.error = Function.prototype.bind.call(console.error, console, p.name + ":"), f.error.apply(console, arguments)
					},
					performance: {
						log: function(e) {
							var t, n, i;
							p.performance && (t = (new Date).getTime(), i = s || t, n = t - i, s = t, l.push({
								Name: e[0],
								Arguments: [].slice.call(e, 1) || "",
								Element: A,
								"Execution Time": n
							})), clearTimeout(f.performance.timer), f.performance.timer = setTimeout(f.performance.display, 500)
						},
						display: function() {
							var t = p.name + ":",
								n = 0;
							s = !1, clearTimeout(f.performance.timer), e.each(l, function(e, t) {
								n += t["Execution Time"]
							}), t += " " + n + "ms", a && (t += " '" + a + "'"), r.length > 1 && (t += " (" + r.length + ")"), (console.group !== i || console.table !== i) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function(e, t) {
								console.log(t.Name + ": " + t["Execution Time"] + "ms")
							}), console.groupEnd()), l = []
						}
					},
					invoke: function(t, n, r) {
						var a, s, l, c = D;
						return n = n || d, r = A || r, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), a = t.length - 1, e.each(t, function(n, o) {
							var r = n != a ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
							if (e.isPlainObject(c[r]) && n != a) c = c[r];
							else {
								if (c[r] !== i) return s = c[r], !1;
								if (!e.isPlainObject(c[o]) || n == a) return c[o] !== i ? (s = c[o], !1) : (f.error(v.method, t), !1);
								c = c[o]
							}
						})), e.isFunction(s) ? l = s.apply(r, n) : s !== i && (l = s), e.isArray(o) ? o.push(l) : o !== i ? o = [o, l] : l !== i && (o = l), s
					}
				}, u ? (D === i && f.initialize(), f.invoke(c)) : (D !== i && D.invoke("destroy"), f.initialize())
			}), o !== i ? o : this
		}, e.fn.embed.settings = {
			name: "Embed",
			namespace: "embed",
			debug: !1,
			verbose: !1,
			performance: !0,
			icon: !1,
			source: !1,
			url: !1,
			id: !1,
			autoplay: "auto",
			color: "#444444",
			hd: !0,
			brandedUI: !1,
			parameters: !1,
			onDisplay: function() {},
			onPlaceholderDisplay: function() {},
			onReset: function() {},
			onCreate: function() {},
			onEmbed: function(e) {
				return e
			},
			metadata: {
				id: "id",
				icon: "icon",
				placeholder: "placeholder",
				source: "source",
				url: "url"
			},
			error: {
				noURL: "No URL specified",
				method: "The method you called is not defined"
			},
			className: {
				active: "active",
				embed: "embed"
			},
			selector: {
				embed: ".embed",
				placeholder: ".placeholder",
				icon: ".icon"
			},
			sources: {
				youtube: {
					name: "youtube",
					type: "video",
					icon: "video play",
					domain: "youtube.com",
					url: "//www.youtube.com/embed/{id}",
					parameters: function(e) {
						return {
							autohide: !e.brandedUI,
							autoplay: e.autoplay,
							color: e.colors || i,
							hq: e.hd,
							jsapi: e.api,
							modestbranding: !e.brandedUI
						}
					}
				},
				vimeo: {
					name: "vimeo",
					type: "video",
					icon: "video play",
					domain: "vimeo.com",
					url: "//player.vimeo.com/video/{id}",
					parameters: function(e) {
						return {
							api: e.api,
							autoplay: e.autoplay,
							byline: e.brandedUI,
							color: e.colors || i,
							portrait: e.brandedUI,
							title: e.brandedUI
						}
					}
				}
			},
			templates: {
				iframe: function(e, t) {
					return '<iframe src="' + e + "?=" + t + '" width="100%" height="100%" frameborder="0" scrolling="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'
				},
				placeholder: function(e, t) {
					var n = "";
					return t && (n += '<i class="' + t + ' icon"></i>'), e && (n += '<img class="placeholder" src="' + e + '">'), n
				}
			},
			api: !0,
			onPause: function() {},
			onPlay: function() {},
			onStop: function() {}
		}
	}(jQuery, window, document),
	function(e, t, n, i) {
		"use strict";
		e.fn.form = function(t) {
			var o, r = e(this),
				a = r.selector || "",
				s = (new Date).getTime(),
				l = [],
				c = arguments[0],
				u = arguments[1],
				d = "string" == typeof c,
				f = [].slice.call(arguments, 1);
			return r.each(function() {
				var p, m, g, h, v, b, y, x, w, C, k, T, S, E, A, D, j, R, F = e(this),
					P = this,
					O = [],
					N = !1;
				R = {
					initialize: function() {
						R.get.settings(), d ? (j === i && R.instantiate(), R.invoke(c)) : (R.verbose("Initializing form validation", F, x), R.bindEvents(), R.set.defaults(), R.instantiate())
					},
					instantiate: function() {
						R.verbose("Storing instance of module", R), j = R, F.data(A, R)
					},
					destroy: function() {
						R.verbose("Destroying previous module", j), R.removeEvents(), F.removeData(A)
					},
					refresh: function() {
						R.verbose("Refreshing selector cache"), p = F.find(k.field), m = F.find(k.group), g = F.find(k.message), h = F.find(k.prompt), v = F.find(k.submit), b = F.find(k.clear), y = F.find(k.reset)
					},
					submit: function() {
						R.verbose("Submitting form", F), F.submit()
					},
					attachEvents: function(t, n) {
						n = n || "submit", e(t).on("click" + D, function(e) {
							R[n](), e.preventDefault()
						})
					},
					bindEvents: function() {
						R.verbose("Attaching form events"), F.on("submit" + D, R.validate.form).on("blur" + D, k.field, R.event.field.blur).on("click" + D, k.submit, R.submit).on("click" + D, k.reset, R.reset).on("click" + D, k.clear, R.clear), x.keyboardShortcuts && F.on("keydown" + D, k.field, R.event.field.keydown), p.each(function() {
							var t = e(this),
								n = t.prop("type"),
								i = R.get.changeEvent(n, t);
							e(this).on(i + D, R.event.field.change)
						})
					},
					clear: function() {
						p.each(function() {
							var t = e(this),
								n = t.parent(),
								i = t.closest(m),
								o = i.find(k.prompt),
								r = t.data(C.defaultValue) || "",
								a = n.is(k.uiCheckbox),
								s = n.is(k.uiDropdown),
								l = i.hasClass(T.error);
							l && (R.verbose("Resetting error on field", i), i.removeClass(T.error), o.remove()), s ? (R.verbose("Resetting dropdown value", n, r), n.dropdown("clear")) : a ? t.prop("checked", !1) : (R.verbose("Resetting field value", t, r), t.val(""))
						})
					},
					reset: function() {
						p.each(function() {
							var t = e(this),
								n = t.parent(),
								o = t.closest(m),
								r = o.find(k.prompt),
								a = t.data(C.defaultValue),
								s = n.is(k.uiCheckbox),
								l = n.is(k.uiDropdown),
								c = o.hasClass(T.error);
							a !== i && (c && (R.verbose("Resetting error on field", o), o.removeClass(T.error), r.remove()), l ? (R.verbose("Resetting dropdown value", n, a), n.dropdown("restore defaults")) : s ? (R.verbose("Resetting checkbox value", n, a), t.prop("checked", a)) : (R.verbose("Resetting field value", t, a), t.val(a)))
						})
					},
					is: {
						valid: function() {
							var t = !0;
							return R.verbose("Checking if form is valid"), e.each(w, function(e, n) {
								R.validate.field(n) || (t = !1)
							}), t
						}
					},
					removeEvents: function() {
						F.off(D), p.off(D), v.off(D), p.off(D)
					},
					event: {
						field: {
							keydown: function(t) {
								var n = e(this),
									i = t.which,
									o = {
										enter: 13,
										escape: 27
									};
								i == o.escape && (R.verbose("Escape key pressed blurring field"), n.blur()), !t.ctrlKey && i == o.enter && n.is(k.input) && n.not(k.checkbox).length > 0 && (N || (n.one("keyup" + D, R.event.field.keyup), R.submit(), R.debug("Enter pressed on input submitting form")), N = !0)
							},
							keyup: function() {
								N = !1
							},
							blur: function() {
								var t = e(this),
									n = t.closest(m),
									i = R.get.validation(t);
								n.hasClass(T.error) ? (R.debug("Revalidating field", t, i), R.validate.field(i)) : ("blur" == x.on || "change" == x.on) && R.validate.field(i)
							},
							change: function() {
								var t = e(this),
									n = t.closest(m);
								("change" == x.on || n.hasClass(T.error) && x.revalidate) && (clearTimeout(R.timer), R.timer = setTimeout(function() {
									R.debug("Revalidating field", t, R.get.validation(t)), R.validate.field(R.get.validation(t))
								}, x.delay))
							}
						}
					},
					get: {
						changeEvent: function(e, t) {
							return "checkbox" == e || "radio" == e || "hidden" == e || t.is("select") ? "change" : R.get.inputEvent()
						},
						inputEvent: function() {
							return n.createElement("input").oninput !== i ? "input" : n.createElement("input").onpropertychange !== i ? "propertychange" : "keyup"
						},
						settings: function() {
							if (e.isPlainObject(t)) {
								var n = Object.keys(t),
									o = n.length > 0 ? t[n[0]].identifier !== i && t[n[0]].rules !== i : !1;
								o ? (x = e.extend(!0, {}, e.fn.form.settings, u), w = e.extend({}, e.fn.form.settings.defaults, t), R.error(x.error.oldSyntax, P), R.verbose("Extending settings from legacy parameters", w, x)) : (x = e.extend(!0, {}, e.fn.form.settings, t), w = e.extend({}, e.fn.form.settings.defaults, x.fields), R.verbose("Extending settings", w, x))
							} else x = e.fn.form.settings, w = e.fn.form.settings.defaults, R.verbose("Using default form validation", w, x);
							E = x.namespace, C = x.metadata, k = x.selector, T = x.className, S = x.error, A = "module-" + E, D = "." + E, j = F.data(A), R.refresh()
						},
						field: function(t) {
							return R.verbose("Finding field with identifier", t), p.filter("#" + t).length > 0 ? p.filter("#" + t) : p.filter('[name="' + t + '"]').length > 0 ? p.filter('[name="' + t + '"]') : p.filter('[name="' + t + '[]"]').length > 0 ? p.filter('[name="' + t + '[]"]') : p.filter("[data-" + C.validate + '="' + t + '"]').length > 0 ? p.filter("[data-" + C.validate + '="' + t + '"]') : e("<input/>")
						},
						fields: function(t) {
							var n = e();
							return e.each(t, function(e, t) {
								n = n.add(R.get.field(t))
							}), n
						},
						validation: function(t) {
							var n;
							return w ? (e.each(w, function(e, i) {
								R.get.field(i.identifier)[0] == t[0] && (n = i)
							}), n || !1) : !1
						},
						value: function(e) {
							var t, n = [];
							return n.push(e), t = R.get.values.call(P, n), t[e]
						},
						values: function(t) {
							var n = e.isArray(t) ? R.get.fields(t) : p,
								i = {};
							return n.each(function(t, n) {
								var o = e(n),
									r = (o.prop("type"), o.prop("name")),
									a = o.val(),
									s = o.is(k.checkbox),
									l = o.is(k.radio),
									c = -1 !== r.indexOf("[]"),
									u = s ? o.is(":checked") : !1;
								if (r)
									if (c)
										if (r = r.replace("[]", ""), i[r] || (i[r] = []), s) {
											if (!u) return R.debug("Omitted unchecked checkbox", o), !0;
											i[r].push(a)
										} else i[r].push(a);
								else if (l) u && (i[r] = a);
								else if (s) {
									if (!u) return R.debug("Omitted unchecked checkbox", o), !0;
									i[r] = !0
								} else i[r] = a
							}), i
						}
					},
					has: {
						field: function(e) {
							return R.verbose("Checking for existence of a field with identifier", e), "string" != typeof e && R.error(S.identifier, e), p.filter("#" + e).length > 0 ? !0 : p.filter('[name="' + e + '"]').length > 0 ? !0 : p.filter("[data-" + C.validate + '="' + e + '"]').length > 0 ? !0 : !1
						}
					},
					add: {
						prompt: function(t, n) {
							var o = R.get.field(t),
								r = o.closest(m),
								a = r.children(k.prompt),
								s = 0 !== a.length;
							n = "string" == typeof n ? [n] : n, R.verbose("Adding field error state", t), r.addClass(T.error), x.inline && (s || (a = x.templates.prompt(n), a.appendTo(r)), a.html(n[0]), s ? R.verbose("Inline errors are disabled, no inline error added", t) : x.transition && e.fn.transition !== i && F.transition("is supported") ? (R.verbose("Displaying error with css transition", x.transition), a.transition(x.transition + " in", x.duration)) : (R.verbose("Displaying error with fallback javascript animation"), a.fadeIn(x.duration)))
						},
						errors: function(e) {
							R.debug("Adding form error messages", e), g.html(x.templates.error(e))
						}
					},
					remove: {
						prompt: function(t) {
							var n = R.get.field(t.identifier),
								o = n.closest(m),
								r = o.children(k.prompt);
							o.removeClass(T.error), x.inline && r.is(":visible") && (R.verbose("Removing prompt for field", t), x.transition && e.fn.transition !== i && F.transition("is supported") ? r.transition(x.transition + " out", x.duration, function() {
								r.remove()
							}) : r.fadeOut(x.duration, function() {
								r.remove()
							}))
						}
					},
					set: {
						success: function() {
							F.removeClass(T.error).addClass(T.success)
						},
						defaults: function() {
							p.each(function() {
								var t = e(this),
									n = t.filter(k.checkbox).length > 0,
									i = n ? t.is(":checked") : t.val();
								t.data(C.defaultValue, i)
							})
						},
						error: function() {
							F.removeClass(T.success).addClass(T.error)
						},
						value: function(e, t) {
							var n = {};
							return n[e] = t, R.set.values.call(P, n)
						},
						values: function(t) {
							e.isEmptyObject(t) || e.each(t, function(t, n) {
								var i, o = R.get.field(t),
									r = o.parent(),
									a = e.isArray(n),
									s = r.is(k.uiCheckbox),
									l = r.is(k.uiDropdown),
									c = o.is(k.radio) && s,
									u = o.length > 0;
								u && (a && s ? (R.verbose("Selecting multiple", n, o), r.checkbox("uncheck"), e.each(n, function(e, t) {
									i = o.filter('[value="' + t + '"]'), r = i.parent(), i.length > 0 && r.checkbox("check")
								})) : c ? (R.verbose("Selecting radio value", n, o), o.filter('[value="' + n + '"]').parent(k.uiCheckbox).checkbox("check")) : s ? (R.verbose("Setting checkbox value", n, r), r.checkbox(n === !0 ? "check" : "uncheck")) : l ? (R.verbose("Setting dropdown value", n, r), r.dropdown("set selected", n)) : (R.verbose("Setting field value", n, o), o.val(n)))
							})
						}
					},
					validate: {
						form: function(e) {
							return N ? !1 : (O = [], R.is.valid() ? (R.debug("Form has no validation errors, submitting"), R.set.success(), x.onSuccess.call(P, e)) : (R.debug("Form has errors"), R.set.error(), x.inline || R.add.errors(O), F.data("moduleApi") !== i && e.stopImmediatePropagation(), x.onFailure.call(P, O)))
						},
						field: function(t) {
							var n = R.get.field(t.identifier),
								o = !0,
								r = [];
							return n.prop("disabled") ? (R.debug("Field is disabled. Skipping", t.identifier), o = !0) : t.optional && "" === e.trim(n.val()) ? (R.debug("Field is optional and empty. Skipping", t.identifier), o = !0) : t.rules !== i && e.each(t.rules, function(e, n) {
								R.has.field(t.identifier) && !R.validate.rule(t, n) && (R.debug("Field is invalid", t.identifier, n.type), r.push(n.prompt), o = !1)
							}), o ? (R.remove.prompt(t, r), x.onValid.call(n), !0) : (O = O.concat(r), R.add.prompt(t.identifier, r), x.onInvalid.call(n, r), !1)
						},
						rule: function(t, n) {
							var o, r, a, s = R.get.field(t.identifier),
								l = n.type,
								c = s.val(),
								u = l.match(x.regExp.bracket),
								d = !0;
							if (c = c === i || "" === c || null === c ? "" : e.trim(c + ""), u) {
								if (r = "" + u[1], a = l.replace(u[0], ""), o = x.rules[a], !e.isFunction(o)) return void R.error(S.noRule, a);
								d = o.call(s, c, r)
							} else {
								if (o = x.rules[l], !e.isFunction(o)) return void R.error(S.noRule, l);
								d = o.call(s, c)
							}
							return d
						}
					},
					setting: function(t, n) {
						if (e.isPlainObject(t)) e.extend(!0, x, t);
						else {
							if (n === i) return x[t];
							x[t] = n
						}
					},
					internal: function(t, n) {
						if (e.isPlainObject(t)) e.extend(!0, R, t);
						else {
							if (n === i) return R[t];
							R[t] = n
						}
					},
					debug: function() {
						x.debug && (x.performance ? R.performance.log(arguments) : (R.debug = Function.prototype.bind.call(console.info, console, x.name + ":"), R.debug.apply(console, arguments)))
					},
					verbose: function() {
						x.verbose && x.debug && (x.performance ? R.performance.log(arguments) : (R.verbose = Function.prototype.bind.call(console.info, console, x.name + ":"), R.verbose.apply(console, arguments)))
					},
					error: function() {
						R.error = Function.prototype.bind.call(console.error, console, x.name + ":"), R.error.apply(console, arguments)
					},
					performance: {
						log: function(e) {
							var t, n, i;
							x.performance && (t = (new Date).getTime(), i = s || t, n = t - i, s = t, l.push({
								Name: e[0],
								Arguments: [].slice.call(e, 1) || "",
								Element: P,
								"Execution Time": n
							})), clearTimeout(R.performance.timer), R.performance.timer = setTimeout(R.performance.display, 500)
						},
						display: function() {
							var t = x.name + ":",
								n = 0;
							s = !1, clearTimeout(R.performance.timer), e.each(l, function(e, t) {
								n += t["Execution Time"]
							}), t += " " + n + "ms", a && (t += " '" + a + "'"), r.length > 1 && (t += " (" + r.length + ")"), (console.group !== i || console.table !== i) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function(e, t) {
								console.log(t.Name + ": " + t["Execution Time"] + "ms")
							}), console.groupEnd()), l = []
						}
					},
					invoke: function(t, n, r) {
						var a, s, l, c = j;
						return n = n || f, r = P || r, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), a = t.length - 1, e.each(t, function(n, o) {
							var r = n != a ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
							if (e.isPlainObject(c[r]) && n != a) c = c[r];
							else {
								if (c[r] !== i) return s = c[r], !1;
								if (!e.isPlainObject(c[o]) || n == a) return c[o] !== i ? (s = c[o], !1) : !1;
								c = c[o]
							}
						})), e.isFunction(s) ? l = s.apply(r, n) : s !== i && (l = s), e.isArray(o) ? o.push(l) : o !== i ? o = [o, l] : l !== i && (o = l), s
					}
				}, R.initialize()
			}), o !== i ? o : this
		}, e.fn.form.settings = {
			name: "Form",
			namespace: "form",
			debug: !1,
			verbose: !1,
			performance: !0,
			fields: !1,
			keyboardShortcuts: !0,
			on: "submit",
			inline: !1,
			delay: 200,
			revalidate: !0,
			transition: "scale",
			duration: 200,
			onValid: function() {},
			onInvalid: function() {},
			onSuccess: function() {
				return !0
			},
			onFailure: function() {
				return !1
			},
			metadata: {
				defaultValue: "default",
				validate: "validate"
			},
			regExp: {
				bracket: /\[(.*)\]/i,
				escape: /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,
				email: "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?",
				integer: /^\-?\d+$/,
				flags: /^\/(.*)\/(.*)?/,
				url: /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/i
			},
			selector: {
				checkbox: 'input[type="checkbox"], input[type="radio"]',
				clear: ".clear",
				field: "input, textarea, select",
				group: ".field",
				input: "input",
				message: ".error.message",
				prompt: ".prompt.label",
				radio: 'input[type="radio"]',
				reset: '.reset:not([type="reset"])',
				submit: '.submit:not([type="submit"])',
				uiCheckbox: ".ui.checkbox",
				uiDropdown: ".ui.dropdown"
			},
			className: {
				error: "error",
				label: "ui prompt label",
				pressed: "down",
				success: "success"
			},
			error: {
				oldSyntax: "Starting in 2.0 forms now only take a single settings object. Validation settings converted to new syntax automatically.",
				identifier: "You must specify a string identifier for each field",
				noRule: "There is no rule matching the one you specified",
				method: "The method you called is not defined."
			},
			templates: {
				error: function(t) {
					var n = '<ul class="list">';
					return e.each(t, function(e, t) {
						n += "<li>" + t + "</li>"
					}), n += "</ul>", e(n)
				},
				prompt: function(t) {
					return e("<div/>").addClass("ui red pointing prompt label").html(t[0])
				}
			},
			rules: {
				empty: function(t) {
					return !(t === i || "" === t || e.isArray(t) && 0 === t.length)
				},
				checked: function() {
					return e(this).filter(":checked").length > 0
				},
				email: function(t) {
					var n = new RegExp(e.fn.form.settings.regExp.email, "i");
					return n.test(t)
				},
				url: function(t) {
					return e.fn.form.settings.regExp.url.test(t)
				},
				regExp: function(t, n) {
					var i, o = n.match(e.fn.form.settings.regExp.flags);
					return o && (n = o.length >= 2 ? o[1] : n, i = o.length >= 3 ? o[2] : ""), t.match(new RegExp(n, i))
				},
				integer: function(t, n) {
					var o, r, a, s = e.fn.form.settings.regExp.integer;
					return n === i || "" === n || ".." === n || (-1 == n.indexOf("..") ? s.test(n) && (o = r = n - 0) : (a = n.split("..", 2), s.test(a[0]) && (o = a[0] - 0), s.test(a[1]) && (r = a[1] - 0))), s.test(t) && (o === i || t >= o) && (r === i || r >= t)
				},
				is: function(e, t) {
					return t = "string" == typeof t ? t.toLowerCase() : t, e = "string" == typeof e ? e.toLowerCase() : e, e == t
				},
				isExactly: function(e, t) {
					return e == t
				},
				not: function(e, t) {
					return e = "string" == typeof e ? e.toLowerCase() : e, t = "string" == typeof t ? t.toLowerCase() : t, e != t
				},
				notExactly: function(e, t) {
					return e != t
				},
				contains: function(t, n) {
					return n = n.replace(e.fn.form.settings.regExp.escape, "\\$&"), -1 !== t.search(new RegExp(n, "i"))
				},
				containsExactly: function(t, n) {
					return n = n.replace(e.fn.form.settings.regExp.escape, "\\$&"), -1 !== t.search(new RegExp(n))
				},
				doesntContain: function(t, n) {
					return n = n.replace(e.fn.form.settings.regExp.escape, "\\$&"), -1 === t.search(new RegExp(n, "i"))
				},
				doesntContainExactly: function(t, n) {
					return n = n.replace(e.fn.form.settings.regExp.escape, "\\$&"), -1 === t.search(new RegExp(n))
				},
				minLength: function(e, t) {
					return e !== i ? e.length >= t : !1
				},
				length: function(e, t) {
					return e !== i ? e.length >= t : !1
				},
				exactLength: function(e, t) {
					return e !== i ? e.length == t : !1
				},
				maxLength: function(e, t) {
					return e !== i ? e.length <= t : !1
				},
				match: function(t, n) {
					{
						var o;
						e(this)
					}
					return e('[data-validate="' + n + '"]').length > 0 ? o = e('[data-validate="' + n + '"]').val() : e("#" + n).length > 0 ? o = e("#" + n).val() : e('[name="' + n + '"]').length > 0 ? o = e('[name="' + n + '"]').val() : e('[name="' + n + '[]"]').length > 0 && (o = e('[name="' + n + '[]"]')), o !== i ? t.toString() == o.toString() : !1
				},
				different: function(t, n) {
					{
						var o;
						e(this)
					}
					return e('[data-validate="' + n + '"]').length > 0 ? o = e('[data-validate="' + n + '"]').val() : e("#" + n).length > 0 ? o = e("#" + n).val() : e('[name="' + n + '"]').length > 0 ? o = e('[name="' + n + '"]').val() : e('[name="' + n + '[]"]').length > 0 && (o = e('[name="' + n + '[]"]')), o !== i ? t.toString() !== o.toString() : !1
				},
				exactCount: function(e, t) {
					return 0 == t ? "" === e : 1 == t ? "" !== e && -1 === e.search(",") : e.split(",").length == t
				},
				minCount: function(e, t) {
					return 0 == t ? !0 : 1 == t ? "" !== e : e.split(",").length >= t
				},
				maxCount: function(e, t) {
					return 0 == t ? !1 : 1 == t ? -1 === e.search(",") : e.split(",").length <= t
				}
			}
		}
	}(jQuery, window, document),
	function(e, t, n, i) {
		"use strict";
		e.fn.modal = function(o) {
			var r, a = e(this),
				s = e(t),
				l = e(n),
				c = e("body"),
				u = a.selector || "",
				d = (new Date).getTime(),
				f = [],
				p = arguments[0],
				m = "string" == typeof p,
				g = [].slice.call(arguments, 1),
				h = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
					setTimeout(e, 0)
				};
			return a.each(function() {
				var a, v, b, y, x, w, C, k, T, S = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.modal.settings, o) : e.extend({}, e.fn.modal.settings),
					E = S.selector,
					A = S.className,
					D = S.namespace,
					j = S.error,
					R = "." + D,
					F = "module-" + D,
					P = e(this),
					O = e(S.context),
					N = P.find(E.close),
					q = this,
					L = P.data(F);
				T = {
					initialize: function() {
						T.verbose("Initializing dimmer", O), T.create.id(), T.create.dimmer(), T.refreshModals(), T.bind.events(), S.observeChanges && T.observeChanges(), T.instantiate()
					},
					instantiate: function() {
						T.verbose("Storing instance of modal"), L = T, P.data(F, L)
					},
					create: {
						dimmer: function() {
							var t = {
									debug: S.debug,
									dimmerName: "modals",
									duration: {
										show: S.duration,
										hide: S.duration
									}
								},
								n = e.extend(!0, t, S.dimmerSettings);
							return S.inverted && (n.variation = n.variation !== i ? n.variation + " inverted" : "inverted"), e.fn.dimmer === i ? void T.error(j.dimmer) : (T.debug("Creating dimmer with settings", n), y = O.dimmer(n), S.detachable ? (T.verbose("Modal is detachable, moving content into dimmer"), y.dimmer("add content", P)) : T.set.undetached(), S.blurring && y.addClass(A.blurring), void(x = y.dimmer("get dimmer")))
						},
						id: function() {
							C = (Math.random().toString(16) + "000000000").substr(2, 8), w = "." + C, T.verbose("Creating unique id for element", C)
						}
					},
					destroy: function() {
						T.verbose("Destroying previous modal"), P.removeData(F).off(R), s.off(w), N.off(R), O.dimmer("destroy")
					},
					observeChanges: function() {
						"MutationObserver" in t && (k = new MutationObserver(function() {
							T.debug("DOM tree modified, refreshing"), T.refresh()
						}), k.observe(q, {
							childList: !0,
							subtree: !0
						}), T.debug("Setting up mutation observer", k))
					},
					refresh: function() {
						T.remove.scrolling(), T.cacheSizes(), T.set.screenHeight(), T.set.type(), T.set.position()
					},
					refreshModals: function() {
						v = P.siblings(E.modal), a = v.add(P)
					},
					attachEvents: function(t, n) {
						var i = e(t);
						n = e.isFunction(T[n]) ? T[n] : T.toggle, i.length > 0 ? (T.debug("Attaching modal events to element", t, n), i.off(R).on("click" + R, n)) : T.error(j.notFound, t)
					},
					bind: {
						events: function() {
							T.verbose("Attaching events"), P.on("click" + R, E.close, T.event.close).on("click" + R, E.approve, T.event.approve).on("click" + R, E.deny, T.event.deny), s.on("resize" + w, T.event.resize)
						}
					},
					get: {
						id: function() {
							return (Math.random().toString(16) + "000000000").substr(2, 8)
						}
					},
					event: {
						approve: function() {
							return S.onApprove.call(q, e(this)) === !1 ? void T.verbose("Approve callback returned false cancelling hide") : void T.hide()
						},
						deny: function() {
							return S.onDeny.call(q, e(this)) === !1 ? void T.verbose("Deny callback returned false cancelling hide") : void T.hide()
						},
						close: function() {
							T.hide()
						},
						click: function(t) {
							var i = e(t.target),
								o = i.closest(E.modal).length > 0,
								r = e.contains(n.documentElement, t.target);
							!o && r && (T.debug("Dimmer clicked, hiding all modals"), T.is.active() && (T.remove.clickaway(), S.allowMultiple ? T.hide() : T.hideAll()))
						},
						debounce: function(e, t) {
							clearTimeout(T.timer), T.timer = setTimeout(e, t)
						},
						keyboard: function(e) {
							var t = e.which,
								n = 27;
							t == n && (S.closable ? (T.debug("Escape key pressed hiding modal"), T.hide()) : T.debug("Escape key pressed, but closable is set to false"), e.preventDefault())
						},
						resize: function() {
							y.dimmer("is active") && h(T.refresh)
						}
					},
					toggle: function() {
						T.is.active() || T.is.animating() ? T.hide() : T.show()
					},
					show: function(t) {
						t = e.isFunction(t) ? t : function() {}, T.refreshModals(), T.showModal(t)
					},
					hide: function(t) {
						t = e.isFunction(t) ? t : function() {}, T.refreshModals(), T.hideModal(t)
					},
					showModal: function(t) {
						t = e.isFunction(t) ? t : function() {}, T.is.animating() || !T.is.active() ? (T.showDimmer(), T.cacheSizes(), T.set.position(), T.set.screenHeight(), T.set.type(), T.set.clickaway(), !S.allowMultiple && T.others.active() ? T.hideOthers(T.showModal) : (S.onShow.call(q), S.transition && e.fn.transition !== i && P.transition("is supported") ? (T.debug("Showing modal with css animations"), P.transition({
							debug: S.debug,
							animation: S.transition + " in",
							queue: S.queue,
							duration: S.duration,
							useFailSafe: !0,
							onComplete: function() {
								S.onVisible.apply(q), T.add.keyboardShortcuts(), T.save.focus(), T.set.active(), T.set.autofocus(), t()
							}
						})) : T.error(j.noTransition))) : T.debug("Modal is already visible")
					},
					hideModal: function(t, n) {
						t = e.isFunction(t) ? t : function() {}, T.debug("Hiding modal"), S.onHide.call(q), (T.is.animating() || T.is.active()) && (S.transition && e.fn.transition !== i && P.transition("is supported") ? (T.remove.active(), P.transition({
							debug: S.debug,
							animation: S.transition + " out",
							queue: S.queue,
							duration: S.duration,
							useFailSafe: !0,
							onStart: function() {
								T.others.active() || n || T.hideDimmer(), T.remove.keyboardShortcuts()
							},
							onComplete: function() {
								S.onHidden.call(q), T.restore.focus(), t()
							}
						})) : T.error(j.noTransition))
					},
					showDimmer: function() {
						y.dimmer("is animating") || !y.dimmer("is active") ? (T.debug("Showing dimmer"), y.dimmer("show")) : T.debug("Dimmer already visible")
					},
					hideDimmer: function() {
						return y.dimmer("is animating") || y.dimmer("is active") ? void y.dimmer("hide", function() {
							T.remove.clickaway(), T.remove.screenHeight()
						}) : void T.debug("Dimmer is not visible cannot hide")
					},
					hideAll: function(t) {
						var n = a.filter("." + A.active + ", ." + A.animating);
						t = e.isFunction(t) ? t : function() {}, n.length > 0 && (T.debug("Hiding all visible modals"), T.hideDimmer(), n.modal("hide modal", t))
					},
					hideOthers: function(t) {
						var n = v.filter("." + A.active + ", ." + A.animating);
						t = e.isFunction(t) ? t : function() {}, n.length > 0 && (T.debug("Hiding other modals", v), n.modal("hide modal", t, !0))
					},
					others: {
						active: function() {
							return v.filter("." + A.active).length > 0
						},
						animating: function() {
							return v.filter("." + A.animating).length > 0
						}
					},
					add: {
						keyboardShortcuts: function() {
							T.verbose("Adding keyboard shortcuts"), l.on("keyup" + R, T.event.keyboard)
						}
					},
					save: {
						focus: function() {
							b = e(n.activeElement).blur()
						}
					},
					restore: {
						focus: function() {
							b && b.length > 0 && b.focus()
						}
					},
					remove: {
						active: function() {
							P.removeClass(A.active)
						},
						clickaway: function() {
							S.closable && x.off("click" + w)
						},
						bodyStyle: function() {
							"" === c.attr("style") && (T.verbose("Removing style attribute"), c.removeAttr("style"))
						},
						screenHeight: function() {
							T.debug("Removing page height"), c.css("height", "")
						},
						keyboardShortcuts: function() {
							T.verbose("Removing keyboard shortcuts"), l.off("keyup" + R)
						},
						scrolling: function() {
							y.removeClass(A.scrolling), P.removeClass(A.scrolling)
						}
					},
					cacheSizes: function() {
						var o = P.outerHeight();
						(T.cache === i || 0 !== o) && (T.cache = {
							pageHeight: e(n).outerHeight(),
							height: o + S.offset,
							contextHeight: "body" == S.context ? e(t).height() : y.height()
						}), T.debug("Caching modal and container sizes", T.cache)
					},
					can: {
						fit: function() {
							return T.cache.height + 2 * S.padding < T.cache.contextHeight
						}
					},
					is: {
						active: function() {
							return P.hasClass(A.active)
						},
						animating: function() {
							return P.transition("is supported") ? P.transition("is animating") : P.is(":visible")
						},
						scrolling: function() {
							return y.hasClass(A.scrolling)
						},
						modernBrowser: function() {
							return !(t.ActiveXObject || "ActiveXObject" in t)
						}
					},
					set: {
						autofocus: function() {
							if (S.autofocus) {
								var e = P.filter(":input").filter(":visible"),
									t = e.filter("[autofocus]"),
									n = t.length > 0 ? t.first() : e.first();
								n.length > 0 && n.focus()
							}
						},
						clickaway: function() {
							S.closable && x.on("click" + w, T.event.click)
						},
						screenHeight: function() {
							T.can.fit() ? c.css("height", "") : (T.debug("Modal is taller than page content, resizing page height"), c.css("height", T.cache.height + 2 * S.padding))
						},
						active: function() {
							P.addClass(A.active)
						},
						scrolling: function() {
							y.addClass(A.scrolling), P.addClass(A.scrolling)
						},
						type: function() {
							T.can.fit() ? (T.verbose("Modal fits on screen"), T.others.active() || T.others.animating() || T.remove.scrolling()) : (T.verbose("Modal cannot fit on screen setting to scrolling"), T.set.scrolling())
						},
						position: function() {
							T.verbose("Centering modal on page", T.cache), P.css(T.can.fit() ? {
								top: "",
								marginTop: -(T.cache.height / 2)
							} : {
								marginTop: "",
								top: l.scrollTop()
							})
						},
						undetached: function() {
							y.addClass(A.undetached)
						}
					},
					setting: function(t, n) {
						if (T.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, S, t);
						else {
							if (n === i) return S[t];
							S[t] = n
						}
					},
					internal: function(t, n) {
						if (e.isPlainObject(t)) e.extend(!0, T, t);
						else {
							if (n === i) return T[t];
							T[t] = n
						}
					},
					debug: function() {
						S.debug && (S.performance ? T.performance.log(arguments) : (T.debug = Function.prototype.bind.call(console.info, console, S.name + ":"), T.debug.apply(console, arguments)))
					},
					verbose: function() {
						S.verbose && S.debug && (S.performance ? T.performance.log(arguments) : (T.verbose = Function.prototype.bind.call(console.info, console, S.name + ":"), T.verbose.apply(console, arguments)))
					},
					error: function() {
						T.error = Function.prototype.bind.call(console.error, console, S.name + ":"), T.error.apply(console, arguments)
					},
					performance: {
						log: function(e) {
							var t, n, i;
							S.performance && (t = (new Date).getTime(), i = d || t, n = t - i, d = t, f.push({
								Name: e[0],
								Arguments: [].slice.call(e, 1) || "",
								Element: q,
								"Execution Time": n
							})), clearTimeout(T.performance.timer), T.performance.timer = setTimeout(T.performance.display, 500)
						},
						display: function() {
							var t = S.name + ":",
								n = 0;
							d = !1, clearTimeout(T.performance.timer), e.each(f, function(e, t) {
								n += t["Execution Time"]
							}), t += " " + n + "ms", u && (t += " '" + u + "'"), (console.group !== i || console.table !== i) && f.length > 0 && (console.groupCollapsed(t), console.table ? console.table(f) : e.each(f, function(e, t) {
								console.log(t.Name + ": " + t["Execution Time"] + "ms")
							}), console.groupEnd()), f = []
						}
					},
					invoke: function(t, n, o) {
						var a, s, l, c = L;
						return n = n || g, o = q || o, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), a = t.length - 1, e.each(t, function(n, o) {
							var r = n != a ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
							if (e.isPlainObject(c[r]) && n != a) c = c[r];
							else {
								if (c[r] !== i) return s = c[r], !1;
								if (!e.isPlainObject(c[o]) || n == a) return c[o] !== i ? (s = c[o], !1) : !1;
								c = c[o]
							}
						})), e.isFunction(s) ? l = s.apply(o, n) : s !== i && (l = s), e.isArray(r) ? r.push(l) : r !== i ? r = [r, l] : l !== i && (r = l), s
					}
				}, m ? (L === i && T.initialize(), T.invoke(p)) : (L !== i && L.invoke("destroy"), T.initialize())
			}), r !== i ? r : this
		}, e.fn.modal.settings = {
			name: "Modal",
			namespace: "modal",
			debug: !1,
			verbose: !1,
			performance: !0,
			observeChanges: !1,
			allowMultiple: !1,
			detachable: !0,
			closable: !0,
			autofocus: !0,
			inverted: !1,
			blurring: !1,
			dimmerSettings: {
				closable: !1,
				useCSS: !0
			},
			context: "body",
			queue: !1,
			duration: 500,
			offset: 0,
			transition: "scale",
			padding: 50,
			onShow: function() {},
			onVisible: function() {},
			onHide: function() {},
			onHidden: function() {},
			onApprove: function() {
				return !0
			},
			onDeny: function() {
				return !0
			},
			selector: {
				close: ".close",
				approve: ".actions .positive, .actions .approve, .actions .ok",
				deny: ".actions .negative, .actions .deny, .actions .cancel",
				modal: ".ui.modal"
			},
			error: {
				dimmer: "UI Dimmer, a required component is not included in this page",
				method: "The method you called is not defined.",
				notFound: "The element you specified could not be found"
			},
			className: {
				active: "active",
				animating: "animating",
				blurring: "blurring",
				scrolling: "scrolling",
				undetached: "undetached"
			}
		}
	}(jQuery, window, document),
	function(e, t, n, i) {
		"use strict";
		e.fn.nag = function(n) {
			var o, r = e(this),
				a = r.selector || "",
				s = (new Date).getTime(),
				l = [],
				c = arguments[0],
				u = "string" == typeof c,
				d = [].slice.call(arguments, 1);
			return r.each(function() {
				{
					var r, f = e.isPlainObject(n) ? e.extend(!0, {}, e.fn.nag.settings, n) : e.extend({}, e.fn.nag.settings),
						p = (f.className, f.selector),
						m = f.error,
						g = f.namespace,
						h = "." + g,
						v = g + "-module",
						b = e(this),
						y = (b.find(p.close), e(f.context ? f.context : "body")),
						x = this,
						w = b.data(v);
					t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
						setTimeout(e, 0)
					}
				}
				r = {
					initialize: function() {
						r.verbose("Initializing element"), b.on("click" + h, p.close, r.dismiss).data(v, r), f.detachable && b.parent()[0] !== y[0] && b.detach().prependTo(y), f.displayTime > 0 && setTimeout(r.hide, f.displayTime), r.show()
					},
					destroy: function() {
						r.verbose("Destroying instance"), b.removeData(v).off(h)
					},
					show: function() {
						r.should.show() && !b.is(":visible") && (r.debug("Showing nag", f.animation.show), "fade" == f.animation.show ? b.fadeIn(f.duration, f.easing) : b.slideDown(f.duration, f.easing))
					},
					hide: function() {
						r.debug("Showing nag", f.animation.hide), "fade" == f.animation.show ? b.fadeIn(f.duration, f.easing) : b.slideUp(f.duration, f.easing)
					},
					onHide: function() {
						r.debug("Removing nag", f.animation.hide), b.remove(), f.onHide && f.onHide()
					},
					dismiss: function(e) {
						f.storageMethod && r.storage.set(f.key, f.value), r.hide(), e.stopImmediatePropagation(), e.preventDefault()
					},
					should: {
						show: function() {
							return f.persist ? (r.debug("Persistent nag is set, can show nag"), !0) : r.storage.get(f.key) != f.value.toString() ? (r.debug("Stored value is not set, can show nag", r.storage.get(f.key)), !0) : (r.debug("Stored value is set, cannot show nag", r.storage.get(f.key)), !1)
						}
					},
					get: {
						storageOptions: function() {
							var e = {};
							return f.expires && (e.expires = f.expires), f.domain && (e.domain = f.domain), f.path && (e.path = f.path), e
						}
					},
					clear: function() {
						r.storage.remove(f.key)
					},
					storage: {
						set: function(n, o) {
							var a = r.get.storageOptions();
							if ("localstorage" == f.storageMethod && t.localStorage !== i) t.localStorage.setItem(n, o), r.debug("Value stored using local storage", n, o);
							else {
								if (e.cookie === i) return void r.error(m.noCookieStorage);
								e.cookie(n, o, a), r.debug("Value stored using cookie", n, o, a)
							}
						},
						get: function(n) {
							var o;
							return "localstorage" == f.storageMethod && t.localStorage !== i ? o = t.localStorage.getItem(n) : e.cookie !== i ? o = e.cookie(n) : r.error(m.noCookieStorage), ("undefined" == o || "null" == o || o === i || null === o) && (o = i), o
						},
						remove: function(n) {
							var o = r.get.storageOptions();
							"local" == f.storageMethod && t.store !== i ? t.localStorage.removeItem(n) : e.cookie !== i ? e.removeCookie(n, o) : r.error(m.noStorage)
						}
					},
					setting: function(t, n) {
						if (r.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, f, t);
						else {
							if (n === i) return f[t];
							f[t] = n
						}
					},
					internal: function(t, n) {
						if (e.isPlainObject(t)) e.extend(!0, r, t);
						else {
							if (n === i) return r[t];
							r[t] = n
						}
					},
					debug: function() {
						f.debug && (f.performance ? r.performance.log(arguments) : (r.debug = Function.prototype.bind.call(console.info, console, f.name + ":"), r.debug.apply(console, arguments)))
					},
					verbose: function() {
						f.verbose && f.debug && (f.performance ? r.performance.log(arguments) : (r.verbose = Function.prototype.bind.call(console.info, console, f.name + ":"), r.verbose.apply(console, arguments)))
					},
					error: function() {
						r.error = Function.prototype.bind.call(console.error, console, f.name + ":"), r.error.apply(console, arguments)
					},
					performance: {
						log: function(e) {
							var t, n, i;
							f.performance && (t = (new Date).getTime(), i = s || t, n = t - i, s = t, l.push({
								Name: e[0],
								Arguments: [].slice.call(e, 1) || "",
								Element: x,
								"Execution Time": n
							})), clearTimeout(r.performance.timer), r.performance.timer = setTimeout(r.performance.display, 500)
						},
						display: function() {
							var t = f.name + ":",
								n = 0;
							s = !1, clearTimeout(r.performance.timer), e.each(l, function(e, t) {
								n += t["Execution Time"]
							}), t += " " + n + "ms", a && (t += " '" + a + "'"), (console.group !== i || console.table !== i) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function(e, t) {
								console.log(t.Name + ": " + t["Execution Time"] + "ms")
							}), console.groupEnd()), l = []
						}
					},
					invoke: function(t, n, a) {
						var s, l, c, u = w;
						return n = n || d, a = x || a, "string" == typeof t && u !== i && (t = t.split(/[\. ]/), s = t.length - 1, e.each(t, function(n, o) {
							var a = n != s ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
							if (e.isPlainObject(u[a]) && n != s) u = u[a];
							else {
								if (u[a] !== i) return l = u[a], !1;
								if (!e.isPlainObject(u[o]) || n == s) return u[o] !== i ? (l = u[o], !1) : (r.error(m.method, t), !1);
								u = u[o]
							}
						})), e.isFunction(l) ? c = l.apply(a, n) : l !== i && (c = l), e.isArray(o) ? o.push(c) : o !== i ? o = [o, c] : c !== i && (o = c), l
					}
				}, u ? (w === i && r.initialize(), r.invoke(c)) : (w !== i && w.invoke("destroy"), r.initialize())
			}), o !== i ? o : this
		}, e.fn.nag.settings = {
			name: "Nag",
			debug: !1,
			verbose: !1,
			performance: !0,
			namespace: "Nag",
			persist: !1,
			displayTime: 0,
			animation: {
				show: "slide",
				hide: "slide"
			},
			context: !1,
			detachable: !1,
			expires: 30,
			domain: !1,
			path: "/",
			storageMethod: "cookie",
			key: "nag",
			value: "dismiss",
			error: {
				noCookieStorage: "$.cookie is not included. A storage solution is required.",
				noStorage: "Neither $.cookie or store is defined. A storage solution is required for storing state",
				method: "The method you called is not defined."
			},
			className: {
				bottom: "bottom",
				fixed: "fixed"
			},
			selector: {
				close: ".close.icon"
			},
			speed: 500,
			easing: "easeOutQuad",
			onHide: function() {}
		}
	}(jQuery, window, document),
	function(e, t, n, i) {
		"use strict";
		e.fn.popup = function(o) {
			var r, a = e(this),
				s = e(n),
				l = e(t),
				c = e("body"),
				u = a.selector || "",
				d = !0,
				f = (new Date).getTime(),
				p = [],
				m = arguments[0],
				g = "string" == typeof m,
				h = [].slice.call(arguments, 1);
			return a.each(function() {
				var n, a, v, b, y, x = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.popup.settings, o) : e.extend({}, e.fn.popup.settings),
					w = x.selector,
					C = x.className,
					k = x.error,
					T = x.metadata,
					S = x.namespace,
					E = "." + x.namespace,
					A = "module-" + S,
					D = e(this),
					j = e(x.context),
					R = x.target ? e(x.target) : D,
					F = 0,
					P = !1,
					O = !1,
					N = this,
					q = D.data(A);
				y = {
					initialize: function() {
						y.debug("Initializing", D), y.createID(), y.bind.events(), !y.exists() && x.preserve && y.create(), y.instantiate()
					},
					instantiate: function() {
						y.verbose("Storing instance", y), q = y, D.data(A, q)
					},
					refresh: function() {
						x.popup ? n = e(x.popup).eq(0) : x.inline && (n = R.next(w.popup).eq(0), x.popup = n), x.popup ? (n.addClass(C.loading), a = y.get.offsetParent(), n.removeClass(C.loading), x.movePopup && y.has.popup() && y.get.offsetParent(n)[0] !== a[0] && (y.debug("Moving popup to the same offset parent as activating element"), n.detach().appendTo(a))) : a = x.inline ? y.get.offsetParent(R) : y.has.popup() ? y.get.offsetParent(n) : c, a.is("html") && a[0] !== c[0] && (y.debug("Setting page as offset parent"), a = c)
					},
					reposition: function() {
						y.refresh(), y.set.position()
					},
					destroy: function() {
						y.debug("Destroying previous module"), n && !x.preserve && y.removePopup(), clearTimeout(y.hideTimer), clearTimeout(y.showTimer), l.off(v), D.off(E).removeData(A)
					},
					event: {
						start: function() {
							var t = e.isPlainObject(x.delay) ? x.delay.show : x.delay;
							clearTimeout(y.hideTimer), O || (y.showTimer = setTimeout(y.show, t))
						},
						end: function() {
							var t = e.isPlainObject(x.delay) ? x.delay.hide : x.delay;
							clearTimeout(y.showTimer), y.hideTimer = setTimeout(y.hide, t)
						},
						touchstart: function() {
							O = !0, y.show()
						},
						resize: function() {
							y.is.visible() && y.set.position()
						},
						hideGracefully: function(t) {
							t && 0 === e(t.target).closest(w.popup).length ? (y.debug("Click occurred outside popup hiding popup"), y.hide()) : y.debug("Click was inside popup, keeping popup open")
						}
					},
					create: function() {
						var t = y.get.html(),
							i = y.get.variation(),
							o = y.get.title(),
							r = y.get.content();
						t || r || o ? (y.debug("Creating pop-up html"), t || (t = x.templates.popup({
							title: o,
							content: r
						})), n = e("<div/>").addClass(C.popup).addClass(i).data(T.activator, D).html(t), i && n.addClass(i), x.inline ? (y.verbose("Inserting popup element inline", n), n.insertAfter(D)) : (y.verbose("Appending popup element to body", n), n.appendTo(j)), y.refresh(), x.hoverable && y.bind.popup(), x.onCreate.call(n, N)) : 0 !== R.next(w.popup).length ? (y.verbose("Pre-existing popup found"), x.inline = !0, x.popups = R.next(w.popup).data(T.activator, D), y.refresh(), x.hoverable && y.bind.popup()) : x.popup ? (e(x.popup).data(T.activator, D), y.verbose("Used popup specified in settings"), y.refresh(), x.hoverable && y.bind.popup()) : y.debug("No content specified skipping display", N)
					},
					createID: function() {
						b = (Math.random().toString(16) + "000000000").substr(2, 8), v = "." + b, y.verbose("Creating unique id for element", b)
					},
					toggle: function() {
						y.debug("Toggling pop-up"), y.is.hidden() ? (y.debug("Popup is hidden, showing pop-up"), y.unbind.close(), y.show()) : (y.debug("Popup is visible, hiding pop-up"), y.hide())
					},
					show: function(e) {
						if (e = e || function() {}, y.debug("Showing pop-up", x.transition), y.is.hidden() && (!y.is.active() || !y.is.dropdown())) {
							if (y.exists() || y.create(), x.onShow.call(n, N) === !1) return void y.debug("onShow callback returned false, cancelling popup animation");
							x.preserve || x.popup || y.refresh(), n && y.set.position() && (y.save.conditions(), x.exclusive && y.hideAll(), y.animate.show(e))
						}
					},
					hide: function(e) {
						if (e = e || function() {}, y.is.visible() || y.is.animating()) {
							if (x.onHide.call(n, N) === !1) return void y.debug("onHide callback returned false, cancelling popup animation");
							y.remove.visible(), y.unbind.close(), y.restore.conditions(), y.animate.hide(e)
						}
					},
					hideAll: function() {
						e(w.popup).filter("." + C.visible).each(function() {
							e(this).data(T.activator).popup("hide")
						})
					},
					exists: function() {
						return n ? x.inline || x.popup ? y.has.popup() : n.closest(j).length >= 1 ? !0 : !1 : !1
					},
					removePopup: function() {
						y.debug("Removing popup", n), y.has.popup() && !x.popup && (n.remove(), n = i), x.onRemove.call(n, N)
					},
					save: {
						conditions: function() {
							y.cache = {
								title: D.attr("title")
							}, y.cache.title && D.removeAttr("title"), y.verbose("Saving original attributes", y.cache.title)
						}
					},
					restore: {
						conditions: function() {
							return y.cache && y.cache.title && (D.attr("title", y.cache.title), y.verbose("Restoring original attributes", y.cache.title)), !0
						}
					},
					animate: {
						show: function(t) {
							t = e.isFunction(t) ? t : function() {}, x.transition && e.fn.transition !== i && D.transition("is supported") ? (y.set.visible(), n.transition({
								animation: x.transition + " in",
								queue: !1,
								debug: x.debug,
								verbose: x.verbose,
								duration: x.duration,
								onComplete: function() {
									y.bind.close(), t.call(n, N), x.onVisible.call(n, N)
								}
							})) : y.error(k.noTransition)
						},
						hide: function(t) {
							return t = e.isFunction(t) ? t : function() {}, y.debug("Hiding pop-up"), x.onHide.call(n, N) === !1 ? void y.debug("onHide callback returned false, cancelling popup animation") : void(x.transition && e.fn.transition !== i && D.transition("is supported") ? n.transition({
								animation: x.transition + " out",
								queue: !1,
								duration: x.duration,
								debug: x.debug,
								verbose: x.verbose,
								onComplete: function() {
									y.reset(), t.call(n, N), x.onHidden.call(n, N)
								}
							}) : y.error(k.noTransition))
						}
					},
					get: {
						html: function() {
							return D.removeData(T.html), D.data(T.html) || x.html
						},
						title: function() {
							return D.removeData(T.title), D.data(T.title) || x.title
						},
						content: function() {
							return D.removeData(T.content), D.data(T.content) || D.attr("title") || x.content
						},
						variation: function() {
							return D.removeData(T.variation), D.data(T.variation) || x.variation
						},
						popupOffset: function() {
							return n.offset()
						},
						calculations: function() {
							var e, i = R[0],
								o = x.inline || x.popup ? R.position() : R.offset(),
								r = {};
							return r = {
								target: {
									element: R[0],
									width: R.outerWidth(),
									height: R.outerHeight(),
									top: o.top,
									left: o.left,
									margin: {}
								},
								popup: {
									width: n.outerWidth(),
									height: n.outerHeight()
								},
								parent: {
									width: a.outerWidth(),
									height: a.outerHeight()
								},
								screen: {
									scroll: {
										top: l.scrollTop(),
										left: l.scrollLeft()
									},
									width: l.width(),
									height: l.height()
								}
							}, x.setFluidWidth && y.is.fluid() && (r.container = {
								width: n.parent().outerWidth()
							}, r.popup.width = r.container.width), r.target.margin.top = x.inline ? parseInt(t.getComputedStyle(i).getPropertyValue("margin-top"), 10) : 0, r.target.margin.left = x.inline ? y.is.rtl() ? parseInt(t.getComputedStyle(i).getPropertyValue("margin-right"), 10) : parseInt(t.getComputedStyle(i).getPropertyValue("margin-left"), 10) : 0, e = r.screen, r.boundary = {
								top: e.scroll.top,
								bottom: e.scroll.top + e.height,
								left: e.scroll.left,
								right: e.scroll.left + e.width
							}, r
						},
						id: function() {
							return b
						},
						startEvent: function() {
							return "hover" == x.on ? "mouseenter" : "focus" == x.on ? "focus" : !1
						},
						scrollEvent: function() {
							return "scroll"
						},
						endEvent: function() {
							return "hover" == x.on ? "mouseleave" : "focus" == x.on ? "blur" : !1
						},
						distanceFromBoundary: function(e, t) {
							var n, i, o = {};
							return e = e || y.get.offset(), t = t || y.get.calculations(), n = t.popup, i = t.boundary, e && (o = {
								top: e.top - i.top,
								left: e.left - i.left,
								right: i.right - (e.left + n.width),
								bottom: i.bottom - (e.top + n.height)
							}, y.verbose("Distance from boundaries determined", e, o)), o
						},
						offsetParent: function(t) {
							var n = t !== i ? t[0] : D[0],
								o = n.parentNode,
								r = e(o);
							if (o)
								for (var a = "none" === r.css("transform"), s = "static" === r.css("position"), l = r.is("html"); o && !l && s && a;) o = o.parentNode, r = e(o), a = "none" === r.css("transform"), s = "static" === r.css("position"), l = r.is("html");
							return r && r.length > 0 ? r : e()
						},
						positions: function() {
							return {
								"top left": !1,
								"top center": !1,
								"top right": !1,
								"bottom left": !1,
								"bottom center": !1,
								"bottom right": !1,
								"left center": !1,
								"right center": !1
							}
						},
						nextPosition: function(e) {
							var t = e.split(" "),
								n = t[0],
								i = t[1],
								o = {
									top: "bottom",
									bottom: "top",
									left: "right",
									right: "left"
								},
								r = {
									left: "center",
									center: "right",
									right: "left"
								},
								a = {
									"top left": "top center",
									"top center": "top right",
									"top right": "right center",
									"right center": "bottom right",
									"bottom right": "bottom center",
									"bottom center": "bottom left",
									"bottom left": "left center",
									"left center": "top left"
								},
								s = "top" == n || "bottom" == n,
								l = !1,
								c = !1,
								u = !1;
							return P || (y.verbose("All available positions available"), P = y.get.positions()), y.debug("Recording last position tried", e), P[e] = !0, "opposite" === x.prefer && (u = [o[n], i], u = u.join(" "), l = P[u] === !0, y.debug("Trying opposite strategy", u)), "adjacent" === x.prefer && s && (u = [n, r[i]], u = u.join(" "), c = P[u] === !0, y.debug("Trying adjacent strategy", u)), (c || l) && (y.debug("Using backup position", u), u = a[e]), u
						}
					},
					set: {
						position: function(e, t) {
							if (0 === R.length || 0 === n.length) return void y.error(k.notFound);
							var o, r, a, s, l, c, u, d;
							if (t = t || y.get.calculations(), e = e || D.data(T.position) || x.position, o = D.data(T.offset) || x.offset, r = x.distanceAway, a = t.target, s = t.popup, l = t.parent, 0 === a.width && 0 === a.height) return y.debug("Popup target is hidden, no action taken"), !1;
							switch (x.inline && (y.debug("Adding margin to calculation", a.margin), "left center" == e || "right center" == e ? (o += a.margin.top, r += -a.margin.left) : "top left" == e || "top center" == e || "top right" == e ? (o += a.margin.left, r -= a.margin.top) : (o += a.margin.left, r += a.margin.top)), y.debug("Determining popup position from calculations", e, t), y.is.rtl() && (e = e.replace(/left|right/g, function(e) {
								return "left" == e ? "right" : "left"
							}), y.debug("RTL: Popup position updated", e)), F == x.maxSearchDepth && "string" == typeof x.lastResort && (e = x.lastResort), e) {
								case "top left":
									c = {
										top: "auto",
										bottom: l.height - a.top + r,
										left: a.left + o,
										right: "auto"
									};
									break;
								case "top center":
									c = {
										bottom: l.height - a.top + r,
										left: a.left + a.width / 2 - s.width / 2 + o,
										top: "auto",
										right: "auto"
									};
									break;
								case "top right":
									c = {
										bottom: l.height - a.top + r,
										right: l.width - a.left - a.width - o,
										top: "auto",
										left: "auto"
									};
									break;
								case "left center":
									c = {
										top: a.top + a.height / 2 - s.height / 2 + o,
										right: l.width - a.left + r,
										left: "auto",
										bottom: "auto"
									};
									break;
								case "right center":
									c = {
										top: a.top + a.height / 2 - s.height / 2 + o,
										left: a.left + a.width + r,
										bottom: "auto",
										right: "auto"
									};
									break;
								case "bottom left":
									c = {
										top: a.top + a.height + r,
										left: a.left + o,
										bottom: "auto",
										right: "auto"
									};
									break;
								case "bottom center":
									c = {
										top: a.top + a.height + r,
										left: a.left + a.width / 2 - s.width / 2 + o,
										bottom: "auto",
										right: "auto"
									};
									break;
								case "bottom right":
									c = {
										top: a.top + a.height + r,
										right: l.width - a.left - a.width - o,
										left: "auto",
										bottom: "auto"
									}
							}
							if (c === i && y.error(k.invalidPosition, e), y.debug("Calculated popup positioning values", c), n.css(c).removeClass(C.position).addClass(e).addClass(C.loading), u = y.get.popupOffset(), d = y.get.distanceFromBoundary(u, t), y.is.offstage(d, e)) {
								if (y.debug("Position is outside viewport", e), F < x.maxSearchDepth) return F++, e = y.get.nextPosition(e), y.debug("Trying new position", e), n ? y.set.position(e, t) : !1;
								if (!x.lastResort) return y.debug("Popup could not find a position to display", n), y.error(k.cannotPlace, N), y.remove.attempts(), y.remove.loading(), y.reset(), !1;
								y.debug("No position found, showing with last position")
							}
							return y.debug("Position is on stage", e), y.remove.attempts(), y.remove.loading(), x.setFluidWidth && y.is.fluid() && y.set.fluidWidth(t), !0
						},
						fluidWidth: function(e) {
							e = e || y.get.calculations(), y.debug("Automatically setting element width to parent width", e.parent.width), n.css("width", e.container.width)
						},
						visible: function() {
							D.addClass(C.visible)
						}
					},
					remove: {
						loading: function() {
							n.removeClass(C.loading)
						},
						visible: function() {
							D.removeClass(C.visible)
						},
						attempts: function() {
							y.verbose("Resetting all searched positions"), F = 0, P = !1
						}
					},
					bind: {
						events: function() {
							y.debug("Binding popup events to module"), "click" == x.on && D.on("click" + E, y.toggle), "hover" == x.on && d && D.on("touchstart" + E, y.event.touchstart), y.get.startEvent() && D.on(y.get.startEvent() + E, y.event.start).on(y.get.endEvent() + E, y.event.end), x.target && y.debug("Target set to element", R), l.on("resize" + v, y.event.resize)
						},
						popup: function() {
							y.verbose("Allowing hover events on popup to prevent closing"), n && y.has.popup() && n.on("mouseenter" + E, y.event.start).on("mouseleave" + E, y.event.end)
						},
						close: function() {
							(x.hideOnScroll === !0 || "auto" == x.hideOnScroll && "click" != x.on) && (s.one(y.get.scrollEvent() + v, y.event.hideGracefully), j.one(y.get.scrollEvent() + v, y.event.hideGracefully)), "hover" == x.on && O && (y.verbose("Binding popup close event to document"), s.on("touchstart" + v, function(e) {
								y.verbose("Touched away from popup"), y.event.hideGracefully.call(N, e)
							})), "click" == x.on && x.closable && (y.verbose("Binding popup close event to document"), s.on("click" + v, function(e) {
								y.verbose("Clicked away from popup"), y.event.hideGracefully.call(N, e)
							}))
						}
					},
					unbind: {
						close: function() {
							(x.hideOnScroll === !0 || "auto" == x.hideOnScroll && "click" != x.on) && (s.off("scroll" + v, y.hide), j.off("scroll" + v, y.hide)), "hover" == x.on && O && (s.off("touchstart" + v), O = !1), "click" == x.on && x.closable && (y.verbose("Removing close event from document"), s.off("click" + v))
						}
					},
					has: {
						popup: function() {
							return n && n.length > 0
						}
					},
					is: {
						offstage: function(t, n) {
							var i = [];
							return e.each(t, function(e, t) {
								t < -x.jitter && (y.debug("Position exceeds allowable distance from edge", e, t, n), i.push(e))
							}), i.length > 0 ? !0 : !1
						},
						active: function() {
							return D.hasClass(C.active)
						},
						animating: function() {
							return n && n.hasClass(C.animating)
						},
						fluid: function() {
							return n && n.hasClass(C.fluid)
						},
						visible: function() {
							return n && n.hasClass(C.visible)
						},
						dropdown: function() {
							return D.hasClass(C.dropdown)
						},
						hidden: function() {
							return !y.is.visible()
						},
						rtl: function() {
							return "rtl" == D.css("direction")
						}
					},
					reset: function() {
						y.remove.visible(), x.preserve ? e.fn.transition !== i && n.transition("remove transition") : y.removePopup()
					},
					setting: function(t, n) {
						if (e.isPlainObject(t)) e.extend(!0, x, t);
						else {
							if (n === i) return x[t];
							x[t] = n
						}
					},
					internal: function(t, n) {
						if (e.isPlainObject(t)) e.extend(!0, y, t);
						else {
							if (n === i) return y[t];
							y[t] = n
						}
					},
					debug: function() {
						x.debug && (x.performance ? y.performance.log(arguments) : (y.debug = Function.prototype.bind.call(console.info, console, x.name + ":"), y.debug.apply(console, arguments)))
					},
					verbose: function() {
						x.verbose && x.debug && (x.performance ? y.performance.log(arguments) : (y.verbose = Function.prototype.bind.call(console.info, console, x.name + ":"), y.verbose.apply(console, arguments)))
					},
					error: function() {
						y.error = Function.prototype.bind.call(console.error, console, x.name + ":"), y.error.apply(console, arguments)
					},
					performance: {
						log: function(e) {
							var t, n, i;
							x.performance && (t = (new Date).getTime(), i = f || t, n = t - i, f = t, p.push({
								Name: e[0],
								Arguments: [].slice.call(e, 1) || "",
								Element: N,
								"Execution Time": n
							})), clearTimeout(y.performance.timer), y.performance.timer = setTimeout(y.performance.display, 500)
						},
						display: function() {
							var t = x.name + ":",
								n = 0;
							f = !1, clearTimeout(y.performance.timer), e.each(p, function(e, t) {
								n += t["Execution Time"]
							}), t += " " + n + "ms", u && (t += " '" + u + "'"), (console.group !== i || console.table !== i) && p.length > 0 && (console.groupCollapsed(t), console.table ? console.table(p) : e.each(p, function(e, t) {
								console.log(t.Name + ": " + t["Execution Time"] + "ms")
							}), console.groupEnd()), p = []
						}
					},
					invoke: function(t, n, o) {
						var a, s, l, c = q;
						return n = n || h, o = N || o, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), a = t.length - 1, e.each(t, function(n, o) {
							var r = n != a ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
							if (e.isPlainObject(c[r]) && n != a) c = c[r];
							else {
								if (c[r] !== i) return s = c[r], !1;
								if (!e.isPlainObject(c[o]) || n == a) return c[o] !== i ? (s = c[o], !1) : !1;
								c = c[o]
							}
						})), e.isFunction(s) ? l = s.apply(o, n) : s !== i && (l = s), e.isArray(r) ? r.push(l) : r !== i ? r = [r, l] : l !== i && (r = l), s
					}
				}, g ? (q === i && y.initialize(), y.invoke(m)) : (q !== i && q.invoke("destroy"), y.initialize())
			}), r !== i ? r : this
		}, e.fn.popup.settings = {
			name: "Popup",
			debug: !1,
			verbose: !1,
			performance: !0,
			namespace: "popup",
			onCreate: function() {},
			onRemove: function() {},
			onShow: function() {},
			onVisible: function() {},
			onHide: function() {},
			onHidden: function() {},
			on: "hover",
			addTouchEvents: !0,
			position: "top left",
			variation: "",
			movePopup: !0,
			target: !1,
			popup: !1,
			inline: !1,
			preserve: !1,
			hoverable: !1,
			content: !1,
			html: !1,
			title: !1,
			closable: !0,
			hideOnScroll: "auto",
			exclusive: !1,
			context: "body",
			prefer: "opposite",
			lastResort: !1,
			delay: {
				show: 50,
				hide: 70
			},
			setFluidWidth: !0,
			duration: 200,
			transition: "scale",
			distanceAway: 0,
			jitter: 2,
			offset: 0,
			maxSearchDepth: 15,
			error: {
				invalidPosition: "The position you specified is not a valid position",
				cannotPlace: "Popup does not fit within the boundaries of the viewport",
				method: "The method you called is not defined.",
				noTransition: "This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>",
				notFound: "The target or popup you specified does not exist on the page"
			},
			metadata: {
				activator: "activator",
				content: "content",
				html: "html",
				offset: "offset",
				position: "position",
				title: "title",
				variation: "variation"
			},
			className: {
				active: "active",
				animating: "animating",
				dropdown: "dropdown",
				fluid: "fluid",
				loading: "loading",
				popup: "ui popup",
				position: "top left center bottom right",
				visible: "visible"
			},
			selector: {
				popup: ".ui.popup"
			},
			templates: {
				escape: function(e) {
					var t = /[&<>"'`]/g,
						n = /[&<>"'`]/,
						i = {
							"&": "&amp;",
							"<": "&lt;",
							">": "&gt;",
							'"': "&quot;",
							"'": "&#x27;",
							"`": "&#x60;"
						},
						o = function(e) {
							return i[e]
						};
					return n.test(e) ? e.replace(t, o) : e
				},
				popup: function(t) {
					var n = "",
						o = e.fn.popup.settings.templates.escape;
					return typeof t !== i && (typeof t.title !== i && t.title && (t.title = o(t.title), n += '<div class="header">' + t.title + "</div>"), typeof t.content !== i && t.content && (t.content = o(t.content), n += '<div class="content">' + t.content + "</div>")), n
				}
			}
		}
	}(jQuery, window, document),
	function(e, t, n, i) {
		"use strict";
		e.fn.progress = function(t) {
			var o, r = e(this),
				a = r.selector || "",
				s = (new Date).getTime(),
				l = [],
				c = arguments[0],
				u = "string" == typeof c,
				d = [].slice.call(arguments, 1);
			return r.each(function() {
				var r, f, p = e.isPlainObject(t) ? e.extend(!0, {}, e.fn.progress.settings, t) : e.extend({}, e.fn.progress.settings),
					m = p.className,
					g = p.metadata,
					h = p.namespace,
					v = p.selector,
					b = p.error,
					y = "." + h,
					x = "module-" + h,
					w = e(this),
					C = e(this).find(v.bar),
					k = e(this).find(v.progress),
					T = e(this).find(v.label),
					S = this,
					E = w.data(x),
					A = !1;
				f = {
					initialize: function() {
						f.debug("Initializing progress bar", p), f.set.duration(), f.set.transitionEvent(), f.read.metadata(), f.read.settings(), f.instantiate()
					},
					instantiate: function() {
						f.verbose("Storing instance of progress", f), E = f, w.data(x, f)
					},
					destroy: function() {
						f.verbose("Destroying previous progress for", w), clearInterval(E.interval), f.remove.state(), w.removeData(x), E = i
					},
					reset: function() {
						f.set.percent(0)
					},
					complete: function() {
						(f.percent === i || f.percent < 100) && f.set.percent(100)
					},
					read: {
						metadata: function() {
							var e = {
								percent: w.data(g.percent),
								total: w.data(g.total),
								value: w.data(g.value)
							};
							e.percent && (f.debug("Current percent value set from metadata", e.percent), f.set.percent(e.percent)), e.total && (f.debug("Total value set from metadata", e.total), f.set.total(e.total)), e.value && (f.debug("Current value set from metadata", e.value), f.set.value(e.value), f.set.progress(e.value))
						},
						settings: function() {
							p.total !== !1 && (f.debug("Current total set in settings", p.total), f.set.total(p.total)), p.value !== !1 && (f.debug("Current value set in settings", p.value), f.set.value(p.value), f.set.progress(f.value)), p.percent !== !1 && (f.debug("Current percent set in settings", p.percent), f.set.percent(p.percent))
						}
					},
					increment: function(e) {
						var t, n, i;
						f.has.total() ? (n = f.get.value(), e = e || 1, i = n + e, t = f.get.total(), f.debug("Incrementing value", n, i, t), i > t && (f.debug("Value cannot increment above total", t), i = t)) : (n = f.get.percent(), e = e || f.get.randomValue(), i = n + e, t = 100, f.debug("Incrementing percentage by", n, i), i > t && (f.debug("Value cannot increment above 100 percent"), i = t)), f.set.progress(i)
					},
					decrement: function(e) {
						var t, n, i = f.get.total();
						i ? (t = f.get.value(), e = e || 1, n = t - e, f.debug("Decrementing value by", e, t)) : (t = f.get.percent(), e = e || f.get.randomValue(), n = t - e, f.debug("Decrementing percentage by", e, t)), 0 > n && (f.debug("Value cannot decrement below 0"), n = 0), f.set.progress(n)
					},
					has: {
						total: function() {
							return f.get.total() !== !1
						}
					},
					get: {
						text: function(e) {
							var t = f.value || 0,
								n = f.total || 0,
								i = A ? f.get.displayPercent() : f.percent || 0,
								o = f.total > 0 ? n - t : 100 - i;
							return e = e || "", e = e.replace("{value}", t).replace("{total}", n).replace("{left}", o).replace("{percent}", i), f.debug("Adding variables to progress bar text", e), e
						},
						randomValue: function() {
							return f.debug("Generating random increment percentage"), Math.floor(Math.random() * p.random.max + p.random.min)
						},
						numericValue: function(e) {
							return "string" == typeof e ? "" !== e.replace(/[^\d.]/g, "") ? +e.replace(/[^\d.]/g, "") : !1 : e
						},
						transitionEnd: function() {
							var e, t = n.createElement("element"),
								o = {
									transition: "transitionend",
									OTransition: "oTransitionEnd",
									MozTransition: "transitionend",
									WebkitTransition: "webkitTransitionEnd"
								};
							for (e in o)
								if (t.style[e] !== i) return o[e]
						},
						displayPercent: function() {
							var e = C.width(),
								t = w.width(),
								n = parseInt(C.css("min-width"), 10),
								i = e > n ? e / t * 100 : f.percent;
							return p.precision > 0 ? Math.round(10 * i * p.precision) / (10 * p.precision) : Math.round(i)
						},
						percent: function() {
							return f.percent || 0
						},
						value: function() {
							return f.value || 0
						},
						total: function() {
							return f.total || !1
						}
					},
					is: {
						success: function() {
							return w.hasClass(m.success)
						},
						warning: function() {
							return w.hasClass(m.warning)
						},
						error: function() {
							return w.hasClass(m.error)
						},
						active: function() {
							return w.hasClass(m.active)
						},
						visible: function() {
							return w.is(":visible")
						}
					},
					remove: {
						state: function() {
							f.verbose("Removing stored state"), delete f.total, delete f.percent, delete f.value
						},
						active: function() {
							f.verbose("Removing active state"), w.removeClass(m.active)
						},
						success: function() {
							f.verbose("Removing success state"), w.removeClass(m.success)
						},
						warning: function() {
							f.verbose("Removing warning state"), w.removeClass(m.warning)
						},
						error: function() {
							f.verbose("Removing error state"), w.removeClass(m.error)
						}
					},
					set: {
						barWidth: function(e) {
							e > 100 ? f.error(b.tooHigh, e) : 0 > e ? f.error(b.tooLow, e) : (C.css("width", e + "%"), w.attr("data-percent", parseInt(e, 10)))
						},
						duration: function(e) {
							e = e || p.duration, e = "number" == typeof e ? e + "ms" : e, f.verbose("Setting progress bar transition duration", e), C.css({
								"transition-duration": e
							})
						},
						percent: function(e) {
							e = "string" == typeof e ? +e.replace("%", "") : e, e = p.precision > 0 ? Math.round(10 * e * p.precision) / (10 * p.precision) : Math.round(e), f.percent = e, f.has.total() || (f.value = p.precision > 0 ? Math.round(e / 100 * f.total * 10 * p.precision) / (10 * p.precision) : Math.round(e / 100 * f.total * 10) / 10, p.limitValues && (f.value = f.value > 100 ? 100 : f.value < 0 ? 0 : f.value)), f.set.barWidth(e), f.set.labelInterval(), f.set.labels(), p.onChange.call(S, e, f.value, f.total)
						},
						labelInterval: function() {
							var e = function() {
								f.verbose("Bar finished animating, removing continuous label updates"), clearInterval(f.interval), A = !1, f.set.labels()
							};
							clearInterval(f.interval), C.one(r + y, e), f.timer = setTimeout(e, p.duration + 100), A = !0, f.interval = setInterval(f.set.labels, p.framerate)
						},
						labels: function() {
							f.verbose("Setting both bar progress and outer label text"), f.set.barLabel(), f.set.state()
						},
						label: function(e) {
							e = e || "", e && (e = f.get.text(e), f.debug("Setting label to text", e), T.text(e))
						},
						state: function(e) {
							e = e !== i ? e : f.percent, 100 === e ? !p.autoSuccess || f.is.warning() || f.is.error() ? (f.verbose("Reached 100% removing active state"), f.remove.active()) : (f.set.success(), f.debug("Automatically triggering success at 100%")) : e > 0 ? (f.verbose("Adjusting active progress bar label", e), f.set.active()) : (f.remove.active(), f.set.label(p.text.active))
						},
						barLabel: function(e) {
							e !== i ? k.text(f.get.text(e)) : "ratio" == p.label && f.total ? (f.debug("Adding ratio to bar label"), k.text(f.get.text(p.text.ratio))) : "percent" == p.label && (f.debug("Adding percentage to bar label"), k.text(f.get.text(p.text.percent)))
						},
						active: function(e) {
							e = e || p.text.active, f.debug("Setting active state"), p.showActivity && !f.is.active() && w.addClass(m.active), f.remove.warning(), f.remove.error(), f.remove.success(), e && f.set.label(e), p.onActive.call(S, f.value, f.total)
						},
						success: function(e) {
							e = e || p.text.success, f.debug("Setting success state"), w.addClass(m.success), f.remove.active(), f.remove.warning(), f.remove.error(), f.complete(), e && f.set.label(e), p.onSuccess.call(S, f.total)
						},
						warning: function(e) {
							e = e || p.text.warning, f.debug("Setting warning state"), w.addClass(m.warning), f.remove.active(), f.remove.success(), f.remove.error(), f.complete(), e && f.set.label(e), p.onWarning.call(S, f.value, f.total)
						},
						error: function(e) {
							e = e || p.text.error, f.debug("Setting error state"), w.addClass(m.error), f.remove.active(), f.remove.success(), f.remove.warning(), f.complete(), e && f.set.label(e), p.onError.call(S, f.value, f.total)
						},
						transitionEvent: function() {
							r = f.get.transitionEnd()
						},
						total: function(e) {
							f.total = e
						},
						value: function(e) {
							f.value = e
						},
						progress: function(e) {
							var t, n = f.get.numericValue(e);
							n === !1 && f.error(b.nonNumeric, e), f.has.total() ? (f.set.value(n), t = n / f.total * 100, f.debug("Calculating percent complete from total", t), f.set.percent(t)) : (t = n, f.debug("Setting value to exact percentage value", t), f.set.percent(t))
						}
					},
					setting: function(t, n) {
						if (f.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, p, t);
						else {
							if (n === i) return p[t];
							p[t] = n
						}
					},
					internal: function(t, n) {
						if (e.isPlainObject(t)) e.extend(!0, f, t);
						else {
							if (n === i) return f[t];
							f[t] = n
						}
					},
					debug: function() {
						p.debug && (p.performance ? f.performance.log(arguments) : (f.debug = Function.prototype.bind.call(console.info, console, p.name + ":"), f.debug.apply(console, arguments)))
					},
					verbose: function() {
						p.verbose && p.debug && (p.performance ? f.performance.log(arguments) : (f.verbose = Function.prototype.bind.call(console.info, console, p.name + ":"), f.verbose.apply(console, arguments)))
					},
					error: function() {
						f.error = Function.prototype.bind.call(console.error, console, p.name + ":"), f.error.apply(console, arguments)
					},
					performance: {
						log: function(e) {
							var t, n, i;
							p.performance && (t = (new Date).getTime(), i = s || t, n = t - i, s = t, l.push({
								Name: e[0],
								Arguments: [].slice.call(e, 1) || "",
								Element: S,
								"Execution Time": n
							})), clearTimeout(f.performance.timer), f.performance.timer = setTimeout(f.performance.display, 500)
						},
						display: function() {
							var t = p.name + ":",
								n = 0;
							s = !1, clearTimeout(f.performance.timer), e.each(l, function(e, t) {
								n += t["Execution Time"]
							}), t += " " + n + "ms", a && (t += " '" + a + "'"), (console.group !== i || console.table !== i) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function(e, t) {
								console.log(t.Name + ": " + t["Execution Time"] + "ms")
							}), console.groupEnd()), l = []
						}
					},
					invoke: function(t, n, r) {
						var a, s, l, c = E;
						return n = n || d, r = S || r, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), a = t.length - 1, e.each(t, function(n, o) {
							var r = n != a ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
							if (e.isPlainObject(c[r]) && n != a) c = c[r];
							else {
								if (c[r] !== i) return s = c[r], !1;
								if (!e.isPlainObject(c[o]) || n == a) return c[o] !== i ? (s = c[o], !1) : (f.error(b.method, t), !1);
								c = c[o]
							}
						})), e.isFunction(s) ? l = s.apply(r, n) : s !== i && (l = s), e.isArray(o) ? o.push(l) : o !== i ? o = [o, l] : l !== i && (o = l), s
					}
				}, u ? (E === i && f.initialize(), f.invoke(c)) : (E !== i && E.invoke("destroy"), f.initialize())
			}), o !== i ? o : this
		}, e.fn.progress.settings = {
			name: "Progress",
			namespace: "progress",
			debug: !1,
			verbose: !1,
			performance: !0,
			random: {
				min: 2,
				max: 5
			},
			duration: 300,
			autoSuccess: !0,
			showActivity: !0,
			limitValues: !0,
			label: "percent",
			precision: 0,
			framerate: 1e3 / 30,
			percent: !1,
			total: !1,
			value: !1,
			onChange: function() {},
			onSuccess: function() {},
			onActive: function() {},
			onError: function() {},
			onWarning: function() {},
			error: {
				method: "The method you called is not defined.",
				nonNumeric: "Progress value is non numeric",
				tooHigh: "Value specified is above 100%",
				tooLow: "Value specified is below 0%"
			},
			regExp: {
				variable: /\{\$*[A-z0-9]+\}/g
			},
			metadata: {
				percent: "percent",
				total: "total",
				value: "value"
			},
			selector: {
				bar: "> .bar",
				label: "> .label",
				progress: ".bar > .progress"
			},
			text: {
				active: !1,
				error: !1,
				success: !1,
				warning: !1,
				percent: "{percent}%",
				ratio: "{value} of {total}"
			},
			className: {
				active: "active",
				error: "error",
				success: "success",
				warning: "warning"
			}
		}
	}(jQuery, window, document),
	function(e, t, n, i) {
		"use strict";
		e.fn.rating = function(t) {
			var n, o = e(this),
				r = o.selector || "",
				a = (new Date).getTime(),
				s = [],
				l = arguments[0],
				c = "string" == typeof l,
				u = [].slice.call(arguments, 1);
			return o.each(function() {
				var d, f = e.isPlainObject(t) ? e.extend(!0, {}, e.fn.rating.settings, t) : e.extend({}, e.fn.rating.settings),
					p = f.namespace,
					m = f.className,
					g = f.metadata,
					h = f.selector,
					v = (f.error, "." + p),
					b = "module-" + p,
					y = this,
					x = e(this).data(b),
					w = e(this),
					C = w.find(h.icon);
				d = {
					initialize: function() {
						d.verbose("Initializing rating module", f), 0 === C.length && d.setup.layout(), f.interactive ? d.enable() : d.disable(), d.set.rating(d.get.initialRating()), d.instantiate()
					},
					instantiate: function() {
						d.verbose("Instantiating module", f), x = d, w.data(b, d)
					},
					destroy: function() {
						d.verbose("Destroying previous instance", x), d.remove.events(), w.removeData(b)
					},
					refresh: function() {
						C = w.find(h.icon)
					},
					setup: {
						layout: function() {
							var t = d.get.maxRating(),
								n = e.fn.rating.settings.templates.icon(t);
							d.debug("Generating icon html dynamically"), w.html(n), d.refresh()
						}
					},
					event: {
						mouseenter: function() {
							var t = e(this);
							t.nextAll().removeClass(m.selected), w.addClass(m.selected), t.addClass(m.selected).prevAll().addClass(m.selected)
						},
						mouseleave: function() {
							w.removeClass(m.selected), C.removeClass(m.selected)
						},
						click: function() {
							var t = e(this),
								n = d.get.rating(),
								i = C.index(t) + 1,
								o = "auto" == f.clearable ? 1 === C.length : f.clearable;
							o && n == i ? d.clearRating() : d.set.rating(i)
						}
					},
					clearRating: function() {
						d.debug("Clearing current rating"), d.set.rating(0)
					},
					bind: {
						events: function() {
							d.verbose("Binding events"), w.on("mouseenter" + v, h.icon, d.event.mouseenter).on("mouseleave" + v, h.icon, d.event.mouseleave).on("click" + v, h.icon, d.event.click)
						}
					},
					remove: {
						events: function() {
							d.verbose("Removing events"), w.off(v)
						}
					},
					enable: function() {
						d.debug("Setting rating to interactive mode"), d.bind.events(), w.removeClass(m.disabled)
					},
					disable: function() {
						d.debug("Setting rating to read-only mode"), d.remove.events(), w.addClass(m.disabled)
					},
					get: {
						initialRating: function() {
							return w.data(g.rating) !== i ? (w.removeData(g.rating), w.data(g.rating)) : f.initialRating
						},
						maxRating: function() {
							return w.data(g.maxRating) !== i ? (w.removeData(g.maxRating), w.data(g.maxRating)) : f.maxRating
						},
						rating: function() {
							var e = C.filter("." + m.active).length;
							return d.verbose("Current rating retrieved", e), e
						}
					},
					set: {
						rating: function(e) {
							var t = e - 1 >= 0 ? e - 1 : 0,
								n = C.eq(t);
							w.removeClass(m.selected), C.removeClass(m.selected).removeClass(m.active), e > 0 && (d.verbose("Setting current rating to", e), n.prevAll().andSelf().addClass(m.active)), f.onRate.call(y, e)
						}
					},
					setting: function(t, n) {
						if (d.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, f, t);
						else {
							if (n === i) return f[t];
							f[t] = n
						}
					},
					internal: function(t, n) {
						if (e.isPlainObject(t)) e.extend(!0, d, t);
						else {
							if (n === i) return d[t];
							d[t] = n
						}
					},
					debug: function() {
						f.debug && (f.performance ? d.performance.log(arguments) : (d.debug = Function.prototype.bind.call(console.info, console, f.name + ":"), d.debug.apply(console, arguments)))
					},
					verbose: function() {
						f.verbose && f.debug && (f.performance ? d.performance.log(arguments) : (d.verbose = Function.prototype.bind.call(console.info, console, f.name + ":"), d.verbose.apply(console, arguments)))
					},
					error: function() {
						d.error = Function.prototype.bind.call(console.error, console, f.name + ":"), d.error.apply(console, arguments)
					},
					performance: {
						log: function(e) {
							var t, n, i;
							f.performance && (t = (new Date).getTime(), i = a || t, n = t - i, a = t, s.push({
								Name: e[0],
								Arguments: [].slice.call(e, 1) || "",
								Element: y,
								"Execution Time": n
							})), clearTimeout(d.performance.timer), d.performance.timer = setTimeout(d.performance.display, 500)
						},
						display: function() {
							var t = f.name + ":",
								n = 0;
							a = !1, clearTimeout(d.performance.timer), e.each(s, function(e, t) {
								n += t["Execution Time"]
							}), t += " " + n + "ms", r && (t += " '" + r + "'"), o.length > 1 && (t += " (" + o.length + ")"), (console.group !== i || console.table !== i) && s.length > 0 && (console.groupCollapsed(t), console.table ? console.table(s) : e.each(s, function(e, t) {
								console.log(t.Name + ": " + t["Execution Time"] + "ms")
							}), console.groupEnd()), s = []
						}
					},
					invoke: function(t, o, r) {
						var a, s, l, c = x;
						return o = o || u, r = y || r, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), a = t.length - 1, e.each(t, function(n, o) {
							var r = n != a ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
							if (e.isPlainObject(c[r]) && n != a) c = c[r];
							else {
								if (c[r] !== i) return s = c[r], !1;
								if (!e.isPlainObject(c[o]) || n == a) return c[o] !== i ? (s = c[o], !1) : !1;
								c = c[o]
							}
						})), e.isFunction(s) ? l = s.apply(r, o) : s !== i && (l = s), e.isArray(n) ? n.push(l) : n !== i ? n = [n, l] : l !== i && (n = l), s
					}
				}, c ? (x === i && d.initialize(), d.invoke(l)) : (x !== i && x.invoke("destroy"), d.initialize())
			}), n !== i ? n : this
		}, e.fn.rating.settings = {
			name: "Rating",
			namespace: "rating",
			debug: !1,
			verbose: !1,
			performance: !0,
			initialRating: 0,
			interactive: !0,
			maxRating: 4,
			clearable: "auto",
			onRate: function() {},
			error: {
				method: "The method you called is not defined",
				noMaximum: "No maximum rating specified. Cannot generate HTML automatically"
			},
			metadata: {
				rating: "rating",
				maxRating: "maxRating"
			},
			className: {
				active: "active",
				disabled: "disabled",
				selected: "selected",
				loading: "loading"
			},
			selector: {
				icon: ".icon"
			},
			templates: {
				icon: function(e) {
					for (var t = 1, n = ""; e >= t;) n += '<i class="icon"></i>', t++;
					return n
				}
			}
		}
	}(jQuery, window, document),
	function(e, t, n, i) {
		"use strict";
		e.fn.search = function(o) {
			var r, a = e(this),
				s = a.selector || "",
				l = (new Date).getTime(),
				c = [],
				u = arguments[0],
				d = "string" == typeof u,
				f = [].slice.call(arguments, 1);
			return e(this).each(function() {
				var p, m = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.search.settings, o) : e.extend({}, e.fn.search.settings),
					g = m.className,
					h = m.metadata,
					v = m.regExp,
					b = m.selector,
					y = m.error,
					x = m.namespace,
					w = "." + x,
					C = x + "-module",
					k = e(this),
					T = k.find(b.prompt),
					S = k.find(b.searchButton),
					E = k.find(b.results),
					A = (k.find(b.result), k.find(b.category), this),
					D = k.data(C);
				p = {
					initialize: function() {
						p.verbose("Initializing module"), p.determine.searchFields(), p.bind.events(), p.set.type(), p.create.results(), p.instantiate()
					},
					instantiate: function() {
						p.verbose("Storing instance of module", p), D = p, k.data(C, p)
					},
					destroy: function() {
						p.verbose("Destroying instance"), k.off(w).removeData(C)
					},
					bind: {
						events: function() {
							p.verbose("Binding events to search"), m.automatic && (k.on(p.get.inputEvent() + w, b.prompt, p.event.input), T.attr("autocomplete", "off")), k.on("focus" + w, b.prompt, p.event.focus).on("blur" + w, b.prompt, p.event.blur).on("keydown" + w, b.prompt, p.handleKeyboard).on("click" + w, b.searchButton, p.query).on("mousedown" + w, b.results, p.event.result.mousedown).on("mouseup" + w, b.results, p.event.result.mouseup).on("click" + w, b.result, p.event.result.click)
						}
					},
					determine: {
						searchFields: function() {
							o && o.searchFields !== i && (m.searchFields = o.searchFields)
						}
					},
					event: {
						input: function() {
							clearTimeout(p.timer), p.timer = setTimeout(p.query, m.searchDelay)
						},
						focus: function() {
							p.set.focus(), p.has.minimumCharacters() && (p.query(), p.showResults())
						},
						blur: function() {
							var e = n.activeElement === this;
							e || p.resultsClicked || (p.cancel.query(), p.remove.focus(), p.timer = setTimeout(p.hideResults, m.hideDelay))
						},
						result: {
							mousedown: function() {
								p.resultsClicked = !0
							},
							mouseup: function() {
								p.resultsClicked = !1
							},
							click: function(n) {
								p.debug("Search result selected");
								var i = e(this),
									o = i.find(b.title).eq(0),
									r = i.find("a[href]").eq(0),
									a = r.attr("href") || !1,
									s = r.attr("target") || !1,
									l = (o.html(), o.length > 0 ? o.text() : !1),
									c = p.get.results(),
									u = i.data(h.result) || p.get.result(l, c);
								return e.isFunction(m.onSelect) && m.onSelect.call(A, u, c) === !1 ? void p.debug("Custom onSelect callback cancelled default select action") : (p.hideResults(), l && p.set.value(l), void(a && (p.verbose("Opening search link found in result", r), "_blank" == s || n.ctrlKey ? t.open(a) : t.location.href = a)))
							}
						}
					},
					handleKeyboard: function(e) {
						var t, n = k.find(b.result),
							i = k.find(b.category),
							o = n.index(n.filter("." + g.active)),
							r = n.length,
							a = e.which,
							s = {
								backspace: 8,
								enter: 13,
								escape: 27,
								upArrow: 38,
								downArrow: 40
							};
						if (a == s.escape && (p.verbose("Escape key pressed, blurring search field"), T.trigger("blur")), p.is.visible())
							if (a == s.enter) {
								if (p.verbose("Enter key pressed, selecting active result"), n.filter("." + g.active).length > 0) return p.event.result.click.call(n.filter("." + g.active), e), e.preventDefault(), !1
							} else a == s.upArrow ? (p.verbose("Up key pressed, changing active result"), t = 0 > o - 1 ? o : o - 1, i.removeClass(g.active), n.removeClass(g.active).eq(t).addClass(g.active).closest(i).addClass(g.active), e.preventDefault()) : a == s.downArrow && (p.verbose("Down key pressed, changing active result"), t = o + 1 >= r ? o : o + 1, i.removeClass(g.active), n.removeClass(g.active).eq(t).addClass(g.active).closest(i).addClass(g.active), e.preventDefault());
						else a == s.enter && (p.verbose("Enter key pressed, executing query"), p.query(), p.set.buttonPressed(), T.one("keyup", p.remove.buttonFocus))
					},
					setup: {
						api: function() {
							var e = {
								debug: m.debug,
								on: !1,
								cache: "local",
								action: "search",
								onError: p.error
							};
							p.verbose("First request, initializing API"), k.api(e)
						}
					},
					can: {
						useAPI: function() {
							return e.fn.api !== i
						},
						transition: function() {
							return m.transition && e.fn.transition !== i && k.transition("is supported")
						}
					},
					is: {
						empty: function() {
							return "" === E.html()
						},
						visible: function() {
							return E.filter(":visible").length > 0
						},
						focused: function() {
							return T.filter(":focus").length > 0
						}
					},
					get: {
						inputEvent: function() {
							var e = T[0],
								t = e !== i && e.oninput !== i ? "input" : e !== i && e.onpropertychange !== i ? "propertychange" : "keyup";
							return t
						},
						value: function() {
							return T.val()
						},
						results: function() {
							var e = k.data(h.results);
							return e
						},
						result: function(t, n) {
							var o = ["title", "id"],
								r = !1;
							return t = t !== i ? t : p.get.value(), n = n !== i ? n : p.get.results(), "category" === m.type ? (p.debug("Finding result that matches", t), e.each(n, function(n, i) {
								return e.isArray(i.results) && (r = p.search.object(t, i.results, o)[0]) ? !1 : void 0
							})) : (p.debug("Finding result in results object", t), r = p.search.object(t, n, o)[0]), r || !1
						}
					},
					set: {
						focus: function() {
							k.addClass(g.focus)
						},
						loading: function() {
							k.addClass(g.loading)
						},
						value: function(e) {
							p.verbose("Setting search input value", e), T.val(e)
						},
						type: function(e) {
							e = e || m.type, "category" == m.type && k.addClass(m.type)
						},
						buttonPressed: function() {
							S.addClass(g.pressed)
						}
					},
					remove: {
						loading: function() {
							k.removeClass(g.loading)
						},
						focus: function() {
							k.removeClass(g.focus)
						},
						buttonPressed: function() {
							S.removeClass(g.pressed)
						}
					},
					query: function() {
						var t = p.get.value(),
							n = p.read.cache(t);
						p.has.minimumCharacters() ? n ? (p.debug("Reading result from cache", t), p.save.results(n.results), p.addResults(n.html), p.inject.id(n.results)) : (p.debug("Querying for", t), e.isPlainObject(m.source) || e.isArray(m.source) ? p.search.local(t) : p.can.useAPI() ? p.search.remote(t) : p.error(y.source), m.onSearchQuery.call(A, t)) : p.hideResults()
					},
					search: {
						local: function(e) {
							var t, n = p.search.object(e, m.content);
							p.set.loading(), p.save.results(n), p.debug("Returned local search results", n), t = p.generateResults({
								results: n
							}), p.remove.loading(), p.addResults(t), p.inject.id(n), p.write.cache(e, {
								html: t,
								results: n
							})
						},
						remote: function(t) {
							var n = {
								onSuccess: function(e) {
									p.parse.response.call(A, e, t)
								},
								onFailure: function() {
									p.displayMessage(y.serverError)
								},
								urlData: {
									query: t
								}
							};
							k.api("get request") || p.setup.api(), e.extend(!0, n, m.apiSettings), p.debug("Executing search", n), p.cancel.query(), k.api("setting", n).api("query")
						},
						object: function(t, n, o) {
							var r = [],
								a = [],
								s = t.toString().replace(v.escape, "\\$&"),
								l = new RegExp(v.beginsWith + s, "i"),
								c = function(t, n) {
									var i = -1 == e.inArray(n, r),
										o = -1 == e.inArray(n, a);
									i && o && t.push(n)
								};
							return n = n || m.source, o = o !== i ? o : m.searchFields, e.isArray(o) || (o = [o]), n === i || n === !1 ? (p.error(y.source), []) : (e.each(o, function(i, o) {
								e.each(n, function(e, n) {
									var i = "string" == typeof n[o];
									i && (-1 !== n[o].search(l) ? c(r, n) : m.searchFullText && p.fuzzySearch(t, n[o]) && c(a, n))
								})
							}), e.merge(r, a))
						}
					},
					fuzzySearch: function(e, t) {
						var n = t.length,
							i = e.length;
						if ("string" != typeof e) return !1;
						if (e = e.toLowerCase(), t = t.toLowerCase(), i > n) return !1;
						if (i === n) return e === t;
						e: for (var o = 0, r = 0; i > o; o++) {
							for (var a = e.charCodeAt(o); n > r;)
								if (t.charCodeAt(r++) === a) continue e;
							return !1
						}
						return !0
					},
					parse: {
						response: function(e, t) {
							var n = p.generateResults(e);
							p.verbose("Parsing server response", e), e !== i && t !== i && e.results !== i && (p.addResults(n), p.inject.id(e.results), p.write.cache(t, {
								html: n,
								results: e.results
							}), p.save.results(e.results))
						}
					},
					cancel: {
						query: function() {
							p.can.useAPI() && k.api("abort")
						}
					},
					has: {
						minimumCharacters: function() {
							var e = p.get.value(),
								t = e.length;
							return t >= m.minCharacters
						}
					},
					clear: {
						cache: function(e) {
							var t = k.data(h.cache);
							e ? e && t && t[e] && (p.debug("Removing value from cache", e), delete t[e], k.data(h.cache, t)) : (p.debug("Clearing cache", e), k.removeData(h.cache))
						}
					},
					read: {
						cache: function(e) {
							var t = k.data(h.cache);
							return m.cache ? (p.verbose("Checking cache for generated html for query", e), "object" == typeof t && t[e] !== i ? t[e] : !1) : !1
						}
					},
					create: {
						id: function(e, t) {
							var n, o, r = e + 1;
							return t !== i ? (n = String.fromCharCode(97 + t), o = n + r, p.verbose("Creating category result id", o)) : (o = r, p.verbose("Creating result id", o)), o
						},
						results: function() {
							0 === E.length && (E = e("<div />").addClass(g.results).appendTo(k))
						}
					},
					inject: {
						result: function(e, t, n) {
							p.verbose("Injecting result into results");
							var o = n !== i ? E.children().eq(n).children(b.result).eq(t) : E.children(b.result).eq(t);
							p.verbose("Injecting results metadata", o), o.data(h.result, e)
						},
						id: function(t) {
							p.debug("Injecting unique ids into results");
							var n = 0,
								o = 0;
							return "category" === m.type ? e.each(t, function(t, r) {
								o = 0, e.each(r.results, function(e) {
									var t = r.results[e];
									t.id === i && (t.id = p.create.id(o, n)), p.inject.result(t, o, n), o++
								}), n++
							}) : e.each(t, function(e) {
								var n = t[e];
								n.id === i && (n.id = p.create.id(o)), p.inject.result(n, o), o++
							}), t
						}
					},
					save: {
						results: function(e) {
							p.verbose("Saving current search results to metadata", e), k.data(h.results, e)
						}
					},
					write: {
						cache: function(e, t) {
							var n = k.data(h.cache) !== i ? k.data(h.cache) : {};
							m.cache && (p.verbose("Writing generated html to cache", e, t), n[e] = t, k.data(h.cache, n))
						}
					},
					addResults: function(t) {
						return e.isFunction(m.onResultsAdd) && m.onResultsAdd.call(E, t) === !1 ? (p.debug("onResultsAdd callback cancelled default action"), !1) : (E.html(t), void p.showResults())
					},
					showResults: function() {
						p.is.visible() || !p.is.focused() || p.is.empty() || (p.can.transition() ? (p.debug("Showing results with css animations"), E.transition({
							animation: m.transition + " in",
							debug: m.debug,
							verbose: m.verbose,
							duration: m.duration,
							queue: !0
						})) : (p.debug("Showing results with javascript"), E.stop().fadeIn(m.duration, m.easing)), m.onResultsOpen.call(E))
					},
					hideResults: function() {
						p.is.visible() && (p.can.transition() ? (p.debug("Hiding results with css animations"), E.transition({
							animation: m.transition + " out",
							debug: m.debug,
							verbose: m.verbose,
							duration: m.duration,
							queue: !0
						})) : (p.debug("Hiding results with javascript"), E.stop().fadeOut(m.duration, m.easing)), m.onResultsClose.call(E))
					},
					generateResults: function(t) {
						p.debug("Generating html from response", t);
						var n = m.templates[m.type],
							i = e.isPlainObject(t.results) && !e.isEmptyObject(t.results),
							o = e.isArray(t.results) && t.results.length > 0,
							r = "";
						return i || o ? (m.maxResults > 0 && (i ? "standard" == m.type && p.error(y.maxResults) : t.results = t.results.slice(0, m.maxResults)), e.isFunction(n) ? r = n(t) : p.error(y.noTemplate, !1)) : r = p.displayMessage(y.noResults, "empty"), m.onResults.call(A, t), r
					},
					displayMessage: function(e, t) {
						return t = t || "standard", p.debug("Displaying message", e, t), p.addResults(m.templates.message(e, t)), m.templates.message(e, t)
					},
					setting: function(t, n) {
						if (e.isPlainObject(t)) e.extend(!0, m, t);
						else {
							if (n === i) return m[t];
							m[t] = n
						}
					},
					internal: function(t, n) {
						if (e.isPlainObject(t)) e.extend(!0, p, t);
						else {
							if (n === i) return p[t];
							p[t] = n
						}
					},
					debug: function() {
						m.debug && (m.performance ? p.performance.log(arguments) : (p.debug = Function.prototype.bind.call(console.info, console, m.name + ":"), p.debug.apply(console, arguments)))
					},
					verbose: function() {
						m.verbose && m.debug && (m.performance ? p.performance.log(arguments) : (p.verbose = Function.prototype.bind.call(console.info, console, m.name + ":"), p.verbose.apply(console, arguments)))
					},
					error: function() {
						p.error = Function.prototype.bind.call(console.error, console, m.name + ":"), p.error.apply(console, arguments)
					},
					performance: {
						log: function(e) {
							var t, n, i;
							m.performance && (t = (new Date).getTime(), i = l || t, n = t - i, l = t, c.push({
								Name: e[0],
								Arguments: [].slice.call(e, 1) || "",
								Element: A,
								"Execution Time": n
							})), clearTimeout(p.performance.timer), p.performance.timer = setTimeout(p.performance.display, 500)
						},
						display: function() {
							var t = m.name + ":",
								n = 0;
							l = !1, clearTimeout(p.performance.timer), e.each(c, function(e, t) {
								n += t["Execution Time"]
							}), t += " " + n + "ms", s && (t += " '" + s + "'"), a.length > 1 && (t += " (" + a.length + ")"), (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function(e, t) {
								console.log(t.Name + ": " + t["Execution Time"] + "ms")
							}), console.groupEnd()), c = []
						}
					},
					invoke: function(t, n, o) {
						var a, s, l, c = D;
						return n = n || f, o = A || o, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), a = t.length - 1, e.each(t, function(n, o) {
							var r = n != a ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
							if (e.isPlainObject(c[r]) && n != a) c = c[r];
							else {
								if (c[r] !== i) return s = c[r], !1;
								if (!e.isPlainObject(c[o]) || n == a) return c[o] !== i ? (s = c[o], !1) : !1;
								c = c[o]
							}
						})), e.isFunction(s) ? l = s.apply(o, n) : s !== i && (l = s), e.isArray(r) ? r.push(l) : r !== i ? r = [r, l] : l !== i && (r = l), s
					}
				}, d ? (D === i && p.initialize(), p.invoke(u)) : (D !== i && D.invoke("destroy"), p.initialize())
			}), r !== i ? r : this
		}, e.fn.search.settings = {
			name: "Search",
			namespace: "search",
			debug: !1,
			verbose: !1,
			performance: !0,
			type: "standard",
			minCharacters: 1,
			apiSettings: !1,
			source: !1,
			searchFields: ["title", "description"],
			searchFullText: !0,
			automatic: !0,
			hideDelay: 0,
			searchDelay: 200,
			maxResults: 7,
			cache: !0,
			transition: "scale",
			duration: 200,
			easing: "easeOutExpo",
			onSelect: !1,
			onResultsAdd: !1,
			onSearchQuery: function() {},
			onResults: function() {},
			onResultsOpen: function() {},
			onResultsClose: function() {},
			className: {
				active: "active",
				empty: "empty",
				focus: "focus",
				loading: "loading",
				results: "results",
				pressed: "down"
			},
			error: {
				source: "Cannot search. No source used, and Semantic API module was not included",
				noResults: "Your search returned no results",
				logging: "Error in debug logging, exiting.",
				noEndpoint: "No search endpoint was specified",
				noTemplate: "A valid template name was not specified.",
				serverError: "There was an issue querying the server.",
				maxResults: "Results must be an array to use maxResults setting",
				method: "The method you called is not defined."
			},
			metadata: {
				cache: "cache",
				results: "results",
				result: "result"
			},
			regExp: {
				escape: /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,
				beginsWith: "(?:s|^)"
			},
			selector: {
				prompt: ".prompt",
				searchButton: ".search.button",
				results: ".results",
				category: ".category",
				result: ".result",
				title: ".title, .name"
			},
			templates: {
				escape: function(e) {
					var t = /[&<>"'`]/g,
						n = /[&<>"'`]/,
						i = {
							"&": "&amp;",
							"<": "&lt;",
							">": "&gt;",
							'"': "&quot;",
							"'": "&#x27;",
							"`": "&#x60;"
						},
						o = function(e) {
							return i[e]
						};
					return n.test(e) ? e.replace(t, o) : e
				},
				message: function(e, t) {
					var n = "";
					return e !== i && t !== i && (n += '<div class="message ' + t + '">', n += "empty" == t ? '<div class="header">No Results</div class="header"><div class="description">' + e + '</div class="description">' : ' <div class="description">' + e + "</div>", n += "</div>"), n
				},
				category: function(t) {
					var n = "",
						o = e.fn.search.settings.templates.escape;
					return t.results !== i ? (e.each(t.results, function(t, r) {
						r.results !== i && r.results.length > 0 && (n += '<div class="category"><div class="name">' + r.name + "</div>", e.each(r.results, function(e, t) {
							n += '<div class="result">', t.url && (n += '<a href="' + t.url + '"></a>'), t.image !== i && (t.image = o(t.image), n += '<div class="image"> <img src="' + t.image + '" alt=""></div>'), n += '<div class="content">', t.price !== i && (t.price = o(t.price), n += '<div class="price">' + t.price + "</div>"), t.title !== i && (t.title = o(t.title), n += '<div class="title">' + t.title + "</div>"), t.description !== i && (n += '<div class="description">' + t.description + "</div>"), n += "</div></div>"
						}), n += "</div>")
					}), t.action && (n += '<a href="' + t.action.url + '" class="action">' + t.action.text + "</a>"), n) : !1
				},
				standard: function(t) {
					var n = "";
					return t.results !== i ? (e.each(t.results, function(e, t) {
						n += t.url ? '<a class="result" href="' + t.url + '">' : '<a class="result">', t.image !== i && (n += '<div class="image"> <img src="' + t.image + '"></div>'), n += '<div class="content">', t.price !== i && (n += '<div class="price">' + t.price + "</div>"), t.title !== i && (n += '<div class="title">' + t.title + "</div>"), t.description !== i && (n += '<div class="description">' + t.description + "</div>"), n += "</div>", n += "</a>"
					}), t.action && (n += '<a href="' + t.action.url + '" class="action">' + t.action.text + "</a>"), n) : !1
				}
			}
		}
	}(jQuery, window, document),
	function(e, t, n, i) {
		"use strict";
		e.fn.shape = function(o) {
			var r, a = e(this),
				s = (e("body"), (new Date).getTime()),
				l = [],
				c = arguments[0],
				u = "string" == typeof c,
				d = [].slice.call(arguments, 1),
				f = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
					setTimeout(e, 0)
				};
			return a.each(function() {
				var t, p, m, g = a.selector || "",
					h = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.shape.settings, o) : e.extend({}, e.fn.shape.settings),
					v = h.namespace,
					b = h.selector,
					y = h.error,
					x = h.className,
					w = "." + v,
					C = "module-" + v,
					k = e(this),
					T = k.find(b.sides),
					S = k.find(b.side),
					E = !1,
					A = this,
					D = k.data(C);
				m = {
					initialize: function() {
						m.verbose("Initializing module for", A), m.set.defaultSide(), m.instantiate()
					},
					instantiate: function() {
						m.verbose("Storing instance of module", m), D = m, k.data(C, D)
					},
					destroy: function() {
						m.verbose("Destroying previous module for", A), k.removeData(C).off(w)
					},
					refresh: function() {
						m.verbose("Refreshing selector cache for", A), k = e(A), T = e(this).find(b.shape), S = e(this).find(b.side)
					},
					repaint: function() {
						m.verbose("Forcing repaint event"); {
							var e = T[0] || n.createElement("div");
							e.offsetWidth
						}
					},
					animate: function(e, n) {
						m.verbose("Animating box with properties", e), n = n || function(e) {
							m.verbose("Executing animation callback"), e !== i && e.stopPropagation(), m.reset(), m.set.active()
						}, h.beforeChange.call(p[0]), m.get.transitionEvent() ? (m.verbose("Starting CSS animation"), k.addClass(x.animating), T.css(e).one(m.get.transitionEvent(), n), m.set.duration(h.duration), f(function() {
							k.addClass(x.animating), t.addClass(x.hidden)
						})) : n()
					},
					queue: function(e) {
						m.debug("Queueing animation of", e), T.one(m.get.transitionEvent(), function() {
							m.debug("Executing queued animation"), setTimeout(function() {
								k.shape(e)
							}, 0)
						})
					},
					reset: function() {
						m.verbose("Animating states reset"), k.removeClass(x.animating).attr("style", "").removeAttr("style"), T.attr("style", "").removeAttr("style"), S.attr("style", "").removeAttr("style").removeClass(x.hidden), p.removeClass(x.animating).attr("style", "").removeAttr("style")
					},
					is: {
						complete: function() {
							return S.filter("." + x.active)[0] == p[0]
						},
						animating: function() {
							return k.hasClass(x.animating)
						}
					},
					set: {
						defaultSide: function() {
							t = k.find("." + h.className.active), p = t.next(b.side).length > 0 ? t.next(b.side) : k.find(b.side).first(), E = !1, m.verbose("Active side set to", t), m.verbose("Next side set to", p)
						},
						duration: function(e) {
							e = e || h.duration, e = "number" == typeof e ? e + "ms" : e, m.verbose("Setting animation duration", e), (h.duration || 0 === h.duration) && T.add(S).css({
								"-webkit-transition-duration": e,
								"-moz-transition-duration": e,
								"-ms-transition-duration": e,
								"-o-transition-duration": e,
								"transition-duration": e
							})
						},
						currentStageSize: function() {
							var e = k.find("." + h.className.active),
								t = e.outerWidth(!0),
								n = e.outerHeight(!0);
							k.css({
								width: t,
								height: n
							})
						},
						stageSize: function() {
							var e = k.clone().addClass(x.loading),
								t = e.find("." + h.className.active),
								n = E ? e.find(b.side).eq(E) : t.next(b.side).length > 0 ? t.next(b.side) : e.find(b.side).first(),
								i = {};
							m.set.currentStageSize(), t.removeClass(x.active), n.addClass(x.active), e.insertAfter(k), i = {
								width: n.outerWidth(!0),
								height: n.outerHeight(!0)
							}, e.remove(), k.css(i), m.verbose("Resizing stage to fit new content", i)
						},
						nextSide: function(e) {
							E = e, p = S.filter(e), E = S.index(p), 0 === p.length && (m.set.defaultSide(), m.error(y.side)), m.verbose("Next side manually set to", p)
						},
						active: function() {
							m.verbose("Setting new side to active", p), S.removeClass(x.active), p.addClass(x.active), h.onChange.call(p[0]), m.set.defaultSide()
						}
					},
					flip: {
						up: function() {
							return !m.is.complete() || m.is.animating() || h.allowRepeats ? void(m.is.animating() ? m.queue("flip up") : (m.debug("Flipping up", p), m.set.stageSize(), m.stage.above(), m.animate(m.get.transform.up()))) : void m.debug("Side already visible", p)
						},
						down: function() {
							return !m.is.complete() || m.is.animating() || h.allowRepeats ? void(m.is.animating() ? m.queue("flip down") : (m.debug("Flipping down", p), m.set.stageSize(), m.stage.below(), m.animate(m.get.transform.down()))) : void m.debug("Side already visible", p)
						},
						left: function() {
							return !m.is.complete() || m.is.animating() || h.allowRepeats ? void(m.is.animating() ? m.queue("flip left") : (m.debug("Flipping left", p), m.set.stageSize(), m.stage.left(), m.animate(m.get.transform.left()))) : void m.debug("Side already visible", p)
						},
						right: function() {
							return !m.is.complete() || m.is.animating() || h.allowRepeats ? void(m.is.animating() ? m.queue("flip right") : (m.debug("Flipping right", p), m.set.stageSize(), m.stage.right(), m.animate(m.get.transform.right()))) : void m.debug("Side already visible", p)
						},
						over: function() {
							return !m.is.complete() || m.is.animating() || h.allowRepeats ? void(m.is.animating() ? m.queue("flip over") : (m.debug("Flipping over", p), m.set.stageSize(), m.stage.behind(), m.animate(m.get.transform.over()))) : void m.debug("Side already visible", p)
						},
						back: function() {
							return !m.is.complete() || m.is.animating() || h.allowRepeats ? void(m.is.animating() ? m.queue("flip back") : (m.debug("Flipping back", p), m.set.stageSize(), m.stage.behind(), m.animate(m.get.transform.back()))) : void m.debug("Side already visible", p)
						}
					},
					get: {
						transform: {
							up: function() {
								var e = {
									y: -((t.outerHeight(!0) - p.outerHeight(!0)) / 2),
									z: -(t.outerHeight(!0) / 2)
								};
								return {
									transform: "translateY(" + e.y + "px) translateZ(" + e.z + "px) rotateX(-90deg)"
								}
							},
							down: function() {
								var e = {
									y: -((t.outerHeight(!0) - p.outerHeight(!0)) / 2),
									z: -(t.outerHeight(!0) / 2)
								};
								return {
									transform: "translateY(" + e.y + "px) translateZ(" + e.z + "px) rotateX(90deg)"
								}
							},
							left: function() {
								var e = {
									x: -((t.outerWidth(!0) - p.outerWidth(!0)) / 2),
									z: -(t.outerWidth(!0) / 2)
								};
								return {
									transform: "translateX(" + e.x + "px) translateZ(" + e.z + "px) rotateY(90deg)"
								}
							},
							right: function() {
								var e = {
									x: -((t.outerWidth(!0) - p.outerWidth(!0)) / 2),
									z: -(t.outerWidth(!0) / 2)
								};
								return {
									transform: "translateX(" + e.x + "px) translateZ(" + e.z + "px) rotateY(-90deg)"
								}
							},
							over: function() {
								var e = {
									x: -((t.outerWidth(!0) - p.outerWidth(!0)) / 2)
								};
								return {
									transform: "translateX(" + e.x + "px) rotateY(180deg)"
								}
							},
							back: function() {
								var e = {
									x: -((t.outerWidth(!0) - p.outerWidth(!0)) / 2)
								};
								return {
									transform: "translateX(" + e.x + "px) rotateY(-180deg)"
								}
							}
						},
						transitionEvent: function() {
							var e, t = n.createElement("element"),
								o = {
									transition: "transitionend",
									OTransition: "oTransitionEnd",
									MozTransition: "transitionend",
									WebkitTransition: "webkitTransitionEnd"
								};
							for (e in o)
								if (t.style[e] !== i) return o[e]
						},
						nextSide: function() {
							return t.next(b.side).length > 0 ? t.next(b.side) : k.find(b.side).first()
						}
					},
					stage: {
						above: function() {
							var e = {
								origin: (t.outerHeight(!0) - p.outerHeight(!0)) / 2,
								depth: {
									active: p.outerHeight(!0) / 2,
									next: t.outerHeight(!0) / 2
								}
							};
							m.verbose("Setting the initial animation position as above", p, e), T.css({
								transform: "translateZ(-" + e.depth.active + "px)"
							}), t.css({
								transform: "rotateY(0deg) translateZ(" + e.depth.active + "px)"
							}), p.addClass(x.animating).css({
								top: e.origin + "px",
								transform: "rotateX(90deg) translateZ(" + e.depth.next + "px)"
							})
						},
						below: function() {
							var e = {
								origin: (t.outerHeight(!0) - p.outerHeight(!0)) / 2,
								depth: {
									active: p.outerHeight(!0) / 2,
									next: t.outerHeight(!0) / 2
								}
							};
							m.verbose("Setting the initial animation position as below", p, e), T.css({
								transform: "translateZ(-" + e.depth.active + "px)"
							}), t.css({
								transform: "rotateY(0deg) translateZ(" + e.depth.active + "px)"
							}), p.addClass(x.animating).css({
								top: e.origin + "px",
								transform: "rotateX(-90deg) translateZ(" + e.depth.next + "px)"
							})
						},
						left: function() {
							var e = {
									active: t.outerWidth(!0),
									next: p.outerWidth(!0)
								},
								n = {
									origin: (e.active - e.next) / 2,
									depth: {
										active: e.next / 2,
										next: e.active / 2
									}
								};
							m.verbose("Setting the initial animation position as left", p, n), T.css({
								transform: "translateZ(-" + n.depth.active + "px)"
							}), t.css({
								transform: "rotateY(0deg) translateZ(" + n.depth.active + "px)"
							}), p.addClass(x.animating).css({
								left: n.origin + "px",
								transform: "rotateY(-90deg) translateZ(" + n.depth.next + "px)"
							})
						},
						right: function() {
							var e = {
									active: t.outerWidth(!0),
									next: p.outerWidth(!0)
								},
								n = {
									origin: (e.active - e.next) / 2,
									depth: {
										active: e.next / 2,
										next: e.active / 2
									}
								};
							m.verbose("Setting the initial animation position as left", p, n), T.css({
								transform: "translateZ(-" + n.depth.active + "px)"
							}), t.css({
								transform: "rotateY(0deg) translateZ(" + n.depth.active + "px)"
							}), p.addClass(x.animating).css({
								left: n.origin + "px",
								transform: "rotateY(90deg) translateZ(" + n.depth.next + "px)"
							})
						},
						behind: function() {
							var e = {
									active: t.outerWidth(!0),
									next: p.outerWidth(!0)
								},
								n = {
									origin: (e.active - e.next) / 2,
									depth: {
										active: e.next / 2,
										next: e.active / 2
									}
								};
							m.verbose("Setting the initial animation position as behind", p, n), t.css({
								transform: "rotateY(0deg)"
							}), p.addClass(x.animating).css({
								left: n.origin + "px",
								transform: "rotateY(-180deg)"
							})
						}
					},
					setting: function(t, n) {
						if (m.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, h, t);
						else {
							if (n === i) return h[t];
							h[t] = n
						}
					},
					internal: function(t, n) {
						if (e.isPlainObject(t)) e.extend(!0, m, t);
						else {
							if (n === i) return m[t];
							m[t] = n
						}
					},
					debug: function() {
						h.debug && (h.performance ? m.performance.log(arguments) : (m.debug = Function.prototype.bind.call(console.info, console, h.name + ":"), m.debug.apply(console, arguments)))
					},
					verbose: function() {
						h.verbose && h.debug && (h.performance ? m.performance.log(arguments) : (m.verbose = Function.prototype.bind.call(console.info, console, h.name + ":"), m.verbose.apply(console, arguments)))
					},
					error: function() {
						m.error = Function.prototype.bind.call(console.error, console, h.name + ":"), m.error.apply(console, arguments)
					},
					performance: {
						log: function(e) {
							var t, n, i;
							h.performance && (t = (new Date).getTime(), i = s || t, n = t - i, s = t, l.push({
								Name: e[0],
								Arguments: [].slice.call(e, 1) || "",
								Element: A,
								"Execution Time": n
							})), clearTimeout(m.performance.timer), m.performance.timer = setTimeout(m.performance.display, 500)
						},
						display: function() {
							var t = h.name + ":",
								n = 0;
							s = !1, clearTimeout(m.performance.timer), e.each(l, function(e, t) {
								n += t["Execution Time"]
							}), t += " " + n + "ms", g && (t += " '" + g + "'"), a.length > 1 && (t += " (" + a.length + ")"), (console.group !== i || console.table !== i) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function(e, t) {
								console.log(t.Name + ": " + t["Execution Time"] + "ms")
							}), console.groupEnd()), l = []
						}
					},
					invoke: function(t, n, o) {
						var a, s, l, c = D;
						return n = n || d, o = A || o, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), a = t.length - 1, e.each(t, function(n, o) {
							var r = n != a ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
							if (e.isPlainObject(c[r]) && n != a) c = c[r];
							else {
								if (c[r] !== i) return s = c[r], !1;
								if (!e.isPlainObject(c[o]) || n == a) return c[o] !== i ? (s = c[o], !1) : !1;
								c = c[o]
							}
						})), e.isFunction(s) ? l = s.apply(o, n) : s !== i && (l = s), e.isArray(r) ? r.push(l) : r !== i ? r = [r, l] : l !== i && (r = l), s
					}
				}, u ? (D === i && m.initialize(), m.invoke(c)) : (D !== i && D.invoke("destroy"), m.initialize())
			}), r !== i ? r : this
		}, e.fn.shape.settings = {
			name: "Shape",
			debug: !1,
			verbose: !1,
			performance: !0,
			namespace: "shape",
			beforeChange: function() {},
			onChange: function() {},
			allowRepeats: !1,
			duration: !1,
			error: {
				side: "You tried to switch to a side that does not exist.",
				method: "The method you called is not defined"
			},
			className: {
				animating: "animating",
				hidden: "hidden",
				loading: "loading",
				active: "active"
			},
			selector: {
				sides: ".sides",
				side: ".side"
			}
		}
	}(jQuery, window, document),
	function(e, t, n, i) {
		"use strict";
		e.fn.sidebar = function(o) {
			var r, a = e(this),
				s = e(t),
				l = e(n),
				c = e("html"),
				u = e("head"),
				d = a.selector || "",
				f = (new Date).getTime(),
				p = [],
				m = arguments[0],
				g = "string" == typeof m,
				h = [].slice.call(arguments, 1),
				v = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
					setTimeout(e, 0)
				};
			return a.each(function() {
				var a, b, y, x, w, C, k = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.sidebar.settings, o) : e.extend({}, e.fn.sidebar.settings),
					T = k.selector,
					S = k.className,
					E = k.namespace,
					A = k.regExp,
					D = k.error,
					j = "." + E,
					R = "module-" + E,
					F = e(this),
					P = e(k.context),
					O = F.children(T.sidebar),
					N = P.children(T.fixed),
					q = P.children(T.pusher),
					L = this,
					z = F.data(R);
				C = {
					initialize: function() {
						C.debug("Initializing sidebar", o), C.create.id(), w = C.get.transitionEvent(), C.is.ios() && C.set.ios(), k.delaySetup ? v(C.setup.layout) : C.setup.layout(), v(function() {
							C.setup.cache()
						}), C.instantiate()
					},
					instantiate: function() {
						C.verbose("Storing instance of module", C), z = C, F.data(R, C)
					},
					create: {
						id: function() {
							y = (Math.random().toString(16) + "000000000").substr(2, 8), b = "." + y, C.verbose("Creating unique id for element", y)
						}
					},
					destroy: function() {
						C.verbose("Destroying previous module for", F), F.off(j).removeData(R), C.is.ios() && C.remove.ios(), P.off(b), s.off(b), l.off(b)
					},
					event: {
						clickaway: function(e) {
							var t = q.find(e.target).length > 0 || q.is(e.target),
								n = P.is(e.target);
							t && (C.verbose("User clicked on dimmed page"), C.hide()), n && (C.verbose("User clicked on dimmable context (scaled out page)"), C.hide())
						},
						touch: function() {},
						containScroll: function() {
							L.scrollTop <= 0 && (L.scrollTop = 1), L.scrollTop + L.offsetHeight >= L.scrollHeight && (L.scrollTop = L.scrollHeight - L.offsetHeight - 1)
						},
						scroll: function(t) {
							0 === e(t.target).closest(T.sidebar).length && t.preventDefault()
						}
					},
					bind: {
						clickaway: function() {
							C.verbose("Adding clickaway events to context", P), k.closable && P.on("click" + b, C.event.clickaway).on("touchend" + b, C.event.clickaway)
						},
						scrollLock: function() {
							k.scrollLock && (C.debug("Disabling page scroll"), s.on("DOMMouseScroll" + b, C.event.scroll)), C.verbose("Adding events to contain sidebar scroll"), l.on("touchmove" + b, C.event.touch), F.on("scroll" + j, C.event.containScroll)
						}
					},
					unbind: {
						clickaway: function() {
							C.verbose("Removing clickaway events from context", P), P.off(b)
						},
						scrollLock: function() {
							C.verbose("Removing scroll lock from page"), l.off(b), s.off(b), F.off("scroll" + j)
						}
					},
					add: {
						inlineCSS: function() {
							var t, n = C.cache.width || F.outerWidth(),
								i = C.cache.height || F.outerHeight(),
								o = C.is.rtl(),
								r = C.get.direction(),
								s = {
									left: n,
									right: -n,
									top: i,
									bottom: -i
								};
							o && (C.verbose("RTL detected, flipping widths"), s.left = -n, s.right = n), t = "<style>", "left" === r || "right" === r ? (C.debug("Adding CSS rules for animation distance", n), t += " .ui.visible." + r + ".sidebar ~ .fixed, .ui.visible." + r + ".sidebar ~ .pusher {   -webkit-transform: translate3d(" + s[r] + "px, 0, 0);           transform: translate3d(" + s[r] + "px, 0, 0); }") : ("top" === r || "bottom" == r) && (t += " .ui.visible." + r + ".sidebar ~ .fixed, .ui.visible." + r + ".sidebar ~ .pusher {   -webkit-transform: translate3d(0, " + s[r] + "px, 0);           transform: translate3d(0, " + s[r] + "px, 0); }"), C.is.ie() && ("left" === r || "right" === r ? (C.debug("Adding CSS rules for animation distance", n), t += " body.pushable > .ui.visible." + r + ".sidebar ~ .pusher:after {   -webkit-transform: translate3d(" + s[r] + "px, 0, 0);           transform: translate3d(" + s[r] + "px, 0, 0); }") : ("top" === r || "bottom" == r) && (t += " body.pushable > .ui.visible." + r + ".sidebar ~ .pusher:after {   -webkit-transform: translate3d(0, " + s[r] + "px, 0);           transform: translate3d(0, " + s[r] + "px, 0); }"), t += " body.pushable > .ui.visible.left.sidebar ~ .ui.visible.right.sidebar ~ .pusher:after, body.pushable > .ui.visible.right.sidebar ~ .ui.visible.left.sidebar ~ .pusher:after {   -webkit-transform: translate3d(0px, 0, 0);           transform: translate3d(0px, 0, 0); }"), t += "</style>", a = e(t).appendTo(u), C.debug("Adding sizing css to head", a)
						}
					},
					refresh: function() {
						C.verbose("Refreshing selector cache"), P = e(k.context), O = P.children(T.sidebar), q = P.children(T.pusher), N = P.children(T.fixed), C.clear.cache()
					},
					refreshSidebars: function() {
						C.verbose("Refreshing other sidebars"), O = P.children(T.sidebar)
					},
					repaint: function() {
						C.verbose("Forcing repaint event"), L.style.display = "none";
						L.offsetHeight;
						L.scrollTop = L.scrollTop, L.style.display = ""
					},
					setup: {
						cache: function() {
							C.cache = {
								width: F.outerWidth(),
								height: F.outerHeight(),
								rtl: "rtl" == F.css("direction")
							}
						},
						layout: function() {
							0 === P.children(T.pusher).length && (C.debug("Adding wrapper element for sidebar"), C.error(D.pusher), q = e('<div class="pusher" />'), P.children().not(T.omitted).not(O).wrapAll(q), C.refresh()), (0 === F.nextAll(T.pusher).length || F.nextAll(T.pusher)[0] !== q[0]) && (C.debug("Moved sidebar to correct parent element"), C.error(D.movedSidebar, L), F.detach().prependTo(P), C.refresh()), C.clear.cache(), C.set.pushable(), C.set.direction()
						}
					},
					attachEvents: function(t, n) {
						var i = e(t);
						n = e.isFunction(C[n]) ? C[n] : C.toggle, i.length > 0 ? (C.debug("Attaching sidebar events to element", t, n), i.on("click" + j, n)) : C.error(D.notFound, t)
					},
					show: function(t) {
						if (t = e.isFunction(t) ? t : function() {}, C.is.hidden()) {
							if (C.refreshSidebars(), k.overlay && (C.error(D.overlay), k.transition = "overlay"), C.refresh(), C.othersActive())
								if (C.debug("Other sidebars currently visible"), k.exclusive) {
									if ("overlay" != k.transition) return void C.hideOthers(C.show);
									C.hideOthers()
								} else k.transition = "overlay";
							C.pushPage(function() {
								t.call(L), k.onShow.call(L)
							}), k.onChange.call(L), k.onVisible.call(L)
						} else C.debug("Sidebar is already visible")
					},
					hide: function(t) {
						t = e.isFunction(t) ? t : function() {}, (C.is.visible() || C.is.animating()) && (C.debug("Hiding sidebar", t), C.refreshSidebars(), C.pullPage(function() {
							t.call(L), k.onHidden.call(L)
						}), k.onChange.call(L), k.onHide.call(L))
					},
					othersAnimating: function() {
						return O.not(F).filter("." + S.animating).length > 0
					},
					othersVisible: function() {
						return O.not(F).filter("." + S.visible).length > 0
					},
					othersActive: function() {
						return C.othersVisible() || C.othersAnimating()
					},
					hideOthers: function(e) {
						var t = O.not(F).filter("." + S.visible),
							n = t.length,
							i = 0;
						e = e || function() {}, t.sidebar("hide", function() {
							i++, i == n && e()
						})
					},
					toggle: function() {
						C.verbose("Determining toggled direction"), C.is.hidden() ? C.show() : C.hide()
					},
					pushPage: function(t) {
						var n, i, o, r = C.get.transition(),
							a = "overlay" === r || C.othersActive() ? F : q;
						t = e.isFunction(t) ? t : function() {}, "scale down" == k.transition && C.scrollToTop(), C.set.transition(r), C.repaint(), n = function() {
							C.bind.clickaway(), C.add.inlineCSS(), C.set.animating(), C.set.visible()
						}, i = function() {
							C.set.dimmed()
						}, o = function(e) {
							e.target == a[0] && (a.off(w + b, o), C.remove.animating(), C.bind.scrollLock(), t.call(L))
						}, a.off(w + b), a.on(w + b, o), v(n), k.dimPage && !C.othersVisible() && v(i)
					},
					pullPage: function(t) {
						var n, i, o = C.get.transition(),
							r = "overlay" == o || C.othersActive() ? F : q;
						t = e.isFunction(t) ? t : function() {}, C.verbose("Removing context push state", C.get.direction()), C.unbind.clickaway(), C.unbind.scrollLock(), n = function() {
							C.set.transition(o), C.set.animating(), C.remove.visible(), k.dimPage && !C.othersVisible() && q.removeClass(S.dimmed)
						}, i = function(e) {
							e.target == r[0] && (r.off(w + b, i), C.remove.animating(), C.remove.transition(), C.remove.inlineCSS(), ("scale down" == o || k.returnScroll && C.is.mobile()) && C.scrollBack(), t.call(L))
						}, r.off(w + b), r.on(w + b, i), v(n)
					},
					scrollToTop: function() {
						C.verbose("Scrolling to top of page to avoid animation issues"), x = e(t).scrollTop(), F.scrollTop(0), t.scrollTo(0, 0)
					},
					scrollBack: function() {
						C.verbose("Scrolling back to original page position"), t.scrollTo(0, x)
					},
					clear: {
						cache: function() {
							C.verbose("Clearing cached dimensions"), C.cache = {}
						}
					},
					set: {
						ios: function() {
							c.addClass(S.ios)
						},
						pushed: function() {
							P.addClass(S.pushed)
						},
						pushable: function() {
							P.addClass(S.pushable)
						},
						dimmed: function() {
							q.addClass(S.dimmed)
						},
						active: function() {
							F.addClass(S.active)
						},
						animating: function() {
							F.addClass(S.animating)
						},
						transition: function(e) {
							e = e || C.get.transition(), F.addClass(e)
						},
						direction: function(e) {
							e = e || C.get.direction(), F.addClass(S[e])
						},
						visible: function() {
							F.addClass(S.visible)
						},
						overlay: function() {
							F.addClass(S.overlay)
						}
					},
					remove: {
						inlineCSS: function() {
							C.debug("Removing inline css styles", a), a && a.length > 0 && a.remove()
						},
						ios: function() {
							c.removeClass(S.ios)
						},
						pushed: function() {
							P.removeClass(S.pushed)
						},
						pushable: function() {
							P.removeClass(S.pushable)
						},
						active: function() {
							F.removeClass(S.active)
						},
						animating: function() {
							F.removeClass(S.animating)
						},
						transition: function(e) {
							e = e || C.get.transition(), F.removeClass(e)
						},
						direction: function(e) {
							e = e || C.get.direction(), F.removeClass(S[e])
						},
						visible: function() {
							F.removeClass(S.visible)
						},
						overlay: function() {
							F.removeClass(S.overlay)
						}
					},
					get: {
						direction: function() {
							return F.hasClass(S.top) ? S.top : F.hasClass(S.right) ? S.right : F.hasClass(S.bottom) ? S.bottom : S.left
						},
						transition: function() {
							var e, t = C.get.direction();
							return e = C.is.mobile() ? "auto" == k.mobileTransition ? k.defaultTransition.mobile[t] : k.mobileTransition : "auto" == k.transition ? k.defaultTransition.computer[t] : k.transition, C.verbose("Determined transition", e), e
						},
						transitionEvent: function() {
							var e, t = n.createElement("element"),
								o = {
									transition: "transitionend",
									OTransition: "oTransitionEnd",
									MozTransition: "transitionend",
									WebkitTransition: "webkitTransitionEnd"
								};
							for (e in o)
								if (t.style[e] !== i) return o[e]
						}
					},
					is: {
						ie: function() {
							var e = !t.ActiveXObject && "ActiveXObject" in t,
								n = "ActiveXObject" in t;
							return e || n
						},
						ios: function() {
							var e = navigator.userAgent,
								t = e.match(A.ios),
								n = e.match(A.mobileChrome);
							return t && !n ? (C.verbose("Browser was found to be iOS", e), !0) : !1
						},
						mobile: function() {
							var e = navigator.userAgent,
								t = e.match(A.mobile);
							return t ? (C.verbose("Browser was found to be mobile", e), !0) : (C.verbose("Browser is not mobile, using regular transition", e), !1)
						},
						hidden: function() {
							return !C.is.visible()
						},
						visible: function() {
							return F.hasClass(S.visible)
						},
						open: function() {
							return C.is.visible()
						},
						closed: function() {
							return C.is.hidden()
						},
						vertical: function() {
							return F.hasClass(S.top)
						},
						animating: function() {
							return P.hasClass(S.animating)
						},
						rtl: function() {
							return C.cache.rtl === i && (C.cache.rtl = "rtl" == F.css("direction")), C.cache.rtl
						}
					},
					setting: function(t, n) {
						if (C.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, k, t);
						else {
							if (n === i) return k[t];
							k[t] = n
						}
					},
					internal: function(t, n) {
						if (e.isPlainObject(t)) e.extend(!0, C, t);
						else {
							if (n === i) return C[t];
							C[t] = n
						}
					},
					debug: function() {
						k.debug && (k.performance ? C.performance.log(arguments) : (C.debug = Function.prototype.bind.call(console.info, console, k.name + ":"), C.debug.apply(console, arguments)))
					},
					verbose: function() {
						k.verbose && k.debug && (k.performance ? C.performance.log(arguments) : (C.verbose = Function.prototype.bind.call(console.info, console, k.name + ":"), C.verbose.apply(console, arguments)))
					},
					error: function() {
						C.error = Function.prototype.bind.call(console.error, console, k.name + ":"), C.error.apply(console, arguments)
					},
					performance: {
						log: function(e) {
							var t, n, i;
							k.performance && (t = (new Date).getTime(), i = f || t, n = t - i, f = t, p.push({
								Name: e[0],
								Arguments: [].slice.call(e, 1) || "",
								Element: L,
								"Execution Time": n
							})), clearTimeout(C.performance.timer), C.performance.timer = setTimeout(C.performance.display, 500)
						},
						display: function() {
							var t = k.name + ":",
								n = 0;
							f = !1, clearTimeout(C.performance.timer), e.each(p, function(e, t) {
								n += t["Execution Time"]
							}), t += " " + n + "ms", d && (t += " '" + d + "'"), (console.group !== i || console.table !== i) && p.length > 0 && (console.groupCollapsed(t), console.table ? console.table(p) : e.each(p, function(e, t) {
								console.log(t.Name + ": " + t["Execution Time"] + "ms")
							}), console.groupEnd()), p = []
						}
					},
					invoke: function(t, n, o) {
						var a, s, l, c = z;
						return n = n || h, o = L || o, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), a = t.length - 1, e.each(t, function(n, o) {
							var r = n != a ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
							if (e.isPlainObject(c[r]) && n != a) c = c[r];
							else {
								if (c[r] !== i) return s = c[r], !1;
								if (!e.isPlainObject(c[o]) || n == a) return c[o] !== i ? (s = c[o], !1) : (C.error(D.method, t), !1);
								c = c[o]
							}
						})), e.isFunction(s) ? l = s.apply(o, n) : s !== i && (l = s), e.isArray(r) ? r.push(l) : r !== i ? r = [r, l] : l !== i && (r = l), s
					}
				}, g ? (z === i && C.initialize(), C.invoke(m)) : (z !== i && C.invoke("destroy"), C.initialize())
			}), r !== i ? r : this
		}, e.fn.sidebar.settings = {
			name: "Sidebar",
			namespace: "sidebar",
			debug: !1,
			verbose: !1,
			performance: !0,
			transition: "auto",
			mobileTransition: "auto",
			defaultTransition: {
				computer: {
					left: "uncover",
					right: "uncover",
					top: "overlay",
					bottom: "overlay"
				},
				mobile: {
					left: "uncover",
					right: "uncover",
					top: "overlay",
					bottom: "overlay"
				}
			},
			context: "body",
			exclusive: !1,
			closable: !0,
			dimPage: !0,
			scrollLock: !1,
			returnScroll: !1,
			delaySetup: !1,
			duration: 500,
			onChange: function() {},
			onShow: function() {},
			onHide: function() {},
			onHidden: function() {},
			onVisible: function() {},
			className: {
				active: "active",
				animating: "animating",
				dimmed: "dimmed",
				ios: "ios",
				pushable: "pushable",
				pushed: "pushed",
				right: "right",
				top: "top",
				left: "left",
				bottom: "bottom",
				visible: "visible"
			},
			selector: {
				fixed: ".fixed",
				omitted: "script, link, style, .ui.modal, .ui.dimmer, .ui.nag, .ui.fixed",
				pusher: ".pusher",
				sidebar: ".ui.sidebar"
			},
			regExp: {
				ios: /(iPad|iPhone|iPod)/g,
				mobileChrome: /(CriOS)/g,
				mobile: /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/g
			},
			error: {
				method: "The method you called is not defined.",
				pusher: "Had to add pusher element. For optimal performance make sure body content is inside a pusher element",
				movedSidebar: "Had to move sidebar. For optimal performance make sure sidebar and pusher are direct children of your body tag",
				overlay: "The overlay setting is no longer supported, use animation: overlay",
				notFound: "There were no elements that matched the specified selector"
			}
		}
	}(jQuery, window, document),
	function(e, t, n, i) {
		e.site = e.fn.site = function(o) {
			var r, a, s = (new Date).getTime(),
				l = [],
				c = arguments[0],
				u = "string" == typeof c,
				d = [].slice.call(arguments, 1),
				f = e.isPlainObject(o) ? e.extend(!0, {}, e.site.settings, o) : e.extend({}, e.site.settings),
				p = f.namespace,
				m = f.error,
				g = "module-" + p,
				h = e(n),
				v = h,
				b = this,
				y = v.data(g);
			return r = {
				initialize: function() {
					r.instantiate()
				},
				instantiate: function() {
					r.verbose("Storing instance of site", r), y = r, v.data(g, r)
				},
				normalize: function() {
					r.fix.console(), r.fix.requestAnimationFrame()
				},
				fix: {
					console: function() {
						r.debug("Normalizing window.console"), (console === i || console.log === i) && (r.verbose("Console not available, normalizing events"), r.disable.console()), ("undefined" == typeof console.group || "undefined" == typeof console.groupEnd || "undefined" == typeof console.groupCollapsed) && (r.verbose("Console group not available, normalizing events"), t.console.group = function() {}, t.console.groupEnd = function() {}, t.console.groupCollapsed = function() {}), "undefined" == typeof console.markTimeline && (r.verbose("Mark timeline not available, normalizing events"), t.console.markTimeline = function() {})
					},
					consoleClear: function() {
						r.debug("Disabling programmatic console clearing"), t.console.clear = function() {}
					},
					requestAnimationFrame: function() {
						r.debug("Normalizing requestAnimationFrame"), t.requestAnimationFrame === i && (r.debug("RequestAnimationFrame not available, normailizing event"), t.requestAnimationFrame = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
							setTimeout(e, 0)
						})
					}
				},
				moduleExists: function(t) {
					return e.fn[t] !== i && e.fn[t].settings !== i
				},
				enabled: {
					modules: function(t) {
						var n = [];
						return t = t || f.modules, e.each(t, function(e, t) {
							r.moduleExists(t) && n.push(t)
						}), n
					}
				},
				disabled: {
					modules: function(t) {
						var n = [];
						return t = t || f.modules, e.each(t, function(e, t) {
							r.moduleExists(t) || n.push(t)
						}), n
					}
				},
				change: {
					setting: function(t, n, o, a) {
						o = "string" == typeof o ? "all" === o ? f.modules : [o] : o || f.modules, a = a !== i ? a : !0, e.each(o, function(i, o) {
							var s, l = r.moduleExists(o) ? e.fn[o].settings.namespace || !1 : !0;
							r.moduleExists(o) && (r.verbose("Changing default setting", t, n, o), e.fn[o].settings[t] = n, a && l && (s = e(":data(module-" + l + ")"), s.length > 0 && (r.verbose("Modifying existing settings", s), s[o]("setting", t, n))))
						})
					},
					settings: function(t, n, o) {
						n = "string" == typeof n ? [n] : n || f.modules, o = o !== i ? o : !0, e.each(n, function(n, i) {
							var a;
							r.moduleExists(i) && (r.verbose("Changing default setting", t, i), e.extend(!0, e.fn[i].settings, t), o && p && (a = e(":data(module-" + p + ")"), a.length > 0 && (r.verbose("Modifying existing settings", a), a[i]("setting", t))))
						})
					}
				},
				enable: {
					console: function() {
						r.console(!0)
					},
					debug: function(e, t) {
						e = e || f.modules, r.debug("Enabling debug for modules", e), r.change.setting("debug", !0, e, t)
					},
					verbose: function(e, t) {
						e = e || f.modules, r.debug("Enabling verbose debug for modules", e), r.change.setting("verbose", !0, e, t)
					}
				},
				disable: {
					console: function() {
						r.console(!1)
					},
					debug: function(e, t) {
						e = e || f.modules, r.debug("Disabling debug for modules", e), r.change.setting("debug", !1, e, t)
					},
					verbose: function(e, t) {
						e = e || f.modules, r.debug("Disabling verbose debug for modules", e), r.change.setting("verbose", !1, e, t)
					}
				},
				console: function(e) {
					if (e) {
						if (y.cache.console === i) return void r.error(m.console);
						r.debug("Restoring console function"), t.console = y.cache.console
					} else r.debug("Disabling console function"), y.cache.console = t.console, t.console = {
						clear: function() {},
						error: function() {},
						group: function() {},
						groupCollapsed: function() {},
						groupEnd: function() {},
						info: function() {},
						log: function() {},
						markTimeline: function() {},
						warn: function() {}
					}
				},
				destroy: function() {
					r.verbose("Destroying previous site for", v), v.removeData(g)
				},
				cache: {},
				setting: function(t, n) {
					if (e.isPlainObject(t)) e.extend(!0, f, t);
					else {
						if (n === i) return f[t];
						f[t] = n
					}
				},
				internal: function(t, n) {
					if (e.isPlainObject(t)) e.extend(!0, r, t);
					else {
						if (n === i) return r[t];
						r[t] = n
					}
				},
				debug: function() {
					f.debug && (f.performance ? r.performance.log(arguments) : (r.debug = Function.prototype.bind.call(console.info, console, f.name + ":"), r.debug.apply(console, arguments)))
				},
				verbose: function() {
					f.verbose && f.debug && (f.performance ? r.performance.log(arguments) : (r.verbose = Function.prototype.bind.call(console.info, console, f.name + ":"), r.verbose.apply(console, arguments)))
				},
				error: function() {
					r.error = Function.prototype.bind.call(console.error, console, f.name + ":"), r.error.apply(console, arguments)
				},
				performance: {
					log: function(e) {
						var t, n, i;
						f.performance && (t = (new Date).getTime(), i = s || t, n = t - i, s = t, l.push({
							Element: b,
							Name: e[0],
							Arguments: [].slice.call(e, 1) || "",
							"Execution Time": n
						})), clearTimeout(r.performance.timer), r.performance.timer = setTimeout(r.performance.display, 500)
					},
					display: function() {
						var t = f.name + ":",
							n = 0;
						s = !1, clearTimeout(r.performance.timer), e.each(l, function(e, t) {
							n += t["Execution Time"]
						}), t += " " + n + "ms", (console.group !== i || console.table !== i) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function(e, t) {
							console.log(t.Name + ": " + t["Execution Time"] + "ms")
						}), console.groupEnd()), l = []
					}
				},
				invoke: function(t, n, o) {
					var s, l, c, u = y;
					return n = n || d, o = b || o, "string" == typeof t && u !== i && (t = t.split(/[\. ]/), s = t.length - 1, e.each(t, function(n, o) {
						var a = n != s ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
						if (e.isPlainObject(u[a]) && n != s) u = u[a];
						else {
							if (u[a] !== i) return l = u[a], !1;
							if (!e.isPlainObject(u[o]) || n == s) return u[o] !== i ? (l = u[o], !1) : (r.error(m.method, t), !1);
							u = u[o]
						}
					})), e.isFunction(l) ? c = l.apply(o, n) : l !== i && (c = l), e.isArray(a) ? a.push(c) : a !== i ? a = [a, c] : c !== i && (a = c), l
				}
			}, u ? (y === i && r.initialize(), r.invoke(c)) : (y !== i && r.destroy(), r.initialize()), a !== i ? a : this
		}, e.site.settings = {
			name: "Site",
			namespace: "site",
			error: {
				console: "Console cannot be restored, most likely it was overwritten outside of module",
				method: "The method you called is not defined."
			},
			debug: !1,
			verbose: !1,
			performance: !0,
			modules: ["accordion", "api", "checkbox", "dimmer", "dropdown", "embed", "form", "modal", "nag", "popup", "rating", "shape", "sidebar", "state", "sticky", "tab", "transition", "visit", "visibility"],
			siteNamespace: "site",
			namespaceStub: {
				cache: {},
				config: {},
				sections: {},
				section: {},
				utilities: {}
			}
		}, e.extend(e.expr[":"], {
			data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
				return function(n) {
					return !!e.data(n, t)
				}
			}) : function(t, n, i) {
				return !!e.data(t, i[3])
			}
		})
	}(jQuery, window, document),
	function(e, t, n, i) {
		"use strict";
		e.fn.state = function(t) {
			var o, r = e(this),
				a = r.selector || "",
				s = ("ontouchstart" in n.documentElement, (new Date).getTime()),
				l = [],
				c = arguments[0],
				u = "string" == typeof c,
				d = [].slice.call(arguments, 1);
			return r.each(function() {
				var n, f = e.isPlainObject(t) ? e.extend(!0, {}, e.fn.state.settings, t) : e.extend({}, e.fn.state.settings),
					p = f.error,
					m = f.metadata,
					g = f.className,
					h = f.namespace,
					v = f.states,
					b = f.text,
					y = "." + h,
					x = h + "-module",
					w = e(this),
					C = this,
					k = w.data(x);
				n = {
					initialize: function() {
						n.verbose("Initializing module"), f.automatic && n.add.defaults(), f.context && "" !== a ? e(f.context).on(a, "mouseenter" + y, n.change.text).on(a, "mouseleave" + y, n.reset.text).on(a, "click" + y, n.toggle.state) : w.on("mouseenter" + y, n.change.text).on("mouseleave" + y, n.reset.text).on("click" + y, n.toggle.state), n.instantiate()
					},
					instantiate: function() {
						n.verbose("Storing instance of module", n), k = n, w.data(x, n)
					},
					destroy: function() {
						n.verbose("Destroying previous module", k), w.off(y).removeData(x)
					},
					refresh: function() {
						n.verbose("Refreshing selector cache"), w = e(C)
					},
					add: {
						defaults: function() {
							var o = t && e.isPlainObject(t.states) ? t.states : {};
							e.each(f.defaults, function(t, r) {
								n.is[t] !== i && n.is[t]() && (n.verbose("Adding default states", t, C), e.extend(f.states, r, o))
							})
						}
					},
					is: {
						active: function() {
							return w.hasClass(g.active)
						},
						loading: function() {
							return w.hasClass(g.loading)
						},
						inactive: function() {
							return !w.hasClass(g.active)
						},
						state: function(e) {
							return g[e] === i ? !1 : w.hasClass(g[e])
						},
						enabled: function() {
							return !w.is(f.filter.active)
						},
						disabled: function() {
							return w.is(f.filter.active)
						},
						textEnabled: function() {
							return !w.is(f.filter.text)
						},
						button: function() {
							return w.is(".button:not(a, .submit)")
						},
						input: function() {
							return w.is("input")
						},
						progress: function() {
							return w.is(".ui.progress")
						}
					},
					allow: function(e) {
						n.debug("Now allowing state", e), v[e] = !0
					},
					disallow: function(e) {
						n.debug("No longer allowing", e), v[e] = !1
					},
					allows: function(e) {
						return v[e] || !1
					},
					enable: function() {
						w.removeClass(g.disabled)
					},
					disable: function() {
						w.addClass(g.disabled)
					},
					setState: function(e) {
						n.allows(e) && w.addClass(g[e])
					},
					removeState: function(e) {
						n.allows(e) && w.removeClass(g[e])
					},
					toggle: {
						state: function() {
							var t, o;
							if (n.allows("active") && n.is.enabled()) {
								if (n.refresh(), e.fn.api !== i)
									if (t = w.api("get request"), o = w.api("was cancelled")) n.debug("API Request cancelled by beforesend"), f.activateTest = function() {
										return !1
									}, f.deactivateTest = function() {
										return !1
									};
									else if (t) return void n.listenTo(t);
								n.change.state()
							}
						}
					},
					listenTo: function(t) {
						n.debug("API request detected, waiting for state signal", t), t && (b.loading && n.update.text(b.loading), e.when(t).then(function() {
							"resolved" == t.state() ? (n.debug("API request succeeded"), f.activateTest = function() {
								return !0
							}, f.deactivateTest = function() {
								return !0
							}) : (n.debug("API request failed"), f.activateTest = function() {
								return !1
							}, f.deactivateTest = function() {
								return !1
							}), n.change.state()
						}))
					},
					change: {
						state: function() {
							n.debug("Determining state change direction"), n.is.inactive() ? n.activate() : n.deactivate(), f.sync && n.sync(), f.onChange.call(C)
						},
						text: function() {
							n.is.textEnabled() && (n.is.disabled() ? (n.verbose("Changing text to disabled text", b.hover), n.update.text(b.disabled)) : n.is.active() ? b.hover ? (n.verbose("Changing text to hover text", b.hover), n.update.text(b.hover)) : b.deactivate && (n.verbose("Changing text to deactivating text", b.deactivate), n.update.text(b.deactivate)) : b.hover ? (n.verbose("Changing text to hover text", b.hover), n.update.text(b.hover)) : b.activate && (n.verbose("Changing text to activating text", b.activate), n.update.text(b.activate)))
						}
					},
					activate: function() {
						f.activateTest.call(C) && (n.debug("Setting state to active"), w.addClass(g.active), n.update.text(b.active), f.onActivate.call(C))
					},
					deactivate: function() {
						f.deactivateTest.call(C) && (n.debug("Setting state to inactive"), w.removeClass(g.active), n.update.text(b.inactive), f.onDeactivate.call(C))
					},
					sync: function() {
						n.verbose("Syncing other buttons to current state"), r.not(w).state(n.is.active() ? "activate" : "deactivate")
					},
					get: {
						text: function() {
							return f.selector.text ? w.find(f.selector.text).text() : w.html()
						},
						textFor: function(e) {
							return b[e] || !1
						}
					},
					flash: {
						text: function(e, t, i) {
							var o = n.get.text();
							n.debug("Flashing text message", e, t), e = e || f.text.flash, t = t || f.flashDuration, i = i || function() {}, n.update.text(e), setTimeout(function() {
								n.update.text(o), i.call(C)
							}, t)
						}
					},
					reset: {
						text: function() {
							var e = b.active || w.data(m.storedText),
								t = b.inactive || w.data(m.storedText);
							n.is.textEnabled() && (n.is.active() && e ? (n.verbose("Resetting active text", e), n.update.text(e)) : t && (n.verbose("Resetting inactive text", e), n.update.text(t)))
						}
					},
					update: {
						text: function(e) {
							var t = n.get.text();
							e && e !== t ? (n.debug("Updating text", e), f.selector.text ? w.data(m.storedText, e).find(f.selector.text).text(e) : w.data(m.storedText, e).html(e)) : n.debug("Text is already set, ignoring update", e)
						}
					},
					setting: function(t, o) {
						if (n.debug("Changing setting", t, o), e.isPlainObject(t)) e.extend(!0, f, t);
						else {
							if (o === i) return f[t];
							f[t] = o
						}
					},
					internal: function(t, o) {
						if (e.isPlainObject(t)) e.extend(!0, n, t);
						else {
							if (o === i) return n[t];
							n[t] = o
						}
					},
					debug: function() {
						f.debug && (f.performance ? n.performance.log(arguments) : (n.debug = Function.prototype.bind.call(console.info, console, f.name + ":"), n.debug.apply(console, arguments)))
					},
					verbose: function() {
						f.verbose && f.debug && (f.performance ? n.performance.log(arguments) : (n.verbose = Function.prototype.bind.call(console.info, console, f.name + ":"), n.verbose.apply(console, arguments)))
					},
					error: function() {
						n.error = Function.prototype.bind.call(console.error, console, f.name + ":"), n.error.apply(console, arguments)
					},
					performance: {
						log: function(e) {
							var t, i, o;
							f.performance && (t = (new Date).getTime(), o = s || t, i = t - o, s = t, l.push({
								Name: e[0],
								Arguments: [].slice.call(e, 1) || "",
								Element: C,
								"Execution Time": i
							})), clearTimeout(n.performance.timer), n.performance.timer = setTimeout(n.performance.display, 500)
						},
						display: function() {
							var t = f.name + ":",
								o = 0;
							s = !1, clearTimeout(n.performance.timer), e.each(l, function(e, t) {
								o += t["Execution Time"]
							}), t += " " + o + "ms", a && (t += " '" + a + "'"), (console.group !== i || console.table !== i) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function(e, t) {
								console.log(t.Name + ": " + t["Execution Time"] + "ms")
							}), console.groupEnd()), l = []
						}
					},
					invoke: function(t, r, a) {
						var s, l, c, u = k;
						return r = r || d, a = C || a, "string" == typeof t && u !== i && (t = t.split(/[\. ]/), s = t.length - 1, e.each(t, function(o, r) {
							var a = o != s ? r + t[o + 1].charAt(0).toUpperCase() + t[o + 1].slice(1) : t;
							if (e.isPlainObject(u[a]) && o != s) u = u[a];
							else {
								if (u[a] !== i) return l = u[a], !1;
								if (!e.isPlainObject(u[r]) || o == s) return u[r] !== i ? (l = u[r], !1) : (n.error(p.method, t), !1);
								u = u[r]
							}
						})), e.isFunction(l) ? c = l.apply(a, r) : l !== i && (c = l), e.isArray(o) ? o.push(c) : o !== i ? o = [o, c] : c !== i && (o = c), l
					}
				}, u ? (k === i && n.initialize(), n.invoke(c)) : (k !== i && k.invoke("destroy"), n.initialize())
			}), o !== i ? o : this
		}, e.fn.state.settings = {
			name: "State",
			debug: !1,
			verbose: !1,
			namespace: "state",
			performance: !0,
			onActivate: function() {},
			onDeactivate: function() {},
			onChange: function() {},
			activateTest: function() {
				return !0
			},
			deactivateTest: function() {
				return !0
			},
			automatic: !0,
			sync: !1,
			flashDuration: 1e3,
			filter: {
				text: ".loading, .disabled",
				active: ".disabled"
			},
			context: !1,
			error: {
				beforeSend: "The before send function has cancelled state change",
				method: "The method you called is not defined."
			},
			metadata: {
				promise: "promise",
				storedText: "stored-text"
			},
			className: {
				active: "active",
				disabled: "disabled",
				error: "error",
				loading: "loading",
				success: "success",
				warning: "warning"
			},
			selector: {
				text: !1
			},
			defaults: {
				input: {
					disabled: !0,
					loading: !0,
					active: !0
				},
				button: {
					disabled: !0,
					loading: !0,
					active: !0
				},
				progress: {
					active: !0,
					success: !0,
					warning: !0,
					error: !0
				}
			},
			states: {
				active: !0,
				disabled: !0,
				error: !0,
				loading: !0,
				success: !0,
				warning: !0
			},
			text: {
				disabled: !1,
				flash: !1,
				hover: !1,
				active: !1,
				inactive: !1,
				activate: !1,
				deactivate: !1
			}
		}
	}(jQuery, window, document),
	function(e, t, n, i) {
		"use strict";
		e.fn.sticky = function(n) {
			var o, r = e(this),
				a = r.selector || "",
				s = (new Date).getTime(),
				l = [],
				c = arguments[0],
				u = "string" == typeof c,
				d = [].slice.call(arguments, 1);
			return r.each(function() {
				var r, f, p, m, g = e.isPlainObject(n) ? e.extend(!0, {}, e.fn.sticky.settings, n) : e.extend({}, e.fn.sticky.settings),
					h = g.className,
					v = g.namespace,
					b = g.error,
					y = "." + v,
					x = "module-" + v,
					w = e(this),
					C = e(t),
					k = e(g.scrollContext),
					T = (w.selector || "", w.data(x)),
					S = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
						setTimeout(e, 0)
					},
					E = this;
				m = {
					initialize: function() {
						m.determineContainer(), m.determineContext(), m.verbose("Initializing sticky", g, r), m.save.positions(), m.checkErrors(), m.bind.events(), g.observeChanges && m.observeChanges(), m.instantiate()
					},
					instantiate: function() {
						m.verbose("Storing instance of module", m), T = m, w.data(x, m)
					},
					destroy: function() {
						m.verbose("Destroying previous instance"), m.reset(), p && p.disconnect(), C.off("load" + y, m.event.load).off("resize" + y, m.event.resize), k.off("scrollchange" + y, m.event.scrollchange), w.removeData(x)
					},
					observeChanges: function() {
						var e = f[0];
						"MutationObserver" in t && (p = new MutationObserver(function(e) {
							clearTimeout(m.timer), m.timer = setTimeout(function() {
								m.verbose("DOM tree modified, updating sticky menu", e), m.refresh()
							}, 100)
						}), p.observe(E, {
							childList: !0,
							subtree: !0
						}), p.observe(e, {
							childList: !0,
							subtree: !0
						}), m.debug("Setting up mutation observer", p))
					},
					determineContainer: function() {
						r = w.offsetParent()
					},
					determineContext: function() {
						return f = g.context ? e(g.context) : r, 0 === f.length ? void m.error(b.invalidContext, g.context, w) : void 0
					},
					checkErrors: function() {
						return m.is.hidden() && m.error(b.visible, w), m.cache.element.height > m.cache.context.height ? (m.reset(), void m.error(b.elementSize, w)) : void 0
					},
					bind: {
						events: function() {
							C.on("load" + y, m.event.load).on("resize" + y, m.event.resize), k.off("scroll" + y).on("scroll" + y, m.event.scroll).on("scrollchange" + y, m.event.scrollchange)
						}
					},
					event: {
						load: function() {
							m.verbose("Page contents finished loading"), S(m.refresh)
						},
						resize: function() {
							m.verbose("Window resized"), S(m.refresh)
						},
						scroll: function() {
							S(function() {
								k.triggerHandler("scrollchange" + y, k.scrollTop())
							})
						},
						scrollchange: function(e, t) {
							m.stick(t), g.onScroll.call(E)
						}
					},
					refresh: function(e) {
						m.reset(), g.context || m.determineContext(), e && m.determineContainer(), m.save.positions(), m.stick(), g.onReposition.call(E)
					},
					supports: {
						sticky: function() {
							{
								var t = e("<div/>");
								t[0]
							}
							return t.addClass(h.supported), t.css("position").match("sticky")
						}
					},
					save: {
						lastScroll: function(e) {
							m.lastScroll = e
						},
						elementScroll: function(e) {
							m.elementScroll = e
						},
						positions: function() {
							{
								var e = {
										height: C.height()
									},
									t = {
										margin: {
											top: parseInt(w.css("margin-top"), 10),
											bottom: parseInt(w.css("margin-bottom"), 10)
										},
										offset: w.offset(),
										width: w.outerWidth(),
										height: w.outerHeight()
									},
									n = {
										offset: f.offset(),
										height: f.outerHeight()
									};
								({
									height: r.outerHeight()
								})
							}
							m.cache = {
								fits: t.height < e.height,
								window: {
									height: e.height
								},
								element: {
									margin: t.margin,
									top: t.offset.top - t.margin.top,
									left: t.offset.left,
									width: t.width,
									height: t.height,
									bottom: t.offset.top + t.height
								},
								context: {
									top: n.offset.top,
									height: n.height,
									bottom: n.offset.top + n.height
								}
							}, m.set.containerSize(), m.set.size(), m.stick(), m.debug("Caching element positions", m.cache)
						}
					},
					get: {
						direction: function(e) {
							var t = "down";
							return e = e || k.scrollTop(), m.lastScroll !== i && (m.lastScroll < e ? t = "down" : m.lastScroll > e && (t = "up")), t
						},
						scrollChange: function(e) {
							return e = e || k.scrollTop(), m.lastScroll ? e - m.lastScroll : 0
						},
						currentElementScroll: function() {
							return m.elementScroll ? m.elementScroll : m.is.top() ? Math.abs(parseInt(w.css("top"), 10)) || 0 : Math.abs(parseInt(w.css("bottom"), 10)) || 0
						},
						elementScroll: function(e) {
							e = e || k.scrollTop();
							var t = m.cache.element,
								n = m.cache.window,
								i = m.get.scrollChange(e),
								o = t.height - n.height + g.offset,
								r = m.get.currentElementScroll(),
								a = r + i;
							return r = m.cache.fits || 0 > a ? 0 : a > o ? o : a
						}
					},
					remove: {
						lastScroll: function() {
							delete m.lastScroll
						},
						elementScroll: function() {
							delete m.elementScroll
						},
						offset: function() {
							w.css("margin-top", "")
						}
					},
					set: {
						offset: function() {
							m.verbose("Setting offset on element", g.offset), w.css("margin-top", g.offset)
						},
						containerSize: function() {
							var e = r.get(0).tagName;
							"HTML" === e || "body" == e ? m.determineContainer() : Math.abs(r.outerHeight() - m.cache.context.height) > g.jitter && (m.debug("Context has padding, specifying exact height for container", m.cache.context.height), r.css({
								height: m.cache.context.height
							}))
						},
						minimumSize: function() {
							var e = m.cache.element;
							r.css("min-height", e.height)
						},
						scroll: function(e) {
							m.debug("Setting scroll on element", e), m.elementScroll != e && (m.is.top() && w.css("bottom", "").css("top", -e), m.is.bottom() && w.css("top", "").css("bottom", e))
						},
						size: function() {
							0 !== m.cache.element.height && 0 !== m.cache.element.width && w.css({
								width: m.cache.element.width,
								height: m.cache.element.height
							})
						}
					},
					is: {
						top: function() {
							return w.hasClass(h.top)
						},
						bottom: function() {
							return w.hasClass(h.bottom)
						},
						initialPosition: function() {
							return !m.is.fixed() && !m.is.bound()
						},
						hidden: function() {
							return !w.is(":visible")
						},
						bound: function() {
							return w.hasClass(h.bound)
						},
						fixed: function() {
							return w.hasClass(h.fixed)
						}
					},
					stick: function(e) {
						var t = e || k.scrollTop(),
							n = m.cache,
							i = n.fits,
							o = n.element,
							r = n.window,
							a = n.context,
							s = m.is.bottom() && g.pushing ? g.bottomOffset : g.offset,
							e = {
								top: t + s,
								bottom: t + s + r.height
							},
							l = (m.get.direction(e.top), i ? 0 : m.get.elementScroll(e.top)),
							c = !i,
							u = 0 !== o.height;
						u && (m.is.initialPosition() ? e.top > a.bottom ? (m.debug("Element bottom of container"), m.bindBottom()) : e.top > o.top && (m.debug("Element passed, fixing element to page"), o.height + e.top - l > a.bottom ? m.bindBottom() : m.fixTop()) : m.is.fixed() ? m.is.top() ? e.top < o.top ? (m.debug("Fixed element reached top of container"), m.setInitialPosition()) : o.height + e.top - l > a.bottom ? (m.debug("Fixed element reached bottom of container"), m.bindBottom()) : c && (m.set.scroll(l), m.save.lastScroll(e.top), m.save.elementScroll(l)) : m.is.bottom() && (e.bottom - o.height < o.top ? (m.debug("Bottom fixed rail has reached top of container"), m.setInitialPosition()) : e.bottom > a.bottom ? (m.debug("Bottom fixed rail has reached bottom of container"), m.bindBottom()) : c && (m.set.scroll(l), m.save.lastScroll(e.top), m.save.elementScroll(l))) : m.is.bottom() && (g.pushing ? m.is.bound() && e.bottom < a.bottom && (m.debug("Fixing bottom attached element to bottom of browser."), m.fixBottom()) : m.is.bound() && e.top < a.bottom - o.height && (m.debug("Fixing bottom attached element to top of browser."), m.fixTop())))
					},
					bindTop: function() {
						m.debug("Binding element to top of parent container"), m.remove.offset(), w.css({
							left: "",
							top: "",
							marginBottom: ""
						}).removeClass(h.fixed).removeClass(h.bottom).addClass(h.bound).addClass(h.top), g.onTop.call(E), g.onUnstick.call(E)
					},
					bindBottom: function() {
						m.debug("Binding element to bottom of parent container"), m.remove.offset(), w.css({
							left: "",
							top: ""
						}).removeClass(h.fixed).removeClass(h.top).addClass(h.bound).addClass(h.bottom), g.onBottom.call(E), g.onUnstick.call(E)
					},
					setInitialPosition: function() {
						m.unfix(), m.unbind()
					},
					fixTop: function() {
						m.debug("Fixing element to top of page"), m.set.minimumSize(), m.set.offset(), w.css({
							left: m.cache.element.left,
							bottom: "",
							marginBottom: ""
						}).removeClass(h.bound).removeClass(h.bottom).addClass(h.fixed).addClass(h.top), g.onStick.call(E)
					},
					fixBottom: function() {
						m.debug("Sticking element to bottom of page"), m.set.minimumSize(), m.set.offset(), w.css({
							left: m.cache.element.left,
							bottom: "",
							marginBottom: ""
						}).removeClass(h.bound).removeClass(h.top).addClass(h.fixed).addClass(h.bottom), g.onStick.call(E)
					},
					unbind: function() {
						m.debug("Removing absolute position on element"), m.remove.offset(), w.removeClass(h.bound).removeClass(h.top).removeClass(h.bottom)
					},
					unfix: function() {
						m.debug("Removing fixed position on element"), m.remove.offset(), w.removeClass(h.fixed).removeClass(h.top).removeClass(h.bottom), g.onUnstick.call(E)
					},
					reset: function() {
						m.debug("Reseting elements position"), m.unbind(), m.unfix(), m.resetCSS(), m.remove.offset(), m.remove.lastScroll()
					},
					resetCSS: function() {
						w.css({
							width: "",
							height: ""
						}), r.css({
							height: ""
						})
					},
					setting: function(t, n) {
						if (e.isPlainObject(t)) e.extend(!0, g, t);
						else {
							if (n === i) return g[t];
							g[t] = n
						}
					},
					internal: function(t, n) {
						if (e.isPlainObject(t)) e.extend(!0, m, t);
						else {
							if (n === i) return m[t];
							m[t] = n
						}
					},
					debug: function() {
						g.debug && (g.performance ? m.performance.log(arguments) : (m.debug = Function.prototype.bind.call(console.info, console, g.name + ":"), m.debug.apply(console, arguments)))
					},
					verbose: function() {
						g.verbose && g.debug && (g.performance ? m.performance.log(arguments) : (m.verbose = Function.prototype.bind.call(console.info, console, g.name + ":"), m.verbose.apply(console, arguments)))
					},
					error: function() {
						m.error = Function.prototype.bind.call(console.error, console, g.name + ":"), m.error.apply(console, arguments)
					},
					performance: {
						log: function(e) {
							var t, n, i;
							g.performance && (t = (new Date).getTime(), i = s || t, n = t - i, s = t, l.push({
								Name: e[0],
								Arguments: [].slice.call(e, 1) || "",
								Element: E,
								"Execution Time": n
							})), clearTimeout(m.performance.timer), m.performance.timer = setTimeout(m.performance.display, 0)
						},
						display: function() {
							var t = g.name + ":",
								n = 0;
							s = !1, clearTimeout(m.performance.timer), e.each(l, function(e, t) {
								n += t["Execution Time"]
							}), t += " " + n + "ms", a && (t += " '" + a + "'"), (console.group !== i || console.table !== i) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function(e, t) {
								console.log(t.Name + ": " + t["Execution Time"] + "ms")
							}), console.groupEnd()), l = []
						}
					},
					invoke: function(t, n, r) {
						var a, s, l, c = T;
						return n = n || d, r = E || r, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), a = t.length - 1, e.each(t, function(n, o) {
							var r = n != a ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
							if (e.isPlainObject(c[r]) && n != a) c = c[r];
							else {
								if (c[r] !== i) return s = c[r], !1;
								if (!e.isPlainObject(c[o]) || n == a) return c[o] !== i ? (s = c[o], !1) : !1;
								c = c[o]
							}
						})), e.isFunction(s) ? l = s.apply(r, n) : s !== i && (l = s), e.isArray(o) ? o.push(l) : o !== i ? o = [o, l] : l !== i && (o = l), s
					}
				}, u ? (T === i && m.initialize(), m.invoke(c)) : (T !== i && T.invoke("destroy"), m.initialize())
			}), o !== i ? o : this
		}, e.fn.sticky.settings = {
			name: "Sticky",
			namespace: "sticky",
			debug: !1,
			verbose: !0,
			performance: !0,
			pushing: !1,
			context: !1,
			scrollContext: t,
			offset: 0,
			bottomOffset: 0,
			jitter: 5,
			observeChanges: !1,
			onReposition: function() {},
			onScroll: function() {},
			onStick: function() {},
			onUnstick: function() {},
			onTop: function() {},
			onBottom: function() {},
			error: {
				container: "Sticky element must be inside a relative container",
				visible: "Element is hidden, you must call refresh after element becomes visible",
				method: "The method you called is not defined.",
				invalidContext: "Context specified does not exist",
				elementSize: "Sticky element is larger than its container, cannot create sticky."
			},
			className: {
				bound: "bound",
				fixed: "fixed",
				supported: "native",
				top: "top",
				bottom: "bottom"
			}
		}
	}(jQuery, window, document),
	function(e, t, n, i) {
		"use strict";
		e.fn.tab = function(o) {
			var r, a = e(e.isFunction(this) ? t : this),
				s = a.selector || "",
				l = (new Date).getTime(),
				c = [],
				u = arguments[0],
				d = "string" == typeof u,
				f = [].slice.call(arguments, 1),
				p = !1;
			return a.each(function() {
				var m, g, h, v, b, y, x = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.tab.settings, o) : e.extend({}, e.fn.tab.settings),
					w = x.className,
					C = x.metadata,
					k = x.selector,
					T = x.error,
					S = "." + x.namespace,
					E = "module-" + x.namespace,
					A = e(this),
					D = {},
					j = !0,
					R = 0,
					F = this,
					P = A.data(E);
				b = {
					initialize: function() {
						b.debug("Initializing tab menu item", A), b.fix.callbacks(), b.determineTabs(), b.debug("Determining tabs", x.context, g), x.auto && b.set.auto(), b.bind.events(), x.history && !p && (b.initializeHistory(), p = !0), b.instantiate()
					},
					instantiate: function() {
						b.verbose("Storing instance of module", b), P = b, A.data(E, b)
					},
					destroy: function() {
						b.debug("Destroying tabs", A), A.removeData(E).off(S)
					},
					bind: {
						events: function() {
							e.isWindow(F) || (b.debug("Attaching tab activation events to element", A), A.on("click" + S, b.event.click))
						}
					},
					determineTabs: function() {
						var t;
						"parent" === x.context ? (A.closest(k.ui).length > 0 ? (t = A.closest(k.ui), b.verbose("Using closest UI element as parent", t)) : t = A, m = t.parent(), b.verbose("Determined parent element for creating context", m)) : x.context ? (m = e(x.context), b.verbose("Using selector for tab context", x.context, m)) : m = e("body"), x.childrenOnly ? (g = m.children(k.tabs), b.debug("Searching tab context children for tabs", m, g)) : (g = m.find(k.tabs), b.debug("Searching tab context for tabs", m, g))
					},
					fix: {
						callbacks: function() {
							e.isPlainObject(o) && (o.onTabLoad || o.onTabInit) && (o.onTabLoad && (o.onLoad = o.onTabLoad, delete o.onTabLoad, b.error(T.legacyLoad, o.onLoad)), o.onTabInit && (o.onFirstLoad = o.onTabInit, delete o.onTabInit, b.error(T.legacyInit, o.onFirstLoad)), x = e.extend(!0, {}, e.fn.tab.settings, o))
						}
					},
					initializeHistory: function() {
						if (b.debug("Initializing page state"), e.address === i) return b.error(T.state), !1;
						if ("state" == x.historyType) {
							if (b.debug("Using HTML5 to manage state"), x.path === !1) return b.error(T.path), !1;
							e.address.history(!0).state(x.path)
						}
						e.address.bind("change", b.event.history.change)
					},
					event: {
						click: function(t) {
							var n = e(this).data(C.tab);
							n !== i ? (x.history ? (b.verbose("Updating page state", t), e.address.value(n)) : (b.verbose("Changing tab", t), b.changeTab(n)), t.preventDefault()) : b.debug("No tab specified")
						},
						history: {
							change: function(t) {
								var n = t.pathNames.join("/") || b.get.initialPath(),
									o = x.templates.determineTitle(n) || !1;
								b.performance.display(), b.debug("History change event", n, t), y = t, n !== i && b.changeTab(n), o && e.address.title(o)
							}
						}
					},
					refresh: function() {
						h && (b.debug("Refreshing tab", h), b.changeTab(h))
					},
					cache: {
						read: function(e) {
							return e !== i ? D[e] : !1
						},
						add: function(e, t) {
							e = e || h, b.debug("Adding cached content for", e), D[e] = t
						},
						remove: function(e) {
							e = e || h, b.debug("Removing cached content for", e), delete D[e]
						}
					},
					set: {
						auto: function() {
							var t = "string" == typeof x.path ? x.path.replace(/\/$/, "") + "/{$tab}" : "/{$tab}";
							b.verbose("Setting up automatic tab retrieval from server", t), e.isPlainObject(x.apiSettings) ? x.apiSettings.url = t : x.apiSettings = {
								url: t
							}
						},
						loading: function(e) {
							var t = b.get.tabElement(e),
								n = t.hasClass(w.loading);
							n || (b.verbose("Setting loading state for", t), t.addClass(w.loading).siblings(g).removeClass(w.active + " " + w.loading), t.length > 0 && x.onRequest.call(t[0], e))
						},
						state: function(t) {
							e.address.value(t)
						}
					},
					changeTab: function(n) {
						var i = t.history && t.history.pushState,
							o = i && x.ignoreFirstLoad && j,
							r = x.auto || e.isPlainObject(x.apiSettings),
							a = r && !o ? b.utilities.pathToArray(n) : b.get.defaultPathArray(n);
						n = b.utilities.arrayToPath(a), e.each(a, function(t, i) {
							var s, l, c, u, d = a.slice(0, t + 1),
								f = b.utilities.arrayToPath(d),
								p = b.is.tab(f),
								g = t + 1 == a.length,
								C = b.get.tabElement(f);
							if (b.verbose("Looking for tab", i), p) {
								if (b.verbose("Tab was found", i), h = f, v = b.utilities.filterArray(a, d), g ? u = !0 : (l = a.slice(0, t + 2), c = b.utilities.arrayToPath(l), u = !b.is.tab(c), u && b.verbose("Tab parameters found", l)), u && r) return o ? (b.debug("Ignoring remote content on first tab load", f), j = !1, b.cache.add(n, C.html()), b.activate.all(f), x.onFirstLoad.call(C[0], f, v, y), x.onLoad.call(C[0], f, v, y)) : (b.activate.navigation(f), b.fetch.content(f, n)), !1;
								b.debug("Opened local tab", f), b.activate.all(f), b.cache.read(f) || (b.cache.add(f, !0), b.debug("First time tab loaded calling tab init"), x.onFirstLoad.call(C[0], f, v, y)), x.onLoad.call(C[0], f, v, y)
							} else {
								if (-1 != n.search("/") || "" === n) return b.error(T.missingTab, A, m, f), !1;
								if (s = e("#" + n + ', a[name="' + n + '"]'), f = s.closest("[data-tab]").data("tab"), C = b.get.tabElement(f), s && s.length > 0 && f) return b.debug("Anchor link used, opening parent tab", C, s), C.hasClass(w.active) || setTimeout(function() {
									b.scrollTo(s)
								}, 0), b.activate.all(f), b.cache.read(f) || (b.cache.add(f, !0), b.debug("First time tab loaded calling tab init"), x.onFirstLoad.call(C[0], f, v, y)), x.onLoad.call(C[0], f, v, y), !1
							}
						})
					},
					scrollTo: function(t) {
						var i = t && t.length > 0 ? t.offset().top : !1;
						i !== !1 && (b.debug("Forcing scroll to an in-page link in a hidden tab", i, t), e(n).scrollTop(i))
					},
					update: {
						content: function(e, t, n) {
							var o = b.get.tabElement(e),
								r = o[0];
							n = n !== i ? n : x.evaluateScripts, n ? (b.debug("Updating HTML and evaluating inline scripts", e, t), o.html(t)) : (b.debug("Updating HTML", e, t), r.innerHTML = t)
						}
					},
					fetch: {
						content: function(t, n) {
							var o, r, a = b.get.tabElement(t),
								s = {
									dataType: "html",
									on: "now",
									cache: x.alwaysRefresh,
									headers: {
										"X-Remote": !0
									},
									onSuccess: function(e) {
										b.cache.add(n, e), b.update.content(t, e), t == h ? (b.debug("Content loaded", t), b.activate.tab(t)) : b.debug("Content loaded in background", t), x.onFirstLoad.call(a[0], t, v, y), x.onLoad.call(a[0], t, v, y)
									},
									urlData: {
										tab: n
									}
								},
								l = a.api("get request") || !1,
								c = l && "pending" === l.state();
							n = n || t, r = b.cache.read(n), x.cache && r ? (b.activate.tab(t), b.debug("Adding cached content", n), "once" == x.evaluateScripts ? b.update.content(t, r, !1) : b.update.content(t, r), x.onLoad.call(a[0], t, v, y)) : c ? (b.set.loading(t), b.debug("Content is already loading", n)) : e.api !== i ? (o = e.extend(!0, {}, x.apiSettings, s), b.debug("Retrieving remote content", n, o), b.set.loading(t), a.api(o)) : b.error(T.api)
						}
					},
					activate: {
						all: function(e) {
							b.activate.tab(e), b.activate.navigation(e)
						},
						tab: function(e) {
							var t = b.get.tabElement(e),
								n = t.hasClass(w.active);
							b.verbose("Showing tab content for", t), n || (t.addClass(w.active).siblings(g).removeClass(w.active + " " + w.loading), t.length > 0 && x.onVisible.call(t[0], e))
						},
						navigation: function(e) {
							var t = b.get.navElement(e),
								n = t.hasClass(w.active);
							b.verbose("Activating tab navigation for", t, e), n || t.addClass(w.active).siblings(a).removeClass(w.active + " " + w.loading)
						}
					},
					deactivate: {
						all: function() {
							b.deactivate.navigation(), b.deactivate.tabs()
						},
						navigation: function() {
							a.removeClass(w.active)
						},
						tabs: function() {
							g.removeClass(w.active + " " + w.loading)
						}
					},
					is: {
						tab: function(e) {
							return e !== i ? b.get.tabElement(e).length > 0 : !1
						}
					},
					get: {
						initialPath: function() {
							return a.eq(0).data(C.tab) || g.eq(0).data(C.tab)
						},
						path: function() {
							return e.address.value()
						},
						defaultPathArray: function(e) {
							return b.utilities.pathToArray(b.get.defaultPath(e))
						},
						defaultPath: function(e) {
							var t = a.filter("[data-" + C.tab + '^="' + e + '/"]').eq(0),
								n = t.data(C.tab) || !1;
							if (n) {
								if (b.debug("Found default tab", n), R < x.maxDepth) return R++, b.get.defaultPath(n);
								b.error(T.recursion)
							} else b.debug("No default tabs found for", e, g);
							return R = 0, e
						},
						navElement: function(e) {
							return e = e || h, a.filter("[data-" + C.tab + '="' + e + '"]')
						},
						tabElement: function(e) {
							var t, n, i, o;
							return e = e || h, i = b.utilities.pathToArray(e), o = b.utilities.last(i), t = g.filter("[data-" + C.tab + '="' + o + '"]'), n = g.filter("[data-" + C.tab + '="' + e + '"]'), t.length > 0 ? t : n
						},
						tab: function() {
							return h
						}
					},
					utilities: {
						filterArray: function(t, n) {
							return e.grep(t, function(t) {
								return -1 == e.inArray(t, n)
							})
						},
						last: function(t) {
							return e.isArray(t) ? t[t.length - 1] : !1
						},
						pathToArray: function(e) {
							return e === i && (e = h), "string" == typeof e ? e.split("/") : [e]
						},
						arrayToPath: function(t) {
							return e.isArray(t) ? t.join("/") : !1
						}
					},
					setting: function(t, n) {
						if (b.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, x, t);
						else {
							if (n === i) return x[t];
							x[t] = n
						}
					},
					internal: function(t, n) {
						if (e.isPlainObject(t)) e.extend(!0, b, t);
						else {
							if (n === i) return b[t];
							b[t] = n
						}
					},
					debug: function() {
						x.debug && (x.performance ? b.performance.log(arguments) : (b.debug = Function.prototype.bind.call(console.info, console, x.name + ":"), b.debug.apply(console, arguments)))
					},
					verbose: function() {
						x.verbose && x.debug && (x.performance ? b.performance.log(arguments) : (b.verbose = Function.prototype.bind.call(console.info, console, x.name + ":"), b.verbose.apply(console, arguments)))
					},
					error: function() {
						b.error = Function.prototype.bind.call(console.error, console, x.name + ":"), b.error.apply(console, arguments)
					},
					performance: {
						log: function(e) {
							var t, n, i;
							x.performance && (t = (new Date).getTime(), i = l || t, n = t - i, l = t, c.push({
								Name: e[0],
								Arguments: [].slice.call(e, 1) || "",
								Element: F,
								"Execution Time": n
							})), clearTimeout(b.performance.timer), b.performance.timer = setTimeout(b.performance.display, 500)
						},
						display: function() {
							var t = x.name + ":",
								n = 0;
							l = !1, clearTimeout(b.performance.timer), e.each(c, function(e, t) {
								n += t["Execution Time"]
							}), t += " " + n + "ms", s && (t += " '" + s + "'"), (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function(e, t) {
								console.log(t.Name + ": " + t["Execution Time"] + "ms")
							}), console.groupEnd()), c = []
						}
					},
					invoke: function(t, n, o) {
						var a, s, l, c = P;
						return n = n || f, o = F || o, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), a = t.length - 1, e.each(t, function(n, o) {
							var r = n != a ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
							if (e.isPlainObject(c[r]) && n != a) c = c[r];
							else {
								if (c[r] !== i) return s = c[r], !1;
								if (!e.isPlainObject(c[o]) || n == a) return c[o] !== i ? (s = c[o], !1) : (b.error(T.method, t), !1);
								c = c[o]
							}
						})), e.isFunction(s) ? l = s.apply(o, n) : s !== i && (l = s), e.isArray(r) ? r.push(l) : r !== i ? r = [r, l] : l !== i && (r = l), s
					}
				}, d ? (P === i && b.initialize(), b.invoke(u)) : (P !== i && P.invoke("destroy"), b.initialize())
			}), r !== i ? r : this
		}, e.tab = function() {
			e(t).tab.apply(this, arguments)
		}, e.fn.tab.settings = {
			name: "Tab",
			namespace: "tab",
			debug: !1,
			verbose: !1,
			performance: !0,
			auto: !1,
			history: !1,
			historyType: "hash",
			path: !1,
			context: !1,
			childrenOnly: !1,
			maxDepth: 25,
			alwaysRefresh: !1,
			cache: !0,
			ignoreFirstLoad: !1,
			apiSettings: !1,
			evaluateScripts: "once",
			onFirstLoad: function() {},
			onLoad: function() {},
			onVisible: function() {},
			onRequest: function() {},
			templates: {
				determineTitle: function() {}
			},
			error: {
				api: "You attempted to load content without API module",
				method: "The method you called is not defined",
				missingTab: "Activated tab cannot be found. Tabs are case-sensitive.",
				noContent: "The tab you specified is missing a content url.",
				path: "History enabled, but no path was specified",
				recursion: "Max recursive depth reached",
				legacyInit: "onTabInit has been renamed to onFirstLoad in 2.0, please adjust your code.",
				legacyLoad: "onTabLoad has been renamed to onLoad in 2.0. Please adjust your code",
				state: "History requires Asual's Address library <https://github.com/asual/jquery-address>"
			},
			metadata: {
				tab: "tab",
				loaded: "loaded",
				promise: "promise"
			},
			className: {
				loading: "loading",
				active: "active"
			},
			selector: {
				tabs: ".ui.tab",
				ui: ".ui"
			}
		}
	}(jQuery, window, document),
	function(e, t, n, i) {
		"use strict";
		e.fn.transition = function() {
			{
				var o, r = e(this),
					a = r.selector || "",
					s = (new Date).getTime(),
					l = [],
					c = arguments,
					u = c[0],
					d = [].slice.call(arguments, 1),
					f = "string" == typeof u;
				t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
					setTimeout(e, 0)
				}
			}
			return r.each(function(t) {
				var p, m, g, h, v, b, y, x, w, C = e(this),
					k = this;
				w = {
					initialize: function() {
						p = w.get.settings.apply(k, c), h = p.className, g = p.error, v = p.metadata, x = "." + p.namespace, y = "module-" + p.namespace, m = C.data(y) || w, b = w.get.animationEndEvent(), f && (f = w.invoke(u)), f === !1 && (w.verbose("Converted arguments into settings object", p), p.interval ? w.delay(p.animate) : w.animate(), w.instantiate())
					},
					instantiate: function() {
						w.verbose("Storing instance of module", w), m = w, C.data(y, m)
					},
					destroy: function() {
						w.verbose("Destroying previous module for", k), C.removeData(y)
					},
					refresh: function() {
						w.verbose("Refreshing display type on next animation"), delete w.displayType
					},
					forceRepaint: function() {
						w.verbose("Forcing element repaint");
						var e = C.parent(),
							t = C.next();
						0 === t.length ? C.detach().appendTo(e) : C.detach().insertBefore(t)
					},
					repaint: function() {
						w.verbose("Repainting element");
						k.offsetWidth
					},
					delay: function(e) {
						var n, o, a = w.get.animationDirection();
						a || (a = w.can.transition() ? w.get.direction() : "static"), e = e !== i ? e : p.interval, n = "auto" == p.reverse && a == h.outward, o = n || 1 == p.reverse ? (r.length - t) * p.interval : t * p.interval, w.debug("Delaying animation by", o), setTimeout(w.animate, o)
					},
					animate: function(e) {
						if (p = e || p, !w.is.supported()) return w.error(g.support), !1;
						if (w.debug("Preparing animation", p.animation), w.is.animating()) {
							if (p.queue) return !p.allowRepeats && w.has.direction() && w.is.occurring() && w.queuing !== !0 ? w.debug("Animation is currently occurring, preventing queueing same animation", p.animation) : w.queue(p.animation), !1;
							if (!p.allowRepeats && w.is.occurring()) return w.debug("Animation is already occurring, will not execute repeated animation", p.animation), !1;
							w.debug("New animation started, completing previous early", p.animation), m.complete()
						}
						w.can.animate() ? w.set.animating(p.animation) : w.error(g.noAnimation, p.animation, k)
					},
					reset: function() {
						w.debug("Resetting animation to beginning conditions"), w.remove.animationCallbacks(), w.restore.conditions(), w.remove.animating()
					},
					queue: function(e) {
						w.debug("Queueing animation of", e), w.queuing = !0, C.one(b + ".queue" + x, function() {
							w.queuing = !1, w.repaint(), w.animate.apply(this, p)
						})
					},
					complete: function() {
						w.debug("Animation complete", p.animation), w.remove.completeCallback(), w.remove.failSafe(), w.is.looping() || (w.is.outward() ? (w.verbose("Animation is outward, hiding element"), w.restore.conditions(), w.hide()) : w.is.inward() ? (w.verbose("Animation is outward, showing element"), w.restore.conditions(), w.show()) : w.restore.conditions())
					},
					force: {
						visible: function() {
							var e = C.attr("style"),
								t = w.get.userStyle(),
								n = w.get.displayType(),
								o = t + "display: " + n + " !important;",
								r = C.css("display"),
								a = e === i || "" === e;
							r !== n ? (w.verbose("Overriding default display to show element", n), C.attr("style", o)) : a && C.removeAttr("style")
						},
						hidden: function() {
							var e = C.attr("style"),
								t = C.css("display"),
								n = e === i || "" === e;
							"none" === t || w.is.hidden() ? n && C.removeAttr("style") : (w.verbose("Overriding default display to hide element"), C.css("display", "none"))
						}
					},
					has: {
						direction: function(t) {
							var n = !1;
							return t = t || p.animation, "string" == typeof t && (t = t.split(" "), e.each(t, function(e, t) {
								(t === h.inward || t === h.outward) && (n = !0)
							})), n
						},
						inlineDisplay: function() {
							var t = C.attr("style") || "";
							return e.isArray(t.match(/display.*?;/, ""))
						}
					},
					set: {
						animating: function(e) {
							var t;
							w.remove.completeCallback(), e = e || p.animation, t = w.get.animationClass(e), w.save.animation(t), w.force.visible(), w.remove.hidden(), w.remove.direction(), w.start.animation(t)
						},
						duration: function(e, t) {
							t = t || p.duration, t = "number" == typeof t ? t + "ms" : t, (t || 0 === t) && (w.verbose("Setting animation duration", t), C.css({
								"animation-duration": t
							}))
						},
						direction: function(e) {
							e = e || w.get.direction(), e == h.inward ? w.set.inward() : w.set.outward()
						},
						looping: function() {
							w.debug("Transition set to loop"), C.addClass(h.looping)
						},
						hidden: function() {
							C.addClass(h.transition).addClass(h.hidden)
						},
						inward: function() {
							w.debug("Setting direction to inward"), C.removeClass(h.outward).addClass(h.inward)
						},
						outward: function() {
							w.debug("Setting direction to outward"), C.removeClass(h.inward).addClass(h.outward)
						},
						visible: function() {
							C.addClass(h.transition).addClass(h.visible)
						}
					},
					start: {
						animation: function(e) {
							e = e || w.get.animationClass(), w.debug("Starting tween", e), C.addClass(e).one(b + ".complete" + x, w.complete), p.useFailSafe && w.add.failSafe(), w.set.duration(p.duration), p.onStart.call(this)
						}
					},
					save: {
						animation: function(e) {
							w.cache || (w.cache = {}), w.cache.animation = e
						},
						displayType: function(e) {
							"none" !== e && C.data(v.displayType, e)
						},
						transitionExists: function(t, n) {
							e.fn.transition.exists[t] = n, w.verbose("Saving existence of transition", t, n)
						}
					},
					restore: {
						conditions: function() {
							var e = w.get.currentAnimation();
							e && (C.removeClass(e), w.verbose("Removing animation class", w.cache)), w.remove.duration()
						}
					},
					add: {
						failSafe: function() {
							var e = w.get.duration();
							w.timer = setTimeout(function() {
								C.triggerHandler(b)
							}, e + p.failSafeDelay), w.verbose("Adding fail safe timer", w.timer)
						}
					},
					remove: {
						animating: function() {
							C.removeClass(h.animating)
						},
						animationCallbacks: function() {
							w.remove.queueCallback(), w.remove.completeCallback()
						},
						queueCallback: function() {
							C.off(".queue" + x)
						},
						completeCallback: function() {
							C.off(".complete" + x)
						},
						display: function() {
							C.css("display", "")
						},
						direction: function() {
							C.removeClass(h.inward).removeClass(h.outward)
						},
						duration: function() {
							C.css("animation-duration", "")
						},
						failSafe: function() {
							w.verbose("Removing fail safe timer", w.timer), w.timer && clearTimeout(w.timer)
						},
						hidden: function() {
							C.removeClass(h.hidden)
						},
						visible: function() {
							C.removeClass(h.visible)
						},
						looping: function() {
							w.debug("Transitions are no longer looping"), w.is.looping() && (w.reset(), C.removeClass(h.looping))
						},
						transition: function() {
							C.removeClass(h.visible).removeClass(h.hidden)
						}
					},
					get: {
						settings: function(t, n, i) {
							return "object" == typeof t ? e.extend(!0, {}, e.fn.transition.settings, t) : "function" == typeof i ? e.extend({}, e.fn.transition.settings, {
								animation: t,
								onComplete: i,
								duration: n
							}) : "string" == typeof n || "number" == typeof n ? e.extend({}, e.fn.transition.settings, {
								animation: t,
								duration: n
							}) : "object" == typeof n ? e.extend({}, e.fn.transition.settings, n, {
								animation: t
							}) : "function" == typeof n ? e.extend({}, e.fn.transition.settings, {
								animation: t,
								onComplete: n
							}) : e.extend({}, e.fn.transition.settings, {
								animation: t
							})
						},
						animationClass: function(e) {
							var t = e || p.animation,
								n = w.can.transition() && !w.has.direction() ? w.get.direction() + " " : "";
							return h.animating + " " + h.transition + " " + n + t
						},
						currentAnimation: function() {
							return w.cache && w.cache.animation !== i ? w.cache.animation : !1
						},
						currentDirection: function() {
							return w.is.inward() ? h.inward : h.outward
						},
						direction: function() {
							return w.is.hidden() || !w.is.visible() ? h.inward : h.outward
						},
						animationDirection: function(t) {
							var n;
							return t = t || p.animation, "string" == typeof t && (t = t.split(" "), e.each(t, function(e, t) {
								t === h.inward ? n = h.inward : t === h.outward && (n = h.outward)
							})), n ? n : !1
						},
						duration: function(e) {
							return e = e || p.duration, e === !1 && (e = C.css("animation-duration") || 0), "string" == typeof e ? e.indexOf("ms") > -1 ? parseFloat(e) : 1e3 * parseFloat(e) : e
						},
						displayType: function() {
							return p.displayType ? p.displayType : (C.data(v.displayType) === i && w.can.transition(!0), C.data(v.displayType))
						},
						userStyle: function(e) {
							return e = e || C.attr("style") || "", e.replace(/display.*?;/, "")
						},
						transitionExists: function(t) {
							return e.fn.transition.exists[t]
						},
						animationStartEvent: function() {
							var e, t = n.createElement("div"),
								o = {
									animation: "animationstart",
									OAnimation: "oAnimationStart",
									MozAnimation: "mozAnimationStart",
									WebkitAnimation: "webkitAnimationStart"
								};
							for (e in o)
								if (t.style[e] !== i) return o[e];
							return !1
						},
						animationEndEvent: function() {
							var e, t = n.createElement("div"),
								o = {
									animation: "animationend",
									OAnimation: "oAnimationEnd",
									MozAnimation: "mozAnimationEnd",
									WebkitAnimation: "webkitAnimationEnd"
								};
							for (e in o)
								if (t.style[e] !== i) return o[e];
							return !1
						}
					},
					can: {
						transition: function(t) {
							var n, o, r, a, s, l, c, u = p.animation,
								d = w.get.transitionExists(u);
							if (d === i || t) {
								if (w.verbose("Determining whether animation exists"), n = C.attr("class"), o = C.prop("tagName"), r = e("<" + o + " />").addClass(n).insertAfter(C), a = r.addClass(u).removeClass(h.inward).removeClass(h.outward).addClass(h.animating).addClass(h.transition).css("animationName"), s = r.addClass(h.inward).css("animationName"), c = r.attr("class", n).removeAttr("style").removeClass(h.hidden).removeClass(h.visible).show().css("display"), w.verbose("Determining final display state", c), w.save.displayType(c), r.remove(), a != s) w.debug("Direction exists for animation", u), l = !0;
								else {
									if ("none" == a || !a) return void w.debug("No animation defined in css", u);
									w.debug("Static animation found", u, c), l = !1
								}
								w.save.transitionExists(u, l)
							}
							return d !== i ? d : l
						},
						animate: function() {
							return w.can.transition() !== i
						}
					},
					is: {
						animating: function() {
							return C.hasClass(h.animating)
						},
						inward: function() {
							return C.hasClass(h.inward)
						},
						outward: function() {
							return C.hasClass(h.outward)
						},
						looping: function() {
							return C.hasClass(h.looping)
						},
						occurring: function(e) {
							return e = e || p.animation, e = "." + e.replace(" ", "."), C.filter(e).length > 0
						},
						visible: function() {
							return C.is(":visible")
						},
						hidden: function() {
							return "hidden" === C.css("visibility")
						},
						supported: function() {
							return b !== !1
						}
					},
					hide: function() {
						w.verbose("Hiding element"), w.is.animating() && w.reset(), k.blur(), w.remove.display(), w.remove.visible(), w.set.hidden(), w.force.hidden(), p.onHide.call(this), p.onComplete.call(this)
					},
					show: function(e) {
						w.verbose("Showing element", e), w.remove.hidden(), w.set.visible(), w.force.visible(), p.onShow.call(this), p.onComplete.call(this)
					},
					toggle: function() {
						w.is.visible() ? w.hide() : w.show()
					},
					stop: function() {
						w.debug("Stopping current animation"), C.triggerHandler(b)
					},
					stopAll: function() {
						w.debug("Stopping all animation"), w.remove.queueCallback(), C.triggerHandler(b)
					},
					clear: {
						queue: function() {
							w.debug("Clearing animation queue"), w.remove.queueCallback()
						}
					},
					enable: function() {
						w.verbose("Starting animation"), C.removeClass(h.disabled)
					},
					disable: function() {
						w.debug("Stopping animation"), C.addClass(h.disabled)
					},
					setting: function(t, n) {
						if (w.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, p, t);
						else {
							if (n === i) return p[t];
							p[t] = n
						}
					},
					internal: function(t, n) {
						if (e.isPlainObject(t)) e.extend(!0, w, t);
						else {
							if (n === i) return w[t];
							w[t] = n
						}
					},
					debug: function() {
						p.debug && (p.performance ? w.performance.log(arguments) : (w.debug = Function.prototype.bind.call(console.info, console, p.name + ":"), w.debug.apply(console, arguments)))
					},
					verbose: function() {
						p.verbose && p.debug && (p.performance ? w.performance.log(arguments) : (w.verbose = Function.prototype.bind.call(console.info, console, p.name + ":"), w.verbose.apply(console, arguments)))
					},
					error: function() {
						w.error = Function.prototype.bind.call(console.error, console, p.name + ":"), w.error.apply(console, arguments)
					},
					performance: {
						log: function(e) {
							var t, n, i;
							p.performance && (t = (new Date).getTime(), i = s || t, n = t - i, s = t, l.push({
								Name: e[0],
								Arguments: [].slice.call(e, 1) || "",
								Element: k,
								"Execution Time": n
							})), clearTimeout(w.performance.timer), w.performance.timer = setTimeout(w.performance.display, 500)
						},
						display: function() {
							var t = p.name + ":",
								n = 0;
							s = !1, clearTimeout(w.performance.timer), e.each(l, function(e, t) {
								n += t["Execution Time"]
							}), t += " " + n + "ms", a && (t += " '" + a + "'"), r.length > 1 && (t += " (" + r.length + ")"), (console.group !== i || console.table !== i) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function(e, t) {
								console.log(t.Name + ": " + t["Execution Time"] + "ms")
							}), console.groupEnd()), l = []
						}
					},
					invoke: function(t, n, r) {
						var a, s, l, c = m;
						return n = n || d, r = k || r, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), a = t.length - 1, e.each(t, function(n, o) {
							var r = n != a ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
							if (e.isPlainObject(c[r]) && n != a) c = c[r];
							else {
								if (c[r] !== i) return s = c[r], !1;
								if (!e.isPlainObject(c[o]) || n == a) return c[o] !== i ? (s = c[o], !1) : !1;
								c = c[o]
							}
						})), e.isFunction(s) ? l = s.apply(r, n) : s !== i && (l = s), e.isArray(o) ? o.push(l) : o !== i ? o = [o, l] : l !== i && (o = l), s !== i ? s : !1
					}
				}, w.initialize()
			}), o !== i ? o : this
		}, e.fn.transition.exists = {}, e.fn.transition.settings = {
			name: "Transition",
			debug: !1,
			verbose: !1,
			performance: !0,
			namespace: "transition",
			interval: 0,
			reverse: "auto",
			onStart: function() {},
			onComplete: function() {},
			onShow: function() {},
			onHide: function() {},
			useFailSafe: !0,
			failSafeDelay: 100,
			allowRepeats: !1,
			displayType: !1,
			animation: "fade",
			duration: !1,
			queue: !0,
			metadata: {
				displayType: "display"
			},
			className: {
				animating: "animating",
				disabled: "disabled",
				hidden: "hidden",
				inward: "in",
				loading: "loading",
				looping: "looping",
				outward: "out",
				transition: "transition",
				visible: "visible"
			},
			error: {
				noAnimation: "There is no css animation matching the one you specified. Please make sure your css is vendor prefixed, and you have included transition css.",
				repeated: "That animation is already occurring, cancelling repeated animation",
				method: "The method you called is not defined",
				support: "This browser does not support CSS animations"
			}
		}
	}(jQuery, window, document),
	function(e, t, n, i) {
		"use strict";
		e.fn.visibility = function(o) {
			var r, a = e(this),
				s = a.selector || "",
				l = (new Date).getTime(),
				c = [],
				u = arguments[0],
				d = "string" == typeof u,
				f = [].slice.call(arguments, 1);
			return a.each(function() {
				var a, p, m, g = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.visibility.settings, o) : e.extend({}, e.fn.visibility.settings),
					h = g.className,
					v = g.namespace,
					b = g.error,
					y = g.metadata,
					x = "." + v,
					w = "module-" + v,
					C = e(t),
					k = e(this),
					T = e(g.context),
					S = (k.selector || "", k.data(w)),
					E = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
						setTimeout(e, 0)
					},
					A = this,
					D = !1;
				m = {
					initialize: function() {
						m.debug("Initializing", g), m.setup.cache(), m.should.trackChanges() && ("image" == g.type && m.setup.image(), "fixed" == g.type && m.setup.fixed(), g.observeChanges && m.observeChanges(), m.bind.events()), m.save.position(), m.is.visible() || m.error(b.visible, k), g.initialCheck && m.checkVisibility(), m.instantiate()
					},
					instantiate: function() {
						m.debug("Storing instance", m), k.data(w, m), S = m
					},
					destroy: function() {
						m.verbose("Destroying previous module"), p && p.disconnect(), C.off("load" + x, m.event.load).off("resize" + x, m.event.resize), T.off("scrollchange" + x, m.event.scrollchange), k.off(x).removeData(w)
					},
					observeChanges: function() {
						"MutationObserver" in t && (p = new MutationObserver(function() {
							m.verbose("DOM tree modified, updating visibility calculations"), m.timer = setTimeout(function() {
								m.verbose("DOM tree modified, updating sticky menu"), m.refresh()
							}, 100)
						}), p.observe(A, {
							childList: !0,
							subtree: !0
						}), m.debug("Setting up mutation observer", p))
					},
					bind: {
						events: function() {
							m.verbose("Binding visibility events to scroll and resize"), g.refreshOnLoad && C.on("load" + x, m.event.load), C.on("resize" + x, m.event.resize), T.off("scroll" + x).on("scroll" + x, m.event.scroll).on("scrollchange" + x, m.event.scrollchange)
						}
					},
					event: {
						resize: function() {
							m.debug("Window resized"), g.refreshOnResize && E(m.refresh)
						},
						load: function() {
							m.debug("Page finished loading"), E(m.refresh)
						},
						scroll: function() {
							g.throttle ? (clearTimeout(m.timer), m.timer = setTimeout(function() {
								T.triggerHandler("scrollchange" + x, [T.scrollTop()])
							}, g.throttle)) : E(function() {
								T.triggerHandler("scrollchange" + x, [T.scrollTop()])
							})
						},
						scrollchange: function(e, t) {
							m.checkVisibility(t)
						}
					},
					precache: function(t, i) {
						t instanceof Array || (t = [t]);
						for (var o = t.length, r = 0, a = [], s = n.createElement("img"), l = function() {
							r++, r >= t.length && e.isFunction(i) && i()
						}; o--;) s = n.createElement("img"), s.onload = l, s.onerror = l, s.src = t[o], a.push(s)
					},
					enableCallbacks: function() {
						m.debug("Allowing callbacks to occur"), D = !1
					},
					disableCallbacks: function() {
						m.debug("Disabling all callbacks temporarily"), D = !0
					},
					should: {
						trackChanges: function() {
							return d ? (m.debug("One time query, no need to bind events"), !1) : (m.debug("Callbacks being attached"), !0)
						}
					},
					setup: {
						cache: function() {
							m.cache = {
								occurred: {},
								screen: {},
								element: {}
							}
						},
						image: function() {
							var e = k.data(y.src);
							e && (m.verbose("Lazy loading image", e), g.once = !0, g.observeChanges = !1, g.onOnScreen = function() {
								m.debug("Image on screen", A), m.precache(e, function() {
									m.set.image(e)
								})
							})
						},
						fixed: function() {
							m.debug("Setting up fixed"), g.once = !1, g.observeChanges = !1, g.initialCheck = !0, g.refreshOnLoad = !0, o.transition || (g.transition = !1), m.create.placeholder(), m.debug("Added placeholder", a), g.onTopPassed = function() {
								m.debug("Element passed, adding fixed position", k), m.show.placeholder(), m.set.fixed(), g.transition && e.fn.transition !== i && k.transition(g.transition, g.duration)
							}, g.onTopPassedReverse = function() {
								m.debug("Element returned to position, removing fixed", k), m.hide.placeholder(), m.remove.fixed()
							}
						}
					},
					create: {
						placeholder: function() {
							m.verbose("Creating fixed position placeholder"), a = k.clone(!1).css("display", "none").addClass(h.placeholder).insertAfter(k)
						}
					},
					show: {
						placeholder: function() {
							m.verbose("Showing placeholder"), a.css("display", "block").css("visibility", "hidden")
						}
					},
					hide: {
						placeholder: function() {
							m.verbose("Hiding placeholder"), a.css("display", "none").css("visibility", "")
						}
					},
					set: {
						fixed: function() {
							m.verbose("Setting element to fixed position"), k.addClass(h.fixed).css({
								position: "fixed",
								top: g.offset + "px",
								left: "auto",
								zIndex: "1"
							})
						},
						image: function(t) {
							k.attr("src", t), g.transition ? e.fn.transition !== i ? k.transition(g.transition, g.duration) : k.fadeIn(g.duration) : k.show()
						}
					},
					is: {
						onScreen: function() {
							var e = m.get.elementCalculations();
							return e.onScreen
						},
						offScreen: function() {
							var e = m.get.elementCalculations();
							return e.offScreen
						},
						visible: function() {
							return m.cache && m.cache.element ? !(0 === m.cache.element.width && 0 === m.cache.element.offset.top) : !1
						}
					},
					refresh: function() {
						m.debug("Refreshing constants (width/height)"), "fixed" == g.type && (m.remove.fixed(), m.remove.occurred()), m.reset(), m.save.position(), g.checkOnRefresh && m.checkVisibility(), g.onRefresh.call(A)
					},
					reset: function() {
						m.verbose("Reseting all cached values"), e.isPlainObject(m.cache) && (m.cache.screen = {}, m.cache.element = {})
					},
					checkVisibility: function(e) {
						m.verbose("Checking visibility of element", m.cache.element), !D && m.is.visible() && (m.save.scroll(e), m.save.calculations(), m.passed(), m.passingReverse(), m.topVisibleReverse(), m.bottomVisibleReverse(), m.topPassedReverse(), m.bottomPassedReverse(), m.onScreen(), m.offScreen(), m.passing(), m.topVisible(), m.bottomVisible(), m.topPassed(), m.bottomPassed(), g.onUpdate && g.onUpdate.call(A, m.get.elementCalculations()))
					},
					passed: function(t, n) {
						var o = m.get.elementCalculations();
						if (t && n) g.onPassed[t] = n;
						else {
							if (t !== i) return m.get.pixelsPassed(t) > o.pixelsPassed;
							o.passing && e.each(g.onPassed, function(e, t) {
								o.bottomVisible || o.pixelsPassed > m.get.pixelsPassed(e) ? m.execute(t, e) : g.once || m.remove.occurred(t)
							})
						}
					},
					onScreen: function(e) {
						var t = m.get.elementCalculations(),
							n = e || g.onOnScreen,
							o = "onScreen";
						return e && (m.debug("Adding callback for onScreen", e), g.onOnScreen = e), t.onScreen ? m.execute(n, o) : g.once || m.remove.occurred(o), e !== i ? t.onOnScreen : void 0
					},
					offScreen: function(e) {
						var t = m.get.elementCalculations(),
							n = e || g.onOffScreen,
							o = "offScreen";
						return e && (m.debug("Adding callback for offScreen", e), g.onOffScreen = e), t.offScreen ? m.execute(n, o) : g.once || m.remove.occurred(o), e !== i ? t.onOffScreen : void 0
					},
					passing: function(e) {
						var t = m.get.elementCalculations(),
							n = e || g.onPassing,
							o = "passing";
						return e && (m.debug("Adding callback for passing", e), g.onPassing = e), t.passing ? m.execute(n, o) : g.once || m.remove.occurred(o), e !== i ? t.passing : void 0
					},
					topVisible: function(e) {
						var t = m.get.elementCalculations(),
							n = e || g.onTopVisible,
							o = "topVisible";
						return e && (m.debug("Adding callback for top visible", e), g.onTopVisible = e), t.topVisible ? m.execute(n, o) : g.once || m.remove.occurred(o), e === i ? t.topVisible : void 0
					},
					bottomVisible: function(e) {
						var t = m.get.elementCalculations(),
							n = e || g.onBottomVisible,
							o = "bottomVisible";
						return e && (m.debug("Adding callback for bottom visible", e), g.onBottomVisible = e), t.bottomVisible ? m.execute(n, o) : g.once || m.remove.occurred(o), e === i ? t.bottomVisible : void 0
					},
					topPassed: function(e) {
						var t = m.get.elementCalculations(),
							n = e || g.onTopPassed,
							o = "topPassed";
						return e && (m.debug("Adding callback for top passed", e), g.onTopPassed = e), t.topPassed ? m.execute(n, o) : g.once || m.remove.occurred(o), e === i ? t.topPassed : void 0
					},
					bottomPassed: function(e) {
						var t = m.get.elementCalculations(),
							n = e || g.onBottomPassed,
							o = "bottomPassed";
						return e && (m.debug("Adding callback for bottom passed", e), g.onBottomPassed = e), t.bottomPassed ? m.execute(n, o) : g.once || m.remove.occurred(o), e === i ? t.bottomPassed : void 0
					},
					passingReverse: function(e) {
						var t = m.get.elementCalculations(),
							n = e || g.onPassingReverse,
							o = "passingReverse";
						return e && (m.debug("Adding callback for passing reverse", e), g.onPassingReverse = e), t.passing ? g.once || m.remove.occurred(o) : m.get.occurred("passing") && m.execute(n, o), e !== i ? !t.passing : void 0
					},
					topVisibleReverse: function(e) {
						var t = m.get.elementCalculations(),
							n = e || g.onTopVisibleReverse,
							o = "topVisibleReverse";
						return e && (m.debug("Adding callback for top visible reverse", e), g.onTopVisibleReverse = e), t.topVisible ? g.once || m.remove.occurred(o) : m.get.occurred("topVisible") && m.execute(n, o), e === i ? !t.topVisible : void 0
					},
					bottomVisibleReverse: function(e) {
						var t = m.get.elementCalculations(),
							n = e || g.onBottomVisibleReverse,
							o = "bottomVisibleReverse";
						return e && (m.debug("Adding callback for bottom visible reverse", e), g.onBottomVisibleReverse = e), t.bottomVisible ? g.once || m.remove.occurred(o) : m.get.occurred("bottomVisible") && m.execute(n, o), e === i ? !t.bottomVisible : void 0
					},
					topPassedReverse: function(e) {
						var t = m.get.elementCalculations(),
							n = e || g.onTopPassedReverse,
							o = "topPassedReverse";
						return e && (m.debug("Adding callback for top passed reverse", e), g.onTopPassedReverse = e), t.topPassed ? g.once || m.remove.occurred(o) : m.get.occurred("topPassed") && m.execute(n, o), e === i ? !t.onTopPassed : void 0
					},
					bottomPassedReverse: function(e) {
						var t = m.get.elementCalculations(),
							n = e || g.onBottomPassedReverse,
							o = "bottomPassedReverse";
						return e && (m.debug("Adding callback for bottom passed reverse", e), g.onBottomPassedReverse = e), t.bottomPassed ? g.once || m.remove.occurred(o) : m.get.occurred("bottomPassed") && m.execute(n, o), e === i ? !t.bottomPassed : void 0
					},
					execute: function(e, t) {
						var n = m.get.elementCalculations(),
							i = m.get.screenCalculations();
						e = e || !1, e && (g.continuous ? (m.debug("Callback being called continuously", t, n), e.call(A, n, i)) : m.get.occurred(t) || (m.debug("Conditions met", t, n), e.call(A, n, i))), m.save.occurred(t)
					},
					remove: {
						fixed: function() {
							m.debug("Removing fixed position"), k.removeClass(h.fixed).css({
								position: "",
								top: "",
								left: "",
								zIndex: ""
							})
						},
						occurred: function(e) {
							if (e) {
								var t = m.cache.occurred;
								t[e] !== i && t[e] === !0 && (m.debug("Callback can now be called again", e), m.cache.occurred[e] = !1)
							} else m.cache.occurred = {}
						}
					},
					save: {
						calculations: function() {
							m.verbose("Saving all calculations necessary to determine positioning"), m.save.direction(), m.save.screenCalculations(), m.save.elementCalculations()
						},
						occurred: function(e) {
							e && (m.cache.occurred[e] === i || m.cache.occurred[e] !== !0) && (m.verbose("Saving callback occurred", e), m.cache.occurred[e] = !0)
						},
						scroll: function(e) {
							e = e + g.offset || T.scrollTop() + g.offset, m.cache.scroll = e
						},
						direction: function() {
							var e, t = m.get.scroll(),
								n = m.get.lastScroll();
							return e = t > n && n ? "down" : n > t && n ? "up" : "static", m.cache.direction = e, m.cache.direction
						},
						elementPosition: function() {
							var e = m.cache.element,
								t = m.get.screenSize();
							return m.verbose("Saving element position"), e.fits = e.height < t.height, e.offset = k.offset(), e.width = k.outerWidth(), e.height = k.outerHeight(), m.cache.element = e, e
						},
						elementCalculations: function() {
							var e = m.get.screenCalculations(),
								t = m.get.elementPosition();
							return g.includeMargin ? (t.margin = {}, t.margin.top = parseInt(k.css("margin-top"), 10), t.margin.bottom = parseInt(k.css("margin-bottom"), 10), t.top = t.offset.top - t.margin.top, t.bottom = t.offset.top + t.height + t.margin.bottom) : (t.top = t.offset.top, t.bottom = t.offset.top + t.height), t.topVisible = e.bottom >= t.top, t.topPassed = e.top >= t.top, t.bottomVisible = e.bottom >= t.bottom, t.bottomPassed = e.top >= t.bottom, t.pixelsPassed = 0, t.percentagePassed = 0, t.onScreen = t.topVisible && !t.bottomPassed, t.passing = t.topPassed && !t.bottomPassed, t.offScreen = !t.onScreen, t.passing && (t.pixelsPassed = e.top - t.top, t.percentagePassed = (e.top - t.top) / t.height), m.cache.element = t, m.verbose("Updated element calculations", t), t
						},
						screenCalculations: function() {
							var e = m.get.scroll();
							return m.save.direction(), m.cache.screen.top = e, m.cache.screen.bottom = e + m.cache.screen.height, m.cache.screen
						},
						screenSize: function() {
							m.verbose("Saving window position"), m.cache.screen = {
								height: T.height()
							}
						},
						position: function() {
							m.save.screenSize(), m.save.elementPosition()
						}
					},
					get: {
						pixelsPassed: function(e) {
							var t = m.get.elementCalculations();
							return e.search("%") > -1 ? t.height * (parseInt(e, 10) / 100) : parseInt(e, 10)
						},
						occurred: function(e) {
							return m.cache.occurred !== i ? m.cache.occurred[e] || !1 : !1
						},
						direction: function() {
							return m.cache.direction === i && m.save.direction(), m.cache.direction
						},
						elementPosition: function() {
							return m.cache.element === i && m.save.elementPosition(), m.cache.element
						},
						elementCalculations: function() {
							return m.cache.element === i && m.save.elementCalculations(), m.cache.element
						},
						screenCalculations: function() {
							return m.cache.screen === i && m.save.screenCalculations(), m.cache.screen
						},
						screenSize: function() {
							return m.cache.screen === i && m.save.screenSize(), m.cache.screen
						},
						scroll: function() {
							return m.cache.scroll === i && m.save.scroll(), m.cache.scroll
						},
						lastScroll: function() {
							return m.cache.screen === i ? (m.debug("First scroll event, no last scroll could be found"), !1) : m.cache.screen.top
						}
					},
					setting: function(t, n) {
						if (e.isPlainObject(t)) e.extend(!0, g, t);
						else {
							if (n === i) return g[t];
							g[t] = n
						}
					},
					internal: function(t, n) {
						if (e.isPlainObject(t)) e.extend(!0, m, t);
						else {
							if (n === i) return m[t];
							m[t] = n
						}
					},
					debug: function() {
						g.debug && (g.performance ? m.performance.log(arguments) : (m.debug = Function.prototype.bind.call(console.info, console, g.name + ":"), m.debug.apply(console, arguments)))
					},
					verbose: function() {
						g.verbose && g.debug && (g.performance ? m.performance.log(arguments) : (m.verbose = Function.prototype.bind.call(console.info, console, g.name + ":"), m.verbose.apply(console, arguments)))
					},
					error: function() {
						m.error = Function.prototype.bind.call(console.error, console, g.name + ":"), m.error.apply(console, arguments)
					},
					performance: {
						log: function(e) {
							var t, n, i;
							g.performance && (t = (new Date).getTime(), i = l || t, n = t - i, l = t, c.push({
								Name: e[0],
								Arguments: [].slice.call(e, 1) || "",
								Element: A,
								"Execution Time": n
							})), clearTimeout(m.performance.timer), m.performance.timer = setTimeout(m.performance.display, 500)
						},
						display: function() {
							var t = g.name + ":",
								n = 0;
							l = !1, clearTimeout(m.performance.timer), e.each(c, function(e, t) {
								n += t["Execution Time"]
							}), t += " " + n + "ms", s && (t += " '" + s + "'"), (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function(e, t) {
								console.log(t.Name + ": " + t["Execution Time"] + "ms")
							}), console.groupEnd()), c = []
						}
					},
					invoke: function(t, n, o) {
						var a, s, l, c = S;
						return n = n || f, o = A || o, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), a = t.length - 1, e.each(t, function(n, o) {
							var r = n != a ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
							if (e.isPlainObject(c[r]) && n != a) c = c[r];
							else {
								if (c[r] !== i) return s = c[r], !1;
								if (!e.isPlainObject(c[o]) || n == a) return c[o] !== i ? (s = c[o], !1) : (m.error(b.method, t), !1);
								c = c[o]
							}
						})), e.isFunction(s) ? l = s.apply(o, n) : s !== i && (l = s), e.isArray(r) ? r.push(l) : r !== i ? r = [r, l] : l !== i && (r = l), s
					}
				}, d ? (S === i && m.initialize(), S.save.scroll(), S.save.calculations(), m.invoke(u)) : (S !== i && S.invoke("destroy"), m.initialize())
			}), r !== i ? r : this
		}, e.fn.visibility.settings = {
			name: "Visibility",
			namespace: "visibility",
			debug: !1,
			verbose: !1,
			performance: !0,
			observeChanges: !0,
			initialCheck: !0,
			refreshOnLoad: !0,
			refreshOnResize: !0,
			checkOnRefresh: !0,
			once: !0,
			continuous: !1,
			offset: 0,
			includeMargin: !1,
			context: t,
			throttle: !1,
			type: !1,
			transition: "fade in",
			duration: 1e3,
			onPassed: {},
			onOnScreen: !1,
			onOffScreen: !1,
			onPassing: !1,
			onTopVisible: !1,
			onBottomVisible: !1,
			onTopPassed: !1,
			onBottomPassed: !1,
			onPassingReverse: !1,
			onTopVisibleReverse: !1,
			onBottomVisibleReverse: !1,
			onTopPassedReverse: !1,
			onBottomPassedReverse: !1,
			onUpdate: !1,
			onRefresh: function() {},
			metadata: {
				src: "src"
			},
			className: {
				fixed: "fixed",
				placeholder: "placeholder"
			},
			error: {
				method: "The method you called is not defined.",
				visible: "Element is hidden, you must call refresh after element becomes visible"
			}
		}
	}(jQuery, window, document),
	function(e, t, n, i) {
		"use strict";
		e.visit = e.fn.visit = function(n) {
			var o, r = e(e.isFunction(this) ? t : this),
				a = r.selector || "",
				s = (new Date).getTime(),
				l = [],
				c = arguments[0],
				u = "string" == typeof c,
				d = [].slice.call(arguments, 1);
			return r.each(function() {
				var f, p = e.isPlainObject(n) ? e.extend(!0, {}, e.fn.visit.settings, n) : e.extend({}, e.fn.visit.settings),
					m = p.error,
					g = p.namespace,
					h = g + "-module",
					v = e(this),
					b = e(),
					y = this,
					x = v.data(h);
				f = {
					initialize: function() {
						p.count ? f.store(p.key.count, p.count) : p.id ? f.add.id(p.id) : p.increment && "increment" !== u && f.increment(), f.add.display(v), f.instantiate()
					},
					instantiate: function() {
						f.verbose("Storing instance of visit module", f), x = f, v.data(h, f)
					},
					destroy: function() {
						f.verbose("Destroying instance"), v.removeData(h)
					},
					increment: function(e) {
						var t = f.get.count(),
							n = +t + 1;
						e ? f.add.id(e) : (n > p.limit && !p.surpass && (n = p.limit), f.debug("Incrementing visits", n), f.store(p.key.count, n))
					},
					decrement: function(e) {
						var t = f.get.count(),
							n = +t - 1;
						e ? f.remove.id(e) : (f.debug("Removing visit"), f.store(p.key.count, n))
					},
					get: {
						count: function() {
							return +f.retrieve(p.key.count) || 0
						},
						idCount: function(e) {
							return e = e || f.get.ids(), e.length
						},
						ids: function(e) {
							var t = [];
							return e = e || f.retrieve(p.key.ids), "string" == typeof e && (t = e.split(p.delimiter)), f.verbose("Found visited ID list", t), t
						},
						storageOptions: function() {
							var e = {};
							return p.expires && (e.expires = p.expires), p.domain && (e.domain = p.domain), p.path && (e.path = p.path), e
						}
					},
					has: {
						visited: function(t, n) {
							var o = !1;
							return n = n || f.get.ids(), t !== i && n && e.each(n, function(e, n) {
								n == t && (o = !0)
							}), o
						}
					},
					set: {
						count: function(e) {
							f.store(p.key.count, e)
						},
						ids: function(e) {
							f.store(p.key.ids, e)
						}
					},
					reset: function() {
						f.store(p.key.count, 0), f.store(p.key.ids, null)
					},
					add: {
						id: function(e) {
							var t = f.retrieve(p.key.ids),
								n = t === i || "" === t ? e : t + p.delimiter + e;
							f.has.visited(e) ? f.debug("Unique content already visited, not adding visit", e, t) : e === i ? f.debug("ID is not defined") : (f.debug("Adding visit to unique content", e), f.store(p.key.ids, n)), f.set.count(f.get.idCount())
						},
						display: function(t) {
							var n = e(t);
							n.length > 0 && !e.isWindow(n[0]) && (f.debug("Updating visit count for element", n), b = b.length > 0 ? b.add(n) : n)
						}
					},
					remove: {
						id: function(t) {
							var n = f.get.ids(),
								o = [];
							t !== i && n !== i && (f.debug("Removing visit to unique content", t, n), e.each(n, function(e, n) {
								n !== t && o.push(n)
							}), o = o.join(p.delimiter), f.store(p.key.ids, o)), f.set.count(f.get.idCount())
						}
					},
					check: {
						limit: function(e) {
							e = e || f.get.count(), p.limit && (e >= p.limit && (f.debug("Pages viewed exceeded limit, firing callback", e, p.limit), p.onLimit.call(y, e)), f.debug("Limit not reached", e, p.limit), p.onChange.call(y, e)), f.update.display(e)
						}
					},
					update: {
						display: function(e) {
							e = e || f.get.count(), b.length > 0 && (f.debug("Updating displayed view count", b), b.html(e))
						}
					},
					store: function(n, o) {
						var r = f.get.storageOptions(o);
						if ("localstorage" == p.storageMethod && t.localStorage !== i) t.localStorage.setItem(n, o), f.debug("Value stored using local storage", n, o);
						else {
							if (e.cookie === i) return void f.error(m.noCookieStorage);
							e.cookie(n, o, r), f.debug("Value stored using cookie", n, o, r)
						}
						n == p.key.count && f.check.limit(o)
					},
					retrieve: function(n) {
						var o;
						return "localstorage" == p.storageMethod && t.localStorage !== i ? o = t.localStorage.getItem(n) : e.cookie !== i ? o = e.cookie(n) : f.error(m.noCookieStorage), ("undefined" == o || "null" == o || o === i || null === o) && (o = i), o
					},
					setting: function(t, n) {
						if (e.isPlainObject(t)) e.extend(!0, p, t);
						else {
							if (n === i) return p[t];
							p[t] = n
						}
					},
					internal: function(t, n) {
						return f.debug("Changing internal", t, n), n === i ? f[t] : void(e.isPlainObject(t) ? e.extend(!0, f, t) : f[t] = n)
					},
					debug: function() {
						p.debug && (p.performance ? f.performance.log(arguments) : (f.debug = Function.prototype.bind.call(console.info, console, p.name + ":"), f.debug.apply(console, arguments)))
					},
					verbose: function() {
						p.verbose && p.debug && (p.performance ? f.performance.log(arguments) : (f.verbose = Function.prototype.bind.call(console.info, console, p.name + ":"), f.verbose.apply(console, arguments)))
					},
					error: function() {
						f.error = Function.prototype.bind.call(console.error, console, p.name + ":"), f.error.apply(console, arguments)
					},
					performance: {
						log: function(e) {
							var t, n, i;
							p.performance && (t = (new Date).getTime(), i = s || t, n = t - i, s = t, l.push({
								Name: e[0],
								Arguments: [].slice.call(e, 1) || "",
								Element: y,
								"Execution Time": n
							})), clearTimeout(f.performance.timer), f.performance.timer = setTimeout(f.performance.display, 500)
						},
						display: function() {
							var t = p.name + ":",
								n = 0;
							s = !1, clearTimeout(f.performance.timer), e.each(l, function(e, t) {
								n += t["Execution Time"]
							}), t += " " + n + "ms", a && (t += " '" + a + "'"), r.length > 1 && (t += " (" + r.length + ")"), (console.group !== i || console.table !== i) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function(e, t) {
								console.log(t.Name + ": " + t["Execution Time"] + "ms")
							}), console.groupEnd()), l = []
						}
					},
					invoke: function(t, n, r) {
						var a, s, l, c = x;
						return n = n || d, r = y || r, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), a = t.length - 1, e.each(t, function(n, o) {
							var r = n != a ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
							if (e.isPlainObject(c[r]) && n != a) c = c[r];
							else {
								if (c[r] !== i) return s = c[r], !1;
								if (!e.isPlainObject(c[o]) || n == a) return c[o] !== i ? (s = c[o], !1) : !1;
								c = c[o]
							}
						})), e.isFunction(s) ? l = s.apply(r, n) : s !== i && (l = s), e.isArray(o) ? o.push(l) : o !== i ? o = [o, l] : l !== i && (o = l), s
					}
				}, u ? (x === i && f.initialize(), f.invoke(c)) : (x !== i && x.invoke("destroy"), f.initialize())
			}), o !== i ? o : this
		}, e.fn.visit.settings = {
			name: "Visit",
			debug: !1,
			verbose: !1,
			performance: !0,
			namespace: "visit",
			increment: !1,
			surpass: !1,
			count: !1,
			limit: !1,
			delimiter: "&",
			storageMethod: "localstorage",
			key: {
				count: "visit-count",
				ids: "visit-ids"
			},
			expires: 30,
			domain: !1,
			path: "/",
			onLimit: function() {},
			onChange: function() {},
			error: {
				method: "The method you called is not defined",
				missingPersist: "Using the persist setting requires the inclusion of PersistJS",
				noCookieStorage: "The default storage cookie requires $.cookie to be included."
			}
		}
	}(jQuery, window, document),
	function() {
		jQuery.fn.exists = function() {
			return this.length > 0
		}, $(function() {
			return new ZeroClipboard($(".copy.action")), $("#wechat_login_wrapper").exists() && new WxLogin({
				id: "wechat_login_wrapper",
				appid: gon.wxConfig.appId,
				scope: "snsapi_login",
				redirect_uri: "http%3A%2F%2Fzhibimo.com%2Fauth%2Fwechat%2Fcallback",
				href: $("#wechat_login_wrapper").data("href"),
				state: "fucking-state"
			}), $(".ui.dropdown").dropdown(), $("#new_book").exists() && ($("#accept_term_checkbox").checkbox({
				onChecked: function() {
					return $("#new_book [type=submit]").removeClass("disabled")
				},
				onUnchecked: function() {
					return $("#new_book [type=submit]").addClass("disabled")
				}
			}), $("#purchase_radio").checkbox({
				onChecked: function() {
					return $("#free_field").hide(), $("#purchase_field").show()
				}
			}), $("#free_radio").checkbox({
				onChecked: function() {
					return $("#free_field").show(), $("#purchase_field").hide()
				}
			}), $("#purchase_radio").checkbox("is checked") ? ($("#free_field").hide(), $("#purchase_field").show()) : ($("#free_field").show(), $("#purchase_field").hide())), $("#editor_sidebar").sidebar("setting", "dimPage", !1).sidebar("setting", "transition", "overlay").sidebar("setting", "closable", !1).sidebar("toggle"), $(".ui.secondary.pointing.content.menu .item").tab()
		})
	}.call(this);