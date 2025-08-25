(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))o(m);new MutationObserver(m=>{for(const p of m)if(p.type==="childList")for(const z of p.addedNodes)z.tagName==="LINK"&&z.rel==="modulepreload"&&o(z)}).observe(document,{childList:!0,subtree:!0});function f(m){const p={};return m.integrity&&(p.integrity=m.integrity),m.referrerPolicy&&(p.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?p.credentials="include":m.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function o(m){if(m.ep)return;m.ep=!0;const p=f(m);fetch(m.href,p)}})();function Xd(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var yr={exports:{}},An={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ad;function Rh(){if(Ad)return An;Ad=1;var u=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function f(o,m,p){var z=null;if(p!==void 0&&(z=""+p),m.key!==void 0&&(z=""+m.key),"key"in m){p={};for(var R in m)R!=="key"&&(p[R]=m[R])}else p=m;return m=p.ref,{$$typeof:u,type:o,key:z,ref:m!==void 0?m:null,props:p}}return An.Fragment=s,An.jsx=f,An.jsxs=f,An}var Md;function jh(){return Md||(Md=1,yr.exports=Rh()),yr.exports}var d=jh(),vr={exports:{}},ee={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rd;function _h(){if(Rd)return ee;Rd=1;var u=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),z=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),U=Symbol.iterator;function C(y){return y===null||typeof y!="object"?null:(y=U&&y[U]||y["@@iterator"],typeof y=="function"?y:null)}var W={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,Q={};function Z(y,w,B){this.props=y,this.context=w,this.refs=Q,this.updater=B||W}Z.prototype.isReactComponent={},Z.prototype.setState=function(y,w){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,w,"setState")},Z.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function q(){}q.prototype=Z.prototype;function ue(y,w,B){this.props=y,this.context=w,this.refs=Q,this.updater=B||W}var I=ue.prototype=new q;I.constructor=ue,X(I,Z.prototype),I.isPureReactComponent=!0;var xe=Array.isArray,F={H:null,A:null,T:null,S:null,V:null},we=Object.prototype.hasOwnProperty;function je(y,w,B,H,k,ce){return B=ce.ref,{$$typeof:u,type:y,key:w,ref:B!==void 0?B:null,props:ce}}function Ue(y,w){return je(y.type,w,void 0,void 0,void 0,y.props)}function Ee(y){return typeof y=="object"&&y!==null&&y.$$typeof===u}function Ie(y){var w={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(B){return w[B]})}var st=/\/+/g;function Xe(y,w){return typeof y=="object"&&y!==null&&y.key!=null?Ie(""+y.key):w.toString(36)}function Ea(){}function Na(y){switch(y.status){case"fulfilled":return y.value;case"rejected":throw y.reason;default:switch(typeof y.status=="string"?y.then(Ea,Ea):(y.status="pending",y.then(function(w){y.status==="pending"&&(y.status="fulfilled",y.value=w)},function(w){y.status==="pending"&&(y.status="rejected",y.reason=w)})),y.status){case"fulfilled":return y.value;case"rejected":throw y.reason}}throw y}function Qe(y,w,B,H,k){var ce=typeof y;(ce==="undefined"||ce==="boolean")&&(y=null);var P=!1;if(y===null)P=!0;else switch(ce){case"bigint":case"string":case"number":P=!0;break;case"object":switch(y.$$typeof){case u:case s:P=!0;break;case M:return P=y._init,Qe(P(y._payload),w,B,H,k)}}if(P)return k=k(y),P=H===""?"."+Xe(y,0):H,xe(k)?(B="",P!=null&&(B=P.replace(st,"$&/")+"/"),Qe(k,w,B,"",function(Wt){return Wt})):k!=null&&(Ee(k)&&(k=Ue(k,B+(k.key==null||y&&y.key===k.key?"":(""+k.key).replace(st,"$&/")+"/")+P)),w.push(k)),1;P=0;var et=H===""?".":H+":";if(xe(y))for(var ve=0;ve<y.length;ve++)H=y[ve],ce=et+Xe(H,ve),P+=Qe(H,w,B,ce,k);else if(ve=C(y),typeof ve=="function")for(y=ve.call(y),ve=0;!(H=y.next()).done;)H=H.value,ce=et+Xe(H,ve++),P+=Qe(H,w,B,ce,k);else if(ce==="object"){if(typeof y.then=="function")return Qe(Na(y),w,B,H,k);throw w=String(y),Error("Objects are not valid as a React child (found: "+(w==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":w)+"). If you meant to render a collection of children, use an array instead.")}return P}function _(y,w,B){if(y==null)return y;var H=[],k=0;return Qe(y,H,"","",function(ce){return w.call(B,ce,k++)}),H}function Y(y){if(y._status===-1){var w=y._result;w=w(),w.then(function(B){(y._status===0||y._status===-1)&&(y._status=1,y._result=B)},function(B){(y._status===0||y._status===-1)&&(y._status=2,y._result=B)}),y._status===-1&&(y._status=0,y._result=w)}if(y._status===1)return y._result.default;throw y._result}var J=typeof reportError=="function"?reportError:function(y){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var w=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof y=="object"&&y!==null&&typeof y.message=="string"?String(y.message):String(y),error:y});if(!window.dispatchEvent(w))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",y);return}console.error(y)};function ge(){}return ee.Children={map:_,forEach:function(y,w,B){_(y,function(){w.apply(this,arguments)},B)},count:function(y){var w=0;return _(y,function(){w++}),w},toArray:function(y){return _(y,function(w){return w})||[]},only:function(y){if(!Ee(y))throw Error("React.Children.only expected to receive a single React element child.");return y}},ee.Component=Z,ee.Fragment=f,ee.Profiler=m,ee.PureComponent=ue,ee.StrictMode=o,ee.Suspense=b,ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,ee.__COMPILER_RUNTIME={__proto__:null,c:function(y){return F.H.useMemoCache(y)}},ee.cache=function(y){return function(){return y.apply(null,arguments)}},ee.cloneElement=function(y,w,B){if(y==null)throw Error("The argument must be a React element, but you passed "+y+".");var H=X({},y.props),k=y.key,ce=void 0;if(w!=null)for(P in w.ref!==void 0&&(ce=void 0),w.key!==void 0&&(k=""+w.key),w)!we.call(w,P)||P==="key"||P==="__self"||P==="__source"||P==="ref"&&w.ref===void 0||(H[P]=w[P]);var P=arguments.length-2;if(P===1)H.children=B;else if(1<P){for(var et=Array(P),ve=0;ve<P;ve++)et[ve]=arguments[ve+2];H.children=et}return je(y.type,k,void 0,void 0,ce,H)},ee.createContext=function(y){return y={$$typeof:z,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null},y.Provider=y,y.Consumer={$$typeof:p,_context:y},y},ee.createElement=function(y,w,B){var H,k={},ce=null;if(w!=null)for(H in w.key!==void 0&&(ce=""+w.key),w)we.call(w,H)&&H!=="key"&&H!=="__self"&&H!=="__source"&&(k[H]=w[H]);var P=arguments.length-2;if(P===1)k.children=B;else if(1<P){for(var et=Array(P),ve=0;ve<P;ve++)et[ve]=arguments[ve+2];k.children=et}if(y&&y.defaultProps)for(H in P=y.defaultProps,P)k[H]===void 0&&(k[H]=P[H]);return je(y,ce,void 0,void 0,null,k)},ee.createRef=function(){return{current:null}},ee.forwardRef=function(y){return{$$typeof:R,render:y}},ee.isValidElement=Ee,ee.lazy=function(y){return{$$typeof:M,_payload:{_status:-1,_result:y},_init:Y}},ee.memo=function(y,w){return{$$typeof:h,type:y,compare:w===void 0?null:w}},ee.startTransition=function(y){var w=F.T,B={};F.T=B;try{var H=y(),k=F.S;k!==null&&k(B,H),typeof H=="object"&&H!==null&&typeof H.then=="function"&&H.then(ge,J)}catch(ce){J(ce)}finally{F.T=w}},ee.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},ee.use=function(y){return F.H.use(y)},ee.useActionState=function(y,w,B){return F.H.useActionState(y,w,B)},ee.useCallback=function(y,w){return F.H.useCallback(y,w)},ee.useContext=function(y){return F.H.useContext(y)},ee.useDebugValue=function(){},ee.useDeferredValue=function(y,w){return F.H.useDeferredValue(y,w)},ee.useEffect=function(y,w,B){var H=F.H;if(typeof B=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return H.useEffect(y,w)},ee.useId=function(){return F.H.useId()},ee.useImperativeHandle=function(y,w,B){return F.H.useImperativeHandle(y,w,B)},ee.useInsertionEffect=function(y,w){return F.H.useInsertionEffect(y,w)},ee.useLayoutEffect=function(y,w){return F.H.useLayoutEffect(y,w)},ee.useMemo=function(y,w){return F.H.useMemo(y,w)},ee.useOptimistic=function(y,w){return F.H.useOptimistic(y,w)},ee.useReducer=function(y,w,B){return F.H.useReducer(y,w,B)},ee.useRef=function(y){return F.H.useRef(y)},ee.useState=function(y){return F.H.useState(y)},ee.useSyncExternalStore=function(y,w,B){return F.H.useSyncExternalStore(y,w,B)},ee.useTransition=function(){return F.H.useTransition()},ee.version="19.1.1",ee}var jd;function Ar(){return jd||(jd=1,vr.exports=_h()),vr.exports}var A=Ar();const Oh=Xd(A);var br={exports:{}},Mn={},xr={exports:{}},Sr={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _d;function Dh(){return _d||(_d=1,function(u){function s(_,Y){var J=_.length;_.push(Y);e:for(;0<J;){var ge=J-1>>>1,y=_[ge];if(0<m(y,Y))_[ge]=Y,_[J]=y,J=ge;else break e}}function f(_){return _.length===0?null:_[0]}function o(_){if(_.length===0)return null;var Y=_[0],J=_.pop();if(J!==Y){_[0]=J;e:for(var ge=0,y=_.length,w=y>>>1;ge<w;){var B=2*(ge+1)-1,H=_[B],k=B+1,ce=_[k];if(0>m(H,J))k<y&&0>m(ce,H)?(_[ge]=ce,_[k]=J,ge=k):(_[ge]=H,_[B]=J,ge=B);else if(k<y&&0>m(ce,J))_[ge]=ce,_[k]=J,ge=k;else break e}}return Y}function m(_,Y){var J=_.sortIndex-Y.sortIndex;return J!==0?J:_.id-Y.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;u.unstable_now=function(){return p.now()}}else{var z=Date,R=z.now();u.unstable_now=function(){return z.now()-R}}var b=[],h=[],M=1,U=null,C=3,W=!1,X=!1,Q=!1,Z=!1,q=typeof setTimeout=="function"?setTimeout:null,ue=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function xe(_){for(var Y=f(h);Y!==null;){if(Y.callback===null)o(h);else if(Y.startTime<=_)o(h),Y.sortIndex=Y.expirationTime,s(b,Y);else break;Y=f(h)}}function F(_){if(Q=!1,xe(_),!X)if(f(b)!==null)X=!0,we||(we=!0,Xe());else{var Y=f(h);Y!==null&&Qe(F,Y.startTime-_)}}var we=!1,je=-1,Ue=5,Ee=-1;function Ie(){return Z?!0:!(u.unstable_now()-Ee<Ue)}function st(){if(Z=!1,we){var _=u.unstable_now();Ee=_;var Y=!0;try{e:{X=!1,Q&&(Q=!1,ue(je),je=-1),W=!0;var J=C;try{t:{for(xe(_),U=f(b);U!==null&&!(U.expirationTime>_&&Ie());){var ge=U.callback;if(typeof ge=="function"){U.callback=null,C=U.priorityLevel;var y=ge(U.expirationTime<=_);if(_=u.unstable_now(),typeof y=="function"){U.callback=y,xe(_),Y=!0;break t}U===f(b)&&o(b),xe(_)}else o(b);U=f(b)}if(U!==null)Y=!0;else{var w=f(h);w!==null&&Qe(F,w.startTime-_),Y=!1}}break e}finally{U=null,C=J,W=!1}Y=void 0}}finally{Y?Xe():we=!1}}}var Xe;if(typeof I=="function")Xe=function(){I(st)};else if(typeof MessageChannel<"u"){var Ea=new MessageChannel,Na=Ea.port2;Ea.port1.onmessage=st,Xe=function(){Na.postMessage(null)}}else Xe=function(){q(st,0)};function Qe(_,Y){je=q(function(){_(u.unstable_now())},Y)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(_){_.callback=null},u.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ue=0<_?Math.floor(1e3/_):5},u.unstable_getCurrentPriorityLevel=function(){return C},u.unstable_next=function(_){switch(C){case 1:case 2:case 3:var Y=3;break;default:Y=C}var J=C;C=Y;try{return _()}finally{C=J}},u.unstable_requestPaint=function(){Z=!0},u.unstable_runWithPriority=function(_,Y){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var J=C;C=_;try{return Y()}finally{C=J}},u.unstable_scheduleCallback=function(_,Y,J){var ge=u.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ge+J:ge):J=ge,_){case 1:var y=-1;break;case 2:y=250;break;case 5:y=1073741823;break;case 4:y=1e4;break;default:y=5e3}return y=J+y,_={id:M++,callback:Y,priorityLevel:_,startTime:J,expirationTime:y,sortIndex:-1},J>ge?(_.sortIndex=J,s(h,_),f(b)===null&&_===f(h)&&(Q?(ue(je),je=-1):Q=!0,Qe(F,J-ge))):(_.sortIndex=y,s(b,_),X||W||(X=!0,we||(we=!0,Xe()))),_},u.unstable_shouldYield=Ie,u.unstable_wrapCallback=function(_){var Y=C;return function(){var J=C;C=Y;try{return _.apply(this,arguments)}finally{C=J}}}}(Sr)),Sr}var Od;function wh(){return Od||(Od=1,xr.exports=Dh()),xr.exports}var Er={exports:{}},Ve={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dd;function Uh(){if(Dd)return Ve;Dd=1;var u=Ar();function s(b){var h="https://react.dev/errors/"+b;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var M=2;M<arguments.length;M++)h+="&args[]="+encodeURIComponent(arguments[M])}return"Minified React error #"+b+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var o={d:{f,r:function(){throw Error(s(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},m=Symbol.for("react.portal");function p(b,h,M){var U=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:U==null?null:""+U,children:b,containerInfo:h,implementation:M}}var z=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function R(b,h){if(b==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Ve.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,Ve.createPortal=function(b,h){var M=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(s(299));return p(b,h,null,M)},Ve.flushSync=function(b){var h=z.T,M=o.p;try{if(z.T=null,o.p=2,b)return b()}finally{z.T=h,o.p=M,o.d.f()}},Ve.preconnect=function(b,h){typeof b=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,o.d.C(b,h))},Ve.prefetchDNS=function(b){typeof b=="string"&&o.d.D(b)},Ve.preinit=function(b,h){if(typeof b=="string"&&h&&typeof h.as=="string"){var M=h.as,U=R(M,h.crossOrigin),C=typeof h.integrity=="string"?h.integrity:void 0,W=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;M==="style"?o.d.S(b,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:U,integrity:C,fetchPriority:W}):M==="script"&&o.d.X(b,{crossOrigin:U,integrity:C,fetchPriority:W,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Ve.preinitModule=function(b,h){if(typeof b=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var M=R(h.as,h.crossOrigin);o.d.M(b,{crossOrigin:M,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&o.d.M(b)},Ve.preload=function(b,h){if(typeof b=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var M=h.as,U=R(M,h.crossOrigin);o.d.L(b,M,{crossOrigin:U,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Ve.preloadModule=function(b,h){if(typeof b=="string")if(h){var M=R(h.as,h.crossOrigin);o.d.m(b,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:M,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else o.d.m(b)},Ve.requestFormReset=function(b){o.d.r(b)},Ve.unstable_batchedUpdates=function(b,h){return b(h)},Ve.useFormState=function(b,h,M){return z.H.useFormState(b,h,M)},Ve.useFormStatus=function(){return z.H.useHostTransitionStatus()},Ve.version="19.1.1",Ve}var wd;function Ch(){if(wd)return Er.exports;wd=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(s){console.error(s)}}return u(),Er.exports=Uh(),Er.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ud;function Hh(){if(Ud)return Mn;Ud=1;var u=wh(),s=Ar(),f=Ch();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function z(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function R(e){if(p(e)!==e)throw Error(o(188))}function b(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(o(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return R(n),e;if(i===l)return R(n),t;i=i.sibling}throw Error(o(188))}if(a.return!==l.return)a=n,l=i;else{for(var c=!1,r=n.child;r;){if(r===a){c=!0,a=n,l=i;break}if(r===l){c=!0,l=n,a=i;break}r=r.sibling}if(!c){for(r=i.child;r;){if(r===a){c=!0,a=i,l=n;break}if(r===l){c=!0,l=i,a=n;break}r=r.sibling}if(!c)throw Error(o(189))}}if(a.alternate!==l)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?e:t}function h(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=h(e),t!==null)return t;e=e.sibling}return null}var M=Object.assign,U=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),W=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),Z=Symbol.for("react.profiler"),q=Symbol.for("react.provider"),ue=Symbol.for("react.consumer"),I=Symbol.for("react.context"),xe=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),we=Symbol.for("react.suspense_list"),je=Symbol.for("react.memo"),Ue=Symbol.for("react.lazy"),Ee=Symbol.for("react.activity"),Ie=Symbol.for("react.memo_cache_sentinel"),st=Symbol.iterator;function Xe(e){return e===null||typeof e!="object"?null:(e=st&&e[st]||e["@@iterator"],typeof e=="function"?e:null)}var Ea=Symbol.for("react.client.reference");function Na(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ea?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case X:return"Fragment";case Z:return"Profiler";case Q:return"StrictMode";case F:return"Suspense";case we:return"SuspenseList";case Ee:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case W:return"Portal";case I:return(e.displayName||"Context")+".Provider";case ue:return(e._context.displayName||"Context")+".Consumer";case xe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case je:return t=e.displayName||null,t!==null?t:Na(e.type)||"Memo";case Ue:t=e._payload,e=e._init;try{return Na(e(t))}catch{}}return null}var Qe=Array.isArray,_=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},ge=[],y=-1;function w(e){return{current:e}}function B(e){0>y||(e.current=ge[y],ge[y]=null,y--)}function H(e,t){y++,ge[y]=e.current,e.current=t}var k=w(null),ce=w(null),P=w(null),et=w(null);function ve(e,t){switch(H(P,t),H(ce,e),H(k,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ed(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=ed(t),e=td(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}B(k),H(k,e)}function Wt(){B(k),B(ce),B(P)}function au(e){e.memoizedState!==null&&H(et,e);var t=k.current,a=td(t,e.type);t!==a&&(H(ce,e),H(k,a))}function Un(e){ce.current===e&&(B(k),B(ce)),et.current===e&&(B(et),Sn._currentValue=J)}var lu=Object.prototype.hasOwnProperty,nu=u.unstable_scheduleCallback,iu=u.unstable_cancelCallback,u0=u.unstable_shouldYield,c0=u.unstable_requestPaint,Nt=u.unstable_now,r0=u.unstable_getCurrentPriorityLevel,Dr=u.unstable_ImmediatePriority,wr=u.unstable_UserBlockingPriority,Cn=u.unstable_NormalPriority,o0=u.unstable_LowPriority,Ur=u.unstable_IdlePriority,s0=u.log,f0=u.unstable_setDisableYieldValue,Rl=null,tt=null;function Ft(e){if(typeof s0=="function"&&f0(e),tt&&typeof tt.setStrictMode=="function")try{tt.setStrictMode(Rl,e)}catch{}}var at=Math.clz32?Math.clz32:h0,d0=Math.log,m0=Math.LN2;function h0(e){return e>>>=0,e===0?32:31-(d0(e)/m0|0)|0}var Hn=256,Yn=4194304;function Ta(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function qn(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var r=l&134217727;return r!==0?(l=r&~i,l!==0?n=Ta(l):(c&=r,c!==0?n=Ta(c):a||(a=r&~e,a!==0&&(n=Ta(a))))):(r=l&~i,r!==0?n=Ta(r):c!==0?n=Ta(c):a||(a=l&~e,a!==0&&(n=Ta(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function jl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function g0(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cr(){var e=Hn;return Hn<<=1,(Hn&4194048)===0&&(Hn=256),e}function Hr(){var e=Yn;return Yn<<=1,(Yn&62914560)===0&&(Yn=4194304),e}function uu(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function _l(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function p0(e,t,a,l,n,i){var c=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var r=e.entanglements,g=e.expirationTimes,E=e.hiddenUpdates;for(a=c&~a;0<a;){var j=31-at(a),D=1<<j;r[j]=0,g[j]=-1;var N=E[j];if(N!==null)for(E[j]=null,j=0;j<N.length;j++){var T=N[j];T!==null&&(T.lane&=-536870913)}a&=~D}l!==0&&Yr(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(c&~t))}function Yr(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-at(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&4194090}function qr(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-at(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function cu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ru(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Br(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:xd(e.type))}function y0(e,t){var a=Y.p;try{return Y.p=e,t()}finally{Y.p=a}}var Pt=Math.random().toString(36).slice(2),Ze="__reactFiber$"+Pt,Je="__reactProps$"+Pt,Xa="__reactContainer$"+Pt,ou="__reactEvents$"+Pt,v0="__reactListeners$"+Pt,b0="__reactHandles$"+Pt,Lr="__reactResources$"+Pt,Ol="__reactMarker$"+Pt;function su(e){delete e[Ze],delete e[Je],delete e[ou],delete e[v0],delete e[b0]}function Qa(e){var t=e[Ze];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Xa]||a[Ze]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=id(e);e!==null;){if(a=e[Ze])return a;e=id(e)}return t}e=a,a=e.parentNode}return null}function Za(e){if(e=e[Ze]||e[Xa]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Dl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function ka(e){var t=e[Lr];return t||(t=e[Lr]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ce(e){e[Ol]=!0}var Gr=new Set,Xr={};function za(e,t){Va(e,t),Va(e+"Capture",t)}function Va(e,t){for(Xr[e]=t,e=0;e<t.length;e++)Gr.add(t[e])}var x0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qr={},Zr={};function S0(e){return lu.call(Zr,e)?!0:lu.call(Qr,e)?!1:x0.test(e)?Zr[e]=!0:(Qr[e]=!0,!1)}function Bn(e,t,a){if(S0(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Ln(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Ot(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}var fu,kr;function Ka(e){if(fu===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);fu=t&&t[1]||"",kr=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+fu+e+kr}var du=!1;function mu(e,t){if(!e||du)return"";du=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var D=function(){throw Error()};if(Object.defineProperty(D.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(D,[])}catch(T){var N=T}Reflect.construct(e,[],D)}else{try{D.call()}catch(T){N=T}e.call(D.prototype)}}else{try{throw Error()}catch(T){N=T}(D=e())&&typeof D.catch=="function"&&D.catch(function(){})}}catch(T){if(T&&N&&typeof T.stack=="string")return[T.stack,N.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),c=i[0],r=i[1];if(c&&r){var g=c.split(`
`),E=r.split(`
`);for(n=l=0;l<g.length&&!g[l].includes("DetermineComponentFrameRoot");)l++;for(;n<E.length&&!E[n].includes("DetermineComponentFrameRoot");)n++;if(l===g.length||n===E.length)for(l=g.length-1,n=E.length-1;1<=l&&0<=n&&g[l]!==E[n];)n--;for(;1<=l&&0<=n;l--,n--)if(g[l]!==E[n]){if(l!==1||n!==1)do if(l--,n--,0>n||g[l]!==E[n]){var j=`
`+g[l].replace(" at new "," at ");return e.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",e.displayName)),j}while(1<=l&&0<=n);break}}}finally{du=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ka(a):""}function E0(e){switch(e.tag){case 26:case 27:case 5:return Ka(e.type);case 16:return Ka("Lazy");case 13:return Ka("Suspense");case 19:return Ka("SuspenseList");case 0:case 15:return mu(e.type,!1);case 11:return mu(e.type.render,!1);case 1:return mu(e.type,!0);case 31:return Ka("Activity");default:return""}}function Vr(e){try{var t="";do t+=E0(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ft(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Kr(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function N0(e){var t=Kr(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(c){l=""+c,i.call(this,c)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(c){l=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gn(e){e._valueTracker||(e._valueTracker=N0(e))}function Jr(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=Kr(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function Xn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var T0=/[\n"\\]/g;function dt(e){return e.replace(T0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function hu(e,t,a,l,n,i,c,r){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),t!=null?c==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ft(t)):e.value!==""+ft(t)&&(e.value=""+ft(t)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),t!=null?gu(e,c,ft(t)):a!=null?gu(e,c,ft(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.name=""+ft(r):e.removeAttribute("name")}function $r(e,t,a,l,n,i,c,r){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null))return;a=a!=null?""+ft(a):"",t=t!=null?""+ft(t):a,r||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=r?e.checked:!!l,e.defaultChecked=!!l,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c)}function gu(e,t,a){t==="number"&&Xn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ja(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+ft(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Wr(e,t,a){if(t!=null&&(t=""+ft(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+ft(a):""}function Fr(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(o(92));if(Qe(l)){if(1<l.length)throw Error(o(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=ft(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l)}function $a(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var z0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Pr(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||z0.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Ir(e,t,a){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&Pr(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&Pr(e,i,t[i])}function pu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var A0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),M0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Qn(e){return M0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var yu=null;function vu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wa=null,Fa=null;function eo(e){var t=Za(e);if(t&&(e=t.stateNode)){var a=e[Je]||null;e:switch(e=t.stateNode,t.type){case"input":if(hu(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+dt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[Je]||null;if(!n)throw Error(o(90));hu(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&Jr(l)}break e;case"textarea":Wr(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Ja(e,!!a.multiple,t,!1)}}}var bu=!1;function to(e,t,a){if(bu)return e(t,a);bu=!0;try{var l=e(t);return l}finally{if(bu=!1,(Wa!==null||Fa!==null)&&(Ri(),Wa&&(t=Wa,e=Fa,Fa=Wa=null,eo(t),e)))for(t=0;t<e.length;t++)eo(e[t])}}function wl(e,t){var a=e.stateNode;if(a===null)return null;var l=a[Je]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(o(231,t,typeof a));return a}var Dt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xu=!1;if(Dt)try{var Ul={};Object.defineProperty(Ul,"passive",{get:function(){xu=!0}}),window.addEventListener("test",Ul,Ul),window.removeEventListener("test",Ul,Ul)}catch{xu=!1}var It=null,Su=null,Zn=null;function ao(){if(Zn)return Zn;var e,t=Su,a=t.length,l,n="value"in It?It.value:It.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var c=a-e;for(l=1;l<=c&&t[a-l]===n[i-l];l++);return Zn=n.slice(e,1<l?1-l:void 0)}function kn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Vn(){return!0}function lo(){return!1}function $e(e){function t(a,l,n,i,c){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=c,this.currentTarget=null;for(var r in e)e.hasOwnProperty(r)&&(a=e[r],this[r]=a?a(i):i[r]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Vn:lo,this.isPropagationStopped=lo,this}return M(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Vn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Vn)},persist:function(){},isPersistent:Vn}),t}var Aa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kn=$e(Aa),Cl=M({},Aa,{view:0,detail:0}),R0=$e(Cl),Eu,Nu,Hl,Jn=M({},Cl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Hl&&(Hl&&e.type==="mousemove"?(Eu=e.screenX-Hl.screenX,Nu=e.screenY-Hl.screenY):Nu=Eu=0,Hl=e),Eu)},movementY:function(e){return"movementY"in e?e.movementY:Nu}}),no=$e(Jn),j0=M({},Jn,{dataTransfer:0}),_0=$e(j0),O0=M({},Cl,{relatedTarget:0}),Tu=$e(O0),D0=M({},Aa,{animationName:0,elapsedTime:0,pseudoElement:0}),w0=$e(D0),U0=M({},Aa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),C0=$e(U0),H0=M({},Aa,{data:0}),io=$e(H0),Y0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},q0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},B0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function L0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=B0[e])?!!t[e]:!1}function zu(){return L0}var G0=M({},Cl,{key:function(e){if(e.key){var t=Y0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=kn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?q0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zu,charCode:function(e){return e.type==="keypress"?kn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?kn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),X0=$e(G0),Q0=M({},Jn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),uo=$e(Q0),Z0=M({},Cl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zu}),k0=$e(Z0),V0=M({},Aa,{propertyName:0,elapsedTime:0,pseudoElement:0}),K0=$e(V0),J0=M({},Jn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$0=$e(J0),W0=M({},Aa,{newState:0,oldState:0}),F0=$e(W0),P0=[9,13,27,32],Au=Dt&&"CompositionEvent"in window,Yl=null;Dt&&"documentMode"in document&&(Yl=document.documentMode);var I0=Dt&&"TextEvent"in window&&!Yl,co=Dt&&(!Au||Yl&&8<Yl&&11>=Yl),ro=" ",oo=!1;function so(e,t){switch(e){case"keyup":return P0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pa=!1;function em(e,t){switch(e){case"compositionend":return fo(t);case"keypress":return t.which!==32?null:(oo=!0,ro);case"textInput":return e=t.data,e===ro&&oo?null:e;default:return null}}function tm(e,t){if(Pa)return e==="compositionend"||!Au&&so(e,t)?(e=ao(),Zn=Su=It=null,Pa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return co&&t.locale!=="ko"?null:t.data;default:return null}}var am={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!am[e.type]:t==="textarea"}function ho(e,t,a,l){Wa?Fa?Fa.push(l):Fa=[l]:Wa=l,t=Ui(t,"onChange"),0<t.length&&(a=new Kn("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var ql=null,Bl=null;function lm(e){$f(e,0)}function $n(e){var t=Dl(e);if(Jr(t))return e}function go(e,t){if(e==="change")return t}var po=!1;if(Dt){var Mu;if(Dt){var Ru="oninput"in document;if(!Ru){var yo=document.createElement("div");yo.setAttribute("oninput","return;"),Ru=typeof yo.oninput=="function"}Mu=Ru}else Mu=!1;po=Mu&&(!document.documentMode||9<document.documentMode)}function vo(){ql&&(ql.detachEvent("onpropertychange",bo),Bl=ql=null)}function bo(e){if(e.propertyName==="value"&&$n(Bl)){var t=[];ho(t,Bl,e,vu(e)),to(lm,t)}}function nm(e,t,a){e==="focusin"?(vo(),ql=t,Bl=a,ql.attachEvent("onpropertychange",bo)):e==="focusout"&&vo()}function im(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $n(Bl)}function um(e,t){if(e==="click")return $n(t)}function cm(e,t){if(e==="input"||e==="change")return $n(t)}function rm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var lt=typeof Object.is=="function"?Object.is:rm;function Ll(e,t){if(lt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!lu.call(t,n)||!lt(e[n],t[n]))return!1}return!0}function xo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function So(e,t){var a=xo(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=xo(a)}}function Eo(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Eo(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function No(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Xn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Xn(e.document)}return t}function ju(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var om=Dt&&"documentMode"in document&&11>=document.documentMode,Ia=null,_u=null,Gl=null,Ou=!1;function To(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ou||Ia==null||Ia!==Xn(l)||(l=Ia,"selectionStart"in l&&ju(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Gl&&Ll(Gl,l)||(Gl=l,l=Ui(_u,"onSelect"),0<l.length&&(t=new Kn("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=Ia)))}function Ma(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var el={animationend:Ma("Animation","AnimationEnd"),animationiteration:Ma("Animation","AnimationIteration"),animationstart:Ma("Animation","AnimationStart"),transitionrun:Ma("Transition","TransitionRun"),transitionstart:Ma("Transition","TransitionStart"),transitioncancel:Ma("Transition","TransitionCancel"),transitionend:Ma("Transition","TransitionEnd")},Du={},zo={};Dt&&(zo=document.createElement("div").style,"AnimationEvent"in window||(delete el.animationend.animation,delete el.animationiteration.animation,delete el.animationstart.animation),"TransitionEvent"in window||delete el.transitionend.transition);function Ra(e){if(Du[e])return Du[e];if(!el[e])return e;var t=el[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in zo)return Du[e]=t[a];return e}var Ao=Ra("animationend"),Mo=Ra("animationiteration"),Ro=Ra("animationstart"),sm=Ra("transitionrun"),fm=Ra("transitionstart"),dm=Ra("transitioncancel"),jo=Ra("transitionend"),_o=new Map,wu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");wu.push("scrollEnd");function xt(e,t){_o.set(e,t),za(t,[e])}var Oo=new WeakMap;function mt(e,t){if(typeof e=="object"&&e!==null){var a=Oo.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Vr(t)},Oo.set(e,t),t)}return{value:e,source:t,stack:Vr(t)}}var ht=[],tl=0,Uu=0;function Wn(){for(var e=tl,t=Uu=tl=0;t<e;){var a=ht[t];ht[t++]=null;var l=ht[t];ht[t++]=null;var n=ht[t];ht[t++]=null;var i=ht[t];if(ht[t++]=null,l!==null&&n!==null){var c=l.pending;c===null?n.next=n:(n.next=c.next,c.next=n),l.pending=n}i!==0&&Do(a,n,i)}}function Fn(e,t,a,l){ht[tl++]=e,ht[tl++]=t,ht[tl++]=a,ht[tl++]=l,Uu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Cu(e,t,a,l){return Fn(e,t,a,l),Pn(e)}function al(e,t){return Fn(e,null,null,t),Pn(e)}function Do(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-at(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function Pn(e){if(50<mn)throw mn=0,Gc=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ll={};function mm(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nt(e,t,a,l){return new mm(e,t,a,l)}function Hu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function wt(e,t){var a=e.alternate;return a===null?(a=nt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function wo(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function In(e,t,a,l,n,i){var c=0;if(l=e,typeof e=="function")Hu(e)&&(c=1);else if(typeof e=="string")c=gh(e,a,k.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ee:return e=nt(31,a,t,n),e.elementType=Ee,e.lanes=i,e;case X:return ja(a.children,n,i,t);case Q:c=8,n|=24;break;case Z:return e=nt(12,a,t,n|2),e.elementType=Z,e.lanes=i,e;case F:return e=nt(13,a,t,n),e.elementType=F,e.lanes=i,e;case we:return e=nt(19,a,t,n),e.elementType=we,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case q:case I:c=10;break e;case ue:c=9;break e;case xe:c=11;break e;case je:c=14;break e;case Ue:c=16,l=null;break e}c=29,a=Error(o(130,e===null?"null":typeof e,"")),l=null}return t=nt(c,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function ja(e,t,a,l){return e=nt(7,e,l,t),e.lanes=a,e}function Yu(e,t,a){return e=nt(6,e,null,t),e.lanes=a,e}function qu(e,t,a){return t=nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var nl=[],il=0,ei=null,ti=0,gt=[],pt=0,_a=null,Ut=1,Ct="";function Oa(e,t){nl[il++]=ti,nl[il++]=ei,ei=e,ti=t}function Uo(e,t,a){gt[pt++]=Ut,gt[pt++]=Ct,gt[pt++]=_a,_a=e;var l=Ut;e=Ct;var n=32-at(l)-1;l&=~(1<<n),a+=1;var i=32-at(t)+n;if(30<i){var c=n-n%5;i=(l&(1<<c)-1).toString(32),l>>=c,n-=c,Ut=1<<32-at(t)+n|a<<n|l,Ct=i+e}else Ut=1<<i|a<<n|l,Ct=e}function Bu(e){e.return!==null&&(Oa(e,1),Uo(e,1,0))}function Lu(e){for(;e===ei;)ei=nl[--il],nl[il]=null,ti=nl[--il],nl[il]=null;for(;e===_a;)_a=gt[--pt],gt[pt]=null,Ct=gt[--pt],gt[pt]=null,Ut=gt[--pt],gt[pt]=null}var Ke=null,Ne=null,oe=!1,Da=null,Tt=!1,Gu=Error(o(519));function wa(e){var t=Error(o(418,""));throw Zl(mt(t,e)),Gu}function Co(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Ze]=e,t[Je]=l,a){case"dialog":ne("cancel",t),ne("close",t);break;case"iframe":case"object":case"embed":ne("load",t);break;case"video":case"audio":for(a=0;a<gn.length;a++)ne(gn[a],t);break;case"source":ne("error",t);break;case"img":case"image":case"link":ne("error",t),ne("load",t);break;case"details":ne("toggle",t);break;case"input":ne("invalid",t),$r(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Gn(t);break;case"select":ne("invalid",t);break;case"textarea":ne("invalid",t),Fr(t,l.value,l.defaultValue,l.children),Gn(t)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||If(t.textContent,a)?(l.popover!=null&&(ne("beforetoggle",t),ne("toggle",t)),l.onScroll!=null&&ne("scroll",t),l.onScrollEnd!=null&&ne("scrollend",t),l.onClick!=null&&(t.onclick=Ci),t=!0):t=!1,t||wa(e)}function Ho(e){for(Ke=e.return;Ke;)switch(Ke.tag){case 5:case 13:Tt=!1;return;case 27:case 3:Tt=!0;return;default:Ke=Ke.return}}function Xl(e){if(e!==Ke)return!1;if(!oe)return Ho(e),oe=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||lr(e.type,e.memoizedProps)),a=!a),a&&Ne&&wa(e),Ho(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){Ne=Et(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}Ne=null}}else t===27?(t=Ne,ga(e.type)?(e=cr,cr=null,Ne=e):Ne=t):Ne=Ke?Et(e.stateNode.nextSibling):null;return!0}function Ql(){Ne=Ke=null,oe=!1}function Yo(){var e=Da;return e!==null&&(Pe===null?Pe=e:Pe.push.apply(Pe,e),Da=null),e}function Zl(e){Da===null?Da=[e]:Da.push(e)}var Xu=w(null),Ua=null,Ht=null;function ea(e,t,a){H(Xu,t._currentValue),t._currentValue=a}function Yt(e){e._currentValue=Xu.current,B(Xu)}function Qu(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function Zu(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var c=n.child;i=i.firstContext;e:for(;i!==null;){var r=i;i=n;for(var g=0;g<t.length;g++)if(r.context===t[g]){i.lanes|=a,r=i.alternate,r!==null&&(r.lanes|=a),Qu(i.return,a,e),l||(c=null);break e}i=r.next}}else if(n.tag===18){if(c=n.return,c===null)throw Error(o(341));c.lanes|=a,i=c.alternate,i!==null&&(i.lanes|=a),Qu(c,a,e),c=null}else c=n.child;if(c!==null)c.return=n;else for(c=n;c!==null;){if(c===e){c=null;break}if(n=c.sibling,n!==null){n.return=c.return,c=n;break}c=c.return}n=c}}function kl(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var c=n.alternate;if(c===null)throw Error(o(387));if(c=c.memoizedProps,c!==null){var r=n.type;lt(n.pendingProps.value,c.value)||(e!==null?e.push(r):e=[r])}}else if(n===et.current){if(c=n.alternate,c===null)throw Error(o(387));c.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Sn):e=[Sn])}n=n.return}e!==null&&Zu(t,e,a,l),t.flags|=262144}function ai(e){for(e=e.firstContext;e!==null;){if(!lt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ca(e){Ua=e,Ht=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ke(e){return qo(Ua,e)}function li(e,t){return Ua===null&&Ca(e),qo(e,t)}function qo(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Ht===null){if(e===null)throw Error(o(308));Ht=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ht=Ht.next=t;return a}var hm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},gm=u.unstable_scheduleCallback,pm=u.unstable_NormalPriority,_e={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ku(){return{controller:new hm,data:new Map,refCount:0}}function Vl(e){e.refCount--,e.refCount===0&&gm(pm,function(){e.controller.abort()})}var Kl=null,Vu=0,ul=0,cl=null;function ym(e,t){if(Kl===null){var a=Kl=[];Vu=0,ul=Jc(),cl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Vu++,t.then(Bo,Bo),t}function Bo(){if(--Vu===0&&Kl!==null){cl!==null&&(cl.status="fulfilled");var e=Kl;Kl=null,ul=0,cl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function vm(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var Lo=_.S;_.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&ym(e,t),Lo!==null&&Lo(e,t)};var Ha=w(null);function Ku(){var e=Ha.current;return e!==null?e:ye.pooledCache}function ni(e,t){t===null?H(Ha,Ha.current):H(Ha,t.pool)}function Go(){var e=Ku();return e===null?null:{parent:_e._currentValue,pool:e}}var Jl=Error(o(460)),Xo=Error(o(474)),ii=Error(o(542)),Ju={then:function(){}};function Qo(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ui(){}function Zo(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(ui,ui),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Vo(e),e;default:if(typeof t.status=="string")t.then(ui,ui);else{if(e=ye,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Vo(e),e}throw $l=t,Jl}}var $l=null;function ko(){if($l===null)throw Error(o(459));var e=$l;return $l=null,e}function Vo(e){if(e===Jl||e===ii)throw Error(o(483))}var ta=!1;function $u(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function aa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function la(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(se&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=Pn(e),Do(e,null,a),t}return Fn(e,l,t,a),Pn(e)}function Wl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,qr(e,a)}}function Fu(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var c={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=c:i=i.next=c,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Pu=!1;function Fl(){if(Pu){var e=cl;if(e!==null)throw e}}function Pl(e,t,a,l){Pu=!1;var n=e.updateQueue;ta=!1;var i=n.firstBaseUpdate,c=n.lastBaseUpdate,r=n.shared.pending;if(r!==null){n.shared.pending=null;var g=r,E=g.next;g.next=null,c===null?i=E:c.next=E,c=g;var j=e.alternate;j!==null&&(j=j.updateQueue,r=j.lastBaseUpdate,r!==c&&(r===null?j.firstBaseUpdate=E:r.next=E,j.lastBaseUpdate=g))}if(i!==null){var D=n.baseState;c=0,j=E=g=null,r=i;do{var N=r.lane&-536870913,T=N!==r.lane;if(T?(ie&N)===N:(l&N)===N){N!==0&&N===ul&&(Pu=!0),j!==null&&(j=j.next={lane:0,tag:r.tag,payload:r.payload,callback:null,next:null});e:{var $=e,V=r;N=t;var he=a;switch(V.tag){case 1:if($=V.payload,typeof $=="function"){D=$.call(he,D,N);break e}D=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=V.payload,N=typeof $=="function"?$.call(he,D,N):$,N==null)break e;D=M({},D,N);break e;case 2:ta=!0}}N=r.callback,N!==null&&(e.flags|=64,T&&(e.flags|=8192),T=n.callbacks,T===null?n.callbacks=[N]:T.push(N))}else T={lane:N,tag:r.tag,payload:r.payload,callback:r.callback,next:null},j===null?(E=j=T,g=D):j=j.next=T,c|=N;if(r=r.next,r===null){if(r=n.shared.pending,r===null)break;T=r,r=T.next,T.next=null,n.lastBaseUpdate=T,n.shared.pending=null}}while(!0);j===null&&(g=D),n.baseState=g,n.firstBaseUpdate=E,n.lastBaseUpdate=j,i===null&&(n.shared.lanes=0),fa|=c,e.lanes=c,e.memoizedState=D}}function Ko(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function Jo(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Ko(a[e],t)}var rl=w(null),ci=w(0);function $o(e,t){e=Zt,H(ci,e),H(rl,t),Zt=e|t.baseLanes}function Iu(){H(ci,Zt),H(rl,rl.current)}function ec(){Zt=ci.current,B(rl),B(ci)}var na=0,te=null,de=null,Me=null,ri=!1,ol=!1,Ya=!1,oi=0,Il=0,sl=null,bm=0;function ze(){throw Error(o(321))}function tc(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!lt(e[a],t[a]))return!1;return!0}function ac(e,t,a,l,n,i){return na=i,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_.H=e===null||e.memoizedState===null?Ds:ws,Ya=!1,i=a(l,n),Ya=!1,ol&&(i=Fo(t,a,l,n)),Wo(e),i}function Wo(e){_.H=gi;var t=de!==null&&de.next!==null;if(na=0,Me=de=te=null,ri=!1,Il=0,sl=null,t)throw Error(o(300));e===null||He||(e=e.dependencies,e!==null&&ai(e)&&(He=!0))}function Fo(e,t,a,l){te=e;var n=0;do{if(ol&&(sl=null),Il=0,ol=!1,25<=n)throw Error(o(301));if(n+=1,Me=de=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}_.H=Am,i=t(a,l)}while(ol);return i}function xm(){var e=_.H,t=e.useState()[0];return t=typeof t.then=="function"?en(t):t,e=e.useState()[0],(de!==null?de.memoizedState:null)!==e&&(te.flags|=1024),t}function lc(){var e=oi!==0;return oi=0,e}function nc(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function ic(e){if(ri){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ri=!1}na=0,Me=de=te=null,ol=!1,Il=oi=0,sl=null}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?te.memoizedState=Me=e:Me=Me.next=e,Me}function Re(){if(de===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=de.next;var t=Me===null?te.memoizedState:Me.next;if(t!==null)Me=t,de=e;else{if(e===null)throw te.alternate===null?Error(o(467)):Error(o(310));de=e,e={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},Me===null?te.memoizedState=Me=e:Me=Me.next=e}return Me}function uc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function en(e){var t=Il;return Il+=1,sl===null&&(sl=[]),e=Zo(sl,e,t),t=te,(Me===null?t.memoizedState:Me.next)===null&&(t=t.alternate,_.H=t===null||t.memoizedState===null?Ds:ws),e}function si(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return en(e);if(e.$$typeof===I)return ke(e)}throw Error(o(438,String(e)))}function cc(e){var t=null,a=te.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=te.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=uc(),te.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=Ie;return t.index++,a}function qt(e,t){return typeof t=="function"?t(e):t}function fi(e){var t=Re();return rc(t,de,e)}function rc(e,t,a){var l=e.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var c=n.next;n.next=i.next,i.next=c}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var r=c=null,g=null,E=t,j=!1;do{var D=E.lane&-536870913;if(D!==E.lane?(ie&D)===D:(na&D)===D){var N=E.revertLane;if(N===0)g!==null&&(g=g.next={lane:0,revertLane:0,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),D===ul&&(j=!0);else if((na&N)===N){E=E.next,N===ul&&(j=!0);continue}else D={lane:0,revertLane:E.revertLane,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},g===null?(r=g=D,c=i):g=g.next=D,te.lanes|=N,fa|=N;D=E.action,Ya&&a(i,D),i=E.hasEagerState?E.eagerState:a(i,D)}else N={lane:D,revertLane:E.revertLane,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},g===null?(r=g=N,c=i):g=g.next=N,te.lanes|=D,fa|=D;E=E.next}while(E!==null&&E!==t);if(g===null?c=i:g.next=r,!lt(i,e.memoizedState)&&(He=!0,j&&(a=cl,a!==null)))throw a;e.memoizedState=i,e.baseState=c,e.baseQueue=g,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function oc(e){var t=Re(),a=t.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var c=n=n.next;do i=e(i,c.action),c=c.next;while(c!==n);lt(i,t.memoizedState)||(He=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function Po(e,t,a){var l=te,n=Re(),i=oe;if(i){if(a===void 0)throw Error(o(407));a=a()}else a=t();var c=!lt((de||n).memoizedState,a);c&&(n.memoizedState=a,He=!0),n=n.queue;var r=ts.bind(null,l,n,e);if(tn(2048,8,r,[e]),n.getSnapshot!==t||c||Me!==null&&Me.memoizedState.tag&1){if(l.flags|=2048,fl(9,di(),es.bind(null,l,n,a,t),null),ye===null)throw Error(o(349));i||(na&124)!==0||Io(l,t,a)}return a}function Io(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=te.updateQueue,t===null?(t=uc(),te.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function es(e,t,a,l){t.value=a,t.getSnapshot=l,as(t)&&ls(e)}function ts(e,t,a){return a(function(){as(t)&&ls(e)})}function as(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!lt(e,a)}catch{return!0}}function ls(e){var t=al(e,2);t!==null&&ot(t,e,2)}function sc(e){var t=We();if(typeof e=="function"){var a=e;if(e=a(),Ya){Ft(!0);try{a()}finally{Ft(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qt,lastRenderedState:e},t}function ns(e,t,a,l){return e.baseState=a,rc(e,de,typeof l=="function"?l:qt)}function Sm(e,t,a,l,n){if(hi(e))throw Error(o(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){i.listeners.push(c)}};_.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,is(t,i)):(i.next=a.next,t.pending=a.next=i)}}function is(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=_.T,c={};_.T=c;try{var r=a(n,l),g=_.S;g!==null&&g(c,r),us(e,t,r)}catch(E){fc(e,t,E)}finally{_.T=i}}else try{i=a(n,l),us(e,t,i)}catch(E){fc(e,t,E)}}function us(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){cs(e,t,l)},function(l){return fc(e,t,l)}):cs(e,t,a)}function cs(e,t,a){t.status="fulfilled",t.value=a,rs(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,is(e,a)))}function fc(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,rs(t),t=t.next;while(t!==l)}e.action=null}function rs(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function os(e,t){return t}function ss(e,t){if(oe){var a=ye.formState;if(a!==null){e:{var l=te;if(oe){if(Ne){t:{for(var n=Ne,i=Tt;n.nodeType!==8;){if(!i){n=null;break t}if(n=Et(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Ne=Et(n.nextSibling),l=n.data==="F!";break e}}wa(l)}l=!1}l&&(t=a[0])}}return a=We(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:os,lastRenderedState:t},a.queue=l,a=js.bind(null,te,l),l.dispatch=a,l=sc(!1),i=pc.bind(null,te,!1,l.queue),l=We(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=Sm.bind(null,te,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function fs(e){var t=Re();return ds(t,de,e)}function ds(e,t,a){if(t=rc(e,t,os)[0],e=fi(qt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=en(t)}catch(c){throw c===Jl?ii:c}else l=t;t=Re();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(te.flags|=2048,fl(9,di(),Em.bind(null,n,a),null)),[l,i,e]}function Em(e,t){e.action=t}function ms(e){var t=Re(),a=de;if(a!==null)return ds(t,a,e);Re(),t=t.memoizedState,a=Re();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function fl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=te.updateQueue,t===null&&(t=uc(),te.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function di(){return{destroy:void 0,resource:void 0}}function hs(){return Re().memoizedState}function mi(e,t,a,l){var n=We();l=l===void 0?null:l,te.flags|=e,n.memoizedState=fl(1|t,di(),a,l)}function tn(e,t,a,l){var n=Re();l=l===void 0?null:l;var i=n.memoizedState.inst;de!==null&&l!==null&&tc(l,de.memoizedState.deps)?n.memoizedState=fl(t,i,a,l):(te.flags|=e,n.memoizedState=fl(1|t,i,a,l))}function gs(e,t){mi(8390656,8,e,t)}function ps(e,t){tn(2048,8,e,t)}function ys(e,t){return tn(4,2,e,t)}function vs(e,t){return tn(4,4,e,t)}function bs(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xs(e,t,a){a=a!=null?a.concat([e]):null,tn(4,4,bs.bind(null,t,e),a)}function dc(){}function Ss(e,t){var a=Re();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&tc(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function Es(e,t){var a=Re();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&tc(t,l[1]))return l[0];if(l=e(),Ya){Ft(!0);try{e()}finally{Ft(!1)}}return a.memoizedState=[l,t],l}function mc(e,t,a){return a===void 0||(na&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=Af(),te.lanes|=e,fa|=e,a)}function Ns(e,t,a,l){return lt(a,t)?a:rl.current!==null?(e=mc(e,a,l),lt(e,t)||(He=!0),e):(na&42)===0?(He=!0,e.memoizedState=a):(e=Af(),te.lanes|=e,fa|=e,t)}function Ts(e,t,a,l,n){var i=Y.p;Y.p=i!==0&&8>i?i:8;var c=_.T,r={};_.T=r,pc(e,!1,t,a);try{var g=n(),E=_.S;if(E!==null&&E(r,g),g!==null&&typeof g=="object"&&typeof g.then=="function"){var j=vm(g,l);an(e,t,j,rt(e))}else an(e,t,l,rt(e))}catch(D){an(e,t,{then:function(){},status:"rejected",reason:D},rt())}finally{Y.p=i,_.T=c}}function Nm(){}function hc(e,t,a,l){if(e.tag!==5)throw Error(o(476));var n=zs(e).queue;Ts(e,n,t,J,a===null?Nm:function(){return As(e),a(l)})}function zs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qt,lastRenderedState:J},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function As(e){var t=zs(e).next.queue;an(e,t,{},rt())}function gc(){return ke(Sn)}function Ms(){return Re().memoizedState}function Rs(){return Re().memoizedState}function Tm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=rt();e=aa(a);var l=la(t,e,a);l!==null&&(ot(l,t,a),Wl(l,t,a)),t={cache:ku()},e.payload=t;return}t=t.return}}function zm(e,t,a){var l=rt();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},hi(e)?_s(t,a):(a=Cu(e,t,a,l),a!==null&&(ot(a,e,l),Os(a,t,l)))}function js(e,t,a){var l=rt();an(e,t,a,l)}function an(e,t,a,l){var n={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(hi(e))_s(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var c=t.lastRenderedState,r=i(c,a);if(n.hasEagerState=!0,n.eagerState=r,lt(r,c))return Fn(e,t,n,0),ye===null&&Wn(),!1}catch{}finally{}if(a=Cu(e,t,n,l),a!==null)return ot(a,e,l),Os(a,t,l),!0}return!1}function pc(e,t,a,l){if(l={lane:2,revertLane:Jc(),action:l,hasEagerState:!1,eagerState:null,next:null},hi(e)){if(t)throw Error(o(479))}else t=Cu(e,a,l,2),t!==null&&ot(t,e,2)}function hi(e){var t=e.alternate;return e===te||t!==null&&t===te}function _s(e,t){ol=ri=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Os(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,qr(e,a)}}var gi={readContext:ke,use:si,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useLayoutEffect:ze,useInsertionEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useSyncExternalStore:ze,useId:ze,useHostTransitionStatus:ze,useFormState:ze,useActionState:ze,useOptimistic:ze,useMemoCache:ze,useCacheRefresh:ze},Ds={readContext:ke,use:si,useCallback:function(e,t){return We().memoizedState=[e,t===void 0?null:t],e},useContext:ke,useEffect:gs,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,mi(4194308,4,bs.bind(null,t,e),a)},useLayoutEffect:function(e,t){return mi(4194308,4,e,t)},useInsertionEffect:function(e,t){mi(4,2,e,t)},useMemo:function(e,t){var a=We();t=t===void 0?null:t;var l=e();if(Ya){Ft(!0);try{e()}finally{Ft(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=We();if(a!==void 0){var n=a(t);if(Ya){Ft(!0);try{a(t)}finally{Ft(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=zm.bind(null,te,e),[l.memoizedState,e]},useRef:function(e){var t=We();return e={current:e},t.memoizedState=e},useState:function(e){e=sc(e);var t=e.queue,a=js.bind(null,te,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:dc,useDeferredValue:function(e,t){var a=We();return mc(a,e,t)},useTransition:function(){var e=sc(!1);return e=Ts.bind(null,te,e.queue,!0,!1),We().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=te,n=We();if(oe){if(a===void 0)throw Error(o(407));a=a()}else{if(a=t(),ye===null)throw Error(o(349));(ie&124)!==0||Io(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,gs(ts.bind(null,l,i,e),[e]),l.flags|=2048,fl(9,di(),es.bind(null,l,i,a,t),null),a},useId:function(){var e=We(),t=ye.identifierPrefix;if(oe){var a=Ct,l=Ut;a=(l&~(1<<32-at(l)-1)).toString(32)+a,t="«"+t+"R"+a,a=oi++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=bm++,t="«"+t+"r"+a.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:gc,useFormState:ss,useActionState:ss,useOptimistic:function(e){var t=We();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=pc.bind(null,te,!0,a),a.dispatch=t,[e,t]},useMemoCache:cc,useCacheRefresh:function(){return We().memoizedState=Tm.bind(null,te)}},ws={readContext:ke,use:si,useCallback:Ss,useContext:ke,useEffect:ps,useImperativeHandle:xs,useInsertionEffect:ys,useLayoutEffect:vs,useMemo:Es,useReducer:fi,useRef:hs,useState:function(){return fi(qt)},useDebugValue:dc,useDeferredValue:function(e,t){var a=Re();return Ns(a,de.memoizedState,e,t)},useTransition:function(){var e=fi(qt)[0],t=Re().memoizedState;return[typeof e=="boolean"?e:en(e),t]},useSyncExternalStore:Po,useId:Ms,useHostTransitionStatus:gc,useFormState:fs,useActionState:fs,useOptimistic:function(e,t){var a=Re();return ns(a,de,e,t)},useMemoCache:cc,useCacheRefresh:Rs},Am={readContext:ke,use:si,useCallback:Ss,useContext:ke,useEffect:ps,useImperativeHandle:xs,useInsertionEffect:ys,useLayoutEffect:vs,useMemo:Es,useReducer:oc,useRef:hs,useState:function(){return oc(qt)},useDebugValue:dc,useDeferredValue:function(e,t){var a=Re();return de===null?mc(a,e,t):Ns(a,de.memoizedState,e,t)},useTransition:function(){var e=oc(qt)[0],t=Re().memoizedState;return[typeof e=="boolean"?e:en(e),t]},useSyncExternalStore:Po,useId:Ms,useHostTransitionStatus:gc,useFormState:ms,useActionState:ms,useOptimistic:function(e,t){var a=Re();return de!==null?ns(a,de,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:cc,useCacheRefresh:Rs},dl=null,ln=0;function pi(e){var t=ln;return ln+=1,dl===null&&(dl=[]),Zo(dl,e,t)}function nn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function yi(e,t){throw t.$$typeof===U?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Us(e){var t=e._init;return t(e._payload)}function Cs(e){function t(x,v){if(e){var S=x.deletions;S===null?(x.deletions=[v],x.flags|=16):S.push(v)}}function a(x,v){if(!e)return null;for(;v!==null;)t(x,v),v=v.sibling;return null}function l(x){for(var v=new Map;x!==null;)x.key!==null?v.set(x.key,x):v.set(x.index,x),x=x.sibling;return v}function n(x,v){return x=wt(x,v),x.index=0,x.sibling=null,x}function i(x,v,S){return x.index=S,e?(S=x.alternate,S!==null?(S=S.index,S<v?(x.flags|=67108866,v):S):(x.flags|=67108866,v)):(x.flags|=1048576,v)}function c(x){return e&&x.alternate===null&&(x.flags|=67108866),x}function r(x,v,S,O){return v===null||v.tag!==6?(v=Yu(S,x.mode,O),v.return=x,v):(v=n(v,S),v.return=x,v)}function g(x,v,S,O){var L=S.type;return L===X?j(x,v,S.props.children,O,S.key):v!==null&&(v.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Ue&&Us(L)===v.type)?(v=n(v,S.props),nn(v,S),v.return=x,v):(v=In(S.type,S.key,S.props,null,x.mode,O),nn(v,S),v.return=x,v)}function E(x,v,S,O){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=qu(S,x.mode,O),v.return=x,v):(v=n(v,S.children||[]),v.return=x,v)}function j(x,v,S,O,L){return v===null||v.tag!==7?(v=ja(S,x.mode,O,L),v.return=x,v):(v=n(v,S),v.return=x,v)}function D(x,v,S){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=Yu(""+v,x.mode,S),v.return=x,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case C:return S=In(v.type,v.key,v.props,null,x.mode,S),nn(S,v),S.return=x,S;case W:return v=qu(v,x.mode,S),v.return=x,v;case Ue:var O=v._init;return v=O(v._payload),D(x,v,S)}if(Qe(v)||Xe(v))return v=ja(v,x.mode,S,null),v.return=x,v;if(typeof v.then=="function")return D(x,pi(v),S);if(v.$$typeof===I)return D(x,li(x,v),S);yi(x,v)}return null}function N(x,v,S,O){var L=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return L!==null?null:r(x,v,""+S,O);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case C:return S.key===L?g(x,v,S,O):null;case W:return S.key===L?E(x,v,S,O):null;case Ue:return L=S._init,S=L(S._payload),N(x,v,S,O)}if(Qe(S)||Xe(S))return L!==null?null:j(x,v,S,O,null);if(typeof S.then=="function")return N(x,v,pi(S),O);if(S.$$typeof===I)return N(x,v,li(x,S),O);yi(x,S)}return null}function T(x,v,S,O,L){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return x=x.get(S)||null,r(v,x,""+O,L);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case C:return x=x.get(O.key===null?S:O.key)||null,g(v,x,O,L);case W:return x=x.get(O.key===null?S:O.key)||null,E(v,x,O,L);case Ue:var ae=O._init;return O=ae(O._payload),T(x,v,S,O,L)}if(Qe(O)||Xe(O))return x=x.get(S)||null,j(v,x,O,L,null);if(typeof O.then=="function")return T(x,v,S,pi(O),L);if(O.$$typeof===I)return T(x,v,S,li(v,O),L);yi(v,O)}return null}function $(x,v,S,O){for(var L=null,ae=null,G=v,K=v=0,qe=null;G!==null&&K<S.length;K++){G.index>K?(qe=G,G=null):qe=G.sibling;var re=N(x,G,S[K],O);if(re===null){G===null&&(G=qe);break}e&&G&&re.alternate===null&&t(x,G),v=i(re,v,K),ae===null?L=re:ae.sibling=re,ae=re,G=qe}if(K===S.length)return a(x,G),oe&&Oa(x,K),L;if(G===null){for(;K<S.length;K++)G=D(x,S[K],O),G!==null&&(v=i(G,v,K),ae===null?L=G:ae.sibling=G,ae=G);return oe&&Oa(x,K),L}for(G=l(G);K<S.length;K++)qe=T(G,x,K,S[K],O),qe!==null&&(e&&qe.alternate!==null&&G.delete(qe.key===null?K:qe.key),v=i(qe,v,K),ae===null?L=qe:ae.sibling=qe,ae=qe);return e&&G.forEach(function(xa){return t(x,xa)}),oe&&Oa(x,K),L}function V(x,v,S,O){if(S==null)throw Error(o(151));for(var L=null,ae=null,G=v,K=v=0,qe=null,re=S.next();G!==null&&!re.done;K++,re=S.next()){G.index>K?(qe=G,G=null):qe=G.sibling;var xa=N(x,G,re.value,O);if(xa===null){G===null&&(G=qe);break}e&&G&&xa.alternate===null&&t(x,G),v=i(xa,v,K),ae===null?L=xa:ae.sibling=xa,ae=xa,G=qe}if(re.done)return a(x,G),oe&&Oa(x,K),L;if(G===null){for(;!re.done;K++,re=S.next())re=D(x,re.value,O),re!==null&&(v=i(re,v,K),ae===null?L=re:ae.sibling=re,ae=re);return oe&&Oa(x,K),L}for(G=l(G);!re.done;K++,re=S.next())re=T(G,x,K,re.value,O),re!==null&&(e&&re.alternate!==null&&G.delete(re.key===null?K:re.key),v=i(re,v,K),ae===null?L=re:ae.sibling=re,ae=re);return e&&G.forEach(function(Mh){return t(x,Mh)}),oe&&Oa(x,K),L}function he(x,v,S,O){if(typeof S=="object"&&S!==null&&S.type===X&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case C:e:{for(var L=S.key;v!==null;){if(v.key===L){if(L=S.type,L===X){if(v.tag===7){a(x,v.sibling),O=n(v,S.props.children),O.return=x,x=O;break e}}else if(v.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Ue&&Us(L)===v.type){a(x,v.sibling),O=n(v,S.props),nn(O,S),O.return=x,x=O;break e}a(x,v);break}else t(x,v);v=v.sibling}S.type===X?(O=ja(S.props.children,x.mode,O,S.key),O.return=x,x=O):(O=In(S.type,S.key,S.props,null,x.mode,O),nn(O,S),O.return=x,x=O)}return c(x);case W:e:{for(L=S.key;v!==null;){if(v.key===L)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){a(x,v.sibling),O=n(v,S.children||[]),O.return=x,x=O;break e}else{a(x,v);break}else t(x,v);v=v.sibling}O=qu(S,x.mode,O),O.return=x,x=O}return c(x);case Ue:return L=S._init,S=L(S._payload),he(x,v,S,O)}if(Qe(S))return $(x,v,S,O);if(Xe(S)){if(L=Xe(S),typeof L!="function")throw Error(o(150));return S=L.call(S),V(x,v,S,O)}if(typeof S.then=="function")return he(x,v,pi(S),O);if(S.$$typeof===I)return he(x,v,li(x,S),O);yi(x,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,v!==null&&v.tag===6?(a(x,v.sibling),O=n(v,S),O.return=x,x=O):(a(x,v),O=Yu(S,x.mode,O),O.return=x,x=O),c(x)):a(x,v)}return function(x,v,S,O){try{ln=0;var L=he(x,v,S,O);return dl=null,L}catch(G){if(G===Jl||G===ii)throw G;var ae=nt(29,G,null,x.mode);return ae.lanes=O,ae.return=x,ae}finally{}}}var ml=Cs(!0),Hs=Cs(!1),yt=w(null),zt=null;function ia(e){var t=e.alternate;H(Oe,Oe.current&1),H(yt,e),zt===null&&(t===null||rl.current!==null||t.memoizedState!==null)&&(zt=e)}function Ys(e){if(e.tag===22){if(H(Oe,Oe.current),H(yt,e),zt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(zt=e)}}else ua()}function ua(){H(Oe,Oe.current),H(yt,yt.current)}function Bt(e){B(yt),zt===e&&(zt=null),B(Oe)}var Oe=w(0);function vi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||ur(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function yc(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:M({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var vc={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=rt(),n=aa(l);n.payload=t,a!=null&&(n.callback=a),t=la(e,n,l),t!==null&&(ot(t,e,l),Wl(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=rt(),n=aa(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=la(e,n,l),t!==null&&(ot(t,e,l),Wl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=rt(),l=aa(a);l.tag=2,t!=null&&(l.callback=t),t=la(e,l,a),t!==null&&(ot(t,e,a),Wl(t,e,a))}};function qs(e,t,a,l,n,i,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,c):t.prototype&&t.prototype.isPureReactComponent?!Ll(a,l)||!Ll(n,i):!0}function Bs(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&vc.enqueueReplaceState(t,t.state,null)}function qa(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=M({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}var bi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Ls(e){bi(e)}function Gs(e){console.error(e)}function Xs(e){bi(e)}function xi(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Qs(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function bc(e,t,a){return a=aa(a),a.tag=3,a.payload={element:null},a.callback=function(){xi(e,t)},a}function Zs(e){return e=aa(e),e.tag=3,e}function ks(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){Qs(t,a,l)}}var c=a.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){Qs(t,a,l),typeof n!="function"&&(da===null?da=new Set([this]):da.add(this));var r=l.stack;this.componentDidCatch(l.value,{componentStack:r!==null?r:""})})}function Mm(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&kl(t,a,n,!0),a=yt.current,a!==null){switch(a.tag){case 13:return zt===null?Qc():a.alternate===null&&Te===0&&(Te=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===Ju?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),kc(e,l,n)),!1;case 22:return a.flags|=65536,l===Ju?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),kc(e,l,n)),!1}throw Error(o(435,a.tag))}return kc(e,l,n),Qc(),!1}if(oe)return t=yt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==Gu&&(e=Error(o(422),{cause:l}),Zl(mt(e,a)))):(l!==Gu&&(t=Error(o(423),{cause:l}),Zl(mt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=mt(l,a),n=bc(e.stateNode,l,n),Fu(e,n),Te!==4&&(Te=2)),!1;var i=Error(o(520),{cause:l});if(i=mt(i,a),dn===null?dn=[i]:dn.push(i),Te!==4&&(Te=2),t===null)return!0;l=mt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=bc(a.stateNode,l,e),Fu(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(da===null||!da.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Zs(n),ks(n,e,a,l),Fu(a,n),!1}a=a.return}while(a!==null);return!1}var Vs=Error(o(461)),He=!1;function Be(e,t,a,l){t.child=e===null?Hs(t,null,a,l):ml(t,e.child,a,l)}function Ks(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var c={};for(var r in l)r!=="ref"&&(c[r]=l[r])}else c=l;return Ca(t),l=ac(e,t,a,c,i,n),r=lc(),e!==null&&!He?(nc(e,t,n),Lt(e,t,n)):(oe&&r&&Bu(t),t.flags|=1,Be(e,t,l,n),t.child)}function Js(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!Hu(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,$s(e,t,i,l,n)):(e=In(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Mc(e,n)){var c=i.memoizedProps;if(a=a.compare,a=a!==null?a:Ll,a(c,l)&&e.ref===t.ref)return Lt(e,t,n)}return t.flags|=1,e=wt(i,l),e.ref=t.ref,e.return=t,t.child=e}function $s(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(Ll(i,l)&&e.ref===t.ref)if(He=!1,t.pendingProps=l=i,Mc(e,n))(e.flags&131072)!==0&&(He=!0);else return t.lanes=e.lanes,Lt(e,t,n)}return xc(e,t,a,l,n)}function Ws(e,t,a){var l=t.pendingProps,n=l.children,i=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((t.flags&128)!==0){if(l=i!==null?i.baseLanes|a:a,e!==null){for(n=t.child=e.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;t.childLanes=i&~l}else t.childLanes=0,t.child=null;return Fs(e,t,l,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ni(t,i!==null?i.cachePool:null),i!==null?$o(t,i):Iu(),Ys(t);else return t.lanes=t.childLanes=536870912,Fs(e,t,i!==null?i.baseLanes|a:a,a)}else i!==null?(ni(t,i.cachePool),$o(t,i),ua(),t.memoizedState=null):(e!==null&&ni(t,null),Iu(),ua());return Be(e,t,n,a),t.child}function Fs(e,t,a,l){var n=Ku();return n=n===null?null:{parent:_e._currentValue,pool:n},t.memoizedState={baseLanes:a,cachePool:n},e!==null&&ni(t,null),Iu(),Ys(t),e!==null&&kl(e,t,l,!0),null}function Si(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function xc(e,t,a,l,n){return Ca(t),a=ac(e,t,a,l,void 0,n),l=lc(),e!==null&&!He?(nc(e,t,n),Lt(e,t,n)):(oe&&l&&Bu(t),t.flags|=1,Be(e,t,a,n),t.child)}function Ps(e,t,a,l,n,i){return Ca(t),t.updateQueue=null,a=Fo(t,l,a,n),Wo(e),l=lc(),e!==null&&!He?(nc(e,t,i),Lt(e,t,i)):(oe&&l&&Bu(t),t.flags|=1,Be(e,t,a,i),t.child)}function Is(e,t,a,l,n){if(Ca(t),t.stateNode===null){var i=ll,c=a.contextType;typeof c=="object"&&c!==null&&(i=ke(c)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=vc,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},$u(t),c=a.contextType,i.context=typeof c=="object"&&c!==null?ke(c):ll,i.state=t.memoizedState,c=a.getDerivedStateFromProps,typeof c=="function"&&(yc(t,a,c,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(c=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),c!==i.state&&vc.enqueueReplaceState(i,i.state,null),Pl(t,l,i,n),Fl(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var r=t.memoizedProps,g=qa(a,r);i.props=g;var E=i.context,j=a.contextType;c=ll,typeof j=="object"&&j!==null&&(c=ke(j));var D=a.getDerivedStateFromProps;j=typeof D=="function"||typeof i.getSnapshotBeforeUpdate=="function",r=t.pendingProps!==r,j||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r||E!==c)&&Bs(t,i,l,c),ta=!1;var N=t.memoizedState;i.state=N,Pl(t,l,i,n),Fl(),E=t.memoizedState,r||N!==E||ta?(typeof D=="function"&&(yc(t,a,D,l),E=t.memoizedState),(g=ta||qs(t,a,g,l,N,E,c))?(j||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=E),i.props=l,i.state=E,i.context=c,l=g):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,Wu(e,t),c=t.memoizedProps,j=qa(a,c),i.props=j,D=t.pendingProps,N=i.context,E=a.contextType,g=ll,typeof E=="object"&&E!==null&&(g=ke(E)),r=a.getDerivedStateFromProps,(E=typeof r=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c!==D||N!==g)&&Bs(t,i,l,g),ta=!1,N=t.memoizedState,i.state=N,Pl(t,l,i,n),Fl();var T=t.memoizedState;c!==D||N!==T||ta||e!==null&&e.dependencies!==null&&ai(e.dependencies)?(typeof r=="function"&&(yc(t,a,r,l),T=t.memoizedState),(j=ta||qs(t,a,j,l,N,T,g)||e!==null&&e.dependencies!==null&&ai(e.dependencies))?(E||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,T,g),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,T,g)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=T),i.props=l,i.state=T,i.context=g,l=j):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,Si(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=ml(t,e.child,null,n),t.child=ml(t,null,a,n)):Be(e,t,a,n),t.memoizedState=i.state,e=t.child):e=Lt(e,t,n),e}function ef(e,t,a,l){return Ql(),t.flags|=256,Be(e,t,a,l),t.child}var Sc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ec(e){return{baseLanes:e,cachePool:Go()}}function Nc(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=vt),e}function tf(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,c;if((c=i)||(c=e!==null&&e.memoizedState===null?!1:(Oe.current&2)!==0),c&&(n=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,e===null){if(oe){if(n?ia(t):ua(),oe){var r=Ne,g;if(g=r){e:{for(g=r,r=Tt;g.nodeType!==8;){if(!r){r=null;break e}if(g=Et(g.nextSibling),g===null){r=null;break e}}r=g}r!==null?(t.memoizedState={dehydrated:r,treeContext:_a!==null?{id:Ut,overflow:Ct}:null,retryLane:536870912,hydrationErrors:null},g=nt(18,null,null,0),g.stateNode=r,g.return=t,t.child=g,Ke=t,Ne=null,g=!0):g=!1}g||wa(t)}if(r=t.memoizedState,r!==null&&(r=r.dehydrated,r!==null))return ur(r)?t.lanes=32:t.lanes=536870912,null;Bt(t)}return r=l.children,l=l.fallback,n?(ua(),n=t.mode,r=Ei({mode:"hidden",children:r},n),l=ja(l,n,a,null),r.return=t,l.return=t,r.sibling=l,t.child=r,n=t.child,n.memoizedState=Ec(a),n.childLanes=Nc(e,c,a),t.memoizedState=Sc,l):(ia(t),Tc(t,r))}if(g=e.memoizedState,g!==null&&(r=g.dehydrated,r!==null)){if(i)t.flags&256?(ia(t),t.flags&=-257,t=zc(e,t,a)):t.memoizedState!==null?(ua(),t.child=e.child,t.flags|=128,t=null):(ua(),n=l.fallback,r=t.mode,l=Ei({mode:"visible",children:l.children},r),n=ja(n,r,a,null),n.flags|=2,l.return=t,n.return=t,l.sibling=n,t.child=l,ml(t,e.child,null,a),l=t.child,l.memoizedState=Ec(a),l.childLanes=Nc(e,c,a),t.memoizedState=Sc,t=n);else if(ia(t),ur(r)){if(c=r.nextSibling&&r.nextSibling.dataset,c)var E=c.dgst;c=E,l=Error(o(419)),l.stack="",l.digest=c,Zl({value:l,source:null,stack:null}),t=zc(e,t,a)}else if(He||kl(e,t,a,!1),c=(a&e.childLanes)!==0,He||c){if(c=ye,c!==null&&(l=a&-a,l=(l&42)!==0?1:cu(l),l=(l&(c.suspendedLanes|a))!==0?0:l,l!==0&&l!==g.retryLane))throw g.retryLane=l,al(e,l),ot(c,e,l),Vs;r.data==="$?"||Qc(),t=zc(e,t,a)}else r.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=g.treeContext,Ne=Et(r.nextSibling),Ke=t,oe=!0,Da=null,Tt=!1,e!==null&&(gt[pt++]=Ut,gt[pt++]=Ct,gt[pt++]=_a,Ut=e.id,Ct=e.overflow,_a=t),t=Tc(t,l.children),t.flags|=4096);return t}return n?(ua(),n=l.fallback,r=t.mode,g=e.child,E=g.sibling,l=wt(g,{mode:"hidden",children:l.children}),l.subtreeFlags=g.subtreeFlags&65011712,E!==null?n=wt(E,n):(n=ja(n,r,a,null),n.flags|=2),n.return=t,l.return=t,l.sibling=n,t.child=l,l=n,n=t.child,r=e.child.memoizedState,r===null?r=Ec(a):(g=r.cachePool,g!==null?(E=_e._currentValue,g=g.parent!==E?{parent:E,pool:E}:g):g=Go(),r={baseLanes:r.baseLanes|a,cachePool:g}),n.memoizedState=r,n.childLanes=Nc(e,c,a),t.memoizedState=Sc,l):(ia(t),a=e.child,e=a.sibling,a=wt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(c=t.deletions,c===null?(t.deletions=[e],t.flags|=16):c.push(e)),t.child=a,t.memoizedState=null,a)}function Tc(e,t){return t=Ei({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ei(e,t){return e=nt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function zc(e,t,a){return ml(t,e.child,null,a),e=Tc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function af(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Qu(e.return,t,a)}function Ac(e,t,a,l,n){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=l,i.tail=a,i.tailMode=n)}function lf(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;if(Be(e,t,l.children,a),l=Oe.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&af(e,a,t);else if(e.tag===19)af(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(H(Oe,l),n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&vi(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),Ac(t,!1,n,a,i);break;case"backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&vi(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}Ac(t,!0,a,null,i);break;case"together":Ac(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Lt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),fa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(kl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,a=wt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=wt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Mc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ai(e)))}function Rm(e,t,a){switch(t.tag){case 3:ve(t,t.stateNode.containerInfo),ea(t,_e,e.memoizedState.cache),Ql();break;case 27:case 5:au(t);break;case 4:ve(t,t.stateNode.containerInfo);break;case 10:ea(t,t.type,t.memoizedProps.value);break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(ia(t),t.flags|=128,null):(a&t.child.childLanes)!==0?tf(e,t,a):(ia(t),e=Lt(e,t,a),e!==null?e.sibling:null);ia(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(kl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return lf(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),H(Oe,Oe.current),l)break;return null;case 22:case 23:return t.lanes=0,Ws(e,t,a);case 24:ea(t,_e,e.memoizedState.cache)}return Lt(e,t,a)}function nf(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)He=!0;else{if(!Mc(e,a)&&(t.flags&128)===0)return He=!1,Rm(e,t,a);He=(e.flags&131072)!==0}else He=!1,oe&&(t.flags&1048576)!==0&&Uo(t,ti,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var l=t.elementType,n=l._init;if(l=n(l._payload),t.type=l,typeof l=="function")Hu(l)?(e=qa(l,e),t.tag=1,t=Is(null,t,l,e,a)):(t.tag=0,t=xc(null,t,l,e,a));else{if(l!=null){if(n=l.$$typeof,n===xe){t.tag=11,t=Ks(null,t,l,e,a);break e}else if(n===je){t.tag=14,t=Js(null,t,l,e,a);break e}}throw t=Na(l)||l,Error(o(306,t,""))}}return t;case 0:return xc(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=qa(l,t.pendingProps),Is(e,t,l,n,a);case 3:e:{if(ve(t,t.stateNode.containerInfo),e===null)throw Error(o(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,Wu(e,t),Pl(t,l,null,a);var c=t.memoizedState;if(l=c.cache,ea(t,_e,l),l!==i.cache&&Zu(t,[_e],a,!0),Fl(),l=c.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=ef(e,t,l,a);break e}else if(l!==n){n=mt(Error(o(424)),t),Zl(n),t=ef(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ne=Et(e.firstChild),Ke=t,oe=!0,Da=null,Tt=!0,a=Hs(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ql(),l===n){t=Lt(e,t,a);break e}Be(e,t,l,a)}t=t.child}return t;case 26:return Si(e,t),e===null?(a=od(t.type,null,t.pendingProps,null))?t.memoizedState=a:oe||(a=t.type,e=t.pendingProps,l=Hi(P.current).createElement(a),l[Ze]=t,l[Je]=e,Ge(l,a,e),Ce(l),t.stateNode=l):t.memoizedState=od(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return au(t),e===null&&oe&&(l=t.stateNode=ud(t.type,t.pendingProps,P.current),Ke=t,Tt=!0,n=Ne,ga(t.type)?(cr=n,Ne=Et(l.firstChild)):Ne=n),Be(e,t,t.pendingProps.children,a),Si(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&oe&&((n=l=Ne)&&(l=ah(l,t.type,t.pendingProps,Tt),l!==null?(t.stateNode=l,Ke=t,Ne=Et(l.firstChild),Tt=!1,n=!0):n=!1),n||wa(t)),au(t),n=t.type,i=t.pendingProps,c=e!==null?e.memoizedProps:null,l=i.children,lr(n,i)?l=null:c!==null&&lr(n,c)&&(t.flags|=32),t.memoizedState!==null&&(n=ac(e,t,xm,null,null,a),Sn._currentValue=n),Si(e,t),Be(e,t,l,a),t.child;case 6:return e===null&&oe&&((e=a=Ne)&&(a=lh(a,t.pendingProps,Tt),a!==null?(t.stateNode=a,Ke=t,Ne=null,e=!0):e=!1),e||wa(t)),null;case 13:return tf(e,t,a);case 4:return ve(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=ml(t,null,l,a):Be(e,t,l,a),t.child;case 11:return Ks(e,t,t.type,t.pendingProps,a);case 7:return Be(e,t,t.pendingProps,a),t.child;case 8:return Be(e,t,t.pendingProps.children,a),t.child;case 12:return Be(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,ea(t,t.type,l.value),Be(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Ca(t),n=ke(n),l=l(n),t.flags|=1,Be(e,t,l,a),t.child;case 14:return Js(e,t,t.type,t.pendingProps,a);case 15:return $s(e,t,t.type,t.pendingProps,a);case 19:return lf(e,t,a);case 31:return l=t.pendingProps,a=t.mode,l={mode:l.mode,children:l.children},e===null?(a=Ei(l,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=wt(e.child,l),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return Ws(e,t,a);case 24:return Ca(t),l=ke(_e),e===null?(n=Ku(),n===null&&(n=ye,i=ku(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},$u(t),ea(t,_e,n)):((e.lanes&a)!==0&&(Wu(e,t),Pl(t,null,null,a),Fl()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ea(t,_e,l)):(l=i.cache,ea(t,_e,l),l!==n.cache&&Zu(t,[_e],a,!0))),Be(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Gt(e){e.flags|=4}function uf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!hd(t)){if(t=yt.current,t!==null&&((ie&4194048)===ie?zt!==null:(ie&62914560)!==ie&&(ie&536870912)===0||t!==zt))throw $l=Ju,Xo;e.flags|=8192}}function Ni(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Hr():536870912,e.lanes|=t,yl|=t)}function un(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Se(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function jm(e,t,a){var l=t.pendingProps;switch(Lu(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(t),null;case 1:return Se(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Yt(_e),Wt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Xl(t)?Gt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Yo())),Se(t),null;case 26:return a=t.memoizedState,e===null?(Gt(t),a!==null?(Se(t),uf(t,a)):(Se(t),t.flags&=-16777217)):a?a!==e.memoizedState?(Gt(t),Se(t),uf(t,a)):(Se(t),t.flags&=-16777217):(e.memoizedProps!==l&&Gt(t),Se(t),t.flags&=-16777217),null;case 27:Un(t),a=P.current;var n=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Gt(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return Se(t),null}e=k.current,Xl(t)?Co(t):(e=ud(n,l,a),t.stateNode=e,Gt(t))}return Se(t),null;case 5:if(Un(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Gt(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return Se(t),null}if(e=k.current,Xl(t))Co(t);else{switch(n=Hi(P.current),e){case 1:e=n.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=n.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=n.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=n.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=n.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?n.createElement("select",{is:l.is}):n.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?n.createElement(a,{is:l.is}):n.createElement(a)}}e[Ze]=t,e[Je]=l;e:for(n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.tag!==27&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}t.stateNode=e;e:switch(Ge(e,a,l),a){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Gt(t)}}return Se(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Gt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(o(166));if(e=P.current,Xl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=Ke,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Ze]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||If(e.nodeValue,a)),e||wa(t)}else e=Hi(e).createTextNode(l),e[Ze]=t,t.stateNode=e}return Se(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Xl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(o(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(317));n[Ze]=t}else Ql(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Se(t),n=!1}else n=Yo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(Bt(t),t):(Bt(t),null)}if(Bt(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=l!==null,e=e!==null&&e.memoizedState!==null,a){l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool);var i=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),Ni(t,t.updateQueue),Se(t),null;case 4:return Wt(),e===null&&Pc(t.stateNode.containerInfo),Se(t),null;case 10:return Yt(t.type),Se(t),null;case 19:if(B(Oe),n=t.memoizedState,n===null)return Se(t),null;if(l=(t.flags&128)!==0,i=n.rendering,i===null)if(l)un(n,!1);else{if(Te!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=vi(e),i!==null){for(t.flags|=128,un(n,!1),e=i.updateQueue,t.updateQueue=e,Ni(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)wo(a,e),a=a.sibling;return H(Oe,Oe.current&1|2),t.child}e=e.sibling}n.tail!==null&&Nt()>Ai&&(t.flags|=128,l=!0,un(n,!1),t.lanes=4194304)}else{if(!l)if(e=vi(i),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Ni(t,e),un(n,!0),n.tail===null&&n.tailMode==="hidden"&&!i.alternate&&!oe)return Se(t),null}else 2*Nt()-n.renderingStartTime>Ai&&a!==536870912&&(t.flags|=128,l=!0,un(n,!1),t.lanes=4194304);n.isBackwards?(i.sibling=t.child,t.child=i):(e=n.last,e!==null?e.sibling=i:t.child=i,n.last=i)}return n.tail!==null?(t=n.tail,n.rendering=t,n.tail=t.sibling,n.renderingStartTime=Nt(),t.sibling=null,e=Oe.current,H(Oe,l?e&1|2:e&1),t):(Se(t),null);case 22:case 23:return Bt(t),ec(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(Se(t),t.subtreeFlags&6&&(t.flags|=8192)):Se(t),a=t.updateQueue,a!==null&&Ni(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&B(Ha),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Yt(_e),Se(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function _m(e,t){switch(Lu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Yt(_e),Wt(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Un(t),null;case 13:if(Bt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Ql()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(Oe),null;case 4:return Wt(),null;case 10:return Yt(t.type),null;case 22:case 23:return Bt(t),ec(),e!==null&&B(Ha),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Yt(_e),null;case 25:return null;default:return null}}function cf(e,t){switch(Lu(t),t.tag){case 3:Yt(_e),Wt();break;case 26:case 27:case 5:Un(t);break;case 4:Wt();break;case 13:Bt(t);break;case 19:B(Oe);break;case 10:Yt(t.type);break;case 22:case 23:Bt(t),ec(),e!==null&&B(Ha);break;case 24:Yt(_e)}}function cn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,c=a.inst;l=i(),c.destroy=l}a=a.next}while(a!==n)}}catch(r){pe(t,t.return,r)}}function ca(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var c=l.inst,r=c.destroy;if(r!==void 0){c.destroy=void 0,n=t;var g=a,E=r;try{E()}catch(j){pe(n,g,j)}}}l=l.next}while(l!==i)}}catch(j){pe(t,t.return,j)}}function rf(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Jo(t,a)}catch(l){pe(e,e.return,l)}}}function of(e,t,a){a.props=qa(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){pe(e,t,l)}}function rn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){pe(e,t,n)}}function At(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){pe(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){pe(e,t,n)}else a.current=null}function sf(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){pe(e,e.return,n)}}function Rc(e,t,a){try{var l=e.stateNode;Fm(l,e.type,a,t),l[Je]=t}catch(n){pe(e,e.return,n)}}function ff(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ga(e.type)||e.tag===4}function jc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ff(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ga(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _c(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Ci));else if(l!==4&&(l===27&&ga(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(_c(e,t,a),e=e.sibling;e!==null;)_c(e,t,a),e=e.sibling}function Ti(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&ga(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ti(e,t,a),e=e.sibling;e!==null;)Ti(e,t,a),e=e.sibling}function df(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ge(t,l,a),t[Ze]=e,t[Je]=a}catch(i){pe(e,e.return,i)}}var Xt=!1,Ae=!1,Oc=!1,mf=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function Om(e,t){if(e=e.containerInfo,tr=Xi,e=No(e),ju(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var c=0,r=-1,g=-1,E=0,j=0,D=e,N=null;t:for(;;){for(var T;D!==a||n!==0&&D.nodeType!==3||(r=c+n),D!==i||l!==0&&D.nodeType!==3||(g=c+l),D.nodeType===3&&(c+=D.nodeValue.length),(T=D.firstChild)!==null;)N=D,D=T;for(;;){if(D===e)break t;if(N===a&&++E===n&&(r=c),N===i&&++j===l&&(g=c),(T=D.nextSibling)!==null)break;D=N,N=D.parentNode}D=T}a=r===-1||g===-1?null:{start:r,end:g}}else a=null}a=a||{start:0,end:0}}else a=null;for(ar={focusedElem:e,selectionRange:a},Xi=!1,Ye=t;Ye!==null;)if(t=Ye,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Ye=e;else for(;Ye!==null;){switch(t=Ye,i=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var $=qa(a.type,n,a.elementType===a.type);e=l.getSnapshotBeforeUpdate($,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(V){pe(a,a.return,V)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)ir(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ir(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,Ye=e;break}Ye=t.return}}function hf(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:ra(e,a),l&4&&cn(5,a);break;case 1:if(ra(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(c){pe(a,a.return,c)}else{var n=qa(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){pe(a,a.return,c)}}l&64&&rf(a),l&512&&rn(a,a.return);break;case 3:if(ra(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Jo(e,t)}catch(c){pe(a,a.return,c)}}break;case 27:t===null&&l&4&&df(a);case 26:case 5:ra(e,a),t===null&&l&4&&sf(a),l&512&&rn(a,a.return);break;case 12:ra(e,a);break;case 13:ra(e,a),l&4&&yf(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Lm.bind(null,a),nh(e,a))));break;case 22:if(l=a.memoizedState!==null||Xt,!l){t=t!==null&&t.memoizedState!==null||Ae,n=Xt;var i=Ae;Xt=l,(Ae=t)&&!i?oa(e,a,(a.subtreeFlags&8772)!==0):ra(e,a),Xt=n,Ae=i}break;case 30:break;default:ra(e,a)}}function gf(e){var t=e.alternate;t!==null&&(e.alternate=null,gf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&su(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var be=null,Fe=!1;function Qt(e,t,a){for(a=a.child;a!==null;)pf(e,t,a),a=a.sibling}function pf(e,t,a){if(tt&&typeof tt.onCommitFiberUnmount=="function")try{tt.onCommitFiberUnmount(Rl,a)}catch{}switch(a.tag){case 26:Ae||At(a,t),Qt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ae||At(a,t);var l=be,n=Fe;ga(a.type)&&(be=a.stateNode,Fe=!1),Qt(e,t,a),yn(a.stateNode),be=l,Fe=n;break;case 5:Ae||At(a,t);case 6:if(l=be,n=Fe,be=null,Qt(e,t,a),be=l,Fe=n,be!==null)if(Fe)try{(be.nodeType===9?be.body:be.nodeName==="HTML"?be.ownerDocument.body:be).removeChild(a.stateNode)}catch(i){pe(a,t,i)}else try{be.removeChild(a.stateNode)}catch(i){pe(a,t,i)}break;case 18:be!==null&&(Fe?(e=be,nd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),zn(e)):nd(be,a.stateNode));break;case 4:l=be,n=Fe,be=a.stateNode.containerInfo,Fe=!0,Qt(e,t,a),be=l,Fe=n;break;case 0:case 11:case 14:case 15:Ae||ca(2,a,t),Ae||ca(4,a,t),Qt(e,t,a);break;case 1:Ae||(At(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&of(a,t,l)),Qt(e,t,a);break;case 21:Qt(e,t,a);break;case 22:Ae=(l=Ae)||a.memoizedState!==null,Qt(e,t,a),Ae=l;break;default:Qt(e,t,a)}}function yf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{zn(e)}catch(a){pe(t,t.return,a)}}function Dm(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new mf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new mf),t;default:throw Error(o(435,e.tag))}}function Dc(e,t){var a=Dm(e);t.forEach(function(l){var n=Gm.bind(null,e,l);a.has(l)||(a.add(l),l.then(n,n))})}function it(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,c=t,r=c;e:for(;r!==null;){switch(r.tag){case 27:if(ga(r.type)){be=r.stateNode,Fe=!1;break e}break;case 5:be=r.stateNode,Fe=!1;break e;case 3:case 4:be=r.stateNode.containerInfo,Fe=!0;break e}r=r.return}if(be===null)throw Error(o(160));pf(i,c,n),be=null,Fe=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)vf(t,e),t=t.sibling}var St=null;function vf(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:it(t,e),ut(e),l&4&&(ca(3,e,e.return),cn(3,e),ca(5,e,e.return));break;case 1:it(t,e),ut(e),l&512&&(Ae||a===null||At(a,a.return)),l&64&&Xt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=St;if(it(t,e),ut(e),l&512&&(Ae||a===null||At(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Ol]||i[Ze]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),Ge(i,l,a),i[Ze]=e,Ce(i),l=i;break e;case"link":var c=dd("link","href",n).get(l+(a.href||""));if(c){for(var r=0;r<c.length;r++)if(i=c[r],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(r,1);break t}}i=n.createElement(l),Ge(i,l,a),n.head.appendChild(i);break;case"meta":if(c=dd("meta","content",n).get(l+(a.content||""))){for(r=0;r<c.length;r++)if(i=c[r],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(r,1);break t}}i=n.createElement(l),Ge(i,l,a),n.head.appendChild(i);break;default:throw Error(o(468,l))}i[Ze]=e,Ce(i),l=i}e.stateNode=l}else md(n,e.type,e.stateNode);else e.stateNode=fd(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?md(n,e.type,e.stateNode):fd(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Rc(e,e.memoizedProps,a.memoizedProps)}break;case 27:it(t,e),ut(e),l&512&&(Ae||a===null||At(a,a.return)),a!==null&&l&4&&Rc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(it(t,e),ut(e),l&512&&(Ae||a===null||At(a,a.return)),e.flags&32){n=e.stateNode;try{$a(n,"")}catch(T){pe(e,e.return,T)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,Rc(e,n,a!==null?a.memoizedProps:n)),l&1024&&(Oc=!0);break;case 6:if(it(t,e),ut(e),l&4){if(e.stateNode===null)throw Error(o(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(T){pe(e,e.return,T)}}break;case 3:if(Bi=null,n=St,St=Yi(t.containerInfo),it(t,e),St=n,ut(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{zn(t.containerInfo)}catch(T){pe(e,e.return,T)}Oc&&(Oc=!1,bf(e));break;case 4:l=St,St=Yi(e.stateNode.containerInfo),it(t,e),ut(e),St=l;break;case 12:it(t,e),ut(e);break;case 13:it(t,e),ut(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(qc=Nt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Dc(e,l)));break;case 22:n=e.memoizedState!==null;var g=a!==null&&a.memoizedState!==null,E=Xt,j=Ae;if(Xt=E||n,Ae=j||g,it(t,e),Ae=j,Xt=E,ut(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||g||Xt||Ae||Ba(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){g=a=t;try{if(i=g.stateNode,n)c=i.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{r=g.stateNode;var D=g.memoizedProps.style,N=D!=null&&D.hasOwnProperty("display")?D.display:null;r.style.display=N==null||typeof N=="boolean"?"":(""+N).trim()}}catch(T){pe(g,g.return,T)}}}else if(t.tag===6){if(a===null){g=t;try{g.stateNode.nodeValue=n?"":g.memoizedProps}catch(T){pe(g,g.return,T)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Dc(e,a))));break;case 19:it(t,e),ut(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Dc(e,l)));break;case 30:break;case 21:break;default:it(t,e),ut(e)}}function ut(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(ff(l)){a=l;break}l=l.return}if(a==null)throw Error(o(160));switch(a.tag){case 27:var n=a.stateNode,i=jc(e);Ti(e,i,n);break;case 5:var c=a.stateNode;a.flags&32&&($a(c,""),a.flags&=-33);var r=jc(e);Ti(e,r,c);break;case 3:case 4:var g=a.stateNode.containerInfo,E=jc(e);_c(e,E,g);break;default:throw Error(o(161))}}catch(j){pe(e,e.return,j)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ra(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)hf(e,t.alternate,t),t=t.sibling}function Ba(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ca(4,t,t.return),Ba(t);break;case 1:At(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&of(t,t.return,a),Ba(t);break;case 27:yn(t.stateNode);case 26:case 5:At(t,t.return),Ba(t);break;case 22:t.memoizedState===null&&Ba(t);break;case 30:Ba(t);break;default:Ba(t)}e=e.sibling}}function oa(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,c=i.flags;switch(i.tag){case 0:case 11:case 15:oa(n,i,a),cn(4,i);break;case 1:if(oa(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(E){pe(l,l.return,E)}if(l=i,n=l.updateQueue,n!==null){var r=l.stateNode;try{var g=n.shared.hiddenCallbacks;if(g!==null)for(n.shared.hiddenCallbacks=null,n=0;n<g.length;n++)Ko(g[n],r)}catch(E){pe(l,l.return,E)}}a&&c&64&&rf(i),rn(i,i.return);break;case 27:df(i);case 26:case 5:oa(n,i,a),a&&l===null&&c&4&&sf(i),rn(i,i.return);break;case 12:oa(n,i,a);break;case 13:oa(n,i,a),a&&c&4&&yf(n,i);break;case 22:i.memoizedState===null&&oa(n,i,a),rn(i,i.return);break;case 30:break;default:oa(n,i,a)}t=t.sibling}}function wc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Vl(a))}function Uc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Vl(e))}function Mt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)xf(e,t,a,l),t=t.sibling}function xf(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Mt(e,t,a,l),n&2048&&cn(9,t);break;case 1:Mt(e,t,a,l);break;case 3:Mt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Vl(e)));break;case 12:if(n&2048){Mt(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,c=i.id,r=i.onPostCommit;typeof r=="function"&&r(c,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(g){pe(t,t.return,g)}}else Mt(e,t,a,l);break;case 13:Mt(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,c=t.alternate,t.memoizedState!==null?i._visibility&2?Mt(e,t,a,l):on(e,t):i._visibility&2?Mt(e,t,a,l):(i._visibility|=2,hl(e,t,a,l,(t.subtreeFlags&10256)!==0)),n&2048&&wc(c,t);break;case 24:Mt(e,t,a,l),n&2048&&Uc(t.alternate,t);break;default:Mt(e,t,a,l)}}function hl(e,t,a,l,n){for(n=n&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var i=e,c=t,r=a,g=l,E=c.flags;switch(c.tag){case 0:case 11:case 15:hl(i,c,r,g,n),cn(8,c);break;case 23:break;case 22:var j=c.stateNode;c.memoizedState!==null?j._visibility&2?hl(i,c,r,g,n):on(i,c):(j._visibility|=2,hl(i,c,r,g,n)),n&&E&2048&&wc(c.alternate,c);break;case 24:hl(i,c,r,g,n),n&&E&2048&&Uc(c.alternate,c);break;default:hl(i,c,r,g,n)}t=t.sibling}}function on(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:on(a,l),n&2048&&wc(l.alternate,l);break;case 24:on(a,l),n&2048&&Uc(l.alternate,l);break;default:on(a,l)}t=t.sibling}}var sn=8192;function gl(e){if(e.subtreeFlags&sn)for(e=e.child;e!==null;)Sf(e),e=e.sibling}function Sf(e){switch(e.tag){case 26:gl(e),e.flags&sn&&e.memoizedState!==null&&yh(St,e.memoizedState,e.memoizedProps);break;case 5:gl(e);break;case 3:case 4:var t=St;St=Yi(e.stateNode.containerInfo),gl(e),St=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=sn,sn=16777216,gl(e),sn=t):gl(e));break;default:gl(e)}}function Ef(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function fn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ye=l,Tf(l,e)}Ef(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Nf(e),e=e.sibling}function Nf(e){switch(e.tag){case 0:case 11:case 15:fn(e),e.flags&2048&&ca(9,e,e.return);break;case 3:fn(e);break;case 12:fn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,zi(e)):fn(e);break;default:fn(e)}}function zi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ye=l,Tf(l,e)}Ef(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ca(8,t,t.return),zi(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,zi(t));break;default:zi(t)}e=e.sibling}}function Tf(e,t){for(;Ye!==null;){var a=Ye;switch(a.tag){case 0:case 11:case 15:ca(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Vl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ye=l;else e:for(a=e;Ye!==null;){l=Ye;var n=l.sibling,i=l.return;if(gf(l),l===a){Ye=null;break e}if(n!==null){n.return=i,Ye=n;break e}Ye=i}}}var wm={getCacheForType:function(e){var t=ke(_e),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},Um=typeof WeakMap=="function"?WeakMap:Map,se=0,ye=null,le=null,ie=0,fe=0,ct=null,sa=!1,pl=!1,Cc=!1,Zt=0,Te=0,fa=0,La=0,Hc=0,vt=0,yl=0,dn=null,Pe=null,Yc=!1,qc=0,Ai=1/0,Mi=null,da=null,Le=0,ma=null,vl=null,bl=0,Bc=0,Lc=null,zf=null,mn=0,Gc=null;function rt(){if((se&2)!==0&&ie!==0)return ie&-ie;if(_.T!==null){var e=ul;return e!==0?e:Jc()}return Br()}function Af(){vt===0&&(vt=(ie&536870912)===0||oe?Cr():536870912);var e=yt.current;return e!==null&&(e.flags|=32),vt}function ot(e,t,a){(e===ye&&(fe===2||fe===9)||e.cancelPendingCommit!==null)&&(xl(e,0),ha(e,ie,vt,!1)),_l(e,a),((se&2)===0||e!==ye)&&(e===ye&&((se&2)===0&&(La|=a),Te===4&&ha(e,ie,vt,!1)),Rt(e))}function Mf(e,t,a){if((se&6)!==0)throw Error(o(327));var l=!a&&(t&124)===0&&(t&e.expiredLanes)===0||jl(e,t),n=l?Ym(e,t):Zc(e,t,!0),i=l;do{if(n===0){pl&&!l&&ha(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!Cm(a)){n=Zc(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;e:{var r=e;n=dn;var g=r.current.memoizedState.isDehydrated;if(g&&(xl(r,c).flags|=256),c=Zc(r,c,!1),c!==2){if(Cc&&!g){r.errorRecoveryDisabledLanes|=i,La|=i,n=4;break e}i=Pe,Pe=n,i!==null&&(Pe===null?Pe=i:Pe.push.apply(Pe,i))}n=c}if(i=!1,n!==2)continue}}if(n===1){xl(e,0),ha(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:ha(l,t,vt,!sa);break e;case 2:Pe=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(n=qc+300-Nt(),10<n)){if(ha(l,t,vt,!sa),qn(l,0,!0)!==0)break e;l.timeoutHandle=ad(Rf.bind(null,l,a,Pe,Mi,Yc,t,vt,La,yl,sa,i,2,-0,0),n);break e}Rf(l,a,Pe,Mi,Yc,t,vt,La,yl,sa,i,0,-0,0)}}break}while(!0);Rt(e)}function Rf(e,t,a,l,n,i,c,r,g,E,j,D,N,T){if(e.timeoutHandle=-1,D=t.subtreeFlags,(D&8192||(D&16785408)===16785408)&&(xn={stylesheets:null,count:0,unsuspend:ph},Sf(t),D=vh(),D!==null)){e.cancelPendingCommit=D(Cf.bind(null,e,t,i,a,l,n,c,r,g,j,1,N,T)),ha(e,i,c,!E);return}Cf(e,t,i,a,l,n,c,r,g)}function Cm(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!lt(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ha(e,t,a,l){t&=~Hc,t&=~La,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-at(n),c=1<<i;l[i]=-1,n&=~c}a!==0&&Yr(e,a,t)}function Ri(){return(se&6)===0?(hn(0),!1):!0}function Xc(){if(le!==null){if(fe===0)var e=le.return;else e=le,Ht=Ua=null,ic(e),dl=null,ln=0,e=le;for(;e!==null;)cf(e.alternate,e),e=e.return;le=null}}function xl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Im(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Xc(),ye=e,le=a=wt(e.current,null),ie=t,fe=0,ct=null,sa=!1,pl=jl(e,t),Cc=!1,yl=vt=Hc=La=fa=Te=0,Pe=dn=null,Yc=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-at(l),i=1<<n;t|=e[n],l&=~i}return Zt=t,Wn(),a}function jf(e,t){te=null,_.H=gi,t===Jl||t===ii?(t=ko(),fe=3):t===Xo?(t=ko(),fe=4):fe=t===Vs?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ct=t,le===null&&(Te=1,xi(e,mt(t,e.current)))}function _f(){var e=_.H;return _.H=gi,e===null?gi:e}function Of(){var e=_.A;return _.A=wm,e}function Qc(){Te=4,sa||(ie&4194048)!==ie&&yt.current!==null||(pl=!0),(fa&134217727)===0&&(La&134217727)===0||ye===null||ha(ye,ie,vt,!1)}function Zc(e,t,a){var l=se;se|=2;var n=_f(),i=Of();(ye!==e||ie!==t)&&(Mi=null,xl(e,t)),t=!1;var c=Te;e:do try{if(fe!==0&&le!==null){var r=le,g=ct;switch(fe){case 8:Xc(),c=6;break e;case 3:case 2:case 9:case 6:yt.current===null&&(t=!0);var E=fe;if(fe=0,ct=null,Sl(e,r,g,E),a&&pl){c=0;break e}break;default:E=fe,fe=0,ct=null,Sl(e,r,g,E)}}Hm(),c=Te;break}catch(j){jf(e,j)}while(!0);return t&&e.shellSuspendCounter++,Ht=Ua=null,se=l,_.H=n,_.A=i,le===null&&(ye=null,ie=0,Wn()),c}function Hm(){for(;le!==null;)Df(le)}function Ym(e,t){var a=se;se|=2;var l=_f(),n=Of();ye!==e||ie!==t?(Mi=null,Ai=Nt()+500,xl(e,t)):pl=jl(e,t);e:do try{if(fe!==0&&le!==null){t=le;var i=ct;t:switch(fe){case 1:fe=0,ct=null,Sl(e,t,i,1);break;case 2:case 9:if(Qo(i)){fe=0,ct=null,wf(t);break}t=function(){fe!==2&&fe!==9||ye!==e||(fe=7),Rt(e)},i.then(t,t);break e;case 3:fe=7;break e;case 4:fe=5;break e;case 7:Qo(i)?(fe=0,ct=null,wf(t)):(fe=0,ct=null,Sl(e,t,i,7));break;case 5:var c=null;switch(le.tag){case 26:c=le.memoizedState;case 5:case 27:var r=le;if(!c||hd(c)){fe=0,ct=null;var g=r.sibling;if(g!==null)le=g;else{var E=r.return;E!==null?(le=E,ji(E)):le=null}break t}}fe=0,ct=null,Sl(e,t,i,5);break;case 6:fe=0,ct=null,Sl(e,t,i,6);break;case 8:Xc(),Te=6;break e;default:throw Error(o(462))}}qm();break}catch(j){jf(e,j)}while(!0);return Ht=Ua=null,_.H=l,_.A=n,se=a,le!==null?0:(ye=null,ie=0,Wn(),Te)}function qm(){for(;le!==null&&!u0();)Df(le)}function Df(e){var t=nf(e.alternate,e,Zt);e.memoizedProps=e.pendingProps,t===null?ji(e):le=t}function wf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Ps(a,t,t.pendingProps,t.type,void 0,ie);break;case 11:t=Ps(a,t,t.pendingProps,t.type.render,t.ref,ie);break;case 5:ic(t);default:cf(a,t),t=le=wo(t,Zt),t=nf(a,t,Zt)}e.memoizedProps=e.pendingProps,t===null?ji(e):le=t}function Sl(e,t,a,l){Ht=Ua=null,ic(t),dl=null,ln=0;var n=t.return;try{if(Mm(e,n,t,a,ie)){Te=1,xi(e,mt(a,e.current)),le=null;return}}catch(i){if(n!==null)throw le=n,i;Te=1,xi(e,mt(a,e.current)),le=null;return}t.flags&32768?(oe||l===1?e=!0:pl||(ie&536870912)!==0?e=!1:(sa=e=!0,(l===2||l===9||l===3||l===6)&&(l=yt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Uf(t,e)):ji(t)}function ji(e){var t=e;do{if((t.flags&32768)!==0){Uf(t,sa);return}e=t.return;var a=jm(t.alternate,t,Zt);if(a!==null){le=a;return}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);Te===0&&(Te=5)}function Uf(e,t){do{var a=_m(e.alternate,e);if(a!==null){a.flags&=32767,le=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){le=e;return}le=e=a}while(e!==null);Te=6,le=null}function Cf(e,t,a,l,n,i,c,r,g){e.cancelPendingCommit=null;do _i();while(Le!==0);if((se&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(i=t.lanes|t.childLanes,i|=Uu,p0(e,a,i,c,r,g),e===ye&&(le=ye=null,ie=0),vl=t,ma=e,bl=a,Bc=i,Lc=n,zf=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Xm(Cn,function(){return Lf(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=_.T,_.T=null,n=Y.p,Y.p=2,c=se,se|=4;try{Om(e,t,a)}finally{se=c,Y.p=n,_.T=l}}Le=1,Hf(),Yf(),qf()}}function Hf(){if(Le===1){Le=0;var e=ma,t=vl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=_.T,_.T=null;var l=Y.p;Y.p=2;var n=se;se|=4;try{vf(t,e);var i=ar,c=No(e.containerInfo),r=i.focusedElem,g=i.selectionRange;if(c!==r&&r&&r.ownerDocument&&Eo(r.ownerDocument.documentElement,r)){if(g!==null&&ju(r)){var E=g.start,j=g.end;if(j===void 0&&(j=E),"selectionStart"in r)r.selectionStart=E,r.selectionEnd=Math.min(j,r.value.length);else{var D=r.ownerDocument||document,N=D&&D.defaultView||window;if(N.getSelection){var T=N.getSelection(),$=r.textContent.length,V=Math.min(g.start,$),he=g.end===void 0?V:Math.min(g.end,$);!T.extend&&V>he&&(c=he,he=V,V=c);var x=So(r,V),v=So(r,he);if(x&&v&&(T.rangeCount!==1||T.anchorNode!==x.node||T.anchorOffset!==x.offset||T.focusNode!==v.node||T.focusOffset!==v.offset)){var S=D.createRange();S.setStart(x.node,x.offset),T.removeAllRanges(),V>he?(T.addRange(S),T.extend(v.node,v.offset)):(S.setEnd(v.node,v.offset),T.addRange(S))}}}}for(D=[],T=r;T=T.parentNode;)T.nodeType===1&&D.push({element:T,left:T.scrollLeft,top:T.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<D.length;r++){var O=D[r];O.element.scrollLeft=O.left,O.element.scrollTop=O.top}}Xi=!!tr,ar=tr=null}finally{se=n,Y.p=l,_.T=a}}e.current=t,Le=2}}function Yf(){if(Le===2){Le=0;var e=ma,t=vl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=_.T,_.T=null;var l=Y.p;Y.p=2;var n=se;se|=4;try{hf(e,t.alternate,t)}finally{se=n,Y.p=l,_.T=a}}Le=3}}function qf(){if(Le===4||Le===3){Le=0,c0();var e=ma,t=vl,a=bl,l=zf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Le=5:(Le=0,vl=ma=null,Bf(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(da=null),ru(a),t=t.stateNode,tt&&typeof tt.onCommitFiberRoot=="function")try{tt.onCommitFiberRoot(Rl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=_.T,n=Y.p,Y.p=2,_.T=null;try{for(var i=e.onRecoverableError,c=0;c<l.length;c++){var r=l[c];i(r.value,{componentStack:r.stack})}}finally{_.T=t,Y.p=n}}(bl&3)!==0&&_i(),Rt(e),n=e.pendingLanes,(a&4194090)!==0&&(n&42)!==0?e===Gc?mn++:(mn=0,Gc=e):mn=0,hn(0)}}function Bf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Vl(t)))}function _i(e){return Hf(),Yf(),qf(),Lf()}function Lf(){if(Le!==5)return!1;var e=ma,t=Bc;Bc=0;var a=ru(bl),l=_.T,n=Y.p;try{Y.p=32>a?32:a,_.T=null,a=Lc,Lc=null;var i=ma,c=bl;if(Le=0,vl=ma=null,bl=0,(se&6)!==0)throw Error(o(331));var r=se;if(se|=4,Nf(i.current),xf(i,i.current,c,a),se=r,hn(0,!1),tt&&typeof tt.onPostCommitFiberRoot=="function")try{tt.onPostCommitFiberRoot(Rl,i)}catch{}return!0}finally{Y.p=n,_.T=l,Bf(e,t)}}function Gf(e,t,a){t=mt(a,t),t=bc(e.stateNode,t,2),e=la(e,t,2),e!==null&&(_l(e,2),Rt(e))}function pe(e,t,a){if(e.tag===3)Gf(e,e,a);else for(;t!==null;){if(t.tag===3){Gf(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(da===null||!da.has(l))){e=mt(a,e),a=Zs(2),l=la(t,a,2),l!==null&&(ks(a,l,t,e),_l(l,2),Rt(l));break}}t=t.return}}function kc(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new Um;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(Cc=!0,n.add(a),e=Bm.bind(null,e,t,a),t.then(e,e))}function Bm(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ye===e&&(ie&a)===a&&(Te===4||Te===3&&(ie&62914560)===ie&&300>Nt()-qc?(se&2)===0&&xl(e,0):Hc|=a,yl===ie&&(yl=0)),Rt(e)}function Xf(e,t){t===0&&(t=Hr()),e=al(e,t),e!==null&&(_l(e,t),Rt(e))}function Lm(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Xf(e,a)}function Gm(e,t){var a=0;switch(e.tag){case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(t),Xf(e,a)}function Xm(e,t){return nu(e,t)}var Oi=null,El=null,Vc=!1,Di=!1,Kc=!1,Ga=0;function Rt(e){e!==El&&e.next===null&&(El===null?Oi=El=e:El=El.next=e),Di=!0,Vc||(Vc=!0,Zm())}function hn(e,t){if(!Kc&&Di){Kc=!0;do for(var a=!1,l=Oi;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var c=l.suspendedLanes,r=l.pingedLanes;i=(1<<31-at(42|e)+1)-1,i&=n&~(c&~r),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,Vf(l,i))}else i=ie,i=qn(l,l===ye?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||jl(l,i)||(a=!0,Vf(l,i));l=l.next}while(a);Kc=!1}}function Qm(){Qf()}function Qf(){Di=Vc=!1;var e=0;Ga!==0&&(Pm()&&(e=Ga),Ga=0);for(var t=Nt(),a=null,l=Oi;l!==null;){var n=l.next,i=Zf(l,t);i===0?(l.next=null,a===null?Oi=n:a.next=n,n===null&&(El=a)):(a=l,(e!==0||(i&3)!==0)&&(Di=!0)),l=n}hn(e)}function Zf(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var c=31-at(i),r=1<<c,g=n[c];g===-1?((r&a)===0||(r&l)!==0)&&(n[c]=g0(r,t)):g<=t&&(e.expiredLanes|=r),i&=~r}if(t=ye,a=ie,a=qn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(fe===2||fe===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&iu(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||jl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&iu(l),ru(a)){case 2:case 8:a=wr;break;case 32:a=Cn;break;case 268435456:a=Ur;break;default:a=Cn}return l=kf.bind(null,e),a=nu(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&iu(l),e.callbackPriority=2,e.callbackNode=null,2}function kf(e,t){if(Le!==0&&Le!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(_i()&&e.callbackNode!==a)return null;var l=ie;return l=qn(e,e===ye?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Mf(e,l,t),Zf(e,Nt()),e.callbackNode!=null&&e.callbackNode===a?kf.bind(null,e):null)}function Vf(e,t){if(_i())return null;Mf(e,t,!0)}function Zm(){eh(function(){(se&6)!==0?nu(Dr,Qm):Qf()})}function Jc(){return Ga===0&&(Ga=Cr()),Ga}function Kf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Qn(""+e)}function Jf(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function km(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=Kf((n[Je]||null).action),c=l.submitter;c&&(t=(t=c[Je]||null)?Kf(t.formAction):c.getAttribute("formAction"),t!==null&&(i=t,c=null));var r=new Kn("action","action",null,l,n);e.push({event:r,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ga!==0){var g=c?Jf(n,c):new FormData(n);hc(a,{pending:!0,data:g,method:n.method,action:i},null,g)}}else typeof i=="function"&&(r.preventDefault(),g=c?Jf(n,c):new FormData(n),hc(a,{pending:!0,data:g,method:n.method,action:i},i,g))},currentTarget:n}]})}}for(var $c=0;$c<wu.length;$c++){var Wc=wu[$c],Vm=Wc.toLowerCase(),Km=Wc[0].toUpperCase()+Wc.slice(1);xt(Vm,"on"+Km)}xt(Ao,"onAnimationEnd"),xt(Mo,"onAnimationIteration"),xt(Ro,"onAnimationStart"),xt("dblclick","onDoubleClick"),xt("focusin","onFocus"),xt("focusout","onBlur"),xt(sm,"onTransitionRun"),xt(fm,"onTransitionStart"),xt(dm,"onTransitionCancel"),xt(jo,"onTransitionEnd"),Va("onMouseEnter",["mouseout","mouseover"]),Va("onMouseLeave",["mouseout","mouseover"]),Va("onPointerEnter",["pointerout","pointerover"]),Va("onPointerLeave",["pointerout","pointerover"]),za("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),za("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),za("onBeforeInput",["compositionend","keypress","textInput","paste"]),za("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),za("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),za("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gn));function $f(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var c=l.length-1;0<=c;c--){var r=l[c],g=r.instance,E=r.currentTarget;if(r=r.listener,g!==i&&n.isPropagationStopped())break e;i=r,n.currentTarget=E;try{i(n)}catch(j){bi(j)}n.currentTarget=null,i=g}else for(c=0;c<l.length;c++){if(r=l[c],g=r.instance,E=r.currentTarget,r=r.listener,g!==i&&n.isPropagationStopped())break e;i=r,n.currentTarget=E;try{i(n)}catch(j){bi(j)}n.currentTarget=null,i=g}}}}function ne(e,t){var a=t[ou];a===void 0&&(a=t[ou]=new Set);var l=e+"__bubble";a.has(l)||(Wf(t,e,2,!1),a.add(l))}function Fc(e,t,a){var l=0;t&&(l|=4),Wf(a,e,l,t)}var wi="_reactListening"+Math.random().toString(36).slice(2);function Pc(e){if(!e[wi]){e[wi]=!0,Gr.forEach(function(a){a!=="selectionchange"&&(Jm.has(a)||Fc(a,!1,e),Fc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[wi]||(t[wi]=!0,Fc("selectionchange",!1,t))}}function Wf(e,t,a,l){switch(xd(t)){case 2:var n=Sh;break;case 8:n=Eh;break;default:n=dr}a=n.bind(null,t,a,e),n=void 0,!xu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function Ic(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var c=l.tag;if(c===3||c===4){var r=l.stateNode.containerInfo;if(r===n)break;if(c===4)for(c=l.return;c!==null;){var g=c.tag;if((g===3||g===4)&&c.stateNode.containerInfo===n)return;c=c.return}for(;r!==null;){if(c=Qa(r),c===null)return;if(g=c.tag,g===5||g===6||g===26||g===27){l=i=c;continue e}r=r.parentNode}}l=l.return}to(function(){var E=i,j=vu(a),D=[];e:{var N=_o.get(e);if(N!==void 0){var T=Kn,$=e;switch(e){case"keypress":if(kn(a)===0)break e;case"keydown":case"keyup":T=X0;break;case"focusin":$="focus",T=Tu;break;case"focusout":$="blur",T=Tu;break;case"beforeblur":case"afterblur":T=Tu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=no;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=_0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=k0;break;case Ao:case Mo:case Ro:T=w0;break;case jo:T=K0;break;case"scroll":case"scrollend":T=R0;break;case"wheel":T=$0;break;case"copy":case"cut":case"paste":T=C0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=uo;break;case"toggle":case"beforetoggle":T=F0}var V=(t&4)!==0,he=!V&&(e==="scroll"||e==="scrollend"),x=V?N!==null?N+"Capture":null:N;V=[];for(var v=E,S;v!==null;){var O=v;if(S=O.stateNode,O=O.tag,O!==5&&O!==26&&O!==27||S===null||x===null||(O=wl(v,x),O!=null&&V.push(pn(v,O,S))),he)break;v=v.return}0<V.length&&(N=new T(N,$,null,a,j),D.push({event:N,listeners:V}))}}if((t&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",T=e==="mouseout"||e==="pointerout",N&&a!==yu&&($=a.relatedTarget||a.fromElement)&&(Qa($)||$[Xa]))break e;if((T||N)&&(N=j.window===j?j:(N=j.ownerDocument)?N.defaultView||N.parentWindow:window,T?($=a.relatedTarget||a.toElement,T=E,$=$?Qa($):null,$!==null&&(he=p($),V=$.tag,$!==he||V!==5&&V!==27&&V!==6)&&($=null)):(T=null,$=E),T!==$)){if(V=no,O="onMouseLeave",x="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(V=uo,O="onPointerLeave",x="onPointerEnter",v="pointer"),he=T==null?N:Dl(T),S=$==null?N:Dl($),N=new V(O,v+"leave",T,a,j),N.target=he,N.relatedTarget=S,O=null,Qa(j)===E&&(V=new V(x,v+"enter",$,a,j),V.target=S,V.relatedTarget=he,O=V),he=O,T&&$)t:{for(V=T,x=$,v=0,S=V;S;S=Nl(S))v++;for(S=0,O=x;O;O=Nl(O))S++;for(;0<v-S;)V=Nl(V),v--;for(;0<S-v;)x=Nl(x),S--;for(;v--;){if(V===x||x!==null&&V===x.alternate)break t;V=Nl(V),x=Nl(x)}V=null}else V=null;T!==null&&Ff(D,N,T,V,!1),$!==null&&he!==null&&Ff(D,he,$,V,!0)}}e:{if(N=E?Dl(E):window,T=N.nodeName&&N.nodeName.toLowerCase(),T==="select"||T==="input"&&N.type==="file")var L=go;else if(mo(N))if(po)L=cm;else{L=im;var ae=nm}else T=N.nodeName,!T||T.toLowerCase()!=="input"||N.type!=="checkbox"&&N.type!=="radio"?E&&pu(E.elementType)&&(L=go):L=um;if(L&&(L=L(e,E))){ho(D,L,a,j);break e}ae&&ae(e,N,E),e==="focusout"&&E&&N.type==="number"&&E.memoizedProps.value!=null&&gu(N,"number",N.value)}switch(ae=E?Dl(E):window,e){case"focusin":(mo(ae)||ae.contentEditable==="true")&&(Ia=ae,_u=E,Gl=null);break;case"focusout":Gl=_u=Ia=null;break;case"mousedown":Ou=!0;break;case"contextmenu":case"mouseup":case"dragend":Ou=!1,To(D,a,j);break;case"selectionchange":if(om)break;case"keydown":case"keyup":To(D,a,j)}var G;if(Au)e:{switch(e){case"compositionstart":var K="onCompositionStart";break e;case"compositionend":K="onCompositionEnd";break e;case"compositionupdate":K="onCompositionUpdate";break e}K=void 0}else Pa?so(e,a)&&(K="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(K="onCompositionStart");K&&(co&&a.locale!=="ko"&&(Pa||K!=="onCompositionStart"?K==="onCompositionEnd"&&Pa&&(G=ao()):(It=j,Su="value"in It?It.value:It.textContent,Pa=!0)),ae=Ui(E,K),0<ae.length&&(K=new io(K,e,null,a,j),D.push({event:K,listeners:ae}),G?K.data=G:(G=fo(a),G!==null&&(K.data=G)))),(G=I0?em(e,a):tm(e,a))&&(K=Ui(E,"onBeforeInput"),0<K.length&&(ae=new io("onBeforeInput","beforeinput",null,a,j),D.push({event:ae,listeners:K}),ae.data=G)),km(D,e,E,a,j)}$f(D,t)})}function pn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Ui(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=wl(e,a),n!=null&&l.unshift(pn(e,n,i)),n=wl(e,t),n!=null&&l.push(pn(e,n,i))),e.tag===3)return l;e=e.return}return[]}function Nl(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ff(e,t,a,l,n){for(var i=t._reactName,c=[];a!==null&&a!==l;){var r=a,g=r.alternate,E=r.stateNode;if(r=r.tag,g!==null&&g===l)break;r!==5&&r!==26&&r!==27||E===null||(g=E,n?(E=wl(a,i),E!=null&&c.unshift(pn(a,E,g))):n||(E=wl(a,i),E!=null&&c.push(pn(a,E,g)))),a=a.return}c.length!==0&&e.push({event:t,listeners:c})}var $m=/\r\n?/g,Wm=/\u0000|\uFFFD/g;function Pf(e){return(typeof e=="string"?e:""+e).replace($m,`
`).replace(Wm,"")}function If(e,t){return t=Pf(t),Pf(e)===t}function Ci(){}function me(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||$a(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&$a(e,""+l);break;case"className":Ln(e,"class",l);break;case"tabIndex":Ln(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ln(e,a,l);break;case"style":Ir(e,l,i);break;case"data":if(t!=="object"){Ln(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Qn(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&me(e,t,"name",n.name,n,null),me(e,t,"formEncType",n.formEncType,n,null),me(e,t,"formMethod",n.formMethod,n,null),me(e,t,"formTarget",n.formTarget,n,null)):(me(e,t,"encType",n.encType,n,null),me(e,t,"method",n.method,n,null),me(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Qn(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Ci);break;case"onScroll":l!=null&&ne("scroll",e);break;case"onScrollEnd":l!=null&&ne("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Qn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":ne("beforetoggle",e),ne("toggle",e),Bn(e,"popover",l);break;case"xlinkActuate":Ot(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ot(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ot(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ot(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ot(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ot(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Bn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=A0.get(a)||a,Bn(e,a,l))}}function er(e,t,a,l,n,i){switch(a){case"style":Ir(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"children":typeof l=="string"?$a(e,l):(typeof l=="number"||typeof l=="bigint")&&$a(e,""+l);break;case"onScroll":l!=null&&ne("scroll",e);break;case"onScrollEnd":l!=null&&ne("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Ci);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Xr.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[Je]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Bn(e,a,l)}}}function Ge(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ne("error",e),ne("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var c=a[i];if(c!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:me(e,t,i,c,a,null)}}n&&me(e,t,"srcSet",a.srcSet,a,null),l&&me(e,t,"src",a.src,a,null);return;case"input":ne("invalid",e);var r=i=c=n=null,g=null,E=null;for(l in a)if(a.hasOwnProperty(l)){var j=a[l];if(j!=null)switch(l){case"name":n=j;break;case"type":c=j;break;case"checked":g=j;break;case"defaultChecked":E=j;break;case"value":i=j;break;case"defaultValue":r=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(o(137,t));break;default:me(e,t,l,j,a,null)}}$r(e,i,r,g,E,c,n,!1),Gn(e);return;case"select":ne("invalid",e),l=c=i=null;for(n in a)if(a.hasOwnProperty(n)&&(r=a[n],r!=null))switch(n){case"value":i=r;break;case"defaultValue":c=r;break;case"multiple":l=r;default:me(e,t,n,r,a,null)}t=i,a=c,e.multiple=!!l,t!=null?Ja(e,!!l,t,!1):a!=null&&Ja(e,!!l,a,!0);return;case"textarea":ne("invalid",e),i=n=l=null;for(c in a)if(a.hasOwnProperty(c)&&(r=a[c],r!=null))switch(c){case"value":l=r;break;case"defaultValue":n=r;break;case"children":i=r;break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(o(91));break;default:me(e,t,c,r,a,null)}Fr(e,l,n,i),Gn(e);return;case"option":for(g in a)if(a.hasOwnProperty(g)&&(l=a[g],l!=null))switch(g){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:me(e,t,g,l,a,null)}return;case"dialog":ne("beforetoggle",e),ne("toggle",e),ne("cancel",e),ne("close",e);break;case"iframe":case"object":ne("load",e);break;case"video":case"audio":for(l=0;l<gn.length;l++)ne(gn[l],e);break;case"image":ne("error",e),ne("load",e);break;case"details":ne("toggle",e);break;case"embed":case"source":case"link":ne("error",e),ne("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(E in a)if(a.hasOwnProperty(E)&&(l=a[E],l!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:me(e,t,E,l,a,null)}return;default:if(pu(t)){for(j in a)a.hasOwnProperty(j)&&(l=a[j],l!==void 0&&er(e,t,j,l,a,void 0));return}}for(r in a)a.hasOwnProperty(r)&&(l=a[r],l!=null&&me(e,t,r,l,a,null))}function Fm(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,c=null,r=null,g=null,E=null,j=null;for(T in a){var D=a[T];if(a.hasOwnProperty(T)&&D!=null)switch(T){case"checked":break;case"value":break;case"defaultValue":g=D;default:l.hasOwnProperty(T)||me(e,t,T,null,l,D)}}for(var N in l){var T=l[N];if(D=a[N],l.hasOwnProperty(N)&&(T!=null||D!=null))switch(N){case"type":i=T;break;case"name":n=T;break;case"checked":E=T;break;case"defaultChecked":j=T;break;case"value":c=T;break;case"defaultValue":r=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(o(137,t));break;default:T!==D&&me(e,t,N,T,l,D)}}hu(e,c,r,g,E,j,i,n);return;case"select":T=c=r=N=null;for(i in a)if(g=a[i],a.hasOwnProperty(i)&&g!=null)switch(i){case"value":break;case"multiple":T=g;default:l.hasOwnProperty(i)||me(e,t,i,null,l,g)}for(n in l)if(i=l[n],g=a[n],l.hasOwnProperty(n)&&(i!=null||g!=null))switch(n){case"value":N=i;break;case"defaultValue":r=i;break;case"multiple":c=i;default:i!==g&&me(e,t,n,i,l,g)}t=r,a=c,l=T,N!=null?Ja(e,!!a,N,!1):!!l!=!!a&&(t!=null?Ja(e,!!a,t,!0):Ja(e,!!a,a?[]:"",!1));return;case"textarea":T=N=null;for(r in a)if(n=a[r],a.hasOwnProperty(r)&&n!=null&&!l.hasOwnProperty(r))switch(r){case"value":break;case"children":break;default:me(e,t,r,null,l,n)}for(c in l)if(n=l[c],i=a[c],l.hasOwnProperty(c)&&(n!=null||i!=null))switch(c){case"value":N=n;break;case"defaultValue":T=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(o(91));break;default:n!==i&&me(e,t,c,n,l,i)}Wr(e,N,T);return;case"option":for(var $ in a)if(N=a[$],a.hasOwnProperty($)&&N!=null&&!l.hasOwnProperty($))switch($){case"selected":e.selected=!1;break;default:me(e,t,$,null,l,N)}for(g in l)if(N=l[g],T=a[g],l.hasOwnProperty(g)&&N!==T&&(N!=null||T!=null))switch(g){case"selected":e.selected=N&&typeof N!="function"&&typeof N!="symbol";break;default:me(e,t,g,N,l,T)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var V in a)N=a[V],a.hasOwnProperty(V)&&N!=null&&!l.hasOwnProperty(V)&&me(e,t,V,null,l,N);for(E in l)if(N=l[E],T=a[E],l.hasOwnProperty(E)&&N!==T&&(N!=null||T!=null))switch(E){case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(o(137,t));break;default:me(e,t,E,N,l,T)}return;default:if(pu(t)){for(var he in a)N=a[he],a.hasOwnProperty(he)&&N!==void 0&&!l.hasOwnProperty(he)&&er(e,t,he,void 0,l,N);for(j in l)N=l[j],T=a[j],!l.hasOwnProperty(j)||N===T||N===void 0&&T===void 0||er(e,t,j,N,l,T);return}}for(var x in a)N=a[x],a.hasOwnProperty(x)&&N!=null&&!l.hasOwnProperty(x)&&me(e,t,x,null,l,N);for(D in l)N=l[D],T=a[D],!l.hasOwnProperty(D)||N===T||N==null&&T==null||me(e,t,D,N,l,T)}var tr=null,ar=null;function Hi(e){return e.nodeType===9?e:e.ownerDocument}function ed(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function td(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function lr(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var nr=null;function Pm(){var e=window.event;return e&&e.type==="popstate"?e===nr?!1:(nr=e,!0):(nr=null,!1)}var ad=typeof setTimeout=="function"?setTimeout:void 0,Im=typeof clearTimeout=="function"?clearTimeout:void 0,ld=typeof Promise=="function"?Promise:void 0,eh=typeof queueMicrotask=="function"?queueMicrotask:typeof ld<"u"?function(e){return ld.resolve(null).then(e).catch(th)}:ad;function th(e){setTimeout(function(){throw e})}function ga(e){return e==="head"}function nd(e,t){var a=t,l=0,n=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(0<l&&8>l){a=l;var c=e.ownerDocument;if(a&1&&yn(c.documentElement),a&2&&yn(c.body),a&4)for(a=c.head,yn(a),c=a.firstChild;c;){var r=c.nextSibling,g=c.nodeName;c[Ol]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=r}}if(n===0){e.removeChild(i),zn(t);return}n--}else a==="$"||a==="$?"||a==="$!"?n++:l=a.charCodeAt(0)-48;else l=0;a=i}while(a);zn(t)}function ir(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ir(a),su(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function ah(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Ol])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Et(e.nextSibling),e===null)break}return null}function lh(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Et(e.nextSibling),e===null))return null;return e}function ur(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function nh(e,t){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Et(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var cr=null;function id(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function ud(e,t,a){switch(t=Hi(a),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function yn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);su(e)}var bt=new Map,cd=new Set;function Yi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var kt=Y.d;Y.d={f:ih,r:uh,D:ch,C:rh,L:oh,m:sh,X:dh,S:fh,M:mh};function ih(){var e=kt.f(),t=Ri();return e||t}function uh(e){var t=Za(e);t!==null&&t.tag===5&&t.type==="form"?As(t):kt.r(e)}var Tl=typeof document>"u"?null:document;function rd(e,t,a){var l=Tl;if(l&&typeof t=="string"&&t){var n=dt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),cd.has(n)||(cd.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),Ge(t,"link",e),Ce(t),l.head.appendChild(t)))}}function ch(e){kt.D(e),rd("dns-prefetch",e,null)}function rh(e,t){kt.C(e,t),rd("preconnect",e,t)}function oh(e,t,a){kt.L(e,t,a);var l=Tl;if(l&&e&&t){var n='link[rel="preload"][as="'+dt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+dt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+dt(a.imageSizes)+'"]')):n+='[href="'+dt(e)+'"]';var i=n;switch(t){case"style":i=zl(e);break;case"script":i=Al(e)}bt.has(i)||(e=M({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),bt.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(vn(i))||t==="script"&&l.querySelector(bn(i))||(t=l.createElement("link"),Ge(t,"link",e),Ce(t),l.head.appendChild(t)))}}function sh(e,t){kt.m(e,t);var a=Tl;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+dt(l)+'"][href="'+dt(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Al(e)}if(!bt.has(i)&&(e=M({rel:"modulepreload",href:e},t),bt.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(bn(i)))return}l=a.createElement("link"),Ge(l,"link",e),Ce(l),a.head.appendChild(l)}}}function fh(e,t,a){kt.S(e,t,a);var l=Tl;if(l&&e){var n=ka(l).hoistableStyles,i=zl(e);t=t||"default";var c=n.get(i);if(!c){var r={loading:0,preload:null};if(c=l.querySelector(vn(i)))r.loading=5;else{e=M({rel:"stylesheet",href:e,"data-precedence":t},a),(a=bt.get(i))&&rr(e,a);var g=c=l.createElement("link");Ce(g),Ge(g,"link",e),g._p=new Promise(function(E,j){g.onload=E,g.onerror=j}),g.addEventListener("load",function(){r.loading|=1}),g.addEventListener("error",function(){r.loading|=2}),r.loading|=4,qi(c,t,l)}c={type:"stylesheet",instance:c,count:1,state:r},n.set(i,c)}}}function dh(e,t){kt.X(e,t);var a=Tl;if(a&&e){var l=ka(a).hoistableScripts,n=Al(e),i=l.get(n);i||(i=a.querySelector(bn(n)),i||(e=M({src:e,async:!0},t),(t=bt.get(n))&&or(e,t),i=a.createElement("script"),Ce(i),Ge(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function mh(e,t){kt.M(e,t);var a=Tl;if(a&&e){var l=ka(a).hoistableScripts,n=Al(e),i=l.get(n);i||(i=a.querySelector(bn(n)),i||(e=M({src:e,async:!0,type:"module"},t),(t=bt.get(n))&&or(e,t),i=a.createElement("script"),Ce(i),Ge(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function od(e,t,a,l){var n=(n=P.current)?Yi(n):null;if(!n)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=zl(a.href),a=ka(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=zl(a.href);var i=ka(n).hoistableStyles,c=i.get(e);if(c||(n=n.ownerDocument||n,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,c),(i=n.querySelector(vn(e)))&&!i._p&&(c.instance=i,c.state.loading=5),bt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},bt.set(e,a),i||hh(n,e,a,c.state))),t&&l===null)throw Error(o(528,""));return c}if(t&&l!==null)throw Error(o(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Al(a),a=ka(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function zl(e){return'href="'+dt(e)+'"'}function vn(e){return'link[rel="stylesheet"]['+e+"]"}function sd(e){return M({},e,{"data-precedence":e.precedence,precedence:null})}function hh(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Ge(t,"link",a),Ce(t),e.head.appendChild(t))}function Al(e){return'[src="'+dt(e)+'"]'}function bn(e){return"script[async]"+e}function fd(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+dt(a.href)+'"]');if(l)return t.instance=l,Ce(l),l;var n=M({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ce(l),Ge(l,"style",n),qi(l,a.precedence,e),t.instance=l;case"stylesheet":n=zl(a.href);var i=e.querySelector(vn(n));if(i)return t.state.loading|=4,t.instance=i,Ce(i),i;l=sd(a),(n=bt.get(n))&&rr(l,n),i=(e.ownerDocument||e).createElement("link"),Ce(i);var c=i;return c._p=new Promise(function(r,g){c.onload=r,c.onerror=g}),Ge(i,"link",l),t.state.loading|=4,qi(i,a.precedence,e),t.instance=i;case"script":return i=Al(a.src),(n=e.querySelector(bn(i)))?(t.instance=n,Ce(n),n):(l=a,(n=bt.get(i))&&(l=M({},a),or(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ce(n),Ge(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,qi(l,a.precedence,e));return t.instance}function qi(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,c=0;c<l.length;c++){var r=l[c];if(r.dataset.precedence===t)i=r;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function rr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function or(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Bi=null;function dd(e,t,a){if(Bi===null){var l=new Map,n=Bi=new Map;n.set(a,l)}else n=Bi,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[Ol]||i[Ze]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var c=i.getAttribute(t)||"";c=e+c;var r=l.get(c);r?r.push(i):l.set(c,[i])}}return l}function md(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function gh(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function hd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var xn=null;function ph(){}function yh(e,t,a){if(xn===null)throw Error(o(475));var l=xn;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var n=zl(a.href),i=e.querySelector(vn(n));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=Li.bind(l),e.then(l,l)),t.state.loading|=4,t.instance=i,Ce(i);return}i=e.ownerDocument||e,a=sd(a),(n=bt.get(n))&&rr(a,n),i=i.createElement("link"),Ce(i);var c=i;c._p=new Promise(function(r,g){c.onload=r,c.onerror=g}),Ge(i,"link",a),t.instance=i}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(l.count++,t=Li.bind(l),e.addEventListener("load",t),e.addEventListener("error",t))}}function vh(){if(xn===null)throw Error(o(475));var e=xn;return e.stylesheets&&e.count===0&&sr(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&sr(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Li(){if(this.count--,this.count===0){if(this.stylesheets)sr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Gi=null;function sr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Gi=new Map,t.forEach(bh,e),Gi=null,Li.call(e))}function bh(e,t){if(!(t.state.loading&4)){var a=Gi.get(e);if(a)var l=a.get(null);else{a=new Map,Gi.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var c=n[i];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(a.set(c.dataset.precedence,c),l=c)}l&&a.set(null,l)}n=t.instance,c=n.getAttribute("data-precedence"),i=a.get(c)||l,i===l&&a.set(null,n),a.set(c,n),this.count++,l=Li.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Sn={$$typeof:I,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function xh(e,t,a,l,n,i,c,r){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=uu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=uu(0),this.hiddenUpdates=uu(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function gd(e,t,a,l,n,i,c,r,g,E,j,D){return e=new xh(e,t,a,c,r,g,E,D),t=1,i===!0&&(t|=24),i=nt(3,null,null,t),e.current=i,i.stateNode=e,t=ku(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},$u(i),e}function pd(e){return e?(e=ll,e):ll}function yd(e,t,a,l,n,i){n=pd(n),l.context===null?l.context=n:l.pendingContext=n,l=aa(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=la(e,l,t),a!==null&&(ot(a,e,t),Wl(a,e,t))}function vd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function fr(e,t){vd(e,t),(e=e.alternate)&&vd(e,t)}function bd(e){if(e.tag===13){var t=al(e,67108864);t!==null&&ot(t,e,67108864),fr(e,67108864)}}var Xi=!0;function Sh(e,t,a,l){var n=_.T;_.T=null;var i=Y.p;try{Y.p=2,dr(e,t,a,l)}finally{Y.p=i,_.T=n}}function Eh(e,t,a,l){var n=_.T;_.T=null;var i=Y.p;try{Y.p=8,dr(e,t,a,l)}finally{Y.p=i,_.T=n}}function dr(e,t,a,l){if(Xi){var n=mr(l);if(n===null)Ic(e,t,l,Qi,a),Sd(e,l);else if(Th(n,e,t,a,l))l.stopPropagation();else if(Sd(e,l),t&4&&-1<Nh.indexOf(e)){for(;n!==null;){var i=Za(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var c=Ta(i.pendingLanes);if(c!==0){var r=i;for(r.pendingLanes|=2,r.entangledLanes|=2;c;){var g=1<<31-at(c);r.entanglements[1]|=g,c&=~g}Rt(i),(se&6)===0&&(Ai=Nt()+500,hn(0))}}break;case 13:r=al(i,2),r!==null&&ot(r,i,2),Ri(),fr(i,2)}if(i=mr(l),i===null&&Ic(e,t,l,Qi,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else Ic(e,t,l,null,a)}}function mr(e){return e=vu(e),hr(e)}var Qi=null;function hr(e){if(Qi=null,e=Qa(e),e!==null){var t=p(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=z(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Qi=e,null}function xd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(r0()){case Dr:return 2;case wr:return 8;case Cn:case o0:return 32;case Ur:return 268435456;default:return 32}default:return 32}}var gr=!1,pa=null,ya=null,va=null,En=new Map,Nn=new Map,ba=[],Nh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Sd(e,t){switch(e){case"focusin":case"focusout":pa=null;break;case"dragenter":case"dragleave":ya=null;break;case"mouseover":case"mouseout":va=null;break;case"pointerover":case"pointerout":En.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nn.delete(t.pointerId)}}function Tn(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=Za(t),t!==null&&bd(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Th(e,t,a,l,n){switch(t){case"focusin":return pa=Tn(pa,e,t,a,l,n),!0;case"dragenter":return ya=Tn(ya,e,t,a,l,n),!0;case"mouseover":return va=Tn(va,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return En.set(i,Tn(En.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,Nn.set(i,Tn(Nn.get(i)||null,e,t,a,l,n)),!0}return!1}function Ed(e){var t=Qa(e.target);if(t!==null){var a=p(t);if(a!==null){if(t=a.tag,t===13){if(t=z(a),t!==null){e.blockedOn=t,y0(e.priority,function(){if(a.tag===13){var l=rt();l=cu(l);var n=al(a,l);n!==null&&ot(n,a,l),fr(a,l)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=mr(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);yu=l,a.target.dispatchEvent(l),yu=null}else return t=Za(a),t!==null&&bd(t),e.blockedOn=a,!1;t.shift()}return!0}function Nd(e,t,a){Zi(e)&&a.delete(t)}function zh(){gr=!1,pa!==null&&Zi(pa)&&(pa=null),ya!==null&&Zi(ya)&&(ya=null),va!==null&&Zi(va)&&(va=null),En.forEach(Nd),Nn.forEach(Nd)}function ki(e,t){e.blockedOn===t&&(e.blockedOn=null,gr||(gr=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,zh)))}var Vi=null;function Td(e){Vi!==e&&(Vi=e,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){Vi===e&&(Vi=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(hr(l||a)===null)continue;break}var i=Za(a);i!==null&&(e.splice(t,3),t-=3,hc(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function zn(e){function t(g){return ki(g,e)}pa!==null&&ki(pa,e),ya!==null&&ki(ya,e),va!==null&&ki(va,e),En.forEach(t),Nn.forEach(t);for(var a=0;a<ba.length;a++){var l=ba[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<ba.length&&(a=ba[0],a.blockedOn===null);)Ed(a),a.blockedOn===null&&ba.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],c=n[Je]||null;if(typeof i=="function")c||Td(a);else if(c){var r=null;if(i&&i.hasAttribute("formAction")){if(n=i,c=i[Je]||null)r=c.formAction;else if(hr(n)!==null)continue}else r=c.action;typeof r=="function"?a[l+1]=r:(a.splice(l,3),l-=3),Td(a)}}}function pr(e){this._internalRoot=e}Ki.prototype.render=pr.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var a=t.current,l=rt();yd(a,l,e,t,null,null)},Ki.prototype.unmount=pr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;yd(e.current,2,null,e,null,null),Ri(),t[Xa]=null}};function Ki(e){this._internalRoot=e}Ki.prototype.unstable_scheduleHydration=function(e){if(e){var t=Br();e={blockedOn:null,target:e,priority:t};for(var a=0;a<ba.length&&t!==0&&t<ba[a].priority;a++);ba.splice(a,0,e),a===0&&Ed(e)}};var zd=s.version;if(zd!=="19.1.1")throw Error(o(527,zd,"19.1.1"));Y.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=b(t),e=e!==null?h(e):null,e=e===null?null:e.stateNode,e};var Ah={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ji=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ji.isDisabled&&Ji.supportsFiber)try{Rl=Ji.inject(Ah),tt=Ji}catch{}}return Mn.createRoot=function(e,t){if(!m(e))throw Error(o(299));var a=!1,l="",n=Ls,i=Gs,c=Xs,r=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(r=t.unstable_transitionCallbacks)),t=gd(e,1,!1,null,null,a,l,n,i,c,r,null),e[Xa]=t.current,Pc(e),new pr(t)},Mn.hydrateRoot=function(e,t,a){if(!m(e))throw Error(o(299));var l=!1,n="",i=Ls,c=Gs,r=Xs,g=null,E=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(c=a.onCaughtError),a.onRecoverableError!==void 0&&(r=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(g=a.unstable_transitionCallbacks),a.formState!==void 0&&(E=a.formState)),t=gd(e,1,!0,t,a??null,l,n,i,c,r,g,E),t.context=pd(null),a=t.current,l=rt(),l=cu(l),n=aa(l),n.callback=null,la(a,n,l),a=l,t.current.lanes=a,_l(t,a),Rt(t),e[Xa]=t.current,Pc(e),new Ki(t)},Mn.version="19.1.1",Mn}var Cd;function Yh(){if(Cd)return br.exports;Cd=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(s){console.error(s)}}return u(),br.exports=Hh(),br.exports}var qh=Yh();const Bh=Xd(qh);/**
 * react-router v7.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Hd="popstate";function Lh(u={}){function s(o,m){let{pathname:p,search:z,hash:R}=o.location;return zr("",{pathname:p,search:z,hash:R},m.state&&m.state.usr||null,m.state&&m.state.key||"default")}function f(o,m){return typeof m=="string"?m:_n(m)}return Xh(s,f,null,u)}function De(u,s){if(u===!1||u===null||typeof u>"u")throw new Error(s)}function jt(u,s){if(!u){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function Gh(){return Math.random().toString(36).substring(2,10)}function Yd(u,s){return{usr:u.state,key:u.key,idx:s}}function zr(u,s,f=null,o){return{pathname:typeof u=="string"?u:u.pathname,search:"",hash:"",...typeof s=="string"?On(s):s,state:f,key:s&&s.key||o||Gh()}}function _n({pathname:u="/",search:s="",hash:f=""}){return s&&s!=="?"&&(u+=s.charAt(0)==="?"?s:"?"+s),f&&f!=="#"&&(u+=f.charAt(0)==="#"?f:"#"+f),u}function On(u){let s={};if(u){let f=u.indexOf("#");f>=0&&(s.hash=u.substring(f),u=u.substring(0,f));let o=u.indexOf("?");o>=0&&(s.search=u.substring(o),u=u.substring(0,o)),u&&(s.pathname=u)}return s}function Xh(u,s,f,o={}){let{window:m=document.defaultView,v5Compat:p=!1}=o,z=m.history,R="POP",b=null,h=M();h==null&&(h=0,z.replaceState({...z.state,idx:h},""));function M(){return(z.state||{idx:null}).idx}function U(){R="POP";let Z=M(),q=Z==null?null:Z-h;h=Z,b&&b({action:R,location:Q.location,delta:q})}function C(Z,q){R="PUSH";let ue=zr(Q.location,Z,q);h=M()+1;let I=Yd(ue,h),xe=Q.createHref(ue);try{z.pushState(I,"",xe)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;m.location.assign(xe)}p&&b&&b({action:R,location:Q.location,delta:1})}function W(Z,q){R="REPLACE";let ue=zr(Q.location,Z,q);h=M();let I=Yd(ue,h),xe=Q.createHref(ue);z.replaceState(I,"",xe),p&&b&&b({action:R,location:Q.location,delta:0})}function X(Z){return Qh(Z)}let Q={get action(){return R},get location(){return u(m,z)},listen(Z){if(b)throw new Error("A history only accepts one active listener");return m.addEventListener(Hd,U),b=Z,()=>{m.removeEventListener(Hd,U),b=null}},createHref(Z){return s(m,Z)},createURL:X,encodeLocation(Z){let q=X(Z);return{pathname:q.pathname,search:q.search,hash:q.hash}},push:C,replace:W,go(Z){return z.go(Z)}};return Q}function Qh(u,s=!1){let f="http://localhost";typeof window<"u"&&(f=window.location.origin!=="null"?window.location.origin:window.location.href),De(f,"No window.location.(origin|href) available to create URL");let o=typeof u=="string"?u:_n(u);return o=o.replace(/ $/,"%20"),!s&&o.startsWith("//")&&(o=f+o),new URL(o,f)}function Qd(u,s,f="/"){return Zh(u,s,f,!1)}function Zh(u,s,f,o){let m=typeof s=="string"?On(s):s,p=Kt(m.pathname||"/",f);if(p==null)return null;let z=Zd(u);kh(z);let R=null;for(let b=0;R==null&&b<z.length;++b){let h=ag(p);R=eg(z[b],h,o)}return R}function Zd(u,s=[],f=[],o=""){let m=(p,z,R)=>{let b={relativePath:R===void 0?p.path||"":R,caseSensitive:p.caseSensitive===!0,childrenIndex:z,route:p};b.relativePath.startsWith("/")&&(De(b.relativePath.startsWith(o),`Absolute route path "${b.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),b.relativePath=b.relativePath.slice(o.length));let h=Vt([o,b.relativePath]),M=f.concat(b);p.children&&p.children.length>0&&(De(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),Zd(p.children,s,M,h)),!(p.path==null&&!p.index)&&s.push({path:h,score:Ph(h,p.index),routesMeta:M})};return u.forEach((p,z)=>{if(p.path===""||!p.path?.includes("?"))m(p,z);else for(let R of kd(p.path))m(p,z,R)}),s}function kd(u){let s=u.split("/");if(s.length===0)return[];let[f,...o]=s,m=f.endsWith("?"),p=f.replace(/\?$/,"");if(o.length===0)return m?[p,""]:[p];let z=kd(o.join("/")),R=[];return R.push(...z.map(b=>b===""?p:[p,b].join("/"))),m&&R.push(...z),R.map(b=>u.startsWith("/")&&b===""?"/":b)}function kh(u){u.sort((s,f)=>s.score!==f.score?f.score-s.score:Ih(s.routesMeta.map(o=>o.childrenIndex),f.routesMeta.map(o=>o.childrenIndex)))}var Vh=/^:[\w-]+$/,Kh=3,Jh=2,$h=1,Wh=10,Fh=-2,qd=u=>u==="*";function Ph(u,s){let f=u.split("/"),o=f.length;return f.some(qd)&&(o+=Fh),s&&(o+=Jh),f.filter(m=>!qd(m)).reduce((m,p)=>m+(Vh.test(p)?Kh:p===""?$h:Wh),o)}function Ih(u,s){return u.length===s.length&&u.slice(0,-1).every((o,m)=>o===s[m])?u[u.length-1]-s[s.length-1]:0}function eg(u,s,f=!1){let{routesMeta:o}=u,m={},p="/",z=[];for(let R=0;R<o.length;++R){let b=o[R],h=R===o.length-1,M=p==="/"?s:s.slice(p.length)||"/",U=Pi({path:b.relativePath,caseSensitive:b.caseSensitive,end:h},M),C=b.route;if(!U&&h&&f&&!o[o.length-1].route.index&&(U=Pi({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},M)),!U)return null;Object.assign(m,U.params),z.push({params:m,pathname:Vt([p,U.pathname]),pathnameBase:ug(Vt([p,U.pathnameBase])),route:C}),U.pathnameBase!=="/"&&(p=Vt([p,U.pathnameBase]))}return z}function Pi(u,s){typeof u=="string"&&(u={path:u,caseSensitive:!1,end:!0});let[f,o]=tg(u.path,u.caseSensitive,u.end),m=s.match(f);if(!m)return null;let p=m[0],z=p.replace(/(.)\/+$/,"$1"),R=m.slice(1);return{params:o.reduce((h,{paramName:M,isOptional:U},C)=>{if(M==="*"){let X=R[C]||"";z=p.slice(0,p.length-X.length).replace(/(.)\/+$/,"$1")}const W=R[C];return U&&!W?h[M]=void 0:h[M]=(W||"").replace(/%2F/g,"/"),h},{}),pathname:p,pathnameBase:z,pattern:u}}function tg(u,s=!1,f=!0){jt(u==="*"||!u.endsWith("*")||u.endsWith("/*"),`Route path "${u}" will be treated as if it were "${u.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${u.replace(/\*$/,"/*")}".`);let o=[],m="^"+u.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(z,R,b)=>(o.push({paramName:R,isOptional:b!=null}),b?"/?([^\\/]+)?":"/([^\\/]+)"));return u.endsWith("*")?(o.push({paramName:"*"}),m+=u==="*"||u==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):f?m+="\\/*$":u!==""&&u!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,s?void 0:"i"),o]}function ag(u){try{return u.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return jt(!1,`The URL path "${u}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`),u}}function Kt(u,s){if(s==="/")return u;if(!u.toLowerCase().startsWith(s.toLowerCase()))return null;let f=s.endsWith("/")?s.length-1:s.length,o=u.charAt(f);return o&&o!=="/"?null:u.slice(f)||"/"}function lg(u,s="/"){let{pathname:f,search:o="",hash:m=""}=typeof u=="string"?On(u):u;return{pathname:f?f.startsWith("/")?f:ng(f,s):s,search:cg(o),hash:rg(m)}}function ng(u,s){let f=s.replace(/\/+$/,"").split("/");return u.split("/").forEach(m=>{m===".."?f.length>1&&f.pop():m!=="."&&f.push(m)}),f.length>1?f.join("/"):"/"}function Nr(u,s,f,o){return`Cannot include a '${u}' character in a manually specified \`to.${s}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${f}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function ig(u){return u.filter((s,f)=>f===0||s.route.path&&s.route.path.length>0)}function Vd(u){let s=ig(u);return s.map((f,o)=>o===s.length-1?f.pathname:f.pathnameBase)}function Kd(u,s,f,o=!1){let m;typeof u=="string"?m=On(u):(m={...u},De(!m.pathname||!m.pathname.includes("?"),Nr("?","pathname","search",m)),De(!m.pathname||!m.pathname.includes("#"),Nr("#","pathname","hash",m)),De(!m.search||!m.search.includes("#"),Nr("#","search","hash",m)));let p=u===""||m.pathname==="",z=p?"/":m.pathname,R;if(z==null)R=f;else{let U=s.length-1;if(!o&&z.startsWith("..")){let C=z.split("/");for(;C[0]==="..";)C.shift(),U-=1;m.pathname=C.join("/")}R=U>=0?s[U]:"/"}let b=lg(m,R),h=z&&z!=="/"&&z.endsWith("/"),M=(p||z===".")&&f.endsWith("/");return!b.pathname.endsWith("/")&&(h||M)&&(b.pathname+="/"),b}var Vt=u=>u.join("/").replace(/\/\/+/g,"/"),ug=u=>u.replace(/\/+$/,"").replace(/^\/*/,"/"),cg=u=>!u||u==="?"?"":u.startsWith("?")?u:"?"+u,rg=u=>!u||u==="#"?"":u.startsWith("#")?u:"#"+u;function og(u){return u!=null&&typeof u.status=="number"&&typeof u.statusText=="string"&&typeof u.internal=="boolean"&&"data"in u}var Jd=["POST","PUT","PATCH","DELETE"];new Set(Jd);var sg=["GET",...Jd];new Set(sg);var Ml=A.createContext(null);Ml.displayName="DataRouter";var Ii=A.createContext(null);Ii.displayName="DataRouterState";A.createContext(!1);var $d=A.createContext({isTransitioning:!1});$d.displayName="ViewTransition";var fg=A.createContext(new Map);fg.displayName="Fetchers";var dg=A.createContext(null);dg.displayName="Await";var _t=A.createContext(null);_t.displayName="Navigation";var eu=A.createContext(null);eu.displayName="Location";var Jt=A.createContext({outlet:null,matches:[],isDataRoute:!1});Jt.displayName="Route";var Mr=A.createContext(null);Mr.displayName="RouteError";function mg(u,{relative:s}={}){De(Dn(),"useHref() may be used only in the context of a <Router> component.");let{basename:f,navigator:o}=A.useContext(_t),{hash:m,pathname:p,search:z}=wn(u,{relative:s}),R=p;return f!=="/"&&(R=p==="/"?f:Vt([f,p])),o.createHref({pathname:R,search:z,hash:m})}function Dn(){return A.useContext(eu)!=null}function Sa(){return De(Dn(),"useLocation() may be used only in the context of a <Router> component."),A.useContext(eu).location}var Wd="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Fd(u){A.useContext(_t).static||A.useLayoutEffect(u)}function hg(){let{isDataRoute:u}=A.useContext(Jt);return u?Mg():gg()}function gg(){De(Dn(),"useNavigate() may be used only in the context of a <Router> component.");let u=A.useContext(Ml),{basename:s,navigator:f}=A.useContext(_t),{matches:o}=A.useContext(Jt),{pathname:m}=Sa(),p=JSON.stringify(Vd(o)),z=A.useRef(!1);return Fd(()=>{z.current=!0}),A.useCallback((b,h={})=>{if(jt(z.current,Wd),!z.current)return;if(typeof b=="number"){f.go(b);return}let M=Kd(b,JSON.parse(p),m,h.relative==="path");u==null&&s!=="/"&&(M.pathname=M.pathname==="/"?s:Vt([s,M.pathname])),(h.replace?f.replace:f.push)(M,h.state,h)},[s,f,p,m,u])}A.createContext(null);function wn(u,{relative:s}={}){let{matches:f}=A.useContext(Jt),{pathname:o}=Sa(),m=JSON.stringify(Vd(f));return A.useMemo(()=>Kd(u,JSON.parse(m),o,s==="path"),[u,m,o,s])}function pg(u,s,f,o){De(Dn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:m}=A.useContext(_t),{matches:p}=A.useContext(Jt),z=p[p.length-1],R=z?z.params:{},b=z?z.pathname:"/",h=z?z.pathnameBase:"/",M=z&&z.route;{let q=M&&M.path||"";Pd(b,!M||q.endsWith("*")||q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${b}" (under <Route path="${q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${q}"> to <Route path="${q==="/"?"*":`${q}/*`}">.`)}let U=Sa(),C;C=U;let W=C.pathname||"/",X=W;if(h!=="/"){let q=h.replace(/^\//,"").split("/");X="/"+W.replace(/^\//,"").split("/").slice(q.length).join("/")}let Q=Qd(u,{pathname:X});return jt(M||Q!=null,`No routes matched location "${C.pathname}${C.search}${C.hash}" `),jt(Q==null||Q[Q.length-1].route.element!==void 0||Q[Q.length-1].route.Component!==void 0||Q[Q.length-1].route.lazy!==void 0,`Matched leaf route at location "${C.pathname}${C.search}${C.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),Sg(Q&&Q.map(q=>Object.assign({},q,{params:Object.assign({},R,q.params),pathname:Vt([h,m.encodeLocation?m.encodeLocation(q.pathname).pathname:q.pathname]),pathnameBase:q.pathnameBase==="/"?h:Vt([h,m.encodeLocation?m.encodeLocation(q.pathnameBase).pathname:q.pathnameBase])})),p,f,o)}function yg(){let u=Ag(),s=og(u)?`${u.status} ${u.statusText}`:u instanceof Error?u.message:JSON.stringify(u),f=u instanceof Error?u.stack:null,o="rgba(200,200,200, 0.5)",m={padding:"0.5rem",backgroundColor:o},p={padding:"2px 4px",backgroundColor:o},z=null;return console.error("Error handled by React Router default ErrorBoundary:",u),z=A.createElement(A.Fragment,null,A.createElement("p",null,"💿 Hey developer 👋"),A.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",A.createElement("code",{style:p},"ErrorBoundary")," or"," ",A.createElement("code",{style:p},"errorElement")," prop on your route.")),A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},s),f?A.createElement("pre",{style:m},f):null,z)}var vg=A.createElement(yg,null),bg=class extends A.Component{constructor(u){super(u),this.state={location:u.location,revalidation:u.revalidation,error:u.error}}static getDerivedStateFromError(u){return{error:u}}static getDerivedStateFromProps(u,s){return s.location!==u.location||s.revalidation!=="idle"&&u.revalidation==="idle"?{error:u.error,location:u.location,revalidation:u.revalidation}:{error:u.error!==void 0?u.error:s.error,location:s.location,revalidation:u.revalidation||s.revalidation}}componentDidCatch(u,s){console.error("React Router caught the following error during render",u,s)}render(){return this.state.error!==void 0?A.createElement(Jt.Provider,{value:this.props.routeContext},A.createElement(Mr.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function xg({routeContext:u,match:s,children:f}){let o=A.useContext(Ml);return o&&o.static&&o.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=s.route.id),A.createElement(Jt.Provider,{value:u},f)}function Sg(u,s=[],f=null,o=null){if(u==null){if(!f)return null;if(f.errors)u=f.matches;else if(s.length===0&&!f.initialized&&f.matches.length>0)u=f.matches;else return null}let m=u,p=f?.errors;if(p!=null){let b=m.findIndex(h=>h.route.id&&p?.[h.route.id]!==void 0);De(b>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),m=m.slice(0,Math.min(m.length,b+1))}let z=!1,R=-1;if(f)for(let b=0;b<m.length;b++){let h=m[b];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(R=b),h.route.id){let{loaderData:M,errors:U}=f,C=h.route.loader&&!M.hasOwnProperty(h.route.id)&&(!U||U[h.route.id]===void 0);if(h.route.lazy||C){z=!0,R>=0?m=m.slice(0,R+1):m=[m[0]];break}}}return m.reduceRight((b,h,M)=>{let U,C=!1,W=null,X=null;f&&(U=p&&h.route.id?p[h.route.id]:void 0,W=h.route.errorElement||vg,z&&(R<0&&M===0?(Pd("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),C=!0,X=null):R===M&&(C=!0,X=h.route.hydrateFallbackElement||null)));let Q=s.concat(m.slice(0,M+1)),Z=()=>{let q;return U?q=W:C?q=X:h.route.Component?q=A.createElement(h.route.Component,null):h.route.element?q=h.route.element:q=b,A.createElement(xg,{match:h,routeContext:{outlet:b,matches:Q,isDataRoute:f!=null},children:q})};return f&&(h.route.ErrorBoundary||h.route.errorElement||M===0)?A.createElement(bg,{location:f.location,revalidation:f.revalidation,component:W,error:U,children:Z(),routeContext:{outlet:null,matches:Q,isDataRoute:!0}}):Z()},null)}function Rr(u){return`${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Eg(u){let s=A.useContext(Ml);return De(s,Rr(u)),s}function Ng(u){let s=A.useContext(Ii);return De(s,Rr(u)),s}function Tg(u){let s=A.useContext(Jt);return De(s,Rr(u)),s}function jr(u){let s=Tg(u),f=s.matches[s.matches.length-1];return De(f.route.id,`${u} can only be used on routes that contain a unique "id"`),f.route.id}function zg(){return jr("useRouteId")}function Ag(){let u=A.useContext(Mr),s=Ng("useRouteError"),f=jr("useRouteError");return u!==void 0?u:s.errors?.[f]}function Mg(){let{router:u}=Eg("useNavigate"),s=jr("useNavigate"),f=A.useRef(!1);return Fd(()=>{f.current=!0}),A.useCallback(async(m,p={})=>{jt(f.current,Wd),f.current&&(typeof m=="number"?u.navigate(m):await u.navigate(m,{fromRouteId:s,...p}))},[u,s])}var Bd={};function Pd(u,s,f){!s&&!Bd[u]&&(Bd[u]=!0,jt(!1,f))}A.memo(Rg);function Rg({routes:u,future:s,state:f}){return pg(u,void 0,f,s)}function jg({basename:u="/",children:s=null,location:f,navigationType:o="POP",navigator:m,static:p=!1}){De(!Dn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let z=u.replace(/^\/*/,"/"),R=A.useMemo(()=>({basename:z,navigator:m,static:p,future:{}}),[z,m,p]);typeof f=="string"&&(f=On(f));let{pathname:b="/",search:h="",hash:M="",state:U=null,key:C="default"}=f,W=A.useMemo(()=>{let X=Kt(b,z);return X==null?null:{location:{pathname:X,search:h,hash:M,state:U,key:C},navigationType:o}},[z,b,h,M,U,C,o]);return jt(W!=null,`<Router basename="${z}"> is not able to match the URL "${b}${h}${M}" because it does not start with the basename, so the <Router> won't render anything.`),W==null?null:A.createElement(_t.Provider,{value:R},A.createElement(eu.Provider,{children:s,value:W}))}var Wi="get",Fi="application/x-www-form-urlencoded";function tu(u){return u!=null&&typeof u.tagName=="string"}function _g(u){return tu(u)&&u.tagName.toLowerCase()==="button"}function Og(u){return tu(u)&&u.tagName.toLowerCase()==="form"}function Dg(u){return tu(u)&&u.tagName.toLowerCase()==="input"}function wg(u){return!!(u.metaKey||u.altKey||u.ctrlKey||u.shiftKey)}function Ug(u,s){return u.button===0&&(!s||s==="_self")&&!wg(u)}var $i=null;function Cg(){if($i===null)try{new FormData(document.createElement("form"),0),$i=!1}catch{$i=!0}return $i}var Hg=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Tr(u){return u!=null&&!Hg.has(u)?(jt(!1,`"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Fi}"`),null):u}function Yg(u,s){let f,o,m,p,z;if(Og(u)){let R=u.getAttribute("action");o=R?Kt(R,s):null,f=u.getAttribute("method")||Wi,m=Tr(u.getAttribute("enctype"))||Fi,p=new FormData(u)}else if(_g(u)||Dg(u)&&(u.type==="submit"||u.type==="image")){let R=u.form;if(R==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=u.getAttribute("formaction")||R.getAttribute("action");if(o=b?Kt(b,s):null,f=u.getAttribute("formmethod")||R.getAttribute("method")||Wi,m=Tr(u.getAttribute("formenctype"))||Tr(R.getAttribute("enctype"))||Fi,p=new FormData(R,u),!Cg()){let{name:h,type:M,value:U}=u;if(M==="image"){let C=h?`${h}.`:"";p.append(`${C}x`,"0"),p.append(`${C}y`,"0")}else h&&p.append(h,U)}}else{if(tu(u))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');f=Wi,o=null,m=Fi,z=u}return p&&m==="text/plain"&&(z=p,p=void 0),{action:o,method:f.toLowerCase(),encType:m,formData:p,body:z}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function _r(u,s){if(u===!1||u===null||typeof u>"u")throw new Error(s)}function qg(u,s,f){let o=typeof u=="string"?new URL(u,typeof window>"u"?"server://singlefetch/":window.location.origin):u;return o.pathname==="/"?o.pathname=`_root.${f}`:s&&Kt(o.pathname,s)==="/"?o.pathname=`${s.replace(/\/$/,"")}/_root.${f}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${f}`,o}async function Bg(u,s){if(u.id in s)return s[u.id];try{let f=await import(u.module);return s[u.id]=f,f}catch(f){return console.error(`Error loading route module \`${u.module}\`, reloading page...`),console.error(f),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Lg(u){return u==null?!1:u.href==null?u.rel==="preload"&&typeof u.imageSrcSet=="string"&&typeof u.imageSizes=="string":typeof u.rel=="string"&&typeof u.href=="string"}async function Gg(u,s,f){let o=await Promise.all(u.map(async m=>{let p=s.routes[m.route.id];if(p){let z=await Bg(p,f);return z.links?z.links():[]}return[]}));return kg(o.flat(1).filter(Lg).filter(m=>m.rel==="stylesheet"||m.rel==="preload").map(m=>m.rel==="stylesheet"?{...m,rel:"prefetch",as:"style"}:{...m,rel:"prefetch"}))}function Ld(u,s,f,o,m,p){let z=(b,h)=>f[h]?b.route.id!==f[h].route.id:!0,R=(b,h)=>f[h].pathname!==b.pathname||f[h].route.path?.endsWith("*")&&f[h].params["*"]!==b.params["*"];return p==="assets"?s.filter((b,h)=>z(b,h)||R(b,h)):p==="data"?s.filter((b,h)=>{let M=o.routes[b.route.id];if(!M||!M.hasLoader)return!1;if(z(b,h)||R(b,h))return!0;if(b.route.shouldRevalidate){let U=b.route.shouldRevalidate({currentUrl:new URL(m.pathname+m.search+m.hash,window.origin),currentParams:f[0]?.params||{},nextUrl:new URL(u,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof U=="boolean")return U}return!0}):[]}function Xg(u,s,{includeHydrateFallback:f}={}){return Qg(u.map(o=>{let m=s.routes[o.route.id];if(!m)return[];let p=[m.module];return m.clientActionModule&&(p=p.concat(m.clientActionModule)),m.clientLoaderModule&&(p=p.concat(m.clientLoaderModule)),f&&m.hydrateFallbackModule&&(p=p.concat(m.hydrateFallbackModule)),m.imports&&(p=p.concat(m.imports)),p}).flat(1))}function Qg(u){return[...new Set(u)]}function Zg(u){let s={},f=Object.keys(u).sort();for(let o of f)s[o]=u[o];return s}function kg(u,s){let f=new Set;return new Set(s),u.reduce((o,m)=>{let p=JSON.stringify(Zg(m));return f.has(p)||(f.add(p),o.push({key:p,link:m})),o},[])}function Id(){let u=A.useContext(Ml);return _r(u,"You must render this element inside a <DataRouterContext.Provider> element"),u}function Vg(){let u=A.useContext(Ii);return _r(u,"You must render this element inside a <DataRouterStateContext.Provider> element"),u}var Or=A.createContext(void 0);Or.displayName="FrameworkContext";function e0(){let u=A.useContext(Or);return _r(u,"You must render this element inside a <HydratedRouter> element"),u}function Kg(u,s){let f=A.useContext(Or),[o,m]=A.useState(!1),[p,z]=A.useState(!1),{onFocus:R,onBlur:b,onMouseEnter:h,onMouseLeave:M,onTouchStart:U}=s,C=A.useRef(null);A.useEffect(()=>{if(u==="render"&&z(!0),u==="viewport"){let Q=q=>{q.forEach(ue=>{z(ue.isIntersecting)})},Z=new IntersectionObserver(Q,{threshold:.5});return C.current&&Z.observe(C.current),()=>{Z.disconnect()}}},[u]),A.useEffect(()=>{if(o){let Q=setTimeout(()=>{z(!0)},100);return()=>{clearTimeout(Q)}}},[o]);let W=()=>{m(!0)},X=()=>{m(!1),z(!1)};return f?u!=="intent"?[p,C,{}]:[p,C,{onFocus:Rn(R,W),onBlur:Rn(b,X),onMouseEnter:Rn(h,W),onMouseLeave:Rn(M,X),onTouchStart:Rn(U,W)}]:[!1,C,{}]}function Rn(u,s){return f=>{u&&u(f),f.defaultPrevented||s(f)}}function Jg({page:u,...s}){let{router:f}=Id(),o=A.useMemo(()=>Qd(f.routes,u,f.basename),[f.routes,u,f.basename]);return o?A.createElement(Wg,{page:u,matches:o,...s}):null}function $g(u){let{manifest:s,routeModules:f}=e0(),[o,m]=A.useState([]);return A.useEffect(()=>{let p=!1;return Gg(u,s,f).then(z=>{p||m(z)}),()=>{p=!0}},[u,s,f]),o}function Wg({page:u,matches:s,...f}){let o=Sa(),{manifest:m,routeModules:p}=e0(),{basename:z}=Id(),{loaderData:R,matches:b}=Vg(),h=A.useMemo(()=>Ld(u,s,b,m,o,"data"),[u,s,b,m,o]),M=A.useMemo(()=>Ld(u,s,b,m,o,"assets"),[u,s,b,m,o]),U=A.useMemo(()=>{if(u===o.pathname+o.search+o.hash)return[];let X=new Set,Q=!1;if(s.forEach(q=>{let ue=m.routes[q.route.id];!ue||!ue.hasLoader||(!h.some(I=>I.route.id===q.route.id)&&q.route.id in R&&p[q.route.id]?.shouldRevalidate||ue.hasClientLoader?Q=!0:X.add(q.route.id))}),X.size===0)return[];let Z=qg(u,z,"data");return Q&&X.size>0&&Z.searchParams.set("_routes",s.filter(q=>X.has(q.route.id)).map(q=>q.route.id).join(",")),[Z.pathname+Z.search]},[z,R,o,m,h,s,u,p]),C=A.useMemo(()=>Xg(M,m),[M,m]),W=$g(M);return A.createElement(A.Fragment,null,U.map(X=>A.createElement("link",{key:X,rel:"prefetch",as:"fetch",href:X,...f})),C.map(X=>A.createElement("link",{key:X,rel:"modulepreload",href:X,...f})),W.map(({key:X,link:Q})=>A.createElement("link",{key:X,...Q})))}function Fg(...u){return s=>{u.forEach(f=>{typeof f=="function"?f(s):f!=null&&(f.current=s)})}}var t0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{t0&&(window.__reactRouterVersion="7.7.1")}catch{}function Pg({basename:u,children:s,window:f}){let o=A.useRef();o.current==null&&(o.current=Lh({window:f,v5Compat:!0}));let m=o.current,[p,z]=A.useState({action:m.action,location:m.location}),R=A.useCallback(b=>{A.startTransition(()=>z(b))},[z]);return A.useLayoutEffect(()=>m.listen(R),[m,R]),A.createElement(jg,{basename:u,children:s,location:p.location,navigationType:p.action,navigator:m})}var a0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,jn=A.forwardRef(function({onClick:s,discover:f="render",prefetch:o="none",relative:m,reloadDocument:p,replace:z,state:R,target:b,to:h,preventScrollReset:M,viewTransition:U,...C},W){let{basename:X}=A.useContext(_t),Q=typeof h=="string"&&a0.test(h),Z,q=!1;if(typeof h=="string"&&Q&&(Z=h,t0))try{let Ee=new URL(window.location.href),Ie=h.startsWith("//")?new URL(Ee.protocol+h):new URL(h),st=Kt(Ie.pathname,X);Ie.origin===Ee.origin&&st!=null?h=st+Ie.search+Ie.hash:q=!0}catch{jt(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let ue=mg(h,{relative:m}),[I,xe,F]=Kg(o,C),we=a1(h,{replace:z,state:R,target:b,preventScrollReset:M,relative:m,viewTransition:U});function je(Ee){s&&s(Ee),Ee.defaultPrevented||we(Ee)}let Ue=A.createElement("a",{...C,...F,href:Z||ue,onClick:q||p?s:je,ref:Fg(W,xe),target:b,"data-discover":!Q&&f==="render"?"true":void 0});return I&&!Q?A.createElement(A.Fragment,null,Ue,A.createElement(Jg,{page:ue})):Ue});jn.displayName="Link";var Ig=A.forwardRef(function({"aria-current":s="page",caseSensitive:f=!1,className:o="",end:m=!1,style:p,to:z,viewTransition:R,children:b,...h},M){let U=wn(z,{relative:h.relative}),C=Sa(),W=A.useContext(Ii),{navigator:X,basename:Q}=A.useContext(_t),Z=W!=null&&c1(U)&&R===!0,q=X.encodeLocation?X.encodeLocation(U).pathname:U.pathname,ue=C.pathname,I=W&&W.navigation&&W.navigation.location?W.navigation.location.pathname:null;f||(ue=ue.toLowerCase(),I=I?I.toLowerCase():null,q=q.toLowerCase()),I&&Q&&(I=Kt(I,Q)||I);const xe=q!=="/"&&q.endsWith("/")?q.length-1:q.length;let F=ue===q||!m&&ue.startsWith(q)&&ue.charAt(xe)==="/",we=I!=null&&(I===q||!m&&I.startsWith(q)&&I.charAt(q.length)==="/"),je={isActive:F,isPending:we,isTransitioning:Z},Ue=F?s:void 0,Ee;typeof o=="function"?Ee=o(je):Ee=[o,F?"active":null,we?"pending":null,Z?"transitioning":null].filter(Boolean).join(" ");let Ie=typeof p=="function"?p(je):p;return A.createElement(jn,{...h,"aria-current":Ue,className:Ee,ref:M,style:Ie,to:z,viewTransition:R},typeof b=="function"?b(je):b)});Ig.displayName="NavLink";var e1=A.forwardRef(({discover:u="render",fetcherKey:s,navigate:f,reloadDocument:o,replace:m,state:p,method:z=Wi,action:R,onSubmit:b,relative:h,preventScrollReset:M,viewTransition:U,...C},W)=>{let X=i1(),Q=u1(R,{relative:h}),Z=z.toLowerCase()==="get"?"get":"post",q=typeof R=="string"&&a0.test(R),ue=I=>{if(b&&b(I),I.defaultPrevented)return;I.preventDefault();let xe=I.nativeEvent.submitter,F=xe?.getAttribute("formmethod")||z;X(xe||I.currentTarget,{fetcherKey:s,method:F,navigate:f,replace:m,state:p,relative:h,preventScrollReset:M,viewTransition:U})};return A.createElement("form",{ref:W,method:Z,action:Q,onSubmit:o?b:ue,...C,"data-discover":!q&&u==="render"?"true":void 0})});e1.displayName="Form";function t1(u){return`${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function l0(u){let s=A.useContext(Ml);return De(s,t1(u)),s}function a1(u,{target:s,replace:f,state:o,preventScrollReset:m,relative:p,viewTransition:z}={}){let R=hg(),b=Sa(),h=wn(u,{relative:p});return A.useCallback(M=>{if(Ug(M,s)){M.preventDefault();let U=f!==void 0?f:_n(b)===_n(h);R(u,{replace:U,state:o,preventScrollReset:m,relative:p,viewTransition:z})}},[b,R,h,f,o,s,u,m,p,z])}var l1=0,n1=()=>`__${String(++l1)}__`;function i1(){let{router:u}=l0("useSubmit"),{basename:s}=A.useContext(_t),f=zg();return A.useCallback(async(o,m={})=>{let{action:p,method:z,encType:R,formData:b,body:h}=Yg(o,s);if(m.navigate===!1){let M=m.fetcherKey||n1();await u.fetch(M,f,m.action||p,{preventScrollReset:m.preventScrollReset,formData:b,body:h,formMethod:m.method||z,formEncType:m.encType||R,flushSync:m.flushSync})}else await u.navigate(m.action||p,{preventScrollReset:m.preventScrollReset,formData:b,body:h,formMethod:m.method||z,formEncType:m.encType||R,replace:m.replace,state:m.state,fromRouteId:f,flushSync:m.flushSync,viewTransition:m.viewTransition})},[u,s,f])}function u1(u,{relative:s}={}){let{basename:f}=A.useContext(_t),o=A.useContext(Jt);De(o,"useFormAction must be used inside a RouteContext");let[m]=o.matches.slice(-1),p={...wn(u||".",{relative:s})},z=Sa();if(u==null){p.search=z.search;let R=new URLSearchParams(p.search),b=R.getAll("index");if(b.some(M=>M==="")){R.delete("index"),b.filter(U=>U).forEach(U=>R.append("index",U));let M=R.toString();p.search=M?`?${M}`:""}}return(!u||u===".")&&m.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),f!=="/"&&(p.pathname=p.pathname==="/"?f:Vt([f,p.pathname])),_n(p)}function c1(u,{relative:s}={}){let f=A.useContext($d);De(f!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=l0("useViewTransitionState"),m=wn(u,{relative:s});if(!f.isTransitioning)return!1;let p=Kt(f.currentLocation.pathname,o)||f.currentLocation.pathname,z=Kt(f.nextLocation.pathname,o)||f.nextLocation.pathname;return Pi(m.pathname,z)!=null||Pi(m.pathname,p)!=null}const r1="/MKF/assets/mfk-logo-BYlpRUxs.png",o1=()=>{const[u,s]=A.useState(!1),[f,o]=A.useState(!1),[m,p]=A.useState("hero"),z=Sa(),R=()=>{s(!u)},b=h=>{if(p(h),z.pathname==="/"){const M=document.getElementById(h);M&&M.scrollIntoView({behavior:"smooth",block:"start"})}else window.location.href=`/#${h}`;s(!1)};return A.useEffect(()=>{const h=()=>{o(window.scrollY>100)};return window.addEventListener("scroll",h),()=>window.removeEventListener("scroll",h)},[]),d.jsxs(d.Fragment,{children:[d.jsx("style",{children:`
        #reservation {
          scroll-margin-top: 120px; /* navbar height */
        }
      `}),d.jsx("header",{className:`fixed-top shadow-lg ${f?"header-blur":""}`,style:{zIndex:1040},children:d.jsx("nav",{className:`navbar navbar-expand-lg py-1 ${f?"py-2 scrolled":""}`,style:{paddingLeft:0,paddingRight:0},children:d.jsxs("div",{className:"container-fluid px-0",children:[d.jsx(jn,{to:"/",className:"navbar-brand navbar-brand-custom border-0 bg-transparent p-0 ms-0",onClick:()=>b("hero"),style:{marginLeft:0},children:d.jsx("img",{src:r1,alt:"Restaurant Logo",className:"logo-img",style:{marginLeft:0}})}),d.jsxs("div",{className:"phone-number d-none d-lg-flex align-items-center",style:{color:f?"#3d2940":"white"},children:[d.jsx("i",{className:"bi bi-telephone phone-icon"}),"+91 9922913195"]}),d.jsx("button",{className:"navbar-toggler navbar-toggler-custom ms-auto",type:"button",onClick:R,"aria-label":"Toggle navigation","aria-expanded":u,children:d.jsx("span",{className:"navbar-toggler-icon"})}),d.jsxs("div",{className:`collapse navbar-collapse ${u?"show":""}`,children:[d.jsx("ul",{className:"navbar-nav ms-auto mb-2 mb-lg-0 gap-2",children:[{id:"hero",icon:"house",label:"Home"},{id:"about",icon:"info-circle",label:"About"},{id:"menu",icon:"card-list",label:"Menu"},{id:"contact",icon:"envelope",label:"Contact"}].map(h=>d.jsx("li",{className:"nav-item",children:d.jsxs(jn,{to:"/",onClick:M=>{M.preventDefault(),b(h.id)},className:`nav-link nav-link-custom ${m===h.id?"active-link":""}`,style:{color:f?"#3d2940":"white",borderBottom:m===h.id?"2px solid #3d2940":"2px solid transparent",transition:"all 0.3s ease"},children:[d.jsx("i",{className:`bi bi-${h.icon} me-2`}),h.label]})},h.id))}),d.jsxs("div",{className:"d-flex align-items-center ms-lg-4 mt-3 mt-lg-0 gap-3",children:[d.jsxs(jn,{to:"/",onClick:h=>{h.preventDefault(),b("reservation")},className:"btn btn-reservation",children:[d.jsx("i",{className:"bi bi-calendar-check me-2"}),"Reservation"]}),d.jsx("div",{className:"d-flex align-items-center gap-2",children:[{href:"https://facebook.com",icon:"facebook"},{href:"https://instagram.com",icon:"instagram"},{href:"https://youtube.com",icon:"youtube"}].map(h=>d.jsx("a",{href:h.href,target:"_blank",rel:"noopener noreferrer",className:"social-icon",style:{color:f?"#3d2940":"#f3f6fa"},children:d.jsx("i",{className:`bi bi-${h.icon}`})},h.icon))})]})]})]})})})]})};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=u=>u.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),f1=u=>u.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,f,o)=>o?o.toUpperCase():f.toLowerCase()),Gd=u=>{const s=f1(u);return s.charAt(0).toUpperCase()+s.slice(1)},n0=(...u)=>u.filter((s,f,o)=>!!s&&s.trim()!==""&&o.indexOf(s)===f).join(" ").trim(),d1=u=>{for(const s in u)if(s.startsWith("aria-")||s==="role"||s==="title")return!0};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var m1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=A.forwardRef(({color:u="currentColor",size:s=24,strokeWidth:f=2,absoluteStrokeWidth:o,className:m="",children:p,iconNode:z,...R},b)=>A.createElement("svg",{ref:b,...m1,width:s,height:s,stroke:u,strokeWidth:o?Number(f)*24/Number(s):f,className:n0("lucide",m),...!p&&!d1(R)&&{"aria-hidden":"true"},...R},[...z.map(([h,M])=>A.createElement(h,M)),...Array.isArray(p)?p:[p]]));/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $t=(u,s)=>{const f=A.forwardRef(({className:o,...m},p)=>A.createElement(h1,{ref:p,iconNode:s,className:n0(`lucide-${s1(Gd(u))}`,`lucide-${u}`,o),...m}));return f.displayName=Gd(u),f};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],p1=$t("arrow-right",g1);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z",key:"1qvrer"}],["path",{d:"M6 17h12",key:"1jwigz"}]],v1=$t("chef-hat",y1);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],x1=$t("circle-check-big",b1);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],E1=$t("clock",S1);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]],T1=$t("coffee",N1);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],A1=$t("heart",z1);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],R1=$t("map-pin",M1);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],_1=$t("phone",j1);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],i0=$t("star",O1),D1=()=>{const[u,s]=A.useState(0),[f,o]=A.useState(!1),m=[{image:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",title:"Authentic Indian Flavors – MKF Restaurant",subtitle:"Where Tradition Meets Innovation"},{image:"https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",title:"Handcrafted Perfection",subtitle:"Every Dish Tells a Story"},{image:"https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",title:"Unforgettable Moments",subtitle:"Create Memories That Last"}];A.useEffect(()=>{o(!0);const R=setInterval(()=>{s(b=>(b+1)%m.length)},6e3);return()=>clearInterval(R)},[m.length]);const p=R=>{s(R)},z=R=>{document.getElementById(R)?.scrollIntoView({behavior:"smooth"})};return d.jsxs(d.Fragment,{children:[d.jsx("style",{jsx:!0,children:`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        
        * {
          font-family: 'Poppins', sans-serif;
        }
        
        .aura-hero-container {
          background: linear-gradient(-45deg, #000000, #0d0d0d, #111111, #000000);         
          min-height: 94vh;
          position: relative;
          overflow: hidden;
        }
        
        .stellar-gradient-text {
          background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7, #fd79a8);
          background-size: 400% 400%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: stellar-wave 4s ease-in-out infinite;
          filter: drop-shadow(0 0 20px rgba(255, 107, 107, 0.3));
        }
        
        @keyframes stellar-wave {
          0%, 100% { background-position: 0% 50%; }
          25% { background-position: 100% 0%; }
          50% { background-position: 100% 100%; }
          75% { background-position: 0% 100%; }
        }
        
        .cosmic-background-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 40% 40%, rgba(120, 219, 226, 0.1) 0%, transparent 50%);
          animation: cosmic-pulse 8s ease-in-out infinite;
        }
        
        @keyframes cosmic-pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        
        .quantum-slide-transition {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transition: all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform-style: preserve-3d;
        }
        
        .quantum-slide-transition.active {
          opacity: 1;
          transform: translateZ(0) rotateY(0deg) scale(1);
        }
        
        .quantum-slide-transition.inactive {
          opacity: 0;
          transform: translateZ(-100px) rotateY(15deg) scale(0.95);
        }
        
        .nebula-image-overlay {
          background: linear-gradient(45deg, rgba(0, 0, 0, 0.7), rgba(26, 26, 46, 0.8), rgba(22, 33, 62, 0.7));
          transition: all 2s ease-in-out;
        }
        
        .nebula-bg-image {
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          filter: brightness(0.4) contrast(1.2) saturate(1.3);
          transition: all 2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          animation: nebula-drift 20s linear infinite;
        }
        
        @keyframes nebula-drift {
          0% { transform: scale(1) rotate(0deg); }
          25% { transform: scale(1.05) rotate(0.5deg); }
          50% { transform: scale(1.1) rotate(0deg); }
          75% { transform: scale(1.05) rotate(-0.5deg); }
          100% { transform: scale(1) rotate(0deg); }
        }
        
        .aurora-primary-button {
          background: linear-gradient(135deg, #e87c39 0%, #f42613 50%, #da521d 100%);
          border: none;
          color: white;
          font-weight: 600;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
          cursor: pointer;
          z-index: 1;
        }
        
        .aurora-primary-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          z-index: -1;
        }
        
        .aurora-primary-button::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: conic-gradient(from 0deg, transparent, rgba(255,255,255,0.1), transparent);
          animation: aurora-rotate 3s linear infinite;
          z-index: -2;
        }
        
        @keyframes aurora-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .aurora-primary-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(102, 126, 234, 0.6);
          background: linear-gradient(135deg, #f093fb 0%, #764ba2 50%, #667eea 100%);
        }
        
        .aurora-primary-button:hover::before {
          left: 100%;
        }
        
        .aurora-primary-button span {
          position: relative;
          z-index: 2;
        }
        
        .prism-secondary-button {
          background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
          border: 2px solid rgba(255,255,255,0.2);
          color: white !important;
          font-weight: 600;
          backdrop-filter: blur(15px);
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          box-shadow: 0 8px 25px rgba(0,0,0,0.3);
          cursor: pointer;
        }
        
        .prism-secondary-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.6s ease;
        }
        
        .prism-secondary-button:hover {
          transform: translateY(-3px);
          border-color: rgba(255,255,255,0.5);
          background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%);
          box-shadow: 0 15px 35px rgba(0,0,0,0.4);
          color: white;
        }
        
        .prism-secondary-button:hover::before {
          left: 100%;
        }
        
        .velocity-arrow-animation {
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform-origin: center;
        }
        
        .aurora-primary-button:hover .velocity-arrow-animation,
        .prism-secondary-button:hover .velocity-arrow-animation {
          transform: translateX(8px) scale(1.1);
        }
        
        .constellation-dot-indicator {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: none;
          padding: 0;
          position: relative;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          box-shadow: 0 0 10px rgba(255,255,255,0.2);
          cursor: pointer;
        }
        
        .constellation-dot-indicator::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 0;
          height: 0;
          background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 100%);
          border-radius: 50%;
          transition: all 0.5s ease;
        }
        
        .constellation-dot-indicator:hover::before,
        .constellation-dot-indicator.constellation-active-dot::before {
          width: 120%;
          height: 120%;
        }
        
        .constellation-dot-indicator:hover {
          transform: scale(1.4);
          box-shadow: 0 0 20px rgba(255,255,255,0.6);
        }
        
        .constellation-dot-indicator.constellation-active-dot {
          transform: scale(1.2);
          box-shadow: 0 0 15px rgba(102, 126, 234, 0.8);
        }
        
        .matrix-content-entrance {
          animation: matrix-materialize 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform-style: preserve-3d;
        }
        
        @keyframes matrix-materialize {
          from {
            opacity: 0;
            transform: translateY(60px) rotateX(20deg) scale(0.9);
            filter: blur(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0deg) scale(1);
            filter: blur(0px);
          }
        }
        
        .hologram-glass-panel {
          backdrop-filter: blur(3.5px);
          border-radius: 25px;
          padding: 2rem 2.5rem;
          max-width: 700px;
          position: relative;
          overflow: hidden;
        }
        
        .hologram-glass-panel::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent);
          animation: hologram-scan 6s linear infinite;
        }
        
        @keyframes hologram-scan {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        
        .dimension-title-shadow {
          text-shadow: 0 5px 25px rgba(0,0,0,0.5), 0 0 30px rgba(102, 126, 234, 0.3);
          filter: drop-shadow(0 0 10px rgba(255,255,255,0.1));
        }
        
        .ethereal-subtitle-glow {
          text-shadow: 0 0 25px rgba(255,255,255,0.4), 0 0 50px rgba(102, 126, 234, 0.2);
          filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
        }
        
        .nova-particle-field {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }
        
        .nova-particle {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(102, 126, 234, 0.3) 70%, transparent 100%);
          animation: nova-float 8s ease-in-out infinite;
          filter: blur(0.5px);
        }
        
        @keyframes nova-float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.3;
          }
          25% { 
            transform: translateY(-15px) translateX(5px) scale(1.1);
            opacity: 0.6;
          }
          50% { 
            transform: translateY(-25px) translateX(-5px) scale(1.2);
            opacity: 0.8;
          }
          75% { 
            transform: translateY(-15px) translateX(3px) scale(1.1);
            opacity: 0.6;
          }
        }
        
        .quantum-entrance-delay-1 { animation-delay: 0.2s; }
        .quantum-entrance-delay-2 { animation-delay: 0.4s; }
        .quantum-entrance-delay-3 { animation-delay: 0.6s; }
        .quantum-entrance-delay-4 { animation-delay: 0.8s; }
        
        .aura-hero-container.loaded .matrix-content-entrance {
          animation-play-state: running;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .hologram-glass-panel {
            padding: 1.5rem 2rem;
            max-width: 95%;
          }
          
          .stellar-gradient-text {
            font-size: 3rem;
          }
        }
        
        /* Mobile-specific adjustments */
        @media (max-width: 576px) {
          .stellar-gradient-text {
            font-size: 2.5rem !important;
          }
          
          .hologram-glass-panel {
            padding: 1.25rem 1.5rem !important;
          }
          
          .btn-lg {
            padding: 0.5rem 1rem !important;
            font-size: 0.9rem !important;
          }
          
          .dimension-title-shadow {
            font-size: 1.5rem !important;
            white-space: normal !important;
          }
          
          .ethereal-subtitle-glow {
            font-size: 1rem !important;
          }
        }
        
        /* Advanced hover interactions */
        .aura-hero-container:hover .cosmic-background-layer {
          animation-duration: 4s;
        }
        
        .aura-hero-container:hover .nebula-bg-image {
          filter: brightness(0.5) contrast(1.3) saturate(1.4);
        }
      `}),d.jsxs("section",{className:`aura-hero-container d-flex align-items-center justify-content-center ${f?"loaded":""}`,children:[d.jsx("div",{className:"cosmic-background-layer"}),m.map((R,b)=>d.jsxs("div",{className:`quantum-slide-transition ${b===u?"active":"inactive"}`,children:[d.jsx("div",{className:"position-absolute top-0 start-0 w-100 h-80 nebula-image-overlay"}),d.jsx("div",{className:"position-absolute top-0 start-0 w-100 h-100 nebula-bg-image",style:{backgroundImage:`url("${R.image}")`}})]},b)),d.jsx("div",{className:"nova-particle-field",children:[...Array(25)].map((R,b)=>d.jsx("div",{className:"nova-particle",style:{width:Math.random()*6+3+"px",height:Math.random()*6+3+"px",left:Math.random()*100+"%",top:Math.random()*100+"%",animationDelay:Math.random()*8+"s",animationDuration:Math.random()*4+6+"s"}},b))}),d.jsxs("div",{className:"position-relative text-center text-white px-4 px-sm-5 w-100",style:{zIndex:10},children:[d.jsx("div",{className:"hologram-glass-panel mx-auto matrix-content-entrance",style:{width:"100%",maxWidth:"900px"},children:d.jsxs("div",{className:"mx-auto",style:{maxWidth:"1000px"},children:[d.jsx("h1",{className:"display-1 fw-bold mb-4 stellar-gradient-text quantum-entrance-delay-1",children:"MKF"}),d.jsx("h2",{className:"display-5 fw-light mb-4 dimension-title-shadow matrix-content-entrance quantum-entrance-delay-2",style:{fontSize:"clamp(1.5rem, 4vw, 2.5rem)"},children:m[u].title}),d.jsx("p",{className:"leadd mb-4 opacity-90 mx-auto ethereal-subtitle-glow matrix-content-entrance quantum-entrance-delay-3",style:{maxWidth:"600px"},children:m[u].subtitle}),d.jsx("p",{className:"mb-5 opacity-75 mx-auto d-none d-md-block matrix-content-entrance quantum-entrance-delay-4",style:{maxWidth:"850px"},children:"Experience authentic Indian flavors in an atmosphere of warmth and tradition..."}),d.jsxs("div",{className:"d-flex flex-column flex-sm-row gap-3 gap-sm-4 justify-content-center align-items-center matrix-content-entrance quantum-entrance-delay-4",children:[d.jsx("button",{onClick:()=>z("reservations"),className:"btn aurora-primary-button btn-lg px-3 px-sm-4 py-2 py-sm-3 rounded-pill d-flex align-items-center gap-2 gap-sm-3",children:d.jsxs("span",{className:"d-flex align-items-center gap-2 gap-sm-3",children:[d.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[d.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),d.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),d.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),d.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),"Reserve Your Table",d.jsxs("svg",{className:"velocity-arrow-animation",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[d.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),d.jsx("polyline",{points:"12,5 19,12 12,19"})]})]})}),d.jsxs("button",{onClick:()=>z("menu"),className:"btn prism-secondary-button btn-lg px-4 px-sm-5 py-2 py-sm-3 rounded-pill d-flex align-items-center gap-2 gap-sm-3",children:[d.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:d.jsx("path",{d:"M3 12h18m-9-9v18"})}),"Explore Menu",d.jsx("svg",{className:"velocity-arrow-animation",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:d.jsx("path",{d:"m9 18 6-6-6-6"})})]})]})]})}),d.jsx("div",{className:"d-flex justify-content-center gap-3 gap-sm-4 mt-4 w-100",children:m.map((R,b)=>d.jsx("button",{className:`constellation-dot-indicator ${b===u?"constellation-active-dot":""}`,style:{backgroundColor:b===u?"#667eea":"rgba(255,255,255,0.3)",width:"clamp(10px, 2vw, 12px)",height:"clamp(10px, 2vw, 12px)",borderRadius:"50%",border:"none",transition:"background-color 0.3s ease"},onClick:()=>p(b),"aria-label":`Go to slide ${b+1}`},b))})]})]})]})},w1=()=>{const[u,s]=A.useState(!1),[f,o]=A.useState(!1),m=A.useRef(null);return A.useEffect(()=>{const p=new IntersectionObserver(([z])=>{z.isIntersecting&&s(!0)},{threshold:.1});return m.current&&p.observe(m.current),()=>p.disconnect()},[]),d.jsxs(d.Fragment,{children:[d.jsx("style",{jsx:!0,children:`

  /* @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');
  .heritage-title, .story-title, .story-text, .heritage-subtitle  {
    font-family: 'Libre Baskerville', serif;
    
  } */


        .heritage-section {
          position: relative;
          overflow: hidden;
          padding: 60px 0;
          display: flex;
          align-items: center;
        }

        .heritage-bg-gradient {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(-45deg, #dcd1ce);
          background-size: 400% 400%;
          animation: gradientShift 8s ease infinite;
        }

        .heritage-bg-gradient::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 30% 70%, rgba(4, 4, 4, 0.08) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(138, 43, 226, 0.06) 0%, transparent 50%),
                      radial-gradient(circle at 50% 50%, rgba(5, 5, 5, 0.02) 0%, transparent 70%);
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .heritage-header {
          text-align: center;
          margin-bottom: 40px;
          opacity: ${u?1:0};
          transition: opacity 1s ease;
        }

        .heritage-title {
          font-size: 3rem;
          font-weight: 600;
          background: linear-gradient(45deg, #85494a);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 20px;
          position: relative;
        }

        .heritage-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 4px;
          background: linear-gradient(90deg, transparent, #9f441d, transparent);
        }

        .heritage-subtitle {
          font-size: 1.1rem;
          color: #3d2940;
          font-weight: 300;
          line-height: 1.6;
          max-width: 100%;
          margin: 0 auto;
          padding: 0 20px;
        }

        .heritage-content {
          display: flex;
          flex-direction: column;
          gap: 40px;
          align-items: center;
          width: 100%;
        }

        .heritage-text {
          opacity: ${u?1:0};
          transition: opacity 1s ease 0.3s;
          width: 100%;
        }

        .heritage-story {
          margin-bottom: 30px;
        }

        .story-title {
          font-size: 1.8rem;
          font-weight: 600;
          color: #85494a;
          margin-bottom: 15px;
          opacity: ${u?1:0};
          transition: opacity 0.8s ease-out 0.5s;
        }

        .story-text {
          font-size: 1rem;
          line-height: 1.7;
          /* color: rgba(36, 36, 36, 0.85); */
          color: #3d2940;
          margin-bottom: 15px;
          opacity: ${u?1:0};
          transition: opacity 1s ease-out 0.7s;
          /* font-weight:500; */
        }

        .story-text:last-child {
          transition-delay: 0.9s;
        }

        .heritage-image {
          opacity: ${u?1:0};
          transition: opacity 1s ease 0.5s;
          position: relative;
          width: 100%;
        }

        /* Enhanced Image Container with Modern Animations */
        .image-container {
          position: relative;
          overflow: hidden;
          border-radius: 15px;
          transform: ${u?"scale(1) rotateY(0deg)":"scale(0.9) rotateY(-15deg)"};
          transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.6s;
          perspective: 1000px;
        }

        .image-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          z-index: 2;
          transition: left 0.8s ease;
          animation: ${f&&u?"shimmer 2s ease-in-out 0.8s":"none"};
        }

        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        .restaurant-image {
          width: 100%;
          height: 300px;
          object-fit: cover;
          border-radius: 15px;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
          transform: ${f&&u?"scale(1)":"scale(1.1)"};
          filter: ${f&&u?"blur(0px) brightness(1)":"blur(2px) brightness(0.8)"};
          transition: all 1.5s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          z-index: 1;
        }

        .restaurant-image:hover {
          transform: scale(1.05);
          filter: brightness(1.1) contrast(1.1);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Floating Animation for Image */
        .image-container.loaded {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1) rotateY(0deg); }
          50% { transform: translateY(-10px) scale(1.01) rotateY(2deg); }
        }

        /* Glowing Border Effect */
        .image-container::after {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, #0e0d0d, #0f0b0b, #0e0c0c, #080808);
          border-radius: 17px;
          z-index: -1;
          opacity: ${u?.6:0};
          transition: opacity 1s ease 1s;
          animation: ${u?"glow 3s ease-in-out infinite alternate":"none"};
        }

        @keyframes glow {
          0% { opacity: 0.3; }
          100% { opacity: 0.8; }
        }

        .heritage-badge {
          position: absolute;
          bottom: 15px;
          left: 15px;
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(10px);
          padding: 10px 15px;
          border-radius: 12px;
          border: 1px solid rgba(255, 215, 0, 0.4);
          opacity: ${u?1:0};
          transform: ${u?"translateY(0) scale(1)":"translateY(20px) scale(0.8)"};
          transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1) 1s;
        }

        .rating-stars {
          display: flex;
          gap: 3px;
          margin-bottom: 5px;
        }

        .rating-star {
          color: #58270e;
          opacity: ${u?1:0};
          transform: ${u?"rotate(0deg) scale(1)":"rotate(180deg) scale(0.5)"};
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .rating-star:nth-child(1) { transition-delay: 1.2s; }
        .rating-star:nth-child(2) { transition-delay: 1.3s; }
        .rating-star:nth-child(3) { transition-delay: 1.4s; }
        .rating-star:nth-child(4) { transition-delay: 1.5s; }

        .rating-text {
          color: rgba(255, 255, 255, 0.85);
          font-size: 0.8rem;
          font-weight: 500;
        }

        .years-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          background: linear-gradient(135deg, #e50b07, #d9791f);
          color: #000;
          padding: 8px 15px;
          border-radius: 40px;
          font-weight: 700;
          font-size: 0.9rem;
          opacity: ${u?1:0};
          transform: ${u?"translateY(0) rotate(0deg)":"translateY(-20px) rotate(-10deg)"};
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1) 1.2s;
          animation: ${u?"pulse 2s ease-in-out infinite":"none"};
        }

        @keyframes pulse {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-2px) scale(1.05); }
        }

        /* Loading Skeleton Effect */
        .image-skeleton {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: ${f?"none":"loading 1.5s infinite"};
          border-radius: 15px;
        }

        @keyframes loading {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        @media (min-width: 768px) {
          .heritage-section {
            min-height: 100vh;
            padding: 100px 0;
          }
          
          .heritage-title {
            font-size: 3rem;
          }
          
          .heritage-subtitle {
            font-size: 1.2rem;
            max-width: 600px;
            padding: 0;
          }
          
          .heritage-content {
            flex-direction: row;
            gap: 60px;
          }
          
          .heritage-text {
            transform: ${u?"translateX(0)":"translateX(-50px)"};
            transition: all 1s ease 0.3s;
          }
          
          .heritage-image {
            transform: ${u?"translateX(0)":"translateX(50px)"};
            transition: all 1s ease 0.5s;
          }
          
          .image-container {
            border-radius: 20px;
          }
          
          .restaurant-image {
            height: 400px;
            border-radius: 20px;
          }
          
          .story-title {
            font-size: 2rem;
          }
          
          .story-text {
            font-size: 1.1rem;
          }
        }

        @media (min-width: 992px) {
          .heritage-title {
            font-size: 3.5rem;
          }
        }
      `}),d.jsxs("section",{ref:m,className:"heritage-section",children:[d.jsx("div",{className:"heritage-bg-gradient"}),d.jsxs("div",{className:"container position-relative",children:[d.jsxs("div",{className:"heritage-header",children:[d.jsx("h2",{className:"heritage-title",children:"Our Heritage"}),d.jsx("p",{className:"heritage-subtitle",children:"A culinary journey that began four decades ago, rooted in tradition and elevated by innovation"})]}),d.jsxs("div",{className:"heritage-content",children:[d.jsxs("div",{className:"heritage-text",children:[d.jsxs("div",{className:"heritage-story",children:[d.jsx("h3",{className:"story-title",children:"From Humble Beginnings"}),d.jsx("p",{className:"story-text",children:"Founded in 2025 by the Rossi family, MKF started as a small trattoria with a simple mission: to share authentic Italian recipes passed down through generations."}),d.jsx("p",{className:"story-text",children:"Today, we continue that legacy while embracing modern culinary techniques, creating an unforgettable dining experience that honors our roots."})]}),d.jsxs("div",{className:"heritage-story",children:[d.jsx("h3",{className:"story-title",children:"Our Philosophy"}),d.jsx("p",{className:"story-text",children:"Every ingredient is carefully selected, every dish crafted with passion, and every guest treated like family. We believe that great food brings people together, creating moments of joy and connection."})]})]}),d.jsx("div",{className:"heritage-image",children:d.jsxs("div",{className:`image-container ${f?"loaded":""}`,children:[!f&&d.jsx("div",{className:"image-skeleton"}),d.jsx("img",{src:"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",alt:"Bella Vista Restaurant Interior",className:"restaurant-image",onLoad:()=>o(!0)}),d.jsxs("div",{className:"heritage-badge",children:[d.jsx("div",{className:"rating-stars",children:[...Array(4)].map((p,z)=>d.jsx(i0,{size:16,fill:"currentColor",className:"rating-star"},z))}),d.jsx("div",{className:"rating-text",children:"Rated 4/5 by 2,847 guests"})]}),d.jsx("div",{className:"years-badge",children:"39 Years"})]})})]})]})]})]})},U1=()=>{const[u,s]=A.useState("all"),f=[{name:"Paneer Butter Masala",price:"₹280 /",description:"Cottage cheese cubes in creamy tomato-butter gravy with spices",category:"mains",image:"https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"},{name:"Dal Tadka",price:"₹200 / $2.5",description:"Yellow lentils tempered with cumin, garlic, and chili",category:"mains",image:"https://i0.wp.com/spicediary.com/wp-content/uploads/2017/08/aIMG_2572_Fotor_Fotor.png?fit=1070%2C713&ssl=1"},{name:"Tandoori Roti",price:"₹25 / $0.3",description:"Whole wheat flatbread cooked in a clay oven, soft yet slightly crisp",category:"mains",image:"https://indianflavorscuisine.com/wp-content/uploads/2024/10/tandoori-roti.jpg"},{name:"Jeera Rice",price:"₹150 / $1.8",description:"Basmati rice tempered with cumin seeds and mild spices",category:"mains",image:"https://masalachilli.com/wp-content/uploads/2020/06/Instant-Pot-Jeera-Rice-2.jpg"},{name:"Salad",price:"₹90 / $1.1",description:"Fresh cucumbers, tomatoes, onions, and lettuce served with lemon",category:"mains",image:"https://theyummybowl.com/wp-content/uploads/cucumber-tomato-onion-salad-9.jpg"},{name:"Samosa",price:"₹60 / $0.7",description:"Crispy pastry filled with spiced potatoes and peas",category:"starters",image:"https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"},{name:"Pani Puri",price:"₹80 / $1",description:"Hollow puris with spicy tangy water, potatoes, and chickpeas",category:"starters",image:"https://www.jkcart.com/uploads/blogs/blogImg_922615519295768484897326741316.jpg"},{name:"Gulab Jamun",price:"₹120 / $1.5",description:"Fried milk dumplings in saffron-cardamom sugar syrup",category:"desserts",image:"https://5.imimg.com/data5/SELLER/Default/2024/2/384944363/DN/MV/KT/144303146/gulab-jamun-desi-ghee.jpg"},{name:"Rasgulla",price:"₹100 / $1.2",description:"Spongy cheese balls soaked in light sugar syrup",category:"desserts",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSob3EerZuChoGLlNXmz5-YZSC4-W-fmFxXSA&s"}],o=[{id:"all",name:"All Menu",icon:T1},{id:"starters",name:"Snacks",icon:i0},{id:"mains",name:"Main Courses",icon:v1},{id:"desserts",name:"Dessert",icon:A1}],m=u==="all"?f:f.filter(p=>p.category===u);return d.jsxs(d.Fragment,{children:[d.jsx("style",{jsx:!0,children:`
        /* Fix: prevent header from cutting section */
        #menu {
          scroll-margin-top: 120px; /* navbar ki height ke hisaab se adjust karna */
        }

        /* Modern Animations & Effects */
        @keyframes floatingParticles {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.6; }
        }
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes slideInUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(255, 107, 53, 0.3); }
          50% { box-shadow: 0 0 40px rgba(255, 107, 53, 0.6), 0 0 60px rgba(255, 107, 53, 0.4); }
        }
        
        @keyframes morphingBorder {
          0% { border-radius: 25px; }
          25% { border-radius: 35px 15px; }
          50% { border-radius: 15px 35px; }
          75% { border-radius: 35px 15px; }
          100% { border-radius: 25px; }
        }
        
        .culinary-masterpiece-section {
          background: linear-gradient(-45deg, #dcd1ce);
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite;
          position: relative;
          overflow: hidden;
          min-height: 100vh;
        }
        
        .culinary-masterpiece-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: radial-gradient(circle at 20% 30%, rgba(255, 107, 53, 0.03) 0%, transparent 50%),
                           radial-gradient(circle at 80% 70%, rgba(255, 165, 0, 0.02) 0%, transparent 50%);
          pointer-events: none;
        }
        
        .floating-particles {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        
        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: linear-gradient(45deg, #85494a);
          border-radius: 50%;
          animation: floatingParticles 8s ease-in-out infinite;
        }
        
        .particle:nth-child(1) { top: 10%; left: 10%; animation-delay: 0s; }
        .particle:nth-child(2) { top: 20%; left: 80%; animation-delay: 2s; }
        .particle:nth-child(3) { top: 60%; left: 20%; animation-delay: 4s; }
        .particle:nth-child(4) { top: 80%; left: 90%; animation-delay: 6s; }
        
        .masterpiece-header { }
        
        .gradient-text {
          background: linear-gradient(135deg,#85494a);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hhh{ color: #85494a; }
        .texttt{ color: #3d2940; }

        .category-filter-btn {
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
          border: 2px solid transparent;
          background: linear-gradient(45deg, #3d2940);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          animation: morphingBorder 6s ease-in-out infinite;
          -webkit-text-fill-color: #f8f6f6;
        }
        .lead{ color:#3d2940; }

        .category-filter-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 107, 53, 0.2), transparent);
          transition: left 0.5s;
        }
        .category-filter-btn:hover::before { left: 100%; }
        .category-filter-btn:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 10px 25px rgba(255, 107, 53, 0.3);
        }
        .category-filter-btn.active {
          background: linear-gradient(135deg, #ff6b35, #ffa500);
          animation: pulseGlow 2s ease-in-out infinite;
          transform: scale(1.1);
          -webkit-text-fill-color: #150e0e;
        }
        
        .premium-dish-card {
          background: linear-gradient(145deg, rgba(140, 12, 12, 0.05), rgba(255, 255, 255, 0.01));
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
          animation: slideInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        .premium-dish-card:nth-child(1) { animation-delay: 0.1s; }
        .premium-dish-card:nth-child(2) { animation-delay: 0.2s; }
        .premium-dish-card:nth-child(3) { animation-delay: 0.3s; }
        .premium-dish-card:nth-child(4) { animation-delay: 0.4s; }
        .premium-dish-card:nth-child(5) { animation-delay: 0.5s; }
        .premium-dish-card:nth-child(6) { animation-delay: 0.6s; }

        .dish-image-container { position: relative; overflow: hidden; border-radius: 20px 20px 0 0; }
        .luxury-dish-img { transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
        .premium-dish-card:hover .luxury-dish-img {
          transform: scale(1.15) rotate(2deg);
          filter: brightness(1.2) saturate(1.3);
        }

        .price-badge-premium {
          background: linear-gradient(135deg, #702c13, #ffa500);
          border-radius: 20px;
          position: relative;
          overflow: hidden;
          animation: pulseGlow 3s ease-in-out infinite;
        }

        .order-btn-deluxe {
          background: linear-gradient(135deg, #24130d, #0c0b08, #ff6b35);
          background-size: 200% 200%;
          border: none;
          border-radius: 25px;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          animation: gradientShift 4s ease infinite;
        }

        .text-white { color: white !important; }
        .text-dark { color: black !important; }
      `}),d.jsxs("section",{id:"menu",className:"culinary-masterpiece-section py-5",children:[d.jsxs("div",{className:"floating-particles",children:[d.jsx("div",{className:"particle"}),d.jsx("div",{className:"particle"}),d.jsx("div",{className:"particle"}),d.jsx("div",{className:"particle"})]}),d.jsxs("div",{className:"container position-relative",children:[d.jsxs("div",{className:"text-center mb-5 masterpiece-header",children:[d.jsx("h2",{className:"display-3 fw-bold gradient-text mb-4",children:"Culinary Masterpieces"}),d.jsx("p",{className:"lead opacity-75 mx-auto",style:{maxWidth:"700px"},children:"Each dish is a work of art, carefully crafted with premium ingredients and passionate expertise"})]}),d.jsx("div",{className:"d-flex flex-wrap justify-content-center gap-3 mb-5",children:o.map(p=>d.jsxs("button",{onClick:()=>s(p.id),className:`btn btn-lg d-flex align-items-center gap-2 category-filter-btn ${u===p.id?"active":""}`,children:[d.jsx(p.icon,{size:18,className:u===p.id?"text-dark":"text-white"}),p.name]},p.id))}),d.jsx("div",{className:"row g-4",children:m.map((p,z)=>d.jsx("div",{className:"col-md-6 col-lg-4",children:d.jsxs("div",{className:"premium-dish-card h-100",children:[d.jsxs("div",{className:"dish-image-container",children:[d.jsx("img",{src:p.image,alt:p.name,className:"card-img-top luxury-dish-img w-100",style:{height:"250px",objectFit:"cover"}}),d.jsx("div",{className:"position-absolute top-0 end-0 price-badge-premium text-white px-3 py-2 fw-bold",style:{margin:"10px"},children:p.price})]}),d.jsxs("div",{className:"card-body p-4",children:[d.jsx("h3",{className:"hhh mb-3 fw-semibold",children:p.name}),d.jsx("p",{className:"texttt opacity-75 mb-4 lh-lg",children:p.description})]})]})},z))})]})]})]})},C1=()=>{const[u,s]=A.useState({name:"",email:"",phone:"",guests:"2",date:"",time:"7:00 PM",requests:""}),f=m=>{s({...u,[m.target.name]:m.target.value})},o=m=>{m.preventDefault(),console.log("Reservation submitted:",u)};return d.jsxs(d.Fragment,{children:[d.jsx("style",{jsx:!0,children:`
        /* Advanced Reservation Animations */
        @keyframes reservationBackgroundFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes floatingElements {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.4; }
          50% { transform: translateY(-25px) rotate(360deg); opacity: 0.7; }
        }
        
        @keyframes slideInFromLeft {
          from { transform: translateX(-100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideInFromRight {
          from { transform: translateX(100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes fadeInScale {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        @keyframes magneticPulse {
          0%, 100% { box-shadow: 0 0 30px rgba(255, 107, 53, 0.3); }
          50% { box-shadow: 0 0 60px rgba(255, 107, 53, 0.6), 0 0 90px rgba(255, 107, 53, 0.4); }
        }
        
        @keyframes inputFocusGlow {
          0% { box-shadow: 0 0 0 0 rgba(255, 107, 53, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(255, 107, 53, 0); }
          100% { box-shadow: 0 0 0 0 rgba(255, 107, 53, 0); }
        }
        
        @keyframes morphingButton {
          0% { border-radius: 25px; }
          25% { border-radius: 35px 15px; }
          50% { border-radius: 15px 35px; }
          75% { border-radius: 35px 15px; }
          100% { border-radius: 25px; }
        }
        
        .luxury-reservation-section {
          background: linear-gradient(-45deg, #dcd1ce);
          background-size: 400% 400%;
          animation: reservationBackgroundFlow 20s ease infinite;
          position: relative;
          overflow: hidden;
          min-height: 100vh;
        }
        
        .luxury-reservation-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(255, 107, 53, 0.02) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(255, 165, 0, 0.015) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(255, 107, 53, 0.01) 0%, transparent 60%);
          pointer-events: none;
        }
        
        .floating-reservation-elements {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        
        .reservation-element {
          position: absolute;
          width: 6px;
          height: 6px;
          background: linear-gradient(45deg, #ff6b35, #ffa500);
          border-radius: 50%;
          animation: floatingElements 12s ease-in-out infinite;
        }
        
        .reservation-element:nth-child(1) { top: 15%; left: 15%; animation-delay: 0s; }
        .reservation-element:nth-child(2) { top: 25%; left: 85%; animation-delay: 3s; }
        .reservation-element:nth-child(3) { top: 65%; left: 10%; animation-delay: 6s; }
        .reservation-element:nth-child(4) { top: 85%; left: 80%; animation-delay: 9s; }
        
        .reservation-header-elite {
          animation: fadeInScale 1.2s ease-out;
        }
        
        .gradient-text-elite {
          color: #85494a;
          background: none;
          -webkit-background-clip: unset;
          background-clip: unset;
          -webkit-text-fill-color: unset;
          animation: none;
        }
        
        .premium-reservation-form {
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01));
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 32px;
          position: relative;
          overflow: hidden;
          animation: fadeInScale 1s ease-out 0.3s both;
        }
        
        .premium-reservation-form::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255, 107, 53, 0.05), transparent 50%);
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        
        .premium-reservation-form:hover::before {
          opacity: 1;
        }
        
        .elite-form-field {
          position: relative;
          animation: slideInFromLeft 0.8s ease-out both;
        }
        
        .elite-form-field:nth-child(even) {
          animation: slideInFromRight 0.8s ease-out both;
        }
        
        .elite-form-field:nth-child(1) { animation-delay: 0.1s; }
        .elite-form-field:nth-child(2) { animation-delay: 0.2s; }
        .elite-form-field:nth-child(3) { animation-delay: 0.3s; }
        .elite-form-field:nth-child(4) { animation-delay: 0.4s; }
        .elite-form-field:nth-child(5) { animation-delay: 0.5s; }
        .elite-form-field:nth-child(6) { animation-delay: 0.6s; }
        .elite-form-field:nth-child(7) { animation-delay: 0.7s; }
        .elite-form-field:nth-child(8) { animation-delay: 0.8s; }
        
        .luxury-form-label {
          color: #3d2940;
          font-weight: 600;
          margin-bottom: 8px;
          position: relative;
          display: inline-block;
          transition: all 0.3s ease;
        }
        
        .luxury-form-label::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #ff6b35, #ffa500);
          transition: width 0.4s ease;
        }
        
        .elite-form-field:hover .luxury-form-label::after,
        .elite-form-field:focus-within .luxury-form-label::after {
          width: 100%;
        }
        
        .sophisticated-input,
        .sophisticated-select,
        .sophisticated-textarea {
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          color: #3d2940;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
        }
        
        .sophisticated-input::before,
        .sophisticated-select::before,
        .sophisticated-textarea::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 107, 53, 0.1), transparent);
          transition: left 0.6s;
        }
        
        .sophisticated-input:focus,
        .sophisticated-select:focus,
        .sophisticated-textarea:focus {
          border-color: #ff6b35;
          box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.2);
          transform: translateY(-2px);
          animation: inputFocusGlow 1.5s ease-in-out;
        }
        
        .sophisticated-input:focus::before,
        .sophisticated-select:focus::before,
        .sophisticated-textarea:focus::before {
          left: 100%;
        }
        
        .sophisticated-input::placeholder {
          color: rgba(61, 41, 64, 0.5);
          transition: all 0.3s ease;
        }
        
        .sophisticated-input:focus::placeholder {
          color: rgba(61, 41, 64, 0.3);
          transform: translateX(10px);
        }
        
        .elite-submit-btn {
          background: linear-gradient(135deg, #ff6b35, #ffa500, #ff6b35);
          background-size: 200% 200%;
          border: none;
          border-radius: 25px;
          position: relative;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          animation: magneticPulse 3s ease-in-out infinite, morphingButton 8s ease-in-out infinite;
        }
        
        .elite-submit-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.8s;
        }
        
        .elite-submit-btn:hover::before {
          left: 100%;
        }
        
        .elite-submit-btn::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transition: all 0.6s ease;
          transform: translate(-50%, -50%);
        }
        
        .elite-submit-btn:hover::after {
          width: 100%;
          height: 100%;
        }
        
        .elite-submit-btn:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 20px 40px rgba(255, 107, 53, 0.4);
          background-size: 100% 100%;
        }
        
        .elite-submit-btn:active {
          transform: translateY(-2px) scale(0.98);
        }
        
        .btn-icon-magnetic {
          transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        
        .elite-submit-btn:hover .btn-icon-magnetic {
          transform: rotate(360deg) scale(1.2);
        }
        
        /* Responsive Enhancements */
        @media (max-width: 768px) {
          .elite-form-field {
            animation: fadeInScale 0.8s ease-out both;
          }
        }
      `}),d.jsxs("section",{id:"reservations",className:"luxury-reservation-section py-5",children:[d.jsxs("div",{className:"floating-reservation-elements",children:[d.jsx("div",{className:"reservation-element"}),d.jsx("div",{className:"reservation-element"}),d.jsx("div",{className:"reservation-element"}),d.jsx("div",{className:"reservation-element"})]}),d.jsxs("div",{className:"container position-relative",children:[d.jsxs("div",{className:"text-center mb-5 reservation-header-elite",children:[d.jsx("h2",{className:"display-4 fw-bold gradient-text-elite mb-3",children:"Reserve Your Experience"}),d.jsx("p",{className:"lead text-opacity-75",style:{color:"#3d2940"},children:"Secure your table for an extraordinary culinary journey"})]}),d.jsx("div",{className:"row justify-content-center",children:d.jsx("div",{className:"col-lg-10 col-xl-8",children:d.jsx("div",{className:"premium-reservation-form p-4 p-md-5 shadow-lg",children:d.jsx("div",{children:d.jsxs("div",{className:"row g-4",children:[d.jsxs("div",{className:"col-md-6 elite-form-field",children:[d.jsx("label",{htmlFor:"name",className:"form-label luxury-form-label",children:"Full Name"}),d.jsx("input",{type:"text",id:"name",name:"name",value:u.name,onChange:f,className:"form-control form-control-lg sophisticated-input",placeholder:"Your full name",required:!0})]}),d.jsxs("div",{className:"col-md-6 elite-form-field",children:[d.jsx("label",{htmlFor:"email",className:"form-label luxury-form-label",children:"Email Address"}),d.jsx("input",{type:"email",id:"email",name:"email",value:u.email,onChange:f,className:"form-control form-control-lg sophisticated-input",placeholder:"your@email.com",required:!0})]}),d.jsxs("div",{className:"col-md-6 elite-form-field",children:[d.jsx("label",{htmlFor:"phone",className:"form-label luxury-form-label",children:"Phone Number"}),d.jsx("input",{type:"tel",id:"phone",name:"phone",value:u.phone,onChange:f,className:"form-control form-control-lg sophisticated-input",placeholder:"(555) 123-4567",required:!0})]}),d.jsxs("div",{className:"col-md-6 elite-form-field",children:[d.jsx("label",{htmlFor:"guests",className:"form-label luxury-form-label",children:"Number of Guests"}),d.jsxs("select",{id:"guests",name:"guests",value:u.guests,onChange:f,className:"form-select form-select-lg sophisticated-select",required:!0,children:[d.jsx("option",{value:"1",children:"1 Guest"}),d.jsx("option",{value:"2",children:"2 Guests"}),d.jsx("option",{value:"3",children:"3 Guests"}),d.jsx("option",{value:"4",children:"4 Guests"}),d.jsx("option",{value:"5",children:"5 Guests"}),d.jsx("option",{value:"6+",children:"6+ Guests"})]})]}),d.jsxs("div",{className:"col-md-6 elite-form-field",children:[d.jsx("label",{htmlFor:"date",className:"form-label luxury-form-label",children:"Preferred Date"}),d.jsx("input",{type:"date",id:"date",name:"date",value:u.date,onChange:f,className:"form-control form-control-lg sophisticated-input",required:!0})]}),d.jsxs("div",{className:"col-md-6 elite-form-field",children:[d.jsx("label",{htmlFor:"time",className:"form-label luxury-form-label",children:"Preferred Time"}),d.jsxs("select",{id:"time",name:"time",value:u.time,onChange:f,className:"form-select form-select-lg sophisticated-select",required:!0,children:[d.jsx("option",{value:"5:00 PM",children:"5:00 PM"}),d.jsx("option",{value:"5:30 PM",children:"5:30 PM"}),d.jsx("option",{value:"6:00 PM",children:"6:00 PM"}),d.jsx("option",{value:"6:30 PM",children:"6:30 PM"}),d.jsx("option",{value:"7:00 PM",children:"7:00 PM"}),d.jsx("option",{value:"7:30 PM",children:"7:30 PM"}),d.jsx("option",{value:"8:00 PM",children:"8:00 PM"}),d.jsx("option",{value:"8:30 PM",children:"8:30 PM"}),d.jsx("option",{value:"9:00 PM",children:"9:00 PM"})]})]}),d.jsxs("div",{className:"col-12 elite-form-field",children:[d.jsx("label",{htmlFor:"requests",className:"form-label luxury-form-label",children:"Special Requests"}),d.jsx("textarea",{id:"requests",name:"requests",value:u.requests,onChange:f,rows:4,className:"form-control sophisticated-textarea",placeholder:"Any dietary restrictions, special occasions, or seating preferences..."})]}),d.jsx("div",{className:"col-12 mt-4",children:d.jsxs("button",{type:"button",onClick:o,className:"btn elite-submit-btn btn-lg w-100 py-3 fw-bold d-flex align-items-center justify-content-center gap-3 text-white",children:[d.jsx(x1,{size:20,className:"btn-icon-magnetic"}),"Confirm Reservation",d.jsx(p1,{size:18,className:"btn-icon-magnetic"})]})})]})})})})})]})]})]})},H1=()=>{const[u,s]=A.useState(!1),f=A.useRef(null);A.useEffect(()=>{const m=new IntersectionObserver(([p])=>{p.isIntersecting&&s(!0)},{threshold:.1});return f.current&&m.observe(f.current),()=>m.disconnect()},[]);const o=[{icon:R1,title:"Visit Us",details:["Plot No 38 & 39, IT Park","Bargi Hills","Jabalpur, MP - 482003"],gradient:"bg-gradient-blue"},{icon:E1,title:"Opening Hours",details:["Mon - Sat: 8 AM to 8 PM","Sun: 9 AM to 2 PM"],gradient:"bg-gradient-green"},{icon:_1,title:"Contact",details:["9922913195","milletsfoodkitchen@gmail.com","Follow @mkf_jabalpur"],gradient:"bg-gradient-purple"}];return d.jsxs(d.Fragment,{children:[d.jsx("link",{href:"https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/css/bootstrap.min.css",rel:"stylesheet"}),d.jsx("style",{jsx:!0,children:`
        .contact-wrapper {
           background: linear-gradient(-45deg, #dcd1ce); 
           position: relative;
          overflow: hidden;
          min-height: 100vh;
          padding: 120px 0;
        }

        .contact-wrapper::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 80%, rgba(74, 144, 226, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(56, 178, 172, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 0.06) 0%, transparent 50%);
          animation: atmosphericFloat 15s ease-in-out infinite;
        }

        @keyframes atmosphericFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -20px) scale(1.05); }
          66% { transform: translate(-20px, 30px) scale(0.95); }
        }

        .contact-header-zone {
          text-align: center;
          margin-bottom: 80px;
          transform: ${u?"translateY(0)":"translateY(80px)"};
          opacity: ${u?1:0};
          transition: all 1.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .contact-main-title {
          font-size: 3.8rem;
          font-weight: 800;
          background: linear-gradient(45deg, #85494a);
          background-size: 400% 400%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 24px;
          animation: gradientShimmer 4s ease-in-out infinite;
          position: relative;
        }

        .contact-main-title::after {
          content: '';
          position: absolute;
          bottom: -12px;
          left: 50%;
          transform: translateX(-50%);
          width: 120px;
          height: 4px;
          background: linear-gradient(90deg, transparent, #e33809, #c85a27, transparent);
          animation: titleUnderlineGlow 3s ease-in-out infinite;
        }

        @keyframes gradientShimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes titleUnderlineGlow {
          0%, 100% { opacity: 0.7; width: 120px; }
          50% { opacity: 1; width: 180px; }
        }

        .contact-subtitle-text {
          font-size: 1.4rem;
          color: #3d2940;
          font-weight: 300;
          line-height: 1.7;
          max-width: 700px;
          margin: 0 auto;
        }

        .contact-cards-grid {
          margin-bottom: 80px;
        }

        .contact-info-card {
          height: 100%;
          border: none;
          background: linear-gradient(45deg,#3d2940 );;
          backdrop-filter: blur(20px);
          border-radius: 24px;
          padding: 40px 30px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          transform: ${u?"translateY(0)":"translateY(60px)"};
          opacity: ${u?1:0};
          transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .contact-info-card:nth-child(1) { transition-delay: 0.2s; }
        .contact-info-card:nth-child(2) { transition-delay: 0.4s; }
        .contact-info-card:nth-child(3) { transition-delay: 0.6s; }

        .contact-info-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.8s ease;
        }

        .contact-info-card:hover {
          transform: translateY(-15px) scale(1.03);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .contact-info-card:hover::before {
          left: 100%;
        }

        .icon-container-sphere {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 30px auto;
          position: relative;
          animation: ${u?"iconFloat 3s ease-in-out infinite":"none"};
        }

        .icon-container-sphere:nth-child(1) { animation-delay: 0s; }
        .icon-container-sphere:nth-child(2) { animation-delay: 0.5s; }
        .icon-container-sphere:nth-child(3) { animation-delay: 1s; }

        @keyframes iconFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }

        .bg-gradient-blue {
          background: linear-gradient(135deg, #f4430e, #e32807);
          box-shadow: 0 10px 30px rgba(74, 144, 226, 0.3);
        }

        .bg-gradient-green {
          background: linear-gradient(135deg, #f4430e, #e32807);
          box-shadow: 0 10px 30px rgba(56, 178, 172, 0.3);
        }

        .bg-gradient-purple {
          background: linear-gradient(135deg, #f4430e, #e32807);
          box-shadow: 0 10px 30px rgba(139, 92, 246, 0.3);
        }

        .contact-card-title {
          font-size: 1.6rem;
          font-weight: 700;
          color: #fbf3f3;
          margin-bottom: 25px;
          position: relative;
        }

        .contact-detail-text {
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 12px;
          font-size: 1rem;
          transition: color 0.3s ease;
        }

        .contact-info-card:hover .contact-detail-text {
          color: rgba(255, 255, 255, 0.95);
        }

        .map-section-container {
          padding: 80px 0;
        }

        .map-display-card {
          height: 400px;
          border: none;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(15px);
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
          overflow: hidden;
          transform: ${u?"scale(1)":"scale(0.9)"};
          opacity: ${u?1:0};
          transition: all 1.6s cubic-bezier(0.4, 0, 0.2, 1) 0.8s;
          position: relative;
        }

        .map-display-card:hover {
          transform: scale(1.02);
          box-shadow: 0 35px 70px rgba(0, 0, 0, 0.5);
        }

        .image-display-card {
          height: 400px;
          border: none;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(15px);
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
          overflow: hidden;
          transform: ${u?"scale(1)":"scale(0.9)"};
          opacity: ${u?1:0};
          transition: all 1.6s cubic-bezier(0.4, 0, 0.2, 1) 1s;
          position: relative;
        }

        .image-display-card:hover {
          transform: scale(1.02);
          box-shadow: 0 35px 70px rgba(0, 0, 0, 0.5);
        }

        .contact-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.5s ease;
        }

        .image-display-card:hover .contact-image {
          transform: scale(1.05);
        }

        .map-content-center {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 40px;
          height: 100%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%);
        }

        .map-icon-large {
          color: #4A90E2;
          margin-bottom: 20px;
          animation: ${u?"mapIconPulse 2s ease-in-out infinite":"none"};
        }

        @keyframes mapIconPulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
        }

        .map-location-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 15px;
        }

        .map-location-subtitle {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.95rem;
          margin: 0;
        }

        @media (max-width: 768px) {
          .contact-main-title {
            font-size: 2.8rem;
          }
          
          .contact-subtitle-text {
            font-size: 1.2rem;
          }
          
          .contact-info-card {
            margin-bottom: 30px;
          }
          
          .map-section-container {
            padding: 60px 0;
          }
          
          .image-display-card {
            margin-top: 30px;
          }
        }
      `}),d.jsx("section",{ref:f,id:"contact",className:"contact-wrapper",children:d.jsxs("div",{className:"container position-relative",children:[d.jsxs("div",{className:"contact-header-zone",children:[d.jsx("h2",{className:"contact-main-title",children:"Get In Touch"}),d.jsx("p",{className:"contact-subtitle-text",children:"We'd love to welcome you to Bella Vista. Contact us for any inquiries or special arrangements"})]}),d.jsx("div",{className:"row g-4 g-lg-5 contact-cards-grid",children:o.map((m,p)=>d.jsx("div",{className:"col-md-4",children:d.jsxs("div",{className:"contact-info-card",children:[d.jsx("div",{className:"d-flex justify-content-center mb-4",children:d.jsx("div",{className:`${m.gradient} icon-container-sphere`,children:d.jsx(m.icon,{className:"text-white",size:32})})}),d.jsx("h3",{className:"contact-card-title",children:m.title}),d.jsx("div",{className:"px-0",children:m.details.map((z,R)=>d.jsx("p",{className:"contact-detail-text",children:z},R))})]})},p))}),d.jsx("div",{className:"map-section-container",children:d.jsxs("div",{className:"row g-4",children:[d.jsx("div",{className:"col-lg-6",children:d.jsxs("div",{className:"map-display-card",style:{position:"relative",height:"400px",borderRadius:"12px",overflow:"hidden"},children:[d.jsx("iframe",{title:"Our Location",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83924414364!2d77.068899!3d28.5272803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2b31dbfc4d5%3A0xa70c0cb64a6b740!2sConnaught%20Place%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1695634567890!5m2!1sen!2sin&zoomcontrol=1",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",border:"0"},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"}),d.jsxs("div",{className:"map-content-center",style:{position:"absolute",bottom:"15px",left:"50%",transform:"translateX(-50%)",padding:"10px 15px",borderRadius:"8px",zIndex:1,textAlign:"center"},children:[d.jsx("h3",{className:"map-location-title",style:{margin:0}}),d.jsx("p",{className:"map-location-subtitle",style:{margin:0}})]})]})}),d.jsx("div",{className:"col-lg-6",children:d.jsx("div",{className:"image-display-card",children:d.jsx("img",{src:"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",alt:"Restaurant Interior",className:"contact-image"})})})]})})]})})]})},Y1=()=>{const u=s=>{document.getElementById(s)?.scrollIntoView({behavior:"smooth"})};return d.jsxs(d.Fragment,{children:[d.jsx("link",{href:"https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/css/bootstrap.min.css",rel:"stylesheet"}),d.jsx("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"}),d.jsxs("footer",{className:"pt-5 pb-3",style:{background:"linear-gradient(-45deg, #dcd1ce)",color:"#3d2940"},children:[d.jsxs("div",{className:"container",children:[d.jsxs("div",{className:"row g-4 mb-4",children:[d.jsxs("div",{className:"col-md-6 col-lg-5",children:[d.jsxs("div",{className:"mb-4",children:[d.jsx("h3",{className:"display-5 fw-bold mb-3",style:{color:"#85494a"},children:d.jsx("span",{children:"MKF"})}),d.jsx("p",{className:"lead",children:"Experience the finest Indian cuisine in an atmosphere of warmth and tradition. Our passion for authentic flavors makes every visit memorable."})]}),d.jsxs("div",{className:"d-flex gap-3 mb-4",children:[d.jsx("a",{href:"https://www.facebook.com/people/Millets-Kitchen-Food/61572172024118/",target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary btn-lg rounded-circle p-0 d-flex align-items-center justify-content-center",style:{width:"45px",height:"45px"},children:d.jsx("i",{className:"fab fa-facebook-f"})}),d.jsx("a",{href:"https://www.instagram.com/mkf_jabalpur/",target:"_blank",rel:"noopener noreferrer",className:"btn btn-danger btn-lg rounded-circle p-0 d-flex align-items-center justify-content-center",style:{width:"45px",height:"45px"},children:d.jsx("i",{className:"fab fa-instagram"})}),d.jsx("a",{href:"https://www.youtube.com/@MILLETSFOODKITCHEN",target:"_blank",rel:"noopener noreferrer",className:"btn btn-info btn-lg rounded-circle p-0 d-flex align-items-center justify-content-center",style:{width:"45px",height:"45px"},children:d.jsx("i",{className:"fab fa-youtube"})})]})]}),d.jsxs("div",{className:"col-md-3 col-lg-2 offset-lg-1",children:[d.jsx("h5",{className:"mb-4",style:{color:"#85494a"},children:"Quick Links"}),d.jsx("ul",{className:"nav flex-column",children:["Home","About","Menu","Contact","Reservations"].map(s=>d.jsx("li",{className:"nav-item mb-2",children:d.jsx("button",{onClick:()=>u(s.toLowerCase()),className:"nav-link p-0 hover-effect",style:{color:"#3d2940"},children:s})},s))})]}),d.jsxs("div",{className:"col-md-3 col-lg-2",children:[d.jsx("h5",{className:"mb-4",style:{color:"#85494a"},children:"Specialties"}),d.jsx("ul",{className:"nav flex-column",children:["Authentic Pasta","Wood-Fired Pizza","Fresh Seafood","Italian Wines","Homemade Desserts"].map(s=>d.jsx("li",{className:"nav-item mb-2",children:d.jsx("span",{className:"nav-link p-0",style:{color:"#3d2940"},children:s})},s))})]}),d.jsxs("div",{className:"col-lg-2 d-none d-lg-block",children:[d.jsx("h5",{className:"mb-4",style:{color:"#85494a"},children:"Newsletter"}),d.jsx("p",{className:"small mb-3",children:"Subscribe for updates and special offers"}),d.jsxs("div",{className:"input-group mb-3",children:[d.jsx("input",{type:"email",className:"form-control form-control-sm",placeholder:"Your email"}),d.jsx("button",{className:"btn btn-light btn-sm",type:"button",children:d.jsx("i",{className:"fas fa-paper-plane"})})]})]})]}),d.jsxs("div",{className:"row pt-4 border-top border-secondary",children:[d.jsx("div",{className:"col-md-6 text-center text-md-start",children:d.jsx("p",{className:"small mb-3 mb-md-0",children:"© 2025 Bella Vista Restaurant. All rights reserved."})}),d.jsx("div",{className:"col-md-6 text-center text-md-end",children:d.jsxs("ul",{className:"list-inline mb-0",children:[d.jsx("li",{className:"list-inline-item",children:d.jsx("a",{href:"#",className:"small hover-effect",style:{color:"#3d2940"},children:"Privacy Policy"})}),d.jsx("li",{className:"list-inline-item",children:d.jsx("span",{className:"mx-2",children:"•"})}),d.jsx("li",{className:"list-inline-item",children:d.jsx("a",{href:"#",className:"small hover-effect",style:{color:"#3d2940"},children:"Terms of Service"})})]})})]})]}),d.jsx("style",{jsx:!0,children:`
          .hover-effect {
            transition: all 0.3s ease;
          }
          .hover-effect:hover {
            color: #85494a !important;
            transform: translateX(3px);
          }
          .btn-primary {
            background: linear-gradient(135deg, #0d6efd, #0b5ed7);
          }
          .btn-info {
            background: linear-gradient(135deg, #0dcaf0, #0aa2c0);
          }
          .btn-danger {
            background: linear-gradient(135deg, #dc3545, #bb2d3b);
          }
        `})]})]})};function q1(){return d.jsxs(d.Fragment,{children:[d.jsx(o1,{}),d.jsxs("main",{children:[d.jsx("section",{id:"hero",children:d.jsx(D1,{})}),d.jsx("section",{id:"about",children:d.jsx(w1,{})}),d.jsx("section",{id:"menu",children:d.jsx(U1,{})}),d.jsx("section",{id:"contact",children:d.jsx(H1,{})}),d.jsx("section",{id:"reservation",children:d.jsx(C1,{})})]}),d.jsx(Y1,{})]})}const B1=Bh.createRoot(document.getElementById("root"));B1.render(d.jsx(Oh.StrictMode,{children:d.jsx(Pg,{children:d.jsx(q1,{})})}));
