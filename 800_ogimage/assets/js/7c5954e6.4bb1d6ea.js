"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[2419],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),l=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=r,m=p["".concat(u,".").concat(h)]||p[h]||d[h]||o;return n?a.createElement(m,c(c({ref:t},i),{},{components:n})):a.createElement(m,c({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=h;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:r,c[1]=s;for(var l=2;l<o;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(67294),r=n(86010);const o={tabItem:"tabItem_Ymn6"};function c(e){let{children:t,hidden:n,className:c}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,c),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(87462),r=n(67294),o=n(86010),c=n(12466),s=n(70989),u=n(72389);const l={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function i(e){let{className:t,block:n,selectedValue:s,selectValue:u,tabValues:i}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,c.o5)(),h=e=>{const t=e.currentTarget,n=p.indexOf(t),a=i[n].value;a!==s&&(d(t),u(a))},m=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},i.map((e=>{let{value:t,label:n,attributes:c}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:h},c,{className:(0,o.Z)("tabs__item",l.tabItem,c?.className,{"tabs__item--active":s===t})}),n??t)})))}function p(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function d(e){const t=(0,s.Y)(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",l.tabList)},r.createElement(i,(0,a.Z)({},e,t)),r.createElement(p,(0,a.Z)({},e,t)))}function h(e){const t=(0,u.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},70989:(e,t,n)=>{n.d(t,{Y:()=>d});var a=n(67294),r=n(16550),o=n(91980),c=n(67392),s=n(50012);function u(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function l(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function i(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const c=(0,r.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(c.location.search);t.set(s,e),c.replace({...c.location,search:t.toString()})}),[s,c])]}function d(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=l(e),[c,u]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!i({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[d,h]=p({queryString:n,groupId:r}),[m,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,s.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),b=(()=>{const e=d??m;return i({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{b&&u(b)}),[b]);return{selectedValue:c,selectValue:(0,a.useCallback)((e=>{if(!i({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),h(e),f(e)}),[h,f,o]),tabValues:o}}},62377:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=n(65488),c=n(85162);const s={description:"Access a user's accounts and handle changed accounts.",sidebar_position:4},u="Access a user's accounts",l={unversionedId:"how-to/connect/access-accounts",id:"how-to/connect/access-accounts",title:"Access a user's accounts",description:"Access a user's accounts and handle changed accounts.",source:"@site/wallet/how-to/connect/access-accounts.md",sourceDirName:"how-to/connect",slug:"/how-to/connect/access-accounts",permalink:"/800_ogimage/wallet/how-to/connect/access-accounts",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/connect/access-accounts.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"Access a user's accounts and handle changed accounts.",sidebar_position:4},sidebar:"walletSidebar",previous:{title:"Detect a user's network",permalink:"/800_ogimage/wallet/how-to/connect/detect-network"},next:{title:"Send transactions",permalink:"/800_ogimage/wallet/how-to/send-transactions"}},i={},p=[{value:"Create a connect button",id:"create-a-connect-button",level:2},{value:"Handle accounts",id:"handle-accounts",level:2},{value:"Disconnect a user&#39;s accounts",id:"disconnect-a-users-accounts",level:2}],d={toc:p},h="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"access-a-users-accounts"},"Access a user's accounts"),(0,r.kt)("p",null,"User accounts are used in a variety of contexts in Ethereum, including as identifiers and for\n",(0,r.kt)("a",{parentName:"p",href:"/800_ogimage/wallet/how-to/sign-data/"},"signing transactions"),".\nTo request a signature from a user or have a user approve a transaction, your dapp can\naccess the user's accounts using the\n",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/eth_requestaccounts"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_requestAccounts"))," RPC method."),(0,r.kt)("admonition",{title:"note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"eth_requestAccounts")," internally calls ",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/wallet_requestPermissions"},(0,r.kt)("inlineCode",{parentName:"a"},"wallet_requestPermissions")),"\nto ",(0,r.kt)("a",{parentName:"p",href:"/800_ogimage/wallet/how-to/manage-permissions"},"request permission")," to call the restricted\n",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/eth_accounts"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_accounts"))," method.")),(0,r.kt)("p",null,"When accessing a user's accounts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Only")," initiate a connection request in response to direct user action, such as\nselecting a ",(0,r.kt)("a",{parentName:"li",href:"#create-a-connect-button"},"connect button"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Always")," disable the connect button while the connection request is pending."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Never")," initiate a connection request on page load.")),(0,r.kt)("h2",{id:"create-a-connect-button"},"Create a connect button"),(0,r.kt)("p",null,"We recommend providing a button to allow users to connect MetaMask to your dapp.\nSelecting this button should call ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_requestAccounts")," to access the user's accounts."),(0,r.kt)("p",null,"For example, the following JavaScript code accesses the user's accounts when they select a connect\nbutton, and the following HTML code displays the button and the current account:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(c.Z,{label:"JavaScript",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},"// You should only attempt to request the user's account in response to user\n// interaction, such as selecting a button.\n// Otherwise, you popup-spam the user like it's 1999.\n// If you fail to retrieve the user's account, you should encourage the user\n// to initiate the attempt.\nconst ethereumButton = document.querySelector('.enableEthereumButton');\nconst showAccount = document.querySelector('.showAccount');\n\nethereumButton.addEventListener('click', () => {\n  getAccount();\n});\n\n// While awaiting the call to eth_requestAccounts, you should disable\n// any buttons the user can select to initiate the request.\n// MetaMask rejects any additional requests while the first is still\n// pending.\nasync function getAccount() {\n  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })\n    .catch((err) => {\n      if (err.code === 4001) {\n        // EIP-1193 userRejectedRequest error\n        // If this happens, the user rejected the connection request.\n        console.log('Please connect to MetaMask.');\n      } else {\n        console.error(err);\n      }\n    });\n  const account = accounts[0];\n  showAccount.innerHTML = account;\n}\n"))),(0,r.kt)(c.Z,{label:"HTML",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'\x3c!-- Display a connect button and the current account --\x3e\n<button class="enableEthereumButton">Enable Ethereum</button>\n<h2>Account: <span class="showAccount"></span></h2>\n')))),(0,r.kt)("h2",{id:"handle-accounts"},"Handle accounts"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/eth_accounts"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_accounts")),"\nRPC method to handle user accounts.\nListen to the ",(0,r.kt)("a",{parentName:"p",href:"/800_ogimage/wallet/reference/provider-api#accountschanged"},(0,r.kt)("inlineCode",{parentName:"a"},"accountsChanged"))," provider event to\nbe notified when the user changes accounts."),(0,r.kt)("p",null,"In the ",(0,r.kt)("a",{parentName:"p",href:"/800_ogimage/wallet/how-to/get-started-building/set-up-dev-environment#example"},"example project script"),", the following code handles user\naccounts and detects when the user changes accounts:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},"let currentAccount = null;\nwindow.ethereum.request({ method: 'eth_accounts' })\n  .then(handleAccountsChanged)\n  .catch((err) => {\n    // Some unexpected error.\n    // For backwards compatibility reasons, if no accounts are available,\n    // eth_accounts returns an empty array.\n    console.error(err);\n  });\n\n// Note that this event is emitted on page load.\n// If the array of accounts is non-empty, you're already\n// connected.\nwindow.ethereum.on('accountsChanged', handleAccountsChanged);\n\n// eth_accounts always returns an array.\nfunction handleAccountsChanged(accounts) {\n  if (accounts.length === 0) {\n    // MetaMask is locked or the user has not connected any accounts.\n    console.log('Please connect to MetaMask.');\n  } else if (accounts[0] !== currentAccount) {\n    // Reload your interface with accounts[0].\n    currentAccount = accounts[0];\n    // Update the account displayed (see the HTML for the connect button)\n    showAccount.innerHTML = currentAccount;\n  }\n}\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"eth_accounts")," now returns the full list of accounts for which the user has permitted access to.\nPreviously, ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_accounts")," returned at most one account in the ",(0,r.kt)("inlineCode",{parentName:"p"},"accounts"),' array.\nThe first account in the array will always be considered the user\'s "selected" account.')),(0,r.kt)("h2",{id:"disconnect-a-users-accounts"},"Disconnect a user's accounts"),(0,r.kt)("p",null,"Since ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_requestAccounts")," internally calls ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet_requestPermissions")," for permission to call\n",(0,r.kt)("inlineCode",{parentName:"p"},"eth_accounts"),", you can use ",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/wallet_revokePermissions"},(0,r.kt)("inlineCode",{parentName:"a"},"wallet_revokePermissions")),"\nto revoke this permission, revoking your dapp's access to the user's accounts."),(0,r.kt)("p",null,"This is useful as a method for users to log out (or disconnect) from your dapp.\nYou can then use ",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/wallet_getPermissions"},(0,r.kt)("inlineCode",{parentName:"a"},"wallet_getPermissions"))," to determine\nwhether the user is connected or disconnected to your dapp."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/800_ogimage/wallet/how-to/manage-permissions#revoke-permissions-example"},"how to revoke permissions")," for an example."))}m.isMDXComponent=!0}}]);