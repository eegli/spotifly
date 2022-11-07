"use strict";(self.webpackChunk_spotifly_website=self.webpackChunk_spotifly_website||[]).push([[644],{5644:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(2685),r=(n(7378),n(5318));const l={sidebar_position:3},i="Command Line",o={unversionedId:"command-line",id:"command-line",title:"Command Line",description:"Installing the CLI",source:"@site/docs/command-line.mdx",sourceDirName:".",slug:"/command-line",permalink:"/docs/command-line",draft:!1,editUrl:"https://github.com/eegli/spotifly/tree/main/website/docs/command-line.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Authorization",permalink:"/docs/authorization"},next:{title:"Auth Token",permalink:"/docs/packages/auth-token"}},s={},p=[{value:"Installing the CLI",id:"installing-the-cli",level:2},{value:"Usage with NPX / Yarn DLX",id:"usage-with-npx--yarn-dlx",level:2},{value:"Version and help",id:"version-and-help",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"command-line"},"Command Line"),(0,r.kt)("h2",{id:"installing-the-cli"},"Installing the CLI"),(0,r.kt)("p",null,"Spotifly's wrapper CLI can be installed globally. It ships with the latest versions of all executables from this project. The CLI and all other packages require at least Node 14."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn global add @spotifly/cli\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g @spotifly/cli\n")),(0,r.kt)("p",null,"Then:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"spotifly [package] [args...]\n")),(0,r.kt)("h2",{id:"usage-with-npx--yarn-dlx"},"Usage with NPX / Yarn DLX"),(0,r.kt)("p",null,"Instead of installing the CLI, every package can also be invoked directly with ",(0,r.kt)("inlineCode",{parentName:"p"},"npx"),". This will download and save the executable in npm's local cache but not permanently add it to the PATH. ",(0,r.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v7/commands/npx"},"How NPX works"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx @spotifly/cli@latest [...args]\n")),(0,r.kt)("p",null,"Alternatively, if you're in a workspace that uses ",(0,r.kt)("a",{parentName:"p",href:"https://yarnpkg.com/cli/dlx"},"Yarn Berry"),", you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn dlx"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn dlx @spotifly/cli@latest [...args]\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If a package is invoked with ",(0,r.kt)("inlineCode",{parentName:"p"},"npx")," and not in the cache, a prompt will ask you to install it. You can suppress the prompt by adding ",(0,r.kt)("inlineCode",{parentName:"p"},"--yes")," right after ",(0,r.kt)("inlineCode",{parentName:"p"},"npx"),". This is useful if you want to run any command in a CI/CD environment."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx --yes @spotifly/cli@latest [...args]\n"))),(0,r.kt)("h2",{id:"version-and-help"},"Version and help"),(0,r.kt)("p",null,"Invoke any command with no arguments to see the version and available commands. This is equivalent to passing the ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," flag. Of course, the classic ",(0,r.kt)("inlineCode",{parentName:"p"},"--version")," flag is supported as well."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# CLI installed\nspotifly\n\n# From NPM\nnpx @spotifly/cli --version\n")))}d.isMDXComponent=!0},5318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||l;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);