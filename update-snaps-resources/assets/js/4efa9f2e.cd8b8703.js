"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[9375],{44935:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=n(74848),t=n(28453);const o={description:"Request and revoke permissions to call restricted methods.",sidebar_position:6},i="Manage permissions",a={id:"how-to/manage-permissions",title:"Manage permissions",description:"Request and revoke permissions to call restricted methods.",source:"@site/wallet/how-to/manage-permissions.md",sourceDirName:"how-to",slug:"/how-to/manage-permissions",permalink:"/update-snaps-resources/wallet/how-to/manage-permissions",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/manage-permissions.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{description:"Request and revoke permissions to call restricted methods.",sidebar_position:6},sidebar:"walletSidebar",previous:{title:"Display a dapp icon",permalink:"/update-snaps-resources/wallet/how-to/display/icon"},next:{title:"Use MetaMask SDK",permalink:"/update-snaps-resources/wallet/how-to/use-sdk/"}},c={},l=[{value:"Request permissions example",id:"request-permissions-example",level:2},{value:"Revoke permissions example",id:"revoke-permissions-example",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"manage-permissions",children:"Manage permissions"}),"\n",(0,r.jsxs)(s.p,{children:["To call a restricted RPC method, your dapp must request permission from the user using\nthe ",(0,r.jsx)(s.a,{href:"/wallet/reference/wallet_requestPermissions",children:(0,r.jsx)(s.code,{children:"wallet_requestPermissions"})})," RPC method.\nYou can get the user's current permissions using ",(0,r.jsx)(s.a,{href:"/wallet/reference/wallet_getPermissions",children:(0,r.jsx)(s.code,{children:"wallet_getPermissions"})}),",\nand revoke permissions previously granted to your dapp using\n",(0,r.jsx)(s.a,{href:"/wallet/reference/wallet_revokePermissions",children:(0,r.jsx)(s.code,{children:"wallet_revokePermissions"})}),".\nThese methods are specified by ",(0,r.jsx)(s.a,{href:"https://eips.ethereum.org/EIPS/eip-2255",children:"EIP-2255"})," and\n",(0,r.jsx)(s.a,{href:"https://github.com/MetaMask/metamask-improvement-proposals/blob/main/MIPs/mip-2.md",children:"MIP-2"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"wallet_requestPermissions"})," creates a confirmation asking the user to connect to an account and\nallow the dapp to call the requested method.\nThe confirmation screen describes the functions and data the requested method can access.\nFor example, something like the following confirmation displays when you request permission to call\nthe restricted method ",(0,r.jsx)(s.a,{href:"/wallet/reference/eth_accounts",children:(0,r.jsx)(s.code,{children:"eth_accounts"})}),":"]}),"\n",(0,r.jsxs)("div",{class:"row margin-bottom--md",children:[(0,r.jsx)("div",{class:"column",children:(0,r.jsx)("img",{src:n(94257).A,alt:"Request permissions confirmation 1",style:{border:"1px solid #DCDCDC"}})}),(0,r.jsx)("div",{class:"column",children:(0,r.jsx)("img",{src:n(22544).A,alt:"Request permissions confirmation 2",style:{border:"1px solid #DCDCDC"}})})]}),"\n",(0,r.jsx)(s.admonition,{title:"note",type:"info",children:(0,r.jsxs)(s.p,{children:["To access accounts, we recommend using ",(0,r.jsx)(s.a,{href:"/wallet/reference/eth_requestAccounts",children:(0,r.jsx)(s.code,{children:"eth_requestAccounts"})}),",\nwhich automatically asks for permission to use ",(0,r.jsx)(s.code,{children:"eth_accounts"})," by calling ",(0,r.jsx)(s.code,{children:"wallet_requestPermissions"}),"\ninternally.\nSee ",(0,r.jsx)(s.a,{href:"../connect/access-accounts",children:"how to access a user's accounts"})," for more information.\nGranting permission for ",(0,r.jsx)(s.code,{children:"eth_accounts"})," also grants access to ",(0,r.jsx)(s.a,{href:"/wallet/reference/eth_sendTransaction",children:(0,r.jsx)(s.code,{children:"eth_sendTransaction"})}),", ",(0,r.jsx)(s.a,{href:"/wallet/reference/personal_sign",children:(0,r.jsx)(s.code,{children:"personal_sign"})}),", and ",(0,r.jsx)(s.a,{href:"/wallet/reference/eth_signTypedData_v4",children:(0,r.jsx)(s.code,{children:"eth_signTypedData_v4"})}),"."]})}),"\n",(0,r.jsx)(s.h2,{id:"request-permissions-example",children:"Request permissions example"}),"\n",(0,r.jsxs)(s.p,{children:["The following example uses ",(0,r.jsx)(s.code,{children:"wallet_requestPermissions"})," to request permission from the user to call ",(0,r.jsx)(s.code,{children:"eth_accounts"}),":"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-javascript",children:'document.getElementById("requestPermissionsButton", requestPermissions);\n\nfunction requestPermissions() {\n  provider // Or window.ethereum if you don\'t support EIP-6963.\n    .request({\n      method: "wallet_requestPermissions",\n      params: [{ eth_accounts: {} }],\n    })\n    .then((permissions) => {\n      const accountsPermission = permissions.find(\n        (permission) => permission.parentCapability === "eth_accounts"\n      );\n      if (accountsPermission) {\n        console.log("eth_accounts permission successfully requested!");\n      }\n    })\n    .catch((error) => {\n      if (error.code === 4001) {\n        // EIP-1193 userRejectedRequest error\n        console.log("Permissions needed to continue.");\n      } else {\n        console.error(error);\n      }\n    });\n}\n'})}),"\n",(0,r.jsx)(s.h2,{id:"revoke-permissions-example",children:"Revoke permissions example"}),"\n",(0,r.jsxs)(s.p,{children:["The following example uses ",(0,r.jsx)(s.code,{children:"wallet_revokePermissions"})," to revoke the dapp's permission to call ",(0,r.jsx)(s.code,{children:"eth_accounts"}),":"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-javascript",children:'await provider // Or window.ethereum if you don\'t support EIP-6963.\n  .request({\n    method: "wallet_revokePermissions",\n    params: [\n      {\n        eth_accounts: {},\n      },\n    ],\n  });\n'})})]})}function m(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},22544:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/request-permissions-2-7526e02a3555f5aeaa609955aea97821.png"},94257:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/request-permissions-81ec11205503d1b5dfde85316a3da5a1.png"},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>a});var r=n(96540);const t={},o=r.createContext(t);function i(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);