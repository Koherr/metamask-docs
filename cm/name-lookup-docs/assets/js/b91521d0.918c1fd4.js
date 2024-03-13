"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[8778],{3905:(e,a,n)=>{n.d(a,{Zo:()=>c,kt:()=>f});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=t.createContext({}),p=function(e){var a=t.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},c=function(e){var a=p(e.components);return t.createElement(i.Provider,{value:a},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||l;return n?t.createElement(f,o(o({ref:a},c),{},{components:n})):t.createElement(f,o({ref:a},c))}));function f(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},50525:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var t=n(87462),r=(n(67294),n(3905)),l=n(65488),o=n(85162);const s={sidebar_label:"Subcommands",sidebar_position:2,toc_max_heading_level:4,description:"See the Snaps CLI subcommands reference."},i="Snaps subcommands",p={unversionedId:"reference/cli/subcommands",id:"reference/cli/subcommands",title:"Snaps subcommands",description:"See the Snaps CLI subcommands reference.",source:"@site/snaps/reference/cli/subcommands.md",sourceDirName:"reference/cli",slug:"/reference/cli/subcommands",permalink:"/cm/name-lookup-docs/snaps/reference/cli/subcommands",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/cli/subcommands.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Subcommands",sidebar_position:2,toc_max_heading_level:4,description:"See the Snaps CLI subcommands reference."},sidebar:"snapsSidebar",previous:{title:"Options",permalink:"/cm/name-lookup-docs/snaps/reference/cli/options"},next:{title:"Snaps entry points",permalink:"/cm/name-lookup-docs/snaps/reference/entry-points"}},c={},u=[{value:"<code>b</code>, <code>build</code>",id:"b-build",level:3},{value:"<code>c</code>, <code>config</code>",id:"c-config",level:4},{value:"<code>e</code>, <code>eval</code>",id:"e-eval",level:3},{value:"<code>m</code>, <code>manifest</code>",id:"m-manifest",level:3},{value:"<code>fix</code>",id:"fix",level:4},{value:"<code>s</code>, <code>serve</code>",id:"s-serve",level:3},{value:"<code>p</code>, <code>port</code>",id:"p-port",level:4},{value:"<code>w</code>, <code>watch</code>",id:"w-watch",level:3},{value:"<code>p</code>, <code>port</code>",id:"p-port-1",level:4},{value:"Global options",id:"global-options",level:2},{value:"<code>h</code>, <code>help</code>",id:"h-help",level:4},{value:"<code>version</code>",id:"version",level:4}],m={toc:u},d="wrapper";function f(e){let{components:a,...n}=e;return(0,r.kt)(d,(0,t.Z)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"snaps-subcommands"},"Snaps subcommands"),(0,r.kt)("p",null,"This reference describes the syntax of the Snaps command line interface (CLI) subcommands and\nsubcommand options."),(0,r.kt)("p",null,"You can specify subcommands and their options using the ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn mm-snap")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn mm-snap [SUBCOMMAND] [SUBCOMMAND OPTIONS]\n")),(0,r.kt)("h3",{id:"b-build"},(0,r.kt)("inlineCode",{parentName:"h3"},"b"),", ",(0,r.kt)("inlineCode",{parentName:"h3"},"build")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn mm-snap build\n")),(0,r.kt)("p",null,"Builds a Snap from source."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"b")," is an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"build"),"."),(0,r.kt)("h4",{id:"c-config"},(0,r.kt)("inlineCode",{parentName:"h4"},"c"),", ",(0,r.kt)("inlineCode",{parentName:"h4"},"config")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Syntax",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn mm-snap build --config <FILE>\n"))),(0,r.kt)(o.Z,{value:"Example",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn mm-snap build --config ./snap.config.build.ts\n")))),(0,r.kt)("p",null,"Path to the ",(0,r.kt)("a",{parentName:"p",href:"/cm/name-lookup-docs/snaps/learn/about-snaps/files#configuration-file"},"configuration file"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-c")," is an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"--config"),"."),(0,r.kt)("h3",{id:"e-eval"},(0,r.kt)("inlineCode",{parentName:"h3"},"e"),", ",(0,r.kt)("inlineCode",{parentName:"h3"},"eval")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn mm-snap eval\n")),(0,r.kt)("p",null,"Attempts to evaluate the Snap bundle in\n",(0,r.kt)("a",{parentName:"p",href:"/cm/name-lookup-docs/snaps/learn/about-snaps/execution-environment#secure-ecmascript-ses"},"Secure ECMAScript (SES)"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"e")," is an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"eval"),"."),(0,r.kt)("h3",{id:"m-manifest"},(0,r.kt)("inlineCode",{parentName:"h3"},"m"),", ",(0,r.kt)("inlineCode",{parentName:"h3"},"manifest")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn mm-snap manifest\n")),(0,r.kt)("p",null,"Validates the Snap ",(0,r.kt)("a",{parentName:"p",href:"/cm/name-lookup-docs/snaps/learn/about-snaps/files#manifest-file"},"manifest file"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"m")," is an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"manifest"),"."),(0,r.kt)("h4",{id:"fix"},(0,r.kt)("inlineCode",{parentName:"h4"},"fix")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Syntax",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn mm-snap manifest --fix <BOOLEAN>\n"))),(0,r.kt)(o.Z,{value:"Example",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn mm-snap manifest --fix false\n")))),(0,r.kt)("p",null,"Enables or disables making any changes to fix the manifest file.\nThe default is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("h3",{id:"s-serve"},(0,r.kt)("inlineCode",{parentName:"h3"},"s"),", ",(0,r.kt)("inlineCode",{parentName:"h3"},"serve")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn mm-snap serve\n")),(0,r.kt)("p",null,"Locally serves Snap files for testing."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"s")," is an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"serve"),"."),(0,r.kt)("h4",{id:"p-port"},(0,r.kt)("inlineCode",{parentName:"h4"},"p"),", ",(0,r.kt)("inlineCode",{parentName:"h4"},"port")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Syntax",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn mm-snap serve --port <PORT>\n"))),(0,r.kt)(o.Z,{value:"Example",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn mm-snap serve --port 9000\n")))),(0,r.kt)("p",null,"The local server port for testing.\nThe default is ",(0,r.kt)("inlineCode",{parentName:"p"},"8081"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-p")," is an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"--port"),"."),(0,r.kt)("h3",{id:"w-watch"},(0,r.kt)("inlineCode",{parentName:"h3"},"w"),", ",(0,r.kt)("inlineCode",{parentName:"h3"},"watch")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn mm-snap watch\n")),(0,r.kt)("p",null,"Rebuilds a Snap from source upon changes."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"w")," is an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"watch"),"."),(0,r.kt)("h4",{id:"p-port-1"},(0,r.kt)("inlineCode",{parentName:"h4"},"p"),", ",(0,r.kt)("inlineCode",{parentName:"h4"},"port")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Syntax",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn mm-snap watch --port <PORT>\n"))),(0,r.kt)(o.Z,{value:"Example",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn mm-snap watch --port 9000\n")))),(0,r.kt)("p",null,"The local server port for testing.\nThe default is ",(0,r.kt)("inlineCode",{parentName:"p"},"8081"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-p")," is an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"--port"),"."),(0,r.kt)("h2",{id:"global-options"},"Global options"),(0,r.kt)("h4",{id:"h-help"},(0,r.kt)("inlineCode",{parentName:"h4"},"h"),", ",(0,r.kt)("inlineCode",{parentName:"h4"},"help")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"-h, --help\n")),(0,r.kt)("p",null,"Displays the help message and exits.\nYou can use this option with ",(0,r.kt)("inlineCode",{parentName:"p"},"mm-snap")," or any subcommand."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-h")," is an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"--help"),"."),(0,r.kt)("h4",{id:"version"},(0,r.kt)("inlineCode",{parentName:"h4"},"version")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--version\n")),(0,r.kt)("p",null,"Displays the version number and exits."))}f.isMDXComponent=!0},85162:(e,a,n)=>{n.d(a,{Z:()=>o});var t=n(67294),r=n(86010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:a,hidden:n,className:o}=e;return t.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:n},a)}},65488:(e,a,n)=>{n.d(a,{Z:()=>d});var t=n(87462),r=n(67294),l=n(86010),o=n(12466),s=n(70989),i=n(72389);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function c(e){let{className:a,block:n,selectedValue:s,selectValue:i,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,o.o5)(),d=e=>{const a=e.currentTarget,n=u.indexOf(a),t=c[n].value;t!==s&&(m(a),i(t))},f=e=>{let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;a=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;a=u[n]??u[u.length-1];break}}a?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},a)},c.map((e=>{let{value:a,label:n,attributes:o}=e;return r.createElement("li",(0,t.Z)({role:"tab",tabIndex:s===a?0:-1,"aria-selected":s===a,key:a,ref:e=>u.push(e),onKeyDown:f,onClick:d},o,{className:(0,l.Z)("tabs__item",p.tabItem,o?.className,{"tabs__item--active":s===a})}),n??a)})))}function u(e){let{lazy:a,children:n,selectedValue:t}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==t}))))}function m(e){const a=(0,s.Y)(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",p.tabList)},r.createElement(c,(0,t.Z)({},e,a)),r.createElement(u,(0,t.Z)({},e,a)))}function d(e){const a=(0,i.Z)();return r.createElement(m,(0,t.Z)({key:String(a)},e))}},70989:(e,a,n)=>{n.d(a,{Y:()=>m});var t=n(67294),r=n(16550),l=n(91980),o=n(67392),s=n(50012);function i(e){return function(e){return t.Children.map(e,(e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:n,attributes:t,default:r}}=e;return{value:a,label:n,attributes:t,default:r}}))}function p(e){const{values:a,children:n}=e;return(0,t.useMemo)((()=>{const e=a??i(n);return function(e){const a=(0,o.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function c(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function u(e){let{queryString:a=!1,groupId:n}=e;const o=(0,r.k6)(),s=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,l._X)(s),(0,t.useCallback)((e=>{if(!s)return;const a=new URLSearchParams(o.location.search);a.set(s,e),o.replace({...o.location,search:a.toString()})}),[s,o])]}function m(e){const{defaultValue:a,queryString:n=!1,groupId:r}=e,l=p(e),[o,i]=(0,t.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!c({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:l}))),[m,d]=u({queryString:n,groupId:r}),[f,b]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[r,l]=(0,s.Nk)(n);return[r,(0,t.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),k=(()=>{const e=m??f;return c({value:e,tabValues:l})?e:null})();(0,t.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!c({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,l]),tabValues:l}}}}]);