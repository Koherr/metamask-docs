"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[1180],{86141:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var a=s(74848),t=s(28453),l=s(11470),r=s(19365);const i={description:"See the Wallet API for Snaps reference.",sidebar_position:2,toc_max_heading_level:2},o="Wallet API for Snaps",c={id:"reference/wallet-api-for-snaps",title:"Wallet API for Snaps",description:"See the Wallet API for Snaps reference.",source:"@site/snaps/reference/wallet-api-for-snaps.md",sourceDirName:"reference",slug:"/reference/wallet-api-for-snaps",permalink:"/eslint-update/snaps/reference/wallet-api-for-snaps",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/wallet-api-for-snaps.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"See the Wallet API for Snaps reference.",sidebar_position:2,toc_max_heading_level:2},sidebar:"snapsSidebar",previous:{title:"Snaps API",permalink:"/eslint-update/snaps/reference/snaps-api"},next:{title:"Snaps command line",permalink:"/eslint-update/snaps/reference/cli"}},d={},h=[{value:"<code>wallet_getSnaps</code>",id:"wallet_getsnaps",level:2},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:3},{value:"<code>wallet_requestSnaps</code>",id:"wallet_requestsnaps",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns-1",level:3},{value:"Example",id:"example-1",level:3},{value:"<code>wallet_snap</code>",id:"wallet_snap",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Returns",id:"returns-2",level:3},{value:"Example",id:"example-2",level:3},{value:"<code>wallet_invokeSnap</code>",id:"wallet_invokesnap",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"Returns",id:"returns-3",level:3},{value:"Example",id:"example-3",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"wallet-api-for-snaps",children:"Wallet API for Snaps"}),"\n",(0,a.jsxs)(n.p,{children:["Dapps can install and communicate with Snaps using a subset of the\n",(0,a.jsx)(n.a,{href:"/wallet/concepts/wallet-api/#json-rpc-api",children:"Wallet JSON-RPC API"}),".\nThis page is a reference for those Snaps-specific methods."]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["See the ",(0,a.jsx)(n.a,{href:"/wallet/reference/json-rpc-api",children:"Wallet JSON-RPC API interactive reference"})," for the other\nmethods dapps can call."]})}),"\n",(0,a.jsx)(n.h2,{id:"wallet_getsnaps",children:(0,a.jsx)(n.code,{children:"wallet_getSnaps"})}),"\n",(0,a.jsx)(n.p,{children:"Returns the IDs of the dapp's permitted Snaps and some relevant metadata."}),"\n",(0,a.jsx)(n.h3,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(n.p,{children:"An object mapping the IDs of permitted Snaps to their metadata:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"id"}),": ",(0,a.jsx)(n.code,{children:"string"})," - The ID of the Snap."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"initialPermissions"}),": ",(0,a.jsx)(n.code,{children:"string"})," - The initial permissions of the Snap, which will be requested when\nthe Snap is installed."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"version"}),": ",(0,a.jsx)(n.code,{children:"string"})," - The version of the Snap."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"enabled"}),": ",(0,a.jsx)(n.code,{children:"boolean"})," - Indicates whether the Snap is enabled."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"blocked"}),": ",(0,a.jsx)(n.code,{children:"boolean"})," - Indicates whether the Snap is blocked."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(l.A,{children:[(0,a.jsx)(r.A,{value:"Request",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'await window.ethereum.request({\n  "method": "wallet_getSnaps",\n  "params": []\n});\n'})})}),(0,a.jsx)(r.A,{value:"Result",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "npm:@metamask/example-snap": {\n    "version": "1.0.0",\n    "id": "npm:@metamask/example-snap",\n    "enabled": true,\n    "blocked": false\n  }\n}\n'})})})]}),"\n",(0,a.jsx)(n.h2,{id:"wallet_requestsnaps",children:(0,a.jsx)(n.code,{children:"wallet_requestSnaps"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/eslint-update/snaps/how-to/request-permissions#request-permissions-from-a-dapp",children:"Requests permission"})," for a dapp\nto communicate with the specified Snaps and attempts to install them if they're not already installed."]}),"\n",(0,a.jsx)(n.p,{children:"If the Snap version range is specified, MetaMask attempts to install a version of the Snap that\nsatisfies the range.\nIf a compatible version of the Snap is already installed, the request succeeds.\nIf an incompatible version is installed, MetaMask attempts to update the Snap to the latest version\nthat satisfies the range.\nThe request succeeds if the Snap is successfully installed."}),"\n",(0,a.jsx)(n.p,{children:"If the installation of any Snap fails, this method returns the error that caused the failure."}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["A dapp must call this method on Snap before calling ",(0,a.jsx)(n.a,{href:"#wallet_snap",children:(0,a.jsx)(n.code,{children:"wallet_snap"})})," or\n",(0,a.jsx)(n.a,{href:"#wallet_invokesnap",children:(0,a.jsx)(n.code,{children:"wallet_invokeSnap"})})," on the Snap."]})}),"\n",(0,a.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(n.p,{children:["An object mapping the IDs of the requested Snaps to optional SemVer version ranges.\nThe SemVer version ranges use the same semantics as npm ",(0,a.jsx)(n.code,{children:"package.json"})," ranges."]}),"\n",(0,a.jsx)(n.h3,{id:"returns-1",children:"Returns"}),"\n",(0,a.jsx)(n.p,{children:"An object mapping the IDs of permitted Snaps to their metadata:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"id"}),": ",(0,a.jsx)(n.code,{children:"string"})," - The ID of the Snap."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"initialPermissions"}),": ",(0,a.jsx)(n.code,{children:"string"})," - The initial permissions of the Snap, which will be request when\nthe Snap is installed."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"version"}),": ",(0,a.jsx)(n.code,{children:"string"})," - The version of the Snap."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"enabled"}),": ",(0,a.jsx)(n.code,{children:"boolean"})," - Indicates whether the Snap is enabled."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"blocked"}),": ",(0,a.jsx)(n.code,{children:"boolean"})," - Indicates whether the Snap is blocked."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"example-1",children:"Example"}),"\n",(0,a.jsxs)(l.A,{children:[(0,a.jsx)(r.A,{value:"Request",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'await window.ethereum.request({\n  "method": "wallet_requestSnaps",\n  "params": [\n    {\n      "npm:@metamask/example-snap": {},\n      "npm:fooSnap": {\n        "version": "^1.0.2"\n      }\n    }\n  ]\n});\n'})})}),(0,a.jsx)(r.A,{value:"Result",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "npm:@metamask/example-snap": {\n    "version": "1.0.0",\n    "id": "npm:@metamask/example-snap",\n    "enabled": true,\n    "blocked": false\n  },\n  "npm:fooSnap": {\n    "version": "1.0.5",\n    "id": "npm:fooSnap",\n    "enabled": true,\n    "blocked": false\n  }\n}\n'})})})]}),"\n",(0,a.jsx)(n.h2,{id:"wallet_snap",children:(0,a.jsx)(n.code,{children:"wallet_snap"})}),"\n",(0,a.jsxs)(n.p,{children:["Calls the specified JSON-RPC API method of the specified Snap.\nThe Snap must be installed and the dapp must have permission to communicate with the Snap, or the\nrequest is rejected.\nThe dapp can install the Snap and request permission to communicate with it using\n",(0,a.jsx)(n.a,{href:"#wallet_requestsnaps",children:(0,a.jsx)(n.code,{children:"wallet_requestSnaps"})}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["This method is synonymous to ",(0,a.jsx)(n.a,{href:"#wallet_invokesnap",children:(0,a.jsx)(n.code,{children:"wallet_invokeSnap"})}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,a.jsx)(n.p,{children:"An object containing:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"snapId"}),": ",(0,a.jsx)(n.code,{children:"string"})," - The ID of the Snap to invoke."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"request"}),": ",(0,a.jsx)(n.code,{children:"object"})," - The JSON-RPC request object to send to the invoked Snap."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"returns-2",children:"Returns"}),"\n",(0,a.jsx)(n.p,{children:"The result of the Snap method call."}),"\n",(0,a.jsx)(n.h3,{id:"example-2",children:"Example"}),"\n",(0,a.jsxs)(l.A,{children:[(0,a.jsx)(r.A,{value:"Request",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'await window.ethereum.request({\n  "method": "wallet_snap",\n  "params": [\n    {\n      "snapId": "npm:@metamask/example-snap",\n      "request": {\n        "method": "hello"\n      }\n    }\n  ]\n});\n'})})}),(0,a.jsx)(r.A,{value:"Result",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:"{}\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"wallet_invokesnap",children:(0,a.jsx)(n.code,{children:"wallet_invokeSnap"})}),"\n",(0,a.jsxs)(n.p,{children:["Calls the specified JSON-RPC API method of the specified Snap.\nThe Snap must be installed and the dapp must have permission to communicate with the Snap, or the\nrequest is rejected.\nThe dapp can install the Snap and request permission to communicate with it using\n",(0,a.jsx)(n.a,{href:"#wallet_requestsnaps",children:(0,a.jsx)(n.code,{children:"wallet_requestSnaps"})}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["This method is synonymous to ",(0,a.jsx)(n.a,{href:"#wallet_snap",children:(0,a.jsx)(n.code,{children:"wallet_snap"})}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"parameters-2",children:"Parameters"}),"\n",(0,a.jsx)(n.p,{children:"An object containing:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"snapId"}),": ",(0,a.jsx)(n.code,{children:"string"})," - The ID of the Snap to invoke."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"request"}),": ",(0,a.jsx)(n.code,{children:"object"})," - The JSON-RPC request object to send to the invoked Snap."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"returns-3",children:"Returns"}),"\n",(0,a.jsx)(n.p,{children:"The result of the Snap method call."}),"\n",(0,a.jsx)(n.h3,{id:"example-3",children:"Example"}),"\n",(0,a.jsxs)(l.A,{children:[(0,a.jsx)(r.A,{value:"Request",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'await window.ethereum.request({\n  "method": "wallet_invokeSnap",\n  "params": [\n    {\n      "snapId": "npm:@metamask/example-snap",\n      "request": {\n        "method": "hello"\n      }\n    }\n  ]\n});\n'})})}),(0,a.jsx)(r.A,{value:"Result",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:"{}\n"})})})]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},19365:(e,n,s)=>{s.d(n,{A:()=>r});s(96540);var a=s(18215);const t={tabItem:"tabItem_Ymn6"};var l=s(74848);function r(e){let{children:n,hidden:s,className:r}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.A)(t.tabItem,r),hidden:s,children:n})}},11470:(e,n,s)=>{s.d(n,{A:()=>g});var a=s(96540),t=s(18215),l=s(23104),r=s(56347),i=s(205),o=s(57485),c=s(31682),d=s(70679);function h(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:s}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:s,attributes:a,default:t}}=e;return{value:n,label:s,attributes:a,default:t}}))}(s);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:s}=e;const t=(0,r.W6)(),l=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,o.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(t.location.search);n.set(l,e),t.replace({...t.location,search:n.toString()})}),[l,t])]}function x(e){const{defaultValue:n,queryString:s=!1,groupId:t}=e,l=u(e),[r,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=s.find((e=>e.default))??s[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[c,h]=m({queryString:s,groupId:t}),[x,j]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,l]=(0,d.Dv)(s);return[t,(0,a.useCallback)((e=>{s&&l.set(e)}),[s,l])]}({groupId:t}),f=(()=>{const e=c??x;return p({value:e,tabValues:l})?e:null})();(0,i.A)((()=>{f&&o(f)}),[f]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),j(e)}),[h,j,l]),tabValues:l}}var j=s(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=s(74848);function b(e){let{className:n,block:s,selectedValue:a,selectValue:r,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),d=e=>{const n=e.currentTarget,s=o.indexOf(n),t=i[s].value;t!==a&&(c(n),r(t))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=o.indexOf(e.currentTarget)+1;n=o[s]??o[0];break}case"ArrowLeft":{const s=o.indexOf(e.currentTarget)-1;n=o[s]??o[o.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":s},n),children:i.map((e=>{let{value:n,label:s,attributes:l}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:h,onClick:d,...l,className:(0,t.A)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":a===n}),children:s??n},n)}))})}function w(e){let{lazy:n,children:s,selectedValue:t}=e;const l=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function S(e){const n=x(e);return(0,v.jsxs)("div",{className:(0,t.A)("tabs-container",f.tabList),children:[(0,v.jsx)(b,{...n,...e}),(0,v.jsx)(w,{...n,...e})]})}function g(e){const n=(0,j.A)();return(0,v.jsx)(S,{...e,children:h(e.children)},String(n))}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>i});var a=s(96540);const t={},l=a.createContext(t);function r(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);