"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[2844],{56660:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=a(74848),s=a(28453),r=a(11470),o=a(19365);const i={sidebar_label:"React UI",sidebar_position:1,description:"Set up the SDK in your React dapp using the React UI package.",tags:["JavaScript SDK"]},c="Use MetaMask SDK with React UI",l={id:"how-to/use-sdk/javascript/react/react-ui",title:"Use MetaMask SDK with React UI",description:"Set up the SDK in your React dapp using the React UI package.",source:"@site/wallet/how-to/use-sdk/javascript/react/react-ui.md",sourceDirName:"how-to/use-sdk/javascript/react",slug:"/how-to/use-sdk/javascript/react/react-ui",permalink:"/update-snaps-resources/wallet/how-to/use-sdk/javascript/react/react-ui",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/javascript/react/react-ui.md",tags:[{label:"JavaScript SDK",permalink:"/update-snaps-resources/wallet/tags/java-script-sdk"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"React UI",sidebar_position:1,description:"Set up the SDK in your React dapp using the React UI package.",tags:["JavaScript SDK"]},sidebar:"walletSidebar",previous:{title:"React",permalink:"/update-snaps-resources/wallet/how-to/use-sdk/javascript/react/"},next:{title:"Pure JavaScript",permalink:"/update-snaps-resources/wallet/how-to/use-sdk/javascript/pure-js"}},d={},u=[{value:"Steps",id:"steps",level:2},{value:"1. Install the SDK",id:"1-install-the-sdk",level:3},{value:"2. Import the SDK",id:"2-import-the-sdk",level:3},{value:"3. Wrap your project with <code>MetaMaskUIProvider</code>",id:"3-wrap-your-project-with-metamaskuiprovider",level:3},{value:"4. Use the SDK",id:"4-use-the-sdk",level:3},{value:"5. Use the <code>MetaMaskButton</code> component",id:"5-use-the-metamaskbutton-component",level:3},{value:"Example",id:"example",level:2}];function p(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components},{Details:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"use-metamask-sdk-with-react-ui",children:"Use MetaMask SDK with React UI"}),"\n",(0,n.jsxs)(t.p,{children:["Import ",(0,n.jsx)(t.a,{href:"/update-snaps-resources/wallet/concepts/sdk/",children:"MetaMask SDK"})," into your React dapp to enable your\nusers to easily connect to the MetaMask browser extension and MetaMask Mobile.\nThe ",(0,n.jsx)(t.code,{children:"@metamask/sdk-react-ui"})," package not only exports hooks from ",(0,n.jsx)(t.a,{href:"/update-snaps-resources/wallet/how-to/use-sdk/javascript/react/",children:(0,n.jsx)(t.code,{children:"@metamask/sdk-react"})}),",\nbut also provides wrappers around ",(0,n.jsx)(t.a,{href:"https://wagmi.sh/",children:"wagmi"})," hooks and a basic UI button component\nfor connecting to MetaMask."]}),"\n",(0,n.jsxs)(t.p,{children:["By combining the functions of ",(0,n.jsx)(t.code,{children:"@metamask/sdk-react"})," and ",(0,n.jsx)(t.code,{children:"@metamask/sdk-react-ui"}),", you can use both\nthe core functionality and the pre-styled UI components to streamline the integration of MetaMask\ninto your React dapp."]}),"\n",(0,n.jsxs)(t.p,{children:["The SDK for React has the ",(0,n.jsx)(t.a,{href:"/update-snaps-resources/wallet/how-to/use-sdk/javascript/#prerequisites",children:"same prerequisites"})," as for standard JavaScript."]}),"\n",(0,n.jsx)(t.h2,{id:"steps",children:"Steps"}),"\n",(0,n.jsx)(t.h3,{id:"1-install-the-sdk",children:"1. Install the SDK"}),"\n",(0,n.jsx)(t.p,{children:"In your project directory, install the SDK using Yarn or npm:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"yarn add @metamask/sdk-react-ui\n"})}),"\n",(0,n.jsx)(t.p,{children:"or"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npm i @metamask/sdk-react-ui\n"})}),"\n",(0,n.jsx)(t.h3,{id:"2-import-the-sdk",children:"2. Import the SDK"}),"\n",(0,n.jsx)(t.p,{children:"In your project script, add the following to import the SDK:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",metastring:'title="index.js"',children:'import { MetaMaskUIProvider } from "@metamask/sdk-react-ui";\n'})}),"\n",(0,n.jsxs)(t.h3,{id:"3-wrap-your-project-with-metamaskuiprovider",children:["3. Wrap your project with ",(0,n.jsx)(t.code,{children:"MetaMaskUIProvider"})]}),"\n",(0,n.jsxs)(t.p,{children:["Wrap your root component in a ",(0,n.jsx)(t.code,{children:"MetaMaskUIProvider"}),".\nFor example:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:'title="index.js"',children:'import React from "react";\nimport ReactDOM from "react-dom/client";\nimport App from "./App";\nimport { MetaMaskUIProvider } from "@metamask/sdk-react-ui";\n\nconst root = ReactDOM.createRoot(\n  document.getElementById("root") as HTMLElement\n);\n\nroot.render(\n  <React.StrictMode>\n    <MetaMaskUIProvider\n      sdkOptions={{\n        dappMetadata: {\n          name: "Example React UI Dapp",\n          url: window.location.href,\n        },\n        infuraAPIKey: process.env.INFURA_API_KEY,\n        // Other options.\n      }}\n    >\n      <App />\n    </MetaMaskUIProvider>\n  </React.StrictMode>\n);\n'})}),"\n",(0,n.jsxs)(t.p,{children:["For the full list of options you can set for ",(0,n.jsx)(t.code,{children:"sdkOptions"}),", see the\n",(0,n.jsx)(t.a,{href:"/update-snaps-resources/wallet/reference/sdk-js-options",children:"JavaScript SDK options reference"}),".\nImportant options include:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/update-snaps-resources/wallet/reference/sdk-js-options#dappmetadata",children:(0,n.jsx)(t.code,{children:"dappMetadata"})})," - Use this to display information\nabout your dapp in the MetaMask connection modal."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/update-snaps-resources/wallet/reference/sdk-js-options#infuraapikey",children:(0,n.jsx)(t.code,{children:"infuraAPIKey"})})," - Use this to\n",(0,n.jsx)(t.a,{href:"/update-snaps-resources/wallet/how-to/use-sdk/javascript/make-read-only-requests",children:"make read-only RPC requests"})," from your dapp."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/update-snaps-resources/wallet/reference/sdk-js-options#modals",children:(0,n.jsx)(t.code,{children:"modals"})})," - Use this to ",(0,n.jsx)(t.a,{href:"../display-custom-modals.md",children:"customize the logic and UI of\nthe displayed modals"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"4-use-the-sdk",children:"4. Use the SDK"}),"\n",(0,n.jsxs)(t.p,{children:["Use the SDK by using the ",(0,n.jsx)(t.code,{children:"useSDK"})," hook in your React components.\nSee the ",(0,n.jsxs)(t.a,{href:"/update-snaps-resources/wallet/how-to/use-sdk/javascript/react/#4-use-the-sdk",children:["instructions for ",(0,n.jsx)(t.code,{children:"@metamask/sdk-react"})]}),"."]}),"\n",(0,n.jsxs)(t.h3,{id:"5-use-the-metamaskbutton-component",children:["5. Use the ",(0,n.jsx)(t.code,{children:"MetaMaskButton"})," component"]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"@metamask/sdk-react-ui"})," package provides a pre-styled button, ",(0,n.jsx)(t.code,{children:"MetaMaskButton"}),", to initiate a\nconnection to MetaMask.\nYou can use it as follows:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:'title="App.js"',children:'import { MetaMaskButton } from "@metamask/sdk-react-ui";\nimport React, { useState } from "react";\n\nexport const App = () => {\n  return (\n    <div className="App">\n      <MetaMaskButton theme={"light"} color="white"></MetaMaskButton>\n    </div>\n  );\n};\n'})}),"\n",(0,n.jsxs)(a,{children:[(0,n.jsx)("summary",{children:"MetaMaskButton properties"}),(0,n.jsx)("p",{children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"theme"}),": Set to ",(0,n.jsx)(t.code,{children:"light"})," or ",(0,n.jsx)(t.code,{children:"dark"})," to adapt to your dapp's theme."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"color"}),": The color of the button. Accepts any valid CSS color string."]}),"\n"]})})]}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.p,{children:"You can copy the full React UI example to get started:"}),"\n",(0,n.jsxs)(r.A,{children:[(0,n.jsx)(o.A,{value:"Root component",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",metastring:'title="index.js"',children:'import React from "react";\nimport ReactDOM from "react-dom/client";\nimport App from "./App";\nimport { MetaMaskUIProvider } from "@metamask/sdk-react-ui";\n\nconst root = ReactDOM.createRoot(\n  document.getElementById("root") as HTMLElement\n);\n\nroot.render(\n  <React.StrictMode>\n    <MetaMaskUIProvider\n      sdkOptions={{\n        dappMetadata: {\n          name: "Example React UI Dapp",\n          url: window.location.href,\n        },\n        infuraAPIKey: process.env.INFURA_API_KEY,\n        // Other options\n      }}\n    >\n      <App />\n    </MetaMaskUIProvider>\n  </React.StrictMode>\n);\n'})})}),(0,n.jsx)(o.A,{value:"React component",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",metastring:'title="App.js"',children:'import {\n  MetaMaskButton,\n  useAccount,\n  useSDK,\n  useSignMessage,\n} from "@metamask/sdk-react-ui";\nimport "./App.css";\n\nfunction AppReady() {\n  const {\n    data: signData,\n    isError: isSignError,\n    isLoading: isSignLoading,\n    isSuccess: isSignSuccess,\n    signMessage,\n  } = useSignMessage({\n    message: "gm wagmi frens",\n  });\n\n  const { isConnected } = useAccount();\n\n  return (\n    <div className="App">\n      <header className="App-header">\n        <MetaMaskButton theme={"light"} color="white"></MetaMaskButton>\n        {isConnected && (\n          <>\n            <div style={{ marginTop: 20 }}>\n              <button\n                disabled={isSignLoading}\n                onClick={() => signMessage()}\n              >\n                Sign message\n              </button>\n              {isSignSuccess && <div>Signature: {signData}</div>}\n              {isSignError && <div>Error signing message</div>}\n            </div>\n          </>\n        )}\n      </header>\n    </div>\n  );\n}\n\nfunction App() {\n  const { ready } = useSDK();\n\n  if (!ready) {\n    return <div>Loading...</div>;\n  }\n\n  return <AppReady />;\n}\n\nexport default App;\n'})})})]}),"\n",(0,n.jsxs)(t.p,{children:["See the ",(0,n.jsx)(t.a,{href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples/react-metamask-button",children:"example React UI dapp"}),"\nin the JavaScript SDK GitHub repository for more information."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},19365:(e,t,a)=>{a.d(t,{A:()=>o});a(96540);var n=a(18215);const s={tabItem:"tabItem_Ymn6"};var r=a(74848);function o(e){let{children:t,hidden:a,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,o),hidden:a,children:t})}},11470:(e,t,a)=>{a.d(t,{A:()=>M});var n=a(96540),s=a(18215),r=a(23104),o=a(56347),i=a(205),c=a(57485),l=a(31682),d=a(89466);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:s}}=e;return{value:t,label:a,attributes:n,default:s}}))}(a);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const s=(0,o.W6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,c.aZ)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(s.location.search);t.set(r,e),s.replace({...s.location,search:t.toString()})}),[r,s])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:s}=e,r=p(e),[o,c]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[l,u]=m({queryString:a,groupId:s}),[f,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,r]=(0,d.Dv)(a);return[s,(0,n.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:s}),j=(()=>{const e=l??f;return h({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{j&&c(j)}),[j]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),k(e)}),[u,k,r]),tabValues:r}}var k=a(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=a(74848);function v(e){let{className:t,block:a,selectedValue:n,selectValue:o,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,r.a_)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),s=i[a].value;s!==n&&(l(t),o(s))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":a},t),children:i.map((e=>{let{value:t,label:a,attributes:r}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:u,onClick:d,...r,className:(0,s.A)("tabs__item",j.tabItem,r?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function g(e){let{lazy:t,children:a,selectedValue:s}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function b(e){const t=f(e);return(0,x.jsxs)("div",{className:(0,s.A)("tabs-container",j.tabList),children:[(0,x.jsx)(v,{...t,...e}),(0,x.jsx)(g,{...t,...e})]})}function M(e){const t=(0,k.A)();return(0,x.jsx)(b,{...e,children:u(e.children)},String(t))}},28453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>i});var n=a(96540);const s={},r=n.createContext(s);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);