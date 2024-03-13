"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[7531],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>f});var t=a(67294);function s(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){s(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,s=function(e,n){if(null==e)return{};var a,t,s={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(s[a]=e[a]);return s}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var r=t.createContext({}),p=function(e){var n=t.useContext(r),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},c=function(e){var n=p(e.components);return t.createElement(r.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,s=e.mdxType,l=e.originalType,r=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),d=s,f=u["".concat(r,".").concat(d)]||u[d]||m[d]||l;return a?t.createElement(f,o(o({ref:n},c),{},{components:a})):t.createElement(f,o({ref:n},c))}));function f(e,n){var a=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var r in n)hasOwnProperty.call(n,r)&&(i[r]=n[r]);i.originalType=e,i[u]="string"==typeof e?e:s,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1916:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var t=a(87462),s=(a(67294),a(3905));const l={description:"Display your Snap's UI and metadata in the user's language.",sidebar_position:2},o="Localization",i={unversionedId:"features/localization",id:"features/localization",title:"Localization",description:"Display your Snap's UI and metadata in the user's language.",source:"@site/snaps/features/localization.md",sourceDirName:"features",slug:"/features/localization",permalink:"/cm/name-lookup-docs/snaps/features/localization",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/localization.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Display your Snap's UI and metadata in the user's language.",sidebar_position:2},sidebar:"snapsSidebar",previous:{title:"Custom UI",permalink:"/cm/name-lookup-docs/snaps/features/custom-ui"},next:{title:"Non-EVM networks",permalink:"/cm/name-lookup-docs/snaps/features/non-evm-networks"}},r={},p=[{value:"Steps",id:"steps",level:2},{value:"1. Get the user&#39;s language",id:"1-get-the-users-language",level:3},{value:"2. Localize the Snap&#39;s UI",id:"2-localize-the-snaps-ui",level:3},{value:"3. Localize the Snap&#39;s manifest file",id:"3-localize-the-snaps-manifest-file",level:3}],c={toc:p},u="wrapper";function m(e){let{components:n,...a}=e;return(0,s.kt)(u,(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"localization"},"Localization"),(0,s.kt)("p",null,"You can localize your Snap to display your Snap's user interface (UI) text and textual metadata (such as\ntitle and description) in the user's language."),(0,s.kt)("h2",{id:"steps"},"Steps"),(0,s.kt)("h3",{id:"1-get-the-users-language"},"1. Get the user's language"),(0,s.kt)("p",null,"In your Snap's code, determine the user's language by using the\n",(0,s.kt)("a",{parentName:"p",href:"/cm/name-lookup-docs/snaps/reference/snaps-api#snap_getlocale"},(0,s.kt)("inlineCode",{parentName:"a"},"snap_getLocale"))," API method.\nTo call ",(0,s.kt)("inlineCode",{parentName:"p"},"snap_getLocale"),", first request the required permission by adding it to the\n",(0,s.kt)("inlineCode",{parentName:"p"},"initialPermissions")," field in your manifest file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'{\n  "initialPermissions": {\n    "snap_getLocale": {}\n  }\n}\n')),(0,s.kt)("p",null,"Your Snap can then call ",(0,s.kt)("inlineCode",{parentName:"p"},"snap_getLocale")," to get the user's language code (for example, ",(0,s.kt)("inlineCode",{parentName:"p"},"en")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"es"),")."),(0,s.kt)("h3",{id:"2-localize-the-snaps-ui"},"2. Localize the Snap's UI"),(0,s.kt)("p",null,"Use the user's language code to localize your Snap's UI."),(0,s.kt)("p",null,"First, create locale files named ",(0,s.kt)("inlineCode",{parentName:"p"},"snap/locales/<language_code>.json"),", containing content in the\nfollowing format:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="en.json"',title:'"en.json"'},'{\n  "locale": "en",\n  "messages": {\n    "hello": {\n      "message": "Hello, world!",\n      "description": "The message that is returned when the `hello` method is called."\n    }\n  }\n}\n')),(0,s.kt)("p",null,"You can then use these files in a localization module.\nThe following is an example module:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import da from '../locales/da.json';\nimport en from '../locales/en.json';\nimport nl from '../locales/nl.json';\n\n// Default language, to be used if there is not a valid translation in\n// the requested locale.\nconst FALLBACK_LANGUAGE: Locale = 'en';\n\nexport const locales = {\n  da: da.messages,\n  en: en.messages,\n  nl: nl.messages,\n};\n\nexport type Locale = keyof typeof locales;\n\nexport async function getMessage(id: keyof (typeof locales)[Locale]) {\n  const locale = (await snap.request({ method: 'snap_getLocale' })) as Locale;\n  const { message } = locales[locale]?.[id] ?? locales[FALLBACK_LANGUAGE][id];\n\n  return message;\n}\n")),(0,s.kt)("p",null,"You can then use the ",(0,s.kt)("inlineCode",{parentName:"p"},"getMessage")," function in your Snap's code to localize a message, which uses\nEnglish as the default if the user's locale isn't available."),(0,s.kt)("p",null,"The following is an example of using ",(0,s.kt)("inlineCode",{parentName:"p"},"getMessage")," in a Snap's RPC request handler:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { rpcErrors } from '@metamask/rpc-errors';\nimport type { OnRpcRequestHandler } from '@metamask/snaps-sdk';\n\nimport { getMessage } from './locales';\n\nexport const onRpcRequest: OnRpcRequestHandler = async ({ request }) => {\n  switch (request.method) {\n    case 'hello':\n      return await getMessage('hello');\n\n    default:\n      throw rpcErrors.methodNotFound({\n        data: { method: request.method },\n      });\n  }\n};\n")),(0,s.kt)("h3",{id:"3-localize-the-snaps-manifest-file"},"3. Localize the Snap's manifest file"),(0,s.kt)("p",null,"The Snap ",(0,s.kt)("a",{parentName:"p",href:"/cm/name-lookup-docs/snaps/learn/about-snaps/files#manifest-file"},"manifest file")," contains textual metadata such as\n",(0,s.kt)("inlineCode",{parentName:"p"},"proposedName")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"description")," that you can localize to display in the user's language."),(0,s.kt)("p",null,"The following is an example of a localized manifest file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'{\n  "version": "1.1.1",\n  "description": "{{ description }}",\n  "proposedName": "{{ name }}",\n  "source": {\n    "shasum": "XXX",\n    "locales": [\n      "locales/da.json",\n      "locales/en.json",\n      "locales/nl.json"\n    ]\n  },\n  "initialPermissions": {\n    "snap_getLocale": {}\n  },\n  "manifestVersion": "0.1"\n}\n')),(0,s.kt)("p",null,"To localize your manifest file, add all available locales to the ",(0,s.kt)("inlineCode",{parentName:"p"},"source.locales")," section, listing\nthe locale files you created when ",(0,s.kt)("a",{parentName:"p",href:"#2-localize-the-snaps-ui"},"localizing the Snap's UI"),".\nThe example locale file provided in ",(0,s.kt)("a",{parentName:"p",href:"#2-localize-the-snaps-ui"},"Step 2")," follows MetaMask's format for\nmanifest localization."),(0,s.kt)("p",null,"For each field that needs to be localized, replace its text with ",(0,s.kt)("inlineCode",{parentName:"p"},"{{ <fieldName> }}"),"."),(0,s.kt)("p",null,"When displaying this metadata to the user, MetaMask searches for the proper locale file and replaces\nthe template string with its translation.\nIf it doesn't find the user's locale, MetaMask uses English (",(0,s.kt)("inlineCode",{parentName:"p"},"en"),") as the default."))}m.isMDXComponent=!0}}]);