import{b as Ke}from"../chunks/CYAW0Drw.js";import{a as C,t as N,c as fa}from"../chunks/CEpP8ouk.js";import"../chunks/Cras3IMF.js";import{aj as _a,F as ma,q as re,J as Ve,v as xa,g as c,H as ga,I as Ue,K as He,O as Te,ar as $e,L as ra,M as na,N as ha,ah as ia,C as Ge,as as Je,at as ba,ag as ka,au as ya,av as wa,a9 as Ta,Y as ne,ad as Ea,a4 as Ma,a6 as Ra,aw as qe,ax as Ye,a2 as Aa,y as Xe,ay as oa,i as la,az as $a,aA as Sa,ab as Fa,aB as Da,E as Ca,aC as Ia,p as Se,m as t,o as a,s as d,t as V,k as Fe,j as je,aD as Qe,aE as Na,aF as Pa,aG as me,A as se,e as We}from"../chunks/BaZ6xKuN.js";import{e as K,s as T}from"../chunks/CvU9bjLf.js";import{p as Q,i as z}from"../chunks/B56vESOl.js";import{i as De}from"../chunks/BrXnGDX6.js";import{c as ze}from"../chunks/CLwgjUIK.js";function xe(i,e){return e}function La(i,e,n,r){for(var o=[],u=e.length,m=0;m<u;m++)ba(e[m].e,o,!0);var b=u>0&&o.length===0&&n!==null;if(b){var g=n.parentNode;ka(g),g.append(n),r.clear(),de(i,e[0].prev,e[u-1].next)}ya(o,()=>{for(var F=0;F<u;F++){var k=e[F];b||(r.delete(k.k),de(i,k.prev,k.next)),wa(k.e,!b)}})}function ge(i,e,n,r,o,u=null){var m=i,b={flags:e,items:new Map,first:null},g=(e&oa)!==0;if(g){var F=i;m=re?Ve(Ta(F)):F.appendChild(_a())}re&&xa();var k=null,I=!1,E=ne(()=>{var v=n();return la(v)?v:v==null?[]:ia(v)});ma(()=>{var v=c(E),f=v.length;if(I&&f===0)return;I=f===0;let y=!1;if(re){var O=m.data===ga;O!==(f===0)&&(m=Ue(),Ve(m),He(!1),y=!0)}if(re){for(var M=null,D,A=0;A<f;A++){if(Te.nodeType===8&&Te.data===Ea){m=Te,y=!0,He(!1);break}var p=v[A],l=r(p,A);D=ca(Te,b,M,null,p,l,A,o,e,n),b.items.set(l,D),M=D}f>0&&Ve(Ue())}if(!re){var s=Ma;Ba(v,b,m,o,e,(s.f&$e)!==0,r,n)}u!==null&&(f===0?k?ra(k):k=na(()=>u(m)):k!==null&&ha(k,()=>{k=null})),y&&He(!0),c(E)}),re&&(m=Te)}function Ba(i,e,n,r,o,u,m,b){var _,P,ee,R;var g=(o&$a)!==0,F=(o&(qe|Ye))!==0,k=i.length,I=e.items,E=e.first,v=E,f,y=null,O,M=[],D=[],A,p,l,s;if(g)for(s=0;s<k;s+=1)A=i[s],p=m(A,s),l=I.get(p),l!==void 0&&((_=l.a)==null||_.measure(),(O??(O=new Set)).add(l));for(s=0;s<k;s+=1){if(A=i[s],p=m(A,s),l=I.get(p),l===void 0){var h=v?v.e.nodes_start:n;y=ca(h,e,y,y===null?e.first:y.next,A,p,s,r,o,b),I.set(p,y),M=[],D=[],v=y.next;continue}if(F&&Oa(l,A,s,o),l.e.f&$e&&(ra(l.e),g&&((P=l.a)==null||P.unfix(),(O??(O=new Set)).delete(l))),l!==v){if(f!==void 0&&f.has(l)){if(M.length<D.length){var L=D[0],H;y=L.prev;var G=M[0],J=M[M.length-1];for(H=0;H<M.length;H+=1)Ze(M[H],L,n);for(H=0;H<D.length;H+=1)f.delete(D[H]);de(e,G.prev,J.next),de(e,y,G),de(e,J,L),v=L,y=J,s-=1,M=[],D=[]}else f.delete(l),Ze(l,v,n),de(e,l.prev,l.next),de(e,l,y===null?e.first:y.next),de(e,y,l),y=l;continue}for(M=[],D=[];v!==null&&v.k!==p;)(u||!(v.e.f&$e))&&(f??(f=new Set)).add(v),D.push(v),v=v.next;if(v===null)continue;l=v}M.push(l),y=l,v=l.next}if(v!==null||f!==void 0){for(var q=f===void 0?[]:ia(f);v!==null;)(u||!(v.e.f&$e))&&q.push(v),v=v.next;var W=q.length;if(W>0){var w=o&oa&&k===0?n:null;if(g){for(s=0;s<W;s+=1)(ee=q[s].a)==null||ee.measure();for(s=0;s<W;s+=1)(R=q[s].a)==null||R.fix()}La(e,q,w,I)}}g&&Ra(()=>{var $;if(O!==void 0)for(l of O)($=l.a)==null||$.apply()}),Ge.first=e.first&&e.first.e,Ge.last=y&&y.e}function Oa(i,e,n,r){r&qe&&Je(i.v,e),r&Ye?Je(i.i,n):i.i=n}function ca(i,e,n,r,o,u,m,b,g,F){var k=(g&qe)!==0,I=(g&Sa)===0,E=k?I?Aa(o):Xe(o):o,v=g&Ye?Xe(m):m,f={i:v,v:E,k:u,a:null,e:null,prev:n,next:r};try{return f.e=na(()=>b(i,E,v,F),re),f.e.prev=n&&n.e,f.e.next=r&&r.e,n===null?e.first=f:(n.next=f,n.e.next=f.e),r!==null&&(r.prev=f,r.e.prev=f.e),f}finally{}}function Ze(i,e,n){for(var r=i.next?i.next.e.nodes_start:n,o=e?e.e.nodes_start:n,u=i.e.nodes_start;u!==r;){var m=Fa(u);o.before(u),u=m}}function de(i,e,n){e===null?i.first=n:(e.next=n,e.e.next=n&&n.e),n!==null&&(n.prev=e,n.e.prev=e&&e.e)}function Ee(i,e,n,r){var o=i.__attributes??(i.__attributes={});re&&(o[e]=i.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&i.nodeName==="LINK")||o[e]!==(o[e]=n)&&(e==="style"&&"__styles"in i&&(i.__styles={}),e==="loading"&&(i[Da]=n),n==null?i.removeAttribute(e):typeof n!="string"&&Va(i).includes(e)?i[e]=n:i.setAttribute(e,n))}var ea=new Map;function Va(i){var e=ea.get(i.nodeName);if(e)return e;ea.set(i.nodeName,e=[]);for(var n,r=i,o=Element.prototype;o!==r;){n=Ia(r);for(var u in n)n[u].set&&e.push(u);r=Ca(r)}return e}function ue(i,e,n){var r=i.__className,o=Ha(e);re&&i.className===o?i.__className=o:(r!==o||re&&i.className!==o)&&(e==null?i.removeAttribute("class"):i.className=o,i.__className=o)}function Ha(i,e){return(i??"")+""}function aa(i){return function(...e){var n=e[0];n.target===this&&(i==null||i.apply(this,e))}}function ja(i){return function(...e){var n=e[0];return n.stopPropagation(),i==null?void 0:i.apply(this,e)}}function ta(i,e){var u;var n=(u=i.$$events)==null?void 0:u[e.type],r=la(n)?n.slice():n==null?[]:[n];for(var o of r)o.call(this,e)}async function qa({fetch:i}){const e=await i(`${Ke}/data/_models.json`).then(o=>o.json()),r=(await Promise.all(e.models.map(async o=>{try{const m=await(await i(`${Ke}/data/${o.file}`)).json(),b=e.families.find(p=>p.name===o.family),g=(b==null?void 0:b.price_input_tokens)!=null&&(b==null?void 0:b.price_output_tokens)!=null,F=g?b.price_input_tokens/1e6:null,k=g?b.price_output_tokens/1e6:null;if(!m||!m.details||!Array.isArray(m.details.results))return console.error("Unexpected data structure for model:",o.file,m),null;const E=m.details.results.map(p=>{const[l,s]=p,h={input:"How many Rs are in strawberry?",output:l.output,reasoning:l.details.reasoning,evaluations:s.details.evaluations,correct:s.passed,tokens:l.details.prompt_tokens+l.details.completion_tokens,prompt_tokens:l.details.prompt_tokens,completion_tokens:l.details.completion_tokens,responseTime:l.details.response_time};return g&&(h.cost=l.details.prompt_tokens*F+l.details.completion_tokens*k),h}),v=E.length,f=E.filter(p=>p.correct).length,y=f===v,O=E.reduce((p,l)=>p+l.tokens,0)/v,M=Math.min(...E.map(p=>p.tokens)),D=Math.max(...E.map(p=>p.tokens)),A={name:o.display_name,family:o.family,order:e.models.indexOf(o),passed:y,passRate:f,totalTests:v,avgTokens:O,minTokens:M,maxTokens:D,avgResponseTime:E.reduce((p,l)=>p+l.responseTime,0)/v,minResponseTime:Math.min(...E.map(p=>p.responseTime)),maxResponseTime:Math.max(...E.map(p=>p.responseTime)),details:E,hasPricing:g};return g&&(A.avgCost=E.reduce((p,l)=>p+l.cost,0)/v,A.minCost=Math.min(...E.map(p=>p.cost)),A.maxCost=Math.max(...E.map(p=>p.cost))),A}catch(u){return console.error("Error processing model:",o.file,u),null}}))).filter(o=>o!==null);return r.sort((o,u)=>o.order-u.order),{modelResults:r,families:e.families}}const Tt=Object.freeze(Object.defineProperty({__proto__:null,load:qa},Symbol.toStringTag,{value:"Module"}));var Ya=N('<div role="button" tabindex="0"></div>'),za=N('<span class="tooltip"><span class="text-base-content/70">Cost:</span> <span> </span></span>'),Ka=N('<div class="bg-base-200 rounded-lg p-4"><h3 class="font-medium mb-2">Reasoning</h3> <pre class="whitespace-pre-wrap text-sm"> </pre></div>'),Ua=N('<pre class="whitespace-pre-wrap text-sm"> </pre>'),Ga=N('<div class="bg-base-200 rounded-lg p-4"><div class="flex justify-between items-start mb-2"><h3 class="font-medium"> </h3> <span> </span></div> <!></div>'),Ja=N('<div class="flex flex-col gap-4"><div><div class="flex justify-between items-center text-base-content"><span> </span> <div class="text-sm space-x-4"><span class="text-base-content/70">Tokens:</span> <span> </span> <!> <span class="text-base-content/70">Time:</span> <span> </span></div></div></div> <div class="grid grid-cols-3 gap-6"><div class="space-y-4 col-span-2"><div class="bg-base-200 rounded-lg p-4"><h3 class="font-medium mb-2">Input</h3> <pre class="whitespace-pre-wrap text-sm"> </pre></div> <div class="bg-base-200 rounded-lg p-4"><h3 class="font-medium mb-2">Output</h3> <pre class="whitespace-pre-wrap text-sm"> </pre></div> <!></div> <div class="space-y-4"></div></div></div>'),Xa=N('<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 cursor-pointer" role="button" tabindex="0"><div class="bg-base-100 rounded-lg p-6 max-w-5xl w-full max-h-[90vh] overflow-y-auto cursor-default"><div class="flex flex-col gap-6"><div class="flex justify-between items-center"><h2 class="text-xl font-semibold break-words"> </h2> <button class="btn btn-sm btn-ghost">×</button></div> <div class="bg-base-200 rounded-lg p-4"><div class="flex justify-between items-center"><div class="flex gap-4 items-center"><div class="flex gap-px items-center flex-none"></div> <span> </span></div> <div class="flex gap-6 text-sm"><div><span class="text-base-content/70">Tokens:</span> <span class="font-mono ml-1"> </span></div> <div><span class="text-base-content/70">Cost:</span> <span class="font-mono ml-1"> </span></div> <div><span class="text-base-content/70">Time:</span> <span class="font-mono ml-1"> </span></div></div></div></div> <!></div></div></div>');function Qa(i,e){Se(e,!1);const n=ze();let r=Q(e,"model",8),o=Q(e,"family",8);function u(R){return`$${R==null?void 0:R.toFixed(2)}`}function m(R){return`$${R==null?void 0:R.toFixed(5)}`}function b(R){return R>=10?Math.round(R):R.toFixed(1)}function g(){n("close")}function F(R){const $=document.getElementById(`task-${R}`);$&&$.scrollIntoView({behavior:"smooth",block:"start"})}De();var k=Xa(),I=t(k),E=t(I),v=t(E),f=t(v),y=t(f,!0);a(f);var O=d(f,2);a(v);var M=d(v,2),D=t(M),A=t(D),p=t(A);ge(p,5,()=>r().details,xe,(R,$,ce)=>{var j=Ya();V(()=>ue(j,`w-3 h-6 ${(c($).correct?"bg-success/80":"bg-error/80")??""} cursor-pointer hover:opacity-80 transition-opacity`)),K("click",j,()=>F(ce)),K("keydown",j,ae=>ae.key==="Enter"&&F(ce)),C(R,j)}),a(p);var l=d(p,2),s=t(l,!0);a(l),a(A);var h=d(A,2),L=t(h),H=d(t(L),2),G=t(H,!0);a(H),a(L);var J=d(L,2),q=d(t(J),2),W=t(q,!0);a(q),a(J);var w=d(J,2),_=d(t(w),2),P=t(_);a(_),a(w),a(h),a(D),a(M);var ee=d(M,2);ge(ee,1,()=>r().details,xe,(R,$,ce)=>{var j=Ja();Ee(j,"id",`task-${ce??""}`);var ae=t(j),te=t(ae),ie=t(te),fe=t(ie,!0);a(ie);var ve=d(ie,2),oe=d(t(ve),2),he=t(oe,!0);a(oe);var be=d(oe,2);{var Ce=U=>{var Y=za(),le=d(t(Y),2),pe=t(le,!0);a(le),a(Y),V((ye,Le,we)=>{Ee(Y,"data-tip",`Using ${ye??""}/${Le??""} per 1M tokens (in/out)`),T(pe,we)},[()=>u(o().price_input_tokens),()=>u(o().price_output_tokens),()=>m(c($).cost)],ne),C(U,Y)};z(be,U=>{c($).cost!=null&&U(Ce)})}var x=d(be,4),S=t(x);a(x),a(ve),a(te),a(ae);var B=d(ae,2),X=t(B),Z=t(X),_e=d(t(Z),2),Me=t(_e,!0);a(_e),a(Z);var ke=d(Z,2),Re=d(t(ke),2),Ie=t(Re,!0);a(Re),a(ke);var Ne=d(ke,2);{var Pe=U=>{var Y=Ka(),le=d(t(Y),2),pe=t(le,!0);a(le),a(Y),V(()=>T(pe,c($).reasoning)),C(U,Y)};z(Ne,U=>{c($).reasoning&&U(Pe)})}a(X);var Ae=d(X,2);ge(Ae,5,()=>c($).evaluations,xe,(U,Y)=>{var le=Ga(),pe=t(le),ye=t(pe),Le=t(ye,!0);a(ye);var we=d(ye,2),va=t(we,!0);a(we),a(pe);var da=d(pe,2);{var pa=Be=>{var Oe=Ua(),ua=t(Oe,!0);a(Oe),V(()=>T(ua,c(Y).rationale)),C(Be,Oe)};z(da,Be=>{c(Y).rationale&&Be(pa)})}a(le),V(()=>{T(Le,c(Y).criterion),ue(we,`badge ${(c(Y).score===1?"badge-success":"badge-error")??""} text-white`),T(va,c(Y).score===1?"PASS":"FAIL")}),C(U,le)}),a(Ae),a(B),a(j),V(U=>{ue(ae,`bg-${(c($).correct?"success":"error")??""} bg-opacity-20 p-4 rounded-lg`),ue(ie,`badge ${(c($).correct?"badge-success":"badge-error")??""} text-white`),T(fe,c($).correct?"PASS":"FAIL"),T(he,c($).tokens),T(S,`${U??""}s`),T(Me,c($).input),T(Ie,c($).output)},[()=>b(c($).responseTime)],ne),C(R,j)}),a(E),a(I),a(k),V((R,$)=>{T(y,r().name),ue(l,`badge ${(r().passed?"badge-success":"badge-error")??""} text-white`),T(s,r().passed?"PASSED":"FAILED"),T(G,r().avgTokens),T(W,R),T(P,`${$??""}s`)},[()=>m(r().avgCost),()=>b(r().avgResponseTime)],ne),K("click",O,g),K("click",k,aa(g)),K("keydown",k,aa(R=>R.key==="Enter"&&g())),C(i,k),Fe()}var Wa=N('<button class="btn btn-xs btn-ghost"> </button>'),Za=N('<div class="w-8"></div>'),et=N('<span class="badge badge-success text-white">PASSED</span>'),at=N('<span class="badge badge-error text-white">FAILED</span>'),tt=N("<div></div>"),st=N('<div class="flex items-center gap-2"><div class="tooltip"><div class="flex items-center gap-2"><span class="font-semibold"> </span> <span class="text-xs text-base-content/50"> </span></div></div></div>'),rt=N('<span class="text-base-content/50">-</span>'),nt=N('<tr><td class="flex items-center py-2"><div class="w-8 flex items-center justify-start"><!></div> <div><span> </span></div></td><td class="py-2"><!></td><td class="py-2"><div class="flex gap-2 items-center"><div class="flex gap-px items-center"></div> <span class="text-sm tabular-nums"> </span></div></td><td class="py-2"><div class="flex items-center gap-2 tooltip"><span class="font-semibold"> </span> <span class="text-xs text-base-content/50"> </span></div></td><td class="py-2"><!></td><td class="py-2"><div class="flex items-center gap-2 tooltip"><span class="font-semibold"> </span> <span class="text-xs text-base-content/50"> </span></div></td></tr>');function sa(i,e){Se(e,!1);const n=ze();let r=Q(e,"model",8),o=Q(e,"family",8),u=Q(e,"isExpanded",8,!1),m=Q(e,"hasExpandButton",8,!1),b=Q(e,"isExpandButtonVisible",8,!1);function g(x){return`$${x.toFixed(2)}`}function F(x){return`$${x.toFixed(5)}`}function k(x,S,B){const X=Math.abs(x-B)/B*100,Z=Math.abs(S-B)/B*100;return Math.max(X,Z)}function I(x){return x>=10?Math.round(x):x.toFixed(1)}function E(x,S){return Array(S).fill(null).map((B,X)=>X<x)}De();var v=nt(),f=t(v),y=t(f),O=t(y);{var M=x=>{var S=Wa(),B=t(S,!0);a(S),V(()=>T(B,u()?"▼":"▶")),K("click",S,ja(()=>n("toggleExpand"))),C(x,S)},D=x=>{var S=Za();C(x,S)};z(O,x=>{b()?x(M):x(D,!1)})}a(y);var A=d(y,2),p=t(A),l=t(p,!0);a(p),a(A),a(f);var s=d(f),h=t(s);{var L=x=>{var S=et();C(x,S)},H=x=>{var S=at();C(x,S)};z(h,x=>{r().passed?x(L):x(H,!1)})}a(s);var G=d(s),J=t(G),q=t(J);ge(q,5,()=>E(r().passRate,r().totalTests),xe,(x,S)=>{var B=tt();V(()=>ue(B,`w-2 h-4 ${(c(S)?"bg-success":"bg-error")??""}`)),C(x,B)}),a(q);var W=d(q,2),w=t(W);a(W),a(J),a(G);var _=d(G),P=t(_),ee=t(P),R=t(ee,!0);a(ee);var $=d(ee,2),ce=t($);a($),a(P),a(_);var j=d(_),ae=t(j);{var te=x=>{var S=st(),B=t(S),X=t(B),Z=t(X),_e=t(Z,!0);a(Z);var Me=d(Z,2),ke=t(Me);a(Me),a(X),a(B),a(S),V((Re,Ie,Ne,Pe,Ae,U)=>{Ee(B,"data-tip",`Min: ${Re??""}, Max: ${Ie??""}
Cost: ${Ne??""}/${Pe??""} per 1M tokens (in/out)`),T(_e,Ae),T(ke,`±${U??""}%`)},[()=>F(r().minCost),()=>F(r().maxCost),()=>g(o().price_input_tokens),()=>g(o().price_output_tokens),()=>F(r().avgCost),()=>k(r().minCost,r().maxCost,r().avgCost).toFixed(0)],ne),C(x,S)},ie=x=>{var S=rt();C(x,S)};z(ae,x=>{r().hasPricing?x(te):x(ie,!1)})}a(j);var fe=d(j),ve=t(fe),oe=t(ve),he=t(oe);a(oe);var be=d(oe,2),Ce=t(be);a(be),a(ve),a(fe),a(v),V((x,S,B,X,Z,_e)=>{ue(v,`hover:bg-base-200 cursor-pointer ${(m()?"":"bg-base-200/30")??""}`),T(l,r().name),T(w,`${r().passRate??""}/${r().totalTests??""}`),Ee(P,"data-tip",`Min: ${r().minTokens??""} tokens
Max: ${r().maxTokens??""} tokens`),T(R,x),T(ce,`±${S??""}%`),Ee(ve,"data-tip",`Min: ${B??""}s, Max: ${X??""}s`),T(he,`${Z??""}s`),T(Ce,`±${_e??""}%`)},[()=>Math.round(r().avgTokens),()=>k(r().minTokens,r().maxTokens,r().avgTokens).toFixed(0),()=>I(r().minResponseTime),()=>I(r().maxResponseTime),()=>I(r().avgResponseTime),()=>k(r().minResponseTime,r().maxResponseTime,r().avgResponseTime).toFixed(0)],ne),K("click",v,()=>n("showDetails",{model:r()})),C(i,v),Fe()}var it=N('<span class="ml-1"> </span>'),ot=N('<span class="ml-1"> </span>'),lt=N('<span class="ml-1"> </span>'),ct=N('<span class="ml-1"> </span>'),vt=N('<span class="ml-1"> </span>'),dt=N('<span class="ml-1"> </span>'),pt=N("<!> <!>",1),ut=N('<div class="overflow-x-auto"><table class="table table-zebra w-full"><thead><tr class="text-[0.95rem]"><th class="cursor-pointer pl-12">Model <!></th><th class="cursor-pointer">Results 🍓 <!></th><th class="cursor-pointer">Pass Rate <!></th><th class="cursor-pointer">Tokens <!></th><th class="cursor-pointer">Cost <!></th><th class="cursor-pointer">Response Time <!></th></tr></thead><tbody></tbody></table></div>');function ft(i,e){Se(e,!1);const n=ze();let r=Q(e,"families",8),o=Q(e,"sortField",8,"order"),u=Q(e,"sortDirection",8,"asc"),m=Q(e,"expandedFamilies",8);De();var b=ut(),g=t(b),F=t(g),k=t(F),I=t(k),E=d(t(I));{var v=w=>{var _=it(),P=t(_,!0);a(_),V(()=>T(P,u()==="asc"?"↑":"↓")),C(w,_)};z(E,w=>{o()==="name"&&w(v)})}a(I);var f=d(I),y=d(t(f));{var O=w=>{var _=ot(),P=t(_,!0);a(_),V(()=>T(P,u()==="asc"?"↑":"↓")),C(w,_)};z(y,w=>{o()==="passed"&&w(O)})}a(f);var M=d(f),D=d(t(M));{var A=w=>{var _=lt(),P=t(_,!0);a(_),V(()=>T(P,u()==="asc"?"↑":"↓")),C(w,_)};z(D,w=>{o()==="passRate"&&w(A)})}a(M);var p=d(M),l=d(t(p));{var s=w=>{var _=ct(),P=t(_,!0);a(_),V(()=>T(P,u()==="asc"?"↑":"↓")),C(w,_)};z(l,w=>{o()==="tokens"&&w(s)})}a(p);var h=d(p),L=d(t(h));{var H=w=>{var _=vt(),P=t(_,!0);a(_),V(()=>T(P,u()==="asc"?"↑":"↓")),C(w,_)};z(L,w=>{o()==="cost"&&w(H)})}a(h);var G=d(h),J=d(t(G));{var q=w=>{var _=dt(),P=t(_,!0);a(_),V(()=>T(P,u()==="asc"?"↑":"↓")),C(w,_)};z(J,w=>{o()==="time"&&w(q)})}a(G),a(k),a(F);var W=d(F);ge(W,5,r,xe,(w,_)=>{var P=pt();const ee=ne(()=>c(_).models[0]),R=ne(()=>c(_).models.length>1);var $=je(P);const ce=ne(()=>m().has(c(_).name));sa($,{get model(){return c(ee)},get family(){return c(_)},hasExpandButton:!0,get isExpandButtonVisible(){return c(R)},get isExpanded(){return c(ce)},$$events:{showDetails(te){ta.call(this,e,te)},toggleExpand:()=>n("toggleFamily",{family:c(_).name})}});var j=d($,2);{var ae=te=>{var ie=fa(),fe=je(ie);ge(fe,1,()=>c(_).models.slice(1),xe,(ve,oe)=>{sa(ve,{get model(){return c(oe)},get family(){return c(_)},$$events:{showDetails(he){ta.call(this,e,he)}}})}),C(te,ie)};z(j,te=>{m().has(c(_).name)&&c(R)&&te(ae)})}C(w,P)}),a(W),a(g),a(b),K("click",I,()=>n("toggleSort",{field:"name"})),K("click",f,()=>n("toggleSort",{field:"passed"})),K("click",M,()=>n("toggleSort",{field:"passRate"})),K("click",p,()=>n("toggleSort",{field:"tokens"})),K("click",h,()=>n("toggleSort",{field:"cost"})),K("click",G,()=>n("toggleSort",{field:"time"})),C(i,b),Fe()}var _t=N('<div class="container mx-auto p-4"><h1 class="text-3xl font-bold mb-6">Strawberry Bench</h1> <!></div> <!>',1);function Et(i,e){Se(e,!1);const n=me(),r=me();let o=Q(e,"data",8),u=me(null),m=me(new Set),b=me("order"),g=me("asc");function F(s){se(u,s)}function k(){se(u,null)}function I(s){s.key==="Escape"&&c(u)&&k()}function E(s){c(m).has(s)?c(m).delete(s):c(m).add(s),se(m,c(m))}function v(s){if(c(b)===s)se(g,c(g)==="asc"?"desc":"asc");else switch(se(b,s),s){case"passRate":se(g,"desc");break;case"name":case"passed":case"tokens":case"cost":case"time":se(g,"asc");break;default:se(g,"asc")}}function f(s,h,L){switch(h){case"name":return(L.provider+"/"+s.name).toLowerCase();case"passed":return s.passed?1:0;case"passRate":return s.passRate/s.totalTests;case"tokens":return s.avgTokens;case"cost":return s.avgCost;case"time":return s.avgResponseTime;case"order":return s.originalIndex;default:return 0}}function y(s){return o().families.find(h=>h.name===s)}function O(s){const{detail:h}=s;switch(s.type){case"toggleSort":v(h.field);break;case"showDetails":F(h.model);break;case"toggleFamily":E(h.family);break}}Qe(()=>We(o()),()=>{se(n,o().modelResults.reduce((s,h,L)=>(h.originalIndex=L,s[h.family]||(s[h.family]=[]),s[h.family].push(h),s),{}))}),Qe(()=>(We(o()),c(n),c(b),c(g)),()=>{se(r,o().families.map(s=>{const h=[...c(n)[s.name]||[]],L=h[0];return{...s,models:h,sortValue:L?f(L,c(b),s):null}}).sort((s,h)=>{if(s.sortValue===null)return 1;if(h.sortValue===null)return-1;const L=c(g)==="asc"?1:-1;return(s.sortValue>h.sortValue?1:-1)*L}))}),Na(),De();var M=_t();K("keydown",Pa,I);var D=je(M),A=d(t(D),2);ft(A,{get sortField(){return c(b)},get sortDirection(){return c(g)},get expandedFamilies(){return c(m)},get families(){return c(r)},$$events:{toggleSort:O,showDetails:O,toggleFamily:O}}),a(D);var p=d(D,2);{var l=s=>{const h=ne(()=>y(c(u).family));Qa(s,{get model(){return c(u)},get family(){return c(h)},$$events:{close:k}})};z(p,s=>{c(u)&&s(l)})}C(i,M),Fe()}export{Et as component,Tt as universal};
