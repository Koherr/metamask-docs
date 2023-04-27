"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[4151],{3905:(e,n,r)=>{r.d(n,{Zo:()=>m,kt:()=>d});var t=r(7294);function s(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){s(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,s=function(e,n){if(null==e)return{};var r,t,s={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(s[r]=e[r]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var p=t.createContext({}),l=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},m=function(e){var n=l(e.components);return t.createElement(p.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var r=e.components,s=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=l(r),c=s,d=u["".concat(p,".").concat(c)]||u[c]||f[c]||o;return r?t.createElement(d,a(a({ref:n},m),{},{components:r})):t.createElement(d,a({ref:n},m))}));function d(e,n){var r=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=r.length,a=new Array(o);a[0]=c;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[u]="string"==typeof e?e:s,a[1]=i;for(var l=2;l<o;l++)a[l]=r[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}c.displayName="MDXCreateElement"},3932:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var t=r(7462),s=(r(7294),r(3905));const o={description:"Request permissions in a manifest file."},a="Request permissions",i={unversionedId:"how-to/request-permissions",id:"how-to/request-permissions",title:"Request permissions",description:"Request permissions in a manifest file.",source:"@site/snaps/how-to/request-permissions.md",sourceDirName:"how-to",slug:"/how-to/request-permissions",permalink:"/fix/remove-playground-from-navbar/snaps/how-to/request-permissions",draft:!1,tags:[],version:"current",frontMatter:{description:"Request permissions in a manifest file."},sidebar:"snapsSidebar",previous:{title:"Develop a snap",permalink:"/fix/remove-playground-from-navbar/snaps/how-to/develop-a-snap"},next:{title:"Manage keys",permalink:"/fix/remove-playground-from-navbar/snaps/how-to/manage-keys"}},p={},l=[{value:"RPC API permissions",id:"rpc-api-permissions",level:2},{value:"Endowments",id:"endowments",level:2}],m={toc:l};function u(e){let{components:n,...r}=e;return(0,s.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"request-permissions"},"Request permissions"),(0,s.kt)("p",null,"To access certain powerful JavaScript globals or API methods, a snap must ask the user for permission.\nSnaps follow the ",(0,s.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-2255"},"EIP-2255 wallet permissions specification"),",\nand you must specify a snap's required permissions in the ",(0,s.kt)("inlineCode",{parentName:"p"},"initialPermissions")," field of the\n",(0,s.kt)("a",{parentName:"p",href:"/fix/remove-playground-from-navbar/snaps/concepts/anatomy#manifest-file"},"manifest file"),"."),(0,s.kt)("h2",{id:"rpc-api-permissions"},"RPC API permissions"),(0,s.kt)("p",null,"You must request permission to use any\n",(0,s.kt)("a",{parentName:"p",href:"/fix/remove-playground-from-navbar/snaps/reference/rpc-api#restricted-methods"},"restricted JSON-RPC API methods"),"."),(0,s.kt)("p",null,"For example, to request to use ",(0,s.kt)("a",{parentName:"p",href:"/fix/remove-playground-from-navbar/snaps/reference/rpc-api#snap_dialog"},(0,s.kt)("inlineCode",{parentName:"a"},"snap_dialog")),", add the\nfollowing to the manifest file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'"initialPermissions": {\n  "snap_dialog": {}\n},\n')),(0,s.kt)("h2",{id:"endowments"},"Endowments"),(0,s.kt)("p",null,"Endowments are a type of permission.\nSee the ",(0,s.kt)("a",{parentName:"p",href:"/fix/remove-playground-from-navbar/snaps/reference/permissions"},"Snaps permissions reference")," for the full list of endowments\nyou can specify in the manifest file."),(0,s.kt)("p",null,"For example, to request the ",(0,s.kt)("a",{parentName:"p",href:"/fix/remove-playground-from-navbar/snaps/reference/permissions#endowmentlong-running"},(0,s.kt)("inlineCode",{parentName:"a"},"endowment:long-running")),"\npermission, add the following to the manifest file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'"initialPermissions": {\n  "endowment:long-running": {}\n},\n')))}u.isMDXComponent=!0}}]);