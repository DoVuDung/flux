/*! For license information please see 9737b834.549383f3.js.LICENSE.txt */
(self.webpackChunkflux_website=self.webpackChunkflux_website||[]).push([[340],{2525:function(e){"use strict";var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,o){for(var i,c,l=a(e),s=1;s<arguments.length;s++){for(var p in i=Object(arguments[s]))r.call(i,p)&&(l[p]=i[p]);if(t){c=t(i);for(var u=0;u<c.length;u++)n.call(i,c[u])&&(l[c[u]]=i[c[u]])}}return l}},1535:function(e,t,r){"use strict";var n=r(2525),a=60103,o=60106;var i=60109,c=60110,l=60112;var s=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;a=u("react.element"),o=u("react.portal"),u("react.fragment"),u("react.strict_mode"),u("react.profiler"),i=u("react.provider"),c=u("react.context"),l=u("react.forward_ref"),u("react.suspense"),s=u("react.memo"),p=u("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function m(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}function k(){}function g(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=m.prototype;var b=g.prototype=new k;b.constructor=g,n(b,m.prototype),b.isPureReactComponent=!0;var v={current:null},w=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,r){var n,o={},i=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,n)&&!C.hasOwnProperty(n)&&(o[n]=t[n]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var s=Array(l),p=0;p<l;p++)s[p]=arguments[p+2];o.children=s}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===o[n]&&(o[n]=l[n]);return{$$typeof:a,type:e,key:i,ref:c,props:o,_owner:v.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var O=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function D(e,t,r,n,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var l=!1;if(null===e)l=!0;else switch(c){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case a:case o:l=!0}}if(l)return i=i(l=e),e=""===n?"."+S(l,0):n,Array.isArray(i)?(r="",null!=e&&(r=e.replace(O,"$&/")+"/"),D(i,t,r,"",(function(e){return e}))):null!=i&&(N(i)&&(i=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(O,"$&/")+"/")+e)),t.push(i)),1;if(l=0,n=""===n?".":n+":",Array.isArray(e))for(var s=0;s<e.length;s++){var p=n+S(c=e[s],s);l+=D(c,t,r,p,i)}else if("function"==typeof(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e)))for(e=p.call(e),s=0;!(c=e.next()).done;)l+=D(c=c.value,t,r,p=n+S(c,s++),i);else if("object"===c)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function x(e,t,r){if(null==e)return e;var n=[],a=0;return D(e,n,"","",(function(e){return t.call(r,e,a++)})),n}function P(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var T={current:null};function _(){var e=T.current;if(null===e)throw Error(f(321));return e}},7378:function(e,t,r){"use strict";r(1535)},3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,y=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4651:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var n=r(2122),a=r(9756),o=(r(7378),r(3905)),i={id:"dispatcher",title:"Dispatcher"},c={unversionedId:"dispatcher",id:"dispatcher",isDocsHomePage:!1,title:"Dispatcher",description:"Dispatcher is used to broadcast payloads to registered callbacks. This is",source:"@site/../docs/Dispatcher.md",sourceDirName:".",slug:"/dispatcher",permalink:"/flux/docs/dispatcher",editUrl:"https://github.com/facebook/flux/edit/master/docs/../docs/Dispatcher.md",version:"current",lastUpdatedBy:"Yangshun Tay",lastUpdatedAt:1562298457,formattedLastUpdatedAt:"7/5/2019",frontMatter:{id:"dispatcher",title:"Dispatcher"},sidebar:"docs",previous:{title:"In-Depth Overview",permalink:"/flux/docs/in-depth-overview"},next:{title:"Flux Utils",permalink:"/flux/docs/flux-utils"}},l=[{value:"API",id:"api",children:[]},{value:"Example",id:"example",children:[]}],s={toc:l};function p(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Dispatcher is used to broadcast payloads to registered callbacks. This is\ndifferent from generic pub-sub systems in two ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Callbacks are not subscribed to particular events. Every payload is\ndispatched to every registered callback."),(0,o.kt)("li",{parentName:"ul"},"Callbacks can be deferred in whole or part until other callbacks have\nbeen executed.")),(0,o.kt)("p",null,"Check out ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/flux/blob/master/src/Dispatcher.js"},"Dispatcher.js")," for the source code."),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"register(function callback): string")),"\nRegisters a callback to be invoked with every dispatched payload. Returns a token that can be used with ",(0,o.kt)("inlineCode",{parentName:"p"},"waitFor()"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"unregister(string id): void")),"\nRemoves a callback based on its token.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"waitFor(array<string> ids): void")),"\nWaits for the callbacks specified to be invoked before continuing execution of the current callback. This method should only be used by a callback in response to a dispatched payload.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"dispatch(object payload): void"))," Dispatches a payload to all registered callbacks.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"isDispatching(): boolean"))," Is this Dispatcher currently dispatching."))),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"For example, consider this hypothetical flight destination form, which\nselects a default city when a country is selected:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var flightDispatcher = new Dispatcher();\n\n// Keeps track of which country is selected\nvar CountryStore = {country: null};\n\n// Keeps track of which city is selected\nvar CityStore = {city: null};\n\n// Keeps track of the base flight price of the selected city\nvar FlightPriceStore = {price: null};\n")),(0,o.kt)("p",null,"When a user changes the selected city, we dispatch the payload:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"flightDispatcher.dispatch({\n  actionType: 'city-update',\n  selectedCity: 'paris'\n});\n")),(0,o.kt)("p",null,"This payload is digested by ",(0,o.kt)("inlineCode",{parentName:"p"},"CityStore"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"flightDispatcher.register(function(payload) {\n  if (payload.actionType === 'city-update') {\n    CityStore.city = payload.selectedCity;\n  }\n});\n")),(0,o.kt)("p",null,"When the user selects a country, we dispatch the payload:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"flightDispatcher.dispatch({\n  actionType: 'country-update',\n  selectedCountry: 'australia'\n});\n")),(0,o.kt)("p",null,"This payload is digested by both stores:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"}," CountryStore.dispatchToken = flightDispatcher.register(function(payload) {\n  if (payload.actionType === 'country-update') {\n    CountryStore.country = payload.selectedCountry;\n  }\n});\n")),(0,o.kt)("p",null,"When the callback to update ",(0,o.kt)("inlineCode",{parentName:"p"},"CountryStore")," is registered, we save a reference\nto the returned token. Using this token with ",(0,o.kt)("inlineCode",{parentName:"p"},"waitFor()"),", we can guarantee\nthat ",(0,o.kt)("inlineCode",{parentName:"p"},"CountryStore")," is updated before the callback that updates ",(0,o.kt)("inlineCode",{parentName:"p"},"CityStore"),"\nneeds to query its data."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"CityStore.dispatchToken = flightDispatcher.register(function(payload) {\n  if (payload.actionType === 'country-update') {\n    // `CountryStore.country` may not be updated.\n    flightDispatcher.waitFor([CountryStore.dispatchToken]);\n    // `CountryStore.country` is now guaranteed to be updated.\n\n    // Select the default city for the new country\n    CityStore.city = getDefaultCityForCountry(CountryStore.country);\n  }\n});\n")),(0,o.kt)("p",null,"The usage of ",(0,o.kt)("inlineCode",{parentName:"p"},"waitFor()")," can be chained, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"FlightPriceStore.dispatchToken =\n  flightDispatcher.register(function(payload) {\n    switch (payload.actionType) {\n      case 'country-update':\n      case 'city-update':\n        flightDispatcher.waitFor([CityStore.dispatchToken]);\n        FlightPriceStore.price =\n          getFlightPriceStore(CountryStore.country, CityStore.city);\n        break;\n  }\n});\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"country-update")," payload will be guaranteed to invoke the stores'\nregistered callbacks in order: ",(0,o.kt)("inlineCode",{parentName:"p"},"CountryStore"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"CityStore"),", then\n",(0,o.kt)("inlineCode",{parentName:"p"},"FlightPriceStore"),"."))}p.isMDXComponent=!0}}]);