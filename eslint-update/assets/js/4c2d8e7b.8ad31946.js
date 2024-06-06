"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5484],{64597:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=t(74848),s=t(28453);const r={description:"Store encrypted and unencrypted data within a Snap.",sidebar_position:5},i="Data storage",o={id:"features/data-storage",title:"Data storage",description:"Store encrypted and unencrypted data within a Snap.",source:"@site/snaps/features/data-storage.md",sourceDirName:"features",slug:"/features/data-storage",permalink:"/eslint-update/snaps/features/data-storage",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/data-storage.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"Store encrypted and unencrypted data within a Snap.",sidebar_position:5},sidebar:"snapsSidebar",previous:{title:"Home pages",permalink:"/eslint-update/snaps/features/custom-ui/home-pages"},next:{title:"Lifecycle hooks",permalink:"/eslint-update/snaps/features/lifecycle-hooks"}},d={},p=[{value:"Request permission to store data",id:"request-permission-to-store-data",level:2},{value:"Use encrypted storage",id:"use-encrypted-storage",level:2},{value:"Use unencrypted storage",id:"use-unencrypted-storage",level:2},{value:"Example",id:"example",level:2}];function c(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"data-storage",children:"Data storage"}),"\n",(0,n.jsxs)(a.p,{children:["You can store and manage sensitive information within a Snap using encrypted storage, or\nnon-sensitive information using unencrypted storage.\nUse the ",(0,n.jsx)(a.a,{href:"/eslint-update/snaps/reference/snaps-api#snap_managestate",children:(0,n.jsx)(a.code,{children:"snap_manageState"})})," API method to persist up to\n100 MB of data to the user's disk and retrieve it at will.\nWe recommend using this method for storing data in a Snap long term."]}),"\n",(0,n.jsx)(a.admonition,{title:"important",type:"caution",children:(0,n.jsx)(a.p,{children:"Snaps are installed in each user's MetaMask instance.\nIf a Snap stores data, that data is specific to that user's MetaMask instance.\nHowever, this data can be shared across multiple dapps.\nDo not assume that the data a Snap stores is unique to a single dapp unless it is specifically designed to be that way."})}),"\n",(0,n.jsx)(a.h2,{id:"request-permission-to-store-data",children:"Request permission to store data"}),"\n",(0,n.jsxs)(a.p,{children:["To store data within a Snap, first request the\n",(0,n.jsx)(a.a,{href:"/eslint-update/snaps/reference/snaps-api#snap_managestate",children:(0,n.jsx)(a.code,{children:"snap_manageState"})})," permission.\nAdd the following to your Snap's manifest file:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-json",metastring:'title="snap.manifest.json"',children:'"initialPermissions": {\n  "snap_manageState": {}\n}\n'})}),"\n",(0,n.jsx)(a.h2,{id:"use-encrypted-storage",children:"Use encrypted storage"}),"\n",(0,n.jsxs)(a.p,{children:["By default, ",(0,n.jsx)(a.a,{href:"/eslint-update/snaps/reference/snaps-api#snap_managestate",children:(0,n.jsx)(a.code,{children:"snap_manageState"})})," automatically encrypts\ndata using a Snap-specific key before storing it on the user's disk, and automatically decrypts it\nwhen retrieved.\nThis is useful to store sensitive information, such as passwords."]}),"\n",(0,n.jsxs)(a.p,{children:["The following example uses ",(0,n.jsx)(a.code,{children:"snap_manageState"})," to store some data using the ",(0,n.jsx)(a.code,{children:"update"})," operation, and\nretrieves the data at a later time using the ",(0,n.jsx)(a.code,{children:"get"})," operation.\nWhen the data is no longer required, the Snap's state is cleared using the ",(0,n.jsx)(a.code,{children:"clear"})," operation."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-javascript",metastring:'title="index.js"',children:'// Persist some data.\nawait snap.request({\n  method: "snap_manageState",\n  params: { \n    operation: "update",\n    newState: { hello: "world" },\n  },\n});\n\n// At a later time, get the stored data.\nconst persistedData = await snap.request({\n  method: "snap_manageState",\n  params: { operation: "get" },\n});\n\nconsole.log(persistedData);\n// { hello: "world" }\n\n// If data storage is no longer necessary, clear it.\nawait snap.request({\n  method: "snap_manageState",\n  params: { \n    operation: "clear",\n  },\n});\n'})}),"\n",(0,n.jsx)(a.admonition,{type:"tip",children:(0,n.jsxs)(a.p,{children:["Accessing encrypted state requires MetaMask to be unlocked.\nIf you need to access encrypted state in a background task such as a ",(0,n.jsx)(a.a,{href:"/eslint-update/snaps/features/cron-jobs",children:"cron job"}),", use\n",(0,n.jsx)(a.a,{href:"/eslint-update/snaps/reference/snaps-api#snap_getclientstatus",children:(0,n.jsx)(a.code,{children:"snap_getClientStatus"})})," to ensure that MetaMask is\nunlocked before accessing state, preventing an unexpected password request."]})}),"\n",(0,n.jsx)(a.h2,{id:"use-unencrypted-storage",children:"Use unencrypted storage"}),"\n",(0,n.jsxs)(a.p,{children:["To use unencrypted storage, set ",(0,n.jsx)(a.code,{children:"encrypted"})," to ",(0,n.jsx)(a.code,{children:"false"})," when storing, retrieving, or clearing data\nusing ",(0,n.jsx)(a.a,{href:"/eslint-update/snaps/reference/snaps-api#snap_managestate",children:(0,n.jsx)(a.code,{children:"snap_manageState"})}),".\nThe Snap will use a storage section separate from the encrypted storage, and will not encrypt the data.\nThis is useful to access non-sensitive data from background operations such as\n",(0,n.jsx)(a.a,{href:"/eslint-update/snaps/features/cron-jobs",children:"cron jobs"}),", without requiring the user to enter their password in the case that\nMetaMask is locked."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-javascript",metastring:'title="index.js"',children:'// Persist some data.\nawait snap.request({\n  method: "snap_manageState",\n  params: { \n    operation: "update",\n    newState: { hello: "world" },\n    encrypted: false,\n  },\n});\n\n// At a later time, get the stored data.\nconst persistedData = await snap.request({\n  method: "snap_manageState",\n  params: { \n    operation: "get",\n    encrypted: false,\n  },\n});\n\nconsole.log(persistedData);\n// { hello: "world" }\n\n// If data storage is no longer necessary, clear it.\nawait snap.request({\n  method: "snap_manageState",\n  params: { \n    operation: "clear",\n    encrypted: false,\n  },\n});\n'})}),"\n",(0,n.jsx)(a.h2,{id:"example",children:"Example"}),"\n",(0,n.jsxs)(a.p,{children:["See the ",(0,n.jsx)(a.a,{href:"https://github.com/MetaMask/snaps/tree/main/packages/examples/packages/manage-state",children:(0,n.jsx)(a.code,{children:"@metamask/manage-state-example-snap"})}),"\npackage for a full example of storing data using ",(0,n.jsx)(a.a,{href:"/eslint-update/snaps/reference/snaps-api#snap_managestate",children:(0,n.jsx)(a.code,{children:"snap_manageState"})}),".\nThis example exposes a ",(0,n.jsx)(a.a,{href:"/eslint-update/snaps/learn/about-snaps/apis#custom-json-rpc-apis",children:"custom JSON-RPC API"})," for\ndapps to store, retrieve, and clear data."]})]})}function l(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,a,t)=>{t.d(a,{R:()=>i,x:()=>o});var n=t(96540);const s={},r=n.createContext(s);function i(e){const a=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:a},e.children)}}}]);