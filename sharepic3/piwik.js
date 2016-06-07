/*!
 * Piwik - free/libre analytics platform
 *
 * JavaScript tracking client
 *
 * @link http://piwik.org
 * @source https://github.com/piwik/piwik/blob/master/js/piwik.js
 * @license http://piwik.org/free-software/bsd/ BSD-3 Clause (also in js/LICENSE.txt)
 * @license magnet:?xt=urn:btih:c80d50af7d3db9be66a4d0a86db0286e4fd33292&dn=bsd-3-clause.txt BSD-3-Clause
 */
if (typeof JSON2 !== "object") {
	JSON2 = {}
}(function() {
	function d(f) {
		return f < 10 ? "0" + f : f
	}

	function l(n, m) {
		var f = Object.prototype.toString.apply(n);
		if (f === "[object Date]") {
			return isFinite(n.valueOf()) ? n.getUTCFullYear() + "-" + d(n.getUTCMonth() + 1) + "-" + d(n.getUTCDate()) + "T" + d(n.getUTCHours()) + ":" + d(n.getUTCMinutes()) + ":" + d(n.getUTCSeconds()) + "Z" : null
		}
		if (f === "[object String]" || f === "[object Number]" || f === "[object Boolean]") {
			return n.valueOf()
		}
		if (f !== "[object Array]" && typeof n.toJSON === "function") {
			return n.toJSON(m)
		}
		return n
	}
	var c = new RegExp("[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]", "g"),
		e = '\\\\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]',
		i = new RegExp("[" + e, "g"),
		j, b, k = {
			"\b": "\\b",
			"\t": "\\t",
			"\n": "\\n",
			"\f": "\\f",
			"\r": "\\r",
			'"': '\\"',
			"\\": "\\\\"
		},
		h;

	function a(f) {
		i.lastIndex = 0;
		return i.test(f) ? '"' + f.replace(i, function(m) {
			var n = k[m];
			return typeof n === "string" ? n : "\\u" + ("0000" + m.charCodeAt(0).toString(16)).slice(-4)
		}) + '"' : '"' + f + '"'
	}

	function g(s, p) {
		var n, m, t, f, q = j,
			o, r = p[s];
		if (r && typeof r === "object") {
			r = l(r, s)
		}
		if (typeof h === "function") {
			r = h.call(p, s, r)
		}
		switch (typeof r) {
			case "string":
				return a(r);
			case "number":
				return isFinite(r) ? String(r) : "null";
			case "boolean":
			case "null":
				return String(r);
			case "object":
				if (!r) {
					return "null"
				}
				j += b;
				o = [];
				if (Object.prototype.toString.apply(r) === "[object Array]") {
					f = r.length;
					for (n = 0; n < f; n += 1) {
						o[n] = g(n, r) || "null"
					}
					t = o.length === 0 ? "[]" : j ? "[\n" + j + o.join(",\n" + j) + "\n" + q + "]" : "[" + o.join(",") + "]";
					j = q;
					return t
				}
				if (h && typeof h === "object") {
					f = h.length;
					for (n = 0; n < f; n += 1) {
						if (typeof h[n] === "string") {
							m = h[n];
							t = g(m, r);
							if (t) {
								o.push(a(m) + (j ? ": " : ":") + t)
							}
						}
					}
				} else {
					for (m in r) {
						if (Object.prototype.hasOwnProperty.call(r, m)) {
							t = g(m, r);
							if (t) {
								o.push(a(m) + (j ? ": " : ":") + t)
							}
						}
					}
				}
				t = o.length === 0 ? "{}" : j ? "{\n" + j + o.join(",\n" + j) + "\n" + q + "}" : "{" + o.join(",") + "}";
				j = q;
				return t
		}
	}
	if (typeof JSON2.stringify !== "function") {
		JSON2.stringify = function(o, m, n) {
			var f;
			j = "";
			b = "";
			if (typeof n === "number") {
				for (f = 0; f < n; f += 1) {
					b += " "
				}
			} else {
				if (typeof n === "string") {
					b = n
				}
			}
			h = m;
			if (m && typeof m !== "function" && (typeof m !== "object" || typeof m.length !== "number")) {
				throw new Error("JSON2.stringify")
			}
			return g("", {
				"": o
			})
		}
	}
	if (typeof JSON2.parse !== "function") {
		JSON2.parse = function(o, f) {
			var n;

			function m(s, r) {
				var q, p, t = s[r];
				if (t && typeof t === "object") {
					for (q in t) {
						if (Object.prototype.hasOwnProperty.call(t, q)) {
							p = m(t, q);
							if (p !== undefined) {
								t[q] = p
							} else {
								delete t[q]
							}
						}
					}
				}
				return f.call(s, r, t)
			}
			o = String(o);
			c.lastIndex = 0;
			if (c.test(o)) {
				o = o.replace(c, function(p) {
					return "\\u" + ("0000" + p.charCodeAt(0).toString(16)).slice(-4)
				})
			}
			if ((new RegExp("^[\\],:{}\\s]*$")).test(o.replace(new RegExp('\\\\(?:["\\\\/bfnrt]|u[0-9a-fA-F]{4})', "g"), "@").replace(new RegExp('"[^"\\\\\n\r]*"|true|false|null|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?', "g"), "]").replace(new RegExp("(?:^|:|,)(?:\\s*\\[)+", "g"), ""))) {
				n = eval("(" + o + ")");
				return typeof f === "function" ? m({
					"": n
				}, "") : n
			}
			throw new SyntaxError("JSON2.parse")
		}
	}
}());
if (typeof _paq !== "object") {
	_paq = []
}
if (typeof Piwik !== "object") {
	Piwik = (function() {
		var j, a = {},
			u = document,
			e = navigator,
			K = screen,
			G = window,
			f = G.performance || G.mozPerformance || G.msPerformance || G.webkitPerformance,
			p = false,
			E = [],
			l = G.encodeURIComponent,
			F = G.decodeURIComponent,
			h = unescape,
			L, t, c;

		function w(X) {
			var W = typeof X;
			return W !== "undefined"
		}

		function q(W) {
			return typeof W === "function"
		}

		function J(W) {
			return typeof W === "object"
		}

		function n(W) {
			return typeof W === "string" || W instanceof String
		}

		function R() {
			var W, Y, X;
			for (W = 0; W < arguments.length; W += 1) {
				X = arguments[W];
				Y = X.shift();
				if (n(Y)) {
					L[Y].apply(L, X)
				} else {
					Y.apply(L, X)
				}
			}
		}

		function U(Z, Y, X, W) {
			if (Z.addEventListener) {
				Z.addEventListener(Y, X, W);
				return true
			}
			if (Z.attachEvent) {
				return Z.attachEvent("on" + Y, X)
			}
			Z["on" + Y] = X
		}

		function O(X, aa) {
			var W = "",
				Z, Y;
			for (Z in a) {
				if (Object.prototype.hasOwnProperty.call(a, Z)) {
					Y = a[Z][X];
					if (q(Y)) {
						W += Y(aa)
					}
				}
			}
			return W
		}

		function S() {
			var W;
			O("unload");
			if (j) {
				do {
					W = new Date()
				} while (W.getTimeAlias() < j)
			}
		}

		function P() {
			var W;
			if (!p) {
				p = true;
				O("load");
				for (W = 0; W < E.length; W++) {
					E[W]()
				}
			}
			return true
		}

		function o() {
			var X;
			if (u.addEventListener) {
				U(u, "DOMContentLoaded", function W() {
					u.removeEventListener("DOMContentLoaded", W, false);
					P()
				})
			} else {
				if (u.attachEvent) {
					u.attachEvent("onreadystatechange", function W() {
						if (u.readyState === "complete") {
							u.detachEvent("onreadystatechange", W);
							P()
						}
					});
					if (u.documentElement.doScroll && G === G.top) {
						(function W() {
							if (!p) {
								try {
									u.documentElement.doScroll("left")
								} catch (Y) {
									setTimeout(W, 0);
									return
								}
								P()
							}
						}())
					}
				}
			}
			if ((new RegExp("WebKit")).test(e.userAgent)) {
				X = setInterval(function() {
					if (p || /loaded|complete/.test(u.readyState)) {
						clearInterval(X);
						P()
					}
				}, 10)
			}
			U(G, "load", P, false)
		}

		function i(Y, X) {
			var W = u.createElement("script");
			W.type = "text/javascript";
			W.src = Y;
			if (W.readyState) {
				W.onreadystatechange = function() {
					var Z = this.readyState;
					if (Z === "loaded" || Z === "complete") {
						W.onreadystatechange = null;
						X()
					}
				}
			} else {
				W.onload = X
			}
			u.getElementsByTagName("head")[0].appendChild(W)
		}

		function x() {
			var W = "";
			try {
				W = G.top.document.referrer
			} catch (Y) {
				if (G.parent) {
					try {
						W = G.parent.document.referrer
					} catch (X) {
						W = ""
					}
				}
			}
			if (W === "") {
				W = u.referrer
			}
			return W
		}

		function k(W) {
			var Y = new RegExp("^([a-z]+):"),
				X = Y.exec(W);
			return X ? X[1] : null
		}

		function b(W) {
			var Y = new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)"),
				X = Y.exec(W);
			return X ? X[1] : W
		}

		function I(Y, X) {
			var W = "[\\?&#]" + X + "=([^&#]*)";
			var aa = new RegExp(W);
			var Z = aa.exec(Y);
			return Z ? F(Z[1]) : ""
		}

		function s(W) {
			return h(l(W))
		}

		function T(am) {
			var Z = function(ar, W) {
					return (ar << W) | (ar >>> (32 - W))
				},
				an = function(au) {
					var ar = "",
						at, W;
					for (at = 7; at >= 0; at--) {
						W = (au >>> (at * 4)) & 15;
						ar += W.toString(16)
					}
					return ar
				},
				ac, ap, ao, Y = [],
				ag = 1732584193,
				ae = 4023233417,
				ad = 2562383102,
				ab = 271733878,
				aa = 3285377520,
				al, ak, aj, ai, ah, aq, X, af = [];
			am = s(am);
			X = am.length;
			for (ap = 0; ap < X - 3; ap += 4) {
				ao = am.charCodeAt(ap) << 24 | am.charCodeAt(ap + 1) << 16 | am.charCodeAt(ap + 2) << 8 | am.charCodeAt(ap + 3);
				af.push(ao)
			}
			switch (X & 3) {
				case 0:
					ap = 2147483648;
					break;
				case 1:
					ap = am.charCodeAt(X - 1) << 24 | 8388608;
					break;
				case 2:
					ap = am.charCodeAt(X - 2) << 24 | am.charCodeAt(X - 1) << 16 | 32768;
					break;
				case 3:
					ap = am.charCodeAt(X - 3) << 24 | am.charCodeAt(X - 2) << 16 | am.charCodeAt(X - 1) << 8 | 128;
					break
			}
			af.push(ap);
			while ((af.length & 15) !== 14) {
				af.push(0)
			}
			af.push(X >>> 29);
			af.push((X << 3) & 4294967295);
			for (ac = 0; ac < af.length; ac += 16) {
				for (ap = 0; ap < 16; ap++) {
					Y[ap] = af[ac + ap]
				}
				for (ap = 16; ap <= 79; ap++) {
					Y[ap] = Z(Y[ap - 3] ^ Y[ap - 8] ^ Y[ap - 14] ^ Y[ap - 16], 1)
				}
				al = ag;
				ak = ae;
				aj = ad;
				ai = ab;
				ah = aa;
				for (ap = 0; ap <= 19; ap++) {
					aq = (Z(al, 5) + ((ak & aj) | (~ak & ai)) + ah + Y[ap] + 1518500249) & 4294967295;
					ah = ai;
					ai = aj;
					aj = Z(ak, 30);
					ak = al;
					al = aq
				}
				for (ap = 20; ap <= 39; ap++) {
					aq = (Z(al, 5) + (ak ^ aj ^ ai) + ah + Y[ap] + 1859775393) & 4294967295;
					ah = ai;
					ai = aj;
					aj = Z(ak, 30);
					ak = al;
					al = aq
				}
				for (ap = 40; ap <= 59; ap++) {
					aq = (Z(al, 5) + ((ak & aj) | (ak & ai) | (aj & ai)) + ah + Y[ap] + 2400959708) & 4294967295;
					ah = ai;
					ai = aj;
					aj = Z(ak, 30);
					ak = al;
					al = aq
				}
				for (ap = 60; ap <= 79; ap++) {
					aq = (Z(al, 5) + (ak ^ aj ^ ai) + ah + Y[ap] + 3395469782) & 4294967295;
					ah = ai;
					ai = aj;
					aj = Z(ak, 30);
					ak = al;
					al = aq
				}
				ag = (ag + al) & 4294967295;
				ae = (ae + ak) & 4294967295;
				ad = (ad + aj) & 4294967295;
				ab = (ab + ai) & 4294967295;
				aa = (aa + ah) & 4294967295
			}
			aq = an(ag) + an(ae) + an(ad) + an(ab) + an(aa);
			return aq.toLowerCase()
		}

		function N(Y, W, X) {
			if (Y === "translate.googleusercontent.com") {
				if (X === "") {
					X = W
				}
				W = I(W, "u");
				Y = b(W)
			} else {
				if (Y === "cc.bingj.com" || Y === "webcache.googleusercontent.com" || Y.slice(0, 5) === "74.6.") {
					W = u.links[0].href;
					Y = b(W)
				}
			}
			return [Y, W, X]
		}

		function y(X) {
			var W = X.length;
			if (X.charAt(--W) === ".") {
				X = X.slice(0, W)
			}
			if (X.slice(0, 2) === "*.") {
				X = X.slice(1)
			}
			return X
		}

		function V(X) {
			X = X && X.text ? X.text : X;
			if (!n(X)) {
				var W = u.getElementsByTagName("title");
				if (W && w(W[0])) {
					X = W[0].text
				}
			}
			return X
		}

		function C(W) {
			if (!W) {
				return []
			}
			if (!w(W.children) && w(W.childNodes)) {
				return W.children
			}
			if (w(W.children)) {
				return W.children
			}
			return []
		}

		function H(X, W) {
			if (!X || !W) {
				return false
			}
			if (X.contains) {
				return X.contains(W)
			}
			if (X === W) {
				return true
			}
			if (X.compareDocumentPosition) {
				return !!(X.compareDocumentPosition(W) & 16)
			}
			return false
		}

		function z(Y, Z) {
			if (Y && Y.indexOf) {
				return Y.indexOf(Z)
			}
			if (!w(Y) || Y === null) {
				return -1
			}
			if (!Y.length) {
				return -1
			}
			var W = Y.length;
			if (W === 0) {
				return -1
			}
			var X = 0;
			while (X < W) {
				if (Y[X] === Z) {
					return X
				}
				X++
			}
			return -1
		}

		function g(Y) {
			if (!Y) {
				return false
			}

			function W(aa, ab) {
				if (G.getComputedStyle) {
					return u.defaultView.getComputedStyle(aa, null)[ab]
				}
				if (aa.currentStyle) {
					return aa.currentStyle[ab]
				}
			}

			function Z(aa) {
				aa = aa.parentNode;
				while (aa) {
					if (aa === u) {
						return true
					}
					aa = aa.parentNode
				}
				return false
			}

			function X(ac, ai, aa, af, ad, ag, ae) {
				var ab = ac.parentNode,
					ah = 1;
				if (!Z(ac)) {
					return false
				}
				if (9 === ab.nodeType) {
					return true
				}
				if ("0" === W(ac, "opacity") || "none" === W(ac, "display") || "hidden" === W(ac, "visibility")) {
					return false
				}
				if (!w(ai) || !w(aa) || !w(af) || !w(ad) || !w(ag) || !w(ae)) {
					ai = ac.offsetTop;
					ad = ac.offsetLeft;
					af = ai + ac.offsetHeight;
					aa = ad + ac.offsetWidth;
					ag = ac.offsetWidth;
					ae = ac.offsetHeight
				}
				if (Y === ac && (0 === ae || 0 === ag) && "hidden" === W(ac, "overflow")) {
					return false
				}
				if (ab) {
					if (("hidden" === W(ab, "overflow") || "scroll" === W(ab, "overflow"))) {
						if (ad + ah > ab.offsetWidth + ab.scrollLeft || ad + ag - ah < ab.scrollLeft || ai + ah > ab.offsetHeight + ab.scrollTop || ai + ae - ah < ab.scrollTop) {
							return false
						}
					}
					if (ac.offsetParent === ab) {
						ad += ab.offsetLeft;
						ai += ab.offsetTop
					}
					return X(ab, ai, aa, af, ad, ag, ae)
				}
				return true
			}
			return X(Y)
		}
		var Q = {
			htmlCollectionToArray: function(Y) {
				var W = [],
					X;
				if (!Y || !Y.length) {
					return W
				}
				for (X = 0; X < Y.length; X++) {
					W.push(Y[X])
				}
				return W
			},
			find: function(W) {
				if (!document.querySelectorAll || !W) {
					return []
				}
				var X = document.querySelectorAll(W);
				return this.htmlCollectionToArray(X)
			},
			findMultiple: function(Y) {
				if (!Y || !Y.length) {
					return []
				}
				var X, Z;
				var W = [];
				for (X = 0; X < Y.length; X++) {
					Z = this.find(Y[X]);
					W = W.concat(Z)
				}
				W = this.makeNodesUnique(W);
				return W
			},
			findNodesByTagName: function(X, W) {
				if (!X || !W || !X.getElementsByTagName) {
					return []
				}
				var Y = X.getElementsByTagName(W);
				return this.htmlCollectionToArray(Y)
			},
			makeNodesUnique: function(W) {
				var ab = [].concat(W);
				W.sort(function(ad, ac) {
					if (ad === ac) {
						return 0
					}
					var af = z(ab, ad);
					var ae = z(ab, ac);
					if (af === ae) {
						return 0
					}
					return af > ae ? -1 : 1
				});
				if (W.length <= 1) {
					return W
				}
				var X = 0;
				var Z = 0;
				var aa = [];
				var Y;
				Y = W[X++];
				while (Y) {
					if (Y === W[X]) {
						Z = aa.push(X)
					}
					Y = W[X++] || null
				}
				while (Z--) {
					W.splice(aa[Z], 1)
				}
				return W
			},
			getAttributeValueFromNode: function(aa, Y) {
				if (!this.hasNodeAttribute(aa, Y)) {
					return
				}
				if (aa && aa.getAttribute) {
					return aa.getAttribute(Y)
				}
				if (!aa || !aa.attributes) {
					return
				}
				var Z = (typeof aa.attributes[Y]);
				if ("undefined" === Z) {
					return
				}
				if (aa.attributes[Y].value) {
					return aa.attributes[Y].value
				}
				if (aa.attributes[Y].nodeValue) {
					return aa.attributes[Y].nodeValue
				}
				var X;
				var W = aa.attributes;
				if (!W) {
					return
				}
				for (X = 0; X < W.length; X++) {
					if (W[X].nodeName === Y) {
						return W[X].nodeValue
					}
				}
				return null
			},
			hasNodeAttributeWithValue: function(X, W) {
				var Y = this.getAttributeValueFromNode(X, W);
				return !!Y
			},
			hasNodeAttribute: function(Y, W) {
				if (Y && Y.hasAttribute) {
					return Y.hasAttribute(W)
				}
				if (Y && Y.attributes) {
					var X = (typeof Y.attributes[W]);
					return "undefined" !== X
				}
				return false
			},
			hasNodeCssClass: function(Y, X) {
				if (Y && X && Y.className) {
					var W = Y.className.split(" ");
					if (-1 !== z(W, X)) {
						return true
					}
				}
				return false
			},
			findNodesHavingAttribute: function(aa, Y, W) {
				if (!W) {
					W = []
				}
				if (!aa || !Y) {
					return W
				}
				var Z = C(aa);
				if (!Z || !Z.length) {
					return W
				}
				var X, ab;
				for (X = 0; X < Z.length; X++) {
					ab = Z[X];
					if (this.hasNodeAttribute(ab, Y)) {
						W.push(ab)
					}
					W = this.findNodesHavingAttribute(ab, Y, W)
				}
				return W
			},
			findFirstNodeHavingAttribute: function(Y, X) {
				if (!Y || !X) {
					return
				}
				if (this.hasNodeAttribute(Y, X)) {
					return Y
				}
				var W = this.findNodesHavingAttribute(Y, X);
				if (W && W.length) {
					return W[0]
				}
			},
			findFirstNodeHavingAttributeWithValue: function(Z, Y) {
				if (!Z || !Y) {
					return
				}
				if (this.hasNodeAttributeWithValue(Z, Y)) {
					return Z
				}
				var W = this.findNodesHavingAttribute(Z, Y);
				if (!W || !W.length) {
					return
				}
				var X;
				for (X = 0; X < W.length; X++) {
					if (this.getAttributeValueFromNode(W[X], Y)) {
						return W[X]
					}
				}
			},
			findNodesHavingCssClass: function(aa, Z, W) {
				if (!W) {
					W = []
				}
				if (!aa || !Z) {
					return W
				}
				if (aa.getElementsByClassName) {
					var ab = aa.getElementsByClassName(Z);
					return this.htmlCollectionToArray(ab)
				}
				var Y = C(aa);
				if (!Y || !Y.length) {
					return []
				}
				var X, ac;
				for (X = 0; X < Y.length; X++) {
					ac = Y[X];
					if (this.hasNodeCssClass(ac, Z)) {
						W.push(ac)
					}
					W = this.findNodesHavingCssClass(ac, Z, W)
				}
				return W
			},
			findFirstNodeHavingClass: function(Y, X) {
				if (!Y || !X) {
					return
				}
				if (this.hasNodeCssClass(Y, X)) {
					return Y
				}
				var W = this.findNodesHavingCssClass(Y, X);
				if (W && W.length) {
					return W[0]
				}
			},
			isLinkElement: function(X) {
				if (!X) {
					return false
				}
				var W = String(X.nodeName).toLowerCase();
				var Z = ["a", "area"];
				var Y = z(Z, W);
				return Y !== -1
			},
			setAnyAttribute: function(X, W, Y) {
				if (!X || !W) {
					return
				}
				if (X.setAttribute) {
					X.setAttribute(W, Y)
				} else {
					X[W] = Y
				}
			}
		};
		var m = {
			CONTENT_ATTR: "data-track-content",
			CONTENT_CLASS: "piwikTrackContent",
			CONTENT_NAME_ATTR: "data-content-name",
			CONTENT_PIECE_ATTR: "data-content-piece",
			CONTENT_PIECE_CLASS: "piwikContentPiece",
			CONTENT_TARGET_ATTR: "data-content-target",
			CONTENT_TARGET_CLASS: "piwikContentTarget",
			CONTENT_IGNOREINTERACTION_ATTR: "data-content-ignoreinteraction",
			CONTENT_IGNOREINTERACTION_CLASS: "piwikContentIgnoreInteraction",
			location: undefined,
			findContentNodes: function() {
				var X = "." + this.CONTENT_CLASS;
				var W = "[" + this.CONTENT_ATTR + "]";
				var Y = Q.findMultiple([X, W]);
				return Y
			},
			findContentNodesWithinNode: function(Z) {
				if (!Z) {
					return []
				}
				var X = Q.findNodesHavingCssClass(Z, this.CONTENT_CLASS);
				var W = Q.findNodesHavingAttribute(Z, this.CONTENT_ATTR);
				if (W && W.length) {
					var Y;
					for (Y = 0; Y < W.length; Y++) {
						X.push(W[Y])
					}
				}
				if (Q.hasNodeAttribute(Z, this.CONTENT_ATTR)) {
					X.push(Z)
				} else {
					if (Q.hasNodeCssClass(Z, this.CONTENT_CLASS)) {
						X.push(Z)
					}
				}
				X = Q.makeNodesUnique(X);
				return X
			},
			findParentContentNode: function(X) {
				if (!X) {
					return
				}
				var Y = X;
				var W = 0;
				while (Y && Y !== u && Y.parentNode) {
					if (Q.hasNodeAttribute(Y, this.CONTENT_ATTR)) {
						return Y
					}
					if (Q.hasNodeCssClass(Y, this.CONTENT_CLASS)) {
						return Y
					}
					Y = Y.parentNode;
					if (W > 1000) {
						break
					}
					W++
				}
			},
			findPieceNode: function(X) {
				var W;
				W = Q.findFirstNodeHavingAttribute(X, this.CONTENT_PIECE_ATTR);
				if (!W) {
					W = Q.findFirstNodeHavingClass(X, this.CONTENT_PIECE_CLASS)
				}
				if (W) {
					return W
				}
				return X
			},
			findTargetNodeNoDefault: function(W) {
				if (!W) {
					return
				}
				var X = Q.findFirstNodeHavingAttributeWithValue(W, this.CONTENT_TARGET_ATTR);
				if (X) {
					return X
				}
				X = Q.findFirstNodeHavingAttribute(W, this.CONTENT_TARGET_ATTR);
				if (X) {
					return X
				}
				X = Q.findFirstNodeHavingClass(W, this.CONTENT_TARGET_CLASS);
				if (X) {
					return X
				}
			},
			findTargetNode: function(W) {
				var X = this.findTargetNodeNoDefault(W);
				if (X) {
					return X
				}
				return W
			},
			findContentName: function(X) {
				if (!X) {
					return
				}
				var aa = Q.findFirstNodeHavingAttributeWithValue(X, this.CONTENT_NAME_ATTR);
				if (aa) {
					return Q.getAttributeValueFromNode(aa, this.CONTENT_NAME_ATTR)
				}
				var W = this.findContentPiece(X);
				if (W) {
					return this.removeDomainIfIsInLink(W)
				}
				if (Q.hasNodeAttributeWithValue(X, "title")) {
					return Q.getAttributeValueFromNode(X, "title")
				}
				var Y = this.findPieceNode(X);
				if (Q.hasNodeAttributeWithValue(Y, "title")) {
					return Q.getAttributeValueFromNode(Y, "title")
				}
				var Z = this.findTargetNode(X);
				if (Q.hasNodeAttributeWithValue(Z, "title")) {
					return Q.getAttributeValueFromNode(Z, "title")
				}
			},
			findContentPiece: function(X) {
				if (!X) {
					return
				}
				var Z = Q.findFirstNodeHavingAttributeWithValue(X, this.CONTENT_PIECE_ATTR);
				if (Z) {
					return Q.getAttributeValueFromNode(Z, this.CONTENT_PIECE_ATTR)
				}
				var W = this.findPieceNode(X);
				var Y = this.findMediaUrlInNode(W);
				if (Y) {
					return this.toAbsoluteUrl(Y)
				}
			},
			findContentTarget: function(Y) {
				if (!Y) {
					return
				}
				var Z = this.findTargetNode(Y);
				if (Q.hasNodeAttributeWithValue(Z, this.CONTENT_TARGET_ATTR)) {
					return Q.getAttributeValueFromNode(Z, this.CONTENT_TARGET_ATTR)
				}
				var X;
				if (Q.hasNodeAttributeWithValue(Z, "href")) {
					X = Q.getAttributeValueFromNode(Z, "href");
					return this.toAbsoluteUrl(X)
				}
				var W = this.findPieceNode(Y);
				if (Q.hasNodeAttributeWithValue(W, "href")) {
					X = Q.getAttributeValueFromNode(W, "href");
					return this.toAbsoluteUrl(X)
				}
			},
			isSameDomain: function(W) {
				if (!W || !W.indexOf) {
					return false
				}
				if (0 === W.indexOf(this.getLocation().origin)) {
					return true
				}
				var X = W.indexOf(this.getLocation().host);
				if (8 >= X && 0 <= X) {
					return true
				}
				return false
			},
			removeDomainIfIsInLink: function(Y) {
				var X = "^https?://[^/]+";
				var W = "^.*//[^/]+";
				if (Y && Y.search && -1 !== Y.search(new RegExp(X)) && this.isSameDomain(Y)) {
					Y = Y.replace(new RegExp(W), "");
					if (!Y) {
						Y = "/"
					}
				}
				return Y
			},
			findMediaUrlInNode: function(aa) {
				if (!aa) {
					return
				}
				var Y = ["img", "embed", "video", "audio"];
				var W = aa.nodeName.toLowerCase();
				if (-1 !== z(Y, W) && Q.findFirstNodeHavingAttributeWithValue(aa, "src")) {
					var Z = Q.findFirstNodeHavingAttributeWithValue(aa, "src");
					return Q.getAttributeValueFromNode(Z, "src")
				}
				if (W === "object" && Q.hasNodeAttributeWithValue(aa, "data")) {
					return Q.getAttributeValueFromNode(aa, "data")
				}
				if (W === "object") {
					var ab = Q.findNodesByTagName(aa, "param");
					if (ab && ab.length) {
						var X;
						for (X = 0; X < ab.length; X++) {
							if ("movie" === Q.getAttributeValueFromNode(ab[X], "name") && Q.hasNodeAttributeWithValue(ab[X], "value")) {
								return Q.getAttributeValueFromNode(ab[X], "value")
							}
						}
					}
					var ac = Q.findNodesByTagName(aa, "embed");
					if (ac && ac.length) {
						return this.findMediaUrlInNode(ac[0])
					}
				}
			},
			trim: function(W) {
				if (W && String(W) === W) {
					return W.replace(/^\s+|\s+$/g, "")
				}
				return W
			},
			isOrWasNodeInViewport: function(ab) {
				if (!ab || !ab.getBoundingClientRect || ab.nodeType !== 1) {
					return true
				}
				var aa = ab.getBoundingClientRect();
				var Z = u.documentElement || {};
				var Y = aa.top < 0;
				if (Y && ab.offsetTop) {
					Y = (ab.offsetTop + aa.height) > 0
				}
				var X = Z.clientWidth;
				if (G.innerWidth && X > G.innerWidth) {
					X = G.innerWidth
				}
				var W = Z.clientHeight;
				if (G.innerHeight && W > G.innerHeight) {
					W = G.innerHeight
				}
				return ((aa.bottom > 0 || Y) && aa.right > 0 && aa.left < X && ((aa.top < W) || Y))
			},
			isNodeVisible: function(X) {
				var W = g(X);
				var Y = this.isOrWasNodeInViewport(X);
				return W && Y
			},
			buildInteractionRequestParams: function(W, X, Y, Z) {
				var aa = "";
				if (W) {
					aa += "c_i=" + l(W)
				}
				if (X) {
					if (aa) {
						aa += "&"
					}
					aa += "c_n=" + l(X)
				}
				if (Y) {
					if (aa) {
						aa += "&"
					}
					aa += "c_p=" + l(Y)
				}
				if (Z) {
					if (aa) {
						aa += "&"
					}
					aa += "c_t=" + l(Z)
				}
				return aa
			},
			buildImpressionRequestParams: function(W, X, Y) {
				var Z = "c_n=" + l(W) + "&c_p=" + l(X);
				if (Y) {
					Z += "&c_t=" + l(Y)
				}
				return Z
			},
			buildContentBlock: function(Y) {
				if (!Y) {
					return
				}
				var W = this.findContentName(Y);
				var X = this.findContentPiece(Y);
				var Z = this.findContentTarget(Y);
				W = this.trim(W);
				X = this.trim(X);
				Z = this.trim(Z);
				return {
					name: W || "Unknown",
					piece: X || "Unknown",
					target: Z || ""
				}
			},
			collectContent: function(Z) {
				if (!Z || !Z.length) {
					return []
				}
				var Y = [];
				var W, X;
				for (W = 0; W < Z.length; W++) {
					X = this.buildContentBlock(Z[W]);
					if (w(X)) {
						Y.push(X)
					}
				}
				return Y
			},
			setLocation: function(W) {
				this.location = W
			},
			getLocation: function() {
				var W = this.location || G.location;
				if (!W.origin) {
					W.origin = W.protocol + "//" + W.hostname + (W.port ? ":" + W.port : "")
				}
				return W
			},
			toAbsoluteUrl: function(X) {
				if ((!X || String(X) !== X) && X !== "") {
					return X
				}
				if ("" === X) {
					return this.getLocation().href
				}
				if (X.search(/^\/\//) !== -1) {
					return this.getLocation().protocol + X
				}
				if (X.search(/:\/\//) !== -1) {
					return X
				}
				if (0 === X.indexOf("#")) {
					return this.getLocation().origin + this.getLocation().pathname + X
				}
				if (0 === X.indexOf("?")) {
					return this.getLocation().origin + this.getLocation().pathname + X
				}
				if (0 === X.search("^[a-zA-Z]{2,11}:")) {
					return X
				}
				if (X.search(/^\//) !== -1) {
					return this.getLocation().origin + X
				}
				var W = "(.*/)";
				var Y = this.getLocation().origin + this.getLocation().pathname.match(new RegExp(W))[0];
				return Y + X
			},
			isUrlToCurrentDomain: function(X) {
				var Y = this.toAbsoluteUrl(X);
				if (!Y) {
					return false
				}
				var W = this.getLocation().origin;
				if (W === Y) {
					return true
				}
				if (0 === String(Y).indexOf(W)) {
					if (":" === String(Y).substr(W.length, 1)) {
						return false
					}
					return true
				}
				return false
			},
			setHrefAttribute: function(X, W) {
				if (!X || !W) {
					return
				}
				Q.setAnyAttribute(X, "href", W)
			},
			shouldIgnoreInteraction: function(Y) {
				var X = Q.hasNodeAttribute(Y, this.CONTENT_IGNOREINTERACTION_ATTR);
				var W = Q.hasNodeCssClass(Y, this.CONTENT_IGNOREINTERACTION_CLASS);
				return X || W
			}
		};

		function B(W, X) {
			if (X) {
				return X
			}
			if (W.slice(-9) === "piwik.php") {
				W = W.slice(0, W.length - 9)
			}
			return W
		}

		function A(aa) {
			var W = "Piwik_Overlay";
			var ad = new RegExp("index\\.php\\?module=Overlay&action=startOverlaySession&idSite=([0-9]+)&period=([^&]+)&date=([^&]+)$");
			var Y = ad.exec(u.referrer);
			if (Y) {
				var Z = Y[1];
				if (Z !== String(aa)) {
					return false
				}
				var ac = Y[2],
					X = Y[3];
				G.name = W + "###" + ac + "###" + X
			}
			var ab = G.name.split("###");
			return ab.length === 3 && ab[0] === W
		}

		function M(X, ac, Z) {
			var ab = G.name.split("###"),
				aa = ab[1],
				W = ab[2],
				Y = B(X, ac);
			i(Y + "plugins/Overlay/client/client.js?v=1", function() {
				Piwik_Overlay_Client.initialize(Y, Z, aa, W)
			})
		}

		function D(aE, bl, bJ) {
			var ad = N(u.domain, G.location.href, x()),
				bL = y(ad[0]),
				b3 = F(ad[1]),
				bt = F(ad[2]),
				b6 = false,
				bp = "GET",
				br = bp,
				bb = "application/x-www-form-urlencoded; charset=UTF-8",
				aK = bb,
				aa = aE || "",
				ax = "",
				bn = "",
				bR = bl || "",
				aJ = "",
				a6, aS = u.title,
				aU = "7z|aac|apk|ar[cj]|as[fx]|avi|azw3|bin|csv|deb|dmg|docx?|epub|exe|flv|gif|gz|gzip|hqx|jar|jpe?g|js|mobi|mp(2|3|4|e?g)|mov(ie)?|ms[ip]|od[bfgpst]|og[gv]|pdf|phps|png|pptx?|qtm?|ra[mr]?|rpm|sea|sit|tar|t?bz2?|tgz|torrent|txt|wav|wm[av]|wpd||xlsx?|xml|z|zip",
				bo = [bL],
				ai = [],
				be = [],
				aC = [],
				bm = 500,
				aj, aG, ak, an, aY = ["pk_campaign", "piwik_campaign", "utm_campaign", "utm_source", "utm_medium"],
				aP = ["pk_kwd", "piwik_kwd", "utm_term"],
				b1 = "_pk_",
				aq, b2, ao = false,
				bV, a0, a4, aw = 33955200000,
				az = 1800000,
				a9 = 15768000000,
				a1 = true,
				aI = 0,
				a5 = false,
				ag = false,
				au, bf = {},
				ab = {},
				bW = 200,
				bD = {},
				bS = {},
				ah = [],
				ay = false,
				a8 = false,
				by = false,
				bT = false,
				bv = false,
				bs, bi, at, aX = T,
				bx, a2 = bJ;

			function bF(cf, cc, cb, ce, ca, cd) {
				if (ao) {
					return
				}
				var b9;
				if (cb) {
					b9 = new Date();
					b9.setTime(b9.getTime() + cb)
				}
				u.cookie = cf + "=" + l(cc) + (cb ? ";expires=" + b9.toGMTString() : "") + ";path=" + (ce || "/") + (ca ? ";domain=" + ca : "") + (cd ? ";secure" : "")
			}

			function av(cb) {
				if (ao) {
					return 0
				}
				var b9 = new RegExp("(^|;)[ ]*" + cb + "=([^;]*)"),
					ca = b9.exec(u.cookie);
				return ca ? F(ca[2]) : 0
			}

			function bX(b9) {
				var ca;
				if (ak) {
					ca = new RegExp("#.*");
					return b9.replace(ca, "")
				}
				return b9
			}

			function bK(cb, b9) {
				var cc = k(b9),
					ca;
				if (cc) {
					return b9
				}
				if (b9.slice(0, 1) === "/") {
					return k(cb) + "://" + b(cb) + b9
				}
				cb = bX(cb);
				ca = cb.indexOf("?");
				if (ca >= 0) {
					cb = cb.slice(0, ca)
				}
				ca = cb.lastIndexOf("/");
				if (ca !== cb.length - 1) {
					cb = cb.slice(0, ca + 1)
				}
				return cb + b9
			}

			function bq(cc) {
				var ca, b9, cb;
				for (ca = 0; ca < bo.length; ca++) {
					b9 = y(bo[ca].toLowerCase());
					if (cc === b9) {
						return true
					}
					if (b9.slice(0, 1) === ".") {
						if (cc === b9.slice(1)) {
							return true
						}
						cb = cc.length - b9.length;
						if ((cb > 0) && (cc.slice(cb) === b9)) {
							return true
						}
					}
				}
				return false
			}

			function b8(b9, cb) {
				var ca = new Image(1, 1);
				ca.onload = function() {
					t = 0;
					if (typeof cb === "function") {
						cb()
					}
				};
				ca.src = aa + (aa.indexOf("?") < 0 ? "?" : "&") + b9
			}

			function bG(ca, cd, b9) {
				if (!w(b9) || null === b9) {
					b9 = true
				}
				try {
					var cc = G.XMLHttpRequest ? new G.XMLHttpRequest() : G.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : null;
					cc.open("POST", aa, true);
					cc.onreadystatechange = function() {
						if (this.readyState === 4 && !(this.status >= 200 && this.status < 300) && b9) {
							b8(ca, cd)
						} else {
							if (typeof cd === "function") {
								cd()
							}
						}
					};
					cc.setRequestHeader("Content-Type", aK);
					cc.send(ca)
				} catch (cb) {
					if (b9) {
						b8(ca, cd)
					}
				}
			}

			function bY(ca) {
				var b9 = new Date();
				var cb = b9.getTime() + ca;
				if (!j || cb > j) {
					j = cb
				}
			}

			function aD(cd) {
				var ca = new Date();
				var b9 = ca.getTime();
				if (a8 && b9 < a8) {
					var cb = a8 - b9;
					setTimeout(cd, cb);
					bY(cb + 50);
					a8 += 50;
					return
				}
				if (a8 === false) {
					var cc = 800;
					a8 = b9 + cc
				}
				cd()
			}

			function aZ(ca, b9, cb) {
				if (!bV && ca) {
					aD(function() {
						if (br === "POST") {
							bG(ca, cb)
						} else {
							b8(ca, cb)
						}
						bY(b9)
					})
				}
			}

			function ba(b9) {
				if (bV) {
					return false
				}
				return (b9 && b9.length)
			}

			function ap(cb, b9) {
				if (!ba(cb)) {
					return
				}
				var ca = '{"requests":["?' + cb.join('","?') + '"]}';
				aD(function() {
					bG(ca, null, false);
					bY(b9)
				})
			}

			function bE(b9) {
				return b1 + b9 + "." + bR + "." + bx
			}

			function ae() {
				if (ao) {
					return "0"
				}
				if (!w(e.cookieEnabled)) {
					var b9 = bE("testcookie");
					bF(b9, "1");
					return av(b9) === "1" ? "1" : "0"
				}
				return e.cookieEnabled ? "1" : "0"
			}

			function bj() {
				bx = aX((aq || bL) + (b2 || "/")).slice(0, 4)
			}

			function ar() {
				var ca = bE("cvar"),
					b9 = av(ca);
				if (b9.length) {
					b9 = JSON2.parse(b9);
					if (J(b9)) {
						return b9
					}
				}
				return {}
			}

			function Z() {
				if (ag === false) {
					ag = ar()
				}
			}

			function bQ() {
				var b9 = new Date();
				bs = b9.getTime()
			}

			function Y() {
				var ca = new Date(),
					b9 = Math.round(ca.getTime() / 1000),
					cc = av(bE("id")),
					cb;
				if (cc) {
					cb = cc.split(".");
					cb.unshift("0")
				} else {
					if (!a2) {
						a2 = aX((e.userAgent || "") + (e.platform || "") + JSON2.stringify(bS) + ca.getTime() + Math.random()).slice(0, 16)
					}
					cb = ["1", a2, b9, 0, b9, "", ""]
				}
				return cb
			}

			function aL() {
				var cd = new Date(),
					ca = cd.getTime(),
					cc = Y();
				var b9 = parseInt(cc[2], 10);
				var cb = (b9 * 1000) + aw - ca;
				return cb
			}

			function am(cd, ca, b9, cc, cb, cf) {
				var ce = aL();
				bF(bE("id"), cd + "." + ca + "." + b9 + "." + cc + "." + cb + "." + cf, ce, b2, aq)
			}

			function X() {
				var b9 = av(bE("ref"));
				if (b9.length) {
					try {
						b9 = JSON2.parse(b9);
						if (J(b9)) {
							return b9
						}
					} catch (ca) {}
				}
				return ["", "", 0, ""]
			}

			function W() {
				var b9 = ao;
				ao = false;
				bF(bE("id"), "", -86400, b2, aq);
				bF(bE("ses"), "", -86400, b2, aq);
				bF(bE("cvar"), "", -86400, b2, aq);
				bF(bE("ref"), "", -86400, b2, aq);
				ao = b9
			}

			function bP(cd) {
				if (!cd || !J(cd)) {
					return
				}
				var cc = [];
				var cb;
				for (cb in cd) {
					if (Object.prototype.hasOwnProperty.call(cd, cb)) {
						cc.push(cb)
					}
				}
				var ce = {};
				cc.sort();
				var b9 = cc.length;
				var ca;
				for (ca = 0; ca < b9; ca++) {
					ce[cc[ca]] = cd[cc[ca]]
				}
				return ce
			}

			function aT(cb, cz, cA, cc) {
				var cx, ca = new Date(),
					cj = Math.round(ca.getTime() / 1000),
					cD, cy, ce, cp, cu, ci, cs, cf, cw, cd = 1024,
					cF, cm, ct = ag,
					ck = bE("ses"),
					cl = bE("ref"),
					cG = bE("cvar"),
					cq = Y(),
					co = av(ck),
					cv = X(),
					cC = a6 || b3,
					cg, b9;
				if (ao) {
					W()
				}
				if (bV) {
					return ""
				}
				cD = cq[0];
				cy = L.getVisitorId();
				cp = cq[2];
				ce = cq[3];
				cu = cq[4];
				ci = cq[5];
				if (!w(cq[6])) {
					cq[6] = ""
				}
				cs = cq[6];
				if (!w(cc)) {
					cc = ""
				}
				var cn = u.characterSet || u.charset;
				if (!cn || cn.toLowerCase() === "utf-8") {
					cn = null
				}
				cg = cv[0];
				b9 = cv[1];
				cf = cv[2];
				cw = cv[3];
				if (!co) {
					var cB = az / 1000;
					if (!ci || (cj - ci) > cB) {
						ce++;
						ci = cu
					}
					if (!a4 || !cg.length) {
						for (cx in aY) {
							if (Object.prototype.hasOwnProperty.call(aY, cx)) {
								cg = I(cC, aY[cx]);
								if (cg.length) {
									break
								}
							}
						}
						for (cx in aP) {
							if (Object.prototype.hasOwnProperty.call(aP, cx)) {
								b9 = I(cC, aP[cx]);
								if (b9.length) {
									break
								}
							}
						}
					}
					cF = b(bt);
					cm = cw.length ? b(cw) : "";
					if (cF.length && !bq(cF) && (!a4 || !cm.length || bq(cm))) {
						cw = bt
					}
					if (cw.length || cg.length) {
						cf = cj;
						cv = [cg, b9, cf, bX(cw.slice(0, cd))];
						bF(cl, JSON2.stringify(cv), a9, b2, aq)
					}
				}
				cb += "&idsite=" + bR + "&rec=1&r=" + String(Math.random()).slice(2, 8) + "&h=" + ca.getHours() + "&m=" + ca.getMinutes() + "&s=" + ca.getSeconds() + "&url=" + l(bX(cC)) + (bt.length ? "&urlref=" + l(bX(bt)) : "") + ((aJ && aJ.length) ? "&uid=" + l(aJ) : "") + "&_id=" + cy + "&_idts=" + cp + "&_idvc=" + ce + "&_idn=" + cD + (cg.length ? "&_rcn=" + l(cg) : "") + (b9.length ? "&_rck=" + l(b9) : "") + "&_refts=" + cf + "&_viewts=" + ci + (String(cs).length ? "&_ects=" + cs : "") + (String(cw).length ? "&_ref=" + l(bX(cw.slice(0, cd))) : "") + (cn ? "&cs=" + l(cn) : "") + "&send_image=0";
				for (cx in bS) {
					if (Object.prototype.hasOwnProperty.call(bS, cx)) {
						cb += "&" + cx + "=" + bS[cx]
					}
				}
				if (cz) {
					cb += "&data=" + l(JSON2.stringify(cz))
				} else {
					if (an) {
						cb += "&data=" + l(JSON2.stringify(an))
					}
				}

				function ch(cH, cI) {
					var cJ = JSON2.stringify(cH);
					if (cJ.length > 2) {
						return "&" + cI + "=" + l(cJ)
					}
					return ""
				}
				var cE = bP(bf);
				var cr = bP(ab);
				cb += ch(cE, "cvar");
				cb += ch(cr, "e_cvar");
				if (ag) {
					cb += ch(ag, "_cvar");
					for (cx in ct) {
						if (Object.prototype.hasOwnProperty.call(ct, cx)) {
							if (ag[cx][0] === "" || ag[cx][1] === "") {
								delete ag[cx]
							}
						}
					}
					if (a5) {
						bF(cG, JSON2.stringify(ag), az, b2, aq)
					}
				}
				if (a1) {
					if (aI) {
						cb += "&gt_ms=" + aI
					} else {
						if (f && f.timing && f.timing.requestStart && f.timing.responseEnd) {
							cb += "&gt_ms=" + (f.timing.responseEnd - f.timing.requestStart)
						}
					}
				}
				am(cy, cp, ce, cj, ci, w(cc) && String(cc).length ? cc : cs);
				bF(ck, "*", az, b2, aq);
				cb += O(cA);
				if (bn.length) {
					cb += "&" + bn
				}
				if (q(au)) {
					cb = au(cb)
				}
				return cb
			}

			function bI(cc, cb, cg, cd, b9, cj) {
				var ce = "idgoal=0",
					cf, ca = new Date(),
					ch = [],
					ci;
				if (String(cc).length) {
					ce += "&ec_id=" + l(cc);
					cf = Math.round(ca.getTime() / 1000)
				}
				ce += "&revenue=" + cb;
				if (String(cg).length) {
					ce += "&ec_st=" + cg
				}
				if (String(cd).length) {
					ce += "&ec_tx=" + cd
				}
				if (String(b9).length) {
					ce += "&ec_sh=" + b9
				}
				if (String(cj).length) {
					ce += "&ec_dt=" + cj
				}
				if (bD) {
					for (ci in bD) {
						if (Object.prototype.hasOwnProperty.call(bD, ci)) {
							if (!w(bD[ci][1])) {
								bD[ci][1] = ""
							}
							if (!w(bD[ci][2])) {
								bD[ci][2] = ""
							}
							if (!w(bD[ci][3]) || String(bD[ci][3]).length === 0) {
								bD[ci][3] = 0
							}
							if (!w(bD[ci][4]) || String(bD[ci][4]).length === 0) {
								bD[ci][4] = 1
							}
							ch.push(bD[ci])
						}
					}
					ce += "&ec_items=" + l(JSON2.stringify(ch))
				}
				ce = aT(ce, an, "ecommerce", cf);
				aZ(ce, bm)
			}

			function bH(b9, cd, cc, cb, ca, ce) {
				if (String(b9).length && w(cd)) {
					bI(b9, cd, cc, cb, ca, ce)
				}
			}

			function b0(b9) {
				if (w(b9)) {
					bI("", b9, "", "", "", "")
				}
			}

			function bd(cc, cd) {
				var b9 = new Date(),
					cb = aT("action_name=" + l(V(cc || aS)), cd, "log");
				aZ(cb, bm);
				if (aj && aG && !bv) {
					bv = true;
					U(u, "click", bQ);
					U(u, "mouseup", bQ);
					U(u, "mousedown", bQ);
					U(u, "mousemove", bQ);
					U(u, "mousewheel", bQ);
					U(G, "DOMMouseScroll", bQ);
					U(G, "scroll", bQ);
					U(u, "keypress", bQ);
					U(u, "keydown", bQ);
					U(u, "keyup", bQ);
					U(G, "resize", bQ);
					U(G, "focus", bQ);
					U(G, "blur", bQ);
					bs = b9.getTime();
					setTimeout(function ca() {
						var ce;
						b9 = new Date();
						if ((bs + aG) > b9.getTime()) {
							if (aj < b9.getTime()) {
								ce = aT("ping=1", cd, "ping");
								aZ(ce, bm)
							}
							setTimeout(ca, aG)
						}
					}, aG)
				}
			}

			function aH(cb, ca) {
				var cc, b9 = "(^| )(piwik[_-]" + ca;
				if (cb) {
					for (cc = 0; cc < cb.length; cc++) {
						b9 += "|" + cb[cc]
					}
				}
				b9 += ")( |$)";
				return new RegExp(b9)
			}

			function bB(b9) {
				return (aa && b9 && 0 === String(b9).indexOf(aa))
			}

			function bO(cc, b9, cd) {
				if (bB(b9)) {
					return 0
				}
				var cb = aH(be, "download"),
					ca = aH(aC, "link"),
					ce = new RegExp("\\.(" + aU + ")([?&#]|$)", "i");
				if (ca.test(cc)) {
					return "link"
				}
				if (cb.test(cc) || ce.test(b9)) {
					return "download"
				}
				if (cd) {
					return 0
				}
				return "link"
			}

			function a7(ca) {
				var b9;
				b9 = ca.parentNode;
				while (b9 !== null && w(b9)) {
					if (Q.isLinkElement(ca)) {
						break
					}
					ca = b9;
					b9 = ca.parentNode
				}
				return ca
			}

			function bh(cd) {
				cd = a7(cd);
				if (!Q.hasNodeAttribute(cd, "href")) {
					return
				}
				if (!w(cd.href)) {
					return
				}
				var cc = Q.getAttributeValueFromNode(cd, "href");
				if (bB(cc)) {
					return
				}
				var ce = cd.hostname || b(cd.href);
				var cf = ce.toLowerCase();
				var ca = cd.href.replace(ce, cf);
				var cb = new RegExp("^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto):", "i");
				if (!cb.test(ca)) {
					var b9 = bO(cd.className, ca, bq(cf));
					if (b9) {
						return {
							type: b9,
							href: ca
						}
					}
				}
			}

			function b5(b9, ca, cb, cc) {
				var cd = m.buildInteractionRequestParams(b9, ca, cb, cc);
				if (!cd) {
					return
				}
				return aT(cd, null, "contentInteraction")
			}

			function b4(cb, cc, cg, b9, ca) {
				if (!w(cb)) {
					return
				}
				if (bB(cb)) {
					return cb
				}
				var ce = m.toAbsoluteUrl(cb);
				var cd = "redirecturl=" + l(ce) + "&";
				cd += b5(cc, cg, b9, (ca || cb));
				var cf = "&";
				if (aa.indexOf("?") < 0) {
					cf = "?"
				}
				return aa + cf + cd
			}

			function a3(b9, ca) {
				if (!b9 || !ca) {
					return false
				}
				var cb = m.findTargetNode(b9);
				if (m.shouldIgnoreInteraction(cb)) {
					return false
				}
				cb = m.findTargetNodeNoDefault(b9);
				if (cb && !H(cb, ca)) {
					return false
				}
				return true
			}

			function aR(cb, ca, cd) {
				if (!cb) {
					return
				}
				var b9 = m.findParentContentNode(cb);
				if (!b9) {
					return
				}
				if (!a3(b9, cb)) {
					return
				}
				var cc = m.buildContentBlock(b9);
				if (!cc) {
					return
				}
				if (!cc.target && cd) {
					cc.target = cd
				}
				return m.buildInteractionRequestParams(ca, cc.name, cc.piece, cc.target)
			}

			function aO(ca) {
				if (!ah || !ah.length) {
					return false
				}
				var b9, cb;
				for (b9 = 0; b9 < ah.length; b9++) {
					cb = ah[b9];
					if (cb && cb.name === ca.name && cb.piece === ca.piece && cb.target === ca.target) {
						return true
					}
				}
				return false
			}

			function ac(cc) {
				if (!cc) {
					return false
				}
				var cf = m.findTargetNode(cc);
				if (!cf || m.shouldIgnoreInteraction(cf)) {
					return false
				}
				var cg = bh(cf);
				if (bT && cg && cg.type) {
					return false
				}
				if (Q.isLinkElement(cf) && Q.hasNodeAttributeWithValue(cf, "href")) {
					var b9 = String(Q.getAttributeValueFromNode(cf, "href"));
					if (0 === b9.indexOf("#")) {
						return false
					}
					if (bB(b9)) {
						return true
					}
					if (!m.isUrlToCurrentDomain(b9)) {
						return false
					}
					var cd = m.buildContentBlock(cc);
					if (!cd) {
						return
					}
					var cb = cd.name;
					var ch = cd.piece;
					var ce = cd.target;
					if (!Q.hasNodeAttributeWithValue(cf, m.CONTENT_TARGET_ATTR) || cf.wasContentTargetAttrReplaced) {
						cf.wasContentTargetAttrReplaced = true;
						ce = m.toAbsoluteUrl(b9);
						Q.setAnyAttribute(cf, m.CONTENT_TARGET_ATTR, ce)
					}
					var ca = b4(b9, "click", cb, ch, ce);
					m.setHrefAttribute(cf, ca);
					return true
				}
				return false
			}

			function af(ca) {
				if (!ca || !ca.length) {
					return
				}
				var b9;
				for (b9 = 0; b9 < ca.length; b9++) {
					ac(ca[b9])
				}
			}

			function bg(b9) {
				return function(ca) {
					if (!b9) {
						return
					}
					var cd = m.findParentContentNode(b9);
					var ce;
					if (ca) {
						ce = ca.target || ca.srcElement
					}
					if (!ce) {
						ce = b9
					}
					if (!a3(cd, ce)) {
						return
					}
					bY(bm);
					if (Q.isLinkElement(b9) && Q.hasNodeAttributeWithValue(b9, "href") && Q.hasNodeAttributeWithValue(b9, m.CONTENT_TARGET_ATTR)) {
						var cb = Q.getAttributeValueFromNode(b9, "href");
						if (!bB(cb) && b9.wasContentTargetAttrReplaced) {
							Q.setAnyAttribute(b9, m.CONTENT_TARGET_ATTR, "")
						}
					}
					var ci = bh(b9);
					if (by && ci && ci.type) {
						return ci.type
					}
					if (ac(cd)) {
						return "href"
					}
					var cf = m.buildContentBlock(cd);
					if (!cf) {
						return
					}
					var cc = cf.name;
					var cj = cf.piece;
					var ch = cf.target;
					var cg = b5("click", cc, cj, ch);
					aZ(cg, bm);
					return cg
				}
			}

			function aF(cb) {
				if (!cb || !cb.length) {
					return
				}
				var b9, ca;
				for (b9 = 0; b9 < cb.length; b9++) {
					ca = m.findTargetNode(cb[b9]);
					if (ca && !ca.contentInteractionTrackingSetupDone) {
						ca.contentInteractionTrackingSetupDone = true;
						U(ca, "click", bg(ca))
					}
				}
			}

			function aB(cb, cc) {
				if (!cb || !cb.length) {
					return []
				}
				var b9, ca;
				for (b9 = 0; b9 < cb.length; b9++) {
					if (aO(cb[b9])) {
						cb.splice(b9, 1);
						b9--
					} else {
						ah.push(cb[b9])
					}
				}
				if (!cb || !cb.length) {
					return []
				}
				af(cc);
				aF(cc);
				var cd = [];
				for (b9 = 0; b9 < cb.length; b9++) {
					ca = aT(m.buildImpressionRequestParams(cb[b9].name, cb[b9].piece, cb[b9].target), undefined, "contentImpressions");
					cd.push(ca)
				}
				return cd
			}

			function aW(ca) {
				var b9 = m.collectContent(ca);
				return aB(b9, ca)
			}

			function bA(ca) {
				if (!ca || !ca.length) {
					return []
				}
				var b9;
				for (b9 = 0; b9 < ca.length; b9++) {
					if (!m.isNodeVisible(ca[b9])) {
						ca.splice(b9, 1);
						b9--
					}
				}
				if (!ca || !ca.length) {
					return []
				}
				return aW(ca)
			}

			function bM(cb, b9, ca) {
				var cc = m.buildImpressionRequestParams(cb, b9, ca);
				return aT(cc, null, "contentImpression")
			}

			function aV(cc, ca) {
				if (!cc) {
					return
				}
				var b9 = m.findParentContentNode(cc);
				var cb = m.buildContentBlock(b9);
				if (!cb) {
					return
				}
				if (!ca) {
					ca = "Unknown"
				}
				return b5(ca, cb.name, cb.piece, cb.target)
			}

			function bw(ca, cc, b9, cb) {
				return "e_c=" + l(ca) + "&e_a=" + l(cc) + (w(b9) ? "&e_n=" + l(b9) : "") + (w(cb) ? "&e_v=" + l(cb) : "")
			}

			function al(cb, cd, b9, cc, ce) {
				if (String(cb).length === 0 || String(cd).length === 0) {
					return false
				}
				var ca = aT(bw(cb, cd, b9, cc), ce, "event");
				aZ(ca, bm)
			}

			function aN(b9, cc, ca, cd) {
				var cb = aT("search=" + l(b9) + (cc ? "&search_cat=" + l(cc) : "") + (w(ca) ? "&search_count=" + ca : ""), cd, "sitesearch");
				aZ(cb, bm)
			}

			function bk(b9, cc, cb) {
				var ca = aT("idgoal=" + b9 + (cc ? "&revenue=" + cc : ""), cb, "goal");
				aZ(ca, bm)
			}

			function bN(cc, b9, cg, cf, cb) {
				var ce = b9 + "=" + l(bX(cc));
				var ca = aR(cb, "click", cc);
				if (ca) {
					ce += "&" + ca
				}
				var cd = aT(ce, cg, "link");
				aZ(cd, (cf ? 0 : bm), cf)
			}

			function bU(ca, b9) {
				if (ca !== "") {
					return ca + b9.charAt(0).toUpperCase() + b9.slice(1)
				}
				return b9
			}

			function aM(ce) {
				var cd, b9, cc = ["", "webkit", "ms", "moz"],
					cb;
				if (!a0) {
					for (b9 = 0; b9 < cc.length; b9++) {
						cb = cc[b9];
						if (Object.prototype.hasOwnProperty.call(u, bU(cb, "hidden"))) {
							if (u[bU(cb, "visibilityState")] === "prerender") {
								cd = true
							}
							break
						}
					}
				}
				if (cd) {
					U(u, cb + "visibilitychange", function ca() {
						u.removeEventListener(cb + "visibilitychange", ca, false);
						ce()
					});
					return
				}
				ce()
			}

			function aQ(b9) {
				if (u.readyState === "complete") {
					b9()
				} else {
					if (G.addEventListener) {
						G.addEventListener("load", b9)
					} else {
						if (G.attachEvent) {
							G.attachEvent("onLoad", b9)
						}
					}
				}
			}

			function aA(ca) {
				var b9 = false;
				if (u.attachEvent) {
					b9 = u.readyState === "complete"
				} else {
					b9 = u.readyState !== "loading"
				}
				if (b9) {
					ca()
				} else {
					if (u.addEventListener) {
						u.addEventListener("DOMContentLoaded", ca)
					} else {
						if (u.attachEvent) {
							u.attachEvent("onreadystatechange", ca)
						}
					}
				}
			}

			function bC(b9) {
				var ca = bh(b9);
				if (ca && ca.type) {
					ca.href = h(ca.href);
					bN(ca.href, ca.type, undefined, null, b9)
				}
			}

			function b7(b9) {
				var ca, cb;
				b9 = b9 || G.event;
				ca = b9.which || b9.button;
				cb = b9.target || b9.srcElement;
				if (b9.type === "click") {
					if (cb) {
						bC(cb)
					}
				} else {
					if (b9.type === "mousedown") {
						if ((ca === 1 || ca === 2) && cb) {
							bi = ca;
							at = cb
						} else {
							bi = at = null
						}
					} else {
						if (b9.type === "mouseup") {
							if (ca === bi && cb === at) {
								bC(cb)
							}
							bi = at = null
						}
					}
				}
			}

			function bz(ca, b9) {
				if (b9) {
					U(ca, "mouseup", b7, false);
					U(ca, "mousedown", b7, false)
				} else {
					U(ca, "click", b7, false)
				}
			}

			function bc(ca) {
				if (!by) {
					by = true;
					var cb, b9 = aH(ai, "ignore"),
						cc = u.links;
					if (cc) {
						for (cb = 0; cb < cc.length; cb++) {
							if (!b9.test(cc[cb].className)) {
								bz(cc[cb], ca)
							}
						}
					}
				}
			}

			function bu(cb, cd, ce) {
				if (ay) {
					return true
				}
				ay = true;
				var cf = false;
				var cc, ca;

				function b9() {
					cf = true
				}
				aQ(function() {
					function cg(ci) {
						setTimeout(function() {
							if (!ay) {
								return
							}
							cf = false;
							ce.trackVisibleContentImpressions();
							cg(ci)
						}, ci)
					}

					function ch(ci) {
						setTimeout(function() {
							if (!ay) {
								return
							}
							if (cf) {
								cf = false;
								ce.trackVisibleContentImpressions()
							}
							ch(ci)
						}, ci)
					}
					if (cb) {
						cc = ["scroll", "resize"];
						for (ca = 0; ca < cc.length; ca++) {
							if (u.addEventListener) {
								u.addEventListener(cc[ca], b9)
							} else {
								G.attachEvent("on" + cc[ca], b9)
							}
						}
						ch(100)
					}
					if (cd && cd > 0) {
						cd = parseInt(cd, 10);
						cg(cd)
					}
				})
			}

			function bZ() {
				var ca, cb, cc = {
						pdf: "application/pdf",
						qt: "video/quicktime",
						realp: "audio/x-pn-realaudio-plugin",
						wma: "application/x-mplayer2",
						dir: "application/x-director",
						fla: "application/x-shockwave-flash",
						java: "application/x-java-vm",
						gears: "application/x-googlegears",
						ag: "application/x-silverlight"
					},
					b9 = (new RegExp("Mac OS X.*Safari/")).test(e.userAgent) ? G.devicePixelRatio || 1 : 1;
				if (!((new RegExp("MSIE")).test(e.userAgent))) {
					if (e.mimeTypes && e.mimeTypes.length) {
						for (ca in cc) {
							if (Object.prototype.hasOwnProperty.call(cc, ca)) {
								cb = e.mimeTypes[cc[ca]];
								bS[ca] = (cb && cb.enabledPlugin) ? "1" : "0"
							}
						}
					}
					if (typeof navigator.javaEnabled !== "unknown" && w(e.javaEnabled) && e.javaEnabled()) {
						bS.java = "1"
					}
					if (q(G.GearsFactory)) {
						bS.gears = "1"
					}
					bS.cookie = ae()
				}
				bS.res = K.width * b9 + "x" + K.height * b9
			}
			bZ();
			bj();
			return {
				getVisitorId: function() {
					return aJ.length ? T(aJ).substr(0, 16) : (Y())[1]
				},
				getVisitorInfo: function() {
					return Y()
				},
				getAttributionInfo: function() {
					return X()
				},
				getAttributionCampaignName: function() {
					return X()[0]
				},
				getAttributionCampaignKeyword: function() {
					return X()[1]
				},
				getAttributionReferrerTimestamp: function() {
					return X()[2]
				},
				getAttributionReferrerUrl: function() {
					return X()[3]
				},
				setTrackerUrl: function(b9) {
					aa = b9
				},
				setSiteId: function(b9) {
					bR = b9
				},
				setUserId: function(b9) {
					aJ = b9
				},
				getUserId: function() {
					return aJ
				},
				setCustomData: function(b9, ca) {
					if (J(b9)) {
						an = b9
					} else {
						if (!an) {
							an = {}
						}
						an[b9] = ca
					}
				},
				getCustomData: function() {
					return an
				},
				setCustomRequestProcessing: function(b9) {
					au = b9
				},
				appendToTrackingUrl: function(b9) {
					bn = b9
				},
				getRequest: function(b9) {
					return aT(b9)
				},
				addPlugin: function(b9, ca) {
					a[b9] = ca
				},
				setCustomVariable: function(ca, b9, cd, cb) {
					var cc;
					if (!w(cb)) {
						cb = "visit"
					}
					if (!w(b9)) {
						return
					}
					if (!w(cd)) {
						cd = ""
					}
					if (ca > 0) {
						b9 = !n(b9) ? String(b9) : b9;
						cd = !n(cd) ? String(cd) : cd;
						cc = [b9.slice(0, bW), cd.slice(0, bW)];
						if (cb === "visit" || cb === 2) {
							Z();
							ag[ca] = cc
						} else {
							if (cb === "page" || cb === 3) {
								bf[ca] = cc
							} else {
								if (cb === "event") {
									ab[ca] = cc
								}
							}
						}
					}
				},
				getCustomVariable: function(ca, cb) {
					var b9;
					if (!w(cb)) {
						cb = "visit"
					}
					if (cb === "page" || cb === 3) {
						b9 = bf[ca]
					} else {
						if (cb === "event") {
							b9 = ab[ca]
						} else {
							if (cb === "visit" || cb === 2) {
								Z();
								b9 = ag[ca]
							}
						}
					}
					if (!w(b9) || (b9 && b9[0] === "")) {
						return false
					}
					return b9
				},
				deleteCustomVariable: function(b9, ca) {
					if (this.getCustomVariable(b9, ca)) {
						this.setCustomVariable(b9, "", "", ca)
					}
				},
				storeCustomVariablesInCookie: function() {
					a5 = true
				},
				setLinkTrackingTimer: function(b9) {
					bm = b9
				},
				setDownloadExtensions: function(b9) {
					aU = b9
				},
				addDownloadExtensions: function(b9) {
					aU += "|" + b9
				},
				setDomains: function(b9) {
					bo = n(b9) ? [b9] : b9;
					bo.push(bL)
				},
				setIgnoreClasses: function(b9) {
					ai = n(b9) ? [b9] : b9
				},
				setRequestMethod: function(b9) {
					br = b9 || bp
				},
				setRequestContentType: function(b9) {
					aK = b9 || bb
				},
				setReferrerUrl: function(b9) {
					bt = b9
				},
				setCustomUrl: function(b9) {
					a6 = bK(b3, b9)
				},
				setDocumentTitle: function(b9) {
					aS = b9
				},
				setAPIUrl: function(b9) {
					ax = b9
				},
				setDownloadClasses: function(b9) {
					be = n(b9) ? [b9] : b9
				},
				setLinkClasses: function(b9) {
					aC = n(b9) ? [b9] : b9
				},
				setCampaignNameKey: function(b9) {
					aY = n(b9) ? [b9] : b9
				},
				setCampaignKeywordKey: function(b9) {
					aP = n(b9) ? [b9] : b9
				},
				discardHashTag: function(b9) {
					ak = b9
				},
				setCookieNamePrefix: function(b9) {
					b1 = b9;
					ag = ar()
				},
				setCookieDomain: function(b9) {
					aq = y(b9);
					bj()
				},
				setCookiePath: function(b9) {
					b2 = b9;
					bj()
				},
				setVisitorCookieTimeout: function(b9) {
					aw = b9 * 1000
				},
				setSessionCookieTimeout: function(b9) {
					az = b9 * 1000
				},
				setReferralCookieTimeout: function(b9) {
					a9 = b9 * 1000
				},
				setConversionAttributionFirstReferrer: function(b9) {
					a4 = b9
				},
				disableCookies: function() {
					ao = true;
					bS.cookie = "0"
				},
				deleteCookies: function() {
					W()
				},
				setDoNotTrack: function(ca) {
					var b9 = e.doNotTrack || e.msDoNotTrack;
					bV = ca && (b9 === "yes" || b9 === "1");
					if (bV) {
						this.disableCookies()
					}
				},
				addListener: function(ca, b9) {
					bz(ca, b9)
				},
				enableLinkTracking: function(b9) {
					bT = true;
					if (p) {
						bc(b9)
					} else {
						E.push(function() {
							bc(b9)
						})
					}
				},
				enableJSErrorTracking: function() {
					if (b6) {
						return
					}
					b6 = true;
					var b9 = G.onerror;
					G.onerror = function(ce, cc, cb, cd, ca) {
						aM(function() {
							var cf = "JavaScript Errors";
							var cg = cc + ":" + cb;
							if (cd) {
								cg += ":" + cd
							}
							al(cf, cg, ce)
						});
						if (b9) {
							return b9(ce, cc, cb, cd, ca)
						}
						return false
					}
				},
				disablePerformanceTracking: function() {
					a1 = false
				},
				setGenerationTimeMs: function(b9) {
					aI = parseInt(b9, 10)
				},
				setHeartBeatTimer: function(cb, ca) {
					var b9 = new Date();
					aj = b9.getTime() + cb * 1000;
					aG = ca * 1000
				},
				killFrame: function() {
					if (G.location !== G.top.location) {
						G.top.location = G.location
					}
				},
				redirectFile: function(b9) {
					if (G.location.protocol === "file:") {
						G.location = b9
					}
				},
				setCountPreRendered: function(b9) {
					a0 = b9
				},
				trackGoal: function(b9, cb, ca) {
					aM(function() {
						bk(b9, cb, ca)
					})
				},
				trackLink: function(ca, b9, cc, cb) {
					aM(function() {
						bN(ca, b9, cc, cb)
					})
				},
				trackPageView: function(b9, ca) {
					ah = [];
					if (A(bR)) {
						aM(function() {
							M(aa, ax, bR)
						})
					} else {
						aM(function() {
							bd(b9, ca)
						})
					}
				},
				trackAllContentImpressions: function() {
					if (A(bR)) {
						return
					}
					aM(function() {
						aA(function() {
							var b9 = m.findContentNodes();
							var ca = aW(b9);
							ap(ca, bm)
						})
					})
				},
				trackVisibleContentImpressions: function(b9, ca) {
					if (A(bR)) {
						return
					}
					if (!w(b9)) {
						b9 = true
					}
					if (!w(ca)) {
						ca = 750
					}
					bu(b9, ca, this);
					aM(function() {
						aQ(function() {
							var cb = m.findContentNodes();
							var cc = bA(cb);
							ap(cc, bm)
						})
					})
				},
				trackContentImpression: function(cb, b9, ca) {
					if (A(bR)) {
						return
					}
					if (!cb) {
						return
					}
					b9 = b9 || "Unknown";
					aM(function() {
						var cc = bM(cb, b9, ca);
						aZ(cc, bm)
					})
				},
				trackContentImpressionsWithinNode: function(b9) {
					if (A(bR) || !b9) {
						return
					}
					aM(function() {
						if (ay) {
							aQ(function() {
								var ca = m.findContentNodesWithinNode(b9);
								var cb = bA(ca);
								ap(cb, bm)
							})
						} else {
							aA(function() {
								var ca = m.findContentNodesWithinNode(b9);
								var cb = aW(ca);
								ap(cb, bm)
							})
						}
					})
				},
				trackContentInteraction: function(cb, cc, b9, ca) {
					if (A(bR)) {
						return
					}
					if (!cb || !cc) {
						return
					}
					b9 = b9 || "Unknown";
					aM(function() {
						var cd = b5(cb, cc, b9, ca);
						aZ(cd, bm)
					})
				},
				trackContentInteractionNode: function(ca, b9) {
					if (A(bR) || !ca) {
						return
					}
					aM(function() {
						var cb = aV(ca, b9);
						aZ(cb, bm)
					})
				},
				trackEvent: function(ca, cc, b9, cb) {
					aM(function() {
						al(ca, cc, b9, cb)
					})
				},
				trackSiteSearch: function(b9, cb, ca) {
					aM(function() {
						aN(b9, cb, ca)
					})
				},
				setEcommerceView: function(cc, b9, cb, ca) {
					if (!w(cb) || !cb.length) {
						cb = ""
					} else {
						if (cb instanceof Array) {
							cb = JSON2.stringify(cb)
						}
					}
					bf[5] = ["_pkc", cb];
					if (w(ca) && String(ca).length) {
						bf[2] = ["_pkp", ca]
					}
					if ((!w(cc) || !cc.length) && (!w(b9) || !b9.length)) {
						return
					}
					if (w(cc) && cc.length) {
						bf[3] = ["_pks", cc]
					}
					if (!w(b9) || !b9.length) {
						b9 = ""
					}
					bf[4] = ["_pkn", b9]
				},
				addEcommerceItem: function(cd, b9, cb, ca, cc) {
					if (cd.length) {
						bD[cd] = [cd, b9, cb, ca, cc]
					}
				},
				trackEcommerceOrder: function(b9, cd, cc, cb, ca, ce) {
					bH(b9, cd, cc, cb, ca, ce)
				},
				trackEcommerceCartUpdate: function(b9) {
					b0(b9)
				}
			}
		}

		function v() {
			return {
				push: R
			}
		}
		U(G, "beforeunload", S, false);
		o();
		Date.prototype.getTimeAlias = Date.prototype.getTime;
		L = new D();
		var r = {
			setTrackerUrl: 1,
			setAPIUrl: 1,
			setUserId: 1,
			setSiteId: 1,
			disableCookies: 1,
			enableLinkTracking: 1
		};
		var d;
		for (t = 0; t < _paq.length; t++) {
			d = _paq[t][0];
			if (r[d]) {
				R(_paq[t]);
				delete _paq[t];
				if (r[d] > 1) {
					if (console !== undefined && console && console.error) {
						console.error("The method " + d + ' is registered more than once in "_paq" variable. Only the last call has an effect. Please have a look at the multiple Piwik trackers documentation: http://developer.piwik.org/api-reference/tracking-javascript#multiple-piwik-trackers')
					}
				}
				r[d]++
			}
		}
		for (t = 0; t < _paq.length; t++) {
			if (_paq[t]) {
				R(_paq[t])
			}
		}
		_paq = new v();
		c = {
			addPlugin: function(W, X) {
				a[W] = X
			},
			getTracker: function(W, X) {
				return new D(W, X, L.getVisitorId())
			},
			getAsyncTracker: function() {
				return L
			}
		};
		if (typeof define === "function" && define.amd) {
			define("piwik", [], function() {
				return c
			})
		}
		return c
	}())
}
if (window && window.piwikAsyncInit) {
	window.piwikAsyncInit()
}(function() {
	var a = (typeof AnalyticsTracker);
	if (a === "undefined") {
		AnalyticsTracker = Piwik
	}
}());
if (typeof piwik_log !== "function") {
	piwik_log = function(b, f, d, g) {
		function a(h) {
			try {
				return eval("piwik_" + h)
			} catch (i) {}
			return
		}
		var c, e = Piwik.getTracker(d, f);
		e.setDocumentTitle(b);
		e.setCustomData(g);
		c = a("tracker_pause");
		if (c) {
			e.setLinkTrackingTimer(c)
		}
		c = a("download_extensions");
		if (c) {
			e.setDownloadExtensions(c)
		}
		c = a("hosts_alias");
		if (c) {
			e.setDomains(c)
		}
		c = a("ignore_classes");
		if (c) {
			e.setIgnoreClasses(c)
		}
		e.trackPageView();
		if (a("install_tracker")) {
			piwik_track = function(i, k, j, h) {
				e.setSiteId(k);
				e.setTrackerUrl(j);
				e.trackLink(i, h)
			};
			e.enableLinkTracking()
		}
	};
	/*! @license-end */
};