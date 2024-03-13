"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5576],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||s;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<s;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const s={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(87462),r=n(67294),s=n(86010),i=n(12466),o=n(70989),l=n(72389);const u={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function c(e){let{className:t,block:n,selectedValue:o,selectValue:l,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=c[n].value;a!==o&&(m(t),l(a))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:h,onClick:d},i,{className:(0,s.Z)("tabs__item",u.tabItem,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function p(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function m(e){const t=(0,o.Y)(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",u.tabList)},r.createElement(c,(0,a.Z)({},e,t)),r.createElement(p,(0,a.Z)({},e,t)))}function d(e){const t=(0,l.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},70989:(e,t,n)=>{n.d(t,{Y:()=>m});var a=n(67294),r=n(16550),s=n(91980),i=n(67392),o=n(50012);function l(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function u(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??l(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function c(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const i=(0,r.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(i.location.search);t.set(o,e),i.replace({...i.location,search:t.toString()})}),[o,i])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=u(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[m,d]=p({queryString:n,groupId:r}),[h,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,o.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),g=(()=>{const e=m??h;return c({value:e,tabValues:s})?e:null})();(0,a.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!c({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,s]),tabValues:s}}},27416:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),s=n(65488),i=n(85162);const o={description:"Enable your users to sign in with Ethereum.",sidebar_position:2},l="Sign in with Ethereum",u={unversionedId:"how-to/sign-data/siwe",id:"how-to/sign-data/siwe",title:"Sign in with Ethereum",description:"Enable your users to sign in with Ethereum.",source:"@site/wallet/how-to/sign-data/siwe.md",sourceDirName:"how-to/sign-data",slug:"/how-to/sign-data/siwe",permalink:"/cm/name-lookup-docs/wallet/how-to/sign-data/siwe",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/sign-data/siwe.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Enable your users to sign in with Ethereum.",sidebar_position:2},sidebar:"walletSidebar",previous:{title:"Connect and sign",permalink:"/cm/name-lookup-docs/wallet/how-to/sign-data/connect-and-sign"},next:{title:"Display in MetaMask",permalink:"/cm/name-lookup-docs/wallet/how-to/display"}},c={},p=[{value:"Domain binding",id:"domain-binding",level:2},{value:"Example",id:"example",level:2}],m={toc:p},d="wrapper";function h(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sign-in-with-ethereum"},"Sign in with Ethereum"),(0,r.kt)("p",null,"You can set up ",(0,r.kt)("a",{parentName:"p",href:"https://docs.login.xyz/"},"Sign-In with Ethereum (SIWE)")," to enable users to easily\nsign in to your dapp by authenticating with their MetaMask wallet."),(0,r.kt)("p",null,"MetaMask supports the SIWE standard message format as specified in ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-4361"},"ERC-4361"),".\nWhen your dapp prompts a user to sign a message that follows the SIWE format,\nMetaMask parses the message and gives the user a friendly interface prompting them to sign in to\nyour dapp:"),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:n(54722).Z,alt:"Sign-in with Ethereum request",style:{border:"1px solid gray"}})),(0,r.kt)("h2",{id:"domain-binding"},"Domain binding"),(0,r.kt)("p",null,"MetaMask supports domain binding with SIWE to help prevent phishing attacks.\nWhen a site asks a user to sign a SIWE message, but the domain in the message doesn't match the site\nthe user is on, MetaMask displays a warning in the sign-in interface.\nThe user must explicitly select to proceed, accepting the risk of a phishing attack."),(0,r.kt)("admonition",{title:"important",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"MetaMask displays a prominent warning for mismatched domains, but does ",(0,r.kt)("strong",{parentName:"p"},"not")," block users from\nbypassing the warning and accepting the sign-in request.\nThis is to not break existing dapps that may have use cases for mismatched domains.")),(0,r.kt)("div",{class:"row"},(0,r.kt)("div",{class:"column"},(0,r.kt)("img",{src:n(6865).Z,alt:"Sign-in bad domain",style:{border:"1px solid black"}})),(0,r.kt)("div",{class:"column"},(0,r.kt)("img",{src:n(8499).Z,alt:"Sign-in bad domain pop-up",style:{border:"1px solid black"}}))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"The following is an example of setting up SIWE with MetaMask using\n",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/personal_sign"},(0,r.kt)("inlineCode",{parentName:"a"},"personal_sign")),".\nSee the ",(0,r.kt)("a",{parentName:"p",href:"https://metamask.github.io/test-dapp/#siwe"},"live example")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/test-dapp"},"test dapp source code"),"."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const siweSign = async (siweMessage) => {\n    try {\n        const from = accounts[0];\n        const msg = `0x${Buffer.from(siweMessage, "utf8").toString("hex")}`;\n        const sign = await ethereum.request({\n            method: "personal_sign",\n            params: [msg, from],\n        });\n        siweResult.innerHTML = sign;\n    } catch (err) {\n        console.error(err);\n        siweResult.innerHTML = `Error: ${err.message}`;\n    }\n};\n\nsiwe.onclick = async () => {\n    const domain = window.location.host;\n    const from = accounts[0];\n    const siweMessage = `${domain} wants you to sign in with your Ethereum account:\\n${from}\\n\\nI accept the MetaMask Terms of Service: https://community.metamask.io/tos\\n\\nURI: https://${domain}\\nVersion: 1\\nChain ID: 1\\nNonce: 32891757\\nIssued At: 2021-09-30T16:25:24.000Z`;\n    siweSign(siweMessage);\n};\n'))),(0,r.kt)(i.Z,{value:"HTML",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<h4>Sign-In with Ethereum</h4>\n<button type="button" id="siwe">Sign-In with Ethereum</button>\n<p class="alert">Result:<span id="siweResult"></span></p>\n')))))}h.isMDXComponent=!0},8499:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/siwe-bad-domain-2-71ffe32c342b4c06e47927271989cacf.png"},6865:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/siwe-bad-domain-f344d17ce12a9914b4f1f2101bfe4ed1.png"},54722:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/siwe-4a7560a7233d0b709b2484ef550529d4.png"}}]);