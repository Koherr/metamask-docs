"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[2445],{23164:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=t(74848),s=t(28453);const r={sidebar_position:2,sidebar_label:"Events",tags:["Keyring API"]},c="Account Management API events",i={id:"reference/keyring-api/account-management/events",title:"Account Management API events",description:"Account management Snaps can notify MetaMask of the",source:"@site/snaps/reference/keyring-api/account-management/events.md",sourceDirName:"reference/keyring-api/account-management",slug:"/reference/keyring-api/account-management/events",permalink:"/update-snaps-resources/snaps/reference/keyring-api/account-management/events",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/keyring-api/account-management/events.md",tags:[{label:"Keyring API",permalink:"/update-snaps-resources/snaps/tags/keyring-api"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Events",tags:["Keyring API"]},sidebar:"snapsSidebar",previous:{title:"Objects",permalink:"/update-snaps-resources/snaps/reference/keyring-api/account-management/objects"},next:{title:"Chain Methods API",permalink:"/update-snaps-resources/snaps/reference/keyring-api/chain-methods"}},o={},d=[{value:"<code>AccountCreated</code>",id:"accountcreated",level:3},{value:"Example",id:"example",level:4},{value:"<code>AccountUpdated</code>",id:"accountupdated",level:3},{value:"Example",id:"example-1",level:4},{value:"<code>AccountDeleted</code>",id:"accountdeleted",level:3},{value:"Example",id:"example-2",level:4},{value:"<code>RequestApproved</code>",id:"requestapproved",level:3},{value:"Example",id:"example-3",level:4},{value:"<code>RequestRejected</code>",id:"requestrejected",level:3},{value:"Example",id:"example-4",level:4}];function l(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"account-management-api-events",children:"Account Management API events"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/update-snaps-resources/snaps/features/custom-evm-accounts/",children:"Account management Snaps"})," can notify MetaMask of the\nfollowing ",(0,a.jsx)(n.a,{href:"/update-snaps-resources/snaps/reference/keyring-api/account-management/",children:"Account Management API"})," events."]}),"\n",(0,a.jsx)(n.h3,{id:"accountcreated",children:(0,a.jsx)(n.code,{children:"AccountCreated"})}),"\n",(0,a.jsx)(n.p,{children:"An account is created.\nMetaMask returns an error if the account already exists or the account object is invalid."}),"\n",(0,a.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"try {\n  emitSnapKeyringEvent(snap, KeyringEvent.AccountCreated, { account });\n  // Update your Snap's state.\n} catch (error) {\n  // Handle the error.\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"accountupdated",children:(0,a.jsx)(n.code,{children:"AccountUpdated"})}),"\n",(0,a.jsx)(n.p,{children:"An account is updated.\nMetaMask returns an error if one of the following is true:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"The account does not exist."}),"\n",(0,a.jsx)(n.li,{children:"The account object is invalid."}),"\n",(0,a.jsx)(n.li,{children:"The account address is updated."}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"example-1",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"try {\n  emitSnapKeyringEvent(snap, KeyringEvent.AccountUpdated, { account });\n  // Update your Snap's state.\n} catch (error) {\n  // Handle the error.\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"accountdeleted",children:(0,a.jsx)(n.code,{children:"AccountDeleted"})}),"\n",(0,a.jsx)(n.p,{children:"An account is deleted.\nThe delete event is idempotent, so it is safe to emit even if the account does not exist."}),"\n",(0,a.jsx)(n.h4,{id:"example-2",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"try {\n  emitSnapKeyringEvent(snap, KeyringEvent.AccountDeleted, {\n    id: account.id,\n  });\n  // Update your Snap's state.\n} catch (error) {\n  // Handle the error.\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"requestapproved",children:(0,a.jsx)(n.code,{children:"RequestApproved"})}),"\n",(0,a.jsxs)(n.p,{children:["A request is approved.\nMetaMask returns an error if the request does not exist.\nThis event only applies to Snaps that\n",(0,a.jsx)(n.a,{href:"/update-snaps-resources/snaps/features/custom-evm-accounts/#asynchronous-transaction-flow",children:"handle requests asynchronously"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"example-3",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"try {\n  emitSnapKeyringEvent(snap, KeyringEvent.RequestApproved, {\n    id: request.id,\n    result,\n  });\n  // Update your Snap's state.\n} catch (error) {\n  // Handle the error.\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"requestrejected",children:(0,a.jsx)(n.code,{children:"RequestRejected"})}),"\n",(0,a.jsxs)(n.p,{children:["A request is rejected.\nMetaMask returns an error if the request does not exist.\nThis event only applies to Snaps that\n",(0,a.jsx)(n.a,{href:"/update-snaps-resources/snaps/features/custom-evm-accounts/#asynchronous-transaction-flow",children:"handle requests asynchronously"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"example-4",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"try {\n  emitSnapKeyringEvent(snap, KeyringEvent.RequestRejected, {\n    id: request.id,\n  });\n  // Update your Snap's state.\n} catch (error) {\n  // Handle the error.\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var a=t(96540);const s={},r=a.createContext(s);function c(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);