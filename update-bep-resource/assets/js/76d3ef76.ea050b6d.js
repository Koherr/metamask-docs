"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6452],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(g,s(s({ref:t},p),{},{components:n})):a.createElement(g,s({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:r,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99552:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),i=n(65488),s=n(85162);const o={description:"Provide insights to your users in MetaMask's signature confirmation flow.",sidebar_position:7,sidebar_custom_props:{flask_only:!0}},l="Signature insights",u={unversionedId:"features/signature-insights",id:"features/signature-insights",title:"Signature insights",description:"Provide insights to your users in MetaMask's signature confirmation flow.",source:"@site/snaps/features/signature-insights.md",sourceDirName:"features",slug:"/features/signature-insights",permalink:"/update-bep-resource/snaps/features/signature-insights",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/signature-insights.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{description:"Provide insights to your users in MetaMask's signature confirmation flow.",sidebar_position:7,sidebar_custom_props:{flask_only:!0}},sidebar:"snapsSidebar",previous:{title:"Custom name resolution",permalink:"/update-bep-resource/snaps/features/custom-name-resolution"},next:{title:"How to",permalink:"/update-bep-resource/snaps/how-to"}},p={},c=[{value:"Steps",id:"steps",level:2},{value:"1. Request permission to display signature insights",id:"1-request-permission-to-display-signature-insights",level:3},{value:"2. Implement <code>onSignature</code> and export it from <code>index.ts</code>",id:"2-implement-onsignature-and-export-it-from-indexts",level:3},{value:"Example",id:"example",level:2}],d={toc:c},m="wrapper";function g(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"signature-insights"},"Signature insights"),(0,r.kt)("admonition",{type:"flaskOnly"}),(0,r.kt)("p",null,"You can provide signature insights before a user signs a message.\nFor example, you can warn the user about potentially dangerous signature requests."),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("h3",{id:"1-request-permission-to-display-signature-insights"},"1. Request permission to display signature insights"),(0,r.kt)("p",null,"Request the ",(0,r.kt)("a",{parentName:"p",href:"/update-bep-resource/snaps/reference/permissions#endowmentsignature-insight"},(0,r.kt)("inlineCode",{parentName:"a"},"endowment:signature-insight")),"\npermission by adding the following to your Snap's manifest file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'{\n    "initialPermissions": {\n        "endowment:signature-insight": {}\n    }\n}\n')),(0,r.kt)("p",null,"If you need to receive the origin of the signature request, add ",(0,r.kt)("inlineCode",{parentName:"p"},"allowSignatureOrigin")," to the\npermission object, and set it to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'{\n    "initialPermissions": {\n        "endowment:signature-insight": {\n            "allowSignatureOrigin": true\n        }\n    }\n}\n')),(0,r.kt)("p",null,"When requesting this permission, the following displays in the MetaMask UI when a user installs the Snap:"),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:n(26310).Z,alt:"Signature insights permission",style:{border:"1px solid #DCDCDC"}})),(0,r.kt)("h3",{id:"2-implement-onsignature-and-export-it-from-indexts"},"2. Implement ",(0,r.kt)("inlineCode",{parentName:"h3"},"onSignature")," and export it from ",(0,r.kt)("inlineCode",{parentName:"h3"},"index.ts")),(0,r.kt)("p",null,"Expose an ",(0,r.kt)("a",{parentName:"p",href:"/update-bep-resource/snaps/reference/entry-points#onsignature"},(0,r.kt)("inlineCode",{parentName:"a"},"onSignature"))," entry point, which receives a\n",(0,r.kt)("inlineCode",{parentName:"p"},"signature")," object.\nThe shape of this object depends on the chain and the signing method used.\nThis is why it's typed as ",(0,r.kt)("inlineCode",{parentName:"p"},"Record<string, unknown>"),"."),(0,r.kt)("p",null,"For Ethereum and Ethereum-compatible chains, the ",(0,r.kt)("inlineCode",{parentName:"p"},"signature")," object can have one of the following\nshapes, depending on the signing method used:"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"eth_sign",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'interface EthSignature {\n    from: string;\n    data: string;\n    signatureMethod: "eth_sign";\n}\n'))),(0,r.kt)(s.Z,{value:"personal_sign",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'interface PersonalSignature {\n    from: string;\n    data: string;\n    signatureMethod: "personal_sign";\n}\n'))),(0,r.kt)(s.Z,{value:"eth_signTypedData",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'interface SignTypedDataSignature {\n    from: string;\n    data: Record<string, any>[];\n    signatureMethod: "eth_signTypedData";\n}\n'))),(0,r.kt)(s.Z,{value:"eth_signTypedData_v3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'interface SignTypedDataV3Signature {\n    from: string;\n    data: Record<string, any>;\n    signatureMethod: "eth_signTypedData_v3";\n}\n'))),(0,r.kt)(s.Z,{value:"eth_signTypedData_v4",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'interface SignTypedDataV4Signature {\n    from: string;\n    data: Record<string, any>;\n    signatureMethod: "eth_signTypedData_v4";\n}\n')))),(0,r.kt)("p",null,"Your Snap should use ",(0,r.kt)("inlineCode",{parentName:"p"},"signatureMethod")," as the source of truth to identify the signature scheme it is\nproviding insights for."),(0,r.kt)("p",null,"Once you've identified the signature object, your Snap can run any logic, including calling APIs.\nThen, your Snap must either return ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," if it has no insights to provide, or an object with a\n",(0,r.kt)("inlineCode",{parentName:"p"},"content")," property and an optional ",(0,r.kt)("inlineCode",{parentName:"p"},"severity")," property as specified in the\n",(0,r.kt)("a",{parentName:"p",href:"/update-bep-resource/snaps/reference/entry-points#onsignature"},(0,r.kt)("inlineCode",{parentName:"a"},"onSignature"))," entry point."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Due to current MetaMask UI limitations, signature insights will only be displayed if your Snap's\nlogic deems the signature to be one that a user shouldn't sign, that is, if you return a severity\nlevel of ",(0,r.kt)("inlineCode",{parentName:"p"},"SeverityLevel.Critical"),".")),(0,r.kt)("p",null,"The following is an example implementation of ",(0,r.kt)("inlineCode",{parentName:"p"},"onSignature"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},'import type { OnSignatureHandler, SeverityLevel } from "@metamask/snaps-sdk";\nimport { panel, heading, text } from "@metamask/snaps-sdk";\n\nexport const onSignature: OnSignatureHandler = async ({\n    signature,\n    signatureOrigin,\n}) => {\n    const insights = /* Get insights based on custom logic */;\n    return {\n        content: panel([\n            heading("My Signature Insights"),\n            text("Here are the insights:"),\n            ...(insights.map((insight) => text(insight.value))),\n        ]),\n        severity: SeverityLevel.Critical,\n    };\n};\n')),(0,r.kt)("p",null,"When your Snap returns a signature insight with a ",(0,r.kt)("inlineCode",{parentName:"p"},"severity")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"SeverityLevel.Critical"),", the custom\nUI displays in a modal after the user selects the ",(0,r.kt)("strong",{parentName:"p"},"Sign")," button.\nFor example:"),(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Signature insights warning",src:n(52168).Z,width:"354",height:"582"}))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps/tree/main/packages/examples/packages/signature-insights"},(0,r.kt)("inlineCode",{parentName:"a"},"@metamask/signature-insights-example-snap")),"\npackage for a full example of implementing signature insights."))}g.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(86010);const i={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,s),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),i=n(86010),s=n(12466),o=n(70989),l=n(72389);const u={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function p(e){let{className:t,block:n,selectedValue:o,selectValue:l,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),a=p[n].value;a!==o&&(d(t),l(a))},g=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:g,onClick:m},s,{className:(0,i.Z)("tabs__item",u.tabItem,s?.className,{"tabs__item--active":o===t})}),n??t)})))}function c(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function d(e){const t=(0,o.Y)(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",u.tabList)},r.createElement(p,(0,a.Z)({},e,t)),r.createElement(c,(0,a.Z)({},e,t)))}function m(e){const t=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},70989:(e,t,n)=>{n.d(t,{Y:()=>d});var a=n(67294),r=n(16550),i=n(91980),s=n(67392),o=n(50012);function l(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function u(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??l(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function c(e){let{queryString:t=!1,groupId:n}=e;const s=(0,r.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(s.location.search);t.set(o,e),s.replace({...s.location,search:t.toString()})}),[o,s])]}function d(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=u(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[d,m]=c({queryString:n,groupId:r}),[g,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,o.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),f=(()=>{const e=d??g;return p({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),m(e),h(e)}),[m,h,i]),tabValues:i}}},26310:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/signature-insights-permission-ef74a844b73ec794137b089f86fcdb90.png"},52168:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/signature-insights-warning-7b5808128e4d993228ee01b8e75a9f84.png"}}]);