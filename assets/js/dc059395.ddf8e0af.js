"use strict";(self.webpackChunk_spotifly_website=self.webpackChunk_spotifly_website||[]).push([[620],{3042:(e,t,a)=>{a.d(t,{q:()=>f});var r=a(8389),n=a(5310),l=a(4614),i=a(1230),o=a(3876),p=a(1015),s=a(4669),d=a(3990),u=a(6394),c=a(4591),m=a(7378),k=a(9303),y=a(9057),g=a(9524);const b=e=>{let{children:t}=e;return m.createElement(g.Z,{language:"npx"},t)},f=e=>{let{cli:t,npx:a,commandMap:g,required:f,scopesKey:h}=e;const[N,C]=m.useState({}),v=e=>f.includes(e),x={...g,...N};return m.createElement(k.C,null,m.createElement(n.Z,{component:"form",sx:{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"15px 10px","& > *":{width:"25ch"},mb:2}},Object.entries(x).map((e=>{let[t,a]=e;return"boolean"==typeof a?m.createElement(n.Z,{display:"flex",justifyContent:"center",key:t},m.createElement(o.Z,{key:t,label:t,control:m.createElement(l.Z,{key:t,checked:a,onChange:()=>C({...N,[t]:!a})})})):t===h?m.createElement(i.Z,{key:t,required:v(t)},m.createElement(p.Z,null,t),m.createElement(u.Z,{multiple:!0,value:a,onChange:e=>C({...N,[t]:e.target.value}),input:m.createElement(d.Z,{label:"scope"})},y.g8.map((e=>m.createElement(s.Z,{key:e,value:e},e))))):Array.isArray(a)?m.createElement(c.Z,{variant:"outlined",value:a[0],label:t,select:!0,required:v(t),key:t,onChange:e=>{C({...N,[t]:(0,y.p1)(a,e.target.value)})}},a.map((e=>m.createElement(s.Z,{key:e,value:e},e)))):m.createElement(c.Z,{key:t,id:t,type:"text",required:v(t),label:t,value:a,onChange:e=>C({...N,[t]:e.target.value}),variant:"outlined"})}))),[["With NPX",a],["With CLI",t]].map((e=>{let[t,a]=e;return m.createElement(m.Fragment,{key:t},m.createElement(r.Z,{fontWeight:"bold"},t),m.createElement(b,null,(0,y._F)({base:a,obj:x,multiValueKeys:[h]})))})))}},9303:(e,t,a)=>{a.d(t,{C:()=>s});var r=a(4561),n=a(2905),l=a(5970),i=a(7378);const o=(0,n.Z)({palette:{mode:"dark",primary:{main:"#90caf9",light:"#b5dcfb",dark:"#6bb8f7"}}}),p=(0,n.Z)({palette:{mode:"light",primary:{main:"#4a44a2",light:"#514bb2",dark:"#433d92"}}}),s=e=>{let{children:t}=e;const{colorMode:a}=(0,r.I)(),n=(0,i.useMemo)((()=>"light"===a?p:o),[a]);return i.createElement(l.Z,{theme:n},t)}},9057:(e,t,a)=>{function r(e){let{base:t,obj:a,multiValueKeys:r=[]}=e;return t.trim()+" "+Object.entries(a).reduce(((e,t)=>{let[a,n]=t;if(!1===n||""===n)return e;if(e+="--"+a+" ",!0===n)return e;if(Array.isArray(n)){return e+=(r.includes(a)?'"'+n.join(" ")+'"':n[0])+" "}return n.indexOf(" ")>-1&&" "!==n.slice(-1)&&(n='"'+n+'"'),e+n+" "}),"").trim()}function n(e,t){const a=e.indexOf(t);return a>-1&&([e[0],e[a]]=[e[a],e[0]]),e}a.d(t,{_F:()=>r,g8:()=>l,p1:()=>n});const l=["ugc-image-upload","user-read-playback-state","user-modify-playback-state","user-read-currently-playing","user-read-private","user-read-email","user-follow-modify","user-follow-read","user-library-modify","user-library-read","app-remote-control","user-read-playback-position","user-top-read","user-read-recently-played","playlist-modify-private","playlist-read-collaborative","playlist-read-private","playlist-modify-public"]},1670:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var r=a(2685),n=(a(7378),a(5318)),l=a(3042);const i={title:"Library",tags:["cli"]},o=void 0,p={unversionedId:"packages/library/library",id:"packages/library/library",title:"Library",description:"npm Codecov",source:"@site/docs/packages/library/library.mdx",sourceDirName:"packages/library",slug:"/packages/library/",permalink:"/docs/packages/library/",draft:!1,editUrl:"https://github.com/eegli/spotifly/tree/main/website/docs/packages/library/library.mdx",tags:[{label:"cli",permalink:"/docs/tags/cli"}],version:"current",frontMatter:{title:"Library",tags:["cli"]},sidebar:"tutorialSidebar",previous:{title:"Core",permalink:"/docs/packages/core"},next:{title:"Example Output",permalink:"/docs/packages/library/example-output"}},s={},d=[{value:"Motivation",id:"motivation",level:2},{value:"CLI Usage",id:"cli-usage",level:2},{value:"Options",id:"options",level:3},{value:"Output",id:"output",level:2}],u={toc:d};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://img.shields.io/npm/v/@spotifly/library",alt:"npm"})," ",(0,n.kt)("img",{parentName:"p",src:"https://codecov.io/gh/eegli/spotifly/branch/main/graph/badge.svg?flag=library",alt:"Codecov"})),(0,n.kt)("h2",{id:"motivation"},"Motivation"),(0,n.kt)("p",null,"This package allows you to easily export your Spotify library to JSON. Each track can be enriched with the genres of its artists and its audio features (Spotify does not assign a genre to each track but rather to most artists, which thereforce act as a proxy)."),(0,n.kt)("p",null,"In order to access your library, you will need an access token from Spotify. You can get one from right ",(0,n.kt)("a",{parentName:"p",href:"/docs/authorization"},"here.")),(0,n.kt)("h2",{id:"cli-usage"},"CLI Usage"),(0,n.kt)("p",null,"Create your custom command using the query builder below and paste it into your terminal."),(0,n.kt)(l.q,{cli:"spotifly library",npx:"npx @spotifly/cli@latest library",commandMap:{token:"token",type:["light","full"],since:"",last:"","out-dir":"",genres:!1,features:!1,compact:!1},required:["token"],mdxType:"CliCodeBlock"}),(0,n.kt)("h3",{id:"options"},"Options"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Flag"),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"th"},"(required?)")," Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--token")," ",(0,n.kt)("inlineCode",{parentName:"td"},"[string]")),(0,n.kt)("td",{parentName:"tr",align:null},'\u2705 A Spotify user access token. Requires at least the scope "user-library-read"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--type")," ",(0,n.kt)("inlineCode",{parentName:"td"},"[string]")),(0,n.kt)("td",{parentName:"tr",align:null},"\u274c Output type per track. Either ",(0,n.kt)("inlineCode",{parentName:"td"},"full")," or ",(0,n.kt)("inlineCode",{parentName:"td"},"light"),". Default: ",(0,n.kt)("inlineCode",{parentName:"td"},"light"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--genres")," ",(0,n.kt)("inlineCode",{parentName:"td"},"[boolean]")),(0,n.kt)("td",{parentName:"tr",align:null},"\u274c Include artist genres for each track. Default: ",(0,n.kt)("inlineCode",{parentName:"td"},"false"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--features")," ",(0,n.kt)("inlineCode",{parentName:"td"},"[boolean]")),(0,n.kt)("td",{parentName:"tr",align:null},"\u274c Include audio features for each track. Default: ",(0,n.kt)("inlineCode",{parentName:"td"},"false"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--since")," ",(0,n.kt)("inlineCode",{parentName:"td"},"[string]")),(0,n.kt)("td",{parentName:"tr",align:null},"\u274c Only include tracks added after this date. The date string must be formatted according to the ",(0,n.kt)("a",{parentName:"td",href:"https://tc39.es/ecma262/#sec-date-time-string-format"},"ECMAScript Date Time String Format"),', e.g.: "YYYY-MM-DD". Default: All tracks')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--last [number]")),(0,n.kt)("td",{parentName:"tr",align:null},"\u274c Only include the last n (most recent) tracks. Default: All tracks")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--compact")," ",(0,n.kt)("inlineCode",{parentName:"td"},"[boolean]")),(0,n.kt)("td",{parentName:"tr",align:null},"\u274c Output more compact/minified JSON and save disk space. Default: ",(0,n.kt)("inlineCode",{parentName:"td"},"false"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--out-dir")," ",(0,n.kt)("inlineCode",{parentName:"td"},"[string]")),(0,n.kt)("td",{parentName:"tr",align:null},"\u274c Custom relative output directory. Default: Current directory")))),(0,n.kt)("p",null,"Note that if both ",(0,n.kt)("inlineCode",{parentName:"p"},"--last")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"--since")," are set, whatever condition is met first will exhaust the procedure."),(0,n.kt)("h2",{id:"output"},"Output"),(0,n.kt)("p",null,"A ",(0,n.kt)("inlineCode",{parentName:"p"},"light")," track has a reduced set of properties:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"type TrackLight = {\n  id: string;\n  name: string;\n  album: {\n    name: string;\n    id: string;\n  };\n  artists: {\n    id: string;\n    name: string;\n  }[];\n};\n")),(0,n.kt)("p",null,"Type ",(0,n.kt)("inlineCode",{parentName:"p"},"full")," has all track properties as they come from the Spotify API. The next page features an example of both outputs."))}c.isMDXComponent=!0}}]);