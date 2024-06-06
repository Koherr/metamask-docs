"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5044],{34275:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=t(74848),s=t(28453),r=t(11470),l=t(19365);const o={description:"Connect your dapp to existing, third-party Snaps.",sidebar_position:10},i="Connect to a Snap",c={id:"how-to/connect-to-a-snap",title:"Connect to a Snap",description:"Connect your dapp to existing, third-party Snaps.",source:"@site/snaps/how-to/connect-to-a-snap.md",sourceDirName:"how-to",slug:"/how-to/connect-to-a-snap",permalink:"/eslint-update/snaps/how-to/connect-to-a-snap",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/how-to/connect-to-a-snap.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{description:"Connect your dapp to existing, third-party Snaps.",sidebar_position:10},sidebar:"snapsSidebar",previous:{title:"Get allowlisted",permalink:"/eslint-update/snaps/how-to/get-allowlisted"},next:{title:"Reference",permalink:"/eslint-update/snaps/reference"}},d={},u=[{value:"Detect wallet",id:"detect-wallet",level:2},{value:"Detect MetaMask Flask",id:"detect-metamask-flask",level:3},{value:"Connect to a Snap",id:"connect-to-a-snap-1",level:2},{value:"User rejects the installation request",id:"user-rejects-the-installation-request",level:3},{value:"User approves the installation request",id:"user-approves-the-installation-request",level:3},{value:"Snap is already installed",id:"snap-is-already-installed",level:3},{value:"Determine whether a Snap is installed",id:"determine-whether-a-snap-is-installed",level:2},{value:"Reconnect to a Snap",id:"reconnect-to-a-snap",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"connect-to-a-snap",children:"Connect to a Snap"}),"\n",(0,a.jsxs)(n.p,{children:["Dapps can connect to Snaps designed to communicate with dapps.\nDapps can use these Snaps to take advantage of new features enabled by Snaps.\nThis is possible because Snaps can expose a ",(0,a.jsx)(n.a,{href:"/eslint-update/snaps/learn/about-snaps/apis#custom-json-rpc-apis",children:"custom JSON-RPC API"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"detect-wallet",children:"Detect wallet"}),"\n",(0,a.jsxs)(n.p,{children:["To connect to a Snap, dapps must first detect MetaMask in the user's browser.\nSee the Wallet documentation on ",(0,a.jsx)(n.a,{href:"/wallet/how-to/connect",children:"how to connect to MetaMask"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"detect-metamask-flask",children:"Detect MetaMask Flask"}),"\n",(0,a.jsxs)(n.p,{children:["When developing your Snap, you might need to require\n",(0,a.jsx)(n.a,{href:"/eslint-update/snaps/get-started/install-flask",children:"MetaMask Flask"})," in your dapp.\nWe recommend detecting MetaMask Flask using the\n",(0,a.jsx)(n.a,{href:"/wallet/concepts/wallet-interoperability",children:"multi-wallet detection mechanism"})," specified by EIP-6963.\nAlternatively, you can use the ",(0,a.jsx)(n.code,{children:"window.ethereum"})," injected provider, but this might fail if the user\nis running multiple wallet extensions simultaneously."]}),"\n",(0,a.jsxs)(n.p,{children:["To detect MetaMask Flask, you can add the following to ",(0,a.jsx)(n.code,{children:"window.onload"}),":"]}),"\n",(0,a.jsxs)(r.A,{children:[(0,a.jsx)(l.A,{value:"EIP-6963 example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:'window.addEventListener("eip6963:announceProvider", (event) => {\n  /* event.detail contains the discovered provider interface. */\n  const providerDetail = event.detail;\n\n  /* providerDetail.info.rdns is the best way to distinguish a wallet extension. */\n  if (providerDetail.info.rdns === "io.metamask.flask") {\n    console.log("MetaMask Flask successfully detected!");\n    // Now you can use Snaps!\n  } else { \n    console.error("Please install MetaMask Flask!");\n  }\n});\n\nwindow.dispatchEvent(new Event("eip6963:requestProvider"));\n'})})}),(0,a.jsx)(l.A,{value:"Injected provider example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:'const provider = window.ethereum; \n\nconst isFlask = ( \n  await provider?.request({ method: "web3_clientVersion" })\n)?.includes("flask"); \n\nif (provider && isFlask) {\n  console.log("MetaMask Flask successfully detected!");\n  // Now you can use Snaps!\n} else {\n  console.error("Please install MetaMask Flask!", error);\n}\n'})})})]}),"\n",(0,a.jsx)(n.h2,{id:"connect-to-a-snap-1",children:"Connect to a Snap"}),"\n",(0,a.jsxs)(n.p,{children:["Connect to a Snap by calling the ",(0,a.jsx)(n.a,{href:"/eslint-update/snaps/reference/wallet-api-for-snaps#wallet_requestsnaps",children:(0,a.jsx)(n.code,{children:"wallet_requestSnaps"})}),"\nmethod from your dapp.\nIf a user doesn't have the Snap installed in their MetaMask wallet, MetaMask prompts the user to\ninstall the Snap."]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["A Snap can grant a dapp an ",(0,a.jsx)(n.a,{href:"/eslint-update/snaps/how-to/allow-automatic-connections",children:"automatic connection"}),",\nskipping the need for users to confirm a connection."]})}),"\n",(0,a.jsxs)(n.p,{children:["The following are different possible outcomes from calling ",(0,a.jsx)(n.code,{children:"wallet_requestSnaps"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"user-rejects-the-installation-request",children:"User rejects the installation request"}),"\n",(0,a.jsxs)(n.p,{children:["If the user rejects the installation request, the call to ",(0,a.jsx)(n.code,{children:"wallet_requestSnaps"})," throws the following error:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{ "code": 4001, "message": "User rejected the request." }\n'})}),"\n",(0,a.jsx)(n.h3,{id:"user-approves-the-installation-request",children:"User approves the installation request"}),"\n",(0,a.jsxs)(n.p,{children:["If the user approves the installation request, the call to ",(0,a.jsx)(n.code,{children:"wallet_requestSnaps"})," returns an object\nwith the following shape:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "SNAP_ID": {\n    "blocked": false,\n    "enabled": true,\n    "id": "SNAP_ID",\n    "initialPermissions": {\n      // The permissions in the Snap\'s manifest file.\n    },\n    "version": "SNAP_VERSION"\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"snap-is-already-installed",children:"Snap is already installed"}),"\n",(0,a.jsxs)(n.p,{children:["If the Snap is already installed, the call to ",(0,a.jsx)(n.code,{children:"wallet_requestSnaps"})," returns the same object as for a\nnew installation of the Snap, but the user won't see a confirmation pop-up asking them to install the Snap."]}),"\n",(0,a.jsx)(n.h2,{id:"determine-whether-a-snap-is-installed",children:"Determine whether a Snap is installed"}),"\n",(0,a.jsxs)(n.p,{children:["Determine whether a Snap is installed by calling the\n",(0,a.jsx)(n.a,{href:"/eslint-update/snaps/reference/wallet-api-for-snaps#wallet_getsnaps",children:(0,a.jsx)(n.code,{children:"wallet_getSnaps"})})," method from your dapp.\nThis method returns a list of only those Snaps that are connected to your current dapp."]}),"\n",(0,a.jsx)(n.p,{children:"The response is in the form of an object keyed by the ID of the Snap.\nEach value is a nested object with additional information, such as the version of the Snap that is installed."}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"wallet_getSnaps"})," only returns the Snaps that are connected to your dapp.\nThe user may have other Snaps installed that your dapp is not aware of."]})}),"\n",(0,a.jsxs)(n.p,{children:["The following example verifies whether a Snap with ID ",(0,a.jsx)(n.code,{children:"npm:super-snap"})," is installed:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:'title="index.ts"',children:'const snaps = await ethereum.request({\n    method: "wallet_getSnaps"\n});\n\nconst isMySnapInstalled = Object.keys(snaps).includes("npm:super-snap");\n'})}),"\n",(0,a.jsxs)(n.p,{children:["If you need to work with a specific version of a Snap, you can instead iterate over\n",(0,a.jsx)(n.code,{children:"Object.values(snaps)"}),", and use the ",(0,a.jsx)(n.code,{children:"id"})," and ",(0,a.jsx)(n.code,{children:"version"})," properties inside each object to determine\nwhether the Snap is installed with the required version."]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"A user cannot install multiple versions of a Snap into a single MetaMask instance.\nYou should avoid requiring a specific version of a Snap unless you absolutely need to.\nIn most cases, you should request the latest version of the Snap and architect your dapp to be able\nto work with that version."})}),"\n",(0,a.jsx)(n.h2,{id:"reconnect-to-a-snap",children:"Reconnect to a Snap"}),"\n",(0,a.jsxs)(n.p,{children:["At any time, a user can open their MetaMask Snaps settings menu and see all the dapps connected to a Snap.\nFrom that menu they can revoke a dapp connection.\nIf your dapp loses the connection to a Snap, you can reconnect by calling\n",(0,a.jsx)(n.a,{href:"/eslint-update/snaps/reference/wallet-api-for-snaps#wallet_requestsnaps",children:(0,a.jsx)(n.code,{children:"wallet_requestSnaps"})}),".\nSince the Snap is already installed, this returns a success response without MetaMask showing a pop-up.\nHowever, if the user has disabled the Snap, the response has ",(0,a.jsx)(n.code,{children:"enabled"})," set to ",(0,a.jsx)(n.code,{children:"false"})," for your ",(0,a.jsx)(n.code,{children:"SNAP_ID"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "SNAP_ID": {\n    "blocked": false,\n    "enabled": false,\n    "id": "SNAP_ID",\n    "initialPermissions": {\n      // The permissions in the Snap\'s manifest file.\n    },\n    "version": "SNAP_VERSION"\n  }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var a=t(18215);const s={tabItem:"tabItem_Ymn6"};var r=t(74848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(s.tabItem,l),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>S});var a=t(96540),s=t(18215),r=t(23104),l=t(56347),o=t(205),i=t(57485),c=t(31682),d=t(70679);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:s}}=e;return{value:n,label:t,attributes:a,default:s}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,l.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,r=p(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[c,u]=m({queryString:t,groupId:s}),[f,v]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,d.Dv)(t);return[s,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),w=(()=>{const e=c??f;return h({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{w&&i(w)}),[w]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),v(e)}),[u,v,r]),tabValues:r}}var v=t(92303);const w={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(74848);function x(e){let{className:n,block:t,selectedValue:a,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const n=e.currentTarget,t=i.indexOf(n),s=o[t].value;s!==a&&(c(n),l(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>i.push(e),onKeyDown:u,onClick:d,...r,className:(0,s.A)("tabs__item",w.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:s}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function g(e){const n=f(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",w.tabList),children:[(0,j.jsx)(x,{...n,...e}),(0,j.jsx)(b,{...n,...e})]})}function S(e){const n=(0,v.A)();return(0,j.jsx)(g,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var a=t(96540);const s={},r=a.createContext(s);function l(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);