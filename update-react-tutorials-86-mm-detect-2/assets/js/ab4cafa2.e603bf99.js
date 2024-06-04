"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[257],{29688:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var s=n(74848),r=n(28453);const i={description:"Follow these security guidelines when creating an account management Snap.",sidebar_label:"Security guidelines",sidebar_position:3,tags:["Keyring API"]},a="Account management Snap security guidelines",c={id:"features/custom-evm-accounts/security",title:"Account management Snap security guidelines",description:"Follow these security guidelines when creating an account management Snap.",source:"@site/snaps/features/custom-evm-accounts/security.md",sourceDirName:"features/custom-evm-accounts",slug:"/features/custom-evm-accounts/security",permalink:"/update-react-tutorials-86-mm-detect-2/snaps/features/custom-evm-accounts/security",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/custom-evm-accounts/security.md",tags:[{label:"Keyring API",permalink:"/update-react-tutorials-86-mm-detect-2/snaps/tags/keyring-api"}],version:"current",sidebarPosition:3,frontMatter:{description:"Follow these security guidelines when creating an account management Snap.",sidebar_label:"Security guidelines",sidebar_position:3,tags:["Keyring API"]},sidebar:"snapsSidebar",previous:{title:"Create a companion dapp",permalink:"/update-react-tutorials-86-mm-detect-2/snaps/features/custom-evm-accounts/create-companion-dapp"},next:{title:"Custom name resolution",permalink:"/update-react-tutorials-86-mm-detect-2/snaps/features/custom-name-resolution"}},o={},d=[{value:"Do not add secret information to account objects",id:"do-not-add-secret-information-to-account-objects",level:2},{value:"Limit the methods exposed to dapps",id:"limit-the-methods-exposed-to-dapps",level:2},{value:"Ensure the redirect URL cannot be manipulated",id:"ensure-the-redirect-url-cannot-be-manipulated",level:2},{value:"Remove all debug code from your production Snap",id:"remove-all-debug-code-from-your-production-snap",level:2},{value:"Remove sensitive information from errors",id:"remove-sensitive-information-from-errors",level:2},{value:"Expose Account Management API methods using the <code>onKeyringRequest</code> entry point",id:"expose-account-management-api-methods-using-the-onkeyringrequest-entry-point",level:2},{value:"Do not fetch remote code from inside your Snap",id:"do-not-fetch-remote-code-from-inside-your-snap",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"account-management-snap-security-guidelines",children:"Account management Snap security guidelines"}),"\n",(0,s.jsxs)(t.p,{children:["Refer to the following security guidelines when ",(0,s.jsx)(t.a,{href:"/update-react-tutorials-86-mm-detect-2/snaps/features/custom-evm-accounts/create-account-snap",children:"creating an account management Snap"}),"."]}),"\n",(0,s.jsx)(t.admonition,{title:"see also",type:"tip",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/update-react-tutorials-86-mm-detect-2/snaps/features/custom-evm-accounts/",children:"Custom EVM accounts"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/update-react-tutorials-86-mm-detect-2/snaps/features/custom-evm-accounts/create-account-snap",children:"Create an account management Snap"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/update-react-tutorials-86-mm-detect-2/snaps/features/custom-evm-accounts/create-companion-dapp",children:"Create an account management companion dapp"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/update-react-tutorials-86-mm-detect-2/snaps/reference/keyring-api/",children:"Keyring API reference"})}),"\n"]})}),"\n",(0,s.jsx)(t.h2,{id:"do-not-add-secret-information-to-account-objects",children:"Do not add secret information to account objects"}),"\n",(0,s.jsxs)(t.p,{children:["Ensure that you do not store any secret information in\n",(0,s.jsx)(t.a,{href:"/update-react-tutorials-86-mm-detect-2/snaps/reference/keyring-api/account-management/objects#keyringaccount",children:"account objects"}),", since they are\nexposed to dapps and MetaMask.\nFor example:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["\u274c ",(0,s.jsx)(t.strong,{children:"Do NOT do this:"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:'const account: KeyringAccount = {\n  id: uuid(),\n  options: {\n    privateKey: "0x01234...78", // !!! DO NOT DO THIS !!!\n  },\n  address,\n  methods: [\n    EthMethod.PersonalSign,\n    EthMethod.Sign,\n    EthMethod.SignTransaction,\n    EthMethod.SignTypedDataV1,\n    EthMethod.SignTypedDataV3,\n    EthMethod.SignTypedDataV4,\n  ],\n  type: EthAccountType.Eoa,\n};\n'})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["\u2705 ",(0,s.jsx)(t.strong,{children:"Do this instead:"})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"Store any secret information that you need in the Snap's state:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:'await snap.request({\n  method: "snap_manageState",\n  params: {\n    operation: "update",\n    newState: {\n      // Your Snap\'s state here.\n      privateKey: "0x01234...78",\n    },\n  },\n});\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"limit-the-methods-exposed-to-dapps",children:"Limit the methods exposed to dapps"}),"\n",(0,s.jsxs)(t.p,{children:["By default, MetaMask enforces the following restrictions on calling\n",(0,s.jsx)(t.a,{href:"/update-react-tutorials-86-mm-detect-2/snaps/reference/keyring-api/account-management/",children:"Account Management API"})," methods on your Snap based on\nthe caller origin:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Method"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"MetaMask origin"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Dapp origin"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/update-react-tutorials-86-mm-detect-2/snaps/reference/keyring-api/account-management/#keyring_listaccounts",children:(0,s.jsx)(t.code,{children:"keyring_listAccounts"})})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/update-react-tutorials-86-mm-detect-2/snaps/reference/keyring-api/account-management/#keyring_getaccount",children:(0,s.jsx)(t.code,{children:"keyring_getAccount"})})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/update-react-tutorials-86-mm-detect-2/snaps/reference/keyring-api/account-management/#keyring_createaccount",children:(0,s.jsx)(t.code,{children:"keyring_createAccount"})})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/update-react-tutorials-86-mm-detect-2/snaps/reference/keyring-api/account-management/#keyring_filteraccountchains",children:(0,s.jsx)(t.code,{children:"keyring_filterAccountChains"})})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/update-react-tutorials-86-mm-detect-2/snaps/reference/keyring-api/account-management/#keyring_updateaccount",children:(0,s.jsx)(t.code,{children:"keyring_updateAccount"})})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/update-react-tutorials-86-mm-detect-2/snaps/reference/keyring-api/account-management/#keyring_deleteaccount",children:(0,s.jsx)(t.code,{children:"keyring_deleteAccount"})})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/update-react-tutorials-86-mm-detect-2/snaps/reference/keyring-api/account-management/#keyring_exportaccount",children:(0,s.jsx)(t.code,{children:"keyring_exportAccount"})})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/update-react-tutorials-86-mm-detect-2/snaps/reference/keyring-api/account-management/#keyring_listrequests",children:(0,s.jsx)(t.code,{children:"keyring_listRequests"})})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/update-react-tutorials-86-mm-detect-2/snaps/reference/keyring-api/account-management/#keyring_getrequest",children:(0,s.jsx)(t.code,{children:"keyring_getRequest"})})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/update-react-tutorials-86-mm-detect-2/snaps/reference/keyring-api/account-management/#keyring_submitrequest",children:(0,s.jsx)(t.code,{children:"keyring_submitRequest"})})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/update-react-tutorials-86-mm-detect-2/snaps/reference/keyring-api/account-management/#keyring_approverequest",children:(0,s.jsx)(t.code,{children:"keyring_approveRequest"})})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/update-react-tutorials-86-mm-detect-2/snaps/reference/keyring-api/account-management/#keyring_rejectrequest",children:(0,s.jsx)(t.code,{children:"keyring_rejectRequest"})})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["For example, a dapp is not allowed to call the ",(0,s.jsx)(t.code,{children:"keyring_submitRequest"})," method of your Snap, and\nMetaMask is not allowed to call the ",(0,s.jsx)(t.code,{children:"keyring_createAccount"})," method of your Snap."]}),"\n",(0,s.jsxs)(t.p,{children:["MetaMask also enforces that only dapps allowlisted in the Snap's manifest file using the\n",(0,s.jsx)(t.a,{href:"/update-react-tutorials-86-mm-detect-2/snaps/reference/permissions#endowmentkeyring",children:(0,s.jsx)(t.code,{children:"endowment:keyring"})})," permission can call these methods."]}),"\n",(0,s.jsx)(t.admonition,{title:"important",type:"caution",children:(0,s.jsxs)(t.p,{children:["We recommend further restricting the methods exposed to dapps according to your Snap's functionality.\nFor example, if your Snap does not support account deletion via dapps, your Snap should reject\ncalls to the ",(0,s.jsx)(t.code,{children:"keyring_deleteAccount"})," method originating from dapps."]})}),"\n",(0,s.jsx)(t.p,{children:"Your Snap can also impose varying restrictions depending on the calling dapp.\nFor example, Dapp 1 may have access to a different set of methods than Dapp 2.\nThe following is an example of implementing such logic:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:'const permissions: Record<string, string[]> = {\n  "https://<Dapp 1 domain>": [\n    // List of allowed methods for Dapp 1.\n  ],\n  "https://<Dapp 2 domain>": [\n    // List of allowed methods for Dapp 2.\n  ],\n};\n\nif (origin !== "metamask" && !permissions[origin]?.includes(request.method)) {\n  // Reject the request.\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"Both dapps must be allowlisted in the Snap's manifest file."}),"\n",(0,s.jsx)(t.h2,{id:"ensure-the-redirect-url-cannot-be-manipulated",children:"Ensure the redirect URL cannot be manipulated"}),"\n",(0,s.jsxs)(t.p,{children:["If your Snap implements an ",(0,s.jsx)(t.a,{href:"/update-react-tutorials-86-mm-detect-2/snaps/features/custom-evm-accounts/#asynchronous-transaction-flow",children:"asynchronous transaction flow"}),",\nensure that the redirect URL is valid and cannot be manipulated, otherwise the user can be\nredirected to a malicious website."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:'async submitRequest(request: KeyringRequest): Promise<SubmitRequestResponse> {\n  // Your Snap\'s custom logic.\n  return {\n    pending: true,\n    redirect: {\n      message: "Please continue in the dapp.",\n      url: "https://<dapp domain>/sign?tx=1234", // !!! ENSURE THIS IS A SAFE URL !!!\n    },\n  };\n}\n'})}),"\n",(0,s.jsx)(t.admonition,{title:"important",type:"caution",children:(0,s.jsxs)(t.p,{children:["Only HTTPS URLs are allowed in the ",(0,s.jsx)(t.code,{children:"url"})," field, and the provided URL is checked against a\n",(0,s.jsx)(t.a,{href:"https://github.com/MetaMask/eth-phishing-detect",children:"list of blocked domains"}),".\nHowever, for development purposes, HTTP URLs are allowed on Flask.\nMetaMask also requires the redirect URL to be within a site allowlisted in the Snap's manifest file."]})}),"\n",(0,s.jsx)(t.h2,{id:"remove-all-debug-code-from-your-production-snap",children:"Remove all debug code from your production Snap"}),"\n",(0,s.jsx)(t.p,{children:"Ensure that all debug code is removed from your production Snap.\nExposing debug code can lead to multiple security vulnerabilities.\nFor example, secret information can be logged to the console, or a malicious dapp can bypass a\nsecurity check."}),"\n",(0,s.jsx)(t.h2,{id:"remove-sensitive-information-from-errors",children:"Remove sensitive information from errors"}),"\n",(0,s.jsx)(t.p,{children:"Ensure that all error messages returned by your Snap are sanitized.\nFailing to sanitize error messages can lead to exposing secrets or other sensitive information to\ndapps or to MetaMask."}),"\n",(0,s.jsx)(t.p,{children:"For example:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["\u274c ",(0,s.jsx)(t.strong,{children:"Do NOT do this:"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"// If inputSecretValue contains invalid hexadecimal characters, its value\n// will be added to the error thrown by toBuffer.\nconst privateKey = toBuffer(inputSecretValue);\n// Use privateKey here.\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["\u2705 ",(0,s.jsx)(t.strong,{children:"Do this instead:"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:'try {\n  const privateKey = toBuffer(inputSecretValue);\n  // Use privateKey here.\n} catch (error) {\n  throw new Error("Invalid private key");\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.h2,{id:"expose-account-management-api-methods-using-the-onkeyringrequest-entry-point",children:["Expose Account Management API methods using the ",(0,s.jsx)(t.code,{children:"onKeyringRequest"})," entry point"]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"/update-react-tutorials-86-mm-detect-2/snaps/reference/entry-points#onrpcrequest",children:(0,s.jsx)(t.code,{children:"onRpcRequest"})})," entry point is a general-purpose\nentry point and has no restrictions on the methods that can be called.\nEnsure that you only expose Account Management API methods using the\n",(0,s.jsx)(t.a,{href:"/update-react-tutorials-86-mm-detect-2/snaps/reference/entry-points#onkeyringrequest",children:(0,s.jsx)(t.code,{children:"onKeyringRequest"})})," entry point, which has extra\nsecurity checks."]}),"\n",(0,s.jsx)(t.p,{children:"For example:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["\u274c ",(0,s.jsx)(t.strong,{children:"Do NOT do this:"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"export const onRpcRequest: OnRpcRequestHandler = async ({\n  //           ~~~           ~~~\n  origin,\n  request,\n}) => {\n  return handleKeyringRequest(keyring, request);\n};\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["\u2705 ",(0,s.jsx)(t.strong,{children:"Do this instead:"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"export const onKeyringRequest: OnKeyringRequestHandler = async ({\n  //           ~~~~~~~           ~~~~~~~\n  origin,\n  request,\n}) => {\n  // Any custom logic or extra security checks here.\n  return handleKeyringRequest(keyring, request);\n};\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"do-not-fetch-remote-code-from-inside-your-snap",children:"Do not fetch remote code from inside your Snap"}),"\n",(0,s.jsx)(t.p,{children:"Ensure that your Snap is self-contained and does not fetch code from external sources.\nOtherwise, a compromised server can use this mechanism to inject malicious code into your Snap."})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var s=n(96540);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);