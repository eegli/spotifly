"use strict";(self.webpackChunk_spotifly_docs=self.webpackChunk_spotifly_docs||[]).push([[683],{5947:function(e,t,n){n.d(t,{q:function(){return h}});var a=n(5861),r=n(7357),l=n(5071),i=n(4054),o=n(480),p=n(3841),s=n(431),u=n(7058),c=n(4034),d=n(1903),m=n(7294),k=n(6230),y=n(6420),f=n(4029);const g=e=>{let{children:t}=e;return m.createElement(f.Z,{language:"npx"},t)},h=e=>{let{cli:t,npx:n,commandMap:f,required:h,scopesKey:N}=e;const[b,C]=m.useState({}),v=e=>h.includes(e),E={...f,...b};return m.createElement(k.C,null,m.createElement(r.Z,{component:"form",sx:{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"15px 10px","& > *":{width:"25ch"},mb:2}},Object.entries(E).map((e=>{let[t,n]=e;return"boolean"==typeof n?m.createElement(r.Z,{display:"flex",justifyContent:"center",key:t},m.createElement(o.Z,{key:t,label:t,control:m.createElement(l.Z,{key:t,checked:n,onChange:()=>C({...b,[t]:!n})})})):t===N?m.createElement(i.Z,{key:t,required:v(t)},m.createElement(p.Z,null,t),m.createElement(c.Z,{multiple:!0,value:n,onChange:e=>C({...b,[t]:e.target.value}),input:m.createElement(u.Z,{label:"scope"})},y.g8.map((e=>m.createElement(s.Z,{key:e,value:e},e))))):Array.isArray(n)?m.createElement(d.Z,{variant:"outlined",value:n[0],label:t,select:!0,required:v(t),key:t,onChange:e=>{C({...b,[t]:(0,y.p1)(n,e.target.value)})}},n.map((e=>m.createElement(s.Z,{key:e,value:e},e)))):m.createElement(d.Z,{key:t,id:t,type:"text",required:v(t),label:t,value:n,onChange:e=>C({...b,[t]:e.target.value}),variant:"outlined"})}))),[["With npx",n],["With cli",t]].map((e=>{let[t,n]=e;return m.createElement(m.Fragment,{key:t},m.createElement(a.Z,{fontWeight:"bold"},t),m.createElement(g,null,(0,y._F)({base:n,obj:E,multiValueKeys:[N]})))})))}},6230:function(e,t,n){n.d(t,{C:function(){return s}});var a=n(2949),r=n(1265),l=n(1927),i=n(7294);const o=(0,r.Z)({palette:{mode:"dark",primary:{main:"#90caf9",light:"#b5dcfb",dark:"#6bb8f7"}}}),p=(0,r.Z)({palette:{mode:"light",primary:{main:"#4a44a2",light:"#514bb2",dark:"#433d92"}}}),s=e=>{let{children:t}=e;const{colorMode:n}=(0,a.I)(),r=(0,i.useMemo)((()=>"light"===n?p:o),[n]);return i.createElement(l.Z,{theme:r},t)}},6420:function(e,t,n){function a(e){let{base:t,obj:n,multiValueKeys:a=[]}=e;return t.trim()+" "+Object.entries(n).reduce(((e,t)=>{let[n,r]=t;if(!1===r||""===r)return e;if(e+="--"+n+" ",!0===r)return e;if(Array.isArray(r)){return e+=(a.includes(n)?'"'+r.join(" ")+'"':r[0])+" "}return r.indexOf(" ")>-1&&" "!==r.slice(-1)&&(r='"'+r+'"'),e+=r+" "}),"").trim()}function r(e,t){const n=e.indexOf(t);return n>-1&&([e[0],e[n]]=[e[n],e[0]]),e}n.d(t,{_F:function(){return a},g8:function(){return l},p1:function(){return r}});const l=["ugc-image-upload","user-read-playback-state","user-modify-playback-state","user-read-currently-playing","user-read-private","user-read-email","user-follow-modify","user-follow-read","user-library-modify","user-library-read","app-remote-control","user-read-playback-position","user-top-read","user-read-recently-played","playlist-modify-private","playlist-read-collaborative","playlist-read-private","playlist-modify-public"]},141:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var a=n(7462),r=(n(7294),n(3905)),l=n(5947);const i={title:"Auth Token",tags:["cli"]},o=void 0,p={unversionedId:"packages/auth-token",id:"packages/auth-token",title:"Auth Token",description:"npm (scoped)",source:"@site/docs/packages/auth-token.mdx",sourceDirName:"packages",slug:"/packages/auth-token",permalink:"/docs/packages/auth-token",draft:!1,editUrl:"https://github.com/eegli/spotifly/tree/main/docs/docs/packages/auth-token.mdx",tags:[{label:"cli",permalink:"/docs/tags/cli"}],version:"current",frontMatter:{title:"Auth Token",tags:["cli"]},sidebar:"tutorialSidebar",previous:{title:"Command Line",permalink:"/docs/command-line"},next:{title:"Library",permalink:"/docs/packages/library/"}},s={},u=[{value:"CLI Usage",id:"cli-usage",level:2},{value:"Options",id:"options",level:3},{value:"Programmatic",id:"programmatic",level:2},{value:"Installation",id:"installation",level:3},{value:"Options",id:"options-1",level:3},{value:"Examples",id:"examples",level:3}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/npm/v/@spotifly/auth-token",alt:"npm (scoped)"})),(0,r.kt)("p",null,"A simple and lightweight implementation of Spotify's Authorization Code Flow according to the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.spotify.com/documentation/general/guides/authorization/code-flow/"},"Spotify docs"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CLI and programmatic use"),(0,r.kt)("li",{parentName:"ul"},"Customizable")),(0,r.kt)("p",null,"This helper was mainly developed to simplify my ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eegli/spotify-history"},"Spotify history scrobbler"),"."),(0,r.kt)("h2",{id:"cli-usage"},"CLI Usage"),(0,r.kt)("p",null,"Create your custom command using the query builder below and paste it into your terminal."),(0,r.kt)(l.q,{cli:"spotifly auth-token",npx:"npx @spotifly/auth-token@latest",commandMap:{clientId:"id",clientSecret:"secret",port:"3000",scopes:["user-read-email"],fileName:"spotify-token",outDir:""},scopesKey:"scopes",required:["clientId","clientSecret"],mdxType:"CliCodeBlock"}),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Flag"),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"th"},"(required?)")," Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-ci")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"--clientId")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 The client id of your Spotify application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-cs")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"--clientSecret")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 The client secret of your Spotify application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-s")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"--scopes")),(0,r.kt)("td",{parentName:"tr",align:null},'\u274c Spotify authorization scopes. Multiple scopes need to be separated by a space. Default: "user-read-email"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-p")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"--port")),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c Port for the localhost redirect URL. Default: ",(0,r.kt)("inlineCode",{parentName:"td"},"3000"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-o")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"--outDir")),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c Custom relative output directory. Default: Current directory")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-f")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"--fileName")),(0,r.kt)("td",{parentName:"tr",align:null},'\u274c Custom name for the output JSON file. Default: "spotify-token"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--noEmit")),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c When set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", does not save the token to the file system. Default: ",(0,r.kt)("inlineCode",{parentName:"td"},"false"))))),(0,r.kt)("h2",{id:"programmatic"},"Programmatic"),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add -D @spotifly/auth-token\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -D @spotifly/auth-token\n")),(0,r.kt)("h3",{id:"options-1"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type Options = {\n  clientId: string;\n  clientSecret: string;\n  scopes?: string;\n  port?: number;\n  fileName?: string;\n  outDir?: string;\n  noEmit?: boolean;\n};\n")),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CommonJS")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { authorize } = require('@spotifly/auth-token');\n\nconst token = await authorize({\n  clientId: 'clientId',\n  clientSecret: 'clientSecret',\n  port: 3000,\n  scopes: 'user-read-email user-top-read',\n  noEmit: true,\n});\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ES Modules")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { authorize } from '@spotifly/auth-token';\n\nconst token = await authorize({\n  clientId: 'clientId',\n  clientSecret: 'clientSecret',\n  port: 3000,\n  scopes: 'user-read-email user-top-read',\n});\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"TypeScript")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { authorize, Options } from '@spotifly/auth-token';\n\nconst options: Options = {\n  clientId: 's',\n  clientSecret: 's',\n  noEmit: true,\n};\n\nconst token = await authorize(options);\n")))}d.isMDXComponent=!0}}]);