"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[2782],{21364:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=s(74848),t=s(28453);const r={description:"Learn about the Snaps APIs.",sidebar_position:1,sidebar_label:"Snaps APIs"},i="About the Snaps APIs",l={id:"learn/about-snaps/apis",title:"About the Snaps APIs",description:"Learn about the Snaps APIs.",source:"@site/snaps/learn/about-snaps/apis.md",sourceDirName:"learn/about-snaps",slug:"/learn/about-snaps/apis",permalink:"/update-snaps-resources/snaps/learn/about-snaps/apis",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/learn/about-snaps/apis.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Learn about the Snaps APIs.",sidebar_position:1,sidebar_label:"Snaps APIs"},sidebar:"snapsSidebar",previous:{title:"About Snaps",permalink:"/update-snaps-resources/snaps/learn/about-snaps/"},next:{title:"Snaps files",permalink:"/update-snaps-resources/snaps/learn/about-snaps/files"}},o={},c=[{value:"Snaps API",id:"snaps-api",level:2},{value:"Wallet API",id:"wallet-api",level:2},{value:"Dapp requests",id:"dapp-requests",level:3},{value:"Snap requests",id:"snap-requests",level:3},{value:"Custom JSON-RPC APIs",id:"custom-json-rpc-apis",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"about-the-snaps-apis",children:"About the Snaps APIs"}),"\n",(0,a.jsxs)(n.p,{children:["Snaps, dapps, and MetaMask can communicate with each other using the ",(0,a.jsx)(n.a,{href:"#snaps-api",children:"Snaps API"}),",\n",(0,a.jsx)(n.a,{href:"#metamask-json-rpc-api",children:"MetaMask JSON-RPC API"}),", and ",(0,a.jsx)(n.a,{href:"#custom-json-rpc-apis",children:"custom JSON-RPC APIs"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"snaps-api",children:"Snaps API"}),"\n",(0,a.jsxs)(n.p,{children:["Snaps can access the global object ",(0,a.jsx)(n.code,{children:"snap"}),", which has one method: ",(0,a.jsx)(n.code,{children:"request"}),".\nYou can use this object to make ",(0,a.jsx)(n.a,{href:"/update-snaps-resources/snaps/reference/snaps-api",children:"Snaps API"})," requests.\nThese API methods allow Snaps to extend or modify the functionality of MetaMask."]}),"\n",(0,a.jsxs)(n.p,{children:["To call each method (except the ",(0,a.jsx)(n.a,{href:"/update-snaps-resources/snaps/reference/snaps-api#interactive-ui-methods",children:"interactive UI methods"}),"),\nyou must first ",(0,a.jsx)(n.a,{href:"/update-snaps-resources/snaps/how-to/request-permissions",children:"request permission"})," in the Snap manifest file.\nFor example, to call ",(0,a.jsx)(n.a,{href:"/update-snaps-resources/snaps/reference/snaps-api#snap_notify",children:(0,a.jsx)(n.code,{children:"snap_notify"})}),", first request the\n",(0,a.jsx)(n.code,{children:"snap_notify"})," permission:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",metastring:'title="snap.manifest.json"',children:'"initialPermissions": {\n  "snap_notify": {}\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Your Snap can then call ",(0,a.jsx)(n.code,{children:"snap_notify"})," in its source code:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",metastring:'title="index.ts"',children:'await snap.request({\n  method: "snap_notify",\n  params: {\n    type: "inApp",\n    message: "Hello, world!",\n  },\n});\n'})}),"\n",(0,a.jsx)(n.h2,{id:"wallet-api",children:"Wallet API"}),"\n",(0,a.jsx)(n.h3,{id:"dapp-requests",children:"Dapp requests"}),"\n",(0,a.jsxs)(n.p,{children:["Dapps can install and communicate with Snaps using the following\n",(0,a.jsx)(n.a,{href:"/update-snaps-resources/snaps/reference/wallet-api-for-snaps",children:"Wallet API methods for Snaps"}),":"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/update-snaps-resources/snaps/reference/wallet-api-for-snaps#wallet_getsnaps",children:(0,a.jsx)(n.code,{children:"wallet_getSnaps"})})," - Gets the dapp's\npermitted Snaps."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/update-snaps-resources/snaps/reference/wallet-api-for-snaps#wallet_requestsnaps",children:(0,a.jsx)(n.code,{children:"wallet_requestSnaps"})})," - Requests\npermission to communicate with the specified Snaps."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/update-snaps-resources/snaps/reference/wallet-api-for-snaps#wallet_snap",children:(0,a.jsx)(n.code,{children:"wallet_snap"})})," - (Restricted) Calls the\nspecified custom JSON-RPC API method of the specified Snap."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/update-snaps-resources/snaps/reference/wallet-api-for-snaps#wallet_invokesnap",children:(0,a.jsx)(n.code,{children:"wallet_invokeSnap"})})," - (Restricted)\nSynonymous with ",(0,a.jsx)(n.code,{children:"wallet_snap"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["A dapp must first ",(0,a.jsx)(n.a,{href:"/update-snaps-resources/snaps/how-to/request-permissions#request-permissions-from-a-dapp",children:"request permission"}),"\nto communicate with a Snap using ",(0,a.jsx)(n.code,{children:"wallet_requestSnaps"}),".\nThe dapp can then call ",(0,a.jsx)(n.code,{children:"wallet_snap"})," or ",(0,a.jsx)(n.code,{children:"wallet_invokeSnap"})," on the permitted Snap.\nFor example, to call ",(0,a.jsx)(n.code,{children:"wallet_snap"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:'// Request permission to connect to the Snap.\nawait window.ethereum.request({\n  method: "wallet_requestSnaps",\n  params: {\n    "npm:hello-snap": {},\n  },\n});\n\n// Call the "hello" method of the Snap using wallet_snap.\nconst response = await window.ethereum.request({\n  method: "wallet_snap",\n  params: {\n    snapId: "npm:hello-snap",\n    request: { \n      method: "hello",\n    },\n  },\n});\n\nconsole.log(response); // "world!"\n'})}),"\n",(0,a.jsx)(n.h3,{id:"snap-requests",children:"Snap requests"}),"\n",(0,a.jsxs)(n.p,{children:["Snaps can also call some Wallet JSON-RPC API methods using the ",(0,a.jsx)(n.code,{children:"ethereum"})," global, which is an\n",(0,a.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-1193",children:"EIP-1193"})," provider."]}),"\n",(0,a.jsxs)(n.p,{children:["To expose ",(0,a.jsx)(n.code,{children:"ethereum"})," to the Snap execution environment, a Snap must first request the\n",(0,a.jsx)(n.a,{href:"/update-snaps-resources/snaps/reference/permissions#endowmentethereum-provider",children:(0,a.jsx)(n.code,{children:"endowment:ethereum-provider"})})," permission.\nFor example, to call ",(0,a.jsx)(n.a,{href:"/wallet/reference/eth_requestaccounts",children:(0,a.jsx)(n.code,{children:"eth_requestAccounts"})}),", first request\nthe required permission:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",metastring:'title="snap.manifest.json"',children:'"initialPermissions": {\n  "endowment:ethereum-provider": {}\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Your Snap can then call ",(0,a.jsx)(n.code,{children:"eth_requestAccounts"})," in its source code:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",metastring:'title="index.ts"',children:'await ethereum.request({ "method": "eth_requestAccounts" });\n'})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"ethereum"})," global available to Snaps has fewer capabilities than ",(0,a.jsx)(n.code,{children:"window.ethereum"})," for dapps.\nSnaps can only use it to make read requests, not to write to the blockchain or initiate transactions.\nSnaps can call all Wallet JSON-RPC API methods ",(0,a.jsx)(n.strong,{children:"except"})," the following:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/update-snaps-resources/snaps/reference/wallet-api-for-snaps#wallet_requestsnaps",children:(0,a.jsx)(n.code,{children:"wallet_requestSnaps"})})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/wallet/reference/wallet_requestPermissions",children:(0,a.jsx)(n.code,{children:"wallet_requestPermissions"})})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/wallet/reference/wallet_revokePermissions",children:(0,a.jsx)(n.code,{children:"wallet_revokePermissions"})})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/wallet/reference/wallet_addEthereumChain",children:(0,a.jsx)(n.code,{children:"wallet_addEthereumChain"})})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/wallet/reference/wallet_switchEthereumChain",children:(0,a.jsx)(n.code,{children:"wallet_switchEthereumChain"})})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/wallet/reference/wallet_watchAsset",children:(0,a.jsx)(n.code,{children:"wallet_watchAsset"})})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/wallet/reference/wallet_registerOnboarding",children:(0,a.jsx)(n.code,{children:"wallet_registerOnboarding"})})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/wallet/reference/wallet_scanQRCode",children:(0,a.jsx)(n.code,{children:"wallet_scanQRCode"})})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/wallet/reference/eth_sendRawTransaction",children:(0,a.jsx)(n.code,{children:"eth_sendRawTransaction"})})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/wallet/reference/eth_sendTransaction",children:(0,a.jsx)(n.code,{children:"eth_sendTransaction"})})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/wallet/reference/eth_signTypedData_v4",children:(0,a.jsx)(n.code,{children:"eth_signTypedData_v4"})})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/wallet/reference/eth_decrypt",children:(0,a.jsx)(n.code,{children:"eth_decrypt"})})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/wallet/reference/eth_getEncryptionPublicKey",children:(0,a.jsx)(n.code,{children:"eth_getEncryptionPublicKey"})})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"custom-json-rpc-apis",children:"Custom JSON-RPC APIs"}),"\n",(0,a.jsxs)(n.p,{children:["Snaps can implement their own custom JSON-RPC APIs to communicate with dapps and other Snaps.\nTo do so, a Snap must expose the ",(0,a.jsx)(n.a,{href:"/update-snaps-resources/snaps/reference/entry-points#onrpcrequest",children:(0,a.jsx)(n.code,{children:"onRpcRequest"})})," entry\npoint and request the ",(0,a.jsx)(n.a,{href:"/update-snaps-resources/snaps/reference/permissions#endowmentrpc",children:(0,a.jsx)(n.code,{children:"endowment:rpc"})})," permission."]}),"\n",(0,a.jsxs)(n.p,{children:["The Snap's custom API is entirely up to you, as long as it's a valid\n",(0,a.jsx)(n.a,{href:"https://www.jsonrpc.org/specification",children:"JSON-RPC"})," API."]}),"\n",(0,a.jsx)(n.admonition,{title:"Does my Snap need a custom API?",type:"note",children:(0,a.jsxs)(n.p,{children:["If your Snap can do something useful without receiving and responding to JSON-RPC requests, such as\nproviding ",(0,a.jsx)(n.a,{href:"/update-snaps-resources/snaps/reference/entry-points#ontransaction",children:"transaction insights"}),", you do not need to\nimplement a custom API.\nHowever, if you want to do something such as manage the user's keys for a particular protocol and\ncreate a dapp that sends transactions for that protocol via your Snap, you must implement a custom API."]})}),"\n",(0,a.jsxs)(n.p,{children:["For example, to create a simple Snap with a custom API, first request the ",(0,a.jsx)(n.code,{children:"endowment:rpc"})," permission.\nSet ",(0,a.jsx)(n.code,{children:"dapps"})," to ",(0,a.jsx)(n.code,{children:"true"})," to enable dapps to make JSON-RPC requests."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",metastring:'title="snap.manifest.json"',children:'"initialPermissions": {\n  "endowment:rpc": {\n    "dapps": true\n  }\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Your Snap can then implement and expose a custom API using the ",(0,a.jsx)(n.code,{children:"onRpcRequest"})," function:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",metastring:'title="index.ts"',children:'module.exports.onRpcRequest = async ({ origin, request }) => {\n  switch (request.method) {\n    // Expose a "hello" JSON-RPC method to dapps.\n    case "hello":\n      return "world!";\n\n    default:\n      throw new Error("Method not found.");\n  }\n};\n'})}),"\n",(0,a.jsx)(n.p,{children:"A dapp can then install the Snap and call the exposed method:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",metastring:'title="index.js"',children:'// Request permission to connect to the Snap.\n// If the Snap is not already installed, the user will be prompted to install it.\nawait window.ethereum.request({\n  method: "wallet_requestSnaps",\n  params: {\n    // Assuming the Snap is published to npm using the package name "hello-snap".\n    "npm:hello-snap": {},\n  },\n});\n\n// Invoke the "hello" JSON-RPC method exposed by the Snap.\nconst response = await window.ethereum.request({\n  method: "wallet_invokeSnap",\n  params: {\n    snapId: "npm:hello-snap",\n    request: {\n      method: "hello",\n    },\n  },\n});\n\nconsole.log(response); // "world!"\n'})})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>l});var a=s(96540);const t={},r=a.createContext(t);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);