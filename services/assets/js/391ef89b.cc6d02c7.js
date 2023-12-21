"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6139],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,d=c["".concat(p,".").concat(m)]||c[m]||y[m]||i;return n?r.createElement(d,o(o({ref:t},l),{},{components:n})):r.createElement(d,o({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81604:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={description:"Set up MetaMask SDK with Infura in your Unity game.",sidebar_position:3,tags:["Unity SDK"]},o="Set up Infura in Unity",s={unversionedId:"how-to/use-3rd-party-integrations/unity-infura",id:"how-to/use-3rd-party-integrations/unity-infura",title:"Set up Infura in Unity",description:"Set up MetaMask SDK with Infura in your Unity game.",source:"@site/wallet/how-to/use-3rd-party-integrations/unity-infura.md",sourceDirName:"how-to/use-3rd-party-integrations",slug:"/how-to/use-3rd-party-integrations/unity-infura",permalink:"/services/wallet/how-to/use-3rd-party-integrations/unity-infura",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-3rd-party-integrations/unity-infura.md",tags:[{label:"Unity SDK",permalink:"/services/wallet/tags/unity-sdk"}],version:"current",sidebarPosition:3,frontMatter:{description:"Set up MetaMask SDK with Infura in your Unity game.",sidebar_position:3,tags:["Unity SDK"]},sidebar:"walletSidebar",previous:{title:"Make read-only requests in JavaScript",permalink:"/services/wallet/how-to/use-3rd-party-integrations/js-infura-api"},next:{title:"Enable human-readable addresses in Unity",permalink:"/services/wallet/how-to/use-3rd-party-integrations/unity-dweb"}},p={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2}],l={toc:u},c="wrapper";function y(e){let{components:t,...i}=e;return(0,a.kt)(c,(0,r.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"set-up-infura-in-unity"},"Set up Infura in Unity"),(0,a.kt)("p",null,"You can set up ",(0,a.kt)("a",{parentName:"p",href:"/services/wallet/concepts/sdk/"},"MetaMask SDK")," with ",(0,a.kt)("a",{parentName:"p",href:"https://docs.infura.io/"},"Infura")," in\nyour Unity game."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"An Infura API key.\nCreate one by following the first two steps in the\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.infura.io/getting-started"},"Infura getting started guide"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://docs.infura.io/networks/ethereum/how-to/secure-a-project/use-an-allowlist"},"An allowlist configured for your API key.")),(0,a.kt)("admonition",{parentName:"li",title:"important",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Your API key, when used with the SDK, is vulnerable to exposure.\nIf someone inspects your dapp's code, they can potentially retrieve your API key and submit\nrequests to Infura, impersonating your account."),(0,a.kt)("p",{parentName:"admonition"},"Use ",(0,a.kt)("a",{parentName:"p",href:"https://docs.infura.io/networks/ethereum/how-to/secure-a-project/use-an-allowlist"},"allowlists"),"\nto protect against this vulnerability.\nYou can restrict interactions with your API key to specific addresses, origins, user agents, and request methods.\nWe recommend using all allowlist options to maximize the security of your API key and dapp."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/services/wallet/how-to/connect/set-up-sdk/gaming/unity"},"MetaMask SDK set up")," in your Unity game."))),(0,a.kt)("h2",{id:"steps"},"Steps"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open your Unity project with the SDK installed.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Navigate to the game object in your scene (or the Prefab instance) that currently stores the\n",(0,a.kt)("inlineCode",{parentName:"p"},"MetaMask Unity")," script.\nIn the ",(0,a.kt)("inlineCode",{parentName:"p"},"Demo")," scene, this is the ",(0,a.kt)("inlineCode",{parentName:"p"},"MetaMaskUnitySDK")," game object.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the ",(0,a.kt)("inlineCode",{parentName:"p"},"MetaMaskUnitySDK")," Prefab to view its properties in the ",(0,a.kt)("strong",{parentName:"p"},"Inspector")," window. ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the ",(0,a.kt)("strong",{parentName:"p"},"MetaMask Unity (Script)")," section, enter your Infura API key into the ",(0,a.kt)("strong",{parentName:"p"},"Infura Project\nId")," field."))),(0,a.kt)("p",{align:"center"},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"MetaMask Unity script",src:n(812).Z,width:"600",height:"512"}))),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Save your changes.\nThis automatically configures all RPC URLs that Infura supports.")))}y.isMDXComponent=!0},812:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/unity-infura-9adaae27bdb7cf33527d987bedffce2e.png"}}]);