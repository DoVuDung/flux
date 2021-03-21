(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),o=(n(0),n(94)),i={id:"flux-utils",title:"Flux Utils"},s={unversionedId:"flux-utils",id:"flux-utils",isDocsHomePage:!1,title:"Flux Utils",description:"Flux Utils is a set of basic utility classes to help get you started with Flux. These base classes are a solid foundation for a simple Flux application, but they are not a feature-complete framework that will handle all use cases. There are many other great Flux frameworks out there if these utilities do not fulfill your needs.",source:"@site/../docs/Flux-Utils.md",slug:"/flux-utils",permalink:"/flux/docs/flux-utils",editUrl:"https://github.com/facebook/flux/edit/master/docs/../docs/Flux-Utils.md",version:"current",lastUpdatedBy:"Yangshun Tay",lastUpdatedAt:1562298457,formattedLastUpdatedAt:"7/5/2019",sidebar:"docs",previous:{title:"Dispatcher",permalink:"/flux/docs/dispatcher"},next:{title:"Videos",permalink:"/flux/docs/videos"}},c=[{value:"Usage",id:"usage",children:[]},{value:"Best practices",id:"best-practices",children:[{value:"Stores",id:"stores",children:[]},{value:"Actions",id:"actions",children:[]},{value:"Containers",id:"containers",children:[]},{value:"Views",id:"views",children:[]}]},{value:"API",id:"api",children:[{value:"<code>Store</code>",id:"store",children:[]},{value:"<code>ReduceStore&lt;T&gt;</code>",id:"reducestoret",children:[]},{value:"<code>Container</code>",id:"container",children:[]}]},{value:"Using Flux with React Hooks",id:"using-flux-with-react-hooks",children:[]},{value:"Existing Projects with <code>Store</code>/<code>ReduceStore</code>",id:"existing-projects-with-storereducestore",children:[]}],l={toc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Flux Utils is a set of basic utility classes to help get you started with Flux. These base classes are a solid foundation for a simple Flux application, but they are ",Object(o.b)("strong",{parentName:"p"},"not")," a feature-complete framework that will handle all use cases. There are many other great Flux frameworks out there if these utilities do not fulfill your needs."),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"There are three main classes exposed in Flux Utils:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"Store")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"ReduceStore")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"Container"))),Object(o.b)("p",null,"These base classes can be imported from ",Object(o.b)("inlineCode",{parentName:"p"},"flux/utils")," like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { ReduceStore } from 'flux/utils';\n\nclass CounterStore extends ReduceStore<number> {\n  getInitialState(): number {\n    return 0;\n  }\n\n  reduce(state: number, action: Object): number {\n    switch (action.type) {\n      case 'increment':\n        return state + 1;\n\n      case 'square':\n        return state * state;\n\n      default:\n        return state;\n    }\n  }\n}\n")),Object(o.b)("h2",{id:"best-practices"},"Best practices"),Object(o.b)("p",null,"There are some best practices we try to follow when using these classes:"),Object(o.b)("h3",{id:"stores"},"Stores"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Cache data"),Object(o.b)("li",{parentName:"ul"},"Expose public getters to access data (never have public setters)"),Object(o.b)("li",{parentName:"ul"},"Respond to specific actions from the dispatcher"),Object(o.b)("li",{parentName:"ul"},"Always emit a change when their data changes"),Object(o.b)("li",{parentName:"ul"},"Only emit changes during a dispatch")),Object(o.b)("h3",{id:"actions"},"Actions"),Object(o.b)("p",null,"Describe a user's action, are not setters. (e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"select-page")," not ",Object(o.b)("inlineCode",{parentName:"p"},"set-page-id"),")"),Object(o.b)("h3",{id:"containers"},"Containers"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Are React components that control a view"),Object(o.b)("li",{parentName:"ul"},"Primary job is to gather information from stores and save it in their state"),Object(o.b)("li",{parentName:"ul"},"Have no ",Object(o.b)("inlineCode",{parentName:"li"},"props")," and no UI logic")),Object(o.b)("h3",{id:"views"},"Views"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Are React components that are controlled by a container"),Object(o.b)("li",{parentName:"ul"},"Have all of the UI and rendering logic"),Object(o.b)("li",{parentName:"ul"},"Receive all information and callbacks as props")),Object(o.b)("h2",{id:"api"},"API"),Object(o.b)("h3",{id:"store"},Object(o.b)("inlineCode",{parentName:"h3"},"Store")),Object(o.b)("h4",{id:"constructordispatcher-dispatcher"},Object(o.b)("inlineCode",{parentName:"h4"},"constructor(dispatcher: Dispatcher)")),Object(o.b)("p",null,"Constructs and registers an instance of this store with the given dispatcher."),Object(o.b)("h4",{id:"addlistenercallback-function-remove-function"},Object(o.b)("inlineCode",{parentName:"h4"},"addListener(callback: Function): {remove: Function}")),Object(o.b)("p",null,"Adds a listener to the store, when the store changes the given callback will be called. A token is returned that can be used to remove the listener. Calling the ",Object(o.b)("inlineCode",{parentName:"p"},"remove()")," function on the returned token will remove the listener."),Object(o.b)("h4",{id:"getdispatcher-dispatcher"},Object(o.b)("inlineCode",{parentName:"h4"},"getDispatcher(): Dispatcher")),Object(o.b)("p",null,"Returns the dispatcher this store is registered with."),Object(o.b)("h4",{id:"getdispatchtoken-dispatchtoken"},Object(o.b)("inlineCode",{parentName:"h4"},"getDispatchToken(): DispatchToken")),Object(o.b)("p",null,"Returns the dispatch token that the dispatcher recognizes this store by. Can be used to ",Object(o.b)("inlineCode",{parentName:"p"},"waitFor()")," this store."),Object(o.b)("h4",{id:"haschanged-boolean"},Object(o.b)("inlineCode",{parentName:"h4"},"hasChanged(): boolean")),Object(o.b)("p",null,"Ask if a store has changed during the current dispatch. Can only be invoked while dispatching. This can be used for constructing derived stores that depend on data from other stores."),Object(o.b)("h4",{id:"__emitchange-void"},Object(o.b)("inlineCode",{parentName:"h4"},"__emitChange(): void")),Object(o.b)("p",null,"Emit an event notifying all listeners that this store has changed. This can only be invoked when dispatching. Changes are de-duplicated and resolved at the end of this store's ",Object(o.b)("inlineCode",{parentName:"p"},"__onDispatch")," function."),Object(o.b)("h4",{id:"ondispatchpayload-object-void"},Object(o.b)("inlineCode",{parentName:"h4"},"onDispatch(payload: Object): void")),Object(o.b)("p",null,"Subclasses must override this method. This is how the store receives actions from the dispatcher. All state mutation logic must be done during this method."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"reducestoret"},Object(o.b)("inlineCode",{parentName:"h3"},"ReduceStore<T>")),Object(o.b)("p",null,"This class extends the base ",Object(o.b)("inlineCode",{parentName:"p"},"Store"),"."),Object(o.b)("h4",{id:"getstate-t"},Object(o.b)("inlineCode",{parentName:"h4"},"getState(): T")),Object(o.b)("p",null,"Getter that exposes the entire state of this store. If your state is not immutable you should override this and not expose state directly."),Object(o.b)("h4",{id:"getinitialstate-t"},Object(o.b)("inlineCode",{parentName:"h4"},"getInitialState(): T")),Object(o.b)("p",null,"Constructs the initial state for this store. This is called once during construction of the store."),Object(o.b)("h4",{id:"reducestate-t-action-object-t"},Object(o.b)("inlineCode",{parentName:"h4"},"reduce(state: T, action: Object): T")),Object(o.b)("p",null,"Reduces the current state, and an action to the new state of this store. All subclasses must implement this method. This method should be pure and have no side-effects."),Object(o.b)("h4",{id:"areequalone-t-two-t-boolean"},Object(o.b)("inlineCode",{parentName:"h4"},"areEqual(one: T, two: T): boolean")),Object(o.b)("p",null,"Checks if two versions of state are the same. You do not need to override this if your state is immutable."),Object(o.b)("h4",{id:"doesnt-need-to-emit-a-change"},"Doesn't Need to Emit a Change"),Object(o.b)("p",null,"Note that any store that extends ",Object(o.b)("inlineCode",{parentName:"p"},"ReduceStore")," does not need to manually emit changes in ",Object(o.b)("inlineCode",{parentName:"p"},"reduce()")," (you still can if you want to though). The state is compared before and after each dispatch and changes are emitted automatically. If you need to control this behavior (perhaps because your state is mutable) override ",Object(o.b)("inlineCode",{parentName:"p"},"areEqual()"),"."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"container"},Object(o.b)("inlineCode",{parentName:"h3"},"Container")),Object(o.b)("h4",{id:"createbase-reactclass-options-object-reactclass"},Object(o.b)("inlineCode",{parentName:"h4"},"create(base: ReactClass, options: ?Object): ReactClass")),Object(o.b)("p",null,"Create is used to transform a react class into a container that updates its state when relevant stores change. The provided base class must have static methods ",Object(o.b)("inlineCode",{parentName:"p"},"getStores()")," and ",Object(o.b)("inlineCode",{parentName:"p"},"calculateState()"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { Component } from 'react';\nimport { Container } from 'flux/utils';\n\nclass CounterContainer extends Component {\n  static getStores() {\n    return [CounterStore];\n  }\n\n  static calculateState(prevState) {\n    return {\n      counter: CounterStore.getState(),\n    };\n  }\n\n  render() {\n    return <CounterUI counter={this.state.counter} />;\n  }\n}\n\nconst container = Container.create(CounterContainer);\n")),Object(o.b)("p",null,"Additional options may be provided when creating your container in order to control certain behaviors."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Containers are pure")," - By default containers are pure, meaning they will not re-render when their props and state do not change (as determined by ",Object(o.b)("inlineCode",{parentName:"p"},"shallowEquals()"),"). To disable this behavior pass options ",Object(o.b)("inlineCode",{parentName:"p"},"{pure: false}")," as the second argument to ",Object(o.b)("inlineCode",{parentName:"p"},"create()"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Containers cannot access props")," - By default containers are not able to access any props. This is both for performance reasons, and to ensure that containers are re-usable and props do not have to be threaded throughout a component tree. There are some valid situations in which you need to determine your state based on both props and a store's state. In those situations pass options ",Object(o.b)("inlineCode",{parentName:"p"},"{withProps: true}")," as the second argument to ",Object(o.b)("inlineCode",{parentName:"p"},"create()"),". This will expose the components props as the second argument to ",Object(o.b)("inlineCode",{parentName:"p"},"calculateState()"),"."))),Object(o.b)("p",null,"If you are unable to utilize react classes most of this functionality is also mirrored in a mixin. ",Object(o.b)("inlineCode",{parentName:"p"},"import {Mixin} from 'flux/utils';")),Object(o.b)("h2",{id:"using-flux-with-react-hooks"},"Using Flux with React Hooks"),Object(o.b)("p",null,"React 16.8 introduced ",Object(o.b)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-intro.html"},"Hooks"),". Much of the functionality of Flux and Flux Utils can be reproduced using ",Object(o.b)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-reference.html#usecontext"},"useContext")," & ",Object(o.b)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-reference.html#usereducer"},"useReducer"),"."),Object(o.b)("h2",{id:"existing-projects-with-storereducestore"},"Existing Projects with ",Object(o.b)("inlineCode",{parentName:"h2"},"Store"),"/",Object(o.b)("inlineCode",{parentName:"h2"},"ReduceStore")),Object(o.b)("p",null,"If you have existing projects that need to continue using Flux Util's Stores, you can use the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/Fieldscope/flux-hooks"},"flux-hooks")," package.\nAccess the store using useFluxStore which provides an API similar to ",Object(o.b)("a",{parentName:"p",href:"#container"},"Container"),"'s calculateState."))}b.isMDXComponent=!0},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=b(n),p=a,h=u["".concat(i,".").concat(p)]||u[p]||d[p]||o;return n?r.a.createElement(h,s(s({ref:t},l),{},{components:n})):r.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);