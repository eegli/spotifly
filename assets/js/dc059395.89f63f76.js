"use strict";(self.webpackChunk_spotifly_website=self.webpackChunk_spotifly_website||[]).push([[620],{3042:(e,t,a)=>{a.d(t,{q:()=>f});var r=a(8389),l=a(5310),n=a(4614),i=a(1230),o=a(3876),p=a(1015),u=a(7090),s=a(3990),d=a(719),c=a(4591),m=a(7378),k=a(9303),y=a(9057),g=a(6925);const b=e=>{let{children:t}=e;return m.createElement(g.Z,{language:"npx"},t)},f=e=>{let{cli:t,npx:a,commandMap:g,required:f,scopesKey:h}=e;const[N,C]=m.useState({}),v=e=>f.includes(e),x={...g,...N};return m.createElement(k.C,null,m.createElement(l.Z,{component:"form",sx:{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"15px 10px","& > *":{width:"25ch"},mb:2}},Object.entries(x).map((e=>{let[t,a]=e;return"boolean"==typeof a?m.createElement(l.Z,{display:"flex",justifyContent:"center",key:t},m.createElement(o.Z,{key:t,label:t,control:m.createElement(n.Z,{key:t,checked:a,onChange:()=>C({...N,[t]:!a})})})):t===h?m.createElement(i.Z,{key:t,required:v(t)},m.createElement(p.Z,null,t),m.createElement(d.Z,{multiple:!0,value:a,onChange:e=>C({...N,[t]:e.target.value}),input:m.createElement(s.Z,{label:"scope"})},y.g8.map((e=>m.createElement(u.Z,{key:e,value:e},e))))):Array.isArray(a)?m.createElement(c.Z,{variant:"outlined",value:a[0],label:t,select:!0,required:v(t),key:t,onChange:e=>{C({...N,[t]:(0,y.p1)(a,e.target.value)})}},a.map((e=>m.createElement(u.Z,{key:e,value:e},e)))):m.createElement(c.Z,{key:t,id:t,type:"text",required:v(t),label:t,value:a,onChange:e=>C({...N,[t]:e.target.value}),variant:"outlined"})}))),[["With NPX",a],["With CLI",t]].map((e=>{let[t,a]=e;return m.createElement(m.Fragment,{key:t},m.createElement(r.Z,{fontWeight:"bold"},t),m.createElement(b,null,(0,y._F)({base:a,obj:x,multiValueKeys:[h]})))})))}},9303:(e,t,a)=>{a.d(t,{C:()=>u});var r=a(4561),l=a(2905),n=a(9703),i=a(7378);const o=(0,l.Z)({palette:{mode:"dark",primary:{main:"#90caf9",light:"#b5dcfb",dark:"#6bb8f7"}}}),p=(0,l.Z)({palette:{mode:"light",primary:{main:"#4a44a2",light:"#514bb2",dark:"#433d92"}}}),u=e=>{let{children:t}=e;const{colorMode:a}=(0,r.I)(),l=(0,i.useMemo)((()=>"light"===a?p:o),[a]);return i.createElement(n.Z,{theme:l},t)}},9057:(e,t,a)=>{function r(e){let{base:t,obj:a,multiValueKeys:r=[]}=e;return t.trim()+" "+Object.entries(a).reduce(((e,t)=>{let[a,l]=t;if(!1===l||""===l)return e;if(e+="--"+a+" ",!0===l)return e;if(Array.isArray(l)){return e+=(r.includes(a)?'"'+l.join(" ")+'"':l[0])+" "}return l.indexOf(" ")>-1&&" "!==l.slice(-1)&&(l='"'+l+'"'),e+l+" "}),"").trim()}function l(e,t){const a=e.indexOf(t);return a>-1&&([e[0],e[a]]=[e[a],e[0]]),e}a.d(t,{_F:()=>r,g8:()=>n,p1:()=>l});const n=["ugc-image-upload","user-read-playback-state","user-modify-playback-state","user-read-currently-playing","user-read-private","user-read-email","user-follow-modify","user-follow-read","user-library-modify","user-library-read","app-remote-control","user-read-playback-position","user-top-read","user-read-recently-played","playlist-modify-private","playlist-read-collaborative","playlist-read-private","playlist-modify-public"]},1670:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=a(2685),l=(a(7378),a(5318)),n=a(3042);const i={title:"Library",tags:["cli"]},o=void 0,p={unversionedId:"packages/library/library",id:"packages/library/library",title:"Library",description:"npm (scoped)",source:"@site/docs/packages/library/library.mdx",sourceDirName:"packages/library",slug:"/packages/library/",permalink:"/docs/packages/library/",draft:!1,editUrl:"https://github.com/eegli/spotifly/tree/main/docs/docs/packages/library/library.mdx",tags:[{label:"cli",permalink:"/docs/tags/cli"}],version:"current",frontMatter:{title:"Library",tags:["cli"]},sidebar:"tutorialSidebar",previous:{title:"Core",permalink:"/docs/packages/core"},next:{title:"Example Output",permalink:"/docs/packages/library/example-output"}},u={},s=[{value:"CLI Usage",id:"cli-usage",level:2},{value:"Options",id:"options",level:3},{value:"Output",id:"output",level:2}],d={toc:s};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.shields.io/npm/v/@spotifly/library",alt:"npm (scoped)"})),(0,l.kt)("p",null,"Export your Spotify library to JSON."),(0,l.kt)("p",null,"You will need an access token from Spotify. You can get one from right ",(0,l.kt)("a",{parentName:"p",href:"/docs/authorization"},"here!")),(0,l.kt)("h2",{id:"cli-usage"},"CLI Usage"),(0,l.kt)("p",null,"Create your custom command using the query builder below and paste it into your terminal."),(0,l.kt)(n.q,{cli:"spotifly library",npx:"npx @spotifly/cli@latest library",commandMap:{token:"token",type:["light","full"],outDir:"",genres:!1,features:!1,compact:!1},required:["token"],mdxType:"CliCodeBlock"}),(0,l.kt)("h3",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Flag"),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"th"},"(required?)")," Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--token")),(0,l.kt)("td",{parentName:"tr",align:null},'\u2705 A Spotify user access token. Requires at least the scope "user-library-read"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--type")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c Output type per track. Either ",(0,l.kt)("inlineCode",{parentName:"td"},"full")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"light"),". Default: ",(0,l.kt)("inlineCode",{parentName:"td"},"light"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--genres")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c Include artist genres for each track. Default: ",(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--features")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c Include audio features for each track. Default: ",(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--compact")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c Output more compact/minified JSON and save disk space. Default: ",(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--outDir"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c Custom relative output directory. Default: Current directory")))),(0,l.kt)("h2",{id:"output"},"Output"),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"light")," track has a reduced set of properties:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"type TrackLight = {\n  id: string;\n  name: string;\n  album: {\n    name: string;\n    id: string;\n  };\n  artists: {\n    id: string;\n    name: string;\n  }[];\n};\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"full")," has all the track properties from the Spotify API. The next page features an example of both outputs."))}c.isMDXComponent=!0}}]);