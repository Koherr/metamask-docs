"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[1969],{41005:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var n=r(74848),a=r(28453),s=r(11470),o=r(19365);const i={description:"Get the busy threshold."},l="Get the busy threshold",c={id:"gas-api/api-reference/busythreshold",title:"Get the busy threshold",description:"Get the busy threshold.",source:"@site/services/gas-api/api-reference/busythreshold.md",sourceDirName:"gas-api/api-reference",slug:"/gas-api/api-reference/busythreshold",permalink:"/234-update-api/services/gas-api/api-reference/busythreshold",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/gas-api/api-reference/busythreshold.md",tags:[],version:"current",frontMatter:{description:"Get the busy threshold."},sidebar:"servicesSidebar",previous:{title:"Get the base fee percentile",permalink:"/234-update-api/services/gas-api/api-reference/basefeepercentile"},next:{title:"Get EIP-1559 gas prices",permalink:"/234-update-api/services/gas-api/api-reference/gasprices-type2"}},u={},h=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"get-the-busy-threshold",children:"Get the busy threshold"}),"\n",(0,n.jsx)(t.p,{children:"Returns the busy threshold for the specified blockchain network."}),"\n",(0,n.jsxs)(t.p,{children:["For example, a ",(0,n.jsx)(t.code,{children:"busyThreshold"})," value of ",(0,n.jsx)(t.code,{children:"30"})," Gwei indicates that 90% of the historical base fees on\nthe network have been below ",(0,n.jsx)(t.code,{children:"30"})," Gwei.\nIf the current base fee exceeds this value, it suggests that the network is busier than usual,\nlikely due to a high volume of transactions."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"GET"})," ",(0,n.jsx)(t.code,{children:"https://gas.api.infura.io/networks/${chainId}/busyThreshold"})]}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Path"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"chainId"}),": ",(0,n.jsx)(t.code,{children:"string"})," - ID of the chain to query."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"busyThreshold"}),": ",(0,n.jsx)(t.code,{children:"string"})," - Indicates that 90% of the historical base fees on the network\nhave been below this threshold, serving as a marker of network congestion when current base fees exceed it."]}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.h3,{id:"request",children:"Request"}),"\n",(0,n.jsxs)(t.p,{children:["Include your ",(0,n.jsx)(t.a,{href:"https://docs.infura.io/networks/ethereum/how-to/secure-a-project/project-id",children:"API key"}),"\nand optional ",(0,n.jsx)(t.a,{href:"https://docs.infura.io/networks/ethereum/how-to/secure-a-project/project-secret",children:"API key secret"}),"\nto authorize your account to use the APIs."]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["You can call the API with only an API key, and ",(0,n.jsx)(t.a,{href:"/234-update-api/services/gas-api/api-reference/#supported-api-request-formats",children:"include it as a path parameter"}),"\ninstead of using the cURL authentication option (",(0,n.jsx)(t.code,{children:"-u"}),")."]})}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(o.A,{value:"cURL",label:"cURL",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"curl -X 'GET' \\\n  -u <API_KEY>:<API_KEY_SECRET> \\\n  \"https://gas.api.infura.io/networks/1/busyThreshold\"\n"})})}),(0,n.jsx)(o.A,{value:"JavaScript",label:"JavaScript",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:'const axios = require("axios");\n\nconst apiKey = "<API-KEY>"; // Replace with your API key.\nconst apiKeySecret = "<API-KEY-SECRET>"; // Replace with your API key secret.\n\nconst Auth = Buffer.from(\n  apiKey + ":" + apiKeySecret,\n).toString("base64");\n\n// The chain ID of the supported network.\nconst chainId = 1;\n\n(async () => {\n  try {\n    const { data } = await axios.get(\n      `https://gas.api.infura.io/networks/${chainId}/busyThreshold`,\n      {\n        headers: {\n          Authorization: `Basic ${Auth}`,\n        },\n      }\n    );\n    console.log("Busy threshold:", data);\n  } catch (error) {\n    console.log("Server responded with:", error);\n  }\n})();\n'})})})]}),"\n",(0,n.jsx)(t.h3,{id:"response",children:"Response"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "busyThreshold": "37.378956101"\n}\n'})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>o});r(96540);var n=r(18215);const a={tabItem:"tabItem_Ymn6"};var s=r(74848);function o(e){let{children:t,hidden:r,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,o),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(96540),a=r(18215),s=r(23104),o=r(56347),i=r(205),l=r(57485),c=r(31682),u=r(89466);function h(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const a=(0,o.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,s=d(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[c,h]=f({queryString:r,groupId:a}),[b,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,u.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),v=(()=>{const e=c??b;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{v&&l(v)}),[v]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),m(e)}),[h,m,s]),tabValues:s}}var m=r(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(74848);function g(e){let{className:t,block:r,selectedValue:n,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const t=e.currentTarget,r=l.indexOf(t),a=i[r].value;a!==n&&(c(t),o(a))},h=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:h,onClick:u,...s,className:(0,a.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function j(e){const t=b(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,x.jsx)(g,{...t,...e}),(0,x.jsx)(y,{...t,...e})]})}function w(e){const t=(0,m.A)();return(0,x.jsx)(j,{...e,children:h(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>i});var n=r(96540);const a={},s=n.createContext(a);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);