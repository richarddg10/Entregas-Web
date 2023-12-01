function qP(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function WP(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var dE={exports:{}},kh={},fE={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gl=Symbol.for("react.element"),GP=Symbol.for("react.portal"),HP=Symbol.for("react.fragment"),KP=Symbol.for("react.strict_mode"),QP=Symbol.for("react.profiler"),YP=Symbol.for("react.provider"),XP=Symbol.for("react.context"),JP=Symbol.for("react.forward_ref"),ZP=Symbol.for("react.suspense"),eC=Symbol.for("react.memo"),tC=Symbol.for("react.lazy"),By=Symbol.iterator;function nC(t){return t===null||typeof t!="object"?null:(t=By&&t[By]||t["@@iterator"],typeof t=="function"?t:null)}var pE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},mE=Object.assign,gE={};function ko(t,e,n){this.props=t,this.context=e,this.refs=gE,this.updater=n||pE}ko.prototype.isReactComponent={};ko.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ko.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function _E(){}_E.prototype=ko.prototype;function Mm(t,e,n){this.props=t,this.context=e,this.refs=gE,this.updater=n||pE}var Fm=Mm.prototype=new _E;Fm.constructor=Mm;mE(Fm,ko.prototype);Fm.isPureReactComponent=!0;var jy=Array.isArray,yE=Object.prototype.hasOwnProperty,Um={current:null},vE={key:!0,ref:!0,__self:!0,__source:!0};function wE(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)yE.call(e,r)&&!vE.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Gl,type:t,key:s,ref:o,props:i,_owner:Um.current}}function rC(t,e){return{$$typeof:Gl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Bm(t){return typeof t=="object"&&t!==null&&t.$$typeof===Gl}function iC(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var $y=/\/+/g;function Kd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?iC(""+t.key):e.toString(36)}function ic(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Gl:case GP:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Kd(o,0):r,jy(i)?(n="",t!=null&&(n=t.replace($y,"$&/")+"/"),ic(i,e,n,"",function(u){return u})):i!=null&&(Bm(i)&&(i=rC(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace($y,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",jy(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Kd(s,a);o+=ic(s,e,n,l,i)}else if(l=nC(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Kd(s,a++),o+=ic(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Pu(t,e,n){if(t==null)return t;var r=[],i=0;return ic(t,r,"","",function(s){return e.call(n,s,i++)}),r}function sC(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Rt={current:null},sc={transition:null},oC={ReactCurrentDispatcher:Rt,ReactCurrentBatchConfig:sc,ReactCurrentOwner:Um};Y.Children={map:Pu,forEach:function(t,e,n){Pu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Pu(t,function(){e++}),e},toArray:function(t){return Pu(t,function(e){return e})||[]},only:function(t){if(!Bm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Y.Component=ko;Y.Fragment=HP;Y.Profiler=QP;Y.PureComponent=Mm;Y.StrictMode=KP;Y.Suspense=ZP;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oC;Y.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=mE({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Um.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)yE.call(e,l)&&!vE.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Gl,type:t.type,key:i,ref:s,props:r,_owner:o}};Y.createContext=function(t){return t={$$typeof:XP,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:YP,_context:t},t.Consumer=t};Y.createElement=wE;Y.createFactory=function(t){var e=wE.bind(null,t);return e.type=t,e};Y.createRef=function(){return{current:null}};Y.forwardRef=function(t){return{$$typeof:JP,render:t}};Y.isValidElement=Bm;Y.lazy=function(t){return{$$typeof:tC,_payload:{_status:-1,_result:t},_init:sC}};Y.memo=function(t,e){return{$$typeof:eC,type:t,compare:e===void 0?null:e}};Y.startTransition=function(t){var e=sc.transition;sc.transition={};try{t()}finally{sc.transition=e}};Y.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Y.useCallback=function(t,e){return Rt.current.useCallback(t,e)};Y.useContext=function(t){return Rt.current.useContext(t)};Y.useDebugValue=function(){};Y.useDeferredValue=function(t){return Rt.current.useDeferredValue(t)};Y.useEffect=function(t,e){return Rt.current.useEffect(t,e)};Y.useId=function(){return Rt.current.useId()};Y.useImperativeHandle=function(t,e,n){return Rt.current.useImperativeHandle(t,e,n)};Y.useInsertionEffect=function(t,e){return Rt.current.useInsertionEffect(t,e)};Y.useLayoutEffect=function(t,e){return Rt.current.useLayoutEffect(t,e)};Y.useMemo=function(t,e){return Rt.current.useMemo(t,e)};Y.useReducer=function(t,e,n){return Rt.current.useReducer(t,e,n)};Y.useRef=function(t){return Rt.current.useRef(t)};Y.useState=function(t){return Rt.current.useState(t)};Y.useSyncExternalStore=function(t,e,n){return Rt.current.useSyncExternalStore(t,e,n)};Y.useTransition=function(){return Rt.current.useTransition()};Y.version="18.2.0";fE.exports=Y;var x=fE.exports;const aC=WP(x),lC=qP({__proto__:null,default:aC},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uC=x,cC=Symbol.for("react.element"),hC=Symbol.for("react.fragment"),dC=Object.prototype.hasOwnProperty,fC=uC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,pC={key:!0,ref:!0,__self:!0,__source:!0};function IE(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)dC.call(e,r)&&!pC.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:cC,type:t,key:s,ref:o,props:i,_owner:fC.current}}kh.Fragment=hC;kh.jsx=IE;kh.jsxs=IE;dE.exports=kh;var _=dE.exports,EE={exports:{}},Gt={},TE={exports:{}},AE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,W){var H=F.length;F.push(W);e:for(;0<H;){var xe=H-1>>>1,je=F[xe];if(0<i(je,W))F[xe]=W,F[H]=je,H=xe;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var W=F[0],H=F.pop();if(H!==W){F[0]=H;e:for(var xe=0,je=F.length,Su=je>>>1;xe<Su;){var pi=2*(xe+1)-1,Hd=F[pi],mi=pi+1,Ru=F[mi];if(0>i(Hd,H))mi<je&&0>i(Ru,Hd)?(F[xe]=Ru,F[mi]=H,xe=mi):(F[xe]=Hd,F[pi]=H,xe=pi);else if(mi<je&&0>i(Ru,H))F[xe]=Ru,F[mi]=H,xe=mi;else break e}}return W}function i(F,W){var H=F.sortIndex-W.sortIndex;return H!==0?H:F.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,f=!1,y=!1,v=!1,I=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(F){for(var W=n(u);W!==null;){if(W.callback===null)r(u);else if(W.startTime<=F)r(u),W.sortIndex=W.expirationTime,e(l,W);else break;W=n(u)}}function E(F){if(v=!1,g(F),!y)if(n(l)!==null)y=!0,Wd(S);else{var W=n(u);W!==null&&Gd(E,W.startTime-F)}}function S(F,W){y=!1,v&&(v=!1,m(O),O=-1),f=!0;var H=d;try{for(g(W),h=n(l);h!==null&&(!(h.expirationTime>W)||F&&!an());){var xe=h.callback;if(typeof xe=="function"){h.callback=null,d=h.priorityLevel;var je=xe(h.expirationTime<=W);W=t.unstable_now(),typeof je=="function"?h.callback=je:h===n(l)&&r(l),g(W)}else r(l);h=n(l)}if(h!==null)var Su=!0;else{var pi=n(u);pi!==null&&Gd(E,pi.startTime-W),Su=!1}return Su}finally{h=null,d=H,f=!1}}var C=!1,N=null,O=-1,te=5,G=-1;function an(){return!(t.unstable_now()-G<te)}function Xo(){if(N!==null){var F=t.unstable_now();G=F;var W=!0;try{W=N(!0,F)}finally{W?Jo():(C=!1,N=null)}}else C=!1}var Jo;if(typeof p=="function")Jo=function(){p(Xo)};else if(typeof MessageChannel<"u"){var Uy=new MessageChannel,zP=Uy.port2;Uy.port1.onmessage=Xo,Jo=function(){zP.postMessage(null)}}else Jo=function(){I(Xo,0)};function Wd(F){N=F,C||(C=!0,Jo())}function Gd(F,W){O=I(function(){F(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){y||f||(y=!0,Wd(S))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):te=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(F){switch(d){case 1:case 2:case 3:var W=3;break;default:W=d}var H=d;d=W;try{return F()}finally{d=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,W){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var H=d;d=F;try{return W()}finally{d=H}},t.unstable_scheduleCallback=function(F,W,H){var xe=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?xe+H:xe):H=xe,F){case 1:var je=-1;break;case 2:je=250;break;case 5:je=1073741823;break;case 4:je=1e4;break;default:je=5e3}return je=H+je,F={id:c++,callback:W,priorityLevel:F,startTime:H,expirationTime:je,sortIndex:-1},H>xe?(F.sortIndex=H,e(u,F),n(l)===null&&F===n(u)&&(v?(m(O),O=-1):v=!0,Gd(E,H-xe))):(F.sortIndex=je,e(l,F),y||f||(y=!0,Wd(S))),F},t.unstable_shouldYield=an,t.unstable_wrapCallback=function(F){var W=d;return function(){var H=d;d=W;try{return F.apply(this,arguments)}finally{d=H}}}})(AE);TE.exports=AE;var mC=TE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var SE=x,zt=mC;function P(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var RE=new Set,Ya={};function as(t,e){oo(t,e),oo(t+"Capture",e)}function oo(t,e){for(Ya[t]=e,t=0;t<e.length;t++)RE.add(e[t])}var Jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kf=Object.prototype.hasOwnProperty,gC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zy={},qy={};function _C(t){return Kf.call(qy,t)?!0:Kf.call(zy,t)?!1:gC.test(t)?qy[t]=!0:(zy[t]=!0,!1)}function yC(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function vC(t,e,n,r){if(e===null||typeof e>"u"||yC(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Pt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var it={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){it[t]=new Pt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];it[e]=new Pt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){it[t]=new Pt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){it[t]=new Pt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){it[t]=new Pt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){it[t]=new Pt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){it[t]=new Pt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){it[t]=new Pt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){it[t]=new Pt(t,5,!1,t.toLowerCase(),null,!1,!1)});var jm=/[\-:]([a-z])/g;function $m(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(jm,$m);it[e]=new Pt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(jm,$m);it[e]=new Pt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(jm,$m);it[e]=new Pt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){it[t]=new Pt(t,1,!1,t.toLowerCase(),null,!1,!1)});it.xlinkHref=new Pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){it[t]=new Pt(t,1,!1,t.toLowerCase(),null,!0,!0)});function zm(t,e,n,r){var i=it.hasOwnProperty(e)?it[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(vC(e,n,i,r)&&(n=null),r||i===null?_C(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var or=SE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Cu=Symbol.for("react.element"),Ns=Symbol.for("react.portal"),bs=Symbol.for("react.fragment"),qm=Symbol.for("react.strict_mode"),Qf=Symbol.for("react.profiler"),PE=Symbol.for("react.provider"),CE=Symbol.for("react.context"),Wm=Symbol.for("react.forward_ref"),Yf=Symbol.for("react.suspense"),Xf=Symbol.for("react.suspense_list"),Gm=Symbol.for("react.memo"),wr=Symbol.for("react.lazy"),kE=Symbol.for("react.offscreen"),Wy=Symbol.iterator;function Zo(t){return t===null||typeof t!="object"?null:(t=Wy&&t[Wy]||t["@@iterator"],typeof t=="function"?t:null)}var we=Object.assign,Qd;function ya(t){if(Qd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Qd=e&&e[1]||""}return`
`+Qd+t}var Yd=!1;function Xd(t,e){if(!t||Yd)return"";Yd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Yd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ya(t):""}function wC(t){switch(t.tag){case 5:return ya(t.type);case 16:return ya("Lazy");case 13:return ya("Suspense");case 19:return ya("SuspenseList");case 0:case 2:case 15:return t=Xd(t.type,!1),t;case 11:return t=Xd(t.type.render,!1),t;case 1:return t=Xd(t.type,!0),t;default:return""}}function Jf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case bs:return"Fragment";case Ns:return"Portal";case Qf:return"Profiler";case qm:return"StrictMode";case Yf:return"Suspense";case Xf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case CE:return(t.displayName||"Context")+".Consumer";case PE:return(t._context.displayName||"Context")+".Provider";case Wm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Gm:return e=t.displayName||null,e!==null?e:Jf(t.type)||"Memo";case wr:e=t._payload,t=t._init;try{return Jf(t(e))}catch{}}return null}function IC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jf(e);case 8:return e===qm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function zr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function xE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function EC(t){var e=xE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ku(t){t._valueTracker||(t._valueTracker=EC(t))}function NE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=xE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Cc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Zf(t,e){var n=e.checked;return we({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Gy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=zr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function bE(t,e){e=e.checked,e!=null&&zm(t,"checked",e,!1)}function ep(t,e){bE(t,e);var n=zr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?tp(t,e.type,n):e.hasOwnProperty("defaultValue")&&tp(t,e.type,zr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Hy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function tp(t,e,n){(e!=="number"||Cc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var va=Array.isArray;function Gs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+zr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function np(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(P(91));return we({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ky(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(P(92));if(va(n)){if(1<n.length)throw Error(P(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:zr(n)}}function DE(t,e){var n=zr(e.value),r=zr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Qy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function VE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function rp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?VE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var xu,OE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(xu=xu||document.createElement("div"),xu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=xu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Xa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var xa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},TC=["Webkit","ms","Moz","O"];Object.keys(xa).forEach(function(t){TC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),xa[e]=xa[t]})});function LE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||xa.hasOwnProperty(t)&&xa[t]?(""+e).trim():e+"px"}function ME(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=LE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var AC=we({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ip(t,e){if(e){if(AC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(P(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(P(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(P(61))}if(e.style!=null&&typeof e.style!="object")throw Error(P(62))}}function sp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var op=null;function Hm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ap=null,Hs=null,Ks=null;function Yy(t){if(t=Ql(t)){if(typeof ap!="function")throw Error(P(280));var e=t.stateNode;e&&(e=Vh(e),ap(t.stateNode,t.type,e))}}function FE(t){Hs?Ks?Ks.push(t):Ks=[t]:Hs=t}function UE(){if(Hs){var t=Hs,e=Ks;if(Ks=Hs=null,Yy(t),e)for(t=0;t<e.length;t++)Yy(e[t])}}function BE(t,e){return t(e)}function jE(){}var Jd=!1;function $E(t,e,n){if(Jd)return t(e,n);Jd=!0;try{return BE(t,e,n)}finally{Jd=!1,(Hs!==null||Ks!==null)&&(jE(),UE())}}function Ja(t,e){var n=t.stateNode;if(n===null)return null;var r=Vh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(P(231,e,typeof n));return n}var lp=!1;if(Jn)try{var ea={};Object.defineProperty(ea,"passive",{get:function(){lp=!0}}),window.addEventListener("test",ea,ea),window.removeEventListener("test",ea,ea)}catch{lp=!1}function SC(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Na=!1,kc=null,xc=!1,up=null,RC={onError:function(t){Na=!0,kc=t}};function PC(t,e,n,r,i,s,o,a,l){Na=!1,kc=null,SC.apply(RC,arguments)}function CC(t,e,n,r,i,s,o,a,l){if(PC.apply(this,arguments),Na){if(Na){var u=kc;Na=!1,kc=null}else throw Error(P(198));xc||(xc=!0,up=u)}}function ls(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function zE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Xy(t){if(ls(t)!==t)throw Error(P(188))}function kC(t){var e=t.alternate;if(!e){if(e=ls(t),e===null)throw Error(P(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Xy(i),t;if(s===r)return Xy(i),e;s=s.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?t:e}function qE(t){return t=kC(t),t!==null?WE(t):null}function WE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=WE(t);if(e!==null)return e;t=t.sibling}return null}var GE=zt.unstable_scheduleCallback,Jy=zt.unstable_cancelCallback,xC=zt.unstable_shouldYield,NC=zt.unstable_requestPaint,Ne=zt.unstable_now,bC=zt.unstable_getCurrentPriorityLevel,Km=zt.unstable_ImmediatePriority,HE=zt.unstable_UserBlockingPriority,Nc=zt.unstable_NormalPriority,DC=zt.unstable_LowPriority,KE=zt.unstable_IdlePriority,xh=null,Dn=null;function VC(t){if(Dn&&typeof Dn.onCommitFiberRoot=="function")try{Dn.onCommitFiberRoot(xh,t,void 0,(t.current.flags&128)===128)}catch{}}var fn=Math.clz32?Math.clz32:MC,OC=Math.log,LC=Math.LN2;function MC(t){return t>>>=0,t===0?32:31-(OC(t)/LC|0)|0}var Nu=64,bu=4194304;function wa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function bc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=wa(a):(s&=o,s!==0&&(r=wa(s)))}else o=n&~i,o!==0?r=wa(o):s!==0&&(r=wa(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-fn(e),i=1<<n,r|=t[n],e&=~i;return r}function FC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function UC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-fn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=FC(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function cp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function QE(){var t=Nu;return Nu<<=1,!(Nu&4194240)&&(Nu=64),t}function Zd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Hl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-fn(e),t[e]=n}function BC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-fn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Qm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-fn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var re=0;function YE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var XE,Ym,JE,ZE,eT,hp=!1,Du=[],br=null,Dr=null,Vr=null,Za=new Map,el=new Map,Tr=[],jC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zy(t,e){switch(t){case"focusin":case"focusout":br=null;break;case"dragenter":case"dragleave":Dr=null;break;case"mouseover":case"mouseout":Vr=null;break;case"pointerover":case"pointerout":Za.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":el.delete(e.pointerId)}}function ta(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ql(e),e!==null&&Ym(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function $C(t,e,n,r,i){switch(e){case"focusin":return br=ta(br,t,e,n,r,i),!0;case"dragenter":return Dr=ta(Dr,t,e,n,r,i),!0;case"mouseover":return Vr=ta(Vr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Za.set(s,ta(Za.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,el.set(s,ta(el.get(s)||null,t,e,n,r,i)),!0}return!1}function tT(t){var e=Ri(t.target);if(e!==null){var n=ls(e);if(n!==null){if(e=n.tag,e===13){if(e=zE(n),e!==null){t.blockedOn=e,eT(t.priority,function(){JE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function oc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=dp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);op=r,n.target.dispatchEvent(r),op=null}else return e=Ql(n),e!==null&&Ym(e),t.blockedOn=n,!1;e.shift()}return!0}function ev(t,e,n){oc(t)&&n.delete(e)}function zC(){hp=!1,br!==null&&oc(br)&&(br=null),Dr!==null&&oc(Dr)&&(Dr=null),Vr!==null&&oc(Vr)&&(Vr=null),Za.forEach(ev),el.forEach(ev)}function na(t,e){t.blockedOn===e&&(t.blockedOn=null,hp||(hp=!0,zt.unstable_scheduleCallback(zt.unstable_NormalPriority,zC)))}function tl(t){function e(i){return na(i,t)}if(0<Du.length){na(Du[0],t);for(var n=1;n<Du.length;n++){var r=Du[n];r.blockedOn===t&&(r.blockedOn=null)}}for(br!==null&&na(br,t),Dr!==null&&na(Dr,t),Vr!==null&&na(Vr,t),Za.forEach(e),el.forEach(e),n=0;n<Tr.length;n++)r=Tr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Tr.length&&(n=Tr[0],n.blockedOn===null);)tT(n),n.blockedOn===null&&Tr.shift()}var Qs=or.ReactCurrentBatchConfig,Dc=!0;function qC(t,e,n,r){var i=re,s=Qs.transition;Qs.transition=null;try{re=1,Xm(t,e,n,r)}finally{re=i,Qs.transition=s}}function WC(t,e,n,r){var i=re,s=Qs.transition;Qs.transition=null;try{re=4,Xm(t,e,n,r)}finally{re=i,Qs.transition=s}}function Xm(t,e,n,r){if(Dc){var i=dp(t,e,n,r);if(i===null)cf(t,e,r,Vc,n),Zy(t,r);else if($C(i,t,e,n,r))r.stopPropagation();else if(Zy(t,r),e&4&&-1<jC.indexOf(t)){for(;i!==null;){var s=Ql(i);if(s!==null&&XE(s),s=dp(t,e,n,r),s===null&&cf(t,e,r,Vc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else cf(t,e,r,null,n)}}var Vc=null;function dp(t,e,n,r){if(Vc=null,t=Hm(r),t=Ri(t),t!==null)if(e=ls(t),e===null)t=null;else if(n=e.tag,n===13){if(t=zE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Vc=t,null}function nT(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bC()){case Km:return 1;case HE:return 4;case Nc:case DC:return 16;case KE:return 536870912;default:return 16}default:return 16}}var Pr=null,Jm=null,ac=null;function rT(){if(ac)return ac;var t,e=Jm,n=e.length,r,i="value"in Pr?Pr.value:Pr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ac=i.slice(t,1<r?1-r:void 0)}function lc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Vu(){return!0}function tv(){return!1}function Ht(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Vu:tv,this.isPropagationStopped=tv,this}return we(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Vu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Vu)},persist:function(){},isPersistent:Vu}),e}var xo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zm=Ht(xo),Kl=we({},xo,{view:0,detail:0}),GC=Ht(Kl),ef,tf,ra,Nh=we({},Kl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eg,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ra&&(ra&&t.type==="mousemove"?(ef=t.screenX-ra.screenX,tf=t.screenY-ra.screenY):tf=ef=0,ra=t),ef)},movementY:function(t){return"movementY"in t?t.movementY:tf}}),nv=Ht(Nh),HC=we({},Nh,{dataTransfer:0}),KC=Ht(HC),QC=we({},Kl,{relatedTarget:0}),nf=Ht(QC),YC=we({},xo,{animationName:0,elapsedTime:0,pseudoElement:0}),XC=Ht(YC),JC=we({},xo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ZC=Ht(JC),ek=we({},xo,{data:0}),rv=Ht(ek),tk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ik(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=rk[t])?!!e[t]:!1}function eg(){return ik}var sk=we({},Kl,{key:function(t){if(t.key){var e=tk[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=lc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?nk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eg,charCode:function(t){return t.type==="keypress"?lc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?lc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ok=Ht(sk),ak=we({},Nh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),iv=Ht(ak),lk=we({},Kl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eg}),uk=Ht(lk),ck=we({},xo,{propertyName:0,elapsedTime:0,pseudoElement:0}),hk=Ht(ck),dk=we({},Nh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),fk=Ht(dk),pk=[9,13,27,32],tg=Jn&&"CompositionEvent"in window,ba=null;Jn&&"documentMode"in document&&(ba=document.documentMode);var mk=Jn&&"TextEvent"in window&&!ba,iT=Jn&&(!tg||ba&&8<ba&&11>=ba),sv=String.fromCharCode(32),ov=!1;function sT(t,e){switch(t){case"keyup":return pk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function oT(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ds=!1;function gk(t,e){switch(t){case"compositionend":return oT(e);case"keypress":return e.which!==32?null:(ov=!0,sv);case"textInput":return t=e.data,t===sv&&ov?null:t;default:return null}}function _k(t,e){if(Ds)return t==="compositionend"||!tg&&sT(t,e)?(t=rT(),ac=Jm=Pr=null,Ds=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return iT&&e.locale!=="ko"?null:e.data;default:return null}}var yk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function av(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!yk[t.type]:e==="textarea"}function aT(t,e,n,r){FE(r),e=Oc(e,"onChange"),0<e.length&&(n=new Zm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Da=null,nl=null;function vk(t){yT(t,0)}function bh(t){var e=Ls(t);if(NE(e))return t}function wk(t,e){if(t==="change")return e}var lT=!1;if(Jn){var rf;if(Jn){var sf="oninput"in document;if(!sf){var lv=document.createElement("div");lv.setAttribute("oninput","return;"),sf=typeof lv.oninput=="function"}rf=sf}else rf=!1;lT=rf&&(!document.documentMode||9<document.documentMode)}function uv(){Da&&(Da.detachEvent("onpropertychange",uT),nl=Da=null)}function uT(t){if(t.propertyName==="value"&&bh(nl)){var e=[];aT(e,nl,t,Hm(t)),$E(vk,e)}}function Ik(t,e,n){t==="focusin"?(uv(),Da=e,nl=n,Da.attachEvent("onpropertychange",uT)):t==="focusout"&&uv()}function Ek(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return bh(nl)}function Tk(t,e){if(t==="click")return bh(e)}function Ak(t,e){if(t==="input"||t==="change")return bh(e)}function Sk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var mn=typeof Object.is=="function"?Object.is:Sk;function rl(t,e){if(mn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Kf.call(e,i)||!mn(t[i],e[i]))return!1}return!0}function cv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hv(t,e){var n=cv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cv(n)}}function cT(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?cT(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function hT(){for(var t=window,e=Cc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Cc(t.document)}return e}function ng(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Rk(t){var e=hT(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&cT(n.ownerDocument.documentElement,n)){if(r!==null&&ng(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=hv(n,s);var o=hv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Pk=Jn&&"documentMode"in document&&11>=document.documentMode,Vs=null,fp=null,Va=null,pp=!1;function dv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;pp||Vs==null||Vs!==Cc(r)||(r=Vs,"selectionStart"in r&&ng(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Va&&rl(Va,r)||(Va=r,r=Oc(fp,"onSelect"),0<r.length&&(e=new Zm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Vs)))}function Ou(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Os={animationend:Ou("Animation","AnimationEnd"),animationiteration:Ou("Animation","AnimationIteration"),animationstart:Ou("Animation","AnimationStart"),transitionend:Ou("Transition","TransitionEnd")},of={},dT={};Jn&&(dT=document.createElement("div").style,"AnimationEvent"in window||(delete Os.animationend.animation,delete Os.animationiteration.animation,delete Os.animationstart.animation),"TransitionEvent"in window||delete Os.transitionend.transition);function Dh(t){if(of[t])return of[t];if(!Os[t])return t;var e=Os[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in dT)return of[t]=e[n];return t}var fT=Dh("animationend"),pT=Dh("animationiteration"),mT=Dh("animationstart"),gT=Dh("transitionend"),_T=new Map,fv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ni(t,e){_T.set(t,e),as(e,[t])}for(var af=0;af<fv.length;af++){var lf=fv[af],Ck=lf.toLowerCase(),kk=lf[0].toUpperCase()+lf.slice(1);ni(Ck,"on"+kk)}ni(fT,"onAnimationEnd");ni(pT,"onAnimationIteration");ni(mT,"onAnimationStart");ni("dblclick","onDoubleClick");ni("focusin","onFocus");ni("focusout","onBlur");ni(gT,"onTransitionEnd");oo("onMouseEnter",["mouseout","mouseover"]);oo("onMouseLeave",["mouseout","mouseover"]);oo("onPointerEnter",["pointerout","pointerover"]);oo("onPointerLeave",["pointerout","pointerover"]);as("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));as("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));as("onBeforeInput",["compositionend","keypress","textInput","paste"]);as("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));as("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));as("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xk=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ia));function pv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,CC(r,e,void 0,t),t.currentTarget=null}function yT(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;pv(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;pv(i,a,u),s=l}}}if(xc)throw t=up,xc=!1,up=null,t}function le(t,e){var n=e[vp];n===void 0&&(n=e[vp]=new Set);var r=t+"__bubble";n.has(r)||(vT(e,t,2,!1),n.add(r))}function uf(t,e,n){var r=0;e&&(r|=4),vT(n,t,r,e)}var Lu="_reactListening"+Math.random().toString(36).slice(2);function il(t){if(!t[Lu]){t[Lu]=!0,RE.forEach(function(n){n!=="selectionchange"&&(xk.has(n)||uf(n,!1,t),uf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Lu]||(e[Lu]=!0,uf("selectionchange",!1,e))}}function vT(t,e,n,r){switch(nT(e)){case 1:var i=qC;break;case 4:i=WC;break;default:i=Xm}n=i.bind(null,e,n,t),i=void 0,!lp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function cf(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Ri(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}$E(function(){var u=s,c=Hm(n),h=[];e:{var d=_T.get(t);if(d!==void 0){var f=Zm,y=t;switch(t){case"keypress":if(lc(n)===0)break e;case"keydown":case"keyup":f=ok;break;case"focusin":y="focus",f=nf;break;case"focusout":y="blur",f=nf;break;case"beforeblur":case"afterblur":f=nf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=nv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=KC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=uk;break;case fT:case pT:case mT:f=XC;break;case gT:f=hk;break;case"scroll":f=GC;break;case"wheel":f=fk;break;case"copy":case"cut":case"paste":f=ZC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=iv}var v=(e&4)!==0,I=!v&&t==="scroll",m=v?d!==null?d+"Capture":null:d;v=[];for(var p=u,g;p!==null;){g=p;var E=g.stateNode;if(g.tag===5&&E!==null&&(g=E,m!==null&&(E=Ja(p,m),E!=null&&v.push(sl(p,E,g)))),I)break;p=p.return}0<v.length&&(d=new f(d,y,null,n,c),h.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",d&&n!==op&&(y=n.relatedTarget||n.fromElement)&&(Ri(y)||y[Zn]))break e;if((f||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,f?(y=n.relatedTarget||n.toElement,f=u,y=y?Ri(y):null,y!==null&&(I=ls(y),y!==I||y.tag!==5&&y.tag!==6)&&(y=null)):(f=null,y=u),f!==y)){if(v=nv,E="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(v=iv,E="onPointerLeave",m="onPointerEnter",p="pointer"),I=f==null?d:Ls(f),g=y==null?d:Ls(y),d=new v(E,p+"leave",f,n,c),d.target=I,d.relatedTarget=g,E=null,Ri(c)===u&&(v=new v(m,p+"enter",y,n,c),v.target=g,v.relatedTarget=I,E=v),I=E,f&&y)t:{for(v=f,m=y,p=0,g=v;g;g=_s(g))p++;for(g=0,E=m;E;E=_s(E))g++;for(;0<p-g;)v=_s(v),p--;for(;0<g-p;)m=_s(m),g--;for(;p--;){if(v===m||m!==null&&v===m.alternate)break t;v=_s(v),m=_s(m)}v=null}else v=null;f!==null&&mv(h,d,f,v,!1),y!==null&&I!==null&&mv(h,I,y,v,!0)}}e:{if(d=u?Ls(u):window,f=d.nodeName&&d.nodeName.toLowerCase(),f==="select"||f==="input"&&d.type==="file")var S=wk;else if(av(d))if(lT)S=Ak;else{S=Ek;var C=Ik}else(f=d.nodeName)&&f.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(S=Tk);if(S&&(S=S(t,u))){aT(h,S,n,c);break e}C&&C(t,d,u),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&tp(d,"number",d.value)}switch(C=u?Ls(u):window,t){case"focusin":(av(C)||C.contentEditable==="true")&&(Vs=C,fp=u,Va=null);break;case"focusout":Va=fp=Vs=null;break;case"mousedown":pp=!0;break;case"contextmenu":case"mouseup":case"dragend":pp=!1,dv(h,n,c);break;case"selectionchange":if(Pk)break;case"keydown":case"keyup":dv(h,n,c)}var N;if(tg)e:{switch(t){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Ds?sT(t,n)&&(O="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(iT&&n.locale!=="ko"&&(Ds||O!=="onCompositionStart"?O==="onCompositionEnd"&&Ds&&(N=rT()):(Pr=c,Jm="value"in Pr?Pr.value:Pr.textContent,Ds=!0)),C=Oc(u,O),0<C.length&&(O=new rv(O,t,null,n,c),h.push({event:O,listeners:C}),N?O.data=N:(N=oT(n),N!==null&&(O.data=N)))),(N=mk?gk(t,n):_k(t,n))&&(u=Oc(u,"onBeforeInput"),0<u.length&&(c=new rv("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=N))}yT(h,e)})}function sl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Oc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ja(t,n),s!=null&&r.unshift(sl(t,s,i)),s=Ja(t,e),s!=null&&r.push(sl(t,s,i))),t=t.return}return r}function _s(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function mv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ja(n,s),l!=null&&o.unshift(sl(n,l,a))):i||(l=Ja(n,s),l!=null&&o.push(sl(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Nk=/\r\n?/g,bk=/\u0000|\uFFFD/g;function gv(t){return(typeof t=="string"?t:""+t).replace(Nk,`
`).replace(bk,"")}function Mu(t,e,n){if(e=gv(e),gv(t)!==e&&n)throw Error(P(425))}function Lc(){}var mp=null,gp=null;function _p(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var yp=typeof setTimeout=="function"?setTimeout:void 0,Dk=typeof clearTimeout=="function"?clearTimeout:void 0,_v=typeof Promise=="function"?Promise:void 0,Vk=typeof queueMicrotask=="function"?queueMicrotask:typeof _v<"u"?function(t){return _v.resolve(null).then(t).catch(Ok)}:yp;function Ok(t){setTimeout(function(){throw t})}function hf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),tl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);tl(e)}function Or(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function yv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var No=Math.random().toString(36).slice(2),In="__reactFiber$"+No,ol="__reactProps$"+No,Zn="__reactContainer$"+No,vp="__reactEvents$"+No,Lk="__reactListeners$"+No,Mk="__reactHandles$"+No;function Ri(t){var e=t[In];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Zn]||n[In]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=yv(t);t!==null;){if(n=t[In])return n;t=yv(t)}return e}t=n,n=t.parentNode}return null}function Ql(t){return t=t[In]||t[Zn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ls(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(P(33))}function Vh(t){return t[ol]||null}var wp=[],Ms=-1;function ri(t){return{current:t}}function he(t){0>Ms||(t.current=wp[Ms],wp[Ms]=null,Ms--)}function oe(t,e){Ms++,wp[Ms]=t.current,t.current=e}var qr={},pt=ri(qr),Ot=ri(!1),$i=qr;function ao(t,e){var n=t.type.contextTypes;if(!n)return qr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Lt(t){return t=t.childContextTypes,t!=null}function Mc(){he(Ot),he(pt)}function vv(t,e,n){if(pt.current!==qr)throw Error(P(168));oe(pt,e),oe(Ot,n)}function wT(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(P(108,IC(t)||"Unknown",i));return we({},n,r)}function Fc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||qr,$i=pt.current,oe(pt,t),oe(Ot,Ot.current),!0}function wv(t,e,n){var r=t.stateNode;if(!r)throw Error(P(169));n?(t=wT(t,e,$i),r.__reactInternalMemoizedMergedChildContext=t,he(Ot),he(pt),oe(pt,t)):he(Ot),oe(Ot,n)}var jn=null,Oh=!1,df=!1;function IT(t){jn===null?jn=[t]:jn.push(t)}function Fk(t){Oh=!0,IT(t)}function ii(){if(!df&&jn!==null){df=!0;var t=0,e=re;try{var n=jn;for(re=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}jn=null,Oh=!1}catch(i){throw jn!==null&&(jn=jn.slice(t+1)),GE(Km,ii),i}finally{re=e,df=!1}}return null}var Fs=[],Us=0,Uc=null,Bc=0,Kt=[],Qt=0,zi=null,zn=1,qn="";function _i(t,e){Fs[Us++]=Bc,Fs[Us++]=Uc,Uc=t,Bc=e}function ET(t,e,n){Kt[Qt++]=zn,Kt[Qt++]=qn,Kt[Qt++]=zi,zi=t;var r=zn;t=qn;var i=32-fn(r)-1;r&=~(1<<i),n+=1;var s=32-fn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,zn=1<<32-fn(e)+i|n<<i|r,qn=s+t}else zn=1<<s|n<<i|r,qn=t}function rg(t){t.return!==null&&(_i(t,1),ET(t,1,0))}function ig(t){for(;t===Uc;)Uc=Fs[--Us],Fs[Us]=null,Bc=Fs[--Us],Fs[Us]=null;for(;t===zi;)zi=Kt[--Qt],Kt[Qt]=null,qn=Kt[--Qt],Kt[Qt]=null,zn=Kt[--Qt],Kt[Qt]=null}var $t=null,Bt=null,fe=!1,hn=null;function TT(t,e){var n=Xt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Iv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,$t=t,Bt=Or(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,$t=t,Bt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=zi!==null?{id:zn,overflow:qn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Xt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,$t=t,Bt=null,!0):!1;default:return!1}}function Ip(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ep(t){if(fe){var e=Bt;if(e){var n=e;if(!Iv(t,e)){if(Ip(t))throw Error(P(418));e=Or(n.nextSibling);var r=$t;e&&Iv(t,e)?TT(r,n):(t.flags=t.flags&-4097|2,fe=!1,$t=t)}}else{if(Ip(t))throw Error(P(418));t.flags=t.flags&-4097|2,fe=!1,$t=t}}}function Ev(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;$t=t}function Fu(t){if(t!==$t)return!1;if(!fe)return Ev(t),fe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!_p(t.type,t.memoizedProps)),e&&(e=Bt)){if(Ip(t))throw AT(),Error(P(418));for(;e;)TT(t,e),e=Or(e.nextSibling)}if(Ev(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(P(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Bt=Or(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Bt=null}}else Bt=$t?Or(t.stateNode.nextSibling):null;return!0}function AT(){for(var t=Bt;t;)t=Or(t.nextSibling)}function lo(){Bt=$t=null,fe=!1}function sg(t){hn===null?hn=[t]:hn.push(t)}var Uk=or.ReactCurrentBatchConfig;function un(t,e){if(t&&t.defaultProps){e=we({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var jc=ri(null),$c=null,Bs=null,og=null;function ag(){og=Bs=$c=null}function lg(t){var e=jc.current;he(jc),t._currentValue=e}function Tp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ys(t,e){$c=t,og=Bs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Nt=!0),t.firstContext=null)}function nn(t){var e=t._currentValue;if(og!==t)if(t={context:t,memoizedValue:e,next:null},Bs===null){if($c===null)throw Error(P(308));Bs=t,$c.dependencies={lanes:0,firstContext:t}}else Bs=Bs.next=t;return e}var Pi=null;function ug(t){Pi===null?Pi=[t]:Pi.push(t)}function ST(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ug(e)):(n.next=i.next,i.next=n),e.interleaved=n,er(t,r)}function er(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ir=!1;function cg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function RT(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Kn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Lr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Z&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,er(t,n)}return i=r.interleaved,i===null?(e.next=e,ug(r)):(e.next=i.next,i.next=e),r.interleaved=e,er(t,n)}function uc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Qm(t,n)}}function Tv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function zc(t,e,n,r){var i=t.updateQueue;Ir=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,f=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(d=e,f=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){h=y.call(f,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,d=typeof y=="function"?y.call(f,h,d):y,d==null)break e;h=we({},h,d);break e;case 2:Ir=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else f={eventTime:f,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=f,l=h):c=c.next=f,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Wi|=o,t.lanes=o,t.memoizedState=h}}function Av(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var PT=new SE.Component().refs;function Ap(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:we({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Lh={isMounted:function(t){return(t=t._reactInternals)?ls(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Et(),i=Fr(t),s=Kn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Lr(t,s,i),e!==null&&(pn(e,t,i,r),uc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Et(),i=Fr(t),s=Kn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Lr(t,s,i),e!==null&&(pn(e,t,i,r),uc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Et(),r=Fr(t),i=Kn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Lr(t,i,r),e!==null&&(pn(e,t,r,n),uc(e,t,r))}};function Sv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!rl(n,r)||!rl(i,s):!0}function CT(t,e,n){var r=!1,i=qr,s=e.contextType;return typeof s=="object"&&s!==null?s=nn(s):(i=Lt(e)?$i:pt.current,r=e.contextTypes,s=(r=r!=null)?ao(t,i):qr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Lh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Rv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Lh.enqueueReplaceState(e,e.state,null)}function Sp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=PT,cg(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=nn(s):(s=Lt(e)?$i:pt.current,i.context=ao(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ap(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Lh.enqueueReplaceState(i,i.state,null),zc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ia(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===PT&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,t))}return t}function Uu(t,e){throw t=Object.prototype.toString.call(e),Error(P(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Pv(t){var e=t._init;return e(t._payload)}function kT(t){function e(m,p){if(t){var g=m.deletions;g===null?(m.deletions=[p],m.flags|=16):g.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=Ur(m,p),m.index=0,m.sibling=null,m}function s(m,p,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<p?(m.flags|=2,p):g):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,p,g,E){return p===null||p.tag!==6?(p=vf(g,m.mode,E),p.return=m,p):(p=i(p,g),p.return=m,p)}function l(m,p,g,E){var S=g.type;return S===bs?c(m,p,g.props.children,E,g.key):p!==null&&(p.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===wr&&Pv(S)===p.type)?(E=i(p,g.props),E.ref=ia(m,p,g),E.return=m,E):(E=mc(g.type,g.key,g.props,null,m.mode,E),E.ref=ia(m,p,g),E.return=m,E)}function u(m,p,g,E){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=wf(g,m.mode,E),p.return=m,p):(p=i(p,g.children||[]),p.return=m,p)}function c(m,p,g,E,S){return p===null||p.tag!==7?(p=Oi(g,m.mode,E,S),p.return=m,p):(p=i(p,g),p.return=m,p)}function h(m,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=vf(""+p,m.mode,g),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Cu:return g=mc(p.type,p.key,p.props,null,m.mode,g),g.ref=ia(m,null,p),g.return=m,g;case Ns:return p=wf(p,m.mode,g),p.return=m,p;case wr:var E=p._init;return h(m,E(p._payload),g)}if(va(p)||Zo(p))return p=Oi(p,m.mode,g,null),p.return=m,p;Uu(m,p)}return null}function d(m,p,g,E){var S=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return S!==null?null:a(m,p,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Cu:return g.key===S?l(m,p,g,E):null;case Ns:return g.key===S?u(m,p,g,E):null;case wr:return S=g._init,d(m,p,S(g._payload),E)}if(va(g)||Zo(g))return S!==null?null:c(m,p,g,E,null);Uu(m,g)}return null}function f(m,p,g,E,S){if(typeof E=="string"&&E!==""||typeof E=="number")return m=m.get(g)||null,a(p,m,""+E,S);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Cu:return m=m.get(E.key===null?g:E.key)||null,l(p,m,E,S);case Ns:return m=m.get(E.key===null?g:E.key)||null,u(p,m,E,S);case wr:var C=E._init;return f(m,p,g,C(E._payload),S)}if(va(E)||Zo(E))return m=m.get(g)||null,c(p,m,E,S,null);Uu(p,E)}return null}function y(m,p,g,E){for(var S=null,C=null,N=p,O=p=0,te=null;N!==null&&O<g.length;O++){N.index>O?(te=N,N=null):te=N.sibling;var G=d(m,N,g[O],E);if(G===null){N===null&&(N=te);break}t&&N&&G.alternate===null&&e(m,N),p=s(G,p,O),C===null?S=G:C.sibling=G,C=G,N=te}if(O===g.length)return n(m,N),fe&&_i(m,O),S;if(N===null){for(;O<g.length;O++)N=h(m,g[O],E),N!==null&&(p=s(N,p,O),C===null?S=N:C.sibling=N,C=N);return fe&&_i(m,O),S}for(N=r(m,N);O<g.length;O++)te=f(N,m,O,g[O],E),te!==null&&(t&&te.alternate!==null&&N.delete(te.key===null?O:te.key),p=s(te,p,O),C===null?S=te:C.sibling=te,C=te);return t&&N.forEach(function(an){return e(m,an)}),fe&&_i(m,O),S}function v(m,p,g,E){var S=Zo(g);if(typeof S!="function")throw Error(P(150));if(g=S.call(g),g==null)throw Error(P(151));for(var C=S=null,N=p,O=p=0,te=null,G=g.next();N!==null&&!G.done;O++,G=g.next()){N.index>O?(te=N,N=null):te=N.sibling;var an=d(m,N,G.value,E);if(an===null){N===null&&(N=te);break}t&&N&&an.alternate===null&&e(m,N),p=s(an,p,O),C===null?S=an:C.sibling=an,C=an,N=te}if(G.done)return n(m,N),fe&&_i(m,O),S;if(N===null){for(;!G.done;O++,G=g.next())G=h(m,G.value,E),G!==null&&(p=s(G,p,O),C===null?S=G:C.sibling=G,C=G);return fe&&_i(m,O),S}for(N=r(m,N);!G.done;O++,G=g.next())G=f(N,m,O,G.value,E),G!==null&&(t&&G.alternate!==null&&N.delete(G.key===null?O:G.key),p=s(G,p,O),C===null?S=G:C.sibling=G,C=G);return t&&N.forEach(function(Xo){return e(m,Xo)}),fe&&_i(m,O),S}function I(m,p,g,E){if(typeof g=="object"&&g!==null&&g.type===bs&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Cu:e:{for(var S=g.key,C=p;C!==null;){if(C.key===S){if(S=g.type,S===bs){if(C.tag===7){n(m,C.sibling),p=i(C,g.props.children),p.return=m,m=p;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===wr&&Pv(S)===C.type){n(m,C.sibling),p=i(C,g.props),p.ref=ia(m,C,g),p.return=m,m=p;break e}n(m,C);break}else e(m,C);C=C.sibling}g.type===bs?(p=Oi(g.props.children,m.mode,E,g.key),p.return=m,m=p):(E=mc(g.type,g.key,g.props,null,m.mode,E),E.ref=ia(m,p,g),E.return=m,m=E)}return o(m);case Ns:e:{for(C=g.key;p!==null;){if(p.key===C)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(m,p.sibling),p=i(p,g.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=wf(g,m.mode,E),p.return=m,m=p}return o(m);case wr:return C=g._init,I(m,p,C(g._payload),E)}if(va(g))return y(m,p,g,E);if(Zo(g))return v(m,p,g,E);Uu(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,g),p.return=m,m=p):(n(m,p),p=vf(g,m.mode,E),p.return=m,m=p),o(m)):n(m,p)}return I}var uo=kT(!0),xT=kT(!1),Yl={},Vn=ri(Yl),al=ri(Yl),ll=ri(Yl);function Ci(t){if(t===Yl)throw Error(P(174));return t}function hg(t,e){switch(oe(ll,e),oe(al,t),oe(Vn,Yl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:rp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=rp(e,t)}he(Vn),oe(Vn,e)}function co(){he(Vn),he(al),he(ll)}function NT(t){Ci(ll.current);var e=Ci(Vn.current),n=rp(e,t.type);e!==n&&(oe(al,t),oe(Vn,n))}function dg(t){al.current===t&&(he(Vn),he(al))}var _e=ri(0);function qc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ff=[];function fg(){for(var t=0;t<ff.length;t++)ff[t]._workInProgressVersionPrimary=null;ff.length=0}var cc=or.ReactCurrentDispatcher,pf=or.ReactCurrentBatchConfig,qi=0,ye=null,Fe=null,ze=null,Wc=!1,Oa=!1,ul=0,Bk=0;function ot(){throw Error(P(321))}function pg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!mn(t[n],e[n]))return!1;return!0}function mg(t,e,n,r,i,s){if(qi=s,ye=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,cc.current=t===null||t.memoizedState===null?qk:Wk,t=n(r,i),Oa){s=0;do{if(Oa=!1,ul=0,25<=s)throw Error(P(301));s+=1,ze=Fe=null,e.updateQueue=null,cc.current=Gk,t=n(r,i)}while(Oa)}if(cc.current=Gc,e=Fe!==null&&Fe.next!==null,qi=0,ze=Fe=ye=null,Wc=!1,e)throw Error(P(300));return t}function gg(){var t=ul!==0;return ul=0,t}function wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?ye.memoizedState=ze=t:ze=ze.next=t,ze}function rn(){if(Fe===null){var t=ye.alternate;t=t!==null?t.memoizedState:null}else t=Fe.next;var e=ze===null?ye.memoizedState:ze.next;if(e!==null)ze=e,Fe=t;else{if(t===null)throw Error(P(310));Fe=t,t={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},ze===null?ye.memoizedState=ze=t:ze=ze.next=t}return ze}function cl(t,e){return typeof e=="function"?e(t):e}function mf(t){var e=rn(),n=e.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=t;var r=Fe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((qi&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,ye.lanes|=c,Wi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,mn(r,e.memoizedState)||(Nt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ye.lanes|=s,Wi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function gf(t){var e=rn(),n=e.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);mn(s,e.memoizedState)||(Nt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function bT(){}function DT(t,e){var n=ye,r=rn(),i=e(),s=!mn(r.memoizedState,i);if(s&&(r.memoizedState=i,Nt=!0),r=r.queue,_g(LT.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ze!==null&&ze.memoizedState.tag&1){if(n.flags|=2048,hl(9,OT.bind(null,n,r,i,e),void 0,null),We===null)throw Error(P(349));qi&30||VT(n,e,i)}return i}function VT(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ye.updateQueue,e===null?(e={lastEffect:null,stores:null},ye.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function OT(t,e,n,r){e.value=n,e.getSnapshot=r,MT(e)&&FT(t)}function LT(t,e,n){return n(function(){MT(e)&&FT(t)})}function MT(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!mn(t,n)}catch{return!0}}function FT(t){var e=er(t,1);e!==null&&pn(e,t,1,-1)}function Cv(t){var e=wn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:cl,lastRenderedState:t},e.queue=t,t=t.dispatch=zk.bind(null,ye,t),[e.memoizedState,t]}function hl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ye.updateQueue,e===null?(e={lastEffect:null,stores:null},ye.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function UT(){return rn().memoizedState}function hc(t,e,n,r){var i=wn();ye.flags|=t,i.memoizedState=hl(1|e,n,void 0,r===void 0?null:r)}function Mh(t,e,n,r){var i=rn();r=r===void 0?null:r;var s=void 0;if(Fe!==null){var o=Fe.memoizedState;if(s=o.destroy,r!==null&&pg(r,o.deps)){i.memoizedState=hl(e,n,s,r);return}}ye.flags|=t,i.memoizedState=hl(1|e,n,s,r)}function kv(t,e){return hc(8390656,8,t,e)}function _g(t,e){return Mh(2048,8,t,e)}function BT(t,e){return Mh(4,2,t,e)}function jT(t,e){return Mh(4,4,t,e)}function $T(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function zT(t,e,n){return n=n!=null?n.concat([t]):null,Mh(4,4,$T.bind(null,e,t),n)}function yg(){}function qT(t,e){var n=rn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&pg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function WT(t,e){var n=rn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&pg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function GT(t,e,n){return qi&21?(mn(n,e)||(n=QE(),ye.lanes|=n,Wi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Nt=!0),t.memoizedState=n)}function jk(t,e){var n=re;re=n!==0&&4>n?n:4,t(!0);var r=pf.transition;pf.transition={};try{t(!1),e()}finally{re=n,pf.transition=r}}function HT(){return rn().memoizedState}function $k(t,e,n){var r=Fr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},KT(t))QT(e,n);else if(n=ST(t,e,n,r),n!==null){var i=Et();pn(n,t,r,i),YT(n,e,r)}}function zk(t,e,n){var r=Fr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(KT(t))QT(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,mn(a,o)){var l=e.interleaved;l===null?(i.next=i,ug(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=ST(t,e,i,r),n!==null&&(i=Et(),pn(n,t,r,i),YT(n,e,r))}}function KT(t){var e=t.alternate;return t===ye||e!==null&&e===ye}function QT(t,e){Oa=Wc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function YT(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Qm(t,n)}}var Gc={readContext:nn,useCallback:ot,useContext:ot,useEffect:ot,useImperativeHandle:ot,useInsertionEffect:ot,useLayoutEffect:ot,useMemo:ot,useReducer:ot,useRef:ot,useState:ot,useDebugValue:ot,useDeferredValue:ot,useTransition:ot,useMutableSource:ot,useSyncExternalStore:ot,useId:ot,unstable_isNewReconciler:!1},qk={readContext:nn,useCallback:function(t,e){return wn().memoizedState=[t,e===void 0?null:e],t},useContext:nn,useEffect:kv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,hc(4194308,4,$T.bind(null,e,t),n)},useLayoutEffect:function(t,e){return hc(4194308,4,t,e)},useInsertionEffect:function(t,e){return hc(4,2,t,e)},useMemo:function(t,e){var n=wn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=wn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=$k.bind(null,ye,t),[r.memoizedState,t]},useRef:function(t){var e=wn();return t={current:t},e.memoizedState=t},useState:Cv,useDebugValue:yg,useDeferredValue:function(t){return wn().memoizedState=t},useTransition:function(){var t=Cv(!1),e=t[0];return t=jk.bind(null,t[1]),wn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ye,i=wn();if(fe){if(n===void 0)throw Error(P(407));n=n()}else{if(n=e(),We===null)throw Error(P(349));qi&30||VT(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,kv(LT.bind(null,r,s,t),[t]),r.flags|=2048,hl(9,OT.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=wn(),e=We.identifierPrefix;if(fe){var n=qn,r=zn;n=(r&~(1<<32-fn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ul++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Bk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Wk={readContext:nn,useCallback:qT,useContext:nn,useEffect:_g,useImperativeHandle:zT,useInsertionEffect:BT,useLayoutEffect:jT,useMemo:WT,useReducer:mf,useRef:UT,useState:function(){return mf(cl)},useDebugValue:yg,useDeferredValue:function(t){var e=rn();return GT(e,Fe.memoizedState,t)},useTransition:function(){var t=mf(cl)[0],e=rn().memoizedState;return[t,e]},useMutableSource:bT,useSyncExternalStore:DT,useId:HT,unstable_isNewReconciler:!1},Gk={readContext:nn,useCallback:qT,useContext:nn,useEffect:_g,useImperativeHandle:zT,useInsertionEffect:BT,useLayoutEffect:jT,useMemo:WT,useReducer:gf,useRef:UT,useState:function(){return gf(cl)},useDebugValue:yg,useDeferredValue:function(t){var e=rn();return Fe===null?e.memoizedState=t:GT(e,Fe.memoizedState,t)},useTransition:function(){var t=gf(cl)[0],e=rn().memoizedState;return[t,e]},useMutableSource:bT,useSyncExternalStore:DT,useId:HT,unstable_isNewReconciler:!1};function ho(t,e){try{var n="",r=e;do n+=wC(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function _f(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Rp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Hk=typeof WeakMap=="function"?WeakMap:Map;function XT(t,e,n){n=Kn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Kc||(Kc=!0,Lp=r),Rp(t,e)},n}function JT(t,e,n){n=Kn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Rp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Rp(t,e),typeof r!="function"&&(Mr===null?Mr=new Set([this]):Mr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function xv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Hk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=ax.bind(null,t,e,n),e.then(t,t))}function Nv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function bv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Kn(-1,1),e.tag=2,Lr(n,e,1))),n.lanes|=1),t)}var Kk=or.ReactCurrentOwner,Nt=!1;function gt(t,e,n,r){e.child=t===null?xT(e,null,n,r):uo(e,t.child,n,r)}function Dv(t,e,n,r,i){n=n.render;var s=e.ref;return Ys(e,i),r=mg(t,e,n,r,s,i),n=gg(),t!==null&&!Nt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,tr(t,e,i)):(fe&&n&&rg(e),e.flags|=1,gt(t,e,r,i),e.child)}function Vv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Rg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ZT(t,e,s,r,i)):(t=mc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:rl,n(o,r)&&t.ref===e.ref)return tr(t,e,i)}return e.flags|=1,t=Ur(s,r),t.ref=e.ref,t.return=e,e.child=t}function ZT(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(rl(s,r)&&t.ref===e.ref)if(Nt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Nt=!0);else return e.lanes=t.lanes,tr(t,e,i)}return Pp(t,e,n,r,i)}function e0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},oe($s,Ft),Ft|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,oe($s,Ft),Ft|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,oe($s,Ft),Ft|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,oe($s,Ft),Ft|=r;return gt(t,e,i,n),e.child}function t0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Pp(t,e,n,r,i){var s=Lt(n)?$i:pt.current;return s=ao(e,s),Ys(e,i),n=mg(t,e,n,r,s,i),r=gg(),t!==null&&!Nt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,tr(t,e,i)):(fe&&r&&rg(e),e.flags|=1,gt(t,e,n,i),e.child)}function Ov(t,e,n,r,i){if(Lt(n)){var s=!0;Fc(e)}else s=!1;if(Ys(e,i),e.stateNode===null)dc(t,e),CT(e,n,r),Sp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=nn(u):(u=Lt(n)?$i:pt.current,u=ao(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Rv(e,o,r,u),Ir=!1;var d=e.memoizedState;o.state=d,zc(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Ot.current||Ir?(typeof c=="function"&&(Ap(e,n,c,r),l=e.memoizedState),(a=Ir||Sv(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,RT(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:un(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=nn(l):(l=Lt(n)?$i:pt.current,l=ao(e,l));var f=n.getDerivedStateFromProps;(c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Rv(e,o,r,l),Ir=!1,d=e.memoizedState,o.state=d,zc(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||Ot.current||Ir?(typeof f=="function"&&(Ap(e,n,f,r),y=e.memoizedState),(u=Ir||Sv(e,n,u,r,d,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Cp(t,e,n,r,s,i)}function Cp(t,e,n,r,i,s){t0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&wv(e,n,!1),tr(t,e,s);r=e.stateNode,Kk.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=uo(e,t.child,null,s),e.child=uo(e,null,a,s)):gt(t,e,a,s),e.memoizedState=r.state,i&&wv(e,n,!0),e.child}function n0(t){var e=t.stateNode;e.pendingContext?vv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&vv(t,e.context,!1),hg(t,e.containerInfo)}function Lv(t,e,n,r,i){return lo(),sg(i),e.flags|=256,gt(t,e,n,r),e.child}var kp={dehydrated:null,treeContext:null,retryLane:0};function xp(t){return{baseLanes:t,cachePool:null,transitions:null}}function r0(t,e,n){var r=e.pendingProps,i=_e.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),oe(_e,i&1),t===null)return Ep(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Bh(o,r,0,null),t=Oi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=xp(n),e.memoizedState=kp,t):vg(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Qk(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Ur(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Ur(a,s):(s=Oi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?xp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=kp,r}return s=t.child,t=s.sibling,r=Ur(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function vg(t,e){return e=Bh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Bu(t,e,n,r){return r!==null&&sg(r),uo(e,t.child,null,n),t=vg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Qk(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=_f(Error(P(422))),Bu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Bh({mode:"visible",children:r.children},i,0,null),s=Oi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&uo(e,t.child,null,o),e.child.memoizedState=xp(o),e.memoizedState=kp,s);if(!(e.mode&1))return Bu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(P(419)),r=_f(s,r,void 0),Bu(t,e,o,r)}if(a=(o&t.childLanes)!==0,Nt||a){if(r=We,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,er(t,i),pn(r,t,i,-1))}return Sg(),r=_f(Error(P(421))),Bu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=lx.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Bt=Or(i.nextSibling),$t=e,fe=!0,hn=null,t!==null&&(Kt[Qt++]=zn,Kt[Qt++]=qn,Kt[Qt++]=zi,zn=t.id,qn=t.overflow,zi=e),e=vg(e,r.children),e.flags|=4096,e)}function Mv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Tp(t.return,e,n)}function yf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function i0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(gt(t,e,r.children,n),r=_e.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Mv(t,n,e);else if(t.tag===19)Mv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(oe(_e,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&qc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),yf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&qc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}yf(e,!0,n,null,s);break;case"together":yf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function dc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function tr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Wi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(P(153));if(e.child!==null){for(t=e.child,n=Ur(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ur(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Yk(t,e,n){switch(e.tag){case 3:n0(e),lo();break;case 5:NT(e);break;case 1:Lt(e.type)&&Fc(e);break;case 4:hg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;oe(jc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(oe(_e,_e.current&1),e.flags|=128,null):n&e.child.childLanes?r0(t,e,n):(oe(_e,_e.current&1),t=tr(t,e,n),t!==null?t.sibling:null);oe(_e,_e.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return i0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),oe(_e,_e.current),r)break;return null;case 22:case 23:return e.lanes=0,e0(t,e,n)}return tr(t,e,n)}var s0,Np,o0,a0;s0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Np=function(){};o0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ci(Vn.current);var s=null;switch(n){case"input":i=Zf(t,i),r=Zf(t,r),s=[];break;case"select":i=we({},i,{value:void 0}),r=we({},r,{value:void 0}),s=[];break;case"textarea":i=np(t,i),r=np(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Lc)}ip(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ya.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ya.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&le("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};a0=function(t,e,n,r){n!==r&&(e.flags|=4)};function sa(t,e){if(!fe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function at(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Xk(t,e,n){var r=e.pendingProps;switch(ig(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(e),null;case 1:return Lt(e.type)&&Mc(),at(e),null;case 3:return r=e.stateNode,co(),he(Ot),he(pt),fg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Fu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,hn!==null&&(Up(hn),hn=null))),Np(t,e),at(e),null;case 5:dg(e);var i=Ci(ll.current);if(n=e.type,t!==null&&e.stateNode!=null)o0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(P(166));return at(e),null}if(t=Ci(Vn.current),Fu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[In]=e,r[ol]=s,t=(e.mode&1)!==0,n){case"dialog":le("cancel",r),le("close",r);break;case"iframe":case"object":case"embed":le("load",r);break;case"video":case"audio":for(i=0;i<Ia.length;i++)le(Ia[i],r);break;case"source":le("error",r);break;case"img":case"image":case"link":le("error",r),le("load",r);break;case"details":le("toggle",r);break;case"input":Gy(r,s),le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},le("invalid",r);break;case"textarea":Ky(r,s),le("invalid",r)}ip(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Mu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Mu(r.textContent,a,t),i=["children",""+a]):Ya.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&le("scroll",r)}switch(n){case"input":ku(r),Hy(r,s,!0);break;case"textarea":ku(r),Qy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Lc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=VE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[In]=e,t[ol]=r,s0(t,e,!1,!1),e.stateNode=t;e:{switch(o=sp(n,r),n){case"dialog":le("cancel",t),le("close",t),i=r;break;case"iframe":case"object":case"embed":le("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ia.length;i++)le(Ia[i],t);i=r;break;case"source":le("error",t),i=r;break;case"img":case"image":case"link":le("error",t),le("load",t),i=r;break;case"details":le("toggle",t),i=r;break;case"input":Gy(t,r),i=Zf(t,r),le("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=we({},r,{value:void 0}),le("invalid",t);break;case"textarea":Ky(t,r),i=np(t,r),le("invalid",t);break;default:i=r}ip(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?ME(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&OE(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Xa(t,l):typeof l=="number"&&Xa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ya.hasOwnProperty(s)?l!=null&&s==="onScroll"&&le("scroll",t):l!=null&&zm(t,s,l,o))}switch(n){case"input":ku(t),Hy(t,r,!1);break;case"textarea":ku(t),Qy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+zr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Gs(t,!!r.multiple,s,!1):r.defaultValue!=null&&Gs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Lc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return at(e),null;case 6:if(t&&e.stateNode!=null)a0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(P(166));if(n=Ci(ll.current),Ci(Vn.current),Fu(e)){if(r=e.stateNode,n=e.memoizedProps,r[In]=e,(s=r.nodeValue!==n)&&(t=$t,t!==null))switch(t.tag){case 3:Mu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Mu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[In]=e,e.stateNode=r}return at(e),null;case 13:if(he(_e),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(fe&&Bt!==null&&e.mode&1&&!(e.flags&128))AT(),lo(),e.flags|=98560,s=!1;else if(s=Fu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(P(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(P(317));s[In]=e}else lo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;at(e),s=!1}else hn!==null&&(Up(hn),hn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||_e.current&1?Ue===0&&(Ue=3):Sg())),e.updateQueue!==null&&(e.flags|=4),at(e),null);case 4:return co(),Np(t,e),t===null&&il(e.stateNode.containerInfo),at(e),null;case 10:return lg(e.type._context),at(e),null;case 17:return Lt(e.type)&&Mc(),at(e),null;case 19:if(he(_e),s=e.memoizedState,s===null)return at(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)sa(s,!1);else{if(Ue!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=qc(t),o!==null){for(e.flags|=128,sa(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return oe(_e,_e.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ne()>fo&&(e.flags|=128,r=!0,sa(s,!1),e.lanes=4194304)}else{if(!r)if(t=qc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),sa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!fe)return at(e),null}else 2*Ne()-s.renderingStartTime>fo&&n!==1073741824&&(e.flags|=128,r=!0,sa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ne(),e.sibling=null,n=_e.current,oe(_e,r?n&1|2:n&1),e):(at(e),null);case 22:case 23:return Ag(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ft&1073741824&&(at(e),e.subtreeFlags&6&&(e.flags|=8192)):at(e),null;case 24:return null;case 25:return null}throw Error(P(156,e.tag))}function Jk(t,e){switch(ig(e),e.tag){case 1:return Lt(e.type)&&Mc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return co(),he(Ot),he(pt),fg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return dg(e),null;case 13:if(he(_e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(P(340));lo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return he(_e),null;case 4:return co(),null;case 10:return lg(e.type._context),null;case 22:case 23:return Ag(),null;case 24:return null;default:return null}}var ju=!1,ut=!1,Zk=typeof WeakSet=="function"?WeakSet:Set,M=null;function js(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(t,e,r)}else n.current=null}function bp(t,e,n){try{n()}catch(r){Te(t,e,r)}}var Fv=!1;function ex(t,e){if(mp=Dc,t=hT(),ng(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var f;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(f=h.firstChild)!==null;)d=h,h=f;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(f=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=f}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(gp={focusedElem:t,selectionRange:n},Dc=!1,M=e;M!==null;)if(e=M,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,M=t;else for(;M!==null;){e=M;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,I=y.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?v:un(e.type,v),I);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(E){Te(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,M=t;break}M=e.return}return y=Fv,Fv=!1,y}function La(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&bp(e,n,s)}i=i.next}while(i!==r)}}function Fh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Dp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function l0(t){var e=t.alternate;e!==null&&(t.alternate=null,l0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[In],delete e[ol],delete e[vp],delete e[Lk],delete e[Mk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function u0(t){return t.tag===5||t.tag===3||t.tag===4}function Uv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||u0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Lc));else if(r!==4&&(t=t.child,t!==null))for(Vp(t,e,n),t=t.sibling;t!==null;)Vp(t,e,n),t=t.sibling}function Op(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Op(t,e,n),t=t.sibling;t!==null;)Op(t,e,n),t=t.sibling}var Xe=null,cn=!1;function mr(t,e,n){for(n=n.child;n!==null;)c0(t,e,n),n=n.sibling}function c0(t,e,n){if(Dn&&typeof Dn.onCommitFiberUnmount=="function")try{Dn.onCommitFiberUnmount(xh,n)}catch{}switch(n.tag){case 5:ut||js(n,e);case 6:var r=Xe,i=cn;Xe=null,mr(t,e,n),Xe=r,cn=i,Xe!==null&&(cn?(t=Xe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Xe.removeChild(n.stateNode));break;case 18:Xe!==null&&(cn?(t=Xe,n=n.stateNode,t.nodeType===8?hf(t.parentNode,n):t.nodeType===1&&hf(t,n),tl(t)):hf(Xe,n.stateNode));break;case 4:r=Xe,i=cn,Xe=n.stateNode.containerInfo,cn=!0,mr(t,e,n),Xe=r,cn=i;break;case 0:case 11:case 14:case 15:if(!ut&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&bp(n,e,o),i=i.next}while(i!==r)}mr(t,e,n);break;case 1:if(!ut&&(js(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Te(n,e,a)}mr(t,e,n);break;case 21:mr(t,e,n);break;case 22:n.mode&1?(ut=(r=ut)||n.memoizedState!==null,mr(t,e,n),ut=r):mr(t,e,n);break;default:mr(t,e,n)}}function Bv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Zk),e.forEach(function(r){var i=ux.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ln(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Xe=a.stateNode,cn=!1;break e;case 3:Xe=a.stateNode.containerInfo,cn=!0;break e;case 4:Xe=a.stateNode.containerInfo,cn=!0;break e}a=a.return}if(Xe===null)throw Error(P(160));c0(s,o,i),Xe=null,cn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Te(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)h0(e,t),e=e.sibling}function h0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ln(e,t),vn(t),r&4){try{La(3,t,t.return),Fh(3,t)}catch(v){Te(t,t.return,v)}try{La(5,t,t.return)}catch(v){Te(t,t.return,v)}}break;case 1:ln(e,t),vn(t),r&512&&n!==null&&js(n,n.return);break;case 5:if(ln(e,t),vn(t),r&512&&n!==null&&js(n,n.return),t.flags&32){var i=t.stateNode;try{Xa(i,"")}catch(v){Te(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&bE(i,s),sp(a,o);var u=sp(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?ME(i,h):c==="dangerouslySetInnerHTML"?OE(i,h):c==="children"?Xa(i,h):zm(i,c,h,u)}switch(a){case"input":ep(i,s);break;case"textarea":DE(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;f!=null?Gs(i,!!s.multiple,f,!1):d!==!!s.multiple&&(s.defaultValue!=null?Gs(i,!!s.multiple,s.defaultValue,!0):Gs(i,!!s.multiple,s.multiple?[]:"",!1))}i[ol]=s}catch(v){Te(t,t.return,v)}}break;case 6:if(ln(e,t),vn(t),r&4){if(t.stateNode===null)throw Error(P(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){Te(t,t.return,v)}}break;case 3:if(ln(e,t),vn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{tl(e.containerInfo)}catch(v){Te(t,t.return,v)}break;case 4:ln(e,t),vn(t);break;case 13:ln(e,t),vn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Eg=Ne())),r&4&&Bv(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(ut=(u=ut)||c,ln(e,t),ut=u):ln(e,t),vn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(M=t,c=t.child;c!==null;){for(h=M=c;M!==null;){switch(d=M,f=d.child,d.tag){case 0:case 11:case 14:case 15:La(4,d,d.return);break;case 1:js(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){Te(r,n,v)}}break;case 5:js(d,d.return);break;case 22:if(d.memoizedState!==null){$v(h);continue}}f!==null?(f.return=d,M=f):$v(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=LE("display",o))}catch(v){Te(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){Te(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ln(e,t),vn(t),r&4&&Bv(t);break;case 21:break;default:ln(e,t),vn(t)}}function vn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(u0(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Xa(i,""),r.flags&=-33);var s=Uv(t);Op(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Uv(t);Vp(t,a,o);break;default:throw Error(P(161))}}catch(l){Te(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function tx(t,e,n){M=t,d0(t)}function d0(t,e,n){for(var r=(t.mode&1)!==0;M!==null;){var i=M,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ju;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ut;a=ju;var u=ut;if(ju=o,(ut=l)&&!u)for(M=i;M!==null;)o=M,l=o.child,o.tag===22&&o.memoizedState!==null?zv(i):l!==null?(l.return=o,M=l):zv(i);for(;s!==null;)M=s,d0(s),s=s.sibling;M=i,ju=a,ut=u}jv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,M=s):jv(t)}}function jv(t){for(;M!==null;){var e=M;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ut||Fh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ut)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:un(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Av(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Av(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&tl(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}ut||e.flags&512&&Dp(e)}catch(d){Te(e,e.return,d)}}if(e===t){M=null;break}if(n=e.sibling,n!==null){n.return=e.return,M=n;break}M=e.return}}function $v(t){for(;M!==null;){var e=M;if(e===t){M=null;break}var n=e.sibling;if(n!==null){n.return=e.return,M=n;break}M=e.return}}function zv(t){for(;M!==null;){var e=M;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Fh(4,e)}catch(l){Te(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Te(e,i,l)}}var s=e.return;try{Dp(e)}catch(l){Te(e,s,l)}break;case 5:var o=e.return;try{Dp(e)}catch(l){Te(e,o,l)}}}catch(l){Te(e,e.return,l)}if(e===t){M=null;break}var a=e.sibling;if(a!==null){a.return=e.return,M=a;break}M=e.return}}var nx=Math.ceil,Hc=or.ReactCurrentDispatcher,wg=or.ReactCurrentOwner,en=or.ReactCurrentBatchConfig,Z=0,We=null,Me=null,tt=0,Ft=0,$s=ri(0),Ue=0,dl=null,Wi=0,Uh=0,Ig=0,Ma=null,xt=null,Eg=0,fo=1/0,Bn=null,Kc=!1,Lp=null,Mr=null,$u=!1,Cr=null,Qc=0,Fa=0,Mp=null,fc=-1,pc=0;function Et(){return Z&6?Ne():fc!==-1?fc:fc=Ne()}function Fr(t){return t.mode&1?Z&2&&tt!==0?tt&-tt:Uk.transition!==null?(pc===0&&(pc=QE()),pc):(t=re,t!==0||(t=window.event,t=t===void 0?16:nT(t.type)),t):1}function pn(t,e,n,r){if(50<Fa)throw Fa=0,Mp=null,Error(P(185));Hl(t,n,r),(!(Z&2)||t!==We)&&(t===We&&(!(Z&2)&&(Uh|=n),Ue===4&&Ar(t,tt)),Mt(t,r),n===1&&Z===0&&!(e.mode&1)&&(fo=Ne()+500,Oh&&ii()))}function Mt(t,e){var n=t.callbackNode;UC(t,e);var r=bc(t,t===We?tt:0);if(r===0)n!==null&&Jy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Jy(n),e===1)t.tag===0?Fk(qv.bind(null,t)):IT(qv.bind(null,t)),Vk(function(){!(Z&6)&&ii()}),n=null;else{switch(YE(r)){case 1:n=Km;break;case 4:n=HE;break;case 16:n=Nc;break;case 536870912:n=KE;break;default:n=Nc}n=w0(n,f0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function f0(t,e){if(fc=-1,pc=0,Z&6)throw Error(P(327));var n=t.callbackNode;if(Xs()&&t.callbackNode!==n)return null;var r=bc(t,t===We?tt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Yc(t,r);else{e=r;var i=Z;Z|=2;var s=m0();(We!==t||tt!==e)&&(Bn=null,fo=Ne()+500,Vi(t,e));do try{sx();break}catch(a){p0(t,a)}while(1);ag(),Hc.current=s,Z=i,Me!==null?e=0:(We=null,tt=0,e=Ue)}if(e!==0){if(e===2&&(i=cp(t),i!==0&&(r=i,e=Fp(t,i))),e===1)throw n=dl,Vi(t,0),Ar(t,r),Mt(t,Ne()),n;if(e===6)Ar(t,r);else{if(i=t.current.alternate,!(r&30)&&!rx(i)&&(e=Yc(t,r),e===2&&(s=cp(t),s!==0&&(r=s,e=Fp(t,s))),e===1))throw n=dl,Vi(t,0),Ar(t,r),Mt(t,Ne()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(P(345));case 2:yi(t,xt,Bn);break;case 3:if(Ar(t,r),(r&130023424)===r&&(e=Eg+500-Ne(),10<e)){if(bc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Et(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=yp(yi.bind(null,t,xt,Bn),e);break}yi(t,xt,Bn);break;case 4:if(Ar(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-fn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*nx(r/1960))-r,10<r){t.timeoutHandle=yp(yi.bind(null,t,xt,Bn),r);break}yi(t,xt,Bn);break;case 5:yi(t,xt,Bn);break;default:throw Error(P(329))}}}return Mt(t,Ne()),t.callbackNode===n?f0.bind(null,t):null}function Fp(t,e){var n=Ma;return t.current.memoizedState.isDehydrated&&(Vi(t,e).flags|=256),t=Yc(t,e),t!==2&&(e=xt,xt=n,e!==null&&Up(e)),t}function Up(t){xt===null?xt=t:xt.push.apply(xt,t)}function rx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!mn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ar(t,e){for(e&=~Ig,e&=~Uh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-fn(e),r=1<<n;t[n]=-1,e&=~r}}function qv(t){if(Z&6)throw Error(P(327));Xs();var e=bc(t,0);if(!(e&1))return Mt(t,Ne()),null;var n=Yc(t,e);if(t.tag!==0&&n===2){var r=cp(t);r!==0&&(e=r,n=Fp(t,r))}if(n===1)throw n=dl,Vi(t,0),Ar(t,e),Mt(t,Ne()),n;if(n===6)throw Error(P(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,yi(t,xt,Bn),Mt(t,Ne()),null}function Tg(t,e){var n=Z;Z|=1;try{return t(e)}finally{Z=n,Z===0&&(fo=Ne()+500,Oh&&ii())}}function Gi(t){Cr!==null&&Cr.tag===0&&!(Z&6)&&Xs();var e=Z;Z|=1;var n=en.transition,r=re;try{if(en.transition=null,re=1,t)return t()}finally{re=r,en.transition=n,Z=e,!(Z&6)&&ii()}}function Ag(){Ft=$s.current,he($s)}function Vi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Dk(n)),Me!==null)for(n=Me.return;n!==null;){var r=n;switch(ig(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Mc();break;case 3:co(),he(Ot),he(pt),fg();break;case 5:dg(r);break;case 4:co();break;case 13:he(_e);break;case 19:he(_e);break;case 10:lg(r.type._context);break;case 22:case 23:Ag()}n=n.return}if(We=t,Me=t=Ur(t.current,null),tt=Ft=e,Ue=0,dl=null,Ig=Uh=Wi=0,xt=Ma=null,Pi!==null){for(e=0;e<Pi.length;e++)if(n=Pi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Pi=null}return t}function p0(t,e){do{var n=Me;try{if(ag(),cc.current=Gc,Wc){for(var r=ye.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Wc=!1}if(qi=0,ze=Fe=ye=null,Oa=!1,ul=0,wg.current=null,n===null||n.return===null){Ue=1,dl=e,Me=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=tt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=Nv(o);if(f!==null){f.flags&=-257,bv(f,o,a,s,e),f.mode&1&&xv(s,u,e),e=f,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){xv(s,u,e),Sg();break e}l=Error(P(426))}}else if(fe&&a.mode&1){var I=Nv(o);if(I!==null){!(I.flags&65536)&&(I.flags|=256),bv(I,o,a,s,e),sg(ho(l,a));break e}}s=l=ho(l,a),Ue!==4&&(Ue=2),Ma===null?Ma=[s]:Ma.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=XT(s,l,e);Tv(s,m);break e;case 1:a=l;var p=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Mr===null||!Mr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=JT(s,a,e);Tv(s,E);break e}}s=s.return}while(s!==null)}_0(n)}catch(S){e=S,Me===n&&n!==null&&(Me=n=n.return);continue}break}while(1)}function m0(){var t=Hc.current;return Hc.current=Gc,t===null?Gc:t}function Sg(){(Ue===0||Ue===3||Ue===2)&&(Ue=4),We===null||!(Wi&268435455)&&!(Uh&268435455)||Ar(We,tt)}function Yc(t,e){var n=Z;Z|=2;var r=m0();(We!==t||tt!==e)&&(Bn=null,Vi(t,e));do try{ix();break}catch(i){p0(t,i)}while(1);if(ag(),Z=n,Hc.current=r,Me!==null)throw Error(P(261));return We=null,tt=0,Ue}function ix(){for(;Me!==null;)g0(Me)}function sx(){for(;Me!==null&&!xC();)g0(Me)}function g0(t){var e=v0(t.alternate,t,Ft);t.memoizedProps=t.pendingProps,e===null?_0(t):Me=e,wg.current=null}function _0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Jk(n,e),n!==null){n.flags&=32767,Me=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ue=6,Me=null;return}}else if(n=Xk(n,e,Ft),n!==null){Me=n;return}if(e=e.sibling,e!==null){Me=e;return}Me=e=t}while(e!==null);Ue===0&&(Ue=5)}function yi(t,e,n){var r=re,i=en.transition;try{en.transition=null,re=1,ox(t,e,n,r)}finally{en.transition=i,re=r}return null}function ox(t,e,n,r){do Xs();while(Cr!==null);if(Z&6)throw Error(P(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(P(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(BC(t,s),t===We&&(Me=We=null,tt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||$u||($u=!0,w0(Nc,function(){return Xs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=en.transition,en.transition=null;var o=re;re=1;var a=Z;Z|=4,wg.current=null,ex(t,n),h0(n,t),Rk(gp),Dc=!!mp,gp=mp=null,t.current=n,tx(n),NC(),Z=a,re=o,en.transition=s}else t.current=n;if($u&&($u=!1,Cr=t,Qc=i),s=t.pendingLanes,s===0&&(Mr=null),VC(n.stateNode),Mt(t,Ne()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Kc)throw Kc=!1,t=Lp,Lp=null,t;return Qc&1&&t.tag!==0&&Xs(),s=t.pendingLanes,s&1?t===Mp?Fa++:(Fa=0,Mp=t):Fa=0,ii(),null}function Xs(){if(Cr!==null){var t=YE(Qc),e=en.transition,n=re;try{if(en.transition=null,re=16>t?16:t,Cr===null)var r=!1;else{if(t=Cr,Cr=null,Qc=0,Z&6)throw Error(P(331));var i=Z;for(Z|=4,M=t.current;M!==null;){var s=M,o=s.child;if(M.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(M=u;M!==null;){var c=M;switch(c.tag){case 0:case 11:case 15:La(8,c,s)}var h=c.child;if(h!==null)h.return=c,M=h;else for(;M!==null;){c=M;var d=c.sibling,f=c.return;if(l0(c),c===u){M=null;break}if(d!==null){d.return=f,M=d;break}M=f}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var I=v.sibling;v.sibling=null,v=I}while(v!==null)}}M=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,M=o;else e:for(;M!==null;){if(s=M,s.flags&2048)switch(s.tag){case 0:case 11:case 15:La(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,M=m;break e}M=s.return}}var p=t.current;for(M=p;M!==null;){o=M;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,M=g;else e:for(o=p;M!==null;){if(a=M,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Fh(9,a)}}catch(S){Te(a,a.return,S)}if(a===o){M=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,M=E;break e}M=a.return}}if(Z=i,ii(),Dn&&typeof Dn.onPostCommitFiberRoot=="function")try{Dn.onPostCommitFiberRoot(xh,t)}catch{}r=!0}return r}finally{re=n,en.transition=e}}return!1}function Wv(t,e,n){e=ho(n,e),e=XT(t,e,1),t=Lr(t,e,1),e=Et(),t!==null&&(Hl(t,1,e),Mt(t,e))}function Te(t,e,n){if(t.tag===3)Wv(t,t,n);else for(;e!==null;){if(e.tag===3){Wv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Mr===null||!Mr.has(r))){t=ho(n,t),t=JT(e,t,1),e=Lr(e,t,1),t=Et(),e!==null&&(Hl(e,1,t),Mt(e,t));break}}e=e.return}}function ax(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Et(),t.pingedLanes|=t.suspendedLanes&n,We===t&&(tt&n)===n&&(Ue===4||Ue===3&&(tt&130023424)===tt&&500>Ne()-Eg?Vi(t,0):Ig|=n),Mt(t,e)}function y0(t,e){e===0&&(t.mode&1?(e=bu,bu<<=1,!(bu&130023424)&&(bu=4194304)):e=1);var n=Et();t=er(t,e),t!==null&&(Hl(t,e,n),Mt(t,n))}function lx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),y0(t,n)}function ux(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(e),y0(t,n)}var v0;v0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ot.current)Nt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Nt=!1,Yk(t,e,n);Nt=!!(t.flags&131072)}else Nt=!1,fe&&e.flags&1048576&&ET(e,Bc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;dc(t,e),t=e.pendingProps;var i=ao(e,pt.current);Ys(e,n),i=mg(null,e,r,t,i,n);var s=gg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Lt(r)?(s=!0,Fc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,cg(e),i.updater=Lh,e.stateNode=i,i._reactInternals=e,Sp(e,r,t,n),e=Cp(null,e,r,!0,s,n)):(e.tag=0,fe&&s&&rg(e),gt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(dc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=hx(r),t=un(r,t),i){case 0:e=Pp(null,e,r,t,n);break e;case 1:e=Ov(null,e,r,t,n);break e;case 11:e=Dv(null,e,r,t,n);break e;case 14:e=Vv(null,e,r,un(r.type,t),n);break e}throw Error(P(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),Pp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),Ov(t,e,r,i,n);case 3:e:{if(n0(e),t===null)throw Error(P(387));r=e.pendingProps,s=e.memoizedState,i=s.element,RT(t,e),zc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ho(Error(P(423)),e),e=Lv(t,e,r,n,i);break e}else if(r!==i){i=ho(Error(P(424)),e),e=Lv(t,e,r,n,i);break e}else for(Bt=Or(e.stateNode.containerInfo.firstChild),$t=e,fe=!0,hn=null,n=xT(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(lo(),r===i){e=tr(t,e,n);break e}gt(t,e,r,n)}e=e.child}return e;case 5:return NT(e),t===null&&Ep(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,_p(r,i)?o=null:s!==null&&_p(r,s)&&(e.flags|=32),t0(t,e),gt(t,e,o,n),e.child;case 6:return t===null&&Ep(e),null;case 13:return r0(t,e,n);case 4:return hg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=uo(e,null,r,n):gt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),Dv(t,e,r,i,n);case 7:return gt(t,e,e.pendingProps,n),e.child;case 8:return gt(t,e,e.pendingProps.children,n),e.child;case 12:return gt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,oe(jc,r._currentValue),r._currentValue=o,s!==null)if(mn(s.value,o)){if(s.children===i.children&&!Ot.current){e=tr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Kn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Tp(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(P(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Tp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}gt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ys(e,n),i=nn(i),r=r(i),e.flags|=1,gt(t,e,r,n),e.child;case 14:return r=e.type,i=un(r,e.pendingProps),i=un(r.type,i),Vv(t,e,r,i,n);case 15:return ZT(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),dc(t,e),e.tag=1,Lt(r)?(t=!0,Fc(e)):t=!1,Ys(e,n),CT(e,r,i),Sp(e,r,i,n),Cp(null,e,r,!0,t,n);case 19:return i0(t,e,n);case 22:return e0(t,e,n)}throw Error(P(156,e.tag))};function w0(t,e){return GE(t,e)}function cx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xt(t,e,n,r){return new cx(t,e,n,r)}function Rg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function hx(t){if(typeof t=="function")return Rg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Wm)return 11;if(t===Gm)return 14}return 2}function Ur(t,e){var n=t.alternate;return n===null?(n=Xt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function mc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Rg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case bs:return Oi(n.children,i,s,e);case qm:o=8,i|=8;break;case Qf:return t=Xt(12,n,e,i|2),t.elementType=Qf,t.lanes=s,t;case Yf:return t=Xt(13,n,e,i),t.elementType=Yf,t.lanes=s,t;case Xf:return t=Xt(19,n,e,i),t.elementType=Xf,t.lanes=s,t;case kE:return Bh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case PE:o=10;break e;case CE:o=9;break e;case Wm:o=11;break e;case Gm:o=14;break e;case wr:o=16,r=null;break e}throw Error(P(130,t==null?t:typeof t,""))}return e=Xt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Oi(t,e,n,r){return t=Xt(7,t,r,e),t.lanes=n,t}function Bh(t,e,n,r){return t=Xt(22,t,r,e),t.elementType=kE,t.lanes=n,t.stateNode={isHidden:!1},t}function vf(t,e,n){return t=Xt(6,t,null,e),t.lanes=n,t}function wf(t,e,n){return e=Xt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function dx(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zd(0),this.expirationTimes=Zd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Pg(t,e,n,r,i,s,o,a,l){return t=new dx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Xt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},cg(s),t}function fx(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ns,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function I0(t){if(!t)return qr;t=t._reactInternals;e:{if(ls(t)!==t||t.tag!==1)throw Error(P(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Lt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(P(171))}if(t.tag===1){var n=t.type;if(Lt(n))return wT(t,n,e)}return e}function E0(t,e,n,r,i,s,o,a,l){return t=Pg(n,r,!0,t,i,s,o,a,l),t.context=I0(null),n=t.current,r=Et(),i=Fr(n),s=Kn(r,i),s.callback=e??null,Lr(n,s,i),t.current.lanes=i,Hl(t,i,r),Mt(t,r),t}function jh(t,e,n,r){var i=e.current,s=Et(),o=Fr(i);return n=I0(n),e.context===null?e.context=n:e.pendingContext=n,e=Kn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Lr(i,e,o),t!==null&&(pn(t,i,o,s),uc(t,i,o)),o}function Xc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Gv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Cg(t,e){Gv(t,e),(t=t.alternate)&&Gv(t,e)}function px(){return null}var T0=typeof reportError=="function"?reportError:function(t){console.error(t)};function kg(t){this._internalRoot=t}$h.prototype.render=kg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(P(409));jh(t,e,null,null)};$h.prototype.unmount=kg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Gi(function(){jh(null,t,null,null)}),e[Zn]=null}};function $h(t){this._internalRoot=t}$h.prototype.unstable_scheduleHydration=function(t){if(t){var e=ZE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Tr.length&&e!==0&&e<Tr[n].priority;n++);Tr.splice(n,0,t),n===0&&tT(t)}};function xg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function zh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Hv(){}function mx(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Xc(o);s.call(u)}}var o=E0(e,r,t,0,null,!1,!1,"",Hv);return t._reactRootContainer=o,t[Zn]=o.current,il(t.nodeType===8?t.parentNode:t),Gi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Xc(l);a.call(u)}}var l=Pg(t,0,!1,null,null,!1,!1,"",Hv);return t._reactRootContainer=l,t[Zn]=l.current,il(t.nodeType===8?t.parentNode:t),Gi(function(){jh(e,l,n,r)}),l}function qh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Xc(o);a.call(l)}}jh(e,o,t,i)}else o=mx(n,e,t,i,r);return Xc(o)}XE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=wa(e.pendingLanes);n!==0&&(Qm(e,n|1),Mt(e,Ne()),!(Z&6)&&(fo=Ne()+500,ii()))}break;case 13:Gi(function(){var r=er(t,1);if(r!==null){var i=Et();pn(r,t,1,i)}}),Cg(t,1)}};Ym=function(t){if(t.tag===13){var e=er(t,134217728);if(e!==null){var n=Et();pn(e,t,134217728,n)}Cg(t,134217728)}};JE=function(t){if(t.tag===13){var e=Fr(t),n=er(t,e);if(n!==null){var r=Et();pn(n,t,e,r)}Cg(t,e)}};ZE=function(){return re};eT=function(t,e){var n=re;try{return re=t,e()}finally{re=n}};ap=function(t,e,n){switch(e){case"input":if(ep(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Vh(r);if(!i)throw Error(P(90));NE(r),ep(r,i)}}}break;case"textarea":DE(t,n);break;case"select":e=n.value,e!=null&&Gs(t,!!n.multiple,e,!1)}};BE=Tg;jE=Gi;var gx={usingClientEntryPoint:!1,Events:[Ql,Ls,Vh,FE,UE,Tg]},oa={findFiberByHostInstance:Ri,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},_x={bundleType:oa.bundleType,version:oa.version,rendererPackageName:oa.rendererPackageName,rendererConfig:oa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:or.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=qE(t),t===null?null:t.stateNode},findFiberByHostInstance:oa.findFiberByHostInstance||px,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zu.isDisabled&&zu.supportsFiber)try{xh=zu.inject(_x),Dn=zu}catch{}}Gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gx;Gt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xg(e))throw Error(P(200));return fx(t,e,null,n)};Gt.createRoot=function(t,e){if(!xg(t))throw Error(P(299));var n=!1,r="",i=T0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Pg(t,1,!1,null,null,n,!1,r,i),t[Zn]=e.current,il(t.nodeType===8?t.parentNode:t),new kg(e)};Gt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(P(188)):(t=Object.keys(t).join(","),Error(P(268,t)));return t=qE(e),t=t===null?null:t.stateNode,t};Gt.flushSync=function(t){return Gi(t)};Gt.hydrate=function(t,e,n){if(!zh(e))throw Error(P(200));return qh(null,t,e,!0,n)};Gt.hydrateRoot=function(t,e,n){if(!xg(t))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=T0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=E0(e,null,t,1,n??null,i,!1,s,o),t[Zn]=e.current,il(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new $h(e)};Gt.render=function(t,e,n){if(!zh(e))throw Error(P(200));return qh(null,t,e,!1,n)};Gt.unmountComponentAtNode=function(t){if(!zh(t))throw Error(P(40));return t._reactRootContainer?(Gi(function(){qh(null,null,t,!1,function(){t._reactRootContainer=null,t[Zn]=null})}),!0):!1};Gt.unstable_batchedUpdates=Tg;Gt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!zh(n))throw Error(P(200));if(t==null||t._reactInternals===void 0)throw Error(P(38));return qh(t,e,n,!1,r)};Gt.version="18.2.0-next-9e3b772b8-20220608";function A0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A0)}catch(t){console.error(t)}}A0(),EE.exports=Gt;var yx=EE.exports,S0,Kv=yx;S0=Kv.createRoot,Kv.hydrateRoot;/**
 * @remix-run/router v1.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fl(){return fl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},fl.apply(this,arguments)}var kr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(kr||(kr={}));const Qv="popstate";function vx(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Bp("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Jc(i)}return Ix(e,n,null,t)}function De(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Ng(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function wx(){return Math.random().toString(36).substr(2,8)}function Yv(t,e){return{usr:t.state,key:t.key,idx:e}}function Bp(t,e,n,r){return n===void 0&&(n=null),fl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?bo(e):e,{state:n,key:e&&e.key||r||wx()})}function Jc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function bo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Ix(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=kr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(fl({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=kr.Pop;let I=c(),m=I==null?null:I-u;u=I,l&&l({action:a,location:v.location,delta:m})}function d(I,m){a=kr.Push;let p=Bp(v.location,I,m);n&&n(p,I),u=c()+1;let g=Yv(p,u),E=v.createHref(p);try{o.pushState(g,"",E)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(E)}s&&l&&l({action:a,location:v.location,delta:1})}function f(I,m){a=kr.Replace;let p=Bp(v.location,I,m);n&&n(p,I),u=c();let g=Yv(p,u),E=v.createHref(p);o.replaceState(g,"",E),s&&l&&l({action:a,location:v.location,delta:0})}function y(I){let m=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof I=="string"?I:Jc(I);return De(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let v={get action(){return a},get location(){return t(i,o)},listen(I){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Qv,h),l=I,()=>{i.removeEventListener(Qv,h),l=null}},createHref(I){return e(i,I)},createURL:y,encodeLocation(I){let m=y(I);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:d,replace:f,go(I){return o.go(I)}};return v}var Xv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Xv||(Xv={}));function Ex(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?bo(e):e,i=bg(r.pathname||"/",n);if(i==null)return null;let s=R0(t);Tx(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=bx(s[a],Ox(i));return o}function R0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(De(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Br([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(De(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),R0(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:xx(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of P0(s.path))i(s,o,l)}),e}function P0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=P0(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function Tx(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Nx(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Ax=/^:\w+$/,Sx=3,Rx=2,Px=1,Cx=10,kx=-2,Jv=t=>t==="*";function xx(t,e){let n=t.split("/"),r=n.length;return n.some(Jv)&&(r+=kx),e&&(r+=Rx),n.filter(i=>!Jv(i)).reduce((i,s)=>i+(Ax.test(s)?Sx:s===""?Px:Cx),r)}function Nx(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function bx(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=Dx({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:Br([i,c.pathname]),pathnameBase:Bx(Br([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Br([i,c.pathnameBase]))}return s}function Dx(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Vx(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{let{paramName:d,isOptional:f}=c;if(d==="*"){let v=a[h]||"";o=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}const y=a[h];return f&&!y?u[d]=void 0:u[d]=Lx(y||"",d),u},{}),pathname:s,pathnameBase:o,pattern:t}}function Vx(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Ng(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Ox(t){try{return decodeURI(t)}catch(e){return Ng(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Lx(t,e){try{return decodeURIComponent(t)}catch(n){return Ng(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function bg(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Mx(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?bo(t):t;return{pathname:n?n.startsWith("/")?n:Fx(n,e):e,search:jx(r),hash:$x(i)}}function Fx(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function If(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ux(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Dg(t){return Ux(t).map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Vg(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=bo(t):(i=fl({},t),De(!i.pathname||!i.pathname.includes("?"),If("?","pathname","search",i)),De(!i.pathname||!i.pathname.includes("#"),If("#","pathname","hash",i)),De(!i.search||!i.search.includes("#"),If("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else if(r){let h=e[e.length-1].replace(/^\//,"").split("/");if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h.pop();i.pathname=d.join("/")}a="/"+h.join("/")}else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=Mx(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Br=t=>t.join("/").replace(/\/\/+/g,"/"),Bx=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),jx=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,$x=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function zx(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const C0=["post","put","patch","delete"];new Set(C0);const qx=["get",...C0];new Set(qx);/**
 * React Router v6.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zc(){return Zc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Zc.apply(this,arguments)}const Og=x.createContext(null),Wx=x.createContext(null),Do=x.createContext(null),Wh=x.createContext(null),si=x.createContext({outlet:null,matches:[],isDataRoute:!1}),k0=x.createContext(null);function Gx(t,e){let{relative:n}=e===void 0?{}:e;Vo()||De(!1);let{basename:r,navigator:i}=x.useContext(Do),{hash:s,pathname:o,search:a}=N0(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Br([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Vo(){return x.useContext(Wh)!=null}function Xl(){return Vo()||De(!1),x.useContext(Wh).location}function x0(t){x.useContext(Do).static||x.useLayoutEffect(t)}function Jl(){let{isDataRoute:t}=x.useContext(si);return t?sN():Hx()}function Hx(){Vo()||De(!1);let t=x.useContext(Og),{basename:e,navigator:n}=x.useContext(Do),{matches:r}=x.useContext(si),{pathname:i}=Xl(),s=JSON.stringify(Dg(r)),o=x.useRef(!1);return x0(()=>{o.current=!0}),x.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=Vg(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Br([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}function N0(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=x.useContext(si),{pathname:i}=Xl(),s=JSON.stringify(Dg(r));return x.useMemo(()=>Vg(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function Kx(t,e){return Qx(t,e)}function Qx(t,e,n){Vo()||De(!1);let{navigator:r}=x.useContext(Do),{matches:i}=x.useContext(si),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Xl(),u;if(e){var c;let v=typeof e=="string"?bo(e):e;a==="/"||(c=v.pathname)!=null&&c.startsWith(a)||De(!1),u=v}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",f=Ex(t,{pathname:d}),y=eN(f&&f.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:Br([a,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:Br([a,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return e&&y?x.createElement(Wh.Provider,{value:{location:Zc({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:kr.Pop}},y):y}function Yx(){let t=iN(),e=zx(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},e),n?x.createElement("pre",{style:i},n):null,s)}const Xx=x.createElement(Yx,null);class Jx extends x.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?x.createElement(si.Provider,{value:this.props.routeContext},x.createElement(k0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Zx(t){let{routeContext:e,match:n,children:r}=t,i=x.useContext(Og);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(si.Provider,{value:e},r)}function eN(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||De(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||Xx);let d=e.concat(s.slice(0,u+1)),f=()=>{let y;return c?y=h:l.route.Component?y=x.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=a,x.createElement(Zx,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?x.createElement(Jx,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:f(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):f()},null)}var b0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(b0||{}),eh=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(eh||{});function tN(t){let e=x.useContext(Og);return e||De(!1),e}function nN(t){let e=x.useContext(Wx);return e||De(!1),e}function rN(t){let e=x.useContext(si);return e||De(!1),e}function D0(t){let e=rN(),n=e.matches[e.matches.length-1];return n.route.id||De(!1),n.route.id}function iN(){var t;let e=x.useContext(k0),n=nN(eh.UseRouteError),r=D0(eh.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function sN(){let{router:t}=tN(b0.UseNavigateStable),e=D0(eh.UseNavigateStable),n=x.useRef(!1);return x0(()=>{n.current=!0}),x.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Zc({fromRouteId:e},s)))},[t,e])}function oN(t){let{to:e,replace:n,state:r,relative:i}=t;Vo()||De(!1);let{matches:s}=x.useContext(si),{pathname:o}=Xl(),a=Jl(),l=Vg(e,Dg(s),o,i==="path"),u=JSON.stringify(l);return x.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function zs(t){De(!1)}function aN(t){let{basename:e="/",children:n=null,location:r,navigationType:i=kr.Pop,navigator:s,static:o=!1}=t;Vo()&&De(!1);let a=e.replace(/^\/*/,"/"),l=x.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=bo(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:f="default"}=r,y=x.useMemo(()=>{let v=bg(u,a);return v==null?null:{location:{pathname:v,search:c,hash:h,state:d,key:f},navigationType:i}},[a,u,c,h,d,f,i]);return y==null?null:x.createElement(Do.Provider,{value:l},x.createElement(Wh.Provider,{children:n,value:y}))}function V0(t){let{children:e,location:n}=t;return Kx(jp(e),n)}new Promise(()=>{});function jp(t,e){e===void 0&&(e=[]);let n=[];return x.Children.forEach(t,(r,i)=>{if(!x.isValidElement(r))return;let s=[...e,i];if(r.type===x.Fragment){n.push.apply(n,jp(r.props.children,s));return}r.type!==zs&&De(!1),!r.props.index||!r.props.children||De(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=jp(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $p(){return $p=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},$p.apply(this,arguments)}function lN(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function uN(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function cN(t,e){return t.button===0&&(!e||e==="_self")&&!uN(t)}const hN=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],dN="startTransition",Zv=lC[dN];function fN(t){let{basename:e,children:n,future:r,window:i}=t,s=x.useRef();s.current==null&&(s.current=vx({window:i,v5Compat:!0}));let o=s.current,[a,l]=x.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=x.useCallback(h=>{u&&Zv?Zv(()=>l(h)):l(h)},[l,u]);return x.useLayoutEffect(()=>o.listen(c),[o,c]),x.createElement(aN,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const pN=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",mN=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,gN=x.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:h}=e,d=lN(e,hN),{basename:f}=x.useContext(Do),y,v=!1;if(typeof u=="string"&&mN.test(u)&&(y=u,pN))try{let g=new URL(window.location.href),E=u.startsWith("//")?new URL(g.protocol+u):new URL(u),S=bg(E.pathname,f);E.origin===g.origin&&S!=null?u=S+E.search+E.hash:v=!0}catch{}let I=Gx(u,{relative:i}),m=_N(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:h});function p(g){r&&r(g),g.defaultPrevented||m(g)}return x.createElement("a",$p({},d,{href:y||I,onClick:v||s?r:p,ref:n,target:l}))});var ew;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(ew||(ew={}));var tw;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(tw||(tw={}));function _N(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=Jl(),u=Xl(),c=N0(t,{relative:o});return x.useCallback(h=>{if(cN(h,n)){h.preventDefault();let d=r!==void 0?r:Jc(u)===Jc(c);l(t,{replace:d,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,c,r,i,n,t,s,o,a])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},yN=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},L0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;l||(f=64,o||(d=64)),r.push(n[c],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(O0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):yN(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new vN;const d=s<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class vN extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wN=function(t){const e=O0(t);return L0.encodeByteArray(e,!0)},th=function(t){return wN(t).replace(/\./g,"")},M0=function(t){try{return L0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function nh(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!IN(n)||(t[n]=nh(t[n],e[n]));return t}function IN(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EN(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TN=()=>EN().__FIREBASE_DEFAULTS__,AN=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},SN=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&M0(t[1]);return e&&JSON.parse(e)},Lg=()=>{try{return TN()||AN()||SN()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},F0=()=>{var t;return(t=Lg())===null||t===void 0?void 0:t.config},RN=t=>{var e;return(e=Lg())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[th(JSON.stringify(n)),th(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function CN(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ie())}function Mg(){var t;const e=(t=Lg())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function kN(){return typeof self=="object"&&self.self===self}function B0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Fg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function j0(){const t=Ie();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function xN(){return!Mg()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function pl(){try{return typeof indexedDB=="object"}catch{return!1}}function NN(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bN="FirebaseError";class ht extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=bN,Object.setPrototypeOf(this,ht.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,us.prototype.create)}}class us{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?DN(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ht(i,a,r)}}function DN(t,e){return t.replace(VN,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const VN=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nw(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ON(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function zp(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(rw(s)&&rw(o)){if(!zp(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function rw(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function qs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ea(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function $0(t,e){const n=new LN(t,e);return n.subscribe.bind(n)}class LN{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");MN(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ef),i.error===void 0&&(i.error=Ef),i.complete===void 0&&(i.complete=Ef);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function MN(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ef(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(t){return t&&t._delegate?t._delegate:t}class sn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new PN;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(BN(e))try{this.getOrInitializeService({instanceIdentifier:vi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=vi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vi){return this.instances.has(e)}getOptions(e=vi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:UN(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=vi){return this.component?this.component.multipleInstances?e:vi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function UN(t){return t===vi?void 0:t}function BN(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new FN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug=[];var K;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(K||(K={}));const z0={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},$N=K.INFO,zN={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},qN=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=zN[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gh{constructor(e){this.name=e,this._logLevel=$N,this._logHandler=qN,this._userLogHandler=null,Ug.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in K))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?z0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...e),this._logHandler(this,K.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...e),this._logHandler(this,K.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,K.INFO,...e),this._logHandler(this,K.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,K.WARN,...e),this._logHandler(this,K.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...e),this._logHandler(this,K.ERROR,...e)}}function WN(t){Ug.forEach(e=>{e.setLogLevel(t)})}function GN(t,e){for(const n of Ug){let r=null;e&&e.level&&(r=z0[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r??i.logLevel)&&t({level:K[s].toLowerCase(),message:a,args:o,type:i.name})}}}const HN=(t,e)=>e.some(n=>t instanceof n);let iw,sw;function KN(){return iw||(iw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function QN(){return sw||(sw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const q0=new WeakMap,qp=new WeakMap,W0=new WeakMap,Tf=new WeakMap,Bg=new WeakMap;function YN(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(jr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&q0.set(n,t)}).catch(()=>{}),Bg.set(e,t),e}function XN(t){if(qp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});qp.set(t,e)}let Wp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return qp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||W0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return jr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function JN(t){Wp=t(Wp)}function ZN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Af(this),e,...n);return W0.set(r,e.sort?e.sort():[e]),jr(r)}:QN().includes(t)?function(...e){return t.apply(Af(this),e),jr(q0.get(this))}:function(...e){return jr(t.apply(Af(this),e))}}function eb(t){return typeof t=="function"?ZN(t):(t instanceof IDBTransaction&&XN(t),HN(t,KN())?new Proxy(t,Wp):t)}function jr(t){if(t instanceof IDBRequest)return YN(t);if(Tf.has(t))return Tf.get(t);const e=eb(t);return e!==t&&(Tf.set(t,e),Bg.set(e,t)),e}const Af=t=>Bg.get(t);function tb(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=jr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(jr(o.result),l.oldVersion,l.newVersion,jr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const nb=["get","getKey","getAll","getAllKeys","count"],rb=["put","add","delete","clear"],Sf=new Map;function ow(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Sf.get(e))return Sf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=rb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||nb.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Sf.set(e,s),s}JN(t=>({...t,get:(e,n,r)=>ow(e,n)||t.get(e,n,r),has:(e,n)=>!!ow(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(sb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function sb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gp="@firebase/app",aw="0.9.24";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi=new Gh("@firebase/app"),ob="@firebase/app-compat",ab="@firebase/analytics-compat",lb="@firebase/analytics",ub="@firebase/app-check-compat",cb="@firebase/app-check",hb="@firebase/auth",db="@firebase/auth-compat",fb="@firebase/database",pb="@firebase/database-compat",mb="@firebase/functions",gb="@firebase/functions-compat",_b="@firebase/installations",yb="@firebase/installations-compat",vb="@firebase/messaging",wb="@firebase/messaging-compat",Ib="@firebase/performance",Eb="@firebase/performance-compat",Tb="@firebase/remote-config",Ab="@firebase/remote-config-compat",Sb="@firebase/storage",Rb="@firebase/storage-compat",Pb="@firebase/firestore",Cb="@firebase/firestore-compat",kb="firebase",xb="10.7.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr="[DEFAULT]",Nb={[Gp]:"fire-core",[ob]:"fire-core-compat",[lb]:"fire-analytics",[ab]:"fire-analytics-compat",[cb]:"fire-app-check",[ub]:"fire-app-check-compat",[hb]:"fire-auth",[db]:"fire-auth-compat",[fb]:"fire-rtdb",[pb]:"fire-rtdb-compat",[mb]:"fire-fn",[gb]:"fire-fn-compat",[_b]:"fire-iid",[yb]:"fire-iid-compat",[vb]:"fire-fcm",[wb]:"fire-fcm-compat",[Ib]:"fire-perf",[Eb]:"fire-perf-compat",[Tb]:"fire-rc",[Ab]:"fire-rc-compat",[Sb]:"fire-gcs",[Rb]:"fire-gcs-compat",[Pb]:"fire-fst",[Cb]:"fire-fst-compat","fire-js":"fire-js",[kb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr=new Map,ml=new Map;function rh(t,e){try{t.container.addComponent(e)}catch(n){Hi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function G0(t,e){t.container.addOrOverwriteComponent(e)}function nr(t){const e=t.name;if(ml.has(e))return Hi.debug(`There were multiple attempts to register component ${e}.`),!1;ml.set(e,t);for(const n of Gr.values())rh(n,t);return!0}function H0(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function bb(t,e,n=Wr){H0(t,e).clearInstance(n)}function Db(){ml.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Qn=new us("app","Firebase",Vb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ob=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new sn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qn.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar=xb;function jg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Wr,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Qn.create("bad-app-name",{appName:String(i)});if(n||(n=F0()),!n)throw Qn.create("no-options");const s=Gr.get(i);if(s){if(zp(n,s.options)&&zp(r,s.config))return s;throw Qn.create("duplicate-app",{appName:i})}const o=new jN(i);for(const l of ml.values())o.addComponent(l);const a=new Ob(n,r,o);return Gr.set(i,a),a}function Lb(t=Wr){const e=Gr.get(t);if(!e&&t===Wr&&F0())return jg();if(!e)throw Qn.create("no-app",{appName:t});return e}function Mb(){return Array.from(Gr.values())}async function K0(t){const e=t.name;Gr.has(e)&&(Gr.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function tn(t,e,n){var r;let i=(r=Nb[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Hi.warn(a.join(" "));return}nr(new sn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function Q0(t,e){if(t!==null&&typeof t!="function")throw Qn.create("invalid-log-argument");GN(t,e)}function Y0(t){WN(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fb="firebase-heartbeat-database",Ub=1,gl="firebase-heartbeat-store";let Rf=null;function X0(){return Rf||(Rf=tb(Fb,Ub,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(gl)}}}).catch(t=>{throw Qn.create("idb-open",{originalErrorMessage:t.message})})),Rf}async function Bb(t){try{return await(await X0()).transaction(gl).objectStore(gl).get(J0(t))}catch(e){if(e instanceof ht)Hi.warn(e.message);else{const n=Qn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Hi.warn(n.message)}}}async function lw(t,e){try{const r=(await X0()).transaction(gl,"readwrite");await r.objectStore(gl).put(e,J0(t)),await r.done}catch(n){if(n instanceof ht)Hi.warn(n.message);else{const r=Qn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Hi.warn(r.message)}}}function J0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jb=1024,$b=30*24*60*60*1e3;class zb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Wb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=uw();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=$b}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=uw(),{heartbeatsToSend:r,unsentEntries:i}=qb(this._heartbeatsCache.heartbeats),s=th(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function uw(){return new Date().toISOString().substring(0,10)}function qb(t,e=jb){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),cw(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),cw(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Wb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pl()?NN().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Bb(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return lw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return lw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function cw(t){return th(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gb(t){nr(new sn("platform-logger",e=>new ib(e),"PRIVATE")),nr(new sn("heartbeat",e=>new zb(e),"PRIVATE")),tn(Gp,aw,t),tn(Gp,aw,"esm2017"),tn("fire-js","")}Gb("");const Hb=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:ht,SDK_VERSION:ar,_DEFAULT_ENTRY_NAME:Wr,_addComponent:rh,_addOrOverwriteComponent:G0,_apps:Gr,_clearComponents:Db,_components:ml,_getProvider:H0,_registerComponent:nr,_removeServiceInstance:bb,deleteApp:K0,getApp:Lb,getApps:Mb,initializeApp:jg,onLog:Q0,registerVersion:tn,setLogLevel:Y0},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(e,n){this._delegate=e,this.firebase=n,rh(e,new sn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),K0(this._delegate)))}_getService(e,n=Wr){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Wr){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){rh(this._delegate,e)}_addOrOverwriteComponent(e){G0(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qb={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},hw=new us("app-compat","Firebase",Qb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yb(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:tn,setLogLevel:Y0,onLog:Q0,apps:null,SDK_VERSION:ar,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:Hb}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||Wr,!nw(e,u))throw hw.create("no-app",{appName:u});return e[u]}i.App=t;function s(u,c={}){const h=jg(u,c);if(nw(e,h.name))return e[h.name];const d=new t(h,n);return e[h.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const c=u.name,h=c.replace("-compat","");if(nr(u)&&u.type==="PUBLIC"){const d=(f=i())=>{if(typeof f[h]!="function")throw hw.create("invalid-app-argument",{appName:c});return f[h]()};u.serviceProps!==void 0&&nh(d,u.serviceProps),n[h]=d,t.prototype[h]=function(...f){return this._getService.bind(this,c).apply(this,u.multipleInstances?f:[])}}return u.type==="PUBLIC"?n[h]:null}function l(u,c){return c==="serverAuth"?null:c}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z0(){const t=Yb(Kb);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:Z0,extendNamespace:e,createSubscribe:$0,ErrorFactory:us,deepExtend:nh});function e(n){nh(t,n)}return t}const Xb=Z0();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw=new Gh("@firebase/app-compat"),Jb="@firebase/app-compat",Zb="0.2.24";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eD(t){tn(Jb,Zb,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(kN()&&self.firebase!==void 0){dw.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&dw.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const lr=Xb;eD();var tD="firebase",nD="10.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */lr.registerVersion(tD,nD,"app-compat");function $g(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const aa={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},ys={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rD(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function eA(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const iD=rD,sD=eA,tA=new us("auth","Firebase",eA());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih=new Gh("@firebase/auth");function oD(t,...e){ih.logLevel<=K.WARN&&ih.warn(`Auth (${ar}): ${t}`,...e)}function gc(t,...e){ih.logLevel<=K.ERROR&&ih.error(`Auth (${ar}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(t,...e){throw zg(t,...e)}function nt(t,...e){return zg(t,...e)}function nA(t,e,n){const r=Object.assign(Object.assign({},sD()),{[e]:n});return new us("auth","Firebase",r).create(e,{appName:t.name})}function Lo(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&st(t,"argument-error"),nA(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function zg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return tA.create(t,...e)}function k(t,e,...n){if(!t)throw zg(e,...n)}function Cn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw gc(e),new Error(e)}function gn(t,e){t||Cn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function qg(){return fw()==="http:"||fw()==="https:"}function fw(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qg()||B0()||"connection"in navigator)?navigator.onLine:!0}function lD(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e,n){this.shortDelay=e,this.longDelay=n,gn(n>e,"Short delay should be less than long delay!"),this.isMobile=CN()||Fg()}get(){return aD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wg(t,e){gn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Cn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Cn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Cn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cD=new Zl(3e4,6e4);function Ce(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ke(t,e,n,r,i={}){return iA(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Oo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),rA.fetch()(sA(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function iA(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},uD),e);try{const i=new dD(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ta(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ta(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ta(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ta(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw nA(t,c,u);st(t,c)}}catch(i){if(i instanceof ht)throw i;st(t,"network-request-failed",{message:String(i)})}}async function ur(t,e,n,r,i={}){const s=await ke(t,e,n,r,i);return"mfaPendingCredential"in s&&st(t,"multi-factor-auth-required",{_serverResponse:s}),s}function sA(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Wg(t.config,i):`${t.config.apiScheme}://${i}`}function hD(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class dD{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(nt(this.auth,"network-request-failed")),cD.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ta(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=nt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pw(t){return t!==void 0&&t.getResponse!==void 0}function mw(t){return t!==void 0&&t.enterprise!==void 0}class fD{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return hD(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pD(t){return(await ke(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function mD(t,e){return ke(t,"GET","/v2/recaptchaConfig",Ce(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gD(t,e){return ke(t,"POST","/v1/accounts:delete",e)}async function _D(t,e){return ke(t,"POST","/v1/accounts:update",e)}async function yD(t,e){return ke(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vD(t,e=!1){const n=U(t),r=await n.getIdToken(e),i=Hh(r);k(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ua(Pf(i.auth_time)),issuedAtTime:Ua(Pf(i.iat)),expirationTime:Ua(Pf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Pf(t){return Number(t)*1e3}function Hh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return gc("JWT malformed, contained fewer than 3 sections"),null;try{const i=M0(n);return i?JSON.parse(i):(gc("Failed to decode base64 JWT payload"),null)}catch(i){return gc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function wD(t){const e=Hh(t);return k(e,"internal-error"),k(typeof e.exp<"u","internal-error"),k(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ht&&ID(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ID({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ED{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ua(this.lastLoginAt),this.creationTime=Ua(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await rr(t,yD(n,{idToken:r}));k(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?SD(s.providerUserInfo):[],a=AD(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new oA(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function TD(t){const e=U(t);await yl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function AD(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function SD(t){return t.map(e=>{var{providerId:n}=e,r=$g(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RD(t,e){const n=await iA(t,{},async()=>{const r=Oo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=sA(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",rA.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function PD(t,e){return ke(t,"POST","/v2/accounts:revokeToken",Ce(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){k(e.idToken,"internal-error"),k(typeof e.idToken<"u","internal-error"),k(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):wD(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return k(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await RD(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new vl;return r&&(k(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(k(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(k(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vl,this.toJSON())}_performRefresh(){return Cn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(t,e){k(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Li{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=$g(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ED(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new oA(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await rr(this,this.stsTokenManager.getToken(this.auth,e));return k(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return vD(this,e)}reload(){return TD(this)}_assign(e){this!==e&&(k(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Li(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){k(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await yl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await rr(this,gD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:E,isAnonymous:S,providerData:C,stsTokenManager:N}=n;k(g&&N,e,"internal-error");const O=vl.fromJSON(this.name,N);k(typeof g=="string",e,"internal-error"),gr(h,e.name),gr(d,e.name),k(typeof E=="boolean",e,"internal-error"),k(typeof S=="boolean",e,"internal-error"),gr(f,e.name),gr(y,e.name),gr(v,e.name),gr(I,e.name),gr(m,e.name),gr(p,e.name);const te=new Li({uid:g,auth:e,email:d,emailVerified:E,displayName:h,isAnonymous:S,photoURL:y,phoneNumber:f,tenantId:v,stsTokenManager:O,createdAt:m,lastLoginAt:p});return C&&Array.isArray(C)&&(te.providerData=C.map(G=>Object.assign({},G))),I&&(te._redirectEventId=I),te}static async _fromIdTokenResponse(e,n,r=!1){const i=new vl;i.updateFromServerResponse(n);const s=new Li({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await yl(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw=new Map;function jt(t){gn(t instanceof Function,"Expected a class definition");let e=gw.get(t);return e?(gn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,gw.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}aA.type="NONE";const po=aA;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(t,e,n){return`firebase:${t}:${e}:${n}`}class Js{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Mi(this.userKey,i.apiKey,s),this.fullPersistenceKey=Mi("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Li._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Js(jt(po),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||jt(po);const o=Mi(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Li._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Js(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Js(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _w(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cA(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(lA(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hA(e))return"Blackberry";if(dA(e))return"Webos";if(Gg(e))return"Safari";if((e.includes("chrome/")||uA(e))&&!e.includes("edge/"))return"Chrome";if(eu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function lA(t=Ie()){return/firefox\//i.test(t)}function Gg(t=Ie()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function uA(t=Ie()){return/crios\//i.test(t)}function cA(t=Ie()){return/iemobile/i.test(t)}function eu(t=Ie()){return/android/i.test(t)}function hA(t=Ie()){return/blackberry/i.test(t)}function dA(t=Ie()){return/webos/i.test(t)}function Mo(t=Ie()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function CD(t=Ie()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function kD(t=Ie()){var e;return Mo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function xD(){return j0()&&document.documentMode===10}function fA(t=Ie()){return Mo(t)||eu(t)||dA(t)||hA(t)||/windows phone/i.test(t)||cA(t)}function ND(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pA(t,e=[]){let n;switch(t){case"Browser":n=_w(Ie());break;case"Worker":n=`${_w(Ie())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ar}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DD(t,e={}){return ke(t,"GET","/v2/passwordPolicy",Ce(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VD=6;class OD{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:VD,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LD{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yw(this),this.idTokenSubscription=new yw(this),this.beforeStateQueue=new bD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tA,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=jt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Js.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return k(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await yl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?U(e):null;return n&&k(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&k(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(jt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await DD(this),n=new OD(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new us("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await PD(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&jt(e)||this._popupRedirectResolver;k(n,this,"argument-error"),this.redirectPersistenceManager=await Js.create(this,[jt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(k(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return k(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pA(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&oD(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Se(t){return U(t)}class yw{constructor(e){this.auth=e,this.observer=null,this.addObserver=$0(n=>this.observer=n)}get next(){return k(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Hg(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=nt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",MD().appendChild(r)})}function mA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const FD="https://www.google.com/recaptcha/enterprise.js?render=",UD="recaptcha-enterprise",BD="NO_RECAPTCHA";class jD{constructor(e){this.type=UD,this.auth=Se(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{mD(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new fD(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;mw(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(BD)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&mw(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Hg(FD+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function vw(t,e,n,r=!1){const i=new jD(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function wl(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await vw(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await vw(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}function $D(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(jt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function zD(t,e,n){const r=Se(t);k(r._canInitEmulator,r,"emulator-config-failed"),k(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=gA(e),{host:o,port:a}=qD(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||WD()}function gA(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function qD(t){const e=gA(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ww(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:ww(o)}}}function ww(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function WD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Cn("not implemented")}_getIdTokenResponse(e){return Cn("not implemented")}_linkToIdToken(e,n){return Cn("not implemented")}_getReauthenticationResolver(e){return Cn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _A(t,e){return ke(t,"POST","/v1/accounts:resetPassword",Ce(t,e))}async function GD(t,e){return ke(t,"POST","/v1/accounts:update",e)}async function HD(t,e){return ke(t,"POST","/v1/accounts:signUp",e)}async function KD(t,e){return ke(t,"POST","/v1/accounts:update",Ce(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QD(t,e){return ur(t,"POST","/v1/accounts:signInWithPassword",Ce(t,e))}async function Kh(t,e){return ke(t,"POST","/v1/accounts:sendOobCode",Ce(t,e))}async function YD(t,e){return Kh(t,e)}async function XD(t,e){return Kh(t,e)}async function JD(t,e){return Kh(t,e)}async function ZD(t,e){return Kh(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eV(t,e){return ur(t,"POST","/v1/accounts:signInWithEmailLink",Ce(t,e))}async function tV(t,e){return ur(t,"POST","/v1/accounts:signInWithEmailLink",Ce(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il extends Fo{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Il(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Il(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wl(e,n,"signInWithPassword",QD);case"emailLink":return eV(e,{email:this._email,oobCode:this._password});default:st(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wl(e,r,"signUpPassword",HD);case"emailLink":return tV(e,{idToken:n,email:this._email,oobCode:this._password});default:st(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yn(t,e){return ur(t,"POST","/v1/accounts:signInWithIdp",Ce(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nV="http://localhost";class Mn extends Fo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Mn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):st("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=$g(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Mn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Yn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Yn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Yn(e,n)}buildRequest(){const e={requestUri:nV,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Oo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rV(t,e){return ke(t,"POST","/v1/accounts:sendVerificationCode",Ce(t,e))}async function iV(t,e){return ur(t,"POST","/v1/accounts:signInWithPhoneNumber",Ce(t,e))}async function sV(t,e){const n=await ur(t,"POST","/v1/accounts:signInWithPhoneNumber",Ce(t,e));if(n.temporaryProof)throw Ta(t,"account-exists-with-different-credential",n);return n}const oV={USER_NOT_FOUND:"user-not-found"};async function aV(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return ur(t,"POST","/v1/accounts:signInWithPhoneNumber",Ce(t,n),oV)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi extends Fo{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Fi({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Fi({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return iV(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return sV(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return aV(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Fi({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lV(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function uV(t){const e=qs(Ea(t)).link,n=e?qs(Ea(e)).deep_link_id:null,r=qs(Ea(t)).deep_link_id;return(r?qs(Ea(r)).link:null)||r||n||e||t}class Qh{constructor(e){var n,r,i,s,o,a;const l=qs(Ea(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=lV((i=l.mode)!==null&&i!==void 0?i:null);k(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=uV(e);try{return new Qh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(){this.providerId=oi.PROVIDER_ID}static credential(e,n){return Il._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Qh.parseLink(n);return k(r,"argument-error"),Il._fromEmailAndCode(e,r.code,r.tenantId)}}oi.PROVIDER_ID="password";oi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";oi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo extends cr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Zs extends Uo{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return k("providerId"in n&&"signInMethod"in n,"argument-error"),Mn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return k(e.idToken||e.accessToken,"argument-error"),Mn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Zs.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Zs.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new Zs(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends Uo{constructor(){super("facebook.com")}static credential(e){return Mn._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return En.credential(e.oauthAccessToken)}catch{return null}}}En.FACEBOOK_SIGN_IN_METHOD="facebook.com";En.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends Uo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Mn._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Tn.credential(n,r)}catch{return null}}}Tn.GOOGLE_SIGN_IN_METHOD="google.com";Tn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends Uo{constructor(){super("github.com")}static credential(e){return Mn._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return An.credential(e.oauthAccessToken)}catch{return null}}}An.GITHUB_SIGN_IN_METHOD="github.com";An.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cV="http://localhost";class mo extends Fo{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Yn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Yn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Yn(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new mo(r,s)}static _create(e,n){return new mo(e,n)}buildRequest(){return{requestUri:cV,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hV="saml.";class sh extends cr{constructor(e){k(e.startsWith(hV),"argument-error"),super(e)}static credentialFromResult(e){return sh.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return sh.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=mo.fromJSON(e);return k(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return mo._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends Uo{constructor(){super("twitter.com")}static credential(e,n){return Mn._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Sn.credential(n,r)}catch{return null}}}Sn.TWITTER_SIGN_IN_METHOD="twitter.com";Sn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yA(t,e){return ur(t,"POST","/v1/accounts:signUp",Ce(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Li._fromIdTokenResponse(e,r,i),o=Iw(r);return new on({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Iw(r);return new on({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Iw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dV(t){var e;const n=Se(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new on({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await yA(n,{returnSecureToken:!0}),i=await on._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh extends ht{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,oh.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new oh(e,n,r,i)}}function vA(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?oh._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wA(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fV(t,e){const n=U(t);await Yh(!0,n,e);const{providerUserInfo:r}=await _D(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=wA(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Kg(t,e,n=!1){const r=await rr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return on._forOperation(t,"link",r)}async function Yh(t,e,n){await yl(e);const r=wA(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";k(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IA(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await rr(t,vA(r,i,e,t),n);k(s.idToken,r,"internal-error");const o=Hh(s.idToken);k(o,r,"internal-error");const{sub:a}=o;return k(t.uid===a,r,"user-mismatch"),on._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&st(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EA(t,e,n=!1){const r="signIn",i=await vA(t,r,e),s=await on._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Xh(t,e){return EA(Se(t),e)}async function TA(t,e){const n=U(t);return await Yh(!1,n,e.providerId),Kg(n,e)}async function AA(t,e){return IA(U(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pV(t,e){return ur(t,"POST","/v1/accounts:signInWithCustomToken",Ce(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mV(t,e){const n=Se(t),r=await pV(n,{token:e,returnSecureToken:!0}),i=await on._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Qg._fromServerResponse(e,n):"totpInfo"in n?Yg._fromServerResponse(e,n):st(e,"internal-error")}}class Qg extends tu{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Qg(n)}}class Yg extends tu{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new Yg(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jh(t,e,n){var r;k(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),k(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(k(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(k(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xg(t){const e=Se(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function gV(t,e,n){const r=Se(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&Jh(r,i,n),await wl(r,i,"getOobCode",XD)}async function _V(t,e,n){await _A(U(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Xg(t),r})}async function yV(t,e){await KD(U(t),{oobCode:e})}async function SA(t,e){const n=U(t),r=await _A(n,{oobCode:e}),i=r.requestType;switch(k(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":k(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":k(r.mfaInfo,n,"internal-error");default:k(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=tu._fromServerResponse(Se(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function vV(t,e){const{data:n}=await SA(U(t),e);return n.email}async function wV(t,e,n){const r=Se(t),o=await wl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",yA).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Xg(t),l}),a=await on._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function RA(t,e,n){return Xh(U(t),oi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Xg(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IV(t,e,n){const r=Se(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){k(a.handleCodeInApp,r,"argument-error"),a&&Jh(r,o,a)}s(i,n),await wl(r,i,"getOobCode",JD)}function EV(t,e){const n=Qh.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function TV(t,e,n){const r=U(t),i=oi.credentialWithLink(e,n||_l());return k(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Xh(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AV(t,e){return ke(t,"POST","/v1/accounts:createAuthUri",Ce(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SV(t,e){const n=qg()?_l():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await AV(U(t),r);return i||[]}async function RV(t,e){const n=U(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Jh(n.auth,i,e);const{email:s}=await YD(n.auth,i);s!==t.email&&await t.reload()}async function PV(t,e,n){const r=U(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&Jh(r.auth,s,n);const{email:o}=await ZD(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CV(t,e){return ke(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kV(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=U(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await rr(r,CV(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function xV(t,e){return PA(U(t),e,null)}function NV(t,e){return PA(U(t),null,e)}async function PA(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await rr(t,GD(r,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bV(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=Hh(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new eo(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new DV(s,i);case"github.com":return new VV(s,i);case"google.com":return new OV(s,i);case"twitter.com":return new LV(s,i,t.screenName||null);case"custom":case"anonymous":return new eo(s,null);default:return new eo(s,r,i)}}class eo{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class CA extends eo{constructor(e,n,r,i){super(e,n,r),this.username=i}}class DV extends eo{constructor(e,n){super(e,"facebook.com",n)}}class VV extends CA{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class OV extends eo{constructor(e,n){super(e,"google.com",n)}}class LV extends CA{constructor(e,n,r){super(e,"twitter.com",n,r)}}function MV(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:bV(n)}function FV(t){return U(t).signOut()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,n,r){this.type=e,this.credential=n,this.user=r}static _fromIdtoken(e,n){return new ki("enroll",e,n)}static _fromMfaPendingCredential(e){return new ki("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return ki._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return ki._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=Se(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>tu._fromServerResponse(r,a));k(i.mfaPendingCredential,r,"internal-error");const o=ki._fromMfaPendingCredential(i.mfaPendingCredential);return new Jg(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const c=await on._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(c.user),c;case"reauthenticate":return k(n.user,r,"internal-error"),on._forOperation(n.user,n.operationType,u);default:st(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function UV(t,e){var n;const r=U(t),i=e;return k(e.customData.operationType,r,"argument-error"),k((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),Jg._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BV(t,e){return ke(t,"POST","/v2/accounts/mfaEnrollment:start",Ce(t,e))}function jV(t,e){return ke(t,"POST","/v2/accounts/mfaEnrollment:finalize",Ce(t,e))}function $V(t,e){return ke(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Ce(t,e))}class Zg{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>tu._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Zg(e)}async getSession(){return ki._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),s=await rr(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await rr(this.user,$V(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Cf=new WeakMap;function zV(t){const e=U(t);return Cf.has(e)||Cf.set(e,Zg._fromUser(e)),Cf.get(e)}const ah="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ah,"1"),this.storage.removeItem(ah),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qV(){const t=Ie();return Gg(t)||Mo(t)}const WV=1e3,GV=10;class xA extends kA{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=qV()&&ND(),this.fallbackToPolling=fA(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);xD()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,GV):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},WV)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}xA.type="LOCAL";const e_=xA;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA extends kA{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}NA.type="SESSION";const Ki=NA;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HV(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Zh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await HV(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KV{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=nu("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(){return window}function QV(t){Le().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t_(){return typeof Le().WorkerGlobalScope<"u"&&typeof Le().importScripts=="function"}async function YV(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function XV(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function JV(){return t_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bA="firebaseLocalStorageDb",ZV=1,lh="firebaseLocalStorage",DA="fbase_key";class ru{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ed(t,e){return t.transaction([lh],e?"readwrite":"readonly").objectStore(lh)}function eO(){const t=indexedDB.deleteDatabase(bA);return new ru(t).toPromise()}function Hp(){const t=indexedDB.open(bA,ZV);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(lh,{keyPath:DA})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(lh)?e(r):(r.close(),await eO(),e(await Hp()))})})}async function Ew(t,e,n){const r=ed(t,!0).put({[DA]:e,value:n});return new ru(r).toPromise()}async function tO(t,e){const n=ed(t,!1).get(e),r=await new ru(n).toPromise();return r===void 0?null:r.value}function Tw(t,e){const n=ed(t,!0).delete(e);return new ru(n).toPromise()}const nO=800,rO=3;class VA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>rO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return t_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zh._getInstance(JV()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await YV(),!this.activeServiceWorker)return;this.sender=new KV(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||XV()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hp();return await Ew(e,ah,"1"),await Tw(e,ah),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ew(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>tO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Tw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ed(i,!1).getAll();return new ru(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}VA.type="LOCAL";const El=VA;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iO(t,e){return ke(t,"POST","/v2/accounts/mfaSignIn:start",Ce(t,e))}function sO(t,e){return ke(t,"POST","/v2/accounts/mfaSignIn:finalize",Ce(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oO=500,aO=6e4,qu=1e12;class lO{constructor(e){this.auth=e,this.counter=qu,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new uO(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||qu;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||qu;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||qu;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class uO{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;k(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=cO(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},aO)},oO))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function cO(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kf=mA("rcb"),hO=new Zl(3e4,6e4),dO="https://www.google.com/recaptcha/api.js?";class fO{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Le().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return k(pO(n),e,"argument-error"),this.shouldResolveImmediately(n)&&pw(Le().grecaptcha)?Promise.resolve(Le().grecaptcha):new Promise((r,i)=>{const s=Le().setTimeout(()=>{i(nt(e,"network-request-failed"))},hO.get());Le()[kf]=()=>{Le().clearTimeout(s),delete Le()[kf];const a=Le().grecaptcha;if(!a||!pw(a)){i(nt(e,"internal-error"));return}const l=a.render;a.render=(u,c)=>{const h=l(u,c);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${dO}?${Oo({onload:kf,render:"explicit",hl:n})}`;Hg(o).catch(()=>{clearTimeout(s),i(nt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=Le().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function pO(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class mO{async load(e){return new lO(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OA="recaptcha",gO={theme:"light",type:"image"};let _O=class{constructor(e,n,r=Object.assign({},gO)){this.parameters=r,this.type=OA,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Se(e),this.isInvisible=this.parameters.size==="invisible",k(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;k(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new mO:new fO,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){k(!this.parameters.sitekey,this.auth,"argument-error"),k(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),k(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Le()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){k(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){k(qg()&&!t_(),this.auth,"internal-error"),await yO(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await pD(this.auth);k(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return k(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function yO(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Fi._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function vO(t,e,n){const r=Se(t),i=await td(r,e,U(n));return new n_(i,s=>Xh(r,s))}async function wO(t,e,n){const r=U(t);await Yh(!1,r,"phone");const i=await td(r.auth,e,U(n));return new n_(i,s=>TA(r,s))}async function IO(t,e,n){const r=U(t),i=await td(r.auth,e,U(n));return new n_(i,s=>AA(r,s))}async function td(t,e,n){var r;const i=await n.verify();try{k(typeof i=="string",t,"argument-error"),k(n.type===OA,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return k(o.type==="enroll",t,"internal-error"),(await BV(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{k(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return k(a,t,"missing-multi-factor-info"),(await iO(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await rV(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function EO(t,e){await Kg(U(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qi=class _c{constructor(e){this.providerId=_c.PROVIDER_ID,this.auth=Se(e)}verifyPhoneNumber(e,n){return td(this.auth,e,U(n))}static credential(e,n){return Fi._fromVerification(e,n)}static credentialFromResult(e){const n=e;return _c.credentialFromTaggedObject(n)}static credentialFromError(e){return _c.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Fi._fromTokenResponse(n,r):null}};Qi.PROVIDER_ID="phone";Qi.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(t,e){return e?jt(e):(k(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_ extends Fo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Yn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Yn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function TO(t){return EA(t.auth,new r_(t),t.bypassAuthState)}function AO(t){const{auth:e,user:n}=t;return k(n,e,"internal-error"),IA(n,new r_(t),t.bypassAuthState)}async function SO(t){const{auth:e,user:n}=t;return k(n,e,"internal-error"),Kg(n,new r_(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return TO;case"linkViaPopup":case"linkViaRedirect":return SO;case"reauthViaPopup":case"reauthViaRedirect":return AO;default:st(this.auth,"internal-error")}}resolve(e){gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RO=new Zl(2e3,1e4);async function MA(t,e,n){const r=Se(t);Lo(t,e,cr);const i=cs(r,n);return new Wn(r,"signInViaPopup",e,i).executeNotNull()}async function PO(t,e,n){const r=U(t);Lo(r.auth,e,cr);const i=cs(r.auth,n);return new Wn(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function CO(t,e,n){const r=U(t);Lo(r.auth,e,cr);const i=cs(r.auth,n);return new Wn(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Wn extends LA{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Wn.currentPopupAction&&Wn.currentPopupAction.cancel(),Wn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return k(e,this.auth,"internal-error"),e}async onExecution(){gn(this.filter.length===1,"Popup operations only handle one event");const e=nu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Wn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,RO.get())};e()}}Wn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kO="pendingRedirect",Ba=new Map;class xO extends LA{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ba.get(this.auth._key());if(!e){try{const r=await NO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ba.set(this.auth._key(),e)}return this.bypassAuthState||Ba.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function NO(t,e){const n=UA(e),r=FA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function i_(t,e){return FA(t)._set(UA(e),"true")}function bO(){Ba.clear()}function s_(t,e){Ba.set(t._key(),e)}function FA(t){return jt(t._redirectPersistence)}function UA(t){return Mi(kO,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DO(t,e,n){return VO(t,e,n)}async function VO(t,e,n){const r=Se(t);Lo(t,e,cr),await r._initializationPromise;const i=cs(r,n);return await i_(i,r),i._openRedirect(r,e,"signInViaRedirect")}function OO(t,e,n){return LO(t,e,n)}async function LO(t,e,n){const r=U(t);Lo(r.auth,e,cr),await r.auth._initializationPromise;const i=cs(r.auth,n);await i_(i,r.auth);const s=await BA(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function MO(t,e,n){return FO(t,e,n)}async function FO(t,e,n){const r=U(t);Lo(r.auth,e,cr),await r.auth._initializationPromise;const i=cs(r.auth,n);await Yh(!1,r,e.providerId),await i_(i,r.auth);const s=await BA(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function UO(t,e){return await Se(t)._initializationPromise,nd(t,e,!1)}async function nd(t,e,n=!1){const r=Se(t),i=cs(r,e),o=await new xO(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function BA(t){const e=nu(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BO=10*60*1e3;class jA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!$A(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(nt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=BO&&this.cachedEventUids.clear(),this.cachedEventUids.has(Aw(e))}saveEventToCache(e){this.cachedEventUids.add(Aw(e)),this.lastProcessedEventTime=Date.now()}}function Aw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function $A({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $A(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zA(t,e={}){return ke(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $O=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zO=/^https?/;async function qO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await zA(t);for(const n of e)try{if(WO(n))return}catch{}st(t,"unauthorized-domain")}function WO(t){const e=_l(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!zO.test(n))return!1;if($O.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GO=new Zl(3e4,6e4);function Sw(){const t=Le().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function HO(t){return new Promise((e,n)=>{var r,i,s;function o(){Sw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Sw(),n(nt(t,"network-request-failed"))},timeout:GO.get()})}if(!((i=(r=Le().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Le().gapi)===null||s===void 0)&&s.load)o();else{const a=mA("iframefcb");return Le()[a]=()=>{gapi.load?o():n(nt(t,"network-request-failed"))},Hg(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw yc=null,e})}let yc=null;function KO(t){return yc=yc||HO(t),yc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QO=new Zl(5e3,15e3),YO="__/auth/iframe",XO="emulator/auth/iframe",JO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ZO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function eL(t){const e=t.config;k(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Wg(e,XO):`https://${t.config.authDomain}/${YO}`,r={apiKey:e.apiKey,appName:t.name,v:ar},i=ZO.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Oo(r).slice(1)}`}async function tL(t){const e=await KO(t),n=Le().gapi;return k(n,t,"internal-error"),e.open({where:document.body,url:eL(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:JO,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=nt(t,"network-request-failed"),a=Le().setTimeout(()=>{s(o)},QO.get());function l(){Le().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nL={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rL=500,iL=600,sL="_blank",oL="http://localhost";class Rw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function aL(t,e,n,r=rL,i=iL){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},nL),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ie().toLowerCase();n&&(a=uA(u)?sL:n),lA(u)&&(e=e||oL,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[f,y])=>`${d}${f}=${y},`,"");if(kD(u)&&a!=="_self")return lL(e||"",a),new Rw(null);const h=window.open(e||"",a,c);k(h,t,"popup-blocked");try{h.focus()}catch{}return new Rw(h)}function lL(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uL="__/auth/handler",cL="emulator/auth/handler",hL=encodeURIComponent("fac");async function Kp(t,e,n,r,i,s){k(t.config.authDomain,t,"auth-domain-config-required"),k(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ar,eventId:i};if(e instanceof cr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ON(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof Uo){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${hL}=${encodeURIComponent(l)}`:"";return`${dL(t)}?${Oo(a).slice(1)}${u}`}function dL({config:t}){return t.emulator?Wg(t,cL):`https://${t.authDomain}/${uL}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf="webStorageSupport";class fL{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ki,this._completeRedirectFn=nd,this._overrideRedirectResult=s_}async _openPopup(e,n,r,i){var s;gn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Kp(e,n,r,_l(),i);return aL(e,o,nu())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Kp(e,n,r,_l(),i);return QV(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(gn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await tL(e),r=new jA(e);return n.register("authEvent",i=>(k(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(xf,{type:xf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[xf];o!==void 0&&n(!!o),st(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=qO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return fA()||Gg()||Mo()}}const pL=fL;class mL{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return Cn("unexpected MultiFactorSessionType")}}}class o_ extends mL{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new o_(e)}_finalizeEnroll(e,n,r){return jV(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return sO(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class qA{constructor(){}static assertion(e){return o_._fromCredential(e)}}qA.FACTOR_ID="phone";var Pw="@firebase/auth",Cw="1.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){k(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _L(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function yL(t){nr(new sn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;k(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pA(t)},u=new LD(r,i,s,l);return $D(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),nr(new sn("auth-internal",e=>{const n=Se(e.getProvider("auth").getImmediate());return(r=>new gL(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tn(Pw,Cw,_L(t)),tn(Pw,Cw,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vL=5*60;RN("authIdTokenMaxAge");yL("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wL=2e3;async function IL(t,e,n){var r;const{BuildInfo:i}=Yi();gn(e.sessionId,"AuthEvent did not contain a session ID");const s=await RL(e.sessionId),o={};return Mo()?o.ibi=i.packageName:eu()?o.apn=i.packageName:st(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Kp(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function EL(t){const{BuildInfo:e}=Yi(),n={};Mo()?n.iosBundleId=e.packageName:eu()?n.androidPackageName=e.packageName:st(t,"operation-not-supported-in-this-environment"),await zA(t,n)}function TL(t){const{cordova:e}=Yi();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,CD()?"_blank":"_system","location=yes"),n(i)})})}async function AL(t,e,n){const{cordova:r}=Yi();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(nt(t,"redirect-cancelled-by-user"))},wL))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(l),document.addEventListener("resume",u,!1),eu()&&document.addEventListener("visibilitychange",c,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function SL(t){var e,n,r,i,s,o,a,l,u,c;const h=Yi();k(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),k(typeof((n=h==null?void 0:h.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),k(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),k(typeof((l=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),k(typeof((c=(u=h==null?void 0:h.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function RL(t){const e=PL(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function PL(t){if(gn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CL=20;class kL extends jA{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function xL(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:DL(),postBody:null,tenantId:t.tenantId,error:nt(t,"no-auth-event")}}function NL(t,e){return Qp()._set(Yp(t),e)}async function kw(t){const e=await Qp()._get(Yp(t));return e&&await Qp()._remove(Yp(t)),e}function bL(t,e){var n,r;const i=OL(e);if(i.includes("/__/auth/callback")){const s=vc(i),o=s.firebaseError?VL(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?nt(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function DL(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<CL;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Qp(){return jt(e_)}function Yp(t){return Mi("authEvent",t.config.apiKey,t.name)}function VL(t){try{return JSON.parse(t)}catch{return null}}function OL(t){const e=vc(t),n=e.link?decodeURIComponent(e.link):void 0,r=vc(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return vc(i).link||i||r||n||t}function vc(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return qs(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LL=500;class ML{constructor(){this._redirectPersistence=Ki,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=nd,this._overrideRedirectResult=s_}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new kL(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){st(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){SL(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),bO(),await this._originValidation(e);const o=xL(e,r,i);await NL(e,o);const a=await IL(e,o,n),l=await TL(a);return AL(e,s,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=EL(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Yi(),o=setTimeout(async()=>{await kw(e),n.onEvent(xw())},LL),a=async c=>{clearTimeout(o);const h=await kw(e);let d=null;h&&(c!=null&&c.url)&&(d=bL(h,c.url)),n.onEvent(d||xw())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,u=`${s.packageName.toLowerCase()}://`;Yi().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(u)&&a({url:c}),typeof l=="function")try{l(c)}catch(h){console.error(h)}}}}const FL=ML;function xw(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:nt("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UL(t,e){Se(t)._logFramework(e)}var BL="@firebase/auth-compat",jL="0.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $L=1e3;function ja(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function zL(){return ja()==="http:"||ja()==="https:"}function WA(t=Ie()){return!!((ja()==="file:"||ja()==="ionic:"||ja()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function qL(){return Fg()||Mg()}function WL(){return j0()&&(document==null?void 0:document.documentMode)===11}function GL(t=Ie()){return/Edge\/\d+/.test(t)}function HL(t=Ie()){return WL()||GL(t)}function GA(){try{const t=self.localStorage,e=nu();if(t)return t.setItem(e,"1"),t.removeItem(e),HL()?pl():!0}catch{return a_()&&pl()}return!1}function a_(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Nf(){return(zL()||B0()||WA())&&!qL()&&GA()&&!a_()}function HA(){return WA()&&typeof document<"u"}async function KL(){return HA()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},$L);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function QL(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut={LOCAL:"local",NONE:"none",SESSION:"session"},la=k,KA="persistence";function YL(t,e){if(la(Object.values(Ut).includes(e),t,"invalid-persistence-type"),Fg()){la(e!==Ut.SESSION,t,"unsupported-persistence-type");return}if(Mg()){la(e===Ut.NONE,t,"unsupported-persistence-type");return}if(a_()){la(e===Ut.NONE||e===Ut.LOCAL&&pl(),t,"unsupported-persistence-type");return}la(e===Ut.NONE||GA(),t,"unsupported-persistence-type")}async function Xp(t){await t._initializationPromise;const e=QA(),n=Mi(KA,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function XL(t,e){const n=QA();if(!n)return[];const r=Mi(KA,t,e);switch(n.getItem(r)){case Ut.NONE:return[po];case Ut.LOCAL:return[El,Ki];case Ut.SESSION:return[Ki];default:return[]}}function QA(){var t;try{return((t=QL())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JL=k;class xr{constructor(){this.browserResolver=jt(pL),this.cordovaResolver=jt(FL),this.underlyingResolver=null,this._redirectPersistence=Ki,this._completeRedirectFn=nd,this._overrideRedirectResult=s_}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return HA()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return JL(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await KL();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YA(t){return t.unwrap()}function ZL(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eM(t){return XA(t)}function tM(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new nM(t,UV(t,e))}else if(r){const i=XA(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function XA(t){const{_tokenResponse:e}=t instanceof ht?t.customData:t;if(!e)return null;if(!(t instanceof ht)&&"temporaryProof"in e&&"phoneNumber"in e)return Qi.credentialFromResult(t);const n=e.providerId;if(!n||n===aa.PASSWORD)return null;let r;switch(n){case aa.GOOGLE:r=Tn;break;case aa.FACEBOOK:r=En;break;case aa.GITHUB:r=An;break;case aa.TWITTER:r=Sn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?mo._create(n,a):Mn._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new Zs(n).credential({idToken:i,accessToken:s,rawNonce:l})}return t instanceof ht?r.credentialFromError(t):r.credentialFromResult(t)}function Ct(t,e){return e.catch(n=>{throw n instanceof ht&&tM(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:eM(n),additionalUserInfo:MV(n),user:rd.getOrCreate(i)}})}async function Jp(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Ct(t,n.confirm(r))}}class nM{constructor(e,n){this.resolver=n,this.auth=ZL(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Ct(YA(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rd=class Aa{constructor(e){this._delegate=e,this.multiFactor=zV(e)}static getOrCreate(e){return Aa.USER_MAP.has(e)||Aa.USER_MAP.set(e,new Aa(e)),Aa.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Ct(this.auth,TA(this._delegate,e))}async linkWithPhoneNumber(e,n){return Jp(this.auth,wO(this._delegate,e,n))}async linkWithPopup(e){return Ct(this.auth,CO(this._delegate,e,xr))}async linkWithRedirect(e){return await Xp(Se(this.auth)),MO(this._delegate,e,xr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Ct(this.auth,AA(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Jp(this.auth,IO(this._delegate,e,n))}reauthenticateWithPopup(e){return Ct(this.auth,PO(this._delegate,e,xr))}async reauthenticateWithRedirect(e){return await Xp(Se(this.auth)),OO(this._delegate,e,xr)}sendEmailVerification(e){return RV(this._delegate,e)}async unlink(e){return await fV(this._delegate,e),this}updateEmail(e){return xV(this._delegate,e)}updatePassword(e){return NV(this._delegate,e)}updatePhoneNumber(e){return EO(this._delegate,e)}updateProfile(e){return kV(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return PV(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};rd.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua=k;class Zp{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;ua(r,"invalid-api-key",{appName:e.name}),ua(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?xr:void 0;this._delegate=n.initialize({options:{persistence:rM(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(iD),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?rd.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){zD(this._delegate,e,n)}applyActionCode(e){return yV(this._delegate,e)}checkActionCode(e){return SA(this._delegate,e)}confirmPasswordReset(e,n){return _V(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Ct(this._delegate,wV(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return SV(this._delegate,e)}isSignInWithEmailLink(e){return EV(this._delegate,e)}async getRedirectResult(){ua(Nf(),this._delegate,"operation-not-supported-in-this-environment");const e=await UO(this._delegate,xr);return e?Ct(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){UL(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=Nw(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=Nw(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return IV(this._delegate,e,n)}sendPasswordResetEmail(e,n){return gV(this._delegate,e,n||void 0)}async setPersistence(e){YL(this._delegate,e);let n;switch(e){case Ut.SESSION:n=Ki;break;case Ut.LOCAL:n=await jt(El)._isAvailable()?El:e_;break;case Ut.NONE:n=po;break;default:return st("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Ct(this._delegate,dV(this._delegate))}signInWithCredential(e){return Ct(this._delegate,Xh(this._delegate,e))}signInWithCustomToken(e){return Ct(this._delegate,mV(this._delegate,e))}signInWithEmailAndPassword(e,n){return Ct(this._delegate,RA(this._delegate,e,n))}signInWithEmailLink(e,n){return Ct(this._delegate,TV(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Jp(this._delegate,vO(this._delegate,e,n))}async signInWithPopup(e){return ua(Nf(),this._delegate,"operation-not-supported-in-this-environment"),Ct(this._delegate,MA(this._delegate,e,xr))}async signInWithRedirect(e){return ua(Nf(),this._delegate,"operation-not-supported-in-this-environment"),await Xp(this._delegate),DO(this._delegate,e,xr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return vV(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Zp.Persistence=Ut;function Nw(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&rd.getOrCreate(o)),error:e,complete:n}}function rM(t,e){const n=XL(t,e);if(typeof self<"u"&&!n.includes(El)&&n.push(El),typeof window<"u")for(const r of[e_,Ki])n.includes(r)||n.push(r);return n.includes(po)||n.push(po),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(){this.providerId="phone",this._delegate=new Qi(YA(lr.auth()))}static credential(e,n){return Qi.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}l_.PHONE_SIGN_IN_METHOD=Qi.PHONE_SIGN_IN_METHOD;l_.PROVIDER_ID=Qi.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iM=k;class sM{constructor(e,n,r=lr.app()){var i;iM((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new _O(r.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oM="auth-compat";function aM(t){t.INTERNAL.registerComponent(new sn(oM,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Zp(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:ys.EMAIL_SIGNIN,PASSWORD_RESET:ys.PASSWORD_RESET,RECOVER_EMAIL:ys.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:ys.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:ys.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:ys.VERIFY_EMAIL}},EmailAuthProvider:oi,FacebookAuthProvider:En,GithubAuthProvider:An,GoogleAuthProvider:Tn,OAuthProvider:Zs,SAMLAuthProvider:sh,PhoneAuthProvider:l_,PhoneMultiFactorGenerator:qA,RecaptchaVerifier:sM,TwitterAuthProvider:Sn,Auth:Zp,AuthCredential:Fo,Error:ht}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(BL,jL)}aM(lr);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JA="firebasestorage.googleapis.com",ZA="storageBucket",lM=2*60*1e3,uM=10*60*1e3,cM=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee extends ht{constructor(e,n,r=0){super(bf(e),`Firebase Storage: ${n} (${bf(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ee.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return bf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var de;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(de||(de={}));function bf(t){return"storage/"+t}function u_(){const t="An unknown error occurred, please check the error payload for server response.";return new Ee(de.UNKNOWN,t)}function hM(t){return new Ee(de.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function dM(t){return new Ee(de.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function fM(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ee(de.UNAUTHENTICATED,t)}function pM(){return new Ee(de.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function mM(t){return new Ee(de.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function eS(){return new Ee(de.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function tS(){return new Ee(de.CANCELED,"User canceled the upload/download.")}function gM(t){return new Ee(de.INVALID_URL,"Invalid URL '"+t+"'.")}function _M(t){return new Ee(de.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function yM(){return new Ee(de.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ZA+"' property when initializing the app?")}function nS(){return new Ee(de.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function vM(){return new Ee(de.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function wM(){return new Ee(de.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function IM(t){return new Ee(de.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function to(t){return new Ee(de.INVALID_ARGUMENT,t)}function rS(){return new Ee(de.APP_DELETED,"The Firebase app was deleted.")}function iS(t){return new Ee(de.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function $a(t,e){return new Ee(de.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ca(t){throw new Ee(de.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=ct.makeFromUrl(e,n)}catch{return new ct(e,"")}if(r.path==="")return r;throw _M(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(E){E.path_=decodeURIComponent(E.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),y={bucket:1,path:3},v=n===JA?"(?:storage.googleapis.com|storage.cloud.google.com)":n,I="([^?#]*)",m=new RegExp(`^https?://${v}/${i}/${I}`,"i"),g=[{regex:a,indices:l,postModify:s},{regex:f,indices:y,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let E=0;E<g.length;E++){const S=g[E],C=S.regex.exec(e);if(C){const N=C[S.indices.bucket];let O=C[S.indices.path];O||(O=""),r=new ct(N,O),S.postModify(r);break}}if(r==null)throw gM(e);return r}}class EM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TM(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...I){u||(u=!0,e.apply(null,I))}function h(I){i=setTimeout(()=>{i=null,t(f,l())},I)}function d(){s&&clearTimeout(s)}function f(I,...m){if(u){d();return}if(I){d(),c.call(null,I,...m);return}if(l()||o){d(),c.call(null,I,...m);return}r<64&&(r*=2);let g;a===1?(a=2,g=0):g=(r+Math.random())*1e3,h(g)}let y=!1;function v(I){y||(y=!0,d(),!u&&(i!==null?(I||(a=2),clearTimeout(i),h(0)):I||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,v(!0)},n),v}function AM(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SM(t){return t!==void 0}function RM(t){return typeof t=="function"}function PM(t){return typeof t=="object"&&!Array.isArray(t)}function id(t){return typeof t=="string"||t instanceof String}function bw(t){return c_()&&t instanceof Blob}function c_(){return typeof Blob<"u"}function em(t,e,n,r){if(r<e)throw to(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw to(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function sS(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ui;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ui||(Ui={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oS(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CM{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,y)=>{this.resolve_=f,this.reject_=y,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Wu(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Ui.NO_ERROR,l=s.getStatus();if(!a||oS(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===Ui.ABORT;r(!1,new Wu(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Wu(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());SM(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=u_();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?rS():tS();o(l)}else{const l=eS();o(l)}};this.canceled_?n(!1,new Wu(!1,null,!0)):this.backoffId_=TM(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&AM(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Wu{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function kM(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function xM(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function NM(t,e){e&&(t["X-Firebase-GMPID"]=e)}function bM(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function DM(t,e,n,r,i,s,o=!0){const a=sS(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return NM(u,e),kM(u,n),xM(u,s),bM(u,r),new CM(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VM(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function OM(...t){const e=VM();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(c_())return new Blob(t);throw new Ee(de.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function LM(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MM(t){if(typeof atob>"u")throw IM("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Df{constructor(e,n){this.data=e,this.contentType=n||null}}function aS(t,e){switch(t){case Jt.RAW:return new Df(lS(e));case Jt.BASE64:case Jt.BASE64URL:return new Df(uS(t,e));case Jt.DATA_URL:return new Df(UM(e),BM(e))}throw u_()}function lS(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function FM(t){let e;try{e=decodeURIComponent(t)}catch{throw $a(Jt.DATA_URL,"Malformed data URL.")}return lS(e)}function uS(t,e){switch(t){case Jt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw $a(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Jt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw $a(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=MM(e)}catch(i){throw i.message.includes("polyfill")?i:$a(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class cS{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw $a(Jt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=jM(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function UM(t){const e=new cS(t);return e.base64?uS(Jt.BASE64,e.rest):FM(e.rest)}function BM(t){return new cS(t).contentType}function jM(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,n){let r=0,i="";bw(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(bw(this.data_)){const r=this.data_,i=LM(r,e,n);return i===null?null:new $n(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new $n(r,!0)}}static getBlob(...e){if(c_()){const n=e.map(r=>r instanceof $n?r.data_:r);return new $n(OM.apply(null,n))}else{const n=e.map(o=>id(o)?aS(Jt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new $n(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h_(t){let e;try{e=JSON.parse(t)}catch{return null}return PM(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $M(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function zM(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function hS(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qM(t,e){return e}class mt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||qM}}let Gu=null;function WM(t){return!id(t)||t.length<2?t:hS(t)}function sd(){if(Gu)return Gu;const t=[];t.push(new mt("bucket")),t.push(new mt("generation")),t.push(new mt("metageneration")),t.push(new mt("name","fullPath",!0));function e(s,o){return WM(o)}const n=new mt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new mt("size");return i.xform=r,t.push(i),t.push(new mt("timeCreated")),t.push(new mt("updated")),t.push(new mt("md5Hash",null,!0)),t.push(new mt("cacheControl",null,!0)),t.push(new mt("contentDisposition",null,!0)),t.push(new mt("contentEncoding",null,!0)),t.push(new mt("contentLanguage",null,!0)),t.push(new mt("contentType",null,!0)),t.push(new mt("metadata","customMetadata",!0)),Gu=t,Gu}function GM(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new ct(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function HM(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return GM(r,t),r}function dS(t,e,n){const r=h_(e);return r===null?null:HM(t,r,n)}function KM(t,e,n,r){const i=h_(e);if(i===null||!id(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,h=t.fullPath,d="/b/"+o(c)+"/o/"+o(h),f=ai(d,n,r),y=sS({alt:"media",token:u});return f+y})[0]}function d_(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw="prefixes",Vw="items";function QM(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[Dw])for(const i of n[Dw]){const s=i.replace(/\/$/,""),o=t._makeStorageReference(new ct(e,s));r.prefixes.push(o)}if(n[Vw])for(const i of n[Vw]){const s=t._makeStorageReference(new ct(e,i.name));r.items.push(s)}return r}function YM(t,e,n){const r=h_(n);return r===null?null:QM(t,e,r)}class hr{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(t){if(!t)throw u_()}function od(t,e){function n(r,i){const s=dS(t,i,e);return On(s!==null),s}return n}function XM(t,e){function n(r,i){const s=YM(t,e,i);return On(s!==null),s}return n}function JM(t,e){function n(r,i){const s=dS(t,i,e);return On(s!==null),KM(s,i,t.host,t._protocol)}return n}function Bo(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=pM():i=fM():n.getStatus()===402?i=dM(t.bucket):n.getStatus()===403?i=mM(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function ad(t){const e=Bo(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=hM(t.path)),s.serverResponse=i.serverResponse,s}return n}function fS(t,e,n){const r=e.fullServerUrl(),i=ai(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new hr(i,s,od(t,n),o);return a.errorHandler=ad(e),a}function ZM(t,e,n,r,i){const s={};e.isRoot?s.prefix="":s.prefix=e.path+"/",n&&n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=e.bucketOnlyServerUrl(),a=ai(o,t.host,t._protocol),l="GET",u=t.maxOperationRetryTime,c=new hr(a,l,XM(t,e.bucket),u);return c.urlParams=s,c.errorHandler=Bo(e),c}function e2(t,e,n){const r=e.fullServerUrl(),i=ai(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new hr(i,s,JM(t,n),o);return a.errorHandler=ad(e),a}function t2(t,e,n,r){const i=e.fullServerUrl(),s=ai(i,t.host,t._protocol),o="PATCH",a=d_(n,r),l={"Content-Type":"application/json; charset=utf-8"},u=t.maxOperationRetryTime,c=new hr(s,o,od(t,r),u);return c.headers=l,c.body=a,c.errorHandler=ad(e),c}function n2(t,e){const n=e.fullServerUrl(),r=ai(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(l,u){}const a=new hr(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=ad(e),a}function r2(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function pS(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=r2(null,e)),r}function i2(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let g="";for(let E=0;E<2;E++)g=g+Math.random().toString().slice(2);return g}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=pS(e,r,i),c=d_(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+l+"--",f=$n.getBlob(h,r,d);if(f===null)throw nS();const y={name:u.fullPath},v=ai(s,t.host,t._protocol),I="POST",m=t.maxUploadRetryTime,p=new hr(v,I,od(t,n),m);return p.urlParams=y,p.headers=o,p.body=f.uploadData(),p.errorHandler=Bo(e),p}class uh{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function f_(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{On(!1)}return On(!!n&&(e||["active"]).indexOf(n)!==-1),n}function s2(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=pS(e,r,i),a={name:o.fullPath},l=ai(s,t.host,t._protocol),u="POST",c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=d_(o,n),d=t.maxUploadRetryTime;function f(v){f_(v);let I;try{I=v.getResponseHeader("X-Goog-Upload-URL")}catch{On(!1)}return On(id(I)),I}const y=new hr(l,u,f,d);return y.urlParams=a,y.headers=c,y.body=h,y.errorHandler=Bo(e),y}function o2(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(u){const c=f_(u,["active","final"]);let h=null;try{h=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{On(!1)}h||On(!1);const d=Number(h);return On(!isNaN(d)),new uh(d,r.size(),c==="final")}const o="POST",a=t.maxUploadRetryTime,l=new hr(n,o,s,a);return l.headers=i,l.errorHandler=Bo(e),l}const Ow=256*1024;function a2(t,e,n,r,i,s,o,a){const l=new uh(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw vM();const u=l.total-l.current;let c=u;i>0&&(c=Math.min(c,i));const h=l.current,d=h+c;let f="";c===0?f="finalize":u===c?f="upload, finalize":f="upload";const y={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":`${l.current}`},v=r.slice(h,d);if(v===null)throw nS();function I(E,S){const C=f_(E,["active","final"]),N=l.current+c,O=r.size();let te;return C==="final"?te=od(e,s)(E,S):te=null,new uh(N,O,C==="final",te)}const m="POST",p=e.maxUploadRetryTime,g=new hr(n,m,I,p);return g.headers=y,g.body=v.uploadData(),g.progressCallback=a||null,g.errorHandler=Bo(t),g}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l2={STATE_CHANGED:"state_changed"},yt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Vf(t){switch(t){case"running":case"pausing":case"canceling":return yt.RUNNING;case"paused":return yt.PAUSED;case"success":return yt.SUCCESS;case"canceled":return yt.CANCELED;case"error":return yt.ERROR;default:return yt.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u2{constructor(e,n,r){if(RM(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class c2{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ui.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ui.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ui.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw ca("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ca("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ca("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ca("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ca("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class h2 extends c2{initXhr(){this.xhr_.responseType="text"}}function Rn(){return new h2}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=sd(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(de.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(oS(i.status,[]))if(s)i=eS();else{this.sleepTime=Math.max(this.sleepTime*2,cM),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(de.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=s2(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Rn,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=o2(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,Rn,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Ow*this._chunkMultiplier,n=new uh(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=a2(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,Rn,i,s,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Ow*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=fS(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,Rn,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=i2(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Rn,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=tS(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Vf(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new u2(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Vf(this._state)){case yt.SUCCESS:vs(this._resolve.bind(null,this.snapshot))();break;case yt.CANCELED:case yt.ERROR:const n=this._reject;vs(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Vf(this._state)){case yt.RUNNING:case yt.PAUSED:e.next&&vs(e.next.bind(e,this.snapshot))();break;case yt.SUCCESS:e.complete&&vs(e.complete.bind(e))();break;case yt.CANCELED:case yt.ERROR:e.error&&vs(e.error.bind(e,this._error))();break;default:e.error&&vs(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,n){this._service=e,n instanceof ct?this._location=n:this._location=ct.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Xi(e,n)}get root(){const e=new ct(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return hS(this._location.path)}get storage(){return this._service}get parent(){const e=$M(this._location.path);if(e===null)return null;const n=new ct(this._location.bucket,e);return new Xi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw iS(e)}}function d2(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new mS(t,new $n(e),n)}function f2(t){const e={prefixes:[],items:[]};return gS(t,e).then(()=>e)}async function gS(t,e,n){const i=await _S(t,{pageToken:n});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await gS(t,e,i.nextPageToken)}function _S(t,e){e!=null&&typeof e.maxResults=="number"&&em("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=ZM(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,Rn)}function p2(t){t._throwIfRoot("getMetadata");const e=fS(t.storage,t._location,sd());return t.storage.makeRequestWithTokens(e,Rn)}function m2(t,e){t._throwIfRoot("updateMetadata");const n=t2(t.storage,t._location,e,sd());return t.storage.makeRequestWithTokens(n,Rn)}function g2(t){t._throwIfRoot("getDownloadURL");const e=e2(t.storage,t._location,sd());return t.storage.makeRequestWithTokens(e,Rn).then(n=>{if(n===null)throw wM();return n})}function _2(t){t._throwIfRoot("deleteObject");const e=n2(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Rn)}function yS(t,e){const n=zM(t._location.path,e),r=new ct(t._location.bucket,n);return new Xi(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y2(t){return/^[A-Za-z]+:\/\//.test(t)}function v2(t,e){return new Xi(t,e)}function vS(t,e){if(t instanceof p_){const n=t;if(n._bucket==null)throw yM();const r=new Xi(n,n._bucket);return e!=null?vS(r,e):r}else return e!==void 0?yS(t,e):t}function w2(t,e){if(e&&y2(e)){if(t instanceof p_)return v2(t,e);throw to("To use ref(service, url), the first argument must be a Storage instance.")}else return vS(t,e)}function Lw(t,e){const n=e==null?void 0:e[ZA];return n==null?null:ct.makeFromBucketSpec(n,t)}function I2(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:U0(i,t.app.options.projectId))}class p_{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=JA,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=lM,this._maxUploadRetryTime=uM,this._requests=new Set,i!=null?this._bucket=ct.makeFromBucketSpec(i,this._host):this._bucket=Lw(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ct.makeFromBucketSpec(this._url,e):this._bucket=Lw(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){em("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){em("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Xi(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new EM(rS());{const o=DM(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Mw="@firebase/storage",Fw="0.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E2="storage";function T2(t,e,n){return t=U(t),d2(t,e,n)}function A2(t){return t=U(t),p2(t)}function S2(t,e){return t=U(t),m2(t,e)}function R2(t,e){return t=U(t),_S(t,e)}function P2(t){return t=U(t),f2(t)}function C2(t){return t=U(t),g2(t)}function k2(t){return t=U(t),_2(t)}function Uw(t,e){return t=U(t),w2(t,e)}function x2(t,e){return yS(t,e)}function N2(t,e,n,r={}){I2(t,e,n,r)}function b2(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new p_(n,r,i,e,ar)}function D2(){nr(new sn(E2,b2,"PUBLIC").setMultipleInstances(!0)),tn(Mw,Fw,""),tn(Mw,Fw,"esm2017")}D2();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e,n,r){this._delegate=e,this.task=n,this.ref=r}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(e,n){this._delegate=e,this._ref=n,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new Hu(this._delegate.snapshot,this,this._ref)}then(e,n){return this._delegate.then(r=>{if(e)return e(new Hu(r,this,this._ref))},n)}on(e,n,r,i){let s;return n&&(typeof n=="function"?s=o=>n(new Hu(o,this,this._ref)):s={next:n.next?o=>n.next(new Hu(o,this,this._ref)):void 0,complete:n.complete||void 0,error:n.error||void 0}),this._delegate.on(e,s,r||void 0,i||void 0)}}class jw{constructor(e,n){this._delegate=e,this._service=n}get prefixes(){return this._delegate.prefixes.map(e=>new Xn(e,this._service))}get items(){return this._delegate.items.map(e=>new Xn(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,n){this._delegate=e,this.storage=n}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const n=x2(this._delegate,e);return new Xn(n,this.storage)}get root(){return new Xn(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return e==null?null:new Xn(e,this.storage)}put(e,n){return this._throwIfRoot("put"),new Bw(T2(this._delegate,e,n),this)}putString(e,n=Jt.RAW,r){this._throwIfRoot("putString");const i=aS(n,e),s=Object.assign({},r);return s.contentType==null&&i.contentType!=null&&(s.contentType=i.contentType),new Bw(new mS(this._delegate,new $n(i.data,!0),s),this)}listAll(){return P2(this._delegate).then(e=>new jw(e,this.storage))}list(e){return R2(this._delegate,e||void 0).then(n=>new jw(n,this.storage))}getMetadata(){return A2(this._delegate)}updateMetadata(e){return S2(this._delegate,e)}getDownloadURL(){return C2(this._delegate)}delete(){return this._throwIfRoot("delete"),k2(this._delegate)}_throwIfRoot(e){if(this._delegate._location.path==="")throw iS(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(e,n){this.app=e,this._delegate=n}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if($w(e))throw to("ref() expected a child path but got a URL, use refFromURL instead.");return new Xn(Uw(this._delegate,e),this)}refFromURL(e){if(!$w(e))throw to("refFromURL() expected a full URL but got a child path, use ref() instead.");try{ct.makeFromUrl(e,this._delegate.host)}catch{throw to("refFromUrl() expected a valid full URL but got an invalid one.")}return new Xn(Uw(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,n,r={}){N2(this._delegate,e,n,r)}}function $w(t){return/^[A-Za-z]+:\/\//.test(t)}const V2="@firebase/storage-compat",O2="0.3.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L2="storage-compat";function M2(t,{instanceIdentifier:e}){const n=t.getProvider("app-compat").getImmediate(),r=t.getProvider("storage").getImmediate({identifier:e});return new wS(n,r)}function F2(t){const e={TaskState:yt,TaskEvent:l2,StringFormat:Jt,Storage:wS,Reference:Xn};t.INTERNAL.registerComponent(new sn(L2,M2,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),t.registerVersion(V2,O2)}F2(lr);var U2=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V,m_=m_||{},$=U2||self;function ld(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function iu(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function B2(t){return Object.prototype.hasOwnProperty.call(t,Of)&&t[Of]||(t[Of]=++j2)}var Of="closure_uid_"+(1e9*Math.random()>>>0),j2=0;function $2(t,e,n){return t.call.apply(t.bind,arguments)}function z2(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function dt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?dt=$2:dt=z2,dt.apply(null,arguments)}function Ku(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ke(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function li(){this.s=this.s,this.o=this.o}var q2=0;li.prototype.s=!1;li.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),q2!=0)&&B2(this)};li.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const IS=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function g_(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function zw(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(ld(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function ft(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ft.prototype.h=function(){this.defaultPrevented=!0};var W2=function(){if(!$.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};$.addEventListener("test",n,e),$.removeEventListener("test",n,e)}catch{}return t}();function Tl(t){return/^[\s\xa0]*$/.test(t)}function ud(){var t=$.navigator;return t&&(t=t.userAgent)?t:""}function Pn(t){return ud().indexOf(t)!=-1}function __(t){return __[" "](t),t}__[" "]=function(){};function G2(t,e){var n=FF;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var H2=Pn("Opera"),go=Pn("Trident")||Pn("MSIE"),ES=Pn("Edge"),tm=ES||go,TS=Pn("Gecko")&&!(ud().toLowerCase().indexOf("webkit")!=-1&&!Pn("Edge"))&&!(Pn("Trident")||Pn("MSIE"))&&!Pn("Edge"),K2=ud().toLowerCase().indexOf("webkit")!=-1&&!Pn("Edge");function AS(){var t=$.document;return t?t.documentMode:void 0}var nm;e:{var Lf="",Mf=function(){var t=ud();if(TS)return/rv:([^\);]+)(\)|;)/.exec(t);if(ES)return/Edge\/([\d\.]+)/.exec(t);if(go)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(K2)return/WebKit\/(\S+)/.exec(t);if(H2)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Mf&&(Lf=Mf?Mf[1]:""),go){var Ff=AS();if(Ff!=null&&Ff>parseFloat(Lf)){nm=String(Ff);break e}}nm=Lf}var rm;if($.document&&go){var qw=AS();rm=qw||parseInt(nm,10)||void 0}else rm=void 0;var Q2=rm;function Al(t,e){if(ft.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(TS){e:{try{__(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Y2[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Al.$.h.call(this)}}Ke(Al,ft);var Y2={2:"touch",3:"pen",4:"mouse"};Al.prototype.h=function(){Al.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var su="closure_listenable_"+(1e6*Math.random()|0),X2=0;function J2(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++X2,this.fa=this.ia=!1}function cd(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function y_(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Z2(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function SS(t){const e={};for(const n in t)e[n]=t[n];return e}const Ww="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function RS(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Ww.length;s++)n=Ww[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function hd(t){this.src=t,this.g={},this.h=0}hd.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=sm(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new J2(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function im(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=IS(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(cd(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function sm(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var v_="closure_lm_"+(1e6*Math.random()|0),Uf={};function PS(t,e,n,r,i){if(r&&r.once)return kS(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)PS(t,e[s],n,r,i);return null}return n=E_(n),t&&t[su]?t.O(e,n,iu(r)?!!r.capture:!!r,i):CS(t,e,n,!1,r,i)}function CS(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=iu(i)?!!i.capture:!!i,a=I_(t);if(a||(t[v_]=a=new hd(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=eF(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)W2||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(NS(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function eF(){function t(n){return e.call(t.src,t.listener,n)}const e=tF;return t}function kS(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)kS(t,e[s],n,r,i);return null}return n=E_(n),t&&t[su]?t.P(e,n,iu(r)?!!r.capture:!!r,i):CS(t,e,n,!0,r,i)}function xS(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)xS(t,e[s],n,r,i);else r=iu(r)?!!r.capture:!!r,n=E_(n),t&&t[su]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=sm(s,n,r,i),-1<n&&(cd(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=I_(t))&&(e=t.g[e.toString()],t=-1,e&&(t=sm(e,n,r,i)),(n=-1<t?e[t]:null)&&w_(n))}function w_(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[su])im(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(NS(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=I_(e))?(im(n,t),n.h==0&&(n.src=null,e[v_]=null)):cd(t)}}}function NS(t){return t in Uf?Uf[t]:Uf[t]="on"+t}function tF(t,e){if(t.fa)t=!0;else{e=new Al(e,this);var n=t.listener,r=t.la||t.src;t.ia&&w_(t),t=n.call(r,e)}return t}function I_(t){return t=t[v_],t instanceof hd?t:null}var Bf="__closure_events_fn_"+(1e9*Math.random()>>>0);function E_(t){return typeof t=="function"?t:(t[Bf]||(t[Bf]=function(e){return t.handleEvent(e)}),t[Bf])}function He(){li.call(this),this.i=new hd(this),this.S=this,this.J=null}Ke(He,li);He.prototype[su]=!0;He.prototype.removeEventListener=function(t,e,n,r){xS(this,t,e,n,r)};function rt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new ft(e,t);else if(e instanceof ft)e.target=e.target||t;else{var i=e;e=new ft(r,t),RS(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Qu(o,r,!0,e)&&i}if(o=e.g=t,i=Qu(o,r,!0,e)&&i,i=Qu(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Qu(o,r,!1,e)&&i}He.prototype.N=function(){if(He.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)cd(n[r]);delete t.g[e],t.h--}}this.J=null};He.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};He.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Qu(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&im(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var T_=$.JSON.stringify;class nF{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function rF(){var t=A_;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class iF{constructor(){this.h=this.g=null}add(e,n){const r=bS.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var bS=new nF(()=>new sF,t=>t.reset());class sF{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function oF(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function aF(t){$.setTimeout(()=>{throw t},0)}let Sl,Rl=!1,A_=new iF,DS=()=>{const t=$.Promise.resolve(void 0);Sl=()=>{t.then(lF)}};var lF=()=>{for(var t;t=rF();){try{t.h.call(t.g)}catch(n){aF(n)}var e=bS;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Rl=!1};function dd(t,e){He.call(this),this.h=t||1,this.g=e||$,this.j=dt(this.qb,this),this.l=Date.now()}Ke(dd,He);V=dd.prototype;V.ga=!1;V.T=null;V.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),rt(this,"tick"),this.ga&&(S_(this),this.start()))}};V.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function S_(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}V.N=function(){dd.$.N.call(this),S_(this),delete this.g};function R_(t,e,n){if(typeof t=="function")n&&(t=dt(t,n));else if(t&&typeof t.handleEvent=="function")t=dt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:$.setTimeout(t,e||0)}function VS(t){t.g=R_(()=>{t.g=null,t.i&&(t.i=!1,VS(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class uF extends li{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:VS(this)}N(){super.N(),this.g&&($.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pl(t){li.call(this),this.h=t,this.g={}}Ke(Pl,li);var Gw=[];function OS(t,e,n,r){Array.isArray(n)||(n&&(Gw[0]=n.toString()),n=Gw);for(var i=0;i<n.length;i++){var s=PS(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function LS(t){y_(t.g,function(e,n){this.g.hasOwnProperty(n)&&w_(e)},t),t.g={}}Pl.prototype.N=function(){Pl.$.N.call(this),LS(this)};Pl.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function fd(){this.g=!0}fd.prototype.Ea=function(){this.g=!1};function cF(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function hF(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Ws(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+fF(t,n)+(r?" "+r:"")})}function dF(t,e){t.info(function(){return"TIMEOUT: "+e})}fd.prototype.info=function(){};function fF(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return T_(n)}catch{return e}}var hs={},Hw=null;function pd(){return Hw=Hw||new He}hs.Ta="serverreachability";function MS(t){ft.call(this,hs.Ta,t)}Ke(MS,ft);function Cl(t){const e=pd();rt(e,new MS(e))}hs.STAT_EVENT="statevent";function FS(t,e){ft.call(this,hs.STAT_EVENT,t),this.stat=e}Ke(FS,ft);function It(t){const e=pd();rt(e,new FS(e,t))}hs.Ua="timingevent";function US(t,e){ft.call(this,hs.Ua,t),this.size=e}Ke(US,ft);function ou(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return $.setTimeout(function(){t()},e)}var md={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},BS={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function P_(){}P_.prototype.h=null;function Kw(t){return t.h||(t.h=t.i())}function jS(){}var au={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function C_(){ft.call(this,"d")}Ke(C_,ft);function k_(){ft.call(this,"c")}Ke(k_,ft);var om;function gd(){}Ke(gd,P_);gd.prototype.g=function(){return new XMLHttpRequest};gd.prototype.i=function(){return{}};om=new gd;function lu(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Pl(this),this.P=pF,t=tm?125:void 0,this.V=new dd(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new $S}function $S(){this.i=null,this.g="",this.h=!1}var pF=45e3,zS={},am={};V=lu.prototype;V.setTimeout=function(t){this.P=t};function lm(t,e,n){t.L=1,t.A=yd(ir(e)),t.u=n,t.S=!0,qS(t,null)}function qS(t,e){t.G=Date.now(),uu(t),t.B=ir(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),JS(n.i,"t",r),t.o=0,n=t.l.J,t.h=new $S,t.g=vR(t.l,n?e:null,!t.u),0<t.O&&(t.M=new uF(dt(t.Pa,t,t.g),t.O)),OS(t.U,t.g,"readystatechange",t.nb),e=t.I?SS(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),Cl(),cF(t.j,t.v,t.B,t.m,t.W,t.u)}V.nb=function(t){t=t.target;const e=this.M;e&&kn(t)==3?e.l():this.Pa(t)};V.Pa=function(t){try{if(t==this.g)e:{const c=kn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||tm||this.g&&(this.h.h||this.g.ja()||Jw(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?Cl(3):Cl(2)),_d(this);var n=this.g.da();this.ca=n;t:if(WS(this)){var r=Jw(this.g);t="";var i=r.length,s=kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){xi(this),za(this);var o="";break t}this.h.i=new $.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,hF(this.j,this.v,this.B,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Tl(a)){var u=a;break t}}u=null}if(n=u)Ws(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,um(this,n);else{this.i=!1,this.s=3,It(12),xi(this),za(this);break e}}this.S?(GS(this,c,o),tm&&this.i&&c==3&&(OS(this.U,this.V,"tick",this.mb),this.V.start())):(Ws(this.j,this.m,o,null),um(this,o)),c==4&&xi(this),this.i&&!this.J&&(c==4?mR(this.l,this):(this.i=!1,uu(this)))}else OF(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,It(12)):(this.s=0,It(13)),xi(this),za(this)}}}catch{}finally{}};function WS(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function GS(t,e,n){let r=!0,i;for(;!t.J&&t.o<n.length;)if(i=mF(t,n),i==am){e==4&&(t.s=4,It(14),r=!1),Ws(t.j,t.m,null,"[Incomplete Response]");break}else if(i==zS){t.s=4,It(15),Ws(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ws(t.j,t.m,i,null),um(t,i);WS(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,It(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),O_(e),e.M=!0,It(11))):(Ws(t.j,t.m,n,"[Invalid Chunked Response]"),xi(t),za(t))}V.mb=function(){if(this.g){var t=kn(this.g),e=this.g.ja();this.o<e.length&&(_d(this),GS(this,t,e),this.i&&t!=4&&uu(this))}};function mF(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?am:(n=Number(e.substring(n,r)),isNaN(n)?zS:(r+=1,r+n>e.length?am:(e=e.slice(r,r+n),t.o=r+n,e)))}V.cancel=function(){this.J=!0,xi(this)};function uu(t){t.Y=Date.now()+t.P,HS(t,t.P)}function HS(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=ou(dt(t.lb,t),e)}function _d(t){t.C&&($.clearTimeout(t.C),t.C=null)}V.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(dF(this.j,this.B),this.L!=2&&(Cl(),It(17)),xi(this),this.s=2,za(this)):HS(this,this.Y-t)};function za(t){t.l.H==0||t.J||mR(t.l,t)}function xi(t){_d(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,S_(t.V),LS(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function um(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||cm(n.i,t))){if(!t.K&&cm(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)dh(n),Ed(n);else break e;V_(n),It(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=ou(dt(n.ib,n),6e3));if(1>=tR(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Ni(n,11)}else if((t.K||n.g==t)&&dh(n),!Tl(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const y=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(x_(s,s.h),s.h=null))}if(r.F){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,ue(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=yR(r,r.J?r.pa:null,r.Y),o.K){nR(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(_d(a),uu(a)),r.g=o}else fR(r);0<n.j.length&&Td(n)}else u[0]!="stop"&&u[0]!="close"||Ni(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Ni(n,7):D_(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Cl(4)}catch{}}function gF(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ld(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function _F(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ld(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function KS(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ld(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=_F(t),r=gF(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var QS=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function yF(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Bi(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Bi){this.h=t.h,ch(this,t.j),this.s=t.s,this.g=t.g,hh(this,t.m),this.l=t.l;var e=t.i,n=new kl;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Qw(this,n),this.o=t.o}else t&&(e=String(t).match(QS))?(this.h=!1,ch(this,e[1]||"",!0),this.s=Sa(e[2]||""),this.g=Sa(e[3]||"",!0),hh(this,e[4]),this.l=Sa(e[5]||"",!0),Qw(this,e[6]||"",!0),this.o=Sa(e[7]||"")):(this.h=!1,this.i=new kl(null,this.h))}Bi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ra(e,Yw,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ra(e,Yw,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ra(n,n.charAt(0)=="/"?IF:wF,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ra(n,TF)),t.join("")};function ir(t){return new Bi(t)}function ch(t,e,n){t.j=n?Sa(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function hh(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Qw(t,e,n){e instanceof kl?(t.i=e,AF(t.i,t.h)):(n||(e=Ra(e,EF)),t.i=new kl(e,t.h))}function ue(t,e,n){t.i.set(e,n)}function yd(t){return ue(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Sa(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ra(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,vF),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function vF(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Yw=/[#\/\?@]/g,wF=/[#\?:]/g,IF=/[#\?]/g,EF=/[#\?@]/g,TF=/#/g;function kl(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ui(t){t.g||(t.g=new Map,t.h=0,t.i&&yF(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}V=kl.prototype;V.add=function(t,e){ui(this),this.i=null,t=jo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function YS(t,e){ui(t),e=jo(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function XS(t,e){return ui(t),e=jo(t,e),t.g.has(e)}V.forEach=function(t,e){ui(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};V.ta=function(){ui(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};V.Z=function(t){ui(this);let e=[];if(typeof t=="string")XS(this,t)&&(e=e.concat(this.g.get(jo(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};V.set=function(t,e){return ui(this),this.i=null,t=jo(this,t),XS(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};V.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function JS(t,e,n){YS(t,e),0<n.length&&(t.i=null,t.g.set(jo(t,e),g_(n)),t.h+=n.length)}V.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function jo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function AF(t,e){e&&!t.j&&(ui(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(YS(this,r),JS(this,i,n))},t)),t.j=e}var SF=class{constructor(t,e){this.g=t,this.map=e}};function ZS(t){this.l=t||RF,$.PerformanceNavigationTiming?(t=$.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!($.g&&$.g.Ka&&$.g.Ka()&&$.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var RF=10;function eR(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function tR(t){return t.h?1:t.g?t.g.size:0}function cm(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function x_(t,e){t.g?t.g.add(e):t.h=e}function nR(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}ZS.prototype.cancel=function(){if(this.i=rR(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function rR(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return g_(t.i)}var PF=class{stringify(t){return $.JSON.stringify(t,void 0)}parse(t){return $.JSON.parse(t,void 0)}};function CF(){this.g=new PF}function kF(t,e,n){const r=n||"";try{KS(t,function(i,s){let o=i;iu(i)&&(o=T_(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function xF(t,e){const n=new fd;if($.Image){const r=new Image;r.onload=Ku(Yu,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ku(Yu,n,r,"TestLoadImage: error",!1,e),r.onabort=Ku(Yu,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ku(Yu,n,r,"TestLoadImage: timeout",!1,e),$.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Yu(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function vd(t){this.l=t.ec||null,this.j=t.ob||!1}Ke(vd,P_);vd.prototype.g=function(){return new wd(this.l,this.j)};vd.prototype.i=function(t){return function(){return t}}({});function wd(t,e){He.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=N_,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ke(wd,He);var N_=0;V=wd.prototype;V.open=function(t,e){if(this.readyState!=N_)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,xl(this)};V.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||$).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};V.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,cu(this)),this.readyState=N_};V.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,xl(this)),this.g&&(this.readyState=3,xl(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof $.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;iR(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function iR(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}V.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?cu(this):xl(this),this.readyState==3&&iR(this)}};V.Za=function(t){this.g&&(this.response=this.responseText=t,cu(this))};V.Ya=function(t){this.g&&(this.response=t,cu(this))};V.ka=function(){this.g&&cu(this)};function cu(t){t.readyState=4,t.l=null,t.j=null,t.A=null,xl(t)}V.setRequestHeader=function(t,e){this.v.append(t,e)};V.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};V.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function xl(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(wd.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var NF=$.JSON.parse;function Re(t){He.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=sR,this.L=this.M=!1}Ke(Re,He);var sR="",bF=/^https?$/i,DF=["POST","PUT"];V=Re.prototype;V.Oa=function(t){this.M=t};V.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():om.g(),this.C=this.u?Kw(this.u):Kw(om),this.g.onreadystatechange=dt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Xw(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=$.FormData&&t instanceof $.FormData,!(0<=IS(DF,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{lR(this),0<this.B&&((this.L=VF(this.g))?(this.g.timeout=this.B,this.g.ontimeout=dt(this.ua,this)):this.A=R_(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Xw(this,s)}};function VF(t){return go&&typeof t.timeout=="number"&&t.ontimeout!==void 0}V.ua=function(){typeof m_<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,rt(this,"timeout"),this.abort(8))};function Xw(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,oR(t),Id(t)}function oR(t){t.F||(t.F=!0,rt(t,"complete"),rt(t,"error"))}V.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,rt(this,"complete"),rt(this,"abort"),Id(this))};V.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Id(this,!0)),Re.$.N.call(this)};V.La=function(){this.s||(this.G||this.v||this.l?aR(this):this.kb())};V.kb=function(){aR(this)};function aR(t){if(t.h&&typeof m_<"u"&&(!t.C[1]||kn(t)!=4||t.da()!=2)){if(t.v&&kn(t)==4)R_(t.La,0,t);else if(rt(t,"readystatechange"),kn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(QS)[1]||null;!i&&$.self&&$.self.location&&(i=$.self.location.protocol.slice(0,-1)),r=!bF.test(i?i.toLowerCase():"")}n=r}if(n)rt(t,"complete"),rt(t,"success");else{t.m=6;try{var s=2<kn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",oR(t)}}finally{Id(t)}}}}function Id(t,e){if(t.g){lR(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||rt(t,"ready");try{n.onreadystatechange=r}catch{}}}function lR(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&($.clearTimeout(t.A),t.A=null)}V.isActive=function(){return!!this.g};function kn(t){return t.g?t.g.readyState:0}V.da=function(){try{return 2<kn(this)?this.g.status:-1}catch{return-1}};V.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};V.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),NF(e)}};function Jw(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case sR:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function OF(t){const e={};t=(t.g&&2<=kn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Tl(t[r]))continue;var n=oF(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}Z2(e,function(r){return r.join(", ")})}V.Ia=function(){return this.m};V.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function uR(t){let e="";return y_(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function b_(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=uR(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ue(t,e,n))}function ha(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function cR(t){this.Ga=0,this.j=[],this.l=new fd,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ha("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ha("baseRetryDelayMs",5e3,t),this.hb=ha("retryDelaySeedMs",1e4,t),this.eb=ha("forwardChannelMaxRetries",2,t),this.xa=ha("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new ZS(t&&t.concurrentRequestLimit),this.Ja=new CF,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}V=cR.prototype;V.ra=8;V.H=1;function D_(t){if(hR(t),t.H==3){var e=t.W++,n=ir(t.I);if(ue(n,"SID",t.K),ue(n,"RID",e),ue(n,"TYPE","terminate"),hu(t,n),e=new lu(t,t.l,e),e.L=2,e.A=yd(ir(n)),n=!1,$.navigator&&$.navigator.sendBeacon)try{n=$.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&$.Image&&(new Image().src=e.A,n=!0),n||(e.g=vR(e.l,null),e.g.ha(e.A)),e.G=Date.now(),uu(e)}_R(t)}function Ed(t){t.g&&(O_(t),t.g.cancel(),t.g=null)}function hR(t){Ed(t),t.u&&($.clearTimeout(t.u),t.u=null),dh(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&$.clearTimeout(t.m),t.m=null)}function Td(t){if(!eR(t.i)&&!t.m){t.m=!0;var e=t.Na;Sl||DS(),Rl||(Sl(),Rl=!0),A_.add(e,t),t.C=0}}function LF(t,e){return tR(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=ou(dt(t.Na,t,e),gR(t,t.C)),t.C++,!0)}V.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new lu(this,this.l,t);let s=this.s;if(this.U&&(s?(s=SS(s),RS(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=dR(this,i,e),n=ir(this.I),ue(n,"RID",t),ue(n,"CVER",22),this.F&&ue(n,"X-HTTP-Session-Id",this.F),hu(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(uR(s)))+"&"+e:this.o&&b_(n,this.o,s)),x_(this.i,i),this.bb&&ue(n,"TYPE","init"),this.P?(ue(n,"$req",e),ue(n,"SID","null"),i.aa=!0,lm(i,n,null)):lm(i,n,e),this.H=2}}else this.H==3&&(t?Zw(this,t):this.j.length==0||eR(this.i)||Zw(this))};function Zw(t,e){var n;e?n=e.m:n=t.W++;const r=ir(t.I);ue(r,"SID",t.K),ue(r,"RID",n),ue(r,"AID",t.V),hu(t,r),t.o&&t.s&&b_(r,t.o,t.s),n=new lu(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=dR(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),x_(t.i,n),lm(n,r,e)}function hu(t,e){t.na&&y_(t.na,function(n,r){ue(e,r,n)}),t.h&&KS({},function(n,r){ue(e,r,n)})}function dR(t,e,n){n=Math.min(t.j.length,n);var r=t.h?dt(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{kF(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function fR(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Sl||DS(),Rl||(Sl(),Rl=!0),A_.add(e,t),t.A=0}}function V_(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=ou(dt(t.Ma,t),gR(t,t.A)),t.A++,!0)}V.Ma=function(){if(this.u=null,pR(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=ou(dt(this.jb,this),t)}};V.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,It(10),Ed(this),pR(this))};function O_(t){t.B!=null&&($.clearTimeout(t.B),t.B=null)}function pR(t){t.g=new lu(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=ir(t.wa);ue(e,"RID","rpc"),ue(e,"SID",t.K),ue(e,"AID",t.V),ue(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ue(e,"TO",t.qa),ue(e,"TYPE","xmlhttp"),hu(t,e),t.o&&t.s&&b_(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=yd(ir(e)),n.u=null,n.S=!0,qS(n,t)}V.ib=function(){this.v!=null&&(this.v=null,Ed(this),V_(this),It(19))};function dh(t){t.v!=null&&($.clearTimeout(t.v),t.v=null)}function mR(t,e){var n=null;if(t.g==e){dh(t),O_(t),t.g=null;var r=2}else if(cm(t.i,e))n=e.F,nR(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;r=pd(),rt(r,new US(r,n)),Td(t)}else fR(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(r==1&&LF(t,e)||r==2&&V_(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Ni(t,5);break;case 4:Ni(t,10);break;case 3:Ni(t,6);break;default:Ni(t,2)}}}function gR(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Ni(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=dt(t.pb,t);n||(n=new Bi("//www.google.com/images/cleardot.gif"),$.location&&$.location.protocol=="http"||ch(n,"https"),yd(n)),xF(n.toString(),r)}else It(2);t.H=0,t.h&&t.h.za(e),_R(t),hR(t)}V.pb=function(t){t?(this.l.info("Successfully pinged google.com"),It(2)):(this.l.info("Failed to ping google.com"),It(1))};function _R(t){if(t.H=0,t.ma=[],t.h){const e=rR(t.i);(e.length!=0||t.j.length!=0)&&(zw(t.ma,e),zw(t.ma,t.j),t.i.i.length=0,g_(t.j),t.j.length=0),t.h.ya()}}function yR(t,e,n){var r=n instanceof Bi?ir(n):new Bi(n);if(r.g!="")e&&(r.g=e+"."+r.g),hh(r,r.m);else{var i=$.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Bi(null);r&&ch(s,r),e&&(s.g=e),i&&hh(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&ue(r,n,e),ue(r,"VER",t.ra),hu(t,r),r}function vR(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Re(new vd({ob:n})):new Re(t.va),e.Oa(t.J),e}V.isActive=function(){return!!this.h&&this.h.isActive(this)};function wR(){}V=wR.prototype;V.Ba=function(){};V.Aa=function(){};V.za=function(){};V.ya=function(){};V.isActive=function(){return!0};V.Va=function(){};function fh(){if(go&&!(10<=Number(Q2)))throw Error("Environmental error: no available transport.")}fh.prototype.g=function(t,e){return new qt(t,e)};function qt(t,e){He.call(this),this.g=new cR(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Tl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Tl(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new $o(this)}Ke(qt,He);qt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;It(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=yR(t,null,t.Y),Td(t)};qt.prototype.close=function(){D_(this.g)};qt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=T_(t),t=n);e.j.push(new SF(e.fb++,t)),e.H==3&&Td(e)};qt.prototype.N=function(){this.g.h=null,delete this.j,D_(this.g),delete this.g,qt.$.N.call(this)};function IR(t){C_.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ke(IR,C_);function ER(){k_.call(this),this.status=1}Ke(ER,k_);function $o(t){this.g=t}Ke($o,wR);$o.prototype.Ba=function(){rt(this.g,"a")};$o.prototype.Aa=function(t){rt(this.g,new IR(t))};$o.prototype.za=function(t){rt(this.g,new ER)};$o.prototype.ya=function(){rt(this.g,"b")};function MF(){this.blockSize=-1}function _n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ke(_n,MF);_n.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function jf(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}_n.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)jf(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){jf(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){jf(this,r),i=0;break}}this.h=i,this.i+=e};_n.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ie(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var FF={};function L_(t){return-128<=t&&128>t?G2(t,function(e){return new ie([e|0],0>e?-1:0)}):new ie([t|0],0>t?-1:0)}function xn(t){if(isNaN(t)||!isFinite(t))return no;if(0>t)return Ze(xn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=hm;return new ie(e,0)}function TR(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ze(TR(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=xn(Math.pow(e,8)),r=no,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=xn(Math.pow(e,s)),r=r.R(s).add(xn(o))):(r=r.R(n),r=r.add(xn(o)))}return r}var hm=4294967296,no=L_(0),dm=L_(1),eI=L_(16777216);V=ie.prototype;V.ea=function(){if(Yt(this))return-Ze(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:hm+r)*e,e*=hm}return t};V.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Gn(this))return"0";if(Yt(this))return"-"+Ze(this).toString(t);for(var e=xn(Math.pow(t,6)),n=this,r="";;){var i=mh(n,e).g;n=ph(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Gn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};V.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Gn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Yt(t){return t.h==-1}V.X=function(t){return t=ph(this,t),Yt(t)?-1:Gn(t)?0:1};function Ze(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ie(n,~t.h).add(dm)}V.abs=function(){return Yt(this)?Ze(this):this};V.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new ie(n,n[n.length-1]&-2147483648?-1:0)};function ph(t,e){return t.add(Ze(e))}V.R=function(t){if(Gn(this)||Gn(t))return no;if(Yt(this))return Yt(t)?Ze(this).R(Ze(t)):Ze(Ze(this).R(t));if(Yt(t))return Ze(this.R(Ze(t)));if(0>this.X(eI)&&0>t.X(eI))return xn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Xu(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Xu(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Xu(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Xu(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ie(n,0)};function Xu(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function da(t,e){this.g=t,this.h=e}function mh(t,e){if(Gn(e))throw Error("division by zero");if(Gn(t))return new da(no,no);if(Yt(t))return e=mh(Ze(t),e),new da(Ze(e.g),Ze(e.h));if(Yt(e))return e=mh(t,Ze(e)),new da(Ze(e.g),e.h);if(30<t.g.length){if(Yt(t)||Yt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=dm,r=e;0>=r.X(t);)n=tI(n),r=tI(r);var i=ws(n,1),s=ws(r,1);for(r=ws(r,2),n=ws(n,2);!Gn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=ws(r,1),n=ws(n,1)}return e=ph(t,i.R(e)),new da(i,e)}for(i=no;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=xn(n),o=s.R(e);Yt(o)||0<o.X(t);)n-=r,s=xn(n),o=s.R(e);Gn(s)&&(s=dm),i=i.add(s),t=ph(t,o)}return new da(i,t)}V.gb=function(t){return mh(this,t).h};V.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ie(n,this.h&t.h)};V.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ie(n,this.h|t.h)};V.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ie(n,this.h^t.h)};function tI(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ie(n,t.h)}function ws(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new ie(i,t.h)}fh.prototype.createWebChannel=fh.prototype.g;qt.prototype.send=qt.prototype.u;qt.prototype.open=qt.prototype.m;qt.prototype.close=qt.prototype.close;md.NO_ERROR=0;md.TIMEOUT=8;md.HTTP_ERROR=6;BS.COMPLETE="complete";jS.EventType=au;au.OPEN="a";au.CLOSE="b";au.ERROR="c";au.MESSAGE="d";He.prototype.listen=He.prototype.O;Re.prototype.listenOnce=Re.prototype.P;Re.prototype.getLastError=Re.prototype.Sa;Re.prototype.getLastErrorCode=Re.prototype.Ia;Re.prototype.getStatus=Re.prototype.da;Re.prototype.getResponseJson=Re.prototype.Wa;Re.prototype.getResponseText=Re.prototype.ja;Re.prototype.send=Re.prototype.ha;Re.prototype.setWithCredentials=Re.prototype.Oa;_n.prototype.digest=_n.prototype.l;_n.prototype.reset=_n.prototype.reset;_n.prototype.update=_n.prototype.j;ie.prototype.add=ie.prototype.add;ie.prototype.multiply=ie.prototype.R;ie.prototype.modulo=ie.prototype.gb;ie.prototype.compare=ie.prototype.X;ie.prototype.toNumber=ie.prototype.ea;ie.prototype.toString=ie.prototype.toString;ie.prototype.getBits=ie.prototype.D;ie.fromNumber=xn;ie.fromString=TR;var UF=function(){return new fh},BF=function(){return pd()},$f=md,jF=BS,$F=hs,nI={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Ju=jS,zF=Re,qF=_n,ro=ie;const rI="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}qe.UNAUTHENTICATED=new qe(null),qe.GOOGLE_CREDENTIALS=new qe("google-credentials-uid"),qe.FIRST_PARTY=new qe("first-party-uid"),qe.MOCK_USER=new qe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zo="10.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr=new Gh("@firebase/firestore");function Rs(){return Hr.logLevel}function WF(t){Hr.setLogLevel(t)}function R(t,...e){if(Hr.logLevel<=K.DEBUG){const n=e.map(M_);Hr.debug(`Firestore (${zo}): ${t}`,...n)}}function be(t,...e){if(Hr.logLevel<=K.ERROR){const n=e.map(M_);Hr.error(`Firestore (${zo}): ${t}`,...n)}}function yn(t,...e){if(Hr.logLevel<=K.WARN){const n=e.map(M_);Hr.warn(`Firestore (${zo}): ${t}`,...n)}}function M_(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t="Unexpected state"){const e=`FIRESTORE (${zo}) INTERNAL ASSERTION FAILED: `+t;throw be(e),new Error(e)}function B(t,e){t||L()}function GF(t,e){t||L()}function D(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class A extends ht{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class HF{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(qe.UNAUTHENTICATED))}shutdown(){}}class KF{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class QF{constructor(e){this.t=e,this.currentUser=qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Ge;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ge,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{R("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(R("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ge)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(R("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(B(typeof r.accessToken=="string"),new AR(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return B(e===null||typeof e=="string"),new qe(e)}}class YF{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=qe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class XF{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new YF(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class JF{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ZF{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&R("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,R("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{R("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):R("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(B(typeof n.token=="string"),this.R=n.token,new JF(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eU(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=eU(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function z(t,e){return t<e?-1:t>e?1:0}function _o(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function RR(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new A(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new A(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new A(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new A(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ge.fromMillis(Date.now())}static fromDate(e){return ge.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ge(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?z(this.nanoseconds,e.nanoseconds):z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.timestamp=e}static fromTimestamp(e){return new j(e)}static min(){return new j(new ge(0,0))}static max(){return new j(new ge(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n,r){n===void 0?n=0:n>e.length&&L(),r===void 0?r=e.length-n:r>e.length-n&&L(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Nl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Nl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class J extends Nl{construct(e,n,r){return new J(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new A(T.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new J(n)}static emptyPath(){return new J([])}}const tU=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pe extends Nl{construct(e,n,r){return new pe(e,n,r)}static isValidIdentifier(e){return tU.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new pe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new A(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new A(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new A(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new A(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new pe(n)}static emptyPath(){return new pe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.path=e}static fromPath(e){return new b(J.fromString(e))}static fromName(e){return new b(J.fromString(e).popFirst(5))}static empty(){return new b(J.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&J.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return J.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new b(new J(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function fm(t){return t.fields.find(e=>e.kind===2)}function wi(t){return t.fields.filter(e=>e.kind!==2)}gh.UNKNOWN_ID=-1;class wc{constructor(e,n){this.fieldPath=e,this.kind=n}}class bl{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new bl(0,Wt.min())}}function PR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=j.fromTimestamp(r===1e9?new ge(n+1,0):new ge(n,r));return new Wt(i,b.empty(),e)}function CR(t){return new Wt(t.readTime,t.key,-1)}class Wt{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Wt(j.min(),b.empty(),-1)}static max(){return new Wt(j.max(),b.empty(),-1)}}function F_(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=b.comparator(t.documentKey,e.documentKey),n!==0?n:z(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class xR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ci(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==kR)throw t;R("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&L(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new w((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof w?n:w.resolve(n)}catch(n){return w.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):w.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):w.reject(n)}static resolve(e){return new w((n,r)=>{n(e)})}static reject(e){return new w((n,r)=>{r(e)})}static waitFor(e){return new w((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=w.resolve(!1);for(const r of e)n=n.next(i=>i?w.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new w((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new w((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new Ge,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new qa(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=U_(r.target.error);this.V.reject(new qa(e,i))}}static open(e,n,r,i){try{return new Ad(n,e.transaction(i,r))}catch(s){throw new qa(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(R("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new rU(n)}}class dn{constructor(e,n,r){this.name=e,this.version=n,this.p=r,dn.S(Ie())===12.2&&be("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return R("SimpleDb","Removing database:",e),Ii(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!pl())return!1;if(dn.C())return!0;const e=Ie(),n=dn.S(e),r=0<n&&n<10,i=dn.v(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(R("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new qa(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new A(T.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new A(T.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new qa(e,o))},i.onupgradeneeded=s=>{R("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.N(o,i.transaction,s.oldVersion,this.version).next(()=>{R("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=Ad.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(u=>(a.g(),u)).catch(u=>(a.abort(u),w.reject(u))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,u=l.name!=="FirebaseError"&&o<3;if(R("SimpleDb","Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class nU{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return Ii(this.k.delete())}}class qa extends A{constructor(e,n){super(T.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function hi(t){return t.name==="IndexedDbTransactionError"}class rU{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(R("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(R("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Ii(r)}add(e){return R("SimpleDb","ADD",this.store.name,e,e),Ii(this.store.add(e))}get(e){return Ii(this.store.get(e)).next(n=>(n===void 0&&(n=null),R("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return R("SimpleDb","DELETE",this.store.name,e),Ii(this.store.delete(e))}count(){return R("SimpleDb","COUNT",this.store.name),Ii(this.store.count())}W(e,n){const r=this.options(e,n);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.G(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new w((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}j(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new w((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}H(e,n){R("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.J=!1;const i=this.cursor(r);return this.G(i,(s,o,a)=>a.delete())}Y(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.G(i,n)}Z(e){const n=this.cursor({});return new w((r,i)=>{n.onerror=s=>{const o=U_(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,n){const r=[];return new w((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new nU(a),u=n(a.primaryKey,a.value,l);if(u instanceof w){const c=u.catch(h=>(l.done(),w.reject(h)));r.push(c)}l.isDone?i():l.$===null?a.continue():a.continue(l.$)}}).next(()=>w.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Ii(t){return new w((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=U_(r.target.error);n(i)}})}let iI=!1;function U_(t){const e=dn.S(Ie());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new A("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return iI||(iI=!0,setTimeout(()=>{throw r},0)),r}}return t}class iU{constructor(e,n){this.asyncQueue=e,this.X=n,this.task=null}start(){this.ee(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ee(e){R("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{R("IndexBackiller",`Documents written: ${await this.X.te()}`)}catch(n){hi(n)?R("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await ci(n)}await this.ee(6e4)})}}class sU{constructor(e,n){this.localStore=e,this.persistence=n}async te(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.ne(n,e))}ne(e,n){const r=new Set;let i=n,s=!0;return w.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return R("IndexBackiller",`Processing collection: ${o}`),this.re(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}re(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ie(i,s)).next(a=>(R("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}ie(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=CR(s);F_(o,r)>0&&(r=o)}),new Wt(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}bt._e=-1;function du(t){return t==null}function Dl(t){return t===0&&1/t==-1/0}function NR(t){return typeof t=="number"&&Number.isInteger(t)&&!Dl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=sI(e)),e=oU(t.get(n),e);return sI(e)}function oU(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function sI(t){return t+""}function Nn(t){const e=t.length;if(B(e>=2),e===2)return B(t.charAt(0)===""&&t.charAt(1)===""),J.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&L(),t.charAt(o+1)){case"":const a=t.substring(s,o);let l;i.length===0?l=a:(i+=a,l=i,i=""),r.push(l);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:L()}s=o+2}return new J(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(t,e){return[t,Tt(e)]}function bR(t,e,n){return[t,Tt(e),n]}const aU={},lU=["prefixPath","collectionGroup","readTime","documentId"],uU=["prefixPath","collectionGroup","documentId"],cU=["collectionGroup","readTime","prefixPath","documentId"],hU=["canonicalId","targetId"],dU=["targetId","path"],fU=["path","targetId"],pU=["collectionId","parent"],mU=["indexId","uid"],gU=["uid","sequenceNumber"],_U=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],yU=["indexId","uid","orderedDocumentKey"],vU=["userId","collectionPath","documentId"],wU=["userId","collectionPath","largestBatchId"],IU=["userId","collectionGroup","largestBatchId"],DR=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],EU=[...DR,"documentOverlays"],VR=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],OR=VR,TU=[...OR,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm extends xR{constructor(e,n){super(),this.ae=e,this.currentSequenceNumber=n}}function Qe(t,e){const n=D(t);return dn.M(n.ae,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aI(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ds(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function LR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e,n){this.comparator=e,this.root=n||Je.EMPTY}insert(e,n){return new ae(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Je.BLACK,null,null))}remove(e){return new ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Zu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Zu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Zu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Zu(this.root,e,this.comparator,!0)}}class Zu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Je{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Je.RED,this.left=i??Je.EMPTY,this.right=s??Je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Je(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Je.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw L();const e=this.left.check();if(e!==this.right.check())throw L();return e+(this.isRed()?0:1)}}Je.EMPTY=null,Je.RED=!0,Je.BLACK=!1;Je.EMPTY=new class{constructor(){this.size=0}get key(){throw L()}get value(){throw L()}get color(){throw L()}get left(){throw L()}get right(){throw L()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Je(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.comparator=e,this.data=new ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new lI(this.data.getIterator())}getIteratorFrom(e){return new lI(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof se)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new se(this.comparator);return n.data=e,n}}class lI{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Is(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.fields=e,e.sort(pe.comparator)}static empty(){return new Dt([])}unionWith(e){let n=new se(pe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Dt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return _o(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AU(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new MR("Invalid base64 string: "+s):s}}(e);return new Be(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Be(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Be.EMPTY_BYTE_STRING=new Be("");const SU=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Kr(t){if(B(!!t),typeof t=="string"){let e=0;const n=SU.exec(t);if(B(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ae(t.seconds),nanos:Ae(t.nanos)}}function Ae(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Qr(t){return typeof t=="string"?Be.fromBase64String(t):Be.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function B_(t){const e=t.mapValue.fields.__previous_value__;return Sd(e)?B_(e):e}function Vl(t){const e=Kr(t.mapValue.fields.__local_write_time__.timestampValue);return new ge(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RU{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Yr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Yr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Yr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Ec={nullValue:"NULL_VALUE"};function Ji(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Sd(t)?4:FR(t)?9007199254740991:10:L()}function Fn(t,e){if(t===e)return!0;const n=Ji(t);if(n!==Ji(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Vl(t).isEqual(Vl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Kr(i.timestampValue),a=Kr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Qr(i.bytesValue).isEqual(Qr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ae(i.geoPointValue.latitude)===Ae(s.geoPointValue.latitude)&&Ae(i.geoPointValue.longitude)===Ae(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ae(i.integerValue)===Ae(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ae(i.doubleValue),a=Ae(s.doubleValue);return o===a?Dl(o)===Dl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return _o(t.arrayValue.values||[],e.arrayValue.values||[],Fn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(aI(o)!==aI(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Fn(o[l],a[l])))return!1;return!0}(t,e);default:return L()}}function Ol(t,e){return(t.values||[]).find(n=>Fn(n,e))!==void 0}function Xr(t,e){if(t===e)return 0;const n=Ji(t),r=Ji(e);if(n!==r)return z(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return z(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Ae(s.integerValue||s.doubleValue),l=Ae(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return uI(t.timestampValue,e.timestampValue);case 4:return uI(Vl(t),Vl(e));case 5:return z(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Qr(s),l=Qr(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=z(a[u],l[u]);if(c!==0)return c}return z(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=z(Ae(s.latitude),Ae(o.latitude));return a!==0?a:z(Ae(s.longitude),Ae(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=Xr(a[u],l[u]);if(c)return c}return z(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Nr.mapValue&&o===Nr.mapValue)return 0;if(s===Nr.mapValue)return 1;if(o===Nr.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const d=z(l[h],c[h]);if(d!==0)return d;const f=Xr(a[l[h]],u[c[h]]);if(f!==0)return f}return z(l.length,c.length)}(t.mapValue,e.mapValue);default:throw L()}}function uI(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return z(t,e);const n=Kr(t),r=Kr(e),i=z(n.seconds,r.seconds);return i!==0?i:z(n.nanos,r.nanos)}function yo(t){return mm(t)}function mm(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Kr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Qr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return b.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=mm(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${mm(n.fields[o])}`;return i+"}"}(t.mapValue):L()}function Zi(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function gm(t){return!!t&&"integerValue"in t}function Ll(t){return!!t&&"arrayValue"in t}function cI(t){return!!t&&"nullValue"in t}function hI(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Tc(t){return!!t&&"mapValue"in t}function Wa(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ds(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Wa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Wa(t.arrayValue.values[n]);return e}return Object.assign({},t)}function FR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function PU(t){return"nullValue"in t?Ec:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?Zi(Yr.empty(),b.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:L()}function CU(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?Zi(Yr.empty(),b.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?Nr:L()}function dI(t,e){const n=Xr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function fI(t,e){const n=Xr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.value=e}static empty(){return new et({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Tc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Wa(n)}setAll(e){let n=pe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Wa(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Tc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Fn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Tc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ds(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new et(Wa(this.value))}}function UR(t){const e=[];return ds(t.fields,(n,r)=>{const i=new pe([n]);if(Tc(r)){const s=UR(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Dt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ce(e,0,j.min(),j.min(),j.min(),et.empty(),0)}static newFoundDocument(e,n,r,i){return new ce(e,1,n,j.min(),r,i,0)}static newNoDocument(e,n){return new ce(e,2,n,j.min(),j.min(),et.empty(),0)}static newUnknownDocument(e,n){return new ce(e,3,n,j.min(),j.min(),et.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(j.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=et.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=j.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ce&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ce(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,n){this.position=e,this.inclusive=n}}function pI(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=b.comparator(b.fromName(o.referenceValue),n.key):r=Xr(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function mI(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Fn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e,n="asc"){this.field=e,this.dir=n}}function kU(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{}class Q extends BR{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new xU(e,n,r):n==="array-contains"?new DU(e,r):n==="in"?new GR(e,r):n==="not-in"?new VU(e,r):n==="array-contains-any"?new OU(e,r):new Q(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new NU(e,r):new bU(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Xr(n,this.value)):n!==null&&Ji(this.value)===Ji(n)&&this.matchesComparison(Xr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return L()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ne extends BR{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new ne(e,n)}matches(e){return vo(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function vo(t){return t.op==="and"}function _m(t){return t.op==="or"}function j_(t){return jR(t)&&vo(t)}function jR(t){for(const e of t.filters)if(e instanceof ne)return!1;return!0}function ym(t){if(t instanceof Q)return t.field.canonicalString()+t.op.toString()+yo(t.value);if(j_(t))return t.filters.map(e=>ym(e)).join(",");{const e=t.filters.map(n=>ym(n)).join(",");return`${t.op}(${e})`}}function $R(t,e){return t instanceof Q?function(r,i){return i instanceof Q&&r.op===i.op&&r.field.isEqual(i.field)&&Fn(r.value,i.value)}(t,e):t instanceof ne?function(r,i){return i instanceof ne&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&$R(o,i.filters[a]),!0):!1}(t,e):void L()}function zR(t,e){const n=t.filters.concat(e);return ne.create(n,t.op)}function qR(t){return t instanceof Q?function(n){return`${n.field.canonicalString()} ${n.op} ${yo(n.value)}`}(t):t instanceof ne?function(n){return n.op.toString()+" {"+n.getFilters().map(qR).join(" ,")+"}"}(t):"Filter"}class xU extends Q{constructor(e,n,r){super(e,n,r),this.key=b.fromName(r.referenceValue)}matches(e){const n=b.comparator(e.key,this.key);return this.matchesComparison(n)}}class NU extends Q{constructor(e,n){super(e,"in",n),this.keys=WR("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class bU extends Q{constructor(e,n){super(e,"not-in",n),this.keys=WR("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function WR(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>b.fromName(r.referenceValue))}class DU extends Q{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ll(n)&&Ol(n.arrayValue,this.value)}}class GR extends Q{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ol(this.value.arrayValue,n)}}class VU extends Q{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ol(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ol(this.value.arrayValue,n)}}class OU extends Q{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ll(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ol(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LU{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function vm(t,e=null,n=[],r=[],i=null,s=null,o=null){return new LU(t,e,n,r,i,s,o)}function es(t){const e=D(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>ym(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),du(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>yo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>yo(r)).join(",")),e.ce=n}return e.ce}function fu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!kU(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!$R(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!mI(t.startAt,e.startAt)&&mI(t.endAt,e.endAt)}function _h(t){return b.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function yh(t,e){return t.filters.filter(n=>n instanceof Q&&n.field.isEqual(e))}function gI(t,e,n){let r=Ec,i=!0;for(const s of yh(t,e)){let o=Ec,a=!0;switch(s.op){case"<":case"<=":o=PU(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Ec}dI({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];dI({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function _I(t,e,n){let r=Nr,i=!0;for(const s of yh(t,e)){let o=Nr,a=!0;switch(s.op){case">=":case">":o=CU(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Nr}fI({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];fI({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function HR(t,e,n,r,i,s,o,a){return new dr(t,e,n,r,i,s,o,a)}function qo(t){return new dr(t)}function yI(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function $_(t){return t.collectionGroup!==null}function io(t){const e=D(t);if(e.le===null){e.le=[];const n=new Set;for(const s of e.explicitOrderBy)e.le.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new se(pe.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.le.push(new Ml(s,r))}),n.has(pe.keyField().canonicalString())||e.le.push(new Ml(pe.keyField(),r))}return e.le}function At(t){const e=D(t);return e.he||(e.he=MU(e,io(t))),e.he}function MU(t,e){if(t.limitType==="F")return vm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ml(i.field,s)});const n=t.endAt?new Jr(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Jr(t.startAt.position,t.startAt.inclusive):null;return vm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function wm(t,e){const n=t.filters.concat([e]);return new dr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function vh(t,e,n){return new dr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function pu(t,e){return fu(At(t),At(e))&&t.limitType===e.limitType}function KR(t){return`${es(At(t))}|lt:${t.limitType}`}function Ps(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>qR(i)).join(", ")}]`),du(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>yo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>yo(i)).join(",")),`Target(${r})`}(At(t))}; limitType=${t.limitType})`}function mu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):b.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of io(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=pI(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,io(r),i)||r.endAt&&!function(o,a,l){const u=pI(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,io(r),i))}(t,e)}function QR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function YR(t){return(e,n)=>{let r=!1;for(const i of io(t)){const s=FU(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function FU(t,e,n){const r=t.field.isKeyField()?b.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Xr(l,u):L()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return L()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ds(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return LR(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UU=new ae(b.comparator);function Vt(){return UU}const XR=new ae(b.comparator);function Pa(...t){let e=XR;for(const n of t)e=e.insert(n.key,n);return e}function JR(t){let e=XR;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function bn(){return Ga()}function ZR(){return Ga()}function Ga(){return new di(t=>t.toString(),(t,e)=>t.isEqual(e))}const BU=new ae(b.comparator),jU=new se(b.comparator);function q(...t){let e=jU;for(const n of t)e=e.add(n);return e}const $U=new se(z);function z_(){return $U}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e1(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Dl(e)?"-0":e}}function t1(t){return{integerValue:""+t}}function n1(t,e){return NR(e)?t1(e):e1(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(){this._=void 0}}function zU(t,e,n){return t instanceof wo?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Sd(s)&&(s=B_(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ts?i1(t,e):t instanceof ns?s1(t,e):function(i,s){const o=r1(i,s),a=vI(o)+vI(i.Ie);return gm(o)&&gm(i.Ie)?t1(a):e1(i.serializer,a)}(t,e)}function qU(t,e,n){return t instanceof ts?i1(t,e):t instanceof ns?s1(t,e):n}function r1(t,e){return t instanceof Io?function(r){return gm(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class wo extends Rd{}class ts extends Rd{constructor(e){super(),this.elements=e}}function i1(t,e){const n=o1(e);for(const r of t.elements)n.some(i=>Fn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ns extends Rd{constructor(e){super(),this.elements=e}}function s1(t,e){let n=o1(e);for(const r of t.elements)n=n.filter(i=>!Fn(i,r));return{arrayValue:{values:n}}}class Io extends Rd{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function vI(t){return Ae(t.integerValue||t.doubleValue)}function o1(t){return Ll(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e,n){this.field=e,this.transform=n}}function WU(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ts&&i instanceof ts||r instanceof ns&&i instanceof ns?_o(r.elements,i.elements,Fn):r instanceof Io&&i instanceof Io?Fn(r.Ie,i.Ie):r instanceof wo&&i instanceof wo}(t.transform,e.transform)}class GU{constructor(e,n){this.version=e,this.transformResults=n}}class me{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new me}static exists(e){return new me(void 0,e)}static updateTime(e){return new me(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ac(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Pd{}function a1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Go(t.key,me.none()):new Wo(t.key,t.data,me.none());{const n=t.data,r=et.empty();let i=new se(pe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new fr(t.key,r,new Dt(i.toArray()),me.none())}}function HU(t,e,n){t instanceof Wo?function(i,s,o){const a=i.value.clone(),l=II(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof fr?function(i,s,o){if(!Ac(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=II(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(l1(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ha(t,e,n,r){return t instanceof Wo?function(s,o,a,l){if(!Ac(s.precondition,o))return a;const u=s.value.clone(),c=EI(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof fr?function(s,o,a,l){if(!Ac(s.precondition,o))return a;const u=EI(s.fieldTransforms,l,o),c=o.data;return c.setAll(l1(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return Ac(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function KU(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=r1(r.transform,i||null);s!=null&&(n===null&&(n=et.empty()),n.set(r.field,s))}return n||null}function wI(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&_o(r,i,(s,o)=>WU(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Wo extends Pd{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class fr extends Pd{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function l1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function II(t,e,n){const r=new Map;B(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,qU(o,a,n[i]))}return r}function EI(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,zU(s,o,e))}return r}class Go extends Pd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class q_ extends Pd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&HU(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ha(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ha(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=ZR();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=a1(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(j.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),q())}isEqual(e){return this.batchId===e.batchId&&_o(this.mutations,e.mutations,(n,r)=>wI(n,r))&&_o(this.baseMutations,e.baseMutations,(n,r)=>wI(n,r))}}class G_{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){B(e.mutations.length===r.length);let i=function(){return BU}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new G_(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QU{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe,X;function u1(t){switch(t){default:return L();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function c1(t){if(t===void 0)return be("GRPC error has no .code"),T.UNKNOWN;switch(t){case Oe.OK:return T.OK;case Oe.CANCELLED:return T.CANCELLED;case Oe.UNKNOWN:return T.UNKNOWN;case Oe.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case Oe.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case Oe.INTERNAL:return T.INTERNAL;case Oe.UNAVAILABLE:return T.UNAVAILABLE;case Oe.UNAUTHENTICATED:return T.UNAUTHENTICATED;case Oe.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case Oe.NOT_FOUND:return T.NOT_FOUND;case Oe.ALREADY_EXISTS:return T.ALREADY_EXISTS;case Oe.PERMISSION_DENIED:return T.PERMISSION_DENIED;case Oe.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case Oe.ABORTED:return T.ABORTED;case Oe.OUT_OF_RANGE:return T.OUT_OF_RANGE;case Oe.UNIMPLEMENTED:return T.UNIMPLEMENTED;case Oe.DATA_LOSS:return T.DATA_LOSS;default:return L()}}(X=Oe||(Oe={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h1(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YU=new ro([4294967295,4294967295],0);function TI(t){const e=h1().encode(t),n=new qF;return n.update(e),new Uint8Array(n.digest())}function AI(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ro([n,r],0),new ro([i,s],0)]}class K_{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ca(`Invalid padding: ${n}`);if(r<0)throw new Ca(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ca(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ca(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=ro.fromNumber(this.Te)}de(e,n,r){let i=e.add(n.multiply(ro.fromNumber(r)));return i.compare(YU)===1&&(i=new ro([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=TI(e),[r,i]=AI(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new K_(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=TI(e),[r,i]=AI(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ca extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,yu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new _u(j.min(),i,new ae(z),Vt(),q())}}class yu{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new yu(r,n,q(),q(),q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e,n,r,i){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=i}}class d1{constructor(e,n){this.targetId=e,this.fe=n}}class f1{constructor(e,n,r=Be.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class SI{constructor(){this.ge=0,this.pe=PI(),this.ye=Be.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=q(),n=q(),r=q();return this.pe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:L()}}),new yu(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=PI()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,B(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class XU{constructor(e){this.Le=e,this.ke=new Map,this.qe=Vt(),this.Qe=RI(),this.Ke=new ae(z)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:L()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.fe.count,i=this.Ye(n);if(i){const s=i.target;if(_h(s))if(r===0){const o=new b(s.path);this.We(n,o,ce.newNoDocument(o,j.min()))}else B(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Qr(r).toUint8Array()}catch(l){if(l instanceof MR)return yn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new K_(o,i,s)}catch(l){return yn(l instanceof Ca?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&_h(a.target)){const l=new b(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,ce.newNoDocument(l,e))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=q();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(e));const i=new _u(e,n,this.Ke,this.qe,r);return this.qe=Vt(),this.Qe=RI(),this.Ke=new ae(z),i}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new SI,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new se(z),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||R("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new SI),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function RI(){return new ae(b.comparator)}function PI(){return new ae(b.comparator)}const JU=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),ZU=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),eB=(()=>({and:"AND",or:"OR"}))();class tB{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Im(t,e){return t.useProto3Json||du(e)?e:{value:e}}function Eo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function p1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function nB(t,e){return Eo(t,e.toTimestamp())}function Ve(t){return B(!!t),j.fromTimestamp(function(n){const r=Kr(n);return new ge(r.seconds,r.nanos)}(t))}function Q_(t,e){return function(r){return new J(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function m1(t){const e=J.fromString(t);return B(A1(e)),e}function Fl(t,e){return Q_(t.databaseId,e.path)}function Ln(t,e){const n=m1(e);if(n.get(1)!==t.databaseId.projectId)throw new A(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new A(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new b(_1(n))}function Em(t,e){return Q_(t.databaseId,e)}function g1(t){const e=m1(t);return e.length===4?J.emptyPath():_1(e)}function Ul(t){return new J(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function _1(t){return B(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function CI(t,e,n){return{name:Fl(t,e),fields:n.value.mapValue.fields}}function y1(t,e,n){const r=Ln(t,e.name),i=Ve(e.updateTime),s=e.createTime?Ve(e.createTime):j.min(),o=new et({mapValue:{fields:e.fields}}),a=ce.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function rB(t,e){return"found"in e?function(r,i){B(!!i.found),i.found.name,i.found.updateTime;const s=Ln(r,i.found.name),o=Ve(i.found.updateTime),a=i.found.createTime?Ve(i.found.createTime):j.min(),l=new et({mapValue:{fields:i.found.fields}});return ce.newFoundDocument(s,o,a,l)}(t,e):"missing"in e?function(r,i){B(!!i.missing),B(!!i.readTime);const s=Ln(r,i.missing),o=Ve(i.readTime);return ce.newNoDocument(s,o)}(t,e):L()}function iB(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:L()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(B(c===void 0||typeof c=="string"),Be.fromBase64String(c||"")):(B(c===void 0||c instanceof Uint8Array),Be.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?T.UNKNOWN:c1(u.code);return new A(c,u.message||"")}(o);n=new f1(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ln(t,r.document.name),s=Ve(r.document.updateTime),o=r.document.createTime?Ve(r.document.createTime):j.min(),a=new et({mapValue:{fields:r.document.fields}}),l=ce.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Sc(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ln(t,r.document),s=r.readTime?Ve(r.readTime):j.min(),o=ce.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Sc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ln(t,r.document),s=r.removedTargetIds||[];n=new Sc([],s,i,null)}else{if(!("filter"in e))return L();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new QU(i,s),a=r.targetId;n=new d1(a,o)}}return n}function Bl(t,e){let n;if(e instanceof Wo)n={update:CI(t,e.key,e.value)};else if(e instanceof Go)n={delete:Fl(t,e.key)};else if(e instanceof fr)n={update:CI(t,e.key,e.data),updateMask:cB(e.fieldMask)};else{if(!(e instanceof q_))return L();n={verify:Fl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof wo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ts)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ns)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Io)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw L()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:nB(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:L()}(t,e.precondition)),n}function Tm(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?me.updateTime(Ve(s.updateTime)):s.exists!==void 0?me.exists(s.exists):me.none()}(e.currentDocument):me.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let l=null;if("setToServerValue"in a)B(a.setToServerValue==="REQUEST_TIME"),l=new wo;else if("appendMissingElements"in a){const c=a.appendMissingElements.values||[];l=new ts(c)}else if("removeAllFromArray"in a){const c=a.removeAllFromArray.values||[];l=new ns(c)}else"increment"in a?l=new Io(o,a.increment):L();const u=pe.fromServerFormat(a.fieldPath);return new gu(u,l)}(t,i)):[];if(e.update){e.update.name;const i=Ln(t,e.update.name),s=new et({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const u=l.fieldPaths||[];return new Dt(u.map(c=>pe.fromServerFormat(c)))}(e.updateMask);return new fr(i,s,o,n,r)}return new Wo(i,s,n,r)}if(e.delete){const i=Ln(t,e.delete);return new Go(i,n)}if(e.verify){const i=Ln(t,e.verify);return new q_(i,n)}return L()}function sB(t,e){return t&&t.length>0?(B(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Ve(i.updateTime):Ve(s);return o.isEqual(j.min())&&(o=Ve(s)),new GU(o,i.transformResults||[])}(n,e))):[]}function v1(t,e){return{documents:[Em(t,e.path)]}}function w1(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Em(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Em(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return T1(ne.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:Cs(h.field),direction:aB(h.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Im(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function I1(t){let e=g1(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){B(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(h){const d=E1(h);return d instanceof ne&&j_(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(y){return new Ml(ks(y.field),function(I){switch(I){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,du(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new Jr(f,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,f=h.values||[];return new Jr(f,d)}(n.endAt)),HR(e,i,o,s,a,"F",l,u)}function oB(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function E1(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ks(n.unaryFilter.field);return Q.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ks(n.unaryFilter.field);return Q.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ks(n.unaryFilter.field);return Q.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ks(n.unaryFilter.field);return Q.create(o,"!=",{nullValue:"NULL_VALUE"});default:return L()}}(t):t.fieldFilter!==void 0?function(n){return Q.create(ks(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return L()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return ne.create(n.compositeFilter.filters.map(r=>E1(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return L()}}(n.compositeFilter.op))}(t):L()}function aB(t){return JU[t]}function lB(t){return ZU[t]}function uB(t){return eB[t]}function Cs(t){return{fieldPath:t.canonicalString()}}function ks(t){return pe.fromServerFormat(t.fieldPath)}function T1(t){return t instanceof Q?function(n){if(n.op==="=="){if(hI(n.value))return{unaryFilter:{field:Cs(n.field),op:"IS_NAN"}};if(cI(n.value))return{unaryFilter:{field:Cs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(hI(n.value))return{unaryFilter:{field:Cs(n.field),op:"IS_NOT_NAN"}};if(cI(n.value))return{unaryFilter:{field:Cs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Cs(n.field),op:lB(n.op),value:n.value}}}(t):t instanceof ne?function(n){const r=n.getFilters().map(i=>T1(i));return r.length===1?r[0]:{compositeFilter:{op:uB(n.op),filters:r}}}(t):L()}function cB(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function A1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,n,r,i,s=j.min(),o=j.min(),a=Be.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Hn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{constructor(e){this.ut=e}}function hB(t,e){let n;if(e.document)n=y1(t.ut,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=b.fromSegments(e.noDocument.path),i=is(e.noDocument.readTime);n=ce.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return L();{const r=b.fromSegments(e.unknownDocument.path),i=is(e.unknownDocument.version);n=ce.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new ge(i[0],i[1]);return j.fromTimestamp(s)}(e.readTime)),n}function kI(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:wh(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:Fl(s,o.key),fields:o.data.value.mapValue.fields,updateTime:Eo(s,o.version.toTimestamp()),createTime:Eo(s,o.createTime.toTimestamp())}}(t.ut,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:rs(e.version)};else{if(!e.isUnknownDocument())return L();r.unknownDocument={path:n.path.toArray(),version:rs(e.version)}}return r}function wh(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function rs(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function is(t){const e=new ge(t.seconds,t.nanoseconds);return j.fromTimestamp(e)}function Ei(t,e){const n=(e.baseMutations||[]).map(s=>Tm(t.ut,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Tm(t.ut,s)),i=ge.fromMillis(e.localWriteTimeMs);return new W_(e.batchId,i,n,r)}function ka(t){const e=is(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?is(t.lastLimboFreeSnapshotVersion):j.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){return B(s.documents.length===1),At(qo(g1(s.documents[0])))}(t.query):function(s){return At(I1(s))}(t.query),new Hn(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,Be.fromBase64String(t.resumeToken))}function R1(t,e){const n=rs(e.snapshotVersion),r=rs(e.lastLimboFreeSnapshotVersion);let i;i=_h(e.target)?v1(t.ut,e.target):w1(t.ut,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:es(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Y_(t){const e=I1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?vh(e,e.limit,"L"):e}function zf(t,e){return new H_(e.largestBatchId,Tm(t.ut,e.overlayMutation))}function xI(t,e){const n=e.path.lastSegment();return[t,Tt(e.path.popLast()),n]}function NI(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:rs(r.readTime),documentKey:Tt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dB{getBundleMetadata(e,n){return bI(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:is(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return bI(e).put(function(i){return{bundleId:i.id,createTime:rs(Ve(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return DI(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:Y_(s.bundledQuery),readTime:is(s.readTime)}}(r)})}saveNamedQuery(e,n){return DI(e).put(function(i){return{name:i.name,readTime:rs(Ve(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function bI(t){return Qe(t,"bundles")}function DI(t){return Qe(t,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e,n){this.serializer=e,this.userId=n}static ct(e,n){const r=n.uid||"";return new Cd(e,r)}getOverlay(e,n){return fa(e).get(xI(this.userId,n)).next(r=>r?zf(this.serializer,r):null)}getOverlays(e,n){const r=bn();return w.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new H_(n,o);i.push(this.lt(e,a))}),w.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(Tt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(fa(e).H("collectionPathOverlayIndex",a))}),w.waitFor(s)}getOverlaysForCollection(e,n,r){const i=bn(),s=Tt(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return fa(e).W("collectionPathOverlayIndex",o).next(a=>{for(const l of a){const u=zf(this.serializer,l);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=bn();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return fa(e).Y({index:"collectionGroupOverlayIndex",range:a},(l,u,c)=>{const h=zf(this.serializer,u);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):c.done()}).next(()=>s)}lt(e,n){return fa(e).put(function(i,s,o){const[a,l,u]=xI(s,o.mutation.key);return{userId:s,collectionPath:l,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Bl(i.ut,o.mutation)}}(this.serializer,this.userId,n))}}function fa(t){return Qe(t,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(){}ht(e,n){this.Pt(e,n),n.It()}Pt(e,n){if("nullValue"in e)this.Tt(n,5);else if("booleanValue"in e)this.Tt(n,10),n.Et(e.booleanValue?1:0);else if("integerValue"in e)this.Tt(n,15),n.Et(Ae(e.integerValue));else if("doubleValue"in e){const r=Ae(e.doubleValue);isNaN(r)?this.Tt(n,13):(this.Tt(n,15),Dl(r)?n.Et(0):n.Et(r))}else if("timestampValue"in e){const r=e.timestampValue;this.Tt(n,20),typeof r=="string"?n.dt(r):(n.dt(`${r.seconds||""}`),n.Et(r.nanos||0))}else if("stringValue"in e)this.At(e.stringValue,n),this.Rt(n);else if("bytesValue"in e)this.Tt(n,30),n.Vt(Qr(e.bytesValue)),this.Rt(n);else if("referenceValue"in e)this.ft(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.Tt(n,45),n.Et(r.latitude||0),n.Et(r.longitude||0)}else"mapValue"in e?FR(e)?this.Tt(n,Number.MAX_SAFE_INTEGER):(this.gt(e.mapValue,n),this.Rt(n)):"arrayValue"in e?(this.yt(e.arrayValue,n),this.Rt(n)):L()}At(e,n){this.Tt(n,25),this.wt(e,n)}wt(e,n){n.dt(e)}gt(e,n){const r=e.fields||{};this.Tt(n,55);for(const i of Object.keys(r))this.At(i,n),this.Pt(r[i],n)}yt(e,n){const r=e.values||[];this.Tt(n,50);for(const i of r)this.Pt(i,n)}ft(e,n){this.Tt(n,37),b.fromName(e).path.forEach(r=>{this.Tt(n,60),this.wt(r,n)})}Tt(e,n){e.Et(n)}Rt(e){e.Et(2)}}Ti.St=new Ti;function fB(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function VI(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=fB(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class pB{constructor(){this.buffer=new Uint8Array(1024),this.position=0}bt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Dt(r.value),r=n.next();this.Ct()}vt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ft(r.value),r=n.next();this.Mt()}xt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Dt(r);else if(r<2048)this.Dt(960|r>>>6),this.Dt(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Dt(480|r>>>12),this.Dt(128|63&r>>>6),this.Dt(128|63&r);else{const i=n.codePointAt(0);this.Dt(240|i>>>18),this.Dt(128|63&i>>>12),this.Dt(128|63&i>>>6),this.Dt(128|63&i)}}this.Ct()}Ot(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const i=n.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Nt(e){const n=this.Bt(e),r=VI(n);this.Lt(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}kt(e){const n=this.Bt(e),r=VI(n);this.Lt(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}qt(){this.Qt(255),this.Qt(255)}Kt(){this.$t(255),this.$t(255)}reset(){this.position=0}seed(e){this.Lt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Ut(){return this.buffer.slice(0,this.position)}Bt(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Dt(e){const n=255&e;n===0?(this.Qt(0),this.Qt(255)):n===255?(this.Qt(255),this.Qt(0)):this.Qt(n)}Ft(e){const n=255&e;n===0?(this.$t(0),this.$t(255)):n===255?(this.$t(255),this.$t(0)):this.$t(e)}Ct(){this.Qt(0),this.Qt(1)}Mt(){this.$t(0),this.$t(1)}Qt(e){this.Lt(1),this.buffer[this.position++]=e}$t(e){this.Lt(1),this.buffer[this.position++]=~e}Lt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class mB{constructor(e){this.Wt=e}Vt(e){this.Wt.bt(e)}dt(e){this.Wt.xt(e)}Et(e){this.Wt.Nt(e)}It(){this.Wt.qt()}}class gB{constructor(e){this.Wt=e}Vt(e){this.Wt.vt(e)}dt(e){this.Wt.Ot(e)}Et(e){this.Wt.kt(e)}It(){this.Wt.Kt()}}class pa{constructor(){this.Wt=new pB,this.Gt=new mB(this.Wt),this.zt=new gB(this.Wt)}seed(e){this.Wt.seed(e)}jt(e){return e===0?this.Gt:this.zt}Ut(){return this.Wt.Ut()}reset(){this.Wt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Ht(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Ai(this.indexId,this.documentKey,this.arrayValue,r)}}function _r(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=OI(t.arrayValue,e.arrayValue),n!==0?n:(n=OI(t.directionalValue,e.directionalValue),n!==0?n:b.comparator(t.documentKey,e.documentKey)))}function OI(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(e){this.Jt=new se((n,r)=>pe.comparator(n.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Yt=e.orderBy,this.Zt=[];for(const n of e.filters){const r=n;r.isInequality()?this.Jt=this.Jt.add(r):this.Zt.push(r)}}get Xt(){return this.Jt.size>1}en(e){if(B(e.collectionGroup===this.collectionId),this.Xt)return!1;const n=fm(e);if(n!==void 0&&!this.tn(n))return!1;const r=wi(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.tn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Jt.size>0){const a=this.Jt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const l=r[s];if(!this.nn(a,l)||!this.rn(this.Yt[o++],l))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Yt.length||!this.rn(this.Yt[o++],a))return!1}return!0}sn(){if(this.Xt)return null;let e=new se(pe.comparator);const n=[];for(const r of this.Zt)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new wc(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new wc(r.field,0))}for(const r of this.Yt)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new wc(r.field,r.dir==="asc"?0:1)));return new gh(gh.UNKNOWN_ID,this.collectionId,n,bl.empty())}tn(e){for(const n of this.Zt)if(this.nn(n,e))return!0;return!1}nn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}rn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P1(t){var e,n;if(B(t instanceof Q||t instanceof ne),t instanceof Q){if(t instanceof GR){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>Q.create(t.field,"==",s)))||[];return ne.create(i,"or")}return t}const r=t.filters.map(i=>P1(i));return ne.create(r,t.op)}function _B(t){if(t.getFilters().length===0)return[];const e=Rm(P1(t));return B(C1(e)),Am(e)||Sm(e)?[e]:e.getFilters()}function Am(t){return t instanceof Q}function Sm(t){return t instanceof ne&&j_(t)}function C1(t){return Am(t)||Sm(t)||function(n){if(n instanceof ne&&_m(n)){for(const r of n.getFilters())if(!Am(r)&&!Sm(r))return!1;return!0}return!1}(t)}function Rm(t){if(B(t instanceof Q||t instanceof ne),t instanceof Q)return t;if(t.filters.length===1)return Rm(t.filters[0]);const e=t.filters.map(r=>Rm(r));let n=ne.create(e,t.op);return n=Ih(n),C1(n)?n:(B(n instanceof ne),B(vo(n)),B(n.filters.length>1),n.filters.reduce((r,i)=>X_(r,i)))}function X_(t,e){let n;return B(t instanceof Q||t instanceof ne),B(e instanceof Q||e instanceof ne),n=t instanceof Q?e instanceof Q?function(i,s){return ne.create([i,s],"and")}(t,e):MI(t,e):e instanceof Q?MI(e,t):function(i,s){if(B(i.filters.length>0&&s.filters.length>0),vo(i)&&vo(s))return zR(i,s.getFilters());const o=_m(i)?i:s,a=_m(i)?s:i,l=o.filters.map(u=>X_(u,a));return ne.create(l,"or")}(t,e),Ih(n)}function MI(t,e){if(vo(e))return zR(e,t.getFilters());{const n=e.filters.map(r=>X_(t,r));return ne.create(n,"or")}}function Ih(t){if(B(t instanceof Q||t instanceof ne),t instanceof Q)return t;const e=t.getFilters();if(e.length===1)return Ih(e[0]);if(jR(t))return t;const n=e.map(i=>Ih(i)),r=[];return n.forEach(i=>{i instanceof Q?r.push(i):i instanceof ne&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:ne.create(r,t.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yB{constructor(){this.on=new J_}addToCollectionParentIndex(e,n){return this.on.add(n),w.resolve()}getCollectionParents(e,n){return w.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return w.resolve()}deleteFieldIndex(e,n){return w.resolve()}deleteAllFieldIndexes(e){return w.resolve()}createTargetIndexes(e,n){return w.resolve()}getDocumentsMatchingTarget(e,n){return w.resolve(null)}getIndexType(e,n){return w.resolve(0)}getFieldIndexes(e,n){return w.resolve([])}getNextCollectionGroupToUpdate(e){return w.resolve(null)}getMinOffset(e,n){return w.resolve(Wt.min())}getMinOffsetFromCollectionGroup(e,n){return w.resolve(Wt.min())}updateCollectionGroup(e,n,r){return w.resolve()}updateIndexEntries(e,n){return w.resolve()}}class J_{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new se(J.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new se(J.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec=new Uint8Array(0);class vB{constructor(e,n){this.user=e,this.databaseId=n,this._n=new J_,this.an=new di(r=>es(r),(r,i)=>fu(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this._n.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this._n.add(n)});const s={collectionId:r,parent:Tt(i)};return FI(e).put(s)}return w.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[RR(n),""],!1,!0);return FI(e).W(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(Nn(o.parent))}return r})}addFieldIndex(e,n){const r=ma(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=Ts(e);return s.next(a=>{o.put(NI(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=ma(e),i=Ts(e),s=Es(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=ma(e),r=Es(e),i=Ts(e);return n.H().next(()=>r.H()).next(()=>i.H())}createTargetIndexes(e,n){return w.forEach(this.un(n),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new LI(r).sn();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,n){const r=Es(e);let i=!0;const s=new Map;return w.forEach(this.un(n),o=>this.cn(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=q();const a=[];return w.forEach(s,(l,u)=>{R("IndexedDbIndexManager",`Using index ${function(g){return`id=${g.indexId}|cg=${g.collectionGroup}|f=${g.fields.map(E=>`${E.fieldPath}:${E.kind}`).join(",")}`}(l)} to execute ${es(n)}`);const c=function(g,E){const S=fm(E);if(S===void 0)return null;for(const C of yh(g,S.fieldPath))switch(C.op){case"array-contains-any":return C.value.arrayValue.values||[];case"array-contains":return[C.value]}return null}(u,l),h=function(g,E){const S=new Map;for(const C of wi(E))for(const N of yh(g,C.fieldPath))switch(N.op){case"==":case"in":S.set(C.fieldPath.canonicalString(),N.value);break;case"not-in":case"!=":return S.set(C.fieldPath.canonicalString(),N.value),Array.from(S.values())}return null}(u,l),d=function(g,E){const S=[];let C=!0;for(const N of wi(E)){const O=N.kind===0?gI(g,N.fieldPath,g.startAt):_I(g,N.fieldPath,g.startAt);S.push(O.value),C&&(C=O.inclusive)}return new Jr(S,C)}(u,l),f=function(g,E){const S=[];let C=!0;for(const N of wi(E)){const O=N.kind===0?_I(g,N.fieldPath,g.endAt):gI(g,N.fieldPath,g.endAt);S.push(O.value),C&&(C=O.inclusive)}return new Jr(S,C)}(u,l),y=this.ln(l,u,d),v=this.ln(l,u,f),I=this.hn(l,u,h),m=this.Pn(l.indexId,c,y,d.inclusive,v,f.inclusive,I);return w.forEach(m,p=>r.j(p,n.limit).next(g=>{g.forEach(E=>{const S=b.fromSegments(E.documentKey);o.has(S)||(o=o.add(S),a.push(S))})}))}).next(()=>a)}return w.resolve(null)})}un(e){let n=this.an.get(e);return n||(e.filters.length===0?n=[e]:n=_B(ne.create(e.filters,"and")).map(r=>vm(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.an.set(e,n),n)}Pn(e,n,r,i,s,o,a){const l=(n!=null?n.length:1)*Math.max(r.length,s.length),u=l/(n!=null?n.length:1),c=[];for(let h=0;h<l;++h){const d=n?this.In(n[h/u]):ec,f=this.Tn(e,d,r[h%u],i),y=this.En(e,d,s[h%u],o),v=a.map(I=>this.Tn(e,d,I,!0));c.push(...this.createRange(f,y,v))}return c}Tn(e,n,r,i){const s=new Ai(e,b.empty(),n,r);return i?s:s.Ht()}En(e,n,r,i){const s=new Ai(e,b.empty(),n,r);return i?s.Ht():s}cn(e,n){const r=new LI(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.en(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.un(n);return w.forEach(i,s=>this.cn(e,s).next(o=>{o?r!==0&&o.fields.length<function(l){let u=new se(pe.comparator),c=!1;for(const h of l.filters)for(const d of h.getFlattenedFilters())d.field.isKeyField()||(d.op==="array-contains"||d.op==="array-contains-any"?c=!0:u=u.add(d.field));for(const h of l.orderBy)h.field.isKeyField()||(u=u.add(h.field));return u.size+(c?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}dn(e,n){const r=new pa;for(const i of wi(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.jt(i.kind);Ti.St.ht(s,o)}return r.Ut()}In(e){const n=new pa;return Ti.St.ht(e,n.jt(0)),n.Ut()}An(e,n){const r=new pa;return Ti.St.ht(Zi(this.databaseId,n),r.jt(function(s){const o=wi(s);return o.length===0?0:o[o.length-1].kind}(e))),r.Ut()}hn(e,n,r){if(r===null)return[];let i=[];i.push(new pa);let s=0;for(const o of wi(e)){const a=r[s++];for(const l of i)if(this.Rn(n,o.fieldPath)&&Ll(a))i=this.Vn(i,o,a);else{const u=l.jt(o.kind);Ti.St.ht(a,u)}}return this.mn(i)}ln(e,n,r){return this.hn(e,n,r.position)}mn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Ut();return n}Vn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const l=new pa;l.seed(a.Ut()),Ti.St.ht(o,l.jt(n.kind)),s.push(l)}return s}Rn(e,n){return!!e.filters.find(r=>r instanceof Q&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=ma(e),i=Ts(e);return(n?r.W("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.W()).next(s=>{const o=[];return w.forEach(s,a=>i.get([a.indexId,this.uid]).next(l=>{o.push(function(c,h){const d=h?new bl(h.sequenceNumber,new Wt(is(h.readTime),new b(Nn(h.documentKey)),h.largestBatchId)):bl.empty(),f=c.fields.map(([y,v])=>new wc(pe.fromServerFormat(y),v));return new gh(c.indexId,c.collectionGroup,f,d)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:z(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=ma(e),s=Ts(e);return this.fn(e).next(o=>i.W("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>w.forEach(a,l=>s.put(NI(l.indexId,this.user,o,r)))))}updateIndexEntries(e,n){const r=new Map;return w.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?w.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),w.forEach(a,l=>this.gn(e,i,l).next(u=>{const c=this.pn(s,l);return u.isEqual(c)?w.resolve():this.yn(e,s,l,u,c)}))))})}wn(e,n,r,i){return Es(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.An(r,n.key),documentKey:n.key.path.toArray()})}Sn(e,n,r,i){return Es(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.An(r,n.key),n.key.path.toArray()])}gn(e,n,r){const i=Es(e);let s=new se(_r);return i.Y({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.An(r,n)])},(o,a)=>{s=s.add(new Ai(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}pn(e,n){let r=new se(_r);const i=this.dn(n,e);if(i==null)return r;const s=fm(n);if(s!=null){const o=e.data.field(s.fieldPath);if(Ll(o))for(const a of o.arrayValue.values||[])r=r.add(new Ai(n.indexId,e.key,this.In(a),i))}else r=r.add(new Ai(n.indexId,e.key,ec,i));return r}yn(e,n,r,i,s){R("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(l,u,c,h,d){const f=l.getIterator(),y=u.getIterator();let v=Is(f),I=Is(y);for(;v||I;){let m=!1,p=!1;if(v&&I){const g=c(v,I);g<0?p=!0:g>0&&(m=!0)}else v!=null?p=!0:m=!0;m?(h(I),I=Is(y)):p?(d(v),v=Is(f)):(v=Is(f),I=Is(y))}}(i,s,_r,a=>{o.push(this.wn(e,n,r,a))},a=>{o.push(this.Sn(e,n,r,a))}),w.waitFor(o)}fn(e){let n=1;return Ts(e).Y({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>_r(o,a)).filter((o,a,l)=>!a||_r(o,l[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=_r(o,e),l=_r(o,n);if(a===0)i[0]=e.Ht();else if(a>0&&l<0)i.push(o),i.push(o.Ht());else if(l>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.bn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,ec,[]],l=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,ec,[]];s.push(IDBKeyRange.bound(a,l))}return s}bn(e,n){return _r(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(UI)}getMinOffset(e,n){return w.mapArray(this.un(n),r=>this.cn(e,r).next(i=>i||L())).next(UI)}}function FI(t){return Qe(t,"collectionParents")}function Es(t){return Qe(t,"indexEntries")}function ma(t){return Qe(t,"indexConfiguration")}function Ts(t){return Qe(t,"indexState")}function UI(t){B(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;F_(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new Wt(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class kt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new kt(e,kt.DEFAULT_COLLECTION_PERCENTILE,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k1(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const l=r.Y({range:o},(c,h,d)=>(a++,d.delete()));s.push(l.next(()=>{B(a===1)}));const u=[];for(const c of n.mutations){const h=bR(e,c.key.path,n.batchId);s.push(i.delete(h)),u.push(c.key)}return w.waitFor(s).next(()=>u)}function Eh(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw L();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kt.DEFAULT_COLLECTION_PERCENTILE=10,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,kt.DEFAULT=new kt(41943040,kt.DEFAULT_COLLECTION_PERCENTILE,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),kt.DISABLED=new kt(-1,0,0);class kd{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Dn={}}static ct(e,n,r,i){B(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new kd(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return yr(e).Y({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=xs(e),o=yr(e);return o.add({}).next(a=>{B(typeof a=="number");const l=new W_(a,n,r,i),u=function(f,y,v){const I=v.baseMutations.map(p=>Bl(f.ut,p)),m=v.mutations.map(p=>Bl(f.ut,p));return{userId:y,batchId:v.batchId,localWriteTimeMs:v.localWriteTime.toMillis(),baseMutations:I,mutations:m}}(this.serializer,this.userId,l),c=[];let h=new se((d,f)=>z(d.canonicalString(),f.canonicalString()));for(const d of i){const f=bR(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),c.push(o.put(u)),c.push(s.put(f,aU))}return h.forEach(d=>{c.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.Dn[a]=l.keys()}),w.waitFor(c).next(()=>l)})}lookupMutationBatch(e,n){return yr(e).get(n).next(r=>r?(B(r.userId===this.userId),Ei(this.serializer,r)):null)}Cn(e,n){return this.Dn[n]?w.resolve(this.Dn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Dn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return yr(e).Y({index:"userMutationsIndex",range:i},(o,a,l)=>{a.userId===this.userId&&(B(a.batchId>=r),s=Ei(this.serializer,a)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return yr(e).Y({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return yr(e).W("userMutationsIndex",n).next(r=>r.map(i=>Ei(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=Ic(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return xs(e).Y({range:i},(o,a,l)=>{const[u,c,h]=o,d=Nn(c);if(u===this.userId&&n.path.isEqual(d))return yr(e).get(h).next(f=>{if(!f)throw L();B(f.userId===this.userId),s.push(Ei(this.serializer,f))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new se(z);const i=[];return n.forEach(s=>{const o=Ic(this.userId,s.path),a=IDBKeyRange.lowerBound(o),l=xs(e).Y({range:a},(u,c,h)=>{const[d,f,y]=u,v=Nn(f);d===this.userId&&s.path.isEqual(v)?r=r.add(y):h.done()});i.push(l)}),w.waitFor(i).next(()=>this.vn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=Ic(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new se(z);return xs(e).Y({range:o},(l,u,c)=>{const[h,d,f]=l,y=Nn(d);h===this.userId&&r.isPrefixOf(y)?y.length===i&&(a=a.add(f)):c.done()}).next(()=>this.vn(e,a))}vn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(yr(e).get(s).next(o=>{if(o===null)throw L();B(o.userId===this.userId),r.push(Ei(this.serializer,o))}))}),w.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return k1(e.ae,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.Fn(n.batchId)}),w.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Fn(e){delete this.Dn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return w.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return xs(e).Y({range:r},(s,o,a)=>{if(s[0]===this.userId){const l=Nn(s[1]);i.push(l)}else a.done()}).next(()=>{B(i.length===0)})})}containsKey(e,n){return x1(e,this.userId,n)}Mn(e){return N1(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function x1(t,e,n){const r=Ic(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return xs(t).Y({range:s,J:!0},(a,l,u)=>{const[c,h,d]=a;c===e&&h===i&&(o=!0),u.done()}).next(()=>o)}function yr(t){return Qe(t,"mutations")}function xs(t){return Qe(t,"documentMutations")}function N1(t){return Qe(t,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new ss(0)}static Nn(){return new ss(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wB{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.Bn(e).next(n=>{const r=new ss(n.highestTargetId);return n.highestTargetId=r.next(),this.Ln(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Bn(e).next(n=>j.fromTimestamp(new ge(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Bn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Bn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.Ln(e,i)))}addTargetData(e,n){return this.kn(e,n).next(()=>this.Bn(e).next(r=>(r.targetCount+=1,this.qn(n,r),this.Ln(e,r))))}updateTargetData(e,n){return this.kn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>As(e).delete(n.targetId)).next(()=>this.Bn(e)).next(r=>(B(r.targetCount>0),r.targetCount-=1,this.Ln(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return As(e).Y((o,a)=>{const l=ka(a);l.sequenceNumber<=n&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>w.waitFor(s)).next(()=>i)}forEachTarget(e,n){return As(e).Y((r,i)=>{const s=ka(i);n(s)})}Bn(e){return jI(e).get("targetGlobalKey").next(n=>(B(n!==null),n))}Ln(e,n){return jI(e).put("targetGlobalKey",n)}kn(e,n){return As(e).put(R1(this.serializer,n))}qn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Bn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=es(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return As(e).Y({range:i,index:"queryTargetsIndex"},(o,a,l)=>{const u=ka(a);fu(n,u.target)&&(s=u,l.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=Sr(e);return n.forEach(o=>{const a=Tt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),w.waitFor(i)}removeMatchingKeys(e,n,r){const i=Sr(e);return w.forEach(n,s=>{const o=Tt(s.path);return w.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=Sr(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=Sr(e);let s=q();return i.Y({range:r,J:!0},(o,a,l)=>{const u=Nn(o[1]),c=new b(u);s=s.add(c)}).next(()=>s)}containsKey(e,n){const r=Tt(n.path),i=IDBKeyRange.bound([r],[RR(r)],!1,!0);let s=0;return Sr(e).Y({index:"documentTargetsIndex",J:!0,range:i},([o,a],l,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}_t(e,n){return As(e).get(n).next(r=>r?ka(r):null)}}function As(t){return Qe(t,"targets")}function jI(t){return Qe(t,"targetGlobal")}function Sr(t){return Qe(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $I([t,e],[n,r]){const i=z(t,n);return i===0?z(e,r):i}class IB{constructor(e){this.Qn=e,this.buffer=new se($I),this.Kn=0}$n(){return++this.Kn}Un(e){const n=[e,this.$n()];if(this.buffer.size<this.Qn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();$I(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class EB{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Wn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Gn(6e4)}stop(){this.Wn&&(this.Wn.cancel(),this.Wn=null)}get started(){return this.Wn!==null}Gn(e){R("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Wn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Wn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){hi(n)?R("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await ci(n)}await this.Gn(3e5)})}}class TB{constructor(e,n){this.zn=e,this.params=n}calculateTargetCount(e,n){return this.zn.jn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return w.resolve(bt._e);const r=new IB(n);return this.zn.forEachTarget(e,i=>r.Un(i.sequenceNumber)).next(()=>this.zn.Hn(e,i=>r.Un(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.zn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(R("LruGarbageCollector","Garbage collection skipped; disabled"),w.resolve(BI)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(R("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),BI):this.Jn(e,n))}getCacheSize(e){return this.zn.getCacheSize(e)}Jn(e,n){let r,i,s,o,a,l,u;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(R("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(s=h,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),Rs()<=K.DEBUG&&R("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-c}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${h} documents in `+(u-l)+`ms
Total Duration: ${u-c}ms`),w.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}function AB(t,e){return new TB(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SB{constructor(e,n){this.db=e,this.garbageCollector=AB(this,n)}jn(e){const n=this.Yn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Yn(e){let n=0;return this.Hn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Hn(e,n){return this.Zn(e,(r,i)=>n(i))}addReference(e,n,r){return tc(e,r)}removeReference(e,n,r){return tc(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return tc(e,n)}Xn(e,n){return function(i,s){let o=!1;return N1(i).Z(a=>x1(i,a,s).next(l=>(l&&(o=!0),w.resolve(!l)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Zn(e,(o,a)=>{if(a<=n){const l=this.Xn(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,j.min()),Sr(e).delete(function(h){return[0,Tt(h.path)]}(o))))});i.push(l)}}).next(()=>w.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return tc(e,n)}Zn(e,n){const r=Sr(e);let i,s=bt._e;return r.Y({index:"documentTargetsIndex"},([o,a],{path:l,sequenceNumber:u})=>{o===0?(s!==bt._e&&n(new b(Nn(i)),s),s=u,i=l):s=bt._e}).next(()=>{s!==bt._e&&n(new b(Nn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function tc(t,e){return Sr(t).put(function(r,i){return{targetId:0,path:Tt(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{constructor(){this.changes=new di(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ce.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?w.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RB{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return gi(e).put(r)}removeEntry(e,n,r){return gi(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],wh(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.er(e,r)))}getEntry(e,n){let r=ce.newInvalidDocument(n);return gi(e).Y({index:"documentKeyIndex",range:IDBKeyRange.only(ga(n))},(i,s)=>{r=this.tr(n,s)}).next(()=>r)}nr(e,n){let r={size:0,document:ce.newInvalidDocument(n)};return gi(e).Y({index:"documentKeyIndex",range:IDBKeyRange.only(ga(n))},(i,s)=>{r={document:this.tr(n,s),size:Eh(s)}}).next(()=>r)}getEntries(e,n){let r=Vt();return this.rr(e,n,(i,s)=>{const o=this.tr(i,s);r=r.insert(i,o)}).next(()=>r)}ir(e,n){let r=Vt(),i=new ae(b.comparator);return this.rr(e,n,(s,o)=>{const a=this.tr(s,o);r=r.insert(s,a),i=i.insert(s,Eh(o))}).next(()=>({documents:r,sr:i}))}rr(e,n,r){if(n.isEmpty())return w.resolve();let i=new se(WI);n.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound(ga(i.first()),ga(i.last())),o=i.getIterator();let a=o.getNext();return gi(e).Y({index:"documentKeyIndex",range:s},(l,u,c)=>{const h=b.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&WI(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?c.U(ga(a)):c.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i,s){const o=n.path,a=[o.popLast().toArray(),o.lastSegment(),wh(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return gi(e).W(IDBKeyRange.bound(a,l,!0)).next(u=>{s==null||s.incrementDocumentReadCount(u.length);let c=Vt();for(const h of u){const d=this.tr(b.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);d.isFoundDocument()&&(mu(n,d)||i.has(d.key))&&(c=c.insert(d.key,d))}return c})}getAllFromCollectionGroup(e,n,r,i){let s=Vt();const o=qI(n,r),a=qI(n,Wt.max());return gi(e).Y({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(l,u,c)=>{const h=this.tr(b.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(h.key,h),s.size===i&&c.done()}).next(()=>s)}newChangeBuffer(e){return new PB(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return zI(e).get("remoteDocumentGlobalKey").next(n=>(B(!!n),n))}er(e,n){return zI(e).put("remoteDocumentGlobalKey",n)}tr(e,n){if(n){const r=hB(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(j.min())))return r}return ce.newInvalidDocument(e)}}function D1(t){return new RB(t)}class PB extends b1{constructor(e,n){super(),this._r=e,this.trackRemovals=n,this.ar=new di(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new se((s,o)=>z(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.ar.get(s);if(n.push(this._r.removeEntry(e,s,a.readTime)),o.isValidDocument()){const l=kI(this._r.serializer,o);i=i.add(s.path.popLast());const u=Eh(l);r+=u-a.size,n.push(this._r.addEntry(e,s,l))}else if(r-=a.size,this.trackRemovals){const l=kI(this._r.serializer,o.convertToNoDocument(j.min()));n.push(this._r.addEntry(e,s,l))}}),i.forEach(s=>{n.push(this._r.indexManager.addToCollectionParentIndex(e,s))}),n.push(this._r.updateMetadata(e,r)),w.waitFor(n)}getFromCache(e,n){return this._r.nr(e,n).next(r=>(this.ar.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this._r.ir(e,n).next(({documents:r,sr:i})=>(i.forEach((s,o)=>{this.ar.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function zI(t){return Qe(t,"remoteDocumentGlobal")}function gi(t){return Qe(t,"remoteDocumentsV14")}function ga(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function qI(t,e){const n=e.documentKey.path.toArray();return[t,wh(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function WI(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=z(n[s],r[s]),i)return i;return i=z(n.length,r.length),i||(i=z(n[n.length-2],r[r.length-2]),i||z(n[n.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CB{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ha(r.mutation,i,Dt.empty(),ge.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,q()).next(()=>r))}getLocalViewOfDocuments(e,n,r=q()){const i=bn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Pa();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=bn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,q()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Vt();const o=Ga(),a=function(){return Ga()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof fr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Ha(c.mutation,u,c.mutation.getFieldMask(),ge.now())):o.set(u.key,Dt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new CB(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ga();let i=new ae((o,a)=>o-a),s=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Dt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||q()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=ZR();c.forEach(d=>{if(!s.has(d)){const f=a1(n.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return w.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return b.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):$_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):w.resolve(bn());let a=-1,l=s;return o.next(u=>w.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?w.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,q())).next(c=>({batchId:a,changes:JR(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new b(n)).next(r=>{let i=Pa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Pa();return this.indexManager.getCollectionParents(e,s).next(a=>w.forEach(a,l=>{const u=function(h,d){return new dr(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,ce.newInvalidDocument(c)))});let a=Pa();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&Ha(c.mutation,u,Dt.empty(),ge.now()),mu(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kB{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return w.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Ve(i.createTime)}}(n)),w.resolve()}getNamedQuery(e,n){return w.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(i){return{name:i.name,query:Y_(i.bundledQuery),readTime:Ve(i.readTime)}}(n)),w.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xB{constructor(){this.overlays=new ae(b.comparator),this.lr=new Map}getOverlay(e,n){return w.resolve(this.overlays.get(n))}getOverlays(e,n){const r=bn();return w.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.lt(e,n,s)}),w.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),w.resolve()}getOverlaysForCollection(e,n,r){const i=bn(),s=n.length+1,o=new b(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return w.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ae((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=bn(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=bn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return w.resolve(a)}lt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new H_(n,r));let s=this.lr.get(n);s===void 0&&(s=q(),this.lr.set(n,s)),this.lr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(){this.hr=new se($e.Pr),this.Ir=new se($e.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new $e(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new $e(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new b(new J([])),r=new $e(n,e),i=new $e(n,e+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new b(new J([])),r=new $e(n,e),i=new $e(n,e+1);let s=q();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new $e(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class $e{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return b.comparator(e.key,n.key)||z(e.gr,n.gr)}static Tr(e,n){return z(e.gr,n.gr)||b.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NB{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new se($e.Pr)}checkEmpty(e){return w.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new W_(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new $e(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return w.resolve(o)}lookupMutationBatch(e,n){return w.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Sr(r),s=i<0?0:i;return w.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return w.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return w.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new $e(n,0),i=new $e(n,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),w.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new se(z);return n.forEach(i=>{const s=new $e(i,0),o=new $e(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),w.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;b.isDocumentKey(s)||(s=s.child(""));const o=new $e(new b(s),0);let a=new se(z);return this.yr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.gr)),!0)},o),w.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const i=this.wr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){B(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return w.forEach(n.mutations,i=>{const s=new $e(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new $e(n,0),i=this.yr.firstAfterOrEqual(r);return w.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,w.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bB{constructor(e){this.Cr=e,this.docs=function(){return new ae(b.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return w.resolve(r?r.document.mutableCopy():ce.newInvalidDocument(n))}getEntries(e,n){let r=Vt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ce.newInvalidDocument(i))}),w.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Vt();const o=n.path,a=new b(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||F_(CR(c),r)<=0||(i.has(c.key)||mu(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return w.resolve(s)}getAllFromCollectionGroup(e,n,r,i){L()}vr(e,n){return w.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new DB(this)}getSize(e){return w.resolve(this.size)}}class DB extends b1{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this._r.addEntry(e,i)):this._r.removeEntry(r)}),w.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VB{constructor(e){this.persistence=e,this.Fr=new di(n=>es(n),fu),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Z_,this.targetCount=0,this.Nr=ss.On()}forEachTarget(e,n){return this.Fr.forEach((r,i)=>n(i)),w.resolve()}getLastRemoteSnapshotVersion(e){return w.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return w.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),w.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),w.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new ss(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,w.resolve()}updateTargetData(e,n){return this.kn(n),w.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,w.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),w.waitFor(s).next(()=>i)}getTargetCount(e){return w.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return w.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),w.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),w.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),w.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return w.resolve(r)}containsKey(e,n){return w.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1{constructor(e,n){this.Br={},this.overlays={},this.Lr=new bt(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new VB(this),this.indexManager=new yB,this.remoteDocumentCache=function(i){return new bB(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new S1(n),this.Kr=new kB(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new xB,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new NB(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){R("MemoryPersistence","Starting transaction:",e);const i=new OB(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(e,n){return w.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class OB extends xR{constructor(e){super(),this.currentSequenceNumber=e}}class xd{constructor(e){this.persistence=e,this.Gr=new Z_,this.zr=null}static jr(e){return new xd(e)}get Hr(){if(this.zr)return this.zr;throw L()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),w.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),w.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),w.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return w.forEach(this.Hr,r=>{const i=b.fromPath(r);return this.Jr(e,i).next(s=>{s||n.removeEntry(i,j.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return w.or([()=>w.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LB{constructor(e){this.serializer=e}N(e,n,r,i){const s=new Ad("createOrUpgrade",n);r<1&&i>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",oI,{unique:!0}),l.createObjectStore("documentMutations")}(e),GI(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=w.resolve();return r<3&&i>=3&&(r!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),GI(e)),o=o.next(()=>function(l){const u=l.store("targetGlobal"),c={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:j.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",c)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(l,u){return u.store("mutations").W().next(c=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",oI,{unique:!0});const h=u.store("mutations"),d=c.map(f=>h.put(f));return w.waitFor(d)})}(e,s))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Zr(s))),r<6&&i>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.Xr(s)))),r<7&&i>=7&&(o=o.next(()=>this.ei(s))),r<8&&i>=8&&(o=o.next(()=>this.ti(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ni(s))),r<11&&i>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(l){const u=l.createObjectStore("documentOverlays",{keyPath:vU});u.createIndex("collectionPathOverlayIndex",wU,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",IU,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(l){const u=l.createObjectStore("remoteDocumentsV14",{keyPath:lU});u.createIndex("documentKeyIndex",uU),u.createIndex("collectionGroupIndex",cU)}(e)).next(()=>this.ri(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ii(e,s))),r<15&&i>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:mU}).createIndex("sequenceNumberIndex",gU,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:_U}).createIndex("documentKeyIndex",yU,{unique:!1})}(e))),o}Xr(e){let n=0;return e.store("remoteDocuments").Y((r,i)=>{n+=Eh(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Zr(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.W().next(i=>w.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.W("userMutationsIndex",o).next(a=>w.forEach(a,l=>{B(l.userId===s.userId);const u=Ei(this.serializer,l);return k1(e,s.userId,u).next(()=>{})}))}))}ei(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Y((o,a)=>{const l=new J(o),u=function(h){return[0,Tt(h)]}(l);s.push(n.get(u).next(c=>c?w.resolve():(h=>n.put({targetId:0,path:Tt(h),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>w.waitFor(s))})}ti(e,n){e.createObjectStore("collectionParents",{keyPath:pU});const r=n.store("collectionParents"),i=new J_,s=o=>{if(i.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:Tt(l)})}};return n.store("remoteDocuments").Y({J:!0},(o,a)=>{const l=new J(o);return s(l.popLast())}).next(()=>n.store("documentMutations").Y({J:!0},([o,a,l],u)=>{const c=Nn(a);return s(c.popLast())}))}ni(e){const n=e.store("targets");return n.Y((r,i)=>{const s=ka(i),o=R1(this.serializer,s);return n.put(o)})}ri(e,n){const r=n.store("remoteDocuments"),i=[];return r.Y((s,o)=>{const a=n.store("remoteDocumentsV14"),l=function(h){return h.document?new b(J.fromString(h.document.name).popFirst(5)):h.noDocument?b.fromSegments(h.noDocument.path):h.unknownDocument?b.fromSegments(h.unknownDocument.path):L()}(o).path.toArray(),u={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(u))}).next(()=>w.waitFor(i))}ii(e,n){const r=n.store("mutations"),i=D1(this.serializer),s=new O1(xd.jr,this.serializer.ut);return r.W().next(o=>{const a=new Map;return o.forEach(l=>{var u;let c=(u=a.get(l.userId))!==null&&u!==void 0?u:q();Ei(this.serializer,l).keys().forEach(h=>c=c.add(h)),a.set(l.userId,c)}),w.forEach(a,(l,u)=>{const c=new qe(u),h=Cd.ct(this.serializer,c),d=s.getIndexManager(c),f=kd.ct(c,this.serializer,d,s.referenceDelegate);return new V1(i,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new pm(n,bt._e),l).next()})})}}function GI(t){t.createObjectStore("targetDocuments",{keyPath:dU}).createIndex("documentTargetsIndex",fU,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",hU,{unique:!0}),t.createObjectStore("targetGlobal")}const qf="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class ey{constructor(e,n,r,i,s,o,a,l,u,c,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.si=s,this.window=o,this.document=a,this.oi=u,this._i=c,this.ai=h,this.Lr=null,this.kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ui=null,this.inForeground=!1,this.ci=null,this.li=null,this.hi=Number.NEGATIVE_INFINITY,this.Pi=d=>Promise.resolve(),!ey.D())throw new A(T.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new SB(this,i),this.Ii=n+"main",this.serializer=new S1(l),this.Ti=new dn(this.Ii,this.ai,new LB(this.serializer)),this.qr=new wB(this.referenceDelegate,this.serializer),this.remoteDocumentCache=D1(this.serializer),this.Kr=new dB,this.window&&this.window.localStorage?this.Ei=this.window.localStorage:(this.Ei=null,c===!1&&be("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.di().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new A(T.FAILED_PRECONDITION,qf);return this.Ai(),this.Ri(),this.Vi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.qr.getHighestSequenceNumber(e))}).then(e=>{this.Lr=new bt(e,this.oi)}).then(()=>{this.kr=!0}).catch(e=>(this.Ti&&this.Ti.close(),Promise.reject(e)))}mi(e){return this.Pi=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ti.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.si.enqueueAndForget(async()=>{this.started&&await this.di()}))}di(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>nc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(e).next(n=>{n||(this.isPrimary=!1,this.si.enqueueRetryable(()=>this.Pi(!1)))})}).next(()=>this.gi(e)).next(n=>this.isPrimary&&!n?this.pi(e).next(()=>!1):!!n&&this.yi(e).next(()=>!0))).catch(e=>{if(hi(e))return R("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return R("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.si.enqueueRetryable(()=>this.Pi(e)),this.isPrimary=e})}fi(e){return _a(e).get("owner").next(n=>w.resolve(this.wi(n)))}Si(e){return nc(e).delete(this.clientId)}async bi(){if(this.isPrimary&&!this.Di(this.hi,18e5)){this.hi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=Qe(n,"clientMetadata");return r.W().next(i=>{const s=this.Ci(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return w.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ei)for(const n of e)this.Ei.removeItem(this.vi(n.clientId))}}Vi(){this.li=this.si.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.di().then(()=>this.bi()).then(()=>this.Vi()))}wi(e){return!!e&&e.ownerId===this.clientId}gi(e){return this._i?w.resolve(!0):_a(e).get("owner").next(n=>{if(n!==null&&this.Di(n.leaseTimestampMs,5e3)&&!this.Fi(n.ownerId)){if(this.wi(n)&&this.networkEnabled)return!0;if(!this.wi(n)){if(!n.allowTabSynchronization)throw new A(T.FAILED_PRECONDITION,qf);return!1}}return!(!this.networkEnabled||!this.inForeground)||nc(e).W().next(r=>this.Ci(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&R("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.kr=!1,this.Mi(),this.li&&(this.li.cancel(),this.li=null),this.xi(),this.Oi(),await this.Ti.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new pm(e,bt._e);return this.pi(n).next(()=>this.Si(n))}),this.Ti.close(),this.Ni()}Ci(e,n){return e.filter(r=>this.Di(r.updateTimeMs,n)&&!this.Fi(r.clientId))}Bi(){return this.runTransaction("getActiveClients","readonly",e=>nc(e).W().next(n=>this.Ci(n,18e5).map(r=>r.clientId)))}get started(){return this.kr}getMutationQueue(e,n){return kd.ct(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new vB(e,this.serializer.ut.databaseId)}getDocumentOverlayCache(e){return Cd.ct(this.serializer,e)}getBundleCache(){return this.Kr}runTransaction(e,n,r){R("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(l){return l===15?TU:l===14?OR:l===13?VR:l===12?EU:l===11?DR:void L()}(this.ai);let o;return this.Ti.runTransaction(e,i,s,a=>(o=new pm(a,this.Lr?this.Lr.next():bt._e),n==="readwrite-primary"?this.fi(o).next(l=>!!l||this.gi(o)).next(l=>{if(!l)throw be(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.si.enqueueRetryable(()=>this.Pi(!1)),new A(T.FAILED_PRECONDITION,kR);return r(o)}).next(l=>this.yi(o).next(()=>l)):this.Li(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Li(e){return _a(e).get("owner").next(n=>{if(n!==null&&this.Di(n.leaseTimestampMs,5e3)&&!this.Fi(n.ownerId)&&!this.wi(n)&&!(this._i||this.allowTabSynchronization&&n.allowTabSynchronization))throw new A(T.FAILED_PRECONDITION,qf)})}yi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return _a(e).put("owner",n)}static D(){return dn.D()}pi(e){const n=_a(e);return n.get("owner").next(r=>this.wi(r)?(R("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):w.resolve())}Di(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(be(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Ai(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ci=()=>{this.si.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.di()))},this.document.addEventListener("visibilitychange",this.ci),this.inForeground=this.document.visibilityState==="visible")}xi(){this.ci&&(this.document.removeEventListener("visibilitychange",this.ci),this.ci=null)}Ri(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ui=()=>{this.Mi();const n=/(?:Version|Mobile)\/1[456]/;xN()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.si.enterRestrictedMode(!0),this.si.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ui))}Oi(){this.ui&&(this.window.removeEventListener("pagehide",this.ui),this.ui=null)}Fi(e){var n;try{const r=((n=this.Ei)===null||n===void 0?void 0:n.getItem(this.vi(e)))!==null;return R("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return be("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Mi(){if(this.Ei)try{this.Ei.setItem(this.vi(this.clientId),String(Date.now()))}catch(e){be("Failed to set zombie client id.",e)}}Ni(){if(this.Ei)try{this.Ei.removeItem(this.vi(this.clientId))}catch{}}vi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function _a(t){return Qe(t,"owner")}function nc(t){return Qe(t,"clientMetadata")}function ty(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=i}static Qi(e,n){let r=q(),i=q();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ny(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MB{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.zi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ji(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new MB;return this.Hi(e,n,o).next(a=>{if(s.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>s.result)}Ji(e,n,r,i){return r.documentReadCount<this.Ui?(Rs()<=K.DEBUG&&R("QueryEngine","SDK will not create cache indexes for query:",Ps(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),w.resolve()):(Rs()<=K.DEBUG&&R("QueryEngine","Query:",Ps(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?(Rs()<=K.DEBUG&&R("QueryEngine","The SDK decides to create cache indexes for query:",Ps(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,At(n))):w.resolve())}zi(e,n){if(yI(n))return w.resolve(null);let r=At(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=vh(n,null,"F"),r=At(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=q(...s);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Yi(n,a);return this.Zi(n,u,o,l.readTime)?this.zi(e,vh(n,null,"F")):this.Xi(e,u,n,l)}))})))}ji(e,n,r,i){return yI(n)||i.isEqual(j.min())?w.resolve(null):this.Gi.getDocuments(e,r).next(s=>{const o=this.Yi(n,s);return this.Zi(n,o,r,i)?w.resolve(null):(Rs()<=K.DEBUG&&R("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ps(n)),this.Xi(e,o,n,PR(i,-1)).next(a=>a))})}Yi(e,n){let r=new se(YR(e));return n.forEach((i,s)=>{mu(e,s)&&(r=r.add(s))}),r}Zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Hi(e,n,r){return Rs()<=K.DEBUG&&R("QueryEngine","Using full collection scan to execute query:",Ps(n)),this.Gi.getDocumentsMatchingQuery(e,n,Wt.min(),r)}Xi(e,n,r,i){return this.Gi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FB{constructor(e,n,r,i){this.persistence=e,this.es=n,this.serializer=i,this.ts=new ae(z),this.ns=new di(s=>es(s),fu),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new V1(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function M1(t,e,n,r){return new FB(t,e,n,r)}async function F1(t,e){const n=D(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=q();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({_s:u,removedBatchIds:o,addedBatchIds:a}))})})}function UB(t,e){const n=D(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,d=h.keys();let f=w.resolve();return d.forEach(y=>{f=f.next(()=>c.getEntry(l,y)).next(v=>{const I=u.docVersions.get(y);B(I!==null),v.version.compareTo(I)<0&&(h.applyToRemoteDocument(v,u),v.isValidDocument()&&(v.setReadTime(u.commitVersion),c.addEntry(v)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=q();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function U1(t){const e=D(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function BB(t,e){const n=D(t),r=e.snapshotVersion;let i=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});i=n.ts;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.qr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.qr.addMatchingKeys(s,c.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(Be.EMPTY_BYTE_STRING,j.min()).withLastLimboFreeSnapshotVersion(j.min()):c.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(c.resumeToken,r)),i=i.insert(h,f),function(v,I,m){return v.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(d,f,c)&&a.push(n.qr.updateTargetData(s,f))});let l=Vt(),u=q();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(B1(s,o,e.documentUpdates).next(c=>{l=c.us,u=c.cs})),!r.isEqual(j.min())){const c=n.qr.getLastRemoteSnapshotVersion(s).next(h=>n.qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return w.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.ts=i,s))}function B1(t,e,n){let r=q(),i=q();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Vt();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(j.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):R("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{us:o,cs:i}})}function jB(t,e){const n=D(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function To(t,e){const n=D(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.qr.getTargetData(r,e).next(s=>s?(i=s,w.resolve(i)):n.qr.allocateTargetId(r).next(o=>(i=new Hn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function Ao(t,e,n){const r=D(t),i=r.ts.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!hi(o))throw o;R("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(i.target)}function Th(t,e,n){const r=D(t);let i=j.min(),s=q();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const h=D(l),d=h.ns.get(c);return d!==void 0?w.resolve(h.ts.get(d)):h.qr.getTargetData(u,c)}(r,o,At(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,n?i:j.min(),n?s:q())).next(a=>(z1(r,QR(e),a),{documents:a,ls:s})))}function j1(t,e){const n=D(t),r=D(n.qr),i=n.ts.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r._t(s,e).next(o=>o?o.target:null))}function $1(t,e){const n=D(t),r=n.rs.get(e)||j.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.ss.getAllFromCollectionGroup(i,e,PR(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(z1(n,e,i),i))}function z1(t,e,n){let r=t.rs.get(e)||j.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.rs.set(e,r)}async function $B(t,e,n,r){const i=D(t);let s=q(),o=Vt();for(const u of n){const c=e.hs(u.metadata.name);u.document&&(s=s.add(c));const h=e.Ps(u);h.setReadTime(e.Is(u.metadata.readTime)),o=o.insert(c,h)}const a=i.ss.newChangeBuffer({trackRemovals:!0}),l=await To(i,function(c){return At(qo(J.fromString(`__bundle__/docs/${c}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>B1(u,a,o).next(c=>(a.apply(u),c)).next(c=>i.qr.removeMatchingKeysForTargetId(u,l.targetId).next(()=>i.qr.addMatchingKeys(u,s,l.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,c.us,c.cs)).next(()=>c.us)))}async function zB(t,e,n=q()){const r=await To(t,At(Y_(e.bundledQuery))),i=D(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=Ve(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Kr.saveNamedQuery(s,e);const a=r.withResumeToken(Be.EMPTY_BYTE_STRING,o);return i.ts=i.ts.insert(a.targetId,a),i.qr.updateTargetData(s,a).next(()=>i.qr.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.qr.addMatchingKeys(s,n,r.targetId)).next(()=>i.Kr.saveNamedQuery(s,e))})}function HI(t,e){return`firestore_clients_${t}_${e}`}function KI(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Wf(t,e){return`firestore_targets_${t}_${e}`}class Ah{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Ts(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new A(i.error.code,i.error.message))),o?new Ah(e,n,i.state,s):(be("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}Es(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ka{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Ts(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new A(r.error.code,r.error.message))),s?new Ka(e,r.state,i):(be("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}Es(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Sh{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Ts(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=z_();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=NR(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new Sh(e,s):(be("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class ry{constructor(e,n){this.clientId=e,this.onlineState=n}static Ts(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new ry(n.clientId,n.onlineState):(be("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Pm{constructor(){this.activeTargetIds=z_()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Gf{constructor(e,n,r,i,s){this.window=e,this.si=n,this.persistenceKey=r,this.Rs=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Vs=this.fs.bind(this),this.gs=new ae(z),this.started=!1,this.ps=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ys=HI(this.persistenceKey,this.Rs),this.ws=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.gs=this.gs.insert(this.Rs,new Pm),this.Ss=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.bs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ds=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.Cs=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.vs=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.Vs)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Bi();for(const r of e){if(r===this.Rs)continue;const i=this.getItem(HI(this.persistenceKey,r));if(i){const s=Sh.Ts(r,i);s&&(this.gs=this.gs.insert(s.clientId,s))}}this.Fs();const n=this.storage.getItem(this.Cs);if(n){const r=this.Ms(n);r&&this.xs(r)}for(const r of this.ps)this.fs(r);this.ps=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.ws,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Os(this.gs)}isActiveQueryTarget(e){let n=!1;return this.gs.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Ns(e,"pending")}updateMutationState(e,n,r){this.Ns(e,n,r),this.Bs(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Wf(this.persistenceKey,e));if(r){const i=Ka.Ts(e,r);i&&(n=i.state)}}return this.Ls.ds(e),this.Fs(),n}removeLocalQueryTarget(e){this.Ls.As(e),this.Fs()}isLocalQueryTarget(e){return this.Ls.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Wf(this.persistenceKey,e))}updateQueryState(e,n,r){this.ks(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Bs(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.qs(e)}notifyBundleLoaded(e){this.Qs(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Vs),this.removeItem(this.ys),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return R("SharedClientState","READ",e,n),n}setItem(e,n){R("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){R("SharedClientState","REMOVE",e),this.storage.removeItem(e)}fs(e){const n=e;if(n.storageArea===this.storage){if(R("SharedClientState","EVENT",n.key,n.newValue),n.key===this.ys)return void be("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.si.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.Ss.test(n.key)){if(n.newValue==null){const r=this.Ks(n.key);return this.$s(r,null)}{const r=this.Us(n.key,n.newValue);if(r)return this.$s(r.clientId,r)}}else if(this.bs.test(n.key)){if(n.newValue!==null){const r=this.Ws(n.key,n.newValue);if(r)return this.Gs(r)}}else if(this.Ds.test(n.key)){if(n.newValue!==null){const r=this.zs(n.key,n.newValue);if(r)return this.js(r)}}else if(n.key===this.Cs){if(n.newValue!==null){const r=this.Ms(n.newValue);if(r)return this.xs(r)}}else if(n.key===this.ws){const r=function(s){let o=bt._e;if(s!=null)try{const a=JSON.parse(s);B(typeof a=="number"),o=a}catch(a){be("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(n.newValue);r!==bt._e&&this.sequenceNumberHandler(r)}else if(n.key===this.vs){const r=this.Hs(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Js(i)))}}}else this.ps.push(n)})}}get Ls(){return this.gs.get(this.Rs)}Fs(){this.setItem(this.ys,this.Ls.Es())}Ns(e,n,r){const i=new Ah(this.currentUser,e,n,r),s=KI(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Es())}Bs(e){const n=KI(this.persistenceKey,this.currentUser,e);this.removeItem(n)}qs(e){const n={clientId:this.Rs,onlineState:e};this.storage.setItem(this.Cs,JSON.stringify(n))}ks(e,n,r){const i=Wf(this.persistenceKey,e),s=new Ka(e,n,r);this.setItem(i,s.Es())}Qs(e){const n=JSON.stringify(Array.from(e));this.setItem(this.vs,n)}Ks(e){const n=this.Ss.exec(e);return n?n[1]:null}Us(e,n){const r=this.Ks(e);return Sh.Ts(r,n)}Ws(e,n){const r=this.bs.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Ah.Ts(new qe(s),i,n)}zs(e,n){const r=this.Ds.exec(e),i=Number(r[1]);return Ka.Ts(i,n)}Ms(e){return ry.Ts(e)}Hs(e){return JSON.parse(e)}async Gs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Ys(e.batchId,e.state,e.error);R("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}js(e){return this.syncEngine.Zs(e.targetId,e.state,e.error)}$s(e,n){const r=n?this.gs.insert(e,n):this.gs.remove(e),i=this.Os(this.gs),s=this.Os(r),o=[],a=[];return s.forEach(l=>{i.has(l)||o.push(l)}),i.forEach(l=>{s.has(l)||a.push(l)}),this.syncEngine.Xs(o,a).then(()=>{this.gs=r})}xs(e){this.gs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Os(e){let n=z_();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class q1{constructor(){this.eo=new Pm,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new Pm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qB{ro(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){R("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){R("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rc=null;function Hf(){return rc===null?rc=function(){return 268435456+Math.round(2147483648*Math.random())}():rc++,"0x"+rc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WB={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GB{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt="WebChannelConnection";class HB extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${i}/databases/${s}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get yo(){return!1}wo(n,r,i,s,o){const a=Hf(),l=this.So(n,r);R("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(u,s,o),this.Do(n,l,u,i).then(c=>(R("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw yn("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}Co(n,r,i,s,o,a){return this.wo(n,r,i,s,o)}bo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+zo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}So(n,r){const i=WB[n];return`${this.mo}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,r,i){const s=Hf();return new Promise((o,a)=>{const l=new zF;l.setWithCredentials(!0),l.listenOnce(jF.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case $f.NO_ERROR:const c=l.getResponseJson();R(lt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case $f.TIMEOUT:R(lt,`RPC '${e}' ${s} timed out`),a(new A(T.DEADLINE_EXCEEDED,"Request time out"));break;case $f.HTTP_ERROR:const h=l.getStatus();if(R(lt,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const y=function(I){const m=I.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(m)>=0?m:T.UNKNOWN}(f.status);a(new A(y,f.message))}else a(new A(T.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new A(T.UNAVAILABLE,"Connection failed."));break;default:L()}}finally{R(lt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);R(lt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}vo(e,n,r){const i=Hf(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=UF(),a=BF(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.bo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");R(lt,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,f=!1;const y=new GB({co:I=>{f?R(lt,`Not sending because RPC '${e}' stream ${i} is closed:`,I):(d||(R(lt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),R(lt,`RPC '${e}' stream ${i} sending:`,I),h.send(I))},lo:()=>h.close()}),v=(I,m,p)=>{I.listen(m,g=>{try{p(g)}catch(E){setTimeout(()=>{throw E},0)}})};return v(h,Ju.EventType.OPEN,()=>{f||R(lt,`RPC '${e}' stream ${i} transport opened.`)}),v(h,Ju.EventType.CLOSE,()=>{f||(f=!0,R(lt,`RPC '${e}' stream ${i} transport closed`),y.Ro())}),v(h,Ju.EventType.ERROR,I=>{f||(f=!0,yn(lt,`RPC '${e}' stream ${i} transport errored:`,I),y.Ro(new A(T.UNAVAILABLE,"The operation could not be completed")))}),v(h,Ju.EventType.MESSAGE,I=>{var m;if(!f){const p=I.data[0];B(!!p);const g=p,E=g.error||((m=g[0])===null||m===void 0?void 0:m.error);if(E){R(lt,`RPC '${e}' stream ${i} received error:`,E);const S=E.status;let C=function(te){const G=Oe[te];if(G!==void 0)return c1(G)}(S),N=E.message;C===void 0&&(C=T.INTERNAL,N="Unknown error status: "+S+" with message "+E.message),f=!0,y.Ro(new A(C,N)),h.close()}else R(lt,`RPC '${e}' stream ${i} received:`,p),y.Vo(p)}}),v(a,$F.STAT_EVENT,I=>{I.stat===nI.PROXY?R(lt,`RPC '${e}' stream ${i} detected buffering proxy`):I.stat===nI.NOPROXY&&R(lt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.Ao()},0),y}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W1(){return typeof window<"u"?window:null}function Rc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(t){return new tB(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e,n,r=1e3,i=1.5,s=6e4){this.si=e,this.timerId=n,this.Fo=r,this.Mo=i,this.xo=s,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&R("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G1{constructor(e,n,r,i,s,o,a,l){this.si=e,this.Ko=r,this.$o=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new iy(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(be(n.toString()),be("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Uo===n&&this.s_(r,i)},r=>{e(()=>{const i=new A(T.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(i)})})}s_(e,n){const r=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{r(()=>this.o_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return R("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(R("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class KB extends G1{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=iB(this.serializer,e),r=function(s){if(!("targetChange"in s))return j.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?j.min():o.readTime?Ve(o.readTime):j.min()}(e);return this.listener.a_(n,r)}u_(e){const n={};n.database=Ul(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=_h(l)?{documents:v1(s,l)}:{query:w1(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=p1(s,o.resumeToken);const u=Im(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(j.min())>0){a.readTime=Eo(s,o.snapshotVersion.toTimestamp());const u=Im(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=oB(this.serializer,e);r&&(n.labels=r),this.e_(n)}c_(e){const n={};n.database=Ul(this.serializer),n.removeTarget=e,this.e_(n)}}class QB extends G1{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(B(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=sB(e.writeResults,e.commitTime),r=Ve(e.commitTime);return this.listener.I_(r,n)}return B(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=Ul(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Bl(this.serializer,r))};this.e_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YB extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new A(T.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.wo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new A(T.UNKNOWN,i.toString())})}Co(e,n,r,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new A(T.UNKNOWN,s.toString())})}terminate(){this.d_=!0}}class XB{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(be(n),this.f_=!1):R("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JB{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=s,this.F_.ro(o=>{r.enqueueAndForget(async()=>{fi(this)&&(R("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=D(l);u.C_.add(4),await Ho(u),u.M_.set("Unknown"),u.C_.delete(4),await wu(u)}(this))})}),this.M_=new XB(r,i)}}async function wu(t){if(fi(t))for(const e of t.v_)await e(!0)}async function Ho(t){for(const e of t.v_)await e(!1)}function Nd(t,e){const n=D(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),ay(n)?oy(n):Qo(n).Ho()&&sy(n,e))}function jl(t,e){const n=D(t),r=Qo(n);n.D_.delete(e),r.Ho()&&H1(n,e),n.D_.size===0&&(r.Ho()?r.Zo():fi(n)&&n.M_.set("Unknown"))}function sy(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(j.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Qo(t).u_(e)}function H1(t,e){t.x_.Oe(e),Qo(t).c_(e)}function oy(t){t.x_=new XU({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Qo(t).start(),t.M_.g_()}function ay(t){return fi(t)&&!Qo(t).jo()&&t.D_.size>0}function fi(t){return D(t).C_.size===0}function K1(t){t.x_=void 0}async function ZB(t){t.D_.forEach((e,n)=>{sy(t,e)})}async function ej(t,e){K1(t),ay(t)?(t.M_.w_(e),oy(t)):t.M_.set("Unknown")}async function tj(t,e,n){if(t.M_.set("Online"),e instanceof f1&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.D_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.D_.delete(a),i.x_.removeTarget(a))}(t,e)}catch(r){R("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Rh(t,r)}else if(e instanceof Sc?t.x_.$e(e):e instanceof d1?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(j.min()))try{const r=await U1(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.x_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.D_.get(u);c&&s.D_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.D_.get(l);if(!c)return;s.D_.set(l,c.withResumeToken(Be.EMPTY_BYTE_STRING,c.snapshotVersion)),H1(s,l);const h=new Hn(c.target,l,u,c.sequenceNumber);sy(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){R("RemoteStore","Failed to raise snapshot:",r),await Rh(t,r)}}async function Rh(t,e,n){if(!hi(e))throw e;t.C_.add(1),await Ho(t),t.M_.set("Offline"),n||(n=()=>U1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{R("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await wu(t)})}function Q1(t,e){return e().catch(n=>Rh(t,n,e))}async function Ko(t){const e=D(t),n=Zr(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;nj(e);)try{const i=await jB(e.localStore,r);if(i===null){e.b_.length===0&&n.Zo();break}r=i.batchId,rj(e,i)}catch(i){await Rh(e,i)}Y1(e)&&X1(e)}function nj(t){return fi(t)&&t.b_.length<10}function rj(t,e){t.b_.push(e);const n=Zr(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function Y1(t){return fi(t)&&!Zr(t).jo()&&t.b_.length>0}function X1(t){Zr(t).start()}async function ij(t){Zr(t).E_()}async function sj(t){const e=Zr(t);for(const n of t.b_)e.P_(n.mutations)}async function oj(t,e,n){const r=t.b_.shift(),i=G_.from(r,e,n);await Q1(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ko(t)}async function aj(t,e){e&&Zr(t).h_&&await async function(r,i){if(function(o){return u1(o)&&o!==T.ABORTED}(i.code)){const s=r.b_.shift();Zr(r).Yo(),await Q1(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Ko(r)}}(t,e),Y1(t)&&X1(t)}async function YI(t,e){const n=D(t);n.asyncQueue.verifyOperationInProgress(),R("RemoteStore","RemoteStore received new credentials");const r=fi(n);n.C_.add(3),await Ho(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await wu(n)}async function Cm(t,e){const n=D(t);e?(n.C_.delete(2),await wu(n)):e||(n.C_.add(2),await Ho(n),n.M_.set("Unknown"))}function Qo(t){return t.O_||(t.O_=function(n,r,i){const s=D(n);return s.A_(),new KB(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ho:ZB.bind(null,t),Io:ej.bind(null,t),a_:tj.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),ay(t)?oy(t):t.M_.set("Unknown")):(await t.O_.stop(),K1(t))})),t.O_}function Zr(t){return t.N_||(t.N_=function(n,r,i){const s=D(n);return s.A_(),new QB(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ho:ij.bind(null,t),Io:aj.bind(null,t),T_:sj.bind(null,t),I_:oj.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await Ko(t)):(await t.N_.stop(),t.b_.length>0&&(R("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ge,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new ly(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new A(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Yo(t,e){if(be("AsyncQueue",`${e}: ${t}`),hi(t))return new A(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e){this.comparator=e?(n,r)=>e(n,r)||b.comparator(n.key,r.key):(n,r)=>b.comparator(n.key,r.key),this.keyedMap=Pa(),this.sortedSet=new ae(this.comparator)}static emptySet(e){return new so(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof so)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new so;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(){this.B_=new ae(b.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):L():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class So{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new So(e,n,so.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&pu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lj{constructor(){this.k_=void 0,this.listeners=[]}}class uj{constructor(){this.queries=new di(e=>KR(e),pu),this.onlineState="Unknown",this.q_=new Set}}async function uy(t,e){const n=D(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new lj),i)try{s.k_=await n.onListen(r)}catch(o){const a=Yo(o,`Initialization of query '${Ps(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Q_(n.onlineState),s.k_&&e.K_(s.k_)&&hy(n)}async function cy(t,e){const n=D(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function cj(t,e){const n=D(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.K_(i)&&(r=!0);o.k_=i}}r&&hy(n)}function hj(t,e,n){const r=D(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function hy(t){t.q_.forEach(e=>{e.next()})}class dy{constructor(e,n,r){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new So(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=So.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dj{constructor(e,n){this.Y_=e,this.byteLength=n}Z_(){return"metadata"in this.Y_}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(e){this.serializer=e}hs(e){return Ln(this.serializer,e)}Ps(e){return e.metadata.exists?y1(this.serializer,e.document,!1):ce.newNoDocument(this.hs(e.metadata.name),this.Is(e.metadata.readTime))}Is(e){return Ve(e)}}class fj{constructor(e,n,r){this.X_=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=J1(e)}ea(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.Y_.namedQuery)this.queries.push(e.Y_.namedQuery);else if(e.Y_.documentMetadata){this.documents.push({metadata:e.Y_.documentMetadata}),e.Y_.documentMetadata.exists||++n;const r=J.fromString(e.Y_.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Y_.document&&(this.documents[this.documents.length-1].document=e.Y_.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}ta(e){const n=new Map,r=new JI(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.hs(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||q()).add(s);n.set(o,a)}}return n}async complete(){const e=await $B(this.localStore,new JI(this.serializer),this.documents,this.X_.id),n=this.ta(this.documents);for(const r of this.queries)await zB(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,na:this.collectionGroups,ra:e}}}function J1(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z1{constructor(e){this.key=e}}class eP{constructor(e){this.key=e}}class tP{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=q(),this.mutatedKeys=q(),this._a=YR(e),this.aa=new so(this._a)}get ua(){return this.ia}ca(e,n){const r=n?n.la:new XI,i=n?n.aa:this.aa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),f=mu(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),v=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let I=!1;d&&f?d.data.isEqual(f.data)?y!==v&&(r.track({type:3,doc:f}),I=!0):this.ha(d,f)||(r.track({type:2,doc:f}),I=!0,(l&&this._a(f,l)>0||u&&this._a(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),I=!0):d&&!f&&(r.track({type:1,doc:d}),I=!0,(l||u)&&(a=!0)),I&&(f?(o=o.add(f),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{aa:o,la:r,Zi:a,mutatedKeys:s}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const o=e.la.L_();o.sort((c,h)=>function(f,y){const v=I=>{switch(I){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L()}};return v(f)-v(y)}(c.type,h.type)||this._a(c.doc,h.doc)),this.Pa(r),i=i!=null&&i;const a=n&&!i?this.Ia():[],l=this.oa.size===0&&this.current&&!i?1:0,u=l!==this.sa;return this.sa=l,o.length!==0||u?{snapshot:new So(this.query,e.aa,s,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new XI,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=q(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return e.forEach(r=>{this.oa.has(r)||n.push(new eP(r))}),this.oa.forEach(r=>{e.has(r)||n.push(new Z1(r))}),n}da(e){this.ia=e.ls,this.oa=q();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return So.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class pj{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class mj{constructor(e){this.key=e,this.Ra=!1}}class gj{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new di(a=>KR(a),pu),this.fa=new Map,this.ga=new Set,this.pa=new ae(b.comparator),this.ya=new Map,this.wa=new Z_,this.Sa={},this.ba=new Map,this.Da=ss.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function _j(t,e){const n=_y(t);let r,i;const s=n.ma.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Aa();else{const o=await To(n.localStore,At(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await fy(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Nd(n.remoteStore,o)}return i}async function fy(t,e,n,r,i){t.va=(h,d,f)=>async function(v,I,m,p){let g=I.view.ca(m);g.Zi&&(g=await Th(v.localStore,I.query,!1).then(({documents:N})=>I.view.ca(N,g)));const E=p&&p.targetChanges.get(I.targetId),S=p&&p.targetMismatches.get(I.targetId)!=null,C=I.view.applyChanges(g,v.isPrimaryClient,E,S);return km(v,I.targetId,C.Ta),C.snapshot}(t,h,d,f);const s=await Th(t.localStore,e,!0),o=new tP(e,s.ls),a=o.ca(s.documents),l=yu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);km(t,n,u.Ta);const c=new pj(e,n,o);return t.ma.set(e,c),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),u.snapshot}async function yj(t,e){const n=D(t),r=n.ma.get(e),i=n.fa.get(r.targetId);if(i.length>1)return n.fa.set(r.targetId,i.filter(s=>!pu(s,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Ao(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),jl(n.remoteStore,r.targetId),Ro(n,r.targetId)}).catch(ci)):(Ro(n,r.targetId),await Ao(n.localStore,r.targetId,!0))}async function vj(t,e,n){const r=yy(t);try{const i=await function(o,a){const l=D(o),u=ge.now(),c=a.reduce((f,y)=>f.add(y.key),q());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let y=Vt(),v=q();return l.ss.getEntries(f,c).next(I=>{y=I,y.forEach((m,p)=>{p.isValidDocument()||(v=v.add(m))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,y)).next(I=>{h=I;const m=[];for(const p of a){const g=KU(p,h.get(p.key).overlayedDocument);g!=null&&m.push(new fr(p.key,g,UR(g.value.mapValue),me.exists(!0)))}return l.mutationQueue.addMutationBatch(f,u,m,a)}).next(I=>{d=I;const m=I.applyToLocalDocumentSet(h,v);return l.documentOverlayCache.saveOverlays(f,I.batchId,m)})}).then(()=>({batchId:d.batchId,changes:JR(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Sa[o.currentUser.toKey()];u||(u=new ae(z)),u=u.insert(a,l),o.Sa[o.currentUser.toKey()]=u}(r,i.batchId,n),await pr(r,i.changes),await Ko(r.remoteStore)}catch(i){const s=Yo(i,"Failed to persist write");n.reject(s)}}async function nP(t,e){const n=D(t);try{const r=await BB(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.ya.get(s);o&&(B(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ra=!0:i.modifiedDocuments.size>0?B(o.Ra):i.removedDocuments.size>0&&(B(o.Ra),o.Ra=!1))}),await pr(n,r,e)}catch(r){await ci(r)}}function ZI(t,e,n){const r=D(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ma.forEach((s,o)=>{const a=o.view.Q_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=D(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const d of h.listeners)d.Q_(a)&&(u=!0)}),u&&hy(l)}(r.eventManager,e),i.length&&r.Va.a_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function wj(t,e,n){const r=D(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ya.get(e),s=i&&i.key;if(s){let o=new ae(b.comparator);o=o.insert(s,ce.newNoDocument(s,j.min()));const a=q().add(s),l=new _u(j.min(),new Map,new ae(z),o,a);await nP(r,l),r.pa=r.pa.remove(s),r.ya.delete(e),gy(r)}else await Ao(r.localStore,e,!1).then(()=>Ro(r,e,n)).catch(ci)}async function Ij(t,e){const n=D(t),r=e.batch.batchId;try{const i=await UB(n.localStore,e);my(n,r,null),py(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await pr(n,i)}catch(i){await ci(i)}}async function Ej(t,e,n){const r=D(t);try{const i=await function(o,a){const l=D(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(B(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);my(r,e,n),py(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await pr(r,i)}catch(i){await ci(i)}}async function Tj(t,e){const n=D(t);fi(n.remoteStore)||R("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=D(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",l=>a.mutationQueue.getHighestUnacknowledgedBatchId(l))}(n.localStore);if(r===-1)return void e.resolve();const i=n.ba.get(r)||[];i.push(e),n.ba.set(r,i)}catch(r){const i=Yo(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function py(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function my(t,e,n){const r=D(t);let i=r.Sa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Sa[r.currentUser.toKey()]=i}}function Ro(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.fa.get(e))t.ma.delete(r),n&&t.Va.Fa(r,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(r=>{t.wa.containsKey(r)||rP(t,r)})}function rP(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(jl(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),gy(t))}function km(t,e,n){for(const r of n)r instanceof Z1?(t.wa.addReference(r.key,e),Aj(t,r)):r instanceof eP?(R("SyncEngine","Document no longer in limbo: "+r.key),t.wa.removeReference(r.key,e),t.wa.containsKey(r.key)||rP(t,r.key)):L()}function Aj(t,e){const n=e.key,r=n.path.canonicalString();t.pa.get(n)||t.ga.has(r)||(R("SyncEngine","New document in limbo: "+n),t.ga.add(r),gy(t))}function gy(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new b(J.fromString(e)),r=t.Da.next();t.ya.set(r,new mj(n)),t.pa=t.pa.insert(n,r),Nd(t.remoteStore,new Hn(At(qo(n.path)),r,"TargetPurposeLimboResolution",bt._e))}}async function pr(t,e,n){const r=D(t),i=[],s=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,l)=>{o.push(r.va(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=ny.Qi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Va.a_(i),await async function(l,u){const c=D(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>w.forEach(u,d=>w.forEach(d.ki,f=>c.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>w.forEach(d.qi,f=>c.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!hi(h))throw h;R("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const f=c.ts.get(d),y=f.snapshotVersion,v=f.withLastLimboFreeSnapshotVersion(y);c.ts=c.ts.insert(d,v)}}}(r.localStore,s))}async function Sj(t,e){const n=D(t);if(!n.currentUser.isEqual(e)){R("SyncEngine","User change. New user:",e.toKey());const r=await F1(n.localStore,e);n.currentUser=e,function(s,o){s.ba.forEach(a=>{a.forEach(l=>{l.reject(new A(T.CANCELLED,o))})}),s.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await pr(n,r._s)}}function Rj(t,e){const n=D(t),r=n.ya.get(e);if(r&&r.Ra)return q().add(r.key);{let i=q();const s=n.fa.get(e);if(!s)return i;for(const o of s){const a=n.ma.get(o);i=i.unionWith(a.view.ua)}return i}}async function Pj(t,e){const n=D(t),r=await Th(n.localStore,e.query,!0),i=e.view.da(r);return n.isPrimaryClient&&km(n,e.targetId,i.Ta),i}async function Cj(t,e){const n=D(t);return $1(n.localStore,e).then(r=>pr(n,r))}async function kj(t,e,n,r){const i=D(t),s=await function(a,l){const u=D(a),c=D(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",h=>c.Cn(h,l).next(d=>d?u.localDocuments.getDocuments(h,d):w.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await Ko(i.remoteStore):n==="acknowledged"||n==="rejected"?(my(i,e,r||null),py(i,e),function(a,l){D(D(a).mutationQueue).Fn(l)}(i.localStore,e)):L(),await pr(i,s)):R("SyncEngine","Cannot apply mutation batch with id: "+e)}async function xj(t,e){const n=D(t);if(_y(n),yy(n),e===!0&&n.Ca!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await eE(n,r.toArray());n.Ca=!0,await Cm(n.remoteStore,!0);for(const s of i)Nd(n.remoteStore,s)}else if(e===!1&&n.Ca!==!1){const r=[];let i=Promise.resolve();n.fa.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Ro(n,o),Ao(n.localStore,o,!0))),jl(n.remoteStore,o)}),await i,await eE(n,r),function(o){const a=D(o);a.ya.forEach((l,u)=>{jl(a.remoteStore,u)}),a.wa.Vr(),a.ya=new Map,a.pa=new ae(b.comparator)}(n),n.Ca=!1,await Cm(n.remoteStore,!1)}}async function eE(t,e,n){const r=D(t),i=[],s=[];for(const o of e){let a;const l=r.fa.get(o);if(l&&l.length!==0){a=await To(r.localStore,At(l[0]));for(const u of l){const c=r.ma.get(u),h=await Pj(r,c);h.snapshot&&s.push(h.snapshot)}}else{const u=await j1(r.localStore,o);a=await To(r.localStore,u),await fy(r,iP(u),o,!1,a.resumeToken)}i.push(a)}return r.Va.a_(s),i}function iP(t){return HR(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function Nj(t){return function(n){return D(D(n).persistence).Bi()}(D(t).localStore)}async function bj(t,e,n,r){const i=D(t);if(i.Ca)return void R("SyncEngine","Ignoring unexpected query state notification.");const s=i.fa.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await $1(i.localStore,QR(s[0])),a=_u.createSynthesizedRemoteEventForCurrentChange(e,n==="current",Be.EMPTY_BYTE_STRING);await pr(i,o,a);break}case"rejected":await Ao(i.localStore,e,!0),Ro(i,e,r);break;default:L()}}async function Dj(t,e,n){const r=_y(t);if(r.Ca){for(const i of e){if(r.fa.has(i)){R("SyncEngine","Adding an already active target "+i);continue}const s=await j1(r.localStore,i),o=await To(r.localStore,s);await fy(r,iP(s),o.targetId,!1,o.resumeToken),Nd(r.remoteStore,o)}for(const i of n)r.fa.has(i)&&await Ao(r.localStore,i,!1).then(()=>{jl(r.remoteStore,i),Ro(r,i)}).catch(ci)}}function _y(t){const e=D(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=nP.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Rj.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=wj.bind(null,e),e.Va.a_=cj.bind(null,e.eventManager),e.Va.Fa=hj.bind(null,e.eventManager),e}function yy(t){const e=D(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ij.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ej.bind(null,e),e}function Vj(t,e,n){const r=D(t);(async function(s,o,a){try{const l=await o.getMetadata();if(await function(f,y){const v=D(f),I=Ve(y.createTime);return v.persistence.runTransaction("hasNewerBundle","readonly",m=>v.Kr.getBundleMetadata(m,y.id)).then(m=>!!m&&m.createTime.compareTo(I)>=0)}(s.localStore,l))return await o.close(),a._completeWith(function(f){return{taskState:"Success",documentsLoaded:f.totalDocuments,bytesLoaded:f.totalBytes,totalDocuments:f.totalDocuments,totalBytes:f.totalBytes}}(l)),Promise.resolve(new Set);a._updateProgress(J1(l));const u=new fj(l,s.localStore,o.serializer);let c=await o.Ma();for(;c;){const d=await u.ea(c);d&&a._updateProgress(d),c=await o.Ma()}const h=await u.complete();return await pr(s,h.ra,void 0),await function(f,y){const v=D(f);return v.persistence.runTransaction("Save bundle","readwrite",I=>v.Kr.saveBundleMetadata(I,y))}(s.localStore,l),a._completeWith(h.progress),Promise.resolve(h.na)}catch(l){return yn("SyncEngine",`Loading bundle failed with ${l}`),a._failWith(l),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class xm{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=vu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return M1(this.persistence,new L1,e.initialUser,this.serializer)}createPersistence(e){return new O1(xd.jr,this.serializer)}createSharedClientState(e){return new q1}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class sP extends xm{constructor(e,n,r){super(),this.xa=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.xa.initialize(this,e),await yy(this.xa.syncEngine),await Ko(this.xa.remoteStore),await this.persistence.mi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return M1(this.persistence,new L1,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new EB(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new sU(n,this.persistence);return new iU(e.asyncQueue,r)}createPersistence(e){const n=ty(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?kt.withCacheSize(this.cacheSizeBytes):kt.DEFAULT;return new ey(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,W1(),Rc(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new q1}}class Oj extends sP{constructor(e,n){super(e,n,!1),this.xa=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.xa.syncEngine;this.sharedClientState instanceof Gf&&(this.sharedClientState.syncEngine={Ys:kj.bind(null,n),Zs:bj.bind(null,n),Xs:Dj.bind(null,n),Bi:Nj.bind(null,n),Js:Cj.bind(null,n)},await this.sharedClientState.start()),await this.persistence.mi(async r=>{await xj(this.xa.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=W1();if(!Gf.D(n))throw new A(T.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=ty(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Gf(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class vy{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ZI(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Sj.bind(null,this.syncEngine),await Cm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new uj}()}createDatastore(e){const n=vu(e.databaseInfo.databaseId),r=function(s){return new HB(s)}(e.databaseInfo);return function(s,o,a,l){return new YB(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new JB(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>ZI(this.syncEngine,n,0),function(){return QI.D()?new QI:new qB}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const h=new gj(i,s,o,a,l,u);return c&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=D(n);R("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await Ho(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tE(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):be("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lj{constructor(e,n){this.Ba=e,this.serializer=n,this.metadata=new Ge,this.buffer=new Uint8Array,this.La=function(){return new TextDecoder("utf-8")}(),this.ka().then(r=>{r&&r.Z_()?this.metadata.resolve(r.Y_.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Y_)}`))},r=>this.metadata.reject(r))}close(){return this.Ba.cancel()}async getMetadata(){return this.metadata.promise}async Ma(){return await this.getMetadata(),this.ka()}async ka(){const e=await this.qa();if(e===null)return null;const n=this.La.decode(e),r=Number(n);isNaN(r)&&this.Qa(`length string (${n}) is not valid number`);const i=await this.Ka(r);return new dj(JSON.parse(i),e.length+r)}$a(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async qa(){for(;this.$a()<0&&!await this.Ua(););if(this.buffer.length===0)return null;const e=this.$a();e<0&&this.Qa("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Ka(e){for(;this.buffer.length<e;)await this.Ua()&&this.Qa("Reached the end of bundle when more is expected.");const n=this.La.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}Qa(e){throw this.Ba.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ua(){const e=await this.Ba.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mj{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new A(T.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(i,s){const o=D(i),a=Ul(o.serializer)+"/documents",l={documents:s.map(d=>Fl(o.serializer,d))},u=await o.Co("BatchGetDocuments",a,l,s.length),c=new Map;u.forEach(d=>{const f=rB(o.serializer,d);c.set(f.key.toString(),f)});const h=[];return s.forEach(d=>{const f=c.get(d.toString());B(!!f),h.push(f)}),h}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Go(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=b.fromPath(r);this.mutations.push(new q_(i,this.precondition(i)))}),await async function(r,i){const s=D(r),o=Ul(s.serializer)+"/documents",a={writes:i.map(l=>Bl(s.serializer,l))};await s.wo("Commit",o,a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw L();n=j.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new A(T.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(j.min())?me.exists(!1):me.updateTime(n):me.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(j.min()))throw new A(T.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return me.updateTime(n)}return me.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fj{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.Wa=r.maxAttempts,this.zo=new iy(this.asyncQueue,"transaction_retry")}run(){this.Wa-=1,this.Ga()}Ga(){this.zo.ko(async()=>{const e=new Mj(this.datastore),n=this.za(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.ja(i)}))}).catch(r=>{this.ja(r)})})}za(e){try{const n=this.updateFunction(e);return!du(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}ja(e){this.Wa>0&&this.Ha(e)?(this.Wa-=1,this.asyncQueue.enqueueAndForget(()=>(this.Ga(),Promise.resolve()))):this.deferred.reject(e)}Ha(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!u1(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uj{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=qe.UNAUTHENTICATED,this.clientId=SR.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{R("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(R("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new A(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ge;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Yo(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Pc(t,e){t.asyncQueue.verifyOperationInProgress(),R("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await F1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Nm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await wy(t);R("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>YI(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>YI(e.remoteStore,s)),t._onlineComponents=e}function oP(t){return t.name==="FirebaseError"?t.code===T.FAILED_PRECONDITION||t.code===T.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function wy(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){R("FirestoreClient","Using user provided OfflineComponentProvider");try{await Pc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!oP(n))throw n;yn("Error using user provided cache. Falling back to memory cache: "+n),await Pc(t,new xm)}}else R("FirestoreClient","Using default OfflineComponentProvider"),await Pc(t,new xm);return t._offlineComponents}async function Dd(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(R("FirestoreClient","Using user provided OnlineComponentProvider"),await Nm(t,t._uninitializedComponentsProvider._online)):(R("FirestoreClient","Using default OnlineComponentProvider"),await Nm(t,new vy))),t._onlineComponents}function aP(t){return wy(t).then(e=>e.persistence)}function Iy(t){return wy(t).then(e=>e.localStore)}function lP(t){return Dd(t).then(e=>e.remoteStore)}function Ey(t){return Dd(t).then(e=>e.syncEngine)}function Bj(t){return Dd(t).then(e=>e.datastore)}async function Po(t){const e=await Dd(t),n=e.eventManager;return n.onListen=_j.bind(null,e.syncEngine),n.onUnlisten=yj.bind(null,e.syncEngine),n}function jj(t){return t.asyncQueue.enqueue(async()=>{const e=await aP(t),n=await lP(t);return e.setNetworkEnabled(!0),function(i){const s=D(i);return s.C_.delete(0),wu(s)}(n)})}function $j(t){return t.asyncQueue.enqueue(async()=>{const e=await aP(t),n=await lP(t);return e.setNetworkEnabled(!1),async function(i){const s=D(i);s.C_.add(0),await Ho(s),s.M_.set("Offline")}(n)})}function zj(t,e){const n=new Ge;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(u,c){const h=D(u);return h.persistence.runTransaction("read document","readonly",d=>h.localDocuments.getDocument(d,c))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new A(T.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const l=Yo(a,`Failed to get document '${s} from cache`);o.reject(l)}}(await Iy(t),e,n)),n.promise}function uP(t,e,n={}){const r=new Ge;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new bd({next:d=>{o.enqueueAndForget(()=>cy(s,h));const f=d.docs.has(a);!f&&d.fromCache?u.reject(new A(T.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&l&&l.source==="server"?u.reject(new A(T.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new dy(qo(a.path),c,{includeMetadataChanges:!0,J_:!0});return uy(s,h)}(await Po(t),t.asyncQueue,e,n,r)),r.promise}function qj(t,e){const n=new Ge;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await Th(i,s,!0),l=new tP(s,a.ls),u=l.ca(a.documents),c=l.applyChanges(u,!1);o.resolve(c.snapshot)}catch(a){const l=Yo(a,`Failed to execute query '${s} against cache`);o.reject(l)}}(await Iy(t),e,n)),n.promise}function cP(t,e,n={}){const r=new Ge;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new bd({next:d=>{o.enqueueAndForget(()=>cy(s,h)),d.fromCache&&l.source==="server"?u.reject(new A(T.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new dy(a,c,{includeMetadataChanges:!0,J_:!0});return uy(s,h)}(await Po(t),t.asyncQueue,e,n,r)),r.promise}function Wj(t,e){const n=new bd(e);return t.asyncQueue.enqueueAndForget(async()=>function(i,s){D(i).q_.add(s),s.next()}(await Po(t),n)),()=>{n.Na(),t.asyncQueue.enqueueAndForget(async()=>function(i,s){D(i).q_.delete(s)}(await Po(t),n))}}function Gj(t,e,n,r){const i=function(o,a){let l;return l=typeof o=="string"?h1().encode(o):o,function(c,h){return new Lj(c,h)}(function(c,h){if(c instanceof Uint8Array)return tE(c,h);if(c instanceof ArrayBuffer)return tE(new Uint8Array(c),h);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(l),a)}(n,vu(e));t.asyncQueue.enqueueAndForget(async()=>{Vj(await Ey(t),i,r)})}function Hj(t,e){return t.asyncQueue.enqueue(async()=>function(r,i){const s=D(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.Kr.getNamedQuery(o,i))}(await Iy(t),e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hP(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ty(t,e,n){if(!n)throw new A(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function dP(t,e,n,r){if(e===!0&&r===!0)throw new A(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function rE(t){if(!b.isDocumentKey(t))throw new A(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function iE(t){if(b.isDocumentKey(t))throw new A(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Vd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":L()}function ee(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new A(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Vd(t);throw new A(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function fP(t,e){if(e<=0)throw new A(T.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new A(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new A(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}dP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hP((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new A(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new A(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new A(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Iu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sE({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new A(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new A(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sE(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new HF;switch(r.type){case"firstParty":return new XF(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new A(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=nE.get(n);r&&(R("ComponentProvider","Removing Datastore"),nE.delete(n),r.terminate())}(this),Promise.resolve()}}function Kj(t,e,n,r={}){var i;const s=(t=ee(t,Iu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&yn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=qe.MOCK_USER;else{a=U0(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new A(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new qe(u)}t._authCredentials=new KF(new AR(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let St=class pP{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new pP(this.firestore,e,this._query)}},ve=class mP{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $r(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new mP(this.firestore,e,this._key)}},$r=class gP extends St{constructor(e,n,r){super(e,n,qo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ve(this.firestore,null,new b(e))}withConverter(e){return new gP(this.firestore,e,this._path)}};function _P(t,e,...n){if(t=U(t),Ty("collection","path",e),t instanceof Iu){const r=J.fromString(e,...n);return iE(r),new $r(t,null,r)}{if(!(t instanceof ve||t instanceof $r))throw new A(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(J.fromString(e,...n));return iE(r),new $r(t.firestore,null,r)}}function Qj(t,e){if(t=ee(t,Iu),Ty("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new A(T.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new St(t,null,function(r){return new dr(J.emptyPath(),r)}(e))}function Ph(t,e,...n){if(t=U(t),arguments.length===1&&(e=SR.newId()),Ty("doc","path",e),t instanceof Iu){const r=J.fromString(e,...n);return rE(r),new ve(t,null,new b(r))}{if(!(t instanceof ve||t instanceof $r))throw new A(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(J.fromString(e,...n));return rE(r),new ve(t.firestore,t instanceof $r?t.converter:null,new b(r))}}function yP(t,e){return t=U(t),e=U(e),(t instanceof ve||t instanceof $r)&&(e instanceof ve||e instanceof $r)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function vP(t,e){return t=U(t),e=U(e),t instanceof St&&e instanceof St&&t.firestore===e.firestore&&pu(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yj{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new iy(this,"async_queue_retry"),this.iu=()=>{const n=Rc();n&&R("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=Rc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=Rc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new Ge;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!hi(e))throw e;R("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(r=>{this.eu=r,this.tu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw be("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(e,n,r){this.su(),this.ru.indexOf(e)>-1&&(n=0);const i=ly.createAndSchedule(this,e,n,r,s=>this.au(s));return this.Xa.push(i),i}su(){this.eu&&L()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}function bm(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Xj{constructor(){this._progressObserver={},this._taskCompletionResolver=new Ge,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jj=-1;let Pe=class extends Iu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new Yj}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||wP(this),this._firestoreClient.terminate()}};function Ye(t){return t._firestoreClient||wP(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function wP(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new RU(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,hP(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new Uj(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function Zj(t,e){EP(t=ee(t,Pe));const n=Ye(t);if(n._uninitializedComponentsProvider)throw new A(T.FAILED_PRECONDITION,"SDK cache is already specified.");yn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),i=new vy;return IP(n,i,new sP(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function e4(t){EP(t=ee(t,Pe));const e=Ye(t);if(e._uninitializedComponentsProvider)throw new A(T.FAILED_PRECONDITION,"SDK cache is already specified.");yn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),r=new vy;return IP(e,r,new Oj(r,n.cacheSizeBytes))}function IP(t,e,n){const r=new Ge;return t.asyncQueue.enqueue(async()=>{try{await Pc(t,n),await Nm(t,e),r.resolve()}catch(i){const s=i;if(!oP(s))throw s;yn("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function t4(t){if(t._initialized&&!t._terminated)throw new A(T.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Ge;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!dn.D())return Promise.resolve();const i=r+"main";await dn.delete(i)}(ty(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function n4(t){return function(n){const r=new Ge;return n.asyncQueue.enqueueAndForget(async()=>Tj(await Ey(n),r)),r.promise}(Ye(t=ee(t,Pe)))}function r4(t){return jj(Ye(t=ee(t,Pe)))}function i4(t){return $j(Ye(t=ee(t,Pe)))}function s4(t,e){const n=Ye(t=ee(t,Pe)),r=new Xj;return Gj(n,t._databaseId,e,r),r}function o4(t,e){return Hj(Ye(t=ee(t,Pe)),e).then(n=>n?new St(t,null,n.query):null)}function EP(t){if(t._initialized||t._terminated)throw new A(T.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Un(Be.fromBase64String(e))}catch(n){throw new A(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Un(Be.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ei=class{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new A(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fs=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new A(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new A(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return z(this._lat,e._lat)||z(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a4=/^__.*__$/;class l4{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new fr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Wo(e,this.data,n,this.fieldTransforms)}}class TP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new fr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function AP(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L()}}class Ld{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new Ld(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:r,du:!1});return i.Au(e),i}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:r,du:!1});return i.Pu(),i}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return Ch(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(AP(this.Iu)&&a4.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class u4{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||vu(e)}pu(e,n,r,i=!1){return new Ld({Iu:e,methodName:n,gu:r,path:pe.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ps(t){const e=t._freezeSettings(),n=vu(t._databaseId);return new u4(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Md(t,e,n,r,i,s={}){const o=t.pu(s.merge||s.mergeFields?2:0,e,n,i);Py("Data must be an object, but it was:",o,r);const a=PP(r,o);let l,u;if(s.merge)l=new Dt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=Dm(e,h,n);if(!o.contains(d))throw new A(T.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);kP(c,d)||c.push(d)}l=new Dt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new l4(new et(a),l,u)}class Eu extends fs{_toFieldTransform(e){if(e.Iu!==2)throw e.Iu===1?e.mu(`${this._methodName}() can only appear at the top level of your update data`):e.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Eu}}function SP(t,e,n){return new Ld({Iu:3,gu:e.settings.gu,methodName:t._methodName,du:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Ay extends fs{_toFieldTransform(e){return new gu(e.path,new wo)}isEqual(e){return e instanceof Ay}}class c4 extends fs{constructor(e,n){super(e),this.yu=n}_toFieldTransform(e){const n=SP(this,e,!0),r=this.yu.map(s=>ms(s,n)),i=new ts(r);return new gu(e.path,i)}isEqual(e){return this===e}}class h4 extends fs{constructor(e,n){super(e),this.yu=n}_toFieldTransform(e){const n=SP(this,e,!0),r=this.yu.map(s=>ms(s,n)),i=new ns(r);return new gu(e.path,i)}isEqual(e){return this===e}}class d4 extends fs{constructor(e,n){super(e),this.wu=n}_toFieldTransform(e){const n=new Io(e.serializer,n1(e.serializer,this.wu));return new gu(e.path,n)}isEqual(e){return this===e}}function Sy(t,e,n,r){const i=t.pu(1,e,n);Py("Data must be an object, but it was:",i,r);const s=[],o=et.empty();ds(r,(l,u)=>{const c=Cy(e,l,n);u=U(u);const h=i.Ru(c);if(u instanceof Eu)s.push(c);else{const d=ms(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new Dt(s);return new TP(o,a,i.fieldTransforms)}function Ry(t,e,n,r,i,s){const o=t.pu(1,e,n),a=[Dm(e,r,n)],l=[i];if(s.length%2!=0)throw new A(T.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Dm(e,s[d])),l.push(s[d+1]);const u=[],c=et.empty();for(let d=a.length-1;d>=0;--d)if(!kP(u,a[d])){const f=a[d];let y=l[d];y=U(y);const v=o.Ru(f);if(y instanceof Eu)u.push(f);else{const I=ms(y,v);I!=null&&(u.push(f),c.set(f,I))}}const h=new Dt(u);return new TP(c,h,o.fieldTransforms)}function RP(t,e,n,r=!1){return ms(n,t.pu(r?4:3,e))}function ms(t,e){if(CP(t=U(t)))return Py("Unsupported field value:",e,t),PP(t,e);if(t instanceof fs)return function(r,i){if(!AP(i.Iu))throw i.mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=ms(a,i.Vu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=U(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return n1(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ge.fromDate(r);return{timestampValue:Eo(i.serializer,s)}}if(r instanceof ge){const s=new ge(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Eo(i.serializer,s)}}if(r instanceof Od)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Un)return{bytesValue:p1(i.serializer,r._byteString)};if(r instanceof ve){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Q_(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.mu(`Unsupported field value: ${Vd(r)}`)}(t,e)}function PP(t,e){const n={};return LR(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ds(t,(r,i)=>{const s=ms(i,e.Eu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function CP(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ge||t instanceof Od||t instanceof Un||t instanceof ve||t instanceof fs)}function Py(t,e,n){if(!CP(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Vd(n);throw r==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+r)}}function Dm(t,e,n){if((e=U(e))instanceof ei)return e._internalPath;if(typeof e=="string")return Cy(t,e);throw Ch("Field path arguments must be of type string or ",t,!1,void 0,n)}const f4=new RegExp("[~\\*/\\[\\]]");function Cy(t,e,n){if(e.search(f4)>=0)throw Ch(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ei(...e.split("."))._internalPath}catch{throw Ch(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ch(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new A(T.INVALID_ARGUMENT,a+t+l)}function kP(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ve(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new p4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Fd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class p4 extends $l{data(){return super.data()}}function Fd(t,e){return typeof e=="string"?Cy(t,e):e instanceof ei?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new A(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ky{}class Tu extends ky{}function vr(t,e,...n){let r=[];e instanceof ky&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof xy).length,a=s.filter(l=>l instanceof Ud).length;if(o>1||o>0&&a>0)throw new A(T.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Ud extends Tu{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ud(e,n,r)}_apply(e){const n=this._parse(e);return bP(e._query,n),new St(e.firestore,e.converter,wm(e._query,n))}_parse(e){const n=ps(e.firestore);return function(s,o,a,l,u,c,h){let d;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new A(T.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){aE(h,c);const f=[];for(const y of h)f.push(oE(l,s,y));d={arrayValue:{values:f}}}else d=oE(l,s,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||aE(h,c),d=RP(a,o,h,c==="in"||c==="not-in");return Q.create(u,c,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function m4(t,e,n){const r=e,i=Fd("where",t);return Ud._create(i,r,n)}class xy extends ky{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new xy(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:ne.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)bP(o,l),o=wm(o,l)}(e._query,n),new St(e.firestore,e.converter,wm(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ny extends Tu{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Ny(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new A(T.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new A(T.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ml(s,o)}(e._query,this._field,this._direction);return new St(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new dr(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function g4(t,e="asc"){const n=e,r=Fd("orderBy",t);return Ny._create(r,n)}class Bd extends Tu{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Bd(e,n,r)}_apply(e){return new St(e.firestore,e.converter,vh(e._query,this._limit,this._limitType))}}function _4(t){return fP("limit",t),Bd._create("limit",t,"F")}function y4(t){return fP("limitToLast",t),Bd._create("limitToLast",t,"L")}class jd extends Tu{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new jd(e,n,r)}_apply(e){const n=NP(e,this.type,this._docOrFields,this._inclusive);return new St(e.firestore,e.converter,function(i,s){return new dr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function v4(...t){return jd._create("startAt",t,!0)}function w4(...t){return jd._create("startAfter",t,!1)}class $d extends Tu{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new $d(e,n,r)}_apply(e){const n=NP(e,this.type,this._docOrFields,this._inclusive);return new St(e.firestore,e.converter,function(i,s){return new dr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,n))}}function I4(...t){return $d._create("endBefore",t,!1)}function E4(...t){return $d._create("endAt",t,!0)}function NP(t,e,n,r){if(n[0]=U(n[0]),n[0]instanceof $l)return function(s,o,a,l,u){if(!l)throw new A(T.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const c=[];for(const h of io(s))if(h.field.isKeyField())c.push(Zi(o,l.key));else{const d=l.data.field(h.field);if(Sd(d))throw new A(T.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(d===null){const f=h.field.canonicalString();throw new A(T.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}c.push(d)}return new Jr(c,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=ps(t.firestore);return function(o,a,l,u,c,h){const d=o.explicitOrderBy;if(c.length>d.length)throw new A(T.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let y=0;y<c.length;y++){const v=c[y];if(d[y].field.isKeyField()){if(typeof v!="string")throw new A(T.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof v}`);if(!$_(o)&&v.indexOf("/")!==-1)throw new A(T.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${v}' contains a slash.`);const I=o.path.child(J.fromString(v));if(!b.isDocumentKey(I))throw new A(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${I}' is not because it contains an odd number of segments.`);const m=new b(I);f.push(Zi(a,m))}else{const I=RP(l,u,v);f.push(I)}}return new Jr(f,h)}(t._query,t.firestore._databaseId,i,e,n,r)}}function oE(t,e,n){if(typeof(n=U(n))=="string"){if(n==="")throw new A(T.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!$_(e)&&n.indexOf("/")!==-1)throw new A(T.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(J.fromString(n));if(!b.isDocumentKey(r))throw new A(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Zi(t,new b(r))}if(n instanceof ve)return Zi(t,n._key);throw new A(T.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Vd(n)}.`)}function aE(t,e){if(!Array.isArray(t)||t.length===0)throw new A(T.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function bP(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new A(T.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new A(T.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class by{convertValue(e,n="none"){switch(Ji(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Qr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw L()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ds(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Od(Ae(e.latitude),Ae(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=B_(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Vl(e));default:return null}}convertTimestamp(e){const n=Kr(e);return new ge(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=J.fromString(e);B(A1(r));const i=new Yr(r.get(1),r.get(3)),s=new b(r.popFirst(5));return i.isEqual(n)||be(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class T4 extends by{constructor(e){super(),this.firestore=e}convertBytes(e){return new Un(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ve(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let sr=class extends $l{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Qa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Fd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}},Qa=class extends sr{data(e={}){return super.data(e)}},ti=class{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new bi(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Qa(this._firestore,this._userDataWriter,r.key,r,new bi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new A(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Qa(i._firestore,i._userDataWriter,a.doc.key,a.doc,new bi(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Qa(i._firestore,i._userDataWriter,a.doc.key,a.doc,new bi(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:A4(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}};function A4(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L()}}function DP(t,e){return t instanceof sr&&e instanceof sr?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof ti&&e instanceof ti&&t._firestore===e._firestore&&vP(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S4(t){t=ee(t,ve);const e=ee(t.firestore,Pe);return uP(Ye(e),t._key).then(n=>Dy(e,t,n))}class gs extends by{constructor(e){super(),this.firestore=e}convertBytes(e){return new Un(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ve(this.firestore,null,n)}}function R4(t){t=ee(t,ve);const e=ee(t.firestore,Pe),n=Ye(e),r=new gs(e);return zj(n,t._key).then(i=>new sr(e,r,t._key,i,new bi(i!==null&&i.hasLocalMutations,!0),t.converter))}function P4(t){t=ee(t,ve);const e=ee(t.firestore,Pe);return uP(Ye(e),t._key,{source:"server"}).then(n=>Dy(e,t,n))}function C4(t){t=ee(t,St);const e=ee(t.firestore,Pe),n=Ye(e),r=new gs(e);return xP(t._query),cP(n,t._query).then(i=>new ti(e,r,t,i))}function k4(t){t=ee(t,St);const e=ee(t.firestore,Pe),n=Ye(e),r=new gs(e);return qj(n,t._query).then(i=>new ti(e,r,t,i))}function x4(t){t=ee(t,St);const e=ee(t.firestore,Pe),n=Ye(e),r=new gs(e);return cP(n,t._query,{source:"server"}).then(i=>new ti(e,r,t,i))}function lE(t,e,n){t=ee(t,ve);const r=ee(t.firestore,Pe),i=zd(t.converter,e,n);return Au(r,[Md(ps(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,me.none())])}function uE(t,e,n,...r){t=ee(t,ve);const i=ee(t.firestore,Pe),s=ps(i);let o;return o=typeof(e=U(e))=="string"||e instanceof ei?Ry(s,"updateDoc",t._key,e,n,r):Sy(s,"updateDoc",t._key,e),Au(i,[o.toMutation(t._key,me.exists(!0))])}function N4(t){return Au(ee(t.firestore,Pe),[new Go(t._key,me.none())])}function b4(t,e){const n=ee(t.firestore,Pe),r=Ph(t),i=zd(t.converter,e);return Au(n,[Md(ps(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,me.exists(!1))]).then(()=>r)}function VP(t,...e){var n,r,i;t=U(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||bm(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(bm(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof ve)u=ee(t.firestore,Pe),c=qo(t._key.path),l={next:h=>{e[o]&&e[o](Dy(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=ee(t,St);u=ee(h.firestore,Pe),c=h._query;const d=new gs(u);l={next:f=>{e[o]&&e[o](new ti(u,d,h,f))},error:e[o+1],complete:e[o+2]},xP(t._query)}return function(d,f,y,v){const I=new bd(v),m=new dy(f,I,y);return d.asyncQueue.enqueueAndForget(async()=>uy(await Po(d),m)),()=>{I.Na(),d.asyncQueue.enqueueAndForget(async()=>cy(await Po(d),m))}}(Ye(u),c,a,l)}function D4(t,e){return Wj(Ye(t=ee(t,Pe)),bm(e)?e:{next:e})}function Au(t,e){return function(r,i){const s=new Ge;return r.asyncQueue.enqueueAndForget(async()=>vj(await Ey(r),i,s)),s.promise}(Ye(t),e)}function Dy(t,e,n){const r=n.docs.get(e._key),i=new gs(t);return new sr(t,i,e._key,r,new bi(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V4={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let O4=class{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=ps(e)}set(e,n,r){this._verifyNotCommitted();const i=Rr(e,this._firestore),s=zd(i.converter,n,r),o=Md(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,me.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=Rr(e,this._firestore);let o;return o=typeof(n=U(n))=="string"||n instanceof ei?Ry(this._dataReader,"WriteBatch.update",s._key,n,r,i):Sy(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,me.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Rr(e,this._firestore);return this._mutations=this._mutations.concat(new Go(n._key,me.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new A(T.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function Rr(t,e){if((t=U(t)).firestore!==e)throw new A(T.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let L4=class extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=ps(n)}get(n){const r=Rr(n,this._firestore),i=new T4(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return L();const o=s[0];if(o.isFoundDocument())return new $l(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new $l(this._firestore,i,r._key,null,r.converter);throw L()})}set(n,r,i){const s=Rr(n,this._firestore),o=zd(s.converter,r,i),a=Md(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(n,r,i,...s){const o=Rr(n,this._firestore);let a;return a=typeof(r=U(r))=="string"||r instanceof ei?Ry(this._dataReader,"Transaction.update",o._key,r,i,s):Sy(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=Rr(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Rr(e,this._firestore),r=new gs(this._firestore);return super.get(e).then(i=>new sr(this._firestore,r,n._key,i._document,new bi(!1,!1),n.converter))}};function M4(t,e,n){t=ee(t,Pe);const r=Object.assign(Object.assign({},V4),n);return function(s){if(s.maxAttempts<1)throw new A(T.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const l=new Ge;return s.asyncQueue.enqueueAndForget(async()=>{const u=await Bj(s);new Fj(s.asyncQueue,u,a,o,l).run()}),l.promise}(Ye(t),i=>e(new L4(t,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F4(){return new Eu("deleteField")}function U4(){return new Ay("serverTimestamp")}function B4(...t){return new c4("arrayUnion",t)}function j4(...t){return new h4("arrayRemove",t)}function $4(t){return new d4("increment",t)}(function(e,n=!0){(function(i){zo=i})(ar),nr(new sn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Pe(new QF(r.getProvider("auth-internal")),new ZF(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new A(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Yr(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),tn(rI,"4.4.0",e),tn(rI,"4.4.0","esm2017")})();const z4="@firebase/firestore-compat",q4="0.3.23";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vy(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new A("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cE(){if(typeof Uint8Array>"u")throw new A("unimplemented","Uint8Arrays are not available in this environment.")}function hE(){if(!AU())throw new A("unimplemented","Blobs are unavailable in Firestore in this environment.")}let OP=class Vm{constructor(e){this._delegate=e}static fromBase64String(e){return hE(),new Vm(Un.fromBase64String(e))}static fromUint8Array(e){return cE(),new Vm(Un.fromUint8Array(e))}toBase64(){return hE(),this._delegate.toBase64()}toUint8Array(){return cE(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om(t){return W4(t,["next","error","complete"])}function W4(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G4{enableIndexedDbPersistence(e,n){return Zj(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return e4(e._delegate)}clearIndexedDbPersistence(e){return t4(e._delegate)}}class LP{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Yr||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&yn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){Kj(this._delegate,e,n,r)}enableNetwork(){return r4(this._delegate)}disableNetwork(){return i4(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,dP("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return n4(this._delegate)}onSnapshotsInSync(e){return D4(this._delegate,e)}get app(){if(!this._appCompat)throw new A("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Co(this,_P(this._delegate,e))}catch(n){throw vt(n,"collection()","Firestore.collection()")}}doc(e){try{return new Zt(this,Ph(this._delegate,e))}catch(n){throw vt(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new _t(this,Qj(this._delegate,e))}catch(n){throw vt(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return M4(this._delegate,n=>e(new MP(this,n)))}batch(){return Ye(this._delegate),new FP(new O4(this._delegate,e=>Au(this._delegate,e)))}loadBundle(e){return s4(this._delegate,e)}namedQuery(e){return o4(this._delegate,e).then(n=>n?new _t(this,n):null)}}class qd extends by{constructor(e){super(),this.firestore=e}convertBytes(e){return new OP(new Un(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return Zt.forKey(n,this.firestore,null)}}function H4(t){WF(t)}class MP{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new qd(e)}get(e){const n=Di(e);return this._delegate.get(n).then(r=>new zl(this._firestore,new sr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=Di(e);return r?(Vy("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Di(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Di(e);return this._delegate.delete(n),this}}class FP{constructor(e){this._delegate=e}set(e,n,r){const i=Di(e);return r?(Vy("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Di(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Di(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class os{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new Qa(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new ql(this._firestore,r),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=os.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new os(e,new qd(e),n),i.set(n,s)),s}}os.INSTANCES=new WeakMap;class Zt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new qd(e)}static forPath(e,n,r){if(e.length%2!==0)throw new A("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Zt(n,new ve(n._delegate,r,new b(e)))}static forKey(e,n,r){return new Zt(n,new ve(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Co(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Co(this.firestore,_P(this._delegate,e))}catch(n){throw vt(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=U(e),e instanceof ve?yP(this._delegate,e):!1}set(e,n){n=Vy("DocumentReference.set",n);try{return n?lE(this._delegate,e,n):lE(this._delegate,e)}catch(r){throw vt(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?uE(this._delegate,e):uE(this._delegate,e,n,...r)}catch(i){throw vt(i,"updateDoc()","DocumentReference.update()")}}delete(){return N4(this._delegate)}onSnapshot(...e){const n=UP(e),r=BP(e,i=>new zl(this.firestore,new sr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return VP(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=R4(this._delegate):(e==null?void 0:e.source)==="server"?n=P4(this._delegate):n=S4(this._delegate),n.then(r=>new zl(this.firestore,new sr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Zt(this.firestore,e?this._delegate.withConverter(os.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function vt(t,e,n){return t.message=t.message.replace(e,n),t}function UP(t){for(const e of t)if(typeof e=="object"&&!Om(e))return e;return{}}function BP(t,e){var n,r;let i;return Om(t[0])?i=t[0]:Om(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class zl{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new Zt(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return DP(this._delegate,e._delegate)}}class ql extends zl{data(e){const n=this._delegate.data(e);return this._delegate._converter||GF(n!==void 0),n}}class _t{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new qd(e)}where(e,n,r){try{return new _t(this.firestore,vr(this._delegate,m4(e,n,r)))}catch(i){throw vt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new _t(this.firestore,vr(this._delegate,g4(e,n)))}catch(r){throw vt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new _t(this.firestore,vr(this._delegate,_4(e)))}catch(n){throw vt(n,"limit()","Query.limit()")}}limitToLast(e){try{return new _t(this.firestore,vr(this._delegate,y4(e)))}catch(n){throw vt(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new _t(this.firestore,vr(this._delegate,v4(...e)))}catch(n){throw vt(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new _t(this.firestore,vr(this._delegate,w4(...e)))}catch(n){throw vt(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new _t(this.firestore,vr(this._delegate,I4(...e)))}catch(n){throw vt(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new _t(this.firestore,vr(this._delegate,E4(...e)))}catch(n){throw vt(n,"endAt()","Query.endAt()")}}isEqual(e){return vP(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=k4(this._delegate):(e==null?void 0:e.source)==="server"?n=x4(this._delegate):n=C4(this._delegate),n.then(r=>new Lm(this.firestore,new ti(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=UP(e),r=BP(e,i=>new Lm(this.firestore,new ti(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return VP(this._delegate,n,r)}withConverter(e){return new _t(this.firestore,e?this._delegate.withConverter(os.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class K4{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new ql(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Lm{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new _t(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new ql(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new K4(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new ql(this._firestore,r))})}isEqual(e){return DP(this._delegate,e._delegate)}}class Co extends _t{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Zt(this.firestore,e):null}doc(e){try{return e===void 0?new Zt(this.firestore,Ph(this._delegate)):new Zt(this.firestore,Ph(this._delegate,e))}catch(n){throw vt(n,"doc()","CollectionReference.doc()")}}add(e){return b4(this._delegate,e).then(n=>new Zt(this.firestore,n))}isEqual(e){return yP(this._delegate,e._delegate)}withConverter(e){return new Co(this.firestore,e?this._delegate.withConverter(os.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Di(t){return ee(t,ve)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(...e){this._delegate=new ei(...e)}static documentId(){return new Oy(pe.keyField().canonicalString())}isEqual(e){return e=U(e),e instanceof ei?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e){this._delegate=e}static serverTimestamp(){const e=U4();return e._methodName="FieldValue.serverTimestamp",new Si(e)}static delete(){const e=F4();return e._methodName="FieldValue.delete",new Si(e)}static arrayUnion(...e){const n=B4(...e);return n._methodName="FieldValue.arrayUnion",new Si(n)}static arrayRemove(...e){const n=j4(...e);return n._methodName="FieldValue.arrayRemove",new Si(n)}static increment(e){const n=$4(e);return n._methodName="FieldValue.increment",new Si(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q4={Firestore:LP,GeoPoint:Od,Timestamp:ge,Blob:OP,Transaction:MP,WriteBatch:FP,DocumentReference:Zt,DocumentSnapshot:zl,Query:_t,QueryDocumentSnapshot:ql,QuerySnapshot:Lm,CollectionReference:Co,FieldPath:Oy,FieldValue:Si,setLogLevel:H4,CACHE_SIZE_UNLIMITED:Jj};function Y4(t,e){t.INTERNAL.registerComponent(new sn("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},Q4)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X4(t){Y4(t,(e,n)=>new LP(e,n,new G4)),t.registerVersion(z4,q4)}X4(lr);const J4={apiKey:"AIzaSyAe4pM-kcMU-7UA0nWdFAwWW5NBgzMGIwI",authDomain:"drisco-lab.firebaseapp.com",projectId:"drisco-lab",storageBucket:"drisco-lab.appspot.com",messagingSenderId:"393012443269",appId:"1:393012443269:web:3f5319f9cfb7b0e07751ec"},Wl=lr.initializeApp(J4),Er=lr.auth(Wl),Z4=new lr.auth.GoogleAuthProvider,jP=x.createContext();function e$({children:t}){const[e,n]=x.useState();x.useEffect(()=>{const i=Er.onAuthStateChanged(s=>{n(s)});return()=>i()},[]);const r={isLogged:e};return _.jsx(jP.Provider,{value:r,children:t})}function Ly(){return x.useContext(jP)}const My="/assets/driscoLogo-98277664.png";function Fy(t){const e=Jl(),{isLogged:n}=Ly(),[r,i]=x.useState(""),s=a=>{i(a),t.onSendMessage(a)},o=async()=>{try{await FV(Er)}catch{alert("El correo o la contraseña son incorrectos")}};return _.jsx(_.Fragment,{children:_.jsxs("header",{children:[_.jsx("img",{className:"logo1Img",src:My,onClick:()=>e("/")}),_.jsxs("div",{className:"buttonsContainer",children:[_.jsx(wt,{onClick:()=>s("nowMe"),path:"",btnType:"btn-header-about-us",btnTittle:"About us"}),_.jsx(wt,{onClick:()=>s("projects"),path:"",btnType:"btn-header-projects",btnTittle:"Projects"}),_.jsx(wt,{onClick:()=>s("services"),path:"",btnType:"btn-header-services",btnTittle:"Services"}),_.jsx(wt,{onClick:()=>s("contact"),path:"",btnType:"btn-header-contact",btnTittle:"Contact"}),_.jsx(g$,{nowMe:t.nowMe,projects:t.projects,services:t.services,contact:t.contact}),!n&&_.jsx(gN,{style:{textDecoration:"none"},to:"/login",children:_.jsx(wt,{path:"",btnType:"btn-header-login",btnTittle:"Login"})}),n&&_.jsx(wt,{onClick:o,btnType:"btn-header-logout",btnTittle:"LogOut"})]})]})})}const t$="/assets/mainBackground-d6c2bac0.png",n$="/assets/swapIcon-d5eeb8cc.png",r$="/assets/arrowIcon-9e379ac8.png",i$="/assets/plusIcon-db024f0d.png",s$="/assets/websitesIcon-e4053253.png",o$="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANsAAAFCCAYAAAB4nah/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAvjSURBVHgB7d0/VxtXGsfxR9L2/Km2i6DazqTbrSJ32cr4FVh028XutjN06RyqLY27dLarLa106QLdNqDxK0AutwDyPPKII2MwulejHyPN93OOIgESh5wzX987d0ajltVMt9td97vpG5CqCFYzLXtAHlbX73rtdvvR1dVVr9VqxdcEhqqMfLs69u0qbicXFxfH3uCxPRBpbOWoteNxPfP7XSMs6BV+G1xeXr738N6ZkCQ2jyxGryf+sG8Ehvoo7HN4h4oRb6GxRWQ+fL/0W8+AGvPp5sAHhDenp6dHtiALiY3IsMQKH+n2fKQbWMUqjS0WPDyw10SGFXDk0R1UuarZsYpsb2//5JH96re/GbD8dnxb7m9sbPz//Pz8d6vA3CMboxlWXezP+W1v3lFurtjKVcbX8dCA1Rb7ck/nWbXMnkZOpo3GUj6aYd2393/5tPJT7rQyKzYP7aXf/WxA8/zowZkH95slSo6tDG3fgObq5QSXtM8mCK3w28BvH31+XEx9D5jF+OR1X0fo+n2cbxuLdzu2OPtnZ2cHsz555tgWFNrIb288rIHfD3znc2RAhcrzceMki12//WDVL+a98OB+meWJM8Xmf/Cu/2vx1ipSLqUeGoFBzLflvkf3rMpDVT5YPJ7ljJN7Y4vjaB7aB6vgX4QysoNFnAoDpKj4sNXIg/v+vuNw98bm08dhBX/QyP8lebHIkzyBHDHSeXSxi9S1OcRAMhwOH3/rOd9cjSz303Ztzj/Cb//wP6SSU16AKo1Go+O1tbX35RuXs081jNf7CmXLVygHdz7nrh+U08ehzefAdx73DVgCPrjs+91Lm0M5nbz1LJP2XS8q99Oyeel7hIZlEttrvL3G5uDb/au7fnbrNLJcselbplid8Wmj9C3nQBXKaeXHOFRgGWI66a8/8d/zv5s/u3VkK3cYs8SIxmojlplvv0fzjHDez62j21cj25yj2sGsB/iAOosRLhY8/GHP0q1vbm5+9MWSL/bdvlogmWOp/8hDm2u+C9SN9xAnc+RMKQvvYWv6G19MI2NUs7zQ4r0+M58jBiyLcjpZWLpY0O9Nf+OL2OI0Fsvgr6v0Wg1AXcTphLn7b3HRqy++njyY47ga00esvK2trQ8551N6qBuT83+nR7aeZWD6iCaIc3otgw9g/evHkweZU8gjpo9ogjicFaceWiJ/zZPJ43Fs8Z6fzCHyjQENkTO6RVfle+o+x9bpdHqWruDgNZqk3N4LSzd+t/g4tvi4Jkt3aEDzJM/mfL9tfJxuEtsjS1ReygBolJztPq6FEvfj2DIuilI85IfKAQ+lnEomXcqjvPaJtac+VndmXuqJAQ3l8QwszXp0FiNb8qW+4mNTDWgoH2w+Wrpu21ciky8f7vNWYkNjZW7/3fbFxUXOtfq5/ByarLBEMai1y6vHJvFp5LzXJgGWWWEZ2gZg4WL5n9gAEWIDRIgNECE2QITYABFiA0SIDRAhNkCE2AARYgNEiA0QITZAhNgAEWIDRIgNECE2QITYABFiA0SIDRAhNkCE2AARYgNEiA0QITZAhNgAEWIDRIgNECE2QITYABFiA0SIDRAhNkCE2AARYgNEiA0QITZAhNgAEWIDRIgNECE2QITYABFiA0SIDRAhNkCE2AARYgNEiA0QITZAhNgAEWIDRIgNECE2QITYABFiA0SIDRAhNkCE2AARYgNEiA0QITZAhNgAEWIDRIgNECE2QITYABFiA0SIDRAhNkCE2AARYgNEiA0QITZAhNgAEWIDRIgNECE2QITYABFiA0SIDRAhNkCE2AARYgNEiA0QITZAhNgAEWIDRIgNECE2QITYABFiA0SIDRAhNkCE2AARYgNEiA0QITZAhNgAEWIDRIgNECE2QITYABFiA0SIDRAhNkCE2AARYgNEiA0QITZAhNgAEWIDRIgNECE2QITYABFiA0SIDRAhNkCE2AARYgNEiA0QITZAhNgAEWIDRIgNECE2QITYABFiA0SIDRAhNkCE2AARYgNEiA0QITZAhNgAEWIDRIgNECE2QITYABFiA0SIDRAhNkCE2AARYgNEiA0QITZAhNgAEWIDRIgNECE2QITYABFiA0SIDRAhNkCE2AARYgNEiA0QITZAhNgAEWIDRIgNECE2QITYABFiA0SIDRAhNkCE2AARYgNEiA0QITZAhNgAEWIDRIgNECE2QITYABFiA0SIDRAhNkCE2AARYgNEiA0QITZAhNgAEWIDRIgNECE2QITYABFiA0SIDRAhNkCE2AARYgNEiA0QITZAhNgAEWIDRIgNECE2QITYABFiA0SIDRAhNkCE2AARYgNEiA0QITZAhNgAEWIDRIgNECE2QITYABFiA0SIDRAhNkCE2AARYgNEiA0QITZA5C+GpdHtdnvtdnvHH37nt0+Xl5eDoigGhqVAbEvAI9tptVqv/Nab/r6H93J7e7vw6B57dIWh1phG1lyE5lF9uBna9FP853/E8wy1Rmw15yG99bv1e562Hs/z4O57Hh4QsdWYx9OPu1mf7sH1DbVFbDXW6XSeWJpHhtoithrzhY+kaeHV1VXXUFvEBogQW435CuTJIp8PLWKrMZ9Gvkt8/i+G2iK2GouzQ3w/7M2MTz/kwHa9EVvNeWzP/Ta452nvzs7Onhtqjdhqzger0XA4fOxTxL34cvpnHuGx373w0J4aao9zI5eER3fkd0flWSJxG0WIhqVBbEumDIzIlhDTSECE2AARYgNEiA0QITZAhNgAEWIDRIgNECE2QITYAJGIjVN/gDQ5VzEbtS8vL5Nju7q62jCguZJja7Vao6xpZKfT4YKgaCzf/pNju7i4KCK2Y0vkIxsXA0Vj+fafNdhEbIWl4/qEaCyfEuZs/8ftzPdH7RrQUBkj2/iNvu3yxalTyfWtra3vDGiY8gNMuimvmfQ1ji3neoP+mj0DGqbdbvcs0aSvSWwDS+S1/mBA8/xkieJDK+N+HJsvSw4sUXxeWHwSpgENUW7vXUs3iP+MY4udtxmuTfgVH1KfGdAQOdt7dDW5Ctr1QW0fqX6zdH2vvWvAiiu3874l8kCvr2h9HVvudeL9l70yYMXF55dbhuldtOvYcqeSbpd9N6wy377juHLfEpVTyGLydfvGDw8tg1f/ms9zxiqK7Tp39jY9hRx/Pf2FRxgfUZTzlptu7jAL1Fm5XXctXXF6enr0xe+65UlZo5t7vr29zSepYGX49hzH1LK2aV9wPPjqeze/UQ6bQ8t7g1wstDyOzxUzYInFfpp38NbyFGdnZ1s3v/nVyFYeEziwTPEHluePAUsptt9Yh7BMt41q4+/f9YKtra0PcZaI5RnF54mV+4DA0ihHtAgtd8Hv1lEt3PlObV+ZzB7dXExF3/qcl0UTLI3YRyunjtkr67EbddfPOnf9YDQaFRvOH/7d8vX8V3TX1tZO/PdxYSHUUqxTbG5u/scf/tvmczAcDu+czXW+9UqP5He/+9Gnk3+1fDv++l3/n/l0fn6efAkGYJHihAwfzf7rD3s2n+K+j1tu2f1/TBxD+8PmGFqnHPkwezB9VB14CBGZDwIv51iXmBZrFN/ft13fG1v5h/XnWZ25xTv/4w45RAC1iiMb82356SyLgTPFFnzncd/vql7wKPw28D/2DeFhEcrTCGMp/4l9Pr+x6tMKD3z6uD/LE2eOLSwouGtx4qb/ixP7dR89wMK4WjPSxW5PBPUoLszj21PXqg9sYubQQlJsYdHBAUsiKbTQsUS+ojjw5fyItGdAMyWHFpJjCwSHBnvhof1sGbJiCxFcHKz2OXEc9Oa9bFh1sbz/Tz9o/atlSt5nu6k8DvfB8t7zA9ReLNz5bW/e48NzxzbBwglWVNb+2W0qiy3EKOfTyrd+4y02WGpVjWbTKo1tojzjJPft5MBDKsq3hw2sYguJbYLosCxiJIsL9Ny8bkiVFhrbRHk+Wt9vXEEZdRJnKA1U5+lKYpsoz1PbLc9T6xmHDKA3Cey937+bXBpcQRrbTeV7iWIx5QcfxrssrKBiceHhojzf9sQDO37IE94fNLbblKNf1z6PepMbMIvR9K1u75v8E6CGlxrylmXaAAAAAElFTkSuQmCC",a$="/assets/UXIcon-3216f0de.png",l$="/assets/VR_ARIcon-ca782441.png",u$="/assets/multimediaIcon-8778e696.png",c$="/assets/UIcontrolIcon-271db721.png";function h$(t){const e=x.useRef(null),n=x.useRef(null),r=x.useRef(null),i=Jl(),{isLogged:s}=Ly(),o=u=>{u==="nowMe"?e.current.scrollIntoView({behavior:"smooth"}):u==="projects"?n.current.scrollIntoView({behavior:"smooth"}):u==="services"?r.current.scrollIntoView({behavior:"smooth"}):t.onSendMessage(u)},[a,l]=x.useState([]);return x.useEffect(()=>{async function u(){const c=await Wl.firestore().collection("projectsFiles").get();l(c.docs.map(h=>h.data()))}u()},[]),_.jsxs(_.Fragment,{children:[_.jsx(Fy,{onSendMessage:o,nowMe:e,projects:n,services:r}),_.jsxs("main",{className:"mainBackground",children:[_.jsx("img",{className:"mainBackgroundImg",src:t$}),_.jsxs("div",{children:[_.jsxs("h1",{className:"introH1",children:["We're ",_.jsx("span",{children:_.jsx("img",{className:"logo",src:My})}),_.jsx("span",{className:"spanIntroH1",children:"Designing the future, creating connections and experiences"})]}),_.jsx(wt,{onClick:()=>o("nowMe"),path:"",btnType:"btn-about-us",btnTittle:"About us"}),_.jsx("img",{className:"swapImg",src:n$})]})]}),_.jsxs("div",{className:"about-us-div",ref:e,children:[_.jsxs("h1",{className:"aboutUsTittle",children:["About us",_.jsx("span",{className:"aboutUsSpan",children:"About us"})]}),_.jsx("div",{className:"members-div",children:_.jsx(p$,{})})]}),_.jsxs("div",{className:"our-projects-div",ref:n,children:[_.jsxs("h1",{className:"projectsTittle",children:["Projects",_.jsx("span",{className:"projectsTittleSpan",children:"Our projects"})]}),_.jsx("div",{className:"someProjects",children:a.slice(0,3).map((u,c)=>_.jsx("div",{children:_.jsx($P,{imgRut:u.url,projectRut:u.behance,caption:u.name})},c))}),s&&_.jsx(wt,{onClick:()=>i("/add-project-screen"),btnType:"btn-add-project",imgBtn:i$,imgBtnW:"16.64px",imgBtnH:"15.8px"}),_.jsx(wt,{onClick:()=>i("/all-projects-screen"),btnType:"btn-all-projects",imgBtn:r$,btnTittle:"Explore more works",imgBtnW:"9.45px",imgBtnH:"9.45px"})]}),_.jsxs("div",{className:"services-div",ref:r,children:[_.jsxs("h1",{className:"servicesTittle",children:["Services",_.jsx("span",{className:"servicesTittleSpan",children:"Our services"})]}),_.jsxs("div",{className:"someServices",children:[_.jsx(Ss,{bgIconColor:"#FF350F",textColor:"#FF350F",serviceIcon:s$,serviceName:"Web Sites",serviceDescription:"Custom web development services to create attractive and functional websites that stand out online and meet your business goals."}),_.jsx(Ss,{bgIconColor:"#485BFF",textColor:"#485BFF",serviceIcon:o$,serviceName:"Mobile Apps",serviceDescription:"Design and development of intuitive and appealing user interfaces for iOS and Android apps."}),_.jsx(Ss,{bgIconColor:"#9969FF",textColor:"#9969FF",serviceIcon:a$,serviceName:"UX Experience",serviceDescription:"Experience optimization through research, prototyping, and testing to ensure smoothness and satisfaction."}),_.jsx(Ss,{bgIconColor:"#33D3D4",textColor:"#33D3D4",serviceIcon:l$,serviceName:"VR/AR",serviceDescription:"Design of immersive VR and AR experiences for all kinds of apps."}),_.jsx(Ss,{bgIconColor:"#FEC0B5",textColor:"#FEC0B5",serviceIcon:u$,serviceName:"Multimedia",serviceDescription:"Creation of interactive content, such as videos, presentations, and animations."}),_.jsx(Ss,{bgIconColor:"#FFFFFF",textColor:"#FFFFFF",serviceIcon:c$,serviceName:"UI Control Panel",serviceDescription:"Design and development of touchscreen interfaces for interactive kiosks and other devices."})]})]})]})}function d$({reference:t}){return _.jsx(_.Fragment,{children:_.jsxs("footer",{ref:t,children:[_.jsxs("div",{className:"footer-big-div",children:[_.jsxs("div",{className:"intro-div",children:[_.jsx("h1",{className:"footerTittle",children:"Let’s talk with us"}),_.jsx("p",{className:"footerIntro",children:"Here you can find our communication channels where you can communicate with our team work."})]}),_.jsx("div",{className:"navegation-div",children:_.jsxs("h2",{className:"navegationTittle",children:["Navegation",_.jsx("span",{children:_.jsxs("ul",{className:"navegationList",children:[_.jsx("li",{children:"Home"}),_.jsx("li",{children:"Abouts us"}),_.jsx("li",{children:"Projects"}),_.jsx("li",{children:"Services"}),_.jsx("li",{children:"Contact"})]})})]})}),_.jsx("div",{className:"contact-div",children:_.jsxs("h2",{className:"contactTittle",children:["Contact",_.jsx("span",{children:_.jsxs("ul",{className:"contactList",children:[_.jsx("li",{children:"driscolab@gmail.com"}),_.jsx("li",{children:"www.driscolab.com"}),_.jsx("li",{children:"+57 3118954712"})]})})]})}),_.jsxs("div",{className:"footerForm",children:[_.jsx(ji,{inputClass:"input-email-footer",inputName:"Email adress"}),_.jsx(ji,{inputClass:"input-description-footer",inputName:"Short description..."}),_.jsx(wt,{btnType:"btn-submit",btnTittle:"Submit"})]})]}),_.jsxs("div",{className:"footer-small-div",children:[_.jsx("h3",{children:"Copyright 2023 Drisco Lab"}),_.jsx("h3",{children:"User Terms And Conditions | Privacy Policy"})]})]})})}function ji({inputClass:t,inputType:e,inputRef:n,inputName:r,onChange:i}){return _.jsx(_.Fragment,{children:_.jsx("input",{className:`inputs ${t}`,type:e,ref:n,placeholder:r,onChange:i})})}function wt({onClick:t,btnType:e,imgBtn:n,imgBtnW:r,imgBtnH:i,btnTittle:s}){const o={width:r,height:i};return _.jsxs("button",{onClick:t,className:`btns ${e}`,type:e,children:[_.jsx("img",{style:o,src:n}),s]})}const f$=[{id:1,imgRut:"/andresImg.png",memberName:"Andrés Santacruz",memberInfo:"I am 19 years old, I am a student at Icesi University. In my personal life I like to go out to walk the streets or towns while I drive, I like to practice sports from time to time. In the future I would like to position myself in a good company and be able to travel around the world.",skill1:"Interface Design",skill2:"Video Editing",skill3:"3D Modeling",contactURL1:"https://www.behance.net/andressantacruz1",contactImg1:"/behanceLogo.png",contactURL2:"https://www.instagram.com/andres_santacruz03/",contactImg2:"/instagramLogo.png",contactURL3:"",contactImg3:"/linkedinLogo.png"},{id:2,imgRut:"/santiagoImg.png",memberName:"Santiago Gómez",memberInfo:"I am 21 years old, I am a student of the interactive media design program at Icesi University. In my personal life I like sports, watching series and spending time with my family and friends. Within my professional skills, is the design of interfaces and the research part that would be the data collection and management of these.",skill1:"Evaluate project efficiency",skill2:"Design interactive experiences",skill3:"Interface Design",contactURL1:"https://www.behance.net/santiagogomez8",contactImg1:"/behanceLogo.png",contactURL2:"https://www.instagram.com/santgomez5/",contactImg2:"/instagramLogo.png",contactURL3:"https://www.linkedin.com/in/santiago-g%C3%B3mez-melo-a725411b6/",contactImg3:"/linkedinLogo.png"},{id:3,imgRut:"/richardImg.png",memberName:"Richard Delgado G",memberInfo:"I am a 21 year old student, I am studying Interactive Media Design at Icesi University in Cali. I consider myself a person eager to learn and acquire knowledge in my professional field with the intention of contributing to society.",skill1:"Front-end",skill2:"Interface Design",skill3:"Usability test",contactURL1:"https://www.behance.net/richarddelgado1",contactImg1:"/behanceLogo.png",contactURL2:"https://www.instagram.com/richarddg10/",contactImg2:"/instagramLogo.png",contactURL3:"https://www.linkedin.com/in/richard-delgado-garz%C3%B3n-b4961b1b6/",contactImg3:"/linkedinLogo.png"}];function p$(){return _.jsx(_.Fragment,{children:f$.map(({id:t,imgRut:e,memberName:n,memberInfo:r,skill1:i,skill2:s,skill3:o,contactURL1:a,contactImg1:l,contactURL2:u,contactImg2:c,contactURL3:h,contactImg3:d})=>_.jsxs("div",{className:"global-member-div",children:[_.jsx(m$,{imgRut:e}),_.jsxs("div",{className:"info-member-div",children:[_.jsxs("h2",{className:"memberTittle",children:["My name is ",_.jsx("span",{className:"nameSpan",children:n})]}),_.jsx("p",{className:"memberInfo",children:r}),_.jsxs("div",{className:"extra-info-div",children:[_.jsxs("h2",{className:"skillsTittle",children:["Skills",_.jsx("span",{className:"skillsSpan",children:_.jsxs("ul",{className:"skillsList",children:[_.jsx("li",{children:i}),_.jsx("li",{children:s}),_.jsx("li",{children:o})]})})]}),_.jsxs("h2",{className:"contactMemberTittle",children:["Contact",_.jsxs("span",{className:"contactSpan",children:[_.jsx("a",{href:a,children:_.jsx("img",{src:l})}),_.jsx("a",{href:u,children:_.jsx("img",{src:c})}),_.jsx("a",{href:h,children:_.jsx("img",{src:d})})]})]})]})]})]},t))})}function m$({imgRut:t}){return _.jsx(_.Fragment,{children:_.jsx("img",{className:"memberImg",src:t})})}function $P({imgRut:t,projectRut:e,caption:n}){return _.jsx(_.Fragment,{children:_.jsxs("a",{className:"a-caption",href:e,target:"_blank",rel:"noreferrer",children:[_.jsx("img",{className:"projectsStyle",src:t}),_.jsx("figcaption",{children:n})]})})}function Ss({bgIconColor:t,textColor:e,serviceIcon:n,serviceName:r,serviceDescription:i}){const s={backgroundColor:t},o={color:e};return _.jsx(_.Fragment,{children:_.jsxs("div",{className:"service-div",children:[_.jsx("div",{style:s,className:"serviceIcon-div",children:_.jsx("img",{className:"serviceIcon",src:n})}),_.jsxs("h2",{style:o,className:"serviceText",children:[r,_.jsx("span",{className:"serviceTextSpan",children:i})]})]})})}function g$(t){const[e,n]=x.useState(!1),r=()=>{n(!e)},i=s=>{s.current.scrollIntoView({behavior:"smooth"}),r()};return _.jsxs(_.Fragment,{children:[_.jsx("button",{className:"dropdown-btn",onClick:r,children:"Menu"}),e&&_.jsx("div",{className:"dropdown-menu-div",children:_.jsxs("ul",{className:"dropdown-menu",children:[_.jsxs("div",{children:[_.jsx("li",{children:_.jsx("button",{onClick:()=>i(t.nowMe),children:"About us"})}),_.jsx("li",{children:_.jsx("button",{onClick:()=>i(t.projects),children:"Projects"})})]}),_.jsxs("div",{children:[_.jsx("li",{children:_.jsx("button",{onClick:()=>i(t.services),children:"Services"})}),_.jsx("li",{children:_.jsx("button",{onClick:()=>i(t.contact),children:"Contact"})})]})]})})]})}const _$="/assets/globalBackground-2a1928de.png",y$="/assets/bgPhoneLogin-5b011152.png",v$="/assets/googleIcon-b3d1bb2a.png",w$="/assets/facebookIcon-997f6fcc.png",I$="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAADTCAYAAAAYsCjxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAuzSURBVHgB7d2PedM6FwbwNzzfAGUC3AmgExAmACYgTECZgHYC6AQNE1AmqJmAMkHNBO0G+nQqmbq5TuI/0pHlvL/n8c2FWy7gvD05lmVpATooxphX9kWOl/Yo/L8fyetisfiLTPwPNGs2qBLKd/Z47V+Ptnzpc3tkE1yaKRvYpT2uTXdLZIQVd0Z8df1kj1Nsr6yzwODOwCEFtsbgZuwQA1tjcDNlQyuBPcOBBbbG4GbGBrawL5f2WIIoB1Jl7XFn4ngBopCkypp+Q1u9ITNsFSbOuDtdP+DucsVSITPPQJNlQ/vBvlwjbmhFhcwwuBNlQ/vFvqyhM2rwB0RjSWiNrncgGiNBaEUBoqEShfYWGWKPOxHm8U6YthIZWoCS8x/Vv5Hm9u2bxWJRIjMMbmI+tBpDXm0qG9pjZIitQnoy76BAGiWI+kp0Mdb0Cpliq5CIcS1Cyiv6G9smnCBTbBXSuUZaFyDqw6RvEbIcu21ixVVmXItwirTOQdSHDe6lSSv7aitYcRUZV21XSGsW1ZbB1fUFaa3tSMIaM8DhMCUm/fDXvT1ObHArzAArrp7U1fZ8LqElJbbaHpl4T+d2cYmZYcXVsWuVxNgqzHD4i8HV8QHpfGSLQL0ZtyZCKmeYKVbc+JZI48JW2jPMFIMb31vou7KhTX1bOSqO40ZmP67voHthdgP3OM49ZowVNyLjJmoztBEwuHEV0HMwoRUMblxL6Dio0AoGN66XiO87Diy0gsGNK3Z/K/MPVocWWorMxJufIP9fLlRHcZg4rg0XqaNYTPhbvVJlZ31ToQ8upZ+HEpws8wQvzqathBsxeMPQkoqRrcK1yWxTaG1sFaajtMdPuAcaOby1B4Mbz67wVf6QTUPkrtcVw9rPbGaHmfYhovuUgfB/piN/VPJzWr2qcRtUF/aoJ/q8aPxZmjdG7v3x17/KN5KctxtMWFbB9UF45Y8XeHxTij2/VN6ECo8VrpxbhfPnRm5KyG3mJcJM8GmetxJuhcdJnLdJB9dXjRXCvhm1G3/8tG/GFTLjz40E9TV0H8Z8+MaHO28lEplccP0bIht5LKH72IuEVy6OyqkOPTWqqjxVsUR6FVyIv+e4j0QQ9k15ZyJvtNzDtT1Wxn0TpT4vsibDqZnOudnm1rjd3QvMnXFvyheTdrGMfS6N8oQWk09Yt7k0kQOcpFUwj+3AKdItlNFXBfexeBHritu4mw7SBqyQz3nZZY1ISz+pB9c8bkSX8xtTwS1FfzX2TfGVSRYMyembuK8ze56CrqajFlxfTb7CDWHNSQn3FELnizrzOFoylYssDRVc9V0jgOjB9W+SrFR4CFPy6qGiX2iMFftzUI8/H1JY23yDC/Co8eCowTXu8ewfSLcBHU1TBTfrrcJA0aY1+l5W9qctQPRUYY/fZsRoTZTg2j+Q9LLfQLSdtE8/bFYGLXgdtFXwvZxsPDe3CzCKq/eoQ7DgmrS7gFP+eoU3SHAZWgqkc3hHB5ehpcA6hXdUcBlaikRW5/m+6wsGB9dfiHG4i2KQmxNvds0JGTMcJlsQFSAKrx4q2zp3Y1Bw/dib6lQ/OjgF3NyWVr2Da0O7gpvdRRRbsa3q9upxeTFGSqTH/bjrWcC+wZWLMd4Vo5hKdFgnrXOr4PtahpZi+tx1nbROFdek37Ke5q2Cq7Jl11/QdQmm1FvW03zJWO37vnNz97YKfhRhBaLw5OJr0ITyva2CDa60CAWIwpJFRFYYaGfF9dW2AFFYo0IrdlZcVluKYHRoxdaKy2pLEZQhQiu2VlxWWwqsssdJqGVKWyuuf/qyAFEYFQJv27qtVfgEonCCrx/2n1aBd8koMFkkMPgqRm0VdwWiMCpEmgLbFtwPIArjfBFpz4gnwfUrKhYgGm8damXGNpsVl4/jUChB18PdtBnctyAabx17A5h/owocTaCAjmMHt1lxlyAaL3q1Fc3gsk2gEL5DQbNVuMN8N88gHZWttsdQ8FBx/ZL3DC2N9RNK6lahANF4ayipg7sE0ThVrI0L29TBfQmicUooqoPLhT5orF9Q9MwvKsYLMxpLrU0QUnFZbWmse83+VkhwWW1pLNXQClZcCqGCMlZcCuEvlElwX4BonArKWHEphArKGFzKEoNLIag/gDBmnzOiZCS4BYgyw4pLWWJwKUsMLmWJwaUQnkMZg0shFFDG4FII6vcCJLgViMYpoIwVl0JQn6jF4FIISyhjq0AhFP7ZRTUSXPVJwDRLqk/SsFWgUJZQxFaBQnkNRQwuhbLU7HMluFF2RaGDpLaHiARX/Zl4mi21rcYWvrzfgSiM57H2Nmt65n+TCkRhBN/+tE09HMY+l0JR2cC8Du4fEIVx5HcojaoOLi/QKKQviIzBpRiWsavuw3ZRHFmgCG7shf8JInmouBxZoAhe2YIYbYShOcmG7QKF9iXWbeBmcFU3n6CDIKG9RASsuBTbO1t1g89haO7lyws0ikWuoU5C7qr+r+L6CzRWXYpBiuKPkP3u5hMQ7HMpFnm0J9iNic3gliCK59RW3SDhXTR/wD6XlHy2rek3jPCk4vo+twRRXF9tkRw16bztKV/2uaRhPebOWltwSxDp+Dq05120/aT9n0mfy914SMuZbVPP+/yCbQuCfAeRnjNbLK/tUXT9BduCewUiXUt7SHg7LeW0LbhyB43PoZG2wh6/u/S9rcH1w2I/QZSGtA63u1qHXYverUGUTmEPCe9lW4B3BZftAk3BCq73XTV/cmtwfbvA0QWagsIel759WMlPLHZ9tX9S8xpE0/J5se8rbHh/Q3m1aaI9jrusSM7RBZqSUp6k6BJcmX7GizSaiofrrr3B5UUaTUwp/+i6eQlvAdMUrOsHLjsF135xCU53pPT+ffLvHVWocWiMEqtsAT2uf9B5nzNfdSsQpfFkvm7fDfouQJRG2fxB3+CuwaEx0rfeXAWnV3D90BirLmn7z2M9Q/by5Q0J0rRuW3Osd3BZdUlZ682vzsNhTX7Fm1vwSWCKS+YlvGn7D0NaBVZd0rI1Y4MqrmDVpcie3HDYNKjiClZdimznAiGDK67wVVcmmhcgCmdntRWDK67wVbfX0jlEHXze9wWjKm5Nls+BW4mEaKytIwlNoYK7BGeOURjHXTY5GdUq1DhflwJZd92ZJ0jFFX61EblQ4/AYDXXcNbhBKq7wvyGHx2ioiz77oAWruILDYzRQZY83fYIbrOIKPzz2EUT9nPfddTJoxa1xeIx62HuzoU2s4BbghRp1c7wYsMdv0Fah5v8gvKNG+1wMCa2IUnFrbBlohwpuR/VBT9NEqbgNcqHGx3yozcehoRVRg8uWgba48HdbB4vaKtTYMlBDhREtQk0ruAU4ykCOhPYGI8XucR/4loE3Jug8RGiFSsWt2corazJ8Ah2iGxvaEwSiGlzBPSUOUoWecxH2UWkVNrwHV308NB9DhlaoB5f97sE5Hzv01SZFxa2fmNj7QBxlT8ZrzxCBeo/bZPvdM/uyd6dsylLQi7FNSYMrbHjX9uUDaE4qBL4Y25Q8uIJ31malQuTQiiQ9bgsZaQgyME1JVVAIrZhExRX+eTWpvBzjzVMFpdCKyQRXMLzZqqAYWjGp4AofXrk1PIcLtgpuPvLmTKgjfxTIXwXl0IrJBbeW2VBZBbeSzx+4Xr3q+kbav6d8ukiIl/Z46V9zmUVX2uP92CmKQ0w2uMK+qaf25SumR96oK3v8ktfQb5wP8xLuU2eqbZPcXDgFtZO5vPa4Nend2eObcQv8af/9T800zoGQ87AE7WdP1JE91iaNa3u8M673Tn0elv483Jk0fkzhPGTHB+jWxCfBOJvqm2TcN/LKuG8qDbeGVXY8/6bdmrCStAJjGddKrE2cb2g5J+xjQzPjq468MZfGfQRn/xHo/x7yzffbjHNtJv4NPOlRha6MexhzaY+3cGOjbVficuVfwQ1XybBVGer5pyny56QenZBhtgLt48bN8xJllCSGWQS3jX/javc5vBka/CdL/emS7Xn5P8fNfjX9SGvoAAAAAElFTkSuQmCC";function E$(){var a;const t=Jl(),[e,n]=x.useState(""),[r,i]=x.useState(""),s=async()=>{var l;try{await RA(Er,e,r),console.log((l=Er.currentUser)==null?void 0:l.email),t("/")}catch{alert("El correo o la contraseña son incorrectos")}},o=async()=>{try{await MA(Er,Z4),t("/")}catch{alert("El correo o la contraseña son incorrectos")}};return console.log((a=Er==null?void 0:Er.currentUser)==null?void 0:a.email),_.jsx(_.Fragment,{children:_.jsxs("div",{className:"big-login-div",children:[_.jsx("img",{className:"globalBackgroundImg",src:_$}),_.jsx("img",{className:"bgPhoneLogin",src:y$}),_.jsxs("div",{className:"login-form-div",children:[_.jsx("img",{className:"driscoLogo",src:My}),_.jsxs("h1",{className:"loginTittle",children:["Welcome ",_.jsx("span",{className:"spanWelcome",children:"To keep connected with us, please login with your personal info"})]}),_.jsxs("div",{className:"inputs-btns-div",children:[_.jsxs("div",{className:"inputsDiv",children:[_.jsx(ji,{inputClass:"input-email",inputName:"Email",onChange:l=>n(l.target.value)}),_.jsx(ji,{inputClass:"input-password",inputType:"password",inputName:"Password",onChange:l=>i(l.target.value)}),_.jsx(wt,{onClick:s,btnType:"btn-login",btnTittle:"LogIn"})]}),_.jsxs("div",{className:"other-login-text",children:[_.jsx("div",{}),_.jsx("h2",{children:"Or log in with"}),_.jsx("div",{})]}),_.jsxs("div",{className:"btnsLogDiv",children:[_.jsx(wt,{onClick:o,btnType:"btn-google-login",imgBtn:v$,imgBtnW:"20.63px",imgBtnH:"20.63px",btnTittle:"Google"}),_.jsx(wt,{onClick:s,btnType:"btn-facebook-login",imgBtn:w$,imgBtnW:"20.63px",imgBtnH:"20.63px",btnTittle:"Facebook"}),_.jsx(wt,{onClick:s,btnType:"btn-apple-login",imgBtn:I$,imgBtnW:"17.73px",imgBtnH:"20.63px",btnTittle:"Apple"})]})]}),_.jsx("a",{className:"footerLogin",href:"",children:"Forgot Password?"})]})]})})}function T$(){const t=x.useRef(null),e=n=>{n==="contact"&&t.current.scrollIntoView({behavior:"smooth"})};return _.jsxs(_.Fragment,{children:[_.jsx(h$,{onSendMessage:e}),_.jsx(d$,{reference:t})]})}function A$(){const[t,e]=x.useState([]);return x.useEffect(()=>{async function n(){const r=await Wl.firestore().collection("projectsFiles").get();e(r.docs.map(i=>i.data()))}n()},[]),_.jsxs(_.Fragment,{children:[_.jsx(Fy,{}),_.jsxs("div",{className:"projects-screen-div",children:[_.jsx("h1",{className:"projectsScreenTittle",children:"All our projects"}),_.jsx("div",{className:"projects-div",children:t.map((n,r)=>_.jsx("div",{children:_.jsx($P,{imgRut:n.url,projectRut:n.behance,caption:n.name})},r))})]})]})}const S$="/assets/dropIcon-f7abee12.png",R$="/assets/plusIcon2-aa142ff5.png";function P$(){const t=x.useRef(null),e=x.useRef(null),[n,r]=x.useState(),[i,s]=x.useState(!1),[o,a]=x.useState(!1),l=async c=>{c.preventDefault();const h=c.target.files[0],f=Wl.storage().ref().child(h.name);await f.put(h),console.log("archivo cargado:",h.name);const y=await f.getDownloadURL();r(y),s(!0)},u=async c=>{c.preventDefault();const h=e.current.value,d=t.current.value;await Wl.firestore().collection("projectsFiles").doc(h,d).set({url:n,name:h,behance:d}),console.log("archivo cargado:",h,"behance:",d,"url:",n),a(!0),e.current.value="",t.current.value=""};return _.jsxs(_.Fragment,{children:[_.jsx(Fy,{}),_.jsxs("div",{className:"add-screen-div",children:[_.jsx("h1",{className:"addScreenTittle",children:"Upload Proyect"}),_.jsxs("div",{className:"upload-div",children:[_.jsx("img",{className:"dropIcon",src:S$}),_.jsxs("div",{className:"btn-input-file",children:[_.jsx("img",{src:R$}),_.jsx("h1",{children:"Add files"}),_.jsx(ji,{inputClass:"input-add-files",inputType:"file",inputName:"Add files",onChange:l}),i&&alert("Archivo cargado correctamente. Recuerda asegurarte de llenar los campos de texto y enviarlos.")]})]}),_.jsxs("div",{className:"addProjectForm",children:[_.jsx("h2",{className:"descriptionTittle",children:"Description"}),_.jsx(ji,{inputClass:"input-project-title",inputRef:e,inputName:"Project Title"}),_.jsx(ji,{inputClass:"input-project-behance",inputRef:t,inputName:"URL Behance"}),_.jsx(wt,{onClick:u,btnType:"btn-upload-files",btnTittle:"Upload Files"}),o&&alert("Información cargada correctamente en firebase.")]})]})]})}function C$({children:t}){const{isLogged:e}=Ly();return e?t:_.jsx(oN,{to:"/login"})}function k$(){return _.jsx(_.Fragment,{children:_.jsxs(V0,{children:[_.jsx(zs,{path:"/",element:_.jsx(T$,{})}),_.jsx(zs,{path:"/login",element:_.jsx(E$,{})}),_.jsx(zs,{path:"/all-projects-screen",element:_.jsx(A$,{})}),_.jsx(zs,{path:"/add-project-screen",element:_.jsx(C$,{children:_.jsx(P$,{})})})]})})}function x$(){return _.jsx(_.Fragment,{children:_.jsx("main",{children:_.jsx(V0,{children:_.jsx(zs,{path:"/*",element:_.jsx(k$,{})})})})})}function N$(){return _.jsx(_.Fragment,{children:_.jsx(x$,{})})}const b$=document.getElementById("app"),D$=S0(b$);D$.render(_.jsx(fN,{children:_.jsx(e$,{children:_.jsx(N$,{})})}));
