function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function c(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}let l;function a(t,n){return l||(l=document.createElement("a")),l.href=n,t===l.href}function s(t,n,e,o){if(t){const r=u(t,n,e,o);return t[0](r)}}function u(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function f(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}function d(t,n,e,o,r,c){if(r){const i=u(n,e,o,c);t.p(i,r)}}function h(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let t=0;t<e;t++)n[t]=-1;return n}return-1}function m(t,n){const e={};n=new Set(n);for(const o in t)n.has(o)||"$"===o[0]||(e[o]=t[o]);return e}let p,_=!1;function g(t,n,e,o){for(;t<n;){const r=t+(n-t>>1);e(r)<=o?t=r+1:n=r}return t}function $(t,n){if(_){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let e=0;e<n.length;e++){const o=n[e];void 0!==o.claim_order&&t.push(o)}n=t}const e=new Int32Array(n.length+1),o=new Int32Array(n.length);e[0]=-1;let r=0;for(let t=0;t<n.length;t++){const c=n[t].claim_order,i=(r>0&&n[e[r]].claim_order<=c?r+1:g(1,r,(t=>n[e[t]].claim_order),c))-1;o[t]=e[i]+1;const l=i+1;e[l]=t,r=Math.max(l,r)}const c=[],i=[];let l=n.length-1;for(let t=e[r]+1;0!=t;t=o[t-1]){for(c.push(n[t-1]);l>=t;l--)i.push(n[l]);l--}for(;l>=0;l--)i.push(n[l]);c.reverse(),i.sort(((t,n)=>t.claim_order-n.claim_order));for(let n=0,e=0;n<i.length;n++){for(;e<c.length&&i[n].claim_order>=c[e].claim_order;)e++;const o=e<c.length?c[e]:null;t.insertBefore(i[n],o)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?void 0===n.claim_order&&n.parentNode===t||t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else n.parentNode!==t&&t.appendChild(n)}function y(t,n,e){_&&!e?$(t,n):n.parentNode===t&&n.nextSibling==e||t.insertBefore(n,e||null)}function b(t){t.parentNode.removeChild(t)}function x(t){return document.createElement(t)}function v(t){return document.createTextNode(t)}function E(){return v(" ")}function w(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function k(t,n){const e=Object.getOwnPropertyDescriptors(t.__proto__);for(const o in n)null==n[o]?t.removeAttribute(o):"style"===o?t.style.cssText=n[o]:"__value"===o?t.value=t[o]=n[o]:e[o]&&e[o].set?t[o]=n[o]:w(t,o,n[o])}function A(t){return Array.from(t.childNodes)}function N(t,n,e,o,r=!1){!function(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}(t);const c=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const c=t[o];if(n(c)){const n=e(c);return void 0===n?t.splice(o,1):t[o]=n,r||(t.claim_info.last_index=o),c}}for(let o=t.claim_info.last_index-1;o>=0;o--){const c=t[o];if(n(c)){const n=e(c);return void 0===n?t.splice(o,1):t[o]=n,r?void 0===n&&t.claim_info.last_index--:t.claim_info.last_index=o,c}}return o()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function O(t,n,e,o){return N(t,(t=>t.nodeName===n),(t=>{const n=[];for(let o=0;o<t.attributes.length;o++){const r=t.attributes[o];e[r.name]||n.push(r.name)}n.forEach((n=>t.removeAttribute(n)))}),(()=>o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):x(n)))}function S(t,n){return N(t,(t=>3===t.nodeType),(t=>{const e=""+n;if(t.data.startsWith(e)){if(t.data.length!==e.length)return t.splitText(e.length)}else t.data=e}),(()=>v(n)),!0)}function j(t){return S(t," ")}function T(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function D(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}function C(t,n,e){t.classList[e?"add":"remove"](n)}function I(t){p=t}const B=[],L=[],M=[],P=[],q=Promise.resolve();let F=!1;function H(t){M.push(t)}let R=!1;const V=new Set;function z(){if(!R){R=!0;do{for(let t=0;t<B.length;t+=1){const n=B[t];I(n),W(n.$$)}for(I(null),B.length=0;L.length;)L.pop()();for(let t=0;t<M.length;t+=1){const n=M[t];V.has(n)||(V.add(n),n())}M.length=0}while(B.length);for(;P.length;)P.pop()();F=!1,R=!1,V.clear()}}function W(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(H)}}const G=new Set;let J;function K(){J={r:0,c:[],p:J}}function Q(){J.r||r(J.c),J=J.p}function U(t,n){t&&t.i&&(G.delete(t),t.i(n))}function X(t,n,e,o){if(t&&t.o){if(G.has(t))return;G.add(t),J.c.push((()=>{G.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function Y(t){t&&t.c()}function Z(t,n){t&&t.l(n)}function tt(t,n,o,i){const{fragment:l,on_mount:a,on_destroy:s,after_update:u}=t.$$;l&&l.m(n,o),i||H((()=>{const n=a.map(e).filter(c);s?s.push(...n):r(n),t.$$.on_mount=[]})),u.forEach(H)}function nt(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function et(t,n){-1===t.$$.dirty[0]&&(B.push(t),F||(F=!0,q.then(z)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function ot(n,e,c,i,l,a,s,u=[-1]){const f=p;I(n);const d=n.$$={fragment:null,ctx:null,props:a,update:t,not_equal:l,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:e.context||[]),callbacks:o(),dirty:u,skip_bound:!1,root:e.target||f.$$.root};s&&s(d.root);let h=!1;if(d.ctx=c?c(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return d.ctx&&l(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),h&&et(n,t)),e})):[],d.update(),h=!0,r(d.before_update),d.fragment=!!i&&i(d.ctx),e.target){if(e.hydrate){_=!0;const t=A(e.target);d.fragment&&d.fragment.l(t),t.forEach(b)}else d.fragment&&d.fragment.c();e.intro&&U(n.$$.fragment),tt(n,e.target,e.anchor,e.customElement),_=!1,z()}I(f)}class rt{$destroy(){nt(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ct(){const t=function(){if(!p)throw new Error("Function called outside component initialization");return p}();return n=>{const e=Object.keys(t.$$.callbacks),o=[];return e.forEach((e=>o.push(function(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}(n,e,(n=>function(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach((t=>t.call(this,n)))}(t,n)))))),{destroy:()=>{o.forEach((t=>t()))}}}}const it=t=>({}),lt=t=>({}),at=t=>({}),st=t=>({}),ut=t=>({}),ft=t=>({});function dt(t){let n,e;const o=t[4].thumb,r=s(o,t,t[3],ft);return{c(){n=x("div"),r&&r.c(),this.h()},l(t){n=O(t,"DIV",{style:!0});var e=A(n);r&&r.l(e),e.forEach(b),this.h()},h(){D(n,"text-align","center")},m(t,o){y(t,n,o),r&&r.m(n,null),e=!0},p(t,n){r&&r.p&&(!e||8&n)&&d(r,o,t,t[3],e?f(o,t[3],n,ut):h(t[3]),ft)},i(t){e||(U(r,t),e=!0)},o(t){X(r,t),e=!1},d(t){t&&b(n),r&&r.d(t)}}}function ht(t){let n,e;const o=t[4].header,r=s(o,t,t[3],st);return{c(){n=x("header"),r&&r.c(),this.h()},l(t){n=O(t,"HEADER",{style:!0});var e=A(n);r&&r.l(e),e.forEach(b),this.h()},h(){D(n,"text-align","center")},m(t,o){y(t,n,o),r&&r.m(n,null),e=!0},p(t,n){r&&r.p&&(!e||8&n)&&d(r,o,t,t[3],e?f(o,t[3],n,at):h(t[3]),st)},i(t){e||(U(r,t),e=!0)},o(t){X(r,t),e=!1},d(t){t&&b(n),r&&r.d(t)}}}function mt(t){let n,e;const o=t[4].footer,r=s(o,t,t[3],lt);return{c(){n=x("footer"),r&&r.c()},l(t){n=O(t,"FOOTER",{});var e=A(n);r&&r.l(e),e.forEach(b)},m(t,o){y(t,n,o),r&&r.m(n,null),e=!0},p(t,n){r&&r.p&&(!e||8&n)&&d(r,o,t,t[3],e?f(o,t[3],n,it):h(t[3]),lt)},i(t){e||(U(r,t),e=!0)},o(t){X(r,t),e=!1},d(t){t&&b(n),r&&r.d(t)}}}function pt(e){let o,r,i,l,a,u,m,p=e[2].thumb&&dt(e),_=e[2].header&&ht(e);const g=e[4].default,v=s(g,e,e[3],null);let w=e[2].footer&&mt(e),N=[e[1]],S={};for(let t=0;t<N.length;t+=1)S=n(S,N[t]);return{c(){o=x("div"),p&&p.c(),r=E(),_&&_.c(),i=E(),v&&v.c(),l=E(),w&&w.c(),this.h()},l(t){o=O(t,"DIV",{});var n=A(o);p&&p.l(n),r=j(n),_&&_.l(n),i=j(n),v&&v.l(n),l=j(n),w&&w.l(n),n.forEach(b),this.h()},h(){k(o,S),C(o,"card",1)},m(n,s){var f;y(n,o,s),p&&p.m(o,null),$(o,r),_&&_.m(o,null),$(o,i),v&&v.m(o,null),$(o,l),w&&w.m(o,null),a=!0,u||(f=e[0].call(null,o),m=f&&c(f.destroy)?f.destroy:t,u=!0)},p(t,[n]){t[2].thumb?p?(p.p(t,n),4&n&&U(p,1)):(p=dt(t),p.c(),U(p,1),p.m(o,r)):p&&(K(),X(p,1,1,(()=>{p=null})),Q()),t[2].header?_?(_.p(t,n),4&n&&U(_,1)):(_=ht(t),_.c(),U(_,1),_.m(o,i)):_&&(K(),X(_,1,1,(()=>{_=null})),Q()),v&&v.p&&(!a||8&n)&&d(v,g,t,t[3],a?f(g,t[3],n,null):h(t[3]),null),t[2].footer?w?(w.p(t,n),4&n&&U(w,1)):(w=mt(t),w.c(),U(w,1),w.m(o,null)):w&&(K(),X(w,1,1,(()=>{w=null})),Q()),k(o,S=function(t,n){const e={},o={},r={$$scope:1};let c=t.length;for(;c--;){const i=t[c],l=n[c];if(l){for(const t in i)t in l||(o[t]=1);for(const t in l)r[t]||(e[t]=l[t],r[t]=1);t[c]=l}else for(const t in i)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}(N,[2&n&&t[1]])),C(o,"card",1)},i(t){a||(U(p),U(_),U(v,t),U(w),a=!0)},o(t){X(p),X(_),X(v,t),X(w),a=!1},d(t){t&&b(o),p&&p.d(),_&&_.d(),v&&v.d(t),w&&w.d(),u=!1,m()}}}function _t(t,e,o){const r=[];let c=m(e,r),{$$slots:i={},$$scope:l}=e;const a=function(t){const n={};for(const e in t)n[e]=!0;return n}(i),s=ct();return t.$$set=t=>{e=n(n({},e),function(t){const n={};for(const e in t)"$"!==e[0]&&(n[e]=t[e]);return n}(t)),o(1,c=m(e,r)),"$$scope"in t&&o(3,l=t.$$scope)},[s,c,a,l,i]}class gt extends rt{constructor(t){super(),ot(this,t,_t,pt,i,{})}}export{gt as C,rt as S,O as a,A as b,Y as c,Z as d,x as e,b as f,D as g,y as h,ot as i,X as j,nt as k,v as l,tt as m,S as n,$ as o,T as p,a as q,w as r,i as s,U as t};
