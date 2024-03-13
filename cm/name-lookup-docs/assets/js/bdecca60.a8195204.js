"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[1835],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>y});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var i=r.createContext({}),l=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},p=function(t){var e=l(t.components);return r.createElement(i.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,i=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),u=l(n),d=o,y=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(y,c(c({ref:e},p),{},{components:n})):r.createElement(y,c({ref:e},p))}));function y(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,c=new Array(a);c[0]=d;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s[u]="string"==typeof t?t:o,c[1]=s;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},30798:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:3,description:"Learn about the contract proxy class in Unity.",tags:["Unity SDK"]},c="Contract proxy class",s={unversionedId:"how-to/use-sdk/gaming/unity/smart-contracts/contract-proxy-class",id:"how-to/use-sdk/gaming/unity/smart-contracts/contract-proxy-class",title:"Contract proxy class",description:"Learn about the contract proxy class in Unity.",source:"@site/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-proxy-class.md",sourceDirName:"how-to/use-sdk/gaming/unity/smart-contracts",slug:"/how-to/use-sdk/gaming/unity/smart-contracts/contract-proxy-class",permalink:"/cm/name-lookup-docs/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-proxy-class",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-proxy-class.md",tags:[{label:"Unity SDK",permalink:"/cm/name-lookup-docs/wallet/tags/unity-sdk"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Learn about the contract proxy class in Unity.",tags:["Unity SDK"]},sidebar:"walletSidebar",previous:{title:"Contract factory",permalink:"/cm/name-lookup-docs/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-factory"},next:{title:"Contract provider",permalink:"/cm/name-lookup-docs/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-provider"}},i={},l=[],p={toc:l},u="wrapper";function m(t){let{components:e,...n}=t;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"contract-proxy-class"},"Contract proxy class"),(0,o.kt)("p",null,"When ",(0,o.kt)("a",{parentName:"p",href:"/cm/name-lookup-docs/wallet/how-to/use-sdk/gaming/unity/smart-contracts/"},"interacting with smart contracts in Unity"),", the contract proxy class is responsible\nfor performing:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Transaction serialization"),(0,o.kt)("li",{parentName:"ul"},"Transaction execution"),(0,o.kt)("li",{parentName:"ul"},"Transaction result deserialization")),(0,o.kt)("p",null,"The contract proxy class is also responsible for invoking the ",(0,o.kt)("a",{parentName:"p",href:"/cm/name-lookup-docs/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-provider"},"provider")," and attempts\nto support both asynchronous and synchronous provider objects."),(0,o.kt)("p",null,"Since the proxy class is responsible for a lot, some parts of the class may be decoupled into their\nown components.\nFor example, transaction serialization and deserialization is not very customizable and will likely\nbe moved into its own component to allow more extendability."),(0,o.kt)("admonition",{title:"important",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The contract proxy class should be considered an internal and unstable API.\nYou should never need to inherit the ",(0,o.kt)("inlineCode",{parentName:"p"},"Contract")," class, unless you're using the\n",(0,o.kt)("a",{parentName:"p",href:"/cm/name-lookup-docs/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-factory#backed-type-contract-factory"},"backed type contract factory"),".\nHowever, the ",(0,o.kt)("a",{parentName:"p",href:"/cm/name-lookup-docs/wallet/how-to/use-sdk/gaming/unity/smart-contracts/#generate-contract-code"},"contract code generator")," already generates these\nclasses for you."),(0,o.kt)("p",{parentName:"admonition"},"You only  need to use ",(0,o.kt)("inlineCode",{parentName:"p"},"Contract.Attach<T>(string address, IProvider provider)"),".")))}m.isMDXComponent=!0}}]);