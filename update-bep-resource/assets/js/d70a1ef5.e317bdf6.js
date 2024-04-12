"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[7382],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>b});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),u=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return o.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,b=c["".concat(p,".").concat(m)]||c[m]||d[m]||r;return n?o.createElement(b,s(s({ref:t},l),{},{components:n})):o.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<r;u++)s[u]=n[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80971:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var o=n(87462),a=(n(67294),n(3905));const r={sidebar_position:6},s="Debug a Snap",i={unversionedId:"how-to/debug-a-snap/index",id:"how-to/debug-a-snap/index",title:"Debug a Snap",description:"To debug your Snap, use console.log and inspect the MetaMask background process.",source:"@site/snaps/how-to/debug-a-snap/index.md",sourceDirName:"how-to/debug-a-snap",slug:"/how-to/debug-a-snap/",permalink:"/update-bep-resource/snaps/how-to/debug-a-snap/",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/how-to/debug-a-snap/index.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"snapsSidebar",previous:{title:"Test a Snap",permalink:"/update-bep-resource/snaps/how-to/test-a-snap"},next:{title:"Troubleshoot common issues",permalink:"/update-bep-resource/snaps/how-to/debug-a-snap/common-issues"}},p={},u=[],l={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"debug-a-snap"},"Debug a Snap"),(0,a.kt)("p",null,"To debug your Snap, use ",(0,a.kt)("inlineCode",{parentName:"p"},"console.log")," and inspect the MetaMask background process."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can also see the ",(0,a.kt)("a",{parentName:"p",href:"/update-bep-resource/snaps/how-to/debug-a-snap/common-issues"},"common issues")," encountered by Snap developers.")),(0,a.kt)("p",null,"You can add your log statements in your source code and build your Snap, or add them directly\nto your Snap bundle and use ",(0,a.kt)("a",{parentName:"p",href:"/update-bep-resource/snaps/reference/cli/subcommands#m-manifest"},(0,a.kt)("inlineCode",{parentName:"a"},"yarn mm-snap manifest --fix")),"\nto update the ",(0,a.kt)("inlineCode",{parentName:"p"},"shasum")," in your Snap manifest file.\nThe manifest ",(0,a.kt)("inlineCode",{parentName:"p"},"shasum")," must match the contents of your bundle at the time MetaMask fetches your Snap."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Because adding logs modifies the Snap source code, you must re-install the Snap whenever you add a\nlog statement.")),(0,a.kt)("p",null,"The Snap log output is only visible in the extension background process console.\nIf you're using a Chromium browser, use the following steps to inspect the background process and\nview its console:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("inlineCode",{parentName:"li"},"chrome://extensions"),"."),(0,a.kt)("li",{parentName:"ol"},"Toggle ",(0,a.kt)("strong",{parentName:"li"},"Developer mode")," on in the top right corner."),(0,a.kt)("li",{parentName:"ol"},"Find MetaMask Flask, and select ",(0,a.kt)("strong",{parentName:"li"},"Details"),"."),(0,a.kt)("li",{parentName:"ol"},"Under ",(0,a.kt)("strong",{parentName:"li"},"Inspect views"),", select ",(0,a.kt)("inlineCode",{parentName:"li"},"background.html"),".")),(0,a.kt)("p",null,"The log output displays in the console that pops up."))}d.isMDXComponent=!0}}]);