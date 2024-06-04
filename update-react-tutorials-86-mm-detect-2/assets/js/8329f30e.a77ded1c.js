"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[8691],{38395:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=n(74848),s=n(28453);const r={description:"Set up MetaMask SDK with Infura in your Unity game.",sidebar_position:2,sidebar_label:"Set up Infura",tags:["Unity SDK"]},a="Set up Infura in Unity",o={id:"how-to/use-sdk/gaming/unity/infura",title:"Set up Infura in Unity",description:"Set up MetaMask SDK with Infura in your Unity game.",source:"@site/wallet/how-to/use-sdk/gaming/unity/infura.md",sourceDirName:"how-to/use-sdk/gaming/unity",slug:"/how-to/use-sdk/gaming/unity/infura",permalink:"/update-react-tutorials-86-mm-detect-2/wallet/how-to/use-sdk/gaming/unity/infura",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/gaming/unity/infura.md",tags:[{label:"Unity SDK",permalink:"/update-react-tutorials-86-mm-detect-2/wallet/tags/unity-sdk"}],version:"current",sidebarPosition:2,frontMatter:{description:"Set up MetaMask SDK with Infura in your Unity game.",sidebar_position:2,sidebar_label:"Set up Infura",tags:["Unity SDK"]},sidebar:"walletSidebar",previous:{title:"Connect and sign",permalink:"/update-react-tutorials-86-mm-detect-2/wallet/how-to/use-sdk/gaming/unity/connect-and-sign"},next:{title:"Interact with smart contracts",permalink:"/update-react-tutorials-86-mm-detect-2/wallet/how-to/use-sdk/gaming/unity/smart-contracts/"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"set-up-infura-in-unity",children:"Set up Infura in Unity"}),"\n",(0,i.jsxs)(t.p,{children:["You can set up ",(0,i.jsx)(t.a,{href:"/update-react-tutorials-86-mm-detect-2/wallet/concepts/sdk/",children:"MetaMask SDK"})," with ",(0,i.jsx)(t.a,{href:"https://docs.infura.io/",children:"Infura"})," in\nyour Unity game."]}),"\n",(0,i.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["An Infura API key.\nCreate one by following the first two steps in the\n",(0,i.jsx)(t.a,{href:"https://docs.infura.io/getting-started",children:"Infura getting started guide"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://docs.infura.io/networks/ethereum/how-to/secure-a-project/use-an-allowlist",children:"An allowlist configured for your API key."})}),"\n",(0,i.jsxs)(t.admonition,{title:"important",type:"caution",children:[(0,i.jsx)(t.p,{children:"Your API key, when used with the SDK, is vulnerable to exposure.\nIf someone inspects your dapp's code, they can potentially retrieve your API key and submit\nrequests to Infura, impersonating your account."}),(0,i.jsxs)(t.p,{children:["Use ",(0,i.jsx)(t.a,{href:"https://docs.infura.io/networks/ethereum/how-to/secure-a-project/use-an-allowlist",children:"allowlists"}),"\nto protect against this vulnerability.\nYou can restrict interactions with your API key to specific addresses, origins, user agents, and request methods.\nWe recommend using all allowlist options to maximize the security of your API key and dapp."]})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/update-react-tutorials-86-mm-detect-2/wallet/how-to/use-sdk/gaming/unity/",children:"MetaMask SDK set up"})," in your Unity game."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"steps",children:"Steps"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Open your Unity project with the SDK installed."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Navigate to the game object in your scene (or the Prefab instance) that currently stores the\n",(0,i.jsx)(t.code,{children:"MetaMask Unity"})," script.\nIn the ",(0,i.jsx)(t.code,{children:"Demo"})," scene, this is the ",(0,i.jsx)(t.code,{children:"MetaMaskUnitySDK"})," game object."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Select the ",(0,i.jsx)(t.code,{children:"MetaMaskUnitySDK"})," Prefab to view its properties in the ",(0,i.jsx)(t.strong,{children:"Inspector"})," window."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["In the ",(0,i.jsx)(t.strong,{children:"MetaMask Unity (Script)"})," section, enter your Infura API key into the ",(0,i.jsx)(t.strong,{children:"Infura Project\nId"})," field."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)("p",{align:"center",children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"MetaMask Unity script",src:n(90695).A+"",width:"600",height:"512"})})}),"\n",(0,i.jsxs)(t.ol,{start:"5",children:["\n",(0,i.jsx)(t.li,{children:"Save your changes.\nThis automatically configures all RPC URLs that Infura supports."}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},90695:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/unity-infura-9adaae27bdb7cf33527d987bedffce2e.png"},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var i=n(96540);const s={},r=i.createContext(s);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);