import{ab as b,Y as E,ac as I,A as O,O as M,ad as W,P as q,D as B,ae as T,a8 as C,af as $,ag as J,ah as L,J as w,I as A,o as z,N as p,ai as F,aj as G,ak as K,al as Q,am as U,an as X,a7 as Z,L as x,p as tt,m as N,j as et,c as rt}from"./OhXddq_I.js";import{b as at}from"./CBk2dwIB.js";const nt=["touchstart","touchmove"];function st(t){return nt.includes(t)}let D=!1;function it(){D||(D=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{var e;if(!t.defaultPrevented)for(const a of t.target.elements)(e=a.__on_r)==null||e.call(a)})},{capture:!0}))}function V(t){var e=I,a=O;b(null),E(null);try{return t()}finally{b(e),E(a)}}function _t(t,e,a,i=a){t.addEventListener(e,()=>V(a));const n=t.__on_r;n?t.__on_r=()=>{n(),i(!0)}:t.__on_r=()=>i(!0),it()}const ot=new Set,P=new Set;function ut(t,e,a,i={}){function n(r){if(i.capture||y.call(e,r),!r.cancelBubble)return V(()=>a==null?void 0:a.call(this,r))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?W(()=>{e.addEventListener(t,n,i)}):e.addEventListener(t,n,i),n}function dt(t,e,a,i,n){var r={capture:i,passive:n},u=ut(t,e,a,r);(e===document.body||e===window||e===document)&&M(()=>{e.removeEventListener(t,u,r)})}function y(t){var R;var e=this,a=e.ownerDocument,i=t.type,n=((R=t.composedPath)==null?void 0:R.call(t))||[],r=n[0]||t.target,u=0,d=t.__root;if(d){var l=n.indexOf(d);if(l!==-1&&(e===document||e===window)){t.__root=e;return}var v=n.indexOf(e);if(v===-1)return;l<=v&&(u=l)}if(r=n[u]||t.target,r!==e){q(t,"currentTarget",{configurable:!0,get(){return r||a}});var m=I,f=O;b(null),E(null);try{for(var s,o=[];r!==null;){var c=r.assignedSlot||r.parentNode||r.host||null;try{var _=r["__"+i];if(_!==void 0&&!r.disabled)if(B(_)){var[j,...H]=_;j.apply(r,[t,...H])}else _.call(r,t)}catch(g){s?o.push(g):s=g}if(t.cancelBubble||c===e||c===null)break;r=c}if(s){for(let g of o)queueMicrotask(()=>{throw g});throw s}}finally{t.__root=e,delete t.currentTarget,b(m),E(f)}}}let k=!0;function vt(t,e){var a=e==null?"":typeof e=="object"?e+"":e;a!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=a,t.nodeValue=a==null?"":a+"")}function ft(t,e){return Y(t,e)}function ht(t,e){T(),e.intro=e.intro??!1;const a=e.target,i=N,n=p;try{for(var r=C(a);r&&(r.nodeType!==8||r.data!==$);)r=J(r);if(!r)throw L;w(!0),A(r),z();const u=Y(t,{...e,anchor:r});if(p===null||p.nodeType!==8||p.data!==F)throw G(),L;return w(!1),u}catch(u){if(u===L)return e.recover===!1&&K(),T(),Q(a),w(!1),ft(t,e);throw u}finally{w(i),A(n)}}const h=new Map;function Y(t,{target:e,anchor:a,props:i={},events:n,context:r,intro:u=!0}){T();var d=new Set,l=f=>{for(var s=0;s<f.length;s++){var o=f[s];if(!d.has(o)){d.add(o);var c=st(o);e.addEventListener(o,y,{passive:c});var _=h.get(o);_===void 0?(document.addEventListener(o,y,{passive:c}),h.set(o,1)):h.set(o,_+1)}}};l(U(ot)),P.add(l);var v=void 0,m=X(()=>{var f=a??e.appendChild(Z());return x(()=>{if(r){tt({});var s=rt;s.c=r}n&&(i.$$events=n),N&&at(f,null),k=u,v=t(f,i)||{},k=!0,N&&(O.nodes_end=p),r&&et()}),()=>{var c;for(var s of d){e.removeEventListener(s,y);var o=h.get(s);--o===0?(document.removeEventListener(s,y),h.delete(s)):h.set(s,o)}P.delete(l),f!==a&&((c=f.parentNode)==null||c.removeChild(f))}});return S.set(v,m),v}let S=new WeakMap;function pt(t,e){const a=S.get(t);return a?(S.delete(t),a(e)):Promise.resolve()}export{it as a,k as b,dt as e,ht as h,_t as l,ft as m,vt as s,pt as u};
