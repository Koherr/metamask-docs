"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6213],{35288:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var s=c(74848),t=c(28453);const i={sidebar_position:1,sidebar_label:"Objects",tags:["Keyring API"]},a="Account Management API objects",r={id:"reference/keyring-api/account-management/objects",title:"Account Management API objects",description:"Account management Snaps use the following objects",source:"@site/snaps/reference/keyring-api/account-management/objects.md",sourceDirName:"reference/keyring-api/account-management",slug:"/reference/keyring-api/account-management/objects",permalink:"/eslint-update/snaps/reference/keyring-api/account-management/objects",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/keyring-api/account-management/objects.md",tags:[{inline:!0,label:"Keyring API",permalink:"/eslint-update/snaps/tags/keyring-api"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Objects",tags:["Keyring API"]},sidebar:"snapsSidebar",previous:{title:"Account Management API",permalink:"/eslint-update/snaps/reference/keyring-api/account-management/"},next:{title:"Events",permalink:"/eslint-update/snaps/reference/keyring-api/account-management/events"}},o={},d=[{value:"<code>KeyringAccount</code>",id:"keyringaccount",level:3},{value:"Example",id:"example",level:4},{value:"<code>KeyringRequest</code>",id:"keyringrequest",level:3},{value:"Example",id:"example-1",level:4}];function l(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"account-management-api-objects",children:"Account Management API objects"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/eslint-update/snaps/features/custom-evm-accounts/",children:"Account management Snaps"})," use the following objects\nwith the ",(0,s.jsx)(n.a,{href:"/eslint-update/snaps/reference/keyring-api/account-management/",children:"Account Management API"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"keyringaccount",children:(0,s.jsx)(n.code,{children:"KeyringAccount"})}),"\n",(0,s.jsx)(n.p,{children:"An object representing an account with its properties and capabilities.\nAn account object contains:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"address"}),": ",(0,s.jsx)(n.code,{children:"string"})," - Account address or next receive address (UTXO)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"id"}),": ",(0,s.jsx)(n.code,{children:"string"})," - Account ID (UUIDv4)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"methods"}),": ",(0,s.jsx)(n.code,{children:"string[]"})," - List of supported ",(0,s.jsx)(n.a,{href:"/eslint-update/snaps/reference/keyring-api/chain-methods",children:"Keyring Interface API"})," methods."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"options"}),": ",(0,s.jsx)(n.code,{children:"Record<string, Json>"})," - Snap-defined account options."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"type"}),": ",(0,s.jsx)(n.code,{children:"string"})," - Account type.\n",(0,s.jsx)(n.code,{children:'"eip155:eoa"'})," for an externally owned account (EOA) or ",(0,s.jsx)(n.code,{children:'"eip155:erc4337"'})," for an\n",(0,s.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-4337",children:"ERC-4337"})," account."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "address": "0xd1f5279be4b4dd94133a23dee1b23f5bfc0db1d0",\n  "id": "091bbc2e-6625-44d0-ac5c-658670ca649a",\n  "methods": [\n    "eth_sign",\n    "eth_signTransaction",\n    "eth_signTypedData_v4",\n    "personal_sign"\n  ],\n  "options": {\n    "signerCount": 5,\n    "threshold": 3\n  },\n  "type": "eip155:eoa"\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"keyringrequest",children:(0,s.jsx)(n.code,{children:"KeyringRequest"})}),"\n",(0,s.jsx)(n.p,{children:"An object representing a request made to the account management Snap for account-related operations.\nA request object contains:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"account"}),": ",(0,s.jsx)(n.code,{children:"string"})," - Account ID (UUIDv4)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"id"}),": ",(0,s.jsx)(n.code,{children:"string"})," - Request ID (UUIDv4)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"request"})," - Inner request sent by the client application, containing:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"method"}),": ",(0,s.jsx)(n.code,{children:"string"})," - The request method."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"params"}),": ",(0,s.jsx)(n.code,{children:"Json[]"})," - Optional method parameters."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"scope"}),": ",(0,s.jsx)(n.code,{children:"string"})," - ",(0,s.jsx)(n.a,{href:"https://github.com/ChainAgnostic/CAIPs/blob/main/CAIPs/caip-2.md",children:"CAIP-2"}),"\nchain ID of the blockchain network for the request."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example-1",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "address": "0xd1f5279be4b4dd94133a23dee1b23f5bfc0db1d0",\n  "id": "f84d3a97-b6e1-47ea-8b0c-fd8609efaad4",\n  "request": {\n    "method": "personal_sign",\n    "params": [\n      "0x4578616d706c652060706572736f6e616c5f7369676e60206d657373616765",\n      "0xe887f3b50232722e6eb4c1d3a03b34c9b345acd1"\n    ]\n  },\n  "scope": "eip155:1"\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,c)=>{c.d(n,{R:()=>a,x:()=>r});var s=c(96540);const t={},i=s.createContext(t);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);