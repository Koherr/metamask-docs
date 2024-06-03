"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6694],{78328:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=s(74848),a=s(28453);const i={description:"Use MetaMask SDK to connect and sign in a single interaction.",sidebar_position:7,tags:["JavaScript SDK","iOS SDK"]},o="Connect and sign",c={id:"how-to/use-sdk/javascript/connect-and-sign",title:"Connect and sign",description:"Use MetaMask SDK to connect and sign in a single interaction.",source:"@site/wallet/how-to/use-sdk/javascript/connect-and-sign.md",sourceDirName:"how-to/use-sdk/javascript",slug:"/how-to/use-sdk/javascript/connect-and-sign",permalink:"/update-snaps-resources/wallet/how-to/use-sdk/javascript/connect-and-sign",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/javascript/connect-and-sign.md",tags:[{label:"JavaScript SDK",permalink:"/update-snaps-resources/wallet/tags/java-script-sdk"},{label:"iOS SDK",permalink:"/update-snaps-resources/wallet/tags/i-os-sdk"}],version:"current",sidebarPosition:7,frontMatter:{description:"Use MetaMask SDK to connect and sign in a single interaction.",sidebar_position:7,tags:["JavaScript SDK","iOS SDK"]},sidebar:"walletSidebar",previous:{title:"Electron",permalink:"/update-snaps-resources/wallet/how-to/use-sdk/javascript/electron"},next:{title:"Make read-only requests",permalink:"/update-snaps-resources/wallet/how-to/use-sdk/javascript/make-read-only-requests"}},r={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Use the <code>connectAndSign</code> method",id:"use-the-connectandsign-method",level:2},{value:"Examples",id:"examples",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"connect-and-sign",children:"Connect and sign"}),"\n",(0,t.jsxs)(n.p,{children:["You can connect to MetaMask and sign data in a single interaction from your JavaScript, iOS,\nAndroid, or Unity dapp using ",(0,t.jsx)(n.a,{href:"/update-snaps-resources/wallet/concepts/sdk/",children:"MetaMask SDK"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The SDK's ",(0,t.jsx)(n.code,{children:"connectAndSign"})," method provides a streamlined approach for dapps to interact with MetaMask.\nThis method combines the ",(0,t.jsx)(n.a,{href:"/wallet/reference/eth_requestAccounts",children:(0,t.jsx)(n.code,{children:"eth_requestAccounts"})})," and ",(0,t.jsx)(n.a,{href:"/wallet/reference/personal_sign",children:(0,t.jsx)(n.code,{children:"personal_sign"})})," RPC methods, executing them sequentially.\n",(0,t.jsx)(n.code,{children:"connectAndSign"})," takes one parameter, the message string to be signed, and passes the message and\nthe output of ",(0,t.jsx)(n.a,{href:"/wallet/reference/eth_requestAccounts",children:(0,t.jsx)(n.code,{children:"eth_requestAccounts"})})," directly to ",(0,t.jsx)(n.a,{href:"/wallet/reference/personal_sign",children:(0,t.jsx)(n.code,{children:"personal_sign"})}),"."]}),"\n",(0,t.jsx)(n.p,{children:"This method enhances dapp user experience, especially on mobile platforms, by allowing users to\nconnect to MetaMask and sign a message in a single interaction, requiring only one switch between\nthe mobile dapp and MetaMask Mobile.\nThis is useful for various purposes such as authentication and transaction verification."}),"\n",(0,t.jsx)("p",{align:"center",children:(0,t.jsx)("video",{width:"350",controls:!0,children:(0,t.jsx)("source",{src:"/connect-and-sign.mp4",type:"video/mp4"})})}),"\n",(0,t.jsxs)(n.p,{children:["The following instructions describe how to connect and sign in JavaScript.\nYou can also see the ",(0,t.jsx)(n.a,{href:"/update-snaps-resources/wallet/how-to/use-sdk/gaming/unity/connect-and-sign",children:"Unity instructions"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/update-snaps-resources/wallet/how-to/use-sdk/javascript/",children:"MetaMask SDK set up"})," in your JavaScript dapp."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"MetaMask Mobile version 7.10 or later.\nYour users must have an updated version of MetaMask Mobile for this feature to work correctly.\nFor older versions of MetaMask, this function may not work as expected."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"use-the-connectandsign-method",children:["Use the ",(0,t.jsx)(n.code,{children:"connectAndSign"})," method"]}),"\n",(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.code,{children:"connectAndSign"})," method as follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'const connectAndSign = async () => {\n  try {\n    const signResult = await sdk?.connectAndSign({\n      msg: "Connect + Sign message",\n    });\n    setResponse(signResult);\n  } catch (err) {\n    console.warn("failed to connect..", err);\n  }\n};\n'})}),"\n",(0,t.jsxs)(n.p,{children:["To invoke ",(0,t.jsx)(n.code,{children:"connectAndSign"}),":"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Ensure the ",(0,t.jsx)(n.code,{children:"MetaMaskSDK"})," instance (",(0,t.jsx)(n.code,{children:"sdk"})," in this context) is properly initialized and available."]}),"\n",(0,t.jsxs)(n.li,{children:["Call ",(0,t.jsx)(n.code,{children:"connectAndSign"})," with the message to be signed."]}),"\n",(0,t.jsx)(n.li,{children:"Handle the promise to process the response or catch any errors."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(n.p,{children:["The following is an example of using the ",(0,t.jsx)(n.code,{children:"connectAndSign"})," method in a React dapp, integrating it\ninto a functional component:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'import React, { useState } from "react";\nimport { useSDK } from "@metamask/sdk-react";\n\nfunction MyComponent() {\n  const { sdk } = useSDK();\n  const [signedMessage, setSignedMessage] = useState("");\n\n  const handleConnectAndSign = async () => {\n    try {\n      const message = "Your message here";\n      const signature = await sdk.connectAndSign({ msg: message });\n      setSignedMessage(signature);\n    } catch (error) {\n      console.error("Error in signing:", error);\n    }\n  };\n\n  return (\n    <div>\n      <button onClick={handleConnectAndSign}>Connect and Sign</button>\n      {signedMessage && <p>Signed Message: {signedMessage}</p>}\n    </div>\n  );\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["For a comprehensive React example, see the\n",(0,t.jsx)(n.a,{href:"https://github.com/MetaMask/metamask-sdk/blob/main/packages/examples/create-react-app/src/App.tsx",children:(0,t.jsx)(n.code,{children:"App.tsx"})}),"\nfile of the example React dapp."]}),"\n",(0,t.jsxs)(n.p,{children:["For examples of using the ",(0,t.jsx)(n.code,{children:"connectAndSign"})," function in Next.js and Vue.js, see the\n",(0,t.jsx)(n.a,{href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples/nextjs-demo",children:"example Next.js dapp"}),"\nand ",(0,t.jsx)(n.a,{href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples/vuejs",children:"example Vue.js dapp"}),"\nin the JavaScript SDK GitHub repository."]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var t=s(96540);const a={},i=t.createContext(a);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);