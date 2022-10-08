          var swiper = new Swiper(".mySwiper", {
            effect: "flip",
            grabCursor: !0,
            pagination: { el: ".swiper-pagination" },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });

!(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define(t) : ((e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t());
})(this, function () {
    "use strict";
    function e(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object;
    }
    function t(s, a) {
        void 0 === s && (s = {}),
            void 0 === a && (a = {}),
            Object.keys(a).forEach((i) => {
                void 0 === s[i] ? (s[i] = a[i]) : e(a[i]) && e(s[i]) && Object.keys(a[i]).length > 0 && t(s[i], a[i]);
            });
    }
    let s = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: { blur() {}, nodeName: "" },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({ initEvent() {} }),
        createElement: () => ({ children: [], childNodes: [], style: {}, setAttribute() {}, getElementsByTagName: () => [] }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" },
    };
    function a() {
        let e = "undefined" != typeof document ? document : {};
        return t(e, s), e;
    }
    let i = {
        document: s,
        navigator: { userAgent: "" },
        location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" },
        history: { replaceState() {}, pushState() {}, go() {}, back() {} },
        CustomEvent: function () {
            return this;
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({ getPropertyValue: () => "" }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: (e) => ("undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0)),
        cancelAnimationFrame(e) {
            "undefined" != typeof setTimeout && clearTimeout(e);
        },
    };
    function r() {
        let e = "undefined" != typeof window ? window : {};
        return t(e, i), e;
    }
    class l extends Array {
        constructor(e) {
            "number" == typeof e
                ? super(e)
                : (super(...(e || [])),
                  (function (e) {
                      let t = e.__proto__;
                      Object.defineProperty(e, "__proto__", {
                          get: () => t,
                          set(e) {
                              t.__proto__ = e;
                          },
                      });
                  })(this));
        }
    }
    function n(e) {
        void 0 === e && (e = []);
        let t = [];
        return (
            e.forEach((e) => {
                Array.isArray(e) ? t.push(...n(e)) : t.push(e);
            }),
            t
        );
    }
    function o(e, t) {
        return Array.prototype.filter.call(e, t);
    }
    function d(e, t) {
        let s = r(),
            i = a(),
            n = [];
        if (!t && e instanceof l) return e;
        if (!e) return new l(n);
        if ("string" == typeof e) {
            let o = e.trim();
            if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
                let d = "div";
                0 === o.indexOf("<li") && (d = "ul"),
                    0 === o.indexOf("<tr") && (d = "tbody"),
                    (0 !== o.indexOf("<td") && 0 !== o.indexOf("<th")) || (d = "tr"),
                    0 === o.indexOf("<tbody") && (d = "table"),
                    0 === o.indexOf("<option") && (d = "select");
                let p = i.createElement(d);
                p.innerHTML = o;
                for (let c = 0; c < p.childNodes.length; c += 1) n.push(p.childNodes[c]);
            } else
                n = (function (e, t) {
                    if ("string" != typeof e) return [e];
                    let s = [],
                        a = t.querySelectorAll(e);
                    for (let i = 0; i < a.length; i += 1) s.push(a[i]);
                    return s;
                })(e.trim(), t || i);
        } else if (e.nodeType || e === s || e === i) n.push(e);
        else if (Array.isArray(e)) {
            if (e instanceof l) return e;
            n = e;
        }
        return new l(
            (function (e) {
                let t = [];
                for (let s = 0; s < e.length; s += 1) -1 === t.indexOf(e[s]) && t.push(e[s]);
                return t;
            })(n)
        );
    }
    d.fn = l.prototype;
    let p = {
        addClass: function () {
            for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            let a = n(t.map((e) => e.split(" ")));
            return (
                this.forEach((e) => {
                    e.classList.add(...a);
                }),
                this
            );
        },
        removeClass: function () {
            for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            let a = n(t.map((e) => e.split(" ")));
            return (
                this.forEach((e) => {
                    e.classList.remove(...a);
                }),
                this
            );
        },
        hasClass: function () {
            for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            let a = n(t.map((e) => e.split(" ")));
            return o(this, (e) => a.filter((t) => e.classList.contains(t)).length > 0).length > 0;
        },
        toggleClass: function () {
            for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            let a = n(t.map((e) => e.split(" ")));
            this.forEach((e) => {
                a.forEach((t) => {
                    e.classList.toggle(t);
                });
            });
        },
        attr: function (e, t) {
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (let s = 0; s < this.length; s += 1)
                if (2 === arguments.length) this[s].setAttribute(e, t);
                else for (let a in e) (this[s][a] = e[a]), this[s].setAttribute(a, e[a]);
            return this;
        },
        removeAttr: function (e) {
            for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this;
        },
        transform: function (e) {
            for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
            return this;
        },
        transition: function (e) {
            for (let t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
            return this;
        },
        on: function () {
            for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            let [a, i, r, l] = t;
            function n(e) {
                let t = e.target;
                if (!t) return;
                let s = e.target.dom7EventData || [];
                if ((0 > s.indexOf(e) && s.unshift(e), d(t).is(i))) r.apply(t, s);
                else {
                    let a = d(t).parents();
                    for (let l = 0; l < a.length; l += 1) d(a[l]).is(i) && r.apply(a[l], s);
                }
            }
            function o(e) {
                let t = (e && e.target && e.target.dom7EventData) || [];
                0 > t.indexOf(e) && t.unshift(e), r.apply(this, t);
            }
            "function" == typeof t[1] && (([a, r, l] = t), (i = void 0)), l || (l = !1);
            let p = a.split(" "),
                c;
            for (let u = 0; u < this.length; u += 1) {
                let m = this[u];
                if (i)
                    for (c = 0; c < p.length; c += 1) {
                        let h = p[c];
                        m.dom7LiveListeners || (m.dom7LiveListeners = {}), m.dom7LiveListeners[h] || (m.dom7LiveListeners[h] = []), m.dom7LiveListeners[h].push({ listener: r, proxyListener: n }), m.addEventListener(h, n, l);
                    }
                else
                    for (c = 0; c < p.length; c += 1) {
                        let f = p[c];
                        m.dom7Listeners || (m.dom7Listeners = {}), m.dom7Listeners[f] || (m.dom7Listeners[f] = []), m.dom7Listeners[f].push({ listener: r, proxyListener: o }), m.addEventListener(f, o, l);
                    }
            }
            return this;
        },
        off: function () {
            for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            let [a, i, r, l] = t;
            "function" == typeof t[1] && (([a, r, l] = t), (i = void 0)), l || (l = !1);
            let n = a.split(" ");
            for (let o = 0; o < n.length; o += 1) {
                let d = n[o];
                for (let p = 0; p < this.length; p += 1) {
                    let c = this[p],
                        u;
                    if ((!i && c.dom7Listeners ? (u = c.dom7Listeners[d]) : i && c.dom7LiveListeners && (u = c.dom7LiveListeners[d]), u && u.length))
                        for (let m = u.length - 1; m >= 0; m -= 1) {
                            let h = u[m];
                            (r && h.listener === r) || (r && h.listener && h.listener.dom7proxy && h.listener.dom7proxy === r)
                                ? (c.removeEventListener(d, h.proxyListener, l), u.splice(m, 1))
                                : r || (c.removeEventListener(d, h.proxyListener, l), u.splice(m, 1));
                        }
                }
            }
            return this;
        },
        trigger: function () {
            let e = r();
            for (var t = arguments.length, s = Array(t), a = 0; a < t; a++) s[a] = arguments[a];
            let i = s[0].split(" "),
                l = s[1];
            for (let n = 0; n < i.length; n += 1) {
                let o = i[n];
                for (let d = 0; d < this.length; d += 1) {
                    let p = this[d];
                    if (e.CustomEvent) {
                        let c = new e.CustomEvent(o, { detail: l, bubbles: !0, cancelable: !0 });
                        (p.dom7EventData = s.filter((e, t) => t > 0)), p.dispatchEvent(c), (p.dom7EventData = []), delete p.dom7EventData;
                    }
                }
            }
            return this;
        },
        transitionEnd: function (e) {
            let t = this;
            return (
                e &&
                    t.on("transitionend", function s(a) {
                        a.target === this && (e.call(this, a), t.off("transitionend", s));
                    }),
                this
            );
        },
        outerWidth: function (e) {
            if (this.length > 0) {
                if (e) {
                    let t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"));
                }
                return this[0].offsetWidth;
            }
            return null;
        },
        outerHeight: function (e) {
            if (this.length > 0) {
                if (e) {
                    let t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"));
                }
                return this[0].offsetHeight;
            }
            return null;
        },
        styles: function () {
            let e = r();
            return this[0] ? e.getComputedStyle(this[0], null) : {};
        },
        offset: function () {
            if (this.length > 0) {
                let e = r(),
                    t = a(),
                    s = this[0],
                    i = s.getBoundingClientRect(),
                    l = t.body,
                    n = s.clientTop || l.clientTop || 0,
                    o = s.clientLeft || l.clientLeft || 0,
                    d = s === e ? e.scrollY : s.scrollTop,
                    p = s === e ? e.scrollX : s.scrollLeft;
                return { top: i.top + d - n, left: i.left + p - o };
            }
            return null;
        },
        css: function (e, t) {
            let s = r(),
                a;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (a = 0; a < this.length; a += 1) for (let i in e) this[a].style[i] = e[i];
                    return this;
                }
                if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e);
            }
            if (2 === arguments.length && "string" == typeof e) for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
            return this;
        },
        each: function (e) {
            return (
                e &&
                    this.forEach((t, s) => {
                        e.apply(t, [t, s]);
                    }),
                this
            );
        },
        html: function (e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : null;
            for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this;
        },
        text: function (e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this;
        },
        is: function (e) {
            let t = r(),
                s = a(),
                i = this[0],
                n,
                o;
            if (!i || void 0 === e) return !1;
            if ("string" == typeof e) {
                if (i.matches) return i.matches(e);
                if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
                if (i.msMatchesSelector) return i.msMatchesSelector(e);
                for (n = d(e), o = 0; o < n.length; o += 1) if (n[o] === i) return !0;
                return !1;
            }
            if (e === s) return i === s;
            if (e === t) return i === t;
            if (e.nodeType || e instanceof l) {
                for (n = e.nodeType ? [e] : e, o = 0; o < n.length; o += 1) if (n[o] === i) return !0;
            }
            return !1;
        },
        index: function () {
            let e,
                t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling); ) 1 === t.nodeType && (e += 1);
                return e;
            }
        },
        eq: function (e) {
            if (void 0 === e) return this;
            let t = this.length;
            if (e > t - 1) return d([]);
            if (e < 0) {
                let s = t + e;
                return d(s < 0 ? [] : [this[s]]);
            }
            return d([this[e]]);
        },
        append: function () {
            let e,
                t = a();
            for (let s = 0; s < arguments.length; s += 1) {
                e = s < 0 || arguments.length <= s ? void 0 : arguments[s];
                for (let i = 0; i < this.length; i += 1)
                    if ("string" == typeof e) {
                        let r = t.createElement("div");
                        for (r.innerHTML = e; r.firstChild; ) this[i].appendChild(r.firstChild);
                    } else if (e instanceof l) for (let n = 0; n < e.length; n += 1) this[i].appendChild(e[n]);
                    else this[i].appendChild(e);
            }
            return this;
        },
        prepend: function (e) {
            let t = a(),
                s,
                i;
            for (s = 0; s < this.length; s += 1)
                if ("string" == typeof e) {
                    let r = t.createElement("div");
                    for (r.innerHTML = e, i = r.childNodes.length - 1; i >= 0; i -= 1) this[s].insertBefore(r.childNodes[i], this[s].childNodes[0]);
                } else if (e instanceof l) for (i = 0; i < e.length; i += 1) this[s].insertBefore(e[i], this[s].childNodes[0]);
                else this[s].insertBefore(e, this[s].childNodes[0]);
            return this;
        },
        next: function (e) {
            return this.length > 0 ? (e ? (this[0].nextElementSibling && d(this[0].nextElementSibling).is(e) ? d([this[0].nextElementSibling]) : d([])) : this[0].nextElementSibling ? d([this[0].nextElementSibling]) : d([])) : d([]);
        },
        nextAll: function (e) {
            let t = [],
                s = this[0];
            if (!s) return d([]);
            for (; s.nextElementSibling; ) {
                let a = s.nextElementSibling;
                e ? d(a).is(e) && t.push(a) : t.push(a), (s = a);
            }
            return d(t);
        },
        prev: function (e) {
            if (this.length > 0) {
                let t = this[0];
                return e ? (t.previousElementSibling && d(t.previousElementSibling).is(e) ? d([t.previousElementSibling]) : d([])) : t.previousElementSibling ? d([t.previousElementSibling]) : d([]);
            }
            return d([]);
        },
        prevAll: function (e) {
            let t = [],
                s = this[0];
            if (!s) return d([]);
            for (; s.previousElementSibling; ) {
                let a = s.previousElementSibling;
                e ? d(a).is(e) && t.push(a) : t.push(a), (s = a);
            }
            return d(t);
        },
        parent: function (e) {
            let t = [];
            for (let s = 0; s < this.length; s += 1) null !== this[s].parentNode && (e ? d(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode));
            return d(t);
        },
        parents: function (e) {
            let t = [];
            for (let s = 0; s < this.length; s += 1) {
                let a = this[s].parentNode;
                for (; a; ) e ? d(a).is(e) && t.push(a) : t.push(a), (a = a.parentNode);
            }
            return d(t);
        },
        closest: function (e) {
            let t = this;
            return void 0 === e ? d([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
        },
        find: function (e) {
            let t = [];
            for (let s = 0; s < this.length; s += 1) {
                let a = this[s].querySelectorAll(e);
                for (let i = 0; i < a.length; i += 1) t.push(a[i]);
            }
            return d(t);
        },
        children: function (e) {
            let t = [];
            for (let s = 0; s < this.length; s += 1) {
                let a = this[s].children;
                for (let i = 0; i < a.length; i += 1) (e && !d(a[i]).is(e)) || t.push(a[i]);
            }
            return d(t);
        },
        filter: function (e) {
            return d(o(this, e));
        },
        remove: function () {
            for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this;
        },
    };
    function c(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
    }
    function u() {
        return Date.now();
    }
    function m(e, t) {
        void 0 === t && (t = "x");
        let s = r(),
            a,
            i,
            l,
            n = (function (e) {
                let t = r(),
                    s;
                return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s;
            })(e);
        return (
            s.WebKitCSSMatrix
                ? ((i = n.transform || n.webkitTransform).split(",").length > 6 &&
                      (i = i
                          .split(", ")
                          .map((e) => e.replace(",", "."))
                          .join(", ")),
                  (l = new s.WebKitCSSMatrix("none" === i ? "" : i)))
                : (a = (l = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(",")),
            "x" === t && (i = s.WebKitCSSMatrix ? l.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])),
            "y" === t && (i = s.WebKitCSSMatrix ? l.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])),
            i || 0
        );
    }
    function h(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1);
    }
    function f(e) {
        return "undefined" != typeof window && void 0 !== window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType);
    }
    function g() {
        let e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
            t = ["__proto__", "constructor", "prototype"];
        for (let s = 1; s < arguments.length; s += 1) {
            let a = s < 0 || arguments.length <= s ? void 0 : arguments[s];
            if (null != a && !f(a)) {
                let i = Object.keys(Object(a)).filter((e) => 0 > t.indexOf(e));
                for (let r = 0, l = i.length; r < l; r += 1) {
                    let n = i[r],
                        o = Object.getOwnPropertyDescriptor(a, n);
                    void 0 !== o && o.enumerable && (h(e[n]) && h(a[n]) ? (a[n].__swiper__ ? (e[n] = a[n]) : g(e[n], a[n])) : !h(e[n]) && h(a[n]) ? ((e[n] = {}), a[n].__swiper__ ? (e[n] = a[n]) : g(e[n], a[n])) : (e[n] = a[n]));
                }
            }
        }
        return e;
    }
    function $(e, t, s) {
        e.style.setProperty(t, s);
    }
    function v(e) {
        let { swiper: t, targetPosition: s, side: a } = e,
            i = r(),
            l = -t.translate,
            n,
            o = null,
            d = t.params.speed;
        (t.wrapperEl.style.scrollSnapType = "none"), i.cancelAnimationFrame(t.cssModeFrameID);
        let p = s > l ? "next" : "prev",
            c = (e, t) => ("next" === p && e >= t) || ("prev" === p && e <= t),
            u = () => {
                (n = new Date().getTime()), null === o && (o = n);
                let e = Math.max(Math.min((n - o) / d, 1), 0),
                    r = l + (0.5 - Math.cos(e * Math.PI) / 2) * (s - l);
                if ((c(r, s) && (r = s), t.wrapperEl.scrollTo({ [a]: r }), c(r, s)))
                    return (
                        (t.wrapperEl.style.overflow = "hidden"),
                        (t.wrapperEl.style.scrollSnapType = ""),
                        setTimeout(() => {
                            (t.wrapperEl.style.overflow = ""), t.wrapperEl.scrollTo({ [a]: r });
                        }),
                        void i.cancelAnimationFrame(t.cssModeFrameID)
                    );
                t.cssModeFrameID = i.requestAnimationFrame(u);
            };
        u();
    }
    let w, b, _;
    function x() {
        return (
            w ||
                (w = (function () {
                    let e = r(),
                        t = a();
                    return {
                        smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
                        touch: !!("ontouchstart" in e || (e.DocumentTouch && t instanceof e.DocumentTouch)),
                        passiveListener: (function () {
                            let t = !1;
                            try {
                                let s = Object.defineProperty({}, "passive", {
                                    get() {
                                        t = !0;
                                    },
                                });
                                e.addEventListener("testPassiveListener", null, s);
                            } catch (a) {}
                            return t;
                        })(),
                        gestures: "ongesturestart" in e,
                    };
                })()),
            w
        );
    }
    function y(e) {
        let { swiper: t, runCallbacks: s, direction: a, step: i } = e,
            { activeIndex: r, previousIndex: l } = t,
            n = a;
        if ((n || (n = r > l ? "next" : r < l ? "prev" : "reset"), t.emit(`transition${i}`), s && r !== l)) {
            if ("reset" === n) return void t.emit(`slideResetTransition${i}`);
            t.emit(`slideChangeTransition${i}`), "next" === n ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`);
        }
    }
    function E(e) {
        let t = this,
            s = a(),
            i = r(),
            l = t.touchEventsData,
            { params: n, touches: o, enabled: p } = t;
        if (!p || (t.animating && n.preventInteractionOnTransition)) return;
        !t.animating && n.cssMode && n.loop && t.loopFix();
        let c = e;
        c.originalEvent && (c = c.originalEvent);
        let m = d(c.target);
        if (
            ("wrapper" === n.touchEventsTarget && !m.closest(t.wrapperEl).length) ||
            ((l.isTouchEvent = "touchstart" === c.type), !l.isTouchEvent && "which" in c && 3 === c.which) ||
            (!l.isTouchEvent && "button" in c && c.button > 0) ||
            (l.isTouched && l.isMoved)
        )
            return;
        let h = !!n.noSwipingClass && "" !== n.noSwipingClass,
            f = e.composedPath ? e.composedPath() : e.path;
        h && c.target && c.target.shadowRoot && f && (m = d(f[0]));
        let g = n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`,
            $ = !(!c.target || !c.target.shadowRoot);
        if (
            n.noSwiping &&
            ($
                ? (function (e, t) {
                      return (
                          void 0 === t && (t = this),
                          (function t(s) {
                              if (!s || s === a() || s === r()) return null;
                              s.assignedSlot && (s = s.assignedSlot);
                              let i = s.closest(e);
                              return i || s.getRootNode ? i || t(s.getRootNode().host) : null;
                          })(t)
                      );
                  })(g, m[0])
                : m.closest(g)[0])
        )
            return void (t.allowClick = !0);
        if (n.swipeHandler && !m.closest(n.swipeHandler)[0]) return;
        (o.currentX = "touchstart" === c.type ? c.targetTouches[0].pageX : c.pageX), (o.currentY = "touchstart" === c.type ? c.targetTouches[0].pageY : c.pageY);
        let v = o.currentX,
            w = o.currentY,
            b = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection,
            _ = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;
        if (b && (v <= _ || v >= i.innerWidth - _)) {
            if ("prevent" !== b) return;
            e.preventDefault();
        }
        if (
            (Object.assign(l, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }),
            (o.startX = v),
            (o.startY = w),
            (l.touchStartTime = u()),
            (t.allowClick = !0),
            t.updateSize(),
            (t.swipeDirection = void 0),
            n.threshold > 0 && (l.allowThresholdMove = !1),
            "touchstart" !== c.type)
        ) {
            let x = !0;
            m.is(l.focusableElements) && ((x = !1), "SELECT" === m[0].nodeName && (l.isTouched = !1)), s.activeElement && d(s.activeElement).is(l.focusableElements) && s.activeElement !== m[0] && s.activeElement.blur();
            let y = x && t.allowTouchMove && n.touchStartPreventDefault;
            (n.touchStartForcePreventDefault || y) && !m[0].isContentEditable && c.preventDefault();
        }
        t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !n.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", c);
    }
    function C(e) {
        let t = a(),
            s = this,
            i = s.touchEventsData,
            { params: r, touches: l, rtlTranslate: n, enabled: o } = s;
        if (!o) return;
        let p = e;
        if ((p.originalEvent && (p = p.originalEvent), !i.isTouched)) return void (i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", p));
        if (i.isTouchEvent && "touchmove" !== p.type) return;
        let c = "touchmove" === p.type && p.targetTouches && (p.targetTouches[0] || p.changedTouches[0]),
            m = "touchmove" === p.type ? c.pageX : p.pageX,
            h = "touchmove" === p.type ? c.pageY : p.pageY;
        if (p.preventedByNestedSwiper) return (l.startX = m), void (l.startY = h);
        if (!s.allowTouchMove) return d(p.target).is(i.focusableElements) || (s.allowClick = !1), void (i.isTouched && (Object.assign(l, { startX: m, startY: h, currentX: m, currentY: h }), (i.touchStartTime = u())));
        if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop) {
            if (s.isVertical()) {
                if ((h < l.startY && s.translate <= s.maxTranslate()) || (h > l.startY && s.translate >= s.minTranslate())) return (i.isTouched = !1), void (i.isMoved = !1);
            } else if ((m < l.startX && s.translate <= s.maxTranslate()) || (m > l.startX && s.translate >= s.minTranslate())) return;
        }
        if (i.isTouchEvent && t.activeElement && p.target === t.activeElement && d(p.target).is(i.focusableElements)) return (i.isMoved = !0), void (s.allowClick = !1);
        if ((i.allowTouchCallbacks && s.emit("touchMove", p), p.targetTouches && p.targetTouches.length > 1)) return;
        (l.currentX = m), (l.currentY = h);
        let f = l.currentX - l.startX,
            g = l.currentY - l.startY;
        if (s.params.threshold && Math.sqrt(f ** 2 + g ** 2) < s.params.threshold) return;
        if (void 0 === i.isScrolling) {
            let $;
            (s.isHorizontal() && l.currentY === l.startY) || (s.isVertical() && l.currentX === l.startX)
                ? (i.isScrolling = !1)
                : f * f + g * g >= 25 && (($ = (180 * Math.atan2(Math.abs(g), Math.abs(f))) / Math.PI), (i.isScrolling = s.isHorizontal() ? $ > r.touchAngle : 90 - $ > r.touchAngle));
        }
        if ((i.isScrolling && s.emit("touchMoveOpposite", p), void 0 === i.startMoving && ((l.currentX === l.startX && l.currentY === l.startY) || (i.startMoving = !0)), i.isScrolling)) return void (i.isTouched = !1);
        if (!i.startMoving) return;
        (s.allowClick = !1),
            !r.cssMode && p.cancelable && p.preventDefault(),
            r.touchMoveStopPropagation && !r.nested && p.stopPropagation(),
            i.isMoved ||
                (r.loop && !r.cssMode && s.loopFix(),
                (i.startTranslate = s.getTranslate()),
                s.setTransition(0),
                s.animating && s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                (i.allowMomentumBounce = !1),
                r.grabCursor && (!0 === s.allowSlideNext || !0 === s.allowSlidePrev) && s.setGrabCursor(!0),
                s.emit("sliderFirstMove", p)),
            s.emit("sliderMove", p),
            (i.isMoved = !0);
        let v = s.isHorizontal() ? f : g;
        (l.diff = v), (v *= r.touchRatio), n && (v = -v), (s.swipeDirection = v > 0 ? "prev" : "next"), (i.currentTranslate = v + i.startTranslate);
        let w = !0,
            b = r.resistanceRatio;
        if (
            (r.touchReleaseOnEdges && (b = 0),
            v > 0 && i.currentTranslate > s.minTranslate()
                ? ((w = !1), r.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + v) ** b))
                : v < 0 && i.currentTranslate < s.maxTranslate() && ((w = !1), r.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - v) ** b)),
            w && (p.preventedByNestedSwiper = !0),
            !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate),
            !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate),
            s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate),
            r.threshold > 0)
        ) {
            if (!(Math.abs(v) > r.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
            if (!i.allowThresholdMove)
                return (i.allowThresholdMove = !0), (l.startX = l.currentX), (l.startY = l.currentY), (i.currentTranslate = i.startTranslate), void (l.diff = s.isHorizontal() ? l.currentX - l.startX : l.currentY - l.startY);
        }
        r.followFinger &&
            !r.cssMode &&
            (((r.freeMode && r.freeMode.enabled && s.freeMode) || r.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()),
            s.params.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(),
            s.updateProgress(i.currentTranslate),
            s.setTranslate(i.currentTranslate));
    }
    function T(e) {
        let t = this,
            s = t.touchEventsData,
            { params: a, touches: i, rtlTranslate: r, slidesGrid: l, enabled: n } = t;
        if (!n) return;
        let o = e;
        if ((o.originalEvent && (o = o.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", o), (s.allowTouchCallbacks = !1), !s.isTouched))
            return s.isMoved && a.grabCursor && t.setGrabCursor(!1), (s.isMoved = !1), void (s.startMoving = !1);
        a.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        let d = u(),
            p = d - s.touchStartTime;
        if (t.allowClick) {
            let m = o.path || (o.composedPath && o.composedPath());
            t.updateClickedSlide((m && m[0]) || o.target), t.emit("tap click", o), p < 300 && d - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", o);
        }
        if (
            ((s.lastClickTime = u()),
            c(() => {
                t.destroyed || (t.allowClick = !0);
            }),
            !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === i.diff || s.currentTranslate === s.startTranslate)
        )
            return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
        let h;
        if (((s.isTouched = !1), (s.isMoved = !1), (s.startMoving = !1), (h = a.followFinger ? (r ? t.translate : -t.translate) : -s.currentTranslate), a.cssMode)) return;
        if (t.params.freeMode && a.freeMode.enabled) return void t.freeMode.onTouchEnd({ currentPos: h });
        let f = 0,
            g = t.slidesSizesGrid[0];
        for (let $ = 0; $ < l.length; $ += $ < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
            let v = $ < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
            void 0 !== l[$ + v] ? h >= l[$] && h < l[$ + v] && ((f = $), (g = l[$ + v] - l[$])) : h >= l[$] && ((f = $), (g = l[l.length - 1] - l[l.length - 2]));
        }
        let w = null,
            b = null;
        a.rewind && (t.isBeginning ? (b = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1) : t.isEnd && (w = 0));
        let _ = (h - l[f]) / g,
            x = f < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
        if (p > a.longSwipesMs) {
            if (!a.longSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && (_ >= a.longSwipesRatio ? t.slideTo(a.rewind && t.isEnd ? w : f + x) : t.slideTo(f)),
                "prev" === t.swipeDirection && (_ > 1 - a.longSwipesRatio ? t.slideTo(f + x) : null !== b && _ < 0 && Math.abs(_) > a.longSwipesRatio ? t.slideTo(b) : t.slideTo(f));
        } else {
            if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
            t.navigation && (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl)
                ? o.target === t.navigation.nextEl
                    ? t.slideTo(f + x)
                    : t.slideTo(f)
                : ("next" === t.swipeDirection && t.slideTo(null !== w ? w : f + x), "prev" === t.swipeDirection && t.slideTo(null !== b ? b : f));
        }
    }
    function S() {
        let e = this,
            { params: t, el: s } = e;
        if (s && 0 === s.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        let { allowSlideNext: a, allowSlidePrev: i, snapGrid: r } = e;
        (e.allowSlideNext = !0),
            (e.allowSlidePrev = !0),
            e.updateSize(),
            e.updateSlides(),
            e.updateSlidesClasses(),
            ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0),
            e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
            (e.allowSlidePrev = i),
            (e.allowSlideNext = a),
            e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
    }
    function P(e) {
        this.enabled && (this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function k() {
        let e = this,
            { wrapperEl: t, rtlTranslate: s, enabled: a } = e;
        if (!a) return;
        let i;
        (e.previousTranslate = e.translate), e.isHorizontal() ? (e.translate = -t.scrollLeft) : (e.translate = -t.scrollTop), 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
        let r = e.maxTranslate() - e.minTranslate();
        (i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r) !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1);
    }
    Object.keys(p).forEach((e) => {
        Object.defineProperty(d.fn, e, { value: p[e], writable: !0 });
    });
    let M = !1;
    function z() {}
    let L = (e, t) => {
            let s = a(),
                { params: i, touchEvents: r, el: l, wrapperEl: n, device: o, support: d } = e,
                p = !!i.nested,
                c = "on" === t ? "addEventListener" : "removeEventListener",
                u = t;
            if (d.touch) {
                let m = !("touchstart" !== r.start || !d.passiveListener || !i.passiveListeners) && { passive: !0, capture: !1 };
                l[c](r.start, e.onTouchStart, m), l[c](r.move, e.onTouchMove, d.passiveListener ? { passive: !1, capture: p } : p), l[c](r.end, e.onTouchEnd, m), r.cancel && l[c](r.cancel, e.onTouchEnd, m);
            } else l[c](r.start, e.onTouchStart, !1), s[c](r.move, e.onTouchMove, p), s[c](r.end, e.onTouchEnd, !1);
            (i.preventClicks || i.preventClicksPropagation) && l[c]("click", e.onClick, !0),
                i.cssMode && n[c]("scroll", e.onScroll),
                i.updateOnWindowResize ? e[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", S, !0) : e[u]("observerUpdate", S, !0);
        },
        I = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    var D = {
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
        loopedSlidesLimit: !0,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
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
        _emitClasses: !1,
    };
    let O = {
            eventsEmitter: {
                on(e, t, s) {
                    let a = this;
                    if (!a.eventsListeners || a.destroyed || "function" != typeof t) return a;
                    let i = s ? "unshift" : "push";
                    return (
                        e.split(" ").forEach((e) => {
                            a.eventsListeners[e] || (a.eventsListeners[e] = []), a.eventsListeners[e][i](t);
                        }),
                        a
                    );
                },
                once(e, t, s) {
                    let a = this;
                    if (!a.eventsListeners || a.destroyed || "function" != typeof t) return a;
                    function i() {
                        a.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
                        for (var s = arguments.length, r = Array(s), l = 0; l < s; l++) r[l] = arguments[l];
                        t.apply(a, r);
                    }
                    return (i.__emitterProxy = t), a.on(e, i, s);
                },
                onAny(e, t) {
                    return !this.eventsListeners || this.destroyed || "function" != typeof e || (0 > this.eventsAnyListeners.indexOf(e) && this.eventsAnyListeners[t ? "unshift" : "push"](e)), this;
                },
                offAny(e) {
                    if (!this.eventsListeners || this.destroyed || !this.eventsAnyListeners) return this;
                    let t = this.eventsAnyListeners.indexOf(e);
                    return t >= 0 && this.eventsAnyListeners.splice(t, 1), this;
                },
                off(e, t) {
                    let s = this;
                    return (
                        !s.eventsListeners ||
                            s.destroyed ||
                            (s.eventsListeners &&
                                e.split(" ").forEach((e) => {
                                    void 0 === t
                                        ? (s.eventsListeners[e] = [])
                                        : s.eventsListeners[e] &&
                                          s.eventsListeners[e].forEach((a, i) => {
                                              (a === t || (a.__emitterProxy && a.__emitterProxy === t)) && s.eventsListeners[e].splice(i, 1);
                                          });
                                })),
                        s
                    );
                },
                emit() {
                    let e = this;
                    if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
                    let t, s, a;
                    for (var i = arguments.length, r = Array(i), l = 0; l < i; l++) r[l] = arguments[l];
                    return (
                        "string" == typeof r[0] || Array.isArray(r[0]) ? ((t = r[0]), (s = r.slice(1, r.length)), (a = e)) : ((t = r[0].events), (s = r[0].data), (a = r[0].context || e)),
                        s.unshift(a),
                        (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
                            e.eventsAnyListeners &&
                                e.eventsAnyListeners.length &&
                                e.eventsAnyListeners.forEach((e) => {
                                    e.apply(a, [t, ...s]);
                                }),
                                e.eventsListeners &&
                                    e.eventsListeners[t] &&
                                    e.eventsListeners[t].forEach((e) => {
                                        e.apply(a, s);
                                    });
                        }),
                        e
                    );
                },
            },
            update: {
                updateSize: function () {
                    let e,
                        t,
                        s = this.$el;
                    (e = void 0 !== this.params.width && null !== this.params.width ? this.params.width : s[0].clientWidth),
                        (t = void 0 !== this.params.height && null !== this.params.height ? this.params.height : s[0].clientHeight),
                        (0 === e && this.isHorizontal()) ||
                            (0 === t && this.isVertical()) ||
                            ((e = e - parseInt(s.css("padding-left") || 0, 10) - parseInt(s.css("padding-right") || 0, 10)),
                            (t = t - parseInt(s.css("padding-top") || 0, 10) - parseInt(s.css("padding-bottom") || 0, 10)),
                            Number.isNaN(e) && (e = 0),
                            Number.isNaN(t) && (t = 0),
                            Object.assign(this, { width: e, height: t, size: this.isHorizontal() ? e : t }));
                },
                updateSlides: function () {
                    let e = this;
                    function t(t) {
                        return e.isHorizontal()
                            ? t
                            : {
                                  width: "height",
                                  "margin-top": "margin-left",
                                  "margin-bottom ": "margin-right",
                                  "margin-left": "margin-top",
                                  "margin-right": "margin-bottom",
                                  "padding-left": "padding-top",
                                  "padding-right": "padding-bottom",
                                  marginRight: "marginBottom",
                              }[t];
                    }
                    function s(e, s) {
                        return parseFloat(e.getPropertyValue(t(s)) || 0);
                    }
                    let a = e.params,
                        { $wrapperEl: i, size: r, rtlTranslate: l, wrongRTL: n } = e,
                        o = e.virtual && a.virtual.enabled,
                        d = o ? e.virtual.slides.length : e.slides.length,
                        p = i.children(`.${e.params.slideClass}`),
                        c = o ? e.virtual.slides.length : p.length,
                        u = [],
                        m = [],
                        h = [],
                        f = a.slidesOffsetBefore;
                    "function" == typeof f && (f = a.slidesOffsetBefore.call(e));
                    let g = a.slidesOffsetAfter;
                    "function" == typeof g && (g = a.slidesOffsetAfter.call(e));
                    let v = e.snapGrid.length,
                        w = e.slidesGrid.length,
                        b = a.spaceBetween,
                        _ = -f,
                        x = 0,
                        y = 0;
                    if (void 0 === r) return;
                    "string" == typeof b && b.indexOf("%") >= 0 && (b = (parseFloat(b.replace("%", "")) / 100) * r),
                        (e.virtualSize = -b),
                        l ? p.css({ marginLeft: "", marginBottom: "", marginTop: "" }) : p.css({ marginRight: "", marginBottom: "", marginTop: "" }),
                        a.centeredSlides && a.cssMode && ($(e.wrapperEl, "--swiper-centered-offset-before", ""), $(e.wrapperEl, "--swiper-centered-offset-after", ""));
                    let E = a.grid && a.grid.rows > 1 && e.grid,
                        C;
                    E && e.grid.initSlides(c);
                    let T = "auto" === a.slidesPerView && a.breakpoints && Object.keys(a.breakpoints).filter((e) => void 0 !== a.breakpoints[e].slidesPerView).length > 0;
                    for (let S = 0; S < c; S += 1) {
                        C = 0;
                        let P = p.eq(S);
                        if ((E && e.grid.updateSlide(S, P, c, t), "none" !== P.css("display"))) {
                            if ("auto" === a.slidesPerView) {
                                T && (p[S].style[t("width")] = "");
                                let k = getComputedStyle(P[0]),
                                    M = P[0].style.transform,
                                    z = P[0].style.webkitTransform;
                                if ((M && (P[0].style.transform = "none"), z && (P[0].style.webkitTransform = "none"), a.roundLengths)) C = e.isHorizontal() ? P.outerWidth(!0) : P.outerHeight(!0);
                                else {
                                    let L = s(k, "width"),
                                        I = s(k, "padding-left"),
                                        D = s(k, "padding-right"),
                                        O = s(k, "margin-left"),
                                        A = s(k, "margin-right"),
                                        G = k.getPropertyValue("box-sizing");
                                    if (G && "border-box" === G) C = L + O + A;
                                    else {
                                        let { clientWidth: B, offsetWidth: N } = P[0];
                                        C = L + I + D + O + A + (N - B);
                                    }
                                }
                                M && (P[0].style.transform = M), z && (P[0].style.webkitTransform = z), a.roundLengths && (C = Math.floor(C));
                            } else (C = (r - (a.slidesPerView - 1) * b) / a.slidesPerView), a.roundLengths && (C = Math.floor(C)), p[S] && (p[S].style[t("width")] = `${C}px`);
                            p[S] && (p[S].swiperSlideSize = C),
                                h.push(C),
                                a.centeredSlides
                                    ? ((_ = _ + C / 2 + x / 2 + b),
                                      0 === x && 0 !== S && (_ = _ - r / 2 - b),
                                      0 === S && (_ = _ - r / 2 - b),
                                      0.001 > Math.abs(_) && (_ = 0),
                                      a.roundLengths && (_ = Math.floor(_)),
                                      y % a.slidesPerGroup == 0 && u.push(_),
                                      m.push(_))
                                    : (a.roundLengths && (_ = Math.floor(_)), (y - Math.min(e.params.slidesPerGroupSkip, y)) % e.params.slidesPerGroup == 0 && u.push(_), m.push(_), (_ = _ + C + b)),
                                (e.virtualSize += C + b),
                                (x = C),
                                (y += 1);
                        }
                    }
                    if (
                        ((e.virtualSize = Math.max(e.virtualSize, r) + g),
                        l && n && ("slide" === a.effect || "coverflow" === a.effect) && i.css({ width: `${e.virtualSize + a.spaceBetween}px` }),
                        a.setWrapperSize && i.css({ [t("width")]: `${e.virtualSize + a.spaceBetween}px` }),
                        E && e.grid.updateWrapperSize(C, u, t),
                        !a.centeredSlides)
                    ) {
                        let H = [];
                        for (let X = 0; X < u.length; X += 1) {
                            let Y = u[X];
                            a.roundLengths && (Y = Math.floor(Y)), u[X] <= e.virtualSize - r && H.push(Y);
                        }
                        (u = H), Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - r);
                    }
                    if ((0 === u.length && (u = [0]), 0 !== a.spaceBetween)) {
                        let R = e.isHorizontal() && l ? "marginLeft" : t("marginRight");
                        p.filter((e, t) => !a.cssMode || t !== p.length - 1).css({ [R]: `${b}px` });
                    }
                    if (a.centeredSlides && a.centeredSlidesBounds) {
                        let W = 0;
                        h.forEach((e) => {
                            W += e + (a.spaceBetween ? a.spaceBetween : 0);
                        }),
                            (W -= a.spaceBetween);
                        let q = W - r;
                        u = u.map((e) => (e < 0 ? -f : e > q ? q + g : e));
                    }
                    if (a.centerInsufficientSlides) {
                        let V = 0;
                        if (
                            (h.forEach((e) => {
                                V += e + (a.spaceBetween ? a.spaceBetween : 0);
                            }),
                            (V -= a.spaceBetween) < r)
                        ) {
                            let F = (r - V) / 2;
                            u.forEach((e, t) => {
                                u[t] = e - F;
                            }),
                                m.forEach((e, t) => {
                                    m[t] = e + F;
                                });
                        }
                    }
                    if ((Object.assign(e, { slides: p, snapGrid: u, slidesGrid: m, slidesSizesGrid: h }), a.centeredSlides && a.cssMode && !a.centeredSlidesBounds)) {
                        $(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"), $(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - h[h.length - 1] / 2 + "px");
                        let j = -e.snapGrid[0],
                            U = -e.slidesGrid[0];
                        (e.snapGrid = e.snapGrid.map((e) => e + j)), (e.slidesGrid = e.slidesGrid.map((e) => e + U));
                    }
                    if (
                        (c !== d && e.emit("slidesLengthChange"),
                        u.length !== v && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")),
                        m.length !== w && e.emit("slidesGridLengthChange"),
                        a.watchSlidesProgress && e.updateSlidesOffset(),
                        !(o || a.cssMode || ("slide" !== a.effect && "fade" !== a.effect)))
                    ) {
                        let K = `${a.containerModifierClass}backface-hidden`,
                            Z = e.$el.hasClass(K);
                        c <= a.maxBackfaceHiddenSlides ? Z || e.$el.addClass(K) : Z && e.$el.removeClass(K);
                    }
                },
                updateAutoHeight: function (e) {
                    let t = this,
                        s = [],
                        a = t.virtual && t.params.virtual.enabled,
                        i,
                        r = 0;
                    "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
                    let l = (e) => (a ? t.slides.filter((t) => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e)[0] : t.slides.eq(e)[0]);
                    if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1) {
                        if (t.params.centeredSlides)
                            (t.visibleSlides || d([])).each((e) => {
                                s.push(e);
                            });
                        else
                            for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                                let n = t.activeIndex + i;
                                if (n > t.slides.length && !a) break;
                                s.push(l(n));
                            }
                    } else s.push(l(t.activeIndex));
                    for (i = 0; i < s.length; i += 1)
                        if (void 0 !== s[i]) {
                            let o = s[i].offsetHeight;
                            r = o > r ? o : r;
                        }
                    (r || 0 === r) && t.$wrapperEl.css("height", `${r}px`);
                },
                updateSlidesOffset: function () {
                    let e = this.slides;
                    for (let t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop;
                },
                updateSlidesProgress: function (e) {
                    void 0 === e && (e = (this && this.translate) || 0);
                    let t = this,
                        s = t.params,
                        { slides: a, rtlTranslate: i, snapGrid: r } = t;
                    if (0 === a.length) return;
                    void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
                    let l = -e;
                    i && (l = e), a.removeClass(s.slideVisibleClass), (t.visibleSlidesIndexes = []), (t.visibleSlides = []);
                    for (let n = 0; n < a.length; n += 1) {
                        let o = a[n],
                            p = o.swiperSlideOffset;
                        s.cssMode && s.centeredSlides && (p -= a[0].swiperSlideOffset);
                        let c = (l + (s.centeredSlides ? t.minTranslate() : 0) - p) / (o.swiperSlideSize + s.spaceBetween),
                            u = (l - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - p) / (o.swiperSlideSize + s.spaceBetween),
                            m = -(l - p),
                            h = m + t.slidesSizesGrid[n];
                        ((m >= 0 && m < t.size - 1) || (h > 1 && h <= t.size) || (m <= 0 && h >= t.size)) && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(n), a.eq(n).addClass(s.slideVisibleClass)),
                            (o.progress = i ? -c : c),
                            (o.originalProgress = i ? -u : u);
                    }
                    t.visibleSlides = d(t.visibleSlides);
                },
                updateProgress: function (e) {
                    if (void 0 === e) {
                        let t = this.rtlTranslate ? -1 : 1;
                        e = (this && this.translate && this.translate * t) || 0;
                    }
                    let s = this.params,
                        a = this.maxTranslate() - this.minTranslate(),
                        { progress: i, isBeginning: r, isEnd: l } = this,
                        n = r,
                        o = l;
                    0 === a ? ((i = 0), (r = !0), (l = !0)) : ((r = (i = (e - this.minTranslate()) / a) <= 0), (l = i >= 1)),
                        Object.assign(this, { progress: i, isBeginning: r, isEnd: l }),
                        (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) && this.updateSlidesProgress(e),
                        r && !n && this.emit("reachBeginning toEdge"),
                        l && !o && this.emit("reachEnd toEdge"),
                        ((n && !r) || (o && !l)) && this.emit("fromEdge"),
                        this.emit("progress", i);
                },
                updateSlidesClasses: function () {
                    let { slides: e, params: t, $wrapperEl: s, activeIndex: a, realIndex: i } = this,
                        r = this.virtual && t.virtual.enabled,
                        l;
                    e.removeClass(`${t.slideActiveClass} ${t.slideNextClass} ${t.slidePrevClass} ${t.slideDuplicateActiveClass} ${t.slideDuplicateNextClass} ${t.slideDuplicatePrevClass}`),
                        (l = r ? this.$wrapperEl.find(`.${t.slideClass}[data-swiper-slide-index="${a}"]`) : e.eq(a)).addClass(t.slideActiveClass),
                        t.loop &&
                            (l.hasClass(t.slideDuplicateClass)
                                ? s.children(`.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${i}"]`).addClass(t.slideDuplicateActiveClass)
                                : s.children(`.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${i}"]`).addClass(t.slideDuplicateActiveClass));
                    let n = l.nextAll(`.${t.slideClass}`).eq(0).addClass(t.slideNextClass);
                    t.loop && 0 === n.length && (n = e.eq(0)).addClass(t.slideNextClass);
                    let o = l.prevAll(`.${t.slideClass}`).eq(0).addClass(t.slidePrevClass);
                    t.loop && 0 === o.length && (o = e.eq(-1)).addClass(t.slidePrevClass),
                        t.loop &&
                            (n.hasClass(t.slideDuplicateClass)
                                ? s.children(`.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${n.attr("data-swiper-slide-index")}"]`).addClass(t.slideDuplicateNextClass)
                                : s.children(`.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${n.attr("data-swiper-slide-index")}"]`).addClass(t.slideDuplicateNextClass),
                            o.hasClass(t.slideDuplicateClass)
                                ? s.children(`.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(t.slideDuplicatePrevClass)
                                : s.children(`.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(t.slideDuplicatePrevClass)),
                        this.emitSlidesClasses();
                },
                updateActiveIndex: function (e) {
                    let t = this,
                        s = t.rtlTranslate ? t.translate : -t.translate,
                        { slidesGrid: a, snapGrid: i, params: r, activeIndex: l, realIndex: n, snapIndex: o } = t,
                        d,
                        p = e;
                    if (void 0 === p) {
                        for (let c = 0; c < a.length; c += 1) void 0 !== a[c + 1] ? (s >= a[c] && s < a[c + 1] - (a[c + 1] - a[c]) / 2 ? (p = c) : s >= a[c] && s < a[c + 1] && (p = c + 1)) : s >= a[c] && (p = c);
                        r.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0);
                    }
                    if (i.indexOf(s) >= 0) d = i.indexOf(s);
                    else {
                        let u = Math.min(r.slidesPerGroupSkip, p);
                        d = u + Math.floor((p - u) / r.slidesPerGroup);
                    }
                    if ((d >= i.length && (d = i.length - 1), p === l)) return void (d !== o && ((t.snapIndex = d), t.emit("snapIndexChange")));
                    let m = parseInt(t.slides.eq(p).attr("data-swiper-slide-index") || p, 10);
                    Object.assign(t, { snapIndex: d, realIndex: m, previousIndex: l, activeIndex: p }),
                        t.emit("activeIndexChange"),
                        t.emit("snapIndexChange"),
                        n !== m && t.emit("realIndexChange"),
                        (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
                },
                updateClickedSlide: function (e) {
                    let t = this,
                        s = t.params,
                        a = d(e).closest(`.${s.slideClass}`)[0],
                        i,
                        r = !1;
                    if (a) {
                        for (let l = 0; l < t.slides.length; l += 1)
                            if (t.slides[l] === a) {
                                (r = !0), (i = l);
                                break;
                            }
                    }
                    if (!a || !r) return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
                    (t.clickedSlide = a),
                        t.virtual && t.params.virtual.enabled ? (t.clickedIndex = parseInt(d(a).attr("data-swiper-slide-index"), 10)) : (t.clickedIndex = i),
                        s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
                },
            },
            translate: {
                getTranslate: function (e) {
                    void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                    let { params: t, rtlTranslate: s, translate: a, $wrapperEl: i } = this;
                    if (t.virtualTranslate) return s ? -a : a;
                    if (t.cssMode) return a;
                    let r = m(i[0], e);
                    return s && (r = -r), r || 0;
                },
                setTranslate: function (e, t) {
                    let s = this,
                        { rtlTranslate: a, params: i, $wrapperEl: r, wrapperEl: l, progress: n } = s,
                        o,
                        d = 0,
                        p = 0;
                    s.isHorizontal() ? (d = a ? -e : e) : (p = e),
                        i.roundLengths && ((d = Math.floor(d)), (p = Math.floor(p))),
                        i.cssMode ? (l[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -d : -p) : i.virtualTranslate || r.transform(`translate3d(${d}px, ${p}px, 0px)`),
                        (s.previousTranslate = s.translate),
                        (s.translate = s.isHorizontal() ? d : p);
                    let c = s.maxTranslate() - s.minTranslate();
                    (o = 0 === c ? 0 : (e - s.minTranslate()) / c) !== n && s.updateProgress(e), s.emit("setTranslate", s.translate, t);
                },
                minTranslate: function () {
                    return -this.snapGrid[0];
                },
                maxTranslate: function () {
                    return -this.snapGrid[this.snapGrid.length - 1];
                },
                translateTo: function (e, t, s, a, i) {
                    void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), void 0 === a && (a = !0);
                    let r = this,
                        { params: l, wrapperEl: n } = r;
                    if (r.animating && l.preventInteractionOnTransition) return !1;
                    let o = r.minTranslate(),
                        d = r.maxTranslate(),
                        p;
                    if (((p = a && e > o ? o : a && e < d ? d : e), r.updateProgress(p), l.cssMode)) {
                        let c = r.isHorizontal();
                        if (0 === t) n[c ? "scrollLeft" : "scrollTop"] = -p;
                        else {
                            if (!r.support.smoothScroll) return v({ swiper: r, targetPosition: -p, side: c ? "left" : "top" }), !0;
                            n.scrollTo({ [c ? "left" : "top"]: -p, behavior: "smooth" });
                        }
                        return !0;
                    }
                    return (
                        0 === t
                            ? (r.setTransition(0), r.setTranslate(p), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionEnd")))
                            : (r.setTransition(t),
                              r.setTranslate(p),
                              s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionStart")),
                              r.animating ||
                                  ((r.animating = !0),
                                  r.onTranslateToWrapperTransitionEnd ||
                                      (r.onTranslateToWrapperTransitionEnd = function (e) {
                                          r &&
                                              !r.destroyed &&
                                              e.target === this &&
                                              (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd),
                                              r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd),
                                              (r.onTranslateToWrapperTransitionEnd = null),
                                              delete r.onTranslateToWrapperTransitionEnd,
                                              s && r.emit("transitionEnd"));
                                      }),
                                  r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd),
                                  r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))),
                        !0
                    );
                },
            },
            transition: {
                setTransition: function (e, t) {
                    this.params.cssMode || this.$wrapperEl.transition(e), this.emit("setTransition", e, t);
                },
                transitionStart: function (e, t) {
                    void 0 === e && (e = !0);
                    let { params: s } = this;
                    s.cssMode || (s.autoHeight && this.updateAutoHeight(), y({ swiper: this, runCallbacks: e, direction: t, step: "Start" }));
                },
                transitionEnd: function (e, t) {
                    void 0 === e && (e = !0);
                    let s = this,
                        { params: a } = s;
                    (s.animating = !1), a.cssMode || (s.setTransition(0), y({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
                },
            },
            slide: {
                slideTo: function (e, t, s, a, i) {
                    if ((void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "number" != typeof e && "string" != typeof e))
                        throw Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
                    if ("string" == typeof e) {
                        let r = parseInt(e, 10);
                        if (!isFinite(r)) throw Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                        e = r;
                    }
                    let l = this,
                        n = e;
                    n < 0 && (n = 0);
                    let { params: o, snapGrid: d, slidesGrid: p, previousIndex: c, activeIndex: u, rtlTranslate: m, wrapperEl: h, enabled: f } = l;
                    if ((l.animating && o.preventInteractionOnTransition) || (!f && !a && !i)) return !1;
                    let g = Math.min(l.params.slidesPerGroupSkip, n),
                        $ = g + Math.floor((n - g) / l.params.slidesPerGroup);
                    $ >= d.length && ($ = d.length - 1);
                    let w = -d[$];
                    if (o.normalizeSlideIndex)
                        for (let b = 0; b < p.length; b += 1) {
                            let _ = -Math.floor(100 * w),
                                x = Math.floor(100 * p[b]),
                                y = Math.floor(100 * p[b + 1]);
                            void 0 !== p[b + 1] ? (_ >= x && _ < y - (y - x) / 2 ? (n = b) : _ >= x && _ < y && (n = b + 1)) : _ >= x && (n = b);
                        }
                    if (l.initialized && n !== u && ((!l.allowSlideNext && w < l.translate && w < l.minTranslate()) || (!l.allowSlidePrev && w > l.translate && w > l.maxTranslate() && (u || 0) !== n))) return !1;
                    let E;
                    if ((n !== (c || 0) && s && l.emit("beforeSlideChangeStart"), l.updateProgress(w), (E = n > u ? "next" : n < u ? "prev" : "reset"), (m && -w === l.translate) || (!m && w === l.translate)))
                        return l.updateActiveIndex(n), o.autoHeight && l.updateAutoHeight(), l.updateSlidesClasses(), "slide" !== o.effect && l.setTranslate(w), "reset" !== E && (l.transitionStart(s, E), l.transitionEnd(s, E)), !1;
                    if (o.cssMode) {
                        let C = l.isHorizontal(),
                            T = m ? w : -w;
                        if (0 === t) {
                            let S = l.virtual && l.params.virtual.enabled;
                            S && ((l.wrapperEl.style.scrollSnapType = "none"), (l._immediateVirtual = !0)),
                                (h[C ? "scrollLeft" : "scrollTop"] = T),
                                S &&
                                    requestAnimationFrame(() => {
                                        (l.wrapperEl.style.scrollSnapType = ""), (l._swiperImmediateVirtual = !1);
                                    });
                        } else {
                            if (!l.support.smoothScroll) return v({ swiper: l, targetPosition: T, side: C ? "left" : "top" }), !0;
                            h.scrollTo({ [C ? "left" : "top"]: T, behavior: "smooth" });
                        }
                        return !0;
                    }
                    return (
                        l.setTransition(t),
                        l.setTranslate(w),
                        l.updateActiveIndex(n),
                        l.updateSlidesClasses(),
                        l.emit("beforeTransitionStart", t, a),
                        l.transitionStart(s, E),
                        0 === t
                            ? l.transitionEnd(s, E)
                            : l.animating ||
                              ((l.animating = !0),
                              l.onSlideToWrapperTransitionEnd ||
                                  (l.onSlideToWrapperTransitionEnd = function (e) {
                                      l &&
                                          !l.destroyed &&
                                          e.target === this &&
                                          (l.$wrapperEl[0].removeEventListener("transitionend", l.onSlideToWrapperTransitionEnd),
                                          l.$wrapperEl[0].removeEventListener("webkitTransitionEnd", l.onSlideToWrapperTransitionEnd),
                                          (l.onSlideToWrapperTransitionEnd = null),
                                          delete l.onSlideToWrapperTransitionEnd,
                                          l.transitionEnd(s, E));
                                  }),
                              l.$wrapperEl[0].addEventListener("transitionend", l.onSlideToWrapperTransitionEnd),
                              l.$wrapperEl[0].addEventListener("webkitTransitionEnd", l.onSlideToWrapperTransitionEnd)),
                        !0
                    );
                },
                slideToLoop: function (e, t, s, a) {
                    if ((void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "string" == typeof e)) {
                        let i = parseInt(e, 10);
                        if (!isFinite(i)) throw Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                        e = i;
                    }
                    let r = e;
                    return this.params.loop && (r += this.loopedSlides), this.slideTo(r, t, s, a);
                },
                slideNext: function (e, t, s) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                    let a = this,
                        { animating: i, enabled: r, params: l } = a;
                    if (!r) return a;
                    let n = l.slidesPerGroup;
                    "auto" === l.slidesPerView && 1 === l.slidesPerGroup && l.slidesPerGroupAuto && (n = Math.max(a.slidesPerViewDynamic("current", !0), 1));
                    let o = a.activeIndex < l.slidesPerGroupSkip ? 1 : n;
                    if (l.loop) {
                        if (i && l.loopPreventsSlide) return !1;
                        a.loopFix(), (a._clientLeft = a.$wrapperEl[0].clientLeft);
                    }
                    return l.rewind && a.isEnd ? a.slideTo(0, e, t, s) : a.slideTo(a.activeIndex + o, e, t, s);
                },
                slidePrev: function (e, t, s) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                    let a = this,
                        { params: i, animating: r, snapGrid: l, slidesGrid: n, rtlTranslate: o, enabled: d } = a;
                    if (!d) return a;
                    if (i.loop) {
                        if (r && i.loopPreventsSlide) return !1;
                        a.loopFix(), (a._clientLeft = a.$wrapperEl[0].clientLeft);
                    }
                    function p(e) {
                        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
                    }
                    let c = p(o ? a.translate : -a.translate),
                        u = l.map((e) => p(e)),
                        m = l[u.indexOf(c) - 1];
                    if (void 0 === m && i.cssMode) {
                        let h;
                        l.forEach((e, t) => {
                            c >= e && (h = t);
                        }),
                            void 0 !== h && (m = l[h > 0 ? h - 1 : h]);
                    }
                    let f = 0;
                    if (
                        (void 0 !== m &&
                            ((f = n.indexOf(m)) < 0 && (f = a.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (f = Math.max((f = f - a.slidesPerViewDynamic("previous", !0) + 1), 0))),
                        i.rewind && a.isBeginning)
                    ) {
                        let g = a.params.virtual && a.params.virtual.enabled && a.virtual ? a.virtual.slides.length - 1 : a.slides.length - 1;
                        return a.slideTo(g, e, t, s);
                    }
                    return a.slideTo(f, e, t, s);
                },
                slideReset: function (e, t, s) {
                    return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, s);
                },
                slideToClosest: function (e, t, s, a) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === a && (a = 0.5);
                    let i = this.activeIndex,
                        r = Math.min(this.params.slidesPerGroupSkip, i),
                        l = r + Math.floor((i - r) / this.params.slidesPerGroup),
                        n = this.rtlTranslate ? this.translate : -this.translate;
                    if (n >= this.snapGrid[l]) {
                        let o = this.snapGrid[l];
                        n - o > (this.snapGrid[l + 1] - o) * a && (i += this.params.slidesPerGroup);
                    } else {
                        let d = this.snapGrid[l - 1];
                        n - d <= (this.snapGrid[l] - d) * a && (i -= this.params.slidesPerGroup);
                    }
                    return (i = Math.min((i = Math.max(i, 0)), this.slidesGrid.length - 1)), this.slideTo(i, e, t, s);
                },
                slideToClickedSlide: function () {
                    let e = this,
                        { params: t, $wrapperEl: s } = e,
                        a = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView,
                        i,
                        r = e.clickedIndex;
                    if (t.loop) {
                        if (e.animating) return;
                        (i = parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
                            t.centeredSlides
                                ? r < e.loopedSlides - a / 2 || r > e.slides.length - e.loopedSlides + a / 2
                                    ? (e.loopFix(),
                                      (r = s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index()),
                                      c(() => {
                                          e.slideTo(r);
                                      }))
                                    : e.slideTo(r)
                                : r > e.slides.length - a
                                ? (e.loopFix(),
                                  (r = s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index()),
                                  c(() => {
                                      e.slideTo(r);
                                  }))
                                : e.slideTo(r);
                    } else e.slideTo(r);
                },
            },
            loop: {
                loopCreate: function () {
                    let e = this,
                        t = a(),
                        { params: s, $wrapperEl: i } = e,
                        r = i.children().length > 0 ? d(i.children()[0].parentNode) : i;
                    r.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
                    let l = r.children(`.${s.slideClass}`);
                    if (s.loopFillGroupWithBlank) {
                        let n = s.slidesPerGroup - (l.length % s.slidesPerGroup);
                        if (n !== s.slidesPerGroup) {
                            for (let o = 0; o < n; o += 1) {
                                let p = d(t.createElement("div")).addClass(`${s.slideClass} ${s.slideBlankClass}`);
                                r.append(p);
                            }
                            l = r.children(`.${s.slideClass}`);
                        }
                    }
                    "auto" !== s.slidesPerView || s.loopedSlides || (s.loopedSlides = l.length),
                        (e.loopedSlides = Math.ceil(parseFloat(s.loopedSlides || s.slidesPerView, 10))),
                        (e.loopedSlides += s.loopAdditionalSlides),
                        e.loopedSlides > l.length && e.params.loopedSlidesLimit && (e.loopedSlides = l.length);
                    let c = [],
                        u = [];
                    l.each((e, t) => {
                        d(e).attr("data-swiper-slide-index", t);
                    });
                    for (let m = 0; m < e.loopedSlides; m += 1) {
                        let h = m - Math.floor(m / l.length) * l.length;
                        u.push(l.eq(h)[0]), c.unshift(l.eq(l.length - h - 1)[0]);
                    }
                    for (let f = 0; f < u.length; f += 1) r.append(d(u[f].cloneNode(!0)).addClass(s.slideDuplicateClass));
                    for (let g = c.length - 1; g >= 0; g -= 1) r.prepend(d(c[g].cloneNode(!0)).addClass(s.slideDuplicateClass));
                },
                loopFix: function () {
                    let e = this;
                    e.emit("beforeLoopFix");
                    let { activeIndex: t, slides: s, loopedSlides: a, allowSlidePrev: i, allowSlideNext: r, snapGrid: l, rtlTranslate: n } = e,
                        o;
                    (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
                    let d = -l[t] - e.getTranslate();
                    t < a
                        ? ((o = s.length - 3 * a + t), (o += a), e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((n ? -e.translate : e.translate) - d))
                        : t >= s.length - a && ((o = -s.length + t + a), (o += a), e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((n ? -e.translate : e.translate) - d)),
                        (e.allowSlidePrev = i),
                        (e.allowSlideNext = r),
                        e.emit("loopFix");
                },
                loopDestroy: function () {
                    let { $wrapperEl: e, params: t, slides: s } = this;
                    e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), s.removeAttr("data-swiper-slide-index");
                },
            },
            grabCursor: {
                setGrabCursor: function (e) {
                    if (this.support.touch || !this.params.simulateTouch || (this.params.watchOverflow && this.isLocked) || this.params.cssMode) return;
                    let t = "container" === this.params.touchEventsTarget ? this.el : this.wrapperEl;
                    (t.style.cursor = "move"), (t.style.cursor = e ? "grabbing" : "grab");
                },
                unsetGrabCursor: function () {
                    let e = this;
                    e.support.touch || (e.params.watchOverflow && e.isLocked) || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "");
                },
            },
            events: {
                attachEvents: function () {
                    let e = this,
                        t = a(),
                        { params: s, support: i } = e;
                    (e.onTouchStart = E.bind(e)),
                        (e.onTouchMove = C.bind(e)),
                        (e.onTouchEnd = T.bind(e)),
                        s.cssMode && (e.onScroll = k.bind(e)),
                        (e.onClick = P.bind(e)),
                        i.touch && !M && (t.addEventListener("touchstart", z), (M = !0)),
                        L(e, "on");
                },
                detachEvents: function () {
                    L(this, "off");
                },
            },
            breakpoints: {
                setBreakpoint: function () {
                    let e = this,
                        { activeIndex: t, initialized: s, loopedSlides: a = 0, params: i, $el: r } = e,
                        l = i.breakpoints;
                    if (!l || (l && 0 === Object.keys(l).length)) return;
                    let n = e.getBreakpoint(l, e.params.breakpointsBase, e.el);
                    if (!n || e.currentBreakpoint === n) return;
                    let o = (n in l ? l[n] : void 0) || e.originalParams,
                        d = I(e, i),
                        p = I(e, o),
                        c = i.enabled;
                    d && !p
                        ? (r.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`), e.emitContainerClasses())
                        : !d &&
                          p &&
                          (r.addClass(`${i.containerModifierClass}grid`),
                          ((o.grid.fill && "column" === o.grid.fill) || (!o.grid.fill && "column" === i.grid.fill)) && r.addClass(`${i.containerModifierClass}grid-column`),
                          e.emitContainerClasses()),
                        ["navigation", "pagination", "scrollbar"].forEach((t) => {
                            let s = i[t] && i[t].enabled,
                                a = o[t] && o[t].enabled;
                            s && !a && e[t].disable(), !s && a && e[t].enable();
                        });
                    let u = o.direction && o.direction !== i.direction,
                        m = i.loop && (o.slidesPerView !== i.slidesPerView || u);
                    u && s && e.changeDirection(), g(e.params, o);
                    let h = e.params.enabled;
                    Object.assign(e, { allowTouchMove: e.params.allowTouchMove, allowSlideNext: e.params.allowSlideNext, allowSlidePrev: e.params.allowSlidePrev }),
                        c && !h ? e.disable() : !c && h && e.enable(),
                        (e.currentBreakpoint = n),
                        e.emit("_beforeBreakpoint", o),
                        m && s && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - a + e.loopedSlides, 0, !1)),
                        e.emit("breakpoint", o);
                },
                getBreakpoint: function (e, t, s) {
                    if ((void 0 === t && (t = "window"), !e || ("container" === t && !s))) return;
                    let a = !1,
                        i = r(),
                        l = "window" === t ? i.innerHeight : s.clientHeight,
                        n = Object.keys(e).map((e) => {
                            if ("string" == typeof e && 0 === e.indexOf("@")) {
                                let t = parseFloat(e.substr(1));
                                return { value: l * t, point: e };
                            }
                            return { value: e, point: e };
                        });
                    n.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
                    for (let o = 0; o < n.length; o += 1) {
                        let { point: d, value: p } = n[o];
                        "window" === t ? i.matchMedia(`(min-width: ${p}px)`).matches && (a = d) : p <= s.clientWidth && (a = d);
                    }
                    return a || "max";
                },
            },
            checkOverflow: {
                checkOverflow: function () {
                    let e = this,
                        { isLocked: t, params: s } = e,
                        { slidesOffsetBefore: a } = s;
                    if (a) {
                        let i = e.slides.length - 1,
                            r = e.slidesGrid[i] + e.slidesSizesGrid[i] + 2 * a;
                        e.isLocked = e.size > r;
                    } else e.isLocked = 1 === e.snapGrid.length;
                    !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                        !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                        t && t !== e.isLocked && (e.isEnd = !1),
                        t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
                },
            },
            classes: {
                addClasses: function () {
                    let { classNames: e, params: t, rtl: s, $el: a, device: i, support: r } = this,
                        l = (function (e, t) {
                            let s = [];
                            return (
                                e.forEach((e) => {
                                    "object" == typeof e
                                        ? Object.keys(e).forEach((a) => {
                                              e[a] && s.push(t + a);
                                          })
                                        : "string" == typeof e && s.push(t + e);
                                }),
                                s
                            );
                        })(
                            [
                                "initialized",
                                t.direction,
                                { "pointer-events": !r.touch },
                                { "free-mode": this.params.freeMode && t.freeMode.enabled },
                                { autoheight: t.autoHeight },
                                { rtl: s },
                                { grid: t.grid && t.grid.rows > 1 },
                                { "grid-column": t.grid && t.grid.rows > 1 && "column" === t.grid.fill },
                                { android: i.android },
                                { ios: i.ios },
                                { "css-mode": t.cssMode },
                                { centered: t.cssMode && t.centeredSlides },
                                { "watch-progress": t.watchSlidesProgress },
                            ],
                            t.containerModifierClass
                        );
                    e.push(...l), a.addClass([...e].join(" ")), this.emitContainerClasses();
                },
                removeClasses: function () {
                    let { $el: e, classNames: t } = this;
                    e.removeClass(t.join(" ")), this.emitContainerClasses();
                },
            },
            images: {
                loadImage: function (e, t, s, a, i, l) {
                    let n = r(),
                        o;
                    function p() {
                        l && l();
                    }
                    d(e).parent("picture")[0] || (e.complete && i) ? p() : t ? (((o = new n.Image()).onload = p), (o.onerror = p), a && (o.sizes = a), s && (o.srcset = s), t && (o.src = t)) : p();
                },
                preloadImages: function () {
                    let e = this;
                    function t() {
                        null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
                    }
                    e.imagesToLoad = e.$el.find("img");
                    for (let s = 0; s < e.imagesToLoad.length; s += 1) {
                        let a = e.imagesToLoad[s];
                        e.loadImage(a, a.currentSrc || a.getAttribute("src"), a.srcset || a.getAttribute("srcset"), a.sizes || a.getAttribute("sizes"), !0, t);
                    }
                },
            },
        },
        A = {};
    class G {
        constructor() {
            let e, t;
            for (var s, a = arguments.length, i = Array(a), l = 0; l < a; l++) i[l] = arguments[l];
            if ((1 === i.length && i[0].constructor && "Object" === Object.prototype.toString.call(i[0]).slice(8, -1) ? (t = i[0]) : ([e, t] = i), t || (t = {}), (t = g({}, t)), e && !t.el && (t.el = e), t.el && d(t.el).length > 1)) {
                let n = [];
                return (
                    d(t.el).each((e) => {
                        let s = g({}, t, { el: e });
                        n.push(new G(s));
                    }),
                    n
                );
            }
            let o = this;
            (o.__swiper__ = !0),
                (o.support = x()),
                (o.device =
                    ((s = { userAgent: t.userAgent }),
                    b ||
                        (b = (function (e) {
                            let { userAgent: t } = void 0 === e ? {} : e,
                                s = x(),
                                a = r(),
                                i = a.navigator.platform,
                                l = t || a.navigator.userAgent,
                                n = { ios: !1, android: !1 },
                                o = a.screen.width,
                                d = a.screen.height,
                                p = l.match(/(Android);?[\s\/]+([\d.]+)?/),
                                c = l.match(/(iPad).*OS\s([\d_]+)/),
                                u = l.match(/(iPod)(.*OS\s([\d_]+))?/),
                                m = !c && l.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                                h = "MacIntel" === i;
                            return (
                                !c &&
                                    h &&
                                    s.touch &&
                                    ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${d}`) >= 0 &&
                                    ((c = l.match(/(Version)\/([\d.]+)/)) || (c = [0, 1, "13_0_0"]), (h = !1)),
                                p && "Win32" !== i && ((n.os = "android"), (n.android = !0)),
                                (c || m || u) && ((n.os = "ios"), (n.ios = !0)),
                                n
                            );
                        })(s)),
                    b)),
                (o.browser =
                    (_ ||
                        (_ = (function () {
                            let e = r();
                            return {
                                isSafari: (function () {
                                    let t = e.navigator.userAgent.toLowerCase();
                                    return t.indexOf("safari") >= 0 && 0 > t.indexOf("chrome") && 0 > t.indexOf("android");
                                })(),
                                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),
                            };
                        })()),
                    _)),
                (o.eventsListeners = {}),
                (o.eventsAnyListeners = []),
                (o.modules = [...o.__modules__]),
                t.modules && Array.isArray(t.modules) && o.modules.push(...t.modules);
            let p = {};
            o.modules.forEach((e) => {
                var s, a;
                e({
                    swiper: o,
                    extendParams:
                        ((s = t),
                        (a = p),
                        function (e) {
                            void 0 === e && (e = {});
                            let t = Object.keys(e)[0],
                                i = e[t];
                            "object" == typeof i &&
                                null !== i &&
                                (["navigation", "pagination", "scrollbar"].indexOf(t) >= 0 && !0 === s[t] && (s[t] = { auto: !0 }),
                                t in s && "enabled" in i && (!0 === s[t] && (s[t] = { enabled: !0 }), "object" != typeof s[t] || "enabled" in s[t] || (s[t].enabled = !0), s[t] || (s[t] = { enabled: !1 }))),
                                g(a, e);
                        }),
                    on: o.on.bind(o),
                    once: o.once.bind(o),
                    off: o.off.bind(o),
                    emit: o.emit.bind(o),
                });
            });
            let c = g({}, D, p);
            return (
                (o.params = g({}, c, A, t)),
                (o.originalParams = g({}, o.params)),
                (o.passedParams = g({}, t)),
                o.params &&
                    o.params.on &&
                    Object.keys(o.params.on).forEach((e) => {
                        o.on(e, o.params.on[e]);
                    }),
                o.params && o.params.onAny && o.onAny(o.params.onAny),
                (o.$ = d),
                Object.assign(o, {
                    enabled: o.params.enabled,
                    el: e,
                    classNames: [],
                    slides: d(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal: () => "horizontal" === o.params.direction,
                    isVertical: () => "vertical" === o.params.direction,
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    allowSlideNext: o.params.allowSlideNext,
                    allowSlidePrev: o.params.allowSlidePrev,
                    touchEvents: (function () {
                        let e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                            t = ["pointerdown", "pointermove", "pointerup"];
                        return (
                            (o.touchEventsTouch = { start: e[0], move: e[1], end: e[2], cancel: e[3] }),
                            (o.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
                            o.support.touch || !o.params.simulateTouch ? o.touchEventsTouch : o.touchEventsDesktop
                        );
                    })(),
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: o.params.focusableElements,
                        lastClickTime: u(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        isTouchEvent: void 0,
                        startMoving: void 0,
                    },
                    allowClick: !0,
                    allowTouchMove: o.params.allowTouchMove,
                    touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
                    imagesToLoad: [],
                    imagesLoaded: 0,
                }),
                o.emit("_swiper"),
                o.params.init && o.init(),
                o
            );
        }
        enable() {
            let e = this;
            e.enabled || ((e.enabled = !0), e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
        }
        disable() {
            let e = this;
            e.enabled && ((e.enabled = !1), e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
        }
        setProgress(e, t) {
            e = Math.min(Math.max(e, 0), 1);
            let s = this.minTranslate(),
                a = (this.maxTranslate() - s) * e + s;
            this.translateTo(a, void 0 === t ? 0 : t), this.updateActiveIndex(), this.updateSlidesClasses();
        }
        emitContainerClasses() {
            let e = this;
            if (!e.params._emitClasses || !e.el) return;
            let t = e.el.className.split(" ").filter((t) => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass));
            e.emit("_containerClasses", t.join(" "));
        }
        getSlideClasses(e) {
            let t = this;
            return t.destroyed
                ? ""
                : e.className
                      .split(" ")
                      .filter((e) => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))
                      .join(" ");
        }
        emitSlidesClasses() {
            let e = this;
            if (!e.params._emitClasses || !e.el) return;
            let t = [];
            e.slides.each((s) => {
                let a = e.getSlideClasses(s);
                t.push({ slideEl: s, classNames: a }), e.emit("_slideClass", s, a);
            }),
                e.emit("_slideClasses", t);
        }
        slidesPerViewDynamic(e, t) {
            void 0 === e && (e = "current"), void 0 === t && (t = !1);
            let { params: s, slides: a, slidesGrid: i, slidesSizesGrid: r, size: l, activeIndex: n } = this,
                o = 1;
            if (s.centeredSlides) {
                let d,
                    p = a[n].swiperSlideSize;
                for (let c = n + 1; c < a.length; c += 1) a[c] && !d && ((p += a[c].swiperSlideSize), (o += 1), p > l && (d = !0));
                for (let u = n - 1; u >= 0; u -= 1) a[u] && !d && ((p += a[u].swiperSlideSize), (o += 1), p > l && (d = !0));
            } else if ("current" === e) for (let m = n + 1; m < a.length; m += 1) (t ? i[m] + r[m] - i[n] < l : i[m] - i[n] < l) && (o += 1);
            else for (let h = n - 1; h >= 0; h -= 1) i[n] - i[h] < l && (o += 1);
            return o;
        }
        update() {
            let e = this;
            if (!e || e.destroyed) return;
            let { snapGrid: t, params: s } = e;
            function a() {
                let t = e.rtlTranslate ? -1 * e.translate : e.translate,
                    s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
            }
            let i;
            s.breakpoints && e.setBreakpoint(),
                e.updateSize(),
                e.updateSlides(),
                e.updateProgress(),
                e.updateSlidesClasses(),
                e.params.freeMode && e.params.freeMode.enabled
                    ? (a(), e.params.autoHeight && e.updateAutoHeight())
                    : (i = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || a(),
                s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
                e.emit("update");
        }
        changeDirection(e, t) {
            void 0 === t && (t = !0);
            let s = this,
                a = s.params.direction;
            return (
                e || (e = "horizontal" === a ? "vertical" : "horizontal"),
                e === a ||
                    ("horizontal" !== e && "vertical" !== e) ||
                    (s.$el.removeClass(`${s.params.containerModifierClass}${a}`).addClass(`${s.params.containerModifierClass}${e}`),
                    s.emitContainerClasses(),
                    (s.params.direction = e),
                    s.slides.each((t) => {
                        "vertical" === e ? (t.style.width = "") : (t.style.height = "");
                    }),
                    s.emit("changeDirection"),
                    t && s.update()),
                s
            );
        }
        changeLanguageDirection(e) {
            let t = this;
            (t.rtl && "rtl" === e) ||
                (!t.rtl && "ltr" === e) ||
                ((t.rtl = "rtl" === e),
                (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
                t.rtl ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`), (t.el.dir = "rtl")) : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`), (t.el.dir = "ltr")),
                t.update());
        }
        mount(e) {
            let t = this;
            if (t.mounted) return !0;
            let s = d(e || t.params.el);
            if (!(e = s[0])) return !1;
            e.swiper = t;
            let i = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`,
                r = (() => {
                    if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                        let t = d(e.shadowRoot.querySelector(i()));
                        return (t.children = (e) => s.children(e)), t;
                    }
                    return s.children ? s.children(i()) : d(s).children(i());
                })();
            if (0 === r.length && t.params.createElements) {
                let l = a().createElement("div");
                (r = d(l)),
                    (l.className = t.params.wrapperClass),
                    s.append(l),
                    s.children(`.${t.params.slideClass}`).each((e) => {
                        r.append(e);
                    });
            }
            return (
                Object.assign(t, {
                    $el: s,
                    el: e,
                    $wrapperEl: r,
                    wrapperEl: r[0],
                    mounted: !0,
                    rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
                    rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
                    wrongRTL: "-webkit-box" === r.css("display"),
                }),
                !0
            );
        }
        init(e) {
            let t = this;
            return (
                t.initialized ||
                    !1 === t.mount(e) ||
                    (t.emit("beforeInit"),
                    t.params.breakpoints && t.setBreakpoint(),
                    t.addClasses(),
                    t.params.loop && t.loopCreate(),
                    t.updateSize(),
                    t.updateSlides(),
                    t.params.watchOverflow && t.checkOverflow(),
                    t.params.grabCursor && t.enabled && t.setGrabCursor(),
                    t.params.preloadImages && t.preloadImages(),
                    t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
                    t.attachEvents(),
                    (t.initialized = !0),
                    t.emit("init"),
                    t.emit("afterInit")),
                t
            );
        }
        destroy(e, t) {
            void 0 === e && (e = !0), void 0 === t && (t = !0);
            let s = this,
                { params: a, $el: i, $wrapperEl: r, slides: l } = s;
            return (
                void 0 === s.params ||
                    s.destroyed ||
                    (s.emit("beforeDestroy"),
                    (s.initialized = !1),
                    s.detachEvents(),
                    a.loop && s.loopDestroy(),
                    t &&
                        (s.removeClasses(),
                        i.removeAttr("style"),
                        r.removeAttr("style"),
                        l && l.length && l.removeClass([a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),
                    s.emit("destroy"),
                    Object.keys(s.eventsListeners).forEach((e) => {
                        s.off(e);
                    }),
                    !1 !== e &&
                        ((s.$el[0].swiper = null),
                        (function (e) {
                            let t = e;
                            Object.keys(t).forEach((e) => {
                                try {
                                    t[e] = null;
                                } catch (s) {}
                                try {
                                    delete t[e];
                                } catch (a) {}
                            });
                        })(s)),
                    (s.destroyed = !0)),
                null
            );
        }
        static extendDefaults(e) {
            g(A, e);
        }
        static get extendedDefaults() {
            return A;
        }
        static get defaults() {
            return D;
        }
        static installModule(e) {
            G.prototype.__modules__ || (G.prototype.__modules__ = []);
            let t = G.prototype.__modules__;
            "function" == typeof e && 0 > t.indexOf(e) && t.push(e);
        }
        static use(e) {
            return Array.isArray(e) ? (e.forEach((e) => G.installModule(e)), G) : (G.installModule(e), G);
        }
    }
    function B(e, t, s, i) {
        let r = a();
        return (
            e.params.createElements &&
                Object.keys(i).forEach((a) => {
                    if (!s[a] && !0 === s.auto) {
                        let l = e.$el.children(`.${i[a]}`)[0];
                        l || (((l = r.createElement("div")).className = i[a]), e.$el.append(l)), (s[a] = l), (t[a] = l);
                    }
                }),
            s
        );
    }
    function N(e) {
        return (
            void 0 === e && (e = ""),
            `.${e
                .trim()
                .replace(/([\.:!\/])/g, "\\$1")
                .replace(/ /g, ".")}`
        );
    }
    function H(e) {
        let { $wrapperEl: t, params: s } = this;
        if ((s.loop && this.loopDestroy(), "object" == typeof e && "length" in e)) for (let a = 0; a < e.length; a += 1) e[a] && t.append(e[a]);
        else t.append(e);
        s.loop && this.loopCreate(), s.observer || this.update();
    }
    function X(e) {
        let { params: t, $wrapperEl: s, activeIndex: a } = this;
        t.loop && this.loopDestroy();
        let i = a + 1;
        if ("object" == typeof e && "length" in e) {
            for (let r = 0; r < e.length; r += 1) e[r] && s.prepend(e[r]);
            i = a + e.length;
        } else s.prepend(e);
        t.loop && this.loopCreate(), t.observer || this.update(), this.slideTo(i, 0, !1);
    }
    function Y(e, t) {
        let s = this,
            { $wrapperEl: a, params: i, activeIndex: r } = s,
            l = r;
        i.loop && ((l -= s.loopedSlides), s.loopDestroy(), (s.slides = a.children(`.${i.slideClass}`)));
        let n = s.slides.length;
        if (e <= 0) return void s.prependSlide(t);
        if (e >= n) return void s.appendSlide(t);
        let o = l > e ? l + 1 : l,
            d = [];
        for (let p = n - 1; p >= e; p -= 1) {
            let c = s.slides.eq(p);
            c.remove(), d.unshift(c);
        }
        if ("object" == typeof t && "length" in t) {
            for (let u = 0; u < t.length; u += 1) t[u] && a.append(t[u]);
            o = l > e ? l + t.length : l;
        } else a.append(t);
        for (let m = 0; m < d.length; m += 1) a.append(d[m]);
        i.loop && s.loopCreate(), i.observer || s.update(), i.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1);
    }
    function R(e) {
        let t = this,
            { params: s, $wrapperEl: a, activeIndex: i } = t,
            r = i;
        s.loop && ((r -= t.loopedSlides), t.loopDestroy(), (t.slides = a.children(`.${s.slideClass}`)));
        let l,
            n = r;
        if ("object" == typeof e && "length" in e) {
            for (let o = 0; o < e.length; o += 1) (l = e[o]), t.slides[l] && t.slides.eq(l).remove(), l < n && (n -= 1);
            n = Math.max(n, 0);
        } else (l = e), t.slides[l] && t.slides.eq(l).remove(), l < n && (n -= 1), (n = Math.max(n, 0));
        s.loop && t.loopCreate(), s.observer || t.update(), s.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1);
    }
    function W() {
        let e = [];
        for (let t = 0; t < this.slides.length; t += 1) e.push(t);
        this.removeSlide(e);
    }
    function q(e) {
        let { effect: t, swiper: s, on: a, setTranslate: i, setTransition: r, overwriteParams: l, perspective: n, recreateShadows: o, getEffectParams: d } = e,
            p;
        a("beforeInit", () => {
            if (s.params.effect !== t) return;
            s.classNames.push(`${s.params.containerModifierClass}${t}`), n && n() && s.classNames.push(`${s.params.containerModifierClass}3d`);
            let e = l ? l() : {};
            Object.assign(s.params, e), Object.assign(s.originalParams, e);
        }),
            a("setTranslate", () => {
                s.params.effect === t && i();
            }),
            a("setTransition", (e, a) => {
                s.params.effect === t && r(a);
            }),
            a("transitionEnd", () => {
                s.params.effect === t &&
                    o &&
                    d &&
                    d().slideShadows &&
                    (s.slides.each((e) => {
                        s.$(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove();
                    }),
                    o());
            }),
            a("virtualUpdate", () => {
                s.params.effect === t &&
                    (s.slides.length || (p = !0),
                    requestAnimationFrame(() => {
                        p && s.slides && s.slides.length && (i(), (p = !1));
                    }));
            });
    }
    function V(e, t) {
        return e.transformEl ? t.find(e.transformEl).css({ "backface-visibility": "hidden", "-webkit-backface-visibility": "hidden" }) : t;
    }
    function F(e) {
        let { swiper: t, duration: s, transformEl: a, allSlides: i } = e,
            { slides: r, activeIndex: l, $wrapperEl: n } = t;
        if (t.params.virtualTranslate && 0 !== s) {
            let o,
                d = !1;
            (o = i ? (a ? r.find(a) : r) : a ? r.eq(l).find(a) : r.eq(l)).transitionEnd(() => {
                if (d || !t || t.destroyed) return;
                (d = !0), (t.animating = !1);
                let e = ["webkitTransitionEnd", "transitionend"];
                for (let s = 0; s < e.length; s += 1) n.trigger(e[s]);
            });
        }
    }
    function j(e, t, s) {
        let a = "swiper-slide-shadow" + (s ? `-${s}` : ""),
            i = e.transformEl ? t.find(e.transformEl) : t,
            r = i.children(`.${a}`);
        return r.length || ((r = d(`<div class="swiper-slide-shadow${s ? `-${s}` : ""}"></div>`)), i.append(r)), r;
    }
    Object.keys(O).forEach((e) => {
        Object.keys(O[e]).forEach((t) => {
            G.prototype[t] = O[e][t];
        });
    }),
        G.use([
            function (e) {
                let { swiper: t, on: s, emit: a } = e,
                    i = r(),
                    l = null,
                    n = null,
                    o = () => {
                        t && !t.destroyed && t.initialized && (a("beforeResize"), a("resize"));
                    },
                    d = () => {
                        t && !t.destroyed && t.initialized && a("orientationchange");
                    };
                s("init", () => {
                    t.params.resizeObserver && void 0 !== i.ResizeObserver
                        ? t &&
                          !t.destroyed &&
                          t.initialized &&
                          (l = new ResizeObserver((e) => {
                              n = i.requestAnimationFrame(() => {
                                  let { width: s, height: a } = t,
                                      i = s,
                                      r = a;
                                  e.forEach((e) => {
                                      let { contentBoxSize: s, contentRect: a, target: l } = e;
                                      (l && l !== t.el) || ((i = a ? a.width : (s[0] || s).inlineSize), (r = a ? a.height : (s[0] || s).blockSize));
                                  }),
                                      (i === s && r === a) || o();
                              });
                          })).observe(t.el)
                        : (i.addEventListener("resize", o), i.addEventListener("orientationchange", d));
                }),
                    s("destroy", () => {
                        n && i.cancelAnimationFrame(n), l && l.unobserve && t.el && (l.unobserve(t.el), (l = null)), i.removeEventListener("resize", o), i.removeEventListener("orientationchange", d);
                    });
            },
            function (e) {
                let { swiper: t, extendParams: s, on: a, emit: i } = e,
                    l = [],
                    n = r(),
                    o = function (e, t) {
                        void 0 === t && (t = {});
                        let s = new (n.MutationObserver || n.WebkitMutationObserver)((e) => {
                            if (1 === e.length) return void i("observerUpdate", e[0]);
                            let t = function () {
                                i("observerUpdate", e[0]);
                            };
                            n.requestAnimationFrame ? n.requestAnimationFrame(t) : n.setTimeout(t, 0);
                        });
                        s.observe(e, { attributes: void 0 === t.attributes || t.attributes, childList: void 0 === t.childList || t.childList, characterData: void 0 === t.characterData || t.characterData }), l.push(s);
                    };
                s({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
                    a("init", () => {
                        if (t.params.observer) {
                            if (t.params.observeParents) {
                                let e = t.$el.parents();
                                for (let s = 0; s < e.length; s += 1) o(e[s]);
                            }
                            o(t.$el[0], { childList: t.params.observeSlideChildren }), o(t.$wrapperEl[0], { attributes: !1 });
                        }
                    }),
                    a("destroy", () => {
                        l.forEach((e) => {
                            e.disconnect();
                        }),
                            l.splice(0, l.length);
                    });
            },
        ]);
    let U = [
        function (e) {
            let t,
                { swiper: s, extendParams: a, on: i, emit: r } = e;
            function l(e, t) {
                let a = s.params.virtual;
                if (a.cache && s.virtual.cache[t]) return s.virtual.cache[t];
                let i = a.renderSlide ? d(a.renderSlide.call(s, e, t)) : d(`<div class="${s.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`);
                return i.attr("data-swiper-slide-index") || i.attr("data-swiper-slide-index", t), a.cache && (s.virtual.cache[t] = i), i;
            }
            function n(e) {
                let { slidesPerView: t, slidesPerGroup: a, centeredSlides: i } = s.params,
                    { addSlidesBefore: n, addSlidesAfter: o } = s.params.virtual,
                    { from: d, to: p, slides: c, slidesGrid: u, offset: m } = s.virtual;
                s.params.cssMode || s.updateActiveIndex();
                let h = s.activeIndex || 0,
                    f,
                    g,
                    $;
                (f = s.rtlTranslate ? "right" : s.isHorizontal() ? "left" : "top"), i ? ((g = Math.floor(t / 2) + a + o), ($ = Math.floor(t / 2) + a + n)) : ((g = t + (a - 1) + o), ($ = a + n));
                let v = Math.max((h || 0) - $, 0),
                    w = Math.min((h || 0) + g, c.length - 1),
                    b = (s.slidesGrid[v] || 0) - (s.slidesGrid[0] || 0);
                function _() {
                    s.updateSlides(), s.updateProgress(), s.updateSlidesClasses(), s.lazy && s.params.lazy.enabled && s.lazy.load(), r("virtualUpdate");
                }
                if ((Object.assign(s.virtual, { from: v, to: w, offset: b, slidesGrid: s.slidesGrid }), d === v && p === w && !e))
                    return s.slidesGrid !== u && b !== m && s.slides.css(f, `${b}px`), s.updateProgress(), void r("virtualUpdate");
                if (s.params.virtual.renderExternal)
                    return (
                        s.params.virtual.renderExternal.call(s, {
                            offset: b,
                            from: v,
                            to: w,
                            slides: (function () {
                                let e = [];
                                for (let t = v; t <= w; t += 1) e.push(c[t]);
                                return e;
                            })(),
                        }),
                        void (s.params.virtual.renderExternalUpdate ? _() : r("virtualUpdate"))
                    );
                let x = [],
                    y = [];
                if (e) s.$wrapperEl.find(`.${s.params.slideClass}`).remove();
                else for (let E = d; E <= p; E += 1) (E < v || E > w) && s.$wrapperEl.find(`.${s.params.slideClass}[data-swiper-slide-index="${E}"]`).remove();
                for (let C = 0; C < c.length; C += 1) C >= v && C <= w && (void 0 === p || e ? y.push(C) : (C > p && y.push(C), C < d && x.push(C)));
                y.forEach((e) => {
                    s.$wrapperEl.append(l(c[e], e));
                }),
                    x
                        .sort((e, t) => t - e)
                        .forEach((e) => {
                            s.$wrapperEl.prepend(l(c[e], e));
                        }),
                    s.$wrapperEl.children(".swiper-slide").css(f, `${b}px`),
                    _();
            }
            a({ virtual: { enabled: !1, slides: [], cache: !0, renderSlide: null, renderExternal: null, renderExternalUpdate: !0, addSlidesBefore: 0, addSlidesAfter: 0 } }),
                (s.virtual = { cache: {}, from: void 0, to: void 0, slides: [], offset: 0, slidesGrid: [] }),
                i("beforeInit", () => {
                    s.params.virtual.enabled &&
                        ((s.virtual.slides = s.params.virtual.slides),
                        s.classNames.push(`${s.params.containerModifierClass}virtual`),
                        (s.params.watchSlidesProgress = !0),
                        (s.originalParams.watchSlidesProgress = !0),
                        s.params.initialSlide || n());
                }),
                i("setTranslate", () => {
                    s.params.virtual.enabled &&
                        (s.params.cssMode && !s._immediateVirtual
                            ? (clearTimeout(t),
                              (t = setTimeout(() => {
                                  n();
                              }, 100)))
                            : n());
                }),
                i("init update resize", () => {
                    s.params.virtual.enabled && s.params.cssMode && $(s.wrapperEl, "--swiper-virtual-size", `${s.virtualSize}px`);
                }),
                Object.assign(s.virtual, {
                    appendSlide: function (e) {
                        if ("object" == typeof e && "length" in e) for (let t = 0; t < e.length; t += 1) e[t] && s.virtual.slides.push(e[t]);
                        else s.virtual.slides.push(e);
                        n(!0);
                    },
                    prependSlide: function (e) {
                        let t = s.activeIndex,
                            a = t + 1,
                            i = 1;
                        if (Array.isArray(e)) {
                            for (let r = 0; r < e.length; r += 1) e[r] && s.virtual.slides.unshift(e[r]);
                            (a = t + e.length), (i = e.length);
                        } else s.virtual.slides.unshift(e);
                        if (s.params.virtual.cache) {
                            let l = s.virtual.cache,
                                o = {};
                            Object.keys(l).forEach((e) => {
                                let t = l[e],
                                    s = t.attr("data-swiper-slide-index");
                                s && t.attr("data-swiper-slide-index", parseInt(s, 10) + i), (o[parseInt(e, 10) + i] = t);
                            }),
                                (s.virtual.cache = o);
                        }
                        n(!0), s.slideTo(a, 0);
                    },
                    removeSlide: function (e) {
                        if (null == e) return;
                        let t = s.activeIndex;
                        if (Array.isArray(e)) for (let a = e.length - 1; a >= 0; a -= 1) s.virtual.slides.splice(e[a], 1), s.params.virtual.cache && delete s.virtual.cache[e[a]], e[a] < t && (t -= 1), (t = Math.max(t, 0));
                        else s.virtual.slides.splice(e, 1), s.params.virtual.cache && delete s.virtual.cache[e], e < t && (t -= 1), (t = Math.max(t, 0));
                        n(!0), s.slideTo(t, 0);
                    },
                    removeAllSlides: function () {
                        (s.virtual.slides = []), s.params.virtual.cache && (s.virtual.cache = {}), n(!0), s.slideTo(0, 0);
                    },
                    update: n,
                });
        },
        function (e) {
            let { swiper: t, extendParams: s, on: i, emit: l } = e,
                n = a(),
                o = r();
            function p(e) {
                if (!t.enabled) return;
                let { rtlTranslate: s } = t,
                    a = e;
                a.originalEvent && (a = a.originalEvent);
                let i = a.keyCode || a.charCode,
                    r = t.params.keyboard.pageUpDown,
                    d = r && 33 === i,
                    p = r && 34 === i,
                    c = 37 === i,
                    u = 39 === i,
                    m = 38 === i,
                    h = 40 === i;
                if ((!t.allowSlideNext && ((t.isHorizontal() && u) || (t.isVertical() && h) || p)) || (!t.allowSlidePrev && ((t.isHorizontal() && c) || (t.isVertical() && m) || d))) return !1;
                if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || (n.activeElement && n.activeElement.nodeName && ("input" === n.activeElement.nodeName.toLowerCase() || "textarea" === n.activeElement.nodeName.toLowerCase())))) {
                    if (t.params.keyboard.onlyInViewport && (d || p || c || u || m || h)) {
                        let f = !1;
                        if (t.$el.parents(`.${t.params.slideClass}`).length > 0 && 0 === t.$el.parents(`.${t.params.slideActiveClass}`).length) return;
                        let g = t.$el,
                            $ = g[0].clientWidth,
                            v = g[0].clientHeight,
                            w = o.innerWidth,
                            b = o.innerHeight,
                            _ = t.$el.offset();
                        s && (_.left -= t.$el[0].scrollLeft);
                        let x = [
                            [_.left, _.top],
                            [_.left + $, _.top],
                            [_.left, _.top + v],
                            [_.left + $, _.top + v],
                        ];
                        for (let y = 0; y < x.length; y += 1) {
                            let E = x[y];
                            if (E[0] >= 0 && E[0] <= w && E[1] >= 0 && E[1] <= b) {
                                if (0 === E[0] && 0 === E[1]) continue;
                                f = !0;
                            }
                        }
                        if (!f) return;
                    }
                    t.isHorizontal()
                        ? ((d || p || c || u) && (a.preventDefault ? a.preventDefault() : (a.returnValue = !1)), (((p || u) && !s) || ((d || c) && s)) && t.slideNext(), (((d || c) && !s) || ((p || u) && s)) && t.slidePrev())
                        : ((d || p || m || h) && (a.preventDefault ? a.preventDefault() : (a.returnValue = !1)), (p || h) && t.slideNext(), (d || m) && t.slidePrev()),
                        l("keyPress", i);
                }
            }
            function c() {
                t.keyboard.enabled || (d(n).on("keydown", p), (t.keyboard.enabled = !0));
            }
            function u() {
                t.keyboard.enabled && (d(n).off("keydown", p), (t.keyboard.enabled = !1));
            }
            (t.keyboard = { enabled: !1 }),
                s({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } }),
                i("init", () => {
                    t.params.keyboard.enabled && c();
                }),
                i("destroy", () => {
                    t.keyboard.enabled && u();
                }),
                Object.assign(t.keyboard, { enable: c, disable: u });
        },
        function (e) {
            let { swiper: t, extendParams: s, on: a, emit: i } = e,
                l = r(),
                n;
            s({ mousewheel: { enabled: !1, releaseOnEdges: !1, invert: !1, forceToAxis: !1, sensitivity: 1, eventsTarget: "container", thresholdDelta: null, thresholdTime: null } }), (t.mousewheel = { enabled: !1 });
            let o,
                p = u(),
                m = [];
            function h() {
                t.enabled && (t.mouseEntered = !0);
            }
            function f() {
                t.enabled && (t.mouseEntered = !1);
            }
            function g(e) {
                return (
                    !(t.params.mousewheel.thresholdDelta && e.delta < t.params.mousewheel.thresholdDelta) &&
                    !(t.params.mousewheel.thresholdTime && u() - p < t.params.mousewheel.thresholdTime) &&
                    ((e.delta >= 6 && u() - p < 60) ||
                        (e.direction < 0 ? (t.isEnd && !t.params.loop) || t.animating || (t.slideNext(), i("scroll", e.raw)) : (t.isBeginning && !t.params.loop) || t.animating || (t.slidePrev(), i("scroll", e.raw)),
                        (p = new l.Date().getTime()),
                        !1))
                );
            }
            function $(e) {
                var s;
                let a = e,
                    r = !0;
                if (!t.enabled) return;
                let l = t.params.mousewheel;
                t.params.cssMode && a.preventDefault();
                let p = t.$el;
                if (("container" !== t.params.mousewheel.eventsTarget && (p = d(t.params.mousewheel.eventsTarget)), !t.mouseEntered && !p[0].contains(a.target) && !l.releaseOnEdges)) return !0;
                a.originalEvent && (a = a.originalEvent);
                let h = 0,
                    f,
                    $,
                    v,
                    w,
                    b = t.rtlTranslate ? -1 : 1,
                    _ =
                        ((s = a),
                        (f = 0),
                        ($ = 0),
                        (v = 0),
                        (w = 0),
                        "detail" in s && ($ = s.detail),
                        "wheelDelta" in s && ($ = -s.wheelDelta / 120),
                        "wheelDeltaY" in s && ($ = -s.wheelDeltaY / 120),
                        "wheelDeltaX" in s && (f = -s.wheelDeltaX / 120),
                        "axis" in s && s.axis === s.HORIZONTAL_AXIS && ((f = $), ($ = 0)),
                        (v = 10 * f),
                        (w = 10 * $),
                        "deltaY" in s && (w = s.deltaY),
                        "deltaX" in s && (v = s.deltaX),
                        s.shiftKey && !v && ((v = w), (w = 0)),
                        (v || w) && s.deltaMode && (1 === s.deltaMode ? ((v *= 40), (w *= 40)) : ((v *= 800), (w *= 800))),
                        v && !f && (f = v < 1 ? -1 : 1),
                        w && !$ && ($ = w < 1 ? -1 : 1),
                        { spinX: f, spinY: $, pixelX: v, pixelY: w });
                if (l.forceToAxis) {
                    if (t.isHorizontal()) {
                        if (!(Math.abs(_.pixelX) > Math.abs(_.pixelY))) return !0;
                        h = -_.pixelX * b;
                    } else {
                        if (!(Math.abs(_.pixelY) > Math.abs(_.pixelX))) return !0;
                        h = -_.pixelY;
                    }
                } else h = Math.abs(_.pixelX) > Math.abs(_.pixelY) ? -_.pixelX * b : -_.pixelY;
                if (0 === h) return !0;
                l.invert && (h = -h);
                let x = t.getTranslate() + h * l.sensitivity;
                if (
                    (x >= t.minTranslate() && (x = t.minTranslate()),
                    x <= t.maxTranslate() && (x = t.maxTranslate()),
                    (r = !!t.params.loop || !(x === t.minTranslate() || x === t.maxTranslate())) && t.params.nested && a.stopPropagation(),
                    t.params.freeMode && t.params.freeMode.enabled)
                ) {
                    let y = { time: u(), delta: Math.abs(h), direction: Math.sign(h) },
                        E = o && y.time < o.time + 500 && y.delta <= o.delta && y.direction === o.direction;
                    if (!E) {
                        (o = void 0), t.params.loop && t.loopFix();
                        let C = t.getTranslate() + h * l.sensitivity,
                            T = t.isBeginning,
                            S = t.isEnd;
                        if (
                            (C >= t.minTranslate() && (C = t.minTranslate()),
                            C <= t.maxTranslate() && (C = t.maxTranslate()),
                            t.setTransition(0),
                            t.setTranslate(C),
                            t.updateProgress(),
                            t.updateActiveIndex(),
                            t.updateSlidesClasses(),
                            ((!T && t.isBeginning) || (!S && t.isEnd)) && t.updateSlidesClasses(),
                            t.params.freeMode.sticky)
                        ) {
                            clearTimeout(n), (n = void 0), m.length >= 15 && m.shift();
                            let P = m.length ? m[m.length - 1] : void 0,
                                k = m[0];
                            if ((m.push(y), P && (y.delta > P.delta || y.direction !== P.direction))) m.splice(0);
                            else if (m.length >= 15 && y.time - k.time < 500 && k.delta - y.delta >= 1 && y.delta <= 6) {
                                let M = h > 0 ? 0.8 : 0.2;
                                (o = y),
                                    m.splice(0),
                                    (n = c(() => {
                                        t.slideToClosest(t.params.speed, !0, void 0, M);
                                    }, 0));
                            }
                            n ||
                                (n = c(() => {
                                    (o = y), m.splice(0), t.slideToClosest(t.params.speed, !0, void 0, 0.5);
                                }, 500));
                        }
                        if ((E || i("scroll", a), t.params.autoplay && t.params.autoplayDisableOnInteraction && t.autoplay.stop(), C === t.minTranslate() || C === t.maxTranslate())) return !0;
                    }
                } else {
                    let z = { time: u(), delta: Math.abs(h), direction: Math.sign(h), raw: e };
                    m.length >= 2 && m.shift();
                    let L = m.length ? m[m.length - 1] : void 0;
                    if (
                        (m.push(z),
                        L ? (z.direction !== L.direction || z.delta > L.delta || z.time > L.time + 150) && g(z) : g(z),
                        (function (e) {
                            let s = t.params.mousewheel;
                            if (e.direction < 0) {
                                if (t.isEnd && !t.params.loop && s.releaseOnEdges) return !0;
                            } else if (t.isBeginning && !t.params.loop && s.releaseOnEdges) return !0;
                            return !1;
                        })(z))
                    )
                        return !0;
                }
                return a.preventDefault ? a.preventDefault() : (a.returnValue = !1), !1;
            }
            function v(e) {
                let s = t.$el;
                "container" !== t.params.mousewheel.eventsTarget && (s = d(t.params.mousewheel.eventsTarget)), s[e]("mouseenter", h), s[e]("mouseleave", f), s[e]("wheel", $);
            }
            function w() {
                return t.params.cssMode ? (t.wrapperEl.removeEventListener("wheel", $), !0) : !t.mousewheel.enabled && (v("on"), (t.mousewheel.enabled = !0), !0);
            }
            function b() {
                return t.params.cssMode ? (t.wrapperEl.addEventListener(event, $), !0) : !!t.mousewheel.enabled && (v("off"), (t.mousewheel.enabled = !1), !0);
            }
            a("init", () => {
                !t.params.mousewheel.enabled && t.params.cssMode && b(), t.params.mousewheel.enabled && w();
            }),
                a("destroy", () => {
                    t.params.cssMode && w(), t.mousewheel.enabled && b();
                }),
                Object.assign(t.mousewheel, { enable: w, disable: b });
        },
        function (e) {
            let { swiper: t, extendParams: s, on: a, emit: i } = e;
            function r(e) {
                let s;
                return e && ((s = d(e)), t.params.uniqueNavElements && "string" == typeof e && s.length > 1 && 1 === t.$el.find(e).length && (s = t.$el.find(e))), s;
            }
            function l(e, s) {
                let a = t.params.navigation;
                e &&
                    e.length > 0 &&
                    (e[s ? "addClass" : "removeClass"](a.disabledClass), e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = s), t.params.watchOverflow && t.enabled && e[t.isLocked ? "addClass" : "removeClass"](a.lockClass));
            }
            function n() {
                if (t.params.loop) return;
                let { $nextEl: e, $prevEl: s } = t.navigation;
                l(s, t.isBeginning && !t.params.rewind), l(e, t.isEnd && !t.params.rewind);
            }
            function o(e) {
                e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), i("navigationPrev"));
            }
            function p(e) {
                e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), i("navigationNext"));
            }
            function c() {
                let e = t.params.navigation;
                if (((t.params.navigation = B(t, t.originalParams.navigation, t.params.navigation, { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" })), !e.nextEl && !e.prevEl)) return;
                let s = r(e.nextEl),
                    a = r(e.prevEl);
                s && s.length > 0 && s.on("click", p),
                    a && a.length > 0 && a.on("click", o),
                    Object.assign(t.navigation, { $nextEl: s, nextEl: s && s[0], $prevEl: a, prevEl: a && a[0] }),
                    t.enabled || (s && s.addClass(e.lockClass), a && a.addClass(e.lockClass));
            }
            function u() {
                let { $nextEl: e, $prevEl: s } = t.navigation;
                e && e.length && (e.off("click", p), e.removeClass(t.params.navigation.disabledClass)), s && s.length && (s.off("click", o), s.removeClass(t.params.navigation.disabledClass));
            }
            s({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock",
                    navigationDisabledClass: "swiper-navigation-disabled",
                },
            }),
                (t.navigation = { nextEl: null, $nextEl: null, prevEl: null, $prevEl: null }),
                a("init", () => {
                    !1 === t.params.navigation.enabled ? m() : (c(), n());
                }),
                a("toEdge fromEdge lock unlock", () => {
                    n();
                }),
                a("destroy", () => {
                    u();
                }),
                a("enable disable", () => {
                    let { $nextEl: e, $prevEl: s } = t.navigation;
                    e && e[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass), s && s[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass);
                }),
                a("click", (e, s) => {
                    let { $nextEl: a, $prevEl: r } = t.navigation,
                        l = s.target;
                    if (t.params.navigation.hideOnClick && !d(l).is(r) && !d(l).is(a)) {
                        if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === l || t.pagination.el.contains(l))) return;
                        let n;
                        a ? (n = a.hasClass(t.params.navigation.hiddenClass)) : r && (n = r.hasClass(t.params.navigation.hiddenClass)),
                            i(!0 === n ? "navigationShow" : "navigationHide"),
                            a && a.toggleClass(t.params.navigation.hiddenClass),
                            r && r.toggleClass(t.params.navigation.hiddenClass);
                    }
                });
            let m = () => {
                t.$el.addClass(t.params.navigation.navigationDisabledClass), u();
            };
            Object.assign(t.navigation, {
                enable() {
                    t.$el.removeClass(t.params.navigation.navigationDisabledClass), c(), n();
                },
                disable: m,
                update: n,
                init: c,
                destroy: u,
            });
        },
        function (e) {
            let { swiper: t, extendParams: s, on: a, emit: i } = e,
                r = "swiper-rotetion",
                l;
            s({
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
                    formatFractionCurrent: (e) => e,
                    formatFractionTotal: (e) => e,
                    bulletClass: `${r}-bullet`,
                    bulletActiveClass: `${r}-bullet-active`,
                    modifierClass: `${r}-`,
                    currentClass: `${r}-current`,
                    totalClass: `${r}-total`,
                    hiddenClass: `${r}-hidden`,
                    progressbarFillClass: `${r}-progressbar-fill`,
                    progressbarOppositeClass: `${r}-progressbar-opposite`,
                    clickableClass: `${r}-clickable`,
                    lockClass: `${r}-lock`,
                    horizontalClass: `${r}-horizontal`,
                    verticalClass: `${r}-vertical`,
                    paginationDisabledClass: `${r}-disabled`,
                },
            }),
                (t.pagination = { el: null, $el: null, bullets: [] });
            let n = 0;
            function o() {
                return !t.params.pagination.el || !t.pagination.el || !t.pagination.$el || 0 === t.pagination.$el.length;
            }
            function p(e, s) {
                let { bulletActiveClass: a } = t.params.pagination;
                e[s]().addClass(`${a}-${s}`)[s]().addClass(`${a}-${s}-${s}`);
            }
            function c() {
                let e = t.rtl,
                    s = t.params.pagination;
                if (o()) return;
                let a = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                    r = t.pagination.$el,
                    c,
                    u = t.params.loop ? Math.ceil((a - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
                if (
                    (t.params.loop
                        ? ((c = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup)) > a - 1 - 2 * t.loopedSlides && (c -= a - 2 * t.loopedSlides),
                          c > u - 1 && (c -= u),
                          c < 0 && "bullets" !== t.params.paginationType && (c = u + c))
                        : (c = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0),
                    "bullets" === s.type && t.pagination.bullets && t.pagination.bullets.length > 0)
                ) {
                    let m = t.pagination.bullets,
                        h,
                        f,
                        g;
                    if (
                        (s.dynamicBullets &&
                            ((l = m.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                            r.css(t.isHorizontal() ? "width" : "height", l * (s.dynamicMainBullets + 4) + "px"),
                            s.dynamicMainBullets > 1 && void 0 !== t.previousIndex && ((n += c - (t.previousIndex - t.loopedSlides || 0)) > s.dynamicMainBullets - 1 ? (n = s.dynamicMainBullets - 1) : n < 0 && (n = 0)),
                            (g = ((f = (h = Math.max(c - n, 0)) + (Math.min(m.length, s.dynamicMainBullets) - 1)) + h) / 2)),
                        m.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e) => `${s.bulletActiveClass}${e}`).join(" ")),
                        r.length > 1)
                    )
                        m.each((e) => {
                            let t = d(e),
                                a = t.index();
                            a === c && t.addClass(s.bulletActiveClass), s.dynamicBullets && (a >= h && a <= f && t.addClass(`${s.bulletActiveClass}-main`), a === h && p(t, "prev"), a === f && p(t, "next"));
                        });
                    else {
                        let $ = m.eq(c),
                            v = $.index();
                        if (($.addClass(s.bulletActiveClass), s.dynamicBullets)) {
                            let w = m.eq(h),
                                b = m.eq(f);
                            for (let _ = h; _ <= f; _ += 1) m.eq(_).addClass(`${s.bulletActiveClass}-main`);
                            if (t.params.loop) {
                                if (v >= m.length) {
                                    for (let x = s.dynamicMainBullets; x >= 0; x -= 1) m.eq(m.length - x).addClass(`${s.bulletActiveClass}-main`);
                                    m.eq(m.length - s.dynamicMainBullets - 1).addClass(`${s.bulletActiveClass}-prev`);
                                } else p(w, "prev"), p(b, "next");
                            } else p(w, "prev"), p(b, "next");
                        }
                    }
                    if (s.dynamicBullets) {
                        let y = Math.min(m.length, s.dynamicMainBullets + 4),
                            E = (l * y - l) / 2 - g * l;
                        m.css(t.isHorizontal() ? (e ? "right" : "left") : "top", `${E}px`);
                    }
                }
                if (("fraction" === s.type && (r.find(N(s.currentClass)).text(s.formatFractionCurrent(c + 1)), r.find(N(s.totalClass)).text(s.formatFractionTotal(u))), "progressbar" === s.type)) {
                    let C;
                    C = s.progressbarOpposite ? (t.isHorizontal() ? "vertical" : "horizontal") : t.isHorizontal() ? "horizontal" : "vertical";
                    let T = (c + 1) / u,
                        S = 1,
                        P = 1;
                    "horizontal" === C ? (S = T) : (P = T), r.find(N(s.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${S}) scaleY(${P})`).transition(t.params.speed);
                }
                "custom" === s.type && s.renderCustom ? (r.html(s.renderCustom(t, c + 1, u)), i("paginationRender", r[0])) : i("paginationUpdate", r[0]),
                    t.params.watchOverflow && t.enabled && r[t.isLocked ? "addClass" : "removeClass"](s.lockClass);
            }
            function u() {
                let e = t.params.pagination;
                if (o()) return;
                let s = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                    a = t.pagination.$el,
                    r = "";
                if ("bullets" === e.type) {
                    let l = t.params.loop ? Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
                    t.params.freeMode && t.params.freeMode.enabled && !t.params.loop && l > s && (l = s);
                    for (let n = 0; n < l; n += 1) e.renderBullet ? (r += e.renderBullet.call(t, n, e.bulletClass)) : (r += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`);
                    a.html(r), (t.pagination.bullets = a.find(N(e.bulletClass)));
                }
                "fraction" === e.type && ((r = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`), a.html(r)),
                    "progressbar" === e.type && ((r = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`), a.html(r)),
                    "custom" !== e.type && i("paginationRender", t.pagination.$el[0]);
            }
            function m() {
                t.params.pagination = B(t, t.originalParams.pagination, t.params.pagination, { el: "swiper-rotetion" });
                let e = t.params.pagination;
                if (!e.el) return;
                let s = d(e.el);
                0 !== s.length &&
                    (t.params.uniqueNavElements && "string" == typeof e.el && s.length > 1 && (s = t.$el.find(e.el)).length > 1 && (s = s.filter((e) => d(e).parents(".swiper")[0] === t.el)),
                    "bullets" === e.type && e.clickable && s.addClass(e.clickableClass),
                    s.addClass(e.modifierClass + e.type),
                    s.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
                    "bullets" === e.type && e.dynamicBullets && (s.addClass(`${e.modifierClass}${e.type}-dynamic`), (n = 0), e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
                    "progressbar" === e.type && e.progressbarOpposite && s.addClass(e.progressbarOppositeClass),
                    e.clickable &&
                        s.on("click", N(e.bulletClass), function (e) {
                            e.preventDefault();
                            let s = d(this).index() * t.params.slidesPerGroup;
                            t.params.loop && (s += t.loopedSlides), t.slideTo(s);
                        }),
                    Object.assign(t.pagination, { $el: s, el: s[0] }),
                    t.enabled || s.addClass(e.lockClass));
            }
            function h() {
                let e = t.params.pagination;
                if (o()) return;
                let s = t.pagination.$el;
                s.removeClass(e.hiddenClass),
                    s.removeClass(e.modifierClass + e.type),
                    s.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
                    t.pagination.bullets && t.pagination.bullets.removeClass && t.pagination.bullets.removeClass(e.bulletActiveClass),
                    e.clickable && s.off("click", N(e.bulletClass));
            }
            a("init", () => {
                !1 === t.params.pagination.enabled ? f() : (m(), u(), c());
            }),
                a("activeIndexChange", () => {
                    (t.params.loop || void 0 === t.snapIndex) && c();
                }),
                a("snapIndexChange", () => {
                    t.params.loop || c();
                }),
                a("slidesLengthChange", () => {
                    t.params.loop && (u(), c());
                }),
                a("snapGridLengthChange", () => {
                    t.params.loop || (u(), c());
                }),
                a("destroy", () => {
                    h();
                }),
                a("enable disable", () => {
                    let { $el: e } = t.pagination;
                    e && e[t.enabled ? "removeClass" : "addClass"](t.params.pagination.lockClass);
                }),
                a("lock unlock", () => {
                    c();
                }),
                a("click", (e, s) => {
                    let a = s.target,
                        { $el: r } = t.pagination;
                    if (t.params.pagination.el && t.params.pagination.hideOnClick && r && r.length > 0 && !d(a).hasClass(t.params.pagination.bulletClass)) {
                        if (t.navigation && ((t.navigation.nextEl && a === t.navigation.nextEl) || (t.navigation.prevEl && a === t.navigation.prevEl))) return;
                        let l = r.hasClass(t.params.pagination.hiddenClass);
                        i(!0 === l ? "paginationShow" : "paginationHide"), r.toggleClass(t.params.pagination.hiddenClass);
                    }
                });
            let f = () => {
                t.$el.addClass(t.params.pagination.paginationDisabledClass), t.pagination.$el && t.pagination.$el.addClass(t.params.pagination.paginationDisabledClass), h();
            };
            Object.assign(t.pagination, {
                enable() {
                    t.$el.removeClass(t.params.pagination.paginationDisabledClass), t.pagination.$el && t.pagination.$el.removeClass(t.params.pagination.paginationDisabledClass), m(), u(), c();
                },
                disable: f,
                render: u,
                update: c,
                init: m,
                destroy: h,
            });
        },
        function (e) {
            let { swiper: t, extendParams: s, on: i, emit: r } = e,
                l = a(),
                n,
                o,
                p,
                u,
                m = !1,
                h = null,
                f = null;
            function g() {
                if (!t.params.scrollbar.el || !t.scrollbar.el) return;
                let { scrollbar: e, rtlTranslate: s, progress: a } = t,
                    { $dragEl: i, $el: r } = e,
                    l = t.params.scrollbar,
                    n = o,
                    d = (p - o) * a;
                s ? ((d = -d) > 0 ? ((n = o - d), (d = 0)) : -d + o > p && (n = p + d)) : d < 0 ? ((n = o + d), (d = 0)) : d + o > p && (n = p - d),
                    t.isHorizontal() ? (i.transform(`translate3d(${d}px, 0, 0)`), (i[0].style.width = `${n}px`)) : (i.transform(`translate3d(0px, ${d}px, 0)`), (i[0].style.height = `${n}px`)),
                    l.hide &&
                        (clearTimeout(h),
                        (r[0].style.opacity = 1),
                        (h = setTimeout(() => {
                            (r[0].style.opacity = 0), r.transition(400);
                        }, 1e3)));
            }
            function $() {
                if (!t.params.scrollbar.el || !t.scrollbar.el) return;
                let { scrollbar: e } = t,
                    { $dragEl: s, $el: a } = e;
                (s[0].style.width = ""),
                    (s[0].style.height = ""),
                    (p = t.isHorizontal() ? a[0].offsetWidth : a[0].offsetHeight),
                    (u = t.size / (t.virtualSize + t.params.slidesOffsetBefore - (t.params.centeredSlides ? t.snapGrid[0] : 0))),
                    (o = "auto" === t.params.scrollbar.dragSize ? p * u : parseInt(t.params.scrollbar.dragSize, 10)),
                    t.isHorizontal() ? (s[0].style.width = `${o}px`) : (s[0].style.height = `${o}px`),
                    (a[0].style.display = u >= 1 ? "none" : ""),
                    t.params.scrollbar.hide && (a[0].style.opacity = 0),
                    t.params.watchOverflow && t.enabled && e.$el[t.isLocked ? "addClass" : "removeClass"](t.params.scrollbar.lockClass);
            }
            function v(e) {
                return t.isHorizontal() ? ("touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX) : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY;
            }
            function w(e) {
                let { scrollbar: s, rtlTranslate: a } = t,
                    { $el: i } = s,
                    r;
                (r = Math.max(Math.min((r = (v(e) - i.offset()[t.isHorizontal() ? "left" : "top"] - (null !== n ? n : o / 2)) / (p - o)), 1), 0)), a && (r = 1 - r);
                let l = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * r;
                t.updateProgress(l), t.setTranslate(l), t.updateActiveIndex(), t.updateSlidesClasses();
            }
            function b(e) {
                let s = t.params.scrollbar,
                    { scrollbar: a, $wrapperEl: i } = t,
                    { $el: l, $dragEl: o } = a;
                (m = !0),
                    (n = e.target === o[0] || e.target === o ? v(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null),
                    e.preventDefault(),
                    e.stopPropagation(),
                    i.transition(100),
                    o.transition(100),
                    w(e),
                    clearTimeout(f),
                    l.transition(0),
                    s.hide && l.css("opacity", 1),
                    t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"),
                    r("scrollbarDragStart", e);
            }
            function _(e) {
                let { scrollbar: s, $wrapperEl: a } = t,
                    { $el: i, $dragEl: l } = s;
                m && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1), w(e), a.transition(0), i.transition(0), l.transition(0), r("scrollbarDragMove", e));
            }
            function x(e) {
                let s = t.params.scrollbar,
                    { scrollbar: a, $wrapperEl: i } = t,
                    { $el: l } = a;
                m &&
                    ((m = !1),
                    t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""), i.transition("")),
                    s.hide &&
                        (clearTimeout(f),
                        (f = c(() => {
                            l.css("opacity", 0), l.transition(400);
                        }, 1e3))),
                    r("scrollbarDragEnd", e),
                    s.snapOnRelease && t.slideToClosest());
            }
            function y(e) {
                let { scrollbar: s, touchEventsTouch: a, touchEventsDesktop: i, params: r, support: n } = t,
                    o = s.$el;
                if (!o) return;
                let d = o[0],
                    p = !(!n.passiveListener || !r.passiveListeners) && { passive: !1, capture: !1 },
                    c = !(!n.passiveListener || !r.passiveListeners) && { passive: !0, capture: !1 };
                if (!d) return;
                let u = "on" === e ? "addEventListener" : "removeEventListener";
                n.touch ? (d[u](a.start, b, p), d[u](a.move, _, p), d[u](a.end, x, c)) : (d[u](i.start, b, p), l[u](i.move, _, p), l[u](i.end, x, c));
            }
            function E() {
                let { scrollbar: e, $el: s } = t;
                t.params.scrollbar = B(t, t.originalParams.scrollbar, t.params.scrollbar, { el: "swiper-scrollbar" });
                let a = t.params.scrollbar;
                if (!a.el) return;
                let i = d(a.el);
                t.params.uniqueNavElements && "string" == typeof a.el && i.length > 1 && 1 === s.find(a.el).length && (i = s.find(a.el)), i.addClass(t.isHorizontal() ? a.horizontalClass : a.verticalClass);
                let r = i.find(`.${t.params.scrollbar.dragClass}`);
                0 === r.length && ((r = d(`<div class="${t.params.scrollbar.dragClass}"></div>`)), i.append(r)),
                    Object.assign(e, { $el: i, el: i[0], $dragEl: r, dragEl: r[0] }),
                    a.draggable && t.params.scrollbar.el && t.scrollbar.el && y("on"),
                    i && i[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass);
            }
            function C() {
                let e = t.params.scrollbar,
                    s = t.scrollbar.$el;
                s && s.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), t.params.scrollbar.el && t.scrollbar.el && y("off");
            }
            s({
                scrollbar: {
                    el: null,
                    dragSize: "auto",
                    hide: !1,
                    draggable: !1,
                    snapOnRelease: !0,
                    lockClass: "swiper-scrollbar-lock",
                    dragClass: "swiper-scrollbar-drag",
                    scrollbarDisabledClass: "swiper-scrollbar-disabled",
                    horizontalClass: "swiper-scrollbar-horizontal",
                    verticalClass: "swiper-scrollbar-vertical",
                },
            }),
                (t.scrollbar = { el: null, dragEl: null, $el: null, $dragEl: null }),
                i("init", () => {
                    !1 === t.params.scrollbar.enabled ? T() : (E(), $(), g());
                }),
                i("update resize observerUpdate lock unlock", () => {
                    $();
                }),
                i("setTranslate", () => {
                    g();
                }),
                i("setTransition", (e, s) => {
                    var a;
                    (a = s), t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(a);
                }),
                i("enable disable", () => {
                    let { $el: e } = t.scrollbar;
                    e && e[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass);
                }),
                i("destroy", () => {
                    C();
                });
            let T = () => {
                t.$el.addClass(t.params.scrollbar.scrollbarDisabledClass), t.scrollbar.$el && t.scrollbar.$el.addClass(t.params.scrollbar.scrollbarDisabledClass), C();
            };
            Object.assign(t.scrollbar, {
                enable() {
                    t.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass), t.scrollbar.$el && t.scrollbar.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass), E(), $(), g();
                },
                disable: T,
                updateSize: $,
                setTranslate: g,
                init: E,
                destroy: C,
            });
        },
        function (e) {
            let { swiper: t, extendParams: s, on: a } = e;
            s({ parallax: { enabled: !1 } });
            let i = (e, s) => {
                    let { rtl: a } = t,
                        i = d(e),
                        r = a ? -1 : 1,
                        l = i.attr("data-swiper-parallax") || "0",
                        n = i.attr("data-swiper-parallax-x"),
                        o = i.attr("data-swiper-parallax-y"),
                        p = i.attr("data-swiper-parallax-scale"),
                        c = i.attr("data-swiper-parallax-opacity");
                    n || o ? ((n = n || "0"), (o = o || "0")) : t.isHorizontal() ? ((n = l), (o = "0")) : ((o = l), (n = "0")),
                        (n = n.indexOf("%") >= 0 ? parseInt(n, 10) * s * r + "%" : n * s * r + "px"),
                        (o = o.indexOf("%") >= 0 ? parseInt(o, 10) * s + "%" : o * s + "px"),
                        null != c && (i[0].style.opacity = c - (c - 1) * (1 - Math.abs(s))),
                        null == p ? i.transform(`translate3d(${n}, ${o}, 0px)`) : i.transform(`translate3d(${n}, ${o}, 0px) scale(${p - (p - 1) * (1 - Math.abs(s))})`);
                },
                r = () => {
                    let { $el: e, slides: s, progress: a, snapGrid: r } = t;
                    e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e) => {
                        i(e, a);
                    }),
                        s.each((e, s) => {
                            let l = e.progress;
                            t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (l += Math.ceil(s / 2) - a * (r.length - 1)),
                                (l = Math.min(Math.max(l, -1), 1)),
                                d(e)
                                    .find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]")
                                    .each((e) => {
                                        i(e, l);
                                    });
                        });
                };
            a("beforeInit", () => {
                t.params.parallax.enabled && ((t.params.watchSlidesProgress = !0), (t.originalParams.watchSlidesProgress = !0));
            }),
                a("init", () => {
                    t.params.parallax.enabled && r();
                }),
                a("setTranslate", () => {
                    t.params.parallax.enabled && r();
                }),
                a("setTransition", (e, s) => {
                    t.params.parallax.enabled &&
                        (function (e) {
                            void 0 === e && (e = t.params.speed);
                            let { $el: s } = t;
                            s.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((t) => {
                                let s = d(t),
                                    a = parseInt(s.attr("data-swiper-parallax-duration"), 10) || e;
                                0 === e && (a = 0), s.transition(a);
                            });
                        })(s);
                });
        },
        function (e) {
            let { swiper: t, extendParams: s, on: a, emit: i } = e,
                l = r();
            s({ zoom: { enabled: !1, maxRatio: 3, minRatio: 1, toggle: !0, containerClass: "swiper-zoom-container", zoomedSlideClass: "swiper-slide-zoomed" } }), (t.zoom = { enabled: !1 });
            let n,
                o,
                p,
                c = 1,
                u = !1,
                h = { $slideEl: void 0, slideWidth: void 0, slideHeight: void 0, $imageEl: void 0, $imageWrapEl: void 0, maxRatio: 3 },
                f = {
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
                    touchesStart: {},
                    touchesCurrent: {},
                },
                g = { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 },
                $ = 1;
            function v(e) {
                if (e.targetTouches.length < 2) return 1;
                let t = e.targetTouches[0].pageX,
                    s = e.targetTouches[0].pageY,
                    a = e.targetTouches[1].pageX,
                    i = e.targetTouches[1].pageY;
                return Math.sqrt((a - t) ** 2 + (i - s) ** 2);
            }
            function w(e) {
                let s = t.support,
                    a = t.params.zoom;
                if (((o = !1), (p = !1), !s.gestures)) {
                    if ("touchstart" !== e.type || ("touchstart" === e.type && e.targetTouches.length < 2)) return;
                    (o = !0), (h.scaleStart = v(e));
                }
                (h.$slideEl && h.$slideEl.length) ||
                ((h.$slideEl = d(e.target).closest(`.${t.params.slideClass}`)),
                0 === h.$slideEl.length && (h.$slideEl = t.slides.eq(t.activeIndex)),
                (h.$imageEl = h.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0)),
                (h.$imageWrapEl = h.$imageEl.parent(`.${a.containerClass}`)),
                (h.maxRatio = h.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio),
                0 !== h.$imageWrapEl.length)
                    ? (h.$imageEl && h.$imageEl.transition(0), (u = !0))
                    : (h.$imageEl = void 0);
            }
            function b(e) {
                let s = t.support,
                    a = t.params.zoom,
                    i = t.zoom;
                if (!s.gestures) {
                    if ("touchmove" !== e.type || ("touchmove" === e.type && e.targetTouches.length < 2)) return;
                    (p = !0), (h.scaleMove = v(e));
                }
                h.$imageEl && 0 !== h.$imageEl.length
                    ? (s.gestures ? (i.scale = e.scale * c) : (i.scale = (h.scaleMove / h.scaleStart) * c),
                      i.scale > h.maxRatio && (i.scale = h.maxRatio - 1 + (i.scale - h.maxRatio + 1) ** 0.5),
                      i.scale < a.minRatio && (i.scale = a.minRatio + 1 - (a.minRatio - i.scale + 1) ** 0.5),
                      h.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`))
                    : "gesturechange" === e.type && w(e);
            }
            function _(e) {
                let s = t.device,
                    a = t.support,
                    i = t.params.zoom,
                    r = t.zoom;
                if (!a.gestures) {
                    if (!o || !p || "touchend" !== e.type || ("touchend" === e.type && e.changedTouches.length < 2 && !s.android)) return;
                    (o = !1), (p = !1);
                }
                h.$imageEl &&
                    0 !== h.$imageEl.length &&
                    ((r.scale = Math.max(Math.min(r.scale, h.maxRatio), i.minRatio)), h.$imageEl.transition(t.params.speed).transform(`translate3d(0,0,0) scale(${r.scale})`), (c = r.scale), (u = !1), 1 === r.scale && (h.$slideEl = void 0));
            }
            function x(e) {
                let s = t.zoom;
                if (!h.$imageEl || 0 === h.$imageEl.length || ((t.allowClick = !1), !f.isTouched || !h.$slideEl)) return;
                f.isMoved ||
                    ((f.width = h.$imageEl[0].offsetWidth),
                    (f.height = h.$imageEl[0].offsetHeight),
                    (f.startX = m(h.$imageWrapEl[0], "x") || 0),
                    (f.startY = m(h.$imageWrapEl[0], "y") || 0),
                    (h.slideWidth = h.$slideEl[0].offsetWidth),
                    (h.slideHeight = h.$slideEl[0].offsetHeight),
                    h.$imageWrapEl.transition(0));
                let a = f.width * s.scale,
                    i = f.height * s.scale;
                if (!(a < h.slideWidth && i < h.slideHeight)) {
                    if (
                        ((f.minX = Math.min(h.slideWidth / 2 - a / 2, 0)),
                        (f.maxX = -f.minX),
                        (f.minY = Math.min(h.slideHeight / 2 - i / 2, 0)),
                        (f.maxY = -f.minY),
                        (f.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX),
                        (f.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY),
                        !f.isMoved &&
                            !u &&
                            ((t.isHorizontal() && ((Math.floor(f.minX) === Math.floor(f.startX) && f.touchesCurrent.x < f.touchesStart.x) || (Math.floor(f.maxX) === Math.floor(f.startX) && f.touchesCurrent.x > f.touchesStart.x))) ||
                                (!t.isHorizontal() && ((Math.floor(f.minY) === Math.floor(f.startY) && f.touchesCurrent.y < f.touchesStart.y) || (Math.floor(f.maxY) === Math.floor(f.startY) && f.touchesCurrent.y > f.touchesStart.y)))))
                    )
                        return void (f.isTouched = !1);
                    e.cancelable && e.preventDefault(),
                        e.stopPropagation(),
                        (f.isMoved = !0),
                        (f.currentX = f.touchesCurrent.x - f.touchesStart.x + f.startX),
                        (f.currentY = f.touchesCurrent.y - f.touchesStart.y + f.startY),
                        f.currentX < f.minX && (f.currentX = f.minX + 1 - (f.minX - f.currentX + 1) ** 0.8),
                        f.currentX > f.maxX && (f.currentX = f.maxX - 1 + (f.currentX - f.maxX + 1) ** 0.8),
                        f.currentY < f.minY && (f.currentY = f.minY + 1 - (f.minY - f.currentY + 1) ** 0.8),
                        f.currentY > f.maxY && (f.currentY = f.maxY - 1 + (f.currentY - f.maxY + 1) ** 0.8),
                        g.prevPositionX || (g.prevPositionX = f.touchesCurrent.x),
                        g.prevPositionY || (g.prevPositionY = f.touchesCurrent.y),
                        g.prevTime || (g.prevTime = Date.now()),
                        (g.x = (f.touchesCurrent.x - g.prevPositionX) / (Date.now() - g.prevTime) / 2),
                        (g.y = (f.touchesCurrent.y - g.prevPositionY) / (Date.now() - g.prevTime) / 2),
                        2 > Math.abs(f.touchesCurrent.x - g.prevPositionX) && (g.x = 0),
                        2 > Math.abs(f.touchesCurrent.y - g.prevPositionY) && (g.y = 0),
                        (g.prevPositionX = f.touchesCurrent.x),
                        (g.prevPositionY = f.touchesCurrent.y),
                        (g.prevTime = Date.now()),
                        h.$imageWrapEl.transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`);
                }
            }
            function y() {
                let e = t.zoom;
                h.$slideEl &&
                    t.previousIndex !== t.activeIndex &&
                    (h.$imageEl && h.$imageEl.transform("translate3d(0,0,0) scale(1)"),
                    h.$imageWrapEl && h.$imageWrapEl.transform("translate3d(0,0,0)"),
                    (e.scale = 1),
                    (c = 1),
                    (h.$slideEl = void 0),
                    (h.$imageEl = void 0),
                    (h.$imageWrapEl = void 0));
            }
            function E(e) {
                let s = t.zoom,
                    a = t.params.zoom;
                if (
                    (h.$slideEl ||
                        (e && e.target && (h.$slideEl = d(e.target).closest(`.${t.params.slideClass}`)),
                        h.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? (h.$slideEl = t.$wrapperEl.children(`.${t.params.slideActiveClass}`)) : (h.$slideEl = t.slides.eq(t.activeIndex))),
                        (h.$imageEl = h.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0)),
                        (h.$imageWrapEl = h.$imageEl.parent(`.${a.containerClass}`))),
                    !h.$imageEl || 0 === h.$imageEl.length || !h.$imageWrapEl || 0 === h.$imageWrapEl.length)
                )
                    return;
                let i, r, n, o, p, u, m, g, $, v, w, b, _, x, y, E, C, T;
                t.params.cssMode && ((t.wrapperEl.style.overflow = "hidden"), (t.wrapperEl.style.touchAction = "none")),
                    h.$slideEl.addClass(`${a.zoomedSlideClass}`),
                    void 0 === f.touchesStart.x && e
                        ? ((i = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX), (r = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY))
                        : ((i = f.touchesStart.x), (r = f.touchesStart.y)),
                    (s.scale = h.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio),
                    (c = h.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio),
                    e
                        ? ((C = h.$slideEl[0].offsetWidth),
                          (T = h.$slideEl[0].offsetHeight),
                          (n = h.$slideEl.offset().left + l.scrollX),
                          (o = h.$slideEl.offset().top + l.scrollY),
                          (p = n + C / 2 - i),
                          (u = o + T / 2 - r),
                          ($ = h.$imageEl[0].offsetWidth),
                          (v = h.$imageEl[0].offsetHeight),
                          (w = $ * s.scale),
                          (b = v * s.scale),
                          (_ = Math.min(C / 2 - w / 2, 0)),
                          (x = Math.min(T / 2 - b / 2, 0)),
                          (y = -_),
                          (E = -x),
                          (m = p * s.scale),
                          (g = u * s.scale),
                          m < _ && (m = _),
                          m > y && (m = y),
                          g < x && (g = x),
                          g > E && (g = E))
                        : ((m = 0), (g = 0)),
                    h.$imageWrapEl.transition(300).transform(`translate3d(${m}px, ${g}px,0)`),
                    h.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${s.scale})`);
            }
            function C() {
                let e = t.zoom,
                    s = t.params.zoom;
                h.$slideEl ||
                    (t.params.virtual && t.params.virtual.enabled && t.virtual ? (h.$slideEl = t.$wrapperEl.children(`.${t.params.slideActiveClass}`)) : (h.$slideEl = t.slides.eq(t.activeIndex)),
                    (h.$imageEl = h.$slideEl.find(`.${s.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0)),
                    (h.$imageWrapEl = h.$imageEl.parent(`.${s.containerClass}`))),
                    h.$imageEl &&
                        0 !== h.$imageEl.length &&
                        h.$imageWrapEl &&
                        0 !== h.$imageWrapEl.length &&
                        (t.params.cssMode && ((t.wrapperEl.style.overflow = ""), (t.wrapperEl.style.touchAction = "")),
                        (e.scale = 1),
                        (c = 1),
                        h.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
                        h.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
                        h.$slideEl.removeClass(`${s.zoomedSlideClass}`),
                        (h.$slideEl = void 0));
            }
            function T(e) {
                let s = t.zoom;
                s.scale && 1 !== s.scale ? C() : E(e);
            }
            function S() {
                let e = t.support;
                return {
                    passiveListener: !("touchstart" !== t.touchEvents.start || !e.passiveListener || !t.params.passiveListeners) && { passive: !0, capture: !1 },
                    activeListenerWithCapture: !e.passiveListener || { passive: !1, capture: !0 },
                };
            }
            function P() {
                return `.${t.params.slideClass}`;
            }
            function k(e) {
                let { passiveListener: s } = S(),
                    a = P();
                t.$wrapperEl[e]("gesturestart", a, w, s), t.$wrapperEl[e]("gesturechange", a, b, s), t.$wrapperEl[e]("gestureend", a, _, s);
            }
            function M() {
                n || ((n = !0), k("on"));
            }
            function z() {
                n && ((n = !1), k("off"));
            }
            function L() {
                let e = t.zoom;
                if (e.enabled) return;
                e.enabled = !0;
                let s = t.support,
                    { passiveListener: a, activeListenerWithCapture: i } = S(),
                    r = P();
                s.gestures
                    ? (t.$wrapperEl.on(t.touchEvents.start, M, a), t.$wrapperEl.on(t.touchEvents.end, z, a))
                    : "touchstart" === t.touchEvents.start &&
                      (t.$wrapperEl.on(t.touchEvents.start, r, w, a), t.$wrapperEl.on(t.touchEvents.move, r, b, i), t.$wrapperEl.on(t.touchEvents.end, r, _, a), t.touchEvents.cancel && t.$wrapperEl.on(t.touchEvents.cancel, r, _, a)),
                    t.$wrapperEl.on(t.touchEvents.move, `.${t.params.zoom.containerClass}`, x, i);
            }
            function I() {
                let e = t.zoom;
                if (!e.enabled) return;
                let s = t.support;
                e.enabled = !1;
                let { passiveListener: a, activeListenerWithCapture: i } = S(),
                    r = P();
                s.gestures
                    ? (t.$wrapperEl.off(t.touchEvents.start, M, a), t.$wrapperEl.off(t.touchEvents.end, z, a))
                    : "touchstart" === t.touchEvents.start &&
                      (t.$wrapperEl.off(t.touchEvents.start, r, w, a), t.$wrapperEl.off(t.touchEvents.move, r, b, i), t.$wrapperEl.off(t.touchEvents.end, r, _, a), t.touchEvents.cancel && t.$wrapperEl.off(t.touchEvents.cancel, r, _, a)),
                    t.$wrapperEl.off(t.touchEvents.move, `.${t.params.zoom.containerClass}`, x, i);
            }
            Object.defineProperty(t.zoom, "scale", {
                get: () => $,
                set(e) {
                    if ($ !== e) {
                        let t = h.$imageEl ? h.$imageEl[0] : void 0,
                            s = h.$slideEl ? h.$slideEl[0] : void 0;
                        i("zoomChange", e, t, s);
                    }
                    $ = e;
                },
            }),
                a("init", () => {
                    t.params.zoom.enabled && L();
                }),
                a("destroy", () => {
                    I();
                }),
                a("touchStart", (e, s) => {
                    t.zoom.enabled &&
                        (function (e) {
                            let s = t.device;
                            h.$imageEl &&
                                0 !== h.$imageEl.length &&
                                (f.isTouched ||
                                    (s.android && e.cancelable && e.preventDefault(),
                                    (f.isTouched = !0),
                                    (f.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX),
                                    (f.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY)));
                        })(s);
                }),
                a("touchEnd", (e, s) => {
                    t.zoom.enabled &&
                        (function () {
                            let e = t.zoom;
                            if (!h.$imageEl || 0 === h.$imageEl.length) return;
                            if (!f.isTouched || !f.isMoved) return (f.isTouched = !1), void (f.isMoved = !1);
                            (f.isTouched = !1), (f.isMoved = !1);
                            let s = 300,
                                a = 300,
                                i = g.x * s,
                                r = f.currentX + i,
                                l = g.y * a,
                                n = f.currentY + l;
                            0 !== g.x && (s = Math.abs((r - f.currentX) / g.x)), 0 !== g.y && (a = Math.abs((n - f.currentY) / g.y));
                            let o = Math.max(s, a);
                            (f.currentX = r), (f.currentY = n);
                            let d = f.width * e.scale,
                                p = f.height * e.scale;
                            (f.minX = Math.min(h.slideWidth / 2 - d / 2, 0)),
                                (f.maxX = -f.minX),
                                (f.minY = Math.min(h.slideHeight / 2 - p / 2, 0)),
                                (f.maxY = -f.minY),
                                (f.currentX = Math.max(Math.min(f.currentX, f.maxX), f.minX)),
                                (f.currentY = Math.max(Math.min(f.currentY, f.maxY), f.minY)),
                                h.$imageWrapEl.transition(o).transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`);
                        })();
                }),
                a("doubleTap", (e, s) => {
                    !t.animating && t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && T(s);
                }),
                a("transitionEnd", () => {
                    t.zoom.enabled && t.params.zoom.enabled && y();
                }),
                a("slideChange", () => {
                    t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && y();
                }),
                Object.assign(t.zoom, { enable: L, disable: I, in: E, out: C, toggle: T });
        },
        function (e) {
            let { swiper: t, extendParams: s, on: a, emit: i } = e;
            s({
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
                    preloaderClass: "swiper-lazy-preloader",
                },
            }),
                (t.lazy = {});
            let l = !1,
                n = !1;
            function o(e, s) {
                void 0 === s && (s = !0);
                let a = t.params.lazy;
                if (void 0 === e || 0 === t.slides.length) return;
                let r = t.virtual && t.params.virtual.enabled ? t.$wrapperEl.children(`.${t.params.slideClass}[data-swiper-slide-index="${e}"]`) : t.slides.eq(e),
                    l = r.find(`.${a.elementClass}:not(.${a.loadedClass}):not(.${a.loadingClass})`);
                !r.hasClass(a.elementClass) || r.hasClass(a.loadedClass) || r.hasClass(a.loadingClass) || l.push(r[0]),
                    0 !== l.length &&
                        l.each((e) => {
                            let l = d(e);
                            l.addClass(a.loadingClass);
                            let n = l.attr("data-background"),
                                p = l.attr("data-src"),
                                c = l.attr("data-srcset"),
                                u = l.attr("data-sizes"),
                                m = l.parent("picture");
                            t.loadImage(l[0], p || n, c, u, !1, () => {
                                if (null != t && t && (!t || t.params) && !t.destroyed) {
                                    if (
                                        (n
                                            ? (l.css("background-image", `url("${n}")`), l.removeAttr("data-background"))
                                            : (c && (l.attr("srcset", c), l.removeAttr("data-srcset")),
                                              u && (l.attr("sizes", u), l.removeAttr("data-sizes")),
                                              m.length &&
                                                  m.children("source").each((e) => {
                                                      let t = d(e);
                                                      t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"));
                                                  }),
                                              p && (l.attr("src", p), l.removeAttr("data-src"))),
                                        l.addClass(a.loadedClass).removeClass(a.loadingClass),
                                        r.find(`.${a.preloaderClass}`).remove(),
                                        t.params.loop && s)
                                    ) {
                                        let e = r.attr("data-swiper-slide-index");
                                        r.hasClass(t.params.slideDuplicateClass)
                                            ? o(t.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`).index(), !1)
                                            : o(t.$wrapperEl.children(`.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`).index(), !1);
                                    }
                                    i("lazyImageReady", r[0], l[0]), t.params.autoHeight && t.updateAutoHeight();
                                }
                            }),
                                i("lazyImageLoad", r[0], l[0]);
                        });
            }
            function p() {
                let { $wrapperEl: e, params: s, slides: a, activeIndex: i } = t,
                    r = t.virtual && s.virtual.enabled,
                    l = s.lazy,
                    p = s.slidesPerView;
                function c(t) {
                    if (r) {
                        if (e.children(`.${s.slideClass}[data-swiper-slide-index="${t}"]`).length) return !0;
                    } else if (a[t]) return !0;
                    return !1;
                }
                function u(e) {
                    return r ? d(e).attr("data-swiper-slide-index") : d(e).index();
                }
                if (("auto" === p && (p = 0), n || (n = !0), t.params.watchSlidesProgress))
                    e.children(`.${s.slideVisibleClass}`).each((e) => {
                        o(r ? d(e).attr("data-swiper-slide-index") : d(e).index());
                    });
                else if (p > 1) for (let m = i; m < i + p; m += 1) c(m) && o(m);
                else o(i);
                if (l.loadPrevNext) {
                    if (p > 1 || (l.loadPrevNextAmount && l.loadPrevNextAmount > 1)) {
                        let h = l.loadPrevNextAmount,
                            f = Math.ceil(p),
                            g = Math.min(i + f + Math.max(h, f), a.length),
                            $ = Math.max(i - Math.max(f, h), 0);
                        for (let v = i + f; v < g; v += 1) c(v) && o(v);
                        for (let w = $; w < i; w += 1) c(w) && o(w);
                    } else {
                        let b = e.children(`.${s.slideNextClass}`);
                        b.length > 0 && o(u(b));
                        let _ = e.children(`.${s.slidePrevClass}`);
                        _.length > 0 && o(u(_));
                    }
                }
            }
            function c() {
                let e = r();
                if (!t || t.destroyed) return;
                let s = t.params.lazy.scrollingElement ? d(t.params.lazy.scrollingElement) : d(e),
                    a = s[0] === e,
                    i = a ? e.innerWidth : s[0].offsetWidth,
                    n = a ? e.innerHeight : s[0].offsetHeight,
                    o = t.$el.offset(),
                    { rtlTranslate: u } = t,
                    m = !1;
                u && (o.left -= t.$el[0].scrollLeft);
                let h = [
                    [o.left, o.top],
                    [o.left + t.width, o.top],
                    [o.left, o.top + t.height],
                    [o.left + t.width, o.top + t.height],
                ];
                for (let f = 0; f < h.length; f += 1) {
                    let g = h[f];
                    if (g[0] >= 0 && g[0] <= i && g[1] >= 0 && g[1] <= n) {
                        if (0 === g[0] && 0 === g[1]) continue;
                        m = !0;
                    }
                }
                let $ = !("touchstart" !== t.touchEvents.start || !t.support.passiveListener || !t.params.passiveListeners) && { passive: !0, capture: !1 };
                m ? (p(), s.off("scroll", c, $)) : l || ((l = !0), s.on("scroll", c, $));
            }
            a("beforeInit", () => {
                t.params.lazy.enabled && t.params.preloadImages && (t.params.preloadImages = !1);
            }),
                a("init", () => {
                    t.params.lazy.enabled && (t.params.lazy.checkInView ? c() : p());
                }),
                a("scroll", () => {
                    t.params.freeMode && t.params.freeMode.enabled && !t.params.freeMode.sticky && p();
                }),
                a("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
                    t.params.lazy.enabled && (t.params.lazy.checkInView ? c() : p());
                }),
                a("transitionStart", () => {
                    t.params.lazy.enabled && (t.params.lazy.loadOnTransitionStart || (!t.params.lazy.loadOnTransitionStart && !n)) && (t.params.lazy.checkInView ? c() : p());
                }),
                a("transitionEnd", () => {
                    t.params.lazy.enabled && !t.params.lazy.loadOnTransitionStart && (t.params.lazy.checkInView ? c() : p());
                }),
                a("slideChange", () => {
                    let { lazy: e, cssMode: s, watchSlidesProgress: a, touchReleaseOnEdges: i, resistanceRatio: r } = t.params;
                    e.enabled && (s || (a && (i || 0 === r))) && p();
                }),
                a("destroy", () => {
                    t.$el && t.$el.find(`.${t.params.lazy.loadingClass}`).removeClass(t.params.lazy.loadingClass);
                }),
                Object.assign(t.lazy, { load: p, loadInSlide: o });
        },
        function (e) {
            let { swiper: t, extendParams: s, on: a } = e;
            function i(e, t) {
                let s,
                    a,
                    i,
                    r = (e, t) => {
                        for (a = -1, s = e.length; s - a > 1; ) e[(i = (s + a) >> 1)] <= t ? (a = i) : (s = i);
                        return s;
                    },
                    l,
                    n;
                return (
                    (this.x = e),
                    (this.y = t),
                    (this.lastIndex = e.length - 1),
                    (this.interpolate = function (e) {
                        return e ? ((l = (n = r(this.x, e)) - 1), ((e - this.x[l]) * (this.y[n] - this.y[l])) / (this.x[n] - this.x[l]) + this.y[l]) : 0;
                    }),
                    this
                );
            }
            function r() {
                t.controller.control && t.controller.spline && ((t.controller.spline = void 0), delete t.controller.spline);
            }
            s({ controller: { control: void 0, inverse: !1, by: "slide" } }),
                (t.controller = { control: void 0 }),
                a("beforeInit", () => {
                    t.controller.control = t.params.controller.control;
                }),
                a("update", () => {
                    r();
                }),
                a("resize", () => {
                    r();
                }),
                a("observerUpdate", () => {
                    r();
                }),
                a("setTranslate", (e, s, a) => {
                    t.controller.control && t.controller.setTranslate(s, a);
                }),
                a("setTransition", (e, s, a) => {
                    t.controller.control && t.controller.setTransition(s, a);
                }),
                Object.assign(t.controller, {
                    setTranslate: function (e, s) {
                        let a = t.controller.control,
                            r,
                            l,
                            n = t.constructor;
                        function o(e) {
                            var s;
                            let a = t.rtlTranslate ? -t.translate : t.translate;
                            "slide" === t.params.controller.by &&
                                ((s = e), t.controller.spline || (t.controller.spline = t.params.loop ? new i(t.slidesGrid, s.slidesGrid) : new i(t.snapGrid, s.snapGrid)), (l = -t.controller.spline.interpolate(-a))),
                                (l && "container" !== t.params.controller.by) || ((r = (e.maxTranslate() - e.minTranslate()) / (t.maxTranslate() - t.minTranslate())), (l = (a - t.minTranslate()) * r + e.minTranslate())),
                                t.params.controller.inverse && (l = e.maxTranslate() - l),
                                e.updateProgress(l),
                                e.setTranslate(l, t),
                                e.updateActiveIndex(),
                                e.updateSlidesClasses();
                        }
                        if (Array.isArray(a)) for (let d = 0; d < a.length; d += 1) a[d] !== s && a[d] instanceof n && o(a[d]);
                        else a instanceof n && s !== a && o(a);
                    },
                    setTransition: function (e, s) {
                        let a = t.constructor,
                            i = t.controller.control,
                            r;
                        function l(s) {
                            s.setTransition(e, t),
                                0 !== e &&
                                    (s.transitionStart(),
                                    s.params.autoHeight &&
                                        c(() => {
                                            s.updateAutoHeight();
                                        }),
                                    s.$wrapperEl.transitionEnd(() => {
                                        i && (s.params.loop && "slide" === t.params.controller.by && s.loopFix(), s.transitionEnd());
                                    }));
                        }
                        if (Array.isArray(i)) for (r = 0; r < i.length; r += 1) i[r] !== s && i[r] instanceof a && l(i[r]);
                        else i instanceof a && s !== i && l(i);
                    },
                });
        },
        function (e) {
            let { swiper: t, extendParams: s, on: a } = e;
            s({
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
                    slideRole: "group",
                    id: null,
                },
            }),
                (t.a11y = { clicked: !1 });
            let i = null;
            function r(e) {
                let t = i;
                0 !== t.length && (t.html(""), t.html(e));
            }
            function l(e) {
                e.attr("tabIndex", "0");
            }
            function n(e) {
                e.attr("tabIndex", "-1");
            }
            function o(e, t) {
                e.attr("role", t);
            }
            function p(e, t) {
                e.attr("aria-roledescription", t);
            }
            function c(e, t) {
                e.attr("aria-label", t);
            }
            function u(e) {
                e.attr("aria-disabled", !0);
            }
            function m(e) {
                e.attr("aria-disabled", !1);
            }
            function h(e) {
                if (13 !== e.keyCode && 32 !== e.keyCode) return;
                let s = t.params.a11y,
                    a = d(e.target);
                t.navigation && t.navigation.$nextEl && a.is(t.navigation.$nextEl) && ((t.isEnd && !t.params.loop) || t.slideNext(), t.isEnd ? r(s.lastSlideMessage) : r(s.nextSlideMessage)),
                    t.navigation && t.navigation.$prevEl && a.is(t.navigation.$prevEl) && ((t.isBeginning && !t.params.loop) || t.slidePrev(), t.isBeginning ? r(s.firstSlideMessage) : r(s.prevSlideMessage)),
                    t.pagination && a.is(N(t.params.pagination.bulletClass)) && a[0].click();
            }
            function f() {
                return t.pagination && t.pagination.bullets && t.pagination.bullets.length;
            }
            function g() {
                return f() && t.params.pagination.clickable;
            }
            let $ = (e, t, s) => {
                    l(e),
                        "BUTTON" !== e[0].tagName && (o(e, "button"), e.on("keydown", h)),
                        c(e, s),
                        (function (e, t) {
                            e.attr("aria-controls", t);
                        })(e, t);
                },
                v = () => {
                    t.a11y.clicked = !0;
                },
                w = () => {
                    t.a11y.clicked = !1;
                },
                b = (e) => {
                    if (t.a11y.clicked) return;
                    let s = e.target.closest(`.${t.params.slideClass}`);
                    if (!s || !t.slides.includes(s)) return;
                    let a = t.slides.indexOf(s) === t.activeIndex,
                        i = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(s);
                    a || i || (t.isHorizontal() ? (t.el.scrollLeft = 0) : (t.el.scrollTop = 0), t.slideTo(t.slides.indexOf(s), 0));
                },
                _ = () => {
                    let e = t.params.a11y;
                    e.itemRoleDescriptionMessage && p(d(t.slides), e.itemRoleDescriptionMessage), e.slideRole && o(d(t.slides), e.slideRole);
                    let s = t.params.loop ? t.slides.filter((e) => !e.classList.contains(t.params.slideDuplicateClass)).length : t.slides.length;
                    e.slideLabelMessage &&
                        t.slides.each((a, i) => {
                            let r = d(a),
                                l = t.params.loop ? parseInt(r.attr("data-swiper-slide-index"), 10) : i;
                            c(r, e.slideLabelMessage.replace(/\{\{index\}\}/, l + 1).replace(/\{\{slidesLength\}\}/, s));
                        });
                },
                x = () => {
                    var e, s;
                    let a = t.params.a11y;
                    t.$el.append(i);
                    let r = t.$el;
                    a.containerRoleDescriptionMessage && p(r, a.containerRoleDescriptionMessage), a.containerMessage && c(r, a.containerMessage);
                    let l = t.$wrapperEl,
                        n = a.id || l.attr("id") || `swiper-wrapper-${((e = 16), "x".repeat(e).replace(/x/g, () => Math.round(16 * Math.random()).toString(16)))}`,
                        o = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite",
                        d,
                        u;
                    (s = n),
                        l.attr("id", s),
                        (function (e, t) {
                            e.attr("aria-live", t);
                        })(l, o),
                        _(),
                        t.navigation && t.navigation.$nextEl && (d = t.navigation.$nextEl),
                        t.navigation && t.navigation.$prevEl && (u = t.navigation.$prevEl),
                        d && d.length && $(d, n, a.nextSlideMessage),
                        u && u.length && $(u, n, a.prevSlideMessage),
                        g() && t.pagination.$el.on("keydown", N(t.params.pagination.bulletClass), h),
                        t.$el.on("focus", b, !0),
                        t.$el.on("pointerdown", v, !0),
                        t.$el.on("pointerup", w, !0);
                };
            a("beforeInit", () => {
                i = d(`<span class="${t.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`);
            }),
                a("afterInit", () => {
                    t.params.a11y.enabled && x();
                }),
                a("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
                    t.params.a11y.enabled && _();
                }),
                a("fromEdge toEdge afterInit lock unlock", () => {
                    t.params.a11y.enabled &&
                        (function () {
                            if (t.params.loop || t.params.rewind || !t.navigation) return;
                            let { $nextEl: e, $prevEl: s } = t.navigation;
                            s && s.length > 0 && (t.isBeginning ? (u(s), n(s)) : (m(s), l(s))), e && e.length > 0 && (t.isEnd ? (u(e), n(e)) : (m(e), l(e)));
                        })();
                }),
                a("paginationUpdate", () => {
                    t.params.a11y.enabled &&
                        (function () {
                            let e = t.params.a11y;
                            f() &&
                                t.pagination.bullets.each((s) => {
                                    let a = d(s);
                                    t.params.pagination.clickable && (l(a), t.params.pagination.renderBullet || (o(a, "button"), c(a, e.paginationBulletMessage.replace(/\{\{index\}\}/, a.index() + 1)))),
                                        a.is(`.${t.params.pagination.bulletActiveClass}`) ? a.attr("aria-current", "true") : a.removeAttr("aria-current");
                                });
                        })();
                }),
                a("destroy", () => {
                    let e, s;
                    t.params.a11y.enabled &&
                        (i && i.length > 0 && i.remove(),
                        t.navigation && t.navigation.$nextEl && (e = t.navigation.$nextEl),
                        t.navigation && t.navigation.$prevEl && (s = t.navigation.$prevEl),
                        e && e.off("keydown", h),
                        s && s.off("keydown", h),
                        g() && t.pagination.$el.off("keydown", N(t.params.pagination.bulletClass), h),
                        t.$el.off("focus", b, !0),
                        t.$el.off("pointerdown", v, !0),
                        t.$el.off("pointerup", w, !0));
                });
        },
        function (e) {
            let { swiper: t, extendParams: s, on: a } = e;
            s({ history: { enabled: !1, root: "", replaceState: !1, key: "slides", keepQuery: !1 } });
            let i = !1,
                l = {},
                n = (e) =>
                    e
                        .toString()
                        .replace(/\s+/g, "-")
                        .replace(/[^\w-]+/g, "")
                        .replace(/--+/g, "-")
                        .replace(/^-+/, "")
                        .replace(/-+$/, ""),
                o = (e) => {
                    let t = r(),
                        s;
                    s = e ? new URL(e) : t.location;
                    let a = s.pathname
                            .slice(1)
                            .split("/")
                            .filter((e) => "" !== e),
                        i = a.length;
                    return { key: a[i - 2], value: a[i - 1] };
                },
                d = (e, s) => {
                    let a = r();
                    if (!i || !t.params.history.enabled) return;
                    let l;
                    l = t.params.url ? new URL(t.params.url) : a.location;
                    let o = t.slides.eq(s),
                        d = n(o.attr("data-history"));
                    if (t.params.history.root.length > 0) {
                        let p = t.params.history.root;
                        "/" === p[p.length - 1] && (p = p.slice(0, p.length - 1)), (d = `${p}/${e}/${d}`);
                    } else l.pathname.includes(e) || (d = `${e}/${d}`);
                    t.params.history.keepQuery && (d += l.search);
                    let c = a.history.state;
                    (c && c.value === d) || (t.params.history.replaceState ? a.history.replaceState({ value: d }, null, d) : a.history.pushState({ value: d }, null, d));
                },
                p = (e, s, a) => {
                    if (s)
                        for (let i = 0, r = t.slides.length; i < r; i += 1) {
                            let l = t.slides.eq(i);
                            if (n(l.attr("data-history")) === s && !l.hasClass(t.params.slideDuplicateClass)) {
                                let o = l.index();
                                t.slideTo(o, e, a);
                            }
                        }
                    else t.slideTo(0, e, a);
                },
                c = () => {
                    (l = o(t.params.url)), p(t.params.speed, l.value, !1);
                };
            a("init", () => {
                t.params.history.enabled &&
                    (() => {
                        let e = r();
                        if (t.params.history) {
                            if (!e.history || !e.history.pushState) return (t.params.history.enabled = !1), void (t.params.hashNavigation.enabled = !0);
                            (i = !0), ((l = o(t.params.url)).key || l.value) && (p(0, l.value, t.params.runCallbacksOnInit), t.params.history.replaceState || e.addEventListener("popstate", c));
                        }
                    })();
            }),
                a("destroy", () => {
                    t.params.history.enabled &&
                        (() => {
                            let e = r();
                            t.params.history.replaceState || e.removeEventListener("popstate", c);
                        })();
                }),
                a("transitionEnd _freeModeNoMomentumRelease", () => {
                    i && d(t.params.history.key, t.activeIndex);
                }),
                a("slideChange", () => {
                    i && t.params.cssMode && d(t.params.history.key, t.activeIndex);
                });
        },
        function (e) {
            let { swiper: t, extendParams: s, emit: i, on: l } = e,
                n = !1,
                o = a(),
                p = r();
            s({ hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } });
            let c = () => {
                    i("hashChange");
                    let e = o.location.hash.replace("#", "");
                    if (e !== t.slides.eq(t.activeIndex).attr("data-hash")) {
                        let s = t.$wrapperEl.children(`.${t.params.slideClass}[data-hash="${e}"]`).index();
                        if (void 0 === s) return;
                        t.slideTo(s);
                    }
                },
                u = () => {
                    if (n && t.params.hashNavigation.enabled) {
                        if (t.params.hashNavigation.replaceState && p.history && p.history.replaceState) p.history.replaceState(null, null, `#${t.slides.eq(t.activeIndex).attr("data-hash")}` || ""), i("hashSet");
                        else {
                            let e = t.slides.eq(t.activeIndex),
                                s = e.attr("data-hash") || e.attr("data-history");
                            (o.location.hash = s || ""), i("hashSet");
                        }
                    }
                };
            l("init", () => {
                t.params.hashNavigation.enabled &&
                    (() => {
                        if (!t.params.hashNavigation.enabled || (t.params.history && t.params.history.enabled)) return;
                        n = !0;
                        let e = o.location.hash.replace("#", "");
                        if (e)
                            for (let s = 0, a = t.slides.length; s < a; s += 1) {
                                let i = t.slides.eq(s);
                                if ((i.attr("data-hash") || i.attr("data-history")) === e && !i.hasClass(t.params.slideDuplicateClass)) {
                                    let r = i.index();
                                    t.slideTo(r, 0, t.params.runCallbacksOnInit, !0);
                                }
                            }
                        t.params.hashNavigation.watchState && d(p).on("hashchange", c);
                    })();
            }),
                l("destroy", () => {
                    t.params.hashNavigation.enabled && t.params.hashNavigation.watchState && d(p).off("hashchange", c);
                }),
                l("transitionEnd _freeModeNoMomentumRelease", () => {
                    n && u();
                }),
                l("slideChange", () => {
                    n && t.params.cssMode && u();
                });
        },
        function (e) {
            let t,
                { swiper: s, extendParams: i, on: r, emit: l } = e;
            function n() {
                if (!s.size) return (s.autoplay.running = !1), void (s.autoplay.paused = !1);
                let e = s.slides.eq(s.activeIndex),
                    a = s.params.autoplay.delay;
                e.attr("data-swiper-autoplay") && (a = e.attr("data-swiper-autoplay") || s.params.autoplay.delay),
                    clearTimeout(t),
                    (t = c(() => {
                        let e;
                        s.params.autoplay.reverseDirection
                            ? s.params.loop
                                ? (s.loopFix(), (e = s.slidePrev(s.params.speed, !0, !0)), l("autoplay"))
                                : s.isBeginning
                                ? s.params.autoplay.stopOnLastSlide
                                    ? d()
                                    : ((e = s.slideTo(s.slides.length - 1, s.params.speed, !0, !0)), l("autoplay"))
                                : ((e = s.slidePrev(s.params.speed, !0, !0)), l("autoplay"))
                            : s.params.loop
                            ? (s.loopFix(), (e = s.slideNext(s.params.speed, !0, !0)), l("autoplay"))
                            : s.isEnd
                            ? s.params.autoplay.stopOnLastSlide
                                ? d()
                                : ((e = s.slideTo(0, s.params.speed, !0, !0)), l("autoplay"))
                            : ((e = s.slideNext(s.params.speed, !0, !0)), l("autoplay")),
                            ((s.params.cssMode && s.autoplay.running) || !1 === e) && n();
                    }, a));
            }
            function o() {
                return void 0 === t && !s.autoplay.running && ((s.autoplay.running = !0), l("autoplayStart"), n(), !0);
            }
            function d() {
                return !!s.autoplay.running && void 0 !== t && (t && (clearTimeout(t), (t = void 0)), (s.autoplay.running = !1), l("autoplayStop"), !0);
            }
            function p(e) {
                s.autoplay.running &&
                    (s.autoplay.paused ||
                        (t && clearTimeout(t),
                        (s.autoplay.paused = !0),
                        0 !== e && s.params.autoplay.waitForTransition
                            ? ["transitionend", "webkitTransitionEnd"].forEach((e) => {
                                  s.$wrapperEl[0].addEventListener(e, m);
                              })
                            : ((s.autoplay.paused = !1), n())));
            }
            function u() {
                let e = a();
                "hidden" === e.visibilityState && s.autoplay.running && p(), "visible" === e.visibilityState && s.autoplay.paused && (n(), (s.autoplay.paused = !1));
            }
            function m(e) {
                s &&
                    !s.destroyed &&
                    s.$wrapperEl &&
                    e.target === s.$wrapperEl[0] &&
                    (["transitionend", "webkitTransitionEnd"].forEach((e) => {
                        s.$wrapperEl[0].removeEventListener(e, m);
                    }),
                    (s.autoplay.paused = !1),
                    s.autoplay.running ? n() : d());
            }
            function h() {
                s.params.autoplay.disableOnInteraction ? d() : (l("autoplayPause"), p()),
                    ["transitionend", "webkitTransitionEnd"].forEach((e) => {
                        s.$wrapperEl[0].removeEventListener(e, m);
                    });
            }
            function f() {
                s.params.autoplay.disableOnInteraction || ((s.autoplay.paused = !1), l("autoplayResume"), n());
            }
            (s.autoplay = { running: !1, paused: !1 }),
                i({ autoplay: { enabled: !1, delay: 3e3, waitForTransition: !0, disableOnInteraction: !0, stopOnLastSlide: !1, reverseDirection: !1, pauseOnMouseEnter: !1 } }),
                r("init", () => {
                    s.params.autoplay.enabled && (o(), a().addEventListener("visibilitychange", u), s.params.autoplay.pauseOnMouseEnter && (s.$el.on("mouseenter", h), s.$el.on("mouseleave", f)));
                }),
                r("beforeTransitionStart", (e, t, a) => {
                    s.autoplay.running && (a || !s.params.autoplay.disableOnInteraction ? s.autoplay.pause(t) : d());
                }),
                r("sliderFirstMove", () => {
                    s.autoplay.running && (s.params.autoplay.disableOnInteraction ? d() : p());
                }),
                r("touchEnd", () => {
                    s.params.cssMode && s.autoplay.paused && !s.params.autoplay.disableOnInteraction && n();
                }),
                r("destroy", () => {
                    s.$el.off("mouseenter", h), s.$el.off("mouseleave", f), s.autoplay.running && d(), a().removeEventListener("visibilitychange", u);
                }),
                Object.assign(s.autoplay, { pause: p, run: n, start: o, stop: d });
        },
        function (e) {
            let { swiper: t, extendParams: s, on: a } = e;
            s({ thumbs: { swiper: null, multipleActiveThumbs: !0, autoScrollOffset: 0, slideThumbActiveClass: "swiper-slide-thumb-active", thumbsContainerClass: "swiper-thumbs" } });
            let i = !1,
                r = !1;
            function l() {
                let e = t.thumbs.swiper;
                if (!e || e.destroyed) return;
                let s = e.clickedIndex,
                    a = e.clickedSlide;
                if ((a && d(a).hasClass(t.params.thumbs.slideThumbActiveClass)) || null == s) return;
                let i;
                if (((i = e.params.loop ? parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10) : s), t.params.loop)) {
                    let r = t.activeIndex;
                    t.slides.eq(r).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), (t._clientLeft = t.$wrapperEl[0].clientLeft), (r = t.activeIndex));
                    let l = t.slides.eq(r).prevAll(`[data-swiper-slide-index="${i}"]`).eq(0).index(),
                        n = t.slides.eq(r).nextAll(`[data-swiper-slide-index="${i}"]`).eq(0).index();
                    i = void 0 === l ? n : void 0 === n ? l : n - r < r - l ? n : l;
                }
                t.slideTo(i);
            }
            function n() {
                let { thumbs: e } = t.params;
                if (i) return !1;
                i = !0;
                let s = t.constructor;
                if (e.swiper instanceof s)
                    (t.thumbs.swiper = e.swiper),
                        Object.assign(t.thumbs.swiper.originalParams, { watchSlidesProgress: !0, slideToClickedSlide: !1 }),
                        Object.assign(t.thumbs.swiper.params, { watchSlidesProgress: !0, slideToClickedSlide: !1 });
                else if (h(e.swiper)) {
                    let a = Object.assign({}, e.swiper);
                    Object.assign(a, { watchSlidesProgress: !0, slideToClickedSlide: !1 }), (t.thumbs.swiper = new s(a)), (r = !0);
                }
                return t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on("tap", l), !0;
            }
            function o(e) {
                let s = t.thumbs.swiper;
                if (!s || s.destroyed) return;
                let a = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView,
                    i = 1,
                    r = t.params.thumbs.slideThumbActiveClass;
                if (
                    (t.params.slidesPerView > 1 && !t.params.centeredSlides && (i = t.params.slidesPerView),
                    t.params.thumbs.multipleActiveThumbs || (i = 1),
                    (i = Math.floor(i)),
                    s.slides.removeClass(r),
                    s.params.loop || (s.params.virtual && s.params.virtual.enabled))
                )
                    for (let l = 0; l < i; l += 1) s.$wrapperEl.children(`[data-swiper-slide-index="${t.realIndex + l}"]`).addClass(r);
                else for (let n = 0; n < i; n += 1) s.slides.eq(t.realIndex + n).addClass(r);
                let o = t.params.thumbs.autoScrollOffset,
                    d = o && !s.params.loop;
                if (t.realIndex !== s.realIndex || d) {
                    let p,
                        c,
                        u = s.activeIndex;
                    if (s.params.loop) {
                        s.slides.eq(u).hasClass(s.params.slideDuplicateClass) && (s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft), (u = s.activeIndex));
                        let m = s.slides.eq(u).prevAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index(),
                            h = s.slides.eq(u).nextAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index();
                        (p = void 0 === m ? h : void 0 === h ? m : h - u == u - m ? (s.params.slidesPerGroup > 1 ? h : u) : h - u < u - m ? h : m), (c = t.activeIndex > t.previousIndex ? "next" : "prev");
                    } else c = (p = t.realIndex) > t.previousIndex ? "next" : "prev";
                    d && (p += "next" === c ? o : -1 * o),
                        s.visibleSlidesIndexes &&
                            0 > s.visibleSlidesIndexes.indexOf(p) &&
                            (s.params.centeredSlides ? (p = p > u ? p - Math.floor(a / 2) + 1 : p + Math.floor(a / 2) - 1) : p > u && s.params.slidesPerGroup, s.slideTo(p, e ? 0 : void 0));
                }
            }
            (t.thumbs = { swiper: null }),
                a("beforeInit", () => {
                    let { thumbs: e } = t.params;
                    e && e.swiper && (n(), o(!0));
                }),
                a("slideChange update resize observerUpdate", () => {
                    o();
                }),
                a("setTransition", (e, s) => {
                    let a = t.thumbs.swiper;
                    a && !a.destroyed && a.setTransition(s);
                }),
                a("beforeDestroy", () => {
                    let e = t.thumbs.swiper;
                    e && !e.destroyed && r && e.destroy();
                }),
                Object.assign(t.thumbs, { init: n, update: o });
        },
        function (e) {
            let { swiper: t, extendParams: s, emit: a, once: i } = e;
            s({ freeMode: { enabled: !1, momentum: !0, momentumRatio: 1, momentumBounce: !0, momentumBounceRatio: 1, momentumVelocityRatio: 1, sticky: !1, minimumVelocity: 0.02 } }),
                Object.assign(t, {
                    freeMode: {
                        onTouchStart: function () {
                            let e = t.getTranslate();
                            t.setTranslate(e), t.setTransition(0), (t.touchEventsData.velocities.length = 0), t.freeMode.onTouchEnd({ currentPos: t.rtl ? t.translate : -t.translate });
                        },
                        onTouchMove: function () {
                            let { touchEventsData: e, touches: s } = t;
                            0 === e.velocities.length && e.velocities.push({ position: s[t.isHorizontal() ? "startX" : "startY"], time: e.touchStartTime }),
                                e.velocities.push({ position: s[t.isHorizontal() ? "currentX" : "currentY"], time: u() });
                        },
                        onTouchEnd: function (e) {
                            let { currentPos: s } = e,
                                { params: r, $wrapperEl: l, rtlTranslate: n, snapGrid: o, touchEventsData: d } = t,
                                p = u() - d.touchStartTime;
                            if (s < -t.minTranslate()) t.slideTo(t.activeIndex);
                            else if (s > -t.maxTranslate()) t.slides.length < o.length ? t.slideTo(o.length - 1) : t.slideTo(t.slides.length - 1);
                            else {
                                if (r.freeMode.momentum) {
                                    if (d.velocities.length > 1) {
                                        let c = d.velocities.pop(),
                                            m = d.velocities.pop(),
                                            h = c.position - m.position,
                                            f = c.time - m.time;
                                        (t.velocity = h / f), (t.velocity /= 2), Math.abs(t.velocity) < r.freeMode.minimumVelocity && (t.velocity = 0), (f > 150 || u() - c.time > 300) && (t.velocity = 0);
                                    } else t.velocity = 0;
                                    (t.velocity *= r.freeMode.momentumVelocityRatio), (d.velocities.length = 0);
                                    let g = 1e3 * r.freeMode.momentumRatio,
                                        $ = t.velocity * g,
                                        v = t.translate + $;
                                    n && (v = -v);
                                    let w,
                                        b = !1,
                                        _ = 20 * Math.abs(t.velocity) * r.freeMode.momentumBounceRatio,
                                        x;
                                    if (v < t.maxTranslate())
                                        r.freeMode.momentumBounce ? (v + t.maxTranslate() < -_ && (v = t.maxTranslate() - _), (w = t.maxTranslate()), (b = !0), (d.allowMomentumBounce = !0)) : (v = t.maxTranslate()),
                                            r.loop && r.centeredSlides && (x = !0);
                                    else if (v > t.minTranslate())
                                        r.freeMode.momentumBounce ? (v - t.minTranslate() > _ && (v = t.minTranslate() + _), (w = t.minTranslate()), (b = !0), (d.allowMomentumBounce = !0)) : (v = t.minTranslate()),
                                            r.loop && r.centeredSlides && (x = !0);
                                    else if (r.freeMode.sticky) {
                                        let y;
                                        for (let E = 0; E < o.length; E += 1)
                                            if (o[E] > -v) {
                                                y = E;
                                                break;
                                            }
                                        v = -(v = Math.abs(o[y] - v) < Math.abs(o[y - 1] - v) || "next" === t.swipeDirection ? o[y] : o[y - 1]);
                                    }
                                    if (
                                        (x &&
                                            i("transitionEnd", () => {
                                                t.loopFix();
                                            }),
                                        0 !== t.velocity)
                                    ) {
                                        if (((g = n ? Math.abs((-v - t.translate) / t.velocity) : Math.abs((v - t.translate) / t.velocity)), r.freeMode.sticky)) {
                                            let C = Math.abs((n ? -v : v) - t.translate),
                                                T = t.slidesSizesGrid[t.activeIndex];
                                            g = C < T ? r.speed : C < 2 * T ? 1.5 * r.speed : 2.5 * r.speed;
                                        }
                                    } else if (r.freeMode.sticky) return void t.slideToClosest();
                                    r.freeMode.momentumBounce && b
                                        ? (t.updateProgress(w),
                                          t.setTransition(g),
                                          t.setTranslate(v),
                                          t.transitionStart(!0, t.swipeDirection),
                                          (t.animating = !0),
                                          l.transitionEnd(() => {
                                              t &&
                                                  !t.destroyed &&
                                                  d.allowMomentumBounce &&
                                                  (a("momentumBounce"),
                                                  t.setTransition(r.speed),
                                                  setTimeout(() => {
                                                      t.setTranslate(w),
                                                          l.transitionEnd(() => {
                                                              t && !t.destroyed && t.transitionEnd();
                                                          });
                                                  }, 0));
                                          }))
                                        : t.velocity
                                        ? (a("_freeModeNoMomentumRelease"),
                                          t.updateProgress(v),
                                          t.setTransition(g),
                                          t.setTranslate(v),
                                          t.transitionStart(!0, t.swipeDirection),
                                          t.animating ||
                                              ((t.animating = !0),
                                              l.transitionEnd(() => {
                                                  t && !t.destroyed && t.transitionEnd();
                                              })))
                                        : t.updateProgress(v),
                                        t.updateActiveIndex(),
                                        t.updateSlidesClasses();
                                } else {
                                    if (r.freeMode.sticky) return void t.slideToClosest();
                                    r.freeMode && a("_freeModeNoMomentumRelease");
                                }
                                (!r.freeMode.momentum || p >= r.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
                            }
                        },
                    },
                });
        },
        function (e) {
            let t,
                s,
                a,
                { swiper: i, extendParams: r } = e;
            r({ grid: { rows: 1, fill: "column" } }),
                (i.grid = {
                    initSlides(e) {
                        let { slidesPerView: r } = i.params,
                            { rows: l, fill: n } = i.params.grid;
                        (s = t / l), (a = Math.floor(e / l)), (t = Math.floor(e / l) === e / l ? e : Math.ceil(e / l) * l), "auto" !== r && "row" === n && (t = Math.max(t, r * l));
                    },
                    updateSlide(e, r, l, n) {
                        let { slidesPerGroup: o, spaceBetween: d } = i.params,
                            { rows: p, fill: c } = i.params.grid,
                            u,
                            m,
                            h;
                        if ("row" === c && o > 1) {
                            let f = Math.floor(e / (o * p)),
                                g = e - p * o * f,
                                $ = 0 === f ? o : Math.min(Math.ceil((l - f * p * o) / p), o);
                            (h = Math.floor(g / $)), (u = (m = g - h * $ + f * o) + (h * t) / p), r.css({ "-webkit-order": u, order: u });
                        } else "column" === c ? ((m = Math.floor(e / p)), (h = e - m * p), (m > a || (m === a && h === p - 1)) && (h += 1) >= p && ((h = 0), (m += 1))) : ((h = Math.floor(e / s)), (m = e - h * s));
                        r.css(n("margin-top"), 0 !== h ? d && `${d}px` : "");
                    },
                    updateWrapperSize(e, s, a) {
                        let { spaceBetween: r, centeredSlides: l, roundLengths: n } = i.params,
                            { rows: o } = i.params.grid;
                        if (((i.virtualSize = (e + r) * t), (i.virtualSize = Math.ceil(i.virtualSize / o) - r), i.$wrapperEl.css({ [a("width")]: `${i.virtualSize + r}px` }), l)) {
                            s.splice(0, s.length);
                            let d = [];
                            for (let p = 0; p < s.length; p += 1) {
                                let c = s[p];
                                n && (c = Math.floor(c)), s[p] < i.virtualSize + s[0] && d.push(c);
                            }
                            s.push(...d);
                        }
                    },
                });
        },
        function (e) {
            let { swiper: t } = e;
            Object.assign(t, { appendSlide: H.bind(t), prependSlide: X.bind(t), addSlide: Y.bind(t), removeSlide: R.bind(t), removeAllSlides: W.bind(t) });
        },
        function (e) {
            let { swiper: t, extendParams: s, on: a } = e;
            s({ fadeEffect: { crossFade: !1, transformEl: null } }),
                q({
                    effect: "fade",
                    swiper: t,
                    on: a,
                    setTranslate() {
                        let { slides: e } = t,
                            s = t.params.fadeEffect;
                        for (let a = 0; a < e.length; a += 1) {
                            let i = t.slides.eq(a),
                                r = -i[0].swiperSlideOffset;
                            t.params.virtualTranslate || (r -= t.translate);
                            let l = 0;
                            t.isHorizontal() || ((l = r), (r = 0));
                            let n = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                            V(s, i).css({ opacity: n }).transform(`translate3d(${r}px, ${l}px, 0px)`);
                        }
                    },
                    setTransition(e) {
                        let { transformEl: s } = t.params.fadeEffect;
                        (s ? t.slides.find(s) : t.slides).transition(e), F({ swiper: t, duration: e, transformEl: s, allSlides: !0 });
                    },
                    overwriteParams: () => ({ slidesPerView: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !t.params.cssMode }),
                });
        },
        function (e) {
            let { swiper: t, extendParams: s, on: a } = e;
            s({ cubeEffect: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: 0.94 } });
            let i = (e, t, s) => {
                let a = s ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
                    i = s ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
                0 === a.length && ((a = d(`<div class="swiper-slide-shadow-${s ? "left" : "top"}"></div>`)), e.append(a)),
                    0 === i.length && ((i = d(`<div class="swiper-slide-shadow-${s ? "right" : "bottom"}"></div>`)), e.append(i)),
                    a.length && (a[0].style.opacity = Math.max(-t, 0)),
                    i.length && (i[0].style.opacity = Math.max(t, 0));
            };
            q({
                effect: "cube",
                swiper: t,
                on: a,
                setTranslate() {
                    let { $el: e, $wrapperEl: s, slides: a, width: r, height: l, rtlTranslate: n, size: o, browser: p } = t,
                        c = t.params.cubeEffect,
                        u = t.isHorizontal(),
                        m = t.virtual && t.params.virtual.enabled,
                        h,
                        f = 0;
                    c.shadow &&
                        (u
                            ? (0 === (h = s.find(".swiper-cube-shadow")).length && ((h = d('<div class="swiper-cube-shadow"></div>')), s.append(h)), h.css({ height: `${r}px` }))
                            : 0 === (h = e.find(".swiper-cube-shadow")).length && ((h = d('<div class="swiper-cube-shadow"></div>')), e.append(h)));
                    for (let g = 0; g < a.length; g += 1) {
                        let $ = a.eq(g),
                            v = g;
                        m && (v = parseInt($.attr("data-swiper-slide-index"), 10));
                        let w = 90 * v,
                            b = Math.floor(w / 360);
                        n && (b = Math.floor(-(w = -w) / 360));
                        let _ = Math.max(Math.min($[0].progress, 1), -1),
                            x = 0,
                            y = 0,
                            E = 0;
                        v % 4 == 0 ? ((x = -(4 * b) * o), (E = 0)) : (v - 1) % 4 == 0 ? ((x = 0), (E = -(4 * b) * o)) : (v - 2) % 4 == 0 ? ((x = o + 4 * b * o), (E = o)) : (v - 3) % 4 == 0 && ((x = -o), (E = 3 * o + 4 * o * b)),
                            n && (x = -x),
                            u || ((y = x), (x = 0));
                        let C = `rotateX(${u ? 0 : -w}deg) rotateY(${u ? w : 0}deg) translate3d(${x}px, ${y}px, ${E}px)`;
                        _ <= 1 && _ > -1 && ((f = 90 * v + 90 * _), n && (f = -(90 * v) - 90 * _)), $.transform(C), c.slideShadows && i($, _, u);
                    }
                    if ((s.css({ "-webkit-transform-origin": `50% 50% -${o / 2}px`, "transform-origin": `50% 50% -${o / 2}px` }), c.shadow)) {
                        if (u) h.transform(`translate3d(0px, ${r / 2 + c.shadowOffset}px, ${-r / 2}px) rotateX(90deg) rotateZ(0deg) scale(${c.shadowScale})`);
                        else {
                            let T = Math.abs(f) - 90 * Math.floor(Math.abs(f) / 90),
                                S = c.shadowScale,
                                P = c.shadowScale / (1.5 - (Math.sin((2 * T * Math.PI) / 360) / 2 + Math.cos((2 * T * Math.PI) / 360) / 2)),
                                k = c.shadowOffset;
                            h.transform(`scale3d(${S}, 1, ${P}) translate3d(0px, ${l / 2 + k}px, ${-l / 2 / P}px) rotateX(-90deg)`);
                        }
                    }
                    let M = p.isSafari || p.isWebView ? -o / 2 : 0;
                    s.transform(`translate3d(0px,0,${M}px) rotateX(${t.isHorizontal() ? 0 : f}deg) rotateY(${t.isHorizontal() ? -f : 0}deg)`), s[0].style.setProperty("--swiper-cube-translate-z", `${M}px`);
                },
                setTransition(e) {
                    let { $el: s, slides: a } = t;
                    a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                        t.params.cubeEffect.shadow && !t.isHorizontal() && s.find(".swiper-cube-shadow").transition(e);
                },
                recreateShadows() {
                    let e = t.isHorizontal();
                    t.slides.each((t) => {
                        let s = Math.max(Math.min(t.progress, 1), -1);
                        i(d(t), s, e);
                    });
                },
                getEffectParams: () => t.params.cubeEffect,
                perspective: () => !0,
                overwriteParams: () => ({ slidesPerView: 1, slidesPerGroup: 1, watchSlidesProgress: !0, resistanceRatio: 0, spaceBetween: 0, centeredSlides: !1, virtualTranslate: !0 }),
            });
        },
        function (e) {
            let { swiper: t, extendParams: s, on: a } = e;
            s({ flipEffect: { slideShadows: !0, limitRotation: !0, transformEl: null } });
            let i = (e, s, a) => {
                let i = t.isHorizontal() ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
                    r = t.isHorizontal() ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
                0 === i.length && (i = j(a, e, t.isHorizontal() ? "left" : "top")),
                    0 === r.length && (r = j(a, e, t.isHorizontal() ? "right" : "bottom")),
                    i.length && (i[0].style.opacity = Math.max(-s, 0)),
                    r.length && (r[0].style.opacity = Math.max(s, 0));
            };
            q({
                effect: "flip",
                swiper: t,
                on: a,
                setTranslate() {
                    let { slides: e, rtlTranslate: s } = t,
                        a = t.params.flipEffect;
                    for (let r = 0; r < e.length; r += 1) {
                        let l = e.eq(r),
                            n = l[0].progress;
                        t.params.flipEffect.limitRotation && (n = Math.max(Math.min(l[0].progress, 1), -1));
                        let o = l[0].swiperSlideOffset,
                            d = -180 * n,
                            p = 0,
                            c = t.params.cssMode ? -o - t.translate : -o,
                            u = 0;
                        t.isHorizontal() ? s && (d = -d) : ((u = c), (c = 0), (p = -d), (d = 0)), (l[0].style.zIndex = -Math.abs(Math.round(n)) + e.length), a.slideShadows && i(l, n, a);
                        let m = `translate3d(${c}px, ${u}px, 0px) rotateX(${p}deg) rotateY(${d}deg)`;
                        V(a, l).transform(m);
                    }
                },
                setTransition(e) {
                    let { transformEl: s } = t.params.flipEffect;
                    (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                        F({ swiper: t, duration: e, transformEl: s });
                },
                recreateShadows() {
                    let e = t.params.flipEffect;
                    t.slides.each((s) => {
                        let a = d(s),
                            r = a[0].progress;
                        t.params.flipEffect.limitRotation && (r = Math.max(Math.min(s.progress, 1), -1)), i(a, r, e);
                    });
                },
                getEffectParams: () => t.params.flipEffect,
                perspective: () => !0,
                overwriteParams: () => ({ slidesPerView: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !t.params.cssMode }),
            });
        },
        function (e) {
            let { swiper: t, extendParams: s, on: a } = e;
            s({ coverflowEffect: { rotate: 50, stretch: 0, depth: 100, scale: 1, modifier: 1, slideShadows: !0, transformEl: null } }),
                q({
                    effect: "coverflow",
                    swiper: t,
                    on: a,
                    setTranslate() {
                        let { width: e, height: s, slides: a, slidesSizesGrid: i } = t,
                            r = t.params.coverflowEffect,
                            l = t.isHorizontal(),
                            n = t.translate,
                            o = l ? e / 2 - n : s / 2 - n,
                            d = l ? r.rotate : -r.rotate,
                            p = r.depth;
                        for (let c = 0, u = a.length; c < u; c += 1) {
                            let m = a.eq(c),
                                h = i[c],
                                f = (o - m[0].swiperSlideOffset - h / 2) / h,
                                g = "function" == typeof r.modifier ? r.modifier(f) : f * r.modifier,
                                $ = l ? d * g : 0,
                                v = l ? 0 : d * g,
                                w = -p * Math.abs(g),
                                b = r.stretch;
                            "string" == typeof b && -1 !== b.indexOf("%") && (b = (parseFloat(r.stretch) / 100) * h);
                            let _ = l ? 0 : b * g,
                                x = l ? b * g : 0,
                                y = 1 - (1 - r.scale) * Math.abs(g);
                            0.001 > Math.abs(x) && (x = 0), 0.001 > Math.abs(_) && (_ = 0), 0.001 > Math.abs(w) && (w = 0), 0.001 > Math.abs($) && ($ = 0), 0.001 > Math.abs(v) && (v = 0), 0.001 > Math.abs(y) && (y = 0);
                            let E = `translate3d(${x}px,${_}px,${w}px)  rotateX(${v}deg) rotateY(${$}deg) scale(${y})`;
                            if ((V(r, m).transform(E), (m[0].style.zIndex = 1 - Math.abs(Math.round(g))), r.slideShadows)) {
                                let C = l ? m.find(".swiper-slide-shadow-left") : m.find(".swiper-slide-shadow-top"),
                                    T = l ? m.find(".swiper-slide-shadow-right") : m.find(".swiper-slide-shadow-bottom");
                                0 === C.length && (C = j(r, m, l ? "left" : "top")),
                                    0 === T.length && (T = j(r, m, l ? "right" : "bottom")),
                                    C.length && (C[0].style.opacity = g > 0 ? g : 0),
                                    T.length && (T[0].style.opacity = -g > 0 ? -g : 0);
                            }
                        }
                    },
                    setTransition(e) {
                        let { transformEl: s } = t.params.coverflowEffect;
                        (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
                    },
                    perspective: () => !0,
                    overwriteParams: () => ({ watchSlidesProgress: !0 }),
                });
        },
        function (e) {
            let { swiper: t, extendParams: s, on: a } = e;
            s({
                creativeEffect: {
                    transformEl: null,
                    limitProgress: 1,
                    shadowPerProgress: !1,
                    progressMultiplier: 1,
                    perspective: !0,
                    prev: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 },
                    next: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 },
                },
            });
            let i = (e) => ("string" == typeof e ? e : `${e}px`);
            q({
                effect: "creative",
                swiper: t,
                on: a,
                setTranslate() {
                    let { slides: e, $wrapperEl: s, slidesSizesGrid: a } = t,
                        r = t.params.creativeEffect,
                        { progressMultiplier: l } = r,
                        n = t.params.centeredSlides;
                    if (n) {
                        let o = a[0] / 2 - t.params.slidesOffsetBefore || 0;
                        s.transform(`translateX(calc(50% - ${o}px))`);
                    }
                    for (let d = 0; d < e.length; d += 1) {
                        let p = e.eq(d),
                            c = p[0].progress,
                            u = Math.min(Math.max(p[0].progress, -r.limitProgress), r.limitProgress),
                            m = u;
                        n || (m = Math.min(Math.max(p[0].originalProgress, -r.limitProgress), r.limitProgress));
                        let h = p[0].swiperSlideOffset,
                            f = [t.params.cssMode ? -h - t.translate : -h, 0, 0],
                            g = [0, 0, 0],
                            $ = !1;
                        t.isHorizontal() || ((f[1] = f[0]), (f[0] = 0));
                        let v = { translate: [0, 0, 0], rotate: [0, 0, 0], scale: 1, opacity: 1 };
                        u < 0 ? ((v = r.next), ($ = !0)) : u > 0 && ((v = r.prev), ($ = !0)),
                            f.forEach((e, t) => {
                                f[t] = `calc(${e}px + (${i(v.translate[t])} * ${Math.abs(u * l)}))`;
                            }),
                            g.forEach((e, t) => {
                                g[t] = v.rotate[t] * Math.abs(u * l);
                            }),
                            (p[0].style.zIndex = -Math.abs(Math.round(c)) + e.length);
                        let w = f.join(", "),
                            b = `rotateX(${g[0]}deg) rotateY(${g[1]}deg) rotateZ(${g[2]}deg)`,
                            _ = m < 0 ? `scale(${1 + (1 - v.scale) * m * l})` : `scale(${1 - (1 - v.scale) * m * l})`,
                            x = m < 0 ? 1 + (1 - v.opacity) * m * l : 1 - (1 - v.opacity) * m * l,
                            y = `translate3d(${w}) ${b} ${_}`;
                        if (($ && v.shadow) || !$) {
                            let E = p.children(".swiper-slide-shadow");
                            if ((0 === E.length && v.shadow && (E = j(r, p)), E.length)) {
                                let C = r.shadowPerProgress ? u * (1 / r.limitProgress) : u;
                                E[0].style.opacity = Math.min(Math.max(Math.abs(C), 0), 1);
                            }
                        }
                        let T = V(r, p);
                        T.transform(y).css({ opacity: x }), v.origin && T.css("transform-origin", v.origin);
                    }
                },
                setTransition(e) {
                    let { transformEl: s } = t.params.creativeEffect;
                    (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e), F({ swiper: t, duration: e, transformEl: s, allSlides: !0 });
                },
                perspective: () => t.params.creativeEffect.perspective,
                overwriteParams: () => ({ watchSlidesProgress: !0, virtualTranslate: !t.params.cssMode }),
            });
        },
        function (e) {
            let { swiper: t, extendParams: s, on: a } = e;
            s({ cardsEffect: { slideShadows: !0, transformEl: null, rotate: !0, perSlideRotate: 2, perSlideOffset: 8 } }),
                q({
                    effect: "cards",
                    swiper: t,
                    on: a,
                    setTranslate() {
                        let { slides: e, activeIndex: s } = t,
                            a = t.params.cardsEffect,
                            { startTranslate: i, isTouched: r } = t.touchEventsData,
                            l = t.translate;
                        for (let n = 0; n < e.length; n += 1) {
                            let o = e.eq(n),
                                d = o[0].progress,
                                p = Math.min(Math.max(d, -4), 4),
                                c = o[0].swiperSlideOffset;
                            t.params.centeredSlides && !t.params.cssMode && t.$wrapperEl.transform(`translateX(${t.minTranslate()}px)`), t.params.centeredSlides && t.params.cssMode && (c -= e[0].swiperSlideOffset);
                            let u = t.params.cssMode ? -c - t.translate : -c,
                                m = 0,
                                h = -100 * Math.abs(p),
                                f = 1,
                                g = -a.perSlideRotate * p,
                                $ = a.perSlideOffset - 0.75 * Math.abs(p),
                                v = t.virtual && t.params.virtual.enabled ? t.virtual.from + n : n,
                                w = (v === s || v === s - 1) && p > 0 && p < 1 && (r || t.params.cssMode) && l < i,
                                b = (v === s || v === s + 1) && p < 0 && p > -1 && (r || t.params.cssMode) && l > i;
                            if (w || b) {
                                let _ = (1 - Math.abs((Math.abs(p) - 0.5) / 0.5)) ** 0.5;
                                (g += -28 * p * _), (f += -0.5 * _), ($ += 96 * _), (m = -25 * _ * Math.abs(p) + "%");
                            }
                            if (((u = p < 0 ? `calc(${u}px + (${$ * Math.abs(p)}%))` : p > 0 ? `calc(${u}px + (-${$ * Math.abs(p)}%))` : `${u}px`), !t.isHorizontal())) {
                                let x = m;
                                (m = u), (u = x);
                            }
                            let y = p < 0 ? "" + (1 + (1 - f) * p) : "" + (1 - (1 - f) * p),
                                E = `
        translate3d(${u}, ${m}, ${h}px)
        rotateZ(${a.rotate ? g : 0}deg)
        scale(${y})
      `;
                            if (a.slideShadows) {
                                let C = o.find(".swiper-slide-shadow");
                                0 === C.length && (C = j(a, o)), C.length && (C[0].style.opacity = Math.min(Math.max((Math.abs(p) - 0.5) / 0.5, 0), 1));
                            }
                            (o[0].style.zIndex = -Math.abs(Math.round(d)) + e.length), V(a, o).transform(E);
                        }
                    },
                    setTransition(e) {
                        let { transformEl: s } = t.params.cardsEffect;
                        (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e), F({ swiper: t, duration: e, transformEl: s });
                    },
                    perspective: () => !0,
                    overwriteParams: () => ({ watchSlidesProgress: !0, virtualTranslate: !t.params.cssMode }),
                });
        },
    ];
    return G.use(U), G;
});
