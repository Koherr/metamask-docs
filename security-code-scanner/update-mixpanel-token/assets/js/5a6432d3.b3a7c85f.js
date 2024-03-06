"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[8371],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=i,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||r;return t?a.createElement(g,o(o({ref:n},p),{},{components:t})):a.createElement(g,o({ref:n},p))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},50558:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=t(87462),i=(t(67294),t(3905));const r={sidebar_position:1,sidebar_label:"Connect and sign",tags:["Unity SDK"]},o="Connect and sign in Unity",s={unversionedId:"how-to/use-sdk/gaming/unity/connect-and-sign",id:"how-to/use-sdk/gaming/unity/connect-and-sign",title:"Connect and sign in Unity",description:"You can connect and sign in a single interaction from your Unity game.",source:"@site/wallet/how-to/use-sdk/gaming/unity/connect-and-sign.md",sourceDirName:"how-to/use-sdk/gaming/unity",slug:"/how-to/use-sdk/gaming/unity/connect-and-sign",permalink:"/security-code-scanner/update-mixpanel-token/wallet/how-to/use-sdk/gaming/unity/connect-and-sign",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/gaming/unity/connect-and-sign.md",tags:[{label:"Unity SDK",permalink:"/security-code-scanner/update-mixpanel-token/wallet/tags/unity-sdk"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Connect and sign",tags:["Unity SDK"]},sidebar:"walletSidebar",previous:{title:"Unity",permalink:"/security-code-scanner/update-mixpanel-token/wallet/how-to/use-sdk/gaming/unity/"},next:{title:"Set up Infura",permalink:"/security-code-scanner/update-mixpanel-token/wallet/how-to/use-sdk/gaming/unity/infura"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2}],p={toc:l},u="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"connect-and-sign-in-unity"},"Connect and sign in Unity"),(0,i.kt)("p",null,"You can ",(0,i.kt)("a",{parentName:"p",href:"/security-code-scanner/update-mixpanel-token/wallet/how-to/sign-data/connect-and-sign"},"connect and sign")," in a single interaction from your Unity game."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/security-code-scanner/update-mixpanel-token/wallet/how-to/use-sdk/gaming/unity/"},"MetaMask SDK set up")," in your Unity game.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"MetaMask Mobile version 7.10 or later.\nYour users must have an updated version of MetaMask Mobile for this feature to work correctly.\nFor older versions of MetaMask, this function may not work as expected."))),(0,i.kt)("h2",{id:"steps"},"Steps"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open your Unity project with the SDK installed.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In your script, create a new function named ",(0,i.kt)("inlineCode",{parentName:"p"},"ConnectAndSign"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'public void ConnectAndSign()\n{\n    MetaMaskUnity.Instance.ConnectAndSign("This is a test message");\n}\n')),(0,i.kt)("p",{parentName:"li"},"Replace the test message with any string message you want to sign."),(0,i.kt)("admonition",{parentName:"li",title:"important",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Make sure you initialize ",(0,i.kt)("a",{parentName:"p",href:"/security-code-scanner/update-mixpanel-token/wallet/reference/sdk-unity-api#instance"},(0,i.kt)("inlineCode",{parentName:"a"},"MetaMaskUnity.Instance")),"\nbefore using this function.\nTo do so, enable ",(0,i.kt)("strong",{parentName:"p"},"Initialize On Awake")," in the ",(0,i.kt)("strong",{parentName:"p"},"MetaMask Unity")," script inspector, or run\n",(0,i.kt)("a",{parentName:"p",href:"/security-code-scanner/update-mixpanel-token/wallet/reference/sdk-unity-api#initialize"},(0,i.kt)("inlineCode",{parentName:"a"},"MetaMask.Instance.Initialize()")),"."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Call the ",(0,i.kt)("inlineCode",{parentName:"p"},"ConnectAndSign")," function whenever you want to establish a connection and sign a message.\nFor example, you can call this function when a button is clicked:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"public void OnButtonClick()\n{\n    ConnectAndSign();\n}\n")))))}d.isMDXComponent=!0}}]);