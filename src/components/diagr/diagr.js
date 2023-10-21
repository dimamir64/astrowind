import * as d3 from 'd3';

var app = (function () {
  'use strict';

  function t() {}

  function e(t) {
    return t();
  }

  function n() {
    return Object.create(null);
  }

  function r(t) {
    t.forEach(e);
  }

  function l(t) {
    return 'function' == typeof t;
  }

  function o(t, e) {
    return t != t ? e == e : t !== e || (t && 'object' == typeof t) || 'function' == typeof t;
  }

  function s(e, n, r) {
    e.$$.on_destroy.push(
      (function (e, ...n) {
        if (null == e) return t;
        const r = e.subscribe(...n);
        return r.unsubscribe ? () => r.unsubscribe() : r;
      })(n, r)
    );
  }

  function a(t, e) {
    t.appendChild(e);
  }

  function i(t, e, n) {
    t.insertBefore(e, n || null);
  }

  function c(t) {
    t.parentNode.removeChild(t);
  }

  function u(t, e) {
    for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
  }

  function d(t) {
    return document.createElement(t);
  }

  function f(t) {
    return document.createElementNS('http://www.w3.org/2000/svg', t);
  }

  function h(t) {
    return document.createTextNode(t);
  }

  function m() {
    return h(' ');
  }

  function g() {
    return h('');
  }

  function p(t, e, n, r) {
    return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
  }

  function v(t, e, n) {
    null == n ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
  }

  function $(t) {
    return '' === t ? null : +t;
  }

  function b(t, e) {
    (e = '' + e), t.wholeText !== e && (t.data = e);
  }

  function y(t, e) {
    t.value = null == e ? '' : e;
  }

  function x(t, e, n, r) {
    t.style.setProperty(e, n, r ? 'important' : '');
  }

  let w;

  function k(t) {
    w = t;
  }

  const _ = [],
    M = [],
    z = [],
    B = [],
    C = Promise.resolve();
  let j = !1;

  function E(t) {
    z.push(t);
  }

  let L = !1;
  const A = new Set();

  function T() {
    if (!L) {
      L = !0;
      do {
        for (let t = 0; t < _.length; t += 1) {
          const e = _[t];
          k(e), S(e.$$);
        }
        for (k(null), _.length = 0; M.length; ) M.pop()();
        for (let t = 0; t < z.length; t += 1) {
          const e = z[t];
          A.has(e) || (A.add(e), e());
        }
        z.length = 0;
      } while (_.length);
      for (; B.length; ) B.pop()();
      (j = !1), (L = !1), A.clear();
    }
  }

  function S(t) {
    if (null !== t.fragment) {
      t.update(), r(t.before_update);
      const e = t.dirty;
      (t.dirty = [-1]), t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(E);
    }
  }

  const H = new Set();

  function N(t, e) {
    t && t.i && (H.delete(t), t.i(e));
  }

  function O(t, e, n, r) {
    if (t && t.o) {
      if (H.has(t)) return;
      H.add(t),
        undefined.c.push(() => {
          H.delete(t), r && (n && t.d(1), r());
        }),
        t.o(e);
    }
  }

  function I(t, e) {
    t.d(1), e.delete(t.key);
  }

  function R(t, e, n, r, l, o, s, a, i, c, u, d) {
    let f = t.length,
      h = o.length,
      m = f;
    const g = {};
    for (; m--; ) g[t[m].key] = m;
    const p = [],
      v = new Map(),
      $ = new Map();
    for (m = h; m--; ) {
      const t = d(l, o, m),
        a = n(t);
      let i = s.get(a);
      i ? r && i.p(t, e) : ((i = c(a, t)), i.c()), v.set(a, (p[m] = i)), a in g && $.set(a, Math.abs(m - g[a]));
    }
    const b = new Set(),
      y = new Set();

    function x(t) {
      N(t, 1), t.m(a, u), s.set(t.key, t), (u = t.first), h--;
    }

    for (; f && h; ) {
      const e = p[h - 1],
        n = t[f - 1],
        r = e.key,
        l = n.key;
      e === n
        ? ((u = e.first), f--, h--)
        : v.has(l)
        ? !s.has(r) || b.has(r)
          ? x(e)
          : y.has(l)
          ? f--
          : $.get(r) > $.get(l)
          ? (y.add(r), x(e))
          : (b.add(l), f--)
        : (i(n, s), f--);
    }
    for (; f--; ) {
      const e = t[f];
      v.has(e.key) || i(e, s);
    }
    for (; h; ) x(p[h - 1]);
    return p;
  }

  function q(t) {
    t && t.c();
  }

  function P(t, n, o, s) {
    const { fragment: a, on_mount: i, on_destroy: c, after_update: u } = t.$$;
    a && a.m(n, o),
      s ||
        E(() => {
          const n = i.map(e).filter(l);
          c ? c.push(...n) : r(n), (t.$$.on_mount = []);
        }),
      u.forEach(E);
  }

  function D(t, e) {
    const n = t.$$;
    null !== n.fragment &&
      (r(n.on_destroy), n.fragment && n.fragment.d(e), (n.on_destroy = n.fragment = null), (n.ctx = []));
  }

  function G(t, e) {
    -1 === t.$$.dirty[0] && (_.push(t), j || ((j = !0), C.then(T)), t.$$.dirty.fill(0)),
      (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
  }

  function K(e, l, o, s, a, i, u = [-1]) {
    const d = w;
    k(e);
    const f = (e.$$ = {
      fragment: null,
      ctx: null,
      props: i,
      update: t,
      not_equal: a,
      bound: n(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(d ? d.$$.context : l.context || []),
      callbacks: n(),
      dirty: u,
      skip_bound: !1,
    });
    let h = !1;
    if (
      ((f.ctx = o
        ? o(e, l.props || {}, (t, n, ...r) => {
            const l = r.length ? r[0] : n;
            return (
              f.ctx && a(f.ctx[t], (f.ctx[t] = l)) && (!f.skip_bound && f.bound[t] && f.bound[t](l), h && G(e, t)), n
            );
          })
        : []),
      f.update(),
      (h = !0),
      r(f.before_update),
      (f.fragment = !!s && s(f.ctx)),
      l.target)
    ) {
      if (l.hydrate) {
        const t = (function (t) {
          return Array.from(t.childNodes);
        })(l.target);
        f.fragment && f.fragment.l(t), t.forEach(c);
      } else f.fragment && f.fragment.c();
      l.intro && N(e.$$.fragment), P(e, l.target, l.anchor, l.customElement), T();
    }
    k(d);
  }

  class V {
    $destroy() {
      D(this, 1), (this.$destroy = t);
    }

    $on(t, e) {
      const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
      return (
        n.push(e),
        () => {
          const t = n.indexOf(e);
          -1 !== t && n.splice(t, 1);
        }
      );
    }

    $set(t) {
      var e;
      this.$$set &&
        ((e = t), 0 !== Object.keys(e).length) &&
        ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
    }
  }

  function F(e) {
    let n, r, l, o, s, u, d, h, m, g, p, $, b, y, w, k, _, M, z, B, C, j, E, L, A;
    return {
      c() {
        (n = f('svg')),
          (r = f('symbol')),
          (l = f('g')),
          (o = f('path')),
          (s = f('symbol')),
          (u = f('g')),
          (d = f('g')),
          (h = f('path')),
          (m = f('circle')),
          (g = f('path')),
          (p = f('symbol')),
          ($ = f('g')),
          (b = f('path')),
          (y = f('path')),
          (w = f('path')),
          (k = f('symbol')),
          (_ = f('g')),
          (M = f('g')),
          (z = f('g')),
          (B = f('path')),
          (C = f('symbol')),
          (j = f('g')),
          (E = f('path')),
          (L = f('path')),
          (A = f('path')),
          v(o, 'd', 'M 50 35 v 30 m -15 -15 h 30'),
          v(l, 'fill', 'none'),
          v(l, 'stroke', 'currentColor'),
          v(l, 'stroke-width', '7'),
          v(l, 'stroke-linecap', 'round'),
          v(r, 'id', 'add'),
          v(
            h,
            'd',
            'M -20 0 h -37.5 a 15 15 0 0 0 -15 15 v 42.5 a 15 15 0 0 0 15 15 h 42.5 a 15 15 0 0 0 15 -15 v -37.5'
          ),
          v(m, 'cx', '0'),
          v(m, 'cy', '0'),
          v(m, 'r', '20'),
          v(g, 'stroke-width', '5'),
          v(g, 'd', 'M 0 -7 v 14 m -7 -7 h 14'),
          v(d, 'transform', 'translate(76 24)'),
          v(u, 'fill', 'none'),
          v(u, 'stroke', 'currentColor'),
          v(u, 'stroke-width', '7'),
          v(u, 'stroke-linecap', 'round'),
          v(s, 'id', 'create'),
          v(b, 'd', 'M 50 35 h 20'),
          v(y, 'd', 'M 30 50 h 40'),
          v(w, 'd', 'M 30 65 h 20'),
          v($, 'fill', 'none'),
          v($, 'stroke', 'currentColor'),
          v($, 'stroke-width', '7'),
          v($, 'stroke-linecap', 'round'),
          v(p, 'id', 'list'),
          v(B, 'd', 'M 0 -20 v 40 m -20 -20 h 40'),
          v(z, 'fill', 'none'),
          v(z, 'stroke', 'currentColor'),
          v(z, 'stroke-width', '10'),
          v(z, 'stroke-linecap', 'round'),
          v(M, 'transform', 'rotate(45)'),
          v(_, 'transform', 'translate(50 50)'),
          v(k, 'id', 'delete'),
          v(E, 'd', 'M 35 65 v -7.5'),
          v(L, 'd', 'M 50 65 v -15'),
          v(A, 'd', 'M 65 65 v -30'),
          v(j, 'fill', 'none'),
          v(j, 'stroke', 'currentColor'),
          v(j, 'stroke-width', '7'),
          v(j, 'stroke-linecap', 'round'),
          v(C, 'id', 'highlight'),
          v(n, 'viewBox', '0 0 100 100'),
          v(n, 'width', '40'),
          v(n, 'height', '40'),
          x(n, 'display', 'none');
      },
      m(t, e) {
        i(t, n, e),
          a(n, r),
          a(r, l),
          a(l, o),
          a(n, s),
          a(s, u),
          a(u, d),
          a(d, h),
          a(d, m),
          a(d, g),
          a(n, p),
          a(p, $),
          a($, b),
          a($, y),
          a($, w),
          a(n, k),
          a(k, _),
          a(_, M),
          a(M, z),
          a(z, B),
          a(n, C),
          a(C, j),
          a(j, E),
          a(j, L),
          a(j, A);
      },
      p: t,
      i: t,
      o: t,
      d(t) {
        t && c(n);
      },
    };
  }

  class J extends V {
    constructor(t) {
      super(), K(this, t, null, F, o, {});
    }
  }

  const Q = [];
  const U = d3.scaleOrdinal(d3.schemeTableau10);

  function W(t) {
    return t
      .sort((t, e) => (t.value < e.value ? 1 : -1))
      .map(({ name: t, value: e }, n) => ({
        name: t,
        value: e,
        color: U(n),
      }));
  }

  const X = (function (e) {
    const { subscribe: n, update: r } = (function (e, n = t) {
      let r;
      const l = [];

      function s(t) {
        if (o(e, t) && ((e = t), r)) {
          const t = !Q.length;
          for (let t = 0; t < l.length; t += 1) {
            const n = l[t];
            n[1](), Q.push(n, e);
          }
          if (t) {
            for (let t = 0; t < Q.length; t += 2) Q[t][0](Q[t + 1]);
            Q.length = 0;
          }
        }
      }

      return {
        set: s,
        update: function (t) {
          s(t(e));
        },
        subscribe: function (o, a = t) {
          const i = [o, a];
          return (
            l.push(i),
            1 === l.length && (r = n(s) || t),
            o(e),
            () => {
              const t = l.indexOf(i);
              -1 !== t && l.splice(t, 1), 0 === l.length && (r(), (r = null));
            }
          );
        },
      };
    })(e);
    return {
      subscribe: n,
      create: (t, e) => r((n) => W((n = [...n, { name: t, value: e }]))),
      update: (t, e) =>
        r((n) => {
          const r = n.findIndex((e) => e.name === t);
          return (n[r].value += e), W(n);
        }),
      delete: (t) =>
        r((e) => {
          const n = e.findIndex((e) => e.name === t);
          return W((e = [...e.slice(0, n), ...e.slice(n + 1)]));
        }),
    };
  })(
    W([
      { name: 'Панферов', value: 10 },
      { name: 'Чкалов', value: 18 },
      {
        name: 'Достоевский',
        value: 15,
      },
      { name: 'Достоевский 22', value: 15 },
      { name: 'Малый флот', value: 5 },
    ])
  );

  function Y(t, e, n) {
    const r = t.slice();
    return (r[6] = e[n]), r;
  }

  function Z(t, e) {
    let n, r;
    return {
      key: t,
      first: null,
      c() {
        (n = d('option')), (n.__value = r = e[6].name), (n.value = n.__value), (this.first = n);
      },
      m(t, e) {
        i(t, n, e);
      },
      p(t, l) {
        (e = t), 4 & l && r !== (r = e[6].name) && ((n.__value = r), (n.value = n.__value));
      },
      d(t) {
        t && c(n);
      },
    };
  }

  function tt(e) {
    let n,
      l,
      o,
      s,
      u,
      f,
      h,
      g,
      b,
      x,
      w,
      k,
      _,
      M,
      z,
      B,
      C,
      j,
      E,
      L,
      A = [],
      T = new Map(),
      S = e[2];
    const H = (t) => t[6].name;
    for (let t = 0; t < S.length; t += 1) {
      let n = Y(e, S, t),
        r = H(n);
      T.set(r, (A[t] = Z(r, n)));
    }
    return {
      c() {
        (n = d('section')),
          (l = d('h2')),
          (l.innerHTML =
            '<span><svg viewBox="0 0 100 100" width="40" height="40"><use href="#add"></use></svg></span>\n   Добавить элемент'),
          (o = m()),
          (s = d('form')),
          (u = d('label')),
          (f = d('span')),
          (f.textContent = 'Название'),
          (h = m()),
          (g = d('input')),
          (x = m()),
          (w = d('datalist'));
        for (let t = 0; t < A.length; t += 1) A[t].c();
        (k = m()),
          (_ = d('label')),
          (M = d('span')),
          (M.textContent = 'Число'),
          (z = m()),
          (B = d('input')),
          (C = m()),
          (j = d('button')),
          (j.innerHTML =
            '<span id="description" hidden="">Add the key value pair to the list of items</span> \n      <svg viewBox="0 0 100 100" width="40" height="40" class="svelte-nvgjz6"><use href="#create"></use></svg>'),
          (g.required = !0),
          v(g, 'type', 'text'),
          v(g, 'placeholder', (b = e[2][0] ? e[2][0].name : 'Something tasty')),
          v(g, 'list', 'items'),
          v(g, 'class', 'svelte-nvgjz6'),
          v(w, 'id', 'items'),
          v(u, 'class', 'svelte-nvgjz6'),
          (B.required = !0),
          v(B, 'type', 'number'),
          v(B, 'placeholder', '0'),
          v(B, 'min', '0'),
          v(B, 'class', 'svelte-nvgjz6'),
          v(_, 'class', 'svelte-nvgjz6'),
          v(j, 'aria-label', 'Create entry'),
          v(j, 'aria-describedby', 'description'),
          v(j, 'class', 'svelte-nvgjz6'),
          v(s, 'class', 'svelte-nvgjz6');
      },
      m(t, r) {
        i(t, n, r), a(n, l), a(n, o), a(n, s), a(s, u), a(u, f), a(u, h), a(u, g), y(g, e[0]), a(u, x), a(u, w);
        for (let t = 0; t < A.length; t += 1) A[t].m(w, null);
        var c;
        a(s, k),
          a(s, _),
          a(_, M),
          a(_, z),
          a(_, B),
          y(B, e[1]),
          a(s, C),
          a(s, j),
          E ||
            ((L = [
              p(g, 'input', e[4]),
              p(B, 'input', e[5]),
              p(
                s,
                'submit',
                ((c = e[3]),
                function (t) {
                  return t.preventDefault(), c.call(this, t);
                })
              ),
            ]),
            (E = !0));
      },
      p(t, [e]) {
        4 & e && b !== (b = t[2][0] ? t[2][0].name : 'Something tasty') && v(g, 'placeholder', b),
          1 & e && g.value !== t[0] && y(g, t[0]),
          4 & e && ((S = t[2]), (A = R(A, e, H, 1, t, S, T, w, I, Z, null, Y))),
          2 & e && $(B.value) !== t[1] && y(B, t[1]);
      },
      i: t,
      o: t,
      d(t) {
        t && c(n);
        for (let t = 0; t < A.length; t += 1) A[t].d();
        (E = !1), r(L);
      },
    };
  }

  function et(t, e, n) {
    let r, l, o;
    return (
      s(t, X, (t) => n(2, (r = t))),
      [
        l,
        o,
        r,
        function () {
          -1 === r.findIndex((t) => t.name === l) ? X.create(l, o) : X.update(l, o), this.reset();
        },
        function () {
          (l = this.value), n(0, l);
        },
        function () {
          (o = $(this.value)), n(1, o);
        },
      ]
    );
  }

  class nt extends V {
    constructor(t) {
      super(), K(this, t, et, tt, o, {});
    }
  }

  function rt(t, e, n) {
    const r = t.slice();
    return (r[2] = e[n]), r;
  }

  function lt(t) {
    let e,
      n,
      r,
      l,
      o = [],
      s = new Map(),
      u = t[0];
    const f = (t) => t[2].name;
    for (let e = 0; e < u.length; e += 1) {
      let n = rt(t, u, e),
        r = f(n);
      s.set(r, (o[e] = ot(r, n)));
    }
    return {
      c() {
        (e = d('section')),
          (n = d('h2')),
          (n.innerHTML =
            '<span><svg viewBox="0 0 100 100" width="40" height="40"><use href="#list"></use></svg></span>\n      Список'),
          (r = m()),
          (l = d('main'));
        for (let t = 0; t < o.length; t += 1) o[t].c();
        v(l, 'class', 'svelte-foxn66');
      },
      m(t, s) {
        i(t, e, s), a(e, n), a(e, r), a(e, l);
        for (let t = 0; t < o.length; t += 1) o[t].m(l, null);
      },
      p(t, e) {
        1 & e && ((u = t[0]), (o = R(o, e, f, 1, t, u, s, l, I, ot, null, rt)));
      },
      d(t) {
        t && c(e);
        for (let t = 0; t < o.length; t += 1) o[t].d();
      },
    };
  }

  function ot(t, e) {
    let n,
      r,
      l,
      o,
      s,
      u,
      f,
      g,
      $,
      y,
      w,
      k = e[2].name + '',
      _ = e[2].value + '';

    function M() {
      return e[1](e[2]);
    }

    return {
      key: t,
      first: null,
      c() {
        (n = d('article')),
          (r = d('h2')),
          (l = h(k)),
          (o = m()),
          (s = d('p')),
          (u = h(_)),
          (f = m()),
          (g = d('button')),
          (g.innerHTML =
            '<svg viewBox="0 0 100 100" width="30" height="30" class="svelte-foxn66"><use href="#delete"></use></svg>'),
          ($ = m()),
          v(r, 'class', 'svelte-foxn66'),
          v(s, 'class', 'svelte-foxn66'),
          v(g, 'aria-label', 'Delete'),
          v(g, 'class', 'svelte-foxn66'),
          x(n, 'border-color', e[2].color),
          v(n, 'class', 'svelte-foxn66'),
          (this.first = n);
      },
      m(t, e) {
        i(t, n, e),
          a(n, r),
          a(r, l),
          a(n, o),
          a(n, s),
          a(s, u),
          a(n, f),
          a(n, g),
          a(n, $),
          y || ((w = p(g, 'click', M)), (y = !0));
      },
      p(t, r) {
        (e = t),
          1 & r && k !== (k = e[2].name + '') && b(l, k),
          1 & r && _ !== (_ = e[2].value + '') && b(u, _),
          1 & r && x(n, 'border-color', e[2].color);
      },
      d(t) {
        t && c(n), (y = !1), w();
      },
    };
  }

  function st(e) {
    let n,
      r = e[0].length > 0 && lt(e);
    return {
      c() {
        r && r.c(), (n = g());
      },
      m(t, e) {
        r && r.m(t, e), i(t, n, e);
      },
      p(t, [e]) {
        t[0].length > 0 ? (r ? r.p(t, e) : ((r = lt(t)), r.c(), r.m(n.parentNode, n))) : r && (r.d(1), (r = null));
      },
      i: t,
      o: t,
      d(t) {
        r && r.d(t), t && c(n);
      },
    };
  }

  function at(t, e, n) {
    let r;
    s(t, X, (t) => n(0, (r = t)));
    return [r, (t) => X.delete(t.name)];
  }

  class it extends V {
    constructor(t) {
      super(), K(this, t, at, st, o, {});
    }
  }

  function ct(t, e, n) {
    const r = t.slice();
    return (r[11] = e[n]), r;
  }

  function ut(t, e, n) {
    const r = t.slice();
    return (r[11] = e[n]), (r[15] = n), r;
  }

  function dt(t) {
    let e,
      n,
      r,
      l,
      o,
      s,
      g,
      p,
      $,
      y,
      x,
      w,
      k,
      _,
      M,
      z,
      B = t[0].reduce($t, 0) + '',
      C = t[0],
      j = [];
    for (let e = 0; e < C.length; e += 1) j[e] = ft(ut(t, C, e));
    let E = t[3],
      L = [];
    for (let e = 0; e < E.length; e += 1) L[e] = ht(ct(t, E, e));
    return {
      c() {
        (e = d('section')),
          (n = d('h2')),
          (n.innerHTML =
            '<span><svg viewBox="0 0 100 100" width="40" height="40"><use href="#highlight"></use></svg></span>\n      Диаграммы'),
          (r = m()),
          (l = d('div')),
          (o = f('svg')),
          (s = f('g'));
        for (let t = 0; t < j.length; t += 1) j[t].c();
        (g = m()), (p = f('svg')), ($ = f('g')), (y = f('g'));
        for (let t = 0; t < L.length; t += 1) L[t].c();
        (x = f('text')),
          (w = f('tspan')),
          (k = h(B)),
          (_ = m()),
          (M = f('tspan')),
          (z = h('Элементов')),
          v(s, 'transform', 'translate(' + t[4].left + ' ' + t[4].top + ')'),
          v(o, 'viewBox', '0 0 ' + (gt + (t[4].left + t[4].right)) + ' ' + (pt + (t[4].top + t[4].bottom))),
          v(o, 'width', gt),
          v(o, 'height', pt),
          v(w, 'x', '0'),
          v(w, 'font-size', '68'),
          v(M, 'x', '0'),
          v(M, 'dy', '58'),
          v(M, 'font-size', '24'),
          v(x, 'x', '0'),
          v(x, 'y', '0'),
          v(x, 'text-anchor', 'middle'),
          v(x, 'dominant-baseline', 'middle'),
          v(x, 'fill', 'hsl(240, 40%, 95%)'),
          v(y, 'transform', 'translate(' + gt / 2 + ' ' + pt / 2 + ')'),
          v($, 'transform', 'translate(' + vt + ' ' + vt + ')'),
          v(p, 'viewBox', '0 0 ' + (gt + (vt + vt)) + ' ' + (pt + (vt + vt))),
          v(p, 'width', gt),
          v(p, 'height', pt),
          v(l, 'class', 'svelte-1rns1sh');
      },
      m(t, c) {
        i(t, e, c), a(e, n), a(e, r), a(e, l), a(l, o), a(o, s);
        for (let t = 0; t < j.length; t += 1) j[t].m(s, null);
        a(l, g), a(l, p), a(p, $), a($, y);
        for (let t = 0; t < L.length; t += 1) L[t].m(y, null);
        a(y, x), a(x, w), a(w, k), a(x, _), a(x, M), a(M, z);
      },
      p(t, e) {
        if (7 & e) {
          let n;
          for (C = t[0], n = 0; n < C.length; n += 1) {
            const r = ut(t, C, n);
            j[n] ? j[n].p(r, e) : ((j[n] = ft(r)), j[n].c(), j[n].m(s, null));
          }
          for (; n < j.length; n += 1) j[n].d(1);
          j.length = C.length;
        }
        if (104 & e) {
          let n;
          for (E = t[3], n = 0; n < E.length; n += 1) {
            const r = ct(t, E, n);
            L[n] ? L[n].p(r, e) : ((L[n] = ht(r)), L[n].c(), L[n].m(y, x));
          }
          for (; n < L.length; n += 1) L[n].d(1);
          L.length = E.length;
        }
        1 & e && B !== (B = t[0].reduce($t, 0) + '') && b(k, B);
      },
      d(t) {
        t && c(e), u(j, t), u(L, t);
      },
    };
  }

  function ft(t) {
    let e,
      n,
      r,
      l,
      o,
      s,
      u,
      d,
      m,
      g,
      p,
      $ = t[11].name + '';
    return {
      c() {
        (e = f('g')),
          (n = f('path')),
          (o = f('g')),
          (s = f('circle')),
          (d = f('text')),
          (m = h($)),
          v(n, 'd', (r = 'M 0 0 h ' + t[1](t[11].value))),
          v(n, 'fill', 'none'),
          v(n, 'stroke', (l = t[11].color)),
          v(n, 'stroke-linecap', 'round'),
          v(n, 'stroke-width', '4'),
          v(s, 'cx', '0'),
          v(s, 'cy', '0'),
          v(s, 'r', '8'),
          v(s, 'fill', (u = t[11].color)),
          v(d, 'x', '25'),
          v(d, 'y', '0'),
          v(d, 'dominant-baseline', 'middle'),
          v(d, 'fill', 'hsl(240, 25%, 95%)'),
          v(d, 'font-size', gt / 22),
          v(o, 'transform', (g = 'translate(' + t[1](t[11].value) + ' 0)')),
          v(e, 'transform', (p = 'translate(0 ' + (t[2](t[15]) + t[2].bandwidth() / 2) + ')'));
      },
      m(t, r) {
        i(t, e, r), a(e, n), a(e, o), a(o, s), a(o, d), a(d, m);
      },
      p(t, a) {
        3 & a && r !== (r = 'M 0 0 h ' + t[1](t[11].value)) && v(n, 'd', r),
          1 & a && l !== (l = t[11].color) && v(n, 'stroke', l),
          1 & a && u !== (u = t[11].color) && v(s, 'fill', u),
          1 & a && $ !== ($ = t[11].name + '') && b(m, $),
          3 & a && g !== (g = 'translate(' + t[1](t[11].value) + ' 0)') && v(o, 'transform', g),
          4 & a && p !== (p = 'translate(0 ' + (t[2](t[15]) + t[2].bandwidth() / 2) + ')') && v(e, 'transform', p);
      },
      d(t) {
        t && c(e);
      },
    };
  }

  function ht(t) {
    let e,
      n,
      r,
      l,
      o,
      s,
      u = t[11].data.name + '';
    return {
      c() {
        (e = f('path')),
          (l = f('text')),
          (o = h(u)),
          v(e, 'd', (n = t[5](t[11]))),
          v(e, 'fill', (r = t[11].data.color)),
          v(l, 'transform', (s = 'translate(' + t[6].centroid(t[11])[0] + ' ' + t[6].centroid(t[11])[1] + ')')),
          v(l, 'font-size', '18'),
          v(l, 'fill', 'currentColor'),
          v(l, 'text-anchor', 'middle'),
          v(l, 'dominant-baseline', 'middle'),
          x(l, 'text-transform', 'capitalize');
      },
      m(t, n) {
        i(t, e, n), i(t, l, n), a(l, o);
      },
      p(t, a) {
        8 & a && n !== (n = t[5](t[11])) && v(e, 'd', n),
          8 & a && r !== (r = t[11].data.color) && v(e, 'fill', r),
          8 & a && u !== (u = t[11].data.name + '') && b(o, u),
          8 & a &&
            s !== (s = 'translate(' + t[6].centroid(t[11])[0] + ' ' + t[6].centroid(t[11])[1] + ')') &&
            v(l, 'transform', s);
      },
      d(t) {
        t && c(e), t && c(l);
      },
    };
  }

  function mt(e) {
    let n,
      r = e[0].length > 0 && dt(e);
    return {
      c() {
        r && r.c(), (n = g());
      },
      m(t, e) {
        r && r.m(t, e), i(t, n, e);
      },
      p(t, [e]) {
        t[0].length > 0 ? (r ? r.p(t, e) : ((r = dt(t)), r.c(), r.m(n.parentNode, n))) : r && (r.d(1), (r = null));
      },
      i: t,
      o: t,
      d(t) {
        r && r.d(t), t && c(n);
      },
    };
  }

  const gt = 400,
    pt = 400,
    vt = 90,
    $t = (t, e) => t + e.value;

  function bt(t, e, n) {
    let r, l, o, a, i, c, u, d;
    s(t, X, (t) => n(8, (d = t)));
    const f = d3
        .arc()
        .padAngle(0.05)
        .innerRadius(gt / 3)
        .outerRadius(gt / 2),
      h = d3
        .arc()
        .innerRadius(gt / 2 + vt / 2)
        .outerRadius(gt / 2 + vt / 2);
    return (
      (t.$$.update = () => {
        256 & t.$$.dirty && n(7, (r = d)),
          128 & t.$$.dirty && n(9, (l = [...r.sort((t, e) => e.value - t.value)])),
          512 & t.$$.dirty &&
            n(
              0,
              (o =
                l.length > 4
                  ? [
                      ...l.slice(0, 4),
                      {
                        name: 'Другие',
                        value: l.slice(4).reduce((t, e) => t + e.value, 0),
                        color: 'hsl(0, 0%, 38%)',
                      },
                    ]
                  : [...l])
            ),
          1 & t.$$.dirty &&
            n(
              1,
              (a = d3
                .scaleLinear()
                .domain([0, 1.25 * d3.max(o, (t) => t.value)])
                .range([0, gt])
                .nice())
            ),
          1 & t.$$.dirty && n(2, (i = d3.scaleBand().domain(d3.range(o.length)).range([0, pt]))),
          1025 & t.$$.dirty && n(3, (u = c([...o])));
      }),
      n(
        10,
        (c = d3
          .pie()
          .value((t) => t.value)
          .sort(null))
      ),
      [
        o,
        a,
        i,
        u,
        {
          top: 30,
          right: 30,
          bottom: 30,
          left: 30,
        },
        f,
        h,
        r,
        d,
        l,
        c,
      ]
    );
  }

  class yt extends V {
    constructor(t) {
      super(), K(this, t, bt, mt, o, {});
    }
  }

  function xt(e) {
    let n, r, l, o, s, u, f, h, g;
    return (
      (r = new J({})),
      (o = new nt({})),
      (u = new it({})),
      (h = new yt({})),
      {
        c() {
          (n = d('div')),
            q(r.$$.fragment),
            (l = m()),
            q(o.$$.fragment),
            (s = m()),
            q(u.$$.fragment),
            (f = m()),
            q(h.$$.fragment),
            v(n, 'class', 'app svelte-1mb9367');
        },
        m(t, e) {
          i(t, n, e), P(r, n, null), a(n, l), P(o, n, null), a(n, s), P(u, n, null), a(n, f), P(h, n, null), (g = !0);
        },
        p: t,
        i(t) {
          g || (N(r.$$.fragment, t), N(o.$$.fragment, t), N(u.$$.fragment, t), N(h.$$.fragment, t), (g = !0));
        },
        o(t) {
          O(r.$$.fragment, t), O(o.$$.fragment, t), O(u.$$.fragment, t), O(h.$$.fragment, t), (g = !1);
        },
        d(t) {
          t && c(n), D(r), D(o), D(u), D(h);
        },
      }
    );
  }

  return new (class extends V {
    constructor(t) {
      super(), K(this, t, null, xt, o, {});
    }
  })({ target: document.body });
})();
//# sourceMappingURL=bundle.js.map
