function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function i(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}let a;function s(t,n){return a||(a=document.createElement("a")),a.href=n,t===a.href}function l(t,n,e,o){if(t){const r=u(t,n,e,o);return t[0](r)}}function u(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function f(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}function d(t,n,e,o,r,i){if(r){const c=u(n,e,o,i);t.p(c,r)}}function h(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let t=0;t<e;t++)n[t]=-1;return n}return-1}function _(t){const n={};for(const e in t)"$"!==e[0]&&(n[e]=t[e]);return n}function m(t,n){const e={};n=new Set(n);for(const o in t)n.has(o)||"$"===o[0]||(e[o]=t[o]);return e}function p(t){const n={};for(const e in t)n[e]=!0;return n}function g(n){return n&&i(n.destroy)?n.destroy:t}let $,y=!1;function x(t,n,e,o){for(;t<n;){const r=t+(n-t>>1);e(r)<=o?t=r+1:n=r}return t}function b(t,n){if(y){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let e=0;e<n.length;e++){const o=n[e];void 0!==o.claim_order&&t.push(o)}n=t}const e=new Int32Array(n.length+1),o=new Int32Array(n.length);e[0]=-1;let r=0;for(let t=0;t<n.length;t++){const i=n[t].claim_order,c=(r>0&&n[e[r]].claim_order<=i?r+1:x(1,r,(t=>n[e[t]].claim_order),i))-1;o[t]=e[c]+1;const a=c+1;e[a]=t,r=Math.max(a,r)}const i=[],c=[];let a=n.length-1;for(let t=e[r]+1;0!=t;t=o[t-1]){for(i.push(n[t-1]);a>=t;a--)c.push(n[a]);a--}for(;a>=0;a--)c.push(n[a]);i.reverse(),c.sort(((t,n)=>t.claim_order-n.claim_order));for(let n=0,e=0;n<c.length;n++){for(;e<i.length&&c[n].claim_order>=i[e].claim_order;)e++;const o=e<i.length?i[e]:null;t.insertBefore(c[n],o)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?void 0===n.claim_order&&n.parentNode===t||t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else n.parentNode!==t&&t.appendChild(n)}function v(t,n,e){y&&!e?b(t,n):n.parentNode===t&&n.nextSibling==e||t.insertBefore(n,e||null)}function w(t){t.parentNode.removeChild(t)}function E(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function N(t){return document.createElement(t)}function k(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function A(t){return document.createTextNode(t)}function S(){return A(" ")}function j(){return A("")}function O(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function T(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function B(t,n){const e=Object.getOwnPropertyDescriptors(t.__proto__);for(const o in n)null==n[o]?t.removeAttribute(o):"style"===o?t.style.cssText=n[o]:"__value"===o?t.value=t[o]=n[o]:e[o]&&e[o].set?t[o]=n[o]:T(t,o,n[o])}function C(t){return Array.from(t.childNodes)}function L(t,n,e,o,r=!1){!function(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}(t);const i=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const i=t[o];if(n(i)){const n=e(i);return void 0===n?t.splice(o,1):t[o]=n,r||(t.claim_info.last_index=o),i}}for(let o=t.claim_info.last_index-1;o>=0;o--){const i=t[o];if(n(i)){const n=e(i);return void 0===n?t.splice(o,1):t[o]=n,r?void 0===n&&t.claim_info.last_index--:t.claim_info.last_index=o,i}}return o()})();return i.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,i}function M(t,n,e,o){return L(t,(t=>t.nodeName===n),(t=>{const n=[];for(let o=0;o<t.attributes.length;o++){const r=t.attributes[o];e[r.name]||n.push(r.name)}n.forEach((n=>t.removeAttribute(n)))}),(()=>o?k(n):N(n)))}function P(t,n){return L(t,(t=>3===t.nodeType),(t=>{const e=""+n;if(t.data.startsWith(e)){if(t.data.length!==e.length)return t.splitText(e.length)}else t.data=e}),(()=>A(n)),!0)}function D(t){return P(t," ")}function I(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function q(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}function z(t,n,e){t.classList[e?"add":"remove"](n)}function F(t){$=t}function H(){if(!$)throw new Error("Function called outside component initialization");return $}function G(t){H().$$.on_mount.push(t)}function J(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach((t=>t.call(this,n)))}const K=[],Q=[],R=[],W=[],U=Promise.resolve();let V=!1;function X(t){R.push(t)}let Y=!1;const Z=new Set;function tt(){if(!Y){Y=!0;do{for(let t=0;t<K.length;t+=1){const n=K[t];F(n),nt(n.$$)}for(F(null),K.length=0;Q.length;)Q.pop()();for(let t=0;t<R.length;t+=1){const n=R[t];Z.has(n)||(Z.add(n),n())}R.length=0}while(K.length);for(;W.length;)W.pop()();V=!1,Y=!1,Z.clear()}}function nt(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(X)}}const et=new Set;let ot;function rt(){ot={r:0,c:[],p:ot}}function it(){ot.r||r(ot.c),ot=ot.p}function ct(t,n){t&&t.i&&(et.delete(t),t.i(n))}function at(t,n,e,o){if(t&&t.o){if(et.has(t))return;et.add(t),ot.c.push((()=>{et.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function st(t,n){const e={},o={},r={$$scope:1};let i=t.length;for(;i--;){const c=t[i],a=n[i];if(a){for(const t in c)t in a||(o[t]=1);for(const t in a)r[t]||(e[t]=a[t],r[t]=1);t[i]=a}else for(const t in c)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}function lt(t){t&&t.c()}function ut(t,n){t&&t.l(n)}function ft(t,n,o,c){const{fragment:a,on_mount:s,on_destroy:l,after_update:u}=t.$$;a&&a.m(n,o),c||X((()=>{const n=s.map(e).filter(i);l?l.push(...n):r(n),t.$$.on_mount=[]})),u.forEach(X)}function dt(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ht(t,n){-1===t.$$.dirty[0]&&(K.push(t),V||(V=!0,U.then(tt)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function _t(n,e,i,c,a,s,l,u=[-1]){const f=$;F(n);const d=n.$$={fragment:null,ctx:null,props:s,update:t,not_equal:a,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:e.context||[]),callbacks:o(),dirty:u,skip_bound:!1,root:e.target||f.$$.root};l&&l(d.root);let h=!1;if(d.ctx=i?i(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return d.ctx&&a(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),h&&ht(n,t)),e})):[],d.update(),h=!0,r(d.before_update),d.fragment=!!c&&c(d.ctx),e.target){if(e.hydrate){y=!0;const t=C(e.target);d.fragment&&d.fragment.l(t),t.forEach(w)}else d.fragment&&d.fragment.c();e.intro&&ct(n.$$.fragment),ft(n,e.target,e.anchor,e.customElement),y=!1,tt()}F(f)}class mt{$destroy(){dt(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}export{l as A,n as B,S as C,D,B as E,z as F,g as G,it as H,st as I,m as J,p as K,_ as L,rt as M,k as N,j as O,t as P,E as Q,G as R,mt as S,M as a,C as b,lt as c,ut as d,N as e,w as f,q as g,v as h,_t as i,at as j,dt as k,A as l,ft as m,P as n,b as o,I as p,s as q,T as r,c as s,ct as t,O as u,H as v,J as w,d as x,h as y,f as z};
