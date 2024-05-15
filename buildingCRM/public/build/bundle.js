var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode&&t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function i(t){return document.createTextNode(t)}function f(){return i(" ")}function d(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t,e){e=""+e,t.data!==e&&(t.data=e)}function p(t,e){t.value=null==e?"":e}let g;function $(t){g=t}function v(){const t=function(){if(!g)throw new Error("Function called outside component initialization");return g}();return(e,n,{cancelable:o=!1}={})=>{const r=t.$$.callbacks[e];if(r){const s=function(t,e,{bubbles:n=!1,cancelable:o=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,o,e),r}(e,n,{cancelable:o});return r.slice().forEach((e=>{e.call(t,s)})),!s.defaultPrevented}return!0}}const b=[],y=[];let x=[];const E=[],k=Promise.resolve();let _=!1;function w(t){x.push(t)}const C=new Set;let S=0;function j(){if(0!==S)return;const t=g;do{try{for(;S<b.length;){const t=b[S];S++,$(t),O(t.$$)}}catch(t){throw b.length=0,S=0,t}for($(null),b.length=0,S=0;y.length;)y.pop()();for(let t=0;t<x.length;t+=1){const e=x[t];C.has(e)||(C.add(e),e())}x.length=0}while(b.length);for(;E.length;)E.pop()();_=!1,C.clear(),$(t)}function O(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(w)}}const T=new Set;let A;function N(t,e){t&&t.i&&(T.delete(t),t.i(e))}function L(t,e,n,o){if(t&&t.o){if(T.has(t))return;T.add(t),A.c.push((()=>{T.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}else o&&o()}function M(t){t&&t.c()}function P(t,n,s,c){const{fragment:l,after_update:u}=t.$$;l&&l.m(n,s),c||w((()=>{const n=t.$$.on_mount.map(e).filter(r);t.$$.on_destroy?t.$$.on_destroy.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(w)}function q(t,e){const n=t.$$;null!==n.fragment&&(!function(t){const e=[],n=[];x.forEach((o=>-1===t.indexOf(o)?e.push(o):n.push(o))),n.forEach((t=>t())),x=e}(n.after_update),o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function R(t,e){-1===t.$$.dirty[0]&&(b.push(t),_||(_=!0,k.then(j)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function z(e,r,s,c,l,a,i,f=[-1]){const d=g;$(e);const m=e.$$={fragment:null,ctx:[],props:a,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(d?d.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:r.target||d.$$.root};i&&i(m.root);let h=!1;if(m.ctx=s?s(e,r.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return m.ctx&&l(m.ctx[t],m.ctx[t]=r)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](r),h&&R(e,t)),n})):[],m.update(),h=!0,o(m.before_update),m.fragment=!!c&&c(m.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);m.fragment&&m.fragment.l(t),t.forEach(u)}else m.fragment&&m.fragment.c();r.intro&&N(e.$$.fragment),P(e,r.target,r.anchor,r.customElement),j()}$(d)}class D{$destroy(){q(this,1),this.$destroy=t}$on(e,n){if(!r(n))return t;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function H(e){let n;return{c(){n=a("h1"),n.textContent="SUPER CRM",m(n,"class","svelte-140yqvv")},m(t,e){l(t,n,e)},p:t,i:t,o:t,d(t){t&&u(n)}}}class J extends D{constructor(t){super(),z(this,t,null,H,s,{})}}class B extends D{constructor(t){super(),z(this,t,null,null,s,{})}}function F(e){let n,r,s,i,h,g,$,v,b,y,x,E;return{c(){n=a("div"),r=a("input"),s=f(),i=a("input"),h=f(),g=a("input"),$=f(),v=a("input"),b=f(),y=a("button"),y.innerHTML="<b>+</b>",m(r,"placeholder","Name"),m(r,"class","svelte-enukfg"),m(i,"placeholder","Email"),m(i,"class","svelte-enukfg"),m(g,"placeholder","Address"),m(g,"class","svelte-enukfg"),m(v,"placeholder","Leads (asd, sdf, ...)"),m(v,"class","svelte-enukfg"),m(y,"class","svelte-enukfg"),m(n,"id","inputCollection"),m(n,"class","svelte-enukfg")},m(t,o){l(t,n,o),c(n,r),p(r,e[0]),c(n,s),c(n,i),p(i,e[1]),c(n,h),c(n,g),p(g,e[2]),c(n,$),c(n,v),p(v,e[3]),c(n,b),c(n,y),x||(E=[d(r,"input",e[6]),d(r,"keydown",e[5]),d(i,"input",e[7]),d(i,"keydown",e[5]),d(g,"input",e[8]),d(g,"keydown",e[5]),d(v,"input",e[9]),d(v,"keydown",e[5]),d(y,"click",e[4])],x=!0)},p(t,[e]){1&e&&r.value!==t[0]&&p(r,t[0]),2&e&&i.value!==t[1]&&p(i,t[1]),4&e&&g.value!==t[2]&&p(g,t[2]),8&e&&v.value!==t[3]&&p(v,t[3])},i:t,o:t,d(t){t&&u(n),x=!1,o(E)}}}function I(t,e,n){const o=v();let r="",s="",c="",l="";async function u(t){if(!a())return;const e={name:String(r),email:String(s),address:String(c),leads:String(l)};try{const t=await fetch("http://localhost:3000/addCustomer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(t.ok){const e=await t.json();console.log(Object.values(e).join(", ")),o("addedCustomer")}else console.error("Error:",t.statusText)}catch(t){console.error("Error:",t)}}function a(){return""!==r.trim()&&""!==s.trim()&&""!==c.trim()&&""!==l.trim()}return[r,s,c,l,u,function(t){if("Enter"!==t.key)return;if(a())return void u();t.preventDefault();const e=Array.from(document.querySelectorAll("#inputCollection input")),n=e.findIndex((e=>e===t.target))+1;n<e.length&&e[n].focus()},function(){r=this.value,n(0,r)},function(){s=this.value,n(1,s)},function(){c=this.value,n(2,c)},function(){l=this.value,n(3,l)}]}class U extends D{constructor(t){super(),z(this,t,I,F,s,{})}}function G(t,e,n){const o=t.slice();return o[4]=e[n],o}function K(t){let e,n,o,r,s,p,g,$,v,b,y,x,E,k,_,w,C,S=t[4].name+"",j=t[4].email+"",O=t[4].address+"",T=t[4].leads+"";function A(){return t[3](t[4])}return{c(){e=a("div"),n=a("span"),o=i(S),r=f(),s=a("span"),p=i(j),g=f(),$=a("span"),v=i(O),b=f(),y=a("span"),x=i(T),E=f(),k=a("button"),k.innerHTML="<b>-</b>",_=f(),m(n,"class","name svelte-1clsxsb"),m(s,"class","email svelte-1clsxsb"),m($,"class","address svelte-1clsxsb"),m(y,"class","leads svelte-1clsxsb"),m(k,"class","svelte-1clsxsb"),m(e,"class","item svelte-1clsxsb")},m(t,u){l(t,e,u),c(e,n),c(n,o),c(e,r),c(e,s),c(s,p),c(e,g),c(e,$),c($,v),c(e,b),c(e,y),c(y,x),c(e,E),c(e,k),c(e,_),w||(C=d(k,"click",A),w=!0)},p(e,n){t=e,1&n&&S!==(S=t[4].name+"")&&h(o,S),1&n&&j!==(j=t[4].email+"")&&h(p,j),1&n&&O!==(O=t[4].address+"")&&h(v,O),1&n&&T!==(T=t[4].leads+"")&&h(x,T)},d(t){t&&u(e),w=!1,C()}}}function Q(e){let n,o=e[0],r=[];for(let t=0;t<o.length;t+=1)r[t]=K(G(e,o,t));return{c(){n=a("div");for(let t=0;t<r.length;t+=1)r[t].c();m(n,"id","list"),m(n,"class","svelte-1clsxsb")},m(t,e){l(t,n,e);for(let t=0;t<r.length;t+=1)r[t]&&r[t].m(n,null)},p(t,[e]){if(3&e){let s;for(o=t[0],s=0;s<o.length;s+=1){const c=G(t,o,s);r[s]?r[s].p(c,e):(r[s]=K(c),r[s].c(),r[s].m(n,null))}for(;s<r.length;s+=1)r[s].d(1);r.length=o.length}},i:t,o:t,d(t){t&&u(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(r,t)}}}function V(t,e,n){let o=[];function r(){fetch("http://localhost:3000/getCustomers").then((t=>t.json())).then((t=>{n(0,o=t)})).catch((t=>{console.error("Error fetching customers:",t)}))}async function s(t){const{name:e,email:r,address:s,leads:c}=t,l=await fetch("http://localhost:3000/removeCustomer",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,email:r,address:s,leads:c})});l.ok?console.log("Removed "+e+r+s+c):console.error("Error removing "+e+l.status),n(0,o=o.filter((e=>e!==t)))}r();return[o,s,r,t=>s(t)]}class W extends D{constructor(t){super(),z(this,t,V,Q,s,{getCustomers:2})}get getCustomers(){return this.$$.ctx[2]}}function X(t){let e,n,o,r,s,i,d,h,p;n=new J({}),r=new U({}),r.$on("addedCustomer",t[1]);return i=new W({props:{}}),t[2](i),h=new B({}),{c(){e=a("main"),M(n.$$.fragment),o=f(),M(r.$$.fragment),s=f(),M(i.$$.fragment),d=f(),M(h.$$.fragment),m(e,"class","svelte-144m3cz")},m(t,u){l(t,e,u),P(n,e,null),c(e,o),P(r,e,null),c(e,s),P(i,e,null),c(e,d),P(h,e,null),p=!0},p(t,[e]){i.$set({})},i(t){p||(N(n.$$.fragment,t),N(r.$$.fragment,t),N(i.$$.fragment,t),N(h.$$.fragment,t),p=!0)},o(t){L(n.$$.fragment,t),L(r.$$.fragment,t),L(i.$$.fragment,t),L(h.$$.fragment,t),p=!1},d(o){o&&u(e),q(n),q(r),t[2](null),q(i),q(h)}}}function Y(t,e,n){let o;return[o,function(){o.getCustomers()},function(t){y[t?"unshift":"push"]((()=>{o=t,n(0,o)}))}]}return new class extends D{constructor(t){super(),z(this,t,Y,X,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
