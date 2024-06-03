"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3860],{21822:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>r});var s=t(74848),o=t(28453);const i={sidebar_position:1,sidebar_label:"SDK connections",description:"Learn about how a dapp with the SDK installed connects to MetaMask.",tags:["JavaScript SDK","iOS SDK","Android SDK","Unity SDK"]},a="MetaMask SDK connections",c={id:"concepts/sdk/connections",title:"MetaMask SDK connections",description:"Learn about how a dapp with the SDK installed connects to MetaMask.",source:"@site/wallet/concepts/sdk/connections.md",sourceDirName:"concepts/sdk",slug:"/concepts/sdk/connections",permalink:"/update-snaps-resources/wallet/concepts/sdk/connections",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/concepts/sdk/connections.md",tags:[{label:"JavaScript SDK",permalink:"/update-snaps-resources/wallet/tags/java-script-sdk"},{label:"iOS SDK",permalink:"/update-snaps-resources/wallet/tags/i-os-sdk"},{label:"Android SDK",permalink:"/update-snaps-resources/wallet/tags/android-sdk"},{label:"Unity SDK",permalink:"/update-snaps-resources/wallet/tags/unity-sdk"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"SDK connections",description:"Learn about how a dapp with the SDK installed connects to MetaMask.",tags:["JavaScript SDK","iOS SDK","Android SDK","Unity SDK"]},sidebar:"walletSidebar",previous:{title:"About MetaMask SDK",permalink:"/update-snaps-resources/wallet/concepts/sdk/"},next:{title:"Android SDK architecture",permalink:"/update-snaps-resources/wallet/concepts/sdk/android"}},l={},r=[{value:"Initial connection flow",id:"initial-connection-flow",level:2},{value:"MetaMask Mobile connection",id:"metamask-mobile-connection",level:2},{value:"Connection status",id:"connection-status",level:2},{value:"Paused connections",id:"paused-connections",level:3},{value:"Cleared connections",id:"cleared-connections",level:3},{value:"Close connections manually",id:"close-connections-manually",level:3}];function d(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"metamask-sdk-connections",children:"MetaMask SDK connections"}),"\n",(0,s.jsxs)(n.p,{children:["This page provides details on how a dapp with ",(0,s.jsx)(n.a,{href:"/update-snaps-resources/wallet/concepts/sdk/",children:"MetaMask SDK"})," installed connects to a\nuser's MetaMask wallet."]}),"\n",(0,s.jsx)(n.h2,{id:"initial-connection-flow",children:"Initial connection flow"}),"\n",(0,s.jsx)(n.p,{children:"The following flowchart outlines the initial connection flow between a dapp and MetaMask:"}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)(n.mermaid,{value:"flowchart TD\n    A{{Dapp platform?}}\n    A --\x3e|Desktop| C(Show modal) --\x3e D{{Connect via?}}\n    D --\x3e|Extension| E{{Extension installed?}}\n    E --\x3e|No| F(Chrome store) --\x3e G(Connect via extension)\n    E --\x3e|Yes| G\n    D --\x3e|MM Mobile| H{{MM Mobile installed?}}\n    H --\x3e|Yes| J\n    H --\x3e|No| I(App store) --\x3e J(Connect via MM Mobile)\n    A --\x3e|Mobile| K(Deeplink to MM Mobile) --\x3e H"})}),"\n",(0,s.jsx)(n.p,{children:"The path first depends on whether the dapp is on a desktop or mobile platform:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"If the dapp is on a desktop platform (for example, a desktop web dapp), the dapp shows a modal\nasking the user to select if they want to connect to MetaMask using the browser extension or\nMetaMask Mobile."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If the user selects extension:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If the extension is not installed, the user is taken to the Chrome extension store to\ninstall it."}),"\n",(0,s.jsx)(n.li,{children:"If the extension is installed, the user connects to their MetaMask extension."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["If the user selects MetaMask Mobile:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If MetaMask Mobile is not installed, the user is taken to the app store to install it."}),"\n",(0,s.jsxs)(n.li,{children:["If MetaMask Mobile is installed, ",(0,s.jsx)(n.a,{href:"#metamask-mobile-connection",children:"an encrypted connection from the dapp to MetaMask\nMobile"})," is established."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"The choice between the extension and MetaMask Mobile persists until the user or dapp disconnects.\nAt that point, the dapp displays the modal again."})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"If the dapp is on a mobile platform (for example, a mobile web dapp or mobile dapp), the dapp\ndeeplinks to MetaMask Mobile."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If MetaMask Mobile is not installed, the user is taken to the app store to install it."}),"\n",(0,s.jsxs)(n.li,{children:["If MetaMask Mobile is installed, ",(0,s.jsx)(n.a,{href:"#metamask-mobile-connection",children:"an encrypted connection from the dapp to MetaMask\nMobile"})," is established."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"metamask-mobile-connection",children:"MetaMask Mobile connection"}),"\n",(0,s.jsx)(n.p,{children:"The SDK uses elliptic curve integrated encryption scheme (ECIES) to communicate with MetaMask Mobile.\nThe following sequence diagram outlines how a dapp establishes an encrypted connection with MetaMask Mobile:"}),"\n",(0,s.jsx)(n.mermaid,{value:"%%{\n  init: {\n    'sequence': {\n      'actorMargin': 100,\n      'width': 250,\n      'noteMargin': 15\n    }\n  }\n}%%\n\nsequenceDiagram\n    autonumber\n    participant Dapp as Dapp (MetaMask SDK)\n    participant Socket as Socket.io server\n    participant MMM as MetaMask Mobile\n\n    Dapp->>Dapp: Generate a Socket.io room ID and ECIES key pair\n    Dapp->>Socket: Connect using Socket.io room ID\n    Dapp->>MMM: Send deeplink containing Socket.io room ID and ECIES public key\n    MMM->>Socket: Connect using Socket.io room ID\n    MMM->>MMM: Generate an ECIES key pair\n    MMM->>Dapp: Send ECIES public key using the Socket.io channel\n\n    note over Dapp, MMM: The dapp and MetaMask Mobile generate a shared secret using their own private key and the other party's public key. All further communication is encrypted and decrypted using the shared secret.\n    loop\n    Dapp->>MMM: Send encrypted message\n    MMM->>Dapp: Send encrypted message\n    end"}),"\n",(0,s.jsx)(n.p,{children:"The flow is as follows:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["The dapp generates a UUID v4 (",(0,s.jsx)(n.a,{href:"https://socket.io/",children:"Socket.io"})," room ID) and ECIES key pair."]}),"\n",(0,s.jsx)(n.li,{children:"The dapp connects to the Socket.io server using the room ID."}),"\n",(0,s.jsx)(n.li,{children:"The dapp sends a deeplink to MetaMask Mobile (either directly, if on mobile, or through a QR\ncode, if on desktop) containing its ECIES public key and the Socket.io room ID."}),"\n",(0,s.jsx)(n.li,{children:"MetaMask Mobile opens the QR code or deeplink and connects to the Socket.io server using the room ID."}),"\n",(0,s.jsx)(n.li,{children:"MetaMask Mobile generates an ECIES key pair."}),"\n",(0,s.jsx)(n.li,{children:"MetaMask Mobile sends its ECIES public key to the dapp using the Socket.io channel, and the two\nparties generate a shared secret."}),"\n",(0,s.jsx)(n.li,{children:"The dapp and MetaMask Mobile establish an encrypted connection to send JSON-RPC API methods."}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["For all platforms except Android, the SDK uses a Socket.io server to help establish the encrypted connection.\nThe ",(0,s.jsx)(n.a,{href:"/update-snaps-resources/wallet/concepts/sdk/android",children:"Android SDK"})," uses direct local communication."]})}),"\n",(0,s.jsx)(n.h2,{id:"connection-status",children:"Connection status"}),"\n",(0,s.jsxs)(n.p,{children:["The connection between the SDK and MetaMask Mobile can ",(0,s.jsx)(n.a,{href:"#paused-connections",children:"pause"})," and\n",(0,s.jsx)(n.a,{href:"#cleared-connections",children:"clear"}),".\nYou can also ",(0,s.jsx)(n.a,{href:"#close-connections-manually",children:"close connections manually"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"paused-connections",children:"Paused connections"}),"\n",(0,s.jsx)(n.p,{children:"Connections pause after MetaMask Mobile is in background (minimized) for 20 seconds.\nThis is to accommodate OS restrictions."}),"\n",(0,s.jsx)(n.p,{children:"When a connection pauses, all traffic to MetaMask Mobile pauses, and the SDK doesn't produce any\nresponse until the user opens MetaMask Mobile again.\nThe SDK automatically deeplinks to MetaMask Mobile, so connections resume automatically.\nIf MetaMask Mobile is paused and the user completely closes MetaMask Mobile, the connection remains\npaused and resumes when the user opens it again."}),"\n",(0,s.jsx)(n.p,{children:"Because of this, polling data from MetaMask Mobile may not work for long periods of time."}),"\n",(0,s.jsx)(n.admonition,{title:"known issue",type:"info",children:(0,s.jsxs)(n.p,{children:["When MetaMask Mobile is running in the background, the connection may pause and fail to resume properly when the user reopens MetaMask.\nThe user must return to your dapp so the request is re-sent.\nThe SDK team is working on this issue, and is researching decentralized communication solutions that\nhold state such as ",(0,s.jsx)(n.a,{href:"https://waku.org/",children:"Waku"}),"."]})}),"\n",(0,s.jsx)(n.h3,{id:"cleared-connections",children:"Cleared connections"}),"\n",(0,s.jsx)(n.p,{children:"Connections clear if the user closes or refreshes your dapp, since MetaMask doesn't persist\nconnections on the dapp side.\nThis is for simplicity and security purposes."}),"\n",(0,s.jsxs)(n.p,{children:["If the user completely closes MetaMask Mobile without ",(0,s.jsx)(n.a,{href:"#paused-connections",children:"pausing the connection"}),"\nfirst, MetaMask infers that the user isn't using the wallet and closes the connection."]}),"\n",(0,s.jsx)(n.h3,{id:"close-connections-manually",children:"Close connections manually"}),"\n",(0,s.jsxs)(n.p,{children:["To close connections manually from MetaMask Mobile, go to ",(0,s.jsx)(n.strong,{children:"Settings > Experimental"}),", and select\n",(0,s.jsx)(n.strong,{children:"Clear MetaMask SDK connections"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var s=t(96540);const o={},i=s.createContext(o);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);