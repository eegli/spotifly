"use strict";(self.webpackChunk_spotifly_docs=self.webpackChunk_spotifly_docs||[]).push([[683],{3042:function(e,t,n){n.d(t,{q:function(){return h}});var a=n(8389),r=n(5310),i=n(4614),l=n(1230),o=n(3876),p=n(1015),u=n(7090),s=n(3990),c=n(7802),d=n(4591),m=n(7378),k=n(9303),f=n(8660),g=n(9626),y=function(e){var t=e.children;return m.createElement(g.Z,{language:"npx"},t)},h=function(e){var t=e.cli,n=e.npx,g=e.commandMap,h=e.required,N=e.scopesKey,b=(0,m.useState)({}),v=b[0],C=b[1],E=function(e){return h.includes(e)},x=Object.assign({},g,v);return m.createElement(k.C,null,m.createElement(r.Z,{component:"form",sx:{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"15px 10px","& > *":{width:"25ch"},mb:2}},Object.entries(x).map((function(e){var t=e[0],n=e[1];return"boolean"==typeof n?m.createElement(r.Z,{display:"flex",justifyContent:"center",key:t},m.createElement(o.Z,{key:t,label:t,control:m.createElement(i.Z,{key:t,checked:n,onChange:function(){var e;return C(Object.assign({},v,((e={})[t]=!n,e)))}})})):t===N?m.createElement(l.Z,{key:t,required:E(t)},m.createElement(p.Z,null,t),m.createElement(c.Z,{multiple:!0,value:n,onChange:function(e){var n;return C(Object.assign({},v,((n={})[t]=e.target.value,n)))},input:m.createElement(s.Z,{label:"scope"})},f.g8.map((function(e){return m.createElement(u.Z,{key:e,value:e},e)})))):Array.isArray(n)?m.createElement(d.Z,{variant:"outlined",value:n[0],label:t,select:!0,required:E(t),key:t,onChange:function(e){var a;C(Object.assign({},v,((a={})[t]=(0,f.p1)(n,e.target.value),a)))}},n.map((function(e){return m.createElement(u.Z,{key:e,value:e},e)}))):m.createElement(d.Z,{key:t,id:t,type:"text",required:E(t),label:t,value:n,onChange:function(e){var n;return C(Object.assign({},v,((n={})[t]=e.target.value,n)))},variant:"outlined"})}))),m.createElement(a.Z,{fontWeight:"bold"},"With npx"),m.createElement(y,null,(0,f._F)(n,x,[N])),m.createElement(a.Z,{fontWeight:"bold"},"Spotifly CLI"),m.createElement(y,null,(0,f._F)(t,x,[N])))}},9303:function(e,t,n){n.d(t,{C:function(){return u}});var a=n(7927),r=n(2905),i=n(9703),l=n(7378),o=(0,r.Z)({palette:{mode:"dark",primary:{main:"#e6b2e2",light:"#f0d1ee",dark:"#dc93d6"}}}),p=(0,r.Z)({palette:{mode:"light",primary:{main:"#4a44a2",light:"#514bb2",dark:"#433d92"}}}),u=function(e){var t=e.children,n=(0,a.If)().colorMode,r=(0,l.useMemo)((function(){return"light"===n?p:o}),[n]);return l.createElement(i.Z,{theme:r},t)}},8660:function(e,t,n){n.d(t,{_F:function(){return a},g8:function(){return i},p1:function(){return r}});var a=function(e,t,n){return void 0===n&&(n=[]),e+" "+Object.entries(t).reduce((function(e,t){var a=t[0],r=t[1];if(!1===r||""===r)return e;(e+=(a="--"+a)+" ",Array.isArray(r))?e+=(n.includes(a.slice(2))?'"'+r.join(" ")+'"':r[0])+" ":"string"==typeof r?(r.indexOf(" ")>-1&&" "!==r.slice(-1)&&(r='"'+r+'"'),e+=r+" "):"number"==typeof r&&(e+=r+" ");return e}),"").trim()},r=function(e,t){var n=e.indexOf(t);if(n>-1){var a=[e[n],e[0]];e[0]=a[0],e[n]=a[1]}return e},i=["ugc-image-upload","user-read-playback-state","user-modify-playback-state","user-read-currently-playing","user-read-private","user-read-email","user-follow-modify","user-follow-read","user-library-modify","user-library-read","app-remote-control","user-read-playback-position","user-top-read","user-read-recently-played","playlist-modify-private","playlist-read-collaborative","playlist-read-private","playlist-modify-public"]},8831:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return d}});var a=n(2685),r=n(1244),i=(n(7378),n(5318)),l=n(3042),o=["components"],p={title:"Auth Token",tags:["cli"]},u=void 0,s={unversionedId:"packages/auth-token",id:"packages/auth-token",title:"Auth Token",description:"npm (scoped)",source:"@site/docs/packages/auth-token.mdx",sourceDirName:"packages",slug:"/packages/auth-token",permalink:"/docs/packages/auth-token",editUrl:"https://github.com/eegli/spotifly/tree/main/docs/docs/packages/auth-token.mdx",tags:[{label:"cli",permalink:"/docs/tags/cli"}],version:"current",frontMatter:{title:"Auth Token",tags:["cli"]},sidebar:"tutorialSidebar",previous:{title:"Command Line",permalink:"/docs/command-line"},next:{title:"Library",permalink:"/docs/packages/library/"}},c={},d=[{value:"CLI Usage",id:"cli-usage",level:2},{value:"Options",id:"options",level:3},{value:"Programmatic",id:"programmatic",level:2},{value:"Installation",id:"installation",level:3},{value:"Options",id:"options-1",level:3},{value:"Examples",id:"examples",level:3}],m={toc:d};function k(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/npm/v/@spotifly/auth-token",alt:"npm (scoped)"})),(0,i.kt)("p",null,"A simple and lightweight implementation of Spotify's Authorization Code Flow according to the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.spotify.com/documentation/general/guides/authorization/code-flow/"},"Spotify docs"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"CLI and programmatic use"),(0,i.kt)("li",{parentName:"ul"},"Customizable")),(0,i.kt)("p",null,"This helper was mainly developed to simplify my ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/eegli/spotify-history"},"Spotify history scrobbler"),"."),(0,i.kt)("h2",{id:"cli-usage"},"CLI Usage"),(0,i.kt)("p",null,"Create your custom command using the query builder below and paste it into your terminal."),(0,i.kt)(l.q,{cli:"spotifly auth-token",npx:"npx @spotifly/auth-token@latest",commandMap:{clientId:"id",clientSecret:"secret",port:3e3,scopes:["user-read-email"],fileName:"spotify-token",outDir:""},scopesKey:"scopes",required:["clientId","clientSecret"],mdxType:"CliCodeBlock"}),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Flag"),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},(0,i.kt)("em",{parentName:"strong"},"(required?)"))," Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-ci")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"--clientId")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705 The client id of your Spotify application")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-cs")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"--clientSecret")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705 The client secret of your Spotify application")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-p")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"--port")),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c Port for the localhost redirect URL. Default: ",(0,i.kt)("inlineCode",{parentName:"td"},"3000"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-s")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"--scopes")),(0,i.kt)("td",{parentName:"tr",align:null},'\u274c Spotify authentication scopes. Multiple scopes need to be separated by a space. Default: "user-read-email"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-o")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"--outDir")),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c Custom relative output directory. Default: Current directory")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-f")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"--fileName")),(0,i.kt)("td",{parentName:"tr",align:null},'\u274c Custom name for the output JSON file. Default: "spotify-token"')))),(0,i.kt)("h2",{id:"programmatic"},"Programmatic"),(0,i.kt)("h3",{id:"installation"},"Installation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add -D spotify-auth-token\n")),(0,i.kt)("p",null,"or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install spotify-auth-token --save-dev\n")),(0,i.kt)("h3",{id:"options-1"},"Options"),(0,i.kt)("p",null,"The options and defaults are the same as for the CLI plus ",(0,i.kt)("inlineCode",{parentName:"p"},"noEmit"),". If\n",(0,i.kt)("inlineCode",{parentName:"p"},"noEmit")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", the token will not be saved to the file\nsystem."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type Options = {\n  clientId: string;\n  clientSecret: string;\n  port?: number;\n  scopes?: string;\n  fileName?: string;\n  outDir?: string;\n  noEmit?: boolean;\n};\n")),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"CommonJS")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { authorize } = require('spotify-auth-token/dist/authorize');\n\nconst token = await authorize({\n  clientId: 'clientId',\n  clientSecret: 'clientSecret',\n  port: 3000,\n  scopes: 'user-read-email user-top-read',\n  noEmit: true,\n});\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ES Modules")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import authorize from 'spotify-auth-token';\n\nconst token = await authorize({\n  clientId: 'clientId',\n  clientSecret: 'clientSecret',\n  port: 3000,\n  scopes: 'user-read-email user-top-read',\n});\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"TypeScript")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import authorize, { UserConfig } from 'spotify-auth-token';\n\nconst config: UserConfig = {\n  clientId: 'clientId',\n  clientSecret: 'clientSecret',\n  port: 3000,\n  scopes: 'user-read-email user-top-read',\n};\n\nconst token = await authorize(config);\n")))}k.isMDXComponent=!0}}]);